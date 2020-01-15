# web-components-test
# Usage
This webcomponent library template is Written in pure Vanilla JS. It can easily be implemented with all the frameworks such as: Vue, Angular and React.
Just install the component library as seen below
```
npm i web-components-testing-nvcl
```

# Setup
This following codeline is added to main.ts, index.js or main.js depending on which framwork you are installing it to.
However, as native javascript does not support "import", es6 is needed in order to import the webcomponents.
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

# Add new webcomponents to the library
In order to add new web components to the library do the following:

- Go to src and add the mynewcomponent.ts

- Go to index.ts and add "import MyNewComponent from './my-new-webcomponent';"

- Also export in the same document  export {
    MyNewComponent,
    MyNewComponent2}
    
- To make sure that it pushes the changes from src to dist you have to run "npm run start" from the CLI in the folder. 

- Go to your project (react, vue, angular, vanilla) and do the setup steps from "Setup".

- Add, Commit and push the changes in the files to Github.

- Now update the npm package aswell by performing:  
    npm version <update_type>
    npm publish.
    
- After this update go back to the project where you want to use the components and install the new version of the package like this:
    npm i web-components-testing-nvcl
    
- Now you can freely use your own tag.
