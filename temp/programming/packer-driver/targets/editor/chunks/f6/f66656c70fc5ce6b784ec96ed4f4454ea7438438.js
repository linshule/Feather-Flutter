System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Vec3, Vec2, RigidBody2D, _dec, _class, _crd, ccclass, property, PlayerController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      RigidBody2D = _cc.RigidBody2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94850ZgayNCl64Ths7l8anm", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'input', 'Node', 'Input', 'EventKeyboard', 'KeyCode', 'Vec3', 'Vec2', 'RigidBody2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec(_class = class PlayerController extends Component {
        constructor(...args) {
          super(...args);
          this._starMove = false;
          this._curPos = new Vec3();
          this._tarPos = new Vec3();
          this.Body = null;
          this._isJump = false;
          this._isMove = false;
          this.jumpSpeed = 0;
          this.moveSpeed = 0;
        }

        start() {
          this.Body = this.getComponent(RigidBody2D);
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

        onKeyDown(event) {
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
          if (this._isJump) {
            this.Body.applyForceToCenter(new Vec2(0, this.jumpSpeed), true);
            this._isJump = false;
          }

          if (this._isMove) {
            this.Body.applyLinearImpulseToCenter(new Vec2(this.moveSpeed, 0), true);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f66656c70fc5ce6b784ec96ed4f4454ea7438438.js.map