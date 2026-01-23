import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_Q5tXXscf.mjs";
import { manifest } from "./manifest_AE3LyYO3.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/_actions/_---path_.astro.mjs");
const _page2 = () => import("./pages/login.astro.mjs");
const _page3 = () => import("./pages/products/_---slug_.astro.mjs");
const _page4 = () => import("./pages/protected.astro.mjs");
const _page5 = () => import("./pages/register.astro.mjs");
const _page6 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.16.11_@types+node@2_6dff05cb72b7d66c48ed13695ff90de6/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["node_modules/.pnpm/astro@5.16.11_@types+node@2_6dff05cb72b7d66c48ed13695ff90de6/node_modules/astro/dist/actions/runtime/route.js", _page1],
  ["src/pages/login.astro", _page2],
  ["src/pages/products/[...slug].astro", _page3],
  ["src/pages/protected.astro", _page4],
  ["src/pages/register.astro", _page5],
  ["src/pages/index.astro", _page6]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./entrypoint.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "88346510-6119-44fc-b2f8-b31c48a55f5c",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = "start";
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
