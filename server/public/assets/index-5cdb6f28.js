function z1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i &&
                        Object.defineProperty(
                            e,
                            o,
                            i.get ? i : { enumerable: !0, get: () => r[o] }
                        );
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver((o) => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const i = {};
        return (
            o.integrity && (i.integrity = o.integrity),
            o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
            o.crossorigin === "use-credentials"
                ? (i.credentials = "include")
                : o.crossorigin === "anonymous"
                ? (i.credentials = "omit")
                : (i.credentials = "same-origin"),
            i
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i);
    }
})();
function Rg(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
}
var Ji = {},
    F1 = {
        get exports() {
            return Ji;
        },
        set exports(e) {
            Ji = e;
        },
    },
    fl = {},
    b = {},
    B1 = {
        get exports() {
            return b;
        },
        set exports(e) {
            b = e;
        },
    },
    pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ps = Symbol.for("react.element"),
    j1 = Symbol.for("react.portal"),
    U1 = Symbol.for("react.fragment"),
    W1 = Symbol.for("react.strict_mode"),
    V1 = Symbol.for("react.profiler"),
    H1 = Symbol.for("react.provider"),
    K1 = Symbol.for("react.context"),
    G1 = Symbol.for("react.forward_ref"),
    q1 = Symbol.for("react.suspense"),
    Y1 = Symbol.for("react.memo"),
    X1 = Symbol.for("react.lazy"),
    Rp = Symbol.iterator;
function Q1(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Rp && e[Rp]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var Pg = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    $g = Object.assign,
    Tg = {};
function ni(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Tg),
        (this.updater = n || Pg);
}
ni.prototype.isReactComponent = {};
ni.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
ni.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Og() {}
Og.prototype = ni.prototype;
function Dd(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Tg),
        (this.updater = n || Pg);
}
var zd = (Dd.prototype = new Og());
zd.constructor = Dd;
$g(zd, ni.prototype);
zd.isPureReactComponent = !0;
var Pp = Array.isArray,
    Ig = Object.prototype.hasOwnProperty,
    Fd = { current: null },
    _g = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
            Ig.call(t, r) && !_g.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l;
    }
    if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: Ps,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Fd.current,
    };
}
function J1(e, t) {
    return {
        $$typeof: Ps,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Bd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ps;
}
function Z1(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var $p = /\/+/g;
function Cu(e, t) {
    return typeof e == "object" && e !== null && e.key != null
        ? Z1("" + e.key)
        : t.toString(36);
}
function fa(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (i) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Ps:
                    case j1:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + Cu(s, 0) : r),
            Pp(o)
                ? ((n = ""),
                  e != null && (n = e.replace($p, "$&/") + "/"),
                  fa(o, t, n, "", function (u) {
                      return u;
                  }))
                : o != null &&
                  (Bd(o) &&
                      (o = J1(
                          o,
                          n +
                              (!o.key || (s && s.key === o.key)
                                  ? ""
                                  : ("" + o.key).replace($p, "$&/") + "/") +
                              e
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Pp(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Cu(i, a);
            s += fa(i, t, n, l, o);
        }
    else if (((l = Q1(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + Cu(i, a++)), (s += fa(i, t, n, l, o));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                        ? "object with keys {" + Object.keys(e).join(", ") + "}"
                        : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Fs(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        fa(e, r, "", "", function (i) {
            return t.call(n, i, o++);
        }),
        r
    );
}
function eb(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Et = { current: null },
    pa = { transition: null },
    tb = {
        ReactCurrentDispatcher: Et,
        ReactCurrentBatchConfig: pa,
        ReactCurrentOwner: Fd,
    };
pe.Children = {
    map: Fs,
    forEach: function (e, t, n) {
        Fs(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Fs(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Fs(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Bd(e))
            throw Error(
                "React.Children.only expected to receive a single React element child."
            );
        return e;
    },
};
pe.Component = ni;
pe.Fragment = U1;
pe.Profiler = V1;
pe.PureComponent = Dd;
pe.StrictMode = W1;
pe.Suspense = q1;
pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tb;
pe.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
        );
    var r = $g({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (s = Fd.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t)
            Ig.call(t, l) &&
                !_g.hasOwnProperty(l) &&
                (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: Ps, type: e.type, key: o, ref: i, props: r, _owner: s };
};
pe.createContext = function (e) {
    return (
        (e = {
            $$typeof: K1,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: H1, _context: e }),
        (e.Consumer = e)
    );
};
pe.createElement = Mg;
pe.createFactory = function (e) {
    var t = Mg.bind(null, e);
    return (t.type = e), t;
};
pe.createRef = function () {
    return { current: null };
};
pe.forwardRef = function (e) {
    return { $$typeof: G1, render: e };
};
pe.isValidElement = Bd;
pe.lazy = function (e) {
    return { $$typeof: X1, _payload: { _status: -1, _result: e }, _init: eb };
};
pe.memo = function (e, t) {
    return { $$typeof: Y1, type: e, compare: t === void 0 ? null : t };
};
pe.startTransition = function (e) {
    var t = pa.transition;
    pa.transition = {};
    try {
        e();
    } finally {
        pa.transition = t;
    }
};
pe.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
pe.useCallback = function (e, t) {
    return Et.current.useCallback(e, t);
};
pe.useContext = function (e) {
    return Et.current.useContext(e);
};
pe.useDebugValue = function () {};
pe.useDeferredValue = function (e) {
    return Et.current.useDeferredValue(e);
};
pe.useEffect = function (e, t) {
    return Et.current.useEffect(e, t);
};
pe.useId = function () {
    return Et.current.useId();
};
pe.useImperativeHandle = function (e, t, n) {
    return Et.current.useImperativeHandle(e, t, n);
};
pe.useInsertionEffect = function (e, t) {
    return Et.current.useInsertionEffect(e, t);
};
pe.useLayoutEffect = function (e, t) {
    return Et.current.useLayoutEffect(e, t);
};
pe.useMemo = function (e, t) {
    return Et.current.useMemo(e, t);
};
pe.useReducer = function (e, t, n) {
    return Et.current.useReducer(e, t, n);
};
pe.useRef = function (e) {
    return Et.current.useRef(e);
};
pe.useState = function (e) {
    return Et.current.useState(e);
};
pe.useSyncExternalStore = function (e, t, n) {
    return Et.current.useSyncExternalStore(e, t, n);
};
pe.useTransition = function () {
    return Et.current.useTransition();
};
pe.version = "18.2.0";
(function (e) {
    e.exports = pe;
})(B1);
const Jt = Rg(b),
    Vo = z1({ __proto__: null, default: Jt }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nb = b,
    rb = Symbol.for("react.element"),
    ob = Symbol.for("react.fragment"),
    ib = Object.prototype.hasOwnProperty,
    sb =
        nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    ab = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ng(e, t, n) {
    var r,
        o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (s = t.ref);
    for (r in t) ib.call(t, r) && !ab.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: rb,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: sb.current,
    };
}
fl.Fragment = ob;
fl.jsx = Ng;
fl.jsxs = Ng;
(function (e) {
    e.exports = fl;
})(F1);
const lb = Ji.Fragment,
    R = Ji.jsx,
    le = Ji.jsxs;
var mc = {},
    Gr = {},
    ub = {
        get exports() {
            return Gr;
        },
        set exports(e) {
            Gr = e;
        },
    },
    Vt = {},
    gc = {},
    cb = {
        get exports() {
            return gc;
        },
        set exports(e) {
            gc = e;
        },
    },
    Ag = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t($, M) {
        var L = $.length;
        $.push(M);
        e: for (; 0 < L; ) {
            var W = (L - 1) >>> 1,
                te = $[W];
            if (0 < o(te, M)) ($[W] = M), ($[L] = te), (L = W);
            else break e;
        }
    }
    function n($) {
        return $.length === 0 ? null : $[0];
    }
    function r($) {
        if ($.length === 0) return null;
        var M = $[0],
            L = $.pop();
        if (L !== M) {
            $[0] = L;
            e: for (var W = 0, te = $.length, Me = te >>> 1; W < Me; ) {
                var ie = 2 * (W + 1) - 1,
                    ge = $[ie],
                    K = ie + 1,
                    ce = $[K];
                if (0 > o(ge, L))
                    K < te && 0 > o(ce, ge)
                        ? (($[W] = ce), ($[K] = L), (W = K))
                        : (($[W] = ge), ($[ie] = L), (W = ie));
                else if (K < te && 0 > o(ce, L))
                    ($[W] = ce), ($[K] = L), (W = K);
                else break e;
            }
        }
        return M;
    }
    function o($, M) {
        var L = $.sortIndex - M.sortIndex;
        return L !== 0 ? L : $.id - M.id;
    }
    if (
        typeof performance == "object" &&
        typeof performance.now == "function"
    ) {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        c = 3,
        h = !1,
        g = !1,
        p = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y($) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null) r(u);
            else if (M.startTime <= $)
                r(u), (M.sortIndex = M.expirationTime), t(l, M);
            else break;
            M = n(u);
        }
    }
    function x($) {
        if (((p = !1), y($), !g))
            if (n(l) !== null) (g = !0), j(C);
            else {
                var M = n(u);
                M !== null && ee(x, M.startTime - $);
            }
    }
    function C($, M) {
        (g = !1), p && ((p = !1), v(T), (T = -1)), (h = !0);
        var L = c;
        try {
            for (
                y(M), f = n(l);
                f !== null && (!(f.expirationTime > M) || ($ && !z()));

            ) {
                var W = f.callback;
                if (typeof W == "function") {
                    (f.callback = null), (c = f.priorityLevel);
                    var te = W(f.expirationTime <= M);
                    (M = e.unstable_now()),
                        typeof te == "function"
                            ? (f.callback = te)
                            : f === n(l) && r(l),
                        y(M);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var Me = !0;
            else {
                var ie = n(u);
                ie !== null && ee(x, ie.startTime - M), (Me = !1);
            }
            return Me;
        } finally {
            (f = null), (c = L), (h = !1);
        }
    }
    var k = !1,
        E = null,
        T = -1,
        O = 5,
        P = -1;
    function z() {
        return !(e.unstable_now() - P < O);
    }
    function G() {
        if (E !== null) {
            var $ = e.unstable_now();
            P = $;
            var M = !0;
            try {
                M = E(!0, $);
            } finally {
                M ? U() : ((k = !1), (E = null));
            }
        } else k = !1;
    }
    var U;
    if (typeof m == "function")
        U = function () {
            m(G);
        };
    else if (typeof MessageChannel < "u") {
        var A = new MessageChannel(),
            F = A.port2;
        (A.port1.onmessage = G),
            (U = function () {
                F.postMessage(null);
            });
    } else
        U = function () {
            S(G, 0);
        };
    function j($) {
        (E = $), k || ((k = !0), U());
    }
    function ee($, M) {
        T = S(function () {
            $(e.unstable_now());
        }, M);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function ($) {
            $.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            g || h || ((g = !0), j(C));
        }),
        (e.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (O = 0 < $ ? Math.floor(1e3 / $) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return c;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function ($) {
            switch (c) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = c;
            }
            var L = c;
            c = M;
            try {
                return $();
            } finally {
                c = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function ($, M) {
            switch ($) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    $ = 3;
            }
            var L = c;
            c = $;
            try {
                return M();
            } finally {
                c = L;
            }
        }),
        (e.unstable_scheduleCallback = function ($, M, L) {
            var W = e.unstable_now();
            switch (
                (typeof L == "object" && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == "number" && 0 < L ? W + L : W))
                    : (L = W),
                $)
            ) {
                case 1:
                    var te = -1;
                    break;
                case 2:
                    te = 250;
                    break;
                case 5:
                    te = 1073741823;
                    break;
                case 4:
                    te = 1e4;
                    break;
                default:
                    te = 5e3;
            }
            return (
                (te = L + te),
                ($ = {
                    id: d++,
                    callback: M,
                    priorityLevel: $,
                    startTime: L,
                    expirationTime: te,
                    sortIndex: -1,
                }),
                L > W
                    ? (($.sortIndex = L),
                      t(u, $),
                      n(l) === null &&
                          $ === n(u) &&
                          (p ? (v(T), (T = -1)) : (p = !0), ee(x, L - W)))
                    : (($.sortIndex = te), t(l, $), g || h || ((g = !0), j(C))),
                $
            );
        }),
        (e.unstable_shouldYield = z),
        (e.unstable_wrapCallback = function ($) {
            var M = c;
            return function () {
                var L = c;
                c = M;
                try {
                    return $.apply(this, arguments);
                } finally {
                    c = L;
                }
            };
        });
})(Ag);
(function (e) {
    e.exports = Ag;
})(cb);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lg = b,
    Ut = gc;
function D(e) {
    for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Dg = new Set(),
    Zi = {};
function no(e, t) {
    Ho(e, t), Ho(e + "Capture", t);
}
function Ho(e, t) {
    for (Zi[e] = t, e = 0; e < t.length; e++) Dg.add(t[e]);
}
var Fn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
    ),
    vc = Object.prototype.hasOwnProperty,
    db =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Tp = {},
    Op = {};
function fb(e) {
    return vc.call(Op, e)
        ? !0
        : vc.call(Tp, e)
        ? !1
        : db.test(e)
        ? (Op[e] = !0)
        : ((Tp[e] = !0), !1);
}
function pb(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function hb(e, t, n, r) {
    if (t === null || typeof t > "u" || pb(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function kt(e, t, n, r, o, i, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = s);
}
var mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        mt[e] = new kt(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    mt[t] = new kt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    mt[e] = new kt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
].forEach(function (e) {
    mt[e] = new kt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        mt[e] = new kt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    mt[e] = new kt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    mt[e] = new kt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    mt[e] = new kt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    mt[e] = new kt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var jd = /[\-:]([a-z])/g;
function Ud(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(jd, Ud);
        mt[t] = new kt(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(jd, Ud);
        mt[t] = new kt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(jd, Ud);
    mt[t] = new kt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    mt[e] = new kt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
mt.xlinkHref = new kt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
    mt[e] = new kt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wd(e, t, n, r) {
    var o = mt.hasOwnProperty(t) ? mt[t] : null;
    (o !== null
        ? o.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (hb(t, n, o, r) && (n = null),
        r || o === null
            ? fb(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
            ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((o = o.type),
                    (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kn = Lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Bs = Symbol.for("react.element"),
    mo = Symbol.for("react.portal"),
    go = Symbol.for("react.fragment"),
    Vd = Symbol.for("react.strict_mode"),
    yc = Symbol.for("react.profiler"),
    zg = Symbol.for("react.provider"),
    Fg = Symbol.for("react.context"),
    Hd = Symbol.for("react.forward_ref"),
    bc = Symbol.for("react.suspense"),
    xc = Symbol.for("react.suspense_list"),
    Kd = Symbol.for("react.memo"),
    Jn = Symbol.for("react.lazy"),
    Bg = Symbol.for("react.offscreen"),
    Ip = Symbol.iterator;
function pi(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Ip && e[Ip]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
}
var We = Object.assign,
    Eu;
function Ti(e) {
    if (Eu === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Eu = (t && t[1]) || "";
        }
    return (
        `
` +
        Eu +
        e
    );
}
var ku = !1;
function Ru(e, t) {
    if (!e || ku) return "";
    ku = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var o = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    s = o.length - 1,
                    a = i.length - 1;
                1 <= s && 0 <= a && o[s] !== i[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || o[s] !== i[a])) {
                                var l =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace(
                                            "<anonymous>",
                                            e.displayName
                                        )),
                                    l
                                );
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (ku = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Ti(e) : "";
}
function mb(e) {
    switch (e.tag) {
        case 5:
            return Ti(e.type);
        case 16:
            return Ti("Lazy");
        case 13:
            return Ti("Suspense");
        case 19:
            return Ti("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Ru(e.type, !1)), e;
        case 11:
            return (e = Ru(e.type.render, !1)), e;
        case 1:
            return (e = Ru(e.type, !0)), e;
        default:
            return "";
    }
}
function wc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case go:
            return "Fragment";
        case mo:
            return "Portal";
        case yc:
            return "Profiler";
        case Vd:
            return "StrictMode";
        case bc:
            return "Suspense";
        case xc:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case Fg:
                return (e.displayName || "Context") + ".Consumer";
            case zg:
                return (e._context.displayName || "Context") + ".Provider";
            case Hd:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ""),
                        (e =
                            e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Kd:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : wc(e.type) || "Memo"
                );
            case Jn:
                (t = e._payload), (e = e._init);
                try {
                    return wc(e(t));
                } catch {}
        }
    return null;
}
function gb(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName ||
                    (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return wc(t);
        case 8:
            return t === Vd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function gr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function jg(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
    );
}
function vb(e) {
    var t = jg(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
    ) {
        var o = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), i.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function js(e) {
    e._valueTracker || (e._valueTracker = vb(e));
}
function Ug(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return (
        e && (r = jg(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Ia(e) {
    if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Sc(e, t) {
    var n = t.checked;
    return We({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function _p(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = gr(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === "checkbox" || t.type === "radio"
                    ? t.checked != null
                    : t.value != null,
        });
}
function Wg(e, t) {
    (t = t.checked), t != null && Wd(e, "checked", t, !1);
}
function Cc(e, t) {
    Wg(e, t);
    var n = gr(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Ec(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Ec(e, t.type, gr(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Mp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
            !(
                (r !== "submit" && r !== "reset") ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Ec(e, t, n) {
    (t !== "number" || Ia(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Oi = Array.isArray;
function Oo(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + gr(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function kc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
    return We({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
    });
}
function Np(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(D(92));
            if (Oi(n)) {
                if (1 < n.length) throw Error(D(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: gr(n) };
}
function Vg(e, t) {
    var n = gr(t.value),
        r = gr(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function Ap(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
}
function Hg(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Rc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Hg(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
}
var Us,
    Kg = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (
                Us = Us || document.createElement("div"),
                    Us.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Us.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function es(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Di = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    yb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Di).forEach(function (e) {
    yb.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Di[t] = Di[e]);
    });
});
function Gg(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
          typeof t != "number" ||
          t === 0 ||
          (Di.hasOwnProperty(e) && Di[e])
        ? ("" + t).trim()
        : t + "px";
}
function qg(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = Gg(n, t[n], r);
            n === "float" && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var bb = We(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Pc(e, t) {
    if (t) {
        if (bb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(D(60));
            if (
                typeof t.dangerouslySetInnerHTML != "object" ||
                !("__html" in t.dangerouslySetInnerHTML)
            )
                throw Error(D(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(D(62));
    }
}
function $c(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Tc = null;
function Gd(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Oc = null,
    Io = null,
    _o = null;
function Lp(e) {
    if ((e = Os(e))) {
        if (typeof Oc != "function") throw Error(D(280));
        var t = e.stateNode;
        t && ((t = vl(t)), Oc(e.stateNode, e.type, t));
    }
}
function Yg(e) {
    Io ? (_o ? _o.push(e) : (_o = [e])) : (Io = e);
}
function Xg() {
    if (Io) {
        var e = Io,
            t = _o;
        if (((_o = Io = null), Lp(e), t))
            for (e = 0; e < t.length; e++) Lp(t[e]);
    }
}
function Qg(e, t) {
    return e(t);
}
function Jg() {}
var Pu = !1;
function Zg(e, t, n) {
    if (Pu) return e(t, n);
    Pu = !0;
    try {
        return Qg(e, t, n);
    } finally {
        (Pu = !1), (Io !== null || _o !== null) && (Jg(), Xg());
    }
}
function ts(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = vl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === "button" ||
                    e === "input" ||
                    e === "select" ||
                    e === "textarea"
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(D(231, t, typeof n));
    return n;
}
var Ic = !1;
if (Fn)
    try {
        var hi = {};
        Object.defineProperty(hi, "passive", {
            get: function () {
                Ic = !0;
            },
        }),
            window.addEventListener("test", hi, hi),
            window.removeEventListener("test", hi, hi);
    } catch {
        Ic = !1;
    }
function xb(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (d) {
        this.onError(d);
    }
}
var zi = !1,
    _a = null,
    Ma = !1,
    _c = null,
    wb = {
        onError: function (e) {
            (zi = !0), (_a = e);
        },
    };
function Sb(e, t, n, r, o, i, s, a, l) {
    (zi = !1), (_a = null), xb.apply(wb, arguments);
}
function Cb(e, t, n, r, o, i, s, a, l) {
    if ((Sb.apply(this, arguments), zi)) {
        if (zi) {
            var u = _a;
            (zi = !1), (_a = null);
        } else throw Error(D(198));
        Ma || ((Ma = !0), (_c = u));
    }
}
function ro(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function ev(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Dp(e) {
    if (ro(e) !== e) throw Error(D(188));
}
function Eb(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = ro(e)), t === null)) throw Error(D(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n) return Dp(o), e;
                if (i === r) return Dp(o), t;
                i = i.sibling;
            }
            throw Error(D(188));
        }
        if (n.return !== r.return) (n = o), (r = i);
        else {
            for (var s = !1, a = o.child; a; ) {
                if (a === n) {
                    (s = !0), (n = o), (r = i);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = o), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(D(189));
            }
        }
        if (n.alternate !== r) throw Error(D(190));
    }
    if (n.tag !== 3) throw Error(D(188));
    return n.stateNode.current === n ? e : t;
}
function tv(e) {
    return (e = Eb(e)), e !== null ? nv(e) : null;
}
function nv(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = nv(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var rv = Ut.unstable_scheduleCallback,
    zp = Ut.unstable_cancelCallback,
    kb = Ut.unstable_shouldYield,
    Rb = Ut.unstable_requestPaint,
    qe = Ut.unstable_now,
    Pb = Ut.unstable_getCurrentPriorityLevel,
    qd = Ut.unstable_ImmediatePriority,
    ov = Ut.unstable_UserBlockingPriority,
    Na = Ut.unstable_NormalPriority,
    $b = Ut.unstable_LowPriority,
    iv = Ut.unstable_IdlePriority,
    pl = null,
    kn = null;
function Tb(e) {
    if (kn && typeof kn.onCommitFiberRoot == "function")
        try {
            kn.onCommitFiberRoot(
                pl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var hn = Math.clz32 ? Math.clz32 : _b,
    Ob = Math.log,
    Ib = Math.LN2;
function _b(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Ob(e) / Ib) | 0)) | 0;
}
var Ws = 64,
    Vs = 4194304;
function Ii(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Aa(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? (r = Ii(a)) : ((i &= s), i !== 0 && (r = Ii(i)));
    } else (s = n & ~o), s !== 0 ? (r = Ii(s)) : i !== 0 && (r = Ii(i));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & o) &&
        ((o = r & -r),
        (i = t & -t),
        o >= i || (o === 16 && (i & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - hn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function Mb(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Nb(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
        0 < i;

    ) {
        var s = 31 - hn(i),
            a = 1 << s,
            l = o[s];
        l === -1
            ? (!(a & n) || a & r) && (o[s] = Mb(a, t))
            : l <= t && (e.expiredLanes |= a),
            (i &= ~a);
    }
}
function Mc(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function sv() {
    var e = Ws;
    return (Ws <<= 1), !(Ws & 4194240) && (Ws = 64), e;
}
function $u(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function $s(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - hn(t)),
        (e[t] = n);
}
function Ab(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - hn(n),
            i = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
}
function Yd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - hn(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var Re = 0;
function av(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var lv,
    Xd,
    uv,
    cv,
    dv,
    Nc = !1,
    Hs = [],
    sr = null,
    ar = null,
    lr = null,
    ns = new Map(),
    rs = new Map(),
    er = [],
    Lb =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Fp(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            sr = null;
            break;
        case "dragenter":
        case "dragleave":
            ar = null;
            break;
        case "mouseover":
        case "mouseout":
            lr = null;
            break;
        case "pointerover":
        case "pointerout":
            ns.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            rs.delete(t.pointerId);
    }
}
function mi(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: i,
              targetContainers: [o],
          }),
          t !== null && ((t = Os(t)), t !== null && Xd(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          o !== null && t.indexOf(o) === -1 && t.push(o),
          e);
}
function Db(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (sr = mi(sr, e, t, n, r, o)), !0;
        case "dragenter":
            return (ar = mi(ar, e, t, n, r, o)), !0;
        case "mouseover":
            return (lr = mi(lr, e, t, n, r, o)), !0;
        case "pointerover":
            var i = o.pointerId;
            return ns.set(i, mi(ns.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (
                (i = o.pointerId),
                rs.set(i, mi(rs.get(i) || null, e, t, n, r, o)),
                !0
            );
    }
    return !1;
}
function fv(e) {
    var t = Fr(e.target);
    if (t !== null) {
        var n = ro(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = ev(n)), t !== null)) {
                    (e.blockedOn = t),
                        dv(e.priority, function () {
                            uv(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ha(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ac(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Tc = r), n.target.dispatchEvent(r), (Tc = null);
        } else return (t = Os(n)), t !== null && Xd(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Bp(e, t, n) {
    ha(e) && n.delete(t);
}
function zb() {
    (Nc = !1),
        sr !== null && ha(sr) && (sr = null),
        ar !== null && ha(ar) && (ar = null),
        lr !== null && ha(lr) && (lr = null),
        ns.forEach(Bp),
        rs.forEach(Bp);
}
function gi(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Nc ||
            ((Nc = !0),
            Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority, zb)));
}
function os(e) {
    function t(o) {
        return gi(o, e);
    }
    if (0 < Hs.length) {
        gi(Hs[0], e);
        for (var n = 1; n < Hs.length; n++) {
            var r = Hs[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        sr !== null && gi(sr, e),
            ar !== null && gi(ar, e),
            lr !== null && gi(lr, e),
            ns.forEach(t),
            rs.forEach(t),
            n = 0;
        n < er.length;
        n++
    )
        (r = er[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < er.length && ((n = er[0]), n.blockedOn === null); )
        fv(n), n.blockedOn === null && er.shift();
}
var Mo = Kn.ReactCurrentBatchConfig,
    La = !0;
function Fb(e, t, n, r) {
    var o = Re,
        i = Mo.transition;
    Mo.transition = null;
    try {
        (Re = 1), Qd(e, t, n, r);
    } finally {
        (Re = o), (Mo.transition = i);
    }
}
function Bb(e, t, n, r) {
    var o = Re,
        i = Mo.transition;
    Mo.transition = null;
    try {
        (Re = 4), Qd(e, t, n, r);
    } finally {
        (Re = o), (Mo.transition = i);
    }
}
function Qd(e, t, n, r) {
    if (La) {
        var o = Ac(e, t, n, r);
        if (o === null) zu(e, t, r, Da, n), Fp(e, r);
        else if (Db(o, e, t, n, r)) r.stopPropagation();
        else if ((Fp(e, r), t & 4 && -1 < Lb.indexOf(e))) {
            for (; o !== null; ) {
                var i = Os(o);
                if (
                    (i !== null && lv(i),
                    (i = Ac(e, t, n, r)),
                    i === null && zu(e, t, r, Da, n),
                    i === o)
                )
                    break;
                o = i;
            }
            o !== null && r.stopPropagation();
        } else zu(e, t, r, null, n);
    }
}
var Da = null;
function Ac(e, t, n, r) {
    if (((Da = null), (e = Gd(r)), (e = Fr(e)), e !== null))
        if (((t = ro(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = ev(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Da = e), null;
}
function pv(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Pb()) {
                case qd:
                    return 1;
                case ov:
                    return 4;
                case Na:
                case $b:
                    return 16;
                case iv:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var rr = null,
    Jd = null,
    ma = null;
function hv() {
    if (ma) return ma;
    var e,
        t = Jd,
        n = t.length,
        r,
        o = "value" in rr ? rr.value : rr.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return (ma = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ga(e) {
    var t = e.keyCode;
    return (
        "charCode" in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function Ks() {
    return !0;
}
function jp() {
    return !1;
}
function Ht(e) {
    function t(n, r, o, i, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = s),
            (this.currentTarget = null);
        for (var a in e)
            e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (
                i.defaultPrevented != null
                    ? i.defaultPrevented
                    : i.returnValue === !1
            )
                ? Ks
                : jp),
            (this.isPropagationStopped = jp),
            this
        );
    }
    return (
        We(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != "unknown" &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = Ks));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = Ks));
            },
            persist: function () {},
            isPersistent: Ks,
        }),
        t
    );
}
var ri = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Zd = Ht(ri),
    Ts = We({}, ri, { view: 0, detail: 0 }),
    jb = Ht(Ts),
    Tu,
    Ou,
    vi,
    hl = We({}, Ts, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ef,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== vi &&
                      (vi && e.type === "mousemove"
                          ? ((Tu = e.screenX - vi.screenX),
                            (Ou = e.screenY - vi.screenY))
                          : (Ou = Tu = 0),
                      (vi = e)),
                  Tu);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Ou;
        },
    }),
    Up = Ht(hl),
    Ub = We({}, hl, { dataTransfer: 0 }),
    Wb = Ht(Ub),
    Vb = We({}, Ts, { relatedTarget: 0 }),
    Iu = Ht(Vb),
    Hb = We({}, ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kb = Ht(Hb),
    Gb = We({}, ri, {
        clipboardData: function (e) {
            return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    qb = Ht(Gb),
    Yb = We({}, ri, { data: 0 }),
    Wp = Ht(Yb),
    Xb = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Qb = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Jb = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
    };
function Zb(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Jb[e])
        ? !!t[e]
        : !1;
}
function ef() {
    return Zb;
}
var ex = We({}, Ts, {
        key: function (e) {
            if (e.key) {
                var t = Xb[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = ga(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                ? Qb[e.keyCode] || "Unidentified"
                : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ef,
        charCode: function (e) {
            return e.type === "keypress" ? ga(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress"
                ? ga(e)
                : e.type === "keydown" || e.type === "keyup"
                ? e.keyCode
                : 0;
        },
    }),
    tx = Ht(ex),
    nx = We({}, hl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Vp = Ht(nx),
    rx = We({}, Ts, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ef,
    }),
    ox = Ht(rx),
    ix = We({}, ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sx = Ht(ix),
    ax = We({}, hl, {
        deltaX: function (e) {
            return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    lx = Ht(ax),
    ux = [9, 13, 27, 32],
    tf = Fn && "CompositionEvent" in window,
    Fi = null;
Fn && "documentMode" in document && (Fi = document.documentMode);
var cx = Fn && "TextEvent" in window && !Fi,
    mv = Fn && (!tf || (Fi && 8 < Fi && 11 >= Fi)),
    Hp = String.fromCharCode(32),
    Kp = !1;
function gv(e, t) {
    switch (e) {
        case "keyup":
            return ux.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function vv(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var vo = !1;
function dx(e, t) {
    switch (e) {
        case "compositionend":
            return vv(t);
        case "keypress":
            return t.which !== 32 ? null : ((Kp = !0), Hp);
        case "textInput":
            return (e = t.data), e === Hp && Kp ? null : e;
        default:
            return null;
    }
}
function fx(e, t) {
    if (vo)
        return e === "compositionend" || (!tf && gv(e, t))
            ? ((e = hv()), (ma = Jd = rr = null), (vo = !1), e)
            : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return mv && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var px = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Gp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!px[e.type] : t === "textarea";
}
function yv(e, t, n, r) {
    Yg(r),
        (t = za(t, "onChange")),
        0 < t.length &&
            ((n = new Zd("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Bi = null,
    is = null;
function hx(e) {
    Tv(e, 0);
}
function ml(e) {
    var t = xo(e);
    if (Ug(t)) return e;
}
function mx(e, t) {
    if (e === "change") return t;
}
var bv = !1;
if (Fn) {
    var _u;
    if (Fn) {
        var Mu = "oninput" in document;
        if (!Mu) {
            var qp = document.createElement("div");
            qp.setAttribute("oninput", "return;"),
                (Mu = typeof qp.oninput == "function");
        }
        _u = Mu;
    } else _u = !1;
    bv = _u && (!document.documentMode || 9 < document.documentMode);
}
function Yp() {
    Bi && (Bi.detachEvent("onpropertychange", xv), (is = Bi = null));
}
function xv(e) {
    if (e.propertyName === "value" && ml(is)) {
        var t = [];
        yv(t, is, e, Gd(e)), Zg(hx, t);
    }
}
function gx(e, t, n) {
    e === "focusin"
        ? (Yp(), (Bi = t), (is = n), Bi.attachEvent("onpropertychange", xv))
        : e === "focusout" && Yp();
}
function vx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ml(is);
}
function yx(e, t) {
    if (e === "click") return ml(t);
}
function bx(e, t) {
    if (e === "input" || e === "change") return ml(t);
}
function xx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var gn = typeof Object.is == "function" ? Object.is : xx;
function ss(e, t) {
    if (gn(e, t)) return !0;
    if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!vc.call(t, o) || !gn(e[o], t[o])) return !1;
    }
    return !0;
}
function Xp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Qp(e, t) {
    var n = Xp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Xp(n);
    }
}
function wv(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? wv(e, t.parentNode)
            : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1;
}
function Sv() {
    for (var e = window, t = Ia(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ia(e.document);
    }
    return t;
}
function nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function wx(e) {
    var t = Sv(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        wv(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && nf(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                "selectionStart" in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                (r = r.end === void 0 ? i : Math.min(r.end, o)),
                    !e.extend && i > r && ((o = r), (r = i), (i = o)),
                    (o = Qp(n, i));
                var s = Qp(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    i > r
                        ? (e.addRange(t), e.extend(s.node, s.offset))
                        : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == "function" && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var Sx = Fn && "documentMode" in document && 11 >= document.documentMode,
    yo = null,
    Lc = null,
    ji = null,
    Dc = !1;
function Jp(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Dc ||
        yo == null ||
        yo !== Ia(r) ||
        ((r = yo),
        "selectionStart" in r && nf(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (ji && ss(ji, r)) ||
            ((ji = r),
            (r = za(Lc, "onSelect")),
            0 < r.length &&
                ((t = new Zd("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yo))));
}
function Gs(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
    );
}
var bo = {
        animationend: Gs("Animation", "AnimationEnd"),
        animationiteration: Gs("Animation", "AnimationIteration"),
        animationstart: Gs("Animation", "AnimationStart"),
        transitionend: Gs("Transition", "TransitionEnd"),
    },
    Nu = {},
    Cv = {};
Fn &&
    ((Cv = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete bo.animationend.animation,
        delete bo.animationiteration.animation,
        delete bo.animationstart.animation),
    "TransitionEvent" in window || delete bo.transitionend.transition);
function gl(e) {
    if (Nu[e]) return Nu[e];
    if (!bo[e]) return e;
    var t = bo[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Cv) return (Nu[e] = t[n]);
    return e;
}
var Ev = gl("animationend"),
    kv = gl("animationiteration"),
    Rv = gl("animationstart"),
    Pv = gl("transitionend"),
    $v = new Map(),
    Zp =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Sr(e, t) {
    $v.set(e, t), no(t, [e]);
}
for (var Au = 0; Au < Zp.length; Au++) {
    var Lu = Zp[Au],
        Cx = Lu.toLowerCase(),
        Ex = Lu[0].toUpperCase() + Lu.slice(1);
    Sr(Cx, "on" + Ex);
}
Sr(Ev, "onAnimationEnd");
Sr(kv, "onAnimationIteration");
Sr(Rv, "onAnimationStart");
Sr("dblclick", "onDoubleClick");
Sr("focusin", "onFocus");
Sr("focusout", "onBlur");
Sr(Pv, "onTransitionEnd");
Ho("onMouseEnter", ["mouseout", "mouseover"]);
Ho("onMouseLeave", ["mouseout", "mouseover"]);
Ho("onPointerEnter", ["pointerout", "pointerover"]);
Ho("onPointerLeave", ["pointerout", "pointerover"]);
no(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
        " "
    )
);
no(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
    )
);
no("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
no(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
no(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
no(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var _i =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    kx = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(_i)
    );
function eh(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Cb(r, t, void 0, e), (e.currentTarget = null);
}
function Tv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== i && o.isPropagationStopped()))
                        break e;
                    eh(o, a, u), (i = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((a = r[s]),
                        (l = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        l !== i && o.isPropagationStopped())
                    )
                        break e;
                    eh(o, a, u), (i = l);
                }
        }
    }
    if (Ma) throw ((e = _c), (Ma = !1), (_c = null), e);
}
function Le(e, t) {
    var n = t[Uc];
    n === void 0 && (n = t[Uc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Ov(t, e, 2, !1), n.add(r));
}
function Du(e, t, n) {
    var r = 0;
    t && (r |= 4), Ov(n, e, r, t);
}
var qs = "_reactListening" + Math.random().toString(36).slice(2);
function as(e) {
    if (!e[qs]) {
        (e[qs] = !0),
            Dg.forEach(function (n) {
                n !== "selectionchange" &&
                    (kx.has(n) || Du(n, !1, e), Du(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[qs] || ((t[qs] = !0), Du("selectionchange", !1, t));
    }
}
function Ov(e, t, n, r) {
    switch (pv(t)) {
        case 1:
            var o = Fb;
            break;
        case 4:
            o = Bb;
            break;
        default:
            o = Qd;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !Ic ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1);
}
function zu(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo),
                            l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Fr(a)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = i = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Zg(function () {
        var u = i,
            d = Gd(n),
            f = [];
        e: {
            var c = $v.get(e);
            if (c !== void 0) {
                var h = Zd,
                    g = e;
                switch (e) {
                    case "keypress":
                        if (ga(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = tx;
                        break;
                    case "focusin":
                        (g = "focus"), (h = Iu);
                        break;
                    case "focusout":
                        (g = "blur"), (h = Iu);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Iu;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = Up;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = Wb;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = ox;
                        break;
                    case Ev:
                    case kv:
                    case Rv:
                        h = Kb;
                        break;
                    case Pv:
                        h = sx;
                        break;
                    case "scroll":
                        h = jb;
                        break;
                    case "wheel":
                        h = lx;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = qb;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Vp;
                }
                var p = (t & 4) !== 0,
                    S = !p && e === "scroll",
                    v = p ? (c !== null ? c + "Capture" : null) : c;
                p = [];
                for (var m = u, y; m !== null; ) {
                    y = m;
                    var x = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            x !== null &&
                            ((y = x),
                            v !== null &&
                                ((x = ts(m, v)),
                                x != null && p.push(ls(m, x, y)))),
                        S)
                    )
                        break;
                    m = m.return;
                }
                0 < p.length &&
                    ((c = new h(c, g, null, n, d)),
                    f.push({ event: c, listeners: p }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((c = e === "mouseover" || e === "pointerover"),
                    (h = e === "mouseout" || e === "pointerout"),
                    c &&
                        n !== Tc &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (Fr(g) || g[Bn]))
                )
                    break e;
                if (
                    (h || c) &&
                    ((c =
                        d.window === d
                            ? d
                            : (c = d.ownerDocument)
                            ? c.defaultView || c.parentWindow
                            : window),
                    h
                        ? ((g = n.relatedTarget || n.toElement),
                          (h = u),
                          (g = g ? Fr(g) : null),
                          g !== null &&
                              ((S = ro(g)),
                              g !== S || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((h = null), (g = u)),
                    h !== g)
                ) {
                    if (
                        ((p = Up),
                        (x = "onMouseLeave"),
                        (v = "onMouseEnter"),
                        (m = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((p = Vp),
                            (x = "onPointerLeave"),
                            (v = "onPointerEnter"),
                            (m = "pointer")),
                        (S = h == null ? c : xo(h)),
                        (y = g == null ? c : xo(g)),
                        (c = new p(x, m + "leave", h, n, d)),
                        (c.target = S),
                        (c.relatedTarget = y),
                        (x = null),
                        Fr(d) === u &&
                            ((p = new p(v, m + "enter", g, n, d)),
                            (p.target = y),
                            (p.relatedTarget = S),
                            (x = p)),
                        (S = x),
                        h && g)
                    )
                        t: {
                            for (p = h, v = g, m = 0, y = p; y; y = oo(y)) m++;
                            for (y = 0, x = v; x; x = oo(x)) y++;
                            for (; 0 < m - y; ) (p = oo(p)), m--;
                            for (; 0 < y - m; ) (v = oo(v)), y--;
                            for (; m--; ) {
                                if (
                                    p === v ||
                                    (v !== null && p === v.alternate)
                                )
                                    break t;
                                (p = oo(p)), (v = oo(v));
                            }
                            p = null;
                        }
                    else p = null;
                    h !== null && th(f, c, h, p, !1),
                        g !== null && S !== null && th(f, S, g, p, !0);
                }
            }
            e: {
                if (
                    ((c = u ? xo(u) : window),
                    (h = c.nodeName && c.nodeName.toLowerCase()),
                    h === "select" || (h === "input" && c.type === "file"))
                )
                    var C = mx;
                else if (Gp(c))
                    if (bv) C = bx;
                    else {
                        C = vx;
                        var k = gx;
                    }
                else
                    (h = c.nodeName) &&
                        h.toLowerCase() === "input" &&
                        (c.type === "checkbox" || c.type === "radio") &&
                        (C = yx);
                if (C && (C = C(e, u))) {
                    yv(f, C, n, d);
                    break e;
                }
                k && k(e, c, u),
                    e === "focusout" &&
                        (k = c._wrapperState) &&
                        k.controlled &&
                        c.type === "number" &&
                        Ec(c, "number", c.value);
            }
            switch (((k = u ? xo(u) : window), e)) {
                case "focusin":
                    (Gp(k) || k.contentEditable === "true") &&
                        ((yo = k), (Lc = u), (ji = null));
                    break;
                case "focusout":
                    ji = Lc = yo = null;
                    break;
                case "mousedown":
                    Dc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Dc = !1), Jp(f, n, d);
                    break;
                case "selectionchange":
                    if (Sx) break;
                case "keydown":
                case "keyup":
                    Jp(f, n, d);
            }
            var E;
            if (tf)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
            else
                vo
                    ? gv(e, n) && (T = "onCompositionEnd")
                    : e === "keydown" &&
                      n.keyCode === 229 &&
                      (T = "onCompositionStart");
            T &&
                (mv &&
                    n.locale !== "ko" &&
                    (vo || T !== "onCompositionStart"
                        ? T === "onCompositionEnd" && vo && (E = hv())
                        : ((rr = d),
                          (Jd = "value" in rr ? rr.value : rr.textContent),
                          (vo = !0))),
                (k = za(u, T)),
                0 < k.length &&
                    ((T = new Wp(T, e, null, n, d)),
                    f.push({ event: T, listeners: k }),
                    E
                        ? (T.data = E)
                        : ((E = vv(n)), E !== null && (T.data = E)))),
                (E = cx ? dx(e, n) : fx(e, n)) &&
                    ((u = za(u, "onBeforeInput")),
                    0 < u.length &&
                        ((d = new Wp(
                            "onBeforeInput",
                            "beforeinput",
                            null,
                            n,
                            d
                        )),
                        f.push({ event: d, listeners: u }),
                        (d.data = E)));
        }
        Tv(f, t);
    });
}
function ls(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function za(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 &&
            i !== null &&
            ((o = i),
            (i = ts(e, n)),
            i != null && r.unshift(ls(e, i, o)),
            (i = ts(e, t)),
            i != null && r.push(ls(e, i, o))),
            (e = e.return);
    }
    return r;
}
function oo(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function th(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            o
                ? ((l = ts(n, i)), l != null && s.unshift(ls(n, l, a)))
                : o || ((l = ts(n, i)), l != null && s.push(ls(n, l, a)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var Rx = /\r\n?/g,
    Px = /\u0000|\uFFFD/g;
function nh(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Rx,
            `
`
        )
        .replace(Px, "");
}
function Ys(e, t, n) {
    if (((t = nh(t)), nh(e) !== t && n)) throw Error(D(425));
}
function Fa() {}
var zc = null,
    Fc = null;
function Bc(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var jc = typeof setTimeout == "function" ? setTimeout : void 0,
    $x = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rh = typeof Promise == "function" ? Promise : void 0,
    Tx =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof rh < "u"
            ? function (e) {
                  return rh.resolve(null).then(e).catch(Ox);
              }
            : jc;
function Ox(e) {
    setTimeout(function () {
        throw e;
    });
}
function Fu(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), os(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    os(t);
}
function ur(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function oh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var oi = Math.random().toString(36).slice(2),
    Cn = "__reactFiber$" + oi,
    us = "__reactProps$" + oi,
    Bn = "__reactContainer$" + oi,
    Uc = "__reactEvents$" + oi,
    Ix = "__reactListeners$" + oi,
    _x = "__reactHandles$" + oi;
function Fr(e) {
    var t = e[Cn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[Bn] || n[Cn])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = oh(e); e !== null; ) {
                    if ((n = e[Cn])) return n;
                    e = oh(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Os(e) {
    return (
        (e = e[Cn] || e[Bn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function xo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(D(33));
}
function vl(e) {
    return e[us] || null;
}
var Wc = [],
    wo = -1;
function Cr(e) {
    return { current: e };
}
function De(e) {
    0 > wo || ((e.current = Wc[wo]), (Wc[wo] = null), wo--);
}
function Ne(e, t) {
    wo++, (Wc[wo] = e.current), (e.current = t);
}
var vr = {},
    wt = Cr(vr),
    Tt = Cr(!1),
    qr = vr;
function Ko(e, t) {
    var n = e.type.contextTypes;
    if (!n) return vr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Ot(e) {
    return (e = e.childContextTypes), e != null;
}
function Ba() {
    De(Tt), De(wt);
}
function ih(e, t, n) {
    if (wt.current !== vr) throw Error(D(168));
    Ne(wt, t), Ne(Tt, n);
}
function Iv(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(D(108, gb(e) || "Unknown", o));
    return We({}, n, r);
}
function ja(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            vr),
        (qr = wt.current),
        Ne(wt, e),
        Ne(Tt, Tt.current),
        !0
    );
}
function sh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(D(169));
    n
        ? ((e = Iv(e, t, qr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          De(Tt),
          De(wt),
          Ne(wt, e))
        : De(Tt),
        Ne(Tt, n);
}
var Mn = null,
    yl = !1,
    Bu = !1;
function _v(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e);
}
function Mx(e) {
    (yl = !0), _v(e);
}
function Er() {
    if (!Bu && Mn !== null) {
        Bu = !0;
        var e = 0,
            t = Re;
        try {
            var n = Mn;
            for (Re = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Mn = null), (yl = !1);
        } catch (o) {
            throw (Mn !== null && (Mn = Mn.slice(e + 1)), rv(qd, Er), o);
        } finally {
            (Re = t), (Bu = !1);
        }
    }
    return null;
}
var So = [],
    Co = 0,
    Ua = null,
    Wa = 0,
    Yt = [],
    Xt = 0,
    Yr = null,
    Nn = 1,
    An = "";
function Or(e, t) {
    (So[Co++] = Wa), (So[Co++] = Ua), (Ua = e), (Wa = t);
}
function Mv(e, t, n) {
    (Yt[Xt++] = Nn), (Yt[Xt++] = An), (Yt[Xt++] = Yr), (Yr = e);
    var r = Nn;
    e = An;
    var o = 32 - hn(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - hn(t) + o;
    if (30 < i) {
        var s = o - (o % 5);
        (i = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (Nn = (1 << (32 - hn(t) + o)) | (n << o) | r),
            (An = i + e);
    } else (Nn = (1 << i) | (n << o) | r), (An = e);
}
function rf(e) {
    e.return !== null && (Or(e, 1), Mv(e, 1, 0));
}
function of(e) {
    for (; e === Ua; )
        (Ua = So[--Co]), (So[Co] = null), (Wa = So[--Co]), (So[Co] = null);
    for (; e === Yr; )
        (Yr = Yt[--Xt]),
            (Yt[Xt] = null),
            (An = Yt[--Xt]),
            (Yt[Xt] = null),
            (Nn = Yt[--Xt]),
            (Yt[Xt] = null);
}
var Ft = null,
    zt = null,
    Be = !1,
    fn = null;
function Nv(e, t) {
    var n = Zt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ah(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Ft = e), (zt = ur(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Ft = e), (zt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Yr !== null ? { id: Nn, overflow: An } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Zt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Ft = e),
                      (zt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Vc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Hc(e) {
    if (Be) {
        var t = zt;
        if (t) {
            var n = t;
            if (!ah(e, t)) {
                if (Vc(e)) throw Error(D(418));
                t = ur(n.nextSibling);
                var r = Ft;
                t && ah(e, t)
                    ? Nv(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (Ft = e));
            }
        } else {
            if (Vc(e)) throw Error(D(418));
            (e.flags = (e.flags & -4097) | 2), (Be = !1), (Ft = e);
        }
    }
}
function lh(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Ft = e;
}
function Xs(e) {
    if (e !== Ft) return !1;
    if (!Be) return lh(e), (Be = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== "head" && t !== "body" && !Bc(e.type, e.memoizedProps))),
        t && (t = zt))
    ) {
        if (Vc(e)) throw (Av(), Error(D(418)));
        for (; t; ) Nv(e, t), (t = ur(t.nextSibling));
    }
    if ((lh(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(D(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            zt = ur(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            zt = null;
        }
    } else zt = Ft ? ur(e.stateNode.nextSibling) : null;
    return !0;
}
function Av() {
    for (var e = zt; e; ) e = ur(e.nextSibling);
}
function Go() {
    (zt = Ft = null), (Be = !1);
}
function sf(e) {
    fn === null ? (fn = [e]) : fn.push(e);
}
var Nx = Kn.ReactCurrentBatchConfig;
function un(e, t) {
    if (e && e.defaultProps) {
        (t = We({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Va = Cr(null),
    Ha = null,
    Eo = null,
    af = null;
function lf() {
    af = Eo = Ha = null;
}
function uf(e) {
    var t = Va.current;
    De(Va), (e._currentValue = t);
}
function Kc(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function No(e, t) {
    (Ha = e),
        (af = Eo = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && ($t = !0), (e.firstContext = null));
}
function tn(e) {
    var t = e._currentValue;
    if (af !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Eo === null)) {
            if (Ha === null) throw Error(D(308));
            (Eo = e), (Ha.dependencies = { lanes: 0, firstContext: e });
        } else Eo = Eo.next = e;
    return t;
}
var Br = null;
function cf(e) {
    Br === null ? (Br = [e]) : Br.push(e);
}
function Lv(e, t, n, r) {
    var o = t.interleaved;
    return (
        o === null ? ((n.next = n), cf(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        jn(e, r)
    );
}
function jn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var Zn = !1;
function df(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function Dv(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Ln(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function cr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), xe & 2)) {
        var o = r.pending;
        return (
            o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
            (r.pending = t),
            jn(e, n)
        );
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), cf(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        jn(e, n)
    );
}
function va(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yd(e, n);
    }
}
function uh(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
            } while (n !== null);
            i === null ? (o = i = t) : (i = i.next = t);
        } else o = i = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function Ka(e, t, n, r) {
    var o = e.updateQueue;
    Zn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
        var d = e.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== s &&
                (a === null ? (d.firstBaseUpdate = u) : (a.next = u),
                (d.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var f = o.baseState;
        (s = 0), (d = u = l = null), (a = i);
        do {
            var c = a.lane,
                h = a.eventTime;
            if ((r & c) === c) {
                d !== null &&
                    (d = d.next =
                        {
                            eventTime: h,
                            lane: 0,
                            tag: a.tag,
                            payload: a.payload,
                            callback: a.callback,
                            next: null,
                        });
                e: {
                    var g = e,
                        p = a;
                    switch (((c = t), (h = n), p.tag)) {
                        case 1:
                            if (((g = p.payload), typeof g == "function")) {
                                f = g.call(h, f, c);
                                break e;
                            }
                            f = g;
                            break e;
                        case 3:
                            g.flags = (g.flags & -65537) | 128;
                        case 0:
                            if (
                                ((g = p.payload),
                                (c =
                                    typeof g == "function"
                                        ? g.call(h, f, c)
                                        : g),
                                c == null)
                            )
                                break e;
                            f = We({}, f, c);
                            break e;
                        case 2:
                            Zn = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64),
                    (c = o.effects),
                    c === null ? (o.effects = [a]) : c.push(a));
            } else
                (h = {
                    eventTime: h,
                    lane: c,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                }),
                    d === null ? ((u = d = h), (l = f)) : (d = d.next = h),
                    (s |= c);
            if (((a = a.next), a === null)) {
                if (((a = o.shared.pending), a === null)) break;
                (c = a),
                    (a = c.next),
                    (c.next = null),
                    (o.lastBaseUpdate = c),
                    (o.shared.pending = null);
            }
        } while (1);
        if (
            (d === null && (l = f),
            (o.baseState = l),
            (o.firstBaseUpdate = u),
            (o.lastBaseUpdate = d),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else i === null && (o.shared.lanes = 0);
        (Qr |= s), (e.lanes = s), (e.memoizedState = f);
    }
}
function ch(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function"))
                    throw Error(D(191, o));
                o.call(r);
            }
        }
}
var zv = new Lg.Component().refs;
function Gc(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : We({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? ro(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ct(),
            o = fr(e),
            i = Ln(r, o);
        (i.payload = t),
            n != null && (i.callback = n),
            (t = cr(e, i, o)),
            t !== null && (mn(t, e, o, r), va(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ct(),
            o = fr(e),
            i = Ln(r, o);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = cr(e, i, o)),
            t !== null && (mn(t, e, o, r), va(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ct(),
            r = fr(e),
            o = Ln(n, r);
        (o.tag = 2),
            t != null && (o.callback = t),
            (t = cr(e, o, r)),
            t !== null && (mn(t, e, r, n), va(t, e, r));
    },
};
function dh(e, t, n, r, o, i, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, s)
            : t.prototype && t.prototype.isPureReactComponent
            ? !ss(n, r) || !ss(o, i)
            : !0
    );
}
function Fv(e, t, n) {
    var r = !1,
        o = vr,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = tn(i))
            : ((o = Ot(t) ? qr : wt.current),
              (r = t.contextTypes),
              (i = (r = r != null) ? Ko(e, o) : vr)),
        (t = new t(n, i)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = bl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function fh(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && bl.enqueueReplaceState(t, t.state, null);
}
function qc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = zv), df(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
        ? (o.context = tn(i))
        : ((i = Ot(t) ? qr : wt.current), (o.context = Ko(e, i))),
        (o.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Gc(e, t, i, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" &&
                typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" &&
                o.UNSAFE_componentWillMount(),
            t !== o.state && bl.enqueueReplaceState(o, o.state, null),
            Ka(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yi(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(D(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(D(147, e));
            var o = r,
                i = "" + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == "function" &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (s) {
                      var a = o.refs;
                      a === zv && (a = o.refs = {}),
                          s === null ? delete a[i] : (a[i] = s);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(D(284));
        if (!n._owner) throw Error(D(290, e));
    }
    return e;
}
function Qs(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            D(
                31,
                e === "[object Object]"
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e
            )
        ))
    );
}
function ph(e) {
    var t = e._init;
    return t(e._payload);
}
function Bv(e) {
    function t(v, m) {
        if (e) {
            var y = v.deletions;
            y === null ? ((v.deletions = [m]), (v.flags |= 16)) : y.push(m);
        }
    }
    function n(v, m) {
        if (!e) return null;
        for (; m !== null; ) t(v, m), (m = m.sibling);
        return null;
    }
    function r(v, m) {
        for (v = new Map(); m !== null; )
            m.key !== null ? v.set(m.key, m) : v.set(m.index, m),
                (m = m.sibling);
        return v;
    }
    function o(v, m) {
        return (v = pr(v, m)), (v.index = 0), (v.sibling = null), v;
    }
    function i(v, m, y) {
        return (
            (v.index = y),
            e
                ? ((y = v.alternate),
                  y !== null
                      ? ((y = y.index), y < m ? ((v.flags |= 2), m) : y)
                      : ((v.flags |= 2), m))
                : ((v.flags |= 1048576), m)
        );
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2), v;
    }
    function a(v, m, y, x) {
        return m === null || m.tag !== 6
            ? ((m = Gu(y, v.mode, x)), (m.return = v), m)
            : ((m = o(m, y)), (m.return = v), m);
    }
    function l(v, m, y, x) {
        var C = y.type;
        return C === go
            ? d(v, m, y.props.children, x, y.key)
            : m !== null &&
              (m.elementType === C ||
                  (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Jn &&
                      ph(C) === m.type))
            ? ((x = o(m, y.props)), (x.ref = yi(v, m, y)), (x.return = v), x)
            : ((x = Ca(y.type, y.key, y.props, null, v.mode, x)),
              (x.ref = yi(v, m, y)),
              (x.return = v),
              x);
    }
    function u(v, m, y, x) {
        return m === null ||
            m.tag !== 4 ||
            m.stateNode.containerInfo !== y.containerInfo ||
            m.stateNode.implementation !== y.implementation
            ? ((m = qu(y, v.mode, x)), (m.return = v), m)
            : ((m = o(m, y.children || [])), (m.return = v), m);
    }
    function d(v, m, y, x, C) {
        return m === null || m.tag !== 7
            ? ((m = Hr(y, v.mode, x, C)), (m.return = v), m)
            : ((m = o(m, y)), (m.return = v), m);
    }
    function f(v, m, y) {
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return (m = Gu("" + m, v.mode, y)), (m.return = v), m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Bs:
                    return (
                        (y = Ca(m.type, m.key, m.props, null, v.mode, y)),
                        (y.ref = yi(v, null, m)),
                        (y.return = v),
                        y
                    );
                case mo:
                    return (m = qu(m, v.mode, y)), (m.return = v), m;
                case Jn:
                    var x = m._init;
                    return f(v, x(m._payload), y);
            }
            if (Oi(m) || pi(m))
                return (m = Hr(m, v.mode, y, null)), (m.return = v), m;
            Qs(v, m);
        }
        return null;
    }
    function c(v, m, y, x) {
        var C = m !== null ? m.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number")
            return C !== null ? null : a(v, m, "" + y, x);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Bs:
                    return y.key === C ? l(v, m, y, x) : null;
                case mo:
                    return y.key === C ? u(v, m, y, x) : null;
                case Jn:
                    return (C = y._init), c(v, m, C(y._payload), x);
            }
            if (Oi(y) || pi(y)) return C !== null ? null : d(v, m, y, x, null);
            Qs(v, y);
        }
        return null;
    }
    function h(v, m, y, x, C) {
        if ((typeof x == "string" && x !== "") || typeof x == "number")
            return (v = v.get(y) || null), a(m, v, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
                case Bs:
                    return (
                        (v = v.get(x.key === null ? y : x.key) || null),
                        l(m, v, x, C)
                    );
                case mo:
                    return (
                        (v = v.get(x.key === null ? y : x.key) || null),
                        u(m, v, x, C)
                    );
                case Jn:
                    var k = x._init;
                    return h(v, m, y, k(x._payload), C);
            }
            if (Oi(x) || pi(x))
                return (v = v.get(y) || null), d(m, v, x, C, null);
            Qs(m, x);
        }
        return null;
    }
    function g(v, m, y, x) {
        for (
            var C = null, k = null, E = m, T = (m = 0), O = null;
            E !== null && T < y.length;
            T++
        ) {
            E.index > T ? ((O = E), (E = null)) : (O = E.sibling);
            var P = c(v, E, y[T], x);
            if (P === null) {
                E === null && (E = O);
                break;
            }
            e && E && P.alternate === null && t(v, E),
                (m = i(P, m, T)),
                k === null ? (C = P) : (k.sibling = P),
                (k = P),
                (E = O);
        }
        if (T === y.length) return n(v, E), Be && Or(v, T), C;
        if (E === null) {
            for (; T < y.length; T++)
                (E = f(v, y[T], x)),
                    E !== null &&
                        ((m = i(E, m, T)),
                        k === null ? (C = E) : (k.sibling = E),
                        (k = E));
            return Be && Or(v, T), C;
        }
        for (E = r(v, E); T < y.length; T++)
            (O = h(E, v, T, y[T], x)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        E.delete(O.key === null ? T : O.key),
                    (m = i(O, m, T)),
                    k === null ? (C = O) : (k.sibling = O),
                    (k = O));
        return (
            e &&
                E.forEach(function (z) {
                    return t(v, z);
                }),
            Be && Or(v, T),
            C
        );
    }
    function p(v, m, y, x) {
        var C = pi(y);
        if (typeof C != "function") throw Error(D(150));
        if (((y = C.call(y)), y == null)) throw Error(D(151));
        for (
            var k = (C = null), E = m, T = (m = 0), O = null, P = y.next();
            E !== null && !P.done;
            T++, P = y.next()
        ) {
            E.index > T ? ((O = E), (E = null)) : (O = E.sibling);
            var z = c(v, E, P.value, x);
            if (z === null) {
                E === null && (E = O);
                break;
            }
            e && E && z.alternate === null && t(v, E),
                (m = i(z, m, T)),
                k === null ? (C = z) : (k.sibling = z),
                (k = z),
                (E = O);
        }
        if (P.done) return n(v, E), Be && Or(v, T), C;
        if (E === null) {
            for (; !P.done; T++, P = y.next())
                (P = f(v, P.value, x)),
                    P !== null &&
                        ((m = i(P, m, T)),
                        k === null ? (C = P) : (k.sibling = P),
                        (k = P));
            return Be && Or(v, T), C;
        }
        for (E = r(v, E); !P.done; T++, P = y.next())
            (P = h(E, v, T, P.value, x)),
                P !== null &&
                    (e &&
                        P.alternate !== null &&
                        E.delete(P.key === null ? T : P.key),
                    (m = i(P, m, T)),
                    k === null ? (C = P) : (k.sibling = P),
                    (k = P));
        return (
            e &&
                E.forEach(function (G) {
                    return t(v, G);
                }),
            Be && Or(v, T),
            C
        );
    }
    function S(v, m, y, x) {
        if (
            (typeof y == "object" &&
                y !== null &&
                y.type === go &&
                y.key === null &&
                (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case Bs:
                    e: {
                        for (var C = y.key, k = m; k !== null; ) {
                            if (k.key === C) {
                                if (((C = y.type), C === go)) {
                                    if (k.tag === 7) {
                                        n(v, k.sibling),
                                            (m = o(k, y.props.children)),
                                            (m.return = v),
                                            (v = m);
                                        break e;
                                    }
                                } else if (
                                    k.elementType === C ||
                                    (typeof C == "object" &&
                                        C !== null &&
                                        C.$$typeof === Jn &&
                                        ph(C) === k.type)
                                ) {
                                    n(v, k.sibling),
                                        (m = o(k, y.props)),
                                        (m.ref = yi(v, k, y)),
                                        (m.return = v),
                                        (v = m);
                                    break e;
                                }
                                n(v, k);
                                break;
                            } else t(v, k);
                            k = k.sibling;
                        }
                        y.type === go
                            ? ((m = Hr(y.props.children, v.mode, x, y.key)),
                              (m.return = v),
                              (v = m))
                            : ((x = Ca(
                                  y.type,
                                  y.key,
                                  y.props,
                                  null,
                                  v.mode,
                                  x
                              )),
                              (x.ref = yi(v, m, y)),
                              (x.return = v),
                              (v = x));
                    }
                    return s(v);
                case mo:
                    e: {
                        for (k = y.key; m !== null; ) {
                            if (m.key === k)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo ===
                                        y.containerInfo &&
                                    m.stateNode.implementation ===
                                        y.implementation
                                ) {
                                    n(v, m.sibling),
                                        (m = o(m, y.children || [])),
                                        (m.return = v),
                                        (v = m);
                                    break e;
                                } else {
                                    n(v, m);
                                    break;
                                }
                            else t(v, m);
                            m = m.sibling;
                        }
                        (m = qu(y, v.mode, x)), (m.return = v), (v = m);
                    }
                    return s(v);
                case Jn:
                    return (k = y._init), S(v, m, k(y._payload), x);
            }
            if (Oi(y)) return g(v, m, y, x);
            if (pi(y)) return p(v, m, y, x);
            Qs(v, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              m !== null && m.tag === 6
                  ? (n(v, m.sibling), (m = o(m, y)), (m.return = v), (v = m))
                  : (n(v, m), (m = Gu(y, v.mode, x)), (m.return = v), (v = m)),
              s(v))
            : n(v, m);
    }
    return S;
}
var qo = Bv(!0),
    jv = Bv(!1),
    Is = {},
    Rn = Cr(Is),
    cs = Cr(Is),
    ds = Cr(Is);
function jr(e) {
    if (e === Is) throw Error(D(174));
    return e;
}
function ff(e, t) {
    switch ((Ne(ds, t), Ne(cs, e), Ne(Rn, Is), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Rc(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Rc(t, e));
    }
    De(Rn), Ne(Rn, t);
}
function Yo() {
    De(Rn), De(cs), De(ds);
}
function Uv(e) {
    jr(ds.current);
    var t = jr(Rn.current),
        n = Rc(t, e.type);
    t !== n && (Ne(cs, e), Ne(Rn, n));
}
function pf(e) {
    cs.current === e && (De(Rn), De(cs));
}
var je = Cr(0);
function Ga(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === "$?" || n.data === "$!")
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var ju = [];
function hf() {
    for (var e = 0; e < ju.length; e++)
        ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0;
}
var ya = Kn.ReactCurrentDispatcher,
    Uu = Kn.ReactCurrentBatchConfig,
    Xr = 0,
    Ue = null,
    tt = null,
    it = null,
    qa = !1,
    Ui = !1,
    fs = 0,
    Ax = 0;
function gt() {
    throw Error(D(321));
}
function mf(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!gn(e[n], t[n])) return !1;
    return !0;
}
function gf(e, t, n, r, o, i) {
    if (
        ((Xr = i),
        (Ue = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (ya.current = e === null || e.memoizedState === null ? Fx : Bx),
        (e = n(r, o)),
        Ui)
    ) {
        i = 0;
        do {
            if (((Ui = !1), (fs = 0), 25 <= i)) throw Error(D(301));
            (i += 1),
                (it = tt = null),
                (t.updateQueue = null),
                (ya.current = jx),
                (e = n(r, o));
        } while (Ui);
    }
    if (
        ((ya.current = Ya),
        (t = tt !== null && tt.next !== null),
        (Xr = 0),
        (it = tt = Ue = null),
        (qa = !1),
        t)
    )
        throw Error(D(300));
    return e;
}
function vf() {
    var e = fs !== 0;
    return (fs = 0), e;
}
function xn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return it === null ? (Ue.memoizedState = it = e) : (it = it.next = e), it;
}
function nn() {
    if (tt === null) {
        var e = Ue.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = it === null ? Ue.memoizedState : it.next;
    if (t !== null) (it = t), (tt = e);
    else {
        if (e === null) throw Error(D(310));
        (tt = e),
            (e = {
                memoizedState: tt.memoizedState,
                baseState: tt.baseState,
                baseQueue: tt.baseQueue,
                queue: tt.queue,
                next: null,
            }),
            it === null ? (Ue.memoizedState = it = e) : (it = it.next = e);
    }
    return it;
}
function ps(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Wu(e) {
    var t = nn(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = tt,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = i.next), (i.next = s);
        }
        (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
        (i = o.next), (r = r.baseState);
        var a = (s = null),
            l = null,
            u = i;
        do {
            var d = u.lane;
            if ((Xr & d) === d)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
                    (Ue.lanes |= d),
                    (Qr |= d);
            }
            u = u.next;
        } while (u !== null && u !== i);
        l === null ? (s = r) : (l.next = a),
            gn(r, t.memoizedState) || ($t = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (i = o.lane), (Ue.lanes |= i), (Qr |= i), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Vu(e) {
    var t = nn(),
        n = t.queue;
    if (n === null) throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (i = e(i, s.action)), (s = s.next);
        while (s !== o);
        gn(i, t.memoizedState) || ($t = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function Wv() {}
function Vv(e, t) {
    var n = Ue,
        r = nn(),
        o = t(),
        i = !gn(r.memoizedState, o);
    if (
        (i && ((r.memoizedState = o), ($t = !0)),
        (r = r.queue),
        yf(Gv.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (it !== null && it.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            hs(9, Kv.bind(null, n, r, o, t), void 0, null),
            at === null)
        )
            throw Error(D(349));
        Xr & 30 || Hv(n, t, o);
    }
    return o;
}
function Hv(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = Ue.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Ue.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Kv(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), qv(t) && Yv(e);
}
function Gv(e, t, n) {
    return n(function () {
        qv(t) && Yv(e);
    });
}
function qv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !gn(e, n);
    } catch {
        return !0;
    }
}
function Yv(e) {
    var t = jn(e, 1);
    t !== null && mn(t, e, 1, -1);
}
function hh(e) {
    var t = xn();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ps,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = zx.bind(null, Ue, e)),
        [t.memoizedState, e]
    );
}
function hs(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = Ue.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (Ue.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function Xv() {
    return nn().memoizedState;
}
function ba(e, t, n, r) {
    var o = xn();
    (Ue.flags |= e),
        (o.memoizedState = hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function xl(e, t, n, r) {
    var o = nn();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (tt !== null) {
        var s = tt.memoizedState;
        if (((i = s.destroy), r !== null && mf(r, s.deps))) {
            o.memoizedState = hs(t, n, i, r);
            return;
        }
    }
    (Ue.flags |= e), (o.memoizedState = hs(1 | t, n, i, r));
}
function mh(e, t) {
    return ba(8390656, 8, e, t);
}
function yf(e, t) {
    return xl(2048, 8, e, t);
}
function Qv(e, t) {
    return xl(4, 2, e, t);
}
function Jv(e, t) {
    return xl(4, 4, e, t);
}
function Zv(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function ey(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), xl(4, 4, Zv.bind(null, t, e), n)
    );
}
function bf() {}
function ty(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mf(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function ny(e, t) {
    var n = nn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mf(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ry(e, t, n) {
    return Xr & 21
        ? (gn(n, t) ||
              ((n = sv()), (Ue.lanes |= n), (Qr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), ($t = !0)),
          (e.memoizedState = n));
}
function Lx(e, t) {
    var n = Re;
    (Re = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Uu.transition;
    Uu.transition = {};
    try {
        e(!1), t();
    } finally {
        (Re = n), (Uu.transition = r);
    }
}
function oy() {
    return nn().memoizedState;
}
function Dx(e, t, n) {
    var r = fr(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        iy(e))
    )
        sy(t, n);
    else if (((n = Lv(e, t, n, r)), n !== null)) {
        var o = Ct();
        mn(n, e, r, o), ay(n, t, r);
    }
}
function zx(e, t, n) {
    var r = fr(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (iy(e)) sy(t, o);
    else {
        var i = e.alternate;
        if (
            e.lanes === 0 &&
            (i === null || i.lanes === 0) &&
            ((i = t.lastRenderedReducer), i !== null)
        )
            try {
                var s = t.lastRenderedState,
                    a = i(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = a), gn(a, s))) {
                    var l = t.interleaved;
                    l === null
                        ? ((o.next = o), cf(t))
                        : ((o.next = l.next), (l.next = o)),
                        (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Lv(e, t, o, r)),
            n !== null && ((o = Ct()), mn(n, e, r, o), ay(n, t, r));
    }
}
function iy(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
}
function sy(e, t) {
    Ui = qa = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function ay(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yd(e, n);
    }
}
var Ya = {
        readContext: tn,
        useCallback: gt,
        useContext: gt,
        useEffect: gt,
        useImperativeHandle: gt,
        useInsertionEffect: gt,
        useLayoutEffect: gt,
        useMemo: gt,
        useReducer: gt,
        useRef: gt,
        useState: gt,
        useDebugValue: gt,
        useDeferredValue: gt,
        useTransition: gt,
        useMutableSource: gt,
        useSyncExternalStore: gt,
        useId: gt,
        unstable_isNewReconciler: !1,
    },
    Fx = {
        readContext: tn,
        useCallback: function (e, t) {
            return (xn().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: tn,
        useEffect: mh,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                ba(4194308, 4, Zv.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return ba(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return ba(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = xn();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = xn();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Dx.bind(null, Ue, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = xn();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: hh,
        useDebugValue: bf,
        useDeferredValue: function (e) {
            return (xn().memoizedState = e);
        },
        useTransition: function () {
            var e = hh(!1),
                t = e[0];
            return (e = Lx.bind(null, e[1])), (xn().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Ue,
                o = xn();
            if (Be) {
                if (n === void 0) throw Error(D(407));
                n = n();
            } else {
                if (((n = t()), at === null)) throw Error(D(349));
                Xr & 30 || Hv(r, t, n);
            }
            o.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (o.queue = i),
                mh(Gv.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                hs(9, Kv.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = xn(),
                t = at.identifierPrefix;
            if (Be) {
                var n = An,
                    r = Nn;
                (n = (r & ~(1 << (32 - hn(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = fs++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = Ax++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Bx = {
        readContext: tn,
        useCallback: ty,
        useContext: tn,
        useEffect: yf,
        useImperativeHandle: ey,
        useInsertionEffect: Qv,
        useLayoutEffect: Jv,
        useMemo: ny,
        useReducer: Wu,
        useRef: Xv,
        useState: function () {
            return Wu(ps);
        },
        useDebugValue: bf,
        useDeferredValue: function (e) {
            var t = nn();
            return ry(t, tt.memoizedState, e);
        },
        useTransition: function () {
            var e = Wu(ps)[0],
                t = nn().memoizedState;
            return [e, t];
        },
        useMutableSource: Wv,
        useSyncExternalStore: Vv,
        useId: oy,
        unstable_isNewReconciler: !1,
    },
    jx = {
        readContext: tn,
        useCallback: ty,
        useContext: tn,
        useEffect: yf,
        useImperativeHandle: ey,
        useInsertionEffect: Qv,
        useLayoutEffect: Jv,
        useMemo: ny,
        useReducer: Vu,
        useRef: Xv,
        useState: function () {
            return Vu(ps);
        },
        useDebugValue: bf,
        useDeferredValue: function (e) {
            var t = nn();
            return tt === null
                ? (t.memoizedState = e)
                : ry(t, tt.memoizedState, e);
        },
        useTransition: function () {
            var e = Vu(ps)[0],
                t = nn().memoizedState;
            return [e, t];
        },
        useMutableSource: Wv,
        useSyncExternalStore: Vv,
        useId: oy,
        unstable_isNewReconciler: !1,
    };
function Xo(e, t) {
    try {
        var n = "",
            r = t;
        do (n += mb(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (i) {
        o =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Hu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Yc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Ux = typeof WeakMap == "function" ? WeakMap : Map;
function ly(e, t, n) {
    (n = Ln(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Qa || ((Qa = !0), (id = r)), Yc(e, t);
        }),
        n
    );
}
function uy(e, t, n) {
    (n = Ln(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Yc(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                Yc(e, t),
                    typeof r != "function" &&
                        (dr === null ? (dr = new Set([this])) : dr.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: s !== null ? s : "",
                });
            }),
        n
    );
}
function gh(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ux();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = nw.bind(null, e, t, n)), t.then(e, e));
}
function vh(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function yh(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Ln(-1, 1)), (t.tag = 2), cr(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Wx = Kn.ReactCurrentOwner,
    $t = !1;
function St(e, t, n, r) {
    t.child = e === null ? jv(t, null, n, r) : qo(t, e.child, n, r);
}
function bh(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
        No(t, o),
        (r = gf(e, t, n, r, i, o)),
        (n = vf()),
        e !== null && !$t
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Un(e, t, o))
            : (Be && n && rf(t), (t.flags |= 1), St(e, t, r, o), t.child)
    );
}
function xh(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !Pf(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), cy(e, t, i, r, o))
            : ((e = Ca(n.type, null, r, t, t.mode, o)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
        var s = i.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : ss),
            n(s, r) && e.ref === t.ref)
        )
            return Un(e, t, o);
    }
    return (
        (t.flags |= 1),
        (e = pr(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function cy(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ss(i, r) && e.ref === t.ref)
            if ((($t = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
                e.flags & 131072 && ($t = !0);
            else return (t.lanes = e.lanes), Un(e, t, o);
    }
    return Xc(e, t, n, r, o);
}
function dy(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                Ne(Ro, Lt),
                (Lt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    Ne(Ro, Lt),
                    (Lt |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = i !== null ? i.baseLanes : n),
                Ne(Ro, Lt),
                (Lt |= r);
        }
    else
        i !== null
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Ne(Ro, Lt),
            (Lt |= r);
    return St(e, t, o, n), t.child;
}
function fy(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function Xc(e, t, n, r, o) {
    var i = Ot(n) ? qr : wt.current;
    return (
        (i = Ko(t, i)),
        No(t, o),
        (n = gf(e, t, n, r, i, o)),
        (r = vf()),
        e !== null && !$t
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~o),
              Un(e, t, o))
            : (Be && r && rf(t), (t.flags |= 1), St(e, t, n, o), t.child)
    );
}
function wh(e, t, n, r, o) {
    if (Ot(n)) {
        var i = !0;
        ja(t);
    } else i = !1;
    if ((No(t, o), t.stateNode === null))
        xa(e, t), Fv(t, n, r), qc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null
            ? (u = tn(u))
            : ((u = Ot(n) ? qr : wt.current), (u = Ko(t, u)));
        var d = n.getDerivedStateFromProps,
            f =
                typeof d == "function" ||
                typeof s.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== r || l !== u) && fh(t, s, r, u)),
            (Zn = !1);
        var c = t.memoizedState;
        (s.state = c),
            Ka(t, r, s, o),
            (l = t.memoizedState),
            a !== r || c !== l || Tt.current || Zn
                ? (typeof d == "function" &&
                      (Gc(t, n, d, r), (l = t.memoizedState)),
                  (a = Zn || dh(t, n, a, r, c, l, u))
                      ? (f ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" &&
                                s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" &&
                                s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = u),
                  (r = a))
                : (typeof s.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (s = t.stateNode),
            Dv(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : un(t.type, a)),
            (s.props = u),
            (f = t.pendingProps),
            (c = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null
                ? (l = tn(l))
                : ((l = Ot(n) ? qr : wt.current), (l = Ko(t, l)));
        var h = n.getDerivedStateFromProps;
        (d =
            typeof h == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((a !== f || c !== l) && fh(t, s, r, l)),
            (Zn = !1),
            (c = t.memoizedState),
            (s.state = c),
            Ka(t, r, s, o);
        var g = t.memoizedState;
        a !== f || c !== g || Tt.current || Zn
            ? (typeof h == "function" &&
                  (Gc(t, n, h, r), (g = t.memoizedState)),
              (u = Zn || dh(t, n, u, r, c, g, l) || !1)
                  ? (d ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" &&
                            s.componentWillUpdate(r, g, l),
                        typeof s.UNSAFE_componentWillUpdate == "function" &&
                            s.UNSAFE_componentWillUpdate(r, g, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" &&
                        (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && c === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && c === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (s.props = r),
              (s.state = g),
              (s.context = l),
              (r = u))
            : (typeof s.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && c === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && c === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Qc(e, t, n, r, i, o);
}
function Qc(e, t, n, r, o, i) {
    fy(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && sh(t, n, !1), Un(e, t, i);
    (r = t.stateNode), (Wx.current = t);
    var a =
        s && typeof n.getDerivedStateFromError != "function"
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && s
            ? ((t.child = qo(t, e.child, null, i)),
              (t.child = qo(t, null, a, i)))
            : St(e, t, a, i),
        (t.memoizedState = r.state),
        o && sh(t, n, !0),
        t.child
    );
}
function py(e) {
    var t = e.stateNode;
    t.pendingContext
        ? ih(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && ih(e, t.context, !1),
        ff(e, t.containerInfo);
}
function Sh(e, t, n, r, o) {
    return Go(), sf(o), (t.flags |= 256), St(e, t, n, r), t.child;
}
var Jc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function hy(e, t, n) {
    var r = t.pendingProps,
        o = je.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (
        ((a = s) ||
            (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        a
            ? ((i = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (o |= 1),
        Ne(je, o & 1),
        e === null)
    )
        return (
            Hc(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === "$!"
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((s = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && i !== null
                            ? ((i.childLanes = 0), (i.pendingProps = s))
                            : (i = Cl(s, r, 0, null)),
                        (e = Hr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = Zc(n)),
                        (t.memoizedState = Jc),
                        e)
                      : xf(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
        return Vx(e, t, s, r, a, o, n);
    if (i) {
        (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = l),
                  (t.deletions = null))
                : ((r = pr(o, l)),
                  (r.subtreeFlags = o.subtreeFlags & 14680064)),
            a !== null
                ? (i = pr(a, i))
                : ((i = Hr(i, s, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (s = e.child.memoizedState),
            (s =
                s === null
                    ? Zc(n)
                    : {
                          baseLanes: s.baseLanes | n,
                          cachePool: null,
                          transitions: s.transitions,
                      }),
            (i.memoizedState = s),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = Jc),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = pr(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function xf(e, t) {
    return (
        (t = Cl({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Js(e, t, n, r) {
    return (
        r !== null && sf(r),
        qo(t, e.child, null, n),
        (e = xf(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Vx(e, t, n, r, o, i, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Hu(Error(D(422)))), Js(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (o = t.mode),
              (r = Cl({ mode: "visible", children: r.children }, o, 0, null)),
              (i = Hr(i, o, s, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && qo(t, e.child, null, s),
              (t.child.memoizedState = Zc(s)),
              (t.memoizedState = Jc),
              i);
    if (!(t.mode & 1)) return Js(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
        return (
            (r = a), (i = Error(D(419))), (r = Hu(i, r, void 0)), Js(e, t, s, r)
        );
    }
    if (((a = (s & e.childLanes) !== 0), $t || a)) {
        if (((r = at), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), jn(e, o), mn(r, e, o, -1));
        }
        return Rf(), (r = Hu(Error(D(421)))), Js(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = rw.bind(null, e)),
          (o._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (zt = ur(o.nextSibling)),
          (Ft = t),
          (Be = !0),
          (fn = null),
          e !== null &&
              ((Yt[Xt++] = Nn),
              (Yt[Xt++] = An),
              (Yt[Xt++] = Yr),
              (Nn = e.id),
              (An = e.overflow),
              (Yr = t)),
          (t = xf(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Ch(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Kc(e.return, t, n);
}
function Ku(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o));
}
function my(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ((St(e, t, r.children, n), (r = je.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Ch(e, n, t);
                else if (e.tag === 19) Ch(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((Ne(je, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate),
                        e !== null && Ga(e) === null && (o = n),
                        (n = n.sibling);
                (n = o),
                    n === null
                        ? ((o = t.child), (t.child = null))
                        : ((o = n.sibling), (n.sibling = null)),
                    Ku(t, !1, o, n, i);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && Ga(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ku(t, !0, n, null, i);
                break;
            case "together":
                Ku(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function xa(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Un(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Qr |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(D(153));
    if (t.child !== null) {
        for (
            e = t.child, n = pr(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = pr(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Hx(e, t, n) {
    switch (t.tag) {
        case 3:
            py(t), Go();
            break;
        case 5:
            Uv(t);
            break;
        case 1:
            Ot(t.type) && ja(t);
            break;
        case 4:
            ff(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            Ne(Va, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (Ne(je, je.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? hy(e, t, n)
                    : (Ne(je, je.current & 1),
                      (e = Un(e, t, n)),
                      e !== null ? e.sibling : null);
            Ne(je, je.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return my(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null &&
                    ((o.rendering = null),
                    (o.tail = null),
                    (o.lastEffect = null)),
                Ne(je, je.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), dy(e, t, n);
    }
    return Un(e, t, n);
}
var gy, ed, vy, yy;
gy = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ed = function () {};
vy = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), jr(Rn.current);
        var i = null;
        switch (n) {
            case "input":
                (o = Sc(e, o)), (r = Sc(e, r)), (i = []);
                break;
            case "select":
                (o = We({}, o, { value: void 0 })),
                    (r = We({}, r, { value: void 0 })),
                    (i = []);
                break;
            case "textarea":
                (o = kc(e, o)), (r = kc(e, r)), (i = []);
                break;
            default:
                typeof o.onClick != "function" &&
                    typeof r.onClick == "function" &&
                    (e.onclick = Fa);
        }
        Pc(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a)
                        a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (Zi.hasOwnProperty(u)
                            ? i || (i = [])
                            : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (
                ((a = o != null ? o[u] : void 0),
                r.hasOwnProperty(u) && l !== a && (l != null || a != null))
            )
                if (u === "style")
                    if (a) {
                        for (s in a)
                            !a.hasOwnProperty(s) ||
                                (l && l.hasOwnProperty(s)) ||
                                (n || (n = {}), (n[s] = ""));
                        for (s in l)
                            l.hasOwnProperty(s) &&
                                a[s] !== l[s] &&
                                (n || (n = {}), (n[s] = l[s]));
                    } else n || (i || (i = []), i.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(u, l))
                        : u === "children"
                        ? (typeof l != "string" && typeof l != "number") ||
                          (i = i || []).push(u, "" + l)
                        : u !== "suppressContentEditableWarning" &&
                          u !== "suppressHydrationWarning" &&
                          (Zi.hasOwnProperty(u)
                              ? (l != null &&
                                    u === "onScroll" &&
                                    Le("scroll", e),
                                i || a === l || (i = []))
                              : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
yy = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function bi(e, t) {
    if (!Be)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function vt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Kx(e, t, n) {
    var r = t.pendingProps;
    switch ((of(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return vt(t), null;
        case 1:
            return Ot(t.type) && Ba(), vt(t), null;
        case 3:
            return (
                (r = t.stateNode),
                Yo(),
                De(Tt),
                De(wt),
                hf(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Xs(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          fn !== null && (ld(fn), (fn = null)))),
                ed(e, t),
                vt(t),
                null
            );
        case 5:
            pf(t);
            var o = jr(ds.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                vy(e, t, n, r, o),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(D(166));
                    return vt(t), null;
                }
                if (((e = jr(Rn.current)), Xs(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (
                        ((r[Cn] = t), (r[us] = i), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case "dialog":
                            Le("cancel", r), Le("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Le("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < _i.length; o++) Le(_i[o], r);
                            break;
                        case "source":
                            Le("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Le("error", r), Le("load", r);
                            break;
                        case "details":
                            Le("toggle", r);
                            break;
                        case "input":
                            _p(r, i), Le("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }),
                                Le("invalid", r);
                            break;
                        case "textarea":
                            Np(r, i), Le("invalid", r);
                    }
                    Pc(n, i), (o = null);
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ys(r.textContent, a, e),
                                      (o = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 &&
                                          Ys(r.textContent, a, e),
                                      (o = ["children", "" + a]))
                                : Zi.hasOwnProperty(s) &&
                                  a != null &&
                                  s === "onScroll" &&
                                  Le("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            js(r), Mp(r, i, !0);
                            break;
                        case "textarea":
                            js(r), Ap(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Fa);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Hg(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)),
                                  n === "select" &&
                                      ((s = e),
                                      r.multiple
                                          ? (s.multiple = !0)
                                          : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Cn] = t),
                        (e[us] = r),
                        gy(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = $c(n, r)), n)) {
                            case "dialog":
                                Le("cancel", e), Le("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Le("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < _i.length; o++) Le(_i[o], e);
                                o = r;
                                break;
                            case "source":
                                Le("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Le("error", e), Le("load", e), (o = r);
                                break;
                            case "details":
                                Le("toggle", e), (o = r);
                                break;
                            case "input":
                                _p(e, r), (o = Sc(e, r)), Le("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (o = We({}, r, { value: void 0 })),
                                    Le("invalid", e);
                                break;
                            case "textarea":
                                Np(e, r), (o = kc(e, r)), Le("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        Pc(n, o), (a = o);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? qg(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                    ? ((l = l ? l.__html : void 0),
                                      l != null && Kg(e, l))
                                    : i === "children"
                                    ? typeof l == "string"
                                        ? (n !== "textarea" || l !== "") &&
                                          es(e, l)
                                        : typeof l == "number" && es(e, "" + l)
                                    : i !== "suppressContentEditableWarning" &&
                                      i !== "suppressHydrationWarning" &&
                                      i !== "autoFocus" &&
                                      (Zi.hasOwnProperty(i)
                                          ? l != null &&
                                            i === "onScroll" &&
                                            Le("scroll", e)
                                          : l != null && Wd(e, i, l, s));
                            }
                        switch (n) {
                            case "input":
                                js(e), Mp(e, r, !1);
                                break;
                            case "textarea":
                                js(e), Ap(e);
                                break;
                            case "option":
                                r.value != null &&
                                    e.setAttribute("value", "" + gr(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Oo(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null &&
                                          Oo(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof o.onClick == "function" &&
                                    (e.onclick = Fa);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return vt(t), null;
        case 6:
            if (e && t.stateNode != null) yy(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null)
                    throw Error(D(166));
                if (((n = jr(ds.current)), jr(Rn.current), Xs(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Cn] = t),
                        (i = r.nodeValue !== n) && ((e = Ft), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Ys(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Ys(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Cn] = t),
                        (t.stateNode = r);
            }
            return vt(t), null;
        case 13:
            if (
                (De(je),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (Be && zt !== null && t.mode & 1 && !(t.flags & 128))
                    Av(), Go(), (t.flags |= 98560), (i = !1);
                else if (((i = Xs(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(D(318));
                        if (
                            ((i = t.memoizedState),
                            (i = i !== null ? i.dehydrated : null),
                            !i)
                        )
                            throw Error(D(317));
                        i[Cn] = t;
                    } else
                        Go(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    vt(t), (i = !1);
                } else fn !== null && (ld(fn), (fn = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || je.current & 1
                              ? nt === 0 && (nt = 3)
                              : Rf())),
                  t.updateQueue !== null && (t.flags |= 4),
                  vt(t),
                  null);
        case 4:
            return (
                Yo(),
                ed(e, t),
                e === null && as(t.stateNode.containerInfo),
                vt(t),
                null
            );
        case 10:
            return uf(t.type._context), vt(t), null;
        case 17:
            return Ot(t.type) && Ba(), vt(t), null;
        case 19:
            if ((De(je), (i = t.memoizedState), i === null)) return vt(t), null;
            if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
                if (r) bi(i, !1);
                else {
                    if (nt !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Ga(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        bi(i, !1),
                                        r = s.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (s = i.alternate),
                                        s === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = s.childLanes),
                                              (i.lanes = s.lanes),
                                              (i.child = s.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps =
                                                  s.memoizedProps),
                                              (i.memoizedState =
                                                  s.memoizedState),
                                              (i.updateQueue = s.updateQueue),
                                              (i.type = s.type),
                                              (e = s.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return Ne(je, (je.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null &&
                        qe() > Qo &&
                        ((t.flags |= 128),
                        (r = !0),
                        bi(i, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Ga(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            bi(i, !0),
                            i.tail === null &&
                                i.tailMode === "hidden" &&
                                !s.alternate &&
                                !Be)
                        )
                            return vt(t), null;
                    } else
                        2 * qe() - i.renderingStartTime > Qo &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            bi(i, !1),
                            (t.lanes = 4194304));
                i.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = i.last),
                      n !== null ? (n.sibling = s) : (t.child = s),
                      (i.last = s));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = qe()),
                  (t.sibling = null),
                  (n = je.current),
                  Ne(je, r ? (n & 1) | 2 : n & 1),
                  t)
                : (vt(t), null);
        case 22:
        case 23:
            return (
                kf(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? Lt & 1073741824 &&
                      (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : vt(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(D(156, t.tag));
}
function Gx(e, t) {
    switch ((of(t), t.tag)) {
        case 1:
            return (
                Ot(t.type) && Ba(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                Yo(),
                De(Tt),
                De(wt),
                hf(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return pf(t), null;
        case 13:
            if (
                (De(je),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(D(340));
                Go();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return De(je), null;
        case 4:
            return Yo(), null;
        case 10:
            return uf(t.type._context), null;
        case 22:
        case 23:
            return kf(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Zs = !1,
    xt = !1,
    qx = typeof WeakSet == "function" ? WeakSet : Set,
    Y = null;
function ko(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Ke(e, t, r);
            }
        else n.current = null;
}
function td(e, t, n) {
    try {
        n();
    } catch (r) {
        Ke(e, t, r);
    }
}
var Eh = !1;
function Yx(e, t) {
    if (((zc = La), (e = Sv()), nf(e))) {
        if ("selectionStart" in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        d = 0,
                        f = e,
                        c = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n ||
                                (o !== 0 && f.nodeType !== 3) ||
                                (a = s + o),
                                f !== i ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (l = s + r),
                                f.nodeType === 3 && (s += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (c = f), (f = h);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (c === n && ++u === o && (a = s),
                                c === i && ++d === r && (l = s),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = c), (c = f.parentNode);
                        }
                        f = h;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Fc = { focusedElem: e, selectionRange: n }, La = !1, Y = t;
        Y !== null;

    )
        if (
            ((t = Y),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (Y = e);
        else
            for (; Y !== null; ) {
                t = Y;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (g !== null) {
                                    var p = g.memoizedProps,
                                        S = g.memoizedState,
                                        v = t.stateNode,
                                        m = v.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? p
                                                : un(t.type, p),
                                            S
                                        );
                                    v.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 &&
                                      y.documentElement &&
                                      y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(D(163));
                        }
                } catch (x) {
                    Ke(t, t.return, x);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (Y = e);
                    break;
                }
                Y = t.return;
            }
    return (g = Eh), (Eh = !1), g;
}
function Wi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                (o.destroy = void 0), i !== void 0 && td(t, n, i);
            }
            o = o.next;
        } while (o !== r);
    }
}
function wl(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function nd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function by(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), by(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Cn],
                delete t[us],
                delete t[Uc],
                delete t[Ix],
                delete t[_x])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function xy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kh(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || xy(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function rd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Fa));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (rd(e, t, n), e = e.sibling; e !== null; )
            rd(e, t, n), (e = e.sibling);
}
function od(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (od(e, t, n), e = e.sibling; e !== null; )
            od(e, t, n), (e = e.sibling);
}
var ct = null,
    cn = !1;
function Xn(e, t, n) {
    for (n = n.child; n !== null; ) wy(e, t, n), (n = n.sibling);
}
function wy(e, t, n) {
    if (kn && typeof kn.onCommitFiberUnmount == "function")
        try {
            kn.onCommitFiberUnmount(pl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            xt || ko(n, t);
        case 6:
            var r = ct,
                o = cn;
            (ct = null),
                Xn(e, t, n),
                (ct = r),
                (cn = o),
                ct !== null &&
                    (cn
                        ? ((e = ct),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ct.removeChild(n.stateNode));
            break;
        case 18:
            ct !== null &&
                (cn
                    ? ((e = ct),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? Fu(e.parentNode, n)
                          : e.nodeType === 1 && Fu(e, n),
                      os(e))
                    : Fu(ct, n.stateNode));
            break;
        case 4:
            (r = ct),
                (o = cn),
                (ct = n.stateNode.containerInfo),
                (cn = !0),
                Xn(e, t, n),
                (ct = r),
                (cn = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !xt &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    (i = i.tag),
                        s !== void 0 && (i & 2 || i & 4) && td(n, t, s),
                        (o = o.next);
                } while (o !== r);
            }
            Xn(e, t, n);
            break;
        case 1:
            if (
                !xt &&
                (ko(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == "function")
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (a) {
                    Ke(n, t, a);
                }
            Xn(e, t, n);
            break;
        case 21:
            Xn(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((xt = (r = xt) || n.memoizedState !== null),
                  Xn(e, t, n),
                  (xt = r))
                : Xn(e, t, n);
            break;
        default:
            Xn(e, t, n);
    }
}
function Rh(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new qx()),
            t.forEach(function (r) {
                var o = ow.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function ln(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ct = a.stateNode), (cn = !1);
                            break e;
                        case 3:
                            (ct = a.stateNode.containerInfo), (cn = !0);
                            break e;
                        case 4:
                            (ct = a.stateNode.containerInfo), (cn = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ct === null) throw Error(D(160));
                wy(i, s, o), (ct = null), (cn = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (u) {
                Ke(o, t, u);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Sy(t, e), (t = t.sibling);
}
function Sy(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ln(t, e), bn(e), r & 4)) {
                try {
                    Wi(3, e, e.return), wl(3, e);
                } catch (p) {
                    Ke(e, e.return, p);
                }
                try {
                    Wi(5, e, e.return);
                } catch (p) {
                    Ke(e, e.return, p);
                }
            }
            break;
        case 1:
            ln(t, e), bn(e), r & 512 && n !== null && ko(n, n.return);
            break;
        case 5:
            if (
                (ln(t, e),
                bn(e),
                r & 512 && n !== null && ko(n, n.return),
                e.flags & 32)
            ) {
                var o = e.stateNode;
                try {
                    es(o, "");
                } catch (p) {
                    Ke(e, e.return, p);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" &&
                            i.type === "radio" &&
                            i.name != null &&
                            Wg(o, i),
                            $c(a, s);
                        var u = $c(a, i);
                        for (s = 0; s < l.length; s += 2) {
                            var d = l[s],
                                f = l[s + 1];
                            d === "style"
                                ? qg(o, f)
                                : d === "dangerouslySetInnerHTML"
                                ? Kg(o, f)
                                : d === "children"
                                ? es(o, f)
                                : Wd(o, d, f, u);
                        }
                        switch (a) {
                            case "input":
                                Cc(o, i);
                                break;
                            case "textarea":
                                Vg(o, i);
                                break;
                            case "select":
                                var c = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!i.multiple;
                                var h = i.value;
                                h != null
                                    ? Oo(o, !!i.multiple, h, !1)
                                    : c !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Oo(
                                                o,
                                                !!i.multiple,
                                                i.defaultValue,
                                                !0
                                            )
                                          : Oo(
                                                o,
                                                !!i.multiple,
                                                i.multiple ? [] : "",
                                                !1
                                            ));
                        }
                        o[us] = i;
                    } catch (p) {
                        Ke(e, e.return, p);
                    }
            }
            break;
        case 6:
            if ((ln(t, e), bn(e), r & 4)) {
                if (e.stateNode === null) throw Error(D(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                    o.nodeValue = i;
                } catch (p) {
                    Ke(e, e.return, p);
                }
            }
            break;
        case 3:
            if (
                (ln(t, e),
                bn(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    os(t.containerInfo);
                } catch (p) {
                    Ke(e, e.return, p);
                }
            break;
        case 4:
            ln(t, e), bn(e);
            break;
        case 13:
            ln(t, e),
                bn(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((i = o.memoizedState !== null),
                    (o.stateNode.isHidden = i),
                    !i ||
                        (o.alternate !== null &&
                            o.alternate.memoizedState !== null) ||
                        (Cf = qe())),
                r & 4 && Rh(e);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((xt = (u = xt) || d), ln(t, e), (xt = u))
                    : ln(t, e),
                bn(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !d && e.mode & 1)
                )
                    for (Y = e, d = e.child; d !== null; ) {
                        for (f = Y = d; Y !== null; ) {
                            switch (((c = Y), (h = c.child), c.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Wi(4, c, c.return);
                                    break;
                                case 1:
                                    ko(c, c.return);
                                    var g = c.stateNode;
                                    if (
                                        typeof g.componentWillUnmount ==
                                        "function"
                                    ) {
                                        (r = c), (n = c.return);
                                        try {
                                            (t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount();
                                        } catch (p) {
                                            Ke(r, n, p);
                                        }
                                    }
                                    break;
                                case 5:
                                    ko(c, c.return);
                                    break;
                                case 22:
                                    if (c.memoizedState !== null) {
                                        $h(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = c), (Y = h)) : $h(f);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                (o = f.stateNode),
                                    u
                                        ? ((i = o.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                )
                                              : (i.display = "none"))
                                        : ((a = f.stateNode),
                                          (l = f.memoizedProps.style),
                                          (s =
                                              l != null &&
                                              l.hasOwnProperty("display")
                                                  ? l.display
                                                  : null),
                                          (a.style.display = Gg("display", s)));
                            } catch (p) {
                                Ke(e, e.return, p);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null)
                            try {
                                f.stateNode.nodeValue = u
                                    ? ""
                                    : f.memoizedProps;
                            } catch (p) {
                                Ke(e, e.return, p);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), (f = f.return);
                    }
                    d === f && (d = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            ln(t, e), bn(e), r & 4 && Rh(e);
            break;
        case 21:
            break;
        default:
            ln(t, e), bn(e);
    }
}
function bn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (xy(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(D(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (es(o, ""), (r.flags &= -33));
                    var i = kh(e);
                    od(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = kh(e);
                    rd(e, a, s);
                    break;
                default:
                    throw Error(D(161));
            }
        } catch (l) {
            Ke(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Xx(e, t, n) {
    (Y = e), Cy(e);
}
function Cy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; Y !== null; ) {
        var o = Y,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Zs;
            if (!s) {
                var a = o.alternate,
                    l = (a !== null && a.memoizedState !== null) || xt;
                a = Zs;
                var u = xt;
                if (((Zs = s), (xt = l) && !u))
                    for (Y = o; Y !== null; )
                        (s = Y),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? Th(o)
                                : l !== null
                                ? ((l.return = s), (Y = l))
                                : Th(o);
                for (; i !== null; ) (Y = i), Cy(i), (i = i.sibling);
                (Y = o), (Zs = a), (xt = u);
            }
            Ph(e);
        } else
            o.subtreeFlags & 8772 && i !== null
                ? ((i.return = o), (Y = i))
                : Ph(e);
    }
}
function Ph(e) {
    for (; Y !== null; ) {
        var t = Y;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            xt || wl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !xt)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : un(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        o,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var i = t.updateQueue;
                            i !== null && ch(t, i, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ch(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var d = u.memoizedState;
                                    if (d !== null) {
                                        var f = d.dehydrated;
                                        f !== null && os(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(D(163));
                    }
                xt || (t.flags & 512 && nd(t));
            } catch (c) {
                Ke(t, t.return, c);
            }
        }
        if (t === e) {
            Y = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (Y = n);
            break;
        }
        Y = t.return;
    }
}
function $h(e) {
    for (; Y !== null; ) {
        var t = Y;
        if (t === e) {
            Y = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (Y = n);
            break;
        }
        Y = t.return;
    }
}
function Th(e) {
    for (; Y !== null; ) {
        var t = Y;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        wl(4, t);
                    } catch (l) {
                        Ke(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            Ke(t, o, l);
                        }
                    }
                    var i = t.return;
                    try {
                        nd(t);
                    } catch (l) {
                        Ke(t, i, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        nd(t);
                    } catch (l) {
                        Ke(t, s, l);
                    }
            }
        } catch (l) {
            Ke(t, t.return, l);
        }
        if (t === e) {
            Y = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (Y = a);
            break;
        }
        Y = t.return;
    }
}
var Qx = Math.ceil,
    Xa = Kn.ReactCurrentDispatcher,
    wf = Kn.ReactCurrentOwner,
    en = Kn.ReactCurrentBatchConfig,
    xe = 0,
    at = null,
    Ze = null,
    ht = 0,
    Lt = 0,
    Ro = Cr(0),
    nt = 0,
    ms = null,
    Qr = 0,
    Sl = 0,
    Sf = 0,
    Vi = null,
    Pt = null,
    Cf = 0,
    Qo = 1 / 0,
    _n = null,
    Qa = !1,
    id = null,
    dr = null,
    ea = !1,
    or = null,
    Ja = 0,
    Hi = 0,
    sd = null,
    wa = -1,
    Sa = 0;
function Ct() {
    return xe & 6 ? qe() : wa !== -1 ? wa : (wa = qe());
}
function fr(e) {
    return e.mode & 1
        ? xe & 2 && ht !== 0
            ? ht & -ht
            : Nx.transition !== null
            ? (Sa === 0 && (Sa = sv()), Sa)
            : ((e = Re),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : pv(e.type))),
              e)
        : 1;
}
function mn(e, t, n, r) {
    if (50 < Hi) throw ((Hi = 0), (sd = null), Error(D(185)));
    $s(e, n, r),
        (!(xe & 2) || e !== at) &&
            (e === at && (!(xe & 2) && (Sl |= n), nt === 4 && tr(e, ht)),
            It(e, r),
            n === 1 &&
                xe === 0 &&
                !(t.mode & 1) &&
                ((Qo = qe() + 500), yl && Er()));
}
function It(e, t) {
    var n = e.callbackNode;
    Nb(e, t);
    var r = Aa(e, e === at ? ht : 0);
    if (r === 0)
        n !== null && zp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && zp(n), t === 1))
            e.tag === 0 ? Mx(Oh.bind(null, e)) : _v(Oh.bind(null, e)),
                Tx(function () {
                    !(xe & 6) && Er();
                }),
                (n = null);
        else {
            switch (av(r)) {
                case 1:
                    n = qd;
                    break;
                case 4:
                    n = ov;
                    break;
                case 16:
                    n = Na;
                    break;
                case 536870912:
                    n = iv;
                    break;
                default:
                    n = Na;
            }
            n = Iy(n, Ey.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Ey(e, t) {
    if (((wa = -1), (Sa = 0), xe & 6)) throw Error(D(327));
    var n = e.callbackNode;
    if (Ao() && e.callbackNode !== n) return null;
    var r = Aa(e, e === at ? ht : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Za(e, r);
    else {
        t = r;
        var o = xe;
        xe |= 2;
        var i = Ry();
        (at !== e || ht !== t) && ((_n = null), (Qo = qe() + 500), Vr(e, t));
        do
            try {
                ew();
                break;
            } catch (a) {
                ky(e, a);
            }
        while (1);
        lf(),
            (Xa.current = i),
            (xe = o),
            Ze !== null ? (t = 0) : ((at = null), (ht = 0), (t = nt));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((o = Mc(e)), o !== 0 && ((r = o), (t = ad(e, o)))),
            t === 1)
        )
            throw ((n = ms), Vr(e, 0), tr(e, r), It(e, qe()), n);
        if (t === 6) tr(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !Jx(o) &&
                    ((t = Za(e, r)),
                    t === 2 &&
                        ((i = Mc(e)), i !== 0 && ((r = i), (t = ad(e, i)))),
                    t === 1))
            )
                throw ((n = ms), Vr(e, 0), tr(e, r), It(e, qe()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(D(345));
                case 2:
                    Ir(e, Pt, _n);
                    break;
                case 3:
                    if (
                        (tr(e, r),
                        (r & 130023424) === r &&
                            ((t = Cf + 500 - qe()), 10 < t))
                    ) {
                        if (Aa(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Ct(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = jc(Ir.bind(null, e, Pt, _n), t);
                        break;
                    }
                    Ir(e, Pt, _n);
                    break;
                case 4:
                    if ((tr(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - hn(r);
                        (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
                    }
                    if (
                        ((r = o),
                        (r = qe() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                ? 480
                                : 1080 > r
                                ? 1080
                                : 1920 > r
                                ? 1920
                                : 3e3 > r
                                ? 3e3
                                : 4320 > r
                                ? 4320
                                : 1960 * Qx(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = jc(Ir.bind(null, e, Pt, _n), r);
                        break;
                    }
                    Ir(e, Pt, _n);
                    break;
                case 5:
                    Ir(e, Pt, _n);
                    break;
                default:
                    throw Error(D(329));
            }
        }
    }
    return It(e, qe()), e.callbackNode === n ? Ey.bind(null, e) : null;
}
function ad(e, t) {
    var n = Vi;
    return (
        e.current.memoizedState.isDehydrated && (Vr(e, t).flags |= 256),
        (e = Za(e, t)),
        e !== 2 && ((t = Pt), (Pt = n), t !== null && ld(t)),
        e
    );
}
function ld(e) {
    Pt === null ? (Pt = e) : Pt.push.apply(Pt, e);
}
function Jx(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!gn(i(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function tr(e, t) {
    for (
        t &= ~Sf,
            t &= ~Sl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - hn(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Oh(e) {
    if (xe & 6) throw Error(D(327));
    Ao();
    var t = Aa(e, 0);
    if (!(t & 1)) return It(e, qe()), null;
    var n = Za(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Mc(e);
        r !== 0 && ((t = r), (n = ad(e, r)));
    }
    if (n === 1) throw ((n = ms), Vr(e, 0), tr(e, t), It(e, qe()), n);
    if (n === 6) throw Error(D(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ir(e, Pt, _n),
        It(e, qe()),
        null
    );
}
function Ef(e, t) {
    var n = xe;
    xe |= 1;
    try {
        return e(t);
    } finally {
        (xe = n), xe === 0 && ((Qo = qe() + 500), yl && Er());
    }
}
function Jr(e) {
    or !== null && or.tag === 0 && !(xe & 6) && Ao();
    var t = xe;
    xe |= 1;
    var n = en.transition,
        r = Re;
    try {
        if (((en.transition = null), (Re = 1), e)) return e();
    } finally {
        (Re = r), (en.transition = n), (xe = t), !(xe & 6) && Er();
    }
}
function kf() {
    (Lt = Ro.current), De(Ro);
}
function Vr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), $x(n)), Ze !== null))
        for (n = Ze.return; n !== null; ) {
            var r = n;
            switch ((of(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Ba();
                    break;
                case 3:
                    Yo(), De(Tt), De(wt), hf();
                    break;
                case 5:
                    pf(r);
                    break;
                case 4:
                    Yo();
                    break;
                case 13:
                    De(je);
                    break;
                case 19:
                    De(je);
                    break;
                case 10:
                    uf(r.type._context);
                    break;
                case 22:
                case 23:
                    kf();
            }
            n = n.return;
        }
    if (
        ((at = e),
        (Ze = e = pr(e.current, null)),
        (ht = Lt = t),
        (nt = 0),
        (ms = null),
        (Sf = Sl = Qr = 0),
        (Pt = Vi = null),
        Br !== null)
    ) {
        for (t = 0; t < Br.length; t++)
            if (((n = Br[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    (i.next = o), (r.next = s);
                }
                n.pending = r;
            }
        Br = null;
    }
    return e;
}
function ky(e, t) {
    do {
        var n = Ze;
        try {
            if ((lf(), (ya.current = Ya), qa)) {
                for (var r = Ue.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                qa = !1;
            }
            if (
                ((Xr = 0),
                (it = tt = Ue = null),
                (Ui = !1),
                (fs = 0),
                (wf.current = null),
                n === null || n.return === null)
            ) {
                (nt = 1), (ms = t), (Ze = null);
                break;
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (
                    ((t = ht),
                    (a.flags |= 32768),
                    l !== null &&
                        typeof l == "object" &&
                        typeof l.then == "function")
                ) {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var c = d.alternate;
                        c
                            ? ((d.updateQueue = c.updateQueue),
                              (d.memoizedState = c.memoizedState),
                              (d.lanes = c.lanes))
                            : ((d.updateQueue = null),
                              (d.memoizedState = null));
                    }
                    var h = vh(s);
                    if (h !== null) {
                        (h.flags &= -257),
                            yh(h, s, a, i, t),
                            h.mode & 1 && gh(i, u, t),
                            (t = h),
                            (l = u);
                        var g = t.updateQueue;
                        if (g === null) {
                            var p = new Set();
                            p.add(l), (t.updateQueue = p);
                        } else g.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            gh(i, u, t), Rf();
                            break e;
                        }
                        l = Error(D(426));
                    }
                } else if (Be && a.mode & 1) {
                    var S = vh(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                            yh(S, s, a, i, t),
                            sf(Xo(l, a));
                        break e;
                    }
                }
                (i = l = Xo(l, a)),
                    nt !== 4 && (nt = 2),
                    Vi === null ? (Vi = [i]) : Vi.push(i),
                    (i = s);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var v = ly(i, l, t);
                            uh(i, v);
                            break e;
                        case 1:
                            a = l;
                            var m = i.type,
                                y = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof m.getDerivedStateFromError ==
                                    "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch ==
                                            "function" &&
                                        (dr === null || !dr.has(y))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var x = uy(i, a, t);
                                uh(i, x);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            $y(n);
        } catch (C) {
            (t = C), Ze === n && n !== null && (Ze = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Ry() {
    var e = Xa.current;
    return (Xa.current = Ya), e === null ? Ya : e;
}
function Rf() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4),
        at === null || (!(Qr & 268435455) && !(Sl & 268435455)) || tr(at, ht);
}
function Za(e, t) {
    var n = xe;
    xe |= 2;
    var r = Ry();
    (at !== e || ht !== t) && ((_n = null), Vr(e, t));
    do
        try {
            Zx();
            break;
        } catch (o) {
            ky(e, o);
        }
    while (1);
    if ((lf(), (xe = n), (Xa.current = r), Ze !== null)) throw Error(D(261));
    return (at = null), (ht = 0), nt;
}
function Zx() {
    for (; Ze !== null; ) Py(Ze);
}
function ew() {
    for (; Ze !== null && !kb(); ) Py(Ze);
}
function Py(e) {
    var t = Oy(e.alternate, e, Lt);
    (e.memoizedProps = e.pendingProps),
        t === null ? $y(e) : (Ze = t),
        (wf.current = null);
}
function $y(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Gx(n, t)), n !== null)) {
                (n.flags &= 32767), (Ze = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (nt = 6), (Ze = null);
                return;
            }
        } else if (((n = Kx(n, t, Lt)), n !== null)) {
            Ze = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Ze = t;
            return;
        }
        Ze = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
}
function Ir(e, t, n) {
    var r = Re,
        o = en.transition;
    try {
        (en.transition = null), (Re = 1), tw(e, t, n, r);
    } finally {
        (en.transition = o), (Re = r);
    }
    return null;
}
function tw(e, t, n, r) {
    do Ao();
    while (or !== null);
    if (xe & 6) throw Error(D(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(D(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (Ab(e, i),
        e === at && ((Ze = at = null), (ht = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            ea ||
            ((ea = !0),
            Iy(Na, function () {
                return Ao(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = en.transition), (en.transition = null);
        var s = Re;
        Re = 1;
        var a = xe;
        (xe |= 4),
            (wf.current = null),
            Yx(e, n),
            Sy(n, e),
            wx(Fc),
            (La = !!zc),
            (Fc = zc = null),
            (e.current = n),
            Xx(n),
            Rb(),
            (xe = a),
            (Re = s),
            (en.transition = i);
    } else e.current = n;
    if (
        (ea && ((ea = !1), (or = e), (Ja = o)),
        (i = e.pendingLanes),
        i === 0 && (dr = null),
        Tb(n.stateNode),
        It(e, qe()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]),
                r(o.value, { componentStack: o.stack, digest: o.digest });
    if (Qa) throw ((Qa = !1), (e = id), (id = null), e);
    return (
        Ja & 1 && e.tag !== 0 && Ao(),
        (i = e.pendingLanes),
        i & 1 ? (e === sd ? Hi++ : ((Hi = 0), (sd = e))) : (Hi = 0),
        Er(),
        null
    );
}
function Ao() {
    if (or !== null) {
        var e = av(Ja),
            t = en.transition,
            n = Re;
        try {
            if (((en.transition = null), (Re = 16 > e ? 16 : e), or === null))
                var r = !1;
            else {
                if (((e = or), (or = null), (Ja = 0), xe & 6))
                    throw Error(D(331));
                var o = xe;
                for (xe |= 4, Y = e.current; Y !== null; ) {
                    var i = Y,
                        s = i.child;
                    if (Y.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (Y = u; Y !== null; ) {
                                    var d = Y;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Wi(8, d, i);
                                    }
                                    var f = d.child;
                                    if (f !== null) (f.return = d), (Y = f);
                                    else
                                        for (; Y !== null; ) {
                                            d = Y;
                                            var c = d.sibling,
                                                h = d.return;
                                            if ((by(d), d === u)) {
                                                Y = null;
                                                break;
                                            }
                                            if (c !== null) {
                                                (c.return = h), (Y = c);
                                                break;
                                            }
                                            Y = h;
                                        }
                                }
                            }
                            var g = i.alternate;
                            if (g !== null) {
                                var p = g.child;
                                if (p !== null) {
                                    g.child = null;
                                    do {
                                        var S = p.sibling;
                                        (p.sibling = null), (p = S);
                                    } while (p !== null);
                                }
                            }
                            Y = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null)
                        (s.return = i), (Y = s);
                    else
                        e: for (; Y !== null; ) {
                            if (((i = Y), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Wi(9, i, i.return);
                                }
                            var v = i.sibling;
                            if (v !== null) {
                                (v.return = i.return), (Y = v);
                                break e;
                            }
                            Y = i.return;
                        }
                }
                var m = e.current;
                for (Y = m; Y !== null; ) {
                    s = Y;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null)
                        (y.return = s), (Y = y);
                    else
                        e: for (s = m; Y !== null; ) {
                            if (((a = Y), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            wl(9, a);
                                    }
                                } catch (C) {
                                    Ke(a, a.return, C);
                                }
                            if (a === s) {
                                Y = null;
                                break e;
                            }
                            var x = a.sibling;
                            if (x !== null) {
                                (x.return = a.return), (Y = x);
                                break e;
                            }
                            Y = a.return;
                        }
                }
                if (
                    ((xe = o),
                    Er(),
                    kn && typeof kn.onPostCommitFiberRoot == "function")
                )
                    try {
                        kn.onPostCommitFiberRoot(pl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (Re = n), (en.transition = t);
        }
    }
    return !1;
}
function Ih(e, t, n) {
    (t = Xo(n, t)),
        (t = ly(e, t, 1)),
        (e = cr(e, t, 1)),
        (t = Ct()),
        e !== null && ($s(e, 1, t), It(e, t));
}
function Ke(e, t, n) {
    if (e.tag === 3) Ih(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ih(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" &&
                        (dr === null || !dr.has(r)))
                ) {
                    (e = Xo(n, e)),
                        (e = uy(t, e, 1)),
                        (t = cr(t, e, 1)),
                        (e = Ct()),
                        t !== null && ($s(t, 1, e), It(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function nw(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ct()),
        (e.pingedLanes |= e.suspendedLanes & n),
        at === e &&
            (ht & n) === n &&
            (nt === 4 ||
            (nt === 3 && (ht & 130023424) === ht && 500 > qe() - Cf)
                ? Vr(e, 0)
                : (Sf |= n)),
        It(e, t);
}
function Ty(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = Vs), (Vs <<= 1), !(Vs & 130023424) && (Vs = 4194304))
            : (t = 1));
    var n = Ct();
    (e = jn(e, t)), e !== null && ($s(e, t, n), It(e, n));
}
function rw(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Ty(e, n);
}
function ow(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(D(314));
    }
    r !== null && r.delete(t), Ty(e, n);
}
var Oy;
Oy = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Tt.current) $t = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ($t = !1), Hx(e, t, n);
            $t = !!(e.flags & 131072);
        }
    else ($t = !1), Be && t.flags & 1048576 && Mv(t, Wa, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            xa(e, t), (e = t.pendingProps);
            var o = Ko(t, wt.current);
            No(t, n), (o = gf(null, t, r, e, o, n));
            var i = vf();
            return (
                (t.flags |= 1),
                typeof o == "object" &&
                o !== null &&
                typeof o.render == "function" &&
                o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ot(r) ? ((i = !0), ja(t)) : (i = !1),
                      (t.memoizedState =
                          o.state !== null && o.state !== void 0
                              ? o.state
                              : null),
                      df(t),
                      (o.updater = bl),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      qc(t, r, e, n),
                      (t = Qc(null, t, r, !0, i, n)))
                    : ((t.tag = 0),
                      Be && i && rf(t),
                      St(null, t, o, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (xa(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = sw(r)),
                    (e = un(r, e)),
                    o)
                ) {
                    case 0:
                        t = Xc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = wh(null, t, r, e, n);
                        break e;
                    case 11:
                        t = bh(null, t, r, e, n);
                        break e;
                    case 14:
                        t = xh(null, t, r, un(r.type, e), n);
                        break e;
                }
                throw Error(D(306, r, ""));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : un(r, o)),
                Xc(e, t, r, o, n)
            );
        case 1:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : un(r, o)),
                wh(e, t, r, o, n)
            );
        case 3:
            e: {
                if ((py(t), e === null)) throw Error(D(387));
                (r = t.pendingProps),
                    (i = t.memoizedState),
                    (o = i.element),
                    Dv(e, t),
                    Ka(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries:
                                s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (o = Xo(Error(D(423)), t)), (t = Sh(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = Xo(Error(D(424)), t)), (t = Sh(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            zt = ur(t.stateNode.containerInfo.firstChild),
                                Ft = t,
                                Be = !0,
                                fn = null,
                                n = jv(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Go(), r === o)) {
                        t = Un(e, t, n);
                        break e;
                    }
                    St(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Uv(t),
                e === null && Hc(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Bc(r, o)
                    ? (s = null)
                    : i !== null && Bc(r, i) && (t.flags |= 32),
                fy(e, t),
                St(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Hc(t), null;
        case 13:
            return hy(e, t, n);
        case 4:
            return (
                ff(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = qo(t, null, r, n)) : St(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : un(r, o)),
                bh(e, t, r, o, n)
            );
        case 7:
            return St(e, t, t.pendingProps, n), t.child;
        case 8:
            return St(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return St(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (i = t.memoizedProps),
                    (s = o.value),
                    Ne(Va, r._currentValue),
                    (r._currentValue = s),
                    i !== null)
                )
                    if (gn(i.value, s)) {
                        if (i.children === o.children && !Tt.current) {
                            t = Un(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            i = t.child, i !== null && (i.return = t);
                            i !== null;

                        ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = Ln(-1, n & -n)), (l.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null
                                                    ? (l.next = l)
                                                    : ((l.next = d.next),
                                                      (d.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            Kc(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10)
                                s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((s = i.return), s === null))
                                    throw Error(D(341));
                                (s.lanes |= n),
                                    (a = s.alternate),
                                    a !== null && (a.lanes |= n),
                                    Kc(s, n, t),
                                    (s = i.sibling);
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((i = s.sibling), i !== null)) {
                                        (i.return = s.return), (s = i);
                                        break;
                                    }
                                    s = s.return;
                                }
                            i = s;
                        }
                St(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                No(t, n),
                (o = tn(o)),
                (r = r(o)),
                (t.flags |= 1),
                St(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (o = un(r, t.pendingProps)),
                (o = un(r.type, o)),
                xh(e, t, r, o, n)
            );
        case 15:
            return cy(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : un(r, o)),
                xa(e, t),
                (t.tag = 1),
                Ot(r) ? ((e = !0), ja(t)) : (e = !1),
                No(t, n),
                Fv(t, r, o),
                qc(t, r, o, n),
                Qc(null, t, r, !0, e, n)
            );
        case 19:
            return my(e, t, n);
        case 22:
            return dy(e, t, n);
    }
    throw Error(D(156, t.tag));
};
function Iy(e, t) {
    return rv(e, t);
}
function iw(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Zt(e, t, n, r) {
    return new iw(e, t, n, r);
}
function Pf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sw(e) {
    if (typeof e == "function") return Pf(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Hd)) return 11;
        if (e === Kd) return 14;
    }
    return 2;
}
function pr(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Zt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Ca(e, t, n, r, o, i) {
    var s = 2;
    if (((r = e), typeof e == "function")) Pf(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case go:
                return Hr(n.children, o, i, t);
            case Vd:
                (s = 8), (o |= 8);
                break;
            case yc:
                return (
                    (e = Zt(12, n, t, o | 2)),
                    (e.elementType = yc),
                    (e.lanes = i),
                    e
                );
            case bc:
                return (
                    (e = Zt(13, n, t, o)),
                    (e.elementType = bc),
                    (e.lanes = i),
                    e
                );
            case xc:
                return (
                    (e = Zt(19, n, t, o)),
                    (e.elementType = xc),
                    (e.lanes = i),
                    e
                );
            case Bg:
                return Cl(n, o, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case zg:
                            s = 10;
                            break e;
                        case Fg:
                            s = 9;
                            break e;
                        case Hd:
                            s = 11;
                            break e;
                        case Kd:
                            s = 14;
                            break e;
                        case Jn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(D(130, e == null ? e : typeof e, ""));
        }
    return (
        (t = Zt(s, n, t, o)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
    );
}
function Hr(e, t, n, r) {
    return (e = Zt(7, e, r, t)), (e.lanes = n), e;
}
function Cl(e, t, n, r) {
    return (
        (e = Zt(22, e, r, t)),
        (e.elementType = Bg),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function Gu(e, t, n) {
    return (e = Zt(6, e, null, t)), (e.lanes = n), e;
}
function qu(e, t, n) {
    return (
        (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function aw(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = $u(0)),
        (this.expirationTimes = $u(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = $u(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function $f(e, t, n, r, o, i, s, a, l) {
    return (
        (e = new aw(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Zt(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        df(i),
        e
    );
}
function lw(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: mo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function _y(e) {
    if (!e) return vr;
    e = e._reactInternals;
    e: {
        if (ro(e) !== e || e.tag !== 1) throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ot(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(D(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ot(n)) return Iv(e, n, t);
    }
    return t;
}
function My(e, t, n, r, o, i, s, a, l) {
    return (
        (e = $f(n, r, !0, e, o, i, s, a, l)),
        (e.context = _y(null)),
        (n = e.current),
        (r = Ct()),
        (o = fr(n)),
        (i = Ln(r, o)),
        (i.callback = t ?? null),
        cr(n, i, o),
        (e.current.lanes = o),
        $s(e, o, r),
        It(e, r),
        e
    );
}
function El(e, t, n, r) {
    var o = t.current,
        i = Ct(),
        s = fr(o);
    return (
        (n = _y(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ln(i, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = cr(o, t, s)),
        e !== null && (mn(e, o, s, i), va(e, o, s)),
        s
    );
}
function el(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function _h(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Tf(e, t) {
    _h(e, t), (e = e.alternate) && _h(e, t);
}
function uw() {
    return null;
}
var Ny =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Of(e) {
    this._internalRoot = e;
}
kl.prototype.render = Of.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(D(409));
    El(e, t, null, null);
};
kl.prototype.unmount = Of.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Jr(function () {
            El(null, e, null, null);
        }),
            (t[Bn] = null);
    }
};
function kl(e) {
    this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = cv();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < er.length && t !== 0 && t < er[n].priority; n++);
        er.splice(n, 0, e), n === 0 && fv(e);
    }
};
function If(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Mh() {}
function cw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = el(s);
                i.call(u);
            };
        }
        var s = My(t, r, e, 0, null, !1, !1, "", Mh);
        return (
            (e._reactRootContainer = s),
            (e[Bn] = s.current),
            as(e.nodeType === 8 ? e.parentNode : e),
            Jr(),
            s
        );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = el(l);
            a.call(u);
        };
    }
    var l = $f(e, 0, !1, null, null, !1, !1, "", Mh);
    return (
        (e._reactRootContainer = l),
        (e[Bn] = l.current),
        as(e.nodeType === 8 ? e.parentNode : e),
        Jr(function () {
            El(t, l, n, r);
        }),
        l
    );
}
function Pl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function () {
                var l = el(s);
                a.call(l);
            };
        }
        El(t, s, e, o);
    } else s = cw(n, t, e, o, r);
    return el(s);
}
lv = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ii(t.pendingLanes);
                n !== 0 &&
                    (Yd(t, n | 1),
                    It(t, qe()),
                    !(xe & 6) && ((Qo = qe() + 500), Er()));
            }
            break;
        case 13:
            Jr(function () {
                var r = jn(e, 1);
                if (r !== null) {
                    var o = Ct();
                    mn(r, e, 1, o);
                }
            }),
                Tf(e, 1);
    }
};
Xd = function (e) {
    if (e.tag === 13) {
        var t = jn(e, 134217728);
        if (t !== null) {
            var n = Ct();
            mn(t, e, 134217728, n);
        }
        Tf(e, 134217728);
    }
};
uv = function (e) {
    if (e.tag === 13) {
        var t = fr(e),
            n = jn(e, t);
        if (n !== null) {
            var r = Ct();
            mn(n, e, t, r);
        }
        Tf(e, t);
    }
};
cv = function () {
    return Re;
};
dv = function (e, t) {
    var n = Re;
    try {
        return (Re = e), t();
    } finally {
        Re = n;
    }
};
Oc = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Cc(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        "input[name=" +
                            JSON.stringify("" + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = vl(r);
                        if (!o) throw Error(D(90));
                        Ug(r), Cc(r, o);
                    }
                }
            }
            break;
        case "textarea":
            Vg(e, n);
            break;
        case "select":
            (t = n.value), t != null && Oo(e, !!n.multiple, t, !1);
    }
};
Qg = Ef;
Jg = Jr;
var dw = { usingClientEntryPoint: !1, Events: [Os, xo, vl, Yg, Xg, Ef] },
    xi = {
        findFiberByHostInstance: Fr,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom",
    },
    fw = {
        bundleType: xi.bundleType,
        version: xi.version,
        rendererPackageName: xi.rendererPackageName,
        rendererConfig: xi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Kn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = tv(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: xi.findFiberByHostInstance || uw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ta.isDisabled && ta.supportsFiber)
        try {
            (pl = ta.inject(fw)), (kn = ta);
        } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dw;
Vt.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!If(t)) throw Error(D(200));
    return lw(e, t, null, n);
};
Vt.createRoot = function (e, t) {
    if (!If(e)) throw Error(D(299));
    var n = !1,
        r = "",
        o = Ny;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = $f(e, 1, !1, null, null, n, !1, r, o)),
        (e[Bn] = t.current),
        as(e.nodeType === 8 ? e.parentNode : e),
        new Of(t)
    );
};
Vt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function"
            ? Error(D(188))
            : ((e = Object.keys(e).join(",")), Error(D(268, e)));
    return (e = tv(t)), (e = e === null ? null : e.stateNode), e;
};
Vt.flushSync = function (e) {
    return Jr(e);
};
Vt.hydrate = function (e, t, n) {
    if (!Rl(t)) throw Error(D(200));
    return Pl(null, e, t, !0, n);
};
Vt.hydrateRoot = function (e, t, n) {
    if (!If(e)) throw Error(D(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        i = "",
        s = Ny;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = My(t, null, e, 1, n ?? null, o, !1, i, s)),
        (e[Bn] = t.current),
        as(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new kl(t);
};
Vt.render = function (e, t, n) {
    if (!Rl(t)) throw Error(D(200));
    return Pl(null, e, t, !1, n);
};
Vt.unmountComponentAtNode = function (e) {
    if (!Rl(e)) throw Error(D(40));
    return e._reactRootContainer
        ? (Jr(function () {
              Pl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Bn] = null);
              });
          }),
          !0)
        : !1;
};
Vt.unstable_batchedUpdates = Ef;
Vt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Rl(n)) throw Error(D(200));
    if (e == null || e._reactInternals === void 0) throw Error(D(38));
    return Pl(e, t, n, !1, r);
};
Vt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
    function t() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
            } catch (n) {
                console.error(n);
            }
    }
    t(), (e.exports = Vt);
})(ub);
const na = Rg(Gr);
var Nh = Gr;
(mc.createRoot = Nh.createRoot), (mc.hydrateRoot = Nh.hydrateRoot);
var ud = {},
    pw = {
        get exports() {
            return ud;
        },
        set exports(e) {
            ud = e;
        },
    },
    Ay = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jo = b;
function hw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mw = typeof Object.is == "function" ? Object.is : hw,
    gw = Jo.useState,
    vw = Jo.useEffect,
    yw = Jo.useLayoutEffect,
    bw = Jo.useDebugValue;
function xw(e, t) {
    var n = t(),
        r = gw({ inst: { value: n, getSnapshot: t } }),
        o = r[0].inst,
        i = r[1];
    return (
        yw(
            function () {
                (o.value = n), (o.getSnapshot = t), Yu(o) && i({ inst: o });
            },
            [e, n, t]
        ),
        vw(
            function () {
                return (
                    Yu(o) && i({ inst: o }),
                    e(function () {
                        Yu(o) && i({ inst: o });
                    })
                );
            },
            [e]
        ),
        bw(n),
        n
    );
}
function Yu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !mw(e, n);
    } catch {
        return !0;
    }
}
function ww(e, t) {
    return t();
}
var Sw =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
        ? ww
        : xw;
Ay.useSyncExternalStore =
    Jo.useSyncExternalStore !== void 0 ? Jo.useSyncExternalStore : Sw;
(function (e) {
    e.exports = Ay;
})(pw);
var Ah = {},
    Cw = {
        get exports() {
            return Ah;
        },
        set exports(e) {
            Ah = e;
        },
    },
    Ly = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $l = b,
    Ew = ud;
function kw(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rw = typeof Object.is == "function" ? Object.is : kw,
    Pw = Ew.useSyncExternalStore,
    $w = $l.useRef,
    Tw = $l.useEffect,
    Ow = $l.useMemo,
    Iw = $l.useDebugValue;
Ly.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var i = $w(null);
    if (i.current === null) {
        var s = { hasValue: !1, value: null };
        i.current = s;
    } else s = i.current;
    i = Ow(
        function () {
            function l(h) {
                if (!u) {
                    if (
                        ((u = !0),
                        (d = h),
                        (h = r(h)),
                        o !== void 0 && s.hasValue)
                    ) {
                        var g = s.value;
                        if (o(g, h)) return (f = g);
                    }
                    return (f = h);
                }
                if (((g = f), Rw(d, h))) return g;
                var p = r(h);
                return o !== void 0 && o(g, p) ? g : ((d = h), (f = p));
            }
            var u = !1,
                d,
                f,
                c = n === void 0 ? null : n;
            return [
                function () {
                    return l(t());
                },
                c === null
                    ? void 0
                    : function () {
                          return l(c());
                      },
            ];
        },
        [t, n, r, o]
    );
    var a = Pw(e, i[0], i[1]);
    return (
        Tw(
            function () {
                (s.hasValue = !0), (s.value = a);
            },
            [a]
        ),
        Iw(a),
        a
    );
};
(function (e) {
    e.exports = Ly;
})(Cw);
function _w(e) {
    e();
}
let Dy = _w;
const Mw = (e) => (Dy = e),
    Nw = () => Dy,
    Aw = b.createContext(null);
function w() {
    return (
        (w = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        w.apply(this, arguments)
    );
}
function Q(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        o,
        i;
    for (i = 0; i < r.length; i++)
        (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
    return n;
}
var cd = {},
    Lw = {
        get exports() {
            return cd;
        },
        set exports(e) {
            cd = e;
        },
    },
    Pe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lt = typeof Symbol == "function" && Symbol.for,
    _f = lt ? Symbol.for("react.element") : 60103,
    Mf = lt ? Symbol.for("react.portal") : 60106,
    Tl = lt ? Symbol.for("react.fragment") : 60107,
    Ol = lt ? Symbol.for("react.strict_mode") : 60108,
    Il = lt ? Symbol.for("react.profiler") : 60114,
    _l = lt ? Symbol.for("react.provider") : 60109,
    Ml = lt ? Symbol.for("react.context") : 60110,
    Nf = lt ? Symbol.for("react.async_mode") : 60111,
    Nl = lt ? Symbol.for("react.concurrent_mode") : 60111,
    Al = lt ? Symbol.for("react.forward_ref") : 60112,
    Ll = lt ? Symbol.for("react.suspense") : 60113,
    Dw = lt ? Symbol.for("react.suspense_list") : 60120,
    Dl = lt ? Symbol.for("react.memo") : 60115,
    zl = lt ? Symbol.for("react.lazy") : 60116,
    zw = lt ? Symbol.for("react.block") : 60121,
    Fw = lt ? Symbol.for("react.fundamental") : 60117,
    Bw = lt ? Symbol.for("react.responder") : 60118,
    jw = lt ? Symbol.for("react.scope") : 60119;
function Kt(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case _f:
                switch (((e = e.type), e)) {
                    case Nf:
                    case Nl:
                    case Tl:
                    case Il:
                    case Ol:
                    case Ll:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case Ml:
                            case Al:
                            case zl:
                            case Dl:
                            case _l:
                                return e;
                            default:
                                return t;
                        }
                }
            case Mf:
                return t;
        }
    }
}
function zy(e) {
    return Kt(e) === Nl;
}
Pe.AsyncMode = Nf;
Pe.ConcurrentMode = Nl;
Pe.ContextConsumer = Ml;
Pe.ContextProvider = _l;
Pe.Element = _f;
Pe.ForwardRef = Al;
Pe.Fragment = Tl;
Pe.Lazy = zl;
Pe.Memo = Dl;
Pe.Portal = Mf;
Pe.Profiler = Il;
Pe.StrictMode = Ol;
Pe.Suspense = Ll;
Pe.isAsyncMode = function (e) {
    return zy(e) || Kt(e) === Nf;
};
Pe.isConcurrentMode = zy;
Pe.isContextConsumer = function (e) {
    return Kt(e) === Ml;
};
Pe.isContextProvider = function (e) {
    return Kt(e) === _l;
};
Pe.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === _f;
};
Pe.isForwardRef = function (e) {
    return Kt(e) === Al;
};
Pe.isFragment = function (e) {
    return Kt(e) === Tl;
};
Pe.isLazy = function (e) {
    return Kt(e) === zl;
};
Pe.isMemo = function (e) {
    return Kt(e) === Dl;
};
Pe.isPortal = function (e) {
    return Kt(e) === Mf;
};
Pe.isProfiler = function (e) {
    return Kt(e) === Il;
};
Pe.isStrictMode = function (e) {
    return Kt(e) === Ol;
};
Pe.isSuspense = function (e) {
    return Kt(e) === Ll;
};
Pe.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Tl ||
        e === Nl ||
        e === Il ||
        e === Ol ||
        e === Ll ||
        e === Dw ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === zl ||
                e.$$typeof === Dl ||
                e.$$typeof === _l ||
                e.$$typeof === Ml ||
                e.$$typeof === Al ||
                e.$$typeof === Fw ||
                e.$$typeof === Bw ||
                e.$$typeof === jw ||
                e.$$typeof === zw))
    );
};
Pe.typeOf = Kt;
(function (e) {
    e.exports = Pe;
})(Lw);
var Fy = cd,
    Uw = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
    },
    Ww = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    },
    By = {};
By[Fy.ForwardRef] = Uw;
By[Fy.Memo] = Ww;
var Lh = {},
    Vw = {
        get exports() {
            return Lh;
        },
        set exports(e) {
            Lh = e;
        },
    },
    $e = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Af = Symbol.for("react.element"),
    Lf = Symbol.for("react.portal"),
    Fl = Symbol.for("react.fragment"),
    Bl = Symbol.for("react.strict_mode"),
    jl = Symbol.for("react.profiler"),
    Ul = Symbol.for("react.provider"),
    Wl = Symbol.for("react.context"),
    Hw = Symbol.for("react.server_context"),
    Vl = Symbol.for("react.forward_ref"),
    Hl = Symbol.for("react.suspense"),
    Kl = Symbol.for("react.suspense_list"),
    Gl = Symbol.for("react.memo"),
    ql = Symbol.for("react.lazy"),
    Kw = Symbol.for("react.offscreen"),
    jy;
jy = Symbol.for("react.module.reference");
function rn(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
            case Af:
                switch (((e = e.type), e)) {
                    case Fl:
                    case jl:
                    case Bl:
                    case Hl:
                    case Kl:
                        return e;
                    default:
                        switch (((e = e && e.$$typeof), e)) {
                            case Hw:
                            case Wl:
                            case Vl:
                            case ql:
                            case Gl:
                            case Ul:
                                return e;
                            default:
                                return t;
                        }
                }
            case Lf:
                return t;
        }
    }
}
$e.ContextConsumer = Wl;
$e.ContextProvider = Ul;
$e.Element = Af;
$e.ForwardRef = Vl;
$e.Fragment = Fl;
$e.Lazy = ql;
$e.Memo = Gl;
$e.Portal = Lf;
$e.Profiler = jl;
$e.StrictMode = Bl;
$e.Suspense = Hl;
$e.SuspenseList = Kl;
$e.isAsyncMode = function () {
    return !1;
};
$e.isConcurrentMode = function () {
    return !1;
};
$e.isContextConsumer = function (e) {
    return rn(e) === Wl;
};
$e.isContextProvider = function (e) {
    return rn(e) === Ul;
};
$e.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Af;
};
$e.isForwardRef = function (e) {
    return rn(e) === Vl;
};
$e.isFragment = function (e) {
    return rn(e) === Fl;
};
$e.isLazy = function (e) {
    return rn(e) === ql;
};
$e.isMemo = function (e) {
    return rn(e) === Gl;
};
$e.isPortal = function (e) {
    return rn(e) === Lf;
};
$e.isProfiler = function (e) {
    return rn(e) === jl;
};
$e.isStrictMode = function (e) {
    return rn(e) === Bl;
};
$e.isSuspense = function (e) {
    return rn(e) === Hl;
};
$e.isSuspenseList = function (e) {
    return rn(e) === Kl;
};
$e.isValidElementType = function (e) {
    return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === Fl ||
        e === jl ||
        e === Bl ||
        e === Hl ||
        e === Kl ||
        e === Kw ||
        (typeof e == "object" &&
            e !== null &&
            (e.$$typeof === ql ||
                e.$$typeof === Gl ||
                e.$$typeof === Ul ||
                e.$$typeof === Wl ||
                e.$$typeof === Vl ||
                e.$$typeof === jy ||
                e.getModuleId !== void 0))
    );
};
$e.typeOf = rn;
(function (e) {
    e.exports = $e;
})(Vw);
function Gw() {
    const e = Nw();
    let t = null,
        n = null;
    return {
        clear() {
            (t = null), (n = null);
        },
        notify() {
            e(() => {
                let r = t;
                for (; r; ) r.callback(), (r = r.next);
            });
        },
        get() {
            let r = [],
                o = t;
            for (; o; ) r.push(o), (o = o.next);
            return r;
        },
        subscribe(r) {
            let o = !0,
                i = (n = { callback: r, next: null, prev: n });
            return (
                i.prev ? (i.prev.next = i) : (t = i),
                function () {
                    !o ||
                        t === null ||
                        ((o = !1),
                        i.next ? (i.next.prev = i.prev) : (n = i.prev),
                        i.prev ? (i.prev.next = i.next) : (t = i.next));
                }
            );
        },
    };
}
const Dh = { notify() {}, get: () => [] };
function qw(e, t) {
    let n,
        r = Dh;
    function o(f) {
        return l(), r.subscribe(f);
    }
    function i() {
        r.notify();
    }
    function s() {
        d.onStateChange && d.onStateChange();
    }
    function a() {
        return Boolean(n);
    }
    function l() {
        n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (r = Gw()));
    }
    function u() {
        n && (n(), (n = void 0), r.clear(), (r = Dh));
    }
    const d = {
        addNestedSub: o,
        notifyNestedSubs: i,
        handleChangeWrapper: s,
        isSubscribed: a,
        trySubscribe: l,
        tryUnsubscribe: u,
        getListeners: () => r,
    };
    return d;
}
const Yw =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    Xw = Yw ? b.useLayoutEffect : b.useEffect;
function Qw({ store: e, context: t, children: n, serverState: r }) {
    const o = b.useMemo(() => {
            const a = qw(e);
            return {
                store: e,
                subscription: a,
                getServerState: r ? () => r : void 0,
            };
        }, [e, r]),
        i = b.useMemo(() => e.getState(), [e]);
    Xw(() => {
        const { subscription: a } = o;
        return (
            (a.onStateChange = a.notifyNestedSubs),
            a.trySubscribe(),
            i !== e.getState() && a.notifyNestedSubs(),
            () => {
                a.tryUnsubscribe(), (a.onStateChange = void 0);
            }
        );
    }, [o, i]);
    const s = t || Aw;
    return Jt.createElement(s.Provider, { value: o }, n);
}
Mw(Gr.unstable_batchedUpdates);
function pn(e) {
    for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
    )
        n[r - 1] = arguments[r];
    throw Error(
        "[Immer] minified error nr: " +
            e +
            (n.length
                ? " " +
                  n
                      .map(function (o) {
                          return "'" + o + "'";
                      })
                      .join(",")
                : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
    );
}
function yr(e) {
    return !!e && !!e[Fe];
}
function Wn(e) {
    var t;
    return (
        !!e &&
        ((function (n) {
            if (!n || typeof n != "object") return !1;
            var r = Object.getPrototypeOf(n);
            if (r === null) return !0;
            var o =
                Object.hasOwnProperty.call(r, "constructor") && r.constructor;
            return (
                o === Object ||
                (typeof o == "function" && Function.toString.call(o) === sS)
            );
        })(e) ||
            Array.isArray(e) ||
            !!e[Vh] ||
            !!(!((t = e.constructor) === null || t === void 0) && t[Vh]) ||
            Df(e) ||
            zf(e))
    );
}
function Zr(e, t, n) {
    n === void 0 && (n = !1),
        ii(e) === 0
            ? (n ? Object.keys : Do)(e).forEach(function (r) {
                  (n && typeof r == "symbol") || t(r, e[r], e);
              })
            : e.forEach(function (r, o) {
                  return t(o, r, e);
              });
}
function ii(e) {
    var t = e[Fe];
    return t
        ? t.i > 3
            ? t.i - 4
            : t.i
        : Array.isArray(e)
        ? 1
        : Df(e)
        ? 2
        : zf(e)
        ? 3
        : 0;
}
function Lo(e, t) {
    return ii(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Jw(e, t) {
    return ii(e) === 2 ? e.get(t) : e[t];
}
function Uy(e, t, n) {
    var r = ii(e);
    r === 2 ? e.set(t, n) : r === 3 ? (e.delete(t), e.add(n)) : (e[t] = n);
}
function Wy(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Df(e) {
    return oS && e instanceof Map;
}
function zf(e) {
    return iS && e instanceof Set;
}
function _r(e) {
    return e.o || e.t;
}
function Ff(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Hy(e);
    delete t[Fe];
    for (var n = Do(t), r = 0; r < n.length; r++) {
        var o = n[r],
            i = t[o];
        i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
            (i.get || i.set) &&
                (t[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: i.enumerable,
                    value: e[o],
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function Bf(e, t) {
    return (
        t === void 0 && (t = !1),
        jf(e) ||
            yr(e) ||
            !Wn(e) ||
            (ii(e) > 1 && (e.set = e.add = e.clear = e.delete = Zw),
            Object.freeze(e),
            t &&
                Zr(
                    e,
                    function (n, r) {
                        return Bf(r, !0);
                    },
                    !0
                )),
        e
    );
}
function Zw() {
    pn(2);
}
function jf(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e);
}
function Pn(e) {
    var t = hd[e];
    return t || pn(18, e), t;
}
function eS(e, t) {
    hd[e] || (hd[e] = t);
}
function dd() {
    return gs;
}
function Xu(e, t) {
    t && (Pn("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function tl(e) {
    fd(e), e.p.forEach(tS), (e.p = null);
}
function fd(e) {
    e === gs && (gs = e.l);
}
function zh(e) {
    return (gs = { p: [], l: gs, h: e, m: !0, _: 0 });
}
function tS(e) {
    var t = e[Fe];
    t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Qu(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = e !== void 0 && e !== n;
    return (
        t.h.g || Pn("ES5").S(t, e, r),
        r
            ? (n[Fe].P && (tl(t), pn(4)),
              Wn(e) && ((e = nl(t, e)), t.l || rl(t, e)),
              t.u && Pn("Patches").M(n[Fe].t, e, t.u, t.s))
            : (e = nl(t, n, [])),
        tl(t),
        t.u && t.v(t.u, t.s),
        e !== Vy ? e : void 0
    );
}
function nl(e, t, n) {
    if (jf(t)) return t;
    var r = t[Fe];
    if (!r)
        return (
            Zr(
                t,
                function (i, s) {
                    return Fh(e, r, t, i, s, n);
                },
                !0
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return rl(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var o = r.i === 4 || r.i === 5 ? (r.o = Ff(r.k)) : r.o;
        Zr(r.i === 3 ? new Set(o) : o, function (i, s) {
            return Fh(e, r, o, i, s, n);
        }),
            rl(e, o, !1),
            n && e.u && Pn("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function Fh(e, t, n, r, o, i) {
    if (yr(o)) {
        var s = nl(
            e,
            o,
            i && t && t.i !== 3 && !Lo(t.R, r) ? i.concat(r) : void 0
        );
        if ((Uy(n, r, s), !yr(s))) return;
        e.m = !1;
    }
    if (Wn(o) && !jf(o)) {
        if (!e.h.D && e._ < 1) return;
        nl(e, o), (t && t.A.l) || rl(e, o);
    }
}
function rl(e, t, n) {
    n === void 0 && (n = !1), e.h.D && e.m && Bf(t, n);
}
function Ju(e, t) {
    var n = e[Fe];
    return (n ? _r(n) : e)[t];
}
function Bh(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function nr(e) {
    e.P || ((e.P = !0), e.l && nr(e.l));
}
function Zu(e) {
    e.o || (e.o = Ff(e.t));
}
function pd(e, t, n) {
    var r = Df(t)
        ? Pn("MapSet").F(t, n)
        : zf(t)
        ? Pn("MapSet").T(t, n)
        : e.g
        ? (function (o, i) {
              var s = Array.isArray(o),
                  a = {
                      i: s ? 1 : 0,
                      A: i ? i.A : dd(),
                      P: !1,
                      I: !1,
                      R: {},
                      l: i,
                      t: o,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                  },
                  l = a,
                  u = vs;
              s && ((l = [a]), (u = Mi));
              var d = Proxy.revocable(l, u),
                  f = d.revoke,
                  c = d.proxy;
              return (a.k = c), (a.j = f), c;
          })(t, n)
        : Pn("ES5").J(t, n);
    return (n ? n.A : dd()).p.push(r), r;
}
function nS(e) {
    return (
        yr(e) || pn(22, e),
        (function t(n) {
            if (!Wn(n)) return n;
            var r,
                o = n[Fe],
                i = ii(n);
            if (o) {
                if (!o.P && (o.i < 4 || !Pn("ES5").K(o))) return o.t;
                (o.I = !0), (r = jh(n, i)), (o.I = !1);
            } else r = jh(n, i);
            return (
                Zr(r, function (s, a) {
                    (o && Jw(o.t, s) === a) || Uy(r, s, t(a));
                }),
                i === 3 ? new Set(r) : r
            );
        })(e)
    );
}
function jh(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return Ff(e);
}
function rS() {
    function e(i, s) {
        var a = o[i];
        return (
            a
                ? (a.enumerable = s)
                : (o[i] = a =
                      {
                          configurable: !0,
                          enumerable: s,
                          get: function () {
                              var l = this[Fe];
                              return vs.get(l, i);
                          },
                          set: function (l) {
                              var u = this[Fe];
                              vs.set(u, i, l);
                          },
                      }),
            a
        );
    }
    function t(i) {
        for (var s = i.length - 1; s >= 0; s--) {
            var a = i[s][Fe];
            if (!a.P)
                switch (a.i) {
                    case 5:
                        r(a) && nr(a);
                        break;
                    case 4:
                        n(a) && nr(a);
                }
        }
    }
    function n(i) {
        for (var s = i.t, a = i.k, l = Do(a), u = l.length - 1; u >= 0; u--) {
            var d = l[u];
            if (d !== Fe) {
                var f = s[d];
                if (f === void 0 && !Lo(s, d)) return !0;
                var c = a[d],
                    h = c && c[Fe];
                if (h ? h.t !== f : !Wy(c, f)) return !0;
            }
        }
        var g = !!s[Fe];
        return l.length !== Do(s).length + (g ? 0 : 1);
    }
    function r(i) {
        var s = i.k;
        if (s.length !== i.t.length) return !0;
        var a = Object.getOwnPropertyDescriptor(s, s.length - 1);
        if (a && !a.get) return !0;
        for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0;
        return !1;
    }
    var o = {};
    eS("ES5", {
        J: function (i, s) {
            var a = Array.isArray(i),
                l = (function (d, f) {
                    if (d) {
                        for (var c = Array(f.length), h = 0; h < f.length; h++)
                            Object.defineProperty(c, "" + h, e(h, !0));
                        return c;
                    }
                    var g = Hy(f);
                    delete g[Fe];
                    for (var p = Do(g), S = 0; S < p.length; S++) {
                        var v = p[S];
                        g[v] = e(v, d || !!g[v].enumerable);
                    }
                    return Object.create(Object.getPrototypeOf(f), g);
                })(a, i),
                u = {
                    i: a ? 5 : 4,
                    A: s ? s.A : dd(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: s,
                    t: i,
                    k: l,
                    o: null,
                    O: !1,
                    C: !1,
                };
            return Object.defineProperty(l, Fe, { value: u, writable: !0 }), l;
        },
        S: function (i, s, a) {
            a
                ? yr(s) && s[Fe].A === i && t(i.p)
                : (i.u &&
                      (function l(u) {
                          if (u && typeof u == "object") {
                              var d = u[Fe];
                              if (d) {
                                  var f = d.t,
                                      c = d.k,
                                      h = d.R,
                                      g = d.i;
                                  if (g === 4)
                                      Zr(c, function (y) {
                                          y !== Fe &&
                                              (f[y] !== void 0 || Lo(f, y)
                                                  ? h[y] || l(c[y])
                                                  : ((h[y] = !0), nr(d)));
                                      }),
                                          Zr(f, function (y) {
                                              c[y] !== void 0 ||
                                                  Lo(c, y) ||
                                                  ((h[y] = !1), nr(d));
                                          });
                                  else if (g === 5) {
                                      if (
                                          (r(d) && (nr(d), (h.length = !0)),
                                          c.length < f.length)
                                      )
                                          for (
                                              var p = c.length;
                                              p < f.length;
                                              p++
                                          )
                                              h[p] = !1;
                                      else
                                          for (
                                              var S = f.length;
                                              S < c.length;
                                              S++
                                          )
                                              h[S] = !0;
                                      for (
                                          var v = Math.min(c.length, f.length),
                                              m = 0;
                                          m < v;
                                          m++
                                      )
                                          c.hasOwnProperty(m) || (h[m] = !0),
                                              h[m] === void 0 && l(c[m]);
                                  }
                              }
                          }
                      })(i.p[0]),
                  t(i.p));
        },
        K: function (i) {
            return i.i === 4 ? n(i) : r(i);
        },
    });
}
var Uh,
    gs,
    Uf = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    oS = typeof Map < "u",
    iS = typeof Set < "u",
    Wh =
        typeof Proxy < "u" &&
        Proxy.revocable !== void 0 &&
        typeof Reflect < "u",
    Vy = Uf
        ? Symbol.for("immer-nothing")
        : (((Uh = {})["immer-nothing"] = !0), Uh),
    Vh = Uf ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Fe = Uf ? Symbol.for("immer-state") : "__$immer_state",
    sS = "" + Object.prototype.constructor,
    Do =
        typeof Reflect < "u" && Reflect.ownKeys
            ? Reflect.ownKeys
            : Object.getOwnPropertySymbols !== void 0
            ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                      Object.getOwnPropertySymbols(e)
                  );
              }
            : Object.getOwnPropertyNames,
    Hy =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                Do(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    hd = {},
    vs = {
        get: function (e, t) {
            if (t === Fe) return e;
            var n = _r(e);
            if (!Lo(n, t))
                return (function (o, i, s) {
                    var a,
                        l = Bh(i, s);
                    return l
                        ? "value" in l
                            ? l.value
                            : (a = l.get) === null || a === void 0
                            ? void 0
                            : a.call(o.k)
                        : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !Wn(r)
                ? r
                : r === Ju(e.t, t)
                ? (Zu(e), (e.o[t] = pd(e.A.h, r, e)))
                : r;
        },
        has: function (e, t) {
            return t in _r(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(_r(e));
        },
        set: function (e, t, n) {
            var r = Bh(_r(e), t);
            if (r != null && r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var o = Ju(_r(e), t),
                    i = o == null ? void 0 : o[Fe];
                if (i && i.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (Wy(n, o) && (n !== void 0 || Lo(e.t, t))) return !0;
                Zu(e), nr(e);
            }
            return (
                (e.o[t] === n && (n !== void 0 || t in e.o)) ||
                    (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                    ((e.o[t] = n), (e.R[t] = !0)),
                !0
            );
        },
        deleteProperty: function (e, t) {
            return (
                Ju(e.t, t) !== void 0 || t in e.t
                    ? ((e.R[t] = !1), Zu(e), nr(e))
                    : delete e.R[t],
                e.o && delete e.o[t],
                !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = _r(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return (
                r && {
                    writable: !0,
                    configurable: e.i !== 1 || t !== "length",
                    enumerable: r.enumerable,
                    value: n[t],
                }
            );
        },
        defineProperty: function () {
            pn(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            pn(12);
        },
    },
    Mi = {};
Zr(vs, function (e, t) {
    Mi[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (Mi.deleteProperty = function (e, t) {
        return Mi.set.call(this, e, t, void 0);
    }),
    (Mi.set = function (e, t, n) {
        return vs.set.call(this, e[0], t, n, e[0]);
    });
var aS = (function () {
        function e(n) {
            var r = this;
            (this.g = Wh),
                (this.D = !0),
                (this.produce = function (o, i, s) {
                    if (typeof o == "function" && typeof i != "function") {
                        var a = i;
                        i = o;
                        var l = r;
                        return function (p) {
                            var S = this;
                            p === void 0 && (p = a);
                            for (
                                var v = arguments.length,
                                    m = Array(v > 1 ? v - 1 : 0),
                                    y = 1;
                                y < v;
                                y++
                            )
                                m[y - 1] = arguments[y];
                            return l.produce(p, function (x) {
                                var C;
                                return (C = i).call.apply(C, [S, x].concat(m));
                            });
                        };
                    }
                    var u;
                    if (
                        (typeof i != "function" && pn(6),
                        s !== void 0 && typeof s != "function" && pn(7),
                        Wn(o))
                    ) {
                        var d = zh(r),
                            f = pd(r, o, void 0),
                            c = !0;
                        try {
                            (u = i(f)), (c = !1);
                        } finally {
                            c ? tl(d) : fd(d);
                        }
                        return typeof Promise < "u" && u instanceof Promise
                            ? u.then(
                                  function (p) {
                                      return Xu(d, s), Qu(p, d);
                                  },
                                  function (p) {
                                      throw (tl(d), p);
                                  }
                              )
                            : (Xu(d, s), Qu(u, d));
                    }
                    if (!o || typeof o != "object") {
                        if (
                            ((u = i(o)) === void 0 && (u = o),
                            u === Vy && (u = void 0),
                            r.D && Bf(u, !0),
                            s)
                        ) {
                            var h = [],
                                g = [];
                            Pn("Patches").M(o, u, h, g), s(h, g);
                        }
                        return u;
                    }
                    pn(21, o);
                }),
                (this.produceWithPatches = function (o, i) {
                    if (typeof o == "function")
                        return function (u) {
                            for (
                                var d = arguments.length,
                                    f = Array(d > 1 ? d - 1 : 0),
                                    c = 1;
                                c < d;
                                c++
                            )
                                f[c - 1] = arguments[c];
                            return r.produceWithPatches(u, function (h) {
                                return o.apply(void 0, [h].concat(f));
                            });
                        };
                    var s,
                        a,
                        l = r.produce(o, i, function (u, d) {
                            (s = u), (a = d);
                        });
                    return typeof Promise < "u" && l instanceof Promise
                        ? l.then(function (u) {
                              return [u, s, a];
                          })
                        : [l, s, a];
                }),
                typeof (n == null ? void 0 : n.useProxies) == "boolean" &&
                    this.setUseProxies(n.useProxies),
                typeof (n == null ? void 0 : n.autoFreeze) == "boolean" &&
                    this.setAutoFreeze(n.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (n) {
                Wn(n) || pn(8), yr(n) && (n = nS(n));
                var r = zh(this),
                    o = pd(this, n, void 0);
                return (o[Fe].C = !0), fd(r), o;
            }),
            (t.finishDraft = function (n, r) {
                var o = n && n[Fe],
                    i = o.A;
                return Xu(i, r), Qu(void 0, i);
            }),
            (t.setAutoFreeze = function (n) {
                this.D = n;
            }),
            (t.setUseProxies = function (n) {
                n && !Wh && pn(20), (this.g = n);
            }),
            (t.applyPatches = function (n, r) {
                var o;
                for (o = r.length - 1; o >= 0; o--) {
                    var i = r[o];
                    if (i.path.length === 0 && i.op === "replace") {
                        n = i.value;
                        break;
                    }
                }
                o > -1 && (r = r.slice(o + 1));
                var s = Pn("Patches").$;
                return yr(n)
                    ? s(n, r)
                    : this.produce(n, function (a) {
                          return s(a, r);
                      });
            }),
            e
        );
    })(),
    Wt = new aS(),
    Ky = Wt.produce;
Wt.produceWithPatches.bind(Wt);
Wt.setAutoFreeze.bind(Wt);
Wt.setUseProxies.bind(Wt);
Wt.applyPatches.bind(Wt);
Wt.createDraft.bind(Wt);
Wt.finishDraft.bind(Wt);
function ys(e) {
    return (
        (ys =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t &&
                          typeof Symbol == "function" &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                  }),
        ys(e)
    );
}
function lS(e, t) {
    if (ys(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (ys(r) !== "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
}
function uS(e) {
    var t = lS(e, "string");
    return ys(t) === "symbol" ? t : String(t);
}
function cS(e, t, n) {
    return (
        (t = uS(t)),
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Hh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Kh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
            ? Hh(Object(n), !0).forEach(function (r) {
                  cS(e, r, n[r]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hh(Object(n)).forEach(function (r) {
                  Object.defineProperty(
                      e,
                      r,
                      Object.getOwnPropertyDescriptor(n, r)
                  );
              });
    }
    return e;
}
function bt(e) {
    return (
        "Minified Redux error #" +
        e +
        "; visit https://redux.js.org/Errors?code=" +
        e +
        " for the full message or use the non-minified dev environment for full errors. "
    );
}
var Gh = (function () {
        return (
            (typeof Symbol == "function" && Symbol.observable) || "@@observable"
        );
    })(),
    ec = function () {
        return Math.random().toString(36).substring(7).split("").join(".");
    },
    ol = {
        INIT: "@@redux/INIT" + ec(),
        REPLACE: "@@redux/REPLACE" + ec(),
        PROBE_UNKNOWN_ACTION: function () {
            return "@@redux/PROBE_UNKNOWN_ACTION" + ec();
        },
    };
function dS(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null; )
        t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t;
}
function Gy(e, t, n) {
    var r;
    if (
        (typeof t == "function" && typeof n == "function") ||
        (typeof n == "function" && typeof arguments[3] == "function")
    )
        throw new Error(bt(0));
    if (
        (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
        typeof n < "u")
    ) {
        if (typeof n != "function") throw new Error(bt(1));
        return n(Gy)(e, t);
    }
    if (typeof e != "function") throw new Error(bt(2));
    var o = e,
        i = t,
        s = [],
        a = s,
        l = !1;
    function u() {
        a === s && (a = s.slice());
    }
    function d() {
        if (l) throw new Error(bt(3));
        return i;
    }
    function f(p) {
        if (typeof p != "function") throw new Error(bt(4));
        if (l) throw new Error(bt(5));
        var S = !0;
        return (
            u(),
            a.push(p),
            function () {
                if (S) {
                    if (l) throw new Error(bt(6));
                    (S = !1), u();
                    var m = a.indexOf(p);
                    a.splice(m, 1), (s = null);
                }
            }
        );
    }
    function c(p) {
        if (!dS(p)) throw new Error(bt(7));
        if (typeof p.type > "u") throw new Error(bt(8));
        if (l) throw new Error(bt(9));
        try {
            (l = !0), (i = o(i, p));
        } finally {
            l = !1;
        }
        for (var S = (s = a), v = 0; v < S.length; v++) {
            var m = S[v];
            m();
        }
        return p;
    }
    function h(p) {
        if (typeof p != "function") throw new Error(bt(10));
        (o = p), c({ type: ol.REPLACE });
    }
    function g() {
        var p,
            S = f;
        return (
            (p = {
                subscribe: function (m) {
                    if (typeof m != "object" || m === null)
                        throw new Error(bt(11));
                    function y() {
                        m.next && m.next(d());
                    }
                    y();
                    var x = S(y);
                    return { unsubscribe: x };
                },
            }),
            (p[Gh] = function () {
                return this;
            }),
            p
        );
    }
    return (
        c({ type: ol.INIT }),
        (r = { dispatch: c, subscribe: f, getState: d, replaceReducer: h }),
        (r[Gh] = g),
        r
    );
}
function fS(e) {
    Object.keys(e).forEach(function (t) {
        var n = e[t],
            r = n(void 0, { type: ol.INIT });
        if (typeof r > "u") throw new Error(bt(12));
        if (typeof n(void 0, { type: ol.PROBE_UNKNOWN_ACTION() }) > "u")
            throw new Error(bt(13));
    });
}
function pS(e) {
    for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        typeof e[o] == "function" && (n[o] = e[o]);
    }
    var i = Object.keys(n),
        s;
    try {
        fS(n);
    } catch (a) {
        s = a;
    }
    return function (l, u) {
        if ((l === void 0 && (l = {}), s)) throw s;
        for (var d = !1, f = {}, c = 0; c < i.length; c++) {
            var h = i[c],
                g = n[h],
                p = l[h],
                S = g(p, u);
            if (typeof S > "u") throw (u && u.type, new Error(bt(14)));
            (f[h] = S), (d = d || S !== p);
        }
        return (d = d || i.length !== Object.keys(l).length), d ? f : l;
    };
}
function il() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return t.length === 0
        ? function (r) {
              return r;
          }
        : t.length === 1
        ? t[0]
        : t.reduce(function (r, o) {
              return function () {
                  return r(o.apply(void 0, arguments));
              };
          });
}
function hS() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return function (r) {
        return function () {
            var o = r.apply(void 0, arguments),
                i = function () {
                    throw new Error(bt(15));
                },
                s = {
                    getState: o.getState,
                    dispatch: function () {
                        return i.apply(void 0, arguments);
                    },
                },
                a = t.map(function (l) {
                    return l(s);
                });
            return (
                (i = il.apply(void 0, a)(o.dispatch)),
                Kh(Kh({}, o), {}, { dispatch: i })
            );
        };
    };
}
function qy(e) {
    var t = function (r) {
        var o = r.dispatch,
            i = r.getState;
        return function (s) {
            return function (a) {
                return typeof a == "function" ? a(o, i, e) : s(a);
            };
        };
    };
    return t;
}
var Yy = qy();
Yy.withExtraArgument = qy;
const qh = Yy;
var mS =
        (globalThis && globalThis.__extends) ||
        (function () {
            var e = function (t, n) {
                return (
                    (e =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (r, o) {
                                r.__proto__ = o;
                            }) ||
                        function (r, o) {
                            for (var i in o)
                                Object.prototype.hasOwnProperty.call(o, i) &&
                                    (r[i] = o[i]);
                        }),
                    e(t, n)
                );
            };
            return function (t, n) {
                if (typeof n != "function" && n !== null)
                    throw new TypeError(
                        "Class extends value " +
                            String(n) +
                            " is not a constructor or null"
                    );
                e(t, n);
                function r() {
                    this.constructor = t;
                }
                t.prototype =
                    n === null
                        ? Object.create(n)
                        : ((r.prototype = n.prototype), new r());
            };
        })(),
    _s =
        (globalThis && globalThis.__generator) ||
        function (e, t) {
            var n = {
                    label: 0,
                    sent: function () {
                        if (i[0] & 1) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: [],
                },
                r,
                o,
                i,
                s;
            return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                typeof Symbol == "function" &&
                    (s[Symbol.iterator] = function () {
                        return this;
                    }),
                s
            );
            function a(u) {
                return function (d) {
                    return l([u, d]);
                };
            }
            function l(u) {
                if (r) throw new TypeError("Generator is already executing.");
                for (; n; )
                    try {
                        if (
                            ((r = 1),
                            o &&
                                (i =
                                    u[0] & 2
                                        ? o.return
                                        : u[0]
                                        ? o.throw ||
                                          ((i = o.return) && i.call(o), 0)
                                        : o.next) &&
                                !(i = i.call(o, u[1])).done)
                        )
                            return i;
                        switch (
                            ((o = 0), i && (u = [u[0] & 2, i.value]), u[0])
                        ) {
                            case 0:
                            case 1:
                                i = u;
                                break;
                            case 4:
                                return n.label++, { value: u[1], done: !1 };
                            case 5:
                                n.label++, (o = u[1]), (u = [0]);
                                continue;
                            case 7:
                                (u = n.ops.pop()), n.trys.pop();
                                continue;
                            default:
                                if (
                                    ((i = n.trys),
                                    !(i = i.length > 0 && i[i.length - 1]) &&
                                        (u[0] === 6 || u[0] === 2))
                                ) {
                                    n = 0;
                                    continue;
                                }
                                if (
                                    u[0] === 3 &&
                                    (!i || (u[1] > i[0] && u[1] < i[3]))
                                ) {
                                    n.label = u[1];
                                    break;
                                }
                                if (u[0] === 6 && n.label < i[1]) {
                                    (n.label = i[1]), (i = u);
                                    break;
                                }
                                if (i && n.label < i[2]) {
                                    (n.label = i[2]), n.ops.push(u);
                                    break;
                                }
                                i[2] && n.ops.pop(), n.trys.pop();
                                continue;
                        }
                        u = t.call(e, n);
                    } catch (d) {
                        (u = [6, d]), (o = 0);
                    } finally {
                        r = i = 0;
                    }
                if (u[0] & 5) throw u[1];
                return { value: u[0] ? u[1] : void 0, done: !0 };
            }
        },
    bs =
        (globalThis && globalThis.__spreadArray) ||
        function (e, t) {
            for (var n = 0, r = t.length, o = e.length; n < r; n++, o++)
                e[o] = t[n];
            return e;
        },
    gS = Object.defineProperty,
    vS = Object.defineProperties,
    yS = Object.getOwnPropertyDescriptors,
    Yh = Object.getOwnPropertySymbols,
    bS = Object.prototype.hasOwnProperty,
    xS = Object.prototype.propertyIsEnumerable,
    Xh = function (e, t, n) {
        return t in e
            ? gS(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n);
    },
    hr = function (e, t) {
        for (var n in t || (t = {})) bS.call(t, n) && Xh(e, n, t[n]);
        if (Yh)
            for (var r = 0, o = Yh(t); r < o.length; r++) {
                var n = o[r];
                xS.call(t, n) && Xh(e, n, t[n]);
            }
        return e;
    },
    tc = function (e, t) {
        return vS(e, yS(t));
    },
    Ms = function (e, t, n) {
        return new Promise(function (r, o) {
            var i = function (l) {
                    try {
                        a(n.next(l));
                    } catch (u) {
                        o(u);
                    }
                },
                s = function (l) {
                    try {
                        a(n.throw(l));
                    } catch (u) {
                        o(u);
                    }
                },
                a = function (l) {
                    return l.done
                        ? r(l.value)
                        : Promise.resolve(l.value).then(i, s);
                };
            a((n = n.apply(e, t)).next());
        });
    },
    wS =
        typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                  if (arguments.length !== 0)
                      return typeof arguments[0] == "object"
                          ? il
                          : il.apply(null, arguments);
              };
function SS(e) {
    if (typeof e != "object" || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
    return t === n;
}
var CS = (function (e) {
    mS(t, e);
    function t() {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        var o = e.apply(this, n) || this;
        return Object.setPrototypeOf(o, t.prototype), o;
    }
    return (
        Object.defineProperty(t, Symbol.species, {
            get: function () {
                return t;
            },
            enumerable: !1,
            configurable: !0,
        }),
        (t.prototype.concat = function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return e.prototype.concat.apply(this, n);
        }),
        (t.prototype.prepend = function () {
            for (var n = [], r = 0; r < arguments.length; r++)
                n[r] = arguments[r];
            return n.length === 1 && Array.isArray(n[0])
                ? new (t.bind.apply(t, bs([void 0], n[0].concat(this))))()
                : new (t.bind.apply(t, bs([void 0], n.concat(this))))();
        }),
        t
    );
})(Array);
function md(e) {
    return Wn(e) ? Ky(e, function () {}) : e;
}
function ES(e) {
    return typeof e == "boolean";
}
function kS() {
    return function (t) {
        return RS(t);
    };
}
function RS(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
        n = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck;
    var r = new CS();
    return (
        n &&
            (ES(n)
                ? r.push(qh)
                : r.push(qh.withExtraArgument(n.extraArgument))),
        r
    );
}
var PS = !0;
function $S(e) {
    var t = kS(),
        n = e || {},
        r = n.reducer,
        o = r === void 0 ? void 0 : r,
        i = n.middleware,
        s = i === void 0 ? t() : i,
        a = n.devTools,
        l = a === void 0 ? !0 : a,
        u = n.preloadedState,
        d = u === void 0 ? void 0 : u,
        f = n.enhancers,
        c = f === void 0 ? void 0 : f,
        h;
    if (typeof o == "function") h = o;
    else if (SS(o)) h = pS(o);
    else
        throw new Error(
            '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
        );
    var g = s;
    typeof g == "function" && (g = g(t));
    var p = hS.apply(void 0, g),
        S = il;
    l && (S = wS(hr({ trace: !PS }, typeof l == "object" && l)));
    var v = [p];
    Array.isArray(c) ? (v = bs([p], c)) : typeof c == "function" && (v = c(v));
    var m = S.apply(void 0, v);
    return Gy(h, d, m);
}
function Dn(e, t) {
    function n() {
        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
        if (t) {
            var i = t.apply(void 0, r);
            if (!i) throw new Error("prepareAction did not return an object");
            return hr(
                hr(
                    { type: e, payload: i.payload },
                    "meta" in i && { meta: i.meta }
                ),
                "error" in i && { error: i.error }
            );
        }
        return { type: e, payload: r[0] };
    }
    return (
        (n.toString = function () {
            return "" + e;
        }),
        (n.type = e),
        (n.match = function (r) {
            return r.type === e;
        }),
        n
    );
}
function Xy(e) {
    var t = {},
        n = [],
        r,
        o = {
            addCase: function (i, s) {
                var a = typeof i == "string" ? i : i.type;
                if (a in t)
                    throw new Error(
                        "addCase cannot be called with two reducers for the same action type"
                    );
                return (t[a] = s), o;
            },
            addMatcher: function (i, s) {
                return n.push({ matcher: i, reducer: s }), o;
            },
            addDefaultCase: function (i) {
                return (r = i), o;
            },
        };
    return e(o), [t, n, r];
}
function TS(e) {
    return typeof e == "function";
}
function OS(e, t, n, r) {
    n === void 0 && (n = []);
    var o = typeof t == "function" ? Xy(t) : [t, n, r],
        i = o[0],
        s = o[1],
        a = o[2],
        l;
    if (TS(e))
        l = function () {
            return md(e());
        };
    else {
        var u = md(e);
        l = function () {
            return u;
        };
    }
    function d(f, c) {
        f === void 0 && (f = l());
        var h = bs(
            [i[c.type]],
            s
                .filter(function (g) {
                    var p = g.matcher;
                    return p(c);
                })
                .map(function (g) {
                    var p = g.reducer;
                    return p;
                })
        );
        return (
            h.filter(function (g) {
                return !!g;
            }).length === 0 && (h = [a]),
            h.reduce(function (g, p) {
                if (p)
                    if (yr(g)) {
                        var S = g,
                            v = p(S, c);
                        return v === void 0 ? g : v;
                    } else {
                        if (Wn(g))
                            return Ky(g, function (m) {
                                return p(m, c);
                            });
                        var v = p(g, c);
                        if (v === void 0) {
                            if (g === null) return g;
                            throw Error(
                                "A case reducer on a non-draftable value must not return undefined"
                            );
                        }
                        return v;
                    }
                return g;
            }, f)
        );
    }
    return (d.getInitialState = l), d;
}
function IS(e, t) {
    return e + "/" + t;
}
function _S(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    typeof process < "u";
    var n =
            typeof e.initialState == "function"
                ? e.initialState
                : md(e.initialState),
        r = e.reducers || {},
        o = Object.keys(r),
        i = {},
        s = {},
        a = {};
    o.forEach(function (d) {
        var f = r[d],
            c = IS(t, d),
            h,
            g;
        "reducer" in f ? ((h = f.reducer), (g = f.prepare)) : (h = f),
            (i[d] = h),
            (s[c] = h),
            (a[d] = g ? Dn(c, g) : Dn(c));
    });
    function l() {
        var d =
                typeof e.extraReducers == "function"
                    ? Xy(e.extraReducers)
                    : [e.extraReducers],
            f = d[0],
            c = f === void 0 ? {} : f,
            h = d[1],
            g = h === void 0 ? [] : h,
            p = d[2],
            S = p === void 0 ? void 0 : p,
            v = hr(hr({}, c), s);
        return OS(n, function (m) {
            for (var y in v) m.addCase(y, v[y]);
            for (var x = 0, C = g; x < C.length; x++) {
                var k = C[x];
                m.addMatcher(k.matcher, k.reducer);
            }
            S && m.addDefaultCase(S);
        });
    }
    var u;
    return {
        name: t,
        reducer: function (d, f) {
            return u || (u = l()), u(d, f);
        },
        actions: a,
        caseReducers: i,
        getInitialState: function () {
            return u || (u = l()), u.getInitialState();
        },
    };
}
var MS = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    Qy = function (e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--; ) t += MS[(Math.random() * 64) | 0];
        return t;
    },
    NS = ["name", "message", "stack", "code"],
    nc = (function () {
        function e(t, n) {
            (this.payload = t), (this.meta = n);
        }
        return e;
    })(),
    Qh = (function () {
        function e(t, n) {
            (this.payload = t), (this.meta = n);
        }
        return e;
    })(),
    AS = function (e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, r = NS; n < r.length; n++) {
                var o = r[n];
                typeof e[o] == "string" && (t[o] = e[o]);
            }
            return t;
        }
        return { message: String(e) };
    };
(function () {
    function e(t, n, r) {
        var o = Dn(t + "/fulfilled", function (u, d, f, c) {
                return {
                    payload: u,
                    meta: tc(hr({}, c || {}), {
                        arg: f,
                        requestId: d,
                        requestStatus: "fulfilled",
                    }),
                };
            }),
            i = Dn(t + "/pending", function (u, d, f) {
                return {
                    payload: void 0,
                    meta: tc(hr({}, f || {}), {
                        arg: d,
                        requestId: u,
                        requestStatus: "pending",
                    }),
                };
            }),
            s = Dn(t + "/rejected", function (u, d, f, c, h) {
                return {
                    payload: c,
                    error: ((r && r.serializeError) || AS)(u || "Rejected"),
                    meta: tc(hr({}, h || {}), {
                        arg: f,
                        requestId: d,
                        rejectedWithValue: !!c,
                        requestStatus: "rejected",
                        aborted: (u == null ? void 0 : u.name) === "AbortError",
                        condition:
                            (u == null ? void 0 : u.name) === "ConditionError",
                    }),
                };
            }),
            a =
                typeof AbortController < "u"
                    ? AbortController
                    : (function () {
                          function u() {
                              this.signal = {
                                  aborted: !1,
                                  addEventListener: function () {},
                                  dispatchEvent: function () {
                                      return !1;
                                  },
                                  onabort: function () {},
                                  removeEventListener: function () {},
                                  reason: void 0,
                                  throwIfAborted: function () {},
                              };
                          }
                          return (u.prototype.abort = function () {}), u;
                      })();
        function l(u) {
            return function (d, f, c) {
                var h = r != null && r.idGenerator ? r.idGenerator(u) : Qy(),
                    g = new a(),
                    p;
                function S(m) {
                    (p = m), g.abort();
                }
                var v = (function () {
                    return Ms(this, null, function () {
                        var m, y, x, C, k, E, T;
                        return _s(this, function (O) {
                            switch (O.label) {
                                case 0:
                                    return (
                                        O.trys.push([0, 4, , 5]),
                                        (C =
                                            (m =
                                                r == null
                                                    ? void 0
                                                    : r.condition) == null
                                                ? void 0
                                                : m.call(r, u, {
                                                      getState: f,
                                                      extra: c,
                                                  })),
                                        DS(C) ? [4, C] : [3, 2]
                                    );
                                case 1:
                                    (C = O.sent()), (O.label = 2);
                                case 2:
                                    if (C === !1 || g.signal.aborted)
                                        throw {
                                            name: "ConditionError",
                                            message:
                                                "Aborted due to condition callback returning false.",
                                        };
                                    return (
                                        (k = new Promise(function (P, z) {
                                            return g.signal.addEventListener(
                                                "abort",
                                                function () {
                                                    return z({
                                                        name: "AbortError",
                                                        message: p || "Aborted",
                                                    });
                                                }
                                            );
                                        })),
                                        d(
                                            i(
                                                h,
                                                u,
                                                (y =
                                                    r == null
                                                        ? void 0
                                                        : r.getPendingMeta) ==
                                                    null
                                                    ? void 0
                                                    : y.call(
                                                          r,
                                                          {
                                                              requestId: h,
                                                              arg: u,
                                                          },
                                                          {
                                                              getState: f,
                                                              extra: c,
                                                          }
                                                      )
                                            )
                                        ),
                                        [
                                            4,
                                            Promise.race([
                                                k,
                                                Promise.resolve(
                                                    n(u, {
                                                        dispatch: d,
                                                        getState: f,
                                                        extra: c,
                                                        requestId: h,
                                                        signal: g.signal,
                                                        abort: S,
                                                        rejectWithValue:
                                                            function (P, z) {
                                                                return new nc(
                                                                    P,
                                                                    z
                                                                );
                                                            },
                                                        fulfillWithValue:
                                                            function (P, z) {
                                                                return new Qh(
                                                                    P,
                                                                    z
                                                                );
                                                            },
                                                    })
                                                ).then(function (P) {
                                                    if (P instanceof nc)
                                                        throw P;
                                                    return P instanceof Qh
                                                        ? o(
                                                              P.payload,
                                                              h,
                                                              u,
                                                              P.meta
                                                          )
                                                        : o(P, h, u);
                                                }),
                                            ]),
                                        ]
                                    );
                                case 3:
                                    return (x = O.sent()), [3, 5];
                                case 4:
                                    return (
                                        (E = O.sent()),
                                        (x =
                                            E instanceof nc
                                                ? s(
                                                      null,
                                                      h,
                                                      u,
                                                      E.payload,
                                                      E.meta
                                                  )
                                                : s(E, h, u)),
                                        [3, 5]
                                    );
                                case 5:
                                    return (
                                        (T =
                                            r &&
                                            !r.dispatchConditionRejection &&
                                            s.match(x) &&
                                            x.meta.condition),
                                        T || d(x),
                                        [2, x]
                                    );
                            }
                        });
                    });
                })();
                return Object.assign(v, {
                    abort: S,
                    requestId: h,
                    arg: u,
                    unwrap: function () {
                        return v.then(LS);
                    },
                });
            };
        }
        return Object.assign(l, {
            pending: i,
            rejected: s,
            fulfilled: o,
            typePrefix: t,
        });
    }
    return (
        (e.withTypes = function () {
            return e;
        }),
        e
    );
})();
function LS(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload;
}
function DS(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function";
}
var zS = function (e) {
        return e && typeof e.match == "function";
    },
    FS = function (e, t) {
        return zS(e) ? e.match(t) : e(t);
    };
function BS() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return function (n) {
        return e.some(function (r) {
            return FS(r, n);
        });
    };
}
var Wf = function (e, t) {
        if (typeof e != "function")
            throw new TypeError(t + " is not a function");
    },
    jS = function () {},
    Vf = function (e, t) {
        return t === void 0 && (t = jS), e.catch(t), e;
    },
    Jy = function (e, t) {
        e.addEventListener("abort", t, { once: !0 });
    },
    zo = function (e, t) {
        var n = e.signal;
        n.aborted ||
            ("reason" in n ||
                Object.defineProperty(n, "reason", {
                    enumerable: !0,
                    value: t,
                    configurable: !0,
                    writable: !0,
                }),
            e.abort(t));
    },
    US = "task",
    Zy = "listener",
    e0 = "completed",
    Hf = "cancelled",
    WS = "task-" + Hf,
    VS = "task-" + e0,
    t0 = Zy + "-" + Hf,
    HS = Zy + "-" + e0,
    Yl = (function () {
        function e(t) {
            (this.code = t),
                (this.name = "TaskAbortError"),
                (this.message = US + " " + Hf + " (reason: " + t + ")");
        }
        return e;
    })(),
    Fo = function (e) {
        if (e.aborted) throw new Yl(e.reason);
    },
    n0 = function (e) {
        return Vf(
            new Promise(function (t, n) {
                var r = function () {
                    return n(new Yl(e.reason));
                };
                e.aborted ? r() : Jy(e, r);
            })
        );
    },
    KS = function (e, t) {
        return Ms(void 0, null, function () {
            var n, r;
            return _s(this, function (o) {
                switch (o.label) {
                    case 0:
                        return (
                            o.trys.push([0, 3, 4, 5]), [4, Promise.resolve()]
                        );
                    case 1:
                        return o.sent(), [4, e()];
                    case 2:
                        return (n = o.sent()), [2, { status: "ok", value: n }];
                    case 3:
                        return (
                            (r = o.sent()),
                            [
                                2,
                                {
                                    status:
                                        r instanceof Yl
                                            ? "cancelled"
                                            : "rejected",
                                    error: r,
                                },
                            ]
                        );
                    case 4:
                        return t == null || t(), [7];
                    case 5:
                        return [2];
                }
            });
        });
    },
    sl = function (e) {
        return function (t) {
            return Vf(
                Promise.race([n0(e), t]).then(function (n) {
                    return Fo(e), n;
                })
            );
        };
    },
    r0 = function (e) {
        var t = sl(e);
        return function (n) {
            return t(
                new Promise(function (r) {
                    return setTimeout(r, n);
                })
            );
        };
    },
    GS = Object.assign,
    Jh = {},
    Ns = "listenerMiddleware",
    qS = function (e) {
        var t = function (n) {
            return Jy(e, function () {
                return zo(n, e.reason);
            });
        };
        return function (n) {
            Wf(n, "taskExecutor");
            var r = new AbortController();
            t(r);
            var o = KS(
                function () {
                    return Ms(void 0, null, function () {
                        var i;
                        return _s(this, function (s) {
                            switch (s.label) {
                                case 0:
                                    return (
                                        Fo(e),
                                        Fo(r.signal),
                                        [
                                            4,
                                            n({
                                                pause: sl(r.signal),
                                                delay: r0(r.signal),
                                                signal: r.signal,
                                            }),
                                        ]
                                    );
                                case 1:
                                    return (i = s.sent()), Fo(r.signal), [2, i];
                            }
                        });
                    });
                },
                function () {
                    return zo(r, VS);
                }
            );
            return {
                result: sl(e)(o),
                cancel: function () {
                    zo(r, WS);
                },
            };
        };
    },
    YS = function (e, t) {
        var n = function (r, o) {
            return Ms(void 0, null, function () {
                var i, s, a, l;
                return _s(this, function (u) {
                    switch (u.label) {
                        case 0:
                            Fo(t),
                                (i = function () {}),
                                (s = new Promise(function (d) {
                                    i = e({
                                        predicate: r,
                                        effect: function (f, c) {
                                            c.unsubscribe(),
                                                d([
                                                    f,
                                                    c.getState(),
                                                    c.getOriginalState(),
                                                ]);
                                        },
                                    });
                                })),
                                (a = [n0(t), s]),
                                o != null &&
                                    a.push(
                                        new Promise(function (d) {
                                            return setTimeout(d, o, null);
                                        })
                                    ),
                                (u.label = 1);
                        case 1:
                            return (
                                u.trys.push([1, , 3, 4]), [4, Promise.race(a)]
                            );
                        case 2:
                            return (l = u.sent()), Fo(t), [2, l];
                        case 3:
                            return i(), [7];
                        case 4:
                            return [2];
                    }
                });
            });
        };
        return function (r, o) {
            return Vf(n(r, o));
        };
    },
    o0 = function (e) {
        var t = e.type,
            n = e.actionCreator,
            r = e.matcher,
            o = e.predicate,
            i = e.effect;
        if (t) o = Dn(t).match;
        else if (n) (t = n.type), (o = n.match);
        else if (r) o = r;
        else if (!o)
            throw new Error(
                "Creating or removing a listener requires one of the known fields for matching an action"
            );
        return Wf(i, "options.listener"), { predicate: o, type: t, effect: i };
    },
    XS = function (e) {
        var t = o0(e),
            n = t.type,
            r = t.predicate,
            o = t.effect,
            i = Qy(),
            s = {
                id: i,
                effect: o,
                type: n,
                predicate: r,
                pending: new Set(),
                unsubscribe: function () {
                    throw new Error("Unsubscribe not initialized");
                },
            };
        return s;
    },
    QS = function (e) {
        return function () {
            e.forEach(gd), e.clear();
        };
    },
    Zh = function (e, t, n) {
        try {
            e(t, n);
        } catch (r) {
            setTimeout(function () {
                throw r;
            }, 0);
        }
    },
    JS = Dn(Ns + "/add"),
    ZS = Dn(Ns + "/removeAll"),
    eC = Dn(Ns + "/remove"),
    tC = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        console.error.apply(console, bs([Ns + "/error"], e));
    },
    gd = function (e) {
        e.pending.forEach(function (t) {
            zo(t, t0);
        });
    };
function nC(e) {
    var t = this;
    e === void 0 && (e = {});
    var n = new Map(),
        r = e.extra,
        o = e.onError,
        i = o === void 0 ? tC : o;
    Wf(i, "onError");
    var s = function (h) {
            return (
                (h.unsubscribe = function () {
                    return n.delete(h.id);
                }),
                n.set(h.id, h),
                function (g) {
                    h.unsubscribe(), g != null && g.cancelActive && gd(h);
                }
            );
        },
        a = function (h) {
            for (var g = 0, p = Array.from(n.values()); g < p.length; g++) {
                var S = p[g];
                if (h(S)) return S;
            }
        },
        l = function (h) {
            var g = a(function (p) {
                return p.effect === h.effect;
            });
            return g || (g = XS(h)), s(g);
        },
        u = function (h) {
            var g = o0(h),
                p = g.type,
                S = g.effect,
                v = g.predicate,
                m = a(function (y) {
                    var x =
                        typeof p == "string" ? y.type === p : y.predicate === v;
                    return x && y.effect === S;
                });
            return m && (m.unsubscribe(), h.cancelActive && gd(m)), !!m;
        },
        d = function (h, g, p, S) {
            return Ms(t, null, function () {
                var v, m, y;
                return _s(this, function (x) {
                    switch (x.label) {
                        case 0:
                            (v = new AbortController()),
                                (m = YS(l, v.signal)),
                                (x.label = 1);
                        case 1:
                            return (
                                x.trys.push([1, 3, 4, 5]),
                                h.pending.add(v),
                                [
                                    4,
                                    Promise.resolve(
                                        h.effect(
                                            g,
                                            GS({}, p, {
                                                getOriginalState: S,
                                                condition: function (C, k) {
                                                    return m(C, k).then(
                                                        Boolean
                                                    );
                                                },
                                                take: m,
                                                delay: r0(v.signal),
                                                pause: sl(v.signal),
                                                extra: r,
                                                signal: v.signal,
                                                fork: qS(v.signal),
                                                unsubscribe: h.unsubscribe,
                                                subscribe: function () {
                                                    n.set(h.id, h);
                                                },
                                                cancelActiveListeners:
                                                    function () {
                                                        h.pending.forEach(
                                                            function (C, k, E) {
                                                                C !== v &&
                                                                    (zo(C, t0),
                                                                    E.delete(
                                                                        C
                                                                    ));
                                                            }
                                                        );
                                                    },
                                            })
                                        )
                                    ),
                                ]
                            );
                        case 2:
                            return x.sent(), [3, 5];
                        case 3:
                            return (
                                (y = x.sent()),
                                y instanceof Yl ||
                                    Zh(i, y, { raisedBy: "effect" }),
                                [3, 5]
                            );
                        case 4:
                            return zo(v, HS), h.pending.delete(v), [7];
                        case 5:
                            return [2];
                    }
                });
            });
        },
        f = QS(n),
        c = function (h) {
            return function (g) {
                return function (p) {
                    if (JS.match(p)) return l(p.payload);
                    if (ZS.match(p)) {
                        f();
                        return;
                    }
                    if (eC.match(p)) return u(p.payload);
                    var S = h.getState(),
                        v = function () {
                            if (S === Jh)
                                throw new Error(
                                    Ns +
                                        ": getOriginalState can only be called synchronously"
                                );
                            return S;
                        },
                        m;
                    try {
                        if (((m = g(p)), n.size > 0))
                            for (
                                var y = h.getState(),
                                    x = Array.from(n.values()),
                                    C = 0,
                                    k = x;
                                C < k.length;
                                C++
                            ) {
                                var E = k[C],
                                    T = !1;
                                try {
                                    T = E.predicate(p, y, S);
                                } catch (O) {
                                    (T = !1),
                                        Zh(i, O, { raisedBy: "predicate" });
                                }
                                T && d(E, p, h, v);
                            }
                    } finally {
                        S = Jh;
                    }
                    return m;
                };
            };
        };
    return {
        middleware: c,
        startListening: l,
        stopListening: u,
        clearListeners: f,
    };
}
var em;
typeof queueMicrotask == "function" &&
    queueMicrotask.bind(
        typeof window < "u" ? window : typeof global < "u" ? global : globalThis
    );
rS();
const rC = [
        {
            id: 1,
            name: "Kate Winthrop",
            title: "The Scientist",
            ability: "Science!",
            abilityDescription:
                "Monsters cannot appear during Kate's turn. In addition, she is immune to all Terror effects",
            startingItems: "Spell, Unique",
            sanity: 6,
            stamina: 4,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 2,
            name: "Sister Mary",
            title: "The Nun",
            ability: "Guardian Angel",
            abilityDescription:
                "Mary may ignore any lingering effects of Mythos cards. She may ignore locked dice icons during her turn, allowing her to add them to her die pool as normal. At the end of her turn, all locked dice return to their locked dice icons.",
            startingItems: "Common, Unique, Spell",
            sanity: 7,
            stamina: 3,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 3,
            name: "Gloria Goldberg",
            title: "The Author",
            ability: "Psychic Sensitivity",
            abilityDescription:
                "While attempting to resolve on Other World car, Gloria may add the yellow and red dice to her pool for free.",
            startingItems: "Common, Spell",
            sanity: 6,
            stamina: 4,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 4,
            name: "Bob Jenkins",
            title: "The Salesman",
            ability: "Shrewd Dealer",
            abilityDescription:
                "Each time Bob gains 1 or more common items after setup, he gains 1 extra common item",
            startingItems: "Common, Common, Unique",
            sanity: 4,
            stamina: 6,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 5,
            name: "Vincent Lee",
            title: "The Doctor",
            ability: "Physician",
            abilityDescription:
                "Once per day, at the start of any player's turn, Vincent may cause any 1 investigator of his choice (icluding himself) to regain 1 stamina",
            startingItems: "Common, Spell",
            sanity: 5,
            stamina: 5,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 6,
            name: "Jenny Barnes",
            title: "The Dilettante",
            ability: "Trust Fund",
            abilityDescription:
                "At the start of her Resoulution phase, Jenny may discard 1 common item, clue note, or spell to add the yellow and red dice to her dice pool.",
            startingItems: "Common, Spell",
            sanity: 6,
            stamina: 4,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 7,
            name: "Amanda Sharpe",
            title: "The Student",
            ability: "Studious",
            abilityDescription:
                "During her turn, Amanda may complete any number of tasks per roll instead of only one.",
            startingItems: "2 of any combination (Common, Spell, Unique)",
            sanity: 5,
            stamina: 5,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 8,
            name: "Michael McGlen",
            title: "The Gangster",
            ability: "Strong Body",
            abilityDescription:
                "Once per roll during his turn, Michael may change 1 die showing a Terror result to a Peril result.",
            startingItems: "Common, Common",
            sanity: 3,
            stamina: 7,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 9,
            name: "Carolyn Fern",
            title: "The Psychologist",
            ability: "Psychology",
            abilityDescription:
                "Once per day, at the start of any player's turn, Carolyn may cause any 1 investigator of her choice (including herself) to regain 1 sanity.",
            startingItems: "Common, Unique",
            sanity: 6,
            stamina: 4,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 10,
            name: "Darrell Simmons",
            title: "The Photographer",
            ability: "Hometown Advantage",
            abilityDescription:
                "Once per roll during his turn, Darrell may change the result of a die from 1 investigation to 2, from 2 investigations to 3, or (on yellow and red dice) from 3 investigations to 4.",
            startingItems: "Common, Unique",
            sanity: 4,
            stamina: 6,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 11,
            name: "Dexter Drake",
            title: "The Magician",
            ability: "Magical Gift",
            abilityDescription:
                "Each time Drake gains 1 or more spells after setup, he gains 1 extra spell.",
            startingItems: "Unique, Spell, Spell",
            sanity: 5,
            stamina: 5,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 12,
            name: "Monterey Jack",
            title: "The Archaeologists",
            ability: "Archaeology",
            abilityDescription:
                "Each time Monterey gains 1 or more unique items after setup, he gains 1 extra unique item.",
            startingItems: "Common, Unique, Unique",
            sanity: 3,
            stamina: 7,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 13,
            name: "Joe Diamond",
            title: "The Private Eye",
            ability: "Hunches",
            abilityDescription:
                "Each time Joe spends 1 clue token, he gains a second free reroll (as though he has spent a second clue token).",
            startingItems: "Common, Clue Note",
            sanity: 4,
            stamina: 6,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 14,
            name: "Harvey Walters",
            title: "The Professor",
            ability: "Strong Mind",
            abilityDescription:
                "Once per roll during his turn, Harvey may change 1 die showing a Terror result to a Lore result.",
            startingItems: "Spell, Unique",
            sanity: 7,
            stamina: 3,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 15,
            name: "Mandy Thompson",
            title: "The Researcher",
            ability: "Research",
            abilityDescription:
                "Once per day, after any player has rolled, Mandy may reroll 2 dice before determining if the active player was able to complete a task.",
            startingItems: "Common, Clue Note",
            sanity: 5,
            stamina: 5,
            clueNotes: 0,
            elderSigns: 0,
        },
        {
            id: 16,
            name: '"Ashcan" Pete',
            title: "The Drifter",
            ability: "Scrounge",
            abilityDescription:
                "Each time Pete gains 1 Common, Unique, or Spell after setup, he may choose to instead gain 1 Clue Token, Common, or Spell",
            startingItems: "Ally: Duke",
            sanity: 4,
            stamina: 6,
            clueNotes: 0,
            elderSigns: 0,
        },
    ],
    oC = rC.sort((e, t) =>
        e.name.toLocaleLowerCase().localeCompare(t.name.toLowerCase())
    ),
    iC = { currentInvestigator: null, maxStamina: 0, maxSanity: 0 },
    i0 = _S({
        name: "investigators",
        initialState: iC,
        reducers: {
            selectInvestigator: (e, t) => {
                (e.currentInvestigator = t.payload),
                    (e.maxSanity = t.payload.sanity),
                    (e.maxStamina = t.payload.stamina);
            },
            updateInvestigator: (e, t) => {
                const n = oC.filter((r) => r.id === t.payload.id)[0];
                (e.currentInvestigator = t.payload),
                    (e.maxSanity = n.sanity),
                    (e.maxStamina = n.stamina);
            },
            incrementSanity: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.sanity < e.maxSanity &&
                    (e.currentInvestigator.sanity += 1);
            },
            decrementSanity: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.sanity > 0 &&
                    (e.currentInvestigator.sanity -= 1);
            },
            incrementStamina: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.stamina < e.maxStamina &&
                    (e.currentInvestigator.stamina += 1);
            },
            decrementStamina: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.stamina > 0 &&
                    (e.currentInvestigator.stamina -= 1);
            },
            incrementClueNotes: (e) => {
                e.currentInvestigator && (e.currentInvestigator.clueNotes += 1);
            },
            decrementClueNotes: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.clueNotes > 0 &&
                    (e.currentInvestigator.clueNotes -= 1);
            },
            incrementElderSigns: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.elderSigns += 1);
            },
            decrementElderSigns: (e) => {
                e.currentInvestigator &&
                    e.currentInvestigator.elderSigns > 0 &&
                    (e.currentInvestigator.elderSigns -= 1);
            },
            refreshSanity: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.sanity = e.maxSanity);
            },
            refreshStamina: (e) => {
                e.currentInvestigator &&
                    (e.currentInvestigator.stamina = e.maxStamina);
            },
        },
    }),
    {
        selectInvestigator: tm,
        updateInvestigator: sC,
        incrementSanity: aC,
        decrementSanity: lC,
        incrementStamina: uC,
        decrementStamina: cC,
        incrementClueNotes: dC,
        decrementClueNotes: fC,
        incrementElderSigns: pC,
        decrementElderSigns: hC,
        refreshSanity: yN,
        refreshStamina: bN,
    } = i0.actions,
    mC = i0.reducer,
    s0 = nC(),
    gC = s0.startListening;
gC({
    matcher: BS(tm, aC, lC, uC, cC, dC, fC, pC, hC),
    effect: (e, t) => {
        const n = t.getState();
        if (e.type === tm.type) {
            const r = localStorage.getItem(`investigator-${e.payload.id}`);
            r
                ? t.dispatch(sC(JSON.parse(r)))
                : localStorage.setItem(
                      `investigator-${e.payload.id}`,
                      JSON.stringify(e.payload)
                  );
        } else
            n.investigators.currentInvestigator &&
                localStorage.setItem(
                    `investigator-${n.investigators.currentInvestigator.id}`,
                    JSON.stringify(n.investigators.currentInvestigator)
                );
    },
});
const vC = $S({
    reducer: { investigators: mC },
    middleware: (e) => e().prepend(s0.middleware),
});
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ie() {
    return (
        (Ie = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        Ie.apply(this, arguments)
    );
}
var Qe;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Qe || (Qe = {}));
const nm = "popstate";
function yC(e) {
    e === void 0 && (e = {});
    function t(r, o) {
        let { pathname: i, search: s, hash: a } = r.location;
        return xs(
            "",
            { pathname: i, search: s, hash: a },
            (o.state && o.state.usr) || null,
            (o.state && o.state.key) || "default"
        );
    }
    function n(r, o) {
        return typeof o == "string" ? o : br(o);
    }
    return xC(t, n, null, e);
}
function ue(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function bC() {
    return Math.random().toString(36).substr(2, 8);
}
function rm(e) {
    return { usr: e.state, key: e.key };
}
function xs(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Ie(
            {
                pathname: typeof e == "string" ? e : e.pathname,
                search: "",
                hash: "",
            },
            typeof t == "string" ? Gn(t) : t,
            { state: n, key: (t && t.key) || r || bC() }
        )
    );
}
function br(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Gn(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
    }
    return t;
}
function ws(e) {
    let t =
            typeof window < "u" &&
            typeof window.location < "u" &&
            window.location.origin !== "null"
                ? window.location.origin
                : window.location.href,
        n = typeof e == "string" ? e : br(e);
    return (
        ue(
            t,
            "No window.location.(origin|href) available to create URL for href: " +
                n
        ),
        new URL(n, t)
    );
}
function xC(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: i = !1 } = r,
        s = o.history,
        a = Qe.Pop,
        l = null;
    function u() {
        (a = Qe.Pop), l && l({ action: a, location: c.location });
    }
    function d(h, g) {
        a = Qe.Push;
        let p = xs(c.location, h, g);
        n && n(p, h);
        let S = rm(p),
            v = c.createHref(p);
        try {
            s.pushState(S, "", v);
        } catch {
            o.location.assign(v);
        }
        i && l && l({ action: a, location: c.location });
    }
    function f(h, g) {
        a = Qe.Replace;
        let p = xs(c.location, h, g);
        n && n(p, h);
        let S = rm(p),
            v = c.createHref(p);
        s.replaceState(S, "", v),
            i && l && l({ action: a, location: c.location });
    }
    let c = {
        get action() {
            return a;
        },
        get location() {
            return e(o, s);
        },
        listen(h) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(nm, u),
                (l = h),
                () => {
                    o.removeEventListener(nm, u), (l = null);
                }
            );
        },
        createHref(h) {
            return t(o, h);
        },
        encodeLocation(h) {
            let g = ws(typeof h == "string" ? h : br(h));
            return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: d,
        replace: f,
        go(h) {
            return s.go(h);
        },
    };
    return c;
}
var dt;
(function (e) {
    (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
})(dt || (dt = {}));
function wC(e) {
    return e.index === !0;
}
function a0(e, t, n) {
    return (
        t === void 0 && (t = []),
        n === void 0 && (n = new Set()),
        e.map((r, o) => {
            let i = [...t, o],
                s = typeof r.id == "string" ? r.id : i.join("-");
            return (
                ue(
                    r.index !== !0 || !r.children,
                    "Cannot specify children on an index route"
                ),
                ue(
                    !n.has(s),
                    'Found a route id collision on id "' +
                        s +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                n.add(s),
                wC(r)
                    ? Ie({}, r, { id: s })
                    : Ie({}, r, {
                          id: s,
                          children: r.children ? a0(r.children, i, n) : void 0,
                      })
            );
        })
    );
}
function Ni(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Gn(t) : t,
        o = c0(r.pathname || "/", n);
    if (o == null) return null;
    let i = l0(e);
    SC(i);
    let s = null;
    for (let a = 0; s == null && a < i.length; ++a) s = IC(i[a], NC(o));
    return s;
}
function l0(e, t, n, r) {
    t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i,
        };
        l.relativePath.startsWith("/") &&
            (ue(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = mr([r, l.relativePath]),
            d = n.concat(l);
        i.children &&
            i.children.length > 0 &&
            (ue(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            l0(i.children, t, d, u)),
            !(i.path == null && !i.index) &&
                t.push({ path: u, score: TC(u, i.index), routesMeta: d });
    };
    return (
        e.forEach((i, s) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?")))
                o(i, s);
            else for (let l of u0(i.path)) o(i, s, l);
        }),
        t
    );
}
function u0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = u0(r.join("/")),
        a = [];
    return (
        a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
        o && a.push(...s),
        a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function SC(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : OC(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const CC = /^:\w+$/,
    EC = 3,
    kC = 2,
    RC = 1,
    PC = 10,
    $C = -2,
    om = (e) => e === "*";
function TC(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(om) && (r += $C),
        t && (r += kC),
        n
            .filter((o) => !om(o))
            .reduce((o, i) => o + (CC.test(i) ? EC : i === "" ? RC : PC), r)
    );
}
function OC(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
}
function IC(e, t) {
    let { routesMeta: n } = e,
        r = {},
        o = "/",
        i = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            l = s === n.length - 1,
            u = o === "/" ? t : t.slice(o.length) || "/",
            d = _C(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: l,
                },
                u
            );
        if (!d) return null;
        Object.assign(r, d.params);
        let f = a.route;
        i.push({
            params: r,
            pathname: mr([o, d.pathname]),
            pathnameBase: zC(mr([o, d.pathnameBase])),
            route: f,
        }),
            d.pathnameBase !== "/" && (o = mr([o, d.pathnameBase]));
    }
    return i;
}
function _C(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = MC(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, d, f) => {
            if (d === "*") {
                let c = a[f] || "";
                s = i.slice(0, i.length - c.length).replace(/(.)\/+$/, "$1");
            }
            return (u[d] = AC(a[f] || "", d)), u;
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e,
    };
}
function MC(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Kf(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, "/*") +
                    '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' +
                    e.replace(/\*$/, "/*") +
                    '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)/g, (s, a) => (r.push(a), "/([^\\/]+)"));
    return (
        e.endsWith("*")
            ? (r.push("*"),
              (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
            ? (o += "\\/*$")
            : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function NC(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return (
            Kf(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function AC(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return (
            Kf(
                !1,
                'The value for the URL param "' +
                    t +
                    '" will not be decoded because' +
                    (' the string "' +
                        e +
                        '" is a malformed URL segment. This is probably') +
                    (" due to a bad percent encoding (" + n + ").")
            ),
            e
        );
    }
}
function c0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function Kf(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function LC(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: o = "",
    } = typeof e == "string" ? Gn(e) : e;
    return {
        pathname: n ? (n.startsWith("/") ? n : DC(n, t)) : t,
        search: FC(r),
        hash: BC(o),
    };
}
function DC(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function rc(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." +
            t +
            "` field [" +
            JSON.stringify(r) +
            "].  Please separate it out to the ") +
        ("`to." +
            n +
            "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function Gf(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    );
}
function d0(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = Gn(e))
        : ((o = Ie({}, e)),
          ue(
              !o.pathname || !o.pathname.includes("?"),
              rc("?", "pathname", "search", o)
          ),
          ue(
              !o.pathname || !o.pathname.includes("#"),
              rc("#", "pathname", "hash", o)
          ),
          ue(
              !o.search || !o.search.includes("#"),
              rc("#", "search", "hash", o)
          ));
    let i = e === "" || o.pathname === "",
        s = i ? "/" : o.pathname,
        a;
    if (r || s == null) a = n;
    else {
        let f = t.length - 1;
        if (s.startsWith("..")) {
            let c = s.split("/");
            for (; c[0] === ".."; ) c.shift(), (f -= 1);
            o.pathname = c.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let l = LC(o, a),
        u = s && s !== "/" && s.endsWith("/"),
        d = (i || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
const mr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    zC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    FC = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    BC = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class im extends Error {}
class jC {
    constructor(t) {
        (this.pendingKeys = new Set()),
            (this.subscriber = void 0),
            ue(
                t && typeof t == "object" && !Array.isArray(t),
                "defer() only accepts plain objects"
            );
        let n;
        (this.abortPromise = new Promise((o, i) => (n = i))),
            (this.controller = new AbortController());
        let r = () => n(new im("Deferred data aborted"));
        (this.unlistenAbortSignal = () =>
            this.controller.signal.removeEventListener("abort", r)),
            this.controller.signal.addEventListener("abort", r),
            (this.data = Object.entries(t).reduce((o, i) => {
                let [s, a] = i;
                return Object.assign(o, { [s]: this.trackPromise(s, a) });
            }, {}));
    }
    trackPromise(t, n) {
        if (!(n instanceof Promise)) return n;
        this.pendingKeys.add(t);
        let r = Promise.race([n, this.abortPromise]).then(
            (o) => this.onSettle(r, t, null, o),
            (o) => this.onSettle(r, t, o)
        );
        return (
            r.catch(() => {}),
            Object.defineProperty(r, "_tracked", { get: () => !0 }),
            r
        );
    }
    onSettle(t, n, r, o) {
        if (this.controller.signal.aborted && r instanceof im)
            return (
                this.unlistenAbortSignal(),
                Object.defineProperty(t, "_error", { get: () => r }),
                Promise.reject(r)
            );
        this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
        const i = this.subscriber;
        return r
            ? (Object.defineProperty(t, "_error", { get: () => r }),
              i && i(!1),
              Promise.reject(r))
            : (Object.defineProperty(t, "_data", { get: () => o }),
              i && i(!1),
              o);
    }
    subscribe(t) {
        this.subscriber = t;
    }
    cancel() {
        this.controller.abort(),
            this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
        let t = this.subscriber;
        t && t(!0);
    }
    async resolveData(t) {
        let n = !1;
        if (!this.done) {
            let r = () => this.cancel();
            t.addEventListener("abort", r),
                (n = await new Promise((o) => {
                    this.subscribe((i) => {
                        t.removeEventListener("abort", r),
                            (i || this.done) && o(i);
                    });
                }));
        }
        return n;
    }
    get done() {
        return this.pendingKeys.size === 0;
    }
    get unwrappedData() {
        return (
            ue(
                this.data !== null && this.done,
                "Can only unwrap data on initialized and settled deferreds"
            ),
            Object.entries(this.data).reduce((t, n) => {
                let [r, o] = n;
                return Object.assign(t, { [r]: WC(o) });
            }, {})
        );
    }
}
function UC(e) {
    return e instanceof Promise && e._tracked === !0;
}
function WC(e) {
    if (!UC(e)) return e;
    if (e._error) throw e._error;
    return e._data;
}
class Xl {
    constructor(t, n, r, o) {
        o === void 0 && (o = !1),
            (this.status = t),
            (this.statusText = n || ""),
            (this.internal = o),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r);
    }
}
function f0(e) {
    return e instanceof Xl;
}
const p0 = ["post", "put", "patch", "delete"],
    VC = new Set(p0),
    HC = ["get", ...p0],
    KC = new Set(HC),
    GC = new Set([301, 302, 303, 307, 308]),
    qC = new Set([307, 308]),
    oc = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    YC = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
    },
    XC =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    QC = !XC;
function JC(e) {
    ue(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let t = a0(e.routes),
        n = null,
        r = new Set(),
        o = null,
        i = null,
        s = null,
        a = e.hydrationData != null,
        l = Ni(t, e.history.location, e.basename),
        u = null;
    if (l == null) {
        let I = Ar(404, { pathname: e.history.location.pathname }),
            { matches: N, route: B } = dm(t);
        (l = N), (u = { [B.id]: I });
    }
    let d = !l.some((I) => I.route.loader) || e.hydrationData != null,
        f,
        c = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: l,
            initialized: d,
            navigation: oc,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || u,
            fetchers: new Map(),
        },
        h = Qe.Pop,
        g = !1,
        p,
        S = !1,
        v = !1,
        m = [],
        y = [],
        x = new Map(),
        C = 0,
        k = -1,
        E = new Map(),
        T = new Set(),
        O = new Map(),
        P = new Map();
    function z() {
        return (
            (n = e.history.listen((I) => {
                let { action: N, location: B } = I;
                return $(N, B);
            })),
            c.initialized || $(Qe.Pop, c.location),
            f
        );
    }
    function G() {
        n && n(),
            r.clear(),
            p && p.abort(),
            c.fetchers.forEach((I, N) => be(N));
    }
    function U(I) {
        return r.add(I), () => r.delete(I);
    }
    function A(I) {
        (c = Ie({}, c, I)), r.forEach((N) => N(c));
    }
    function F(I, N) {
        var B;
        let q =
                c.actionData != null &&
                c.navigation.formMethod != null &&
                Lr(c.navigation.formMethod) &&
                c.navigation.state === "loading" &&
                ((B = I.state) == null ? void 0 : B._isRedirect) !== !0,
            H;
        N.actionData
            ? Object.keys(N.actionData).length > 0
                ? (H = N.actionData)
                : (H = null)
            : q
            ? (H = c.actionData)
            : (H = null);
        let oe = N.loaderData
            ? cm(c.loaderData, N.loaderData, N.matches || [], N.errors)
            : c.loaderData;
        A(
            Ie({}, N, {
                actionData: H,
                loaderData: oe,
                historyAction: h,
                location: I,
                initialized: !0,
                navigation: oc,
                revalidation: "idle",
                restoreScrollPosition: c.navigation.formData
                    ? !1
                    : At(I, N.matches || c.matches),
                preventScrollReset: g,
            })
        ),
            S ||
                h === Qe.Pop ||
                (h === Qe.Push
                    ? e.history.push(I, I.state)
                    : h === Qe.Replace && e.history.replace(I, I.state)),
            (h = Qe.Pop),
            (g = !1),
            (S = !1),
            (v = !1),
            (m = []),
            (y = []);
    }
    async function j(I, N) {
        if (typeof I == "number") {
            e.history.go(I);
            return;
        }
        let { path: B, submission: q, error: H } = sm(I, N),
            oe = xs(c.location, B, N && N.state);
        oe = Ie({}, oe, e.history.encodeLocation(oe));
        let re = N && N.replace != null ? N.replace : void 0,
            se = Qe.Push;
        re === !0
            ? (se = Qe.Replace)
            : re === !1 ||
              (q != null &&
                  Lr(q.formMethod) &&
                  q.formAction === c.location.pathname + c.location.search &&
                  (se = Qe.Replace));
        let ne =
            N && "preventScrollReset" in N
                ? N.preventScrollReset === !0
                : void 0;
        return await $(se, oe, {
            submission: q,
            pendingError: H,
            preventScrollReset: ne,
            replace: N && N.replace,
        });
    }
    function ee() {
        if (
            (ce(),
            A({ revalidation: "loading" }),
            c.navigation.state !== "submitting")
        ) {
            if (c.navigation.state === "idle") {
                $(c.historyAction, c.location, {
                    startUninterruptedRevalidation: !0,
                });
                return;
            }
            $(h || c.historyAction, c.navigation.location, {
                overrideNavigation: c.navigation,
            });
        }
    }
    async function $(I, N, B) {
        p && p.abort(),
            (p = null),
            (h = I),
            (S = (B && B.startUninterruptedRevalidation) === !0),
            on(c.location, c.matches),
            (g = (B && B.preventScrollReset) === !0);
        let q = B && B.overrideNavigation,
            H = Ni(t, N, e.basename);
        if (!H) {
            let _ = Ar(404, { pathname: N.pathname }),
                { matches: de, route: Ce } = dm(t);
            Rt(), F(N, { matches: de, loaderData: {}, errors: { [Ce.id]: _ } });
            return;
        }
        if (rE(c.location, N)) {
            F(N, { matches: H });
            return;
        }
        p = new AbortController();
        let oe = Si(N, p.signal, B && B.submission),
            re,
            se;
        if (B && B.pendingError) se = { [Po(H).route.id]: B.pendingError };
        else if (B && B.submission && Lr(B.submission.formMethod)) {
            let _ = await M(oe, N, B.submission, H, { replace: B.replace });
            if (_.shortCircuited) return;
            (re = _.pendingActionData),
                (se = _.pendingActionError),
                (q = Ie({ state: "loading", location: N }, B.submission)),
                (oe = new Request(oe.url, { signal: oe.signal }));
        }
        let {
            shortCircuited: ne,
            loaderData: Oe,
            errors: J,
        } = await L(oe, N, H, q, B && B.submission, B && B.replace, re, se);
        ne ||
            ((p = null),
            F(
                N,
                Ie({ matches: H }, re ? { actionData: re } : {}, {
                    loaderData: Oe,
                    errors: J,
                })
            ));
    }
    async function M(I, N, B, q, H) {
        ce();
        let oe = Ie({ state: "submitting", location: N }, B);
        A({ navigation: oe });
        let re,
            se = mm(q, N);
        if (!se.route.action)
            re = {
                type: dt.error,
                error: Ar(405, {
                    method: I.method,
                    pathname: N.pathname,
                    routeId: se.route.id,
                }),
            };
        else if (
            ((re = await wi("action", I, se, q, f.basename)), I.signal.aborted)
        )
            return { shortCircuited: !0 };
        if (Bo(re)) {
            let ne;
            return (
                H && H.replace != null
                    ? (ne = H.replace)
                    : (ne =
                          re.location ===
                          c.location.pathname + c.location.search),
                await ge(c, re, { submission: B, replace: ne }),
                { shortCircuited: !0 }
            );
        }
        if (Ki(re)) {
            let ne = Po(q, se.route.id);
            return (
                (H && H.replace) !== !0 && (h = Qe.Push),
                {
                    pendingActionData: {},
                    pendingActionError: { [ne.route.id]: re.error },
                }
            );
        }
        if (Ur(re)) throw new Error("defer() is not supported in actions");
        return { pendingActionData: { [se.route.id]: re.data } };
    }
    async function L(I, N, B, q, H, oe, re, se) {
        let ne = q;
        ne ||
            (ne = Ie(
                {
                    state: "loading",
                    location: N,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                H
            ));
        let Oe =
                H ||
                (ne.formMethod && ne.formAction && ne.formData && ne.formEncType
                    ? {
                          formMethod: ne.formMethod,
                          formAction: ne.formAction,
                          formData: ne.formData,
                          formEncType: ne.formEncType,
                      }
                    : void 0),
            [J, _] = am(c, B, Oe, N, v, m, y, re, se, O);
        if (
            (Rt(
                (ot) =>
                    !(B && B.some((Ge) => Ge.route.id === ot)) ||
                    (J && J.some((Ge) => Ge.route.id === ot))
            ),
            J.length === 0 && _.length === 0)
        )
            return (
                F(
                    N,
                    Ie(
                        { matches: B, loaderData: {}, errors: se || null },
                        re ? { actionData: re } : {}
                    )
                ),
                { shortCircuited: !0 }
            );
        if (!S) {
            _.forEach((Ge) => {
                let [an] = Ge,
                    Yn = c.fetchers.get(an),
                    fi = {
                        state: "loading",
                        data: Yn && Yn.data,
                        formMethod: void 0,
                        formAction: void 0,
                        formEncType: void 0,
                        formData: void 0,
                        " _hasFetcherDoneAnything ": !0,
                    };
                c.fetchers.set(an, fi);
            });
            let ot = re || c.actionData;
            A(
                Ie(
                    { navigation: ne },
                    ot
                        ? Object.keys(ot).length === 0
                            ? { actionData: null }
                            : { actionData: ot }
                        : {},
                    _.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
                )
            );
        }
        (k = ++C),
            _.forEach((ot) => {
                let [Ge] = ot;
                return x.set(Ge, p);
            });
        let {
            results: de,
            loaderResults: Ce,
            fetcherResults: Xe,
        } = await K(c.matches, B, J, _, I);
        if (I.signal.aborted) return { shortCircuited: !0 };
        _.forEach((ot) => {
            let [Ge] = ot;
            return x.delete(Ge);
        });
        let sn = fm(de);
        if (sn) return await ge(c, sn, { replace: oe }), { shortCircuited: !0 };
        let { loaderData: Rr, errors: On } = um(c, B, J, Ce, se, _, Xe, P);
        P.forEach((ot, Ge) => {
            ot.subscribe((an) => {
                (an || ot.done) && P.delete(Ge);
            });
        }),
            Ye();
        let Gt = ut(k);
        return Ie(
            { loaderData: Rr, errors: On },
            Gt || _.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        );
    }
    function W(I) {
        return c.fetchers.get(I) || YC;
    }
    function te(I, N, B, q) {
        if (QC)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            );
        x.has(I) && Ae(I);
        let H = Ni(t, B, e.basename);
        if (!H) {
            Te(I, N, Ar(404, { pathname: B }));
            return;
        }
        let { path: oe, submission: re } = sm(B, q, !0),
            se = mm(H, oe);
        if (re && Lr(re.formMethod)) {
            Me(I, N, oe, se, H, re);
            return;
        }
        O.set(I, [oe, se, H]), ie(I, N, oe, se, H, re);
    }
    async function Me(I, N, B, q, H, oe) {
        if ((ce(), O.delete(I), !q.route.action)) {
            let In = Ar(405, {
                method: oe.formMethod,
                pathname: B,
                routeId: N,
            });
            Te(I, N, In);
            return;
        }
        let re = c.fetchers.get(I),
            se = Ie({ state: "submitting" }, oe, {
                data: re && re.data,
                " _hasFetcherDoneAnything ": !0,
            });
        c.fetchers.set(I, se), A({ fetchers: new Map(c.fetchers) });
        let ne = new AbortController(),
            Oe = Si(B, ne.signal, oe);
        x.set(I, ne);
        let J = await wi("action", Oe, q, H, f.basename);
        if (Oe.signal.aborted) {
            x.get(I) === ne && x.delete(I);
            return;
        }
        if (Bo(J)) {
            x.delete(I), T.add(I);
            let In = Ie({ state: "loading" }, oe, {
                data: void 0,
                " _hasFetcherDoneAnything ": !0,
            });
            return (
                c.fetchers.set(I, In),
                A({ fetchers: new Map(c.fetchers) }),
                ge(c, J, { isFetchActionRedirect: !0 })
            );
        }
        if (Ki(J)) {
            Te(I, N, J.error);
            return;
        }
        Ur(J) && ue(!1, "defer() is not supported in actions");
        let _ = c.navigation.location || c.location,
            de = Si(_, ne.signal),
            Ce =
                c.navigation.state !== "idle"
                    ? Ni(t, c.navigation.location, e.basename)
                    : c.matches;
        ue(Ce, "Didn't find any matches after fetcher action");
        let Xe = ++C;
        E.set(I, Xe);
        let sn = Ie({ state: "loading", data: J.data }, oe, {
            " _hasFetcherDoneAnything ": !0,
        });
        c.fetchers.set(I, sn);
        let [Rr, On] = am(
            c,
            Ce,
            oe,
            _,
            v,
            m,
            y,
            { [q.route.id]: J.data },
            void 0,
            O
        );
        On.filter((In) => {
            let [Pr] = In;
            return Pr !== I;
        }).forEach((In) => {
            let [Pr] = In,
                kp = c.fetchers.get(Pr),
                D1 = {
                    state: "loading",
                    data: kp && kp.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
            c.fetchers.set(Pr, D1), x.set(Pr, ne);
        }),
            A({ fetchers: new Map(c.fetchers) });
        let {
            results: Gt,
            loaderResults: ot,
            fetcherResults: Ge,
        } = await K(c.matches, Ce, Rr, On, de);
        if (ne.signal.aborted) return;
        E.delete(I),
            x.delete(I),
            On.forEach((In) => {
                let [Pr] = In;
                return x.delete(Pr);
            });
        let an = fm(Gt);
        if (an) return ge(c, an);
        let { loaderData: Yn, errors: fi } = um(
                c,
                c.matches,
                Rr,
                ot,
                void 0,
                On,
                Ge,
                P
            ),
            A1 = {
                state: "idle",
                data: J.data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
        c.fetchers.set(I, A1);
        let L1 = ut(Xe);
        c.navigation.state === "loading" && Xe > k
            ? (ue(h, "Expected pending action"),
              p && p.abort(),
              F(c.navigation.location, {
                  matches: Ce,
                  loaderData: Yn,
                  errors: fi,
                  fetchers: new Map(c.fetchers),
              }))
            : (A(
                  Ie(
                      { errors: fi, loaderData: cm(c.loaderData, Yn, Ce, fi) },
                      L1 ? { fetchers: new Map(c.fetchers) } : {}
                  )
              ),
              (v = !1));
    }
    async function ie(I, N, B, q, H, oe) {
        let re = c.fetchers.get(I),
            se = Ie(
                {
                    state: "loading",
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                },
                oe,
                { data: re && re.data, " _hasFetcherDoneAnything ": !0 }
            );
        c.fetchers.set(I, se), A({ fetchers: new Map(c.fetchers) });
        let ne = new AbortController(),
            Oe = Si(B, ne.signal);
        x.set(I, ne);
        let J = await wi("loader", Oe, q, H, f.basename);
        if (
            (Ur(J) && (J = (await v0(J, Oe.signal, !0)) || J),
            x.get(I) === ne && x.delete(I),
            Oe.signal.aborted)
        )
            return;
        if (Bo(J)) {
            await ge(c, J);
            return;
        }
        if (Ki(J)) {
            let de = Po(c.matches, N);
            c.fetchers.delete(I),
                A({
                    fetchers: new Map(c.fetchers),
                    errors: { [de.route.id]: J.error },
                });
            return;
        }
        ue(!Ur(J), "Unhandled fetcher deferred data");
        let _ = {
            state: "idle",
            data: J.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            " _hasFetcherDoneAnything ": !0,
        };
        c.fetchers.set(I, _), A({ fetchers: new Map(c.fetchers) });
    }
    async function ge(I, N, B) {
        var q;
        let {
            submission: H,
            replace: oe,
            isFetchActionRedirect: re,
        } = B === void 0 ? {} : B;
        N.revalidate && (v = !0);
        let se = xs(
            I.location,
            N.location,
            Ie({ _isRedirect: !0 }, re ? { _isFetchActionRedirect: !0 } : {})
        );
        if (
            (ue(se, "Expected a location on the redirect navigation"),
            typeof ((q = window) == null ? void 0 : q.location) < "u")
        ) {
            let Ce = ws(N.location).origin;
            if (window.location.origin !== Ce) {
                oe
                    ? window.location.replace(N.location)
                    : window.location.assign(N.location);
                return;
            }
        }
        p = null;
        let ne = oe === !0 ? Qe.Replace : Qe.Push,
            {
                formMethod: Oe,
                formAction: J,
                formEncType: _,
                formData: de,
            } = I.navigation;
        !H &&
            Oe &&
            J &&
            de &&
            _ &&
            (H = {
                formMethod: Oe,
                formAction: J,
                formEncType: _,
                formData: de,
            }),
            qC.has(N.status) && H && Lr(H.formMethod)
                ? await $(ne, se, {
                      submission: Ie({}, H, { formAction: N.location }),
                  })
                : await $(ne, se, {
                      overrideNavigation: {
                          state: "loading",
                          location: se,
                          formMethod: H ? H.formMethod : void 0,
                          formAction: H ? H.formAction : void 0,
                          formEncType: H ? H.formEncType : void 0,
                          formData: H ? H.formData : void 0,
                      },
                  });
    }
    async function K(I, N, B, q, H) {
        let oe = await Promise.all([
                ...B.map((ne) => wi("loader", H, ne, N, f.basename)),
                ...q.map((ne) => {
                    let [, Oe, J, _] = ne;
                    return wi("loader", Si(Oe, H.signal), J, _, f.basename);
                }),
            ]),
            re = oe.slice(0, B.length),
            se = oe.slice(B.length);
        return (
            await Promise.all([
                pm(I, B, re, H.signal, !1, c.loaderData),
                pm(
                    I,
                    q.map((ne) => {
                        let [, , Oe] = ne;
                        return Oe;
                    }),
                    se,
                    H.signal,
                    !0
                ),
            ]),
            { results: oe, loaderResults: re, fetcherResults: se }
        );
    }
    function ce() {
        (v = !0),
            m.push(...Rt()),
            O.forEach((I, N) => {
                x.has(N) && (y.push(N), Ae(N));
            });
    }
    function Te(I, N, B) {
        let q = Po(c.matches, N);
        be(I),
            A({ errors: { [q.route.id]: B }, fetchers: new Map(c.fetchers) });
    }
    function be(I) {
        x.has(I) && Ae(I),
            O.delete(I),
            E.delete(I),
            T.delete(I),
            c.fetchers.delete(I);
    }
    function Ae(I) {
        let N = x.get(I);
        ue(N, "Expected fetch controller: " + I), N.abort(), x.delete(I);
    }
    function ae(I) {
        for (let N of I) {
            let q = {
                state: "idle",
                data: W(N).data,
                formMethod: void 0,
                formAction: void 0,
                formEncType: void 0,
                formData: void 0,
                " _hasFetcherDoneAnything ": !0,
            };
            c.fetchers.set(N, q);
        }
    }
    function Ye() {
        let I = [];
        for (let N of T) {
            let B = c.fetchers.get(N);
            ue(B, "Expected fetcher: " + N),
                B.state === "loading" && (T.delete(N), I.push(N));
        }
        ae(I);
    }
    function ut(I) {
        let N = [];
        for (let [B, q] of E)
            if (q < I) {
                let H = c.fetchers.get(B);
                ue(H, "Expected fetcher: " + B),
                    H.state === "loading" && (Ae(B), E.delete(B), N.push(B));
            }
        return ae(N), N.length > 0;
    }
    function Rt(I) {
        let N = [];
        return (
            P.forEach((B, q) => {
                (!I || I(q)) && (B.cancel(), N.push(q), P.delete(q));
            }),
            N
        );
    }
    function Nt(I, N, B) {
        if (
            ((o = I),
            (s = N),
            (i = B || ((q) => q.key)),
            !a && c.navigation === oc)
        ) {
            a = !0;
            let q = At(c.location, c.matches);
            q != null && A({ restoreScrollPosition: q });
        }
        return () => {
            (o = null), (s = null), (i = null);
        };
    }
    function on(I, N) {
        if (o && i && s) {
            let B = N.map((H) => hm(H, c.loaderData)),
                q = i(I, B) || I.key;
            o[q] = s();
        }
    }
    function At(I, N) {
        if (o && i && s) {
            let B = N.map((oe) => hm(oe, c.loaderData)),
                q = i(I, B) || I.key,
                H = o[q];
            if (typeof H == "number") return H;
        }
        return null;
    }
    return (
        (f = {
            get basename() {
                return e.basename;
            },
            get state() {
                return c;
            },
            get routes() {
                return t;
            },
            initialize: z,
            subscribe: U,
            enableScrollRestoration: Nt,
            navigate: j,
            fetch: te,
            revalidate: ee,
            createHref: (I) => e.history.createHref(I),
            encodeLocation: (I) => e.history.encodeLocation(I),
            getFetcher: W,
            deleteFetcher: be,
            dispose: G,
            _internalFetchControllers: x,
            _internalActiveDeferreds: P,
        }),
        f
    );
}
function ZC(e) {
    return e != null && "formData" in e;
}
function sm(e, t, n) {
    n === void 0 && (n = !1);
    let r = typeof e == "string" ? e : br(e);
    if (!t || !ZC(t)) return { path: r };
    if (t.formMethod && !iE(t.formMethod))
        return { path: r, error: Ar(405, { method: t.formMethod }) };
    let o;
    if (
        t.formData &&
        ((o = {
            formMethod: t.formMethod || "get",
            formAction: g0(r),
            formEncType:
                (t && t.formEncType) || "application/x-www-form-urlencoded",
            formData: t.formData,
        }),
        Lr(o.formMethod))
    )
        return { path: r, submission: o };
    let i = Gn(r);
    try {
        let s = m0(t.formData);
        n && i.search && y0(i.search) && s.append("index", ""),
            (i.search = "?" + s);
    } catch {
        return { path: r, error: Ar(400) };
    }
    return { path: br(i), submission: o };
}
function eE(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex((o) => o.route.id === t);
        r >= 0 && (n = e.slice(0, r));
    }
    return n;
}
function am(e, t, n, r, o, i, s, a, l, u) {
    let d = l ? Object.values(l)[0] : a ? Object.values(a)[0] : void 0,
        f = l ? Object.keys(l)[0] : void 0,
        h = eE(t, f).filter(
            (p, S) =>
                p.route.loader != null &&
                (tE(e.loaderData, e.matches[S], p) ||
                    i.some((v) => v === p.route.id) ||
                    lm(e.location, e.matches[S], n, r, p, o, d))
        ),
        g = [];
    return (
        u &&
            u.forEach((p, S) => {
                let [v, m, y] = p;
                s.includes(S)
                    ? g.push([S, v, m, y])
                    : o && lm(v, m, n, v, m, o, d) && g.push([S, v, m, y]);
            }),
        [h, g]
    );
}
function tE(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        o = e[n.route.id] === void 0;
    return r || o;
}
function h0(e, t) {
    let n = e.route.path;
    return (
        e.pathname !== t.pathname ||
        (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
    );
}
function lm(e, t, n, r, o, i, s) {
    let a = ws(e),
        l = t.params,
        u = ws(r),
        d = o.params,
        f =
            h0(t, o) ||
            a.toString() === u.toString() ||
            a.search !== u.search ||
            i;
    if (o.route.shouldRevalidate) {
        let c = o.route.shouldRevalidate(
            Ie(
                { currentUrl: a, currentParams: l, nextUrl: u, nextParams: d },
                n,
                { actionResult: s, defaultShouldRevalidate: f }
            )
        );
        if (typeof c == "boolean") return c;
    }
    return f;
}
async function wi(e, t, n, r, o, i, s, a) {
    o === void 0 && (o = "/"),
        i === void 0 && (i = !1),
        s === void 0 && (s = !1);
    let l,
        u,
        d,
        f = new Promise((h, g) => (d = g)),
        c = () => d();
    t.signal.addEventListener("abort", c);
    try {
        let h = n.route[e];
        ue(
            h,
            "Could not find the " +
                e +
                ' to run on the "' +
                n.route.id +
                '" route'
        ),
            (u = await Promise.race([
                h({ request: t, params: n.params, context: a }),
                f,
            ])),
            ue(
                u !== void 0,
                "You defined " +
                    (e === "action" ? "an action" : "a loader") +
                    " for route " +
                    ('"' +
                        n.route.id +
                        "\" but didn't return anything from your `" +
                        e +
                        "` ") +
                    "function. Please return a value or `null`."
            );
    } catch (h) {
        (l = dt.error), (u = h);
    } finally {
        t.signal.removeEventListener("abort", c);
    }
    if (oE(u)) {
        let h = u.status;
        if (GC.has(h)) {
            let S = u.headers.get("Location");
            if (
                (ue(
                    S,
                    "Redirects returned/thrown from loaders/actions must have a Location header"
                ),
                !(/^[a-z+]+:\/\//i.test(S) || S.startsWith("//")))
            ) {
                let m = r.slice(0, r.indexOf(n) + 1),
                    y = Gf(m).map((C) => C.pathnameBase),
                    x = d0(S, y, new URL(t.url).pathname);
                if (
                    (ue(br(x), "Unable to resolve redirect location: " + S), o)
                ) {
                    let C = x.pathname;
                    x.pathname = C === "/" ? o : mr([o, C]);
                }
                S = br(x);
            }
            if (i) throw (u.headers.set("Location", S), u);
            return {
                type: dt.redirect,
                status: h,
                location: S,
                revalidate: u.headers.get("X-Remix-Revalidate") !== null,
            };
        }
        if (s) throw { type: l || dt.data, response: u };
        let g,
            p = u.headers.get("Content-Type");
        return (
            p && /\bapplication\/json\b/.test(p)
                ? (g = await u.json())
                : (g = await u.text()),
            l === dt.error
                ? {
                      type: l,
                      error: new Xl(h, u.statusText, g),
                      headers: u.headers,
                  }
                : {
                      type: dt.data,
                      data: g,
                      statusCode: u.status,
                      headers: u.headers,
                  }
        );
    }
    return l === dt.error
        ? { type: l, error: u }
        : u instanceof jC
        ? { type: dt.deferred, deferredData: u }
        : { type: dt.data, data: u };
}
function Si(e, t, n) {
    let r = ws(g0(e)).toString(),
        o = { signal: t };
    if (n && Lr(n.formMethod)) {
        let { formMethod: i, formEncType: s, formData: a } = n;
        (o.method = i.toUpperCase()),
            (o.body = s === "application/x-www-form-urlencoded" ? m0(a) : a);
    }
    return new Request(r, o);
}
function m0(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries())
        ue(
            typeof r == "string",
            'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
        ),
            t.append(n, r);
    return t;
}
function nE(e, t, n, r, o) {
    let i = {},
        s = null,
        a,
        l = !1,
        u = {};
    return (
        n.forEach((d, f) => {
            let c = t[f].route.id;
            if (
                (ue(
                    !Bo(d),
                    "Cannot handle redirect results in processLoaderData"
                ),
                Ki(d))
            ) {
                let h = Po(e, c),
                    g = d.error;
                r && ((g = Object.values(r)[0]), (r = void 0)),
                    (s = s || {}),
                    s[h.route.id] == null && (s[h.route.id] = g),
                    (i[c] = void 0),
                    l || ((l = !0), (a = f0(d.error) ? d.error.status : 500)),
                    d.headers && (u[c] = d.headers);
            } else
                Ur(d)
                    ? (o && o.set(c, d.deferredData),
                      (i[c] = d.deferredData.data))
                    : ((i[c] = d.data),
                      d.statusCode != null &&
                          d.statusCode !== 200 &&
                          !l &&
                          (a = d.statusCode),
                      d.headers && (u[c] = d.headers));
        }),
        r && ((s = r), (i[Object.keys(r)[0]] = void 0)),
        { loaderData: i, errors: s, statusCode: a || 200, loaderHeaders: u }
    );
}
function um(e, t, n, r, o, i, s, a) {
    let { loaderData: l, errors: u } = nE(t, n, r, o, a);
    for (let d = 0; d < i.length; d++) {
        let [f, , c] = i[d];
        ue(
            s !== void 0 && s[d] !== void 0,
            "Did not find corresponding fetcher result"
        );
        let h = s[d];
        if (Ki(h)) {
            let g = Po(e.matches, c.route.id);
            (u && u[g.route.id]) || (u = Ie({}, u, { [g.route.id]: h.error })),
                e.fetchers.delete(f);
        } else {
            if (Bo(h))
                throw new Error("Unhandled fetcher revalidation redirect");
            if (Ur(h)) throw new Error("Unhandled fetcher deferred data");
            {
                let g = {
                    state: "idle",
                    data: h.data,
                    formMethod: void 0,
                    formAction: void 0,
                    formEncType: void 0,
                    formData: void 0,
                    " _hasFetcherDoneAnything ": !0,
                };
                e.fetchers.set(f, g);
            }
        }
    }
    return { loaderData: l, errors: u };
}
function cm(e, t, n, r) {
    let o = Ie({}, t);
    for (let i of n) {
        let s = i.route.id;
        if (
            (t.hasOwnProperty(s)
                ? t[s] !== void 0 && (o[s] = t[s])
                : e[s] !== void 0 && (o[s] = e[s]),
            r && r.hasOwnProperty(s))
        )
            break;
    }
    return o;
}
function Po(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    );
}
function dm(e) {
    let t = e.find((n) => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__",
    };
    return {
        matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
        route: t,
    };
}
function Ar(e, t) {
    let { pathname: n, routeId: r, method: o } = t === void 0 ? {} : t,
        i = "Unknown Server Error",
        s = "Unknown @remix-run/router error";
    return (
        e === 400
            ? ((i = "Bad Request"),
              o && n && r
                  ? (s =
                        "You made a " +
                        o +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        "so there is no way to handle the request.")
                  : (s = "Cannot submit binary form data using GET"))
            : e === 403
            ? ((i = "Forbidden"),
              (s = 'Route "' + r + '" does not match URL "' + n + '"'))
            : e === 404
            ? ((i = "Not Found"), (s = 'No route matches URL "' + n + '"'))
            : e === 405 &&
              ((i = "Method Not Allowed"),
              o && n && r
                  ? (s =
                        "You made a " +
                        o.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide an `action` for route "' +
                            r +
                            '", ') +
                        "so there is no way to handle the request.")
                  : o &&
                    (s = 'Invalid request method "' + o.toUpperCase() + '"')),
        new Xl(e || 500, i, new Error(s), !0)
    );
}
function fm(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (Bo(n)) return n;
    }
}
function g0(e) {
    let t = typeof e == "string" ? Gn(e) : e;
    return br(Ie({}, t, { hash: "" }));
}
function rE(e, t) {
    return (
        e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
    );
}
function Ur(e) {
    return e.type === dt.deferred;
}
function Ki(e) {
    return e.type === dt.error;
}
function Bo(e) {
    return (e && e.type) === dt.redirect;
}
function oE(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.headers == "object" &&
        typeof e.body < "u"
    );
}
function iE(e) {
    return KC.has(e);
}
function Lr(e) {
    return VC.has(e);
}
async function pm(e, t, n, r, o, i) {
    for (let s = 0; s < n.length; s++) {
        let a = n[s],
            l = t[s],
            u = e.find((f) => f.route.id === l.route.id),
            d = u != null && !h0(u, l) && (i && i[l.route.id]) !== void 0;
        Ur(a) &&
            (o || d) &&
            (await v0(a, r, o).then((f) => {
                f && (n[s] = f || n[s]);
            }));
    }
}
async function v0(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: dt.data, data: e.deferredData.unwrappedData };
            } catch (o) {
                return { type: dt.error, error: o };
            }
        return { type: dt.data, data: e.deferredData.data };
    }
}
function y0(e) {
    return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function hm(e, t) {
    let { route: n, pathname: r, params: o } = e;
    return {
        id: n.id,
        pathname: r,
        params: o,
        data: t[n.id],
        handle: n.handle,
    };
}
function mm(e, t) {
    let n = typeof t == "string" ? Gn(t).search : t.search;
    if (e[e.length - 1].route.index && y0(n || "")) return e[e.length - 1];
    let r = Gf(e);
    return r[r.length - 1];
}
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function al() {
    return (
        (al = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        al.apply(this, arguments)
    );
}
function sE(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const aE = typeof Object.is == "function" ? Object.is : sE,
    {
        useState: lE,
        useEffect: uE,
        useLayoutEffect: cE,
        useDebugValue: dE,
    } = Vo;
function fE(e, t, n) {
    const r = t(),
        [{ inst: o }, i] = lE({ inst: { value: r, getSnapshot: t } });
    return (
        cE(() => {
            (o.value = r), (o.getSnapshot = t), ic(o) && i({ inst: o });
        }, [e, r, t]),
        uE(
            () => (
                ic(o) && i({ inst: o }),
                e(() => {
                    ic(o) && i({ inst: o });
                })
            ),
            [e]
        ),
        dE(r),
        r
    );
}
function ic(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !aE(n, r);
    } catch {
        return !0;
    }
}
function pE(e, t, n) {
    return t();
}
const hE =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u",
    mE = !hE,
    gE = mE ? pE : fE,
    vE =
        "useSyncExternalStore" in Vo ? ((e) => e.useSyncExternalStore)(Vo) : gE,
    qf = b.createContext(null),
    Yf = b.createContext(null),
    Xf = b.createContext(null),
    Ql = b.createContext(null),
    As = b.createContext({ outlet: null, matches: [] }),
    b0 = b.createContext(null);
function Jl() {
    return b.useContext(Ql) != null;
}
function Qf() {
    return Jl() || ue(!1), b.useContext(Ql).location;
}
function Zl() {
    Jl() || ue(!1);
    let { basename: e, navigator: t } = b.useContext(Xf),
        { matches: n } = b.useContext(As),
        { pathname: r } = Qf(),
        o = JSON.stringify(Gf(n).map((a) => a.pathnameBase)),
        i = b.useRef(!1);
    return (
        b.useEffect(() => {
            i.current = !0;
        }),
        b.useCallback(
            function (a, l) {
                if ((l === void 0 && (l = {}), !i.current)) return;
                if (typeof a == "number") {
                    t.go(a);
                    return;
                }
                let u = d0(a, JSON.parse(o), r, l.relative === "path");
                e !== "/" &&
                    (u.pathname = u.pathname === "/" ? e : mr([e, u.pathname])),
                    (l.replace ? t.replace : t.push)(u, l.state, l);
            },
            [e, t, o, r]
        )
    );
}
function yE(e, t) {
    Jl() || ue(!1);
    let { navigator: n } = b.useContext(Xf),
        r = b.useContext(Yf),
        { matches: o } = b.useContext(As),
        i = o[o.length - 1],
        s = i ? i.params : {};
    i && i.pathname;
    let a = i ? i.pathnameBase : "/";
    i && i.route;
    let l = Qf(),
        u;
    if (t) {
        var d;
        let p = typeof t == "string" ? Gn(t) : t;
        a === "/" || ((d = p.pathname) != null && d.startsWith(a)) || ue(!1),
            (u = p);
    } else u = l;
    let f = u.pathname || "/",
        c = a === "/" ? f : f.slice(a.length) || "/",
        h = Ni(e, { pathname: c }),
        g = SE(
            h &&
                h.map((p) =>
                    Object.assign({}, p, {
                        params: Object.assign({}, s, p.params),
                        pathname: mr([
                            a,
                            n.encodeLocation
                                ? n.encodeLocation(p.pathname).pathname
                                : p.pathname,
                        ]),
                        pathnameBase:
                            p.pathnameBase === "/"
                                ? a
                                : mr([
                                      a,
                                      n.encodeLocation
                                          ? n.encodeLocation(p.pathnameBase)
                                                .pathname
                                          : p.pathnameBase,
                                  ]),
                    })
                ),
            o,
            r || void 0
        );
    return t && g
        ? b.createElement(
              Ql.Provider,
              {
                  value: {
                      location: al(
                          {
                              pathname: "/",
                              search: "",
                              hash: "",
                              state: null,
                              key: "default",
                          },
                          u
                      ),
                      navigationType: Qe.Pop,
                  },
              },
              g
          )
        : g;
}
function bE() {
    let e = RE(),
        t = f0(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = "rgba(200,200,200, 0.5)",
        o = { padding: "0.5rem", backgroundColor: r },
        i = { padding: "2px 4px", backgroundColor: r };
    return b.createElement(
        b.Fragment,
        null,
        b.createElement("h2", null, "Unhandled Thrown Error!"),
        b.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? b.createElement("pre", { style: o }, n) : null,
        b.createElement("p", null, "💿 Hey developer 👋"),
        b.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own ",
            b.createElement("code", { style: i }, "errorElement"),
            " props on ",
            b.createElement("code", { style: i }, "<Route>")
        )
    );
}
class xE extends b.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location
            ? { error: t.error, location: t.location }
            : { error: t.error || n.error, location: n.location };
    }
    componentDidCatch(t, n) {
        console.error(
            "React Router caught the following error during render",
            t,
            n
        );
    }
    render() {
        return this.state.error
            ? b.createElement(
                  As.Provider,
                  { value: this.props.routeContext },
                  b.createElement(b0.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children;
    }
}
function wE(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = b.useContext(qf);
    return (
        o &&
            o.static &&
            o.staticContext &&
            n.route.errorElement &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        b.createElement(As.Provider, { value: t }, r)
    );
}
function SE(e, t, n) {
    if ((t === void 0 && (t = []), e == null))
        if (n != null && n.errors) e = n.matches;
        else return null;
    let r = e,
        o = n == null ? void 0 : n.errors;
    if (o != null) {
        let i = r.findIndex(
            (s) => s.route.id && (o == null ? void 0 : o[s.route.id])
        );
        i >= 0 || ue(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
    }
    return r.reduceRight((i, s, a) => {
        let l = s.route.id ? (o == null ? void 0 : o[s.route.id]) : null,
            u = n ? s.route.errorElement || b.createElement(bE, null) : null,
            d = t.concat(r.slice(0, a + 1)),
            f = () =>
                b.createElement(
                    wE,
                    { match: s, routeContext: { outlet: i, matches: d } },
                    l ? u : s.route.element !== void 0 ? s.route.element : i
                );
        return n && (s.route.errorElement || a === 0)
            ? b.createElement(xE, {
                  location: n.location,
                  component: u,
                  error: l,
                  children: f(),
                  routeContext: { outlet: null, matches: d },
              })
            : f();
    }, null);
}
var gm;
(function (e) {
    e.UseRevalidator = "useRevalidator";
})(gm || (gm = {}));
var ll;
(function (e) {
    (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator");
})(ll || (ll = {}));
function CE(e) {
    let t = b.useContext(Yf);
    return t || ue(!1), t;
}
function EE(e) {
    let t = b.useContext(As);
    return t || ue(!1), t;
}
function kE(e) {
    let t = EE(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ue(!1), n.route.id;
}
function RE() {
    var e;
    let t = b.useContext(b0),
        n = CE(ll.UseRouteError),
        r = kE(ll.UseRouteError);
    return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function PE(e) {
    let { fallbackElement: t, router: n } = e,
        r = vE(
            n.subscribe,
            () => n.state,
            () => n.state
        ),
        o = b.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (s) => n.navigate(s),
                push: (s, a, l) =>
                    n.navigate(s, {
                        state: a,
                        preventScrollReset:
                            l == null ? void 0 : l.preventScrollReset,
                    }),
                replace: (s, a, l) =>
                    n.navigate(s, {
                        replace: !0,
                        state: a,
                        preventScrollReset:
                            l == null ? void 0 : l.preventScrollReset,
                    }),
            }),
            [n]
        ),
        i = n.basename || "/";
    return b.createElement(
        b.Fragment,
        null,
        b.createElement(
            qf.Provider,
            { value: { router: n, navigator: o, static: !1, basename: i } },
            b.createElement(
                Yf.Provider,
                { value: r },
                b.createElement(
                    TE,
                    {
                        basename: n.basename,
                        location: n.state.location,
                        navigationType: n.state.historyAction,
                        navigator: o,
                    },
                    n.state.initialized ? b.createElement(OE, null) : t
                )
            )
        ),
        null
    );
}
function $E(e) {
    ue(!1);
}
function TE(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Qe.Pop,
        navigator: i,
        static: s = !1,
    } = e;
    Jl() && ue(!1);
    let a = t.replace(/^\/*/, "/"),
        l = b.useMemo(
            () => ({ basename: a, navigator: i, static: s }),
            [a, i, s]
        );
    typeof r == "string" && (r = Gn(r));
    let {
            pathname: u = "/",
            search: d = "",
            hash: f = "",
            state: c = null,
            key: h = "default",
        } = r,
        g = b.useMemo(() => {
            let p = c0(u, a);
            return p == null
                ? null
                : { pathname: p, search: d, hash: f, state: c, key: h };
        }, [a, u, d, f, c, h]);
    return g == null
        ? null
        : b.createElement(
              Xf.Provider,
              { value: l },
              b.createElement(Ql.Provider, {
                  children: n,
                  value: { location: g, navigationType: o },
              })
          );
}
function OE(e) {
    let { children: t, location: n } = e,
        r = b.useContext(qf),
        o = r && !t ? r.router.routes : vd(t);
    return yE(o, n);
}
var vm;
(function (e) {
    (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
})(vm || (vm = {}));
new Promise(() => {});
function vd(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        b.Children.forEach(e, (r, o) => {
            if (!b.isValidElement(r)) return;
            if (r.type === b.Fragment) {
                n.push.apply(n, vd(r.props.children, t));
                return;
            }
            r.type !== $E && ue(!1),
                !r.props.index || !r.props.children || ue(!1);
            let i = [...t, o],
                s = {
                    id: r.props.id || i.join("-"),
                    caseSensitive: r.props.caseSensitive,
                    element: r.props.element,
                    index: r.props.index,
                    path: r.props.path,
                    loader: r.props.loader,
                    action: r.props.action,
                    errorElement: r.props.errorElement,
                    hasErrorBoundary: r.props.errorElement != null,
                    shouldRevalidate: r.props.shouldRevalidate,
                    handle: r.props.handle,
                };
            r.props.children && (s.children = vd(r.props.children, i)),
                n.push(s);
        }),
        n
    );
}
function x0(e) {
    return e.map((t) => {
        let n = al({}, t);
        return (
            n.hasErrorBoundary == null &&
                (n.hasErrorBoundary = n.errorElement != null),
            n.children && (n.children = x0(n.children)),
            n
        );
    });
}
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function yd() {
    return (
        (yd = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r]);
                  }
                  return e;
              }),
        yd.apply(this, arguments)
    );
}
function bd(e) {
    return (
        e === void 0 && (e = ""),
        new URLSearchParams(
            typeof e == "string" ||
            Array.isArray(e) ||
            e instanceof URLSearchParams
                ? e
                : Object.keys(e).reduce((t, n) => {
                      let r = e[n];
                      return t.concat(
                          Array.isArray(r) ? r.map((o) => [n, o]) : [[n, r]]
                      );
                  }, [])
        )
    );
}
function IE(e, t) {
    let n = bd(e);
    for (let r of t.keys())
        n.has(r) ||
            t.getAll(r).forEach((o) => {
                n.append(r, o);
            });
    return n;
}
function _E(e, t) {
    return JC({
        basename: t == null ? void 0 : t.basename,
        history: yC({ window: t == null ? void 0 : t.window }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || ME(),
        routes: x0(e),
    }).initialize();
}
function ME() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = yd({}, t, { errors: NE(t.errors) })), t;
}
function NE(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, o] of t)
        if (o && o.__type === "RouteErrorResponse")
            n[r] = new Xl(o.status, o.statusText, o.data, o.internal === !0);
        else if (o && o.__type === "Error") {
            let i = new Error(o.message);
            (i.stack = ""), (n[r] = i);
        } else n[r] = o;
    return n;
}
var ym;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmitImpl = "useSubmitImpl"),
        (e.UseFetcher = "useFetcher");
})(ym || (ym = {}));
var bm;
(function (e) {
    (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
})(bm || (bm = {}));
function w0(e) {
    let t = b.useRef(bd(e)),
        n = Qf(),
        r = b.useMemo(() => IE(n.search, t.current), [n.search]),
        o = Zl(),
        i = b.useCallback(
            (s, a) => {
                const l = bd(typeof s == "function" ? s(r) : s);
                o("?" + l, a);
            },
            [o, r]
        );
    return [r, i];
}
const AE = { black: "#000", white: "#fff" },
    Ss = AE,
    LE = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        A100: "#ff8a80",
        A200: "#ff5252",
        A400: "#ff1744",
        A700: "#d50000",
    },
    io = LE,
    DE = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        A100: "#ea80fc",
        A200: "#e040fb",
        A400: "#d500f9",
        A700: "#aa00ff",
    },
    so = DE,
    zE = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff",
    },
    ao = zE,
    FE = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        A100: "#80d8ff",
        A200: "#40c4ff",
        A400: "#00b0ff",
        A700: "#0091ea",
    },
    lo = FE,
    BE = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        A100: "#b9f6ca",
        A200: "#69f0ae",
        A400: "#00e676",
        A700: "#00c853",
    },
    uo = BE,
    jE = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        A100: "#ffd180",
        A200: "#ffab40",
        A400: "#ff9100",
        A700: "#ff6d00",
    },
    Ci = jE,
    UE = {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161",
    },
    WE = UE;
function Dr(e) {
    return e !== null && typeof e == "object" && e.constructor === Object;
}
function S0(e) {
    if (!Dr(e)) return e;
    const t = {};
    return (
        Object.keys(e).forEach((n) => {
            t[n] = S0(e[n]);
        }),
        t
    );
}
function _t(e, t, n = { clone: !0 }) {
    const r = n.clone ? w({}, e) : e;
    return (
        Dr(e) &&
            Dr(t) &&
            Object.keys(t).forEach((o) => {
                o !== "__proto__" &&
                    (Dr(t[o]) && o in e && Dr(e[o])
                        ? (r[o] = _t(e[o], t[o], n))
                        : n.clone
                        ? (r[o] = Dr(t[o]) ? S0(t[o]) : t[o])
                        : (r[o] = t[o]));
            }),
        r
    );
}
function Vn(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
}
function V(e) {
    if (typeof e != "string") throw new Error(Vn(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function xm(...e) {
    return e.reduce(
        (t, n) =>
            n == null
                ? t
                : function (...o) {
                      t.apply(this, o), n.apply(this, o);
                  },
        () => {}
    );
}
function Jf(e, t = 166) {
    let n;
    function r(...o) {
        const i = () => {
            e.apply(this, o);
        };
        clearTimeout(n), (n = setTimeout(i, t));
    }
    return (
        (r.clear = () => {
            clearTimeout(n);
        }),
        r
    );
}
function Ea(e, t) {
    return b.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function Bt(e) {
    return (e && e.ownerDocument) || document;
}
function Hn(e) {
    return Bt(e).defaultView || window;
}
function xd(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
}
const VE = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
    xr = VE;
let wm = 0;
function HE(e) {
    const [t, n] = b.useState(e),
        r = e || t;
    return (
        b.useEffect(() => {
            t == null && ((wm += 1), n(`mui-${wm}`));
        }, [t]),
        r
    );
}
const Sm = Vo["useId"];
function KE(e) {
    if (Sm !== void 0) {
        const t = Sm();
        return e ?? t;
    }
    return HE(e);
}
function wd({ controlled: e, default: t, name: n, state: r = "value" }) {
    const { current: o } = b.useRef(e !== void 0),
        [i, s] = b.useState(t),
        a = o ? e : i,
        l = b.useCallback((u) => {
            o || s(u);
        }, []);
    return [a, l];
}
function $o(e) {
    const t = b.useRef(e);
    return (
        xr(() => {
            t.current = e;
        }),
        b.useCallback((...n) => (0, t.current)(...n), [])
    );
}
function rt(...e) {
    return b.useMemo(
        () =>
            e.every((t) => t == null)
                ? null
                : (t) => {
                      e.forEach((n) => {
                          xd(n, t);
                      });
                  },
        e
    );
}
let eu = !0,
    Sd = !1,
    Cm;
const GE = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
};
function qE(e) {
    const { type: t, tagName: n } = e;
    return !!(
        (n === "INPUT" && GE[t] && !e.readOnly) ||
        (n === "TEXTAREA" && !e.readOnly) ||
        e.isContentEditable
    );
}
function YE(e) {
    e.metaKey || e.altKey || e.ctrlKey || (eu = !0);
}
function sc() {
    eu = !1;
}
function XE() {
    this.visibilityState === "hidden" && Sd && (eu = !0);
}
function QE(e) {
    e.addEventListener("keydown", YE, !0),
        e.addEventListener("mousedown", sc, !0),
        e.addEventListener("pointerdown", sc, !0),
        e.addEventListener("touchstart", sc, !0),
        e.addEventListener("visibilitychange", XE, !0);
}
function JE(e) {
    const { target: t } = e;
    try {
        return t.matches(":focus-visible");
    } catch {}
    return eu || qE(t);
}
function ZE() {
    const e = b.useCallback((o) => {
            o != null && QE(o.ownerDocument);
        }, []),
        t = b.useRef(!1);
    function n() {
        return t.current
            ? ((Sd = !0),
              window.clearTimeout(Cm),
              (Cm = window.setTimeout(() => {
                  Sd = !1;
              }, 100)),
              (t.current = !1),
              !0)
            : !1;
    }
    function r(o) {
        return JE(o) ? ((t.current = !0), !0) : !1;
    }
    return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function C0(e) {
    const t = e.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
}
function Zf(e, t) {
    const n = w({}, t);
    return (
        Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/))
                n[r] = w({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
                const o = e[r] || {},
                    i = t[r];
                (n[r] = {}),
                    !i || !Object.keys(i)
                        ? (n[r] = o)
                        : !o || !Object.keys(o)
                        ? (n[r] = i)
                        : ((n[r] = w({}, i)),
                          Object.keys(o).forEach((s) => {
                              n[r][s] = Zf(o[s], i[s]);
                          }));
            } else n[r] === void 0 && (n[r] = e[r]);
        }),
        n
    );
}
function ve(e, t, n) {
    const r = {};
    return (
        Object.keys(e).forEach((o) => {
            r[o] = e[o]
                .reduce(
                    (i, s) => (
                        s && (i.push(t(s)), n && n[s] && i.push(n[s])), i
                    ),
                    []
                )
                .join(" ");
        }),
        r
    );
}
const Em = (e) => e,
    ek = () => {
        let e = Em;
        return {
            configure(t) {
                e = t;
            },
            generate(t) {
                return e(t);
            },
            reset() {
                e = Em;
            },
        };
    },
    tk = ek(),
    E0 = tk,
    nk = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        required: "required",
        selected: "selected",
    };
function me(e, t, n = "Mui") {
    const r = nk[t];
    return r ? `${n}-${r}` : `${E0.generate(e)}-${t}`;
}
function ye(e, t, n = "Mui") {
    const r = {};
    return (
        t.forEach((o) => {
            r[o] = me(e, o, n);
        }),
        r
    );
}
function k0(e) {
    var t = Object.create(null);
    return function (n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
}
var rk =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    ok = k0(function (e) {
        return (
            rk.test(e) ||
            (e.charCodeAt(0) === 111 &&
                e.charCodeAt(1) === 110 &&
                e.charCodeAt(2) < 91)
        );
    });
function ik(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t];
}
function sk(e) {
    var t = document.createElement("style");
    return (
        t.setAttribute("data-emotion", e.key),
        e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
        t.appendChild(document.createTextNode("")),
        t.setAttribute("data-s", ""),
        t
    );
}
var ak = (function () {
        function e(n) {
            var r = this;
            (this._insertTag = function (o) {
                var i;
                r.tags.length === 0
                    ? r.insertionPoint
                        ? (i = r.insertionPoint.nextSibling)
                        : r.prepend
                        ? (i = r.container.firstChild)
                        : (i = r.before)
                    : (i = r.tags[r.tags.length - 1].nextSibling),
                    r.container.insertBefore(o, i),
                    r.tags.push(o);
            }),
                (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
                (this.tags = []),
                (this.ctr = 0),
                (this.nonce = n.nonce),
                (this.key = n.key),
                (this.container = n.container),
                (this.prepend = n.prepend),
                (this.insertionPoint = n.insertionPoint),
                (this.before = null);
        }
        var t = e.prototype;
        return (
            (t.hydrate = function (r) {
                r.forEach(this._insertTag);
            }),
            (t.insert = function (r) {
                this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
                    this._insertTag(sk(this));
                var o = this.tags[this.tags.length - 1];
                if (this.isSpeedy) {
                    var i = ik(o);
                    try {
                        i.insertRule(r, i.cssRules.length);
                    } catch {}
                } else o.appendChild(document.createTextNode(r));
                this.ctr++;
            }),
            (t.flush = function () {
                this.tags.forEach(function (r) {
                    return r.parentNode && r.parentNode.removeChild(r);
                }),
                    (this.tags = []),
                    (this.ctr = 0);
            }),
            e
        );
    })(),
    yt = "-ms-",
    ul = "-moz-",
    Se = "-webkit-",
    R0 = "comm",
    ep = "rule",
    tp = "decl",
    lk = "@import",
    P0 = "@keyframes",
    uk = Math.abs,
    tu = String.fromCharCode,
    ck = Object.assign;
function dk(e, t) {
    return pt(e, 0) ^ 45
        ? (((((((t << 2) ^ pt(e, 0)) << 2) ^ pt(e, 1)) << 2) ^ pt(e, 2)) << 2) ^
              pt(e, 3)
        : 0;
}
function $0(e) {
    return e.trim();
}
function fk(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
}
function Ee(e, t, n) {
    return e.replace(t, n);
}
function Cd(e, t) {
    return e.indexOf(t);
}
function pt(e, t) {
    return e.charCodeAt(t) | 0;
}
function Cs(e, t, n) {
    return e.slice(t, n);
}
function wn(e) {
    return e.length;
}
function np(e) {
    return e.length;
}
function ra(e, t) {
    return t.push(e), e;
}
function pk(e, t) {
    return e.map(t).join("");
}
var nu = 1,
    Zo = 1,
    T0 = 0,
    Mt = 0,
    Je = 0,
    si = "";
function ru(e, t, n, r, o, i, s) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: nu,
        column: Zo,
        length: s,
        return: "",
    };
}
function Ei(e, t) {
    return ck(
        ru("", null, null, "", null, null, 0),
        e,
        { length: -e.length },
        t
    );
}
function hk() {
    return Je;
}
function mk() {
    return (
        (Je = Mt > 0 ? pt(si, --Mt) : 0),
        Zo--,
        Je === 10 && ((Zo = 1), nu--),
        Je
    );
}
function jt() {
    return (
        (Je = Mt < T0 ? pt(si, Mt++) : 0),
        Zo++,
        Je === 10 && ((Zo = 1), nu++),
        Je
    );
}
function $n() {
    return pt(si, Mt);
}
function ka() {
    return Mt;
}
function Ls(e, t) {
    return Cs(si, e, t);
}
function Es(e) {
    switch (e) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function O0(e) {
    return (nu = Zo = 1), (T0 = wn((si = e))), (Mt = 0), [];
}
function I0(e) {
    return (si = ""), e;
}
function Ra(e) {
    return $0(Ls(Mt - 1, Ed(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gk(e) {
    for (; (Je = $n()) && Je < 33; ) jt();
    return Es(e) > 2 || Es(Je) > 3 ? "" : " ";
}
function vk(e, t) {
    for (
        ;
        --t &&
        jt() &&
        !(Je < 48 || Je > 102 || (Je > 57 && Je < 65) || (Je > 70 && Je < 97));

    );
    return Ls(e, ka() + (t < 6 && $n() == 32 && jt() == 32));
}
function Ed(e) {
    for (; jt(); )
        switch (Je) {
            case e:
                return Mt;
            case 34:
            case 39:
                e !== 34 && e !== 39 && Ed(Je);
                break;
            case 40:
                e === 41 && Ed(e);
                break;
            case 92:
                jt();
                break;
        }
    return Mt;
}
function yk(e, t) {
    for (; jt() && e + Je !== 47 + 10; )
        if (e + Je === 42 + 42 && $n() === 47) break;
    return "/*" + Ls(t, Mt - 1) + "*" + tu(e === 47 ? e : jt());
}
function bk(e) {
    for (; !Es($n()); ) jt();
    return Ls(e, Mt);
}
function xk(e) {
    return I0(Pa("", null, null, null, [""], (e = O0(e)), 0, [0], e));
}
function Pa(e, t, n, r, o, i, s, a, l) {
    for (
        var u = 0,
            d = 0,
            f = s,
            c = 0,
            h = 0,
            g = 0,
            p = 1,
            S = 1,
            v = 1,
            m = 0,
            y = "",
            x = o,
            C = i,
            k = r,
            E = y;
        S;

    )
        switch (((g = m), (m = jt()))) {
            case 40:
                if (g != 108 && pt(E, f - 1) == 58) {
                    Cd((E += Ee(Ra(m), "&", "&\f")), "&\f") != -1 && (v = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                E += Ra(m);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                E += gk(g);
                break;
            case 92:
                E += vk(ka() - 1, 7);
                continue;
            case 47:
                switch ($n()) {
                    case 42:
                    case 47:
                        ra(wk(yk(jt(), ka()), t, n), l);
                        break;
                    default:
                        E += "/";
                }
                break;
            case 123 * p:
                a[u++] = wn(E) * v;
            case 125 * p:
            case 59:
            case 0:
                switch (m) {
                    case 0:
                    case 125:
                        S = 0;
                    case 59 + d:
                        h > 0 &&
                            wn(E) - f &&
                            ra(
                                h > 32
                                    ? Rm(E + ";", r, n, f - 1)
                                    : Rm(Ee(E, " ", "") + ";", r, n, f - 2),
                                l
                            );
                        break;
                    case 59:
                        E += ";";
                    default:
                        if (
                            (ra(
                                (k = km(
                                    E,
                                    t,
                                    n,
                                    u,
                                    d,
                                    o,
                                    a,
                                    y,
                                    (x = []),
                                    (C = []),
                                    f
                                )),
                                i
                            ),
                            m === 123)
                        )
                            if (d === 0) Pa(E, t, k, k, x, i, f, a, C);
                            else
                                switch (
                                    c === 99 && pt(E, 3) === 110 ? 100 : c
                                ) {
                                    case 100:
                                    case 109:
                                    case 115:
                                        Pa(
                                            e,
                                            k,
                                            k,
                                            r &&
                                                ra(
                                                    km(
                                                        e,
                                                        k,
                                                        k,
                                                        0,
                                                        0,
                                                        o,
                                                        a,
                                                        y,
                                                        o,
                                                        (x = []),
                                                        f
                                                    ),
                                                    C
                                                ),
                                            o,
                                            C,
                                            f,
                                            a,
                                            r ? x : C
                                        );
                                        break;
                                    default:
                                        Pa(E, k, k, k, [""], C, 0, a, C);
                                }
                }
                (u = d = h = 0), (p = v = 1), (y = E = ""), (f = s);
                break;
            case 58:
                (f = 1 + wn(E)), (h = g);
            default:
                if (p < 1) {
                    if (m == 123) --p;
                    else if (m == 125 && p++ == 0 && mk() == 125) continue;
                }
                switch (((E += tu(m)), m * p)) {
                    case 38:
                        v = d > 0 ? 1 : ((E += "\f"), -1);
                        break;
                    case 44:
                        (a[u++] = (wn(E) - 1) * v), (v = 1);
                        break;
                    case 64:
                        $n() === 45 && (E += Ra(jt())),
                            (c = $n()),
                            (d = f = wn((y = E += bk(ka())))),
                            m++;
                        break;
                    case 45:
                        g === 45 && wn(E) == 2 && (p = 0);
                }
        }
    return i;
}
function km(e, t, n, r, o, i, s, a, l, u, d) {
    for (
        var f = o - 1, c = o === 0 ? i : [""], h = np(c), g = 0, p = 0, S = 0;
        g < r;
        ++g
    )
        for (
            var v = 0, m = Cs(e, f + 1, (f = uk((p = s[g])))), y = e;
            v < h;
            ++v
        )
            (y = $0(p > 0 ? c[v] + " " + m : Ee(m, /&\f/g, c[v]))) &&
                (l[S++] = y);
    return ru(e, t, n, o === 0 ? ep : a, l, u, d);
}
function wk(e, t, n) {
    return ru(e, t, n, R0, tu(hk()), Cs(e, 2, -2), 0);
}
function Rm(e, t, n, r) {
    return ru(e, t, n, tp, Cs(e, 0, r), Cs(e, r + 1, -1), r);
}
function jo(e, t) {
    for (var n = "", r = np(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
}
function Sk(e, t, n, r) {
    switch (e.type) {
        case lk:
        case tp:
            return (e.return = e.return || e.value);
        case R0:
            return "";
        case P0:
            return (e.return = e.value + "{" + jo(e.children, r) + "}");
        case ep:
            e.value = e.props.join(",");
    }
    return wn((n = jo(e.children, r)))
        ? (e.return = e.value + "{" + n + "}")
        : "";
}
function Ck(e) {
    var t = np(e);
    return function (n, r, o, i) {
        for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
        return s;
    };
}
function Ek(e) {
    return function (t) {
        t.root || ((t = t.return) && e(t));
    };
}
var kk = function (t, n, r) {
        for (
            var o = 0, i = 0;
            (o = i), (i = $n()), o === 38 && i === 12 && (n[r] = 1), !Es(i);

        )
            jt();
        return Ls(t, Mt);
    },
    Rk = function (t, n) {
        var r = -1,
            o = 44;
        do
            switch (Es(o)) {
                case 0:
                    o === 38 && $n() === 12 && (n[r] = 1),
                        (t[r] += kk(Mt - 1, n, r));
                    break;
                case 2:
                    t[r] += Ra(o);
                    break;
                case 4:
                    if (o === 44) {
                        (t[++r] = $n() === 58 ? "&\f" : ""),
                            (n[r] = t[r].length);
                        break;
                    }
                default:
                    t[r] += tu(o);
            }
        while ((o = jt()));
        return t;
    },
    Pk = function (t, n) {
        return I0(Rk(O0(t), n));
    },
    Pm = new WeakMap(),
    $k = function (t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (
                var n = t.value,
                    r = t.parent,
                    o = t.column === r.column && t.line === r.line;
                r.type !== "rule";

            )
                if (((r = r.parent), !r)) return;
            if (
                !(
                    t.props.length === 1 &&
                    n.charCodeAt(0) !== 58 &&
                    !Pm.get(r)
                ) &&
                !o
            ) {
                Pm.set(t, !0);
                for (
                    var i = [], s = Pk(n, i), a = r.props, l = 0, u = 0;
                    l < s.length;
                    l++
                )
                    for (var d = 0; d < a.length; d++, u++)
                        t.props[u] = i[l]
                            ? s[l].replace(/&\f/g, a[d])
                            : a[d] + " " + s[l];
            }
        }
    },
    Tk = function (t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 &&
                n.charCodeAt(2) === 98 &&
                ((t.return = ""), (t.value = ""));
        }
    };
function _0(e, t) {
    switch (dk(e, t)) {
        case 5103:
            return Se + "print-" + e + e;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return Se + e + e;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return Se + e + ul + e + yt + e + e;
        case 6828:
        case 4268:
            return Se + e + yt + e + e;
        case 6165:
            return Se + e + yt + "flex-" + e + e;
        case 5187:
            return (
                Se +
                e +
                Ee(e, /(\w+).+(:[^]+)/, Se + "box-$1$2" + yt + "flex-$1$2") +
                e
            );
        case 5443:
            return Se + e + yt + "flex-item-" + Ee(e, /flex-|-self/, "") + e;
        case 4675:
            return (
                Se +
                e +
                yt +
                "flex-line-pack" +
                Ee(e, /align-content|flex-|-self/, "") +
                e
            );
        case 5548:
            return Se + e + yt + Ee(e, "shrink", "negative") + e;
        case 5292:
            return Se + e + yt + Ee(e, "basis", "preferred-size") + e;
        case 6060:
            return (
                Se +
                "box-" +
                Ee(e, "-grow", "") +
                Se +
                e +
                yt +
                Ee(e, "grow", "positive") +
                e
            );
        case 4554:
            return Se + Ee(e, /([^-])(transform)/g, "$1" + Se + "$2") + e;
        case 6187:
            return (
                Ee(
                    Ee(
                        Ee(e, /(zoom-|grab)/, Se + "$1"),
                        /(image-set)/,
                        Se + "$1"
                    ),
                    e,
                    ""
                ) + e
            );
        case 5495:
        case 3959:
            return Ee(e, /(image-set\([^]*)/, Se + "$1$`$1");
        case 4968:
            return (
                Ee(
                    Ee(
                        e,
                        /(.+:)(flex-)?(.*)/,
                        Se + "box-pack:$3" + yt + "flex-pack:$3"
                    ),
                    /s.+-b[^;]+/,
                    "justify"
                ) +
                Se +
                e +
                e
            );
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return Ee(e, /(.+)-inline(.+)/, Se + "$1$2") + e;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (wn(e) - 1 - t > 6)
                switch (pt(e, t + 1)) {
                    case 109:
                        if (pt(e, t + 4) !== 45) break;
                    case 102:
                        return (
                            Ee(
                                e,
                                /(.+:)(.+)-([^]+)/,
                                "$1" +
                                    Se +
                                    "$2-$3$1" +
                                    ul +
                                    (pt(e, t + 3) == 108 ? "$3" : "$2-$3")
                            ) + e
                        );
                    case 115:
                        return ~Cd(e, "stretch")
                            ? _0(Ee(e, "stretch", "fill-available"), t) + e
                            : e;
                }
            break;
        case 4949:
            if (pt(e, t + 1) !== 115) break;
        case 6444:
            switch (pt(e, wn(e) - 3 - (~Cd(e, "!important") && 10))) {
                case 107:
                    return Ee(e, ":", ":" + Se) + e;
                case 101:
                    return (
                        Ee(
                            e,
                            /(.+:)([^;!]+)(;|!.+)?/,
                            "$1" +
                                Se +
                                (pt(e, 14) === 45 ? "inline-" : "") +
                                "box$3$1" +
                                Se +
                                "$2$3$1" +
                                yt +
                                "$2box$3"
                        ) + e
                    );
            }
            break;
        case 5936:
            switch (pt(e, t + 11)) {
                case 114:
                    return Se + e + yt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                case 108:
                    return (
                        Se + e + yt + Ee(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e
                    );
                case 45:
                    return Se + e + yt + Ee(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return Se + e + yt + e + e;
    }
    return e;
}
var Ok = function (t, n, r, o) {
        if (t.length > -1 && !t.return)
            switch (t.type) {
                case tp:
                    t.return = _0(t.value, t.length);
                    break;
                case P0:
                    return jo(
                        [Ei(t, { value: Ee(t.value, "@", "@" + Se) })],
                        o
                    );
                case ep:
                    if (t.length)
                        return pk(t.props, function (i) {
                            switch (fk(i, /(::plac\w+|:read-\w+)/)) {
                                case ":read-only":
                                case ":read-write":
                                    return jo(
                                        [
                                            Ei(t, {
                                                props: [
                                                    Ee(
                                                        i,
                                                        /:(read-\w+)/,
                                                        ":" + ul + "$1"
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                                case "::placeholder":
                                    return jo(
                                        [
                                            Ei(t, {
                                                props: [
                                                    Ee(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ":" + Se + "input-$1"
                                                    ),
                                                ],
                                            }),
                                            Ei(t, {
                                                props: [
                                                    Ee(
                                                        i,
                                                        /:(plac\w+)/,
                                                        ":" + ul + "$1"
                                                    ),
                                                ],
                                            }),
                                            Ei(t, {
                                                props: [
                                                    Ee(
                                                        i,
                                                        /:(plac\w+)/,
                                                        yt + "input-$1"
                                                    ),
                                                ],
                                            }),
                                        ],
                                        o
                                    );
                            }
                            return "";
                        });
            }
    },
    Ik = [Ok],
    _k = function (t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll(
                "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(r, function (p) {
                var S = p.getAttribute("data-emotion");
                S.indexOf(" ") !== -1 &&
                    (document.head.appendChild(p),
                    p.setAttribute("data-s", ""));
            });
        }
        var o = t.stylisPlugins || Ik,
            i = {},
            s,
            a = [];
        (s = t.container || document.head),
            Array.prototype.forEach.call(
                document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
                function (p) {
                    for (
                        var S = p.getAttribute("data-emotion").split(" "),
                            v = 1;
                        v < S.length;
                        v++
                    )
                        i[S[v]] = !0;
                    a.push(p);
                }
            );
        var l,
            u = [$k, Tk];
        {
            var d,
                f = [
                    Sk,
                    Ek(function (p) {
                        d.insert(p);
                    }),
                ],
                c = Ck(u.concat(o, f)),
                h = function (S) {
                    return jo(xk(S), c);
                };
            l = function (S, v, m, y) {
                (d = m),
                    h(S ? S + "{" + v.styles + "}" : v.styles),
                    y && (g.inserted[v.name] = !0);
            };
        }
        var g = {
            key: n,
            sheet: new ak({
                key: n,
                container: s,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint,
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: l,
        };
        return g.sheet.hydrate(a), g;
    },
    Mk = !0;
function Nk(e, t, n) {
    var r = "";
    return (
        n.split(" ").forEach(function (o) {
            e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
        }),
        r
    );
}
var M0 = function (t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || Mk === !1) &&
            t.registered[o] === void 0 &&
            (t.registered[o] = n.styles);
    },
    N0 = function (t, n, r) {
        M0(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
            while (i !== void 0);
        }
    };
function Ak(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
        (n =
            (e.charCodeAt(r) & 255) |
            ((e.charCodeAt(++r) & 255) << 8) |
            ((e.charCodeAt(++r) & 255) << 16) |
            ((e.charCodeAt(++r) & 255) << 24)),
            (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
            (n ^= n >>> 24),
            (t =
                ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
        case 3:
            t ^= (e.charCodeAt(r + 2) & 255) << 16;
        case 2:
            t ^= (e.charCodeAt(r + 1) & 255) << 8;
        case 1:
            (t ^= e.charCodeAt(r) & 255),
                (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
        (t ^= t >>> 13),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
        ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
}
var Lk = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    Dk = /[A-Z]|^ms/g,
    zk = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    A0 = function (t) {
        return t.charCodeAt(1) === 45;
    },
    $m = function (t) {
        return t != null && typeof t != "boolean";
    },
    ac = k0(function (e) {
        return A0(e) ? e : e.replace(Dk, "-$&").toLowerCase();
    }),
    Tm = function (t, n) {
        switch (t) {
            case "animation":
            case "animationName":
                if (typeof n == "string")
                    return n.replace(zk, function (r, o, i) {
                        return (Sn = { name: o, styles: i, next: Sn }), o;
                    });
        }
        return Lk[t] !== 1 && !A0(t) && typeof n == "number" && n !== 0
            ? n + "px"
            : n;
    };
function ks(e, t, n) {
    if (n == null) return "";
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof n) {
        case "boolean":
            return "";
        case "object": {
            if (n.anim === 1)
                return (
                    (Sn = { name: n.name, styles: n.styles, next: Sn }), n.name
                );
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0; )
                        (Sn = { name: r.name, styles: r.styles, next: Sn }),
                            (r = r.next);
                var o = n.styles + ";";
                return o;
            }
            return Fk(e, t, n);
        }
        case "function": {
            if (e !== void 0) {
                var i = Sn,
                    s = n(e);
                return (Sn = i), ks(e, t, s);
            }
            break;
        }
    }
    if (t == null) return n;
    var a = t[n];
    return a !== void 0 ? a : n;
}
function Fk(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++) r += ks(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var s = n[i];
            if (typeof s != "object")
                t != null && t[s] !== void 0
                    ? (r += i + "{" + t[s] + "}")
                    : $m(s) && (r += ac(i) + ":" + Tm(i, s) + ";");
            else if (
                Array.isArray(s) &&
                typeof s[0] == "string" &&
                (t == null || t[s[0]] === void 0)
            )
                for (var a = 0; a < s.length; a++)
                    $m(s[a]) && (r += ac(i) + ":" + Tm(i, s[a]) + ";");
            else {
                var l = ks(e, t, s);
                switch (i) {
                    case "animation":
                    case "animationName": {
                        r += ac(i) + ":" + l + ";";
                        break;
                    }
                    default:
                        r += i + "{" + l + "}";
                }
            }
        }
    return r;
}
var Om = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Sn,
    rp = function (t, n, r) {
        if (
            t.length === 1 &&
            typeof t[0] == "object" &&
            t[0] !== null &&
            t[0].styles !== void 0
        )
            return t[0];
        var o = !0,
            i = "";
        Sn = void 0;
        var s = t[0];
        s == null || s.raw === void 0
            ? ((o = !1), (i += ks(r, n, s)))
            : (i += s[0]);
        for (var a = 1; a < t.length; a++)
            (i += ks(r, n, t[a])), o && (i += s[a]);
        Om.lastIndex = 0;
        for (var l = "", u; (u = Om.exec(i)) !== null; ) l += "-" + u[1];
        var d = Ak(i) + l;
        return { name: d, styles: i, next: Sn };
    },
    Bk = function (t) {
        return t();
    },
    L0 = Vo["useInsertionEffect"] ? Vo["useInsertionEffect"] : !1,
    jk = L0 || Bk,
    Im = L0 || b.useLayoutEffect,
    D0 = b.createContext(typeof HTMLElement < "u" ? _k({ key: "css" }) : null);
D0.Provider;
var z0 = function (t) {
        return b.forwardRef(function (n, r) {
            var o = b.useContext(D0);
            return t(n, o, r);
        });
    },
    op = b.createContext({}),
    Uk = z0(function (e, t) {
        var n = e.styles,
            r = rp([n], void 0, b.useContext(op)),
            o = b.useRef();
        return (
            Im(
                function () {
                    var i = t.key + "-global",
                        s = new t.sheet.constructor({
                            key: i,
                            nonce: t.sheet.nonce,
                            container: t.sheet.container,
                            speedy: t.sheet.isSpeedy,
                        }),
                        a = !1,
                        l = document.querySelector(
                            'style[data-emotion="' + i + " " + r.name + '"]'
                        );
                    return (
                        t.sheet.tags.length && (s.before = t.sheet.tags[0]),
                        l !== null &&
                            ((a = !0),
                            l.setAttribute("data-emotion", i),
                            s.hydrate([l])),
                        (o.current = [s, a]),
                        function () {
                            s.flush();
                        }
                    );
                },
                [t]
            ),
            Im(
                function () {
                    var i = o.current,
                        s = i[0],
                        a = i[1];
                    if (a) {
                        i[1] = !1;
                        return;
                    }
                    if (
                        (r.next !== void 0 && N0(t, r.next, !0), s.tags.length)
                    ) {
                        var l = s.tags[s.tags.length - 1].nextElementSibling;
                        (s.before = l), s.flush();
                    }
                    t.insert("", r, s, !1);
                },
                [t, r.name]
            ),
            null
        );
    });
function Wk() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return rp(t);
}
var ip = function () {
        var t = Wk.apply(void 0, arguments),
            n = "animation-" + t.name;
        return {
            name: n,
            styles: "@keyframes " + n + "{" + t.styles + "}",
            anim: 1,
            toString: function () {
                return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
            },
        };
    },
    Vk = ok,
    Hk = function (t) {
        return t !== "theme";
    },
    _m = function (t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? Vk : Hk;
    },
    Mm = function (t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o =
                t.__emotion_forwardProp && i
                    ? function (s) {
                          return t.__emotion_forwardProp(s) && i(s);
                      }
                    : i;
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
    },
    Kk = function (t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return (
            M0(n, r, o),
            jk(function () {
                return N0(n, r, o);
            }),
            null
        );
    },
    Gk = function e(t, n) {
        var r = t.__emotion_real === t,
            o = (r && t.__emotion_base) || t,
            i,
            s;
        n !== void 0 && ((i = n.label), (s = n.target));
        var a = Mm(t, n, r),
            l = a || _m(o),
            u = !l("as");
        return function () {
            var d = arguments,
                f =
                    r && t.__emotion_styles !== void 0
                        ? t.__emotion_styles.slice(0)
                        : [];
            if (
                (i !== void 0 && f.push("label:" + i + ";"),
                d[0] == null || d[0].raw === void 0)
            )
                f.push.apply(f, d);
            else {
                f.push(d[0][0]);
                for (var c = d.length, h = 1; h < c; h++) f.push(d[h], d[0][h]);
            }
            var g = z0(function (p, S, v) {
                var m = (u && p.as) || o,
                    y = "",
                    x = [],
                    C = p;
                if (p.theme == null) {
                    C = {};
                    for (var k in p) C[k] = p[k];
                    C.theme = b.useContext(op);
                }
                typeof p.className == "string"
                    ? (y = Nk(S.registered, x, p.className))
                    : p.className != null && (y = p.className + " ");
                var E = rp(f.concat(x), S.registered, C);
                (y += S.key + "-" + E.name), s !== void 0 && (y += " " + s);
                var T = u && a === void 0 ? _m(m) : l,
                    O = {};
                for (var P in p) (u && P === "as") || (T(P) && (O[P] = p[P]));
                return (
                    (O.className = y),
                    (O.ref = v),
                    b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(Kk, {
                            cache: S,
                            serialized: E,
                            isStringTag: typeof m == "string",
                        }),
                        b.createElement(m, O)
                    )
                );
            });
            return (
                (g.displayName =
                    i !== void 0
                        ? i
                        : "Styled(" +
                          (typeof o == "string"
                              ? o
                              : o.displayName || o.name || "Component") +
                          ")"),
                (g.defaultProps = t.defaultProps),
                (g.__emotion_real = g),
                (g.__emotion_base = o),
                (g.__emotion_styles = f),
                (g.__emotion_forwardProp = a),
                Object.defineProperty(g, "toString", {
                    value: function () {
                        return "." + s;
                    },
                }),
                (g.withComponent = function (p, S) {
                    return e(
                        p,
                        w({}, n, S, { shouldForwardProp: Mm(g, S, !0) })
                    ).apply(void 0, f);
                }),
                g
            );
        };
    },
    qk = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
    ],
    kd = Gk.bind();
qk.forEach(function (e) {
    kd[e] = kd(e);
});
const Yk = kd;
function Xk(e) {
    return e == null || Object.keys(e).length === 0;
}
function Qk(e) {
    const { styles: t, defaultTheme: n = {} } = e;
    return R(Uk, {
        styles: typeof t == "function" ? (o) => t(Xk(o) ? n : o) : t,
    });
}
/** @license MUI v5.11.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function F0(e, t) {
    return Yk(e, t);
}
const Jk = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
        (e.__emotion_styles = t(e.__emotion_styles));
};
function Gi(e, t) {
    return t ? _t(e, t, { clone: !1 }) : e;
}
const sp = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Nm = {
        keys: ["xs", "sm", "md", "lg", "xl"],
        up: (e) => `@media (min-width:${sp[e]}px)`,
    };
function vn(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
        const i = r.breakpoints || Nm;
        return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
    }
    if (typeof t == "object") {
        const i = r.breakpoints || Nm;
        return Object.keys(t).reduce((s, a) => {
            if (Object.keys(i.values || sp).indexOf(a) !== -1) {
                const l = i.up(a);
                s[l] = n(t[a], a);
            } else {
                const l = a;
                s[l] = t[l];
            }
            return s;
        }, {});
    }
    return n(t);
}
function B0(e = {}) {
    var t;
    return (
        ((t = e.keys) == null
            ? void 0
            : t.reduce((r, o) => {
                  const i = e.up(o);
                  return (r[i] = {}), r;
              }, {})) || {}
    );
}
function j0(e, t) {
    return e.reduce((n, r) => {
        const o = n[r];
        return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
}
function Zk(e, ...t) {
    const n = B0(e),
        r = [n, ...t].reduce((o, i) => _t(o, i), {});
    return j0(Object.keys(n), r);
}
function eR(e, t) {
    if (typeof e != "object") return {};
    const n = {},
        r = Object.keys(t);
    return (
        Array.isArray(e)
            ? r.forEach((o, i) => {
                  i < e.length && (n[o] = !0);
              })
            : r.forEach((o) => {
                  e[o] != null && (n[o] = !0);
              }),
        n
    );
}
function lc({ values: e, breakpoints: t, base: n }) {
    const r = n || eR(e, t),
        o = Object.keys(r);
    if (o.length === 0) return e;
    let i;
    return o.reduce(
        (s, a, l) => (
            Array.isArray(e)
                ? ((s[a] = e[l] != null ? e[l] : e[i]), (i = l))
                : typeof e == "object"
                ? ((s[a] = e[a] != null ? e[a] : e[i]), (i = a))
                : (s[a] = e),
            s
        ),
        {}
    );
}
function ou(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
        const r = `vars.${t}`
            .split(".")
            .reduce((o, i) => (o && o[i] ? o[i] : null), e);
        if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function cl(e, t, n, r = n) {
    let o;
    return (
        typeof e == "function"
            ? (o = e(n))
            : Array.isArray(e)
            ? (o = e[n] || r)
            : (o = ou(e, n) || r),
        t && (o = t(o, r, e)),
        o
    );
}
function ke(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
        i = (s) => {
            if (s[t] == null) return null;
            const a = s[t],
                l = s.theme,
                u = ou(l, r) || {};
            return vn(s, a, (f) => {
                let c = cl(u, o, f);
                return (
                    f === c &&
                        typeof f == "string" &&
                        (c = cl(u, o, `${t}${f === "default" ? "" : V(f)}`, f)),
                    n === !1 ? c : { [n]: c }
                );
            });
        };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function iu(...e) {
    const t = e.reduce(
            (r, o) => (
                o.filterProps.forEach((i) => {
                    r[i] = o;
                }),
                r
            ),
            {}
        ),
        n = (r) =>
            Object.keys(r).reduce((o, i) => (t[i] ? Gi(o, t[i](r)) : o), {});
    return (
        (n.propTypes = {}),
        (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
        n
    );
}
function tR(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const nR = { m: "margin", p: "padding" },
    rR = {
        t: "Top",
        r: "Right",
        b: "Bottom",
        l: "Left",
        x: ["Left", "Right"],
        y: ["Top", "Bottom"],
    },
    Am = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    oR = tR((e) => {
        if (e.length > 2)
            if (Am[e]) e = Am[e];
            else return [e];
        const [t, n] = e.split(""),
            r = nR[t],
            o = rR[n] || "";
        return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    ap = [
        "m",
        "mt",
        "mr",
        "mb",
        "ml",
        "mx",
        "my",
        "margin",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
        "marginX",
        "marginY",
        "marginInline",
        "marginInlineStart",
        "marginInlineEnd",
        "marginBlock",
        "marginBlockStart",
        "marginBlockEnd",
    ],
    lp = [
        "p",
        "pt",
        "pr",
        "pb",
        "pl",
        "px",
        "py",
        "padding",
        "paddingTop",
        "paddingRight",
        "paddingBottom",
        "paddingLeft",
        "paddingX",
        "paddingY",
        "paddingInline",
        "paddingInlineStart",
        "paddingInlineEnd",
        "paddingBlock",
        "paddingBlockStart",
        "paddingBlockEnd",
    ];
[...ap, ...lp];
function Ds(e, t, n, r) {
    var o;
    const i = (o = ou(e, t, !1)) != null ? o : n;
    return typeof i == "number"
        ? (s) => (typeof s == "string" ? s : i * s)
        : Array.isArray(i)
        ? (s) => (typeof s == "string" ? s : i[s])
        : typeof i == "function"
        ? i
        : () => {};
}
function up(e) {
    return Ds(e, "spacing", 8);
}
function ai(e, t) {
    if (typeof t == "string" || t == null) return t;
    const n = Math.abs(t),
        r = e(n);
    return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function iR(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = ai(t, n)), r), {});
}
function sR(e, t, n, r) {
    if (t.indexOf(n) === -1) return null;
    const o = oR(n),
        i = iR(o, r),
        s = e[n];
    return vn(e, s, i);
}
function U0(e, t) {
    const n = up(e.theme);
    return Object.keys(e)
        .map((r) => sR(e, t, r, n))
        .reduce(Gi, {});
}
function Ve(e) {
    return U0(e, ap);
}
Ve.propTypes = {};
Ve.filterProps = ap;
function He(e) {
    return U0(e, lp);
}
He.propTypes = {};
He.filterProps = lp;
function En(e) {
    return typeof e != "number" ? e : `${e}px solid`;
}
const aR = ke({ prop: "border", themeKey: "borders", transform: En }),
    lR = ke({ prop: "borderTop", themeKey: "borders", transform: En }),
    uR = ke({ prop: "borderRight", themeKey: "borders", transform: En }),
    cR = ke({ prop: "borderBottom", themeKey: "borders", transform: En }),
    dR = ke({ prop: "borderLeft", themeKey: "borders", transform: En }),
    fR = ke({ prop: "borderColor", themeKey: "palette" }),
    pR = ke({ prop: "borderTopColor", themeKey: "palette" }),
    hR = ke({ prop: "borderRightColor", themeKey: "palette" }),
    mR = ke({ prop: "borderBottomColor", themeKey: "palette" }),
    gR = ke({ prop: "borderLeftColor", themeKey: "palette" }),
    su = (e) => {
        if (e.borderRadius !== void 0 && e.borderRadius !== null) {
            const t = Ds(e.theme, "shape.borderRadius", 4),
                n = (r) => ({ borderRadius: ai(t, r) });
            return vn(e, e.borderRadius, n);
        }
        return null;
    };
su.propTypes = {};
su.filterProps = ["borderRadius"];
iu(aR, lR, uR, cR, dR, fR, pR, hR, mR, gR, su);
const au = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
        const t = Ds(e.theme, "spacing", 8),
            n = (r) => ({ gap: ai(t, r) });
        return vn(e, e.gap, n);
    }
    return null;
};
au.propTypes = {};
au.filterProps = ["gap"];
const lu = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
        const t = Ds(e.theme, "spacing", 8),
            n = (r) => ({ columnGap: ai(t, r) });
        return vn(e, e.columnGap, n);
    }
    return null;
};
lu.propTypes = {};
lu.filterProps = ["columnGap"];
const uu = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
        const t = Ds(e.theme, "spacing", 8),
            n = (r) => ({ rowGap: ai(t, r) });
        return vn(e, e.rowGap, n);
    }
    return null;
};
uu.propTypes = {};
uu.filterProps = ["rowGap"];
const vR = ke({ prop: "gridColumn" }),
    yR = ke({ prop: "gridRow" }),
    bR = ke({ prop: "gridAutoFlow" }),
    xR = ke({ prop: "gridAutoColumns" }),
    wR = ke({ prop: "gridAutoRows" }),
    SR = ke({ prop: "gridTemplateColumns" }),
    CR = ke({ prop: "gridTemplateRows" }),
    ER = ke({ prop: "gridTemplateAreas" }),
    kR = ke({ prop: "gridArea" });
iu(au, lu, uu, vR, yR, bR, xR, wR, SR, CR, ER, kR);
function Uo(e, t) {
    return t === "grey" ? t : e;
}
const RR = ke({ prop: "color", themeKey: "palette", transform: Uo }),
    PR = ke({
        prop: "bgcolor",
        cssProperty: "backgroundColor",
        themeKey: "palette",
        transform: Uo,
    }),
    $R = ke({ prop: "backgroundColor", themeKey: "palette", transform: Uo });
iu(RR, PR, $R);
function Dt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const TR = ke({ prop: "width", transform: Dt }),
    cp = (e) => {
        if (e.maxWidth !== void 0 && e.maxWidth !== null) {
            const t = (n) => {
                var r, o, i;
                return {
                    maxWidth:
                        ((r = e.theme) == null ||
                        (o = r.breakpoints) == null ||
                        (i = o.values) == null
                            ? void 0
                            : i[n]) ||
                        sp[n] ||
                        Dt(n),
                };
            };
            return vn(e, e.maxWidth, t);
        }
        return null;
    };
cp.filterProps = ["maxWidth"];
const OR = ke({ prop: "minWidth", transform: Dt }),
    IR = ke({ prop: "height", transform: Dt }),
    _R = ke({ prop: "maxHeight", transform: Dt }),
    MR = ke({ prop: "minHeight", transform: Dt });
ke({ prop: "size", cssProperty: "width", transform: Dt });
ke({ prop: "size", cssProperty: "height", transform: Dt });
const NR = ke({ prop: "boxSizing" });
iu(TR, cp, OR, IR, _R, MR, NR);
const AR = {
        border: { themeKey: "borders", transform: En },
        borderTop: { themeKey: "borders", transform: En },
        borderRight: { themeKey: "borders", transform: En },
        borderBottom: { themeKey: "borders", transform: En },
        borderLeft: { themeKey: "borders", transform: En },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: su },
        color: { themeKey: "palette", transform: Uo },
        bgcolor: {
            themeKey: "palette",
            cssProperty: "backgroundColor",
            transform: Uo,
        },
        backgroundColor: { themeKey: "palette", transform: Uo },
        p: { style: He },
        pt: { style: He },
        pr: { style: He },
        pb: { style: He },
        pl: { style: He },
        px: { style: He },
        py: { style: He },
        padding: { style: He },
        paddingTop: { style: He },
        paddingRight: { style: He },
        paddingBottom: { style: He },
        paddingLeft: { style: He },
        paddingX: { style: He },
        paddingY: { style: He },
        paddingInline: { style: He },
        paddingInlineStart: { style: He },
        paddingInlineEnd: { style: He },
        paddingBlock: { style: He },
        paddingBlockStart: { style: He },
        paddingBlockEnd: { style: He },
        m: { style: Ve },
        mt: { style: Ve },
        mr: { style: Ve },
        mb: { style: Ve },
        ml: { style: Ve },
        mx: { style: Ve },
        my: { style: Ve },
        margin: { style: Ve },
        marginTop: { style: Ve },
        marginRight: { style: Ve },
        marginBottom: { style: Ve },
        marginLeft: { style: Ve },
        marginX: { style: Ve },
        marginY: { style: Ve },
        marginInline: { style: Ve },
        marginInlineStart: { style: Ve },
        marginInlineEnd: { style: Ve },
        marginBlock: { style: Ve },
        marginBlockStart: { style: Ve },
        marginBlockEnd: { style: Ve },
        displayPrint: {
            cssProperty: !1,
            transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: au },
        rowGap: { style: uu },
        columnGap: { style: lu },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: Dt },
        maxWidth: { style: cp },
        minWidth: { transform: Dt },
        height: { transform: Dt },
        maxHeight: { transform: Dt },
        minHeight: { transform: Dt },
        boxSizing: {},
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
    },
    cu = AR;
function LR(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
        n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
}
function DR(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function zR() {
    function e(n, r, o, i) {
        const s = { [n]: r, theme: o },
            a = i[n];
        if (!a) return { [n]: r };
        const { cssProperty: l = n, themeKey: u, transform: d, style: f } = a;
        if (r == null) return null;
        const c = ou(o, u) || {};
        return f
            ? f(s)
            : vn(s, r, (g) => {
                  let p = cl(c, d, g);
                  return (
                      g === p &&
                          typeof g == "string" &&
                          (p = cl(
                              c,
                              d,
                              `${n}${g === "default" ? "" : V(g)}`,
                              g
                          )),
                      l === !1 ? p : { [l]: p }
                  );
              });
    }
    function t(n) {
        var r;
        const { sx: o, theme: i = {} } = n || {};
        if (!o) return null;
        const s = (r = i.unstable_sxConfig) != null ? r : cu;
        function a(l) {
            let u = l;
            if (typeof l == "function") u = l(i);
            else if (typeof l != "object") return l;
            if (!u) return null;
            const d = B0(i.breakpoints),
                f = Object.keys(d);
            let c = d;
            return (
                Object.keys(u).forEach((h) => {
                    const g = DR(u[h], i);
                    if (g != null)
                        if (typeof g == "object")
                            if (s[h]) c = Gi(c, e(h, g, i, s));
                            else {
                                const p = vn({ theme: i }, g, (S) => ({
                                    [h]: S,
                                }));
                                LR(p, g)
                                    ? (c[h] = t({ sx: g, theme: i }))
                                    : (c = Gi(c, p));
                            }
                        else c = Gi(c, e(h, g, i, s));
                }),
                j0(f, c)
            );
        }
        return Array.isArray(o) ? o.map(a) : a(o);
    }
    return t;
}
const W0 = zR();
W0.filterProps = ["sx"];
const du = W0,
    FR = ["sx"],
    BR = (e) => {
        var t, n;
        const r = { systemProps: {}, otherProps: {} },
            o =
                (t =
                    e == null || (n = e.theme) == null
                        ? void 0
                        : n.unstable_sxConfig) != null
                    ? t
                    : cu;
        return (
            Object.keys(e).forEach((i) => {
                o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
            }),
            r
        );
    };
function dp(e) {
    const { sx: t } = e,
        n = Q(e, FR),
        { systemProps: r, otherProps: o } = BR(n);
    let i;
    return (
        Array.isArray(t)
            ? (i = [r, ...t])
            : typeof t == "function"
            ? (i = (...s) => {
                  const a = t(...s);
                  return Dr(a) ? w({}, r, a) : r;
              })
            : (i = w({}, r, t)),
        w({}, o, { sx: i })
    );
}
function V0(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = V0(e[t])) && (r && (r += " "), (r += n));
        else for (t in e) e[t] && (r && (r += " "), (r += t));
    return r;
}
function Z() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = V0(e)) && (r && (r += " "), (r += t));
    return r;
}
const jR = ["values", "unit", "step"],
    UR = (e) => {
        const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
        return (
            t.sort((n, r) => n.val - r.val),
            t.reduce((n, r) => w({}, n, { [r.key]: r.val }), {})
        );
    };
function WR(e) {
    const {
            values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
            unit: n = "px",
            step: r = 5,
        } = e,
        o = Q(e, jR),
        i = UR(t),
        s = Object.keys(i);
    function a(c) {
        return `@media (min-width:${typeof t[c] == "number" ? t[c] : c}${n})`;
    }
    function l(c) {
        return `@media (max-width:${
            (typeof t[c] == "number" ? t[c] : c) - r / 100
        }${n})`;
    }
    function u(c, h) {
        const g = s.indexOf(h);
        return `@media (min-width:${
            typeof t[c] == "number" ? t[c] : c
        }${n}) and (max-width:${
            (g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : h) - r / 100
        }${n})`;
    }
    function d(c) {
        return s.indexOf(c) + 1 < s.length ? u(c, s[s.indexOf(c) + 1]) : a(c);
    }
    function f(c) {
        const h = s.indexOf(c);
        return h === 0
            ? a(s[1])
            : h === s.length - 1
            ? l(s[h])
            : u(c, s[s.indexOf(c) + 1]).replace("@media", "@media not all and");
    }
    return w(
        {
            keys: s,
            values: i,
            up: a,
            down: l,
            between: u,
            only: d,
            not: f,
            unit: n,
        },
        o
    );
}
const VR = { borderRadius: 4 },
    HR = VR;
function KR(e = 8) {
    if (e.mui) return e;
    const t = up({ spacing: e }),
        n = (...r) =>
            (r.length === 0 ? [1] : r)
                .map((i) => {
                    const s = t(i);
                    return typeof s == "number" ? `${s}px` : s;
                })
                .join(" ");
    return (n.mui = !0), n;
}
const GR = ["breakpoints", "palette", "spacing", "shape"];
function fu(e = {}, ...t) {
    const {
            breakpoints: n = {},
            palette: r = {},
            spacing: o,
            shape: i = {},
        } = e,
        s = Q(e, GR),
        a = WR(n),
        l = KR(o);
    let u = _t(
        {
            breakpoints: a,
            direction: "ltr",
            components: {},
            palette: w({ mode: "light" }, r),
            spacing: l,
            shape: w({}, HR, i),
        },
        s
    );
    return (
        (u = t.reduce((d, f) => _t(d, f), u)),
        (u.unstable_sxConfig = w(
            {},
            cu,
            s == null ? void 0 : s.unstable_sxConfig
        )),
        (u.unstable_sx = function (f) {
            return du({ sx: f, theme: this });
        }),
        u
    );
}
const qR = b.createContext(null),
    H0 = qR;
function K0() {
    return b.useContext(H0);
}
const YR = typeof Symbol == "function" && Symbol.for,
    XR = YR ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function QR(e, t) {
    return typeof t == "function" ? t(e) : w({}, e, t);
}
function JR(e) {
    const { children: t, theme: n } = e,
        r = K0(),
        o = b.useMemo(() => {
            const i = r === null ? n : QR(r, n);
            return i != null && (i[XR] = r !== null), i;
        }, [n, r]);
    return R(H0.Provider, { value: o, children: t });
}
function ZR(e) {
    return Object.keys(e).length === 0;
}
function e2(e = null) {
    const t = K0();
    return !t || ZR(t) ? e : t;
}
const t2 = fu();
function pu(e = t2) {
    return e2(e);
}
const n2 = ["className", "component"];
function r2(e = {}) {
    const {
            defaultTheme: t,
            defaultClassName: n = "MuiBox-root",
            generateClassName: r,
        } = e,
        o = F0("div", {
            shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
        })(du);
    return b.forwardRef(function (a, l) {
        const u = pu(t),
            d = dp(a),
            { className: f, component: c = "div" } = d,
            h = Q(d, n2);
        return R(
            o,
            w({ as: c, ref: l, className: Z(f, r ? r(n) : n), theme: u }, h)
        );
    });
}
const o2 = ["variant"];
function Lm(e) {
    return e.length === 0;
}
function G0(e) {
    const { variant: t } = e,
        n = Q(e, o2);
    let r = t || "";
    return (
        Object.keys(n)
            .sort()
            .forEach((o) => {
                o === "color"
                    ? (r += Lm(r) ? e[o] : V(e[o]))
                    : (r += `${Lm(r) ? o : V(o)}${V(e[o].toString())}`);
            }),
        r
    );
}
const i2 = [
        "name",
        "slot",
        "skipVariantsResolver",
        "skipSx",
        "overridesResolver",
    ],
    s2 = ["theme"],
    a2 = ["theme"];
function ki(e) {
    return Object.keys(e).length === 0;
}
function l2(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
}
const u2 = (e, t) =>
        t.components && t.components[e] && t.components[e].styleOverrides
            ? t.components[e].styleOverrides
            : null,
    c2 = (e, t) => {
        let n = [];
        t &&
            t.components &&
            t.components[e] &&
            t.components[e].variants &&
            (n = t.components[e].variants);
        const r = {};
        return (
            n.forEach((o) => {
                const i = G0(o.props);
                r[i] = o.style;
            }),
            r
        );
    },
    d2 = (e, t, n, r) => {
        var o, i;
        const { ownerState: s = {} } = e,
            a = [],
            l =
                n == null || (o = n.components) == null || (i = o[r]) == null
                    ? void 0
                    : i.variants;
        return (
            l &&
                l.forEach((u) => {
                    let d = !0;
                    Object.keys(u.props).forEach((f) => {
                        s[f] !== u.props[f] && e[f] !== u.props[f] && (d = !1);
                    }),
                        d && a.push(t[G0(u.props)]);
                }),
            a
        );
    };
function qi(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const f2 = fu();
function q0(e = {}) {
    const {
            defaultTheme: t = f2,
            rootShouldForwardProp: n = qi,
            slotShouldForwardProp: r = qi,
        } = e,
        o = (i) => {
            const s = ki(i.theme) ? t : i.theme;
            return du(w({}, i, { theme: s }));
        };
    return (
        (o.__mui_systemSx = !0),
        (i, s = {}) => {
            Jk(i, (y) => y.filter((x) => !(x != null && x.__mui_systemSx)));
            const {
                    name: a,
                    slot: l,
                    skipVariantsResolver: u,
                    skipSx: d,
                    overridesResolver: f,
                } = s,
                c = Q(s, i2),
                h = u !== void 0 ? u : (l && l !== "Root") || !1,
                g = d || !1;
            let p,
                S = qi;
            l === "Root" ? (S = n) : l ? (S = r) : l2(i) && (S = void 0);
            const v = F0(i, w({ shouldForwardProp: S, label: p }, c)),
                m = (y, ...x) => {
                    const C = x
                        ? x.map((O) =>
                              typeof O == "function" && O.__emotion_real !== O
                                  ? (P) => {
                                        let { theme: z } = P,
                                            G = Q(P, s2);
                                        return O(
                                            w({ theme: ki(z) ? t : z }, G)
                                        );
                                    }
                                  : O
                          )
                        : [];
                    let k = y;
                    a &&
                        f &&
                        C.push((O) => {
                            const P = ki(O.theme) ? t : O.theme,
                                z = u2(a, P);
                            if (z) {
                                const G = {};
                                return (
                                    Object.entries(z).forEach(([U, A]) => {
                                        G[U] =
                                            typeof A == "function"
                                                ? A(w({}, O, { theme: P }))
                                                : A;
                                    }),
                                    f(O, G)
                                );
                            }
                            return null;
                        }),
                        a &&
                            !h &&
                            C.push((O) => {
                                const P = ki(O.theme) ? t : O.theme;
                                return d2(O, c2(a, P), P, a);
                            }),
                        g || C.push(o);
                    const E = C.length - x.length;
                    if (Array.isArray(y) && E > 0) {
                        const O = new Array(E).fill("");
                        (k = [...y, ...O]), (k.raw = [...y.raw, ...O]);
                    } else
                        typeof y == "function" &&
                            y.__emotion_real !== y &&
                            (k = (O) => {
                                let { theme: P } = O,
                                    z = Q(O, a2);
                                return y(w({ theme: ki(P) ? t : P }, z));
                            });
                    return v(k, ...C);
                };
            return v.withConfig && (m.withConfig = v.withConfig), m;
        }
    );
}
const p2 = q0(),
    h2 = p2;
function m2(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
        !t.components ||
        !t.components[n] ||
        !t.components[n].defaultProps
        ? r
        : Zf(t.components[n].defaultProps, r);
}
function Y0({ props: e, name: t, defaultTheme: n }) {
    const r = pu(n);
    return m2({ theme: r, name: t, props: e });
}
function fp(e, t = 0, n = 1) {
    return Math.min(Math.max(t, e), n);
}
function g2(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return (
        n && n[0].length === 1 && (n = n.map((r) => r + r)),
        n
            ? `rgb${n.length === 4 ? "a" : ""}(${n
                  .map((r, o) =>
                      o < 3
                          ? parseInt(r, 16)
                          : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
                  )
                  .join(", ")})`
            : ""
    );
}
function eo(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return eo(g2(e));
    const t = e.indexOf("("),
        n = e.substring(0, t);
    if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
        throw new Error(Vn(9, e));
    let r = e.substring(t + 1, e.length - 1),
        o;
    if (n === "color") {
        if (
            ((r = r.split(" ")),
            (o = r.shift()),
            r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
            [
                "srgb",
                "display-p3",
                "a98-rgb",
                "prophoto-rgb",
                "rec-2020",
            ].indexOf(o) === -1)
        )
            throw new Error(Vn(10, o));
    } else r = r.split(",");
    return (
        (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
}
function hu(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
        t.indexOf("rgb") !== -1
            ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
            : t.indexOf("hsl") !== -1 &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
        t.indexOf("color") !== -1
            ? (r = `${n} ${r.join(" ")}`)
            : (r = `${r.join(", ")}`),
        `${t}(${r})`
    );
}
function v2(e) {
    e = eo(e);
    const { values: t } = e,
        n = t[0],
        r = t[1] / 100,
        o = t[2] / 100,
        i = r * Math.min(o, 1 - o),
        s = (u, d = (u + n / 30) % 12) =>
            o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
    let a = "rgb";
    const l = [
        Math.round(s(0) * 255),
        Math.round(s(8) * 255),
        Math.round(s(4) * 255),
    ];
    return (
        e.type === "hsla" && ((a += "a"), l.push(t[3])),
        hu({ type: a, values: l })
    );
}
function Dm(e) {
    e = eo(e);
    let t = e.type === "hsl" || e.type === "hsla" ? eo(v2(e)).values : e.values;
    return (
        (t = t.map(
            (n) => (
                e.type !== "color" && (n /= 255),
                n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
            )
        )),
        Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
}
function y2(e, t) {
    const n = Dm(e),
        r = Dm(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function _e(e, t) {
    return (
        (e = eo(e)),
        (t = fp(t)),
        (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
        e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
        hu(e)
    );
}
function b2(e, t) {
    if (((e = eo(e)), (t = fp(t)), e.type.indexOf("hsl") !== -1))
        e.values[2] *= 1 - t;
    else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return hu(e);
}
function x2(e, t) {
    if (((e = eo(e)), (t = fp(t)), e.type.indexOf("hsl") !== -1))
        e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.indexOf("rgb") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.indexOf("color") !== -1)
        for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return hu(e);
}
const w2 = {};
function S2(e) {
    const t = pu();
    return R(op.Provider, {
        value: typeof t == "object" ? t : w2,
        children: e.children,
    });
}
function C2(e) {
    const { children: t, theme: n } = e;
    return R(JR, { theme: n, children: R(S2, { children: t }) });
}
const E2 = [
        "className",
        "component",
        "disableGutters",
        "fixed",
        "maxWidth",
        "classes",
    ],
    k2 = fu(),
    R2 = h2("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[`maxWidth${V(String(n.maxWidth))}`],
                n.fixed && t.fixed,
                n.disableGutters && t.disableGutters,
            ];
        },
    }),
    P2 = (e) => Y0({ props: e, name: "MuiContainer", defaultTheme: k2 }),
    $2 = (e, t) => {
        const n = (l) => me(t, l),
            { classes: r, fixed: o, disableGutters: i, maxWidth: s } = e,
            a = {
                root: [
                    "root",
                    s && `maxWidth${V(String(s))}`,
                    o && "fixed",
                    i && "disableGutters",
                ],
            };
        return ve(a, n, r);
    };
function X0(e = {}) {
    const {
            createStyledComponent: t = R2,
            useThemeProps: n = P2,
            componentName: r = "MuiContainer",
        } = e,
        o = t(
            ({ theme: s, ownerState: a }) =>
                w(
                    {
                        width: "100%",
                        marginLeft: "auto",
                        boxSizing: "border-box",
                        marginRight: "auto",
                        display: "block",
                    },
                    !a.disableGutters && {
                        paddingLeft: s.spacing(2),
                        paddingRight: s.spacing(2),
                        [s.breakpoints.up("sm")]: {
                            paddingLeft: s.spacing(3),
                            paddingRight: s.spacing(3),
                        },
                    }
                ),
            ({ theme: s, ownerState: a }) =>
                a.fixed &&
                Object.keys(s.breakpoints.values).reduce((l, u) => {
                    const d = u,
                        f = s.breakpoints.values[d];
                    return (
                        f !== 0 &&
                            (l[s.breakpoints.up(d)] = {
                                maxWidth: `${f}${s.breakpoints.unit}`,
                            }),
                        l
                    );
                }, {}),
            ({ theme: s, ownerState: a }) =>
                w(
                    {},
                    a.maxWidth === "xs" && {
                        [s.breakpoints.up("xs")]: {
                            maxWidth: Math.max(s.breakpoints.values.xs, 444),
                        },
                    },
                    a.maxWidth &&
                        a.maxWidth !== "xs" && {
                            [s.breakpoints.up(a.maxWidth)]: {
                                maxWidth: `${s.breakpoints.values[a.maxWidth]}${
                                    s.breakpoints.unit
                                }`,
                            },
                        }
                )
        );
    return b.forwardRef(function (a, l) {
        const u = n(a),
            {
                className: d,
                component: f = "div",
                disableGutters: c = !1,
                fixed: h = !1,
                maxWidth: g = "lg",
            } = u,
            p = Q(u, E2),
            S = w({}, u, {
                component: f,
                disableGutters: c,
                fixed: h,
                maxWidth: g,
            }),
            v = $2(S, r);
        return R(
            o,
            w({ as: f, ownerState: S, className: Z(v.root, d), ref: l }, p)
        );
    });
}
const T2 = X0(),
    O2 = T2;
function I2(e, t) {
    return w(
        {
            toolbar: {
                minHeight: 56,
                [e.up("xs")]: {
                    "@media (orientation: landscape)": { minHeight: 48 },
                },
                [e.up("sm")]: { minHeight: 64 },
            },
        },
        t
    );
}
const _2 = ["mode", "contrastThreshold", "tonalOffset"],
    zm = {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
        },
        divider: "rgba(0, 0, 0, 0.12)",
        background: { paper: Ss.white, default: Ss.white },
        action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
    },
    uc = {
        text: {
            primary: Ss.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
        },
        divider: "rgba(255, 255, 255, 0.12)",
        background: { paper: "#121212", default: "#121212" },
        action: {
            active: Ss.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
        },
    };
function Fm(e, t, n, r) {
    const o = r.light || r,
        i = r.dark || r * 1.5;
    e[t] ||
        (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : t === "light"
            ? (e.light = x2(e.main, o))
            : t === "dark" && (e.dark = b2(e.main, i)));
}
function M2(e = "light") {
    return e === "dark"
        ? { main: ao[200], light: ao[50], dark: ao[400] }
        : { main: ao[700], light: ao[400], dark: ao[800] };
}
function N2(e = "light") {
    return e === "dark"
        ? { main: so[200], light: so[50], dark: so[400] }
        : { main: so[500], light: so[300], dark: so[700] };
}
function A2(e = "light") {
    return e === "dark"
        ? { main: io[500], light: io[300], dark: io[700] }
        : { main: io[700], light: io[400], dark: io[800] };
}
function L2(e = "light") {
    return e === "dark"
        ? { main: lo[400], light: lo[300], dark: lo[700] }
        : { main: lo[700], light: lo[500], dark: lo[900] };
}
function D2(e = "light") {
    return e === "dark"
        ? { main: uo[400], light: uo[300], dark: uo[700] }
        : { main: uo[800], light: uo[500], dark: uo[900] };
}
function z2(e = "light") {
    return e === "dark"
        ? { main: Ci[400], light: Ci[300], dark: Ci[700] }
        : { main: "#ed6c02", light: Ci[500], dark: Ci[900] };
}
function F2(e) {
    const {
            mode: t = "light",
            contrastThreshold: n = 3,
            tonalOffset: r = 0.2,
        } = e,
        o = Q(e, _2),
        i = e.primary || M2(t),
        s = e.secondary || N2(t),
        a = e.error || A2(t),
        l = e.info || L2(t),
        u = e.success || D2(t),
        d = e.warning || z2(t);
    function f(p) {
        return y2(p, uc.text.primary) >= n ? uc.text.primary : zm.text.primary;
    }
    const c = ({
            color: p,
            name: S,
            mainShade: v = 500,
            lightShade: m = 300,
            darkShade: y = 700,
        }) => {
            if (
                ((p = w({}, p)),
                !p.main && p[v] && (p.main = p[v]),
                !p.hasOwnProperty("main"))
            )
                throw new Error(Vn(11, S ? ` (${S})` : "", v));
            if (typeof p.main != "string")
                throw new Error(
                    Vn(12, S ? ` (${S})` : "", JSON.stringify(p.main))
                );
            return (
                Fm(p, "light", m, r),
                Fm(p, "dark", y, r),
                p.contrastText || (p.contrastText = f(p.main)),
                p
            );
        },
        h = { dark: uc, light: zm };
    return _t(
        w(
            {
                common: w({}, Ss),
                mode: t,
                primary: c({ color: i, name: "primary" }),
                secondary: c({
                    color: s,
                    name: "secondary",
                    mainShade: "A400",
                    lightShade: "A200",
                    darkShade: "A700",
                }),
                error: c({ color: a, name: "error" }),
                warning: c({ color: d, name: "warning" }),
                info: c({ color: l, name: "info" }),
                success: c({ color: u, name: "success" }),
                grey: WE,
                contrastThreshold: n,
                getContrastText: f,
                augmentColor: c,
                tonalOffset: r,
            },
            h[t]
        ),
        o
    );
}
const B2 = [
    "fontFamily",
    "fontSize",
    "fontWeightLight",
    "fontWeightRegular",
    "fontWeightMedium",
    "fontWeightBold",
    "htmlFontSize",
    "allVariants",
    "pxToRem",
];
function j2(e) {
    return Math.round(e * 1e5) / 1e5;
}
const Bm = { textTransform: "uppercase" },
    jm = '"Roboto", "Helvetica", "Arial", sans-serif';
function U2(e, t) {
    const n = typeof t == "function" ? t(e) : t,
        {
            fontFamily: r = jm,
            fontSize: o = 14,
            fontWeightLight: i = 300,
            fontWeightRegular: s = 400,
            fontWeightMedium: a = 500,
            fontWeightBold: l = 700,
            htmlFontSize: u = 16,
            allVariants: d,
            pxToRem: f,
        } = n,
        c = Q(n, B2),
        h = o / 14,
        g = f || ((v) => `${(v / u) * h}rem`),
        p = (v, m, y, x, C) =>
            w(
                { fontFamily: r, fontWeight: v, fontSize: g(m), lineHeight: y },
                r === jm ? { letterSpacing: `${j2(x / m)}em` } : {},
                C,
                d
            ),
        S = {
            h1: p(i, 96, 1.167, -1.5),
            h2: p(i, 60, 1.2, -0.5),
            h3: p(s, 48, 1.167, 0),
            h4: p(s, 34, 1.235, 0.25),
            h5: p(s, 24, 1.334, 0),
            h6: p(a, 20, 1.6, 0.15),
            subtitle1: p(s, 16, 1.75, 0.15),
            subtitle2: p(a, 14, 1.57, 0.1),
            body1: p(s, 16, 1.5, 0.15),
            body2: p(s, 14, 1.43, 0.15),
            button: p(a, 14, 1.75, 0.4, Bm),
            caption: p(s, 12, 1.66, 0.4),
            overline: p(s, 12, 2.66, 1, Bm),
        };
    return _t(
        w(
            {
                htmlFontSize: u,
                pxToRem: g,
                fontFamily: r,
                fontSize: o,
                fontWeightLight: i,
                fontWeightRegular: s,
                fontWeightMedium: a,
                fontWeightBold: l,
            },
            S
        ),
        c,
        { clone: !1 }
    );
}
const W2 = 0.2,
    V2 = 0.14,
    H2 = 0.12;
function ze(...e) {
    return [
        `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${W2})`,
        `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${V2})`,
        `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${H2})`,
    ].join(",");
}
const K2 = [
        "none",
        ze(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
        ze(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
        ze(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
        ze(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
        ze(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
        ze(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
        ze(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
        ze(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
        ze(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
        ze(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
        ze(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
        ze(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
        ze(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
        ze(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
        ze(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
        ze(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
        ze(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
        ze(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
        ze(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
        ze(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
        ze(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
        ze(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
        ze(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
        ze(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    G2 = K2,
    q2 = ["duration", "easing", "delay"],
    Y2 = {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    Q0 = {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
    };
function Um(e) {
    return `${Math.round(e)}ms`;
}
function X2(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Q2(e) {
    const t = w({}, Y2, e.easing),
        n = w({}, Q0, e.duration);
    return w(
        {
            getAutoHeightDuration: X2,
            create: (o = ["all"], i = {}) => {
                const {
                    duration: s = n.standard,
                    easing: a = t.easeInOut,
                    delay: l = 0,
                } = i;
                return (
                    Q(i, q2),
                    (Array.isArray(o) ? o : [o])
                        .map(
                            (u) =>
                                `${u} ${
                                    typeof s == "string" ? s : Um(s)
                                } ${a} ${typeof l == "string" ? l : Um(l)}`
                        )
                        .join(",")
                );
            },
        },
        e,
        { easing: t, duration: n }
    );
}
const J2 = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
    },
    Z2 = J2,
    eP = [
        "breakpoints",
        "mixins",
        "spacing",
        "palette",
        "transitions",
        "typography",
        "shape",
    ];
function pp(e = {}, ...t) {
    const {
            mixins: n = {},
            palette: r = {},
            transitions: o = {},
            typography: i = {},
        } = e,
        s = Q(e, eP);
    if (e.vars) throw new Error(Vn(18));
    const a = F2(r),
        l = fu(e);
    let u = _t(l, {
        mixins: I2(l.breakpoints, n),
        palette: a,
        shadows: G2.slice(),
        typography: U2(a, i),
        transitions: Q2(o),
        zIndex: w({}, Z2),
    });
    return (
        (u = _t(u, s)),
        (u = t.reduce((d, f) => _t(d, f), u)),
        (u.unstable_sxConfig = w(
            {},
            cu,
            s == null ? void 0 : s.unstable_sxConfig
        )),
        (u.unstable_sx = function (f) {
            return du({ sx: f, theme: this });
        }),
        u
    );
}
function Wm(e) {
    return String(parseFloat(e)).length === String(e).length;
}
function tP(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function $r(e) {
    return parseFloat(e);
}
function nP(e) {
    return (t, n) => {
        const r = tP(t);
        if (r === n) return t;
        let o = $r(t);
        r !== "px" && (r === "em" || r === "rem") && (o = $r(t) * $r(e));
        let i = o;
        if (n !== "px")
            if (n === "em") i = o / $r(e);
            else if (n === "rem") i = o / $r(e);
            else return t;
        return parseFloat(i.toFixed(5)) + n;
    };
}
function rP({ size: e, grid: t }) {
    const n = e - (e % t),
        r = n + t;
    return e - n < r - e ? n : r;
}
function oP({ lineHeight: e, pixels: t, htmlFontSize: n }) {
    return t / (e * n);
}
function iP({
    cssProperty: e,
    min: t,
    max: n,
    unit: r = "rem",
    breakpoints: o = [600, 900, 1200],
    transform: i = null,
}) {
    const s = { [e]: `${t}${r}` },
        a = (n - t) / o[o.length - 1];
    return (
        o.forEach((l) => {
            let u = t + a * l;
            i !== null && (u = i(u)),
                (s[`@media (min-width:${l}px)`] = {
                    [e]: `${Math.round(u * 1e4) / 1e4}${r}`,
                });
        }),
        s
    );
}
function sP(e, t = {}) {
    const {
            breakpoints: n = ["sm", "md", "lg"],
            disableAlign: r = !1,
            factor: o = 2,
            variants: i = [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "subtitle1",
                "subtitle2",
                "body1",
                "body2",
                "caption",
                "button",
                "overline",
            ],
        } = t,
        s = w({}, e);
    s.typography = w({}, s.typography);
    const a = s.typography,
        l = nP(a.htmlFontSize),
        u = n.map((d) => s.breakpoints.values[d]);
    return (
        i.forEach((d) => {
            const f = a[d],
                c = parseFloat(l(f.fontSize, "rem"));
            if (c <= 1) return;
            const h = c,
                g = 1 + (h - 1) / o;
            let { lineHeight: p } = f;
            if (!Wm(p) && !r) throw new Error(Vn(6));
            Wm(p) || (p = parseFloat(l(p, "rem")) / parseFloat(c));
            let S = null;
            r ||
                (S = (v) =>
                    rP({
                        size: v,
                        grid: oP({
                            pixels: 4,
                            lineHeight: p,
                            htmlFontSize: a.htmlFontSize,
                        }),
                    })),
                (a[d] = w(
                    {},
                    f,
                    iP({
                        cssProperty: "fontSize",
                        min: g,
                        max: h,
                        unit: "rem",
                        breakpoints: u,
                        transform: S,
                    })
                ));
        }),
        s
    );
}
const aP = pp(),
    mu = aP;
function li() {
    return pu(mu);
}
function he({ props: e, name: t }) {
    return Y0({ props: e, name: t, defaultTheme: mu });
}
const yn = (e) => qi(e) && e !== "classes",
    lP = qi,
    uP = q0({ defaultTheme: mu, rootShouldForwardProp: yn }),
    X = uP,
    cP = (e) => {
        let t;
        return (
            e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
            (t / 100).toFixed(2)
        );
    },
    Vm = cP;
function ei(e) {
    return typeof e == "string";
}
function dP(e, t, n) {
    return e === void 0 || ei(e)
        ? t
        : w({}, t, { ownerState: w({}, t.ownerState, n) });
}
function fP(e, t = []) {
    if (e === void 0) return {};
    const n = {};
    return (
        Object.keys(e)
            .filter(
                (r) =>
                    r.match(/^on[A-Z]/) &&
                    typeof e[r] == "function" &&
                    !t.includes(r)
            )
            .forEach((r) => {
                n[r] = e[r];
            }),
        n
    );
}
function Rd(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Hm(e) {
    if (e === void 0) return {};
    const t = {};
    return (
        Object.keys(e)
            .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
            .forEach((n) => {
                t[n] = e[n];
            }),
        t
    );
}
function pP(e) {
    const {
        getSlotProps: t,
        additionalProps: n,
        externalSlotProps: r,
        externalForwardedProps: o,
        className: i,
    } = e;
    if (!t) {
        const h = Z(
                o == null ? void 0 : o.className,
                r == null ? void 0 : r.className,
                i,
                n == null ? void 0 : n.className
            ),
            g = w(
                {},
                n == null ? void 0 : n.style,
                o == null ? void 0 : o.style,
                r == null ? void 0 : r.style
            ),
            p = w({}, n, o, r);
        return (
            h.length > 0 && (p.className = h),
            Object.keys(g).length > 0 && (p.style = g),
            { props: p, internalRef: void 0 }
        );
    }
    const s = fP(w({}, o, r)),
        a = Hm(r),
        l = Hm(o),
        u = t(s),
        d = Z(
            u == null ? void 0 : u.className,
            n == null ? void 0 : n.className,
            i,
            o == null ? void 0 : o.className,
            r == null ? void 0 : r.className
        ),
        f = w(
            {},
            u == null ? void 0 : u.style,
            n == null ? void 0 : n.style,
            o == null ? void 0 : o.style,
            r == null ? void 0 : r.style
        ),
        c = w({}, u, n, l, a);
    return (
        d.length > 0 && (c.className = d),
        Object.keys(f).length > 0 && (c.style = f),
        { props: c, internalRef: u.ref }
    );
}
const hP = ["elementType", "externalSlotProps", "ownerState"];
function Km(e) {
    var t;
    const { elementType: n, externalSlotProps: r, ownerState: o } = e,
        i = Q(e, hP),
        s = Rd(r, o),
        { props: a, internalRef: l } = pP(w({}, i, { externalSlotProps: s })),
        u = rt(
            l,
            s == null ? void 0 : s.ref,
            (t = e.additionalProps) == null ? void 0 : t.ref
        );
    return dP(n, w({}, a, { ref: u }), o);
}
const mP = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
].join(",");
function gP(e) {
    const t = parseInt(e.getAttribute("tabindex") || "", 10);
    return Number.isNaN(t)
        ? e.contentEditable === "true" ||
          ((e.nodeName === "AUDIO" ||
              e.nodeName === "VIDEO" ||
              e.nodeName === "DETAILS") &&
              e.getAttribute("tabindex") === null)
            ? 0
            : e.tabIndex
        : t;
}
function vP(e) {
    if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
    const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let n = t(`[name="${e.name}"]:checked`);
    return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function yP(e) {
    return !(
        e.disabled ||
        (e.tagName === "INPUT" && e.type === "hidden") ||
        vP(e)
    );
}
function bP(e) {
    const t = [],
        n = [];
    return (
        Array.from(e.querySelectorAll(mP)).forEach((r, o) => {
            const i = gP(r);
            i === -1 ||
                !yP(r) ||
                (i === 0
                    ? t.push(r)
                    : n.push({ documentOrder: o, tabIndex: i, node: r }));
        }),
        n
            .sort((r, o) =>
                r.tabIndex === o.tabIndex
                    ? r.documentOrder - o.documentOrder
                    : r.tabIndex - o.tabIndex
            )
            .map((r) => r.node)
            .concat(t)
    );
}
function xP() {
    return !0;
}
function wP(e) {
    const {
            children: t,
            disableAutoFocus: n = !1,
            disableEnforceFocus: r = !1,
            disableRestoreFocus: o = !1,
            getTabbable: i = bP,
            isEnabled: s = xP,
            open: a,
        } = e,
        l = b.useRef(!1),
        u = b.useRef(null),
        d = b.useRef(null),
        f = b.useRef(null),
        c = b.useRef(null),
        h = b.useRef(!1),
        g = b.useRef(null),
        p = rt(t.ref, g),
        S = b.useRef(null);
    b.useEffect(() => {
        !a || !g.current || (h.current = !n);
    }, [n, a]),
        b.useEffect(() => {
            if (!a || !g.current) return;
            const y = Bt(g.current);
            return (
                g.current.contains(y.activeElement) ||
                    (g.current.hasAttribute("tabIndex") ||
                        g.current.setAttribute("tabIndex", "-1"),
                    h.current && g.current.focus()),
                () => {
                    o ||
                        (f.current &&
                            f.current.focus &&
                            ((l.current = !0), f.current.focus()),
                        (f.current = null));
                }
            );
        }, [a]),
        b.useEffect(() => {
            if (!a || !g.current) return;
            const y = Bt(g.current),
                x = (E) => {
                    const { current: T } = g;
                    if (T !== null) {
                        if (!y.hasFocus() || r || !s() || l.current) {
                            l.current = !1;
                            return;
                        }
                        if (!T.contains(y.activeElement)) {
                            if (
                                (E && c.current !== E.target) ||
                                y.activeElement !== c.current
                            )
                                c.current = null;
                            else if (c.current !== null) return;
                            if (!h.current) return;
                            let z = [];
                            if (
                                ((y.activeElement === u.current ||
                                    y.activeElement === d.current) &&
                                    (z = i(g.current)),
                                z.length > 0)
                            ) {
                                var O, P;
                                const G = Boolean(
                                        ((O = S.current) == null
                                            ? void 0
                                            : O.shiftKey) &&
                                            ((P = S.current) == null
                                                ? void 0
                                                : P.key) === "Tab"
                                    ),
                                    U = z[0],
                                    A = z[z.length - 1];
                                typeof U != "string" &&
                                    typeof A != "string" &&
                                    (G ? A.focus() : U.focus());
                            } else T.focus();
                        }
                    }
                },
                C = (E) => {
                    (S.current = E),
                        !(r || !s() || E.key !== "Tab") &&
                            y.activeElement === g.current &&
                            E.shiftKey &&
                            ((l.current = !0), d.current && d.current.focus());
                };
            y.addEventListener("focusin", x),
                y.addEventListener("keydown", C, !0);
            const k = setInterval(() => {
                y.activeElement &&
                    y.activeElement.tagName === "BODY" &&
                    x(null);
            }, 50);
            return () => {
                clearInterval(k),
                    y.removeEventListener("focusin", x),
                    y.removeEventListener("keydown", C, !0);
            };
        }, [n, r, o, s, a, i]);
    const v = (y) => {
            f.current === null && (f.current = y.relatedTarget),
                (h.current = !0),
                (c.current = y.target);
            const x = t.props.onFocus;
            x && x(y);
        },
        m = (y) => {
            f.current === null && (f.current = y.relatedTarget),
                (h.current = !0);
        };
    return le(b.Fragment, {
        children: [
            R("div", {
                tabIndex: a ? 0 : -1,
                onFocus: m,
                ref: u,
                "data-testid": "sentinelStart",
            }),
            b.cloneElement(t, { ref: p, onFocus: v }),
            R("div", {
                tabIndex: a ? 0 : -1,
                onFocus: m,
                ref: d,
                "data-testid": "sentinelEnd",
            }),
        ],
    });
}
function SP(e) {
    return typeof e == "function" ? e() : e;
}
const CP = b.forwardRef(function (t, n) {
        const { children: r, container: o, disablePortal: i = !1 } = t,
            [s, a] = b.useState(null),
            l = rt(b.isValidElement(r) ? r.ref : null, n);
        if (
            (xr(() => {
                i || a(SP(o) || document.body);
            }, [o, i]),
            xr(() => {
                if (s && !i)
                    return (
                        xd(n, s),
                        () => {
                            xd(n, null);
                        }
                    );
            }, [n, s, i]),
            i)
        ) {
            if (b.isValidElement(r)) {
                const u = { ref: l };
                return b.cloneElement(r, u);
            }
            return R(b.Fragment, { children: r });
        }
        return R(b.Fragment, { children: s && Gr.createPortal(r, s) });
    }),
    EP = CP;
function kP(e) {
    const t = Bt(e);
    return t.body === e
        ? Hn(e).innerWidth > t.documentElement.clientWidth
        : e.scrollHeight > e.clientHeight;
}
function Yi(e, t) {
    t
        ? e.setAttribute("aria-hidden", "true")
        : e.removeAttribute("aria-hidden");
}
function Gm(e) {
    return parseInt(Hn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function RP(e) {
    const n =
            [
                "TEMPLATE",
                "SCRIPT",
                "STYLE",
                "LINK",
                "MAP",
                "META",
                "NOSCRIPT",
                "PICTURE",
                "COL",
                "COLGROUP",
                "PARAM",
                "SLOT",
                "SOURCE",
                "TRACK",
            ].indexOf(e.tagName) !== -1,
        r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
    return n || r;
}
function qm(e, t, n, r, o) {
    const i = [t, n, ...r];
    [].forEach.call(e.children, (s) => {
        const a = i.indexOf(s) === -1,
            l = !RP(s);
        a && l && Yi(s, o);
    });
}
function cc(e, t) {
    let n = -1;
    return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function PP(e, t) {
    const n = [],
        r = e.container;
    if (!t.disableScrollLock) {
        if (kP(r)) {
            const s = C0(Bt(r));
            n.push({
                value: r.style.paddingRight,
                property: "padding-right",
                el: r,
            }),
                (r.style.paddingRight = `${Gm(r) + s}px`);
            const a = Bt(r).querySelectorAll(".mui-fixed");
            [].forEach.call(a, (l) => {
                n.push({
                    value: l.style.paddingRight,
                    property: "padding-right",
                    el: l,
                }),
                    (l.style.paddingRight = `${Gm(l) + s}px`);
            });
        }
        let i;
        if (r.parentNode instanceof DocumentFragment) i = Bt(r).body;
        else {
            const s = r.parentElement,
                a = Hn(r);
            i =
                (s == null ? void 0 : s.nodeName) === "HTML" &&
                a.getComputedStyle(s).overflowY === "scroll"
                    ? s
                    : r;
        }
        n.push(
            { value: i.style.overflow, property: "overflow", el: i },
            { value: i.style.overflowX, property: "overflow-x", el: i },
            { value: i.style.overflowY, property: "overflow-y", el: i }
        ),
            (i.style.overflow = "hidden");
    }
    return () => {
        n.forEach(({ value: i, el: s, property: a }) => {
            i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
        });
    };
}
function $P(e) {
    const t = [];
    return (
        [].forEach.call(e.children, (n) => {
            n.getAttribute("aria-hidden") === "true" && t.push(n);
        }),
        t
    );
}
class TP {
    constructor() {
        (this.containers = void 0),
            (this.modals = void 0),
            (this.modals = []),
            (this.containers = []);
    }
    add(t, n) {
        let r = this.modals.indexOf(t);
        if (r !== -1) return r;
        (r = this.modals.length),
            this.modals.push(t),
            t.modalRef && Yi(t.modalRef, !1);
        const o = $P(n);
        qm(n, t.mount, t.modalRef, o, !0);
        const i = cc(this.containers, (s) => s.container === n);
        return i !== -1
            ? (this.containers[i].modals.push(t), r)
            : (this.containers.push({
                  modals: [t],
                  container: n,
                  restore: null,
                  hiddenSiblings: o,
              }),
              r);
    }
    mount(t, n) {
        const r = cc(this.containers, (i) => i.modals.indexOf(t) !== -1),
            o = this.containers[r];
        o.restore || (o.restore = PP(o, n));
    }
    remove(t, n = !0) {
        const r = this.modals.indexOf(t);
        if (r === -1) return r;
        const o = cc(this.containers, (s) => s.modals.indexOf(t) !== -1),
            i = this.containers[o];
        if (
            (i.modals.splice(i.modals.indexOf(t), 1),
            this.modals.splice(r, 1),
            i.modals.length === 0)
        )
            i.restore && i.restore(),
                t.modalRef && Yi(t.modalRef, n),
                qm(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
                this.containers.splice(o, 1);
        else {
            const s = i.modals[i.modals.length - 1];
            s.modalRef && Yi(s.modalRef, !1);
        }
        return r;
    }
    isTopModal(t) {
        return (
            this.modals.length > 0 && this.modals[this.modals.length - 1] === t
        );
    }
}
function OP(e) {
    return me("MuiModal", e);
}
ye("MuiModal", ["root", "hidden"]);
const IP = [
        "children",
        "classes",
        "closeAfterTransition",
        "component",
        "container",
        "disableAutoFocus",
        "disableEnforceFocus",
        "disableEscapeKeyDown",
        "disablePortal",
        "disableRestoreFocus",
        "disableScrollLock",
        "hideBackdrop",
        "keepMounted",
        "manager",
        "onBackdropClick",
        "onClose",
        "onKeyDown",
        "open",
        "onTransitionEnter",
        "onTransitionExited",
        "slotProps",
        "slots",
    ],
    _P = (e) => {
        const { open: t, exited: n, classes: r } = e;
        return ve(
            { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
            OP,
            r
        );
    };
function MP(e) {
    return typeof e == "function" ? e() : e;
}
function NP(e) {
    return e ? e.props.hasOwnProperty("in") : !1;
}
const AP = new TP(),
    LP = b.forwardRef(function (t, n) {
        var r, o;
        const {
                children: i,
                classes: s,
                closeAfterTransition: a = !1,
                component: l,
                container: u,
                disableAutoFocus: d = !1,
                disableEnforceFocus: f = !1,
                disableEscapeKeyDown: c = !1,
                disablePortal: h = !1,
                disableRestoreFocus: g = !1,
                disableScrollLock: p = !1,
                hideBackdrop: S = !1,
                keepMounted: v = !1,
                manager: m = AP,
                onBackdropClick: y,
                onClose: x,
                onKeyDown: C,
                open: k,
                onTransitionEnter: E,
                onTransitionExited: T,
                slotProps: O = {},
                slots: P = {},
            } = t,
            z = Q(t, IP),
            [G, U] = b.useState(!k),
            A = b.useRef({}),
            F = b.useRef(null),
            j = b.useRef(null),
            ee = rt(j, n),
            $ = NP(i),
            M = (r = t["aria-hidden"]) != null ? r : !0,
            L = () => Bt(F.current),
            W = () => (
                (A.current.modalRef = j.current),
                (A.current.mountNode = F.current),
                A.current
            ),
            te = () => {
                m.mount(W(), { disableScrollLock: p }),
                    j.current && (j.current.scrollTop = 0);
            },
            Me = $o(() => {
                const I = MP(u) || L().body;
                m.add(W(), I), j.current && te();
            }),
            ie = b.useCallback(() => m.isTopModal(W()), [m]),
            ge = $o((I) => {
                (F.current = I),
                    !(!I || !j.current) &&
                        (k && ie() ? te() : Yi(j.current, M));
            }),
            K = b.useCallback(() => {
                m.remove(W(), M);
            }, [m, M]);
        b.useEffect(
            () => () => {
                K();
            },
            [K]
        ),
            b.useEffect(() => {
                k ? Me() : (!$ || !a) && K();
            }, [k, K, $, a, Me]);
        const ce = w({}, t, {
                classes: s,
                closeAfterTransition: a,
                disableAutoFocus: d,
                disableEnforceFocus: f,
                disableEscapeKeyDown: c,
                disablePortal: h,
                disableRestoreFocus: g,
                disableScrollLock: p,
                exited: G,
                hideBackdrop: S,
                keepMounted: v,
            }),
            Te = _P(ce),
            be = () => {
                U(!1), E && E();
            },
            Ae = () => {
                U(!0), T && T(), a && K();
            },
            ae = (I) => {
                I.target === I.currentTarget &&
                    (y && y(I), x && x(I, "backdropClick"));
            },
            Ye = (I) => {
                C && C(I),
                    !(I.key !== "Escape" || !ie()) &&
                        (c ||
                            (I.stopPropagation(), x && x(I, "escapeKeyDown")));
            },
            ut = {};
        i.props.tabIndex === void 0 && (ut.tabIndex = "-1"),
            $ &&
                ((ut.onEnter = xm(be, i.props.onEnter)),
                (ut.onExited = xm(Ae, i.props.onExited)));
        const Rt = (o = l ?? P.root) != null ? o : "div",
            Nt = Km({
                elementType: Rt,
                externalSlotProps: O.root,
                externalForwardedProps: z,
                additionalProps: {
                    ref: ee,
                    role: "presentation",
                    onKeyDown: Ye,
                },
                className: Te.root,
                ownerState: ce,
            }),
            on = P.backdrop,
            At = Km({
                elementType: on,
                externalSlotProps: O.backdrop,
                additionalProps: { "aria-hidden": !0, onClick: ae, open: k },
                className: Te.backdrop,
                ownerState: ce,
            });
        return !v && !k && (!$ || G)
            ? null
            : R(EP, {
                  ref: ge,
                  container: u,
                  disablePortal: h,
                  children: le(
                      Rt,
                      w({}, Nt, {
                          children: [
                              !S && on ? R(on, w({}, At)) : null,
                              R(wP, {
                                  disableEnforceFocus: f,
                                  disableAutoFocus: d,
                                  disableRestoreFocus: g,
                                  isEnabled: ie,
                                  open: k,
                                  children: b.cloneElement(i, ut),
                              }),
                          ],
                      })
                  ),
              });
    }),
    DP = LP,
    zP = ["onChange", "maxRows", "minRows", "style", "value"];
function oa(e, t) {
    return parseInt(e[t], 10) || 0;
}
const FP = {
    shadow: {
        visibility: "hidden",
        position: "absolute",
        overflow: "hidden",
        height: 0,
        top: 0,
        left: 0,
        transform: "translateZ(0)",
    },
};
function Ym(e) {
    return e == null || Object.keys(e).length === 0;
}
const BP = b.forwardRef(function (t, n) {
        const {
                onChange: r,
                maxRows: o,
                minRows: i = 1,
                style: s,
                value: a,
            } = t,
            l = Q(t, zP),
            { current: u } = b.useRef(a != null),
            d = b.useRef(null),
            f = rt(n, d),
            c = b.useRef(null),
            h = b.useRef(0),
            [g, p] = b.useState({}),
            S = b.useCallback(() => {
                const C = d.current,
                    E = Hn(C).getComputedStyle(C);
                if (E.width === "0px") return {};
                const T = c.current;
                (T.style.width = E.width),
                    (T.value = C.value || t.placeholder || "x"),
                    T.value.slice(-1) ===
                        `
` && (T.value += " ");
                const O = E["box-sizing"],
                    P = oa(E, "padding-bottom") + oa(E, "padding-top"),
                    z =
                        oa(E, "border-bottom-width") +
                        oa(E, "border-top-width"),
                    G = T.scrollHeight;
                T.value = "x";
                const U = T.scrollHeight;
                let A = G;
                i && (A = Math.max(Number(i) * U, A)),
                    o && (A = Math.min(Number(o) * U, A)),
                    (A = Math.max(A, U));
                const F = A + (O === "border-box" ? P + z : 0),
                    j = Math.abs(A - G) <= 1;
                return { outerHeightStyle: F, overflow: j };
            }, [o, i, t.placeholder]),
            v = (C, k) => {
                const { outerHeightStyle: E, overflow: T } = k;
                return h.current < 20 &&
                    ((E > 0 && Math.abs((C.outerHeightStyle || 0) - E) > 1) ||
                        C.overflow !== T)
                    ? ((h.current += 1), { overflow: T, outerHeightStyle: E })
                    : C;
            },
            m = b.useCallback(() => {
                const C = S();
                Ym(C) || p((k) => v(k, C));
            }, [S]),
            y = () => {
                const C = S();
                Ym(C) ||
                    Gr.flushSync(() => {
                        p((k) => v(k, C));
                    });
            };
        b.useEffect(() => {
            const C = Jf(() => {
                    (h.current = 0), d.current && y();
                }),
                k = Hn(d.current);
            k.addEventListener("resize", C);
            let E;
            return (
                typeof ResizeObserver < "u" &&
                    ((E = new ResizeObserver(C)), E.observe(d.current)),
                () => {
                    C.clear(),
                        k.removeEventListener("resize", C),
                        E && E.disconnect();
                }
            );
        }),
            xr(() => {
                m();
            }),
            b.useEffect(() => {
                h.current = 0;
            }, [a]);
        const x = (C) => {
            (h.current = 0), u || m(), r && r(C);
        };
        return le(b.Fragment, {
            children: [
                R(
                    "textarea",
                    w(
                        {
                            value: a,
                            onChange: x,
                            ref: f,
                            rows: i,
                            style: w(
                                {
                                    height: g.outerHeightStyle,
                                    overflow: g.overflow ? "hidden" : null,
                                },
                                s
                            ),
                        },
                        l
                    )
                ),
                R("textarea", {
                    "aria-hidden": !0,
                    className: t.className,
                    readOnly: !0,
                    ref: c,
                    tabIndex: -1,
                    style: w({}, FP.shadow, s, { padding: 0 }),
                }),
            ],
        });
    }),
    jP = BP;
function UP(e) {
    return me("MuiSvgIcon", e);
}
ye("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
]);
const WP = [
        "children",
        "className",
        "color",
        "component",
        "fontSize",
        "htmlColor",
        "inheritViewBox",
        "titleAccess",
        "viewBox",
    ],
    VP = (e) => {
        const { color: t, fontSize: n, classes: r } = e,
            o = {
                root: [
                    "root",
                    t !== "inherit" && `color${V(t)}`,
                    `fontSize${V(n)}`,
                ],
            };
        return ve(o, UP, r);
    },
    HP = X("svg", {
        name: "MuiSvgIcon",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.color !== "inherit" && t[`color${V(n.color)}`],
                t[`fontSize${V(n.fontSize)}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n, r, o, i, s, a, l, u, d, f, c, h, g, p, S, v, m;
        return {
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            fill: "currentColor",
            flexShrink: 0,
            transition:
                (n = e.transitions) == null || (r = n.create) == null
                    ? void 0
                    : r.call(n, "fill", {
                          duration:
                              (o = e.transitions) == null ||
                              (i = o.duration) == null
                                  ? void 0
                                  : i.shorter,
                      }),
            fontSize: {
                inherit: "inherit",
                small:
                    ((s = e.typography) == null || (a = s.pxToRem) == null
                        ? void 0
                        : a.call(s, 20)) || "1.25rem",
                medium:
                    ((l = e.typography) == null || (u = l.pxToRem) == null
                        ? void 0
                        : u.call(l, 24)) || "1.5rem",
                large:
                    ((d = e.typography) == null || (f = d.pxToRem) == null
                        ? void 0
                        : f.call(d, 35)) || "2.1875rem",
            }[t.fontSize],
            color:
                (c =
                    (h = (e.vars || e).palette) == null ||
                    (g = h[t.color]) == null
                        ? void 0
                        : g.main) != null
                    ? c
                    : {
                          action:
                              (p = (e.vars || e).palette) == null ||
                              (S = p.action) == null
                                  ? void 0
                                  : S.active,
                          disabled:
                              (v = (e.vars || e).palette) == null ||
                              (m = v.action) == null
                                  ? void 0
                                  : m.disabled,
                          inherit: void 0,
                      }[t.color],
        };
    }),
    J0 = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiSvgIcon" }),
            {
                children: o,
                className: i,
                color: s = "inherit",
                component: a = "svg",
                fontSize: l = "medium",
                htmlColor: u,
                inheritViewBox: d = !1,
                titleAccess: f,
                viewBox: c = "0 0 24 24",
            } = r,
            h = Q(r, WP),
            g = w({}, r, {
                color: s,
                component: a,
                fontSize: l,
                instanceFontSize: t.fontSize,
                inheritViewBox: d,
                viewBox: c,
            }),
            p = {};
        d || (p.viewBox = c);
        const S = VP(g);
        return le(
            HP,
            w(
                {
                    as: a,
                    className: Z(S.root, i),
                    focusable: "false",
                    color: u,
                    "aria-hidden": f ? void 0 : !0,
                    role: f ? "img" : void 0,
                    ref: n,
                },
                p,
                h,
                {
                    ownerState: g,
                    children: [o, f ? R("title", { children: f }) : null],
                }
            )
        );
    });
J0.muiName = "SvgIcon";
const Xm = J0;
function kr(e, t) {
    function n(r, o) {
        return R(
            Xm,
            w({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
        );
    }
    return (n.muiName = Xm.muiName), b.memo(b.forwardRef(n));
}
function Pd(e, t) {
    return (
        (Pd = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (r, o) {
                  return (r.__proto__ = o), r;
              }),
        Pd(e, t)
    );
}
function Z0(e, t) {
    (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Pd(e, t);
}
const Qm = { disabled: !1 },
    dl = Jt.createContext(null);
var KP = function (t) {
        return t.scrollTop;
    },
    Ai = "unmounted",
    Mr = "exited",
    Nr = "entering",
    fo = "entered",
    $d = "exiting",
    qn = (function (e) {
        Z0(t, e);
        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = o,
                a = s && !s.isMounting ? r.enter : r.appear,
                l;
            return (
                (i.appearStatus = null),
                r.in
                    ? a
                        ? ((l = Mr), (i.appearStatus = Nr))
                        : (l = fo)
                    : r.unmountOnExit || r.mountOnEnter
                    ? (l = Ai)
                    : (l = Mr),
                (i.state = { status: l }),
                (i.nextCallback = null),
                i
            );
        }
        t.getDerivedStateFromProps = function (o, i) {
            var s = o.in;
            return s && i.status === Ai ? { status: Mr } : null;
        };
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (o) {
                var i = null;
                if (o !== this.props) {
                    var s = this.state.status;
                    this.props.in
                        ? s !== Nr && s !== fo && (i = Nr)
                        : (s === Nr || s === fo) && (i = $d);
                }
                this.updateStatus(!1, i);
            }),
            (n.componentWillUnmount = function () {
                this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
                var o = this.props.timeout,
                    i,
                    s,
                    a;
                return (
                    (i = s = a = o),
                    o != null &&
                        typeof o != "number" &&
                        ((i = o.exit),
                        (s = o.enter),
                        (a = o.appear !== void 0 ? o.appear : s)),
                    { exit: i, enter: s, appear: a }
                );
            }),
            (n.updateStatus = function (o, i) {
                if ((o === void 0 && (o = !1), i !== null))
                    if ((this.cancelNextCallback(), i === Nr)) {
                        if (
                            this.props.unmountOnExit ||
                            this.props.mountOnEnter
                        ) {
                            var s = this.props.nodeRef
                                ? this.props.nodeRef.current
                                : na.findDOMNode(this);
                            s && KP(s);
                        }
                        this.performEnter(o);
                    } else this.performExit();
                else
                    this.props.unmountOnExit &&
                        this.state.status === Mr &&
                        this.setState({ status: Ai });
            }),
            (n.performEnter = function (o) {
                var i = this,
                    s = this.props.enter,
                    a = this.context ? this.context.isMounting : o,
                    l = this.props.nodeRef ? [a] : [na.findDOMNode(this), a],
                    u = l[0],
                    d = l[1],
                    f = this.getTimeouts(),
                    c = a ? f.appear : f.enter;
                if ((!o && !s) || Qm.disabled) {
                    this.safeSetState({ status: fo }, function () {
                        i.props.onEntered(u);
                    });
                    return;
                }
                this.props.onEnter(u, d),
                    this.safeSetState({ status: Nr }, function () {
                        i.props.onEntering(u, d),
                            i.onTransitionEnd(c, function () {
                                i.safeSetState({ status: fo }, function () {
                                    i.props.onEntered(u, d);
                                });
                            });
                    });
            }),
            (n.performExit = function () {
                var o = this,
                    i = this.props.exit,
                    s = this.getTimeouts(),
                    a = this.props.nodeRef ? void 0 : na.findDOMNode(this);
                if (!i || Qm.disabled) {
                    this.safeSetState({ status: Mr }, function () {
                        o.props.onExited(a);
                    });
                    return;
                }
                this.props.onExit(a),
                    this.safeSetState({ status: $d }, function () {
                        o.props.onExiting(a),
                            o.onTransitionEnd(s.exit, function () {
                                o.safeSetState({ status: Mr }, function () {
                                    o.props.onExited(a);
                                });
                            });
                    });
            }),
            (n.cancelNextCallback = function () {
                this.nextCallback !== null &&
                    (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (o, i) {
                (i = this.setNextCallback(i)), this.setState(o, i);
            }),
            (n.setNextCallback = function (o) {
                var i = this,
                    s = !0;
                return (
                    (this.nextCallback = function (a) {
                        s && ((s = !1), (i.nextCallback = null), o(a));
                    }),
                    (this.nextCallback.cancel = function () {
                        s = !1;
                    }),
                    this.nextCallback
                );
            }),
            (n.onTransitionEnd = function (o, i) {
                this.setNextCallback(i);
                var s = this.props.nodeRef
                        ? this.props.nodeRef.current
                        : na.findDOMNode(this),
                    a = o == null && !this.props.addEndListener;
                if (!s || a) {
                    setTimeout(this.nextCallback, 0);
                    return;
                }
                if (this.props.addEndListener) {
                    var l = this.props.nodeRef
                            ? [this.nextCallback]
                            : [s, this.nextCallback],
                        u = l[0],
                        d = l[1];
                    this.props.addEndListener(u, d);
                }
                o != null && setTimeout(this.nextCallback, o);
            }),
            (n.render = function () {
                var o = this.state.status;
                if (o === Ai) return null;
                var i = this.props,
                    s = i.children;
                i.in,
                    i.mountOnEnter,
                    i.unmountOnExit,
                    i.appear,
                    i.enter,
                    i.exit,
                    i.timeout,
                    i.addEndListener,
                    i.onEnter,
                    i.onEntering,
                    i.onEntered,
                    i.onExit,
                    i.onExiting,
                    i.onExited,
                    i.nodeRef;
                var a = Q(i, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                ]);
                return Jt.createElement(
                    dl.Provider,
                    { value: null },
                    typeof s == "function"
                        ? s(o, a)
                        : Jt.cloneElement(Jt.Children.only(s), a)
                );
            }),
            t
        );
    })(Jt.Component);
qn.contextType = dl;
qn.propTypes = {};
function co() {}
qn.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: co,
    onEntering: co,
    onEntered: co,
    onExit: co,
    onExiting: co,
    onExited: co,
};
qn.UNMOUNTED = Ai;
qn.EXITED = Mr;
qn.ENTERING = Nr;
qn.ENTERED = fo;
qn.EXITING = $d;
const gu = qn;
function GP(e) {
    if (e === void 0)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function hp(e, t) {
    var n = function (i) {
            return t && b.isValidElement(i) ? t(i) : i;
        },
        r = Object.create(null);
    return (
        e &&
            b.Children.map(e, function (o) {
                return o;
            }).forEach(function (o) {
                r[o.key] = n(o);
            }),
        r
    );
}
function qP(e, t) {
    (e = e || {}), (t = t || {});
    function n(d) {
        return d in t ? t[d] : e[d];
    }
    var r = Object.create(null),
        o = [];
    for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
    var s,
        a = {};
    for (var l in t) {
        if (r[l])
            for (s = 0; s < r[l].length; s++) {
                var u = r[l][s];
                a[r[l][s]] = n(u);
            }
        a[l] = n(l);
    }
    for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
    return a;
}
function Wr(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
}
function YP(e, t) {
    return hp(e.children, function (n) {
        return b.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Wr(n, "appear", e),
            enter: Wr(n, "enter", e),
            exit: Wr(n, "exit", e),
        });
    });
}
function XP(e, t, n) {
    var r = hp(e.children),
        o = qP(t, r);
    return (
        Object.keys(o).forEach(function (i) {
            var s = o[i];
            if (b.isValidElement(s)) {
                var a = i in t,
                    l = i in r,
                    u = t[i],
                    d = b.isValidElement(u) && !u.props.in;
                l && (!a || d)
                    ? (o[i] = b.cloneElement(s, {
                          onExited: n.bind(null, s),
                          in: !0,
                          exit: Wr(s, "exit", e),
                          enter: Wr(s, "enter", e),
                      }))
                    : !l && a && !d
                    ? (o[i] = b.cloneElement(s, { in: !1 }))
                    : l &&
                      a &&
                      b.isValidElement(u) &&
                      (o[i] = b.cloneElement(s, {
                          onExited: n.bind(null, s),
                          in: u.props.in,
                          exit: Wr(s, "exit", e),
                          enter: Wr(s, "enter", e),
                      }));
            }
        }),
        o
    );
}
var QP =
        Object.values ||
        function (e) {
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        },
    JP = {
        component: "div",
        childFactory: function (t) {
            return t;
        },
    },
    mp = (function (e) {
        Z0(t, e);
        function t(r, o) {
            var i;
            i = e.call(this, r, o) || this;
            var s = i.handleExited.bind(GP(i));
            return (
                (i.state = {
                    contextValue: { isMounting: !0 },
                    handleExited: s,
                    firstRender: !0,
                }),
                i
            );
        }
        var n = t.prototype;
        return (
            (n.componentDidMount = function () {
                (this.mounted = !0),
                    this.setState({ contextValue: { isMounting: !1 } });
            }),
            (n.componentWillUnmount = function () {
                this.mounted = !1;
            }),
            (t.getDerivedStateFromProps = function (o, i) {
                var s = i.children,
                    a = i.handleExited,
                    l = i.firstRender;
                return {
                    children: l ? YP(o, a) : XP(o, s, a),
                    firstRender: !1,
                };
            }),
            (n.handleExited = function (o, i) {
                var s = hp(this.props.children);
                o.key in s ||
                    (o.props.onExited && o.props.onExited(i),
                    this.mounted &&
                        this.setState(function (a) {
                            var l = w({}, a.children);
                            return delete l[o.key], { children: l };
                        }));
            }),
            (n.render = function () {
                var o = this.props,
                    i = o.component,
                    s = o.childFactory,
                    a = Q(o, ["component", "childFactory"]),
                    l = this.state.contextValue,
                    u = QP(this.state.children).map(s);
                return (
                    delete a.appear,
                    delete a.enter,
                    delete a.exit,
                    i === null
                        ? Jt.createElement(dl.Provider, { value: l }, u)
                        : Jt.createElement(
                              dl.Provider,
                              { value: l },
                              Jt.createElement(i, a, u)
                          )
                );
            }),
            t
        );
    })(Jt.Component);
mp.propTypes = {};
mp.defaultProps = JP;
const ZP = mp,
    gp = (e) => e.scrollTop;
function wr(e, t) {
    var n, r;
    const { timeout: o, easing: i, style: s = {} } = e;
    return {
        duration:
            (n = s.transitionDuration) != null
                ? n
                : typeof o == "number"
                ? o
                : o[t.mode] || 0,
        easing:
            (r = s.transitionTimingFunction) != null
                ? r
                : typeof i == "object"
                ? i[t.mode]
                : i,
        delay: s.transitionDelay,
    };
}
function e$(e) {
    return me("MuiCollapse", e);
}
ye("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner",
]);
const t$ = [
        "addEndListener",
        "children",
        "className",
        "collapsedSize",
        "component",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "orientation",
        "style",
        "timeout",
        "TransitionComponent",
    ],
    n$ = (e) => {
        const { orientation: t, classes: n } = e,
            r = {
                root: ["root", `${t}`],
                entered: ["entered"],
                hidden: ["hidden"],
                wrapper: ["wrapper", `${t}`],
                wrapperInner: ["wrapperInner", `${t}`],
            };
        return ve(r, e$, n);
    },
    r$ = X("div", {
        name: "MuiCollapse",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.orientation],
                n.state === "entered" && t.entered,
                n.state === "exited" &&
                    !n.in &&
                    n.collapsedSize === "0px" &&
                    t.hidden,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                height: 0,
                overflow: "hidden",
                transition: e.transitions.create("height"),
            },
            t.orientation === "horizontal" && {
                height: "auto",
                width: 0,
                transition: e.transitions.create("width"),
            },
            t.state === "entered" &&
                w(
                    { height: "auto", overflow: "visible" },
                    t.orientation === "horizontal" && { width: "auto" }
                ),
            t.state === "exited" &&
                !t.in &&
                t.collapsedSize === "0px" && { visibility: "hidden" }
        )
    ),
    o$ = X("div", {
        name: "MuiCollapse",
        slot: "Wrapper",
        overridesResolver: (e, t) => t.wrapper,
    })(({ ownerState: e }) =>
        w(
            { display: "flex", width: "100%" },
            e.orientation === "horizontal" && { width: "auto", height: "100%" }
        )
    ),
    i$ = X("div", {
        name: "MuiCollapse",
        slot: "WrapperInner",
        overridesResolver: (e, t) => t.wrapperInner,
    })(({ ownerState: e }) =>
        w(
            { width: "100%" },
            e.orientation === "horizontal" && { width: "auto", height: "100%" }
        )
    ),
    e1 = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiCollapse" }),
            {
                addEndListener: o,
                children: i,
                className: s,
                collapsedSize: a = "0px",
                component: l,
                easing: u,
                in: d,
                onEnter: f,
                onEntered: c,
                onEntering: h,
                onExit: g,
                onExited: p,
                onExiting: S,
                orientation: v = "vertical",
                style: m,
                timeout: y = Q0.standard,
                TransitionComponent: x = gu,
            } = r,
            C = Q(r, t$),
            k = w({}, r, { orientation: v, collapsedSize: a }),
            E = n$(k),
            T = li(),
            O = b.useRef(),
            P = b.useRef(null),
            z = b.useRef(),
            G = typeof a == "number" ? `${a}px` : a,
            U = v === "horizontal",
            A = U ? "width" : "height";
        b.useEffect(
            () => () => {
                clearTimeout(O.current);
            },
            []
        );
        const F = b.useRef(null),
            j = rt(n, F),
            ee = (K) => (ce) => {
                if (K) {
                    const Te = F.current;
                    ce === void 0 ? K(Te) : K(Te, ce);
                }
            },
            $ = () =>
                P.current ? P.current[U ? "clientWidth" : "clientHeight"] : 0,
            M = ee((K, ce) => {
                P.current && U && (P.current.style.position = "absolute"),
                    (K.style[A] = G),
                    f && f(K, ce);
            }),
            L = ee((K, ce) => {
                const Te = $();
                P.current && U && (P.current.style.position = "");
                const { duration: be, easing: Ae } = wr(
                    { style: m, timeout: y, easing: u },
                    { mode: "enter" }
                );
                if (y === "auto") {
                    const ae = T.transitions.getAutoHeightDuration(Te);
                    (K.style.transitionDuration = `${ae}ms`), (z.current = ae);
                } else
                    K.style.transitionDuration =
                        typeof be == "string" ? be : `${be}ms`;
                (K.style[A] = `${Te}px`),
                    (K.style.transitionTimingFunction = Ae),
                    h && h(K, ce);
            }),
            W = ee((K, ce) => {
                (K.style[A] = "auto"), c && c(K, ce);
            }),
            te = ee((K) => {
                (K.style[A] = `${$()}px`), g && g(K);
            }),
            Me = ee(p),
            ie = ee((K) => {
                const ce = $(),
                    { duration: Te, easing: be } = wr(
                        { style: m, timeout: y, easing: u },
                        { mode: "exit" }
                    );
                if (y === "auto") {
                    const Ae = T.transitions.getAutoHeightDuration(ce);
                    (K.style.transitionDuration = `${Ae}ms`), (z.current = Ae);
                } else
                    K.style.transitionDuration =
                        typeof Te == "string" ? Te : `${Te}ms`;
                (K.style[A] = G),
                    (K.style.transitionTimingFunction = be),
                    S && S(K);
            });
        return R(
            x,
            w(
                {
                    in: d,
                    onEnter: M,
                    onEntered: W,
                    onEntering: L,
                    onExit: te,
                    onExited: Me,
                    onExiting: ie,
                    addEndListener: (K) => {
                        y === "auto" &&
                            (O.current = setTimeout(K, z.current || 0)),
                            o && o(F.current, K);
                    },
                    nodeRef: F,
                    timeout: y === "auto" ? null : y,
                },
                C,
                {
                    children: (K, ce) =>
                        R(
                            r$,
                            w(
                                {
                                    as: l,
                                    className: Z(
                                        E.root,
                                        s,
                                        {
                                            entered: E.entered,
                                            exited:
                                                !d && G === "0px" && E.hidden,
                                        }[K]
                                    ),
                                    style: w(
                                        { [U ? "minWidth" : "minHeight"]: G },
                                        m
                                    ),
                                    ownerState: w({}, k, { state: K }),
                                    ref: j,
                                },
                                ce,
                                {
                                    children: R(o$, {
                                        ownerState: w({}, k, { state: K }),
                                        className: E.wrapper,
                                        ref: P,
                                        children: R(i$, {
                                            ownerState: w({}, k, { state: K }),
                                            className: E.wrapperInner,
                                            children: i,
                                        }),
                                    }),
                                }
                            )
                        ),
                }
            )
        );
    });
e1.muiSupportAuto = !0;
const s$ = e1;
function a$(e) {
    return me("MuiPaper", e);
}
ye("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
]);
const l$ = ["className", "component", "elevation", "square", "variant"],
    u$ = (e) => {
        const { square: t, elevation: n, variant: r, classes: o } = e,
            i = {
                root: [
                    "root",
                    r,
                    !t && "rounded",
                    r === "elevation" && `elevation${n}`,
                ],
            };
        return ve(i, a$, o);
    },
    c$ = X("div", {
        name: "MuiPaper",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.variant],
                !n.square && t.rounded,
                n.variant === "elevation" && t[`elevation${n.elevation}`],
            ];
        },
    })(({ theme: e, ownerState: t }) => {
        var n;
        return w(
            {
                backgroundColor: (e.vars || e).palette.background.paper,
                color: (e.vars || e).palette.text.primary,
                transition: e.transitions.create("box-shadow"),
            },
            !t.square && { borderRadius: e.shape.borderRadius },
            t.variant === "outlined" && {
                border: `1px solid ${(e.vars || e).palette.divider}`,
            },
            t.variant === "elevation" &&
                w(
                    { boxShadow: (e.vars || e).shadows[t.elevation] },
                    !e.vars &&
                        e.palette.mode === "dark" && {
                            backgroundImage: `linear-gradient(${_e(
                                "#fff",
                                Vm(t.elevation)
                            )}, ${_e("#fff", Vm(t.elevation))})`,
                        },
                    e.vars && {
                        backgroundImage:
                            (n = e.vars.overlays) == null
                                ? void 0
                                : n[t.elevation],
                    }
                )
        );
    }),
    d$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiPaper" }),
            {
                className: o,
                component: i = "div",
                elevation: s = 1,
                square: a = !1,
                variant: l = "elevation",
            } = r,
            u = Q(r, l$),
            d = w({}, r, { component: i, elevation: s, square: a, variant: l }),
            f = u$(d);
        return R(
            c$,
            w({ as: i, ownerState: d, className: Z(f.root, o), ref: n }, u)
        );
    }),
    zs = d$,
    f$ = b.createContext({}),
    t1 = f$;
function p$(e) {
    return me("MuiAccordion", e);
}
const h$ = ye("MuiAccordion", [
        "root",
        "rounded",
        "expanded",
        "disabled",
        "gutters",
        "region",
    ]),
    ia = h$,
    m$ = [
        "children",
        "className",
        "defaultExpanded",
        "disabled",
        "disableGutters",
        "expanded",
        "onChange",
        "square",
        "TransitionComponent",
        "TransitionProps",
    ],
    g$ = (e) => {
        const {
            classes: t,
            square: n,
            expanded: r,
            disabled: o,
            disableGutters: i,
        } = e;
        return ve(
            {
                root: [
                    "root",
                    !n && "rounded",
                    r && "expanded",
                    o && "disabled",
                    !i && "gutters",
                ],
                region: ["region"],
            },
            p$,
            t
        );
    },
    v$ = X(zs, {
        name: "MuiAccordion",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`& .${ia.region}`]: t.region },
                t.root,
                !n.square && t.rounded,
                !n.disableGutters && t.gutters,
            ];
        },
    })(
        ({ theme: e }) => {
            const t = { duration: e.transitions.duration.shortest };
            return {
                position: "relative",
                transition: e.transitions.create(["margin"], t),
                overflowAnchor: "none",
                "&:before": {
                    position: "absolute",
                    left: 0,
                    top: -1,
                    right: 0,
                    height: 1,
                    content: '""',
                    opacity: 1,
                    backgroundColor: (e.vars || e).palette.divider,
                    transition: e.transitions.create(
                        ["opacity", "background-color"],
                        t
                    ),
                },
                "&:first-of-type": { "&:before": { display: "none" } },
                [`&.${ia.expanded}`]: {
                    "&:before": { opacity: 0 },
                    "&:first-of-type": { marginTop: 0 },
                    "&:last-of-type": { marginBottom: 0 },
                    "& + &": { "&:before": { display: "none" } },
                },
                [`&.${ia.disabled}`]: {
                    backgroundColor: (e.vars || e).palette.action
                        .disabledBackground,
                },
            };
        },
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                !t.square && {
                    borderRadius: 0,
                    "&:first-of-type": {
                        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                        borderTopRightRadius: (e.vars || e).shape.borderRadius,
                    },
                    "&:last-of-type": {
                        borderBottomLeftRadius: (e.vars || e).shape
                            .borderRadius,
                        borderBottomRightRadius: (e.vars || e).shape
                            .borderRadius,
                        "@supports (-ms-ime-align: auto)": {
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        },
                    },
                },
                !t.disableGutters && {
                    [`&.${ia.expanded}`]: { margin: "16px 0" },
                }
            )
    ),
    y$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiAccordion" }),
            {
                children: o,
                className: i,
                defaultExpanded: s = !1,
                disabled: a = !1,
                disableGutters: l = !1,
                expanded: u,
                onChange: d,
                square: f = !1,
                TransitionComponent: c = s$,
                TransitionProps: h,
            } = r,
            g = Q(r, m$),
            [p, S] = wd({
                controlled: u,
                default: s,
                name: "Accordion",
                state: "expanded",
            }),
            v = b.useCallback(
                (E) => {
                    S(!p), d && d(E, !p);
                },
                [p, d, S]
            ),
            [m, ...y] = b.Children.toArray(o),
            x = b.useMemo(
                () => ({
                    expanded: p,
                    disabled: a,
                    disableGutters: l,
                    toggle: v,
                }),
                [p, a, l, v]
            ),
            C = w({}, r, {
                square: f,
                disabled: a,
                disableGutters: l,
                expanded: p,
            }),
            k = g$(C);
        return le(
            v$,
            w(
                { className: Z(k.root, i), ref: n, ownerState: C, square: f },
                g,
                {
                    children: [
                        R(t1.Provider, { value: x, children: m }),
                        R(
                            c,
                            w({ in: p, timeout: "auto" }, h, {
                                children: R("div", {
                                    "aria-labelledby": m.props.id,
                                    id: m.props["aria-controls"],
                                    role: "region",
                                    className: k.region,
                                    children: y,
                                }),
                            })
                        ),
                    ],
                }
            )
        );
    }),
    b$ = y$;
function x$(e) {
    return me("MuiAccordionDetails", e);
}
ye("MuiAccordionDetails", ["root"]);
const w$ = ["className"],
    S$ = (e) => {
        const { classes: t } = e;
        return ve({ root: ["root"] }, x$, t);
    },
    C$ = X("div", {
        name: "MuiAccordionDetails",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })(({ theme: e }) => ({ padding: e.spacing(1, 2, 2) })),
    E$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiAccordionDetails" }),
            { className: o } = r,
            i = Q(r, w$),
            s = r,
            a = S$(s);
        return R(C$, w({ className: Z(a.root, o), ref: n, ownerState: s }, i));
    }),
    k$ = E$;
function R$(e) {
    const {
            className: t,
            classes: n,
            pulsate: r = !1,
            rippleX: o,
            rippleY: i,
            rippleSize: s,
            in: a,
            onExited: l,
            timeout: u,
        } = e,
        [d, f] = b.useState(!1),
        c = Z(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
        h = { width: s, height: s, top: -(s / 2) + i, left: -(s / 2) + o },
        g = Z(n.child, d && n.childLeaving, r && n.childPulsate);
    return (
        !a && !d && f(!0),
        b.useEffect(() => {
            if (!a && l != null) {
                const p = setTimeout(l, u);
                return () => {
                    clearTimeout(p);
                };
            }
        }, [l, a, u]),
        R("span", {
            className: c,
            style: h,
            children: R("span", { className: g }),
        })
    );
}
const P$ = ye("MuiTouchRipple", [
        "root",
        "ripple",
        "rippleVisible",
        "ripplePulsate",
        "child",
        "childLeaving",
        "childPulsate",
    ]),
    qt = P$,
    $$ = ["center", "classes", "className"];
let vu = (e) => e,
    Jm,
    Zm,
    eg,
    tg;
const Td = 550,
    T$ = 80,
    O$ = ip(
        Jm ||
            (Jm = vu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
    ),
    I$ = ip(
        Zm ||
            (Zm = vu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
    ),
    _$ = ip(
        eg ||
            (eg = vu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
    ),
    M$ = X("span", { name: "MuiTouchRipple", slot: "Root" })({
        overflow: "hidden",
        pointerEvents: "none",
        position: "absolute",
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: "inherit",
    }),
    N$ = X(R$, { name: "MuiTouchRipple", slot: "Ripple" })(
        tg ||
            (tg = vu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
        qt.rippleVisible,
        O$,
        Td,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        qt.ripplePulsate,
        ({ theme: e }) => e.transitions.duration.shorter,
        qt.child,
        qt.childLeaving,
        I$,
        Td,
        ({ theme: e }) => e.transitions.easing.easeInOut,
        qt.childPulsate,
        _$,
        ({ theme: e }) => e.transitions.easing.easeInOut
    ),
    A$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiTouchRipple" }),
            { center: o = !1, classes: i = {}, className: s } = r,
            a = Q(r, $$),
            [l, u] = b.useState([]),
            d = b.useRef(0),
            f = b.useRef(null);
        b.useEffect(() => {
            f.current && (f.current(), (f.current = null));
        }, [l]);
        const c = b.useRef(!1),
            h = b.useRef(null),
            g = b.useRef(null),
            p = b.useRef(null);
        b.useEffect(
            () => () => {
                clearTimeout(h.current);
            },
            []
        );
        const S = b.useCallback(
                (x) => {
                    const {
                        pulsate: C,
                        rippleX: k,
                        rippleY: E,
                        rippleSize: T,
                        cb: O,
                    } = x;
                    u((P) => [
                        ...P,
                        R(
                            N$,
                            {
                                classes: {
                                    ripple: Z(i.ripple, qt.ripple),
                                    rippleVisible: Z(
                                        i.rippleVisible,
                                        qt.rippleVisible
                                    ),
                                    ripplePulsate: Z(
                                        i.ripplePulsate,
                                        qt.ripplePulsate
                                    ),
                                    child: Z(i.child, qt.child),
                                    childLeaving: Z(
                                        i.childLeaving,
                                        qt.childLeaving
                                    ),
                                    childPulsate: Z(
                                        i.childPulsate,
                                        qt.childPulsate
                                    ),
                                },
                                timeout: Td,
                                pulsate: C,
                                rippleX: k,
                                rippleY: E,
                                rippleSize: T,
                            },
                            d.current
                        ),
                    ]),
                        (d.current += 1),
                        (f.current = O);
                },
                [i]
            ),
            v = b.useCallback(
                (x = {}, C = {}, k = () => {}) => {
                    const {
                        pulsate: E = !1,
                        center: T = o || C.pulsate,
                        fakeElement: O = !1,
                    } = C;
                    if (
                        (x == null ? void 0 : x.type) === "mousedown" &&
                        c.current
                    ) {
                        c.current = !1;
                        return;
                    }
                    (x == null ? void 0 : x.type) === "touchstart" &&
                        (c.current = !0);
                    const P = O ? null : p.current,
                        z = P
                            ? P.getBoundingClientRect()
                            : { width: 0, height: 0, left: 0, top: 0 };
                    let G, U, A;
                    if (
                        T ||
                        x === void 0 ||
                        (x.clientX === 0 && x.clientY === 0) ||
                        (!x.clientX && !x.touches)
                    )
                        (G = Math.round(z.width / 2)),
                            (U = Math.round(z.height / 2));
                    else {
                        const { clientX: F, clientY: j } =
                            x.touches && x.touches.length > 0
                                ? x.touches[0]
                                : x;
                        (G = Math.round(F - z.left)),
                            (U = Math.round(j - z.top));
                    }
                    if (T)
                        (A = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3)),
                            A % 2 === 0 && (A += 1);
                    else {
                        const F =
                                Math.max(
                                    Math.abs((P ? P.clientWidth : 0) - G),
                                    G
                                ) *
                                    2 +
                                2,
                            j =
                                Math.max(
                                    Math.abs((P ? P.clientHeight : 0) - U),
                                    U
                                ) *
                                    2 +
                                2;
                        A = Math.sqrt(F ** 2 + j ** 2);
                    }
                    x != null && x.touches
                        ? g.current === null &&
                          ((g.current = () => {
                              S({
                                  pulsate: E,
                                  rippleX: G,
                                  rippleY: U,
                                  rippleSize: A,
                                  cb: k,
                              });
                          }),
                          (h.current = setTimeout(() => {
                              g.current && (g.current(), (g.current = null));
                          }, T$)))
                        : S({
                              pulsate: E,
                              rippleX: G,
                              rippleY: U,
                              rippleSize: A,
                              cb: k,
                          });
                },
                [o, S]
            ),
            m = b.useCallback(() => {
                v({}, { pulsate: !0 });
            }, [v]),
            y = b.useCallback((x, C) => {
                if (
                    (clearTimeout(h.current),
                    (x == null ? void 0 : x.type) === "touchend" && g.current)
                ) {
                    g.current(),
                        (g.current = null),
                        (h.current = setTimeout(() => {
                            y(x, C);
                        }));
                    return;
                }
                (g.current = null),
                    u((k) => (k.length > 0 ? k.slice(1) : k)),
                    (f.current = C);
            }, []);
        return (
            b.useImperativeHandle(
                n,
                () => ({ pulsate: m, start: v, stop: y }),
                [m, v, y]
            ),
            R(
                M$,
                w({ className: Z(qt.root, i.root, s), ref: p }, a, {
                    children: R(ZP, { component: null, exit: !0, children: l }),
                })
            )
        );
    }),
    L$ = A$;
function D$(e) {
    return me("MuiButtonBase", e);
}
const z$ = ye("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    F$ = z$,
    B$ = [
        "action",
        "centerRipple",
        "children",
        "className",
        "component",
        "disabled",
        "disableRipple",
        "disableTouchRipple",
        "focusRipple",
        "focusVisibleClassName",
        "LinkComponent",
        "onBlur",
        "onClick",
        "onContextMenu",
        "onDragLeave",
        "onFocus",
        "onFocusVisible",
        "onKeyDown",
        "onKeyUp",
        "onMouseDown",
        "onMouseLeave",
        "onMouseUp",
        "onTouchEnd",
        "onTouchMove",
        "onTouchStart",
        "tabIndex",
        "TouchRippleProps",
        "touchRippleRef",
        "type",
    ],
    j$ = (e) => {
        const {
                disabled: t,
                focusVisible: n,
                focusVisibleClassName: r,
                classes: o,
            } = e,
            s = ve(
                { root: ["root", t && "disabled", n && "focusVisible"] },
                D$,
                o
            );
        return n && r && (s.root += ` ${r}`), s;
    },
    U$ = X("button", {
        name: "MuiButtonBase",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxSizing: "border-box",
        WebkitTapHighlightColor: "transparent",
        backgroundColor: "transparent",
        outline: 0,
        border: 0,
        margin: 0,
        borderRadius: 0,
        padding: 0,
        cursor: "pointer",
        userSelect: "none",
        verticalAlign: "middle",
        MozAppearance: "none",
        WebkitAppearance: "none",
        textDecoration: "none",
        color: "inherit",
        "&::-moz-focus-inner": { borderStyle: "none" },
        [`&.${F$.disabled}`]: { pointerEvents: "none", cursor: "default" },
        "@media print": { colorAdjust: "exact" },
    }),
    W$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiButtonBase" }),
            {
                action: o,
                centerRipple: i = !1,
                children: s,
                className: a,
                component: l = "button",
                disabled: u = !1,
                disableRipple: d = !1,
                disableTouchRipple: f = !1,
                focusRipple: c = !1,
                LinkComponent: h = "a",
                onBlur: g,
                onClick: p,
                onContextMenu: S,
                onDragLeave: v,
                onFocus: m,
                onFocusVisible: y,
                onKeyDown: x,
                onKeyUp: C,
                onMouseDown: k,
                onMouseLeave: E,
                onMouseUp: T,
                onTouchEnd: O,
                onTouchMove: P,
                onTouchStart: z,
                tabIndex: G = 0,
                TouchRippleProps: U,
                touchRippleRef: A,
                type: F,
            } = r,
            j = Q(r, B$),
            ee = b.useRef(null),
            $ = b.useRef(null),
            M = rt($, A),
            { isFocusVisibleRef: L, onFocus: W, onBlur: te, ref: Me } = ZE(),
            [ie, ge] = b.useState(!1);
        u && ie && ge(!1),
            b.useImperativeHandle(
                o,
                () => ({
                    focusVisible: () => {
                        ge(!0), ee.current.focus();
                    },
                }),
                []
            );
        const [K, ce] = b.useState(!1);
        b.useEffect(() => {
            ce(!0);
        }, []);
        const Te = K && !d && !u;
        b.useEffect(() => {
            ie && c && !d && K && $.current.pulsate();
        }, [d, c, ie, K]);
        function be(_, de, Ce = f) {
            return $o(
                (Xe) => (de && de(Xe), !Ce && $.current && $.current[_](Xe), !0)
            );
        }
        const Ae = be("start", k),
            ae = be("stop", S),
            Ye = be("stop", v),
            ut = be("stop", T),
            Rt = be("stop", (_) => {
                ie && _.preventDefault(), E && E(_);
            }),
            Nt = be("start", z),
            on = be("stop", O),
            At = be("stop", P),
            I = be(
                "stop",
                (_) => {
                    te(_), L.current === !1 && ge(!1), g && g(_);
                },
                !1
            ),
            N = $o((_) => {
                ee.current || (ee.current = _.currentTarget),
                    W(_),
                    L.current === !0 && (ge(!0), y && y(_)),
                    m && m(_);
            }),
            B = () => {
                const _ = ee.current;
                return l && l !== "button" && !(_.tagName === "A" && _.href);
            },
            q = b.useRef(!1),
            H = $o((_) => {
                c &&
                    !q.current &&
                    ie &&
                    $.current &&
                    _.key === " " &&
                    ((q.current = !0),
                    $.current.stop(_, () => {
                        $.current.start(_);
                    })),
                    _.target === _.currentTarget &&
                        B() &&
                        _.key === " " &&
                        _.preventDefault(),
                    x && x(_),
                    _.target === _.currentTarget &&
                        B() &&
                        _.key === "Enter" &&
                        !u &&
                        (_.preventDefault(), p && p(_));
            }),
            oe = $o((_) => {
                c &&
                    _.key === " " &&
                    $.current &&
                    ie &&
                    !_.defaultPrevented &&
                    ((q.current = !1),
                    $.current.stop(_, () => {
                        $.current.pulsate(_);
                    })),
                    C && C(_),
                    p &&
                        _.target === _.currentTarget &&
                        B() &&
                        _.key === " " &&
                        !_.defaultPrevented &&
                        p(_);
            });
        let re = l;
        re === "button" && (j.href || j.to) && (re = h);
        const se = {};
        re === "button"
            ? ((se.type = F === void 0 ? "button" : F), (se.disabled = u))
            : (!j.href && !j.to && (se.role = "button"),
              u && (se["aria-disabled"] = u));
        const ne = rt(n, Me, ee),
            Oe = w({}, r, {
                centerRipple: i,
                component: l,
                disabled: u,
                disableRipple: d,
                disableTouchRipple: f,
                focusRipple: c,
                tabIndex: G,
                focusVisible: ie,
            }),
            J = j$(Oe);
        return le(
            U$,
            w(
                {
                    as: re,
                    className: Z(J.root, a),
                    ownerState: Oe,
                    onBlur: I,
                    onClick: p,
                    onContextMenu: ae,
                    onFocus: N,
                    onKeyDown: H,
                    onKeyUp: oe,
                    onMouseDown: Ae,
                    onMouseLeave: Rt,
                    onMouseUp: ut,
                    onDragLeave: Ye,
                    onTouchEnd: on,
                    onTouchMove: At,
                    onTouchStart: Nt,
                    ref: ne,
                    tabIndex: u ? -1 : G,
                    type: F,
                },
                se,
                j,
                {
                    children: [
                        s,
                        Te ? R(L$, w({ ref: M, center: i }, U)) : null,
                    ],
                }
            )
        );
    }),
    to = W$;
function V$(e) {
    return me("MuiAccordionSummary", e);
}
const H$ = ye("MuiAccordionSummary", [
        "root",
        "expanded",
        "focusVisible",
        "disabled",
        "gutters",
        "contentGutters",
        "content",
        "expandIconWrapper",
    ]),
    To = H$,
    K$ = [
        "children",
        "className",
        "expandIcon",
        "focusVisibleClassName",
        "onClick",
    ],
    G$ = (e) => {
        const { classes: t, expanded: n, disabled: r, disableGutters: o } = e;
        return ve(
            {
                root: [
                    "root",
                    n && "expanded",
                    r && "disabled",
                    !o && "gutters",
                ],
                focusVisible: ["focusVisible"],
                content: ["content", n && "expanded", !o && "contentGutters"],
                expandIconWrapper: ["expandIconWrapper", n && "expanded"],
            },
            V$,
            t
        );
    },
    q$ = X(to, {
        name: "MuiAccordionSummary",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })(({ theme: e, ownerState: t }) => {
        const n = { duration: e.transitions.duration.shortest };
        return w(
            {
                display: "flex",
                minHeight: 48,
                padding: e.spacing(0, 2),
                transition: e.transitions.create(
                    ["min-height", "background-color"],
                    n
                ),
                [`&.${To.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette.action.focus,
                },
                [`&.${To.disabled}`]: {
                    opacity: (e.vars || e).palette.action.disabledOpacity,
                },
                [`&:hover:not(.${To.disabled})`]: { cursor: "pointer" },
            },
            !t.disableGutters && { [`&.${To.expanded}`]: { minHeight: 64 } }
        );
    }),
    Y$ = X("div", {
        name: "MuiAccordionSummary",
        slot: "Content",
        overridesResolver: (e, t) => t.content,
    })(({ theme: e, ownerState: t }) =>
        w(
            { display: "flex", flexGrow: 1, margin: "12px 0" },
            !t.disableGutters && {
                transition: e.transitions.create(["margin"], {
                    duration: e.transitions.duration.shortest,
                }),
                [`&.${To.expanded}`]: { margin: "20px 0" },
            }
        )
    ),
    X$ = X("div", {
        name: "MuiAccordionSummary",
        slot: "ExpandIconWrapper",
        overridesResolver: (e, t) => t.expandIconWrapper,
    })(({ theme: e }) => ({
        display: "flex",
        color: (e.vars || e).palette.action.active,
        transform: "rotate(0deg)",
        transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shortest,
        }),
        [`&.${To.expanded}`]: { transform: "rotate(180deg)" },
    })),
    Q$ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiAccordionSummary" }),
            {
                children: o,
                className: i,
                expandIcon: s,
                focusVisibleClassName: a,
                onClick: l,
            } = r,
            u = Q(r, K$),
            {
                disabled: d = !1,
                disableGutters: f,
                expanded: c,
                toggle: h,
            } = b.useContext(t1),
            g = (v) => {
                h && h(v), l && l(v);
            },
            p = w({}, r, { expanded: c, disabled: d, disableGutters: f }),
            S = G$(p);
        return le(
            q$,
            w(
                {
                    focusRipple: !1,
                    disableRipple: !0,
                    disabled: d,
                    component: "div",
                    "aria-expanded": c,
                    className: Z(S.root, i),
                    focusVisibleClassName: Z(S.focusVisible, a),
                    onClick: g,
                    ref: n,
                    ownerState: p,
                },
                u,
                {
                    children: [
                        R(Y$, {
                            className: S.content,
                            ownerState: p,
                            children: o,
                        }),
                        s &&
                            R(X$, {
                                className: S.expandIconWrapper,
                                ownerState: p,
                                children: s,
                            }),
                    ],
                }
            )
        );
    }),
    J$ = Q$;
function Z$(e) {
    return me("MuiIconButton", e);
}
const eT = ye("MuiIconButton", [
        "root",
        "disabled",
        "colorInherit",
        "colorPrimary",
        "colorSecondary",
        "colorError",
        "colorInfo",
        "colorSuccess",
        "colorWarning",
        "edgeStart",
        "edgeEnd",
        "sizeSmall",
        "sizeMedium",
        "sizeLarge",
    ]),
    tT = eT,
    nT = [
        "edge",
        "children",
        "className",
        "color",
        "disabled",
        "disableFocusRipple",
        "size",
    ],
    rT = (e) => {
        const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
            s = {
                root: [
                    "root",
                    n && "disabled",
                    r !== "default" && `color${V(r)}`,
                    o && `edge${V(o)}`,
                    `size${V(i)}`,
                ],
            };
        return ve(s, Z$, t);
    },
    oT = X(to, {
        name: "MuiIconButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.color !== "default" && t[`color${V(n.color)}`],
                n.edge && t[`edge${V(n.edge)}`],
                t[`size${V(n.size)}`],
            ];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    textAlign: "center",
                    flex: "0 0 auto",
                    fontSize: e.typography.pxToRem(24),
                    padding: 8,
                    borderRadius: "50%",
                    overflow: "visible",
                    color: (e.vars || e).palette.action.active,
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest,
                    }),
                },
                !t.disableRipple && {
                    "&:hover": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                            : _e(
                                  e.palette.action.active,
                                  e.palette.action.hoverOpacity
                              ),
                        "@media (hover: none)": {
                            backgroundColor: "transparent",
                        },
                    },
                },
                t.edge === "start" && {
                    marginLeft: t.size === "small" ? -3 : -12,
                },
                t.edge === "end" && {
                    marginRight: t.size === "small" ? -3 : -12,
                }
            ),
        ({ theme: e, ownerState: t }) => {
            var n;
            const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
            return w(
                {},
                t.color === "inherit" && { color: "inherit" },
                t.color !== "inherit" &&
                    t.color !== "default" &&
                    w(
                        { color: r == null ? void 0 : r.main },
                        !t.disableRipple && {
                            "&:hover": w(
                                {},
                                r && {
                                    backgroundColor: e.vars
                                        ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                                        : _e(
                                              r.main,
                                              e.palette.action.hoverOpacity
                                          ),
                                },
                                {
                                    "@media (hover: none)": {
                                        backgroundColor: "transparent",
                                    },
                                }
                            ),
                        }
                    ),
                t.size === "small" && {
                    padding: 5,
                    fontSize: e.typography.pxToRem(18),
                },
                t.size === "large" && {
                    padding: 12,
                    fontSize: e.typography.pxToRem(28),
                },
                {
                    [`&.${tT.disabled}`]: {
                        backgroundColor: "transparent",
                        color: (e.vars || e).palette.action.disabled,
                    },
                }
            );
        }
    ),
    iT = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiIconButton" }),
            {
                edge: o = !1,
                children: i,
                className: s,
                color: a = "default",
                disabled: l = !1,
                disableFocusRipple: u = !1,
                size: d = "medium",
            } = r,
            f = Q(r, nT),
            c = w({}, r, {
                edge: o,
                color: a,
                disabled: l,
                disableFocusRipple: u,
                size: d,
            }),
            h = rT(c);
        return R(
            oT,
            w(
                {
                    className: Z(h.root, s),
                    centerRipple: !0,
                    focusRipple: !u,
                    disabled: l,
                    ref: n,
                    ownerState: c,
                },
                f,
                { children: i }
            )
        );
    }),
    Xi = iT;
function sT(e) {
    return me("MuiTypography", e);
}
ye("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
]);
const aT = [
        "align",
        "className",
        "component",
        "gutterBottom",
        "noWrap",
        "paragraph",
        "variant",
        "variantMapping",
    ],
    lT = (e) => {
        const {
                align: t,
                gutterBottom: n,
                noWrap: r,
                paragraph: o,
                variant: i,
                classes: s,
            } = e,
            a = {
                root: [
                    "root",
                    i,
                    e.align !== "inherit" && `align${V(t)}`,
                    n && "gutterBottom",
                    r && "noWrap",
                    o && "paragraph",
                ],
            };
        return ve(a, sT, s);
    },
    uT = X("span", {
        name: "MuiTypography",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.variant && t[n.variant],
                n.align !== "inherit" && t[`align${V(n.align)}`],
                n.noWrap && t.noWrap,
                n.gutterBottom && t.gutterBottom,
                n.paragraph && t.paragraph,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            { margin: 0 },
            t.variant && e.typography[t.variant],
            t.align !== "inherit" && { textAlign: t.align },
            t.noWrap && {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
            },
            t.gutterBottom && { marginBottom: "0.35em" },
            t.paragraph && { marginBottom: 16 }
        )
    ),
    ng = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
        subtitle1: "h6",
        subtitle2: "h6",
        body1: "p",
        body2: "p",
        inherit: "p",
    },
    cT = {
        primary: "primary.main",
        textPrimary: "text.primary",
        secondary: "secondary.main",
        textSecondary: "text.secondary",
        error: "error.main",
    },
    dT = (e) => cT[e] || e,
    fT = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiTypography" }),
            o = dT(r.color),
            i = dp(w({}, r, { color: o })),
            {
                align: s = "inherit",
                className: a,
                component: l,
                gutterBottom: u = !1,
                noWrap: d = !1,
                paragraph: f = !1,
                variant: c = "body1",
                variantMapping: h = ng,
            } = i,
            g = Q(i, aT),
            p = w({}, i, {
                align: s,
                color: o,
                className: a,
                component: l,
                gutterBottom: u,
                noWrap: d,
                paragraph: f,
                variant: c,
                variantMapping: h,
            }),
            S = l || (f ? "p" : h[c] || ng[c]) || "span",
            v = lT(p);
        return R(
            uT,
            w({ as: S, ref: n, ownerState: p, className: Z(v.root, a) }, g)
        );
    }),
    Qt = fT,
    pT = kr(
        R("path", {
            d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
        }),
        "Cancel"
    );
function hT(e) {
    return me("MuiChip", e);
}
const mT = ye("MuiChip", [
        "root",
        "sizeSmall",
        "sizeMedium",
        "colorError",
        "colorInfo",
        "colorPrimary",
        "colorSecondary",
        "colorSuccess",
        "colorWarning",
        "disabled",
        "clickable",
        "clickableColorPrimary",
        "clickableColorSecondary",
        "deletable",
        "deletableColorPrimary",
        "deletableColorSecondary",
        "outlined",
        "filled",
        "outlinedPrimary",
        "outlinedSecondary",
        "filledPrimary",
        "filledSecondary",
        "avatar",
        "avatarSmall",
        "avatarMedium",
        "avatarColorPrimary",
        "avatarColorSecondary",
        "icon",
        "iconSmall",
        "iconMedium",
        "iconColorPrimary",
        "iconColorSecondary",
        "label",
        "labelSmall",
        "labelMedium",
        "deleteIcon",
        "deleteIconSmall",
        "deleteIconMedium",
        "deleteIconColorPrimary",
        "deleteIconColorSecondary",
        "deleteIconOutlinedColorPrimary",
        "deleteIconOutlinedColorSecondary",
        "deleteIconFilledColorPrimary",
        "deleteIconFilledColorSecondary",
        "focusVisible",
    ]),
    we = mT,
    gT = [
        "avatar",
        "className",
        "clickable",
        "color",
        "component",
        "deleteIcon",
        "disabled",
        "icon",
        "label",
        "onClick",
        "onDelete",
        "onKeyDown",
        "onKeyUp",
        "size",
        "variant",
        "tabIndex",
        "skipFocusWhenDisabled",
    ],
    vT = (e) => {
        const {
                classes: t,
                disabled: n,
                size: r,
                color: o,
                iconColor: i,
                onDelete: s,
                clickable: a,
                variant: l,
            } = e,
            u = {
                root: [
                    "root",
                    l,
                    n && "disabled",
                    `size${V(r)}`,
                    `color${V(o)}`,
                    a && "clickable",
                    a && `clickableColor${V(o)}`,
                    s && "deletable",
                    s && `deletableColor${V(o)}`,
                    `${l}${V(o)}`,
                ],
                label: ["label", `label${V(r)}`],
                avatar: ["avatar", `avatar${V(r)}`, `avatarColor${V(o)}`],
                icon: ["icon", `icon${V(r)}`, `iconColor${V(i)}`],
                deleteIcon: [
                    "deleteIcon",
                    `deleteIcon${V(r)}`,
                    `deleteIconColor${V(o)}`,
                    `deleteIcon${V(l)}Color${V(o)}`,
                ],
            };
        return ve(u, hT, t);
    },
    yT = X("div", {
        name: "MuiChip",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e,
                {
                    color: r,
                    iconColor: o,
                    clickable: i,
                    onDelete: s,
                    size: a,
                    variant: l,
                } = n;
            return [
                { [`& .${we.avatar}`]: t.avatar },
                { [`& .${we.avatar}`]: t[`avatar${V(a)}`] },
                { [`& .${we.avatar}`]: t[`avatarColor${V(r)}`] },
                { [`& .${we.icon}`]: t.icon },
                { [`& .${we.icon}`]: t[`icon${V(a)}`] },
                { [`& .${we.icon}`]: t[`iconColor${V(o)}`] },
                { [`& .${we.deleteIcon}`]: t.deleteIcon },
                { [`& .${we.deleteIcon}`]: t[`deleteIcon${V(a)}`] },
                { [`& .${we.deleteIcon}`]: t[`deleteIconColor${V(r)}`] },
                { [`& .${we.deleteIcon}`]: t[`deleteIcon${V(l)}Color${V(r)}`] },
                t.root,
                t[`size${V(a)}`],
                t[`color${V(r)}`],
                i && t.clickable,
                i && r !== "default" && t[`clickableColor${V(r)})`],
                s && t.deletable,
                s && r !== "default" && t[`deletableColor${V(r)}`],
                t[l],
                t[`${l}${V(r)}`],
            ];
        },
    })(
        ({ theme: e, ownerState: t }) => {
            const n = _e(e.palette.text.primary, 0.26),
                r =
                    e.palette.mode === "light"
                        ? e.palette.grey[700]
                        : e.palette.grey[300];
            return w(
                {
                    maxWidth: "100%",
                    fontFamily: e.typography.fontFamily,
                    fontSize: e.typography.pxToRem(13),
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 32,
                    color: (e.vars || e).palette.text.primary,
                    backgroundColor: (e.vars || e).palette.action.selected,
                    borderRadius: 32 / 2,
                    whiteSpace: "nowrap",
                    transition: e.transitions.create([
                        "background-color",
                        "box-shadow",
                    ]),
                    cursor: "default",
                    outline: 0,
                    textDecoration: "none",
                    border: 0,
                    padding: 0,
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    [`&.${we.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                        pointerEvents: "none",
                    },
                    [`& .${we.avatar}`]: {
                        marginLeft: 5,
                        marginRight: -6,
                        width: 24,
                        height: 24,
                        color: e.vars
                            ? e.vars.palette.Chip.defaultAvatarColor
                            : r,
                        fontSize: e.typography.pxToRem(12),
                    },
                    [`& .${we.avatarColorPrimary}`]: {
                        color: (e.vars || e).palette.primary.contrastText,
                        backgroundColor: (e.vars || e).palette.primary.dark,
                    },
                    [`& .${we.avatarColorSecondary}`]: {
                        color: (e.vars || e).palette.secondary.contrastText,
                        backgroundColor: (e.vars || e).palette.secondary.dark,
                    },
                    [`& .${we.avatarSmall}`]: {
                        marginLeft: 4,
                        marginRight: -4,
                        width: 18,
                        height: 18,
                        fontSize: e.typography.pxToRem(10),
                    },
                    [`& .${we.icon}`]: w(
                        { marginLeft: 5, marginRight: -6 },
                        t.size === "small" && {
                            fontSize: 18,
                            marginLeft: 4,
                            marginRight: -4,
                        },
                        t.iconColor === t.color &&
                            w(
                                {
                                    color: e.vars
                                        ? e.vars.palette.Chip.defaultIconColor
                                        : r,
                                },
                                t.color !== "default" && { color: "inherit" }
                            )
                    ),
                    [`& .${we.deleteIcon}`]: w(
                        {
                            WebkitTapHighlightColor: "transparent",
                            color: e.vars
                                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                                : n,
                            fontSize: 22,
                            cursor: "pointer",
                            margin: "0 5px 0 -6px",
                            "&:hover": {
                                color: e.vars
                                    ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                                    : _e(n, 0.4),
                            },
                        },
                        t.size === "small" && {
                            fontSize: 16,
                            marginRight: 4,
                            marginLeft: -4,
                        },
                        t.color !== "default" && {
                            color: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color]
                                          .contrastTextChannel
                                  } / 0.7)`
                                : _e(e.palette[t.color].contrastText, 0.7),
                            "&:hover, &:active": {
                                color: (e.vars || e).palette[t.color]
                                    .contrastText,
                            },
                        }
                    ),
                },
                t.size === "small" && { height: 24 },
                t.color !== "default" && {
                    backgroundColor: (e.vars || e).palette[t.color].main,
                    color: (e.vars || e).palette[t.color].contrastText,
                },
                t.onDelete && {
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : _e(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                },
                t.onDelete &&
                    t.color !== "default" && {
                        [`&.${we.focusVisible}`]: {
                            backgroundColor: (e.vars || e).palette[t.color]
                                .dark,
                        },
                    }
            );
        },
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.clickable && {
                    userSelect: "none",
                    WebkitTapHighlightColor: "transparent",
                    cursor: "pointer",
                    "&:hover": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                            : _e(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.hoverOpacity
                              ),
                    },
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : _e(
                                  e.palette.action.selected,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                    "&:active": { boxShadow: (e.vars || e).shadows[1] },
                },
                t.clickable &&
                    t.color !== "default" && {
                        [`&:hover, &.${we.focusVisible}`]: {
                            backgroundColor: (e.vars || e).palette[t.color]
                                .dark,
                        },
                    }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.variant === "outlined" && {
                    backgroundColor: "transparent",
                    border: e.vars
                        ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
                        : `1px solid ${
                              e.palette.mode === "light"
                                  ? e.palette.grey[400]
                                  : e.palette.grey[700]
                          }`,
                    [`&.${we.clickable}:hover`]: {
                        backgroundColor: (e.vars || e).palette.action.hover,
                    },
                    [`&.${we.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus,
                    },
                    [`& .${we.avatar}`]: { marginLeft: 4 },
                    [`& .${we.avatarSmall}`]: { marginLeft: 2 },
                    [`& .${we.icon}`]: { marginLeft: 4 },
                    [`& .${we.iconSmall}`]: { marginLeft: 2 },
                    [`& .${we.deleteIcon}`]: { marginRight: 5 },
                    [`& .${we.deleteIconSmall}`]: { marginRight: 3 },
                },
                t.variant === "outlined" &&
                    t.color !== "default" && {
                        color: (e.vars || e).palette[t.color].main,
                        border: `1px solid ${
                            e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / 0.7)`
                                : _e(e.palette[t.color].main, 0.7)
                        }`,
                        [`&.${we.clickable}:hover`]: {
                            backgroundColor: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / ${e.vars.palette.action.hoverOpacity})`
                                : _e(
                                      e.palette[t.color].main,
                                      e.palette.action.hoverOpacity
                                  ),
                        },
                        [`&.${we.focusVisible}`]: {
                            backgroundColor: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / ${e.vars.palette.action.focusOpacity})`
                                : _e(
                                      e.palette[t.color].main,
                                      e.palette.action.focusOpacity
                                  ),
                        },
                        [`& .${we.deleteIcon}`]: {
                            color: e.vars
                                ? `rgba(${
                                      e.vars.palette[t.color].mainChannel
                                  } / 0.7)`
                                : _e(e.palette[t.color].main, 0.7),
                            "&:hover, &:active": {
                                color: (e.vars || e).palette[t.color].main,
                            },
                        },
                    }
            )
    ),
    bT = X("span", {
        name: "MuiChip",
        slot: "Label",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e,
                { size: r } = n;
            return [t.label, t[`label${V(r)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            {
                overflow: "hidden",
                textOverflow: "ellipsis",
                paddingLeft: 12,
                paddingRight: 12,
                whiteSpace: "nowrap",
            },
            e.size === "small" && { paddingLeft: 8, paddingRight: 8 }
        )
    );
function rg(e) {
    return e.key === "Backspace" || e.key === "Delete";
}
const xT = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiChip" }),
            {
                avatar: o,
                className: i,
                clickable: s,
                color: a = "default",
                component: l,
                deleteIcon: u,
                disabled: d = !1,
                icon: f,
                label: c,
                onClick: h,
                onDelete: g,
                onKeyDown: p,
                onKeyUp: S,
                size: v = "medium",
                variant: m = "filled",
                tabIndex: y,
                skipFocusWhenDisabled: x = !1,
            } = r,
            C = Q(r, gT),
            k = b.useRef(null),
            E = rt(k, n),
            T = (M) => {
                M.stopPropagation(), g && g(M);
            },
            O = (M) => {
                M.currentTarget === M.target && rg(M) && M.preventDefault(),
                    p && p(M);
            },
            P = (M) => {
                M.currentTarget === M.target &&
                    (g && rg(M)
                        ? g(M)
                        : M.key === "Escape" && k.current && k.current.blur()),
                    S && S(M);
            },
            z = s !== !1 && h ? !0 : s,
            G = z || g ? to : l || "div",
            U = w({}, r, {
                component: G,
                disabled: d,
                size: v,
                color: a,
                iconColor: (b.isValidElement(f) && f.props.color) || a,
                onDelete: !!g,
                clickable: z,
                variant: m,
            }),
            A = vT(U),
            F =
                G === to
                    ? w(
                          {
                              component: l || "div",
                              focusVisibleClassName: A.focusVisible,
                          },
                          g && { disableRipple: !0 }
                      )
                    : {};
        let j = null;
        g &&
            (j =
                u && b.isValidElement(u)
                    ? b.cloneElement(u, {
                          className: Z(u.props.className, A.deleteIcon),
                          onClick: T,
                      })
                    : R(pT, { className: Z(A.deleteIcon), onClick: T }));
        let ee = null;
        o &&
            b.isValidElement(o) &&
            (ee = b.cloneElement(o, {
                className: Z(A.avatar, o.props.className),
            }));
        let $ = null;
        return (
            f &&
                b.isValidElement(f) &&
                ($ = b.cloneElement(f, {
                    className: Z(A.icon, f.props.className),
                })),
            le(
                yT,
                w(
                    {
                        as: G,
                        className: Z(A.root, i),
                        disabled: z && d ? !0 : void 0,
                        onClick: h,
                        onKeyDown: O,
                        onKeyUp: P,
                        ref: E,
                        tabIndex: x && d ? -1 : y,
                        ownerState: U,
                    },
                    F,
                    C,
                    {
                        children: [
                            ee || $,
                            R(bT, {
                                className: Z(A.label),
                                ownerState: U,
                                children: c,
                            }),
                            j,
                        ],
                    }
                )
            )
        );
    }),
    wT = xT;
function ui({ props: e, states: t, muiFormControl: n }) {
    return t.reduce(
        (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
        {}
    );
}
const ST = b.createContext(void 0),
    vp = ST;
function ci() {
    return b.useContext(vp);
}
function n1(e) {
    return R(Qk, w({}, e, { defaultTheme: mu }));
}
function og(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
}
function yp(e, t = !1) {
    return (
        e &&
        ((og(e.value) && e.value !== "") ||
            (t && og(e.defaultValue) && e.defaultValue !== ""))
    );
}
function CT(e) {
    return e.startAdornment;
}
function ET(e) {
    return me("MuiInputBase", e);
}
const kT = ye("MuiInputBase", [
        "root",
        "formControl",
        "focused",
        "disabled",
        "adornedStart",
        "adornedEnd",
        "error",
        "sizeSmall",
        "multiline",
        "colorSecondary",
        "fullWidth",
        "hiddenLabel",
        "readOnly",
        "input",
        "inputSizeSmall",
        "inputMultiline",
        "inputTypeSearch",
        "inputAdornedStart",
        "inputAdornedEnd",
        "inputHiddenLabel",
    ]),
    ti = kT,
    RT = [
        "aria-describedby",
        "autoComplete",
        "autoFocus",
        "className",
        "color",
        "components",
        "componentsProps",
        "defaultValue",
        "disabled",
        "disableInjectingGlobalStyles",
        "endAdornment",
        "error",
        "fullWidth",
        "id",
        "inputComponent",
        "inputProps",
        "inputRef",
        "margin",
        "maxRows",
        "minRows",
        "multiline",
        "name",
        "onBlur",
        "onChange",
        "onClick",
        "onFocus",
        "onKeyDown",
        "onKeyUp",
        "placeholder",
        "readOnly",
        "renderSuffix",
        "rows",
        "size",
        "slotProps",
        "slots",
        "startAdornment",
        "type",
        "value",
    ],
    yu = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.formControl && t.formControl,
            n.startAdornment && t.adornedStart,
            n.endAdornment && t.adornedEnd,
            n.error && t.error,
            n.size === "small" && t.sizeSmall,
            n.multiline && t.multiline,
            n.color && t[`color${V(n.color)}`],
            n.fullWidth && t.fullWidth,
            n.hiddenLabel && t.hiddenLabel,
        ];
    },
    bu = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.input,
            n.size === "small" && t.inputSizeSmall,
            n.multiline && t.inputMultiline,
            n.type === "search" && t.inputTypeSearch,
            n.startAdornment && t.inputAdornedStart,
            n.endAdornment && t.inputAdornedEnd,
            n.hiddenLabel && t.inputHiddenLabel,
        ];
    },
    PT = (e) => {
        const {
                classes: t,
                color: n,
                disabled: r,
                error: o,
                endAdornment: i,
                focused: s,
                formControl: a,
                fullWidth: l,
                hiddenLabel: u,
                multiline: d,
                readOnly: f,
                size: c,
                startAdornment: h,
                type: g,
            } = e,
            p = {
                root: [
                    "root",
                    `color${V(n)}`,
                    r && "disabled",
                    o && "error",
                    l && "fullWidth",
                    s && "focused",
                    a && "formControl",
                    c === "small" && "sizeSmall",
                    d && "multiline",
                    h && "adornedStart",
                    i && "adornedEnd",
                    u && "hiddenLabel",
                    f && "readOnly",
                ],
                input: [
                    "input",
                    r && "disabled",
                    g === "search" && "inputTypeSearch",
                    d && "inputMultiline",
                    c === "small" && "inputSizeSmall",
                    u && "inputHiddenLabel",
                    h && "inputAdornedStart",
                    i && "inputAdornedEnd",
                    f && "readOnly",
                ],
            };
        return ve(p, ET, t);
    },
    xu = X("div", {
        name: "MuiInputBase",
        slot: "Root",
        overridesResolver: yu,
    })(({ theme: e, ownerState: t }) =>
        w(
            {},
            e.typography.body1,
            {
                color: (e.vars || e).palette.text.primary,
                lineHeight: "1.4375em",
                boxSizing: "border-box",
                position: "relative",
                cursor: "text",
                display: "inline-flex",
                alignItems: "center",
                [`&.${ti.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled,
                    cursor: "default",
                },
            },
            t.multiline &&
                w(
                    { padding: "4px 0 5px" },
                    t.size === "small" && { paddingTop: 1 }
                ),
            t.fullWidth && { width: "100%" }
        )
    ),
    wu = X("input", {
        name: "MuiInputBase",
        slot: "Input",
        overridesResolver: bu,
    })(({ theme: e, ownerState: t }) => {
        const n = e.palette.mode === "light",
            r = w(
                { color: "currentColor" },
                e.vars
                    ? { opacity: e.vars.opacity.inputPlaceholder }
                    : { opacity: n ? 0.42 : 0.5 },
                {
                    transition: e.transitions.create("opacity", {
                        duration: e.transitions.duration.shorter,
                    }),
                }
            ),
            o = { opacity: "0 !important" },
            i = e.vars
                ? { opacity: e.vars.opacity.inputPlaceholder }
                : { opacity: n ? 0.42 : 0.5 };
        return w(
            {
                font: "inherit",
                letterSpacing: "inherit",
                color: "currentColor",
                padding: "4px 0 5px",
                border: 0,
                boxSizing: "content-box",
                background: "none",
                height: "1.4375em",
                margin: 0,
                WebkitTapHighlightColor: "transparent",
                display: "block",
                minWidth: 0,
                width: "100%",
                animationName: "mui-auto-fill-cancel",
                animationDuration: "10ms",
                "&::-webkit-input-placeholder": r,
                "&::-moz-placeholder": r,
                "&:-ms-input-placeholder": r,
                "&::-ms-input-placeholder": r,
                "&:focus": { outline: 0 },
                "&:invalid": { boxShadow: "none" },
                "&::-webkit-search-decoration": { WebkitAppearance: "none" },
                [`label[data-shrink=false] + .${ti.formControl} &`]: {
                    "&::-webkit-input-placeholder": o,
                    "&::-moz-placeholder": o,
                    "&:-ms-input-placeholder": o,
                    "&::-ms-input-placeholder": o,
                    "&:focus::-webkit-input-placeholder": i,
                    "&:focus::-moz-placeholder": i,
                    "&:focus:-ms-input-placeholder": i,
                    "&:focus::-ms-input-placeholder": i,
                },
                [`&.${ti.disabled}`]: {
                    opacity: 1,
                    WebkitTextFillColor: (e.vars || e).palette.text.disabled,
                },
                "&:-webkit-autofill": {
                    animationDuration: "5000s",
                    animationName: "mui-auto-fill",
                },
            },
            t.size === "small" && { paddingTop: 1 },
            t.multiline && {
                height: "auto",
                resize: "none",
                padding: 0,
                paddingTop: 0,
            },
            t.type === "search" && { MozAppearance: "textfield" }
        );
    }),
    $T = R(n1, {
        styles: {
            "@keyframes mui-auto-fill": { from: { display: "block" } },
            "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
        },
    }),
    TT = b.forwardRef(function (t, n) {
        var r;
        const o = he({ props: t, name: "MuiInputBase" }),
            {
                "aria-describedby": i,
                autoComplete: s,
                autoFocus: a,
                className: l,
                components: u = {},
                componentsProps: d = {},
                defaultValue: f,
                disabled: c,
                disableInjectingGlobalStyles: h,
                endAdornment: g,
                fullWidth: p = !1,
                id: S,
                inputComponent: v = "input",
                inputProps: m = {},
                inputRef: y,
                maxRows: x,
                minRows: C,
                multiline: k = !1,
                name: E,
                onBlur: T,
                onChange: O,
                onClick: P,
                onFocus: z,
                onKeyDown: G,
                onKeyUp: U,
                placeholder: A,
                readOnly: F,
                renderSuffix: j,
                rows: ee,
                slotProps: $ = {},
                slots: M = {},
                startAdornment: L,
                type: W = "text",
                value: te,
            } = o,
            Me = Q(o, RT),
            ie = m.value != null ? m.value : te,
            { current: ge } = b.useRef(ie != null),
            K = b.useRef(),
            ce = b.useCallback((J) => {}, []),
            Te = rt(K, y, m.ref, ce),
            [be, Ae] = b.useState(!1),
            ae = ci(),
            Ye = ui({
                props: o,
                muiFormControl: ae,
                states: [
                    "color",
                    "disabled",
                    "error",
                    "hiddenLabel",
                    "size",
                    "required",
                    "filled",
                ],
            });
        (Ye.focused = ae ? ae.focused : be),
            b.useEffect(() => {
                !ae && c && be && (Ae(!1), T && T());
            }, [ae, c, be, T]);
        const ut = ae && ae.onFilled,
            Rt = ae && ae.onEmpty,
            Nt = b.useCallback(
                (J) => {
                    yp(J) ? ut && ut() : Rt && Rt();
                },
                [ut, Rt]
            );
        xr(() => {
            ge && Nt({ value: ie });
        }, [ie, Nt, ge]);
        const on = (J) => {
                if (Ye.disabled) {
                    J.stopPropagation();
                    return;
                }
                z && z(J),
                    m.onFocus && m.onFocus(J),
                    ae && ae.onFocus ? ae.onFocus(J) : Ae(!0);
            },
            At = (J) => {
                T && T(J),
                    m.onBlur && m.onBlur(J),
                    ae && ae.onBlur ? ae.onBlur(J) : Ae(!1);
            },
            I = (J, ..._) => {
                if (!ge) {
                    const de = J.target || K.current;
                    if (de == null) throw new Error(Vn(1));
                    Nt({ value: de.value });
                }
                m.onChange && m.onChange(J, ..._), O && O(J, ..._);
            };
        b.useEffect(() => {
            Nt(K.current);
        }, []);
        const N = (J) => {
            K.current && J.currentTarget === J.target && K.current.focus(),
                P && P(J);
        };
        let B = v,
            q = m;
        k &&
            B === "input" &&
            (ee
                ? (q = w({ type: void 0, minRows: ee, maxRows: ee }, q))
                : (q = w({ type: void 0, maxRows: x, minRows: C }, q)),
            (B = jP));
        const H = (J) => {
            Nt(
                J.animationName === "mui-auto-fill-cancel"
                    ? K.current
                    : { value: "x" }
            );
        };
        b.useEffect(() => {
            ae && ae.setAdornedStart(Boolean(L));
        }, [ae, L]);
        const oe = w({}, o, {
                color: Ye.color || "primary",
                disabled: Ye.disabled,
                endAdornment: g,
                error: Ye.error,
                focused: Ye.focused,
                formControl: ae,
                fullWidth: p,
                hiddenLabel: Ye.hiddenLabel,
                multiline: k,
                size: Ye.size,
                startAdornment: L,
                type: W,
            }),
            re = PT(oe),
            se = M.root || u.Root || xu,
            ne = $.root || d.root || {},
            Oe = M.input || u.Input || wu;
        return (
            (q = w({}, q, (r = $.input) != null ? r : d.input)),
            le(b.Fragment, {
                children: [
                    !h && $T,
                    le(
                        se,
                        w(
                            {},
                            ne,
                            !ei(se) && { ownerState: w({}, oe, ne.ownerState) },
                            { ref: n, onClick: N },
                            Me,
                            {
                                className: Z(re.root, ne.className, l),
                                children: [
                                    L,
                                    R(vp.Provider, {
                                        value: null,
                                        children: R(
                                            Oe,
                                            w(
                                                {
                                                    ownerState: oe,
                                                    "aria-invalid": Ye.error,
                                                    "aria-describedby": i,
                                                    autoComplete: s,
                                                    autoFocus: a,
                                                    defaultValue: f,
                                                    disabled: Ye.disabled,
                                                    id: S,
                                                    onAnimationStart: H,
                                                    name: E,
                                                    placeholder: A,
                                                    readOnly: F,
                                                    required: Ye.required,
                                                    rows: ee,
                                                    value: ie,
                                                    onKeyDown: G,
                                                    onKeyUp: U,
                                                    type: W,
                                                },
                                                q,
                                                !ei(Oe) && {
                                                    as: B,
                                                    ownerState: w(
                                                        {},
                                                        oe,
                                                        q.ownerState
                                                    ),
                                                },
                                                {
                                                    ref: Te,
                                                    className: Z(
                                                        re.input,
                                                        q.className
                                                    ),
                                                    onBlur: At,
                                                    onChange: I,
                                                    onFocus: on,
                                                }
                                            )
                                        ),
                                    }),
                                    g,
                                    j
                                        ? j(w({}, Ye, { startAdornment: L }))
                                        : null,
                                ],
                            }
                        )
                    ),
                ],
            })
        );
    }),
    bp = TT;
function OT(e) {
    return me("MuiInput", e);
}
const IT = w({}, ti, ye("MuiInput", ["root", "underline", "input"])),
    Ri = IT;
function _T(e) {
    return me("MuiOutlinedInput", e);
}
const MT = w(
        {},
        ti,
        ye("MuiOutlinedInput", ["root", "notchedOutline", "input"])
    ),
    Qn = MT;
function NT(e) {
    return me("MuiFilledInput", e);
}
const AT = w({}, ti, ye("MuiFilledInput", ["root", "underline", "input"])),
    Tr = AT,
    LT = kr(R("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
    DT = [
        "addEndListener",
        "appear",
        "children",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ],
    zT = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    FT = b.forwardRef(function (t, n) {
        const r = li(),
            o = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen,
            },
            {
                addEndListener: i,
                appear: s = !0,
                children: a,
                easing: l,
                in: u,
                onEnter: d,
                onEntered: f,
                onEntering: c,
                onExit: h,
                onExited: g,
                onExiting: p,
                style: S,
                timeout: v = o,
                TransitionComponent: m = gu,
            } = t,
            y = Q(t, DT),
            x = b.useRef(null),
            C = rt(x, a.ref, n),
            k = (A) => (F) => {
                if (A) {
                    const j = x.current;
                    F === void 0 ? A(j) : A(j, F);
                }
            },
            E = k(c),
            T = k((A, F) => {
                gp(A);
                const j = wr(
                    { style: S, timeout: v, easing: l },
                    { mode: "enter" }
                );
                (A.style.webkitTransition = r.transitions.create("opacity", j)),
                    (A.style.transition = r.transitions.create("opacity", j)),
                    d && d(A, F);
            }),
            O = k(f),
            P = k(p),
            z = k((A) => {
                const F = wr(
                    { style: S, timeout: v, easing: l },
                    { mode: "exit" }
                );
                (A.style.webkitTransition = r.transitions.create("opacity", F)),
                    (A.style.transition = r.transitions.create("opacity", F)),
                    h && h(A);
            }),
            G = k(g);
        return R(
            m,
            w(
                {
                    appear: s,
                    in: u,
                    nodeRef: x,
                    onEnter: T,
                    onEntered: O,
                    onEntering: E,
                    onExit: z,
                    onExited: G,
                    onExiting: P,
                    addEndListener: (A) => {
                        i && i(x.current, A);
                    },
                    timeout: v,
                },
                y,
                {
                    children: (A, F) =>
                        b.cloneElement(
                            a,
                            w(
                                {
                                    style: w(
                                        {
                                            opacity: 0,
                                            visibility:
                                                A === "exited" && !u
                                                    ? "hidden"
                                                    : void 0,
                                        },
                                        zT[A],
                                        S,
                                        a.props.style
                                    ),
                                    ref: C,
                                },
                                F
                            )
                        ),
                }
            )
        );
    }),
    BT = FT;
function jT(e) {
    return me("MuiBackdrop", e);
}
ye("MuiBackdrop", ["root", "invisible"]);
const UT = [
        "children",
        "component",
        "components",
        "componentsProps",
        "className",
        "invisible",
        "open",
        "slotProps",
        "slots",
        "transitionDuration",
        "TransitionComponent",
    ],
    WT = (e) => {
        const { classes: t, invisible: n } = e;
        return ve({ root: ["root", n && "invisible"] }, jT, t);
    },
    VT = X("div", {
        name: "MuiBackdrop",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.invisible && t.invisible];
        },
    })(({ ownerState: e }) =>
        w(
            {
                position: "fixed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                WebkitTapHighlightColor: "transparent",
            },
            e.invisible && { backgroundColor: "transparent" }
        )
    ),
    HT = b.forwardRef(function (t, n) {
        var r, o, i;
        const s = he({ props: t, name: "MuiBackdrop" }),
            {
                children: a,
                component: l = "div",
                components: u = {},
                componentsProps: d = {},
                className: f,
                invisible: c = !1,
                open: h,
                slotProps: g = {},
                slots: p = {},
                transitionDuration: S,
                TransitionComponent: v = BT,
            } = s,
            m = Q(s, UT),
            y = w({}, s, { component: l, invisible: c }),
            x = WT(y),
            C = (r = g.root) != null ? r : d.root;
        return R(
            v,
            w({ in: h, timeout: S }, m, {
                children: R(
                    VT,
                    w({ "aria-hidden": !0 }, C, {
                        as:
                            (o = (i = p.root) != null ? i : u.Root) != null
                                ? o
                                : l,
                        className: Z(
                            x.root,
                            f,
                            C == null ? void 0 : C.className
                        ),
                        ownerState: w({}, y, C == null ? void 0 : C.ownerState),
                        classes: x,
                        ref: n,
                        children: a,
                    })
                ),
            })
        );
    }),
    KT = HT,
    GT = pp(),
    qT = r2({
        defaultTheme: GT,
        defaultClassName: "MuiBox-root",
        generateClassName: E0.generate,
    }),
    st = qT;
function YT(e) {
    return me("MuiButton", e);
}
const XT = ye("MuiButton", [
        "root",
        "text",
        "textInherit",
        "textPrimary",
        "textSecondary",
        "textSuccess",
        "textError",
        "textInfo",
        "textWarning",
        "outlined",
        "outlinedInherit",
        "outlinedPrimary",
        "outlinedSecondary",
        "outlinedSuccess",
        "outlinedError",
        "outlinedInfo",
        "outlinedWarning",
        "contained",
        "containedInherit",
        "containedPrimary",
        "containedSecondary",
        "containedSuccess",
        "containedError",
        "containedInfo",
        "containedWarning",
        "disableElevation",
        "focusVisible",
        "disabled",
        "colorInherit",
        "textSizeSmall",
        "textSizeMedium",
        "textSizeLarge",
        "outlinedSizeSmall",
        "outlinedSizeMedium",
        "outlinedSizeLarge",
        "containedSizeSmall",
        "containedSizeMedium",
        "containedSizeLarge",
        "sizeMedium",
        "sizeSmall",
        "sizeLarge",
        "fullWidth",
        "startIcon",
        "endIcon",
        "iconSizeSmall",
        "iconSizeMedium",
        "iconSizeLarge",
    ]),
    sa = XT,
    QT = b.createContext({}),
    JT = QT,
    ZT = [
        "children",
        "color",
        "component",
        "className",
        "disabled",
        "disableElevation",
        "disableFocusRipple",
        "endIcon",
        "focusVisibleClassName",
        "fullWidth",
        "size",
        "startIcon",
        "type",
        "variant",
    ],
    eO = (e) => {
        const {
                color: t,
                disableElevation: n,
                fullWidth: r,
                size: o,
                variant: i,
                classes: s,
            } = e,
            a = {
                root: [
                    "root",
                    i,
                    `${i}${V(t)}`,
                    `size${V(o)}`,
                    `${i}Size${V(o)}`,
                    t === "inherit" && "colorInherit",
                    n && "disableElevation",
                    r && "fullWidth",
                ],
                label: ["label"],
                startIcon: ["startIcon", `iconSize${V(o)}`],
                endIcon: ["endIcon", `iconSize${V(o)}`],
            },
            l = ve(a, YT, s);
        return w({}, s, l);
    },
    r1 = (e) =>
        w(
            {},
            e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
            e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
            e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
        ),
    tO = X(to, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiButton",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                t[n.variant],
                t[`${n.variant}${V(n.color)}`],
                t[`size${V(n.size)}`],
                t[`${n.variant}Size${V(n.size)}`],
                n.color === "inherit" && t.colorInherit,
                n.disableElevation && t.disableElevation,
                n.fullWidth && t.fullWidth,
            ];
        },
    })(
        ({ theme: e, ownerState: t }) => {
            var n, r;
            return w(
                {},
                e.typography.button,
                {
                    minWidth: 64,
                    padding: "6px 16px",
                    borderRadius: (e.vars || e).shape.borderRadius,
                    transition: e.transitions.create(
                        [
                            "background-color",
                            "box-shadow",
                            "border-color",
                            "color",
                        ],
                        { duration: e.transitions.duration.short }
                    ),
                    "&:hover": w(
                        {
                            textDecoration: "none",
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                                : _e(
                                      e.palette.text.primary,
                                      e.palette.action.hoverOpacity
                                  ),
                            "@media (hover: none)": {
                                backgroundColor: "transparent",
                            },
                        },
                        t.variant === "text" &&
                            t.color !== "inherit" && {
                                backgroundColor: e.vars
                                    ? `rgba(${
                                          e.vars.palette[t.color].mainChannel
                                      } / ${
                                          e.vars.palette.action.hoverOpacity
                                      })`
                                    : _e(
                                          e.palette[t.color].main,
                                          e.palette.action.hoverOpacity
                                      ),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent",
                                },
                            },
                        t.variant === "outlined" &&
                            t.color !== "inherit" && {
                                border: `1px solid ${
                                    (e.vars || e).palette[t.color].main
                                }`,
                                backgroundColor: e.vars
                                    ? `rgba(${
                                          e.vars.palette[t.color].mainChannel
                                      } / ${
                                          e.vars.palette.action.hoverOpacity
                                      })`
                                    : _e(
                                          e.palette[t.color].main,
                                          e.palette.action.hoverOpacity
                                      ),
                                "@media (hover: none)": {
                                    backgroundColor: "transparent",
                                },
                            },
                        t.variant === "contained" && {
                            backgroundColor: (e.vars || e).palette.grey.A100,
                            boxShadow: (e.vars || e).shadows[4],
                            "@media (hover: none)": {
                                boxShadow: (e.vars || e).shadows[2],
                                backgroundColor: (e.vars || e).palette
                                    .grey[300],
                            },
                        },
                        t.variant === "contained" &&
                            t.color !== "inherit" && {
                                backgroundColor: (e.vars || e).palette[t.color]
                                    .dark,
                                "@media (hover: none)": {
                                    backgroundColor: (e.vars || e).palette[
                                        t.color
                                    ].main,
                                },
                            }
                    ),
                    "&:active": w(
                        {},
                        t.variant === "contained" && {
                            boxShadow: (e.vars || e).shadows[8],
                        }
                    ),
                    [`&.${sa.focusVisible}`]: w(
                        {},
                        t.variant === "contained" && {
                            boxShadow: (e.vars || e).shadows[6],
                        }
                    ),
                    [`&.${sa.disabled}`]: w(
                        { color: (e.vars || e).palette.action.disabled },
                        t.variant === "outlined" && {
                            border: `1px solid ${
                                (e.vars || e).palette.action.disabledBackground
                            }`,
                        },
                        t.variant === "outlined" &&
                            t.color === "secondary" && {
                                border: `1px solid ${
                                    (e.vars || e).palette.action.disabled
                                }`,
                            },
                        t.variant === "contained" && {
                            color: (e.vars || e).palette.action.disabled,
                            boxShadow: (e.vars || e).shadows[0],
                            backgroundColor: (e.vars || e).palette.action
                                .disabledBackground,
                        }
                    ),
                },
                t.variant === "text" && { padding: "6px 8px" },
                t.variant === "text" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].main,
                    },
                t.variant === "outlined" && {
                    padding: "5px 15px",
                    border: "1px solid currentColor",
                },
                t.variant === "outlined" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].main,
                        border: e.vars
                            ? `1px solid rgba(${
                                  e.vars.palette[t.color].mainChannel
                              } / 0.5)`
                            : `1px solid ${_e(e.palette[t.color].main, 0.5)}`,
                    },
                t.variant === "contained" && {
                    color: e.vars
                        ? e.vars.palette.text.primary
                        : (n = (r = e.palette).getContrastText) == null
                        ? void 0
                        : n.call(r, e.palette.grey[300]),
                    backgroundColor: (e.vars || e).palette.grey[300],
                    boxShadow: (e.vars || e).shadows[2],
                },
                t.variant === "contained" &&
                    t.color !== "inherit" && {
                        color: (e.vars || e).palette[t.color].contrastText,
                        backgroundColor: (e.vars || e).palette[t.color].main,
                    },
                t.color === "inherit" && {
                    color: "inherit",
                    borderColor: "currentColor",
                },
                t.size === "small" &&
                    t.variant === "text" && {
                        padding: "4px 5px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "text" && {
                        padding: "8px 11px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.size === "small" &&
                    t.variant === "outlined" && {
                        padding: "3px 9px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "outlined" && {
                        padding: "7px 21px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.size === "small" &&
                    t.variant === "contained" && {
                        padding: "4px 10px",
                        fontSize: e.typography.pxToRem(13),
                    },
                t.size === "large" &&
                    t.variant === "contained" && {
                        padding: "8px 22px",
                        fontSize: e.typography.pxToRem(15),
                    },
                t.fullWidth && { width: "100%" }
            );
        },
        ({ ownerState: e }) =>
            e.disableElevation && {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                [`&.${sa.focusVisible}`]: { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                [`&.${sa.disabled}`]: { boxShadow: "none" },
            }
    ),
    nO = X("span", {
        name: "MuiButton",
        slot: "StartIcon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.startIcon, t[`iconSize${V(n.size)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            { display: "inherit", marginRight: 8, marginLeft: -4 },
            e.size === "small" && { marginLeft: -2 },
            r1(e)
        )
    ),
    rO = X("span", {
        name: "MuiButton",
        slot: "EndIcon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.endIcon, t[`iconSize${V(n.size)}`]];
        },
    })(({ ownerState: e }) =>
        w(
            { display: "inherit", marginRight: -4, marginLeft: 8 },
            e.size === "small" && { marginRight: -2 },
            r1(e)
        )
    ),
    oO = b.forwardRef(function (t, n) {
        const r = b.useContext(JT),
            o = Zf(r, t),
            i = he({ props: o, name: "MuiButton" }),
            {
                children: s,
                color: a = "primary",
                component: l = "button",
                className: u,
                disabled: d = !1,
                disableElevation: f = !1,
                disableFocusRipple: c = !1,
                endIcon: h,
                focusVisibleClassName: g,
                fullWidth: p = !1,
                size: S = "medium",
                startIcon: v,
                type: m,
                variant: y = "text",
            } = i,
            x = Q(i, ZT),
            C = w({}, i, {
                color: a,
                component: l,
                disabled: d,
                disableElevation: f,
                disableFocusRipple: c,
                fullWidth: p,
                size: S,
                type: m,
                variant: y,
            }),
            k = eO(C),
            E =
                v &&
                R(nO, { className: k.startIcon, ownerState: C, children: v }),
            T =
                h &&
                R(rO, { className: k.endIcon, ownerState: C, children: h });
        return le(
            tO,
            w(
                {
                    ownerState: C,
                    className: Z(r.className, k.root, u),
                    component: l,
                    disabled: d,
                    focusRipple: !c,
                    focusVisibleClassName: Z(k.focusVisible, g),
                    ref: n,
                    type: m,
                },
                x,
                { classes: k, children: [E, s, T] }
            )
        );
    }),
    Rs = oO,
    iO = X0({
        createStyledComponent: X("div", {
            name: "MuiContainer",
            slot: "Root",
            overridesResolver: (e, t) => {
                const { ownerState: n } = e;
                return [
                    t.root,
                    t[`maxWidth${V(String(n.maxWidth))}`],
                    n.fixed && t.fixed,
                    n.disableGutters && t.disableGutters,
                ];
            },
        }),
        useThemeProps: (e) => he({ props: e, name: "MuiContainer" }),
    }),
    o1 = iO,
    sO = (e, t) =>
        w(
            {
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                boxSizing: "border-box",
                WebkitTextSizeAdjust: "100%",
            },
            t && !e.vars && { colorScheme: e.palette.mode }
        ),
    aO = (e) =>
        w({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
            backgroundColor: (e.vars || e).palette.background.default,
            "@media print": {
                backgroundColor: (e.vars || e).palette.common.white,
            },
        }),
    lO = (e, t = !1) => {
        var n, r;
        const o = {};
        t &&
            e.colorSchemes &&
            Object.entries(e.colorSchemes).forEach(([a, l]) => {
                var u;
                o[e.getColorSchemeSelector(a).replace(/\s*&/, "")] = {
                    colorScheme: (u = l.palette) == null ? void 0 : u.mode,
                };
            });
        let i = w(
            {
                html: sO(e, t),
                "*, *::before, *::after": { boxSizing: "inherit" },
                "strong, b": { fontWeight: e.typography.fontWeightBold },
                body: w({ margin: 0 }, aO(e), {
                    "&::backdrop": {
                        backgroundColor: (e.vars || e).palette.background
                            .default,
                    },
                }),
            },
            o
        );
        const s =
            (n = e.components) == null || (r = n.MuiCssBaseline) == null
                ? void 0
                : r.styleOverrides;
        return s && (i = [i, s]), i;
    };
function uO(e) {
    const t = he({ props: e, name: "MuiCssBaseline" }),
        { children: n, enableColorScheme: r = !1 } = t;
    return le(b.Fragment, {
        children: [R(n1, { styles: (o) => lO(o, r) }), n],
    });
}
const cO = [
        "BackdropComponent",
        "BackdropProps",
        "closeAfterTransition",
        "children",
        "component",
        "components",
        "componentsProps",
        "disableAutoFocus",
        "disableEnforceFocus",
        "disableEscapeKeyDown",
        "disablePortal",
        "disableRestoreFocus",
        "disableScrollLock",
        "hideBackdrop",
        "keepMounted",
        "slotProps",
        "slots",
        "theme",
    ],
    dO = (e) => e.classes,
    fO = X("div", {
        name: "MuiModal",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, !n.open && n.exited && t.hidden];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                position: "fixed",
                zIndex: (e.vars || e).zIndex.modal,
                right: 0,
                bottom: 0,
                top: 0,
                left: 0,
            },
            !t.open && t.exited && { visibility: "hidden" }
        )
    ),
    pO = X(KT, {
        name: "MuiModal",
        slot: "Backdrop",
        overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    hO = b.forwardRef(function (t, n) {
        var r, o, i, s, a, l;
        const u = he({ name: "MuiModal", props: t }),
            {
                BackdropComponent: d = pO,
                BackdropProps: f,
                closeAfterTransition: c = !1,
                children: h,
                component: g,
                components: p = {},
                componentsProps: S = {},
                disableAutoFocus: v = !1,
                disableEnforceFocus: m = !1,
                disableEscapeKeyDown: y = !1,
                disablePortal: x = !1,
                disableRestoreFocus: C = !1,
                disableScrollLock: k = !1,
                hideBackdrop: E = !1,
                keepMounted: T = !1,
                slotProps: O,
                slots: P,
                theme: z,
            } = u,
            G = Q(u, cO),
            [U, A] = b.useState(!0),
            F = {
                closeAfterTransition: c,
                disableAutoFocus: v,
                disableEnforceFocus: m,
                disableEscapeKeyDown: y,
                disablePortal: x,
                disableRestoreFocus: C,
                disableScrollLock: k,
                hideBackdrop: E,
                keepMounted: T,
            },
            j = w({}, u, F, { exited: U }),
            ee = dO(j),
            $ =
                (r = (o = P == null ? void 0 : P.root) != null ? o : p.Root) !=
                null
                    ? r
                    : fO,
            M =
                (i =
                    (s = P == null ? void 0 : P.backdrop) != null
                        ? s
                        : p.Backdrop) != null
                    ? i
                    : d,
            L = (a = O == null ? void 0 : O.root) != null ? a : S.root,
            W = (l = O == null ? void 0 : O.backdrop) != null ? l : S.backdrop;
        return R(
            DP,
            w(
                {
                    slots: { root: $, backdrop: M },
                    slotProps: {
                        root: () =>
                            w({}, Rd(L, j), !ei($) && { as: g, theme: z }),
                        backdrop: () => w({}, f, Rd(W, j)),
                    },
                    onTransitionEnter: () => A(!1),
                    onTransitionExited: () => A(!0),
                    ref: n,
                },
                G,
                { classes: ee },
                F,
                { children: h }
            )
        );
    }),
    i1 = hO;
function mO(e) {
    return me("MuiDivider", e);
}
ye("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
]);
const gO = [
        "absolute",
        "children",
        "className",
        "component",
        "flexItem",
        "light",
        "orientation",
        "role",
        "textAlign",
        "variant",
    ],
    vO = (e) => {
        const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: i,
            orientation: s,
            textAlign: a,
            variant: l,
        } = e;
        return ve(
            {
                root: [
                    "root",
                    t && "absolute",
                    l,
                    i && "light",
                    s === "vertical" && "vertical",
                    o && "flexItem",
                    n && "withChildren",
                    n && s === "vertical" && "withChildrenVertical",
                    a === "right" && s !== "vertical" && "textAlignRight",
                    a === "left" && s !== "vertical" && "textAlignLeft",
                ],
                wrapper: ["wrapper", s === "vertical" && "wrapperVertical"],
            },
            mO,
            r
        );
    },
    yO = X("div", {
        name: "MuiDivider",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.absolute && t.absolute,
                t[n.variant],
                n.light && t.light,
                n.orientation === "vertical" && t.vertical,
                n.flexItem && t.flexItem,
                n.children && t.withChildren,
                n.children &&
                    n.orientation === "vertical" &&
                    t.withChildrenVertical,
                n.textAlign === "right" &&
                    n.orientation !== "vertical" &&
                    t.textAlignRight,
                n.textAlign === "left" &&
                    n.orientation !== "vertical" &&
                    t.textAlignLeft,
            ];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    margin: 0,
                    flexShrink: 0,
                    borderWidth: 0,
                    borderStyle: "solid",
                    borderColor: (e.vars || e).palette.divider,
                    borderBottomWidth: "thin",
                },
                t.absolute && {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                },
                t.light && {
                    borderColor: e.vars
                        ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
                        : _e(e.palette.divider, 0.08),
                },
                t.variant === "inset" && { marginLeft: 72 },
                t.variant === "middle" &&
                    t.orientation === "horizontal" && {
                        marginLeft: e.spacing(2),
                        marginRight: e.spacing(2),
                    },
                t.variant === "middle" &&
                    t.orientation === "vertical" && {
                        marginTop: e.spacing(1),
                        marginBottom: e.spacing(1),
                    },
                t.orientation === "vertical" && {
                    height: "100%",
                    borderBottomWidth: 0,
                    borderRightWidth: "thin",
                },
                t.flexItem && { alignSelf: "stretch", height: "auto" }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.children && {
                    display: "flex",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    border: 0,
                    "&::before, &::after": {
                        position: "relative",
                        width: "100%",
                        borderTop: `thin solid ${
                            (e.vars || e).palette.divider
                        }`,
                        top: "50%",
                        content: '""',
                        transform: "translateY(50%)",
                    },
                }
            ),
        ({ theme: e, ownerState: t }) =>
            w(
                {},
                t.children &&
                    t.orientation === "vertical" && {
                        flexDirection: "column",
                        "&::before, &::after": {
                            height: "100%",
                            top: "0%",
                            left: "50%",
                            borderTop: 0,
                            borderLeft: `thin solid ${
                                (e.vars || e).palette.divider
                            }`,
                            transform: "translateX(0%)",
                        },
                    }
            ),
        ({ ownerState: e }) =>
            w(
                {},
                e.textAlign === "right" &&
                    e.orientation !== "vertical" && {
                        "&::before": { width: "90%" },
                        "&::after": { width: "10%" },
                    },
                e.textAlign === "left" &&
                    e.orientation !== "vertical" && {
                        "&::before": { width: "10%" },
                        "&::after": { width: "90%" },
                    }
            )
    ),
    bO = X("span", {
        name: "MuiDivider",
        slot: "Wrapper",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.wrapper,
                n.orientation === "vertical" && t.wrapperVertical,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                display: "inline-block",
                paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
                paddingRight: `calc(${e.spacing(1)} * 1.2)`,
            },
            t.orientation === "vertical" && {
                paddingTop: `calc(${e.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
            }
        )
    ),
    xO = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiDivider" }),
            {
                absolute: o = !1,
                children: i,
                className: s,
                component: a = i ? "div" : "hr",
                flexItem: l = !1,
                light: u = !1,
                orientation: d = "horizontal",
                role: f = a !== "hr" ? "separator" : void 0,
                textAlign: c = "center",
                variant: h = "fullWidth",
            } = r,
            g = Q(r, gO),
            p = w({}, r, {
                absolute: o,
                component: a,
                flexItem: l,
                light: u,
                orientation: d,
                role: f,
                textAlign: c,
                variant: h,
            }),
            S = vO(p);
        return R(
            yO,
            w(
                {
                    as: a,
                    className: Z(S.root, s),
                    role: f,
                    ref: n,
                    ownerState: p,
                },
                g,
                {
                    children: i
                        ? R(bO, {
                              className: S.wrapper,
                              ownerState: p,
                              children: i,
                          })
                        : null,
                }
            )
        );
    }),
    Wo = xO,
    wO = [
        "addEndListener",
        "appear",
        "children",
        "container",
        "direction",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ];
function SO(e, t, n) {
    const r = t.getBoundingClientRect(),
        o = n && n.getBoundingClientRect(),
        i = Hn(t);
    let s;
    if (t.fakeTransform) s = t.fakeTransform;
    else {
        const u = i.getComputedStyle(t);
        s =
            u.getPropertyValue("-webkit-transform") ||
            u.getPropertyValue("transform");
    }
    let a = 0,
        l = 0;
    if (s && s !== "none" && typeof s == "string") {
        const u = s.split("(")[1].split(")")[0].split(",");
        (a = parseInt(u[4], 10)), (l = parseInt(u[5], 10));
    }
    return e === "left"
        ? o
            ? `translateX(${o.right + a - r.left}px)`
            : `translateX(${i.innerWidth + a - r.left}px)`
        : e === "right"
        ? o
            ? `translateX(-${r.right - o.left - a}px)`
            : `translateX(-${r.left + r.width - a}px)`
        : e === "up"
        ? o
            ? `translateY(${o.bottom + l - r.top}px)`
            : `translateY(${i.innerHeight + l - r.top}px)`
        : o
        ? `translateY(-${r.top - o.top + r.height - l}px)`
        : `translateY(-${r.top + r.height - l}px)`;
}
function CO(e) {
    return typeof e == "function" ? e() : e;
}
function aa(e, t, n) {
    const r = CO(n),
        o = SO(e, t, r);
    o && ((t.style.webkitTransform = o), (t.style.transform = o));
}
const EO = b.forwardRef(function (t, n) {
        const r = li(),
            o = {
                enter: r.transitions.easing.easeOut,
                exit: r.transitions.easing.sharp,
            },
            i = {
                enter: r.transitions.duration.enteringScreen,
                exit: r.transitions.duration.leavingScreen,
            },
            {
                addEndListener: s,
                appear: a = !0,
                children: l,
                container: u,
                direction: d = "down",
                easing: f = o,
                in: c,
                onEnter: h,
                onEntered: g,
                onEntering: p,
                onExit: S,
                onExited: v,
                onExiting: m,
                style: y,
                timeout: x = i,
                TransitionComponent: C = gu,
            } = t,
            k = Q(t, wO),
            E = b.useRef(null),
            T = rt(l.ref, E, n),
            O = ($) => (M) => {
                $ && (M === void 0 ? $(E.current) : $(E.current, M));
            },
            P = O(($, M) => {
                aa(d, $, u), gp($), h && h($, M);
            }),
            z = O(($, M) => {
                const L = wr(
                    { timeout: x, style: y, easing: f },
                    { mode: "enter" }
                );
                ($.style.webkitTransition = r.transitions.create(
                    "-webkit-transform",
                    w({}, L)
                )),
                    ($.style.transition = r.transitions.create(
                        "transform",
                        w({}, L)
                    )),
                    ($.style.webkitTransform = "none"),
                    ($.style.transform = "none"),
                    p && p($, M);
            }),
            G = O(g),
            U = O(m),
            A = O(($) => {
                const M = wr(
                    { timeout: x, style: y, easing: f },
                    { mode: "exit" }
                );
                ($.style.webkitTransition = r.transitions.create(
                    "-webkit-transform",
                    M
                )),
                    ($.style.transition = r.transitions.create("transform", M)),
                    aa(d, $, u),
                    S && S($);
            }),
            F = O(($) => {
                ($.style.webkitTransition = ""),
                    ($.style.transition = ""),
                    v && v($);
            }),
            j = ($) => {
                s && s(E.current, $);
            },
            ee = b.useCallback(() => {
                E.current && aa(d, E.current, u);
            }, [d, u]);
        return (
            b.useEffect(() => {
                if (c || d === "down" || d === "right") return;
                const $ = Jf(() => {
                        E.current && aa(d, E.current, u);
                    }),
                    M = Hn(E.current);
                return (
                    M.addEventListener("resize", $),
                    () => {
                        $.clear(), M.removeEventListener("resize", $);
                    }
                );
            }, [d, c, u]),
            b.useEffect(() => {
                c || ee();
            }, [c, ee]),
            R(
                C,
                w(
                    {
                        nodeRef: E,
                        onEnter: P,
                        onEntered: G,
                        onEntering: z,
                        onExit: A,
                        onExited: F,
                        onExiting: U,
                        addEndListener: j,
                        appear: a,
                        in: c,
                        timeout: x,
                    },
                    k,
                    {
                        children: ($, M) =>
                            b.cloneElement(
                                l,
                                w(
                                    {
                                        ref: T,
                                        style: w(
                                            {
                                                visibility:
                                                    $ === "exited" && !c
                                                        ? "hidden"
                                                        : void 0,
                                            },
                                            y,
                                            l.props.style
                                        ),
                                    },
                                    M
                                )
                            ),
                    }
                )
            )
        );
    }),
    kO = EO;
function RO(e) {
    return me("MuiDrawer", e);
}
ye("MuiDrawer", [
    "root",
    "docked",
    "paper",
    "paperAnchorLeft",
    "paperAnchorRight",
    "paperAnchorTop",
    "paperAnchorBottom",
    "paperAnchorDockedLeft",
    "paperAnchorDockedRight",
    "paperAnchorDockedTop",
    "paperAnchorDockedBottom",
    "modal",
]);
const PO = ["BackdropProps"],
    $O = [
        "anchor",
        "BackdropProps",
        "children",
        "className",
        "elevation",
        "hideBackdrop",
        "ModalProps",
        "onClose",
        "open",
        "PaperProps",
        "SlideProps",
        "TransitionComponent",
        "transitionDuration",
        "variant",
    ],
    s1 = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            (n.variant === "permanent" || n.variant === "persistent") &&
                t.docked,
            t.modal,
        ];
    },
    TO = (e) => {
        const { classes: t, anchor: n, variant: r } = e,
            o = {
                root: ["root"],
                docked: [(r === "permanent" || r === "persistent") && "docked"],
                modal: ["modal"],
                paper: [
                    "paper",
                    `paperAnchor${V(n)}`,
                    r !== "temporary" && `paperAnchorDocked${V(n)}`,
                ],
            };
        return ve(o, RO, t);
    },
    OO = X(i1, { name: "MuiDrawer", slot: "Root", overridesResolver: s1 })(
        ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
    ),
    ig = X("div", {
        shouldForwardProp: yn,
        name: "MuiDrawer",
        slot: "Docked",
        skipVariantsResolver: !1,
        overridesResolver: s1,
    })({ flex: "0 0 auto" }),
    IO = X(zs, {
        name: "MuiDrawer",
        slot: "Paper",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.paper,
                t[`paperAnchor${V(n.anchor)}`],
                n.variant !== "temporary" &&
                    t[`paperAnchorDocked${V(n.anchor)}`],
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                flex: "1 0 auto",
                zIndex: (e.vars || e).zIndex.drawer,
                WebkitOverflowScrolling: "touch",
                position: "fixed",
                top: 0,
                outline: 0,
            },
            t.anchor === "left" && { left: 0 },
            t.anchor === "top" && {
                top: 0,
                left: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
            },
            t.anchor === "right" && { right: 0 },
            t.anchor === "bottom" && {
                top: "auto",
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
            },
            t.anchor === "left" &&
                t.variant !== "temporary" && {
                    borderRight: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "top" &&
                t.variant !== "temporary" && {
                    borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "right" &&
                t.variant !== "temporary" && {
                    borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
                },
            t.anchor === "bottom" &&
                t.variant !== "temporary" && {
                    borderTop: `1px solid ${(e.vars || e).palette.divider}`,
                }
        )
    ),
    a1 = { left: "right", right: "left", top: "down", bottom: "up" };
function _O(e) {
    return ["left", "right"].indexOf(e) !== -1;
}
function MO(e, t) {
    return e.direction === "rtl" && _O(t) ? a1[t] : t;
}
const NO = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiDrawer" }),
            o = li(),
            i = {
                enter: o.transitions.duration.enteringScreen,
                exit: o.transitions.duration.leavingScreen,
            },
            {
                anchor: s = "left",
                BackdropProps: a,
                children: l,
                className: u,
                elevation: d = 16,
                hideBackdrop: f = !1,
                ModalProps: { BackdropProps: c } = {},
                onClose: h,
                open: g = !1,
                PaperProps: p = {},
                SlideProps: S,
                TransitionComponent: v = kO,
                transitionDuration: m = i,
                variant: y = "temporary",
            } = r,
            x = Q(r.ModalProps, PO),
            C = Q(r, $O),
            k = b.useRef(!1);
        b.useEffect(() => {
            k.current = !0;
        }, []);
        const E = MO(o, s),
            O = w({}, r, { anchor: s, elevation: d, open: g, variant: y }, C),
            P = TO(O),
            z = R(
                IO,
                w({ elevation: y === "temporary" ? d : 0, square: !0 }, p, {
                    className: Z(P.paper, p.className),
                    ownerState: O,
                    children: l,
                })
            );
        if (y === "permanent")
            return R(
                ig,
                w(
                    {
                        className: Z(P.root, P.docked, u),
                        ownerState: O,
                        ref: n,
                    },
                    C,
                    { children: z }
                )
            );
        const G = R(
            v,
            w({ in: g, direction: a1[E], timeout: m, appear: k.current }, S, {
                children: z,
            })
        );
        return y === "persistent"
            ? R(
                  ig,
                  w(
                      {
                          className: Z(P.root, P.docked, u),
                          ownerState: O,
                          ref: n,
                      },
                      C,
                      { children: G }
                  )
              )
            : R(
                  OO,
                  w(
                      {
                          BackdropProps: w({}, a, c, { transitionDuration: m }),
                          className: Z(P.root, P.modal, u),
                          open: g,
                          ownerState: O,
                          onClose: h,
                          hideBackdrop: f,
                          ref: n,
                      },
                      C,
                      x,
                      { children: G }
                  )
              );
    }),
    AO = NO,
    LO = [
        "disableUnderline",
        "components",
        "componentsProps",
        "fullWidth",
        "hiddenLabel",
        "inputComponent",
        "multiline",
        "slotProps",
        "slots",
        "type",
    ],
    DO = (e) => {
        const { classes: t, disableUnderline: n } = e,
            o = ve(
                { root: ["root", !n && "underline"], input: ["input"] },
                NT,
                t
            );
        return w({}, t, o);
    },
    zO = X(xu, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiFilledInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [...yu(e, t), !n.disableUnderline && t.underline];
        },
    })(({ theme: e, ownerState: t }) => {
        var n;
        const r = e.palette.mode === "light",
            o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
            i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
            s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
            a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
        return w(
            {
                position: "relative",
                backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
                borderTopLeftRadius: (e.vars || e).shape.borderRadius,
                borderTopRightRadius: (e.vars || e).shape.borderRadius,
                transition: e.transitions.create("background-color", {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                }),
                "&:hover": {
                    backgroundColor: e.vars
                        ? e.vars.palette.FilledInput.hoverBg
                        : s,
                    "@media (hover: none)": {
                        backgroundColor: e.vars
                            ? e.vars.palette.FilledInput.bg
                            : i,
                    },
                },
                [`&.${Tr.focused}`]: {
                    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
                },
                [`&.${Tr.disabled}`]: {
                    backgroundColor: e.vars
                        ? e.vars.palette.FilledInput.disabledBg
                        : a,
                },
            },
            !t.disableUnderline && {
                "&:after": {
                    borderBottom: `2px solid ${
                        (n = (e.vars || e).palette[t.color || "primary"]) ==
                        null
                            ? void 0
                            : n.main
                    }`,
                    left: 0,
                    bottom: 0,
                    content: '""',
                    position: "absolute",
                    right: 0,
                    transform: "scaleX(0)",
                    transition: e.transitions.create("transform", {
                        duration: e.transitions.duration.shorter,
                        easing: e.transitions.easing.easeOut,
                    }),
                    pointerEvents: "none",
                },
                [`&.${Tr.focused}:after`]: {
                    transform: "scaleX(1) translateX(0)",
                },
                [`&.${Tr.error}`]: {
                    "&:before, &:after": {
                        borderBottomColor: (e.vars || e).palette.error.main,
                    },
                },
                "&:before": {
                    borderBottom: `1px solid ${
                        e.vars
                            ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`
                            : o
                    }`,
                    left: 0,
                    bottom: 0,
                    content: '"\\00a0"',
                    position: "absolute",
                    right: 0,
                    transition: e.transitions.create("border-bottom-color", {
                        duration: e.transitions.duration.shorter,
                    }),
                    pointerEvents: "none",
                },
                [`&:hover:not(.${Tr.disabled}, .${Tr.error}):before`]: {
                    borderBottom: `1px solid ${
                        (e.vars || e).palette.text.primary
                    }`,
                },
                [`&.${Tr.disabled}:before`]: { borderBottomStyle: "dotted" },
            },
            t.startAdornment && { paddingLeft: 12 },
            t.endAdornment && { paddingRight: 12 },
            t.multiline &&
                w(
                    { padding: "25px 12px 8px" },
                    t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
                    t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 }
                )
        );
    }),
    FO = X(wu, {
        name: "MuiFilledInput",
        slot: "Input",
        overridesResolver: bu,
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                paddingTop: 25,
                paddingRight: 12,
                paddingBottom: 8,
                paddingLeft: 12,
            },
            !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow:
                        e.palette.mode === "light"
                            ? null
                            : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor:
                        e.palette.mode === "light" ? null : "#fff",
                    caretColor: e.palette.mode === "light" ? null : "#fff",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                },
            },
            e.vars && {
                "&:-webkit-autofill": {
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit",
                },
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff",
                    },
                },
            },
            t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
            t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
            t.multiline && {
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
            },
            t.startAdornment && { paddingLeft: 0 },
            t.endAdornment && { paddingRight: 0 },
            t.hiddenLabel &&
                t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    ),
    l1 = b.forwardRef(function (t, n) {
        var r, o, i, s;
        const a = he({ props: t, name: "MuiFilledInput" }),
            {
                components: l = {},
                componentsProps: u,
                fullWidth: d = !1,
                inputComponent: f = "input",
                multiline: c = !1,
                slotProps: h,
                slots: g = {},
                type: p = "text",
            } = a,
            S = Q(a, LO),
            v = w({}, a, {
                fullWidth: d,
                inputComponent: f,
                multiline: c,
                type: p,
            }),
            m = DO(a),
            y = { root: { ownerState: v }, input: { ownerState: v } },
            x = h ?? u ? _t(h ?? u, y) : y,
            C = (r = (o = g.root) != null ? o : l.Root) != null ? r : zO,
            k = (i = (s = g.input) != null ? s : l.Input) != null ? i : FO;
        return R(
            bp,
            w(
                {
                    slots: { root: C, input: k },
                    componentsProps: x,
                    fullWidth: d,
                    inputComponent: f,
                    multiline: c,
                    ref: n,
                    type: p,
                },
                S,
                { classes: m }
            )
        );
    });
l1.muiName = "Input";
const u1 = l1;
function BO(e) {
    return me("MuiFormControl", e);
}
ye("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled",
]);
const jO = [
        "children",
        "className",
        "color",
        "component",
        "disabled",
        "error",
        "focused",
        "fullWidth",
        "hiddenLabel",
        "margin",
        "required",
        "size",
        "variant",
    ],
    UO = (e) => {
        const { classes: t, margin: n, fullWidth: r } = e,
            o = {
                root: [
                    "root",
                    n !== "none" && `margin${V(n)}`,
                    r && "fullWidth",
                ],
            };
        return ve(o, BO, t);
    },
    WO = X("div", {
        name: "MuiFormControl",
        slot: "Root",
        overridesResolver: ({ ownerState: e }, t) =>
            w(
                {},
                t.root,
                t[`margin${V(e.margin)}`],
                e.fullWidth && t.fullWidth
            ),
    })(({ ownerState: e }) =>
        w(
            {
                display: "inline-flex",
                flexDirection: "column",
                position: "relative",
                minWidth: 0,
                padding: 0,
                margin: 0,
                border: 0,
                verticalAlign: "top",
            },
            e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
            e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
            e.fullWidth && { width: "100%" }
        )
    ),
    VO = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiFormControl" }),
            {
                children: o,
                className: i,
                color: s = "primary",
                component: a = "div",
                disabled: l = !1,
                error: u = !1,
                focused: d,
                fullWidth: f = !1,
                hiddenLabel: c = !1,
                margin: h = "none",
                required: g = !1,
                size: p = "medium",
                variant: S = "outlined",
            } = r,
            v = Q(r, jO),
            m = w({}, r, {
                color: s,
                component: a,
                disabled: l,
                error: u,
                fullWidth: f,
                hiddenLabel: c,
                margin: h,
                required: g,
                size: p,
                variant: S,
            }),
            y = UO(m),
            [x, C] = b.useState(() => {
                let U = !1;
                return (
                    o &&
                        b.Children.forEach(o, (A) => {
                            if (!Ea(A, ["Input", "Select"])) return;
                            const F = Ea(A, ["Select"]) ? A.props.input : A;
                            F && CT(F.props) && (U = !0);
                        }),
                    U
                );
            }),
            [k, E] = b.useState(() => {
                let U = !1;
                return (
                    o &&
                        b.Children.forEach(o, (A) => {
                            Ea(A, ["Input", "Select"]) &&
                                yp(A.props, !0) &&
                                (U = !0);
                        }),
                    U
                );
            }),
            [T, O] = b.useState(!1);
        l && T && O(!1);
        const P = d !== void 0 && !l ? d : T;
        let z;
        const G = b.useMemo(
            () => ({
                adornedStart: x,
                setAdornedStart: C,
                color: s,
                disabled: l,
                error: u,
                filled: k,
                focused: P,
                fullWidth: f,
                hiddenLabel: c,
                size: p,
                onBlur: () => {
                    O(!1);
                },
                onEmpty: () => {
                    E(!1);
                },
                onFilled: () => {
                    E(!0);
                },
                onFocus: () => {
                    O(!0);
                },
                registerEffect: z,
                required: g,
                variant: S,
            }),
            [x, s, l, u, k, P, f, c, z, g, p, S]
        );
        return R(vp.Provider, {
            value: G,
            children: R(
                WO,
                w(
                    { as: a, ownerState: m, className: Z(y.root, i), ref: n },
                    v,
                    { children: o }
                )
            ),
        });
    }),
    HO = VO;
function KO(e) {
    return me("MuiFormHelperText", e);
}
const GO = ye("MuiFormHelperText", [
        "root",
        "error",
        "disabled",
        "sizeSmall",
        "sizeMedium",
        "contained",
        "focused",
        "filled",
        "required",
    ]),
    sg = GO;
var ag;
const qO = [
        "children",
        "className",
        "component",
        "disabled",
        "error",
        "filled",
        "focused",
        "margin",
        "required",
        "variant",
    ],
    YO = (e) => {
        const {
                classes: t,
                contained: n,
                size: r,
                disabled: o,
                error: i,
                filled: s,
                focused: a,
                required: l,
            } = e,
            u = {
                root: [
                    "root",
                    o && "disabled",
                    i && "error",
                    r && `size${V(r)}`,
                    n && "contained",
                    a && "focused",
                    s && "filled",
                    l && "required",
                ],
            };
        return ve(u, KO, t);
    },
    XO = X("p", {
        name: "MuiFormHelperText",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                n.size && t[`size${V(n.size)}`],
                n.contained && t.contained,
                n.filled && t.filled,
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            { color: (e.vars || e).palette.text.secondary },
            e.typography.caption,
            {
                textAlign: "left",
                marginTop: 3,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                [`&.${sg.disabled}`]: {
                    color: (e.vars || e).palette.text.disabled,
                },
                [`&.${sg.error}`]: { color: (e.vars || e).palette.error.main },
            },
            t.size === "small" && { marginTop: 4 },
            t.contained && { marginLeft: 14, marginRight: 14 }
        )
    ),
    QO = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiFormHelperText" }),
            { children: o, className: i, component: s = "p" } = r,
            a = Q(r, qO),
            l = ci(),
            u = ui({
                props: r,
                muiFormControl: l,
                states: [
                    "variant",
                    "size",
                    "disabled",
                    "error",
                    "filled",
                    "focused",
                    "required",
                ],
            }),
            d = w({}, r, {
                component: s,
                contained: u.variant === "filled" || u.variant === "outlined",
                variant: u.variant,
                size: u.size,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required,
            }),
            f = YO(d);
        return R(
            XO,
            w({ as: s, ownerState: d, className: Z(f.root, i), ref: n }, a, {
                children:
                    o === " "
                        ? ag ||
                          (ag = R("span", {
                              className: "notranslate",
                              children: "​",
                          }))
                        : o,
            })
        );
    }),
    JO = QO;
function ZO(e) {
    return me("MuiFormLabel", e);
}
const eI = ye("MuiFormLabel", [
        "root",
        "colorSecondary",
        "focused",
        "disabled",
        "error",
        "filled",
        "required",
        "asterisk",
    ]),
    Qi = eI,
    tI = [
        "children",
        "className",
        "color",
        "component",
        "disabled",
        "error",
        "filled",
        "focused",
        "required",
    ],
    nI = (e) => {
        const {
                classes: t,
                color: n,
                focused: r,
                disabled: o,
                error: i,
                filled: s,
                required: a,
            } = e,
            l = {
                root: [
                    "root",
                    `color${V(n)}`,
                    o && "disabled",
                    i && "error",
                    s && "filled",
                    r && "focused",
                    a && "required",
                ],
                asterisk: ["asterisk", i && "error"],
            };
        return ve(l, ZO, t);
    },
    rI = X("label", {
        name: "MuiFormLabel",
        slot: "Root",
        overridesResolver: ({ ownerState: e }, t) =>
            w(
                {},
                t.root,
                e.color === "secondary" && t.colorSecondary,
                e.filled && t.filled
            ),
    })(({ theme: e, ownerState: t }) =>
        w({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
            lineHeight: "1.4375em",
            padding: 0,
            position: "relative",
            [`&.${Qi.focused}`]: { color: (e.vars || e).palette[t.color].main },
            [`&.${Qi.disabled}`]: {
                color: (e.vars || e).palette.text.disabled,
            },
            [`&.${Qi.error}`]: { color: (e.vars || e).palette.error.main },
        })
    ),
    oI = X("span", {
        name: "MuiFormLabel",
        slot: "Asterisk",
        overridesResolver: (e, t) => t.asterisk,
    })(({ theme: e }) => ({
        [`&.${Qi.error}`]: { color: (e.vars || e).palette.error.main },
    })),
    iI = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiFormLabel" }),
            { children: o, className: i, component: s = "label" } = r,
            a = Q(r, tI),
            l = ci(),
            u = ui({
                props: r,
                muiFormControl: l,
                states: [
                    "color",
                    "required",
                    "focused",
                    "disabled",
                    "error",
                    "filled",
                ],
            }),
            d = w({}, r, {
                color: u.color || "primary",
                component: s,
                disabled: u.disabled,
                error: u.error,
                filled: u.filled,
                focused: u.focused,
                required: u.required,
            }),
            f = nI(d);
        return le(
            rI,
            w({ as: s, ownerState: d, className: Z(f.root, i), ref: n }, a, {
                children: [
                    o,
                    u.required &&
                        le(oI, {
                            ownerState: d,
                            "aria-hidden": !0,
                            className: f.asterisk,
                            children: [" ", "*"],
                        }),
                ],
            })
        );
    }),
    sI = iI,
    aI = [
        "addEndListener",
        "appear",
        "children",
        "easing",
        "in",
        "onEnter",
        "onEntered",
        "onEntering",
        "onExit",
        "onExited",
        "onExiting",
        "style",
        "timeout",
        "TransitionComponent",
    ];
function Od(e) {
    return `scale(${e}, ${e ** 2})`;
}
const lI = {
        entering: { opacity: 1, transform: Od(1) },
        entered: { opacity: 1, transform: "none" },
    },
    dc =
        typeof navigator < "u" &&
        /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
        /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
    c1 = b.forwardRef(function (t, n) {
        const {
                addEndListener: r,
                appear: o = !0,
                children: i,
                easing: s,
                in: a,
                onEnter: l,
                onEntered: u,
                onEntering: d,
                onExit: f,
                onExited: c,
                onExiting: h,
                style: g,
                timeout: p = "auto",
                TransitionComponent: S = gu,
            } = t,
            v = Q(t, aI),
            m = b.useRef(),
            y = b.useRef(),
            x = li(),
            C = b.useRef(null),
            k = rt(C, i.ref, n),
            E = (F) => (j) => {
                if (F) {
                    const ee = C.current;
                    j === void 0 ? F(ee) : F(ee, j);
                }
            },
            T = E(d),
            O = E((F, j) => {
                gp(F);
                const {
                    duration: ee,
                    delay: $,
                    easing: M,
                } = wr({ style: g, timeout: p, easing: s }, { mode: "enter" });
                let L;
                p === "auto"
                    ? ((L = x.transitions.getAutoHeightDuration(
                          F.clientHeight
                      )),
                      (y.current = L))
                    : (L = ee),
                    (F.style.transition = [
                        x.transitions.create("opacity", {
                            duration: L,
                            delay: $,
                        }),
                        x.transitions.create("transform", {
                            duration: dc ? L : L * 0.666,
                            delay: $,
                            easing: M,
                        }),
                    ].join(",")),
                    l && l(F, j);
            }),
            P = E(u),
            z = E(h),
            G = E((F) => {
                const {
                    duration: j,
                    delay: ee,
                    easing: $,
                } = wr({ style: g, timeout: p, easing: s }, { mode: "exit" });
                let M;
                p === "auto"
                    ? ((M = x.transitions.getAutoHeightDuration(
                          F.clientHeight
                      )),
                      (y.current = M))
                    : (M = j),
                    (F.style.transition = [
                        x.transitions.create("opacity", {
                            duration: M,
                            delay: ee,
                        }),
                        x.transitions.create("transform", {
                            duration: dc ? M : M * 0.666,
                            delay: dc ? ee : ee || M * 0.333,
                            easing: $,
                        }),
                    ].join(",")),
                    (F.style.opacity = 0),
                    (F.style.transform = Od(0.75)),
                    f && f(F);
            }),
            U = E(c),
            A = (F) => {
                p === "auto" && (m.current = setTimeout(F, y.current || 0)),
                    r && r(C.current, F);
            };
        return (
            b.useEffect(
                () => () => {
                    clearTimeout(m.current);
                },
                []
            ),
            R(
                S,
                w(
                    {
                        appear: o,
                        in: a,
                        nodeRef: C,
                        onEnter: O,
                        onEntered: P,
                        onEntering: T,
                        onExit: G,
                        onExited: U,
                        onExiting: z,
                        addEndListener: A,
                        timeout: p === "auto" ? null : p,
                    },
                    v,
                    {
                        children: (F, j) =>
                            b.cloneElement(
                                i,
                                w(
                                    {
                                        style: w(
                                            {
                                                opacity: 0,
                                                transform: Od(0.75),
                                                visibility:
                                                    F === "exited" && !a
                                                        ? "hidden"
                                                        : void 0,
                                            },
                                            lI[F],
                                            g,
                                            i.props.style
                                        ),
                                        ref: k,
                                    },
                                    j
                                )
                            ),
                    }
                )
            )
        );
    });
c1.muiSupportAuto = !0;
const uI = c1,
    cI = [
        "disableUnderline",
        "components",
        "componentsProps",
        "fullWidth",
        "inputComponent",
        "multiline",
        "slotProps",
        "slots",
        "type",
    ],
    dI = (e) => {
        const { classes: t, disableUnderline: n } = e,
            o = ve(
                { root: ["root", !n && "underline"], input: ["input"] },
                OT,
                t
            );
        return w({}, t, o);
    },
    fI = X(xu, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiInput",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [...yu(e, t), !n.disableUnderline && t.underline];
        },
    })(({ theme: e, ownerState: t }) => {
        let r =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.42)"
                : "rgba(255, 255, 255, 0.7)";
        return (
            e.vars &&
                (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
            w(
                { position: "relative" },
                t.formControl && { "label + &": { marginTop: 16 } },
                !t.disableUnderline && {
                    "&:after": {
                        borderBottom: `2px solid ${
                            (e.vars || e).palette[t.color].main
                        }`,
                        left: 0,
                        bottom: 0,
                        content: '""',
                        position: "absolute",
                        right: 0,
                        transform: "scaleX(0)",
                        transition: e.transitions.create("transform", {
                            duration: e.transitions.duration.shorter,
                            easing: e.transitions.easing.easeOut,
                        }),
                        pointerEvents: "none",
                    },
                    [`&.${Ri.focused}:after`]: {
                        transform: "scaleX(1) translateX(0)",
                    },
                    [`&.${Ri.error}`]: {
                        "&:before, &:after": {
                            borderBottomColor: (e.vars || e).palette.error.main,
                        },
                    },
                    "&:before": {
                        borderBottom: `1px solid ${r}`,
                        left: 0,
                        bottom: 0,
                        content: '"\\00a0"',
                        position: "absolute",
                        right: 0,
                        transition: e.transitions.create(
                            "border-bottom-color",
                            { duration: e.transitions.duration.shorter }
                        ),
                        pointerEvents: "none",
                    },
                    [`&:hover:not(.${Ri.disabled}, .${Ri.error}):before`]: {
                        borderBottom: `2px solid ${
                            (e.vars || e).palette.text.primary
                        }`,
                        "@media (hover: none)": {
                            borderBottom: `1px solid ${r}`,
                        },
                    },
                    [`&.${Ri.disabled}:before`]: {
                        borderBottomStyle: "dotted",
                    },
                }
            )
        );
    }),
    pI = X(wu, { name: "MuiInput", slot: "Input", overridesResolver: bu })({}),
    d1 = b.forwardRef(function (t, n) {
        var r, o, i, s;
        const a = he({ props: t, name: "MuiInput" }),
            {
                disableUnderline: l,
                components: u = {},
                componentsProps: d,
                fullWidth: f = !1,
                inputComponent: c = "input",
                multiline: h = !1,
                slotProps: g,
                slots: p = {},
                type: S = "text",
            } = a,
            v = Q(a, cI),
            m = dI(a),
            x = { root: { ownerState: { disableUnderline: l } } },
            C = g ?? d ? _t(g ?? d, x) : x,
            k = (r = (o = p.root) != null ? o : u.Root) != null ? r : fI,
            E = (i = (s = p.input) != null ? s : u.Input) != null ? i : pI;
        return R(
            bp,
            w(
                {
                    slots: { root: k, input: E },
                    slotProps: C,
                    fullWidth: f,
                    inputComponent: c,
                    multiline: h,
                    ref: n,
                    type: S,
                },
                v,
                { classes: m }
            )
        );
    });
d1.muiName = "Input";
const f1 = d1;
function hI(e) {
    return me("MuiInputLabel", e);
}
ye("MuiInputLabel", [
    "root",
    "focused",
    "disabled",
    "error",
    "required",
    "asterisk",
    "formControl",
    "sizeSmall",
    "shrink",
    "animated",
    "standard",
    "filled",
    "outlined",
]);
const mI = ["disableAnimation", "margin", "shrink", "variant", "className"],
    gI = (e) => {
        const {
                classes: t,
                formControl: n,
                size: r,
                shrink: o,
                disableAnimation: i,
                variant: s,
                required: a,
            } = e,
            u = ve(
                {
                    root: [
                        "root",
                        n && "formControl",
                        !i && "animated",
                        o && "shrink",
                        r === "small" && "sizeSmall",
                        s,
                    ],
                    asterisk: [a && "asterisk"],
                },
                hI,
                t
            );
        return w({}, t, u);
    },
    vI = X(sI, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiInputLabel",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`& .${Qi.asterisk}`]: t.asterisk },
                t.root,
                n.formControl && t.formControl,
                n.size === "small" && t.sizeSmall,
                n.shrink && t.shrink,
                !n.disableAnimation && t.animated,
                t[n.variant],
            ];
        },
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                display: "block",
                transformOrigin: "top left",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
            },
            t.formControl && {
                position: "absolute",
                left: 0,
                top: 0,
                transform: "translate(0, 20px) scale(1)",
            },
            t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
            t.shrink && {
                transform: "translate(0, -1.5px) scale(0.75)",
                transformOrigin: "top left",
                maxWidth: "133%",
            },
            !t.disableAnimation && {
                transition: e.transitions.create(
                    ["color", "transform", "max-width"],
                    {
                        duration: e.transitions.duration.shorter,
                        easing: e.transitions.easing.easeOut,
                    }
                ),
            },
            t.variant === "filled" &&
                w(
                    {
                        zIndex: 1,
                        pointerEvents: "none",
                        transform: "translate(12px, 16px) scale(1)",
                        maxWidth: "calc(100% - 24px)",
                    },
                    t.size === "small" && {
                        transform: "translate(12px, 13px) scale(1)",
                    },
                    t.shrink &&
                        w(
                            {
                                userSelect: "none",
                                pointerEvents: "auto",
                                transform: "translate(12px, 7px) scale(0.75)",
                                maxWidth: "calc(133% - 24px)",
                            },
                            t.size === "small" && {
                                transform: "translate(12px, 4px) scale(0.75)",
                            }
                        )
                ),
            t.variant === "outlined" &&
                w(
                    {
                        zIndex: 1,
                        pointerEvents: "none",
                        transform: "translate(14px, 16px) scale(1)",
                        maxWidth: "calc(100% - 24px)",
                    },
                    t.size === "small" && {
                        transform: "translate(14px, 9px) scale(1)",
                    },
                    t.shrink && {
                        userSelect: "none",
                        pointerEvents: "auto",
                        maxWidth: "calc(133% - 24px)",
                        transform: "translate(14px, -9px) scale(0.75)",
                    }
                )
        )
    ),
    yI = b.forwardRef(function (t, n) {
        const r = he({ name: "MuiInputLabel", props: t }),
            { disableAnimation: o = !1, shrink: i, className: s } = r,
            a = Q(r, mI),
            l = ci();
        let u = i;
        typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
        const d = ui({
                props: r,
                muiFormControl: l,
                states: ["size", "variant", "required"],
            }),
            f = w({}, r, {
                disableAnimation: o,
                formControl: l,
                shrink: u,
                size: d.size,
                variant: d.variant,
                required: d.required,
            }),
            c = gI(f);
        return R(
            vI,
            w(
                {
                    "data-shrink": u,
                    ownerState: f,
                    ref: n,
                    className: Z(c.root, s),
                },
                a,
                { classes: c }
            )
        );
    }),
    bI = yI,
    xI = b.createContext({}),
    Kr = xI;
function wI(e) {
    return me("MuiList", e);
}
ye("MuiList", ["root", "padding", "dense", "subheader"]);
const SI = [
        "children",
        "className",
        "component",
        "dense",
        "disablePadding",
        "subheader",
    ],
    CI = (e) => {
        const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
        return ve(
            { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
            wI,
            t
        );
    },
    EI = X("ul", {
        name: "MuiList",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.root,
                !n.disablePadding && t.padding,
                n.dense && t.dense,
                n.subheader && t.subheader,
            ];
        },
    })(({ ownerState: e }) =>
        w(
            { listStyle: "none", margin: 0, padding: 0, position: "relative" },
            !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
            e.subheader && { paddingTop: 0 }
        )
    ),
    kI = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiList" }),
            {
                children: o,
                className: i,
                component: s = "ul",
                dense: a = !1,
                disablePadding: l = !1,
                subheader: u,
            } = r,
            d = Q(r, SI),
            f = b.useMemo(() => ({ dense: a }), [a]),
            c = w({}, r, { component: s, dense: a, disablePadding: l }),
            h = CI(c);
        return R(Kr.Provider, {
            value: f,
            children: le(
                EI,
                w(
                    { as: s, className: Z(h.root, i), ref: n, ownerState: c },
                    d,
                    { children: [u, o] }
                )
            ),
        });
    }),
    xp = kI;
function RI(e) {
    return me("MuiListItem", e);
}
const PI = ye("MuiListItem", [
        "root",
        "container",
        "focusVisible",
        "dense",
        "alignItemsFlexStart",
        "disabled",
        "divider",
        "gutters",
        "padding",
        "button",
        "secondaryAction",
        "selected",
    ]),
    po = PI;
function $I(e) {
    return me("MuiListItemButton", e);
}
const TI = ye("MuiListItemButton", [
        "root",
        "focusVisible",
        "dense",
        "alignItemsFlexStart",
        "disabled",
        "divider",
        "gutters",
        "selected",
    ]),
    ho = TI,
    OI = [
        "alignItems",
        "autoFocus",
        "component",
        "children",
        "dense",
        "disableGutters",
        "divider",
        "focusVisibleClassName",
        "selected",
        "className",
    ],
    II = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.dense && t.dense,
            n.alignItems === "flex-start" && t.alignItemsFlexStart,
            n.divider && t.divider,
            !n.disableGutters && t.gutters,
        ];
    },
    _I = (e) => {
        const {
                alignItems: t,
                classes: n,
                dense: r,
                disabled: o,
                disableGutters: i,
                divider: s,
                selected: a,
            } = e,
            u = ve(
                {
                    root: [
                        "root",
                        r && "dense",
                        !i && "gutters",
                        s && "divider",
                        o && "disabled",
                        t === "flex-start" && "alignItemsFlexStart",
                        a && "selected",
                    ],
                },
                $I,
                n
            );
        return w({}, n, u);
    },
    MI = X(to, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiListItemButton",
        slot: "Root",
        overridesResolver: II,
    })(({ theme: e, ownerState: t }) =>
        w(
            {
                display: "flex",
                flexGrow: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
                minWidth: 0,
                boxSizing: "border-box",
                textAlign: "left",
                paddingTop: 8,
                paddingBottom: 8,
                transition: e.transitions.create("background-color", {
                    duration: e.transitions.duration.shortest,
                }),
                "&:hover": {
                    textDecoration: "none",
                    backgroundColor: (e.vars || e).palette.action.hover,
                    "@media (hover: none)": { backgroundColor: "transparent" },
                },
                [`&.${ho.selected}`]: {
                    backgroundColor: e.vars
                        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                        : _e(
                              e.palette.primary.main,
                              e.palette.action.selectedOpacity
                          ),
                    [`&.${ho.focusVisible}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                            : _e(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.focusOpacity
                              ),
                    },
                },
                [`&.${ho.selected}:hover`]: {
                    backgroundColor: e.vars
                        ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                        : _e(
                              e.palette.primary.main,
                              e.palette.action.selectedOpacity +
                                  e.palette.action.hoverOpacity
                          ),
                    "@media (hover: none)": {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                            : _e(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity
                              ),
                    },
                },
                [`&.${ho.focusVisible}`]: {
                    backgroundColor: (e.vars || e).palette.action.focus,
                },
                [`&.${ho.disabled}`]: {
                    opacity: (e.vars || e).palette.action.disabledOpacity,
                },
            },
            t.divider && {
                borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                backgroundClip: "padding-box",
            },
            t.alignItems === "flex-start" && { alignItems: "flex-start" },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            t.dense && { paddingTop: 4, paddingBottom: 4 }
        )
    ),
    NI = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiListItemButton" }),
            {
                alignItems: o = "center",
                autoFocus: i = !1,
                component: s = "div",
                children: a,
                dense: l = !1,
                disableGutters: u = !1,
                divider: d = !1,
                focusVisibleClassName: f,
                selected: c = !1,
                className: h,
            } = r,
            g = Q(r, OI),
            p = b.useContext(Kr),
            S = b.useMemo(
                () => ({
                    dense: l || p.dense || !1,
                    alignItems: o,
                    disableGutters: u,
                }),
                [o, p.dense, l, u]
            ),
            v = b.useRef(null);
        xr(() => {
            i && v.current && v.current.focus();
        }, [i]);
        const m = w({}, r, {
                alignItems: o,
                dense: S.dense,
                disableGutters: u,
                divider: d,
                selected: c,
            }),
            y = _I(m),
            x = rt(v, n);
        return R(Kr.Provider, {
            value: S,
            children: R(
                MI,
                w(
                    {
                        ref: x,
                        href: g.href || g.to,
                        component: (g.href || g.to) && s === "div" ? "a" : s,
                        focusVisibleClassName: Z(y.focusVisible, f),
                        ownerState: m,
                        className: Z(y.root, h),
                    },
                    g,
                    { classes: y, children: a }
                )
            ),
        });
    }),
    AI = NI;
function LI(e) {
    return me("MuiListItemSecondaryAction", e);
}
ye("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const DI = ["className"],
    zI = (e) => {
        const { disableGutters: t, classes: n } = e;
        return ve({ root: ["root", t && "disableGutters"] }, LI, n);
    },
    FI = X("div", {
        name: "MuiListItemSecondaryAction",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, n.disableGutters && t.disableGutters];
        },
    })(({ ownerState: e }) =>
        w(
            {
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
            },
            e.disableGutters && { right: 0 }
        )
    ),
    p1 = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiListItemSecondaryAction" }),
            { className: o } = r,
            i = Q(r, DI),
            s = b.useContext(Kr),
            a = w({}, r, { disableGutters: s.disableGutters }),
            l = zI(a);
        return R(FI, w({ className: Z(l.root, o), ownerState: a, ref: n }, i));
    });
p1.muiName = "ListItemSecondaryAction";
const BI = p1,
    jI = ["className"],
    UI = [
        "alignItems",
        "autoFocus",
        "button",
        "children",
        "className",
        "component",
        "components",
        "componentsProps",
        "ContainerComponent",
        "ContainerProps",
        "dense",
        "disabled",
        "disableGutters",
        "disablePadding",
        "divider",
        "focusVisibleClassName",
        "secondaryAction",
        "selected",
        "slotProps",
        "slots",
    ],
    WI = (e, t) => {
        const { ownerState: n } = e;
        return [
            t.root,
            n.dense && t.dense,
            n.alignItems === "flex-start" && t.alignItemsFlexStart,
            n.divider && t.divider,
            !n.disableGutters && t.gutters,
            !n.disablePadding && t.padding,
            n.button && t.button,
            n.hasSecondaryAction && t.secondaryAction,
        ];
    },
    VI = (e) => {
        const {
            alignItems: t,
            button: n,
            classes: r,
            dense: o,
            disabled: i,
            disableGutters: s,
            disablePadding: a,
            divider: l,
            hasSecondaryAction: u,
            selected: d,
        } = e;
        return ve(
            {
                root: [
                    "root",
                    o && "dense",
                    !s && "gutters",
                    !a && "padding",
                    l && "divider",
                    i && "disabled",
                    n && "button",
                    t === "flex-start" && "alignItemsFlexStart",
                    u && "secondaryAction",
                    d && "selected",
                ],
                container: ["container"],
            },
            RI,
            r
        );
    },
    HI = X("div", { name: "MuiListItem", slot: "Root", overridesResolver: WI })(
        ({ theme: e, ownerState: t }) =>
            w(
                {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    position: "relative",
                    textDecoration: "none",
                    width: "100%",
                    boxSizing: "border-box",
                    textAlign: "left",
                },
                !t.disablePadding &&
                    w(
                        { paddingTop: 8, paddingBottom: 8 },
                        t.dense && { paddingTop: 4, paddingBottom: 4 },
                        !t.disableGutters && {
                            paddingLeft: 16,
                            paddingRight: 16,
                        },
                        !!t.secondaryAction && { paddingRight: 48 }
                    ),
                !!t.secondaryAction && {
                    [`& > .${ho.root}`]: { paddingRight: 48 },
                },
                {
                    [`&.${po.focusVisible}`]: {
                        backgroundColor: (e.vars || e).palette.action.focus,
                    },
                    [`&.${po.selected}`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                            : _e(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity
                              ),
                        [`&.${po.focusVisible}`]: {
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                                : _e(
                                      e.palette.primary.main,
                                      e.palette.action.selectedOpacity +
                                          e.palette.action.focusOpacity
                                  ),
                        },
                    },
                    [`&.${po.disabled}`]: {
                        opacity: (e.vars || e).palette.action.disabledOpacity,
                    },
                },
                t.alignItems === "flex-start" && { alignItems: "flex-start" },
                t.divider && {
                    borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
                    backgroundClip: "padding-box",
                },
                t.button && {
                    transition: e.transitions.create("background-color", {
                        duration: e.transitions.duration.shortest,
                    }),
                    "&:hover": {
                        textDecoration: "none",
                        backgroundColor: (e.vars || e).palette.action.hover,
                        "@media (hover: none)": {
                            backgroundColor: "transparent",
                        },
                    },
                    [`&.${po.selected}:hover`]: {
                        backgroundColor: e.vars
                            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
                            : _e(
                                  e.palette.primary.main,
                                  e.palette.action.selectedOpacity +
                                      e.palette.action.hoverOpacity
                              ),
                        "@media (hover: none)": {
                            backgroundColor: e.vars
                                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                                : _e(
                                      e.palette.primary.main,
                                      e.palette.action.selectedOpacity
                                  ),
                        },
                    },
                },
                t.hasSecondaryAction && { paddingRight: 48 }
            )
    ),
    KI = X("li", {
        name: "MuiListItem",
        slot: "Container",
        overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    GI = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiListItem" }),
            {
                alignItems: o = "center",
                autoFocus: i = !1,
                button: s = !1,
                children: a,
                className: l,
                component: u,
                components: d = {},
                componentsProps: f = {},
                ContainerComponent: c = "li",
                ContainerProps: { className: h } = {},
                dense: g = !1,
                disabled: p = !1,
                disableGutters: S = !1,
                disablePadding: v = !1,
                divider: m = !1,
                focusVisibleClassName: y,
                secondaryAction: x,
                selected: C = !1,
                slotProps: k = {},
                slots: E = {},
            } = r,
            T = Q(r.ContainerProps, jI),
            O = Q(r, UI),
            P = b.useContext(Kr),
            z = b.useMemo(
                () => ({
                    dense: g || P.dense || !1,
                    alignItems: o,
                    disableGutters: S,
                }),
                [o, P.dense, g, S]
            ),
            G = b.useRef(null);
        xr(() => {
            i && G.current && G.current.focus();
        }, [i]);
        const U = b.Children.toArray(a),
            A = U.length && Ea(U[U.length - 1], ["ListItemSecondaryAction"]),
            F = w({}, r, {
                alignItems: o,
                autoFocus: i,
                button: s,
                dense: z.dense,
                disabled: p,
                disableGutters: S,
                disablePadding: v,
                divider: m,
                hasSecondaryAction: A,
                selected: C,
            }),
            j = VI(F),
            ee = rt(G, n),
            $ = E.root || d.Root || HI,
            M = k.root || f.root || {},
            L = w({ className: Z(j.root, M.className, l), disabled: p }, O);
        let W = u || "li";
        return (
            s &&
                ((L.component = u || "div"),
                (L.focusVisibleClassName = Z(po.focusVisible, y)),
                (W = to)),
            A
                ? ((W = !L.component && !u ? "div" : W),
                  c === "li" &&
                      (W === "li"
                          ? (W = "div")
                          : L.component === "li" && (L.component = "div")),
                  R(Kr.Provider, {
                      value: z,
                      children: le(
                          KI,
                          w(
                              {
                                  as: c,
                                  className: Z(j.container, h),
                                  ref: ee,
                                  ownerState: F,
                              },
                              T,
                              {
                                  children: [
                                      R(
                                          $,
                                          w(
                                              {},
                                              M,
                                              !ei($) && {
                                                  as: W,
                                                  ownerState: w(
                                                      {},
                                                      F,
                                                      M.ownerState
                                                  ),
                                              },
                                              L,
                                              { children: U }
                                          )
                                      ),
                                      U.pop(),
                                  ],
                              }
                          )
                      ),
                  }))
                : R(Kr.Provider, {
                      value: z,
                      children: le(
                          $,
                          w(
                              {},
                              M,
                              { as: W, ref: ee },
                              !ei($) && { ownerState: w({}, F, M.ownerState) },
                              L,
                              { children: [U, x && R(BI, { children: x })] }
                          )
                      ),
                  })
        );
    }),
    qI = GI,
    YI = [
        "actions",
        "autoFocus",
        "autoFocusItem",
        "children",
        "className",
        "disabledItemsFocusable",
        "disableListWrap",
        "onKeyDown",
        "variant",
    ];
function fc(e, t, n) {
    return e === t
        ? e.firstChild
        : t && t.nextElementSibling
        ? t.nextElementSibling
        : n
        ? null
        : e.firstChild;
}
function lg(e, t, n) {
    return e === t
        ? n
            ? e.firstChild
            : e.lastChild
        : t && t.previousElementSibling
        ? t.previousElementSibling
        : n
        ? null
        : e.lastChild;
}
function h1(e, t) {
    if (t === void 0) return !0;
    let n = e.innerText;
    return (
        n === void 0 && (n = e.textContent),
        (n = n.trim().toLowerCase()),
        n.length === 0
            ? !1
            : t.repeating
            ? n[0] === t.keys[0]
            : n.indexOf(t.keys.join("")) === 0
    );
}
function Pi(e, t, n, r, o, i) {
    let s = !1,
        a = o(e, t, t ? n : !1);
    for (; a; ) {
        if (a === e.firstChild) {
            if (s) return !1;
            s = !0;
        }
        const l = r
            ? !1
            : a.disabled || a.getAttribute("aria-disabled") === "true";
        if (!a.hasAttribute("tabindex") || !h1(a, i) || l) a = o(e, a, n);
        else return a.focus(), !0;
    }
    return !1;
}
const XI = b.forwardRef(function (t, n) {
        const {
                actions: r,
                autoFocus: o = !1,
                autoFocusItem: i = !1,
                children: s,
                className: a,
                disabledItemsFocusable: l = !1,
                disableListWrap: u = !1,
                onKeyDown: d,
                variant: f = "selectedMenu",
            } = t,
            c = Q(t, YI),
            h = b.useRef(null),
            g = b.useRef({
                keys: [],
                repeating: !0,
                previousKeyMatched: !0,
                lastTime: null,
            });
        xr(() => {
            o && h.current.focus();
        }, [o]),
            b.useImperativeHandle(
                r,
                () => ({
                    adjustStyleForScrollbar: (y, x) => {
                        const C = !h.current.style.width;
                        if (y.clientHeight < h.current.clientHeight && C) {
                            const k = `${C0(Bt(y))}px`;
                            (h.current.style[
                                x.direction === "rtl"
                                    ? "paddingLeft"
                                    : "paddingRight"
                            ] = k),
                                (h.current.style.width = `calc(100% + ${k})`);
                        }
                        return h.current;
                    },
                }),
                []
            );
        const p = (y) => {
                const x = h.current,
                    C = y.key,
                    k = Bt(x).activeElement;
                if (C === "ArrowDown") y.preventDefault(), Pi(x, k, u, l, fc);
                else if (C === "ArrowUp")
                    y.preventDefault(), Pi(x, k, u, l, lg);
                else if (C === "Home")
                    y.preventDefault(), Pi(x, null, u, l, fc);
                else if (C === "End") y.preventDefault(), Pi(x, null, u, l, lg);
                else if (C.length === 1) {
                    const E = g.current,
                        T = C.toLowerCase(),
                        O = performance.now();
                    E.keys.length > 0 &&
                        (O - E.lastTime > 500
                            ? ((E.keys = []),
                              (E.repeating = !0),
                              (E.previousKeyMatched = !0))
                            : E.repeating &&
                              T !== E.keys[0] &&
                              (E.repeating = !1)),
                        (E.lastTime = O),
                        E.keys.push(T);
                    const P = k && !E.repeating && h1(k, E);
                    E.previousKeyMatched && (P || Pi(x, k, !1, l, fc, E))
                        ? y.preventDefault()
                        : (E.previousKeyMatched = !1);
                }
                d && d(y);
            },
            S = rt(h, n);
        let v = -1;
        b.Children.forEach(s, (y, x) => {
            b.isValidElement(y) &&
                (y.props.disabled ||
                    (((f === "selectedMenu" && y.props.selected) || v === -1) &&
                        (v = x)));
        });
        const m = b.Children.map(s, (y, x) => {
            if (x === v) {
                const C = {};
                return (
                    i && (C.autoFocus = !0),
                    y.props.tabIndex === void 0 &&
                        f === "selectedMenu" &&
                        (C.tabIndex = 0),
                    b.cloneElement(y, C)
                );
            }
            return y;
        });
        return R(
            xp,
            w(
                {
                    role: "menu",
                    ref: S,
                    className: a,
                    onKeyDown: p,
                    tabIndex: o ? 0 : -1,
                },
                c,
                { children: m }
            )
        );
    }),
    QI = XI;
function JI(e) {
    return me("MuiPopover", e);
}
ye("MuiPopover", ["root", "paper"]);
const ZI = ["onEntering"],
    e_ = [
        "action",
        "anchorEl",
        "anchorOrigin",
        "anchorPosition",
        "anchorReference",
        "children",
        "className",
        "container",
        "elevation",
        "marginThreshold",
        "open",
        "PaperProps",
        "transformOrigin",
        "TransitionComponent",
        "transitionDuration",
        "TransitionProps",
    ];
function ug(e, t) {
    let n = 0;
    return (
        typeof t == "number"
            ? (n = t)
            : t === "center"
            ? (n = e.height / 2)
            : t === "bottom" && (n = e.height),
        n
    );
}
function cg(e, t) {
    let n = 0;
    return (
        typeof t == "number"
            ? (n = t)
            : t === "center"
            ? (n = e.width / 2)
            : t === "right" && (n = e.width),
        n
    );
}
function dg(e) {
    return [e.horizontal, e.vertical]
        .map((t) => (typeof t == "number" ? `${t}px` : t))
        .join(" ");
}
function pc(e) {
    return typeof e == "function" ? e() : e;
}
const t_ = (e) => {
        const { classes: t } = e;
        return ve({ root: ["root"], paper: ["paper"] }, JI, t);
    },
    n_ = X(i1, {
        name: "MuiPopover",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    r_ = X(zs, {
        name: "MuiPopover",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper,
    })({
        position: "absolute",
        overflowY: "auto",
        overflowX: "hidden",
        minWidth: 16,
        minHeight: 16,
        maxWidth: "calc(100% - 32px)",
        maxHeight: "calc(100% - 32px)",
        outline: 0,
    }),
    o_ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiPopover" }),
            {
                action: o,
                anchorEl: i,
                anchorOrigin: s = { vertical: "top", horizontal: "left" },
                anchorPosition: a,
                anchorReference: l = "anchorEl",
                children: u,
                className: d,
                container: f,
                elevation: c = 8,
                marginThreshold: h = 16,
                open: g,
                PaperProps: p = {},
                transformOrigin: S = { vertical: "top", horizontal: "left" },
                TransitionComponent: v = uI,
                transitionDuration: m = "auto",
                TransitionProps: { onEntering: y } = {},
            } = r,
            x = Q(r.TransitionProps, ZI),
            C = Q(r, e_),
            k = b.useRef(),
            E = rt(k, p.ref),
            T = w({}, r, {
                anchorOrigin: s,
                anchorReference: l,
                elevation: c,
                marginThreshold: h,
                PaperProps: p,
                transformOrigin: S,
                TransitionComponent: v,
                transitionDuration: m,
                TransitionProps: x,
            }),
            O = t_(T),
            P = b.useCallback(() => {
                if (l === "anchorPosition") return a;
                const L = pc(i),
                    te = (
                        L && L.nodeType === 1 ? L : Bt(k.current).body
                    ).getBoundingClientRect();
                return {
                    top: te.top + ug(te, s.vertical),
                    left: te.left + cg(te, s.horizontal),
                };
            }, [i, s.horizontal, s.vertical, a, l]),
            z = b.useCallback(
                (L) => ({
                    vertical: ug(L, S.vertical),
                    horizontal: cg(L, S.horizontal),
                }),
                [S.horizontal, S.vertical]
            ),
            G = b.useCallback(
                (L) => {
                    const W = { width: L.offsetWidth, height: L.offsetHeight },
                        te = z(W);
                    if (l === "none")
                        return {
                            top: null,
                            left: null,
                            transformOrigin: dg(te),
                        };
                    const Me = P();
                    let ie = Me.top - te.vertical,
                        ge = Me.left - te.horizontal;
                    const K = ie + W.height,
                        ce = ge + W.width,
                        Te = Hn(pc(i)),
                        be = Te.innerHeight - h,
                        Ae = Te.innerWidth - h;
                    if (ie < h) {
                        const ae = ie - h;
                        (ie -= ae), (te.vertical += ae);
                    } else if (K > be) {
                        const ae = K - be;
                        (ie -= ae), (te.vertical += ae);
                    }
                    if (ge < h) {
                        const ae = ge - h;
                        (ge -= ae), (te.horizontal += ae);
                    } else if (ce > Ae) {
                        const ae = ce - Ae;
                        (ge -= ae), (te.horizontal += ae);
                    }
                    return {
                        top: `${Math.round(ie)}px`,
                        left: `${Math.round(ge)}px`,
                        transformOrigin: dg(te),
                    };
                },
                [i, l, P, z, h]
            ),
            [U, A] = b.useState(g),
            F = b.useCallback(() => {
                const L = k.current;
                if (!L) return;
                const W = G(L);
                W.top !== null && (L.style.top = W.top),
                    W.left !== null && (L.style.left = W.left),
                    (L.style.transformOrigin = W.transformOrigin),
                    A(!0);
            }, [G]),
            j = (L, W) => {
                y && y(L, W), F();
            },
            ee = () => {
                A(!1);
            };
        b.useEffect(() => {
            g && F();
        }),
            b.useImperativeHandle(
                o,
                () =>
                    g
                        ? {
                              updatePosition: () => {
                                  F();
                              },
                          }
                        : null,
                [g, F]
            ),
            b.useEffect(() => {
                if (!g) return;
                const L = Jf(() => {
                        F();
                    }),
                    W = Hn(i);
                return (
                    W.addEventListener("resize", L),
                    () => {
                        L.clear(), W.removeEventListener("resize", L);
                    }
                );
            }, [i, g, F]);
        let $ = m;
        m === "auto" && !v.muiSupportAuto && ($ = void 0);
        const M = f || (i ? Bt(pc(i)).body : void 0);
        return R(
            n_,
            w(
                {
                    BackdropProps: { invisible: !0 },
                    className: Z(O.root, d),
                    container: M,
                    open: g,
                    ref: n,
                    ownerState: T,
                },
                C,
                {
                    children: R(
                        v,
                        w(
                            {
                                appear: !0,
                                in: g,
                                onEntering: j,
                                onExited: ee,
                                timeout: $,
                            },
                            x,
                            {
                                children: R(
                                    r_,
                                    w(
                                        { elevation: c },
                                        p,
                                        {
                                            ref: E,
                                            className: Z(O.paper, p.className),
                                        },
                                        U
                                            ? void 0
                                            : {
                                                  style: w({}, p.style, {
                                                      opacity: 0,
                                                  }),
                                              },
                                        { ownerState: T, children: u }
                                    )
                                ),
                            }
                        )
                    ),
                }
            )
        );
    }),
    i_ = o_;
function s_(e) {
    return me("MuiMenu", e);
}
ye("MuiMenu", ["root", "paper", "list"]);
const a_ = ["onEntering"],
    l_ = [
        "autoFocus",
        "children",
        "disableAutoFocusItem",
        "MenuListProps",
        "onClose",
        "open",
        "PaperProps",
        "PopoverClasses",
        "transitionDuration",
        "TransitionProps",
        "variant",
    ],
    u_ = { vertical: "top", horizontal: "right" },
    c_ = { vertical: "top", horizontal: "left" },
    d_ = (e) => {
        const { classes: t } = e;
        return ve({ root: ["root"], paper: ["paper"], list: ["list"] }, s_, t);
    },
    f_ = X(i_, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiMenu",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    p_ = X(zs, {
        name: "MuiMenu",
        slot: "Paper",
        overridesResolver: (e, t) => t.paper,
    })({ maxHeight: "calc(100% - 96px)", WebkitOverflowScrolling: "touch" }),
    h_ = X(QI, {
        name: "MuiMenu",
        slot: "List",
        overridesResolver: (e, t) => t.list,
    })({ outline: 0 }),
    m_ = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiMenu" }),
            {
                autoFocus: o = !0,
                children: i,
                disableAutoFocusItem: s = !1,
                MenuListProps: a = {},
                onClose: l,
                open: u,
                PaperProps: d = {},
                PopoverClasses: f,
                transitionDuration: c = "auto",
                TransitionProps: { onEntering: h } = {},
                variant: g = "selectedMenu",
            } = r,
            p = Q(r.TransitionProps, a_),
            S = Q(r, l_),
            v = li(),
            m = v.direction === "rtl",
            y = w({}, r, {
                autoFocus: o,
                disableAutoFocusItem: s,
                MenuListProps: a,
                onEntering: h,
                PaperProps: d,
                transitionDuration: c,
                TransitionProps: p,
                variant: g,
            }),
            x = d_(y),
            C = o && !s && u,
            k = b.useRef(null),
            E = (P, z) => {
                k.current && k.current.adjustStyleForScrollbar(P, v),
                    h && h(P, z);
            },
            T = (P) => {
                P.key === "Tab" &&
                    (P.preventDefault(), l && l(P, "tabKeyDown"));
            };
        let O = -1;
        return (
            b.Children.map(i, (P, z) => {
                b.isValidElement(P) &&
                    (P.props.disabled ||
                        (((g === "selectedMenu" && P.props.selected) ||
                            O === -1) &&
                            (O = z)));
            }),
            R(
                f_,
                w(
                    {
                        onClose: l,
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: m ? "right" : "left",
                        },
                        transformOrigin: m ? u_ : c_,
                        PaperProps: w({ component: p_ }, d, {
                            classes: w({}, d.classes, { root: x.paper }),
                        }),
                        className: x.root,
                        open: u,
                        ref: n,
                        transitionDuration: c,
                        TransitionProps: w({ onEntering: E }, p),
                        ownerState: y,
                    },
                    S,
                    {
                        classes: f,
                        children: R(
                            h_,
                            w(
                                {
                                    onKeyDown: T,
                                    actions: k,
                                    autoFocus: o && (O === -1 || s),
                                    autoFocusItem: C,
                                    variant: g,
                                },
                                a,
                                {
                                    className: Z(x.list, a.className),
                                    children: i,
                                }
                            )
                        ),
                    }
                )
            )
        );
    }),
    g_ = m_;
function v_(e) {
    return me("MuiNativeSelect", e);
}
const y_ = ye("MuiNativeSelect", [
        "root",
        "select",
        "multiple",
        "filled",
        "outlined",
        "standard",
        "disabled",
        "icon",
        "iconOpen",
        "iconFilled",
        "iconOutlined",
        "iconStandard",
        "nativeInput",
    ]),
    wp = y_,
    b_ = ["className", "disabled", "IconComponent", "inputRef", "variant"],
    x_ = (e) => {
        const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
            s = {
                select: ["select", n, r && "disabled", o && "multiple"],
                icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"],
            };
        return ve(s, v_, t);
    },
    m1 = ({ ownerState: e, theme: t }) =>
        w(
            {
                MozAppearance: "none",
                WebkitAppearance: "none",
                userSelect: "none",
                borderRadius: 0,
                cursor: "pointer",
                "&:focus": w(
                    {},
                    t.vars
                        ? {
                              backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`,
                          }
                        : {
                              backgroundColor:
                                  t.palette.mode === "light"
                                      ? "rgba(0, 0, 0, 0.05)"
                                      : "rgba(255, 255, 255, 0.05)",
                          },
                    { borderRadius: 0 }
                ),
                "&::-ms-expand": { display: "none" },
                [`&.${wp.disabled}`]: { cursor: "default" },
                "&[multiple]": { height: "auto" },
                "&:not([multiple]) option, &:not([multiple]) optgroup": {
                    backgroundColor: (t.vars || t).palette.background.paper,
                },
                "&&&": { paddingRight: 24, minWidth: 16 },
            },
            e.variant === "filled" && { "&&&": { paddingRight: 32 } },
            e.variant === "outlined" && {
                borderRadius: (t.vars || t).shape.borderRadius,
                "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
                "&&&": { paddingRight: 32 },
            }
        ),
    w_ = X("select", {
        name: "MuiNativeSelect",
        slot: "Select",
        shouldForwardProp: yn,
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.select,
                t[n.variant],
                { [`&.${wp.multiple}`]: t.multiple },
            ];
        },
    })(m1),
    g1 = ({ ownerState: e, theme: t }) =>
        w(
            {
                position: "absolute",
                right: 0,
                top: "calc(50% - .5em)",
                pointerEvents: "none",
                color: (t.vars || t).palette.action.active,
                [`&.${wp.disabled}`]: {
                    color: (t.vars || t).palette.action.disabled,
                },
            },
            e.open && { transform: "rotate(180deg)" },
            e.variant === "filled" && { right: 7 },
            e.variant === "outlined" && { right: 7 }
        ),
    S_ = X("svg", {
        name: "MuiNativeSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.icon,
                n.variant && t[`icon${V(n.variant)}`],
                n.open && t.iconOpen,
            ];
        },
    })(g1),
    C_ = b.forwardRef(function (t, n) {
        const {
                className: r,
                disabled: o,
                IconComponent: i,
                inputRef: s,
                variant: a = "standard",
            } = t,
            l = Q(t, b_),
            u = w({}, t, { disabled: o, variant: a }),
            d = x_(u);
        return le(b.Fragment, {
            children: [
                R(
                    w_,
                    w(
                        {
                            ownerState: u,
                            className: Z(d.select, r),
                            disabled: o,
                            ref: s || n,
                        },
                        l
                    )
                ),
                t.multiple
                    ? null
                    : R(S_, { as: i, ownerState: u, className: d.icon }),
            ],
        });
    }),
    E_ = C_;
var fg;
const k_ = ["children", "classes", "className", "label", "notched"],
    R_ = X("fieldset")({
        textAlign: "left",
        position: "absolute",
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: "0 8px",
        pointerEvents: "none",
        borderRadius: "inherit",
        borderStyle: "solid",
        borderWidth: 1,
        overflow: "hidden",
        minWidth: "0%",
    }),
    P_ = X("legend")(({ ownerState: e, theme: t }) =>
        w(
            { float: "unset", width: "auto", overflow: "hidden" },
            !e.withLabel && {
                padding: 0,
                lineHeight: "11px",
                transition: t.transitions.create("width", {
                    duration: 150,
                    easing: t.transitions.easing.easeOut,
                }),
            },
            e.withLabel &&
                w(
                    {
                        display: "block",
                        padding: 0,
                        height: 11,
                        fontSize: "0.75em",
                        visibility: "hidden",
                        maxWidth: 0.01,
                        transition: t.transitions.create("max-width", {
                            duration: 50,
                            easing: t.transitions.easing.easeOut,
                        }),
                        whiteSpace: "nowrap",
                        "& > span": {
                            paddingLeft: 5,
                            paddingRight: 5,
                            display: "inline-block",
                            opacity: 0,
                            visibility: "visible",
                        },
                    },
                    e.notched && {
                        maxWidth: "100%",
                        transition: t.transitions.create("max-width", {
                            duration: 100,
                            easing: t.transitions.easing.easeOut,
                            delay: 50,
                        }),
                    }
                )
        )
    );
function $_(e) {
    const { className: t, label: n, notched: r } = e,
        o = Q(e, k_),
        i = n != null && n !== "",
        s = w({}, e, { notched: r, withLabel: i });
    return R(
        R_,
        w({ "aria-hidden": !0, className: t, ownerState: s }, o, {
            children: R(P_, {
                ownerState: s,
                children: i
                    ? R("span", { children: n })
                    : fg ||
                      (fg = R("span", {
                          className: "notranslate",
                          children: "​",
                      })),
            }),
        })
    );
}
const T_ = [
        "components",
        "fullWidth",
        "inputComponent",
        "label",
        "multiline",
        "notched",
        "slots",
        "type",
    ],
    O_ = (e) => {
        const { classes: t } = e,
            r = ve(
                {
                    root: ["root"],
                    notchedOutline: ["notchedOutline"],
                    input: ["input"],
                },
                _T,
                t
            );
        return w({}, t, r);
    },
    I_ = X(xu, {
        shouldForwardProp: (e) => yn(e) || e === "classes",
        name: "MuiOutlinedInput",
        slot: "Root",
        overridesResolver: yu,
    })(({ theme: e, ownerState: t }) => {
        const n =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)";
        return w(
            {
                position: "relative",
                borderRadius: (e.vars || e).shape.borderRadius,
                [`&:hover .${Qn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.text.primary,
                },
                "@media (hover: none)": {
                    [`&:hover .${Qn.notchedOutline}`]: {
                        borderColor: e.vars
                            ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                            : n,
                    },
                },
                [`&.${Qn.focused} .${Qn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette[t.color].main,
                    borderWidth: 2,
                },
                [`&.${Qn.error} .${Qn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.error.main,
                },
                [`&.${Qn.disabled} .${Qn.notchedOutline}`]: {
                    borderColor: (e.vars || e).palette.action.disabled,
                },
            },
            t.startAdornment && { paddingLeft: 14 },
            t.endAdornment && { paddingRight: 14 },
            t.multiline &&
                w(
                    { padding: "16.5px 14px" },
                    t.size === "small" && { padding: "8.5px 14px" }
                )
        );
    }),
    __ = X($_, {
        name: "MuiOutlinedInput",
        slot: "NotchedOutline",
        overridesResolver: (e, t) => t.notchedOutline,
    })(({ theme: e }) => {
        const t =
            e.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.23)"
                : "rgba(255, 255, 255, 0.23)";
        return {
            borderColor: e.vars
                ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                : t,
        };
    }),
    M_ = X(wu, {
        name: "MuiOutlinedInput",
        slot: "Input",
        overridesResolver: bu,
    })(({ theme: e, ownerState: t }) =>
        w(
            { padding: "16.5px 14px" },
            !e.vars && {
                "&:-webkit-autofill": {
                    WebkitBoxShadow:
                        e.palette.mode === "light"
                            ? null
                            : "0 0 0 100px #266798 inset",
                    WebkitTextFillColor:
                        e.palette.mode === "light" ? null : "#fff",
                    caretColor: e.palette.mode === "light" ? null : "#fff",
                    borderRadius: "inherit",
                },
            },
            e.vars && {
                "&:-webkit-autofill": { borderRadius: "inherit" },
                [e.getColorSchemeSelector("dark")]: {
                    "&:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px #266798 inset",
                        WebkitTextFillColor: "#fff",
                        caretColor: "#fff",
                    },
                },
            },
            t.size === "small" && { padding: "8.5px 14px" },
            t.multiline && { padding: 0 },
            t.startAdornment && { paddingLeft: 0 },
            t.endAdornment && { paddingRight: 0 }
        )
    ),
    v1 = b.forwardRef(function (t, n) {
        var r, o, i, s, a;
        const l = he({ props: t, name: "MuiOutlinedInput" }),
            {
                components: u = {},
                fullWidth: d = !1,
                inputComponent: f = "input",
                label: c,
                multiline: h = !1,
                notched: g,
                slots: p = {},
                type: S = "text",
            } = l,
            v = Q(l, T_),
            m = O_(l),
            y = ci(),
            x = ui({ props: l, muiFormControl: y, states: ["required"] }),
            C = w({}, l, {
                color: x.color || "primary",
                disabled: x.disabled,
                error: x.error,
                focused: x.focused,
                formControl: y,
                fullWidth: d,
                hiddenLabel: x.hiddenLabel,
                multiline: h,
                size: x.size,
                type: S,
            }),
            k = (r = (o = p.root) != null ? o : u.Root) != null ? r : I_,
            E = (i = (s = p.input) != null ? s : u.Input) != null ? i : M_;
        return R(
            bp,
            w(
                {
                    slots: { root: k, input: E },
                    renderSuffix: (T) =>
                        R(__, {
                            ownerState: C,
                            className: m.notchedOutline,
                            label:
                                c != null && c !== "" && x.required
                                    ? a ||
                                      (a = le(b.Fragment, {
                                          children: [c, " ", "*"],
                                      }))
                                    : c,
                            notched:
                                typeof g < "u"
                                    ? g
                                    : Boolean(
                                          T.startAdornment ||
                                              T.filled ||
                                              T.focused
                                      ),
                        }),
                    fullWidth: d,
                    inputComponent: f,
                    multiline: h,
                    ref: n,
                    type: S,
                },
                v,
                { classes: w({}, m, { notchedOutline: null }) }
            )
        );
    });
v1.muiName = "Input";
const y1 = v1;
function N_(e) {
    return me("MuiSelect", e);
}
const A_ = ye("MuiSelect", [
        "select",
        "multiple",
        "filled",
        "outlined",
        "standard",
        "disabled",
        "focused",
        "icon",
        "iconOpen",
        "iconFilled",
        "iconOutlined",
        "iconStandard",
        "nativeInput",
    ]),
    la = A_;
var pg;
const L_ = [
        "aria-describedby",
        "aria-label",
        "autoFocus",
        "autoWidth",
        "children",
        "className",
        "defaultOpen",
        "defaultValue",
        "disabled",
        "displayEmpty",
        "IconComponent",
        "inputRef",
        "labelId",
        "MenuProps",
        "multiple",
        "name",
        "onBlur",
        "onChange",
        "onClose",
        "onFocus",
        "onOpen",
        "open",
        "readOnly",
        "renderValue",
        "SelectDisplayProps",
        "tabIndex",
        "type",
        "value",
        "variant",
    ],
    D_ = X("div", {
        name: "MuiSelect",
        slot: "Select",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                { [`&.${la.select}`]: t.select },
                { [`&.${la.select}`]: t[n.variant] },
                { [`&.${la.multiple}`]: t.multiple },
            ];
        },
    })(m1, {
        [`&.${la.select}`]: {
            height: "auto",
            minHeight: "1.4375em",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
        },
    }),
    z_ = X("svg", {
        name: "MuiSelect",
        slot: "Icon",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
                t.icon,
                n.variant && t[`icon${V(n.variant)}`],
                n.open && t.iconOpen,
            ];
        },
    })(g1),
    F_ = X("input", {
        shouldForwardProp: (e) => lP(e) && e !== "classes",
        name: "MuiSelect",
        slot: "NativeInput",
        overridesResolver: (e, t) => t.nativeInput,
    })({
        bottom: 0,
        left: 0,
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: "100%",
        boxSizing: "border-box",
    });
function hg(e, t) {
    return typeof t == "object" && t !== null
        ? e === t
        : String(e) === String(t);
}
function B_(e) {
    return e == null || (typeof e == "string" && !e.trim());
}
const j_ = (e) => {
        const { classes: t, variant: n, disabled: r, multiple: o, open: i } = e,
            s = {
                select: ["select", n, r && "disabled", o && "multiple"],
                icon: ["icon", `icon${V(n)}`, i && "iconOpen", r && "disabled"],
                nativeInput: ["nativeInput"],
            };
        return ve(s, N_, t);
    },
    U_ = b.forwardRef(function (t, n) {
        const {
                "aria-describedby": r,
                "aria-label": o,
                autoFocus: i,
                autoWidth: s,
                children: a,
                className: l,
                defaultOpen: u,
                defaultValue: d,
                disabled: f,
                displayEmpty: c,
                IconComponent: h,
                inputRef: g,
                labelId: p,
                MenuProps: S = {},
                multiple: v,
                name: m,
                onBlur: y,
                onChange: x,
                onClose: C,
                onFocus: k,
                onOpen: E,
                open: T,
                readOnly: O,
                renderValue: P,
                SelectDisplayProps: z = {},
                tabIndex: G,
                value: U,
                variant: A = "standard",
            } = t,
            F = Q(t, L_),
            [j, ee] = wd({ controlled: U, default: d, name: "Select" }),
            [$, M] = wd({ controlled: T, default: u, name: "Select" }),
            L = b.useRef(null),
            W = b.useRef(null),
            [te, Me] = b.useState(null),
            { current: ie } = b.useRef(T != null),
            [ge, K] = b.useState(),
            ce = rt(n, g),
            Te = b.useCallback((_) => {
                (W.current = _), _ && Me(_);
            }, []),
            be = te == null ? void 0 : te.parentNode;
        b.useImperativeHandle(
            ce,
            () => ({
                focus: () => {
                    W.current.focus();
                },
                node: L.current,
                value: j,
            }),
            [j]
        ),
            b.useEffect(() => {
                u &&
                    $ &&
                    te &&
                    !ie &&
                    (K(s ? null : be.clientWidth), W.current.focus());
            }, [te, s]),
            b.useEffect(() => {
                i && W.current.focus();
            }, [i]),
            b.useEffect(() => {
                if (!p) return;
                const _ = Bt(W.current).getElementById(p);
                if (_) {
                    const de = () => {
                        getSelection().isCollapsed && W.current.focus();
                    };
                    return (
                        _.addEventListener("click", de),
                        () => {
                            _.removeEventListener("click", de);
                        }
                    );
                }
            }, [p]);
        const Ae = (_, de) => {
                _ ? E && E(de) : C && C(de),
                    ie || (K(s ? null : be.clientWidth), M(_));
            },
            ae = (_) => {
                _.button === 0 &&
                    (_.preventDefault(), W.current.focus(), Ae(!0, _));
            },
            Ye = (_) => {
                Ae(!1, _);
            },
            ut = b.Children.toArray(a),
            Rt = (_) => {
                const de = ut
                    .map((Xe) => Xe.props.value)
                    .indexOf(_.target.value);
                if (de === -1) return;
                const Ce = ut[de];
                ee(Ce.props.value), x && x(_, Ce);
            },
            Nt = (_) => (de) => {
                let Ce;
                if (de.currentTarget.hasAttribute("tabindex")) {
                    if (v) {
                        Ce = Array.isArray(j) ? j.slice() : [];
                        const Xe = j.indexOf(_.props.value);
                        Xe === -1 ? Ce.push(_.props.value) : Ce.splice(Xe, 1);
                    } else Ce = _.props.value;
                    if (
                        (_.props.onClick && _.props.onClick(de),
                        j !== Ce && (ee(Ce), x))
                    ) {
                        const Xe = de.nativeEvent || de,
                            sn = new Xe.constructor(Xe.type, Xe);
                        Object.defineProperty(sn, "target", {
                            writable: !0,
                            value: { value: Ce, name: m },
                        }),
                            x(sn, _);
                    }
                    v || Ae(!1, de);
                }
            },
            on = (_) => {
                O ||
                    ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(_.key) !==
                        -1 &&
                        (_.preventDefault(), Ae(!0, _)));
            },
            At = te !== null && $,
            I = (_) => {
                !At &&
                    y &&
                    (Object.defineProperty(_, "target", {
                        writable: !0,
                        value: { value: j, name: m },
                    }),
                    y(_));
            };
        delete F["aria-invalid"];
        let N, B;
        const q = [];
        let H = !1;
        (yp({ value: j }) || c) && (P ? (N = P(j)) : (H = !0));
        const oe = ut.map((_, de, Ce) => {
            var Xe, sn, Rr, On;
            if (!b.isValidElement(_)) return null;
            let Gt;
            if (v) {
                if (!Array.isArray(j)) throw new Error(Vn(2));
                (Gt = j.some((Ge) => hg(Ge, _.props.value))),
                    Gt && H && q.push(_.props.children);
            } else
                (Gt = hg(j, _.props.value)), Gt && H && (B = _.props.children);
            if (_.props.value === void 0)
                return b.cloneElement(_, {
                    "aria-readonly": !0,
                    role: "option",
                });
            const ot = () => {
                if (j) return Gt;
                const Ge = Ce.find((an) => {
                    var Yn;
                    return (
                        (an == null || (Yn = an.props) == null
                            ? void 0
                            : Yn.value) !== void 0 && an.props.disabled !== !0
                    );
                });
                return _ === Ge ? !0 : Gt;
            };
            return b.cloneElement(_, {
                "aria-selected": Gt ? "true" : "false",
                onClick: Nt(_),
                onKeyUp: (Ge) => {
                    Ge.key === " " && Ge.preventDefault(),
                        _.props.onKeyUp && _.props.onKeyUp(Ge);
                },
                role: "option",
                selected:
                    ((Xe = Ce[0]) == null || (sn = Xe.props) == null
                        ? void 0
                        : sn.value) === void 0 ||
                    ((Rr = Ce[0]) == null || (On = Rr.props) == null
                        ? void 0
                        : On.disabled) === !0
                        ? ot()
                        : Gt,
                value: void 0,
                "data-value": _.props.value,
            });
        });
        H &&
            (v
                ? q.length === 0
                    ? (N = null)
                    : (N = q.reduce(
                          (_, de, Ce) => (
                              _.push(de), Ce < q.length - 1 && _.push(", "), _
                          ),
                          []
                      ))
                : (N = B));
        let re = ge;
        !s && ie && te && (re = be.clientWidth);
        let se;
        typeof G < "u" ? (se = G) : (se = f ? null : 0);
        const ne = z.id || (m ? `mui-component-select-${m}` : void 0),
            Oe = w({}, t, { variant: A, value: j, open: At }),
            J = j_(Oe);
        return le(b.Fragment, {
            children: [
                R(
                    D_,
                    w(
                        {
                            ref: Te,
                            tabIndex: se,
                            role: "button",
                            "aria-disabled": f ? "true" : void 0,
                            "aria-expanded": At ? "true" : "false",
                            "aria-haspopup": "listbox",
                            "aria-label": o,
                            "aria-labelledby":
                                [p, ne].filter(Boolean).join(" ") || void 0,
                            "aria-describedby": r,
                            onKeyDown: on,
                            onMouseDown: f || O ? null : ae,
                            onBlur: I,
                            onFocus: k,
                        },
                        z,
                        {
                            ownerState: Oe,
                            className: Z(z.className, J.select, l),
                            id: ne,
                            children: B_(N)
                                ? pg ||
                                  (pg = R("span", {
                                      className: "notranslate",
                                      children: "​",
                                  }))
                                : N,
                        }
                    )
                ),
                R(
                    F_,
                    w(
                        {
                            value: Array.isArray(j) ? j.join(",") : j,
                            name: m,
                            ref: L,
                            "aria-hidden": !0,
                            onChange: Rt,
                            tabIndex: -1,
                            disabled: f,
                            className: J.nativeInput,
                            autoFocus: i,
                            ownerState: Oe,
                        },
                        F
                    )
                ),
                R(z_, { as: h, className: J.icon, ownerState: Oe }),
                R(
                    g_,
                    w(
                        {
                            id: `menu-${m || ""}`,
                            anchorEl: be,
                            open: At,
                            onClose: Ye,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "center",
                            },
                            transformOrigin: {
                                vertical: "top",
                                horizontal: "center",
                            },
                        },
                        S,
                        {
                            MenuListProps: w(
                                {
                                    "aria-labelledby": p,
                                    role: "listbox",
                                    disableListWrap: !0,
                                },
                                S.MenuListProps
                            ),
                            PaperProps: w({}, S.PaperProps, {
                                style: w(
                                    { minWidth: re },
                                    S.PaperProps != null
                                        ? S.PaperProps.style
                                        : null
                                ),
                            }),
                            children: oe,
                        }
                    )
                ),
            ],
        });
    }),
    W_ = U_;
var mg, gg;
const V_ = [
        "autoWidth",
        "children",
        "classes",
        "className",
        "defaultOpen",
        "displayEmpty",
        "IconComponent",
        "id",
        "input",
        "inputProps",
        "label",
        "labelId",
        "MenuProps",
        "multiple",
        "native",
        "onClose",
        "onOpen",
        "open",
        "renderValue",
        "SelectDisplayProps",
        "variant",
    ],
    H_ = (e) => {
        const { classes: t } = e;
        return t;
    },
    Sp = {
        name: "MuiSelect",
        overridesResolver: (e, t) => t.root,
        shouldForwardProp: (e) => yn(e) && e !== "variant",
        slot: "Root",
    },
    K_ = X(f1, Sp)(""),
    G_ = X(y1, Sp)(""),
    q_ = X(u1, Sp)(""),
    b1 = b.forwardRef(function (t, n) {
        const r = he({ name: "MuiSelect", props: t }),
            {
                autoWidth: o = !1,
                children: i,
                classes: s = {},
                className: a,
                defaultOpen: l = !1,
                displayEmpty: u = !1,
                IconComponent: d = LT,
                id: f,
                input: c,
                inputProps: h,
                label: g,
                labelId: p,
                MenuProps: S,
                multiple: v = !1,
                native: m = !1,
                onClose: y,
                onOpen: x,
                open: C,
                renderValue: k,
                SelectDisplayProps: E,
                variant: T = "outlined",
            } = r,
            O = Q(r, V_),
            P = m ? E_ : W_,
            z = ci(),
            U =
                ui({ props: r, muiFormControl: z, states: ["variant"] })
                    .variant || T,
            A =
                c ||
                {
                    standard: mg || (mg = R(K_, {})),
                    outlined: R(G_, { label: g }),
                    filled: gg || (gg = R(q_, {})),
                }[U],
            F = w({}, r, { variant: U, classes: s }),
            j = H_(F),
            ee = rt(n, A.ref);
        return R(b.Fragment, {
            children: b.cloneElement(
                A,
                w(
                    {
                        inputComponent: P,
                        inputProps: w(
                            {
                                children: i,
                                IconComponent: d,
                                variant: U,
                                type: void 0,
                                multiple: v,
                            },
                            m
                                ? { id: f }
                                : {
                                      autoWidth: o,
                                      defaultOpen: l,
                                      displayEmpty: u,
                                      labelId: p,
                                      MenuProps: S,
                                      onClose: y,
                                      onOpen: x,
                                      open: C,
                                      renderValue: k,
                                      SelectDisplayProps: w({ id: f }, E),
                                  },
                            h,
                            { classes: h ? _t(j, h.classes) : j },
                            c ? c.props.inputProps : {}
                        ),
                    },
                    v && m && U === "outlined" ? { notched: !0 } : {},
                    { ref: ee, className: Z(A.props.className, a) },
                    !c && { variant: U },
                    O
                )
            ),
        });
    });
b1.muiName = "Select";
const Y_ = b1,
    X_ = ["component", "direction", "spacing", "divider", "children"];
function Q_(e, t) {
    const n = b.Children.toArray(e).filter(Boolean);
    return n.reduce(
        (r, o, i) => (
            r.push(o),
            i < n.length - 1 &&
                r.push(b.cloneElement(t, { key: `separator-${i}` })),
            r
        ),
        []
    );
}
const J_ = (e) =>
        ({
            row: "Left",
            "row-reverse": "Right",
            column: "Top",
            "column-reverse": "Bottom",
        }[e]),
    Z_ = ({ ownerState: e, theme: t }) => {
        let n = w(
            { display: "flex", flexDirection: "column" },
            vn(
                { theme: t },
                lc({ values: e.direction, breakpoints: t.breakpoints.values }),
                (r) => ({ flexDirection: r })
            )
        );
        if (e.spacing) {
            const r = up(t),
                o = Object.keys(t.breakpoints.values).reduce(
                    (l, u) => (
                        ((typeof e.spacing == "object" &&
                            e.spacing[u] != null) ||
                            (typeof e.direction == "object" &&
                                e.direction[u] != null)) &&
                            (l[u] = !0),
                        l
                    ),
                    {}
                ),
                i = lc({ values: e.direction, base: o }),
                s = lc({ values: e.spacing, base: o });
            typeof i == "object" &&
                Object.keys(i).forEach((l, u, d) => {
                    if (!i[l]) {
                        const c = u > 0 ? i[d[u - 1]] : "column";
                        i[l] = c;
                    }
                }),
                (n = _t(
                    n,
                    vn({ theme: t }, s, (l, u) => ({
                        "& > :not(style) + :not(style)": {
                            margin: 0,
                            [`margin${J_(u ? i[u] : e.direction)}`]: ai(r, l),
                        },
                    }))
                ));
        }
        return (n = Zk(t.breakpoints, n)), n;
    },
    eM = X("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (e, t) => [t.root],
    })(Z_),
    tM = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiStack" }),
            o = dp(r),
            {
                component: i = "div",
                direction: s = "column",
                spacing: a = 0,
                divider: l,
                children: u,
            } = o,
            d = Q(o, X_);
        return R(
            eM,
            w({ as: i, ownerState: { direction: s, spacing: a }, ref: n }, d, {
                children: l ? Q_(u, l) : u,
            })
        );
    }),
    nM = tM;
function rM(e) {
    return me("MuiToolbar", e);
}
ye("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const oM = ["className", "component", "disableGutters", "variant"],
    iM = (e) => {
        const { classes: t, disableGutters: n, variant: r } = e;
        return ve({ root: ["root", !n && "gutters", r] }, rM, t);
    },
    sM = X("div", {
        name: "MuiToolbar",
        slot: "Root",
        overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
        },
    })(
        ({ theme: e, ownerState: t }) =>
            w(
                { position: "relative", display: "flex", alignItems: "center" },
                !t.disableGutters && {
                    paddingLeft: e.spacing(2),
                    paddingRight: e.spacing(2),
                    [e.breakpoints.up("sm")]: {
                        paddingLeft: e.spacing(3),
                        paddingRight: e.spacing(3),
                    },
                },
                t.variant === "dense" && { minHeight: 48 }
            ),
        ({ theme: e, ownerState: t }) =>
            t.variant === "regular" && e.mixins.toolbar
    ),
    aM = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiToolbar" }),
            {
                className: o,
                component: i = "div",
                disableGutters: s = !1,
                variant: a = "regular",
            } = r,
            l = Q(r, oM),
            u = w({}, r, { component: i, disableGutters: s, variant: a }),
            d = iM(u);
        return R(
            sM,
            w({ as: i, className: Z(d.root, o), ref: n, ownerState: u }, l)
        );
    }),
    lM = aM;
function uM(e) {
    return me("MuiTextField", e);
}
ye("MuiTextField", ["root"]);
const cM = [
        "autoComplete",
        "autoFocus",
        "children",
        "className",
        "color",
        "defaultValue",
        "disabled",
        "error",
        "FormHelperTextProps",
        "fullWidth",
        "helperText",
        "id",
        "InputLabelProps",
        "inputProps",
        "InputProps",
        "inputRef",
        "label",
        "maxRows",
        "minRows",
        "multiline",
        "name",
        "onBlur",
        "onChange",
        "onFocus",
        "placeholder",
        "required",
        "rows",
        "select",
        "SelectProps",
        "type",
        "value",
        "variant",
    ],
    dM = { standard: f1, filled: u1, outlined: y1 },
    fM = (e) => {
        const { classes: t } = e;
        return ve({ root: ["root"] }, uM, t);
    },
    pM = X(HO, {
        name: "MuiTextField",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
    })({}),
    hM = b.forwardRef(function (t, n) {
        const r = he({ props: t, name: "MuiTextField" }),
            {
                autoComplete: o,
                autoFocus: i = !1,
                children: s,
                className: a,
                color: l = "primary",
                defaultValue: u,
                disabled: d = !1,
                error: f = !1,
                FormHelperTextProps: c,
                fullWidth: h = !1,
                helperText: g,
                id: p,
                InputLabelProps: S,
                inputProps: v,
                InputProps: m,
                inputRef: y,
                label: x,
                maxRows: C,
                minRows: k,
                multiline: E = !1,
                name: T,
                onBlur: O,
                onChange: P,
                onFocus: z,
                placeholder: G,
                required: U = !1,
                rows: A,
                select: F = !1,
                SelectProps: j,
                type: ee,
                value: $,
                variant: M = "outlined",
            } = r,
            L = Q(r, cM),
            W = w({}, r, {
                autoFocus: i,
                color: l,
                disabled: d,
                error: f,
                fullWidth: h,
                multiline: E,
                required: U,
                select: F,
                variant: M,
            }),
            te = fM(W),
            Me = {};
        M === "outlined" &&
            (S && typeof S.shrink < "u" && (Me.notched = S.shrink),
            (Me.label = x)),
            F &&
                ((!j || !j.native) && (Me.id = void 0),
                (Me["aria-describedby"] = void 0));
        const ie = KE(p),
            ge = g && ie ? `${ie}-helper-text` : void 0,
            K = x && ie ? `${ie}-label` : void 0,
            ce = dM[M],
            Te = R(
                ce,
                w(
                    {
                        "aria-describedby": ge,
                        autoComplete: o,
                        autoFocus: i,
                        defaultValue: u,
                        fullWidth: h,
                        multiline: E,
                        name: T,
                        rows: A,
                        maxRows: C,
                        minRows: k,
                        type: ee,
                        value: $,
                        id: ie,
                        inputRef: y,
                        onBlur: O,
                        onChange: P,
                        onFocus: z,
                        placeholder: G,
                        inputProps: v,
                    },
                    Me,
                    m
                )
            );
        return le(
            pM,
            w(
                {
                    className: Z(te.root, a),
                    disabled: d,
                    error: f,
                    fullWidth: h,
                    ref: n,
                    required: U,
                    color: l,
                    variant: M,
                    ownerState: W,
                },
                L,
                {
                    children: [
                        x != null &&
                            x !== "" &&
                            R(
                                bI,
                                w({ htmlFor: ie, id: K }, S, { children: x })
                            ),
                        F
                            ? R(
                                  Y_,
                                  w(
                                      {
                                          "aria-describedby": ge,
                                          id: ie,
                                          labelId: K,
                                          value: $,
                                          input: Te,
                                      },
                                      j,
                                      { children: s }
                                  )
                              )
                            : Te,
                        g && R(JO, w({ id: ge }, c, { children: g })),
                    ],
                }
            )
        );
    }),
    mM = hM;
function hc() {
    const e = Zl();
    return R(O2, {
        sx: {
            display: "flex",
            height: "100vh",
            backgroundColor: "secondary.main",
            justifyContent: "center",
            alignItems: "center",
        },
        children: le(st, {
            sx: { p: 2, textAlign: "center" },
            children: [
                R(Qt, { variant: "h2", children: "Oops!" }),
                R(Qt, {
                    sx: { mb: 2 },
                    variant: "h2",
                    children: "This isn't an investigator.",
                }),
                R(Rs, {
                    variant: "contained",
                    onClick: () => e("/"),
                    children: "Back to Home",
                }),
            ],
        }),
    });
}
const gM = kr(R("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }), "Add"),
    vM = kr(
        R("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
        "ExpandMore"
    ),
    yM = kr(
        R("path", {
            d: "M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z",
        }),
        "PowerOff"
    ),
    bM = kr(R("path", { d: "M19 13H5v-2h14v2z" }), "Remove"),
    xM = kr(
        R("path", {
            d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z",
        }),
        "Restore"
    ),
    wM = kr(
        R("path", {
            d: "M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79s7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58s9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z",
        }),
        "Update"
    );
function SM(e) {
    return R(st, {
        sx: {
            position: "relative",
            width: "calc(100vw - 100px)",
            height: "calc(100vw - 100px)",
            maxWidth: 350,
            maxHeight: 350,
            backgroundColor: "primary.main",
            padding: 2,
            border: "7px solid",
            borderColor: "primary.dark",
            borderRadius: "50%",
        },
        children: R(CM, { ...e }),
    });
}
function CM(e) {
    return le(st, {
        sx: {
            position: "relative",
            backgroundColor: "primary.main",
            overflow: "hidden",
            width: 1,
            height: 1,
            borderRadius: "100%",
            "&:after, &:before, .marking": {
                content: '""',
                position: "absolute",
                width: "5px",
                height: "100%",
                backgroundColor: "primary.light",
                zIndex: 0,
                left: "49%",
            },
            "&:after": { transform: "rotate(90deg)" },
            ".marking": { backgroundColor: "#bdbdcb", width: "3px" },
            ".marking-one": { transform: "rotate(30deg)" },
            ".marking-two": { transform: "rotate(60deg)" },
            ".marking-three": { transform: "rotate(120deg)" },
            ".marking-four": { transform: "rotate(150deg)" },
        },
        children: [
            R("div", { className: "marking marking-one" }),
            R("div", { className: "marking marking-two" }),
            R("div", { className: "marking marking-three" }),
            R("div", { className: "marking marking-four" }),
            R(EM, { ...e }),
        ],
    });
}
function EM(e) {
    return le(st, {
        sx: {
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "80%",
            height: "80%",
            backgroundColor: "primary.main",
            borderRadius: "100%",
            zIndex: 1,
            "&:before": {
                content: '""',
                position: "absolute",
                top: "48%",
                left: "50%",
                width: "20px",
                height: "20px",
                borderRadius: "18px",
                marginLeft: "-9px",
                marginTop: "-6px",
                backgroundColor: "#4d4b63",
                zIndex: 11,
            },
        },
        children: [
            R(vg, { ...e, variant: "hour" }),
            R(vg, { ...e, variant: "minute" }),
        ],
    });
}
function vg(e) {
    let t = {
        position: "absolute",
        transformOrigin: "100%",
        top: "49%",
        right: "50%",
        height: "6px",
        width: "45%",
        backgroundColor: "primary.dark",
        borderRadius: "6px",
        transform: "rotate(90deg)",
        zIndex: 10,
    };
    const n = (e.currentHour / 12) * 360 + 90;
    return (
        e.variant === "hour" &&
            (t = {
                ...t,
                width: "30%",
                zIndex: 3,
                transform: `rotate(${n}deg)`,
                backgroundColor: "primary.light",
            }),
        R(st, { sx: t })
    );
}
const Tn = Object.create(null);
Tn.open = "0";
Tn.close = "1";
Tn.ping = "2";
Tn.pong = "3";
Tn.message = "4";
Tn.upgrade = "5";
Tn.noop = "6";
const $a = Object.create(null);
Object.keys(Tn).forEach((e) => {
    $a[Tn[e]] = e;
});
const kM = { type: "error", data: "parser error" },
    RM =
        typeof Blob == "function" ||
        (typeof Blob < "u" &&
            Object.prototype.toString.call(Blob) ===
                "[object BlobConstructor]"),
    PM = typeof ArrayBuffer == "function",
    $M = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
    x1 = ({ type: e, data: t }, n, r) =>
        RM && t instanceof Blob
            ? n
                ? r(t)
                : yg(t, r)
            : PM && (t instanceof ArrayBuffer || $M(t))
            ? n
                ? r(t)
                : yg(new Blob([t]), r)
            : r(Tn[e] + (t || "")),
    yg = (e, t) => {
        const n = new FileReader();
        return (
            (n.onload = function () {
                const r = n.result.split(",")[1];
                t("b" + (r || ""));
            }),
            n.readAsDataURL(e)
        );
    },
    bg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    Li = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < bg.length; e++) Li[bg.charCodeAt(e)] = e;
const TM = (e) => {
        let t = e.length * 0.75,
            n = e.length,
            r,
            o = 0,
            i,
            s,
            a,
            l;
        e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
        const u = new ArrayBuffer(t),
            d = new Uint8Array(u);
        for (r = 0; r < n; r += 4)
            (i = Li[e.charCodeAt(r)]),
                (s = Li[e.charCodeAt(r + 1)]),
                (a = Li[e.charCodeAt(r + 2)]),
                (l = Li[e.charCodeAt(r + 3)]),
                (d[o++] = (i << 2) | (s >> 4)),
                (d[o++] = ((s & 15) << 4) | (a >> 2)),
                (d[o++] = ((a & 3) << 6) | (l & 63));
        return u;
    },
    OM = typeof ArrayBuffer == "function",
    w1 = (e, t) => {
        if (typeof e != "string") return { type: "message", data: S1(e, t) };
        const n = e.charAt(0);
        return n === "b"
            ? { type: "message", data: IM(e.substring(1), t) }
            : $a[n]
            ? e.length > 1
                ? { type: $a[n], data: e.substring(1) }
                : { type: $a[n] }
            : kM;
    },
    IM = (e, t) => {
        if (OM) {
            const n = TM(e);
            return S1(n, t);
        } else return { base64: !0, data: e };
    },
    S1 = (e, t) => {
        switch (t) {
            case "blob":
                return e instanceof ArrayBuffer ? new Blob([e]) : e;
            case "arraybuffer":
            default:
                return e;
        }
    },
    C1 = String.fromCharCode(30),
    _M = (e, t) => {
        const n = e.length,
            r = new Array(n);
        let o = 0;
        e.forEach((i, s) => {
            x1(i, !1, (a) => {
                (r[s] = a), ++o === n && t(r.join(C1));
            });
        });
    },
    MM = (e, t) => {
        const n = e.split(C1),
            r = [];
        for (let o = 0; o < n.length; o++) {
            const i = w1(n[o], t);
            if ((r.push(i), i.type === "error")) break;
        }
        return r;
    },
    E1 = 4;
function et(e) {
    if (e) return NM(e);
}
function NM(e) {
    for (var t in et.prototype) e[t] = et.prototype[t];
    return e;
}
et.prototype.on = et.prototype.addEventListener = function (e, t) {
    return (
        (this._callbacks = this._callbacks || {}),
        (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
        this
    );
};
et.prototype.once = function (e, t) {
    function n() {
        this.off(e, n), t.apply(this, arguments);
    }
    return (n.fn = t), this.on(e, n), this;
};
et.prototype.off =
    et.prototype.removeListener =
    et.prototype.removeAllListeners =
    et.prototype.removeEventListener =
        function (e, t) {
            if (
                ((this._callbacks = this._callbacks || {}),
                arguments.length == 0)
            )
                return (this._callbacks = {}), this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (arguments.length == 1)
                return delete this._callbacks["$" + e], this;
            for (var r, o = 0; o < n.length; o++)
                if (((r = n[o]), r === t || r.fn === t)) {
                    n.splice(o, 1);
                    break;
                }
            return n.length === 0 && delete this._callbacks["$" + e], this;
        };
et.prototype.emit = function (e) {
    this._callbacks = this._callbacks || {};
    for (
        var t = new Array(arguments.length - 1),
            n = this._callbacks["$" + e],
            r = 1;
        r < arguments.length;
        r++
    )
        t[r - 1] = arguments[r];
    if (n) {
        n = n.slice(0);
        for (var r = 0, o = n.length; r < o; ++r) n[r].apply(this, t);
    }
    return this;
};
et.prototype.emitReserved = et.prototype.emit;
et.prototype.listeners = function (e) {
    return (
        (this._callbacks = this._callbacks || {}),
        this._callbacks["$" + e] || []
    );
};
et.prototype.hasListeners = function (e) {
    return !!this.listeners(e).length;
};
const ir = (() =>
    typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : Function("return this")())();
function k1(e, ...t) {
    return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {});
}
const AM = setTimeout,
    LM = clearTimeout;
function Su(e, t) {
    t.useNativeTimers
        ? ((e.setTimeoutFn = AM.bind(ir)), (e.clearTimeoutFn = LM.bind(ir)))
        : ((e.setTimeoutFn = setTimeout.bind(ir)),
          (e.clearTimeoutFn = clearTimeout.bind(ir)));
}
const DM = 1.33;
function zM(e) {
    return typeof e == "string"
        ? FM(e)
        : Math.ceil((e.byteLength || e.size) * DM);
}
function FM(e) {
    let t = 0,
        n = 0;
    for (let r = 0, o = e.length; r < o; r++)
        (t = e.charCodeAt(r)),
            t < 128
                ? (n += 1)
                : t < 2048
                ? (n += 2)
                : t < 55296 || t >= 57344
                ? (n += 3)
                : (r++, (n += 4));
    return n;
}
class BM extends Error {
    constructor(t, n, r) {
        super(t),
            (this.description = n),
            (this.context = r),
            (this.type = "TransportError");
    }
}
class R1 extends et {
    constructor(t) {
        super(),
            (this.writable = !1),
            Su(this, t),
            (this.opts = t),
            (this.query = t.query),
            (this.readyState = ""),
            (this.socket = t.socket);
    }
    onError(t, n, r) {
        return super.emitReserved("error", new BM(t, n, r)), this;
    }
    open() {
        return (
            (this.readyState === "closed" || this.readyState === "") &&
                ((this.readyState = "opening"), this.doOpen()),
            this
        );
    }
    close() {
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                (this.doClose(), this.onClose()),
            this
        );
    }
    send(t) {
        this.readyState === "open" && this.write(t);
    }
    onOpen() {
        (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
    }
    onData(t) {
        const n = w1(t, this.socket.binaryType);
        this.onPacket(n);
    }
    onPacket(t) {
        super.emitReserved("packet", t);
    }
    onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
    }
}
const P1 =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
        ),
    Id = 64,
    jM = {};
let xg = 0,
    ua = 0,
    wg;
function Sg(e) {
    let t = "";
    do (t = P1[e % Id] + t), (e = Math.floor(e / Id));
    while (e > 0);
    return t;
}
function $1() {
    const e = Sg(+new Date());
    return e !== wg ? ((xg = 0), (wg = e)) : e + "." + Sg(xg++);
}
for (; ua < Id; ua++) jM[P1[ua]] = ua;
function T1(e) {
    let t = "";
    for (let n in e)
        e.hasOwnProperty(n) &&
            (t.length && (t += "&"),
            (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
    return t;
}
function UM(e) {
    let t = {},
        n = e.split("&");
    for (let r = 0, o = n.length; r < o; r++) {
        let i = n[r].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
    }
    return t;
}
let O1 = !1;
try {
    O1 =
        typeof XMLHttpRequest < "u" &&
        "withCredentials" in new XMLHttpRequest();
} catch {}
const WM = O1;
function I1(e) {
    const t = e.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!t || WM))
            return new XMLHttpRequest();
    } catch {}
    if (!t)
        try {
            return new ir[["Active"].concat("Object").join("X")](
                "Microsoft.XMLHTTP"
            );
        } catch {}
}
function VM() {}
const HM = (function () {
    return new I1({ xdomain: !1 }).responseType != null;
})();
class KM extends R1 {
    constructor(t) {
        if ((super(t), (this.polling = !1), typeof location < "u")) {
            const r = location.protocol === "https:";
            let o = location.port;
            o || (o = r ? "443" : "80"),
                (this.xd =
                    (typeof location < "u" &&
                        t.hostname !== location.hostname) ||
                    o !== t.port),
                (this.xs = t.secure !== r);
        }
        const n = t && t.forceBase64;
        this.supportsBinary = HM && !n;
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this.poll();
    }
    pause(t) {
        this.readyState = "pausing";
        const n = () => {
            (this.readyState = "paused"), t();
        };
        if (this.polling || !this.writable) {
            let r = 0;
            this.polling &&
                (r++,
                this.once("pollComplete", function () {
                    --r || n();
                })),
                this.writable ||
                    (r++,
                    this.once("drain", function () {
                        --r || n();
                    }));
        } else n();
    }
    poll() {
        (this.polling = !0), this.doPoll(), this.emitReserved("poll");
    }
    onData(t) {
        const n = (r) => {
            if (
                (this.readyState === "opening" &&
                    r.type === "open" &&
                    this.onOpen(),
                r.type === "close")
            )
                return (
                    this.onClose({
                        description: "transport closed by the server",
                    }),
                    !1
                );
            this.onPacket(r);
        };
        MM(t, this.socket.binaryType).forEach(n),
            this.readyState !== "closed" &&
                ((this.polling = !1),
                this.emitReserved("pollComplete"),
                this.readyState === "open" && this.poll());
    }
    doClose() {
        const t = () => {
            this.write([{ type: "close" }]);
        };
        this.readyState === "open" ? t() : this.once("open", t);
    }
    write(t) {
        (this.writable = !1),
            _M(t, (n) => {
                this.doWrite(n, () => {
                    (this.writable = !0), this.emitReserved("drain");
                });
            });
    }
    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "https" : "http";
        let r = "";
        this.opts.timestampRequests !== !1 &&
            (t[this.opts.timestampParam] = $1()),
            !this.supportsBinary && !t.sid && (t.b64 = 1),
            this.opts.port &&
                ((n === "https" && Number(this.opts.port) !== 443) ||
                    (n === "http" && Number(this.opts.port) !== 80)) &&
                (r = ":" + this.opts.port);
        const o = T1(t),
            i = this.opts.hostname.indexOf(":") !== -1;
        return (
            n +
            "://" +
            (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            r +
            this.opts.path +
            (o.length ? "?" + o : "")
        );
    }
    request(t = {}) {
        return (
            Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts),
            new zn(this.uri(), t)
        );
    }
    doWrite(t, n) {
        const r = this.request({ method: "POST", data: t });
        r.on("success", n),
            r.on("error", (o, i) => {
                this.onError("xhr post error", o, i);
            });
    }
    doPoll() {
        const t = this.request();
        t.on("data", this.onData.bind(this)),
            t.on("error", (n, r) => {
                this.onError("xhr poll error", n, r);
            }),
            (this.pollXhr = t);
    }
}
let zn = class extends et {
    constructor(t, n) {
        super(),
            Su(this, n),
            (this.opts = n),
            (this.method = n.method || "GET"),
            (this.uri = t),
            (this.async = n.async !== !1),
            (this.data = n.data !== void 0 ? n.data : null),
            this.create();
    }
    create() {
        const t = k1(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
        );
        (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
        const n = (this.xhr = new I1(t));
        try {
            n.open(this.method, this.uri, this.async);
            try {
                if (this.opts.extraHeaders) {
                    n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                    for (let r in this.opts.extraHeaders)
                        this.opts.extraHeaders.hasOwnProperty(r) &&
                            n.setRequestHeader(r, this.opts.extraHeaders[r]);
                }
            } catch {}
            if (this.method === "POST")
                try {
                    n.setRequestHeader(
                        "Content-type",
                        "text/plain;charset=UTF-8"
                    );
                } catch {}
            try {
                n.setRequestHeader("Accept", "*/*");
            } catch {}
            "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                    (n.timeout = this.opts.requestTimeout),
                (n.onreadystatechange = () => {
                    n.readyState === 4 &&
                        (n.status === 200 || n.status === 1223
                            ? this.onLoad()
                            : this.setTimeoutFn(() => {
                                  this.onError(
                                      typeof n.status == "number" ? n.status : 0
                                  );
                              }, 0));
                }),
                n.send(this.data);
        } catch (r) {
            this.setTimeoutFn(() => {
                this.onError(r);
            }, 0);
            return;
        }
        typeof document < "u" &&
            ((this.index = zn.requestsCount++),
            (zn.requests[this.index] = this));
    }
    onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
    }
    cleanup(t) {
        if (!(typeof this.xhr > "u" || this.xhr === null)) {
            if (((this.xhr.onreadystatechange = VM), t))
                try {
                    this.xhr.abort();
                } catch {}
            typeof document < "u" && delete zn.requests[this.index],
                (this.xhr = null);
        }
    }
    onLoad() {
        const t = this.xhr.responseText;
        t !== null &&
            (this.emitReserved("data", t),
            this.emitReserved("success"),
            this.cleanup());
    }
    abort() {
        this.cleanup();
    }
};
zn.requestsCount = 0;
zn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Cg);
    else if (typeof addEventListener == "function") {
        const e = "onpagehide" in ir ? "pagehide" : "unload";
        addEventListener(e, Cg, !1);
    }
}
function Cg() {
    for (let e in zn.requests)
        zn.requests.hasOwnProperty(e) && zn.requests[e].abort();
}
const _1 = (() =>
        typeof Promise == "function" && typeof Promise.resolve == "function"
            ? (t) => Promise.resolve().then(t)
            : (t, n) => n(t, 0))(),
    ca = ir.WebSocket || ir.MozWebSocket,
    Eg = !0,
    GM = "arraybuffer",
    kg =
        typeof navigator < "u" &&
        typeof navigator.product == "string" &&
        navigator.product.toLowerCase() === "reactnative";
class qM extends R1 {
    constructor(t) {
        super(t), (this.supportsBinary = !t.forceBase64);
    }
    get name() {
        return "websocket";
    }
    doOpen() {
        if (!this.check()) return;
        const t = this.uri(),
            n = this.opts.protocols,
            r = kg
                ? {}
                : k1(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                  );
        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
        try {
            this.ws =
                Eg && !kg ? (n ? new ca(t, n) : new ca(t)) : new ca(t, n, r);
        } catch (o) {
            return this.emitReserved("error", o);
        }
        (this.ws.binaryType = this.socket.binaryType || GM),
            this.addEventListeners();
    }
    addEventListeners() {
        (this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }),
            (this.ws.onclose = (t) =>
                this.onClose({
                    description: "websocket connection closed",
                    context: t,
                })),
            (this.ws.onmessage = (t) => this.onData(t.data)),
            (this.ws.onerror = (t) => this.onError("websocket error", t));
    }
    write(t) {
        this.writable = !1;
        for (let n = 0; n < t.length; n++) {
            const r = t[n],
                o = n === t.length - 1;
            x1(r, this.supportsBinary, (i) => {
                const s = {};
                try {
                    Eg && this.ws.send(i);
                } catch {}
                o &&
                    _1(() => {
                        (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.close(), (this.ws = null));
    }
    uri() {
        let t = this.query || {};
        const n = this.opts.secure ? "wss" : "ws";
        let r = "";
        this.opts.port &&
            ((n === "wss" && Number(this.opts.port) !== 443) ||
                (n === "ws" && Number(this.opts.port) !== 80)) &&
            (r = ":" + this.opts.port),
            this.opts.timestampRequests && (t[this.opts.timestampParam] = $1()),
            this.supportsBinary || (t.b64 = 1);
        const o = T1(t),
            i = this.opts.hostname.indexOf(":") !== -1;
        return (
            n +
            "://" +
            (i ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
            r +
            this.opts.path +
            (o.length ? "?" + o : "")
        );
    }
    check() {
        return !!ca;
    }
}
const YM = { websocket: qM, polling: KM },
    XM =
        /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    QM = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
    ];
function _d(e) {
    const t = e,
        n = e.indexOf("["),
        r = e.indexOf("]");
    n != -1 &&
        r != -1 &&
        (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
    let o = XM.exec(e || ""),
        i = {},
        s = 14;
    for (; s--; ) i[QM[s]] = o[s] || "";
    return (
        n != -1 &&
            r != -1 &&
            ((i.source = t),
            (i.host = i.host
                .substring(1, i.host.length - 1)
                .replace(/;/g, ":")),
            (i.authority = i.authority
                .replace("[", "")
                .replace("]", "")
                .replace(/;/g, ":")),
            (i.ipv6uri = !0)),
        (i.pathNames = JM(i, i.path)),
        (i.queryKey = ZM(i, i.query)),
        i
    );
}
function JM(e, t) {
    const n = /\/{2,9}/g,
        r = t.replace(n, "/").split("/");
    return (
        (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1),
        t.slice(-1) == "/" && r.splice(r.length - 1, 1),
        r
    );
}
function ZM(e, t) {
    const n = {};
    return (
        t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, o, i) {
            o && (n[o] = i);
        }),
        n
    );
}
let zr = class extends et {
    constructor(t, n = {}) {
        super(),
            t && typeof t == "object" && ((n = t), (t = null)),
            t
                ? ((t = _d(t)),
                  (n.hostname = t.host),
                  (n.secure = t.protocol === "https" || t.protocol === "wss"),
                  (n.port = t.port),
                  t.query && (n.query = t.query))
                : n.host && (n.hostname = _d(n.host).host),
            Su(this, n),
            (this.secure =
                n.secure != null
                    ? n.secure
                    : typeof location < "u" && location.protocol === "https:"),
            n.hostname && !n.port && (n.port = this.secure ? "443" : "80"),
            (this.hostname =
                n.hostname ||
                (typeof location < "u" ? location.hostname : "localhost")),
            (this.port =
                n.port ||
                (typeof location < "u" && location.port
                    ? location.port
                    : this.secure
                    ? "443"
                    : "80")),
            (this.transports = n.transports || ["polling", "websocket"]),
            (this.readyState = ""),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
                {
                    path: "/engine.io",
                    agent: !1,
                    withCredentials: !1,
                    upgrade: !0,
                    timestampParam: "t",
                    rememberUpgrade: !1,
                    rejectUnauthorized: !0,
                    perMessageDeflate: { threshold: 1024 },
                    transportOptions: {},
                    closeOnBeforeunload: !0,
                },
                n
            )),
            (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
            typeof this.opts.query == "string" &&
                (this.opts.query = UM(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            typeof addEventListener == "function" &&
                (this.opts.closeOnBeforeunload &&
                    ((this.beforeunloadEventListener = () => {
                        this.transport &&
                            (this.transport.removeAllListeners(),
                            this.transport.close());
                    }),
                    addEventListener(
                        "beforeunload",
                        this.beforeunloadEventListener,
                        !1
                    )),
                this.hostname !== "localhost" &&
                    ((this.offlineEventListener = () => {
                        this.onClose("transport close", {
                            description: "network connection lost",
                        });
                    }),
                    addEventListener(
                        "offline",
                        this.offlineEventListener,
                        !1
                    ))),
            this.open();
    }
    createTransport(t) {
        const n = Object.assign({}, this.opts.query);
        (n.EIO = E1), (n.transport = t), this.id && (n.sid = this.id);
        const r = Object.assign({}, this.opts.transportOptions[t], this.opts, {
            query: n,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port,
        });
        return new YM[t](r);
    }
    open() {
        let t;
        if (
            this.opts.rememberUpgrade &&
            zr.priorWebsocketSuccess &&
            this.transports.indexOf("websocket") !== -1
        )
            t = "websocket";
        else if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        } else t = this.transports[0];
        this.readyState = "opening";
        try {
            t = this.createTransport(t);
        } catch {
            this.transports.shift(), this.open();
            return;
        }
        t.open(), this.setTransport(t);
    }
    setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
            (this.transport = t),
            t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (n) => this.onClose("transport close", n));
    }
    probe(t) {
        let n = this.createTransport(t),
            r = !1;
        zr.priorWebsocketSuccess = !1;
        const o = () => {
            r ||
                (n.send([{ type: "ping", data: "probe" }]),
                n.once("packet", (f) => {
                    if (!r)
                        if (f.type === "pong" && f.data === "probe") {
                            if (
                                ((this.upgrading = !0),
                                this.emitReserved("upgrading", n),
                                !n)
                            )
                                return;
                            (zr.priorWebsocketSuccess = n.name === "websocket"),
                                this.transport.pause(() => {
                                    r ||
                                        (this.readyState !== "closed" &&
                                            (d(),
                                            this.setTransport(n),
                                            n.send([{ type: "upgrade" }]),
                                            this.emitReserved("upgrade", n),
                                            (n = null),
                                            (this.upgrading = !1),
                                            this.flush()));
                                });
                        } else {
                            const c = new Error("probe error");
                            (c.transport = n.name),
                                this.emitReserved("upgradeError", c);
                        }
                }));
        };
        function i() {
            r || ((r = !0), d(), n.close(), (n = null));
        }
        const s = (f) => {
            const c = new Error("probe error: " + f);
            (c.transport = n.name), i(), this.emitReserved("upgradeError", c);
        };
        function a() {
            s("transport closed");
        }
        function l() {
            s("socket closed");
        }
        function u(f) {
            n && f.name !== n.name && i();
        }
        const d = () => {
            n.removeListener("open", o),
                n.removeListener("error", s),
                n.removeListener("close", a),
                this.off("close", l),
                this.off("upgrading", u);
        };
        n.once("open", o),
            n.once("error", s),
            n.once("close", a),
            this.once("close", l),
            this.once("upgrading", u),
            n.open();
    }
    onOpen() {
        if (
            ((this.readyState = "open"),
            (zr.priorWebsocketSuccess = this.transport.name === "websocket"),
            this.emitReserved("open"),
            this.flush(),
            this.readyState === "open" &&
                this.opts.upgrade &&
                this.transport.pause)
        ) {
            let t = 0;
            const n = this.upgrades.length;
            for (; t < n; t++) this.probe(this.upgrades[t]);
        }
    }
    onPacket(t) {
        if (
            this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing"
        )
            switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                t.type)
            ) {
                case "open":
                    this.onHandshake(JSON.parse(t.data));
                    break;
                case "ping":
                    this.resetPingTimeout(),
                        this.sendPacket("pong"),
                        this.emitReserved("ping"),
                        this.emitReserved("pong");
                    break;
                case "error":
                    const n = new Error("server error");
                    (n.code = t.data), this.onError(n);
                    break;
                case "message":
                    this.emitReserved("data", t.data),
                        this.emitReserved("message", t.data);
                    break;
            }
    }
    onHandshake(t) {
        this.emitReserved("handshake", t),
            (this.id = t.sid),
            (this.transport.query.sid = t.sid),
            (this.upgrades = this.filterUpgrades(t.upgrades)),
            (this.pingInterval = t.pingInterval),
            (this.pingTimeout = t.pingTimeout),
            (this.maxPayload = t.maxPayload),
            this.onOpen(),
            this.readyState !== "closed" && this.resetPingTimeout();
    }
    resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            this.writeBuffer.length === 0
                ? this.emitReserved("drain")
                : this.flush();
    }
    flush() {
        if (
            this.readyState !== "closed" &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
        ) {
            const t = this.getWritablePackets();
            this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
        }
    }
    getWritablePackets() {
        if (
            !(
                this.maxPayload &&
                this.transport.name === "polling" &&
                this.writeBuffer.length > 1
            )
        )
            return this.writeBuffer;
        let n = 1;
        for (let r = 0; r < this.writeBuffer.length; r++) {
            const o = this.writeBuffer[r].data;
            if ((o && (n += zM(o)), r > 0 && n > this.maxPayload))
                return this.writeBuffer.slice(0, r);
            n += 2;
        }
        return this.writeBuffer;
    }
    write(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    send(t, n, r) {
        return this.sendPacket("message", t, n, r), this;
    }
    sendPacket(t, n, r, o) {
        if (
            (typeof n == "function" && ((o = n), (n = void 0)),
            typeof r == "function" && ((o = r), (r = null)),
            this.readyState === "closing" || this.readyState === "closed")
        )
            return;
        (r = r || {}), (r.compress = r.compress !== !1);
        const i = { type: t, data: n, options: r };
        this.emitReserved("packetCreate", i),
            this.writeBuffer.push(i),
            o && this.once("flush", o),
            this.flush();
    }
    close() {
        const t = () => {
                this.onClose("forced close"), this.transport.close();
            },
            n = () => {
                this.off("upgrade", n), this.off("upgradeError", n), t();
            },
            r = () => {
                this.once("upgrade", n), this.once("upgradeError", n);
            };
        return (
            (this.readyState === "opening" || this.readyState === "open") &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                    ? this.once("drain", () => {
                          this.upgrading ? r() : t();
                      })
                    : this.upgrading
                    ? r()
                    : t()),
            this
        );
    }
    onError(t) {
        (zr.priorWebsocketSuccess = !1),
            this.emitReserved("error", t),
            this.onClose("transport error", t);
    }
    onClose(t, n) {
        (this.readyState === "opening" ||
            this.readyState === "open" ||
            this.readyState === "closing") &&
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            typeof removeEventListener == "function" &&
                (removeEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", t, n),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
    }
    filterUpgrades(t) {
        const n = [];
        let r = 0;
        const o = t.length;
        for (; r < o; r++) ~this.transports.indexOf(t[r]) && n.push(t[r]);
        return n;
    }
};
zr.protocol = E1;
function eN(e, t = "", n) {
    let r = e;
    (n = n || (typeof location < "u" && location)),
        e == null && (e = n.protocol + "//" + n.host),
        typeof e == "string" &&
            (e.charAt(0) === "/" &&
                (e.charAt(1) === "/" ? (e = n.protocol + e) : (e = n.host + e)),
            /^(https?|wss?):\/\//.test(e) ||
                (typeof n < "u"
                    ? (e = n.protocol + "//" + e)
                    : (e = "https://" + e)),
            (r = _d(e))),
        r.port ||
            (/^(http|ws)$/.test(r.protocol)
                ? (r.port = "80")
                : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
        (r.path = r.path || "/");
    const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
    return (
        (r.id = r.protocol + "://" + i + ":" + r.port + t),
        (r.href =
            r.protocol +
            "://" +
            i +
            (n && n.port === r.port ? "" : ":" + r.port)),
        r
    );
}
const tN = typeof ArrayBuffer == "function",
    nN = (e) =>
        typeof ArrayBuffer.isView == "function"
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
    M1 = Object.prototype.toString,
    rN =
        typeof Blob == "function" ||
        (typeof Blob < "u" && M1.call(Blob) === "[object BlobConstructor]"),
    oN =
        typeof File == "function" ||
        (typeof File < "u" && M1.call(File) === "[object FileConstructor]");
function Cp(e) {
    return (
        (tN && (e instanceof ArrayBuffer || nN(e))) ||
        (rN && e instanceof Blob) ||
        (oN && e instanceof File)
    );
}
function Ta(e, t) {
    if (!e || typeof e != "object") return !1;
    if (Array.isArray(e)) {
        for (let n = 0, r = e.length; n < r; n++) if (Ta(e[n])) return !0;
        return !1;
    }
    if (Cp(e)) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
        return Ta(e.toJSON(), !0);
    for (const n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && Ta(e[n])) return !0;
    return !1;
}
function iN(e) {
    const t = [],
        n = e.data,
        r = e;
    return (
        (r.data = Md(n, t)),
        (r.attachments = t.length),
        { packet: r, buffers: t }
    );
}
function Md(e, t) {
    if (!e) return e;
    if (Cp(e)) {
        const n = { _placeholder: !0, num: t.length };
        return t.push(e), n;
    } else if (Array.isArray(e)) {
        const n = new Array(e.length);
        for (let r = 0; r < e.length; r++) n[r] = Md(e[r], t);
        return n;
    } else if (typeof e == "object" && !(e instanceof Date)) {
        const n = {};
        for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Md(e[r], t));
        return n;
    }
    return e;
}
function sN(e, t) {
    return (e.data = Nd(e.data, t)), delete e.attachments, e;
}
function Nd(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
            return t[e.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(e))
        for (let n = 0; n < e.length; n++) e[n] = Nd(e[n], t);
    else if (typeof e == "object")
        for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Nd(e[n], t));
    return e;
}
const aN = 5;
var fe;
(function (e) {
    (e[(e.CONNECT = 0)] = "CONNECT"),
        (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
        (e[(e.EVENT = 2)] = "EVENT"),
        (e[(e.ACK = 3)] = "ACK"),
        (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
})(fe || (fe = {}));
class lN {
    constructor(t) {
        this.replacer = t;
    }
    encode(t) {
        return (t.type === fe.EVENT || t.type === fe.ACK) && Ta(t)
            ? this.encodeAsBinary({
                  type: t.type === fe.EVENT ? fe.BINARY_EVENT : fe.BINARY_ACK,
                  nsp: t.nsp,
                  data: t.data,
                  id: t.id,
              })
            : [this.encodeAsString(t)];
    }
    encodeAsString(t) {
        let n = "" + t.type;
        return (
            (t.type === fe.BINARY_EVENT || t.type === fe.BINARY_ACK) &&
                (n += t.attachments + "-"),
            t.nsp && t.nsp !== "/" && (n += t.nsp + ","),
            t.id != null && (n += t.id),
            t.data != null && (n += JSON.stringify(t.data, this.replacer)),
            n
        );
    }
    encodeAsBinary(t) {
        const n = iN(t),
            r = this.encodeAsString(n.packet),
            o = n.buffers;
        return o.unshift(r), o;
    }
}
class Ep extends et {
    constructor(t) {
        super(), (this.reviver = t);
    }
    add(t) {
        let n;
        if (typeof t == "string") {
            if (this.reconstructor)
                throw new Error(
                    "got plaintext data when reconstructing a packet"
                );
            n = this.decodeString(t);
            const r = n.type === fe.BINARY_EVENT;
            r || n.type === fe.BINARY_ACK
                ? ((n.type = r ? fe.EVENT : fe.ACK),
                  (this.reconstructor = new uN(n)),
                  n.attachments === 0 && super.emitReserved("decoded", n))
                : super.emitReserved("decoded", n);
        } else if (Cp(t) || t.base64)
            if (this.reconstructor)
                (n = this.reconstructor.takeBinaryData(t)),
                    n &&
                        ((this.reconstructor = null),
                        super.emitReserved("decoded", n));
            else
                throw new Error(
                    "got binary data when not reconstructing a packet"
                );
        else throw new Error("Unknown type: " + t);
    }
    decodeString(t) {
        let n = 0;
        const r = { type: Number(t.charAt(0)) };
        if (fe[r.type] === void 0)
            throw new Error("unknown packet type " + r.type);
        if (r.type === fe.BINARY_EVENT || r.type === fe.BINARY_ACK) {
            const i = n + 1;
            for (; t.charAt(++n) !== "-" && n != t.length; );
            const s = t.substring(i, n);
            if (s != Number(s) || t.charAt(n) !== "-")
                throw new Error("Illegal attachments");
            r.attachments = Number(s);
        }
        if (t.charAt(n + 1) === "/") {
            const i = n + 1;
            for (; ++n && !(t.charAt(n) === "," || n === t.length); );
            r.nsp = t.substring(i, n);
        } else r.nsp = "/";
        const o = t.charAt(n + 1);
        if (o !== "" && Number(o) == o) {
            const i = n + 1;
            for (; ++n; ) {
                const s = t.charAt(n);
                if (s == null || Number(s) != s) {
                    --n;
                    break;
                }
                if (n === t.length) break;
            }
            r.id = Number(t.substring(i, n + 1));
        }
        if (t.charAt(++n)) {
            const i = this.tryParse(t.substr(n));
            if (Ep.isPayloadValid(r.type, i)) r.data = i;
            else throw new Error("invalid payload");
        }
        return r;
    }
    tryParse(t) {
        try {
            return JSON.parse(t, this.reviver);
        } catch {
            return !1;
        }
    }
    static isPayloadValid(t, n) {
        switch (t) {
            case fe.CONNECT:
                return typeof n == "object";
            case fe.DISCONNECT:
                return n === void 0;
            case fe.CONNECT_ERROR:
                return typeof n == "string" || typeof n == "object";
            case fe.EVENT:
            case fe.BINARY_EVENT:
                return Array.isArray(n) && n.length > 0;
            case fe.ACK:
            case fe.BINARY_ACK:
                return Array.isArray(n);
        }
    }
    destroy() {
        this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
    }
}
class uN {
    constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
    }
    takeBinaryData(t) {
        if (
            (this.buffers.push(t),
            this.buffers.length === this.reconPack.attachments)
        ) {
            const n = sN(this.reconPack, this.buffers);
            return this.finishedReconstruction(), n;
        }
        return null;
    }
    finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
    }
}
const cN = Object.freeze(
    Object.defineProperty(
        {
            __proto__: null,
            Decoder: Ep,
            Encoder: lN,
            get PacketType() {
                return fe;
            },
            protocol: aN,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);
function dn(e, t, n) {
    return (
        e.on(t, n),
        function () {
            e.off(t, n);
        }
    );
}
const dN = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1,
});
class N1 extends et {
    constructor(t, n, r) {
        super(),
            (this.connected = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = t),
            (this.nsp = n),
            r && r.auth && (this.auth = r.auth),
            this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
            dn(t, "open", this.onopen.bind(this)),
            dn(t, "packet", this.onpacket.bind(this)),
            dn(t, "error", this.onerror.bind(this)),
            dn(t, "close", this.onclose.bind(this)),
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected
            ? this
            : (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              this.io._readyState === "open" && this.onopen(),
              this);
    }
    open() {
        return this.connect();
    }
    send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
    }
    emit(t, ...n) {
        if (dN.hasOwnProperty(t))
            throw new Error('"' + t.toString() + '" is a reserved event name');
        n.unshift(t);
        const r = { type: fe.EVENT, data: n };
        if (
            ((r.options = {}),
            (r.options.compress = this.flags.compress !== !1),
            typeof n[n.length - 1] == "function")
        ) {
            const s = this.ids++,
                a = n.pop();
            this._registerAckCallback(s, a), (r.id = s);
        }
        const o =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
        return (
            (this.flags.volatile && (!o || !this.connected)) ||
                (this.connected
                    ? (this.notifyOutgoingListeners(r), this.packet(r))
                    : this.sendBuffer.push(r)),
            (this.flags = {}),
            this
        );
    }
    _registerAckCallback(t, n) {
        const r = this.flags.timeout;
        if (r === void 0) {
            this.acks[t] = n;
            return;
        }
        const o = this.io.setTimeoutFn(() => {
            delete this.acks[t];
            for (let i = 0; i < this.sendBuffer.length; i++)
                this.sendBuffer[i].id === t && this.sendBuffer.splice(i, 1);
            n.call(this, new Error("operation has timed out"));
        }, r);
        this.acks[t] = (...i) => {
            this.io.clearTimeoutFn(o), n.apply(this, [null, ...i]);
        };
    }
    packet(t) {
        (t.nsp = this.nsp), this.io._packet(t);
    }
    onopen() {
        typeof this.auth == "function"
            ? this.auth((t) => {
                  this.packet({ type: fe.CONNECT, data: t });
              })
            : this.packet({ type: fe.CONNECT, data: this.auth });
    }
    onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
    }
    onclose(t, n) {
        (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", t, n);
    }
    onpacket(t) {
        if (t.nsp === this.nsp)
            switch (t.type) {
                case fe.CONNECT:
                    if (t.data && t.data.sid) {
                        const o = t.data.sid;
                        this.onconnect(o);
                    } else
                        this.emitReserved(
                            "connect_error",
                            new Error(
                                "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                            )
                        );
                    break;
                case fe.EVENT:
                case fe.BINARY_EVENT:
                    this.onevent(t);
                    break;
                case fe.ACK:
                case fe.BINARY_ACK:
                    this.onack(t);
                    break;
                case fe.DISCONNECT:
                    this.ondisconnect();
                    break;
                case fe.CONNECT_ERROR:
                    this.destroy();
                    const r = new Error(t.data.message);
                    (r.data = t.data.data),
                        this.emitReserved("connect_error", r);
                    break;
            }
    }
    onevent(t) {
        const n = t.data || [];
        t.id != null && n.push(this.ack(t.id)),
            this.connected
                ? this.emitEvent(n)
                : this.receiveBuffer.push(Object.freeze(n));
    }
    emitEvent(t) {
        if (this._anyListeners && this._anyListeners.length) {
            const n = this._anyListeners.slice();
            for (const r of n) r.apply(this, t);
        }
        super.emit.apply(this, t);
    }
    ack(t) {
        const n = this;
        let r = !1;
        return function (...o) {
            r || ((r = !0), n.packet({ type: fe.ACK, id: t, data: o }));
        };
    }
    onack(t) {
        const n = this.acks[t.id];
        typeof n == "function" &&
            (n.apply(this, t.data), delete this.acks[t.id]);
    }
    onconnect(t) {
        (this.id = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect");
    }
    emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((t) => {
                this.notifyOutgoingListeners(t), this.packet(t);
            }),
            (this.sendBuffer = []);
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
            this.io._destroy(this);
    }
    disconnect() {
        return (
            this.connected && this.packet({ type: fe.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
        );
    }
    close() {
        return this.disconnect();
    }
    compress(t) {
        return (this.flags.compress = t), this;
    }
    get volatile() {
        return (this.flags.volatile = !0), this;
    }
    timeout(t) {
        return (this.flags.timeout = t), this;
    }
    onAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(t),
            this
        );
    }
    prependAny(t) {
        return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(t),
            this
        );
    }
    offAny(t) {
        if (!this._anyListeners) return this;
        if (t) {
            const n = this._anyListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(t),
            this
        );
    }
    prependAnyOutgoing(t) {
        return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(t),
            this
        );
    }
    offAnyOutgoing(t) {
        if (!this._anyOutgoingListeners) return this;
        if (t) {
            const n = this._anyOutgoingListeners;
            for (let r = 0; r < n.length; r++)
                if (t === n[r]) return n.splice(r, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const n = this._anyOutgoingListeners.slice();
            for (const r of n) r.apply(this, t.data);
        }
    }
}
function di(e) {
    (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
}
di.prototype.duration = function () {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + n : e - n;
    }
    return Math.min(e, this.max) | 0;
};
di.prototype.reset = function () {
    this.attempts = 0;
};
di.prototype.setMin = function (e) {
    this.ms = e;
};
di.prototype.setMax = function (e) {
    this.max = e;
};
di.prototype.setJitter = function (e) {
    this.jitter = e;
};
class Ad extends et {
    constructor(t, n) {
        var r;
        super(),
            (this.nsps = {}),
            (this.subs = []),
            t && typeof t == "object" && ((n = t), (t = void 0)),
            (n = n || {}),
            (n.path = n.path || "/socket.io"),
            (this.opts = n),
            Su(this, n),
            this.reconnection(n.reconnection !== !1),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
                (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
            ),
            (this.backoff = new di({
                min: this.reconnectionDelay(),
                max: this.reconnectionDelayMax(),
                jitter: this.randomizationFactor(),
            })),
            this.timeout(n.timeout == null ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
        const o = n.parser || cN;
        (this.encoder = new o.Encoder()),
            (this.decoder = new o.Decoder()),
            (this._autoConnect = n.autoConnect !== !1),
            this._autoConnect && this.open();
    }
    reconnection(t) {
        return arguments.length
            ? ((this._reconnection = !!t), this)
            : this._reconnection;
    }
    reconnectionAttempts(t) {
        return t === void 0
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = t), this);
    }
    reconnectionDelay(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = t),
              (n = this.backoff) === null || n === void 0 || n.setMin(t),
              this);
    }
    randomizationFactor(t) {
        var n;
        return t === void 0
            ? this._randomizationFactor
            : ((this._randomizationFactor = t),
              (n = this.backoff) === null || n === void 0 || n.setJitter(t),
              this);
    }
    reconnectionDelayMax(t) {
        var n;
        return t === void 0
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = t),
              (n = this.backoff) === null || n === void 0 || n.setMax(t),
              this);
    }
    timeout(t) {
        return arguments.length ? ((this._timeout = t), this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting &&
            this._reconnection &&
            this.backoff.attempts === 0 &&
            this.reconnect();
    }
    open(t) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new zr(this.uri, this.opts);
        const n = this.engine,
            r = this;
        (this._readyState = "opening"), (this.skipReconnect = !1);
        const o = dn(n, "open", function () {
                r.onopen(), t && t();
            }),
            i = dn(n, "error", (s) => {
                r.cleanup(),
                    (r._readyState = "closed"),
                    this.emitReserved("error", s),
                    t ? t(s) : r.maybeReconnectOnOpen();
            });
        if (this._timeout !== !1) {
            const s = this._timeout;
            s === 0 && o();
            const a = this.setTimeoutFn(() => {
                o(), n.close(), n.emit("error", new Error("timeout"));
            }, s);
            this.opts.autoUnref && a.unref(),
                this.subs.push(function () {
                    clearTimeout(a);
                });
        }
        return this.subs.push(o), this.subs.push(i), this;
    }
    connect(t) {
        return this.open(t);
    }
    onopen() {
        this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
            dn(t, "ping", this.onping.bind(this)),
            dn(t, "data", this.ondata.bind(this)),
            dn(t, "error", this.onerror.bind(this)),
            dn(t, "close", this.onclose.bind(this)),
            dn(this.decoder, "decoded", this.ondecoded.bind(this))
        );
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(t) {
        try {
            this.decoder.add(t);
        } catch (n) {
            this.onclose("parse error", n);
        }
    }
    ondecoded(t) {
        _1(() => {
            this.emitReserved("packet", t);
        }, this.setTimeoutFn);
    }
    onerror(t) {
        this.emitReserved("error", t);
    }
    socket(t, n) {
        let r = this.nsps[t];
        return r || ((r = new N1(this, t, n)), (this.nsps[t] = r)), r;
    }
    _destroy(t) {
        const n = Object.keys(this.nsps);
        for (const r of n) if (this.nsps[r].active) return;
        this._close();
    }
    _packet(t) {
        const n = this.encoder.encode(t);
        for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options);
    }
    cleanup() {
        this.subs.forEach((t) => t()),
            (this.subs.length = 0),
            this.decoder.destroy();
    }
    _close() {
        (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
    }
    disconnect() {
        return this._close();
    }
    onclose(t, n) {
        this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", t, n),
            this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
                this.emitReserved("reconnect_failed"),
                (this._reconnecting = !1);
        else {
            const n = this.backoff.duration();
            this._reconnecting = !0;
            const r = this.setTimeoutFn(() => {
                t.skipReconnect ||
                    (this.emitReserved("reconnect_attempt", t.backoff.attempts),
                    !t.skipReconnect &&
                        t.open((o) => {
                            o
                                ? ((t._reconnecting = !1),
                                  t.reconnect(),
                                  this.emitReserved("reconnect_error", o))
                                : t.onreconnect();
                        }));
            }, n);
            this.opts.autoUnref && r.unref(),
                this.subs.push(function () {
                    clearTimeout(r);
                });
        }
    }
    onreconnect() {
        const t = this.backoff.attempts;
        (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", t);
    }
}
const $i = {};
function Oa(e, t) {
    typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
    const n = eN(e, t.path || "/socket.io"),
        r = n.source,
        o = n.id,
        i = n.path,
        s = $i[o] && i in $i[o].nsps,
        a = t.forceNew || t["force new connection"] || t.multiplex === !1 || s;
    let l;
    return (
        a ? (l = new Ad(r, t)) : ($i[o] || ($i[o] = new Ad(r, t)), (l = $i[o])),
        n.query && !t.query && (t.query = n.queryKey),
        l.socket(n.path, t)
    );
}
Object.assign(Oa, { Manager: Ad, Socket: N1, io: Oa, connect: Oa });
const ft = Oa("http://localhost:4000");
function fN() {
    const [e, t] = b.useState(!1),
        [n, r] = b.useState(null),
        [o] = w0(),
        i = b.useMemo(
            () => ({ roomId: o.get("roomId"), pid: o.get("pid") }),
            [o]
        );
    b.useEffect(
        () => (
            ft.emit("get-game-state", i.roomId),
            ft.on("game-state-updated", (d) => {
                r(d.players.find((f) => f.id === i.pid));
            }),
            ft.on("update-player-data", (d) => {
                console.log("Updated the Player"), console.log(d), r(d);
            }),
            ft.on("no-player-found", () => {
                r(null);
            }),
            () => {
                ft.removeAllListeners();
            }
        ),
        [i]
    );
    function s() {
        t((d) => !d);
    }
    function a(d) {
        ft.emit("decrement-stat", d);
    }
    function l(d) {
        ft.emit("increment-stat", d);
    }
    function u(d) {
        d ? console.log("open heal modal") : ft.emit("used-ability");
    }
    return n
        ? le(zs, {
              elevation: 0,
              square: !0,
              sx: {
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  color: "text.secondary",
                  backgroundColor: "primary.main",
              },
              children: [
                  le(lM, {
                      sx: { paddingRight: 1 },
                      children: [
                          R(Qt, {
                              variant: "h4",
                              sx: { flex: 1 },
                              children: n.name,
                          }),
                          R(Xi, {
                              sx: { color: "text.secondary" },
                              children: R(yM, { fontSize: "medium" }),
                          }),
                      ],
                  }),
                  R(Wo, {
                      sx: { m: "auto", width: "80%", borderBottomWidth: 1 },
                  }),
                  le(b$, {
                      disableGutters: !0,
                      elevation: 0,
                      sx: {
                          backgroundColor: "primary.main",
                          "&:before": { display: "none" },
                      },
                      children: [
                          R(J$, {
                              expandIcon: R(vM, {}),
                              children: R(Qt, { children: n.title }),
                          }),
                          le(k$, {
                              children: [
                                  R(Qt, { children: n.abilityDescription }),
                                  R(Qt, {
                                      fontWeight: 500,
                                      children: "Starting Items:",
                                  }),
                                  R(Qt, { children: n.startingItems }),
                              ],
                          }),
                      ],
                  }),
                  le(st, {
                      display: "flex",
                      flexWrap: "wrap",
                      children: [
                          R(da, {
                              name: `Sanity (${n.maxSanity})`,
                              onIncrement: () => l("sanity"),
                              onDecrement: () => a("sanity"),
                              value: n.sanity,
                          }),
                          R(Wo, { orientation: "vertical", flexItem: !0 }),
                          R(da, {
                              name: `Stamina (${n.maxStamina})`,
                              onIncrement: () => l("stamina"),
                              onDecrement: () => a("stamina"),
                              value: n.stamina,
                          }),
                      ],
                  }),
                  le(st, {
                      flex: 1,
                      p: 1,
                      children: [
                          R(st, {
                              sx: {
                                  p: 2,
                                  display: "flex",
                                  justifyContent: "center",
                              },
                              children: R(SM, { currentHour: 3 }),
                          }),
                          le(st, {
                              display: "flex",
                              justifyContent: "space-between",
                              px: 8,
                              children: [
                                  R(Xi, {
                                      sx: {
                                          backgroundColor: "primary.dark",
                                          color: "text.secondary",
                                      },
                                      children: R(xM, { fontSize: "large" }),
                                  }),
                                  R(Xi, {
                                      sx: {
                                          backgroundColor: "primary.dark",
                                          color: "text.secondary",
                                      },
                                      children: R(wM, { fontSize: "large" }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  n.hasDailyAbility && R(pN, { player: n, onClick: u }),
                  le(st, {
                      display: "flex",
                      flexWrap: "wrap",
                      children: [
                          R(da, {
                              name: "Clue Notes",
                              onIncrement: () => l("clueNotes"),
                              onDecrement: () => a("clueNotes"),
                              value: n.clueNotes,
                          }),
                          R(Wo, { orientation: "vertical", flexItem: !0 }),
                          R(da, {
                              name: "Elder Signs",
                              onIncrement: () => l("elderSigns"),
                              onDecrement: () => a("elderSigns"),
                              value: n.elderSigns,
                          }),
                      ],
                  }),
                  R(AO, {
                      anchor: "bottom",
                      open: e,
                      onClose: s,
                      children: R(xp, {
                          children: R(qI, {
                              children: R(Qt, { children: "Harvey Walters" }),
                          }),
                      }),
                  }),
                  R(st, {
                      p: 1,
                      width: 1,
                      display: "flex",
                      children: R(Rs, {
                          fullWidth: !0,
                          variant: "contained",
                          sx: { backgroundColor: "primary.dark" },
                          onClick: s,
                          children: "View Players",
                      }),
                  }),
              ],
          })
        : R(st, { sx: { background: "red" }, children: "Loading Game..." });
}
function pN({ player: e, onClick: t }) {
    let n = "",
        r = !1;
    return (
        e.dailyAbility.includes("heal")
            ? ((n = "Heal"), (r = !0))
            : e.dailyAbility.includes("roll") && (n = "Re-Roll 2 Dice"),
        R(st, {
            p: 1,
            children: R(Rs, {
                disabled: e.usedDailyAbility,
                fullWidth: !0,
                variant: "contained",
                sx: { backgroundColor: "primary.dark" },
                onClick: () => t(r),
                children: n,
            }),
        })
    );
}
function da(e) {
    return le(st, {
        sx: {
            display: "flex",
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "primary.dark",
            color: "#C59849",
            py: 1,
        },
        children: [
            R(Qt, { variant: "h4", component: "p", children: e.name }),
            le(st, {
                display: "flex",
                alignItems: "center",
                children: [
                    R(Xi, {
                        href: "",
                        sx: { color: "text.secondary" },
                        onClick: e.onDecrement,
                        children: R(bM, {}),
                    }),
                    R(Qt, {
                        variant: "h2",
                        component: "p",
                        sx: { mx: 1, fontWeight: 500 },
                        children: e.value,
                    }),
                    R(Xi, {
                        href: "",
                        sx: { color: "text.secondary" },
                        onClick: e.onIncrement,
                        children: R(gM, {}),
                    }),
                ],
            }),
        ],
    });
}
function hN() {
    b.useState(!1);
    const [e, t] = b.useState("");
    b.useState([]);
    const n = Zl();
    b.useEffect(
        () => (
            ft.on("joined-room", (s) => {
                n(`select-player?roomId=${s}`);
            }),
            () => {
                ft.removeAllListeners();
            }
        ),
        []
    );
    function r() {
        ft.emit("create-room");
    }
    function o() {
        ft.emit("join-room", e);
    }
    function i(s) {
        s.target.value.length > 4 || t(s.target.value.toUpperCase());
    }
    return le(o1, {
        sx: {
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        maxWidth: "sm",
        children: [
            R(st, {
                sx: { p: 2, textAlign: "center" },
                children: R(Qt, {
                    color: "text.secondary",
                    variant: "h3",
                    component: "h1",
                    children: "Elder Sign Companion",
                }),
            }),
            le(nM, {
                sx: { width: 1, color: "text.secondary" },
                spacing: 2,
                children: [
                    R(mM, {
                        inputProps: {
                            style: { textAlign: "center", fontSize: "large" },
                        },
                        value: e,
                        placeholder: "Game ID",
                        name: "roomId",
                        onChange: i,
                    }),
                    R(Rs, {
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        size: "large",
                        onClick: o,
                        children: "Join Game",
                    }),
                    R(st, {
                        children: R(Wo, { children: R(wT, { label: "OR" }) }),
                    }),
                    R(Rs, {
                        fullWidth: !0,
                        size: "large",
                        variant: "contained",
                        color: "primary",
                        onClick: r,
                        children: "New Game",
                    }),
                ],
            }),
        ],
    });
}
function mN() {
    const [e, t] = b.useState([]),
        [n] = w0(),
        r = Zl();
    b.useEffect(
        () => (
            ft.emit("get-player-list", n.get("roomId")),
            ft.on("player-list", (i) => {
                t(i);
            }),
            ft.on("player-added", (i) => {
                console.log(i, "PLAYER"),
                    r(`/game?roomId=${n.get("roomId")}&pid=${i.id}`);
            }),
            () => {
                ft.removeAllListeners();
            }
        ),
        [n]
    );
    function o(i) {
        ft.emit("select-player", { roomId: n.get("roomId"), playerId: i });
    }
    return le(o1, {
        maxWidth: "sm",
        children: [
            R(st, {
                p: 2,
                children: R(Qt, {
                    textAlign: "center",
                    variant: "h3",
                    component: "h1",
                    children: "Select Investigator",
                }),
            }),
            le(xp, {
                children: [
                    R(Wo, { component: "li" }),
                    e.map((i) =>
                        le(lb, {
                            children: [
                                R(AI, {
                                    disabled: i.selected,
                                    sx: { textAlign: "center" },
                                    onClick: () => o(i.id),
                                    children: i.name,
                                }),
                                R(Wo, { component: "li" }),
                            ],
                        })
                    ),
                ],
            }),
        ],
    });
}
const gN = _E([
    { path: "/", element: R(hN, {}), errorElement: R(hc, {}) },
    { path: "/select-player", element: R(mN, {}), errorElement: R(hc, {}) },
    { path: "/game", element: R(fN, {}), errorElement: R(hc, {}) },
]);
let Ld = pp({
    palette: {
        mode: "dark",
        primary: { light: "#C59849", main: "#4C443C", dark: "#282828" },
        secondary: { main: "#322214", contrastText: "#C59849" },
    },
});
Ld = sP(Ld);
const vN = Ld;
mc.createRoot(document.getElementById("root")).render(
    R(Jt.StrictMode, {
        children: le(C2, {
            theme: vN,
            children: [
                R(uO, {}),
                R(Qw, { store: vC, children: R(PE, { router: gN }) }),
            ],
        }),
    })
);
