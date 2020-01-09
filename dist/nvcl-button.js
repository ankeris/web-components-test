"use strict";
// Standard JS WebComponent Starter - kit
// See README for more information
/* eslint-disable */
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
        var _this = 
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        _super.call(this) || this;
        var shadow = _this.attachShadow({ mode: "open" });
        return _this;
    }
    Object.defineProperty(StandardJSWebComponent, "observedAttributes", {
        // Specify observed attributes names to be notified in attributeChangedCallback
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    // Called when an observed attribute has been added, removed, updated, or replaced.
    // Also called for initial values when an element is created by the parser, or upgraded.
    // Note: only attributes listed in the observedAttributes property will receive this callback.
    StandardJSWebComponent.prototype.attributeChangedCallback = function (attr, oldValue, newValue) { };
    // Called every time the element is inserted into the DOM.
    // Useful for running setup code, such as fetching resources or rendering.Generally, you should try to delay work until this time.
    StandardJSWebComponent.prototype.connectedCallback = function () {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = "\n    <!-- scoped styles -->\n    <style>\n    .btn {\n\t\t  font-size: 200%;\n\t  }\n    </style>\n    <!-- html -->\n    <button class=\"btn\">This is a button for " + (this.getAttribute("name") ||
            "World") + "!</button>";
    };
    // Called every time the element is removed from the DOM.
    // Useful for running clean up code.
    StandardJSWebComponent.prototype.disconnectedCallback = function () { };
    // The custom element has been moved into a new document(e.g.someone called document.adoptNode(el)).
    StandardJSWebComponent.prototype.adoptedCallback = function () { };
    return StandardJSWebComponent;
}(HTMLElement));
exports.default = StandardJSWebComponent;
// customElements.define("nvcl-button", StandardJSWebComponent);
