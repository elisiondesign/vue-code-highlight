(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




/* eslint-disable */
var vueCodepen = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p')},staticRenderFns: [],
  name: 'Codepen',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data: function data() {
    return {
      config: {
        'data-height': 265,
        'data-theme-id': 0,
        'data-default-tab': 'js,result',
        'data-embed-version': 2,
        'data-pen-title': 'Codepen',
        'data-user': 'Codepen',
        placeholder: 'Unable to load Codepen',
        wrapperClass: 'cp_embed_wrapper',
      },
    };
  },
  methods: {
    mergeOptions: function mergeOptions() {
      Object.assign(this.config, this.options);
    },

    attachOptions: function attachOptions(container) {
      Object.entries(this.config).forEach(function (ref) {
        var property = ref[0];
        var value = ref[1];

        if (property === 'placeholder') {
          container.innerHTML = value;
        } else {
          container.setAttribute(property, value);
        }
      });
    },

    initiate: function initiate(container) {
      this.mergeOptions();
      this.attachOptions(container);
      var wrapperClass = this.options.wrapperClass;
        function e() {
            function e() {
                var u = a(container);
                if (Object.keys(u).length !== 0 && (u = o(u), u.user = n(u, container), r(u))) {
                    var c = i(u),
                    l = s(u, c); f(container, l);
                }
                m();
            }

          function n(e, n) {
            if (typeof e.user === 'string') { return e.user; }
            for (var t = 0, r = n.children.length; t < r; t++) {
              var a = n.children[t],
                o = a.href || '',
                i = o.match(/codepen\.(io|dev)\/(\w+)\/pen\//i); if (i) { return i[2]; }
            }
            return 'anon';
          }

          function r(e) { return e['slug-hash']; }

          function a(e) { for (var n = {}, t = e.attributes, r = 0, a = t.length; r < a; r++) { var o = t[r].name; o.indexOf('data-') === 0 && (n[o.replace('data-', '')] = t[r].value); } return n; }

          function o(e) { return e.href && (e['slug-hash'] = e.href), e.type && (e['default-tab'] = e.type), e.safe && (e.safe === 'true' ? e.animations = 'run' : e.animations = 'stop-after-5'), e; }

          function i(e) {
            var n = u(e),
              t = e.user ? e.user : 'anon',
              r = "?" + (l(e)),
              a = e.preview && e.preview === 'true' ? 'embed/preview' : 'embed',
              o = [n, t, a, e['slug-hash'] + r].join('/');

              return o.replace(/\/\//g, '//');
          }

          function u(e) { return e.host ? c(e.host) : document.location.protocol === 'file:' ? 'https://codepen.io' : '//codepen.io'; }

          function c(e) { return e.match(/^\/\//) || !e.match(/https?:/) ? ((document.location.protocol) + "//" + e) : e; }

          function l(e) { var n = ''; for (var t in e){ n !== '' && (n += '&'), n += t + "=" + (encodeURIComponent(e[t])); } return n; }

          function s(e, n) {
            var r; e['pen-title'] ? r = e['pen-title'] : (r = "CodePen Embed " + t, t++); var a = { id: ("cp_embed_" + (e['slug-hash'].replace('/', '_'))), src: n, scrolling: 'no', frameborder: '0', height: d(e), allowTransparency: 'true', allowfullscreen: 'true', allowpaymentrequest: 'true', name: 'CodePen Embed', title: r, class: ("cp_embed_iframe " + (e.class ? e.class : '')), style: ("width: " + p + "; overflow: hidden;") },
              o = '<iframe '; for (var i in a){ o += i + "=\"" + (a[i]) + "\" "; } return o += '></iframe>';
          }

          function d(e) { return e.height ? e.height : 300; }

          function f(e, n) { if (e.parentNode) { var t = document.createElement('div'); t.className = wrapperClass, t.innerHTML = n, e.parentNode.replaceChild(t, e); } else { e.innerHTML = n; } }

          function m() { typeof __CodePenIFrameAddedToPage === 'function' && __CodePenIFrameAddedToPage(); }

          var p = '100%';

          e();
        }

        function n(e) { /in/.test(document.readyState) ? setTimeout(("window.__cp_domReady(" + e + ")"), 9) : e(); } var t = 1; window.__cp_domReady = n, window.__CPEmbed = e, n(function () { new __CPEmbed(); });
    },
  },
  mounted: function mounted() {
    this.initiate(this.$el);
  },
};

// Import vue component

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('VueCodepen', vueCodepen);
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

export default vueCodepen;
export { install };
