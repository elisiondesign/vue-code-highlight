import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
// Transpile/polyfill with reasonable browser support
export default {
  input: 'src/wrapper.js', // Path relative to package.json
  output: {
    name: 'vueCodeHighlight',
    exports: 'named',
  },
  plugins: [
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(),
    resolve(), // Transpile to ES5
  ],
};
