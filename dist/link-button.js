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
      <!-- scoped styles -->
      <style>

      .center{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px;
        border-radius: 5px;
      }
      .btn {
        border-radius: 4px;
     background: linear-gradient(to right, #67b26b, #4ca2cb) !important;
     border: none;
     color: #FFFFFF;
     text-align: center;
     text-transform: uppercase;
     padding: 20px;
     width: 200px;
     transition: all 0.4s;
     cursor: pointer;
     margin: 5px;
     box-shadow: 0 8px 6px -6px black;
      }

      a{
        color: white;
      }


   .fold-ud span {
     cursor: pointer;
     display: inline-block;
     position: relative;
     transition: 0.4s;
   }
   .fold-ud span:after {
    content: "--->";
     position: absolute;
     opacity: 0;
     top: 0;
     right: -20px;
     transition: 0.5s;
   }
   .fold-ud:hover span {
     padding-right: 25px;
   }
   .fold-ud:hover span:after {
     opacity: 1;
     right: 0;
   }
      </style>
      <!-- html -->
      <div class= "center">
      <span>
      <button class="btn">
        </a>
        <a class="fold-ud" href="${this.getAttribute("link") || ""}" target="_blank" rel="nofollow">  <span> tag mig til  ${this.getAttribute("navn") ||
            "World"}</a>
        </button>

        </div>
        `;
    }
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
