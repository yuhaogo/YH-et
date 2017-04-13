define('client/assets/modules/login', function(require, exports, module) {

  'use strict';
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _antd = require('node_modules/antd/lib/index');
  
  var _fetchRequest = require('client/assets/modules/fetch/request.jsx');
  
  var LoginMain = (function (_Component) {
      _inherits(LoginMain, _Component);
  
      function LoginMain() {
          var _this = this;
  
          _classCallCheck(this, LoginMain);
  
          _get(Object.getPrototypeOf(LoginMain.prototype), 'constructor', this).apply(this, arguments);
  
          this.state = {
              loading: false,
              user: "",
              pwd: ""
          };
  
          this.enterLoading = function () {
              _this.setState({ loading: true });
              (0, _fetchRequest.post)('http://127.0.0.1:3000/login.do', {
                  user: _this.state.user,
                  pwd: _this.state.pwd
              }).then(function (res) {
                  _this.setState({ loading: false });
              });
          };
  
          this.handleUser = function (e) {
              _this.setState({ user: e.target.value });
          };
  
          this.handlePwd = function (e) {
              _this.setState({ pwd: e.target.value });
          };
      }
  
      _createClass(LoginMain, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'user-login' },
                  _react2['default'].createElement(
                      'h1',
                      null,
                      'electronic Trial Master File System'
                  ),
                  _react2['default'].createElement(
                      'div',
                      null,
                      _react2['default'].createElement(_antd.Input, { addonBefore: _react2['default'].createElement(_antd.Icon, { type: 'user' }), value: this.state.user, placeholder: 'Username', onChange: this.handleUser })
                  ),
                  _react2['default'].createElement(
                      'div',
                      null,
                      _react2['default'].createElement(_antd.Input, { type: 'password', addonBefore: _react2['default'].createElement(_antd.Icon, { type: 'lock' }), value: this.state.pwd, placeholder: 'Password', onChange: this.handlePwd })
                  ),
                  _react2['default'].createElement(
                      'div',
                      null,
                      _react2['default'].createElement(
                          _antd.Button,
                          { type: 'primary', loading: this.state.loading, onClick: this.enterLoading },
                          'Login'
                      )
                  )
              );
          }
      }]);
  
      return LoginMain;
  })(_react.Component);
  
  (0, _reactDom.render)(_react2['default'].createElement(LoginMain, null), document.getElementById('login-main'));
  //# sourceMappingURL=/modules/login.js.map
  

});
