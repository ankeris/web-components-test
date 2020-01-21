export default class StandardJSWebComponent extends HTMLElement {
  constructor() {

    super();
    const shadow = this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(attr: any, oldValue: any, newValue: any) {}


  connectedCallback() {
      if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
    <section style="text-align:center;">
    <div style="
    display: flex;
    justify-content: center;
    ">
  <h1 style="color:green;">Check dit operativsystem</h1>
  </div>
  <div style="display: flex;
  justify-content: center;
  ">
  <button>
      Retuner styresystem
  </button>
  </div>

</section>
        `;
  //editable Javascript for
  const buttonElement = this.shadowRoot.querySelector("button");
  this.initClickListener(buttonElement);
}
initClickListener(buttonElement: any) {
  buttonElement.addEventListener("click", function version() {
      //Edit javascript for button
      var os = navigator.appVersion;
      let newPtag = document.createElement("p");
      newPtag.style.cssText = "display: flex;justify-content: center;";
      newPtag.innerHTML = os;
      buttonElement.closest("section").insertAdjacentHTML("afterEnd", newPtag.outerHTML);
      // ^^ --
  });
        console.log(buttonElement);
    }


    disconnectedCallback() {}


    adoptedCallback() {}
  }
