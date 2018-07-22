<<<<<<< HEAD
# Vue-Codepen
This is a simple Vue component that enables to embed Codepen pens through the recommended HTML method.

## Usage
1. From the pen of your choice, copy the embed HTML code.
2. Reshape the HTML code into object - **key: property** (see example below).
3. Pass the object to the `codepen` component.


## Example
This example uses a [single file component](https://vuejs.org/v2/guide/single-file-components.html) concept.

```vue
<template>
  <div id="app">
    <codepen :options="codepenInput" />
  </div>
</template>

<script>
import Codepen from './Codepen.vue';

export default {
  name: 'app',
  components: {
    Codepen,
  },
  data() {
    return {
      codepenInput: {
        'data-height': '100%',
        'data-theme-id':'light',
        'data-slug-hash': 'JyxKMg',
        'data-default-tab': 'js,result',
        'data-user': 'sindael',
        'data-embed-version': 2,
        'data-pen-title': 'Fullscreen image gallery using Wallop, Greensock and Flexbox',
        placeholder: `
          See the Pen <a href="https://codepen.io/sindael/pen/JyxKMg/">here</a>.
          `,,
        wrapperClass: 'codepen-embed',
      },
    };
  },
};
</script>
```

## Configuration
Ideally, you should specify each property that is present in the HTML pen embed code. However, the only one *required* is the `data-slug-hash` property.

### Pen options
The available `data-*` options are listed in the Codepen's introductory [blog post](https://blog.codepen.io/documentation/features/embedded-pens/#override-attributes-5).

Additional options are:
- `placeholder` - Alternative content should the embed fail to load.
- `wrapperClass` - Class name of the div wrapping the iframe of the injected embed.

## License
MIT.
=======
# vue-codedepen
>>>>>>> e0105bfe79e2a4b7f853d8fc8abd9ab75bcb5c94
