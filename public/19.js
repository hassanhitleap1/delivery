(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_custmers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/custmers */ "./resources/js/services/custmers.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Layout */ "./resources/js/views/layouts/Layout.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Edit",
  components: {
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      errors: [],
      success: false,
      id: null,
      custmer: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.id = this.$route.params.id;
    _services_custmers__WEBPACK_IMPORTED_MODULE_0__["get_one"](this.id).then(function (response) {
      _this.custmer = response.data.data;
      console.log("response.data.data", response.data.data);
    })["catch"](function (error) {
      console.log("error", error);
    });
  },
  methods: {
    update: function update(user, id) {
      var _this2 = this;

      _services_custmers__WEBPACK_IMPORTED_MODULE_0__["update"](user, id).then(function (response) {
        _this2.errors = [];
        _this2.success = true;

        _this2.$router.push({
          'name': 'custmers.index'
        });
      })["catch"](function (error) {
        console.log(error);
        _this2.errors = error.response.data.errors;
        _this2.success = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("Layout", { attrs: { name: "LayoutDefault" } }, [
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _vm.errors
            ? _c(
                "div",
                _vm._l(_vm.errors, function(v, k) {
                  return _c(
                    "div",
                    { key: k },
                    _vm._l(v, function(error) {
                      return _c(
                        "p",
                        {
                          key: error,
                          staticClass: "alert alert-danger",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                           " +
                              _vm._s(error) +
                              "\n                       "
                          )
                        ]
                      )
                    }),
                    0
                  )
                }),
                0
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card card-primary" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title float-left" }, [
                  _vm._v("create new custmer")
                ])
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { role: "form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.update(_vm.custmer, _vm.id)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "name" } }, [_vm._v("name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.custmer.name,
                            expression: "custmer.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "Enter name"
                        },
                        domProps: { value: _vm.custmer.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.custmer, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "phone" } }, [
                        _vm._v("phone")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.custmer.phone,
                            expression: "custmer.phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "phone",
                          placeholder: "Enter phone"
                        },
                        domProps: { value: _vm.custmer.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.custmer, "phone", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "name" } }, [
                        _vm._v("address")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.custmer.address,
                            expression: "custmer.address"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "address",
                          placeholder: "Enter address"
                        },
                        domProps: { value: _vm.custmer.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.custmer,
                              "address",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit" }
                      },
                      [_vm._v("Submit")]
                    )
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/custmers.js":
/*!*******************************************!*\
  !*** ./resources/js/services/custmers.js ***!
  \*******************************************/
/*! exports provided: get_all, create, update, get_one, _delete, get_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_one", function() { return get_one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_list", function() { return get_list; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./resources/js/globals.js");
/* harmony import */ var _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/jwt.service */ "./resources/js/common/jwt.service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function get_all() {
  return _get_all.apply(this, arguments);
}

function _get_all() {
  _get_all = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var page,
        keywords,
        options,
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            keywords = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              params: {
                page: page,
                keywords: keywords
              }
            };
            _context.next = 5;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/custmers"), options);

          case 5:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_all.apply(this, arguments);
}

function create(_x) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(custmer) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = axios.post('/api/user/custmers', custmer, {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });
            return _context2.abrupt("return", response);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create.apply(this, arguments);
}

function update(_x2, _x3) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(custmer, id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = axios.put('/api/user/custmers/' + id, custmer, {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });
            return _context3.abrupt("return", response);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function get_one(_x4) {
  return _get_one.apply(this, arguments);
}

function _get_one() {
  _get_one = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/custmers/").concat(id), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get_one.apply(this, arguments);
}

function _delete(_x5) {
  return _delete2.apply(this, arguments);
}

function _delete2() {
  _delete2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/custmers/").concat(id), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _delete2.apply(this, arguments);
}

function get_list() {
  return _get_list.apply(this, arguments);
}

function _get_list() {
  _get_list = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/custmers/list-custmers"), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _get_list.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/views/custmers/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/custmers/Edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=90da3a84& */ "./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/custmers/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/custmers/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=90da3a84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/custmers/Edit.vue?vue&type=template&id=90da3a84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_90da3a84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/layouts lazy recursive ^\\.\\/.*$":
/*!*******************************************************************!*\
  !*** ./resources/js/views/layouts lazy ^\.\/.*$ namespace object ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./AppLayout": [
		"./resources/js/views/layouts/AppLayout.vue",
		13
	],
	"./AppLayout.vue": [
		"./resources/js/views/layouts/AppLayout.vue",
		13
	],
	"./Layout": [
		"./resources/js/views/layouts/Layout.js"
	],
	"./Layout.js": [
		"./resources/js/views/layouts/Layout.js"
	],
	"./LayoutDefault": [
		"./resources/js/views/layouts/LayoutDefault.vue",
		3
	],
	"./LayoutDefault.vue": [
		"./resources/js/views/layouts/LayoutDefault.vue",
		3
	],
	"./LayoutEmpty": [
		"./resources/js/views/layouts/LayoutEmpty.vue",
		4
	],
	"./LayoutEmpty.vue": [
		"./resources/js/views/layouts/LayoutEmpty.vue",
		4
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./resources/js/views/layouts lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./resources/js/views/layouts/Layout.js":
/*!**********************************************!*\
  !*** ./resources/js/views/layouts/Layout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Layout",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  created: function created() {
    var _this = this;

    // Check if layout component
    // has already been registered.
    if (!vue__WEBPACK_IMPORTED_MODULE_0___default.a.options.components[this.name]) {
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(this.name, function () {
        return __webpack_require__("./resources/js/views/layouts lazy recursive ^\\.\\/.*$")("./".concat(_this.name));
      } // `../views/layouts/layouts/${this.name}.vue`
      );
    }

    this.$parent.$emit("update:layout", this.name);
  },
  render: function render() {
    return this.$slots["default"][0];
  }
});

/***/ })

}]);