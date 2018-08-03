(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addImg = exports.addToDom = exports.login = undefined;

var _users = __webpack_require__(/*! ./users */ "./src/users.js");

var _users2 = _interopRequireDefault(_users);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(username, password) {
    var user = _users2.default[username];

    if (user && user.password === password) {
        return 'User logged in as: ' + user.name;
    }

    return 'Invalid username and/or password';
};

var addToDom = exports.addToDom = function addToDom(type, text) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';

    var element = (0, _jquery2.default)('<' + type + '>', {
        text: text,
        class: className
    });

    (0, _jquery2.default)('#root').append(element);
};

var addImg = exports.addImg = function addImg(src) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'imgSize';

    var image = (0, _jquery2.default)('<img>', {
        src: src,
        class: className
    });

    (0, _jquery2.default)('#root').append(image);
};

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    Lightning: {
        password: 'asdf',
        name: 'Harry Potter'
    },
    SmartySmart: {
        password: 'hjkl',
        name: 'Hermione Granger'
    },
    RWeez: {
        password: 'qwer',
        name: 'Ronald Weasley'
    },
    Always: {
        password: 'uiop',
        name: 'Severus Snape'
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInVzZXJzIiwibmFtZSIsImFkZFRvRG9tIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY2xhc3MiLCJhcHBlbmQiLCJhZGRJbWciLCJzcmMiLCJpbWFnZSIsIkxpZ2h0bmluZyIsIlNtYXJ0eVNtYXJ0IiwiUldlZXoiLCJBbHdheXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDekMsUUFBTUMsT0FBT0MsZ0JBQU1ILFFBQU4sQ0FBYjs7QUFFQSxRQUFHRSxRQUFRQSxLQUFLRCxRQUFMLEtBQWtCQSxRQUE3QixFQUFzQztBQUNsQyxlQUFPLHdCQUF3QkMsS0FBS0UsSUFBcEM7QUFDSDs7QUFFRCxXQUFPLGtDQUFQO0FBQ0gsQ0FSTTs7QUFVQSxJQUFNQyw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFtQztBQUFBLFFBQXRCQyxTQUFzQix1RUFBVixLQUFVOztBQUN2RCxRQUFNQyxVQUFVLDRCQUFNSCxJQUFOLFFBQWU7QUFDM0JDLGtCQUQyQjtBQUUzQkcsZUFBT0Y7QUFGb0IsS0FBZixDQUFoQjs7QUFLQSwwQkFBRSxPQUFGLEVBQVdHLE1BQVgsQ0FBa0JGLE9BQWxCO0FBQ0gsQ0FQTTs7QUFTQSxJQUFNRywwQkFBUyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBZ0M7QUFBQSxRQUExQkwsU0FBMEIsdUVBQWQsU0FBYzs7QUFDbEQsUUFBTU0sUUFBUSxzQkFBRSxPQUFGLEVBQVc7QUFDckJELGdCQURxQjtBQUVyQkgsZUFBT0Y7QUFGYyxLQUFYLENBQWQ7O0FBS0EsMEJBQUUsT0FBRixFQUFXRyxNQUFYLENBQWtCRyxLQUFsQjtBQUNILENBUE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDdEJRO0FBQ1hDLGVBQVc7QUFDUGQsa0JBQVUsTUFESDtBQUVQRyxjQUFNO0FBRkMsS0FEQTtBQUtYWSxpQkFBYTtBQUNUZixrQkFBVSxNQUREO0FBRVRHLGNBQU07QUFGRyxLQUxGO0FBU1hhLFdBQU87QUFDSGhCLGtCQUFVLE1BRFA7QUFFSEcsY0FBTTtBQUZILEtBVEk7QUFhWGMsWUFBUTtBQUNKakIsa0JBQVUsTUFETjtBQUVKRyxjQUFNO0FBRkY7QUFiRyxDIiwiZmlsZSI6IjAubWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICBjb25zdCB1c2VyID0gdXNlcnNbdXNlcm5hbWVdO1xuXG4gICAgaWYodXNlciAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCl7XG4gICAgICAgIHJldHVybiAnVXNlciBsb2dnZWQgaW4gYXM6ICcgKyB1c2VyLm5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZCc7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvbSA9ICh0eXBlLCB0ZXh0LCBjbGFzc05hbWUgPSAncmVkJykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKGA8JHt0eXBlfT5gLCB7IFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICAkKCcjcm9vdCcpLmFwcGVuZChlbGVtZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRJbWcgPSAoc3JjLCBjbGFzc05hbWUgPSAnaW1nU2l6ZScpID0+IHtcbiAgICBjb25zdCBpbWFnZSA9ICQoJzxpbWc+JywgeyBcbiAgICAgICAgc3JjLFxuICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgIH0pO1xuXG4gICAgJCgnI3Jvb3QnKS5hcHBlbmQoaW1hZ2UpO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBMaWdodG5pbmc6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdhc2RmJyxcbiAgICAgICAgbmFtZTogJ0hhcnJ5IFBvdHRlcidcbiAgICB9LFxuICAgIFNtYXJ0eVNtYXJ0OiB7XG4gICAgICAgIHBhc3N3b3JkOiAnaGprbCcsXG4gICAgICAgIG5hbWU6ICdIZXJtaW9uZSBHcmFuZ2VyJ1xuICAgIH0sXG4gICAgUldlZXo6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdxd2VyJyxcbiAgICAgICAgbmFtZTogJ1JvbmFsZCBXZWFzbGV5J1xuICAgIH0sXG4gICAgQWx3YXlzOiB7XG4gICAgICAgIHBhc3N3b3JkOiAndWlvcCcsXG4gICAgICAgIG5hbWU6ICdTZXZlcnVzIFNuYXBlJ1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9