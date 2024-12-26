import { _decorator, Component, input, Node, Input, EventKeyboard, KeyCode, Vec3, Vec2, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    _starMove: boolean = false;
    private _curPos: Vec3 = new Vec3;
    private _tarPos: Vec3 = new Vec3;
    public Body: RigidBody2D | null = null;

    public _isJump: boolean = false;
    public _isMove: boolean = false;
    private jumpSpeed: number = 0;
    private moveSpeed: number = 0;
    start() {
        this.Body = this.getComponent(RigidBody2D);
    }
    Bounce(speed: number) {
        this.Body.applyLinearImpulseToCenter(new Vec2(0, speed), true);
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
    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.node.getChildByName("Player").setScale(-1, 1);
                this._isMove = true;
                this.moveSpeed = -0.3;
                break;
            case KeyCode.KEY_D:
                this.node.getChildByName("Player").setScale(1, 1);
                this._isMove = true;
                this.moveSpeed = 0.3;
                break;
            case KeyCode.KEY_W:
                this._isJump = true;
                this.jumpSpeed = 1000;
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
        if (this._isJump) {
            this.Body.applyForceToCenter(new Vec2(0, this.jumpSpeed), true);
            this._isJump = false;
        }
        if (this._isMove) {
            this.Body.applyLinearImpulseToCenter(new Vec2(this.moveSpeed, 0), true);
        }
    }
}


