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
<body>
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
</body>

<style>
    :root {
        --base: #202050;
        --border: #ccc;
    }

    body {
        display: flex;
        align-items: center;
        flex-direction: column;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        color: var(--base);
        margin-top: 20vh;
    }

    .box {
        width: 30vh;
        height: 30vh;
        margin: 20vh 0;
        border: 0.2rem solid var(--border);
        border-radius: 50%;
        transition: background 0.8s ease,
            border 0.4s ease;
    }

    .box.isVisible {
        border-color: var(--base);
        background-color: var(--base);
    }
</style>

<script>
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    let callback = (entries) => {
        entries.forEach(entry => {



            if (entry.isIntersecting) {
                entry.target.classList.add('isVisible');
            } else {
                entry.target.classList.remove('isVisible');
            }

        });
    }


    let observer = new IntersectionObserver(callback, options);


    document.querySelectorAll('.box')
        .forEach(box => {
            observer.observe(box)
        });
</script>

        `;
    }
    //add javascript for component here
    disconnectedCallback() { }
    adoptedCallback() { }
}
exports.default = StandardJSWebComponent;
