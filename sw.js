if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"61d44e695ae0437be0d09cd47f1c4ecf"},{url:"assets/index-3MvIpO0a.css",revision:null},{url:"assets/index-C_7NOyKn.js",revision:null},{url:"favicon-96x96.png",revision:"04048204f5b1e54d5ddebae432fa256d"},{url:"favicon.ico",revision:"cc24a9fe3e2e5c574e4f95a7678bc0c8"},{url:"favicon.svg",revision:"20ef8c041091b0d44b1ca7367f94f310"},{url:"index.html",revision:"a08e7faa580ff99fa6e508b4ed3bdcdb"},{url:"registerSW.js",revision:"883da58def5a4e435664d54c0fb51ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));