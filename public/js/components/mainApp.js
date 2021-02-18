webpackJsonp([0],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(135);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(134);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(339);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(104);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeSection = function (_Component) {
  (0, _inherits3.default)(ComposeSection, _Component);

  function ComposeSection() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ComposeSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeSection.__proto__ || Object.getPrototypeOf(ComposeSection)).call(this));

    _this.handleChange = function (event) {

      var name = event.target.name;
      var value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value), function () {
        console.log(_this.state);
      });
    };

    _this.submitForm = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post('/api/post', {
                content: _this.state.postContent,
                user_id: _this.props.initialData.userInfo.id,
                type: 'text'
              });

            case 3:
              post = _context.sent;

              console.log(post);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    }));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(ComposeSection, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'compose-section' },
        _react2.default.createElement('textarea', { name: 'postContent', rows: 8, cols: 80, defaultValue: "", onChange: this.handleChange, value: this.state.postContent }),
        _react2.default.createElement('div', { className: 'user-img' }),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(
            'div',
            { className: 'button photo-btn' },
            _react2.default.createElement('i', { className: 'fas fa-camera-retro' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button video-btn' },
            _react2.default.createElement('i', { className: 'fas fa-video' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'button send-btn', onClick: this.submitForm },
            _react2.default.createElement('i', { className: 'fas fa-paper-plane' })
          )
        )
      );
    }
  }]);
  return ComposeSection;
}(_react.Component);

exports.default = ComposeSection;

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Posts = function (_Component) {
  (0, _inherits3.default)(Posts, _Component);

  function Posts() {
    (0, _classCallCheck3.default)(this, Posts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.showLatestPosts = function () {
      if (_this.props.initialData.latestPosts != undefined) {

        return _this.props.initialData.latestPosts.map(function (item, index) {
          var post = item.posts;
          var user = item.users;

          return _react2.default.createElement(
            'div',
            { className: 'update-container', key: index },
            _react2.default.createElement(
              'div',
              { className: 'author-info' },
              _react2.default.createElement('a', { href: '#', className: 'user-img', style: { backgroundImage: 'url(\'' + user.profile_img + '\')' } }),
              _react2.default.createElement(
                'div',
                { className: 'info', style: { position: 'relative', left: '10px' } },
                _react2.default.createElement(
                  'a',
                  { href: '/profile' },
                  user.first_name,
                  ' ',
                  _this.props.initialData.userInfo.last_name,
                  ' '
                ),
                'shared a ',
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  post.type == 'text' ? 'story' : 'image'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'media' },
              _react2.default.createElement('div', { className: '' + (post.type == 'text' ? 'story' : 'image'), style: { background: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--lgZmvJZg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q8novxdgkl806no68265.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'grey-container' },
              _react2.default.createElement(
                'div',
                { className: 'update-info' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'How to become a developer'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  post.content
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'update-stats' },
                _react2.default.createElement(
                  'div',
                  { className: 'icon-section' },
                  _react2.default.createElement(
                    'div',
                    { className: 'like-circle' },
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'other-users' },
                  'Sarah Russell and 23 others liked update'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'comments-stats' },
                  '4 comments'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'compose-comment' },
                _react2.default.createElement('i', { className: 'fas fa-comment' }),
                _react2.default.createElement('textarea', { name: true, rows: 8, cols: 70, defaultValue: "" }),
                _react2.default.createElement(
                  'div',
                  { className: 'buttons' },
                  _react2.default.createElement(
                    'div',
                    { className: 'repost-btn' },
                    _react2.default.createElement('i', { className: 'fas fa-redo' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'like-btn' },
                    ' ',
                    _react2.default.createElement('i', { className: 'fas fa-thumbs-up' })
                  )
                )
              )
            )
          );
        });
      }
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Posts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'posts' },
        this.showLatestPosts()
      );
    }
  }]);
  return Posts;
}(_react.Component);

exports.default = Posts;

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(136);

var _axios = __webpack_require__(104);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(132);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(133);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'

    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      this.setState({
        initialData: this.props.initialData
      }, function () {
        console.log(self.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'testersec' },
        _react2.default.createElement(_ComposeSection2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
        _react2.default.createElement(_Posts2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData })
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickedDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false,
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: 'render',
    value: function render() {
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      } else {
        var _props$initialData$us = this.props.initialData.userInfo,
            first_name = _props$initialData$us.first_name,
            last_name = _props$initialData$us.last_name;

        return _react2.default.createElement(
          'section',
          { id: 'left-menu' },
          _react2.default.createElement(
            'div',
            { className: 'account-dropdown' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              _react2.default.createElement('i', { className: 'fab fa-typo3' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'name', onClick: this.clickedDropdown },
              first_name + ' ' + last_name
            ),
            _react2.default.createElement(
              'div',
              { className: 'icon', onClick: this.clickedDropdown },
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'dropdown ' + (this.state.dropdown ? 'active' : '') },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'nav',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/account' },
                    'account'
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '/logout' },
                    'logout'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'groups' },
            _react2.default.createElement(
              'div',
              { className: 'group' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Favorites'
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/logout' },
                    'Logout'
                  )
                ),
                _react2.default.createElement('li', null),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'iconside' },
                    _react2.default.createElement('i', { className: 'fab fa-500px' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'textside' },
                    'Muzli'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Fubiz'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Dribbble'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'group' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Pages(54)'
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Awards'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Interactive Designs'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'InVision'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Mashable'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'group' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Groups(32) '
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'Startup Stadium'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Designers Guild'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'UX/UI'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Buy and Sell'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'group' },
              _react2.default.createElement(
                'div',
                { className: 'title' },
                'Birthdays(9) '
              ),
              _react2.default.createElement(
                'div',
                { className: 'socialicons' },
                _react2.default.createElement('i', { className: 'fab fa-adn', style: { background: 'red', fontSize: '30px', display: 'inline' } }),
                _react2.default.createElement('i', { className: 'fab fa-adn', style: { background: 'red', fontSize: '30px', display: 'inline' } }),
                _react2.default.createElement('i', { className: 'fab fa-adn', style: { background: 'red', fontSize: '30px', display: 'inline' } })
              )
            )
          )
        );
      }
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingComp = function (_Component) {
  (0, _inherits3.default)(LoadingComp, _Component);

  function LoadingComp() {
    (0, _classCallCheck3.default)(this, LoadingComp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingComp.__proto__ || Object.getPrototypeOf(LoadingComp)).call(this));

    _this.state = {
      dropdown: false,
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(LoadingComp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'loading-comp', className: this.props.initialData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          'div',
          { className: 'loading-icon' },
          _react2.default.createElement(
            'div',
            { className: 'lds-heart', style: { width: '200px', height: '200px' } },
            _react2.default.createElement('div', null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'loading-text' },
          'Loading!'
        )
      );
    }
  }]);
  return LoadingComp;
}(_react.Component);

exports.default = LoadingComp;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'messenger' },
        _react2.default.createElement(
          'div',
          { className: 'messenger-header' },
          _react2.default.createElement(
            'div',
            { className: 'messenger-icon' },
            _react2.default.createElement('i', { className: 'fas fa-comments' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'title' },
            'Messenger'
          ),
          _react2.default.createElement(
            'div',
            { className: 'options-icon' },
            _react2.default.createElement('i', { className: 'fas fa-ellipsis-v' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'users' },
          _react2.default.createElement(
            'div',
            { className: 'users-container' },
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user active', style: { display: 'flex', alignItems: 'center', padding: '10px' } },
              _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px' } }),
              _react2.default.createElement(
                'div',
                { className: 'user-name' },
                'James Doe'
              ),
              _react2.default.createElement(
                'div',
                { className: 'conversation' },
                '  ',
                _react2.default.createElement('i', { className: 'fas fa-comment-dots' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'search' },
          _react2.default.createElement('input', { type: 'text' })
        )
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(135);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(134);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(136);

var _axios = __webpack_require__(104);

var _axios2 = _interopRequireDefault(_axios);

var _ComposeSection = __webpack_require__(132);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(133);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {
      name: 'Joe'

    };
    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$routeProps = this.props.routeProps,
          match = _props$routeProps.match,
          location = _props$routeProps.location,
          history = _props$routeProps.history;


      var self = this;

      var getUser = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var userProfile;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get('/api/user/profile/${match.params.id}');

                case 3:
                  userProfile = _context.sent;

                  console.log(self.props.initialData.userInfo['profile_img']);

                  self.setState({
                    initialData: self.props.initialData,
                    userProfile: self.props.initialData.userInfo,
                    first_name: self.props.initialData.userInfo['first_name'],
                    last_name: self.props.initialData.userInfo['last_name'],
                    profile_img: self.props.initialData.userInfo['profile_img']

                  }), function () {
                    console.log(self.state);
                  };

                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function getUser() {
          return _ref.apply(this, arguments);
        };
      }();

      getUser();
    }
  }, {
    key: 'render',
    value: function render() {
      // if(this.state.userProfile !== undefined){

      return _react2.default.createElement(
        'div',
        { className: 'testersec profile-page' },
        _react2.default.createElement(
          'div',
          { className: 'user-img' },
          _react2.default.createElement('img', { src: '' + this.state.profile_img })
        ),
        _react2.default.createElement(
          'div',
          { className: 'info' },
          _react2.default.createElement(
            'h1',
            null,
            this.state.first_name,
            ' ',
            this.state.last_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'follow-btn' },
            'Follow'
          )
        )
      );
    }
  }]);
  return Profile;
}(_react.Component);

/** 
        console.log(this.props)
        const {match, location, history, profile_img} = this.props.routeProps
        const self = this

        const getUser = async function(){
          
          try{
            const user = await axios.get(`/api/user/profile/${match.params.id}`)
            self.setState({
              initialData: self.props.initialData, 
              userProfile: userProfile.data[0],
              // following: userProfile.data.following
              
             
          }, () => {
            console.log(self.state)
          })

          } catch(error){

            console.log(error)
          }
  
        }
        getUser()
    }

    followUser =  async () => {
      
      const {match, location, history, profile_img} = this.props.routeProps
      const self = this
      if(this.state.following) {
        try{
          const userProfile = await axios.get(`/api/user/${match.params.id}/unfollow`)
          self.setState({
            following: !self.state.following
          })  
          console.log(userProfile.data)
        } catch(error){
  
            console.log(error)
          }
      } else {
        try{
          const userProfile = await axios.get(`/api/user/${match.params.id}/follow`)
          self.setState({
            following: !self.state.following
          })  
          console.log(userProfile.data)
        } catch(error){
  
            console.log(error) 
          }
      }
  
}

  render () {
    // if(this.state.userProfile !== undefined){
      return (
        <div className="testersec profile-page">
          <div className="user-img"><img src="" /></div>
          <div className="info">
          <h1>Joe Santos</h1>
          <div className="follow-btn">Follow</div>



          </div>
         
          
      
         
        </div>)
      }
    }
    
  
  /**   
     else {
      return (  <div className="testersec profile-page">
              <div className="user-img"><img src={`${this.state.userProfile.profile_img}`} /></div>
<div className="info">
  <h1>{`${this.state.userProfile.first_name} ${this.state.userProfile.last_name}`}</h1>
  <div className="follow-btn" onClick={this.followUser}>{(this.state.following) ? 'Unfollow' : 'Follow'}</div>
</div>
</div>
      )}
  }} */


exports.default = Profile;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'search-header' },
        _react2.default.createElement(
          'div',
          { className: 'content-area' },
          _react2.default.createElement(
            'div',
            { className: 'search-box' },
            _react2.default.createElement('input', { type: 'text' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'icon-section' },
            _react2.default.createElement(
              'div',
              { className: 'noti' },
              _react2.default.createElement('i', { className: 'fas fa-bell' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '31'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'comments' },
              _react2.default.createElement('i', { className: 'fas fa-comment' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '13'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'user' },
              _react2.default.createElement('i', { className: 'fas fa-user' }),
              _react2.default.createElement(
                'div',
                { className: 'noti-number active' },
                '38'
              )
            )
          )
        )
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(135);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(134);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(45);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(46);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(47);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(32);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(136);

var _axios = __webpack_require__(104);

var _axios2 = _interopRequireDefault(_axios);

var _LeftMenu = __webpack_require__(307);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _Home = __webpack_require__(306);

var _Home2 = _interopRequireDefault(_Home);

var _Messenger = __webpack_require__(309);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _Profile = __webpack_require__(310);

var _Profile2 = _interopRequireDefault(_Profile);

var _SearchHeader = __webpack_require__(311);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _ComposeSection = __webpack_require__(132);

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _Posts = __webpack_require__(133);

var _Posts2 = _interopRequireDefault(_Posts);

var _LoadingComp = __webpack_require__(308);

var _LoadingComp2 = _interopRequireDefault(_LoadingComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'

    };
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var initialData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get('/api/initialApp');

                case 3:
                  initialData = _context.sent;

                  console.log(initialData);
                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });

                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 8]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'app-container home-page' },
          _react2.default.createElement(_LeftMenu2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(
            'section',
            { id: 'content-container' },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component(props) {
                return _react2.default.createElement(_Home2.default, { routeProps: props,
                  initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/profile/:id', component: function component(props) {
                return _react2.default.createElement(_Profile2.default, { routeProps: props,
                  initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(
              'div',
              { className: 'testersec' },
              _react2.default.createElement(_ComposeSection2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
              _react2.default.createElement(_Posts2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData })
            )
          ),
          _react2.default.createElement(_Messenger2.default, null)
        )
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[332]);