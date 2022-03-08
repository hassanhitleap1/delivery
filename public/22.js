(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_shipments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/shipments */ "./resources/js/services/shipments.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Layout */ "./resources/js/views/layouts/Layout.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var _components_inputs_StatusSelect2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inputs/StatusSelect2.vue */ "./resources/js/components/inputs/StatusSelect2.vue");
/* harmony import */ var _components_inputs_CountriesSelect2_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/inputs/CountriesSelect2.vue */ "./resources/js/components/inputs/CountriesSelect2.vue");
/* harmony import */ var _components_inputs_RegionsSelect2_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputs/RegionsSelect2.vue */ "./resources/js/components/inputs/RegionsSelect2.vue");
/* harmony import */ var _components_inputs_DriversSelect2_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/inputs/DriversSelect2.vue */ "./resources/js/components/inputs/DriversSelect2.vue");
/* harmony import */ var _components_inputs_AreasSelect2_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inputs/AreasSelect2.vue */ "./resources/js/components/inputs/AreasSelect2.vue");
/* harmony import */ var _components_inputs_CustmersSelect2_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/inputs/CustmersSelect2.vue */ "./resources/js/components/inputs/CustmersSelect2.vue");
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
  name: "Create",
  components: {
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_2__["default"],
    StatusSelect2: _components_inputs_StatusSelect2_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CountriesSelect2: _components_inputs_CountriesSelect2_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    RegionsSelect2: _components_inputs_RegionsSelect2_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DriversSelect2: _components_inputs_DriversSelect2_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    AreasSelect2: _components_inputs_AreasSelect2_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CustmersSelect2: _components_inputs_CustmersSelect2_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      errors: null,
      success: false,
      shipments: [{
        name: null,
        driver_id: null,
        customer_id: null,
        status_id: null,
        country_id: null,
        region_id: null,
        areas_id: null,
        address: null,
        phone: null,
        other_phone: null,
        required_amount: null,
        delivery_amount: null,
        note: null
      }],
      divers: [],
      areas: []
    };
  },
  methods: {
    add_shipment: function add_shipment() {
      this.shipments.push({
        policy_number: null,
        name: null,
        driver_id: null,
        customer_id: null,
        status_id: null,
        country_id: null,
        region_id: null,
        areas_id: null,
        address: null,
        phone: null,
        other_phone: null,
        required_amount: null,
        delivery_amount: null,
        note: null
      });
    },
    remove_shipment: function remove_shipment(index) {
      this.shipments.splice(index, 1);
    },
    set_status: function set_status(data) {
      this.shipments[data.index].status_id = data.id;
    },
    set_country: function set_country(data) {
      this.shipments[data.index].country_id = data.id;
    },
    set_region: function set_region(data) {
      this.shipments[data.index].region_id = data.id;
    },
    set_driver: function set_driver(data) {
      this.shipments[data.index].driver_id = data.id;
    },
    set_area: function set_area(data) {
      this.shipments[data.index].areas_id = data.id;
    },
    set_customer: function set_customer(data) {
      this.shipments[data.index].customer_id = data.id;
    },
    create: function create() {
      var _this = this;

      _services_shipments__WEBPACK_IMPORTED_MODULE_0__["create"](this.shipments).then(function (response) {
        console.log('sss');
        _this.errors = []; // this.shipments.forEach((index,shipment) => {
        //     this.shipments[index].driver_id = null;
        //     this.shipments[index].customer_id = null;
        //     this.shipments[index].status_id = null;
        //     this.shipments[index].country_id = null;
        //     this.shipments[index].region_id = null;
        //     this.shipments[index].areas_id = null;
        //     this.shipments[index].address = null;
        //     this.shipments[index].delivery_amount = null;
        //     this.shipments[index].required_amount = null;
        //     this.shipments[index].phone = null;
        //     this.shipments[index].other_phone = null;
        // });

        _this.success = true;

        _this.$router.push({
          name: 'shipments'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
        _this.success = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.shipment[data-v-d5aa245e] {\n    border: solid black 1px; \n    border-radius:20px; \n    margin: 4px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                            "\n                            " +
                              _vm._s(error) +
                              "\n                        "
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
                  _vm._v("create")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "float-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.add_shipment.apply(null, arguments)
                        }
                      }
                    },
                    [_c("span", { staticClass: "fas fa-plus" })]
                  )
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
                      return _vm.create()
                    }
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    _vm._l(_vm.shipments, function(shipment, index) {
                      return _c("div", { key: index, staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-12" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success float-right",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.add_shipment.apply(null, arguments)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-plus" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: index > 0,
                                  expression: "index > 0"
                                }
                              ],
                              staticClass: "btn btn-danger float-right",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.remove_shipment(index)
                                }
                              }
                            },
                            [_c("span", { staticClass: "fas fa-minus" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "shipment row animate__animated animate__backInRight"
                          },
                          [
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("name")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.shipments[index].name,
                                      expression: "shipments[index].name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "name",
                                    placeholder: "Enter name"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].name
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("DriversSelect2", {
                                  attrs: { index: index },
                                  on: { select_driver: _vm.set_driver }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("CustmersSelect2", {
                                  attrs: { index: index },
                                  on: { select_customer: _vm.set_customer }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("StatusSelect2", {
                                  attrs: { index: index },
                                  on: { select_status: _vm.set_status }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("CountriesSelect2", {
                                  attrs: { index: index },
                                  on: { select_country: _vm.set_country }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("RegionsSelect2", {
                                  attrs: { index: index },
                                  on: { select_region: _vm.set_region }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-2" },
                              [
                                _c("AreasSelect2", {
                                  attrs: { index: index },
                                  on: { select_area: _vm.set_area }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
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
                                      value: _vm.shipments[index].address,
                                      expression: "shipments[index].address"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "address",
                                    placeholder: "address"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].address
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "address",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("phone")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.shipments[index].phone,
                                      expression: "shipments[index].phone"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "phone",
                                    placeholder: "phone"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].phone
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "phone",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("other phone")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.shipments[index].other_phone,
                                      expression: "shipments[index].other_phone"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "other_phone",
                                    placeholder: "other phone"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].other_phone
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "other_phone",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("required amount")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.shipments[index].required_amount,
                                      expression:
                                        "shipments[index].required_amount"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "required_amount",
                                    placeholder: "required amount"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].required_amount
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "required_amount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("delivery amount")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        _vm.shipments[index].delivery_amount,
                                      expression:
                                        "shipments[index].delivery_amount"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "delivery_amount",
                                    placeholder: "delivery amount"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].delivery_amount
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "delivery_amount",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-2" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "name" } }, [
                                  _vm._v("note")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.shipments[index].note,
                                      expression: "shipments[index].note"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    id: "note",
                                    placeholder: "note"
                                  },
                                  domProps: {
                                    value: _vm.shipments[index].note
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.shipments[index],
                                        "note",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ]
                        )
                      ])
                    }),
                    0
                  ),
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

/***/ "./resources/js/views/shipments/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=d5aa245e&scoped=true& */ "./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/shipments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& */ "./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d5aa245e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/shipments/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/shipments/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=style&index=0&id=d5aa245e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_style_index_0_id_d5aa245e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=d5aa245e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);