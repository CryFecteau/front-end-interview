(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    265: function(module, exports, __webpack_require__) {
      __webpack_require__(266),
        __webpack_require__(376),
        (module.exports = __webpack_require__(377));
    },
    287: function(module, exports) {},
    377: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            261
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(
            __webpack_require__(578),
            module
          );
        }.call(this, __webpack_require__(378)(module));
    },
    578: function(module, exports, __webpack_require__) {
      var map = { "./Checkers.stories.js": 584 };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 578);
    },
    579: function(module, exports, __webpack_require__) {
      var content = __webpack_require__(580);
      "string" == typeof content && (content = [[module.i, content, ""]]);
      var options = { hmr: !0, transform: void 0, insertInto: void 0 };
      __webpack_require__(582)(content, options);
      content.locals && (module.exports = content.locals);
    },
    580: function(module, exports, __webpack_require__) {
      (module.exports = __webpack_require__(581)(!1)).push([
        module.i,
        "body {\r\n  margin: 0;\r\n}\r\n",
        ""
      ]);
    },
    584: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react);
      __webpack_require__(12),
        __webpack_require__(18),
        __webpack_require__(19),
        __webpack_require__(13),
        __webpack_require__(14),
        __webpack_require__(93),
        __webpack_require__(77),
        __webpack_require__(0),
        __webpack_require__(78),
        __webpack_require__(79),
        __webpack_require__(11),
        __webpack_require__(20),
        __webpack_require__(21),
        __webpack_require__(103);
      function _typeof(obj) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Space_Space = (function(_React$Component) {
        function Space() {
          var _getPrototypeOf2, _this;
          !(function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          })(this, Space);
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = (function _possibleConstructorReturn(self, call) {
              return !call ||
                ("object" !== _typeof(call) && "function" != typeof call)
                ? _assertThisInitialized(self)
                : call;
            })(
              this,
              (_getPrototypeOf2 = _getPrototypeOf(Space)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            )).clickHandler = _this.props.clickHandler
              ? _this.props.clickHandler.bind(_assertThisInitialized(_this))
              : function() {}),
            (_this.boardX = _this.props.boardX),
            (_this.boardY = _this.props.boardY),
            _this
          );
        }
        return (
          (function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Space, _React$Component),
          (function _createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                _defineProperties(Constructor.prototype, protoProps),
              staticProps && _defineProperties(Constructor, staticProps),
              Constructor
            );
          })(Space, [
            {
              key: "render",
              value: function render() {
                return react_default.a.createElement("rect", {
                  className: "space",
                  onClick: this.clickHandler,
                  fill: this.props.shade ? "green" : "lightgray",
                  height: this.props.size,
                  width: this.props.size,
                  x: this.props.x,
                  y: this.props.y
                });
              }
            }
          ]),
          Space
        );
      })(react_default.a.Component);
      function Piece_typeof(obj) {
        return (Piece_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(obj);
      }
      function Piece_defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function Piece_getPrototypeOf(o) {
        return (Piece_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function Piece_assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function Piece_setPrototypeOf(o, p) {
        return (Piece_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      (Space_Space.displayName = "Space"),
        (Space_Space.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Space"
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["stories\\Space.js"] = {
            name: "Space",
            docgenInfo: Space_Space.__docgenInfo,
            path: "stories\\Space.js"
          });
      var Piece_Piece = (function(_React$Component) {
        function Piece() {
          var _getPrototypeOf2, _this;
          !(function Piece_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          })(this, Piece);
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            ((_this = (function Piece_possibleConstructorReturn(self, call) {
              return !call ||
                ("object" !== Piece_typeof(call) && "function" != typeof call)
                ? Piece_assertThisInitialized(self)
                : call;
            })(
              this,
              (_getPrototypeOf2 = Piece_getPrototypeOf(Piece)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            )).clickHandler = _this.props.clickHandler
              ? _this.props.clickHandler.bind(
                  Piece_assertThisInitialized(_this)
                )
              : function() {}),
            (_this.boardX = _this.props.boardX),
            (_this.boardY = _this.props.boardY),
            _this
          );
        }
        return (
          (function Piece_inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && Piece_setPrototypeOf(subClass, superClass);
          })(Piece, _React$Component),
          (function Piece_createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                Piece_defineProperties(Constructor.prototype, protoProps),
              staticProps && Piece_defineProperties(Constructor, staticProps),
              Constructor
            );
          })(Piece, [
            {
              key: "render",
              value: function render() {
                return react_default.a.createElement("circle", {
                  className: "piece",
                  onClick: this.clickHandler,
                  cx: this.props.centerX,
                  cy: this.props.centerY,
                  fill: 1 === this.props.player ? "white" : "red",
                  r: this.props.radius
                });
              }
            }
          ]),
          Piece
        );
      })(react_default.a.Component);
      function Board_typeof(obj) {
        return (Board_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  "function" == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              })(obj);
      }
      function Board_defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function Board_getPrototypeOf(o) {
        return (Board_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function Board_assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return self;
      }
      function Board_setPrototypeOf(o, p) {
        return (Board_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      (Piece_Piece.displayName = "Piece"),
        (Piece_Piece.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Piece"
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["stories\\Piece.js"] = {
            name: "Piece",
            docgenInfo: Piece_Piece.__docgenInfo,
            path: "stories\\Piece.js"
          });
      var Board_Board = (function(_React$Component) {
        function Board() {
          var _getPrototypeOf2, _this;
          !(function Board_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError("Cannot call a class as a function");
          })(this, Board);
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return (
            (_this = (function Board_possibleConstructorReturn(self, call) {
              return !call ||
                ("object" !== Board_typeof(call) && "function" != typeof call)
                ? Board_assertThisInitialized(self)
                : call;
            })(
              this,
              (_getPrototypeOf2 = Board_getPrototypeOf(Board)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            )),
            (function _defineProperty(obj, key, value) {
              return (
                key in obj
                  ? Object.defineProperty(obj, key, {
                      value: value,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (obj[key] = value),
                obj
              );
            })(Board_assertThisInitialized(_this), "state", {
              board: [
                [0, 1, 0, 1, 0, 1, 0, 1],
                [1, 0, 1, 0, 1, 0, 1, 0],
                [0, 1, 0, 1, 0, 1, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [2, 0, 2, 0, 2, 0, 2, 0],
                [0, 2, 0, 2, 0, 2, 0, 2],
                [2, 0, 2, 0, 2, 0, 2, 0]
              ]
            }),
            _this
          );
        }
        return (
          (function Board_inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: { value: subClass, writable: !0, configurable: !0 }
              }
            )),
              superClass && Board_setPrototypeOf(subClass, superClass);
          })(Board, _React$Component),
          (function Board_createClass(Constructor, protoProps, staticProps) {
            return (
              protoProps &&
                Board_defineProperties(Constructor.prototype, protoProps),
              staticProps && Board_defineProperties(Constructor, staticProps),
              Constructor
            );
          })(Board, [
            {
              key: "render",
              value: function render() {
                var _this2 = this,
                  spaceSize = this.props.size / 8;
                return react_default.a.createElement(
                  "svg",
                  {
                    height: this.props.size,
                    width: this.props.size,
                    viewBox: "0 0 "
                      .concat(this.props.size, " ")
                      .concat(this.props.size)
                  },
                  this.state.board.map(function(row, y) {
                    return _this2.renderTiles(row, y, spaceSize);
                  }),
                  this.state.board.map(function(row, y) {
                    return _this2.renderPieces(
                      row,
                      y,
                      spaceSize,
                      spaceSize / 2
                    );
                  })
                );
              }
            },
            {
              key: "renderTiles",
              value: function renderTiles(row, y, spaceSize) {
                var _this3 = this;
                return row.map(function(space, x) {
                  return _this3.renderSpace(
                    x,
                    y,
                    spaceSize * x,
                    spaceSize * y,
                    spaceSize,
                    x % 2,
                    y % 2
                  );
                });
              }
            },
            {
              key: "renderPieces",
              value: function renderPieces(row, y, spaceSize, pieceRadius) {
                var _this4 = this;
                return row.map(function(space, x) {
                  return 0 === space
                    ? null
                    : _this4.renderPiece(
                        space,
                        x,
                        y,
                        spaceSize * x,
                        spaceSize * y,
                        pieceRadius
                      );
                });
              }
            },
            {
              key: "renderPiece",
              value: function renderPiece(
                space,
                x,
                y,
                spaceX,
                spaceY,
                pieceRadius
              ) {
                return react_default.a.createElement(Piece_Piece, {
                  key: x,
                  centerX: spaceX + pieceRadius,
                  centerY: spaceY + pieceRadius,
                  player: space,
                  radius: 0.75 * pieceRadius,
                  boardX: x,
                  boardY: y,
                  clickHandler: this.manipulatePiece(this)
                });
              }
            },
            {
              key: "renderSpace",
              value: function renderSpace(
                x,
                y,
                spaceX,
                spaceY,
                spaceSize,
                isEvenSpace,
                isEvenRow
              ) {
                return react_default.a.createElement(Space_Space, {
                  key: x,
                  shade:
                    (isEvenSpace && !isEvenRow) || (!isEvenSpace && isEvenRow),
                  size: spaceSize,
                  x: spaceX,
                  y: spaceY,
                  boardX: x,
                  boardY: y,
                  clickHandler: this.manipulateSpace(this)
                });
              }
            },
            {
              key: "movePieceToSpace",
              value: function movePieceToSpace(origin, destination) {
                var pieceVal = this.state.board[origin.y][origin.x];
                return (
                  (this.state.board[origin.y][origin.x] = 0),
                  (this.state.board[destination.y][destination.x] = pieceVal),
                  this.setState(this.state),
                  !0
                );
              }
            },
            {
              key: "manipulateSpace",
              value: function manipulateSpace(board) {
                return function() {
                  return (
                    !!board.state.movingPiece &&
                    (board.movePieceToSpace(board.state.movingPiece, {
                      x: this.boardX,
                      y: this.boardY
                    }),
                    (board.state.movingPiece = null),
                    !0)
                  );
                };
              }
            },
            {
              key: "manipulatePiece",
              value: function manipulatePiece(board) {
                return function() {
                  board.state.movingPiece = { x: this.boardX, y: this.boardY };
                };
              }
            }
          ]),
          Board
        );
      })(react_default.a.Component);
      (Board_Board.displayName = "Board"),
        (Board_Board.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "renderTiles",
              docblock: null,
              modifiers: [],
              params: [
                { name: "row", type: null },
                { name: "y", type: null },
                { name: "spaceSize", type: null }
              ],
              returns: null
            },
            {
              name: "renderPieces",
              docblock: null,
              modifiers: [],
              params: [
                { name: "row", type: null },
                { name: "y", type: null },
                { name: "spaceSize", type: null },
                { name: "pieceRadius", type: null }
              ],
              returns: null
            },
            {
              name: "renderPiece",
              docblock: null,
              modifiers: [],
              params: [
                { name: "space", type: null },
                { name: "x", type: null },
                { name: "y", type: null },
                { name: "spaceX", type: null },
                { name: "spaceY", type: null },
                { name: "pieceRadius", type: null }
              ],
              returns: null
            },
            {
              name: "renderSpace",
              docblock: null,
              modifiers: [],
              params: [
                { name: "x", type: null },
                { name: "y", type: null },
                { name: "spaceX", type: null },
                { name: "spaceY", type: null },
                { name: "spaceSize", type: null },
                { name: "isEvenSpace", type: null },
                { name: "isEvenRow", type: null }
              ],
              returns: null
            },
            {
              name: "movePieceToSpace",
              docblock: null,
              modifiers: [],
              params: [
                { name: "origin", type: null },
                { name: "destination", type: null }
              ],
              returns: null
            },
            {
              name: "manipulateSpace",
              docblock: null,
              modifiers: [],
              params: [{ name: "board", type: null }],
              returns: null
            },
            {
              name: "manipulatePiece",
              docblock: null,
              modifiers: [],
              params: [{ name: "board", type: null }],
              returns: null
            }
          ],
          displayName: "Board"
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["stories\\Board.js"] = {
            name: "Board",
            docgenInfo: Board_Board.__docgenInfo,
            path: "stories\\Board.js"
          });
      __webpack_require__(579);
      __webpack_require__.d(__webpack_exports__, "Checkers", function() {
        return Checkers;
      });
      __webpack_exports__.default = { title: "Checkers" };
      var _ref = react_default.a.createElement(Board_Board, { size: 400 }),
        Checkers = function() {
          return _ref;
        };
      (Checkers.displayName = "Checkers"),
        (Checkers.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Checkers"
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["stories\\Checkers.stories.js"] = {
            name: "Checkers",
            docgenInfo: Checkers.__docgenInfo,
            path: "stories\\Checkers.stories.js"
          });
    }
  },
  [[265, 1, 2]]
]);
//# sourceMappingURL=main.f61585c06a491d50d2d9.bundle.js.map
