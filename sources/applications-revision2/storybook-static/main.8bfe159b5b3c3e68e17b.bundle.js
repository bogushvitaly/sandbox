(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    104: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return DummyService;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        DummyService = (function() {
          function DummyService() {}
          return (
            (DummyService.prototype.getItems = function() {
              return new Promise(function(resolve) {
                setTimeout(function() {
                  resolve(["Joe", "Jane"]);
                }, 2e3);
              });
            }),
            (DummyService = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:paramtypes",
                  []
                )
              ],
              DummyService
            ))
          );
        })();
    },
    138: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return CustomPipePipe;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        CustomPipePipe = (function() {
          function CustomPipePipe() {}
          return (
            (CustomPipePipe.prototype.transform = function(value, args) {
              return "CustomPipe: " + value;
            }),
            (CustomPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
                  name: "customPipe"
                })
              ],
              CustomPipePipe
            ))
          );
        })();
    },
    139: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return BaseButtonComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        BaseButtonComponent = (function() {
          function BaseButtonComponent() {}
          return (
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  String
                )
              ],
              BaseButtonComponent.prototype,
              "label",
              void 0
            ),
            (BaseButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-base-button",
                  template: "\n    <button>{{ label }}</button>\n  "
                })
              ],
              BaseButtonComponent
            ))
          );
        })();
    },
    192: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return SimpleKnobsComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        SimpleKnobsComponent = (function() {
          function SimpleKnobsComponent() {}
          return (
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              SimpleKnobsComponent.prototype,
              "name",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              SimpleKnobsComponent.prototype,
              "age",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              SimpleKnobsComponent.prototype,
              "phoneNumber",
              void 0
            ),
            (SimpleKnobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-simple-knobs-component",
                  template:
                    "\n    <div>I am {{ name }} and I'm {{ age }} years old.</div>\n    <div>Phone Number: {{ phoneNumber }}</div>\n  "
                })
              ],
              SimpleKnobsComponent
            ))
          );
        })();
    },
    193: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return DiComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        TEST_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
          "test"
        ),
        DiComponent = (function() {
          function DiComponent(injector, elRef, testToken) {
            (this.injector = injector),
              (this.elRef = elRef),
              (this.testToken = testToken);
          }
          var _a, _b;
          return (
            (DiComponent.prototype.isAllDeps = function() {
              return Boolean(
                this.testToken && this.elRef && this.injector && this.title
              );
            }),
            (DiComponent.prototype.elRefStr = function() {
              return JSON.stringify(this.elRef);
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  String
                )
              ],
              DiComponent.prototype,
              "title",
              void 0
            ),
            (DiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-di-component",
                  template: __webpack_require__(723),
                  providers: [{ provide: TEST_TOKEN, useValue: 123 }]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__param(
                  2,
                  Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(
                    TEST_TOKEN
                  )
                ),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:paramtypes",
                  [
                    "function" ==
                    typeof (_a =
                      void 0 !==
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector &&
                      _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector)
                      ? _a
                      : Object,
                    "function" ==
                    typeof (_b =
                      void 0 !==
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef &&
                      _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)
                      ? _b
                      : Object,
                    Number
                  ]
                )
              ],
              DiComponent
            ))
          );
        })();
    },
    194: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return NameComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        NameComponent = (function() {
          function NameComponent() {}
          return (
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              NameComponent.prototype,
              "field",
              void 0
            ),
            (NameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-name",
                  template: "\n    <h1>{{ field | customPipe }}</h1>\n  "
                })
              ],
              NameComponent
            ))
          );
        })();
    },
    195: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return ServiceComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104),
        ServiceComponent = (function() {
          function ServiceComponent(dummy) {
            this.dummy = dummy;
          }
          var _a;
          return (
            (ServiceComponent.prototype.ngOnInit = function() {
              return tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter(
                this,
                void 0,
                void 0,
                function() {
                  var _a;
                  return tslib__WEBPACK_IMPORTED_MODULE_0__.__generator(
                    this,
                    function(_b) {
                      switch (_b.label) {
                        case 0:
                          return (_a = this), [4, this.dummy.getItems()];
                        case 1:
                          return (_a.items = _b.sent()), [2];
                      }
                    }
                  );
                }
              );
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              ServiceComponent.prototype,
              "name",
              void 0
            ),
            (ServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-simple-service-component",
                  template:
                    '\n    <p>{{ name }}:</p>\n    <ul>\n      <li *ngFor="let item of items">{{ item }}</li>\n    </ul>\n  '
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:paramtypes",
                  [
                    "function" ==
                    typeof (_a =
                      void 0 !==
                        _dummy_service__WEBPACK_IMPORTED_MODULE_2__.a &&
                      _dummy_service__WEBPACK_IMPORTED_MODULE_2__.a)
                      ? _a
                      : Object
                  ]
                )
              ],
              ServiceComponent
            ))
          );
        })();
    },
    28: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return ITEMS;
      }),
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return DEFAULT_NAME;
        }),
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return TokenComponent;
        });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        ITEMS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
          "TokenComponent.Items"
        ),
        DEFAULT_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken(
          "TokenComponent.DefaultName"
        ),
        TokenComponent = (function() {
          function TokenComponent(defaultName, items) {
            (this.name = defaultName), (this.items = items);
          }
          return (
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              TokenComponent.prototype,
              "name",
              void 0
            ),
            (TokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-simple-token-component",
                  template:
                    '\n    <h3>{{ name }}</h3>\n    <p>Items:</p>\n    <ul>\n      <li *ngFor="let item of items">{{ item }}</li>\n    </ul>\n  '
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__param(
                  0,
                  Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional)()
                ),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__param(
                  0,
                  Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(
                    DEFAULT_NAME
                  )
                ),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__param(
                  1,
                  Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject)(
                    ITEMS
                  )
                ),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:paramtypes",
                  [String, Array]
                )
              ],
              TokenComponent
            ))
          );
        })();
    },
    283: function(module, exports) {
      function webpackEmptyAsyncContext(req) {
        return Promise.resolve().then(function() {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        });
      }
      (webpackEmptyAsyncContext.keys = function() {
        return [];
      }),
        (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
        (module.exports = webpackEmptyAsyncContext),
        (webpackEmptyAsyncContext.id = 283);
    },
    302: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return AllKnobsComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        AllKnobsComponent = (function() {
          function AllKnobsComponent() {
            console.log("constructor");
          }
          return (
            (AllKnobsComponent.prototype.ngOnInit = function() {
              console.log("on init, user component");
            }),
            (AllKnobsComponent.prototype.ngOnChanges = function(changes) {
              console.log(changes);
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "price",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "border",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "fruit",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "name",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "items",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "today",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "stock",
              void 0
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  Object
                )
              ],
              AllKnobsComponent.prototype,
              "nice",
              void 0
            ),
            (AllKnobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-simple-knobs-component",
                  template:
                    '\n    <div [ngStyle]="{ border: \'2px dotted \' + border, \'padding.px\': \'8 22\', \'border-radius.px\': \'8\' }">\n      <h1>My name is {{ name }},</h1>\n      <h3>today is {{ today | date }}</h3>\n      <p *ngIf="stock">I have a stock of {{ stock }} {{ fruit }}, costing $ {{ price }} each.</p>\n      <p *ngIf="!stock">I\'m out of {{ fruit }}.</p>\n      <p *ngIf="stock && nice">Sorry.</p>\n      <p>Also, I have:</p>\n      <ul>\n        <li *ngFor="let item of items">{{ item }}</li>\n      </ul>\n      <p *ngIf="nice">Nice to meet you!</p>\n      <p *ngIf="!nice">Leave me alone!</p>\n    </div>\n  '
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:paramtypes",
                  []
                )
              ],
              AllKnobsComponent
            ))
          );
        })();
    },
    303: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return StyledComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        StyledComponent = (function() {
          function StyledComponent() {}
          return (StyledComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                selector: "storybook-styled-component",
                template: __webpack_require__(725),
                styles: [__webpack_require__(726)]
              })
            ],
            StyledComponent
          ));
        })();
    },
    304: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return CustomCvaComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190),
        NOOP = function() {},
        CustomCvaComponent = (function() {
          function CustomCvaComponent() {
            (this.onChange = NOOP), (this.onTouch = NOOP);
          }
          var CustomCvaComponent_1;
          return (
            (CustomCvaComponent_1 = CustomCvaComponent),
            Object.defineProperty(CustomCvaComponent.prototype, "value", {
              get: function() {
                return this.internalValue;
              },
              set: function(value) {
                value !== this.internalValue &&
                  ((this.internalValue = value), this.onChange(value));
              },
              enumerable: !0,
              configurable: !0
            }),
            (CustomCvaComponent.prototype.writeValue = function(value) {
              value !== this.internalValue && (this.internalValue = value);
            }),
            (CustomCvaComponent.prototype.registerOnChange = function(fn) {
              this.onChange = fn;
            }),
            (CustomCvaComponent.prototype.registerOnTouched = function(fn) {
              this.onTouch = fn;
            }),
            (CustomCvaComponent.prototype.setDisabledState = function(
              isDisabled
            ) {
              this.disabled = isDisabled;
            }),
            (CustomCvaComponent = CustomCvaComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-custom-cva-component",
                  template:
                    '\n    <div>{{ value }}</div>\n    <input type="text" [(ngModel)]="value" />\n  ',
                  providers: [
                    {
                      provide:
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                      useExisting: Object(
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef
                      )(function() {
                        return CustomCvaComponent_1;
                      }),
                      multi: !0
                    }
                  ]
                })
              ],
              CustomCvaComponent
            ))
          );
        })();
    },
    305: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return IconButtonComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        IconButtonComponent = (function(_super) {
          function IconButtonComponent() {
            return (null !== _super && _super.apply(this, arguments)) || this;
          }
          return (
            tslib__WEBPACK_IMPORTED_MODULE_0__.__extends(
              IconButtonComponent,
              _super
            ),
            tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input)(),
                tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                  "design:type",
                  String
                )
              ],
              IconButtonComponent.prototype,
              "icon",
              void 0
            ),
            (IconButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
              [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                  selector: "storybook-icon-button",
                  template:
                    "\n    <button>{{ label }} - {{ icon }}</button>\n  "
                })
              ],
              IconButtonComponent
            ))
          );
        })(__webpack_require__(139).a);
    },
    306: function(module, exports, __webpack_require__) {
      __webpack_require__(307),
        __webpack_require__(385),
        (module.exports = __webpack_require__(386));
    },
    386: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            2
          );
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.addParameters)(
            {
              options: {
                name: "Storybook",
                url: "#",
                goFullScreen: !1,
                showStoriesPanel: !0,
                showAddonPanel: !0,
                showSearchBox: !1,
                addonPanelInRight: !1,
                sortStoriesByKind: !1,
                hierarchySeparator: null,
                hierarchyRootSeparator: /\|/,
                sidebarAnimations: !0,
                selectedAddonPanel: void 0,
                enableShortcuts: !1
              }
            }
          ),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.configure)(
              function loadStories() {
                __webpack_require__(622);
                var req = __webpack_require__(633);
                req.keys().forEach(function(filename) {
                  return req(filename);
                });
              },
              module
            );
        }.call(this, __webpack_require__(12)(module));
    },
    622: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              81
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { linkTo } from '@storybook/addon-links';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\nimport { Button, Welcome } from '@storybook/angular/demo';\n\nstoriesOf('Welcome', module).add('to Storybook', () => ({\n  template: `<storybook-welcome-component (showApp)=\"showApp()\"></storybook-welcome-component>`,\n  props: {\n    showApp: linkTo('Button'),\n  },\n  moduleMetadata: {\n    declarations: [Welcome],\n  },\n}));\n\nstoriesOf('Button', module)\n  .addDecorator(\n    moduleMetadata({\n      declarations: [Button],\n    })\n  )\n  .add('with text', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: 'Hello Button',\n      onClick: event => {\n        console.log('some bindings work');\n        console.log(event);\n      },\n    },\n  }))\n  .add('with some emoji', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: '😀 😎 👍 💯',\n      onClick: () => {},\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "welcome--to-storybook": {
                startLoc: { col: 33, line: 5 },
                endLoc: { col: 2, line: 13 }
              },
              "button--with-some-emoji": {
                startLoc: { col: 7, line: 31 },
                endLoc: { col: 4, line: 37 }
              },
              "button--with-text": {
                startLoc: { col: 7, line: 21 },
                endLoc: { col: 4, line: 30 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Welcome",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("to Storybook", function() {
              return {
                template:
                  '<storybook-welcome-component (showApp)="showApp()"></storybook-welcome-component>',
                props: {
                  showApp: Object(
                    _storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__.linkTo
                  )("Button")
                },
                moduleMetadata: {
                  declarations: [
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome
                  ]
                }
              };
            }),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              "Button",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .addDecorator(
                Object(
                  _storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata
                )({
                  declarations: [
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button
                  ]
                })
              )
              .add("with text", function() {
                return {
                  template:
                    '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                  props: {
                    text: "Hello Button",
                    onClick: function(event) {
                      console.log("some bindings work"), console.log(event);
                    }
                  }
                };
              })
              .add("with some emoji", function() {
                return {
                  template:
                    '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                  props: { text: "😀 😎 👍 💯", onClick: function() {} }
                };
              });
        }.call(this, __webpack_require__(12)(module));
    },
    633: function(module, exports, __webpack_require__) {
      var map = {
        "./addon-actions.stories.ts": 634,
        "./addon-background.stories.ts": 709,
        "./addon-centered.stories.ts": 710,
        "./addon-knobs.stories.ts": 712,
        "./addon-links.stories.ts": 719,
        "./addon-notes.stories.ts": 720,
        "./app.component.stories.ts": 721,
        "./component-with-di/di.component.stories.ts": 722,
        "./component-with-style/styled.component.stories.ts": 724,
        "./core.stories.ts": 727,
        "./custom-ng-content.stories.ts": 728,
        "./custom-pipes.stories.ts": 729,
        "./custom-providers.stories.ts": 730,
        "./custom-styles.stories.ts": 731,
        "./customControlValueAccessor/custom-cva-component.stories.ts": 732,
        "./demo.stories.ts": 733,
        "./inheritance/inheritance.stories.ts": 735,
        "./metadata-combined.stories.ts": 736,
        "./metadata-individual.stories.ts": 737,
        "./metadata-shared.stories.ts": 738,
        "./ngrx-store.stories.ts": 739
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 633);
    },
    634: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              31
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { action } from '@storybook/addon-actions';\nimport { storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nstoriesOf('Addon|Actions', module)\n  .add('Action only', () => ({\n    component: Button,\n    props: {\n      text: 'Action only',\n      onClick: action('log 1'),\n    },\n  }))\n  .add('Action and method', () => ({\n    component: Button,\n    props: {\n      text: 'Action and Method',\n      onClick: e => {\n        console.log(e);\n        e.preventDefault();\n        action('log2')(e.target);\n      },\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "addon-actions--action-and-method": {
                startLoc: { col: 7, line: 13 },
                endLoc: { col: 4, line: 23 }
              },
              "addon-actions--action-only": {
                startLoc: { col: 7, line: 6 },
                endLoc: { col: 4, line: 12 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Addon|Actions",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("Action only", function() {
              return {
                component:
                  _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,
                props: {
                  text: "Action only",
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                  )("log 1")
                }
              };
            })
            .add("Action and method", function() {
              return {
                component:
                  _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,
                props: {
                  text: "Action and Method",
                  onClick: function(e) {
                    console.log(e),
                      e.preventDefault(),
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                      )("log2")(e.target);
                  }
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    709: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11
            ),
            _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              82
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { moduleMetadata, storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nimport { AppComponent } from './app.component';\n\nstoriesOf('Addon|Background', module)\n  .addParameters({\n    backgrounds: [{ name: 'twitter', value: '#00aced', default: true }, { name: 'facebook', value: '#3b5998' }],\n  })\n  .add('background component', () => ({\n    component: AppComponent,\n    props: {},\n  }));\n\nstoriesOf('Addon|Background', module)\n  .addDecorator(\n    moduleMetadata({\n      declarations: [Button],\n    })\n  )\n  .addParameters({\n    backgrounds: [{ name: 'twitter', value: '#00aced', default: true }, { name: 'facebook', value: '#3b5998' }],\n  })\n  .add('background template', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: 'Hello Button',\n      onClick: (event: Event) => {\n        console.log('some bindings work');\n        console.log(event);\n      },\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "addon-background--background-component": {
                startLoc: { col: 7, line: 10 },
                endLoc: { col: 4, line: 13 }
              },
              "addon-background--background-template": {
                startLoc: { col: 7, line: 24 },
                endLoc: { col: 4, line: 33 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Addon|Background",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addParameters({
              backgrounds: [
                { name: "twitter", value: "#00aced", default: !0 },
                { name: "facebook", value: "#3b5998" }
              ]
            })
            .add("background component", function() {
              return {
                component: _app_component__WEBPACK_IMPORTED_MODULE_2__.a,
                props: {}
              };
            }),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
              "Addon|Background",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .addDecorator(
                Object(
                  _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata
                )({
                  declarations: [
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__.Button
                  ]
                })
              )
              .addParameters({
                backgrounds: [
                  { name: "twitter", value: "#00aced", default: !0 },
                  { name: "facebook", value: "#3b5998" }
                ]
              })
              .add("background template", function() {
                return {
                  template:
                    '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                  props: {
                    text: "Hello Button",
                    onClick: function(event) {
                      console.log("some bindings work"), console.log(event);
                    }
                  }
                };
              });
        }.call(this, __webpack_require__(12)(module));
    },
    710: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_centered_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              191
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11
            ),
            _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              82
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { centered } from '@storybook/addon-centered/angular';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nimport { AppComponent } from './app.component';\n\nstoriesOf('Addon|Centered', module)\n  .addDecorator(centered)\n  .add('centered component', () => ({\n    component: AppComponent,\n    props: {},\n  }));\n\nstoriesOf('Addon|Centered', module)\n  .addDecorator(\n    moduleMetadata({\n      declarations: [Button],\n    })\n  )\n  .addDecorator(centered)\n  .add('centered template', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: 'Hello Button',\n      onClick: (event: Event) => {\n        console.log('some bindings work');\n        console.log(event);\n      },\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "addon-centered--centered-component": {
                startLoc: { col: 7, line: 9 },
                endLoc: { col: 4, line: 12 }
              },
              "addon-centered--centered-template": {
                startLoc: { col: 7, line: 21 },
                endLoc: { col: 4, line: 30 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Addon|Centered",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              _storybook_addon_centered_angular__WEBPACK_IMPORTED_MODULE_0__.a
            )
            .add("centered component", function() {
              return {
                component: _app_component__WEBPACK_IMPORTED_MODULE_3__.a,
                props: {}
              };
            }),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              "Addon|Centered",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .addDecorator(
                Object(
                  _storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata
                )({
                  declarations: [
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button
                  ]
                })
              )
              .addDecorator(
                _storybook_addon_centered_angular__WEBPACK_IMPORTED_MODULE_0__.a
              )
              .add("centered template", function() {
                return {
                  template:
                    '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                  props: {
                    text: "Hello Button",
                    onClick: function(event) {
                      console.log("some bindings work"), console.log(event);
                    }
                  }
                };
              });
        }.call(this, __webpack_require__(12)(module));
    },
    712: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              31
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              10
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              2
            ),
            _all_knobs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              302
            ),
            _knobs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              192
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { action } from '@storybook/addon-actions';\nimport { array, boolean, button, color, date, number, radios, select, text, withKnobs } from '@storybook/addon-knobs';\nimport { storiesOf } from '@storybook/angular';\n\nimport { AllKnobsComponent } from './all-knobs.component';\nimport { SimpleKnobsComponent } from './knobs.component';\n\nstoriesOf('Addon|Knobs', module)\n  .addDecorator(withKnobs)\n  .add('Simple', () => {\n    const name = text('name', 'John Doe');\n    const age = number('age', 0);\n    const phoneNumber = text('phoneNumber', '555-55-55');\n\n    return {\n      moduleMetadata: {\n        entryComponents: [SimpleKnobsComponent],\n        declarations: [SimpleKnobsComponent],\n      },\n      template: `\n        <h1> This is a template </h1>\n        <storybook-simple-knobs-component\n          [age]=\"age\"\n          [phoneNumber]=\"phoneNumber\"\n          [name]=\"name\"\n        >\n        </storybook-simple-knobs-component>\n      `,\n      props: {\n        name,\n        age,\n        phoneNumber,\n      },\n    };\n  })\n  .add('All knobs', () => {\n    const name = text('name', 'Jane');\n    const stock = number('stock', 20, {\n      range: true,\n      min: 0,\n      max: 30,\n      step: 5,\n    });\n    const fruits = {\n      Apple: 'apples',\n      Banana: 'bananas',\n      Cherry: 'cherries',\n    };\n    const fruit = select('fruit', fruits, 'apples');\n    const otherFruits = {\n      Kiwi: 'kiwi',\n      Guava: 'guava',\n      Watermelon: 'watermelon',\n    };\n    const otherFruit = radios('Other Fruit', otherFruits, 'watermelon');\n    const price = number('price', 2.25);\n\n    const border = color('border', 'deeppink');\n    const today = date('today', new Date('Jan 20 2017'));\n    const items = array('items', ['Laptop', 'Book', 'Whiskey']);\n    const nice = boolean('nice', true);\n    button('Arbitrary action', action('You clicked it!'));\n\n    return {\n      component: AllKnobsComponent,\n      props: {\n        name,\n        stock,\n        fruit,\n        otherFruit,\n        price,\n        border,\n        today,\n        items,\n        nice,\n      },\n    };\n  })\n  .add('XSS safety', () => ({\n    template: text('Rendered string', '<img src=x onerror=\"alert(\\'XSS Attack\\')\" >'),\n  }));\n",
            __ADDS_MAP__ = {
              "addon-knobs--xss-safety": {
                startLoc: { col: 7, line: 79 },
                endLoc: { col: 4, line: 81 }
              },
              "addon-knobs--all-knobs": {
                startLoc: { col: 7, line: 36 },
                endLoc: { col: 3, line: 78 }
              },
              "addon-knobs--simple": {
                startLoc: { col: 7, line: 10 },
                endLoc: { col: 3, line: 35 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
            "Addon|Knobs",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs
            )
            .add("Simple", function() {
              var name = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                )("name", "John Doe"),
                age = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                )("age", 0),
                phoneNumber = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                )("phoneNumber", "555-55-55");
              return {
                moduleMetadata: {
                  entryComponents: [
                    _knobs_component__WEBPACK_IMPORTED_MODULE_4__.a
                  ],
                  declarations: [
                    _knobs_component__WEBPACK_IMPORTED_MODULE_4__.a
                  ]
                },
                template:
                  '\n        <h1> This is a template </h1>\n        <storybook-simple-knobs-component\n          [age]="age"\n          [phoneNumber]="phoneNumber"\n          [name]="name"\n        >\n        </storybook-simple-knobs-component>\n      ',
                props: { name: name, age: age, phoneNumber: phoneNumber }
              };
            })
            .add("All knobs", function() {
              var name = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                )("name", "Jane"),
                stock = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                )("stock", 20, { range: !0, min: 0, max: 30, step: 5 }),
                fruit = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select
                )(
                  "fruit",
                  { Apple: "apples", Banana: "bananas", Cherry: "cherries" },
                  "apples"
                ),
                otherFruit = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.radios
                )(
                  "Other Fruit",
                  { Kiwi: "kiwi", Guava: "guava", Watermelon: "watermelon" },
                  "watermelon"
                ),
                price = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number
                )("price", 2.25),
                border = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.color
                )("border", "deeppink"),
                today = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.date
                )("today", new Date("Jan 20 2017")),
                items = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.array
                )("items", ["Laptop", "Book", "Whiskey"]),
                nice = Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean
                )("nice", !0);
              return (
                Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.button
                )(
                  "Arbitrary action",
                  Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                  )("You clicked it!")
                ),
                {
                  component:
                    _all_knobs_component__WEBPACK_IMPORTED_MODULE_3__.a,
                  props: {
                    name: name,
                    stock: stock,
                    fruit: fruit,
                    otherFruit: otherFruit,
                    price: price,
                    border: border,
                    today: today,
                    items: items,
                    nice: nice
                  }
                }
              );
            })
            .add("XSS safety", function() {
              return {
                template: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                )(
                  "Rendered string",
                  "<img src=x onerror=\"alert('XSS Attack')\" >"
                )
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    719: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              81
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { linkTo } from '@storybook/addon-links';\nimport { storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nstoriesOf('Addon|Links', module).add('button with link to another story', () => ({\n  component: Button,\n  props: {\n    text: 'Go to Welcome Story',\n    onClick: linkTo('Welcome'),\n  },\n}));\n",
            __ADDS_MAP__ = {
              "addon-links--button-with-link-to-another-story": {
                startLoc: { col: 37, line: 5 },
                endLoc: { col: 2, line: 11 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Addon|Links",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("button with link to another story", function() {
              return {
                component:
                  _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,
                props: {
                  text: "Go to Welcome Story",
                  onClick: Object(
                    _storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__.linkTo
                  )("Welcome")
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    720: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nstoriesOf('Addon|Notes', module)\n  .add(\n    'Simple note',\n    () => ({\n      component: Button,\n      props: {\n        text: 'Notes on some Button',\n        onClick: () => {},\n      },\n    }),\n    { notes: 'My notes on some button' }\n  )\n  .add(\n    'Note with HTML',\n    () => ({\n      component: Button,\n      props: {\n        text: 'Notes with HTML',\n        onClick: () => {},\n      },\n    }),\n    {\n      notes: `\n      <h2>My notes on emojis</h2>\n\n      <em>It's not all that important to be honest, but..</em>\n\n      Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇\n    `,\n    }\n  );\n",
            __ADDS_MAP__ = {
              "addon-notes--note-with-html": {
                startLoc: { col: 4, line: 17 },
                endLoc: { col: 5, line: 33 }
              },
              "addon-notes--simple-note": {
                startLoc: { col: 4, line: 6 },
                endLoc: { col: 40, line: 14 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Addon|Notes",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add(
              "Simple note",
              function() {
                return {
                  component:
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__.Button,
                  props: {
                    text: "Notes on some Button",
                    onClick: function() {}
                  }
                };
              },
              { notes: "My notes on some button" }
            )
            .add(
              "Note with HTML",
              function() {
                return {
                  component:
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_1__.Button,
                  props: { text: "Notes with HTML", onClick: function() {} }
                };
              },
              {
                notes:
                  "\n      <h2>My notes on emojis</h2>\n\n      <em>It's not all that important to be honest, but..</em>\n\n      Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇\n    "
              }
            );
        }.call(this, __webpack_require__(12)(module));
    },
    721: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              82
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\n\nimport { AppComponent } from './app.component';\n\nstoriesOf('App Component', module).add('Component with separate template', () => ({\n  component: AppComponent,\n  props: {},\n}));\n",
            __ADDS_MAP__ = {
              "app-component--component-with-separate-template": {
                startLoc: { col: 39, line: 5 },
                endLoc: { col: 2, line: 8 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "App Component",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("Component with separate template", function() {
              return {
                component: _app_component__WEBPACK_IMPORTED_MODULE_1__.a,
                props: {}
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    722: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              10
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _di_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              193
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { text, withKnobs } from '@storybook/addon-knobs';\nimport { storiesOf } from '@storybook/angular';\n\nimport { DiComponent } from './di.component';\n\nstoriesOf('Custom|Dependencies', module)\n  .add('inputs and inject dependencies', () => ({\n    component: DiComponent,\n    props: {\n      title: 'Component dependencies',\n    },\n  }))\n  .addDecorator(withKnobs)\n  .add('inputs and inject dependencies with knobs', () => ({\n    component: DiComponent,\n    props: {\n      title: text('title', 'Component dependencies'),\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "custom-dependencies--inputs-and-inject-dependencies-with-knobs": {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 4, line: 19 }
              },
              "custom-dependencies--inputs-and-inject-dependencies": {
                startLoc: { col: 7, line: 7 },
                endLoc: { col: 4, line: 12 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Custom|Dependencies",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("inputs and inject dependencies", function() {
              return {
                component: _di_component__WEBPACK_IMPORTED_MODULE_2__.a,
                props: { title: "Component dependencies" }
              };
            })
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.withKnobs
            )
            .add("inputs and inject dependencies with knobs", function() {
              return {
                component: _di_component__WEBPACK_IMPORTED_MODULE_2__.a,
                props: {
                  title: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text
                  )("title", "Component dependencies")
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    723: function(module, exports) {
      module.exports =
        "<div>\n  <div>All dependencies are defined: {{ isAllDeps() }}</div>\n  <div>Title: {{ title }}</div>\n  <div>Injector: {{ injector.constructor.toString() }}</div>\n  <div>ElementRef: {{ elRefStr() }}</div>\n  <div>TestToken: {{ testToken }}</div>\n</div>\n";
    },
    724: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _styled_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              303
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\n\nimport { StyledComponent } from './styled.component';\n\nstoriesOf('Custom|styleUrls', module).add('Component with styles', () => ({\n  component: StyledComponent,\n}));\n",
            __ADDS_MAP__ = {
              "custom-styleurls--component-with-styles": {
                startLoc: { col: 42, line: 5 },
                endLoc: { col: 2, line: 7 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Custom|styleUrls",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("Component with styles", function() {
              return {
                component: _styled_component__WEBPACK_IMPORTED_MODULE_1__.a
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    725: function(module, exports) {
      module.exports =
        '<div>\n  <p class="red-color">Styled with scoped CSS</p>\n  <p class="blue-color">Styled with scoped SCSS</p>\n  <p class="green-color">Styled with global CSS</p>\n</div>\n';
    },
    726: function(module, exports) {
      module.exports = "div p.blue-color {\n  color: blue; }\n";
    },
    727: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { addParameters, storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nconst globalParameter = 'globalParameter';\nconst chapterParameter = 'chapterParameter';\nconst storyParameter = 'storyParameter';\n\naddParameters({ globalParameter });\n\nstoriesOf('Core|Parameters', module)\n  .addParameters({ chapterParameter })\n  .add(\n    'passed to story',\n    ({ parameters: { fileName, ...parameters } }) => ({\n      component: Button,\n      props: {\n        text: `Parameters are ${JSON.stringify(parameters)}`,\n        onClick: () => 0,\n      },\n    }),\n    { storyParameter }\n  );\n",
            __ADDS_MAP__ = {
              "core-parameters--passed-to-story": {
                startLoc: { col: 4, line: 13 },
                endLoc: { col: 22, line: 21 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.addParameters)(
            { globalParameter: "globalParameter" }
          ),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              "Core|Parameters",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .addParameters({ chapterParameter: "chapterParameter" })
              .add(
                "passed to story",
                function(_a) {
                  var _b = _a.parameters,
                    parameters = (_b.fileName,
                    tslib__WEBPACK_IMPORTED_MODULE_0__.__rest(_b, [
                      "fileName"
                    ]));
                  return {
                    component:
                      _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_2__.Button,
                    props: {
                      text: "Parameters are " + JSON.stringify(parameters),
                      onClick: function() {
                        return 0;
                      }
                    }
                  };
                },
                { storyParameter: "storyParameter" }
              );
        }.call(this, __webpack_require__(12)(module));
    },
    728: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              2
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { Component } from '@angular/core';\nimport { storiesOf } from '@storybook/angular';\n\n@Component({\n  selector: 'storybook-with-ng-content',\n  template: `\n    <div style=\"color: #1e88e5;\"><ng-content></ng-content></div>\n  `,\n})\nclass WithNgContentComponent {}\n\nstoriesOf('Custom|ng-content', module).add('Default', () => ({\n  template: `<storybook-with-ng-content><h1>This is rendered in ng-content</h1></storybook-with-ng-content>`,\n  moduleMetadata: {\n    declarations: [WithNgContentComponent],\n  },\n}));\n",
            __ADDS_MAP__ = {
              "custom-ng-content--default": {
                startLoc: { col: 43, line: 12 },
                endLoc: { col: 2, line: 17 }
              }
            },
            WithNgContentComponent = (function() {
              function WithNgContentComponent() {}
              return (WithNgContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
                [
                  Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                    selector: "storybook-with-ng-content",
                    template:
                      '\n    <div style="color: #1e88e5;"><ng-content></ng-content></div>\n  '
                  })
                ],
                WithNgContentComponent
              ));
            })();
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
            "Custom|ng-content",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("Default", function() {
              return {
                template:
                  "<storybook-with-ng-content><h1>This is rendered in ng-content</h1></storybook-with-ng-content>",
                moduleMetadata: { declarations: [WithNgContentComponent] }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    729: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              10
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _moduleMetadata_custom_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              138
            ),
            _moduleMetadata_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              194
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { text, withKnobs } from '@storybook/addon-knobs';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\n\nimport { CustomPipePipe } from './moduleMetadata/custom.pipe';\nimport { NameComponent } from './moduleMetadata/name.component';\n\nstoriesOf('Custom|Pipes', module)\n  .addDecorator(\n    moduleMetadata({\n      imports: [],\n      schemas: [],\n      declarations: [CustomPipePipe],\n      providers: [],\n    })\n  )\n  .add('Simple', () => ({\n    component: NameComponent,\n    props: {\n      field: 'foobar',\n    },\n  }))\n  .addDecorator(withKnobs)\n  .add('With Knobs', () => ({\n    component: NameComponent,\n    props: {\n      field: text('field', 'foobar'),\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "custom-pipes--with-knobs": {
                startLoc: { col: 7, line: 23 },
                endLoc: { col: 4, line: 28 }
              },
              "custom-pipes--simple": {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 4, line: 21 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Custom|Pipes",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata
              )({
                imports: [],
                schemas: [],
                declarations: [
                  _moduleMetadata_custom_pipe__WEBPACK_IMPORTED_MODULE_2__.a
                ],
                providers: []
              })
            )
            .add("Simple", function() {
              return {
                component:
                  _moduleMetadata_name_component__WEBPACK_IMPORTED_MODULE_3__.a,
                props: { field: "foobar" }
              };
            })
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.withKnobs
            )
            .add("With Knobs", function() {
              return {
                component:
                  _moduleMetadata_name_component__WEBPACK_IMPORTED_MODULE_3__.a,
                props: {
                  field: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text
                  )("field", "foobar")
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    730: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              10
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _moduleMetadata_dummy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              104
            ),
            _moduleMetadata_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              195
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { text, withKnobs } from '@storybook/addon-knobs';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\n\nimport { DummyService } from './moduleMetadata/dummy.service';\nimport { ServiceComponent } from './moduleMetadata/service.component';\n\nstoriesOf('Custom|Providers', module)\n  .addDecorator(\n    moduleMetadata({\n      imports: [],\n      schemas: [],\n      declarations: [],\n      providers: [DummyService],\n    })\n  )\n  .add('Simple', () => ({\n    component: ServiceComponent,\n    props: {\n      name: 'Static name',\n    },\n  }))\n  .addDecorator(withKnobs)\n  .add('With knobs', () => {\n    const name = text('name', 'Dynamic knob');\n\n    return {\n      component: ServiceComponent,\n      props: {\n        name,\n      },\n    };\n  });\n",
            __ADDS_MAP__ = {
              "custom-providers--with-knobs": {
                startLoc: { col: 7, line: 23 },
                endLoc: { col: 3, line: 32 }
              },
              "custom-providers--simple": {
                startLoc: { col: 7, line: 16 },
                endLoc: { col: 4, line: 21 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Custom|Providers",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata
              )({
                imports: [],
                schemas: [],
                declarations: [],
                providers: [
                  _moduleMetadata_dummy_service__WEBPACK_IMPORTED_MODULE_2__.a
                ]
              })
            )
            .add("Simple", function() {
              return {
                component:
                  _moduleMetadata_service_component__WEBPACK_IMPORTED_MODULE_3__.a,
                props: { name: "Static name" }
              };
            })
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.withKnobs
            )
            .add("With knobs", function() {
              var name = Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_0__.text
              )("name", "Dynamic knob");
              return {
                component:
                  _moduleMetadata_service_component__WEBPACK_IMPORTED_MODULE_3__.a,
                props: { name: name }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    731: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              31
            ),
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              10
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              2
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { action } from '@storybook/addon-actions';\nimport { text, withKnobs } from '@storybook/addon-knobs';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\nimport { Button } from '@storybook/angular/demo';\n\nstoriesOf('Custom|Style', module)\n  .addDecorator(\n    moduleMetadata({\n      declarations: [Button],\n    })\n  )\n  .add('Default', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: 'Button with custom styles',\n      onClick: action('log'),\n    },\n    styles: [\n      `\n      storybook-button-component {\n        background-color: yellow;\n        padding: 25px;\n      }\n    `,\n    ],\n  }))\n  .addDecorator(withKnobs)\n  .add('With Knobs', () => ({\n    template: `<storybook-button-component [text]=\"text\" (onClick)=\"onClick($event)\"></storybook-button-component>`,\n    props: {\n      text: text('text', 'Button with custom styles'),\n      onClick: action('log'),\n    },\n    styles: [\n      `\n      storybook-button-component {\n        background-color: red;\n        padding: 25px;\n      }\n    `,\n    ],\n  }));\n",
            __ADDS_MAP__ = {
              "custom-style--with-knobs": {
                startLoc: { col: 7, line: 28 },
                endLoc: { col: 4, line: 42 }
              },
              "custom-style--default": {
                startLoc: { col: 7, line: 12 },
                endLoc: { col: 4, line: 26 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
            "Custom|Style",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_2__.moduleMetadata
              )({
                declarations: [
                  _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Button
                ]
              })
            )
            .add("Default", function() {
              return {
                template:
                  '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                props: {
                  text: "Button with custom styles",
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                  )("log")
                },
                styles: [
                  "\n      storybook-button-component {\n        background-color: yellow;\n        padding: 25px;\n      }\n    "
                ]
              };
            })
            .addDecorator(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs
            )
            .add("With Knobs", function() {
              return {
                template:
                  '<storybook-button-component [text]="text" (onClick)="onClick($event)"></storybook-button-component>',
                props: {
                  text: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text
                  )("text", "Button with custom styles"),
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                  )("log")
                },
                styles: [
                  "\n      storybook-button-component {\n        background-color: red;\n        padding: 25px;\n      }\n    "
                ]
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    732: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              31
            ),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              2
            ),
            _custom_cva_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              304
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { action } from '@storybook/addon-actions';\nimport { storiesOf } from '@storybook/angular';\n\nimport { CustomCvaComponent } from './custom-cva.component';\n\nconst description = `\n  This is an example of component that implements ControlValueAccessor interface\n`;\n\nstoriesOf('Custom|ngModel', module).add(\n  'custom ControlValueAccessor',\n  () => ({\n    component: CustomCvaComponent,\n    props: {\n      ngModel: 'Type anything',\n      ngModelChange: action('ngModelChnange'),\n    },\n  }),\n  { notes: description }\n);\n",
            __ADDS_MAP__ = {
              "custom-ngmodel--custom-controlvalueaccessor": {
                startLoc: { col: 2, line: 11 },
                endLoc: { col: 24, line: 19 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            "Custom|ngModel",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add(
              "custom ControlValueAccessor",
              function() {
                return {
                  component:
                    _custom_cva_component__WEBPACK_IMPORTED_MODULE_2__.a,
                  props: {
                    ngModel: "Type anything",
                    ngModelChange: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.action
                    )("ngModelChnange")
                  }
                };
              },
              {
                notes:
                  "\n  This is an example of component that implements ControlValueAccessor interface\n"
              }
            );
        }.call(this, __webpack_require__(12)(module));
    },
    733: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              196
            ),
            _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              31
            ),
            _storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              81
            ),
            _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              11
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\nimport { withNotes } from '@storybook/addon-notes';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\n\nimport { Welcome, Button } from '@storybook/angular/demo';\n\nstoriesOf('Welcome', module).add('to Storybook', () => ({\n  component: Welcome,\n  props: {},\n}));\n\nstoriesOf('Button', module)\n  .add('with text', () => ({\n    component: Button,\n    props: {\n      text: 'Hello Button',\n    },\n  }))\n  .add(\n    'with some emoji',\n    withNotes({ text: 'My notes on a button with emojis' })(() => ({\n      component: Button,\n      props: {\n        text: '😀 😎 👍 💯',\n      },\n    }))\n  )\n  .add(\n    'with some emoji and action',\n    withNotes({ text: 'My notes on a button with emojis' })(() => ({\n      component: Button,\n      props: {\n        text: '😀 😎 👍 💯',\n        onClick: action('This was clicked OMG'),\n      },\n    }))\n  );\n\nstoriesOf('Another Button', module).add('button with link to another story', () => ({\n  component: Button,\n  props: {\n    text: 'Go to Welcome Story',\n    onClick: linkTo('Welcome'),\n  },\n}));\n",
            __ADDS_MAP__ = {
              "welcome--to-storybook": {
                startLoc: { col: 33, line: 8 },
                endLoc: { col: 2, line: 11 }
              },
              "button--with-some-emoji-and-action": {
                startLoc: { col: 4, line: 30 },
                endLoc: { col: 7, line: 37 }
              },
              "button--with-some-emoji": {
                startLoc: { col: 4, line: 21 },
                endLoc: { col: 7, line: 27 }
              },
              "button--with-text": {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 4, line: 19 }
              },
              "another-button--button-with-link-to-another-story": {
                startLoc: { col: 40, line: 40 },
                endLoc: { col: 2, line: 46 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Welcome",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("to Storybook", function() {
              return {
                component:
                  _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__.Welcome,
                props: {}
              };
            }),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
              "Button",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .add("with text", function() {
                return {
                  component:
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                  props: { text: "Hello Button" }
                };
              })
              .add(
                "with some emoji",
                Object(
                  _storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes
                )({ text: "My notes on a button with emojis" })(function() {
                  return {
                    component:
                      _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                    props: { text: "😀 😎 👍 💯" }
                  };
                })
              )
              .add(
                "with some emoji and action",
                Object(
                  _storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes
                )({ text: "My notes on a button with emojis" })(function() {
                  return {
                    component:
                      _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                    props: {
                      text: "😀 😎 👍 💯",
                      onClick: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                      )("This was clicked OMG")
                    }
                  };
                })
              ),
            Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
              "Another Button",
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .add("button with link to another story", function() {
                return {
                  component:
                    _storybook_angular_demo__WEBPACK_IMPORTED_MODULE_4__.Button,
                  props: {
                    text: "Go to Welcome Story",
                    onClick: Object(
                      _storybook_addon_links__WEBPACK_IMPORTED_MODULE_3__.linkTo
                    )("Welcome")
                  }
                };
              });
        }.call(this, __webpack_require__(12)(module));
    },
    735: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _base_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              139
            ),
            _icon_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              305
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\n\nimport { BaseButtonComponent } from './base-button.component';\nimport { IconButtonComponent } from './icon-button.component';\n\nstoriesOf('Custom|Inheritance', module)\n  .add('icon button', () => ({\n    component: IconButtonComponent,\n    props: {\n      icon: 'this is icon',\n      label: 'this is label',\n    },\n  }))\n  .add('base button', () => ({\n    component: BaseButtonComponent,\n    props: {\n      label: 'this is label',\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "custom-inheritance--base-button": {
                startLoc: { col: 7, line: 14 },
                endLoc: { col: 4, line: 19 }
              },
              "custom-inheritance--icon-button": {
                startLoc: { col: 7, line: 7 },
                endLoc: { col: 4, line: 13 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Custom|Inheritance",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("icon button", function() {
              return {
                component:
                  _icon_button_component__WEBPACK_IMPORTED_MODULE_2__.a,
                props: { icon: "this is icon", label: "this is label" }
              };
            })
            .add("base button", function() {
              return {
                component:
                  _base_button_component__WEBPACK_IMPORTED_MODULE_1__.a,
                props: { label: "this is label" }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    736: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _moduleMetadata_custom_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              138
            ),
            _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              28
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { moduleMetadata, storiesOf } from '@storybook/angular';\n\nimport { CustomPipePipe } from './moduleMetadata/custom.pipe';\nimport { DEFAULT_NAME, ITEMS, TokenComponent } from './moduleMetadata/token.component';\n\nstoriesOf('Metadata|Combined', module)\n  .addDecorator(\n    moduleMetadata({\n      imports: [],\n      declarations: [TokenComponent],\n      providers: [\n        {\n          provide: ITEMS,\n          useValue: ['Joe', 'Jane'],\n        },\n        {\n          provide: DEFAULT_NAME,\n          useValue: 'Provider Name',\n        },\n      ],\n    })\n  )\n  .add('Combined 1', () => ({\n    template: `<storybook-simple-token-component [name]=\"name\"></storybook-simple-token-component>`,\n    props: {\n      name: 'Prop Name',\n    },\n  }))\n  .add('Combined 2', () => ({\n    template: `<storybook-simple-token-component [name]=\"name | customPipe\"></storybook-simple-token-component>`,\n    props: {\n      name: 'Prop Name',\n    },\n    moduleMetadata: {\n      declarations: [CustomPipePipe],\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "metadata-combined--combined-2": {
                startLoc: { col: 7, line: 29 },
                endLoc: { col: 4, line: 37 }
              },
              "metadata-combined--combined-1": {
                startLoc: { col: 7, line: 23 },
                endLoc: { col: 4, line: 28 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Metadata|Combined",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata
              )({
                imports: [],
                declarations: [
                  _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_2__.c
                ],
                providers: [
                  {
                    provide:
                      _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_2__.b,
                    useValue: ["Joe", "Jane"]
                  },
                  {
                    provide:
                      _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_2__.a,
                    useValue: "Provider Name"
                  }
                ]
              })
            )
            .add("Combined 1", function() {
              return {
                template:
                  '<storybook-simple-token-component [name]="name"></storybook-simple-token-component>',
                props: { name: "Prop Name" }
              };
            })
            .add("Combined 2", function() {
              return {
                template:
                  '<storybook-simple-token-component [name]="name | customPipe"></storybook-simple-token-component>',
                props: { name: "Prop Name" },
                moduleMetadata: {
                  declarations: [
                    _moduleMetadata_custom_pipe__WEBPACK_IMPORTED_MODULE_1__.a
                  ]
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    737: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              28
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { storiesOf } from '@storybook/angular';\n\nimport { DEFAULT_NAME, ITEMS, TokenComponent } from './moduleMetadata/token.component';\n\nstoriesOf('Metadata|Individual', module)\n  .add('Individual 1', () => ({\n    template: `<storybook-simple-token-component [name]=\"name\"></storybook-simple-token-component>`,\n    props: {\n      name: 'Prop Name',\n    },\n    moduleMetadata: {\n      imports: [],\n      declarations: [TokenComponent],\n      providers: [\n        {\n          provide: ITEMS,\n          useValue: ['Joe', 'Jane'],\n        },\n      ],\n    },\n  }))\n  .add('Individual 2', () => ({\n    template: `<storybook-simple-token-component></storybook-simple-token-component>`,\n    moduleMetadata: {\n      imports: [],\n      declarations: [TokenComponent],\n      providers: [\n        {\n          provide: ITEMS,\n          useValue: ['Jim', 'Jill'],\n        },\n        {\n          provide: DEFAULT_NAME,\n          useValue: 'Provider Name',\n        },\n      ],\n    },\n  }));\n",
            __ADDS_MAP__ = {
              "metadata-individual--individual-2": {
                startLoc: { col: 7, line: 22 },
                endLoc: { col: 4, line: 38 }
              },
              "metadata-individual--individual-1": {
                startLoc: { col: 7, line: 6 },
                endLoc: { col: 4, line: 21 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Metadata|Individual",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add("Individual 1", function() {
              return {
                template:
                  '<storybook-simple-token-component [name]="name"></storybook-simple-token-component>',
                props: { name: "Prop Name" },
                moduleMetadata: {
                  imports: [],
                  declarations: [
                    _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.c
                  ],
                  providers: [
                    {
                      provide:
                        _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.b,
                      useValue: ["Joe", "Jane"]
                    }
                  ]
                }
              };
            })
            .add("Individual 2", function() {
              return {
                template:
                  "<storybook-simple-token-component></storybook-simple-token-component>",
                moduleMetadata: {
                  imports: [],
                  declarations: [
                    _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.c
                  ],
                  providers: [
                    {
                      provide:
                        _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.b,
                      useValue: ["Jim", "Jill"]
                    },
                    {
                      provide:
                        _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.a,
                      useValue: "Provider Name"
                    }
                  ]
                }
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    738: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              2
            ),
            _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              28
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { moduleMetadata, storiesOf } from '@storybook/angular';\n\nimport { DEFAULT_NAME, ITEMS, TokenComponent } from './moduleMetadata/token.component';\n\nstoriesOf('Metadata|Shared', module)\n  .addDecorator(\n    moduleMetadata({\n      imports: [],\n      declarations: [TokenComponent],\n      providers: [\n        {\n          provide: ITEMS,\n          useValue: ['Joe', 'Jane'],\n        },\n        {\n          provide: DEFAULT_NAME,\n          useValue: 'Provider Name',\n        },\n      ],\n    })\n  )\n  .add('Shared 1', () => ({\n    template: `<storybook-simple-token-component [name]=\"name\"></storybook-simple-token-component>`,\n    props: {\n      name: 'Prop Name',\n    },\n  }))\n  .add('Shared 2', () => ({\n    template: `<storybook-simple-token-component></storybook-simple-token-component>`,\n  }));\n",
            __ADDS_MAP__ = {
              "metadata-shared--shared-2": {
                startLoc: { col: 7, line: 28 },
                endLoc: { col: 4, line: 30 }
              },
              "metadata-shared--shared-1": {
                startLoc: { col: 7, line: 22 },
                endLoc: { col: 4, line: 27 }
              }
            };
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)(
            "Metadata|Shared",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata
              )({
                imports: [],
                declarations: [
                  _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.c
                ],
                providers: [
                  {
                    provide:
                      _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.b,
                    useValue: ["Joe", "Jane"]
                  },
                  {
                    provide:
                      _moduleMetadata_token_component__WEBPACK_IMPORTED_MODULE_1__.a,
                    useValue: "Provider Name"
                  }
                ]
              })
            )
            .add("Shared 1", function() {
              return {
                template:
                  '<storybook-simple-token-component [name]="name"></storybook-simple-token-component>',
                props: { name: "Prop Name" }
              };
            })
            .add("Shared 2", function() {
              return {
                template:
                  "<storybook-simple-token-component></storybook-simple-token-component>"
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    739: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            "withStorySource",
            function() {
              return withStorySource;
            }
          ),
            __webpack_require__.d(__webpack_exports__, "__STORY__", function() {
              return __STORY__;
            }),
            __webpack_require__.d(
              __webpack_exports__,
              "__ADDS_MAP__",
              function() {
                return __ADDS_MAP__;
              }
            );
          var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(140),
            _storybook_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              2
            ),
            withStorySource = __webpack_require__(13).withStorySource,
            __STORY__ =
              "import { Component } from '@angular/core';\nimport { Store, StoreModule } from '@ngrx/store';\nimport { moduleMetadata, storiesOf } from '@storybook/angular';\n\n@Component({\n  selector: 'storybook-comp-with-store',\n  template: '<div>{{this.getSotreState()}}</div>',\n})\nclass WithStoreComponent {\n  private store: Store<any>;\n\n  constructor(store: Store<any>) {\n    this.store = store;\n  }\n\n  getSotreState() {\n    return this.store === undefined ? 'Store is NOT injected' : 'Store is injected';\n  }\n}\n\nstoriesOf('ngrx|Store', module)\n  .addDecorator(\n    moduleMetadata({\n      imports: [StoreModule.forRoot({})],\n      declarations: [WithStoreComponent],\n    })\n  )\n  .add('With component', () => ({\n    component: WithStoreComponent,\n  }))\n  .add('With template', () => ({\n    template: `<storybook-comp-with-store></storybook-comp-with-store>`,\n  }));\n",
            __ADDS_MAP__ = {
              "ngrx-store--with-template": {
                startLoc: { col: 7, line: 31 },
                endLoc: { col: 4, line: 33 }
              },
              "ngrx-store--with-component": {
                startLoc: { col: 7, line: 28 },
                endLoc: { col: 4, line: 30 }
              }
            },
            WithStoreComponent = (function() {
              function WithStoreComponent(store) {
                this.store = store;
              }
              var _a;
              return (
                (WithStoreComponent.prototype.getSotreState = function() {
                  return void 0 === this.store
                    ? "Store is NOT injected"
                    : "Store is injected";
                }),
                (WithStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
                  [
                    Object(
                      _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component
                    )({
                      selector: "storybook-comp-with-store",
                      template: "<div>{{this.getSotreState()}}</div>"
                    }),
                    tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata(
                      "design:paramtypes",
                      [
                        "function" ==
                        typeof (_a =
                          void 0 !==
                            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store &&
                          _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)
                          ? _a
                          : Object
                      ]
                    )
                  ],
                  WithStoreComponent
                ))
              );
            })();
          Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(
            "ngrx|Store",
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .addDecorator(
              Object(
                _storybook_angular__WEBPACK_IMPORTED_MODULE_3__.moduleMetadata
              )({
                imports: [
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_2__.StoreModule.forRoot(
                    {}
                  )
                ],
                declarations: [WithStoreComponent]
              })
            )
            .add("With component", function() {
              return { component: WithStoreComponent };
            })
            .add("With template", function() {
              return {
                template:
                  "<storybook-comp-with-store></storybook-comp-with-store>"
              };
            });
        }.call(this, __webpack_require__(12)(module));
    },
    82: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return AppComponent;
      });
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        AppComponent = (function() {
          function AppComponent() {
            this.title = "app";
          }
          return (AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate(
            [
              Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
                selector: "storybook-app-root",
                template: "\n    <div>Example Angular Component</div>\n  "
              })
            ],
            AppComponent
          ));
        })();
    }
  },
  [[306, 1, 2]]
]);
//# sourceMappingURL=main.8bfe159b5b3c3e68e17b.bundle.js.map
