# plugin-hbs
NPM compatible [Handlebars](http://handlebarsjs.com/) template loader plugin for 
[System.js](https://github.com/systemjs/systemjs) without the need for [JSPM](http://jspm.io).

## Installation

```bash
npm install vpro/plugin-hbs
```

## Usage

You have to tell SystemJS to connect this plugin with the right extension,
as well as defining a mapping for the Handlebars templating library.
 
Use the following map configuration in your SystemJS config:

```
System.config({
  "map": {
    "handlebars": "path/to/handlebars/dist/handlebars.js",
    "hbs: "path/to/plugin-hbs/hbs.js"
  }
});
```

The plugin is an ES6 module, so be sure to also have a 
[transpiler configured](https://github.com/systemjs/systemjs#browser).

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