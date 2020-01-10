"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StandardJSWebComponent = /** @class */ (function (_super) {
    __extends(StandardJSWebComponent, _super);
    function StandardJSWebComponent() {
        var _this = _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: "open" });
        return _this;
    }
    Object.defineProperty(StandardJSWebComponent, "observedAttributes", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    StandardJSWebComponent.prototype.attributeChangedCallback = function (attr, oldValue, newValue) { };
    StandardJSWebComponent.prototype.connectedCallback = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n      <!-- scoped styles -->\n      <style>\n\n      .center{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin: 15px;\n        border-radius: 5px;\n      }\n      .btn {\n        border-radius: 4px;\n     background: linear-gradient(to right, #67b26b, #4ca2cb) !important;\n     border: none;\n     color: #FFFFFF;\n     text-align: center;\n     text-transform: uppercase;\n     padding: 20px;\n     width: 200px;\n     transition: all 0.4s;\n     cursor: pointer;\n     margin: 5px;\n     box-shadow: 0 8px 6px -6px black;\n      }\n\n      a{\n        color: white;\n      }\n\n\n   .fold-ud span {\n     cursor: pointer;\n     display: inline-block;\n     position: relative;\n     transition: 0.4s;\n   }\n   .fold-ud span:after {\n    content: \"--->\";\n     position: absolute;\n     opacity: 0;\n     top: 0;\n     right: -20px;\n     transition: 0.5s;\n   }\n   .fold-ud:hover span {\n     padding-right: 25px;\n   }\n   .fold-ud:hover span:after {\n     opacity: 1;\n     right: 0;\n   }\n      </style>\n      <!-- html -->\n      <div class= \"center\">\n      <span>\n      <button class=\"btn\">\n        </a>\n        <a class=\"fold-ud\" href=\"" + (this.getAttribute("link") || "") + "\" target=\"_blank\" rel=\"nofollow\">  <span> tag mig til  " + (this.getAttribute("navn") ||
            "World") + "</a>\n        </button>\n\n        </div>\n        ";
    };
    StandardJSWebComponent.prototype.disconnectedCallback = function () { };
    StandardJSWebComponent.prototype.adoptedCallback = function () { };
    return StandardJSWebComponent;
}(HTMLElement));
exports.default = StandardJSWebComponent;
