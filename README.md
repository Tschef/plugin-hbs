# plugin-hbs
NPM compatible Handlebars template loader plugin for [System.js](https://github.com/systemjs/systemjs)
without the need for [JSPM](http://jspm.io).

## Installation

```bash
npm install vpro/plugin-hbs
```

## Usage

You have to tell SystemJS to connect this plugin with the right extension.
 
Use the following map configuration in your SystemJS config:

```
System.config({
  "map": {
    "hbs: "path/to/plugin-hbs/hbs.js"
  }
});
```

You can now import your .hbs files as such:

In your modules:

```javascript
import template from './myTemplate.hbs!';

export function renderMyData ( viewModel ) {

  return template( viewModel );
}
```

In an HTML page:

```html
<script>

    System.import('./myTemplate.hbs!').then( function ( myTemplate ) {

        document.querySelector('body').innerHTML = myTemplate({ viewModelKey: 'viewModelValue' });
    });
    
</script>
```