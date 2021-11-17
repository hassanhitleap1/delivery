(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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
/* harmony import */ var _services_drivers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/drivers */ "./resources/js/services/drivers.js");
/* harmony import */ var _services_regions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/regions */ "./resources/js/services/regions.js");
/* harmony import */ var _services_areas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/areas */ "./resources/js/services/areas.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Layout: _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      errors: null,
      success: false,
      shipments: [{
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
      }],
      divers: [],
      regions: [],
      areas: []
    };
  },
  mounted: function mounted() {
    this.get_drivers();
    this.get_regions();
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

      _services_drivers__WEBPACK_IMPORTED_MODULE_2__["get"].then(function (_ref4) {
        var data = _ref4.data;
        _this.drivers = res.data.data.map(function (driver) {
          return {
            id: driver.id,
            text: driver.name
          };
        });
      })["catch"](function (err) {
        console.log(err);
      });
      apidrivers.get().then(function (_ref5) {
        var data = _ref5.data;
        _this.drivers = res.data.data.map(function (driver) {
          return {
            id: driver.id,
            text: driver.name
          };
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    get_regions: function get_regions() {
      var _this2 = this;

      _services_regions__WEBPACK_IMPORTED_MODULE_3__["get_all"]().then(function (res) {
        _this2.regions = res.data.data.map(function (region) {
          return {
            id: region.id,
            text: region.name
          };
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    get_areas: function get_areas(region_id) {
      var _this3 = this;

      _services_areas__WEBPACK_IMPORTED_MODULE_4__["get_areas_region"](region_id).then(function (res) {
        _this3.areas = res.data.data.map(function (region) {
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
      var _this4 = this;

      _services_shipments__WEBPACK_IMPORTED_MODULE_0__["create"](this.shipments).then(function (response) {
        _this4.errors = [];

        _this4.shipments.forEach(function (index, shipment) {
          _this4.shipments[index].driver_id = null;
          _this4.shipments[index].customer_id = null;
          _this4.shipments[index].status_id = null;
          _this4.shipments[index].country_id = null;
          _this4.shipments[index].region_id = null;
          _this4.shipments[index].areas_id = null;
          _this4.shipments[index].address = null;
          _this4.shipments[index].delivery_amount = null;
          _this4.shipments[index].required_amount = null;
          _this4.shipments[index].phone = null;
          _this4.shipments[index].other_phone = null;
        });

        _this4.success = true;

        _this4.$router.push({
          name: 'admins'
        });
      })["catch"](function (error) {
        _this4.errors = error.response.data.errors;
        _this4.success = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e& ***!
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
                _c("p", [
                  _c("button", {
                    staticClass: "btn btn-primary",
                    on: { click: _vm.add_shipment }
                  })
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
                    _vm._l(_vm.shipments, function(index, shipment) {
                      return _c("div", { key: index, staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-2" }, [
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("policy_number")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].policy_number,
                                  expression: "shipments[index].policy_number"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "policy_number",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].policy_number
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "policy_number",
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
                              _vm._v("name")
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
                              _vm._v("customer_id")
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
                              _vm._v("status_id")
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
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("country_id")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].country_id,
                                  expression: "shipments[index].country_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "country_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].country_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "country_id",
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
                              _vm._v("region_id")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].region_id,
                                  expression: "shipments[index].region_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "region_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].region_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "region_id",
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
                              _vm._v("areas_id")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.shipments[index].areas_id,
                                  expression: "shipments[index].areas_id"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "areas_id",
                                placeholder: "Enter name"
                              },
                              domProps: {
                                value: _vm.shipments[index].areas_id
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.shipments[index],
                                    "areas_id",
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
                                placeholder: "Enter name"
                              },
                              domProps: { value: _vm.shipments[index].address },
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
                              _vm._v("required_amount")
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
                              _vm._v("delivery_amount")
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

/***/ "./resources/js/services/areas.js":
/*!****************************************!*\
  !*** ./resources/js/services/areas.js ***!
  \****************************************/
/*! exports provided: get_all, create, update, get_area, _delete, get_areas_region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_area", function() { return get_area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_areas_region", function() { return get_areas_region; });
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/areas"), options);

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
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(area) {
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: area
            };
            response = axios.post('/api/areas', options);
            return _context2.abrupt("return", response);

          case 3:
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
  _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(area, id) {
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: area
            };
            response = axios.put('/api/areas/' + id, options);
            return _context3.abrupt("return", response);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function get_area(_x4) {
  return _get_area.apply(this, arguments);
}

function _get_area() {
  _get_area = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/areas/").concat(id), {
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
  return _get_area.apply(this, arguments);
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
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/areas/").concat(id), {
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

function get_areas_region(_x6) {
  return _get_areas_region.apply(this, arguments);
}

function _get_areas_region() {
  _get_areas_region = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(region_id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/areas"), {
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
  return _get_areas_region.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/services/drivers.js":
/*!******************************************!*\
  !*** ./resources/js/services/drivers.js ***!
  \******************************************/
/*! exports provided: get_all, create, update, get_one, _delete, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_one", function() { return get_one; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_delete", function() { return _delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
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
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: driver
            };
            response = axios.post('/api/user/drivers', options);
            return _context2.abrupt("return", response);

          case 3:
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
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: driver
            };
            response = axios.put('/api/user/drivers/' + id, options);
            return _context3.abrupt("return", response);

          case 3:
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
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/").concat(id), options);

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
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/").concat(id), options);

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

function get() {
  return _get.apply(this, arguments);
}

function _get() {
  _get = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/user/drivers/get"), options);

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
  return _get.apply(this, arguments);
}

/***/ }),

/***/ "./resources/js/services/regions.js":
/*!******************************************!*\
  !*** ./resources/js/services/regions.js ***!
  \******************************************/
/*! exports provided: get_all, create, update, get_region, _delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_all", function() { return get_all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_region", function() { return get_region; });
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
        response,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
            keywords = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            _context.next = 4;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/regions"), {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"]
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
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
  _create = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(region) {
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: region
            };
            _context2.next = 3;
            return axios.post('/api/regions', options);

          case 3:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 5:
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
  _update = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(region, id) {
    var options, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              headers: _common_jwt_service__WEBPACK_IMPORTED_MODULE_2__["JSON_HEADERS"],
              data: region
            };
            response = axios.put('/api/regions/' + id, options);
            return _context3.abrupt("return", response);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update.apply(this, arguments);
}

function get_region(_x4) {
  return _get_region.apply(this, arguments);
}

function _get_region() {
  _get_region = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/regions/").concat(id), {
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
  return _get_region.apply(this, arguments);
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
            return axios["delete"]("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/regions/").concat(id), {
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

/***/ "./resources/js/services/shipments.js":
/*!********************************************!*\
  !*** ./resources/js/services/shipments.js ***!
  \********************************************/
/*! exports provided: get_shipments, create, update_shipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_shipments", function() { return get_shipments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update_shipment", function() { return update_shipment; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./resources/js/globals.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function get_shipments() {
  return _get_shipments.apply(this, arguments);
}

function _get_shipments() {
  _get_shipments = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios.get("".concat(_globals__WEBPACK_IMPORTED_MODULE_1__["api_url"], "/shipments"));

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _get_shipments.apply(this, arguments);
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
            response = axios.post('/api/user/shipments', shipment);
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

function update_shipment(_x2, _x3) {
  return _update_shipment.apply(this, arguments);
}

function _update_shipment() {
  _update_shipment = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(shipment, id) {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = axios.put('/api/user/shipments/' + id, shipment);
            return _context3.abrupt("return", response);

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _update_shipment.apply(this, arguments);
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
		9
	],
	"./AppLayout.vue": [
		"./resources/js/views/layouts/AppLayout.vue",
		9
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

/***/ "./resources/js/views/shipments/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=d5aa245e& */ "./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/shipments/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=d5aa245e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/shipments/Create.vue?vue&type=template&id=d5aa245e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_d5aa245e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);