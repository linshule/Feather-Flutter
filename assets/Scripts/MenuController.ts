import { _decorator, Component, Vec3, EventMouse, input, Input, Animation, animation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuController')

export class MenuController extends Component {
    @property(Animation)
    BodyAnim: Animation = null;

    start() {
        this.BodyAnim.play('button_bigger')
    }

    update(deltaTime: number) {

    }
}


