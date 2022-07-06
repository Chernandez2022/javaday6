!function() {
    "use strict";
    let t, e, n, r, i, o, a, s, c, l, d, u, p, f, v;
    var h, m;
    let g, _, y;
    function C(t, e) {
        return void 0 === e ? {
            type: t
        } : {
            type: t,
            value: e
        };
    }
    !function(t) {
        t.Connect = "public.AvastSecureLine.Connect", t.ConnectToOptimal = "public.AvastSecureLine.ConnectToOptimal", 
        t.Disconnect = "public.AvastSecureLine.Disconnect", t.GetApiVersion = "public.AvastSecureLine.GetApiVersion", 
        t.GetOptimalGateway = "public.AvastSecureLine.GetOptimalGateway", t.GetState = "public.AvastSecureLine.GetState", 
        t.OnErrorOccurred = "public.AvastSecureLine.OnErrorOccurred", t.OnStateChanged = "public.AvastSecureLine.OnStateChanged", 
        t.SetLanguage = "public.AvastSecureLine.SetLanguage", t.ShowNag = "public.AvastSecureLine.Ui.ShowNag", 
        t.GetProductInfo = "public.AvastSecureLine.GetProductInfo";
    }(t || (t = {})), function(t) {
        t.Connect = "public.AVGSecureVPN.Connect", t.ConnectToOptimal = "public.AVGSecureVPN.ConnectToOptimal", 
        t.Disconnect = "public.AVGSecureVPN.Disconnect", t.GetApiVersion = "public.AVGSecureVPN.GetApiVersion", 
        t.GetOptimalGateway = "public.AVGSecureVPN.GetOptimalGateway", t.GetState = "public.AVGSecureVPN.GetState", 
        t.OnErrorOccurred = "public.AVGSecureVPN.OnErrorOccurred", t.OnStateChanged = "public.AVGSecureVPN.OnStateChanged", 
        t.SetLanguage = "public.AVGSecureVPN.SetLanguage", t.ShowNag = "public.AVGSecureVPN.Ui.ShowNag", 
        t.GetProductInfo = "public.AVGSecureVPN.GetProductInfo";
    }(e || (e = {})), function(t) {
        t[t.VpnStatus = 1] = "VpnStatus", t[t.Gateways = 2] = "Gateways", t[t.LicenseInfo = 4] = "LicenseInfo", 
        t[t.ActiveGateway = 8] = "ActiveGateway", t[t.LastError = 32] = "LastError", t[t.PublicIpInfo = 256] = "PublicIpInfo", 
        t[t.ConnectionInfo = 512] = "ConnectionInfo";
    }(n || (n = {})), function(t) {
        t.Connected = "connected", t.Connecting = "connecting", t.Reconnecting = "reconnecting", 
        t.Disconnected = "disconnected", t.Disconnecting = "disconnecting", t.Error = "error", 
        t.Initializing = "initializing";
    }(r || (r = {})), function(t) {
        t.Trial = "trial", t.Subscription = "subscription", t.Free = "free";
    }(i || (i = {})), function(t) {
        t.Valid = "valid", t.Expired = "expired", t.NoSubscription = "noSubscription", t.NoLicenseFile = "noLicenseFile", 
        t.Banned = "banned";
    }(o || (o = {})), function(t) {
        t.SecureVpn = "com.avg.vpn", t.SecureLine = "com.avast.vpn", t.AvastOne = "com.avast.nativeproxy";
    }(a || (a = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/how-to-install", t.SecureLine = "https://extension.avastbrowser.com/vpn/how-to-install";
    }(s || (s = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/download", t.SecureLine = "https://extension.avastbrowser.com/vpn/download";
    }(c || (c = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/about", t.SecureLine = "https://extension.avastbrowser.com/vpn/about";
    }(l || (l = {})), function(t) {
        t.SecureVpn = "https://extension.avgbrowser.com/vpn/offer", t.SecureLine = "https://extension.avastbrowser.com/vpn/offer";
    }(d || (d = {})), function(t) {
        t.Compatible = "Compatible", t.ExtensionOld = "ExtensionOld", t.VpnClientOld = "VpnClientOld";
    }(u || (u = {})), function(t) {
        t.SetState = "setState", t.GetState = "getState", t.UpgradeNow = "upgradeNow";
    }(p || (p = {})), function(t) {
        t.VpnOn = "VPN_on", t.VpnOff = "VPN_off", t.VpnExpired = "VPN_expired", t.VpnGeneric = "VPN";
    }(f || (f = {})), function(t) {
        t[t.Consumer = 1] = "Consumer", t[t.OemHp = 2] = "OemHp", t[t.OemAsus = 3] = "OemAsus", 
        t[t.OemAcer = 4] = "OemAcer", t[t.OemLenovo = 5] = "OemLenovo", t[t.OemSamsung = 6] = "OemSamsung", 
        t[t.Business = 8] = "Business", t[t.AvastOne = 9] = "AvastOne";
    }(v || (v = {})), function(t) {
        t.Connection = "connection";
    }(h || (h = {})), function(t) {
        t.LicenseRefused = "licenseRefused", t.NoInternetConnection = "noInternetConnection", 
        t.LicenseExpired = "licenseExpired", t.ConnectionLimitReached = "connectionLimitReached", 
        t.DataLimitReached = "dataLimitReached", t.VpnNameBanned = "vpnNameBanned", t.PlatformNotAllowed = "platformNotAllowed", 
        t.LicenseBanned = "licenseBanned", t.AuthorizationFailed = "authorizationFailed", 
        t.LocationNotAllowed = "locationNotAllowed", t.InternalError = "internalError", 
        t.MissingMandatoryParameters = "missingMandatoryParameters", t.NoLicenseInAccount = "noLicenseInAccount";
    }(m || (m = {})), function(t) {
        t.Exception = "exception";
    }(g || (g = {})), function(t) {
        t.GetIpmUrl = "app.utils.GetUrlParameters", t.ShowStoreWindow = "app.windowManager.ShowStoreWindow";
    }(_ || (_ = {})), function(t) {
        t.ClientCountryCodeChange = "analytics.clientCountryCodeChange", t.HeartbeatTracked = "analytics.heartbeatTracked", 
        t.TrackEvent = "analytics.trackEvent", t.TrackView = "analytics.trackView", t.AsbTrack = "analytics.asbTrack";
    }(y || (y = {}));
    const b = (t, e) => C(y.AsbTrack, {
        type: t,
        action: e
    });
    let w, S, A, I, k, O, x, F, E;
    !function(t) {
        t.Lifecycle = "Lifecycle", t.Notification = "Notification";
    }(w || (w = {})), function(t) {
        t.Installation = "Installation", t.Heartbeat = "Heartbeat", t.Update = "Update", 
        t.Click = "Click";
    }(S || (S = {})), function(t) {
        t.WholeNotification = "Whole Notification", t.Close = "Close", t.MoreStartFreeDownload = "More: Start Free Download", 
        t.MoreNextTime = "More: Next time";
    }(A || (A = {})), function(t) {
        t.Notification = "Notification";
    }(I || (I = {})), function(t) {
        t[t.Page = 0] = "Page", t[t.Click = 1] = "Click";
    }(k || (k = {})), function(t) {
        t[t.None = 0] = "None", t[t.FreeDataNotUsed = 1] = "FreeDataNotUsed", t[t.FreeDataAvailable = 2] = "FreeDataAvailable", 
        t[t.FreeDataUsed = 3] = "FreeDataUsed", t[t.Paid = 4] = "Paid", t[t.Offline = 5] = "Offline", 
        t[t.General = 6] = "General", t[t.UpdateBrowser = 7] = "UpdateBrowser", t[t.InstallApp = 8] = "InstallApp", 
        t[t.Loading = 9] = "Loading", t[t.UpdateExtension = 10] = "UpdateExtension", t[t.UpdateApp = 11] = "UpdateApp", 
        t[t.LicenseStatusNotValid = 12] = "LicenseStatusNotValid", t[t.Reinstall = 13] = "Reinstall", 
        t[t.Restart = 14] = "Restart";
    }(O || (O = {})), function(t) {
        t.None = "", t.Cta = "cta", t.Close = "close", t.On = "on", t.Off = "off";
    }(x || (x = {})), function(t) {
        t.None = "3999", t.FreeDataNotUsedPage = "3700", t.FreeDataAvailablePage = "3701", 
        t.FreeDataUsedPage = "3702", t.PaidPage = "3703", t.ErrorPage = "3704";
    }(F || (F = {})), function(t) {
        t.None = "", t.Upsell = "upsell", t.Paid = "", t.OfflineError = "offline-error", 
        t.GeneralError = "general-error", t.UpdateBrowserError = "update-browser-error", 
        t.InstallAppError = "install-app-error", t.LoadingError = "loading-error", t.UpdateExtensionError = "update-extension-error", 
        t.UpdateAppError = "update-app-error", t.LicenseStatusNotValidError = "license-status-not-valid-error", 
        t.ReinstallError = "reinstall-error", t.RestartError = "restart-error";
    }(E || (E = {}));
    var $ = 1e3, L = 6e4, R = 36e5, B = 24 * R, P = function(t, e) {
        e = e || {};
        var n, r, i = typeof t;
        if ("string" === i && t.length > 0) return function(t) {
            if (!((t = String(t)).length > 100)) {
                var e = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
                if (e) {
                    var n = parseFloat(e[1]);
                    switch ((e[2] || "ms").toLowerCase()) {
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
                        return n * B;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * R;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * L;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * $;

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
        }(t);
        if ("number" === i && !1 === isNaN(t)) return e.long ? (n = t, (r = Math.abs(n)) >= B ? N(n, r, B, "day") : r >= R ? N(n, r, R, "hour") : r >= L ? N(n, r, L, "minute") : r >= $ ? N(n, r, $, "second") : n + " ms") : function(t) {
            var e = Math.abs(t);
            return e >= B ? Math.round(t / B) + "d" : e >= R ? Math.round(t / R) + "h" : e >= L ? Math.round(t / L) + "m" : e >= $ ? Math.round(t / $) + "s" : t + "ms";
        }(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function N(t, e, n, r) {
        var i = e >= 1.5 * n;
        return Math.round(t / n) + " " + r + (i ? "s" : "");
    }
    var T, D = (function(t, e) {
        e.log = function(...t) {
            return "object" == typeof console && console.log && console.log(...t);
        }, e.formatArgs = function(e) {
            if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), 
            !this.useColors) return;
            const n = "color: " + this.color;
            e.splice(1, 0, n, "color: inherit");
            let r = 0, i = 0;
            e[0].replace(/%[a-zA-Z%]/g, t => {
                "%%" !== t && (r++, "%c" === t && (i = r));
            }), e.splice(i, 0, n);
        }, e.save = function(t) {
            try {
                t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
        }, e.load = function() {
            let t;
            try {
                t = e.storage.getItem("debug");
            } catch (t) {}
            return !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG), 
            t;
        }, e.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, e.storage = function() {
            try {
                return localStorage;
            } catch (t) {}
        }(), e.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        t.exports = function(t) {
            function e(t) {
                let e = 0;
                for (let n = 0; n < t.length; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
                return n.colors[Math.abs(e) % n.colors.length];
            }
            function n(t) {
                let o;
                function a(...t) {
                    if (!a.enabled) return;
                    const e = a, r = Number(new Date()), i = r - (o || r);
                    e.diff = i, e.prev = o, e.curr = r, o = r, t[0] = n.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                    let s = 0;
                    t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, i) => {
                        if ("%%" === r) return r;
                        s++;
                        const o = n.formatters[i];
                        if ("function" == typeof o) {
                            const n = t[s];
                            r = o.call(e, n), t.splice(s, 1), s--;
                        }
                        return r;
                    }), n.formatArgs.call(e, t), (e.log || n.log).apply(e, t);
                }
                return a.namespace = t, a.enabled = n.enabled(t), a.useColors = n.useColors(), a.color = e(t), 
                a.destroy = r, a.extend = i, "function" == typeof n.init && n.init(a), n.instances.push(a), 
                a;
            }
            function r() {
                const t = n.instances.indexOf(this);
                return -1 !== t && (n.instances.splice(t, 1), !0);
            }
            function i(t, e) {
                return n(this.namespace + (void 0 === e ? ":" : e) + t);
            }
            function o(t) {
                return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return n.debug = n, n.default = n, n.coerce = function(t) {
                return t instanceof Error ? t.stack || t.message : t;
            }, n.disable = function() {
                const t = [ ...n.names.map(o), ...n.skips.map(o).map(t => "-" + t) ].join(",");
                return n.enable(""), t;
            }, n.enable = function(t) {
                let e;
                n.save(t), n.names = [], n.skips = [];
                const r = ("string" == typeof t ? t : "").split(/[\s,]+/), i = r.length;
                for (e = 0; e < i; e++) r[e] && ("-" === (t = r[e].replace(/\*/g, ".*?"))[0] ? n.skips.push(new RegExp("^" + t.substr(1) + "$")) : n.names.push(new RegExp("^" + t + "$")));
                for (e = 0; e < n.instances.length; e++) {
                    const t = n.instances[e];
                    t.enabled = n.enabled(t.namespace);
                }
            }, n.enabled = function(t) {
                if ("*" === t[t.length - 1]) return !0;
                let e, r;
                for (e = 0, r = n.skips.length; e < r; e++) if (n.skips[e].test(t)) return !1;
                for (e = 0, r = n.names.length; e < r; e++) if (n.names[e].test(t)) return !0;
                return !1;
            }, n.humanize = P, Object.keys(t).forEach(e => {
                n[e] = t[e];
            }), n.instances = [], n.names = [], n.skips = [], n.formatters = {}, n.selectColor = e, 
            n.enable(n.load()), n;
        }(e);
        const {formatters: n} = t.exports;
        n.j = function(t) {
            try {
                return JSON.stringify(t);
            } catch (t) {
                return "[UnexpectedJSONParseError]: " + t.message;
            }
        };
    }(T = {
        exports: {}
    }, T.exports), T.exports);
    D.log, D.formatArgs, D.save, D.load, D.useColors, D.storage, D.colors;
    const V = D("messages");
    function U(t, e) {
        V("sending message to background, action: %O", t), chrome.runtime.sendMessage(t, function(n) {
            e && e(n), chrome.runtime.lastError && V("sendActionToBg for %s generated error", t.type, chrome.runtime.lastError);
        });
    }
    let j;
    !function(t) {
        t.ApiCompatibilityResolved = "vpn.apiCompatibilityResolved", t.ActiveGatewayUpdated = "vpn.activeGatewayUpdated", 
        t.GatewaysUpdated = "vpn.gatewaysUpdated", t.LastErrorUpdated = "vpn.lastErrorUpdated", 
        t.ErrorOccurred = "vpn.ErrorOccurred", t.VpnApiReturnedError = "vpn.VpnApiReturnedError", 
        t.LicenseInfoUpdated = "vpn.licenseInfoUpdated", t.VpnStatusUpdated = "vpn.vpnStatusUpdated", 
        t.Connect = "vpn.connect", t.Disconnect = "vpn.disconnect", t.OptimalGatewayUpdated = "vpn.optimalGatewayUpdated", 
        t.SelectGateway = "vpn.selectGateway", t.IpAddressChanged = "vpn.ipAddressChanged", 
        t.ReconnectingToAnotherGatewayStatusChanged = "vpn.reconnectingToAnotherGatewayStatusChanged", 
        t.HandleNetworkConnectivityChange = "vpn.handleNetworkConnectivityChange", t.SetBrowserApiAvailability = "vpn.setBrowserApiAvailability", 
        t.SetIsInitialized = "vpn.setIsInitialized", t.SetNativeMessagingHostFound = "vpn.setNativeMessagingHostFound", 
        t.VpnClientApiVersionUpdated = "vpn.VpnClientApiVersionUpdated", t.ShowLicenseUpgradePage = "vpn.showLicenseUpgradePage", 
        t.VpnClientApiEditionUpdated = "vpn.VpnClientApiEditionUpdated", t.SetIsAvastOne = "vpn.setIsAvastOne", 
        t.PublicIpInfoUpdated = "vpn.publicIpInfoUpdated", t.ConnectionInfoUpdated = "vpn.connectionInfoUpdated", 
        t.LastActivePageUpdated = "vpn.lastActivePageUpdated";
    }(j || (j = {}));
    const M = () => C(j.Connect), G = () => C(j.ShowLicenseUpgradePage), H = t => C(j.LastActivePageUpdated, t), z = {
        methods: {
            onBtnClicked() {
                U(G()), U(b(k.Click, x.Cta));
            }
        }
    };
    var W = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "promotion-items"
        }, [ n("div", {
            staticClass: "connection-status-promotion-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("connection_status_limit_reached_promotion_text")) + "\n\t") ]), t._v(" "), n("img", {
            staticClass: "connection-status-item-img",
            attrs: {
                src: "/img/eye.svg"
            }
        }), t._v(" "), n("div", {
            staticClass: "connection-status-item-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("connection_status_limit_reached_promotion_list_item_1")) + "\n\t") ]), t._v(" "), n("img", {
            staticClass: "connection-status-item-img",
            attrs: {
                src: "/img/lock.svg"
            }
        }), t._v(" "), n("div", {
            staticClass: "connection-status-item-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("connection_status_limit_reached_promotion_list_item_2")) + "\n\t") ]), t._v(" "), n("img", {
            staticClass: "connection-status-item-img",
            attrs: {
                src: "/img/fingerprint.svg"
            }
        }), t._v(" "), n("div", {
            staticClass: "connection-status-item-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("connection_status_limit_reached_promotion_list_item_3")) + "\n\t") ]), t._v(" "), n("button", {
            staticClass: "connection-status-button",
            on: {
                click: t.onBtnClicked
            }
        }, [ t._v("\n\t\t" + t._s(t.translate("promotion_button")) + "\n\t") ]) ]);
    };
    W._withStripped = !0;
    const q = {
        components: {
            Promotion: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof z ? z.options : z) || {};
                return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/components/Promotion.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: W,
                staticRenderFns: []
            })
        },
        props: {
            titleStrId: String,
            descriptionStrId: String,
            promotion: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            getTitleText() {
                return this.translate(this.titleStrId);
            },
            getDescriptionText() {
                return this.translate(this.descriptionStrId);
            }
        }
    };
    var K = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "connection-status"
        }, [ t.getTitleText ? n("div", {
            staticClass: "connection-status-title",
            domProps: {
                innerHTML: t._s(t.getTitleText)
            }
        }) : t._e(), t._v(" "), t.getDescriptionText ? n("div", {
            staticClass: "connection-status-description",
            domProps: {
                innerHTML: t._s(t.getDescriptionText)
            }
        }) : t._e(), t._v(" "), t.promotion ? n("promotion") : t._e() ], 1);
    };
    K._withStripped = !0;
    var J = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof q ? q.options : q) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/components/Status.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: K,
        staticRenderFns: []
    });
    const X = {
        props: {
            actionClass: String
        }
    };
    var Z = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            attrs: {
                id: "toggle-container"
            }
        }, [ n("div", {
            class: t.actionClass,
            attrs: {
                id: "toggle"
            },
            on: {
                click: function(e) {
                    t.$emit("toggle-clicked");
                }
            }
        }, [ n("span", {
            attrs: {
                id: "toggle-hover"
            }
        }), t._v(" "), t._m(0) ]) ]);
    };
    Z._withStripped = !0;
    var Y = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof X ? X.options : X) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/components/Toggle.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Z,
        staticRenderFns: [ function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", {
                attrs: {
                    id: "bar"
                }
            }, [ e("span", {
                attrs: {
                    id: "knob"
                }
            }) ]);
        } ]
    });
    const Q = {
        components: {
            Status: J,
            Toggle: Y
        },
        props: {
            errorStrId: String,
            errorItems: Array,
            buttonStrId: String,
            hideButton: Boolean
        },
        methods: {
            getErrorText() {
                return this.translate(this.errorStrId);
            },
            getButtonText() {
                return this.translate(this.buttonStrId);
            }
        }
    };
    var tt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "error-wrapper"
        }, [ n("div", {
            staticClass: "secure-connection"
        }, [ t._v("\n\t\t" + t._s(t.translate("secure_connection")) + "\n\t") ]), t._v(" "), n("status", {
            attrs: {
                "title-str-id": "connection_status_disconnected_title"
            }
        }), t._v(" "), t.errorItems ? t._l(t.errorItems, function(e, r) {
            return n("div", {
                key: r,
                staticClass: "error-notification-text"
            }, [ t._v("\n\t\t" + t._s(t.translate(e.errorStrId)) + "\n\t\t"), n("a", {
                staticClass: "error-notification-link",
                attrs: {
                    target: "_blank",
                    href: e.link
                }
            }, [ t._v("\n\t\t\t" + t._s(t.translate(e.linkStrId)) + "\n\t\t") ]) ]);
        }) : n("div", {
            staticClass: "error-notification-text"
        }, [ t._v("\n\t\t" + t._s(t.getErrorText()) + "\n\t") ]), t._v(" "), t.hideButton ? n("toggle", {
            attrs: {
                "action-class": "disabled"
            }
        }) : n("button", {
            staticClass: "ripple",
            attrs: {
                id: "error-notification-button"
            },
            on: {
                click: function(e) {
                    t.$emit("error-button-clicked");
                }
            }
        }, [ t._v("\n\t\t" + t._s(t.getButtonText()) + "\n\t") ]) ], 2);
    };
    tt._withStripped = !0;
    var et = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Q ? Q.options : Q) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/components/Error.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: tt,
        staticRenderFns: []
    });
    const nt = {
        components: {
            Error: et
        },
        props: {
            isAvastOne: Boolean
        },
        computed: {
            activateStrId() {
                return this.isAvastOne ? "activate_vpn_product_avast_one" : "activate_vpn_product";
            }
        },
        methods: {
            onBtnClicked() {
                U(G()), U(b(k.Click, x.Cta));
            }
        }
    };
    var rt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": this.activateStrId,
                "hide-button": !1,
                "button-str-id": "learn_more"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    rt._withStripped = !0;
    var it = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof nt ? nt.options : nt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/ActivateVpnLicenseBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: rt,
        staticRenderFns: []
    });
    const ot = {
        props: {
            gateway: Object,
            isOptimal: Boolean,
            isSelected: Boolean
        },
        data() {
            return {
                showDropdown: !1,
                selectedGateway: this.gateway
            };
        },
        computed: {
            gatewayDisplayName() {
                return this.gateway.city.name + ", " + this.gateway.country.name;
            },
            selectedGatewayFlag() {
                return "/img/flags/" + this.gateway.country.id + ".svg";
            }
        }
    };
    var at = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "location-item"
        }, [ n("div", {
            staticClass: "location-flag-container"
        }, [ n("img", {
            staticClass: "location-flag",
            attrs: {
                src: t.selectedGatewayFlag
            }
        }), t._v(" "), t.isSelected ? n("span", {
            staticClass: "selected"
        }) : t._e() ]), t._v(" "), n("div", {
            staticClass: "location-data"
        }, [ n("div", {
            staticClass: "location-country-city-pair"
        }, [ t._v("\n\t\t\t" + t._s(t.gatewayDisplayName) + "\n\t\t") ]), t._v(" "), t.isOptimal ? n("div", {
            staticClass: "location-optimal-text"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("fastest_location")) + "\n\t\t") ]) : t._e() ]), t._v(" "), n("img", {
            staticClass: "location-arrow-right",
            attrs: {
                src: "/img/arrowRight.svg"
            }
        }) ]);
    };
    at._withStripped = !0;
    var st = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof ot ? ot.options : ot) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/LocationItem.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: at,
        staticRenderFns: []
    });
    const ct = D("vpn-dashboard-location-menu"), lt = {
        components: {
            LocationItem: st
        },
        props: {
            bgState: Object
        },
        data() {
            return {
                selectedGateway: this.bgState.vpn.selectedGateway,
                optimalGateway: this.bgState.vpn.optimalGateway
            };
        },
        computed: {
            gateways() {
                return this.bgState.vpn.gateways;
            },
            filteredGateways() {
                return ct(this.bgState), this.bgState.vpn.gateways.filter(t => "optimal_unknown" !== t.id);
            }
        },
        methods: {
            goBack() {
                this.$emit("toggleLocationsList");
            },
            onLocationItemClicked(t) {
                ct("onLocationItemClicked %O", t), U((t => C(j.SelectGateway, t))(t)), U(M()), this.goBack();
            }
        }
    };
    var dt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "locations-list"
        }, [ n("div", {
            staticClass: "locations-list-select"
        }, [ n("img", {
            staticClass: "locations-list-arrow-left",
            attrs: {
                src: "/img/arrowLeft.svg"
            },
            on: {
                click: t.goBack
            }
        }), t._v(" "), n("div", {
            staticClass: "locations-list-select-location-msg"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("select_location")) + "\n\t\t") ]) ]), t._v(" "), n("div", {
            staticClass: "locations-container"
        }, [ n("div", {
            staticClass: "locations"
        }, [ n("location-item", {
            attrs: {
                gateway: t.optimalGateway,
                "is-optimal": !0,
                "is-selected": t.optimalGateway.id === t.selectedGateway.id
            },
            nativeOn: {
                click: function(e) {
                    t.onLocationItemClicked(t.gateway);
                }
            }
        }), t._v(" "), t._l(t.gateways, function(e) {
            return n("location-item", {
                key: e.id,
                attrs: {
                    gateway: e,
                    "is-optimal": !1,
                    "is-selected": e.id === t.selectedGateway.id
                },
                nativeOn: {
                    click: function(n) {
                        t.onLocationItemClicked(e);
                    }
                }
            });
        }) ], 2) ]) ]);
    };
    dt._withStripped = !0;
    const ut = {
        components: {
            LocationItem: st,
            LocationsList: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof lt ? lt.options : lt) || {};
                return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/LocationsList.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: dt,
                staticRenderFns: []
            })
        },
        props: {
            bgState: Object,
            connected: Boolean
        },
        data: () => ({
            showLocationsList: !1
        }),
        computed: {
            gateway() {
                return this.bgState.vpn.selectedGateway;
            },
            isOptimal() {
                return this.bgState.vpn.selectedGateway.id === this.bgState.vpn.optimalGateway.id;
            }
        },
        methods: {
            toggleLocationsList() {
                this.showLocationsList = !this.showLocationsList;
            }
        }
    };
    var pt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "test"
        }, [ n("div", {
            staticClass: "location-selected"
        }, [ t.connected ? n("div", {
            staticClass: "location-your-location-text"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("your_location_connected")) + "\n\t\t") ]) : n("div", {
            staticClass: "location-your-location-text"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("your_location_disconnected")) + "\n\t\t") ]), t._v(" "), n("location-item", {
            attrs: {
                gateway: t.gateway,
                "is-optimal": t.isOptimal,
                "is-selected": !0
            },
            nativeOn: {
                click: function(e) {
                    return t.toggleLocationsList(e);
                }
            }
        }) ], 1), t._v(" "), n("locations-list", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showLocationsList,
                expression: "showLocationsList"
            } ],
            attrs: {
                "bg-state": t.bgState
            },
            on: {
                toggleLocationsList: t.toggleLocationsList
            }
        }) ], 1);
    };
    pt._withStripped = !0;
    var ft = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof ut ? ut.options : ut) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/LocationSelected.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: pt,
        staticRenderFns: []
    });
    const vt = {
        components: {
            Toggle: Y
        },
        props: {
            bgState: Object,
            disabled: Boolean
        },
        computed: {
            status() {
                return this.bgState.vpn.vpnStatus;
            },
            isConnected() {
                return this.bgState.vpn.vpnStatus === r.Connected;
            },
            isConnecting() {
                return this.bgState.vpn.vpnStatus === r.Connecting || this.bgState.vpn.isReconnectingToAnotherGateway || this.bgState.vpn.vpnStatus === r.Reconnecting;
            },
            isDisconnecting() {
                return this.bgState.vpn.vpnStatus === r.Disconnecting;
            },
            actionClass() {
                return this.disabled ? "disabled" : this.isConnected ? "checked" : this.isConnecting ? "connecting" : this.isDisconnecting ? "disconnecting" : "";
            }
        },
        methods: {
            onConnectToggleClicked() {
                if (this.disabled) return;
                let t = x.None;
                switch (this.status) {
                  case r.Disconnected:
                    U(M()), t = x.On;
                    break;

                  case r.Connected:
                    U((() => C(j.Disconnect))()), t = x.Off;
                }
                t !== x.None && U(b(k.Click, t));
            }
        }
    };
    var ht = function() {
        var t = this.$createElement;
        return (this._self._c || t)("toggle", {
            attrs: {
                "action-class": this.actionClass
            },
            on: {
                "toggle-clicked": this.onConnectToggleClicked
            }
        });
    };
    ht._withStripped = !0;
    var mt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof vt ? vt.options : vt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/ConnectionToggle.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: ht,
        staticRenderFns: []
    });
    const gt = {
        components: {
            Status: J
        },
        props: {
            bgState: Object,
            isConnected: Boolean,
            isDisabled: Boolean,
            isNotUsed: Boolean,
            hasLimitReached: Boolean
        }
    };
    var _t = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "connection-status-container"
        }, [ e("div", {
            staticClass: "secure-connection"
        }, [ this._v("\n\t\t" + this._s(this.translate("secure_connection")) + "\n\t") ]), this._v(" "), this.isConnected ? e("status", {
            attrs: {
                "title-str-id": "connection_status_connected_title",
                "description-str-id": "connection_status_connected_text"
            }
        }) : this.isNotUsed ? e("status", {
            attrs: {
                "title-str-id": "connection_status_disconnected_free_title",
                "description-str-id": "connection_status_disconnected_free_text"
            }
        }) : this.hasLimitReached ? e("status", {
            attrs: {
                "title-str-id": "connection_status_limit_reached_title",
                "description-str-id": "connection_status_limit_reached_text",
                promotion: !0
            }
        }) : e("status", {
            attrs: {
                "title-str-id": "connection_status_disconnected_title",
                "description-str-id": "connection_status_disconnected_text"
            }
        }) ], 1);
    };
    _t._withStripped = !0;
    var yt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof gt ? gt.options : gt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/ConnectionStatus.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: _t,
        staticRenderFns: []
    });
    const Ct = {
        props: {
            licenseInfo: Object
        },
        computed: {
            hasDataCap() {
                return this.licenseInfo && this.licenseInfo.dataCap;
            },
            renewIn() {
                if (!this.hasDataCap || "number" != typeof this.licenseInfo.dataCap.limitRenewalPeriod || "number" != typeof this.licenseInfo.creationTimestamp) return;
                const t = new Date(), e = 86400 * this.licenseInfo.dataCap.limitRenewalPeriod, n = (t.getTime() / 1e3 - this.licenseInfo.creationTimestamp) % e;
                return Math.round((e - n) / 86400);
            },
            blueBarStyle() {
                return this.hasDataCap && "number" == typeof this.licenseInfo.dataCap.usedBytes && "number" == typeof this.licenseInfo.dataCap.limitBytes ? (100 * this.licenseInfo.dataCap.usedBytes / this.licenseInfo.dataCap.limitBytes).toString() : 0;
            },
            dataLimit() {
                return this.hasDataCap && "number" == typeof this.licenseInfo.dataCap.limitBytes ? this.formatBytes(this.licenseInfo.dataCap.limitBytes) : 0;
            },
            dataUsed() {
                return this.hasDataCap && "number" == typeof this.licenseInfo.dataCap.usedBytes ? this.formatBytes(this.licenseInfo.dataCap.usedBytes) : 0;
            },
            dataAllowedText() {
                if (!this.hasDataCap || "number" != typeof this.licenseInfo.dataCap.limitRenewalPeriod) return "";
                const t = "free_data_allowed_" + this.period(this.licenseInfo.dataCap.limitRenewalPeriod);
                return this.translate(t, [ this.dataLimit ]);
            }
        },
        methods: {
            formatBytes(t) {
                if (0 === t) return "0 Bytes";
                const e = Math.floor(Math.log(t) / Math.log(1024));
                return parseFloat((t / Math.pow(1024, e)).toFixed(2)) + " " + [ "Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB" ][e];
            },
            period: t => parseInt(t / 360) > 0 ? "year" : parseInt(t / 30) > 0 ? "month" : parseInt(t / 7) > 0 ? "week" : "day"
        }
    };
    var bt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "free-data-container"
        }, [ n("div", {
            staticClass: "free-data-free-title"
        }, [ t._v("\n\t\t" + t._s(t.translate("free_data_free")) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "free-data-renew-in-title"
        }, [ t._v("\n\t\t" + t._s(t.translate("free_data_renew_in", [ t.renewIn ])) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "free-data-bar"
        }), t._v(" "), n("div", {
            staticClass: "free-data-bar-progress",
            style: {
                width: t.blueBarStyle + "%"
            }
        }), t._v(" "), n("div", {
            staticClass: "free-data-used-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("free_data_used", [ t.dataUsed ])) + "\n\t") ]), t._v(" "), n("div", {
            staticClass: "free-data-allowed-text"
        }, [ t._v("\n\t\t" + t._s(t.dataAllowedText) + "\n\t") ]) ]);
    };
    bt._withStripped = !0;
    var wt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Ct ? Ct.options : Ct) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/FreeData.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: bt,
        staticRenderFns: []
    });
    const St = {
        props: {
            connected: Boolean,
            publicIpInfo: Object,
            connectionInfo: Object
        },
        data: () => ({
            showFullInfo: !1
        }),
        computed: {
            ipAddress() {
                return this.publicIpInfo && this.publicIpInfo.original && this.publicIpInfo.original.ip ? this.publicIpInfo.original.ip : "";
            },
            virtualIp() {
                return this.publicIpInfo && this.publicIpInfo.current && this.publicIpInfo.current.ip ? this.publicIpInfo.current.ip : "";
            },
            timeConnected() {
                if (!this.connectionInfo || !this.connectionInfo.connectedTime) return "00:00:00";
                let t = new Date() - 1e3 * this.connectionInfo.connectedTime;
                return new Date(t).toISOString().substr(11, 8);
            },
            location() {
                return this.publicIpInfo && this.publicIpInfo.current ? this.publicIpInfo.current.country.name + ", " + this.publicIpInfo.current.city.name : "";
            }
        },
        methods: {
            toggleTooltip() {
                this.showFullInfo = !this.showFullInfo;
            }
        }
    };
    var At = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "ip-info-container"
        }, [ t.connected ? n("div", {
            staticClass: "ip-info-msg"
        }, [ t._v("\n\t\t" + t._s(t.translate("ip_info_connected")) + "\n\t\t"), n("img", {
            staticClass: "ip-info-image",
            attrs: {
                src: "/img/ipInfo.svg"
            },
            on: {
                mouseover: t.toggleTooltip,
                mouseleave: t.toggleTooltip
            }
        }) ]) : n("div", {
            staticClass: "ip-info-msg"
        }, [ t._v("\n\t\t" + t._s(t.translate("ip_info_disconnected")) + "\n\t") ]), t._v(" "), n("div", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showFullInfo,
                expression: "showFullInfo"
            } ],
            staticClass: "ip-full-info",
            on: {
                mouseover: function(e) {
                    t.showFullInfo = !0;
                },
                mouseleave: function(e) {
                    t.showFullInfo = !1;
                }
            }
        }, [ n("div", {
            staticClass: "ip-full-info-title"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("information")) + "\n\t\t") ]), t._v(" "), n("div", {
            staticClass: "ip-full-info-texts"
        }, [ t.ipAddress ? n("div", {
            staticClass: "ip-full-info-text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("ip_address", [ t.ipAddress ])) + "\n\t\t\t") ]) : t._e(), t._v(" "), t.virtualIp ? n("div", {
            staticClass: "ip-full-info-text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("virtual_ip", [ t.virtualIp ])) + "\n\t\t\t") ]) : t._e(), t._v(" "), t.timeConnected ? n("div", {
            staticClass: "ip-full-info-text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("time_connected", [ t.timeConnected ])) + "\n\t\t\t") ]) : t._e(), t._v(" "), t.location ? n("div", {
            staticClass: "ip-full-info-text"
        }, [ t._v("\n\t\t\t\t" + t._s(t.translate("location", [ t.location ])) + "\n\t\t\t") ]) : t._e() ]) ]) ]);
    };
    At._withStripped = !0;
    var It = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof St ? St.options : St) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/IpInfoBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: At,
        staticRenderFns: []
    });
    const kt = {
        methods: {
            onBtnClicked() {
                U(G()), U(b(k.Click, x.Cta));
            }
        }
    };
    var Ot = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "upgrade-promotion"
        }, [ n("img", {
            staticClass: "upgrade-promotion-img",
            attrs: {
                src: "/img/upgrade.svg"
            }
        }), t._v(" "), n("div", {
            staticClass: "upgrade-promotion-texts"
        }, [ n("div", {
            staticClass: "upgrade-promotion-title"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("promotion_title")) + "\n\t\t") ]), t._v(" "), n("div", {
            staticClass: "upgrade-promotion-text"
        }, [ t._v("\n\t\t\t" + t._s(t.translate("promotion_text")) + "\n\t\t") ]) ]), t._v(" "), n("button", {
            staticClass: "upgrade-promotion-button",
            on: {
                click: t.onBtnClicked
            }
        }, [ t._v("\n\t\t" + t._s(t.translate("promotion_button")) + "\n\t") ]) ]);
    };
    Ot._withStripped = !0;
    const xt = {
        components: {
            LocationSelected: ft,
            ConnectionToggle: mt,
            ConnectionStatus: yt,
            FreeData: wt,
            IpInfoBase: It,
            UpgradePromotion: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof kt ? kt.options : kt) || {};
                return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/UpgradePromotion.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: Ot,
                staticRenderFns: []
            })
        },
        props: {
            bgState: Object,
            isAvastOne: Boolean,
            isLoading: Boolean
        },
        computed: {
            isConnected() {
                return this.bgState.vpn.vpnStatus === r.Connected;
            },
            isDisabled() {
                return this.isLoading || this.bgState.vpn.vpnStatus === r.Initializing;
            },
            hasDataCap() {
                return this.bgState.vpn.licenseInfo && this.bgState.vpn.licenseInfo.dataCap;
            },
            licenseInfo() {
                return this.bgState.vpn.licenseInfo;
            },
            isNotUsed() {
                return !!this.hasDataCap && 0 === this.bgState.vpn.licenseInfo.dataCap.usedBytes;
            },
            hasLimitReached() {
                return !!this.hasDataCap && this.bgState.vpn.licenseInfo.dataCap.usedBytes >= this.bgState.vpn.licenseInfo.dataCap.limitBytes;
            },
            showBottomPromotion() {
                return this.isAvastOne && this.hasDataCap && !this.hasLimitReached;
            },
            showToggle() {
                return !this.hasLimitReached;
            },
            showLocations() {
                return !this.isLoading && !this.hasDataCap;
            },
            showFreeData() {
                return this.isAvastOne && this.hasDataCap && !this.isNotUsed && !this.hasLimitReached;
            },
            publicIpInfo() {
                return this.bgState.vpn.publicIpInfo;
            },
            connectionInfo() {
                return this.bgState.vpn.connectionInfo;
            },
            dashboardActivePage() {
                let t = O.None;
                return this.licenseInfo && this.licenseInfo.status === o.Valid && this.licenseInfo.type === i.Subscription ? t = O.Paid : this.isNotUsed ? t = O.FreeDataNotUsed : this.hasLimitReached ? t = O.FreeDataUsed : this.showFreeData && (t = O.FreeDataAvailable), 
                t !== O.None && t !== this.bgState.vpn.lastActivePage && this.notifyDashboardPageChange(t), 
                t;
            }
        },
        methods: {
            notifyDashboardPageChange(t) {
                U(H(t)), U(b(k.Page, x.None));
            }
        }
    };
    var Ft = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            staticClass: "wrapper",
            attrs: {
                page: t.dashboardActivePage
            }
        }, [ n("connection-status", {
            attrs: {
                "bg-state": t.bgState,
                "is-connected": t.isConnected,
                "is-disabled": t.isDisabled,
                "is-not-used": t.isNotUsed,
                "has-limit-reached": t.hasLimitReached
            }
        }), t._v(" "), n("connection-toggle", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showToggle,
                expression: "showToggle"
            } ],
            attrs: {
                "bg-state": t.bgState,
                disabled: t.isDisabled
            }
        }), t._v(" "), n("location-selected", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showLocations,
                expression: "showLocations"
            } ],
            attrs: {
                "bg-state": t.bgState,
                connected: t.isConnected
            }
        }), t._v(" "), n("IpInfoBase", {
            attrs: {
                connected: t.isConnected,
                "public-ip-info": t.publicIpInfo,
                "connection-info": t.connectionInfo
            }
        }), t._v(" "), n("free-data", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showFreeData,
                expression: "showFreeData"
            } ],
            attrs: {
                "license-info": t.licenseInfo
            }
        }), t._v(" "), n("upgrade-promotion", {
            directives: [ {
                name: "show",
                rawName: "v-show",
                value: t.showBottomPromotion,
                expression: "showBottomPromotion"
            } ]
        }) ], 1);
    };
    Ft._withStripped = !0;
    var Et = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof xt ? xt.options : xt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/DashboardBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Ft,
        staticRenderFns: []
    });
    const $t = {
        components: {
            Error: et
        },
        methods: {
            onBtnClicked() {
                U((t => C(j.ErrorOccurred, t))(null)), U((t => C(j.VpnApiReturnedError, t))(null)), 
                U(b(k.Click, x.Cta));
            }
        }
    };
    var Lt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": "something_is_not_right",
                "hide-button": !1,
                "button-str-id": "dismiss"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    Lt._withStripped = !0;
    var Rt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof $t ? $t.options : $t) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/ErrorBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Lt,
        staticRenderFns: []
    });
    const Bt = {
        props: {
            isShowDashboard: Boolean,
            isAvastOne: Boolean
        },
        computed: {
            vpnProductInfoLink: () => s[runtimeInfo.brand]
        },
        methods: {
            onCloseClick() {
                U(b(k.Click, x.Close)), window.close();
            }
        }
    };
    var Pt = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("header", {
            staticClass: "header"
        }, [ n("div", {
            class: {
                "header-product-image-a1": t.isAvastOne,
                "header-product-image": !t.isAvastOne
            }
        }), t._v(" "), t.isAvastOne ? t._e() : n("div", {
            staticClass: "header-product-name-text"
        }, [ t._v("\n\t\t" + t._s(t.translate("product_name")) + "\n\t") ]), t._v(" "), n("img", {
            staticClass: "header-close-image",
            attrs: {
                src: "/img/close.svg"
            },
            on: {
                click: t.onCloseClick
            }
        }) ]);
    };
    Pt._withStripped = !0;
    var Nt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Bt ? Bt.options : Bt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/HeaderBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Pt,
        staticRenderFns: []
    });
    function Tt(t) {
        chrome.tabs.create({
            url: t
        });
    }
    function Dt(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    const Vt = D("runtimeInfo");
    let Ut, jt;
    !function(t) {
        t.Win = "win", t.Mac = "mac", t.Unknown = "unknown";
    }(Ut || (Ut = {})), function(t) {
        t.Chrome = "chrome", t.Firefox = "firefox", t.Other = "other";
    }(jt || (jt = {}));
    const Mt = new class {
        constructor(t) {
            Dt(this, "_brand", void 0), Dt(this, "_extensionId", void 0), Dt(this, "_extensionVersion", void 0), 
            Dt(this, "_permissions", void 0), Dt(this, "_optionalPermissions", void 0), Dt(this, "_contentScriptPaths", void 0), 
            Dt(this, "_browser", void 0), Dt(this, "_name", void 0), Dt(this, "_shortName", void 0), 
            Dt(this, "_os", void 0), t.short_name || Vt("short_name not defined in manifest"), 
            this._brand = t.short_name, this._extensionId = chrome.i18n.getMessage("@@extension_id"), 
            this._extensionVersion = t.version, this._permissions = t.permissions, this._optionalPermissions = t.optional_permissions || [], 
            this._name = t.name, this._shortName = t.short_name, this._contentScriptPaths = this.extractPathsFromContentScripts(t.content_scripts), 
            navigator.userAgent.includes("Chrome") ? this._browser = jt.Chrome : navigator.userAgent.includes("Firefox") ? this._browser = jt.Firefox : this._browser = jt.Other, 
            Vt("extension version: %s", this._extensionVersion);
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
              case Ut.Mac:
              case Ut.Win:
                return this._os;

              default:
                return Ut.Unknown;
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
        handleGetPlatformInfo(t) {
            t && (this._os = t.os);
        }
        extractPathsFromContentScripts(t) {
            if (!t) return [];
            const e = t.reduce(function(t, e) {
                return e.js.forEach(e => {
                    const n = e.split("/");
                    t.add(n[n.length - 1]);
                }), t;
            }, new Set());
            return Array.from(e);
        }
    }(chrome.runtime.getManifest());
    chrome.runtime.getPlatformInfo(Mt.handleGetPlatformInfo.bind(Mt));
    const Gt = {
        components: {
            Error: et
        },
        props: {
            isAvast: Boolean
        },
        computed: {
            installVpnStrId: () => "SecureLine" === Mt.brand ? "install_vpn_product_avast_one" : "install_vpn_product"
        },
        methods: {
            onBtnClicked() {
                Tt(s[Mt.brand]), sendActionToBg(b(k.Click, x.Cta));
            }
        }
    };
    var Ht = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": this.installVpnStrId,
                "hide-button": !1,
                "button-str-id": "learn_more"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    Ht._withStripped = !0;
    var zt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Gt ? Gt.options : Gt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/InstallVpnClientBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Ht,
        staticRenderFns: []
    });
    const Wt = {
        components: {
            Error: et
        }
    };
    var qt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": "loading",
                "hide-button": !0
            }
        }) ], 1);
    };
    qt._withStripped = !0;
    var Kt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Wt ? Wt.options : Wt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/LoadingBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: qt,
        staticRenderFns: []
    });
    const Jt = {
        components: {
            Error: et
        }
    };
    var Xt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": "make_sure_your_internet_connection_works_properly",
                "hide-button": !0
            }
        }) ], 1);
    };
    Xt._withStripped = !0;
    var Zt = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Jt ? Jt.options : Jt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/OfflineBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Xt,
        staticRenderFns: []
    });
    const Yt = {
        components: {
            Error: et
        },
        props: {
            isAvastOne: Boolean
        },
        computed: {
            reinstallVpnProductHelpPageUrl: () => s[Mt.brand],
            reinstallBrowserHelpPageUrl: () => l[Mt.brand],
            reinstallVpnStrId() {
                return this.isAvastOne ? "please_try_reinstalling_vpn_product_avast_one" : "please_try_reinstalling_vpn_product";
            },
            errorItems() {
                return Array({
                    errorStrId: "something_is_not_right",
                    link: "",
                    linkStrId: ""
                }, {
                    errorStrId: this.reinstallVpnStrId,
                    link: this.reinstallVpnProductHelpPageUrl,
                    linkStrId: "see_how"
                }, {
                    errorStrId: "if_that_does_not_work_try_reinstalling_browser_product",
                    link: this.reinstallBrowserHelpPageUrl,
                    linkStrId: "see_how"
                });
            }
        }
    };
    var Qt = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-items": this.errorItems,
                "hide-button": !0
            }
        }) ], 1);
    };
    Qt._withStripped = !0;
    var te = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof Yt ? Yt.options : Yt) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/ReinstallBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: Qt,
        staticRenderFns: []
    });
    const ee = {
        components: {
            Error: et
        },
        props: {
            isAvastOne: Boolean
        },
        computed: {
            restartStrId() {
                return this.isAvastOne ? "something_not_right_please_restart_avast_one" : "something_not_right_please_restart";
            }
        }
    };
    var ne = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": this.restartStrId,
                "hide-button": !0
            }
        }) ], 1);
    };
    ne._withStripped = !0;
    var re = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof ee ? ee.options : ee) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/RestartBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: ne,
        staticRenderFns: []
    });
    const ie = {
        components: {
            Error: et
        },
        methods: {
            onBtnClicked() {
                Tt("secure://settings/help"), sendActionToBg(b(k.Click, x.Cta));
            }
        }
    };
    var oe = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": "update_browser_product_to_use_this_feature",
                "hide-button": !1,
                "button-str-id": "update_now"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    oe._withStripped = !0;
    var ae = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof ie ? ie.options : ie) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/UpdateBrowserBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: oe,
        staticRenderFns: []
    });
    const se = {
        components: {
            Error: et
        },
        methods: {
            onBtnClicked() {
                Tt(`secure://extensions/?id=${chrome.runtime.id}`), sendActionToBg(b(k.Click, x.Cta));
            }
        }
    };
    var ce = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": "you_need_to_update_your_vpn_product_extension",
                "hide-button": !1,
                "button-str-id": "update_now"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    ce._withStripped = !0;
    var le = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof se ? se.options : se) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/UpdateExtensionBase.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({
        render: ce,
        staticRenderFns: []
    });
    const de = {
        components: {
            Error: et
        },
        props: {
            isAvastOne: Boolean
        },
        computed: {
            updateVpnStrId() {
                return this.isAvastOne ? "update_vpn_product_to_use_this_feature_avast_one" : "update_vpn_product_to_use_this_feature";
            }
        },
        methods: {
            onBtnClicked() {
                Tt(c[Mt.brand]), sendActionToBg(b(k.Click, x.Cta));
            }
        }
    };
    var ue = function() {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
            staticClass: "wrapper"
        }, [ e("error", {
            attrs: {
                "error-str-id": this.updateVpnStrId,
                "hide-button": !1,
                "button-str-id": "update_now"
            },
            on: {
                "error-button-clicked": this.onBtnClicked
            }
        }) ], 1);
    };
    ue._withStripped = !0;
    const pe = {
        components: {
            ActivateVpnLicenseBase: it,
            DashboardBase: Et,
            ErrorBase: Rt,
            HeaderBase: Nt,
            InstallVpnClientBase: zt,
            LoadingBase: Kt,
            OfflineBase: Zt,
            ReinstallBase: te,
            RestartBase: re,
            UpdateBrowserBase: ae,
            UpdateExtensionBase: le,
            UpdateVpnClientBase: function(t, e, n, r, i, o, a, s) {
                const c = ("function" == typeof de ? de.options : de) || {};
                return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/notifications/UpdateVpnClientBase.vue", 
                c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
                c._scopeId = void 0, c;
            }({
                render: ue,
                staticRenderFns: []
            })
        },
        props: {
            bgState: Object
        },
        computed: {
            isConnectedToNetwork() {
                return this.bgState.vpn.isConnectedToNetwork;
            },
            isExtensionOld() {
                return this.bgState.vpn.apiCompatibility === u.ExtensionOld;
            },
            isVpnClientOld() {
                return this.bgState.vpn.apiCompatibility === u.VpnClientOld;
            },
            isShowUpdateBrowser() {
                return !!this.bgState.spc && !this.bgState.spc.isBrowserApiAvailable;
            },
            isNativeMessagingHostFound() {
                return this.bgState.vpn.isNativeMessagingHostFound;
            },
            isVpnLicenseActive() {
                return this.bgState.vpn.licenseInfo && this.bgState.vpn.licenseInfo.status === o.Valid;
            },
            isReinstallRequired: () => !1,
            isRestartRequired: () => !1,
            isErrorOccurred() {
                return this.bgState.vpn.errorInfo || this.bgState.vpn.vpnApiError;
            },
            isShowDashboard() {
                return this.isConnectedToNetwork && !this.isExtensionOld && !this.isVpnClientOld && this.isBrowserApiAvailable && this.isNativeMessagingHostFound && this.isVpnLicenseActive && !this.isReinstallRequired && !this.isRestartRequired && !this.isErrorOccurred;
            },
            isLoading() {
                const t = !(this.bgState.vpn.licenseInfo && this.bgState.vpn.selectedGateway && this.bgState.vpn.optimalGateway && this.bgState.vpn.gateways.length);
                return !this.isErrorOccurred && t;
            },
            isAvastOne() {
                return this.bgState.vpn.isAvastOne;
            },
            popupActivePage() {
                let t = O.None;
                return this.isConnectedToNetwork ? this.isErrorOccurred ? t = O.General : this.isShowUpdateBrowser ? t = O.UpdateBrowser : this.isNativeMessagingHostFound ? this.isLoading ? t = O.Loading : this.isExtensionOld ? t = O.UpdateExtension : this.isVpnClientOld ? t = O.UpdateApp : this.isVpnLicenseActive ? this.isReinstallRequired ? t = O.Reinstall : this.isRestartRequired && (t = O.Restart) : t = O.LicenseStatusNotValid : t = O.InstallApp : t = O.Offline, 
                t !== O.None && t !== this.bgState.vpn.lastActivePage && this.notifyPopupPageChange(t), 
                t;
            }
        },
        methods: {
            notifyPopupPageChange(t) {
                U(H(t)), U(b(k.Page, x.None));
            }
        }
    };
    var fe = function() {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
            class: {
                "container-avast-one": t.isAvastOne,
                container: !t.isAvastOne
            },
            attrs: {
                page: t.popupActivePage
            }
        }, [ n("HeaderBase", {
            attrs: {
                "is-avast-one": t.isAvastOne,
                "is-show-dashboard": t.isShowDashboard
            }
        }), t._v(" "), t.isConnectedToNetwork ? t.isErrorOccurred ? n("ErrorBase") : t.isShowUpdateBrowser ? n("UpdateBrowserBase") : t.isNativeMessagingHostFound ? t.isLoading ? n("LoadingBase") : t.isExtensionOld ? n("UpdateExtensionBase") : t.isVpnClientOld ? n("UpdateVpnClientBase", {
            attrs: {
                "is-avast-one": t.isAvastOne
            }
        }) : t.isVpnLicenseActive ? t.isReinstallRequired ? n("ReinstallBase", {
            attrs: {
                "is-avast-one": t.isAvastOne
            }
        }) : t.isRestartRequired ? n("RestartBase", {
            attrs: {
                "is-avast-one": t.isAvastOne
            }
        }) : n("DashboardBase", {
            attrs: {
                "bg-state": t.bgState,
                "is-avast-one": t.isAvastOne,
                "is-loading": t.isLoading
            }
        }) : n("ActivateVpnLicenseBase", {
            attrs: {
                "is-avast-one": t.isAvastOne
            }
        }) : n("InstallVpnClientBase") : n("OfflineBase") ], 1);
    };
    fe._withStripped = !0;
    var ve = function(t, e, n, r, i, o, a, s) {
        const c = ("function" == typeof n ? n.options : n) || {};
        return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/avast/Popup.vue", 
        c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
        c._scopeId = void 0, c;
    }({}, 0, {
        extends: function(t, e, n, r, i, o, a, s) {
            const c = ("function" == typeof pe ? pe.options : pe) || {};
            return c.__file = "/home/tcagent/.buildAgent/work/e3f17faef5d14af8/src/html/popup/generic/PopupBase.vue", 
            c.render || (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), 
            c._scopeId = void 0, c;
        }({
            render: fe,
            staticRenderFns: []
        })
    }), he = Object.freeze({});
    function me(t) {
        return null == t;
    }
    function ge(t) {
        return null != t;
    }
    function _e(t) {
        return !0 === t;
    }
    function ye(t) {
        return "string" == typeof t || "number" == typeof t || "symbol" == typeof t || "boolean" == typeof t;
    }
    function Ce(t) {
        return null !== t && "object" == typeof t;
    }
    var be = Object.prototype.toString;
    function we(t) {
        return "[object Object]" === be.call(t);
    }
    function Se(t) {
        var e = parseFloat(String(t));
        return e >= 0 && Math.floor(e) === e && isFinite(t);
    }
    function Ae(t) {
        return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t);
    }
    function Ie(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e;
    }
    function ke(t, e) {
        for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++) n[r[i]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()];
        } : function(t) {
            return n[t];
        };
    }
    ke("slot,component", !0);
    var Oe = ke("key,ref,slot,slot-scope,is");
    function xe(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            if (n > -1) return t.splice(n, 1);
        }
    }
    var Fe = Object.prototype.hasOwnProperty;
    function Ee(t, e) {
        return Fe.call(t, e);
    }
    function $e(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n));
        };
    }
    var Le = /-(\w)/g, Re = $e(function(t) {
        return t.replace(Le, function(t, e) {
            return e ? e.toUpperCase() : "";
        });
    }), Be = $e(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
    }), Pe = /\B([A-Z])/g, Ne = $e(function(t) {
        return t.replace(Pe, "-$1").toLowerCase();
    }), Te = Function.prototype.bind ? function(t, e) {
        return t.bind(e);
    } : function(t, e) {
        function n(n) {
            var r = arguments.length;
            return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
        }
        return n._length = t.length, n;
    };
    function De(t, e) {
        e = e || 0;
        for (var n = t.length - e, r = new Array(n); n--; ) r[n] = t[n + e];
        return r;
    }
    function Ve(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
    }
    function Ue(t) {
        for (var e = {}, n = 0; n < t.length; n++) t[n] && Ve(e, t[n]);
        return e;
    }
    function je(t, e, n) {}
    var Me = function(t, e, n) {
        return !1;
    }, Ge = function(t) {
        return t;
    };
    function He(t, e) {
        if (t === e) return !0;
        var n = Ce(t), r = Ce(e);
        if (!n || !r) return !n && !r && String(t) === String(e);
        try {
            var i = Array.isArray(t), o = Array.isArray(e);
            if (i && o) return t.length === e.length && t.every(function(t, n) {
                return He(t, e[n]);
            });
            if (i || o) return !1;
            var a = Object.keys(t), s = Object.keys(e);
            return a.length === s.length && a.every(function(n) {
                return He(t[n], e[n]);
            });
        } catch (t) {
            return !1;
        }
    }
    function ze(t, e) {
        for (var n = 0; n < t.length; n++) if (He(t[n], e)) return n;
        return -1;
    }
    function We(t) {
        var e = !1;
        return function() {
            e || (e = !0, t.apply(this, arguments));
        };
    }
    var qe = [ "component", "directive", "filter" ], Ke = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured" ], Je = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !1,
        devtools: !1,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: Me,
        isReservedAttr: Me,
        isUnknownElement: Me,
        getTagNamespace: je,
        parsePlatformTagName: Ge,
        mustUseProp: Me,
        _lifecycleHooks: Ke
    };
    function Xe(t, e, n, r) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!r,
            writable: !0,
            configurable: !0
        });
    }
    var Ze, Ye = /[^\w.$]/, Qe = "__proto__" in {}, tn = "undefined" != typeof window, en = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform, nn = en && WXEnvironment.platform.toLowerCase(), rn = tn && window.navigator.userAgent.toLowerCase(), on = rn && /msie|trident/.test(rn), an = rn && rn.indexOf("msie 9.0") > 0, sn = rn && rn.indexOf("edge/") > 0, cn = (rn && rn.indexOf("android"), 
    rn && /iphone|ipad|ipod|ios/.test(rn) || "ios" === nn), ln = (rn && /chrome\/\d+/.test(rn), 
    {}.watch), dn = !1;
    if (tn) try {
        var un = {};
        Object.defineProperty(un, "passive", {
            get: function() {
                dn = !0;
            }
        }), window.addEventListener("test-passive", null, un);
    } catch (t) {}
    var pn = function() {
        return void 0 === Ze && (Ze = !tn && !en && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), 
        Ze;
    }, fn = tn && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
    function vn(t) {
        return "function" == typeof t && /native code/.test(t.toString());
    }
    var hn, mn = "undefined" != typeof Symbol && vn(Symbol) && "undefined" != typeof Reflect && vn(Reflect.ownKeys);
    hn = "undefined" != typeof Set && vn(Set) ? Set : function() {
        function t() {
            this.set = Object.create(null);
        }
        return t.prototype.has = function(t) {
            return !0 === this.set[t];
        }, t.prototype.add = function(t) {
            this.set[t] = !0;
        }, t.prototype.clear = function() {
            this.set = Object.create(null);
        }, t;
    }();
    var gn = je, _n = 0, yn = function() {
        this.id = _n++, this.subs = [];
    };
    yn.prototype.addSub = function(t) {
        this.subs.push(t);
    }, yn.prototype.removeSub = function(t) {
        xe(this.subs, t);
    }, yn.prototype.depend = function() {
        yn.target && yn.target.addDep(this);
    }, yn.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
    }, yn.target = null;
    var Cn = [];
    function bn(t) {
        yn.target && Cn.push(yn.target), yn.target = t;
    }
    function wn() {
        yn.target = Cn.pop();
    }
    var Sn = function(t, e, n, r, i, o, a, s) {
        this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, 
        this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, 
        this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, 
        this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, 
        this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, 
        this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }, An = {
        child: {
            configurable: !0
        }
    };
    An.child.get = function() {
        return this.componentInstance;
    }, Object.defineProperties(Sn.prototype, An);
    var In = function(t) {
        void 0 === t && (t = "");
        var e = new Sn();
        return e.text = t, e.isComment = !0, e;
    };
    function kn(t) {
        return new Sn(void 0, void 0, void 0, String(t));
    }
    function On(t) {
        var e = new Sn(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
        return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
        e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, 
        e.isCloned = !0, e;
    }
    var xn = Array.prototype, Fn = Object.create(xn);
    [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
        var e = xn[t];
        Xe(Fn, t, function() {
            for (var n = [], r = arguments.length; r--; ) n[r] = arguments[r];
            var i, o = e.apply(this, n), a = this.__ob__;
            switch (t) {
              case "push":
              case "unshift":
                i = n;
                break;

              case "splice":
                i = n.slice(2);
            }
            return i && a.observeArray(i), a.dep.notify(), o;
        });
    });
    var En = Object.getOwnPropertyNames(Fn), $n = !0;
    function Ln(t) {
        $n = t;
    }
    var Rn = function(t) {
        this.value = t, this.dep = new yn(), this.vmCount = 0, Xe(t, "__ob__", this), Array.isArray(t) ? ((Qe ? function(t, e, n) {
            t.__proto__ = e;
        } : function(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                Xe(t, o, e[o]);
            }
        })(t, Fn, En), this.observeArray(t)) : this.walk(t);
    };
    function Bn(t, e) {
        var n;
        if (Ce(t) && !(t instanceof Sn)) return Ee(t, "__ob__") && t.__ob__ instanceof Rn ? n = t.__ob__ : $n && !pn() && (Array.isArray(t) || we(t)) && Object.isExtensible(t) && !t._isVue && (n = new Rn(t)), 
        e && n && n.vmCount++, n;
    }
    function Pn(t, e, n, r, i) {
        var o = new yn(), a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
            var s = a && a.get;
            s || 2 !== arguments.length || (n = t[e]);
            var c = a && a.set, l = !i && Bn(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = s ? s.call(t) : n;
                    return yn.target && (o.depend(), l && (l.dep.depend(), Array.isArray(e) && function t(e) {
                        for (var n = void 0, r = 0, i = e.length; r < i; r++) (n = e[r]) && n.__ob__ && n.__ob__.dep.depend(), 
                        Array.isArray(n) && t(n);
                    }(e))), e;
                },
                set: function(e) {
                    var r = s ? s.call(t) : n;
                    e === r || e != e && r != r || (c ? c.call(t, e) : n = e, l = !i && Bn(e), o.notify());
                }
            });
        }
    }
    function Nn(t, e, n) {
        if (Array.isArray(t) && Se(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
        n;
        if (e in t && !(e in Object.prototype)) return t[e] = n, n;
        var r = t.__ob__;
        return t._isVue || r && r.vmCount ? n : r ? (Pn(r.value, e, n), r.dep.notify(), 
        n) : (t[e] = n, n);
    }
    function Tn(t, e) {
        if (Array.isArray(t) && Se(e)) t.splice(e, 1); else {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || Ee(t, e) && (delete t[e], n && n.dep.notify());
        }
    }
    Rn.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++) Pn(t, e[n]);
    }, Rn.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++) Bn(t[e]);
    };
    var Dn = Je.optionMergeStrategies;
    function Vn(t, e) {
        if (!e) return t;
        for (var n, r, i, o = Object.keys(e), a = 0; a < o.length; a++) r = t[n = o[a]], 
        i = e[n], Ee(t, n) ? we(r) && we(i) && Vn(r, i) : Nn(t, n, i);
        return t;
    }
    function Un(t, e, n) {
        return n ? function() {
            var r = "function" == typeof e ? e.call(n, n) : e, i = "function" == typeof t ? t.call(n, n) : t;
            return r ? Vn(r, i) : i;
        } : e ? t ? function() {
            return Vn("function" == typeof e ? e.call(this, this) : e, "function" == typeof t ? t.call(this, this) : t);
        } : e : t;
    }
    function jn(t, e) {
        return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
    }
    function Mn(t, e, n, r) {
        var i = Object.create(t || null);
        return e ? Ve(i, e) : i;
    }
    Dn.data = function(t, e, n) {
        return n ? Un(t, e, n) : e && "function" != typeof e ? t : Un(t, e);
    }, Ke.forEach(function(t) {
        Dn[t] = jn;
    }), qe.forEach(function(t) {
        Dn[t + "s"] = Mn;
    }), Dn.watch = function(t, e, n, r) {
        if (t === ln && (t = void 0), e === ln && (e = void 0), !e) return Object.create(t || null);
        if (!t) return e;
        var i = {};
        for (var o in Ve(i, t), e) {
            var a = i[o], s = e[o];
            a && !Array.isArray(a) && (a = [ a ]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [ s ];
        }
        return i;
    }, Dn.props = Dn.methods = Dn.inject = Dn.computed = function(t, e, n, r) {
        if (!t) return e;
        var i = Object.create(null);
        return Ve(i, t), e && Ve(i, e), i;
    }, Dn.provide = Un;
    var Gn = function(t, e) {
        return void 0 === e ? t : e;
    };
    function Hn(t, e, n) {
        "function" == typeof e && (e = e.options), function(t, e) {
            var n = t.props;
            if (n) {
                var r, i, o = {};
                if (Array.isArray(n)) for (r = n.length; r--; ) "string" == typeof (i = n[r]) && (o[Re(i)] = {
                    type: null
                }); else if (we(n)) for (var a in n) i = n[a], o[Re(a)] = we(i) ? i : {
                    type: i
                };
                t.props = o;
            }
        }(e), function(t, e) {
            var n = t.inject;
            if (n) {
                var r = t.inject = {};
                if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r[n[i]] = {
                    from: n[i]
                }; else if (we(n)) for (var o in n) {
                    var a = n[o];
                    r[o] = we(a) ? Ve({
                        from: o
                    }, a) : {
                        from: a
                    };
                }
            }
        }(e), function(t) {
            var n = e.directives;
            if (n) for (var r in n) {
                var i = n[r];
                "function" == typeof i && (n[r] = {
                    bind: i,
                    update: i
                });
            }
        }();
        var r = e.extends;
        if (r && (t = Hn(t, r, n)), e.mixins) for (var i = 0, o = e.mixins.length; i < o; i++) t = Hn(t, e.mixins[i], n);
        var a, s = {};
        for (a in t) c(a);
        for (a in e) Ee(t, a) || c(a);
        function c(r) {
            var i = Dn[r] || Gn;
            s[r] = i(t[r], e[r], n, r);
        }
        return s;
    }
    function zn(t, e, n, r) {
        if ("string" == typeof n) {
            var i = t[e];
            if (Ee(i, n)) return i[n];
            var o = Re(n);
            if (Ee(i, o)) return i[o];
            var a = Be(o);
            return Ee(i, a) ? i[a] : i[n] || i[o] || i[a];
        }
    }
    function Wn(t, e, n, r) {
        var i = e[t], o = !Ee(n, t), a = n[t], s = Jn(Boolean, i.type);
        if (s > -1) if (o && !Ee(i, "default")) a = !1; else if ("" === a || a === Ne(t)) {
            var c = Jn(String, i.type);
            (c < 0 || s < c) && (a = !0);
        }
        if (void 0 === a) {
            a = function(t, e, n) {
                if (Ee(e, "default")) {
                    var r = e.default;
                    return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof r && "Function" !== qn(e.type) ? r.call(t) : r;
                }
            }(r, i, t);
            var l = $n;
            Ln(!0), Bn(a), Ln(l);
        }
        return a;
    }
    function qn(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : "";
    }
    function Kn(t, e) {
        return qn(t) === qn(e);
    }
    function Jn(t, e) {
        if (!Array.isArray(e)) return Kn(e, t) ? 0 : -1;
        for (var n = 0, r = e.length; n < r; n++) if (Kn(e[n], t)) return n;
        return -1;
    }
    function Xn(t, e, n) {
        if (e) for (var r = e; r = r.$parent; ) {
            var i = r.$options.errorCaptured;
            if (i) for (var o = 0; o < i.length; o++) try {
                if (!1 === i[o].call(r, t, e, n)) return;
            } catch (t) {
                Zn(t, r, "errorCaptured hook");
            }
        }
        Zn(t, e, n);
    }
    function Zn(t, e, n) {
        if (Je.errorHandler) try {
            return Je.errorHandler.call(null, t, e, n);
        } catch (t) {
            Yn(t);
        }
        Yn(t);
    }
    function Yn(t, e, n) {
        if (!tn && !en || "undefined" == typeof console) throw t;
        console.error(t);
    }
    var Qn, tr, er = [], nr = !1;
    function rr() {
        nr = !1;
        var t = er.slice(0);
        er.length = 0;
        for (var e = 0; e < t.length; e++) t[e]();
    }
    var ir = !1;
    if ("undefined" != typeof setImmediate && vn(setImmediate)) tr = function() {
        setImmediate(rr);
    }; else if ("undefined" == typeof MessageChannel || !vn(MessageChannel) && "[object MessageChannelConstructor]" !== MessageChannel.toString()) tr = function() {
        setTimeout(rr, 0);
    }; else {
        var or = new MessageChannel(), ar = or.port2;
        or.port1.onmessage = rr, tr = function() {
            ar.postMessage(1);
        };
    }
    if ("undefined" != typeof Promise && vn(Promise)) {
        var sr = Promise.resolve();
        Qn = function() {
            sr.then(rr), cn && setTimeout(je);
        };
    } else Qn = tr;
    function cr(t, e) {
        var n;
        if (er.push(function() {
            if (t) try {
                t.call(e);
            } catch (t) {
                Xn(t, e, "nextTick");
            } else n && n(e);
        }), nr || (nr = !0, ir ? tr() : Qn()), !t && "undefined" != typeof Promise) return new Promise(function(t) {
            n = t;
        });
    }
    var lr = new hn();
    function dr(t) {
        !function t(e, n) {
            var r, i, o = Array.isArray(e);
            if (!(!o && !Ce(e) || Object.isFrozen(e) || e instanceof Sn)) {
                if (e.__ob__) {
                    var a = e.__ob__.dep.id;
                    if (n.has(a)) return;
                    n.add(a);
                }
                if (o) for (r = e.length; r--; ) t(e[r], n); else for (r = (i = Object.keys(e)).length; r--; ) t(e[i[r]], n);
            }
        }(t, lr), lr.clear();
    }
    var ur, pr = $e(function(t) {
        var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), r = "!" === (t = n ? t.slice(1) : t).charAt(0);
        return {
            name: t = r ? t.slice(1) : t,
            once: n,
            capture: r,
            passive: e
        };
    });
    function fr(t) {
        function e() {
            var t = arguments, n = e.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var r = n.slice(), i = 0; i < r.length; i++) r[i].apply(null, t);
        }
        return e.fns = t, e;
    }
    function vr(t, e, n, r, i) {
        var o, a, s, c;
        for (o in t) a = t[o], s = e[o], c = pr(o), me(a) || (me(s) ? (me(a.fns) && (a = t[o] = fr(a)), 
        n(c.name, a, c.once, c.capture, c.passive, c.params)) : a !== s && (s.fns = a, t[o] = s));
        for (o in e) me(t[o]) && r((c = pr(o)).name, e[o], c.capture);
    }
    function hr(t, e, n) {
        var r;
        t instanceof Sn && (t = t.data.hook || (t.data.hook = {}));
        var i = t[e];
        function o() {
            n.apply(this, arguments), xe(r.fns, o);
        }
        me(i) ? r = fr([ o ]) : ge(i.fns) && _e(i.merged) ? (r = i).fns.push(o) : r = fr([ i, o ]), 
        r.merged = !0, t[e] = r;
    }
    function mr(t, e, n, r, i) {
        if (ge(e)) {
            if (Ee(e, n)) return t[n] = e[n], i || delete e[n], !0;
            if (Ee(e, r)) return t[n] = e[r], i || delete e[r], !0;
        }
        return !1;
    }
    function gr(t) {
        return ye(t) ? [ kn(t) ] : Array.isArray(t) ? function t(e, n) {
            var r, i, o, a, s = [];
            for (r = 0; r < e.length; r++) me(i = e[r]) || "boolean" == typeof i || (a = s[o = s.length - 1], 
            Array.isArray(i) ? i.length > 0 && (_r((i = t(i, (n || "") + "_" + r))[0]) && _r(a) && (s[o] = kn(a.text + i[0].text), 
            i.shift()), s.push.apply(s, i)) : ye(i) ? _r(a) ? s[o] = kn(a.text + i) : "" !== i && s.push(kn(i)) : _r(i) && _r(a) ? s[o] = kn(a.text + i.text) : (_e(e._isVList) && ge(i.tag) && me(i.key) && ge(n) && (i.key = "__vlist" + n + "_" + r + "__"), 
            s.push(i)));
            return s;
        }(t) : void 0;
    }
    function _r(t) {
        return ge(t) && ge(t.text) && !1 === t.isComment;
    }
    function yr(t, e) {
        return (t.__esModule || mn && "Module" === t[Symbol.toStringTag]) && (t = t.default), 
        Ce(t) ? e.extend(t) : t;
    }
    function Cr(t) {
        return t.isComment && t.asyncFactory;
    }
    function br(t) {
        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
            var n = t[e];
            if (ge(n) && (ge(n.componentOptions) || Cr(n))) return n;
        }
    }
    function wr(t, e, n) {
        n ? ur.$once(t, e) : ur.$on(t, e);
    }
    function Sr(t, e) {
        ur.$off(t, e);
    }
    function Ar(t, e, n) {
        ur = t, vr(e, n || {}, wr, Sr), ur = void 0;
    }
    function Ir(t, e) {
        var n = {};
        if (!t) return n;
        for (var r = 0, i = t.length; r < i; r++) {
            var o = t[r], a = o.data;
            if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== e && o.fnContext !== e || !a || null == a.slot) (n.default || (n.default = [])).push(o); else {
                var s = a.slot, c = n[s] || (n[s] = []);
                "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
            }
        }
        for (var l in n) n[l].every(kr) && delete n[l];
        return n;
    }
    function kr(t) {
        return t.isComment && !t.asyncFactory || " " === t.text;
    }
    function Or(t, e) {
        e = e || {};
        for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? Or(t[n], e) : e[t[n].key] = t[n].fn;
        return e;
    }
    var xr = null;
    function Fr(t) {
        for (;t && (t = t.$parent); ) if (t._inactive) return !0;
        return !1;
    }
    function Er(t, e) {
        if (e) {
            if (t._directInactive = !1, Fr(t)) return;
        } else if (t._directInactive) return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++) Er(t.$children[n]);
            $r(t, "activated");
        }
    }
    function $r(t, e) {
        bn();
        var n = t.$options[e];
        if (n) for (var r = 0, i = n.length; r < i; r++) try {
            n[r].call(t);
        } catch (n) {
            Xn(n, t, e + " hook");
        }
        t._hasHookEvent && t.$emit("hook:" + e), wn();
    }
    var Lr = [], Rr = [], Br = {}, Pr = !1, Nr = !1, Tr = 0;
    function Dr() {
        var t, e;
        for (Nr = !0, Lr.sort(function(t, e) {
            return t.id - e.id;
        }), Tr = 0; Tr < Lr.length; Tr++) e = (t = Lr[Tr]).id, Br[e] = null, t.run();
        var n = Rr.slice(), r = Lr.slice();
        Tr = Lr.length = Rr.length = 0, Br = {}, Pr = Nr = !1, function(t) {
            for (var e = 0; e < t.length; e++) t[e]._inactive = !0, Er(t[e], !0);
        }(n), function(t) {
            for (var e = t.length; e--; ) {
                var n = t[e], r = n.vm;
                r._watcher === n && r._isMounted && $r(r, "updated");
            }
        }(r), fn && Je.devtools && fn.emit("flush");
    }
    var Vr = 0, Ur = function(t, e, n, r, i) {
        this.vm = t, i && (t._watcher = this), t._watchers.push(this), r ? (this.deep = !!r.deep, 
        this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
        this.cb = n, this.id = ++Vr, this.active = !0, this.dirty = this.lazy, this.deps = [], 
        this.newDeps = [], this.depIds = new hn(), this.newDepIds = new hn(), this.expression = "", 
        "function" == typeof e ? this.getter = e : (this.getter = function(t) {
            if (!Ye.test(t)) {
                var e = t.split(".");
                return function(t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t) return;
                        t = t[e[n]];
                    }
                    return t;
                };
            }
        }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
    };
    Ur.prototype.get = function() {
        var t;
        bn(this);
        var e = this.vm;
        try {
            t = this.getter.call(e, e);
        } catch (t) {
            if (!this.user) throw t;
            Xn(t, e, 'getter for watcher "' + this.expression + '"');
        } finally {
            this.deep && dr(t), wn(), this.cleanupDeps();
        }
        return t;
    }, Ur.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
    }, Ur.prototype.cleanupDeps = function() {
        for (var t = this.deps.length; t--; ) {
            var e = this.deps[t];
            this.newDepIds.has(e.id) || e.removeSub(this);
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
        this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
    }, Ur.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
            var e = t.id;
            if (null == Br[e]) {
                if (Br[e] = !0, Nr) {
                    for (var n = Lr.length - 1; n > Tr && Lr[n].id > t.id; ) n--;
                    Lr.splice(n + 1, 0, t);
                } else Lr.push(t);
                Pr || (Pr = !0, cr(Dr));
            }
        }(this);
    }, Ur.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || Ce(t) || this.deep) {
                var e = this.value;
                if (this.value = t, this.user) try {
                    this.cb.call(this.vm, t, e);
                } catch (t) {
                    Xn(t, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, t, e);
            }
        }
    }, Ur.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
    }, Ur.prototype.depend = function() {
        for (var t = this.deps.length; t--; ) this.deps[t].depend();
    }, Ur.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || xe(this.vm._watchers, this);
            for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
            this.active = !1;
        }
    };
    var jr = {
        enumerable: !0,
        configurable: !0,
        get: je,
        set: je
    };
    function Mr(t, e, n) {
        jr.get = function() {
            return this[e][n];
        }, jr.set = function(t) {
            this[e][n] = t;
        }, Object.defineProperty(t, n, jr);
    }
    var Gr = {
        lazy: !0
    };
    function Hr(t, e, n) {
        var r = !pn();
        "function" == typeof n ? (jr.get = r ? zr(e) : n, jr.set = je) : (jr.get = n.get ? r && !1 !== n.cache ? zr(e) : n.get : je, 
        jr.set = n.set ? n.set : je), Object.defineProperty(t, e, jr);
    }
    function zr(t) {
        return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e) return e.dirty && e.evaluate(), yn.target && e.depend(), e.value;
        };
    }
    function Wr(t, e, n, r) {
        return we(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r);
    }
    function qr(t, e) {
        if (t) {
            for (var n = Object.create(null), r = mn ? Reflect.ownKeys(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            }) : Object.keys(t), i = 0; i < r.length; i++) {
                for (var o = r[i], a = t[o].from, s = e; s; ) {
                    if (s._provided && Ee(s._provided, a)) {
                        n[o] = s._provided[a];
                        break;
                    }
                    s = s.$parent;
                }
                if (!s && "default" in t[o]) {
                    var c = t[o].default;
                    n[o] = "function" == typeof c ? c.call(e) : c;
                }
            }
            return n;
        }
    }
    function Kr(t, e) {
        var n, r, i, o, a;
        if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
        i = t.length; r < i; r++) n[r] = e(t[r], r); else if ("number" == typeof t) for (n = new Array(t), 
        r = 0; r < t; r++) n[r] = e(r + 1, r); else if (Ce(t)) for (o = Object.keys(t), 
        n = new Array(o.length), r = 0, i = o.length; r < i; r++) a = o[r], n[r] = e(t[a], a, r);
        return ge(n) && (n._isVList = !0), n;
    }
    function Jr(t, e, n, r) {
        var i, o = this.$scopedSlots[t];
        if (o) n = n || {}, r && (n = Ve(Ve({}, r), n)), i = o(n) || e; else {
            var a = this.$slots[t];
            a && (a._rendered = !0), i = a || e;
        }
        var s = n && n.slot;
        return s ? this.$createElement("template", {
            slot: s
        }, i) : i;
    }
    function Xr(t) {
        return zn(this.$options, "filters", t) || Ge;
    }
    function Zr(t, e) {
        return Array.isArray(t) ? -1 === t.indexOf(e) : t !== e;
    }
    function Yr(t, e, n, r, i) {
        var o = Je.keyCodes[e] || n;
        return i && r && !Je.keyCodes[e] ? Zr(i, r) : o ? Zr(o, t) : r ? Ne(r) !== e : void 0;
    }
    function Qr(t, e, n, r, i) {
        if (n && Ce(n)) {
            var o;
            Array.isArray(n) && (n = Ue(n));
            var a = function(a) {
                if ("class" === a || "style" === a || Oe(a)) o = t; else {
                    var s = t.attrs && t.attrs.type;
                    o = r || Je.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                }
                a in o || (o[a] = n[a], i && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                    n[a] = t;
                }));
            };
            for (var s in n) a(s);
        }
        return t;
    }
    function ti(t, e) {
        var n = this._staticTrees || (this._staticTrees = []), r = n[t];
        return r && !e ? r : (ni(r = n[t] = this.$options.staticRenderFns[t].call(this._renderProxy, null, this), "__static__" + t, !1), 
        r);
    }
    function ei(t, e, n) {
        return ni(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
    }
    function ni(t, e, n) {
        if (Array.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && "string" != typeof t[r] && ri(t[r], e + "_" + r, n); else ri(t, e, n);
    }
    function ri(t, e, n) {
        t.isStatic = !0, t.key = e, t.isOnce = n;
    }
    function ii(t, e) {
        if (e && we(e)) {
            var n = t.on = t.on ? Ve({}, t.on) : {};
            for (var r in e) {
                var i = n[r], o = e[r];
                n[r] = i ? [].concat(i, o) : o;
            }
        }
        return t;
    }
    function oi(t) {
        t._o = ei, t._n = Ie, t._s = Ae, t._l = Kr, t._t = Jr, t._q = He, t._i = ze, t._m = ti, 
        t._f = Xr, t._k = Yr, t._b = Qr, t._v = kn, t._e = In, t._u = Or, t._g = ii;
    }
    function ai(t, e, n, r, i) {
        var o, a = i.options;
        Ee(r, "_uid") ? (o = Object.create(r))._original = r : (o = r, r = r._original);
        var s = _e(a._compiled), c = !s;
        this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || he, 
        this.injections = qr(a.inject, r), this.slots = function() {
            return Ir(n, r);
        }, s && (this.$options = a, this.$slots = this.slots(), this.$scopedSlots = t.scopedSlots || he), 
        a._scopeId ? this._c = function(t, e, n, i) {
            var s = vi(o, t, e, n, i, c);
            return s && !Array.isArray(s) && (s.fnScopeId = a._scopeId, s.fnContext = r), s;
        } : this._c = function(t, e, n, r) {
            return vi(o, t, e, n, r, c);
        };
    }
    function si(t, e, n, r) {
        var i = On(t);
        return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), 
        i;
    }
    function ci(t, e) {
        for (var n in e) t[Re(n)] = e[n];
    }
    oi(ai.prototype);
    var li = {
        init: function(t, e, n, r) {
            if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
                var i = t;
                li.prepatch(i, i);
            } else (t.componentInstance = function(t, e, n, r) {
                var i = {
                    _isComponent: !0,
                    parent: xr,
                    _parentVnode: t,
                    _parentElm: n || null,
                    _refElm: r || null
                }, o = t.data.inlineTemplate;
                return ge(o) && (i.render = o.render, i.staticRenderFns = o.staticRenderFns), new t.componentOptions.Ctor(i);
            }(t, 0, n, r)).$mount(e ? t.elm : void 0, e);
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            !function(t, e, n, r, i) {
                var o = !!(i || t.$options._renderChildren || r.data.scopedSlots || t.$scopedSlots !== he);
                if (t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), 
                t.$options._renderChildren = i, t.$attrs = r.data.attrs || he, t.$listeners = n || he, 
                e && t.$options.props) {
                    Ln(!1);
                    for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                        var l = s[c], d = t.$options.props;
                        a[l] = Wn(l, d, e, t);
                    }
                    Ln(!0), t.$options.propsData = e;
                }
                n = n || he;
                var u = t.$options._parentListeners;
                t.$options._parentListeners = n, Ar(t, n, u), o && (t.$slots = Ir(i, r.context), 
                t.$forceUpdate());
            }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
        },
        insert: function(t) {
            var e, n = t.context, r = t.componentInstance;
            r._isMounted || (r._isMounted = !0, $r(r, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = r)._inactive = !1, 
            Rr.push(e)) : Er(r, !0));
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                if (!(n && (e._directInactive = !0, Fr(e)) || e._inactive)) {
                    e._inactive = !0;
                    for (var r = 0; r < e.$children.length; r++) t(e.$children[r]);
                    $r(e, "deactivated");
                }
            }(e, !0) : e.$destroy());
        }
    }, di = Object.keys(li);
    function ui(t, e, n, r, i) {
        if (!me(t)) {
            var o = n.$options._base;
            if (Ce(t) && (t = o.extend(t)), "function" == typeof t) {
                var a;
                if (me(t.cid) && void 0 === (t = function(t, e, n) {
                    if (_e(t.error) && ge(t.errorComp)) return t.errorComp;
                    if (ge(t.resolved)) return t.resolved;
                    if (_e(t.loading) && ge(t.loadingComp)) return t.loadingComp;
                    if (!ge(t.contexts)) {
                        var r = t.contexts = [ n ], i = !0, o = function() {
                            for (var t = 0, e = r.length; t < e; t++) r[t].$forceUpdate();
                        }, a = We(function(n) {
                            t.resolved = yr(n, e), i || o();
                        }), s = We(function(e) {
                            ge(t.errorComp) && (t.error = !0, o());
                        }), c = t(a, s);
                        return Ce(c) && ("function" == typeof c.then ? me(t.resolved) && c.then(a, s) : ge(c.component) && "function" == typeof c.component.then && (c.component.then(a, s), 
                        ge(c.error) && (t.errorComp = yr(c.error, e)), ge(c.loading) && (t.loadingComp = yr(c.loading, e), 
                        0 === c.delay ? t.loading = !0 : setTimeout(function() {
                            me(t.resolved) && me(t.error) && (t.loading = !0, o());
                        }, c.delay || 200)), ge(c.timeout) && setTimeout(function() {
                            me(t.resolved) && s(null);
                        }, c.timeout))), i = !1, t.loading ? t.loadingComp : t.resolved;
                    }
                    t.contexts.push(n);
                }(a = t, o, n))) return function(t, e, n, r, i) {
                    var o = In();
                    return o.asyncFactory = t, o.asyncMeta = {
                        data: e,
                        context: n,
                        children: r,
                        tag: i
                    }, o;
                }(a, e, n, r, i);
                e = e || {}, mi(t), ge(e.model) && function(t, e) {
                    var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                    (e.props || (e.props = {}))[n] = e.model.value;
                    var i = e.on || (e.on = {});
                    ge(i[r]) ? i[r] = [ e.model.callback ].concat(i[r]) : i[r] = e.model.callback;
                }(t.options, e);
                var s = function(t, e, n) {
                    var r = e.options.props;
                    if (!me(r)) {
                        var i = {}, o = t.attrs, a = t.props;
                        if (ge(o) || ge(a)) for (var s in r) {
                            var c = Ne(s);
                            mr(i, a, s, c, !0) || mr(i, o, s, c, !1);
                        }
                        return i;
                    }
                }(e, t);
                if (_e(t.options.functional)) return function(t, e, n, r, i) {
                    var o = t.options, a = {}, s = o.props;
                    if (ge(s)) for (var c in s) a[c] = Wn(c, s, e || he); else ge(n.attrs) && ci(a, n.attrs), 
                    ge(n.props) && ci(a, n.props);
                    var l = new ai(n, a, i, r, t), d = o.render.call(null, l._c, l);
                    if (d instanceof Sn) return si(d, n, l.parent, o);
                    if (Array.isArray(d)) {
                        for (var u = gr(d) || [], p = new Array(u.length), f = 0; f < u.length; f++) p[f] = si(u[f], n, l.parent, o);
                        return p;
                    }
                }(t, s, e, n, r);
                var c = e.on;
                if (e.on = e.nativeOn, _e(t.options.abstract)) {
                    var l = e.slot;
                    e = {}, l && (e.slot = l);
                }
                !function(t) {
                    for (var e = t.hook || (t.hook = {}), n = 0; n < di.length; n++) {
                        var r = di[n];
                        e[r] = li[r];
                    }
                }(e);
                var d = t.options.name || i;
                return new Sn("vue-component-" + t.cid + (d ? "-" + d : ""), e, void 0, void 0, void 0, n, {
                    Ctor: t,
                    propsData: s,
                    listeners: c,
                    tag: i,
                    children: r
                }, a);
            }
        }
    }
    var pi = 1, fi = 2;
    function vi(t, e, n, r, i, o) {
        return (Array.isArray(n) || ye(n)) && (i = r, r = n, n = void 0), _e(o) && (i = fi), 
        function(t, e, n, r, i) {
            if (ge(n) && ge(n.__ob__)) return In();
            if (ge(n) && ge(n.is) && (e = n.is), !e) return In();
            var o, a, s;
            (Array.isArray(r) && "function" == typeof r[0] && ((n = n || {}).scopedSlots = {
                default: r[0]
            }, r.length = 0), i === fi ? r = gr(r) : i === pi && (r = function(t) {
                for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                return t;
            }(r)), "string" == typeof e) ? (a = t.$vnode && t.$vnode.ns || Je.getTagNamespace(e), 
            o = Je.isReservedTag(e) ? new Sn(Je.parsePlatformTagName(e), n, r, void 0, void 0, t) : ge(s = zn(t.$options, "components", e)) ? ui(s, n, t, r, e) : new Sn(e, n, r, void 0, void 0, t)) : o = ui(e, n, t, r);
            return Array.isArray(o) ? o : ge(o) ? (ge(a) && function t(e, n, r) {
                if (e.ns = n, "foreignObject" === e.tag && (n = void 0, r = !0), ge(e.children)) for (var i = 0, o = e.children.length; i < o; i++) {
                    var a = e.children[i];
                    ge(a.tag) && (me(a.ns) || _e(r) && "svg" !== a.tag) && t(a, n, r);
                }
            }(o, a), ge(n) && function(t) {
                Ce(t.style) && dr(t.style), Ce(t.class) && dr(t.class);
            }(n), o) : In();
        }(t, e, n, r, i);
    }
    var hi = 0;
    function mi(t) {
        var e = t.options;
        if (t.super) {
            var n = mi(t.super);
            if (n !== t.superOptions) {
                t.superOptions = n;
                var r = function(t) {
                    var e, n = t.options, r = t.extendOptions, i = t.sealedOptions;
                    for (var o in n) n[o] !== i[o] && (e || (e = {}), e[o] = gi(n[o], r[o], i[o]));
                    return e;
                }(t);
                r && Ve(t.extendOptions, r), (e = t.options = Hn(n, t.extendOptions)).name && (e.components[e.name] = t);
            }
        }
        return e;
    }
    function gi(t, e, n) {
        if (Array.isArray(t)) {
            var r = [];
            n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
            for (var i = 0; i < t.length; i++) (e.indexOf(t[i]) >= 0 || n.indexOf(t[i]) < 0) && r.push(t[i]);
            return r;
        }
        return t;
    }
    function _i(t) {
        this._init(t);
    }
    function yi(t) {
        return t && (t.Ctor.options.name || t.tag);
    }
    function Ci(t, e) {
        return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : (n = t, 
        "[object RegExp]" === be.call(n) && t.test(e));
        var n;
    }
    function bi(t, e) {
        var n = t.cache, r = t.keys, i = t._vnode;
        for (var o in n) {
            var a = n[o];
            if (a) {
                var s = yi(a.componentOptions);
                s && !e(s) && wi(n, o, r, i);
            }
        }
    }
    function wi(t, e, n, r) {
        var i = t[e];
        !i || r && i.tag === r.tag || i.componentInstance.$destroy(), t[e] = null, xe(n, e);
    }
    !function(t) {
        t.prototype._init = function(t) {
            var e = this;
            e._uid = hi++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
                n.parent = e.parent, n._parentVnode = r, n._parentElm = e._parentElm, n._refElm = e._refElm;
                var i = r.componentOptions;
                n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, 
                n._componentTag = i.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
            }(e, t) : e.$options = Hn(mi(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
            function(t) {
                var e = t.$options, n = e.parent;
                if (n && !e.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(t);
                }
                t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                t._isBeingDestroyed = !1;
            }(e), function(t) {
                t._events = Object.create(null), t._hasHookEvent = !1;
                var e = t.$options._parentListeners;
                e && Ar(t, e);
            }(e), function(t) {
                t._vnode = null, t._staticTrees = null;
                var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
                t.$slots = Ir(e._renderChildren, r), t.$scopedSlots = he, t._c = function(e, n, r, i) {
                    return vi(t, e, n, r, i, !1);
                }, t.$createElement = function(e, n, r, i) {
                    return vi(t, e, n, r, i, !0);
                };
                var i = n && n.data;
                Pn(t, "$attrs", i && i.attrs || he, null, !0), Pn(t, "$listeners", e._parentListeners || he, null, !0);
            }(e), $r(e, "beforeCreate"), function(t) {
                var e = qr(t.$options.inject, t);
                e && (Ln(!1), Object.keys(e).forEach(function(n) {
                    Pn(t, n, e[n]);
                }), Ln(!0));
            }(e), function(t) {
                t._watchers = [];
                var e = t.$options;
                e.props && function(t, e) {
                    var n = t.$options.propsData || {}, r = t._props = {}, i = t.$options._propKeys = [];
                    t.$parent && Ln(!1);
                    var o = function(o) {
                        i.push(o);
                        var a = Wn(o, e, n, t);
                        Pn(r, o, a), o in t || Mr(t, "_props", o);
                    };
                    for (var a in e) o(a);
                    Ln(!0);
                }(t, e.props), e.methods && function(t, e) {
                    for (var n in t.$options.props, e) t[n] = null == e[n] ? je : Te(e[n], t);
                }(t, e.methods), e.data ? function(t) {
                    var e = t.$options.data;
                    we(e = t._data = "function" == typeof e ? function(t, e) {
                        bn();
                        try {
                            return t.call(e, e);
                        } catch (t) {
                            return Xn(t, e, "data()"), {};
                        } finally {
                            wn();
                        }
                    }(e, t) : e || {}) || (e = {});
                    for (var n, r = Object.keys(e), i = t.$options.props, o = (t.$options.methods, r.length); o--; ) {
                        var a = r[o];
                        i && Ee(i, a) || 36 !== (n = (a + "").charCodeAt(0)) && 95 !== n && Mr(t, "_data", a);
                    }
                    Bn(e, !0);
                }(t) : Bn(t._data = {}, !0), e.computed && function(t, e) {
                    var n = t._computedWatchers = Object.create(null), r = pn();
                    for (var i in e) {
                        var o = e[i], a = "function" == typeof o ? o : o.get;
                        r || (n[i] = new Ur(t, a || je, je, Gr)), i in t || Hr(t, i, o);
                    }
                }(t, e.computed), e.watch && e.watch !== ln && function(t, e) {
                    for (var n in e) {
                        var r = e[n];
                        if (Array.isArray(r)) for (var i = 0; i < r.length; i++) Wr(t, n, r[i]); else Wr(t, n, r);
                    }
                }(t, e.watch);
            }(e), function(t) {
                var e = t.$options.provide;
                e && (t._provided = "function" == typeof e ? e.call(t) : e);
            }(e), $r(e, "created"), e.$options.el && e.$mount(e.$options.el);
        };
    }(_i), function(t) {
        Object.defineProperty(t.prototype, "$data", {
            get: function() {
                return this._data;
            }
        }), Object.defineProperty(t.prototype, "$props", {
            get: function() {
                return this._props;
            }
        }), t.prototype.$set = Nn, t.prototype.$delete = Tn, t.prototype.$watch = function(t, e, n) {
            if (we(e)) return Wr(this, t, e, n);
            (n = n || {}).user = !0;
            var r = new Ur(this, t, e, n);
            return n.immediate && e.call(this, r.value), function() {
                r.teardown();
            };
        };
    }(_i), function(t) {
        var e = /^hook:/;
        t.prototype.$on = function(t, n) {
            if (Array.isArray(t)) for (var r = 0, i = t.length; r < i; r++) this.$on(t[r], n); else (this._events[t] || (this._events[t] = [])).push(n), 
            e.test(t) && (this._hasHookEvent = !0);
            return this;
        }, t.prototype.$once = function(t, e) {
            var n = this;
            function r() {
                n.$off(t, r), e.apply(n, arguments);
            }
            return r.fn = e, n.$on(t, r), n;
        }, t.prototype.$off = function(t, e) {
            var n = this;
            if (!arguments.length) return n._events = Object.create(null), n;
            if (Array.isArray(t)) {
                for (var r = 0, i = t.length; r < i; r++) this.$off(t[r], e);
                return n;
            }
            var o = n._events[t];
            if (!o) return n;
            if (!e) return n._events[t] = null, n;
            if (e) for (var a, s = o.length; s--; ) if ((a = o[s]) === e || a.fn === e) {
                o.splice(s, 1);
                break;
            }
            return n;
        }, t.prototype.$emit = function(t) {
            var e = this._events[t];
            if (e) {
                e = e.length > 1 ? De(e) : e;
                for (var n = De(arguments, 1), r = 0, i = e.length; r < i; r++) try {
                    e[r].apply(this, n);
                } catch (e) {
                    Xn(e, this, 'event handler for "' + t + '"');
                }
            }
            return this;
        };
    }(_i), function(t) {
        t.prototype._update = function(t, e) {
            var n = this;
            n._isMounted && $r(n, "beforeUpdate");
            var r = n.$el, i = n._vnode, o = xr;
            xr = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), 
            n.$options._parentElm = n.$options._refElm = null), xr = o, r && (r.__vue__ = null), 
            n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }, t.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update();
        }, t.prototype.$destroy = function() {
            var t = this;
            if (!t._isBeingDestroyed) {
                $r(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                var e = t.$parent;
                !e || e._isBeingDestroyed || t.$options.abstract || xe(e.$children, t), t._watcher && t._watcher.teardown();
                for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                $r(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.$vnode && (t.$vnode.parent = null);
            }
        };
    }(_i), function(t) {
        oi(t.prototype), t.prototype.$nextTick = function(t) {
            return cr(t, this);
        }, t.prototype._render = function() {
            var t, e = this, n = e.$options, r = n.render, i = n._parentVnode;
            i && (e.$scopedSlots = i.data.scopedSlots || he), e.$vnode = i;
            try {
                t = r.call(e._renderProxy, e.$createElement);
            } catch (n) {
                Xn(n, e, "render"), t = e._vnode;
            }
            return t instanceof Sn || (t = In()), t.parent = i, t;
        };
    }(_i);
    var Si = [ String, RegExp, Array ], Ai = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: Si,
                exclude: Si,
                max: [ String, Number ]
            },
            created: function() {
                this.cache = Object.create(null), this.keys = [];
            },
            destroyed: function() {
                for (var t in this.cache) wi(this.cache, t, this.keys);
            },
            mounted: function() {
                var t = this;
                this.$watch("include", function(e) {
                    bi(t, function(t) {
                        return Ci(e, t);
                    });
                }), this.$watch("exclude", function(e) {
                    bi(t, function(t) {
                        return !Ci(e, t);
                    });
                });
            },
            render: function() {
                var t = this.$slots.default, e = br(t), n = e && e.componentOptions;
                if (n) {
                    var r = yi(n), i = this.include, o = this.exclude;
                    if (i && (!r || !Ci(i, r)) || o && r && Ci(o, r)) return e;
                    var a = this.cache, s = this.keys, c = null == e.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : e.key;
                    a[c] ? (e.componentInstance = a[c].componentInstance, xe(s, c), s.push(c)) : (a[c] = e, 
                    s.push(c), this.max && s.length > parseInt(this.max) && wi(a, s[0], s, this._vnode)), 
                    e.data.keepAlive = !0;
                }
                return e || t && t[0];
            }
        }
    };
    !function(t) {
        var e = {
            get: function() {
                return Je;
            }
        };
        Object.defineProperty(t, "config", e), t.util = {
            warn: gn,
            extend: Ve,
            mergeOptions: Hn,
            defineReactive: Pn
        }, t.set = Nn, t.delete = Tn, t.nextTick = cr, t.options = Object.create(null), 
        qe.forEach(function(e) {
            t.options[e + "s"] = Object.create(null);
        }), t.options._base = t, Ve(t.options.components, Ai), function(t) {
            t.use = function(t) {
                var e = this._installedPlugins || (this._installedPlugins = []);
                if (e.indexOf(t) > -1) return this;
                var n = De(arguments, 1);
                return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                e.push(t), this;
            };
        }(t), function(t) {
            t.mixin = function(t) {
                return this.options = Hn(this.options, t), this;
            };
        }(t), function(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function(t) {
                t = t || {};
                var n = this, r = n.cid, i = t._Ctor || (t._Ctor = {});
                if (i[r]) return i[r];
                var o = t.name || n.options.name, a = function(t) {
                    this._init(t);
                };
                return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                a.options = Hn(n.options, t), a.super = n, a.options.props && function(t) {
                    var e = t.options.props;
                    for (var n in e) Mr(t.prototype, "_props", n);
                }(a), a.options.computed && function(t) {
                    var e = t.options.computed;
                    for (var n in e) Hr(t.prototype, n, e[n]);
                }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, qe.forEach(function(t) {
                    a[t] = n[t];
                }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, 
                a.sealedOptions = Ve({}, a.options), i[r] = a, a;
            };
        }(t), function(t) {
            qe.forEach(function(e) {
                t[e] = function(t, n) {
                    return n ? ("component" === e && we(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                    "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                };
            });
        }(t);
    }(_i), Object.defineProperty(_i.prototype, "$isServer", {
        get: pn
    }), Object.defineProperty(_i.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext;
        }
    }), Object.defineProperty(_i, "FunctionalRenderContext", {
        value: ai
    }), _i.version = "2.5.17";
    var Ii = ke("style,class"), ki = ke("input,textarea,option,select,progress"), Oi = ke("contenteditable,draggable,spellcheck"), xi = ke("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), Fi = "http://www.w3.org/1999/xlink", Ei = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5);
    }, $i = function(t) {
        return Ei(t) ? t.slice(6, t.length) : "";
    }, Li = function(t) {
        return null == t || !1 === t;
    };
    function Ri(t, e) {
        return {
            staticClass: Bi(t.staticClass, e.staticClass),
            class: ge(t.class) ? [ t.class, e.class ] : e.class
        };
    }
    function Bi(t, e) {
        return t ? e ? t + " " + e : t : e || "";
    }
    function Pi(t) {
        return Array.isArray(t) ? function(t) {
            for (var e, n = "", r = 0, i = t.length; r < i; r++) ge(e = Pi(t[r])) && "" !== e && (n && (n += " "), 
            n += e);
            return n;
        }(t) : Ce(t) ? function(t) {
            var e = "";
            for (var n in t) t[n] && (e && (e += " "), e += n);
            return e;
        }(t) : "string" == typeof t ? t : "";
    }
    var Ni = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, Ti = ke("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Di = ke("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Vi = function(t) {
        return Ti(t) || Di(t);
    }, Ui = Object.create(null), ji = ke("text,number,password,search,email,tel,url"), Mi = Object.freeze({
        createElement: function(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"), 
            n);
        },
        createElementNS: function(t, e) {
            return document.createElementNS(Ni[t], e);
        },
        createTextNode: function(t) {
            return document.createTextNode(t);
        },
        createComment: function(t) {
            return document.createComment(t);
        },
        insertBefore: function(t, e, n) {
            t.insertBefore(e, n);
        },
        removeChild: function(t, e) {
            t.removeChild(e);
        },
        appendChild: function(t, e) {
            t.appendChild(e);
        },
        parentNode: function(t) {
            return t.parentNode;
        },
        nextSibling: function(t) {
            return t.nextSibling;
        },
        tagName: function(t) {
            return t.tagName;
        },
        setTextContent: function(t, e) {
            t.textContent = e;
        },
        setStyleScope: function(t, e) {
            t.setAttribute(e, "");
        }
    }), Gi = {
        create: function(t, e) {
            Hi(e);
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (Hi(t, !0), Hi(e));
        },
        destroy: function(t) {
            Hi(t, !0);
        }
    };
    function Hi(t, e) {
        var n = t.data.ref;
        if (ge(n)) {
            var r = t.context, i = t.componentInstance || t.elm, o = r.$refs;
            e ? Array.isArray(o[n]) ? xe(o[n], i) : o[n] === i && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(i) < 0 && o[n].push(i) : o[n] = [ i ] : o[n] = i;
        }
    }
    var zi = new Sn("", {}, []), Wi = [ "create", "activate", "update", "remove", "destroy" ];
    function qi(t, e) {
        return t.key === e.key && (t.tag === e.tag && t.isComment === e.isComment && ge(t.data) === ge(e.data) && function(t, e) {
            if ("input" !== t.tag) return !0;
            var n, r = ge(n = t.data) && ge(n = n.attrs) && n.type, i = ge(n = e.data) && ge(n = n.attrs) && n.type;
            return r === i || ji(r) && ji(i);
        }(t, e) || _e(t.isAsyncPlaceholder) && t.asyncFactory === e.asyncFactory && me(e.asyncFactory.error));
    }
    function Ki(t, e, n) {
        var r, i, o = {};
        for (r = e; r <= n; ++r) ge(i = t[r].key) && (o[i] = r);
        return o;
    }
    var Ji = {
        create: Xi,
        update: Xi,
        destroy: function(t) {
            Xi(t, zi);
        }
    };
    function Xi(t, e) {
        (t.data.directives || e.data.directives) && function(t, e) {
            var n, r, i, o = t === zi, a = e === zi, s = Yi(t.data.directives, t.context), c = Yi(e.data.directives, e.context), l = [], d = [];
            for (n in c) r = s[n], i = c[n], r ? (i.oldValue = r.value, to(i, "update", e, t), 
            i.def && i.def.componentUpdated && d.push(i)) : (to(i, "bind", e, t), i.def && i.def.inserted && l.push(i));
            if (l.length) {
                var u = function() {
                    for (var n = 0; n < l.length; n++) to(l[n], "inserted", e, t);
                };
                o ? hr(e, "insert", u) : u();
            }
            if (d.length && hr(e, "postpatch", function() {
                for (var n = 0; n < d.length; n++) to(d[n], "componentUpdated", e, t);
            }), !o) for (n in s) c[n] || to(s[n], "unbind", t, t, a);
        }(t, e);
    }
    var Zi = Object.create(null);
    function Yi(t, e) {
        var n, r, i = Object.create(null);
        if (!t) return i;
        for (n = 0; n < t.length; n++) (r = t[n]).modifiers || (r.modifiers = Zi), i[Qi(r)] = r, 
        r.def = zn(e.$options, "directives", r.name);
        return i;
    }
    function Qi(t) {
        return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".");
    }
    function to(t, e, n, r, i) {
        var o = t.def && t.def[e];
        if (o) try {
            o(n.elm, t, n, r, i);
        } catch (r) {
            Xn(r, n.context, "directive " + t.name + " " + e + " hook");
        }
    }
    var eo = [ Gi, Ji ];
    function no(t, e) {
        var n = e.componentOptions;
        if (!(ge(n) && !1 === n.Ctor.options.inheritAttrs || me(t.data.attrs) && me(e.data.attrs))) {
            var r, i, o = e.elm, a = t.data.attrs || {}, s = e.data.attrs || {};
            for (r in ge(s.__ob__) && (s = e.data.attrs = Ve({}, s)), s) i = s[r], a[r] !== i && ro(o, r, i);
            for (r in (on || sn) && s.value !== a.value && ro(o, "value", s.value), a) me(s[r]) && (Ei(r) ? o.removeAttributeNS(Fi, $i(r)) : Oi(r) || o.removeAttribute(r));
        }
    }
    function ro(t, e, n) {
        t.tagName.indexOf("-") > -1 ? io(t, e, n) : xi(e) ? Li(n) ? t.removeAttribute(e) : (n = "allowfullscreen" === e && "EMBED" === t.tagName ? "true" : e, 
        t.setAttribute(e, n)) : Oi(e) ? t.setAttribute(e, Li(n) || "false" === n ? "false" : "true") : Ei(e) ? Li(n) ? t.removeAttributeNS(Fi, $i(e)) : t.setAttributeNS(Fi, e, n) : io(t, e, n);
    }
    function io(t, e, n) {
        if (Li(n)) t.removeAttribute(e); else {
            if (on && !an && "TEXTAREA" === t.tagName && "placeholder" === e && !t.__ieph) {
                var r = function(e) {
                    e.stopImmediatePropagation(), t.removeEventListener("input", r);
                };
                t.addEventListener("input", r), t.__ieph = !0;
            }
            t.setAttribute(e, n);
        }
    }
    var oo = {
        create: no,
        update: no
    };
    function ao(t, e) {
        var n = e.elm, r = e.data, i = t.data;
        if (!(me(r.staticClass) && me(r.class) && (me(i) || me(i.staticClass) && me(i.class)))) {
            var o = function(t) {
                for (var e = t.data, n = t, r = t; ge(r.componentInstance); ) (r = r.componentInstance._vnode) && r.data && (e = Ri(r.data, e));
                for (;ge(n = n.parent); ) n && n.data && (e = Ri(e, n.data));
                return i = e.staticClass, o = e.class, ge(i) || ge(o) ? Bi(i, Pi(o)) : "";
                var i, o;
            }(e), a = n._transitionClasses;
            ge(a) && (o = Bi(o, Pi(a))), o !== n._prevClass && (n.setAttribute("class", o), 
            n._prevClass = o);
        }
    }
    var so, co = {
        create: ao,
        update: ao
    }, lo = "__r", uo = "__c";
    function po(t, e, n, r, i) {
        var o;
        e = (o = e)._withTask || (o._withTask = function() {
            ir = !0;
            var t = o.apply(null, arguments);
            return ir = !1, t;
        }), n && (e = function(t, e, n) {
            var r = so;
            return function i() {
                null !== t.apply(null, arguments) && fo(e, i, n, r);
            };
        }(e, t, r)), so.addEventListener(t, e, dn ? {
            capture: r,
            passive: i
        } : r);
    }
    function fo(t, e, n, r) {
        (r || so).removeEventListener(t, e._withTask || e, n);
    }
    function vo(t, e) {
        if (!me(t.data.on) || !me(e.data.on)) {
            var n = e.data.on || {}, r = t.data.on || {};
            so = e.elm, function(t) {
                if (ge(t[lo])) {
                    var e = on ? "change" : "input";
                    t[e] = [].concat(t[lo], t[e] || []), delete t[lo];
                }
                ge(t[uo]) && (t.change = [].concat(t[uo], t.change || []), delete t[uo]);
            }(n), vr(n, r, po, fo, e.context), so = void 0;
        }
    }
    var ho = {
        create: vo,
        update: vo
    };
    function mo(t, e) {
        if (!me(t.data.domProps) || !me(e.data.domProps)) {
            var n, r, i = e.elm, o = t.data.domProps || {}, a = e.data.domProps || {};
            for (n in ge(a.__ob__) && (a = e.data.domProps = Ve({}, a)), o) me(a[n]) && (i[n] = "");
            for (n in a) {
                if (r = a[n], "textContent" === n || "innerHTML" === n) {
                    if (e.children && (e.children.length = 0), r === o[n]) continue;
                    1 === i.childNodes.length && i.removeChild(i.childNodes[0]);
                }
                if ("value" === n) {
                    i._value = r;
                    var s = me(r) ? "" : String(r);
                    go(i, s) && (i.value = s);
                } else i[n] = r;
            }
        }
    }
    function go(t, e) {
        return !t.composing && ("OPTION" === t.tagName || function(t, e) {
            var n = !0;
            try {
                n = document.activeElement !== t;
            } catch (t) {}
            return n && t.value !== e;
        }(t, e) || function(t, e) {
            var n = t.value, r = t._vModifiers;
            if (ge(r)) {
                if (r.lazy) return !1;
                if (r.number) return Ie(n) !== Ie(e);
                if (r.trim) return n.trim() !== e.trim();
            }
            return n !== e;
        }(t, e));
    }
    var _o = {
        create: mo,
        update: mo
    }, yo = $e(function(t) {
        var e = {}, n = /:(.+)/;
        return t.split(/;(?![^(]*\))/g).forEach(function(t) {
            if (t) {
                var r = t.split(n);
                r.length > 1 && (e[r[0].trim()] = r[1].trim());
            }
        }), e;
    });
    function Co(t) {
        var e = bo(t.style);
        return t.staticStyle ? Ve(t.staticStyle, e) : e;
    }
    function bo(t) {
        return Array.isArray(t) ? Ue(t) : "string" == typeof t ? yo(t) : t;
    }
    var wo, So = /^--/, Ao = /\s*!important$/, Io = function(t, e, n) {
        if (So.test(e)) t.style.setProperty(e, n); else if (Ao.test(n)) t.style.setProperty(e, n.replace(Ao, ""), "important"); else {
            var r = Oo(e);
            if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) t.style[r] = n[i]; else t.style[r] = n;
        }
    }, ko = [ "Webkit", "Moz", "ms" ], Oo = $e(function(t) {
        if (wo = wo || document.createElement("div").style, "filter" !== (t = Re(t)) && t in wo) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ko.length; n++) {
            var r = ko[n] + e;
            if (r in wo) return r;
        }
    });
    function xo(t, e) {
        var n = e.data, r = t.data;
        if (!(me(n.staticStyle) && me(n.style) && me(r.staticStyle) && me(r.style))) {
            var i, o, a = e.elm, s = r.staticStyle, c = r.normalizedStyle || r.style || {}, l = s || c, d = bo(e.data.style) || {};
            e.data.normalizedStyle = ge(d.__ob__) ? Ve({}, d) : d;
            var u = function(t, e) {
                for (var n, r = {}, i = t; i.componentInstance; ) (i = i.componentInstance._vnode) && i.data && (n = Co(i.data)) && Ve(r, n);
                (n = Co(t.data)) && Ve(r, n);
                for (var o = t; o = o.parent; ) o.data && (n = Co(o.data)) && Ve(r, n);
                return r;
            }(e);
            for (o in l) me(u[o]) && Io(a, o, "");
            for (o in u) (i = u[o]) !== l[o] && Io(a, o, null == i ? "" : i);
        }
    }
    var Fo = {
        create: xo,
        update: xo
    };
    function Eo(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.add(e);
        }) : t.classList.add(e); else {
            var n = " " + (t.getAttribute("class") || "") + " ";
            n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
        }
    }
    function $o(t, e) {
        if (e && (e = e.trim())) if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
            return t.classList.remove(e);
        }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class"); else {
            for (var n = " " + (t.getAttribute("class") || "") + " ", r = " " + e + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
            (n = n.trim()) ? t.setAttribute("class", n) : t.removeAttribute("class");
        }
    }
    function Lo(t) {
        if (t) {
            if ("object" == typeof t) {
                var e = {};
                return !1 !== t.css && Ve(e, Ro(t.name || "v")), Ve(e, t), e;
            }
            return "string" == typeof t ? Ro(t) : void 0;
        }
    }
    var Ro = $e(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        };
    }), Bo = tn && !an, Po = "transition", No = "animation", To = "transition", Do = "transitionend", Vo = "animation", Uo = "animationend";
    Bo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (To = "WebkitTransition", 
    Do = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Vo = "WebkitAnimation", 
    Uo = "webkitAnimationEnd"));
    var jo = tn ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(t) {
        return t();
    };
    function Mo(t) {
        jo(function() {
            jo(t);
        });
    }
    function Go(t, e) {
        var n = t._transitionClasses || (t._transitionClasses = []);
        n.indexOf(e) < 0 && (n.push(e), Eo(t, e));
    }
    function Ho(t, e) {
        t._transitionClasses && xe(t._transitionClasses, e), $o(t, e);
    }
    function zo(t, e, n) {
        var r = qo(t, e), i = r.type, o = r.timeout, a = r.propCount;
        if (!i) return n();
        var s = i === Po ? Do : Uo, c = 0, l = function() {
            t.removeEventListener(s, d), n();
        }, d = function(e) {
            e.target === t && ++c >= a && l();
        };
        setTimeout(function() {
            c < a && l();
        }, o + 1), t.addEventListener(s, d);
    }
    var Wo = /\b(transform|all)(,|$)/;
    function qo(t, e) {
        var n, r = window.getComputedStyle(t), i = r[To + "Delay"].split(", "), o = r[To + "Duration"].split(", "), a = Ko(i, o), s = r[Vo + "Delay"].split(", "), c = r[Vo + "Duration"].split(", "), l = Ko(s, c), d = 0, u = 0;
        return e === Po ? a > 0 && (n = Po, d = a, u = o.length) : e === No ? l > 0 && (n = No, 
        d = l, u = c.length) : u = (n = (d = Math.max(a, l)) > 0 ? a > l ? Po : No : null) ? n === Po ? o.length : c.length : 0, 
        {
            type: n,
            timeout: d,
            propCount: u,
            hasTransform: n === Po && Wo.test(r[To + "Property"])
        };
    }
    function Ko(t, e) {
        for (;t.length < e.length; ) t = t.concat(t);
        return Math.max.apply(null, e.map(function(e, n) {
            return Jo(e) + Jo(t[n]);
        }));
    }
    function Jo(t) {
        return 1e3 * Number(t.slice(0, -1));
    }
    function Xo(t, e) {
        var n = t.elm;
        ge(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
        var r = Lo(t.data.transition);
        if (!me(r) && !ge(n._enterCb) && 1 === n.nodeType) {
            for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, c = r.enterActiveClass, l = r.appearClass, d = r.appearToClass, u = r.appearActiveClass, p = r.beforeEnter, f = r.enter, v = r.afterEnter, h = r.enterCancelled, m = r.beforeAppear, g = r.appear, _ = r.afterAppear, y = r.appearCancelled, C = r.duration, b = xr, w = xr.$vnode; w && w.parent; ) b = (w = w.parent).context;
            var S = !b._isMounted || !t.isRootInsert;
            if (!S || g || "" === g) {
                var A = S && l ? l : a, I = S && u ? u : c, k = S && d ? d : s, O = S && m || p, x = S && "function" == typeof g ? g : f, F = S && _ || v, E = S && y || h, $ = Ie(Ce(C) ? C.enter : C), L = !1 !== i && !an, R = Qo(x), B = n._enterCb = We(function() {
                    L && (Ho(n, k), Ho(n, I)), B.cancelled ? (L && Ho(n, A), E && E(n)) : F && F(n), 
                    n._enterCb = null;
                });
                t.data.show || hr(t, "insert", function() {
                    var e = n.parentNode, r = e && e._pending && e._pending[t.key];
                    r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), x && x(n, B);
                }), O && O(n), L && (Go(n, A), Go(n, I), Mo(function() {
                    Ho(n, A), B.cancelled || (Go(n, k), R || (Yo($) ? setTimeout(B, $) : zo(n, o, B)));
                })), t.data.show && (e && e(), x && x(n, B)), L || R || B();
            }
        }
    }
    function Zo(t, e) {
        var n = t.elm;
        ge(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
        var r = Lo(t.data.transition);
        if (me(r) || 1 !== n.nodeType) return e();
        if (!ge(n._leaveCb)) {
            var i = r.css, o = r.type, a = r.leaveClass, s = r.leaveToClass, c = r.leaveActiveClass, l = r.beforeLeave, d = r.leave, u = r.afterLeave, p = r.leaveCancelled, f = r.delayLeave, v = r.duration, h = !1 !== i && !an, m = Qo(d), g = Ie(Ce(v) ? v.leave : v), _ = n._leaveCb = We(function() {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), 
                h && (Ho(n, s), Ho(n, c)), _.cancelled ? (h && Ho(n, a), p && p(n)) : (e(), u && u(n)), 
                n._leaveCb = null;
            });
            f ? f(y) : y();
        }
        function y() {
            _.cancelled || (t.data.show || ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), 
            l && l(n), h && (Go(n, a), Go(n, c), Mo(function() {
                Ho(n, a), _.cancelled || (Go(n, s), m || (Yo(g) ? setTimeout(_, g) : zo(n, o, _)));
            })), d && d(n, _), h || m || _());
        }
    }
    function Yo(t) {
        return "number" == typeof t && !isNaN(t);
    }
    function Qo(t) {
        if (me(t)) return !1;
        var e = t.fns;
        return ge(e) ? Qo(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
    }
    function ta(t, e) {
        !0 !== e.data.show && Xo(e);
    }
    var ea = function(t) {
        var e, n, r = {}, i = t.modules, o = t.nodeOps;
        for (e = 0; e < Wi.length; ++e) for (r[Wi[e]] = [], n = 0; n < i.length; ++n) ge(i[n][Wi[e]]) && r[Wi[e]].push(i[n][Wi[e]]);
        function a(t) {
            var e = o.parentNode(t);
            ge(e) && o.removeChild(e, t);
        }
        function s(t, e, n, i, a, s, u) {
            if (ge(t.elm) && ge(s) && (t = s[u] = On(t)), t.isRootInsert = !a, !function(t, e, n, i) {
                var o = t.data;
                if (ge(o)) {
                    var a = ge(t.componentInstance) && o.keepAlive;
                    if (ge(o = o.hook) && ge(o = o.init) && o(t, !1, n, i), ge(t.componentInstance)) return c(t, e), 
                    _e(a) && function(t, e, n, i) {
                        for (var o, a = t; a.componentInstance; ) if (ge(o = (a = a.componentInstance._vnode).data) && ge(o = o.transition)) {
                            for (o = 0; o < r.activate.length; ++o) r.activate[o](zi, a);
                            e.push(a);
                            break;
                        }
                        l(n, t.elm, i);
                    }(t, e, n, i), !0;
                }
            }(t, e, n, i)) {
                var v = t.data, h = t.children, m = t.tag;
                ge(m) ? (t.elm = t.ns ? o.createElementNS(t.ns, m) : o.createElement(m, t), f(t), 
                d(t, h, e), ge(v) && p(t, e), l(n, t.elm, i)) : _e(t.isComment) ? (t.elm = o.createComment(t.text), 
                l(n, t.elm, i)) : (t.elm = o.createTextNode(t.text), l(n, t.elm, i));
            }
        }
        function c(t, e) {
            ge(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), 
            t.elm = t.componentInstance.$el, u(t) ? (p(t, e), f(t)) : (Hi(t), e.push(t));
        }
        function l(t, e, n) {
            ge(t) && (ge(n) ? n.parentNode === t && o.insertBefore(t, e, n) : o.appendChild(t, e));
        }
        function d(t, e, n) {
            if (Array.isArray(e)) for (var r = 0; r < e.length; ++r) s(e[r], n, t.elm, null, !0, e, r); else ye(t.text) && o.appendChild(t.elm, o.createTextNode(String(t.text)));
        }
        function u(t) {
            for (;t.componentInstance; ) t = t.componentInstance._vnode;
            return ge(t.tag);
        }
        function p(t, n) {
            for (var i = 0; i < r.create.length; ++i) r.create[i](zi, t);
            ge(e = t.data.hook) && (ge(e.create) && e.create(zi, t), ge(e.insert) && n.push(t));
        }
        function f(t) {
            var e;
            if (ge(e = t.fnScopeId)) o.setStyleScope(t.elm, e); else for (var n = t; n; ) ge(e = n.context) && ge(e = e.$options._scopeId) && o.setStyleScope(t.elm, e), 
            n = n.parent;
            ge(e = xr) && e !== t.context && e !== t.fnContext && ge(e = e.$options._scopeId) && o.setStyleScope(t.elm, e);
        }
        function v(t, e, n, r, i, o) {
            for (;r <= i; ++r) s(n[r], o, t, e, !1, n, r);
        }
        function h(t) {
            var e, n, i = t.data;
            if (ge(i)) for (ge(e = i.hook) && ge(e = e.destroy) && e(t), e = 0; e < r.destroy.length; ++e) r.destroy[e](t);
            if (ge(e = t.children)) for (n = 0; n < t.children.length; ++n) h(t.children[n]);
        }
        function m(t, e, n, r) {
            for (;n <= r; ++n) {
                var i = e[n];
                ge(i) && (ge(i.tag) ? (g(i), h(i)) : a(i.elm));
            }
        }
        function g(t, e) {
            if (ge(e) || ge(t.data)) {
                var n, i = r.remove.length + 1;
                for (ge(e) ? e.listeners += i : e = function(t, e) {
                    function n() {
                        0 == --n.listeners && a(t);
                    }
                    return n.listeners = e, n;
                }(t.elm, i), ge(n = t.componentInstance) && ge(n = n._vnode) && ge(n.data) && g(n, e), 
                n = 0; n < r.remove.length; ++n) r.remove[n](t, e);
                ge(n = t.data.hook) && ge(n = n.remove) ? n(t, e) : e();
            } else a(t.elm);
        }
        function _(t, e, n, r) {
            for (var i = n; i < r; i++) {
                var o = e[i];
                if (ge(o) && qi(t, o)) return i;
            }
        }
        function y(t, e, n) {
            if (_e(n) && ge(t.parent)) t.parent.data.pendingInsert = e; else for (var r = 0; r < e.length; ++r) e[r].data.hook.insert(e[r]);
        }
        var C = ke("attrs,class,staticClass,staticStyle,key");
        function b(t, e, n, r) {
            var i, o = e.tag, a = e.data, s = e.children;
            if (r = r || a && a.pre, e.elm = t, _e(e.isComment) && ge(e.asyncFactory)) return e.isAsyncPlaceholder = !0, 
            !0;
            if (ge(a) && (ge(i = a.hook) && ge(i = i.init) && i(e, !0), ge(i = e.componentInstance))) return c(e, n), 
            !0;
            if (ge(o)) {
                if (ge(s)) if (t.hasChildNodes()) if (ge(i = a) && ge(i = i.domProps) && ge(i = i.innerHTML)) {
                    if (i !== t.innerHTML) return !1;
                } else {
                    for (var l = !0, u = t.firstChild, f = 0; f < s.length; f++) {
                        if (!u || !b(u, s[f], n, r)) {
                            l = !1;
                            break;
                        }
                        u = u.nextSibling;
                    }
                    if (!l || u) return !1;
                } else d(e, s, n);
                if (ge(a)) {
                    var v = !1;
                    for (var h in a) if (!C(h)) {
                        v = !0, p(e, n);
                        break;
                    }
                    !v && a.class && dr(a.class);
                }
            } else t.data !== e.text && (t.data = e.text);
            return !0;
        }
        return function(t, e, n, i, a, c) {
            if (!me(e)) {
                var l, d = !1, p = [];
                if (me(t)) d = !0, s(e, p, a, c); else {
                    var f = ge(t.nodeType);
                    if (!f && qi(t, e)) !function t(e, n, i, a) {
                        if (e !== n) {
                            var c = n.elm = e.elm;
                            if (_e(e.isAsyncPlaceholder)) ge(n.asyncFactory.resolved) ? b(e.elm, n, i) : n.isAsyncPlaceholder = !0; else if (_e(n.isStatic) && _e(e.isStatic) && n.key === e.key && (_e(n.isCloned) || _e(n.isOnce))) n.componentInstance = e.componentInstance; else {
                                var l, d = n.data;
                                ge(d) && ge(l = d.hook) && ge(l = l.prepatch) && l(e, n);
                                var p = e.children, f = n.children;
                                if (ge(d) && u(n)) {
                                    for (l = 0; l < r.update.length; ++l) r.update[l](e, n);
                                    ge(l = d.hook) && ge(l = l.update) && l(e, n);
                                }
                                me(n.text) ? ge(p) && ge(f) ? p !== f && function(e, n, r, i, a) {
                                    for (var c, l, d, u = 0, p = 0, f = n.length - 1, h = n[0], g = n[f], y = r.length - 1, C = r[0], b = r[y], w = !a; u <= f && p <= y; ) me(h) ? h = n[++u] : me(g) ? g = n[--f] : qi(h, C) ? (t(h, C, i), 
                                    h = n[++u], C = r[++p]) : qi(g, b) ? (t(g, b, i), g = n[--f], b = r[--y]) : qi(h, b) ? (t(h, b, i), 
                                    w && o.insertBefore(e, h.elm, o.nextSibling(g.elm)), h = n[++u], b = r[--y]) : qi(g, C) ? (t(g, C, i), 
                                    w && o.insertBefore(e, g.elm, h.elm), g = n[--f], C = r[++p]) : (me(c) && (c = Ki(n, u, f)), 
                                    me(l = ge(C.key) ? c[C.key] : _(C, n, u, f)) ? s(C, i, e, h.elm, !1, r, p) : qi(d = n[l], C) ? (t(d, C, i), 
                                    n[l] = void 0, w && o.insertBefore(e, d.elm, h.elm)) : s(C, i, e, h.elm, !1, r, p), 
                                    C = r[++p]);
                                    u > f ? v(e, me(r[y + 1]) ? null : r[y + 1].elm, r, p, y, i) : p > y && m(0, n, u, f);
                                }(c, p, f, i, a) : ge(f) ? (ge(e.text) && o.setTextContent(c, ""), v(c, null, f, 0, f.length - 1, i)) : ge(p) ? m(0, p, 0, p.length - 1) : ge(e.text) && o.setTextContent(c, "") : e.text !== n.text && o.setTextContent(c, n.text), 
                                ge(d) && ge(l = d.hook) && ge(l = l.postpatch) && l(e, n);
                            }
                        }
                    }(t, e, p, i); else {
                        if (f) {
                            if (1 === t.nodeType && t.hasAttribute("data-server-rendered") && (t.removeAttribute("data-server-rendered"), 
                            n = !0), _e(n) && b(t, e, p)) return y(e, p, !0), t;
                            l = t, t = new Sn(o.tagName(l).toLowerCase(), {}, [], void 0, l);
                        }
                        var g = t.elm, C = o.parentNode(g);
                        if (s(e, p, g._leaveCb ? null : C, o.nextSibling(g)), ge(e.parent)) for (var w = e.parent, S = u(e); w; ) {
                            for (var A = 0; A < r.destroy.length; ++A) r.destroy[A](w);
                            if (w.elm = e.elm, S) {
                                for (var I = 0; I < r.create.length; ++I) r.create[I](zi, w);
                                var k = w.data.hook.insert;
                                if (k.merged) for (var O = 1; O < k.fns.length; O++) k.fns[O]();
                            } else Hi(w);
                            w = w.parent;
                        }
                        ge(C) ? m(0, [ t ], 0, 0) : ge(t.tag) && h(t);
                    }
                }
                return y(e, p, d), e.elm;
            }
            ge(t) && h(t);
        };
    }({
        nodeOps: Mi,
        modules: [ oo, co, ho, _o, Fo, tn ? {
            create: ta,
            activate: ta,
            remove: function(t, e) {
                !0 !== t.data.show ? Zo(t, e) : e();
            }
        } : {} ].concat(eo)
    });
    an && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && la(t, "input");
    });
    var na = {
        inserted: function(t, e, n, r) {
            "select" === n.tag ? (r.elm && !r.elm._vOptions ? hr(n, "postpatch", function() {
                na.componentUpdated(t, e, n);
            }) : ra(t, e, n.context), t._vOptions = [].map.call(t.options, aa)) : ("textarea" === n.tag || ji(t.type)) && (t._vModifiers = e.modifiers, 
            e.modifiers.lazy || (t.addEventListener("compositionstart", sa), t.addEventListener("compositionend", ca), 
            t.addEventListener("change", ca), an && (t.vmodel = !0)));
        },
        componentUpdated: function(t, e, n) {
            if ("select" === n.tag) {
                ra(t, e, n.context);
                var r = t._vOptions, i = t._vOptions = [].map.call(t.options, aa);
                i.some(function(t, e) {
                    return !He(t, r[e]);
                }) && (t.multiple ? e.value.some(function(t) {
                    return oa(t, i);
                }) : e.value !== e.oldValue && oa(e.value, i)) && la(t, "change");
            }
        }
    };
    function ra(t, e, n) {
        ia(t, e), (on || sn) && setTimeout(function() {
            ia(t, e);
        }, 0);
    }
    function ia(t, e, n) {
        var r = e.value, i = t.multiple;
        if (!i || Array.isArray(r)) {
            for (var o, a, s = 0, c = t.options.length; s < c; s++) if (a = t.options[s], i) o = ze(r, aa(a)) > -1, 
            a.selected !== o && (a.selected = o); else if (He(aa(a), r)) return void (t.selectedIndex !== s && (t.selectedIndex = s));
            i || (t.selectedIndex = -1);
        }
    }
    function oa(t, e) {
        return e.every(function(e) {
            return !He(e, t);
        });
    }
    function aa(t) {
        return "_value" in t ? t._value : t.value;
    }
    function sa(t) {
        t.target.composing = !0;
    }
    function ca(t) {
        t.target.composing && (t.target.composing = !1, la(t.target, "input"));
    }
    function la(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function da(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : da(t.componentInstance._vnode);
    }
    var ua = {
        model: na,
        show: {
            bind: function(t, e, n) {
                var r = e.value, i = (n = da(n)).data && n.data.transition, o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && i ? (n.data.show = !0, Xo(n, function() {
                    t.style.display = o;
                })) : t.style.display = r ? o : "none";
            },
            update: function(t, e, n) {
                var r = e.value;
                !r != !e.oldValue && ((n = da(n)).data && n.data.transition ? (n.data.show = !0, 
                r ? Xo(n, function() {
                    t.style.display = t.__vOriginalDisplay;
                }) : Zo(n, function() {
                    t.style.display = "none";
                })) : t.style.display = r ? t.__vOriginalDisplay : "none");
            },
            unbind: function(t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay);
            }
        }
    }, pa = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [ Number, String, Object ]
    };
    function fa(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? fa(br(e.children)) : t;
    }
    function va(t) {
        var e = {}, n = t.$options;
        for (var r in n.propsData) e[r] = t[r];
        var i = n._parentListeners;
        for (var o in i) e[Re(o)] = i[o];
        return e;
    }
    function ha(t, e) {
        if (/\d-keep-alive$/.test(e.tag)) return t("keep-alive", {
            props: e.componentOptions.propsData
        });
    }
    var ma = {
        name: "transition",
        props: pa,
        abstract: !0,
        render: function(t) {
            var e = this, n = this.$slots.default;
            if (n && (n = n.filter(function(t) {
                return t.tag || Cr(t);
            })).length) {
                var r = this.mode, i = n[0];
                if (function(t) {
                    for (;t = t.parent; ) if (t.data.transition) return !0;
                }(this.$vnode)) return i;
                var o = fa(i);
                if (!o) return i;
                if (this._leaving) return ha(t, i);
                var a = "__transition-" + this._uid + "-";
                o.key = null == o.key ? o.isComment ? a + "comment" : a + o.tag : ye(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key;
                var s = (o.data || (o.data = {})).transition = va(this), c = this._vnode, l = fa(c);
                if (o.data.directives && o.data.directives.some(function(t) {
                    return "show" === t.name;
                }) && (o.data.show = !0), l && l.data && !function(t, e) {
                    return e.key === t.key && e.tag === t.tag;
                }(o, l) && !Cr(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
                    var d = l.data.transition = Ve({}, s);
                    if ("out-in" === r) return this._leaving = !0, hr(d, "afterLeave", function() {
                        e._leaving = !1, e.$forceUpdate();
                    }), ha(t, i);
                    if ("in-out" === r) {
                        if (Cr(o)) return c;
                        var u, p = function() {
                            u();
                        };
                        hr(s, "afterEnter", p), hr(s, "enterCancelled", p), hr(d, "delayLeave", function(t) {
                            u = t;
                        });
                    }
                }
                return i;
            }
        }
    }, ga = Ve({
        tag: String,
        moveClass: String
    }, pa);
    function _a(t) {
        t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function ya(t) {
        t.data.newPos = t.elm.getBoundingClientRect();
    }
    function Ca(t) {
        var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, i = e.top - n.top;
        if (r || i) {
            t.data.moved = !0;
            var o = t.elm.style;
            o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
        }
    }
    delete ga.mode;
    var ba = {
        Transition: ma,
        TransitionGroup: {
            props: ga,
            render: function(t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = va(this), s = 0; s < i.length; s++) {
                    var c = i[s];
                    c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), 
                    n[c.key] = c, (c.data || (c.data = {})).transition = a);
                }
                if (r) {
                    for (var l = [], d = [], u = 0; u < r.length; u++) {
                        var p = r[u];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? l.push(p) : d.push(p);
                    }
                    this.kept = t(e, null, l), this.removed = d;
                }
                return t(e, null, o);
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
            },
            updated: function() {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                t.length && this.hasMove(t[0].elm, e) && (t.forEach(_a), t.forEach(ya), t.forEach(Ca), 
                this._reflow = document.body.offsetHeight, t.forEach(function(t) {
                    if (t.data.moved) {
                        var n = t.elm, r = n.style;
                        Go(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Do, n._moveCb = function t(r) {
                            r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Do, t), n._moveCb = null, 
                            Ho(n, e));
                        });
                    }
                }));
            },
            methods: {
                hasMove: function(t, e) {
                    if (!Bo) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = t.cloneNode();
                    t._transitionClasses && t._transitionClasses.forEach(function(t) {
                        $o(n, t);
                    }), Eo(n, e), n.style.display = "none", this.$el.appendChild(n);
                    var r = qo(n);
                    return this.$el.removeChild(n), this._hasMove = r.hasTransform;
                }
            }
        }
    };
    _i.config.mustUseProp = function(t, e, n) {
        return "value" === n && ki(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t;
    }, _i.config.isReservedTag = Vi, _i.config.isReservedAttr = Ii, _i.config.getTagNamespace = function(t) {
        return Di(t) ? "svg" : "math" === t ? "math" : void 0;
    }, _i.config.isUnknownElement = function(t) {
        if (!tn) return !0;
        if (Vi(t)) return !1;
        if (t = t.toLowerCase(), null != Ui[t]) return Ui[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1 ? Ui[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ui[t] = /HTMLUnknownElement/.test(e.toString());
    }, Ve(_i.options.directives, ua), Ve(_i.options.components, ba), _i.prototype.__patch__ = tn ? ea : je, 
    _i.prototype.$mount = function(t, e) {
        return function(t, e, n) {
            var r;
            return t.$el = e, t.$options.render || (t.$options.render = In), $r(t, "beforeMount"), 
            r = function() {
                t._update(t._render(), n);
            }, new Ur(t, r, je, null, !0), n = !1, null == t.$vnode && (t._isMounted = !0, $r(t, "mounted")), 
            t;
        }(this, t = t && tn ? function(t) {
            return "string" == typeof t ? document.querySelector(t) || document.createElement("div") : t;
        }(t) : void 0, e);
    }, tn && setTimeout(function() {
        Je.devtools && fn && fn.emit("init", _i);
    }, 0);
    const wa = D("browserStorage");
    let Sa;
    !function(t) {
        t.Startup = "startup", t.GetState = "getState", t.StateChange = "stateChange", t.Installed = "installed", 
        t.Updated = "updated";
    }(Sa || (Sa = {}));
    const Aa = () => C(Sa.GetState);
    "undefined" != typeof chrome && void 0 !== chrome.runtime || (window.chrome = browser);
    const Ia = new class {
        constructor() {
            Dt(this, "cache", void 0), Dt(this, "usingStorage", void 0), this.cache = {}, this.usingStorage = !1;
        }
        init(t) {
            return new Promise(e => {
                chrome && chrome.storage || e(), this.usingStorage = !0, chrome.storage.local.get(t || null, t => {
                    this.cache = t, e();
                });
            });
        }
        get(t) {
            return this.cache[t];
        }
        set(t, e) {
            null == e || void 0 === e ? (this.usingStorage && chrome.storage.local.remove(t, () => {
                chrome.runtime.lastError && wa('could not remove key "%s" from browser storage (%O)', t, chrome.runtime.lastError);
            }), delete this.cache[t]) : (this.usingStorage && chrome.storage.local.set({
                [t]: e
            }, () => {
                chrome.runtime.lastError && wa('could not set key "%s" in browser storage (%O)', t, chrome.runtime.lastError);
            }), this.cache[t] = e);
        }
    }();
    let ka;
    const Oa = D("popup");
    Ia.init().then(function() {
        var t, e;
        return t = Sa.StateChange, e = (t => {
            Oa("background state changed: %O", t.state), ka && ka(t.state);
        }), chrome.runtime.onMessage.addListener(function(n, r, i) {
            n && n.type && n.value && n.type === t && e && e(n.value);
        }), new Promise(function(t) {
            U(Aa(), e => {
                Oa("background state: %O", e.state), t(e.state);
            });
        });
    }).then(function(t) {
        _i.mixin({
            methods: {
                translate: (t, e) => (function(t, e) {
                    return t ? e ? chrome.i18n.getMessage(t, e) : chrome.i18n.getMessage(t) : "";
                })(t, e)
            }
        });
        const e = new _i({
            components: {
                Popup: ve
            },
            data: {
                bgState: t,
                hash: location.hash
            },
            el: "#app",
            render(t) {
                return t(ve, {
                    props: {
                        bgState: this.bgState,
                        hash: this.hash,
                        storage: Ia
                    }
                });
            }
        });
        ka = (t => {
            e.bgState = t;
        }), window.addEventListener("hashchange", () => {
            e.hash = location.hash.replace("#", "");
        }, !1);
    });
}();
