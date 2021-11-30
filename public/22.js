(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_shipments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shipments */ "./resources/js/services/shipments.js");
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
  name: "Index",
  components: {
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      keywords: null,
      shipments: {
        type: Object,
        "default": null
      }
    };
  },
  mounted: function mounted() {
    this.get_all();
  },
  methods: {
    get_all: function get_all() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      _services_shipments__WEBPACK_IMPORTED_MODULE_0__["get_all"](page, this.keywords).then(function (_ref) {
        var data = _ref.data;
        _this.shipments = data;
      })["catch"](function (_ref2) {
        var response = _ref2.response;

        if (chkeckedAuthApi(response)) {
          // this.get_admins(1);
          return;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c(
                  "div",
                  [
                    _c("h3", { staticClass: "card-title float-left" }, [
                      _vm._v("shipments")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-primary float-right",
                        attrs: { to: { name: "shipments.create" } }
                      },
                      [
                        _vm._v(
                          "\n                                    create shipment\n                                "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card-tools" }, [
                  _c(
                    "div",
                    {
                      staticClass: "input-group input-group-sm",
                      staticStyle: { width: "150px" }
                    },
                    [
                      _c("input", {
                        staticClass: "form-control float-right",
                        attrs: {
                          type: "text",
                          name: "table_search",
                          placeholder: "Search"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-default",
                            attrs: { type: "submit" }
                          },
                          [_c("i", { staticClass: "fas fa-search" })]
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body table-responsive p-0" },
                [
                  _c("table", { staticClass: "table table-hover" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("ID")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("shipment id ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("driver ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("country ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("region ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("areas ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("address ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("phone ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("other_phone ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("required amount ")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("delivery amount")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("note")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("action ")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.shipments.data, function(shipment) {
                        return _c("tr", { key: shipment.id }, [
                          _c("td", [_vm._v(_vm._s(shipment.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.policy_number))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                shipment.driver == null
                                  ? ""
                                  : shipment.driver.name
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                shipment.country == null
                                  ? ""
                                  : shipment.country.name
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                shipment.region == null
                                  ? ""
                                  : shipment.region.name
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(
                                shipment.areas == null
                                  ? ""
                                  : shipment.areas.name
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.address))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.phone))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.other_phone))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.required_amount))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.delivery_amount))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(shipment.note))]),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "action" },
                            [
                              _c("router-link", {
                                staticClass: "tag tag-success fas fa-edit",
                                attrs: {
                                  to: {
                                    name: "shipments.edit",
                                    params: { id: shipment.id }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "tag tag-success fas fa-trash-alt",
                                on: {
                                  click: function($event) {
                                    return _vm.deletePost(shipment.id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "pagination",
                    {
                      attrs: {
                        align: "left",
                        paginateTo: 10,
                        data: _vm.shipments
                      },
                      on: { "pagination-change-page": _vm.get_all }
                    },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "prev-nav" }, slot: "prev-nav" },
                        [_vm._v("< Previous")]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { attrs: { slot: "next-nav" }, slot: "next-nav" },
                        [_vm._v("Next >")]
                      )
                    ]
                  )
                ],
                1
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

/***/ "./resources/js/services/shipments.js":
/*!********************************************!*\
  !*** ./resources/js/services/shipments.js ***!
  \********************************************/
/*! exports provided: get_all, create, update, get_one, _delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_one", function() { return get_one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/shipments"), options);

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
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(shipment) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = axios.post('/api/shipments', shipment, {
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
            response = axios.put('/api/shipments/' + id, shipment, {
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/shipments/").concat(id), {
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
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/shipments/").concat(id), {
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
		11
	],
	"./AppLayout.vue": [
		"./resources/js/views/layouts/AppLayout.vue",
		11
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

/***/ }),

/***/ "./resources/js/views/shipments/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/shipments/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=bf21a2e6&scoped=true& */ "./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/shipments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bf21a2e6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/shipments/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/shipments/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/shipments/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=bf21a2e6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Index.vue?vue&type=template&id=bf21a2e6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_bf21a2e6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);