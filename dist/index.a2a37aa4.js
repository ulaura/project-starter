// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8qw7y":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54f1c6afa2a37aa4";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3rz9v":[function(require,module,exports) {
var _pageContent = require("./components/content/page-content");
var _pageFooter = require("./components/page-footer");
var _pageHeader = require("./components/page-header");
var _services = require("./services");
const root = document.getElementById("root");
//TODOs
//1. Learn how to use classes, interfaces and inheritance for components
const init = async ()=>{
    (0, _services.storageService).initializeDataForFavoriteArticles();
    root.innerHTML += (0, _pageHeader.pageHeader).getContent();
    root.innerHTML += await (0, _pageContent.pageContent).getContent();
    root.innerHTML += (0, _pageFooter.pageFooter).getContent();
    (0, _pageHeader.pageHeader).initEventHandlers(displayFavoritePage, displayNewsPage);
    (0, _pageContent.pageContent).initEventHandlers();
    (0, _pageFooter.pageFooter).initEventHandlers();
};
const displayFavoritePage = ()=>{
    (0, _pageContent.pageContent).displayContent("favorite");
};
const displayNewsPage = ()=>{
    (0, _pageContent.pageContent).displayContent("home");
};
init();

},{"./components/page-footer":"8zx2A","./components/page-header":"g2WZS","./services":"jH38A","./components/content/page-content":"4H7nw"}],"8zx2A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageFooter", ()=>pageFooter);
const pageFooter = {
    getContent: ()=>{
        return `
        <div class="px-3">
        <footer class="mt-5 shadow p-4 bg-light">
            <section class="d-flex justify-content-between media__header__wrap">
                <div class="d-flex flex-column width__one__third">
                    <img
                        class="logo mb-4"
                        src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt60b2d631fdc493bf/605083db32845c7ca164859d/NOW_Logo_Solid_Gradient_131x42mm_RGB-1.png"
                        alt="now"
                    />
                    <a href="./post.html" class="display__text__blue">Subscribe</a>
                    <a href="./post.html" class="display__text__blue">Contribute</a>
                </div>

                <section class="width__one__third">
                    <ul class="list__no__style">
                        <li><a href="./post.html" class="no__style__link">Contact us</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link"
                                >Complaints & corrections</a
                            >
                        </li>
                        <li><a href="./post.html" class="no__style__link">SecureDrop</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link">Work for us</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Pivacy settings</a></li>
                        <li><a href="./post.html" class="no__style__link">Privacy policy</a></li>
                        <li><a href="./post.html" class="no__style__link">Cookie policy</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link">Terms & conditions</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Help</a></li>
                        <li>
                            <a href="./post.html" class="no__style__link">Advertise with us</a>
                        </li>
                    </ul>
                </section>

                <section class="width__one__third">
                    <ul class="list__no__style">
                        <li><a href="./post.html" class="no__style__link">All topics</a></li>
                        <li><a href="./post.html" class="no__style__link">All writers</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link"
                                >Digital newspaper archive</a
                            >
                        </li>
                        <li><a href="./post.html" class="no__style__link">Facebook</a></li>
                        <li><a href="./post.html" class="no__style__link">Youtube</a></li>
                        <li><a href="./post.html" class="no__style__link">Instagram</a></li>
                        <li><a href="./post.html" class="no__style__link">Linkedin</a></li>
                        <li><a href="./post.html" class="no__style__link">Twitter</a></li>
                        <li class="mb-4">
                            <a href="./post.html" class="no__style__link">Newsletters</a>
                        </li>
                        <li><a href="./post.html" class="no__style__link">Search UK jobs</a></li>
                    </ul>
                </section>
            </section>
            <small>© 2022 Company, Inc. All rights reserved</small>
        </footer>
    </div>
        `;
    },
    initEventHandlers: ()=>{
        console.log("No event handlers to initialize for page-footer component");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g2WZS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageHeader", ()=>pageHeader);
const FAVORITE_PAGE_ID = "favoritesPageNav";
const HOME_PAGE_ID = "homePageNav";
const pageHeader = {
    getContent: ()=>{
        return `
        <header class="d-flex justify-content-around py-3 align-items-center page__header">
            <img class="logo mx__logo" src="https://static.skyassets.com/contentstack/assets/bltdc2476c7b6b194dd/blt60b2d631fdc493bf/605083db32845c7ca164859d/NOW_Logo_Solid_Gradient_131x42mm_RGB-1.png" alt="now" />
            <nav id="navigationBar" class="nav__bar">
                <ul class="link__cnt__display link__cnt list__no__style d-flex justify-content-between mb-0">
                    <li><a href="./post.html" class="no__style__link" id="${HOME_PAGE_ID}">News</a></li>
                    <li><a href="./post.html" class="no__style__link">Opinion</a></li>
                    <li><a href="./post.html" class="no__style__link">Sport</a></li>
                    <li><a href="./post.html" class="no__style__link">Culture</a></li>
                    <li><a href="#" class="no__style__link">Lifestyle</a></li>
                    <li><a href="#" class="no__style__link" id="${FAVORITE_PAGE_ID}">Favorites</a></li>
                </ul>
            </nav>
            <div class="d-flex align-items-center">
                <select class="form-select me-3">
                    <option>EN</option>
                    <option>ES</option>
                    <option>DE</option>
                </select>
                <a href="./post.html" class="no__style__link">Account</a>
            </div>
            <div class="toggle_wrapper">
                <div id="burgerButton" class="toggle"></div>
            </div>
        </header>`;
    },
    initEventHandlers: (favoritesPage_onClick, newsPage_onClick)=>{
        addFavoritePageHandler(favoritesPage_onClick);
        addBurgerButtonHandler();
        addNewPageHandler(newsPage_onClick);
    }
};
const addNewPageHandler = (newsPage_onClick)=>{
    const homePageElem = document.getElementById(HOME_PAGE_ID);
    homePageElem.addEventListener("click", (event)=>{
        event.preventDefault();
        newsPage_onClick();
    });
};
const addFavoritePageHandler = (favoritesPage_onClick)=>{
    const favoritesPageElem = document.getElementById(FAVORITE_PAGE_ID);
    favoritesPageElem.addEventListener("click", (event)=>{
        event.preventDefault();
        favoritesPage_onClick();
    });
};
const addBurgerButtonHandler = ()=>{
    const navigationBarElem = document.getElementById("navigationBar");
    const burgerButton = document.getElementById("burgerButton");
    burgerButton.addEventListener("click", ()=>{
        burgerButton.classList.toggle("active");
        navigationBarElem.classList.toggle("nav__display");
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jH38A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "storageService", ()=>storageService);
parcelHelpers.export(exports, "dataService", ()=>dataService);
var _constants = require("./constants");
const storage = window.localStorage;
const storageService = {
    initializeDataForFavoriteArticles: ()=>{
        if (storage.getItem((0, _constants.LOCAL_STORAGE_NAME)) === null) storage.setItem((0, _constants.LOCAL_STORAGE_NAME), JSON.stringify([]));
    },
    getData: (storageName)=>JSON.parse(storage.getItem(storageName ? storageName : (0, _constants.LOCAL_STORAGE_NAME))),
    setData: (data, storageName)=>storage.setItem(storageName ? storageName : (0, _constants.LOCAL_STORAGE_NAME), JSON.stringify(data))
};
const dataService = {
    fetchData: async (action, params = new Map)=>{
        let keyword = params.get("keywords");
        const storageData = storageService.getData(`${keyword}`);
        if (!storageData) {
            const response = await dataService.makeRequest(action, params);
            storageService.setData(response, `${keyword}`);
            return response;
        }
        return storageData;
    },
    makeRequest: async (action, params = new Map)=>{
        params.set("language", `${(0, _constants.API_LANG)}`);
        params.set("apiKey", `${(0, _constants.API_KEY)}`);
        const apiParams = new Array;
        params.forEach((value, key)=>{
            apiParams.push(`${key}=${value}`);
        });
        const strParams = apiParams.join("&");
        const url = `${(0, _constants.API_NEWS_URL)}/${action}?${strParams}`;
        let response = await fetch(url);
        let news = response.json();
        return news;
    },
    getData: async (requestDetails)=>{
        const { news  } = await dataService.fetchData(requestDetails.endpoint, requestDetails.queryParams);
        return news.filter((article)=>article.image !== "None").filter((article, index)=>index < Number(requestDetails.queryParams.get("limit")));
    }
};
const cacheData = ()=>{
    setTimeout(async ()=>{
        console.log("STARTED CACHING");
        const headlinesSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.HEADLINES_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_HEADLINES)}`
            ]
        ]));
        storageService.setData(headlinesSectionContent, (0, _constants.HEADLINES_SECTION_CONTENT));
        const lifestyleSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.LIFESTYLE_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_LIFESTYLE)}`
            ]
        ]));
        storageService.setData(lifestyleSectionContent, (0, _constants.LIFESTYLE_SECTION_CONTENT));
        const opinionSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.OPINION_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_OPINION)}`
            ]
        ]));
        storageService.setData(opinionSectionContent, (0, _constants.OPINION_SECTION_CONTENT));
        const scienceSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.SCIENCE_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_SCIENCE)}`
            ]
        ]));
        storageService.setData(scienceSectionContent, (0, _constants.SCIENCE_SECTION_CONTENT));
        const gossipSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.GOSSIP_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_GOSSIP)}`
            ]
        ]));
        storageService.setData(gossipSectionContent, (0, _constants.GOSSIP_SECTION_CONTENT));
        const mostViewedSectionContent = await dataService.makeRequest("search", new Map([
            [
                "keywords",
                (0, _constants.MOST_VIEWED_SECTION_CONTENT)
            ],
            [
                "limit",
                `${(0, _constants.ARTICLE_PER_COMPONENT_MOST_VIEWED)}`
            ]
        ]));
        storageService.setData(mostViewedSectionContent, (0, _constants.MOST_VIEWED_SECTION_CONTENT));
        console.log("Data CACHED");
        cacheData();
    // caching every 31 minutes 1900000
    // caching every 5 minutes 300000
    // caching every 10 minutes 600000
    }, 600000);
};
cacheData();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./constants":"fVvYD"}],"fVvYD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HEADLINES_SECTION_CONTENT", ()=>HEADLINES_SECTION_CONTENT);
parcelHelpers.export(exports, "OPINION_SECTION_CONTENT", ()=>OPINION_SECTION_CONTENT);
parcelHelpers.export(exports, "SCIENCE_SECTION_CONTENT", ()=>SCIENCE_SECTION_CONTENT);
parcelHelpers.export(exports, "GOSSIP_SECTION_CONTENT", ()=>GOSSIP_SECTION_CONTENT);
parcelHelpers.export(exports, "LIFESTYLE_SECTION_CONTENT", ()=>LIFESTYLE_SECTION_CONTENT);
parcelHelpers.export(exports, "MOST_VIEWED_SECTION_CONTENT", ()=>MOST_VIEWED_SECTION_CONTENT);
parcelHelpers.export(exports, "LOCAL_STORAGE_NAME", ()=>LOCAL_STORAGE_NAME);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_NEWS_URL", ()=>API_NEWS_URL);
parcelHelpers.export(exports, "API_LANG", ()=>API_LANG);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_HEADLINES", ()=>ARTICLE_PER_COMPONENT_HEADLINES);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_OPINION", ()=>ARTICLE_PER_COMPONENT_OPINION);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_SCIENCE", ()=>ARTICLE_PER_COMPONENT_SCIENCE);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_GOSSIP", ()=>ARTICLE_PER_COMPONENT_GOSSIP);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_LIFESTYLE", ()=>ARTICLE_PER_COMPONENT_LIFESTYLE);
parcelHelpers.export(exports, "ARTICLE_PER_COMPONENT_MOST_VIEWED", ()=>ARTICLE_PER_COMPONENT_MOST_VIEWED);
var _dotenv = require("dotenv");
_dotenv.config();
const HEADLINES_SECTION_CONTENT = "headlines";
const OPINION_SECTION_CONTENT = "opinion";
const SCIENCE_SECTION_CONTENT = "science";
const GOSSIP_SECTION_CONTENT = "gossip";
const LIFESTYLE_SECTION_CONTENT = "lifestyle";
const MOST_VIEWED_SECTION_CONTENT = "programming";
const LOCAL_STORAGE_NAME = "articles";
const API_KEY = "E3WfXWP03bk3bhkTBZg08WKbWvDpxabo1OzyPF18Q5Xwf0qo";
const API_NEWS_URL = "https://api.currentsapi.services/v1";
const API_LANG = "en";
const ARTICLE_PER_COMPONENT_HEADLINES = 4;
const ARTICLE_PER_COMPONENT_OPINION = 3;
const ARTICLE_PER_COMPONENT_SCIENCE = 7;
const ARTICLE_PER_COMPONENT_GOSSIP = 3;
const ARTICLE_PER_COMPONENT_LIFESTYLE = 4;
const ARTICLE_PER_COMPONENT_MOST_VIEWED = 6;

},{"dotenv":"lErsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lErsX":[function(require,module,exports) {
var process = require("process");
const fs = require("fs");
const path = require("path");
const os = require("os");
const LINE = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
// Parser src into an Object
function parse(src) {
    const obj = {};
    // Convert buffer to string
    let lines = src.toString();
    // Convert line breaks to same format
    lines = lines.replace(/\r\n?/mg, "\n");
    let match;
    while((match = LINE.exec(lines)) != null){
        const key = match[1];
        // Default undefined or null to empty string
        let value = match[2] || "";
        // Remove whitespace
        value = value.trim();
        // Check if double quoted
        const maybeQuote = value[0];
        // Remove surrounding quotes
        value = value.replace(/^(['"`])([\s\S]*)\1$/mg, "$2");
        // Expand newlines if double quoted
        if (maybeQuote === '"') {
            value = value.replace(/\\n/g, "\n");
            value = value.replace(/\\r/g, "\r");
        }
        // Add to object
        obj[key] = value;
    }
    return obj;
}
function _log(message) {
    console.log(`[dotenv][DEBUG] ${message}`);
}
function _resolveHome(envPath) {
    return envPath[0] === "~" ? path.join(os.homedir(), envPath.slice(1)) : envPath;
}
// Populates process.env from .env file
function config(options) {
    let dotenvPath = path.resolve(process.cwd(), ".env");
    let encoding = "utf8";
    const debug = Boolean(options && options.debug);
    const override = Boolean(options && options.override);
    if (options) {
        if (options.path != null) dotenvPath = _resolveHome(options.path);
        if (options.encoding != null) encoding = options.encoding;
    }
    try {
        // Specifying an encoding returns a string instead of a buffer
        const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, {
            encoding
        }));
        Object.keys(parsed).forEach(function(key) {
            if (!Object.prototype.hasOwnProperty.call(process.env, key)) parsed[key];
            else {
                if (override === true) parsed[key];
                if (debug) {
                    if (override === true) _log(`"${key}" is already defined in \`process.env\` and WAS overwritten`);
                    else _log(`"${key}" is already defined in \`process.env\` and was NOT overwritten`);
                }
            }
        });
        return {
            parsed
        };
    } catch (e) {
        if (debug) _log(`Failed to load ${dotenvPath} ${e.message}`);
        return {
            error: e
        };
    }
}
const DotenvModule = {
    config,
    parse
};
module.exports.config = DotenvModule.config;
module.exports.parse = DotenvModule.parse;
module.exports = DotenvModule;

},{"process":"d5jf4","fs":"jhUEF","path":"loE3o","os":"6yyXu"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var process = require("process");
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"6yyXu":[function(require,module,exports) {
exports.endianness = function() {
    return "LE";
};
exports.hostname = function() {
    if (typeof location !== "undefined") return location.hostname;
    else return "";
};
exports.loadavg = function() {
    return [];
};
exports.uptime = function() {
    return 0;
};
exports.freemem = function() {
    return Number.MAX_VALUE;
};
exports.totalmem = function() {
    return Number.MAX_VALUE;
};
exports.cpus = function() {
    return [];
};
exports.type = function() {
    return "Browser";
};
exports.release = function() {
    if (typeof navigator !== "undefined") return navigator.appVersion;
    return "";
};
exports.networkInterfaces = exports.getNetworkInterfaces = function() {
    return {};
};
exports.arch = function() {
    return "javascript";
};
exports.platform = function() {
    return "browser";
};
exports.tmpdir = exports.tmpDir = function() {
    return "/tmp";
};
exports.EOL = "\n";
exports.homedir = function() {
    return "/";
};

},{}],"4H7nw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pageContent", ()=>pageContent);
var _homePage = require("../home/home-page");
var _favoritePage = require("../favorite/favorite-page");
const PAGE_CONTENT_ID = "pageContent";
const pageContent = {
    getContent: async ()=>{
        return `
        <section class="page__content" id="${PAGE_CONTENT_ID}">
        ${await (0, _homePage.homePage).getContent()}
        </section>`;
    },
    initEventHandlers: ()=>{
        (0, _homePage.homePage).initEventHandlers();
    },
    displayContent: async (content)=>{
        const pageContentElem = document.getElementById(PAGE_CONTENT_ID);
        pageContentElem.innerHTML = "";
        switch(content){
            case "favorite":
                pageContentElem.innerHTML += (0, _favoritePage.favoritePage).getContent();
                (0, _favoritePage.favoritePage).initEventHandlers(pageContent);
                break;
            case "home":
                pageContentElem.innerHTML += await (0, _homePage.homePage).getContent();
                (0, _homePage.homePage).initEventHandlers();
                break;
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../favorite/favorite-page":"fqRu1","../home/home-page":"4MabB"}],"fqRu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "favoritePage", ()=>favoritePage);
var _services = require("../../services");
const favoritePage = {
    getContent: ()=>{
        const favoriteAricles = (0, _services.storageService).getData();
        const favArticlesHtml = favoriteAricles.map((favArt)=>{
            return `
          <section class="d-flex p-3 shadow-sm ">
          <header class="me-3 col-md-4">
              <img class="img-thumbnail" src="${favArt.image}" alt="">
          </header>
          <article>
              <h3 class="fw-bold">${favArt.title}</h3>
              <p>${favArt.description}</p>
              <small>
                  <span>${favArt.author}</span>
                  - 
                  <span>${favArt.published.split(" ")[0].replaceAll("-", "/")}</span>
              </small>
              <span class="align-self-end"><i id="favx_${favArt.id}" class="fav-article-remove fa-solid fa-xmark"></i></span>
          </article>
          </section>
          `;
        });
        return `
        <section id="favoritePage">
            ${favArticlesHtml.join("")}
        </section>`;
    },
    initEventHandlers: (parentComponent)=>{
        const favArticleButtons = document.getElementsByClassName("fav-article-remove");
        [
            ...favArticleButtons
        ].forEach((elem)=>{
            elem.addEventListener("click", (event)=>{
                const favoriteArticleId = event.target.id.split("_")[1];
                (0, _services.storageService).setData((0, _services.storageService).getData().filter((favArt)=>favArt.id !== favoriteArticleId));
                parentComponent.displayContent("favorite");
            });
        });
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../services":"jH38A"}],"4MabB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homePage", ()=>homePage);
var _gossip = require("./sections/gossip");
var _headlines = require("./sections/headlines");
var _lifestyle = require("./sections/lifestyle");
var _mostViewed = require("./sections/most-viewed");
var _now = require("./sections/now");
var _opinion = require("./sections/opinion");
var _science = require("./sections/science");
var _utils = require("../../utils");
var _services = require("../../services");
const HOME_PAGE_ID = "homePage";
const homePage = {
    getContent: async ()=>{
        (0, _utils.pageLoader).start();
        const content = `
        <section class="home-page" id="${HOME_PAGE_ID}">
        ${await (0, _headlines.headlines).getContent()}
        ${await (0, _opinion.opinion).getContent()}
        ${await (0, _science.science).getContent()}
        ${await (0, _gossip.gossip).getContent()}
        ${await (0, _mostViewed.mostViewed).getContent()}
        ${await (0, _lifestyle.lifestyle).getContent()}
        ${(0, _now.nowSection).getContent()}
        </section>`;
        (0, _utils.pageLoader).stop();
        return content;
    },
    initEventHandlers: ()=>{
        (0, _headlines.headlines).initEventHandlers(favoriteButton_onClick);
        (0, _opinion.opinion).initEventHandlers(favoriteButton_onClick);
        (0, _science.science).initEventHandlers(favoriteButton_onClick);
        (0, _gossip.gossip).initEventHandlers(favoriteButton_onClick);
        (0, _lifestyle.lifestyle).initEventHandlers(favoriteButton_onClick);
        (0, _mostViewed.mostViewed).initEventHandlers(favoriteButton_onClick);
    }
};
const favoriteButton_onClick = (articles, parentElementId)=>{
    const headlinesContentElem = document.getElementById(parentElementId);
    const favoriteButtons = headlinesContentElem.getElementsByClassName("favorite__button");
    favoriteButtons && [
        ...favoriteButtons
    ].forEach((elem)=>{
        elem.addEventListener("click", (event)=>{
            (0, _utils.exchangeClass)(event.target, "fa-regular", "fa-solid");
            const articleId = event.target.id.split("_")[1];
            const foundData = (0, _services.storageService).getData().find((favArticle)=>favArticle.id === articleId);
            //if article does not exists add it to local storage else remove
            if (!foundData) {
                const article = articles.find((art)=>art.id === articleId);
                (0, _services.storageService).setData([
                    ...(0, _services.storageService).getData(),
                    article
                ]);
            } else (0, _services.storageService).setData([
                ...(0, _services.storageService).getData()
            ].filter((favArticle)=>favArticle.id !== articleId));
        });
    });
};

},{"./sections/headlines":"dmbJl","../../utils":"e4Zav","../../services":"jH38A","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./sections/gossip":"g7Q1K","./sections/lifestyle":"dPSRZ","./sections/most-viewed":"1av6B","./sections/opinion":"9xPzw","./sections/science":"11ZKW","./sections/now":"3dM7L"}],"dmbJl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "headlines", ()=>headlines);
var _constants = require("../../../constants");
var _services = require("../../../services");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Headlines";
const PARENT_ID = "headlinesNewsContent";
let articles = [];
const headlines = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.HEADLINES_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_HEADLINES)}`
                ], 
            ])
        });
        return `	
        <section class="mt-5 px-3">
            ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
            <div class="d-flex w-100 direction__column" id="${PARENT_ID}">
                <div class="w-50 pt-4 pe-3 position-relative full__width px__none">
                    <img class="w-100 headlines__image" src="${articles[0].image}" alt="laptop"/>
                    <div class="set__position">
                        <a href="./post.html" class="no__style__link text-light fw-bold fs-5 fs__smaller headlines__article__title">${articles[0].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                </div>
                <div class="d-flex flex-column w-50 border-start border-2 pt-4 ps-3 full__width px__none bx__none">
                    <div class="position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title" >${articles[1].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[1].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                    <div class="mt-4 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title">${articles[2].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[2].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                    <div class="mt-4 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold headlines__article__title">${articles[3].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                        <small class="text-muted d-block mt-1 headlines__article__pub__date">${articles[3].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                </div>
            </div>
        </section>`;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../constants":"fVvYD","../../../services":"jH38A","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egevq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "articleHeader", ()=>articleHeader);
const articleHeader = {
    getContent: (title)=>{
        return `
        <header
            class="d-flex justify-content-between align-items-end headlines__header media__header__wrap">
            <h2 class="m-0 fs-3 display__text__blue">${title}</h2>
            <hr class="w-75 m-0 media__no__width" />
            <a href="./post.html" class="text-dark">View all</a>
        </header>`;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e4Zav":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exchangeClass", ()=>exchangeClass);
parcelHelpers.export(exports, "pageLoader", ()=>pageLoader);
const poageLoader = document.getElementById("pageLoader");
const exchangeClass = (element, firstClass, secondClass)=>{
    if (element.classList.contains(firstClass)) element.classList.replace(firstClass, secondClass);
    else element.classList.replace(secondClass, firstClass);
};
const pageLoader = {
    stop: ()=>{
        poageLoader.classList.add("hidden");
    },
    start: ()=>{
        poageLoader.classList.remove("hidden");
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7Q1K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gossip", ()=>gossip);
var _services = require("../../../services");
var _constants = require("../../../constants");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Gossip";
const PARENT_ID = "gossipNewsContent";
let articles = [];
const gossip = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.GOSSIP_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_GOSSIP)}`
                ]
            ])
        });
        return `
			<section class="mt-5 px-3">
            ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
            <section class="d-flex gossip__split direction__column" id="${PARENT_ID}">
                <article class="w-75 mt-4 pe-3 px__none full__width position-relative">
                    <header>
                        <img
                            src="${articles[0].image}"
                            alt="nano-robot"
                            class="w-100 gossip__image"
                        />
                    </header>
                    <div class="mt-2">
                        <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[0].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                        <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                </article>
                <section class="w-25 border-start border-2 pt-4 ps-3 full__width px__none bx__none">
                    <article class="position-relative">
                        <header>
                            <img src="${articles[1].image}" alt="Love to learn" class="w-100 gossip__image"/>
                        </header>
                        <div class="mt-2">
                            <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[1].title}</a>
                            <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                            <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[1].published.split(" ")[0].replaceAll("-", "/")}</small>
                        </div>
                    </article>
                    <article class="mt-3 position-relative">
                        <header>
                            <img
                                src="${articles[2].image}"
                                alt="CSS features"
                                class="w-100 gossip__image"
                            />
                        </header>
                        <div class="mt-2">
                            <a href="./post.html" class="no__style__link fw-bold gossip__article__title">${articles[2].title}</a>
                            <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                            <small class="d-block text-muted mt-2 gossip__article__pub__date">${articles[2].published.split(" ")[0].replaceAll("-", "/")}</small>
                        </div>
                    </article>
                </section>
            </section>
        </section>
        `;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../services":"jH38A","../../../constants":"fVvYD","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dPSRZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "lifestyle", ()=>lifestyle);
var _services = require("../../../services");
var _constants = require("../../../constants");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Lifestyle";
const PARENT_ID = "lifestyleNewsContent";
let articles = [];
const lifestyle = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.LIFESTYLE_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_LIFESTYLE)}`
                ]
            ])
        });
        return `
        <section class="mt-5" id="${PARENT_ID}">
        ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
        <article class="mb-3 px-3 mt-4 lifestyle__article__display position-relative" >
            <header>
                <img
                    class="w-100 lifestyle__image"
                    src="${articles[0].image}"
                    alt="A shelf of books"
                />
            </header>
            <div class="mt-2">
                <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[0].title}</a>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</small>
            </div>
        </article>
        <hr class="m-0 mx-3 hr__visibility" />
        <section class="d-flex direction__column">
            <article class="width__one__third pt-3 px-3 full__width position-relative">
                <header>
                    <img
                        src="${articles[1].image}"
                        alt="CSS books"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[1].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[1].published.split(" ")[0].replaceAll("-", "/")}</small>
                </div>
            </article>
            <article
                class="width__one__third border-start border-end border-2 pt-3 px-3 bx__none full__width position-relative"
            >
                <header>
                    <img
                        src="${articles[2].image}"
                        alt="A programming book"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[2].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[2].published.split(" ")[0].replaceAll("-", "/")}</small>
                </div>
            </article>
            <article
                class="width__one__third pt-3 px-3 full__width position-relative"
            >
                <header>
                    <img
                        src="${articles[3].image}"
                        alt="books"
                        class="w-100 lifestyle__image"
                    />
                </header>
                <div class="mt-3">
                    <a href="./post.html" class="no__style__link fw-bold lifestyle__article__title">${articles[3].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                    <small class="d-block text-muted mt-2 lifestyle__article__pub__date">${articles[3].published.split(" ")[0].replaceAll("-", "/")}</small>
                </div>
            </article>
        </section>
    </section>
        `;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../services":"jH38A","../../../constants":"fVvYD","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1av6B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mostViewed", ()=>mostViewed);
var _services = require("../../../services");
var _constants = require("../../../constants");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Most Viewed";
const PARENT_ID = "mostViewedNewsContent";
let articles = [];
const mostViewed = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.MOST_VIEWED_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_MOST_VIEWED)}`
                ]
            ])
        });
        return `
        <section class="mt-5">
        ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
        <div class="d-flex px-3 direction__column" id="${PARENT_ID}">
            <section class="w-75 me-3 most__viewed__section__grid full__width">
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[0].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                    <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[0].author}</span>
                        <span>-</span> 
                        <span class="text-muted  most__viewed__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[1].title}</a>
                    <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                    <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[1].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[1].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[2].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[2].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[2].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[3].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[3].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[3].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[4].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[4].id}"></i></span>
                        <small  class="d-block text-muted mt-2" >
                        <span class="most__viewed__article__author">${articles[4].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[4].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
                <article class="most__viewed__article position-relative">
                    <a href="./post.html" class="no__style__link fw-bold most__viewed__article__title">${articles[5].title}t</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[5].id}"></i></span>
                        <small class="d-block text-muted mt-2">
                        <span class="most__viewed__article__author">${articles[5].author}</span>
                        <span>-</span>
                        <span class="most__viewed__article__pub__date" >${articles[5].published.split(" ")[0].replaceAll("-", "/")}</span>
                    </small>
                </article>
            </section>
            <div class="w-25 full__width">
                <img
                    src="${articles[0].image}"
                    alt="Coding books"
                    class="w-100 h-100 most__viewed__image"
                />
            </div>
        </div>
    </section>
        `;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../services":"jH38A","../../../constants":"fVvYD","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xPzw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "opinion", ()=>opinion);
var _constants = require("../../../constants");
var _services = require("../../../services");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Opinion";
const PARENT_ID = "opinionNewsContent";
let articles = [];
const opinion = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.OPINION_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_OPINION)}`
                ]
            ])
        });
        return `
        <section class="mt-5">
        ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
        <section class="d-flex direction__column" id="${PARENT_ID}">
            <article class="width__one__third bx__none full__width pt-3 px-3 position-relative">
                <header>
                    <img src="${articles[0].image}" alt="Miško Hevery" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[0].author}</h2>
                </header>
                <p class="mb-1 opinion__article__description d-inline">${articles[0].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</small>
            </article>
            <article class="width__one__third bx__none full__width pt-3 border-start border-end border-2 px-3 position-relative">
                <header>
                    <img src="${articles[1].image}" alt="Jordan Walke" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[1].author}</h2>
                </header>
                <p class="mb-1 opinion__article__description d-inline">${articles[1].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[1].published.split(" ")[0].replaceAll("-", "/")}</small>
            </article>
            <article class="width__one__third bx__none full__width pt-3 px-3 position-relative">
                <header>
                    <img src="${articles[2].image}" alt="Tim Berners-Lee" class="w-100 opinion__image"/>
                    <h2 class="display__text__blue fs-6 mt-2 opinion__article__author">${articles[2].author}</h2>
                </header> 
                <p class="mb-1 opinion__article__description d-inline">${articles[2].description}</p>
                <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                <small class="text-muted d-block opinion__article__pub__date">${articles[2].published.split(" ")[0].replaceAll("-", "/")}</small>
            </article>
        </section>
    </section>
        `;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../constants":"fVvYD","../../../services":"jH38A","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11ZKW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "science", ()=>science);
var _constants = require("../../../constants");
var _services = require("../../../services");
var _sectionHeader = require("./common/section-header");
const SECTION_TITLE = "Science";
const PARENT_ID = "scienceNewsContent";
let articles = [];
const science = {
    getContent: async ()=>{
        articles = await (0, _services.dataService).getData({
            endpoint: "search",
            queryParams: new Map([
                [
                    "keywords",
                    (0, _constants.SCIENCE_SECTION_CONTENT)
                ],
                [
                    "limit",
                    `${(0, _constants.ARTICLE_PER_COMPONENT_SCIENCE)}`
                ]
            ])
        });
        return `
			<section class="mt-5 px-3">
            ${(0, _sectionHeader.articleHeader).getContent(SECTION_TITLE)}
            <section class="d-flex direction__column" id="${PARENT_ID}">
                <article class="pt-4 w-50 pe-3 px__none full__width position-relative">
                    <header>
                        <img
                            src="${articles[0].image}"
                            alt="Quantum Digits"
                            class="w-100 science__image"
                        />
                    </header>
                    <div class="mt-2">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[0].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[0].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[0].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </div>
                </article>
                <section class="w-50 border-start border-2 ps-3 pt-3 px__none full__width bx__none">
                    <article class="position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[1].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[1].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[1].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[2].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[2].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[2].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[3].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[3].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[3].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[4].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[4].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[4].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[5].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[5].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[5].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                    <article class="mt-2 position-relative">
                        <a href="./post.html" class="no__style__link fw-bold science__article__title">${articles[6].title}</a>
                        <span class="favorite__news"><i class="fa-regular fa-heart favorite__button" id="fav_${articles[6].id}"></i></span>
                        <small class="d-block text-muted mt-2 science__article__pub__date">${articles[6].published.split(" ")[0].replaceAll("-", "/")}</small>
                    </article>
                </section>
            </section>
        </section>
        `;
    },
    initEventHandlers: (favoriteButton_onClick)=>{
        favoriteButton_onClick(articles, PARENT_ID);
    }
};

},{"../../../constants":"fVvYD","../../../services":"jH38A","./common/section-header":"egevq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3dM7L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nowSection", ()=>nowSection);
const nowSection = {
    getContent: ()=>{
        return `
        <div class="px-3">
        <section class="justify-content-around align-items-center d-flex py-5 mt-5 bg-light px__1 media__header__wrap">
            <p class="m-0 fw-bold">
                NOW's goal is to:
                <q>Build a future where people live in harmony with nature.</q>
            </p>
            <button class="btn btn-warning">
                Sign up for the NOW email
            </button>
        </section>
    </div>
        `;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8qw7y","3rz9v"], "3rz9v", "parcelRequire94c2")

//# sourceMappingURL=index.a2a37aa4.js.map
