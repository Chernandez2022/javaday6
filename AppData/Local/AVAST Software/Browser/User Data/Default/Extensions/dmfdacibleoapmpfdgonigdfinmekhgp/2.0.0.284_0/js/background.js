var background = function(e) {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    function r(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports;
    }
    var a = 1e3, i = 6e4, o = 36e5, s = 24 * o, c = function(e, t) {
        t = t || {};
        var n, r, c = typeof e;
        if ("string" === c && e.length > 0) return function(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return 315576e5 * n;

                      case "weeks":
                      case "week":
                      case "w":
                        return 6048e5 * n;

                      case "days":
                      case "day":
                      case "d":
                        return n * s;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * o;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * i;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * a;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }(e);
        if ("number" === c && !1 === isNaN(e)) return t.long ? (n = e, (r = Math.abs(n)) >= s ? l(n, r, s, "day") : r >= o ? l(n, r, o, "hour") : r >= i ? l(n, r, i, "minute") : r >= a ? l(n, r, a, "second") : n + " ms") : function(e) {
            var t = Math.abs(e);
            return t >= s ? Math.round(e / s) + "d" : t >= o ? Math.round(e / o) + "h" : t >= i ? Math.round(e / i) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms";
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
    };
    function l(e, t, n, r) {
        var a = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (a ? "s" : "");
    }
    var d = r(function(e, t) {
        t.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e);
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0, a = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (r++, "%c" === e && (a = r));
            }), t.splice(a, 0, n);
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
            } catch (e) {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug");
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }, t.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, t.storage = function() {
            try {
                return localStorage;
            } catch (e) {}
        }(), t.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        e.exports = function(e) {
            function t(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return n.colors[Math.abs(t) % n.colors.length];
            }
            function n(e) {
                let i;
                function o(...e) {
                    if (!o.enabled) return;
                    const t = o, r = Number(new Date()), a = r - (i || r);
                    t.diff = a, t.prev = i, t.curr = r, i = r, e[0] = n.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, a) => {
                        if ("%%" === r) return r;
                        s++;
                        const i = n.formatters[a];
                        if ("function" == typeof i) {
                            const n = e[s];
                            r = i.call(t, n), e.splice(s, 1), s--;
                        }
                        return r;
                    }), n.formatArgs.call(t, e), (t.log || n.log).apply(t, e);
                }
                return o.namespace = e, o.enabled = n.enabled(e), o.useColors = n.useColors(), o.color = t(e), 
                o.destroy = r, o.extend = a, "function" == typeof n.init && n.init(o), n.instances.push(o), 
                o;
            }
            function r() {
                const e = n.instances.indexOf(this);
                return -1 !== e && (n.instances.splice(e, 1), !0);
            }
            function a(e, t) {
                return n(this.namespace + (void 0 === t ? ":" : t) + e);
            }
            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, n.disable = function() {
                const e = [ ...n.names.map(i), ...n.skips.map(i).map(e => "-" + e) ].join(",");
                return n.enable(""), e;
            }, n.enable = function(e) {
                let t;
                n.save(e), n.names = [], n.skips = [];
                const r = ("string" == typeof e ? e : "").split(/[\s,]+/), a = r.length;
                for (t = 0; t < a; t++) r[t] && ("-" === (e = r[t].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + e.substr(1) + "$")) : n.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < n.instances.length; t++) {
                    const e = n.instances[t];
                    e.enabled = n.enabled(e.namespace);
                }
            }, n.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let t, r;
                for (t = 0, r = n.skips.length; t < r; t++) if (n.skips[t].test(e)) return !1;
                for (t = 0, r = n.names.length; t < r; t++) if (n.names[t].test(e)) return !0;
                return !1;
            }, n.humanize = c, Object.keys(e).forEach(t => {
                n[t] = e[t];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = t, 
            n.enable(n.load()), n;
        }(t);
        const {formatters: n} = e.exports;
        n.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        };
    });
    function u(e, t) {
        return void 0 === t ? {
            type: e
        } : {
            type: e,
            value: t
        };
    }
    let p, g, f;
    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    d.log, d.formatArgs, d.save, d.load, d.useColors, d.storage, d.colors, function(e) {
        e.IsAvailableChange = "proxy.isAvailable", e.StateChange = "proxy.stateChange", 
        e.SelectedLocationChange = "proxy.selectedLocationChange", e.Connect = "proxy.connect", 
        e.Disconnect = "proxy.disconnect", e.PacDataChange = "proxy.pacDataChange", e.CredentialsConfigInvalid = "proxy.credentialsConfigInvalid", 
        e.CredentialsConfigReceived = "proxy.credentialsConfigReceived", e.LocationsConfigReceived = "proxy.locationsConfigReceived", 
        e.AutoConnectEnabledChange = "proxy.autoConnectEnabledChange", e.AutoConnectSiteAdd = "proxy.autoConnectSiteAdd", 
        e.AutoConnectSiteRemove = "proxy.autoConnectSiteRemove", e.AutoConnectSiteChange = "proxy.autoConnectSiteChange", 
        e.DisableConflictingExtensions = "proxy.disableConflictingExtensions", e.GetState = "proxy.getState", 
        e.GetProductInfo = "proxy.getProductInfo";
    }(p || (p = {})), function(e) {
        e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", 
        e.Disconnecting = "disconnecting";
    }(g || (g = {})), function(e) {
        e.FixedServers = "fixed_servers", e.PacScript = "pac_script", e.Direct = "direct";
    }(f || (f = {}));
    const v = d("runtimeInfo");
    let y, m;
    !function(e) {
        e.Win = "win", e.Mac = "mac", e.Unknown = "unknown";
    }(y || (y = {})), function(e) {
        e.Chrome = "chrome", e.Firefox = "firefox", e.Other = "other";
    }(m || (m = {}));
    const w = new class {
        constructor(e) {
            h(this, "_brand", void 0), h(this, "_extensionId", void 0), h(this, "_extensionVersion", void 0), 
            h(this, "_permissions", void 0), h(this, "_optionalPermissions", void 0), h(this, "_contentScriptPaths", void 0), 
            h(this, "_browser", void 0), h(this, "_name", void 0), h(this, "_shortName", void 0), 
            h(this, "_os", void 0), e.short_name || v("short_name not defined in manifest"), 
            this._brand = e.short_name, this._extensionId = chrome.i18n.getMessage("@@extension_id"), 
            this._extensionVersion = e.version, this._permissions = e.permissions, this._optionalPermissions = e.optional_permissions || [], 
            this._name = e.name, this._shortName = e.short_name, this._contentScriptPaths = this.extractPathsFromContentScripts(e.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = m.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = m.Firefox : this._browser = m.Other, 
            v("extension version: %s", this._extensionVersion);
        }
        get brand() {
            if (!this._brand) throw new Error("Invalid runtime info brand value.");
            return this._brand;
        }
        get extensionId() {
            return this._extensionId;
        }
        get extensionVersion() {
            return this._extensionVersion;
        }
        get permissions() {
            return this._permissions;
        }
        get optionalPermissions() {
            return this._optionalPermissions;
        }
        get contentScriptPaths() {
            return this._contentScriptPaths;
        }
        get os() {
            switch (this._os) {
              case y.Mac:
              case y.Win:
                return this._os;

              default:
                return y.Unknown;
            }
        }
        get browser() {
            return this._browser;
        }
        get name() {
            return this._name;
        }
        get shortName() {
            return this._shortName;
        }
        handleGetPlatformInfo(e) {
            e && (this._os = e.os);
        }
        extractPathsFromContentScripts(e) {
            if (!e) return [];
            const t = e.reduce(function(e, t) {
                return t.js.forEach(t => {
                    const n = t.split("/");
                    e.add(n[n.length - 1]);
                }), e;
            }, new Set());
            return Array.from(t);
        }
    }(chrome.runtime.getManifest());
    let b, C;
    chrome.runtime.getPlatformInfo(w.handleGetPlatformInfo.bind(w)), function(e) {
        e.ConfigReceived = "shepherd.configReceived";
    }(b || (b = {})), function(e) {
        e.Startup = "startup", e.GetState = "getState", e.StateChange = "stateChange", e.Installed = "installed", 
        e.Updated = "updated";
    }(C || (C = {}));
    const S = () => u(C.Installed), A = () => u(C.Startup), E = e => u(C.Updated, {
        previousVersion: e
    });
    let I, x, O, V, N, k, P, _, L, U, G, R, M, F, D, T, j, H, B, q, z, W, $, K;
    var Y, J;
    let Z, Q, X;
    !function(e) {
        e.Lifecycle = "Lifecycle", e.Notification = "Notification";
    }(I || (I = {})), function(e) {
        e.Installation = "Installation", e.Heartbeat = "Heartbeat", e.Update = "Update", 
        e.Click = "Click";
    }(x || (x = {})), function(e) {
        e.WholeNotification = "Whole Notification", e.Close = "Close", e.MoreStartFreeDownload = "More: Start Free Download", 
        e.MoreNextTime = "More: Next time";
    }(O || (O = {})), function(e) {
        e.Notification = "Notification";
    }(V || (V = {})), function(e) {
        e[e.Page = 0] = "Page", e[e.Click = 1] = "Click";
    }(N || (N = {})), function(e) {
        e[e.None = 0] = "None", e[e.FreeDataNotUsed = 1] = "FreeDataNotUsed", e[e.FreeDataAvailable = 2] = "FreeDataAvailable", 
        e[e.FreeDataUsed = 3] = "FreeDataUsed", e[e.Paid = 4] = "Paid", e[e.Offline = 5] = "Offline", 
        e[e.General = 6] = "General", e[e.UpdateBrowser = 7] = "UpdateBrowser", e[e.InstallApp = 8] = "InstallApp", 
        e[e.Loading = 9] = "Loading", e[e.UpdateExtension = 10] = "UpdateExtension", e[e.UpdateApp = 11] = "UpdateApp", 
        e[e.LicenseStatusNotValid = 12] = "LicenseStatusNotValid", e[e.Reinstall = 13] = "Reinstall", 
        e[e.Restart = 14] = "Restart";
    }(k || (k = {})), function(e) {
        e.None = "", e.Cta = "cta", e.Close = "close", e.On = "on", e.Off = "off";
    }(P || (P = {})), function(e) {
        e.None = "3999", e.FreeDataNotUsedPage = "3700", e.FreeDataAvailablePage = "3701", 
        e.FreeDataUsedPage = "3702", e.PaidPage = "3703", e.ErrorPage = "3704";
    }(_ || (_ = {})), function(e) {
        e.None = "", e.Upsell = "upsell", e.Paid = "", e.OfflineError = "offline-error", 
        e.GeneralError = "general-error", e.UpdateBrowserError = "update-browser-error", 
        e.InstallAppError = "install-app-error", e.LoadingError = "loading-error", e.UpdateExtensionError = "update-extension-error", 
        e.UpdateAppError = "update-app-error", e.LicenseStatusNotValidError = "license-status-not-valid-error", 
        e.ReinstallError = "reinstall-error", e.RestartError = "restart-error";
    }(L || (L = {})), function(e) {
        e.Connect = "public.AvastSecureLine.Connect", e.ConnectToOptimal = "public.AvastSecureLine.ConnectToOptimal", 
        e.Disconnect = "public.AvastSecureLine.Disconnect", e.GetApiVersion = "public.AvastSecureLine.GetApiVersion", 
        e.GetOptimalGateway = "public.AvastSecureLine.GetOptimalGateway", e.GetState = "public.AvastSecureLine.GetState", 
        e.OnErrorOccurred = "public.AvastSecureLine.OnErrorOccurred", e.OnStateChanged = "public.AvastSecureLine.OnStateChanged", 
        e.SetLanguage = "public.AvastSecureLine.SetLanguage", e.ShowNag = "public.AvastSecureLine.Ui.ShowNag", 
        e.GetProductInfo = "public.AvastSecureLine.GetProductInfo";
    }(U || (U = {})), function(e) {
        e.Connect = "public.AVGSecureVPN.Connect", e.ConnectToOptimal = "public.AVGSecureVPN.ConnectToOptimal", 
        e.Disconnect = "public.AVGSecureVPN.Disconnect", e.GetApiVersion = "public.AVGSecureVPN.GetApiVersion", 
        e.GetOptimalGateway = "public.AVGSecureVPN.GetOptimalGateway", e.GetState = "public.AVGSecureVPN.GetState", 
        e.OnErrorOccurred = "public.AVGSecureVPN.OnErrorOccurred", e.OnStateChanged = "public.AVGSecureVPN.OnStateChanged", 
        e.SetLanguage = "public.AVGSecureVPN.SetLanguage", e.ShowNag = "public.AVGSecureVPN.Ui.ShowNag", 
        e.GetProductInfo = "public.AVGSecureVPN.GetProductInfo";
    }(G || (G = {})), function(e) {
        e[e.VpnStatus = 1] = "VpnStatus", e[e.Gateways = 2] = "Gateways", e[e.LicenseInfo = 4] = "LicenseInfo", 
        e[e.ActiveGateway = 8] = "ActiveGateway", e[e.LastError = 32] = "LastError", e[e.PublicIpInfo = 256] = "PublicIpInfo", 
        e[e.ConnectionInfo = 512] = "ConnectionInfo";
    }(R || (R = {})), function(e) {
        e.Connected = "connected", e.Connecting = "connecting", e.Reconnecting = "reconnecting", 
        e.Disconnected = "disconnected", e.Disconnecting = "disconnecting", e.Error = "error", 
        e.Initializing = "initializing";
    }(M || (M = {})), function(e) {
        e.Trial = "trial", e.Subscription = "subscription", e.Free = "free";
    }(F || (F = {})), function(e) {
        e.Valid = "valid", e.Expired = "expired", e.NoSubscription = "noSubscription", e.NoLicenseFile = "noLicenseFile", 
        e.Banned = "banned";
    }(D || (D = {})), function(e) {
        e.SecureVpn = "com.avg.vpn", e.SecureLine = "com.avast.vpn", e.AvastOne = "com.avast.nativeproxy";
    }(T || (T = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/how-to-install", e.SecureLine = "https://extension.avastbrowser.com/vpn/how-to-install";
    }(j || (j = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/download", e.SecureLine = "https://extension.avastbrowser.com/vpn/download";
    }(H || (H = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/about", e.SecureLine = "https://extension.avastbrowser.com/vpn/about";
    }(B || (B = {})), function(e) {
        e.SecureVpn = "https://extension.avgbrowser.com/vpn/offer", e.SecureLine = "https://extension.avastbrowser.com/vpn/offer";
    }(q || (q = {})), function(e) {
        e.Compatible = "Compatible", e.ExtensionOld = "ExtensionOld", e.VpnClientOld = "VpnClientOld";
    }(z || (z = {})), function(e) {
        e.SetState = "setState", e.GetState = "getState", e.UpgradeNow = "upgradeNow";
    }(W || (W = {})), function(e) {
        e.VpnOn = "VPN_on", e.VpnOff = "VPN_off", e.VpnExpired = "VPN_expired", e.VpnGeneric = "VPN";
    }($ || ($ = {})), function(e) {
        e[e.Consumer = 1] = "Consumer", e[e.OemHp = 2] = "OemHp", e[e.OemAsus = 3] = "OemAsus", 
        e[e.OemAcer = 4] = "OemAcer", e[e.OemLenovo = 5] = "OemLenovo", e[e.OemSamsung = 6] = "OemSamsung", 
        e[e.Business = 8] = "Business", e[e.AvastOne = 9] = "AvastOne";
    }(K || (K = {})), function(e) {
        e.Connection = "connection";
    }(Y || (Y = {})), function(e) {
        e.LicenseRefused = "licenseRefused", e.NoInternetConnection = "noInternetConnection", 
        e.LicenseExpired = "licenseExpired", e.ConnectionLimitReached = "connectionLimitReached", 
        e.DataLimitReached = "dataLimitReached", e.VpnNameBanned = "vpnNameBanned", e.PlatformNotAllowed = "platformNotAllowed", 
        e.LicenseBanned = "licenseBanned", e.AuthorizationFailed = "authorizationFailed", 
        e.LocationNotAllowed = "locationNotAllowed", e.InternalError = "internalError", 
        e.MissingMandatoryParameters = "missingMandatoryParameters", e.NoLicenseInAccount = "noLicenseInAccount";
    }(J || (J = {})), function(e) {
        e.Exception = "exception";
    }(Z || (Z = {}));
    class ee extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, ee);
        }
    }
    class te extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, te);
        }
    }
    class ne extends Error {
        constructor(...e) {
            super(...e), Error.captureStackTrace && Error.captureStackTrace(this, ne);
        }
    }
    function re() {
        return "SecureLine" === w.brand ? U.GetApiVersion : G.GetApiVersion;
    }
    function ae() {
        return "SecureLine" === w.brand ? U.GetState : G.GetState;
    }
    function ie() {
        return "SecureLine" === w.brand ? U.GetOptimalGateway : G.GetOptimalGateway;
    }
    function oe() {
        return "SecureLine" === w.brand ? U.GetProductInfo : G.GetProductInfo;
    }
    !function(e) {
        e.GetIpmUrl = "app.utils.GetUrlParameters", e.ShowStoreWindow = "app.windowManager.ShowStoreWindow";
    }(Q || (Q = {})), function(e) {
        e.ClientCountryCodeChange = "analytics.clientCountryCodeChange", e.HeartbeatTracked = "analytics.heartbeatTracked", 
        e.TrackEvent = "analytics.trackEvent", e.TrackView = "analytics.trackView", e.AsbTrack = "analytics.asbTrack";
    }(X || (X = {}));
    const se = {
        asbTrack: (e, t) => u(X.AsbTrack, {
            type: e,
            action: t
        }),
        clientCountryCodeChange: e => u(X.ClientCountryCodeChange, e),
        heartbeatTracked: () => u(X.HeartbeatTracked),
        trackEvent: (e, t, n, r) => u(X.TrackEvent, {
            category: e,
            action: t,
            label: n,
            value: r
        }),
        trackView: e => u(X.TrackView, e)
    }, ce = d("analytics actions");
    const le = new class {
        constructor() {
            h(this, "store", void 0);
        }
        setStore(e) {
            this.store = e;
        }
        dispatch(e) {
            return this.store.dispatch(e);
        }
        getState() {
            return this.store.getState();
        }
    }();
    function de(e, t) {
        return e ? t ? chrome.i18n.getMessage(e, t) : chrome.i18n.getMessage(e) : "";
    }
    function ue() {
        return chrome.i18n.getUILanguage().split("-")[0];
    }
    const pe = d("analytics/ga");
    var ge;
    !function(e) {
        e.Event = "event", e.ScreenView = "screenview";
    }(ge || (ge = {}));
    class fe {
        constructor() {
            h(this, "lastIpInfoRequest", void 0);
        }
        trackView(e) {
            this.trackOnlyLifecycleEvents() || this.track(ge.ScreenView, {
                cd: e
            });
        }
        trackEvent(e, t, n, r) {
            this.trackOnlyLifecycleEvents() && e !== I.Lifecycle || this.track(ge.Event, {
                ea: t,
                ec: e,
                el: n,
                ev: r
            });
        }
        trackHeartbeat(e) {
            this.trackEvent(I.Lifecycle, x.Heartbeat, w.extensionVersion);
        }
        async refreshClientCountryCode() {
            let e = le.getState();
            if (navigator.onLine && e.proxy.state === g.Disconnected) if (this.lastIpInfoRequest && this.lastIpInfoRequest > Date.now() - 864e5) pe("skipping ip info check, too soon to check"); else try {
                const t = await fetch(fe.ipInfoUrl);
                if (t.ok) {
                    const n = await t.json();
                    (e = le.getState()).proxy.state === g.Disconnected ? le.dispatch(se.clientCountryCodeChange(n.country)) : pe("proxy state not disconnected anymore, cannot trust ip info");
                }
            } catch (e) {
                pe("error while fetching ip info: %O", e);
            } finally {
                this.lastIpInfoRequest = Date.now();
            } else pe("not online or proxy on, cannot check ip info");
        }
        track(e, t) {
            const n = le.getState(), r = new URLSearchParams();
            r.append("v", "1"), r.append("tid", "UA-58120669-58"), r.append("t", e), r.append("cid", n.analytics.guid), 
            r.append("ul", chrome.i18n.getUILanguage()), r.append("an", "Hidemyass Browser Extension"), 
            r.append("av", n.analytics.currentVersion), r.append("aip", "1"), r.append("cd1", n.analytics.guid), 
            r.append("cd2", n.proxy.selectedLocation && n.proxy.selectedLocation.locationKey || "auto"), 
            r.append("cd3", n.proxy.autoConnectEnabled ? "1" : "0"), r.append("cd4", n.proxy.autoConnectSites.length.toString()), 
            r.append("cd5", n.tabKiller.shortcutEnabled ? "1" : "0"), r.append("cd11", "1"), 
            n.analytics.clientCountryCode && r.append("cd12", n.analytics.clientCountryCode), 
            Object.keys(t).forEach(e => {
                "string" == typeof t[e] && r.append(e, t[e]);
            }), r.append("z", Math.floor(1e8 + 9e8 * Math.random()).toString());
            const a = new Request(fe.gaUrl, {
                body: r.toString(),
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                method: "POST"
            });
            try {
                fetch(a);
            } catch (e) {
                pe("error while tracking to ga: %O", e);
            }
        }
        trackOnlyLifecycleEvents() {
            return le.getState().shepherd.config.analytics.gaOnlyLifecycleEvents;
        }
    }
    h(fe, "gaUrl", "https://www.google-analytics.com/collect"), h(fe, "ipInfoUrl", "https://ip-info.ff.avast.com/v2/info");
    const he = d("analytics");
    class ve {
        constructor() {
            h(this, "burger", void 0), h(this, "ga", void 0);
        }
        init() {
            he("initializing"), this.initOrRemoveTrackers(), chrome.alarms && (chrome.alarms.onAlarm.addListener(this.handleAlarm.bind(this)), 
            chrome.alarms.create(ve.alarmName, {
                periodInMinutes: ve.alarmInterval
            })), window.addEventListener("online", this.handleConnectivityChange.bind(this)), 
            this.trackHeartbeatIfNecessary();
        }
        trackEvent(e, t, n, r) {
            this.burger ? he("tracking burger event, category %s, action %s, label: %s, value: %s", e, t, n, r) : this.ga ? this.ga.trackEvent(e, t, n, r) : he("not tracking event, burger/ga not initialized");
        }
        trackView(e) {
            this.burger ? he("tracking burger view: %s", e) : this.ga ? this.ga.trackView(e) : he("not tracking view, burger/ga not initialized");
        }
        asbTrack(e, t) {
            ve.asbTrackingAvailable && (e === N.Page ? chrome.avast.stats.add(chrome.avast.stats.EventType.PAGE, t) : e === N.Click && chrome.avast.stats.add(chrome.avast.stats.EventType.CLICK, t));
        }
        trackHeartbeatIfNecessary() {
            he("checking if heartbeat should be tracked");
            const e = le.getState(), t = Date.now();
            e.analytics.nextHeartbeat > t || (this.burger ? he("tracking burger heartbeat") : this.ga ? this.ga.trackHeartbeat(e.analytics.lastHeartbeat) : he("not tracking heartbeat, burger/ga not initialized"), 
            le.dispatch(se.heartbeatTracked()));
        }
        initOrRemoveTrackers() {
            const e = le.getState();
            e.shepherd && e.shepherd.config.analytics && e.shepherd.config.analytics.trackToGa && !this.ga ? (he("initializing ga tracker"), 
            this.ga = new fe()) : (he("removing ga tracker"), this.ga = null);
        }
        refreshClientCountryCode() {
            this.ga && this.ga.refreshClientCountryCode();
        }
        handleAlarm(e) {
            e.name === ve.alarmName && this.trackHeartbeatIfNecessary();
        }
        handleConnectivityChange() {
            this.trackHeartbeatIfNecessary(), this.refreshClientCountryCode();
        }
    }
    function ye(e, ...t) {
        return Object.assign.apply(this, [].concat({}, e, ...t));
    }
    function me(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case C.Updated:
            return ye(e, {
                currentVersion: w.extensionVersion,
                updateTime: Date.now()
            });

          case X.HeartbeatTracked:
            return ye(e, {
                lastHeartbeat: Date.now(),
                nextHeartbeat: Date.now() + 864e5
            });

          case X.ClientCountryCodeChange:
            return ye(e, {
                clientCountryCode: t.value
            });
        }
        return e;
    }
    function we(e) {
        let t = "";
        for (;e-- > 0; ) t += Math.floor(16 * Math.random()).toString(16);
        return t;
    }
    h(ve, "alarmName", "analytics/heartbeat"), h(ve, "alarmInterval", 30), h(ve, "asbTrackingAvailable", !(!chrome.avast || !chrome.avast.stats) || !1);
    const be = {
        guid: we(8) + "-" + we(4) + "-" + we(4) + "-" + we(4) + "-" + we(12),
        installationTime: Date.now(),
        installationVersion: w.extensionVersion,
        updateTime: null,
        currentVersion: w.extensionVersion,
        lastHeartbeat: null,
        nextHeartbeat: Date.now() + 864e5,
        clientCountryCode: null
    }, Ce = [ "guid", "installationTime", "installationVersion", "updateTime", "currentVersion", "lastHeartbeat", "nextHeartbeat", "clientCountryCode" ], Se = d("browserStorage");
    var Ae = Array.isArray, Ee = Object.keys, Ie = Object.prototype.hasOwnProperty, xe = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
            var r, a, i, o = Ae(t), s = Ae(n);
            if (o && s) {
                if ((a = t.length) != n.length) return !1;
                for (r = a; 0 != r--; ) if (!e(t[r], n[r])) return !1;
                return !0;
            }
            if (o != s) return !1;
            var c = t instanceof Date, l = n instanceof Date;
            if (c != l) return !1;
            if (c && l) return t.getTime() == n.getTime();
            var d = t instanceof RegExp, u = n instanceof RegExp;
            if (d != u) return !1;
            if (d && u) return t.toString() == n.toString();
            var p = Ee(t);
            if ((a = p.length) !== Ee(n).length) return !1;
            for (r = a; 0 != r--; ) if (!Ie.call(n, p[r])) return !1;
            for (r = a; 0 != r--; ) if (!e(t[i = p[r]], n[i])) return !1;
            return !0;
        }
        return t != t && n != n;
    };
    const Oe = d("statePersist"), Ve = "_state";
    class Ne {
        constructor(e, t) {
            h(this, "browserStorage", void 0), h(this, "paths", void 0);
            const n = [];
            Object.keys(t).forEach(function(e) {
                t[e].forEach(function(t) {
                    t.includes(".") ? Oe("no support for persisting nested properties: %s:%s", e, t) : n.push({
                        root: e,
                        subpath: t
                    });
                });
            }), this.browserStorage = e, this.paths = n;
        }
        load() {
            return this.browserStorage.get(Ve) || null;
        }
        clear() {
            this.browserStorage.set(Ve, null);
        }
        buildMiddleware() {
            let e = null;
            return t => n => r => {
                let a;
                const i = n(r), o = t.getState();
                return o !== e && (a = this.paths.reduce((e, t) => (e[t.root] = e[t.root] || {}, 
                e[t.root][t.subpath] = o[t.root][t.subpath], e), {})), e = o, !a || xe(this.browserStorage.get(Ve), a) ? i : (this.browserStorage.set(Ve, a), 
                i);
            };
        }
    }
    var ke = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }(), Pe = {
        INIT: "@@redux/INIT" + Math.random().toString(36).substring(7).split("").join("."),
        REPLACE: "@@redux/REPLACE" + Math.random().toString(36).substring(7).split("").join(".")
    }, _e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Le = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    function Ue(e, t, n) {
        var r;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(Ue)(e, t);
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var a = e, i = t, o = [], s = o, c = !1;
        function l() {
            s === o && (s = o.slice());
        }
        function d() {
            if (c) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
            return i;
        }
        function u(e) {
            if ("function" != typeof e) throw new Error("Expected the listener to be a function.");
            if (c) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
            var t = !0;
            return l(), s.push(e), function() {
                if (t) {
                    if (c) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    t = !1, l();
                    var n = s.indexOf(e);
                    s.splice(n, 1);
                }
            };
        }
        function p(e) {
            if (!function(e) {
                if ("object" !== (void 0 === e ? "undefined" : _e(e)) || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t;
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (c) throw new Error("Reducers may not dispatch actions.");
            try {
                c = !0, i = a(i, e);
            } finally {
                c = !1;
            }
            for (var t = o = s, n = 0; n < t.length; n++) (0, t[n])();
            return e;
        }
        return p({
            type: Pe.INIT
        }), (r = {
            dispatch: p,
            subscribe: u,
            getState: d,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                a = e, p({
                    type: Pe.REPLACE
                });
            }
        })[ke] = function() {
            var e, t = u;
            return (e = {
                subscribe: function(e) {
                    if ("object" !== (void 0 === e ? "undefined" : _e(e)) || null === e) throw new TypeError("Expected the observer to be an object.");
                    function n() {
                        e.next && e.next(d());
                    }
                    return n(), {
                        unsubscribe: t(n)
                    };
                }
            })[ke] = function() {
                return this;
            }, e;
        }, r;
    }
    function Ge(e, t) {
        var n = t && t.type;
        return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    var Re = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = t.repeat = function(e, t) {
            return new Array(t + 1).join(e);
        }, r = t.pad = function(e, t) {
            return n("0", t - e.toString().length) + e;
        };
        t.formatTime = function(e) {
            return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3);
        }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date;
    });
    n(Re), Re.repeat, Re.pad, Re.formatTime, Re.timer;
    var Me = r(function(e, n) {
        e.exports = function(e) {
            var n, r, a = [];
            function i(e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                });
            }
            function o(e, t) {
                Object.defineProperty(this, "kind", {
                    value: e,
                    enumerable: !0
                }), t && t.length && Object.defineProperty(this, "path", {
                    value: t,
                    enumerable: !0
                });
            }
            function s(e, t, n) {
                s.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "rhs", {
                    value: n,
                    enumerable: !0
                });
            }
            function c(e, t) {
                c.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function l(e, t) {
                l.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
                    value: t,
                    enumerable: !0
                });
            }
            function d(e, t, n) {
                d.super_.call(this, "A", e), Object.defineProperty(this, "index", {
                    value: t,
                    enumerable: !0
                }), Object.defineProperty(this, "item", {
                    value: n,
                    enumerable: !0
                });
            }
            function u(e, t, n) {
                var r = e.slice((n || t) + 1 || e.length);
                return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e;
            }
            function p(e) {
                var t = typeof e;
                return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : void 0 !== e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
            }
            function g(t, n, r, a, i, o, f) {
                var h = (i = i || []).slice(0);
                if (void 0 !== o) {
                    if (a) {
                        if ("function" == typeof a && a(h, o)) return;
                        if ("object" == typeof a) {
                            if (a.prefilter && a.prefilter(h, o)) return;
                            if (a.normalize) {
                                var v = a.normalize(h, o, t, n);
                                v && (t = v[0], n = v[1]);
                            }
                        }
                    }
                    h.push(o);
                }
                "regexp" === p(t) && "regexp" === p(n) && (t = t.toString(), n = n.toString());
                var y = typeof t, m = typeof n;
                if ("undefined" === y) "undefined" !== m && r(new c(h, n)); else if ("undefined" === m) r(new l(h, t)); else if (p(t) !== p(n)) r(new s(h, t, n)); else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n != 0) r(new s(h, t, n)); else if ("object" === y && null !== t && null !== n) {
                    if ((f = f || []).indexOf(t) < 0) {
                        if (f.push(t), Array.isArray(t)) {
                            var w;
                            for (t.length, w = 0; w < t.length; w++) w >= n.length ? r(new d(h, w, new l(e, t[w]))) : g(t[w], n[w], r, a, h, w, f);
                            for (;w < n.length; ) r(new d(h, w, new c(e, n[w++])));
                        } else {
                            var b = Object.keys(t), C = Object.keys(n);
                            b.forEach(function(i, o) {
                                var s = C.indexOf(i);
                                s >= 0 ? (g(t[i], n[i], r, a, h, i, f), C = u(C, s)) : g(t[i], e, r, a, h, i, f);
                            }), C.forEach(function(t) {
                                g(e, n[t], r, a, h, t, f);
                            });
                        }
                        f.length = f.length - 1;
                    }
                } else t !== n && ("number" === y && isNaN(t) && isNaN(n) || r(new s(h, t, n)));
            }
            function f(t, n, r, a) {
                return a = a || [], g(t, n, function(e) {
                    e && a.push(e);
                }, r), a.length ? a : e;
            }
            function h(e, t, n) {
                if (e && t && n && n.kind) {
                    for (var r = e, a = -1, i = n.path ? n.path.length - 1 : 0; ++a < i; ) void 0 === r[n.path[a]] && (r[n.path[a]] = "number" == typeof n.path[a] ? [] : {}), 
                    r = r[n.path[a]];
                    switch (n.kind) {
                      case "A":
                        !function e(t, n, r) {
                            if (r.path && r.path.length) {
                                var a, i = t[n], o = r.path.length - 1;
                                for (a = 0; a < o; a++) i = i[r.path[a]];
                                switch (r.kind) {
                                  case "A":
                                    e(i[r.path[a]], r.index, r.item);
                                    break;

                                  case "D":
                                    delete i[r.path[a]];
                                    break;

                                  case "E":
                                  case "N":
                                    i[r.path[a]] = r.rhs;
                                }
                            } else switch (r.kind) {
                              case "A":
                                e(t[n], r.index, r.item);
                                break;

                              case "D":
                                t = u(t, n);
                                break;

                              case "E":
                              case "N":
                                t[n] = r.rhs;
                            }
                            return t;
                        }(n.path ? r[n.path[a]] : r, n.index, n.item);
                        break;

                      case "D":
                        delete r[n.path[a]];
                        break;

                      case "E":
                      case "N":
                        r[n.path[a]] = n.rhs;
                    }
                }
            }
            return n = "object" == typeof t && t ? t : "undefined" != typeof window ? window : {}, 
            (r = n.DeepDiff) && a.push(function() {
                void 0 !== r && n.DeepDiff === f && (n.DeepDiff = r, r = e);
            }), i(s, o), i(c, o), i(l, o), i(d, o), Object.defineProperties(f, {
                diff: {
                    value: f,
                    enumerable: !0
                },
                observableDiff: {
                    value: g,
                    enumerable: !0
                },
                applyDiff: {
                    value: function(e, t, n) {
                        e && t && g(e, t, function(r) {
                            n && !n(e, t, r) || h(e, t, r);
                        });
                    },
                    enumerable: !0
                },
                applyChange: {
                    value: h,
                    enumerable: !0
                },
                revertChange: {
                    value: function(e, t, n) {
                        if (e && t && n && n.kind) {
                            var r, a, i = e;
                            for (a = n.path.length - 1, r = 0; r < a; r++) void 0 === i[n.path[r]] && (i[n.path[r]] = {}), 
                            i = i[n.path[r]];
                            switch (n.kind) {
                              case "A":
                                !function e(t, n, r) {
                                    if (r.path && r.path.length) {
                                        var a, i = t[n], o = r.path.length - 1;
                                        for (a = 0; a < o; a++) i = i[r.path[a]];
                                        switch (r.kind) {
                                          case "A":
                                            e(i[r.path[a]], r.index, r.item);
                                            break;

                                          case "D":
                                          case "E":
                                            i[r.path[a]] = r.lhs;
                                            break;

                                          case "N":
                                            delete i[r.path[a]];
                                        }
                                    } else switch (r.kind) {
                                      case "A":
                                        e(t[n], r.index, r.item);
                                        break;

                                      case "D":
                                      case "E":
                                        t[n] = r.lhs;
                                        break;

                                      case "N":
                                        t = u(t, n);
                                    }
                                    return t;
                                }(i[n.path[r]], n.index, n.item);
                                break;

                              case "D":
                              case "E":
                                i[n.path[r]] = n.lhs;
                                break;

                              case "N":
                                delete i[n.path[r]];
                            }
                        }
                    },
                    enumerable: !0
                },
                isConflict: {
                    value: function() {
                        return void 0 !== r;
                    },
                    enumerable: !0
                },
                noConflict: {
                    value: function() {
                        return a && (a.forEach(function(e) {
                            e();
                        }), a = null), f;
                    },
                    enumerable: !0
                }
            }), f;
        }();
    }), Fe = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n, i) {
            var o = (0, r.default)(e, t);
            try {
                i ? n.groupCollapsed("diff") : n.group("diff");
            } catch (e) {
                n.log("diff");
            }
            o ? o.forEach(function(e) {
                var t = e.kind, r = function(e) {
                    var t = e.kind, n = e.path, r = e.lhs, a = e.rhs, i = e.index, o = e.item;
                    switch (t) {
                      case "E":
                        return [ n.join("."), r, "→", a ];

                      case "N":
                        return [ n.join("."), a ];

                      case "D":
                        return [ n.join(".") ];

                      case "A":
                        return [ n.join(".") + "[" + i + "]", o ];

                      default:
                        return [];
                    }
                }(e);
                n.log.apply(n, [ "%c " + a[t].text, function(e) {
                    return "color: " + a[e].color + "; font-weight: bold";
                }(t) ].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)));
            }) : n.log("—— no diff ——");
            try {
                n.groupEnd();
            } catch (e) {
                n.log("—— diff end —— ");
            }
        };
        var n, r = (n = Me) && n.__esModule ? n : {
            default: n
        }, a = {
            E: {
                color: "#2196F3",
                text: "CHANGED:"
            },
            N: {
                color: "#4CAF50",
                text: "ADDED:"
            },
            D: {
                color: "#F44336",
                text: "DELETED:"
            },
            A: {
                color: "#2196F3",
                text: "ARRAY:"
            }
        };
        e.exports = t.default;
    });
    n(Fe);
    var De = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        t.printBuffer = function(e, t) {
            var n = t.logger, r = t.actionTransformer, o = t.titleFormatter, s = void 0 === o ? function(e) {
                var t = e.timestamp, n = e.duration;
                return function(e, r, a) {
                    var i = [ "action" ];
                    return i.push("%c" + String(e.type)), t && i.push("%c@ " + r), n && i.push("%c(in " + a.toFixed(2) + " ms)"), 
                    i.join(" ");
                };
            }(t) : o, c = t.collapsed, l = t.colors, d = t.level, u = t.diff, p = void 0 === t.titleFormatter;
            e.forEach(function(o, g) {
                var f = o.started, h = o.startedTime, v = o.action, y = o.prevState, m = o.error, w = o.took, b = o.nextState, C = e[g + 1];
                C && (b = C.prevState, w = C.started - f);
                var S = r(v), A = "function" == typeof c ? c(function() {
                    return b;
                }, v, o) : c, E = (0, Re.formatTime)(h), I = l.title ? "color: " + l.title(S) + ";" : "", x = [ "color: gray; font-weight: lighter;" ];
                x.push(I), t.timestamp && x.push("color: gray; font-weight: lighter;"), t.duration && x.push("color: gray; font-weight: lighter;");
                var O = s(S, E, w);
                try {
                    A ? l.title && p ? n.groupCollapsed.apply(n, [ "%c " + O ].concat(x)) : n.groupCollapsed(O) : l.title && p ? n.group.apply(n, [ "%c " + O ].concat(x)) : n.group(O);
                } catch (e) {
                    n.log(O);
                }
                var V = i(d, S, [ y ], "prevState"), N = i(d, S, [ S ], "action"), k = i(d, S, [ m, y ], "error"), P = i(d, S, [ b ], "nextState");
                V && (l.prevState ? n[V]("%c prev state", "color: " + l.prevState(y) + "; font-weight: bold", y) : n[V]("prev state", y)), 
                N && (l.action ? n[N]("%c action    ", "color: " + l.action(S) + "; font-weight: bold", S) : n[N]("action    ", S)), 
                m && k && (l.error ? n[k]("%c error     ", "color: " + l.error(m, y) + "; font-weight: bold;", m) : n[k]("error     ", m)), 
                P && (l.nextState ? n[P]("%c next state", "color: " + l.nextState(b) + "; font-weight: bold", b) : n[P]("next state", b)), 
                u && (0, a.default)(y, b, n, A);
                try {
                    n.groupEnd();
                } catch (e) {
                    n.log("—— log end ——");
                }
            });
        };
        var r, a = (r = Fe) && r.__esModule ? r : {
            default: r
        };
        function i(e, t, r, a) {
            switch (void 0 === e ? "undefined" : n(e)) {
              case "object":
                return "function" == typeof e[a] ? e[a].apply(e, function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }(r)) : e[a];

              case "function":
                return e(t);

              default:
                return e;
            }
        }
    });
    n(De), De.printBuffer;
    var Te = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {
            level: "log",
            logger: console,
            logErrors: !0,
            collapsed: void 0,
            predicate: void 0,
            duration: !1,
            timestamp: !0,
            stateTransformer: function(e) {
                return e;
            },
            actionTransformer: function(e) {
                return e;
            },
            errorTransformer: function(e) {
                return e;
            },
            colors: {
                title: function() {
                    return "inherit";
                },
                prevState: function() {
                    return "#9E9E9E";
                },
                action: function() {
                    return "#03A9F4";
                },
                nextState: function() {
                    return "#4CAF50";
                },
                error: function() {
                    return "#F20404";
                }
            },
            diff: !1,
            diffPredicate: void 0,
            transformer: void 0
        }, e.exports = t.default;
    });
    n(Te);
    var je = r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logger = t.createLogger = t.defaults = void 0;
        var n, r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }, a = (n = Te) && n.__esModule ? n : {
            default: n
        };
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = r({}, a.default, e), n = t.logger, i = t.stateTransformer, o = t.errorTransformer, s = t.predicate, c = t.logErrors, l = t.diffPredicate;
            if (void 0 === n) return function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), 
            function() {
                return function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            };
            var d = [];
            return function(e) {
                var n = e.getState;
                return function(e) {
                    return function(a) {
                        if ("function" == typeof s && !s(n, a)) return e(a);
                        var u = {};
                        d.push(u), u.started = Re.timer.now(), u.startedTime = new Date(), u.prevState = i(n()), 
                        u.action = a;
                        var p = void 0;
                        if (c) try {
                            p = e(a);
                        } catch (e) {
                            u.error = o(e);
                        } else p = e(a);
                        u.took = Re.timer.now() - u.started, u.nextState = i(n());
                        var g = t.diff && "function" == typeof l ? l(n, a) : t.diff;
                        if ((0, De.printBuffer)(d, r({}, t, {
                            diff: g
                        })), d.length = 0, u.error) throw u.error;
                        return p;
                    };
                };
            };
        }
        var o = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, n = e.getState;
            if ("function" == typeof t || "function" == typeof n) return i()({
                dispatch: t,
                getState: n
            });
            console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
        };
        t.defaults = a.default, t.createLogger = i, t.logger = o, t.default = o;
    });
    n(je), je.logger;
    var He = je.createLogger, Be = (je.defaults, n(r(function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t) {
                return function(n) {
                    return function(r) {
                        var a = t.getState(), i = n(r), o = t.getState();
                        return e(a, o, r, t.dispatch), i;
                    };
                };
            };
        };
    })));
    const qe = d("store");
    function ze(e, t) {
        xe(e, t) || chrome.runtime.sendMessage({
            type: C.StateChange,
            value: {
                state: t
            }
        }, function() {
            chrome.runtime.lastError;
        });
    }
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = window.browser);
    const We = new class {
        constructor() {
            h(this, "cache", void 0), h(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(e) {
            return new Promise(t => {
                chrome && chrome.storage || t(), this.usingStorage = !0, chrome.storage.local.get(e || null, e => {
                    this.cache = e, t();
                });
            });
        }
        get(e) {
            return this.cache[e];
        }
        set(e, t) {
            null == t || void 0 === t ? (this.usingStorage && chrome.storage.local.remove(e, () => {
                chrome.runtime.lastError && Se('could not remove key "%s" from browser storage (%O)', e, chrome.runtime.lastError);
            }), delete this.cache[e]) : (this.usingStorage && chrome.storage.local.set({
                [e]: t
            }, () => {
                chrome.runtime.lastError && Se('could not set key "%s" in browser storage (%O)', e, chrome.runtime.lastError);
            }), this.cache[e] = t);
        }
    }(), $e = d("bgLdr");
    let Ke, Ye;
    d("features"), function(e) {
        e.Proxy = "proxy", e.Vpn = "vpn", e.WebRtc = "webRtc", e.TabKiller = "tabKiller", 
        e.Shepherd = "shepherd", e.Analytics = "analytics", e.Spc = "spc", e.Notifications = "notifications";
    }(Ke || (Ke = {})), function(e) {
        e.ApiCompatibilityResolved = "vpn.apiCompatibilityResolved", e.ActiveGatewayUpdated = "vpn.activeGatewayUpdated", 
        e.GatewaysUpdated = "vpn.gatewaysUpdated", e.LastErrorUpdated = "vpn.lastErrorUpdated", 
        e.ErrorOccurred = "vpn.ErrorOccurred", e.VpnApiReturnedError = "vpn.VpnApiReturnedError", 
        e.LicenseInfoUpdated = "vpn.licenseInfoUpdated", e.VpnStatusUpdated = "vpn.vpnStatusUpdated", 
        e.Connect = "vpn.connect", e.Disconnect = "vpn.disconnect", e.OptimalGatewayUpdated = "vpn.optimalGatewayUpdated", 
        e.SelectGateway = "vpn.selectGateway", e.IpAddressChanged = "vpn.ipAddressChanged", 
        e.ReconnectingToAnotherGatewayStatusChanged = "vpn.reconnectingToAnotherGatewayStatusChanged", 
        e.HandleNetworkConnectivityChange = "vpn.handleNetworkConnectivityChange", e.SetBrowserApiAvailability = "vpn.setBrowserApiAvailability", 
        e.SetIsInitialized = "vpn.setIsInitialized", e.SetNativeMessagingHostFound = "vpn.setNativeMessagingHostFound", 
        e.VpnClientApiVersionUpdated = "vpn.VpnClientApiVersionUpdated", e.ShowLicenseUpgradePage = "vpn.showLicenseUpgradePage", 
        e.VpnClientApiEditionUpdated = "vpn.VpnClientApiEditionUpdated", e.SetIsAvastOne = "vpn.setIsAvastOne", 
        e.PublicIpInfoUpdated = "vpn.publicIpInfoUpdated", e.ConnectionInfoUpdated = "vpn.connectionInfoUpdated", 
        e.LastActivePageUpdated = "vpn.lastActivePageUpdated";
    }(Ye || (Ye = {}));
    const Je = {
        activeGatewayUpdated: e => u(Ye.ActiveGatewayUpdated, e),
        apiCompatibilityResolved: e => u(Ye.ApiCompatibilityResolved, e),
        connect: () => u(Ye.Connect),
        connectionInfoUpdated: e => u(Ye.ConnectionInfoUpdated, e),
        disconnect: () => u(Ye.Disconnect),
        errorOccurred: e => u(Ye.ErrorOccurred, e),
        gatewaySelected: e => u(Ye.SelectGateway, e),
        gatewaysUpdated: e => u(Ye.GatewaysUpdated, e),
        handleNetworkConnectivityChange: e => u(Ye.HandleNetworkConnectivityChange, e),
        ipAddressChanged: e => u(Ye.IpAddressChanged, e),
        lastErrorUpdated: e => u(Ye.LastErrorUpdated, e),
        licenseInfoUpdated: e => u(Ye.LicenseInfoUpdated, e),
        optimalGatewayUpdated: e => u(Ye.OptimalGatewayUpdated, e),
        publicIpInfoUpdated: e => u(Ye.PublicIpInfoUpdated, e),
        setBrowserApiAvailability: e => u(Ye.SetBrowserApiAvailability, e),
        setIsAvastOne: e => u(Ye.SetIsAvastOne, e),
        setIsInitialized: e => u(Ye.SetIsInitialized, e),
        setNativeMessagingHostFound: e => u(Ye.SetNativeMessagingHostFound, e),
        showLicenseUpgradePage: () => u(Ye.ShowLicenseUpgradePage),
        statusUpdated: e => u(Ye.VpnStatusUpdated, e),
        updateLastActivePage: e => u(Ye.LastActivePageUpdated, e),
        updateReconnectingToAnotherGatewayStatus: e => u(Ye.ReconnectingToAnotherGatewayStatusChanged, e),
        vpnApiReturnedError: e => u(Ye.VpnApiReturnedError, e),
        vpnClientApiEditionUpdated: e => u(Ye.VpnClientApiEditionUpdated, e),
        vpnClientApiVersionUpdated: e => u(Ye.VpnClientApiVersionUpdated, e)
    }, Ze = "optimal_unknown", Qe = 2;
    let Xe;
    !function(e) {
        e.SetBrowserApiAvailability = "spc.setBrowserApiAvailability", e.SetSelectedGatewayId = "spc.SetSelectedGatewayId";
    }(Xe || (Xe = {}));
    const et = {
        setBrowserApiAvailability: e => u(Xe.SetBrowserApiAvailability, e),
        setSelectedGatewayId: e => u(Xe.SetSelectedGatewayId, e)
    };
    let tt, nt;
    function rt(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case Xe.SetBrowserApiAvailability:
            return ye(e, {
                isBrowserApiAvailable: t.value
            });

          case Xe.SetSelectedGatewayId:
            return ye(e, {
                selectedGatewayId: t.value
            });

          case Ye.ApiCompatibilityResolved:
            let r;
            const a = t.value;
            return a === z.ExtensionOld ? r = nt.UpdateExtension : a === z.VpnClientOld && (r = nt.UpdateVpnClient), 
            ye(e, {
                error: r
            });

          case Ye.OptimalGatewayUpdated:
            {
                const n = t.value, r = {
                    spcVpnLocation: it(n),
                    id: n.id
                };
                let a = [];
                return r && r.id === Ze && a.push(r), a = a.concat(e.locations.map(e => {
                    let t;
                    return {
                        spcVpnLocation: t = e.id === n.id ? function(e) {
                            const t = {
                                name: "",
                                value: ""
                            };
                            return e && (e.id === Ze ? (t.name = e.spcVpnLocation.name, t.value = e.spcVpnLocation.value) : (t.name = de("optimal_location") + " (" + e.spcVpnLocation.name + ")", 
                            t.value = "optimal_" + e.spcVpnLocation.value)), t;
                        }(e) : e.spcVpnLocation,
                        id: e.id
                    };
                })), ye(e, {
                    locations: a,
                    optimalLocation: r
                });
            }

          case Ye.GatewaysUpdated:
            {
                let n = [];
                const r = e.optimalLocation;
                return r && r.id === Ze && n.push(r), n = n.concat(t.value.map(t => {
                    let n;
                    return {
                        spcVpnLocation: n = e.optimalLocation && t.id === e.optimalLocation.id ? it(t) : at(t),
                        id: t.id
                    };
                })), ye(e, {
                    locations: n
                });
            }

          case Ye.LicenseInfoUpdated:
            return ye(e, {
                expiresIn: function(e) {
                    let t;
                    if (e.status === D.Valid) {
                        if (e.type === F.Trial) {
                            const n = Math.floor(Date.now() / 1e3);
                            t = Math.floor((e.expirationTimestamp - n) / 60 / 60 / 24);
                        }
                    } else t = e.status === D.Expired ? 0 : -1;
                    return t;
                }(t.value)
            });

          case Ye.VpnStatusUpdated:
            return ye(e, {
                active: (n = t.value, n === M.Connecting || n === M.Reconnecting || n === M.Connected)
            });

          case Ye.SelectGateway:
            {
                const n = t.value;
                let r;
                const a = {
                    spcVpnLocation: r = e.optimalLocation && n.id === e.optimalLocation.id ? it(n) : at(n),
                    id: n.id
                };
                return ye(e, {
                    location: a
                });
            }

          case Ye.HandleNetworkConnectivityChange:
            return ye(e, {
                error: t.value ? null : nt.Offline
            });

          case Ye.SetNativeMessagingHostFound:
            return ye(e, {
                error: t.value ? null : nt.InstallVpnClient
            });

          case Ye.ErrorOccurred:
          case Ye.VpnApiReturnedError:
            return ye(e, {
                error: t.value ? nt.VpnClientError : null
            });
        }
        var n;
        return e;
    }
    function at(e) {
        const t = {
            name: "",
            value: ""
        };
        return e && (t.name = ot(e), t.value = st(e)), t;
    }
    function it(e) {
        const t = {
            name: "",
            value: ""
        };
        if (e) if (e.id === Ze) t.name = de("optimal_location"), t.value = "optimal_" + Ze; else {
            const n = ot(e), r = st(e);
            t.name = de("optimal_location") + " (" + n + ")", t.value = "optimal_" + r;
        }
        return t;
    }
    function ot(e) {
        return e.city.name + ", " + e.country.name;
    }
    function st(e) {
        return e.country.id + "_" + e.city.name;
    }
    !function(e) {
        e.SetState = "setState", e.GetState = "getState", e.UpgradeNow = "upgradeNow";
    }(tt || (tt = {})), function(e) {
        e.InstallVpnClient = "install_vpn_client", e.UpdateExtension = "update_extension", 
        e.UpdateVpnClient = "update_vpn_client", e.ReinstallVpnClient = "reinstall_vpn_client", 
        e.ReinstallBrowser = "reinstall_browser", e.Offline = "offline", e.VpnClientError = "vpn_client_error";
    }(nt || (nt = {}));
    const ct = d("spc");
    class lt {
        constructor() {
            h(this, "_secureBrowserApi", void 0);
        }
        static getSecureBrowserApi() {
            let e;
            return "SecureVpn" === w.brand ? e = chrome.avg : "SecureLine" === w.brand && (e = chrome.avast), 
            e;
        }
        init() {
            ct("Spc.init()");
            const e = this.verifyBrowserApiAvailability();
            le.dispatch(et.setBrowserApiAvailability(e)), e && (this._secureBrowserApi = lt.getSecureBrowserApi(), 
            this._secureBrowserApi.onExtensionCall.addListener(this.onExtensionCall.bind(this)));
        }
        updateSpcState(e = !0) {
            const t = le.getState().spc, n = {
                active: t.active,
                location: t.location ? t.location.spcVpnLocation : null,
                locations: null,
                expires_in: t.expiresIn,
                error: t.error
            };
            void 0 === n.expires_in && delete n.expires_in, n.error || delete n.error, e ? n.locations = t.locations.map(e => e.spcVpnLocation) : delete n.locations, 
            ct("Vpn.updateSpcState(): Sending state %O", n), this._secureBrowserApi.browserCall("spc", "state", n);
        }
        verifyBrowserApiAvailability() {
            let e = !1;
            const t = e => `ERROR: ${e} is not defined`;
            let n, r;
            return "SecureVpn" === w.brand ? (n = chrome.avg, r = "chrome.avg") : "SecureLine" === w.brand && (n = chrome.avast, 
            r = "chrome.avast"), "object" != typeof n ? ct(t(r)) : "function" != typeof n.browserCall ? ct(t(r + ".browserCall")) : "object" != typeof n.onExtensionCall ? ct(t(r + ".onExtensionCall")) : "function" != typeof n.onExtensionCall.addListener ? ct(t(r + ".onExtensionCall.addListener")) : "SecureLine" === w.brand && "function" != typeof n.checkAVInstalled ? ct(t(r + ".checkAVInstalled")) : e = !0, 
            e;
        }
        onExtensionCall(e, t, n) {
            if (ct("Vpn.onExtensionCall(): caller = %O, method = %O, args = %O", e, t, n), "spc" !== e.browserPartId) return;
            const r = le.getState();
            switch (t) {
              case tt.SetState:
                if (n.active) le.dispatch(Je.connect()); else {
                    const e = r.vpn.vpnStatus;
                    e !== M.Connecting && e !== M.Connected && e !== M.Reconnecting || le.dispatch(Je.disconnect());
                }
                if (n.location) {
                    const e = n.location.name;
                    ct("SPC selected new location: %s", e);
                    const t = r.spc.locations.find(t => t.spcVpnLocation.name === e);
                    if (!t) throw new Error(`Gateway ${e} not found.`);
                    {
                        const e = r.vpn.gateways.find(e => e.id === t.id);
                        if (!e) throw new Error(`Gateway with id ${e.id} not found.`);
                        le.dispatch(et.setSelectedGatewayId(e.id)), le.dispatch(Je.gatewaySelected(e));
                    }
                }
                break;

              case tt.GetState:
                this.updateSpcState(n.with_locations);
                break;

              case tt.UpgradeNow:
                le.dispatch(Je.showLicenseUpgradePage());
            }
        }
    }
    const dt = {
        active: !1,
        error: null,
        expiresIn: null,
        isBrowserApiAvailable: !1,
        location: null,
        locations: [],
        optimalLocation: null,
        selectedGatewayId: ""
    }, ut = [], pt = new class {
        constructor() {
            h(this, "extensionInitialized", void 0), h(this, "onInstalledDetails", void 0), 
            this.extensionInitialized = !1, chrome.runtime.onInstalled.addListener(this.handleInstalled.bind(this));
        }
        init() {
            this.extensionInitialized = !0, this.onInstalledDetails && this.dispatchInstalled(this.onInstalledDetails);
        }
        handleInstalled(e) {
            this.extensionInitialized ? this.dispatchInstalled(e) : this.onInstalledDetails = e;
        }
        dispatchInstalled(e) {
            switch (e.reason) {
              case "install":
                le.dispatch(S());
                break;

              case "update":
                le.dispatch(E(e.previousVersion));
            }
            this.onInstalledDetails = null;
        }
    }(), gt = {
        [C.Startup]() {
            pt.init();
        },
        [C.GetState](e, t, n) {
            n.meta && n.meta.callback && n.meta.callback({
                state: t()
            });
        }
    }, ft = d("avastOne");
    class ht {
        static async showUpgradeNowPage(e) {
            const t = ht.createAvastOneGetUrlParametersRequestMessage(343);
            ft("AvastOne.getIpmUrl(). Sending request: %O", t);
            const n = await ht.sendRequest(t);
            if (!n || n.error || !n.data) return !1;
            const r = n.data + "&p_scr=ASB_" + e, a = ht.createAvastOneShowStoreWindowRequestMessage(r);
            return ft("AvastOne.showUpgradeNowPage(). Sending request: %O", a), await ht.sendRequest(a), 
            !0;
        }
        static createAvastOneGetUrlParametersRequestMessage(e) {
            return {
                action: Q.GetIpmUrl,
                x_nm_args: e
            };
        }
        static createAvastOneShowStoreWindowRequestMessage(e) {
            return {
                action: Q.ShowStoreWindow,
                url: e
            };
        }
        static sendNativeMessageAsync(e) {
            return new Promise((t, n) => {
                chrome.runtime.sendNativeMessage(T.AvastOne, e, function(e) {
                    chrome.runtime.lastError ? n(new te(`chrome.runtime.sendNativeMessage failed. Error: ${chrome.runtime.lastError.message}`)) : (ft("chrome.runtime.sendNativeMessage received response: %o.", e), 
                    t(e));
                });
            });
        }
        static async sendRequest(e) {
            let t = null;
            try {
                t = await ht.sendNativeMessageAsync(e);
            } catch (e) {
                chrome.runtime.lastError ? ft("No connection to Avast One. Runtime last error: %O", chrome.runtime.lastError) : ft("No connection to Avast One. Error: %O", e);
            }
            return t;
        }
    }
    const vt = "https://ip-info.ff.avast.com/v2/info", yt = d("dashboard");
    async function mt() {
        const e = await fetch(vt);
        if (yt("GeoIp service response status = %d", e.status), e.ok) {
            const t = (await e.json()).ip;
            return yt("Public IP: %s", t), t;
        }
        throw new Error("GeoIp response failed. Offline(?)");
    }
    class wt {
        constructor(e, t) {
            h(this, "_major", void 0), h(this, "_minor", void 0), this._major = e, this._minor = t;
        }
        get major() {
            return this._major;
        }
        get minor() {
            return this._minor;
        }
        toString() {
            return this.major + "." + this.minor;
        }
        compare(e) {
            return e ? this.major > e.major ? 1 : this.major === e.major ? this.minor > e.minor ? 1 : this.minor === e.minor ? 0 : -1 : -1 : 1;
        }
    }
    const bt = d("nativeMessagingClient");
    class Ct {
        constructor() {
            h(this, "_port", void 0), h(this, "_disconnectedHandler", void 0), this._port = null, 
            this._disconnectedHandler = null;
        }
        connect(e, t, n) {
            bt("Connecting to %s", e), this._disconnectedHandler = n, this._port = chrome.runtime.connectNative(e), 
            this._port.onMessage.addListener(t), this._port.onDisconnect.addListener(this.disconnectedHandlerInner.bind(this));
        }
        postMessage(e) {
            if (!this._port) throw new te("Native Messaging client port is not opened.");
            this._port.postMessage(e);
        }
        disconnectedHandlerInner(e) {
            let t;
            bt("Native messaging port disconnected"), chrome.runtime.lastError && (bt("NM port onDisconnect error: %O", chrome.runtime.lastError), 
            chrome.runtime.lastError.message && (bt("NM port onDisconnect error message: %s", chrome.runtime.lastError.message), 
            t = chrome.runtime.lastError.message)), this._disconnectedHandler(t), this._port = null;
        }
    }
    const St = d("vpnNativeMessagingClient");
    class At {
        constructor() {
            h(this, "_nativeMessagingClient", void 0), this._nativeMessagingClient = new Ct(), 
            this._nativeMessagingClient.connect(T[w.brand], this.onNativeMessagingMessage.bind(this), this.onNativeMessagingDisconnected.bind(this));
        }
        setLanguage() {
            const e = {
                action: "SecureLine" === w.brand ? U.SetLanguage : G.SetLanguage,
                languageTag: ue(),
                countryTag: ue()
            };
            St("VpnNativeMessagingClient.setLanguage() will post message %O", e), this._nativeMessagingClient.postMessage(e);
        }
        requestOptimalGateway() {
            this.postAction(ie());
        }
        requestVpnState() {
            const e = R.VpnStatus | R.Gateways | R.LicenseInfo | R.ActiveGateway | R.LastError | R.PublicIpInfo | R.ConnectionInfo;
            this.postAction(ae(), e);
        }
        onNativeMessagingMessage(e) {
            St("VpnNativeMessagingClient.onNativeMessagingMessage(): message = %O", e), chrome.runtime.lastError && St("onNativeMessagingMessage() error: %O", chrome.runtime.lastError);
            const t = new wt(1, 5);
            switch (e.action) {
              case ie():
                if (e.data) le.dispatch(Je.optimalGatewayUpdated(e.data)); else {
                    e.error && St("WARNING: GetOptimalGateway response contains error: %O", e.error);
                    const t = {
                        city: {
                            name: ""
                        },
                        country: {
                            id: "",
                            name: ""
                        },
                        id: Ze
                    };
                    le.dispatch(Je.optimalGatewayUpdated(t));
                }
                break;

              case "Vpn_OnStateChanged_SvcNm":
                if (le.getState().vpn.vpnClientApiVersion.compare(t) >= 0) break;

              case "SecureLine" === w.brand ? U.OnStateChanged : G.OnStateChanged:
              case ae():
                if (e.data) {
                    const t = e.action === ae() ? e.data : e.data.data;
                    t.activeGateway && le.dispatch(Je.activeGatewayUpdated(t.activeGateway)), t.gateways && le.dispatch(Je.gatewaysUpdated(t.gateways)), 
                    t.lastError && le.dispatch(Je.lastErrorUpdated(t.lastError)), t.licenseInfo && le.dispatch(Je.licenseInfoUpdated(t.licenseInfo)), 
                    t.vpnStatus && le.dispatch(Je.statusUpdated(t.vpnStatus)), t.publicIpInfo && le.dispatch(Je.publicIpInfoUpdated(t.publicIpInfo)), 
                    t.connectionInfo && le.dispatch(Je.connectionInfoUpdated(t.connectionInfo));
                } else e.error && (St("ERROR: GetState/OnStateChanged response is error: %O", e.error), 
                le.dispatch(Je.vpnApiReturnedError(e.error)));
                break;

              case "Vpn_OnErrorOccurred_SvcNm":
                if (le.getState().vpn.vpnClientApiVersion.compare(t) >= 0) break;

              case "SecureLine" === w.brand ? U.OnErrorOccurred : G.OnErrorOccurred:
                e.data ? le.dispatch(Je.errorOccurred(e.data)) : e.error && (St("ERROR: OnErrorOccurred message is error: %O", e.error), 
                le.dispatch(Je.vpnApiReturnedError(e.error)));
            }
        }
        onNativeMessagingDisconnected(e) {
            St("VpnNativeMessagingClient.onNativeMessagingDisconnected(): Native Messaging host disconnected"), 
            "Native host has exited." === e && le.dispatch(Je.setNativeMessagingHostFound(!1));
        }
        postAction(e, t) {
            const n = {
                action: e,
                itemMask: t
            };
            St("VpnNativeMessagingClient.postAction() will post message %O", n), this._nativeMessagingClient.postMessage(n);
        }
    }
    const Et = d("vpn"), It = {
        Connected: de("extension_icon_overlay_text_connected"),
        Connecting: de("extension_icon_overlay_text_connecting"),
        Disconnected: de("extension_icon_overlay_text_disconnected"),
        Disconnecting: de("extension_icon_overlay_text_disconnecting"),
        Reconnecting: de("extension_icon_overlay_text_reconnecting")
    };
    class xt {
        constructor() {
            h(this, "_vpnNativeMessagingClient", void 0);
        }
        static async connect() {
            let e;
            e = le.getState().vpn.selectedGateway.id === Ze ? xt.createConnectToOptimalRequestMessage() : xt.createConnectRequestMessage(), 
            await xt.sendRequest(e);
        }
        static async disconnect() {
            const e = xt.createDisconnectRequestMessage();
            await xt.sendRequest(e);
        }
        static updateIcon(e) {
            let t = "img/icon19-active.png", n = "";
            switch (e) {
              case M.Connecting:
                n = It.Connecting;
                break;

              case M.Reconnecting:
                n = It.Reconnecting;
                break;

              case M.Connected:
                n = It.Connected;
                break;

              case M.Disconnecting:
                n = It.Disconnecting, t = "img/icon19.png";
                break;

              case M.Disconnected:
              default:
                n = It.Disconnected, t = "img/icon19.png";
            }
            chrome.browserAction.setIcon({
                path: t
            }, () => {
                chrome.runtime.lastError && Et("chrome.browserAction.setIcon failed with error %O", chrome.runtime.lastError);
            }), chrome.browserAction.setTitle({
                title: n
            }, () => {
                chrome.runtime.lastError && Et("chrome.browserAction.setTitle failed with error %O", chrome.runtime.lastError);
            });
        }
        static async checkVpnClientConnectivity() {
            try {
                const e = await xt.fetchVpnClientApiVersion();
                e && le.dispatch(Je.vpnClientApiVersionUpdated(e));
            } catch (e) {
                le.dispatch(Je.setNativeMessagingHostFound(!1));
            }
        }
        static async checkVpnClientEdition() {
            try {
                const e = await xt.fetchVpnEdition();
                le.dispatch(Je.vpnClientApiEditionUpdated(e));
            } catch (e) {
                le.dispatch(Je.setNativeMessagingHostFound(!1));
            }
        }
        static async fetchPublicIpAddress() {
            let e = "";
            try {
                e = await mt();
            } catch (e) {
                Et("Retrieving current public IP address failed. Error: %O", e);
            }
            le.dispatch(Je.ipAddressChanged(e));
        }
        static async showNag(e) {
            const t = xt.createShowNagRequestMessage(e);
            Et("Vpn.showNag(). Sending request: %O", t), await xt.sendRequest(t);
        }
        static createGetApiVersionRequestMessage() {
            return {
                action: re(),
                clientApiVersion: xt.ClientApiVersion.toString()
            };
        }
        static createGetProductInfoRequestMessage() {
            return {
                action: oe()
            };
        }
        static createConnectRequestMessage() {
            return {
                action: "SecureLine" === w.brand ? U.Connect : G.Connect,
                location: {
                    gatewayId: le.getState().vpn.selectedGateway.id
                }
            };
        }
        static createConnectToOptimalRequestMessage() {
            return {
                action: "SecureLine" === w.brand ? U.ConnectToOptimal : G.ConnectToOptimal
            };
        }
        static createDisconnectRequestMessage() {
            return {
                action: "SecureLine" === w.brand ? U.Disconnect : G.Disconnect
            };
        }
        static createShowNagRequestMessage(e) {
            return {
                action: "SecureLine" === w.brand ? U.ShowNag : G.ShowNag,
                elementId: e,
                extraUrlParameters: {
                    p_scr: "vpnbrowser"
                }
            };
        }
        static sendNativeMessageAsync(e) {
            return new Promise((t, n) => {
                chrome.runtime.sendNativeMessage(T[w.brand], e, function(e) {
                    chrome.runtime.lastError ? (Et("chrome.runtime.sendNativeMessage failed with error: %O", chrome.runtime.lastError), 
                    "Specified native messaging host not found." === chrome.runtime.lastError.message ? n(new ee()) : n(new te(`chrome.runtime.sendNativeMessage failed. Error: ${chrome.runtime.lastError.message}`))) : (Et("chrome.runtime.sendNativeMessage received response: %o.", e), 
                    t(e));
                });
            });
        }
        static extractApiVersion(e) {
            const t = e.publicApiVersion;
            if (!t) throw new ne("Missing value for property publicApiVersion.");
            const [n, r] = t.split(".").map(e => parseInt(e, 10));
            if (isNaN(n)) throw new ne("Failed to parse Major part of VPN Client's public API version.");
            if (isNaN(r)) throw new ne("Failed to parse Minor part of VPN Client's public API version.");
            return new wt(n, r);
        }
        static async fetchVpnClientApiVersion() {
            const e = xt.createGetApiVersionRequestMessage(), t = await xt.sendRequest(e);
            if ("object" != typeof (n = t) || n.action !== re() || !function(e) {
                return "object" == typeof e && "string" == typeof e.publicApiVersion;
            }(n.data)) throw new ne("object is not IGetApiVersionResponse");
            var n;
            return xt.extractApiVersion(t.data);
        }
        static async fetchVpnEdition() {
            const e = xt.createGetProductInfoRequestMessage(), t = await xt.sendRequest(e);
            if ("object" != typeof (n = t) || n.action !== oe() || !function(e) {
                return "object" == typeof e && "number" == typeof e.edition && "string" == typeof e.hardwareId && "string" == typeof e.version;
            }(n.data)) throw new ne("object is not IGetApiVersionResponse");
            var n;
            return t.data.edition;
        }
        static async sendRequest(e) {
            let t = null;
            try {
                t = await xt.sendNativeMessageAsync(e);
            } catch (e) {
                Et("Sending request to VPN client failed. Error: %O", e), le.dispatch(Je.setNativeMessagingHostFound(!1));
            }
            return t;
        }
        async init() {
            window.addEventListener("online", this.handleNetworkConnectivityChange.bind(this)), 
            window.addEventListener("offline", this.handleNetworkConnectivityChange.bind(this)), 
            await this.handleNetworkConnectivityChange();
        }
        async fetchInitData() {
            try {
                this._vpnNativeMessagingClient = new At(), this._vpnNativeMessagingClient.setLanguage(), 
                this._vpnNativeMessagingClient.requestVpnState(), this._vpnNativeMessagingClient.requestOptimalGateway();
            } catch (e) {
                Et("Failed to fetch initial data. Error: %O", e), le.dispatch(Je.setNativeMessagingHostFound(!1));
            }
        }
        async handleNetworkConnectivityChange() {
            const e = navigator.onLine;
            Et("Network connectivity: %s", e ? "online" : "offline"), le.dispatch(Je.handleNetworkConnectivityChange(e));
        }
    }
    h(xt, "ClientApiVersion", new wt(1, 5));
    const Ot = d("vpn");
    function Vt(e) {
        const t = {};
        return t[C.Startup] = (() => {
            e.init();
        }), t[Ye.Connect] = (() => {
            xt.connect();
        }), t[Ye.Disconnect] = (() => {
            xt.disconnect();
        }), t[Ye.ShowLicenseUpgradePage] = (async (e, t) => {
            const n = t().vpn.vpnClientApiVersion;
            t().vpn.isAvastOne && await ht.showUpgradeNowPage(function(e) {
                const t = e.licenseInfo;
                return t ? function(e, t) {
                    let n = $.VpnGeneric;
                    return e.status === D.Valid && (n = e.dataCap && e.dataCap.usedBytes >= e.dataCap.limitBytes ? $.VpnExpired : t === M.Connected ? $.VpnOn : $.VpnOff), 
                    n;
                }(t, e.vpnStatus) : $.VpnGeneric;
            }(t().vpn)) ? Ot("VpnActionTypes.ShowLicenseUpgradePage Avast One API available") : t().vpn.isAvastOne || n.compare(new wt(1, 5)) < 0 ? function(e) {
                chrome.tabs.create({
                    url: e
                });
            }(q[w.brand]) : xt.showNag(Qe);
        }), t[Ye.VpnStatusUpdated] = (async (e, t) => {
            Ot("Generated function for action: VpnActionTypes.VpnStatusUpdated");
            const n = t().vpn.vpnStatus;
            xt.updateIcon(n);
            const r = t().vpn.isReconnectingToAnotherGateway;
            if (r && (n === M.Disconnected ? (Ot("Reconnecting to another gateway: Connecting..."), 
            await xt.connect()) : n === M.Connected && le.dispatch(Je.updateReconnectingToAnotherGatewayStatus(!1))), 
            n === M.Connected || n === M.Disconnected && !r) {
                let e = "";
                try {
                    e = await mt();
                } catch (e) {
                    Ot("Retrieving current public IP address failed. Error: %O", e);
                }
                le.dispatch(Je.ipAddressChanged(e));
            }
        }), t[Ye.OptimalGatewayUpdated] = ((e, t) => {
            const n = t().vpn.optimalGateway, r = t().vpn.selectedGateway;
            n && !r && (Ot("Selecting optimal gateway: %s", n.id), le.dispatch(Je.gatewaySelected(n)));
        }), t[Ye.ActiveGatewayUpdated] = ((e, t) => {
            const n = t().vpn.activeGateway, r = t().vpn.selectedGateway;
            if (n && n.id) {
                if (r && r.id === n.id) return;
                Ot("Selecting active gateway: %s", n.id), le.dispatch(Je.gatewaySelected(n));
            }
        }), t[Ye.SelectGateway] = (async (e, t) => {
            const n = t().vpn.vpnStatus;
            n !== M.Connected && n !== M.Connecting || (le.dispatch(Je.updateReconnectingToAnotherGatewayStatus(!0)), 
            Ot("Reconnecting to another gateway: Disconnecting..."), await xt.disconnect());
        }), t[Ye.HandleNetworkConnectivityChange] = (async (e, t) => {
            t().vpn.isConnectedToNetwork ? (await xt.fetchPublicIpAddress(), t().vpn.isInitialized || (await xt.checkVpnClientConnectivity(), 
            await xt.checkVpnClientEdition(), le.dispatch(Je.setIsInitialized(!0)))) : xt.updateIcon(M.Disconnected);
        }), t[Ye.ErrorOccurred] = ((e, t) => {
            const n = t().vpn.errorInfo;
            n ? Ot("Error occurred. Source: %s. Code: %s", n.source, n.code) : Ot("Error cleared.");
        }), t[Ye.VpnApiReturnedError] = ((e, t) => {
            const n = t().vpn.vpnApiError;
            n ? Ot("VPN API returned error: %O", n) : Ot("VPN API error cleared.");
        }), t[Ye.VpnClientApiVersionUpdated] = ((e, t) => {
            const n = t().vpn.vpnClientApiVersion;
            let r;
            Ot("Vpn Client API Version: %d.%d", n.major, n.minor), r = n.major === xt.ClientApiVersion.major ? z.Compatible : n.major <= xt.ClientApiVersion.major ? z.VpnClientOld : z.ExtensionOld, 
            le.dispatch(Je.apiCompatibilityResolved(r));
        }), t[Ye.VpnClientApiEditionUpdated] = ((e, t) => {
            const n = t().vpn.vpnClientApiEdition;
            Ot("Vpn Client API Edition: %d", n), le.dispatch(Je.setIsAvastOne(n === K.AvastOne));
        }), t[Ye.ApiCompatibilityResolved] = (async (t, n) => {
            if (n().vpn.apiCompatibility === z.Compatible) try {
                await e.fetchInitData();
            } catch (e) {
                Ot("fetchInitData() failed. Error %O", e), le.dispatch(Je.setNativeMessagingHostFound(!1));
            }
        }), t;
    }
    function Nt(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case Ye.VpnClientApiVersionUpdated:
            return ye(e, {
                vpnClientApiVersion: t.value
            });

          case Ye.VpnClientApiEditionUpdated:
            return ye(e, {
                vpnClientApiEdition: t.value
            });

          case Ye.ApiCompatibilityResolved:
            return ye(e, {
                apiCompatibility: t.value
            });

          case Ye.OptimalGatewayUpdated:
            {
                const n = t.value, r = n && n.id === Ze, a = void 0 !== e.gateways.find(e => e.id === Ze);
                if (r && !a) {
                    let r = [];
                    return r.push(n), ye(e, {
                        gateways: r = r.concat(e.gateways),
                        optimalGateway: t.value
                    });
                }
                return ye(e, {
                    optimalGateway: t.value
                });
            }

          case Ye.ActiveGatewayUpdated:
            return ye(e, {
                activeGateway: t.value
            });

          case Ye.GatewaysUpdated:
            {
                let n = [];
                const r = e.optimalGateway;
                return r && r.id === Ze && n.push(r), ye(e, {
                    gateways: n = n.concat(t.value)
                });
            }

          case Ye.LastErrorUpdated:
            return ye(e, {
                lastError: t.value
            });

          case Ye.ErrorOccurred:
            return ye(e, {
                errorInfo: t.value
            });

          case Ye.VpnApiReturnedError:
            return ye(e, {
                vpnApiError: t.value
            });

          case Ye.LicenseInfoUpdated:
            return ye(e, {
                licenseInfo: t.value
            });

          case Ye.PublicIpInfoUpdated:
            return ye(e, {
                publicIpInfo: t.value
            });

          case Ye.ConnectionInfoUpdated:
            return ye(e, {
                connectionInfo: t.value
            });

          case Ye.VpnStatusUpdated:
            return ye(e, {
                vpnStatus: t.value
            });

          case Ye.SelectGateway:
            return ye(e, {
                selectedGateway: t.value
            });

          case Ye.IpAddressChanged:
            return ye(e, {
                ipAddress: t.value
            });

          case Ye.ReconnectingToAnotherGatewayStatusChanged:
            return ye(e, {
                isReconnectingToAnotherGateway: t.value
            });

          case Ye.HandleNetworkConnectivityChange:
            return ye(e, {
                isConnectedToNetwork: t.value
            });

          case Ye.SetNativeMessagingHostFound:
            return ye(e, {
                isNativeMessagingHostFound: t.value
            });

          case Ye.SetIsAvastOne:
            return ye(e, {
                isAvastOne: t.value
            });

          case Ye.SetIsInitialized:
            return ye(e, {
                isInitialized: t.value
            });

          case Ye.LastActivePageUpdated:
            return ye(e, {
                lastActivePage: t.value
            });
        }
        return e;
    }
    const kt = {
        apiCompatibility: null,
        optimalGateway: null,
        activeGateway: null,
        gateways: [],
        lastError: null,
        errorInfo: null,
        vpnApiError: null,
        licenseInfo: null,
        vpnStatus: null,
        selectedGateway: null,
        ipAddress: "",
        isInitialized: !1,
        isReconnectingToAnotherGateway: !1,
        isConnectedToNetwork: !1,
        isNativeMessagingHostFound: !0,
        vpnClientApiVersion: null,
        vpnClientApiEdition: null,
        isAvastOne: !1,
        publicIpInfo: null,
        connectionInfo: null,
        lastActivePage: k.None
    }, Pt = [], _t = d("management");
    function Lt(e) {
        return new Promise(t => {
            chrome.management.setEnabled(e, !1, () => {
                chrome.runtime.lastError ? _t("could not disable extension %s: %s", e, chrome.runtime.lastError) : _t("extension %s disabled", e), 
                t();
            });
        });
    }
    let Ut;
    !function(e) {
        e.IsSupportedChange = "webrtc.isSupportedChange", e.IsAvailableChange = "webrtc.isAvailableChange", 
        e.IsEnabledChange = "webrtc.isEnabledChange", e.Toggle = "webrtc.toggle", e.DisableConflictingExtensions = "webrtc.disableConflictingExtensions";
    }(Ut || (Ut = {}));
    const Gt = {
        disableConflictingExtensions: () => u(Ut.DisableConflictingExtensions),
        isAvailableChange: e => u(Ut.IsAvailableChange, e),
        isEnabledChange: e => u(Ut.IsEnabledChange, e),
        isSupportedChange: e => u(Ut.IsSupportedChange, e),
        toggle: () => u(Ut.Toggle)
    };
    function Rt(e, t) {
        switch (e = void 0 === e ? {} : e, t.type) {
          case Ut.IsSupportedChange:
            return ye(e, {
                isSupported: t.value
            });

          case Ut.IsEnabledChange:
            return ye(e, {
                isEnabled: t.value
            });

          case Ut.IsAvailableChange:
            return ye(e, {
                isAvailable: t.value
            });
        }
        return e;
    }
    const Mt = {
        isSupported: null,
        isAvailable: null,
        isEnabled: null
    }, Ft = [];
    let Dt, Tt;
    !function(e) {
        e.Controllable = "controllable_by_this_extension", e.Controlled = "controlled_by_this_extension";
    }(Dt || (Dt = {})), function(e) {
        e.DisableNonProxiedUdp = "disable_non_proxied_udp", e.Default = "default";
    }(Tt || (Tt = {}));
    const jt = d("webRtc");
    class Ht {
        constructor(e = !1) {
            h(this, "enableByDefault", void 0), h(this, "webRtcIpHandlingPolicy", void 0), this.enableByDefault = e, 
            chrome.privacy && chrome.privacy.network && (this.webRtcIpHandlingPolicy = chrome.privacy.network.webRTCIPHandlingPolicy);
        }
        init() {
            jt("initializing");
            const e = !!this.webRtcIpHandlingPolicy;
            le.dispatch(Gt.isSupportedChange(e)), e && (this.webRtcIpHandlingPolicy.get({}, this.handleConfig), 
            this.webRtcIpHandlingPolicy.onChange && this.webRtcIpHandlingPolicy.onChange.addListener(this.handleConfig));
        }
        installed() {
            const e = le.getState();
            this.enableByDefault && !e.webRtc.isEnabled && (jt("enabling by default"), this.toggle());
        }
        toggle() {
            const e = le.getState();
            if (!e.webRtc.isSupported) return;
            const t = e.webRtc.isEnabled ? Tt.Default : Tt.DisableNonProxiedUdp;
            this.webRtcIpHandlingPolicy.set({
                value: t,
                scope: "regular"
            }, () => {
                this.webRtcIpHandlingPolicy.onChange || this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
            });
        }
        refreshSettings() {
            this.webRtcIpHandlingPolicy && this.webRtcIpHandlingPolicy.get({}, this.handleConfig);
        }
        handleConfig(e) {
            jt("handling settings change: %O", e);
            const t = le.getState(), n = function(e) {
                return e.levelOfControl === Dt.Controlled || e.levelOfControl === Dt.Controllable;
            }(e);
            n !== t.webRtc.isAvailable && le.dispatch(Gt.isAvailableChange(n));
            const r = function(e) {
                return e.levelOfControl === Dt.Controlled;
            }(e), a = e.value === Tt.DisableNonProxiedUdp, i = r && a;
            i !== t.webRtc.isEnabled && le.dispatch(Gt.isEnabledChange(i));
        }
    }
    function Bt() {
        const e = new ve(), t = new xt(), n = new Ht(), r = {
            [Ke.Analytics]: me,
            [Ke.Vpn]: Nt,
            [Ke.WebRtc]: Rt
        }, a = {
            [Ke.Analytics]: be,
            [Ke.Vpn]: kt,
            [Ke.WebRtc]: Mt
        }, i = {
            [Ke.Analytics]: Ce,
            [Ke.Vpn]: Pt,
            [Ke.WebRtc]: Ft
        }, o = [ gt, function(e) {
            const t = {};
            return t[C.Startup] = (() => {
                e.init();
            }), t[C.Installed] = (() => {
                e.trackEvent(I.Lifecycle, x.Installation, w.extensionVersion), e.refreshClientCountryCode();
            }), t[C.Updated] = (() => {
                e.trackEvent(I.Lifecycle, x.Update, w.extensionVersion);
            }), t[b.ConfigReceived] = (() => {
                e.initOrRemoveTrackers();
            }), t[p.StateChange] = ((t, n, r) => {
                r.value === g.Disconnected && e.refreshClientCountryCode();
            }), t[X.TrackEvent] = ((t, n, r) => {
                e.trackEvent(r.value.category, r.value.action, r.value.label, r.value.value);
            }), t[X.TrackView] = ((t, n, r) => {
                e.trackView(r.value);
            }), t[X.AsbTrack] = ((t, n, r) => {
                const a = function(e) {
                    switch (n().vpn.lastActivePage) {
                      case k.FreeDataAvailable:
                        return {
                            category: L.Upsell,
                            page: _.FreeDataAvailablePage
                        };

                      case k.FreeDataNotUsed:
                        return {
                            category: L.Upsell,
                            page: _.FreeDataNotUsedPage
                        };

                      case k.FreeDataUsed:
                        return {
                            category: L.Upsell,
                            page: _.FreeDataUsedPage
                        };

                      case k.Paid:
                        return {
                            category: L.Paid,
                            page: _.PaidPage
                        };

                      case k.Offline:
                        return {
                            category: L.OfflineError,
                            page: _.ErrorPage
                        };

                      case k.General:
                        return {
                            category: L.GeneralError,
                            page: _.ErrorPage
                        };

                      case k.UpdateBrowser:
                        return {
                            category: L.UpdateBrowserError,
                            page: _.ErrorPage
                        };

                      case k.InstallApp:
                        return {
                            category: L.InstallAppError,
                            page: _.ErrorPage
                        };

                      case k.Loading:
                        return {
                            category: L.LoadingError,
                            page: _.ErrorPage
                        };

                      case k.UpdateExtension:
                        return {
                            category: L.UpdateExtensionError,
                            page: _.ErrorPage
                        };

                      case k.UpdateApp:
                        return {
                            category: L.UpdateAppError,
                            page: _.ErrorPage
                        };

                      case k.LicenseStatusNotValid:
                        return {
                            category: L.LicenseStatusNotValidError,
                            page: _.ErrorPage
                        };

                      case k.Reinstall:
                        return {
                            category: L.ReinstallError,
                            page: _.ErrorPage
                        };

                      case k.Restart:
                        return {
                            category: L.RestartError,
                            page: _.ErrorPage
                        };
                    }
                    return {
                        category: L.None,
                        page: _.None
                    };
                }(), i = n().vpn.vpnClientApiEdition, o = {
                    event_action: r.value.action,
                    event_category: a.category,
                    event_value: i ? i.toString() : "",
                    "group.extension.id": w.extensionId,
                    "group.extension.version": w.extensionVersion,
                    "group.page.page_name": a.page,
                    page_domain: "vpn-extension",
                    page_location: "secure://vpn-extension"
                };
                ce("Action: ", r.value.type ? "Click" : "Page", o), e.asbTrack(r.value.type, o);
            }), t;
        }(e), Vt(t), function(e) {
            const t = {};
            return t[C.Startup] = (() => {
                e.init();
            }), t[C.Installed] = (() => {
                e.installed();
            }), t[Ut.Toggle] = (() => {
                e.toggle();
            }), t[Ut.DisableConflictingExtensions] = (async () => {
                await async function(e) {
                    _t("going to disable all extensions with %s permission", e);
                    const t = await new Promise(e => {
                        chrome.management.getAll(t => {
                            e(t);
                        });
                    });
                    for (const n of t) n.id !== chrome.runtime.id && n.enabled && n.permissions && n.permissions.includes(e) && (_t("trying to disable extension: %s / %s", n.name, n.id), 
                    await Lt(n.id));
                }("privacy"), e.refreshSettings();
            }), t;
        }(n) ];
        if (function() {
            let e;
            return "SecureVpn" === w.brand ? e = chrome.avg : "SecureLine" === w.brand && (e = chrome.avast), 
            !!e;
        }()) {
            const e = new lt();
            r[Ke.Spc] = rt, a[Ke.Spc] = dt, i[Ke.Spc] = ut, o.push(function(e) {
                const t = {};
                function n() {
                    e.updateSpcState();
                }
                return t[C.Startup] = (() => {
                    e.init();
                }), t[Ye.VpnStatusUpdated] = n, t[Ye.OptimalGatewayUpdated] = n, t[Ye.HandleNetworkConnectivityChange] = n, 
                t[Ye.GatewaysUpdated] = n, t[Ye.LicenseInfoUpdated] = n, t[Ye.SetNativeMessagingHostFound] = n, 
                t[Ye.ApiCompatibilityResolved] = n, t[Ye.ErrorOccurred] = n, t[Ye.VpnApiReturnedError] = n, 
                t[Ye.SetIsAvastOne] = n, t[Ye.SelectGateway] = ((e, t) => {
                    t().spc.location.id !== t().spc.selectedGatewayId && n();
                }), t;
            }(e));
        }
        return {
            reducers: r,
            initialState: a,
            persistedPaths: i,
            generators: o
        };
    }
    return async function(e) {
        await We.init();
        const {reducers: t, generators: n, initialState: r, persistedPaths: a} = e(We), i = new Ne(We, a), o = i.load();
        o && ($e("persisted state: %O", o), Object.keys(o).forEach(e => {
            r[e] && o[e] && ("function" == typeof r[e] ? r[e] = r[e](o[e]) : r[e] = {
                ...r[e],
                ...o[e]
            });
        })), Object.keys(r).forEach(e => {
            "function" == typeof r[e] && (r[e] = r[e]());
        }), $e("initial state: %O", r);
        const s = function(e, t, n, r) {
            const a = t.map(e => (function(e) {
                return function(t) {
                    const n = t.dispatch, r = t.getState;
                    return function(t) {
                        return function(a) {
                            const i = t(a), o = e[a.type];
                            return o && o.call(e, n, r, a), i;
                        };
                    };
                };
            })(e)).concat([ Be(ze), qe.enabled && He({
                diff: !0,
                predicate: (e, t) => (t.type || console.error("unknown action type", t), !t.type.includes("getState")),
                collapsed: () => !0,
                duration: !0,
                timestamp: !0
            }), r && r.buildMiddleware() ]).filter(e => e);
            return Ue(function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var a = t[r];
                    "function" == typeof e[a] && (n[a] = e[a]);
                }
                var i = Object.keys(n), o = void 0;
                try {
                    !function(e) {
                        Object.keys(e).forEach(function(t) {
                            var n = e[t];
                            if (void 0 === n(void 0, {
                                type: Pe.INIT
                            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                            if (void 0 === n(void 0, {
                                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + Pe.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
                        });
                    }(n);
                } catch (e) {
                    o = e;
                }
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
                    if (o) throw o;
                    for (var r = !1, a = {}, s = 0; s < i.length; s++) {
                        var c = i[s], l = n[c], d = e[c], u = l(d, t);
                        if (void 0 === u) {
                            var p = Ge(c, t);
                            throw new Error(p);
                        }
                        a[c] = u, r = r || u !== d;
                    }
                    return r ? a : e;
                };
            }(e), n, function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        var i = e.apply(void 0, r), o = function() {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                        }, s = {
                            getState: i.getState,
                            dispatch: function() {
                                return o.apply(void 0, arguments);
                            }
                        }, c = t.map(function(e) {
                            return e(s);
                        });
                        return o = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return 0 === t.length ? function(e) {
                                return e;
                            } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
                                return function() {
                                    return e(t.apply(void 0, arguments));
                                };
                            });
                        }.apply(void 0, c)(i.dispatch), Le({}, i, {
                            dispatch: o
                        });
                    };
                };
            }.apply(null, a));
        }(t, n, r, i);
        le.setStore(s), le.dispatch(A()), chrome.runtime.onMessage.addListener(function(e, t, n) {
            if (e.type) return le.dispatch({
                ...e,
                meta: {
                    sender: t,
                    callback: n
                }
            }), void 0 !== n;
        });
    }(Bt), e.bootstrap = Bt, e;
}({});
