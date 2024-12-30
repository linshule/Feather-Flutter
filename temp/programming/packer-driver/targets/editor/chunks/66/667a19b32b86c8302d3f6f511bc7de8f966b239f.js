System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, Input, input, KeyCode, RigidBody2D, Vec2, Prefab, instantiate, Collider2D, Label, Contact2DType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, BossController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Animation = _cc.Animation;
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      RigidBody2D = _cc.RigidBody2D;
      Vec2 = _cc.Vec2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      Label = _cc.Label;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c376hUuOBGUb3twUBgKohI", "BossController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'UIOpacity', 'Camera', 'Input', 'input', 'EventKeyboard', 'KeyCode', 'RigidBody2D', 'Vec3', 'Vec2', 'Prefab', 'instantiate', 'Collider2D', 'Label', 'Contact2DType', 'IPhysics2DContact']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossController", BossController = (_dec = ccclass('BossController'), _dec2 = property(Animation), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class BossController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BgAnim", _descriptor, this);

          _initializerDefineProperty(this, "Ground", _descriptor2, this);

          _initializerDefineProperty(this, "Player", _descriptor3, this);

          _initializerDefineProperty(this, "Boss", _descriptor4, this);

          this._starMove = false;
          this._startGame = false;
          this.Body = null;
          this.bossBody = null;
          this._isJump = false;
          this._isMove = false;
          this.jumpSpeed = 0;
          this.moveSpeed = 0;
          this.strong = 0;
          this.Hurt = 0;
          this.Bat = null;
          this.batAnim = null;
          this.curBlood = 10;

          _initializerDefineProperty(this, "featherPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "Score", _descriptor6, this);

          this.intervalId = void 0;
        }

        start() {
          this.Body = this.Player.getComponent(RigidBody2D);
          this.bossBody = this.Boss.getComponent(RigidBody2D);
          this.Bat = this.Player.getChildByName("Bat");
          this.batAnim = this.Bat.getComponent(Animation);
          this.node.on('hitBlood', this.updateScore, this);
        }

        initBoss(score) {
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

        initInput(cur) {
          if (cur) {
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          } else {
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
            input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          }
        }

        updateScore(curScore) {
          this.curBlood -= curScore;
          this.Score.getComponent(Label).string = this.curBlood.toString();
        }

        onContactFeather(selfCollider, otherCollider, contact) {
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

          let block = null;
          block = instantiate(this.featherPrefab);
          block.setScale(2, 2);
          Object.assign(block, {
            hit: 0
          });
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

        onKeyDown(event) {
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

        onKeyUp(event) {
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

        update(deltaTime) {
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BgAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Ground", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "featherPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "Score", [_dec7], {
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
//# sourceMappingURL=667a19b32b86c8302d3f6f511bc7de8f966b239f.js.map