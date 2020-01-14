# web-components-test
# Usage
Written in pure Vanilla JS. Can easily be implemented with Vue, Angular and React. Just install it as seen below
```
npm i web-components-testing-nvcl
``` 

# Setup 
This following codeline is added to main.ts, index.js or main.js depending on which framwork you are installing it to. 
```
import {NovicellButton, TestButton, DatePicker} from 'web-components-testing-nvcl';
customElements.define("nvcl-button2", NovicellButton);
customElements.define("test-button2", TestButton);
customElements.define("test-datepicker2", DatePicker);
```
# Example 
After the above is added you can now freely Define and use components in you project. An example can be seen here

```
<nvcl-button2 name="what"></nvcl-button2>
<test-button2 link="https://www.webcomponents.org/introduction"></test-button2>
<test-datepicker2> </test-datepicker2> 
```

