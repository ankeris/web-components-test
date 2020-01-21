"use strict";
//This is an empty template for to create a webcomponent into the library
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
        this.shadowRoot.innerHTML =
            //just add the html and css below for the webcomponent:
            `
  <!-- scoped styles -->
  <style>

  section {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  color: #202050;
  margin-top: 20vh;
  }

  .box {
  width: 30vh;
  height: 30vh;
  margin: 20vh 0;
  border: 0.2rem solid #ccc;
  border-radius: 50%;
  transition: background 0.8s ease,
  border 0.4s ease;
  }

  .box.isVisible {
  border-color: #202050;
  background-color: #202050;
  }
  </style>
  <!-- html -->

  <section id="body">
  <h1>Scroll down 👇</h1>

  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  </section>

  `;
        //add own js
        var options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // percentage of the target element which is visible
        };
        let callback = (entries) => {
            entries.forEach((entry) => {
                // If entry (box) is visible - according with the params set in `options`
                // then adds `isVisible` class to box
                // otherwise removes `isVisible` class
                if (entry.isIntersecting) {
                    entry.target.classList.add('isVisible');
                }
                else {
                    entry.target.classList.remove('isVisible');
                }
            });
        };
        // Create the intersection observer instance by calling its constructor and passing it a
        // callback function to be run whenever a threshold is crossed in one direction or the other:
        let observer = new IntersectionObserver(callback, options);
        // Get all the `.box` from !!!!!!!!!!!SHADOWDOM!!!!!!!!!!!!! and attach the observer to these
        this.shadowRoot.querySelectorAll('.box')
            .forEach(box => {
            observer.observe(box);
        });
        //add own js
    }
    //add javascript for component here
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
