System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, KeyCode, Vec3, _dec, _class, _crd, ccclass, property, PlayerController;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94850ZgayNCl64Ths7l8anm", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'input', 'Node', 'Input', 'EventKeyboard', 'KeyCode', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass('PlayerController'), _dec(_class = class PlayerController extends Component {
        constructor() {
          super(...arguments);
          this._starMove = false;
          this._curPos = new Vec3();
          this._tarPos = new Vec3();
        }

        start() {}

        initInput(cur) {
          if (cur) {
            input.on(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
            input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this); //           input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          } else {
            input.off(Input.EventType.KEY_PRESSING, this.onKeyDown, this);
            input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this); //           input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
          }
        }

        move(retx, rety) {
          this._starMove = true;
          var _speed = 20;
          this.node.getPosition(this._curPos);
          Vec3.add(this._tarPos, this._curPos, new Vec3(_speed * retx, _speed * rety, 0));
        }

        onKeyDown(event) {
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

        update(deltaTime) {
          if (this._starMove) {
            this.node.setPosition(this._tarPos);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f66656c70fc5ce6b784ec96ed4f4454ea7438438.js.map