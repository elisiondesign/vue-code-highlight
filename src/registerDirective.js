import Prism from 'prism-es6';

export default {
  bind(el) {
    Prism.highlightAllUnder(el);
  },
};
