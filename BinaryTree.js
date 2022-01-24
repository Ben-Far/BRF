"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BinaryTreeNode = /*#__PURE__*/function () {
  function BinaryTreeNode(key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, BinaryTreeNode);

    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  _createClass(BinaryTreeNode, [{
    key: "isLeaf",
    get: function get() {
      return this.left === null && this.right === null;
    }
  }, {
    key: "hasChildren",
    get: function get() {
      return !this.isLeaf;
    }
  }]);

  return BinaryTreeNode;
}();

var BinaryTree = /*#__PURE__*/function () {
  function BinaryTree(key) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : key;

    _classCallCheck(this, BinaryTree);

    this.root = new BinaryTreeNode(key, value);
  }

  _createClass(BinaryTree, [{
    key: "inOrderTraversal",
    value: /*#__PURE__*/regeneratorRuntime.mark(function inOrderTraversal() {
      var node,
          _args = arguments;
      return regeneratorRuntime.wrap(function inOrderTraversal$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              node = _args.length > 0 && _args[0] !== undefined ? _args[0] : this.root;

              if (!node.left) {
                _context.next = 3;
                break;
              }

              return _context.delegateYield(this.inOrderTraversal(node.left), "t0", 3);

            case 3:
              _context.next = 5;
              return node;

            case 5:
              if (!node.right) {
                _context.next = 7;
                break;
              }

              return _context.delegateYield(this.inOrderTraversal(node.right), "t1", 7);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, inOrderTraversal, this);
    })
  }, {
    key: "postOrderTraversal",
    value: /*#__PURE__*/regeneratorRuntime.mark(function postOrderTraversal() {
      var node,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function postOrderTraversal$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              node = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : this.root;

              if (!node.left) {
                _context2.next = 3;
                break;
              }

              return _context2.delegateYield(this.postOrderTraversal(node.left), "t0", 3);

            case 3:
              if (!node.right) {
                _context2.next = 5;
                break;
              }

              return _context2.delegateYield(this.postOrderTraversal(node.right), "t1", 5);

            case 5:
              _context2.next = 7;
              return node;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, postOrderTraversal, this);
    })
  }, {
    key: "preOrderTraversal",
    value: /*#__PURE__*/regeneratorRuntime.mark(function preOrderTraversal() {
      var node,
          _args3 = arguments;
      return regeneratorRuntime.wrap(function preOrderTraversal$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              node = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : this.root;
              _context3.next = 3;
              return node;

            case 3:
              if (!node.left) {
                _context3.next = 5;
                break;
              }

              return _context3.delegateYield(this.preOrderTraversal(node.left), "t0", 5);

            case 5:
              if (!node.right) {
                _context3.next = 7;
                break;
              }

              return _context3.delegateYield(this.preOrderTraversal(node.right), "t1", 7);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, preOrderTraversal, this);
    })
  }, {
    key: "insert",
    value: function insert(parentNodeKey, key) {
      var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : key;

      var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        left: true,
        right: true
      },
          left = _ref.left,
          right = _ref.right;

      var _iterator = _createForOfIteratorHelper(this.preOrderTraversal()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var node = _step.value;

          if (node.key === parentNodeKey) {
            var canInsertLeft = left && node.left === null;
            var canInsertRight = right && node.right === null;
            if (!canInsertLeft && !canInsertRight) return false;

            if (canInsertLeft) {
              node.left = new BinaryTreeNode(key, value, node);
              return true;
            }

            if (canInsertRight) {
              node.right = new BinaryTreeNode(key, value, node);
              return true;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }, {
    key: "remove",
    value: function remove(key) {
      var _iterator2 = _createForOfIteratorHelper(this.preOrderTraversal()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var node = _step2.value;

          if (node.left.key === key) {
            node.left = null;
            return true;
          }

          if (node.right.key === key) {
            node.right = null;
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return false;
    }
  }, {
    key: "find",
    value: function find(key) {
      var _iterator3 = _createForOfIteratorHelper(this.preOrderTraversal()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var node = _step3.value;
          if (node.key === key) return node;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return undefined;
    }
  }]);

  return BinaryTree;
}();

exports["default"] = BinaryTree;