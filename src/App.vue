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
        'data-theme-id': 'dark',
        'data-slug-hash': 'JyxKMg',
        'data-default-tab': 'result',
        'data-user': 'sindael',
        'data-embed-version': 2,
        'data-pen-title': 'Fullscreen image gallery using Wallop, Greensock and Flexbox',
        placeholder: `
          See the Pen <a href="https://codepen.io/sindael/pen/JyxKMg/">here</a>.
          `,
        wrapperClass: 'codepen-embed',
      },
    };
  },
};
</script>
<style>
body {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

#app {
  margin: auto;
  width: 75%;
  height: 75%;
}

.codepen-embed {
  height: 100%;
}
</style>
