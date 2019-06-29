<template>
<div ref="codeBlock">
  <pre :class="languageClass"><code><slot /></code></pre>
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

  beforeUpdate () {
    const newText = this.$slots.default[0].text.replace(/^[\r\n\s]*|[\r\n\s]*$/g, "");
    this.$el.querySelector('code').textContent = newText;
    Prism.highlightAllUnder(this.$refs.codeBlock);
  }
};
</script>
