import { _decorator, Component, input, Node, Input, EventKeyboard, KeyCode, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    _starMove: boolean = false;
    private _curPos: Vec3 = new Vec3;
    private _tarPos: Vec3 = new Vec3;
    start() {

    }

    initInput(cur: boolean) {
        if (cur) {
            input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            //           input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        } else {
            input.off(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            //           input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        }
    }

    move(retx: number, rety: number) {
        this._starMove = true;
        let _speed: number = 20;
        this.node.getPosition(this._curPos);
        Vec3.add(this._tarPos, this._curPos, new Vec3(_speed * retx, _speed * rety, 0));
    }

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.node.getChildByName("Player").setScale(-1, 1);
                this.move(-1, 0);
                break;
            case KeyCode.KEY_D:
                this.node.getChildByName("Player").setScale(1, 1);
                this.move(1, 0);
                break;
            case KeyCode.KEY_W:
                //this.node.getChildByName("Player").setScale(1, 1);
                this.move(0, 1);
                break;
            case KeyCode.KEY_S:
                this.move(0, -1);
                break;
        }
    }

    update(deltaTime: number) {
        if (this._starMove) {
            this.node.setPosition(this._tarPos);
        }
    }
}


