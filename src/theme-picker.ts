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
      <! –– Theme change click ––>
      <button class="themebutton" onclick="toggletema()">🌗</button>
      <div id="show-remove-themepicker">

        <div class="colorelement">
          <! –– TextColor picker ––>
            <input class="box1" type="color" name="colorPicker" id="textColorPicker" title="Choose Color" value="#BEBEBE"/>
          </div>

          <div class="colorelement2">
          <! –– Color picker ––>
            <input  class="box2"type="color" name="colorPicker" id="colorPicker" title="Choose Color" value="#BEBEBE" />
        </div>


      <div id="toggle" class="s-module--toggler ZIndex-checker">
       <span class="icon-click">💡</span>

      </div>


      </div>
      <div class="expanded-overlay"></div>
      <a class="s-module--blender" id="blender"></a>

      <style>
  .themebutton{
  width: 3rem;
  height: 3rem;
  position: fixed;
  border-radius: 50%;
  top: 75%;
   left: 90%;
  bottom: 1rem;
  cursor: pointer;
  }
  #show-remove-themepicker{
    display: none;
  }

    .icon-click{
        display: flex;
        justify-content: center;
        align-items: center;
    }
.expand {
    transform: translate(-50%, -50%) scale(100);
}

.expand-hover {
    transform: translate(-50%, -50%) scale(10);

}
#blender {
  width: 3rem;
  height: 3rem;
  position: fixed;
  border-radius: 50%;
  top: 75%;
  left: 90%;
  bottom: 1rem;
  pointer-events: none;
  background-color: white;
  transition: all 2.0s cubic-bezier(0.645, 0.045, 0.355, 1);
  mix-blend-mode: difference;


}
.s-module--toggler {
  background: #BEBEBE;
  width: 3rem;
  height: 3rem;
  position: fixed;
  border-radius: 50%;
  top: 90%;
   left: 90%;
  bottom: 1rem;
  cursor: pointer;
  display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;



}
.expanded-overlay {
  position: fixed;
  background:white;
  top: 0;
  left: 0;
  height: 100vmax;
  width: 100vmax;
  z-index: -1;


}
p, h1, h2, h3, h4, h5, h6 {
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
          `;
          function toggletema() {
            var x = document.getElementById("show-remove-themepicker");
            if (!x){return;}
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }

        }

            document.getElementById('toggle')!.addEventListener('click', () => {
              document.getElementById('blender')!.classList.toggle('expand');
              document.getElementById('toggle')!.classList.toggle('ZIndex-checker');
            });

            if  (screen.width >= 768) {
            document.getElementById('toggle')!.addEventListener('mouseenter', () => {
              document.getElementById('blender')!.classList.add('expand-hover');
              document.getElementById('toggle')!.classList.add('ZIndex-checker');
            });
            document.getElementById('toggle')!.addEventListener('mouseout', () => {
              document.getElementById('blender')!.classList.remove('expand-hover');
              document.getElementById('toggle')!.classList.remove('ZIndex-checker');

            })}

                let clpicker = document.getElementById('colorPicker');
                let box = document.getElementById("blender");
                let picker = document.getElementById('textColorPicker');
                let tags = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
                function invertHex(hex: any) {
                  return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
                }

                (picker) === null || picker === void 0 ? void 0 : picker.addEventListener('change',function(e:any) {
                    for (let i = 0; i < tags.length; i++) {
                         (<any>tags[i]).style.color = e.target.value;
                    }
                });

                if (clpicker) {
                  clpicker.addEventListener('change', function (e:any) {
                    console.log(e);
                    const tempVal = e.target!.value.replace("#", "");
                    box!.style.backgroundColor = invertHex(tempVal);
                  })
                }

  }



      disconnectedCallback() {}


      adoptedCallback() {}
    }
