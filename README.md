# plugin-hbs
[JSPM beta](https://jspm.io/0.17-beta-guide/index.html) (0.17.42 and up) compatible
[Handlebars](http://handlebarsjs.com/) template loader plugin.

In addition it provides a r

## installation

```bash
npm install vpro/plugin-hbs
```

## usage

You have to tell SystemJS to connect this plugin with the right extension,
as well as defining a mapping for the Handlebars templating library and it's
runtime, the latter being used to make the precompiled templates available
which also means you have to register partials on that runtime.
 
Use the following map configuration in your SystemJS config:

```
System.config({
  'map': {
    'handlebars': 'path/to/handlebars/dist/handlebars.min.js',
    'handlebars-runtime': 'path/to/handlebars/dist/handlebars.runtime.min.js',
    'hbs: 'path/to/plugin-hbs/hbs.js'
  }
});
```

The plugin is an ES6 module, so be sure to also have a 
[transpiler configured](https://github.com/systemjs/systemjs#browser).

You can now import your .hbs files as such:

In your modules:

```javascript
import template from './myTemplate.hbs!'; // or ./myTemplate.html!hbs

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

### partials
To be able to use partials, you will have to register them onto an instance of the 
Handlebars runtime, because the plugin-hbs precompiles all templates through it.

Example:

```javascript
import precompiledPartialTemplate from './myPartial.hbs!';
import HandlebarsRuntime from 'handlebars-runtime';

HandlebarsRuntime.registerPartial( 'myPartial', precompiledPartialTemplate );

```

## development

### code linting
Run `npm run lint` to lint the plugin's code with [eslint](http://eslint.org/).

### testing
For testing purposes, use `npm run test-plugin` to start a webserver on
[localhost:9090](http://localhost:9090). Navigate to the test folder and you'll
see the plugin in action.


## versions

1.5.0
Added npm build script that generates an AMD module in /dist/

1.4.0
Using minified sources and you now need to define the location
of the handlebars runtime, which means you can decided which one is
used en use it for partial registering.

1.3.0 
plugin is now NPM(3) compatible, no need for JSPM