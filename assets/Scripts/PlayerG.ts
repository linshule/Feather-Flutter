import { _decorator, Component, Node, Prefab, RigidBody2D, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerG')
export class PlayerG extends Component {
    @property({ type: Node })
    private player: Node = null;
    @property({ type: Prefab })
    public boxPrefab: Prefab | null = null;

    private playerRiGid: any = null;
    private boxCollider: any = null;
    start() {
        this.playerRiGid = this.getComponent(RigidBody2D);
        this.boxCollider = this.getComponent(BoxCollider2D);
    }

    update(deltaTime: number) {

    }
}


