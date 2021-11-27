(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Select2Component',
  components: {
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      myValue: 1,
      value: 1,
      myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]

    };
  },
  methods: {
    myChangeEvent: function myChangeEvent(val) {
      console.log(val);
    },
    mySelectEvent: function mySelectEvent(_ref) {
      var id = _ref.id,
          text = _ref.text;
      console.log({
        id: id,
        text: text
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Update.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Update.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _services_shipments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shipments */ "./resources/js/services/shipments.js");
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Layout */ "./resources/js/views/layouts/Layout.js");
/* harmony import */ var _services_drivers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drivers */ "./resources/js/services/drivers.js");
/* harmony import */ var _services_areas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/areas */ "./resources/js/services/areas.js");
/* harmony import */ var v_select2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-select2-component */ "./node_modules/v-select2-component/dist/Select2.esm.js");
/* harmony import */ var _components_inputs_Select2Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/inputs/Select2Component */ "./resources/js/components/inputs/Select2Component.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "Update",
  components: {
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"],
    Select2: v_select2_component__WEBPACK_IMPORTED_MODULE_5__["default"],
    Select2Component: _components_inputs_Select2Component__WEBPACK_IMPORTED_MODULE_6__["default"]
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
  mounted: function mounted() {
    this.get_drivers();
    this.$store.dispatch('StatusModule/fetchstatus');
    this.$store.dispatch('ContryModule/fetchcountries');
    this.$store.dispatch('RegionModule/fetchregions');
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('StatusModule', ['status'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ContryModule', ['countries'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('RegionModule', ['regions'])), {}, {
    countries_serach: function countries_serach() {
      return this.countries.map(function (country) {
        return {
          id: country.id,
          text: country.name
        };
      });
    },
    regions_serach: function regions_serach() {
      return this.regions.map(function (region) {
        return {
          id: region.id,
          text: region.name
        };
      });
    }
  }),
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
    saprotarea: function saprotarea(area) {
      return {
        id: area.id,
        text: area.name
      };
    },
    saprotregion: function saprotregion(region) {
      return {
        id: region.id,
        text: region.name
      };
    },
    saprotdriver: function saprotdriver(driver) {
      return {
        id: driver.id,
        text: driver.name
      };
    },
    myChangeEventArea: function myChangeEventArea(val) {
      console.log(val);
    },
    myChangeEventRegion: function myChangeEventRegion(val) {
      console.log(val);
    },
    myChangeEventDriver: function myChangeEventDriver(val) {
      console.log(val);
    },
    mySelectEventDriver: function mySelectEventDriver(_ref) {
      var id = _ref.id,
          text = _ref.text;
      this.driver_id = id;
    },
    mySelectEventRegion: function mySelectEventRegion(_ref2) {
      var id = _ref2.id,
          text = _ref2.text;
      this.get_areas(region_id);
      this.region_id = id;
    },
    mySelectEventArea: function mySelectEventArea(_ref3) {
      var id = _ref3.id,
          text = _ref3.text;
      this.area_id = id;
    },
    get_drivers: function get_drivers() {
      var _this = this;

      Object(_services_drivers__WEBPACK_IMPORTED_MODULE_3__["get_list"])().then(function (_ref4) {
        var data = _ref4.data;
        _this.drivers = data.data.map(function (driver) {
          return {
            id: driver.id,
            text: driver.name
          };
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    get_areas: function get_areas(region_id) {
      var _this2 = this;

      _services_areas__WEBPACK_IMPORTED_MODULE_4__["get_areas_region"](region_id).then(function (res) {
        _this2.areas = res.data.data.map(function (region) {
          return {
            id: area.id,
            text: area.name
          };
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    create: function create() {
      var _this3 = this;

      _services_shipments__WEBPACK_IMPORTED_MODULE_1__["create"](this.shipments).then(function (response) {
        _this3.errors = [];

        _this3.shipments.forEach(function (index, shipment) {
          _this3.shipments[index].driver_id = null;
          _this3.shipments[index].customer_id = null;
          _this3.shipments[index].status_id = null;
          _this3.shipments[index].country_id = null;
          _this3.shipments[index].region_id = null;
          _this3.shipments[index].areas_id = null;
          _this3.shipments[index].address = null;
          _this3.shipments[index].delivery_amount = null;
          _this3.shipments[index].required_amount = null;
          _this3.shipments[index].phone = null;
          _this3.shipments[index].other_phone = null;
        });

        _this3.success = true;

        _this3.$router.push({
          name: 'admins'
        });
      })["catch"](function (error) {
        _this3.errors = error.response.data.errors;
        _this3.success = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72& ***!
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
  return _c(
    "div",
    [
      _c("Select2", {
        attrs: {
          options: _vm.myOptions,
          settings: { settingOption: _vm.value, settingOption: _vm.value }
        },
        on: {
          change: function($event) {
            return _vm.myChangeEvent($event)
          },
          select: function($event) {
            return _vm.mySelectEvent($event)
          }
        },
        model: {
          value: _vm.myValue,
          callback: function($$v) {
            _vm.myValue = $$v
          },
          expression: "myValue"
        }
      }),
      _vm._v(" "),
      _c("h4", [_vm._v("Value: " + _vm._s(_vm.myValue))])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
  return _c("layout", { attrs: { name: "LayoutDefault" } }, [
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
                _c("p", { staticClass: "float-right" }, [
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
                            staticClass: "btn btn-danger",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.remove_shipment(index)
                              }
                            }
                          },
                          [_c("span", { staticClass: "fas fa-minus" })]
                        ),
                        _vm._v(" "),
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
                              domProps: { value: _vm.shipments[index].name },
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
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v(" driver ")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].driver_id,
                                  expression: "shipments[index].driver_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "driver_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].driver_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "driver_id",
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
                              _vm._v("customer ")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].customer_id,
                                  expression: "shipments[index].customer_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "customer_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].customer_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "customer_id",
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
                              _vm._v("status ")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].status_id,
                                  expression: "shipments[index].status_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "status_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].status_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "status_id",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("country ")
                              ]),
                              _vm._v(" "),
                              _c("Select2", {
                                attrs: { options: _vm.countries_serach },
                                model: {
                                  value: _vm.shipments[index].country_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.shipments[index],
                                      "country_id",
                                      $$v
                                    )
                                  },
                                  expression: "shipments[index].country_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("region ")
                              ]),
                              _vm._v(" "),
                              _c("Select2", {
                                attrs: { options: _vm.regions_serach },
                                model: {
                                  value: _vm.shipments[index].region_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.shipments[index],
                                      "region_id",
                                      $$v
                                    )
                                  },
                                  expression: "shipments[index].region_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("areas ")
                              ]),
                              _vm._v(" "),
                              _c("Select2", {
                                attrs: { options: _vm.areas },
                                model: {
                                  value: _vm.shipments[index].areas_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.shipments[index],
                                      "areas_id",
                                      $$v
                                    )
                                  },
                                  expression: "shipments[index].areas_id"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-2" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("address")
                              ]),
                              _vm._v(" "),
                              _c("Select2Component"),
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
                                  placeholder: "Enter name"
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
                            ],
                            1
                          )
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
                                placeholder: "Enter name"
                              },
                              domProps: { value: _vm.shipments[index].phone },
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
                              _vm._v("other_phone")
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
                                placeholder: "Enter name"
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
                                  value: _vm.shipments[index].required_amount,
                                  expression: "shipments[index].required_amount"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "required_amount",
                                placeholder: "Enter name"
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
                                  value: _vm.shipments[index].delivery_amount,
                                  expression: "shipments[index].delivery_amount"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "delivery_amount",
                                placeholder: "Enter name"
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
                                placeholder: "Enter name"
                              },
                              domProps: { value: _vm.shipments[index].note },
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

/***/ "./resources/js/components/inputs/Select2Component.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/inputs/Select2Component.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select2Component.vue?vue&type=template&id=59d1db72& */ "./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72&");
/* harmony import */ var _Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select2Component.vue?vue&type=script&lang=js& */ "./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/inputs/Select2Component.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Select2Component.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inputs/Select2Component.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Select2Component.vue?vue&type=template&id=59d1db72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/inputs/Select2Component.vue?vue&type=template&id=59d1db72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select2Component_vue_vue_type_template_id_59d1db72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/services/drivers.js":
/*!******************************************!*\
  !*** ./resources/js/services/drivers.js ***!
  \******************************************/
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers"), options);

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
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(driver) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            response = axios.post('/api/user/drivers', driver, {
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
  _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(driver, id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = axios.put('/api/user/drivers/' + id, driver, {
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/").concat(id), {
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
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/").concat(id), {
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/list-drivers"), {
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
		8
	],
	"./AppLayout.vue": [
		"./resources/js/views/layouts/AppLayout.vue",
		8
	],
	"./Layout": [
		"./resources/js/views/layouts/Layout.js"
	],
	"./Layout.js": [
		"./resources/js/views/layouts/Layout.js"
	],
	"./LayoutDefault": [
		"./resources/js/views/layouts/LayoutDefault.vue",
		2
	],
	"./LayoutDefault.vue": [
		"./resources/js/views/layouts/LayoutDefault.vue",
		2
	],
	"./LayoutEmpty": [
		"./resources/js/views/layouts/LayoutEmpty.vue",
		3
	],
	"./LayoutEmpty.vue": [
		"./resources/js/views/layouts/LayoutEmpty.vue",
		3
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

/***/ "./resources/js/views/shipments/Update.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/shipments/Update.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Update.vue?vue&type=template&id=31ead71e& */ "./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e&");
/* harmony import */ var _Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update.vue?vue&type=script&lang=js& */ "./resources/js/views/shipments/Update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/shipments/Update.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/shipments/Update.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/shipments/Update.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Update.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Update.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Update.vue?vue&type=template&id=31ead71e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Update.vue?vue&type=template&id=31ead71e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Update_vue_vue_type_template_id_31ead71e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);