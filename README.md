# plugin-hbs
NPM compatible Handlebars template loader plugin for [System.js](https://github.com/systemjs/systemjs)

## Installation

```bash
npm install vpro/plugin-hbs
```

## Usage

You have to tell SystemJS to connect this plugin with the right extension.
 
Use the following map configuration in your SystemJS config:

```javascript

System.config({
  "map": {
    "hbs: "path/to/plugin-hbs/hbs.js"
  }
});

```

You can now import your .hbs files as such:

```javascript
'use strict';

import {ItemView} from 'marionette';
import template from './myTemplate.hbs!';

export default ItemView.extend({
  template,
  initialize() {}
});
```