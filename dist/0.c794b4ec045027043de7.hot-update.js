webpackHotUpdate(0,{

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _index = __webpack_require__(438);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(443);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _index5 = __webpack_require__(444);\n\nvar _index6 = _interopRequireDefault(_index5);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _intro = __webpack_require__(580);\n\nvar _intro2 = _interopRequireDefault(_intro);\n\nvar _search = __webpack_require__(581);\n\nvar _search2 = _interopRequireDefault(_search);\n\nvar _drop = __webpack_require__(582);\n\nvar _drop2 = _interopRequireDefault(_drop);\n\nvar _stack = __webpack_require__(583);\n\nvar _stack2 = _interopRequireDefault(_stack);\n\nvar _contact = __webpack_require__(584);\n\nvar _contact2 = _interopRequireDefault(_contact);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Main: {\n    displayName: 'Main'\n  }\n};\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({\n  filename: '/Users/mnguyen/neARby-web/app/containers/main.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _index2.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _UsersMnguyenNeARbyWebNode_modulesReactTransformHmrLibIndexJs2(_UsersMnguyenNeARbyWebNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);\n  };\n}\n\nvar Main = _wrapComponent('Main')(function (_Component) {\n  _inherits(Main, _Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this));\n\n    _this.state = {\n      bgColor: '#26A69A',\n      phoneScreen: '',\n      mainContent: '',\n      selectedPage: 'Intro'\n    };\n    return _this;\n  }\n\n  _createClass(Main, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {}\n  }, {\n    key: '_handleBack',\n    value: function _handleBack() {\n      console.log('backin up');\n      var options = {\n        0: ['Intro', '#26A69A'],\n        1: ['Search', '#5E35B1'],\n        2: ['Drop', '#00ACC1'],\n        3: ['Stack', '#1E88E5']\n      };\n      for (var key in options) {\n        console.log(options[key]);\n        if (options[key] === this.state.selectedPage && options[i - 1]) {\n          _handlePageChange(options[key - 1][0], options[key - 1][1]);\n        }\n      }\n    }\n  }, {\n    key: '_handleForward',\n    value: function _handleForward() {\n      console.log('furwerd');\n      var options = {\n        0: ['Intro', '#26A69A'],\n        1: ['Search', '#5E35B1'],\n        2: ['Drop', '#00ACC1'],\n        3: ['Stack', '#1E88E5']\n      };\n      for (var key in options) {\n        if (options[key] === this.state.selectedPage && options[i + 1]) {\n          console.log(options[i]);\n          _handlePageChange(options[key + 1][0], options[key + 1][1]);\n        }\n      }\n    }\n  }, {\n    key: '_handlePageChange',\n    value: function _handlePageChange(page, color) {\n      this.setState({ selectedPage: page, bgColor: color });\n      for (var i = 0; i < 7; i++) {\n        var element = document.body.children[0].children[0].children[0].children[0].children[1].children[i];\n        if (element.className !== page) {\n          element.style.color = 'white';\n        } else {\n          console.log(element.className, ' -- ele');\n          console.log(this.state.selectedPage);\n          element.style.color = '#CCC';\n        }\n      };\n      document.body.style.backgroundColor = color;\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      // partial logic\n      var currentPage = void 0,\n          phoneScreen = void 0;\n      if (this.state.selectedPage === 'Intro') {\n        currentPage = _react3.default.createElement(_intro2.default, null);\n        phoneScreen = 'http://www.phonecruncher.com/wordpress/wp-content/uploads/wpallimport/files/390583.gif';\n      } else if (this.state.selectedPage === 'Search') {\n        currentPage = _react3.default.createElement(_search2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n      } else if (this.state.selectedPage === 'Drop') {\n        currentPage = _react3.default.createElement(_drop2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n      } else if (this.state.selectedPage === 'Stack') {\n        currentPage = _react3.default.createElement(_stack2.default, null);\n        phoneScreen = 'http://66.media.tumblr.com/avatar_cf24d676af93_128.png';\n      } else if (this.state.selectedPage === 'Contact') {\n        currentPage = _react3.default.createElement(_contact2.default, null);\n        phoneScreen = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Tesseract.gif';\n      } else {\n        _react3.default.createElement(_intro2.default, null);\n      }\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'div',\n          { id: 'main' },\n          _react3.default.createElement(\n            'div',\n            { className: 'overlay' },\n            currentPage,\n            _react3.default.createElement(\n              'p',\n              { className: 'paginate' },\n              _react3.default.createElement(\n                'a',\n                { className: 'back', href: '#', onClick: this._handleBack.bind(this) },\n                '‹'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Intro', href: '#', onClick: this._handlePageChange.bind(this, 'Intro', '#26A69A') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Search', href: '#', onClick: this._handlePageChange.bind(this, 'Search', '#5E35B1') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Drop', href: '#', onClick: this._handlePageChange.bind(this, 'Drop', '#00ACC1') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Stack', href: '#', onClick: this._handlePageChange.bind(this, 'Stack', '#1E88E5') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'Contact', href: '#', onClick: this._handlePageChange.bind(this, 'Contact', '#3949AB') },\n                '•'\n              ),\n              _react3.default.createElement(\n                'a',\n                { className: 'forward', href: '#', onClick: this._handleForward.bind(this) },\n                '›'\n              )\n            )\n          )\n        ),\n        _react3.default.createElement(\n          'div',\n          { className: 'iphone-container' },\n          _react3.default.createElement('img', { className: 'iphone', height: '730', width: '760', src: 'http://www.freeiconspng.com/uploads/iphone-png-1.png' }),\n          _react3.default.createElement(\n            'div',\n            { className: 'demo' },\n            _react3.default.createElement('img', { className: 'screen-gif', src: phoneScreen })\n          )\n        ),\n        _react3.default.createElement('div', { className: 'footer' })\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.Component));\n\nexports.default = Main;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(427)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDM3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb250YWluZXJzL21haW4uanM/ZTk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvaW50cm8nO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaCc7XG5pbXBvcnQgRHJvcCBmcm9tICcuLi9jb21wb25lbnRzL2Ryb3AnO1xuaW1wb3J0IFN0YWNrIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhY2snO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYmdDb2xvcjogJyMyNkE2OUEnLFxuICAgICAgcGhvbmVTY3JlZW46ICcnLFxuICAgICAgbWFpbkNvbnRlbnQ6ICcnLFxuICAgICAgc2VsZWN0ZWRQYWdlOiAnSW50cm8nXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIFxuICB9XG5cbiAgX2hhbmRsZUJhY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2JhY2tpbiB1cCcpO1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAwOiBbJ0ludHJvJywgJyMyNkE2OUEnXSxcbiAgICAxOiBbJ1NlYXJjaCcsICcjNUUzNUIxJ10sXG4gICAgMjogWydEcm9wJywgJyMwMEFDQzEnXSxcbiAgICAzOiBbJ1N0YWNrJywgJyMxRTg4RTUnXVxuICB9XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBjb25zb2xlLmxvZyhvcHRpb25zW2tleV0pO1xuICAgIGlmIChvcHRpb25zW2tleV0gPT09IHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlICYmIG9wdGlvbnNbaSAtIDFdKSB7XG4gICAgICBfaGFuZGxlUGFnZUNoYW5nZShvcHRpb25zW2tleSAtIDFdWzBdLCBvcHRpb25zW2tleSAtIDFdWzFdKTtcbiAgICB9XG4gIH1cbn1cblxuICBfaGFuZGxlRm9yd2FyZCgpIHtcbiAgICBjb25zb2xlLmxvZygnZnVyd2VyZCcpO1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAwOiBbJ0ludHJvJywgJyMyNkE2OUEnXSxcbiAgICAxOiBbJ1NlYXJjaCcsICcjNUUzNUIxJ10sXG4gICAgMjogWydEcm9wJywgJyMwMEFDQzEnXSxcbiAgICAzOiBbJ1N0YWNrJywgJyMxRTg4RTUnXVxuICB9XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnNba2V5XSA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgJiYgb3B0aW9uc1tpICsgMV0pIHtcbiAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnNbaV0pO1xuICAgICAgX2hhbmRsZVBhZ2VDaGFuZ2Uob3B0aW9uc1trZXkgKyAxXVswXSwgb3B0aW9uc1trZXkgKyAxXVsxXSk7XG4gICAgfVxuICB9XG4gIH1cblxuICBfaGFuZGxlUGFnZUNoYW5nZShwYWdlLCBjb2xvcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkUGFnZTogcGFnZSwgYmdDb2xvcjogY29sb3J9KTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGVsZW1lbnQuY2xhc3NOYW1lICE9PSBwYWdlKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5jbGFzc05hbWUsICcgLS0gZWxlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9ICcjQ0NDJztcbiAgICAgIH1cbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gcGFydGlhbCBsb2dpY1xuICAgIGxldCBjdXJyZW50UGFnZSwgcGhvbmVTY3JlZW47XG4gICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnSW50cm8nKSB7XG4gICAgICBjdXJyZW50UGFnZSA9IDxJbnRybyAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHA6Ly93d3cucGhvbmVjcnVuY2hlci5jb20vd29yZHByZXNzL3dwLWNvbnRlbnQvdXBsb2Fkcy93cGFsbGltcG9ydC9maWxlcy8zOTA1ODMuZ2lmJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnU2VhcmNoJykge1xuICAgICAgY3VycmVudFBhZ2UgPSA8U2VhcmNoIC8+O1xuICAgICAgcGhvbmVTY3JlZW4gPSAnaHR0cDovLzY2Lm1lZGlhLnR1bWJsci5jb20vYXZhdGFyX2NmMjRkNjc2YWY5M18xMjgucG5nJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYWdlID09PSAnRHJvcCcpIHtcbiAgICAgIGN1cnJlbnRQYWdlID0gPERyb3AgLz47XG4gICAgICBwaG9uZVNjcmVlbiA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzUvNTUvVGVzc2VyYWN0LmdpZic7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkUGFnZSA9PT0gJ1N0YWNrJykge1xuICAgICAgY3VycmVudFBhZ2UgPSA8U3RhY2sgLz47XG4gICAgICBwaG9uZVNjcmVlbiA9ICdodHRwOi8vNjYubWVkaWEudHVtYmxyLmNvbS9hdmF0YXJfY2YyNGQ2NzZhZjkzXzEyOC5wbmcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZFBhZ2UgPT09ICdDb250YWN0Jykge1xuICAgICAgY3VycmVudFBhZ2UgPSA8Q29udGFjdCAvPjtcbiAgICAgIHBob25lU2NyZWVuID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvNS81NS9UZXNzZXJhY3QuZ2lmJztcbiAgICB9IGVsc2Uge1xuICAgICAgPEludHJvIC8+XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBpZD0nbWFpbic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvdmVybGF5Jz5cbiAgICAgICAgICB7Y3VycmVudFBhZ2V9XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdwYWdpbmF0ZSc+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2JhY2snIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUJhY2suYmluZCh0aGlzKX0+4oC5PC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdJbnRybycgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdJbnRybycsICcjMjZBNjlBJyl9PuKAojwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nU2VhcmNoJyBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVQYWdlQ2hhbmdlLmJpbmQodGhpcywgJ1NlYXJjaCcsICcjNUUzNUIxJyl9PuKAojwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRHJvcCcgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdEcm9wJywgJyMwMEFDQzEnKX0+4oCiPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdTdGFjaycgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdTdGFjaycsICcjMUU4OEU1Jyl9PuKAojwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nQ29udGFjdCcgaHJlZj0nIycgb25DbGljaz17dGhpcy5faGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMsICdDb250YWN0JywgJyMzOTQ5QUInKX0+4oCiPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb3J3YXJkJyBocmVmPScjJyBvbkNsaWNrPXt0aGlzLl9oYW5kbGVGb3J3YXJkLmJpbmQodGhpcyl9PuKAujwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naXBob25lLWNvbnRhaW5lcic+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdpcGhvbmUnIGhlaWdodD0nNzMwJyB3aWR0aD0nNzYwJyBzcmM9J2h0dHA6Ly93d3cuZnJlZWljb25zcG5nLmNvbS91cGxvYWRzL2lwaG9uZS1wbmctMS5wbmcnLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8nPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzY3JlZW4tZ2lmJyBzcmM9e3Bob25lU2NyZWVufS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyJz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9jb250YWluZXJzL21haW4uanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEE7QUFGQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUFNQTtBQXJCQTtBQXdCQTs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})