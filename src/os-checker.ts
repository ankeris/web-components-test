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
      <body style="text-align:center;">

    <h1 style="color:green;">Os checker</h1>

    <button onclick="version()">
        Return OS Version
    </button>

    <p id="OS"></p>

    <!-- Script to return OS details -->
    <script>
        function version() {
            var os = navigator.appVersion;

            // Display the OS details
            document.getElementById("OS").innerHTML = os;
        }
    </script>
</body>
        `;
    }


    disconnectedCallback() {}


    adoptedCallback() {}
  }

