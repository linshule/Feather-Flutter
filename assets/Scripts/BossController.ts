import { _decorator, Component, Node, Animation, UIOpacity, Camera, Input, input, EventKeyboard, KeyCode, RigidBody2D, Vec3, Vec2, Prefab, instantiate, Collider2D, Label, Contact2DType, IPhysics2DContact } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BossController')
export class BossController extends Component {
    @property(Animation)
    BgAnim: Animation = null;
    @property({ type: Node })
    Ground: Node = null;
    @property({ type: Node })
    Player: Node = null;
    @property({ type: Node })
    Boss: Node = null;

    _starMove: boolean = false;
    _startGame: boolean = false;
    public Body: RigidBody2D | null = null;
    public bossBody: RigidBody2D | null = null;

    public _isJump: boolean = false;
    public _isMove: boolean = false;
    private jumpSpeed: number = 0;
    private moveSpeed: number = 0;

    private strong: number = 0;
    private Hurt: number = 0;
    private Bat: Node | null = null;
    private batAnim: Animation | null = null;
    private curBlood: number = 10;
    @property({ type: Prefab })
    public featherPrefab: Prefab | null = null;

    @property({ type: Node })
    Score: Node = null;
    start() {
        this.Body = this.Player.getComponent(RigidBody2D);
        this.bossBody = this.Boss.getComponent(RigidBody2D);
        this.Bat = this.Player.getChildByName("Bat");
        this.batAnim = this.Bat.getComponent(Animation);
        this.node.on('hitBlood', this.updateScore, this);
    }
    private intervalId;
    initBoss(score: number) {
        this.Ground.active = true;
        this.BgAnim.play('bg4appear');
        this.initInput(true);
        this._startGame = true;
        this.strong = score;
        this.intervalId = setInterval(() => {
            let curFeather = this.getFeather();
            if (curFeather) this.Boss.addChild(curFeather);
        }, 500);
        setInterval(() => {
            this.Boss.removeAllChildren();
        }, 10000);
    }
    initInput(cur: boolean) {
        if (cur) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        } else {
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }
    }
    updateScore(curScore: number) {
        this.curBlood -= curScore;
        this.Score.getComponent(Label).string = this.curBlood.toString();
    }
    onContactFeather(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.node == this.Boss) this.node.emit('hitBlood', this.strong);
        if (otherCollider.node == this.Player) {
            selfCollider.body.linearVelocity = new Vec2(0, 0);
            selfCollider.body.applyLinearImpulseToCenter(new Vec2(10, 10), true);
        }
        if (otherCollider.node == this.Bat) {
            selfCollider.body.linearVelocity = new Vec2(0, 0);
            selfCollider.body.applyLinearImpulseToCenter(new Vec2(100, 100), true);
        }
    }
    getFeather() {
        if (!this.featherPrefab) {
            return null;
        }
        let block: Node | null = null;
        block = instantiate(this.featherPrefab);
        block.setScale(2, 2);
        Object.assign(block, { hit: 0 });
        let blockRigid = block.getComponent(RigidBody2D);
        let blockCollider = block.getComponent(Collider2D);
        blockRigid.gravityScale = 1;
        blockRigid.enabledContactListener = false;
        setTimeout(() => {
            blockRigid.enabledContactListener = true;
        }, 1000);
        blockCollider.sensor = false;
        if (blockCollider) {
            blockCollider.on(Contact2DType.BEGIN_CONTACT, this.onContactFeather, this);
        }
        return block;
    }
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.Player.setScale(-1, 1);
                this._isMove = true;
                this.moveSpeed = -10;
                break;
            case KeyCode.KEY_D:
                this.Player.setScale(1, 1);
                this._isMove = true;
                this.moveSpeed = 10;
                break;
            case KeyCode.KEY_W:
                this._isJump = true;
                this.jumpSpeed = 500;
                break;
            case KeyCode.KEY_J:
                this.Hurt = 1;
                this.batAnim.play('batsmall');
                break;
            case KeyCode.KEY_K:
                this.Hurt = 0;
                this.batAnim.play('batstop');
                break;
            case KeyCode.KEY_U:
                this.Hurt = 3;
                this.batAnim.play('batbig');
                break;
        }
    }
    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this._isMove = false;
                this.moveSpeed = 0;
                break;
            case KeyCode.KEY_D:
                this._isMove = false;
                this.moveSpeed = 0;
                break;
            case KeyCode.KEY_W:
        }
    }
    update(deltaTime: number) {
        if (this._startGame) {
            let fu = Math.random() > 0.5 ? 1 : -1;
            this.bossBody.linearVelocity = new Vec2(fu * Math.random() * 20, fu * Math.random() * 20);
            if (this.curBlood < 0) {
                clearInterval(this.intervalId);
                this.Boss.removeAllChildren();
                this.Score.getComponent(Label).string = 'YOU WIN!';
                this._startGame = false;
            }
        }
        if (this._isJump) {
            this.Body.applyForceToCenter(new Vec2(0, this.jumpSpeed), true);
            this._isJump = false;
        }
        if (this._isMove) {
            let curY = this.Body.linearVelocity;
            this.Body.linearVelocity = new Vec2(this.moveSpeed, curY.y);
        }
    }
}


