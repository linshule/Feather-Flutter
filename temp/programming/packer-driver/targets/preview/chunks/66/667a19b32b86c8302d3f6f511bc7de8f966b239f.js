System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Animation, Input, input, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, BossController;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c376hUuOBGUb3twUBgKohI", "BossController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'UIOpacity', 'Camera', 'Input', 'input', 'EventKeyboard', 'KeyCode']);

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
      }), _dec(_class = (_class2 = class BossController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "BgAnim", _descriptor, this);

          _initializerDefineProperty(this, "Ground", _descriptor2, this);

          _initializerDefineProperty(this, "Player", _descriptor3, this);

          _initializerDefineProperty(this, "Boss", _descriptor4, this);
        }

        start() {}

        initBoss() {
          this.Ground.active = true;
          this.BgAnim.play('bg4appear');
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

        onKeyDown() {}

        onKeyUp() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BgAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Ground", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Player", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "Boss", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=667a19b32b86c8302d3f6f511bc7de8f966b239f.js.map