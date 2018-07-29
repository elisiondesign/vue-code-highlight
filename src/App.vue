<template>
  <div>
    <code-highlight>
      let isPalindrome = (word) => {
          let [length, result] = [word.length, true];

          for (let i = 0; i &lt; length / 2; i++) {
            if (word[i] !== word[length - 1 - i]) result = false;
          }
          return result;
        }

        module.exports = isPalindrome;
    </code-highlight>
  </div>
</template>

<script>

import CodeHighlight from './CodeHighlight.vue';

export default {
  name: 'app',
  components: {
    CodeHighlight,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  margin: 0;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
  pre[class*="language-"] {
    display: inline-block;
    padding-right: 10em;
    padding-top: 3rem;
    border-radius: 6px;
    background-image: url("./assets/window-controls.svg");
    background-repeat: no-repeat;
    background-position: 16px 16px;
    box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75);
  }
</style>
