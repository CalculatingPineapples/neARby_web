webpackHotUpdate(0,{

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(438);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(443);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(444);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _intro = __webpack_require__(580);\n\nvar _intro2 = _interopRequireDefault(_intro);\n\nvar _search = __webpack_require__(581);\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _drop = __webpack_require__(582);\n\nvar _drop2 = _interopRequireDefault(_drop);\n\nvar _stack = __webpack_require__(583);\n\nvar _stack2 = _interopRequireDefault(_stack);\n\nvar _contact = __webpack_require__(584);\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Main: {\n    displayName: 'Main'\n  }\n};\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2(_UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar Main = _wrapComponent('Main')(function (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));\n\n    _this.state = {\n      bgColor: '#26A69A',\n      phoneScreen: '',\n      mainContent: '',\n      selectedPage: 'Intro'\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: '_handleBack',\n    value: function _handleBack() {\n      // array with intro, search, drop, stack, contact\n      // loop thru options\n      // if options[i] === this.state.selectedPage && not first element\n      // change this.state.selectedPage to options[i - 1]\n    }\n  }, {\n    key: '_handleForward',\n    value: function _handleForward() {\n      // array with intro, search, drop, stack, contact\n      // loop thru options\n      // if options[i] === this.state.selectedPage && not last element\n      // change this.state.selectedPage to options[i + 1]\n    }\n  }, {\n    key: '_handlePageChange',\n    value: function _handlePageChange(page) {\n      console.log('handling', page);\n      this.setState({ selectedPage: page });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // partial logic\n      var currentPage = void 0,\n          phoneScreen = void 0;\n      if (this.state.selectedPage === 'Intro') {\n        currentPage = _react3.default.createElement(_intro2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n        // $('body').animate({background-color: #26A69A}, 1000);\n      } else if (this.state.selectedPage === 'Search') {\n        currentPage = _react3.default.createElement(_search2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n        // $('body').animate({background-color: #CC0000}, 1000);\n      } else if (this.state.selectedPage === 'Drop') {\n        currentPage = _react3.default.createElement(_drop2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n        // $('body').animate({background-color: #00CC00}, 1000)\n      } else if (this.state.selectedPage === 'Stack') {\n        currentPage = _react3.default.createElement(_stack2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n        // $('body').animate({background-color: #0000CC}, 1000)\n      } else if (this.state.selectedPage === 'Contact') {\n        currentPage = _react3.default.createElement(_contact2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n        // $('body').animate({background-color: #000000}, 1000)\n      } else {\n        _react3.default.createElement(_intro2.default, null);\n      }\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'div',\n          { id: 'main' },\n          currentPage,\n          _react3.default.createElement(\n            'p',\n            { className: 'paginate' },\n            _react3.default.createElement(\n              'a',\n              { className: 'back', href: '#', onClick: this._handleBack.bind(this) },\n              '‹'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'page intro', href: '#', onClick: this._handlePageChange.bind(this, 'Intro') },\n              '•'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'page search', href: '#', onClick: this._handlePageChange.bind(this, 'Search') },\n              '•'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'page drop', href: '#', onClick: this._handlePageChange.bind(this, 'Drop') },\n              '•'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'page stack', href: '#', onClick: this._handlePageChange.bind(this, 'Stack') },\n              '•'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'page contact', href: '#', onClick: this._handlePageChange.bind(this, 'Contact') },\n              '•'\n            ),\n            _react3.default.createElement(\n              'a',\n              { className: 'forward', href: '#', onClick: this._handleForward.bind(this) },\n              '›'\n            )\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'iphone-container' },\n          _react3.default.createElement('img', { className: 'iphone', height: '730', width: '760', src: 'http://www.freeiconspng.com/uploads/iphone-png-1.png' }),\n          _react3.default.createElement(\n            'div',\n            { className: 'demo' },\n            _react3.default.createElement('img', { src: phoneScreen })\n          )\n        )\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.Component));\n\nexports.default = Main;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(427)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb250YWluZXJzL21haW4uanM/ZTk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgRHJvcCBmcm9tICcuLi9jb21wb25lbnRzL2Ryb3AnO1xuaW1wb3J0IFN0YWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhY2snO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmdDb2xvcjogJyMyNkE2OUEnLFxuICAgICAgcGhvbmVTY3JlZW46ICcnLFxuICAgICAgbWFpbkNvbnRlbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRQYWdlOiAnSW50cm8nXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUJhY2soKSB7XG4gICAgLy8gYXJyYXkgd2l0aCBpbnRybywgc2VhcmNoLCBkcm9wLCBzdGFjaywgY29udGFjdFxuICAgIC8vIGxvb3AgdGhydSBvcHRpb25zXG4gICAgICAvLyBpZiBvcHRpb25zW2ldID09PSB0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSAmJiBub3QgZmlyc3QgZWxlbWVudFxuICAgICAgICAvLyBjaGFuZ2UgdGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgdG8gb3B0aW9uc1tpIC0gMV1cbn1cblxuICBfaGFuZGxlRm9yd2FyZCgpIHtcbiAgICAvLyBhcnJheSB3aXRoIGludHJvLCBzZWFyY2gsIGRyb3AsIHN0YWNrLCBjb250YWN0XG4gICAgLy8gbG9vcCB0aHJ1IG9wdGlvbnNcbiAgICAgIC8vIGlmIG9wdGlvbnNbaV0gPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICYmIG5vdCBsYXN0IGVsZW1lbnRcbiAgICAgICAgLy8gY2hhbmdlIHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlIHRvIG9wdGlvbnNbaSArIDFdXG4gIH1cblxuICBfaGFuZGxlUGFnZUNoYW5nZShwYWdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsaW5nJywgcGFnZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRQYWdlOiBwYWdlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gcGFydGlhbCBsb2dpY1xuICAgIGxldCBjdXJyZW50UGFnZSwgcGhvbmVTY3JlZW47XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnSW50cm8nKSB7XG4gICAgICBjdXJyZW50UGFnZSA9IDxJbnRybyAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81NS9UZXNzZXJhY3QuZ2lmJztcbiAgICAgIC8vICQoJ2JvZHknKS5hbmltYXRlKHtiYWNrZ3JvdW5kLWNvbG9yOiAjMjZBNjlBfSwgMTAwMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gPFNlYXJjaCAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHA6Ly82Ni5tZWRpYS50dW1ibHIuY29tL2F2YXRhcl9jZjI0ZDY3NmFmOTNfMTI4LnBuZyc7XG4gICAgICAvLyAkKCdib2R5JykuYW5pbWF0ZSh7YmFja2dyb3VuZC1jb2xvcjogI0NDMDAwMH0sIDEwMDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgPT09ICdEcm9wJykge1xuICAgICAgY3VycmVudFBhZ2UgPSA8RHJvcCAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81NS9UZXNzZXJhY3QuZ2lmJztcbiAgICAgIC8vICQoJ2JvZHknKS5hbmltYXRlKHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDBDQzAwfSwgMTAwMClcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnU3RhY2snKSB7XG4gICAgICBjdXJyZW50UGFnZSA9IDxTdGFjayAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHA6Ly82Ni5tZWRpYS50dW1ibHIuY29tL2F2YXRhcl9jZjI0ZDY3NmFmOTNfMTI4LnBuZyc7XG4gICAgICAvLyAkKCdib2R5JykuYW5pbWF0ZSh7YmFja2dyb3VuZC1jb2xvcjogIzAwMDBDQ30sIDEwMDApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICBjdXJyZW50UGFnZSA9IDxDb250YWN0IC8+O1xuICAgICAgcGhvbmVTY3JlZW4gPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzU1L1Rlc3NlcmFjdC5naWYnO1xuICAgICAgLy8gJCgnYm9keScpLmFuaW1hdGUoe2JhY2tncm91bmQtY29sb3I6ICMwMDAwMDB9LCAxMDAwKVxuICAgIH0gZWxzZSB7XG4gICAgICA8SW50cm8gLz5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGlkPSdtYWluJz5cbiAgICAgICAge2N1cnJlbnRQYWdlfVxuICAgICAgICA8cCBjbGFzc05hbWU9J3BhZ2luYXRlJz5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9J2JhY2snIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUJhY2suYmluZCh0aGlzKX0+4oC5PC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGFnZSBpbnRybycgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdJbnRybycpfT7igKI8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdwYWdlIHNlYXJjaCcgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdTZWFyY2gnKX0+4oCiPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGFnZSBkcm9wJyBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVQYWdlQ2hhbmdlLmJpbmQodGhpcywgJ0Ryb3AnKX0+4oCiPC9hPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGFnZSBzdGFjaycgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdTdGFjaycpfT7igKI8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdwYWdlIGNvbnRhY3QnIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVBhZ2VDaGFuZ2UuYmluZCh0aGlzLCAnQ29udGFjdCcpfT7igKI8L2E+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb3J3YXJkJyBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVGb3J3YXJkLmJpbmQodGhpcyl9PuKAujwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXBob25lLWNvbnRhaW5lcic+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0naXBob25lJyBoZWlnaHQ9JzczMCcgd2lkdGg9Jzc2MCcgc3JjPSdodHRwOi8vd3d3LmZyZWVpY29uc3BuZy5jb20vdXBsb2Fkcy9pcGhvbmUtcG5nLTEucG5nJy8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVtbyc+XG4gICAgICA8aW1nIHNyYz17cGhvbmVTY3JlZW59Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29udGFpbmVycy9tYWluLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUZBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFiQTtBQXFCQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})