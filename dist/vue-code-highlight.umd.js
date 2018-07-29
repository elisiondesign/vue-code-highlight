(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prism-es6')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prism-es6'], factory) :
  (factory((global.vueCodeHighlight = {}),global.Prism));
}(this, (function (exports,Prism) { 'use strict';

  Prism = Prism && Prism.hasOwnProperty('default') ? Prism['default'] : Prism;

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" pre[class*=\"language-\"][data-v-23ac0a9e] { display: inline-block; padding-right: 10em; padding-top: 3rem; border-radius: 6px; background-image: url(\"./assets/window-controls.svg\"); background-repeat: no-repeat; background-position: 16px 16px; box-shadow: 5px 5px 15px 0px rgba(50, 50, 50, 0.75); } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var vueHighlight = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{ref:"code",class:_vm.languageClass},[_vm._v("  "),_c('code',[_vm._v("\n    "),_vm._t("default"),_vm._v("\n  ")],2),_vm._v("\n")])},staticRenderFns: [],_scopeId: 'data-v-23ac0a9e',
    name: 'code-highlight',
    props: {
      language: {
        type: String,
        default: 'javascript',
      },
    },
    computed: {
      languageClass: function languageClass() {
        return ("language-" + (this.language));
      },
    },
    mounted: function mounted() {
      Prism.highlightElement(this.$refs.code);
    },
  };

  var registerDirective = {
    componentUpdated: function componentUpdated(el) {
      Prism.highlightAllUnder(el);
    },
  };

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('VueCodeHighlight', vueHighlight);
    Vue.directive('code', registerDirective);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  exports.install = install;
  exports.default = vueHighlight;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
