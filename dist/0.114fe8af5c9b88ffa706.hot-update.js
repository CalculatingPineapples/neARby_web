webpackHotUpdate(0,{

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(438);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(443);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(444);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _intro = __webpack_require__(580);\n\nvar _intro2 = _interopRequireDefault(_intro);\n\nvar _search = __webpack_require__(581);\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _drop = __webpack_require__(582);\n\nvar _drop2 = _interopRequireDefault(_drop);\n\nvar _stack = __webpack_require__(583);\n\nvar _stack2 = _interopRequireDefault(_stack);\n\nvar _contact = __webpack_require__(584);\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Main: {\n    displayName: 'Main'\n  }\n};\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2(_UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar Main = _wrapComponent('Main')(function (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));\n\n    _this.state = {\n      bgColor: '#26A69A',\n      phoneScreen: '',\n      mainContent: '',\n      selectedPage: 'Intro'\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {}\n  }, {\n    key: '_handleBack',\n    value: function _handleBack() {\n      console.log('backin up');\n      var options = {\n        0: ['Intro', '#26A69A'],\n        1: ['Search', '#5E35B1'],\n        2: ['Drop', '#00ACC1'],\n        3: ['Stack', '#1E88E5'],\n        4: ['Contact', '#3949AB']\n      };\n\n      for (var key in options) {\n        var prevIndex = (Number(key) - 1).toString();\n        if (options[key][0] === this.state.selectedPage && options[prevIndex] !== undefined) {\n          this._handlePageChange(options[prevIndex][0], options[nextIndex][1]);\n        }\n      }\n    }\n  }, {\n    key: '_handleForward',\n    value: function _handleForward() {\n      var options = {\n        0: ['Intro', '#26A69A'],\n        1: ['Search', '#5E35B1'],\n        2: ['Drop', '#00ACC1'],\n        3: ['Stack', '#1E88E5'],\n        4: ['Contact', '#3949AB']\n      };\n\n      for (var key in options) {\n        var _nextIndex = (Number(key) + 1).toString();\n        if (options[key][0] === this.state.selectedPage && options[_nextIndex] !== undefined) {\n          this._handlePageChange(options[_nextIndex][0], options[_nextIndex][1]);\n        }\n      }\n    }\n  }, {\n    key: '_handlePageChange',\n    value: function _handlePageChange(page, color) {\n      this.setState({ selectedPage: page, bgColor: color });\n      for (var i = 0; i < 7; i++) {\n        var _nextIndex2 = (Number(key) + 1).toString();\n        var element = document.body.children[0].children[0].children[0].children[0].children[1].children[i];\n        if (element.className !== page) {\n          element.style.color = 'white';\n        } else {\n          console.log(element.className, ' -- ele');\n          console.log(this.state.selectedPage);\n          element.style.color = '#CCC';\n        }\n      };\n      document.body.style.backgroundColor = color;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // partial logic\n      var currentPage = void 0,\n          phoneScreen = void 0;\n      if (this.state.selectedPage === 'Intro') {\n        currentPage = _react3.default.createElement(_intro2.default, null);\n        phoneScreen = 'http://www.phonecruncher.com/wordpress/wp-content/uploads/wpallimport/files/390583.gif';\n      } else if (this.state.selectedPage === 'Search') {\n        currentPage = _react3.default.createElement(_search2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n      } else if (this.state.selectedPage === 'Drop') {\n        currentPage = _react3.default.createElement(_drop2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n      } else if (this.state.selectedPage === 'Stack') {\n        currentPage = _react3.default.createElement(_stack2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n      } else if (this.state.selectedPage === 'Contact') {\n        currentPage = _react3.default.createElement(_contact2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n      } else {\n        _react3.default.createElement(_intro2.default, null);\n      }\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'div',\n          { id: 'main' },\n          _react3.default.createElement(\n            'div',\n            { className: 'overlay' },\n            currentPage,\n            _react3.default.createElement(\n              'p',\n              { className: 'paginate' },\n              _react3.default.createElement(\n                'a',\n                { className: 'back', href: '#', onClick: this._handleBack.bind(this) },\n                '‹'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Intro', href: '#', onClick: this._handlePageChange.bind(this, 'Intro', '#26A69A') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Search', href: '#', onClick: this._handlePageChange.bind(this, 'Search', '#5E35B1') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Drop', href: '#', onClick: this._handlePageChange.bind(this, 'Drop', '#00ACC1') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Stack', href: '#', onClick: this._handlePageChange.bind(this, 'Stack', '#1E88E5') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Contact', href: '#', onClick: this._handlePageChange.bind(this, 'Contact', '#3949AB') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'forward', href: '#', onClick: this._handleForward.bind(this) },\n                '›'\n              )\n            )\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'iphone-container' },\n          _react3.default.createElement('img', { className: 'iphone', height: '730', width: '760', src: 'http://www.freeiconspng.com/uploads/iphone-png-1.png' }),\n          _react3.default.createElement(\n            'div',\n            { className: 'demo' },\n            _react3.default.createElement('img', { className: 'screen-gif', src: phoneScreen })\n          )\n        ),\n        _react3.default.createElement('div', { className: 'footer' })\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.Component));\n\nexports.default = Main;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(427)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb250YWluZXJzL21haW4uanM/ZTk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgRHJvcCBmcm9tICcuLi9jb21wb25lbnRzL2Ryb3AnO1xuaW1wb3J0IFN0YWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhY2snO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmdDb2xvcjogJyMyNkE2OUEnLFxuICAgICAgcGhvbmVTY3JlZW46ICcnLFxuICAgICAgbWFpbkNvbnRlbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRQYWdlOiAnSW50cm8nXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIFxuICB9XG5cbiAgX2hhbmRsZUJhY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2JhY2tpbiB1cCcpO1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAwOiBbJ0ludHJvJywgJyMyNkE2OUEnXSxcbiAgICAxOiBbJ1NlYXJjaCcsICcjNUUzNUIxJ10sXG4gICAgMjogWydEcm9wJywgJyMwMEFDQzEnXSxcbiAgICAzOiBbJ1N0YWNrJywgJyMxRTg4RTUnXSxcbiAgICA0OiBbJ0NvbnRhY3QnLCAnIzM5NDlBQiddXG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9ucykge1xuICAgIGxldCBwcmV2SW5kZXggPSAoTnVtYmVyKGtleSkgLSAxKS50b1N0cmluZygpO1xuICAgIGlmIChvcHRpb25zW2tleV1bMF0gPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICYmIG9wdGlvbnNbcHJldkluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVQYWdlQ2hhbmdlKG9wdGlvbnNbcHJldkluZGV4XVswXSwgb3B0aW9uc1tuZXh0SW5kZXhdWzFdKTtcbiAgICB9XG4gIH1cbn1cblxuICBfaGFuZGxlRm9yd2FyZCgpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIDA6IFsnSW50cm8nLCAnIzI2QTY5QSddLFxuICAgICAgMTogWydTZWFyY2gnLCAnIzVFMzVCMSddLFxuICAgICAgMjogWydEcm9wJywgJyMwMEFDQzEnXSxcbiAgICAgIDM6IFsnU3RhY2snLCAnIzFFODhFNSddLFxuICAgICAgNDogWydDb250YWN0JywgJyMzOTQ5QUInXVxuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gKE51bWJlcihrZXkpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIGlmIChvcHRpb25zW2tleV1bMF0gPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICYmIG9wdGlvbnNbbmV4dEluZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVBhZ2VDaGFuZ2Uob3B0aW9uc1tuZXh0SW5kZXhdWzBdLCBvcHRpb25zW25leHRJbmRleF1bMV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVQYWdlQ2hhbmdlKHBhZ2UsIGNvbG9yKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWRQYWdlOiBwYWdlLCBiZ0NvbG9yOiBjb2xvcn0pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gKE51bWJlcihrZXkpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5jaGlsZHJlbltpXTtcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTmFtZSAhPT0gcGFnZSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQuY2xhc3NOYW1lLCAnIC0tIGVsZScpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSk7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0NDQyc7XG4gICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIHBhcnRpYWwgbG9naWNcbiAgICBsZXQgY3VycmVudFBhZ2UsIHBob25lU2NyZWVuO1xuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ0ludHJvJykge1xuICAgICAgY3VycmVudFBhZ2UgPSA8SW50cm8gLz47XG4gICAgICBwaG9uZVNjcmVlbiA9ICdodHRwOi8vd3d3LnBob25lY3J1bmNoZXIuY29tL3dvcmRwcmVzcy93cC1jb250ZW50L3VwbG9hZHMvd3BhbGxpbXBvcnQvZmlsZXMvMzkwNTgzLmdpZic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gPFNlYXJjaCAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHA6Ly82Ni5tZWRpYS50dW1ibHIuY29tL2F2YXRhcl9jZjI0ZDY3NmFmOTNfMTI4LnBuZyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ0Ryb3AnKSB7XG4gICAgICBjdXJyZW50UGFnZSA9IDxEcm9wIC8+O1xuICAgICAgcGhvbmVTY3JlZW4gPSAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy81LzU1L1Rlc3NlcmFjdC5naWYnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgPT09ICdTdGFjaycpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gPFN0YWNrIC8+O1xuICAgICAgcGhvbmVTY3JlZW4gPSAnaHR0cDovLzY2Lm1lZGlhLnR1bWJsci5jb20vYXZhdGFyX2NmMjRkNjc2YWY5M18xMjgucG5nJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnQ29udGFjdCcpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gPENvbnRhY3QgLz47XG4gICAgICBwaG9uZVNjcmVlbiA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzUvNTUvVGVzc2VyYWN0LmdpZic7XG4gICAgfSBlbHNlIHtcbiAgICAgIDxJbnRybyAvPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J21haW4nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nb3ZlcmxheSc+XG4gICAgICAgICAge2N1cnJlbnRQYWdlfVxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncGFnaW5hdGUnPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdiYWNrJyBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVCYWNrLmJpbmQodGhpcyl9PuKAuTwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nSW50cm8nIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVBhZ2VDaGFuZ2UuYmluZCh0aGlzLCAnSW50cm8nLCAnIzI2QTY5QScpfT7igKI8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J1NlYXJjaCcgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdTZWFyY2gnLCAnIzVFMzVCMScpfT7igKI8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J0Ryb3AnIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVBhZ2VDaGFuZ2UuYmluZCh0aGlzLCAnRHJvcCcsICcjMDBBQ0MxJyl9PuKAojwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nU3RhY2snIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVBhZ2VDaGFuZ2UuYmluZCh0aGlzLCAnU3RhY2snLCAnIzFFODhFNScpfT7igKI8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J0NvbnRhY3QnIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVBhZ2VDaGFuZ2UuYmluZCh0aGlzLCAnQ29udGFjdCcsICcjMzk0OUFCJyl9PuKAojwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZm9yd2FyZCcgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlRm9yd2FyZC5iaW5kKHRoaXMpfT7igLo8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lwaG9uZS1jb250YWluZXInPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT0naXBob25lJyBoZWlnaHQ9JzczMCcgd2lkdGg9Jzc2MCcgc3JjPSdodHRwOi8vd3d3LmZyZWVpY29uc3BuZy5jb20vdXBsb2Fkcy9pcGhvbmUtcG5nLTEucG5nJy8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vJz5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2NyZWVuLWdpZicgc3JjPXtwaG9uZVNjcmVlbn0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcic+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29udGFpbmVycy9tYWluLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFGQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFNQTtBQXJCQTtBQXdCQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})