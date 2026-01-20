import { p as decodeKey } from "./chunks/astro/server_CW7YkBu4.mjs";
import "./chunks/astro-designed-error-pages_CCF-U2Pj.mjs";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/noop-middleware_J0_dFnc-.mjs";
function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}
function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}
function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}
const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/","cacheDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.astro/","outDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/dist/","srcDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/","publicDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/public/","buildClientDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/dist/client/","buildServerDir":"file:///C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.FJW0_2Pw.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.16.11_@vercel+funct_ec0d3ff3154a1a71e7beb4930ce0c096/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.FJW0_2Pw.js"}],"styles":[{"type":"external","src":"/_astro/index.snjtNJLq.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.FJW0_2Pw.js"}],"styles":[{"type":"external","src":"/_astro/index.snjtNJLq.css"}],"routeData":{"route":"/protected","isIndex":false,"type":"page","pattern":"^\\/protected\\/?$","segments":[[{"content":"protected","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/protected.astro","pathname":"/protected","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.FJW0_2Pw.js"}],"styles":[{"type":"external","src":"/_astro/index.snjtNJLq.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.FJW0_2Pw.js"}],"styles":[{"type":"external","src":"/_astro/index.snjtNJLq.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/register.astro",{"propagation":"none","containsHead":true}],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/protected.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/protected@_@astro":"pages/protected.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.16.11_@vercel+funct_ec0d3ff3154a1a71e7beb4930ce0c096/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BRiMVMtS.mjs","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/astro@5.16.11_@vercel+funct_ec0d3ff3154a1a71e7beb4930ce0c096/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_H_dnRYqu.mjs","astro:scripts/before-hydration.js":"_astro/astro_scripts/before-hydration.js.BJcD1lMm.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/login.astro?astro&type=script&index=0&lang.ts":"_astro/login.astro_astro_type_script_index_0_lang.DotzvyOt.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/register.astro?astro&type=script&index=0&lang.ts":"_astro/register.astro_astro_type_script_index_0_lang.DTj6erQt.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_d0e6cd1506e6c427c38cf364d64b7cbc/node_modules/@clerk/astro/components/control/SignedInCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedInCSR.astro_astro_type_script_index_0_lang.BxeYPnj-.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_d0e6cd1506e6c427c38cf364d64b7cbc/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts":"_astro/UserButtonMenuItems.astro_astro_type_script_index_0_lang.DjJJDhXb.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_d0e6cd1506e6c427c38cf364d64b7cbc/node_modules/@clerk/astro/components/control/SignedOutCSR.astro?astro&type=script&index=0&lang.ts":"_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DUMW6J2H.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_d0e6cd1506e6c427c38cf364d64b7cbc/node_modules/@clerk/astro/components/control/ProtectCSR.astro?astro&type=script&index=0&lang.ts":"_astro/ProtectCSR.astro_astro_type_script_index_0_lang.B7OIBUi1.js","C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.B8wouukz.js","astro:scripts/page.js":"_astro/page.FJW0_2Pw.js","\u0000astro:transitions/client":"_astro/client.Cz7IsWXI.js"},"inlinedScripts":[["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/login.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"form\"),n=document.querySelector(\"#btn-submit\");t.addEventListener(\"submit\",async e=>{e.preventDefault(),n.disabled=!0;const o=new FormData(t);console.log({formData:o})});"],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/pages/register.astro?astro&type=script&index=0&lang.ts","const n=document.querySelector(\"form\"),t=document.querySelector(\"#btnSubmit\");n.addEventListener(\"submit\",async o=>{o.preventDefault(),t.setAttribute(\"disabled\",\"disabled\"),t.textContent=\"Enviando...\";const e=new FormData(n),a=e.get(\"name\"),r=e.get(\"email\"),s=e.get(\"password\");console.log({name:a,email:r,password:s}),t.removeAttribute(\"disabled\"),t.textContent=\"Crear Cuenta\"});"],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/node_modules/.pnpm/@clerk+astro@2.16.13_astro@_d0e6cd1506e6c427c38cf364d64b7cbc/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts","class e extends HTMLElement{constructor(){super()}}customElements.define(\"clerk-user-button-menu-items\",e);"],["C:/Users/PC/Desktop/codigo2024/Astro/curso-devtalles/seccion-14/src/components/shared/Navbar.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"logout\");e?.addEventListener(\"click\",async()=>{window.location.href=\"/\"});"]],"assets":["/_astro/index.snjtNJLq.css","/favicon.svg","/_astro/BaseClerkControlElement.DLD9M1q3.js","/_astro/chunk-MZTESQVU.DFZtgiu1.js","/_astro/client.Cz7IsWXI.js","/_astro/index.DyMxUdkx.js","/_astro/page.FJW0_2Pw.js","/_astro/ProtectCSR.astro_astro_type_script_index_0_lang.B7OIBUi1.js","/_astro/SignedInCSR.astro_astro_type_script_index_0_lang.BxeYPnj-.js","/_astro/SignedOutCSR.astro_astro_type_script_index_0_lang.DUMW6J2H.js","/_astro/astro_scripts/before-hydration.js.BJcD1lMm.js","/_astro/page.FJW0_2Pw.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"z7eCs5VGn1JT0chSAYtlGluF/ftkeD5GB57cwZry6o0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;
export {
  manifest
};
