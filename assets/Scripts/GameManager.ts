import { _decorator, Component, Vec3, EventMouse, input, Input, Animation, Node } from 'cc';
const { ccclass, property } = _decorator;

enum GameState {
    GS_INIT,
    GS_PLAYING,
    GS_END,
};

@ccclass('GameManger')
export class GameManger extends Component {
    @property({ type: Node })
    startButton1: Node = null;//从第一个开始界面调到第二个界面的按钮
    @property(Node)
    startMenu1: Node = null;
    start() {
        this.setCurState(GameState.GS_INIT);
    }
    setInputActive(active: boolean) {
        if (active) {
            input.on(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }
        else {
            input.off(Input.EventType.MOUSE_UP, this.onMouseUp, this);
        }
    }
    onMouseUp(event: EventMouse) {
        if (event.getButton() === 0) {
            this.startButton1.active = true;
        }
    }
    init() {
        this.generateRoad();
    }

    setCurState(value: GameState) {
        switch (value) {
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                break;
            case GameState.GS_END:
                break;
        }
    }

    generateRoad() {
        this.node.removeAllChildren();

    }
    update(deltaTime: number) {

    }
}


