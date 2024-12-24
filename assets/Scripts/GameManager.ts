import { _decorator, Component, Vec3, EventMouse, input, Input, Animation, Node, Prefab, CCInteger, instantiate, PhysicsSystem2D } from 'cc';
import { PlayerController } from './PlayerController';
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
    @property({ type: Prefab })
    public boxPrefab: Prefab | null = null;
    @property({ type: Prefab })
    public featherPrefab: Prefab | null = null;
    @property({ type: Prefab })
    public firePrefab: Prefab | null = null;
    @property({ type: CCInteger })
    public roadLength: number = 50;

    public roadHeight: number = 100;

    private _road = [];

    @property({ type: PlayerController })
    public playerCtrl: PlayerController | null = null;

    start() {
        this.setCurState(GameState.GS_INIT);
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
        this.startMenu2.active = false;
        this.startExit.active = false;
        this.startStart.active = false;
        this.startSettings.active = false;
        this.gameGround1.active = true;
        this.startGame();
    }
    init() {
    }
    startGame() {
        PhysicsSystem2D.instance.enable = true;
        this.generateRoad();
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
                break;
        }
    }

    //生成地块
    generateRoad() {
        this.node.removeAllChildren();
        this._road = [];
        for (let i = 1; i <= this.roadHeight; i++) {
            let _roadCur: BlockType[] = [];
            for (let j = 1; j <= this.roadLength; j++) {
                if ((i % 2 == 1)) {
                    _roadCur[j] = Math.floor(Math.random() * 2);
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
                        this.node.addChild(block);
                        block.setPosition((j - 1) * BlockSizeY, (i - 50) * BlockSizeX, 0);
                    }
                } else if (i - 50 == -1) {
                    block = this.spawnBlockByType(BlockType.BT_STONE);
                    this.node.addChild(block);
                    block.setPosition((j - 1) * BlockSizeY, (i - 50) * BlockSizeX, 0);
                }
            }
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
