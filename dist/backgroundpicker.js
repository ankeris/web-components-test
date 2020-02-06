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
        body{
                transition: background-color 1.5s linear 0.5s;
              }

        p, h1, h2, h3, h4, h5 {
                transition: color 1.5s ease 0.1s;
        }

        .colorelement{
            width: 3rem;
            height: 3rem;
            position:absolute;
            border-radius: 50%;
            top: 80%;
            left: 90%;
            bottom: 1rem;

            }
            .colorelement2{
            width: 3rem;
            height: 3rem;
            position:absolute;
            border-radius: 50%;
            top: 85%;
            left: 90%;
            bottom: 1rem;

            }

              input[type=color]{
          width: 3rem;
          height: 3rem;
          border: none;
          border-radius: 40px;
          background: none;
          display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position:fixed;
        }

        input[type="color"]::-webkit-color-swatch {
          border: solid 1px #000;
          border-radius: 50%;

        }
        .box1:before{
          content: "T";

          text-align:center;
          position:absolute;
        }
        .box2:before{
          content: "🎨";
          text-align:center;
          position:absolute;
        }
        </style>

      <div class="colorelement">
                      <! –– TextColor picker ––>
                        <input class="box1" type="color" name="colorPicker" id="textColorPicker" title="Choose Color" value="#BEBEBE"/>
                      </div>

                      <div class="colorelement2">
                      <! –– Color picker ––>
                        <input  class="box2"type="color" name="colorPicker" id="colorPicker" title="Choose Color" value="#BEBEBE" />
                    </div>


          `;
        //editable Javascript for
        //Chose textcolor for p, h1
        let picker = this.shadowRoot.getElementById('textColorPicker');
        let tags = document.querySelectorAll(" html, p, h1, h2, h3, h4, h5, h6");
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
