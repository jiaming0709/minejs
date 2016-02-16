/*
 AngularJS v1.5.0-rc.0
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (S, Z, u) {
    'use strict';
    function P(a) {
        return function () {
            var b = arguments[0], d;
            d = "[" + (a ? a + ":" : "") + b + "] http://errors.angularjs.org/1.5.0-rc.0/" + (a ? a + "/" : "") + b;
            for (b = 1; b < arguments.length; b++) {
                d = d + (1 == b ? "?" : "&") + "p" + (b - 1) + "=";
                var c = encodeURIComponent, e;
                e = arguments[b];
                e = "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof e ? "undefined" : "string" != typeof e ? JSON.stringify(e) : e;
                d += c(e)
            }
            return Error(d)
        }
    }

    function Ca(a) {
        if (null == a || Za(a))return !1;
        if (K(a) || G(a) || A && a instanceof
            A)return !0;
        var b = "length"in Object(a) && a.length;
        return U(b) && (0 <= b && b - 1 in a || "function" == typeof a.item)
    }

    function n(a, b, d) {
        var c, e;
        if (a)if (D(a))for (c in a)"prototype" == c || "length" == c || "name" == c || a.hasOwnProperty && !a.hasOwnProperty(c) || b.call(d, a[c], c, a); else if (K(a) || Ca(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++)(f || c in a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== n)a.forEach(b, d, a); else if (oc(a))for (c in a)b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) &&
        b.call(d, a[c], c, a); else for (c in a)qa.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function pc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)b.call(d, a[c[e]], c[e]);
        return c
    }

    function qc(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function Wd() {
        return ++pb
    }

    function Ob(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g = b[e];
            if (J(g) || D(g))for (var h = Object.keys(g), k = 0, l = h.length; k < l; k++) {
                var m = h[k], s = g[m];
                d && J(s) ? ba(s) ? a[m] = new Date(s.valueOf()) : Oa(s) ? a[m] = new RegExp(s) : s.nodeName ? a[m] = s.cloneNode(!0) :
                    Pb(s) ? a[m] = s.clone() : (J(a[m]) || (a[m] = K(s) ? [] : {}), Ob(a[m], [s], !0)) : a[m] = s
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function L(a) {
        return Ob(a, wa.call(arguments, 1), !1)
    }

    function Xd(a) {
        return Ob(a, wa.call(arguments, 1), !0)
    }

    function ea(a) {
        return parseInt(a, 10)
    }

    function Qb(a, b) {
        return L(Object.create(a), b)
    }

    function w() {
    }

    function $a(a) {
        return a
    }

    function ka(a) {
        return function () {
            return a
        }
    }

    function rc(a) {
        return D(a.toString) && a.toString !== ra
    }

    function x(a) {
        return "undefined" === typeof a
    }

    function z(a) {
        return "undefined" !== typeof a
    }

    function J(a) {
        return null !== a && "object" === typeof a
    }

    function oc(a) {
        return null !== a && "object" === typeof a && !sc(a)
    }

    function G(a) {
        return "string" === typeof a
    }

    function U(a) {
        return "number" === typeof a
    }

    function ba(a) {
        return "[object Date]" === ra.call(a)
    }

    function D(a) {
        return "function" === typeof a
    }

    function Oa(a) {
        return "[object RegExp]" === ra.call(a)
    }

    function Za(a) {
        return a && a.window === a
    }

    function ab(a) {
        return a && a.$evalAsync && a.$watch
    }

    function bb(a) {
        return "boolean" === typeof a
    }

    function tc(a) {
        return a && U(a.length) &&
            Yd.test(ra.call(a))
    }

    function Pb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function Zd(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d = 0; d < a.length; d++)b[a[d]] = !0;
        return b
    }

    function ta(a) {
        return H(a.nodeName || a[0] && a[0].nodeName)
    }

    function cb(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function Pa(a, b) {
        function d(a, b) {
            var d = b.$$hashKey, e;
            if (K(a)) {
                e = 0;
                for (var f = a.length; e < f; e++)b.push(c(a[e]))
            } else if (oc(a))for (e in a)b[e] = c(a[e]); else if (a && "function" === typeof a.hasOwnProperty)for (e in a)a.hasOwnProperty(e) &&
            (b[e] = c(a[e])); else for (e in a)qa.call(a, e) && (b[e] = c(a[e]));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function c(a) {
            if (!J(a))return a;
            var b = e.indexOf(a);
            if (-1 !== b)return f[b];
            if (Za(a) || ab(a))throw Da("cpws");
            var b = !1, c;
            K(a) ? (c = [], b = !0) : tc(a) ? c = new a.constructor(a) : ba(a) ? c = new Date(a.getTime()) : Oa(a) ? (c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), c.lastIndex = a.lastIndex) : D(a.cloneNode) ? c = a.cloneNode(!0) : (c = Object.create(sc(a)), b = !0);
            e.push(a);
            f.push(c);
            return b ? d(a, c) : c
        }

        var e = [], f = [];
        if (b) {
            if (tc(b))throw Da("cpta");
            if (a === b)throw Da("cpi");
            K(b) ? b.length = 0 : n(b, function (a, c) {
                "$$hashKey" !== c && delete b[c]
            });
            e.push(a);
            f.push(b);
            return d(a, b)
        }
        return c(a)
    }

    function V(a, b) {
        if (K(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++)b[d] = a[d]
        } else if (J(a))for (d in b = b || {}, a)if ("$" !== d.charAt(0) || "$" !== d.charAt(1))b[d] = a[d];
        return b || a
    }

    function la(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var d = typeof a, c;
        if (d == typeof b && "object" == d)if (K(a)) {
            if (!K(b))return !1;
            if ((d = a.length) == b.length) {
                for (c = 0; c <
                d; c++)if (!la(a[c], b[c]))return !1;
                return !0
            }
        } else {
            if (ba(a))return ba(b) ? la(a.getTime(), b.getTime()) : !1;
            if (Oa(a))return Oa(b) ? a.toString() == b.toString() : !1;
            if (ab(a) || ab(b) || Za(a) || Za(b) || K(b) || ba(b) || Oa(b))return !1;
            d = X();
            for (c in a)if ("$" !== c.charAt(0) && !D(a[c])) {
                if (!la(a[c], b[c]))return !1;
                d[c] = !0
            }
            for (c in b)if (!(c in d) && "$" !== c.charAt(0) && z(b[c]) && !D(b[c]))return !1;
            return !0
        }
        return !1
    }

    function db(a, b, d) {
        return a.concat(wa.call(b, d))
    }

    function uc(a, b) {
        var d = 2 < arguments.length ? wa.call(arguments, 2) : [];
        return !D(b) ||
        b instanceof RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function $d(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = u : Za(b) ? d = "$WINDOW" : b && Z === b ? d = "$DOCUMENT" : ab(b) && (d = "$SCOPE");
        return d
    }

    function eb(a, b) {
        if ("undefined" === typeof a)return u;
        U(b) || (b = b ? 2 : null);
        return JSON.stringify(a, $d, b)
    }

    function vc(a) {
        return G(a) ? JSON.parse(a) : a
    }

    function wc(a, b) {
        var d = Date.parse("Jan 01, 1970 00:00:00 " +
                a) / 6E4;
        return isNaN(d) ? b : d
    }

    function Rb(a, b, d) {
        d = d ? -1 : 1;
        var c = wc(b, a.getTimezoneOffset());
        b = a;
        a = d * (c - a.getTimezoneOffset());
        b = new Date(b.getTime());
        b.setMinutes(b.getMinutes() + a);
        return b
    }

    function ua(a) {
        a = A(a).clone();
        try {
            a.empty()
        } catch (b) {
        }
        var d = A("<div>").append(a).html();
        try {
            return a[0].nodeType === Qa ? H(d) : d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return "<" + H(b)
            })
        } catch (c) {
            return H(d)
        }
    }

    function xc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function yc(a) {
        var b = {};
        n((a || "").split("&"),
            function (a) {
                var c, e, f;
                a && (e = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = xc(e), z(e) && (f = z(f) ? xc(f) : !0, qa.call(b, e) ? K(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
            });
        return b
    }

    function Sb(a) {
        var b = [];
        n(a, function (a, c) {
            K(a) ? n(a, function (a) {
                b.push(ga(c, !0) + (!0 === a ? "" : "=" + ga(a, !0)))
            }) : b.push(ga(c, !0) + (!0 === a ? "" : "=" + ga(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function qb(a) {
        return ga(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ga(a,
                b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ae(a, b) {
        var d, c, e = Ra.length;
        for (c = 0; c < e; ++c)if (d = Ra[c] + b, G(d = a.getAttribute(d)))return d;
        return null
    }

    function be(a, b) {
        var d, c, e = {};
        n(Ra, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        n(Ra, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b))
        });
        d && (e.strictDi = null !== ae(d, "strict-di"), b(d, c ? [c] : [], e))
    }

    function zc(a, b, d) {
        J(d) || (d = {});
        d = L({strictDi: !1}, d);
        var c = function () {
            a = A(a);
            if (a.injector()) {
                var c = a[0] === Z ? "document" : ua(a);
                throw Da("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            b.unshift("ng");
            c = fb(b, d.strictDi);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a,
                                                                                       b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return c
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        S && e.test(S.name) && (d.debugInfoEnabled = !0, S.name = S.name.replace(e, ""));
        if (S && !f.test(S.name))return c();
        S.name = S.name.replace(f, "");
        $.resumeBootstrap = function (a) {
            n(a, function (a) {
                b.push(a)
            });
            return c()
        };
        D($.resumeDeferredBootstrap) && $.resumeDeferredBootstrap()
    }

    function ce() {
        S.name = "NG_ENABLE_DEBUG_INFO!" + S.name;
        S.location.reload()
    }

    function de(a) {
        a = $.element(a).injector();
        if (!a)throw Da("test");
        return a.get("$$testability")
    }

    function Ac(a, b) {
        b = b || "_";
        return a.replace(ee, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function fe() {
        var a;
        if (!Bc) {
            var b = rb();
            (xa = x(b) ? S.jQuery : b ? S[b] : u) && xa.fn.on ? (A = xa, L(xa.fn, {
                scope: Sa.scope,
                isolateScope: Sa.isolateScope,
                controller: Sa.controller,
                injector: Sa.injector,
                inheritedData: Sa.inheritedData
            }), a = xa.cleanData, xa.cleanData = function (b) {
                for (var c, e = 0, f; null != (f = b[e]); e++)(c = xa._data(f, "events")) && c.$destroy && xa(f).triggerHandler("$destroy");
                a(b)
            }) : A = E;
            $.element =
                A;
            Bc = !0
        }
    }

    function sb(a, b, d) {
        if (!a)throw Da("areq", b || "?", d || "required");
        return a
    }

    function Ta(a, b, d) {
        d && K(a) && (a = a[a.length - 1]);
        sb(D(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Ua(a, b) {
        if ("hasOwnProperty" === a)throw Da("badname", b);
    }

    function Cc(a, b, d) {
        if (!b)return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++)c = b[g], a && (a = (e = a)[c]);
        return !d && D(a) ? uc(e, a) : a
    }

    function tb(a) {
        for (var b = a[0], d = a[a.length - 1], c, e = 1; b !== d && (b = b.nextSibling); e++)if (c ||
            a[e] !== b)c || (c = A(wa.call(a, 0, e))), c.push(b);
        return c || a
    }

    function X() {
        return Object.create(null)
    }

    function ge(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = P("$injector"), c = P("ng"), e = b(a, "angular", Object);
        e.$$minErr = e.$$minErr || P;
        return b(e, "module", function () {
            var a = {};
            return function (g, h, k) {
                if ("hasOwnProperty" === g)throw c("badname", "module");
                h && a.hasOwnProperty(g) && (a[g] = null);
                return b(a, g, function () {
                    function a(b, d, e, f) {
                        f || (f = c);
                        return function () {
                            f[e || "push"]([b, d, arguments]);
                            return t
                        }
                    }

                    function b(a,
                               d) {
                        return function (b, e) {
                            e && D(e) && (e.$$moduleName = g);
                            c.push([a, d, arguments]);
                            return t
                        }
                    }

                    if (!h)throw d("nomod", g);
                    var c = [], f = [], B = [], Q = a("$injector", "invoke", "push", f), t = {
                        _invokeQueue: c,
                        _configBlocks: f,
                        _runBlocks: B,
                        requires: h,
                        name: g,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider",
                            "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: function (a, b) {
                            function c(d) {
                                function f(a) {
                                    return e.isFunction(a) ? function (b, c) {
                                        return d.invoke(a, this, {$element: b, $attrs: c})
                                    } : a
                                }

                                var g = b.template || b.templateUrl ? b.template : "";
                                return {
                                    controller: b.controller || function () {
                                    },
                                    controllerAs: Dc(b.controller) || b.controllerAs || a,
                                    template: f(g),
                                    templateUrl: f(b.templateUrl),
                                    transclude: b.transclude === u ? !0 : b.transclude,
                                    scope: !1 === b.isolate ? !0 : {},
                                    bindToController: b.bindings ||
                                    {},
                                    restrict: b.restrict || "E"
                                }
                            }

                            b.$canActivate && (c.$canActivate = b.$canActivate);
                            b.$routeConfig && (c.$routeConfig = b.$routeConfig);
                            c.$inject = ["$injector"];
                            return t.directive(a, c)
                        },
                        config: Q,
                        run: function (a) {
                            B.push(a);
                            return this
                        }
                    };
                    k && Q(k);
                    return t
                })
            }
        })
    }

    function he(a) {
        L(a, {
            bootstrap: zc,
            copy: Pa,
            extend: L,
            merge: Xd,
            equals: la,
            element: A,
            forEach: n,
            injector: fb,
            noop: w,
            bind: uc,
            toJson: eb,
            fromJson: vc,
            identity: $a,
            isUndefined: x,
            isDefined: z,
            isString: G,
            isFunction: D,
            isObject: J,
            isNumber: U,
            isElement: Pb,
            isArray: K,
            version: ie,
            isDate: ba,
            lowercase: H,
            uppercase: ub,
            callbacks: {counter: 0},
            getTestability: de,
            $$minErr: P,
            $$csp: Ea,
            reloadWithDebugInfo: ce
        });
        Tb = ge(S);
        Tb("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: je});
            a.provider("$compile", Ec).directive({
                a: ke,
                input: Fc,
                textarea: Fc,
                form: le,
                script: me,
                select: ne,
                style: oe,
                option: pe,
                ngBind: qe,
                ngBindHtml: re,
                ngBindTemplate: se,
                ngClass: te,
                ngClassEven: ue,
                ngClassOdd: ve,
                ngCloak: we,
                ngController: xe,
                ngForm: ye,
                ngHide: ze,
                ngIf: Ae,
                ngInclude: Be,
                ngInit: Ce,
                ngNonBindable: De,
                ngPluralize: Ee,
                ngRepeat: Fe,
                ngShow: Ge,
                ngStyle: He,
                ngSwitch: Ie,
                ngSwitchWhen: Je,
                ngSwitchDefault: Ke,
                ngOptions: Le,
                ngTransclude: Me,
                ngModel: Ne,
                ngList: Oe,
                ngChange: Pe,
                pattern: Gc,
                ngPattern: Gc,
                required: Hc,
                ngRequired: Hc,
                minlength: Ic,
                ngMinlength: Ic,
                maxlength: Jc,
                ngMaxlength: Jc,
                ngValue: Qe,
                ngModelOptions: Re
            }).directive({ngInclude: Se}).directive(vb).directive(Kc);
            a.provider({
                $anchorScroll: Te,
                $animate: Ue,
                $animateCss: Ve,
                $$animateQueue: We,
                $$AnimateRunner: Xe,
                $$animateAsyncRun: Ye,
                $browser: Ze,
                $cacheFactory: $e,
                $controller: af,
                $document: bf,
                $exceptionHandler: cf,
                $filter: Lc,
                $$forceReflow: df,
                $interpolate: ef,
                $interval: ff,
                $http: gf,
                $httpParamSerializer: hf,
                $httpParamSerializerJQLike: jf,
                $httpBackend: kf,
                $xhrFactory: lf,
                $location: mf,
                $log: nf,
                $parse: of,
                $rootScope: pf,
                $q: qf,
                $$q: rf,
                $sce: sf,
                $sceDelegate: tf,
                $sniffer: uf,
                $templateCache: vf,
                $templateRequest: wf,
                $$testability: xf,
                $timeout: yf,
                $window: zf,
                $$rAF: Af,
                $$jqLite: Bf,
                $$HashMap: Cf,
                $$cookieReader: Df
            })
        }])
    }

    function gb(a) {
        return a.replace(Ef, function (a, d, c, e) {
            return e ? c.toUpperCase() : c
        }).replace(Ff, "Moz$1")
    }

    function Mc(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function Nc(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (Ub.test(a)) {
            d = d || e.appendChild(b.createElement("div"));
            c = (Gf.exec(a) || ["", ""])[1].toLowerCase();
            c = na[c] || na._default;
            d.innerHTML = c[1] + a.replace(Hf, "<$1></$2>") + c[2];
            for (c = c[0]; c--;)d = d.lastChild;
            f = db(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        n(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function E(a) {
        if (a instanceof E)return a;
        var b;
        G(a) && (a = Y(a), b = !0);
        if (!(this instanceof E)) {
            if (b && "<" != a.charAt(0))throw Vb("nosel");
            return new E(a)
        }
        if (b) {
            b = Z;
            var d;
            a = (d = If.exec(a)) ? [b.createElement(d[1])] : (d = Nc(a, b)) ? d.childNodes : []
        }
        Oc(this, a)
    }

    function Wb(a) {
        return a.cloneNode(!0)
    }

    function wb(a, b) {
        b || hb(a);
        if (a.querySelectorAll)for (var d = a.querySelectorAll("*"), c = 0, e = d.length; c < e; c++)hb(d[c])
    }

    function Pc(a, b, d, c) {
        if (z(c))throw Vb("offargs");
        var e = (c = xb(a)) && c.events, f = c && c.handle;
        if (f)if (b) {
            var g = function (b) {
                var c = e[b];
                z(d) && cb(c || [], d);
                z(d) && c && 0 < c.length || (a.removeEventListener(b, f, !1), delete e[b])
            };
            n(b.split(" "), function (a) {
                g(a);
                yb[a] && g(yb[a])
            })
        } else for (b in e)"$destroy" !== b && a.removeEventListener(b, f, !1), delete e[b]
    }

    function hb(a, b) {
        var d = a.ng339, c = d && ib[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), Pc(a)), delete ib[d], a.ng339 = u))
    }

    function xb(a, b) {
        var d = a.ng339, d = d && ib[d];
        b && !d && (a.ng339 = d = ++Jf, d = ib[d] = {events: {}, data: {}, handle: u});
        return d
    }

    function Xb(a, b, d) {
        if (Mc(a)) {
            var c = z(d), e = !c && b && !J(b), f = !b;
            a = (a = xb(a, !e)) && a.data;
            if (c)a[b] = d; else {
                if (f)return a;
                if (e)return a && a[b];
                L(a, b)
            }
        }
    }

    function zb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Ab(a, b) {
        b && a.setAttribute && n(b.split(" "), function (b) {
            a.setAttribute("class", Y((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Y(b) + " ", " ")))
        })
    }

    function Bb(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g,
                " ");
            n(b.split(" "), function (a) {
                a = Y(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", Y(d))
        }
    }

    function Oc(a, b) {
        if (b)if (b.nodeType)a[a.length++] = b; else {
            var d = b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d)for (var c = 0; c < d; c++)a[a.length++] = b[c]
            } else a[a.length++] = b
        }
    }

    function Qc(a, b) {
        return Cb(a, "$" + (b || "ngController") + "Controller")
    }

    function Cb(a, b, d) {
        9 == a.nodeType && (a = a.documentElement);
        for (b = K(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)if (z(d = A.data(a, b[c])))return d;
            a = a.parentNode ||
                11 === a.nodeType && a.host
        }
    }

    function Rc(a) {
        for (wb(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function Yb(a, b) {
        b || wb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function Kf(a, b) {
        b = b || S;
        if ("complete" === b.document.readyState)b.setTimeout(a); else A(b).on("load", a)
    }

    function Sc(a, b) {
        var d = Db[b.toLowerCase()];
        return d && Tc[ta(a)] && d
    }

    function Lf(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f = b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (x(c.immediatePropagationStopped)) {
                    var h =
                        c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        h && h.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var k = f.specialHandlerWrapper || Mf;
                1 < g && (f = V(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || k(a, c, f[l])
            }
        };
        d.elem = a;
        return d
    }

    function Mf(a, b, d) {
        d.call(a, b)
    }

    function Nf(a, b, d) {
        var c = b.relatedTarget;
        c && (c === a || Of.call(a, c)) || d.call(a, b)
    }

    function Bf() {
        this.$get =
            function () {
                return L(E, {
                    hasClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return zb(a, b)
                    }, addClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return Bb(a, b)
                    }, removeClass: function (a, b) {
                        a.attr && (a = a[0]);
                        return Ab(a, b)
                    }
                })
            }
    }

    function Fa(a, b) {
        var d = a && a.$$hashKey;
        if (d)return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || Wd)() : d + ":" + a
    }

    function Va(a, b) {
        if (b) {
            var d = 0;
            this.nextUid = function () {
                return ++d
            }
        }
        n(a, this.put, this)
    }

    function Uc(a) {
        a = a.toString().replace(Pf,
            "");
        return a.match(Qf) || a.match(Rf)
    }

    function Sf(a) {
        return (a = Uc(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function fb(a, b) {
        function d(a) {
            return function (b, c) {
                if (J(b))n(b, qc(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            Ua(a, "service");
            if (D(b) || K(b))b = r.instantiate(b);
            if (!b.$get)throw Ga("pget", a);
            return s[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = t.invoke(b, this);
                if (x(c))throw Ga("undef", a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {$get: !1 !== d ? e(a, b) : b})
        }

        function g(a) {
            sb(x(a) ||
                K(a), "modulesToLoad", "not an array");
            var b = [], c;
            n(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], f = r.get(e[0]);
                        f[e[1]].apply(f, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.put(a, !0);
                    try {
                        G(a) ? (c = Tb(a), b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : D(a) ? b.push(r.invoke(a)) : K(a) ? b.push(r.invoke(a)) : Ta(a, "module")
                    } catch (e) {
                        throw K(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ga("modulerr", a, e.stack || e.message ||
                            e);
                    }
                }
            });
            return b
        }

        function h(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === k)throw Ga("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = k, a[b] = c(b, e)
                } catch (f) {
                    throw a[b] === k && delete a[b], f;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, f, g) {
                "string" === typeof f && (g = f, f = null);
                var h = [], k = fb.$$annotate(a, b, g), l, m, s;
                m = 0;
                for (l = k.length; m < l; m++) {
                    s = k[m];
                    if ("string" !== typeof s)throw Ga("itkn", s);
                    h.push(f && f.hasOwnProperty(s) ? f[s] : d(s, g))
                }
                K(a) && (a = a[l]);
                return a.apply(c, h)
            }

            return {
                invoke: e,
                instantiate: function (a, b, c) {
                    var d = Object.create((K(a) ? a[a.length - 1] : a).prototype || null);
                    a = e(a, d, b, c);
                    return J(a) || D(a) ? a : d
                }, get: d, annotate: fb.$$annotate, has: function (b) {
                    return s.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }

        b = !0 === b;
        var k = {}, l = [], m = new Va([], !0), s = {
            $provide: {
                provider: d(c), factory: d(f), service: d(function (a, b) {
                    return f(a, ["$injector", function (a) {
                        return a.instantiate(b)
                    }])
                }), value: d(function (a, b) {
                    return f(a, ka(b), !1)
                }), constant: d(function (a, b) {
                    Ua(a, "constant");
                    s[a] = b;
                    B[a] = b
                }),
                decorator: function (a, b) {
                    var c = r.get(a + "Provider"), d = c.$get;
                    c.$get = function () {
                        var a = t.invoke(d, c);
                        return t.invoke(b, null, {$delegate: a})
                    }
                }
            }
        }, r = s.$injector = h(s, function (a, b) {
            $.isString(b) && l.push(b);
            throw Ga("unpr", l.join(" <- "));
        }), B = {}, Q = h(B, function (a, b) {
            var c = r.get(a + "Provider", b);
            return t.invoke(c.$get, c, u, a)
        }), t = Q;
        s.$injectorProvider = {$get: ka(Q)};
        var p = g(a), t = Q.get("$injector");
        t.strictDi = b;
        n(p, function (a) {
            a && t.invoke(a)
        });
        return t
    }

    function Te() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a, function (a) {
                    if ("a" === ta(a))return b = a, !0
                });
                return b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    D(c) ? c = c() : Pb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : U(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = G(a) ? a : d.hash();
                var b;
                a ? (b = h.getElementById(a)) ? f(b) : (b = e(h.getElementsByName(a))) ?
                    f(b) : "top" === a && f(null) : f(null)
            }

            var h = b.document;
            a && c.$watch(function () {
                return d.hash()
            }, function (a, b) {
                a === b && "" === a || Kf(function () {
                    c.$evalAsync(g)
                })
            });
            return g
        }]
    }

    function jb(a, b) {
        if (!a && !b)return "";
        if (!a)return b;
        if (!b)return a;
        K(a) && (a = a.join(" "));
        K(b) && (b = b.join(" "));
        return a + " " + b
    }

    function Tf(a) {
        G(a) && (a = a.split(" "));
        var b = X();
        n(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Ia(a) {
        return J(a) ? a : {}
    }

    function Uf(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, wa.call(arguments, 1))
            } finally {
                if (Q--,
                    0 === Q)for (; t.length;)try {
                    t.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function f() {
            M = null;
            g();
            h()
        }

        function g() {
            a:{
                try {
                    p = m.state;
                    break a
                } catch (a) {
                }
                p = void 0
            }
            p = x(p) ? null : p;
            la(p, W) && (p = W);
            W = p
        }

        function h() {
            if (v !== k.url() || y !== p)v = k.url(), y = p, n(F, function (a) {
                a(k.url(), p)
            })
        }

        var k = this, l = a.location, m = a.history, s = a.setTimeout, r = a.clearTimeout, B = {};
        k.isMock = !1;
        var Q = 0, t = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function () {
            Q++
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            0 === Q ? a() : t.push(a)
        };
        var p,
            y, v = l.href, ya = b.find("base"), M = null;
        g();
        y = p;
        k.url = function (b, d, e) {
            x(e) && (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = y === e;
                if (v === b && (!c.history || f))return k;
                var h = v && Ja(v) === Ja(b);
                v = b;
                y = e;
                if (!c.history || h && f) {
                    if (!h || M)M = b;
                    d ? l.replace(b) : h ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b;
                    l.href !== b && (M = b)
                } else m[d ? "replaceState" : "pushState"](e, "", b), g(), y = p;
                return k
            }
            return M || l.href.replace(/%27/g, "'")
        };
        k.state = function () {
            return p
        };
        var F = [], C = !1,
            W = null;
        k.onUrlChange = function (b) {
            if (!C) {
                if (c.history)A(a).on("popstate", f);
                A(a).on("hashchange", f);
                C = !0
            }
            F.push(b);
            return b
        };
        k.$$applicationDestroyed = function () {
            A(a).off("hashchange popstate", f)
        };
        k.$$checkUrlChange = h;
        k.baseHref = function () {
            var a = ya.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        k.defer = function (a, b) {
            var c;
            Q++;
            c = s(function () {
                delete B[c];
                e(a)
            }, b || 0);
            B[c] = !0;
            return c
        };
        k.defer.cancel = function (a) {
            return B[a] ? (delete B[a], r(a), e(w), !0) : !1
        }
    }

    function Ze() {
        this.$get = ["$window",
            "$log", "$sniffer", "$document", function (a, b, d, c) {
                return new Uf(a, c, b, d)
            }]
    }

    function $e() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a != s && (r ? r == a && (r = a.n) : r = a, f(a.n, a.p), f(a, s), s = a, s.n = null)
                }

                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw P("$cacheFactory")("iid", a);
                var g = 0, h = L({}, c, {id: a}), k = X(), l = c && c.capacity || Number.MAX_VALUE, m = X(), s = null, r = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!x(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {key: a});
                                e(c)
                            }
                            a in k || g++;
                            k[a] = b;
                            g > l && this.remove(r.key);
                            return b
                        }
                    }, get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            e(b)
                        }
                        return k[a]
                    }, remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            b == s && (s = b.p);
                            b == r && (r = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        a in k && (delete k[a], g--)
                    }, removeAll: function () {
                        k = X();
                        g = 0;
                        m = X();
                        s = r = null
                    }, destroy: function () {
                        m = h = k = null;
                        delete b[a]
                    }, info: function () {
                        return L({}, h, {size: g})
                    }
                }
            }

            var b = {};
            a.info = function () {
                var a = {};
                n(b, function (b, e) {
                    a[e] = b.info()
                });
                return a
            };
            a.get = function (a) {
                return b[a]
            };
            return a
        }
    }

    function vf() {
        this.$get =
            ["$cacheFactory", function (a) {
                return a("templates")
            }]
    }

    function Ec(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/, e = {};
            n(a, function (a, f) {
                var g = a.match(d);
                if (!g)throw ia("iscp", b, f, a, c ? "controller bindings definition" : "isolate scope definition");
                e[f] = {mode: g[1][0], collection: "*" === g[2], optional: "?" === g[3], attrName: g[4] || f}
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== H(b))throw ia("baddir", a);
            if (a !== a.trim())throw ia("baddir", a);
        }

        var e = {}, f = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            g = /(([\w\-]+)(?:\:([^;]+))?;?)/, h = Zd("ngSrc,ngSrcset,src,srcset"), k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, l = /^(on[a-z]+|formaction)$/;
        this.directive = function r(b, f) {
            Ua(b, "directive");
            G(b) ? (c(b), sb(f, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var f = [];
                n(e[b], function (e, g) {
                    try {
                        var h = a.invoke(e);
                        D(h) ? h = {compile: ka(h)} : !h.compile && h.link && (h.compile = ka(h.link));
                        h.priority = h.priority || 0;
                        h.index = g;
                        h.name = h.name || b;
                        h.require = h.require ||
                            h.controller && h.name;
                        h.restrict = h.restrict || "EA";
                        var k = h, l = h, m = h.name, r = {isolateScope: null, bindToController: null};
                        J(l.scope) && (!0 === l.bindToController ? (r.bindToController = d(l.scope, m, !0), r.isolateScope = {}) : r.isolateScope = d(l.scope, m, !1));
                        J(l.bindToController) && (r.bindToController = d(l.bindToController, m, !0));
                        if (J(r.bindToController)) {
                            var O = l.controller, Q = l.controllerAs;
                            if (!O)throw ia("noctrl", m);
                            if (!Dc(O, Q))throw ia("noident", m);
                        }
                        var ha = k.$$bindings = r;
                        J(ha.isolateScope) && (h.$$isolateBindings = ha.isolateScope);
                        h.$$moduleName = e.$$moduleName;
                        f.push(h)
                    } catch (n) {
                        c(n)
                    }
                });
                return f
            }])), e[b].push(f)) : n(b, qc(r));
            return this
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return z(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return z(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var m = !0;
        this.debugInfoEnabled = function (a) {
            return z(a) ? (m = a, this) : m
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest",
            "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, d, p, y, v, ya, M, F, C) {
                function W(a, b, c) {
                    $.innerHTML = "<span " + b + ">";
                    b = $.firstChild.attributes;
                    var d = b[0];
                    b.removeNamedItem(d.name);
                    d.value = c;
                    a.attributes.setNamedItem(d)
                }

                function N(a, b) {
                    try {
                        a.addClass(b)
                    } catch (c) {
                    }
                }

                function O(a, b, c, d, e) {
                    a instanceof A || (a = A(a));
                    n(a, function (b, c) {
                        b.nodeType == Qa && b.nodeValue.match(/\S+/) && (a[c] = A(b).wrap("<span></span>").parent()[0])
                    });
                    var f = R(a, b, a, c, d, e);
                    O.$$addScopeClass(a);
                    var g = null;
                    return function (b, c, d) {
                        sb(b, "scope");
                        e && e.needsNewScope && (b = b.$parent.$new());
                        d = d || {};
                        var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
                        d = d.futureParentElement;
                        h && h.$$boundTransclude && (h = h.$$boundTransclude);
                        g || (g = (d = d && d[0]) ? "foreignobject" !== ta(d) && d.toString().match(/SVG/) ? "svg" : "html" : "html");
                        d = "html" !== g ? A(U(g, A("<div>").append(a).html())) : c ? Sa.clone.call(a) : a;
                        if (k)for (var l in k)d.data("$" + l + "Controller", k[l].instance);
                        O.$$addScopeInfo(d, b);
                        c && c(d, b);
                        f && f(b, d, d, h);
                        return d
                    }
                }

                function R(a, b, c, d, e, f) {
                    function g(a, c, d, e) {
                        var f, k, l, m, r, B, v;
                        if (p)for (v = Array(c.length), m = 0; m < h.length; m += 3)f = h[m], v[f] = c[f]; else v = c;
                        m = 0;
                        for (r = h.length; m < r;)k = v[h[m++]], c = h[m++], f = h[m++], c ? (c.scope ? (l = a.$new(), O.$$addScopeInfo(A(k), l)) : l = a, B = c.transcludeOnThisElement ? ha(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? ha(a, b) : null, c(f, l, k, d, B)) : f && f(a, k.childNodes, u, e)
                    }

                    for (var h = [], k, l, m, r, p, B = 0; B < a.length; B++) {
                        k = new ka;
                        l = Ha(a[B], [], k, 0 === B ? d : u, e);
                        (f = l.length ? oa(l, a[B], k, b, c, null, [], [], f) :
                            null) && f.scope && O.$$addScopeClass(k.$$element);
                        k = f && f.terminal || !(m = a[B].childNodes) || !m.length ? null : R(m, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b);
                        if (f || k)h.push(B, f, k), r = !0, p = p || f;
                        f = null
                    }
                    return r ? g : null
                }

                function ha(a, b, c) {
                    var d = function (d, e, f, g, h) {
                        d || (d = a.$new(!1, h), d.$$transcluded = !0);
                        return b(d, e, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: g})
                    }, e = d.$$slots = X(), f;
                    for (f in b.$$slots)e[f] = b.$$slots[f] ? ha(a, b.$$slots[f], c) : null;
                    return d
                }

                function Ha(a,
                            b, c, d, e) {
                    var h = c.$attr, k;
                    switch (a.nodeType) {
                        case 1:
                            pa(b, va(ta(a)), "E", d, e);
                            for (var l, m, r, p = a.attributes, B = 0, v = p && p.length; B < v; B++) {
                                var F = !1, t = !1;
                                l = p[B];
                                k = l.name;
                                m = Y(l.value);
                                l = va(k);
                                if (r = ja.test(l))k = k.replace(Wc, "").substr(8).replace(/_(.)/g, function (a, b) {
                                    return b.toUpperCase()
                                });
                                (l = l.match(ma)) && sa(l[1]) && (F = k, t = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6));
                                l = va(k.toLowerCase());
                                h[l] = k;
                                if (r || !c.hasOwnProperty(l))c[l] = m, Sc(a, l) && (c[l] = !0);
                                T(a, b, m, l, r);
                                pa(b, l, "A", d, e, F, t)
                            }
                            a = a.className;
                            J(a) &&
                            (a = a.animVal);
                            if (G(a) && "" !== a)for (; k = g.exec(a);)l = va(k[2]), pa(b, l, "C", d, e) && (c[l] = Y(k[3])), a = a.substr(k.index + k[0].length);
                            break;
                        case Qa:
                            if (11 === Ka)for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === Qa;)a.nodeValue += a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
                            S(b, a.nodeValue);
                            break;
                        case 8:
                            try {
                                if (k = f.exec(a.nodeValue))l = va(k[1]), pa(b, l, "M", d, e) && (c[l] = Y(k[2]))
                            } catch (O) {
                            }
                    }
                    b.sort(fa);
                    return b
                }

                function q(a, b, c) {
                    var d = [], e = 0;
                    if (b && a.hasAttribute && a.hasAttribute(b)) {
                        do {
                            if (!a)throw ia("uterdir",
                                b, c);
                            1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                            d.push(a);
                            a = a.nextSibling
                        } while (0 < e)
                    } else d.push(a);
                    return A(d)
                }

                function z(a, b, c) {
                    return function (d, e, f, g, h) {
                        e = q(e[0], b, c);
                        return a(d, e, f, g, h)
                    }
                }

                function Zb(a, b, c, d, e, f) {
                    if (a)return O(b, c, d, e, f);
                    var g;
                    return function () {
                        g || (g = O(b, c, d, e, f), b = c = f = null);
                        return g.apply(this, arguments)
                    }
                }

                function oa(a, b, d, e, f, g, h, l, m) {
                    function r(a, b, c, d) {
                        if (a) {
                            c && (a = z(a, c, d));
                            a.require = I.require;
                            a.directiveName = sa;
                            if (C === I || I.$$isolateScope)a = da(a, {isolateScope: !0});
                            h.push(a)
                        }
                        if (b) {
                            c && (b = z(b, c, d));
                            b.require = I.require;
                            b.directiveName = sa;
                            if (C === I || I.$$isolateScope)b = da(b, {isolateScope: !0});
                            l.push(b)
                        }
                    }

                    function p(a, b, c, d) {
                        var e;
                        if (G(b)) {
                            var f = b.match(k);
                            b = b.substring(f[0].length);
                            var g = f[1] || f[3], f = "?" === f[2];
                            "^^" === g ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                            e || (d = "$" + b + "Controller", e = g ? c.inheritedData(d) : c.data(d));
                            if (!e && !f)throw ia("ctreq", b, a);
                        } else if (K(b))for (e = [], g = 0, f = b.length; g < f; g++)e[g] = p(a, b[g], c, d);
                        return e || null
                    }

                    function B(a, b, c, d, e, f) {
                        var g = X(), h;
                        for (h in d) {
                            var k =
                                d[h], l = {
                                $scope: k === C || k.$$isolateScope ? e : f,
                                $element: a,
                                $attrs: b,
                                $transclude: c
                            }, m = k.controller;
                            "@" == m && (m = b[k.name]);
                            l = y(m, l, !0, k.controllerAs);
                            g[k.name] = l;
                            ya || a.data("$" + k.name + "Controller", l.instance)
                        }
                        return g
                    }

                    function v(a, c, e, f, g) {
                        function k(a, b, c, d) {
                            var e;
                            ab(a) || (d = c, c = b, b = a, a = u);
                            ya && (e = y);
                            c || (c = ya ? R.parent() : R);
                            if (d) {
                                var f = g.$$slots[d];
                                if (f)return f(a, b, e, c, q);
                                if (x(f))throw ia("noslot", d, ua(R));
                            } else return g(a, b, e, c, q)
                        }

                        var m, r, F, y, Q, R, W;
                        b === e ? (f = d, R = d.$$element) : (R = A(e), f = new ka(R, d));
                        F = c;
                        C ? r =
                            c.$new(!0) : t && (F = c.$parent);
                        g && (Q = k, Q.$$boundTransclude = g, Q.isSlotFilled = function (a) {
                            return !!g.$$slots[a]
                        });
                        N && (y = B(R, f, Q, N, r, c));
                        C && (O.$$addScopeInfo(R, r, !0, !(ha && (ha === C || ha === C.$$originalDirective))), O.$$addScopeClass(R, !0), r.$$isolateBindings = C.$$isolateBindings, (W = ca(c, f, r, r.$$isolateBindings, C)) && r.$on("$destroy", W));
                        for (var Vc in y) {
                            W = N[Vc];
                            var n = y[Vc], M = W.$$bindings.bindToController;
                            n.identifier && M && (m = ca(F, f, n.instance, M, W));
                            var Ha = n();
                            Ha !== n.instance && (n.instance = Ha, R.data("$" + W.name + "Controller",
                                Ha), m && m(), m = ca(F, f, n.instance, M, W))
                        }
                        fa = 0;
                        for (T = h.length; fa < T; fa++)m = h[fa], ea(m, m.isolateScope ? r : c, R, f, m.require && p(m.directiveName, m.require, R, y), Q);
                        var q = c;
                        C && (C.template || null === C.templateUrl) && (q = r);
                        a && a(q, e.childNodes, u, g);
                        for (fa = l.length - 1; 0 <= fa; fa--)m = l[fa], ea(m, m.isolateScope ? r : c, R, f, m.require && p(m.directiveName, m.require, R, y), Q)
                    }

                    m = m || {};
                    for (var F = -Number.MAX_VALUE, t = m.newScopeDirective, N = m.controllerDirectives, C = m.newIsolateScopeDirective, ha = m.templateDirective, R = m.nonTlbTranscludeDirective,
                             W = !1, M = !1, ya = m.hasElementTranscludeDirective, w = d.$$element = A(b), I, sa, oa, H = e, L, pa = !1, S = !1, E, fa = 0, T = a.length; fa < T; fa++) {
                        I = a[fa];
                        var $ = I.$$start, ba = I.$$end;
                        $ && (w = q(b, $, ba));
                        oa = u;
                        if (F > I.priority)break;
                        if (E = I.scope)I.templateUrl || (J(E) ? (Wa("new/isolated scope", C || t, I, w), C = I) : Wa("new/isolated scope", C, I, w)), t = t || I;
                        sa = I.name;
                        if (!pa && (I.replace && (I.templateUrl || I.template) || I.transclude && !I.$$tlb)) {
                            for (E = fa + 1; pa = a[E++];)if (pa.transclude && !pa.$$tlb || pa.replace && (pa.templateUrl || pa.template)) {
                                S = !0;
                                break
                            }
                            pa = !0
                        }
                        !I.templateUrl && I.controller && (E = I.controller, N = N || X(), Wa("'" + sa + "' controller", N[sa], I, w), N[sa] = I);
                        if (E = I.transclude)if (W = !0, I.$$tlb || (Wa("transclusion", R, I, w), R = I), "element" == E)ya = !0, F = I.priority, oa = w, w = d.$$element = A(Z.createComment(" " + sa + ": " + d[sa] + " ")), b = w[0], aa(f, wa.call(oa, 0), b), H = Zb(S, oa, e, F, g && g.name, {nonTlbTranscludeDirective: R}); else {
                            var V = X();
                            oa = A(Wb(b)).contents();
                            if (J(E)) {
                                oa = [];
                                var ga = X(), ja = X();
                                n(E, function (a, b) {
                                    var c = "?" === a.charAt(0);
                                    a = c ? a.substring(1) : a;
                                    ga[a] = b;
                                    V[b] = null;
                                    ja[b] =
                                        c
                                });
                                n(w.contents(), function (a) {
                                    var b = ga[va(ta(a))];
                                    b ? (ja[b] = !0, V[b] = V[b] || [], V[b].push(a)) : oa.push(a)
                                });
                                n(ja, function (a, b) {
                                    if (!a)throw ia("reqslot", b);
                                });
                                for (var la in V)V[la] && (V[la] = Zb(S, V[la], e))
                            }
                            w.empty();
                            H = Zb(S, oa, e, u, u, {needsNewScope: I.$$isolateScope || I.$$newScope});
                            H.$$slots = V
                        }
                        if (I.template)if (M = !0, Wa("template", ha, I, w), ha = I, E = D(I.template) ? I.template(w, d) : I.template, E = na(E), I.replace) {
                            g = I;
                            oa = Ub.test(E) ? Xc(U(I.templateNamespace, Y(E))) : [];
                            b = oa[0];
                            if (1 != oa.length || 1 !== b.nodeType)throw ia("tplrt",
                                sa, "");
                            aa(f, w, b);
                            E = {$attr: {}};
                            var ma = Ha(b, [], E), qa = a.splice(fa + 1, a.length - (fa + 1));
                            (C || t) && P(ma, C, t);
                            a = a.concat(ma).concat(qa);
                            Yc(d, E);
                            T = a.length
                        } else w.html(E);
                        if (I.templateUrl)M = !0, Wa("template", ha, I, w), ha = I, I.replace && (g = I), v = Vf(a.splice(fa, a.length - fa), w, d, f, W && H, h, l, {
                            controllerDirectives: N,
                            newScopeDirective: t !== I && t,
                            newIsolateScopeDirective: C,
                            templateDirective: ha,
                            nonTlbTranscludeDirective: R
                        }), T = a.length; else if (I.compile)try {
                            L = I.compile(w, d, H), D(L) ? r(null, L, $, ba) : L && r(L.pre, L.post, $, ba)
                        } catch (ra) {
                            c(ra,
                                ua(w))
                        }
                        I.terminal && (v.terminal = !0, F = Math.max(F, I.priority))
                    }
                    v.scope = t && !0 === t.scope;
                    v.transcludeOnThisElement = W;
                    v.templateOnThisElement = M;
                    v.transclude = H;
                    m.hasElementTranscludeDirective = ya;
                    return v
                }

                function P(a, b, c) {
                    for (var d = 0, e = a.length; d < e; d++)a[d] = Qb(a[d], {$$isolateScope: b, $$newScope: c})
                }

                function pa(b, d, f, g, h, k, l) {
                    if (d === h)return null;
                    h = null;
                    if (e.hasOwnProperty(d)) {
                        var m;
                        d = a.get(d + "Directive");
                        for (var p = 0, B = d.length; p < B; p++)try {
                            m = d[p], (x(g) || g > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = Qb(m,
                                {$$start: k, $$end: l})), b.push(m), h = m)
                        } catch (v) {
                            c(v)
                        }
                    }
                    return h
                }

                function sa(b) {
                    if (e.hasOwnProperty(b))for (var c = a.get(b + "Directive"), d = 0, f = c.length; d < f; d++)if (b = c[d], b.multiElement)return !0;
                    return !1
                }

                function Yc(a, b) {
                    var c = b.$attr, d = a.$attr, e = a.$$element;
                    n(a, function (d, e) {
                        "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                    });
                    n(b, function (b, f) {
                        "class" == f ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ?
                            a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                    })
                }

                function Vf(a, b, c, e, f, g, h, k) {
                    var l = [], m, r, p = b[0], B = a.shift(), v = Qb(B, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: B
                    }), F = D(B.templateUrl) ? B.templateUrl(b, c) : B.templateUrl, y = B.templateNamespace;
                    b.empty();
                    d(F).then(function (d) {
                        var t, O;
                        d = na(d);
                        if (B.replace) {
                            d = Ub.test(d) ? Xc(U(y, Y(d))) : [];
                            t = d[0];
                            if (1 != d.length || 1 !== t.nodeType)throw ia("tplrt", B.name, F);
                            d = {$attr: {}};
                            aa(e, b, t);
                            var C = Ha(t, [], d);
                            J(B.scope) &&
                            P(C, !0);
                            a = C.concat(a);
                            Yc(c, d)
                        } else t = p, b.html(d);
                        a.unshift(v);
                        m = oa(a, t, c, f, b, B, g, h, k);
                        n(e, function (a, c) {
                            a == t && (e[c] = b[0])
                        });
                        for (r = R(b[0].childNodes, f); l.length;) {
                            d = l.shift();
                            O = l.shift();
                            var Q = l.shift(), W = l.shift(), C = b[0];
                            if (!d.$$destroyed) {
                                if (O !== p) {
                                    var M = O.className;
                                    k.hasElementTranscludeDirective && B.replace || (C = Wb(t));
                                    aa(Q, A(O), C);
                                    N(A(C), M)
                                }
                                O = m.transcludeOnThisElement ? ha(d, m.transclude, W) : W;
                                m(r, d, C, e, O)
                            }
                        }
                        l = null
                    });
                    return function (a, b, c, d, e) {
                        a = e;
                        b.$$destroyed || (l ? l.push(b, c, d, a) : (m.transcludeOnThisElement &&
                        (a = ha(b, m.transclude, e)), m(r, b, c, d, a)))
                    }
                }

                function fa(a, b) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function Wa(a, b, c, d) {
                    function e(a) {
                        return a ? " (module: " + a + ")" : ""
                    }

                    if (b)throw ia("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, ua(d));
                }

                function S(a, c) {
                    var d = b(c, !0);
                    d && a.push({
                        priority: 0, compile: function (a) {
                            a = a.parent();
                            var b = !!a.length;
                            b && O.$$addBindingClass(a);
                            return function (a, c) {
                                var e = c.parent();
                                b || O.$$addBindingClass(e);
                                O.$$addBindingInfo(e,
                                    d.expressions);
                                a.$watch(d, function (a) {
                                    c[0].nodeValue = a
                                })
                            }
                        }
                    })
                }

                function U(a, b) {
                    a = H(a || "html");
                    switch (a) {
                        case "svg":
                        case "math":
                            var c = Z.createElement("div");
                            c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                            return c.childNodes[0].childNodes;
                        default:
                            return b
                    }
                }

                function E(a, b) {
                    if ("srcdoc" == b)return M.HTML;
                    var c = ta(a);
                    if ("xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b))return M.RESOURCE_URL
                }

                function T(a, c, d, e, f) {
                    var g = E(a, e);
                    f = h[e] || f;
                    var k = b(d, !0, g, f);
                    if (k) {
                        if ("multiple" === e && "select" === ta(a))throw ia("selmulti",
                            ua(a));
                        c.push({
                            priority: 100, compile: function () {
                                return {
                                    pre: function (a, c, h) {
                                        c = h.$$observers || (h.$$observers = X());
                                        if (l.test(e))throw ia("nodomevents");
                                        var m = h[e];
                                        m !== d && (k = m && b(m, !0, g, f), d = m);
                                        k && (h[e] = k(a), (c[e] || (c[e] = [])).$$inter = !0, (h.$$observers && h.$$observers[e].$$scope || a).$watch(k, function (a, b) {
                                            "class" === e && a != b ? h.$updateClass(a, b) : h.$set(e, a)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function aa(a, b, c) {
                    var d = b[0], e = b.length, f = d.parentNode, g, h;
                    if (a)for (g = 0, h = a.length; g < h; g++)if (a[g] == d) {
                        a[g++] = c;
                        h = g + e - 1;
                        for (var k = a.length; g <
                        k; g++, h++)h < k ? a[g] = a[h] : delete a[g];
                        a.length -= e - 1;
                        a.context === d && (a.context = c);
                        break
                    }
                    f && f.replaceChild(c, d);
                    a = Z.createDocumentFragment();
                    for (g = 0; g < e; g++)a.appendChild(b[g]);
                    A.hasData(d) && (A.data(c, A.data(d)), A(d).off("$destroy"));
                    A.cleanData(a.querySelectorAll("*"));
                    for (g = 1; g < e; g++)delete b[g];
                    b[0] = c;
                    b.length = 1
                }

                function da(a, b) {
                    return L(function () {
                        return a.apply(null, arguments)
                    }, a, b)
                }

                function ea(a, b, d, e, f, g) {
                    try {
                        a(b, d, e, f, g)
                    } catch (h) {
                        c(h, ua(d))
                    }
                }

                function ca(a, c, d, e, f) {
                    var g = [];
                    n(e, function (e, h) {
                        var k =
                            e.attrName, l = e.optional, m, r, v, F;
                        switch (e.mode) {
                            case "@":
                                l || qa.call(c, k) || (d[h] = c[k] = void 0);
                                c.$observe(k, function (a) {
                                    G(a) && (d[h] = a)
                                });
                                c.$$observers[k].$$scope = a;
                                G(c[k]) && (d[h] = b(c[k])(a));
                                break;
                            case "=":
                                if (!qa.call(c, k)) {
                                    if (l)break;
                                    c[k] = void 0
                                }
                                if (l && !c[k])break;
                                r = p(c[k]);
                                F = r.literal ? la : function (a, b) {
                                    return a === b || a !== a && b !== b
                                };
                                v = r.assign || function () {
                                        m = d[h] = r(a);
                                        throw ia("nonassign", c[k], f.name);
                                    };
                                m = d[h] = r(a);
                                l = function (b) {
                                    F(b, d[h]) || (F(b, m) ? v(a, b = d[h]) : d[h] = b);
                                    return m = b
                                };
                                l.$stateful = !0;
                                l = e.collection ?
                                    a.$watchCollection(c[k], l) : a.$watch(p(c[k], l), null, r.literal);
                                g.push(l);
                                break;
                            case "&":
                                r = c.hasOwnProperty(k) ? p(c[k]) : w;
                                if (r === w && l)break;
                                d[h] = function (b) {
                                    return r(a, b)
                                }
                        }
                    });
                    return g.length && function () {
                            for (var a = 0, b = g.length; a < b; ++a)g[a]()
                        }
                }

                var ba = /^\w/, $ = Z.createElement("div"), ka = function (a, b) {
                    if (b) {
                        var c = Object.keys(b), d, e, f;
                        d = 0;
                        for (e = c.length; d < e; d++)f = c[d], this[f] = b[f]
                    } else this.$attr = {};
                    this.$$element = a
                };
                ka.prototype = {
                    $normalize: va, $addClass: function (a) {
                        a && 0 < a.length && F.addClass(this.$$element,
                            a)
                    }, $removeClass: function (a) {
                        a && 0 < a.length && F.removeClass(this.$$element, a)
                    }, $updateClass: function (a, b) {
                        var c = Zc(a, b);
                        c && c.length && F.addClass(this.$$element, c);
                        (c = Zc(b, a)) && c.length && F.removeClass(this.$$element, c)
                    }, $set: function (a, b, d, e) {
                        var f = Sc(this.$$element[0], a), g = $c[a], h = a;
                        f ? (this.$$element.prop(a, b), e = f) : g && (this[g] = b, h = g);
                        this[a] = b;
                        e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Ac(a, "-"));
                        f = ta(this.$$element);
                        if ("a" === f && ("href" === a || "xlinkHref" === a) || "img" === f && "src" === a)this[a] =
                            b = C(b, "src" === a); else if ("img" === f && "srcset" === a) {
                            for (var f = "", g = Y(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, k = /\s/.test(g) ? k : /(,)/, g = g.split(k), k = Math.floor(g.length / 2), l = 0; l < k; l++)var m = 2 * l, f = f + C(Y(g[m]), !0), f = f + (" " + Y(g[m + 1]));
                            g = Y(g[2 * l]).split(/\s/);
                            f += C(Y(g[0]), !0);
                            2 === g.length && (f += " " + Y(g[1]));
                            this[a] = b = f
                        }
                        !1 !== d && (null === b || x(b) ? this.$$element.removeAttr(e) : ba.test(e) ? this.$$element.attr(e, b) : W(this.$$element[0], e, b));
                        (a = this.$$observers) && n(a[h], function (a) {
                            try {
                                a(b)
                            } catch (d) {
                                c(d)
                            }
                        })
                    }, $observe: function (a,
                                           b) {
                        var c = this, d = c.$$observers || (c.$$observers = X()), e = d[a] || (d[a] = []);
                        e.push(b);
                        v.$evalAsync(function () {
                            e.$$inter || !c.hasOwnProperty(a) || x(c[a]) || b(c[a])
                        });
                        return function () {
                            cb(e, b)
                        }
                    }
                };
                var V = b.startSymbol(), ga = b.endSymbol(), na = "{{" == V || "}}" == ga ? $a : function (a) {
                    return a.replace(/\{\{/g, V).replace(/}}/g, ga)
                }, ja = /^ngAttr[A-Z]/, ma = /^(.+)Start$/;
                O.$$addBindingInfo = m ? function (a, b) {
                    var c = a.data("$binding") || [];
                    K(b) ? c = c.concat(b) : c.push(b);
                    a.data("$binding", c)
                } : w;
                O.$$addBindingClass = m ? function (a) {
                    N(a, "ng-binding")
                } :
                    w;
                O.$$addScopeInfo = m ? function (a, b, c, d) {
                    a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
                } : w;
                O.$$addScopeClass = m ? function (a, b) {
                    N(a, b ? "ng-isolate-scope" : "ng-scope")
                } : w;
                return O
            }]
    }

    function va(a) {
        return gb(a.replace(Wc, ""))
    }

    function Zc(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a:for (; f < c.length; f++) {
            for (var g = c[f], h = 0; h < e.length; h++)if (g == e[h])continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function Xc(a) {
        a = A(a);
        var b = a.length;
        if (1 >= b)return a;
        for (; b--;)8 === a[b].nodeType && Wf.call(a,
            b, 1);
        return a
    }

    function Dc(a, b) {
        if (b && G(b))return b;
        if (G(a)) {
            var d = ad.exec(a);
            if (d)return d[3]
        }
    }

    function af() {
        var a = {}, b = !1;
        this.register = function (b, c) {
            Ua(b, "controller");
            J(b) ? L(a, b) : a[b] = c
        };
        this.allowGlobals = function () {
            b = !0
        };
        this.$get = ["$injector", "$window", function (d, c) {
            function e(a, b, c, d) {
                if (!a || !J(a.$scope))throw P("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (f, g, h, k) {
                var l, m, s;
                h = !0 === h;
                k && G(k) && (s = k);
                if (G(f)) {
                    k = f.match(ad);
                    if (!k)throw Xf("ctrlfmt", f);
                    m = k[1];
                    s = s || k[3];
                    f = a.hasOwnProperty(m) ?
                        a[m] : Cc(g.$scope, m, !0) || (b ? Cc(c, m, !0) : u);
                    Ta(f, m, !0)
                }
                if (h)return h = (K(f) ? f[f.length - 1] : f).prototype, l = Object.create(h || null), s && e(g, s, l, m || f.name), L(function () {
                    var a = d.invoke(f, l, g, m);
                    a !== l && (J(a) || D(a)) && (l = a, s && e(g, s, l, m || f.name));
                    return l
                }, {instance: l, identifier: s});
                l = d.instantiate(f, g, m);
                s && e(g, s, l, m || f.name);
                return l
            }
        }]
    }

    function bf() {
        this.$get = ["$window", function (a) {
            return A(a.document)
        }]
    }

    function cf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function $b(a) {
        return J(a) ?
            ba(a) ? a.toISOString() : eb(a) : a
    }

    function hf() {
        this.$get = function () {
            return function (a) {
                if (!a)return "";
                var b = [];
                pc(a, function (a, c) {
                    null === a || x(a) || (K(a) ? n(a, function (a, d) {
                        b.push(ga(c) + "=" + ga($b(a)))
                    }) : b.push(ga(c) + "=" + ga($b(a))))
                });
                return b.join("&")
            }
        }
    }

    function jf() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || x(a) || (K(a) ? n(a, function (a, c) {
                        b(a, e + "[" + (J(a) ? c : "") + "]")
                    }) : J(a) && !ba(a) ? pc(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                    }) : d.push(ga(e) + "=" + ga($b(a))))
                }

                if (!a)return "";
                var d =
                    [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }

    function ac(a, b) {
        if (G(a)) {
            var d = a.replace(Yf, "").trim();
            if (d) {
                var c = b("Content-Type");
                (c = c && 0 === c.indexOf(bd)) || (c = (c = d.match(Zf)) && $f[c[0]].test(d));
                c && (a = vc(d))
            }
        }
        return a
    }

    function cd(a) {
        var b = X(), d;
        G(a) ? n(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = H(Y(a.substr(0, d)));
            a = Y(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : J(a) && n(a, function (a, d) {
            var f = H(d), g = Y(a);
            f && (b[f] = b[f] ? b[f] + ", " + g : g)
        });
        return b
    }

    function dd(a) {
        var b;
        return function (d) {
            b || (b = cd(a));
            return d ?
                (d = b[H(d)], void 0 === d && (d = null), d) : b
        }
    }

    function ed(a, b, d, c) {
        if (D(c))return c(a, b, d);
        n(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }

    function gf() {
        var a = this.defaults = {
                transformResponse: [ac],
                transformRequest: [function (a) {
                    return J(a) && "[object File]" !== ra.call(a) && "[object Blob]" !== ra.call(a) && "[object FormData]" !== ra.call(a) ? eb(a) : a
                }],
                headers: {common: {Accept: "application/json, text/plain, */*"}, post: V(bc), put: V(bc), patch: V(bc)},
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            b = !1;
        this.useApplyAsync = function (a) {
            return z(a) ? (b = !!a, this) : b
        };
        var d = !0;
        this.useLegacyPromiseExtensions = function (a) {
            return z(a) ? (d = !!a, this) : d
        };
        var c = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (e, f, g, h, k, l) {
            function m(b) {
                function c(a) {
                    var b = L({}, a);
                    b.data = ed(a.data, a.headers, a.status, f.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 > a ? b : k.reject(b)
                }

                function e(a, b) {
                    var c, d = {};
                    n(a, function (a, e) {
                        D(a) ? (c = a(b), null != c && (d[e] =
                            c)) : d[e] = a
                    });
                    return d
                }

                if (!J(b))throw P("$http")("badreq", b);
                if (!G(b.url))throw P("$http")("badreq", b.url);
                var f = L({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer
                }, b);
                f.headers = function (b) {
                    var c = a.headers, d = L({}, b.headers), f, g, h, c = L({}, c.common, c[H(b.method)]);
                    a:for (f in c) {
                        g = H(f);
                        for (h in d)if (H(h) === g)continue a;
                        d[f] = c[f]
                    }
                    return e(d, V(b))
                }(b);
                f.method = ub(f.method);
                f.paramSerializer = G(f.paramSerializer) ? l.get(f.paramSerializer) :
                    f.paramSerializer;
                var g = [function (b) {
                    var d = b.headers, e = ed(b.data, dd(d), u, b.transformRequest);
                    x(e) && n(d, function (a, b) {
                        "content-type" === H(b) && delete d[b]
                    });
                    x(b.withCredentials) && !x(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return s(b, e).then(c, c)
                }, u], h = k.when(f);
                for (n(Q, function (a) {
                    (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && g.push(a.response, a.responseError)
                }); g.length;) {
                    b = g.shift();
                    var m = g.shift(), h = h.then(b, m)
                }
                d ? (h.success = function (a) {
                    Ta(a,
                        "fn");
                    h.then(function (b) {
                        a(b.data, b.status, b.headers, f)
                    });
                    return h
                }, h.error = function (a) {
                    Ta(a, "fn");
                    h.then(null, function (b) {
                        a(b.data, b.status, b.headers, f)
                    });
                    return h
                }) : (h.success = fd("success"), h.error = fd("error"));
                return h
            }

            function s(c, d) {
                function g(a, c, d, e) {
                    function f() {
                        l(c, a, d, e)
                    }

                    n && (200 <= a && 300 > a ? n.put(R, [a, c, cd(d), e]) : n.remove(R));
                    b ? h.$applyAsync(f) : (f(), h.$$phase || h.$apply())
                }

                function l(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? F.resolve : F.reject)({
                        data: a,
                        status: b,
                        headers: dd(d),
                        config: c,
                        statusText: e
                    })
                }

                function s(a) {
                    l(a.data, a.status, V(a.headers()), a.statusText)
                }

                function Q() {
                    var a = m.pendingRequests.indexOf(c);
                    -1 !== a && m.pendingRequests.splice(a, 1)
                }

                var F = k.defer(), C = F.promise, n, N, O = c.headers, R = r(c.url, c.paramSerializer(c.params));
                m.pendingRequests.push(c);
                C.then(Q, Q);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (n = J(c.cache) ? c.cache : J(a.cache) ? a.cache : B);
                n && (N = n.get(R), z(N) ? N && D(N.then) ? N.then(s, s) : K(N) ? l(N[1], N[0], V(N[2]), N[3]) : l(N, 200, {}, "OK") : n.put(R, C));
                x(N) && ((N = gd(c.url) ?
                    f()[c.xsrfCookieName || a.xsrfCookieName] : u) && (O[c.xsrfHeaderName || a.xsrfHeaderName] = N), e(c.method, R, d, g, O, c.timeout, c.withCredentials, c.responseType));
                return C
            }

            function r(a, b) {
                0 < b.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + b);
                return a
            }

            var B = g("$http");
            a.paramSerializer = G(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var Q = [];
            n(c, function (a) {
                Q.unshift(G(a) ? l.get(a) : l.invoke(a))
            });
            m.pendingRequests = [];
            (function (a) {
                n(arguments, function (a) {
                    m[a] = function (b, c) {
                        return m(L({}, c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                n(arguments, function (a) {
                    m[a] = function (b, c, d) {
                        return m(L({}, d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put", "patch");
            m.defaults = a;
            return m
        }]
    }

    function lf() {
        this.$get = function () {
            return function () {
                return new S.XMLHttpRequest
            }
        }
    }

    function kf() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (a, b, d, c) {
            return ag(a, c, a.defer, b.angular.callbacks, d[0])
        }]
    }

    function ag(a, b, d, c, e) {
        function f(a, b, d) {
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m, !1);
                f.removeEventListener("error", m, !1);
                e.body.removeChild(f);
                f = null;
                var g = -1, B = "unknown";
                a && ("load" !== a.type || c[b].called || (a = {type: "error"}), B = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, B)
            };
            f.addEventListener("load", m, !1);
            f.addEventListener("error", m, !1);
            e.body.appendChild(f);
            return m
        }

        return function (e, h, k, l, m, s, r, B) {
            function Q() {
                y && y();
                v && v.abort()
            }

            function t(b, c, e, f, g) {
                z(M) && d.cancel(M);
                y = v = null;
                b(c, e, f, g);
                a.$$completeOutstandingRequest(w)
            }

            a.$$incOutstandingRequestCount();
            h = h || a.url();
            if ("jsonp" == H(e)) {
                var p = "_" + (c.counter++).toString(36);
                c[p] = function (a) {
                    c[p].data = a;
                    c[p].called = !0
                };
                var y = f(h.replace("JSON_CALLBACK", "angular.callbacks." + p), p, function (a, b) {
                    t(l, a, c[p].data, "", b);
                    c[p] = w
                })
            } else {
                var v = b(e, h);
                v.open(e, h, !0);
                n(m, function (a, b) {
                    z(a) && v.setRequestHeader(b, a)
                });
                v.onload = function () {
                    var a = v.statusText || "", b = "response"in v ? v.response : v.responseText, c = 1223 === v.status ? 204 : v.status;
                    0 === c && (c = b ? 200 :
                        "file" == za(h).protocol ? 404 : 0);
                    t(l, c, b, v.getAllResponseHeaders(), a)
                };
                e = function () {
                    t(l, -1, null, null, "")
                };
                v.onerror = e;
                v.onabort = e;
                r && (v.withCredentials = !0);
                if (B)try {
                    v.responseType = B
                } catch (q) {
                    if ("json" !== B)throw q;
                }
                v.send(x(k) ? null : k)
            }
            if (0 < s)var M = d(Q, s); else s && D(s.then) && s.then(Q)
        }
    }

    function ef() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
            function f(a) {
                return "\\\\\\" +
                    a
            }

            function g(c) {
                return c.replace(s, a).replace(r, b)
            }

            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function k(f, k, s, r) {
                function y(a) {
                    try {
                        var b = a;
                        a = s ? e.getTrusted(s, b) : e.valueOf(b);
                        var d;
                        if (r && !z(a))d = a; else if (null == a)d = ""; else {
                            switch (typeof a) {
                                case "string":
                                    break;
                                case "number":
                                    a = "" + a;
                                    break;
                                default:
                                    a = eb(a)
                            }
                            d = a
                        }
                        return d
                    } catch (g) {
                        c(La.interr(f, g))
                    }
                }

                if (!f.length || -1 === f.indexOf(a)) {
                    var v;
                    k || (k = g(f), v = ka(k), v.exp = f, v.expressions = [], v.$$watchDelegate = h);
                    return v
                }
                r = !!r;
                var n,
                    q, F = 0, C = [], W = [];
                v = f.length;
                for (var N = [], O = []; F < v;)if (-1 != (n = f.indexOf(a, F)) && -1 != (q = f.indexOf(b, n + l)))F !== n && N.push(g(f.substring(F, n))), F = f.substring(n + l, q), C.push(F), W.push(d(F, y)), F = q + m, O.push(N.length), N.push(""); else {
                    F !== v && N.push(g(f.substring(F)));
                    break
                }
                s && 1 < N.length && La.throwNoconcat(f);
                if (!k || C.length) {
                    var R = function (a) {
                        for (var b = 0, c = C.length; b < c; b++) {
                            if (r && x(a[b]))return;
                            N[O[b]] = a[b]
                        }
                        return N.join("")
                    };
                    return L(function (a) {
                        var b = 0, d = C.length, e = Array(d);
                        try {
                            for (; b < d; b++)e[b] = W[b](a);
                            return R(e)
                        } catch (g) {
                            c(La.interr(f,
                                g))
                        }
                    }, {
                        exp: f, expressions: C, $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(W, function (d, e) {
                                var f = R(d);
                                D(b) && b.call(this, f, d !== e ? c : f, a);
                                c = f
                            })
                        }
                    })
                }
            }

            var l = a.length, m = b.length, s = new RegExp(a.replace(/./g, f), "g"), r = new RegExp(b.replace(/./g, f), "g");
            k.startSymbol = function () {
                return a
            };
            k.endSymbol = function () {
                return b
            };
            return k
        }]
    }

    function ff() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f, k, l, m) {
                function s() {
                    r ? f.apply(null, B) : f(p)
                }

                var r = 4 < arguments.length,
                    B = r ? wa.call(arguments, 4) : [], n = b.setInterval, t = b.clearInterval, p = 0, y = z(m) && !m, v = (y ? c : d).defer(), q = v.promise;
                l = z(l) ? l : 0;
                q.$$intervalId = n(function () {
                    y ? e.defer(s) : a.$evalAsync(s);
                    v.notify(p++);
                    0 < l && p >= l && (v.resolve(p), t(q.$$intervalId), delete g[q.$$intervalId]);
                    y || a.$apply()
                }, k);
                g[q.$$intervalId] = v;
                return q
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
            };
            return f
        }]
    }

    function cc(a) {
        a = a.split("/");
        for (var b = a.length; b--;)a[b] = qb(a[b]);
        return a.join("/")
    }

    function hd(a, b) {
        var d = za(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = ea(d.port) || bg[d.protocol] || null
    }

    function id(a, b) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = za(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = yc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function ma(a, b) {
        if (0 === b.indexOf(a))return b.substr(a.length)
    }

    function Ja(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b)
    }

    function kb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function dc(a, b, d) {
        this.$$html5 = !0;
        d = d || "";
        hd(a, this);
        this.$$parse = function (a) {
            var d = ma(b, a);
            if (!G(d))throw Eb("ipthprfx", a, b);
            id(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Sb(this.$$search), d = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1)
        };
        this.$$parseLinkUrl = function (c, e) {
            if (e &&
                "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            z(f = ma(a, c)) ? (g = f, g = z(f = ma(d, f)) ? b + (ma("/", f) || f) : a + g) : z(f = ma(b, c)) ? g = b + f : b == c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function ec(a, b, d) {
        hd(a, this);
        this.$$parse = function (c) {
            var e = ma(a, c) || ma(b, c), f;
            x(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", x(e) && (a = c, this.replace())) : (f = ma(d, e), x(f) && (f = e));
            id(f, this);
            c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            0 === f.indexOf(e) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function () {
            var b = Sb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "")
        };
        this.$$parseLinkUrl = function (b, d) {
            return Ja(a) == Ja(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function jd(a, b, d) {
        this.$$html5 = !0;
        ec.apply(this, arguments);
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            a == Ja(c) ? f = c : (g = ma(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var b =
                Sb(this.$$search), e = this.$$hash ? "#" + qb(this.$$hash) : "";
            this.$$url = cc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url
        }
    }

    function Fb(a) {
        return function () {
            return this[a]
        }
    }

    function kd(a, b) {
        return function (d) {
            if (x(d))return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function mf() {
        var a = "", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return z(b) ? (a = b, this) : a
        };
        this.html5Mode = function (a) {
            return bb(a) ? (b.enabled = a, this) : J(a) ? (bb(a.enabled) && (b.enabled = a.enabled),
            bb(a.requireBase) && (b.requireBase = a.requireBase), bb(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
            function h(a, b, d) {
                var e = l.url(), f = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (g) {
                    throw l.url(e), l.$$state = f, g;
                }
            }

            function k(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }

            var l, m;
            m = c.baseHref();
            var s = c.url(), r;
            if (b.enabled) {
                if (!m && b.requireBase)throw Eb("nobase");
                r = s.substring(0,
                        s.indexOf("/", s.indexOf("//") + 2)) + (m || "/");
                m = e.history ? dc : jd
            } else r = Ja(s), m = ec;
            var B = r.substr(0, Ja(r).lastIndexOf("/") + 1);
            l = new m(r, B, "#" + a);
            l.$$parseLinkUrl(s, s);
            l.$$state = c.state();
            var n = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                    for (var e = A(a.target); "a" !== ta(e[0]);)if (e[0] === f[0] || !(e = e.parent())[0])return;
                    var h = e.prop("href"), k = e.attr("href") || e.attr("xlink:href");
                    J(h) && "[object SVGAnimatedString]" === h.toString() &&
                    (h = za(h.animVal).href);
                    n.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(h, k) || (a.preventDefault(), l.absUrl() != c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                }
            });
            kb(l.absUrl()) != kb(s) && c.url(l.absUrl(), !0);
            var t = !0;
            c.onUrlChange(function (a, b) {
                x(ma(B, a)) ? g.location.href = a : (d.$evalAsync(function () {
                    var c = l.absUrl(), e = l.$$state, f;
                    a = kb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    f = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() === a && (f ? (l.$$parse(c), l.$$state =
                        e, h(c, !1, e)) : (t = !1, k(c, e)))
                }), d.$$phase || d.$digest())
            });
            d.$watch(function () {
                var a = kb(c.url()), b = kb(l.absUrl()), f = c.state(), g = l.$$replace, m = a !== b || l.$$html5 && e.history && f !== l.$$state;
                if (t || m)t = !1, d.$evalAsync(function () {
                    var b = l.absUrl(), c = d.$broadcast("$locationChangeStart", b, a, l.$$state, f).defaultPrevented;
                    l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = f) : (m && h(b, g, f === l.$$state ? null : l.$$state), k(a, f)))
                });
                l.$$replace = !1
            });
            return l
        }]
    }

    function nf() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return z(b) ?
                (a = b, this) : a
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || w;
                a = !1;
                try {
                    a = !!e.apply
                } catch (k) {
                }
                return a ? function () {
                    var a = [];
                    n(arguments, function (b) {
                        a.push(c(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"),
                debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Xa(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a)throw ca("isecfld", b);
        return a
    }

    function ld(a, b) {
        a += "";
        if (!G(a))throw ca("iseccst", b);
        return a
    }

    function Aa(a, b) {
        if (a) {
            if (a.constructor === a)throw ca("isecfn", b);
            if (a.window === a)throw ca("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find))throw ca("isecdom", b);
            if (a === Object)throw ca("isecobj",
                b);
        }
        return a
    }

    function md(a, b) {
        if (a) {
            if (a.constructor === a)throw ca("isecfn", b);
            if (a === cg || a === dg || a === eg)throw ca("isecff", b);
        }
    }

    function Gb(a, b) {
        if (a && (a === (0).constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor))throw ca("isecaf", b);
    }

    function fg(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function nd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function T(a, b) {
        var d, c;
        switch (a.type) {
            case q.Program:
                d = !0;
                n(a.body, function (a) {
                    T(a.expression,
                        b);
                    d = d && a.expression.constant
                });
                a.constant = d;
                break;
            case q.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case q.UnaryExpression:
                T(a.argument, b);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case q.BinaryExpression:
                T(a.left, b);
                T(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.left.toWatch.concat(a.right.toWatch);
                break;
            case q.LogicalExpression:
                T(a.left, b);
                T(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.ConditionalExpression:
                T(a.test,
                    b);
                T(a.alternate, b);
                T(a.consequent, b);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case q.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case q.MemberExpression:
                T(a.object, b);
                a.computed && T(a.property, b);
                a.constant = a.object.constant && (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case q.CallExpression:
                d = a.filter ? !b(a.callee.name).$stateful : !1;
                c = [];
                n(a.arguments, function (a) {
                    T(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = a.filter && !b(a.callee.name).$stateful ? c : [a];
                break;
            case q.AssignmentExpression:
                T(a.left, b);
                T(a.right, b);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case q.ArrayExpression:
                d = !0;
                c = [];
                n(a.elements, function (a) {
                    T(a, b);
                    d = d && a.constant;
                    a.constant || c.push.apply(c, a.toWatch)
                });
                a.constant = d;
                a.toWatch = c;
                break;
            case q.ObjectExpression:
                d = !0;
                c = [];
                n(a.properties, function (a) {
                    T(a.value, b);
                    d = d && a.value.constant;
                    a.value.constant || c.push.apply(c, a.value.toWatch)
                });
                a.constant =
                    d;
                a.toWatch = c;
                break;
            case q.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case q.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function od(a) {
        if (1 == a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : u
        }
    }

    function pd(a) {
        return a.type === q.Identifier || a.type === q.MemberExpression
    }

    function qd(a) {
        if (1 === a.body.length && pd(a.body[0].expression))return {
            type: q.AssignmentExpression,
            left: a.body[0].expression,
            right: {type: q.NGValueParameter},
            operator: "="
        }
    }

    function rd(a) {
        return 0 === a.body.length ||
            1 === a.body.length && (a.body[0].expression.type === q.Literal || a.body[0].expression.type === q.ArrayExpression || a.body[0].expression.type === q.ObjectExpression)
    }

    function sd(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function td(a, b) {
        this.astBuilder = a;
        this.$filter = b
    }

    function Hb(a) {
        return "constructor" == a
    }

    function fc(a) {
        return D(a.valueOf) ? a.valueOf() : gg.call(a)
    }

    function of() {
        var a = X(), b = X();
        this.$get = ["$filter", function (d) {
            function c(a, b) {
                return null == a || null == b ? a === b : "object" === typeof a && (a = fc(a), "object" === typeof a) ?
                    !1 : a === b || a !== a && b !== b
            }

            function e(a, b, d, e, f) {
                var g = e.inputs, h;
                if (1 === g.length) {
                    var k = c, g = g[0];
                    return a.$watch(function (a) {
                        var b = g(a);
                        c(b, k) || (h = e(a, u, u, [b]), k = b && fc(b));
                        return h
                    }, b, d, f)
                }
                for (var l = [], m = [], s = 0, n = g.length; s < n; s++)l[s] = c, m[s] = null;
                return a.$watch(function (a) {
                    for (var b = !1, d = 0, f = g.length; d < f; d++) {
                        var k = g[d](a);
                        if (b || (b = !c(k, l[d])))m[d] = k, l[d] = k && fc(k)
                    }
                    b && (h = e(a, u, u, m));
                    return h
                }, b, d, f)
            }

            function f(a, b, c, d) {
                var e, f;
                return e = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    f = a;
                    D(b) && b.apply(this,
                        arguments);
                    z(a) && d.$$postDigest(function () {
                        z(f) && e()
                    })
                }, c)
            }

            function g(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    n(a, function (a) {
                        z(a) || (b = !1)
                    });
                    return b
                }

                var f, g;
                return f = a.$watch(function (a) {
                    return d(a)
                }, function (a, c, d) {
                    g = a;
                    D(b) && b.call(this, a, c, d);
                    e(a) && d.$$postDigest(function () {
                        e(g) && f()
                    })
                }, c)
            }

            function h(a, b, c, d) {
                var e;
                return e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c)
            }

            function k(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = !1, c = c !== g && c !== f ? function (c, e, f, g) {
                    f = d && g ? g[0] : a(c, e, f, g);
                    return b(f, c, e)
                } : function (c,
                              d, e, f) {
                    e = a(c, d, e, f);
                    c = b(e, c, d);
                    return z(e) ? c : e
                };
                a.$$watchDelegate && a.$$watchDelegate !== e ? c.$$watchDelegate = a.$$watchDelegate : b.$stateful || (c.$$watchDelegate = e, d = !a.inputs, c.inputs = a.inputs ? a.inputs : [a]);
                return c
            }

            var l = Ea().noUnsafeEval, m = {csp: l, expensiveChecks: !1}, s = {csp: l, expensiveChecks: !0};
            return function (c, l, n) {
                var t, p, y;
                switch (typeof c) {
                    case "string":
                        y = c = c.trim();
                        var v = n ? b : a;
                        t = v[y];
                        t || (":" === c.charAt(0) && ":" === c.charAt(1) && (p = !0, c = c.substring(2)), n = n ? s : m, t = new gc(n), t = (new hc(t, d, n)).parse(c),
                            t.constant ? t.$$watchDelegate = h : p ? t.$$watchDelegate = t.literal ? g : f : t.inputs && (t.$$watchDelegate = e), v[y] = t);
                        return k(t, l);
                    case "function":
                        return k(c, l);
                    default:
                        return k(w, l)
                }
            }
        }]
    }

    function qf() {
        this.$get = ["$rootScope", "$exceptionHandler", function (a, b) {
            return ud(function (b) {
                a.$evalAsync(b)
            }, b)
        }]
    }

    function rf() {
        this.$get = ["$browser", "$exceptionHandler", function (a, b) {
            return ud(function (b) {
                a.defer(b)
            }, b)
        }]
    }

    function ud(a, b) {
        function d() {
            this.$$state = {status: 0}
        }

        function c(a, b) {
            return function (c) {
                b.call(a, c)
            }
        }

        function e(c) {
            !c.processScheduled && c.pending && (c.processScheduled = !0, a(function () {
                var a, d, e;
                e = c.pending;
                c.processScheduled = !1;
                c.pending = u;
                for (var f = 0, g = e.length; f < g; ++f) {
                    d = e[f][0];
                    a = e[f][c.status];
                    try {
                        D(a) ? d.resolve(a(c.value)) : 1 === c.status ? d.resolve(c.value) : d.reject(c.value)
                    } catch (h) {
                        d.reject(h), b(h)
                    }
                }
            }))
        }

        function f() {
            this.promise = new d
        }

        var g = P("$q", TypeError);
        L(d.prototype, {
            then: function (a, b, c) {
                if (x(a) && x(b) && x(c))return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d,
                    a, b, c]);
                0 < this.$$state.status && e(this.$$state);
                return d.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return k(b, !0, a)
                }, function (b) {
                    return k(b, !1, a)
                }, b)
            }
        });
        L(f.prototype, {
            resolve: function (a) {
                this.promise.$$state.status || (a === this.promise ? this.$$reject(g("qcycle", a)) : this.$$resolve(a))
            }, $$resolve: function (a) {
                function d(a) {
                    k || (k = !0, h.$$resolve(a))
                }

                function f(a) {
                    k || (k = !0, h.$$reject(a))
                }

                var g, h = this, k = !1;
                try {
                    if (J(a) || D(a))g = a && a.then;
                    D(g) ?
                        (this.promise.$$state.status = -1, g.call(a, d, f, c(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, e(this.promise.$$state))
                } catch (l) {
                    f(l), b(l)
                }
            }, reject: function (a) {
                this.promise.$$state.status || this.$$reject(a)
            }, $$reject: function (a) {
                this.promise.$$state.value = a;
                this.promise.$$state.status = 2;
                e(this.promise.$$state)
            }, notify: function (c) {
                var d = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && d && d.length && a(function () {
                    for (var a, e, f = 0, g = d.length; f < g; f++) {
                        e = d[f][0];
                        a = d[f][3];
                        try {
                            e.notify(D(a) ? a(c) : c)
                        } catch (h) {
                            b(h)
                        }
                    }
                })
            }
        });
        var h = function (a, b) {
            var c = new f;
            b ? c.resolve(a) : c.reject(a);
            return c.promise
        }, k = function (a, b, c) {
            var d = null;
            try {
                D(c) && (d = c())
            } catch (e) {
                return h(e, !1)
            }
            return d && D(d.then) ? d.then(function () {
                return h(a, b)
            }, function (a) {
                return h(a, !1)
            }) : h(a, b)
        }, l = function (a, b, c, d) {
            var e = new f;
            e.resolve(a);
            return e.promise.then(b, c, d)
        }, m = function r(a) {
            if (!D(a))throw g("norslvr", a);
            if (!(this instanceof r))return new r(a);
            var b = new f;
            a(function (a) {
                b.resolve(a)
            }, function (a) {
                b.reject(a)
            });
            return b.promise
        };
        m.defer = function () {
            var a = new f;
            a.resolve = c(a, a.resolve);
            a.reject = c(a, a.reject);
            a.notify = c(a, a.notify);
            return a
        };
        m.reject = function (a) {
            var b = new f;
            b.reject(a);
            return b.promise
        };
        m.when = l;
        m.resolve = l;
        m.all = function (a) {
            var b = new f, c = 0, d = K(a) ? [] : {};
            n(a, function (a, e) {
                c++;
                l(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        };
        return m
    }

    function Af() {
        this.$get = ["$window", "$timeout", function (a,
                                                      b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
                var b = d(a);
                return function () {
                    c(b)
                }
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function pf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++pb;
                this.$$ChildScope =
                    null
            }

            b.prototype = a;
            return b
        }

        var b = 10, d = P("$rootScope"), c = null, e = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, h) {
            function k(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === Ka && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++pb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling =
                    this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root = this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function s(a) {
                if (y.$$phase)throw d("inprog", y.$$phase);
                y.$$phase = a
            }

            function r(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function B(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function q() {
            }

            function t() {
                for (; M.length;)try {
                    M.shift()()
                } catch (a) {
                    f(a)
                }
                e =
                    null
            }

            function p() {
                null === e && (e = h.defer(function () {
                    y.$apply(t)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c != this) && d.$on("$destroy", k);
                    return d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f,
                        a);
                    var h = this, k = h.$$watchers, l = {fn: b, last: q, get: f, exp: e || a, eq: !!d};
                    c = null;
                    D(b) || (l.fn = w);
                    k || (k = h.$$watchers = []);
                    k.unshift(l);
                    r(this, 1);
                    return function () {
                        0 <= cb(k, l) && r(h, -1);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, g)) : b(e, d, g)
                    }

                    var d = Array(a.length), e = Array(a.length), f = [], g = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        g.$evalAsync(function () {
                            l && b(e, e, g)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, f) {
                        e[0] = a;
                        d[0] = c;
                        b(e, a === c ? e : d, f)
                    });
                    n(a, function (a,
                                   b) {
                        var k = g.$watch(a, function (a, f) {
                            e[b] = a;
                            d[b] = f;
                            h || (h = !0, g.$evalAsync(c))
                        });
                        f.push(k)
                    });
                    return function () {
                        for (; f.length;)f.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!x(e)) {
                            if (J(e))if (Ca(e))for (f !== s && (f = s, n = f.length = 0, l++), a = e.length, n !== a && (l++, f.length = n = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                                f !== r && (f = r = {}, n = 0, l++);
                                a = 0;
                                for (b in e)qa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h === g || (l++, f[b] = g)) : (n++, f[b] = g, l++));
                                if (n >
                                    a)for (b in l++, f)qa.call(e, b) || (n--, delete f[b])
                            } else f !== e && (f = e, l++);
                            return l
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), s = [], r = {}, p = !0, n = 0;
                    return this.$watch(m, function () {
                        p ? (p = !1, b(e, e, d)) : b(e, h, d);
                        if (k)if (J(e))if (Ca(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++)h[a] = e[a]
                        } else for (a in h = {}, e)qa.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var a, g, k, l, m, r, n = b, p, B = [], M, z;
                    s("$digest");
                    h.$$checkUrlChange();
                    this === y && null !== e && (h.defer.cancel(e), t());
                    c = null;
                    do {
                        r = !1;
                        for (p =
                                 this; v.length;) {
                            try {
                                z = v.shift(), z.scope.$eval(z.expression, z.locals)
                            } catch (w) {
                                f(w)
                            }
                            c = null
                        }
                        a:do {
                            if (l = p.$$watchers)for (m = l.length; m--;)try {
                                if (a = l[m])if ((g = a.get(p)) !== (k = a.last) && !(a.eq ? la(g, k) : "number" === typeof g && "number" === typeof k && isNaN(g) && isNaN(k)))r = !0, c = a, a.last = a.eq ? Pa(g, null) : g, a.fn(g, k === q ? g : k, p), 5 > n && (M = 4 - n, B[M] || (B[M] = []), B[M].push({
                                    msg: D(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: g,
                                    oldVal: k
                                })); else if (a === c) {
                                    r = !1;
                                    break a
                                }
                            } catch (x) {
                                f(x)
                            }
                            if (!(l = p.$$watchersCount && p.$$childHead ||
                                    p !== this && p.$$nextSibling))for (; p !== this && !(l = p.$$nextSibling);)p = p.$parent
                        } while (p = l);
                        if ((r || v.length) && !n--)throw y.$$phase = null, d("infdig", b, B);
                    } while (r || v.length);
                    for (y.$$phase = null; u.length;)try {
                        u.shift()()
                    } catch (A) {
                        f(A)
                    }
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === y && h.$$applicationDestroyed();
                        r(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)B(this, this.$$listenerCount[b], b);
                        a && a.$$childHead == this && (a.$$childHead =
                            this.$$nextSibling);
                        a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = w;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return w
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                }, $eval: function (a, b) {
                    return g(a)(this, b)
                }, $evalAsync: function (a, b) {
                    y.$$phase || v.length ||
                    h.defer(function () {
                        v.length && y.$digest()
                    });
                    v.push({scope: this, expression: a, locals: b})
                }, $$postDigest: function (a) {
                    u.push(a)
                }, $apply: function (a) {
                    try {
                        s("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            y.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            y.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && M.push(b);
                    p()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
                    while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, B(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = db([h], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++)if (d[l])try {
                            d[l].apply(null, k)
                        } catch (s) {
                            f(s)
                        } else d.splice(l, 1), l--, m--;
                        if (g)return h.currentScope = null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope =
                        null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var g = db([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)if (d[h])try {
                            d[h].apply(null, g)
                        } catch (l) {
                            f(l)
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope =
                        null;
                    return e
                }
            };
            var y = new m, v = y.$$asyncQueue = [], u = y.$$postDigestQueue = [], M = y.$$applyAsyncQueue = [];
            return y
        }]
    }

    function je() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return z(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return z(a) ? (b = a, this) : b
        };
        this.$get = function () {
            return function (d, c) {
                var e = c ? b : a, f;
                f = za(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" + f
            }
        }
    }

    function hg(a) {
        if ("self" === a)return a;
        if (G(a)) {
            if (-1 < a.indexOf("***"))throw Ba("iwcard", a);
            a = vd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if (Oa(a))return new RegExp("^" + a.source + "$");
        throw Ba("imatcher");
    }

    function wd(a) {
        var b = [];
        z(a) && n(a, function (a) {
            b.push(hg(a))
        });
        return b
    }

    function tf() {
        this.SCE_CONTEXTS = ja;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = wd(b));
            return a
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length && (b = wd(a));
            return b
        };
        this.$get = ["$injector",
            function (d) {
                function c(a, b) {
                    return "self" === a ? gd(b) : !!a.exec(b.href)
                }

                function e(a) {
                    var b = function (a) {
                        this.$$unwrapTrustedValue = function () {
                            return a
                        }
                    };
                    a && (b.prototype = new a);
                    b.prototype.valueOf = function () {
                        return this.$$unwrapTrustedValue()
                    };
                    b.prototype.toString = function () {
                        return this.$$unwrapTrustedValue().toString()
                    };
                    return b
                }

                var f = function (a) {
                    throw Ba("unsafe");
                };
                d.has("$sanitize") && (f = d.get("$sanitize"));
                var g = e(), h = {};
                h[ja.HTML] = e(g);
                h[ja.CSS] = e(g);
                h[ja.URL] = e(g);
                h[ja.JS] = e(g);
                h[ja.RESOURCE_URL] =
                    e(h[ja.URL]);
                return {
                    trustAs: function (a, b) {
                        var c = h.hasOwnProperty(a) ? h[a] : null;
                        if (!c)throw Ba("icontext", a, b);
                        if (null === b || x(b) || "" === b)return b;
                        if ("string" !== typeof b)throw Ba("itype", a);
                        return new c(b)
                    }, getTrusted: function (d, e) {
                        if (null === e || x(e) || "" === e)return e;
                        var g = h.hasOwnProperty(d) ? h[d] : null;
                        if (g && e instanceof g)return e.$$unwrapTrustedValue();
                        if (d === ja.RESOURCE_URL) {
                            var g = za(e.toString()), s, r, n = !1;
                            s = 0;
                            for (r = a.length; s < r; s++)if (c(a[s], g)) {
                                n = !0;
                                break
                            }
                            if (n)for (s = 0, r = b.length; s < r; s++)if (c(b[s],
                                    g)) {
                                n = !1;
                                break
                            }
                            if (n)return e;
                            throw Ba("insecurl", e.toString());
                        }
                        if (d === ja.HTML)return f(e);
                        throw Ba("unsafe");
                    }, valueOf: function (a) {
                        return a instanceof g ? a.$$unwrapTrustedValue() : a
                    }
                }
            }]
    }

    function sf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > Ka)throw Ba("iequirks");
            var c = V(ja);
            c.isEnabled = function () {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs = c.getTrusted = function (a, b) {
                return b
            },
                c.valueOf = $a);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            n(ja, function (a, b) {
                var d = H(b);
                c[gb("parse_as_" + d)] = function (b) {
                    return e(a, b)
                };
                c[gb("get_trusted_" + d)] = function (b) {
                    return f(a, b)
                };
                c[gb("trust_as_" + d)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function uf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {}, c = ea((/android (\d+)/.exec(H((a.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((a.navigator ||
            {}).userAgent), f = b[0] || {}, g, h = /^(Moz|webkit|ms)(?=[A-Z])/, k = f.body && f.body.style, l = !1, m = !1;
            if (k) {
                for (var s in k)if (l = h.exec(s)) {
                    g = l[0];
                    g = g.substr(0, 1).toUpperCase() + g.substr(1);
                    break
                }
                g || (g = "WebkitOpacity"in k && "webkit");
                l = !!("transition"in k || g + "Transition"in k);
                m = !!("animation"in k || g + "Animation"in k);
                !c || l && m || (l = G(k.webkitTransition), m = G(k.webkitAnimation))
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > c || e), hasEvent: function (a) {
                    if ("input" === a && 11 >= Ka)return !1;
                    if (x(d[a])) {
                        var b = f.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                }, csp: Ea(), vendorPrefix: g, transitions: l, animations: m, android: c
            }
        }]
    }

    function wf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$templateCache", "$http", "$q", "$sce", function (b, d, c, e) {
            function f(g, h) {
                f.totalPendingRequests++;
                G(g) && b.get(g) || (g = e.getTrustedResourceUrl(g));
                var k = d.defaults && d.defaults.transformResponse;
                K(k) ? k = k.filter(function (a) {
                    return a !== ac
                }) : k === ac && (k = null);
                return d.get(g, L({cache: b, transformResponse: k}, a))["finally"](function () {
                    f.totalPendingRequests--
                }).then(function (a) {
                    b.put(g,
                        a.data);
                    return a.data
                }, function (a) {
                    if (!h)throw ia("tpload", g, a.status, a.statusText);
                    return c.reject(a)
                })
            }

            f.totalPendingRequests = 0;
            return f
        }]
    }

    function xf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    n(a, function (a) {
                        var c = $.element(a).data("$binding");
                        c && n(c, function (c) {
                            d ? (new RegExp("(^|\\s)" + vd(b) + "(\\s|\\||$)")).test(c) && g.push(a) : -1 != c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a,
                                         b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], h = 0; h < g.length; ++h) {
                        var k = a.querySelectorAll("[" + g[h] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (k.length)return k
                    }
                }, getLocation: function () {
                    return d.url()
                }, setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                }, whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function yf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
            function f(f, k, l) {
                D(f) || (l = k, k = f, f = w);
                var m = wa.call(arguments, 3), s = z(l) && !l, r = (s ? c : d).defer(),
                    n = r.promise, q;
                q = b.defer(function () {
                    try {
                        r.resolve(f.apply(null, m))
                    } catch (b) {
                        r.reject(b), e(b)
                    } finally {
                        delete g[n.$$timeoutId]
                    }
                    s || a.$apply()
                }, k);
                n.$$timeoutId = q;
                g[q] = r;
                return n
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function za(a) {
        Ka && (aa.setAttribute("href", a), a = aa.href);
        aa.setAttribute("href", a);
        return {
            href: aa.href,
            protocol: aa.protocol ? aa.protocol.replace(/:$/, "") : "",
            host: aa.host,
            search: aa.search ? aa.search.replace(/^\?/, "") : "",
            hash: aa.hash ? aa.hash.replace(/^#/, "") : "",
            hostname: aa.hostname,
            port: aa.port,
            pathname: "/" === aa.pathname.charAt(0) ? aa.pathname : "/" + aa.pathname
        }
    }

    function gd(a) {
        a = G(a) ? za(a) : a;
        return a.protocol === xd.protocol && a.host === xd.host
    }

    function zf() {
        this.$get = ka(S)
    }

    function yd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var d = a[0] || {}, c = {}, e = "";
        return function () {
            var a, g, h, k, l;
            a = d.cookie || "";
            if (a !== e)for (e = a, a = e.split("; "), c = {}, h = 0; h < a.length; h++)g =
                a[h], k = g.indexOf("="), 0 < k && (l = b(g.substring(0, k)), x(c[l]) && (c[l] = b(g.substring(k + 1))));
            return c
        }
    }

    function Df() {
        this.$get = yd
    }

    function Lc(a) {
        function b(d, c) {
            if (J(d)) {
                var e = {};
                n(d, function (a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }

        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency", zd);
        b("date", Ad);
        b("filter", ig);
        b("json", jg);
        b("limitTo", kg);
        b("lowercase", lg);
        b("number", Bd);
        b("orderBy", Cd);
        b("uppercase", mg)
    }

    function ig() {
        return function (a,
                         b, d) {
            if (!Ca(a)) {
                if (null == a)return a;
                throw P("filter")("notarray", a);
            }
            var c;
            switch (ic(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    c = !0;
                case "object":
                    b = ng(b, d, c);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function ng(a, b, d) {
        var c = J(a) && "$"in a;
        !0 === b ? b = la : D(b) || (b = function (a, b) {
            if (x(a))return !1;
            if (null === a || null === b)return a === b;
            if (J(b) || J(a) && !rc(a))return !1;
            a = H("" + a);
            b = H("" + b);
            return -1 !== a.indexOf(b)
        });
        return function (e) {
            return c && !J(e) ? Ma(e,
                a.$, b, !1) : Ma(e, a, b, d)
        }
    }

    function Ma(a, b, d, c, e) {
        var f = ic(a), g = ic(b);
        if ("string" === g && "!" === b.charAt(0))return !Ma(a, b.substring(1), d, c);
        if (K(a))return a.some(function (a) {
            return Ma(a, b, d, c)
        });
        switch (f) {
            case "object":
                var h;
                if (c) {
                    for (h in a)if ("$" !== h.charAt(0) && Ma(a[h], b, d, !0))return !0;
                    return e ? !1 : Ma(a, b, d, !1)
                }
                if ("object" === g) {
                    for (h in b)if (e = b[h], !D(e) && !x(e) && (f = "$" === h, !Ma(f ? a : a[h], e, d, f, f)))return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function ic(a) {
        return null ===
        a ? "null" : typeof a
    }

    function zd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            x(c) && (c = b.CURRENCY_SYM);
            x(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Dd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Bd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Dd(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
        }
    }

    function og(a) {
        var b = 0, d, c, e, f, g;
        -1 < (c = a.indexOf(Ed)) && (a = a.replace(Ed, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c =
            a.length);
        for (e = 0; a.charAt(e) == jc; e++);
        if (e == (g = a.length))d = [0], c = 1; else {
            for (g--; a.charAt(g) == jc;)g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++, f++)d[f] = +a.charAt(e)
        }
        c > Fd && (d = d.splice(0, Fd - 1), b = c - 1, c = 1);
        return {d: d, e: b, i: c}
    }

    function pg(a, b, d, c) {
        var e = a.d, f = e.length - a.i;
        b = x(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d)e.splice(d); else {
            a.i = 1;
            e.length = d = b + 1;
            for (var g = 0; g < d; g++)e[g] = 0
        }
        for (5 <= c && e[d - 1]++; f < b; f++)e.push(0);
        if (b = e.reduceRight(function (a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0))e.unshift(b),
            a.i++
    }

    function Dd(a, b, d, c, e) {
        if (!G(a) && !U(a) || isNaN(a))return "";
        var f = !isFinite(a), g = !1, h = Math.abs(a) + "", k = "";
        if (f)k = "\u221e"; else {
            g = og(h);
            pg(g, e, b.minFrac, b.maxFrac);
            k = g.d;
            h = g.i;
            e = g.e;
            f = [];
            for (g = k.reduce(function (a, b) {
                return a && !b
            }, !0); 0 > h;)k.unshift(0), h++;
            0 < h ? f = k.splice(h) : (f = k, k = [0]);
            h = [];
            for (k.length > b.lgSize && h.unshift(k.splice(-b.lgSize).join("")); k.length > b.gSize;)h.unshift(k.splice(-b.gSize).join(""));
            k.length && h.unshift(k.join(""));
            k = h.join(d);
            f.length && (k += c + f.join(""));
            e && (k += "e+" + e)
        }
        return 0 >
        a && !g ? b.negPre + k + b.negSuf : b.posPre + k + b.posSuf
    }

    function Ib(a, b, d) {
        var c = "";
        0 > a && (c = "-", a = -a);
        for (a = "" + a; a.length < b;)a = jc + a;
        d && (a = a.substr(a.length - b));
        return c + a
    }

    function da(a, b, d, c) {
        d = d || 0;
        return function (e) {
            e = e["get" + a]();
            if (0 < d || e > -d)e += d;
            0 === e && -12 == d && (e = 12);
            return Ib(e, b, c)
        }
    }

    function Jb(a, b) {
        return function (d, c) {
            var e = d["get" + a](), f = ub(b ? "SHORT" + a : a);
            return c[f][e]
        }
    }

    function Gd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Hd(a) {
        return function (b) {
            var d = Gd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) - +d;
            b = 1 + Math.round(b / 6048E5);
            return Ib(b, a)
        }
    }

    function kc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Ad(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, k = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = ea(b[9] + b[10]), g = ea(b[9] + b[11]));
                h.call(a, ea(b[1]), ea(b[2]) - 1, ea(b[3]));
                f = ea(b[4] || 0) - f;
                g = ea(b[5] || 0) - g;
                h = ea(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                k.call(a,
                    f, g, h, b)
            }
            return a
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var g = "", h = [], k, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            G(c) && (c = qg.test(c) ? ea(c) : b(c));
            U(c) && (c = new Date(c));
            if (!ba(c) || !isFinite(c.getTime()))return c;
            for (; d;)(l = rg.exec(d)) ? (h = db(h, l, 1), d = h.pop()) : (h.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = wc(f, c.getTimezoneOffset()), c = Rb(c, f, !0));
            n(h, function (b) {
                k = sg[b];
                g += k ? k(c, a.DATETIME_FORMATS,
                    m) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function jg() {
        return function (a, b) {
            x(b) && (b = 2);
            return eb(a, b)
        }
    }

    function kg() {
        return function (a, b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : ea(b);
            if (isNaN(b))return a;
            U(a) && (a = a.toString());
            if (!K(a) && !G(a))return a;
            d = !d || isNaN(d) ? 0 : ea(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? a.slice(d, d + b) : 0 === d ? a.slice(b, a.length) : a.slice(Math.max(0, d + b), d)
        }
    }

    function Cd(a) {
        function b(b, d) {
            d = d ? -1 : 1;
            return b.map(function (b) {
                var c = 1, h = $a;
                if (D(b))h = b;
                else if (G(b)) {
                    if ("+" == b.charAt(0) || "-" == b.charAt(0))c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (h = a(b), h.constant))var k = h(), h = function (a) {
                        return a[k]
                    }
                }
                return {get: h, descending: c * d}
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        return function (a, e, f) {
            if (null == a)return a;
            if (!Ca(a))throw P("orderBy")("notarray", a);
            K(e) || (e = [e]);
            0 === e.length && (e = ["+"]);
            var g = b(e, f);
            g.push({
                get: function () {
                    return {}
                }, descending: f ? -1 : 1
            });
            a = Array.prototype.map.call(a,
                function (a, b) {
                    return {
                        value: a, predicateValues: g.map(function (c) {
                            var e = c.get(a);
                            c = typeof e;
                            if (null === e)c = "string", e = "null"; else if ("string" === c)e = e.toLowerCase(); else if ("object" === c)a:{
                                if ("function" === typeof e.valueOf && (e = e.valueOf(), d(e)))break a;
                                if (rc(e) && (e = e.toString(), d(e)))break a;
                                e = b
                            }
                            return {value: e, type: c}
                        })
                    }
                });
            a.sort(function (a, b) {
                for (var c = 0, d = 0, e = g.length; d < e; ++d) {
                    var c = a.predicateValues[d], f = b.predicateValues[d], n = 0;
                    c.type === f.type ? c.value !== f.value && (n = c.value < f.value ? -1 : 1) : n = c.type < f.type ?
                        -1 : 1;
                    if (c = n * g[d].descending)break
                }
                return c
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Na(a) {
        D(a) && (a = {link: a});
        a.restrict = a.restrict || "AC";
        return ka(a)
    }

    function Id(a, b, d, c, e) {
        var f = this, g = [];
        f.$error = {};
        f.$$success = {};
        f.$pending = u;
        f.$name = e(b.name || b.ngForm || "")(d);
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        f.$submitted = !1;
        f.$$parentForm = Kb;
        f.$rollbackViewValue = function () {
            n(g, function (a) {
                a.$rollbackViewValue()
            })
        };
        f.$commitViewValue = function () {
            n(g, function (a) {
                a.$commitViewValue()
            })
        };
        f.$addControl = function (a) {
            Ua(a.$name, "input");
            g.push(a);
            a.$name && (f[a.$name] = a);
            a.$$parentForm = f
        };
        f.$$renameControl = function (a, b) {
            var c = a.$name;
            f[c] === a && delete f[c];
            f[b] = a;
            a.$name = b
        };
        f.$removeControl = function (a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            n(f.$pending, function (b, c) {
                f.$setValidity(c, null, a)
            });
            n(f.$error, function (b, c) {
                f.$setValidity(c, null, a)
            });
            n(f.$$success, function (b, c) {
                f.$setValidity(c, null, a)
            });
            cb(g, a);
            a.$$parentForm = Kb
        };
        Jd({
            ctrl: this, $element: a, set: function (a, b, c) {
                var d = a[b];
                d ?
                -1 === d.indexOf(c) && d.push(c) : a[b] = [c]
            }, unset: function (a, b, c) {
                var d = a[b];
                d && (cb(d, c), 0 === d.length && delete a[b])
            }, $animate: c
        });
        f.$setDirty = function () {
            c.removeClass(a, Ya);
            c.addClass(a, Lb);
            f.$dirty = !0;
            f.$pristine = !1;
            f.$$parentForm.$setDirty()
        };
        f.$setPristine = function () {
            c.setClass(a, Ya, Lb + " ng-submitted");
            f.$dirty = !1;
            f.$pristine = !0;
            f.$submitted = !1;
            n(g, function (a) {
                a.$setPristine()
            })
        };
        f.$setUntouched = function () {
            n(g, function (a) {
                a.$setUntouched()
            })
        };
        f.$setSubmitted = function () {
            c.addClass(a, "ng-submitted");
            f.$submitted = !0;
            f.$$parentForm.$setSubmitted()
        }
    }

    function lc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function lb(a, b, d, c, e, f) {
        var g = H(b[0].type);
        if (!e.android) {
            var h = !1;
            b.on("compositionstart", function (a) {
                h = !0
            });
            b.on("compositionend", function () {
                h = !1;
                k()
            })
        }
        var k = function (a) {
            l && (f.defer.cancel(l), l = null);
            if (!h) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = Y(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) && c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input"))b.on("input",
            k); else {
            var l, m = function (a, b, c) {
                l || (l = f.defer(function () {
                    l = null;
                    b && b.value === c || k(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste"))b.on("paste cut", m)
        }
        b.on("change", k);
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Mb(a, b) {
        return function (d, c) {
            var e, f;
            if (ba(d))return d;
            if (G(d)) {
                '"' == d.charAt(0) && '"' == d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (tg.test(d))return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d))return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, n(e, function (a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function mb(a, b, d, c) {
        return function (e, f, g, h, k, l, m) {
            function s(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function r(a) {
                return z(a) && !ba(a) ? d(a) ||
                u : a
            }

            Kd(e, f, g, h);
            lb(e, f, g, h, k, l);
            var n = h && h.$options && h.$options.timezone, q;
            h.$$parserName = a;
            h.$parsers.push(function (a) {
                return h.$isEmpty(a) ? null : b.test(a) ? (a = d(a, q), n && (a = Rb(a, n)), a) : u
            });
            h.$formatters.push(function (a) {
                if (a && !ba(a))throw nb("datefmt", a);
                if (s(a))return (q = a) && n && (q = Rb(q, n, !0)), m("date")(a, c, n);
                q = null;
                return ""
            });
            if (z(g.min) || g.ngMin) {
                var t;
                h.$validators.min = function (a) {
                    return !s(a) || x(t) || d(a) >= t
                };
                g.$observe("min", function (a) {
                    t = r(a);
                    h.$validate()
                })
            }
            if (z(g.max) || g.ngMax) {
                var p;
                h.$validators.max =
                    function (a) {
                        return !s(a) || x(p) || d(a) <= p
                    };
                g.$observe("max", function (a) {
                    p = r(a);
                    h.$validate()
                })
            }
        }
    }

    function Kd(a, b, d, c) {
        (c.$$hasNativeValidators = J(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? u : a
        })
    }

    function Ld(a, b, d, c, e) {
        if (z(c)) {
            a = a(c);
            if (!a.constant)throw nb("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function mc(a, b) {
        a = "ngClass" + a;
        return ["$animate", function (d) {
            function c(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], m = 0; m < b.length; m++)if (e ==
                        b[m])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                var b = [];
                return K(a) ? (n(a, function (a) {
                    b = b.concat(e(a))
                }), b) : G(a) ? a.split(" ") : J(a) ? (n(a, function (a, c) {
                    a && (b = b.concat(c.split(" ")))
                }), b) : a
            }

            return {
                restrict: "AC", link: function (f, g, h) {
                    function k(a, b) {
                        var c = g.data("$classCounts") || X(), d = [];
                        n(a, function (a) {
                            if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                        });
                        g.data("$classCounts", c);
                        return d.join(" ")
                    }

                    function l(a) {
                        if (!0 === b || f.$index % 2 === b) {
                            var l = e(a || []);
                            if (!m) {
                                var n = k(l, 1);
                                h.$addClass(n)
                            } else if (!la(a,
                                    m)) {
                                var q = e(m), n = c(l, q), l = c(q, l), n = k(n, 1), l = k(l, -1);
                                n && n.length && d.addClass(g, n);
                                l && l.length && d.removeClass(g, l)
                            }
                        }
                        m = V(a)
                    }

                    var m;
                    f.$watch(h[a], l, !0);
                    h.$observe("class", function (b) {
                        l(f.$eval(h[a]))
                    });
                    "ngClass" !== a && f.$watch("$index", function (c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var l = e(f.$eval(h[a]));
                            g === b ? (g = k(l, 1), h.$addClass(g)) : (g = k(l, -1), h.$removeClass(g))
                        }
                    })
                }
            }
        }]
    }

    function Jd(a) {
        function b(a, b) {
            b && !f[a] ? (k.addClass(e, a), f[a] = !0) : !b && f[a] && (k.removeClass(e, a), f[a] = !1)
        }

        function d(a, c) {
            a = a ? "-" + Ac(a, "-") : "";
            b(ob + a, !0 === c);
            b(Md + a, !1 === c)
        }

        var c = a.ctrl, e = a.$element, f = {}, g = a.set, h = a.unset, k = a.$animate;
        f[Md] = !(f[ob] = e.hasClass(ob));
        c.$setValidity = function (a, e, f) {
            x(e) ? (c.$pending || (c.$pending = {}), g(c.$pending, a, f)) : (c.$pending && h(c.$pending, a, f), Nd(c.$pending) && (c.$pending = u));
            bb(e) ? e ? (h(c.$error, a, f), g(c.$$success, a, f)) : (g(c.$error, a, f), h(c.$$success, a, f)) : (h(c.$error, a, f), h(c.$$success, a, f));
            c.$pending ? (b(Od, !0), c.$valid = c.$invalid = u, d("", null)) : (b(Od, !1), c.$valid = Nd(c.$error), c.$invalid = !c.$valid, d("",
                c.$valid));
            e = c.$pending && c.$pending[a] ? u : c.$error[a] ? !1 : c.$$success[a] ? !0 : null;
            d(a, e);
            c.$$parentForm.$setValidity(a, e, c)
        }
    }

    function Nd(a) {
        if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
        return !0
    }

    var ug = /^\/(.+)\/([a-z]*)$/, H = function (a) {
        return G(a) ? a.toLowerCase() : a
    }, qa = Object.prototype.hasOwnProperty, ub = function (a) {
        return G(a) ? a.toUpperCase() : a
    }, Ka, A, xa, wa = [].slice, Wf = [].splice, vg = [].push, ra = Object.prototype.toString, sc = Object.getPrototypeOf, Da = P("ng"), $ = S.angular || (S.angular = {}), Tb, pb = 0;
    Ka = Z.documentMode;
    w.$inject = [];
    $a.$inject = [];
    var K = Array.isArray, Yd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/, Y = function (a) {
        return G(a) ? a.trim() : a
    }, vd = function (a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }, Ea = function () {
        if (!z(Ea.rules)) {
            var a = Z.querySelector("[ng-csp]") || Z.querySelector("[data-ng-csp]");
            if (a) {
                var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                Ea.rules = {
                    noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                    noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                }
            } else {
                a = Ea;
                try {
                    new Function(""), b = !1
                } catch (d) {
                    b = !0
                }
                a.rules = {noUnsafeEval: b, noInlineStyle: !1}
            }
        }
        return Ea.rules
    }, rb = function () {
        if (z(rb.name_))return rb.name_;
        var a, b, d = Ra.length, c, e;
        for (b = 0; b < d; ++b)if (c = Ra[b], a = Z.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
            e = a.getAttribute(c + "jq");
            break
        }
        return rb.name_ = e
    }, Ra = ["ng-", "data-ng-", "ng:", "x-ng-"], ee = /[A-Z]/g, Bc = !1, Qa = 3, ie = {
        full: "1.5.0-rc.0",
        major: 1,
        minor: 5,
        dot: 0,
        codeName: "oblong-panoptikum"
    };
    E.expando =
        "ng339";
    var ib = E.cache = {}, Jf = 1;
    E._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var Ef = /([\:\-\_]+(.))/g, Ff = /^moz([A-Z])/, yb = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
    }, Vb = P("jqLite"), If = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ub = /<|&#?\w+;/, Gf = /<([\w:-]+)/, Hf = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, na = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>",
            "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    na.optgroup = na.option;
    na.tbody = na.tfoot = na.colgroup = na.caption = na.thead;
    na.th = na.td;
    var Of = Node.prototype.contains || function (a) {
            return !!(this.compareDocumentPosition(a) & 16)
        }, Sa = E.prototype = {
        ready: function (a) {
            function b() {
                d || (d = !0, a())
            }

            var d = !1;
            "complete" === Z.readyState ? setTimeout(b) : (this.on("DOMContentLoaded", b), E(S).on("load", b))
        }, toString: function () {
            var a = [];
            n(this, function (b) {
                a.push("" + b)
            });
            return "[" + a.join(", ") +
                "]"
        }, eq: function (a) {
            return 0 <= a ? A(this[a]) : A(this[this.length + a])
        }, length: 0, push: vg, sort: [].sort, splice: [].splice
    }, Db = {};
    n("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Db[H(a)] = a
    });
    var Tc = {};
    n("input select option textarea button form details".split(" "), function (a) {
        Tc[a] = !0
    });
    var $c = {ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max", ngPattern: "pattern"};
    n({
        data: Xb, removeData: hb, hasData: function (a) {
            for (var b in ib[a.ng339])return !0;
            return !1
        },
        cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++)hb(a[b])
        }
    }, function (a, b) {
        E[b] = a
    });
    n({
        data: Xb, inheritedData: Cb, scope: function (a) {
            return A.data(a, "$scope") || Cb(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return A.data(a, "$isolateScope") || A.data(a, "$isolateScopeNoTemplate")
        }, controller: Qc, injector: function (a) {
            return Cb(a, "$injector")
        }, removeAttr: function (a, b) {
            a.removeAttribute(b)
        }, hasClass: zb, css: function (a, b, d) {
            b = gb(b);
            if (z(d))a.style[b] = d; else return a.style[b]
        }, attr: function (a,
                           b, d) {
            var c = a.nodeType;
            if (c !== Qa && 2 !== c && 8 !== c)if (c = H(b), Db[c])if (z(d))d ? (a[b] = !0, a.setAttribute(b, c)) : (a[b] = !1, a.removeAttribute(c)); else return a[b] || (a.attributes.getNamedItem(b) || w).specified ? c : u; else if (z(d))a.setAttribute(b, d); else if (a.getAttribute)return a = a.getAttribute(b, 2), null === a ? u : a
        }, prop: function (a, b, d) {
            if (z(d))a[b] = d; else return a[b]
        }, text: function () {
            function a(a, d) {
                if (x(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Qa ? a.textContent : ""
                }
                a.textContent = d
            }

            a.$dv = "";
            return a
        }(), val: function (a, b) {
            if (x(b)) {
                if (a.multiple &&
                    "select" === ta(a)) {
                    var d = [];
                    n(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return 0 === d.length ? null : d
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (x(b))return a.innerHTML;
            wb(a, !0);
            a.innerHTML = b
        }, empty: Rc
    }, function (a, b) {
        E.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== Rc && x(2 == a.length && a !== zb && a !== Qc ? b : c)) {
                if (J(b)) {
                    for (e = 0; e < g; e++)if (a === Xb)a(this[e], b); else for (f in b)a(this[e], f, b[f]);
                    return this
                }
                e = a.$dv;
                g = x(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var h = a(this[f], b, c);
                    e = e ?
                    e + h : h
                }
                return e
            }
            for (e = 0; e < g; e++)a(this[e], b, c);
            return this
        }
    });
    n({
        removeData: hb, on: function (a, b, d, c) {
            if (z(c))throw Vb("onargs");
            if (Mc(a)) {
                c = xb(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = Lf(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, h = function (b, c, g) {
                    var h = e[b];
                    h || (h = e[b] = [], h.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f, !1));
                    h.push(d)
                }; g--;)b = c[g], yb[b] ? (h(yb[b], Nf), h(b, u, !0)) : h(b)
            }
        }, off: Pc, one: function (a, b, d) {
            a = A(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b,
                    e)
            });
            a.on(b, d)
        }, replaceWith: function (a, b) {
            var d, c = a.parentNode;
            wb(a);
            n(new E(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        }, children: function (a) {
            var b = [];
            n(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new E(b);
                for (var d = 0, c = b.length; d < c; d++)a.appendChild(b[d])
            }
        }, prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                n(new E(b),
                    function (b) {
                        a.insertBefore(b, d)
                    })
            }
        }, wrap: function (a, b) {
            b = A(b).eq(0).clone()[0];
            var d = a.parentNode;
            d && d.replaceChild(b, a);
            b.appendChild(a)
        }, remove: Yb, detach: function (a) {
            Yb(a, !0)
        }, after: function (a, b) {
            var d = a, c = a.parentNode;
            b = new E(b);
            for (var e = 0, f = b.length; e < f; e++) {
                var g = b[e];
                c.insertBefore(g, d.nextSibling);
                d = g
            }
        }, addClass: Bb, removeClass: Ab, toggleClass: function (a, b, d) {
            b && n(b.split(" "), function (b) {
                var e = d;
                x(e) && (e = !zb(a, b));
                (e ? Bb : Ab)(a, b)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ?
                a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: Wb, triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = xb(a);
            if (g = (g = g && g.events) && g[f])c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: w, type: f, target: a
            }, b.type && (c = L(c, b)), b = V(g), e = d ? [c].concat(d) : [c], n(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            })
        }
    }, function (a, b) {
        E.prototype[b] = function (b, c, e) {
            for (var f, g = 0, h = this.length; g < h; g++)x(f) ? (f = a(this[g], b, c, e), z(f) && (f = A(f))) : Oc(f, a(this[g], b, c, e));
            return z(f) ? f : this
        };
        E.prototype.bind = E.prototype.on;
        E.prototype.unbind = E.prototype.off
    });
    Va.prototype = {
        put: function (a, b) {
            this[Fa(a, this.nextUid)] = b
        }, get: function (a) {
            return this[Fa(a, this.nextUid)]
        }, remove: function (a) {
            var b =
                this[a = Fa(a, this.nextUid)];
            delete this[a];
            return b
        }
    };
    var Cf = [function () {
        this.$get = [function () {
            return Va
        }]
    }], Qf = /^([^\(]+?)=>/, Rf = /^[^\(]*\(\s*([^\)]*)\)/m, wg = /,/, xg = /^\s*(_?)(\S+?)\1\s*$/, Pf = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ga = P("$injector");
    fb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b)throw G(d) && d || (d = a.name || Sf(a)), Ga("strictdi", d);
                    b = Uc(a);
                    n(b[1].split(wg), function (a) {
                        a.replace(xg, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else K(a) ?
            (b = a.length - 1, Ta(a[b], "fn"), c = a.slice(0, b)) : Ta(a, "fn", !0);
        return c
    };
    var Pd = P("$animate"), We = function () {
        var a = new Va, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function e(a, b, c) {
                var d = !1;
                b && (b = G(b) ? b.split(" ") : K(b) ? b : [], n(b, function (b) {
                    b && (d = !0, a[b] = c)
                }));
                return d
            }

            function f() {
                n(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = Tf(b.attr("class")), e = "", f = "";
                        n(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                        });
                        n(b, function (a) {
                            e && Bb(a, e);
                            f && Ab(a, f)
                        });
                        a.remove(b)
                    }
                });
                b.length = 0
            }

            return {
                enabled: w, on: w, off: w, pin: w, push: function (g, h, k, l) {
                    l && l();
                    k = k || {};
                    k.from && g.css(k.from);
                    k.to && g.css(k.to);
                    if (k.addClass || k.removeClass)if (h = k.addClass, l = k.removeClass, k = a.get(g) || {}, h = e(k, h, !0), l = e(k, l, !1), h || l)a.put(g, k), b.push(g), 1 === b.length && c.$$postDigest(f);
                    g = new d;
                    g.complete();
                    return g
                }
            }
        }]
    }, Ue = ["$provide", function (a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (d, c) {
            if (d && "." !== d.charAt(0))throw Pd("notcsel", d);
            var e = d + "-animation";
            b.$$registeredAnimations[d.substr(1)] =
                e;
            a.factory(e, c)
        };
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Pd("nongcls", "ng-animate");
            return this.$$classNameFilter
        };
        this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var h;
                    a:{
                        for (h = 0; h < d.length; h++) {
                            var k = d[h];
                            if (1 === k.nodeType) {
                                h = k;
                                break a
                            }
                        }
                        h = void 0
                    }
                    !h || h.parentNode || h.previousElementSibling || (d = null)
                }
                d ? d.after(a) : c.prepend(a)
            }

            return {
                on: a.on,
                off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (e, f, g, h) {
                    f = f && A(f);
                    g = g && A(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "enter", Ia(h))
                }, move: function (e, f, g, h) {
                    f = f && A(f);
                    g = g && A(g);
                    f = f || g.parent();
                    b(e, f, g);
                    return a.push(e, "move", Ia(h))
                }, leave: function (b, c) {
                    return a.push(b, "leave", Ia(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, g) {
                    g = Ia(g);
                    g.addClass = jb(g.addclass, c);
                    return a.push(b, "addClass", g)
                }, removeClass: function (b, c, g) {
                    g = Ia(g);
                    g.removeClass = jb(g.removeClass,
                        c);
                    return a.push(b, "removeClass", g)
                }, setClass: function (b, c, g, h) {
                    h = Ia(h);
                    h.addClass = jb(h.addClass, c);
                    h.removeClass = jb(h.removeClass, g);
                    return a.push(b, "setClass", h)
                }, animate: function (b, c, g, h, k) {
                    k = Ia(k);
                    k.from = k.from ? L(k.from, c) : c;
                    k.to = k.to ? L(k.to, g) : g;
                    k.tempClasses = jb(k.tempClasses, h || "ng-inline-animate");
                    return a.push(b, "animate", k)
                }
            }
        }]
    }], Ye = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b);
                1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++)d[a]();
                    d = []
                })
            }

            var d = [];
            return function () {
                var a =
                    !1;
                b(function () {
                    a = !0
                });
                return function (d) {
                    a ? d() : b(d)
                }
            }
        }]
    }, Xe = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", function (a, b, d) {
            function c(a) {
                this.setHost(a);
                this._doneCallbacks = [];
                this._runInAnimationFrame = d();
                this._state = 0
            }

            c.chain = function (a, b) {
                function c() {
                    if (d === a.length)b(!0); else a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c())
                    })
                }

                var d = 0;
                c()
            };
            c.all = function (a, b) {
                function c(g) {
                    k = k && g;
                    ++d === a.length && b(k)
                }

                var d = 0, k = !0;
                n(a, function (a) {
                    a.done(c)
                })
            };
            c.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                },
                done: function (a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a)
                }, progress: w, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, "catch": function (a) {
                    return this.getPromise()["catch"](a)
                }, "finally": function (a) {
                    return this.getPromise()["finally"](a)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end &&
                    this.host.end();
                    this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel();
                    this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._runInAnimationFrame(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    2 !== this._state && (n(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            };
            return c
        }]
    }, Ve = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (a, b, d) {
            return function (b, e) {
                function f() {
                    a(function () {
                        g.addClass && (b.addClass(g.addClass),
                            g.addClass = null);
                        g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                        g.to && (b.css(g.to), g.to = null);
                        h || k.complete();
                        h = !0
                    });
                    return k
                }

                var g = Pa(e);
                g.cleanupStyles && (g.from = g.to = null);
                g.from && (b.css(g.from), g.from = null);
                var h, k = new d;
                return {start: f, end: f}
            }
        }]
    }, ia = P("$compile");
    Ec.$inject = ["$provide", "$$sanitizeUriProvider"];
    var Wc = /^((?:x|data)[\:\-_])/i, Xf = P("$controller"), ad = /^(\S+)(\s+as\s+(\w+))?$/, df = function () {
        this.$get = ["$document", function (a) {
            return function (b) {
                b ? !b.nodeType && b instanceof
                A && (b = b[0]) : b = a[0].body;
                return b.offsetWidth + 1
            }
        }]
    }, bd = "application/json", bc = {"Content-Type": bd + ";charset=utf-8"}, Zf = /^\[|^\{(?!\{)/, $f = {
        "[": /]$/,
        "{": /}$/
    }, Yf = /^\)\]\}',?\n/, yg = P("$http"), fd = function (a) {
        return function () {
            throw yg("legacy", a);
        }
    }, La = $.$interpolateMinErr = P("$interpolate");
    La.throwNoconcat = function (a) {
        throw La("noconcat", a);
    };
    La.interr = function (a, b) {
        return La("interr", a, b.toString())
    };
    var zg = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, bg = {http: 80, https: 443, ftp: 21}, Eb = P("$location"), Ag = {
        $$html5: !1,
        $$replace: !1, absUrl: Fb("$$absUrl"), url: function (a) {
            if (x(a))return this.$$url;
            var b = zg.exec(a);
            (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
            (b[2] || b[1] || "" === a) && this.search(b[3] || "");
            this.hash(b[5] || "");
            return this
        }, protocol: Fb("$$protocol"), host: Fb("$$host"), port: Fb("$$port"), path: kd("$$path", function (a) {
            a = null !== a ? a.toString() : "";
            return "/" == a.charAt(0) ? a : "/" + a
        }), search: function (a, b) {
            switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if (G(a) || U(a))a = a.toString(), this.$$search = yc(a);
                    else if (J(a))a = Pa(a, {}), n(a, function (b, c) {
                        null == b && delete a[c]
                    }), this.$$search = a; else throw Eb("isrcharg");
                    break;
                default:
                    x(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
            }
            this.$$compose();
            return this
        }, hash: kd("$$hash", function (a) {
            return null !== a ? a.toString() : ""
        }), replace: function () {
            this.$$replace = !0;
            return this
        }
    };
    n([jd, ec, dc], function (a) {
        a.prototype = Object.create(Ag);
        a.prototype.state = function (b) {
            if (!arguments.length)return this.$$state;
            if (a !== dc || !this.$$html5)throw Eb("nostate");
            this.$$state =
                x(b) ? null : b;
            return this
        }
    });
    var ca = P("$parse"), cg = Function.prototype.call, dg = Function.prototype.apply, eg = Function.prototype.bind, Nb = X();
    n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Nb[a] = !0
    });
    var Bg = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, gc = function (a) {
        this.options = a
    };
    gc.prototype = {
        constructor: gc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index), '"' === a || "'" === a)this.readString(a); else if (this.isNumber(a) ||
                "." === a && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(a))this.readIdent(); else if (this.is(a, "(){}[].,;:?"))this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a))this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Nb[b], e = Nb[d];
                Nb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !==
                b.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdent: function (a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, d) {
            d = d || this.index;
            b = z(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b,
                d) + "]" : " " + d;
            throw ca("lexerr", a, b, this.text);
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = H(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d))a += d; else {
                    var c = this.peek();
                    if ("e" == d && this.isExpOperator(c))a += d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({
                index: b,
                text: a, constant: !0, value: Number(a)
            })
        }, readIdent: function () {
            for (var a = this.index; this.index < this.text.length;) {
                var b = this.text.charAt(this.index);
                if (!this.isIdent(b) && !this.isNumber(b))break;
                this.index++
            }
            this.tokens.push({index: a, text: this.text.slice(a, this.index), identifier: !0})
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index), c = c + f;
                if (e)"u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) ||
                this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += Bg[f] || f, e = !1; else if ("\\" === f)e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({index: b, text: c, constant: !0, value: d});
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var q = function (a, b) {
        this.lexer = a;
        this.options = b
    };
    q.Program = "Program";
    q.ExpressionStatement = "ExpressionStatement";
    q.AssignmentExpression = "AssignmentExpression";
    q.ConditionalExpression = "ConditionalExpression";
    q.LogicalExpression = "LogicalExpression";
    q.BinaryExpression = "BinaryExpression";
    q.UnaryExpression = "UnaryExpression";
    q.CallExpression = "CallExpression";
    q.MemberExpression = "MemberExpression";
    q.Identifier = "Identifier";
    q.Literal = "Literal";
    q.ArrayExpression = "ArrayExpression";
    q.Property = "Property";
    q.ObjectExpression = "ObjectExpression";
    q.ThisExpression = "ThisExpression";
    q.LocalsExpression = "LocalsExpression";
    q.NGValueParameter = "NGValueParameter";
    q.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        }, program: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";"))return {
                type: q.Program,
                body: a
            }
        }, expressionStatement: function () {
            return {type: q.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var a = this.ternary();
            this.expect("=") && (a = {type: q.AssignmentExpression, left: a, right: this.assignment(), operator: "="});
            return a
        }, ternary: function () {
            var a = this.logicalOR(), b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: q.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a = {
                type: q.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        }, logicalAND: function () {
            for (var a =
                this.equality(); this.expect("&&");)a = {
                type: q.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var a = this.relational(), b; b = this.expect("==", "!=", "===", "!==");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        }, relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a
        }, additive: function () {
            for (var a = this.multiplicative(),
                     b; b = this.expect("+", "-");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        }, multiplicative: function () {
            for (var a = this.unary(), b; b = this.expect("*", "/", "%");)a = {
                type: q.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: q.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) :
                this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.constants.hasOwnProperty(this.peek().text) ? a = Pa(this.constants[this.consume().text]) : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
                type: q.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: q.MemberExpression, object: a, property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === b.text ? a = {
                type: q.MemberExpression,
                object: a,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            a = [a];
            for (var b = {
                type: q.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");)a.push(this.expression());
            return b
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.expression()); while (this.expect(","))
            }
            return a
        }, identifier: function () {
            var a = this.consume();
            a.identifier ||
            this.throwError("is not a valid identifier", a);
            return {type: q.Identifier, name: a.text}
        }, constant: function () {
            return {type: q.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {type: q.ArrayExpression, elements: a}
        }, object: function () {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    b = {type: q.Property, kind: "init"};
                    this.peek().constant ?
                        b.key = this.constant() : this.peek().identifier ? b.key = this.identifier() : this.throwError("invalid key", this.peek());
                    this.consume(":");
                    b.value = this.expression();
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {type: q.ObjectExpression, properties: a}
        }, throwError: function (a, b) {
            throw ca("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        }, consume: function (a) {
            if (0 === this.tokens.length)throw ca("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a +
                "]", this.peek());
            return b
        }, peekToken: function () {
            if (0 === this.tokens.length)throw ca("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        }, peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e))return a
            }
            return !1
        }, expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        }, constants: {
            "true": {type: q.Literal, value: !0},
            "false": {type: q.Literal, value: !1},
            "null": {
                type: q.Literal,
                value: null
            },
            undefined: {type: q.Literal, value: u},
            "this": {type: q.ThisExpression},
            $locals: {type: q.LocalsExpression}
        }
    };
    sd.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: b,
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            };
            T(c, d.$filter);
            var e = "", f;
            this.stage = "assign";
            if (f = qd(c))this.state.computing = "assign", e = this.nextId(), this.recurse(f, e), this.return_(e), e = "fn.assign=" + this.generateFunction("assign", "s,v,l");
            f =
                od(c.body);
            d.stage = "inputs";
            n(f, function (a, b) {
                var c = "fn" + b;
                d.state[c] = {vars: [], body: [], own: {}};
                d.state.computing = c;
                var e = d.nextId();
                d.recurse(a, e);
                d.return_(e);
                d.state.inputs.push(c);
                a.watchId = b
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(c);
            e = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + e + this.watchFns() + "return fn;";
            e = (new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext",
                "ifDefined", "plus", "text", e))(this.$filter, Xa, Aa, md, ld, Gb, fg, nd, a);
            this.state = this.stage = u;
            e.literal = rd(c);
            e.constant = c.constant;
            return e
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, d = this;
            n(b, function (b) {
                a.push("var " + b + "=" + d.generateFunction(b, "s"))
            });
            b.length && a.push("fn.inputs=[" + b.join(",") + "];");
            return a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            n(this.state.filters,
                function (d, c) {
                    a.push(d + "=$filter(" + b.escape(c) + ")")
                });
            return a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, d, c, e, f) {
            var g, h, k = this, l, m;
            c = c || w;
            if (!f && z(a.watchId))b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0)); else switch (a.type) {
                case q.Program:
                    n(a.body, function (b, c) {
                        k.recurse(b.expression,
                            u, u, function (a) {
                                h = a
                            });
                        c !== a.body.length - 1 ? k.current().body.push(h, ";") : k.return_(h)
                    });
                    break;
                case q.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(m);
                    break;
                case q.UnaryExpression:
                    this.recurse(a.argument, u, u, function (a) {
                        h = a
                    });
                    m = a.operator + "(" + this.ifDefined(h, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.BinaryExpression:
                    this.recurse(a.left, u, u, function (a) {
                        g = a
                    });
                    this.recurse(a.right, u, u, function (a) {
                        h = a
                    });
                    m = "+" === a.operator ? this.plus(g, h) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(h,
                        0) : "(" + g + ")" + a.operator + "(" + h + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.LogicalExpression:
                    b = b || this.nextId();
                    k.recurse(a.left, b);
                    k.if_("&&" === a.operator ? b : k.not(b), k.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case q.ConditionalExpression:
                    b = b || this.nextId();
                    k.recurse(a.test, b);
                    k.if_(b, k.lazyRecurse(a.alternate, b), k.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case q.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === k.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1,
                        d.name = a.name);
                    Xa(a.name);
                    k.if_("inputs" === k.stage || k.not(k.getHasOwnProperty("l", a.name)), function () {
                        k.if_("inputs" === k.stage || "s", function () {
                            e && 1 !== e && k.if_(k.not(k.nonComputedMember("s", a.name)), k.lazyAssign(k.nonComputedMember("s", a.name), "{}"));
                            k.assign(b, k.nonComputedMember("s", a.name))
                        })
                    }, b && k.lazyAssign(b, k.nonComputedMember("l", a.name)));
                    (k.state.expensiveChecks || Hb(a.name)) && k.addEnsureSafeObject(b);
                    c(b);
                    break;
                case q.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    k.recurse(a.object, g, u, function () {
                        k.if_(k.notNull(g), function () {
                            e && 1 !== e && k.addEnsureSafeAssignContext(g);
                            if (a.computed)h = k.nextId(), k.recurse(a.property, h), k.getStringValue(h), k.addEnsureSafeMemberName(h), e && 1 !== e && k.if_(k.not(k.computedMember(g, h)), k.lazyAssign(k.computedMember(g, h), "{}")), m = k.ensureSafeObject(k.computedMember(g, h)), k.assign(b, m), d && (d.computed = !0, d.name = h); else {
                                Xa(a.property.name);
                                e && 1 !== e && k.if_(k.not(k.nonComputedMember(g, a.property.name)), k.lazyAssign(k.nonComputedMember(g,
                                    a.property.name), "{}"));
                                m = k.nonComputedMember(g, a.property.name);
                                if (k.state.expensiveChecks || Hb(a.property.name))m = k.ensureSafeObject(m);
                                k.assign(b, m);
                                d && (d.computed = !1, d.name = a.property.name)
                            }
                        }, function () {
                            k.assign(b, "undefined")
                        });
                        c(b)
                    }, !!e);
                    break;
                case q.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (h = k.filter(a.callee.name), l = [], n(a.arguments, function (a) {
                        var b = k.nextId();
                        k.recurse(a, b);
                        l.push(b)
                    }), m = h + "(" + l.join(",") + ")", k.assign(b, m), c(b)) : (h = k.nextId(), g = {}, l = [], k.recurse(a.callee, h, g, function () {
                        k.if_(k.notNull(h),
                            function () {
                                k.addEnsureSafeFunction(h);
                                n(a.arguments, function (a) {
                                    k.recurse(a, k.nextId(), u, function (a) {
                                        l.push(k.ensureSafeObject(a))
                                    })
                                });
                                g.name ? (k.state.expensiveChecks || k.addEnsureSafeObject(g.context), m = k.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")") : m = h + "(" + l.join(",") + ")";
                                m = k.ensureSafeObject(m);
                                k.assign(b, m)
                            }, function () {
                                k.assign(b, "undefined")
                            });
                        c(b)
                    }));
                    break;
                case q.AssignmentExpression:
                    h = this.nextId();
                    g = {};
                    if (!pd(a.left))throw ca("lval");
                    this.recurse(a.left, u, g, function () {
                        k.if_(k.notNull(g.context),
                            function () {
                                k.recurse(a.right, h);
                                k.addEnsureSafeObject(k.member(g.context, g.name, g.computed));
                                k.addEnsureSafeAssignContext(g.context);
                                m = k.member(g.context, g.name, g.computed) + a.operator + h;
                                k.assign(b, m);
                                c(b || m)
                            })
                    }, 1);
                    break;
                case q.ArrayExpression:
                    l = [];
                    n(a.elements, function (a) {
                        k.recurse(a, k.nextId(), u, function (a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.ObjectExpression:
                    l = [];
                    n(a.properties, function (a) {
                        k.recurse(a.value, k.nextId(), u, function (b) {
                            l.push(k.escape(a.key.type ===
                                q.Identifier ? a.key.name : "" + a.key.value) + ":" + b)
                        })
                    });
                    m = "{" + l.join(",") + "}";
                    this.assign(b, m);
                    c(m);
                    break;
                case q.ThisExpression:
                    this.assign(b, "s");
                    c("s");
                    break;
                case q.LocalsExpression:
                    this.assign(b, "l");
                    c("l");
                    break;
                case q.NGValueParameter:
                    this.assign(b, "v"), c("v")
            }
        }, getHasOwnProperty: function (a, b) {
            var d = a + "." + b, c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d]
        }, assign: function (a, b) {
            if (a)return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            this.state.filters.hasOwnProperty(a) ||
            (this.state.filters[a] = this.nextId(!0));
            return this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, d) {
            if (!0 === a)b(); else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a, b) {
            return a +
                "." + b
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, addEnsureSafeObject: function (a) {
            this.current().body.push(this.ensureSafeObject(a), ";")
        }, addEnsureSafeMemberName: function (a) {
            this.current().body.push(this.ensureSafeMemberName(a), ";")
        }, addEnsureSafeFunction: function (a) {
            this.current().body.push(this.ensureSafeFunction(a), ";")
        }, addEnsureSafeAssignContext: function (a) {
            this.current().body.push(this.ensureSafeAssignContext(a),
                ";")
        }, ensureSafeObject: function (a) {
            return "ensureSafeObject(" + a + ",text)"
        }, ensureSafeMemberName: function (a) {
            return "ensureSafeMemberName(" + a + ",text)"
        }, ensureSafeFunction: function (a) {
            return "ensureSafeFunction(" + a + ",text)"
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ",text)")
        }, ensureSafeAssignContext: function (a) {
            return "ensureSafeAssignContext(" + a + ",text)"
        }, lazyRecurse: function (a, b, d, c, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        }, lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a,
                    b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (G(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (U(a))return a.toString();
            if (!0 === a)return "true";
            if (!1 === a)return "false";
            if (null === a)return "null";
            if ("undefined" === typeof a)return "undefined";
            throw ca("esc");
        }, nextId: function (a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        }, current: function () {
            return this.state[this.state.computing]
        }
    };
    td.prototype = {
        compile: function (a, b) {
            var d = this, c = this.astBuilder.ast(a);
            this.expression = a;
            this.expensiveChecks = b;
            T(c, d.$filter);
            var e, f;
            if (e = qd(c))f = this.recurse(e);
            e = od(c.body);
            var g;
            e && (g = [], n(e, function (a, b) {
                var c = d.recurse(a);
                a.input = c;
                g.push(c);
                a.watchId = b
            }));
            var h = [];
            n(c.body, function (a) {
                h.push(d.recurse(a.expression))
            });
            e = 0 === c.body.length ? function () {
            } : 1 === c.body.length ? h[0] : function (a, b) {
                var c;
                n(h, function (d) {
                    c = d(a, b)
                });
                return c
            };
            f && (e.assign = function (a, b, c) {
                return f(a, c, b)
            });
            g && (e.inputs =
                g);
            e.literal = rd(c);
            e.constant = c.constant;
            return e
        }, recurse: function (a, b, d) {
            var c, e, f = this, g;
            if (a.input)return this.inputs(a.input, a.watchId);
            switch (a.type) {
                case q.Literal:
                    return this.value(a.value, b);
                case q.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case q.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case q.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c,
                        e, b);
                case q.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
                case q.Identifier:
                    return Xa(a.name, f.expression), f.identifier(a.name, f.expensiveChecks || Hb(a.name), b, d, f.expression);
                case q.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (Xa(a.property.name, f.expression), e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d, f.expression) : this.nonComputedMember(c, e,
                        f.expensiveChecks, b, d, f.expression);
                case q.CallExpression:
                    return g = [], n(a.arguments, function (a) {
                        g.push(f.recurse(a))
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var n = [], r = 0; r < g.length; ++r)n.push(g[r](a, c, d, f));
                        a = e.apply(u, n, f);
                        return b ? {context: u, name: u, value: a} : a
                    } : function (a, c, d, m) {
                        var n = e(a, c, d, m), r;
                        if (null != n.value) {
                            Aa(n.context, f.expression);
                            md(n.value, f.expression);
                            r = [];
                            for (var q = 0; q < g.length; ++q)r.push(Aa(g[q](a, c, d, m),
                                f.expression));
                            r = Aa(n.value.apply(n.context, r), f.expression)
                        }
                        return b ? {value: r} : r
                    };
                case q.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, g, m) {
                        var n = c(a, d, g, m);
                        a = e(a, d, g, m);
                        Aa(n.value, f.expression);
                        Gb(n.context);
                        n.context[n.name] = a;
                        return b ? {value: a} : a
                    };
                case q.ArrayExpression:
                    return g = [], n(a.elements, function (a) {
                        g.push(f.recurse(a))
                    }), function (a, c, d, e) {
                        for (var f = [], n = 0; n < g.length; ++n)f.push(g[n](a, c, d, e));
                        return b ? {value: f} : f
                    };
                case q.ObjectExpression:
                    return g =
                        [], n(a.properties, function (a) {
                        g.push({
                            key: a.key.type === q.Identifier ? a.key.name : "" + a.key.value,
                            value: f.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {}, n = 0; n < g.length; ++n)f[g[n].key] = g[n].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case q.ThisExpression:
                    return function (a) {
                        return b ? {value: a} : a
                    };
                case q.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case q.NGValueParameter:
                    return function (a, c, d, e) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = z(d) ? +d :
                    0;
                return b ? {value: d} : d
            }
        }, "unary-": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = z(d) ? -d : 0;
                return b ? {value: d} : d
            }
        }, "unary!": function (a, b) {
            return function (d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {value: d} : d
            }
        }, "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = nd(h, c);
                return d ? {value: h} : h
            }
        }, "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var h = a(c, e, f, g);
                c = b(c, e, f, g);
                h = (z(h) ? h : 0) - (z(c) ? c : 0);
                return d ? {value: h} : h
            }
        }, "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                c =
                    a(c, e, f, g) * b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary===": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) !== b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c,
                        e, f, g) == b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) <= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) >=
                    b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "ternary?:": function (a, b, d, c) {
            return function (e, f, g, h) {
                e = a(e, f, g, h) ? b(e, f, g, h) : d(e, f, g, h);
                return c ? {value: e} : e
            }
        }, value: function (a, b) {
            return function () {
                return b ? {context: u, name: u, value: a} : a
            }
        }, identifier: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                f = g && a in g ? g : f;
                c && 1 !==
                c && f && !f[a] && (f[a] = {});
                g = f ? f[a] : u;
                b && Aa(g, e);
                return d ? {context: f, name: a, value: g} : g
            }
        }, computedMember: function (a, b, d, c, e) {
            return function (f, g, h, k) {
                var l = a(f, g, h, k), m, n;
                null != l && (m = b(f, g, h, k), m = ld(m), Xa(m, e), c && 1 !== c && (Gb(l), l && !l[m] && (l[m] = {})), n = l[m], Aa(n, e));
                return d ? {context: l, name: m, value: n} : n
            }
        }, nonComputedMember: function (a, b, d, c, e, f) {
            return function (g, h, k, l) {
                g = a(g, h, k, l);
                e && 1 !== e && (Gb(g), g && !g[b] && (g[b] = {}));
                h = null != g ? g[b] : u;
                (d || Hb(b)) && Aa(h, f);
                return c ? {context: g, name: b, value: h} : h
            }
        }, inputs: function (a,
                             b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    var hc = function (a, b, d) {
        this.lexer = a;
        this.$filter = b;
        this.options = d;
        this.ast = new q(this.lexer);
        this.astCompiler = d.csp ? new td(this.ast, b) : new sd(this.ast, b)
    };
    hc.prototype = {
        constructor: hc, parse: function (a) {
            return this.astCompiler.compile(a, this.options.expensiveChecks)
        }
    };
    X();
    X();
    var gg = Object.prototype.valueOf, Ba = P("$sce"), ja = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, ia = P("$compile"), aa = Z.createElement("a"), xd = za(S.location.href);
    yd.$inject = ["$document"];
    Lc.$inject = ["$provide"];
    var Fd = 22, Ed = ".", jc = "0";
    zd.$inject = ["$locale"];
    Bd.$inject = ["$locale"];
    var sg = {
        yyyy: da("FullYear", 4),
        yy: da("FullYear", 2, 0, !0),
        y: da("FullYear", 1),
        MMMM: Jb("Month"),
        MMM: Jb("Month", !0),
        MM: da("Month", 2, 1),
        M: da("Month", 1, 1),
        dd: da("Date", 2),
        d: da("Date", 1),
        HH: da("Hours", 2),
        H: da("Hours", 1),
        hh: da("Hours", 2, -12),
        h: da("Hours", 1, -12),
        mm: da("Minutes", 2),
        m: da("Minutes", 1),
        ss: da("Seconds", 2),
        s: da("Seconds", 1),
        sss: da("Milliseconds", 3),
        EEEE: Jb("Day"),
        EEE: Jb("Day", !0),
        a: function (a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
        },
        Z: function (a, b, d) {
            a = -1 * d;
            return a = (0 <= a ? "+" : "") + (Ib(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Ib(Math.abs(a % 60), 2))
        },
        ww: Hd(2),
        w: Hd(1),
        G: kc,
        GG: kc,
        GGG: kc,
        GGGG: function (a, b) {
            return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
        }
    }, rg = /((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/, qg = /^\-?\d+$/;
    Ad.$inject = ["$locale"];
    var lg = ka(H), mg = ka(ub);
    Cd.$inject = ["$parse"];
    var ke = ka({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref)return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === ra.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(e) || a.preventDefault()
                    })
                }
            }
        }
    }), vb = {};
    n(Db, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c], function (a) {
                e.$set(b, !!a)
            })
        }

        if ("multiple" != a) {
            var c = va("ng-" + b), e = d;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            });
            vb[c] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    });
    n($c, function (a, b) {
        vb[b] = function () {
            return {
                priority: 100,
                link: function (a, c, e) {
                    if ("ngPattern" === b && "/" == e.ngPattern.charAt(0) && (c = e.ngPattern.match(ug))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    n(["src", "srcset", "href"], function (a) {
        var b = va("ng-" + a);
        vb[b] = function () {
            return {
                priority: 99, link: function (d, c, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === ra.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
                    e.$observe(b, function (b) {
                        b ? (e.$set(g, b), Ka && f && c.prop(f, e[g])) : "href" ===
                        a && e.$set(g, null)
                    })
                }
            }
        }
    });
    var Kb = {
        $addControl: w, $$renameControl: function (a, b) {
            a.$name = b
        }, $removeControl: w, $setValidity: w, $setDirty: w, $setPristine: w, $setSubmitted: w
    };
    Id.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Qd = function (a) {
            return ["$timeout", "$parse", function (b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || w
                }

                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Id,
                    compile: function (d, f) {
                        d.addClass(Ya).addClass(ob);
                        var g = f.name ? "name" :
                            a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (a, d, e, f) {
                                var n = f[0];
                                if (!("action"in e)) {
                                    var r = function (b) {
                                        a.$apply(function () {
                                            n.$commitViewValue();
                                            n.$setSubmitted()
                                        });
                                        b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", r, !1);
                                    d.on("$destroy", function () {
                                        b(function () {
                                            d[0].removeEventListener("submit", r, !1)
                                        }, 0, !1)
                                    })
                                }
                                (f[1] || n.$$parentForm).$addControl(n);
                                var q = g ? c(n.$name) : w;
                                g && (q(a, n), e.$observe(g, function (b) {
                                    n.$name !== b && (q(a, u), n.$$parentForm.$$renameControl(n, b), q = c(n.$name), q(a, n))
                                }));
                                d.on("$destroy",
                                    function () {
                                        n.$$parentForm.$removeControl(n);
                                        q(a, u);
                                        L(n, Kb)
                                    })
                            }
                        }
                    }
                }
            }]
        }, le = Qd(), ye = Qd(!0), tg = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/, Cg = /^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/[\]$'()*,;~]*)?$/, Dg = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Eg = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, Rd = /^(\d{4})-(\d{2})-(\d{2})$/, Sd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        nc = /^(\d{4})-W(\d\d)$/, Td = /^(\d{4})-(\d\d)$/, Ud = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Vd = {
            text: function (a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                lc(c)
            },
            date: mb("date", Rd, Mb(Rd, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": mb("datetimelocal", Sd, Mb(Sd, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: mb("time", Ud, Mb(Ud, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: mb("week", nc, function (a, b) {
                if (ba(a))return a;
                if (G(a)) {
                    nc.lastIndex = 0;
                    var d = nc.exec(a);
                    if (d) {
                        var c = +d[1], e = +d[2], f = d = 0, g =
                            0, h = 0, k = Gd(c), e = 7 * (e - 1);
                        b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), h = b.getMilliseconds());
                        return new Date(c, 0, k.getDate() + e, d, f, g, h)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: mb("month", Td, Mb(Td, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (a, b, d, c, e, f) {
                Kd(a, b, d, c);
                lb(a, b, d, c, e, f);
                c.$$parserName = "number";
                c.$parsers.push(function (a) {
                    return c.$isEmpty(a) ? null : Eg.test(a) ? parseFloat(a) : u
                });
                c.$formatters.push(function (a) {
                    if (!c.$isEmpty(a)) {
                        if (!U(a))throw nb("numfmt", a);
                        a = a.toString()
                    }
                    return a
                });
                if (z(d.min) ||
                    d.ngMin) {
                    var g;
                    c.$validators.min = function (a) {
                        return c.$isEmpty(a) || x(g) || a >= g
                    };
                    d.$observe("min", function (a) {
                        z(a) && !U(a) && (a = parseFloat(a, 10));
                        g = U(a) && !isNaN(a) ? a : u;
                        c.$validate()
                    })
                }
                if (z(d.max) || d.ngMax) {
                    var h;
                    c.$validators.max = function (a) {
                        return c.$isEmpty(a) || x(h) || a <= h
                    };
                    d.$observe("max", function (a) {
                        z(a) && !U(a) && (a = parseFloat(a, 10));
                        h = U(a) && !isNaN(a) ? a : u;
                        c.$validate()
                    })
                }
            },
            url: function (a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                lc(c);
                c.$$parserName = "url";
                c.$validators.url = function (a, b) {
                    var d = a || b;
                    return c.$isEmpty(d) ||
                        Cg.test(d)
                }
            },
            email: function (a, b, d, c, e, f) {
                lb(a, b, d, c, e, f);
                lc(c);
                c.$$parserName = "email";
                c.$validators.email = function (a, b) {
                    var d = a || b;
                    return c.$isEmpty(d) || Dg.test(d)
                }
            },
            radio: function (a, b, d, c) {
                x(d.name) && b.attr("name", ++pb);
                b.on("click", function (a) {
                    b[0].checked && c.$setViewValue(d.value, a && a.type)
                });
                c.$render = function () {
                    b[0].checked = d.value == c.$viewValue
                };
                d.$observe("value", c.$render)
            },
            checkbox: function (a, b, d, c, e, f, g, h) {
                var k = Ld(h, a, "ngTrueValue", d.ngTrueValue, !0), l = Ld(h, a, "ngFalseValue", d.ngFalseValue,
                    !1);
                b.on("click", function (a) {
                    c.$setViewValue(b[0].checked, a && a.type)
                });
                c.$render = function () {
                    b[0].checked = c.$viewValue
                };
                c.$isEmpty = function (a) {
                    return !1 === a
                };
                c.$formatters.push(function (a) {
                    return la(a, k)
                });
                c.$parsers.push(function (a) {
                    return a ? k : l
                })
            },
            hidden: w,
            button: w,
            submit: w,
            reset: w,
            file: w
        }, Fc = ["$browser", "$sniffer", "$filter", "$parse", function (a, b, d, c) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (e, f, g, h) {
                        h[0] && (Vd[H(g.type)] || Vd.text)(e, f, g, h[0], b, a, d, c)
                    }
                }
            }
        }], Fg = /^(true|false|\d+)$/,
        Qe = function () {
            return {
                restrict: "A", priority: 100, compile: function (a, b) {
                    return Fg.test(b.ngValue) ? function (a, b, e) {
                        e.$set("value", a.$eval(e.ngValue))
                    } : function (a, b, e) {
                        a.$watch(e.ngValue, function (a) {
                            e.$set("value", a)
                        })
                    }
                }
            }
        }, qe = ["$compile", function (a) {
            return {
                restrict: "AC", compile: function (b) {
                    a.$$addBindingClass(b);
                    return function (b, c, e) {
                        a.$$addBindingInfo(c, e.ngBind);
                        c = c[0];
                        b.$watch(e.ngBind, function (a) {
                            c.textContent = x(a) ? "" : a
                        })
                    }
                }
            }
        }], se = ["$interpolate", "$compile", function (a, b) {
            return {
                compile: function (d) {
                    b.$$addBindingClass(d);
                    return function (c, d, f) {
                        c = a(d.attr(f.$attr.ngBindTemplate));
                        b.$$addBindingInfo(d, c.expressions);
                        d = d[0];
                        f.$observe("ngBindTemplate", function (a) {
                            d.textContent = x(a) ? "" : a
                        })
                    }
                }
            }
        }], re = ["$sce", "$parse", "$compile", function (a, b, d) {
            return {
                restrict: "A", compile: function (c, e) {
                    var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (a) {
                        return (a || "").toString()
                    });
                    d.$$addBindingClass(c);
                    return function (b, c, e) {
                        d.$$addBindingInfo(c, e.ngBindHtml);
                        b.$watch(g, function () {
                            c.html(a.getTrustedHtml(f(b)) || "")
                        })
                    }
                }
            }
        }], Pe = ka({
            restrict: "A",
            require: "ngModel", link: function (a, b, d, c) {
                c.$viewChangeListeners.push(function () {
                    a.$eval(d.ngChange)
                })
            }
        }), te = mc("", !0), ve = mc("Odd", 0), ue = mc("Even", 1), we = Na({
            compile: function (a, b) {
                b.$set("ngCloak", u);
                a.removeClass("ng-cloak")
            }
        }), xe = [function () {
            return {restrict: "A", scope: !0, controller: "@", priority: 500}
        }], Kc = {}, Gg = {blur: !0, focus: !0};
    n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b =
            va("ng-" + a);
        Kc[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = d(f[b], null, !0);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function () {
                                g(b, {$event: d})
                            };
                            Gg[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Ae = ["$animate", function (a) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (b, d, c, e, f) {
                    var g, h, k;
                    b.$watch(c.ngIf, function (b) {
                        b ? h || f(function (b, e) {
                            h = e;
                            b[b.length++] = Z.createComment(" end ngIf: " +
                                c.ngIf + " ");
                            g = {clone: b};
                            a.enter(b, d.parent(), d)
                        }) : (k && (k.remove(), k = null), h && (h.$destroy(), h = null), g && (k = tb(g.clone), a.leave(k).then(function () {
                            k = null
                        }), g = null))
                    })
                }
            }
        }], Be = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: $.noop,
                compile: function (c, e) {
                    var f = e.ngInclude || e.src, g = e.onload || "", h = e.autoscroll;
                    return function (c, e, m, n, r) {
                        var q = 0, u, t, p, y = function () {
                            t && (t.remove(), t = null);
                            u && (u.$destroy(), u = null);
                            p &&
                            (d.leave(p).then(function () {
                                t = null
                            }), t = p, p = null)
                        };
                        c.$watch(f, function (f) {
                            var m = function () {
                                !z(h) || h && !c.$eval(h) || b()
                            }, t = ++q;
                            f ? (a(f, !0).then(function (a) {
                                if (t === q) {
                                    var b = c.$new();
                                    n.template = a;
                                    a = r(b, function (a) {
                                        y();
                                        d.enter(a, null, e).then(m)
                                    });
                                    u = b;
                                    p = a;
                                    u.$emit("$includeContentLoaded", f);
                                    c.$eval(g)
                                }
                            }, function () {
                                t === q && (y(), c.$emit("$includeContentError", f))
                            }), c.$emit("$includeContentRequested", f)) : (y(), n.template = null)
                        })
                    }
                }
            }
        }], Se = ["$compile", function (a) {
            return {
                restrict: "ECA", priority: -400, require: "ngInclude",
                link: function (b, d, c, e) {
                    /SVG/.test(d[0].toString()) ? (d.empty(), a(Nc(e.template, Z).childNodes)(b, function (a) {
                        d.append(a)
                    }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
                }
            }
        }], Ce = Na({
            priority: 450, compile: function () {
                return {
                    pre: function (a, b, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }), Oe = function () {
            return {
                restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
                    var e = b.attr(d.$attr.ngList) || ", ", f = "false" !== d.ngTrim, g = f ? Y(e) : e;
                    c.$parsers.push(function (a) {
                        if (!x(a)) {
                            var b = [];
                            a && n(a.split(g), function (a) {
                                a &&
                                b.push(f ? Y(a) : a)
                            });
                            return b
                        }
                    });
                    c.$formatters.push(function (a) {
                        return K(a) ? a.join(e) : u
                    });
                    c.$isEmpty = function (a) {
                        return !a || !a.length
                    }
                }
            }
        }, ob = "ng-valid", Md = "ng-invalid", Ya = "ng-pristine", Lb = "ng-dirty", Od = "ng-pending", nb = P("ngModel"), Hg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (a, b, d, c, e, f, g, h, k, l) {
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$$rawModelValue = u;
            this.$validators = {};
            this.$asyncValidators = {};
            this.$parsers =
                [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$untouched = !0;
            this.$touched = !1;
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$error = {};
            this.$$success = {};
            this.$pending = u;
            this.$name = l(d.name || "", !1)(a);
            this.$$parentForm = Kb;
            var m = e(d.ngModel), s = m.assign, r = m, q = s, A = null, t, p = this;
            this.$$setOptions = function (a) {
                if ((p.$options = a) && a.getterSetter) {
                    var b = e(d.ngModel + "()"), f = e(d.ngModel + "($$$p)");
                    r = function (a) {
                        var c = m(a);
                        D(c) && (c = b(a));
                        return c
                    };
                    q = function (a, b) {
                        D(m(a)) ? f(a, {$$$p: p.$modelValue}) :
                            s(a, p.$modelValue)
                    }
                } else if (!m.assign)throw nb("nonassign", d.ngModel, ua(c));
            };
            this.$render = w;
            this.$isEmpty = function (a) {
                return x(a) || "" === a || null === a || a !== a
            };
            this.$$updateEmptyClasses = function (a) {
                p.$isEmpty(a) ? (f.removeClass(c, "ng-not-empty"), f.addClass(c, "ng-empty")) : (f.removeClass(c, "ng-empty"), f.addClass(c, "ng-not-empty"))
            };
            var y = 0;
            Jd({
                ctrl: this, $element: c, set: function (a, b) {
                    a[b] = !0
                }, unset: function (a, b) {
                    delete a[b]
                }, $animate: f
            });
            this.$setPristine = function () {
                p.$dirty = !1;
                p.$pristine = !0;
                f.removeClass(c,
                    Lb);
                f.addClass(c, Ya)
            };
            this.$setDirty = function () {
                p.$dirty = !0;
                p.$pristine = !1;
                f.removeClass(c, Ya);
                f.addClass(c, Lb);
                p.$$parentForm.$setDirty()
            };
            this.$setUntouched = function () {
                p.$touched = !1;
                p.$untouched = !0;
                f.setClass(c, "ng-untouched", "ng-touched")
            };
            this.$setTouched = function () {
                p.$touched = !0;
                p.$untouched = !1;
                f.setClass(c, "ng-touched", "ng-untouched")
            };
            this.$rollbackViewValue = function () {
                g.cancel(A);
                p.$viewValue = p.$$lastCommittedViewValue;
                p.$render()
            };
            this.$validate = function () {
                if (!U(p.$modelValue) || !isNaN(p.$modelValue)) {
                    var a =
                        p.$$rawModelValue, b = p.$valid, c = p.$modelValue, d = p.$options && p.$options.allowInvalid;
                    p.$$runValidators(a, p.$$lastCommittedViewValue, function (e) {
                        d || b === e || (p.$modelValue = e ? a : u, p.$modelValue !== c && p.$$writeModelToScope())
                    })
                }
            };
            this.$$runValidators = function (a, b, c) {
                function d() {
                    var c = !0;
                    n(p.$validators, function (d, e) {
                        var g = d(a, b);
                        c = c && g;
                        f(e, g)
                    });
                    return c ? !0 : (n(p.$asyncValidators, function (a, b) {
                        f(b, null)
                    }), !1)
                }

                function e() {
                    var c = [], d = !0;
                    n(p.$asyncValidators, function (e, g) {
                        var h = e(a, b);
                        if (!h || !D(h.then))throw nb("$asyncValidators",
                            h);
                        f(g, u);
                        c.push(h.then(function () {
                            f(g, !0)
                        }, function (a) {
                            d = !1;
                            f(g, !1)
                        }))
                    });
                    c.length ? k.all(c).then(function () {
                        g(d)
                    }, w) : g(!0)
                }

                function f(a, b) {
                    h === y && p.$setValidity(a, b)
                }

                function g(a) {
                    h === y && c(a)
                }

                y++;
                var h = y;
                (function () {
                    var a = p.$$parserName || "parse";
                    if (x(t))f(a, null); else return t || (n(p.$validators, function (a, b) {
                        f(b, null)
                    }), n(p.$asyncValidators, function (a, b) {
                        f(b, null)
                    })), f(a, t), t;
                    return !0
                })() ? d() ? e() : g(!1) : g(!1)
            };
            this.$commitViewValue = function () {
                var a = p.$viewValue;
                g.cancel(A);
                if (p.$$lastCommittedViewValue !==
                    a || "" === a && p.$$hasNativeValidators)p.$$updateEmptyClasses(a), p.$$lastCommittedViewValue = a, p.$pristine && this.$setDirty(), this.$$parseAndValidate()
            };
            this.$$parseAndValidate = function () {
                var b = p.$$lastCommittedViewValue;
                if (t = x(b) ? u : !0)for (var c = 0; c < p.$parsers.length; c++)if (b = p.$parsers[c](b), x(b)) {
                    t = !1;
                    break
                }
                U(p.$modelValue) && isNaN(p.$modelValue) && (p.$modelValue = r(a));
                var d = p.$modelValue, e = p.$options && p.$options.allowInvalid;
                p.$$rawModelValue = b;
                e && (p.$modelValue = b, p.$modelValue !== d && p.$$writeModelToScope());
                p.$$runValidators(b, p.$$lastCommittedViewValue, function (a) {
                    e || (p.$modelValue = a ? b : u, p.$modelValue !== d && p.$$writeModelToScope())
                })
            };
            this.$$writeModelToScope = function () {
                q(a, p.$modelValue);
                n(p.$viewChangeListeners, function (a) {
                    try {
                        a()
                    } catch (c) {
                        b(c)
                    }
                })
            };
            this.$setViewValue = function (a, b) {
                p.$viewValue = a;
                p.$options && !p.$options.updateOnDefault || p.$$debounceViewValueCommit(b)
            };
            this.$$debounceViewValueCommit = function (b) {
                var c = 0, d = p.$options;
                d && z(d.debounce) && (d = d.debounce, U(d) ? c = d : U(d[b]) ? c = d[b] : U(d["default"]) &&
                (c = d["default"]));
                g.cancel(A);
                c ? A = g(function () {
                    p.$commitViewValue()
                }, c) : h.$$phase ? p.$commitViewValue() : a.$apply(function () {
                    p.$commitViewValue()
                })
            };
            a.$watch(function () {
                var b = r(a);
                if (b !== p.$modelValue && (p.$modelValue === p.$modelValue || b === b)) {
                    p.$modelValue = p.$$rawModelValue = b;
                    t = u;
                    for (var c = p.$formatters, d = c.length, e = b; d--;)e = c[d](e);
                    p.$viewValue !== e && (p.$$updateEmptyClasses(e), p.$viewValue = p.$$lastCommittedViewValue = e, p.$render(), p.$$runValidators(b, e, w))
                }
                return b
            })
        }], Ne = ["$rootScope", function (a) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"], controller: Hg, priority: 1, compile: function (b) {
                    b.addClass(Ya).addClass("ng-untouched").addClass(ob);
                    return {
                        pre: function (a, b, e, f) {
                            var g = f[0];
                            b = f[1] || g.$$parentForm;
                            g.$$setOptions(f[2] && f[2].$options);
                            b.$addControl(g);
                            e.$observe("name", function (a) {
                                g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                            });
                            a.$on("$destroy", function () {
                                g.$$parentForm.$removeControl(g)
                            })
                        }, post: function (b, c, e, f) {
                            var g = f[0];
                            if (g.$options && g.$options.updateOn)c.on(g.$options.updateOn,
                                function (a) {
                                    g.$$debounceViewValueCommit(a && a.type)
                                });
                            c.on("blur", function (c) {
                                g.$touched || (a.$$phase ? b.$evalAsync(g.$setTouched) : b.$apply(g.$setTouched))
                            })
                        }
                    }
                }
            }
        }], Ig = /(\s+|^)default(\s+|$)/, Re = function () {
            return {
                restrict: "A", controller: ["$scope", "$attrs", function (a, b) {
                    var d = this;
                    this.$options = Pa(a.$eval(b.ngModelOptions));
                    z(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Y(this.$options.updateOn.replace(Ig, function () {
                        d.$options.updateOnDefault = !0;
                        return " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        }, De = Na({
            terminal: !0,
            priority: 1E3
        }), Jg = P("ngOptions"), Kg = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Le = ["$compile", "$parse", function (a, b) {
            function d(a, c, d) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function l(a) {
                    var b;
                    if (!r && Ca(a))b = a; else {
                        b = [];
                        for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }

                var m = a.match(Kg);
                if (!m)throw Jg("iexp", a, ua(c));
                var n = m[5] || m[7], r = m[6];
                a = / as /.test(m[0]) && m[1];
                var q = m[9];
                c = b(m[2] ? m[1] : n);
                var u = a && b(a) || c, t = q && b(q), p = q ? function (a, b) {
                    return t(d, b)
                } : function (a) {
                    return Fa(a)
                }, y = function (a, b) {
                    return p(a, A(a, b))
                }, v = b(m[2] || m[1]), z = b(m[3] || ""), w = b(m[4] || ""), F = b(m[8]), x = {}, A = r ? function (a, b) {
                    x[r] = b;
                    x[n] = a;
                    return x
                } : function (a) {
                    x[n] = a;
                    return x
                };
                return {
                    trackBy: q, getTrackByValue: y, getWatchables: b(F,
                        function (a) {
                            var b = [];
                            a = a || [];
                            for (var c = l(a), e = c.length, f = 0; f < e; f++) {
                                var g = a === c ? f : c[f], k = A(a[g], g), g = p(a[g], k);
                                b.push(g);
                                if (m[2] || m[1])g = v(d, k), b.push(g);
                                m[4] && (k = w(d, k), b.push(k))
                            }
                            return b
                        }), getOptions: function () {
                        for (var a = [], b = {}, c = F(d) || [], f = l(c), g = f.length, m = 0; m < g; m++) {
                            var n = c === f ? m : f[m], r = A(c[n], n), s = u(d, r), n = p(s, r), t = v(d, r), x = z(d, r), r = w(d, r), s = new e(n, s, t, x, r);
                            a.push(s);
                            b[n] = s
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[y(a)]
                            }, getViewValueFromOption: function (a) {
                                return q ?
                                    $.copy(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            var c = Z.createElement("option"), e = Z.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = w
                    }, post: function (b, g, h, k) {
                        function l(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            a.value !== b.value && (b.value = a.selectValue)
                        }

                        function m(a, b, c, d) {
                            b && H(b.nodeName) === c ? c = b : (c = d.cloneNode(!1), b ? a.insertBefore(c, b) : a.appendChild(c));
                            return c
                        }

                        function q(a) {
                            for (var b; a;)b =
                                a.nextSibling, Yb(a), a = b
                        }

                        function r(a) {
                            var b = y && y[0], c = F && F[0];
                            if (b || c)for (; a && (a === b || a === c || 8 === a.nodeType || "" === a.value);)a = a.nextSibling;
                            return a
                        }

                        function u() {
                            var a = C && x.readValue();
                            C = D.getOptions();
                            var b = {}, d = g[0].firstChild;
                            M && g.prepend(y);
                            d = r(d);
                            C.items.forEach(function (a) {
                                var f, h;
                                z(a.group) ? (f = b[a.group], f || (f = m(g[0], d, "optgroup", e), d = f.nextSibling, f.label = a.group, f = b[a.group] = {
                                    groupElement: f,
                                    currentOptionElement: f.firstChild
                                }), h = m(f.groupElement, f.currentOptionElement, "option", c), l(a, h), f.currentOptionElement =
                                    h.nextSibling) : (h = m(g[0], d, "option", c), l(a, h), d = h.nextSibling)
                            });
                            Object.keys(b).forEach(function (a) {
                                q(b[a].currentOptionElement)
                            });
                            q(d);
                            t.$render();
                            if (!t.$isEmpty(a)) {
                                var f = x.readValue();
                                (D.trackBy || p ? la(a, f) : a === f) || (t.$setViewValue(f), t.$render())
                            }
                        }

                        var x = k[0], t = k[1], p = h.multiple, y;
                        k = 0;
                        for (var v = g.children(), w = v.length; k < w; k++)if ("" === v[k].value) {
                            y = v.eq(k);
                            break
                        }
                        var M = !!y, F = A(c.cloneNode(!1));
                        F.val("?");
                        var C, D = d(h.ngOptions, g, b);
                        p ? (t.$isEmpty = function (a) {
                            return !a || 0 === a.length
                        }, x.writeValue = function (a) {
                            C.items.forEach(function (a) {
                                a.element.selected = !1
                            });
                            a && a.forEach(function (a) {
                                (a = C.getOptionFromViewValue(a)) && !a.disabled && (a.element.selected = !0)
                            })
                        }, x.readValue = function () {
                            var a = g.val() || [], b = [];
                            n(a, function (a) {
                                (a = C.selectValueMap[a]) && !a.disabled && b.push(C.getViewValueFromOption(a))
                            });
                            return b
                        }, D.trackBy && b.$watchCollection(function () {
                            if (K(t.$viewValue))return t.$viewValue.map(function (a) {
                                return D.getTrackByValue(a)
                            })
                        }, function () {
                            t.$render()
                        })) : (x.writeValue = function (a) {
                            var b = C.getOptionFromViewValue(a);
                            b && !b.disabled ? g[0].value !== b.selectValue &&
                            (F.remove(), M || y.remove(), g[0].value = b.selectValue, b.element.selected = !0, b.element.setAttribute("selected", "selected")) : null === a || M ? (F.remove(), M || g.prepend(y), g.val(""), y.prop("selected", !0), y.attr("selected", !0)) : (M || y.remove(), g.prepend(F), g.val("?"), F.prop("selected", !0), F.attr("selected", !0))
                        }, x.readValue = function () {
                            var a = C.selectValueMap[g.val()];
                            return a && !a.disabled ? (M || y.remove(), F.remove(), C.getViewValueFromOption(a)) : null
                        }, D.trackBy && b.$watch(function () {
                                return D.getTrackByValue(t.$viewValue)
                            },
                            function () {
                                t.$render()
                            }));
                        M ? (y.remove(), a(y)(b), y.removeClass("ng-scope")) : y = A(c.cloneNode(!1));
                        u();
                        b.$watchCollection(D.getWatchables, u)
                    }
                }
            }
        }], Ee = ["$locale", "$interpolate", "$log", function (a, b, d) {
            var c = /{}/g, e = /^when(Minus)?(.+)$/;
            return {
                link: function (f, g, h) {
                    function k(a) {
                        g.text(a || "")
                    }

                    var l = h.count, m = h.$attr.when && g.attr(h.$attr.when), q = h.offset || 0, r = f.$eval(m) || {}, u = {}, z = b.startSymbol(), t = b.endSymbol(), p = z + l + "-" + q + t, y = $.noop, v;
                    n(h, function (a, b) {
                        var c = e.exec(b);
                        c && (c = (c[1] ? "-" : "") + H(c[2]), r[c] = g.attr(h.$attr[b]))
                    });
                    n(r, function (a, d) {
                        u[d] = b(a.replace(c, p))
                    });
                    f.$watch(l, function (b) {
                        var c = parseFloat(b), e = isNaN(c);
                        e || c in r || (c = a.pluralCat(c - q));
                        c === v || e && U(v) && isNaN(v) || (y(), e = u[c], x(e) ? (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), y = w, k()) : y = f.$watch(e, k), v = c)
                    })
                }
            }
        }], Fe = ["$parse", "$animate", function (a, b) {
            var d = P("ngRepeat"), c = function (a, b, c, d, k, l, m) {
                a[c] = d;
                k && (a[k] = l);
                a.$index = b;
                a.$first = 0 === b;
                a.$last = b === m - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (b & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (e, f) {
                    var g = f.ngRepeat, h = Z.createComment(" end ngRepeat: " + g + " "), k = g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!k)throw d("iexp", g);
                    var l = k[1], m = k[2], q = k[3], r = k[4], k = l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!k)throw d("iidexp", l);
                    var x = k[3] || k[1], z = k[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
                        q);
                    var t, p, y, v, w = {$id: Fa};
                    r ? t = a(r) : (y = function (a, b) {
                        return Fa(b)
                    }, v = function (a) {
                        return a
                    });
                    return function (a, e, f, k, l) {
                        t && (p = function (b, c, d) {
                            z && (w[z] = b);
                            w[x] = c;
                            w.$index = d;
                            return t(a, w)
                        });
                        var r = X();
                        a.$watchCollection(m, function (f) {
                            var k, m, t = e[0], w, D = X(), C, G, J, E, K, H, L;
                            q && (a[q] = f);
                            if (Ca(f))K = f, m = p || y; else for (L in m = p || v, K = [], f)qa.call(f, L) && "$" !== L.charAt(0) && K.push(L);
                            C = K.length;
                            L = Array(C);
                            for (k = 0; k < C; k++)if (G = f === K ? k : K[k], J = f[G], E = m(G, J, k), r[E])H = r[E], delete r[E], D[E] = H, L[k] = H; else {
                                if (D[E])throw n(L,
                                    function (a) {
                                        a && a.scope && (r[a.id] = a)
                                    }), d("dupes", g, E, J);
                                L[k] = {id: E, scope: u, clone: u};
                                D[E] = !0
                            }
                            for (w in r) {
                                H = r[w];
                                E = tb(H.clone);
                                b.leave(E);
                                if (E[0].parentNode)for (k = 0, m = E.length; k < m; k++)E[k].$$NG_REMOVED = !0;
                                H.scope.$destroy()
                            }
                            for (k = 0; k < C; k++)if (G = f === K ? k : K[k], J = f[G], H = L[k], H.scope) {
                                w = t;
                                do w = w.nextSibling; while (w && w.$$NG_REMOVED);
                                H.clone[0] != w && b.move(tb(H.clone), null, A(t));
                                t = H.clone[H.clone.length - 1];
                                c(H.scope, k, x, J, z, G, C)
                            } else l(function (a, d) {
                                H.scope = d;
                                var e = h.cloneNode(!1);
                                a[a.length++] = e;
                                b.enter(a,
                                    null, A(t));
                                t = e;
                                H.clone = a;
                                D[H.id] = H;
                                c(H.scope, k, x, J, z, G, C)
                            });
                            r = D
                        })
                    }
                }
            }
        }], Ge = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngShow, function (b) {
                        a[b ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], ze = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], He = Na(function (a, b, d) {
            a.$watch(d.ngStyle,
                function (a, d) {
                    d && a !== d && n(d, function (a, c) {
                        b.css(c, "")
                    });
                    a && b.css(a)
                }, !0)
        }), Ie = ["$animate", function (a) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (b, d, c, e) {
                    var f = [], g = [], h = [], k = [], l = function (a, b) {
                        return function () {
                            a.splice(b, 1)
                        }
                    };
                    b.$watch(c.ngSwitch || c.on, function (b) {
                        var c, d;
                        c = 0;
                        for (d = h.length; c < d; ++c)a.cancel(h[c]);
                        c = h.length = 0;
                        for (d = k.length; c < d; ++c) {
                            var q = tb(g[c].clone);
                            k[c].$destroy();
                            (h[c] = a.leave(q)).then(l(h, c))
                        }
                        g.length = 0;
                        k.length = 0;
                        (f = e.cases["!" +
                            b] || e.cases["?"]) && n(f, function (b) {
                            b.transclude(function (c, d) {
                                k.push(d);
                                var e = b.element;
                                c[c.length++] = Z.createComment(" end ngSwitchWhen: ");
                                g.push({clone: c});
                                a.enter(c, e.parent(), e)
                            })
                        })
                    })
                }
            }
        }], Je = Na({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["!" + d.ngSwitchWhen] = c.cases["!" + d.ngSwitchWhen] || [];
                c.cases["!" + d.ngSwitchWhen].push({transclude: e, element: b})
            }
        }), Ke = Na({
            transclude: "element", priority: 1200, require: "^ngSwitch", multiElement: !0, link: function (a,
                                                                                                           b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({transclude: e, element: b})
            }
        }), Lg = P("ngTransclude"), Me = Na({
            restrict: "EAC", link: function (a, b, d, c, e) {
                d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");
                if (!e)throw Lg("orphan", ua(b));
                e(function (a) {
                    a.length && (b.empty(), b.append(a))
                }, null, d.ngTransclude || d.ngTranscludeSlot)
            }
        }), me = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, d) {
                    "text/ng-template" == d.type && a.put(d.id, b[0].text)
                }
            }
        }], Mg = {$setViewValue: w, $render: w},
        Ng = ["$element", "$scope", "$attrs", function (a, b, d) {
            var c = this, e = new Va;
            c.ngModelCtrl = Mg;
            c.unknownOption = A(Z.createElement("option"));
            c.renderUnknownOption = function (b) {
                b = "? " + Fa(b) + " ?";
                c.unknownOption.val(b);
                a.prepend(c.unknownOption);
                a.val(b)
            };
            b.$on("$destroy", function () {
                c.renderUnknownOption = w
            });
            c.removeUnknownOption = function () {
                c.unknownOption.parent() && c.unknownOption.remove()
            };
            c.readValue = function () {
                c.removeUnknownOption();
                return a.val()
            };
            c.writeValue = function (b) {
                c.hasOption(b) ? (c.removeUnknownOption(),
                    a.val(b), "" === b && c.emptyOption.prop("selected", !0)) : null == b && c.emptyOption ? (c.removeUnknownOption(), a.val("")) : c.renderUnknownOption(b)
            };
            c.addOption = function (a, b) {
                Ua(a, '"option value"');
                "" === a && (c.emptyOption = b);
                var d = e.get(a) || 0;
                e.put(a, d + 1);
                c.ngModelCtrl.$render();
                b[0].hasAttribute("selected") && (b[0].selected = !0)
            };
            c.removeOption = function (a) {
                var b = e.get(a);
                b && (1 === b ? (e.remove(a), "" === a && (c.emptyOption = u)) : e.put(a, b - 1))
            };
            c.hasOption = function (a) {
                return !!e.get(a)
            };
            c.registerOption = function (a, b, d, e,
                                         l) {
                if (e) {
                    var m;
                    d.$observe("value", function (a) {
                        z(m) && c.removeOption(m);
                        m = a;
                        c.addOption(a, b)
                    })
                } else l ? a.$watch(l, function (a, e) {
                    d.$set("value", a);
                    e !== a && c.removeOption(e);
                    c.addOption(a, b)
                }) : c.addOption(d.value, b);
                b.on("$destroy", function () {
                    c.removeOption(d.value);
                    c.ngModelCtrl.$render()
                })
            }
        }], ne = function () {
            return {
                restrict: "E", require: ["select", "?ngModel"], controller: Ng, priority: 1, link: {
                    pre: function (a, b, d, c) {
                        var e = c[1];
                        if (e) {
                            var f = c[0];
                            f.ngModelCtrl = e;
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            };
                            b.on("change",
                                function () {
                                    a.$apply(function () {
                                        e.$setViewValue(f.readValue())
                                    })
                                });
                            if (d.multiple) {
                                f.readValue = function () {
                                    var a = [];
                                    n(b.find("option"), function (b) {
                                        b.selected && a.push(b.value)
                                    });
                                    return a
                                };
                                f.writeValue = function (a) {
                                    var c = new Va(a);
                                    n(b.find("option"), function (a) {
                                        a.selected = z(c.get(a.value))
                                    })
                                };
                                var g, h = NaN;
                                a.$watch(function () {
                                    h !== e.$viewValue || la(g, e.$viewValue) || (g = V(e.$viewValue), e.$render());
                                    h = e.$viewValue
                                });
                                e.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        }
                    }
                }
            }
        }, pe = ["$interpolate", function (a) {
            return {
                restrict: "E",
                priority: 100, compile: function (b, d) {
                    if (z(d.value))var c = a(d.value, !0); else {
                        var e = a(b.text(), !0);
                        e || d.$set("value", b.text())
                    }
                    return function (a, b, d) {
                        var k = b.parent();
                        (k = k.data("$selectController") || k.parent().data("$selectController")) && k.registerOption(a, b, d, c, e)
                    }
                }
            }
        }], oe = ka({restrict: "E", terminal: !1}), Hc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required = function (a, b) {
                        return !d.required || !c.$isEmpty(b)
                    }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        },
        Gc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            G(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw P("ngPattern")("noregexp", f, a, ua(b));
                            e = a || u;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || x(e) || e.test(b)
                        }
                    }
                }
            }
        }, Jc = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = ea(a);
                            e = isNaN(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }, Ic = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = ea(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    S.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : (fe(), he($), $.module("ngLocale", [], ["$provide", function (a) {
        function b(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 ==
            b ? 0 : a.length - b - 1
        }

        a.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-\u00a4",
                    negSuf: "",
                    posPre: "\u00a4",
                    posSuf: ""
                }]
            },
            id: "en-us",
            pluralCat: function (a, c) {
                var e =
                    a | 0, f = c;
                u === f && (f = Math.min(b(a), 3));
                Math.pow(10, f);
                return 1 == e && 0 == f ? "one" : "other"
            }
        })
    }]), A(Z).ready(function () {
        be(Z, zc)
    }))
})(window, document);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map