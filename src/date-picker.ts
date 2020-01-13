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
      <!-- scoped styles -->
      <style>

      .center{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px;
        border-radius: 5px;


      }
      [type="date"] {
        background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
      }
      [type="date"]::-webkit-calendar-picker-indicator {
        opacity: 1;
      }

      /* custom styles */
      body {
        padding: 4em;
        background: #e5e5e5;
        font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
      }
      label {
        display: block;
      }
      input {
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        background: linear-gradient(to right, #67b26b, #4ca2cb) !important;
        padding: 3px 5px;
        box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
        width: 190px;
      }
      span{
        background: linear-gradient(to right, #67b26b, #4ca2cb) !important;
          border-radius: 5px;
          box-shadow: 0 8px 6px -6px black;
      }
      h1, input{
          color:white;
      }

      </style>
      <!-- html -->
      <div class= "center">
      <span>


        <h1 class="center">${this.getAttribute("navn") ||""}</h1>

<input class="center" type="date" name="dateofbirth" id="dateofbirth">

        </div>
        `;
    }


    disconnectedCallback() {}


    adoptedCallback() {}
  }

