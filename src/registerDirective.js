import Prism from 'prism-es6';

export default {
  update(el) {
    Prism.highlightAllUnder(el);
  },
};
