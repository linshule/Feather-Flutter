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
        this.startGame();

    }
    twoTogame() {
        this.startMenu2.active = false;
        this.startExit.active = false;
        this.startStart.active = false;
        this.startSettings.active = false;
        this.gameGround1.active = true;
        let initPosition: Vec3 = new Vec3(-565, -240, 0);
        this.player.setPosition(initPosition);
        this.player.active = true;
    }
    init() {
        this.generateRoad();
    }
    startGame() {
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

    generateRoad() {
    }
    update(deltaTime: number) {

    }
}


