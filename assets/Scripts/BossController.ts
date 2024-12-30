import { _decorator, Component, Node, Animation, UIOpacity, Camera, Input, input, EventKeyboard, KeyCode } from 'cc';
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

    start() {
    }
    initBoss() {
        this.Ground.active = true;
        this.BgAnim.play('bg4appear');
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
    onKeyDown() {

    }
    onKeyUp() {

    }
    update(deltaTime: number) {

    }
}


