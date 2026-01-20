import { renderers } from "./renderers.mjs";
import { c as createExports, s as serverEntrypointModule } from "./chunks/_@astrojs-ssr-adapter_B0hPvrwe.mjs";
import { manifest } from "./manifest_BRiMVMtS.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/login.astro.mjs");
const _page2 = () => import("./pages/protected.astro.mjs");
const _page3 = () => import("./pages/register.astro.mjs");
const _page4 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/.pnpm/astro@5.16.11_@vercel+funct_ec0d3ff3154a1a71e7beb4930ce0c096/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/login.astro", _page1],
  ["src/pages/protected.astro", _page2],
  ["src/pages/register.astro", _page3],
  ["src/pages/index.astro", _page4]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./noop-entrypoint.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "b101fc35-5e07-4281-84e4-0c24037b8497",
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
