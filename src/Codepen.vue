<template>
    <p></p>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Codepen',
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  data() {
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
    mergeOptions() {
      Object.assign(this.config, this.options);
    },

    attachOptions(container) {
      Object.entries(this.config).forEach(([property, value]) => {
        if (property === 'placeholder') {
          container.innerHTML = value;
        } else {
          container.setAttribute(property, value);
        }
      });
    },

    initiate(container) {
      this.mergeOptions();
      this.attachOptions(container);
      const wrapperClass = this.options.wrapperClass;
        function e() {
            function e() {
                let u = a(container);
                if (Object.keys(u).length !== 0 && (u = o(u), u.user = n(u, container), r(u))) {
                    let c = i(u),
                    l = s(u, c); f(container, l);
                }
                m();
            }

          function n(e, n) {
            if (typeof e.user === 'string') return e.user;
            for (let t = 0, r = n.children.length; t < r; t++) {
              let a = n.children[t],
                o = a.href || '',
                i = o.match(/codepen\.(io|dev)\/(\w+)\/pen\//i); if (i) return i[2];
            }
            return 'anon';
          }

          function r(e) { return e['slug-hash']; }

          function a(e) { for (var n = {}, t = e.attributes, r = 0, a = t.length; r < a; r++) { const o = t[r].name; o.indexOf('data-') === 0 && (n[o.replace('data-', '')] = t[r].value); } return n; }

          function o(e) { return e.href && (e['slug-hash'] = e.href), e.type && (e['default-tab'] = e.type), e.safe && (e.safe === 'true' ? e.animations = 'run' : e.animations = 'stop-after-5'), e; }

          function i(e) {
            let n = u(e),
              t = e.user ? e.user : 'anon',
              r = `?${l(e)}`,
              a = e.preview && e.preview === 'true' ? 'embed/preview' : 'embed',
              o = [n, t, a, e['slug-hash'] + r].join('/');

              return o.replace(/\/\//g, '//');
          }

          function u(e) { return e.host ? c(e.host) : document.location.protocol === 'file:' ? 'https://codepen.io' : '//codepen.io'; }

          function c(e) { return e.match(/^\/\//) || !e.match(/https?:/) ? `${document.location.protocol}//${e}` : e; }

          function l(e) { let n = ''; for (const t in e)n !== '' && (n += '&'), n += `${t}=${encodeURIComponent(e[t])}`; return n; }

          function s(e, n) {
            let r; e['pen-title'] ? r = e['pen-title'] : (r = `CodePen Embed ${t}`, t++); let a = { id: `cp_embed_${e['slug-hash'].replace('/', '_')}`, src: n, scrolling: 'no', frameborder: '0', height: d(e), allowTransparency: 'true', allowfullscreen: 'true', allowpaymentrequest: 'true', name: 'CodePen Embed', title: r, class: `cp_embed_iframe ${e.class ? e.class : ''}`, style: `width: ${p}; overflow: hidden;` },
              o = '<iframe '; for (const i in a)o += `${i}="${a[i]}" `; return o += '></iframe>';
          }

          function d(e) { return e.height ? e.height : 300; }

          function f(e, n) { if (e.parentNode) { const t = document.createElement('div'); t.className = wrapperClass, t.innerHTML = n, e.parentNode.replaceChild(t, e); } else e.innerHTML = n; }

          function m() { typeof __CodePenIFrameAddedToPage === 'function' && __CodePenIFrameAddedToPage(); }

          var p = '100%';

          e();
        }

        function n(e) { /in/.test(document.readyState) ? setTimeout(`window.__cp_domReady(${e})`, 9) : e(); } var t = 1; window.__cp_domReady = n, window.__CPEmbed = e, n(() => { new __CPEmbed(); });
    },
  },
  mounted() {
    this.initiate(this.$el);
  },
};
</script>
