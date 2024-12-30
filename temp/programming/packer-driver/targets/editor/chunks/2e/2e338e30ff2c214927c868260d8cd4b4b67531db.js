System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, Node, Prefab, CCInteger, AudioSource, instantiate, PhysicsSystem2D, Collider2D, Contact2DType, Label, Vec2, PlayerController, BossController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _crd, ccclass, property, GameState, BlockType, BlockSizeX, BlockSizeY, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBossController(extras) {
    _reporterNs.report("BossController", "./BossController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      AudioSource = _cc.AudioSource;
      instantiate = _cc.instantiate;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      PlayerController = _unresolved_2.PlayerController;
    }, function (_unresolved_3) {
      BossController = _unresolved_3.BossController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b96d4rusrxEw5RETGob6ON0", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'EventMouse', 'input', 'Input', 'Animation', 'Node', 'Prefab', 'CCInteger', 'AudioSource', 'instantiate', 'PhysicsSystem2D', 'Collider2D', 'Contact2DType', 'IPhysics2DContact', 'animation', 'AnimationState', 'Label', 'RigidBody2D', 'Vec2', 'BoxCollider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["GS_INIT"] = 0] = "GS_INIT";
        GameState[GameState["GS_PLAYING"] = 1] = "GS_PLAYING";
        GameState[GameState["GS_END"] = 2] = "GS_END";
        return GameState;
      }(GameState || {});

      ;

      BlockType = /*#__PURE__*/function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
        BlockType[BlockType["BT_FIRE"] = 2] = "BT_FIRE";
        BlockType[BlockType["BT_FEATHER"] = 3] = "BT_FEATHER";
        return BlockType;
      }(BlockType || {});

      ;
      BlockSizeX = 75;
      BlockSizeY = 75;

      _export("GameManger", GameManger = (_dec = ccclass('GameManger'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec12 = property({
        type: Prefab
      }), _dec13 = property({
        type: Prefab
      }), _dec14 = property({
        type: Prefab
      }), _dec15 = property({
        type: CCInteger
      }), _dec16 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec17 = property({
        type: _crd && BossController === void 0 ? (_reportPossibleCrUseOfBossController({
          error: Error()
        }), BossController) : BossController
      }), _dec18 = property({
        type: Node
      }), _dec19 = property({
        type: Node
      }), _dec20 = property({
        type: Node
      }), _dec(_class = (_class2 = class GameManger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startButton1", _descriptor, this);

          //从第一个开始界面调到第二个界面的按钮
          _initializerDefineProperty(this, "startMenu1", _descriptor2, this);

          //第一个背景
          _initializerDefineProperty(this, "startMenu2", _descriptor3, this);

          _initializerDefineProperty(this, "startSettings", _descriptor4, this);

          _initializerDefineProperty(this, "startStart", _descriptor5, this);

          _initializerDefineProperty(this, "startExit", _descriptor6, this);

          _initializerDefineProperty(this, "gameGround1", _descriptor7, this);

          _initializerDefineProperty(this, "gameGround2", _descriptor8, this);

          _initializerDefineProperty(this, "player", _descriptor9, this);

          _initializerDefineProperty(this, "Score", _descriptor10, this);

          _initializerDefineProperty(this, "boxPrefab", _descriptor11, this);

          _initializerDefineProperty(this, "featherPrefab", _descriptor12, this);

          _initializerDefineProperty(this, "firePrefab", _descriptor13, this);

          _initializerDefineProperty(this, "roadLength", _descriptor14, this);

          this.roadHeight = 30;
          this.feacherCount = 0;
          this._road = [];

          _initializerDefineProperty(this, "playerCtrl", _descriptor15, this);

          _initializerDefineProperty(this, "bossCtrl", _descriptor16, this);

          _initializerDefineProperty(this, "StCo", _descriptor17, this);

          _initializerDefineProperty(this, "camera", _descriptor18, this);

          _initializerDefineProperty(this, "bg4", _descriptor19, this);
        }

        start() {
          this.setCurState(GameState.GS_INIT);
          this.node.on('GetScore', this.updateScore, this);
        }

        updateScore(curScore) {
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

        setCurState(value) {
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
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(i * BlockSizeY, 4.3 * BlockSizeX, 0);
          }

          for (let i = -10; i <= 10; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(i * BlockSizeY, -4.3 * BlockSizeX, 0);
          }

          for (let i = -4.3; i <= 4.3; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(-10 * BlockSizeY, i * BlockSizeX, 0);
          }

          for (let i = -4.3; i <= 4.3; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.bg4.addChild(block);
            block.setPosition(10 * BlockSizeY, i * BlockSizeX, 0);
          }
        }

        onContactFeather(selfCollider, otherCollider, contact) {
          let block = selfCollider.node;
          let blockAnimation = block.getComponent(Animation);
          blockAnimation.play('feather_fly');
          this.playerCtrl.Bounce(20);
          selfCollider.body.enabledContactListener = false;
          this.feacherCount++;
          this.node.emit('GetScore', this.feacherCount); // let blockAnimationState = blockAnimation.getState('feather_fly');

          setTimeout(() => {
            block.active = false;
          }, 2000);
        }

        onContactFire(selfCollider, otherCollider, contact) {
          selfCollider.body.enabledContactListener = false;
          this.setCurState(GameState.GS_END);
        } //生成地块


        generateRoad() {
          this.node.removeAllChildren();
          this._road = [];

          for (let i = 1; i <= this.roadHeight; i++) {
            let _roadCur = [];

            for (let j = 1; j <= this.roadLength; j++) {
              if (i % 2 == 1) {
                _roadCur[j] = Math.floor(Math.random() * 4);
              } else {
                _roadCur[j] = 0;
              }
            }

            this._road[i] = _roadCur;
          }

          for (let i = 1; i <= this.roadHeight; i++) {
            for (let j = 1; j <= this.roadLength; j++) {
              let block = this.spawnBlockByType(this._road[i][j]);

              if (j - 1 != 0) {
                if (block) {
                  if (this._road[i][j] == 3) {
                    let curNode = new Node();
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
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((i - 1) * BlockSizeY, (this.roadHeight - 15 + 5) * BlockSizeX, 0);
          }

          for (let i = -5; i <= this.roadLength + 5; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((i - 1) * BlockSizeY, (-15 - 5) * BlockSizeX, 0);
          }

          for (let i = -5; i <= this.roadHeight + 5; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((this.roadLength + 5 - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
          }

          for (let i = -5; i <= this.roadHeight + 5; i++) {
            let block = this.spawnBlockByType(BlockType.BT_STONE);
            this.node.addChild(block);
            block.setPosition((-5 - 1) * BlockSizeY, (i - 15) * BlockSizeX, 0);
          }
        }

        spawnBlockByType(type) {
          if (!this.boxPrefab) {
            return null;
          }

          let block = null;

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

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startButton1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startMenu1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startMenu2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startSettings", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "startStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "startExit", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "gameGround1", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "gameGround2", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "Score", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "featherPrefab", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "firePrefab", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 30;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "bossCtrl", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "StCo", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "bg4", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e338e30ff2c214927c868260d8cd4b4b67531db.js.map