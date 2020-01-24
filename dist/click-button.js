"use strict";
// Standard JS WebComponent Starter - kit
// See README for more information
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
class StandardJSWebComponent extends HTMLElement {
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();
        const shadow = this.attachShadow({ mode: "open" });
    }
    // Specify observed attributes names to be notified in attributeChangedCallback
    static get observedAttributes() {
        return [];
    }
    // Called when an observed attribute has been added, removed, updated, or replaced.
    // Also called for initial values when an element is created by the parser, or upgraded.
    // Note: only attributes listed in the observedAttributes property will receive this callback.
    attributeChangedCallback(attr, oldValue, newValue) { }
    // Called every time the element is inserted into the DOM.
    // Useful for running setup code, such as fetching resources or rendering.Generally, you should try to delay work until this time.
    connectedCallback() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
    <!-- scoped styles -->
    <style>
    .btn {
		  font-size: 150%;
      }
      slot h1{
        display:flex;
        justify-content: center;
      }

      .center{
          display:flex;
          justify-content: center;
      }
    </style>
    <!-- html -->
    <div class= "center">
    <slot></slot>
    </div>
    <div class= "center">
    <button class="btn">This is a button for ${this.getAttribute("name") ||
            "World"}!</button>
            </div>

            `;
    }
    // Called every time the element is removed from the DOM.
    // Useful for running clean up code.
    disconnectedCallback() { }
    // The custom element has been moved into a new document(e.g.someone called document.adoptNode(el)).
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
// customElements.define("nvcl-button", StandardJSWebComponent);
