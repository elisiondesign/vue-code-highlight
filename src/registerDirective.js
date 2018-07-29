import Prism from 'prism-es6';

export default {
  componentUpdated(el) {
    Prism.highlightAllUnder(el);
  },
};
