<template>
<div ref="codeBlock">
  <pre :class="languageClass">
    <code>
      <slot></slot>
    </code>
  </pre>
</div>
</template>

<script>
import Prism from 'prism-es6';

export default {
  name: 'code-highlight',
  props: {
    language: {
      type: String,
      default: 'javascript',
    },
  },
  computed: {
    languageClass() {
      return `language-${this.language}`;
    },
  },
  mounted() {
    Prism.highlightAllUnder(this.$refs.codeBlock);
  },
};
</script>
<style scoped>
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
