import { _decorator, Component, Vec3, EventMouse, input, Input, Animation, Node, Prefab, CCInteger, AudioSource, instantiate, PhysicsSystem2D, Collider2D, Contact2DType, IPhysics2DContact, animation, AnimationState, Label, RigidBody2D, Vec2, BoxCollider2D } from 'cc';
import { PlayerController } from './PlayerController';
import { BossController } from './BossController';
const { ccclass, property } = _decorator;

enum GameState {
    GS_INIT,
    GS_PLAYING,
    GS_END,
};

enum BlockType {
    BT_NONE,
    BT_STONE,
    BT_FIRE,
    BT_FEATHER,
};
const BlockSizeX = 75;
const BlockSizeY = 75;
@ccclass('GameManger')
export class GameManger extends Component {
    @property({ type: Node })
    startButton1: Node = null;//从第一个开始界面调到第二个界面的按钮
    @property({ type: Node })
    startMenu1: Node = null;//第一个背景
    @property({ type: Node })
    startMenu2: Node = null;
    @property({ type: Node })
    startSettings: Node = null;
    @property({ type: Node })
    startStart: Node = null;
    @property({ type: Node })
    startExit: Node = null;
    @property({ type: Node })
    gameGround1: Node = null;
    @property({ type: Node })
    gameGround2: Node = null;
    @property({ type: Node })
    player: Node = null;
    @property({ type: Node })
    Score: Node = null;
    @property({ type: Prefab })
    public boxPrefab: Prefab | null = null;
    @property({ type: Prefab })
    public featherPrefab: Prefab | null = null;
    @property({ type: Prefab })
    public firePrefab: Prefab | null = null;
    @property({ type: CCInteger })
    public roadLength: number = 30;
    public roadHeight: number = 30;
    public feacherCount: number = 0;
    private _road = [];

    @property({ type: PlayerController })
    public playerCtrl: PlayerController | null = null;

    @property({ type: BossController })
    public bossCtrl: BossController | null = null;

    @property({ type: Node })
    StCo: Node = null;

    @property({ type: Node })
    camera: Node = null;

    @property({ type: Node })
    bg4: Node = null;
    start() {
        this.setCurState(GameState.GS_INIT);
        this.node.on('GetScore', this.updateScore, this)
    }
    updateScore(curScore: number) {
        this.Score.getComponent(Label).string = curScore.toString();
    }
    oneTotwo() {
        this.startButton1.active = false;
        this.startMenu1.active = false;
        this.startMenu2.active = true;
        this.startExit.active = true;
        this.startStart.active = true;
        this.startSettings.active = true;
    }
    twoTogame() {
        this.startGame();
    }
    init() {
        this.StCo.getComponent(AudioSource).play();
    }
    startGame() {
        this.StCo.getComponent(AudioSource).pause();
        this.startMenu2.active = false;
        this.startExit.active = false;
        this.startStart.active = false;
        this.startSettings.active = false;
        this.gameGround1.active = true;
        PhysicsSystem2D.instance.enable = true;
        this.generateRoad();
        this.feacherCount = 0;
        this.player.active = true;
        this.playerCtrl.initInput(true);
    }
    setCurState(value: GameState) {
        switch (value) {
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                this.startGame();
                break;
            case GameState.GS_END:
                this.endGame1();
                break;
        }
    }
    endGame1() {
        this.playerCtrl.initInput(false);
        this.playerCtrl._isJump = false;
        this.playerCtrl._isMove = false;
        this.playerCtrl.Body.gravityScale = 0;
        this.playerCtrl.Body.linearVelocity = new Vec2(0, 0);
        let curChildren = this.node.children;
        for (let cur of curChildren) {
            cur.setScale(0, 0);
        }
        let playerRigid = this.gameGround1.getComponent(Collider2D);
        if (playerRigid) {
            playerRigid.body.enabledContactListener = false;
        }
        let scoreAnim = this.Score.getComponent(Animation);
        if (scoreAnim) {
            scoreAnim.play('score_bigger');
        }
        this.player.active = false;
        setTimeout(() => {
            this.node.removeAllChildren();
        }, 100);
        setTimeout(() => {
            this.toBoss();
        }, 3000);
    }
    toBoss() {
        this.gameGround1.getComponent(Animation).play('bg3xs');
        setTimeout(() => {
            this.camera.active = false;
            this.gameGround1.active = false;
            this.bossCtrl.initBoss(this.feacherCount);
            setTimeout(() => {
                this.generateRoadBoss();
            }, 1000);
        }, 1000);

    }
    generateRoadBoss() {
        for (let i = -10; i <= 10; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition((i) * BlockSizeY, 4.3 * BlockSizeX, 0);
        }
        for (let i = -10; i <= 10; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition((i) * BlockSizeY, -4.3 * BlockSizeX, 0);
        }
        for (let i = -4.3; i <= 4.3; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(-10 * BlockSizeY, (i) * BlockSizeX, 0);
        }
        for (let i = -4.3; i <= 4.3; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(10 * BlockSizeY, (i) * BlockSizeX, 0);
        }
    }
    onContactFeather(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        let block = selfCollider.node;
        let blockAnimation = block.getComponent(Animation);
        blockAnimation.play('feather_fly');
        this.playerCtrl.Bounce(20);
        selfCollider.body.enabledContactListener = false;
        this.feacherCount++;
        this.node.emit('GetScore', this.feacherCount);
        // let blockAnimationState = blockAnimation.getState('feather_fly');
        setTimeout(() => {
            block.active = false;
        }, 2000);
    }
    onContactFire(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        selfCollider.body.enabledContactListener = false;
        this.setCurState(GameState.GS_END);
    }
    //生成地块
    generateRoad() {
        this.node.removeAllChildren();
        this._road = [];
        for (let i = 1; i <= this.roadHeight; i++) {
            let _roadCur: BlockType[] = [];
            for (let j = 1; j <= this.roadLength; j++) {
                if ((i % 2 == 1)) {
                    _roadCur[j] = Math.floor(Math.random() * 4);
                }
                else {
                    _roadCur[j] = 0;
                }
            }
            this._road[i] = _roadCur;
        }
        for (let i = 1; i <= this.roadHeight; i++) {
            for (let j = 1; j <= this.roadLength; j++) {
                let block: Node | null = this.spawnBlockByType(this._road[i][j]);
                if (j - 1 != 0) {
                    if (block) {
                        if (this._road[i][j] == 3) {
                            let curNode = new Node;
                            curNode.addChild(block);
                            this.node.addChild(curNode);
                            block.setScale(1, -1);
                            let collider = block.getComponent(Collider2D);
                            if (collider) {
                                collider.on(Contact2DType.BEGIN_CONTACT, this.onContactFeather, this);
                            }
                            curNode.setPosition((j - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
                            continue;
                        }
                        this.node.addChild(block);
                        if (this._road[i][j] == 2) {
                            let fireAnimation = block.getComponent(Animation);
                            if (fireAnimation) {
                                fireAnimation.play('fire1');
                            }
                            let collider = block.getComponent(Collider2D);
                            if (collider) {
                                collider.on(Contact2DType.BEGIN_CONTACT, this.onContactFire, this);
                            }
                        }
                        block.setPosition((j - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
                    }
                } else if (i - 15 == -1) {
                    block = this.spawnBlockByType(BlockType.BT_STONE);
                    this.node.addChild(block);
                    block.setPosition((j - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
                }
            }
        }

        for (let i = -5; i <= this.roadLength + 5; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((i - 1) * BlockSizeY, (this.roadHeight - 15 + 5) * BlockSizeX, 0);
        }
        for (let i = -5; i <= this.roadLength + 5; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((i - 1) * BlockSizeY, (- 15 - 5) * BlockSizeX, 0);
        }
        for (let i = -5; i <= this.roadHeight + 5; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((this.roadLength + 5 - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
        }
        for (let i = -5; i <= this.roadHeight + 5; i++) {
            let block: Node | null = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((-5 - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
        }
    }
    spawnBlockByType(type: BlockType) {
        if (!this.boxPrefab) {
            return null;
        }
        let block: Node | null = null;
        switch (type) {
            case BlockType.BT_STONE:
                block = instantiate(this.boxPrefab);
                break;
            case BlockType.BT_FIRE:
                block = instantiate(this.firePrefab);
                break;
            case BlockType.BT_FEATHER:
                block = instantiate(this.featherPrefab);
                break;
        }
        return block;
    }
    update(deltaTime: number) {

    }
}
