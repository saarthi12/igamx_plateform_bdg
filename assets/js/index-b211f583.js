import {
    V as E,
    W as m,
    ac as w,
    a7 as F,
    ah as ne,
    D as d,
    ai as Se,
    K as ae,
    M as se,
    X as k,
    a2 as W,
    a3 as _e,
    Y as r,
    a4 as S,
    _ as p,
    w as j,
    I as me,
    ap as ve,
    r as f,
    a1 as pe,
    a8 as C,
    m as Ie,
    U as Ee,
    F as U,
    C as te,
    a0 as N,
    a5 as L,
    $ as A,
    a6 as re,
    G as Ce,
    aD as Le,
    b0 as Te,
    b1 as $e,
    T as De,
    a9 as Y,
    Z as ce,
    x as Ae,
    b2 as Pe,
    aj as z,
    ak as xe,
    b3 as Ve,
    b4 as Re,
    b5 as Be,
    b6 as Oe,
    b7 as qe,
    b8 as Ne,
    b9 as He,
    ba as Ge,
    bb as Me,
    bc as Ue,
    bd as Fe,
    be as je,
    bf as Ke,
    bg as ze,
    bh as Ye,
    bi as We,
    bj as Xe,
    bk as Qe,
    bl as Ze,
    bm as Je,
    bn as et,
    bo as tt,
    bp as at,
    bq as st,
    br as ot,
    bs as nt,
    bt as it,
    bu as lt,
    bv as rt,
    bw as ct,
    bx as ut,
    by as dt,
    bz as _t,
    bA as mt,
    bB as vt,
    bC as pt,
    bD as ft,
    bE as gt,
    bF as ht,
    bG as bt,
    bH as yt
} from "./modules-fbc96342.js";
import {
    m as g,
    _ as V,
    G as fe,
    g as x,
    aQ as wt,
    aV as ie,
    du as ge,
    dv as kt,
    C as oe,
    u as St,
    S as he,
    a as It,
    dw as Et,
    dx as Ct,
    dy as Lt,
    dz as Tt,
    s as $t,
    aZ as Dt,
    i as At,
    j as Pt,
    k as be,
    dA as ue,
    a9 as xt
} from "./page-activity-8d7959ff.js";
import {
    e as Vt
} from "./page-home-fb16cb98.js";
import "./native/index-08561a08.js";
import "./en-bab51ca4.js";
import "./rus-ecb14220.js";
import "./vi-82b0febd.js";
import "./id-16b6cb52.js";
import "./hd-c5b1d7e8.js";
import "./tha-330057b2.js";
import "./md-e8a5e3b0.js";
import "./bra-6692a9a5.js";
import "./my-32fb9d60.js";
import "./bdt-d8f19d0c.js";
import "./zh-7d334abd.js";
import "./pak-cdc12211.js";
import "./ar-1c9ff85b.js";
(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) o(t);
    new MutationObserver(t => {
        for (const i of t)
            if (i.type === "childList")
                for (const n of i.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && o(n)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function e(t) {
        const i = {};
        return t.integrity && (i.integrity = t.integrity), t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? i.credentials = "include" : t.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function o(t) {
        if (t.ep) return;
        t.ep = !0;
        const i = e(t);
        fetch(t.href, i)
    }
})();
const ye = (s, a) => {
        const e = s[a];
        return e ? typeof e == "function" ? e() : Promise.resolve(e) : new Promise((o, t) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(t.bind(null, new Error("Unknown variable dynamic import: " + a)))
        })
    },
    Rt = E({
        __name: "Icon",
        props: {
            name: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            const a = s,
                e = Se(() => ye(Object.assign({
                    "../../assets/icons/tabBarIcons/activity.svg": () => g(() => import("./activity-14249b07.js"), ["assets/js/activity-14249b07.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"]),
                    "../../assets/icons/tabBarIcons/chat.svg": () => g(() => import("./chat-5020b3f9.js"), ["assets/js/chat-5020b3f9.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"]),
                    "../../assets/icons/tabBarIcons/home.svg": () => g(() => import("./home-8e0a2b43.js"), ["assets/js/home-8e0a2b43.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"]),
                    "../../assets/icons/tabBarIcons/main.svg": () => g(() => import("./main-3ad2cedd.js"), ["assets/js/main-3ad2cedd.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"]),
                    "../../assets/icons/tabBarIcons/promotion.svg": () => g(() => import("./promotion-3fd9f6de.js"), ["assets/js/promotion-3fd9f6de.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"]),
                    "../../assets/icons/tabBarIcons/wallet.svg": () => g(() => import("./wallet-3106672d.js"), ["assets/js/wallet-3106672d.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css"])
                }), `../../assets/icons/tabBarIcons/${a.name}.svg`)),
                o = a.name === "promotion",
                t = a.name === "wallet";
            return (i, n) => (m(), w(ne(d(e)), {
                viewBox: o ? "0 0 140 140" : "0 0 56 56",
                class: F({
                    wallet: t
                })
            }, null, 8, ["viewBox", "class"]))
        }
    }),
    Bt = {
        class: "tabbar__container"
    },
    Ot = ["onClick"],
    qt = E({
        __name: "index",
        setup(s) {
            const a = ae(),
                e = se();
            async function o(i) {
                await a.push({
                    name: i
                })
            }
            const t = [{
                name: "home"
            }, {
                name: "activity"
            }, {
                name: "promotion"
            }, {
                name: "wallet"
            }, {
                name: "main"
            }];
            return (i, n) => (m(), k("div", Bt, [(m(), k(W, null, _e(t, (l, c) => r("div", {
                class: F(["tabbar__container-item", {
                    active: l.name === d(e).name
                }]),
                key: l + "" + c,
                onClick: u => o(l.name)
            }, [S(Rt, {
                name: l.name
            }, null, 8, ["name"]), r("span", null, p(i.$t(l.name)), 1)], 10, Ot)), 64))]))
        }
    });
const Nt = V(qt, [
    ["__scopeId", "data-v-76c247f8"]
]);

function Ht() {
    const s = fe(),
        a = () => {
            document.visibilityState === "visible" ? s.setvisibility() : s.setvisibility(0)
        };
    j(() => {
        document.addEventListener("visibilitychange", a)
    }), me(() => {
        document.removeEventListener("visibilitychange", a)
    })
}
const Gt = E({
    __name: "Customer",
    setup(s) {
        ve(v => ({
            "17a7a9f6": $.value
        }));
        const a = f(!1),
            e = f({
                x: 0,
                y: 0
            }),
            o = f(0),
            t = f(0),
            i = f(0),
            n = f(0),
            l = f(0),
            c = f(0),
            u = f();
        let _, H, G, R;
        const M = ae();

        function K() {
            O(_, H, G, R) || M.push({
                name: "CustomerService"
            })
        }
        j(() => {
            u.value = document.getElementById("customerId")
        });

        function B(v) {
            a.value = !0;
            var h;
            v.touches ? h = v.touches[0] : h = v, e.value.x = h.clientX, e.value.y = h.clientY, o.value = u.value.offsetLeft, t.value = u.value.offsetTop, _ = v.clientX, H = v.clientY
        }

        function y(v) {
            if (a.value) {
                var h, D = document.getElementById("customerId"),
                    q = D.clientWidth,
                    X = D.clientHeight,
                    Q = document.documentElement.clientHeight,
                    Z = document.documentElement.clientWidth;
                v.touches ? h = v.touches[0] : h = v, i.value = h.clientX - e.value.x, n.value = h.clientY - e.value.y, l.value = o.value + i.value, c.value = t.value + n.value, l.value <= 0 && (l.value = 0), c.value <= 0 && (c.value = 0), l.value >= Z - q && (l.value = Z - q), c.value >= Q - X && (c.value = Q - X), u.value.style.left = l.value + "px", u.value.style.top = c.value + "px", document.addEventListener("touchmove", function() {
                    v.preventDefault()
                }, !1)
            }
            v.stopPropagation(), v.preventDefault()
        }

        function T(v) {
            a.value = !1, G = v.clientX, R = v.clientY
        }

        function O(v, h, D, q) {
            return !(Math.sqrt((v - D) * (v - D) + (h - q) * (h - q)) <= 1)
        }
        const $ = f("bahnschrift");
        return (v, h) => {
            const D = pe("lazy");
            return m(), k("div", {
                class: "customer",
                onClick: K,
                onMousedown: B,
                onTouchstart: B,
                onMousemove: y,
                onTouchmove: y,
                onMouseup: T,
                id: "customerId"
            }, [C(r("img", null, null, 512), [
                [D, d(x)("home", "icon_sevice")]
            ])], 32)
        }
    }
});
const Mt = ["src"],
    Ut = E({
        __name: "StartPage",
        setup(s) {
            const a = "bdgwin",
                e = {}.VITE_STARTEXT || "";
            return (o, t) => (m(), k("div", {
                class: F(["start-page", [d(a)]])
            }, [r("div", null, [r("div", {
                class: F(["dice", [d(a)]])
            }, null, 2), r("p", null, p(d(e) || o.$t("fairAndSafe")), 1), r("img", {
                class: F(["logo", [d(a)]]),
                src: d(x)("home/StartPage", d(wt)())
            }, null, 10, Mt)])], 2))
        }
    });
const Ft = V(Ut, [
        ["__scopeId", "data-v-3b5c05ca"]
    ]),
    jt = {
        class: "header"
    },
    Kt = {
        class: "title"
    },
    zt = {
        class: "tip"
    },
    Yt = {
        class: "container"
    },
    Wt = {
        class: "footer"
    },
    Xt = E({
        __name: "dialog",
        setup(s) {
            const a = ae(),
                e = se(),
                o = f(!1),
                {
                    store: t,
                    closeFirstSave: i
                } = ie(),
                {
                    ActiveSotre: n,
                    getFirstRechargeList: l
                } = ge(),
                c = Ie(new Date).format("YYYY-MM-DD"),
                u = Ee("firstSave", null),
                _ = U(() => u.value == c),
                H = () => {
                    _.value ? (u.value = "", localStorage.removeItem("firstSave")) : u.value = c
                },
                G = () => {
                    o.value = !1, i()
                },
                R = ["activity", "home", "main", "wallet", "promotion"];
            te(() => e.name, y => {
                R.includes(e.name) && M()
            });
            const M = () => {
                    u.value != c && l().then(y => {
                        if (!y.length) {
                            o.value = !1, i();
                            return
                        }
                        const T = y.find(O => O.isFinshed);
                        T && (n.value.isShowFirstSaveDialog = !1), T || (o.value = !0)
                    })
                },
                K = () => {
                    o.value = !1, i(!0), a.push({
                        name: "FirstRecharge"
                    })
                },
                B = () => {
                    o.value = !1, i(!0), a.push({
                        name: "Recharge"
                    })
                };
            return j(() => {
                R.includes(e.name) && M()
            }), (y, T) => {
                const O = N("van-dialog");
                return m(), w(O, {
                    show: o.value,
                    "onUpdate:show": T[0] || (T[0] = $ => o.value = $),
                    className: "firstSaveDialog"
                }, {
                    title: L(() => [r("div", jt, [r("div", Kt, p(y.$t("firstDialogH")), 1), r("div", zt, p(y.$t("firstDialogTip")), 1)])]),
                    footer: L(() => [r("div", Wt, [r("div", {
                        class: F(["active", {
                            a: _.value
                        }]),
                        onClick: H
                    }, p(y.$t("noTipToday")), 3), r("div", {
                        class: "btn",
                        onClick: K
                    }, p(y.$t("activity")), 1)])]),
                    default: L(() => [r("div", Yt, [S(kt, {
                        list: d(n).FirstRechargeList,
                        onGorecharge: B
                    }, null, 8, ["list"])]), r("div", {
                        class: "close",
                        onClick: G
                    })]),
                    _: 1
                }, 8, ["show"])
            }
        }
    });
const Qt = V(Xt, [
        ["__scopeId", "data-v-9ca94d9e"]
    ]),
    Zt = {
        class: "dialog-window"
    },
    Jt = {
        class: "dialog-wrapper"
    },
    ea = {
        class: "dialog-title"
    },
    ta = {
        class: "dialog-content"
    },
    aa = {
        class: "dialog-window"
    },
    sa = {
        class: "dialog-wrapper"
    },
    oa = {
        class: "dialog-title"
    },
    na = {
        class: "dialog-tips"
    },
    ia = {
        class: "dialog-content"
    },
    la = {
        class: "dialog-tips",
        style: {
            "margin-bottom": "0"
        }
    },
    ra = {
        class: "dialog-window"
    },
    ca = {
        class: "dialog-wrapper"
    },
    ua = {
        class: "dialog-tips",
        style: {
            "margin-top": "10px"
        }
    },
    da = {
        class: "dialog-title",
        style: {
            "margin-top": "0"
        }
    },
    _a = {
        class: "dialog-tips"
    },
    ma = {
        class: "dialog-content"
    },
    va = E({
        __name: "AllPageDialog",
        setup(s) {
            se();
            const {
                ActiveSotre: a
            } = ge(), {
                store: e,
                closeInvite: o,
                showFirstSave: t,
                onReturnAwards: i
            } = ie();
            return (n, l) => {
                const c = N("van-dialog"),
                    u = pe("lazy");
                return m(), k(W, null, [d(t) ? (m(), w(Qt, {
                    key: 0
                })) : A("", !0), S(c, {
                    show: d(a).showReceiveDialog,
                    "onUpdate:show": l[1] || (l[1] = _ => d(a).showReceiveDialog = _),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: L(() => [r("div", Zt, [r("div", Jt, [C(r("img", null, null, 512), [
                        [u, d(x)("activity/DailyTask", "confirmationReceived")]
                    ]), r("div", ea, p(n.$t("awardsReceived")), 1), r("div", ta, [C(r("img", null, null, 512), [
                        [u, d(x)("activity/DailyTask", "amountIcon")]
                    ]), r("span", null, p(d(oe)(d(a).receiveAmount)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: l[0] || (l[0] = _ => d(a).showReceiveDialog = !1)
                    }, p(n.$t("confirm")), 1)])])]),
                    _: 1
                }, 8, ["show"]), S(c, {
                    show: d(e).invite,
                    "onUpdate:show": l[3] || (l[3] = _ => d(e).invite = _),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: L(() => [r("div", aa, [r("div", sa, [C(r("img", null, null, 512), [
                        [u, d(x)("activity/DailyTask", "confirmationReceived")]
                    ]), r("div", oa, p(n.$t("inviteTips")), 1), r("p", na, p(n.$t("inviteAmount")), 1), r("div", ia, [r("span", la, p(n.$t("commissionAmount")), 1), r("span", null, p(d(oe)(d(e).rebateAmount)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: l[2] || (l[2] = _ => d(o)())
                    }, p(n.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"]), S(c, {
                    show: d(e).oldUser,
                    "onUpdate:show": l[5] || (l[5] = _ => d(e).oldUser = _),
                    "show-confirm-button": !1,
                    "close-on-click-overlay": !0,
                    className: "noOverHidden"
                }, {
                    default: L(() => [r("div", ra, [r("div", ca, [C(r("img", null, null, 512), [
                        [u, d(x)("activity/DailyTask", "confirmationReceived")]
                    ]), r("p", ua, p(n.$t("oldPromptTip")), 1), r("div", da, p(n.$t("oldPrompt")), 1), r("p", _a, p(n.$t("oldPromptGift")), 1), r("div", ma, [r("span", null, p(d(oe)(d(e).returnAwards)), 1)]), r("div", {
                        class: "dialog-btn",
                        onClick: l[4] || (l[4] = _ => d(i)())
                    }, p(n.$t("receive")), 1)])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const pa = V(va, [
        ["__scopeId", "data-v-3dff623a"]
    ]),
    fa = {
        class: "test"
    },
    ga = {
        key: 0,
        class: "test_box"
    },
    ha = E({
        __name: "index",
        setup(s) {
            const a = [{
                    name: "blue",
                    pageName: "blueHome"
                }, {
                    name: "blackGold",
                    pageName: "blackGoldHome"
                }, {
                    name: "whiteGold",
                    pageName: "whiteGoldHome"
                }, {
                    name: "electronic",
                    pageName: "electronic"
                }],
                e = ae(),
                o = Object.assign({
                    "/src/views/home/other/blackGoldHome.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.P), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"]),
                    "/src/views/home/other/blueHome.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.Q), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"]),
                    "/src/views/home/other/damanHome.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.R), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"]),
                    "/src/views/home/other/electronic.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.S), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"]),
                    "/src/views/home/other/redHome.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.T), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"]),
                    "/src/views/home/other/whiteGoldHome.vue": () => g(() => import("./page-home-fb16cb98.js").then(n => n.U), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-activity-8d7959ff.js", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/page-activity-9df3b495.css", "assets/css/page-home-18f78d35.css"])
                }),
                t = async n => {
                    if (e.currentRoute.value.name === n) return;
                    let l = o[`/src/views/home/other/${n}.vue`];
                    e.removeRoute("home"), e.addRoute({
                        path: "/",
                        name: "home",
                        component: l,
                        meta: {
                            title: "home",
                            tabBar: !0,
                            KeepAlive: !1
                        }
                    }), e.push("/")
                }, i = f(!1);
            return (n, l) => {
                const c = N("van-button");
                return m(), k("div", fa, [S(c, {
                    type: "primary",
                    onClick: l[0] || (l[0] = u => i.value = !i.value)
                }, {
                    default: L(() => [re(p(i.value ? "隐藏" : "展开"), 1)]),
                    _: 1
                }), i.value ? (m(), k("div", ga, [(m(), k(W, null, _e(a, u => S(c, {
                    type: "primary",
                    onClick: _ => t(u.pageName)
                }, {
                    default: L(() => [re(p(u.name), 1)]),
                    _: 2
                }, 1032, ["onClick"])), 64))])) : A("", !0)])
            }
        }
    });
const ba = V(ha, [
        ["__scopeId", "data-v-bfc96ef7"]
    ]),
    ya = E({
        __name: "App",
        setup(s) {
            ve(I => ({
                d986150e: h.value
            }));
            const {
                openAll: a
            } = ie(), e = Dt(), o = f(!1), t = f(!1), i = se(), n = St(), l = he(), {
                locale: c
            } = Ce(), u = fe(), _ = f(!1), H = U(() => i.meta.tabBar);
            let G = ["development"];
            const R = U(() => G.includes("production.ar015") && i.path === "/"),
                M = "blueHome",
                K = U(() => ["electronic", "blackGoldHome"].includes(M) ? !1 : !["/wallet/Withdraw/C2cDetail", "/wallet/RechargeHistory/RechargeUpiDetail", "/wallet/Withdraw/Upi", "/wallet/Withdraw/AddUpi", "/wallet/Withdraw/c2cCancelWithdrawal/index.vue", "/wallet/otherPay?type=C2C", "/home/game"].includes(i.path)),
                B = f(0),
                y = f(Math.floor(Math.random() * 1e4)),
                T = U(() => i.name + y.value),
                O = () => {
                    e.on("changeKeepAliveKey", () => {
                        y.value = Math.floor(Math.random() * 1e4)
                    })
                };
            sessionStorage.getItem("isload") ? o.value = !1 : (t.value = !0, sessionStorage.setItem("isload", t.value.toString()), o.value = !0), l.getHomeSetting(), te(() => l.getAreacode, I => {
                I && n.setNumberType(I.substring(1))
            }), te(() => l.getDL, I => {
                c.value = I, u.updateLanguage(I), At(I), Pt(be.global.t)
            }), setTimeout(() => {
                o.value = !1
            }, 2e3);
            const $ = f(!1),
                v = It();
            v.$subscribe((I, P) => {
                $.value = P.isLoading, v.setLoading($.value)
            });
            const h = f("bahnschrift");
            let D = Et(),
                q = l.getLanguage,
                X = Ct(D, q);
            const Q = async I => {
                const P = [{
                        title: "vi",
                        fontStyle: "bahnschrift"
                    }, {
                        title: "else",
                        fontStyle: "'Roboto', 'Inter', sans-serif"
                    }],
                    J = P.findIndex(ee => ee.title == X);
                J >= 0 ? h.value = P[J].fontStyle : h.value = P[P.length - 1].fontStyle
            }, Z = () => {
                e.on("keyChange", () => {
                    B.value++
                }), e.on("changeIsGame", () => {
                    _.value = !_.value, $.value = !$.value
                })
            }, ke = () => {
                e.off("keyChange"), e.off("changeKeepAliveKey"), e.off("changeIsGame")
            };
            return n.setNumberType(l.getAreacode.substring(1)), Q(), j(() => {
                Lt() && Tt(), a(), ke(), Z(), O(), localStorage.getItem("language") && $t(localStorage.getItem("language"))
            }), Ht(), (I, P) => {
                const J = N("LoadingView");
                return m(), k(W, null, [S(J, {
                    loading: $.value,
                    type: "loading",
                    isGame: _.value
                }, {
                    default: L(() => [(m(), w(d(Te), {
                        key: B.value
                    }, {
                        default: L(({
                            Component: ee
                        }) => [(m(), w(Le, {
                            max: 1
                        }, [d(i).meta.keepAlive ? (m(), w(ne(ee), {
                            key: T.value
                        })) : A("", !0)], 1024)), d(i).meta.keepAlive ? A("", !0) : (m(), w(ne(ee), {
                            key: 0
                        }))]),
                        _: 1
                    })), K.value ? (m(), w(Gt, {
                        key: 0
                    })) : (m(), w(d($e), {
                        key: 1,
                        license: "15861567"
                    })), H.value ? (m(), w(Nt, {
                        key: 2
                    })) : A("", !0)]),
                    _: 1
                }, 8, ["loading", "isGame"]), o.value ? (m(), w(Ft, {
                    key: 0
                })) : A("", !0), S(pa), R.value ? (m(), w(ba, {
                    key: 1
                })) : A("", !0)], 64)
            }
        }
    });
const wa = {
        mounted(s, a) {
            if (typeof a.value[0] != "function" || typeof a.value[1] != "number") throw new Error("v-debounce: value must be an array that includes a function and a number");
            let e = null;
            const o = a.value[0],
                t = a.value[1];
            s.__handleClick__ = function() {
                e && clearTimeout(e), e = setTimeout(() => {
                    o()
                }, t || 500)
            }, s.addEventListener("click", s.__handleClick__)
        },
        beforeUnmount(s) {
            s.removeEventListener("click", s.__handleClick__)
        }
    },
    ka = {
        mounted(s, a) {
            if (typeof a.value[0] != "function" || typeof a.value[1] != "number") throw new Error("v-throttle: value must be an array that includes a function and a number");
            let e = null;
            const o = a.value[0],
                t = a.value[1];
            s.__handleClick__ = function() {
                e && clearTimeout(e), s.disabled || (s.disabled = !0, o(), e = setTimeout(() => {
                    s.disabled = !1
                }, t || 500))
            }, s.addEventListener("click", s.__handleClick__)
        },
        beforeUnmount(s) {
            s.removeEventListener("click", s.__handleClick__)
        }
    },
    Sa = {
        mounted(s, a) {
            s.addEventListener("input", e => {
                const t = s.value.replace(/\D+/g, "");
                s.value = t, a.value = t
            })
        }
    },
    Ia = s => ({
        beforeMount: (a, e) => {
            a.classList.add("ar-lazyload");
            const {
                value: o
            } = e;
            a.dataset.origin = o, s.observe(a)
        },
        updated(a, e) {
            a.dataset.origin = e.value, s.observe(a)
        },
        unmounted(a, e) {
            s.unobserve(a)
        },
        mounted(a, e) {
            s.observe(a)
        }
    }),
    Ea = {
        mounted(s, a) {
            let e = 0;
            const o = a.value && a.value.wait ? a.value.wait : 3e3,
                t = i => {
                    const n = Date.now();
                    n - e >= o && (e = n, a.value && a.value.handler && a.value.handler(i))
                };
            s.addEventListener("click", t), s._throttleClickCleanup = () => {
                s.removeEventListener("click", t)
            }
        },
        unmounted(s) {
            s._throttleClickCleanup && s._throttleClickCleanup(), delete s._throttleClickCleanup
        }
    },
    Ca = {
        mounted(s, a) {
            const {
                value: e
            } = a;
            let o = De("permission", null);
            o.value === null || !e || (o && (o = JSON.parse(o.value)), o && o[e] === !1 && (s.style.display = "none"))
        }
    },
    de = {
        debounce: wa,
        throttle: ka,
        onlyNum: Sa,
        throttleClick: Ea,
        haspermission: Ca
    },
    La = {
        install: function(s) {
            Object.keys(de).forEach(e => {
                s.directive(e, de[e])
            });
            const a = new IntersectionObserver(e => {
                e.forEach(o => {
                    if (o.isIntersecting) {
                        const t = o.target;
                        t.src = t.dataset.origin || x("images", "avatar"), t.onerror = () => {
                            a.unobserve(t);
                            let i = t.dataset.img || x("images", "avatar");
                            if (!i || i != null && i.includes("undefined")) {
                                t.onerror = null;
                                return
                            }
                            t.src = i, t.style.objectFit = "contain"
                        }, t.classList.remove("ar-lazyload"), a.unobserve(t)
                    }
                })
            }, {
                rootMargin: "0px 0px -50px 0px"
            });
            s.directive("lazy", Ia(a))
        }
    },
    Ta = {
        class: "navbar__content"
    },
    $a = {
        class: "navbar__content-center"
    },
    Da = {
        class: "navbar__content-title"
    },
    Aa = E({
        __name: "NavBar",
        props: {
            title: {
                type: String,
                default: ""
            },
            placeholder: {
                type: Boolean,
                default: !0
            },
            leftArrow: {
                type: Boolean,
                default: !1
            },
            backgroundColor: {
                type: String,
                default: "#3F3F3F"
            },
            classN: {
                type: String,
                default: ""
            },
            headLogo: {
                type: Boolean,
                default: !1
            },
            headerUrl: {
                type: String,
                default: ""
            }
        },
        emits: ["click-left", "click-right"],
        setup(s, {
            emit: a
        }) {
            const e = f(),
                o = he(),
                t = U(() => o.getHeadLogo),
                i = () => {
                    a("click-left")
                },
                n = () => {
                    a("click-right")
                };
            return j(() => {}), (l, c) => {
                const u = N("van-icon");
                return m(), k("div", {
                    class: "navbar",
                    ref_key: "navbar",
                    ref: e
                }, [r("div", {
                    class: "navbar-fixed",
                    style: ce({
                        background: s.backgroundColor
                    })
                }, [r("div", Ta, [r("div", {
                    class: "navbar__content-left",
                    onClick: i
                }, [Y(l.$slots, "left", {}, () => [s.leftArrow ? (m(), w(u, {
                    key: 0,
                    name: "arrow-left"
                })) : A("", !0)], !0)]), r("div", $a, [s.headLogo ? (m(), k("div", {
                    key: 0,
                    class: "headLogo",
                    style: ce({
                        backgroundImage: "url(" + (s.headerUrl || t.value) + ")"
                    })
                }, null, 4)) : A("", !0), Y(l.$slots, "center", {}, () => [r("div", Da, p(s.title), 1)], !0)]), r("div", {
                    class: "navbar__content-right",
                    onClick: n
                }, [Y(l.$slots, "right", {}, void 0, !0)])])], 4)], 512)
            }
        }
    });
const Pa = V(Aa, [
        ["__scopeId", "data-v-2f448113"]
    ]),
    xa = {
        class: "ar-loading-view"
    },
    Va = {
        class: "loading-wrapper"
    },
    Ra = {
        class: "com__box"
    },
    Ba = xe('<div class="loading" data-v-1690b988><div class="shape shape-1" data-v-1690b988></div><div class="shape shape-2" data-v-1690b988></div><div class="shape shape-3" data-v-1690b988></div><div class="shape shape-4" data-v-1690b988></div></div>', 1),
    Oa = [Ba],
    qa = {
        class: "skeleton-wrapper"
    },
    Na = E({
        __name: "LoadingView",
        props: {
            loading: {
                type: Boolean
            },
            type: {},
            isGame: {
                type: Boolean
            }
        },
        setup(s) {
            const a = s,
                e = f();
            let o = null;
            return j(async () => {
                const t = "bdgwin";
                await Ae(), o = Pe.loadAnimation({
                    container: e.value,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: `/loading/${t}/data.json`
                })
            }), te(() => a.loading, () => {
                a.type === "loading" && !a.isGame && (a.loading ? o && o.play() : o && o.stop())
            }), me(() => {
                o && o.destroy(), o = null
            }), (t, i) => {
                const n = N("VanSkeleton");
                return m(), k(W, null, [C(r("div", xa, [Y(t.$slots, "template", {}, () => [C(r("div", Va, [C(r("div", {
                    ref_key: "element",
                    ref: e,
                    class: "loading-animat"
                }, null, 512), [
                    [z, !t.isGame]
                ]), C(r("div", Ra, Oa, 512), [
                    [z, t.isGame]
                ])], 512), [
                    [z, t.type === "loading"]
                ]), C(r("div", qa, [S(n, {
                    row: 10
                }), S(n, {
                    title: "",
                    avatar: "",
                    row: 5
                }), S(n, {
                    title: "",
                    row: 5
                })], 512), [
                    [z, t.type === "skeleton"]
                ])], !0)], 512), [
                    [z, t.loading]
                ]), Y(t.$slots, "default", {}, void 0, !0)], 64)
            }
        }
    });
const Ha = V(Na, [
        ["__scopeId", "data-v-1690b988"]
    ]),
    Ga = {
        class: "ar-searchbar__selector"
    },
    Ma = {
        class: "ar-searchbar__selector-default"
    },
    Ua = E({
        __name: "ArSelect",
        props: {
            selectName: {
                type: String,
                default: ""
            }
        },
        emits: ["click-select"],
        setup(s, {
            emit: a
        }) {
            const e = () => {
                a("click-select")
            };
            return (o, t) => {
                const i = N("van-icon");
                return m(), k("div", Ga, [r("div", {
                    onClick: e
                }, [r("span", Ma, p(s.selectName), 1), S(i, {
                    name: "arrow-down"
                })])])
            }
        }
    });
const Fa = V(Ua, [
        ["__scopeId", "data-v-f330f1f2"]
    ]),
    ja = "blueHome";
ye(Object.assign({
    "../assets/styles/other/blackGoldHome/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-7899187d.css"]),
    "../assets/styles/other/blueHome/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-abe12d54.css"]),
    "../assets/styles/other/damanHome/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-28d4dd50.css"]),
    "../assets/styles/other/electronic/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-2bafe1ce.css"]),
    "../assets/styles/other/redHome/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-c9b8f171.css"]),
    "../assets/styles/other/whiteGoldHome/reset.scss": () => g(() => Promise.resolve({}), ["assets/css/reset-c9b8f171.css"])
}), `../assets/styles/other/${ja}/reset.scss`);
const Ka = s => {
    s.component("NavBar", Pa), s.component("LoadingView", Ha), s.component("ArSelect", Fa), s.component("svg-icon", Vt), s.use(Ve).use(Re).use(Be).use(Oe).use(qe).use(Ne).use(He).use(Ge).use(Me).use(Ue).use(Fe).use(je).use(Ke).use(ze).use(Ye).use(We).use(Xe).use(Qe).use(Ze).use(Je).use(et).use(tt).use(at).use(st).use(ot).use(nt).use(it).use(lt).use(rt).use(ct).use(ut).use(dt).use(_t).use(mt).use(vt).use(pt).use(ft).use(be).use(La).use(gt);
    let a = s.config.globalProperties,
        e = {};
    e.TopHeight = 38, Object.keys(ue.refiter).forEach(o => {
        e[o] = ue.refiter[o]
    }), a.$u = e
};

function za() {
    let s = window.location.hash;
    s.includes("?") || (s = location.search);

    function a(e) {
        if (e) {
            const i = e.indexOf("?");
            i !== -1 && (e = e.substring(i + 1));
            var o = e.split("&"),
                t = {};
            return o.forEach(function(n) {
                var l = n.split("=");
                t[l[0]] = decodeURIComponent(l[1])
            }), t
        } else return {}
    }
    return a(s)
}
const b = za(),
    Ya = {
        "91club": () => {
            const s = {
                    "356634288423": "749293993830590"
                },
                a = b.invitationCode || sessionStorage.getItem("invitecode"),
                e = b.fb_dynamic_pixel || s[a] || "";
            b.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e);
            const o = b.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
            o && (function(t, i, n, l, c, u, _) {
                t.fbq || (c = t.fbq = function() {
                    c.callMethod ? c.callMethod.apply(c, arguments) : c.queue.push(arguments)
                }, t._fbq || (t._fbq = c), c.push = c, c.loaded = !0, c.version = "2.0", c.queue = [], u = i.createElement(n), u.async = !0, u.src = l, _ = i.getElementsByTagName(n)[0], _.parentNode.insertBefore(u, _))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", o), fbq("track", "PageView"))
        },
        yjlottery: () => {
            (function(s, a, e, o, t, i, n) {
                s.fbq || (t = s.fbq = function() {
                    t.callMethod ? t.callMethod.apply(t, arguments) : t.queue.push(arguments)
                }, s._fbq || (s._fbq = t), t.push = t, t.loaded = !0, t.version = "2.0", t.queue = [], i = a.createElement(e), i.async = !0, i.src = o, n = a.getElementsByTagName(e)[0], n.parentNode.insertBefore(i, n))
            })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", "865606625239361"), fbq("track", "PageView")
        },
        "66lottery": () => {
            b.gtagId && localStorage.setItem("gtagId", b.gtagId), b.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", b.fb_dynamic_pixel);
            const s = b.gtagId || localStorage.getItem("gtagId") || "AW-11352382371",
                a = b.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || "";
            (function() {
                window.dataLayer = window.dataLayer || [];

                function e() {
                    dataLayer.push(arguments)
                }
                window.gtag = e;
                var o = document.createElement("script");
                o.src = "https://www.googletagmanager.com/gtag/js?id=" + s;
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(o, t), e("js", new Date), e("config", s)
            })(), a && (function(e, o, t, i, n, l, c) {
                e.fbq || (n = e.fbq = function() {
                    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                }, e._fbq || (e._fbq = n), n.push = n, n.loaded = !0, n.version = "2.0", n.queue = [], l = o.createElement(t), l.async = !0, l.src = i, c = o.getElementsByTagName(t)[0], c.parentNode.insertBefore(l, c))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", a), fbq("track", "PageView"))
        },
        lottery7: () => {
            const s = {
                    "18685100001": "749293993830590"
                },
                a = b.invitationCode || sessionStorage.getItem("invitecode"),
                e = b.fb_dynamic_pixel || s[a] || "";
            b.fb_dynamic_pixel && localStorage.setItem("fb_dynamic_pixel", e), b.invitationCode && sessionStorage.setItem("invitecode", b.invitationCode);
            const o = b.fb_dynamic_pixel || localStorage.getItem("fb_dynamic_pixel") || s[a];
            o && (function(t, i, n, l, c, u, _) {
                t.fbq || (c = t.fbq = function() {
                    c.callMethod ? c.callMethod.apply(c, arguments) : c.queue.push(arguments)
                }, t._fbq || (t._fbq = c), c.push = c, c.loaded = !0, c.version = "2.0", c.queue = [], u = i.createElement(n), u.async = !0, u.src = l, _ = i.getElementsByTagName(n)[0], _.parentNode.insertBefore(u, _))
            }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("init", o), fbq("track", "PageView"))
        }
    };
({}).VITE_POINT && Ya[{}.VITE_POINT]();
const le = ht(ya),
    we = bt();
Ka(le);
we.use(yt);
le.use(xt).use(we);
le.mount("#app");