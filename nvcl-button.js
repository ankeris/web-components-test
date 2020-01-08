// Standard JS WebComponent Starter - kit
// See README for more information
/* eslint-disable */

export default class StandardJSWebComponent extends HTMLElement {
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
  attributeChangedCallback(attr, oldValue, newValue) {}

  // Called every time the element is inserted into the DOM.
  // Useful for running setup code, such as fetching resources or rendering.Generally, you should try to delay work until this time.
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <!-- scoped styles -->
    <style>
    .btn {
		  font-size: 200%;
	  }
    </style>
    <!-- html -->
    <button class="btn">This is a button for ${this.getAttribute("name") ||
      "World"}!</button>`;
  }

  // Called every time the element is removed from the DOM.
  // Useful for running clean up code.
  disconnectedCallback() {}

  // The custom element has been moved into a new document(e.g.someone called document.adoptNode(el)).
  adoptedCallback() {}
}

// customElements.define("nvcl-button", StandardJSWebComponent);
