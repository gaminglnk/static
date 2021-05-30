// This is the script for StreamPaper video player.
"object" == typeof navigator && function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = e || self).Plyr = t()
}(this, (function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function a(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function r(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(i), !0).forEach((function(t) {
                a(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function o(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var i = [],
                n = !0,
                a = !1,
                r = void 0;
            try {
                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); n = !0);
            } catch (e) {
                a = !0, r = e
            } finally {
                try {
                    n || null == o.return || o.return()
                } finally {
                    if (a) throw r
                }
            }
            return i
        }(e, t) || c(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e) {
        return function(e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || c(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(i) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0
        }
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }

    function d(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function h(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function p(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), i.push.apply(i, n)
        }
        return i
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(i), !0).forEach((function(t) {
                h(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : p(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }
    var f = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };

    function g(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }
    var y = function(e) {
            return null != e ? e.constructor : null
        },
        v = function(e, t) {
            return !!(e && t && e instanceof t)
        },
        b = function(e) {
            return null == e
        },
        w = function(e) {
            return y(e) === Object
        },
        k = function(e) {
            return y(e) === String
        },
        T = function(e) {
            return Array.isArray(e)
        },
        E = function(e) {
            return v(e, NodeList)
        },
        C = k,
        S = T,
        A = E,
        P = function(e) {
            return v(e, Element)
        },
        _ = function(e) {
            return v(e, Event)
        },
        x = function(e) {
            return b(e) || (k(e) || T(e) || E(e)) && !e.length || w(e) && !Object.keys(e).length
        };

    function M(e, t) {
        if (1 > t) {
            var i = function(e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(i))
        }
        return Math.round(e / t) * t
    }
    var L, N, O, I = function() {
            function e(t, i) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), P(t) ? this.element = t : C(t) && (this.element = document.querySelector(t)), P(this.element) && x(this.element.rangeTouch) && (this.config = m({}, f, {}, i), this.init())
            }
            return function(e, t, i) {
                t && d(e.prototype, t), i && d(e, i)
            }(e, [{
                key: "init",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                }
            }, {
                key: "destroy",
                value: function() {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                }
            }, {
                key: "listeners",
                value: function(e) {
                    var t = this,
                        i = e ? "addEventListener" : "removeEventListener";
                    ["touchstart", "touchmove", "touchend"].forEach((function(e) {
                        t.element[i](e, (function(e) {
                            return t.set(e)
                        }), !1)
                    }))
                }
            }, {
                key: "get",
                value: function(t) {
                    if (!e.enabled || !_(t)) return null;
                    var i, n = t.target,
                        a = t.changedTouches[0],
                        r = parseFloat(n.getAttribute("min")) || 0,
                        s = parseFloat(n.getAttribute("max")) || 100,
                        o = parseFloat(n.getAttribute("step")) || 1,
                        l = n.getBoundingClientRect(),
                        c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (i = 100 / l.width * (a.clientX - l.left)) ? i = 0 : 100 < i && (i = 100), 50 > i ? i -= (100 - 2 * i) * c : 50 < i && (i += 2 * (i - 50) * c), r + M(i / 100 * (s - r), o)
                }
            }, {
                key: "set",
                value: function(t) {
                    e.enabled && _(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function(e, t) {
                        if (e && t) {
                            var i = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(i)
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"))
                }
            }], [{
                key: "setup",
                value: function(t) {
                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = null;
                    if (x(t) || C(t) ? n = Array.from(document.querySelectorAll(C(t) ? t : 'input[type="range"]')) : P(t) ? n = [t] : A(t) ? n = Array.from(t) : S(t) && (n = t.filter(P)), x(n)) return null;
                    var a = m({}, f, {}, i);
                    if (C(t) && a.watch) {
                        var r = new MutationObserver((function(i) {
                            Array.from(i).forEach((function(i) {
                                Array.from(i.addedNodes).forEach((function(i) {
                                    P(i) && g(i, t) && new e(i, a)
                                }))
                            }))
                        }));
                        r.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    return n.map((function(t) {
                        return new e(t, i)
                    }))
                }
            }, {
                key: "enabled",
                get: function() {
                    return "ontouchstart" in document.documentElement
                }
            }]), e
        }(),
        R = function(e) {
            return null != e ? e.constructor : null
        },
        D = function(e, t) {
            return Boolean(e && t && e instanceof t)
        },
        j = function(e) {
            return null == e
        },
        q = function(e) {
            return R(e) === Object
        },
        H = function(e) {
            return R(e) === String
        },
        V = function(e) {
            return Array.isArray(e)
        },
        U = function(e) {
            return D(e, NodeList)
        },
        B = function(e) {
            return j(e) || (H(e) || V(e) || U(e)) && !e.length || q(e) && !Object.keys(e).length
        },
        z = j,
        W = q,
        K = function(e) {
            return R(e) === Number && !Number.isNaN(e)
        },
        G = H,
        J = function(e) {
            return R(e) === Boolean
        },
        Y = function(e) {
            return R(e) === Function
        },
        X = V,
        Q = U,
        Z = function(e) {
            return D(e, Element)
        },
        ee = function(e) {
            return D(e, Event)
        },
        te = function(e) {
            return D(e, KeyboardEvent)
        },
        ie = function(e) {
            return D(e, TextTrack) || !j(e) && H(e.kind)
        },
        ne = function(e) {
            if (D(e, window.URL)) return !0;
            if (!H(e)) return !1;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
            try {
                return !B(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        ae = B,
        re = (L = document.createElement("span"), N = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, O = Object.keys(N).find((function(e) {
            return void 0 !== L.style[e]
        })), !!G(O) && N[O]);

    function se(e, t) {
        setTimeout((function() {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {}
        }), t)
    }
    var oe = {
        isIE:

            /* @cc_on!@ */

            !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
        isAndroid: navigator.userAgent.toLowerCase().indexOf("android") > -1,
        isMobile: navigator.userAgent.toLowerCase().indexOf("mobile") > -1
    };

    function le(e, t) {
        return t.split(".").reduce((function(e, t) {
            return e && e[t]
        }), e)
    }

    function ce() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        if (!i.length) return e;
        var r = i.shift();
        return W(r) ? (Object.keys(r).forEach((function(t) {
            W(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, a({}, t, {})), ce(e[t], r[t])) : Object.assign(e, a({}, t, r[t]))
        })), ce.apply(void 0, [e].concat(i))) : e
    }

    function ue(e, t) {
        var i = e.length ? e : [e];
        Array.from(i).reverse().forEach((function(e, i) {
            var n = i > 0 ? t.cloneNode(!0) : t,
                a = e.parentNode,
                r = e.nextSibling;
            n.appendChild(e), r ? a.insertBefore(n, r) : a.appendChild(n)
        }))
    }

    function de(e, t) {
        Z(e) && !ae(t) && Object.entries(t).filter((function(e) {
            var t = o(e, 2)[1];
            return !z(t)
        })).forEach((function(t) {
            var i = o(t, 2),
                n = i[0],
                a = i[1];
            return e.setAttribute(n, a)
        }))
    }

    function he(e, t, i) {
        var n = document.createElement(e);
        return W(t) && de(n, t), G(i) && (n.innerText = i), n
    }

    function pe(e, t, i, n) {
        Z(t) && t.appendChild(he(e, i, n))
    }

    function me(e) {
        Q(e) || X(e) ? Array.from(e).forEach(me) : Z(e) && Z(e.parentNode) && e.parentNode.removeChild(e)
    }

    function fe(e) {
        if (Z(e))
            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function ge(e, t) {
        return Z(t) && Z(t.parentNode) && Z(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function ye(e, t) {
        if (!G(e) || ae(e)) return {};
        var i = {},
            n = ce({}, t);
        return e.split(",").forEach((function(e) {
            var t = e.trim(),
                a = t.replace(".", ""),
                r = t.replace(/[[\]]/g, "").split("="),
                s = o(r, 1)[0],
                l = r.length > 1 ? r[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    G(n.class) ? i.class = "".concat(n.class, " ").concat(a) : i.class = a;
                    break;
                case "#":
                    i.id = t.replace("#", "");
                    break;
                case "[":
                    i[s] = l
            }
        })), ce(n, i)
    }

    function ve(e, t) {
        if (Z(e)) {
            var i = t;
            J(i) || (i = !e.hidden), e.hidden = i
        }
    }

    function be(e, t, i) {
        if (Q(e)) return Array.from(e).map((function(e) {
            return be(e, t, i)
        }));
        if (Z(e)) {
            var n = "toggle";
            return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t)
        }
        return !1
    }

    function we(e, t) {
        return Z(e) && e.classList.contains(t)
    }

    function ke(e, t) {
        return function() {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }

    function Te(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function Ee(e) {
        return this.elements.container.querySelector(e)
    }

    function Ce() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Z(e) && (e.focus({
            preventScroll: !0
        }), t && be(e, this.config.classNames.tabFocus))
    }
    var Se, Ae = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        Pe = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function(e, t, i) {
                var n = oe.isIPhone && i && Pe.playsinline,
                    a = Pe[e] || "html5" !== t;
                return {
                    api: a,
                    ui: a && Pe.rangeInput && ("video" !== e || !oe.isIPhone || n)
                }
            },
            pip: !(oe.isIPhone || !Y(he("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || he("video").disablePictureInPicture)),
            airplay: Y(window.WebKitPlaybackTargetAvailabilityEvent),
            googlecast: !1,
            playsinline: "playsInline" in document.createElement("video"),
            mime: function(e) {
                if (ae(e)) return !1;
                var t = o(e.split("/"), 1)[0],
                    i = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(Ae).includes(i) && (i += '; codecs="'.concat(Ae[e], '"'));
                try {
                    return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (Se = document.createElement("input"), Se.type = "range", "range" === Se.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== re,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        _e = function() {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function() {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function xe(e, t, i) {
        var n = this,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !ae(t) && Y(i)) {
            var o = t.split(" "),
                l = s;
            _e && (l = {
                passive: r,
                capture: s
            }), o.forEach((function(t) {
                n && n.eventListeners && a && n.eventListeners.push({
                    element: e,
                    type: t,
                    callback: i,
                    options: l
                }), e[a ? "addEventListener" : "removeEventListener"](t, i, l)
            }))
        }
    }

    function Me(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 ? arguments[2] : void 0,
            n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        xe.call(this, e, t, i, !0, n, a)
    }

    function Le(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 ? arguments[2] : void 0,
            n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        xe.call(this, e, t, i, !1, n, a)
    }

    function Ne(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = function s() {
                Le(e, i, s, a, r);
                for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) l[c] = arguments[c];
                n.apply(t, l)
            };
        xe.call(this, e, i, s, !0, a, r)
    }

    function Oe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (Z(e) && !ae(t)) {
            var a = new CustomEvent(t, {
                bubbles: i,
                detail: s({}, n, {
                    plyr: this
                })
            });
            e.dispatchEvent(a)
        }
    }

    function Ie() {
        this && this.eventListeners && (this.eventListeners.forEach((function(e) {
            var t = e.element,
                i = e.type,
                n = e.callback,
                a = e.options;
            t.removeEventListener(i, n, a)
        })), this.eventListeners = [])
    }

    function Re() {
        var e = this;
        return new Promise((function(t) {
            return e.ready ? setTimeout(t, 0) : Me.call(e, e.elements.container, "ready", t)
        })).then((function() {}))
    }

    function De(e) {
        return !!(X(e) || G(e) && e.includes(":")) && (X(e) ? e : e.split(":")).map(Number).every(K)
    }

    function je(e) {
        if (!X(e) || !e.every(K)) return null;
        var t = o(e, 2),
            i = t[0],
            n = t[1],
            a = function e(t, i) {
                return 0 === i ? t : e(i, t % i)
            }(i, n);
        return [i / a, n / a]
    }

    function qe(e) {
        var t = function(e) {
                return De(e) ? e.split(":").map(Number) : null
            },
            i = t(e);
        if (null === i && (i = t(this.config.ratio)), null === i && !ae(this.embed) && X(this.embed.ratio) && (i = this.embed.ratio), null === i && this.isHTML5) {
            var n = this.media;
            i = je([n.videoWidth, n.videoHeight])
        }
        return i
    }

    function He(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            i = qe.call(this, e),
            n = o(X(i) ? i : [0, 0], 2),
            a = 100 / n[0] * n[1];
        if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && this.supported.ui) {
            var r = (240 - a) / 4.8;
            this.media.style.transform = "translateY(-".concat(r, "%)")
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);
        return {
            padding: a,
            ratio: i
        }
    }
    var Ve = {
        getSources: function() {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function(t) {
                var i = t.getAttribute("type");
                return !!ae(i) || Pe.mime.call(e, i)
            })) : []
        },
        getQualityOptions: function() {
            return this.config.quality.forced ? this.config.quality.options : Ve.getSources.call(this).map((function(e) {
                return Number(e.getAttribute("size"))
            })).filter(Boolean)
        },
        setup: function() {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options, ae(this.config.ratio) || He.call(e), Object.defineProperty(e.media, "quality", {
                    get: function() {
                        var t = Ve.getSources.call(e).find((function(t) {
                            return t.getAttribute("src") === e.source
                        }));
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function(t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && Y(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                var i = Ve.getSources.call(e).find((function(e) {
                                    return Number(e.getAttribute("size")) === t
                                }));
                                if (!i) return;
                                var n = e.media,
                                    a = n.currentTime,
                                    r = n.paused,
                                    s = n.preload,
                                    o = n.readyState,
                                    l = n.playbackRate;
                                e.media.src = i.getAttribute("src"), ("none" !== s || o) && (e.once("loadedmetadata", (function() {
                                    e.speed = l, e.currentTime = a, r || e.play()
                                })), e.media.load())
                            }
                            Oe.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function() {
            this.isHTML5 && (me(Ve.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function Fe(e) {
        return X(e) ? e.filter((function(t, i) {
            return e.indexOf(t) === i
        })) : e
    }

    function Ue(e) {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        return ae(e) ? e : e.toString().replace(/{(\d+)}/g, (function(e, t) {
            return i[t].toString()
        }))
    }

    function Be() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString())
    }

    function ze() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.toString().replace(/\w\S*/g, (function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        }))
    }

    function We() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return t = Be(t, "-", " "), t = Be(t, "_", " "), Be(t = ze(t), " ", "")
    }

    function Ke(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var Ge = {
            pip: "PIP",
            airplay: "AirPlay",
            googlecast: "Google Cast",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        Je = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (ae(e) || ae(t)) return "";
            var i = le(t.i18n, e);
            if (ae(i)) return Object.keys(Ge).includes(e) ? Ge[e] : "";
            var n = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(n).forEach((function(e) {
                var t = o(e, 2),
                    n = t[0],
                    a = t[1];
                i = Be(i, n, a)
            })), i
        },
        Ye = function() {
            function e(i) {
                t(this, e), this.enabled = i.config.storage.enabled, this.key = i.config.storage.key
            }
            return n(e, [{
                key: "get",
                value: function(t) {
                    if (!e.supported || !this.enabled) return null;
                    var i = window.localStorage.getItem(this.key);
                    if (ae(i)) return null;
                    var n = JSON.parse(i);
                    return G(t) && t.length ? n[t] : n
                }
            }, {
                key: "set",
                value: function(t) {
                    if (e.supported && this.enabled && W(t)) {
                        var i = this.get();
                        ae(i) && (i = {}), ce(i, t), window.localStorage.setItem(this.key, JSON.stringify(i))
                    }
                }
            }], [{
                key: "supported",
                get: function() {
                    try {
                        if (!("localStorage" in window)) return !1;
                        return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();

    function Xe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise((function(i, n) {
            try {
                var a = new XMLHttpRequest;
                if (!("withCredentials" in a)) return;
                a.addEventListener("load", (function() {
                    if ("text" === t) try {
                        i(JSON.parse(a.responseText))
                    } catch (e) {
                        i(a.responseText)
                    } else i(a.response)
                })), a.addEventListener("error", (function() {
                    throw new Error(a.status)
                })), a.open("GET", e, !0), a.responseType = t, a.send()
            } catch (e) {
                n(e)
            }
        }))
    }

    function $e(e, t) {
        if (G(e)) {
            var i = G(t),
                n = function() {
                    return null !== document.getElementById(t)
                },
                a = function(e, t) {
                    e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!i || !n()) {
                var r = Ye.supported,
                    s = document.createElement("div");
                if (s.setAttribute("hidden", ""), i && s.setAttribute("id", t), r) {
                    var o = window.localStorage.getItem("".concat("cache", "-").concat(t));
                    if (null !== o) {
                        var l = JSON.parse(o);
                        a(s, l.content)
                    }
                }
                Xe(e).then((function(e) {
                    ae(e) || (r && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
                        content: e
                    })), a(s, e))
                })).catch((function() {}))
            }
        }
    }
    var Qe = function(e) {
            return Math.trunc(e / 60 / 60 % 60, 10)
        },
        Ze = function(e) {
            return Math.trunc(e / 60 % 60, 10)
        },
        et = function(e) {
            return Math.trunc(e % 60, 10)
        };

    function tt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!K(e)) return tt(void 0, t, i);
        var n = function(e) {
                return "0".concat(e).slice(-2)
            },
            a = Qe(e),
            r = Ze(e),
            s = et(e);
        return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(a).concat(n(r), ":").concat(n(s))
    }
    var it = 100,
        nt = null;

    function at(e) {
        var t = document.createElement("style");
        return t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(t), t
    }

    function rt() {
        var e;
        null != (e = nt) && e.parentNode.removeChild(e), nt = at(".plyr__captions span,video::cue,video::-webkit-media-text-track-display{font-size:" + it + "%}")
    }

    function st(e) {
        (it += e) < 10 && (it = 10), "localStorage" in window && localStorage.setItem("subsize", it), rt()
    }

    function ot(e, t, i, n) {
        var a = document.createElement("track");
        if ("srclang" in a) {
            a.kind = "captions", a.label = t, a.srclang = "su", a.src = e, a.default = n || !1;
            var r = document.querySelector(".plyr-container video");
            return i ? r.insertBefore(a, i) : r.appendChild(a), a
        }
    }

    function lt(e) {
        return (e + "").replace(/^\s+|\s+$/g, "")
    }

    function ct(e) {
        var t, i, n, a, r, s = e.split(":"),
            o = 0;
        return 3 == s.length ? (t = s[0], i = s[1], n = s[2]) : (t = 0, i = s[0], F, n = s[1]), a = (a = (n = n.split(/\s+/)).splice(0, 1)[0]).split(/\.|,/), r = parseFloat(a[1]), a = a[0], o += 3600 * parseFloat(t), o += 60 * parseFloat(i), o += parseFloat(a), r && (o += r / 1e3), o
    }

    function ut() {
        var e = location.search.substr(1) + location.hash,
            t = {};
        return e.split(/&|#/).forEach((function(e) {
            var i = e.split("=");
            i.length < 2 || (t[i[0]] = decodeURIComponent(i[1]))
        })), t
    }
    var dt = !1;

    function ht() {
        try {
            var e = document.querySelector(".plyr-container video track");
            try {
                0 === $(window).attr("name").indexOf("subs:") && ot(window.vidconfig.cors + "&url=" + btoa($(window).attr("name").substring(5)), "EM", e)
            } catch (e) {}
            var t = ut();
            if ("subtitle_json" in t) try {
                Xe(t.subtitle_json).then((function(e) {
                    e.forEach((function(e) {
                        ot(e.src, e.label, null, e.default || !1)
                    }))
                })).catch((function() {}))
            } catch (e) {}
            for (var i = 1;; ++i) {
                var n = t["c" + i + "_file"],
                    a = t["c" + i + "_label"];
                if (!n || !a) break;
                var r = n; - 1 == location.search.indexOf("directSRT=true") && (r = window.vidconfig.cors + "&url=" + btoa(n)), ot(r, a, e, 1 == i)
            }
        } catch (e) {}
    }

    function pt() {
        var e = prompt("Please input the URL of the subtitle file to load");
        null != e && "" != e && ot(e = window.vidconfig.cors + window.btoa(e), "From URL", firstsub, !0)
    }

    function mt(e) {
        var t = document.createElement("input");
        t.type = "file", t.addEventListener("change", (function() {
            var i = new FileReader;
            i.onload = function(n) {
                if (-1 !== i.result.indexOf("--\x3e")) {
                    var a = e.media.addTextTrack("captions", t.files[0].name, "su");
                    ! function(e, t) {
                        if ("" != e)
                            for (var i, n, a, r, s = e.split("\n"), o = "", l = 0, c = s.length, u = 1; u < c; ++u)
                                if (o = lt(s[u])) {
                                    for (-1 == o.indexOf("--\x3e") ? (r = o, o = lt(s[++u])) : r = l, i = {
                                            id: r,
                                            index: l
                                        }, n = o.split(/[\t ]+/), i.startTime = ct(n[0]), i.endTime = ct(n[2]), a = []; s[++u] && (o = lt(s[u]));) a.push(o);
                                    i.text = a.join("\n"), t(new VTTCue(i.startTime, i.endTime, i.text)), l += 1
                                }
                    }(i.result, (function(e) {
                        a.addCue(e)
                    }))
                }
            }, i.readAsText(t.files[0], "ISO-8859-1")
        })), t.click()
    }
    window.procsubs = ht;
    var ft = {
        getIconUrl: function() {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || oe.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function() {
            try {
                return this.elements.controls = Ee.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: Te.call(this, this.config.selectors.buttons.play),
                    pause: Ee.call(this, this.config.selectors.buttons.pause),
                    restart: Ee.call(this, this.config.selectors.buttons.restart),
                    rewind: Ee.call(this, this.config.selectors.buttons.rewind),
                    fastForward: Ee.call(this, this.config.selectors.buttons.fastForward),
                    mute: Ee.call(this, this.config.selectors.buttons.mute),
                    pip: Ee.call(this, this.config.selectors.buttons.pip),
                    airplay: Ee.call(this, this.config.selectors.buttons.airplay),
                    googlecast: Ee.call(this, this.config.selectors.buttons.googlecast),
                    settings: Ee.call(this, this.config.selectors.buttons.settings),
                    captions: Ee.call(this, this.config.selectors.buttons.captions),
                    fullscreen: Ee.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = Ee.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: Ee.call(this, this.config.selectors.inputs.seek),
                    volume: Ee.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: Ee.call(this, this.config.selectors.display.buffer),
                    currentTime: Ee.call(this, this.config.selectors.display.currentTime),
                    duration: Ee.call(this, this.config.selectors.display.duration)
                }, Z(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function(e, t) {
            var i = ft.getIconUrl.call(this),
                n = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            de(a, ce(t, {
                role: "presentation",
                focusable: "false"
            }));
            var r = document.createElementNS("http://www.w3.org/2000/svg", "use"),
                s = "".concat(n, "-").concat(e);
            return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), a.appendChild(r), a
        },
        createLabel: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = Je(e, this.config),
                n = s({}, t, {
                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                });
            return he("span", n, i)
        },
        createBadge: function(e) {
            if (ae(e)) return null;
            var t = he("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(he("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function(e, t) {
            var i = this,
                n = ce({}, t),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.toString();
                    return (t = We(t)).charAt(0).toLowerCase() + t.slice(1)
                }(e),
                r = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach((function(e) {
                    Object.keys(n).includes(e) && (r[e] = n[e], delete n[e])
                })), "button" !== r.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n.class.split(" ").some((function(e) {
                    return e === i.config.classNames.control
                })) || ce(n, {
                    class: "".concat(n.class, " ").concat(this.config.classNames.control)
                }) : n.class = this.config.classNames.control, e) {
                case "play":
                    r.toggle = !0, r.label = "play", r.labelPressed = "pause", r.icon = "play", r.iconPressed = "pause";
                    break;
                case "mute":
                    r.toggle = !0, r.label = "mute", r.labelPressed = "unmute", r.icon = "volume", r.iconPressed = "muted";
                    break;
                case "captions":
                    r.toggle = !0, r.label = "enableCaptions", r.labelPressed = "disableCaptions", r.icon = "captions-off", r.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    r.toggle = !0, r.label = "enterFullscreen", r.labelPressed = "exitFullscreen", r.icon = "enter-fullscreen", r.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    n.class += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", r.label = "play", r.icon = "play";
                    break;
                default:
                    ae(r.label) && (r.label = a), ae(r.icon) && (r.icon = e)
            }
            var s = he(r.element);
            return r.toggle ? (s.appendChild(ft.createIcon.call(this, r.iconPressed, {
                class: "icon--pressed"
            })), s.appendChild(ft.createIcon.call(this, r.icon, {
                class: "icon--not-pressed"
            })), s.appendChild(ft.createLabel.call(this, r.labelPressed, {
                class: "label--pressed"
            })), s.appendChild(ft.createLabel.call(this, r.label, {
                class: "label--not-pressed"
            }))) : (s.appendChild(ft.createIcon.call(this, r.icon)), s.appendChild(ft.createLabel.call(this, r.label))), ce(n, ye(this.config.selectors.buttons[a], n)), de(s, n), "play" === a ? (X(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(s)) : this.elements.buttons[a] = s, s
        },
        createRange: function(e, t) {
            var i = he("input", ce(ye(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": Je(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = i, ft.updateRangeFill.call(this, i), I.setup(i), i
        },
        createProgress: function(e, t) {
            var i = he("progress", ce(ye(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                i.appendChild(he("span", null, "0"));
                var n = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    a = n ? Je(n, this.config) : "";
                i.innerText = "% ".concat(a.toLowerCase())
            }
            return this.elements.display[e] = i, i
        },
        createTime: function(e, t) {
            var i = ye(this.config.selectors.display[e], t),
                n = he("div", ce(i, {
                    class: "".concat(i.class ? i.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                    "aria-label": Je(e, this.config)
                }), "00:00");
            return this.elements.display[e] = n, n
        },
        bindMenuItemShortcuts: function(e, t) {
            var i = this;
            Me.call(this, e, "keydown keyup", (function(n) {
                if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
                    var a, r = ke(e, '[role="menuitemradio"]');
                    if (!r && [32, 39].includes(n.which)) ft.showMenuPanel.call(i, t, !0);
                    else 32 !== n.which && (40 === n.which || r && 39 === n.which ? (a = e.nextElementSibling, Z(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, Z(a) || (a = e.parentNode.lastElementChild)), Ce.call(i, a, !0))
                }
            }), !1), Me.call(this, e, "keyup", (function(e) {
                13 === e.which && ft.focusFirstMenuItem.call(i, null, !0)
            }))
        },
        createMenuItem: function(e) {
            var t = this,
                i = e.value,
                n = e.list,
                a = e.type,
                r = e.title,
                s = e.badge,
                o = void 0 === s ? null : s,
                l = e.checked,
                c = void 0 !== l && l,
                u = ye(this.config.selectors.inputs[a]),
                d = he("button", ce(u, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                    "aria-checked": c,
                    value: i
                })),
                h = he("span");
            h.innerHTML = r, Z(o) && h.appendChild(o), d.appendChild(h), Object.defineProperty(d, "checked", {
                enumerable: !0,
                get: function() {
                    return "true" === d.getAttribute("aria-checked")
                },
                set: function(e) {
                    e && Array.from(d.parentNode.children).filter((function(e) {
                        return ke(e, '[role="menuitemradio"]')
                    })).forEach((function(e) {
                        return e.setAttribute("aria-checked", "false")
                    })), d.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(d, "click keyup", (function(e) {
                if (!te(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                        case "language":
                            t.currentTrack = Number(i);
                            break;
                        case "quality":
                            t.quality = i;
                            break;
                        case "speed":
                            t.speed = parseFloat(i)
                    }
                    ft.showMenuPanel.call(t, "home", te(e))
                }
            }), a, !1), ft.bindMenuItemShortcuts.call(this, d, a), n.appendChild(d)
        },
        formatTime: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!K(e)) return e;
            var i = Qe(this.duration) > 0;
            return tt(e, i, t)
        },
        updateTimeDisplay: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Z(e) && K(t) && (e.innerText = ft.formatTime(t, i))
        },
        updateVolume: function() {
            this.supported.ui && (Z(this.elements.inputs.volume) && ft.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Z(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Z(e) && (e.value = t, ft.updateRangeFill.call(this, e))
        },
        updateProgress: function(e) {
            var t = this;
            if (this.supported.ui && ee(e)) {
                var i, n, a = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        i = this.currentTime, n = this.duration, a = 0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n) ? 0 : (i / n * 100).toFixed(2), "timeupdate" === e.type && ft.setRange.call(this, this.elements.inputs.seek, a);
                        break;
                    case "playing":
                    case "progress":
                        ! function(e, i) {
                            var n = K(i) ? i : 0,
                                a = Z(e) ? e : t.elements.display.buffer;
                            if (Z(a)) {
                                a.value = n;
                                var r = a.getElementsByTagName("span")[0];
                                Z(r) && (r.childNodes[0].nodeValue = n)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function(e) {
            var t = ee(e) ? e.target : e;
            if (Z(t) && "range" === t.getAttribute("type")) {
                if (ke(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var i = ft.formatTime(this.currentTime),
                        n = ft.formatTime(this.duration),
                        a = Je("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", a.replace("{currentTime}", i).replace("{duration}", n))
                } else if (ke(t, this.config.selectors.inputs.volume)) {
                    var r = 100 * t.value;
                    t.setAttribute("aria-valuenow", r), t.setAttribute("aria-valuetext", "".concat(r.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                oe.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function(e) {
            var t = this;
            if (this.config.tooltips.seek && Z(this.elements.inputs.seek) && Z(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var i = "".concat(this.config.classNames.tooltip, "--visible"),
                    n = function(e) {
                        return be(t.elements.display.seekTooltip, i, e)
                    };
                if (this.touch) n(!1);
                else {
                    var a = 0,
                        r = this.elements.progress.getBoundingClientRect();
                    if (ee(e)) a = 100 / r.width * (e.pageX - r.left);
                    else {
                        if (!we(this.elements.display.seekTooltip, i)) return;
                        a = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    a < 0 ? a = 0 : a > 100 && (a = 100), ft.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), ee(e) && ["mouseenter", "mouseleave"].includes(e.type) && n("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function(e) {
            var t = !Z(this.elements.display.duration) && this.config.invertTime;
            ft.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || ft.updateProgress.call(this, e)
        },
        durationUpdate: function() {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return ve(this.elements.display.currentTime, !0), void ve(this.elements.progress, !0);
                Z(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = Z(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && ft.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && ft.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), ft.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function(e, t) {
            ve(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function(e, t, i) {
            var n = this.elements.settings.panels[e],
                a = null,
                r = t;
            if ("captions" === e) a = this.currentTrack;
            else {
                if (a = ae(i) ? this[e] : i, ae(a) && (a = this.config[e].default), !ae(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
                if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e))
            }
            if (Z(r) || (r = n && n.querySelector('[role="menu"]')), Z(r)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = ft.getLabel.call(this, e, a);
                var s = r && r.querySelector('[value="'.concat(a, '"]'));
                Z(s) && (s.checked = !0)
            }
        },
        getLabel: function(e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? Je("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if (K(t)) {
                        var i = Je("qualityLabel.".concat(t), this.config);
                        return i.length ? i : "".concat(t, "p")
                    }
                    return ze(t);
                case "captions":
                    return vt.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function(e) {
            var t = this;
            if (Z(this.elements.settings.panels.quality)) {
                var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                X(e) && (this.options.quality = Fe(e).filter((function(e) {
                    return t.config.quality.options.includes(e)
                })));
                var n = !ae(this.options.quality) && this.options.quality.length > 1;
                if (ft.toggleMenuButton.call(this, "quality", n), fe(i), ft.checkMenu.call(this), n) {
                    var a = function(e) {
                        var i = Je("qualityBadge.".concat(e), t.config);
                        return i.length ? ft.createBadge.call(t, i) : null
                    };
                    this.options.quality.sort((function(e, i) {
                        var n = t.config.quality.options;
                        return n.indexOf(e) > n.indexOf(i) ? 1 : -1
                    })).forEach((function(e) {
                        ft.createMenuItem.call(t, {
                            value: e,
                            list: i,
                            type: "quality",
                            title: ft.getLabel.call(t, "quality", e),
                            badge: a(e)
                        })
                    })), ft.updateSetting.call(this, "quality", i)
                }
            }
        },
        setCaptionsMenu: function() {
            var e = this;
            if (Z(this.elements.settings.panels.captions)) {
                var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    i = vt.getTracks.call(this),
                    n = window.vidconfig && window.vidconfig.subload,
                    a = Boolean(i.length) || n;
                if (ft.toggleMenuButton.call(this, "captions", a), fe(t), !window.vidconfig || window.vidconfig.subsize) {
                    var r = he("div", {
                            class: "plyr-captions-size"
                        }),
                        s = he("button", {
                            class: "plyr__control"
                        }, "-"),
                        o = he("span", {}, "Size"),
                        l = he("button", {
                            class: "plyr__control"
                        }, "+");
                    this.listeners.bind(s, "click keyup", (function(e) {
                        te(e) && 32 !== e.which || st(-12)
                    })), this.listeners.bind(l, "click keyup", (function(e) {
                        te(e) && 32 !== e.which || st(12)
                    })), r.appendChild(s), r.appendChild(o), r.appendChild(l), t.appendChild(r)
                }
                if (n) {
                    var c = he("div", {
                            class: "plyr-captions-load"
                        }),
                        u = he("span", {}, "Load"),
                        d = he("button", {
                            class: "plyr__control"
                        }, "URL"),
                        h = he("button", {
                            class: "plyr__control"
                        }, "File");
                    d.addEventListener("click", pt), h.addEventListener("click", (function() {
                        return mt(e)
                    })), c.appendChild(u), c.appendChild(d), c.appendChild(h), t.appendChild(c)
                }
                if (ft.checkMenu.call(this), a || n) {
                    var p = i.map((function(i, n) {
                        return {
                            value: n,
                            checked: e.captions.toggled && e.currentTrack === n,
                            title: vt.getLabel.call(e, i),
                            badge: i.language && ft.createBadge.call(e, i.language.toUpperCase()),
                            list: t,
                            type: "language"
                        }
                    }));
                    p.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: Je("disabled", this.config),
                        list: t,
                        type: "language"
                    }), p.forEach(ft.createMenuItem.bind(this)), ft.updateSetting.call(this, "captions", t)
                }
            }
        },
        setSpeedMenu: function() {
            var e = this;
            if (Z(this.elements.settings.panels.speed)) {
                var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter((function(t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                }));
                var i = !ae(this.options.speed) && this.options.speed.length > 1;
                ft.toggleMenuButton.call(this, "speed", i), fe(t), ft.checkMenu.call(this), i && (this.options.speed.forEach((function(i) {
                    ft.createMenuItem.call(e, {
                        value: i,
                        list: t,
                        type: "speed",
                        title: ft.getLabel.call(e, "speed", i)
                    })
                })), ft.updateSetting.call(this, "speed", t))
            }
        },
        checkMenu: function() {
            var e = this.elements.settings.buttons,
                t = !ae(e) && Object.values(e).some((function(e) {
                    return !e.hidden
                }));
            ve(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var i = e;
                Z(i) || (i = Object.values(this.elements.settings.panels).find((function(e) {
                    return !e.hidden
                })));
                var n = i.querySelector('[role^="menuitem"]');
                Ce.call(this, n, t)
            }
        },
        toggleMenu: function(e) {
            var t = this.elements.settings.popup,
                i = this.elements.buttons.settings;
            if (Z(t) && Z(i)) {
                var n = t.hidden,
                    a = n;
                if (J(e)) a = e;
                else if (te(e) && 27 === e.which) a = !1;
                else if (ee(e)) {
                    var r = Y(e.composedPath) ? e.composedPath()[0] : e.target,
                        s = t.contains(r);
                    if (s || !s && e.target !== i && a) return
                }
                i.setAttribute("aria-expanded", a), ve(t, !a), be(this.elements.container, this.config.classNames.menu.open, a), a && te(e) ? ft.focusFirstMenuItem.call(this, null, !0) : a || n || Ce.call(this, i, te(e))
            }
        },
        getMenuSize: function(e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var i = t.scrollWidth,
                n = t.scrollHeight;
            return me(t), {
                width: i,
                height: n
            }
        },
        showMenuPanel: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (Z(n)) {
                var a = n.parentNode,
                    r = Array.from(a.children).find((function(e) {
                        return !e.hidden
                    }));
                if (Pe.transitions && !Pe.reducedMotion) {
                    a.style.width = "".concat(r.scrollWidth, "px"), a.style.height = "".concat(r.scrollHeight, "px");
                    var s = ft.getMenuSize.call(this, n),
                        o = function t(i) {
                            i.target === a && ["width", "height"].includes(i.propertyName) && (a.style.width = "", a.style.height = "", Le.call(e, a, re, t))
                        };
                    Me.call(this, a, re, o), a.style.width = "".concat(s.width, "px"), a.style.height = "".concat(s.height, "px")
                }
                ve(r, !0), ve(n, !1), ft.focusFirstMenuItem.call(this, n, i)
            }
        },
        setDownloadUrl: function() {
            var e = this.elements.buttons.download;
            Z(e) && e.setAttribute("href", this.download)
        },
        create: function(e) {
            var t = this,
                i = ft.bindMenuItemShortcuts,
                n = ft.createButton,
                a = ft.createProgress,
                r = ft.createRange,
                s = ft.createTime,
                o = ft.setQualityMenu,
                l = ft.setSpeedMenu,
                c = ft.showMenuPanel;
            this.elements.controls = null, this.config.controls.includes("play-large") && this.elements.container.appendChild(n.call(this, "play-large"));
            var u = he("div", ye(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            var d = {
                class: "plyr__controls__item"
            };
            return Fe(this.config.controls).forEach((function(o) {
                if ("restart" === o && u.appendChild(n.call(t, "restart", d)), "rewind" === o && u.appendChild(n.call(t, "rewind", d)), "play" === o && u.appendChild(n.call(t, "play", d)), "fast-forward" === o && u.appendChild(n.call(t, "fast-forward", d)), "progress" === o) {
                    var l = he("div", {
                            class: "".concat(d.class, " plyr__progress__container")
                        }),
                        h = he("div", ye(t.config.selectors.progress));
                    if (h.appendChild(r.call(t, "seek", {
                            id: "plyr-seek-".concat(e.id)
                        })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
                        var p = he("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        h.appendChild(p), t.elements.display.seekTooltip = p
                    }
                    t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l)
                }
                if ("current-time" === o && u.appendChild(s.call(t, "currentTime", d)), "duration" === o && u.appendChild(s.call(t, "duration", d)), "mute" === o || "volume" === o) {
                    var m = t.elements.volume;
                    if (Z(m) && u.contains(m) || (m = he("div", ce({}, d, {
                            class: "".concat(d.class, " plyr__volume").trim()
                        })), t.elements.volume = m, u.appendChild(m)), "mute" === o && m.appendChild(n.call(t, "mute")), "volume" === o)
                        if (oe.isIos || oe.isAndroid) t.elements.container.classList.add("plyr__mobile-volume");
                        else {
                            var f = {
                                max: 1,
                                step: .05,
                                value: t.config.volume
                            };
                            m.appendChild(r.call(t, "volume", ce(f, {
                                id: "plyr-volume-".concat(e.id)
                            })))
                        }
                }
                if ("captions" === o && u.appendChild(n.call(t, "captions", d)), "settings" === o && !ae(t.config.settings)) {
                    var g = he("div", ce({}, d, {
                        class: "".concat(d.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    g.appendChild(n.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var y = he("div", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-".concat(e.id),
                            hidden: ""
                        }),
                        v = he("div"),
                        b = he("div", {
                            id: "plyr-settings-".concat(e.id, "-home")
                        }),
                        w = he("div", {
                            role: "menu"
                        });
                    b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function(n) {
                        var a = he("button", ce(ye(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        i.call(t, a, n), Me.call(t, a, "click", (function() {
                            c.call(t, n, !1)
                        }));
                        var r = he("span", null, Je(n, t.config)),
                            s = he("span", {
                                class: t.config.classNames.menu.value
                            });
                        s.innerHTML = e[n], r.appendChild(s), a.appendChild(r), w.appendChild(a);
                        var o = he("div", {
                                id: "plyr-settings-".concat(e.id, "-").concat(n),
                                hidden: ""
                            }),
                            l = he("button", {
                                type: "button",
                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                            });
                        l.appendChild(he("span", {
                            "aria-hidden": !0
                        }, Je(n, t.config))), l.appendChild(he("span", {
                            class: t.config.classNames.hidden
                        }, Je("menuBack", t.config))), Me.call(t, o, "keydown", (function(e) {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                        }), !1), Me.call(t, l, "click", (function() {
                            c.call(t, "home", !1)
                        })), o.appendChild(l), o.appendChild(he("div", {
                            role: "menu"
                        })), v.appendChild(o), t.elements.settings.buttons[n] = a, t.elements.settings.panels[n] = o
                    })), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g
                }
                if ("pip" === o && Pe.pip && u.appendChild(n.call(t, "pip", d)), "googlecast" === o && u.appendChild(n.call(t, "googlecast", d)), "airplay" === o && Pe.airplay && u.appendChild(n.call(t, "airplay", d)), "download" === o) {
                    var k = ce({}, d, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (k.download = "");
                    var T = t.config.urls.download;
                    !ne(T) && t.isEmbed && ce(k, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }), u.appendChild(n.call(t, "download", k))
                }
                if (!("streamtape" !== o || window.vidconfig && window.vidconfig.hidest)) {
                    var E = ce({}, d, {
                        element: "a",
                        href: "https://streamtape.com/",
                        target: "_blank"
                    });
                    u.appendChild(n.call(t, "streamtape", E))
                }
                "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d))
            })), this.isHTML5 && o.call(this, Ve.getQualityOptions.call(this)), l.call(this), u
        },
        inject: function() {
            var e = this;
            if (this.config.loadSprite) {
                var t = ft.getIconUrl.call(this);
                t.cors && $e(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var i = null;
            this.elements.controls = null;
            var n = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                a = !0;
            Y(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), Z(this.config.controls) || G(this.config.controls) ? i = this.config.controls : (i = ft.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: vt.getLabel.call(this)
            }), a = !1);
            var r, s = function(e) {
                var t = e;
                return Object.entries(n).forEach((function(e) {
                    var i = o(e, 2),
                        n = i[0],
                        a = i[1];
                    t = Be(t, "{".concat(n, "}"), a)
                })), t
            };
            if (a && (G(this.config.controls) ? i = s(i) : Z(i) && (i.innerHTML = s(i.innerHTML))), G(this.config.selectors.controls.container) && (r = document.querySelector(this.config.selectors.controls.container)), Z(r) || (r = this.elements.container), r[Z(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), Z(this.elements.controls) || ft.findElements.call(this), !ae(this.elements.buttons)) {
                var l = function(t) {
                    var i = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function() {
                            return we(t, i)
                        },
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            be(t, i, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((function(e) {
                    X(e) || Q(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e)
                }))
            }
            if (oe.isEdge && se(r), this.config.tooltips.controls) {
                var c = this.config,
                    u = c.classNames,
                    d = c.selectors,
                    h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                    p = Te.call(this, h);
                Array.from(p).forEach((function(t) {
                    be(t, e.config.classNames.hidden, !1), be(t, e.config.classNames.tooltip, !0)
                }))
            }
        }
    };

    function gt(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            i = e;
        if (t) {
            var n = document.createElement("a");
            n.href = i, i = n.href
        }
        try {
            return new URL(i)
        } catch (e) {
            return null
        }
    }

    function yt(e) {
        var t = new URLSearchParams;
        return W(e) && Object.entries(e).forEach((function(e) {
            var i = o(e, 2),
                n = i[0],
                a = i[1];
            t.set(n, a)
        })), t
    }
    var vt = {
            setup: function() {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Pe.textTracks) X(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && ft.setCaptionsMenu.call(this);
                    else {
                        if (Z(this.elements.captions) || (this.elements.captions = he("div", ye(this.config.selectors.captions)), function(e, t) {
                                Z(e) && Z(t) && t.parentNode.insertBefore(e, t.nextSibling)
                            }(this.elements.captions, this.elements.wrapper)), oe.isIE && window.URL) {
                            var e = this.media.querySelectorAll("track");
                            Array.from(e).forEach((function(e) {
                                var t = e.getAttribute("src"),
                                    i = gt(t);
                                null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Xe(t, "blob").then((function(t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                })).catch((function() {
                                    me(e)
                                }))
                            }))
                        }
                        var t = Fe((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function(e) {
                                return e.split("-")[0]
                            }))),
                            i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if ("auto" === i) i = o(t, 1)[0];
                        var n = this.storage.get("captions");
                        if (J(n) || (n = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: n,
                                language: i,
                                languages: t
                            }), this.isHTML5) {
                            var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            Me.call(this, this.media.textTracks, a, vt.update.bind(this))
                        }
                        setTimeout(vt.update.bind(this), 0)
                    }
            },
            update: function() {
                var e = this,
                    t = vt.getTracks.call(this, !0),
                    i = this.captions,
                    n = i.active,
                    a = i.language,
                    r = i.meta,
                    s = i.currentTrackNode,
                    o = Boolean(t.find((function(e) {
                        return e.language === a
                    })));
                this.isHTML5 && this.isVideo && t.filter((function(e) {
                    return !r.get(e)
                })).forEach((function(t) {
                    e.debug.log("Track added", t), r.set(t, {
                        default: "showing" === t.mode
                    }), t.mode = "hidden", Me.call(e, t, "cuechange", (function() {
                        return vt.updateCues.call(e)
                    }))
                })), (o && this.language !== a || !t.includes(s)) && (vt.setLanguage.call(this, a), vt.toggle.call(this, n && o)), be(this.elements.container, this.config.classNames.captions.enabled, !ae(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && ft.setCaptionsMenu.call(this)
            },
            toggle: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var i = this.captions.toggled,
                        n = this.config.classNames.captions.active,
                        a = z(e) ? !i : e;
                    if (a !== i) {
                        if (t || (this.captions.active = a, this.storage.set({
                                captions: a
                            })), !this.language && a && !t) {
                            var r = vt.getTracks.call(this),
                                s = vt.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
                            return this.captions.language = s.language, void vt.set.call(this, r.indexOf(s))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), be(this.elements.container, n, a), this.captions.toggled = a, ft.updateSetting.call(this, "captions"), Oe.call(this, this.media, a ? "captionsenabled" : "captionsdisabled")
                    }
                }
            },
            set: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    i = vt.getTracks.call(this);
                if (-1 !== e)
                    if (K(e))
                        if (e in i) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var n = i[e],
                                    a = n || {},
                                    r = a.language;
                                this.captions.currentTrackNode = n, ft.updateSetting.call(this, "captions"), t || (this.captions.language = r, this.storage.set({
                                    language: r
                                })), this.isVimeo && this.embed.enableTextTrack(r), Oe.call(this, this.media, "languagechange")
                            }
                            vt.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && vt.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else vt.toggle.call(this, !1, t)
            },
            setLanguage: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (G(e)) {
                    var i = e.toLowerCase();
                    this.captions.language = i;
                    var n = vt.getTracks.call(this),
                        a = vt.findTrack.call(this, [i]);
                    vt.set.call(this, n.indexOf(a), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    i = Array.from((this.media || {}).textTracks || []);
                return i.filter((function(i) {
                    return !e.isHTML5 || t || e.captions.meta.has(i)
                })).filter((function(e) {
                    return ["captions", "subtitles"].includes(e.kind)
                }))
            },
            findTrack: function(e) {
                var t, i = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = vt.getTracks.call(this),
                    r = function(e) {
                        return Number((i.captions.meta.get(e) || {}).default)
                    },
                    s = Array.from(a).sort((function(e, t) {
                        return r(t) - r(e)
                    }));
                return e.every((function(e) {
                    return !(t = s.find((function(t) {
                        return t.language === e
                    })))
                })), t || (n ? s[0] : void 0)
            },
            getCurrentTrack: function() {
                return vt.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function(e) {
                var t = e;
                return !ie(t) && Pe.textTracks && this.captions.toggled && (t = vt.getCurrentTrack.call(this)), ie(t) ? ae(t.label) ? ae(t.language) ? Je("enabled", this.config) : e.language.toUpperCase() : t.label : Je("disabled", this.config)
            },
            updateCues: function(e) {
                if (this.supported.ui)
                    if (Z(this.elements.captions))
                        if (z(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var i = vt.getCurrentTrack.call(this);
                                t = Array.from((i || {}).activeCues || []).map((function(e) {
                                    return e.getCueAsHTML()
                                })).map(Ke)
                            }
                            var n = t.map((function(e) {
                                return e.trim()
                            })).join("\n");
                            if (n !== this.elements.captions.innerHTML) {
                                fe(this.elements.captions);
                                var a = he("span", ye(this.config.selectors.caption));
                                a.innerHTML = n, this.elements.captions.appendChild(a), Oe.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        bt = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !1,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "/player.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.25, .5, .75, 1, 1.25, 1.5, 2]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !0,
                seek: !0
            },
            captions: {
                active: !0,
                language: "auto",
                update: !0
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !0
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "mute", "volume", "progress", "current-time", "duration", "streamtape", "settings", "pip", "airplay", "googlecast", "fullscreen", "mobile-ui"],
            settings: ["captions", "speed"],
            i18n: {
                restart: "Restart",
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pause",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} of {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Current time",
                duration: "Duration",
                volume: "Volume",
                mute: "Mute",
                unmute: "Unmute",
                enableCaptions: "Enable captions",
                disableCaptions: "Disable captions",
                download: "Download",
                streamtape: "Go to Streamtape.com",
                enterFullscreen: "Enter fullscreen",
                exitFullscreen: "Exit fullscreen",
                frameTitle: "Player for {title}",
                captions: "Captions",
                settings: "Settings",
                pip: "Picture-in-Picture",
                menuBack: "Go back to previous menu",
                speed: "Speed",
                normal: "Normal",
                quality: "Quality",
                loop: "Loop",
                start: "Start",
                end: "End",
                all: "All",
                reset: "Reset",
                disabled: "Disabled",
                enabled: "Enabled",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/v2/video/{0}.json"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                },
                googleCast: {
                    sdk: "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                streamtape: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                googlecast: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    streamtape: '[data-plyr="streamtape"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    googlecast: '[data-plyr="googlecast"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isMobile: "plyr--is-mobile",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                googlecast: {
                    supported: "plyr--googlecast-supported"
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            ads: {
                enabled: !1,
                publisherId: "",
                tagUrl: ""
            },
            previewThumbnails: {
                enabled: !1,
                src: ""
            },
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                sidedock: !1,
                controls: !1,
                referrerPolicy: null
            },
            youtube: {
                noCookie: !1,
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1
            }
        },
        wt = "picture-in-picture",
        kt = "inline",
        Tt = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo",
            googleCast: "googleCast"
        },
        Et = "audio",
        Ct = "video";
    var St = function() {},
        At = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t(this, e), this.enabled = window.console && i, this.enabled && this.log("Debugging enabled")
            }
            return n(e, [{
                key: "log",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : St
                }
            }, {
                key: "warn",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : St
                }
            }, {
                key: "error",
                get: function() {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : St
                }
            }]), e
        }(),
        Pt = function() {
            function e(i) {
                var n = this;
                t(this, e), this.player = i, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === i.config.fullscreen.fallback, Me.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function() {
                    n.onChange()
                })), Me.call(this.player, this.player.elements.container, "dblclick", (function(e) {
                    Z(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle()
                })), Me.call(this, this.player.elements.container, "keydown", (function(e) {
                    return n.trapFocus(e)
                })), this.update()
            }
            return n(e, [{
                key: "onChange",
                value: function() {
                    if (this.enabled) {
                        var e = this.player.elements.buttons.fullscreen;
                        Z(e) && (e.pressed = this.active), Oe.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                    }
                }
            }, {
                key: "toggleFallback",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e ? this.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", be(this.target, this.player.config.classNames.fullscreen.fallback, e), oe.isIos) {
                        var t = document.head.querySelector('meta[name="viewport"]'),
                            i = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        var n = G(t.content) && t.content.includes(i);
                        e ? (this.cleanupViewport = !n, n || (t.content += ",".concat(i))) : this.cleanupViewport && (t.content = t.content.split(",").filter((function(e) {
                            return e.trim() !== i
                        })).join(","))
                    }
                    this.onChange()
                }
            }, {
                key: "trapFocus",
                value: function(e) {
                    if (!oe.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
                        var t = document.activeElement,
                            i = Te.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                            n = o(i, 1)[0],
                            a = i[i.length - 1];
                        t !== a || e.shiftKey ? t === n && e.shiftKey && (a.focus(), e.preventDefault()) : (n.focus(), e.preventDefault())
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var t;
                    this.enabled ? (t = this.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", this.player.debug.log("".concat(t, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
                    be(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                }
            }, {
                key: "enter",
                value: function() {
                    var t = this;
                    if (this.enabled)
                        if (oe.isIos && this.player.config.fullscreen.iosNative && !("webkitRequestFullscreen" in document.documentElement)) {
                            try {
                                var i = this.player.captions.currentTrack;
                                if (-1 != i) Array.from((this.player.media || {}).textTracks || []).filter((function(e) {
                                    return ["captions", "subtitles"].includes(e.kind)
                                })).forEach((function(e, t) {
                                    e.mode = t == i ? "showing" : "hidden"
                                }));
                                "hideNative" in this || (this.hideNative = function() {
                                    try {
                                        Array.from((t.player.media || {}).textTracks || []).filter((function(e) {
                                            return ["captions", "subtitles"].includes(e.kind)
                                        })).forEach((function(e) {
                                            e.mode = "hidden"
                                        }))
                                    } catch (e) {}
                                }), this.player.media.removeEventListener("webkitendfullscreen", this.hideNative), this.player.media.addEventListener("webkitendfullscreen", this.hideNative)
                            } catch (e) {}
                            this.target.webkitEnterFullscreen()
                        } else !e.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? ae(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
                            navigationUI: "hide"
                        })
                }
            }, {
                key: "exit",
                value: function() {
                    if (this.enabled)
                        if (oe.isIos && this.player.config.fullscreen.iosNative && !("webkitExitFullscreen" in document.documentElement)) this.target.webkitExitFullscreen(), this.player.play();
                        else if (!e.native || this.forceFallback) this.toggleFallback(!1);
                    else if (this.prefix) {
                        if (!ae(this.prefix)) {
                            var t = "moz" === this.prefix ? "Cancel" : "Exit";
                            document["".concat(this.prefix).concat(t).concat(this.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                }
            }, {
                key: "toggle",
                value: function() {
                    this.active ? this.exit() : this.enter()
                }
            }, {
                key: "usingNative",
                get: function() {
                    return e.native && !this.forceFallback
                }
            }, {
                key: "enabled",
                get: function() {
                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                }
            }, {
                key: "active",
                get: function() {
                    return !!this.enabled && (!e.native || this.forceFallback ? we(this.target, this.player.config.classNames.fullscreen.fallback) : (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target)
                }
            }, {
                key: "target",
                get: function() {
                    return oe.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
                }
            }], [{
                key: "native",
                get: function() {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function() {
                    if (Y(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some((function(t) {
                        return !(!Y(document["".concat(t, "ExitFullscreen")]) && !Y(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                    })), e
                }
            }, {
                key: "property",
                get: function() {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }();

    function _t(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise((function(i, n) {
            var a = new Image,
                r = function() {
                    delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a)
                };
            Object.assign(a, {
                onload: r,
                onerror: r,
                src: e
            })
        }))
    }
    var xt = {
            addStyleHook: function() {
                be(this.elements.container, this.config.selectors.container.replace(".", ""), !0), be(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function() {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void xt.toggleNativeControls.call(this, !0);
                Z(this.elements.controls) || (ft.inject.call(this), this.listeners.controls()), xt.toggleNativeControls.call(this), this.isHTML5 && vt.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, ft.updateVolume.call(this), ft.timeUpdate.call(this), xt.checkPlaying.call(this), be(this.elements.container, this.config.classNames.pip.supported, Pe.pip && this.isHTML5 && this.isVideo), be(this.elements.container, this.config.classNames.airplay.supported, Pe.airplay && this.isHTML5), be(this.elements.container, this.config.classNames.isIos, oe.isIos), be(this.elements.container, this.config.classNames.isMobile, oe.isMobile), be(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function() {
                    Oe.call(e, e.media, "ready")
                }), 0), xt.setTitle.call(this), this.poster && xt.setPoster.call(this, this.poster, !1).catch((function() {})), this.config.duration && ft.durationUpdate.call(this)
            },
            setTitle: function() {
                var e = Je("play", this.config);
                if (G(this.config.title) && !ae(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function(t) {
                        t.setAttribute("aria-label", e)
                    })), this.isEmbed) {
                    var t = Ee.call(this, "iframe");
                    if (!Z(t)) return;
                    var i = ae(this.config.title) ? "video" : this.config.title,
                        n = Je("frameTitle", this.config);
                    t.setAttribute("title", n.replace("{title}", i))
                }
            },
            togglePoster: function(e) {
                be(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function(e) {
                var t = this,
                    i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("poster", e), this.isHTML5 ? Promise.resolve(e) : Re.call(this).then((function() {
                    return _t(e)
                })).catch((function(i) {
                    throw e === t.poster && xt.togglePoster.call(t, !1), i
                })).then((function() {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                })).then((function() {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), xt.togglePoster.call(t, !0), e
                })))
            },
            checkPlaying: function(e) {
                var t = this;
                be(this.elements.container, this.config.classNames.playing, this.playing), be(this.elements.container, this.config.classNames.paused, this.paused), be(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function(e) {
                    Object.assign(e, {
                        pressed: t.playing
                    }), e.setAttribute("aria-label", Je(t.playing ? "pause" : "play", t.config))
                })), ee(e) && "timeupdate" === e.type || xt.toggleControls.call(this)
            },
            checkLoading: function(e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function() {
                    be(t.elements.container, t.config.classNames.loading, t.loading), xt.toggleControls.call(t)
                }), this.loading ? 250 : 0)
            },
            toggleControls: function(e) {
                var t = this.elements.controls;
                if (t && this.config.hideControls) {
                    var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                }
            }
        },
        Mt = null,
        Lt = null,
        Nt = !1;

    function Ot() {
        Nt && (Lt.seeking || (Lt.paused ? It(Lt, "pause") : It(Lt, "play")))
    }

    function It(e, t) {
        Mt.innerHTML = "", Mt.appendChild(ft.createIcon.call(e, t, {
            role: "presentation",
            focusable: "false"
        })), Mt.className = "plyr__anim", setTimeout((function() {
            Mt.className = "plyr__anim anim"
        }), 25)
    }
    var Rt = function() {
        function e(i) {
            t(this, e), this.player = i, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
        }
        return n(e, [{
            key: "handleKey",
            value: function(e) {
                var t = this.player,
                    i = t.elements,
                    n = e.keyCode ? e.keyCode : e.which,
                    a = "keydown" === e.type,
                    r = a && n === this.lastKey;
                if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && K(n)) {
                    if (a) {
                        var s = document.activeElement;
                        if (Z(s)) {
                            var o = t.config.selectors.editable;
                            if (s !== i.inputs.seek && ke(s, o)) return;
                            if (32 === e.which && ke(s, 'button, [role^="menuitem"]')) return
                        }
                        switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                            case 48:
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                r || (t.currentTime = t.duration / 10 * (n - 48));
                                break;
                            case 32:
                            case 75:
                                r || (t.playing ? It(t, "pause") : It(t, "play"), t.togglePlay());
                                break;
                            case 38:
                                It(t, "volume"), t.increaseVolume(.1);
                                break;
                            case 40:
                                It(t, "volume-down"), t.decreaseVolume(.1);
                                break;
                            case 77:
                                t.muted ? It(t, "volume") : It(t, "muted"), r || (t.muted = !t.muted);
                                break;
                            case 39:
                                It(t, "fast-forward"), t.forward();
                                break;
                            case 37:
                                It(t, "rewind"), t.rewind();
                                break;
                            case 70:
                                t.fullscreen.active ? It(t, "exit-fullscreen") : It(t, "enter-fullscreen"), t.fullscreen.toggle();
                                break;
                            case 67:
                                r || (t.captions.active ? It(t, "captions-off") : It(t, "captions-on"), t.toggleCaptions());
                                break;
                            case 76:
                                It(t, "restart"), t.loop = !t.loop
                        }
                        27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n
                    } else this.lastKey = null
                }
            }
        }, {
            key: "toggleMenu",
            value: function(e) {
                ft.toggleMenu.call(this.player, e)
            }
        }, {
            key: "firstTouch",
            value: function() {
                var e = this.player,
                    t = e.elements;
                e.touch = !0, be(t.container, e.config.classNames.isTouch, !0)
            }
        }, {
            key: "setTabFocus",
            value: function(e) {
                var t = this.player,
                    i = t.elements;
                if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
                    "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                    var n, a = e.timeStamp - this.lastKeyDown <= 20;
                    if ("focus" !== e.type || a) n = t.config.classNames.tabFocus, be(Te.call(t, ".".concat(n)), n, !1), this.focusTimer = setTimeout((function() {
                        var e = document.activeElement;
                        i.container.contains(e) && be(document.activeElement, t.config.classNames.tabFocus, !0)
                    }), 10)
                }
            }
        }, {
            key: "global",
            value: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = this.player;
                t.config.keyboard.global && xe.call(t, window, "keydown keyup", this.handleKey, e, !1), xe.call(t, document.body, "click", this.toggleMenu, e), Ne.call(t, document.body, "touchstart", this.firstTouch), xe.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0)
            }
        }, {
            key: "container",
            value: function() {
                var e = this.player,
                    t = e.config,
                    i = e.elements,
                    n = e.timers;
                !t.keyboard.global && t.keyboard.focused && Me.call(e, i.container, "keydown keyup", this.handleKey, !1), Me.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function(t) {
                    var a = i.controls;
                    a && "enterfullscreen" === t.type && (a.pressed = !1, a.hover = !1);
                    var r = 0;
                    ["touchstart", "touchmove", "mousemove"].includes(t.type) && (xt.toggleControls.call(e, !0), r = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout((function() {
                        return xt.toggleControls.call(e, !1)
                    }), r)
                }));
                var a = function(t) {
                        if (!t) return He.call(e);
                        var n = i.container.getBoundingClientRect(),
                            a = n.width,
                            r = n.height;
                        return He.call(e, "".concat(a, ":").concat(r))
                    },
                    r = function() {
                        clearTimeout(n.resized), n.resized = setTimeout(a, 50)
                    };
                Me.call(e, i.container, "enterfullscreen exitfullscreen", (function(t) {
                    var n = e.fullscreen,
                        s = n.target,
                        l = n.usingNative;
                    if (s === i.container && (e.isEmbed || !ae(e.config.ratio))) {
                        var c = "enterfullscreen" === t.type,
                            u = a(c);
                        u.padding;
                        ! function(t, i, n) {
                            if (e.isVimeo) {
                                var a = e.elements.wrapper.firstChild,
                                    r = o(t, 2)[1],
                                    s = o(qe.call(e), 2),
                                    l = s[0],
                                    c = s[1];
                                a.style.maxWidth = n ? "".concat(r / c * l, "px") : null, a.style.margin = n ? "0 auto" : null
                            }
                        }(u.ratio, 0, c), l || (c ? Me.call(e, window, "resize", r) : Le.call(e, window, "resize", r))
                    }
                }))
            }
        }, {
            key: "media",
            value: function() {
                var e = this,
                    t = this.player,
                    i = t.elements;
                if (Me.call(t, t.media, "timeupdate seeking seeked", (function(e) {
                        return ft.timeUpdate.call(t, e)
                    })), Me.call(t, t.media, "durationchange loadeddata loadedmetadata", (function(e) {
                        return ft.durationUpdate.call(t, e)
                    })), Me.call(t, t.media, "ended", (function() {
                        t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause())
                    })), Me.call(t, t.media, "progress playing seeking seeked", (function(e) {
                        return ft.updateProgress.call(t, e)
                    })), Me.call(t, t.media, "volumechange", (function(e) {
                        return ft.updateVolume.call(t, e)
                    })), Me.call(t, t.media, "playing play pause ended emptied timeupdate", (function(e) {
                        return xt.checkPlaying.call(t, e)
                    })), Me.call(t, t.media, "waiting canplay seeked playing", (function(e) {
                        return xt.checkLoading.call(t, e)
                    })), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
                    var n = Ee.call(t, ".".concat(t.config.classNames.video));
                    if (!Z(n)) return;
                    Me.call(t, i.container, "click", (function(a) {
                        ([i.container, n].includes(a.target) || n.contains(a.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(a, t.restart, "restart"), e.proxy(a, t.play, "play")) : e.proxy(a, t.togglePlay, "play")))
                    }))
                }
                t.supported.ui && t.config.disableContextMenu && Me.call(t, i.wrapper, "contextmenu", (function(e) {
                    e.preventDefault()
                }), !1), Me.call(t, t.media, "volumechange", (function() {
                    t.storage.set({
                        volume: t.volume,
                        muted: t.muted
                    })
                })), Me.call(t, t.media, "ratechange", (function() {
                    ft.updateSetting.call(t, "speed"), t.storage.set({
                        speed: t.speed
                    })
                })), Me.call(t, t.media, "qualitychange", (function(e) {
                    ft.updateSetting.call(t, "quality", null, e.detail.quality)
                })), Me.call(t, t.media, "ready qualitychange", (function() {
                    ft.setDownloadUrl.call(t)
                }));
                var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
                Me.call(t, t.media, a, (function(e) {
                    var n = e.detail,
                        a = void 0 === n ? {} : n;
                    "error" === e.type && (a = t.media.error), Oe.call(t, i.container, e.type, !0, a)
                }))
            }
        }, {
            key: "proxy",
            value: function(e, t, i) {
                var n = this.player,
                    a = n.config.listeners[i],
                    r = !0;
                Y(a) && (r = a.call(n, e)), !1 !== r && Y(t) && t.call(n, e)
            }
        }, {
            key: "bind",
            value: function(e, t, i, n) {
                var a = this,
                    r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                    s = this.player,
                    o = s.config.listeners[n],
                    l = Y(o);
                Me.call(s, e, t, (function(e) {
                    return a.proxy(e, i, n)
                }), r && !l)
            }
        }, {
            key: "controls",
            value: function() {
                var e = this,
                    t = this.player,
                    i = t.elements,
                    n = oe.isIE ? "change" : "input";
                if (i.buttons.play && Array.from(i.buttons.play).forEach((function(i) {
                        e.bind(i, "click", t.togglePlay, "play")
                    })), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", (function() {
                        t.muted = !t.muted
                    }), "mute"), this.bind(i.buttons.captions, "click", (function() {
                        return t.toggleCaptions()
                    })), this.bind(i.buttons.download, "click", (function() {
                        Oe.call(t, t.media, "download")
                    }), "download"), this.bind(i.buttons.fullscreen, "click", (function() {
                        t.fullscreen.toggle()
                    }), "fullscreen"), this.bind(i.buttons.pip, "click", (function() {
                        t.pip = "toggle"
                    }), "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.googlecast, "click", t.googlecast, "googlecast"), this.bind(i.buttons.settings, "click", (function(e) {
                        e.stopPropagation(), e.preventDefault(), ft.toggleMenu.call(t, e)
                    }), null, !1), this.bind(i.buttons.settings, "keyup", (function(e) {
                        var i = e.which;
                        [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), ft.toggleMenu.call(t, e)) : ft.focusFirstMenuItem.call(t, null, !0))
                    }), null, !1), this.bind(i.settings.menu, "keydown", (function(e) {
                        27 === e.which && ft.toggleMenu.call(t, e)
                    })), this.bind(i.inputs.seek, "mousedown mousemove", (function(e) {
                        var t = i.progress.getBoundingClientRect(),
                            n = 100 / t.width * (e.pageX - t.left);
                        e.currentTarget.setAttribute("seek-value", n)
                    })), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function(e) {
                        var i = e.currentTarget,
                            n = e.keyCode ? e.keyCode : e.which;
                        if (!te(e) || 39 === n || 37 === n) {
                            t.lastSeekTime = Date.now();
                            var a = i.hasAttribute("play-on-seeked"),
                                r = ["mouseup", "touchend", "keyup"].includes(e.type);
                            a && r ? (i.removeAttribute("play-on-seeked"), t.play()) : !r && t.playing && (i.setAttribute("play-on-seeked", ""), t.pause())
                        }
                    })), oe.isIos) {
                    var a = Te.call(t, 'input[type="range"]');
                    Array.from(a).forEach((function(t) {
                        return e.bind(t, n, (function(e) {
                            return se(e.target)
                        }))
                    }))
                }
                this.bind(i.inputs.seek, n, (function(e) {
                    var i = e.currentTarget,
                        n = i.getAttribute("seek-value");
                    ae(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration
                }), "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", (function(e) {
                    return ft.updateSeekTooltip.call(t, e)
                })), this.bind(i.progress, "mousemove touchmove", (function(e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startMove(e)
                })), this.bind(i.progress, "mouseleave touchend click", (function() {
                    var e = t.previewThumbnails;
                    e && e.loaded && e.endMove(!1, !0)
                })), this.bind(i.progress, "mousedown touchstart", (function(e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.startScrubbing(e)
                })), this.bind(i.progress, "mouseup touchend", (function(e) {
                    var i = t.previewThumbnails;
                    i && i.loaded && i.endScrubbing(e)
                })), oe.isWebkit && Array.from(Te.call(t, 'input[type="range"]')).forEach((function(i) {
                    e.bind(i, "input", (function(e) {
                        return ft.updateRangeFill.call(t, e.target)
                    }))
                })), t.config.toggleInvert && !Z(i.display.duration) && this.bind(i.display.currentTime, "click", (function() {
                    0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, ft.timeUpdate.call(t))
                })), this.bind(i.inputs.volume, n, (function(e) {
                    t.volume = e.target.value
                }), "volume"), this.bind(i.controls, "mouseenter mouseleave", (function(e) {
                    i.controls.hover = !t.touch && "mouseenter" === e.type
                })), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", (function(e) {
                    i.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                })), this.bind(i.controls, "focusin", (function() {
                    var n = t.config,
                        a = t.timers;
                    be(i.controls, n.classNames.noTransition, !0), xt.toggleControls.call(t, !0), setTimeout((function() {
                        be(i.controls, n.classNames.noTransition, !1)
                    }), 0);
                    var r = e.touch ? 3e3 : 4e3;
                    clearTimeout(a.controls), a.controls = setTimeout((function() {
                        return xt.toggleControls.call(t, !1)
                    }), r)
                })), this.bind(i.inputs.volume, "wheel", (function(e) {
                    var i = e.webkitDirectionInvertedFromDevice,
                        n = o([e.deltaX, -e.deltaY].map((function(e) {
                            return i ? -e : e
                        })), 2),
                        a = n[0],
                        r = n[1],
                        s = Math.sign(Math.abs(a) > Math.abs(r) ? a : r);
                    t.increaseVolume(s / 50);
                    var l = t.media.volume;
                    (1 === s && l < 1 || -1 === s && l > 0) && e.preventDefault()
                }), "volume", !1)
            }
        }]), e
    }();
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var Dt = function(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }((function(e, t) {
        e.exports = function() {
            var e = function() {},
                t = {},
                i = {},
                n = {};

            function a(e, t) {
                if (e) {
                    var a = n[e];
                    if (i[e] = t, a)
                        for (; a.length;) a[0](e, t), a.splice(0, 1)
                }
            }

            function r(t, i) {
                t.call && (t = {
                    success: t
                }), i.length ? (t.error || e)(i) : (t.success || e)(t)
            }

            function s(t, i, n, a) {
                var r, o, l = document,
                    c = n.async,
                    u = (n.numRetries || 0) + 1,
                    d = n.before || e,
                    h = t.replace(/[\?|#].*$/, ""),
                    p = t.replace(/^(css|img)!/, "");
                a = a || 0, /(^css!|\.css$)/.test(h) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (r = "hideFocus" in o) && o.relList && (r = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function(e) {
                    var l = e.type[0];
                    if (r) try {
                        o.sheet.cssText.length || (l = "e")
                    } catch (e) {
                        18 != e.code && (l = "e")
                    }
                    if ("e" == l) {
                        if ((a += 1) < u) return s(t, i, n, a)
                    } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
                    i(t, l, e.defaultPrevented)
                }, !1 !== d(t, o) && l.head.appendChild(o)
            }

            function o(e, i, n) {
                var o, l;
                if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
                    if (o in t) throw "LoadJS";
                    t[o] = !0
                }

                function c(t, i) {
                    ! function(e, t, i) {
                        var n, a, r = (e = e.push ? e : [e]).length,
                            o = r,
                            l = [];
                        for (n = function(e, i, n) {
                                if ("e" == i && l.push(e), "b" == i) {
                                    if (!n) return;
                                    l.push(e)
                                }--r || t(l)
                            }, a = 0; a < o; a++) s(e[a], n, i)
                    }(e, (function(e) {
                        r(l, e), t && r({
                            success: t,
                            error: i
                        }, e), a(o, e)
                    }), l)
                }
                if (l.returnPromise) return new Promise(c);
                c()
            }
            return o.ready = function(e, t) {
                return function(e, t) {
                    e = e.push ? e : [e];
                    var a, r, s, o = [],
                        l = e.length,
                        c = l;
                    for (a = function(e, i) {
                            i.length && o.push(e), --c || t(o)
                        }; l--;) r = e[l], (s = i[r]) ? a(r, s) : (n[r] = n[r] || []).push(a)
                }(e, (function(e) {
                    r(t, e)
                })), o
            }, o.done = function(e) {
                a(e, [])
            }, o.reset = function() {
                t = {}, i = {}, n = {}
            }, o.isDefined = function(e) {
                return e in t
            }, o
        }()
    }));

    function jt(e) {
        return new Promise((function(t, i) {
            Dt(e, {
                success: t,
                error: i
            })
        }))
    }

    function qt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"))
    }
    var Ht = {
        setup: function() {
            var e = this;
            be(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, He.call(e), W(window.Vimeo) ? Ht.ready.call(e) : jt(e.config.urls.vimeo.sdk).then((function() {
                Ht.ready.call(e)
            })).catch((function(t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }))
        },
        ready: function() {
            var e = this,
                t = this,
                i = t.config.vimeo,
                n = yt(ce({}, {
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    muted: t.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }, i)),
                a = t.media.getAttribute("src");
            ae(a) && (a = t.media.getAttribute(t.config.attributes.embed.id));
            var r, s = ae(r = a) ? null : K(Number(r)) ? r : r.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : r,
                l = he("iframe"),
                c = Ue(t.config.urls.vimeo.iframe, s, n);
            l.setAttribute("src", c), l.setAttribute("allowfullscreen", ""), l.setAttribute("allowtransparency", ""), l.setAttribute("allow", "autoplay"), ae(i.referrerPolicy) || l.setAttribute("referrerPolicy", i.referrerPolicy);
            var u = he("div", {
                poster: t.poster,
                class: t.config.classNames.embedContainer
            });
            u.appendChild(l), t.media = ge(u, t.media), Xe(Ue(t.config.urls.vimeo.api, s), "json").then((function(e) {
                if (!ae(e)) {
                    var i = new URL(e[0].thumbnail_large);
                    i.pathname = "".concat(i.pathname.split("_")[0], ".jpg"), xt.setPoster.call(t, i.href).catch((function() {}))
                }
            })), t.embed = new window.Vimeo.Player(l, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
                return qt.call(t, !0), t.embed.play()
            }, t.media.pause = function() {
                return qt.call(t, !1), t.embed.pause()
            }, t.media.stop = function() {
                t.pause(), t.currentTime = 0
            };
            var d = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function() {
                    return d
                },
                set: function(e) {
                    var i = t.embed,
                        n = t.media,
                        a = t.paused,
                        r = t.volume,
                        s = a && !i.hasPlayed;
                    n.seeking = !0, Oe.call(t, n, "seeking"), Promise.resolve(s && i.setVolume(0)).then((function() {
                        return i.setCurrentTime(e)
                    })).then((function() {
                        return s && i.pause()
                    })).then((function() {
                        return s && i.setVolume(r)
                    })).catch((function() {}))
                }
            });
            var h = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function() {
                    return h
                },
                set: function(e) {
                    t.embed.setPlaybackRate(e).then((function() {
                        h = e, Oe.call(t, t.media, "ratechange")
                    }))
                }
            });
            var p = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function() {
                    return p
                },
                set: function(e) {
                    t.embed.setVolume(e).then((function() {
                        p = e, Oe.call(t, t.media, "volumechange")
                    }))
                }
            });
            var m = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function() {
                    return m
                },
                set: function(e) {
                    var i = !!J(e) && e;
                    t.embed.setVolume(i ? 0 : t.config.volume).then((function() {
                        m = i, Oe.call(t, t.media, "volumechange")
                    }))
                }
            });
            var f, g = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function() {
                    return g
                },
                set: function(e) {
                    var i = J(e) ? e : t.config.loop.active;
                    t.embed.setLoop(i).then((function() {
                        g = i
                    }))
                }
            }), t.embed.getVideoUrl().then((function(e) {
                f = e, ft.setDownloadUrl.call(t)
            })).catch((function(t) {
                e.debug.warn(t)
            })), Object.defineProperty(t.media, "currentSrc", {
                get: function() {
                    return f
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function() {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function(i) {
                var n = o(i, 2),
                    a = n[0],
                    r = n[1];
                t.embed.ratio = [a, r], He.call(e)
            })), t.embed.setAutopause(t.config.autopause).then((function(e) {
                t.config.autopause = e
            })), t.embed.getVideoTitle().then((function(i) {
                t.config.title = i, xt.setTitle.call(e)
            })), t.embed.getCurrentTime().then((function(e) {
                d = e, Oe.call(t, t.media, "timeupdate")
            })), t.embed.getDuration().then((function(e) {
                t.media.duration = e, Oe.call(t, t.media, "durationchange")
            })), t.embed.getTextTracks().then((function(e) {
                t.media.textTracks = e, vt.setup.call(t)
            })), t.embed.on("cuechange", (function(e) {
                var i = e.cues,
                    n = (void 0 === i ? [] : i).map((function(e) {
                        return function(e) {
                            var t = document.createDocumentFragment(),
                                i = document.createElement("div");
                            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                        }(e.text)
                    }));
                vt.updateCues.call(t, n)
            })), t.embed.on("loaded", (function() {
                (t.embed.getPaused().then((function(e) {
                    qt.call(t, !e), e || Oe.call(t, t.media, "playing")
                })), Z(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            })), t.embed.on("bufferstart", (function() {
                Oe.call(t, t.media, "waiting")
            })), t.embed.on("bufferend", (function() {
                Oe.call(t, t.media, "playing")
            })), t.embed.on("play", (function() {
                qt.call(t, !0), Oe.call(t, t.media, "playing")
            })), t.embed.on("pause", (function() {
                qt.call(t, !1)
            })), t.embed.on("timeupdate", (function(e) {
                t.media.seeking = !1, d = e.seconds, Oe.call(t, t.media, "timeupdate")
            })), t.embed.on("progress", (function(e) {
                t.media.buffered = e.percent, Oe.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Oe.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function(e) {
                    e !== t.media.duration && (t.media.duration = e, Oe.call(t, t.media, "durationchange"))
                }))
            })), t.embed.on("seeked", (function() {
                t.media.seeking = !1, Oe.call(t, t.media, "seeked")
            })), t.embed.on("ended", (function() {
                t.media.paused = !0, Oe.call(t, t.media, "ended")
            })), t.embed.on("error", (function(e) {
                t.media.error = e, Oe.call(t, t.media, "error")
            })), setTimeout((function() {
                return xt.build.call(t)
            }), 0)
        }
    };

    function Vt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Oe.call(this, this.media, e ? "play" : "pause"))
    }

    function Ft(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var Ut = {
            setup: function() {
                var e = this;
                if (be(this.elements.wrapper, this.config.classNames.embed, !0), W(window.YT) && Y(window.YT.Player)) Ut.ready.call(this);
                else {
                    var t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function() {
                        Y(t) && t(), Ut.ready.call(e)
                    }, jt(this.config.urls.youtube.sdk).catch((function(t) {
                        e.debug.warn("YouTube API failed to load", t)
                    }))
                }
            },
            getTitle: function(e) {
                var t = this;
                Xe(Ue(this.config.urls.youtube.api, e)).then((function(e) {
                    if (W(e)) {
                        var i = e.title,
                            n = e.height,
                            a = e.width;
                        t.config.title = i, xt.setTitle.call(t), t.embed.ratio = [a, n]
                    }
                    He.call(t)
                })).catch((function() {
                    He.call(t)
                }))
            },
            ready: function() {
                var e = this,
                    t = e.media && e.media.getAttribute("id");
                if (ae(t) || !t.startsWith("youtube-")) {
                    var i = e.media.getAttribute("src");
                    ae(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                    var n, a, r = ae(n = i) ? null : n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : n,
                        s = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
                        o = he("div", {
                            id: s,
                            poster: e.poster
                        });
                    e.media = ge(o, e.media);
                    var l = function(e) {
                        return "https://i.ytimg.com/vi/".concat(r, "/").concat(e, "default.jpg")
                    };
                    _t(l("maxres"), 121).catch((function() {
                        return _t(l("sd"), 121)
                    })).catch((function() {
                        return _t(l("hq"))
                    })).then((function(t) {
                        return xt.setPoster.call(e, t.src)
                    })).then((function(t) {
                        t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                    })).catch((function() {}));
                    var c = e.config.youtube;
                    e.embed = new window.YT.Player(s, {
                        videoId: r,
                        host: Ft(c),
                        playerVars: ce({}, {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui ? 0 : 1,
                            disablekb: 1,
                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, c),
                        events: {
                            onError: function(t) {
                                if (!e.media.error) {
                                    var i = t.data,
                                        n = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        } [i] || "An unknown error occured";
                                    e.media.error = {
                                        code: i,
                                        message: n
                                    }, Oe.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function(t) {
                                var i = t.target;
                                e.media.playbackRate = i.getPlaybackRate(), Oe.call(e, e.media, "ratechange")
                            },
                            onReady: function(t) {
                                if (!Y(e.media.play)) {
                                    var i = t.target;
                                    Ut.getTitle.call(e, r), e.media.play = function() {
                                        Vt.call(e, !0), i.playVideo()
                                    }, e.media.pause = function() {
                                        Vt.call(e, !1), i.pauseVideo()
                                    }, e.media.stop = function() {
                                        i.stopVideo()
                                    }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function() {
                                            return Number(i.getCurrentTime())
                                        },
                                        set: function(t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Oe.call(e, e.media, "seeking"), i.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function() {
                                            return i.getPlaybackRate()
                                        },
                                        set: function(e) {
                                            i.setPlaybackRate(e)
                                        }
                                    });
                                    var n = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function() {
                                            return n
                                        },
                                        set: function(t) {
                                            n = t, i.setVolume(100 * n), Oe.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var a = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function() {
                                            return a
                                        },
                                        set: function(t) {
                                            var n = J(t) ? t : a;
                                            a = n, i[n ? "mute" : "unMute"](), Oe.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function() {
                                            return i.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function() {
                                            return e.currentTime === e.duration
                                        }
                                    });
                                    var s = i.getAvailablePlaybackRates();
                                    e.options.speed = s.filter((function(t) {
                                        return e.config.speed.options.includes(t)
                                    })), e.supported.ui && e.media.setAttribute("tabindex", -1), Oe.call(e, e.media, "timeupdate"), Oe.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function() {
                                        e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Oe.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Oe.call(e, e.media, "canplaythrough"))
                                    }), 200), setTimeout((function() {
                                        return xt.build.call(e)
                                    }), 50)
                                }
                            },
                            onStateChange: function(t) {
                                var i = t.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Oe.call(e, e.media, "seeked")), t.data) {
                                    case -1:
                                        Oe.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Oe.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        Vt.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Oe.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (Vt.call(e, !0), Oe.call(e, e.media, "playing"), e.timers.playing = setInterval((function() {
                                            Oe.call(e, e.media, "timeupdate")
                                        }), 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Oe.call(e, e.media, "durationchange"))) : e.media.pause();
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), Vt.call(e, !1);
                                        break;
                                    case 3:
                                        Oe.call(e, e.media, "waiting")
                                }
                                Oe.call(e, e.elements.container, "statechange", !1, {
                                    code: t.data
                                })
                            }
                        }
                    })
                }
            }
        },
        Bt = {
            setup: function() {
                this.media ? (be(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), be(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && be(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = he("div", {
                    class: this.config.classNames.video
                }), ue(this.media, this.elements.wrapper), this.isEmbed && (this.elements.poster = he("div", {
                    class: this.config.classNames.poster
                }), this.elements.wrapper.appendChild(this.elements.poster))), this.isHTML5 ? Ve.setup.call(this) : this.isYouTube ? Ut.setup.call(this) : this.isVimeo && Ht.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        zt = function() {
            function e(i) {
                var n = this;
                t(this, e), this.player = i, this.config = i.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function(e, t) {
                    n.on("loaded", e), n.on("error", t)
                })), this.load()
            }
            return n(e, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.enabled && (W(window.google) && W(window.google.ima) ? this.ready() : jt(this.player.config.urls.googleIMA.sdk).then((function() {
                        e.ready()
                    })).catch((function() {
                        e.trigger("error", new Error("Google IMA SDK failed to load"))
                    })))
                }
            }, {
                key: "ready",
                value: function() {
                    var e, t = this;
                    this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then((function() {
                        t.clearSafetyTimer("onAdsManagerLoaded()")
                    })), this.listeners(), this.setupIMA()
                }
            }, {
                key: "setupIMA",
                value: function() {
                    this.elements.container = he("div", {
                        class: this.player.config.classNames.ads
                    }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.requestAds()
                }
            }, {
                key: "requestAds",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    try {
                        this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function(t) {
                            return e.onAdsManagerLoaded(t)
                        }), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(t) {
                            return e.onAdError(t)
                        }), !1);
                        var i = new google.ima.AdsRequest;
                        i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i)
                    } catch (e) {
                        this.onAdError(e)
                    }
                }
            }, {
                key: "pollCountdown",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                    var i = function() {
                        var t = tt(Math.max(e.manager.getRemainingTime(), 0)),
                            i = "".concat(Je("advertisement", e.player.config), " - ").concat(t);
                        e.elements.container.setAttribute("data-badge-text", i)
                    };
                    this.countdownTimer = setInterval(i, 100)
                }
            }, {
                key: "onAdsManagerLoaded",
                value: function(e) {
                    var t = this;
                    if (this.enabled) {
                        var i = new google.ima.AdsRenderingSettings;
                        i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function(e) {
                            return t.onAdError(e)
                        })), Object.keys(google.ima.AdEvent.Type).forEach((function(e) {
                            t.manager.addEventListener(google.ima.AdEvent.Type[e], (function(e) {
                                return t.onAdEvent(e)
                            }))
                        })), this.trigger("loaded")
                    }
                }
            }, {
                key: "addCuePoints",
                value: function() {
                    var e = this;
                    ae(this.cuePoints) || this.cuePoints.forEach((function(t) {
                        if (0 !== t && -1 !== t && t < e.player.duration) {
                            var i = e.player.elements.progress;
                            if (Z(i)) {
                                var n = 100 / e.player.duration * t,
                                    a = he("span", {
                                        class: e.player.config.classNames.cues
                                    });
                                a.style.left = "".concat(n.toString(), "%"), i.appendChild(a)
                            }
                        }
                    }))
                }
            }, {
                key: "onAdEvent",
                value: function(e) {
                    var t = this,
                        i = this.player.elements.container,
                        n = e.getAd(),
                        a = e.getAdData();
                    switch (function(e) {
                            Oe.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                        }(e.type), e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            this.manager.setVolume(this.player.volume);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            this.loadAds();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            this.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            this.pollCountdown(), this.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.LOG:
                            a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))
                    }
                }
            }, {
                key: "onAdError",
                value: function(e) {
                    this.cancel(), this.player.debug.warn("Ads error", e)
                }
            }, {
                key: "listeners",
                value: function() {
                    var e, t = this,
                        i = this.player.elements.container;
                    this.player.on("canplay", (function() {
                        t.addCuePoints()
                    })), this.player.on("ended", (function() {
                        t.loader.contentComplete()
                    })), this.player.on("timeupdate", (function() {
                        e = t.player.currentTime
                    })), this.player.on("seeked", (function() {
                        var i = t.player.currentTime;
                        ae(t.cuePoints) || t.cuePoints.forEach((function(n, a) {
                            e < n && n < i && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1))
                        }))
                    })), window.addEventListener("resize", (function() {
                        t.manager && t.manager.resize(i.offsetWidth, i.offsetHeight, google.ima.ViewMode.NORMAL)
                    }))
                }
            }, {
                key: "play",
                value: function() {
                    var e = this,
                        t = this.player.elements.container;
                    this.managerPromise || this.resumeContent(), this.managerPromise.then((function() {
                        e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();
                        try {
                            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
                        } catch (t) {
                            e.onAdError(t)
                        }
                    })).catch((function() {}))
                }
            }, {
                key: "resumeContent",
                value: function() {
                    this.elements.container.style.zIndex = "", this.playing = !1, this.player.media.play()
                }
            }, {
                key: "pauseContent",
                value: function() {
                    this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                }
            }, {
                key: "cancel",
                value: function() {
                    this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                }
            }, {
                key: "loadAds",
                value: function() {
                    var e = this;
                    this.managerPromise.then((function() {
                        e.manager && e.manager.destroy(), e.managerPromise = new Promise((function(t) {
                            e.on("loaded", t), e.player.debug.log(e.manager)
                        })), e.requestAds()
                    })).catch((function() {}))
                }
            }, {
                key: "trigger",
                value: function(e) {
                    for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                    var r = this.events[e];
                    X(r) && r.forEach((function(e) {
                        Y(e) && e.apply(t, n)
                    }))
                }
            }, {
                key: "on",
                value: function(e, t) {
                    return X(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
                }
            }, {
                key: "startSafetyTimer",
                value: function(e, t) {
                    var i = this;
                    this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout((function() {
                        i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
                    }), e)
                }
            }, {
                key: "clearSafetyTimer",
                value: function(e) {
                    z(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                }
            }, {
                key: "enabled",
                get: function() {
                    var e = this.config;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!ae(e.publisherId) || ne(e.tagUrl))
                }
            }, {
                key: "tagUrl",
                get: function() {
                    var e = this.config;
                    if (e.vasturl) return e.vasturl;
                    if (ne(e.tagUrl)) return e.tagUrl;
                    var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(yt(t))
                }
            }]), e
        }(),
        Wt = function(e, t) {
            var i = {};
            return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
        },
        Kt = function() {
            function e(i) {
                t(this, e), this.player = i, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            return n(e, [{
                key: "load",
                value: function() {
                    var e = this;
                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then((function() {
                        e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0)
                    }))
                }
            }, {
                key: "getThumbnails",
                value: function() {
                    var e = this;
                    return new Promise((function(t) {
                        var i = e.player.config.previewThumbnails.src;
                        if (ae(i)) throw new Error("Missing previewThumbnails.src config attribute");
                        var n = (G(i) ? [i] : i).map((function(t) {
                            return e.getThumbnail(t)
                        }));
                        Promise.all(n).then((function() {
                            e.thumbnails.sort((function(e, t) {
                                return e.height - t.height
                            })), e.player.debug.log("Preview thumbnails", e.thumbnails), t()
                        }))
                    }))
                }
            }, {
                key: "getThumbnail",
                value: function(e) {
                    var t = this;
                    return new Promise((function(i) {
                        Xe(e).then((function(n) {
                            var a, r, s = {
                                frames: (a = n, r = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach((function(e) {
                                        if (K(t.startTime)) {
                                            if (!ae(e.trim()) && ae(t.text)) {
                                                var i = e.trim().split("#xywh="),
                                                    n = o(i, 1);
                                                if (t.text = n[0], i[1]) {
                                                    var a = o(i[1].split(","), 4);
                                                    t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3]
                                                }
                                            }
                                        } else {
                                            var r = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                            r && (t.startTime = 60 * Number(r[1] || 0) * 60 + 60 * Number(r[2]) + Number(r[3]) + Number("0.".concat(r[4])), t.endTime = 60 * Number(r[6] || 0) * 60 + 60 * Number(r[7]) + Number(r[8]) + Number("0.".concat(r[9])))
                                        }
                                    })), t.text && r.push(t)
                                })), r),
                                height: null,
                                urlPrefix: ""
                            };
                            s.frames[0].text.startsWith("/") || s.frames[0].text.startsWith("http://") || s.frames[0].text.startsWith("https://") || (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            var l = new Image;
                            l.onload = function() {
                                s.height = l.naturalHeight, s.width = l.naturalWidth, t.thumbnails.push(s), i()
                            }, l.src = s.urlPrefix + s.frames[0].text
                        }))
                    }))
                }
            }, {
                key: "startMove",
                value: function(e) {
                    if (this.loaded && ee(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                        if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                        else {
                            var t = this.player.elements.progress.getBoundingClientRect(),
                                i = 100 / t.width * (e.pageX - t.left);
                            this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = tt(this.seekTime)
                        }
                        this.showImageAtCurrentTime()
                    }
                }
            }, {
                key: "endMove",
                value: function() {
                    this.toggleThumbContainer(!1, !0)
                }
            }, {
                key: "startScrubbing",
                value: function(e) {
                    (z(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                }
            }, {
                key: "endScrubbing",
                value: function() {
                    var e = this;
                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Ne.call(this.player, this.player.media, "timeupdate", (function() {
                        e.mouseDown || e.toggleScrubbingContainer(!1)
                    }))
                }
            }, {
                key: "listeners",
                value: function() {
                    var e = this;
                    this.player.on("play", (function() {
                        e.toggleThumbContainer(!1, !0)
                    })), this.player.on("seeked", (function() {
                        e.toggleThumbContainer(!1)
                    })), this.player.on("timeupdate", (function() {
                        e.lastTime = e.player.media.currentTime
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    this.elements.thumb.container = he("div", {
                        class: this.player.config.classNames.previewThumbnails.thumbContainer
                    }), this.elements.thumb.imageContainer = he("div", {
                        class: this.player.config.classNames.previewThumbnails.imageContainer
                    }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                    var e = he("div", {
                        class: this.player.config.classNames.previewThumbnails.timeContainer
                    });
                    this.elements.thumb.time = he("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), Z(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = he("div", {
                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                }
            }, {
                key: "showImageAtCurrentTime",
                value: function() {
                    var e = this;
                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                    var t = this.thumbnails[0].frames.findIndex((function(t) {
                            return e.seekTime >= t.startTime && e.seekTime <= t.endTime
                        })),
                        i = t >= 0,
                        n = 0;
                    this.mouseDown || this.toggleThumbContainer(i), i && (this.thumbnails.forEach((function(i, a) {
                        e.loadedImages.includes(i.frames[t].text) && (n = a)
                    })), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)))
                }
            }, {
                key: "loadImage",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = this.showingThumb,
                        n = this.thumbnails[t],
                        a = n.urlPrefix,
                        r = n.frames[i],
                        s = n.frames[i].text,
                        o = a + s;
                    if (this.currentImageElement && this.currentImageElement.dataset.filename === s) this.showImage(this.currentImageElement, r, t, i, s, !1), this.currentImageElement.dataset.index = i, this.removeOldImages(this.currentImageElement);
                    else {
                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                        var l = new Image;
                        l.src = o, l.dataset.index = i, l.dataset.filename = s, this.showingThumbFilename = s, this.player.debug.log("Loading image: ".concat(o)), l.onload = function() {
                            return e.showImage(l, r, t, i, s, !0)
                        }, this.loadingImage = l, this.removeOldImages(l)
                    }
                }
            }, {
                key: "showImage",
                value: function(e, t, i, n, a) {
                    var r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    this.player.debug.log("Showing thumb: ".concat(a, ". num: ").concat(n, ". qual: ").concat(i, ". newimg: ").concat(r)), this.setImageSizeAndOffset(e, t), r && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, a))
                }
            }, {
                key: "removeOldImages",
                value: function(e) {
                    var t = this;
                    Array.from(this.currentImageContainer.children).forEach((function(i) {
                        if ("img" === i.tagName.toLowerCase()) {
                            var n = t.usingSprites ? 500 : 1e3;
                            if (i.dataset.index !== e.dataset.index && !i.dataset.deleting) {
                                i.dataset.deleting = !0;
                                var a = t.currentImageContainer;
                                setTimeout((function() {
                                    a.removeChild(i), t.player.debug.log("Removing thumb: ".concat(i.dataset.filename))
                                }), n)
                            }
                        }
                    }))
                }
            }, {
                key: "preloadNearby",
                value: function(e) {
                    var t = this,
                        i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise((function(n) {
                        setTimeout((function() {
                            var a = t.thumbnails[0].frames[e].text;
                            if (t.showingThumbFilename === a) {
                                var r;
                                r = i ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
                                var s = !1;
                                r.forEach((function(e) {
                                    var i = e.text;
                                    if (i !== a && !t.loadedImages.includes(i)) {
                                        s = !0, t.player.debug.log("Preloading thumb filename: ".concat(i));
                                        var r = t.thumbnails[0].urlPrefix + i,
                                            o = new Image;
                                        o.src = r, o.onload = function() {
                                            t.player.debug.log("Preloaded thumb filename: ".concat(i)), t.loadedImages.includes(i) || t.loadedImages.push(i), n()
                                        }
                                    }
                                })), s || n()
                            }
                        }), 300)
                    }))
                }
            }, {
                key: "getHigherQuality",
                value: function(e, t, i, n) {
                    var a = this;
                    if (e < this.thumbnails.length - 1) {
                        var r = t.naturalHeight;
                        this.usingSprites && (r = i.h), r < this.thumbContainerHeight && setTimeout((function() {
                            a.showingThumbFilename === n && (a.player.debug.log("Showing higher quality thumb for: ".concat(n)), a.loadImage(e + 1))
                        }), 300)
                    }
                }
            }, {
                key: "toggleThumbContainer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                    this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                }
            }, {
                key: "toggleScrubbingContainer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                }
            }, {
                key: "determineContainerAutoSizing",
                value: function() {
                    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                }
            }, {
                key: "setThumbContainerSizeAndPos",
                value: function() {
                    if (this.sizeSpecifiedInCSS) {
                        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                        }
                    } else {
                        var i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(i, "px")
                    }
                    this.setThumbContainerPos()
                }
            }, {
                key: "setThumbContainerPos",
                value: function() {
                    var e = this.player.elements.progress.getBoundingClientRect(),
                        t = this.player.elements.container.getBoundingClientRect(),
                        i = this.elements.thumb.container,
                        n = t.left - e.left + 10,
                        a = t.right - e.left - i.clientWidth - 10,
                        r = this.mousePosX - e.left - i.clientWidth / 2;
                    r < n && (r = n), r > a && (r = a), i.style.left = "".concat(r, "px")
                }
            }, {
                key: "setScrubbingContainerSize",
                value: function() {
                    var e = Wt(this.thumbAspectRatio, {
                            width: this.player.media.clientWidth,
                            height: this.player.media.clientHeight
                        }),
                        t = e.width,
                        i = e.height;
                    this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(i, "px")
                }
            }, {
                key: "setImageSizeAndOffset",
                value: function(e, t) {
                    if (this.usingSprites) {
                        var i = this.thumbContainerHeight / t.h;
                        e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px")
                    }
                }
            }, {
                key: "enabled",
                get: function() {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                }
            }, {
                key: "currentImageContainer",
                get: function() {
                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                }
            }, {
                key: "usingSprites",
                get: function() {
                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                }
            }, {
                key: "thumbAspectRatio",
                get: function() {
                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                }
            }, {
                key: "thumbContainerHeight",
                get: function() {
                    return this.mouseDown ? Wt(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                }
            }, {
                key: "currentImageElement",
                get: function() {
                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                },
                set: function(e) {
                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                }
            }]), e
        }(),
        Gt = {
            insertElements: function(e, t) {
                var i = this;
                G(t) ? pe(e, this.media, {
                    src: t
                }) : X(t) && t.forEach((function(t) {
                    pe(e, i.media, t)
                }))
            },
            change: function(e) {
                var t = this;
                le(e, "sources.length") ? (Ve.cancelRequests.call(this), this.destroy.call(this, (function() {
                    t.options.quality = [], me(t.media), t.media = null, Z(t.elements.container) && t.elements.container.removeAttribute("class");
                    var i = e.sources,
                        n = e.type,
                        a = o(i, 1)[0],
                        r = a.provider,
                        s = void 0 === r ? Tt.html5 : r,
                        l = a.src,
                        c = "html5" === s ? n : "div",
                        u = "html5" === s ? {} : {
                            src: l
                        };
                    Object.assign(t, {
                        provider: s,
                        type: n,
                        supported: Pe.check(n, s, t.config.playsinline),
                        media: he(c, u)
                    }), t.elements.container.appendChild(t.media), J(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), ae(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), xt.addStyleHook.call(t), t.isHTML5 && Gt.insertElements.call(t, "source", i), t.config.title = e.title, Bt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && Gt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && xt.build.call(t), t.isHTML5 && t.media.load(), ae(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Kt(t))), t.fullscreen.update()
                }), !0)) : this.debug.warn("Invalid source format")
            }
        };
    var Jt = {
            setup: function() {
                if (Jt.local = this, Jt.events = {
                        play: Jt.onPlayOrPause,
                        pause: Jt.onPlayOrPause,
                        seeked: Jt.onSeeked,
                        volumechange: Jt.onVolumeChange,
                        qualityrequested: Jt.loadMedia
                    }, window.__onGCastApiAvailable = function(e) {
                        Pe.googlecast = e, Pe.googlecast && (be(Jt.local.elements.container, Jt.local.config.classNames.googlecast.supported, Pe.googlecast), cast.framework.CastContext.getInstance().setOptions({
                            receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                            autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                        }), Jt.remote = new cast.framework.RemotePlayer, Jt.remoteController = new cast.framework.RemotePlayerController(Jt.remote), Jt.remoteController.addEventListener(cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED, Jt.onConnect), Jt.remoteController.addEventListener(cast.framework.RemotePlayerEventType.IS_PAUSED_CHANGED, (function() {
                            Jt.remote.isPaused ? Jt.local.pause() : Jt.local.play()
                        })), Jt.remoteController.addEventListener(cast.framework.RemotePlayerEventType.IS_MUTED_CHANGED, (function() {
                            Jt.local.muted = Jt.remote.isMuted
                        })), Jt.remoteController.addEventListener(cast.framework.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, (function() {
                            Jt.local.volume = Jt.remote.volumeLevel
                        })))
                    }, /Google Inc/.test(navigator.vendor) && -1 != navigator.userAgent.indexOf("Chrome") && -1 == navigator.userAgent.indexOf("CriOS")) {
                    var e = document.createElement("script");
                    e.src = this.config.urls.googleCast.sdk, document.body.appendChild(e)
                }
            },
            onConnect: function() {
                Jt.remote.isConnected ? (Object.keys(Jt.events).forEach((function(e) {
                    Jt.local.on(e, Jt.events[e])
                })), Jt.onVolumeChange(), Jt.loadMedia()) : Object.keys(Jt.events).forEach((function(e) {
                    Jt.local.off(e, Jt.events[e])
                }))
            },
            onPlayOrPause: function() {
                Jt.remoteController.playOrPause()
            },
            onSeeked: function() {
                Jt.remote.currentTime = Jt.local.currentTime, Jt.remoteController.seek()
            },
            onVolumeChange: function() {
                Jt.remote.volumeLevel = Jt.local.muted ? 0 : Jt.local.volume, Jt.remoteController.setVolumeLevel()
            },
            loadMedia: function() {
                var e = Jt.local.source,
                    t = function() {
                        var e = cast.framework.CastContext.getInstance().getCurrentSession(),
                            t = new chrome.cast.media.MediaInfo(Jt.local.source);
                        t.metadata = new chrome.cast.media.GenericMediaMetadata, t.metadata.metadataType = chrome.cast.media.MetadataType.GENERIC, t.metadata.title = Jt.local.config.title || Jt.local.source, t.metadata.images = [{
                            url: Jt.local.poster
                        }];
                        var i = new chrome.cast.media.LoadRequest(t);
                        i.autoplay = Jt.local.playing, i.currentTime = Jt.local.currentTime, e.loadMedia(i)
                    }; - 1 != e.indexOf("/get_video") ? fetch(e + "&plain=1").then((function(e) {
                    return e.text()
                })).then((function(e) {
                    t()
                })) : t()
            }
        },
        Yt = {},
        Xt = null,
        $t = null,
        Qt = 0;

    function Zt() {
        var e = JSON.stringify(Yt);
        localStorage.setItem("player_resume", e)
    }

    function ei() {
        var e = localStorage.getItem("player_resume");
        if (e && "" != e) {
            Yt = JSON.parse(e);
            var t = (new Date).getTime() - 12096e5;
            for (var i in Yt) Yt.hasOwnProperty(i) && Yt[i].created_at && Yt[i].created_at < t && delete Yt[i]
        }
        $t in Yt ? function(e) {
            if (!(e < 60)) {
                var t = Math.floor(e / 60).toString();
                1 == t.length && (t = "0" + t);
                var i = Math.floor(e % 60).toString();
                1 == i.length && (i = "0" + i);
                var n = he("div", {
                        class: "plyr__menu__container plyr__resume"
                    }),
                    a = function() {
                        n.parentElement.removeChild(n)
                    },
                    r = he("div", {
                        role: "menu"
                    }),
                    s = he("span", {});
                s.innerHTML = "Resume at " + t + ":" + i + "?";
                var o = he("div", {}),
                    l = he("button", {
                        class: "plyr__control plyr__resume__yes"
                    }, "Yes"),
                    c = he("button", {
                        class: "plyr__control"
                    }, "No");
                l.addEventListener("click", (function() {
                    a(), Xt.currentTime = e
                })), c.addEventListener("click", (function() {
                    a(), Yt[$t].created_at = 0, Zt()
                })), o.appendChild(l), o.appendChild(c), r.appendChild(s), r.appendChild(o), n.appendChild(r), Xt.elements.controls.appendChild(n), Xt.once("playing", (function() {
                    a()
                }))
            }
        }(Yt[$t].time) : Yt[$t] = {
            time: 0,
            created_at: (new Date).getTime()
        }
    }

    function ti() {
        var e = (new Date).getTime();
        Qt + 1e4 < e && (Qt = e, Yt[$t].time = Xt.currentTime, Yt[$t].created_at = e, Zt())
    }
    var ii = function() {
        function e(i, n) {
            var a = this;
            t(this, e), this.player = i, this.seekSeconds = 10, this.tapTimeout = 350, this.el = this.createEl(), this.toggleEl = he("div", {
                class: "plyr-play-control"
            }), this.toggleEl.addEventListener("click", (function() {
                i.togglePlay()
            }));
            var r = he("span", {
                class: "plyr-icon-placeholder"
            });
            this.toggleEl.appendChild(r), this.el.appendChild(this.toggleEl), i.on("playing", (function(e) {
                a.el.classList.remove("show-play-toggle")
            })), i.on("controlshidden", (function(e) {
                a.el.classList.remove("show-play-toggle")
            })), this.handleTap = this.handleTap.bind(this), this.handleSingleTap = this.handleSingleTap.bind(this), this.handleDoubleTap = this.handleDoubleTap.bind(this), this.enable()
        }
        return n(e, [{
            key: "createEl",
            value: function() {
                var e = he("div", {
                    class: "plyr-touch-overlay",
                    tabIndex: -1
                });
                return this.player.elements.container.appendChild(e), e
            }
        }, {
            key: "handleTap",
            value: function(e) {
                var t = this;
                e.target === this.el && (e.preventDefault(), this.firstTapCaptured ? (this.firstTapCaptured = !1, this.timeout && window.clearTimeout(this.timeout), this.handleDoubleTap(e)) : (this.firstTapCaptured = !0, this.timeout = window.setTimeout((function() {
                    t.firstTapCaptured = !1, t.handleSingleTap(e)
                }), this.tapTimeout)))
            }
        }, {
            key: "handleSingleTap",
            value: function(e) {
                this.el.classList.remove("skip"), be(this.el, "show-play-toggle")
            }
        }, {
            key: "handleDoubleTap",
            value: function(e) {
                var t = this,
                    i = this.el.getBoundingClientRect(),
                    n = e.changedTouches[0].clientX - i.left;
                if (n < .4 * i.width) this.player.currentTime = Math.max(0, this.player.currentTime - this.seekSeconds), this.el.classList.add("reverse");
                else {
                    if (!(n > i.width - .4 * i.width)) return;
                    this.player.currentTime = Math.min(this.player.duration, this.player.currentTime + this.seekSeconds), this.el.classList.remove("reverse")
                }
                this.el.classList.remove("show-play-toggle"), this.el.classList.remove("skip"), window.requestAnimationFrame((function() {
                    t.el.classList.add("skip")
                }))
            }
        }, {
            key: "enable",
            value: function() {
                this.firstTapCaptured = !1, this.el.addEventListener("touchend", this.handleTap), this.player.on("play", this.updateToggler), this.player.on("pause", this.updateToggler)
            }
        }, {
            key: "disable",
            value: function() {
                this.el.removeEventListener("touchend", this.handleTap), this.player.off("play", this.updateToggler), this.player.off("pause", this.updateToggler)
            }
        }]), e
    }();

    function ni(e) {
        for (var t = e.media.querySelectorAll("track"), i = 0; i < t.length; i++) {
            var n = t[i],
                a = n.src || "";
            a.startsWith("http") && "readyState" in n && "ERROR" in n && n.readyState == n.ERROR && (n.removeAttribute("src"), n.src = a)
        }
    }! function(t, i) {
        function n(e) {
            return function() {
                var t = {
                        method: e
                    },
                    i = Array.prototype.slice.call(arguments);
                /^get/.test(e) ? (a.assert(i.length > 0, "Get methods require a callback."), i.unshift(t)) : (/^set/.test(e) && (a.assert(0 !== i.length, "Set methods require a value."), t.value = i[0]), i = [t]), this.send.apply(this, i)
            }
        }
        var a = {
            DEBUG: !1,
            VERSION: "0.0.11",
            CONTEXT: "player.js"
        };
        a.POST_MESSAGE = !!t.postMessage, a.origin = function(e) {
            return "//" === e.substr(0, 2) && (e = t.location.protocol + e), e.split("/").slice(0, 3).join("/")
        }, a.addEvent = function(e, t, i) {
            e && (e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i)
        }, a.log = function() {
            a.log.history = a.log.history || [], a.log.history.push(arguments), t.console && a.DEBUG && t.console.log(Array.prototype.slice.call(arguments))
        }, a.isString = function(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }, a.isObject = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }, a.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, a.isNone = function(e) {
            return null == e
        }, a.has = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.indexOf = function(e, t) {
            if (null == e) return -1;
            var i = 0,
                n = e.length;
            if (Array.prototype.IndexOf && e.indexOf === Array.prototype.IndexOf) return e.indexOf(t);
            for (; n > i; i++)
                if (e[i] === t) return i;
            return -1
        }, a.assert = function(e, t) {
            if (!e) throw t || "Player.js Assert Failed"
        }, a.Keeper = function() {
            this.init()
        }, a.Keeper.prototype.init = function() {
            this.data = {}
        }, a.Keeper.prototype.getUUID = function() {
            return "listener-xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            }))
        }, a.Keeper.prototype.has = function(e, t) {
            if (!this.data.hasOwnProperty(e)) return !1;
            if (a.isNone(t)) return !0;
            for (var i = this.data[e], n = 0; n < i.length; n++)
                if (i[n].id === t) return !0;
            return !1
        }, a.Keeper.prototype.add = function(e, t, i, n, a) {
            var r = {
                id: e,
                event: t,
                cb: i,
                ctx: n,
                one: a
            };
            this.has(t) ? this.data[t].push(r) : this.data[t] = [r]
        }, a.Keeper.prototype.execute = function(e, t, i, n) {
            if (!this.has(e, t)) return !1;
            for (var r = [], s = [], o = 0; o < this.data[e].length; o++) {
                var l = this.data[e][o];
                a.isNone(t) || !a.isNone(t) && l.id === t ? (s.push({
                    cb: l.cb,
                    ctx: l.ctx ? l.ctx : n,
                    data: i
                }), !1 === l.one && r.push(l)) : r.push(l)
            }
            0 === r.length ? delete this.data[e] : this.data[e] = r;
            for (var c = 0; c < s.length; c++) {
                var u = s[c];
                u.cb.call(u.ctx, u.data)
            }
        }, a.Keeper.prototype.on = function(e, t, i, n) {
            this.add(e, t, i, n, !1)
        }, a.Keeper.prototype.one = function(e, t, i, n) {
            this.add(e, t, i, n, !0)
        }, a.Keeper.prototype.off = function(e, t) {
            var i = [];
            if (!this.data.hasOwnProperty(e)) return i;
            for (var n = [], r = 0; r < this.data[e].length; r++) {
                var s = this.data[e][r];
                a.isNone(t) || s.cb === t ? a.isNone(s.id) || i.push(s.id) : n.push(s)
            }
            return 0 === n.length ? delete this.data[e] : this.data[e] = n, i
        }, a.Player = function(e, t) {
            return this instanceof a.Player ? void this.init(e, t) : new a.Player(e, t)
        }, a.EVENTS = {
            READY: "ready",
            PLAY: "play",
            PAUSE: "pause",
            ENDED: "ended",
            TIMEUPDATE: "timeupdate",
            PROGRESS: "progress",
            ERROR: "error"
        }, a.EVENTS.all = function() {
            var e = [];
            for (var t in a.EVENTS) a.has(a.EVENTS, t) && a.isString(a.EVENTS[t]) && e.push(a.EVENTS[t]);
            return e
        }, a.METHODS = {
            PLAY: "play",
            PAUSE: "pause",
            GETPAUSED: "getPaused",
            MUTE: "mute",
            UNMUTE: "unmute",
            GETMUTED: "getMuted",
            SETVOLUME: "setVolume",
            GETVOLUME: "getVolume",
            GETDURATION: "getDuration",
            SETCURRENTTIME: "setCurrentTime",
            GETCURRENTTIME: "getCurrentTime",
            SETLOOP: "setLoop",
            GETLOOP: "getLoop",
            REMOVEEVENTLISTENER: "removeEventListener",
            ADDEVENTLISTENER: "addEventListener"
        }, a.METHODS.all = function() {
            var e = [];
            for (var t in a.METHODS) a.has(a.METHODS, t) && a.isString(a.METHODS[t]) && e.push(a.METHODS[t]);
            return e
        }, a.READIED = [], a.Player.prototype.init = function(e, n) {
            var r = this;
            a.isString(e) && (e = i.getElementById(e)), this.elem = e, a.assert("IFRAME" === e.nodeName, 'playerjs.Player constructor requires an Iframe, got "' + e.nodeName + '"'), a.assert(e.src, "playerjs.Player constructor requires a Iframe with a 'src' attribute."), this.origin = a.origin(e.src), this.keeper = new a.Keeper, this.isReady = !1, this.queue = [], this.events = a.EVENTS.all(), this.methods = a.METHODS.all(), a.POST_MESSAGE ? a.addEvent(t, "message", (function(e) {
                r.receive(e)
            })) : a.log("Post Message is not Available."), a.indexOf(a.READIED, e.src) > -1 ? r.loaded = !0 : this.elem.onload = function() {
                r.loaded = !0
            }
        }, a.Player.prototype.send = function(e, t, i) {
            if (e.context = a.CONTEXT, e.version = a.VERSION, t) {
                var n = this.keeper.getUUID();
                e.listener = n, this.keeper.one(n, e.method, t, i)
            }
            return this.isReady || "ready" === e.value ? (a.log("Player.send", e, this.origin), !0 === this.loaded && this.elem.contentWindow.postMessage(JSON.stringify(e), this.origin), !0) : (a.log("Player.queue", e), this.queue.push(e), !1)
        }, a.Player.prototype.receive = function(e) {
            if (a.log("Player.receive", e), e.origin !== this.origin) return !1;
            var t;
            try {
                t = JSON.parse(e.data)
            } catch (e) {
                return !1
            }
            return t.context === a.CONTEXT && ("ready" === t.event && t.value && t.value.src === this.elem.src && this.ready(t), void(this.keeper.has(t.event, t.listener) && this.keeper.execute(t.event, t.listener, t.value, this)))
        }, a.Player.prototype.ready = function(e) {
            if (!0 === this.isReady) return !1;
            e.value.events && (this.events = e.value.events), e.value.methods && (this.methods = e.value.methods), this.isReady = !0, this.loaded = !0;
            for (var t = 0; t < this.queue.length; t++) {
                var i = this.queue[t];
                a.log("Player.dequeue", i), "ready" === e.event && this.keeper.execute(i.event, i.listener, !0, this), this.send(i)
            }
            this.queue = []
        }, a.Player.prototype.on = function(e, t, i) {
            var n = this.keeper.getUUID();
            return "ready" === e ? this.keeper.one(n, e, t, i) : this.keeper.on(n, e, t, i), this.send({
                method: "addEventListener",
                value: e,
                listener: n
            }), !0
        }, a.Player.prototype.off = function(e, t) {
            var i = this.keeper.off(e, t);
            if (a.log("Player.off", i), i.length > 0)
                for (var n in i) return this.send({
                    method: "removeEventListener",
                    value: e,
                    listener: i[n]
                }), !0;
            return !1
        }, a.Player.prototype.supports = function(e, t) {
            a.assert(a.indexOf(["method", "event"], e) > -1, 'evtOrMethod needs to be either "event" or "method" got ' + e), t = a.isArray(t) ? t : [t];
            for (var i = "event" === e ? this.events : this.methods, n = 0; n < t.length; n++)
                if (-1 === a.indexOf(i, t[n])) return !1;
            return !0
        };
        for (var r = 0, s = a.METHODS.all().length; s > r; r++) {
            var o = a.METHODS.all()[r];
            a.Player.prototype.hasOwnProperty(o) || (a.Player.prototype[o] = n(o))
        }
        a.addEvent(t, "message", (function(e) {
            var t;
            try {
                t = JSON.parse(e.data)
            } catch (e) {
                return !1
            }
            return t.context === a.CONTEXT && void("ready" === t.event && t.value && t.value.src && a.READIED.push(t.value.src))
        })), a.Receiver = function(e, t) {
            this.init(e, t)
        }, a.Receiver.prototype.init = function(e, n) {
            var r = this;
            this.isReady = !1, this.origin = a.origin(i.referrer), this.methods = {}, this.supported = {
                events: e || a.EVENTS.all(),
                methods: n || a.METHODS.all()
            }, this.eventListeners = {}, this.reject = !(t.self !== t.top && a.POST_MESSAGE), this.reject || a.addEvent(t, "message", (function(e) {
                r.receive(e)
            }))
        }, a.Receiver.prototype.receive = function(e) {
            if (e.origin !== this.origin) return !1;
            var i = {};
            if (a.isObject(e.data)) i = e.data;
            else try {
                i = t.JSON.parse(e.data)
            } catch (e) {
                a.log("JSON Parse Error", e)
            }
            if (a.log("Receiver.receive", e, i), !i.method) return !1;
            if (i.context !== a.CONTEXT) return !1;
            if (-1 === a.indexOf(a.METHODS.all(), i.method)) return this.emit("error", {
                code: 2,
                msg: 'Invalid Method "' + i.method + '"'
            }), !1;
            var n = a.isNone(i.listener) ? null : i.listener;
            if ("addEventListener" === i.method) this.eventListeners.hasOwnProperty(i.value) ? -1 === a.indexOf(this.eventListeners[i.value], n) && this.eventListeners[i.value].push(n) : this.eventListeners[i.value] = [n], "ready" === i.value && this.isReady && this.ready();
            else if ("removeEventListener" === i.method) {
                if (this.eventListeners.hasOwnProperty(i.value)) {
                    var r = a.indexOf(this.eventListeners[i.value], n);
                    r > -1 && this.eventListeners[i.value].splice(r, 1), 0 === this.eventListeners[i.value].length && delete this.eventListeners[i.value]
                }
            } else this.get(i.method, i.value, n)
        }, a.Receiver.prototype.get = function(e, t, i) {
            var n = this;
            if (!this.methods.hasOwnProperty(e)) return this.emit("error", {
                code: 3,
                msg: 'Method Not Supported"' + e + '"'
            }), !1;
            var a = this.methods[e];
            if ("get" === e.substr(0, 3)) {
                a.call(this, (function(t) {
                    n.send(e, t, i)
                }))
            } else a.call(this, t)
        }, a.Receiver.prototype.on = function(e, t) {
            this.methods[e] = t
        }, a.Receiver.prototype.send = function(e, i, n) {
            if (a.log("Receiver.send", e, i, n), this.reject) return a.log("Receiver.send.reject", e, i, n), !1;
            var r = {
                context: a.CONTEXT,
                version: a.VERSION,
                event: e
            };
            a.isNone(i) || (r.value = i), a.isNone(n) || (r.listener = n);
            var s = JSON.stringify(r);
            t.parent.postMessage(s, "" === this.origin ? "*" : this.origin)
        }, a.Receiver.prototype.emit = function(e, t) {
            if (!this.eventListeners.hasOwnProperty(e)) return !1;
            a.log("Instance.emit", e, t, this.eventListeners[e]);
            for (var i = 0; i < this.eventListeners[e].length; i++) {
                var n = this.eventListeners[e][i];
                this.send(e, t, n)
            }
            return !0
        }, a.Receiver.prototype.ready = function() {
            a.log("Receiver.ready"), this.isReady = !0;
            var e = {
                src: t.location.toString(),
                events: this.supported.events,
                methods: this.supported.methods
            };
            this.emit("ready", e) || this.send("ready", e)
        }, a.HTML5Adapter = function(e) {
            return this instanceof a.HTML5Adapter ? void this.init(e) : new a.HTML5Adapter(e)
        }, a.HTML5Adapter.prototype.init = function(e) {
            a.assert(e, "playerjs.HTML5Adapter requires a video element");
            var t = this.receiver = new a.Receiver;
            e.addEventListener("playing", (function() {
                t.emit("play")
            })), e.addEventListener("pause", (function() {
                t.emit("pause")
            })), e.addEventListener("ended", (function() {
                t.emit("ended")
            })), e.addEventListener("timeupdate", (function() {
                t.emit("timeupdate", {
                    seconds: e.currentTime,
                    duration: e.duration
                })
            })), e.addEventListener("progress", (function() {
                t.emit("buffered", {
                    percent: e.buffered.length
                })
            })), t.on("play", (function() {
                e.play()
            })), t.on("pause", (function() {
                e.pause()
            })), t.on("getPaused", (function(t) {
                t(e.paused)
            })), t.on("getCurrentTime", (function(t) {
                t(e.currentTime)
            })), t.on("setCurrentTime", (function(t) {
                e.currentTime = t
            })), t.on("getDuration", (function(t) {
                t(e.duration)
            })), t.on("getVolume", (function(t) {
                t(100 * e.volume)
            })), t.on("setVolume", (function(t) {
                e.volume = t / 100
            })), t.on("mute", (function() {
                e.muted = !0
            })), t.on("unmute", (function() {
                e.muted = !1
            })), t.on("getMuted", (function(t) {
                t(e.muted)
            })), t.on("getLoop", (function(t) {
                t(e.loop)
            })), t.on("setLoop", (function(t) {
                e.loop = t
            }))
        }, a.HTML5Adapter.prototype.ready = function() {
            this.receiver.ready()
        }, a.JWPlayerAdapter = function(e) {
            return this instanceof a.JWPlayerAdapter ? void this.init(e) : new a.JWPlayerAdapter(e)
        }, a.JWPlayerAdapter.prototype.init = function(e) {
            a.assert(e, "playerjs.JWPlayerAdapter requires a player object");
            var t = this.receiver = new a.Receiver;
            this.looped = !1, e.on("pause", (function() {
                t.emit("pause")
            })), e.on("play", (function() {
                t.emit("play")
            })), e.on("time", (function(e) {
                var i = e.position,
                    n = e.duration;
                if (!i || !n) return !1;
                var a = {
                    seconds: i,
                    duration: n
                };
                t.emit("timeupdate", a)
            }));
            var i = this;
            e.on("complete", (function() {
                !0 === i.looped ? e.seek(0) : t.emit("ended")
            })), e.on("error", (function() {
                t.emit("error")
            })), t.on("play", (function() {
                e.play(!0)
            })), t.on("pause", (function() {
                e.pause(!0)
            })), t.on("getPaused", (function(t) {
                t(e.getState().toLowerCase() !== "PLAYING".toLowerCase())
            })), t.on("getCurrentTime", (function(t) {
                t(e.getPosition())
            })), t.on("setCurrentTime", (function(t) {
                e.seek(t)
            })), t.on("getDuration", (function(t) {
                t(e.getDuration())
            })), t.on("getVolume", (function(t) {
                t(e.getVolume())
            })), t.on("setVolume", (function(t) {
                e.setVolume(t)
            })), t.on("mute", (function() {
                e.setMute(!0)
            })), t.on("unmute", (function() {
                e.setMute(!1)
            })), t.on("getMuted", (function(t) {
                t(!0 === e.getMute())
            })), t.on("getLoop", (function(e) {
                e(this.looped)
            }), this), t.on("setLoop", (function(e) {
                this.looped = e
            }), this)
        }, a.JWPlayerAdapter.prototype.ready = function() {
            this.receiver.ready()
        }, a.MockAdapter = function() {
            return this instanceof a.MockAdapter ? void this.init() : new a.MockAdapter
        }, a.MockAdapter.prototype.init = function() {
            var e = {
                    duration: 20,
                    currentTime: 0,
                    interval: null,
                    timeupdate: function() {},
                    volume: 100,
                    mute: !1,
                    playing: !1,
                    loop: !1,
                    play: function() {
                        e.interval = setInterval((function() {
                            e.currentTime += .25, e.timeupdate({
                                seconds: e.currentTime,
                                duration: e.duration
                            })
                        }), 250), e.playing = !0
                    },
                    pause: function() {
                        clearInterval(e.interval), e.playing = !1
                    }
                },
                t = this.receiver = new a.Receiver;
            t.on("play", (function() {
                var t = this;
                e.play(), this.emit("play"), e.timeupdate = function(e) {
                    t.emit("timeupdate", e)
                }
            })), t.on("pause", (function() {
                e.pause(), this.emit("pause")
            })), t.on("getPaused", (function(t) {
                t(!e.playing)
            })), t.on("getCurrentTime", (function(t) {
                t(e.currentTime)
            })), t.on("setCurrentTime", (function(t) {
                e.currentTime = t
            })), t.on("getDuration", (function(t) {
                t(e.duration)
            })), t.on("getVolume", (function(t) {
                t(e.volume)
            })), t.on("setVolume", (function(t) {
                e.volume = t
            })), t.on("mute", (function() {
                e.mute = !0
            })), t.on("unmute", (function() {
                e.mute = !1
            })), t.on("getMuted", (function(t) {
                t(e.mute)
            })), t.on("getLoop", (function(t) {
                t(e.loop)
            })), t.on("setLoop", (function(t) {
                e.loop = t
            }))
        }, a.MockAdapter.prototype.ready = function() {
            this.receiver.ready()
        }, a.VideoJSAdapter = function(e) {
            return this instanceof a.VideoJSAdapter ? void this.init(e) : new a.VideoJSAdapter(e)
        }, a.VideoJSAdapter.prototype.init = function(e) {
            a.assert(e, "playerjs.VideoJSReceiver requires a player object");
            var t = this.receiver = new a.Receiver;
            e.on("pause", (function() {
                t.emit("pause")
            })), e.on("play", (function() {
                t.emit("play")
            })), e.on("timeupdate", (function(i) {
                var n = e.currentTime(),
                    a = e.duration();
                if (!n || !a) return !1;
                var r = {
                    seconds: n,
                    duration: a
                };
                t.emit("timeupdate", r)
            })), e.on("ended", (function() {
                t.emit("ended")
            })), e.on("error", (function() {
                t.emit("error")
            })), t.on("play", (function() {
                e.play()
            })), t.on("pause", (function() {
                e.pause()
            })), t.on("getPaused", (function(t) {
                t(e.paused())
            })), t.on("getCurrentTime", (function(t) {
                t(e.currentTime())
            })), t.on("setCurrentTime", (function(t) {
                e.currentTime(t)
            })), t.on("getDuration", (function(t) {
                t(e.duration())
            })), t.on("getVolume", (function(t) {
                t(100 * e.volume())
            })), t.on("setVolume", (function(t) {
                e.volume(t / 100)
            })), t.on("mute", (function() {
                e.volume(0)
            })), t.on("unmute", (function() {
                e.volume(1)
            })), t.on("getMuted", (function(t) {
                t(0 === e.volume())
            })), t.on("getLoop", (function(t) {
                t(e.loop())
            })), t.on("setLoop", (function(t) {
                e.loop(t)
            }))
        }, a.VideoJSAdapter.prototype.ready = function() {
            this.receiver.ready()
        }, "function" == typeof define && define.amd ? define((function() {
            return a
        })) : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports ? module.exports = a : t.playerjs = a
    }(window, document);
    var ai, ri = function() {
        function e(i, n) {
            var a = this;
            if (t(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.started = !1, this.touch = Pe.touch, this.media = i, G(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Q(this.media) || X(this.media)) && (this.media = this.media[0]), this.config = ce({}, bt, e.defaults, n || {}, function() {
                    try {
                        return JSON.parse(a.media.getAttribute("data-plyr-config"))
                    } catch (e) {
                        return {}
                    }
                }()), this.elements = {
                    container: null,
                    captions: null,
                    buttons: {},
                    display: {},
                    progress: {},
                    inputs: {},
                    settings: {
                        popup: null,
                        menu: null,
                        panels: {},
                        buttons: {}
                    }
                }, this.captions = {
                    active: null,
                    currentTrack: -1,
                    meta: new WeakMap
                }, this.fullscreen = {
                    active: !1
                }, this.options = {
                    speed: [],
                    quality: []
                }, this.debug = new At(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Pe), !z(this.media) && Z(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (Pe.check().api) {
                    var r = this.media.cloneNode(!0);
                    r.autoplay = !1, this.elements.original = r;
                    var s = this.media.tagName.toLowerCase(),
                        o = null,
                        l = null;
                    switch (s) {
                        case "div":
                            if (o = this.media.querySelector("iframe"), Z(o)) {
                                if (l = gt(o.getAttribute("src")), this.provider = function(e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? Tt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? Tt.vimeo : null
                                    }(l.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", l.search.length) {
                                    var c = ["1", "true"];
                                    c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (ae(this.provider) || !Object.keys(Tt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = Ct;
                            break;
                        case "video":
                        case "audio":
                            this.type = s, this.provider = Tt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    if (this.supported = Pe.check(this.type, this.provider, this.config.playsinline), this.supported.api) {
                        if (this.eventListeners = [], this.listeners = new Rt(this), this.storage = new Ye(this), this.media.plyr = this, Z(this.elements.container) || (this.elements.container = he("div", {
                                tabindex: 0
                            }), ue(this.media, this.elements.container)), function() {
                                try {
                                    if ("localStorage" in window) {
                                        var e = localStorage.getItem("subsize");
                                        e && (e = parseInt(e), !isNaN(e) && e && (it = e), 100 != it && rt())
                                    }
                                } catch (e) {}
                            }(), xt.addStyleHook.call(this), Bt.setup.call(this), this.config.debug && Me.call(this, this.elements.container, this.config.events.join(" "), (function(e) {
                                a.debug.log("event: ".concat(e.type))
                            })), (this.isHTML5 || this.isEmbed && !this.supported.ui) && xt.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new Pt(this), this.config.ads.enabled && (this.ads = new zt(this)), this.isHTML5 && this.config.autoplay && setTimeout((function() {
                                return a.play()
                            }), 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Kt(this)), Jt.setup.call(this), window.vidconfig && "" != window.vidconfig.showtitle) {
                            var u = vidconfig.showtitle,
                                d = he("div", {
                                    class: "plyr-dock-text"
                                }),
                                h = he("div", {
                                    class: "plyr-dock-title",
                                    title: u
                                }, u);
                            d.appendChild(h), this.elements.container.appendChild(d)
                        }
                        if (window.vidconfig && "" != window.vidconfig.logo) {
                            d = he("img", {
                                class: "creatorlogo",
                                src: window.vidconfig.logo
                            });
                            this.elements.container.appendChild(d)
                        }
                        oe.isIPhone && this.elements.container.classList.add("plyr-iphone-captions"),
                            function() {
                                if (!dt) {
                                    dt = !0;
                                    try {
                                        var e = ut(),
                                            t = null;
                                        if ("color" in e ? t = e.color : window.vidconfig && window.vidconfig.color && (t = window.vidconfig.color), t) {
                                            if (!/^[0-9]+,[0-9]+,[0-9]+$/.test(t)) return;
                                            at(".plyr-container .plyr--full-ui input[type=range]{color:rgb(" + t + ")}.plyr-container .plyr__control--overlaid{background:rgba(" + t + ",.8)}.plyr-container .plyr__control--overlaid:focus,.plyr-container .plyr__control--overlaid:hover{background:rgba(" + t + ",.5)!important}.plyr--video a.plyr__control.plyr__tab-focus,.plyr--video a.plyr__control:hover,.plyr--video button.plyr__control.plyr__tab-focus,.plyr--video button.plyr__control:hover{background:rgba(" + t + ",.5)!important}.plyr--video a.plyr__control[aria-expanded=true],.plyr--video button.plyr__control[aria-expanded=true]{background:rgba(" + t + ",.5)!important}.plyr__control.plyr__tab-focus{box-shadow:0 0 0 5px rgba(" + t + ",.5)!important}.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before,div.plyr--video .plyr__menu__container .plyr__control.plyr__tab-focus,div.plyr--video .plyr__menu__container .plyr__control:hover,div.plyr--video .plyr__menu__container .plyr__control[aria-expanded=true]{background:rgb(" + t + ")!important}.plyr__resume .plyr__resume__yes{border:1px solid rgb(" + t + ")!important}")
                                        }
                                    } catch (e) {}
                                }
                            }(), this.resizeObserver = null, this._toObserve = null, this._videoEl = null, this.once("ready", (function() {
                                try {
                                    a._toObserve = a.elements.wrapper, a._videoEl = a.elements.container.querySelector("video");
                                    try {
                                        t = a._videoEl, playerjs.HTML5Adapter(t).ready()
                                    } catch (e) {}
                                    if (!oe.isMobile && null != a._videoEl && "ResizeObserver" in window) {
                                        a.resizeObserver = new ResizeObserver(a.onResize.bind(a)), a.resizeObserver.observe(a._toObserve);
                                        var e = null;
                                        a.on("exitfullscreen", (function() {
                                            a._videoEl.style.width = "100%", a._videoEl.style.height = "100%", setTimeout((function() {
                                                a._videoEl.style.width = "100%", a._videoEl.style.height = "100%"
                                            }), 10), e = setTimeout((function() {
                                                a.onResize(), e = null
                                            }), 400)
                                        })), a.on("enterfullscreen", (function() {
                                            e && clearTimeout(e)
                                        }))
                                    }
                                } catch (e) {}
                                var t
                            })), this.once("play", (function() {
                                try {
                                    var e = a.elements.buttons.play[0];
                                    e.classList.add("plyr__do--anim"), setTimeout((function() {
                                        return e.classList.add("plyr__done-anim")
                                    }), 800)
                                } catch (e) {}
                            }));
                        try {
                            ht()
                        } catch (e) {}! function(e) {
                            try {
                                if (!("localStorage" in window)) return;
                                if (!window.vidconfig || !window.vidconfig.id) return;
                                $t = window.vidconfig.id, Xt = e, ei(), Qt = (new Date).getTime(), Xt.media.addEventListener("timeupdate", ti)
                            } catch (e) {}
                        }(this);
                        try {
                            Lt = this, Mt = he("div", {
                                    class: "plyr__anim anim"
                                }), Lt.elements.container.appendChild(Mt), Lt.once("play", (function() {
                                    setTimeout((function() {
                                        return Nt = !0
                                    }), 1e3)
                                })), Lt.on("play", Ot), Lt.on("pause", Ot),
                                function(e) {
                                    (oe.isIos || oe.isAndroid) && (new ii(e), e.elements.container.classList.add("plyr-mobile-ui"))
                                }(this)
                        } catch (e) {}
                        this.once("play", (function() {
                            try {
                                ni(a)
                            } catch (e) {}
                        })), this.once("loadedmetadata", (function() {
                            try {
                                ni(a)
                            } catch (e) {}
                        }))
                    } else this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return n(e, [{
            key: "onResize",
            value: function() {
                this.resizeObserver && this._videoEl && this._toObserve && (this._videoEl.style.width = this._toObserve.offsetWidth + "px", this._videoEl.style.height = this._toObserve.offsetHeight + "px")
            }
        }, {
            key: "play",
            value: function() {
                var e = this;
                return Y(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then((function() {
                    return e.ads.play()
                })).catch((function() {
                    return e.media.play()
                })), this.media.play()) : null
            }
        }, {
            key: "pause",
            value: function() {
                return this.playing && Y(this.media.pause) ? this.media.pause() : null
            }
        }, {
            key: "togglePlay",
            value: function(e) {
                return (J(e) ? e : !this.playing) ? this.play() : this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.isHTML5 ? (this.pause(), this.restart()) : Y(this.media.stop) && this.media.stop()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(e) {
                this.currentTime -= K(e) ? e : this.config.seekTime
            }
        }, {
            key: "forward",
            value: function(e) {
                this.currentTime += K(e) ? e : this.config.seekTime
            }
        }, {
            key: "increaseVolume",
            value: function(e) {
                var t = this.media.muted ? 0 : this.volume;
                this.volume = t + (K(e) ? e : 0)
            }
        }, {
            key: "decreaseVolume",
            value: function(e) {
                this.increaseVolume(-e)
            }
        }, {
            key: "toggleCaptions",
            value: function(e) {
                vt.toggle.call(this, e, !1)
            }
        }, {
            key: "airplay",
            value: function() {
                Pe.airplay && this.media.webkitShowPlaybackTargetPicker()
            }
        }, {
            key: "googlecast",
            value: function() {
                Pe.googlecast && cast.framework.CastContext.getInstance().requestSession()
            }
        }, {
            key: "toggleControls",
            value: function(e) {
                if (this.supported.ui && !this.isAudio) {
                    var t = we(this.elements.container, this.config.classNames.hideControls),
                        i = void 0 === e ? void 0 : !e,
                        n = be(this.elements.container, this.config.classNames.hideControls, i);
                    if (n && this.config.controls.includes("settings") && !ae(this.config.settings) && ft.toggleMenu.call(this, !1), n !== t) {
                        var a = n ? "controlshidden" : "controlsshown";
                        Oe.call(this, this.media, a)
                    }
                    return !n
                }
                return !1
            }
        }, {
            key: "on",
            value: function(e, t) {
                Me.call(this, this.elements.container, e, t)
            }
        }, {
            key: "once",
            value: function(e, t) {
                Ne.call(this, this.elements.container, e, t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                Le(this.elements.container, e, t)
            }
        }, {
            key: "destroy",
            value: function(e) {
                var t = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (this.ready) {
                    var n = function() {
                        document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (me(t.elements.buttons.play), me(t.elements.captions), me(t.elements.controls), me(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), Y(e) && e()) : (Ie.call(t), ge(t.elements.original, t.elements.container), Oe.call(t, t.elements.original, "destroyed", !0), Y(e) && e.call(t.elements.original), t.ready = !1, setTimeout((function() {
                            t.elements = null, t.media = null
                        }), 200))
                    };
                    this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (xt.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && Y(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200)), this.resizeObserver && this.resizeObserver.disconnect()
                }
            }
        }, {
            key: "supports",
            value: function(e) {
                return Pe.mime.call(this, e)
            }
        }, {
            key: "isHTML5",
            get: function() {
                return this.provider === Tt.html5
            }
        }, {
            key: "isEmbed",
            get: function() {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function() {
                return this.provider === Tt.youtube
            }
        }, {
            key: "isVimeo",
            get: function() {
                return this.provider === Tt.vimeo
            }
        }, {
            key: "isVideo",
            get: function() {
                return this.type === Ct
            }
        }, {
            key: "isAudio",
            get: function() {
                return this.type === Et
            }
        }, {
            key: "playing",
            get: function() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
        }, {
            key: "paused",
            get: function() {
                return Boolean(this.media.paused)
            }
        }, {
            key: "stopped",
            get: function() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
        }, {
            key: "ended",
            get: function() {
                return Boolean(this.media.ended)
            }
        }, {
            key: "currentTime",
            set: function(e) {
                if (this.duration) {
                    var t = K(e) && e > 0;
                    this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                }
            },
            get: function() {
                return Number(this.media.currentTime)
            }
        }, {
            key: "buffered",
            get: function() {
                var e = this.media.buffered;
                return K(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return Boolean(this.media.seeking)
            }
        }, {
            key: "duration",
            get: function() {
                var e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    i = K(t) && t !== 1 / 0 ? t : 0;
                return e || i
            }
        }, {
            key: "volume",
            set: function(e) {
                var t = e;
                G(t) && (t = Number(t)), K(t) || (t = this.storage.get("volume")), K(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !ae(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function(e) {
                var t = e;
                J(t) || (t = this.storage.get("muted")), J(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function() {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function() {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function(e) {
                var t = this,
                    i = null;
                K(e) && (i = e), K(i) || (i = this.storage.get("speed")), K(i) || (i = this.config.speed.selected);
                var n = this.minimumSpeed,
                    a = this.maximumSpeed;
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), i)
                }(i, n, a), this.config.speed.selected = i, setTimeout((function() {
                    t.media.playbackRate = i
                }), 0)
            },
            get: function() {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "minimumSpeed",
            get: function() {
                return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625
            }
        }, {
            key: "maximumSpeed",
            get: function() {
                return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16
            }
        }, {
            key: "quality",
            set: function(e) {
                var t = this.config.quality,
                    i = this.options.quality;
                if (i.length) {
                    var n = [!ae(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(K),
                        a = !0;
                    if (!i.includes(n)) {
                        var r = function(e, t) {
                            return X(e) && e.length ? e.reduce((function(e, i) {
                                return Math.abs(i - t) < Math.abs(e - t) ? i : e
                            })) : null
                        }(i, n);
                        this.debug.warn("Unsupported quality option: ".concat(n, ", using ").concat(r, " instead")), n = r, a = !1
                    }
                    t.selected = n, this.media.quality = n, a && this.storage.set({
                        quality: n
                    })
                }
            },
            get: function() {
                return this.media.quality
            }
        }, {
            key: "loop",
            set: function(e) {
                var t = J(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function() {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function(e) {
                Gt.change.call(this, e)
            },
            get: function() {
                return this.media.currentSrc
            }
        }, {
            key: "download",
            get: function() {
                var e = this.config.urls.download;
                return ne(e) ? e : this.source
            },
            set: function(e) {
                ne(e) && (this.config.urls.download = e, ft.setDownloadUrl.call(this))
            }
        }, {
            key: "poster",
            set: function(e) {
                this.isVideo ? xt.setPoster.call(this, e, !1).catch((function() {})) : this.debug.warn("Poster can only be set for video")
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "ratio",
            get: function() {
                if (!this.isVideo) return null;
                var e = je(qe.call(this));
                return X(e) ? e.join(":") : e
            },
            set: function(e) {
                this.isVideo ? G(e) && De(e) ? (this.config.ratio = e, He.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
            }
        }, {
            key: "autoplay",
            set: function(e) {
                var t = J(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function() {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function(e) {
                vt.set.call(this, e, !1)
            },
            get: function() {
                var e = this.captions,
                    t = e.toggled,
                    i = e.currentTrack;
                return t ? i : -1
            }
        }, {
            key: "language",
            set: function(e) {
                vt.setLanguage.call(this, e, !1)
            },
            get: function() {
                return (vt.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function(e) {
                if (Pe.pip) {
                    var t = J(e) ? e : !this.pip;
                    Y(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? wt : kt), Y(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                }
            },
            get: function() {
                return Pe.pip ? ae(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === wt : null
            }
        }], [{
            key: "supported",
            value: function(e, t, i) {
                return Pe.check(e, t, i)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return $e(e, t)
            }
        }, {
            key: "setup",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = null;
                return G(t) ? n = Array.from(document.querySelectorAll(t)) : Q(t) ? n = Array.from(t) : X(t) && (n = t.filter(Z)), ae(n) ? null : n.map((function(t) {
                    return new e(t, i)
                }))
            }
        }]), e
    }();
    return ri.defaults = (ai = bt, JSON.parse(JSON.stringify(ai))), ri
}));

//# sourceMappingURL=plyr.min.js.map