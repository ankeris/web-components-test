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
        var _a;
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
    <body>
        <h1>
            Textcolor
        </h1>
        <input type="color" name="colorPicker" id="textColorPicker" title="Choose Color" />
        <p>
            Test color
        </p>

        <h1>
            background
        </h1>
        <input type="color" name="colorPicker" id="colorPicker" title="Choose Color" />
    </body>
          `;
        //editable Javascript for
        //Chose textcolor for p, h1
        let picker = document.getElementById('textColorPicker');
        let tags = document.querySelectorAll("p, h1, h2, h3, h4");
        (_a = picker) === null || _a === void 0 ? void 0 : _a.addEventListener('change', function () {
            for (let i = 0; i < tags.length; i++) {
                tags[i].style.color = this.value;
            }
        });
        // chose background color for body
        let clpicker = document.getElementById('colorPicker');
        let box = document.getElementsByTagName('body')[0];
        if (clpicker) {
            clpicker.addEventListener('change', function () {
                box.style.backgroundColor = this.value;
            });
        }
    }
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
