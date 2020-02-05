"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StandardJSWebComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(attr, oldValue, newValue) { }
    connectedCallback() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
      <style>
      slot h1{
        display:flex;
        justify-content: center;
      }

      .center{
          display:flex;
          justify-content: center;
      }
      </style>

      <div class= "center">
        <slot id="slot1"> </slot>
      </div>

      <div class= "center">
        <input type="color" name="colorPicker" id="textColorPicker" title="Choose Color" />
      </div>

      <div class= "center">
        <slot id="slot2"> </slot>
      </div>

      <div class= "center">
        <input type="color" name="colorPicker" id="colorPicker" title="Choose Color" />
      </div>
          `;
        //editable Javascript for
        //Chose textcolor for p, h1
        let picker = this.shadowRoot.getElementById('textColorPicker');
        let tags = document.querySelectorAll("p, h1, h2, h3, h4");
        let clpicker = this.shadowRoot.getElementById('colorPicker');
        let box = document.querySelectorAll('body,header');
        (picker) === null || picker === void 0 ? void 0 : picker.addEventListener('change', function (e) {
            for (let i = 0; i < tags.length; i++) {
                tags[i].style.color = e.target.value;
            }
        });
        (clpicker) === null || clpicker === void 0 ? void 0 : clpicker.addEventListener('change', function (e) {
            for (let i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = e.target.value;
            }
        });
    }
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
