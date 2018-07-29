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
@import '../themes/duotone-sea.css';
@import '../themes/window.css';
</style>
