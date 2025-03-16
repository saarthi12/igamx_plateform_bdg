var Ks = Object.defineProperty;
var Xs = (e, s, n) => s in e ? Ks(e, s, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[s] = n;
var Xt = (e, s, n) => (Xs(e, typeof s != "symbol" ? s + "" : s, n), n);
import {
    r as S,
    j as Js,
    k as Ue,
    l as zs,
    m as re,
    n as js,
    o as Zs,
    p as Le,
    q as qs,
    t as $s,
    u as je,
    v as it,
    w as le,
    x as pt,
    y as en,
    z as _t,
    A as tn,
    B as Re,
    C as ve,
    D as i,
    E as _e,
    F as O,
    G as oe,
    H as rs,
    I as Vt,
    J as we,
    K as Ae,
    M as Ne,
    N as sn,
    O as nn,
    P as lt,
    Q as an,
    R as An,
    S as Jt,
    T as on,
    U as nt,
    V as j,
    W as u,
    X as m,
    Y as t,
    Z as Ge,
    _ as a,
    $ as H,
    a0 as Y,
    a1 as de,
    a2 as K,
    a3 as $,
    a4 as U,
    a5 as z,
    a6 as J,
    a7 as se,
    a8 as W,
    a9 as he,
    aa as ln,
    ab as gn,
    ac as ce,
    ad as Be,
    ae as ye,
    af as zt,
    L as cn,
    ag as ds,
    ah as gt,
    ai as ct,
    aj as ps,
    ak as Oe,
    al as rn,
    am as Fe,
    an as dn,
    ao as pn,
    ap as _n,
    aq as un
} from "./modules-fbc96342.js";
import {
    s as mn
} from "./native/index-08561a08.js";
import {
    e as vn
} from "./en-bab51ca4.js";
import {
    r as hn
} from "./rus-ecb14220.js";
import {
    v as wn
} from "./vi-82b0febd.js";
import {
    i as bn
} from "./id-16b6cb52.js";
import {
    h as Cn
} from "./hd-c5b1d7e8.js";
import {
    t as jt
} from "./tha-330057b2.js";
import {
    m as Bn
} from "./md-e8a5e3b0.js";
import {
    b as yn
} from "./bra-6692a9a5.js";
import {
    m as En
} from "./my-32fb9d60.js";
import {
    b as fn
} from "./bdt-d8f19d0c.js";
import {
    z as Rn
} from "./zh-7d334abd.js";
import {
    p as Sn
} from "./pak-cdc12211.js";
import {
    a as In
} from "./ar-1c9ff85b.js";
const Un = "/assets/mp3/di1-0f3d86cb.mp3",
    Gn = "/assets/mp3/di2-ad9aa8fb.mp3",
    Dn = "/assets/woff2/bahnschrift-610d57ac.woff2",
    Ln = "/assets/ttf/digitalDreamFat-7e51cfaf.ttf",
    Mn = "/assets/png/electronic_bg-cbdc2c70.png",
    kn = "/assets/png/fish_bg-6e869e88.png",
    Tn = "/assets/png/game_mini_bg-e46f29bf.png",
    Qn = "/assets/png/hot_bg-a700f525.png",
    Vn = "/assets/png/lottery_bg-1eec2a52.png",
    On = "/assets/png/third_bg-e18479d2.png",
    Fn = "/assets/png/chess-9c4d1dff.png",
    Nn = "/assets/png/chess_icon-6930b633.png",
    Pn = "/assets/png/fish-a70df76d.png",
    Wn = "/assets/png/fish_icon-bee0f4fe.png",
    Yn = "/assets/png/flash-eac62fa4.png",
    xn = "/assets/png/flash_icon-4db9e3b4.png",
    Hn = "/assets/png/lottery-c0a9176b.png",
    Kn = "/assets/png/lottery_icon-7f9c3132.png",
    Xn = "/assets/png/popular-044514e1.png",
    Jn = "/assets/png/popular_icon-6977543a.png",
    zn = "/assets/png/slot-bf07af03.png",
    jn = "/assets/png/slot_icon-ffc91891.png",
    Zn = "/assets/png/sport-ac79bf87.png",
    qn = "/assets/png/sport_icon-314ece36.png",
    $n = "/assets/png/video-c9dce622.png",
    ea = "/assets/png/video_icon-f7afb28f.png",
    ta = "/assets/svg/customerIcon-9421b6ab.svg",
    sa = "/assets/svg/down-d4e547db.svg",
    na = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgB7Zm/bxMxFMeffadECmUKSxGROmViiMSULiDmdi1dKnVl7sq/wMxKhkoVKx0ZYMqEFIktE0gVnTK1gBpydr8vuTbXs9PL/ajOgz9SdD7b57yv/fx8eSHyeDweTwnEOp3+7O8/bRBtKSE2Ayk3lNZNegCkEFeRUpcyCCbT2Wz86OTkd9Yz9wpgwwMhXmDgTaoBKeXF1Wz27T4hKwXog4Pn/6NomxxACzFsHh//sLVJWyXPvCvGM0LrPttka7MKaIbhS3KMVTYZAlipUuoxOQbbZFsFQ0AjDLvkKNiwW+k6Q4CKojY5SsMSDQ0BQgjn3OcGZbHNtokblDUQUQ+XPlVHn9Ybz7AtpPz0EdYONc1Xq4dTeYCD7i8VQYiWVuotSt3F7fxYGuYZIrcARIN/8ReR1rqHUgf371Ge5BkHz7Qx1hGKpfaczNmfj/cRLp8TVW0Y/45yuBT6byNY8DO3xmMVecxcs88UcSGevVNceMb3YEyLPygfouGJuCvOALO+i+d3KF5FsXC/AVxyRAUoJCBmiC8f43oEAYuZ1JoNe4b6T4ZLxf6Otu6ySkyKuF+SMgLYFRYGYCVw04vrevjwvvgCC8+wyVu8TyiKXrOIxOMj3A/Qt1gAqEIAUSyC6ANE7OB2N67mffEGjcvXXbF88WV/R/9Tbi9LaQE38L6Af59hk+/dupTZZwKjP8LsMVVEZQKYOEKNYChHpA7cp8P1bLhe1LPhpVwmTaUCEnA4HMqE28xLFbhMmtzngGt4AXXjBdSNTcCU3MWwzRCAQ+iCHEVabJOWisx0Xl1opBzTdYaAqda/yFE4X5quMwRwHhKpvEtyDLbJliO1RqFZFH0lx1hlk1VAvAq5f949FGzLqgx1Zno9DIJXyEJsUA3gbfY80vp7ofR6kvkfHEg5ctYuTnxl5o4KMuUwjnB5joD/c50/ODwej8dTimto1Rxvl/j9pAAAAABJRU5ErkJggg==",
    aa = "/assets/png/1-dcdd0031.png",
    Aa = "/assets/png/2-0c408958.png",
    oa = "/assets/png/3-f5a58c12.png",
    ia = "/assets/png/SignInTop-62491ed7.png",
    la = "/assets/png/Signed-5553686b.png",
    ga = "/assets/png/Unsigned-63d76784.png",
    ca = "/assets/png/coin-91b2f52b.png",
    ra = "/assets/png/day7Bg-2dc29da0.png",
    da = "/assets/png/day7BgActive-6c1c1d3f.png",
    pa = "/assets/png/headerBg-ca048249.png",
    _a = "/assets/png/DailyCheckInBanner-fb1a15ac.png",
    ua = "/assets/png/DailyTaskBanner-18df10a5.png",
    ma = "/assets/png/claimRuleBg-98d00852.png",
    va = "/assets/png/PointsMallBanner-f06d8fac.png",
    ha = "/assets/png/activityIcon1-48e9cfdc.png",
    wa = "/assets/png/activityIcon2-0523d754.png",
    ba = "/assets/png/activityIcon3-778b1534.png",
    Ca = "/assets/png/activityIcon4-d526ab4c.png",
    Ba = "/assets/png/activityIcon5-c41cae54.png",
    ya = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
    Ea = "/assets/png/awardImg-36ab6349.png",
    fa = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK7SURBVHgB7VmBlZswDFU6QUbwCNmgdIJmlNsg2QA6QbJBugG5Ca6dgOsEZAPVPr4fwgcEbMHdvZf/np4TsCV/yTayTfTAA0nYkAKYeWuLnZWfVgx+byEONyuvKJ+tXDebzZU+GrbjmZXcSs3z4dqcrOxIG06pFUPjHS+DDrn/hZW9a4uo+Ppb6NyjzktPW0MagLE3pQPv8sCLxxjjIHm2Ugl9uSQeS8BAWdXzXBo7Jhtr9R6F3iopGn0EEP5aGFAft4GD4m2EBILOnzW8PmLbDdGLGJ7zSUgCgVfOtBLgKE/CzGkbEvCdv1AEvA6KgCBRzYq6IMBRCrq63kARwHDyDsznNAwJ9KGaQiqFANrvhM1saiPJfJDARF1JBKDDL7ElrQ0lAs6h9VAUvtEnh036XAL4C3/3tCY0IgA9fl7WvOB3qM+wCgHoKvuG0acfQgJ/UXaG0VcicEVpaC0oD6HeLPkrReCGcngSc0LuMqDPw5AC7kZUM+TQV/mwa5CYQsB/8VTWWn6/STEUCW63uvVYpUoz5NCpQoLbxO5FPg8n8R+UaltGmwq82uIHNedCxkoZScKgvMmHIYF/KDNShBKJDOXzYA1uznscFkldU4YTt2dJ2VglmboaWgAxJFgkczShcoHKR1oIc0lwcwTpcLqnWw6jRVPXgMTTxHrTFhduU9cjLQh07mnMUfbdYfa8FFGYznoBcPeAwcxpK+dCxWvuglr78nChoLkIFNyfPMrg9ogx3oEIYb02CbHqVJy6nHP3cPfCyx/unsQqqDP/QKJS88p9G3qdFwbkesxY3gwlAl4/CL2LOEgaKwJjpxiDcMiBuxeEBa+x4sF4yV24ZMvdce0xHMJLPoN3OfdfEGa0NtDRM8dfsxapHVe56KaGTEZNzv6dmpMDQ92Lbiduw+T2HL/db5x7PvDAR+I/w7/NbtRCey8AAAAASUVORK5CYII=",
    Ra = "/assets/png/close-32ada670.png",
    Sa = "/assets/png/succeed-3b2f9216.png",
    Ia = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7ZTBbcIwFIbfs0pREIeOwAh0BDbgiH1pO0InaDpBR2hOIbeqEzBC2KAZoYdKVgnk4YcUCSQTxwZx8neJpS/5Xyy/Z4BIJHILaqXeLvFdiC7ZEKUbpT5DfXBhappXInreSFnSfP7g67tA1wt/Sk0HACsg+jU7nCVFUfn44MKMXiwmAnHFa1u4y9sQ0AMO4sDDB4ilOdepjw8u3IbfD4ePiFiZcy23Uj75+Kugpcz+paRz4+TyTO8dH3NH9MPP7ZkecXmmV3O18MjUo9EHj1CD+J7keerjT34OesKdWyN+EcDENNJLslxmPj6ocDsuJhRqgNm4KNY+3obzjPmCEEKUvOaRGef52scHFeaR4FsJiSrbxeDywYV3AJkJ/B5obQ11+WC0UuklPhKJ3IQ9jzb4kh/4axMAAAAASUVORK5CYII=",
    Ua = "/assets/png/friends-4ef5392a.png",
    Ga = "/assets/png/giftRedeem-6dad7105.png",
    Da = "/assets/png/new-b1787d33.png",
    La = "/assets/png/present-8160e040.png",
    Ma = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGRSURBVHgB7ZfPSwJBFMe/b9YSwV+HQCNCI7NL4KV7B7t36tpfEP4JHvoDOkR/gReDLnnPQ39CEEFQpAeJsnRTSy2dadfYLazWrWYzyi8MO8N78z775g3DDAkhFAxBDEOSXPDuwpJdVzngvcUosrE8Hpt5ZOfSdqbQt2qcXw7iqpiC4K9hKkIzMST3VaupX894Zz6Fy/PTPqiuIMqFgVl/PmO9jp1WGkJY13PMk8Tq0QEGgkvrQd5srIHz4IfOtUoCjfoK7GjcfSgmwjljKAQVFa8vh6ntXglchqGrBSTqbFrFEv4AoDd7SmhRE+ZPE8CbtYBW2y19zF4MIgKnxWGu5h85QEbg3wh2QbKoWgFdlID7u/fMacSxIR1M12VQ4cyWr9Slppty78tjcfDorKWv1IyFooD0jqKHJfwc2OcHqVWwk+OBvnJ3dWgSQmt2JH1Xi+mIBg8D7fZbY+shw5wC9zTufm798ikFozs6MocAZkyFwxKMikbf3Fys4810XfVb4g7dRLTEFI/XvIPRv3s7PQHFo3muTyJYoAAAAABJRU5ErkJggg==",
    ka = "/assets/png/signInBanner-c7e3b971.png",
    Ta = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAQlBMVEX/amQAAAD6W1r/amT/aWP/a2X7Wlr8YV79Y2D/aWT/ZmP/aGL/Z2D/cGD/YGD/amP8X137X1z/amP/aWP/amT6WVk0pykRAAAAFXRSTlN/AN93UG/3r59nKCAYEBBvv79gX08jNqgRAAAAi0lEQVQY022PWw6EIAxF24o8BXWU/W91ekFIZuL5KDcnoQ9ikMxKFExkAJU/9LDmrraFJssGlZuZLqtakbzYKg7pYop4j9o4kBMZra4+eCIVQasMJZhKoA4sDex0fbv/j6G190NhjVtnKmc3J3Ikbgc6qVY80q7bl9+DyvvZzGUf5ioMBeIdtItJDL5GGwgTyom2RgAAAABJRU5ErkJggg==",
    Qa = "/assets/png/taskIcon1-4d9fdca3.png",
    Va = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZldUtswEMf/a1Ke0xuYExRO0HCCwgkIJyAJdKZvhLfOAIk5AeEE5QaBE5Ab4BvUQ99IbXUl29gEf8hYDn3wb4b4Q7Kk1Wq1qwVoaWlpaakBoSbi+HgPgbjmls5oMnG0vhmOHlXn08kWamKhLr6w+bcLgVMxGHfLqovRqM8X+Y2tU7+M+gIgmPGPBymE9TQorc6CqithRs7YQ01qC0CO4/GgrtSDwFHRrKZmn+UOzmAAAxqQBHLtl2vh1ew7LgxgRAAdLTQx+6rvKpXFYGAXFHdB1jy6Ogj+Xr3uSZXZILpF4A9RNKgK2ikVQAy+b4OCKd9tq8GtC6IZgk9n5Px0C6sVFYrh8ICrzPChUJ+mlze5pXkFYvCD1f38uPI6WuvBLUKjNUjH5nZZ2zhCbCsvfW7u5Gmik9uetTzlwSYQeO0Gh8pgI0Jj9broyM7fAZFH5+eL6Mnlvzu2M54ca8r97UXv2aaWcmfL3N3yNTAc/Uay5t2020/ZRQ8mWFnvLAQPemMe2Z3E4/4/Z31atI0mBrthHca3KvYhf25s8KpR0eflOlcTg3hbpmHmWFbQ8QMeXVzcqX6kXcjArZndiG3O/xX7EHJUn6V2piEAuUntpfSkTW6l9oonNyFAqhFhcNnkIehrlepVQwm7vAotIIItNjriwewj3F0qoMJzbQwFc+n+/f04FCDn8lbtXgIy9jHsN0KMC5AVx5AzGbNWdli6GxjGvAZykILRdNrnuzsYZG0CvEDiHgZZvwCgLzBIB2tCOSjrieMrsQeDGNdA5mns5KQHenrg3aj80F8R8xqw/nCQBxU7hSH58hp+0ENDmBeAAzOOZHu81nnff7bR8CmuqgAutLyxrCPwPlKxlwYaNpBy7QLGHdHb7qo5Ox0j7iaGqfI/LhqDFuy1Z/JOHWo0tK0lQBzihgeNYBeNCMEemuOol0fL0tpui46U8kBvR49vDtZiwIkqooOq0WPGEFy5bOKZD9tWCYUwjxTWWXBmYifz67xmeYBjLj1NveKONnfL8jR1UT7DD+Spz07e0hULUPFQrw7W1gPerENWdRjPuDALp+jpW8ZZ25XLNi9bV5zYkqnEOCX4MRQOXqKVG03Wu3RKovn0ooDMFd3L/z2k81AtLS0t/x//ACb4T8s751c6AAAAAElFTkSuQmCC",
    Oa = "/assets/png/taskIcon3-dd14a0b4.png",
    Fa = "/assets/png/taskIcon4-61254c95.png",
    Na = "/assets/png/taskIcon5-de1c9e45.png",
    Pa = "/assets/svg/weeklyType1-105818fb.svg",
    Wa = "/assets/svg/weeklyType10-01d8a8bb.svg",
    Ya = "/assets/svg/weeklyType11-837e1648.svg",
    xa = "/assets/svg/weeklyType12-7ffe96b0.svg",
    Ha = "/assets/svg/weeklyType2-63495183.svg",
    Ka = "/assets/svg/weeklyType3-560185a5.svg",
    Xa = "/assets/svg/weeklyType4-f5259147.svg",
    Ja = "/assets/svg/weeklyType5-8b5a4d9b.svg",
    za = "/assets/svg/weeklyType6-b4b8005a.svg",
    ja = "/assets/svg/weeklyType7-5ed28e7d.svg",
    Za = "/assets/svg/weeklyType8-6bb1ae2c.svg",
    qa = "/assets/svg/weeklyType9-864e3d73.svg",
    $a = "/assets/png/bg-9431f309.png",
    eA = "/assets/png/box-c5e933aa.png",
    tA = "/assets/png/head-50a17e03.png",
    sA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYBAMAAACDuy0HAAAAJ1BMVEUAAAC4vdC3vM+5vNG4vdC5vNC4vNC4vNC5vdG7vtG3u8+4vtK4vNBm9UTmAAAADHRSTlMAX3Bv38+/QH9PgE+iOTbvAAAAq0lEQVRIx2MYBcMDLDkDBgogNiOELQBiM0HYgchq2c5AgAEOxWcSkBTLuOO3eMoJJE7MBvyK2Y8gcc4Q8tOZUcUjVbExXpUIBZQDJgUSFPMcGFVMC8WCGIrxKDhDSPGZ4aJY5wwKOESK4sNDwYNUV0w4IQ2+xD/iFDMbMFAJKBFUMPiqtlHFg1CxTwF+tZxHkTg9nvgVlxzE0thWIKaxzSCKv2XuwTAKhgUAAE7Fr+UtQsk9AAAAAElFTkSuQmCC",
    nA = "/assets/png/cart-62fcf4b6.png",
    aA = "/assets/png/claimRuleBg-98d00852.png",
    AA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAX98f72+fEL8/fzCAz6+PUNCGCFwAAAHwSURBVEjHtZdZgoMgDEBr2AKK2vtfdiYFzchaaoefUpLXrEb6+IdlrNIenr8LcHXWDJAK5fO6cBJvoVYTmS/dxwWy+iBulsMqaDULClVYpeHAl5ZZH3SkE4lARR6qxqdgFm1RGHCpyuwSfnunfQNf6uxmGlFppkusatdCMZ0dy7lXyfmVlinxSDLbp+U1569cENunSdObNGCOtx+34++CvutYa5iKDEu2q+Oaewc4HwlLSOhh0kE2zARnM2efEPY77e1fw6yU0vkxxijZcJXODy2FYE4JFBQbR/IsDtIuV239nDtSZkgiEkOdQMTht41e53QjCRDz7Th1KV1Pv46hruGzSFdLp6JF5IrnNLP54+Gj++JRoSvsQ8REkbjYzDX2LBHDVXoqCr8FmwG3Gb6bME/Ta7RUNja3/rRJVvr8tD3d3QfDyA8eybNESC6MDQMKFc+dHBhDPKAPv22drQQiOHU4MnrhT4EsCXY+rw59mRo+Ugahv2WBTQa0OA3z23kLOiBz9irRybh1N16xD+PHXu5w81qRZ3Pus8UA3ftXKZcLXPdmazZmyzRMNXYHZvOlZAO3+BIWu4B7h3AlEsFxD/csKLnOl3VLikbMfFmXzpQxvtlWF7LZQVxq26IYnzAlUZmRP2VuRSAOvFaWyG+vHySHO/nzpJ72AAAAAElFTkSuQmCC",
    oA = "/assets/png/coin-cb038c55.png",
    iA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAZlBMVEUAAAD+Z2f+Z2f/aGj/aGj+aWn+Z2f/aGj/Z2f+aGj9aGj/aGj/cHD/aWn/aWn+Z2f/aGj/aWn+aGj/////7Oz+e3v/9fX/s7P/xsb+lZX+hIT+oaH/vb3/qqr+cnL/4+P/2dn+vb1whnSVAAAAEnRSTlMA728gv8+vQK+fgH8Qrz/PYF9kLee/AAAA/ElEQVQ4y5XU246CMBCA4emBAnJYnRYFXXf1/V/SiYxSeiD6XyiEL81ACuDVyroQiKKoDgpSlRq9qjICioGHgpWkwCghfbHDZLtY5I3EbJInFXki5pkr3EgDVWKm6TjSb0mky4iTtW5eRmXEr7V2QqqFfRIM/yQufFNdUjgWVA1FclASVz75AX4of+dFXC11Qk4AHzg7Du9BWXALse7yXO4WCAThDegG+g+F4HHZ2PHoCx63xpd5Xo0EGm8nnNnccdUBWgzMiOsUgPZNLEywGSYXCuyB0riR+XRjbm9vrsmJhkHeNF+9sJTqQqEVhPVmBXpIpfZm/gTVsoWlB6ylQAcPcY3LAAAAAElFTkSuQmCC",
    lA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEySURBVHgB7VUxTsNAEJw9LGj9hFAhuvCC5Ac4BX1+wBfyBJ5AT5HjBcAP6BAVeULaIORl9mKH4Jwj2XGiFBnJxWm9O7tj7xywZ0hd4GuapYscY8mRogHUYc7HX4/8rJbgY5r1XK4vUPTQBoLZuZOby5GfJ9F4jqwo/g6VZzSAiN6qor/4wZjHhzqCNMzG4ld3foIG+HzKWED7TA/SrgjWNWcXA112M2DCZFvBquZVBALT/Juai8lCai2TgSG7GW4jYI5NfM8Gg+bVuAsv/WneDswtNEcdQaNfMYZS8yjBPnEiOBEcEcHKVmh2duaCh61O0BH+2QrtWs/gOyXgJr+qypuZ34XDY+lL3U3A4jFrD9/AWLEjSs2jBDaS6Ya2MM2TpeaboQJ2J5htt7nk1zU/OH4B2nt5NimwNW8AAAAASUVORK5CYII=",
    gA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAMFBMVEUAAAD///////////////////////////////////////////////////////////87TQQwAAAAD3RSTlMAfyDv3xBfn8+/j69QPzAXrfL2AAABeElEQVQ4y31TMUvDQBR+LaS2oJLF2YKioyDoJES6iUMiCo6Kbl0qgnNcnHVw79bVxb2CP0B/gv9AmmiTWuSa9y53Ly+BfENy9325+/LuvgcGTv/VU0ejLpRwMlSE9KrEe8rgtsg3PMVwmW8+qgJ+2OdaCRzYjZiTm62XhYnml1UFlyRsVIVdEvyqkFrrJLC/Hhr7HRz0wOIU53sAELIb//wkW0rFAsNBzziAFgpTKGCgTdr4OiwKHWSetPdnUVhB5pcWJiAwpM1fsmckhe+M+iP5RgpLGTWnA3Gl0KAC0OlBCmdYCAlzKYyRQwFNhAUJHl+ZuND8NlxhTeZjc8tywQwLFOeOh0oFDvTg3wgfej6FCz2IvzS/moc1go4IBmzm03toiMQ2fZssxwS9ZxYQuhzQNKD71khMXPKjbJtxRJXyV6HIu+2au3PbO/WhblWFt5rGqW01eJf8PrezL7qG21lsFoswbTO/BgJbeZkzw7NP/1nFxyPbiwtv5V6k9O/RXgAAAABJRU5ErkJggg==",
    cA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAADBxM7Bxc2/v8zCxM2/xMq/v8/CxM7BxM7CxM2/xM2/wszCxM7Dxc/BxszCxc/CxM4Xk94qAAAAEHRSTlMA338gjzAQ78+vYFC/f29PQRq8kwAAAF9JREFUOMvt0TsWgCAQQ9EgDAj4Yf+rtTZncrSHV98qwWq60vALRnCoToKHgp1g3n13gYvBcxspJRO8rLCr8DOeJkPU3i5CtkmnZbGfV3Z8VPWAfBE5LQMNLYvtxmrmHv9iDm3Rgq51AAAAAElFTkSuQmCC",
    rA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAAD3UlL3UFD4UVH5UFD4UlL5UVH4UlL4UVH5UFD0UFD/UFD4UVH3UVH5U1P4UlLzeQBdAAAAD3RSTlMAYCDff+/Pr28/MBC/oFD7iFbYAAAAXElEQVQoz2MYzOChIBQIQfiM/2HgK0SAEy7wGaqlHyZgBBVggelQgJnqDxH4CbeGFyLQgLA4H8T/guSSzSABByQBJvv//7+jOFb5//9sFAGu+M8KqP5ZU8Qw1AAA7wxGmme3UKAAAAAASUVORK5CYII=",
    dA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAYCDff+/Pr28wEL+gUEA/GHhL0AAAAFhJREFUOMvt0DkOgDAMBdHBZCOs9z8tDVIMMZEo6PLaP5Il032yDhVBGY6aR9mMYERL9S7cuOcBgWaxU1n0njCEsjsseSy7Ta4iQrMImVeTVw+wizkK3S9ON+cIxPsc+cAAAAAASUVORK5CYII=",
    pA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB7ddBTsJAFAbg96bEtUeQTY0r4QZwAZjGhC14AzyB3oAjiFuxaW/gEdSVtm44QpcusM8OTRFLbad0OoGk/2oob5Ivr/PSFqBJk9982Hz67vCzMnsY1BT/aXiPRDP2TS/+I+/I7kOoIQJDAJOtSwGG2DdH7mvRXuUd2sIEaGAXiB6i9SkxepbplNIOpTB904o74i0Gc0Acg0SnlIH+wySRRSkBFWGyUCcGttuWG6RrKp8hWYwIIlKy/orOVVZNJVAZTLr2wnKXWXV737IqmNwuwgFh9gLViSkNqhtTCqQDIyI1Zb49mOnASIE+bX5LhFMdGBEswoREd7owIrkdIoJevMJrHZhCUJKQIAANGGmQLkwlUB0YkZZMkcFg7C14b3OB0WV0vrhqTCGIkAIgcbhp8mce45cI5ZhCUMjwhq3gLes/bIGrGtPkKLPz6PAd3qHVeoL0ABgszSt3vvmdLvDsoQOkD7RGhNhNPot2pixvsuoIMQjOR820HnF+AFd/KPS2LtPKAAAAAElFTkSuQmCC",
    _A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB7ddBTsJAFAbg96bEtUeQTY0r4QZwAZjGhC14AzyB3oAjiFuxaW/gEdSVtm44QpcusM8OTRFLbad0OoGk/2oob5Ivr/PSFqBJk9982Hz67vCzMnsY1BT/aXiPRDP2TS/+I+/I7kOoIQJDAJOtSwGG2DdH7mvRXuUd2sIEaGAXiB6i9SkxepbplNIOpTB904o74i0Gc0Acg0SnlIH+wySRRSkBFWGyUCcGttuWG6RrKp8hWYwIIlKy/orOVVZNJVAZTLr2wnKXWXV737IqmNwuwgFh9gLViSkNqhtTCqQDIyI1Zb49mOnASIE+bX5LhFMdGBEswoREd7owIrkdIoJevMJrHZhCUJKQIAANGGmQLkwlUB0YkZZMkcFg7C14b3OB0WV0vrhqTCGIkAIgcbhp8mce45cI5ZhCUMjwhq3gLes/bIGrGtPkKLPz6PAd3qHVeoL0ABgszSt3vvmdLvDsoQOkD7RGhNhNPot2pixvsuoIMQjOR820HnF+AFd/KPS2LtPKAAAAAElFTkSuQmCC",
    uA = "/assets/png/empty-4ac9a431.png",
    mA = "/assets/png/forbhidden-a43247ed.png",
    vA = "/assets/png/headerBg-163f17f8.png",
    hA = "/assets/png/headerBodyBg-7061df5f.png",
    wA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgB7ZjBjcJADEX/sAvaMmZLoQNEBZRAKgAqSAlcOSE6oBRSBnBIMAGERBLhIc44SH4XNJFB43z7jxnAMAxDE8cJSqejA314xCVLtuf/d0ED8PCIj+cE/SIAeiMsxdpCihfcWK4CvcUS0MYS0KbiKkqez6VyNtQp4NFf/OuDxnMgludzaTobrIm1+foEgmahBoeqOAM3ToJABZzws/YETqMn1hvkxklgTayNJRDK1aHuLiVCUBO3JZ0OU5T26jIEU/+daAnQ5me0iXm5GLkxAmlytigllE7+PG1+cV+uks0xgxBxeuAnL0vHOezoNF5CkM5LiBp2gQKTaw0XQ5dAmE4VuJUOlreVEy2dB90qMMj3z0W+JjXWaAfrL6Ug0gNc9fc6VSDGUGejhDaWgDZ1N3Psu3kFODb6yaQYi17dtRmGYRAXJLRQfNoEEuAAAAAASUVORK5CYII=",
    bA = "/assets/png/iphone14-a3ffcac4.png",
    CA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEUAAAD/c3P/c3T/c3T/cnT/c3T/cnT/dHX/cHD/c3X/c3T/cnT/cnP/c3X/cnP/c3X/c3T/c3P/c3T/////p6j/fH3/9/f/qKj/1NT/tbX/7u7/7e3/jY7/e3z/3Nz/hYb/jo5kS7ByAAAAEnRSTlMAIN/vj7+fMBBvz19wr0A/f09L1+60AAAC3UlEQVRo3u2a25arIAxAuamotZdE6W3anv//ytOHTn0YhlAQbNe4X12ru4EohMAWFhYW/gJ6V6uuERLuSFEUql5rlhpelwIsiK6tWDLWSoADUa5ZAvS2ARLR8om1lZLgRzmlmhcwkk+tFYxkVK8kvIxoM4/ySMHzhjsiV4lml0aFD3MDUQge6BUAc5grCdHIKqeXNtPe/GYuYSIkD82rrBnm5e3NqQcPGu3tVeDDCdFM+yVZgRd4B7xYRSQWLY5PsAKmFkPh420hRBw/2FykEEs6s0tIIaYzm4OVr5uvePgCKzwo4ANi7yfuDR6o/PIP+B+ixXzFn44e79hjrgICHozNPPTHi82Lt9dnmYOdPVpjBqu3D0jsFiLMo9fOlliVCHOwFxpHHQrgNpvBtVpRf23tSC3K7BAPlBdU4Pq/P+MRHBzROL0gfvNWQHAhHhPPgRM5nYya2ekgMSUxxTGETLKG5GjiLU7GziqugSBVdilIjiJ2l8no5hI3Od8m+n2SkBxpFcMPeoMPDgN4Mlzxga2W9BSf8MkRPNnjExMsNvikB0+O+OQcLN6f8cH14j3UB3xgW53fK7lme50aSE6ReR8wit9rkZhtWdxBcjbvtfWZbbPHSkhMx9g82dWSZbmdYSCeA0EVVrT1hiraToFFG1NOb3SZWjoKc8J7BofYUOYN+5XG4SUDok4rBPudLemNMLcOsZaEN8bMX28K3Kw/OBz3g81sBiK1/E8j7EeKB8SrNeYvKmC6jhkdhjpEHc0He8CBx8YX8BPDjTg2DviIOMQ0JaPQMkwc325bpRC379z+Sdfwyt/iq6dtahrE88TXI3QDHuzPpgcPxCc0ridt1X/G5QQP81tfBJHVJ125iTc3Qd74Wl3peS6S1Z95de5OK/KGO8LLbLNLq+lRzq2WqmLTwn3mutlqloBN6XQLtWHJqNpOWKVlzVlq9KZWRfF9lb3pVL3TbGFhYeEP8B9UTyex1fWvVwAAAABJRU5ErkJggg==",
    BA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgB7ZlbDsFAFIbPwQIsgRdiMy4Rz+wAK1ArwA54J8Rm3B5Ygg1wFImEMCXoX/J/L73MaTtfezqTzBEh5C00KGA1yrf2pg1/NynhslW1fqY8bbqCnALLUb5j587jMGtnK1PvUXPCfa3Wjtt9XNO50mQjITIbF1Oxna1Fte4feo/iYgH3OaVN2J2/eaYzdYMEIg8F0FAADQXQUAANBdBQAA0F0FAADQXQUADNzwsknglaDAsmEYUphIYCaCiA5qlh9FXuLcdflss/DL/APY5v2p/8rk/uvjMX8idG8/cCW8Hj7INbwLQnYExs4GoPLHTPh8WuilUFUOj2C+y9XGXiCSHf4wAacEJuP0CkWgAAAABJRU5ErkJggg==",
    yA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK9SURBVHgB7Zq/T1NRFMdPiVBSKtSYWifbSRJMpAPihkwOHZyom3F3ZtboP+FqdCybiQOTZbSTDCQ40U1CVKpQQIl6v5c8Qkjvfe+dc14fJf2sfffH99x77vmRZqrV6j8aYEZowBkKSJsrpMjE+Ag9mM3TzK0sVUpjVCycTL+1/Zt2do+p9eWAmp/3SJOMlhPX7k9SfWGKcln/oe50jqmx1lETIhYAqy/XizRTHo81rrXZpdfvv9H+4V+SIPaB509KsTcP7k3n7FgYQIJo9NOH1+xd54KxS+baSWALqNwco9r8JEnBHJwTDGALqAstpzUXSwDu7dztHGmBE+D6AmuU5Mi152QJCAKUJsUp3pwsAWHBijVnP69Q90gWfHrOyQxoLAHIa7RBisGBJWCjfUjaIOHjwBKA/GWjfURawCDcU2V7Y2Ntl7RAdsqFLQBW+/DpF0n5uL4vupKi93DFnAL37gKMfbv6nSSIBMAXXr3bZomAD2GstB5Qq8iWFgq0ODsRGlERQxrNjrl+P0kDlYoMwJJIMZDTLN7Nm3R79DRiY9NbX/+YmrhrS0l8e3ZcKgKw2dr8VWP1vN1EnDoXIp89um5Pq7m+Z8dyn9HYAmA5VFG9ihlEU9S6rc0Dahu/CKyLMWVTfd0pZ23x3yuXwpVaMULinkgsAbD6C1PHcjPHMGCAl8ax45xG5FcIJWSSmweYG2vEqbMjCYDl0TpJcvOna5k1lh8XI9ccoQJwf5O2/HmCk4hSZoZ+AYft5+YDsGaUlotXwMlTKW+dcMHaYVfJK0CzdcIFscaHU4DtNJuImjbYg88XnL/MTev1fSTYHpRnL04BiJoXBV/PyCmgLGjaalMpjTp/cwq4Uej/0+nC94w7BSTRvOLCcuJB4fIKSKJ9yMXXtXMKeLP6g93u08TW0J6+UWb4X4mUGQpIm/+3EOrqUzXTFgAAAABJRU5ErkJggg==",
    EA = "/assets/png/luckyNumber-ed6c4011.png",
    fA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANhSURBVHgB1ZpfTlNREMa/OS1Eog/1WR+KCQpGA7gBYQNSAjyDKwBWgKyAsgLhWQgXNgAsQCkxEQJG+sAC+mJIaO8ZZy5tbaGlt//v+SVN23unyfk655yZM3MJHeJqL5XM5zGFmB1nS1MgJORy6VUiS/ICcQYwp77B0disl0UHILSBDD5RsHbZMi3J1yRagVQce74xm+2IaknI5bfUFBOvMcQDHYQIW76h9VYENSXkTKaPsbwBRgpdpBVBJqzhxV5q2fh80m0RCjOW5A87vNhNLYX9TSiPXOx+2mCmFfQBIk6/njtYbWj32E1dzLc+H8rHCfQTRmYwTtPDs16unkldIZERUaKBmLprJFIiFMLEbSEYU01qCtE1gSiJKCFiimOrceseulMw81dEGNl4VkcXvHTltSohxThxKPMxiWiTszGarIwzVVMrZnnNARFKQmJa1RQreyTwhs9XcAjJ8abHFrwj/Vz2SOANx4jR/zEHHnHRGyUGY/RcY0vgEfLRl/SjE9wWbDD2OyHEM3AVosXgzeVpVUK24mETs509HPUD1SDxL4KpSJNYthNGFsk4HIdAHw2Dk3CfhO5aSbhPIh7W8vrPNX59P0dBile9YOjpEEbej+DlqxdhzBOhiw+XP3/3TIRy8/cGZz/OQturkFwYw3y+gF4THww9YcILefthDEPPhtAr4oMDGHk3EtY8G5esMcchLHWuhpyvPUfrycaCjuE4FnxqREkGjsNkMsYfwBFcR9oTpniAz8JVpC2hGu7iCNM2HEVKV/v6HgiR7ToNR+GYCcYeCNEzr2SQR3AMItoq1bbKKYrPWIdjSA+yPOaykKA+ROTBESq9oVQljdZAGyqhUpa+IjtVpTeUKiGqkIkiP8UkG3nQX3yQxo/OeWkGbSKiyIl2c2zO27p/vW7H6mJn5oSj1yPJvJnfn6x1o+7BaiBG06IySnlYRsqj0/VuNmyG5qUFFwHPBCJaaoZWcr6TShN4GX1A18To/EHD2nSoM/vovLdiiT7rtofekQtabCFEKM0/wuHji/xPi+gmEpg1pjXzCEdLD9V0S5Dme5oqlbpQzf22DVSQ9laCtkTrvcestNC2n0gG/thibkRbQipRURJyp0iK4lpPLpZikxUmOkjNsnMWOGY9Yg907sGzf9KfWiYlkfDtAAAAAElFTkSuQmCC",
    RA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHhSURBVHgB7ZdNTgJBEIVfNWrcyRFgIdEd3kAvgE1Qt+oJ1BOoJ1BuwNpAZvQC4glkp+DCOcK41cyUVaAERYZhRoOL+RJCp//qUf36ByAjBT3HHvWalSOkYAEp4IAvAdJiHQkxmDORAvopblUuIrr4kgBvUmO3ue08tSqnSCoAAR8w0/EkEWGONshQ9ae2jzE2ZLKIgKIaJQNlWedbKeZloq31XbeNGHSbVoKyI0VfRa5XXW9S38gMlKpuRzQegsgVu3qIyVIObQK1dWxUcIUwI5oVhOE+D1Jb6FcyOmTQCQydTwuYSoCuq3oiqo8hPlut3ZzjtwXECT6clNAo1a4PY/X9GsSK6+Eb+ayOGE634+DQiY+IPVnbdYdjeleydEAZOfFWzW2MCXhwbMEE/DzS0C7tXG89Ozb/GvK9rHMBs+Ev5ahYrLp+t2UdUTTcjrIzip9eGe4CrQhp4HhxcCdgvtP6txA2QXAl3x8L9Sh0Lo+IGhpj1KhTPfDYtJcETnThMLi+tnMTbVpMQRTmkRBDZmVqH8yZTEAmIBOQCfh6G8qthxDl0To5TjcT3gU6uzd4GX0jQL20p6+tb/8L5Mo9Q4qjdwwRLj/gYKza8It8HY8J0Ack3rCJP2Z5Ud6YGf+Fd2TLvqOmy/vKAAAAAElFTkSuQmCC",
    SA = "/assets/png/orderCancelSuccess-88db2a4b.png",
    IA = "/assets/png/orderCancelWarn-93894f35.png",
    UA = "/assets/png/orderCanceled-24ddf61e.png",
    GA = "/assets/png/orderCanceledImg-7320c80b.png",
    DA = "/assets/png/orderCompleted-9097de24.png",
    LA = "/assets/png/orderCompletedImg-f55ac1d8.png",
    MA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEBSURBVHgB7dkxDoIwGAXgV+NCdPAIbl5DRx00Orp4Bm+gN/AKLo4aFx31IA4egcUwURSVESwU+CG+b2Jom742/RsAICKSpEwa3fbTha/15vXYQZkU7lCNVW922MY1acCAH+gVyp58KEAXn4WLZRTgPZCcxIUzC1BhtQ/QhKXL8Qrv4SELp+VgMOnDhvUOZJ28bd+I9Q5ERvNhqvan3Rl54CGWxgDSGEAab+JIXnU9LesdcNoOsrLpG7HegcG4D0k8xNIYQBrvgdq/kZl9WSqg7xfvAWkMIK3wKpRHpUlSfBXKodIkYRWS9jcBXEgJ/9IkMAqglVr+GqggroZag4iosp6dQjfV3Pgx0wAAAABJRU5ErkJggg==",
    kA = "/assets/png/orderPending-47fabed0.png",
    TA = "/assets/png/orderPendingImg-ca97fcb9.png",
    QA = "/assets/png/orderSent-1bf577ad.png",
    VA = "/assets/png/orderSentImg-37fc0123.png",
    OA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALKSURBVHgB7Zk9dtpAEMdnhKPgVOQEwWWqtCmhS0n8UqQLPkFQl87cQM8nCO5SxBiXqcwR3KU0R6BJDHbQZmYERpZWSEu0oLyn33uy0I5s/Wd3NR8YoKKiomKfoG7QP3ZPAVSPzA0oBWpKPwbe8MGLW2rxAf/4mU/Cv9BRh9LAWvDtu9c1/PFzMY5aDjQ3d+XkOkfet9kESoDfqTfBCW7p42c6+lGbo7lftk1ZxDPe6FFLYks78J9TObCCItctH7BjDqA4mrAHtnaAwm0X0PkESrWejrsqebc6oRg+AAsYO+B3Gg2o3V2KcKVy/hanmwewgfkKOL9OQWGL8sUEHDyBP/UbbzSdrmbeG94j7BAjByShQNCTCxfbYa6YwT4xi0LOoiVnhVdlSXSGYRSb4UndQEkwdECqQkCEV1ASzBwIwlBIwafjf+T3Yf8YOeCNYErqz4CLqvvgmnOBhNWdQFFPjthofCArHPodEl97fhlPYMnn4RhUcG4rgT0+Jj6QN57z7CNlYpXHkcXhe84VYIGtizme2d7FvM2ORp2Vz8GLl1w+yJKzg5z8LGGlnObZlq0TYJsuaeaxF31XVpVrWiDIskex2g9IJ6XgKnzSXXdtkQVrSiDQisyyr7Hf0CBMwg9qHa1kZSSi6EVm2SPswAF8s3zUZDUkK7NBZJY9ilUHpPhTqiMXLoyjtqKcsOIAv7D+hzpFn+BaBhSe6Yo/nUgTO2Pe0HAnBvg13c555Dft4/AaKQ+o4LAPME//o7BqjNDYXmRP/AQRrvC8dzEbpIlffmHFs9qUWXYl7Oa2M8YOLEuDQUKMYUemExfdZln2rR1IJ1lopVGUeKYwB7zh/Cj3zVnicopnrL0Dm5FdtkFcln0DvJf13+2UE10ekLK3LB1XFrp+oE8na+Wv4Dht7/tsDAWQWAEKg/1l22ilARFUUJJ/XVVUVFT8K38BiZVm8iF5fz0AAAAASUVORK5CYII=",
    FA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOSSURBVHgB1ZrNThNRFMf/5/YjEl10r4tqggGjEX0BYakLKQE3bsAnAJ4AeQLgDXDjBgiVhS6BB1BLTATBaBc8QDeGhHbu8ZyBqa39ms5MP+aXNO3M3EnOv3fuvf9zzxAi4vduLlsuYxIJ+5gtTYKQkdPex6NI8gFxATBHjsHB+Ey+iAgghECCz1SsXbRMC3KYRRBIxXHeMWYjjKhAQs62cpNMvMKQHogQImw6hlaDCOpKyLE8PsbyGhg59JAggozfhqe7uUXj8Ndei1CYsSB/2P7pTm7B7z2+euR05+UaMy1hABDx+v3ZveWO7dpd1MF86fC+/JzAIGEU0kmaujuTL7Vq0lLI0Ijw6CAm2eq+KESc/zrH988nSKWTGH00ijv3biMwhInLihvTk2aXmw52HROIoCfOvv1ERVbJiz8XOP5yjNCImOvYGmgQojNFVANbBXiUL8uIAo3tZCvXEF+dEF0nGLyCIUdmshWNtfZcnZCEFREc0Gr0l4ysaXWPWFWI2xuyECE+5I7FKnkHVSFub8SMBP2L2RUSw95wUdOq653+doWQg4HYjyi4rFg39ishxNOIK0Tz+mXcaSweM1Ursm56kbDRJkeDQDWI7R8SUxgCy3bCyCB5jJhDoGdGLEkW8SdDP7an2U9Lz5Krm+0HIzdHurH+Jd85u2fJ+0WX1j/jW0i5XEG/SaaTvtuqkJKfhg+ejmPk1gj6RTKdwujDUf/tcSUk06mhPqvdpqof33+qO37x+jl6RNGQzx4ZZnQ/2VjQIWKOBR8ZUVJAzGEyBeOkcIC4I+UJc71RXERckbKEarhaR5jeIaYw8wf9doXIurOOmMIJ48buCtH9VHGQB4gZRLTp1VCqFsVhrCJmSA2yGnNVyPir/IFIzCMm1PaGUmcarYEWVIZ/pZeZqrY3lDohqpCJhv4REzfSUF9ssPFjs/l1Bm0gAtTBekTlnCWj3RifzW/+f75pPjI2l18SIxbaunjWv1tL3obC2Nxe083ElplLKkFTZalacYiCTxDr34ZCWmJqdbFjMTSsmIhwRQQqhtZysp1bJ/AiBoCOiVaPUy2+cnYdM5bojU576B8lKbMt+xGhdP8Kh4O38j/No5fIwqxrWjevcAR6qaZXgtTvqVVyXUbX94ZABWltxS1LBN/RL1pJI26IA283mDsRSkgtbnlCdsVJNsV1P/l6KzZb00SDVJddssAha4qdiu7Fs784O3ZTVgi51gAAAABJRU5ErkJggg==",
    NA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALkSURBVHgB7Zk9bxNBEIbf2XMuQKBJKkCIUBCCQKKgARoiISERiQAF6ZD4HdS0/A5EUgBJFCqkpMEVEqmC3WAEwpVpEHZy+HaYdURk3Ud8ud3YJ3GP5A/Nrdfz7u3O7O0AJSX/N5S14fr6vfGrO8cu/tb6rOfRpGLyNfM4HBEyWgAHE0p9aXvh19kHK7+y/G6ggM9vF07xH5rziE5jiIQadRmij4OEHChga2nh0kTFu+FypA9JECpsXH70ppHWIFXA9uuH057GXRSATqg3ry2u1JKuqSSjmTZjTLdREI576qbxKelaogAvUNdHOG2S8M06TLoQE9BbtAozKBgmiJhIGLXHBIzt0jQKyoXAjw1sTECgMI2i0sWZqKkSNXggHxnQwAnS+g6IbKfbNyZak5FsD2oovk1GbTEBElinkAFifizO34I9M2A+J329GNiSEItECvlx4XwPQv6gYSOgEJQCXEA0eAGnkVsAA3U4QoO2kJPcAipErwj5R+4fpg8PWEVOcguQPPBdSeizFNEyfcjdbCEnVmvAiJAJvIR89Jzv9WFBBfZUSVYhMz/N+gPeE25G3noKuhBgOIQI+iATf1k5cN7gSoDBiJgSEffTGhBoVd7WMp8kZMB1HlhLW9S9WC/OwzHOE5nsLD8l2pmc5Y1+hpaJ5Q50cASUe6FRUwoYNUMTwOwmcUWJCfAUMp0Kp8KJ0Ub2PXgPW1R80xc/Vgn4J2zYc3T/jyQvVOX13GbHud91yEHUFttK+IQfIXAeef/EOEr0zDyom6xsu9vsp1tBI2qL3YEd+DU4wDyxuXTeQMSNqC0m4MrichAyN1EwTMEjqdiRGIVojDfkI0BxCEy1JulCogCjVIe6ioLQCcPNtFLTgVvz7ZdSpfExJ18znZceAYFu6+rsk5XUdZmpyGcKHsOuGcjZazOUqWxV5OunV3aS2oGW43c2J9gZD4GzYhIoddGSJ7pm7WRQn59/t4uSkpKB/AUMovAwRCUJoQAAAABJRU5ErkJggg==",
    PA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAz1BMVEUAAAD/7GH/737/6mD/733/62X/62D/7GD/7nb/73//52D/62H/737/73//737/7GH/733/62H/7GL/733/737/7GP/733/7WD/0UL/737/73//73//7GL/737/62D/73//xC3/62H/737/gQ7/z0H/5lr/gA3/yTf/yDT/fQv9bgL9agD/kRX/egn9bAH9gQv+cgX/4Fz/3FT/uTr/1E3/zj3/myP/oh3/nRr+jRj/7Hn/0kT/vSn+kxv/iRH9awH/6XT/w0H9sjb+syX/qyFBdG+/AAAAIHRSTlMA39+fYCCPf08QEM+fb+/vv7+vgH9fQDDvz7+vn5BAMCJCMlIAAAGASURBVFjD7dPZcoIwFIDhYGUR9717CSBqWyzgvnd7/2cqok5byYEcLjpTh38IcMM3IZOQtKTllGxcrVw807rWeao8xDh3Om/1SOdG569A4Oo6piLoiDqqErjkRYQCTuleqgmX3ZjMpfsavUpilfp1NY68b+gq5LTLdFdP42m8OEKZ0HwEioA0E4RuKQrSPABqUyTUW7AhCQtpLhuqoqERG8qjIZMNCSmUQucMvTtPQPYHBhoOHqEGzgoBzR27D2Q7UwQ0sQzD2A0jeFrW/j249z8R0Mj/6OAciSNrbFCL/TZZP7Obrf75PkqhP4TM9ctp0yTQcDsItZ2hoeDQhnLsBNDE+nXIgtFPAg0ta28El98OQ/9aIM19JriMA7eZnsk+OgeoAkFLJFSAIBcJKRBExygoQ0Cog4IUGKIeAmqQCIi6PU6olCWhavRnHsdCjTKNHAkn05M6cTUJM5ViEwk7CenIBEgVUE6egIkCxhFJRDIvU5ZJdKoiXcQnNVWSlqQvRQq5DODZPk0AAAAASUVORK5CYII=",
    WA = "/assets/png/recordHeaderBg-fa25bf7e.png",
    YA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFvSURBVHgB7ZdPTsJAFMbfaziAN7BuAE8hnIAmlLVwAvAE1RvoCcS1NLQngCPoygAL6g1cG53PaSNNNGWm09D4J/NLOmlnXjpfvr43zSOyqGGqwDr0hgBuVTEAX7QH0TUZ4lAFQAh0McwItnPviAxpkCGb0AsE4Epvk1Y/PimKWc+8hRTdeX0TE/l4SQYYOfQ091wpJt2EhODRvrh30FV2wzw2dSnPoSwvBLnKYMYZiDqpOyT4jpTBGMsxFRMR+FEZ6lDS7EfTL4JWsx7oB2n5caYlzyHBPHI+HWIHxwANSzlhioNzWRUuM0/lF3nO9pYO7ZYLy35z73UEYyEXl00/7tIB2SW8AHdPB9Hy+3qlsq8TK0jH/xG0Cnvb9Co7XxbjX0cO9hyiUB+uOmwO6bCCdFhBOqwgHb9OUOWTGsQ3ckjKztcuqO1HE5P5stgc0mEF6fhbZZ92qYduIEHq1xU61GjQQ9Yk1seLtCIhSwU+ADX7gktP/IzhAAAAAElFTkSuQmCC",
    xA = "/assets/png/redDiamond-daea93a4.png",
    HA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgBtVdLctpAEO0eU64sOYK9sWEVbhCfwJYLe404AfgEhhMYTmCxDgSFCwRu4KxicKpCbqBlKoHpdMuyI8yMNHzyqqii1DP9ZjQ9r58QHPBj6BUXC6iQ0hek8QwQjvhxMQlHCPAASA9EanJ6FYYuOTGXUOuGJmymiPIyzhVQsFCqV74M5/ZhFsyGXoOW1HImNCwAAdsn1TAwh02kg/M7et7lzkCkzkl1dJNLPOtf3BOAD3sEIgQn1c/19DO1Qio73TOpgAh8yb2ymH+knk9E95a5UfJzQREsdcHHd1O6DjuvxN+G3pHS9AUoviYr0ETt8vWoBRvgceA1kejOEIoOD/D4+DKM4ldd0FAzkfKqxpuSCkrVsMMVPTaEir8XOi7amFgD+aYEywOsw5ZYErSNAcSG6IOa9j3PuFvEIEsA8lC+DsecpWcIFX+xCiqu4jPTxKWyrHgD6ANogaEoEbWn+F2/Xw/sttsXSA4y7JrP/wPvmCpvA6ThJ+wJSMZreCTFtX7nFNXkisGOiHNwLkOoqIwzuNjUgoZSfbAl4spd0tBUuAIhNisSQuWPTNwSydyKJRwpFom5bbJU/GxwYZNRK5JGc2aLi3FQGnCSlcQk8Fl4Gni3eY2GBeur4sS5VkV689Pg/DZvnJCytrfyxiGosXpXYL/k0HnY/rSyyF1JxZmIL1PSKYCwCw4Q8umny7XrITbJiVRyaIoFJb5OhwWQHunWb7UO0uTf+T97s47TXN4tFFTw/DdBRg+1IWRpjdg8+K4TNGK9nJi/Fc/12Pe4j1ID/gNYmrulq9GrgVwze9OP5wF3iRrsEXz+PTYUfvrZmmSe8gDuKE7F5gLZ6VtSI7GgdBU25TziYtgeUWzuUq83jcxPmLi7LMBX0mEsYm8i5GvXZX3oxFfVAgRHiEUS/RXjkPTw1EcbzjXARFRQBCmL8AV/Ad9iRvljlwvjAAAAAElFTkSuQmCC",
    KA = "/assets/png/redeemdBg-f275ec3b.png",
    XA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAclBMVEUAAAD/62D/62D/7GH/7GH/7GH/62H/7GH/62H/7GH/72D/52D/62H/62D/7GD/6WD/6mH/62H/gQ79agD/fgz/0Uz/szb+cQP+ykj9bAH/5Fz+egr/1E//tjj/iBP/3lb/wD/+qzD/pyz+lSD/jhj/rjGjMz3bAAAAEXRSTlMAjxDv33+/r59PICDPv1BQz5404poAAAFgSURBVFjD7dfdboJAEIZh9kdA0doPxdblR6V6/7dYExLCtsPCjhy0ynumB0+yQybZDeaeIrkVkVbAZUd0AaBDsZWDzEooNF2ORHeoKV65HYG2w/53+QFtC9epQnSglKgDYd1/vjV8IIR9zgIekON0K/hCoCce+0OCnDT8IUXN+40BYUlAwh+izxZyoIiANAfSBAQOpKaC8M+hqpoGqo2pp4Bq3Ls9DpXNr/IRqHVaiQ+d0VayIdsBzkyouFYZrLJrdWJAgCH+8YfoZug1oeyzm+FCp3xnlRdM6Hz8sDp+MaEy36fdci5krqlVdeIP28r8gc8/Q5NCA+s1ftcU7Ood2fCuaVgV9nr17JomoOgHlO/7a3dtM+J6fEut6F0TIy7sKLLejOvCLhX8k/Tr0bs4oErgXeJ6+A03/KwN4dV70Jdcw6ONNWn+6UTgLIkxJiWSYCi5FBvtMnQkljKYe4a+Achz1don6Ce1AAAAAElFTkSuQmCC",
    JA = "/assets/png/statusBg-219ad07d.png",
    zA = "/assets/png/successfullyParticipatedBg-d5d7351a.png",
    jA = "/assets/png/successfullyParticipatedBottom-266a906f.png",
    ZA = "/assets/png/successfullyReceived-ba114e61.png",
    qA = "/assets/png/ticket-50e7f4ff.png",
    $A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3z/vIJ8QX4/Pv29/r3BPMA0sGxsAAAFBSURBVEjHzZTdloMwCISTkF+j1rz/y+45Xd2RBvDsXb+7gjRkBuK+Ez/u+OcUDUbA92GIBSsPbyhIPLOe4cjDlB0SjHglFh7vV7zw+OIuupLwPF7cRZavfQxOVi9XxWhyqnyULbmRY1BbRBNghQX6hOI2MAFWmEBrWGEDE2CFCUyAFSbJ2QWpDsUEZc4OaRPsreMB0g6ASastUps6DqYNUeiYLKO7oGGd1xBs57nhl/w+9fzRJCPOIBU38SJJWII8nFxlYW/3jUwMj8xHAdgR3mkoBSR61HWvvTRn3LumjirJO7JJxkHwHD//p6uj8XqL7wt6st8AusSv+d5TU8c7ucP/WZIgnbpAaSdYsuobF54emYlqP5MzuQ0Vnx0QBg1gIP9T0fC9Mvzg9EOn+Kmd4GwKu/tS3DOxb43GIJ+61PwPLjJO63kYt4wAAAAASUVORK5CYII=",
    eo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgB7VfNbtNAEP7GDoVKqApvkEikUQ6VekLciMSduirlSnkC2icgeQLaJ4AzAdXpERXJ3FAPCAQiNKnU5Qla9dg4HnZDIjn+3TiuaKt+kiV7d3a+b2fXs7PAVUavZdXVgxlA0xgf71rFfh8WTDxiZks2FUdehHTkyJfPAwNObdUWuj5TBXTfWctkeivMVGegDg0oMR5R2xjAWXxmf0uxnYSapetimY0h6QbGs8yKUXSkr/acCae8ap9OdvvQ/fDkdS6kSXqItxfX9rbG34a/U5JvXiS5jwORAv4HbgRcTwFnJ2f42NqHOBSptrkLUORf9g/gypSpg1wF+MkrSxWUqqXUMVoCxG+RGs4geWXpPnRQCHLJpxQ06v48gnveR//8n/MZyYX/YzIChMiD4+HjByjM3ULvx5F8erOQq9wvYgXINPknatDCvYVIEVnC7oG/JwiAHTcwKOLX106mNWc2JjhCx/Hh+5UTJBxIw1l/OhjuCYVpyNXRXF1rl/1N4b+AaQcJGEdi/u78dORDfnLCbQF0dq2SMeBjXAA8k8rBci0UAWXASI5CFhDR26haMTIR3TbRUOuF3NghZLHajOqKFKDqNs+jF8gLTFtxlXJsKq6t247H1MSM8Jib1ad27O+dWpZ3WlbDIH6FDFDktfW9RpKN1sUkiwgdcm0BIxF1w+A34PBhFfAo1P5RSwgNTHU1UzmCBtgk8MuI7lO5Z3buFLAdvHzkJsAvBC42ZESey4gUsxBfGvwF98YVjyeOYtgAAAAASUVORK5CYII=",
    to = "/assets/png/bg-53b73490.png",
    so = "/assets/png/btn-779fac98.png",
    no = "/assets/png/money-61d676bd.png",
    ao = "/assets/png/turntable-b345db9e.png",
    Ao = "/assets/png/zp-624cd5c8.png",
    oo = "/assets/svg/active-0d7a3379.svg",
    io = "/assets/svg/active_b-4a60eef5.svg",
    lo = "/assets/png/supportService-d43dcf95.png",
    go = "/assets/png/ar_wallet-62a42389.png",
    co = "/assets/png/close-7b93ef94.png",
    ro = "/assets/png/sit-9e9718ff.png",
    po = "/assets/png/sit-9e9718ff.png",
    _o = "/assets/png/sit@192-d3719cf1.png",
    uo = "/assets/png/sit@192-d3719cf1.png",
    mo = "/assets/png/sit-9e9718ff.png",
    vo = "/assets/png/sit@192-d3719cf1.png",
    ho = "/assets/png/sit@192-d3719cf1.png",
    wo = "/assets/png/downloadPWAar006-9de82932.png",
    bo = "/assets/png/downloadPWAar016-297e1585.png",
    Co = "/assets/png/downloadPWAibdg-ebd89564.png",
    Bo = "/assets/png/downloadPWAibdg-ebd89564.png",
    yo = "/assets/png/downloadPWAlottery7-055a8d05.png",
    Eo = "/assets/png/downloadPWAokwin-19b71141.png",
    fo = "/assets/png/downloadPWApoppg-0694a49e.png",
    Ro = "/assets/png/downloadPWAsit-482af576.png",
    So = "/assets/png/downloadPWAibdg-ebd89564.png",
    Io = "/assets/png/downloadPWAyjlottery-fb0d02e2.png",
    Uo = "/assets/png/missingviebg-f283c7c1.png",
    Go = "/assets/png/missningBg-9deda6ac.png",
    Do = "/assets/png/missningLBg-52f5ee8e.png",
    Lo = "/assets/png/newmissingbg-557a3db2.png",
    Mo = "/assets/png/newmissingviebg-baf766c7.png",
    ko = "/assets/svg/rulehead-fa1d3b57.svg",
    To = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMkSURBVHgB7VhdbtpAEJ5dpwiiPNAT1D1ByAlKbuA8BaxIgROkNyA5QZMTQF8gb6EngJwgcAP3BjxU4q/e7TfGKKjYZvkLfuCTLJB3Z/z5m/Xs7BAdcUS6IWhL6FLJnkpZJK3PNZENh/ngPtEA/z0Sou8r1c09P3u0BTYiqh0n//f09E5rXQShookNHtQD6adNSa9NdOK6dyB3DwXzMw+ClWsrrfsa/0kpj29LIfKBwkJ8I36Z+XyojHsPmWaz8b/vIaIjpXyDAA/ZVutxI6LsxBKiPlcQhl0fDqFO19C+AvvbhQh4eLnLRXWnpVJRCdFh35lW63LRXpo85I/rFqBQJ3xI8AB2ZEqSgbkNtoFtlX3gstknIlQwsV9JlJX8RNRhxwhzOzMcXqxDMIowvyj7Yp8IsxHZE1oNm9eXIvqZazYrtAOE4b4alssNKHULsi8Q5DLJZqWirB5U/JxrtSq0YwQ+Q2V5/SfNNVGURLs9oD0hk8lUJ+Nxgde/lnKA6EXOM/qY9gnRaAzCDwwJWjtx8w5OlMHLi1NS0pxUEGVwTk4aTw3RIOXxzhaD1BANoPWvuKFUEdVcuMQgXUQTQr+URyfl8g+8mcNb5T7zZyQZVF4oSiLHohTlfdcenZ0ZFQu7xEk2y6H3sF33l8bijCylbPpgcPLHz9eosdg1qt4L3VQglihqxXNKEWKJ6oR99xBISk/54c1NkVKCxDxq+X6NUoJEolwjpkXVeKKzypuk79f5HE8HRnx6kvIprBHtSS5XpwMjMfT++9HWwUlx52SnrlvjhobJ3ESifFqcCnHFdSLSVWVcLvNp0aYtwUtp7Lov2FTu8R1UTGxWVk9nzWZvSsRHWQ+XEzYNKrQhpvg4sZTewvORB99VEzujMo/JBk2DsMMBdeuostYiHBCEjfL9oJnB6599sm8T+6WaanR9/V1YVk0pdRHVdeMeElTl/GrPPAg+4nZx1H3lMk1bVlAaahQ1KNnyctaOdBabalFNsLWJmiBcp0VLSm49GpWDYVPtNTsaPW5S527dyJ2TRiuxgOuLCJXTM+V+47dHO2jkHnFE2vEPNOZ8InMlqBAAAAAASUVORK5CYII=",
    Qo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB7dzRURNRFIfxczMWQglJBziEMfJkB2IFaAVCBUoFYAc+CWgy0kFCB1SS473ROPh2zuof3Oz3m4HwsJsMHyebkNysGQAAAACgX4ol3Szu3rv5sbntZfYz93ezw8nHyKZXi+Vx8XJhCV78zcuDyWVk2y+L5duRlw+Ws6q3cR69ja1RZuPr+eq7u5+m4+6GcfujtwaZncIT/Huqit37uk7L4eTWBuRmvnzlpU59Ha46ZGf19z+N7Bee4Br3pF2u6119aHGbF9PJ5zZY7edSyuvofplDxLh9O6o3ZAP1YLD2ovukjsHII7AYgcUILEZgMQKLEViMwGIEFiOwGIHFnoW3rC/yGOiAv/B1fnfSvqxH4oeI/8DafPuW07n1BA9yYgQWI7AYgcUILEZgMQKLhQO3hSftywYu2yH8j8aDtWKXNmDZDhwixAgsRmAxAos9+qtpHRc//+F6vnLrIrEI/F9hgsUefYKPDjYT1GmKtpM7m47TH314KkywGIHFCCxGYLHwg1z7HJphtzu0ZxGdnwM/EQ4RYgQWI7AYgcUILEZgMQKL9Wp1JYuf0V0fFz8rZDuEDxF9XPyskO3Ag5wYgcUILEZgMQKLEViMwGIEFiOwGIHFCCwWD1zsvl1cfVvu20C1M7C2y2K2iu4TDuxr/7S58lG52N7QkLTB2pzetloXD7/glVoG+uvkxPvWRf/PgL11O5uOn0c3Th2DN1f8812F8F1kZ7QTU7ufZeICAAAAAProB0QQyfTA95UHAAAAAElFTkSuQmCC",
    Vo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFWSURBVHgB7ZhRToNAEEBn0VQ/+OgR8AZ4BE8gn4X2Q09iPAHeQL/gtz2JHsEj9A+FsOMuCQTbgu0yrCGdl5BsdrKTl8nuZAIAw5wZRRQ95ctlDMQIICSPoldEfKgSC/E2S5JHIIJMtC3ZJCeUdYCARlKIbbOp1npPx4CAwaJtyQLgrt6v1oSyg0R3Jd0k+ahjek0payzaJzmGrJHoMZLUsieL5mEYHytJKWtSUf8UyZpfsjqHDTAI5l2x7zBE/fWd7TvfxSUYINbrLRhiepak4duARamZjOjeY6r6JEAwy7LbIY/GhGyx8BzHeVe99vk6TV/asUMV1T3O+3JdO72uhaqaB4hzJXW/G+M7Sg2LUsOi1BgNJX/wCSNALnqVpjcwAnxHqWFRaqbfni7K0i9WK7BJiegLKQ/GOkXVTBpjWYJN+n4t7olKKTdqeIX/RNV0AwwzMX4AcHnD990jZh4AAAAASUVORK5CYII=",
    Oo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAMAAADlnnmAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yBggO/PMBCgj79QQG+vkLfRazwAAAC8SURBVDjLtdJLEoJADARQkjAfBlBz/8tqgdqFBkgW9BJeU9PFdFdmznrngL/pK6PfN13i5XVcPTk9k66ZnHPT24t3bsy3mOf88b1zbsxPKeZ7DfnaYp6z6asU2xeC/1nV2PCS7PMsnyE5mKuPzQtdQ7ydO8AP3Sbj9zkbc+GNP0mCufseDZxLEnzevS04V69Irt1Jg2Q49Wgg8JEGwf+lJMOzJdHwejS8Hg2fR2anR8Tt0YB3NuADjVSOxBNajhv3t2tsGwAAAABJRU5ErkJggg==",
    Fo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
    No = "/assets/png/bigaward-a6efd2ac.png",
    Po = "/assets/png/chess-11735038.png",
    Wo = "/assets/png/clicksTopList-dfac71d9.png",
    Yo = "/assets/png/fish-57b49990.png",
    xo = "/assets/png/flash-be6ad48f.png",
    Ho = "/assets/png/loteria-0ccd41c5.png",
    Ko = "/assets/png/no1-5c6f8e80.png",
    Xo = "/assets/png/no2-1683c744.png",
    Jo = "/assets/png/no3-95e1b4d0.png",
    zo = "/assets/png/platformList-5db5d715.png",
    jo = "/assets/png/profit-56d94e8f.png",
    Zo = "/assets/png/slot-3fcac344.png",
    qo = "/assets/png/sport-f0fdc902.png",
    $o = "/assets/png/video-0216ce19.png",
    ei = "/assets/png/win-6264c04c.png",
    ti = "/assets/png/all-44518fc5.png",
    si = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC2SURBVHgB7dexDcIwEIXhs6PskRGySgoGYAQmYYQMQMEqGcFLUCEcFMt0OQsM1gnp/1rrnv06nwgAWHLawfnQjxLdLKuM8pkgXT+dLrelZd6LV8ce7lpx2WaQeJ+b52W+OFhr/6GD/DYvKRX4CxSwRgFrFLBGAWsUsKYXcLJINRea52V6Ab8eS4PqVdtDuzg1zwOQsBPvYCd+My/hK2GNAtYoYI0C1ihgjZ1YGQ7N8zJ2YgD4yhPHx1QvYF3nNAAAAABJRU5ErkJggg==",
    ni = "/assets/png/bg-f5ff3553.png",
    ai = "/assets/png/bgActive-a1b5932b.png",
    Ai = "/assets/png/chess-b84d67c5.png",
    oi = "/assets/png/chessActive-1620872f.png",
    ii = "/assets/png/fish-7bb09242.png",
    li = "/assets/png/fishActive-30b4d816.png",
    gi = "/assets/png/flash-3b77ef92.png",
    ci = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOQSURBVHgB7Zm9UttAEMd35dhDnMaPIEoqkzJV7M6lgTCTLuYJQE9geIEInoCky0wCmJIKp0sXZyYzKVGeIGrCgIh02TvJJMF3p9NnE/9mGAvrTt7/3d7e3gpgyZL/G4SScLefrEMY9ACxS/+uA2M2Pb7zVxOP7nnAYAbIPkLYnjoT34eCFBLgDjsdsK536XJEfzZkBXFCf0fOh5sp5CSXgD+Gs70Ho5wXmh1wnJNgAhnJLMDdag3JPY5LMvyhNW+gaR0472488y4ZcDebLnXZg2rxoGX1TUU8MmkkXKZxfUwLcAjVY8NddEafT00aGwmo0XiCIlUTN0xbW2kNhNvUaXwL+1nWgFYAGT9K83nkCw/QocuCMT278ZyG6oY7XLFpiVO0AV208Z3T4NnFt/DTYM26JSMGkIt8xnPUM2BFY0jfnHzFtTmIs7zGc6SLWIw+RCOoGm58+LjvnORPKaT7gLvZ4q4zkv8mTPZOAm2UcLeblBfhZ9D+cmJ8wXxI5UI9VQfG2Dmk4Ly/m4HOpUoyXjzq4Rfui5UeRNGlpo9HMo6AG4joz/MX4XZW2Ese+xwUM1im8ZzFNRCGQ+4nGmyywhVXjIuBOAETxuOxrqOJ8XGi+HMU51rMh1Zjolvgiy5kWV2oAgZv04x/vdXcJeOvkgEai88guqI1OVb1WRQgDiLG2O7LlaS9cBs5ZLxzFoy0I0+bJjI8VGS5+8K1JcgWsQ1ZiEeIRk3h84nxkAbirvY+Y9JZSM2FDLEV3/vA2mbpN6NjqPY+68m+LkuACp6GX4qFWRFVC4hH1kQE4lR/W35fJsCDsjERgXigf4TYexawJA+aQRWkiEgqEzIRPk/XVQd+WRj9AlWRJuI02IfIWqWGOyDE0Dkjaq86p7eHqkfmSSWKg1TcCtv9ygpbFNd/gP4gU5ySRKii0BFUjWl0SkEuIAq4z5WSLWopQYRUgDMRxlc/C5yCItQbmZgFOmzXwVzEfWJojlKAmAULd6AuuIggyixCm0poNpeqsLOKaKQ1oJrPdLDW4OG2B/XQgZANB93m+cXXX6mBxCiZEztkrTNhXjRPnYE5dc2EyDpbuGFa6Mr+gkNUHxilGpmOniaI0J3MtjG535HFhV9rXIYQXiBmGd/M3PeFgojDOFqvmOLIpyHeLKP2YZF8qLzXrPFbnB6P5zSiXVFdmFc4UBjrsQi/0zWvRE/yFnOXLFnyL78BlTF7cS9SXPQAAAAASUVORK5CYII=",
    ri = "/assets/png/lottery-a82fb941.png",
    di = "/assets/png/lotteryActive-1ab204b4.png",
    pi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAAC9wui9xOO5wOe9w+m+w+m9xOm9wum9wuq9xOm9w+i+w+i9w+m9w+m7w+e9xOq8w+q8xea8w+i+wuu9w+ibEgMaAAAAFHRSTlMA3xAgX8+f749/779vr0CPTzC/P/IMveQAAAD1SURBVEjH1ZTLrsIwDERxnk1f0HvP/38rSBVEyMHCS86qixnZE7u+/A7JqY/iNJTZaagEl36Hmy8yTC5Dgzk4DTRnS8zRYbgBZEdTEYDimYPXseB0THzn2EtPfXK15GEhPT95shr6TF+5DCfz8XmlQVQIWKzpdsPKi6S1vYmgK5DH+uPtUYLQ2bW699BO/QadyZotUtZ0rZz02G0cYYw86uujgGXYwWVojAw2uiXBJNuhNdvgDzBJg1UyiXq5qyOC0ZOxsRFz1r4SaWgIYr+pJlaGyMcre1Rbr4mCIkfzChfeqU1pLEtt4Ztbn7ZcQf6m/3D5Be7pNDPJUp5AEQAAAABJRU5ErkJggg==",
    _i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA798QII9fz59/v29Ar08w18wSFQAAAPJJREFUSMfVk0uSwzAIRAVCP1uO+/6nncxMKUoKmYRl3sqLfgUIHL6H7MwLO4VKToEQXfkO3HwjA8klNICiU0BztgQSh3DDneJoSvBL9ezBa2xwGgmfGb3Oqf+w9xc35PGJwW7kC+bJlSHQeX3SAKshgM3a7hR2PMg6O5uIugLKOn++PEpkTLpOzx7af/7AE8naLbjuOREGY+y2GOESvtcnJcASOuASGlaCjW6JYVLsoTXH4g8wyYtTMhF93OQYwejJuFgxV7ci2QU0ke031QhdNCThgpPsvEYYiiLBQCpeoaYylkIthvdIPgoBvKUewzfwA6Q2Kb84ve5sAAAAAElFTkSuQmCC",
    ui = "/assets/png/slot-bd279114.png",
    mi = "/assets/png/slotActive-1ec6d3af.png",
    vi = "/assets/png/sport-a428baa2.png",
    hi = "/assets/png/sportActive-f94f6cb2.png",
    wi = "/assets/png/tab-97a30bc0.png",
    bi = "/assets/png/tabActive-796a5254.png",
    Ci = "/assets/png/video-155c08c2.png",
    Bi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAwCAYAAABaHInAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7ZnfcdpAEMZ3T4Iwk4dQguiADgIdECd+NqnAqAJwAxGuIPgtM3EcXEFwB3QQlaA8MCNkuMvqhP7Eto4AAkWZ+z3Id3gP9Emn2+9WABqNRqNJwWzH+dDogOAXL0YK4dl3j7aMO6sPaaQFpwDZjX3rz5zzWhs4Xr4YI9CDOl7bX3w3/siMG85ZrQ+cf1b8QjjIjppIF0B04BSI9UP012jSRe/nBAEEou/0mi176nnhJyz5H7ILqDZNYIte3GHwn6KFVQ0trGpoYX8LIs4QYbLJe6WRJGhgpk3JsJkbiWsPtkCC5oNvy27cl0kf2JASqAWHsvLnYDa66pjGHCA6zUSY/XUxhwMRAu6zfbJgE6fXmAGKEVmwgwyAPQ3P2J+po/yk9aelArTyByF5xeUYdj4h6d/I7jRGaAhHCNGDPaDxFrA8S7XBqE3jG5ROxdBSKf2fcOmws7CYjcB3e09Pk0w3h6EyZh24dJTCTr4qhtOT7nyLmlfHXGBKW+7tu2BE25AuGfMbOAKl5rFwetrfA9ousVbRd++fSNDR88evoUC08zgmsiQBOdv+PTGhRGgrH+56h1SSGEDBlCZMFoRgQYKwCUfg5MLktIuKRtaTIlmhpMIEp3yCD/mhuNUEq4jKZ8whUR3YhxW4tCJcKWOMOrmOR9lMTTA5AjgCyXO0xoEsk+3JxpKN1FFB0kpN8PnrtnLbEn757RZ3jfg22/30vnYJYjEq4jmSF8j028ogE9y4aJpORb5ythRBwwEtUEHjaVH4SUKm1OnRDbKgKEJRnP9QxgTiIx0nMhyKxyJRhS/fu6KdR9XQwqqGFlY1UmFPSmcVhN5qGrO4k7FUyzFVkDwQrI1MvHk2jF7Vpm1+TxVfF06AQMOV/o+8IhpR8n0Ww/EXvMJx9lWtRqPRaLL8Bm/H9i1gAbEMAAAAAElFTkSuQmCC",
    yi = "/assets/png/5D-8aa7659b.png",
    Ei = "/assets/png/AG_Electronic-99b99bcb.png",
    fi = "/assets/png/AG_Sport-a6edb1f1.png",
    Ri = "/assets/png/AG_Video-a2f83f62.png",
    Si = "/assets/png/BB-b35942fd.png",
    Ii = "/assets/png/BetSoft-58e4cd8f.png",
    Ui = "/assets/png/CMD-d5354b53.png",
    Gi = "/assets/png/CQ9-158ba4f5.png",
    Di = "/assets/png/Card365-84d6ae00.png",
    Li = "/assets/png/DG-7e6d46e4.png",
    Mi = "/assets/png/EVO_Electronic-15e192f8.png",
    ki = "/assets/png/EVO_Play-85ec5ab3.png",
    Ti = "/assets/png/EVO_Video-801d8070.png",
    Qi = "/assets/png/Fish-fa42a542.png",
    Vi = "/assets/png/HB-93670de2.png",
    Oi = "/assets/png/Hacksaw-08e9f33c.png",
    Fi = "/assets/png/IM-d7ecb653.png",
    Ni = "/assets/png/JDB-929ef9fe.png",
    Pi = "/assets/png/JILI-751836f3.png",
    Wi = "/assets/png/JOKER-dbc6795a.png",
    Yi = "/assets/png/K3-89757f74.png",
    xi = "/assets/png/MG-9244d2bd.png",
    Hi = "/assets/png/PG-82f962bb.png",
    Ki = "/assets/png/PP-faa51abf.png",
    Xi = "/assets/png/SEXY_Video-553e1840.png",
    Ji = "/assets/png/SaBa-868903bc.png",
    zi = "/assets/png/SmallGame-30750e32.png",
    ji = "/assets/png/TB-590605a0.png",
    Zi = "/assets/png/TB_Chess-82aa51d8.png",
    qi = "/assets/png/TrxHash-5d493463.png",
    $i = "/assets/png/V8Card-c5d38d3b.png",
    el = "/assets/png/WM_Video-ad0801c7.png",
    tl = "/assets/png/Wickets9-3d3f0526.png",
    sl = "/assets/png/WinGo-f48e5435.png",
    nl = "/assets/png/YGG-58ec9d10.png",
    al = "/assets/svg/arr-left-bfe1fd7a.svg",
    Al = "/assets/svg/arr-right-2572fbc2.svg",
    ol = "/assets/png/fail-2d46961d.png",
    il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJQSURBVHgB7ZqxTsMwEIZ/tykDrDATngAkmCGMbEjMDGxsIDYkEGGBnYkBiWdgYwOxIiRYYCR753ah1JxTp0pcp00qJ3FRPukUORcr98uWz84FmHFYloc45x5dtsjWpLmRr//ygt7tLaalsbkJ5/AwagbS3skeGGPPk/o745wy8AsyD+XgSvPIjun9AV0PxglppDmoswj8CeUFr8MVMchYtGgFyA4+7MFPEzEiQE4bH/bhy9gS6EbgHvYyMgoJAVKhC3vx1FFQR2AX9pOIURWwCvtJxKgKcGE/brzx7wTMHLWASbDFRRRJoQKae3to3dzAOTkBFhZQBIUJEMELC1+ysYHW2VkhIgoR0KT9fRR8BFteRuvqClhagkmMCwiDp0OKDkbBhyNhUIQ5ATQ9WtfXqcFHmBaROFLSRoljCsSxUkwRYVnh7Tb42xvY+nooKg90QhvGbURA2cQF1ImsamoBVTPzAhyUxO/jI/jra+bnGzs74RZkEqUso2LN/zk6ytUH8/OYu7vTukpfRtk0m7iMfUpLZCJb9z8/Mz/fpCmUltnrTGwTtYCqqRMZ73bBaYXhnQ5MIkpPWc4JqoAAOb/O9U5Pw0RlGk5LrnN+rnMF8UZjnDPTi2gEiqD/9ZXmCuINVcAHcqJ+fTACZeHm/n6aNxGjmsg8DAp7NrMdr1qO1IlJRNWVyXEEFPxK/IZuGb2EvRyoN0YEyOGxUcRllsr9EJpKoqxpCz6mgTqKquA3r44nrqkNx8nzs4eoDooCm4viSlEBBj96iKXyOdeUmVX+AJlNvtL0wqD2AAAAAElFTkSuQmCC",
    ll = "/assets/png/oddBg-80cbe063.png",
    gl = "/assets/png/odds-7ec4c7ff.png",
    cl = "/assets/png/success-6974caeb.png",
    rl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAADyQTvyQz30TUryRD7xRD3zQj3yXl71R0LxQzz0RD3xQTvyQTvyQTvyQTzyQTvxRD7yRkLyXlHyQT3yQzvzQz70RD/wR0LyQTv////5oJ30WVT+8/P95+fzTUf+5+f3iIX6uLX929v0ZGD4lJH2fHj8z877w8H6rKn1cGz7xML5rKmwb47yAAAAGHRSTlMA74EiYXGgEzKRceDf0MCwUkITsLCRcTLfZw5OAAABq0lEQVRYw92X3XaCMAyArW0BURCc21IQRadzbu//fvvxaGBtaQp643fnOX4xTVuTjh6b8FUIKUWWhz1kLucMrrC55F4/PU5BIxGcrDMwE5BCoK7Dxk49mkInM0cSEpx0JjEBAhO7HwCJoL+PEej501cxBg+k7nPwItICTMGLGW0B9OPAGXjCQscOUlPACg5KQRClYluaU0hI+vpdqQo/pr4rKDeqFQA45RIjp5X6oTYexyeCv1e/FNBgeQ3A3P6H7gO7+AtK+dBHLhuZU8qHvn6jMod/WJl9ELRjVCiLD8K0i/XmWGrlM/sgTQE27S+XO/StAcT/AKqq2+VTX4A4avB2rti2bJRPbcFIdmlnoEU4J12oTh9yPEimCNXR4UOIR1mPgHzafGa9TIemv1uDhaX9OtcUH2THH0pN8KExKqS2CFWHn3S3lf2fX4IdMUIWzHCHHD5wV2c77df0IWHh39r40OZ6y/aON4qOYVx88VrAwCHreeiYd+tBE5n0z59+HGLHU8c17kd3e3AgPLDq1OcbF4mup6iTYsTtZ1/M+zw880zEsRBROHpovgEzfu5U4YiNswAAAABJRU5ErkJggg==",
    dl = "/assets/png/greenBall-b7685130.png",
    pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgB7ZhNaxNBGMf/z2w2JS0GjeAKKmyhUXuI9mR7NPQDZHvwe/gN2nwD+zkUGu+KHs1tsQcpW8yCFtyDrUS00CQ7nWf7Qtn2kJml7VDyg4Wd7EB+/OeZF4aQI3obvJQibUlJgWr6uAokQhIIR4La8yud+OwnOnnpbQS3B2m6qsRe4xohkm9cIdqzK50/WRvHcgcj+Um9LsAGVKLlEjVZUnCbk4Mtcgxh4dgJ9G0j8MVI9mAhqaSmcFK5CkshSgOhxtueoc1BoJaQNtXeeXwBy5kIFsV6wRIKspvs4tdOguRHgv1/+9lv1TtV9dzCXKOO6ZkKimAsOBgMEX2NEG/F57719/rZ8/P7Dmaf+Kgr0VLZ7K+Mhpjluh+6F8rl6ak+Xz52MTwYwgQjQU6OExoX7httRjBBW/C/qrNxksvDSf5W9aqLtuC2YRJMoiaTLtqC/b2/MIVnui4GguPXXp6TZUiHm7eTVAosvLyA66It6D30YIr1gvXGHHTRFrzr1eCr7UsX/6lvVB5Gk4ST0Bmuaq2Kx2o/NsFI0C27WFx+MVaSnNzS8iJKrtlhgbbetSQKwGtbtLl9eoJhKjPT8B7dw/0HHmqqJIpQ+DzIdfVsqYHLYnLkL8pEsCgsGMNeQnX1Qe9hKUSkBCU6sJSRQFvMv+p8VimuwzIk5DrfV2eTZMrBmroLDmEP4ZQj1vglE+S7YNehpg1JcnJl5+h+mtuU73B0JZwl+lx1vqq7w5gnK88HLrmzHw4B4SvKJ8+6ulMAAAAASUVORK5CYII=",
    _l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJpSURBVHgB7ZhPaBNBFMa/N5t/GtEGMbaIkD0GBOvF1pvpSYWSVFCKR3sV0aOntiB4tR68eZWCQiIF8ZR6Ujy5h2IRDxsEqVRKQzE2GrLjvG0TktJJS9NO9pDfJTN5M/DxvdndeY+wg2+vclel8LJSUk5NUzCBhEMCTl3QbHqiUGoNUWPg5nMDNc+bVsIeoIcQyadhIWbtiULZn2Nb3L+6XFTDYQQB5WgkRBkWKXjOziEo4hjC8LYm0HI+lxJ16SKAeJIyIcuT07LDooWP61hyN1GperCHohgfTSCZCMEERF4upPKtTe3D59/hrlSb8yX3Dz59+Y3Hd88bEUmgrJCas7fwodwmrsFquYZn+Z8wREroIkVnQ7uLneSUm0ArsFKtoxOVzR4LtAej2k3JgbCxB0UrcDJzWrtpckwfO2z0DqpXyqM755RT4eZ/8ZjA1PUzGLt0Eqagr6+zcq9F7spf/5fFskiT7OsgsZu9wqwdB6AvsFv6ArulL7Bb+gK7pS+wW8xc6lrgm/jqes0f7+cbb1QgV4jzxbVmucAX36kbSYyk49o9xlJc/LyBF29/tdUyXIA9efmjeZ3bDWMC5xfXDhQzIpCdapy73ei5g/GY1Tl+TC/DkECBC/ZxbbxTjcMCSzDA/Ztn2wqwBvZQDONXErptjnXvdtpWTcJRHDGc5pH0Ce4IIRIS/jvw2uVTSvigdg8RvaNl1fIV5DcvA4dnkS3StwrvJWgOAUNCznG/2n9IohZmVJodBAcnaokZHvgCuRcctigTBCfZuYi11Z/mOe1csNUS9h29qBab6luXlDlvpESBj1xr4D/eNsn7d9rxVAAAAABJRU5ErkJggg==",
    ul = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7ZjNTxNBFMDfm5YvIUqjVjzZ3mhiIpyIniw3D6QL0YS7N02Q/gXAySMfidw4SyKhVRK9FU8aT+yBpBoPWy62SghoLBZqd5w3pU0ls412mmEP/C7d2dlNf3k7M2/mIZzi8wvrLmdugnO0RDMCJuBgIwO7wnAuNp7ONXZh7cJJWf1l150RYtNwhiDyhQ7G5qLj6QPZhhO54wrfFJdD4AdERDuDGCdJRm2KHPhFjkAYOnECzKasCKtwx+vZYsmF4i8XwqEgmMblGA8GXD7DQS22tF6AD9mfst3bzWDsTggm45fBFIiuFRTfW/lpk8s78G2/XG+T8GpmT/4+vHcVTICACcYVYy+z9eMvuUY23u2Lvt9giAhT3XUKR03f2s4dgikYtACNR1Mo/2lksM/zBZKLDnSDKZSCN6M9MDp8UfkCzWKTS47nP01NDAjRC9UJc1CGcH+HlCN5k+CntQQHH2NutLeI7wXbMtppjC6tfwUnX5KZZiTWJ7JNuC2TSTuCJJd8tgPbzqGUIyh/J5dzbck42oIrr3frYo3IzUaqALpoC9Z2Oyrok+uiLdgs7aki+79oC0ave6c9miy6aAtOTVxTRpHu0UzWRVuQUuD84xv1aJEYpcj5R5G2LDPnqU6Xc0EVtPxQlvmXZcj4YXd1c08evGpyo8OXmm6CjUZw5c1u/ehaI7P1HZ4+/+L5jjFB2lRQ5FRQStx4r+4zJujkj1vqNyZYLFWa9vf2qFXobg4MQJmm2cbC46hri9IHvgQDkNxk/Iqyb+x2SHlaREQbs6Lky1AWL43g5I/kUkPlFcrjdP72OoO7AYzKCuvHNWsBgT8BH8GBLw7efzUtB0VXAGaFqQ3+we4KsFm6kIJUC+4IYFyMx0U4YyhynYFqfZraePqBaklYRvSWeNhU3TpHk5VzSMcepN82dvwBPqARynIHeh0AAAAASUVORK5CYII=",
    ml = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL8SURBVHgB7ZjfThNBFMbPTLsQ/FOxREpCiVtDVUgQghdyY2LjA7Rc+B6+AfQN5Dk0od6b6KVcaBowtlhi19AmlMSiVWnSbTues6XaNjNbyirMRX8JYWdn5+y3M3M63wyDHnLPE48Eb8aFYAksmnAeCEgzDukGZ8m51ZTVWcXaF/nNxLjdbK6hsKdwgTAmnhmcJyOrqW9OGU7E1RriNV4ugQ5gj474WYxEcipTz4Eu4ggGSyeagGU2EyZviDxoSFOwGPc1xRpoCmPNBMfx1mdoe2DA4n7hMvdyOzkofC6CXatDIHgVwpEwhG9NgxdKhRLkdy2olH/ApStjTjzzjql63PSraj6+y4CFgdqUS2Xnr27bbgFdoQ/O7ez9KVeObHxPBb4fVWBx5Z60DZfdPNgvdYnrfske1LFHB+X4V7VLXCdFHKWv+PGnFlg+lD9M2DUbDnCYBqVSrrjWl4rymFKBddu9hwzDgEHpF1OFVODk9KRrI0qYQQmF+8QcD0jvSwVOzYQgGApKG0QXojB2eQwGxRgxnLZSccGA8tdBmcX3Hy5D5n3WmW91nHd+fMHthdkzZzARxfb0cbkPOaj+rDoxIxgvctdUtmG7L+ICNIaD5gwFemUo0CtDgV4ZCvSKcqmz0X1Y2Tzks18ck0pLFK2lXh21lbXgE3lKjOlHVzQ1Mwnzy/O47PkHE7j1agsd718PV0XDuf12G/8fKxf9fvQ6ahJJWwoysyuPH0jbSIeYGnWK637Jv3fUtJUo7R/CqQWqxLW5cEfdj//hqFVzUCowFA6BG2d11OT/VEzcmJDelwqcQDc9rchWb456VlpnomENzci3BMospn3qNdwnFPKtLAtcD6D7vdm3d90g90zTg2LSPKdr+tlSCSfIUdPBkQl6kuYC2EvQFMYYChSQAk1pcEjyuSepN9iLG6AZAsQGnVc7WTzqg3U8C06DPqRHfXydLhyBdBZs+FhMh56knhvxtc6nqcx6H2gdCTs9uogPn9fhpkXJSvlAU66z4jdHczer6IpriAAAAABJRU5ErkJggg==",
    vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7ZhNTBNBFMffzPJpiUA0WE92DyaQkIgmhujJetIDoRg13L35CXcT4OSRj0RveJVEAlUSvYHxoPFEDyT147BrNLZCsGgsbSndcd5Am6bMbD+2tmvi77Szs/P2v2/ezNs3BAr49DRwgVFrkDES4E0f1AIGIUIhlKFkomcoaOZ3keyFsRjoSFvWGBc2AnWEEDbVSOmEPhTcEm3YF7eTYSv8sg/cAPdoUwPxo0iKbfQcuEUcQqBvXxOQ8GLARzPMUD0bT1oQT1jQ1dkA1WQ9tgueVgqeFqp8xmLE36BZbIyBXNjMQhTehX+LNhoaON8Jw/4j4IS5lU1YehMT9pGLp9uFTZkDCLEC2p3r3eP82lvYeXvGhI9fkrl2epfBmpGAeMqCMyc9UAmzLzdg4fUPYSuLEU3BmpmAS2fbDwoE4qVMEnvLq7/4FKSlL8Gvx+kpl/WttBgrw4gkxTsl+KQBgF9lx5q5DeViRHbsbfLZkUGhAuwCW0U8mbG32Sq3Kb3b390GSkNcnO5tgXLp72mz/TDVO6UjevVWvroOSweoVlwxUNyw/6i0b+Bcp3inDPJhfpApbIrAFQuGB3hXR6MQpzJUKhhruNVkbaIjVM4oKtANVLRIaonrBVYlwWI8zSx8FxsupjBcsTcud1Ulfzv2IIobffiZB/92Lr9i/h59ZFaUcaDaAmdfbOSE5SN+Nhaj4BTHArN/OzJwyp3iWKBddpB5tlwcC9SPq9MeLhanOBZ498oxqRfxHq5kpzgWiOlq8taJnLdQWK9+CCZv+qqyzfxPdU759wXiVlGNjCCzWco2pIzibH7FFIbUo+xElB68//hrThyCBueWN0XpWCk4Fm3ke2559Sc8ePJNOUYqsB5l59LbWOkCi5WVf6PsVPVLBXpaNLCj1mWnWXjTRWVniB99kGeFd7FyU63WWpadhJAQCfMjX0rE4eUB8stO3dtsW7+WihFJia0Gj1eKlZ2WRnRxwvp+PjBFgN0DF8GATXdffT4igqJZg3GuNATuIdSs0XG8EALxLLhRI34ej9NQZ9BzTdre+TS2SeEDe0fCwqOn+MO1Orc2cbEyBsGea8FX+R1/ACJ/hHdzJG+uAAAAAElFTkSuQmCC",
    hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM2SURBVHgB7VhNTBNBFH4z2wLlJ0IMBRJI2pOSECVejAcT680DoSWRePKgJ01sNPFIAiTeFRKPcibRSI0Hb+BNufXQ2KiH1kgCYpAeWtpSu+O+LUvanTdtSQ3Mod9p5+23b759Oz/fDgMXvr8O3xDcnBaCha1mAE4DAuKMQ7zM2eJ4JJauvsWci9RauL9kmvOWsMdwhmBMvPByvhiMxDJ2G47EHZbFhnU5CTrAqmiHh4VQJMc2Vg50EYdgMHmkCVhyLRzgZZECDWEKFuKGKeZBUzBmhrn1vfX5tC4wYNMeQYy93UwJlt/+gtR2AXp8BkwEuuFO6Dz4BzxkIuSvrv+BRPoAcvkyXB3va8h//ykDm8lsI36AfX0zLdwPP3n5A3IFs4bp7/fCs3tjUhLkz61swe5+qSV+Txe3+cGRzpo4d0vGyrnFHb/1530pvrq+J3Xm8JfXdprmY5+vPvyW4pLAROoAVNj8kpVjyaySj0NEiu0cKvnYt7s4NQKpyrUCKl+uUIaToEYgjoOJYLeSTN0LjnSdiD8R9Cn5OP5Qg1IgAmcTBXyQunf/1qCU1OFHI8NA5af4lVx+KWY8mr24UB3wD3itad8L37aKkMn+tWNYifm7o+SyMdDngeuX+uyxhRPD4T+dHYHRwQ5CuEHyozPDZHWlZUY3cNAcbYGtoi2wVbQFtoq2wFZBWt5EKg+rG3vH1sveiqx9VeWQU9tF28s1y3ccu8NHwxGNDElmFSFtdShubuWnRMQN/vnDAOmQKQeucsgqPgL57v1Y+sSUq0VgQqyqGyoHrnLI6KhVvpPKLxlWygU7oNx2PQdO5Uqk81Avf11H3Qg9Ptr3/U/UNayNHHVwWHbP9Rw1/k7KsV4ln+pben2VQ8bfSMpRR2eGbJPbLH/qWj/JVzlwyVE7DhnHAs44bN+8cg4eTA2RywY6ZKxKNR8rhw65ET9XrIy3C2M+pWPHZQYPjgKgJ+JcAHsHmoIxZgkUEANNUeawyMdvxz5aVVwCzSBALOF5tT1dOw1YsM6C46AP4p0GX8ALWyCeBXsNFtKhkli5DqNyPo1t5iZUjoTtil62yKd1uJnGyYrzAYdc9Y1/WHyEL7js9ekAAAAASUVORK5CYII=",
    wl = "/assets/png/n7-039e2d7d.png",
    bl = "/assets/png/num1-97aca9fe.png",
    Cl = "/assets/png/num2-79984ca9.png",
    Bl = "/assets/png/num3-4bcbd5ec.png",
    yl = "/assets/png/num4-908c3e8c.png",
    El = "/assets/png/num5-1f0ab6fd.png",
    fl = "/assets/png/num6-eceeb057.png",
    Rl = "/assets/png/redBall-fd34b99e.png",
    Sl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAYAAAD8BaggAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgBzZc/chMxFMa/J8+ahMq5gVPRxidg00GVxYE6yQnIngD7AghOAHQUjGNKquQGpGLocEnpghmSMCshKfbG693VypLz55vxWLuSNd++n/a9Z2ANersfveb9iGMNIgSKJxtdMPHLXLTZdvr5YoIAMYSKZUk+vhKHCFS4IWJ7N2N6ikAFISvgmks83krH0yk8FRYhlsXle38PEbIlQkTsoHwPewiQN7JKXHMFYPOPUBWufM4fm7+hKlz5nD82L2RWXHN5YvOLkA1XvsYPG/GXGzGEiLGaNK5uw5qJ+nzCSm5wTny//R0SO3gIUoY0sqEaTXD/0udtaA61OaQt+QFSxrgHEdGZjOhIdwqFt4z32wP19QZ3KkrT0eW7/Gp5mr+KdpCxE0B2cbtGJmAqKl8uzhbvtpaXffshfj97En1VhraU3Vs57EQYqzz1PB39+Vmas/2Q9x8dK2MaYQfrkTq4NFxEtJIhY8pkZXkajJDoHBG9aGpxnUoHT1SEWFuXCs9IqfMiNnsupcSpdKRjeHeA15Id17rmZMiUl7Bz1Jnt0Si34irEAUKVycRlmWu1jxEqkk4P1WhoFuouwuWErTlCzbhMUdQlYDaulwM2F2Rx7YzOLW3WS0dXA5PsBOtZOwcHbPZMfd28nVZOSnoPuTmoep2tRZqx3eX6VZiGTdW4pmbTk8vjutyiI6YcH1VGqwFbE7J48UL3LQaR5QlvTP37CEG70L8pbGLHVousjKvYt6yiEkILtvoIiWzWeqiwt2TP14yWQSjYdo5QCr+sr/4AJDzprKv1MEVa72lb8x+Dz9okOc1cSgAAAABJRU5ErkJggg==",
    Il = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgBtZbBbcIwFIb/Z6KKIyPApSq3jtAJSlDhXDpBxQQtG8AEMAAp7gSwAdwq6AFG8LGqwK9xIBFKCSTB+Q+x8uLoi/8/iR/B13riVrZb3DsOFrWmVLAo8TVxq7+a55p4asaV53ZgUUJs0QGjGpz5IzMPl15jvRy7LixInKwGQJ6svMbQrBDWASGH0RE7Xn97j28mJ9gGhNJM73nzSQUIdJRPFtvSA45Axra0+WQHhJx9PnOTD4oAHFQx+RjbkvK5FrDXIZ/VuDGN22YHEHHwEM/HKiACmXw0T5cfzWcHRcn8DVj3C1lBJIIqEqA0qFdMBuDBTYlq9Sc5spoBgWY7Rq/e/pyFNTsAwgZM3duWlPFL1wKU/yUPyiX0k7ba3AAiGu2Eb0dTbs7NywyIfG7JWZr5WQBKE3XNm5HhnlSAvc9Oss+5AYEdJbxc8vksgAUU8b/6wn/qbr2dzudLAEkar4feSDFT764t+7AkMgfTkvz4rWO5gNbxD9HGwGujdhHGAAAAAElFTkSuQmCC",
    Ul = "/assets/png/WalletBg-eedd378a.png",
    Gl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7dThDYIwEAXghxPoBm7gCo7gBrqJbqAbwAaOgE4CG8AG5xEb4x+QXivF+L6E9Be5d831ACIiIiIi+lcZAonIVo+Nfkv4u2dZdkMqGr6QcGekoIVPEs8RRuYR0qKVHmvE0eoorWBgakDDd/PeIK6VNtHC0wIGrpB3sQG1JXzH1IBzQTwFptaNkX6NhKvcSE5PCx8k3B4paYBS7CqkpiG2YrfGHGiQXPzlmIvuJsXvQTexbj9kjb7oDq/ht1Yv7p/5kOdarUbcfvqH20fD7UY0kHZtfiLDa7XE3En/g472cL/ONXF9C17+THgiIiIims4DgE/PN6bHlxEAAAAASUVORK5CYII=",
    Dl = "/assets/png/bg1-c7e3c3ac.png",
    Ll = "/assets/png/bg2-6bb5d543.png",
    Ml = "/assets/png/bg3-90fd24c7.png",
    kl = "/assets/png/bg4-200f47b7.png",
    Tl = "/assets/png/bg5-71cd6b43.png",
    Ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAX98f72+fEL8/fzCAz6+PUNCGCFwAAAHwSURBVEjHtZdZgoMgDEBr2AKK2vtfdiYFzchaaoefUpLXrEb6+IdlrNIenr8LcHXWDJAK5fO6cBJvoVYTmS/dxwWy+iBulsMqaDULClVYpeHAl5ZZH3SkE4lARR6qxqdgFm1RGHCpyuwSfnunfQNf6uxmGlFppkusatdCMZ0dy7lXyfmVlinxSDLbp+U1569cENunSdObNGCOtx+34++CvutYa5iKDEu2q+Oaewc4HwlLSOhh0kE2zARnM2efEPY77e1fw6yU0vkxxijZcJXODy2FYE4JFBQbR/IsDtIuV239nDtSZkgiEkOdQMTht41e53QjCRDz7Th1KV1Pv46hruGzSFdLp6JF5IrnNLP54+Gj++JRoSvsQ8REkbjYzDX2LBHDVXoqCr8FmwG3Gb6bME/Ta7RUNja3/rRJVvr8tD3d3QfDyA8eybNESC6MDQMKFc+dHBhDPKAPv22drQQiOHU4MnrhT4EsCXY+rw59mRo+Ugahv2WBTQa0OA3z23kLOiBz9irRybh1N16xD+PHXu5w81qRZ3Pus8UA3ftXKZcLXPdmazZmyzRMNXYHZvOlZAO3+BIWu4B7h3AlEsFxD/csKLnOl3VLikbMfFmXzpQxvtlWF7LZQVxq26IYnzAlUZmRP2VuRSAOvFaWyG+vHySHO/nzpJ72AAAAAElFTkSuQmCC",
    Vl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD/cHL/cXP/cXL/cHD/cHD/cXH/cXH/cXKHG6ONAAAACHRSTlMAf2/fIBC/z4tSxnwAAABeSURBVBjTY0AHQYJgoAJis1h0gEFzAJDD1A6RqVAAchgbIaolBIA6xNrAOkAchA4gh6kDChSAHEYYR4BOnMQKBQSno9kBSUaVAcEBegDJoUAOqwVcBxA4QTytih5MAHWJUsGFmjujAAAAAElFTkSuQmCC",
    Ol = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEX6WloAAAD5WVn6WVn7WVn/WVn6Wlr8W1v6WFj/WVn6W1v7WVn9W1v5WFj/VVX6WVn5Wlr4Wlr8XV33WFj5Wlr5WVn1WFj5WVkDM/vyAAAAF3RSTlNmALKfQAxMX1ImWTkygAaPf28sIO/vGs8Gg/oAAADoSURBVEjH1dbRjgIhDEDRdkvLDDOrq672///URI0DFugYfdD7fhIghAL4ZB8OeJYE94YN4vC/bQMWKJsQSZVaYIzwULgApToYARpAqQY4toFSBQToACUDGDpgEQuYHKD0AMQDui1BrIEBcaf3fgsA1TZ40Ez4YEb8y4ULIhfi2APL/Tvs6NZggRWMeT6AtGcH2CRcm9gBVhrg9RZAP1nkA9Iieg28viTbdwJqbdg/VuqCtAbEDIizJHNbZ1jRlIHTGsAZQAG3YJ77fpHNQOk39kaWLY6VoRigmXB97O4lgSnJzN/zdVjVGetuE8QMTcuRAAAAAElFTkSuQmCC",
    Fl = "/assets/png/fail-2d46961d.png",
    Nl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cHH/cHH/cXL/cXH/cXP/cHD/cXH/cXP/cXH/cnL/cXKE7Iw/AAAAD3RSTlMA3yAQn79f75BvMD/Pz68n36Y/AAAAhElEQVQ4y+3LIRKCUBRG4SvjDkwmiUaSYzOYHekWd+ASWIJmk+7AnbgWGCBymMcMAeb+kfZO/ebY0OFSMC8fZB9g3j3IEacySLLzqA30BZp3ZtPGqU7NawXlx9yecPYlgc781rARdIJU0IPaRFcqRX9yRQUvRfDTlGmySJEiLUVbSTcpPfgItYvzQsIJAAAAAElFTkSuQmCC",
    Pl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC1JREFUGNNjAAFGFyBwBjOZQExHMFMExDQAM1VATIGhphTBRChAaEMybAgqBgAMYjR3jBImUQAAAABJRU5ErkJggg==",
    Wl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAoBAMAAACLAuyrAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAJZJREFUSMet10ERwzAMRNFUCHooBAEQhY7CH1Mmh00IPAH4M/6WpfVx1+ck9T1SZYDzAH8G+H+AbYAbXhQyiaWA8yq0ElsBFyuMxHLAiUIrsR1wo5BKLAmcKJQSWwI3CqHEssCJQiexLXA5kB+ZXwpvG93Y/Onx4cDHlx6wfAXwJcXXqF70PIrwsMTjnA+cPhL70M6/FRfw4xxkSHeoPgAAAABJRU5ErkJggg==",
    Yl = "/assets/png/notwinning-7e54c381.png",
    xl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr4AAAA8CAYAAACAYLmPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgB7dq7TUNREEVRg2iGahAlkhNQilMyOjE6SEbG+PN+wZ3RWslMCTs4D5/vL4cdAAD0tn/cAQBAc4fDw5vwBQCgvcPT7kP4AgDQ3f759eNL+AIA0FpmDrnCFwCA1jJzyBW+AAB09jNzyCN8AQBo6zhzCOELAEBbx5lDCF8AALr6nTmE8AUAoKXTmUMIXwAAWjqdOYTwBQCgoz8zhxC+AAC0cz5zCOELAEA75zOHEL4AAHTzb+YQwhcAgFYuzRxC+AIA0MqlmUMIXwAAOrk4cwjhCwBAG9dmDiF8AQBo49rMIYQvAABdXJ05hPAFAKCFWzOHEL4AALRwa+YQwhcAgA5uzhxC+AIAUN69mUMIXwAAyrs3cwjhCwBAdXdnDiF8AQAobcrMIYQvAAClTZk5hPAFAKCySTOHEL4AAJQ1deYQwhcAgLKmzhxC+AIAUNXkmUMIXwAASpozcwjhCwBASXNmDiF8AQCoaNbMIYQvAADlzJ05hPAFAKCcuTOHEL4AAFQze+YQwhcAgFKWzBxC+AIAUMqSmUMIXwAAKlk0cwjhCwBAGUtnDiF8AQAoY+nMIYQvAABVLJ45hPAFAKCENTOHEL4AAJSwZuYQwhcAgApWzRxC+AIAMLy1M4cQvgAADG/tzCGELwAAo1s9cwjhCwDA0LaYOYTwBQBgaFvMHEL4AgAwsk1mDiF8AQAY1lYzhxC+AAAMa6uZQwhfAABGtdnMIYQvAABD2nLmEMIXAIAhbTlziG/xU5DF5F7OpwAAAABJRU5ErkJggg==",
    Hl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzBAMAAADIjy0ZAAAAMFBMVEUAAAD/cXH/cHD/cHD/cXL/cXP/cHH/cXL/cXP/cHD/cXH/cnL/cHT/cnL/cHL/cXKOCLU4AAAAD3RSTlMA3xAgn79f728wz48/r49nIDyvAAAAg0lEQVQ4y2OI/48OqtwUGMDg/H9M8MUALMX4Hwv4DdbH8R8bEGbABnRagVIfJzBgBSZwbZjAEKhNAbsU0/3//zfg0Mby//9nHFJM8v//MeAA8/9/V8BtYgIOKeb//x1wSAFDfQEuqf7/Bbjd8QGXlD5uKf5RqVGpUSmaSbHJw6Uw5QIA7nW2ncl6ReYAAAAASUVORK5CYII=",
    Kl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoBAMAAAAMH8foAAAAD1BMVEUAAAD/cHL/cXP/cHH/cXJ5nib9AAAABHRSTlMAQL+/+4r3MAAAAC5JREFUGNNjUHEBAgEGEBABMQ3ATCYQ0xHMZAQxncHMoagYzkQoQGhDGDbUlAIADGI0dxvWkPsAAAAASUVORK5CYII=",
    Xl = "/assets/png/success-1cb5dd6d.png",
    Jl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN3SURBVHgB7ZlLaxNRFMfPuQmNFgtBi1iJkCJt2pUFV7qqdltt0hfoquIHUHHhSlDcCYI7t7pRUGumj51I48YuLSi0jUojiIL4glYx08w9nps+bGcmyTwybRbzg3nk3JOZ+7/33MdJAEJCQkJCfIBunJey6eTqKsQRIb7V3jGi5TbuFybOHgZ/LHcNTC47dY5WK+QKx4sSxgTRAAH06AbFQQCQ1bXcEFz5FlES/eCT988yxVUpfzQJsXh0MJuv5ltRQD6b7tElZZEgSbCzSKJYBLHNIGrLP00fJ914njo/9c3OV9gZ5zlUyKAZbuok7DYILRiL9C8+PNNqV2wrQEiuPGyP812mSTaJE3YFFgHvnqR7G6LlTaiQWnhknSAsAgyENHhk5TfFIEAoikmzTdgYjoFL5lWvMfE90UMQJDwezCbLLERASXCJQJrJj6dv8+zxAQIkArjfbLMbxF4H70EIGgRLiNZTwE7QZDZYBEjCm3wpQMAQyT4ius5L+AHwgUVA94h2IzU80c4HSsQL3G0FqDNUrjSO8m2CV9sx8IGoVtg9pN2XAk/VXQTR5n6Je6BTHeARUcuhO6MVyiJ8IAGa+aJW0n6O0TG+ntxWzr3A4TTKQk67FRN14qRE8KYqx1NsL3gAia5y2CTWPti6qHHQx0LKHwTiHb7LO3h07R7YgJ/9EjzClfnj1BfXfL879XcswBeE91jEp1puqvLrrR+AAEGutxibXxXlit2qFRaq8tKB0G3fceKk8gOOA8+bvC0vqxpKhqS/4P6Z1VFp5Xp+4BvugdZq5SiwA1xSVYDKDTitfF3H/CDx/xY5nPCVqdz1qmyZRjkXvsTp5GW+jUvgJL6uCTG+4NMR/lVDVXxWWQhwmk9qYWvlQTzr9nXW7bRBdyEguOKPLTY14yA8KL8b3GMXQr+gcdHNhvoJkPAVgoagaDZZBSDMgWsw0zmiXUMD30CAINCK2WYRQIQfwSWpYU1TVyNmvIUAKZF1hbYRABo0KFiigtlml9DkEDAHDYbB4dN1bvKz2W6/kEXgCjTWbKRjlKbsCmwFdGa0OYwEkIl5QLV8M+JUpZ/cK24llIjU0ES7yovXQ2one0TnJOhLxKDZpb36eGIwW3F7XTMjU3kxX9SxtistVd4XGcVYkU/T4JF9sUhx5aehd110/gdHSEhISIgv/gG9NjFEd2BA7wAAAABJRU5ErkJggg==",
    zl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK2SURBVHgB5VZLctpAEO0eYZwluYG8CFWsQk5guEAsKnG2wTfIDRBHyAmcrB0KkQsAJzBZUQWL6AhaphxpOt0CgYS+UDgbvyqVfjP9qmd6Xj+AlwasOnD9YHVA6Wsi7BCACZtL4HGQBSAtIFDfm5+cRZV4pcRCSEgDJmtrwq/8aQY1cFs9x5X/v8dW448PbUSwEOkGCVwkHL65dWYnEUvAv1ozIVpa412rJFCE5cjqK6ABAjkXSg2veo6XNU5lTh5b5lNAU82sdYXvqpIKWh+cbzJHk8Inn6YSK2tcKmPJdENKk9btTzuPYMWZyb3JRHljlg+Wzdnf1GvYPcw8lfFmeWleRCogonu5isbwStmEOJeYh/8SxGEh8Z5eGsqGM+HSAFtiLuVU5BETwkAD5hbEKZBYUpwGn4xM4tXYavOxMVsFe3YqpDjlOMaz3hHrAPq8ZxN4LrAGKNCdFDE/vCVSDjwTNAsPIl6niLmS269qUEnuTgKrHe1lNlFcjXMW1SG2EmtmEf9XxIndPHk7B0QR+ealiBHQBX+/FOeGLx0M9jVUix6IYL4t91mVQBrxDo5AwG2TWX6liKXcFeKYH+0qgY4VmrBXB6q3e4//XP2wpgHBsKwNSi2ogB55tocB9spcR9jJiD43P0660bdEVQupUnS/LYRcKB/6fGvw4TcpXMJ8SCzWiEHAriQRI/4SairhJKuNxaH3deCx1SlUu7DNhr09uYqpcyxtjHW1sx69zyWXIHUDX/N1VbTM65E1EHOY1WYzPZfsoRHQmJ3jrMg35WHn15hUG9iLjGEcmcolAy8M7Ia+SdNjZHOqQMyEzAn9GsfIIhWU2lvpoQYbBOnV4hxRq0mNm0m0Cpyd6YvwsOdm+/uFhWhR5WRUNvRiFKRnh+2TOxlIVW/giuox2ZyfZ8c40peFfzncX2vc5+AzAAAAAElFTkSuQmCC",
    jl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg==",
    Zl = "/assets/png/warning2-d9141b43.png",
    ql = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgB7dm9TsJQFAfw/5EvRxNfQCdjopOLvoE6krA4+Qbazbi4uTa+gZMjo8aNt2CEFyBhIgFSLocEQmjSy8e97Wnh/JJSmtOUc7i3J70poJQTgqOwXv0AzCtf6gRemT5/fAfNcWA7qwQHYb0ScuJvvB3Du9k16fb+skT/7aiVdNYRnNAz0vdiCzoWAM/TZvvfcC1AnBYgrYyUPD49rBz//vxtFd+UTiFphS/A6VGCHyMMMhA0R4l56hSSpm1UmhYgTduoNG2ju/LVRtcW8NWo3EQTXPHXWiw0RCZ3gJ21gLBRvuPkrxPCNeSA9R6YRHSBnLOOABGqSMmucz5O26i0wrfRwxoBMvTJu1PeeobMO3LgsEbA57+ubXROC5C23wUYg5Etzuu8AdLXhz2HJV7jdnh3hnzr8hr5fHEQGwHnt64ZKEKOSqmNTQG8rUmKFiqnPwAAAABJRU5ErkJggg==",
    $l = "/assets/png/PreSaleBg-3af872d3.png",
    eg = "/assets/svg/add-85167b54.svg",
    tg = "/assets/png/agree-a-d9d08c70.png",
    sg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAP1BMVEUAAADh4eHi4uLj4+Ph4eHe3t7i4uLh4eHg4ODh4eHi4uLh4eHg4ODg4ODg4ODi4uLk5OTl5eXg4ODf39/h4eE1ZOnrAAAAFHRSTlMAgaAi7xNh4NDAcZFiUkKwQjIykTUFLcsAAAKASURBVGje7ZrbjusgDEUBA+ESyiTl/7/1aI5UaDJAATN5GGW9VvKOjW0Su+TmJiLAGcr+Q43bJxuXVoUTiq1ApgBUhwLKoDWE06GKXlHmKQ8fWcYlTM08XuKxhGaWR390bOiCAfrxuWJUfmMo0/ynE3tX9M/GmTw94Sb9WYSSZuzRui9E+IsdFZ6t4dcH81TUivAQSi2a7KsW80niUNqi075vyA1gfQpv8eGONCHf4qQ7zlc1pzao5pN+i6glZCjvDKmwV7K6+ckeFVeXg/1BhaV80GzQflKoH8NjJP4J+zFIMUCKDKFikArpHH+HMQHgMZPqDgzfgS6WqKg5wMgwPiZJzQEYFwBedkFmxBG56opNbgGMgOClpgfJARS0FGhz/AHvAi0UCSNIfD5GkKocydfLksjmECdoeCzXXB/1eAGWbZgqyqKR2Y75CtyGF4DcIezpCOYdAmTaoJ4hoDLdwqQqwMMylwJF94mcsbooPo1YRmC9Bf6GQMz5C9L0ukJzqQPi0ZlWAVObXaYzC8SVX/yIufbCsfNO2UdTl176Yv5rC+Rzy8+qAlUoPy4mXfnm6pdfoqe4AEvx9cHN/QBZy+/dHCacwFIT95gUSg6UXQgO2yXCUh81ckCecFgvGCVUqzw8f2cYQix+nFNvyWLOQAqqrRA/Utsah9bPwaEg/eWxpiUf0P2bDcc7BrNEqM61A3jM8DpQ6NkjKdE/3l8otJoPWvTkRIIVKvNxWoLY3qxOcL/up8hLFq2PfOBtmSWRZtTIbyhTHL3pAha6sKL/DQqxqGtENkrwGP3JEmmPhEB+Wvc6QZCAUUXrdNZSXLIfIspKQaayvf9pAAS5uXnxD+T8kWUPlb1KAAAAAElFTkSuQmCC",
    ng = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgB7ZmtbgJBFEZvf4JCoVAEgUKhUCQkKBSKB0AgEUgEogKBRCARPAAPgEKhUCgUCoVCoTBtziRDJoSmdH5DwklIt4u5Z+fud3eWt3q9/i1PzLs8OS+B1LwEUpNcIJ/PS6fTEVuSCpRKJZlMJkrClmQClUrFuXj4lAQ0m00ZDAbig+gC9LvZ8+fzWRaLhdgStYVuiz8ej9Lv92W/34st0Vag1+tJu92+/q+L568LwQWy2azq91qtdj3HFR8Oh87FQ1ABEmY0Gqm41Gy3W1U8ve+DYAIUfxuTy+VSxuOx+CSIwL3i5/O5+vjGewrRLrPZLErx4HUFGFCkDTeuZjqdOuX8X3gTICIpXsNNSr+v12sJiReBewOKpHEZUI/iLBBqQD2KkwADir7XxC4erFPotnjapdvtRi0erAWYqCbEpvm4EIuPYrH4JRZwxUmYRqMhmUxGfbTArVxIrAXgdDrJZrORarV6zX52WhBLwkkAkGAluPqmBMfIhcbLo8S99CFaeaQwp3IIvD0LUTwpZE7ee89FvnFuIZPL5SKr1Upd9XK5rM5xTHsh5msPYOJVQKN7X9/QSDAzOM8945MgAqBTSEsQs61WS63CbrcTXwQTACSYF8QsAsCx/s4HQQXgcDgEnRXBBeC3WUE6IcHNb0sUAaD3kaDwXC6nzhGzrAwrZJtQ0QSAIonZQqGgPoAMq2K7c4v+dhoJdmu+9snJXq+z2ffxpiLJ63UNAqyI+ebuvyQVAFrpKX+hMXHZhr5+pUzNSyA1Ty/wA1YVGebywWMQAAAAAElFTkSuQmCC",
    ag = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAhFBMVEUAAABRUVFQUFBRUVFRUVFRUVFRUVFRUVFQUFBRUVFQUFBRUVFQUFBQUFBRUVFRUVFSUlJSUlJRUVFQUFBSUlJRUVFRUVFRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFRUVFQUFBRUVFRUVFRUVFQUFBQUFBQUFBSUlJYWFhJSUlQUFBRUVGJ3MxyAAAAK3RSTlMAv0B6VerZrqiblYmCaGJIOiQdFg/79vDl39TKxbq0oY9zblxONC4pCQTPqkRvegAAAWZJREFUeNrtz0duw0AQAEGSzjnnnIP+/z8ffJOBgRfgiCts9Qca1UmSNGZDP0FDN37DbIJAQH4DAQGJAwEBiQMBAYlbTsjQLWcgtQVSWyC1BVJbILUFUlsgtdUQZJiyMSGzKRsTclbwBQEpgJwXfEFACiAXBV8QkALIWsEXBKRFyGXBF2QKSD/k1WdCruYhXV4gTUHWQUBAQsg1CEgO5BukMsgNCEgO5BYEJAfSg4CAhJA7EJAcyD0ISA5kAwQEJIRsgoCAhJAHEJAcyBYICEgI2QYBAQkhjyAgOZAdEBCQELILAgISQlZAQEDagDyBgORAnkFAciB7ICAgIWQfBAQkhLyAgORAVkEWC+nnWlbI30Bqh7yCgORADkBAQMIGEBCQNiCHICAgYW8gIDmQdxCQHMgHCEgO5AgEBCTsGKRySGog/+ik4AsC0iLktOALAtIi5LPgCwJS0FfBFwSkpH7COkmSMvoBUQl8xsUGEfcAAAAASUVORK5CYII=",
    Ag = "/assets/png/diban-f8c2e476.png",
    og = "/assets/png/headlogo-56515a97.png",
    ig = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA34CfIL9gEO9wQKCvj1CQzzC1fPmtAAADOElEQVRo3u2Z3XLjIAyFLf4hGNu8/8NuFwcEiQGbZnZ2Wn9XaQd0KumgGHe6ubn5RUinKQfwX6iVU2LYJ4ObGfwbQN1nwhuqfAVFzbfDC+6bgPhWeAd5LEtJgPL1MxKMp1pwbWTZFo2prYMN17H2XMjD3mP5yIh14m66NXJ8PBfZy0kwONjJNieEMexAAthQfDDZWVjRrnw2aGNAhavxFxmDzKp+BuSCCtfi6xi+cha4iHa4qCD3kWOSWStgh5wKdpUnBeYQf0Oz7vBFbOwL45anJhp0C6vmk9Mh7HSlWbmWx2fAsnzT+QaQwqwcTVMzqA5py7MFoqVZ65MKFfjJI81wD5q1Rm5Qps6lQJNBJZq1ivZoH3IqBfn37wCslRc9R6B94EwKIgUV/fgvy0gn4dQqJTMztUH7xOx5p0LJQjR+6mJTkYJx2zUy8biw3nQhQGXWNs/iblPdksooYwKivdDmRVpi/ku3BWtKoJ1pSLW0z4qyFcIKNFNz3oagmIJ+NgGaAqGzcs8EOuMk/rVoHxl+3zZRgLu2hYSP6GxkuOeAbThjA5/h2vPWhiLt0Vy+D7bqRuVzoEZYxqddAQLFRlVTAH8eYKHyx4CsV1YRY6zvI7AwCHdGQH0g8dShvgLF3iI21Lk+kFTauIUhT+uQeADok/C4vU1xIKlDgWx6VtLsjJjiY19A3AK3wC1wC/wGAfJvBdxMC2YxJrDg08tSvrh4Y5WvVx2JH6vf+SDTk5otrj0HzK9ftySFWet1tCxd3MvkSl6vlOm2JS1+ZVceiyA+jbDyYqggQx0sCGuaD3f6pcg8sr7ZVqQw+CNC6mar0BPgnfi4D4YEWL4O3NTCEAqXBWgKTomZujxSpy3dsW0BFgzO0T1nBEjudOYPYXkC4qKAVPmNUR2eg1weposCu2dBNuy15NcRcVXgaT2Ls+aVR34Ph+m6ACvekhlNCrQp3r+xAYFJn3lrPMchdFUA62JZ9/0zmQYEwqfO+1ADsRsjAqjg6aGEnLHbYwLoT3iXkEThaBsVKP+JkGkwzeNp09OQgCKRh08An8kXswX8HU0L4YLAGP+PABkXWE4JyOEUOJtubm5+JH8AbPaZ16QDZ/oAAAAASUVORK5CYII=",
    lg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANFSURBVHgBrVfdcdpAEN49PB4nT3QQpYLQQXAFsUzMnx+ACowrACoIrsB4JiCMbeQOwB2QCqJ0QF4yjMfcZveEiOIA+gnfA+iku/1uf28PIQZc180uXiCHGj5poDwhWEiQlW/8PFcAMyScaVg+VUufH+PIxBiEF5qoKUQBCS/zNOkfRgBhFhV80MAb8zfjocIevMBNpWJ7iYmHI/diCdQWYYgwhSV2WNAUdsBx3DwpqvNjTTZASJ3zYqEXm3hw635hIzbjEm7YgMUbmPCjpQC75ZJ9GUnsjNxrIqqT5t1WCm34D/SdhzabvYVIvUqx0Ah/U+GBaLovUoHIEFlEWB8aK/7BWuP+6KHOgXK9jfTr8KGpEGuo0d4VNJsQaA5El9VyoSvvjMbiEyZt8aO3TVPlT82J72Q+JIDINPGC2JJMWRPDgYlCi7U53ra4Wra7Yg2Zl4ZcgpR/s7+edVOGxtSD2/F3RJxWinYjav3abJKvvNEkZndG4wkR5N4c4ns1uL0/ES1gCTdxFgcBA2k0X2m9WEBOEak8D+ZJcjUtuXBI9ePCcqIUlzt2/AwSwgQh4WVSclNyET4qqbGk4RukgAQc+7mRhJx9LDXeUn7xpzmkBJuvF5BDhq6j5hOQx39ZBXuAzviuotVRGQcH/lGn3kFK9EdujiknIoezMzIdOS6y7OP5Aevu8aFqQQoEpP4Ij8+LdmSQSjDz30wx8ZMkNSREGlJBEMxKEUqrkpVDHGLCuZO5yUllnQRzhqukWhzBzPgnQ604iwf34xoXjwkLmCchNSC/MymV7EfVsO05h+MVmzsfpbWQcmntwapOJyE1XYl/1pvSbNLp+VB1o7Q2NT1EmvRMXrVCHmdQb00sWrOwjtH6zt1IToC5tKQrmXLsdoK1f/Vc/eG4y3X7go+9duXM7sAeIKRsXq7rcFUtnzaD9/80e2zSHhuitg/yNamGm2rltB7+trG9DTSH9KbNc8C2xHWvNd1JbBY7bp0DwvcN8s0A+WZwFtHQhwglWJHP7KC5i028Irc06Dqb3fRk4XvSEvRPmaNQ6jxZwRXGZMeSrt4eqa4tqboFO4nD4J77hLXJv7onmUsbSr3n0ssbejzigrSLMMBvsTb4fSeZV1wAAAAASUVORK5CYII=",
    gg = "/assets/png/n0-30bd92d1.png",
    cg = "/assets/png/n1-dfccbff5.png",
    rg = "/assets/png/n2-c2913607.png",
    dg = "/assets/png/n3-f92c313f.png",
    pg = "/assets/png/n4-cb84933b.png",
    _g = "/assets/png/n5-49d0e9c5.png",
    ug = "/assets/png/n6-a56e0b9a.png",
    mg = "/assets/png/n7-5961a17f.png",
    vg = "/assets/png/n8-d4d951a4.png",
    hg = "/assets/png/n9-a20f6f42.png",
    wg = "/assets/svg/reduce-dd5ca960.svg",
    bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7VdNTttAFH5vxrDOEdKgSt013IAo0DWcoHACyrIqUEOouoSeAG5AWCG1RE5PAMtKLUl6g6xR7Nf3xo7j0CQeExM2/qQoY2fezDfv55sXgAIFChQoMA/QZpLnlksD7VRhDpDC/rtPv+/gibAienNSuQWCuYhGm/UBsan00lHt469eFltlNYvgJ+QAAigR0bY/eOi2GpXPWWytPJoHJH0CpTdJ0e4wOoh4Ud+/37GxXxjRJH40Ki5vbDyKBGf1w85ems2LEBUkybKnV9MKbWaOSrhaxyvbN42VTcgZGwcdl/3UNiQCfztt/lSiTLIcOOqWkM65DC5bJ5Wu9/VNGXIEr30VDd+nzVVTSJaYpEcE5XhRHgf+g5cnWWcQNKNh6Tpl3YlEA63PhZjRvQiI0MubbM3t9Wzn/kdU9I2AwpwkjKvRR73FX30hyzp4KV6HBWKM6E2jssui7MqYv484ydvD36QquTprEHq56mvl2ZLlYvR47dsskWgdV06NTbRHTFSKByOSjG9hVY5DyBKoregxA1mqmvmWkTBRRfggNsMeQw1JmuLhpJZc1H7gTltk4+BPGwl3RmT1ecq+kCUSIoXJqMp+MVFYWiqZ4mGSSi/XOMn7szauH95fjMhSqsaGYp48nPImzTNRRTqVMQI2k1E1RGthSGtqEKzadjVCVmzkYzN//eC+mYxE62RlLBI68GNJNA7z/bEeYOYVKifk03fDjTq5XLdy04WXSNiUSDcVUWlzdNbiqD5ymF2bx7jOSTtN2iAY2RuRNE9r4TvcmxTVNKJxrjqDQRlyQn2/cyaF8vi9vJMUmWQzk2hYVGHjgBDk2phIoZicRV4f4Y7laG+SJA6RmneJnOprZ3k161+IvGBVINI5jcnXC5C1KqbkPS9NiXgZFgxryfn+5XVVk385bP3Eu5K/AdFfmAOOs3xhE6FM2hjqKrpsltroWoMPvL7feZU+7QmIegO+k/EtP5ZhDnBLebXBcgUFChQoUOBZ8Q833WX9Sjr96wAAAABJRU5ErkJggg==",
    Cg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgB7VdLUhpRFL33idEhOxAH0TBKsoLgBvRZBKfACtAVICsAViBOo4TGDUhWEGb+UiVZQTozQ+h3c24rVcqnG4lmEk9VF93ve++5X4j+d3DcguuWTQ0GlBKhFD0CzNTDHn9tx+tGrps2cdmyJQlkH69JPD16PJLhA0EMSeN19qQyswBXTVt2IruYLr5aoM7qtufTHAB7yRtH1ohURbjyJufVZtp40dy6PmvaAj0Rzpt29+J468ekOTM6AOrfEey9bMgbjqkml58wPieWDDXwkzyDP43OJUYHeEBJYfKHtH/7vJ3vB64GUZNgpmccF4WlLBTtlHDCTmC4kt72enoWGPBpEO7pRQrgOHSe8HLVHJc3YL89td/5sa05llM4Tsc5rkQJsGCkBGXU5vZuyDe3Z8cw4MDAnWFuQJu+LiVCCsk46uqcENfTO55HEYDdk0ySf3D2LALch9KntPcDOYAPtGVByrjdJ5YqKM0z89ToEBGLSKpTDBJxC5zhDWheFSNl0H64nKDabWiFyWk6mIvpXNuLO9/QDGCRpGoOu67o98IseybQPZcAxsmpgGonXIfCGZjjFPRW2dDKtAenvhWS8vmR3Y07P9IEYdwGkkI2fL+a1VCysLm0YPviWtZrRO2FzxQIZsNrbW4BlhE6fTy/BlRASDb6Dl6tdhfJ44KorSQahswdikGkAJpAkJL3UEwO+gFVtbDAFBuI56F2U8HEvcBQZK6IFUCRBtXQ3vuNzLeILKamwHCHngixAiju0nKXngEzheFz4kWAFwFio0B7goFzJfQEGeQgH8mlPS0LXh3ZDPqFEofNqHQDY+paUYfz2iWP7hlnYDEMt7CQaCpG9vuK5GMdLkZ6+Yk6cHDV3BxLQmEjy9JCr/Bd1+LXah2514al3AQBeJLGKDjXdJtsMqjp7XTupDCcP4OWBl2RZsR0zuvc0/zBmOLiaLNBhj9oB6WFbD3bXo0VINx4bC1m8uLoy6RWGkLsGyN57RX0WzV1Tg4h6P7YWnTXoHkLNeRw/eN4FxX7z2gaQu2YteXyR1n6Z1BzhG38C/4CfwDtTY/pPiBNYAAAAABJRU5ErkJggg==",
    Bg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7ZfNUfMwEIbfVYi/fFxIB4gOQgehAszfDDfSQewKgAoEFQA3ZhggHQAVEDqgBHNgJoRByyaEv0SxFcAzgfF7sD0rafVY1lq7QKFfJkprNGFFQ3ETxHUwa+lexZfECYhu5aGNstqNjzu3mBTIrAUhGOfIQYpUo3naOYIvkAlRhQqu5VEjHyWwswtxK0mGG5Szeymo5wjTk7zwfehqcANZ2TN5i1XNZXYDKTWPnEWK51z2mTH9R6OJaR/8fweqI0ttD95sZNtIler5akpnPYSkMQHQqHjmcLAJD81qsC13HZ8/RD5DzUpZS9g3ffr6A6nullzbZr1Sh7W6P9FacCD/p6vswbQMT/kDgSJZmUhg3k2Mhtgb+EEpTJmmDmiCTf3TUfZtoCLKMp0WUTYVKoCyVABlqQDK0q85XBOXkYgue0UfM9U8DsuECC25V5kxUmGwxR28gZhv5Bp+AizxUnTS7Z/sLxUtLsZDSZUa0FI0qFDNRrmGJ7rAx1ydcOkaOaYM6u71nWKwKoFajE8e39KMuCUTlewK3CuZ9GA+lsv9sVYtvvocALdcU6fX9psVnVaHm9V/kn6wGXIZx2cPe2k+0akkrqo1E8hHkgHsiBtJTVg+B+2mwRT6k3oGBJO5hluHrKcAAAAASUVORK5CYII=",
    yg = "/assets/png/time-5d4e96a3.png",
    Eg = "/assets/png/time_a-a8df1213.png",
    fg = "/assets/png/voice-off-633f5ccc.png",
    Rg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAI9/vQqATwHGRUoHQYjKwCnzmPwAAAwJJREFUaN7tWd2aqyAMlEDkR1De/2nPsu6WtW0Y0O7F+bZz1yIzgYQE4/TGG2/8IczG8UaUM6XD/4YpZ22TusRufMw36J8DlL+xnGZXi84/QXVoOfyvzhlv8xE6Hfkr4nyJntgFdTBS5QJv5mlNdGqXZv62mtMT67iMrF+PxvJjcAnha++tez6xjKWbMeVhM2S+/6Ivs0SBKs1VrguKdsdVeiCwjQmsn/zaTQ18+7UaZPr5dUdk53sn0yA/g6DIn2DzYb57CFPMjx/Pd6Ax/y7ToEBUvfFZ+bEA3TLI0n3KfOXHAlPg+MFezyJGKvP81CsgADiA5t8T4DJNTb8moIADkIDTIJgsiGcgUOyzzQJTJoXzAmsGGWkDFsAtsm0CBQzAAqYdI9zWNz7qcqq8kaPINoOEWkUjUb6BkiTgStoQLWwMKpsPIPUggGuzL+m9fQGo0OH5QeNGpolijIad0wc1TSpwlXmyk7If51rF76DuKpy6SUgsogui6Pzs7n0p5CK5+jvJBany3ysIse5EHztpAfzIUzBi52Tr2vDp3OMxCwGxiUG09kevFwSUmJC1kEbs8+gNwwJ1AhKumXGo0o1O+H8EGlukhwRIcHKUnWwnIAwEajz6/rS5ihlnK5ZKZWLuLq9GTKc8nCpISmn+RckuDdk5GfEI2ufpmsSMY84VHHV8Q9cKszxqp0bJzLyXTF/0WtU1vqToV34QvSAe63vDAVYJJPXaIgy6zouXgNS8ni/o6mjL1TF6077/M7r8dgOXV3D7BhAINmDAlSUEON/WKD4DgjtgalI4gaXjFZVrDjj3isqoU6HBizhochA0LgAzQJMjXWqGYAf4S+0czE/zpYYU5ldXWmqYX69jTTs/9/egAT9oa+I9FfhBY7Z3m9xuDeAXKhgFmKBjBquFzXH0gQH6C9VImyQbnG1dADBU/UAR5gf2xDrv4A7zcQsksjOr+vxTBcf76uAeYpgtt4DpMRSTxK4XFDvjH+oqojcv/tTobdyPFG3szDy98cYbfwf/ACnpTX1HX6f8AAAAAElFTkSuQmCC",
    Sg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgB7ZkxS8NAFMf/KWJB7KKdpFonXSyITroIiltnv4iro6ufQVwd3EUKTm4BBxc7GSi62Kmi2KW+RxKN1zRpk7xLAveDx931pfD+ubv3khxgMBgMeWJNcoxGoyo1TbI62Tz0MCBzLMt6n/YPoQIo+HVqDsiqyIcumU1CBnEXjgmg4FvU7CF/OPgbEvEddVElOKDga9TsoBhMFUtFGW8hv2UTRsvbixNRBdRRPJpRTlXAIkpGBSWn9ALmoIcFsgbZBmbfZzXayDa1XNwctTZIC+DAj8gOvX4SnuHWBBbPWekuWKkll9Ay2RlZG8mDV+HacBz8QUoAB3/qtVnDS2rFH0gJ4LsuEbzPb7qXEMBrdR+akBAwzYPgJzJCIgutRfgeya7gCuDsdIKUSMxAI8J3jb+734H73J8K3ZX4SxmnXkoSAqKCagf6nKW2kRKJPdCDm4nC4HW/6fWXkAESM9CJ8Tc8y6Q6SwjgTNODJqQ28SUyzPUhfPgdKQE8AxeQETEk6/sDyTTKIs6RQa5XsIOfWqTfB/hO8UxwVuKUuYrZccjeyDjoJwr+NejU9UbWRfKZuKegJ/7XvNTnTRkEDKOcqoAXFI9+lFMV4KBYOHGf2P8J8FKUjWLA1fYh7qKxPUAiWEDeIjj420QHHD7eWcEu3Od2XUdMvN65aHXjDjYMBoOhGPwAT6Fln/zlO14AAAAASUVORK5CYII=",
    Ig = "/assets/png/icon-question-80ef9122.png",
    Ug = "/assets/svg/icon-tip-1e7db3e9.svg",
    Gg = "/assets/png/num0-d3a30585.png",
    Dg = "/assets/png/num1-fdab1e12.png",
    Lg = "/assets/png/num2-b18f079a.png",
    Mg = "/assets/png/num3-8254ed13.png",
    kg = "/assets/png/num4-5f2d81c5.png",
    Tg = "/assets/png/num5-fd2837e8.png",
    Qg = "/assets/png/num6-0cbd3b10.png",
    Vg = "/assets/png/num7-05973970.png",
    Og = "/assets/png/num8-41b2260f.png",
    Fg = "/assets/png/num9-310d63e2.png",
    Ng = "/assets/png/numA-594afa89.png",
    Pg = "/assets/png/numB-cad56304.png",
    Wg = "/assets/png/numC-8d88d857.png",
    Yg = "/assets/png/numD-06e782e9.png",
    xg = "/assets/png/numE-f70da99f.png",
    Hg = "/assets/png/numF-956f8923.png",
    Kg = "/assets/png/prize0-96a81e16.png",
    Xg = "/assets/png/prize1-fe15d69b.png",
    Jg = "/assets/png/prize2-28af3286.png",
    zg = "/assets/png/prize3-6700769f.png",
    jg = "/assets/png/prize4-5a5999aa.png",
    Zg = "/assets/png/prize5-82f7fa61.png",
    qg = "/assets/png/prize6-57181440.png",
    $g = "/assets/png/prize7-ca1d24be.png",
    ec = "/assets/png/prize8-3ffac79f.png",
    tc = "/assets/png/prize9-63d3f3f8.png",
    sc = "/assets/png/prizeA-7217212f.png",
    nc = "/assets/png/prizeB-6c3c2497.png",
    ac = "/assets/png/prizeC-bbf8b83c.png",
    Ac = "/assets/png/prizeD-46a95e2f.png",
    oc = "/assets/png/prizeE-90087f02.png",
    ic = "/assets/png/prizeF-46aeece0.png",
    lc = "/assets/svg/search-afc8e120.svg",
    gc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFiSURBVHgB7dk7S8NQFMDxk1gqXZx0UfQL6CK4OMaPUKGboLgq5OKq2C5upR2DJZLRIY0iOIiibo6KuKiDLkUQlAwV8jCJuUPxgcXaAzd3OP8hCXnAjxNylyi1Yj4Bicvxjd70x0DC6vODLRUkj4DYCIiNgNgIiI2A2AiIjYDYCIiNgNgIiI2A2AiIjYDYCIiNgNgIiI2A/XZ3bg3xfQ4k7GxbH785Nc30sCLdBDnu+rhhR2FgMycoSzXBg63S5MPl4U4SR9UUV+fnpAE21+dmW7cX1SSGDeb4Vue8FEBrZarkPt1vwkCiMSe8+notc2BjeWLtzX0uQl6dZrve48/rmX4knzhF+w3Hy2yCxuJoxWu/zkBcSCfnut3uEz5BvgAbCyM1v/0yDFFBY/vdcTyhE+S4I2PVjoLwhO0FOkDw5zPCgJ0FOInfzRRX7vU5Ia/4G87pHcdTxP3QVpeY41nwzz4A2AyA6AN4fuoAAAAASUVORK5CYII=",
    cc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAyCAYAAAAus5mQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgB7dg9S8NAGMDxJ5eXvoA14FB00kGhINLRwUGl6iBIacysGG3dHNxc7C7kKrpKnQsOfgDpB3Dool9A0Q/g0EGwNZeoIL4lPjS54fntgT9H7rnjFPgH10pvKP3eOcRAg4h4xThUGHNmSrXZhWrjHgaoYaUeWJQP/DhV8+J27EHHvQu9gryic1U3llZ2T5an5jefICZ/BvKyaYLabRqZ3HPJOVqPM074NfAtrp0ZGrmuNR/rkIAf/0FeTo8D63ayw/mrpOKEbwODuF47a+Yvqmd3LiToSyC39SKwl05udPI46TjhU2AwgNXLscLc9tbpTQsk8LFJXCu1xxjbnyiuOmsHrVuQhB8YnA5qrAM4LE3EeQPYnl50pIsTxArWvdOhEPcADsvfJLLGCZEuC0mgQCwKxKJALArEokAsCsSiQCwKxKJALArEokAsCsSiQCwKxKJALArEkj5Q8R7R+yCxV8/+UYCB8Z1QAAAAAElFTkSuQmCC",
    rc = "/assets/png/trxbg-ec7f8a7c.png",
    dc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIGSURBVHgBtZW/S1tRFMe/57a0phR9pUO3ErCFTsVCW7qUvi6aTvUvKHarWczaoUjp0EKXTMWtpZMuouCggpBsggHFwclgcFNQr4JBM+R4zn1RTGJe3kPfZ7n33R/n3PPO4XwJIXi5Ya9eq44Rky+faYDTjS0L0BoBs2CasRPzlU426ErDXzJpJv4rBn1EgIn+mTp9v8rRrdaF3uzQmFyZlOkzREReOQDikdSrJ6cnpfJyRwe92cFxYvySaQ/io3cyd1/343SlXGxzoC9vGL8WEo0vkRyeR+JyEPzz+qpOwy6v//jvxuffPqELlti80Jzcdp+Gx8HhxpXHDx8hIl5QJHhv3OuZR3DjsK9lbiT7w0iKWjVnGPiIhGCmd0aGASQGp6lvdJAvL2ki53K/4yTUsb23g7c/R3FYPW5aN60HWw/EoS91v21NI9iCa2TdsX8W3OhlhxARKxFQBQlB0nENEReRHLMGd2p5JIVohbH5gopHATeMaoT2IldFolif4VQqnBgVZlWAdOLa9Ulp06pYyDQTdmtpYwXTpSK293fCjmlyv9qJhfkLB4GT8nLqZb/swe90cffooLtxhkjn4oWuNCmaOCmoWMj0DeKrmg1evtgkWm2aHETydErK9wFUayMghgsiMB/Of0vzXgiqFdrOg47rmqLXMFiRoSLtsoiee3mbn+lYIGcDdLyePrURVwAAAABJRU5ErkJggg==",
    pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALYSURBVHgB5VZNbtNQEJ55jgoCFu2CouzSE2CTA9Q9QdMTkN6AqgSJVZIVEiWKeoKWE7Q5QdMDFIcT4AVSRLogi1JYxDPM2NTkx3bcqOmmnxQltt+bL89v3vd9AA8NmHegd3ngAphNZnaBsQTApagCDuV3DwF7AMFnZ/1dL0+9ucRKyIx1GWpzQIcGoAsw8p3iez98/q29Co9HNiFWEHEbkH1EbjrPa92FiMOCT6nODBUk2nWK2YXief1WlQ3U0cApXJmms7E3TBpnkie3S/wkOCNixGvj5CVVOMX9Y1wxDgWMWkNrJY2bWbGuVCcwcKf8otZII/AGrSrJd3l9/zhtzEX/oIEGt/Ha2ppe+eyKo9d7nkWqkCY7QvlkjSkXaw2tBc+oPv1sgtjrayNBxfy2GnBHMI+sBhNUolORQswW1mVQakMsAmdtb6jNGZ2MBGLve9vW81kupu/ZwuRRc9rjq46JqRBUZd86sCRwwIdE4M4Qy7l7aSw+hSVBhUcEZnPsOoYNV4VccrcYCn4ktdPEDKt32VTTcIp7fqzvkKJc94H/ewzoe/0PJVgSvJ+i/QDDGWJRVh8KhRIsC39Gtqwu7qFCTBzwubiKC6HtzQcS7hLkh9omEHydIdZ2Z8AT+dnIU8i5pdCoVyMGO/H1+MMvg09neUw8tE2LPDkJQy02L3Wok4nbvX61/nbr5t5EV2PATSZzFIaADJAZVcWeVvV4iGVXMknVZlmCgSxo/P4EsWpqKJsJNjYxif71geQtg3PULrRZ7ky/xZlzHNkYu95lK5Vc/6CY+xr+MhtZr9n70VJSN8lmEzNXuIcmOJH00M3KTamEcV5jF8naiVRrEonKpQNxxdqKchN5F9IckJdUU6nMifKaRJ4EUsX8eKupRAKCCjyiJEekjprJzVsI1S4UHs3c8CbM2NKk8wJi/kA/+GgTmarap2bsqKvDEr5maRUg1YLbJNKHhb8f/2gYvPLTRwAAAABJRU5ErkJggg==",
    _c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAABeCAYAAAB/7LVmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMhSURBVHgB7dpNUhNBGIfxtydJibscYTyBeIOwAFKu8ADgcILACQgnEDeWO0Zxb3YmYQEX0MoNTHGCLFQsw6TtDh+VQmSffz+/BTXp7JqnMt0940zYznCz4511zVszfCxrjaf75VpvYonbGWy8Nue63iwPH89rDbdbrvXHJiozUdvDdhH+iUc3gUdFNb18Y4krztq5d668CTxqVVN/bMJkI3feWg8Mb1niZn+seGC4VXxp5yZKNvL/aBqSk1rkSBCRQx6RQ1799qI422rOrn51zLtiYee9lE42Bu6x73cG7dI7/9oSU6vcs9kj34d56YZ5ObBl5WwSTtNG4eLDyUa/vB2e/5IXZ+ur1dXld+/vzk6B5XN9XNwKF8fbp5t3x8VZPDetptnnhfNkYPl524t3pniZhQcB8faUGyAmLL06cRkelystS0fyj/S99w/PwcqK4tw0q+nvrRh5bmKK4cvVWWblv9+4Xvw7c/65JeiqbrmvudH98bBLH8d3enymNy/hyXcueYRYWdX5tN4/Dxvpw/gPvB5157WfK/vxnZYwtmoJct4fzOcl868W5yWr3Frcm4V1rORrD257uOlNkHO++3F9eLg4Vpy2W5X51DfZZa3hDhffOpzPi5+/pJWbGBd/6FQjvzEO9+JRiDquN3NLa//xmGTmJUZeN23xFpwb7ktqXnisD3lEDnn1iwsDZHk/s/rXb8r7ToDlChJA5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JBH5JAXI58YIMp7N8nMuZEBohpPXC+rV27X+DWHJPd2ctQfZ5P3/XF9lr0IIz0DBDhz47BM2f/xbrAXP/8F5RrRvj9YxagAAAAASUVORK5CYII=",
    uc = "/assets/png/binguo_tip-5bf2ec89.png",
    mc = "/assets/png/count_icon-841b89c6.png",
    vc = "/assets/png/dice_1-3eb8e22b.png",
    hc = "/assets/png/dice_2-38383685.png",
    wc = "/assets/png/dice_3-c91e0c1c.png",
    bc = "/assets/png/dice_4-3537b074.png",
    Cc = "/assets/png/dice_5-a11110ab.png",
    Bc = "/assets/png/dice_6-3734f323.png",
    yc = "/assets/png/hidden_money-4d2f0151.png",
    Ec = "/assets/png/hot_bg-52030c8d.png",
    fc = "/assets/png/hot_top-db35cb37.png",
    Rc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALuSURBVHgB7ZpNaxNBGMef2ZS0gpqih0jFsFJUPPhysKceXBVqQQ9e/AC5WRH0G9h8B8GejKciemmggiloc7Cn5NDag7UYXPBUsTZFD0kwO32elKXZySa7aWazk5If5GVnd5b/f95nnwXoc5ifi0afTBuWZd1knF3HQ/xw3T53ZfwS3Ju8DYdlvfgN3q98suWY+GUyDVaBsUzpxYecV/4h8BDOa/w5r1nGvlMOwVIvGJ1bYOD/Z7GZKZNxLVmaa21Ea3Xi5OMpEr6MNzIgPHTOrGXS0uoCVwOUgXGYBUUgLa1MNBmgZqOSeBvSNPpo2hDTmwxgs0mDonDGm2rBYYBKH390UBZuiLXgrIH/tQegOhp3aHQY4Ey7BorDOTg0Cn3gYIJSF6dGsRProD5644EGfc7AgBe7//5CkAxBgHxey+OnABfPnccV6y0Yjg6DbAKrAVs8sfnzB8xnM1CpVkA2gRig9b0t3mZrZxteLb6T3qSkGyDxtElxg8TPL2WkmpBmgJpHevFtS/E2sk103Yltwb92fsPWn21feWwT1Lmpf3SDlFHIq9TdIBP5r1+gWwYTWdgMDIRN3xsIdC3UyMTlq3ABh02/FHCE8jPE9sRA7PgJuDMx2VGe+KnTsPnG20BPmlClWoVOKfvM05MaKOMyg9ZIifhZ33kKG2u+rutZH6DZ+jAztheDYTRsBgbCputOPIIbdQozyd6wrxc3fG16RAMmdPh0Lnn/YX2ikk0iPlbf9LhgNh4ITYiZ0CEj0SgEQeLMmGs6EzQ6DDBu+Zs9GhCfPsiA9tcf8yvuJxk4NApNKLIAYD2FDqBtoYytoW8sttB42BQnjs3cDTsy2QZm7r7MOpa0TcMoBrNToCioLSmmRcSEcuG7eezGOPYVCjarA0YpU6W57GsxPeJ2cblQzKlkYl/80qzruXYZKSKIoc10WKEnLMEcBu5S7V418PeyB4U2MTpIATZG4f+ADNEYj/dexRLHoVLLtRN+ZNgD0kIVRvkm2awAAAAASUVORK5CYII=",
    Sc = "/assets/png/lock_money-47931447.png",
    Ic = "/assets/png/record-5001454f.png",
    Uc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIoSURBVHgBnVRBdtpADJWmfaXZcQT3BCGrvtJF4ASJ2wPEOQFkV7LBbEh2gRMAJzA+QcimJatwg9IbZFVg0VG/HDsxgwm86L15npGlL80fSUwFEj5E5YMFBWLoWIQqUHmqF6aZIZpDF7e++MMiX3YV3fvo1PyjQQJgaERCM2znyVmozEyn2B6n5h0XeA3wehrdkEVmTP3VR+qFR/4jbZHuNGoaS23Y9gDa2QC8uo/bZG2AbR0Gc9pDrn5FHj63LDT+UfUvngHxI4DyBtGO9gXLg8L3wb6j88vP/jgD/A1++pdVv+cY1/Bpw6GCYGXsJ1gjlzfYheC2sSzRJ6PZqXIDTCnAdbBqKZiKBhjAp523XS2pB+7pAyrDAPmEmCdOxAB8hrRdwjT7p0PdfxRkjuvWDJA9YyV2HM5ot6xlideYYR2+x3UqQHfLo0Y7BDerOKo5lmcKjYW21l8mWuRFesMp8poxJ93xeoZPL74WAImgNdVZxE2/swtQH8HJ7AS6P4Yt3bHhMx0I2U/U2eRVUGs3eliUd6axWaxoqDVU+mubeQM4hPicZ1dTXtN9vfX1e5i3vZ7GjdRnmHRK9ycmjKEBeHhz64H3CwVMXhldMhabcHKbNvzeYOojYvsZBewYJD1pLXXcVsyL8l1aUgOZNYVk1Kp+e6aLC6IG9NIFEwzZGA+X1aWHgIc6M/WQTZi8P9P26wRGGKUgnqRdoTXLwqhRuVsc0LBoAP8HIQz5W1LQdRoAAAAASUVORK5CYII=",
    Gc = "/assets/png/rule_bg-50b5b9c0.png",
    Dc = "/assets/png/rule_dice_1-0f7cd7df.png",
    Lc = "/assets/png/rule_dice_2-aeca7e3d.png",
    Mc = "/assets/png/rule_dice_3-5d32ae31.png",
    kc = "/assets/png/rule_dice_4-34353cc2.png",
    Tc = "/assets/png/rule_dice_5-58830c67.png",
    Qc = "/assets/png/rule_dice_6-fc323f22.png",
    Vc = "/assets/png/rule_tip-5d3f81b0.png",
    Oc = "/assets/png/top_1-4e868024.png",
    Fc = "/assets/png/top_2-7d8a7364.png",
    Nc = "/assets/png/top_3-d324faac.png",
    Pc = "/assets/png/trend1-e90c2f20.png",
    Wc = "/assets/png/trend2-db817e06.png",
    Yc = "/assets/png/trend3-2a1b1d6f.png",
    xc = "/assets/png/trend_go-7405456e.png",
    Hc = "/assets/png/icon-5d-dadd282e.png",
    Kc = "/assets/png/icon-k3-dabf0a83.png",
    Xc = "/assets/png/icon-wg-b65da4c5.png",
    Jc = "/assets/png/cover-d3a3fd7e.png",
    zc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAgCAMAAACB1hBXAAAAUVBMVEUAAAC+w+i9wui6wuu9w+m7w+e9w+m+wum+w+i9w+m9xOm8x+e/v+e9w+m9w+q6v+a7xeW8w+i8xOu/z9+9wuq9wui9wum+wuu9wumvv9+9w+iFriYwAAAAGnRSTlMAv98ff0DvX9+vnyAQz28wMG9PEI+Pnz/vEAdc1VAAAAGASURBVDjLnVVbgoMgDATkIYqK2nbbvf9BF3k44AofnR9LzBAykyJp4PFbxU+LR+s80+LVabJFE3UeDRmc3qFH2lMpNev3GRjQSBVv/iEBHU+xNQRknjex8kielZgsl9PkeYzM+fLlM3YrxJ4Rl/8CdMTIrLhncR8ZRp8LOUMBnHzIdyFkTAJJ61YvyPm4HAv1OWgHemf34p76KifrSp06Xx0YnB/uJb/KqUIg6a2PcjfWbBc5n261WeSiWeBGTua7OcgUNqE7gHhsZTfyUBiBuEOXMDlzUjcQT7mnIMlC8DoSYSCnzkToY5f67IOVPOULeEywQHCH9ex5Pc3VgwOJ7W6BBwsC4A1NE4k+IKeNFgBoWoD4Porv/UVO9rneSWmwHJZNqQVS5HJ2/keCOB2cDAF2N9OlnLz8N1HMXi9w38QRgJw0WAAYk22i7E5GO1NMZ1SOxbEH1sZdBjlVnCyAzg2eiVOtx3G0snw3VTiQs7Uzu4OGUTXalx8P2uLJ73h//xxkqPvek7YAAAAASUVORK5CYII=",
    jc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAgCAMAAACB1hBXAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA378fEH/vQJ8wb1+vz49PP1A7cUlJAAABbUlEQVQ4y51VR4LDMAg06s3xZv//2Chqg4t0CBfbiAFmIMq2sNf/1P5WODHHqRVuDjMrmJ3jRI3Q4skIYa8YY0hmOByITM3oTkbq7gvVYXjcTueWuASSuJyKx9EW+KerEd5axYD+LoDclGHFC0oXj5MlFnLWAujcsSyokcN9OxS3vXDn+rrAwCH36vMzXeUk2XVCOcfZxhjzob7KGauj6N3yyofRHBc5X/nr7RELsrAHOamw+YIFxkQPuNrV+8SmiBzgaBlkt70MB2wq25ifNrdugBtvlRTkTEwEaizT4EEMVxIPOXeMwOpsYXAOY7jJZdtamqPiMIJqmI3oLYAH5PRtBDCQtgCa8GVHFzlJ3e4kuP0Ro4cUXE7ZX2qZMcGd51NlB7ic+vxrEtg9srhvGlPI2fjDlGJJoleb9EFgO5tyJK97GBZ3GeSMfbNQIyxwqm11klJ6cz7bJxjIucpMT5YwqBnsxz8PscKZ33AfTgpF/znAIcUAAAAASUVORK5CYII=",
    Zc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAASCAMAAACXWfv9AAAARVBMVEUAAAC+wui+w+i9w+m8w+e9xOm9w+m+w+i9wue8w+i9xOq4w+O+w+m9w+m9w+i9w+m8wum9wuq9xOi+xee7xey9xOq9w+jRXmodAAAAFnRSTlMA379/IJ8/32C/XxDvr3DPT4+PME+POkp2/QAAAXNJREFUOMt1VNm2gyAMFAhLVdx66/9/6kUsWYidlxbmZGMmDjfgMKdGKEwqv6bCWvsZGlZ+7crF2z4hjy1gmc8HvC4qqpsLx8nxV278+YwINcApAocIqqgOMKwVDX+xqZ3WMPTwKlnBIpNc77RhRlfhZ94WxJZgUhWgErMsAd2zAmvFtMgdS/Cpt0HhU8N2KoEtEXK5m9phaZGWPRRELKdRud3xElO9O6IQO+FEOH7DyFglROMg8RK5tpOkPpba7OUCssI6aNh7Ul7C3apZITZgyzQ+vVMgVuF9T8ece3dnAKTYqRc7cOfvktWOfV2lGuq/GQYvV2XFlimS0lrJaseOXLv4dV7kahIfMJLTM/pCIaGJ+k3bhNj0EhTJV40CFSIavd/lLD8P8bfYYkWyc4f/ItRWyOhGLlondpBLMYXMaOIlAnMsykmTJym21wnkWItRzEqSgfwamHIWYtNRw+AyT5vrEMix0oMzDU76bs/5fSvwDyNnV2J4iHU7AAAAAElFTkSuQmCC",
    qc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAASCAMAAACXWfv9AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA379/IJ9fj0A/TxDvr3DPgDCHnPmpAAABaElEQVQ4y3VU6xqDIAgNw0um1Xr/h53TFJB2/mxyPq4HWhrQw62xFcaVX6gwxvil4+Tmqxg+5g3ZdYcj3S8wPwqk5YG/OWKx2PsdgNXhUsRoIqik2gFYKRr2x7r+OrdFQBUHT9MyyFpMcURcK2ziZSH0ALvKgJVIMgVOY0VWCqhRGt51XBR8dfMiBU4zycW298fRPQ0bFAKlU6icX3mKvdlAiO2oI2q/wTFWCdE5dDxFruU4qY+hMme5kFbhXDRM65SnuJpqRoiNVPIDYHMKxCp8Wndsc1t1gCjFdrPYgW++l6zeWNNSNdR/CRtDozlHyeRJYY1k9cY6rh08+gJXk/iNPBmd/m+sG0s0X1oUYtMkyJOfGjkqwFj0+Zaz/DzAf7HFieR19fZBYBs7XOjQJrGDPIo9ZEYTL7GxjR1yUudOim11ANnWAYo5STKUXwOYmnL01IBxzHtcJwS+sbzORI2TvvE9vu0JvhbaR4vuF41+AAAAAElFTkSuQmCC",
    $c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAbCAMAAADs3OkRAAAAS1BMVEUAAAC+w+i+w+m9w+m8xOi9xOm9w+m+w+i9w+m+w+m2v9+9w+m8w+i8w+m9w+m6wue/z9+9w+e8w+m/v+++w+m6wue+xei/weq9w+il0QREAAAAGHRSTlMA3+9/IJ8/v49fEM+/UK8wEIBvEG9gMF99Y52YAAACGklEQVQ4y4VUWXbDIAw0OxjjrU7q+5+0SMKoQPo6PyEjMRJjwVSx20splfTUQYdMX3afBlgj7ls6rzvayZvgwi96Px76NrbbIe4a0kxrd/+CqJGLhHgHwzc7tlpA3i0Oasl1tEid0uLVis3JohWI/tagemLIgFLEJGXn3PZrxaTwtAt//IzrJKAKrjXQkZ1Q+a/Kv7hZzdUErLHRWqJswVcsxScBi3libAKUjtI3w9TqhqpVLZCYacvaff+nia3l3aOQY6L5mjlwEq2ZbY/Z4kvmRnP1NxjVRCS0E/jUDC486gdqwjJLvgo89tAUF+7aIn/DIGVAKru/TCMSZ3duCQqmwcVJQp3PVs09idUljE/vowApZgepv2nZGRlulPq/q+7mlejF7A5NSWjNTSMCTtX78sZFIYRzPmzkSQT7m2nf87GBX3FUEOPQhfY2Gy3LOJ946TWlRowuQH6cq0w7qN6iJmMjclXKu8J7zBbcVmNkAm+kiEsULGX794p59WkY3xKrar09VbZkSE+UM7xYfgH6sfDoBhSV+st5dK/pa5WQ4615ugnD82zw7ALyLH9xz/6zuTPYzkUVhr2mHYF8VOWtM5bkD4lsKqc0WymQKD3xPAKkc9XfE7aXP9G5slLYcs0ufHNhSi32ceOTMoTt2UeVD0zfg4XYILtyvprZTM7mAMOqdVkW41Mb0C8P9Gm77HON8KZG8/3k/wD+WkRi4MKtYwAAAABJRU5ErkJggg==",
    er = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAbCAMAAADs3OkRAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA33+/7xAgn18/jzDPUK9vcI1VLIcAAAH+SURBVDjLlVRJgsQgCAy44ZZM/v/ZCaih1Z7DcDIFFmVJPN5w8ULE6o8lPD3wFd2xRQxw39Ykv8DG3i0MfcAOB3yHuOyA+019kHlzfwS8mZ9GpDs00rQjvw3sPQc2SWaBoS5MJuEp4mznogaTZ9ZLUoGZihQh2+TplCIacvkjNf8qcBdZe4aLOoFdlmxG95ogPXJbW6XtPQOvgBefF5QBmbHr1gjSfaxQE44pXNtyLvc/ROQZN8zQu8N0m0/iarBXdD7mHM4+Qt0jm42aMpblkJ5aQxvv/NREREWbryDH3kRp40VW85c2qsBUj/vm2KNq9eIWtGTdXDws9/lulVtB6W55fFYfgakU3aj+hu1iJN1C9S9VSagk+7PMlT3gu1ckU5WvFEwBAGMS5eZJ4b3ztD/HZvyUUZHYh47mvzl4mZ/xD6JvpUWy5rj+mCtOcvclRrEIsSdiMh1PUg27LNFT2RsLxRRQqri+V4rjt2HMVrp6n91Aamh8QL2Z0huGh4W4DKjV91QDl9eUTi6DFMNQQ9vzLEYk4LqoN57Uf1K02w5eu0HyLUfNR+xvXYiNHq2gFfpl5k5VW3mdlVuj/l68vX8UY/oKRfJb3fHJoNZLw2Q9qQbEFR2sNF0+fBCpQfHUenRqplZrQiPi+SgOqc4JT4nhKy7V11n4TS2BRv0vrrsx1IRY1SMAAAAASUVORK5CYII=",
    tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAmCAMAAABd010YAAAASFBMVEUAAAC+wui9w+m9w+m9xOm7x+q6xeO8w+i8w+m9w+m+w+i9w+m9w+m9w+m8xOm6wue8w+m3v+e9w+e9wum/w+q8wuW8wum9w+hxYzczAAAAF3RSTlMA338/nx8Qv1/vv4/Pr58wbyCAn29QUN5adKgAAAJ0SURBVEjHrZbddqsgEEZnGEQQiD8x4f3f9MAAotGzVm2zL1rThJ2Z4UMLP0OO8EWWgN3XZMqH8D2fNoGxXxCqFVNpo0g/5V+EqnutA1fmFQBhunJ2pfG+1Do0odATMCLsuKcc6jJjCSqzxV/qfFqCj4lq353iC5qs71Ph93IodwvU4h56klIKgq1tuqtrjfuU46fWwg9+XelvOgrCueCJxtw1v3tndscFOmzU3A2/0I1bdcFh3ef8x/hS3ZDxdPR2/PUuN0mj4gXc1dm8rbFOsqHiS73mjowHNtQEMk7gNr53CP1/A7sSnHnXArrS5NQB14hGpgsPZxRZxScRzwTei8W6rNNlZEHmjR1ERBYGJi555jevmQBYxqcNItw0/74G5zz2a4a80BNA6xt5Jy7pS3hm/Xj0jH9kepNDkXsuLKU6y8PERF+ISyaqOfWvUyhnkQemMfhyAKaaFIwyzedtx/iyFjLP8AGUefN25bO6YN0TKhXL8+QK9kL33vVJgwkZy5onnHVm3KUWTzrFqeDCqos9He/5SdfP0OiAxA6osSCgfY5ssWguXzS06g5nCr3IzC8pJSSQ870vgPj0VZ2WcgIrGY/HU+fqGhL1uWKaqMWvY78tzfaw3bnm43kbPnV03DbXP9X2tabp2j4c0e6gUxgdvnSpVYsUpnaXqusx4oSCT+rzNOsoybXirxCHf32IK5Jd1jFqoZNOtGbbPrJvqunD/IJy+ybpBowYhBMKP3RO1ZkOFC84MUbvHkZtdi84M7uDzqp91XmZm8tHca8zE1yiU+5SnuP9oQ2XtjAI2KD4GSE0TCnCcA+d7lcoFHyN7oeuf3bQT+Hj7bKUAAAAAElFTkSuQmCC",
    sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAmCAMAAABd010YAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA359/vx8/EF/vj8+vbzCAUNVcOQEAAAJaSURBVEjHrZbZdoMwDEQlL/IO+P9/tlheCek5pcl9aEmMJyNpHAJ/Q2zwRfaMGr6FiTl/T8+6zPgvCJqExdomy1+hP1HSR1LsLBoAwnIVfKLtuagP6HJDETAyLzyTVH2b8wQd7fGfcjFzrxL1urXhC0o+qmL8WQ7FssHsQdgkhJAEo2x6KjcLjyXHwloZVUyJPpOjLEPIkWirVfPqs96tG2we9Nypf8htw10O2Odc38ScDTxB5mzH8bdLboqMOS/gqZyvYz19ks+d2Pw6eAA3TPUEMkHiaN8xFu/ERHDn6AZ0KzJpYI/oRLmIcMeQN3wS8U7mWew+ZMa2lmVRB6vkiWgoBvviLySAJoYiwQkXzf/fg7q2/T2qbowEMOtGAPrtftPus91w7PZdDUWtubE3d56biQXVOLeMEVA8bqHUsjbMYo4amNSTgqeY5fO2sB3ezyNwBVq/eVz1rO7YZ0LNsbh3ruHfyB1LnVSKZzzLiNXEPH8Dizc5w6lgY24siDqQdJdTem0VkFyAHgsCWnPkm4pl+3JiDatNd7Et6EMIwe8h53s1QHz6upwVIoEXTEQFK6HvIdmfK24KzfhpbC7ZpoLxzaVhxahXObqOLShhxse6KTfncMWGi5zBUyO2Kq2ZkcJS7t7lFJ4EaeCV/jytclTEreGPkJefPsSOhGa5/qijm5ycxc45sl7q6cP6gmr5brhzCDcMvsgFwz1tIzWcGGeXh9Hs3QF3dLjIebO6rtuCbrfiKucSvMWW3BF/L6bZXBphkDCg8x4pLaQSYXiGLUcWpYGvof+o9QMe4zxKWCN4BAAAAABJRU5ErkJggg==",
    nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAVFBMVEUAAAC9w+m+w+m9wui7xOi9w+m9w+m9wum+w+i+w+i9w+m9w+m7xea9w+e7w+e8w+i9xOm8wue9w+q6v+m/v+Wvv9+9w+i+wuu/z9+7wea/xeq9w+jRa7waAAAAG3RSTlMAX+/fIH/P77/fr48wgEC/n1BvMBAQbz8QcDAt+CwGAAABsUlEQVQ4y3WU16KsIAxFQ0IT7E47d///f15HUbDMeotu0gihA+0YhAG2YazpB59GADjpOusAVErfqRqG67ZfkwqzsLmItIUzz8MXI6hODhUjPi9He/BwUMEpuuGPUXwf4Ca6pS50mrPqquMtvwov+omCTZ1Av/YD4k170UWYJWQl+ntKsFCda3kwPxavZs1QcC80i6BCyrHFRnNyJ3MpCJvNP3QeLY25MRY7f8diXxQw5VOZco40AlnezR4ZSwUsxLboEO7DChO6fDGCDD/KGlZZblHGHGQsuSKPe3dz/sLZwoGYS7AUoDcLJ/SWM0LR3hYnfNHedrd6nEgO1huQlOs/XOB6vQRJc/JlUGbrm4vGhF3XQOWxm0mz6V77OwWGbWzJIM75R2H70vRW02z0In528X5r+liYrV+NB2wnqGJNn9bDLYaq9RAZsj/AtBjU2uBkSEpU57njIS5xtDLj+9lG74OiIfY9MJTzCUhn12W1BnVfQzEUFQyMXpPuAOYi6GW1aEHVaJrG3qhn2oqAvW5CI0BQdTql/Ncr3aCXMGy9FwYgc+gfTGOwDnASxjeV/AdJSyzzJ6HgFAAAAABJRU5ErkJggg==",
    ar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA799/IL9fzzAQYD+vj2+fUHBPTGt6mgAAAaFJREFUOMt1lFmigyAMRUkggDLZd/e/10cVBIfenzZyzGSIuijkyASQi9mrH1o0oyIs4ioKtuaN0gSSfuTXWEH9gIwD6eXyRDP45nAlpA4NsIC2CwWy6kUfwvR8A/0ozE+coUE9Oer5MbL6qRWudQLl6AdYdHhwCXoPyXvZK2MX23vXiZbveaUPHO+g3gFGyzGgS9/ccS0Fsdv0gxMElUdjHE59rsVmFeHHW0NzI00N6Og0y4S52R2xIjd1CO9hmRTktDxPGC1zDR3rLRrSF4x4VCR4d+eoxh0WLkqjBKciTLdwUz/wiFN7wx2Tqb3htModaw6OL8AtV/+g2ugbcJ+Tqs1q7sdJ63hyGnaMXVWbTcrnPQW2PraVTjX/xOQ+RgXrq1GYxdbfYNTieqPrHwGcMDh5tQQB7Yb1ZksEPi9gWwzr3uBucEvUTJd+S3scs+oclpBEolV/qRRgm+cTYHHHsjqC0tdYCZf7sxGKUUYAoinoY7UYBmujfC7aLm0rAs481yAD0fr21ipfr+pF5gjjRJgAcA39Qz5HRxXlmK/L5B9pWSARPhFi0QAAAABJRU5ErkJggg==",
    Ar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAASFBMVEUAAAC8xOm9w+m9wui9xOm8w+i9w+m9w+m9wue2v+O9xOu8xOq+wuu7xea/z9++xOm+w+i8w+i7w+e9w+i9w+m6wue/xOq9w+iwr4yoAAAAF3RSTlMAH3/fn2/vj2AQT18/MBDPv79Ar69gX3gc0O0AAAEXSURBVDjLxZSLioQwDEWTNn2OVdfZ3fz/n26NikofC8PAHCgWetpcUyhcQTtDF8UM4Cg0hYU1RGYDTUIAz6w6NUxfyIsxD9ML+QjTF3YFmYxjXTDMEdSEoPkXChJCIAewZqgF9azlK4vODtUuotVBBIzVgBJSBM2mKxQZUKVDcOoQxuUUHOtdEAhXYbqcQpugJj6QHLQd73EXblCyWRg9ZnHOgk3fXEAw552cB3EVyru5JzxHK4JNT24DLLxDcLii8yxiZiiErW2rMEAGXxUcEaWeIHxYiN57/O83Hy8KZ6sNZpY33qblLhoM97AGAImb7I9N1I3jBzgwFcUqOKnUKd5b1LfiA5T86Ev2KuhYcAFaoCEy9+U/quhEWEdtTVkAAAAASUVORK5CYII=",
    or = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAMAAABHcohdAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH3/fn18Q749vP78wz0+vcFCA/MvzAAABDUlEQVQ4y8WUiaqDQAxFE5PZ3Kr3/z/2jamCMsuDUugBUcghuWZg6A6HiboMAFFU3xRGCO1AoibekwOGzoytL+Timp/UC+n8MnFXuLJUSXkEDQuTZLFgZvIaiY4MtaAOYm8rxjBWt8hBvAm8VwNaSBMEqSsUGXiYLyEOl+BvMSLkFAzlQ1huXfQtDAsuLIdakR2fwgOdQxa84yxOWQjzCwVKE4QAyUIVJQF6wssHE6x9E4LxDSHygeSvlTNjIbzXdgi2Yv5UiKo69wTjx8LunOP/ftN9IDxXnWzVXzzNgC5CG3qERMSKJudls0qj/UgXW0UJj+WXc4r7luUxfKQSJ7fsVTjCiJ5acFJNz/IfsCE2GjEqo6YAAAAASUVORK5CYII=",
    ir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAARVBMVEUAAAC9w+m+w+i9w+m9xOm+w+m8wOS3v+e9w+m9w+m/x+e8wua7w+a8w+i/v+e9wue/xOq8wue8xOq+w+i9xee9w+i9w+h8U0LfAAAAFnRSTlMA799/n88QIK9vIFAwQCBgX6Bfv2CQLBQH9QAAATBJREFUOMuN0u16wiAMhuEkDApSVqfbe/6HOuSKSFrb+vzy475KCpCppCgMsI9ppp2CEwzJ9fJOOcYqcRt08ZYoXD3wl/E2zkZht+tLZeADd+Ejxs/5BId53Qmc5NqScsY4VLYArMPJ65/N4wQS6I7a3F85hmlcQ4hm4Evna49u3YiMK5QMq18fSahuWDhRtEzf21c3v1wkb5i69huVYTge2ffjZH66W56MCYYhd+fapNqa8UwUfHdO2WrRdtJbxySG6Y3VTeuTeoqWWVfURUqW9c1FrU+aqIxsRt9c7ncyAlUL+JqljZzvz10vf/pJSmbI+a3Um0CBz5RMH17ylj9W0pC9Wdt4Im05YlnRsbvRUOadFY3SQ9zkJ1rnNpAdvWlaDBQXaKc5Rc8AS0yFxv4BnGVOOAqn46QAAAAASUVORK5CYII=",
    lr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA799/IJ9fzxCvUDBvQL9wkKangiMAAAEeSURBVDjLjdRZcsQgDARQSTDsTNL3v2wcjwZb3vuLMq+MUAFk0lsWBjjmVukkyQlWkeCPlGNsIm6HfLREobcqMA7DxSicJiyqAA+c5yvGXpngMlE7gZu4eUm5Y5w+u2QtTpaZ3e8EkuiNKXVsOSezhhBV4KX1LQ0Mm1o6NcPoB/+RZNvUKFum+46Tq4vLFA1TN3+jviqO18wHInoNF6BhgmEow7m5Us2WcSVKcTj3ZWwZ2B84JtkwiB9NG5VGypZZ19VlaoZpc3U0Km3U16xiNJfHmczApAUciswll/e36/1XR9ILQ5Y9312HxHdK/MNDPideK3l6ATXhipWnj8OScvbUGHV2W6OnbdwOsqOD+GCguEQnqS1HBlhy62biD2y/PJY9g+eoAAAAAElFTkSuQmCC",
    gr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAhCAMAAAC/dEhCAAAATlBMVEUAAAC+wui6xei9w+i9w+m9wuO9xOm9w+m+w+m9w+m9wui8w+m9w+m8xOq8w+m9wuq9w+e+xOm6wue/xeS9w+i6v+S9wum/xOq/xeq9w+i+7/7bAAAAGXRSTlMA3yC/PxCff++vj29fT8+P789gMJAw718wn/FKfgAAAUdJREFUOMuVk+uSgyAMRiFcXcRbd7f1/V+0NSApmVqG8wvJfCRHVLwBfs9EJRlYOvEWBCOcNaH3Bo5nbdpXQgy9WSNx++e18q2sZllddrfU/2DaE5NKpPOHj1GDKypDEgkiMx9PC4s6bFXKodofiheexKIKVcvqrxR81edTV4+q58GSCnMWQQDNv6syE8jzrmU2ItSqI4sOFkn3Bleqa1algRmuoUqsjSSpRqYKraakapmq5dHF1NGhVoW6qdSJdEy8UAWmil/tXL3tUCVvRXU8FrYUfvGkMkRE2bYqJus2oYoyVfmmqtEb9xMgsytXjafqAsaADviV4PSAaOdx/EvVJiPlzsCUJm9B43PVzqQo9rdGUEaWdEV1k1+YrBaMR36RXcAdhBnp/+3AVr9SDyMlp85xPSVNX1TRZRnRB2zq/3VVyhnRyRMIREdkxrRJewAAAABJRU5ErkJggg==",
    cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAhCAMAAAC/dEhCAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3yC/PxDvj59/z69vYE8wX20mmw8AAAE6SURBVDjLlZPbssMgCEUBL1GT2Ob/f/b0QJXiNHVcT45mC0sNfEDxelMdDvBSIyaCgaOtgb8m5DGbZN4B7KvZgDy9vUZxlvVg8X32lPr/lEsoTpD996/RwCNdJhE54M3GZwWWLKpt+TDze/eSs7Q4Vu2jBzSiqfOtamTVtjHqwiYiArH5RNWakIxDkd4Mh1V9DtE9MXJvdKdaWNU0bMkTVaVMkqpaB1WaFVXVNKimMRqDje5WlWxR9IJsU29UaVBFcxu5PTTlIart7Sd7vNibqCw7VZWkLXPYqFXFD1VfLvt4CNXVqNamGikE8ge/Eu6eGJ/5M7xVnWAurgWKdD5jgzvVxSR0+8ckiBUsWVXxByV5E+ulEixBT4Jw6v+7QDK/0gqnJstiu1GTYS3q9LICrEGne9VFlwMs8gcKHzIgfqsRmwAAAABJRU5ErkJggg==",
    rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAARVBMVEUAAAC+w+i7w+e+w+m9w+m9w+m9w+q9w+m9w+e8wue9v+e+w+i8w+m8w+m8w+i9wum+w+m9w+m9wuq8wuW9xOm/z9+9w+iMjUwFAAAAFnRSTlMA3yDvX39vr4AwEL8/z7+fz49QUJ8QnvXJWwAAAW5JREFUOMt1k4uWgyAMRCdEwedu1S3//6krhhjwMef01KY3wwQBlSYfiGPkT/A9XvTtKBaixj1RHceLqLtB7hMfRBfDRqyWiWqOt4qS4i/gr4aNUVsuOWl44Ryr2RPGmo/MzDDTR6guqplgN7XHkmb2gvEgf6hZjdH6MbsqWbUhPVZtAPrKDK2ZAU6fJ/hi7G+JLQD02SPY8ttYYq4IFCAx6RiZCuwHu8IZgM/WLs4F1pQDMc4l3eHQ2gCDx6RNBzanzkUwM1vjMLBinA+fI8OkFHZ21EUpx+gkttfBU4igP+e9Z5E3K1hzmv2lyWTVxBPETDKumsyl7zG3efROT6a9O0IyS+qwyOsVSTEOGPIuOt1/N0obIMXcNeq5UXGe0YoJmOKvRL3dViuOAPr0uR1yu38yUt4dkyVjC5JiTHy/gNd7QmGMlTbAuFc1KLTyM8RGWeqbZoer2hvILR7kmgqkdsCLeh9m3m0o+Aml/gENF0cLS9z7DAAAAABJRU5ErkJggg==",
    dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA3yB/71+/r2/PUDAQn49AcD9DEO1pAAABZklEQVQ4y3WTC7LDIAhFUTFGY5PW/S/2PQoUP8md6UxqDnBBAoOuPTlsDXPaD3hQDa51ctHfUQHbJBcWyOd2IzcljJzq/LiRwzJQfPgC2NukaFSRI08Bj5xHTXaHofpzlswwU5ZJNE3G2KLwLWnJHjCs/EKSTZgrWdNNzoaBHFA0AOCwZGLU3nl9vmDv2q49dgKAPu+QrHzZesx3hhJkqUAtuw7byEL6GUAJJSJ3WOwbQtCS5JeLavr6hkuD4Hcd54BFWohaUTGU5fPOMD5K/+ymRZ3YCGxb3ISviaR/M6R28s0yFn/JXtQZVyXe2fQzGRJnnqcSZbyH1820u6PIlxQ/+XpJetgqVJmi1/n7jcJIfChRm+6NCqVHOyTg+u5KWL/W6SIP+q1Lzt2J3iDTMZkzNCNk48L1A5y/E5e2NqgAGPeoCJ0K3kNolLlelD3MCguIAW7k4ziHUOFBx54ytoYu7R/o9Qfrfzp16w8gGwAAAABJRU5ErkJggg==",
    pr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAaCAMAAADc189rAAAAP1BMVEUAAAC8w+q+wum9w+i9w+m+wuu9wui9xOm9w+m9w+m9xOm8xOm6wuW9xOi8w+m9wuq/v+e/z9++w+ivv9+9w+jyhRd+AAAAFHRSTlMAH1+/fz/fn++vz59Qj28wEBDfEN6CvIoAAADPSURBVDjLxdJhE0MwDIDhpBptx4zN//+ty/Rk0hZzdtv7xdE+jgAAdixWwSK1YkA6g5277OHWOb3iOJJ7lqzZfrRAM65U06NY0LgubZgWQGVG7oqIwPHhmk7JbOMYsn0df4aRKMVED7WBQ8FpKYZCh/HNLDuI9Sc/j/Np/xMHHki/PjAv2FtVkH9bYVUtOC3HRKgs+TXsa64THOsGkQOSvHOWg3dYuOr47GvYkKRfr+fzuPlezfl4MyL5lzayaxP9BLdNk9HQtHtYUlDAKfwErjc5y4X/XX4AAAAASUVORK5CYII=",
    _r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAaCAMAAADc189rAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAH1+/fz+f3+8Qr89Qj28wspSeVQAAAMpJREFUOMvF1GEPQzAQxvG7zp3WsH7/T7sL2c3TlEbI9n8j1E84goi6XO1Bm2AlkHcFqz5beFTFFbUErlnacHxrg3zwA1pupSPEfe2EZYGgkK2JmcmyzVROKTTwEpvN1s8wi5RYJMEJFjsuKzFVOo1fYdtJjK/8HozD/CcebCBpf2DRceygwb9twFDvuBZiEQYrcQ/H3podr83JZWLJeQ8rfePKUc35PhzEw8dLtq8Z/wZxvZiIf0sHdXsTbWL/AWKDji3sAXRwCb8BYFQu3VVRhIkAAAAASUVORK5CYII=",
    ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAUVBMVEUAAAC9w+m9xOm9wui+w+m9w+m7w+i7w+e+w+i9xOm9w+m9w+m8wue+w+i9w+m7wuW9w+e/v++5v9+8wea+wuu7xey/z9+9xem9xee+xey9w+hY4IEBAAAAGnRSTlMAf5/f718gQL9vj89Q368w7xAQcD9PEH9gT0Z0z+0AAAIkSURBVDjLdZPbduowDEQl2fI9l0OAnur/P7SWbMgC2v1CEo9H41kGXoiZnBfxdc0b/MEdXc3yZOHwmwq9OFOdwuNDFKqIa/LG8mb43/ePcRFPnSqGftrbi0o6mMRdbLypXLQfPlXNPrPIBvcYI9l6g/SqC17GSAGoMiGAYbc/8i32WT0u0IicrfbFaVfByOZgWwsoxcw6QQy0Z9TI6RijYgzwz/eUsfQ2yhirB2NuGnSRya4Bd2+OumHaUcTUZaMERGQA7/Da2/ER8JFu47ZnScM+jbDCekrG9LDbIAeW7HEeqrfWqLs6L65r9FfJgNBkwZsY3q5RLqNewLPEov7Y5qu9gAZdoeOmrELRdtzMQFpPgDzrhfh0QwDNdMxXo46neIE0CwBU65SOVUZTWDbNFCJ6wWlHBXoG6jJpbgwd2fY067fd1wKuQVbZ3py5Xbe+z6ecZlbfZ0IB2kOQSqK6mS1avYYFYCC1guSsKVwX6iS9VYsYC629mpB1WzkExXQon/gAvFmF8bG+RPch4551/EFS3GRC+CZEgNCVdgnwOMdRXl9VgAGmHTOfLilnqiNXBtADGCsJb1LoFPaGcuZvjiFyTjAIXxtdkiyowhOXizrbSIMRLlFvGp2Wfd1XxOIbPGE9z7UkL8ta+hrlcGdG8tbHSfuCUBO271u89fX1cbs9wwshhfBZbQ3wzlH4TecRfiFwqXLi8AJ/sOW16okd5evLwg/SkEeNUPuhXAAAAABJRU5ErkJggg==",
    mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAf9+f718gQL9vj1DPEK8wcD+3UrnfAAACEUlEQVQ4y3VUCZKDMAzzmZuj/v9jN3FCGdqtZjqArciKGoAHYmYSM2l7PuAHNqSW7Q3S8B8LxchZN/H8IoXWy9U+QB+CKr0YyYQ72uTI+NUHa5QxGW0+fipFv+jNql7u3AO2GCN7v0J68oLYHGkAzRYYYMrJ5Y+8PDQ2qMz+aL255Bo4TlfwpQUGiot1BHOg3+OwnM45KsYAm3SXsfQ0yhw7NqZah1GyBRkGRVxxk7ccR0ydNkNARAUQwldPRyLg5e7QKtnSlE/TrOnYpWK65A7IQS0Lrk311Cp3VRKjzhnXgQwItc+qy5cfo1xmvIB3iGXoXzT2B//v9pXoMldGOrQ88IgnQF7xQnyrIcDwdK5HR5t3cYO0AgAc0imd+6RtWI7hKUQUwyXHBboH7jSrNIdOb5JW/L76VYAq5EGTSq72OgBYUk7Lq/SZUHopBGtsg7e8RY/X4QYUeEhBIk8Kd+KOrsO8oiDeezQhj2XltBkkon1DAujhEcarT5G+aArA8wVJ8bAFxg8iAoTO9EOA5z2O8/5kAQZYcqp6q6Sc17sqGWBswLGz6WGFb2JPKGetGkPUnGAi4MFbMkJ++KJchrKPdCjCFsdJ40vS+9IQi38ebh6EV0litJfe4xw2VWTxPG5UhNAS1lpj7f39Ot2i8EBIIXxH2wJ84iz6wROEfxC0NLtBuMEPHHlvY8fE+fVo/AGoGjQH44Dr4AAAAABJRU5ErkJggg==",
    vr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAUVBMVEUAAAC9w+q9w+m9xOm+w+i+w+m5xOi+w+i+wum8xOm8w+i9w+e9w+m9wui+v+e/z9+8w+q9w+q9w+m8wue9wum8xey6w+i/w+q+wue7wea9w+hajeJWAAAAGnRSTlMAP3+fv+8g31+fv4CvjxAQb4/PUJ9PMG+gcF/gdD4AAAF2SURBVDjLfZTresIgDECTIgRbWntxuvH+D7pcOlE+2PlRIZyGEPwKH+Azkc/Z7+mJ0OE2sVGgKXSkmmmpLaQs+DRHZkjeMlZbTxod36J4t4Tv1hKF6tWwf3jBtYkwvHuUO1A4pMTjLKuLf6A89bzXF/Jq0tFwEuGHY04bFkK4gXDhEJapjizIM8e/oWhS9qDTqKPAz5l7wVvdoatxVKs7ZK2prTaSU3zBxjK0NCRdB/C8q6yNteaJyGvnJJxy3oHYrbSCpt1El0mtFaazRtFirdEoqId24mY2CwSylkmk1FZrtpuz2uQcl46GqlkvNmnyf9oiW1uT25pTIUpUm3ypNIfMkTITJEpgB8Fe3wbd7Q72F6GloVk7SFOe6baWtnPf51epC9mtmBbwD8kx6f0bD6+eaVAwy7NuxMy4UGu371xuvHiVFv1pFZAqLUwq+fqDkU5tdsPgks/KGKAmDqrJ44QQWnxofkRok0RbR+a64gJdHmsvxS8pATu8WblGggAAAABJRU5ErkJggg==",
    hr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAf5+/P+8g318QQI+vb0/PMHqx564AAAFkSURBVDjLfZRZloQgDEUZTBhELfa/2eYFqjmmoe+HB+M1CZEq8yJfJVCt9JQrmw3JNmMSLG8kjU3aykEeUDljwxbqGVVpK1F/zMjhesJXxQhEmvDz8titiagxvVA3BL7R4j3a2kKfjGuCNqvg1SIrO4jmajEn7TNzn49voWPeykqCGAs2zlOzv11HWXG7nu0dQtathii6u/FsqV19lWWzZ5PNSsthDINaVTzzWqPQkMkhXGp9MNxTaRNJe0LHjdKUhx6hRa0FD8TLfcerbCPA1EeGiPS21saHkt6wD7/RsmgyC7iU/tMSSvchrzUnQkRUhuyV5nLjLtgpIxrGsczbuY3K/YiEtNQwgyApR7pzpT0R0/i2mgKWX42PLzxSBNP5ELyh/fmVE3QhooRjrSVX5xefntIiKQtHVWlsRSL9h1GGdjprXaEqeDaaaEXDZRAOs+KlkYe0okC7fMNdRzJbPtcuxQ/IaCiWA+pfSQAAAABJRU5ErkJggg==",
    wr = "/assets/svg/datePickerBg-f47e6011.svg",
    br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAXVBMVEX/cHMAAAD/cXP/bnD/cXP/bnL/cHH/cXP/b3L/b3T/cHD/cXL/cHL/cXP/cXP/cXL/cHL/cnP/cXL/cHL/cXL/cnT/cHD/bnD/cXL/cXP/cnT/c3P/cXP/cXP/cXLL0lArAAAAHnRSTlNmAFkMUybseUMsBvVwjF/Fs6jclkw5ORm9n4Jfz4PUDJwWAAABPUlEQVQ4y8XV226DMAwGYJMjhDOjQNvN7/+Yk7YUm8Rs0y7a/wqiT06apAaKP+c5VFelugPcTVnpH6mdgcXYU7oqSKKsSMMFhFxCTrUBMUqnVLPJc8tpIJnFhAPl6xynGuv3lq2XU0vjfsLvDDS2Msqmd+jaBvyAONJyibKiV3T+66HFutlH7U4N0Qmv+xOVnR9UA6XGR60RexrWkVacOloKo1WkJaP+BnvVjYbLSOUjdfhGLyrSTpIbOqB0kUpywNrzd6K5pOk57aSaLYCwgOxW+bQmGL5ZPFvc0nyzqpT2sWh+BDqltz7++uxgixmOadqEGrqEiXToGuCx/GrzfCDiYa9UQXTNqiZFiRZLsrHAsxz/3AZOo8J/W8a5NVpob4sklyA2TZs3zfW8FRsOZ/tbgzcdQKfyBv/yj9EndBgOIfFeKtkAAAAASUVORK5CYII=",
    Cr = "/assets/png/ticket-ce321abb.png",
    Br = "/assets/png/ticketActive-6e6b78fa.png",
    yr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAaVBMVEUAAAD/cHP/cHL/cHL/cXL/bnP/cHn/bGz/cXL/b3D/cXP/cXH/cHL/cXP/cHD/cHH/bXH/cXL/b3H/cXT/cHL/cXP/cnP/cXL/cXH/a3L/a2v/VVX/cXL/cXP/cnT/cHD/cHT/f3//cXLOBDhZAAAAInRSTlMAZkB53zMZGvEgjYBwXxDsDM8vVL6yqJtMJhMG4sZ5UD0G/+yBPgAAAPxJREFUOMvt1GmPgjAQgOEpVLctpRwe6+ruqvP/f6RiCtNjBONn3xACyRNCesGnKaeLewDtOqzNXdXhkAQoRNzmEvFeIRJNqzVJrZCjZOm738hS6jBRXKL11cuCqHKwEUxHT2ukpGD78bTCoJKlvaf2CbX0uJrG30iGbtEElKoy+o8oWQompqUZZnpvLENdRBsc2+cUJE93DO1CWo72T+RUJ/+KjzrB0Cqm/vX3hcEaFpu6Xwl11ihMqMHGlLumSWjNTax93GxCbUapma+q+UXYB1LDgaNrT51a2jACxrZLtHhnc8NZLh0ZlJ45iFYnSBuOtx7g+BXWnuDT2A2G+jAbEgn+mAAAAABJRU5ErkJggg==",
    Er = "/assets/png/cover-359b7ec0.png",
    fr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAqCAMAAADlP6mgAAAAP1BMVEUAAAC9wui9xOO5wOe9w+m+w+m9xOm9wum9wuq9xOm9w+i+w+i9w+m8w+i9w+m9xOq8xea8wum8w+i7xey9w+iqLdj0AAAAFHRSTlMA3xAgX8+f749/779vQK+PMFC/T8t4yJsAAADiSURBVDjLhZNZbsMwDESpfbHluO3c/6xtFTBmFo/fl4B5IAlKkheicIITTu7CKfA0H8APFSJQqdCA7i8EtIsW6IEIX/gjkSYB/2S2hytjwYVR8dkY2Uw5udnYL4h6hLKaPOG4oqRC30XJgDNDKMuxPSuseBBtUf9eAUkm+9PQ3uFg2Jrtnm8wVLs7uLzGW4GiYzZJOMWJrF3AhAFQoWEKlC4OlCQJlE0qKFEiKEF84SMI7xHnU6e75CWiXvEJm/6nctLg8Uv3QvJJ+NAlBTGEjGdK08goNvbyTohbKoD7rsPEv9IMM8WSiQOKAAAAAElFTkSuQmCC",
    Rr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAqCAMAAADlP6mgAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA798QII/Pn39gv19Ar29PMHANkO9IAAAA4UlEQVQ4y4WTW66DMAxE7bxDQktn/4u93KIUF8pwviLNke04ihyowglOOFmFo/A078CTChWIVCiA+hsB5aYFNBDhiZVEmgT8k9ke7owJN0bEb6NnOyVw2Jef0MYRg5fJE/YnSkPQRQYZcGaIwbRvzwoPfGi2qD9XQJI3y9fQ3mGn25ply2cYot0dXH7UqBiMMYskXOJEXipgQgeoULAJDBUHSpIEyiwRlCYVlCBe+QjCe7RVCKC75CXaeOLLO24EvWjw+aWL0nwlOJxIQQwhH2ItIzKKjb2cCXVOCrgpdhP/ASDfLr2sL0dqAAAAAElFTkSuQmCC",
    Sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
    Ir = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
    Ur = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
    Gr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
    Dr = "/assets/png/AG_Fish-c641b195.png",
    Lr = "/assets/png/AG_FishActive-f0dce70e.png",
    Mr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
    kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
    Tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+m9xOm+w+i8w+m6xOi9w+m9w+m9wum+w+i8w+a9w+m9w+m/weq8xOq8w+i/v++7v9+9wue9xOq/z9+9w+jRFXRcAAAAFXRSTlMAf5/fPyDvb4+/MM+vX0+/EBBgXxA6zvcZAAADJUlEQVR42u2a3XLbIBBGgeVHIEWy5Oz7v2rTaeq1y4JsmgHGw7lK4sxYKz4OsJIYDAaDwWAwGAwGg7fGYgGT6I6AJTjRHQ5L0KI7FiwhiO6YsQAruuOCJWyiO1YsYRHdMWEJUtTAyBcA5LCwLWrbZos8q2DpIi1UxPRhaJVxcztpSfwPtmiF0BtGiDTNVwYqI+IAfGQWVfDFoXKCx/gm0rKYYpY5SYHJyK2BtELmSrNV7tmJV19aGlNc6dae1GEOqZRcgyBUdWk5TKCozGyuPuVNuaBuf75AbWlNyAN7TgVUhwZ+PoRepGWisLPTVyYzJ/uQlsxtd4GZCtEAXGxVaV2QBbIjdqXxyNwD2YG0LM2BNVPlgRz2O1ymA2ld74bMJj81kI8lNJeWyv4H0ARJAH+wraUFJhM+KtN0dc6dz48Pc6K3o7pqzmUiHvilxKZ81/R4GNJOMujpipmoHF0159a0eT3izs2j6cUD2S5qIJNuPejng+3jzl0155akkgDxli3LZf6huI+YpaW0yLzqfo2euMzzm2FiaSotTcG6y5kuKcTWfKIQEuY18LgDBy5a+UJ0E2nxmw/KlmRsAPlCVFVpOd68x785ujD6VflCoJm0KM6fEEnM4w3PLIir/stOn9aUlo/Mez50do+kzIwN1N1p2fOGW3zV18xRZqIBqSmty/N7oinOllDpgwzU3Wnp5/uamit5iseDLNdIWvBCCj3beLeTiZanWtKaIvOmSTz/D05tXyh38xUtpw2kReY1v8nsAfLJJ3s3kpbi56+FL67MHsCaTB0zEpWlBSZjVM8dXCAIBspVE2nR1xmbPKsuTz5ydrb6Y1CKiyT7c0g6uJwNivb1j4cUF6DfWWyqZeKvj5Pj8I16WsvjxF0zfRCdqHFxOhhhTDgmb5u9uzGTWGiW8tPdYcfvbggy70l7Z482I/0158DQBEnihMeOXzhb7++ZwQxeWCxCVEFSiGlbweOwiFlUYUG0+huFWQB7fuFsxufpWlpluQf1PFrUIHQdlxfQWIQSveHepZAJ8T3e1/ddm+gF7LsUMhgMBoPBYDAYDAY/xi8Ek1Bj46OEsgAAAABJRU5ErkJggg==",
    Qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAf5/fPyDvX78Qb48wz69P/SNvygAAAxdJREFUeNrtmt1y4yAMRgHxa2Nb7/+0251No7gWSsJ2gMlwrtqmnUbh41jIVpPJZDKZTCaTyWTy0XisYFXDkbGGRQ3HgjVYNRw71pDVcGxYgVfDkbCGqIbjwBp2NRwr1qBVC5x+A0AOD3E3MW4eeQ7FMkRaqIg1OLrKLFs/aWn8D+LlCmEjXlBlul8ZqIwLAfDMppoQq0O1KB4Xu0jLY4lNS5ICJ8itg7Sy8E7FKpMS0O2lZbFEoI/2SR0uaGP0kRVhWkpLbmcNlSnmKum7csG4+0+hqbSEzxySpAKqwwK/H/Io0nIUdqnn0MXM6TGkpaV2F5itcFmA5JtKKxWCJa5YoPUQPgM9gLS8o1ZMqDLwf5xuLhtAWkHdSb74qgM5ltBdWkb8DaANUgD+4XtLC5wQPirTDXXO3Z4fH7bCbMcMNZwTIp75S4kXfNfveJjLTnLfoUh8VMJQw7mjbN6ImLh9tL55IEuqBbro1kBfB3aOuw01nNuLSgJKUfJc5k/FhSt7T2mRec3jNXrlMs83w8TeVVqWgvWQM1tTiG95RyEXzOvg3IEDFy25ENtWWmLzQdnSjA1ALsQ0ldbCmzf8zFFi9GvkQqCbtCjOCS4Si/IF8bDfJHq1pbQiY1556ShuyUuHeWjbafnnA7fruw7CUWalBWkprfR6T7QyfbkpH2SgbadlX59rWq7k9boeZLlO0oI3UhjZwbtf79nMrTut9WLeMoX7/3kx8Quz3HxFl9Mu0iLzur8IPYCcfLJ3J2kZfv96+CJcegB5AdOGRGNpgROMGrmDC2TFQLnqIi36d84Xz6r7i7ecF9/hNujx8z1Bed5GeZEWxcb2x0OKC9D3LL40MonhnNQQO8209vPGPYQ5iC3UuC82O+VcDmv03Z7d2E5icSDMChcc+NkNReZ9Mt5Jl2ZkvOEcONogRRYVceAHzo7Hz8zJc2iPVagm6IcQJ0CJyi2yqSbsiN7eMCgCOPIDZxu+ztDSqss9mNexqgV56Li8gcUqjBqN5VMKWRE/43n9OLSJ3sB/SiGTyWQymUwmk8lk8mv8AfaIAjiWXLu0AAAAAElFTkSuQmCC",
    Vr = "/assets/png/BB-0d6d87d8.png",
    Or = "/assets/png/BBActive-dcbc63b9.png",
    Fr = "/assets/png/BG-b697a78f.png",
    Nr = "/assets/png/BGActive-741637e8.png",
    Pr = "/assets/png/BetSoft-791013ca.png",
    Wr = "/assets/png/BetSoftActive-a2fb8c94.png",
    Yr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC7xeq9w+m9xOm9w+m9wui9w+q+xOi+w+i+w+m9w+m8w+i8wui9w+m+wui9w+m9w+m+v+e8w+m9wum/z9+9w+iwpH2cAAAAFXRSTlMAH3+fX98/37/vb78wr9+PzxBP7xAzfFCOAAADCElEQVR42u2Y3W7DIAyFMRAS8rMkXXn/V11VaUqZc2zSTbvyd1e1AR/bx9A4wzAMwzAMwzAMwzAMwzAMwzD+m3sMH7m0MH0/Eh4fPp4MT5bwxHufHIMei2f51+SbGROS4XNpJR2hITzX0esLhnKBPpDjJLwNLkgs7ULuwgbd94+0XOrp8gWC8+f6C1ssBRNBYnQ80HGtIKlgwpUdCInV2fVd9IIs7ULG0vBbKtcZlV3WRBCH9sVC5qbMxHKd1R3wgD6TayCIQuDAwlYfyg9uVDF3YB/YIbNroReFIB3Y6gQUHiTR7TfwJYQ3Qi8L2YoIoQ4P7CgSPdJridALktBoe7IWkQADoYaK3FhimfcYcNFAkhD/kiLJ6jNbArgSuGDQCqpbPTkkpO7cdZCsHoB3DvbCyEK1yLVAVSiZC+HXsY2A1UFn7dyVjAVXa3JNrFUoHRfCBlZHQbJ60jtjENJA2CEyfdUbG+iY+6sO10tWD2ogdNKXO3i8eWTFOpQBCAmvrryJ952sBhKkId+DWmkMdW+EcyG+mveLZPWoH2Z9wX5ObxZk/pGU9TTCsQpLtDpXSQ1Wn3C11jdm7wN/JmSul42S1UmfOYN0Gva/nr0TyFZ+HVgbupoFmO7YYnV8iITLVo+o7NXAQv/CEkp33iWrM7Hjn8ze8yiHWocLktVJyqhudbf8evaOzPzgOrQDq8OM6lYP+H69XJ+9qIErrdDqKN0d2BP5+T2LEH9gV99zDJLVZy5et/rksJDt6uylYyXAKpQsQSNTk9UPMh7MmD2zpFS3RpYaaHVo5KnhLWUnN9460zlg9ipCOuKh8qeTdojcN/U9UDMEZ++TAevAVkd9k6nitubzpQ92kEhp1KXTxAU4eLHVcYfrfM7gj7dGOgk5ExfCq69bPb6noya2ZaPDsxe/dPXitx08lnU2cgyaSgPxfPYejGjw6lany+UY3Snzun3qBeExLfINYlMamN7srM3v7g+I4Dp0k6ZKEK0+tJeiW8bkDMMwDMMwDMMwDMMwDMMwDMP4d74AL/Jekqvz+LIAAAAASUVORK5CYII=",
    xr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH99/n78/72BfbzAQr4/PT3DJVIrFAAADAElEQVR42u2YWZLbMAxECXCTtYf3P2xcriSKDGKhZ2q+8P5cNpcG2C1awXEcx3Ecx3Ecx3Ecx3Ecx3Gcn2adEtZmIf8dkp4f8EV+saUXMcYSCPCcvMq/hmhmLpyMWJuVcm2NI1IdqE+Y2gCYIFAKXUZvyNTsQlZhAQx/0Gqplyu2Af41FQeW2BrPgxTGShR02BtSGk8aWQGIWDOrvorekM0u5Fcz/BbaOLOyyl6AJZB1VSGLqTJTG2cPF3RDtQQDSRRCAku3em5vnHBjwc46og2XYAFFIUSHanVgFF4U0e0n8yULPQhKpY7WLFafmTkuQPQIaoXQG1L4aHuyN5HEbgQMHTlJYYn3COykCSQhUezctdxCp6CuFFyQtYbqVi+hJ4Se3D1LVk+Mdy7WRqhCtyBYgNtWKhVCr2MHSFanJ2ulriRsfLdyMLHftoJUCAkshCRZvegnIwtlAM0hutWxm0v4flNECChZnagshszClR2OYTR7U7dW+D79Ek7xvlPVjSQp5JH2ykS+n43UFxJveb9JVp/0hxk23s/lw4Ysb0XZuzv8dduWaHWqEgxWz3y39g+y90nsCVnu006S1UHPnCw9DfHL2ZuZatX/A+vgrmaJLffDYnX+IZKGrf7g2n4LLO5fWOHKXVfJ6kTs/C3Z299lvusISbI6SBXVrR62L2fvTMzPXIdW0eq0ogarJ/5+vY1nL3eAb1oVq9NyI7Mm5+fPLAJ0wKq+58iS1RcqXrd6DryQYzR74ZqJYRdaVlgjg8nqF5UGs856jcqCFa/SaFano7PhLSXKB29foA+TvYoQBPo9HV20h8h6MNYjYaEDbPa+yKwO1eq0XRVunHtlplbfx0pRV7qFS2zw6lYPtQ1TF/LH20bpbLkCFUK7r1t9+lzHxWSrBjLZK750jeK3SB7Ldg4IBMjNwKOfvRczF7y61WG4HXPosuxH1RtC97TJN4hDOcDw4ck64hq+gYm5Dp1SqiTR6tneCtzmEhzHcRzHcRzHcRzHcRzHcRzH+XF+A+HGLGf2hX9qAAAAAElFTkSuQmCC",
    Hr = "/assets/png/CQ9-9faff6b9.png",
    Kr = "/assets/png/CQ9Active-362e9af8.png",
    Xr = "/assets/png/Card365-2780fce5.png",
    Jr = "/assets/png/Card365Active-7d8a7b67.png",
    zr = "/assets/png/DG-a2a07dee.png",
    jr = "/assets/png/DGActive-9e0c5335.png",
    Zr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC7xeu9w+m+w+i+w+i+wum8w+i9w+m9v+m9xOm9w+m9w+q9w+m8xOe8w+i9wum9w+m7xey/z9+9wuq9w+iD6jxaAAAAFHRSTlMAH3+/319A7xCfj2+vML+fz08QTyv4WA4AAAKhSURBVHja7ZjbkqsgEEUbuXlj4kz4/289qZrCVrrbnJdAMtXrTQWLBZuLgqIoiqIoiqIoiqIoiqIoyl/hx4QHBlrhrQw8MPtVAMpUHs5nCT+5/Eu0Q4IWDFkGHoyxXM1AMLngjxpDzCc2D5TWIjCXqwgEnwsGdlADcTRizUXCfkmzZcujFQdpyywDEBqLQKRtkZOVXCbwyWwugtlycrLGohazyASEtiKYrfQsWQbHo3W6UGTxBLjO1pgL32U1zsg2e++XNWYkwOtAEfO8iBWSFUnU8lfYS7nMZ7O9SMh8mbXcvsEvjk2R4W9DexFs4AJHYpUsLzQYTSIgrUXkbN3rxFgcoTOJnSUdREy1zFYz+4alhFfNTE/0EAHLZctV3exRrGbkstVWRM5WqJO1XuTHMs96iGCPjmKyYD9kAWVhhrSHCPaoF5MF+xYClPDyExeKuJqZ69FVTJbBIpSRPnyVCGW6zNZc93HgNxFxuLqI0NmKyUr/JeLIKaWTyFINQMJkfZYIZqsSGz5MpM7WRha7a5H4LnME9+35tERt9BwzsatWO5FgKsZzUyJm66C10LZaoCTRsumGSLNlmVpoSvFM7tqL0DlgMCmsKWF6k7PWKVvu0MGee9Mg180jIJ1EsFcNmywI9e6PeGYE+4lgtoQ1SPxLbBwzgt1EsKHW8+0apC/alf127CeCv7OxDj8TYiL16LdjP5GQK1Z5cx2wlm3zT55uiIiULSnxo8s7bgrmx6QFNV70eYgiMlK2xLU0VaqXA9hRJDxtmM8EKVg9RcDlI9/y6557dBOhhSNw3IV0fRGPniKYLXktNS5T4gKEniKw0WRRPFG5GSB0EqGlHciEmzuEahjhg0n3ZXjgw0dbKIqiKIqiKIqiKIqiKIqivAv/AFLcqcH3ZS0/AAAAAElFTkSuQmCC",
    qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAH79/31/vQBCfj2+vMD/PT3F9VZIAAAKYSURBVHja7ZjbkuogEEUbwi03I///s8eqU5lWdrfOi6BTvd5iSMyC3ZBAhmEYhmEYhmEYhmEYhmEYf4Xi8g1HvYheh264n6NMyHyeXB4l4hzqf5KfdurBVHXoRknn0UKAqyfxXmNK9YEjEtJbhJbzKBEQ64mjH1iDCRix7iK5nmC2/Hlq40E6qshEQGcRSvgserL2UAE5md1FOFtBT1Y51VJVmQnoK8LZ2l8ly/F49EoXiqwRoOfZKvXkes7GlTmWGOO6pcpkAt4g4l438UqyEkSt+stPq1DlbPYXyVVus7XpD2KKnPwz9RfhB1zpntQkKzYPjCaJmN4ieraubWK8Nj/tYpUMEHEwzT5U9sytlFstQk+MEOG+XqXAXThZyoJRhGx1FtGzldtkbSwGeMxWVxHs0aImiw5eR4FVGNKeItijUU0WPauDjG9cbxMJLYvUo5uaLMdNkIIn3yWCzE+ztbR9nOVFRB2uISJYrZys/VciAd5SBomszQDsnKzvEuFsNWLTl4m02Tpgsnsukj6lRnjdXh6mqAPfY2ZCSsdiv7iGQszdtlB60Fp/96y7atl1QcRseeEqNkUi5q6/CNYAx8jLpsAsvId1FsFshbsOjtKdJula/A7oLYK96sRkUW5XfyZ+yvdIky2lrtVdYheEEewvgmsBJwtuJVbJJn47jhPh7Wy+Rq6EtMN1OPmOE8m1YcN7YcFn32VPnv88O0DLlpb4EvhcmLMrbl9ZQ/s87Lb3ixlR59K9UX06gANF8ssHixXQgjVShEK956rf7rXHMBFsnEjiqqTLg8dIkSy95uPqhySo87EidGCykAgqsyNgkAi2DqRzme9c/FToi9mv63QjXr7awjAMwzAMwzAMwzAMwzAM41P4BxMxkWB6AFDCAAAAAElFTkSuQmCC",
    $r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC7xeu9w+m+w+i+w+i+wum8w+i9w+m9v+m9xOm9w+m9w+q9w+m8xOe8w+i9wum9w+m7xey/z9+9wuq9w+iD6jxaAAAAFHRSTlMAH3+/319A7xCfj2+vML+fz08QTyv4WA4AAAKhSURBVHja7ZjbkqsgEEUbuXlj4kz4/289qZrCVrrbnJdAMtXrTQWLBZuLgqIoiqIoiqIoiqIoiqIoyl/hx4QHBlrhrQw8MPtVAMpUHs5nCT+5/Eu0Q4IWDFkGHoyxXM1AMLngjxpDzCc2D5TWIjCXqwgEnwsGdlADcTRizUXCfkmzZcujFQdpyywDEBqLQKRtkZOVXCbwyWwugtlycrLGohazyASEtiKYrfQsWQbHo3W6UGTxBLjO1pgL32U1zsg2e++XNWYkwOtAEfO8iBWSFUnU8lfYS7nMZ7O9SMh8mbXcvsEvjk2R4W9DexFs4AJHYpUsLzQYTSIgrUXkbN3rxFgcoTOJnSUdREy1zFYz+4alhFfNTE/0EAHLZctV3exRrGbkstVWRM5WqJO1XuTHMs96iGCPjmKyYD9kAWVhhrSHCPaoF5MF+xYClPDyExeKuJqZ69FVTJbBIpSRPnyVCGW6zNZc93HgNxFxuLqI0NmKyUr/JeLIKaWTyFINQMJkfZYIZqsSGz5MpM7WRha7a5H4LnME9+35tERt9BwzsatWO5FgKsZzUyJm66C10LZaoCTRsumGSLNlmVpoSvFM7tqL0DlgMCmsKWF6k7PWKVvu0MGee9Mg180jIJ1EsFcNmywI9e6PeGYE+4lgtoQ1SPxLbBwzgt1EsKHW8+0apC/alf127CeCv7OxDj8TYiL16LdjP5GQK1Z5cx2wlm3zT55uiIiULSnxo8s7bgrmx6QFNV70eYgiMlK2xLU0VaqXA9hRJDxtmM8EKVg9RcDlI9/y6557dBOhhSNw3IV0fRGPniKYLXktNS5T4gKEniKw0WRRPFG5GSB0EqGlHciEmzuEahjhg0n3ZXjgw0dbKIqiKIqiKIqiKIqiKIqivAv/AFLcqcH3ZS0/AAAAAElFTkSuQmCC",
    ed = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAH79/31/vQBCfj2+vMD/PT3F9VZIAAAKYSURBVHja7ZjbkuogEEUbwi03I///s8eqU5lWdrfOi6BTvd5iSMyC3ZBAhmEYhmEYhmEYhmEYhmEYf4Xi8g1HvYheh264n6NMyHyeXB4l4hzqf5KfdurBVHXoRknn0UKAqyfxXmNK9YEjEtJbhJbzKBEQ64mjH1iDCRix7iK5nmC2/Hlq40E6qshEQGcRSvgserL2UAE5md1FOFtBT1Y51VJVmQnoK8LZ2l8ly/F49EoXiqwRoOfZKvXkes7GlTmWGOO6pcpkAt4g4l438UqyEkSt+stPq1DlbPYXyVVus7XpD2KKnPwz9RfhB1zpntQkKzYPjCaJmN4ieraubWK8Nj/tYpUMEHEwzT5U9sytlFstQk+MEOG+XqXAXThZyoJRhGx1FtGzldtkbSwGeMxWVxHs0aImiw5eR4FVGNKeItijUU0WPauDjG9cbxMJLYvUo5uaLMdNkIIn3yWCzE+ztbR9nOVFRB2uISJYrZys/VciAd5SBomszQDsnKzvEuFsNWLTl4m02Tpgsnsukj6lRnjdXh6mqAPfY2ZCSsdiv7iGQszdtlB60Fp/96y7atl1QcRseeEqNkUi5q6/CNYAx8jLpsAsvId1FsFshbsOjtKdJula/A7oLYK96sRkUW5XfyZ+yvdIky2lrtVdYheEEewvgmsBJwtuJVbJJn47jhPh7Wy+Rq6EtMN1OPmOE8m1YcN7YcFn32VPnv88O0DLlpb4EvhcmLMrbl9ZQ/s87Lb3ixlR59K9UX06gANF8ssHixXQgjVShEK956rf7rXHMBFsnEjiqqTLg8dIkSy95uPqhySo87EidGCykAgqsyNgkAi2DqRzme9c/FToi9mv63QjXr7awjAMwzAMwzAMwzAMwzAM41P4BxMxkWB6AFDCAAAAAElFTkSuQmCC",
    td = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9wui+wuu+w+i9w+i8w+i3x+e9xOm3xOG9w+m7w+e/x+e7wOm9w+m9w+i9w+m9w+m9w+m9w+m6w+e+xOi6wue9w+gKq3thAAAAFnRSTlMA3z+/YL8gnxDvQCAff2+vz49PMN9gBtbyoAAAAlVJREFUeNrt292uojAUhuGFBdsCpfzod/+XOnSYiuK4QXdM1mr6njTBoycpLDBAX61R6CdKIA3gQglUYK4lItN1DQkuQpoLYCXvMRUg/7YYFMltKoAuggoSnDkZSgIylwhkmpKANLPAmwQgOgBcApAiACoiH9ae5BYhdVg7kluE0LXykh0RIr9niKlF3jzeIMbpkuZGK/NcUQGiichjAfTzaklekwWKlsjEOYIQCWp0JYXarjRhwkeIFQYZHsfGClHCJjzm7P8grUfVkpziqWA8rAsQqfdauH/E7e4gxiltSE4R0ofV30G0sGd3hG4DUfBV6wkidY7Ih5jzM8QS1dIgncWl2ULQD/YJUruS+GYwp7eQ0BYy8r561ZirXkHQkYs/qLDyHfGPkJoabHuAnIhrjxAomwjkVS1fiCvUeBzi6wERMqreEZsGzNXruGiwV4RMYeUjsZjTARLSZX8YMoDVQzxWSOwgRPMa9RlCPgnIQM0lCUiIIcSOZ58EJJQhTMoQ9pDTWo+lYT3k5EBoTWGppFtlhmzLkAzJkKN9HzKdlox0yK0MeV2GZEiG/FyGZEgKkEEtDdIhCktVhvxQhmSIVMh5LUL69VAnB5LMH3QZ8l4ZkjxE4eN4fZdR41cx+vZ1LPBxBa93axw+yzpu7zO3Gh/kOb5F9/7+6nntqrXuLYpl/I3SO/tr4HZybCgFDlVx3VVr1wMUy/nt5VvtgJ3YXXJfUjxeJ+vbpGshZJDv54QM8v1aLWSQHxn1Qgb5kVEvY5Dv1157/K0SeHJsMqexnL6v+APsxhEqPRi3qgAAAABJRU5ErkJggg==",
    sd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAvz8g32CfEO9/r8+PTzBvcNmyeXoAAAJKSURBVHja7dvZjqMwEIXh8oI3tpz3f9mxhxgSMgSSUbdclv8b9+0nGRdpGfrRlEA/UQUZAJoqSCOmiMjOsyLGZYiKfzjOe0wgdt9iEMS3SQPzXxD3h8VKS1VAYpVApqkKiIqCYCuAGMR8BRB9P3ZDWnviW4bItM7EtwyhTgTODtLcJ/oxxEqWL48rxHrTUWx0wI34JRAzRBSwAPq4OuLX5ACtiGyeI0gRo0bfUUrNnU1LhjhmkAFPj8IGEcwmPGLuXxAVIDgdW/lRsAHOx1VxfdfC40/c2wPEemEs8SlD+rSGB4hhNumRWgci41PrBcJ1jvCHWPUKcUSSG+TmoNUegn5wLxDpOyo3i5jZQ1J7yFj26SURE0cQ3MgjlV+Lyx3xzxBJCvueIJJK7RkC4SqBHKXKhXgtxuuQIAdkyCh6T8U0ICa3caFwVoZMaS1H4hAzdwhM11+GDCjqRzw2SO4ixJQ16huEQhWQgZSuApIqEOJGFaqApBqkkBqkeIjc6rE0yDXPB0JbAksdrXUNsq9BGqRB3vebkEkuWe6QtQY5rkEapEHe1yANUgNkEEsDd4jAkmiQNzVIg3CFqK0M6dXazAdSzT/oGuSzGqR6iMDXlfVdhsR/VdC3r6PG1+my7tZ4fJfzpd1nVgZfFEq8Rff5/urL2lVbt48oruDv4D7ZX0NpD8eOonEpUequ2uouUFzJt5fX1ICTijtyDykBx/H6NqnTTAb5eZ7JID9PGSaD/MqoZzLIr4x6HoP8PJUvMwuGD8cuK8du+nnFHwpT0ee1/OoeAAAAAElFTkSuQmCC",
    nd = "/assets/png/Hacksaw-d5a9f183.png",
    ad = "/assets/png/HacksawActive-c206e018.png",
    Ad = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC8xOq9wui9w+m9wuW7w+e+xOi7xOi9w+m9w+m9w+m+w+m+w+i9w+m9w+m+wuu9wum8w+i9w+i8w+m9xOq/xOq9w+g5UtMaAAAAFnRSTlMAH9/vEEDfMH+Pn8+/r28/779gUI9fkkxLsAAAAtFJREFUeNrtmsuSgyAQRZuHKKIkmkn//6eOpkZJhsfouKC1OEtXnoLbdiNQKBQKhUKhsAlZ2bbnHCeE6bStJJyQSnfoYXQFp4I1AiOolsFZqDpM0p9jWVaNBB39VZEaN0F9gz0EbkQ9gS5S4w6+yFZjpnAXiuj2qhXuRNVAkFrgbgRBk9njCiazxxVM3nN+5sRLhf9GUarCGg/wBWQY8RAPIAJTeAhBZXO1OHGBzcXwMDQGlA4P0wEBKsRrLEmPeIklYfhi6O/ouLcD+vA7Rsn/fW9xgtcAzOCCkQCM4yeGAViM0UBuFE6Mn2FhAKvJ58MGIwjIiHv7GmbWLQQvmMA3DLxoqMZd4wzzRLzWXkDaRENeTETEr8zPJVQk65bElAiM3ggVr9cSclKlRcAGTKQhGBIbFnE0gWFQcgxgISc6IpI2YSGTFnLSpUT8cCsZN+khJyYuUtcBEyO9b4ynnwURF6mC4e7WbwwtEUyIhMLtovDA30A+0iLBcLu5djyRSNikWerZiUSC4XYmhER4QiQe7udiQqeRT4l44U43kAZy0idEEuEWtX8CM0BO2oRIKhJiqcyGyEBiN4hgk2wgaTSN1RYRfG5pIG+QE5kUcSapBlJQGKygS4n4M5UINJCWQNEC0CkR38QEGndGIOvL6z7WF3K7ZAz9KlSBWepBICITYn3N/qMvZAp9kyZwvihV/ibeVSKlmw4dqtFrGtyzcVVd6axVBAbd3b95KB9iQ4e7oTawr3E/AImv4dElodIwLlSXSMj+ew/kzuYcUuAhOJEFAXjgIUYgg8YtEP3F847kBzYWlZsoLxg/f0COXQW8E7sKOJtcw2M2uYbHZMJ354Okx5z4c+f8v5f8Nam6+4uRb44HmSuZYVh7geX4URnwTwYSg9Sf3PpLaMywlkez0ZCtVWFu2qDHoM+zGG/Im9WDueME531rb/QDXigUCoVCgQbfJ0FDaxvgQ40AAAAASUVORK5CYII=",
    od = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA3x/vEECPML9/n89fr28/UFzr1bgAAAKkSURBVHja7ZrNtqsgDEYTQARB2rz/y167PNbew0/1OCCy2MOO3IUPEg10Op1Op9PpHEINYZoRaUE6o8Og4IYM2lCE0wPcCmElZcBJwF0YDBWZ77EssUaM4b8qStMhuG+wp6SDoAe+KE0n0GxPY4F0CmS6vUakk+AIDBklnUYyNHl5tGDy8mjB5DPnd068QvozyOkU1nQBDWzwdIknMEEgXUJy2VwTLTSwuQRdhkeDYugyBhgwELWxJDNRE0vykxAzS9qRk6EYlJSl/v0+bfW4cLThVOJMdgIgUA4LtUFa8P+HRUS3y/ajpQwSKhBHfYQX9AP+bDpJH7j1R8s17ppeiJQIjDLxl1uml6LLiMQns99CxfLcUlQSAR+1UPnzWkFNhrIIhISJcgxDEvIicSRQlNqwADXRRZHYpFD3T1ATUxKJw40qbzJDTVxeZBwTJk5Fd0ykXwWZFxmS4TbvO4aXCBVEUuHeo/Ck30A9yiKZcGtY8TcSSZtYWLE3EkmGezdhJIIFkXy4/WbCp5AviRTC7VMnM9Rk/ipCulRAGi7l71QQKUVCbiezY9KQhAMiZIsFJI+icTgiQv5IAfmAmqhDIuRLBaTk0FiBKYnEPZVMFJCBwaEFoEsisYlLFO6CQda3x32+H2jfJT71qRATvdSTQUQW5PsxZ9rQa4hjE5t4v6iwfhG/n0SoraEdtDruN6yf6TcmBGTQ6J7+zMP5JTYYOg23hn2L+xVY3IaNfXqDoYmEnJ97YPdubmMvPO4/V/OkSzAa02xlqKadMadmBs/aGQVsZziznXHZdgaY2xkpb2fIf8Hj4XiwGclMI6YGlmNFGPqKYdFIfeUxN6GxbjDMZsOyPavSPLSjCKPvsxgfqEfQxklaQJyn8OAf8E6n0+l0Ojz4ByXA+kXvaGg5AAAAAElFTkSuQmCC",
    id = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAQlBMVEUAAAC9w+i+w+i6xei9w+m9w+m9xOm9w+m7w+e9w+m9w+m9w+q+w+m7weW8w+m/v+++wuuxv9+/z9+9wui/xeq9w+ifpIyzAAAAFXRSTlMAv98gf++fX0Bvr4/PMFAQPxAQsDDf9J/kAAAC0klEQVR42u3abY+jIBAH8AHkQUC99m6+/1e9mtwtFBCSsgHZ8Hu5po3jzF/BLkzTNE3TNE3TNA3LYEQzkmTpBY4eTiSDHgiGJBisI3qUwjgGNjgo1uErtLfiOwoACmsZaE8HEXHRqSGgtXCQJLwcHGst0JwKInLasZqC5kwQkRPBWgTas0FEXhgfsSUqiMhpcU1avmgbRHp5pzunRAYROcn0CTFJc3dZprvOlvAiEv/tF7xb8AvPjSmF5mwQkZO78ADXlahcd6E1lojIlpsQk3mCHx0L2bMRWSFycNfBSMdCRGLmtReRTEtophAL9eojwl1t2fv1A5xoJluJI7IWTicOArvOzwrV6iOyFk6H+5/w/fG/rDGTiAgJIhKiF4d33usxUo5IvhDJnG0l6Eho7EhERAW1RbCIApR1j8iBRRIaKEekkFh1xw1iKiJYiMhyxy37JxEhN3yJohIRMYVJZ3fc5n4SkQVLVmiOxGN0lO6hFEs4lPWPiLzjm4cPIsLoV8OET9OecXfjzhM3ZJZPlQhbxb1eNuYiQkoRiXv46/oYhcYSEdmzjzVGcydL2+1zy5dX5CLytJg7LCoKaRsRjdk9ufA+W6c+IiwzOk+BDst+H7TF44jI64gwW1jfsh5PxHJEdni389L6VvRaba2JK0gvZkcR9NAHxEyPxVY5ItYPx0rQRxlElA0ClNcuIlYp9rLtq7H4jrL/1Em+GN50Y1WOiMYKbRtSjshwP+nqOCIbfgMNteojsmI9+4C2tlREBqzDv/quSSP+G0riKaKwEt+hORbeZeojwpcHtCcSESFYgXQpA2Tqzflv8iFh5AO6YNRfUIzrSdFhMJqnt0UauSESxb6dZSwcHTpcQ/7Fgnb/bamWuMcK7ztXJGMPFscEPlwdQJN1bDCa5YfUwTDBjjdXQO6yVK0myS2Wqt+B7YbQsxNUGzngUE3TNE3TNE3Tj/AXlC//VaP+WkMAAAAASUVORK5CYII=",
    ld = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv98gf+8/n69vEI8wz2BfUL4prOkAAALLSURBVHja7drRkqsgDAbgAAICYs37v+xpZ3oKaoSdsgOyw3e7sx1j8mu0hWEYhmEYhmEYhm45PJkFI3l+QWJEsoeAFhgePcBhGd2iFCHxYAHLsYw0UJ/BPQ4ACks5qG8+RCREp4SG6iw/ROTJSiw1QXXqEJGXDYspqM4dIvLCsBSD+vw+Ii9C9tgSFUfkbQpNmj5mjzt62psbp2SNI/K20gckVp66yoq56WzpOCJv+nJEJvyQqTHlUJ2PI/IWTjzAdSUq1V2oTRARWVIT4hJ3cNuwkC0ZEQMnVoYOnjQsRBMzP5+mh2wJTxTioS46IjLUlrxeWwhOM1kDHRFDH04iCOI6PwaqoiNiMocjw3/sLfGHVeaIiLDMosEv/rzJVreRfETShTxEsBiGwQMqs0REVFQbCbM45LWPiEVay4bQEckkVt3xAZGKCGYiMt3xkf2biLAbvkRRRERcZtLFHR9zv4nIhDkGqmPnMbK5ayjHHAk/0Dwi6x3fPHwREcHxjevYzFvGfSKmwdO77blOfWyVjHpZWYgI+2FEVGJ+VLsNhYjIlrytCZ46WN7mOZc+vToVEeuT65QuKKRuRGb88JAqREA9dEREYnSsxkAkPw/qkueIrNcRET6z34oWd8R8RDbY22Ruv9Wtti1DnEF+MTuKYYRbOHMtlq18RDwE1jCMcQEnyp8ClFIvIl4p8bRsxnnc4+I/9bI+OdnswYqOyIwF6jYkH5HuvtKdzxFZsECbjZGOiMFy3kJdCxWRDuuIz35oUo8/QyHuIgoLyQ2qE8RVxhSWMVmoTxMRYViANSkDVurN+cy+pN3DQhOCxwtFvyzHQEBvbPSI1HNDVtTb8ipjkhjw7hryjgVv/t1SKX2PDe83N5K+B0siQXZXB3CyjgV6M/2ROgQSfH9zBewuq2qxld1iVf0NYnOMI6Lks3t0OFTDMAzDMAzD8Cf8A7Rq0P77zcLDAAAAAElFTkSuQmCC",
    gd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAS1BMVEUAAAC9xOm8w+i8w+i+w+i9xe+9w+i+w+i6xOS9w+m9w+m9w+m+w+m5v+e8w+i/x+e9w+m9xOe9wum9w+e9w+m9w+i9wum6wue9w+j3vHDpAAAAGHRSTlMAn79Avx9g3xCPf2/vIFAgzzDvgK+vn2AGMAuUAAAB+ElEQVR42u3a227qMBSEYQcH20lMEqDAvP+T7lTayI0PpKqzkKrOd9GLTkX5OURIWBERERERERHRr6dN3qg+DR5Z/ro1r51b5LWT2keHks8SjSKzNa9YlLRqHzNKmmXtUTMHJ5SpfViUdMs6oGYOHIqs2sdYKrGnZXUWFXPw4rnr1V7c8eERG4//14dFxqV3W3NEH5Bz0GpPbXL7KrghMbvNOTXkLyjvC2mAijnQSB0ZwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMKQvxnitBnPvz9Etx4La+RD3LUdpEJch6fWyYWE3QiFzAha4ZAJi0Ym5IqvetkQIxcyYW0SDbFyIQPWOskQA7mQFmtWMsQKhvg3hhgIhiAyy4VM9p0hN7mQBpIhFmsmE3LbJWSAaEiT/Nc0xOwRcoZsyBh/s5+GWLdDiPbCIc4jOLj8q60+ZABkQoIhOnfg7i/OkbjBIuGHKczZkKnFOsTpD6QarWo8b9JP4Rr5xf07p6AaFz62pSFdfFRo9Miz54oQ9yzBbNKnvI/eTwV9mNMQG4dYlMyqRh/uThRitQp+eF4rDZE7r3W650M6p4Lt81o7hHilalNsHHLpTvEfeZScwgVwO0S1Lx6QeuehG5ef82VpsB+dzuV2TZ5+Mfcq+rVR6tHkGUVERERERERERLX+AQwQpRRs9v7yAAAAAElFTkSuQmCC",
    cd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAn78fQGDfEO+Pf29Qz68wgEWEWfEAAAHoSURBVHja7drLbsIwFEVRv+3ECXD+/2ebDpCLH0Sqc5GqnjVgwEVJNiEWAysiIiIiIiIi+vOc79vUt5zQlR5n41d3gz5j1TUWjHyXOAz5s/GLgBGjrrFjRB/TFTPjwmJMXSNgZDmmGTPjImIoqGtso5Jgj2kMmBgXb+7dqq4SrU+obc8L8QEdaY1n44oz6DFOXcm8ewJvaOzxdNzK/QXlcyEamBgXDi3LEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCG/M+Q6Px2//shziQcgpcPiQ+TpULiUs4Z5ULK3AuF7CiMcIjFQcuEPPDTKhvi5UJsfTDRkCAXkvFqkQzxkApprzpIhgTBkPTBEA/BEFR2uRAbPhlykwvRkAwJeOU7IbdLQjJEQ3Rz1jbEXxFyh2zIhp+C7YSEeEGIS8IhMaEwsf9rmw/JgExIkat9B1G/2UcSc0AjZVvG3RBr8BoS3Q0t7dSM5yGTLWvkYGPPggEdy9+2NmSpj7gl9IX7REh8lmD37S1fq+dpYB2PjQp1SMDIrmas5XKqkOBU8cv9Wm2I3H4tq/shS1TF+X6tC0KSmmR1qEPSYusPJYzYsgCehyjz5guZd8/LdrzuCUjhtrhe7qL73Jvxqqq3vVJe93lFRERERERERESzvgAZBisAdtY1oQAAAABJRU5ErkJggg==",
    rd = "/assets/png/JOKER-4897aa9d.png",
    dd = "/assets/png/JOKERActive-e3869b94.png",
    pd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAP1BMVEUAAAC+w+i9w+m9w+m8w+m9w+m4wOi8w+S/x+e+w+i9w+m9w+m9w+m9w+m8w+i9w+m7wua8xeq8w+i9w+e9w+gxn5VgAAAAFHRSTlMA35/vP48gECC/f19vz7+vMDBQgHS0MPoAAANZSURBVHja7ZvLduswCEVBD8tv58H/f+tt3RslSKhOR0ZZ2rMud5BjOAJsDI1Go9FoNBpvEdxsNkT6wi6Dn12ACnF+oIzFO6iK/m6pAJoeasEN9CtbHWHhMmQG/VEJnt5Ce4LdLL0JTqAXKRxlvNrTuEd6YR3NUVCUpteV6ZgAYD5ScgGFXJk9xj3VjhxjFSrhOhB2FqpOCddBE+wYqk0J9zlh9xRSleMDEsOAJEQGNZ3CnjidLETGgxomygIiC5G5gRJ6LAQEBnoHqyW5jBCQKKSi5OopofurENIxoAxZQP4sZAAFOCkgUUhFIdlKASm3KOuG+kIiOSSCpdt/pYTz63t+ZB0JMVLSjXA2SAzbHQq5SL2AhdOQrT6KKvMOf9Jmd09C2xuxxep30VYUF2JMwChmFnTKSknI02YnFIVgKVgBzsTJR+/VjiUh8yOUukwyi3neI5lEyPGoMsOZeNHphmgtCFnTWxAxcCaD5PQrMSHyaXCjhA3OZJFuKcY/BKs/CPmlM7FCYk2UCJGNgKqESJM3Pn1fsPocJLfDmQiVeXppVWRDX/ars04hGGJAmBAxIGQDwEWnkI4HRBZiolQHAFaTEMya3oUJkYq3+5+IXlMjj0mZA0dlIeuzpi95e7PAmWxp8z4wISgEpI+paBOZZ2KS5t0RFyL8Uh+vj4oGkjmZCgcuZMmPrB7jY9KgqGl0vCQ74kKG/Mi6v/yD0dPGBz7dDkmiGDEgO7YHCFbNYAUDOYhM6f33mQXu7JSatRxaAH6UH5psydCBMSBMq1HidYAAQkCicW7C21EepE2HRTiY1ekumZr67EVoQA1NPOcu9IeWP3/ciGNncBoGXUaPwotBwxJrogwcHrrVYIjhX0ziM6m6BnbGVXxyGPDlZDW6X/SUnleHR61fg5RYihrGktP5iNLdHh6yJKDNITfKsOUtD13P5iKluz3mk4sMqgmIvGBm++xMk1G0pukPNpiC0b/3wA0gr8Q6rGXNCTokEfQ3Nw1ENRgkrgJKVLcK+K3kM3R8K/kMHfsCc0qVC8yy42vy+ect+X8x4dv2ULOSKdOZDwjHD91Kh6yKBqlfcNtHyPhJMCx6Y1R7Vsk4vwixqO2DyviJq1+XveAjbqbST1wbjUaj0WicwD/55Q4qiwHPggAAAABJRU5ErkJggg==",
    _d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA3yCf778/jxAwf2/Pr2BfUICp2FVVAAADUUlEQVR42u2bS5bjMAhFhf7+tsP+F9sVd1mJBLLTI6Mc3Vmd1CDP8ATIRHU6nU6n0+l8RPSTWQDwBzu7MPmoGsQHh4Q5eNUU+mGxAhitWsE7PGVpIyxUBsXJj0oM+BHSE2yz+CHwR8mFhOOUIPY01pD5YDRXQRGaXkOm45k505WSQQlkyOwx7ql25RgrUEmuA9TOjM0pOXSkxNox2JoSDaWNk5CmHB8BM4wiQqqApFM4YI6mQuoEJYYVSUCokDqbEoKGSkCUw0+wUpLL0IC8hDSUXBoLNBFyhYwBxZGA/LcQpwTguYAkIQ2FZGEDctqiuAXkhYRzSAJqj3/AgvvrOz2yroQYLulGdTeAGVZfChm4XsCqW6FWH1mVtMNfpdk9nPaytlr9BmlFcUY6h7yoZpbSwkpJpGmzE6tCoBasqO7E84foYMeakOkIpSyTTGyea0CTC6FaDVV4J4F1ujlS/qSrmmh5uRPHOX1AIoSeBhsWLOpOZu6RQvqDsfpBpB/diWUSa0UihDMCiBLCTd7w8n3F6lPk3K7uhKnM61urwht62D+dZAqBmAJChJCA7NcNg0whOg8IL8Qkqf7pL0lCgDS9cyGEFm//m4hBUiMPZcfnsS7EvWr6TNubWd3JUjbvLhMCTEB0SkUrqP01RfPusRBCv2lIn4+CBpKpmApdLmSmR5aGdE0aBTWNPi/JHnMhjh5Zj7d/MHLa+JhPt65IFMMGJN1SRCtmsFLu/Umu5fMPxAKP7JSapBxaSoWRvzRZiqEDUkAyrUaI15WK6sVKetmNeTuaB2mRYZEcIHVaF1OTJpdHESQ08TkPpj+0ydnshbedlJcw6GZoYF4MmiyxViSAk3KJXbvNDm8mCUSqrIE9Y2CvSyK8naxG9oue2n11PGq9i7+JJfzVG3F6PqLo7fCQxYS81zwHGxJsfctD1t1cova0R/XO0sJeDb9gZjU503gErWmGiycdjfy9B2oAuhLroZU1p2qtg7D51bWzeHasAhKaWwV8KvkOHU8l36FjX2AuaXKBuXR8awum37jk/8MKH9tDzEomjzZfEI5/aIeXOEGD1Al++QoZT7SBqjdGsWcVjw8zE4vWflCZfuIa3LwXfIDFNPoT106n0+l0OjfwFyW28qqODgtyAAAAAElFTkSuQmCC",
    ud = "/assets/png/35-e05f12c6.png",
    md = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
    vd = "/assets/png/OB-af2b5c19.png",
    hd = "/assets/png/OBActive-680b9e3b.png",
    wd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAC9w+m9wui9w+m8xOq8w+i+w+i+wui+wuu7w+e9w+m8xt+9w+m9w+m9wum9xOu6xee9w+iyk7V+AAAAEXRSTlMAf99fH7+/3z9A7xCfb49PMCWVK40AAAExSURBVHja7drbjoMgFEbhDVKPtS3v/7LDDLGZg4DGOkJd363Jb1ZMTAwKAAAAAAAAXs3YVar1M1rmEEJICSGdU20MSc/obvKQndj1qi0zV/EIeVmIMcOWmb5pjDjHh2yf2TlEq5h+aUivApr/CrlIjE6EpF+0dW4hxhvky2C8AkN+vroq6xFCyNlDRuX08ZBeOaMEVGoyiHNIyETHQ7SsQQghhIjUYWWF2DBCCHmzEN9ACCGEpEMuXrck5PJbn1GITAIhUTUhSfapibEFhUSdKmT61A0xSjVFhKQeS+cuHx6in1IhxsgM49xzCDEySYQ4behUjhBCSg+5qqBB5j2Ul5i52W9uytk1pJUFsj96I4SQLENa526TxtaRT7mGJH6q+XsHQggpJQQAAAAAAODUPgB3i8qTZ1myqgAAAABJRU5ErkJggg==",
    bd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAf9+/XyA/QB/vEJ9vjzBQTx9ZcL4AAAEvSURBVHja7dndboQgEEDhAUXF/Wl5/5ctDSXZJgJrXSus57s1mXhiHGMQAAAAAAAAvJpxq/Trx2hZQgghLYSMXr8xpDxGj9FdduLW67eMuUhAyMtCpmneMsZqPYl3fMj2MTuHaJVjnw2xKkH/V0gnOboQUl60XW0hJvh5UWYTNBjye3X1LiCEkLOHXJVn8yFWeVdJ6FU0i3dISKTzIVrWIIQQQkS6tLZCXBohhLxZSGgghBBCyiFdMP7pg2grCpFoIaSoI6To4T5yXEMhWacKib+6KUYp3URI6bGM/vLhIVpHpRBjZIHxPmoImSQqhHhD6lSOEEJaD7mopFmW3VVQGHNzD27K2zVkkCdUf/RGCCFVhgzepyu6Dp58qzVkacdmNzMhhLQSAgAAAAAAcGpfIRTJWwn8aNMAAAAASUVORK5CYII=",
    Cd = "/assets/png/PP-8da0b811.png",
    Bd = "/assets/png/PPActive-d332e3eb.png",
    yd = "/assets/png/SABA-60803003.png",
    Ed = "/assets/png/SABAActive-4b811445.png",
    fd = "/assets/png/SEXY-05174410.png",
    Rd = "/assets/png/SEXYActive-a1f08d17.png",
    Sd = "/assets/png/SPRIBE-6f001948.png",
    Id = "/assets/png/SPRIBEActive-c13f06df.png",
    Ud = "/assets/png/Spribe2-2765ea87.png",
    Gd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZfdcdswDIAhX96rThBlgjYbyBPUnSDuBHYmsDxB3QmsTNB2ArkT1J3AzARRJ2ABGSwhmpLYu7aX3OG7w1kkAfAPgGQARVEURVEURXlpZO7BWlviz1uUHMVkWVaLMepfcPMapUV5RPmCeoZ1lsJvzr9HHD8IPwX+FN3E3I99lfD5E+UgbcT8OcQ24HRRaWMvOaHkbiIb54kXRjrNgM5GLKZ2vkWfHZi7EDqnAT1L4zNWrlifTuPAz9S/hnFok8sJnYpveQrD4ubeQyKzYBG3eD1z8Bt5F7F5zdJy+zoYp3CgML0RfXcwzRbNyOYTt0sOowvfErcJiVvYFvyp9EC7lgT6pxbTM1M6A9TiOU8xoE20or3mBdCOb1BuR2xbmCZFJyRp4RLaRC3aK5lQiRiYXtAPSMeFngmr1BAzDo17MWmTuBEXr49Bf06xjPIRfBjtYJo7qnDgc3QbmxN19kL6t4YdOxsprzwmS2zDpdVRsk4TL4LdZpyf1BL7JJPaDpfYgsZ/JzbeCOXDAzdpcKjEleDDZJtw5YuLE4tDJ085aNj/54idYT0n8ZxDw++RUw5vYmeD2m/9TZB9GdisWWfsJpbcXkT6Tm7u2JrpZUcxXFifB+/F+CbQp2Sb062N3EDL1a0SJ1VCOkfxXKQYUDhVKHQy3S65vh//xMkIbhOv4B8iX3a5iEETLOJ/UojnY4rBFZw/MVZwTqY9bsSA/2JNcvKXeMM5sBJ94fxdiZUdGDkfugcbL48n679QqzAhQ4SPRvT1EtKml1iiivi5gMaveDdzPgV6WxZ8AvfuvwK3axgPLyrP36D/Bv8K53xwdgdaU+CHfMtSSjoPQeFwfqJkVvxReYl0lZCuGNI+lZ8l9DlO4SQ/qxVFURRFURRFUVL5BQGB2fVH4otlAAAAAElFTkSuQmCC",
    Dd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9xOm9w+m+w+i8w+m7w+y9wue9w+m7w+S/weq9w+m+w+i9w+m7wue/x+e9w+e9w+m8w+i9w+m8w+q8xOq/xOq9w+jPmQmvAAAAFnRSTlMAn3/fPx9g7xBfb7+PMCCAr7/PT19fakoX+wAAA0xJREFUeNrtm+tu6yAMgE0MgQEht433f9RTqSGQy5qQMymOxPdzWiu+2saGplAoFAqFQqFwCjVqZhD9CzkYprmC56G4Rb9hYBweBbfS/4J8kEtt/EfwB55Ajf7F41W48adAB5RRdlMS2DPGun7YFE0LdHHoU3o7ikSSV/1DglLL1EIr2CDq1EUSrZTWR37fYwWjnl41zjABHxCMuMl5BNI0cXUGYwMvKpImzGeBzAGMc1A0UKH2ucg2TS8qs5dDn49x0QSJTPfMXwETEwMU4P4agwIRGiiFxqjQX6SKH4IkkFyK79DN/V1sURDRsxRN2On1GTohgYa/2RfhE2r/FYJOSFxIo30RPyG2YfDwwpIJSR1Wek1ESSohwRCQayJQEeklTVjoVRFFZFDR03kQroqAoZFb0zK+c0TkQqQmkVshMVSGSBtO9eu3uBMe1nRahJv1QcRQKJKpROyhCAZ8AIObpXDAmhYxHops0atOxOA2Ylo0+SJ6PRv0cCfDtP/kiyBfbRgIdxF3UpkhEmnXb3In8cPMF/F6OeVADqREpHugiP4KMPQB+0ARATOim0NCRySu4VgkwpZ/pbBrDdOC8kSUDLN7sv0OcCfd2YYodv+BJ/NaB/cR56RMkSqKJPPancQ56boIC/PanbhYqJdFMKTnrchpFXkiXSLSeAITyrzmKkvEeR/9Kwq1PheJzBCJAcEks77hTmJL4OdFVJdOjZzEkT0ercyBiK0mrJGLw66hcD5Mv+jhOdNvzCZO5H4uTikmRyR2QKQwaC1vsXWmyPB+MY1STydg6bJEmAIARyggMc1NhojU77SkFJB4KW3PishKTZenNJrhRPyaud2KfO3QrC6BpQAiaD/xk/NlaE3vaRSIvfpQJLWn0gv3Hhtoz4q0ntijKOtHyZg7FknnLSRTIG+aOEHxYxE+e8sGiBFNvDgQUdbT9QBo8JyIaqMyEvSIdZKK7P+OgWp9BER3INK0xif0pParBdVaZBy5cwDO8dp20qdIQn1wi8ClCPO/0RNNq5kaz4hIIvPuZxV1JCIrutWx4LNIrx+i8VEELYFrhv8VQaapV/gKjUGkGXVlGbOV/moek1ApTTUQeAbrbxB1R7rlFQqFQqFQIMw/kBTjJLUeQYQAAAAASUVORK5CYII=",
    Ld = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAX38fn99A778QP2+PMK/PUE+OIRLAAAADPUlEQVR42u2a646zIBCGgeFYULvc/8V+TVcED63it4mvCc+vzaY28zgzMFpYo9FoNBqNxiHc00urVHxhBiu9dux+OB1UXDFIzW6FDiZ+wNzIhdv4FcXZHeDvkrq9irbxEIoYMi6sWkJZKWVvh1XTCIYLzavKhh8qJB/C3iQp3JQW3m2Y8tLFgHaKiBn5+Jg1iV5eXE1I+lqAEtykppcwTYhXoLt3GUKayFjFu/KeU1I8Q4HHWowoywtl9iIV67GUr1Mg072MZ1CFiWUI6HiOwTEy498IG6NT8SQi3wQDUFzusUE/7e+0pgzaA67BJfJwfBYnJazTv2yL6BG3fQXhpCSFIrdF4git0xDZiwCTEp4iPSfiDEpKVErIOREmQPaSLgV6VsSBDCo+3dCzIsxi1NYYBq8RMTMRDlFbqTBchYjII9b8K65Ep5gOi2i7fBCxCE0ytkjYFVGJ9duggPCANQbxsyuyxi92IskuI5dFVy+SE0AI3T6M60+9iNKLBUOxq8grqakQyYjll1xJvpn1ItHPpxxWA5SIoRuKeJ6QKibCDUWITVA/pQRHJMewL5KR8/8irFrDGFCdiEtj46NYfgd2Jf3RDZE2P/Ao5rWeXUeekypFRBKZzWtXkuek8yIyzWtXQrlRT4uoVJ6XYsYo6kT6QqSLABPKFLOoEqEYs79A6PWpSUyVSB+LilQYb+TTlqCPi7i+nBo1xCN7frSyOyJBjARrZg+7FuH5sPyhR9dPv7y4/MEuZxhTUi0S3h2CMGjN32L7SpHhfTHQj2/pphqqEpGOMUZACcllbitEjP8tS6SE5JfS4aiIEW6cVDA2wwSZFPhahG/QLSYuA3MCzccRXvNjKMc7jcLyXj0X2bFH2Qu3jg2IoyIigh1FWZ6skXRExPWoRzS7PEHpfRE9eZuOgZFNIu2IuBBxPV4m6piIE1lZAXqMfbInooPBP8JM/Y5INz+LbaHWqxliKfJ8aqKXImkeehNLDNA+uIbUXETGT1jQsprg6qPIDY7Fz+BuT8QI3O6Y8V3E+ptofBVRAeA1w/+KKOnRO3yBV0mk+/EiSBmE591tCqqkEwPAGay/gXgPveU1Go1Go9EA5h92vbogjIu89gAAAABJRU5ErkJggg==",
    Md = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAARVBMVEUAAAC9xOm9w+m+w+i8w+m7w+y9wue9w+m7w+S/weq9w+m+w+i9w+m7wue/x+e9w+e9w+m8w+i9w+m8w+q8xOq/xOq9w+jPmQmvAAAAFnRSTlMAn3/fPx9g7xBfb7+PMCCAr7/PT19fakoX+wAAA0xJREFUeNrtm+tu6yAMgE0MgQEht433f9RTqSGQy5qQMymOxPdzWiu+2saGplAoFAqFQqFwCjVqZhD9CzkYprmC56G4Rb9hYBweBbfS/4J8kEtt/EfwB55Ajf7F41W48adAB5RRdlMS2DPGun7YFE0LdHHoU3o7ikSSV/1DglLL1EIr2CDq1EUSrZTWR37fYwWjnl41zjABHxCMuMl5BNI0cXUGYwMvKpImzGeBzAGMc1A0UKH2ucg2TS8qs5dDn49x0QSJTPfMXwETEwMU4P4agwIRGiiFxqjQX6SKH4IkkFyK79DN/V1sURDRsxRN2On1GTohgYa/2RfhE2r/FYJOSFxIo30RPyG2YfDwwpIJSR1Wek1ESSohwRCQayJQEeklTVjoVRFFZFDR03kQroqAoZFb0zK+c0TkQqQmkVshMVSGSBtO9eu3uBMe1nRahJv1QcRQKJKpROyhCAZ8AIObpXDAmhYxHops0atOxOA2Ylo0+SJ6PRv0cCfDtP/kiyBfbRgIdxF3UpkhEmnXb3In8cPMF/F6OeVADqREpHugiP4KMPQB+0ARATOim0NCRySu4VgkwpZ/pbBrDdOC8kSUDLN7sv0OcCfd2YYodv+BJ/NaB/cR56RMkSqKJPPancQ56boIC/PanbhYqJdFMKTnrchpFXkiXSLSeAITyrzmKkvEeR/9Kwq1PheJzBCJAcEks77hTmJL4OdFVJdOjZzEkT0ercyBiK0mrJGLw66hcD5Mv+jhOdNvzCZO5H4uTikmRyR2QKQwaC1vsXWmyPB+MY1STydg6bJEmAIARyggMc1NhojU77SkFJB4KW3PishKTZenNJrhRPyaud2KfO3QrC6BpQAiaD/xk/NlaE3vaRSIvfpQJLWn0gv3Hhtoz4q0ntijKOtHyZg7FknnLSRTIG+aOEHxYxE+e8sGiBFNvDgQUdbT9QBo8JyIaqMyEvSIdZKK7P+OgWp9BER3INK0xif0pParBdVaZBy5cwDO8dp20qdIQn1wi8ClCPO/0RNNq5kaz4hIIvPuZxV1JCIrutWx4LNIrx+i8VEELYFrhv8VQaapV/gKjUGkGXVlGbOV/moek1ApTTUQeAbrbxB1R7rlFQqFQqFQIMw/kBTjJLUeQYQAAAAASUVORK5CYII=",
    kd = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABgCAMAAABvyc0vAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAX38fn99A778QP2+PMK/PUE+OIRLAAAADPUlEQVR42u2a646zIBCGgeFYULvc/8V+TVcED63it4mvCc+vzaY28zgzMFpYo9FoNBqNxiHc00urVHxhBiu9dux+OB1UXDFIzW6FDiZ+wNzIhdv4FcXZHeDvkrq9irbxEIoYMi6sWkJZKWVvh1XTCIYLzavKhh8qJB/C3iQp3JQW3m2Y8tLFgHaKiBn5+Jg1iV5eXE1I+lqAEtykppcwTYhXoLt3GUKayFjFu/KeU1I8Q4HHWowoywtl9iIV67GUr1Mg072MZ1CFiWUI6HiOwTEy498IG6NT8SQi3wQDUFzusUE/7e+0pgzaA67BJfJwfBYnJazTv2yL6BG3fQXhpCSFIrdF4git0xDZiwCTEp4iPSfiDEpKVErIOREmQPaSLgV6VsSBDCo+3dCzIsxi1NYYBq8RMTMRDlFbqTBchYjII9b8K65Ep5gOi2i7fBCxCE0ytkjYFVGJ9duggPCANQbxsyuyxi92IskuI5dFVy+SE0AI3T6M60+9iNKLBUOxq8grqakQyYjll1xJvpn1ItHPpxxWA5SIoRuKeJ6QKibCDUWITVA/pQRHJMewL5KR8/8irFrDGFCdiEtj46NYfgd2Jf3RDZE2P/Ao5rWeXUeekypFRBKZzWtXkuek8yIyzWtXQrlRT4uoVJ6XYsYo6kT6QqSLABPKFLOoEqEYs79A6PWpSUyVSB+LilQYb+TTlqCPi7i+nBo1xCN7frSyOyJBjARrZg+7FuH5sPyhR9dPv7y4/MEuZxhTUi0S3h2CMGjN32L7SpHhfTHQj2/pphqqEpGOMUZACcllbitEjP8tS6SE5JfS4aiIEW6cVDA2wwSZFPhahG/QLSYuA3MCzccRXvNjKMc7jcLyXj0X2bFH2Qu3jg2IoyIigh1FWZ6skXRExPWoRzS7PEHpfRE9eZuOgZFNIu2IuBBxPV4m6piIE1lZAXqMfbInooPBP8JM/Y5INz+LbaHWqxliKfJ8aqKXImkeehNLDNA+uIbUXETGT1jQsprg6qPIDY7Fz+BuT8QI3O6Y8V3E+ptofBVRAeA1w/+KKOnRO3yBV0mk+/EiSBmE591tCqqkEwPAGay/gXgPveU1Go1Go9EA5h92vbogjIu89gAAAABJRU5ErkJggg==",
    Td = "/assets/png/V8Card-b3317c94.png",
    Qd = "/assets/png/V8CardActive-0e4717f3.png",
    Vd = "/assets/png/YGG-f24e929b.png",
    Od = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAwCAYAAADn/d+1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL0SURBVHgB7ZuNdeIwDMfNLXAZIRu0I2SEbgCdADYgG8AG0AnaDXwbcDdB2IBu8D/rYq4myB/QQJNav/f8eM+SlTwpjiw7KCUIgiAIGQCgMm1lWoOWJ0bnycq0aQsao4T+MY6d4Zw1o7dg9BZqJPxQ46Fg+n4yfQ9KuD32ddXlwOg1jF6lhOswzpubtjPtkZEdQs6mMYlBK017NW2pBD/kIMeRDTmuI9eMw2tHvmbkbx0bJU5nkQSFoxOM/083nIQMPmEfHHnDyGeOfA5+lklQuniceYRktMoqPA6dgV+FETQjKP9o+CGbhRI+wPmrxBeYg6e/8Th6h7jNUgnn2KDEHNgnGjIz4hgn1bg9ayWcEno60c6WLfpHg1lSp9zTtwYfSZgcNAvo9RGYg71OFbiOm/hrlRs4zxVNJDCFDeIW8eR/tLexY0IzsWLuRaucQPvUhxxZRsZPEWcasUFVvQ6Mz+fVhbSkvfSMnSOdxSdsjGaH+NMg/nQeof2mwhm3wuUsnfFF4nVJp1K5gbSE3aA9dArVJ6+2hWxUiOeeDQIrsGywgdG4jq1j59rVmIZU6+fg8oKw7sHGoHLFYE4M7RP6bto+QZ30nieTSd0V2L7nC+y8D2l2TNQXgPbjBErWD/a3Mq1MHP5LtcHYR65Rmp+NtZ3Cb9UG8Y+yD4a5xpvKAfA7tjH+nY3ggqSLNpFTYdjgClQu4LIdXQoE5QVaaWnbt0q4xnGJTKuv8orA7FQuIG01pK0TfTXLNGCfK/w2TmA04uTxuiLgOYq1TiOZWww+gn/FUV/J2C5T9J3g0AxqGP2sKnWqmGvrkCfE9658x7NNJ3ihU8dFwj0dc04NqUvCgP+ihNCOjq9ar5XQP/C/+5fgv1oh8knO9wZpH0K4kG6phNsB/pNSH7JReA/Ar9K61Eq4HwjXMvJFyb1Bu0xtwOeN0R6/jun/ISeYjT/aAHxhRC9WNkpGG5DvigRkYEhABoYEZGBIQAbG2AOyT+wTBEEQ+ucvFAovRtfUbowAAAAASUVORK5CYII=",
    Fd = "/assets/png/66lottery-05fa3aa7.png",
    Nd = "/assets/png/ar006-28e58397.png",
    Pd = "/assets/png/ar016-960dec07.png",
    Wd = "/assets/png/ar021-fa11faa6.png",
    Yd = "/assets/png/basantclub-1d080abf.png",
    xd = "/assets/png/bdgwin-972c9b8e.png",
    Hd = "/assets/png/daman-91d0d479.png",
    Kd = "/assets/png/game_dice-596db528.png",
    Xd = "/assets/png/game_dice_66lottery-c1b9a100.png",
    Jd = "/assets/png/game_dice_66lottery-c1b9a100.png",
    zd = "/assets/png/game_dice_ar006-723a5cfa.png",
    jd = "/assets/png/game_dice_ar016-0cd09a60.png",
    Zd = "/assets/png/game_dice_ar021-7790cc1c.png",
    qd = "/assets/png/game_dice_basantclub-8e2d71d1.png",
    $d = "/assets/png/game_dice_bdgwin-b709fe8f.png",
    ep = "/assets/png/game_dice_bdtgame-48d0267a.png",
    tp = "/assets/png/game_dice_daman-160c8c5a.png",
    sp = "/assets/png/game_dice_ibdg-e93f7821.png",
    np = "/assets/png/game_dice_lottery77-ae944ff4.png",
    ap = "/assets/png/game_dice_okwin-59c5bf57.png",
    Ap = "/assets/png/game_dice_pakgames-02617f51.png",
    op = "/assets/png/game_dice_poppg-5464fb7a.png",
    ip = "/assets/png/game_dice_sit-13373d77.png",
    lp = "/assets/png/game_dice_vbdg-04e417d2.png",
    gp = "/assets/png/game_dice_yjlottery-20918f41.png",
    cp = "/assets/png/game_p1-ba544161.png",
    rp = "/assets/png/game_p2-afac186a.png",
    dp = "/assets/png/ibdg-2ca996a4.png",
    pp = "/assets/png/lottery7-c1301e77.png",
    _p = "/assets/png/mz9-2e74ccfa.png",
    up = "/assets/png/okwin-9468baad.png",
    mp = "/assets/png/poppg-6cd2ae29.png",
    vp = "/assets/png/sit-87f8830c.png",
    hp = "/assets/png/vbdg-3cc23a1b.png",
    wp = "/assets/png/yjlottery-1ab96dd1.png",
    bp = "/assets/png/adv-bonus-77196eae.png",
    Cp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAIVBMVEUAAAD5Wlr3WFj6WVn6WFj5V1f6WVn5WVn5WVn4V1f5WVnpXZn/AAAACnRSTlMA72C/v1DP329wWe0twgAAAKNJREFUOMtjoA/gMFwFAkkgdrMUiLlMASyhtQoCGhgYmKDMFWCJLCivgIGBDcpcDpZYBQULGBi4YOwRLlEF5SQwMLBDmcvAErOgPGBYc0KZi8ASTI4g9kIjEFsFHB/CCgyDF7AaIpwbjHAuIvkEIJLPUrCEF5RnwMDAAmUuBktIQXkCDAyMUObCgY9BGkvg9Dn+sIpCJB9WbMnHFCn5BDDQBQAAbjlnhYlIhpEAAAAASUVORK5CYII=",
    Bp = "/assets/png/avatar-fa220f51.png",
    yp = "/assets/png/banner-32a231b2.png",
    Ep = "/assets/png/changlong_bg-82acfbd5.png",
    fp = "/assets/png/changlong_icon-a1be5291.png",
    Rp = "/assets/png/Card365-92c29778.png",
    Sp = "/assets/png/TB_Chess-33556ef3.png",
    Ip = "/assets/png/V8Card-41c7b104.png",
    Up = "/assets/png/AG_Video-485fd2d5.png",
    Gp = "/assets/png/BB-9414e0d2.png",
    Dp = "/assets/png/BG-7634450e.png",
    Lp = "/assets/png/DG-9f82b411.png",
    Mp = "/assets/png/EVO_Video-d1962082.png",
    kp = "/assets/png/OB-78f06986.png",
    Tp = "/assets/png/SEXY_Video-2c1d2e0e.png",
    Qp = "/assets/png/WM_Video-44cb2712.png",
    Vp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMA378fQBB/758wb1+vz49P0wCBpQAAAYpJREFUWMPtlt2WgyAMhA2/QqDy/k+7YpHAqnuO0b3ju2mhPQ5OJtFpMBgMvnzSJeolCXEtoV+SuFawLymoawkx3cWIM4Cu+EFEH2zdmN8wnbBmN16aVPC3JWxqiNB70lZWAjNQOjXA5FOBLNFOKd1ouEd1lZO2tIqbgLGbmsz/ZQWqHJtcnltBcidZV34UT7p47u/KkEIGVrPc+hkeBApkX365HZuYEdFmZX6gsPRJWebTynRk4Qfqs64WR5elwhDPAgWb81lHUPwhHZnusvTO25wx2ihicifmJN/FNPHB79m1/SUhyVVOoEJTWygVCdVz6CUwcQIVKa/KrPhaH1+bJswrU1FcmE8ePAmyoM4jIxmBcjWvxwIp0rA+VwL4gQJ9GCq07RZER2VjBkpuX3ZU7YzYSus5JXagTD/SBQ0VUNSi2SVeoGpZCa0bPXR6ks4LxoSq2YEyUAmv0jncQGEZGYSg5RF9fwgGKaWzqSNeK0TGU/UaOCO8+W4M//9uLF6SsH9JDAaDwZcfBLs+2PDMjNQAAAAASUVORK5CYII=",
    Op = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA799/IL9fzzAQYG8/r4+fUB/5AFlJAAABw0lEQVRYw+3XyZbiMAwFUA0e4yGp9/8f290k4BDo2si1qcPdmY3ws4UFfXz8ZrU0YYBjK4l+QFYBwOJ9ZAASHE2mDPbha1+kpQGiNJOLYM1Pn6hAJm5kYfT8UnYFb9MqgAO9URiBptjAid5Kk2o4HhVea7AjO0H5LsNIZop1v7MQr5WuOtQck9yu5iK4kWv2mTmbb5MepfC+iJq3ITjOs+JOL9sQMklodOD/1PCoZFHGxY94KM9RFrJoSOPbDokGh0YWkeluxRDpxHgYHE8dgPdRCZMF/Dh5wcD5fN7WEoNiUHuJ15wXj/fbiKagzjlHPOnn87Jo+HpkduFGd05qvYoLP6n1Kvxoi4swutNEOB9xvOC0N7eQxfit3oIKdtxV26OGWp/v8eTc3yUujzkK2PYny0jRiWoXjsVRDenvYhXxgajWL8oRSmYR6oHoBdIT5erBt0VIbusMmTLkHMPmEgHgvhDsKzdpGNz6LRu3aKm5du9boK2vK7DNGjgB8XEf+Peg+N9iYQSaZGOsjpwHmM9BcaBpnEDUUSqrhnz8owGio5lUgBbSUXHxDFaazO3RRO+FAYhm+gGptMgASyuVPj5+sT9eNx7yNjgwswAAAABJRU5ErkJggg==",
    Fp = "/assets/png/AG_Sport-f8c997c5.png",
    Np = "/assets/png/AG_Sport-f8c997c5.png",
    Pp = "/assets/png/CMD-1efb84f1.png",
    Wp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA33+/7xAgn18/jzDPUK9vcI1VLIcAAAItSURBVFjD7VZZtqwwCGxC5kGv+9/skwwdRRP7951jfSkBqoDE+Hnx4sWLF1cotwohkuZ2bXfz6tQ1whnYNole/0bgUG4FaI+8opk341gEbA3mBxKN2wHwjfhrBNdM/hQRHkuQ2xmilIDMDIkxoBdLLkY+cNjaIE1sK2TBxBBzsHCKBrJkJ9vKoxdf5pOA2NW0S+Qee6dFLSMnFerrlrlDeZadrmoxMwogh6OIAIKYLvWbr1pTVTQOSjEpg1ItrK4mmnUYKXNVBadh7gvrtAjQ98yC2ZTcC9vVBhrEaUVymXzWdsB8y2uL6PMpWbg3b/CliCaUQ5W52guFmVHEbcMbc+pZ2DSgLKbLlIYUknTdj0Ld1ixpm/M5wYyCvAcUY7NkfbHblOK5CvZlqqt/7FzI2Z7FwUYLn7B6gxEAEL0NpeeRcp5P994+so+wlK1OuB4mIuoAo/P+b98ooYtrzKs4pFgH54KCSC1Dc87C5SKEx2r3QwrKAur+65uo9xIiRugUjt0X3T6EuFMQZFapdVDNkkzhAVtFdFok8+zOltd9myS//wiC3X52ITfwznCVHJZfmtrk3gLFuy6ltwZst9K4m5hpq0iMLjEW692q4fBXoIXM1lS7ZUKlSMU9zQh6ByT2ua6Utr5ExPokSonNm+xt4QlFWweG3rEOcNza2OznB1g4EPQBuKXnEaoPi7z5wjOcWBDR+HQO0NaTeXXMe10i3YHRWPV58eLFi/8L/wDyhDHUZAnEFgAAAABJRU5ErkJggg==",
    Yp = "/assets/png/Card365-fd70c0e8.png",
    xp = "/assets/png/DG-686215aa.png",
    Hp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAmVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VHQRUAAAAMnRSTlMAP+sqVdT6FWoGtJUKDppIIX9wOr9PGhLF8cqvqo+KhXb041rg2s8v5riiRTS8YSemZ0c23nkAAAKkSURBVFjD7ZbtlqIwDIaDIlAURRBBRMDvb2fG+7+4XfuKLSCe7Tn7a5fnV5JO+tomKUMtLS3/OoOLVsckYrAujGRcRF0qYK6/9sbjfH12WZPEV9SpExA5K25FXyTBhlgfvSTT+GDcf2PM4qHWINHt3evoRCzm1uxMEtMI6y4B3e6IpGVsMSUJ8gxuLkgimPHY8ZlqV/OivZKEj2P0SCLDsscdJzJqiduRioS74KbhkmDCQyiFg2NWmE8bJRbVjiI64577UimwzTF8dGLagbcd6pq2XlyfgqdGCYtAvbYdhwpu2GX8sP0DnGSPGpsLaBi+ggQ7YRORs0CAN9kYO0bdV/dfsZopSJB2L/fUaMf9mOuvuL2TxsbcInRWkHhuExUVzHD7t4d9gXwmT4KP8cgUJChBMTR45gQud3JIdEkGW/VVJHS8DR6RVOCEO30hB0Rw2CAx6UtoBPZbeZg9CK75Hc75ik0lrEaJKjiS2GgZcs/GGOylSxtXTq0uQd6G+/yHD2YY30GzxGipLuEe0YfoF7H2FyVoLBonhWl+kAiMTxI9W0I8l3vMcE4UXnFPiA9s0V2Cn4+18AYSTEwfimE7dIHlE/jm3oZKpJBQmAtxU73uwIJRu0GZibKE+M4Zejcpv3EjSHilrTA4qaKEG+NR0LnULCjiDooUu/TCsXHQQEVC3O8K6dG0+rB/h0Ug7CMydFQlAiTiR5+YmIEO4vlT1fk5IBBQg0RuyjDp+Mu7QEoP5wZik9wNw72XzOAe2Z/+eyDIRbgjp5vp/Q27LilLoE+AXc5c1ROXHlOWQLcD40ZAfGgrrG5QUJWwimPMq5fg9LdYA5sUpVeVwNcOzRNSlfV8U4isrpZDb3FGep3pu78Ipu/SL+vslCSnzPJDamlp+T/4BbDm4GuaTNKxAAAAAElFTkSuQmCC",
    Kp = "/assets/png/EVO_Electronic-3843933a.png",
    Xp = "/assets/png/EVO_Video-9fe2efed.png",
    Jp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH3/fn18Q749vT78/MM+vcEDncIllAAABKUlEQVRYw+3U224CMQxF0ePEuc4FOP//sc2kjBAq8EIsdUqXlOct2ZHxgSRNMOZIIGuEnQs9KllgKEYE0sGQO1snAlmD7aAcGeI6Ccz0xL4TI4WscKvAt5SBRRA1A2SBzcoDPTrSIacZ4zkSknzsCaloLBLthZ7wLIBpwmAX4pY9kd2eiBcMlOmviU5lS6ztjaPfCbdy1/ehGEOCXBN3dEktEYPgfZ5TS6TlxB8UU2u/j/Qt8ZC2Pm0Tp5jGJPqQnhmUaP5MIsvGk6zSzAYJh82WmNHIkRNZVRfbRPef+BWJGkIQ+08bDpy4HZAizeWYZ9AwkfiSx/vOfCUVDCDKpybBGNXzIT9jnPODSHK4MZmWRowm/m4JMywEf/ePTEhmlyPsSFEtER/oCxPZNiByeltMAAAAAElFTkSuQmCC",
    zp = "/assets/png/IM-27e6c184.png",
    jp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA798gf59fzxCvUDCAb0C/cJCVSccfAAABRklEQVRYw+3WS3LDIBBF0dcN5muR5O1/sXFcBBvHkQaggV06I81uoaZLwuHwzsoSVUjxccnYQTgr76gzmOwsfKBnzGQ8n9CJB3HCpyRNK/BfDlMkcueGEa6QGfNQrvITbis3WAwyyg0Sxm+T1GHcYjL1GEoN+OBFblcrhu5siiGZPAGWF7cFcQ/vr2DE0iXwyR8a+qu8YETsEvWJPgD51ogY4btEa5wAlEnDkPuEcQBOreFYCUawSzC1xvk6mWpmQjIQfGvYGQnpExTTNya8KH1IUE1bijYZP+/SGvaNUhtx3uqZunj1qU5mdPXKfSKzLZ6071EkM4YoxSW9jjd9/G5z+apPWpJQMcZyk8OYINygBnsfw2KY5yp9jZ8cOK5Ir/LDCSThU9IV9vib8gYz2T8RsZjMuC6iNmAHeYleSNG4FBwOb+wbmLlAND498K0AAAAASUVORK5CYII=",
    Zp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA3yC/EO+Pn3/PP69Ab2BPMF8oYG5QAAABWElEQVRYw+3Vy27DIBCF4cMABuI77/+wTWdMXFjUEphFVX+rSEk8hp84eDwe/xTZeFi1KvBbiXWESnM8YIoXPCq5yDQw9pphFH99AIy9mjGhjmzQC8Ai6/kWoghayH2MTSMMvzovQ7KBMw4DN0cdLynehuyiPrtvI2eijpYU6dWGxGb33bIKyynSjSp8DLKBgrjMPSmKHSQwE2StVeY8xV6MGB2T80ytKUKWgkfm/N0pEJonlCnWIgW1L6JM4YoUrhxhDaqMeQrKF6FeQsatjSmoSKGyU+rlh19jkxTpGejy46QIQkL5W1PIgZ3zz/nGFOpHiinE/MdMqr6F5a+mFJaMoWnWkTmA2OSthGpNcWlHBblwkB27MqA1RacJ+FTcLgaoFXX8mUL9IrgXWG1shy5oJ5gl/c904dof0ddnNQnoguw5waALfR52gz5o0e91KO0NHo/HX/UFcAY1Dp7l7Q8AAAAASUVORK5CYII=",
    qp = "/assets/png/JILI-9699d385.png",
    $p = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA3yB/72C/r29fz1AwEJ8/j3Cac4YBAAABkUlEQVRYw+2Wy7KDIAxAk5AKohSb///Yey1PrTvSTccz40IXHhJCAtzc/DLRWWQR9tat8AWCQenAmbQNhuUEGlUBebkAFQN5pBC2iHKAFzWDvHkCODkx6xgWSVCW6TuISxBXCiYFBbYgmqLhFapVShDXCjHDaeqCuFZwGK+mFkSvwMUrhdEHcSjatVYajhnWEkTdmPZfkkwcUriuNEOv2ABAMm5IYVu6l6lXUJdEO6TwNduE2Cmm5NfYDK5LNuI7xdxvPg8paprovXLT1h1eECUzpKgtYkuKFsQiIbCGgvPgIWyK9Mn+eyaNRGFOu0lb7GqBkYgtr36waLfUqZLiUYN4iggFVihah+1U+zKd5nyyp6x0Yw2E2lTC3E926zMnbEvtapD6QwkQ8ikhSViaduU4VJsrTOmUoBRYZ3xjGwzx3XON7m3q1JjW/dEdrHsVVV511jZQ55JT4D3tkXUvOec7AdpJDiyKF85rZlBiYbmElQxth894Ak3Mh4QNKEOPgwRNgC+wOutZhNG6CDc3P8wfrYc63x32jvgAAAAASUVORK5CYII=",
    e_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAH79/P2Cf31/vEK/PUI9vMNs/aQQAAADgSURBVFjD7dbbCoMwDIDhRmNsdc7l/V92gQk9uUOoF27LdyOe+NES1BljjKn1vKtzCU758yWILu8SC1F+hgR+nuAnOv/6MWfUJbrMhUVfvMmxukCVGF1mYHEFACdkcy0XYDggsQEpsPjKBCCWCcQpu0BAS0KUCafQmLgNqcMT9YicOjEw/0pi9t5P9XL7TVAmQp+Z42TFRGFUJWp1opw0DG2JMIo1TYg1jvcEyNyWIBfBzlFiPmfCYwJcNMk+cf5NCo8koioB+v+H3kXNiYWISzMt2oR2xeSGMyWMMeaP3AHOtTHtimkcPAAAAABJRU5ErkJggg==",
    t_ = "/assets/png/PP-0e056399.png",
    s_ = "/assets/png/SABA-7f113dba.png",
    n_ = "/assets/png/SEXY_Video-7c170e2c.png",
    a_ = "/assets/png/SPRIBE-475719e6.png",
    A_ = "/assets/png/CMD-1efb84f1.png",
    o_ = "/assets/png/CMD-1efb84f1.png",
    i_ = "/assets/png/TB-e56f7319.png",
    l_ = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAA0CAMAAABGrB3WAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn79/P+8g3xBAj4Bfr29gT88wjADq+QAAAZlJREFUWMPtlct2hCAMQHlIAio+hv//15JIy6lHu0lm0/EuPEwWuYQExjw8/GfSkjGUEva8JPMG4lSzd3CC9wqYKaoeERYi5HGu+Hz4UPG4pkK4oUcGexSidkozwYIO7GoOsNfMxms5sNyAsFFLNoU23BJeib7iubI/0JYzr3xjNkuNWXGrASDyytV0Q//JKw5KR5eGE7qCWuwNsfIK6ncUFhHoJO4Vxom7sVHeS8VyrJJ4qMa6SXOlSNhyB9lJcV53VgSslApSOJeySy/eeFJ0fKsTRQpKdKsoU+uJVDGfFegIdqRjsrSraAEIx5WgiG4vupMfD3EveF7cjSKxgmdOfC/iX4oofkH48l4rLCdfKWpE1Ka6k8KmypZLBSiKRgblTHf3wrfTkj+1GK8U3APkUhTKGK8U+1yngUuREpFfiqaA4Rtof+xo5LwCOZqih5shgFFgLRULZ0W0pb1gao6TYg1aBibhSQETC0JXioHcFKP13uZQGAdGk9Wzgj4NHIw2vxTBDUafTIrFVewyRPMWXkvd+sPDJ/AFpxQtXW2UHDUAAAAASUVORK5CYII=",
    g_ = "/assets/png/V8Card-c1c440ef.png",
    c_ = "/assets/png/AG_Electronic-03f820a8.png",
    r_ = "/assets/png/AG_Electronic1-fb644ac7.png",
    d_ = "/assets/png/CQ9-3b94baf9.png",
    p_ = "/assets/png/EVOPlay-4cdf61cf.png",
    __ = "/assets/png/EVO_Electronic-2a6e1e54.png",
    u_ = "/assets/png/EVO_Electronic1-0b70c91b.png",
    m_ = "/assets/png/HB-364d5fd0.png",
    v_ = "/assets/png/JDB-00c7ecd9.png",
    h_ = "/assets/png/JILI-fc25e141.png",
    w_ = "/assets/png/MG-4c0fde71.png",
    b_ = "/assets/png/PG-b65111e0.png",
    C_ = "/assets/png/PP-287ad2af.png",
    B_ = "/assets/png/SPRIBE-213b53ad.png",
    y_ = "/assets/png/TB-cb1a5779.png",
    E_ = "/assets/png/5d-4be64165.png",
    f_ = "/assets/png/C16Game-c7379dbc.png",
    R_ = "/assets/png/LiveWingo-d0d72b4c.png",
    S_ = "/assets/png/News-a509a5fa.png",
    I_ = "/assets/png/Popular-bb87fbaa.png",
    U_ = "/assets/png/SWZG4d-6477f313.png",
    G_ = "/assets/png/Safe-a1212ad1.png",
    D_ = "/assets/png/Sport-47689a9b.png",
    L_ = "/assets/png/TrxWingo-7fc426b2.png",
    M_ = "/assets/png/Vietnam-4fca2636.png",
    k_ = "/assets/png/WinGo-749c393c.png",
    T_ = "/assets/png/ddwz-90261a9a.png",
    Q_ = "/assets/png/im-45e0b680.png",
    V_ = "/assets/png/jswz-4ba805e1.png",
    O_ = "/assets/png/k3-3fb4362a.png",
    F_ = "/assets/png/k3_1-5457db07.png",
    N_ = "/assets/png/saba-8b068188.png",
    P_ = "/assets/png/slot-20a47c04.png",
    W_ = "/assets/png/AG_Sport-deeb7dfc.png",
    Y_ = "/assets/png/CMD-dec62234.png",
    x_ = "/assets/png/IM-e6e49b0f.png",
    H_ = "/assets/png/SaBa-b6e2edce.png",
    K_ = "/assets/png/Wickets9-92dc19af.png",
    X_ = "/assets/png/bg-edc23a85.png",
    J_ = "/assets/png/bgActive-805fae0e.png",
    z_ = "/assets/png/bgActiveOld-0e6f6732.png",
    j_ = "/assets/png/bgOld-d9a87831.png",
    Z_ = "/assets/png/chess-9a2d9c33.png",
    q_ = "/assets/png/chessActive-53643ac1.png",
    $_ = "/assets/png/fish-2be0a575.png",
    e1 = "/assets/png/fishActive-aca8b68b.png",
    t1 = "/assets/png/flash-77bbc5d6.png",
    s1 = "/assets/png/flashActive-ef7a14b3.png",
    n1 = "/assets/png/lottery-49847eb7.png",
    a1 = "/assets/png/lotteryActive-c43af489.png",
    A1 = "/assets/png/popular-40beb97d.png",
    o1 = "/assets/png/popularActive-168afcaa.png",
    i1 = "/assets/png/slot-a9a2f416.png",
    l1 = "/assets/png/slotActive-b5921bd5.png",
    g1 = "/assets/png/sport-3c47e41a.png",
    c1 = "/assets/png/sportActive-0235eeda.png",
    r1 = "/assets/png/video-727f5ef5.png",
    d1 = "/assets/png/videoActive-eb4fe331.png",
    p1 = "/assets/png/avatar-fa220f51.png",
    _1 = "/assets/png/icon_BetAmount-59c2a697.png",
    u1 = "/assets/png/icon_online-518ea9dd.png",
    m1 = "/assets/png/icon_sevice-1ca64bcf.png",
    v1 = "/assets/png/icon_user-505fe3f0.png",
    h1 = "/assets/png/5d-f8ff113e.png",
    w1 = "/assets/png/k3-a4a42715.png",
    b1 = "/assets/svg/message-8d1fb933.svg",
    C1 = "/assets/svg/search_icon-4452570e.svg",
    B1 = "/assets/png/top1-573e2e29.png",
    y1 = "/assets/png/top2-40f62dc7.png",
    E1 = "/assets/png/top3-31e06806.png",
    f1 = "/assets/png/trx-6b43aee9.png",
    R1 = "/assets/png/wingo-7fed1973.png",
    S1 = "/assets/png/info-bg-8b1ecf80.png",
    I1 = "/assets/png/loteria-0ccd41c5.png",
    U1 = "/assets/png/5D-db0ff51f.png",
    G1 = "/assets/png/K3-3a0ce16c.png",
    D1 = "/assets/png/Trx Win-8e1892e6.png",
    L1 = "/assets/png/Win Go-08328865.png",
    M1 = "/assets/png/XOSO-43295388.png",
    k1 = "/assets/png/d55-92bf4299.png",
    T1 = "/assets/png/d56-381350f2.png",
    Q1 = "/assets/png/d57-59e91e51.png",
    V1 = "/assets/png/d58-b02f0617.png",
    O1 = "/assets/png/k310-1fc41fc4.png",
    F1 = "/assets/png/k311-2acf4e28.png",
    N1 = "/assets/png/k312-126dcbfe.png",
    P1 = "/assets/png/k39-707408c6.png",
    W1 = "/assets/png/trx13-30f132be.png",
    Y1 = "/assets/png/trx14-af832a85.png",
    x1 = "/assets/png/trx15-5500af52.png",
    H1 = "/assets/png/trx16-27318f43.png",
    K1 = "/assets/png/wingo1-26adecc4.png",
    X1 = "/assets/png/wingo2-7620426f.png",
    J1 = "/assets/png/wingo3-af2ecabf.png",
    z1 = "/assets/png/wingo4-c325a189.png",
    j1 = "/assets/png/luck_bg-62bc96e0.png",
    Z1 = "/assets/png/minGame-8928b3ff.png",
    q1 = "/assets/png/notice-ddf69f91.png",
    $1 = "/assets/png/profit-56d94e8f.png",
    eu = "/assets/png/promp_bg-c1dabf59.png",
    tu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJASURBVHgB7ZdNTsMwEIXHLkj8LcoCIVaEG9BcADgBcALaE7QsWQBFgjXlBJQTUE4AJyDcgKzZ0BVIIGzepE4IIW0d2opG9JNGduOx45eZTFyiCRPGFq11FXZO/wEIdfQXju08SfllJ9YvkyV5Frwd62/QX/PieVXYSN6vRDqHFG3mjiTCr57nYFcNWC3oD5/NlGs1smCKRsCHUjtSiKCvlCqjqVNGTCHiDEmL3HrKtWPMSUvtNqwihOCWRHL06fT0UijVXjo62idLOIosUpjNYfE9NI4Z9rGRq9BXStmcLZX8fmtiDovyaDjsYk8t7kQRfjo7W6fOd62sER0IL6J/s3x42Oq3GkcRET3uMuyI2Bh8ualTHzDnAffnhz5IHeConoRimegd1p2UKEe/0Ydj1WLRIGqY/2Dhese+ZAnu30CzBvMpOz6sZNaIiASr9/cfKfxRKFTIAk7Redct4SGddPNRWl/Mue6WTTrHwYZ9GIu+yDCNfVmsnxyIBM90wv+NlYMDnzIwLWXX9C9I2aABwOa5Cl9ZuDbZNyxSSSLBi/V6G1Go4A3bCloYZeQtvXoGaBQ1GpxVCx+n16CgIfJ6f3+Ld3lTc7YghQW3QgRFB9dukPa/Fm0OFs8WrhzZtW4RHup3mKs6BBKq/P6C6wZFDJ+sFrLlGoM2Ra0XaQ8rFBX/VheNb5PyDB7mdeIoyb+L5pjZTIzdUp4xwkKeYbUUn5oZC32sztZjiRH8CPN6/fc10X7MvWAmi4Dci50wwZ5Pgw1cEb3Yvd4AAAAASUVORK5CYII=",
    su = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB7ZdNTvMwEIbHLp/0/S3KAiFWhBvQXAA4AXAC2hO0XbIAigRr4ASUEwAngBMQbkDWbOgKJBA276R2CVHSOLRFCvSRRp56JrEnY49doilTBmitm5Aj+gkgUE+/41FJkQV8N2J6nUpKkYDXY/oKfWcSy9lSpQnwGARNyMTqhGuGV1P6WjRmnoLAw9c9hrQifQLMWMUUIv6yaZlbTunbwzNpS7sHaQghelSQV6U2pBCRrpSqo+nQmBFWweQ5qIDGwyYCvshz4ixykMJ8ZDyzhcYz5hBzOrO+Usrun1otJEfuDw5OhVK9ud3ddrx/kGEMdosB2DjK/uGs7rsEy3AWkdG9DLMnYjb4ctOhHO4PD5epf1+oa6wWBF6Ffjm/sxPN6cMexgDHaJYgIRUnhNTMO5zgrGmiWwfXa/Z18CPd32r1wW/omFNzMGbyARhDCAd9Qu6wLwcbFniGeIn+8/0aJrWf5aO0Pvnr+2uuy1m9vLSTfa+VSsPqmVUak+cqfEb5dNn3M0XK8kvKzC1QkdJ5xTC/+9vqAwvb26HV846lRcrHoxF5Tj8FIjSKGhVgttPpYVU0sOPXohYSt4vMgfoXiwfKh7/o0igZfrq5ucLeW9X8Lixhwa0QUfFE3yWWfaGghzEzxJY2iA0qflZXjW+XPglXUQRIqKrt/74fFTEcWRfIzjmMLkVtdDCJ88RVkn9XzTWzm7BdUZkxgVkeIK0Un5axWZ+J3K2/BBPwHSQY9t/XZPuu9AEzRQIofbBTppSXNzWCXBHkhhdcAAAAAElFTkSuQmCC",
    nu = "/assets/png/turntable_icon-04916ea0.png",
    au = "/assets/png/u18-7146ab6f.png",
    Au = "/assets/png/vbdg-avatar-d4bec31c.png",
    ou = "/assets/png/win-6264c04c.png",
    iu = "/assets/png/winning_bg-d9c728ae.png",
    lu = "/assets/png/winning_bg2-85772bbb.png",
    gu = "/assets/png/withdraw-top-b9971e60.png",
    cu = "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAcSURBVHgB7cAxAQAAAMKg9U9tB28oAAAAAIDfABRkAAFctxwzAAAAAElFTkSuQmCC",
    ru = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHkSURBVHgB7ZiBcYIwFIYfTsAI2aBuUDpBHYFOYDuBOkHbCbQTqBOoE9QNcIOywet7ENoUAk3I4447/e7eCVF+fpNo/hABgYhTeonBkSiKjuAJ3SOhl0eqGZXSzTnVmeqD6ki6F9uFKfrzRbWmUvC/sZhq66CZsRebwBL7k3WZ5Pf0Z3xYSBqsTMZC5homJxCOonq2tC/gd675wp2W8IGEQWZunmA57CmEUfSilMEY/87FFMJJeOpIGaxzDzLMhjKoQAY1lEExhjKYgwz5UAZPIMOZDUp9W5MdhHPhNZ8NnkEYHSaOEMbq5wjLxT8UZarzSoD9ySqdag4+gTC6F1/AnwvVQ6MVw0ODst2N2mfoHhoO2BXhsMyGrmImPEXiDl1ONpsO7QPasiARtQhywlbgnrLtadiunWhdriJRu157ow+NIdZzKaW6A3dONEwbQ4OnyNzjeh7qfedmDMvNzSv2Rxlan9iPLbb9igNEbQYz7E9mak20IMfrKYwDRbWuTiba7RLGBS+TCR9wD46l5+rwE4hRGyz+Ra428otxMxjKVRnMW46DkDLImc40tQchpAy+1843INSLEgZ3ZtRidEJegQChBvnht3VHSCbfQMIk+j+q5Q3SoVrMHfV5w+QT5/gexVr8Da0NleU3SpLlAAAAAElFTkSuQmCC",
    du = "/assets/png/border1-efd3b0fa.png",
    pu = "/assets/png/border2-b848b0b4.png",
    _u = "/assets/png/border3-ea85e211.png",
    uu = "/assets/png/crown1-7e4e2fd9.png",
    mu = "/assets/png/crown2-8b009e96.png",
    vu = "/assets/png/crown3-2ca02146.png",
    hu = "/assets/png/place1-c2ee5099.png",
    wu = "/assets/png/place2-2e2fac0d.png",
    bu = "/assets/png/place3-d9b0be38.png",
    Cu = "/assets/png/stage-b481110d.png",
    Bu = "/assets/png/avatar-5a79e66.png",
    yu = "/assets/png/avatar1-2f23f3bd.png",
    Eu = "/assets/png/empty-ea102850.png",
    fu = "/assets/png/gameDefault-91e9c0e8.png",
    Ru = "/assets/gif/loading-a91cbd32.gif",
    Su = "/assets/png/logo-e3b68b06.png",
    Iu = "/assets/png/headerBg-6185d182.png",
    Uu = "/assets/png/heroImg-00649ceb.png",
    Gu = "/assets/png/totalIncomeBg-e5f99b03.png",
    Du = "/assets/png/promotionBg-8f7ec356.png",
    Lu = "/assets/png/tabBarBg-c46cf06b.png",
    Mu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgB1Zq/TttQFMa/41SVA1LlqlMnzFKxJXRAjGbqSvdKwBNAF0QnnK0jPEHTJ4A3aNi6EaaiLjhvkKWJF3J7jv+ASZwYOybx/UmR7WsHne+ec67PuYFQApbrWL7/b5eU0eBLW0E1+WMRyEo85gHkEdBVNLoBah3/+28Pc0IoiLIsC75/+Oed6Xz88sFBAUIx6nweMbkFxIZDqSMQWb03r7FxsIH5oTb/vVZeIUaeh5VpnmI4vONTV4xHqah9qNGdebx1mudbz/IAG26zwRc8683xe+V54AkeyNh5jjcyPcDG77Hh12nGvyA2qdH1yvHWbtaDMwUEIQO0yw+XbBQvbiPCRVZITRUQGe9i2RDcWSJSBaiVFXGdi6ogIr5t76XdmhAQJOz9/Q9UDBqNzsyTbXt8PM0Dv5YR81lITnBiX4yPPxEQxb2NisIimubJlpscexAQhE6V4n4KpHAotVd8nfRArjfgspBQ8v3BUXwdCIhmfx+akPTCq2jMwRysvX2PBWMpLib7HPJBLaTq9eKlwtoacHuLJdAhoh0jCJ/F1jll4bAXLMkBB/qya/BLS8fZj2kaHD4N6IstIWRDXxq6C7By9cQVRHsBkCTuQ2NkGdVZgCcCutAXT3KgB325kRzQ2QNdA6Z5CX3pGNTvSxJ3oB9dLqe9uKG5QsGqtNfr4dNG6Xujmayurp7LMWxoZMtcdp0LbKfICrB48wPWfd8PViEEYUR0Dn1oi/Fy8lhKmOaZRm/lVnzyIEAjL7Ti2RcmfuDI2+AvOAc8Nn49OTBZjSr1uYqhpEKbdsbHJwSQuIfoKypGrVY7SIZOTGo/wCLaSCRKBWgNBoPUimFqQ8MiXFRDhCStO+3mzI4sEGEYS8mJKOYPZhkvZLaUJK4j2kTwrwKLgWscqXM2/TCUZ/KsnlgSm8Ll60VDKpr11nA43ExL2DRyNfVRXoiQnyiR2PB6vb6eFTITNqEg0W8Kzl+iw0bxzeEOf65MLmP6YVmfm8ICkpiRGI7bpgq3Km0kNsxkhvlen49dwzB6cuTvXBY1Osl/HTU6hXQNo/8AAAAASUVORK5CYII=",
    ku = "/assets/png/bd-de258be1.png",
    Tu = "/assets/png/bra-42104755.png",
    Qu = "/assets/png/en-4c6eba8e.png",
    Vu = "/assets/png/hd-796a1d34.png",
    Ou = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgB1ZrbcZtAGIXPkhknj6gD9JLLk5QKInegVOCkAtsVWOrAqSBKBXYHVioIfsrlxaQC8Rhnxqz/g1gNAgkBkvHuN4MFaD36z/5nl72gcADuEPj/8Gr8AnqQAIHcGirA13LkikU8PCB8gLqV8/k7/IqwJwotYdD/cXSqoUZyOUIrdKjhfcEeYhoLMIHLv54VangvFPQsgTdtKqSRgN94fXHowFEKSE/e4M+0fvka/MTbQCG5kuJDdEMk1jyukw1vVwGp9RMP+keHwZOAvym/Pd5VsFIALSM1MXtKy2xDp72YulradjtbLZQFP4EFVLWLjQKYOqqHRYiITyLiW/l+ATZY+u85bFOFBBonUO+LDdsrF9Q3tgVPGNOyJ1xnTUDWYAJYixqKQyZrd8zJsq/Xd7AcWukI9/0+opjXqwzIyQUcgFaSgeOZuU4z4ErtG/JZMBkYwSHyWUgFSO2fwjEk5g/pp2v2yfMS9z1mYARH4SzQk9rvcpR5UBg7MzCAoyTpsBsqgKNI8AM5dABH4crHzhmZzaQDvDiONRyGGYjhMK4L4EofQrhL5Gmt/8JRJPZb1zMQqsVi4SulFnAQyUDf6/V6bMRzuEcosaeNmEq+wzEkZi7Lr+bEl3CvO53zTyqANjKKXEDa7Iz2Sc/Nzawxc2Zm3aJWETZeI2A1mHMlCxLj1ARPSmujMriTvQDYOkuLfN/v52+UhtOi8CPsbNB0yHHxZkkA0yMFz2EZEtPnvHUMGyc0UnBGr8ESMt9fb/qucpNPeqaJ9EzPumaaBT/Z9v3OXUoRMRYRX9F990rPn9MNVYVqbbOKiEBE3KC7vYOQnckmzxdptNHdgaXSZ1GVZYo0ftWA2ZAPCjnB4TAP0ctsdFyb1i97ZEJGIoQr220ffPNsJNw4cENrAXmMGPA1G6W4VBlgvb3E2RFmU1jOAq/bBp3nEca4HAfo9UboAAAAAElFTkSuQmCC",
    Fu = "/assets/png/japan-09a3697b.png",
    Nu = "/assets/png/korea-9ace4c53.png",
    Pu = "/assets/png/md-8f32f4c5.png",
    Wu = "/assets/png/my-2cbaca53.png",
    Yu = "/assets/png/ph-f374fde7.png",
    xu = "/assets/png/pk-076f0344.png",
    Hu = "/assets/png/rus-3e998552.png",
    Ku = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB1ZrNUhNBEMf/PasloEVtWR4tHQ4eFAKxvHoIJ4/CzRtcPQFPQHgC4AmITwA+AaAHj6xAsJADA6I3IcRSi4/dtidAKkDIFyHu/Kq2tnZ2kvS/uyfZng6hCWwmtf8HGOAw6iOQBiHJDF9u+WdziGBkzAAcKE8tEhA8DYzBNSE0iDX6d4RhML+WyxQaQEQFYJpWHhYaFVO3gIK3o2iEmUZR4uHrwxnPUxP1CqlLQLb30XjzDT8PEae7l7cnap5fy6QvSa3DY561uY3WYDyP+muJhqo2YbVXD4UhL7XQeIu2n7mW0APVJlYUkO3V47JIM7jBlKmAH4FnbdpWmnRlClnjmTmNGFBpXZQVYENn1SNOEA33LJt3l4YvDojXU3KaRzzpJ6KF0oFyAjblpBFPjBzPRUTubODcIhbj7YLRiC9ajtHSgWIExHh7cxPxx3q/6ywKpREYhxvYr/RiFAoRsN4P8/lNr7MTjlCMwi17tbbxM9XRfhvI5+EI/vFxNCznqYKAl69mRnLcDsewj/FTKj35SYvxrXzOaRYp6Enf+7ieTDHoDRwk8eTBuuIGq6k4kN3YTYoA6oOjiO1a3ffbNNylT0VR4RfYVXyVyx/AYfyqJWXcsQJycBS/847bAvjXvhEBFMBR9rnNKEK0BUch8GcRwM5GIIK3oEKEc3AWChTMmF3EC3AMn/4GMG9NoR4YH3mx+Pihn4JDbO3kptNjpxdSUvpy7LEjHHz/xnbD2dpe+CU+rfCn4QgHG18zl3au2ZEolHrfUnwWslE4/LET+ygc7uxU7uIc7e0ucUzJf5ivvvEm8/Txfi52qRSe2KQv2lt2ez2b0MMMnkGMUKDBZytm7vJ4GbpXTEaaeTU32m4a8fxEOeMtFZt8Kz06Ld2R/7pnao1PrG6nr7pftUu5LN0adZJOre2TEXJRSGO9WZOpPK0GCm3WiOdlH0OjFUgH31M0WEubta5G942nlHidI5pOrJp07S+pExuNoxBpSashNItTw+/dwlRXYOoqcRv+s4cVEoVIMWFEVlqDm8PSsCO8v6uQqdfw4jugCZxGJUmMFBH6JM00l64X8bB8UC5iqb8ZW1IGBh0e5ho1upR/fhLSEeU2NEYAAAAASUVORK5CYII=",
    Xu = "/assets/png/vi-7e276113.png",
    Ju = "/assets/png/zh-e8fe67bc.png",
    zu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB7ZnNTcNAEIXfOOGeEuiAcEFEuVBCJILELXEF0EGcDqAChxtS0gO+QMTNVID7IHgY83Mju4uyzghpPsmnfWvN8/5YmgcYxk5QqPAxv+h3iCcM9NEiUlDJ3L0dpPdVoN7P8914VjMy7BNCNpis5n6ZB5Xifwgw4TSwzi8PQZtXKNJhOj5Jl+W28cQ1mfF2DWU2qKeucacBIjqCMr4anAb+A2ZAGzOgjRnQxgxoYwa0MQPamAFtzIA2ZsDYEWdb5Sk/HxGSHlThapCuim2jXcfMpiNwJS84gy7F9/Mrdoi16SIuhWy8yiWQ7naPwCNEIpoBAi1Op8s0RLvOxwuZMEEEom2hmvklVCurUCIS8VZAbiz5st7CEnCv/rrdEIOIZ4ClFY8Hn6r+/PXEKb7BrlFt3AHHHw5mW/hq8CQ0yQLKEA5uXONOA8Mmm2J4k8K2kHBx7otbg2JWuR4zUc6wR5rih+kq8+mCg+4msSQJ/bjl3Ixkz7/L1h06kknDiMgH3mlqrSokw/4AAAAASUVORK5CYII=",
    ju = "/assets/png/close-7b93ef94.png",
    Zu = "/assets/png/eyeInvisible-2fa5c152.png",
    qu = "/assets/png/eyeVisible-7bc1c956.png",
    $u = "/assets/png/googleIcon-666ff85e.png",
    em = "/assets/png/iconservr-r-751e599f.png",
    tm = "/assets/png/iconservr-248f27d9.png",
    sm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB7Zg/TNNBFMffu9+PggpKUheMJHXBtcTEpIQB4mRiVAYIGzZMbhodTXRwdXFww8pGQBMG40pNUEZdXJg6ELcqSU2tkf6e71piaNq7vt+P6x/C7zPwo713v3vfu3fv3hUgJuZ0gxCB7ZXFSwoPUkqpMX5BgoBGIAKI+CcI4AdRUAzIL0wvr32HkIQSsL1ye8RTQzOINAYdAAFLf6vD76eXX5fkfYRo5we8oVtRZ1tKWBEKhHgqca3Tzmv0GJ76NSO1Fwn4tj6f4HidgC6hQ/TDy5uDEluRgJ8l7yJ0mfPnLiQldiIBAz4NQ5eRjumDM3CC4zdNAGetVgBlfuzy86vNrhoEohByJoAgeKSfkrTGNhn+axWgEBIgQJyFBBSlhrxKv8ERzlYACZ4DqssiYwr2otUAzbjbA4gc27QrtAVXuAyhnuAwC2kwyZv5CZgzUdFD9Sog2gNHOF0BTqOcXaxpNFklSoNDnK4AAu0Q4FWWYjhFsahtANztAdchxA7CC7uD7pzXnLZNrDcpjfMcnjnyXVGcPpvfN9EYbljkE7gcZpO3Xc8vubujFfR1ZrkPluzCr1pvV98cGZbrpuAe/5O0vC8P5D3OZNcK1jfZGj/l5tNcm2+x0ShIIFjle8Nnuwnd4McCiMCCRzB3PbthnBijgJ3cYgqwusVDpiAMFhEcGlN8CC9BCNjB/UE6uDKZ3dxv1W7exFh9Gtr5+ohLh7PcQBTnNVz4jZbBf2Bq980dKX2MhLdQF/G/ZB5n5yNfSRWiFv6sVZtRADt/3BOTN2jzSkTDHAktQ6gW/32GyacTf5DFAnpNLKDXnBgBppqopYAKVFoe272CLEViSwGzXHdwp74RoSw/gilLpzz0CUS0amozCggoMHbqLljIZN/mTa1GAVPZd5skvqB0hloYkzdrs7FmISR/Ts8A9ADtPBI+bHcjswqoddYzwJcU6C55nrzJTHbjTTtDcclfrwarM4Rw57C8TYmvmm3Rq0w8WfCRP+RtMR8TE9PIP8Jj6yZh+V37AAAAAElFTkSuQmCC",
    nm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiAgMAAABHKeNRAAAADFBMVEUAAAAAAAAAAAAAAAA16TeWAAAAA3RSTlMA3yDHuD3GAAAAOUlEQVQY02MAAqYABijgvABjqSfAWHMboAymMriyG3RTxlD/HwIuIFggWYQOhCkYJtNBISLUECEJAM0+KB3Upf5VAAAAAElFTkSuQmCC",
    am = "/assets/png/customer-2c716159.png",
    Am = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANHSURBVHgB7VnLjeJAFGw8EoIbIRDCTAS7ZLBEMBDB4gu/C3Dge4GNgNkIYCNAG8EQAhksJ0BIwFZZbtQ2BrfNzyO5JDTd7W5c1Z9XrxkhYsSIESPGFUjIQrfbbSYSiXcUsyLCOBwOc/z5U6vVmqwb8sHLy8sUAjIi4jAMI0uusp7o9Xrj9XpttlqtJVYhCxEzEd1VWGAFcpj9BblCzE+uQCGVSs0ajUaGD9iBHUX04CDPiUa9ZG0hVF7dItA2FxEB9z12yRu5DQaDV3WXHM+AW0QymaSIqXg+PjabTY5bnOQhxrHFeQYOam+qlQNY7/f7Qy6VeALw3hEm02QZ26aACR27+xjuBnUlWK9UKibamuLB4DsleUxiyYs8YZwZ7BbRerCIEt/JAv0JKzE819E498BLBL6oiPaluBP43fgUqtXqL9axvUeoNy6OcZ8BN9xnggdpv99PxI29wiafK5fLc04aJm9kZwYXYWh8sWMl+II7eMUCk/KmkJ/pkCd8BRBuETc2PIdBpdPpT75Pd7CWAOKciGsMTzWosGmMtgDCSwQND0R+i+BwGFTYHMz3EHvBfbAJxOoG2pua41WD+o6kbIK2UJlwoBWQ4Epgr07UNl2vUA3KImAYw7DkrfEiJPDipruNIhBNzAvDjgYlYedcoc9RWAElhLy/skKr73Q6P1iu1+uM33nV8NwGxf7tdtuKNKZpLq8REVgAt4AkQkir5z6GCCvpwyzzdifD7IJltFkHne5q95/dQkSgQ0zy6haw79EOqwe5lryvqvByV/TlKllhlPXhcJjZbre8qNzeB4APP/IE2/hMnJI/cVfewRk+6QGsh1kJLQEMm9g2RYV84VKSxWe8R9h9/dw1e40IHQELxnzhJD/2G8RLEET8w17/FP4GFVqEnwArXZCGpUtegvE9QIw/EYGQnBc++dYlAccki5Wg5EPCIUInaTx3I1ti6fMPJi8RSISngN1uV2RuzvKDyUtoi/C61DfhptbPKU8iL6ElwiFANaonk5fwFXEUwBQ3YuQlLoqQPy1OZYprXy6iQl7CUwQ+0wQdc7VatdSf7q7Jz+8MR2gnjv/g+ALkJRwi1DPwbmeHUccCHvVNxIgRI0Yk8B/jXmlqMD7YrgAAAABJRU5ErkJggg==",
    om = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANySURBVHgB7VhLUttAEO0WTpHsOIKPAKvEsIEbQGFS2WGdADgB4gQmJ5C9SxVO2TmBs4kN2dhH8A3iJVSwOt3jjNDP1lj+aaG3mpHm856mZ15rAAoUKFCgwBJAXeg3q7dAWAOgMuQYTHhICJ3KZetO6pZ+4Xn4g4D2IOfwAMrCVdex37hw39PfmwO7M+67X8qAk25+VwFHQDsnFfvbSLgSvl7xClDtBUvdgXu6Jy+kgWqYO4TJy4fmcLpWIUQA+1ER/GwIOYHEPUfJgXD75V7sB6PE3wNRES/0yiKwA1sGETR3mYuEuJBHpFCI8x6oUrCDqNUdpN5zz+8R8Qq2ACL6emh/v5byU/PzpUdeI9rGinUKrITU1QAEd7BheDynJv/YvLhKIi+wkh5GRVTslrNJERw2N0cyJ8iXr97yStzPamvNHCRRBNr8fAxrghqb5zi0W4rwY6Na55Vw5vWJ7YFYg8iekI1kIbRX7RVCnghPjuyHoXy0Z3xXlyM+rZ9lMHBoJWSC1XsFjpBKB5q8zGdCXpAqQBAPp1UaXtig+MsPZD7T3kYCBLNELGN4QYPKmsYYCxAkiVCGx2YDCyJqUFlzsNRNnNgpsrEFfbfq8Itbk/5Bg+J+x5wet3nMTJnwQivgE+CVeIZSKM0w9YqgQamxEOpZyQsyCfgPJ/pARCCb0KwOQYPSmOZc2fdRthVgIkz2p66L1T+556dS/sQmxCFyFjS8mEFx+98S94wTDsNlRCwsYBoCLd/atdV7iO2eW1WhwSHSEVOaHrM4knLFfmgo8uyu0/bUXYWIhTaxkA+GgJCPWT2Co/9Xg0hyV1TuW1LHqNS73GaXTzlciw/wsZdKXjUER10QRMgnuSvJ5uXjU3kAZFsJIwFybHLY1MAnL7n5nCSL3/U4VKSY7q5UXkaEgQAcyZkPIfLJuXmoF/+vsog//OM9SDeo7CKsNPKSLmjDMiXv9+YQMT/j4yI4wTtLy7fmCHhLsqS2KPlsCIswSRpn/ZGNOcbPNkven30hEYkCdohslffDpslrmIuICZCz/iMbkZS3Q17DTERIQNCotkteI13E28UWp7j5Iq8xX4QSgHwDp1Nc+bnID3mNZBHCG+Xm7QNMnODV3TL5+XoRPtrVE13IP3mNsAh/DyB4NV6StV1arQ40ApgcQ4ECBQrkAv8AQlSztivcAwkAAAAASUVORK5CYII=",
    im = "/assets/png/emailnumber-2c31d006.png",
    lm = "/assets/png/forgetpassword-bd783446.png",
    gm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7Zg/ctpQEMY/oAA65QbyCUKZLs4AtUmZzjlBQhdojBsYaHBOYB8Bd8kMTOIbUKaLfIKkAxrItx45fzyjh/R2gzVj/WY8li2B9tu3+3bfAgUFT5sSDBkMBkG1Wu2Uy+WT3W7X4L/C+NayVCpF2+32utfrXcEQMwHD4bBTqVQuaXiw59GIz5xbCanAgPF4PKWHL3hZS/F4wGc77XYb8/n8BkrUAmj8GT36Adk5poiAIj5DgSqERqPRKb15CQXMi9f9fn8GT8pQQOPPoETyRpIfnngLEO/jzy7jjSS97FzwxFsAvX8CIySp4YlGQAg7nsMTbwFxobIihCeqJM4DGgERjGA4LuGJRoD3Sx/CcLyFJ5ocuIYR/K7DF7JarTbj0v+EnkjT2HkL6Ha7YvxbKJHOFApUzRwbsW+tVusZL1/Ag7itvoACdTdKEZ+azSajqXSc5XM0/iON9+li/8HkPLBYLL5SxC1FSHFzNmaSN+xA37ADVXn+9/fBGGny5EjJy/Cvah3JXi9Hys1mM2P3aZH8BQUFMEji+1kQk/Ql/2zIOSFptCI7EO9FvFzy941FQnsL4G4T0qB3/DlNMQtycRUXtAgeZBYgHq/X6zJKeQ9DZK60Wq3Os65IJgGx17/A4DCfgEztXmVZjdTN3GQyafxn44U7B8m70n4g1QocwPMPSb0Se1dAYv7Axgt3Dksz8NorQBIWhzX+njB+txNnCMWh8x2PCEPpyBVKzhWwmH0a4NyuE1dgOp0GrJQ/8MhI9WZ9OEqqD4krsF6vveeVluwb/iYKiHubXOCyxSXAcvapwmWLK4lD5Icw6UaiAGWHaUqebCkoyBu/AFYp85fnJKc8AAAAAElFTkSuQmCC",
    cm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ5SURBVHgB7ZhLbhNBEIb/sh1hdjnC5AQ4KwQblBNghCOxjE8ANyA5AXCCMTskhDAniFiACZvkBpgT4B1BfhRVk1hA0PTMdFVsS5lvESmSNV1/vbq6gJqamw3BkdO0u32OrS4RHjLQATi5PORM/o6Z8eFe/+0AjrgJOEkfd+dEqXxwO/xLGoNx5CWkAQe+DHovFkTvi41XJCrE6eh17zkcMAs4EUMkXZ6hKozDzyIcRkwpNEr3D9SbMNBgfnS3/26ISGwRIJjTgKVutPgRSbSAzPuXXcaCpF/WuRBJtABtlXCCwasXsHDw/hIiuoNI4iOQXVRexDvD5R5YJwYBcqM6wdmoEYclhaIP/Q/Gd0QSLUAHMzhBoNVfZOeYDiX0E5ihsWWwixaw1x9OJAx9WJHJFAZMXei+zDDM/AqRLBzGapf3wCjtHVadi1S4OKD6FHsFtwfNxWSqIsKXktZNU1LPMoH+jeuTUlEhnM1JnPy5reU5KW2XpHO1pfh3tX5qampcMBfxchckX3pA4M4CSPK2E9qB5OKRgqYz+eejR0FHCxilTxKi2VMx+KDcOiXXhAG4KRfamzEiqCxAPf6LWnGrlADyvZe3eXZUNSKVBKjXQfNjOD4n/0W3ds29KtEoPQt9Svc712u8wpmDvupZJSkVgev3/FXKR6JQQNZlaOt0dcYvoXGbp7tFNVGYQlqwqzde4eRndnaYYAQuUmf2DeuEWzuhVApHgOYuK3ALjGmwXedG4Fhyv02tH1gzYuDkFs928mohNwJtw8LVk6Llb34KyWyDDYECtuQKkI2x4+7TxiJgS6iIE2wIjYAtuQJsE6YvvEG21NRsGr8ByofmPBglOJAAAAAASUVORK5CYII=",
    rm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgB7Zo7bsJAEIYHx0jQkS6lj0Bu4CDRwwninCBYQkJUiSsejUmZCqVKSw5gQZmSnCDkBk4FAgH5F1FQeBdvtHhB2k+yFnnGZv7Zh6WdzdEROp2Om8vlnvDTpQzZbrdTy7IGrVbrTeR3JTL2er0GmndcDmUMknaDplapVH6jKPrk+vEMyLyDl4xJInhkbZTP5xsin9VqNcB7ayTBfD6/DoIgTrLZvIfQfWUE5JAECCxuNps/Ip9utxuTJMVi8R7NS5KNK2Cz2ZQQEEniIsDhMR+SBHGUeDab1OLg8ihDpAQgE8+UDQ0M31IaRykBWNICygAMQw9NKgEWXThGgG6MAN0YAboxAnRjBOjGCNCNEaAbI0A3RoBujADdGAG6MQJ0c/ECpLYWWc2AzgzZzd1vOjPMHOAwQ295tm07qPTcYqv8gd2jE6C6wLGrLi4Wi7uDmhYrOU3DMBwtl8sx7GVSyCl6oJ5UkPN9P0bZqs7qaKQQ1QIm7XZ7xjMyG+shUohSAQguTXZnpBClAjBhnRRuaXzS/ycphE1QdjSBZ99/CF1SiPJJjEk6TPpiH1T+pRENTe4yWigU2LIXpi13HrALtN/vD9br9df+novh9fiPd+3Acx88m7AUj6x5LKOkEVabFpV3hadVoiiaVqtVlkV2csShbJngu+Fj6X0VOf0Bnb6jYT8x8UsAAAAASUVORK5CYII=",
    dm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHzSURBVHgB7ZpNTsJAGIbfr5kEl3oC8Qa6UnQh3gCjJO6kJ0BPoJ5AOUF1Z6Im9QS4ApfcQDyBsNKEn89pMUq00zLJ0JFkng1N56Pt0+m0ybxDyKAdHJZBOJObZeQIAR1mapT8u+uMOjXPN9U6M1/BIsw43fbvldegFGgHR0XQqCkPUcTsJ3skiJO0GqLRJYMr0GCJhysbfthLahOqPzEG6wQqQgOP6G2rdttNq5GPZD+93//yDlGTP4m9oBQgeMuRhg6yuty+rgYZZbu6x5W+y6o2AaPEj1sNOaInwLhADjChnnbXp9ESKPn358gB+RgeS42ZBDwsOE7ANk7ANk7ANk7ANk7ANk7ANk7ANk7ANk7ANk7ANk7ANk7ANgsvoDW1GGcGuTCauVJvcpeGL/hnuDGQDHXlHLkPFmtjpo14O9o3BwwHHJN0scCDvV+ZVqcZVMICiaZsX4dBjPcAs9hPCuT25D6SbTJc6sEgpgWeSr465Ivaoh6CQYwKyJi1n12EVxjEbA8QVo3UaGBUIBqg8dIEBV8fwjIMYv41ShQkfbF/kn990ga+8jX6gUFYgLicNe6cOl18oa3gsPE9YD3sMg9P9I81gSBCdVsK7aBaA3FW8j5XxjKb3kmJdzNXLbSCgwoR1ZHzchvJk8fc2PQfwrSiT7zmkMKNPhGzAAAAAElFTkSuQmCC",
    pm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMPSURBVHgB7ZhBUttAEEV/j1yQXXwEs6ACqyQnwDmBRVGsbU4ANwBuQE4AWgcKmQvEN4CsCGFhcwNlS6zpdMvIyFi2RgZULPhVKlsqafSmp2f6j4B3zRdhQfXP/fp9jCYTGmRR12tsEHkWV8MaBuub4QALqBSQQgyt3bVMHTmtg6jHjDtiRAkQoW6Azwz+AsbAGA6HxgRl4JyAsiAM6gpEuL4d9uY9c/3DbxpCRzDbRDiJDR26gBUC3UrD1vAxM3eXPXOwshlGKKHrc79hYhyAeMNa2inqyFygP+f+Llvec2moEEwjJh0z4JPVrYtDlAW6PfP3LbhjDX1bNEGnoDRaln+ype9r2+ERXIHSYXKFuTlr9fX301Z3pejeFGpW1E3eAwmMPuAaGUYjORykbWrbOnw6WQqBPMv7BOo9N2fmQknbzNS9H9o9zAPS6MiU7sQGh3hlLXsy8wy1n0ZpAsgM0SGik5dK4nnS5SMvShNARNyKLQJUJF1g5aVt5AElwwU0XjN3nurhXfXssI2BakMpksAVqhahp0U6Pa2lfySRpSDyL1QsyaO77JIxBhpZCFOqTr2EHpzC9JC9FY2B1Fwx2ToqlnoomUzRFJCEbiBUDVSskaF7nExjoCUPPVmHNrCISDqjxwJK3GVtxrM3p62++hZUJHUV8s7L7LXJpGYKiKyPisSG2zLvu9lrE34o2UlYvlwy9NXVqt6c+tIBPpaWojLOcmRtuW89WsnWzokIJRCWgn/W7sNRBNZ767q4GRIwRyU2J6eQT61DSzUcyc7Cd88lih7h3BJbc0dmVjPP5kwBaZRSR6dhRYFiDztSsbVqh7FHO0X3FznSmSb/95m/J8Ox+xom31oO1rcvDvLumVk61rbCI+lFoA28xFKgw5TuOGbBqAo3iul+Sm7sue4+s9KZq5NE8/LZG8UxVLr7fNgWk0RutaDhJHGNbYm98GULHnyQyeKylJT62JAkufhuj9CSJX9k6Iiv2Jq/SWPGfhSAhvxtyhGVAVkIKAeuQWLssp9jtEhrXSz7DeBdrvoPKPW2XnJQl90AAAAASUVORK5CYII=",
    _m = "/assets/png/password-b827c2b3.png",
    um = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL+SURBVHgB7ZlBbtpAFIb/ZxKp3eUI6Q3IphLNovQETSWougucIMkJQk/Q5ASGXaVkkZwgbNqkq9AT1L0Bu1IV/PoGk4oAMx6Px6ZS+BZIeMb2/8Zv3rx5A2zY8LQheOQ+PNj5ha1WQPSagSrAu7OXDOQ3YsZ1rX3RhUe8GHAbNupEeBsDLXngjrk3RfLTB1c+1tqfI+TE2YBktCsinI7kbx1uiCHUy/NVMhughI+CrSNxh+P00baWEcHxq1gboNxEep/CfbStkLlz9qp1eWLbP9WAu17zKGbu+BvtdCpMey/bFwObvlumxrtu4xMzH3sNVRZMUBna9g10DbdhsyWf8xglEzMyzQOtASA+RMko8fvty06WewwuRLvTKVUSi+Kn0Q7bB6IhqrUv+7r7AvwHLIq/DT/sjmj7XrwglDBz8zVsaF157QYsiv8SNqugyc1DGjKFoHVnYxQqmlXiiVjEPw7ZBNKG8LV9gUXx33rvDwPi+6zrzVoMWBSfLJZxFw6UbsDyyDdOZbE8gyOlGrBKvFzrIAelGVCEeEUpBuQVz2BtbhS43JQFHyMvkSm7AUGyychFUW4zT6B/efwTOfApXqLUd12bdiUmBAPXZG4pzsu+Qq7lSc37ugZDKlHpA2NkZSkx6zZDmU8t5ICwPdC3GZCX/3iUVKWwSjxyilcb/lrr4oWu1RxGmXuwpBjxSkJ8bWo3GjDC2GqJL0q8QtzHqMFowJv2lYq/fVOfVdHGn3jqpu2PU1fimOlE31ZsnGcpdKX1STVgX+ozEofPF68XL57PbaoTVrnQb0w6mFuZi19hKUrz/X89YYnaaDP+VMUvh/NVgiLSA3HbvX3Lylyuolsx4rPVhpwNUJW7adnDIy6FLef9ACOuwiMu4hXOBshcuIIn5KzhxEV8oiMHamIvFaGyvT6SkX9nO2FXPgEekMOPzuzwwwpJ0ofEOH8mqcpesto74630P/0aGHdMZUCfwh/wfnaRGDKpz8rz9aloOWZVR6zPMe76Er5hw4aEvxh6rpA3WRbeAAAAAElFTkSuQmCC",
    mm = "/assets/png/10-1523b3a4.png",
    vm = "/assets/png/1-c7e4efc8.png",
    hm = "/assets/png/10-29a6603e.png",
    wm = "/assets/png/11-925c456e.png",
    bm = "/assets/png/12-ae12c679.png",
    Cm = "/assets/png/13-5676d43f.png",
    Bm = "/assets/png/14-a397ff6b.png",
    ym = "/assets/png/15-80f41fc6.png",
    Em = "/assets/png/16-cf8e1441.png",
    fm = "/assets/png/17-bedde42f.png",
    Rm = "/assets/png/18-52955242.png",
    Sm = "/assets/png/19-2ac9fd83.png",
    Im = "/assets/png/2-58c8a9bc.png",
    Um = "/assets/png/20-a58f23bf.png",
    Gm = "/assets/png/3-abfcc056.png",
    Dm = "/assets/png/4-12a0d0c5.png",
    Lm = "/assets/png/5-ab77b716.png",
    Mm = "/assets/png/6-7c7f5203.png",
    km = "/assets/png/7-00479cfa.png",
    Tm = "/assets/png/8-ea087ede.png",
    Qm = "/assets/png/9-6d772f2c.png",
    Vm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJHSURBVHgB7dlNVhNBEAfwf3XyYElu4LDAJyvxBvEEDs+HazxB5ASGG4QTCGv0ZZ4nyBFgheLCeIPZipkuq5PoIpOP6Rrg5YX6rWBm0p2aqXSqK4AxxhhjjDHGmDKC0k0/TRoFf2LgQP5tLb2YceUcZ3tvv57OO33bTztc8Af5M8FyORGywtHp/mE2hIKDUsPzRwm2jVXBBoQDz9S9uUzbs6e+f05TCbaH1cEGLWYchxsNJXXAYWJEIvJpaZzJTYube5JVKuqAVZOR25k9RlUypEzzmsl7wBNjAW86C3jTWcCbrk7AQ0Rij1+lY4QrxKL4uf/RV1pEZ4iT+ybOS+M4ZLEBeM8XUFJvHoJQG8sda5PDs2XXeeB62+F89zDL544jGxHySKVmTBxhZ9E4IUNkrMH+UTaAMeZJqrVo/ZBFi51/I4v9ku2al4XKXRdOFhtll+I+qQO+/ZIeM0d0HuSrZ8vRq0Ur9WNpQou5E3c9kt+jcZekN3vqZz9tjbzvMFyyeiCfF86dabNFHbCmzeIcXs47fleENg91x6OuRNJPG3c83kNB/4Tv0VYDgz8FDapcK6VoLvVhbJX331oEPP1cv8YjsN3SpluLlA5kpU5Go0rNeOzV2DysRcDh14e7gvtVq4Jvl+nJi6OsB4W1SGnPiCpGZA+tLl7qPOEwadQvAPM6HkHY38qeeBcVUrrRRC5FR3yXZKpG4UEXhLhqi1i6GwtMK6chHpg6pbcb6EoIodVSJb2GzHTy/J3+yRhjjDHGGGOMeUh/AYB+t6MGEquqAAAAAElFTkSuQmCC",
    Om = "/assets/png/1-2a0c1edc.png",
    Fm = "/assets/png/10-8b06c1a9.png",
    Nm = "/assets/png/10-8b06c1a9.png",
    Pm = "/assets/png/10-8b06c1a9.png",
    Wm = "/assets/png/10-8b06c1a9.png",
    Ym = "/assets/png/14-fc002efd.png",
    xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIUSURBVHgB7ZhLctNAEIa7paLYcgSxMfFOR4ALBLlMWCc3sE8QcwLCCQJbICVVLhAfwayAsMDcIGuI1XQLKuVYHmXiaBSn6v8Wek23ar4aaV5EAAAAAAAAAAAAAAA8LLip8DzPUlrIsRClzHLUG56OXbFf8yyJ/8U+15dOFzEf9AfFnDxZyk+Yafoo4vHTQXFBLRM1FUopuclW18Kj75+zzBUbl3JoslWsnqNSzkyCPFnKT0Ro/89CcgpAo7DWPFm5T92xvBqb3Ep65d0mf37y8phaJqKQ3EK6ZP5QS9eWbls6rLDhKb0zLI5K4Te19JalwwsbntL9vWISWrobYWNLpMMJM831eH1Y2QLpYMIsNOeYX1AQ6d23tCFBP+neoJiFkebRj5PdQ9qA4P+wSWulB7WCO0rrs8km0p10WlrpqY6zB7UCk76U/GeePbkhvzXpznrp/rB4v1aaKf19KWddSXc3LNF2SHcqbLQhLcTvVp/7SncubNxVeudVMdKuujb39pG+F2GjSdpnafhs73TfJf3tUzZy5d2bsGHSwlzbVKiWhh+z9KZ8l7RuVjhbuVFYdy5my/dlVE0X16KV/HUtluQLeeBaJfmyVprJuVPS3MK6TcPEJn1hlbIWcYWWMU00dqqXczs/jqMJeVJ1RNbS/+ffOpMa914XM998k77qyIRmHK2Z6AAAAAAAAAAAAAAA8ED5C6XQZzE8+rnbAAAAAElFTkSuQmCC",
    Hm = "/assets/png/16-bb1c9fe2.png",
    Km = "/assets/png/16-bb1c9fe2.png",
    Xm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJeSURBVHgB7ZhPchJBFMa/7lDZGm8AG/6sgicwuYCZKWAtnkA8gXAC8QQma43M5AJhTqA7q4hVmdwAt+r08zUmFgwzzYRYFULebwEzPa+73zfv0fRrQBAEQRAEQRAEQRAEQRAeFqqI0eT0xTuQarpsDKmw3gmGk09H5wQcwD3puNoOD+24RKoHt3Fca4WVLJ/W6VtCAYj0U/60gvdyTKYsMrqZhW3d40FN7beBvlIrbB1jlLEGuohRrR10d3dUJe85R9dvdIK+va62g0MWfZJnq5Q65vF8e11vBUPOnEGeLUcw2tXqWaZPrdBn0e9v27eQYEvFD6ZFbfn1x7mPDK7m75XDVmtcuubVBl9v27ew4G1BBG87InjbEcHbzqMTnLm1nIy815RQjzcQU6VpXG2dvcGGYH0zv6Hsvh1rsBThi1PvLYu1g5V5W9y0G/RZ8bABfBt5ZeubVnSENVkSbEDddJsVfTny9nDPlAxe4o4s/4aJI7uB2Ogaoh7uSNaiFacbbIXjLB5K+QXA/8Bml05ohPzytDAZEV4s7bj0G1Rbwavvn/3MdOK3Pmj4QTzvHDTtI3dG2rfR+me7Q8/h4OKjd/AzoXO+XDiAWNWXDDVv5lmYPt1Q47p2vs7kBWLmfGLMcdp2JrZz1p9v+2WdI3jI9QTedbTYFiMidOHAKPqAlNhCfXnB5Xm+pJsz/5bq7aDHb2eoE/T59sl1s01pm1Ixp/g4MThpdMLxkoNQEZ9iOFOPQNFfMQiVY80wZH5o6JhSpyL2xIQUIrVivVFQMQRBEARBEARBEARBEAThgfMHV/b3DiZQdCcAAAAASUVORK5CYII=",
    Jm = "/assets/png/19-c2a0cba1.png",
    zm = "/assets/png/2-6dbcaa5b.png",
    jm = "/assets/png/20-7750ada7.png",
    Zm = "/assets/png/21-00073c8b.png",
    qm = "/assets/png/22-fa3fa6c6.png",
    $m = "/assets/png/23-83a407d7.png",
    ev = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7ZlNctNAEIVfywnFUjeIsknKq+gGMSewXQ5sCUfgCByBExDWVArlBuIGYgksYm4gtkk0Q7dig6NyXJmxRlaq+tukSv4pfenR9OsxoCiKoiiKoiiKD4RnyPXXSXx7iwkGOLXWxsdnV9OnfnYPz4D/gubEWprcVDZBxC9YwBC9c/muXlZYBG8qjIjMqQjypWTtGwnz49nVIRzoRYVF8O4OqY3M2BoacQVTuc6yGz9HoByO7ER4VRCWUhYc1WtNBB3WXBXhAxzpRHgpiKheoqMHgp4Q0cVwms3hSDDhX18moxXBlAXjbQSbVAaf4UFrdyCCvMTSyNoxb57yDMYIhcdmtcS7wk1BAxuTrTtFcAzI+dld4lThn5eTc9463wav4Bp4Ry4M8M1aZMPXWQ5PnCrMqeYTOmIpyBXJXwyQH06zEi3Qm6QVSrDJzoS7EmzSmfCuBJsEE25TUIKL/G3jn9SasORaFvwuu+jLPRSuN7eYiBJIixsg5mHohHfJhDtCItORsfSKX8uxJd7CPoIsxTePlAy3NB71gCi2pk5hIhXXI598d7Ofc9AYnvm3olXc2hLRe2tQPCa4WHoy2qWcIpMI5oCjZYL7vi1S999Tz7J1mH5SEtgmaDRxjpZSJV56IlZLUYSDRZXkWoIAmAEd+gwK63Cq8I/L8fW/04YFVooW8BjBdyp6jMjp3TZMBTdS4SNaxE24Y6SlHb3JCrRIr4UrIq+ZdxN9yNIlt7g5l7MwFn+kC0QRSu7FRZvP7pKuhFmICl6iZd27K5SDfRT7fL3riNmWcKdV2gYn4fpYlFMPC/1msfmuqqQ44HrE08mJx9Esc/r5xAXXI55zBEaSFQLSuz7s82uCC70SlmQVelfvlXCIZNWkP8Iy5M+yCwSmN8JtDvmbcBPmKiAMJd9JDkVRFEVRFEVRestfEHxLNe3fBb8AAAAASUVORK5CYII=",
    tv = "/assets/png/25-f66fcb0b.png",
    sv = "/assets/png/26-b1dd2e8f.png",
    nv = "/assets/png/27-c6675aaa.png",
    av = "/assets/png/29-50cd8ad1.png",
    Av = "/assets/png/3-d17e16a9.png",
    ov = "/assets/png/30-0c9bedb5.png",
    iv = "/assets/png/31-4a0333a9.png",
    lv = "/assets/png/33-1316b1ca.png",
    gv = "/assets/png/35-e05f12c6.png",
    cv = "/assets/png/4-a920a39a.png",
    rv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKnSURBVHgB7ZhNltJAEMerGvbjEeIGZSU3AC8gmSfOFjiBMydwPIHjCRy3im/CCeQIzEphM7mBWatJWR0CyEea7rHxMTP1ey8vhFS680/9+xNAEARBEARBEARBEARBuOPgtj8ng/YNnwLwV8mo1hk+t4mdfA7PAekNWIKI/drL6NI2XsEDYyXDRWY1AXjEJsPTQXhBQG3++ag4bEmKY1YX4ogz3i8LXs9wAJ7FEuEwrWB/Z9xMZABuYgGWz+UHEfWmg/bXsuCqqSRCPCMFEThQSemKX74xv1YKftSOoxgc0a6w+VB5bAqnCPR6fk2GpBkFc/oT15dlayZ5lYvKqTX/4vxv8qQzPF7Efgk/sAWCIq6xXlbdsm7u6JLt3e8mVdg3xDZbfvF45RZRCzw3oV14F5wSvOW28FFVoM2KQnAFMcpSGHJTSKwfqUKU/sJ4fm161rvg+qtopM9ss4Bt5i44g+v6if24quFmN+bT2CZ2/5b2zPfBiwuF6sg2fn2IunOCEbBNRUdnyX4Fc8/bowwCRGoSHB7+M0zQ5blw6xDFavZvaYSYbTgqrqx73jIIcKgQtrdhtjp/6Jbp+R2CqTn95NrR0srUUIs1zW1dedqJTsvu8bv2QOVjeynmqSWBLqAH/xNFz/SLp+yM+RBnw7crHgYzasKOtuTd0pxRPR4urJsBXIMLBCEpCnlaO2bh/dpJZBxftdDqb57NZRn33tjbUfpeZlpnLpkx0OBsv+OzcVmpUjjPkLo8uwMbbASvrDd9wm6IaenBjXWwXjLeaKsa+JnRUYmN4+11/gVvAGw86rqFclsmg/CSJXbBDzGvyh5vu3EwWzw0c1EM/+amvAwsya7mYATr4SbPCuF7uCXsxkiXYdpOenCbeIIgCIIgCIIgCIIgCPePP7p+7Ctl+isEAAAAAElFTkSuQmCC",
    dv = "/assets/png/6-eac5e6f6.png",
    pv = "/assets/png/7-ef51af62.png",
    _v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALrSURBVHgB7ZY9VttAEIBnVi7o4twAGsCdj2AuEOSHkxbfAHIC8AnsnCBQBz/bXCBwgrgjQIFyA9dxdieza0mWVuu/Iqnme8/P0u7saP4lAEEQBEEQBEEQBEEQBEEQBEEQ/hlYvHkZxU3Q1CeAJt/WYUtMhAeN9jh5GsX7StNbYWuW/nKOOpMD//zrML4yRNerzrGRyWFncuJsHH7oE2EMu0AwQwVTrbBXy9ass6TpO1QdTdbrokmjPXEykaErKm/XYUPgnu/i2HO2eg7xYfk85+w+7AJHjAia+AfeO4dtZsjQCDzj2JBe4+P99TY6nQ5NO0XenuGK+rpJTivo2X8bHLZ8v7SJkBiFJ8WliP1gW374ehTSO+ewywxBRVGjs52zCx3QoixgfBYJE85+a5W8K38TrCjPDHiw7eKukU7JKyGiZYWVdAeVYaJcZggqmTGAPdgBdu6qeJbt+rVOnnt9BGmQbSXZIIXkNOKt/X8bxXW2s1t5bqQG/hoaCFaaBnislTKTn+Dsno1vYEtev8UtUyw1BQ+kuWcCsjbAkTEXtqecwUBfIqUS8kvVs2MecKKY/fI6XazSpfiJ5/7ertk1avkARLyxRiCVp3NGpG374GV6Oz3u3F+GbFjYuBxWIZks+0Vs8IGqQy3TpTjCzapRMIUtcYOn0BLZgCEVdpirqZtakPDrrO1aakWvZ7pWyewpGFf0Kzpfp6sW2jQILe6Z3OD5HOqIi7LnUpwdfhrnASm+ioolpjTMKDg5IJ+sVvbnXTwIiyx1pW1X3udKOmiPS0FNX61dCMhmumqE2EOiflmA+r81LNeUy0x2bQ/mHw+83squiyXGAUp8I/M9he3i5IWAYKlcqdqT3PPx891pq7Smw3Mgy66ldnw2HjwN4xn7dMp9t/HrSht4zK5fhnE3HzbeoKMal7Sunuf+/XzUXlRI8L3q6Urf782qpo0fNYkhvN2LYOBXgiAIgiAIgiAIgiAIgiAIgiD8L/4CksB07Isd+fMAAAAASUVORK5CYII=",
    uv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI9SURBVHgB7dnRcdpAEAbgf08BO3kJHYRUEKcDUkEYOw95JBWQqyB2AwFXEOctM844KoES7A5IB3qJgyFoswdjPxgZcSvMMHi/FxidOLGnk7S3AowxxhhjjDHGLCIo9dr7TST8DZwfSDcNLD/KJRipvxifFDV/Pap1iemzfG0u7QecgShFzZ34H6MhFBy0XP4FzK3SYAOGDAqOex/2W/ebekf1tgTbR2mwgRyL0cFEBlpJHzDkwLGm3F7YlodBi8R8AKUqAUcjxy8LtpbPkEWa38xsNOBtYAHvOgt411nAu65KwENEYsbvhY3El4hGQyhVCJhOESdD3Z0tbM2TND4A/g4l9eIhmOXGed4iwqtl+zHTFfLnZz7NssJ+wkLESdrJaBZnY7f9yAxxbuB/jgYwxjxJa7hp8Xt5tDy8XGOSG1V+hXoy0FYp1klf4jmsdeTnMZWHIfIXbx+6U2/KM2gRdeUxEkMePX878tm/39BrNxpw110Z/mZpL2HG1OlUO1v0Ac/rVFGI+E1hQ3Ldkv6OVxtABk1ml9AnKOgDXqfpeEDJ3mC1nTljx7FZ3p2tCNinknbi5h02wFZLu247rmHR+ygLiH+rFOPlEqiweNiKgMPbB4zzXyvvf7jn/cVNHwrbMaXJRSYjpE5eqpzhcNCoNwCFFQ/Mp6isiV/Lv2miDE0zfz5SVEnmKiQeUnUI2VaMpCbVjXFhk09nmdMQj0w/pXkSMqNQaimdXjQLhLw//6M+M8YYY4wxxhhjHtN/+vCsignYX9IAAAAASUVORK5CYII=",
    mv = "/assets/png/1-4a75db95.png",
    vv = "/assets/png/10-5ae604c7.png",
    hv = "/assets/png/10-5ae604c7.png",
    wv = "/assets/png/10-5ae604c7.png",
    bv = "/assets/png/14-d6555e63.png",
    Cv = "/assets/png/16-681e84dd.png",
    Bv = "/assets/png/16-681e84dd.png",
    yv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJFSURBVHgB7ZjNddNAEMdnNjGYE6YDUwGhAkIFOA4HbpgK8FaA3QAKFZDcOGA7qSBWBdABSgfmAv54T8uspDyMpF3JCQ8S5/87+GM1szt/zbzVrIgAAAAAAAAAAAAAALhdcB2joHs/EMs9r5GhMz1eHAWHjXMyvO+1ZZ7q0eJ50G0E8qdPfiI9Xj4uxnQ1312qgzGP5NMKbjksZkQqTH8q6+Cbzd7lWWZ7UWXrzAmrtsRFm/oqqoGeLHsUF+/y71nUgR7PB4mtZE40nLhMmem4P1ocJLZSEfI1dM5rOKT4wdOyS9rOYcyHTX1rCU4WOL3MSg2YItclScpFbsRpy8p806ezmWedr5v61ha8LUDwtgPB2w4Ebzt3TnBpa/n+sPGWjfSpLM2GMVM9Xmm6IaSxKc66tI0pZDjo3nsnYu1k0qva/pn7aaP+/wk6zbaNTdrTF3RFykq6VxwS0Z2W6+Dw71Dxa7omZYLbdAOx2ZW+u+o4WEmZ4Cg/YE843iZ+131Y+Bsk1bUTTySSa1dZmeD80W7YHy3fyGbhKqeh/jSPaD04pifkQq4Fr2y2MlviZ+QheNncp50f5+l+sjZe4Ssn5b3LddYpCJY3BIM/zplZ8LJZHJfMO0zs10mD65A7kg6tbLas7U/73SMfcfwxL7aWr/VZxl/yw6WPJT1ZySbVPCKOB8z8MBu2Jd1iW/JMU8PqRH+eT4sBmlB8vKVnYg6zoM7Ys2eI3XdWsl7xzYY8Linkqv2GOSIAAAAAAAAAAAAAAG45vwA+YMIA2cs50AAAAABJRU5ErkJggg==",
    Ev = "/assets/png/19-de811d6f.png",
    fv = "/assets/png/2-4e3883b4.png",
    Rv = "/assets/png/20-24040526.png",
    Sv = "/assets/png/21-b67e7a4f.png",
    Iv = "/assets/png/22-4d6ec417.png",
    Uv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgBvVjhVeMwDFZ4/X9sQG4C2ICwQW8CygSwQcMEcBMUJjiYoLkJoBPEN0F7EwipVkBVlDRNGr73/NLKtvTFlmQ5CfQAImb0OKfGzwtqp9IYG2pBWkFtlSRJAWOByJxSm1Nb4+EoZW4Kx8JAQh7mrHOf3WQPqYweC2qp081bVlBbQdw2DR5fbbVHgsff9NpieTMPSyHcVU9G7alp9ZrmJQ3K+C2nTlfo68jiX38gBotGTjrvoYmYTGx8gyOgIALPZCd37LjkKmIljo+SF4DaFOvBNPVIzfH7wIQuMPqelX8GSiLEFtAN/FY6yl4gRqfFP2hHKdt6R78flPyJ5DeamM7cjA0NqBmkcUuIKaDCFbX3jnNdG57OzwDDejin4ABjqtDg7ciNLG+YO/PGYfQ5jUeWn8ibXCsdvJwBvgliq1Cia+Z0ArvLyHiGcdB2DN2bcZeW2GaMSgDjSXFrxG/VD7Gp/fJqAvFMq/AOw3FLRLRrWKdn8AnyamQFfJ02l0wsVZ0rGA6PiIXnLjrFbH0sVQIvJ42BOdYPcG07nZjOAMMRwNeTmf+cZv4qn96ZY4mlMBzPZCy3QsmNS2ODfarwbPNWBvV/b2XZF5KvfhvxjwbbgYnpSDyHcdEW9dr2lpiOhgvsUI8fG2IzU6IVE3tRgm3WhfEwM///y9PWYi8TjgpivIGvPeZS5BX64wzrd4LqPLYEHuWpE3LQ1YWtEDJw0LG66IpcdE6NfKEN8t1Rl7ql52tHJPaodJamL2U5+xhIYadDmTvHuJhwVM7I3p2QeoDd/HVflVz6lsQr9GYG7txe0K9gA3RLzEHXeRiPpNz0/3RnYrwk2NvLXBOzWwk9gPXLzxr3fdfAegnMWGAsgZdDiGH05YWjf9ZVQRO5ZV9ionPdm5RSxBFXDiEmqzxvILRumz9p6pDEy87NkTNtMc6hz4dxdbSdQUyoGTQXBQXErz0BDiUm5AI9fslyp+BHX/W5qQsC9P381Ab0E+wS27HGAz9dMSZwGLzS2ztXA8RkyneId+9mfnRgzHW3fVbhEHwAFCZQOroQMr4AAAAASUVORK5CYII=",
    Gv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALMSURBVHgB7ZnBUdtAFIb/J2OPJ7moA5YK4g4gFUBIDrmFdGCVkAo8qQByyyFkXILTgaggSgfKwR5hR9q8XWMQtjHetVYWM/sd0ICkHb75tbvvSYDH4/F4PB6Px+OxgfACGZyFIYLxGYiOWSGMrm/fbXvvAV4A94II3gCSjxOhs5LqLH02GauRCWvB1uQEUiWoBCHWX0lJ9PP2CAY0ImEteJD1UMhTkGTRSW+entx4H5EcwZC9CD8WBMtxmsXdSbn9OLIdfIEhtQg/CBbHHMuJrWAZIlz1v2cJDHEmPPjQPXkQHLMshfqEtDRcQlLwDRZUtmjNBfMeKDiFLHpqu4AzzBerBdYJrwgWRTjfKlSCrhd/Mp6793eaXDw4b1+w4Cf3Ca7CczaWBf1Ci4bRj2wESwwTpst6EiwJBrz15K9G/WGaogIaU2ltFpyiKvYmXJfgMrUJ70twGWfCVQrqwoWJKpjHlQkT0UgWuFGrKP51Y1NBLdWeCeRT3gEQ8oDcGZHgRVLo7igI3vLfR9gRa+HNgtnaewYfuwIz3tKkDHWrR+qoamktFSLXI88vftQ8cKGxw1ZUxlBYRgha8VOCOqVuFt5JCZY65P9fpaRSE5guCmglJUt19HPbnH2hsTISDNEp5a1w/uiR4BEOoVOCSkvABZ3gKLJoFNZhlPDgvPObUxLQrU750XOHbVf0FAHMEKgZmbe/okIa/U5LLYz94ThGhZgmXCtSklXPu4kmJJzyPE34qAqVv6Ai5mhTtIM4qnDuLqhFmJe3hH+oRzPl1G540UvR4t9nr5Oooi5oW6oStkypVleNkbBaRHhmJdwS/1HHfaXkMcDsFc/7ziVqILqeGn0+McFsDktcwDGqsoJDGrcP23xNMKFRlZaurBzsvWUalbCLymqZBgmrrwnZFRzTJGGnc3eBoTAlcEOKzu7vqzwej8fj8Xg8Ho87/gPz1UJUeWEvhwAAAABJRU5ErkJggg==",
    Dv = "/assets/png/25-5531a4ab.png",
    Lv = "/assets/png/26-4568ba82.png",
    Mv = "/assets/png/27-a09316ba.png",
    kv = "/assets/png/29-79d5127a.png",
    Tv = "/assets/png/3-672f0414.png",
    Qv = "/assets/png/30-21c7f3c0.png",
    Vv = "/assets/png/31-30ce3e0e.png",
    Ov = "/assets/png/33-3d0e1a0b.png",
    Fv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANfSURBVHgBtVmNldowDBb3OgCdoOkEzQbNBpdOcOkExwbQCY4NYANggqQTHJ3AdALaCVTrRS7GJ/kHct97eiGxLH2WbfmHGUwARKzso7Yyt1J5RSeW42w2+wPvDUtkbqWxsrFyxjwY1m9hajChZQGZGMklR/puUlMQkggu4BZQq6y84vvCYEn0rPITlkXpzE6clJJLjz+r9JxhjIisrXSotBjHiLdWtpjXyKd7SJGDlZU5FADHydNhOpqtVLlOVFqXEhJ8VGxHg5mFFeyjh+sk6UAJ8ptNlIPijMg2Vj5Z+cifz1Z+gZJgKXr28QJjYo62ZKu1gCKp1KFE22MaO9IV6lMPhWNvEzrQUAsGq0xCEsFKIEcpybDNuV9oFEOLzFaWwKDSA1J3SNhkkspJwGfhvU4R08ZWBW+7zwh6LabRKGSrGDEJUrR2gl7PZT3q2LCO0eqXdGOTqbfg8g51NKyzzvEFEeVzZrQINZdTVpcmhPFsaF3eS8R6QXEf6MwVgybQWwk6Txl2CFdJ9gHkrHsM3rXZMziH/L4Oyk9WDk6Hs/+g2PoKAbFKUDpBATELilQjOB7oG45jqONvPxVbnyEglrMgazrOCbXW7Qh+eOXu97OVR/49QIaPD3A7aGE+4eWERDluRYu8fQ6k4JUTabeIH/l3NCAPXoUYJB0XrYaf5MgtXzSu3HhbuXKvu48pHxqxKng/CTpu5j5639wM3FoCB/7tD+oGLsRDXJNFOT8l04VXZoKixisLk65bJepUuihJsL3gQFoN+gjp/wTwOhnvQXB4y5LklqGFUncesfvIdbeaL8IDXGZJiKX/wlvqgV9dbtJONES8U8parut87rXteum2J2eDWHKfUYEG1MPeC7r37l7RI5+1i+0VA9rW2uDtyCOViJpoBMdu3WE5epSHyJqllsjtIuSqSINyCPaYf3xrwgMv5ZhX0A+83+0M2isEqS619gtcH3h/A+8yhDo0q2npCtfNgxaBGJZ4/xUB5bmXiI+9VrFLkDMYu5WJE1piela3MSMrTMMg36ti/Bqqw/z72g4yWtjifRd3pXUbyAXqh9wp0eOtF8U4dq3BaUFRWsC9wDF6UxC86UYyl6S7VzWZZEiPMnuTY38GEwAvybWCS3Km5PoXxsQ8lP5l8w9KoeguCvL40AAAAABJRU5ErkJggg==",
    Nv = "/assets/png/4-d56bd557.png",
    Pv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAAXCAYAAACrggdNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ6SURBVHgB3VjdcdNAEN51YocZHnAJRwWkg5gK/MMww1vsCrAqIDSAQgWEN8+EJE4FuARTAeoAvTATW0HLd7IUS0QSd/g8Jvlm7JO0e3f6dvf29sSUwh+0vqNR5AjMPBtfLF6a6GLuEzTvyBgy8i6jsyppgx4hOPWQhiKHMPGU32+eQrELy7fRo03GkBD64XouwlzLUXavPaXIMSESvpYmj/6umBBRdoTy/VY/ERr6rw6+ZtL9kg4etXhKNojiKxI6vBuhIT/Gk0VAltDeNTMGsJAxsby9uxdR2WUJqTj0JlFAFoCVEAqSG586a8tJ6F0s+2vd1ie8vlqJYhiCC2N5k5uATOYctMIq2T5tBypnuaAgAWH8pTKmbcANKeb3sPpnhE8XXuqRJbDQpyJyDV+Hxp32ZEq/cgbjdeJwQsr7cjPTLUJCobEmBUN8q9t3Suc8j+Zo5mWybYWfU3zoH5wi+Twz1X8QpJili7WoTPWdkPIHzWGS0ZiPdCztGo4SReMYZDr/AyGNLYUfBwiZWXIpYp7RqoAKpWpNCbFKDJrDfVIIIYQTWc7aLg4hhVpsU3hXi3GVLA39Tv7ZfVKoo6A0JBtsGnVML5KXa+wF2fZgAr/3RKECOvrzuZPww+Y5z1fNet8hGyQbNvewgc/9109H3vnPeZ26/wZkbpENY2RF0k4owgkp4YZnY+HqgeiQ41sfV/WHy0V8Au8eV4mrSIVsUbLYRB9KqSDLkvjXa7FdHEvaiSfqECFplGRaTutMfUgseaf647Ir+P3WWZ3FLRF4l8vn+mLHx3kOU+tukvaTMZIISLFTUjpVj1fW/Uj/CF3h6zHynw4e5YeX38M05BbzRib7AAAAAElFTkSuQmCC",
    Wv = "/assets/png/6-8bb10dfb.png",
    Yv = "/assets/png/7-46f2ea72.png",
    xv = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAUCAYAAAAdmmTCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgBvZfdbcIwFIXPdUR/XxghIzBCu0GgqtRH2AB3AcIEoRNQ3iq1It0ARqAbpBvw0pYSEddOBOInCW7icB6w5JvrnC8k19fk3dcaiGgIgQYgBnwccmTIcy5sWEJeK25ANEWNOvxlEUBTW/k2CFOsrjh/n89RUAwr8hPjStT17s6c7KujXmxcSY3LaOI9SEPad9vk2/KebVg/PkqIxQttawOSIiJ7b8b+FwDtrS1B5MMaoqAYyksfQNDocA7togAmzCtpAfDx70AO/YNAQQBT5pU0AZYuDAGYNK90UoCS5imQP/ul7mQApcwTIZB1+xZVALRqHo6o9GvDX8NZJQBqz2md9fJyjbzzMQBjzZRQSQC4eQDGPlj+tpjK5TopIRth5HtOvZ6bXwDAaLXh48VzKoData3viWkA06XypADGzScGDAAI8ZQS2gGoxHxioCSAH3aFwCgltAGozHxsIBfgeDv86C/b2QDn3UrNKyUAdHjAUe2wc904lp8NIHpM9tiz3UkWZK4Uic+d9Agf0FBmN6mpdACaMzDRoQRA7ZD95EllSDCX5PGPgECNEJcuNJVUEfUPrPshkkfAr5luvgJYf8SxXytq/gG60RhrHqwHCgAAAABJRU5ErkJggg==",
    Hv = "/assets/png/icon (16)-500f0709.png",
    Kv = "/assets/png/CStype1-44df01f2.png",
    Xv = "/assets/png/CStype2-d7b94bf8.png",
    Jv = "/assets/png/CStype3-7588d980.png",
    zv = "/assets/png/CStype2-d7b94bf8.png",
    jv = "/assets/png/CStype5-6b3a66e3.png",
    Zv = "/assets/png/CStype6-3823ff6e.png",
    qv = "/assets/png/CStype7-dea3a1e2.png",
    $v = "/assets/png/EmailIcon-2b12935e.png",
    eh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBrZVBboJAFIb/h6Tp0iPook3Y9QieoECq69ojeIKWG+gJdN9S6AnkBiwbcYFHYN2UeZ1BJYYURZh/weIN+YCPmfcIMtt3ZySAkQFEd5MwQsdQEjgPnHNcFgir3CDPcsMdWsbgXzinBWZMjZzTrf/4mgZOHy1i1C0IprcfwXHiO1PoghZhDJh5ufHt9DtwBtACPYErJYlvL5vAm0GP7L3vWPnWBj2kr3wrJXW+20D3OfhOPux1VUl7aMmWh6biuzO0hCvfgtebT/fZhM5IJWAx1/amZQiZbmgmQJ4+p+DFTY+G1lO46uyUQFHO8KzJV3SstYcSdmCa3Y/DsLrUBprJE7W47WE+dMPsvxuughKRbOC42MAbQUtv42aj5hI0E0Qz9UdxRcxamPJm1ns7C5VTNJKbteyPxaf28NJl8JG6FBNVDkD1AEvDiP4Dj1SboDsbacEAAAAASUVORK5CYII=",
    th = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC1klEQVR4Ae2ZQXLTMBiFnzwcoHABwg3CDFk33TTs2m1XDScg7QVI9kxqTkB7g3SZbPC+zAA3MCfAB2AknuKE0NSyLFlpzNTfTCaOZCvv/fplSzLQ0vK0EdgBajTqs+lTtn4IhYxFP1g6E3GcIDBBDFDwARCd8vCQLervA8OpGQ0lgLzlcUJDKWribYCiu/w6YRN9CH68GlEJr6cZqc18hweVDeRRRjdPDXEOc5Q9USmUSGjmxiXVSg2sUmPIoxOK1hEPLNpI5VQzGlCjyxFrr9AElBzTxKSoqtAAIz+EiD6jSSh5QRPxdnFUeLIQ79E08nH3gMhwdheNo1hThP+c1sC+aYaB3pv848Ez7JvjY+DtYPP77itc2G8PbIv3mJrtz8C2+PmC0b+DK/sxUCR+PocPJgM/YcN34PmLT4sKDYNY/WI+voQJLfzsLD9+/gJYLFCJWpEXWVFpcQ8ovQQsbWxzqAVpYTZqp40szArTXKh8daQH2/yfqNtMhMh5VazJYCCyL++0gComgg1YmRSVGgz81gYy2LCZCHi3MS0zI8PJmTWN/ooymAgonvlza6oxTyWUmECoPqqwFjZYRf/e0xU1xS+1zExV5Yv6i0veTh0W8oPBxsSauuJ5/xdX01emyvInscAnuLCdTvXF61v6pKzavq0iom887MCFXi//9pjbbFEafU1pDywHs4rewRUtvL54a/Q11smciD8m7KcZHhuBaxFPr22nVZuNSql7IcXjkfI/rdHXuOyNdlbjYdfbi0xb+brqznXl9cCyQSWPUOUJ7Y8Wf+Sy7e68hltuq4voC8L3xFq80za71/uBVTppEx2EIXWN/BqvJeUmndQN6qLvcA45//DymnAbnjvZ+AD33sh43URMpzFqEOodGVNKjNncebULFKcoapzPeusR9C2lxQgHqU45FYd4ubdmV69ZOxxefbY+5C+mCtcWUsYhIt7S0nKfP3FZG2VwWyZlAAAAAElFTkSuQmCC",
    sh = "/assets/png/GoogleTip-620c4aae.png",
    nh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHvSURBVHgB7ZhBUsIwFIb/F3TvEXSjducR8ASWUdfiCZQTACdQTiCsGYbCBeQI3TEDCzgCWxfN8wUFHSfFpqQzMvKtaCjkm7zk9b0Ce3YMQk5m/fDoTaOqmK8YKC8HGTEpaiUKo6ASzZEDZ6FpNyxrhQcwl+XyKPWPCW1mGpzdRBEcyCQ06YcXpPWVZnrcJJEyw1wmGSWKmllWbaPQpBdWZSXu1iHZls+Qnl5HbbgKTXthXTM3UABE/Hx6PaxZv7MNmpVh5hcUCBHd21ZKWe9mfkDRyFawDVuFZM9coGDS9qXCH+N/CMnp7OgSnTCoBUcO4BkjE9wOq+aznNaY2ennflfou8y4Hx4zuA5HvAn9lFGaX+UoHcMRdyGiSJ5pl5JRY98yuYREZBDcRqPD0oeUT5lcQmZfmIlPKtHCSPmUySVkJjQTr6R8yhjyHfsvqUtz6Usmv9BKKuEZPLMbjw4CjVAwpqy1jVuFEkYTBZMQdWzjViGTZyT5FSYluasZpNTVG4v8sZSy0nc9wbXTSGehiWpBniJ/LeUvx8RSklR+a4UyN4rjbthQ5P70Nkh2b53fDB+z3OvUuS5DaEqK7KslmZzuXbpX51baIYSZQrS10FpsQwhdQuRNaCklISwxpNVevnhYSEKNTQ4zaQN7CuIdFEgDzJxZYCUAAAAASUVORK5CYII=",
    ah = "/assets/png/promptImg-b275dbf1.png",
    Ah = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAKlBMVEUAAABlZWVlZWVmZmZnZ2dlZWVnZ2dmZmZmZmZmZmZlZWVlZWVkZGRmZmYneegcAAAADXRSTlMA739fv78/38+fbx8QysQzOAAAAJdJREFUOMtjGAVDDhyqvTEbmziz7N27Fxcgi6TKBoOotXeB4DKSABOQr8DAwA3UANRyAC7AYAukrzEwcAIpkAhcgMEXSF9lYOCASBTABRjAJjAw8EIkLsAFGMBmIyRgAnCd7BCJBoRRuRBXMkEkJkAFEM7lgTh3A8K5DCYX3Rigzr57Cy6AAFygIDHAFlg7e6/rMIyCoQYA2Ml+MQB4FKsAAAAASUVORK5CYII=",
    oh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAIVBMVEUAAACIiIiKioqIiIiLi4uIiIiJiYmJiYmIiIiAgICIiIhdhGxHAAAACnRSTlMA3x/vL5+Pf28QWISK1wAAAENJREFUKM9jGMyATYSBgVEIRYh9sQMD40IFFLEoEwYmKVRlrEBlivRXNgGoDE1IASyEqRHTeHopYsMMQg4TcEAPcgAA60EX9PjnW0gAAAAASUVORK5CYII=",
    ih = "/assets/png/superjackpotHome-72bbeb43.png",
    lh = "/assets/png/wallet-6940e061.png",
    gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABzCAYAAACYeCLvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgB7VdLUhsxEO2WhxVZODeYnACzDBAjnwBugFmmip9PAD6BAacqS+MbmBN4IECW+AZxTpBUBbLBM52n8admjAfLsSssorexR2o9Sa3ulh7TBNw3dP7xF5WZZVOECsTkD7o6TNQl4cv1g+Bi0lgeb7ir6+2QpEFCpJiboYCEQQKgKa+Itklkk/CHI66OE6cIb86LNSEuE/PZmx6drlaCn5SBm3N9RCzHTHK6vn9dfUZ4Wy8ei3A5F3LpfSXokgW+1rQf5qStlLTW9q4rI8Lbc12OSGpeyKu2ZClST+4j4t3iftCKCW8+bX4D99nGXnCaNP5S1xpbOobvCjDMoylg4ea432B3ArvDpx6/U2Z1FBGNkxkXwKiNv3pAZqCFpWH6krY9+Nv8Li1RWWHTW6woSJFhEhzOCWXA9JnVD79LODy0NbEwrTCjj21cpgaw7NAUGFekxiC8SMmKwnSFkGg8PDRNRyE1gYlVIV9lGGfGXwL5SY3Gh12lRqk1RIemgTlIfkp/go6C/zpRlF4+HFydyhdRM/mdw+HC+d9xKHQFB++0a3q0hQ/7QfASqekbj0UhMeHVUk9PFHd4Hh0lDUB6gtXvwiVBPEDgV2wTZCXTl7S9qxcPTSybSeJMuUaFwXE3ch5S7+OMqfdZ+72e3GOrFUMYn7LJQROYYShtYzALmRlj0nboglT5GuYknFvdOEinYhKmAP9+iA5REOAmbsIFI3c9K7D9tEMWqLgzCJFFPIhL+NH3FK2EImUTJznm3TXsLjmes1YRF42cbKFG+mDqhxVzF9dCR0K+Wg7p4qUC7PAP0L8mpkORNdjqRK0Jl5epZGNnTfj4ID9s7GbYsh2sCXEzthZKGEV8ZmNnv8L+pb84QlvYEzJXbMxecYUiNRuz11uhuT5t7KwJlbm8rOwsIeb1v0hCW9iXrx6/tbGzL1/eolNPJj8wHRaPiY8lp5cz4fSy08tpOL2chtPLTi87ZMHJ2/kJbeHk7fxw8nZ+OHk7P5y8dfgLzCZvhfC2wfvbyVsnb5287cPJ2zScvP3f5e0fQsBuWfezBX0AAAAASUVORK5CYII=",
    ch = "/assets/png/MyCoinsBanner-41979ddc.png",
    rh = "/assets/png/MyCoinsBanner2-208f6260.png",
    dh = "/assets/png/StrongBoxRecordBg-a4e47cf9.png",
    ph = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH1SURBVHgB5ZYxTsMwFIb/59KoYio3KCNbuQFsbIQKJFZOAD4B5QQpNygbEqiCsRNhY4MBiZEeIWMoNA/HoSVpUpO0tJXglyLHkf0+P+c9PwP/TVRksHNYqaE/sEFiFxzUIwvCVe+3sEquvPR7eW0ZwY5drWLFryPgXYBt9akGs7UnMLkQdCuvfdc8dByW8oqqmErsmXYjAXYaZUd9OsFcxC3ZeZcpsGMrT0XwinnKEutDzwWWpD8F9r6eRYKpp/7jpuz018B8jsWAQyhtj9KGRA/zByehOkPAx5gNTFJtXZh2Z7mhIrjDD6dcDOxnBoTsvLWitt9MwwtC/YqXAsub7Gh0Gtbp9yLi8MKeevLGS4MjW/SUMaGZhpMsur00ZrsU7+xsrKyFTca8rZ2NErovg/uwo9qH7vOHlxcaSZx1Xz5G8KTHwVvbMDPheTGokgU3sYx4R/9nIhc54EWgRGgby6I2uF/ZQqANGsRfQZKzVseq0lCpPNY3B8YFjAqB+aBZ3maCtbh/otNlZlGPyyLz4Jl453IOynUM6BGzqMSb8uo9K0UnH5nRBHGEqSWOJkGNYA3v+G21J3vIUV9j8jQ0nGtQrnt1lDqsIp1r5pFjpXFW8GgBDaupmrDcjUd0uCPnCFZb8fP418AaHnlvRwvgalHg0vUJiTjsbH9DD20AAAAASUVORK5CYII=",
    _h = "/assets/png/Group-74b890b6.png",
    uh = "/assets/png/Grouptip-2ccf91bd.png",
    mh = "/assets/svg/close-f63083a1.svg",
    vh = "/assets/png/icon-0b143b8c.png",
    hh = "/assets/png/superJackpot-37c05c1b.png",
    wh = "/assets/png/TotalAssetsBg-a504074b.png",
    bh = "/assets/png/VipIcon-1bb97a71.png",
    Ch = "/assets/png/about-38aa0cd6.png",
    Bh = "/assets/png/aboutBg-e5b2cd95.png",
    yh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAQlBMVEUAAAD6Wlr8WVn/W1v7WVn7Wlr6Wlr7W1v5WVn2WFj+SUn5WVn6WVn5Wlr5Wlr5WVn6WVn4WFj6WVn6WVn5WVn5WVmvNBy9AAAAFXRSTlMAZiQOP18xWd8aBk2/75+AUnDPj68jiBfrAAACVklEQVRo3u3X266bMBCFYTM+Es4hvP+rVrtNZSmL2ZAM40rd/i+5yCeHsWxMrVar/Zzc+kj3fnWmbMuwPUvelMulLVeOdv32UnJGv/DFQiMZ3WjMWEHaTsPGt2ZalcXSZDTyDIsDrreD9GncQcf14TKWGFZ5wG3eQdo0jvL7TVSGxdIicH3aBCUvG2V9Gll5PSnsII0BD8N2WSmcdykJIJTtaXjcLm09DQ/XwsPZJbvt4sJJeL4a9v8K7k7CVOivxu7XusmczRd6xdjjSvdhzmfX69zRFjiKsbsT3AKK3wUWIT1M1nwWTaVYpEfZTBWne9L4FD9m3fuKJWpvOOCyHXQjovb7xfnmK2c/p5MH9s+vRuJd1/wN6SWdHWVkn7kDl6FpkrG8bJtcpt8Y8JFhcy23YAndE8MeLjk2ENKhZ3cQslDchRsIaG7A7wwLMfCHdPIMK4AZekk4ysjKYaRpSQesGObHbJ4Wz0yyGEYaQ1YOIy1gBTDQwCrASCOrA+cCc5xqwbn4smg7Nzk1GGUbGy0Y5RscLtownm8hP1WAIQvXh0JwgOtDIdjDG9aBMQv/dCGYzO/a/KQsTM2zCle4whXG9GHf5JRgvwvP+vC8Czt92O3CrT7cmt2iNhzNfqQNk2HqdOHOcN2iJhytYbNRBUYXZacFu5v5PooacNdmQURnWMQiLYWRFdIIi1mkJTCychphOYu0AAZWRCOswiKNsAqLNMIqLNL4fazCIo1n+qzBIo1nOmmySIf8OKixSPvsZlmFzbSbowsvR6sNXZxda2q1Wu0/7xdfC91PBcmGXAAAAABJRU5ErkJggg==",
    Eh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD5WFj5WVn5WFj4WFj5Wlr4Wlr4V1f5WVn5WVn3WFj/Wlr6WVn6WVn6V1f6WVn/VFT6WFj5WVmkHXJzAAAAEnRSTlMAn+9/v+9vb98vIB+Pv29fEI/8P8prAAABiElEQVRo3u3Z22rDMBAEUGt1qa+1o///2CL6MNCuE6HVQAKaxyTsiaQEgWcaGRn5l8uHOTdHQtqejl9DNsc9IZLkDpGvu/k+d4rX56dccqR1as5y/h6guoa17E/EW435LmNEOwdX5i+TOUsRgrIALM26hjLpUk9gnroklHNWXz37AEndo7JzSx9gVTejbJx9NmYNgA94kZ0J7OXzjghIhkACIFAAnyFwDtlB4AAQWAAEFgCBBUBgARBYAAQWAIEFQKgHvOSWuFpgz43xlYC0AvIugG8FHrWHvMfckOg/7dIfwAAGYAAsd4LsFYDxTqgEpBWQdwEMd0LlIbtsuBMqAAiO9T+AwAIgsAAILAACC4DAAiCwAAgsAAIJgOA5AAQhABB4AIQHEZj2GP2nXfoDUGaVZmHrM39Rf9UBT/etOUuRoj6EC32AWf2uV4+CAl3QptcK0qticXclkVjWgC4ubrfdS55Pwyq2FFBz0Ys6vQOz5kUXt7pszvGij01HzM2ZD39NIyMjf/MDbLyK893bZXoAAAAASUVORK5CYII=",
    fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBpVRRctpADJWWTtpPjkA+moavtCcouUDYDOE75ASQE2CfIHCClO/Ug+ECISeo/yjwEXoDftOBVaW1TdcGD8lEMx57d6Wn9dOTEPbY81CXXwy0kOg7L7/yU7EHBBEgLBFxdNIIf+yLxfzG7KfWHHkfx+OATAwia4VQ5pcGtIl4G/08cAZwHlzcEWHLEPY/fYDe8WW4ggL7HegO/0FXIfU+N8b+DuAi0F0D1DIKz6uX4RJeYdOhrihDjwgUnjTGt1vAeaBbRHRnSvjttWAZ0A39YqibL1dhaAFnQf2ZDPZPm2HPdV486BohdSkuTJmdJ4A4yPM2e9Ae89o+KuGxktvJ5g6YUID0yGA1AZM9+eY/uV8EF13X94j5lvfLGlqKgOpcrYnrIEkMkQcFxkXzpnz7dC3FE0XwZ42LBBUiGGUiCK7hgJWYCnetWF6IdKaEH0OwyuJR7RBgwuvWMNZqRRX4F+rPsfK+TQFcllTSWmk2wAgOmK24YybuokjxSWTIZK6/IfAPAW7QFuF/AqQ6d9kf5hCf+EbXMhDSw2oznHAlC0FZAX41p0UrKQWh+qjAHvxdm47rwKCeQbxxJLWSb050Xm2OPdd3PtRtG8NJ4k5JJsx7Wo+T3wqgrbL0oAhTGl0c3gTGMUxBP6UgM75Y/R4rvc3k+vlWdE34XhvT5t/vsGYHp1fjLV07A3bKbacg7gKRBoOPVCJ87qgKlMyZzMwk3E4YNx6LbhEDQ922JlAqqyXrI+KKPkkx9w3gf91DHVciMbkvAAAAAElFTkSuQmCC",
    Rh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAtFBMVEUAAABcp/9cp/9epv9dn/9cpv9cpv9cpf9cp/9bpv9cpv9dp/9cpP9bp/9eqP9apf9Sn/9dpv9Jmv9eqP9ElP9cp/9cpv////82if+t0v/B3f+Zx//W6P/m8f/N4f/0+f9Il/9Ckv9wsf9Rnv9Qmf9Lmf/r9P/a6f+00/86jf+Duf9ao/+jzf9Xo/8+j/+/2v+32P+Pwv9mrP9op//g7v+31/98tv91rv9mq//N4/+jzP+Nvf89OsrBAAAAFnRSTlMAf78gEN/vz29fr58/n28wz49vT09A/ixTGwAAAdVJREFUWMPtlttygjAQhkHAQ221xwSlCSogKJ6t1bbv/16Ngc7KTIBlai+c+t3JzH4uu3802pXzYnbuaoXcdIyicr1OymnnKowGQWHlGaC+zGAq61sETVspsAgeVQsvpAJNhaBZRXCnEOhVBDe/FdSKBdOPVxUOVjCiOfSQgl6eYIwUzPIEb0jBZkyVuOsSAbB2VBzKhljKfxKMVn0FK3wSXarm8+KTSB30EGc9FdMLysEfCuZeMAi8UsHBgcmt4XE8mNgJw/viJGbW2Ccpng0s2gY+SO9EMrAlX+H2KCCWgY7yFOoFjC6P70CEAXGY4AAEstqPmHjCWBjDn7wyiTs4xLuRnP5E1ruZ19IrrHGYtk9Dl7qcRwER1E28QDYQUxoJCU9mIGiiBLDBrRhoRlDDCWCElIb+qaCOE8AOOZWEkZ8IiIkVDBOB+PoEFhCJge8gZboUWxCaFXSAn8FPEvmQUbfiDLyMwF5SuoGbEioHGYHP0ny3cNc8GMKWMXZy2bG0DLdFglhGMaIp3IMGgBopm4LPORdbiPaTOeQQ1wJsUiZxoL70P2AMTri3F+JjA+oxi4DfBMEiJnVdU9KyChWejHRAGrqp5dF90gt5fL7tmtqVs/MN94DbsbuNvhYAAAAASUVORK5CYII=",
    Sh = "/assets/png/betHistoryShadow-5178f41c.png",
    Ih = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADTCAYAAACBZDMBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANVSURBVHgB7VdNUhpREO5+JCZLcwNcxMjK5ATBC8hY6lo8AXoC4ATKCYxrQzlyAfUEYWfUheQEcasFr9M9A2YGmdAyllaq+quimJ/vfe9N/7yZD2ECbo6D+TsPVST6yqef+VeMbhB0AaGHiCeL6+G3SWNx/MLl9yDgkQfxeDwkH4vIuUOY578AMJqIL2NzXDgleNVe3SPCqidsvX8D+wtr4S1k4Gc72OEnqDuk/Y/rneYjwet2UPdAVe9wpbQW9kCBi+Og6DydIlC4uN7ZfRC8agdVItrzBfyiFUuJDugHS21/2gjDSPCyXbkhj62lzXA/Sb4+CsqEVKc4MfNMPgPEw/G4XR4FDY5rba6AC05WJxcfiUkIkE5ZrCxick2O+UkOrtur9SR3juMt/3d9qDoCqnC2zpIEmcQTNSADnLTGBa9+dC7Jk4rgwzInCYpEcJIaQbAFU1DgUCTPHZcXIi07iY8nuE3rUXma4DCuD8C4Vosug59ZfwnMT7oogr2CG7bWaDbALkxBlPEEfNxFXcd3up58avkDguY0wQFGSfg7AVKFu+wXxxDPeUVbsiGMbpY2wzPOZKYoV0CzNFaLUUk5CN07B9GN+77fSRJYtOERtxMldSvHPNFKabPTSHKvjoNaNIYniTtluMPkaT2efFcEoyxLD0phSqML4UliPIZD0BqFILV9cfU3uNJrHNzmeCsmIfHue1/jx9/hmj1c2ug8hOvRBnvBbecg7gIpDRY/ccPC544qQsEvy545HB7tMMnxmLWKWBgqUWsCjcqqx/XR5YyeSzL/tQEbXgDymtDwHCiBhKqMqgXfFmBFw1ML3g/ot4anFtRCL4gYamhqQX6rtVQ8UEJe+hre68WQeEfW8PQr9DqavlOQ9jS814uhvD41PH0d8stLxQM9Ag3p9WLI388fNDz99tV/7tZzkz8wDc+PiR9L5pczYX7Z/HIa5pfTML9sftmQBbO3+QW1MHubH2Zv88PsbX6YvTXMgKfZW4i+9Ltmb83emr0dwuxtGmZvzd4aXgzml/MLamF+OT/ML+eH+eX8ML9smAHml80vm19Oc8wvm182v2x++b+A+eX8glqYX84P88v5YX45P8wvG2aA+WXzy+aX0xzzy+aXzS/P7pf/ADcH9xf/PpFGAAAAAElFTkSuQmCC",
    Uh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABRCAYAAADSHIbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgB7VhNUhpBFH6vsUyW5Aa4iJGVyQmCF5Cx1LV4AvAEwAmUE6hrpRy5AHiCsCPAQnKCsNWCfnlvBsjMwIRnOVWklK+KYqbn66973k/3m0ZYgMc7J/1koYBE3/n2K/8y3gOCNiAMEPF++9C9WtQXow3dW8fhnpd+f7wm64vIvUFI858D6A3EzViNCocEe/X9cyIsWMLaxw242DpwhxCDn3WnxG9QNkgXnw8b1TnBft0pW6CCNbiXPXAHoEDnzskYS00EcrcPG2czwV7dKRDRuU3hN61YSHRMP1jq9MuR63qC3Xr+kSzWdo7diyC5f+PkCKlMvmPSTG4B4nXUbt0bp8J2LW6mcMvI7KRxTkxMgNRksZyISZtc85tc9uv75SB3k+0t/08jKBgCyrO3WkGCDGKJKhADdlqlw7Of3ovzJCL4MsdOggwR3Id6EJzAEqTYFMF7w+GFSLtG7GMJhmE9yi0TnNh1BvRjNWNi+LHxF0B6UaMIDlJmklrT0QDbsASexwOwfha1DT9pW7Kh6Y8JqssEx+g54e8ASHnOsl9sQ3zgGZ3IgjB9mD12W+zJWFGOgGo2EoteSBlwzQcD3oPnkS0FCSxasYingZAayjUPtJc9blSC3N6dU/T68CB+pkxWmNekHg9+JoKelyUHJTAl0YXwIjHuwyaoTU0QWr44+isc6UU2bjWaikGIvUfWFvn1Sxyz1ztHjZm55hbYDqedAT8LJDRY/N5MAp8zKgMpuytr5qS7t8IE+2PcLHxhyHupCTQNqwHHR5s9+iDO/NcCvMY8ZFXX8Ay8GfRu800NT/3Kk80qOUEt1IK8537S8NSCz2O/gEpMEKTqSlhQBbUg8mqu4elnaO3SauJFgryolhIV1EItKNunhqcWjJYrrxaUQlPDW6ENuSzR8NSCG9b/+ElMUAp4DW91NuRiqqbhqQW5yr9S8UAJMvL5laCgFnpBRFdD029SBpINbN6kfmt4K9xTIl+s/x/eYX34drDwS2p9mBaL9WHa+jAtjPVhWhjrw7T3fpj2B/TkZOQ3jkU+AAAAAElFTkSuQmCC",
    Gh = "/assets/png/betSixInfoStep-397d1357.png",
    Dh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAADTCAYAAACBZDMBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANVSURBVHgB7VdNUhpREO5+JCZLcwNcxMjK5ATBC8hY6lo8AXoC4ATKCYxrQzlyAfUEYWfUheQEcasFr9M9A2YGmdAyllaq+quimJ/vfe9N/7yZD2ECbo6D+TsPVST6yqef+VeMbhB0AaGHiCeL6+G3SWNx/MLl9yDgkQfxeDwkH4vIuUOY578AMJqIL2NzXDgleNVe3SPCqidsvX8D+wtr4S1k4Gc72OEnqDuk/Y/rneYjwet2UPdAVe9wpbQW9kCBi+Og6DydIlC4uN7ZfRC8agdVItrzBfyiFUuJDugHS21/2gjDSPCyXbkhj62lzXA/Sb4+CsqEVKc4MfNMPgPEw/G4XR4FDY5rba6AC05WJxcfiUkIkE5ZrCxick2O+UkOrtur9SR3juMt/3d9qDoCqnC2zpIEmcQTNSADnLTGBa9+dC7Jk4rgwzInCYpEcJIaQbAFU1DgUCTPHZcXIi07iY8nuE3rUXma4DCuD8C4Vosug59ZfwnMT7oogr2CG7bWaDbALkxBlPEEfNxFXcd3up58avkDguY0wQFGSfg7AVKFu+wXxxDPeUVbsiGMbpY2wzPOZKYoV0CzNFaLUUk5CN07B9GN+77fSRJYtOERtxMldSvHPNFKabPTSHKvjoNaNIYniTtluMPkaT2efFcEoyxLD0phSqML4UliPIZD0BqFILV9cfU3uNJrHNzmeCsmIfHue1/jx9/hmj1c2ug8hOvRBnvBbecg7gIpDRY/ccPC544qQsEvy545HB7tMMnxmLWKWBgqUWsCjcqqx/XR5YyeSzL/tQEbXgDymtDwHCiBhKqMqgXfFmBFw1ML3g/ot4anFtRCL4gYamhqQX6rtVQ8UEJe+hre68WQeEfW8PQr9DqavlOQ9jS814uhvD41PH0d8stLxQM9Ag3p9WLI388fNDz99tV/7tZzkz8wDc+PiR9L5pczYX7Z/HIa5pfTML9sftmQBbO3+QW1MHubH2Zv88PsbX6YvTXMgKfZW4i+9Ltmb83emr0dwuxtGmZvzd4aXgzml/MLamF+OT/ML+eH+eX8ML9smAHml80vm19Oc8wvm182v2x++b+A+eX8glqYX84P88v5YX45P8wvG2aA+WXzy+aX0xzzy+aXzS/P7pf/ADcH9xf/PpFGAAAAAElFTkSuQmCC",
    Lh = "/assets/png/bindemailsuccess-ac26aab2.png",
    Mh = "/assets/png/chessStepIcon-be37675f.png",
    kh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEgSURBVHgB7doxCsIwFAbgPyK66KSLTm4ubl7DQ3glb6Bn8BxObk66eAFddKkvUKGDadKSxvbxf/AIkofkx1JfRYCIiKg1DBLIsmwoy0pq7Gh5S52NMQ80rI80NlITT4/dP6JhPaThC2vNkECqwK3BwNoxsHYMHJsMHasKvUs0zHgOYA87RX0DqQWquUm9UN9dJraLa9MZWMKuZVmjm04S+vRro+ySnqO7nGfnTUs7BtaOgQveUKgs8B3dVX3wsGT4sN9no/zlHu22zdenDB3ODyv4RzwJn6HFJGRQFt60tGNg7RhYOwbWjoG1Y2DtYgfeSR0C+3aBfSHvFyzq09L3icXXG7uv2OvDS1o7BtaOgbWr8se0awO9sfuIiIiI6G8+gs0953x++ooAAAAASUVORK5CYII=",
    Th = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAPFBMVEUAAABmZmZmZmZlZWVmZmZgYGBmZmZlZWVlZWVmZmZmZmZmZmZmZmZmZmZwcHBmZmZoaGhlZWViYmJmZmaQ3CEcAAAAE3RSTlMA3x/vTxC/f2+PX8+vLxCfPz8veJ/ZawAAAX9JREFUSMfFVduWgyAMlISLCGi78///uh6Ljd1Qy/qwmxclzsQwgWT4B3M2ZsMAJx+t+wi/e8bRsj2F2wRgDUzzMMzFBg/ATG/h5AEO84trMkCiNn5k8Kjdk9nc2gIQ5+aPFyA08TWOtrHBCODbezEKI6gY5Uy+24//E8v6XVZ81CpheShCrcpvjwh/UA5mQ1oYxSCDaeMxpOjVNzijGPR0jUi708Kozw0H417fMiYN0Muw78IBpCGa7sCuZuRVEs0EPXbBgkpb4zdgFKJmCF7EybVqpSElNSSuajLcoBmCP+56ewLiE4bCC/I3hGspGVDfpks9TblfVi/16ClcQLx2NBzD9Rw+AtzODD3He0J+tgTuuUBGxEkYNV4Ybr/4B73YSTNQDCvNQPZfBWs0V3rgFqRLjUzWuJ/hv4BRNeNyMsgY4UK714yFWnAXd7weWWbqmGRilLBS6CV6YMCLqzEAAR9scSuWbPQA0odJnXE09rfhk81r4MQAmxyl8n9o3+cXFUkPG2qYAAAAAElFTkSuQmCC",
    Qh = "/assets/png/close-7b93ef94.png",
    Vh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAQlBMVEUAAACZm7iXl7eZm7mZm7ifn6+Ymriam7iam7iZnLiXm7eYm7iZmrmXmreXl7eZm7iWmLaZm7abm7mWmbmcnL2Zm7jB8zoAAAAAFXRSTlMAXyDv3xBwv8+fQL+vgECQMFB/UB9VK70BAAAC0ElEQVRo3u1Z2Y7cIBA0tzHgYxL//68mY5BGq3KDSXt3s9LUm5Gp6oOzGd5448sgRfJO6/0vlHYxbeuN5MZGtQNUFPIedreTcGyN2au9Di859C/jVVjEJg8ys052CYovIeNeEOw0AFYbeBKPYqNOhh5aukg8+s0fi/HTUMUWihmdTlgF9BSm7IWyPfxLVx+hO8Nk8uCJ5nI8fZ4Vpif8yvaHdJSX+DUk7dZeZgRbOvwe21Fytf/alrnm9AL+ToWlkSzg71aw1UAqyFR3plWtO/6AaBo4NhJgO0kxxInUP5begYVYi4HPCWDBPIMUKw6I8sEL0kQ7MLDhqOkmszQb04sHHQhs+uKCJxz4VT7YLiiD2xInAzhdLTpGDyEzy/NmQiCVNGOEJGFRlkaXtTk36Mll4HcyxfPp/BCVQedOYhRzG2nQLoCfdtmezObnDF+pYwkoYBOOo49NKzYhXY0fzf39oWXDFNAKyN8ekgl2U0IBPsiTYSJyXFcAfvpvDz5NwwUFkr8RcQ2DiFIg+HHaaki7Ga4oFP5egWev9jG9zY982NBWEMNPFeCESMPcZiXZwMoDArxhusIocrAhsybaDBPNQx/GUgEbwictdkDg+Ms1HXF5/4azYtPE2DJxf7y+6Ut60ze1HGObu+/Ygh0MbZChD14VlyWq0peryZzyQHP1EGfvPfyiy6aMIz424sznIc2cCwh99WFjBgfg9sbPgKdvb5bLL7ID9C3d8PhlcYAuZUSegM8OEEg3F0MQ4x3lHP2NBan7S2qIhVsUTJ9c1gzfX5hllpb/h+J4Lu93vcyYeHQI1zOXjg5adD2XLP0u73q+/BambHfSDritTQ/hvxymEiiyr3kUM1T6p5XF7wXOrie2vx45YzaBI7Ert9h5NUer3MTijiTBWxhDgoDyE/ulOtD0weahz9Y4f7AGdg7WLcWgDx2tg09CDm+88VX4A1hDX4dTj/4xAAAAAElFTkSuQmCC",
    Oh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAG1BMVEUAAAD////////////////////////////////rTT7CAAAACHRSTlMAf2/fzyAQv1i/o5gAAABWSURBVBjTY0AHSYJgoApis1p0gEFzApDD1AKR8VAAchgbIaolBIA6xNvBOkAchA4gB6EDyEHooBOn0EMBweloDkCSUUP2ALrX2GBeCADJB0Fk1NCDCQANHCEHp1BAOwAAAABJRU5ErkJggg==",
    Fh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB7ZdRToNAEIb/mfjQNzkCR+AI9AaliVZ8qTeoPUJPYD2BT4pWU+oJ5Aj1BhyhjyamO+62llI0AVIsNeF7WjYDfDCz2VmgYRcqEhSGofXxqTpKYKMCmDnyz7wIZUSCILSF5U0PbVQIg8YXPW9YXGQS3onIlR7OBfKKPSEhSxh9ElikqO376z9zkn+r2KsHKBpe+t0IFXD/ODW/YKBYufoyMnOMOiBZZKfqEfmFndSYwiTGQEiczZwCHFNIumBvgsl0gbIsabSpg8IiZnWIWR2ynUtVsyOC8rC4+gPbeTJJah6eXjqoeIkmkFznhSQiAnLwVzBO80OOhEYkSyOSpRHJ0ohkaUSyFOjQ9kfv2lbwHLqrsVpaehfsr1/O84OKwLQQatWAI5WEuNfzZgcVEcJCvz75elF41030OB1zEBEj4Z932zkxx0EiQsLl+9EKSYlsc1g9FOdFJCKmudXL7BbVE2OJUV7QjyOn7rjd7xPY3rBC3GrxzPO8WtP+P/kC9A55nxt0GWAAAAAASUVORK5CYII=",
    Nh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJGSURBVHgB7dq/btNAHAfw712c0ikKXRgxA4EwRTxBmBjjioJgql/BK0vDEzQ8QdMVNa3zBPAGjcRQJUWqFxYYKBJQ/iT+cWdCxUAa+5qkzun3kSI5ih3lG9/57LsfwBhjS0Qgo21v1YUceWrzNNj/1caSyRR420MZcuVQbbrjw4Ng/0cLS0Rm2ttZreE8rIor0MCSyRbYAhzYdg4MlK6XcO9+FU7RqQ2elV7DlECEkXhZeRL2sCBGgZ2VItZurOnNMgF1mFIHQ5I/2Gu8UVfA3cqjsI05Mwo8a8mfRlTvdxpbgqg1KshudT2MMAf56sMElyBackQng05jZ/DKq2HGcnGG/4cIvm7u/b0UQ72+FpAI7myE4bRd7bhKk74Zop2TA688bVebhqXy9yGmdgG+8bAdB7YdB7YdB7YdB7YdB7YdB7YdB7YdB7Ydrzykcfb1G47fvkPxWjFyb7u7MCWSybdNLJBZ4C9nKvCxWiwQ0cPnvSYu4ejAayJGXYK2/sw+zteVz0uPVxja+nXU8fwCYZNAdZhw1Pz0FLnqw1W1tlTZCB/EBXFLtfdMXSUmepFmeSaXKw/jH+4nzX2YopmrM1td70ZIIbdLLdo4eIQZ4nHYdhzYdhzYdvzw8C818Lsihqdeycr650+nNz+8/3j+uXp4cPtP3ebf90IiWkQlzmVMLC7V5QM/YzrMekNPJIK7j8PcFpxObNJDXT5g8PQiBeW64HRiYMdBL6mOySgm0UWOXVgvrfuwHMJH+m/rpSkdYowxltJvqIujkC1YysoAAAAASUVORK5CYII=",
    Ph = "/assets/png/customerBg-1f590d5d.png",
    Wh = "/assets/png/dialogNickname-033485cd.png",
    Yh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABPUlEQVR4Xu3XQU7CUBDGcY7AwgO40o0mJlyAXcsjmPK0EF2xYu0RvIneQG/CUTzC+CQZFzNpKdhX3jy/XzIbkmbmny6A0QgAAAAgF1T6DZVL6jQz/yKfNyeEvKuwpnH+TT5vDoLbBsEGIbhtEGwQgtsGwQZlFUxldUnu8bV1Zg87FdY0xXKnnpcTdso7BkOF/1BHx56i+pR3DIZcfRfe4Jc6Ktb87Ao75R2DGiw6hVgWPTqlWBYtOsVY1nt0yrGst2gLsezP0ZZi2cnRFmPZ0dGWY1nn6Bxi2cHonGJZY3SOsUxF5xzLfqP/Qyzb/4+eTsfycwAAgA7IrZ6o9NukJ9wo7z5Z+IHwrBakNuFGeTcAADCar29oXk2ijFtfyX1nRYvFhfqa6HvCDrn3rOi+vlZvpq9x9a3cBwAAOfoGv1+Cdxt0SHQAAAAASUVORK5CYII=",
    xh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEnSURBVHgB7ZQxTsMwFIb/Z5MIMcENygZbVzY6AVsLYocb4BvACXwE1gpRlJWJjGx0Y80RPIZIiXEQIAbb2G2kLv6GDPnt+Iufn4FEIpHYMOQK5EU+hda7GIKcl2JeV7Zoy/ZSnmdX0Lj3+MXRdMo892wRs05gvMKgkHIlVgHxWJdmksAwi1fIaeJKuSt4fm9fTw95X4NjrI5Czo5c9fcKfEuUa0kwdiYe6qVviFfgR+LkgO8TYYwoSIjFx/zfUQjEtOWb6YxQiTvx1NyGDGQIpW0mXwdqwMV7ohpdTrdHYPoF0CPrxwjFzaKZIYLwHTCIwpzmjuw7QbTU7c41IokS+JXgXf+Xfy4XI5TRTBRKIZKV71p5mY2pY9KUQ+mMCV+vJxKJRMLHJ5XwV9vD+MPJAAAAAElFTkSuQmCC",
    Hh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAZjN/DllfHwa/Jm8sPxnvn0oT38+PTjhAr4Ga/9wAAAE+SURBVFjD7dfBboMwEEVRG8YGEwiBBJL6/z+0JU31FAQRnpcuWnE33h15xmwwe/+9Muu8dV3FMo195Cjq6C3qRO1k9iknrAOJdSCRDqSSc9A11SnsSsfUh1+DukSo9GtS6paua1Cx3TjIq9nqzU4eD9MxrkDZdieG6RTlaHC+al5sqU9w4uX+cG7JcSlO/N5S7xegKsmJ7X0TlfJCcB77NrWdJxsdNCxKdZqDNZnepX1DcJA3U3LjHNzJVE7poNyA0jho+Hmk4uY0Djo3BmkcdCpoBxTpoFCQDl5vQ55zUOAc1L7JEc5BDeegkXNQzjnog3NQ4BzUvskRzkEN56CRc1BOOoA4B3nOQUI6aOAcJCGi8+WUezHKfGgn4eAzMXu/VllnqiqZQc4qc/NfMnX982R6aDZbppzN12bv7/YJ4RFYNVkqAPgAAAAASUVORK5CYII=",
    Kh = "/assets/png/editPhoneIcon-db913345.png",
    Xh = "/assets/png/editPswIcon-373caac7.png",
    Jh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEUAAABlZWVoaGhmZmZmZmZmZmZgYGBwcHBlZWVlZWVmZmZmZmZmZmZkZGRnZ2dmZmaxKdnwAAAAD3RSTlMAP0DPH98QEO9vX3+ff0876Tf7AAAAlUlEQVRIx+3SMQrCQBSE4SnCglbmCpZewNJtvIG9gr3kJmtnqZ7EI3gQSwkkkDC5QWbKhOxXP/7iMZi22wZSONQXKFfyrkPkywjVlRE6OaGYQwsONe9yVMSXUotEqQGdow+lHsVWisjmqyil6E0lUfPm+6TUqWXuErmHcCT/lXrQOYcWHApOaG2EsDJCCEmHgN8DkzYAjXClewBa4foAAAAASUVORK5CYII=",
    zh = "/assets/png/feedbackImg-b7a3bd03.png",
    jh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMBSURBVHgB7ZlLTxNRFMf/Z/owJgYqLrpAk2p8Jj66Y6GJNerCjUzjYyt8AvgGhU8g3wBYA2n9BLh0SXCBUCPdsNBFU58NlJnjuUAC0Tvt5U7L1Di/ZDKd+zh3zrnnnts5F4iJifmnIYRgo+zm2eMyGI10kh5cLFYaJv3Wym4u4fEsE3LkUfHqy8oKLHEQAvYwKbecmCHf8uGa9nM85BkoiOI5JDCBECRNG26W3cy2jzGHeVQGz0tRRq75I03ury+OzprIIsIc8+Gz9FNPDXGHFamc9xy8vVGs1ExkGc2AuMrEjsebxPx6z3L7L99tMko2M886Pi9Xl56WTDq1nQFl9Zb4uPh5ASeJuJYPmpKZyacTNN5ubbVVYMdn5RIFRIcrM6/uxaAGgS5UXXJLYgnjhdlD3A8L7mRQpVYBFeZ88Bg6wf7hT2ardcHo3I+IS8qddXVaF0r4ajFJiOsseZCI5nzGVxlkFAwj5KUlhNK07AMZBzxo0C2zvYsxuc/8WZEMGOEVzHDF8vu7oeHLH8iXvYNLqh+b9ytAo4Cjl8959Bkyw3d05UGLuBdxPiw5XWGovxL9QKxA1MQKRE2sQNQYf9Ac5dfPJmrrNbR2WrAhlU4hO5zFuewQwmKlwOq7VdQ/1xGGrU9bePz8EcJi5ULKgmFJpq1s97ccWHB75BbquWHstnZhy1AX3EdhpcCeD1/Ioh+Iw2jUWK+kpoRSowHE3VKp7ixYrXxYUH1fleujcfuRhyNdifk6rFzoW+P7sdrXv4TbM9phNQNXbl5G80dTduLOYfT0mdM4f2kYvSJIAZUJC/ysHDg7gHtP7uKEqekKtS5EIOt0d6+g4yjgE96gz/Aka60r1ypwysEc9t2oPyCxvqTcdVVaBVQ2mImm0Sf4Ps8HnRe0PWLaWHSX99KAUUJUufascvzstCKVkLS2CEBUyNhpB+Ntm8CAtQV3yiFWZ1knlbFrsCR/r7+ozHRqaHxKqVLukKx1QhK/B7nTbivTUOFbRUAVRExPPGNi/nd+A3Dd9TxMPPz+AAAAAElFTkSuQmCC",
    Zh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAABzCAYAAACYeCLvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMVSURBVHgB7VdLUhsxEO2WhxVZODeYnACzDBAjnwBugFmmip9PAD6BAacqS+MbmBN4IECW+AZxTpBUBbLBM52n8admjAfLsSssorexR2o9Sa3ulh7TBNw3dP7xF5WZZVOECsTkD7o6TNQl4cv1g+Bi0lgeb7ir6+2QpEFCpJiboYCEQQKgKa+Itklkk/CHI66OE6cIb86LNSEuE/PZmx6drlaCn5SBm3N9RCzHTHK6vn9dfUZ4Wy8ei3A5F3LpfSXokgW+1rQf5qStlLTW9q4rI8Lbc12OSGpeyKu2ZClST+4j4t3iftCKCW8+bX4D99nGXnCaNP5S1xpbOobvCjDMoylg4ea432B3ArvDpx6/U2Z1FBGNkxkXwKiNv3pAZqCFpWH6krY9+Nv8Li1RWWHTW6woSJFhEhzOCWXA9JnVD79LODy0NbEwrTCjj21cpgaw7NAUGFekxiC8SMmKwnSFkGg8PDRNRyE1gYlVIV9lGGfGXwL5SY3Gh12lRqk1RIemgTlIfkp/go6C/zpRlF4+HFydyhdRM/mdw+HC+d9xKHQFB++0a3q0hQ/7QfASqekbj0UhMeHVUk9PFHd4Hh0lDUB6gtXvwiVBPEDgV2wTZCXTl7S9qxcPTSybSeJMuUaFwXE3ch5S7+OMqfdZ+72e3GOrFUMYn7LJQROYYShtYzALmRlj0nboglT5GuYknFvdOEinYhKmAP9+iA5REOAmbsIFI3c9K7D9tEMWqLgzCJFFPIhL+NH3FK2EImUTJznm3TXsLjmes1YRF42cbKFG+mDqhxVzF9dCR0K+Wg7p4qUC7PAP0L8mpkORNdjqRK0Jl5epZGNnTfj4ID9s7GbYsh2sCXEzthZKGEV8ZmNnv8L+pb84QlvYEzJXbMxecYUiNRuz11uhuT5t7KwJlbm8rOwsIeb1v0hCW9iXrx6/tbGzL1/eolNPJj8wHRaPiY8lp5cz4fSy08tpOL2chtPLTi87ZMHJ2/kJbeHk7fxw8nZ+OHk7P5y8dfgLzCZvhfC2wfvbyVsnb5287cPJ2zScvP3f5e0fQsBuWfezBX0AAAAASUVORK5CYII=",
    qh = "/assets/png/gift-0e49be1a.png",
    $h = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAV1BMVEUAAAD/piL/pif/rjb92Vr/pSP82mP/pSL+2Vv/pCT/piP/pyT/qCz92Fn/pCL/pSP/pSP/pCT/pSX/rC392Vr/pSL+vz3+y0v91lb9z1D/ryz/qyj+xEPCYJ9SAAAAFHRSTlMA30ITwMAi79CBoXEj0NCwkWJSIug1W3oAAACxSURBVEjH7dPZCsIwEIXhLmm6uduTte//nGJBJgqCM8VCIf/9R2YSUuT+UnWqpfTQABcZrXs8qyR2bLHUCJZt8OrGXfYMqqx5y7ZI6xn2WuK99s5flhp+nHj4hN+fS6uJ1VEnuJuYqQRP7DLOOOMlZyKokoVnomxsATmOIkwHB2ujCBsAnobfEM8AgvdBhB3W3LZZg10QYMoIMOWsoca9fMmM948V13YJ1h3PKl3kBD0AJWCmH9OugY8AAAAASUVORK5CYII=",
    ew = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMOSURBVHgB7ZrPThNBHMe/s+0ifw42mNiDkmyNgD0A9cZBY3v0YrYRjTd5A8Ij+ASNTyDcTIzp+gCGesOTVQ5NJMiSQCIHSA9GhLI7zq40QmDame0u6S7zSZp0O7+d3c/89s9MZwCFQqGIEQQhUTEzGaQOqqC0yGqtQ9fKi2//2AhAxRw0kKJvTupagjO8uGg1mwiBUIT9E9TcFfbVOPWzjQGtJCt9YV1eAzrDpTCkexbmyLaRku5YV0jSPQl3kW0jJC1UVwjSGnqhuyz88iN3pfJikBsn2HAARQGp3yvogcDClbnBIrrLtuFKC8u2YdIVc6SAgPSWYTnOSUvLtkk7GQSk6z28WTUzx8coOBoKxMWZA200NhZcx5U6uH5Nt41xY9n7bq/bL1uHLSPo/qdhmauNP7Nq3fbvKPy9ahaoQ70MBG7RS4XAJg4pTzy36vwQDo2qaWgO/YK4yP6nOZAiuVzZuvBJzr2H2eVrIn6yHpnDY8zzCvnCoI8QX4q8Ar4wJXHMro9G6HVuGa4YSjjpcIUpsIWY4oJ+5ZVxhV3KBt4xhVLN4pVxhfNeN43SZcQMCvo636GL2bUv3XhvzqcoFlhFgUcol0CTgNQdguX8U2upU6DQHwAn3cxNSPBtdQ3bP7YRhOnZady+c0tmF3ty7kNOJFA9pZOOEk46SjjpKOGko4STjhJOOmlERFo/X3V6QEdu0kDunoHWUYsNLnawvrZ+Lk7XdUR2XogIT2p3ZxcHvw787dHsDczMTmFoZOjfgVmDjE/d9UdFqx8/n4nLjt1EVEQm7Ik9fPwAez/3oLPMjmZHuXGlJ0Xs7+7727y4sIhM2K+cZTE7lhWKjVq0jXpKJx0lnHSEhPNly0ZCkMlwKCvhIkL43BIhTCkRnhaSECaf0L/URAOFhft5rommYYnGCgv78zUENvoMQsiSzENV6rVENFJGP93LLAGOhlcyu0gJT5Stupsi9/sh02zyrOZqpCT7ygy8mrbxziwSApO12AybWTQgu3xQHptdv3VKscU+Vl5g1Z1CoVDEnr+42gd6kDDMugAAAABJRU5ErkJggg==",
    tw = "/assets/png/googleKey-0a69f548.png",
    sw = "/assets/png/googleValidation-83bd4aff.png",
    nw = "/assets/png/googleVerifyBg-c131459b.png",
    aw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANuSURBVHgB7ZpNTxNBGMf/s32xSCTVAycP24ukXkQ5G9ebcnF5S4gXyyeQfgLsJ1j5BLY3I4iFs4nLkYNSQyJCjV0TDnIhe6EQ2u440wYDZbfdbUvZlvklG9KdZ6G/eZ6ZXdoHEAgEAoF/Ic0CtNmIjJOKAkJMEMlEOZJLZk0TPqDwSY2WSpCpBFmiMMtBGPGJrNHoGkdhTWWiAfoOlCo2wwabgByotY5AWE8uHebQBXY/qKNWAIoEPKC19yXXxxCCdEUiKSdxW2FNjUYhFTftfqEDbAKgswrIJJePdXSQ/JKqUMl6QSlJsJdRVxcRGGGJPIxNZM2LQzZokyGNDc2jNWryUmix1cy3JFkPpamRmbU39afthafCm6AYRbsQorOyzyRXSmk34TvLqkpAX1NAQfsYI9OrsfqTDhkOU3QWg015ykl896OaoKALbJJldBAmfMGvW8KnGAhLT5Pvjw3+olq6hC50KKMXsBMOoruwW5xV0KZu6OOzz6IWoe0vG490W7gGv6U0fQK4HCRcM4Rwv3PthD1vWkN3hhC7JzuO/93bxz47/Ipn4bHHjzAwOOA4Pnx3GF/WDlA+KcGPeCppLtpIlhMKhzB0+xb8iifho8Mj5LfyDWP2fu/hYP8AfsVzSee3fqHw8w/LpP2lfFL8TEtPWmX2MQM/ehFxW3LDwODNpjFHh0X4Ec/C98fikEfkpnGFHQPbX7fhNzyVNL/luJHlxFhcs1vYVeB5DRdd7sI8zo87tqeSLrGnp43PG9Xs8Ww3iuMl7Uc8r2GetR/f/Lc23SL+Pex3hHC/I4T7HSHc7wjhfsdJ2Bc9HG1i62AvzPs3ehxKybrdeSfhFHocGoRty4atcK0xRZpDj2IRMufUxeO4aSVXjtOwpBgoMoSAl7if17VJQHIUZNEKkFh8Kpt2CvT0tbQ2Expl0yezQyHS/16plhh/+RwtUpWzgO/szetWALlmzWhnaet7+Go/V6CowILK1v0TtnJkt9d6FDZY9lYpRTYSRM6u/8otHW08qFZAmcy7kXchbFiUZNhPPT6T1dEhLq3TQpuOKKhYCfYXXtmNOwibLJMZnslOSp7l0ltLqj2bUkVh++PC2ayfEyYsmxbJsHJ92065uqGrvTTaZChxKl4V5qIgqUa7al/Ay317SVUgEAgEAsE5/gFBJzYbmTEiCwAAAABJRU5ErkJggg==",
    Aw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB7ZnPbhJBHMe/s/wRUpsQPXAQA5r0aLV6sBcTEl+A/nkAfIK6TyC+gOsbQG9eangBE496a+PJ1Ng10YMmIqkWsJAdZwapuDu7O0s7dDX7SYBhmWF/H2Zn5rcDkJCQEASBRqxaroIUbYo3GfLAfDawoQkDOjGcOiitiscxK+s8FXRCUcGc0CsyRxKRuJGIxI1EJG4kInEjEYkbaUTEqhUKyA0KGIXnUYuLC+VMLivKzmhUtja/V8PagKS6GGZss93tIgJKabwI3uhtsdo1lgjegiLLq8soXb8iyvtv3rHHPpQh2GXnaiNrbKuk/6GX1pONC1swjg5YsRFF4tSMz9Vg6f+BtZ59FFY9UIR9QZNQ+pT9PAWcLw1rI9sMquArYq1nLPZSR1ygqAfJSEWYRJ31wkMokL+Yx517t8V44GVVptulsxm1RlxmM1eVfeQza5HQa3JC6VoJxatFUb5cvIRXL16j/6Mf2IZLrN6/i/zCWPzw2yHstzaUoJTH9tJ92NMjv40rUKR/1Dsp88BEgAE945bgjIZDKMPu/2W94r20HKeKCHx8/+mvaTVIRibB2/LviIRDPbOnV4SQm4iIe404kZkKWHaMt+Fto0II9cQoGyMzTbWTgJZuLIlXHvB00JOF8U/92STGkIr7iLdHKK1gRlRX79NJyDnzpDFMRocER0v26yejS4KjLY13y+iU4ERO46PAA//6pSPKnc8d6ESrCEe3wIT/+FaXEBv/IJIUhX5AzKEO9tzHZD2yi7gjiVHSIz9biDtZhTTebKPLbmC2EVMIQUu2GSGftajRYM+RtmPmA7Fpxngs+0QqYra5sWEibpCU6bc15LuOmM8HLba3tIZ49EwXJL1m7vTafhUCF0Rz57gNx1g5zzHDxwTbpFsJkhD1oIj4898A+8/cqRKDlNlAKjDBs9/vEgsytSkle3DyrahbpwkJCXJ+ASKlA7Anh6GWAAAAAElFTkSuQmCC",
    ow = "/assets/png/chess-b84d67c5.png",
    iw = "/assets/png/slot-bd279114.png",
    lw = "/assets/png/iconFishing-b631814d.png",
    gw = "/assets/png/iconLottery-ea35e843.png",
    cw = "/assets/png/iconMiniGame-651acf5d.png",
    rw = "/assets/png/iconPhysics-bcc1f7ed.png",
    dw = "/assets/png/iconRealPerson-48335ec6.png",
    pw = "/assets/png/slot-bd279114.png",
    _w = "/assets/png/incomeIcon-0106945d.png",
    uw = "/assets/png/invitationBonus-9a3437fe.png",
    mw = "/assets/png/invitation_bg-8f2eae9e.png",
    vw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEUAAAD6Wlr7WVn6WVn6WVn6WFj/VFT5WVn5WVn5WFj6WFj5WVn5WVn5WFj5WFj/VVX7Wlr5WFj5WFj6W1v/Zmb8Wlr5V1f6WFj5WVn9XV34XFz6Wlr7WVn6Wlr6Wlr4WVn5WVn5WVnZ41UvAAAAIXRSTlMAZh9fQI8Q79+/n89vsX8GMvXfWQxNz8VTLCZ5ORmo4+JMLD6tAAACvUlEQVRo3u3aYXOjIBAG4F1AUDFqYnJN0rR3+///5DntdHacsQJBuLHn87Ff3lmFhayF3W63+08IWVSlIaKyKqSATHRb0sSpyJGtKppRp44WNbGM0Y2hb50kJFPQogLS0L/IwWpgCXIzJ3PuAgsswfvN+Z4leWpgVeJEnoyANdXkrV61YAqg8hbMqswFM513K7EW1nKiIGXmJ81E3ubBZIJXnLVvVsSybqiSWNbVRaFM5mC29WBDoba+uMK309YbSHjL3PohAWXetcXavK+Y6YgnnXFD1bAeFVTwT7jQgzDkqRSwqoY8yZ/yMxXA5v1hzrTNPYrg5NDcrY+bRnLhuDANzNv0SPHb6EpBeqIoaaJsNaTHg/Ix0nwOyne7n081h9IQGVu1CrLR7ZjJTrWAHHSds5uyxuT8QMOKpCfm+d4rNQwSR3K4XlQvtPNzyUFDjE48rhLnXB6i+5Xout3dLrikokXFuqmspqnS0NTlmdheosPrNMcqADE9t41eMZa9TMv9CNHT5DZBLL7O/pBpIkoWEn28zH6JUfRsyecL+jE+wQZ8vUn0U5AzmP/s1qOvg19wAz46hd4s37AvYqThkxipihunV+4V/f1Z7IxFyATsPGCA4+LkRRv/1dUNGMIxt7X+g+wrBnFMBCrv4Aey+EctvDdyjyysf1ix9P8U1rWwMJTl+1UrR/qr345a472dBgz1vkoD6ZGt2zL7tR40OzqD3f1D4RMO8cfiGZ/RTEuWs59RhKvg+JKruW/8tbvg+JIPAkDXIQPlO7KohV1ZQxMyoknHXOjb+KblvvAx76Z1xzTJ5QO8N3H8bmYVKuc5HKU2NOP4jjjAog4jvb7MlNvgqIMlGjE+2kyqPTT4QcOSN1xDcbC/j2Omse8FfnG1j2TusOSGydz+VXDveMfJvMGifsAk5A12u91u6/4C4bSA/cwCa0wAAAAASUVORK5CYII=",
    hw = "/assets/svg/inviterecord-9d9d4827.svg",
    ww = "/assets/svg/inviterule-f522ef12.svg",
    bw = "/assets/png/kBg-80f2d8f2.png",
    Cw = "/assets/png/languageIcon-1b8f2d0a.png",
    Bw = "/assets/png/languageSwitch-8cd33ff0.png",
    yw = "/assets/png/laundryIcon-9cc9dbdc.png",
    Ew = "/assets/png/logout-3fc8c261.png",
    fw = "/assets/png/loterry-13b4d059.png",
    Rw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAbFBMVEUAAAD6Wlr7Wlr6WFj5WVn6WVn/X1/5WVn6WVn7WVn4WVn6Wlr7Wlr6WVn6WVn7W1v5WFj6XFz6WVn6Wlr6Wlr6WFj6WVn9W1v6Wlr5WFj/UVH5WVn6WVn7WVn/VVX4WFj6WFj6Wlr5Wlr5WVm2RH15AAAAI3RSTlMAZkyA7IwM2b45cD8Zsp95eVlSqV/1xjImHwbf0FkRlnVG75BVuzYAAAFCSURBVEjH7dXbjoMgFIVhtiJQz/VUT7Xt8P7vOGPSRM0I7G2bXvW//xIWF8C+vd4UqkFvGlTV4Wz4o3caQoz1tSHfbSNtLHJiZcbKZTttaXLgwoYr/HXJNAMIA4m+sgXzAJ6lnIjrBFaVnIJVCJvyBo1lAP/KRxTmN9gt5U58T0IwldztNj6DpWtrof0JHJ2MVhTg7CoM+AyIvH3bAap4F68G02d7OPxA4kzKzDDajRut5VGc6r/KYzjgM64zOr41XD/jTUrDpd5UkrDaYkXCOV9bntM2+/Vi65x628l6MRVnC87IOFhw8Fnsz0yOxzCocX5I81QmgMAPQOW9/yWJcbhjx9+h4oV3uxDMlPvH6Jm51v5XxczexUirS89ciWjfRoJhmnbO7hlOjJhetYyQuNjGEqZ7gtGLowLgHMXs27v6BZ8vPeEyNat8AAAAAElFTkSuQmCC",
    Sw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEUAAAD6Wlr7Wlr6WVn7W1v/XFz6WVn5WFj6WFj8Wlr9W1v5WVn7W1v6Wlr6Wlr7Wlr6WVn6Wlr/VVX5WFj6WVn5WVn/Wlr6Wlr9XFz6WVn5WVn5WFj5WFj7WVn/SUn5WVn5WFj7WVn5WFj5WVm/7V2EAAAAI3RSTlMAZjPsWQzFvo1fJrJ5cBlA2akG9YFNEZ8tznmfllMH4B85z2al2+kAAAKCSURBVGje7drZbuIwFIBhnziLszgLZAcKjN//HQfNVLjKpFHsHB86bf47rj7Jx0bBhO3t7e1949pYpFeuPo0PkWhadLaI1KrSApXtI7W64YbnSmVUjeXWyrCa2NVJDPemLOoR4KsNHG13Y2VVsRmO7OCIeMK6lnaldfFGWNjCgnbEusHNYRqicwaPpIi4mu26EVZzlQI+JEI1Fz7MBUzqOAF8TCX8W8pdw5GE2bLQHayHO09fncH8DIt1HB3Ww10udQAPGawoC7FgPdyV1RwRPlZgUMex4EqCWSkKXGZgXBZuhrkAq2q+iT14EmwrAns392FDfm7r3mFjnhUbXGBzfmCxzDEg5N9M3QSQSszcFtDKjY6Rjwf7B9uFptzbF0zYN1hpQG39WuegI91eN1w4od1bun417MGaRBiNsCYPF+7Uo44eHv8+jY3kcKn+VFLDJ/VeRQuPXL13HEnhX+pZSQjXD1c3jCRwdgq5msTD0+gYTjU6xSuXcKQWCt3BtVosexUsnMHyuORyhzOuluAOA7bYXanbc1x+5g7gFpZ83uWZ82+u2Q12zAALNhtzCO7h8xx8fhV8IoBPr4LTOTj9zvDLdnX4Krh63l+fxfMpqCOAJf94j9yV6hGXBDBkVVjJ6cdF+Ov/TEWGE9pbLl3+9S9fWIPpXtj6PAcjpr9SfDN7hwoNbv+Pa2PGWpTVjnNmXIAgXwKmI9zbd2ZZQPz3j+5wt5+u98a2FBR2bhOwrSW+xabKGUa9IR33TEe43vc3hlfQrGXRX0ZNfIMjhJsXmx4hqlEXBiziV1kzXWWaUccJc9zBsx4u/qibgNGUN5Ph0hX0xSUGiP2iD9je3t7eD+k3JpX0gV3YbR8AAAAASUVORK5CYII=",
    Iw = "/assets/png/moonBar-31e52056.png",
    Uw = "/assets/png/myCoin-b5faa55b.png",
    Gw = "/assets/png/myWithdrawHistory-4b3f11ea.png",
    Dw = "/assets/png/mycoins_bg-75dde93f.png",
    Lw = "/assets/png/mylottery-8c69f87d.png",
    Mw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgB7ZZdTsJAEMdnWkxMfOEIHgEeAYX1CJwAeDRChBNQTlD5MD4CJ8AbUBHCIxyBI5AoL0pZZwjVSmzcbSDGpL9ks820nfnvzO60ABEREf+BWVfE4UgYKg+tVnI26eS6+/ZxOzekMRva4QUqCZAS+1JCcdLO1r/ZARs0JU5icgghURJwWXEsDkbD8osgu4MSSyzipwypgDoPj9qiZ4AsmCiLqfKo79mf28JCkHUD5V26PKppuNQTwHDdaRIbwHy24jzui6BhZSqjhqo/pRL4eV9jnqY5ZaI7uRcJz74rU5PLNG6Jqqo/7QwwU1ucuyZtPIS4GcNk6tpZePeCyhSEdgaYVM1ZmC5e0TFYuq4c+o+huwZe/dyV2PNn6KACtpzu3t5sLz8FxPlql1fjDZa/uQklYPpAJaCVc3DOBGfEu7d6kTZlJoEGlvz2gwngtkzBB3IDcXQx7w8ybmVtWn2Re0bmxump+IuBJqtXOaApYSLm0zVn7tm5QVHgKgfnE6HqT0vAuLXtdgIQa+nyVw/YBbd0gzPKxzAoyLSTLfCOp8bUp8ZUBE2UBAQFp+4nqPNxZ5xfVJ6SEALVryFvrOZ+eunlW9rxi7M19YRjMrOP90MSERHx53wApg7Ul5WcmvwAAAAASUVORK5CYII=",
    kw = "/assets/png/notification-64e0c068.png",
    Tw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgB7ZrPThNBHMe/s6W1CDEVDhzsYSFqw8FET3pziQ9AayHxYoJPIDwB8ASLTwDeTDTp8gTUN+BGlAN7aEQOkB74o5TO+JvyR2Jk/8DszobMJ2laZhbCJ7/fzP5+0wUMBoPBYMgMDBlhq1G1Ox04PIcS4yj9O8+B5vi018QN6YNGNj9XHWHxSSHYzHFXlGBRBAT+GwZL9AabuCFahHuiTMxzCAci3SRLVXiD0jbXFcs9UU2kJvy9UX0quGhQxtrQiIUU+PalWhVdsQahV1aSuLCMLCCW6WMJGSBRYblmZRojI7KS0DXsVkt0uzh8T1GapftFrH/8x2YL5bEHyBLhm1buqEFrz4lbo5THypmTlQQKu1NFB5w7uAaPnjyESrZb2y/d14WFiwGGdeSt9blPv3zEIDjC15QdGhlG/0A/VLLf3nfozbkYkBXZMYdbL6yQ+GJU8UQ2rfJoiqksMEPia+6boh3l8kSEh0eGkDJ2T1pusCEoF753/57ydI6IjdyhG3aRcuG7g1pkT6H0DouycuHigEZhiXVQDZyGYvL5PPTC7KDZVJqHLKFcuEPnNFqRBUkAyoVPjk+gFaq+gqaVHwDs7uxCF4xhZTak4lIe4aODI01RZr6gEjPsqkQ2rdZWC+nCfBTYRJR6OhHhn60dpIVMY/D+Z1Gbh+A1bFlN6pjmEZO9nT1ay3tKa+rB0mCT3r7+HRE++IA367Xb1DZF/TPhXb1bv0OHb/GPVYdI9sWr51CGYIuVaW8BNyQ8pbu/ayT8obdOYnAe5awRelua80Ap06HzLMgXHblOirDfqUyt9jJn4+2wDZ6N49lzEi0tx2uezyxWo49tZITEa+nHNY8qH/YOGZFOpXmoTHkey7EJ2iJ9aCa1bklGmlskDfYRGkm1PZRrmqI9wxmluKZoa+mHx+veSqW+OsrFWcRTlNf6BMDZIwzydfp1ahc2fT9uX/XIAxSgVfgyp7t5cPOuAnPEc9sxwrcdI3zbMcIR8ANnM9AgBBFfWAQX/5wLrc1BGLGFC31YYldXROvFPmsJGSa28GjNa+ept6XCf/FS+vry5wKNy3kYDAaDQQ1/ABGJBbxfrJa5AAAAAElFTkSuQmCC",
    Qw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VldUtpQFD7nhun0rXQFxQdRnsAViBuoYcS+SneAK1BX0LoC62vVIboBcQe8OeqDWQJ9rDb39JxAaEqRcBOICdNvxklCYnK+e37u+UHIOB47dun5GeqkoK8t6FUajjvpOYSM4pYJWB6dEEA9/LtCOlzduToafz6TRO47do08uubT4qT7RLi/vut8Df+WOSJ357bNop7ACyQCaMKtyq7TDa4VZAgPF/YBk+hABAmBhXQQvs6ERl7yhyiEtVKAV4RPQNMB+0OLwByIms0QunL+KkQezuw6oU+gHodAAATc40N7cJ4SRHhQepPNocWXJZgTAvNamEaCjQws2CQiWwMVgea/bgp0nQ/JibDARRa4xKc1sHSVha2xudSePBZcYmIS25kBiLgpR2MistI/NdgsY5U0icC1URCn9IOgLJocZ/7yyEENQ2Qa0BaujDTiC0p/nNBDcMM7p0Y/ZcgklAe1gsRy5VGHnbEW1o81iM9dyAFEAUo2JBjaWW6BuqSYTQvyDlKlTCWNcYFIH5aCCKO4LESyVY8kwHL4iOA/kaxhWYj0l4cIl4tdyDk4RXQVZ4f7fN6HHIPL3R+FcsPpcQa8gR60WT3vgpvca3UhL0DtzlxY3Z1vL7hoTQJszOzsBHjMxuhCBoEaXOMie9Bg5kqSQGr1KnJRQ1KUvR76a83L93PrFghB7xcUUTFB8nOf6pBgZB83CZhAt9y83Fp42yPQoDQthuTqMEdoxM+VHeebibM/SrwGpB6Rupk2PZoG6YM9eX4nRsYH25BQY9JBETmMiMB4qxN9J+uixtPVUMfFBLcXdssi2IujKR74XPLARxrZBrkWQu/fN7HJcM0vraJb6e3GgJhFuelsycryR05N/pfNdTS1Mgm/N9Pujw9eTCHmsdZ0WmLzMEumMdZ3m5mIUtN7XOLMcbUShmiItbMRtWehh43w9cxEJJWJSjCV8md/ieE7r/IFnagZTXRU/uT8ZepGaTyv+nHEA6W7s4+HMAfIwk3QTF8mupXdq8Px58139nP7OirCjE9ckyIw2bcF6K00nIlaMiYiL1VRDW1exTcKN1766CJgXCEOVjoiTLKJPWudKIqZIlap+8byB5BTV5ttuX3/3U4tmYxFZGAyfryPeDt9gZQQu/nAm5fj1yhT4O8tPH+BFJCoi7LedNpRZCydzqgucTtIyEhaMdws3fE/T+Vj6pUZ/AYLQnnuRIzaeAAAAABJRU5ErkJggg==",
    Vw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VldUtpQFD7nhun0rXQFxQdRnsAViBuoYcS+SneAK1BX0LoC62vVIboBcQe8OeqDWQJ9rDb39JxAaEqRcBOICdNvxklCYnK+e37u+UHIOB47dun5GeqkoK8t6FUajjvpOYSM4pYJWB6dEEA9/LtCOlzduToafz6TRO47do08uubT4qT7RLi/vut8Df+WOSJ357bNop7ACyQCaMKtyq7TDa4VZAgPF/YBk+hABAmBhXQQvs6ERl7yhyiEtVKAV4RPQNMB+0OLwByIms0QunL+KkQezuw6oU+gHodAAATc40N7cJ4SRHhQepPNocWXJZgTAvNamEaCjQws2CQiWwMVgea/bgp0nQ/JibDARRa4xKc1sHSVha2xudSePBZcYmIS25kBiLgpR2MistI/NdgsY5U0icC1URCn9IOgLJocZ/7yyEENQ2Qa0BaujDTiC0p/nNBDcMM7p0Y/ZcgklAe1gsRy5VGHnbEW1o81iM9dyAFEAUo2JBjaWW6BuqSYTQvyDlKlTCWNcYFIH5aCCKO4LESyVY8kwHL4iOA/kaxhWYj0l4cIl4tdyDk4RXQVZ4f7fN6HHIPL3R+FcsPpcQa8gR60WT3vgpvca3UhL0DtzlxY3Z1vL7hoTQJszOzsBHjMxuhCBoEaXOMie9Bg5kqSQGr1KnJRQ1KUvR76a83L93PrFghB7xcUUTFB8nOf6pBgZB83CZhAt9y83Fp42yPQoDQthuTqMEdoxM+VHeebibM/SrwGpB6Rupk2PZoG6YM9eX4nRsYH25BQY9JBETmMiMB4qxN9J+uixtPVUMfFBLcXdssi2IujKR74XPLARxrZBrkWQu/fN7HJcM0vraJb6e3GgJhFuelsycryR05N/pfNdTS1Mgm/N9Pujw9eTCHmsdZ0WmLzMEumMdZ3m5mIUtN7XOLMcbUShmiItbMRtWehh43w9cxEJJWJSjCV8md/ieE7r/IFnagZTXRU/uT8ZepGaTyv+nHEA6W7s4+HMAfIwk3QTF8mupXdq8Px58139nP7OirCjE9ckyIw2bcF6K00nIlaMiYiL1VRDW1exTcKN1766CJgXCEOVjoiTLKJPWudKIqZIlap+8byB5BTV5ttuX3/3U4tmYxFZGAyfryPeDt9gZQQu/nAm5fj1yhT4O8tPH+BFJCoi7LedNpRZCydzqgucTtIyEhaMdws3fE/T+Vj6pUZ/AYLQnnuRIzaeAAAAABJRU5ErkJggg==",
    Ow = "/assets/png/notifyIcon-eb7c8400.png",
    Fw = "/assets/png/numberBG-5096ec20.png",
    Nw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMrSURBVHgB7ZpNTxNBGMf/z7bFoIG0eOhFk3IROAjlBIkmSjx5og1wtnwC+QaUTwB8Az8AhJWzicWLclCaXlAvNNFLSYQGoihtZ5zBlpSXbp+WBZdlfknTfZmZnd/uM7OT9gEMBoPhGkFog62VRPiPQMoChqSQcdVKWB2ufS6LvOpsXl0rr7q9VrGQGUjaebRIS8JatCzESyFpBpcrx4JILoQsa643aRfZdbgFtexhRb5Vm3F4CYlsR5DGuNIWmJSEnIfXZDWEeEmIWX5xBpsriZhVkVvwMCJAvZwxzXrCVhkpeByrLFKscpxCRHgCj0NErD6yhCWk98buKSRzfmkqrGdneOAVxCBc7asjTYV/Xw/ZIzh9DTYtUEZMNJnLf/08QO5DDjuFHfREezA4OojbdzqPz5dKZWx/K6BdIqrN+vYaESi5IMxh/c06DpS0Rktr+dFnI8fnc+9zKHxvXzjUEcKIaq870uVYrkK4eEhzqMnW2N/dP7F/EVlN6bCEne0fcANXhHUY19MV6XY83ypB9YSj96JwA1dCekiN2Y/vPmFvd0/J3VX7D0+c1+FdUGO4rMZyO0TvRxEMudJVd4Q71YTy+PkjxzK6017AlZC+Thhhv3PjhF2ZtLyy0uLgq5UWB7PSagez0jIrLbPS+m8YYb9jhP2OEfY7RtjvGGG/Y4T9jhH2O+ZXy9OUg8hbFXAoEiivvyXJGCRiuBi6vazekJBPWTWCOkvPGVba0pel8V04/LuuOrR4K2Cl65PDPi8nZkge5Xa1SlFKmuufshdqB/6lTSGtrvTCqV7f5OsImsDL4qne6fMQUs71T67OnM6E65+wFwTRNFqGputlNTr/qm/STgl1IxrVUjdpDQxYwhWJcy+kZQemVtON6g1M2K8kaBFMdHtKzG7Y3pSdbiRtSR0BzWHnWm4uJ1IW5KyK37B+4vomqA5kOHW/Lo1vMNKKsiokh8FpbyURRwXz1bF9Zgg40Vb6cKtUUxc30GgeIOSFRWPtpAO3ypW8lrSICsWk2jwv47VIFiWvQlZzZe9hHf4iQMNqOGSqh/RrJ0MBGnuQtLMwGAwGw1n+Ar+kSWTjcb7TAAAAAElFTkSuQmCC",
    Pw = "/assets/png/points-2f9295d8.png",
    Ww = "/assets/png/pointsSmallIncon-01ccfa9c.png",
    Yw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgB7Zk9T+NAEIbf3cDpuGty3Ul3RTjpBFRQUlLSEYQo6GipkH8B8A+go6WDAhLo6BBVGj4ERRAgcAE1JojvxMMuiAYpsyE2XkfZR4pkZWedeXYnY1kLOBztjWg08LyQzz6GmJRAP4U0oGZm1dc5xEMAgq/u6Qsh1msSW32jRb+RiQ0JHBfy01SjWXWZRTIEUtD8/7GNOVOgUeBkNT8T0mvyiUMkvN7x4jwXwwqUC/mcrNEeklv5jwTfMqK7e7QY1AuQ3OxMiCHYS16TfaxikgtgBQg0AstIiX52nBsUFFuXaRoi1fEYDDtgXwCGEu5AhMkXZ5e4v71HFLp+duHvvz9cSI4bNAnURSd/UDpAXBgk6iLR4jS9A+8rlkAJsTQtoInyw3HR8iXUvv8BzWfaaNRar0fibTRuCddGW7aENK6NxoATsI0TsE17PAeen6vwj85jeQOLG6NA5aqCne3d1CX+DltCdyrpNCevYQVOD09SnbyGFahc3SDtGAQqSDvuOWAbk4AP2wjsc8MmgSVYRh1gRBAIn/TpSAB7BNQp2WMmVsAr6uSlB2uIOW/5weciMjCwWa7uD/d1XKvLQfX5jmRQC0dT3trToinQKKDZLNdKwz2dK+qmv8Tbnv3GFyDemsYCwh8TXuGuBIfDYeQFJXGh8UeSy4IAAAAASUVORK5CYII=",
    xw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAUVBMVEX6WloAAAD6Wlr5WFj8W1v5WVn6WVn6Wlr/W1v9W1v/UFD6WVn6WVn5W1v7Wlr/YGD5Wlr7WVn+XFz8W1v6Wlr5WVn5WVn6Wlr4WFj7Wlr5WVlzwNIUAAAAGnRSTlNmABmfX9l5TAwyBvVTWUEScDksJOziz6iWggwEvLQAAAD9SURBVEjH7dfbbsIwEEXRiRl7HNcXkvTq///QUnAbTMbqKLyA5P1igVhEiEgcYLijjt0cfUDgCxQX28RuRPivyfHYeRDkHYsjiJo4bEGYZfAoxSODSYqJwSjFuMUOxLkNtnJsN1hByeiszek8HurMH05t/Jpz1qfzPde9fEFJtfH5heWs+hBgXa6sb69sBNi8XT4zfB6qjiDAzTree4epfoc9xlfVcccdPwK262zwFOAmJOJ/3Et4vfHmms4/7x7bm2Sgaigt13ipxlZksKpH1rQdXkUnBg9LQFLrQ/9r/fpcIsBZsrctXmywe8a6OmtM+5a+JUBKT/Af42nwN4yCGPwgYk/iAAAAAElFTkSuQmCC",
    Hw = "/assets/png/pswLock-b494d8b9.png",
    Kw = "/assets/png/rechargeHistory-a584338d.png",
    Xw = "/assets/png/rechargeIcon-c2eb6382.png",
    Jw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC",
    zw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAmVBMVEUAAAD/ViD/ViD/ViD/j2z/j23/ViD/j3D/VSD/VSD/j2z/j2z/VCD/VyD/j2z/j2z/VSD/j23/j2v/ViD/UCD/ViD/j2zrOgL/////8+/1nID/imb/azv5wrD/XCf/49r/1cf/uaP/lXP/qo//nX//elD/dkr/6uP3qZDzhGD/cEPuUiHsRhL/sZj/x7X/pIj/ZDP/nX7/hF4htbbUAAAAFXRSTlMAX+/fz48gEDDHn5B/T0Ag79/frxDrbAGJAAABd0lEQVRYw+2T2XKCQBBFUXGJa7YeEAZkEVBxSfL/H5dmyoiQRqcreUo4T0PBPb3UYLT8NvP+k7iDOV40xocToUV/2JA3hSYmbZgIbfpUfiEYzAnBWBBwWjA5gmdCIFi0gr8qcInP1uHxeDgRL1xCkIo64cpWLENRJyEEvlurjvEvVuuawCcEsKvml0Vtz3E8dagadkAJqoai/mZvIblT9FDN0wKQbjk/hrbWmS0+hOUCJdACxE/EGezbsS5srlpIfGgUKIXq4oRj56Vgj753VT19A7gpQGTyIQ627VlXeDhDkcbq9wWIf1ATlOAeYxXWFEBMCIAjiL6P4LIEEpe4L/M5LjFlCSDAa1SZIAOeIKpfpIgnUC3YTq4uwQaPAXAFMrv+mTLJFoAM7AuBBLYAibJzHOdnCUpSN44jrM4QULSCVvC/BF1O/pEQPHAEL4RgxhF0jJ+10DMoBtpb6A4M2tDTrD8yGhhMNRTd6atxg9Gsc5uR0VLnE3Vv03amsBSPAAAAAElFTkSuQmCC",
    jw = "/assets/png/redPacketShadow-d70c1569.png",
    Zw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAOVBMVEUAAACjo6OgoKCjo6OhoaGjo6Ofn5+np6ejo6Ojo6OlpaWioqKkpKSjo6Ojo6Ojo6Ojo6OkpKSjo6PuE3LfAAAAEnRSTlMAf0C/H98QIM/vMGCfj29Qr1+b1SuLAAAA4UlEQVQ4y+3Sy3aEIBBF0eJR8hCx+/7/x8amdCVCZYUMetZnpm4BBfr05hbblX+lEX2pBJ1uUDKTK1ojUGgyA2z/sHmcbVetG4YNDHBQaEXqxjykbj3gbzceSIdUbUcN8ARyQlz+oBUwHqC7dTF8000ehISNXpQsflh5T6gBrHw8L0JpBR6nlDmE7ucOZ7CnRsVe9AVio4GvAexCjcqFPaG8Vw6a27RXQrvEAg7sh189VNHa7/sFWP24AEY5F0qri3VcVwo0GYNnbU7g56xlgIvp0mfyBWNMer4W11Xp03v7Att9D7xKb3uAAAAAAElFTkSuQmCC",
    qw = "/assets/svg/righticon-84e23970.svg",
    $w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7ZlRahNBGMf/3yZRCqamCZgH8xC1VSJaa33xRYwnSIK+W4/QE0hPoDdofFez3qA9gYEKUhM0oj5UUEMRSsWdz5ktFLM7uwndtjul84Nhs9/M7MxvMjMLO4DFcrqhSQt+6jQLuwJLxHxf3i7IVO1t9NHb6CEJczfnZJoFGF0iDAXRG3bg1lruYJL62XEF3nea1YzHq388rk9sexAIC6wuLNvx8OzDq0bbc2hlnIgTl9l/3XrsePxWPriOY4YZS6rtzZfNZly5SAFV0ROiLX8WkB6ybe5syoGMKqAVUNNGVlyFKQjxfK9PYbQCGcFPke7IBymodajLCAkoUzX/YBhqHaqdMBgPCZBA7KJJk92/4YENCTiMBsylHgxo1gCbNPdHIOJbwVhIgPfesqYyfg0YzokXCGEF0sYKpI0VSBsrEEf2TM5PR9oGEpDL6asXyyVcvTErr0X/fvvXNnrv+tj6soXDJpFAfmZ65H7q3BSuL9ZQrpRH4tOy3J17i/j68ZsU6WHn985+XulCEUlIJFCSIzx/dx4/vv/E+UIelSsVZHPRj6xcvugnJeLXmcnv/0sHJZHA/5066jpR2F0obaxA2pw0gWEwoBMYwFwGwUBYgNCFoTDT52BM81WC1mEo6twgGAsJnHXQhqk4WAuHAlxquUMCrcEwiKitO+zQ7kJeBk+gWfGpQRh4DlZ0WVoBZSrPqpZhCkzLUUdNke+B2kO3LdVbyh7pMVR9uPbIdaMKxL7IVEXh0AP5kBc4ZtScFxm6Hdd5vxwmxD/iEahL4wYxqgyu4vBOcYZ+IurKj8vraidUmwksFstY/gE0VrR46aWA/gAAAABJRU5ErkJggg==",
    eb = "/assets/png/safetyIcon-82940093.png",
    tb = "/assets/png/serviceCenter-b92936b9.png",
    sb = "/assets/png/settingCenter-d46ac1a5.png",
    nb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIRLg7zFgQcCgv5DQcYGAsFEL+c69AAABOElEQVQ4y7WTS5LDIAxEI/4Y7CTv/ocdjxGhApmaVbRxWzSSugvdvhMmPBuIwfxBkeJwciEgy6cqBbDYYEy0VKCYpYz9vWwSV2xGMlhZONb/grCdlNBT5r0ZyFJ8yVX8TIpsUyYRZ5KnLqUnLesIppI79LHTM3Ww9uK6XH95kOQlOYfGCcAmHbq6Ae1IBsxkHVqazXKna43noaqPL4n3BgppkugwsxwzcrjrC8O91VvQzyi9egtzO6dImNtVXIp6v7SjQxvH5LT6zhlH68ch7f1J44Lea8aE7muqbvzdtatWs8NjtibNst/ewr0sit50sXZ9T/8/Oru+TGnqp5mmWGZ6kIxu6CMVadM9pn7eYqU7A4em/KflPDn5GTPsYzmXNXfs6mJb8zUk04dIOB1sDfMU5Qdz+0r8AKe9EWqrUWMCAAAAAElFTkSuQmCC",
    ab = "/assets/png/sliderNum-ec124ce4.png",
    Ab = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF4SURBVHgB7dpPTsJAGAXwNxPELUfQhQt3HgFO4CBx7w20J6CeAI6ga5E2noBbEHXjEVgajf2c7hT6x8Sm6Xy8X0IgzNDw2mYeoQWIiAJiEJiXxF3Ll8T+5WBraGONzE8mT7dVnw8q8PPCOUCSqjmZmNHpZboqG7cIieCsbooPNKwZ3y8MrB0Da9dDS/7bn01p5Qjn/enDzrEbNjfw3RmvH9wQLWjnlG6gP5vCRUs7BtaOPbzt9dFNM5EbFFSK78+4rf5sSuURzvvTh41R3J9osz+bUn1Kd6g/m8JFSzsG1o6BtWNg7RhYOwbWjoG1Y2DtGFg7BtaOgX8Siw1qCP4wp0PbqQx8aHEHg7fSCX5MekhRo0vbqb0xbZ24I5PB+cevP+PzvZ1/geNxWrvXu7gdIqIglK7Ss4v+1D9dIUiSRsvPqGikMPBs0ne+wSvvS+48a0fR4n2183bhZGPD7zLJCi/il5/S44O5MeYcAfI/L++j5UcMIv2+AevjhktJIJCYAAAAAElFTkSuQmCC",
    ob = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAaVBMVEUAAAD6Wlr5WVn7Wlr5WVn/W1v7Wlr6WVn7XFz7W1v5WVn7W1v4WFj6WVn8W1v7WVn6WVn4WVn9XFz8WVn8W1v8Wlr5WVn/SUn/VVX6Wlr6WFj5WFj6Wlr6Wlr6WVn7W1v6Wlr5Wlr5WVmh7Y9iAAAAInRSTlMAZtkzsg0/nyZZ4Xm+jV8fz00tOUwZ8QcGqMWocF9TRtiD6LITtAAAAexJREFUaN7t2Wly4yAQhuH+LKPNtlZLXmLHE+5/yBn/omYUjRsEJFH1c4G3GlSIKkgIIdYtPZR6VpOlFEa91y9kNQXQjfqlsiPv6lEzjP5nLjXLnjy7a6aU/NprI+rImmskX1SepMebZrsf06RWtNCQFHg6aLYdnopeLckeATiFn44DuVF/su7hp9Rp6u6OpWEUOVnrAfewkZClFH/5cA0jXdTFTrPdsKCc4F+jZiphWK92jgn+kYmJgZhUgYmd9RYb1dl+g403zbLFJ3rmwPjU1XqhDeUwsLHlzes8ssKcj43+r80Bhv0u55i3O2xnZTfMyxnhFgE8GOEKAVScLQ5C0Ss1gqjplQ5B5Iz/QxCJhCUsYQlLWMISlrBt+K3ZMGTew6XmKT2HM8118Rv+pbkav+FGc238hi+aK1vJxwVkG4bmsqIDRMISlrCEJbz8zpVhItJv8YqJSHeuAybi3LmuAcMN/zUg4p0rC/pxcQeOdudqsrUeIBL+OeGO8d4VRP19n3/OCKH6qie+IxlRv66cjKhrrehr1joljgHeKWJp4w5sqApeVYqYOnjVEdsj7kIb53d4834iC6qAJ4UiK8rTzO1k3jhHZ08O8gILFQMZ8dJVciJneQtHbWeyTlTdt4XdpMWjz08khBCr8xtfH9HhFMoP2wAAAABJRU5ErkJggg==",
    ib = "/assets/png/sugguesions-5dc75ee8.png",
    lb = "/assets/png/superIcon-d7856c8e.png",
    gb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAf78/3xDvXyCPMJ9Qz69vkHBhOX6jAAAA9UlEQVQ4y52T25KEIAxEIYQExMts///Hrin2ooNA1fSDZcipQLfiPlA4ChFlTV0iesavSDtTTkSyriEcuwD0NO0LoPBXKYOXJ8Zf67RD3mclMeamgq1ZKY0Pht4XgPacCrrVK+ghEkG81h7ZtdpwMRjIjt2K/jONBKADARx+TIjPHSgzsJ5vL3ByvgOFsyPRJTPfh+zhq/kRFMDWHkMRsITGkDshnW+3WfZhCBVk648jsLaLG1hLBypUw3Rp/llMSgJ9hHaNbiLBDKlZT7XBTxkzP2ewdpvLUv9oDDZ7AXk5CJDBHFSJj24McZlkmHG5guOD3/UNzgIMzpf1xeYAAAAASUVORK5CYII=",
    cb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAVFBMVEUAAAD/aGj/bW37Zmb/aGj7aGj+Z2f8aGj9Z2f9aGj9aGj/aGj+aGj/aGj/Z2f+aWn/aWn/aWn/cXL9Zmb/cHD/cXL/cnL/cHP/cnL8aWn+aGj/cXK61PvGAAAAGnRSTlMA3xAwnyDvQHBggL+Qf8/vr4/fUCDvn7+PUP74jfEAAAG6SURBVEjH7ZbdcqswDISR/w0OkKbtOd2+/3vWdKaZhLUxnull9yoR87FCWEjDn+7SwcyCLJmuQfeQ/urwJDH6LDoBcCbcrMr/rA9GAMzxJOpGv3uIjRfbQNV1Q9XAihlP6oi1AmS0rPHYXDuIPrz1Ur0cAXOYmFqBWPEFRgpy6kVv64iNTiLRi2VWCdZ9TIBlHzMQfrRrIYisgkmipAE7lGEujacMx6ECc9Gm/VuS4Sys3M56RqzBTWtNxgTXrQ3MEczW6alcugf2WCjrGsxyD2YBpg82CPffCeEszG4TfB98w/xQL9sH24ciAUMfrIDTMOv3YNUN/07BZtz6YP/QV6b/kKTm8XSANI+nxlKeAuIiBakL793dFndhwtgDG5jn7lYtov7tmErW6v/b27vieNx6qmX9/pm1loxzGRvW6vNbdNMLvT/Ps/OV4OpgSjzo/m3sS3HQcdDsrV8y+7oLrtmkONwv1ACaH9jZ8rlhmlno6kKzHi80Boj1Vep40xK4w02rnrq6tDZIlQCJRdTR+lg05w3Zb+h0pm3jjI0P3m6O9iMYh0OUN+QnudT3sQhpEmTJbIIe/vSjL8GmJOpaiVUOAAAAAElFTkSuQmCC",
    rb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAABK461L46xE36RL4q1L465K4q1O4a9K4a1K46xK4qxK4a1K46xL4qxK4q1L4axK4q1K361M4q0T0IE53J8u2JUg2I5L4qz///8GzHal8NW79N+O7MvS9+rg+e4X0oTp/PUo15Al0odi5rdE4KY33J0l04ch1YwLznph5rYQ0H6w8tqa79CC5bpW5LEx2Zcs2JT0/vqD68Z46cHk+vHg+e+P7cvH9uWa7tBt57tTDyxnAAAAF3RSTlMAf78Qn28/H3+vj99g79/PTzDv779vT8FjD08AAAGZSURBVFjD7ZZpb4JAEIaVS8Gj2msArYoCWrxQe/7/P1aWjQTbYXcItompzxcTk3kyzLwLW7tyXlRdU4SYekNU3rwFOVqhonEDJFpFBlZPM6hofRvIaKigC3SwFgwogY4IdIBqz1CHEphVBYpYcHh/wnijCmZ2AS5R4BYJJkTBqkjwShRsJnj9bk8QcPZDjI1siFL+k2C2HCAs6Unc2Tiri0+iPSQP8cPFOFxQDn5R4AdbbxtIBZuhm7HPVXuRw5nfi5N4ssbB8e9g4WTcNUsE6RNSPCfHGDSVHOXDaX24DpkATOph4gcgdo6M7FHIBGDRjvPyOZ3fIidIDEwA/RJrnDsZU2bY8jDQBayBcGRnvKR9qWRB4CSsf3zl2mRBzHvPTTbtwEIEshFkOWCYVQXK3wliB92CVXULvRI5QLeg0q95XpbBkL8QkLueAQL8KDOkAhblzvc7twLCKXADF0Q+dls1QITHDesp+/EAAHknWXIDJ8LqGU2QzIEz9qFl1FDaXRARjJN1LuKOwstR+r26kIdHo1G7cn6+AEIy4spd9Gx2AAAAAElFTkSuQmCC",
    db = "/assets/png/tradeHistoryShadow-3f93353a.png",
    pb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8BAMAAAAu8pppAAAALVBMVEUAAADy9P/v8v/v7//x8v/y8//v8//x8//x8//x8v/x8//v8v/v9P/v7//x8/8bmNhjAAAADnRSTlMAn2Ag379A78+wgFAwEGHkDoIAAAC+SURBVGjezc5bFcIwFACwK6ESKqESKmESJgEpSEEKFvqAjbGDBn4nIVGQ+Il2s9XN1jBbyWytZGsG2TrM1jBbi9nKZGsLstXM1mm2qtnKZquQrRZk62u2qtlKZquQrVeQrW62bmYrma2VbM0gW91sDbN1N1sPsjWDbDWzNczWYrYy2dqeZKsF2XqbrWq2stkqZOsTZKubrWq2ktkqZGsPstXN1jBbyWytZGsG2TrM1jBbi9nKZGsG2Wpm67ys/odAd0KHcfI1AAAAAElFTkSuQmCC",
    _b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMISURBVHgB7ZhhUhoxFMf/b1dWpv1QPEHxBLU3KDdAWmf6rXACyQnAE6yeoPRbZ1oBTyA3UE9QeoLSD7WwuElfAossIht0Fevwm1k2yQub/4bk5T2ANWvWpALNNvjvvSI370OpPFYBocdjH4nmsBFvnsLfy+wgpDM8BRynIL73O1F1I2a8QllLJ6hD5blHWAWDsAqifVLyE9c6UXNcKCinPxVwIb72u1gBfilzPq/dwX/C8xfql7wf+sIjsbFMZ7+Yy8H5Ux6v5bxpK3n1WCfPaTzE+rYWyovcBy6rc1xvLVYbKP0SVaSMlVCetVo0OBEaSuEnrgUexDpvUgMPQKJQv5jNA7JuKq56W/02NO5jLB6iGdTxCCRvJlfumLuiEzEWuQqShSqz5kCO+oUVkizUcbv6xuuyaHb9ikgUOgoMqMvFHNy/n/2Pes0+IEQ9fVOSfk8327knV+4idFo8rUUEqsgbaWLiMocGqscDtJFxDu7rQ8Vx0PY/ZAu4yvJ+GEzarU4ms4kkFTha+cLV3s0efAAojrwCeervvdyxeebCfuT2RLsXG8f6CBXtfle0gjK7oy2+Jl7flKWzzedAG/q0CoetpGcZ1xYOz/zdzUNbWypBiX4JhEEFo9nO80/3DotEAvXR6G7H1pZa9CTaOoXAianIMI8kkXAq4viybWNLVejoafTK3Mc7d6HIZr9hY0tdqMm3tFfQZJzzNEVq7IISfd47sjzXpsM8wmuEiOw3XRSRfgld6sG7zoMSbVPYzSiFOnKqzVwRNeOaNIqO5gYp4aDCL6NnOWdc2PShsci2tFDlaldxMHNFcJkE5Ist0RrMjUPNRguDwlhQflrQIts08bx+12twC6epqjL7B8AsfmnTpCGiOdiGJX5RH8PeKf8C2tl3ORsoRMtkkU1z582kBS4j0nxnZvZoKGs2tnsJvSsTQbxkFMcGtralkru0MIIwPzO4zXab0DdphnNpZKXxzaTPaClPkTZEHXE8KOAexGZUB8l+KVshkvy3I1KL5pXEBdasWfM0+AdBr2yXj+JA3QAAAABJRU5ErkJggg==",
    ub = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL2SURBVHgB7VhdchJBEP56VwiWD+IJJCcw3kBugGiqfAs5QZgThJxgyQkkb1ZpgJwg8QSaE4gnEB80LMnO2DO7JExYYDBLiBZf1TI/37Dz7WxPd88Ca6yxRiag2x3Bm3yFu/egVAmrAKHPcx+K9mXL7h5DsJ3bQkRf8BDgeWXxaXA2aj6yyCvUtHSCaqq8f4hVIIzqINojJXe4dTbqtoWCivpXAefiw6CHFSCo5r6m9Xv4R/D/Cw2q+W/6wj3h0SKDg0qxCO9XLbHlkumr5hvWoLzXWoZ9OwtlIw+A3/UU17tvtUKlH6KOjOEklFdtfzQ5EVpK4TtuBB5YgzeohSVgrtCgUigBsmEavnpZ/3hp3EciHqI9bOAeMH8z+XLLlIpORCJyFZgvVBmbA3nqB1aI+UI9v6cLtsuK2fUrwlyhcWJAPa4W4V+8D95pm10iiPq6UJJ+jne7uSdfvkbkdXhZKxiqCm+ka4rrnBqoPk/QRc47uKsPFcfDbvC2UMZVgfdDeN3vFJnMJpJU5mzliJv9yREcABRnXkN5Gmw/2brNapPhyV+l3TuN029RdPvWPM4hVHQHPdEZ1tgdPePr2uubuvQ2OQ50oaNVdNmZ+LN/0YHkh0hcmjP3N0Ix5yEQDXcRr3ZpYvUUTpJaY0LQLC5robFYfYRIJpVRyeLaYRM3EcwSNItbitD4bvTUlMnOhSXWRLApYqdzmQs15y3tFTRyXmoEmxS0UXfhNNySEh3vPVlL5XSaR3iOCCN+tovyVZcPkMmKUdGVc/OjFNXNETod+/qQZaDoUHTCxrTbxKdcnMZjcSQ6g4YL5y5U+U2Q7E8IjMGvi21SPm7d9n3pIo3PPdKuzoVbSKhxP2w31sTVjR3DtUcrGGJZIp2Fpopvh5vOg6XHq6/ShczikIHQhRCRYP/yme23uRA3hnsRmphOc1FuHNOEvsgyncviVGp/JNMxmhMEZA2iM3EclnEHWCuq06ugWtglkvzZEZll80riHGusscbDwB8DTWWplE0NygAAAABJRU5ErkJggg==",
    mb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFQSURBVHgBrZVBboJAFIb/h6Tp0iPook3Y9QieoECq69ojeIKWG+gJdN9S6AnkBiwbcYFHYN2UeZ1BJYYURZh/weIN+YCPmfcIMtt3ZySAkQFEd5MwQsdQEjgPnHNcFgir3CDPcsMdWsbgXzinBWZMjZzTrf/4mgZOHy1i1C0IprcfwXHiO1PoghZhDJh5ufHt9DtwBtACPYErJYlvL5vAm0GP7L3vWPnWBj2kr3wrJXW+20D3OfhOPux1VUl7aMmWh6biuzO0hCvfgtebT/fZhM5IJWAx1/amZQiZbmgmQJ4+p+DFTY+G1lO46uyUQFHO8KzJV3SstYcSdmCa3Y/DsLrUBprJE7W47WE+dMPsvxuughKRbOC42MAbQUtv42aj5hI0E0Qz9UdxRcxamPJm1ns7C5VTNJKbteyPxaf28NJl8JG6FBNVDkD1AEvDiP4Dj1SboDsbacEAAAAASUVORK5CYII=",
    vb = "/assets/svg/unfinish-208939c8.svg",
    hb = "/assets/png/uploadCamera-3c808634.png",
    wb = "/assets/png/vault-a933a89f.png",
    bb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAe1BMVEUAAAAAr4UDrIQCrIQCrYQCrYUCrIUBroUDrYQCrIQBrYUCrIQBrYUAr4AAn4ACrIQBrIYErIQBroQBrIQDrIT///+B1cFhy7Lg9fDA6uATsYtCwKLv+vgitpSg39Fx0LrQ7+iw5dlCwaOR2smR2shSxqsyu5rQ7+dSxalL3q2KAAAAFHRSTlMAH7/fn3+vb+/vX88/EBCPL89PTwJgLGsAAAKWSURBVFjDvdlpc6JAEAbguTmMR5KWAeTwiub//8JFdpMuHZTBaff9YpUlj830iNiy0fBUKyEldEmkMPpzxcKyiEwCThKT8udFAXcjnnLfVAKPo/hUEoukYrkBDBGrE/CP9itzBpMiPYqNEpiYJBozl4AhWoKFgKciFnTLiZnxu6YEJ6HtWswgILPhFRAQFDFkagjM0jUjCE7kNCkJRxN+g940vlj7xV43y1nQQNT9aHEIRt0FUEQoGKdQAhTesFA6VGChZCiWqihRhYXSocmiR1NSFCLfqxMqmd/VigMtCgs8ewoUz99Qo6ZDY2o0YWwF1Chw9gGPUtYba7MM0SJr7WZTwqOkTN/jvtvmXF2cPC8Qzbd5/3gujvZ094bFDIG2ybvjdwf7VZcDp1/vv7Ldtq97CFYDW39TVOuqsfXomu6zy1vb2t3+8rbK4nJo6dmofc/eENLZUbvuyMa/++Xlyc0tCjepLt2ovdFs6EkHbftjm+s33+Y/sVdltsUaa3BRjM17tiqy79ODDXxqj+e/L8QGIOpm31S/27LYHbPW2s2/WGuzY7PLK/wwlC6A3b92212+Hkm1PdhOdJMg6qTstnhTbCsHy7fNof2q4V6kz3W/rFE81D53qor+KmWYpkc1S+nRD8bp0dUrvk5e9cUXUaNph86pUf6q2x4W0aJpj85jUpSzPooSVT/zIkqU4+9nMlThaIsO5ew3hgpVDMPjUBQLxWgC1J0lzShQiR4uQCAa81eOOzDLUFP/rxESm89CzPf5K8Zy9APEdzSdzJ8ddeK5kw3nlmwkUTyVjCM2Gi4DlpNmCWLNPMOVr2mwTCpW4GiLiI0VkhPYVDwoMsKtOdk18UCNphPDsvrURsjellIo7fHv1h8aQLZAlBTlogAAAABJRU5ErkJggg==",
    Cb = "/assets/png/versionUpdate-db77e824.png",
    Bb = "/assets/png/vip1-cde9e3a4.png",
    yb = "/assets/png/vip10-61bb0cf3.png",
    Eb = "/assets/png/vip2-6839e741.png",
    fb = "/assets/png/vip3-30c8484b.png",
    Rb = "/assets/png/vip4-9dc1e9f4.png",
    Sb = "/assets/png/vip5-28139224.png",
    Ib = "/assets/png/vip6-0a2158b6.png",
    Ub = "/assets/png/vip7-48005ca9.png",
    Gb = "/assets/png/vip8-23c72cf0.png",
    Db = "/assets/png/vip9-a30a9d27.png",
    Lb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAeFBMVEUAAAD/oKD/oKD/oaH/n5//n5//oKD/oaH/n5//n5//oKD/n5//oKD/n5/+i4v/n5/+iIj/n5//oaH/n5//n5//oaH/n5/5WVn9hYX6a2v7c3P////8i4v7eXn6YmL5XV3+lpb+j4/+9fX+6ur+m5v8trb7f3/6Zmaz6OagAAAAFnRSTlMA359fIBBvP++vjzC/f9/Pv49/YFBPchRNZwAAANhJREFUSMft1bkSgjAUheEEw467XoQQdvX931CLFBdDSFJYMMNfn2+YYQlkyz7/mnjaLqmyv0WwmMem+wBMUR/vWQTGzhgkYBG+RGYDdgjQtYCxEiXq5AVsCYyiySc9AGiqB20tdxgAxUDdqwBCHSjzebDTgCp3AfgCtSWQu6rnTzsgNwPn/OUC+i+orIB8ZsD5kFuBQo6EqP90W+HtCrrG7dXAAoPI1wJoixkQLH5AnShwhywOydoOgZ/urkclQyAEczHB7cEUZcRJUOUfxLwj1RYHPtly6gOS6nMolZZu1QAAAABJRU5ErkJggg==",
    Mb = "/assets/png/wallets-7cd3c0b8.png",
    kb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKgSURBVHgB7ZrPbxJBFMe/M/wQqmnw5kHjYmyQg4me9Ajx4smCP87tv8Bf0PAXEP8C6c2DttujJ/kHjCSNYsTYPdiDJtZNkxbTZXecRYNNeTsshAZ2M5+EMHnvzWS/mffmkVkAjUaj0Wg084JhQhqVXA78qCKHOTk9h3nB0EaKt2svf1uTTQtJ42mmBCE25KeERYKxFoS3WdtymqHCxwUMdjRx/AICFSwyDE254/VxO64U3KhkDHDvrRwaiAYW0rysEs2V06Ml1seA422rAhJBjsbj9Ib8Wuw0prnysJhgbzpui3KSKf0vlfcQXWx4S/maadtnHXRKc7eEaCNbZ2+dctCCGV9D1GFYpcy0YCHuIOoIYVDmoFN6fr+gZodBGdVtKYZowXEnSRlXbq8gFmx9GDEFCL6JeDAqWNdw3NGC444WHHe04LijBccdLTjuaMFxR18AhMFx+rA+7eH4qDfiS6VTMAoGli5mh7bubpeMpaDmz5KpBHfefcS3r/uB/sNfh7j/4N5g7Md1d79gEvblnPKjEpLpqR5PyVQp/fP7gdLfP+kPxwc/1LEUzomD8yJIsAUFxi0j0JeUKXn6isgoXEf20mTp6a8/g921KSO5KgOzBOibe5+8rLFrN66SO+HXYDL1f9nly8uD9OyFrGGf7AzqV74lbFN2UrDHsMMESlDgizotbBzZczqEgnAZ26TsZEpf4GgiICUiA0eLNhPkq6YNwZ4jonhC1ItV06J8yv94fH61+l4A0XqTyGAVnuzkg9zKtuQmWNVfAFFBPqvHWVkVohTsp8XfBegDYKFgzExzdjcolYdhCEnndWU9IbAm21UJC4RsoS1XoF58ZrbCxU9IZ7ticFfWtZhfbQsOW7iwMymYgwNWo9FoNBpNJPgDNMGzUq2rkHsAAAAASUVORK5CYII=",
    Tb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANCSURBVHgB7dpNTxNBGAfw/2xbYkGxhUgPFlMMBmpASIyRmyXecYlwpnwC4RMUvoDIJxBuJkisfAFL4sGLgWgiEhKopgY5SHoxoNB9nCExviR0ZsvTV/aXkCbtdHb/3dnZZ5cBPB6Pp44IlMHc2IUEiFIgZ1BuIuTqy6A8hLWOgJicfnaYBTP2wI8fBiYEiQUwsISVfLR8uAhGrIHn7AsxWIU190f1VHk4zV3T6XweTCxwsgoJxrBKCNZBEozOdIS3luwELOeeQ0Keqxhce70e2v28yxkY17o78313+rJCIE8kVh0/FuKj6SxKVFJgFZQEpQhI/P3+uzfvkdvOgVP0ehS3hvr/eU/udKbgE5OlBHc9pLeW7ZQj6NX/YStJbdsq0M7W8kgKLrkKfBKWaOa0z/0BP7j5m07vU55KM25DGwfWhVVaw63g1n6lvejnKvTHJXsKhowCb7ywY7qwSiTageDFILioviKdHdp2QtCc2kcYMArsc8ho2ASaAhi6f5cltOpD9WXKV6CnJu20s7T65dQEARcOvh/g294+cjtf4FZAzgPq1OjqjbmeE5p8Itw1mi5apGh79DlIENwJtgTl5eTqyV8l/ThGUr48KdZGO6QJ9AB1wrIwoG2jayBvBFgrp3JyHIR1bXhr6SqzBF3WtsE54wVudF7gRucFbnSsN7D7sn5WdTSHcKQNzS18d16/sQX+8HYD2c0suKg7r+GRRNEHAKVgG9J7uT1wOvp5hK/MfSpsgdXDNk5+eYTb5bDmxjZebvR3ozV0CcdHx+AQ6YyU5xkZGKmdrHXedbjReYEbXVUrLfWwr60Ml55iql5p3bwdR6wnhkqpeqWV23b/7Posql5pRaKVvXZXtdKq63NY8SqtGmTwrxZ8Qr0QIqtrog8ssI46UQBWdW30gS2kUS8sZPRNNNRKGQGRQY1TK3tMVvUYTVoFwixqnFrGZNLOKHB8PJ0hiHnUKIdo1nTNlquFaZtLIwtyJpxADZFhF+PjK0nT9q6uwz2y41o60gSadxNWcV149I6lpxwhzxeBLKpFbtshMdw7tmK8PuvPV89g87ltyxdbdjIgf+1BlI9amZOXo+slEdJqToHH4/GcB78AlDYBdwiSx+kAAAAASUVORK5CYII=",
    Qb = "/assets/png/zs-1fe6152b.png",
    Vb = "/assets/png/banner-bf01ff6f.png",
    Ob = "/assets/png/box-83de4bc1.png",
    Fb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBpVRRctpADJWWTtpPjkA+moavtCcouUDYDOE75ASQE2CfIHCClO/Ug+ECISeo/yjwEXoDftOBVaW1TdcGD8lEMx57d6Wn9dOTEPbY81CXXwy0kOg7L7/yU7EHBBEgLBFxdNIIf+yLxfzG7KfWHHkfx+OATAwia4VQ5pcGtIl4G/08cAZwHlzcEWHLEPY/fYDe8WW4ggL7HegO/0FXIfU+N8b+DuAi0F0D1DIKz6uX4RJeYdOhrihDjwgUnjTGt1vAeaBbRHRnSvjttWAZ0A39YqibL1dhaAFnQf2ZDPZPm2HPdV486BohdSkuTJmdJ4A4yPM2e9Ae89o+KuGxktvJ5g6YUID0yGA1AZM9+eY/uV8EF13X94j5lvfLGlqKgOpcrYnrIEkMkQcFxkXzpnz7dC3FE0XwZ42LBBUiGGUiCK7hgJWYCnetWF6IdKaEH0OwyuJR7RBgwuvWMNZqRRX4F+rPsfK+TQFcllTSWmk2wAgOmK24YybuokjxSWTIZK6/IfAPAW7QFuF/AqQ6d9kf5hCf+EbXMhDSw2oznHAlC0FZAX41p0UrKQWh+qjAHvxdm47rwKCeQbxxJLWSb050Xm2OPdd3PtRtG8NJ4k5JJsx7Wo+T3wqgrbL0oAhTGl0c3gTGMUxBP6UgM75Y/R4rvc3k+vlWdE34XhvT5t/vsGYHp1fjLV07A3bKbacg7gKRBoOPVCJ87qgKlMyZzMwk3E4YNx6LbhEDQ922JlAqqyXrI+KKPkkx9w3gf91DHVciMbkvAAAAAElFTkSuQmCC",
    Nb = "/assets/png/commission-340af997.png",
    Pb = "/assets/png/betInfoStep-2e2a875e.png",
    Wb = "/assets/png/bg-79ecb3d8.png",
    Yb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNAAAAACBAMAAABrpTzhAAAAJFBMVEUAAADCwsLCwsLCwsLCwsLCwsLBwcG/v7+/v7/CwsLCwsLCwsJYtnRdAAAAC3RSTlMA35Nw72BAIBC/MDw1kigAAADJSURBVDjLrdKhDoJgFMVxlAlqsuFGoVPodN2k0C0GmwU2H0DfwG4x+AIfiJvj5ZyFe+bu2TV44393v3S8uP9c4w036eGW0mvsO+kp5JYwC+lHwsQ64+P7RfodsqtMZkyYPTKnIU+R6QiTSN/qTIjMkzAZYSSHhc6MCJNDfkmeIxPZTKozQaHv44xM+c04MjQDesBCrpKR8cnQamRuOtPazAEZMrSOMInOuOpPQ9OZlbzPCJOToSGzIUxmMgG+r8nQSp1pCBP9PLQ3a7bYesDNCCMAAAAASUVORK5CYII=",
    xb = "/assets/png/copy_code-eda53ba2.png",
    Hb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAASFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////neHiwAAAAF3RSTlMAZtl/MllOLAxfRj85JhsTBs95cK+PLT1ZNjUAAACSSURBVCjPpZDbDsMgDEPxFigMCrTd5f//dFmEMqXqw7SelyS2ZGTcKaZyrEegHRoZIJswTg8kWTpNQ/CRRwVTeWkeQYwCychgbhzAI4tRRSEIFMA0Dbf48TrtjUkL7IhuEKwevk34WpfLh43XWY3O1yb6smqSzRpdlBmKJCk9QUnmI59QivsJuirBGPeX8nB/8gYoQQQ++4MtiwAAAABJRU5ErkJggg==",
    Kb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAYEAQ758w308fgH/Pr4+/cG+gM+H0AAAAvklEQVQ4y72S0RLDEBBF1xKEkPT+/8e2S1Md5K3Nedu5Z6w70J3o4GCSJYHXMbcGhSA5nO3z1eHNQaQTjO6EBSdGxh2xEzZ8sHVJJ6Ch6twJpgksV4LphL0Jcr2A1AmMk/yaDmDoGVHZdLEjDSgnHaMs0FnRDPZe099Y2auKZztZvuMbF8rzJn/mAY3WNQKh5h4jmYrB7SF75Etl7JJrzHhIYorHmJHr2XwpLCIkSBF1LSxQPxGsu2pBh1npBp5CnxnlxkF4hQAAAABJRU5ErkJggg==",
    Xb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAYJ/fEB+/f+9AMM9Pr49wbwRY5iMAAADeSURBVDjLvdHRcoUgDATQhQAConb//2dromMcpn1r73kSshMi4HNSwikUcg2+dr0KkArNehZFOl6yMAKRt6LfNcFFbkDjowGFC9zKDuwe2DUucKS1ecRrz1WmK+AdMiucHRg8EICFG1wjDyThTYCD7HhZdN0rTT1L1J5vQefKxW4h6zrgR3mMjH+U+gin1hImbes24SNmoG/j9Y+LPuiL5GvXDHK/606SJhrU6vfsdG9nsdFY7TUm61mpzDqh5Son1Xq3J0DOAGwc0NPjb4HI8CeBLl8AhBMBcNSMD/gGBTQX04asjTsAAAAASUVORK5CYII=",
    Jb = "/assets/png/invitation-7d30dab1.png",
    zb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAb1BMVEUAAAD6Wlr+6+v5WFj/UFD4WFj5WVn5WVn6WFj5WVn7WVn6Wlr5WVn5WVn6cXH/2Nj+0ND5WVn5WFj4WFj6WVn4WFj7Wlr6Wlr6WVn6W1v+39//4OD6WFj6Wlr/XV36Wlr8xsb9vb3/VVX5WVn///8iL+fhAAAAI3RSTlMAZtmgDSDs8Y7Zec/fgHC8smA5cFlQTLw/L8bFv6gWxqmfBjD7BMUAAAEcSURBVEjH7dTZjoMgGIZhqSIg4lbX6TILc//XOMkk7U9ZxD89aup7Sp4g34HJ3pP9XLuxJ0792NGoXVoSrI/wmaw2r9mOROrCNiPRrviLoSWIxzgeg7iP4zaIyYa24OZg1ODw9+9DX3CSxXHziBsUrk4Ho7pCYLeXwVV9e/FHhca1d2s8rvGffYLPfqG18ZhfPqUQYuI24ZMUQk4XHsKZYvqWKExaiPtBrqjPLqU2ygvD5uZJ6dEULGiw6zqFU9Bgzc7OxdopT/+nulvIHm3QEHAhmfbUWlhpRMp5MqJ0x2+BlYU5Bg8WPmIwtfCMsNL5B7HtuAWGXqxMnCjDz4WfTAEx9Za72THxR1MWo5wm4QZ+liywk+Rtluw90x9q45rYg0Pq2wAAAABJRU5ErkJggg==",
    jb = "/assets/png/invite_reg-4c4b51a1.png",
    Zb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOSSURBVHgB7ZnPTxNBFMffbFtK+VFLPfRAE4tatUYJ0AMmSKzxghddIHgV/wLSvwC4ebLyF8DRRIH1ZExMLOpBDhhEYxObQE3qgQsQsLTSMuPMak23ne1u2ZbtYT8JtJ15b/q+M5k3O68AFhYWFhYGQNU6Y6LHA0JmEpBwCwjpAyAe6uKBukD2AKEUHS8FBL+EFls8+iyXghpRFfBk3DmFCJ6pX8CapOh3zUWXfj+txcnGa4yNtUxTZY/pgK1werCJGhkJ2eB14nhFr1PFCsTGHJO0eR7MRBBuR1/k4rpMK1oQmgKzIWRar6liBWJiawAEvAXNAHb0R6XMupaZcgVsuA+ahGBfIPZ9UZxMLIuBanZKAQSaRgCNJUIImRcwecuEqJmVCwiAAewtDvD6zsp/7L0RspksFGNiQpKL97j7wq41kKvDBf4eP6S30pD9leXasGCvDoTAf75b0Z7e/AnJr0lVP7fXDb5uX9Wxi2CCZhLPxZXQhBQvbRdAg/BwGILXL8LNkSFuPxM4fHeoIngGa7txZ1B1NcLDA/LYvYO9oAcbqsxOmgLcXZ3yq0MliOC1ILjaXar+rI+tDq+96NfWoe5fCgGIlG9qTQHVYKJ4M18OszG6J4rYMERKPxsS0Nnl1m1bXEmjEKxMNIYEmAES4FzpZ0MCDnb3ddvu7x5AIzAkIH+Ul1OlFsymQG0bgaaA4swdZvh5OvEpodpX9Et+SVa0F/IFKqogv88bEKd5kK29W6NZxA/b6W1uP/vy1TerNJ8HuQfZt7UEDTbP9Xv/6oM8dnozDSdFU0BWZQbLbTY+bsjBur1/s83+zgE38FrH1kIpALFr3clhAe9s70A9qHY4llK2B0gKmoSTCcC2ODQJbp2HpEJAVKJlDYTiYDIseL0nN+9OPAsmE7gc0G1bIeBfNcA0Ebx0XA3uQRZdOpqhXY/kqtkpIV+KwiH5flAN+jD3Q+GnZhhdyi3Q0qIEQk50Ou0PnW2tkTw9ObOZQ6gHrvY2+dXr88IZTyf4L/jB7tA8lgALylSPQAfsEiEck6YotyCM+i89kP6XW3Q9zIVGpRQC87MTZb00eIbup9FjAqZnJ4zQXHmbbgGsGkArA6aJwITMhsalhfJ2XXuglAQtMglAqwMGa0g1sEfoxF2ZkLhl95oFMLaWRU8Og0iX7z5ihSf5h4+6CUqxf4g+EWCAz04BFnpGpT2wsLCwsGgEfwCZpjPHkp2MDwAAAABJRU5ErkJggg==",
    qb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAP1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////9Du/pqAAAAFHRSTlMAmWbesr/mzO8QQM+PgHBgIDBQf8Hd8okAAADXSURBVEjH7Y3dCsIwDEZT02jXn21uef9ndVCIRQIzxYsJPZf5cjgw+B3T7GmZutSYAx8E97RHiYUkeUNUkLwtquQNUSVviCp5S1TPn0cTfZGfdi3qj6fVq/lWd6yAdUva5huZNZa6zay1z+RYt6iOZ/Jct6VLTnXDLpn9CjB5NsoCJWa7LFxaDlY3NPJslQs0bKWUh+AF7Xa8RvjECTdBu8HBkIc85MvKayaiu4CCdiMitzYushF8247NZJHJLtOQu+QdMbAdxAywcTcRYr+8AWTspMCf8gKlSnI3e1xKpwAAAABJRU5ErkJggg==",
    $b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAkBAMAAACgSm/0AAAAMFBMVEUAAAD/3X7/3H3/23z/3X//3X7/3X3/233/23z/34D/z3D/3X7/3H3/3H3/3X3/3X7nN6EnAAAAD3RSTlMA75BAv99wcCAQEM+/YDBrip+DAAAAqUlEQVRIx+3Tuw3CUBSDYfOUKECUSBQgMQCIBWAD2CAjwAr07AArsAVlRsgKeSlSmhPnbhD5lNeNu6/7EXb+mbA8GG+TVoFbJRpSgHuZtgZcIiIljaWJa4nMVGRN5KIiVyIPFdkTOarIk8hNRU5EdiryBRb9q+lM+HI6c76cztgc0pmaQzojj3Q+MZ2YTkxn6O4e6aQO6dRwSGcDPZ06g57OH1DT2R6C0QFObwRai13FRwAAAABJRU5ErkJggg==",
    e0 = "/assets/png/logo-3c92e42a.png",
    t0 = "/assets/png/poster-ce19704f.png",
    s0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMAZrLvcCDfToBfM42/2RDGqXkZnzDPlkAmgwmzcwF24HkAAAF8SURBVEjH7dXZjoIwGIZhulELBYFhUWe++7/NEU1ZfkrDcjKT+J75p09sqk2jP1Cu5UXq/AitrcCrL7XbSoxddtovTLNsnklC9oJ5BSNV61aBdic42bRp0dX9NrLNOJ/Y+vm5ASC3Yv1iNgbi3kYxgJbg8M+kItXEaji9Ygt2q22//dGCz/HPpU+vfLNwf8vU+2Px9zRWC6yH+XjwrRdDLHQunB4spB/DRjSOl+7UsObKVjA6ipUAqVzFcehO0bOmGHKhObEBLHKK2VQXLISRLjArr3iX3VkYo6b4mWwLXrSSMIIzznm5wOH47DSqY/i9L3MMu0t2BpvHCcySM5g9zuDuDDY7cEYx245LHMelcDjdi8vvwULcPRi7++D/iMVeKybY7sV2gg3GslSy9AogNDPRpIa+NXxqefi5UzF9XLPRLmaxiogmly4dMZ01zo4ZK6bXXTpKZsKaaC3DXN5ZOO3Wae8sXOUW3vyzcAl5E+gs3E0zoyvv7NPJfgF/kYBMSM3EDwAAAABJRU5ErkJggg==",
    n0 = "/assets/png/promotionbg-9dcd78e9.png",
    a0 = "/assets/png/rank-1-853e0202.png",
    A0 = "/assets/png/rank-2-8073eafc.png",
    o0 = "/assets/png/rank-3-0a7da055.png",
    i0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAS1BMVEUAAACHh4eHh4eHh4eHh4eJiYmHh4eDg4OIiIiHh4eIiIiIiIiIiIiIiIiGhoaIiIiGhoaCgoKEhISHh4eKioqIiIiJiYmJiYmIiIiKen8AAAAAGHRSTlMAZh5fP38wEL9Z759RTDnfJgYMj2+vj8+29kadAAABMklEQVQ4y82SW7aDIAxFQ3iIilZRe5n/SC9WXoLKWv3q/kLYPSkJ8Fs0kxA4Qx0cyAema+ZIPG1TMyP00Z1ISmt3xNAqhlDSkhOTLzOWVyJnBgDtLpmrIlNpLIQVldi9wReoqywWKBsQaWMqydQ5SPEy1P8qYzirOhQqW6Bpao5Jp/XjuNQcBy2gBNuQac1ZHdd3ZhE87Id+7jgyJh4er57hGxBv36KgS2/hajeazVg6uWIZsXQmIOk+gdfx0Z/lZjFnXrv8PtadSku/TAG3+9yto4vWLHnbE+lyw/3+zCXMhrgldSYz18gYy53Kb9TOnvVJavwsaUIT0KnrQ6p09Sv/tQdAZwa2axU/od0m0lnlffVZjK8sezJYdrZb4QaaBUuEe6iMb2VhUIEpzjlVCL/JP4+1KKn85bUpAAAAAElFTkSuQmCC",
    l0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAclBMVEUAAAD/cHP/cXL/cHH/cXL/b3D/cXL/cXH/dHb/cXP/cHL/cnP/bXT/cHL/cnP/cHP/cXL/cXL/cXH/cXL/cnT/f3//cXH/cXT/cHD/cXP/cnL/cHL/cXP/cHL/cXT/b2//bW3/cXL/cHL/cHD/cnn/cXKUZmZkAAAAJXRSTlMAZu8w9SC+fw2Db1gZs19Bz6Df2XkGTDkQsq+PjHksEwfilmAmA/v5RwAAAURJREFUOMvNktl2gzAMRI3tmB1DSAJN0qSb/v8Xy/GmYqvwmnkBRveMZQn2evpofoR4NPtgo7vMqNPFduKU/dEWXNTZSnWxS+6zSCJ7JkkRgPIUXgV5fCifuKz8e0fFPgLaArxtxtYYCiBDC5eUPLs21ShhkRxVaZ20g6ct9BD0aZ1nulGXKgP6ZZ2GQCN2yCI0nZWyZO+/iYV12arb0Q+Wpbq4mgSQHMBvQSORNAtymf/AwaEH9n9saZh3N9WaUZoyQhNFCt6mZMsFRQIgiz8OFxQZs50ZMbJIGn9A8u49kZCuoO5mAO2IlohJVJ6bB8EeIvLK2BCxfhFRRj8zNvfROQ7VK/doEg7HldmFXnPFkYy74qrSDIVdiPiuOUtkKxUa3zaTpVImIjlIEWi1+Le1dcNjUPbO19gbzEQJVqSentnr6Bcl5y/FYilKMwAAAABJRU5ErkJggg==",
    g0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAATlBMVEUAAACHh4eHh4eHh4eHh4eCgoKGhoaIiIiJiYmFhYWHh4eIiIiHh4eIiIiIiIiIiIiIiIiGhoaEhISIiIiIiIiJiYmJiYmIiIiHh4eIiIi250GbAAAAGXRSTlMAZj8fXxAo338MWU0yn++/jzkGURlvz69Gy6PIVgAAAWdJREFUOMvN0tuWgyAMBdBjAAXBoqjT+v8/OloSO96W89j9UhrikdDiC5kyBJVwT/nijRxudIWozX2n0Oe9Kfi6f7my+KvGUqVhO0ldLFz+WJX5JR0+nM6TDMWWdzwiVhymyl2rlp0BTMJMKHbw4ngwCXPHVpJ4xh3HA9TwvNqnhrRrJWh5hjne6SVErPdMENJR8q2xDrU8AyFXr3MM61MnJ8OHe+XWEkO9ZqbUS3Vj6IjK9B7SL9s0bKqXXLr5TyvznyI11TSrPBB028xsb2CeS/ERRwUxPqa31qh2Xoqooau8bHKziflrRaadtioNLj16zH64rEI1HVhYXvWA5qVS3LnVInKukdCGFwekeKEhFZrORYm14JGNvWh9oJHUllu5cCT3omDyNDRepkZ+P5Anb67O2ijuXOTfhJ7nrSrOyc8AEby15/dqyY5ksKN+jgcdcUHvgqPCNR0nUbWEGzSf22qv8HV+AfFRNE5uq4DBAAAAAElFTkSuQmCC",
    c0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAV1BMVEX/kQ8AAAD/kQ7/kA//kQ7/kg3/kQ//kQ//kQ7/jA//kQ3/kQ3/kQ7/kQ7/jxD/kA7/jhD/mRr/kQ7/kQ//khD/jxD/kgz/ig7/kQ//kQ7/kA//kQz/kQ+Z2U7pAAAAHHRSTlNmADOMfybtoHgMOV9ZUnBLGQbcw3A+HxHPspYstSjzkQAAAMtJREFUOMvF1UkOwyAMQFFDQhqmzEMH7n/ONhINqITYUqX2r98OYwMj9zu66rKcSXSq3KtB4/TifCVCg0wspDJnIZFxTYYGGeIJzUk3Zmjhkqoj2gt7L9JaIT9ozzXkUn1MpYGTjIyogdNsoAKQ+E4NRvWbdoC2evrAqfCU45RTaFNvzThtrn4ccTo6Kq0dmRZ0OtEp3OgULkO1VX/xBDgVOF08lTiVnrIWk5Z5ig+s2ClT51LFn1thMlAmbA62XbKI5MIPEnIHfz9GT6zSFwiF4ZLeAAAAAElFTkSuQmCC",
    r0 = "/assets/png/rebateRatio-ba222dbd.png",
    d0 = "/assets/png/receive-0c641f1c.png",
    p0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7dfBDYJAEIXhgUq2FUvwSIMSL1qCpbiViPs8GkIIO/PIJO9LjJ7M/GRhFzMRERGRwwZzcrs/3r8//AyXabpWIxnNV1nG5TXPz2IkbgG48u2rGjnCbQkBhsbw7Wdpn8pYTq4BwI5wDwBmREgAsCLCAoARERoA0RHhARAZQQmAqAhaAEREeB8lNmHY/x3bOlEDIlAD1paQddJNvEfqx2jqjSz1USL1YS71cTr1C03qV8ozhge3nfiM4cH7KEEdXkRERKTTF7kYzSLK3JrOAAAAAElFTkSuQmCC",
    _0 = "/assets/png/Lv0-c3baf0ba.png",
    u0 = "/assets/png/Lv1-cb6d787f.png",
    m0 = "/assets/png/Lv2-fabf9d77.png",
    v0 = "/assets/png/Lv3-d91fd9c0.png",
    h0 = "/assets/png/Lv4-c0e4f354.png",
    w0 = "/assets/png/Lv5-98a2cbb8.png",
    b0 = "/assets/png/Lv6-3fc5204d.png",
    C0 = "/assets/png/Lv7-fa9f063a.png",
    B0 = "/assets/png/lv-450d4246.png",
    y0 = "/assets/png/searchIcon-61d6fcda.png",
    E0 = "/assets/png/server-f01e6593.png",
    f0 = "/assets/png/serverbg-97d6004f.png",
    R0 = "/assets/png/subordinate-0544fba3.png",
    S0 = "/assets/png/team_partner-d33c9632.png",
    I0 = "/assets/png/team_port-a127ca76.png",
    U0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANUSURBVHgB7ZjPTxNBFMe/s9tt+WG1CVzwwnrxJPHXH2C5mJggEhHjSRO9G3viCBxJTCrGqxpPGtGkoIlHPOlJIdETF3tRL2qK5UfZ7c5zZqGEtrvbzpJaxP0kZUpnpn3ffTNv3hsgIiLin4ZhD2SvdKTB6RJAI+Jfc/sbl8TfJRjaVOZZKY8WE0pAdiSVgrY2IabfCR5J98C7pzK5QsGr98H1ZI+1VhpiWmxZX934ePsNNqGIBkVc4/X1hcbGS8QYMdad48FawUmIJkG8PMC74kP3LyABRZQFuE+ecKrp8XKs6616xufXv9m2/RTEVjmoxznUeQaKKC2h7EiHCY1/QRg0bTDzovTWq2t6GMlYzBhlDHHbNl5LYWgSNQ9ofAJhcdyN7sn4PIoxHZ/k+464ZULFJJXBwl/NL526uTJa+VPaNL7LlpPWDwXUBNAeBFTCrA+VZUOgJBRQ38T7DFUBeYRl64Dz5e7FZK9sCewnFFBcQjSHkDAEC9AT9gnXIMZbKEDXcwgJidTCr296uDdJ5ByX7y2r/AEKKAlw4zjRDFQhNuOXF0nj48bvIXdYmT7LkAoF1Dcx2ZON1nMVjC2BOie9umQuZBgrl2XkYcR+GYpPX6IsIJNDAY412JQnxJOH0znol8zt5ELiyesb1qswydze0mmZWjA+yTScpO0zQnxhnojNQWc5v9QhIiIi4uDQMIzu3DwwSotMS9S2JF4sBXXy4lDLi/mi1Z40E2If3uxN3nr0I/Bk9hXgxnidHosDK43WkEdclJk+KUb2WodJtnOegRUt+7AoM72FeJ7E2TFDFOLOYguNl5iw+GJ2rNuzSNrYNIqy2JdpRiy2MlpJt2up88BW4S6MD7dMwlAQnjjt5YnnY4h/RewscTYgTnqrXD7ystYT9R7Q+MJfNF6Sgi2WqgdXZ2FlZsvvHUdfljcWhlFM146pEuBu2Aa1a0sQS3X7tz3pN0rvpAdEyd83Pdx1dHdftQc4v4F2EXDtIj3hd+1SLYAxE+1Co3NB3ZVrlzJpfVXTqkYRmWgX7hkTxLq7eYXB8d2f1m5iE+0jUMCxxFaxw4mqLoD3071QoAC5D2Qro9Huz/+7i619RySg3dQIkOluu2jit0Vy574iIiIODn8ArFc+wS/NMqoAAAAASUVORK5CYII=",
    G0 = "/assets/png/u2-342292e9.png",
    D0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAABI1BMVEUAAAD/qHr/1Yf/4KL/4KP/0n3/pXn/oHD/1oP/oHH/2pL/oXL/36H/0nz/4KX/3Jf/4KP/onT/36X/36P/n3j/0HT/1IP/z3P/oXL/1YT/1IH/vnT/pnn/w3f/p3v/0Xn/z3n/pXr/wEb/wUj/w03/1IH/y2f/z3P/w1D/yWD/xVP/wUr/x1v/xVb/3p//yF7/zGr/gkH/0Hb/ymT/l2L/xlj/2I3/0nr/znD/qlr/2ZD/iUz/ezb/25b/1Yb/zW3/jFH/mmf/lF3/hEX/gD7/2pP/nm3/j1b/3Jr/2JD/1on/1IP/oXH/kVn/h0n/fjv/36D/pnn/t27/s2P/0n3/xHH/v2H/rl//sVn/m1n/mVL/yoP/qW//oWD/pFb/vlH/ulHNLSl1AAAAInRSTlMAIBDvX0Df35+A7+/fz7+/f29QIBDv39/fz7+/r6+AgIAwZ1tgDgAAAdJJREFUOMvF0mdTnEAYwHFyxdg1anoXls7tstSEUO6A43LNK5Zomt//U7jqHoLD8NY/LLz5zTM7O8s8bUef1uZbH77WmmdrfdM0u+ONOvPcnESeF/W6G3UmivUk0b2MqBpz8oOUTLPui2rzxszi5A6d6F5v66h6z71oqut6QlbsTSpGNdofF4vlxbdVF8vF+/Yj8vllyBtSKQOFr78UzY6ADKhalpZnWSo0QmGnkaN1jAxVk8VSsqYaIX63Mu1TlxiRU4pxnKhB3j1t54NCyRI5lmWPySLf+z8nWlLorFP0FiOoiQp7XIpVyCiEX1EEBB7KHDHlFE6GvDB6QGoVEs/Pz85+r5BbiZbzcb8/ntdOuh6bk2xi9mv39KubTeNpZFI0IkjjFPYR6nn67W2gKMBIssgRlBSrXEZx8oCGTmioMhlVTFH+/7u6uvz7hyIbCGSULHKlRNmSkABsijYDx+UlVdPkQpqlSrzrBJsU7dkAu8iQIFTzIJQM5DrA3qNo37eBI7iIL4VcwQFDv0VRo+nbAXAwFgph7IDA9rcPGVprNkjtYTAChUbB0E4HnQMm72C7M/DT9DvpJ3lvn9T3B51miyl02NptzjqlZs3d/QbzFN0ANdiCUspR+gAAAAAASUVORK5CYII=",
    L0 = "/assets/png/searchIcon-0ab4a4a1.png",
    M0 = "/assets/png/searchIcon1-8ff9f84d.png",
    k0 = "/assets/svg/Line-5603a544.svg",
    T0 = "/assets/svg/wallet-8814bff8.svg",
    Q0 = "/assets/svg/anbg-67cb3497.svg",
    V0 = "/assets/svg/changlong-4266c83a.svg",
    O0 = "/assets/svg/chat-fd5f6e5e.svg",
    F0 = "/assets/svg/close-d5633c35.svg",
    N0 = "/assets/svg/copy-0f160247.svg",
    P0 = "/assets/svg/down-72538d4a.svg",
    W0 = "/assets/svg/errorTip-b80a8dd6.svg",
    Y0 = "/assets/svg/eye-af3b59e2.svg",
    x0 = "/assets/svg/AG-57d80489.svg",
    H0 = "/assets/svg/BB-3b62048b.svg",
    K0 = "/assets/svg/CARD365-9a1f713d.svg",
    X0 = "/assets/svg/CMD-2f1fed5d.svg",
    J0 = "/assets/svg/CQ9-28cbe1a0.svg",
    z0 = "/assets/svg/DG-67d92c87.svg",
    j0 = "/assets/svg/EVO-d87fc8c3.svg",
    Z0 = "/assets/svg/FISH-1ca23ffb.svg",
    q0 = "/assets/svg/HB-af706a77.svg",
    $0 = "/assets/svg/IM-f20d13d0.svg",
    e2 = "/assets/svg/JDB-29945bf9.svg",
    t2 = "/assets/svg/JILI-09514bce.svg",
    s2 = "/assets/svg/MG-25d464a4.svg",
    n2 = "/assets/svg/PG-a80ccdec.svg",
    a2 = "/assets/svg/PP-e1337123.svg",
    A2 = "/assets/svg/SABA-1063b963.svg",
    o2 = "/assets/svg/SEXY-368e7b37.svg",
    i2 = "/assets/svg/SPRIBE-8cda730a.svg",
    l2 = "/assets/svg/TB-dfadfe00.svg",
    g2 = "/assets/svg/V8CARD-f2121bac.svg",
    c2 = "/assets/svg/WICKETS9-be2285e3.svg",
    r2 = "/assets/svg/WM-64d293d5.svg",
    d2 = "/assets/svg/home-863da605.svg",
    p2 = "/assets/svg/hot-7cd8b5f7.svg",
    _2 = "/assets/svg/main-b7c496dc.svg",
    u2 = "/assets/svg/nbg-d00763c0.svg",
    m2 = "/assets/svg/play-e40526cc.svg",
    v2 = "/assets/svg/playactive-a35b6147.svg",
    h2 = "/assets/svg/promotion-f9fa0f41.svg",
    w2 = "/assets/svg/anbg-67cb3497.svg",
    b2 = "/assets/svg/subtract-ca63ef68.svg",
    C2 = "/assets/svg/voice-4afb7225.svg",
    B2 = "/assets/svg/wallet-8814bff8.svg",
    y2 = "/assets/svg/activity-7ac8dee1.svg",
    E2 = "/assets/svg/chat-9dcf7b71.svg",
    f2 = "/assets/svg/home-52204f51.svg",
    R2 = "/assets/svg/main-3760ca99.svg",
    S2 = "/assets/svg/promotion-2760e4de.svg",
    I2 = "/assets/svg/wallet-112344f3.svg",
    U2 = "/assets/png/MonthlyReward-fd9dde00.png",
    G2 = "/assets/svg/0-ba04096a.svg",
    D2 = "/assets/svg/1-4ae30a16.svg",
    L2 = "/assets/svg/10-3166d330.svg",
    M2 = "/assets/svg/2-819dbb26.svg",
    k2 = "/assets/svg/3-9c0641a3.svg",
    T2 = "/assets/svg/4-20227016.svg",
    Q2 = "/assets/svg/5-f8f35115.svg",
    V2 = "/assets/svg/6-3d6266ba.svg",
    O2 = "/assets/svg/7-6ac5610b.svg",
    F2 = "/assets/svg/8-6b79db4f.svg",
    N2 = "/assets/svg/9-4e729754.svg",
    P2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBpVRRctpADJWWTtpPjkA+moavtCcouUDYDOE75ASQE2CfIHCClO/Ug+ECISeo/yjwEXoDftOBVaW1TdcGD8lEMx57d6Wn9dOTEPbY81CXXwy0kOg7L7/yU7EHBBEgLBFxdNIIf+yLxfzG7KfWHHkfx+OATAwia4VQ5pcGtIl4G/08cAZwHlzcEWHLEPY/fYDe8WW4ggL7HegO/0FXIfU+N8b+DuAi0F0D1DIKz6uX4RJeYdOhrihDjwgUnjTGt1vAeaBbRHRnSvjttWAZ0A39YqibL1dhaAFnQf2ZDPZPm2HPdV486BohdSkuTJmdJ4A4yPM2e9Ae89o+KuGxktvJ5g6YUID0yGA1AZM9+eY/uV8EF13X94j5lvfLGlqKgOpcrYnrIEkMkQcFxkXzpnz7dC3FE0XwZ42LBBUiGGUiCK7hgJWYCnetWF6IdKaEH0OwyuJR7RBgwuvWMNZqRRX4F+rPsfK+TQFcllTSWmk2wAgOmK24YybuokjxSWTIZK6/IfAPAW7QFuF/AqQ6d9kf5hCf+EbXMhDSw2oznHAlC0FZAX41p0UrKQWh+qjAHvxdm47rwKCeQbxxJLWSb050Xm2OPdd3PtRtG8NJ4k5JJsx7Wo+T3wqgrbL0oAhTGl0c3gTGMUxBP6UgM75Y/R4rvc3k+vlWdE34XhvT5t/vsGYHp1fjLV07A3bKbacg7gKRBoOPVCJ87qgKlMyZzMwk3E4YNx6LbhEDQ922JlAqqyXrI+KKPkkx9w3gf91DHVciMbkvAAAAAElFTkSuQmCC",
    W2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJBSURBVHgBpVRRctpADJWWTtpPjkA+moavtCcouUDYDOE75ASQE2CfIHCClO/Ug+ECISeo/yjwEXoDftOBVaW1TdcGD8lEMx57d6Wn9dOTEPbY81CXXwy0kOg7L7/yU7EHBBEgLBFxdNIIf+yLxfzG7KfWHHkfx+OATAwia4VQ5pcGtIl4G/08cAZwHlzcEWHLEPY/fYDe8WW4ggL7HegO/0FXIfU+N8b+DuAi0F0D1DIKz6uX4RJeYdOhrihDjwgUnjTGt1vAeaBbRHRnSvjttWAZ0A39YqibL1dhaAFnQf2ZDPZPm2HPdV486BohdSkuTJmdJ4A4yPM2e9Ae89o+KuGxktvJ5g6YUID0yGA1AZM9+eY/uV8EF13X94j5lvfLGlqKgOpcrYnrIEkMkQcFxkXzpnz7dC3FE0XwZ42LBBUiGGUiCK7hgJWYCnetWF6IdKaEH0OwyuJR7RBgwuvWMNZqRRX4F+rPsfK+TQFcllTSWmk2wAgOmK24YybuokjxSWTIZK6/IfAPAW7QFuF/AqQ6d9kf5hCf+EbXMhDSw2oznHAlC0FZAX41p0UrKQWh+qjAHvxdm47rwKCeQbxxJLWSb050Xm2OPdd3PtRtG8NJ4k5JJsx7Wo+T3wqgrbL0oAhTGl0c3gTGMUxBP6UgM75Y/R4rvc3k+vlWdE34XhvT5t/vsGYHp1fjLV07A3bKbacg7gKRBoOPVCJ87qgKlMyZzMwk3E4YNx6LbhEDQ922JlAqqyXrI+KKPkkx9w3gf91DHVciMbkvAAAAAElFTkSuQmCC",
    Y2 = "/assets/png/award-0a41a908.png",
    x2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMQSURBVHgB7Zi9ThtBEMdn1oiA0rhPCpMiH1XIG8AL4EOEGucJSJ6A8AQ4TwDU2PL5CXC6dFg0gC0FF0kdNxHC4XayYxvJeD9uz/LZLu4nWXfe3bvd2Z2Z/d8CZGRkZMwThJS4rQX5ewklvn8m4GRtO+xCCixBSvQkHCNRwPf/IiiqyyakQCorcFULCiKi29EymcO1d9thB6aMgBTISTrQOnqQJUiBVAwggA2tEHEfUmDqBrTPgg1lQcFQlb/iuikjbIO4qQQBTAAJ2rPV5QTswQTweNoW47UgbleDA0n0dVjbkQI3fYPPFLxjdJdVMPum1OH7aup2nf8T4Ze3u2F5tI22AjRMfYM/wC+4uD4LPoMHOWnw/afk7x8Ge0McrVqwz33DcPAMImlxZNgHsNsPw5FO1YNHrWrxfSTw0LkaFO8iAon3hLKtnjfAnqRjikhzYURsaO8bL4gIDsE0NoKSkHRuC0RebgIy1j15j8pQ3NZUx36uBn+hGgWWMdTHyzQDVpagqS5dS+8FNYPn7eqWludNud+GaU9oVbeOpHq3JYP14/HNxzDUiw1cV4IyArnz9kiAK39dJ6mCzda5TlftzB/42fFAtXaHePJ6J/ykD8MAuwnPNPjRUb8CTEbH91lJarJ2w8Z4uVUL3VSKf9QlD4sAu89Ofc1UZd+JCb/BgqBSe91WZzVAAjRgQaCcsKZdqwHsbwh63p0DTdfe4xRzKu9+hzkj0e3KTgOWl+w75swQbld2GsCia55upFJkI05Ixn4PSIQ6zIkI8TSuTexHPZ8o9CJgmeDcE379/A13f+/Ah9Xnq/Dy1YvYdisCwrg2sQawG7UqQdMl1Hjwlz8uISkuI1g6+Hw3eH1S2hRqmpiUpwmvcyFWqMqNeDaMbvQ4k1Nzob50CGPdh/EygJdSKdRTl0L18WlfkmQ+71MJtaReMzINIgmx2eeRRCdzM1GoDuVpItm50AwUqkt5mkhkwCwUqkt5mkhkwAwUajPpAXDio8U0FWqc8jSR2ICBQkXvLOELr6yPdMjIyMjIyBjlP5Z/NwElpi0AAAAAAElFTkSuQmCC",
    H2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMaSURBVHgB7Zi9bhNBEMdnD9vIgiJKJIyUi2RHfMSREiXQ0KaEAp0VpaGCR8gTJHkC8h4Q+cQLQEmDQCmwTCTswi5cEKVBkWxxy845tuzz3O6sv+Lifs1Ze+u7mdv//O9mARISEhISJkBwJ9bK3lI7kN9BQh5miYB6xhG7hZJ/xZnuAJNOIN/PPHhE3SO8FxNWAhdn3pGU8BbmBN7r4uz1EWeuUULVj56nLlmGWyCQYq944H/RzdEmUCl7eSeQn+ciHZqr4I7YLZb8etyE2ATmVrQmDEUdWwNzK1oThqImE5h30ZrQFfWIhG6zaE1QRT2UwAIUrYmRok4Nnu0F3/jdhPOv57BIbL/YBnd9dSmMEaDQGydrIJVOwaKRztAxDY0GjtjDDB+u5fKv3rwEEz+/VaBerUN+Iw+bz4pgA64wrrS77qqnu8X7k7JUjHFwaGgFUFvCESVgknNz4bGpArHlT+syPLqFVfZ/MLboS21EQk9K/g8pxCEwWMktQyqThk670w+Iw6Wae/33GrL3s7CsrsFBSnGIsUXHyRrY2PdPlWWdAIPeE2w1W8ClUWuEx5UHK6z5gZQnGwf+KXUu9k2s/PYYhPDBwDgyspKPiqF48Ok47rT2czrjwDssHN0cWxlZySf8DlIxaNAmgB9QYdUbkrCREVs+N45j6syMDQ3HmWxkxJUP5TgUrI7M5ExcGXHlE+c4FOye2ORMHBlx5KNzHAp2AojOmTgyMsrH4DgUVgkgcc5kkpFRPgzHobBOQOdMOhlp5cN0HArrBJA4Z9LJSCcfruNQjJUAQjlTnIx08rFxHIqxE0AoZ6JkFCcfW8ehmCgBJOpMlIxI+YzhOBRTab3QPdoB7GA7GpURNt0j8hnTcSgmXgEk6kyPtx6F4yijnnzcgtudPIHjULC31zn8Kns78p/azYNuu9msNcP+OreW67ecQu0qTFK0UaayAj0GnWnzeRGy97KQvpvuBz+p41BMdQV6VD54x46QR6h9BBNBx5lG0UaZSQJI9cwrq0fude8i/Kf7PnuzwIaZbQD1nenmNyQkJCRQ/Af1/KxJb5BFsQAAAABJRU5ErkJggg==",
    K2 = "/assets/png/giftBag-fd9896f4.png",
    X2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAAD92Vv9213/12v/qSf/pSL/piP/piT82Vz/2l//rkP+xUX+y0v/xkX/pSP/pyb/qDP92Vr/pSL+vz7+zEz+yUj+xUP/sjD901P+vDpFktN/AAAAEXRSTlMAgXETQu/AgWJhE9CwoJFxI8SgNiYAAABwSURBVCjP1dDJCoAwDEVR2zrPfXbQ//9RbRVx0XShgnh34UACSV4vjeGYoyCxLgBkNaFDBlcfPprj6HJecLbXTmfNNpbCcyWJuGdGMfsfawtfmA0QYwttoqz0/eVyibOclav7/Kmc4tKzqFgwLpKHrdO/Ihx/cMVZAAAAAElFTkSuQmCC",
    J2 = "/assets/png/0-78e1ab02.png",
    z2 = "/assets/png/1-953c5909.png",
    j2 = "/assets/png/10-b06f6562.png",
    Z2 = "/assets/png/2-c9b115fb.png",
    q2 = "/assets/png/3-fb0c8c43.png",
    $2 = "/assets/png/4-3c5b4bba.png",
    eC = "/assets/png/5-5e49bae2.png",
    tC = "/assets/png/6-4ee4b170.png",
    sC = "/assets/png/7-907655eb.png",
    nC = "/assets/png/8-fc7f2447.png",
    aC = "/assets/png/9-5a25583e.png",
    AC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAAD/n5//n5//np7/n5/5WVn9hYX6YmL4VVX6XV33U1P2UFD0TU3xRkbvQkLzSkrtPj7rOjr9iYn9gID8fHz8eHj7b2/7bm77ZmYGMChmAAAABHRSTlMA75CAjdT4PQAAAQxJREFUSMfllVtugzAQRUPgesYvHN7sf6V12iiGWvK4P1WUnC80ukf2YPBc3oa26USaa8pfuyrap9DUCc1T6Cr5d0FpUlkm1XOBAJ2lUz0XNEB5PNXzLZHOtpTqxaanjYB9U5VvadR4QKpGWADrh2G49QaYZWEG+5i+M3jGIgkK3N96/018YIyCQAi9D85Za13wfYAuC/cFgrPGMBsTldjHVBRWuGBjGpHo2OCwFYUdLuYR+VGsAxUFwKV8NIwDBMEyDrAVBII5C4xdaJpxgoWmJ2So8sFp/IKEkx6zBQShW3Bilj/vGQeWmh9IER7osfJeUusO0Dp91L30Atf9n0dWWyccx2jN2G0v78IXaTQfYBr5fYQAAAAASUVORK5CYII=",
    oC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEUAAAD/+nj/+Hj/+nj/pSL/9XP/1VL/8G3/sC3/6mj/qif/5WL/0E3/ujf/2lj/y0iGcDo6AAAAA3RSTlMAv0Dv9zc5AAABCUlEQVQ4y2MY3EDRGCsQgsgyGeMACmBpRlzSAmBpZlzSBvSRNk0rhovCuQjpCpdWuByci5BOcXGDy0G4pEhHuLSD7azeCSRhXIS0eVowkIy54uLi+xzCxfRYzBIXEPiK3d+WLS5g4FGMVXqWCxSsxCZtvgQm7TUZi3SECxy0YpH+gpD2wZQ2d0EAr2AMaTsXJHAYQ9oWWfoyhrQJsrQrhvQUZGl3DOktyNLepEqXIEt7YkiHIEs7k+oxG2TpxxjSpkuQpIsxo+QIQtaf9Ai1RCSHYtITk7E5LClOxp5D4yFGH8WVQ+tA2eAonhw6e3swbXIoBODMoTCAyKEDXq7hLnIJFNgEivtBDQBB1ibo5lcExwAAAABJRU5ErkJggg==",
    iC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALISURBVHgBtVdNctpQDJZemEyXHCHZJGFVbtCcIJgB1pgTQE6AOUHhBDHrQHG5QOAG6SqBdKb0Bl52Uniq5DgphGf8+Mk3wwxjWfqebOmTjGCBXwMnO59DnpQukMZLQDjhy9nYHCLAPSDdE6nxeTkIbGJiKqHWdU3YWCJKizhTQP5cqW6uGMySb0vAdODUaUGeNaHhAAjYOisFvtlsIu1ffaWXLPcGIrXPSsPrVOJpr3BDAC4cEIjgn5W+15avqRVSyfTApAIicCX2ymH+kzouEd0k+IbxzwZZSKgLfn3XF5Wg/Ub8MHBOlKY7oKhNVqCJWrnK0IMt8HDreAqpaTCFx0d4eloMwuhRZzRUTaR8qtG2pIJcJfC4okcGU/Z5rqOijYg1kGsKsDjCGuyIBUHLaECsiz6oSc9xjNki+psEIA2c9YijdA2m7B9WQcVVfGlyXKiEE28BfQQeGIoSUTuKn/XndcN+2b5CYpAha37/Xzhjyr83kIbfcCAgGdvwRIprvecUVaUAYE9Im0osgymrjB5cbM9zutuHPKrcBQ1MhSsQYrMiIeT/iuOOiH3zCeZQsUjMkpyl4qf9QpKMJiIeNJdJdlkclAYcbwpiEvhNeOo7zbRBw4L1Q3Hg1FVFZvNT/6ppQ8ra7qXdh6BG6lOG9yWLycPrj7eJ3JZUNhPZy5RMCiDsgAWEfPKtuNYesiZZkUoMTZGgRO10nAGZkXbzVms/0vcYP/kgvJu1rXw5W8go/+VvjMe+00Ai6yJiBCytIS8Prq2DRqzl4uVvZed67DltBKrDB4CluXNRHr4tkGvL3uT2yucpUYUDgt9/lxcKd/nammSe8w08UayKzQaS6XtSI7Hgohw05H1ExbA7wmi5W3q8y9j4CRNNlzm4SiZMgtibCLntOqwP7ahVE4BgCWkh0V9ZHOIZvvTRhjMNMBYVFEHaRPiKf5G+RtrJgpN+AAAAAElFTkSuQmCC",
    lC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAUVBMVEUAAAD/+nj/+nj/93j//3D/+nj/+Xf/93j/+nj/+3j/+nj/+nf/+3j/+nf/+nf/+Xj/+nj/pSL/rir/8G3/uDX/0E3/6mf/2lj/xUL/42D/1FIjXGXTAAAAEHRSTlMAv98gEM9wQJ+QgFBA769g/c3AKQAAAaRJREFUSMedl+tygyAQhbmJVhM9Kl7S93/QZqbpAAK72O//N2ezWWAVecxgu0bhjZJj/zCiGtNLXJBWV6kPb8b+o0YtogZS1RIkHVG8fYJBTaU+faGCr7zboIomU7pWqERpwuVtc5Eb3KCJbaJXbNcm3MQSP5jl6ZvW4Tbyzx3wD9qPHBd9uDmLO3LRD4Rsc5HvTLREwDqXWdYkWiPknAlOhJi3bNlgzwsB/bVqR8vuUreJOk2IabSJe70QXho9iD4KZjmiAR+jYJYFnk7IaD54tuBYC0UEM9FKXP5jntUbAp46GXnZ1bhnQV5rur2GsiJsxlWiAWFzh7JDyL6Q7o6QUVhEvNhj4en97cfP95HcgQYXNn4w/VUiK+0td3X3qLK37JNjkHASg+XR4dVLDaorPTgtWNuV3xuJlKU0WH42RTF6XWgXg/ggszbpdv5xfyJlX7xLbkQWZXtHholdaHY3z27n10Bzb5USMUaBhF8B693EbqrXvxx1K7MReSa29KcVRXRHu1ILikERais4WkmoPNrKxOzvfNS1/Sh/Pwebzg4F8wdww7OgeqAIWQAAAABJRU5ErkJggg==",
    gC = "/assets/png/welfare1-eee87ee1.png",
    cC = "/assets/png/welfare2-cf757d28.png",
    rC = "/assets/png/welfare3-bfb05d5e.png",
    dC = "/assets/png/welfare4-5642a4c8.png",
    pC = "/assets/png/welfare5-8b250748.png",
    _C = "/assets/png/safeBox-e53b4da2.png",
    uC = "/assets/png/succeed-7d7e4b85.png",
    mC = "/assets/png/HaveReached-bd0aadbf.png",
    vC = "/assets/png/bg1-7ff97a99.png",
    hC = "/assets/png/bg10-76abb4b7.png",
    wC = "/assets/png/bg2-ee7fbf5e.png",
    bC = "/assets/png/bg3-96f1cdae.png",
    CC = "/assets/png/bg4-c3caf0f8.png",
    BC = "/assets/png/bg5-e2132369.png",
    yC = "/assets/png/bg6-8b5d1b4f.png",
    EC = "/assets/png/bg7-535312da.png",
    fC = "/assets/png/bg8-8bdc102c.png",
    RC = "/assets/png/bg9-74d6723d.png",
    SC = "/assets/png/1-d951dc6d.png",
    IC = "/assets/png/2-5df32e87.png",
    UC = "/assets/png/1-1fca7935.png",
    GC = "/assets/png/10-0eaf39a0.png",
    DC = "/assets/png/2-fcf77958.png",
    LC = "/assets/png/3-9cf04b7e.png",
    MC = "/assets/png/4-a4cfd018.png",
    kC = "/assets/png/5-89e9b349.png",
    TC = "/assets/png/6-05959c7c.png",
    QC = "/assets/png/7-a50aebe0.png",
    VC = "/assets/png/8-8cbed392.png",
    OC = "/assets/png/9-63365227.png",
    FC = "/assets/png/ununlocked-b5a4c7d0.png",
    NC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAXVBMVEUAAAD/n5//n5//nZ3/n5//n5//n5//n5//n5//n5//n5//np7/nZ3/n5//n5/+i4v/n5/+iIj/n5/5WVn9hYX7a2v7c3P////9jIz6Y2P+lJT7enr+9fX+6ur8t7d2ADHTAAAAEnRSTlMA359gIBCQcEDvr4Awv1Dfz79yPRDGAAAAzklEQVRIx+3Vyw6DIBRFUUEQ320vKiDa///MduDgGkQgTdM0cY/PCokRza7i43lBvTWts+8rOI2y/V5AKMLxnlUQrMCggIjwEV0MyBEgfwO0nVAPKtgpsHLfAEBaP5iNdAEQDNy9C6D0gUkeg9wDtEwB+AATCbadXtQzDmybVSk1pIDlDXQKAKVWGQXGbWSt+dJjBZMKZpn2amCBQcW9AObxAIjTC6TtiLt1dfnzO/0h6FM/lQyBEsLVGa6BUIRlSYI4/yBG78RbLXh2ldQLm4VemLc0iw8AAAAASUVORK5CYII=",
    PC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAb1BMVEUAAAD/+Hj/93j/pSL/+nj/+nj/7WH/+nj/93j/qSb/+Hn/oiD/+nf/+nn/pSH/+nj/pCL/+Xb/pCL/+3n/piL/oyL/pSP/oyD/+nj/pSL/ujf/8G3/ry3/21n/xUL/qif/5GL/zkv/tTL/6mf/1VIvds/fAAAAGHRSTlMAYCCfgL8Q30DfcCDvz7+gcFDvr6+AYEC38K91AAAA80lEQVRIx+3Waw+CIBSAYSTFysrsehC85v//jc0PzqkEwllbF9/PPIMdN4Qs/VdesANT+5iqKN3DvHyFDQGcdW/NrUfWA4uCEQ4A3LcGq7YDS+2w//O4bPJ02OZwuUVzcJlyZZvIjDuq0MyAheSvOxpwzTWt9Lji7lhIBM44AveTrrLcFhfdsqw9hiXuVtXQJjE4dTy2aEfvOjCZiVJa4grzqQQGQ47BIDH4UWjwVYtbrdk7MmEQuf4u6LGaN+n08KfD/dPv7bdihsEkxPzcfRsbkmFsZ/UwcH/RBGTSdq49MzKNxrO29Yg6tk48fQklS1/aExswyYNgMRgZAAAAAElFTkSuQmCC",
    WC = "/assets/png/1-e22b9592.png",
    YC = "/assets/png/2-087e2f87.png",
    xC = "/assets/png/3-ceef5268.png",
    HC = "/assets/png/4-ffed261d.png",
    KC = "/assets/png/5-0303b9b0.png",
    XC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK6SURBVHgB7ZlNaxNBGMf/s3mxRSy1HuJBYXuJRLBBBKmIKHjyZELVqx/B5hOYfILqJzBHwUDWu4d67EGoeEhjxWwxBSM0jWnzApvsOBPZkE2T3baZ3WxgfxD2ZWaT55+Z53l2ngF8fHx8pgkZ11DKJxY1DQkE9DggLcIFqI49QqFEXyjbp31mpIBiLpFgX/eOnbpi+DCEINuVSCaWVFTbvsM3vucTr2iXvsG0IVDDErm9nFRqVt2kwYtCPiEz49PwAhSypuuv7bqZBJAu1jGlaTMKSsk690WrPtLQRRweQ9NZILHAJICCypgxJMw4My8gCBfQtA6OqnUc/Kmi2Wie6dm/B/WXG2vhh8yjvyIcUFLv2+pguykPFHNPS+wgQxDccHWnhNLOHjosrQtARSCUTH1o9DO1YyPQbLSw9WkLLXYUiIyulmfHZeOGIz7gkPEG8sazuUfGhSMCfnzbdcr4/+hd2TgVLqBaqaL8cx9uIVxAuVS27RMMhyAK4U5cPzwa2xa5FkH83gqCoSBKRRWFLwVMivARqB/Wx7bdvBPrGc9ZviFjKbKESXE1E4dC5qkTEjCVhAuwmt+7LDoZ8FBb+VXBxL8HwSxcvtSLRKPg856/TnCax2LCrPARkKOyZTv3Ef4R9GohXsDV6xE2CgtwC0eceGX1ltBYfwIpoPZP4QB8BFYf33VKRA2duf7bqGNhlIt48OQ+i/VXIBaSSSm1fqnF0QXN/MX53kjwqPR7v2KZpcfRbrbV1nFTZSv2GiXS21SuvTnY7sqKjGfc82ZdQkgmuqZkx7X7i/pp43kBlOL0tVEK8hEeQw/AstRuFsBq8/AURLErsZsExJ4rmzolGXgBVl5n/37KrtsJH2Ai0lMXwYwnEkmea4PDgO8VSF2kWYc4K/q6U3InZJsCny9IyNptbPj4+Ph4g3/kEPCAVAThLgAAAABJRU5ErkJggg==",
    JC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALRSURBVHgB7ZnRThNBFIb/md1uadEixYJGgUIaERMwxkRISLzhnpgYvNU3UJ9AfALlDfTWSGJ4CBMS44VcaIQLokElWmxrKd12d8czu2q0LQKZibvE/TaTNmfOtuc/c2Y60wViYv5vWCfj2tLcPU+wO/T2BKJBiTHx6Nz15butHW0C3i7NPRBB8NFDiPtj88sLv5t4uw+7hajC2O1WE+/gFpWy6URbbBxHnFhA2MQCwiYWEDZHXoAJ3bzbhVivQqxVgUoTgkwslwTv7wJm+oAevV+p79NsD87zL3BeFuEwz29eQnYI8JINY7sK8/U2rEtZGDM5IKln8LUIEBR8/ckG6sUd2JYD23DhSgH+VlGACQZTcFguR/LVFlKbVXTdGAHTIEKLgN2VTyiXythNNlGn4BvcgcMFPL+A5ERjMDwSQK3LNWGXHfSsbCF99TRUURbgVBoorn5E1WqgZjpoGA6afvYFBAsEMLq4HAUSYLvU7ybgrH6AOXoc1tljUEFZQOnFJiqWjR2zgTp30TQ8v3yEfyE4cYhgFDhnwfzg5EPG7o1tZMMWUP5a8YOvGTL7rp/5n6XzCxIhbVKEZ5IwN+gvvv+MLIaggvoIUO3XTdcPPsj83vhlRa82jZQsq2+1GlRRFiBXnOaPzIsD+EsvuTo1mUsT3oEqyuuYkbEo8x3K5i/Iye3SKpXsS0MVZQG9QycPFbxEest70n1qE1iiLCA3mNvjz5l9oHvyF0ehivoIDGQxPDaMw5IfyyPVnYIqWjYkhYkCMr2ZA/tnshkUJgvQgRYBCSuBqdkrflb3I38+j+nZKZgJPftIbbtRKeLC5XGMUIBrq+uo0A+cbJJUdxoDg/04dWYAWSo5nWg/D8i6npyewL8iPlKGTSwgbGIBYRMLCJtOAkqILm2xtQsQbBERhU5zj1ttHXfyb55ee8ggbiJCj1npse/i+PyzBcTExPzBd1ux+bstNwrNAAAAAElFTkSuQmCC",
    zC = "/assets/png/weal5-1d8bca4e.png",
    jC = "/assets/png/AG-1e17daa1.png",
    ZC = "/assets/png/AG-1e17daa1.png",
    qC = "/assets/svg/ArPayBackground-8c36eecc.svg",
    $C = "/assets/svg/Ar_Gift-f96ba611.svg",
    e4 = "/assets/png/BetSoft-39ad6d6f.png",
    t4 = "/assets/png/CMD-0632ea58.png",
    s4 = "/assets/png/CQ9-933ada58.png",
    n4 = "/assets/png/Card365-799716a5.png",
    a4 = "/assets/png/DG-8a07afaa.png",
    A4 = "/assets/png/EVOPlay-bf09a193.png",
    o4 = "/assets/png/EVOPlay-bf09a193.png",
    i4 = "/assets/png/EVOPlay-bf09a193.png",
    l4 = "/assets/png/HB-1f528af7.png",
    g4 = "/assets/png/Hacksaw-c9c0cfcf.png",
    c4 = "/assets/png/IM-e5e8d0d8.png",
    r4 = "/assets/png/JDB-769297f7.png",
    d4 = "/assets/png/JILI-1c731760.png",
    p4 = "/assets/png/Joker-be3d30f1.png",
    _4 = "/assets/png/Lottery-7a9a2b0d.png",
    u4 = "/assets/png/MG-44119fda.png",
    m4 = "/assets/png/PG-fccd6ef7.png",
    v4 = "/assets/png/PP-3bf8f4d1.png",
    h4 = "/assets/png/SEXY_Video-b545ebf2.png",
    w4 = "/assets/png/SaBa-8cbeb534.png",
    b4 = "/assets/png/TB-2c2aeee6.png",
    C4 = "/assets/png/TB-2c2aeee6.png",
    B4 = "/assets/png/V8Card-ab033a5a.png",
    y4 = "/assets/png/WM_Video-3e7fa9f9.png",
    E4 = "/assets/png/Wickets9-971c099d.png",
    f4 = "/assets/png/YGG-3d54a2b6.png",
    R4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAoCAYAAAB5ADPdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOJSURBVHgB5Vg9bNNAFH7v4iRKUBfSdkCtYMqGVOjULgxlqdSO7Rxlg5WtYkRsEVsRS5S2G2uRusBclkhIsDQLIKJWqghLoFFD4sf34vy4rp0fpU4r8UmXO/vu4s/f+7nzMXnwJ5u9E6vX79nR6F227SkKAcaY84bIr7htH5FlnXA+X3X3c6chq6vxxszMQ2G+TxOEIapGRIq8u1siNykl1JydXbOJUnR9KMZ2doraMPqjCl0zIcWiuo42jGSzU5M2WRDizeYjrU3DthfphgDWmlK1jC1y3Wa7AEbkWxzgS8w8h2qBxgXzodh2ZdjhUcuKWX4dNnMyQvSUrsD5RURf7MUoc4zfTeSNBF1RNMISSRoRvkoJUQVs9xGVD8ghOA6pfRltij8pBQLgHWkZE6MSUhi6gfi/ScGM69geZIYZG+hTyFObqFZoMCoYnBuUi/B/aRZJg1yBBsBXqXZCHYaQIgVC/ZMs8p5vOwC+SjWZaxFVYMhcBRWOkCQvdxiTRgSv4yXT3bFEr8SYw1aqCFDXl5QROUOVw+T5QXkKhCr487IPoQWY64nvHJElVGk2xtfsgT6lCZSGWLN8FXIevNm74DLGvYevJDD6MTkWSOFeBnVuaFLjgB2zuU2/jeuK7fSV0X7WGge1sM5O4wV+uueHkhLEsx1ymwjtkrsP5r/tnR+OUiJlPK13Q5Vzk2He6rZFat754ShF9IOc6O2QzIDIUrcfynUKOUEVPqk2tlE6D0xBtwxM9VKzOvyqb6oJjZSoCUV0c/fJdTul6QDlOfVJzqH4VJeYmlDkdXtrrSSW2/eTuoy108kH77yJLMiqGsoOGluas7oPZ17zW3ZCIQUV1lxlrksOyjVFcq7rJHxtQikBkQZlplsPdkK+p45GmytdiCrlWRXCSp4lF8EVT7RdcHD2SQnhODq+9cBsuX2VIo02+BI7qrjNWSKNUg/CUQrZm53NXEeFZGv74iIEVECy4DffwvakGsbhGL6GdM9UgkIrUGS+vac6U3WgxBEW549Yei6ZDqavWqbZ/BbWqUs7T71tXTC/EXV45C27z5y/kciJqVvWd7ohgEq/b+Xzx0Z/EAGfKWxgZxDkQx2oybVuObpVqxXFtaqHge6uIBjFxN7eV230DmI3NmKNRGJx4qd6zHUIUowXCl1rsXeMHjfq6Z4epnFY56AgYushishx9PT0Cx8cnLu7/wGEeY/4EB0cGQAAAABJRU5ErkJggg==",
    S4 = "/assets/png/ar2-3da2c295.png",
    I4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA+CAYAAABk4ziNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM6SURBVHgB7ZqBbRoxFIbfIyA1haqMwAaFCUI2CBtAM0DCBNAJSAYg10yQMkHpBGEENihSSVWJwOtvQ9QI7sD2GWqR+6RIl+PO5//8/Pz7bJZ+qUtHBMtdUeiIyNGRkQkKnUxQ6ORJ+MvG2ZyckVA99g6mIS34Bx0Ch3rk+XLaXT+pxyaWemxBKCTunn3gUo+sD4VOJih0MkGhkydbWDpw6B06CPYTgSzkQuetCJIJBU98HWMF8eXTTaxpDQXUTdcxBt56X1Sqk0iEwwqFwYSYG9yaDpMu2CpIIdG7CtHJAzJolf4nzEOMMi1uTcZbLyNDVlb+QOPPOnzLn6fXRleSBRIVm2ipHg7LdBgQYjm0yq9vpjdYCVLoEJST77T/fjUiLjR2hdg61oJekLsSsoxc0V7gW+J8F2Kshw9nQQrpF69RgupXvkJwgpBOTMkmpBKk8BiCY9QGIfY0ohSktj7c+oOKFGo4vCd37lUZacXo+pBHnFK7UDtNiK3j15zm5j/Jlpx8JI94aSGJykgKsx7edpNcYPpKVGi7ZLXNolKCwbYKIQ/kJSkUzm3HnXVShZxEp1cQ42uQRbacPUr/1MjiJOHUQqsQ60CM2cO1sZSyscFlukHGa5MDrtZHhZih+/5nLC2zoFMIWoWcRB8uIOaRzMQoY9l47ZL1x3Wmlv5tN6sQhCG2wHz6EBV7xiG2w1hauwsW+LrfRjNo0wlelLhOs1mksbG0MriMl0S73bfJFFz1FxPz6WQsLQ0u+hW3nKbgEr1HFuMumZHKWPoMwdikoN+auZjUxtLa4KJuuo4xJHzb5rLRd2WPxnLV55pI7WOz1M6xIerqFFSI1Xy65BdWqb2mn+GAi6CRr7lLErpsnp/rlW5L7AUJD3y44l3ofuWwfSBbfQidTFDo2K+xGqJnsgv4vxx9wr91PayxjNDRBzg32leW9CJoOeF7hgCpLjccsRJQ1sbq9fgsXMG5C3UOC88TbTgXBIE82ubPbHAStBQwr+PoDH/4pjBT86OVAOMZSVk7eFatJ0rgcocVsWq5AaoGsc9kC8fuCt62rWs5OTvc6kPSsxK2l2W7gkMnExQ6maDQyQe9wcKBv2xTXAIYQ6N0AAAAAElFTkSuQmCC",
    U4 = "/assets/png/ar_success-c7e602bd.png",
    G4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAANlBMVEUAAABlZWVnZ2dlZWVmZmZgYGBlZWVkZGRgYGBmZmZoaGhmZmZmZmZlZWVkZGRmZmZwcHBmZmYn3H9lAAAAEXRSTlMAYJ/v3xC/QCCAIK+QcFDPEFwncHAAAADVSURBVFjD7dY7EsMgDEVRia//ydv/ZhOlyYxHChq7SaHTAhdsGiio6sEjvZJpanDIs7k+w+dhHKLASz8Dy1BLA6tsk9UjbAASDVX50E6KBIBJoc2LwGnesSVRft0iT2ZgKvDIux6Q9U67HljhlasWmGQo8cie5QhaoMufo7FZ9tEC/BkY4whEIAIRiMB/BhqAfinQWCS8LZcCXyvdC5TlVkDWXwuUJLaDxNVbEBE46crb23ocbubbu6xpoMF8hc7wKqSqD/jkhQxzhkNbyPTsPHI8KWheb7c1z9Bcc9kAAAAASUVORK5CYII=",
    D4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAANlBMVEUAAAD/cHD/cHD/cHD/cXL/cXL/cXL/cHD/cXL/cXP/cHH/cHL/cnL/cXL/cHL/cHD/cHP/cXIabTjwAAAAEXRSTlMAECBA35/vML/PkGCPr3BwUEXfeIsAAAEBSURBVDjLtZThjoQgDIRbbEEQvJv3f9lLXNe5FUj8s/1jqt+UScMo3yndPEcgZt90goQawfIwmlIBrHtSEV32FUDVbowBJfzrHbDbsGSw1Mks3V74e7i+9do+ZqmhXTxweXEYfVWwWYCFYlSKEWQESeIXh8sYkoJyDiXeQQHxZWTDKjNIVmznafsc+jmtZCxzKCEfzwidQ4p4PAGZQwI8gp4fl5F6iG3uVsDVcgVcJiuoDJapkVrW/eIUVL7+jbawczhxWs+AyegSFZjSBC2qoQgb+CVu7RK3l5hBaNol0W+hSvYsZZ/JDhWUcXg5Yr6oiKYj5kVHi3OwYglPfj1fqT/iPw2tBKd4UAAAAABJRU5ErkJggg==",
    L4 = "/assets/png/C2Chelp-f5be328c.png",
    M4 = "/assets/png/hicon14-c2c6ca62.png",
    k4 = "/assets/png/appeal-6e70b57c.png",
    T4 = "/assets/png/1_a-c3c7a041.png",
    Q4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAPFBMVEUAAAD/cHL/cHL/cXL/cHD/cXL/cHD/cXP/cnL/cXH/cXP/cHL/cHD/cHD/cHH/cHL/cHH/cXH/cXH/cXKK0DjkAAAAE3RSTlMAYIDvIN8Qv5+Qz69AMKCfcL9fnO5FFAAAAO5JREFUWMPt191uwyAMBWA75idAm6Y77/+uq1pNLmNaqctVxHcdHTkkgROapiMJnIr36CL5mthRyxW8bW2CzgIDOf+aRWAi9TwrjK7VMDALpBhme3VPZhdSEWaZlIeZJyUwE1L4wNFjBi3xMub1CwVGMdCzE5ucaPrH+CV2EUY5jNn91rnfzJiDxiR+2HDjd362dcewfvK3lEC11BkjVT1YmprZcU619SA1PRMt+auYfNGP/d4Pa+uLYpJ1+1geyv2SpRJfdchtzKm5w4xJBZg5GtEhL4PK/shfD+UMTys6ajlOMXcO5X1JHGiaDuQbHyixF2zKTCYAAAAASUVORK5CYII=",
    V4 = "/assets/png/bank_card_active-d8f133c8.png",
    O4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJCSURBVHgB7ZuNTcMwEIVfEAMwQtgANkg3gA3KBIyAmACYgG4AGzRMQDdImIBucNzJbktb94eSxlf7PumpVSw3zjvbl9gpYBiGYRiGYSRDgQ4hogv+GLKmrLooihbGwaj3kxtYsh5Y37SgYb1KGYw/od5PbkTFGtNupMEVjK2o9lOmH9Zwzwau0khdGHPU++kb+EDL08+hNKx7yjgNqPeT3PTz1FEDQ7xSRh1AvZ+0f77pijElnAbU+0ku3zQUj4Z1g0Q4GT+p3165iTEiwOe9oY7TDin18zzQ1hfWB0sWD+7RLyPWF+sdPUNuVLyxWv4+6HCxRKWfW1fuyOWIEv3QstkjRILcKtkn3PW2rEHXK2Wa/NxryZYbfAXXY2dM+Eenvqxa+sGiqEN1Zse31YkNuWlepkX5bHGE4PvznIaftH5zUvnj5Woy2aNOtamOBvw1zdre0BEeNTX4eQZjCT/CB3AjvmSNKcF1Bgt8gByCf46EkOkQx7l5KuFy/yUSwUZ8piQ14nmK7mxEUuAOHwlhIz4A9fRYFxML/Ao5BF2wwP8il6ALFnhPTkEXLPALZEm0RAZBFyzwHg607GDdsq5zeC08qce5/+KDnwUbd+d8zpP9adkRKleKp14IlLUbju+qI2V3bP4ECXIyfpJ7ZahvhkgUbX5uG/HSM6/QL/N96dTQ5uda4Gnxf60LxOM5lQ6g1c/QzV3FekJcWrj3xVKggkI/Q49zMXtmiqj0MzTia9Yj4lIjHWqYn4ZhGIZhGMYx+QGEH+uzsJU/5gAAAABJRU5ErkJggg==",
    F4 = "/assets/png/cancel-0e9b3ff4.png",
    N4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAP1BMVEUAAAD/cnL/cnL/cnL/cXL/cHD/cXL/cXP/cHD/cID/cXL/cXP/dHT/cHj/cHL/cHT/cXP/cnL/cXP/cnL/cXK78Ng9AAAAFHRSTlMAYICf3yDvUBAQMJBAIHBAv3DPsA52an0AAAKfSURBVHja7ZzbcuMgDEBlkAHfXVf//607JEuy3Qbc1FTWNDpvNZ7pwQgsRBJQFEV5dVrf/DhjD1+gM45YQDPBDo0jNrCBIoZYMVDgjSJutT/O6ijyBlkmF1VMAAaCufQ7Hzc2NvfARB+7PkCO2DoDG3Pse5dpXGKEAxOp82PB1AIjthDCJk02FtI/VBmVeTGZacDvs9mppszk6BDYV5TZ6CBrPZlAh2mrybSSZMDRQbBizMx0kKbm1G6QDuDmyotee4DfvAJfUJkcKpNDZXKoTI7XlZlTVYCLobC99ZnEo6kCfCamAj4jE+hxVYCq8KCT8XIHGdb4aCYumQmLVY8+1SA5ZEZMuXGx2ImD+QBVwXxgwP1ypyVWrKBCsIEdWktMrD3sE/z8XMzgEsDjczEz+wDfYs8lXLqAz07t+jL3NXQRIZNG92wZN/gWHuCRXQaX/CRAZhkDBRZWGbdAicAos38SxCnjoYxnlDFQpmMMYAxllZFzajeQGC1mbmOT6f7NOE6Web+7nC+TRmkiATJjSlIlyKSQ2STI3BpUJjNMKEEmvSQHCTKpjNFKkLGpZRYg4yS9DshAorXuVJnCp156b5FZplz6a5Bbhsa9SoaYhLx3rDL7NoI2cZ5RZv/jkAP/xh+tz4xWcCwyhYTC2QkS5mSZiLk/mvNl7gcT7wJkKI3ULEFmSGuNBBlMQSNB5va3yvx32yZpmGwqMUqQaVOSJUDGCFr0bi4Tnf6iXCDRMMrgslNjRD4ZvKrISK58vC4l7YyXxSTkHZQYebcqIwjaxGGXfyz821v0j79NN7hzD0y7dJuE09u/8eNFyFzjp5NxyE7oLydMMmSuqIzKqIzKqMwvl1mpAhvUoaEKNFAJQ0dxs5wfZ/ABFEVRFOWL/AGJsLqvHR1nGQAAAABJRU5ErkJggg==",
    P4 = "/assets/png/cip-7e500e5e.png",
    W4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAPFBMVEUAAABoaGhoaGhmZmZnZ2dmZmZmZmZwcHBmZmZnZ2doaGhnZ2dmZmZmZmZmZmZpaWlmZmZgYGBnZ2dmZmbTzN1eAAAAE3RSTlMAXyDvv3DfEK+fQN+AUM8wkBDPjWztQAAAAuRJREFUaN7tWduu4yAM5H4LNO3p///rbkO1PNhh4BBVWql+aomZwWMSLhZf+9rHTMkcjXPPv6adCbnsF4J7G/STmA5SXYNunqdmljlS1M++RbUCb5og5i6LOsD8nuzd6HUKFf4pYZmU7tasUdj3GLfsz6fW9qbI88M378Gnvl95+zk1P/wKDy3VKLSdwb/XPnLMW26TMvkadvDDesapDurGh4wlvakhfHfMncmkqW001f4Y/w/rieO+YZXCge/FtD0OBoPcMsCHDHeQLISPGWxXSI3yizOte90dcIAMup+GDELEZrsI6vj0iiULPQ0iTgBO9Euk0AlAikWTL5R0HoBYNnOWZ8VRF+1Kd7z0eToLIXLMjqhG9NBcCPEkADJaTfJC9N4EE4L2rPPGtTYG/iGVcGPfBVOBMAN+lN9iU4UUgBmkfrweeOpeWTEQFs8wGoXWhqFoI/0iBWa67AIwDOKLvc1e0oQZaAM1TRJaWgowA8XHUzK31RQwtD9gZ5i5HGOG9hN5RxJTEgMMGJ9X3LVJBBgAfnttHUm7FyMMLD4mePUSyCTGp3i0ATNI8b8STEpEZpFaSTL9YGtAsDRNdzKLDFn7ll60RF60CPrgTwVdED77sZPLn2uguLp+wdk/sGR+dNG3V29bJNgszW+86CaOsmYAM0FtWN0caS0UBDO42sodrhLxxdt3zQ5KDR5AND6AbJ0DCD76lE3z+O154XAUOL2tmDs9bKfrjrGqc0r3a/iqBtC5yghrBJEGQK8yFsyC+01zxXXOhhycWkgAGqAFV4fowhJLfAcMED8jNwMYAH4YvDq8/fJi9scvXBIvXUivX47PXEg/wmRlxtcOZjxzuZZNRgsU+nC//6LE4tJoLYxKilNdwy4QvvpxemKZqlCnfX12TzB8UJkZLNQFMHxIUUuNNu3+aFVFtlIjqoVhir7pmJYr1b1yr/XXVMP5gjVBX7G95GDcweOciVkq8bWvfcr+APQTXgFY+Cs5AAAAAElFTkSuQmCC",
    Y4 = "/assets/png/close-32ada670.png",
    x4 = "/assets/png/coin-8fd63dfb.png",
    H4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC",
    K4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEUAAACvsMetr8Wqr8KusMausMarr8OvsMevsMavscelr8WusMausMausMasr8ausMY46WCNAAAAD3RSTlMAn2Ag75BAv69/EN/Pv1Dhl63OAAAAc0lEQVQoz2MgDqwUhAJRA4jA+f8w4Azms/1WggKNr2ABpo9AAsHCFEhS/A5Wr2cAEWCHm/gTIqDvCLVT4v8CsIC8Alg7mDWMBApFPqEK/P9/AVVASI0BzQwGrALxTbBI2J8AFjCBh+kfiELmQFhEziIu4gFZQkr21tMcBQAAAABJRU5ErkJggg==",
    X4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
    J4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHSSURBVHgB7dhBTsJAFAbgf2pjQuKCI2gCGBZGjgBLXWAJYeNGb6CeADyBcAPYuFFSZKFLuYEmLlRqokdgYzAx9DkFMYQWkE7LdDFf0kzbadJ5M/Oa5gGKoigysf88ZF0ZWWJUJiDDL+MQwF/YAWONVLFVRwAWBmA1jbJNVEHQCI/rOsttFVo9CNDndXZNI2MPRoMnUI3WtGq60PqAT++mEf+yYWigMr/MfA/I5G0OAuauwGvzwOQjN/gKnKdL7QoC8mwam9qAHvhp3CaWS5daHfikze0lZIetrtURoOEqEqs553wGTyFAW9Af/3thwGwddadljHYhwHMLWc08T1zmzIzQFydAPR5oPVVsn013uALoNvMXNBp89PBc3J7KRc39DDtGVDF2Mn3LKweism28uMa2KIkjTwUgm46Q3d900P/sQ9T+4Z7n/dBXIIjBzxP6CozNmkFRKollW9kWmsV6svjxhuROgh9JLEv6CjiDn2yXJT2A8az7mX2H9C002joJ+KW+QrKtbAvdXt5BhLRfidhGDGEKfQVy+SzCpJJYNhWAbF4BCFWLQ+YamzuA35plFPEKeWP6nmdp8eXaqDLQESJUWuSlzhqvYlegKIqiKBN+ADtshFDZrjaMAAAAAElFTkSuQmCC",
    z4 = "/assets/png/kbz-b7b75d71.png",
    j4 = "/assets/png/kbz_icon-1ab461b7.png",
    Z4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHSSURBVHgB7dhBTsJAFAbgf2pjQuKCI2gCGBZGjgBLXWAJYeNGb6CeADyBcAPYuFFSZKFLuYEmLlRqokdgYzAx9DkFMYQWkE7LdDFf0kzbadJ5M/Oa5gGKoigysf88ZF0ZWWJUJiDDL+MQwF/YAWONVLFVRwAWBmA1jbJNVEHQCI/rOsttFVo9CNDndXZNI2MPRoMnUI3WtGq60PqAT++mEf+yYWigMr/MfA/I5G0OAuauwGvzwOQjN/gKnKdL7QoC8mwam9qAHvhp3CaWS5daHfikze0lZIetrtURoOEqEqs553wGTyFAW9Af/3thwGwddadljHYhwHMLWc08T1zmzIzQFydAPR5oPVVsn013uALoNvMXNBp89PBc3J7KRc39DDtGVDF2Mn3LKweism28uMa2KIkjTwUgm46Q3d900P/sQ9T+4Z7n/dBXIIjBzxP6CozNmkFRKollW9kWmsV6svjxhuROgh9JLEv6CjiDn2yXJT2A8az7mX2H9C002joJ+KW+QrKtbAvdXt5BhLRfidhGDGEKfQVy+SzCpJJYNhWAbF4BCFWLQ+YamzuA35plFPEKeWP6nmdp8eXaqDLQESJUWuSlzhqvYlegKIqiKBN+ADtshFDZrjaMAAAAAElFTkSuQmCC",
    q4 = "/assets/png/wave-9300da3f.png",
    $4 = "/assets/png/wave_icon-41753b97.png",
    e3 = "/assets/png/detail_upi_icon-813ff1e1.png",
    t3 = "/assets/png/eth-f22e240a.png",
    s3 = "/assets/png/ewallet-59af22d2.png",
    n3 = "/assets/png/fail-5e44a4cc.png",
    a3 = "/assets/png/gift-e5e02897.png",
    A3 = "/assets/png/google_pay-c9a23353.png",
    o3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkBAMAAAATLoWrAAAAKlBMVEUAAACHh4eIiIiJiYmAgICHh4eIiIiHh4eIiIiHh4eJiYmKioqJiYmIiIjVTkooAAAADXRSTlMAIN/vEM9goL+AfzCPsPkNAQAAAFdJREFUKM9jGOTAEVNIWQBDqFYRQ4jjEoYyltgQDGVCNzCEGHULMMSEb2EIcdsuwBDLvUaEEPfdCRjG3yTCEUJXMTykq4IuxIrp7bOYgWOMGYQiDIMeAAADHQ7/bC0mGwAAAABJRU5ErkJggg==",
    i3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAG1BMVEUAAABmZmZmZmZmZmZlZWVkZGRmZmZgYGBmZmZgb6TwAAAACHRSTlMA33CAMCCvEKzmkl0AAAB1SURBVCjPY8AEih1IQJiBgbkDBSgwMDYhK9cQYOBoQOIDeSQIMIqjC7ShCbBKGKCZ4dGEJsDU4YBmi4UoXEAC4uxGDAHCLiXBjMBmNC0sHQpohmq0oAkwNwagWZshgCZQCBcgI5AxI4oJNSqBAWuIzBfCTAwAhPdNTSRz8DQAAAAASUVORK5CYII=",
    l3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAABPCAMAAAB8gX3lAAAAQlBMVEUAAAD7XFz6W1v6Wlr6Wlr/WVn6Wlr3W1v6W1v6Wlr6Wlr6Wlr5W1v/YGD6W1v6Wlr5WVn8Wlr6Wlr6YGD/UFD6WlpTSiKhAAAAFXRSTlMAQL/fgCCgIO9gMJBwEM/PcFCvMBD8Dj+mAAABTUlEQVRYw+3VWa6DMAxAUTvzRGfvf6vvB1GK45BG6KlSez+JDkiWFWCnyW6CnpA24Ucoi0tlqwoi2qpy1M781Eepq1liL3DGGDxmo+w1xnhN7yjMYT4LDjsVKlqnbIeaFB/Vrrpr4pkddQ9U69JUXlO1kFpKk5BqKENiRlSe5AJTXcsqKU8jygwpTbxbRCyqoTyx9HxNXmQVRQQQRZXZQYSlLCnFPgXPJkkFvrKrlKBoW1qrwlR9hAHWJabqj08vaqorpE0KXgpDSv+jCiPTgCMnz3fGrlUc2ignqFNrHJ4E5SoHS0Y6LOzgPPFP8RuAs3kgqN+6bXRJ1qI7/mZLQwrUkMIhBZnETrKatKhQVpCCgIxvKIh1dIamghgqSNsdBV7XFktSz8yrCwagQ4GPamUeICjeA0t2zsQE39tNd+bYb7Qn9VPfprLqLM/gD76fzOWYcUFAAAAAAElFTkSuQmCC",
    g3 = "/assets/png/online_active-e5c995a2.png",
    c3 = "/assets/png/onlinepay-64a4dce3.png",
    r3 = "/assets/png/onlinepay2-c62a95ae.png",
    d3 = "/assets/png/onlinepay_active-fec6a8d1.png",
    p3 = "/assets/png/other_bank-17a0345c.png",
    _3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAb1BMVEUAAAAWt9sQJF4QIFsXuN0QI10Xt9sRJF0Vt9oUt94QJFwQJF0RJF4RI14QJV0RJV4QIGAWud0QJF4XuNwWuNsQJF0WttsQJF0XuNsQI1wQJVoQIFAXttwXudwSJF8Wud0VutoXuNsQJWAXuNwRJF6UrV1hAAAAI3RSTlMAgIAg32BAv2AgQL/v35/fEO/Pv6RwULBwUDAQkI+PfzDPMItdj4YAAAFeSURBVFjD7dPbboMwDIBhk0Bb0qSDQtv13C1+/2ecg8noQUKctGlT/gvcSPiTABVCob9RbKdQrnYKJs3HM2maltZaGgC39y0AzOhajcUM2pJKqQNNGhKsL4YbXc9wdb9TOFueAEeDXEKHPdbtMkHXOWk0xD0TufHBh9xWFbQpsE4feKlGW5jncmLwux2dBjHWLxrkJVgaY/QrQ+825lfMTH4q3Thtt/Eds4GDZqZq/cJQMd/OzAyg5POiYXS12jDLLkz0wry5VWaOkhrNXJAbxwichDFPjFby0p3RnkFKr9Y1w3Vk+L4EPSPrL6X6M9zKP6BwDGHDmP0jk4n1EMbAI+OSctOD0UipZ4brwUiVJKQAa0czlPErrrlGZtSK2g1iOGaSvl/qs/lr++Qds+/IZMBJg5zeQMMIcJVFUbQw9Pxux0Nc5WaSg1AoFJqkyI4uCsxPMAJHJ/4rEwr9Wl8hMNJWXI/S1AAAAABJRU5ErkJggg==",
    u3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAQlBMVEUAAABhOrlgObdgOLdhObhgOLdhOrhhOrpgObhhOrlgQK9hObpiOblgOrhgOrhgNrZhOrliOrpgQL9gObhgObhhOrl5m/PLAAAAFXRSTlMA32BAvyCf73DPEL+vkIAw748QULCWKxIhAAAB+ElEQVRYw92Y3ZarIAxGExD5F22b93/V0znOLJYtiTjlavZVV6XbjxArCgJFbQmRnqCPmytwneCipRdsUgauoCMxpDv0opAEUPUl4SX9IhOpg9mAiLPUxSoFCtsxvN5pznLjJ+TpyPeqLNTCG8aCb9EDfHFrzxQNY+GSL8R4ZEtFM3FYj28PhP9kauMDHNmozbJHpYq0XoptkD33RAzuUBhLHHG/QoTTVGbicXKcyEyp3TyaODT8gCSxyWOwEYY/nyMOVcOIYKgtyMe5U0VonuWkOonOWI0YJ9YOlYlynNAu8KRfgSe3/eOj0VrtOc0gMLfD2s81K0ChzzVUwI3QKMgjNBmmCxq1PPH0zgNa36afNQY9f6PFfwsE5I4cr1p1oqERGvqbmjElHqPxkEZoIuQRmgxqhMZBGaEpAPZzzbofYzU1a5E0DwBwvKb+EqGtqVFvbNC6l0MjaoxwMMCOSrMLIGke0hboDm9M4kikFrlXg+LGZDWdGiVvk+KppoaRqrNUgbBS6rR20cBO8OywuWdDm1QJwSyWOI09VNCRDKtRcCD3auSuuPnfaLz8ICRr+h+oZM35452skSzV469oPGMR12v+AqmSA/AoS11YByJmpg4m0/W+RAb16BcvMvfETkfDFYxKll6wkwtwneLy5PcbDKasCvD8A1L//wZdKHHUAAAAAElFTkSuQmCC",
    m3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAJFBMVEUAAAD/j4j/j4v/j4v/jYv/j4v/j4v/jov/j4r/j4n/j4//joooFaPkAAAAC3RSTlMAEH/PcL9A759QIJyrhHUAAABpSURBVBjTfckxCoMAEETRSZAUqQKp0qW3svYU1laew1tpI+zldP3oKIjTDJ+nq/06eUUff1cZMezxjGUgtKIJhEATCIGQMcn4jsNU3NTrVGodk/R1VdKj3mL8KNGUaEo0gSYQAiFjkz8Di8+Gi0MPfwwAAAAASUVORK5CYII=",
    v3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAP1BMVEUAAAD/cnL/cnL/cXL/cnL/cHn/cXP/cHL/cHT/cHP/cXP/cXL/cHL/dHT/cXP/cHL/cnP/cXL/cnL/cnL/cXLSRt+9AAAAFHRSTlMAn4DfYBC/YEAgUO+AQM8wj3B/r63+oFoAAAGZSURBVHja7drrUoMwEIbhDTmRcK57/9cqIo62NYS2qa74PX+ZybwzHUpgQwAAAAAFdNWmWHCtgTIGzjC0m+GMjrZVnKFoN8UZ1eFjjFJGSIx1POutiJhxXVlEjOZFIyKGV4hBDGIOFeN44UTE1LyoRcRQ1My6lvGgnIUgZwshaj+DGMQgBjGI+a0Ya2KQEtPy7PSEmJozfOrLx/RNZEakDK82tXSl54W+eS1P5fGKJEAMYhCDmAuISUFMCmJSEPMAe2r4UXqiK537uDha2qvnEka6EPmTo50Ml9HROX3PrFNxGROdCfyV+uGYqkSM5zKGrZ/J006OSxi3XhB72suO+im3du34XdNaWv2tPz3EIOYMYlIQk4KYFMSkICYFMXcyapOhKzq5kTzl1sqIt09CJl54GWc72yVSyLyJQjRWyvBL1lgQMYhBzDFjrBUT0znmPsiICfymGUTEiDrbyTjQjhjEHDGmkXRrt+sFETFW80wHETFE3r20VsaDUtp+BjH/OWb/2c48zxkDZQzVpppuEHNrAQAAADzuFUAonm/lUx9AAAAAAElFTkSuQmCC",
    h3 = "/assets/png/qrcode_active-ddfcec2b.png",
    w3 = "/assets/png/quickpay-a4794d89.png",
    b3 = "/assets/png/quickpay2-f8a11ddc.png",
    C3 = "/assets/png/0-6ae0fe8d.png",
    B3 = "/assets/png/1-c4fc5e42.png",
    y3 = "/assets/png/2-4468ebef.png",
    E3 = "/assets/png/0-6ae0fe8d.png",
    f3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMA359ffyAf748/EL9Pz68vbwgIlO4AAAGXSURBVFjD7ZjbbsMgDIbBQDmFpH7/l91EE1mVSTPHm7QLvquC2k/kN6fGTCZnlM0R+aHVhYrvWKfybREZXjM+iwMUY/Q4op3G7RKMOcbQumBdj/zW14jHlckVz2mlfyfuT+h6JxgTes8ySpvpRsn3j+Yb133fwEmIz4ifiSTMLyP0HjsWeryEhLZHlumHXOhQINyN5OPCYEVCMnocCwElQirRhmNhQKkQKKqRMEmFQOEPhU0gJF96vIxcWFAo7CbYK1O5MEuFZa9vN6586S0CYV9PyZR0zJ5Ma+eWsGIn4jvlRob1w5IC8UKmLa8iJ7Lt0Fu8oB0phcZ9m+GECwzhakQiNl/M5A/YwN6nAZs1C6rgp6hFJbGw3UZJZkeeEjeFUziFUygTxuRfAFKTsFKhfVAvUpNYhcJkCEtNIiuEUSBc3s+84bXnSc3rR86n1zl7VGFFahIVx5RfPvUaux+q4FkHVMKiBlQB/LoZUQFNf2LR32yUdbl+a/PEe0R38YpHSKX8OK6Kddl8Jiwefkxy8//EZPI/+AIU/cYU8JsrnwAAAABJRU5ErkJggg==",
    R3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAwCAYAAAC4wJK5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZhPUtswFMbfk2vKZBVuQJddQW+Q7LpMSDvTXcIJinuBhgvUcAJg1xk6JCy7Sm4Auy7xDfAGGpJa6pP8J05IQAr2NDPVbxPbkWJ90nufngJgsVgsFotl/UGTxv7exgl9dKAQRAiIAQgcwgYee99HAayIqYhb+qhCGSCcgssOVxFjJqK10QABu1AEAqvIYEcIUcs9DcBxm9753TUYYCSiDPzG5jYg79JI2smjkITUTYT8cxEpFKpd+via3AbAK++8fhjq9HVgTfj5Kxq+f+vISa2BzDucPMhnOn21VsJvVKvwarQL6ISm8WqK33o9gDhPQu9ivKXThz3X4FvLbQO7uwHOBxBNrmjZb/xPFMdlIfhlclX1P2zWdLo8KUImHQo4ogXL2+o2THhPrU4Z8Mnp9FpoOeFSEco1GM3+rIAYabPO/aAMIV4fZDKrhEYUOzp9lq+Ew3sgZ11BO2uCEHAWX5QnBBIRuiwU4e+5fm5TO6QRn6XffemNO7NCfvfAECn8JXk1P3GPRFDiklfjgbxGxCE5RHe+jRRCXw7VDTkJ7eQnYIJz14Mxv4nfZQa96wrY/S1NdCd9NiMicYNufIeBcHF/6a9FD00y6NhuBXTMhGR51jURMhsh0y0uE6ESmfN0ICFVlvWnijGVgNG4vpKQiDVzeaYlJB8hFAXX3sXoFOZFAItqME1krWoyFpIbkNAr070+/TbH+qyQ1wfL2vsfXTn73WRsAbjYzH8/FcEnfaosj6mR5108HIEm2YBUsqNn3C9zIuEftzbb8+1UhESYmsfCCNErO3LFGSV6oUWjmuUIaT+KzykMWYcLqmopKpDOGOSENZhGyMIJfrbsKBvvfHINjshWhATIQSpBdNZoQCYADpdFiKYIkW0+ZdRNSghjaZxXITs9xi5GK9JfZPUpeiKYM61cx8oACsf7MRrSixZYOll9VNl/qq+eiD8jKSJeDWRtKAllm4zV5czLjVYZjUzkZw5H2knqN90jWtfP6oZeFM/ceqCf2MKRSRXPCG2KpZ4pDNEWoXydNsHkdptqn8G6CDH2/LkDffx/EcAlRJWh7sG+aFbauB4JKZ6ALPWNbuOVd98F/xcVC69s6a7si0sIdUBx7muF/TOoYEG+SrVYLBaL5b/nL0VAXPfugc55AAAAAElFTkSuQmCC",
    S3 = "/assets/png/sanjiao-9752d7ef.png",
    I3 = "/assets/png/saveWallet-2bb70adc.png",
    U3 = "/assets/png/setup1-53816735.png",
    G3 = "/assets/png/setup2-666d3e9e.png",
    D3 = "/assets/png/setup2_active-bd15058f.png",
    L3 = "/assets/png/2-bd839975.png",
    M3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
    k3 = "/assets/png/3-5d3eefed.png",
    T3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    Q3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGUSURBVHgB7ZlNTsJAFIDfE0JccoSyQnZ6A04gRWStN0BOYDmB3EBYm/LjCTgCOxVM4AgsldAZp91o1Om0hOZNw/uSJm2nnfSbN20n7wEwzHGDSS5ajd3yToiOkHirDh3ICoR1tTWtpLmlaLrgfdS82Qair3ovQ9bI9INzEte4GLudQIiB2s3+4TW8+Y1VuOnatRF4GbuODKQH1Biioo1AQch7IBz5pOinkIRzyAFaAQk5F8gLLEANC1DDAtSwADUsQA0LUMMC1LAANSxADQscFJVahJQYU4vffeMskNA7LcK80pxswBISCQgpe7X21AMLMU4hRBzU2s8eWIpRIBAwBIsxTqFaezL7fe7hqhRmix04LOvuaJuqNhBijEBY3Ph7NlFdJCX79RkXgbXanI9dlCOd/Wzojj5Tj1RWxGSnMZr7BYzS7NaiFSgVQZWVYKOy1PWlf2mthFYg/FkJxG64r4p73sJvPC6f3DpYhvHNefXdO5T01Zrq9fTfZzV+hc5ak74o4IVyHarlxBwo2GONxDDHwhdCEmZUjyAjGQAAAABJRU5ErkJggg==",
    V3 = "/assets/png/hicon2-147f9796.png",
    O3 = "/assets/png/timeout-fef473aa.png",
    F3 = "/assets/png/tip-b4d09791.png",
    N3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANeSURBVHgB7ZlLctpAEIb/HpyskhQ3CDlB8AlsThD7BuQEFtiL7Ay7VMU2ygnsnCDOCYJPYOcGyglMqKzsMJ0eicfogQCBBFTxLUCaZ/c8Wj09wI71QthQuNF89B+IbqFftMn97CWV20gF2HHKIPVoJfVE0jZdXbnRsnuhio3TE1NdHivIBD2gRA26uOguUksEroxbcF1PxKoC2i5SBqPDzSaiSoxnQDLrUugaq6CkamlKsNMqQ/WlP/ogb4fhTP0OpVIVmr8nVy7tk/vlYfSqJhl0glUxGDjTsvjs7BDUvzcjGhPep9zDgCvT6oN0x35VVtNVrAx6n5TKTvMcA/0TKUuU3Jas90QFetLCVxnotp24h4LwhSe00ktRsDRIvQXzKK0rzz9kT9zI/uhFaxSiADufKqCn1hxFAwFZ/5FfGe3SLbnpBqGYGVDP5+A5yhF7/l+nUx8lhTY8q4a9gQ25K+CPPj/V5yz+e1LPF/wE3HdE+TLMCJCuS1bIQOQ/A6Xnatikp+L5Cqt/RvB6IHiIg2iF/BXgBawbQzb60/X05Ra3TgqbRWVGfnRGNk6BWcTMaBEKeFgZfBdNyV8BrW+xKphibeWuQPD15G9YHo/cq5toYjF7gLmFhPW7WBtoJyXnpACFhPV9fFbHyIo5zCSMvsFSQJymVUH8EEsyPg3jIxadieAk1pqWbZ0HBg0sO80BnmzcxOn2R5H1/nyDZbxQORilCO+Xsl/8ox2RVBB3NgtszJx2k9zeWFHHqUKpI7EsB1Z9U++X9N+d5YXu2BQiS2joCWpdRhYU7qBfdqMxHCvasSQk1uz1sX/sHKWMOwlOTfdIcJgWRDp5s293IkGqeY4z88EkClyOv8gTd5qeTUhlWeENMot9M9qtSafyESI6wLL4m3zQtZOs80BSiCNrR2FhxXy2kBPb5k7H2CmwbrZegYICWxIi2fubKXQ5K9JdTGDLBHMH2UL28hHsUueyNi1/G5ZQ6repmBlgXRPP8xBZ0IPUM3UhCgS3LrhBDuzM6LrZKbBu7E3sIfP1aoThRcUIPj09kou7D4lllepBv2rb54dFmCjAcqVD6GB5erGohOZraTvZnrNcHqi+udhwkYHxEhKf3R3GbTxkxoRCdG1oNi1SQ4uicKmLHVvKfxGoQvU9AEzPAAAAAElFTkSuQmCC",
    P3 = "/assets/png/trx-8c63cfbf.png",
    W3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAMAAAD95QUdAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAIL+fH0Df72CAzzCvcJCPUBCMFs9nAAAAkUlEQVQoz4XR3RIDEQwFYGJFsPpz3v9hm1IdsTPtueKbccRwn3jvthCOHxJ7Ch51FuCbFLyRbjKE+imRU8l3CbM569qKS0ibBOCwok1PKwy+NOdFaiRdbhOWeJmZ6hASEUbLpNZssySg2tubbqy4BN7kBDYhK+NiI54BeUvJOTNudwLGS9eQXyVxiH//1CbwlBdcCg3eaboPrQAAAABJRU5ErkJggg==",
    Y3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAeCAMAAAD95QUdAAAAP1BMVEUAAAC3t7e6urq6urq9vb23t7e6urq6urq6urq6urq6urq1tbW7u7u3t7e5ubm5ubm4uLi6urq5ubmvr6+6urqFcHChAAAAFHRSTlMAIL+fH0Df74BgzzCvYMCQcG9QEN5tRe4AAACUSURBVCjPhdHbDsIgEARQWMpyE1t1/v9bXbGY7jax8wQnYTIJbo/3zoSw/JE4UvFsswC/pOCVDCtfuY9Xpd+E/JAwm7OctbiEZCQAixZpemlh8Kk5H6RFkqNZWONpM7V9cymF8cgktunmnoCmxG1y0eISWMkYbYSsyIWUeAb6R2rOmbGuBIDNZpA/SuIQL/9UJ/CUN9oQD0oOqon+AAAAAElFTkSuQmCC",
    x3 = "/assets/png/upi_recharge-a5d50b78.png",
    H3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAD8aGj+aGj/cHD/aGj+aGj8aWn+Z2f+aGj9aGj8aGj/aGj/YGD/aGj8Zmb/cXL/cHL/cHD/cXL+aGj/cXLSSGKsAAAAE3RSTlMAQJAQ378g78+AYL8QfzDvgDDf6zcOIgAAAMhJREFUKM+tklsSgyAMRZMQXvJQi/tfazu1CBqc6Yf5Ae8xF0ICTwWmwKXYQHkEg/VoABQSB7xARdxJE5PqqXHn70jOdLnO17zpt/Gu/U9Ud6VIDVlJHI/LhAkkBtT7mhlGGCx2p0js/e6NAvfuVo2x4V2CMYbyD2YzxtF+F317tVbA9c1bwWhhGJzh4m7m13oYadGSZduW2mRG0Tzc5rVpNaJLNaf6JKfuh0mRM+fh4q4kbKPYHoEJP6LBZDWCjEzalsLaIzwUbwexBgd/nj2BAAAAAElFTkSuQmCC",
    K3 = "/assets/png/usdt-40311708.png",
    X3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMAn2CAIN+/QPCQEDBwUM+Prx9vaviGVAAAA09JREFUeNrtnN1yozAMhY8d/2EDSVfv/67bbCalbpopUBnOtny3nXFcSUeSQQYHBwcHBwcNcGezOWe3YH9edsDP32Enu9BhLkZ2wWAuveyCBbePDRYQbcUoDQi2ouCRfX3eQ48oDYjQI8sEvoVMZCgyKq3rpnVGqFHL+kUpVjpoYqeFByW1DdDEKYkvTOs4qOKrfLqaJHc8dDEqK8eqbqhiVVRiqsJLGIS+UQjWawesZZBWIVhnwoKVXJqFYP3fn74XJnUWbFGO02kdl6oQqxNEkQB9Tqy9YJOesKABSdTwaEGnfz6i9XHEDVYfJ7TBcHtY0ccD2pATt4eBjtvDQKTW8JXEm6VvnLg9DBRRwOEjXD1XQEtsi+eoXKnQ4wEumRi0JVNL5MqF24BAJOz1awJvjrkRScvwROA2IBDJDQgEXgnfcLQ58E7HbcC1Fdk7bIbla2M+EFhTzB232MnJYVMstYNXKLnD1uRxkYIzNsd5zgwzUdJsgRTswkArkDuWfH/AkGb4V2F/LZXiC3bFhS8KnIJ+Wx7lexDgDLH5bsTw6fYieHDGS0XqmLb3j2K74OUVP5q+gI/Sm/G2wXC2dBuM5yQV3rAI5D8QyfNczWHFP0mec8IqflGpK56zmb5j57RbA5byaxpW2+IFdstDUxpNd52AConi0OT88+6gdH53pWRf7cA++L/6+5ixNecqH+evJH7GptQC8fFZEOwnZefnBFgOuz1+u8wUwLjTA0w7V6DZ7+Dk2sFx9qPYtJ2SzYJ+qt9Bye6dg5vfL2g/8B6VdaL/i2Hrl4n1D/KZMFYRSGjCsDiz2U1NWJa/Xs1pMxPWEg4rjH5BY9yaBqWXiYy2mDUv0N2GR3kv65hVkX/DeB77gKOjvaqhOSxfy4RMIs8G0fcfino2IEXo4U/HA5gG0RumwoH8Qg7/hRf2K0P0l66MvMKsYy9C7ePC+hmNh7aYtR6zX9/NokrGFcoy8v7VCWmSeUs0rEnm7akJXbP/nhcAZMe5GssdgiKGOwRFPHkIvgYhcxasgpDpZnG7TDiKOiNxIb6RObv9icjaC6qMjxZbEaQBo62IALi/MXlWKLxt6bkNKGK4P4Ep0v2cD8XCdWZzOopxzYODg4ODH8dfc04/UH4ese0AAAAASUVORK5CYII=",
    J3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAAqCAYAAAB1PO9pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMgSURBVHgB7ZvvkdowEMWfM/c9dBBfB7kOoANSQbgKIBVAKrhcBbgD7iqAqyB0gFPB0YHyFokJEDBgSxZn729mR/yzrNknraS1ABRFURRFUZTGkEC5WYwxHRYD2pq2SJIkhyfOCs+bd1kMaV9Rjpz2Qnv12fAmQ5+nLL7TRrSO+zinLWg/g/uRDXgy/ljRynaeViCDjDa/wJdTNyBLkxQ0YsBiChtmnmkZypHSxrQubK99YI9dQ9ngwnkfdoR3cR05bATI4IudnjeAB3bqm0DZCE4b095NdVa0obFTROWGbenAA8aGMeE3Wozzw5MnwY8xrdQBtrXAE8b2cOEdLcRcPn/7Ym4KonVyopEyJ0/c2wz+GFxQ55Jz1jMagnO++DNFHHLaD/r0pfBXbOjIxGeCCPC+feNjntyvc27iMz9s192Rtt7ClusLaobOkZX1jJbzdc/jXlmi1xvsfnyIeslof2DzKHvcQdmygA2LKW3uS3wXYjeOZ51L1Bfy86JtngrvkNyCiM2XEhZTeBR/5x6ZlMYmsnZ3S8ttbsMcJGb4+eLYNdvPi64pIpTwGWyIKcsSERCRQ4vvmGF/5Ms9F8auLw7n4+TYNa5dCyf6qWtOEkJ4CTGP+KDUKH5UgoV6YxM/I5RjeXb7EZA2iB9yjhfhxyhHhiMr0XNQnBXCLJ5S2E5wj4bwCUoriSG8ZJFk8eE9lLPa+8QTsKM7d1VL2UODiCF85so33Cg7q2spc1pPF3fVmdKxr6g/i3URbRBdiCF839nN0RbRBV3cOdokuhBsxLu9cNntT4yjWZISTdEC0YUQwsuBi47knj+S8yRhxHZ/gz3G3PgzgUGEp63oxCrOk6PYZbN+pYmZLaybUKG+g/2nT9fyGQ3DrSHkQYv4JT34enZqoLhsJEpcI989sjMffeClj2Xro4vTh1yKBkpa4Rq5nwofGZlGctTLycfbKnxgzL//v3k5pn4lcrJXyl9nF6xy0sPYA/qxkPPmKRqCsQc4YzM4bNd/I14WA/zhA+L0UGHdsO1ULD8Won+TDoyx0WuAuGRNT0gpiqIoiqK0mr9+ixqoo1F5YAAAAABJRU5ErkJggg==",
    z3 = "/assets/png/serverIcon-5d0e82ee.png",
    j3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAAD1BMVEX///8AAACAgIC/v79AQEAmZuZrAAACzUlEQVR42u2cW26DMBREUVlBEAsggQUgdpDsf1FVpbY37eAMt7GVfpz5Qtj4yJEy8n1AhxCqqf7yWKvMeXLy+gl+Oz3WJHOenDwBBgy4Cfh22dMSa+3OuX4uFUOrWVDAUyeKoeKc869N+AUBAwbcFtzLOUGGQvPHo5ueLo4tqNsK6UbP98NDaevlBQEDBvwysFrBNcDiEpXBuvWhYJCAAQP+9+Bvu5h/GMgaF23A/jwFGDDgF4J9CLMKeAsnEXAihFHpkPfO8oKAAQNuCPY5zz6R3zALJtPGuYuyAAMGXBecKeNmKix+wbxiN0NYpuSPnQADBlwXHOag0oxHGMj8xRvDQGJo7/Fttw9kcvuTybLRwuST/iqAAQNuAxYn2e5rLqOGMPtDt3u7WL5Qo0zuTG7Y1ZT8jxGKyYABA24DTrabBnj8OSTecg1sGIhxQZvjCXmnDE2AAQNuAr49ai7Vmot3m6tGN4lW9uFv8Zz55TrAgAHXBvfm/66nC7WUTZ+SO/K4qSCFqp3LAAMG3AZsgpHwBAGrgZi2VTEQccrCtgRsMspivYABA64N7s2B4SI1l1XBWnMRAylVYcoXipE7uVMYYMCAa4P7ct9pXGgZRSwlJFUYMZCQLUCFCiki68EhwIABNwFrDLLmMqU6FHIhTEijLrObuKPSoA0wYMBNwNvjTwPNiZRpKPpA5Ehj5TJDeuGNtgMMGHBlsO88N+/ZmTtiINkvkvn9HU4bAwYMuCo4+3rLUm4RWYyBXJKt7PkvoHSuOwYwYMDNwHrMUPBYLrWcykHNIuC/lKl1o95xAQMG/I/AYSA+GVJuSMuDfSLnyJkLMGDALwWP0dqhEZAWf0PPGshguvgPvYYIGDDgRmANYTx42z1vzKYhRMAiCz4fLVIBBgy4PdgnUf2LcqpZwOMTVRgZyr8+CBgw4GpgU8Y1UYncKX5HSBdECFXUO09liq3e+WPlAAAAAElFTkSuQmCC",
    Z3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cXL/cXL/cHL/cHD/cHD/cHL/cXH/cXL/cHD/cHL/cHP/cXL/cnL/cnL/cHL/cHD/cHD/cXIYzXBpAAAAEnRSTlMA799gIF9QkM9An7+vn4BwMBBz5IC4AAAA6ElEQVRo3u3ZSQ4DIQxEUdvQ9JC57n/YZIeySItBtYhU/wIP4Q3CppT60b5ujp5isY5SoDu35vKGkay1xUEFCgarBzydR/ZZIM7nEZgFzq8rgQwEGdhBBlY2cGEDzgYgQIAAAQIECBAgQIAAAQIECPgLIMiApz7Aj5Ktry7g+rIaAXiYUYG7cYHDyEAmA4eRgcIGngPf5LF0AEO/tD4EOJqLRsAB5IFFiKdGYGMPeQWwMoEdgL+IgAWAKxNI+PTgAHXMuJOAuiS6ZRJQtzi38iQBVhzT2Wk5SEAtTRLRsu69+MwbSSn11Rtd2SGJVmfiHAAAAABJRU5ErkJggg==",
    q3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABWCAMAAACn+gtUAAAAPFBMVEUAAAD/cXL/cHL/cHL/cHD/cHD/cXL/cHL/cnL/cHL/cHD/cHD/cXP/cHL/cHH/cHP/cHH/cXH/cHD/cXJKVK13AAAAE3RSTlMA35+AIDDvv4BgEEDPr5BQcLBgJSC3QwAAAWRJREFUWMPV1stugzAUBuFjMFBugZb3f9euKkKJ8jXQtMosvfiFRyPh2NKm+4whiuU+RYiEhTZAtYAcoMVACjG+gIbq/zW8h6h/V8OYq/FRDfNyRb1+1OMa1js3ZzS0+2+YA/S7O/cHNax3LpetGdE8QcPy1xrKp2toQixP19C/gIZOGpryNu1tDXk9IV8Ll42G9YS83dRQ7E48sNfQPTYQ0zENRcQ5DUOsDEc0pC7ilIaUI6DBA6c01JsBafBvPC/XTD/R8BEbpp3ISSXdfQMOObrkgb2GlbqpPXBHgynw+CGDnsJumW9ApwgNHrAGt2wNbtka3PJKV3wHJZkKA2bGgBnRsklomWS0bCakaC4YMANaJh1aNj1aNiVKMg0GTH12oELLZkbLZkTLJiFFkjFgJrRsLmjZDGiZdCjJ9BgwJQZMg5ZNjZZJhZbNjBTNiAGT0DLJaNlMaNlcUJIZMWDyFAf4BJXjrTPfEIFtAAAAAElFTkSuQmCC",
    $3 = "/assets/png/thirdPartyLogo-5dc96e22.png",
    eB = "/assets/png/wallets-f7d6f3d6.png",
    tB = "/assets/png/1-bcd21d34.png",
    sB = "/assets/png/E-wallet-472b7b97.png",
    nB = "/assets/png/bankHeader-56d506ba.png",
    aB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cHL/cHL/cXH/cHD/cHD/cXL/cXL/cHD/cXP/cXL/cHL/cHL/cHL/cXH/cnL/cnL/cHD/cXJr1vXsAAAAEnRSTlMAgJ+/IEDf7xDPr3BgUJCAjzAO7iIYAAABsklEQVRo3u3Y7a6jIBCA4QGGT0Hbuf+L3ZxgouwqVaeTnE14/jUxvEVEozAMwzCIwzwpfclLZRvglpCTp3viC68Pv3h6wlxMWEdPveACRQwR4SNicQE+yfqOFKmV4NtC0U0hw/fhPuEDCEC3FSaQENK2HUDGdprwfLkmncwNSauCsAqxv8xhMfRIzFChp2qGA2/H2FzvOsbUWQRLLLaO4tbg4VXG4sN+Cv7oCmBa6jquqwCNbW78KZiTgCU2uz9H33wEtPeHchJIxKbhB54EDLHFbsARm+sGPLH5boC+YAR+ecBJ74OJ2HI3AIp/u+4HALNiyAj9AN8I/AcBq1jsp4Amplc/oIht2QW89CMzSt9NjXRglg4U6UAQDmgQDljhgAHhAAoHFpAMwDyBZKDqB3SxVUk/P91kW5oZmNv3Hofwt8wLIGzs1tvzDwL+8LA3kYJ/xQcB176NrvLhpsHO86Dq/KnmpFtPB1c1nkwgQk/aH2kqtxZNI3o6ZqBnJrYZegqxFegJnrgCdCVi0tCHxITwwUQsi/BH/eni9+dnfEK4JhSVjPM3hnYxzSXAMAzDr/YHDOQGqujM1TwAAAAASUVORK5CYII=",
    AB = "/assets/png/momo-5cf8e802.png",
    oB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD/cHL/cHL/cXL/cHD/cHD/cHD/cHP/cHL/cHL/cXL/cXL/cXH/cXL/cXH/cXL/cHD/cHP/cXKs/XxiAAAAEnRSTlMAn2DfQCAQv3CA76+Qz79/MFDC6rMjAAABwElEQVRo3u3Yy5KDIBAF0OYpr0S9//+xMwstKmVJwLYXM+VZJ9wggW6kx+PxuGbRUZ0ocXXE40pCm1GMDF/Q43KENehjVrpCo99M41aMWGiUMxjhaJTCLr3UV5ZG2W1wpT2JmPBrCp6kZMBoEuR18PRf+EX3W+3o6GHCoLd2/cPPCRek2TFOuxuPvxkMM3d8fsIMpkBNDlxpoRYDtndHOeOxdO4FiE5hQRO/zgXcIrTrDV+WWYLK0Bnco0gFpKkErbWlgYCkzmSDqrdXOD7Nxnfcx4qllTqMtYYW1cvRpYDejys64s/A1d/vrwbkdpe2Mfvz8TaqXbE9ATBBnwgTdno/adK37cDauH5LrOIdAXUC+SSZH+BOa9U9Aa9abGUC8rbrRALqUgbpgPiHZ6Ak16B2KT6JBcDXRZAJCGcdQzoEsDo5vyW0qgSzGY34YBwz4Fi5nc7TLkdPBwLtLiuAX5P7ZScb0PsOBRzvjgjwmBzsL8cI4F5AjPT9IAOyt8CCW8RWvyx8UU4yS1BF3EDTOW9kJlBZoQlUBUyx7/W45MFd5Mbn/5UCdXEZl0yOelmVMCgVS0NsiKpb1As9Ho8Hzw98IRijwEEnGAAAAABJRU5ErkJggg==",
    iB = "/assets/png/address-f2964a39.png",
    lB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZlRbsIwDIYTTrBLbIPLTJWAd3aCsRNQbsBOMPaMEBWXYYKHXYELQJZUilSgtpPYgZd+j7hu/BfXjlOlOjo6srHfFB/7dTFRGempTBzWxcyczMIY831Yv81UJrTKgAv+bEzZ/K2nTfk83M6VMOIC2oL35BAhKgAL3iMtQkxASPAeSREiAmKC90iJYAtICd4jIYJVRqngjTJf9hn9QPaz0SW3xCYLoIK3tnl/tJ2+jqqJDXQOX8cTkZRCIcEPxtsL+25VlDZlwEBT0ylagNsauO4K2duC91AitNbvL8NqqSKITqGzUk+gDQneMRhXJZZOJxVPtID+sFq0BUEF74FE1P6RT9+RXEab6RAavKR/MH+bAkyZnX0fflfFFLK79wXbTlP+2Noe9B/w1SalQjQrFcef8tUhAcQGwd1Ox6ytQ24QciPKl+sP+d4IoOq8MfqzP64WbTbKt14QqfUpa9+UUazO1zfpqSNkC6nj2DUpa98IgOp8vQBRq50N3/fg/ilrgy/xdduPqdVtWwaOP+arQ270iEbFWfsCrJmENKodYqf82Y0MQ6pRpfp7xOaBeza6JqLzALfRYT0GQngewMdDcoZGegyE2DzggUQEjaGPmgfaaKZTygwdCutciJ5x1dImxtHmNrjn59Z59sEWJQJDYhITOVpMESE1Rood7saIkJyBRY/XQ0RID/DiHzgwETlOH7J8YuJup2PIIsBxt3OfnFDnPh0dHXz+AXz0YbErGWiMAAAAAElFTkSuQmCC",
    gB = "/assets/png/bankHeader-0a0dec4c.png",
    cB = "/assets/png/network-793add5a.png",
    rB = "/assets/png/recharge_usdt-dfbf113d.png",
    dB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAElBMVEUAAABlZWVmZmZlZWVmZmZmZmZzCPu6AAAABXRSTlMA799gX1SLAhAAAACGSURBVFjD7dfBDcAgCIVhdzBuoAuwgSNgwv6r9GSbEArtqTW+/4rf0RAS2qous/ps1GTGGtgjORsalGtmgqwB3YAUBgCwCygjeK3fUI4B5YTQqnVxqgZoHmADFA8MA5AH8NvQuvX68k3jGDT+99oFAPgQxHecAsEdp0FRyywckXPHYc9t2gGbgItTvrEpPgAAAABJRU5ErkJggg==",
    pB = "/assets/png/usdt-5ef23d21.png",
    _B = "/assets/png/usdtLogo3-ae8c09e7.png",
    uB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAM1BMVEUAAAC3u8+4vNC5vNC5vdG4vNC3us+3t8+4vNC2vM+5vNG4vM+vv8+vr8+5vNC4vNC4vNB5o5b1AAAAEHRSTlMAQN/vj59gIM+QX5AQEK+/+pPJwgAAAbpJREFUeNrt3MuSokAQRuGsKkS8/+//tMPEbCYygDCbjs7CPt8a5QjKAos0AAAAAMAHKsPUtGywRdeV7evVFg1aMZ3OFvV4akOxJVUrmi0p2hBNPlfFg5tW1Hiw6vkbey+2aFx5VRtt0W27+B4IPmk2lYelePz75M/AAdbsZIlOmpXQ5tVSvdw3b9skabRURdJk79Lsbqnukloo2BL4BoL/QzDBDsEEOwQT7BBMsEMwwQ7BBDsEf3bwTbpYonhDKZauhwb84hM6SIMdSQ8XRoK7QrBDMMEOwQQ7BBPsEEzwtmur18TgeEOVWkawb9i/u17fgWCCCSa4q90RvGzQDsPPBxftUgh+41+THS786AgmmGCC+9ndLwxuUk0MjjeMtY0JwbGGQ9+qIrh/BDsEE+wQTLBDMMEOwQR/0aHWeH/2clwc4ISWcqz11X8bDnVR+uwnZQgmmGCCCSaYYIdggh2CCXYIJtghONTQ+hgjqdCgzmKpxtCgzpukl6WqoemxpY9hs2d721OzOmaN8y2v6BG7Vzk/MEN774jnhBnavjdUfMqdof18mFk0eUqaod2mSwc31AEAAAAA3+4PU1FviV2McX8AAAAASUVORK5CYII=",
    mB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAArlBMVEUAAAD/sjH/zRj/zR//1zbuR0f/zBb/zRf/zhr/zRn/+HfuSUn/zBn/+njvSUn/zCH/+Xf/+XX/+HT/+nj/zBn/zRr/pSL/20H/2T3/1Db/zBf/30j/1zn/7mP/8Gb/3UT/9nL/9W//8mn/82z/7GDuSEj/+Xf/0zP/5lX/5FL/4Uz/6Vv/6Fj/40//613/+HT/vTT/2033kj3/xzz+yzX/rSj/sSr/0kH/sSz/rym/OY7sAAAAFnRSTlMAIsBCE+/v3IFxkZGRgYEy7+/v7rBhR1ORgAAAAh9JREFUWMPtkuly2jAQgA3hyJ2e1BKyMYGC7dbYXEn6/i/W1QqNughsI03+dPIh7SXzDSMcfPD/czXsQfTmqcv5tb+md88lHV/PzYAjXd/L4ZorD02nyw1D98u55oQb98uhDHpOl9PlFvcOl/ONn+Lp4ssZWA6XV+D70DI0vwIPnxZOfL2lnttFA6VV6vqBiL6UNouyFZ+JKDlNWSY1HA6pyB0qmgIJbJOxSnAnZowBk4GK3KGimWI6lcEs7LDChP3hMQMVuUNFz4rZIet2Rqa6PJpSkROxLYrj5xi3A1Rk8BZFcSQXFpoYw+FAT2IcmIeIKHKHiubRfC43xkguDIAa6KkeSXSkIg+IaDVfwWi1khtrALKu1AEs1aisayq6gPV2PyJ0AsOv1qSVMfiI0rdRreh3W6pRa1Gqc0pHyHrUIErboS5om63ffEUv8L0K8vqcKCOk2Tn2UiSLelEz8hft8yzbnhMVRZHBByKEGvCO9ltI50R5cZLj+WvTv5YXuYE2lKpJ1JbxS71onI81WJGGVlW96AJeqz81Ig+Cf5l48D6iH8gEtiomWE90g6VusMOEWCJnbFGIERMl1DmUoVYUevBOIiFECAFPhGyELDDgR00EgqXujkTCAyJiMGAQIApmSgOjpQ7MEl2KMCUR7ZgzOyLasCVjyyUsCTMBUYeqx83wXLEhov5mt3Rit+kT0eNPZ+4Cwl3fTdN/DD5oy19QoJEcy1l/8AAAAABJRU5ErkJggg==",
    vB = "/assets/png/1-4618686f.png",
    hB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAsCAYAAAAwwXuTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANBSURBVHgBxZndUdtAFIXPle1MMpAZlyA6yCuBzJgOkgpCKgAqACrAqQDTAR3YE8jwmBKiEvwQTzIx1kYrC2EJ/ezZXcXnwbZkSbNXn/aeu1cCj1Lfd66hcAxWSi7lw68LdCCBJ6mH1yFWvZ+w0xzLwZ4czefwrAC+FPfOYa8h+o+n6EBeCGb0fkAP1F6dUPRDMO6N4BYc0BFFPwTvd/TcC+Eu7xSdCSaZ8xh+gtPyTtH9EVU4gU+JOlEPwxCe5BSgutsdJV/v4FdDxEuXjFyQG8FAfUYXSooFXxStA0ytwaZqMZUnivYEWWNX4DKjprieAk6yCjCj95E4JUqyxyewEuVM0Y4ga+xKbpJiepb8moHTyJWiXYAK3J3t9yfr8+QSrBwp0gHSxi6YyP48Sn9ugSJPkDX2YFCk1lt9ASsHilSAtLFv0Mt37f/R2zfgZE2RI8gae5nek5YDXW9ytmFJ0ThA3thlVqaX/6NXC0q+gpMVRXOCvLE3Z8zH/hj/gaJRgDbGnmXMWllT/PaWGYchQdbYBWZ+Z0MxiK+ow42O4ow9koPFxOTAlKLgDJzCzIuN1BqghbFT1Up2MyIwIm54O0HO2CP8HdyClRLW/EN1/8aotdEYIG3sAW5tGkZ2JVxwrqbD1rzQTJA1dhmwWfFZfCFu1KCqDZA29oqyrElJq3G6ScCKom5QtVCsJ8gae11ZVqEscY3wallM+R1QrGz80q14Te9gYZQosmtP8ZSZlRxtFgUJ2UnyxUyNxmZxNUHW2GMxXx2sejorh/l2ufzqrS7AmX8jxeoAKWNPiuqWsiy/rKYHlAdTKKLT5RRbwjXMxRcB8sauzOnFwVXNNYr7+RKuluKLOaizG3QCMFdEHBvW/xWfyeHvcT6Ou90LcvVQORcLAaaPiqgptqPCANNHbrDUb63Mc0GAsbxfnBV3FbY6asWbqfCYZYFythHjtNzyzwPsvBVvptnmhhwu9CMbgVGp5f9M0O0du7u0l1ZlY3J1Un5xkwaY0Rthm6qphLLl1AyMVsvr/LLp59rYQ2xLbXUsX8Ll3roOkG3F+1XUVsdaFuJpTIHnd+y8kjlmtAqxpCgWxu5TUZIp90wPthjr7B+r1nKprpWFBwAAAABJRU5ErkJggg==",
    wB = "/assets/png/3-6bb1e3bd.png",
    bB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    CB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAODSURBVHgB7ZlNUttQDICl5/CzDDdINkB29ATABcAp0G3hBIUTEE5QOAFhndA4XIBwArKD0M6QGzTbAn6qlELpTMHWs5/TLvhmMpmJleenH0tPMsAb/xYET9x2wvL9PYQQwDJZWuKVK/xz+fHyCAiGaKDPt7yIDfRq9WgIHsitwNdWuEJI+wSw4vI/RGjGBg/yKpJZgbHFLX0mgm3IQV5FMikgVreGjjksKuAD5PCKsT7/IeqDIwYc+fal/tEinXvbvMBrkaHLAa8Njjh5YNAOQ75bB4rEmO2F950TrbhagatOWDExXcJzZimKkQ3wnfaZUIeQsRw2xW9eKJsHvZdVCtychtteYz4NhKXrVrirEVUpQED7kI0hSBHLAHJtkVSdJpeqgLP1OSUS4t50gHMLm90qf+Y4pqsWcUeugZ7yj4f0GpP6EN+0w3P2wAoosEQnsyWzW61HL1pdLHr3YA/ZvKp0yZvrzW92V1Nkkhm01wkUICDfLFrVyDoYZcSerL5mECExhKTigpI4gJ0CZOWAWEkSSFSAlLEvrnY5y4iseEwlHMBS0uVkBVCnABFegCMWoauRI5vDA1r4nD8ER0ycLb3+tQ54wFr3Cq31bhqJCiDpLGuQ1sER7gOWVXIp3k1+BozOzdKNyWEPlIistrbENocC0wH0QEkQc4NTgOxsCRKbHE0hu+WvCiiQ9nDK4F5SJb6PuQ0FZRvKR4+FjW41SST1ISZAVboby3J/fGfpUs5Pf4aUbPz6NNyVa+rNw6/qniZTShPgTUVs2U+gRdpDoGNOk+I98cToLqZKluab4z+1M1Otyxv5DpNpZp5RhI+gqwOERzBhtEcNlQLTJTgE8FM5tfD07kAjp1JgnFUm6AVEbHpv6ifpBa31BbUCk/ICd3VOY0anw9zYC+h+8lTDa9e2zhouf3FSQLxgLao7L1eyrO18nK5tRT2uzt5DiYvfkawNjmTqB2YCaHgNJV5rJjANyEAmBcahZFAmED6y0nitpMlDEpk7MskUPKzag5xwP53rLU2ulrK2ETUtbwAyIilzcSs6hBx4eck3aK01tdO2J+ShXdw8Uw1wk/D2ltJlBOkyxUvDy1RCmAqgztbQvOPqiyx4wpsHhMeWkT3x6jStz7POzBnnJbwqICQo4X3zgrcQekI2OMUb5fz4ux2UsXsRmy+cq1bYuG6v5UqTb/zv/AT5UXey7b27mgAAAABJRU5ErkJggg==",
    BB = "/assets/png/bank-d4c80a3f.png",
    yB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHOSURBVHgB7ZlNTgJBEIVfDcQ1nkBYSDIr8QZ4AoYY3HsDbyCcBNZKwuAF5AbiiogL8ASyFqbLLhKGYeRndt1j+ltNdw+kXrqorn4ADocj19Chhc/noB55qJFCCYbxgNFlKxztW/sjYDIIyoWIuwzUYROEufLoxm+G893pBBK8p/gVjDJsZI8IL7leUPxobfCCjk2yIzkV78BsEJR+Iv5GDjgr0HmlGS7kOd6B1Qo15ITlcpslHnJIRNvKmEsBSf6PgGIRYylTsB2JsbiNc+9BBotJH2QO0+ykkDRwyrYeKAV5mFdvw1483jxMB0GNI35DDiBF19W7cCzPcRWilfm2OSvuILMJJ8A0ToBpnADTOAGmKcIwBBrpBvKdCBdgDtLjU583KkAxd/zWsL0ZT3Q37CcsxCwNpskUWvitl3Zywk/5n9Wm7jiJwmNfYlRAlpeY8XVs3aSAcpb7NxE3jq0brUJiJE+fgrUjKPn+0W8M5FYoY7E6p/1G95RXG9/I1s50xDPkAFWgysadiHdAJqSEwXa0L3TQXo8YHViOUnSfHO8IkDKmaPcFi1hIbOlSu/c/Mvk9UIQHre6KwWUYRKf1QmfGUB+5PefKORwO+/gFd7Km8h1xvAwAAAAASUVORK5CYII=",
    EB = "/assets/png/bankHeader1-3318d52b.png",
    fB = "/assets/png/bankHeader2-8f70dbe2.png",
    RB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAS1BMVEUAAAD3WFj5WVn3WFj3WFj6WVn3WFj5WFj/UlL5Wlr4WVn6WFj/Wlr4WFj6WVn7WVn4WFj5WVn5WVn4V1f0V1f6VVX5WVn6WVn5WVlor68qAAAAGHRSTlMAIN9gQL+AnxDvcL8fkM9/sK9QUDAw74/kjY83AAACAElEQVRIx4WV2aKqMAxF03nAokza///S64XENFY4+0mavZqkNQCdognjAm+p5F6LgmvF7OpbB1D/y5kLu7qnussisEvfT9JEsjNAyM8sVmOYAVaInf/OUQZY+ruswLFUTGSAiRO/s4BioCdevZ0A1sihTGseoAPMJ/vrE0lYvAFU24Pl/VYMT/i80AawCgDWhAXjBaA/o/9mwAiALUeHA97NUYxSq1ffAJQmhUJa4fbbMm25Cdz2dc0PoU0Aa7ZGWy8BLsozi9eyhDlX3wMw0F1sx/IDDvnJhxpCD2R6Mng9BAyPoeod2ASgyFdERVCGUe/54r0ywG0XrE0DatjXHQ5TCwQsfcQDJmA3PtHeAh53PkLhA6CtA6hZwPM9B2g459/A2AEUsQTIkvRfADoePZAwmZwyjTU8O6BEIwez4HEGeRY0KmrvUrs6yeN4QBbT056BfftdKnLCM/1wAsABGnxwWV6D/VRte0APs38Zbg579W2K2ADggsrZigQP8lAXqgUmr8yMHWgK8L/hqb4Bv4C9iTeRFq8ZHb+A2UKUr3ZDV3JoVLC1gS0C+9upiYkWlG0BCgcM87KtpKkHLP9beNFXlgSsq5V7PCUM288+Qf4HUNLVRy73gK4sF+FbSl8AHn7J6BPArfBbChEJOAsXmkMSQCoW/pL1w2EaXbFdr/8AS5RjoNc2pTcAAAAASUVORK5CYII=",
    SB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANkSURBVHgB7VhdWtpAFL0zWp9dgn1ReMMd6AYk+YS+VldQXYFxBdYVSF+rlNgN6A6kTxbo99Ul8OxncntPYCAESMJPIf2a80Immdw5Z+bOuROIcuTIkSNHjn8YKnqj3bA+sceOXG5TlqDohZnvC5XvZ+HbOtrPI7qXzl3KIPSGro3dMxetutV4blg7Rdt98bU6hGLKCoQLOO3abhMcW/VywzwargCzpX1+CIuQ/GrS+tHc0mofnMANHInJMg9HU4hpR3v81P5qlfDCuw1ZCeYvtCb4MvaWcHhvu13ZmyVwA8dwn80J722z5qeft9a5vPhZ2ifPt9aLVnxBKwQTXxervQ3765v90fP82qR+eloApfiqUz8KSBerruOzuqQVQWb+0rhNp25deP5k8oCOD6Scdv3oCtcQwUqd01+Gr9SpzLyDa4wtYpy4/puUAGZ11r4rl2Q/2EgpSaempBNcYNl1oisTZhcr7uPvhrX96vMNhzbrNGhKASY6kIBPgUNV3Ud/Q+0v1WYllpLNitgY49UbdZo4pBIQAA4VsdmliIh4fGCTRKW0r6cXAPRttnVnWUuqFU3EQKzOrXUwySaTMJuAHiT3uQGHWqRWGI9HDNikr4KZn3lfJW7i6QSUIyJINjbsdaZaEfb4vk06NCfmWYEBojabplaEPR6pmGSTSVhIgKDrkf5hGkm1Qiz53Hg8sFdxXSZ1TQtgEQHdwPqO3Rp8u10v38BFCsc4figbz8N9ZXUOC1WpI9Kn0zgapFqh4p4tUuXnFRCQh/UFRUd8W4rOibFZzOygVkQ8Hn18D6lXvjHBFjmqDL7IWndlTvnOGHkK+zYIe8re/eCO2Cts0h+v4K440SlOm2iIEThpjWCvch9wn3UF4skD4uNymn3ABjW3YmzSen3jB8RCY56VSL8C/Yo5+LDwgtmMrZhKUQ2/SK/Y2CwfLZu9cz+aaVZithWIkk9Z7kE8kXwvfmnelUgWMIn8jOU+FeYUoROCrob8cLxABMZCM40IHRNsteSH45aMHaOZJEJPCbIe8gahozuacRV+XMC6yRtERKDC43Mz2m1UQFbIG0RXQo4tfRGDY4oe9lXXmSJPA2JjIlBMzeOxP3czRT6MUHaEb4/tAf0mhYcz9s80IJzUW7oP/Rw5cuTI8f/gD6jcYvwwHTJxAAAAAElFTkSuQmCC",
    IB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN0SURBVHgB7ZlPUhpBFMa/16SyDTcIblBXkhNILqBD1Gw1J0BPgJ5APUFwjYTBC0hOEFypmKrMEcg25fTLa0wMYWage4DBSvxVWTrY091fd79/DfDMM/83hJTcNbxyqFAi5nV5LMlP4fGfjC4R+pqorUJ0iu/9LuaEswAzcSauMVC2fskIUnRa3PLrmDHWAq5bXiEX8keniUdHC7Sit6sVP8CMUDaNvn6q7KqQv0w1eQOjYPq5aXj7mBETBdw1vVqodV3+zGM25In4+K65UcMMGHuEei2vyiGfYF4otbf8rnWGKUgUYM682W7MbuXj6OscvZnGJhKPkNJ8iflO3pA3jgFTECug1/T2jMEhA4xjGIyXkvgdYK4iS5h3kZKIDYjhlvjh7NvSZ9CZdNTRjL4sSUFWZVMm5Tn0Ac0SH3b8Dhx5EelIo2wd3ZIDU/1ajoViPoalHSnosvzqwJHIEVIsq2fJuKi6KmkDEx3BEiJaRwpibICtVkwGrE9yfytbvokhY9s8jop0TkPFdFSyeE+OONpW7UBW7TArAbYMDNYCsmyXltQCcspyxRSvYY7ECQhgg4Xv/tbyjD1ZHUkh1U5FBRCsqicTQW8lzR7X5l6jahvRxXWnqtqiAjRdwRZJs+Nye7PyvebGsWY+hCUabD/uENFAJsFEVFnn6ia3v21uVgnss1bfSeH1j9BEYXJKBBXRK6QgNuj2zr1LBpeRMXIRUC9utT+4vBPrhULCVEVGWiS27PWam07pdWLas6hdMLjsRHIcyOEAmG8QSsJlJxIFFCt+1yUZmzW2IsZGYpOMSZ7+pEVYpf43TW+fHnL7hTDOJpxu5gaFfka18ihJIpzvRgeVFri2CCFxIlLfTg9q53t40um6uFuTsA1H3oBAQcj4rBTWJtbHUpqC6UAT8hPLUOaj5Z2Lwz+vZsBtY6Muyxef+I3U1Tfn3omkJeNuRYLl7fbS74fU9YALsmJyz8TR6B5zKaCIJ+VEheGHTAQYIiJiJm8uko3rnNBVMPyQmQCDESE18mnS5G3SbxoRkIkNTMJ28gZxGKcr2xePNUimOxCHy+QNxOqv/GyhAowrdpn8gJGSd6ECTMIY652SIONCfX/4o4UfoUQXO8ovw49+/ES4bniHSslVzUOKEkjg65L5Bge4ksux4GUOnaWKv5D65Jl/mp/hg4XhQVStjAAAAABJRU5ErkJggg==",
    UB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALJSURBVHgB7ZlNbhpBEIVf9dh4S24AmyjekRMYLhCNFXlt5wS2TxA4QZwThHWsiOEEcIOws0QW5gZhG2C6Uo1BshJmYKobY9l8EgI0TE29ruqfKoA9e143hIDcd+LyH4sLYj6RrzV5VeYXGAN50oiIum8/Jm0EJJiAYSe+5JSb8rGM/CeOCNQKJcRbgBv1acodBuooRlKK6FP1NBnDAwNPJin3FM474smMe24A4IGXgOGPD1/wkOs6CLWptZ/hgTqFJOdrkvM/EQDL1Dg+S/pQoI4AW/YaucdEpLelioDLW8n93wiITOg3mgmtisAkVU3ardhUCWBabFABYdbZVAkgC6+lb6VN6GzqImDgtfmstAmdTV0EGCMEhkhnUyWgFKGPwNhIDnwKVALccicHsj4CIfnfPz5NRlCg3shSRguBSJnUttQC3NbPoK/wRGqEtvYY4fA6zB1FaEr4Vbm7YHBocA0PvAS4uXAYUUMjws0hOT40fOuBYBXZ3W3cNIbPsX5HHbPk/Luz5AYBCFKRuXc3kneduAKLesQ4Z7CrE5a7q1u1BpbQPTJou98+vg8eqAU4ZyNrL2U0L8TKuEid++s2rlvD31y0ZANrp4Za2mW0sIB5DSxVlDh+tcKaFOyckDXdgwMMlqPr7pnNpHIz9sQ+3PffuYeIbw6NaRWNSCEBbtSN5R44/Gl04c3IGqnOCkRj41XIlZBbdd4htt0zht/jjevsjSKw9ZH/lwKRWCtgXj5aKd6fyvklIqJk6P26ObE2heZtj6d23iHP3KTlkhuBeeqkfI8dYiOq5qVSbgSigK0TLZTaq9zrWRe20TpRMpYzUzVrLmRGYGoR43lQzvMlJ4XmPf7nQqYv2QLYo2kbGGbO9CVTAGMHS2c2lawLeatQ8OaVB5m+eP/BsWtetIDg7UM1OV27TAGW6BoUvoWoYGyh7xvt2fPS+QtLghxaZCisigAAAABJRU5ErkJggg==",
    GB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEHSURBVHgB7ZlbDsFAFIbPwQIsgRdiMy4Rz+wAK1ArwA54J8Rm3B5Ygg1wFImEMCXoX/J/L73MaTtfezqTzBEh5C00KGA1yrf2pg1/NynhslW1fqY8bbqCnALLUb5j587jMGtnK1PvUXPCfa3Wjtt9XNO50mQjITIbF1Oxna1Fte4feo/iYgH3OaVN2J2/eaYzdYMEIg8F0FAADQXQUAANBdBQAA0F0FAADQXQUADNzwsknglaDAsmEYUphIYCaCiA5qlh9FXuLcdflss/DL/APY5v2p/8rk/uvjMX8idG8/cCW8Hj7INbwLQnYExs4GoPLHTPh8WuilUFUOj2C+y9XGXiCSHf4wAacEJuP0CkWgAAAABJRU5ErkJggg==",
    DB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAjVBMVEUAAAD8bGn/hHj/enH9d2/+c2z/eHD/cHD/f3T9bmj+c2z9bmn9amb9cWv/hXf/amj9bGj/e3L/eG/8cWv9b2r+dW78aWX8bGb8cWz8amT9enD/cGD+d2/+dm78bGf/iHr3eHD+c2z+dm7+cWv+d2/+eXD/fHL/enH9bmn9bWj+cGr/gHX/fnT9amb/g3cXRstVAAAAIXRSTlMAHx/fMH8gEO/fn+/fb18gz7+PYD/v769QUD8Qz8+/byAKho+dAAABSElEQVRIx+2P23KCMBCGE5CiWFoF6rGnkEA49v0fr7sGh85sELioV34m2cnyfy6wB/fiy5mXf/lxZuZBmJUHYWa+niEsasSZnl8SYSzf1HXTOJPzjcGZms/zvIHfROHJza+4220UnkbzOs9hIaYug9NIXmudaShYTXHj4XyWZRqXxtM42HK/h/MGhcugcCvPmleXIAAHnlivRFTYKpWqP6Qpbmxd9rtPJrylN/kgxmLECMhLHQSQig5yEfTLY3GbhBieEFIKCSce5oKYvFz51MDIMB6zGBUgKykPnCE8CaMN3iU8WfvUCIqqqCrYnPXwADoFLI9R9vAAMUKvFIhthL8py7IoO6EnXGP3yCjnVYl0Qg/H/iez8LoqWyNQY322Gfy5bVtu+SfoJ8w6Y4eC1QiZlcXOCHT2ntk5GoEaGzZAzAdmswf/xS/ShkbEiALjSQAAAABJRU5ErkJggg==",
    LB = "/assets/png/bankLogo1-e5dc8d25.png",
    MB = "/assets/png/bg1-3474c7fd.png",
    kB = "/assets/png/bg2-78c2b28b.png",
    TB = "/assets/png/1-bfa3f309.png",
    QB = "/assets/png/2-79ed5c4e.png",
    VB = "/assets/png/3-21c2fbaa.png",
    OB = "/assets/png/4-f425c40c.png",
    FB = "/assets/png/CancelW-5d1e136e.png",
    NB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAMAAACYaRRsAAAAM1BMVEUAAAC3u8+4vNC5vNC5vdG4vNC3us+3t8+4vNC2vM+5vNG4vM+vv8+vr8+5vNC4vNC4vNB5o5b1AAAAEHRSTlMAQN/vj59gIM+QX5AQEK+/+pPJwgAAAbpJREFUeNrt3MuSokAQRuGsKkS8/+//tMPEbCYygDCbjs7CPt8a5QjKAos0AAAAAMAHKsPUtGywRdeV7evVFg1aMZ3OFvV4akOxJVUrmi0p2hBNPlfFg5tW1Hiw6vkbey+2aFx5VRtt0W27+B4IPmk2lYelePz75M/AAdbsZIlOmpXQ5tVSvdw3b9skabRURdJk79Lsbqnukloo2BL4BoL/QzDBDsEEOwQT7BBMsEMwwQ7BBDsEf3bwTbpYonhDKZauhwb84hM6SIMdSQ8XRoK7QrBDMMEOwQQ7BBPsEEzwtmur18TgeEOVWkawb9i/u17fgWCCCSa4q90RvGzQDsPPBxftUgh+41+THS786AgmmGCC+9ndLwxuUk0MjjeMtY0JwbGGQ9+qIrh/BDsEE+wQTLBDMMEOwQR/0aHWeH/2clwc4ISWcqz11X8bDnVR+uwnZQgmmGCCCSaYYIdggh2CCXYIJtghONTQ+hgjqdCgzmKpxtCgzpukl6WqoemxpY9hs2d721OzOmaN8y2v6BG7Vzk/MEN774jnhBnavjdUfMqdof18mFk0eUqaod2mSwc31AEAAAAA3+4PU1FviV2McX8AAAAASUVORK5CYII=",
    PB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgB7ZntbYMwEIZfVR0gIzBCV+gGjNAN2g3CBu0GHaEjZISM4G7ACG99xYgoasD461zFj4T4AfbxYN3ZGKDRyAvJoz1GlkdiviMG6YD6DAiFy5vvUBiJ6WKPCGV+BVDCJ/4D/jlNQJsmoE0T0Oa+BewcYxiOQQIeUTffiEF7KeFDS2JtmoA21QrY2nFwZXq13JaYB0Lr/ac9uq2bqhwBK320px7TPPCMUDTmARuuvxi9HjGUFuD0IT9vJAyIpaSAe3jjQn4gBYUFTnPSSwVCCkoJcNr9mx++QypKCNjuXy+S9gkpyS3AZfdNeENqcgr4JC09ZuKtIDkFzq77M3LFzyXAZdfbrCVtlQJXSdtt3FuXgFSZPUlblcBV0g6ebeoQ4LK2F0472lUj4JW0yeOnEOCyTBi5c5mgLsDItX0KgeCffCFJ+0f735FDKBKY25gbbY27/nXj+gv9iPs2kA64/qN7TUCOQ6CAxBzQaOTlB9GrTVQVYX0fAAAAAElFTkSuQmCC",
    WB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIBSURBVHgB7ZnhUeMwEIXfaq6AdHC6Co6rIOngKAEqwDYFQBoIpgJCB1ABdIA7QFRAKvCydsggZNlRAoMFo+/frnc8u9ZKepKBRCKRGBMKDeQs0/g6VlSWq5DA3gIk4RmU+g/GoZgao0AViCvU9aUUVHkjfE7OijN5co6YkHxosZh33Q6S/JF4rxAjjJzKRWm7VCeIcIZY8eT2roC270fr9yAmkuOB7XBGQGlEjxoqIOqvv0HbhsI3xymANeLnt238tBFA0PY9Mk+24bZQs0kYxIsB6qXt8OzEjWhTjf6ZIC5WTfKhIi+RCKQ7BwqR0owMMc4BwlIkdW473xUQtZTewDgWSb3cmO4yeoD4mdqGu5HF1jZb+XFS4tuRChibXzvErsDUvZshnjmOSpa6Yb1C7blD4xMILcCA638+IdWKP1IPaFawdUwV8kLO8hJEJ/ggTguR8UYxrvtUoPjN68iY0ORfX3qD/Rg6D/RAPO17tB6BtiUmu92fqik+AbeFjD+MZpwXjzIS991HeDs7kLrj4lTuMnnLHCAtpc+wH8Y2nALqamBQ5EvjCMNoMOvtd96M/amNbXXVaF48I15JYehi8cd2dD83Y45Y8eTWKaC9/Y2xCMLcltFv7h7Wl6iUycT8O6LMliWab5slV5boe1/ALr+YmnnxZXOj3V8SiUQiel4AExucouBknx4AAAAASUVORK5CYII=",
    YB = "/assets/png/bg11-8d5da6a8.png",
    xB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7ZmBbYMwEEX/oQ6QEegG7QbZpN0gwAIhA5SyQdNNGCEblBG6QLkepFKrKrYhCjmj3JMSQexI92wfSHeAYdw2NGYSZ9kKSbIB41luU8xHS6/V/ZQ/3IUmcJ4/iWctwa8wPykmkvgGJfiNBL+Xy2sE74ih+Og/rnHnDsixSSX4EvqkvkH3DiTJFoorPxa3ANMDFoAnB3jpAsvABLQxAW1MQBsT0MYEtDEBbUxAGxPQxgS0MYEL02IiwdLiL9SAv3ZycaC6/kQkjBMg7Kh6KREhYQHGXirGJSJlRA5074iY4A7IeW/+//ZTLU5xWSb3BnqCOzA0NyLGtwMtjqvc10ibvwPnrNRceKrTOJ59oi0ixnOEulq+5HlPay6KaCWcAsPLirt8uGGUIvEm+bBGZAS7lJwVmcxS79ZI3p2MNfgUorqSDmX3CGbJCTpAhxaGYZzkGy+ZUHii/rz/AAAAAElFTkSuQmCC",
    HB = "/assets/png/c2clogo-e9e3330b.png",
    KB = "/assets/png/c2clogo_a-38a8cfbe.png",
    XB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZjREcIgDIaD1wEcoW7iCG6kG3TEdgNHwHBn78DjKNjElPP/XvqSEv40JKREAICucVsG3vuZHyPZsDjnLiWDGgGeDGEBxT0OJLSQNLWBO1HnQIA1EGBN9wKS0mjctGpJmtunANOmVUvck4YtgyORCzAOsTX/IyBUKJ9nrrSdSYHuv0DCGio6KLn94RBbAwGtcApP7yp1Jmm0DzEvfY3K6kiN8DvP4v40BYSIR/3hQV/A791CEEoGmgImzYa2OlERsDd1WhxpCdiVOi2OxAXwcnf11ImciQoI6aKdOtmRUmoi8zozdjIT4zZqDe5C1kCANT3+mSuW0YUAAOCXvADPhiBQvpzxlgAAAABJRU5ErkJggg==",
    JB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGQSURBVHgB7ZdNTsJAGIbfb0LAuBCO0CPIEoyhnIAOxoUr9ATiDeAGcgK7NzL1BGCMdClHwBt0p8Sk4zcVtGqEJuXHxD4shoZp55lvXjJT4L9DyzpcqUGpJHbOoWEhLUTBS/jcO5H1SWKBvjd65GYfqyOY6ml5LpFb1PNa3duzwSda6y5SIogaGnAKyLf5sr1UQEBYpiXQsCmrLlJyox54FcghEsXPMbbMjwqYss9nDhI1cPq4bBbbnyIhGhS8YjqOhy2RQN/zB3y7HX/UrLW5dDYSYpJd4I+69TuyUekmEnifoRlcBwThIRW6ZMLGwe3w37h3JusBlglw0OzoVo2Lpqy4SElfjVx+aGsPeYcv3d/6bT2EmUAmkAlkAplADmtGkGgpz6+Z7xqh2RcQ6vBuYwL6y/YeHUGHR/LA3ZgA77LufMYhwsmxPBzGf1+7gBk8PuPv/KUQ6iBaIz46m9NraghR8EzZF3eboZRvaQr5JYRKWB3jplMtI4nAhwR0mw+gRaSE1/5JYPdSynKAjAW8ASh4iDyASYHvAAAAAElFTkSuQmCC",
    zB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGrSURBVHgB7ZhdUsIwEMc3qTD6xhHqDfAE4g3wgZnSF/EInAA8gdyAPrV91BPIEbgB9Qa8MSJN3EBhxME2X1adyW8GutNsm/8ku9skAA67EDBkFYYDCuBDeSdZM44jMMBI6HsQdDilLzK+OWM3F2k6A03OwAAUOS3MiAO8nnbiPiHkztv5XoIm2iMqptwDmKKQrJkkpQLW/f4CCPHRvNcNAQqaoMjR1uD8ocoXR3tYmI+8222BBkcjuu712sTzql9E6TV2PkZrSRi7BQmKMBFhMIE8f5Z5pvEppg9CD1P5h2CcD8+TZCLsQzLlAHOPkNmRJ+ed7fXrfdtw3sZ/MZNz7Gu5u8WX+Hvau3ybTKsg8DFTF7CrgdrZKsM6DEU/fkOERhyfrB7ayVQ3TqhtnFDbGH3rBaI6UEoHjLEIFx2ZbJsqxiMqhGCNG4mrSptyP/BPcEJt44Taxgm1jRNqGyfUNsZCccExA7HX2WzmKm2qGK+eimOaK9U2VVyM2sYJtY0TahuZ8tR6C8Mx/CyVJ4hSQsn+LPQXKT1xxu3uAHeQPtQhhLGsmaYROGriA6mkiUPGxSz4AAAAAElFTkSuQmCC",
    jB = "/assets/png/hicon0-f77ed8cd.png",
    ZB = "/assets/png/appeal-6e70b57c.png",
    qB = "/assets/png/hicon14-c2c6ca62.png",
    $B = "/assets/png/hicon2-147f9796.png",
    ey = "/assets/png/hicon3-88832321.png",
    ty = "/assets/png/cancel-0e9b3ff4.png",
    sy = "/assets/png/hicon5-5edd50a0.png",
    ny = "/assets/png/hicon6-9e8572bd.png",
    ay = "/assets/png/hicon7-17c43b53.png",
    Ay = "/assets/png/hicon8-a0b773c0.png",
    oy = "/assets/png/1-7f0714b7.png",
    iy = "/assets/png/2-9316f0a9.png",
    ly = "/assets/png/3-b1060d1a.png",
    gy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALvSURBVHgB7VrtcdswDIV7HUAjcIN6gyobeARvEG9gbeBskG7gbKBkAicTKJ1A2QAFI7CCmFikKOjjh98dTr4zCfAREAiSArjhhkmwASUgYkaPnOQ3iSHZkmQsFh8k7/x8JXkhed5sNh+wBhCBnKQkqTENZ5IdLAVrnOTiDaokeeD/DHvJtc9ItvxfwW0lKpI9zAUeoBxEzQPLEnXtmYSDnRwDU4IM3GMbQvZ5ACV4hFR1+4aOYtYeUjwQYcN66I+wcwRNeCSmmamuvYM6GUHCujuHmcCJoVYhw++EwxZmBjapfVwkcLzWo5QoQIRZnZTNsF0jHmFhcHKxKId23HPHCqfO6XHjyUR0xFcB2ObzPawEIsQusR12zhuwMgiv5DGNz0t5I5QZsSmFwu8Kx6KDgRlhk0roHRDjs57J+pTtohgrQ5CoQhOIbcHaIfzDa5fz8wVmAqf3PTSbrjvaaL0HurzxM+9TWobcq4khnhB9XNQ89TVyi+Dk5UgKCe5ngllVpDf1Et2zk0SC+/5/4fsafQLilbp6LLo6HUNC6OgfZwKRQaW2BgnWEyQyOLRiySiSiAqtihsZGKa8l4wWCWHL4tLXyJUng9PvNTKaJFjft4v2T6/dX37mJE8wALSQvZLyO/ppDRQcwgaGLXYxcEvD29UWqFCieJ5R84TQXwajBrsbmOS1RJDRJmHEBGWhxo5xAeONqi6s2O5cw2GP7clFDSsDtlk1LhlhW3MtdnriQ3gjfucqXvoaJ667IsdjMPUcQbwrJ1gYYi2KO3jwOhtcxwHdvYgOAynA7mFyDjMD23Jk/GRie3JhZ2S281/OnrXGUiCVFmozE2dPHp4XoAmPzCOi/nERNpXFaTISwtBBuLtCxUM8nPBa75pBm83kbe4noRQPsQeO2C0yS8QZDwfx622sG4QNQbug2ozjX08b/u+EX6+n7eQsft9+xjTUTCiHkZjiEw4rv6D5dMNA9xMO9/mG3cA9w5o+4bjhhu/xDxyfG0qvtudVAAAAAElFTkSuQmCC",
    cy = "/assets/png/1-a2189950.png",
    ry = "/assets/png/1_a-c3c7a041.png",
    dy = "/assets/png/2-bd839975.png",
    py = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7Zm9TttQGIbfz85SqdDAyBTEilTuoGZpx5YrgLkdaghDN4LESIhzBcAVUEa64F5BU4m9WcpYEEVCorW/fiehakLsNOfHKaryDB58/vz6Pb/fASZMKATKS+CNjTUwtvBgoEsQH9LeXpSVWsotxxxI4QoeDKwerbxUwrCiYVjpf+MvyV85wjhgWgGSvg+nKGrnZR8qZKDuMCyDvAuMA56eoah2OWp2DxrIH5GKqYXCoZaOCIWWkC7pRxSPdhv6Qth/j6JhxNDEwJGfqmtp2a7PVAxNtIUUP04o1h0fCgNHoNaYYxQF8yEMMBOC9ACFkcYwQGsd6YXXq6fyDDITFxaA2dnsgjc3wNkZcmo9pkbjFQwowRSmbVnlg4H3jx4Bb14PL7uzA3zLWFfZO4Ahxo502l2vfpLn0kDCi+fAzEx2oQsRcPIhK6VNjb15GGLuiIK5Kb9if+B99of+pS5swwIrRzrt57mih5UbCsNZqwemddji2ddhLYSi3VjUNGEMNalet9722DuiYK6Zrfayy23UQzjAiZDOtoWTZT0xkpeTFTjCjSPoFTNKN6OmyjvsxKfdPgqgc0Qmqsl/etozo7XVyq2OAd1x5RZnjvRRKokQX1Y+Lv95qaIg3hNJbKMAnDrCYa0M72pLFrfhA5i8COnjbZPtem6VcASH78SFH0ejL45qsE8tuxLjrmtpiVBIXvp+2nHRAU6ESFSyYbZNkTLetZNopv1ea3MzQJKewgbfW6Zdu5nM3pEk3YctCTdgiZWQTqAbqMAaXrqryxg7R1xG65newgJjIVytqrN1Bc4QV9R4M8TcEcYqXJOwscNGs1Z38bv9giLQjML/xswR7zZAUXhXazDALPjAtHp3g9TP4mI3HDQKefEtppfyjKCJdtfKveyZmwM2q9CiXge+nt9/K+ea6Xnd7qXviO8HSDPcOJcPOjnJj2fdR8W3BkUoyihdq+1ODA30haRpkGukSTwri4TV1B7rFDEY7N4zFI92G//NZaje9bQv19PpmK6nPbmeThxcT/NGdV/iVWt4UEgwLycOlj/YU/4skZBWfwDhH8M8hqvxCRP6+AXr3BzuT3UFZwAAAABJRU5ErkJggg==",
    _y = "/assets/png/3-5d3eefed.png",
    uy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    my = "/assets/png/4-ad3ed5fc.png",
    vy = "/assets/png/4-ad3ed5fc.png",
    hy = "/assets/png/1-e146eac4.png",
    wy = "/assets/png/1-7f0714b7.png",
    by = "/assets/png/2-e4cd29e8.png",
    Cy = "/assets/png/2_a-30530371.png",
    By = "/assets/png/3-53264d1a.png",
    yy = "/assets/png/3_a-9cfda764.png",
    Ey = "/assets/png/3-5d3eefed.png",
    fy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB7Zq/b9NAFMff2Y5EJJDCQmGL6MKARCIxIBZqpJTCQstcCcrKQCUkBqhUVyAGpmZghMIfgJQJonZI2JGaf6AinaBbpDZqqto53nOSqrLP9vlnMuQz1Nb1HN83793du/cCMGXKFD8YJMRiwyj0TLPE++wxKLwInJeAKQW8FgZvYh28b+Ndh3H4BQo065X3TUiI2EIWdtbmBoOHZ2eDln47iYOaClb1x/yHFsQgshBbAId1vJ2DZGiynLZS1402RCC0EHKhY9Nax29/FdKAsc28pm7UdKMT6rEwnRcaRpGfWg0AnAOpwtosp+phrKPIdqw0jBI3rd30RRDc/sIebb8pyT4hZRESoZhoibCTOT4dFfq6zEIQKCQ7d/Kkg4tAOcjNfF2LJvaYRRD2GGgsfp18hdir03hFDOHFwVi88XStgUuZf2CCYAx0r2jA0yIoYgsmjOEGLERokco2rlJg7sIE4mUVoUUUsF7CGJi9dDWwD1plUdTu5VqLkDGvbj6BT3dewN0rN4K6PhWtYC4hFAyi7kw3PhJRuVaGg14H9g7/BXW3jwvORrdF+olFs1KcF/H692c4OA6OFUXu5RLCGdyDjIgiwoa79zbRHMnErSKLIJhyy9kkEMKKkDKxRNjw4MkeZqLP5AvwXX8Ly7O67CMJiLCRESLPRS1vX5ev35cSk5AIISLXkv70vcO/OKAv0DV7gWISFuF6WCCkH+oNMmJSsETb2eAWwpTQaRk/MWm4ExNYRHP14nwfIjAS8/H2c1sMMZO/nM6coASfA5dFMLqsQUSclklrYlOW0t3koKdprTAT3sl5MamIQLcShfHC88iD7bVNvMQK5WmPOUIx3dMeJAkD9rU+/27F2S7cR+K41wiyQtIiCDwrVcXtAoama8KEge7T9Mpxee7saJUNmDQsbcXrX55ChlapwuRQrT/0TtL5xlonOc2ghDKMHdbOdzXDr4evkCam9pml6nGW4/hgZh7HUFvyLzMERr9kzj6MSQxWtPDdS34uNUIqjN+ZN1pDMW3IChLBVZ3eLdUdQrDwE9OoakaFHnQnGUuMCHWwog8+yallSHc1q+a7ajmMCCJ6MRStA6q5xRMqhtJmh382opasY5enKU+scnOVK1iijlKetvg3pkItbs09sR8MEHaWkhJ8mBvjlCBgrHj+BwOM9zucDm4W36fBXzjSWkHL6pQpU5LhP2fY2Y6KcIURAAAAAElFTkSuQmCC",
    Ry = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKtSURBVHgB7ZlNctNAEIXfqDhAKicwNwiLrHE2ZBmWsCKcIHYugHMBo5yA5AbJ0mzQPgvCDcQJ0AWYoVs/BOQZzY/GkVLRV+WKLMnKez090nQLmJh43gjsALVYzJEkJ1BiDsgCQtxDyluRphkiE8UACd4Dkre0+ZquyH/3DKeymQxS3ZKxjAzl6EmwARJ98BBlNUcQKqPfN2buEYCzgSrKqEXjFOYoh5KTGhodee2Tap0G6tQ4pWE/oW8HiC/ahHOqGQ2o5fKMDqcYAwIrsV5f6A9pUItzijq+YEwoLEW63gpooj1ZiDOMDSE+6HbrDVT5PjL0mhI8cSYDQzMOA4eH1SeAFxia42P6vHn4fncHH4Ydgbb4AIYz0Ba/2XhHnxnGgE785itCMBnIYSN04oWLz3U7DZNYFLz4MMLC37+rtvf3KxEu9Io8a9pGPwJK/oArLIiFWc/rmTZK/tTtNq2Fuqsjnmz/Rt1mIkrOC60m0xywl3cswMVEtAkrM93eLgMFbNhMRLzbmMrMxHByQcW2W5FtMhFRPBSXlno6lhK/qYRL5nChEdZEv/107SO+RNwYj6ADtTz/BZ9CXjcPeotHLj6vX5oOdj+JFS7hQzud+otnDRddh+1tFZF8p80ZfGie0AFrmxad0Wc6R6CazPIjfGHh/cVbo89YF3Pl7UvhBo+NwhW1Ua5spzmuRstRyPF45PQ/rdFnfHqjs3o+7Lq9yGn7yrVz7VwPlBdU8gguT+hwWPyRT9vdu71ettVF8g3xR6IR79VmD3o/UKcTm5ghDrlv5BuCSsq/6aTUNfrCdziPnN/Sgp7UnexP8B+Ngu/zuo6zD7Hekc3oUitTB1nzi0savVX5oOxJ1LeUFiNFlXIqjfFyr2FXr1ln1VKcjSiOMtXYMo0R8YmJif/5A5b0JTf/pQ3qAAAAAElFTkSuQmCC",
    Sy = "/assets/png/selectupi-d718eba2.png",
    Iy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA0CAYAAADfRPtlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOCSURBVHgB3ZpLctpAEIZ7BmNZVBY+gnKC2CeIfYLAxgV4g0+Q5ATGJ8A+AayA8gZyApwTwA0iL7PzIlUq81Cne4IJYElIQkKPr0pVIJoq/eqZ7p6eEeAAlsunlq43CgCf6esZXQakE5OuiY34Q+/3O04GYvvG69VVGY6O2oB4CtnCJKF320Ll+pdprdaCQmGQQXGMIYVoz+r12/WbK4GzavUWAb5BxiEvNqfX162372qIWtVqg9VDnlgsKtrj41AJfK3VfkF6A0lYXo4t62OBvSeEaED+OJkXi78lDc0vkFcQLzjIGJBTaGR+YoFnkF8MCRmBUth3/Fe5BCILArlCuTzp9e4hBEeQbpQ4Kr9MCElqBVKCnhQt61IMhy9r9wwISCqHqJO4sKROYJTimFQJ3ClOiMCi0yTQXCBWvDyHiJkVuHe0dCMVAmdCVPyIk4g7bd79BxKGK5QP3e7Ej+0C4BkCkmgeFIgdrd/3XaFIKZEmIgQhSYEmeeTOj+Gfev3sGLFFQeYCApKYQAoqN37m3bRe/0rC7oP57T9RCDQpP50G6cTRwz6QuCdPG+rNzkol9loD9mBfgSq887ygzsAI/NWKJnvEy0CJ0/UR2e29Vg0fRamqeMtdfCmhPtZry+asq91KXEQL8XACSdwMYCMx+xRpurXYmajFMaEEsjin3MUijzXtnD465jUOLODBtFRqY8QtlMAC+SG9ErPodHjoVmDLk1RIP3kFFrVtgFiGiAkskILJLfdSvWychisV0q45L85tA0Fd7VAphj2y2JHL6EUYVH2M6aOpdbvnLjYXywgcC6GjKL0VfrCxlzeVJ227QteD0+/qBcS8JxLag+vQQzaL3a6vsmsdmndjjLkvG8lqgres6EUNOMz7/c9y3sXedI5yuVSe6joPWWOXIRfPNnkdDkDU60GeUyMvkezlIuIADkQcC15PkVSp8BazAQcirhW9Erk9JzklHHqbPM6WhaHqyjWRSWyTx9qT4ShJgUeJ4qgJCexFRpIHfTCkK/I60w+H6qolIo6RYTYVM4MQEylc1m55AG37WVLr7ifkFBqdQ6lrWifMrk0GUO0RyStw2NFKyCL2coGtoqjW6w25Vwk5gQr51bHKjfOiVEo1uSUBGYYdddLrrcrBdwdilycPE6k69oLjyHx+wycMN2672S+F8jm21B9p5kygW1bHaXf4LxD6pofARGu7AAAAAElFTkSuQmCC",
    Uy = "/assets/png/successicon-14b4ca02.png",
    Gy = "/assets/png/uAmount-41b6d3de.png",
    Dy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAhCAMAAACvFAaeAAAAzFBMVEUAAABtbW1tbW0zMzMwMDAyMjIyMjItODFqampsbGw1NTVtbW0yMjJsbGxsbGxtbW1tbW0wMDBwcHBtbW1sbGwyMjJra2tsbGxqamoQeDjtcyMQeTgzMzMQeDjqcSUQeTjsdCLrdCLqciMQeDgQeDUQeTkQeTjsdCPscyMQeDgQeTjrdCMzMzMQdzfscyPrdCDncCDvcCAQeTftdSLtdCI0eDQzMzNydy5tbW3sdCMQeTjRdSYdeDYreDU5eDN+di2Ldiy8dSendiredCSq/gfPAAAAOHRSTlMA359AIGBQEDC/MO9wQJBgsDAQz1CAcIAgIO/fj4AwupWAYEAw78+/r6BwcG9YUEAgEO/fz7+fj2tPKssAAAKhSURBVEjHnJNtT8IwFIXP9sUtC4wA2QZEAcGoJL6gJrbVKOj//0/ecZrWwF1MfL40uYXb26dnODA0xiQ4pjCmADKjk2T8n2kAXACTMwR6Uk4RiMUcKE0HKX+StO0WwGaDQF/qJY6opFhxr6tfLcsAwOV0i/kcgVzqGQKx2OOiUnKvAnBjl5i5FfCHPtPOnp6SGw5Q8Eg82+nEuXN4xoexj8iojyh7CRcD4NFa++rc1RmivkrTV0On4gClP/Je+u2dc3cgI03fgHdRGVBfKksfwMIKH87No75C1TeETtIOwDnGAF6ssJMB1//T17T6Ypq3tuX73b+Irq/kXbJUYfA7zdQnfMqLBH09XV93msuY5gX7vcmFV536EurrTHMT03xtBb7IbfhOFX0jAEaFe4WPhQ33nU28vlrVx7OK5JS8ATJ/rwe22/l2yDV9KaNQs61CTPPStnw597Rm+gRFX1A0hg7T7PXtf9gngxUEoSCKjm0igoiUrAcJWUjgpk2Lifr/39KnF+7mjl/gARFE5vLuO/PDeuj6Lqgolpo2p3y3f8gXHKmiYaUpcK7TXB/HLdd3nsYqmNW7p082Bexjw7D3mhpZL09N9+0oWkBBwyQ7ZCVvtzAFTWk2NEyCrMZ7e3Cc1eGCzoYdTcGs9m52exq/l4UkzzmM76i+Cv+8x+dqK0OrYmwiAQzEwAFJu2A2ceDsS7j4+y/t7avhhUAwmn+LkA/Z+8gjLWka1fTsdO1fvrRE9udumnp+T3XUc00th9LxqJGJ0jU+sn7SYZvxbKmPqzhfeizCkiF1fYKOtrbvWynTiaDwSv94CsriVpDlVHVRkR4tDd7d5M5cHxGII1P6FO0AqDaLagtq5bWxMWi923oUguio0fOxSby41zLbVUyaPzg2qSNn/CHUAAAAAElFTkSuQmCC",
    Ly = "/assets/png/upiline-0a62bd1b.png",
    My = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIASURBVHgB7ZndbcIwEMfPqOozI9ANOgLdgA1gA+KklfpW960PbZJOAJ2AERiBEWAE1L4hwfXiUHBIQj5IsWn9k4DEOSf/w+c7WwGwWCwWywmwrEZ03SdAcOiwDWawBNYaM/+VH15IOUDig61482DwzHxfqE1XKSOEQfy7uWFhuAADQMfp0AjMSduQToV6rZVhL8PGFPERipZUSLfgwrEO6ObiHbiCmii1AvJy9DmoNQLbWiEgzgptSrkOtQnQQL0Q+qkVybYhaOCfTmKE93Qj+wAN1JrELPQFck7xz/qygRxi4ZvIskVHtIF9zuKT6zsWviygQWpnIRYEUQYqXvSxrwl9d+Lj1YwmO6cF2Rga4lfngMxWgF2liTIWjNC9D6Ahao0AOo+0OlxN45PssEBHqROpi5R2udtrIqQqj4AiviM/dIye10vYcN6ntbsouFVm36pUcuBA/F7IBieyMkubh9tompe8ZaJvHUo7kCNeMQCBrjcCto4mbbWtaNSXe1P5jIqUcqBQ/M4QB4U2+Z27MqTkCJan0IHS4puBnrWeVQmpow6cWbzyYBmOkzIhleuANvE7AdiLQ+q4E/kjoFP8nuhPnFNI5Vb81tHOpoCQW7ntnlg31gHd/EkHlmAuKW1pBzL3u6aQ3ndnv+DgPNzud815wSH33cl3AxaLxWI5mW9aTsutJpZ2NAAAAABJRU5ErkJggg==",
    ky = "/assets/png/uploadImg1-53f2ece8.png",
    Ty = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHPSURBVHgB7Zi9UsJAFIVPMhbQAaU0zIQXsKBUOn0Frey1MNHGzjijpRoLsfZVsKTgBchMGiyBoWHGgnU3YeVHDbsgmwD7Fcyye5i5J1zuvSyg0Wg0mm3G4AviOKf0rUeXOSRLQONwjaeHNxGxOV4aLpIPnlGij9MTFZvTH0wNwg/SxJqjDSTN2hvYwSJkMkC1ClgWULaivfYHUK8DjQZWAXGuLuirS5e9yTIrbyCfB87PgEJher+4C5wcA0eHwEsN6HbxHxDbzcHs34AQe7SVG5XZ0IB8Cv0W/CTsjGmyWSwLsa9LMPpNENgzR99lVs5ApRIfPIdpDvaxDGHKGJ9NzOlPcgZkgrLKWA4iNNbIGSgWxbX8x71itqwPtHxxbbsNFcgZ8Fvi2vo7VCBngAXV6czXMc2KGtoscgYGA6D2Gm+CnTGNIuQ7MQvw7j7qCays8srUounl+9G3xIwqYrFZiMFSRFGaxKHH6aRJrwECB+HoHE9qDRjeowcy3EN4zfI3qU4hw/OCyAR5njkK+GLxKqQIaoKlkU3sy4Bew9F/ZXRCJcNbfp56A5wwpYAfF166CiXNRhmYW3MVEogKxwaixhEgeXqTVUaj0Wg0mji+AKRSdnQDPUaTAAAAAElFTkSuQmCC",
    Qy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK2SURBVHgB7ZjNceJAEIW7Vb7sjRC0GcBpy/iwcgSLTACGCIwjMERgbwTC98UDEZg9AEc7g1UI3LjR2z2WbAzCjH4KRlX6qlQlWzOFnt509/QAVFRUVFScAFRqVifEgO/rcFJoieg8+L/OB5ABh0UoOLkIAWtE1Fdq4UEGHL5csIg1rF3IwBmUGHbPBYQ7vsIkIVO2+C8cAQSoAeINZOCPmrcI14EsSaAER0RE27/owxGQL0pAqYQo9VIDZ3VHBD39KSJKtbQkERCuAnbA3X5WCiEfLlBv3xjrhbzVuZVKcmETBwrgabK4Ho1nARSMmsxvuM69gEGJyO2IiOAMMUQOPBYD7dZFF3KikwBSwAHtmc7J5UgsIv6bxXTyOoOI15xWxQUvcQDBb31tkVnItoj3F8kvxtO1YZcQCS+v/GaPU/Zy+2EmIftExBThzCfYAaRvDd8/n+4bkjpGdAASPRwaF4nJGTO8I6azru//GB8amcoRNVlIRT0oIianM1Mkp2EiQjB25E0E9SElIuZpPK/z0rj0/cby8AxaEuGg7TeNP5hg5EhWERtIUXvWFfoA7PhtWhGCkSNR17bTuUX5/t/nF6HBsTadmxRS2YuE68j9SM17aedZJ4SpIcK9Gi8C3TgZYqMQDRe9Di/b55GadUzGWyskwuWlFpi4Y7sQTezOVycsNgqZQsJeinG1GC4FSZOsa6w4fT864HTlpSGhD5F6xsttZ56VS4s3h+FVq/ldapLpnFyOyA/C5lFGwUhh5bgY7nNnE+uD3dSdUmQtQdyRxopvw6TnpREiSGOlxRA8bj/biRHOCD+5mvbhCBCsa2lDLIrLDsfOlGNHUrEr/08Kdo/FeGA5LGioxQD1+ej3tdSn8bE7ci8x8goWwcUwhAw4SCSHAyGcHGlx4fark5KKioqKCuv4DysHQAcYRy1TAAAAAElFTkSuQmCC",
    Vy = "/assets/png/wrong-b3102a79.png",
    Oy = "/assets/png/wrong_1-b1d69653.png",
    Fy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAbFBMVEUAAAD+Z2f9aGj/aGj7aGj9aGj+aGj7aGj7Zmb/aGj+aGj/Z2f/cHD/aGj/aGj/aGj+aGj/aWn/YGD+aGj////+e3v/7Oz/tLT/4+P/9fX/xsb+cnL/oaH+hIT/2dn/vb3+kpL+cXH/q6v/0NATJjb9AAAAE3RSTlMA72C/IICQQDB/368Qz5/fcK8Q+V9ZJAAAAgBJREFUWMO12OlWo0AQhuHe6CBrJgVkj47e/z1OxImf0vRWR9/f8TlNddKAwp9Rtu57ute32qpS5NaoTtIiWasmg9hYSet1ZSqhKZDeJBClpki1ic3iiRJ6ChqmpaSqwGKUpMTk1mfgUviXBIOvwOArMPjKlhipxd5KDiK/73RFrNqGPxBUwDDEDr/qmo/oh7Gh3MbbcBhp7nEy6FzjOg3DcPu2lDLXuByH9+jrUrpMY38HsBKy78YujzifPoxppI9kc0dU3kgPMAhf/j95I3UM6u6IzBqpa5DE3mSMdDhe6WtGqNyRwsBQbN5IYSArdKoxDf97ce5mok0zXo4P4+LehUS/+PD+6hkpDBdxP7w/07LnT+OVVlog86KnizPSR3tKQubeRmekMKLIKz6OkfoMIL1ngtMFbMTA7rj7cBox0pBB7eJHvPiz8y3BIL3ytT8Naz2TNysUJSkn8qeEobASN6hcPZT+HhbGW8iQOOxDyuEcQmoc1K4SN3BQ7+SqMqUaND9e2PAhNI1ho8P93KPAiD1caL8SNzQeLXxH881v4H6OpTCr8XrCR4z4rOAahUC7lmdUP/8wLBQHcV56CvZA+AoMvgKDr8Bw26a/SCrhzVRpRou9ZV9S0YhwJvpIqsvf/ocDKjvfPC2IeI2qpSN0qhG5lcrqdt6uqqqtCmzIP+TWD9qaZt1rAAAAAElFTkSuQmCC",
    Ny = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEUAAABlZWVlZWVlZWVmZmZmZmZlZWVgYGBmZmZkZGRnZ2dmZmZmZmZmZmZkZGRlZWVwcHBmZmbpTDmrAAAAEXRSTlMAXyDvv99wEM9An4CvkFAwEIs/ESUAAALKSURBVGje7VnpztsgEORaMIev93/Z1gkqUhczJriuPinzKwE8w86CzSG++OIxKBmDIdp/Q5NJcVlvJHc26Z1BJ6nuYTf7Kcywhg96byOoEXpTDDGzXNSLbFu9nY0el1DpjxPW8+rVmjGJmPtIcTsfWpQlYn/3p9x532635DCoMwirCz2Ap3eSbA//3PWMpE6b3DvstF32M7zjdT32a9tv6aQu8RNI2uBTbmr0BcY9YZfMq92J/bhnBk4vwA8VZpAsxI8VbNNIjTKFM61bj/MGHLCDE0iAFQOwzSmtjtoghpBaHgSYAAx3mJQaAUiBgU3y5wGIYZiz6aZq0lITiwnU+7MQQk2Z2q7JI6W1EMJJAMvfpbqZF7lnV1kI2lUbU6WUKeBKqs4mk9tCElwVs9ncIQVoLkq7o8JVmhtgxGXzTMWjVMowFS/kky1VhssqgALkz/B89K6lCCnwAg7NErqUFGAFzo+HZMxfU6xQ/oCVYazlGCuUn6h1YDF5cUEB89cdpzyIsALgL9OWWNqduKJQ5ccCx1MCQWJ+zscLsIIUP1VgxCJic3soyY69eYAAHqb81UZsoi33TTTPJloAz+BXBf8gPPuyk8Ova+C4uv+Ds/IiP/DJ5N/Hpz/69u5liwSLpf6FF1/EcdU4sHSEQ9Leu/jlpa46jggu3/noXopDeAOi8QaEGhsQvPWRpBk/r+c8CuzeRkAlgJq0HeWXJQCGxDZXH56HhNZRRhoTCDmAZw5DOKY7jnPogQMpdKTmxo7UmpiBAuSPqJkBCoDf/OuD2e3/Hy2PH45jONN5M+PSfsBwf5pTeifZdV0yf3DFQv7yXZi2/Uk7YBZM37Af2JSNUqfex9wNHcUHUKFc1K2VvpeLugS6jyTyVaP1q3uVqkWWq0Z0F4Yl2tDBD99Ut6577XbPbXj9wpqxj2BdYjL00iEyIUolvvjiKfwCFvRUSxPTUJMAAAAASUVORK5CYII=",
    Py = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAKlBMVEUAAACHh4eIiIiJiYmIiIiHh4eAgICJiYmHh4eIiIiJiYmHh4eJiYmIiIjrELAlAAAADXRSTlMAgN/vv2AQX0CfcCCvMD2PAgAAALhJREFUSMdjGPSAy/YuGFwWwKNo710ouIFH0VyYoiu41XDfhYMGnIo4716CMHzvOuBU1Hv3KpSBx1G6MANYYEZiAta7dzfAHReAQxHT3ZsIb5qhyhXfxQvUoS7BCy6DFdniVQP1QhB+RaYwZzHevYjNJ7J3QRE9qmjAFRWrQ0i8inQvQ0i8iu7ehZCjikYVDVdFvncgJF5Fqcsg5GDK5qOKqKEIOyBdERd2JagVP9tZ7GquJDAMVgAA6r2+C2kh1QoAAAAASUVORK5CYII=",
    Wy = "/assets/png/fail-c3ca10bd.png",
    Yy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD3SURBVHgB7dnNDYJAEAXggXAhXixBT7QBDUiM3m3FEixETahA2yAx0SYMJ0C8GlecBfZlk/edSPjbl8ns8iNCNEhg2nE7r3d10xy6zbm4G80j2RRLzSmhaUfdNntxOfi3VhaiFPVdLNkWgThQHvNWLITiOQZAi5THS3nK7zbN9vf1v/XCj9lJX4EJB29zT/YAGgOgMQAaA6AxAJr6WajPpbhK9axU58SzWLI8FRvjV8Dm9WfAK9PoFchWqbjEJkZjADSuA5+4DihxHUBjADQGQOudhWy/27tirkD3QVU8oF5CUBUx/SliE6MxAJo+AGJ28mRGJC+9AJ8KNFKq/j7kAAAAAElFTkSuQmCC",
    xy = "/assets/png/momo-d6d50cc9.png",
    Hy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAV1BMVEUAAAD/cXH/cHD/cXH/a2v/cnL/cXH/cXL/cXL/cXH/cHD/cHH/cXH/Zmb/cXL/cXH/cXH/cXH/cHD/cHL/cHD/cXL/cXH/cXH/cnL/cXP/cHD/cHD/cXK+yAgIAAAAHHRSTlMAmUB+E0yP379xEGCfCu9WhjkgUDCwaV8mzxymXRG1VAAAAm5JREFUaN7tWNm2qyAMtWBBBkfUauv/f+e9pzldtEeXEEzf3K/GbEJmshMnTkQjb2vDG3H5D9Gose7vhMrL1ojLCmJsidRfQfsGGpN/UT3gelD/vbkE0BwyovXHfzr39oNR8Q+r2gP6/TnrPv+wrL81xxmmlwY1bX6+vb5PiaH/e0Y+hSSaMonAwN/1nkwNMiYpgKLisE6/JAXXjxDDIYej5UE5CFm8F+qwAwDXxIzmYQMAJYRa2g2Nsc7C31Efn6MMRJNccI83tkYSjM/yFicr4DYTfMzpZfGn8tbigCkxUFWRnRKTPXVCnOYYAsjl/CQ4Cf4S2Mdj4CwKfBgeFkGgmRjkgsY8cKZjim9RLekYXFD9chCS7dbFhQB8p4QuJLDI8+OhtvV3Cxn6TQJLR1AgDcCDhT1MH0mSkkAibwiPbkXg4k42z3GVxKUkQeH0sxg6m+KEIaj+zerO4rO5wGUnR2fCvOzCrFZEbBhJbFwrJEGUwSUzhuVRl4oj6ED9aysuoTnRERSgn19+wYGhICMwfsZ93/4VGUEPkwzAj9IdGQGshes3IiqCCua39Uua/DZBRXVFGp6n3gBNl9bJpfD6G0gEMgIO+jwBIw7Two/p72O9JCLwQ0LbPDdi5uspgmC3E0qdAaa2vWcAvWtAhSzXAjvmSOzUwpE9fEb3ZKs/tiCLbpnBNi6NFzYS3/TVEoS0rM9050SFnuAhLb87/WpaAp2FBiP6BYFTEpgNAl3RD9f0G4gP0q+aIMEAxIqAhEMsysSrviNY1Krd95DOHlUvQk86nSkO5BfXcS9SyhazrBDnlnKwyunsxIkTW/gHTulzj+FXYt0AAAAASUVORK5CYII=",
    Ky = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABgCAMAAAA6hOw0AAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMAH99A74AQMM9woL9gkFCvj1/LRELiAAACB0lEQVRo3u3Y266rIBCA4RnOILVd8/4PuxOpnURsZYhc7IT/Yt20yy8IohZms9lsNpv9b+FCDZmwWN0pBGpOJewRSFSPEWSEifJ5UCQrORgR6rjsREAYFFr1JhyMClMhFhhXLESEceVCIIwrDz9P8NgIDeNyRjIIHa3VfbPdtGJ9uYjU2jOIKNov/jpmIsFlrgAd87ZuI4fLnsQZLxFc20RYom7CtFx0kaif2M7vxT9gOWxZS+UvCgXdsozKDuADE7cJ5ZgWyi7meBR3Ca/tiE94C4BXhMv6h+A0ni4jhR/hivCGyJ4I/GmsLxgyCB+BCXcqLOWcVgLPqXHAoSmzDCwwEU6J8pmtBf4QgQH+OgsMM1FfPPYo8JyqarN4wlEA/4OwhYhHgee0nuWjwET6fmOjv6PgiY7Xd9hnuRYg0/ctLe0EC3zKY7UsMtQCEyzUhPEsHJdAvbRrAWL5/m+ChdfpcweuHo4Ch1nDl1woBO4Cz2lVJTTEhMK34HfxNoGJTchlEla4UYB9Ezb0ycpuh/LXmYfsdignlGt6icvQQbTes1IZaS/hGx9BF+ggmh8s+YlPTJjY/jadQJi26ZEdNGWr8znqdWNQPIgXjMvxFj8qTcMJy79WjCpVvx0NI2iJepBiSZZaxURWMsI4MYEPGaFBHibJODqnS9sltJ2kDLPZbDabze7sH11QViOJ2tI8AAAAAElFTkSuQmCC",
    Xy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAATlBMVEUAAAD/cXL/cHD/cHD/cXL/cHL/cHL/cHD/cXL/cHL/cHL/cXP/cHH/cnL/cXL/cnL/cHH/cXH/cHD/cHL/cXL/////ysv/9vf/wcH/uLmVTKWsAAAAFHRSTlMA3yAQ76BgQL+AcM+Qf7CPUM8wfyKKkDEAAAHiSURBVGje7dhZbuMwEEXR4kwNHtr9HNn732g38lNIIqpIUfUVnQXcJ1A0IJhOp1OjdAthSKTDxeDxyV+jpYM9Lhlf5PFx3KOnm8EKE9IR9TF7lHUeVrpkiKZb2vfo95tHJRPujppYPphauf6wCu+0+7D4snfwIdKW0aOb2Zj4i0NclPpsLFwdHMU7WjODqRzShMNMtAbH8doDOAfOgd828F6Wl+bAx/O/t8oA95+LwgD31Qa4/3ypDHD/AzoD3NcZ4H7dgDmub+SB9r48kIXfqNhnmdYEfPPiQFsf17rPloUTbX3MtCb+HOCI3Jc/7dKPV8CZtj4SrXHCg4p95miVERaq+xOtC8JhC/3SJWIjhIXKPmJhwEJYqOzDUoERFir7hkoGCAtVfcxUkrC9UNfHg4ry9kJd31DZAGlB7iNSmfPSgtyHpQ0zhAW5H2iLhbAg9mFpU9hekPuBtlmPkteyvCGyJBjQ5UISZ9DBWBLd0SFShSt2C1TDGZ0DYgk7Jao0Kt0gFrDDTA3+oNlELVzzgnHUxBqFCyQtyH21U5oc7TGjUnC0z9B5/2V3A5FP1MFmCLIlUccf8n6kbjYoPT6LBqsMn77GhB8cHccORinPolHKs/sVn3IiLTYOQ3R0Op3a/AMx42mW61lsMAAAAABJRU5ErkJggg==",
    Jy = "/assets/png/succeed-3b2f9216.png",
    zy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAQlBMVEUAAACHh4eIiIiAgICJiYmHh4eHh4eIiIiHh4eJiYmHh4eIiIiHh4eJiYmJiYmJiYmHh4eHh4eIiIiJiYmHh4eIiIituEnzAAAAFXRSTlMAIN8Q72CAvzBwQJ+Qf6+Pz1CwX6BszUUBAAAB80lEQVRYw92Y29KjIBCEZ4az4iGJ/f6vui5b/5oNpQjkavsulfKzp4ERoHOxWWYR7JLVLcZTrZQZNT6kZ6MqEMPymyBjeHhOnvzDzsnT6O8iHAAXOC8v/TFQWd4B2p745k2AmUtZTOeIJBUEmC4ZvAKxkB5vgFyYeWnIjZJZoAOdaDpsFIqOwHTKCHRTdqecMAzdlvlDyRlVE9sjp4TcR9nL6yNwDUuVCtBM7xJEqlbEqv4JRFQ9RMm7fQaYGjS8D8aMkZoU4Q6gcBtEafwsE4dAjbI/VnxKtdPKmBJpthITDOB2iIJWafo66pBLy+UJ0wMJKQwN7oEwdBob6pKAyeDZB9lgKML2QQIiOTz6II+9lBW+D+IhKZcu8Q4BqFPA/wb5SrDSP8QrPfsnm6N4NNj23mYwdjFSP+L+VuC/05Ro6wvF4PmtRq00VE816eme3nZ8+Qbo9s/o3wnv2q2EFGifFRYMR8JLayLz20LcgZXKt2m2d+OXfq4tBS2Qz81wqGVM0FzYZBf1Qv5eW31ASIHklFeVD1s4CBUVDkZOWe4d35aDkfP1rb31INDmci1g5LKNlUsnRAnqAjFpwJaK5icgI18gnL994WA4w4fswuFKfsMume1x9RFGAaDjUHUJM+eXMKOpX+reRLdK8iRzNBcD8gvL5x2yDO1i9QAAAABJRU5ErkJggg==",
    jy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAANlBMVEUAAAD/c3T/cnX/cHD/cHD/c3T/c3T/cnT/c3X/cnP/c3P/c3T/c3X/c3P/cXP/cnT/cnP/c3Q0AiC4AAAAEXRSTlMAv2AgELCAcN/f78+QkFBAn7/vydIAAACQSURBVFjD7dJJDsQwCERRPIDtjO37X7a3qJMdWB0r9Q/wJEQRQujNZeFgb0vaTLW7VLNC9+6UKDR4oTwCDUCBToae0amD0MiO6NQ55U6BAgUKFCjQ2dFF4k+lmdFEl/JqRJluKkb0MwJd7s6vRrTXcnnU+sxJAQX6T5RHoOKFbgrNzcdsiVRpD/ZYMiGEXtwXOizzlzcTFGcAAAAASUVORK5CYII=",
    Zy = "/assets/png/10-e1104eb3.png",
    qy = "/assets/png/10-e1104eb3.png",
    $y = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAANlBMVEUAAAD////////////////////////////////////////////////////////////////////xY8b8AAAAEXRSTlMAv2DfIBCAcK+Q78+wUECfj09LwOYAAACRSURBVFjD7dhLDoUgDIXhQqGAr3vd/2adojhriRLPv4AvARoGJYTQl4uSnb5/qM3Au0kcK7TsRkmFOit06YE6oEAHQzdv1EqoZ6s3ahtyToECBQoUKNDR0Un8pcRqNFBTnJXoQjclJfrrgU53x2ftnXJqHmp+50gBBfokmnugYoWW5lfQx+cVWnH6skRCCH24A++S84jA+K8DAAAAAElFTkSuQmCC",
    eE = "/assets/png/20-be90e252.png",
    tE = "/assets/png/20-be90e252.png",
    sE = "/assets/png/3-7b95b50c.png",
    nE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAeFBMVEUAAAAAqIADrIQDrIQCrYUCrIQCrIQDrIUCq4QAn4ACrIQDq4MCrIQCqoUDqoIDrYQCq4MBqoUAr4AErIQCrYQCr4UDrIT///+B1cHg9fDA6uBCwaMTsYthy7Jiy7Lv+vgitpTQ7+ig4NGR28lx0Lqw5dlSxqsyvJvx24EaAAAAFnRSTlMAIL/v35+Ar3AQz0DvYGCQUDAQz3BvGsqgcAAAApRJREFUWMO1mOt2qjAQRnMlYNWq7Rm5pVy17/+GB7Ftlg5KNOP+41ou2X5khgDDZuGrSAulYEAqYaLNloWRxEYCQpo1f94o4CbiKe+blnAfzR9VupBUWm7AQaSNJPgT+cX8gIdQHmH/SXgQGc8538FBtASJgKcQSfhyYhb8plMBIrRcyQcEsJheAQFBiMmWh0DeJ/oTgolRkSQEI6+LdVX4fO/H12Wx0IIGSvGlxSFYihdAE0nBoKAEUnhzQemkwgUNluKomlKqXVA6qUxG6YpUCrHv7uQsqd9uxYFWCok7+xApPn9DLTWDVFJLJWNboJYCZxu4R1kX1qapk+Zpb4uihHusWXRLd+zbpjp5six30qzJxs8m776+bz6wmCmhbbPh+ENnj3U5cfp1cUwPzZh7SqwnWr/Iq33V2np2TYv09NdfNW5/dZ0yPx1aehaqGLVwiUIddRiObP2rX+4HimspXFGdqlF7S9OpL5G0H49tL/+8yX6xFzH7fO8yYKnDnnumytPj950G/u675vzDtAQkxRRt9deW+aFLe2uLH6y1adcesspdDCUgztXH3v6Q7Weoms6WMIF0UkQ5tHibNxWSZU3b9ccabqF89v2ydsYOuTCCafpdyrCIXhqxFb10wzi9dPuK28mrbnyf1NL1IN1RS/mrHnvYJ610PUp3klTK2YimlGp25o1SytkPgk6q3WiLTsrZH4ZKqtE7NIGUoxfeQCmeJS0opAoNEcKlSzTxiSGYOHggh4leNELC7BYQwCJ54VgOWxdP53ROxC581Ek2nHtnM8QSHmQZs1m4ClhOmiVYRswTrsET42JSaYUbbRFplxopfbQrcSdkjFrT32uWExnNYAxju4mMUKNbKaGj1Xxt/gPAduCwSY6URAAAAABJRU5ErkJggg==",
    aE = "/assets/png/3-7b95b50c.png",
    AE = "/assets/png/4-d37103ef.png",
    oE = "/assets/png/4-d37103ef.png",
    iE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    lE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    gE = "/assets/png/6-d6ee4bdd.png",
    cE = "/assets/png/6-d6ee4bdd.png",
    rE = "/assets/png/8-99f019b4.png",
    dE = "/assets/png/8-99f019b4.png",
    pE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgB7ZhNUsJAEIVfT9Q1RwgLUXZ4A7yAxvLnHHoC9QTqDdwrRfQCcgPZWeJCj8AazLQzCiUJQ/4YKC3m29FJul6mSU+/ARwrCpmCb3dBMxJokEQl7WEW6HsS3c3jsJN2X958GgF0TPmmhPbu958YaKIARHxdO3w8M13rtfaumOkUBVCiOrWjh91E7JfX+yBQ69RGCUjSTu0k7E7Geu2gwRE/owSSabc+sbIidpXRQFk8w7PD8vlEoqoC/wQn1DZOqG2cUNusnlBm9LFAYkKl2mNREumhm4xF63PkS2iJCdV7K4NuUDQp82X9IPxIxnVM7dmXKAiDb+qJCco45r20A19EaMiMsUyoMW/DQ6d6EKaWXefDJ3ylwEcWqgqml3Y4/jrGj+m9HVSGQwTIQHsm3ZaW8eefEvrWCs5Vu7lAAZQnOts+Dq+xQGJCf9oSv6M4qk1RdVabGlXIJ8p2oRqTC12b/KHsbGa5Z1AZRN8eJzRdHEhl8AR8Rj5eW/sfW4cP1clYbGfK47tnkbpaXD7vmDUsAenRjnKkzbz3e+vTc8NShI66wi3mwA3OtllK6a23p0VhvT0tDNvtSe/dlPe1k1pSPJP19sTqUJYIpTB5pjHW25Ntz2QTs2dSR9mU82hcV6GecTTucMzBF1A+ydk1/+DsAAAAAElFTkSuQmCC",
    _E = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH8SURBVHgB7Zi9UsJAEMf/dwF0tME3wE477CxjZ8n48R7eE6hPgHaWls6omNbKvIFUjp08QhoZvnLnwlhwJCQkXJhhuF+TyV1uWW4v/+wuYNlQWNxg82LbhQzrNF1NXA0VgDtt8dLzk55a3B7BuR9nL+Jo83zrA0q5yIS6E62hiJtpnpWb9DNXyAJjvnjtn2hDmtHzSgMKb8iDLB8J77et2bvcrSMcfiIPnJ9M7yzXJhXqyAsfRNeGg/z2pHQ181gTrKOmsY6axjpqmg10lLEABaI7SgkB8lLm7ciYdHzkZcYXZ/rm/WvUOT3ge7Q7x8jGrXjue7OD79+j4PTQGecTLrKg2L1o9R+mh+LTvMZ2DY6sUxaVnJaNwx3u+MILEsM+sVdCjVK9GtKoOL546nVgsawZc16mahX8t4HU1fQykSyt4vBHa6azyjVdbpAJJkhO7lAges00lhEuf5CdAHJnf55MTSJUHtagwvQqlIirQkvaHQ8bc05DGlU4XZeuXuws734iJB1dEIpqR7QG+5oJ/RG20D+OJfnjkNFudLNKWAWSH1G03IWfd1Qkb1iJo8KbqMIjlsAmzqZZSejNy1NRmJenwjAtT9TvzCf4yTWTcXmipix10ZCLuJrpH+PyNDnESt0jO7dFZ1AJrXFFvc2UmgkUbs5SW+MWyxL8AcHCtWNBtBm4AAAAAElFTkSuQmCC",
    uE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAYFBMVEX/c3MAAAD/c3T/cnL/cnP/cHD/dHT/c3T/cnP/cHD/dHT/cnT/c3X/cnP/c3P/dHT/c3P/cnL/c3T/c3P/c3P/dHT/dHT/cnP/c3P/b2//e3v/dHX/c3P/cnL/cHD/c3RZiTXqAAAAH3RSTlNmALImn0DsxmAfDYDgeTLPjUy/WVFA2XAsEAb1qUMZyq+d4wAAAWdJREFUaN7t2cmSwiAQgGGMmWhDNmMW4zL9/m85pTUCMYtVpLvKmer/yIEvQE6gNswJIIAA/xSAujNxQKar4T0AJsUVpSUsAlDh6mKYBwySZGYAKJCoFKYASBEZBMUwvxN8oEDSilfAIHFmCACSBwMgpgcqHwBkqPeADhkyHlAhQ5UDemSpt0CDLOUWqJGlvQX2eE8AAT4auEUs3SywVSxtBRBAAAEEEEAAAQQQYC1QVrtncaYeddfdqCgLBCL0Sh6zZAlOVQYBGQ4q7mM7nOwSBJQ4KLmPtThdFgIYHNQGrwAs0KtBxXifzWUSiBaBbwuc9y+nnCbP2vL3YIpkVHtVi3nXOQfF0MEDToqhrQXsHtGmPWDTKPKajQ9o+iVoC/CcQv56tXzg+IV84HxUhB21A57pI+n8DnBCTbY/euaJJSc9Xwe4dEP6+Q7wiXrV5ufn9w91Gk75V0D5CfRnPDUKIIAAfw74ARBwDtBDkJuIAAAAAElFTkSuQmCC",
    mE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABXwAAABYCAMAAABxqs/uAAAATlBMVEUAAAD////////////////////////////////////////////////////////////////////CwsLJycnm5ub5+fnx8fHc3NzR0dHZ2dnEhMwPAAAAEXRSTlMA3z8Qf18f749Pny+/z69vUE76KOQAAAMsSURBVHja7NxtbuJADABQJ4FAgbYMKbR7/4suK+0P1A0fkwzZSH3vBFY0Y1me2JEAmJzkC/AfRETT1vvF22sC4MmqzWJZt21caPabKgHwJKv1vol+tfwL8AyrdR03LaVfgMJ2yybOpF+A6ezq+EP6BZhO9RKPWyQAClg0kaNV/AKMVm0jU7NOAIyybuIvrQeAqbzHIPUqATDQqo6Bthq/AGXavZ7dACZQtTHCVucBYIDVNkapEwDZ6hjpPQGQaRGj+d8XINM6xms8ugFkqZooYJsAyNDGv4y6AXw3u4avxgNApipKeUkAPGgZxewSAAMKX6MWAP3mW/gqfQEeVEVJywTA1IVvNBbsAGQXvoaMASaxiTNPbgD3zWqb2Xf6DgB3VRH6DgD3zbvrYMoN4AEvUVqTALijieJs1wG44zXK2yQAbnqLS7b6Alw1x02+JowBhry3GbMAuG3WIxZnbQLgpjZC8gW4b/Z/mkWkDN3hwmfq83G4ojumHsfucMUp9fl1uOIjM5pUIpquUDRfqc+py/iU+dF8PjWa45hoHDPHbIJj1qUMcfZTkm/Xfw6/St3RVDqa8nf0lPEpS97R3+zdS27CQAwAUCcD+VJQlr3/RUt/UhctnYQwDeW9E2QRWZY9tp9/+Jr/GHz9Zg/8m91X8AV4RHEm+AJcdhfB13IHAK8dALaniXeGLAAKquONhb4AJe3jg8U6AOXsYn3HCYCLhljf0wRAzv1ML80AikoRod8GUFgfZ64IAZTVxSf3MwGKaeOVEQuA3215zELVASBDp+oAUF6bIsLpYoAcm50wlvgCZDlIfAGybLflJvEFyHSQ+AJk2uaUm8QXIFuVbPIFyLS9rb6OtwHMMsYKkqIDQPnCQzcBMEun4AvwB062mQHk2dKoxdhOAMzWjnGFRrMNYJGqicVGsRdgoWqMhWo1B4DF2joWOU0AFB51S973AlypS8q9ADOVb7sloxUAxUsPvbQXYCXVPvLUhwmAouE37YVegMLht+487QW4gWqo43upF3kBbqca+hRfNE293w16bAA393Tc9XWTImIC4GV0B6OF7ygYBaNgFAwAAACsYqKcmLLcJAAAAABJRU5ErkJggg==",
    vE = "/assets/png/0-6ae0fe8d.png",
    hE = "/assets/png/1-c4fc5e42.png",
    wE = "/assets/png/2-4468ebef.png",
    bE = "/assets/png/0-6ae0fe8d.png",
    CE = "/assets/png/1-bcd21d34.png",
    BE = "/assets/png/10-e1104eb3.png",
    yE = "/assets/png/3-6bb1e3bd.png",
    EE = "/assets/png/4-d37103ef.png",
    fE = "/assets/png/4_ns-6c3ac287.png",
    RE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAaVBMVEUAAAAcuKcquqsvu6wxvK0xvK0xvK0vu6wxvK0vu6wxvK0uvK0tuqwxvK0xvK0wu60wvK0uuqssu6svvK0wvK0vu6wxvK0wvK0ruqkxvK0wu6wxvK0wvK0wvK0wu6wxvK0wu60xvK0yvK3BzxomAAAAInRSTlMABQ489en5Rd9V7i4i8tCRhTUWZLRMvqIb15jJXKl2fW7Dg1SZggAAAn9JREFUWMPt2NtyokAUhWGakw3IGUQFI+73f8gZYMpFgrAbZ+cmlf8upfXVkhBbY/3287ODtGoft7ujRNkiDelfSSdI1x7NOp2l3N6nT+lIxv2gr3mRtAtZ2oUs4MrKcMVluPLynbbycgFXTIYrL2cAhGS4fKEj6yLPEXAFNsOVlYuy7LMqJD59yz5Ktfc06i4MW717UKnM31p72Kfl0dBx2hK4q257nl7XcYx3U5pyq3HQYU1O7EHtk+k1xQ7DqpTQzR7k+PXe4TFHP3+OD/xelBTY/MKt8Qhk3oUcMy4rK7jb8gPuLHdVvhJx8tLlNyu46zJcnxA2G7qQHfx9n+z1+9utTV3IMeNCNn8/S87TZrg+rRXnn92aiJc39iJtz12labPLKGu/wt7VsjlcEhnIyrZ4l8L55BMZyFOdT0wlXDsmNu2M1+zOutTMYDKpTbPGI75kDkum7e+Ci52wrpqTu/NSGDzfC9T4hY/YbhZ68HOP+G7G3m6o5F3j58aFhWxt4EZJeFW8nFrzAgN3uIerUfa3fhf24lji3adMiDtE1M3EZTf7AUjIG24+uLzsdwA5+QJ3Lnc+vxfy9l7I9mvZhftFbpZ7z3A3NmMvL+M6OHC3NsPl5QuOZ7RyWLtwWflUYO/LzbW3dHm5DRT2rmwu7hofVDj54AzlhTV0gLuQp2eco/xvkbUr1btbB3duvZeqW9rMb6KdZBEE3UejiS+59mWgGI796Mm/n/FdhV2UGroxXLNUKrwXpcZ75eUQrtjVwF75zaFjvV3GuvJyDFdIxl5ZGa60DFde9uD+V/flv0qFKsO5mxwtsY7X5xmle2VJdi6bVl9Oaa2s3358fwBsLa2JXzKWGgAAAABJRU5ErkJggg==",
    SE = "/assets/png/6-d6ee4bdd.png",
    IE = "/assets/png/8-99f019b4.png",
    UE = "/assets/png/8-99f019b4.png",
    GE = "/assets/png/6-d6ee4bdd.png",
    DE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABNCAMAAADei7fQAAAARVBMVEUAAAD7WVn6Wlr5Wlr6Wlr/UVH6Wlr6WVn7WFj6Wlr7WVn6Wlr6WVn6WVn4WVn7WVn7Wlr0VVX5WVn6Wlr0Wlr7Wlr6WloIGyxJAAAAFnRSTlMAH7+A3xDvYECfkM/fr3BQkDCgbzB/uIxM3wAAATVJREFUSMft18tuhDAMQNHExCGPCTCdqf//U2t10ZEw1NjqplXv/igoEEeEn6wBF40IiPtHOopHfaJyrujbch/Tigb0CuZoR1yNdsS9exClKJBJkUWhA9HmQVQ8CDyI0IPmQ5QTd47aIZq+jsZjkGwoKIY5CwQqCsWDAnjQLDdCR0VuuY5W2hUvoG1/gIOOMImFdDTENqio7Df8hidozFwnLtHeOI47YLCivJhHWJowGNHydMzyDm1FgazTnMjByFC6OxBlVvZplNWj8Ww3obr+lcdNqElD3Jt4QNQRitG36kguVS+gRbysC2imfYaVTKg6UEwONMiMCkiTD1AtXCfu0eDsgidriwdFB4LgQHcHqsGObmhFr3vDaMyo24dlnsxjOTcMRgQLk+so9dpW/GU/XX8OfQBvBtu11LrG1wAAAABJRU5ErkJggg==",
    LE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ/SURBVHgB3VfbcdpAFL13JRysxDPqIHQQp4KgDvi0MR+kAicVGCoIqSBkxsb+C6kAOgipIHIHyg8IgbQ5qwDmISSt8cgzPh/Ssrq7Zx/nPmA6ALLZtOdBcJlmY47HX7nf9+I2HQDf921DiFaqkWV18YzJmHJiWq+3YPx2vQ+/bUlUSxsHmz5svDCK2rl3Jpg/SCmr630yx7jlYkzmrqACUShZfoFE0YhEwtq2jjYBI2L2ZBh6qQKRtZrtl8s2VlSZE7nHd3fu+vfJ2VkFavyTNkcJY7nXu1ftxJ3NGo0qVnw1Izo1pFSKI4NiRbrY4fcj3+8sfUcHvL2TwLK+cYacQe5GUeSots7ONi5hZlmDLKLFCitCiAGIbNLAiiyo1zt4neYdqAjxuiQNxGTqonUHLtDUMY7JcBxXVACWx9jMtJRyyPCp+MINQ6nVJU2YSuYyiiidR7qvbm+dta57HL1jMP9CO7dIBIjeZRlBDK3tPuXg6O+QBgTnWFlpMvmZ1D+Hg5MOmfwv4TS4+6LFdvjKJKMCUSwZI/xn2FRUzEz6gKiTO+LEZDKHvyDN7JtUjywU4neWEfxpJ8IsdqsVeUTZNEe0KLX2grk6PT//sTw2FQhUhqBsJW9Oox7BxcUgR3p/FHbyWcjcpgIQkx1fXw+hSq3Qo4CA0NexX/mZWSq1NSO5h9Lgs4b9Axl3u14opQMxDHOM8wIi56BwpQYf3dw4qKA+kqr3EkhUXkPd/v5NrzciTWTWjfOTkzgFTcPw7+vx2H1MCfcsWO1s3mjUcOFapVkaEAY9ZPcNta4qYhB9Ic2IkAa4kktbrvGC8xkViOf5MwjWT7jVJ1Mj5Ljjj/8AVmLvuqO67rIAAAAASUVORK5CYII=",
    ME = "data:application/octet-stream;base64,JHJlZENvbG9yOiAjRDlBQzRGOwokcmVkWWVsbG93OiAjRkY3RDA2Owo6ZGVlcCgucmVkKSB7Cgljb2xvcjogJHJlZENvbG9yOwp9Cgo6ZGVlcCgueWVsbG93KSB7Cgljb2xvcjogJHJlZFllbGxvdzsKfQpAbWl4aW4gYmcgewoJbWFyZ2luLXRvcDogMzBweDsKCWJhY2tncm91bmQ6ICMzRjNGM0Y7Cglib3JkZXItcmFkaXVzOiAxMHB4Owp9CgpAbWl4aW4gZmMgewoJZGlzcGxheTogZmxleDsKCWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCkBtaXhpbiBmciB7CglkaXNwbGF5OiBmbGV4OwoJZmxleC1kaXJlY3Rpb246IHJvdzsKfQo=",
    kE = "/assets/scss/_extend-91cd01a9.scss",
    TE = "data:application/octet-stream;base64,LmNvbnRlbnQgewogICAgQGV4dGVuZCAlY29udGVudC1mb3JtYXQ7Cn0K",
    QE = "/assets/scss/always-1ce487ea.scss",
    VE = "data:application/octet-stream;base64,QGltcG9ydCAndmFycy5zY3NzJzsKQGltcG9ydCAnYWx3YXlzLnNjc3MnOwpAaW1wb3J0ICdmb250cy5zY3NzJzsKCi8vIEBpbXBvcnQgJ1ZJUC92aXAuc2Nzcyc7CiogewoJYm94LXNpemluZzogYm9yZGVyLWJveDsKCS8vIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0ludGVyJywgc2Fucy1zZXJpZjsKCWZvbnQtZmFtaWx5OiAnYmFobnNjaHJpZnQnOwp9CgojYXBwIHsKCWJhY2tncm91bmQ6ICMyOTI5Mjk7Cn0KLnBvcHVwIHsKCXBvc2l0aW9uOiBmaXhlZDsKCW1heC1oZWlnaHQ6IDEwMCU7CgoJJi1jZW50ZXIgewoJCXRvcDogNTAlOwoJCWxlZnQ6IDA7CgkJcmlnaHQ6IDA7CgkJd2lkdGg6IGZpdC1jb250ZW50OwoJCW1hcmdpbjogMCBhdXRvOwoJCXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsKCQkvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Cgl9CgkmLW92ZXJsYXkgewoJCXBvc2l0aW9uOiBmaXhlZDsKCQl0b3A6IDA7CgkJbGVmdDogMDsKCQl3aWR0aDogMTAwJTsKCQloZWlnaHQ6IDEwMCU7CgkJYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM1KTsKCX0KfQo=",
    OE = "data:application/octet-stream;base64,Ly8g6LaK5Y2X56uZ5a2X5L2TCkBmb250LWZhY2UgewoJZm9udC1mYW1pbHk6ICdiYWhuc2NocmlmdCc7Cglmb250LXdlaWdodDogNTAwOwoJc3JjOiB1cmwoJ0AvYXNzZXRzL2ZvbnRzL2JhaG5zY2hyaWZ0LndvZmYyJyk7Cn0KCi8vIOWAkuiuoeaXtuWtl+S9kwpAZm9udC1mYWNlIHsKCWZvbnQtZmFtaWx5OiAnZGlnaXRhbERyZWFtRmF0JzsKCXNyYzogdXJsKCdAL2Fzc2V0cy9mb250cy9kaWdpdGFsRHJlYW1GYXQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpOwp9Cg==",
    FE = "/assets/scss/lotteryrecord-bdd14596.scss",
    NE = "data:application/octet-stream;base64,LnZhbi10b2FzdCB7Cgl3b3JkLWJyZWFrOiBicmVhay13b3JkICFpbXBvcnRhbnQ7Cn0KCi5jZy1kZWZhdWx0IHsKCSYudmFuLWJ1dHRvbiB7CgkJYm94LXNoYWRvdzogMHB4IDRweCAwcHggI2UwNDg0NjsKCQlmb250LXdlaWdodDogNzAwOwoJCWZvbnQtc2l6ZTogMzBweDsKCgkJLnZhbi1idXR0b25fX2ljb24gewoJCQloZWlnaHQ6IDEwMCU7CgkJCWRpc3BsYXk6IGZsZXg7CgkJCWFsaWduLWl0ZW1zOiBjZW50ZXI7CgoJCQkmID4gaW1nIHsKCQkJCWhlaWdodDogODAlOwoJCQl9CgkJfQoJfQp9Cg==",
    PE = "/assets/scss/reset-3ae2bb89.scss",
    WE = "/assets/scss/reset-551e8c1a.scss",
    YE = "data:application/octet-stream;base64,",
    xE = "/assets/scss/home-fd7fe99a.scss",
    HE = "/assets/scss/reset-4ccc6eae.scss",
    KE = "/assets/scss/reset-ad9237ba.scss",
    XE = "/assets/scss/reset-ad9237ba.scss",
    JE = "/assets/scss/reset-d3a10f67.scss",
    zE = "data:application/octet-stream;base64,LyogZ2FtZUxpc3Qg5qC35byP6YCC6YWNIHN0YXJ0ICovCi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7Ci8vIAkuaG90R2FtZUxpc3RJdGVtX19jb250YWluZXIuaXNNaW5pR2FtZSB7Ci8vIAkJd2lkdGg6IDI1NHB4ICFpbXBvcnRhbnQ7Ci8vIAkJaGVpZ2h0OiAyNTRweCAhaW1wb3J0YW50OwoKLy8gCQlpbWcgewovLyAJCQl3aWR0aDogMjQwcHggIWltcG9ydGFudDsKLy8gCQkJaGVpZ2h0OiAyNDBweCAhaW1wb3J0YW50OwovLyAJCX0KLy8gCX0KCi8vIAkuZ2FtZUxpc3RHcmlkX19jb250YWluZXItd3JhcHBlciB7Ci8vIAkJZ2FwOiAxMHB4IDEwcHggIWltcG9ydGFudDsKLy8gCX0KLy8gfQoKLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHsKLy8gCS5nYW1lTGlzdCAubXlTaWRlQmFyIHsKLy8gCQlmbGV4LWdyb3c6IDA7Ci8vIAl9CgovLyAJLmdhbWVMaXN0R3JpZF9fY29udGFpbmVyIHsKLy8gCQl3aWR0aDogNTczLjg5cHggIWltcG9ydGFudDsKLy8gCX0KCi8vIAkud2l0aGRyYXdfX2NvbnRhaW5lciAucmVjeWNsZUJ0bkQgewovLyAJCW1heC13aWR0aDogbm9uZTsKLy8gCX0KLy8gfQoKLyogZ2FtZUxpc3Qg5qC35byP6YCC6YWNIGVuZCAqLwo=",
    jE = "/assets/png/20-be90e252.png",
    ZE = "/assets/png/20-be90e252.png",
    qE = "data:application/octet-stream;base64,JHBsYWNlaG9sZGVyLWNvbG9yOiAjMjkyOTI5OwokY29sb3ItZmI1MTUxOiAjZmI1MTUxOwokZm9udC1mYW1pbHk6ICdiYWhuc2NocmlmdCc7Ci8vICRmb250LWZhbWlseTogJ1JvYm90bycsICdJbnRlcicsIHNhbnMtc2VyaWY7CiR2YXIxOiAjMzQ1ZWVmOwokdmFyMjogI2ZmZmZmZjsKJHZhcjM6ICMzMzMzMzM7CiR2YXI0OiAjZGZkZmRmOwo=",
    $E = "/assets/scss/withdraw-14100db1.scss",
    ef = "/assets/scss/xoxs-5f5f28c4.scss";
let _s = {};
const tf = e => {
    _s = {
        RechargeState: [{
            key: e("all"),
            value: -1
        }, {
            key: e("titleToBePaid"),
            value: 0
        }, {
            key: e("completed"),
            value: 1
        }, {
            key: e("rechargeState4"),
            value: 2
        }],
        RechargeC2CState: [{
            key: e("payments"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("timeOut"),
            value: 7
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("rechargeState4"),
            value: 5
        }, {
            key: e("cancelled"),
            value: 6
        }],
        WithdrawState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("withdrawState0"),
            value: 0
        }, {
            key: e("rechargeState2"),
            value: 1
        }, {
            key: e("withdrawState2"),
            value: 2
        }, {
            key: e("withdrawing"),
            value: 3
        }],
        C2cState: [{
            key: e("withdrawStatem1"),
            value: -1
        }, {
            key: e("c2cState0"),
            value: 0
        }, {
            key: e("c2cState1"),
            value: 1
        }, {
            key: e("c2cState2"),
            value: 2
        }, {
            key: e("c2cState3"),
            value: 3
        }, {
            key: e("c2cState4"),
            value: 4
        }, {
            key: e("c2cTip9"),
            value: 5
        }, {
            key: e("c2cState6"),
            value: 6
        }, {
            key: e("c2cState7"),
            value: 7
        }, {
            key: e("c2cState8"),
            value: 8
        }, {
            key: e("c2cState9"),
            value: 9
        }],
        RecharegeStatus: [{
            key: e("rechargeState0"),
            value: 0
        }, {
            key: e("rechargeState1"),
            value: 1
        }, {
            key: e("rechargeState2"),
            value: 2
        }, {
            key: e("rechargeState3"),
            value: 3
        }, {
            key: e("rechargeState4"),
            value: 4
        }],
        RechargeType: [{
            key: e("code9200"),
            value: 1
        }, {
            key: e("code9201"),
            value: 2
        }, {
            key: e("code9206"),
            value: 9
        }, {
            key: "USDT",
            value: 11
        }, {
            key: "KBZ",
            value: 13
        }, {
            key: "Wave",
            value: 14
        }, {
            key: "TRX",
            value: 16
        }],
        transMoneyTypes: [{
            key: e("all"),
            value: 0
        }, {
            key: e("withdrawalReduce"),
            value: 1
        }, {
            key: e("gameTransOut"),
            value: 2
        }, {
            key: e("gameTransIn"),
            value: 3
        }, {
            key: e("betReduce"),
            value: 4
        }, {
            key: e("jackpotIncre"),
            value: 5
        }, {
            key: e("agencyCommis"),
            value: 6
        }, {
            key: e("manualAccess"),
            value: 7
        }],
        usdtMainNetwork: [{
            key: "USDT-TRC20111",
            value: 1
        }, {
            key: "USDT-TRC20222",
            value: 2
        }],
        EWalletType: [{
            key: "MOMO1",
            value: 1
        }, {
            key: "MOMO2",
            value: 2
        }],
        levelTypes: [{
            key: e("all"),
            value: -1
        }, {
            key: e("downlevel", [1]),
            value: 1
        }, {
            key: e("downlevel", [2]),
            value: 2
        }, {
            key: e("downlevel", [3]),
            value: 3
        }, {
            key: e("downlevel", [4]),
            value: 4
        }, {
            key: e("downlevel", [5]),
            value: 5
        }, {
            key: e("downlevel", [6]),
            value: 6
        }],
        bettingResult: [{
            key: e("bettingResultState1"),
            value: 2
        }, {
            key: e("bettingResultState2"),
            value: 1
        }, {
            key: e("bettingResultState3"),
            value: 0
        }],
        bettingOrderStatus: [{
            key: e("unsettled"),
            value: 0
        }, {
            key: e("settled"),
            value: 1
        }, {
            key: e("invalidbet"),
            value: 2
        }],
        WStateCorrelationT: [{
            value: 0,
            key: e("stateTips1")
        }, {
            value: 1,
            key: e("stateTips2")
        }, {
            value: 2,
            key: e("stateTips3")
        }, {
            value: 3,
            key: e("stateTips4")
        }],
        RStateCorrelationT: [{
            key: e("RStateTips1"),
            value: 1
        }, {
            key: e("RStateTips2"),
            value: 2
        }],
        gameSelectType: [{
            key: "0",
            value: "0"
        }, {
            key: "1",
            value: "1"
        }, {
            key: "2",
            value: "2"
        }, {
            key: "3",
            value: "3"
        }, {
            key: "4",
            value: "4"
        }, {
            key: "5",
            value: "5"
        }, {
            key: "6",
            value: "6"
        }, {
            key: "7",
            value: "7"
        }, {
            key: "8",
            value: "8"
        }, {
            key: "9",
            value: "9"
        }, {
            key: "10",
            value: "10"
        }, {
            key: "11",
            value: "11"
        }, {
            key: "12",
            value: "12"
        }, {
            key: "13",
            value: "13"
        }, {
            key: "14",
            value: "14"
        }, {
            key: "15",
            value: "15"
        }, {
            key: "16",
            value: "16"
        }, {
            key: "17",
            value: "17"
        }, {
            key: "18",
            value: "18"
        }, {
            key: e("numbersUnmatch"),
            value: "ABC"
        }, {
            key: e("numbersMatch"),
            value: "AAA"
        }, {
            key: "22",
            value: "22"
        }, {
            key: "33",
            value: "33"
        }, {
            key: "44",
            value: "44"
        }, {
            key: "55",
            value: "55"
        }, {
            key: "66",
            value: "66"
        }, {
            key: "111",
            value: "111"
        }, {
            key: "222",
            value: "222"
        }, {
            key: "333",
            value: "333"
        }, {
            key: "444",
            value: "444"
        }, {
            key: "555",
            value: "555"
        }, {
            key: "666",
            value: "666"
        }, {
            key: e("small"),
            value: "L"
        }, {
            key: e("big"),
            value: "H"
        }, {
            key: e("odd"),
            value: "O"
        }, {
            key: e("k3Even"),
            value: "E"
        }, {
            key: e("GTBig"),
            value: "big"
        }, {
            key: e("GTSmall"),
            value: "small"
        }, {
            key: e("GTRed"),
            value: "red"
        }, {
            key: e("GTGreen"),
            value: "green"
        }, {
            key: e("GTPurple"),
            value: "violet"
        }, {
            key: "O",
            value: e("GTOdd")
        }, {
            key: "E",
            value: e("GTEven")
        }, {
            key: "L",
            value: e("GTSmall")
        }, {
            key: "H",
            value: e("GTBig")
        }],
        gameAllName: [{
            key: e("sabaSport"),
            value: 14
        }, {
            key: e("cmdSport"),
            value: 8
        }, {
            key: e("agSport"),
            value: 13
        }, {
            key: e("imSport"),
            value: 15
        }, {
            key: e("dgLive"),
            value: 7
        }, {
            key: e("agLive"),
            value: 10
        }, {
            key: e("evoLive"),
            value: 16
        }, {
            key: e("chess365"),
            value: 19
        }, {
            key: e("chessv8"),
            value: 21
        }, {
            key: e("sexyLive"),
            value: 27
        }, {
            key: e("wmLive"),
            value: 26
        }, {
            key: e("wicketsSport"),
            value: 25
        }],
        languageCodes: [{
            value: "en",
            key: 0
        }, {
            value: "id",
            key: 1
        }, {
            value: "vi",
            key: 2
        }, {
            value: "bra",
            key: 3
        }, {
            value: "tha",
            key: 4
        }, {
            value: "th",
            key: 4
        }, {
            value: "zh",
            key: 5
        }, {
            value: "zh-CN",
            key: 5
        }, {
            value: "tw",
            key: 6
        }, {
            value: "md",
            key: 7
        }, {
            value: "bd",
            key: 8
        }, {
            value: "hd",
            key: 9
        }, {
            value: "my",
            key: 10
        }, {
            value: "pk",
            key: 11
        }, {
            value: "ar",
            key: 12
        }],
        StatusType: [{
            key: e("enableStatus"),
            value: 1
        }, {
            key: e("disabledStatus"),
            value: 0
        }],
        RegionType: [{
            key: e("north"),
            value: "北部"
        }, {
            key: e("central"),
            value: "中央"
        }, {
            key: e("south"),
            value: "南部"
        }],
        gameType: [{
            key: e("lotteryType1"),
            value: 1
        }, {
            key: e("lotteryType2"),
            value: 2
        }, {
            key: e("lotteryType3"),
            value: 3
        }, {
            key: e("lotteryType4"),
            value: 4
        }, {
            key: e("lotteryType5"),
            value: 5
        }],
        gameTabList: [{
            name: e("all"),
            img: "all",
            codeType: -1
        }, {
            name: e("lottery"),
            img: "lottery",
            codeType: 3
        }, {
            name: e("live"),
            img: "video",
            codeType: 1
        }, {
            name: e("chess"),
            img: "chess",
            codeType: 4
        }, {
            name: e("electric"),
            img: "slot",
            codeType: 0
        }],
        VipType: [{
            key: e("receiveSuccess"),
            value: 1
        }, {
            key: e("receiveSuccess"),
            value: 2
        }, {
            key: e("vipcondition"),
            value: 3
        }, {
            key: e("vipcondition"),
            value: 4
        }, {
            key: e("vipTip8"),
            value: 5
        }, {
            key: e("vipTip9"),
            value: 6
        }, {
            key: e("vipTip16"),
            value: 7
        }, {
            key: e("vipTip16"),
            value: 8
        }]
    }
};
let sf = localStorage.getItem("language") || "en",
    nf = S({
        en: vn,
        rus: hn,
        vi: wn,
        id: bn,
        hd: Cn,
        th: jt,
        tha: jt,
        md: Bn,
        bra: yn,
        my: En,
        bd: fn,
        zh: Rn,
        pk: Sn,
        ar: In
    });
const Me = Js({
    legacy: !1,
    locale: sf,
    fallbackLocale: "en",
    globalInjection: !0,
    warnHtmlMessage: !1,
    messages: nf.value,
    silentTranslationWarn: !0,
    datetimeFormats: {
        zh: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            },
            long: {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long"
            }
        },
        en: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        rus: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        vi: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        my: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        id: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        hd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        th: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        md: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bra: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        bd: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        pk: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        },
        ar: {
            short: {
                year: "numeric",
                month: "short",
                day: "numeric"
            }
        }
    }
});
tf(Me.global.t);
const ZM = async e => {
    const s = e || hs();
    uf(s), mn(s)
}, Zt = e => typeof e == "function", af = e => e !== null && typeof e == "object", qM = e => af(e) && Zt(e.then) && Zt(e.catch), $M = e => e != null, ek = () => {}, Af = e => e.stopPropagation();

function tk(e, s) {
    (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), s && Af(e)
}

function sk(e) {
    const s = {};
    return e !== void 0 && (s.zIndex = +e), s
}
const us = typeof window < "u",
    Ot = navigator.userAgent.toLowerCase(),
    of = us && /ios|iphone|ipad|ipod/.test(Ot),
    nk = us && /android|adr/.test(Ot),
    lf = /mobi|android|iphone/.test(Ot),
    ms = !lf,
    gf = Me.global.t;

function cf(e) {
    return e.then(s => [null, s]).catch(s => [s, null])
}
const ak = () => (navigator.language ? navigator.language : navigator.browserLanguage).toLowerCase().slice(0, 2),
    Ak = (e, s) => e == "zh-CN" || e == "zh" ? s.includes(e) ? "zh-CN" : "en" : e == "bn" ? s.includes("bdt") ? "bdt" : "en" : e == "pt-br" ? s.includes("bra") ? "bra" : "en" : s.toLowerCase().includes(e.split("-")[0]) ? e.split("-")[0] : "en",
    ok = (e, s, n = !0) => {
        let A = null;
        return function(...o) {
            A || (A = setTimeout(() => {
                !n && e.apply(this, arguments), A = null
            }, s), n && e.apply(this, o))
        }
    },
    vs = e => {
        if (!e) return;
        const s = document.createElement("input");
        s.setAttribute("readonly", "readonly"), s.setAttribute("value", e.toLocaleString()), document.body.appendChild(s), s.select(), document.execCommand("Copy"), document.body.removeChild(s), js.showSuccessToast(gf("copySuccess"))
    },
    Q = (e, s, n = "png", A = "icons") => new URL(Object.assign({
        "../assets/audio/di1.mp3": Un,
        "../assets/audio/di2.mp3": Gn,
        "../assets/fonts/bahnschrift.woff2": Dn,
        "../assets/fonts/digitalDreamFat.ttf": Ln,
        "../assets/homeImg/blueHome/electronic_bg.png": Mn,
        "../assets/homeImg/blueHome/fish_bg.png": kn,
        "../assets/homeImg/blueHome/game_mini_bg.png": Tn,
        "../assets/homeImg/blueHome/hot_bg.png": Qn,
        "../assets/homeImg/blueHome/lottery_bg.png": Vn,
        "../assets/homeImg/blueHome/third_bg.png": On,
        "../assets/homeImg/damanHome/chess.png": Fn,
        "../assets/homeImg/damanHome/chess_icon.png": Nn,
        "../assets/homeImg/damanHome/fish.png": Pn,
        "../assets/homeImg/damanHome/fish_icon.png": Wn,
        "../assets/homeImg/damanHome/flash.png": Yn,
        "../assets/homeImg/damanHome/flash_icon.png": xn,
        "../assets/homeImg/damanHome/lottery.png": Hn,
        "../assets/homeImg/damanHome/lottery_icon.png": Kn,
        "../assets/homeImg/damanHome/popular.png": Xn,
        "../assets/homeImg/damanHome/popular_icon.png": Jn,
        "../assets/homeImg/damanHome/slot.png": zn,
        "../assets/homeImg/damanHome/slot_icon.png": jn,
        "../assets/homeImg/damanHome/sport.png": Zn,
        "../assets/homeImg/damanHome/sport_icon.png": qn,
        "../assets/homeImg/damanHome/video.png": $n,
        "../assets/homeImg/damanHome/video_icon.png": ea,
        "../assets/homeImg/electronic/customerIcon.svg": ta,
        "../assets/homeImg/electronic/down.svg": sa,
        "../assets/homeImg/whiteGoldHome/message.png": na,
        "../assets/icons/activity/Championship/1.png": aa,
        "../assets/icons/activity/Championship/2.png": Aa,
        "../assets/icons/activity/Championship/3.png": oa,
        "../assets/icons/activity/DailySignIn/SignInTop.png": ia,
        "../assets/icons/activity/DailySignIn/Signed.png": la,
        "../assets/icons/activity/DailySignIn/Unsigned.png": ga,
        "../assets/icons/activity/DailySignIn/coin.png": ca,
        "../assets/icons/activity/DailySignIn/day7Bg.png": ra,
        "../assets/icons/activity/DailySignIn/day7BgActive.png": da,
        "../assets/icons/activity/DailySignIn/headerBg.png": pa,
        "../assets/icons/activity/DailyTask/DailyCheckInBanner.png": _a,
        "../assets/icons/activity/DailyTask/DailyTaskBanner.png": ua,
        "../assets/icons/activity/DailyTask/DailyTaskHero.png": ma,
        "../assets/icons/activity/DailyTask/PointsMallBanner.png": va,
        "../assets/icons/activity/DailyTask/activityIcon1.png": ha,
        "../assets/icons/activity/DailyTask/activityIcon2.png": wa,
        "../assets/icons/activity/DailyTask/activityIcon3.png": ba,
        "../assets/icons/activity/DailyTask/activityIcon4.png": Ca,
        "../assets/icons/activity/DailyTask/activityIcon5.png": Ba,
        "../assets/icons/activity/DailyTask/amountIcon.png": ya,
        "../assets/icons/activity/DailyTask/awardImg.png": Ea,
        "../assets/icons/activity/DailyTask/awardRecord.png": fa,
        "../assets/icons/activity/DailyTask/close.png": Ra,
        "../assets/icons/activity/DailyTask/confirmationReceived.png": Sa,
        "../assets/icons/activity/DailyTask/dualArrow.png": Ia,
        "../assets/icons/activity/DailyTask/friends.png": Ua,
        "../assets/icons/activity/DailyTask/giftRedeem.png": Ga,
        "../assets/icons/activity/DailyTask/new.png": Da,
        "../assets/icons/activity/DailyTask/present.png": La,
        "../assets/icons/activity/DailyTask/recordIcon.png": Ma,
        "../assets/icons/activity/DailyTask/signInBanner.png": ka,
        "../assets/icons/activity/DailyTask/stepperIcon.png": Ta,
        "../assets/icons/activity/DailyTask/taskIcon1.png": Qa,
        "../assets/icons/activity/DailyTask/taskIcon2.png": Va,
        "../assets/icons/activity/DailyTask/taskIcon3.png": Oa,
        "../assets/icons/activity/DailyTask/taskIcon4.png": Fa,
        "../assets/icons/activity/DailyTask/taskIcon5.png": Na,
        "../assets/icons/activity/DailyTask/weeklyType1.svg": Pa,
        "../assets/icons/activity/DailyTask/weeklyType10.svg": Wa,
        "../assets/icons/activity/DailyTask/weeklyType11.svg": Ya,
        "../assets/icons/activity/DailyTask/weeklyType12.svg": xa,
        "../assets/icons/activity/DailyTask/weeklyType2.svg": Ha,
        "../assets/icons/activity/DailyTask/weeklyType3.svg": Ka,
        "../assets/icons/activity/DailyTask/weeklyType4.svg": Xa,
        "../assets/icons/activity/DailyTask/weeklyType5.svg": Ja,
        "../assets/icons/activity/DailyTask/weeklyType6.svg": za,
        "../assets/icons/activity/DailyTask/weeklyType7.svg": ja,
        "../assets/icons/activity/DailyTask/weeklyType8.svg": Za,
        "../assets/icons/activity/DailyTask/weeklyType9.svg": qa,
        "../assets/icons/activity/MemberPackage/bg.png": $a,
        "../assets/icons/activity/MemberPackage/box.png": eA,
        "../assets/icons/activity/MemberPackage/head.png": tA,
        "../assets/icons/activity/PointMall/addAddress.png": sA,
        "../assets/icons/activity/PointMall/cart.png": nA,
        "../assets/icons/activity/PointMall/claimRuleBg.png": aA,
        "../assets/icons/activity/PointMall/close.png": AA,
        "../assets/icons/activity/PointMall/coin.png": oA,
        "../assets/icons/activity/PointMall/confirm.png": iA,
        "../assets/icons/activity/PointMall/copy.png": lA,
        "../assets/icons/activity/PointMall/diamond.png": gA,
        "../assets/icons/activity/PointMall/dropdown.png": cA,
        "../assets/icons/activity/PointMall/dropdownRed.png": rA,
        "../assets/icons/activity/PointMall/dropdownWhite.png": dA,
        "../assets/icons/activity/PointMall/edit.png": pA,
        "../assets/icons/activity/PointMall/editDefault.png": _A,
        "../assets/icons/activity/PointMall/empty.png": uA,
        "../assets/icons/activity/PointMall/forbhidden.png": mA,
        "../assets/icons/activity/PointMall/headerBg.png": vA,
        "../assets/icons/activity/PointMall/headerBodyBg.png": hA,
        "../assets/icons/activity/PointMall/income.png": wA,
        "../assets/icons/activity/PointMall/iphone14.png": bA,
        "../assets/icons/activity/PointMall/loading.png": CA,
        "../assets/icons/activity/PointMall/lotteryContact.png": BA,
        "../assets/icons/activity/PointMall/lotteryReceiver.png": yA,
        "../assets/icons/activity/PointMall/luckyNumber.png": EA,
        "../assets/icons/activity/PointMall/minus.png": fA,
        "../assets/icons/activity/PointMall/notice.png": RA,
        "../assets/icons/activity/PointMall/orderCancelSuccess.png": SA,
        "../assets/icons/activity/PointMall/orderCancelWarn.png": IA,
        "../assets/icons/activity/PointMall/orderCanceled.png": UA,
        "../assets/icons/activity/PointMall/orderCanceledImg.png": GA,
        "../assets/icons/activity/PointMall/orderCompleted.png": DA,
        "../assets/icons/activity/PointMall/orderCompletedImg.png": LA,
        "../assets/icons/activity/PointMall/orderItemDetail.png": MA,
        "../assets/icons/activity/PointMall/orderPending.png": kA,
        "../assets/icons/activity/PointMall/orderPendingImg.png": TA,
        "../assets/icons/activity/PointMall/orderSent.png": QA,
        "../assets/icons/activity/PointMall/orderSentImg.png": VA,
        "../assets/icons/activity/PointMall/output.png": OA,
        "../assets/icons/activity/PointMall/plus.png": FA,
        "../assets/icons/activity/PointMall/pointsIcon.png": NA,
        "../assets/icons/activity/PointMall/record.png": PA,
        "../assets/icons/activity/PointMall/recordHeaderBg.png": WA,
        "../assets/icons/activity/PointMall/recycleBin.png": YA,
        "../assets/icons/activity/PointMall/redDiamond.png": xA,
        "../assets/icons/activity/PointMall/redDiamondSm.png": HA,
        "../assets/icons/activity/PointMall/redeemdBg.png": KA,
        "../assets/icons/activity/PointMall/rule.png": XA,
        "../assets/icons/activity/PointMall/statusBg.png": JA,
        "../assets/icons/activity/PointMall/successfullyParticipatedBg.png": zA,
        "../assets/icons/activity/PointMall/successfullyParticipatedBottom.png": jA,
        "../assets/icons/activity/PointMall/successfullyReceived.png": ZA,
        "../assets/icons/activity/PointMall/ticket.png": qA,
        "../assets/icons/activity/PointMall/treasure.png": $A,
        "../assets/icons/activity/PointMall/verified.png": eo,
        "../assets/icons/activity/Turntable/bg.png": to,
        "../assets/icons/activity/Turntable/btn.png": so,
        "../assets/icons/activity/Turntable/money.png": no,
        "../assets/icons/activity/Turntable/turntable.png": ao,
        "../assets/icons/activity/Turntable/zp.png": Ao,
        "../assets/icons/activity/active.svg": oo,
        "../assets/icons/activity/active_b.svg": io,
        "../assets/icons/activity/supportService.png": lo,
        "../assets/icons/common/ar_wallet.png": go,
        "../assets/icons/common/close.png": co,
        "../assets/icons/common/downloadApp/91club.png": ro,
        "../assets/icons/common/downloadApp/development.png": po,
        "../assets/icons/common/downloadApp/development@192.png": _o,
        "../assets/icons/common/downloadApp/development@512.png": uo,
        "../assets/icons/common/downloadApp/sit.png": mo,
        "../assets/icons/common/downloadApp/sit@192.png": vo,
        "../assets/icons/common/downloadApp/sit@512.png": ho,
        "../assets/icons/common/downloadPWAar006.png": wo,
        "../assets/icons/common/downloadPWAar016.png": bo,
        "../assets/icons/common/downloadPWAbdgwin.png": Co,
        "../assets/icons/common/downloadPWAibdg.png": Bo,
        "../assets/icons/common/downloadPWAlottery7.png": yo,
        "../assets/icons/common/downloadPWAokwin.png": Eo,
        "../assets/icons/common/downloadPWApoppg.png": fo,
        "../assets/icons/common/downloadPWAsit.png": Ro,
        "../assets/icons/common/downloadPWAvbdg.png": So,
        "../assets/icons/common/downloadPWAyjlottery.png": Io,
        "../assets/icons/common/missingviebg.png": Uo,
        "../assets/icons/common/missningBg.png": Go,
        "../assets/icons/common/missningLBg.png": Do,
        "../assets/icons/common/newmissingbg.png": Lo,
        "../assets/icons/common/newmissingviebg.png": Mo,
        "../assets/icons/common/rulehead.svg": ko,
        "../assets/icons/common/switch.png": To,
        "../assets/icons/common/upload_add.png": Qo,
        "../assets/icons/common/upload_icon.png": Vo,
        "../assets/icons/common/vector.png": Oo,
        "../assets/icons/electronic/all.png": Fo,
        "../assets/icons/electronic/bigaward.png": No,
        "../assets/icons/electronic/chess.png": Po,
        "../assets/icons/electronic/clicksTopList.png": Wo,
        "../assets/icons/electronic/fish.png": Yo,
        "../assets/icons/electronic/flash.png": xo,
        "../assets/icons/electronic/lottery.png": Ho,
        "../assets/icons/electronic/no1.png": Ko,
        "../assets/icons/electronic/no2.png": Xo,
        "../assets/icons/electronic/no3.png": Jo,
        "../assets/icons/electronic/platformList.png": zo,
        "../assets/icons/electronic/profit.png": jo,
        "../assets/icons/electronic/slot.png": Zo,
        "../assets/icons/electronic/sport.png": qo,
        "../assets/icons/electronic/video.png": $o,
        "../assets/icons/electronic/winning.png": ei,
        "../assets/icons/home/AllGames/all.png": ti,
        "../assets/icons/home/AllGames/allActive.png": si,
        "../assets/icons/home/AllGames/bg.png": ni,
        "../assets/icons/home/AllGames/bgActive.png": ai,
        "../assets/icons/home/AllGames/chess.png": Ai,
        "../assets/icons/home/AllGames/chessActive.png": oi,
        "../assets/icons/home/AllGames/fish.png": ii,
        "../assets/icons/home/AllGames/fishActive.png": li,
        "../assets/icons/home/AllGames/flash.png": gi,
        "../assets/icons/home/AllGames/flashActive.png": ci,
        "../assets/icons/home/AllGames/lottery.png": ri,
        "../assets/icons/home/AllGames/lotteryActive.png": di,
        "../assets/icons/home/AllGames/popular.png": pi,
        "../assets/icons/home/AllGames/popularActive.png": _i,
        "../assets/icons/home/AllGames/slot.png": ui,
        "../assets/icons/home/AllGames/slotActive.png": mi,
        "../assets/icons/home/AllGames/sport.png": vi,
        "../assets/icons/home/AllGames/sportActive.png": hi,
        "../assets/icons/home/AllGames/tab.png": wi,
        "../assets/icons/home/AllGames/tabActive.png": bi,
        "../assets/icons/home/AllGames/video.png": Ci,
        "../assets/icons/home/AllGames/videoActive.png": Bi,
        "../assets/icons/home/AllGames/winner/5D.png": yi,
        "../assets/icons/home/AllGames/winner/AG_Electronic.png": Ei,
        "../assets/icons/home/AllGames/winner/AG_Sport.png": fi,
        "../assets/icons/home/AllGames/winner/AG_Video.png": Ri,
        "../assets/icons/home/AllGames/winner/BB.png": Si,
        "../assets/icons/home/AllGames/winner/BetSoft.png": Ii,
        "../assets/icons/home/AllGames/winner/CMD.png": Ui,
        "../assets/icons/home/AllGames/winner/CQ9.png": Gi,
        "../assets/icons/home/AllGames/winner/Card365.png": Di,
        "../assets/icons/home/AllGames/winner/DG.png": Li,
        "../assets/icons/home/AllGames/winner/EVO_Electronic.png": Mi,
        "../assets/icons/home/AllGames/winner/EVO_Play.png": ki,
        "../assets/icons/home/AllGames/winner/EVO_Video.png": Ti,
        "../assets/icons/home/AllGames/winner/Fish.png": Qi,
        "../assets/icons/home/AllGames/winner/HB.png": Vi,
        "../assets/icons/home/AllGames/winner/Hacksaw.png": Oi,
        "../assets/icons/home/AllGames/winner/IM.png": Fi,
        "../assets/icons/home/AllGames/winner/JDB.png": Ni,
        "../assets/icons/home/AllGames/winner/JILI.png": Pi,
        "../assets/icons/home/AllGames/winner/JOKER.png": Wi,
        "../assets/icons/home/AllGames/winner/K3.png": Yi,
        "../assets/icons/home/AllGames/winner/MG.png": xi,
        "../assets/icons/home/AllGames/winner/PG.png": Hi,
        "../assets/icons/home/AllGames/winner/PP.png": Ki,
        "../assets/icons/home/AllGames/winner/SEXY_Video.png": Xi,
        "../assets/icons/home/AllGames/winner/SaBa.png": Ji,
        "../assets/icons/home/AllGames/winner/SmallGame.png": zi,
        "../assets/icons/home/AllGames/winner/TB.png": ji,
        "../assets/icons/home/AllGames/winner/TB_Chess.png": Zi,
        "../assets/icons/home/AllGames/winner/TrxHash.png": qi,
        "../assets/icons/home/AllGames/winner/V8Card.png": $i,
        "../assets/icons/home/AllGames/winner/WM_Video.png": el,
        "../assets/icons/home/AllGames/winner/Wickets9.png": tl,
        "../assets/icons/home/AllGames/winner/WinGo.png": sl,
        "../assets/icons/home/AllGames/winner/YGG.png": nl,
        "../assets/icons/home/AllLotteryGames/4D/arr-left.svg": al,
        "../assets/icons/home/AllLotteryGames/4D/arr-right.svg": Al,
        "../assets/icons/home/AllLotteryGames/4D/fail.png": ol,
        "../assets/icons/home/AllLotteryGames/4D/howpay.png": il,
        "../assets/icons/home/AllLotteryGames/4D/oddBg.png": ll,
        "../assets/icons/home/AllLotteryGames/4D/odds.png": gl,
        "../assets/icons/home/AllLotteryGames/4D/success.png": cl,
        "../assets/icons/home/AllLotteryGames/K3/bitactive.png": rl,
        "../assets/icons/home/AllLotteryGames/K3/greenBall.png": dl,
        "../assets/icons/home/AllLotteryGames/K3/n1.png": pl,
        "../assets/icons/home/AllLotteryGames/K3/n2.png": _l,
        "../assets/icons/home/AllLotteryGames/K3/n3.png": ul,
        "../assets/icons/home/AllLotteryGames/K3/n4.png": ml,
        "../assets/icons/home/AllLotteryGames/K3/n5.png": vl,
        "../assets/icons/home/AllLotteryGames/K3/n6.png": hl,
        "../assets/icons/home/AllLotteryGames/K3/n7.png": wl,
        "../assets/icons/home/AllLotteryGames/K3/num1.png": bl,
        "../assets/icons/home/AllLotteryGames/K3/num2.png": Cl,
        "../assets/icons/home/AllLotteryGames/K3/num3.png": Bl,
        "../assets/icons/home/AllLotteryGames/K3/num4.png": yl,
        "../assets/icons/home/AllLotteryGames/K3/num5.png": El,
        "../assets/icons/home/AllLotteryGames/K3/num6.png": fl,
        "../assets/icons/home/AllLotteryGames/K3/redBall.png": Rl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/Star.png": Sl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/Triangle.png": Il,
        "../assets/icons/home/AllLotteryGames/NewVietnam/WalletBg.png": Ul,
        "../assets/icons/home/AllLotteryGames/NewVietnam/arrowbottom.png": Gl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg1.png": Dl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg2.png": Ll,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg3.png": Ml,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg4.png": kl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/bg5.png": Tl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/close.png": Ql,
        "../assets/icons/home/AllLotteryGames/NewVietnam/copy.png": Vl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/detail.png": Ol,
        "../assets/icons/home/AllLotteryGames/NewVietnam/fail.png": Fl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/left-border.png": Nl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/left.png": Pl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/middle.png": Wl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/notwinning.png": Yl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/palybg.png": xl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/right-border.png": Hl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/right.png": Kl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/success.png": Xl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/ticketstar.png": Jl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/tip.png": zl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/wallet.png": jl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/warning2.png": Zl,
        "../assets/icons/home/AllLotteryGames/NewVietnam/xosoCity.png": ql,
        "../assets/icons/home/AllLotteryGames/WinGo/PreSaleBg.png": $l,
        "../assets/icons/home/AllLotteryGames/WinGo/add.svg": eg,
        "../assets/icons/home/AllLotteryGames/WinGo/agree-a.png": tg,
        "../assets/icons/home/AllLotteryGames/WinGo/agree-b.png": sg,
        "../assets/icons/home/AllLotteryGames/WinGo/bcakIcon.png": ng,
        "../assets/icons/home/AllLotteryGames/WinGo/copy.png": ag,
        "../assets/icons/home/AllLotteryGames/WinGo/diban.png": Ag,
        "../assets/icons/home/AllLotteryGames/WinGo/headlogo.png": og,
        "../assets/icons/home/AllLotteryGames/WinGo/kefu.png": ig,
        "../assets/icons/home/AllLotteryGames/WinGo/moreBtn.png": lg,
        "../assets/icons/home/AllLotteryGames/WinGo/n0.png": gg,
        "../assets/icons/home/AllLotteryGames/WinGo/n1.png": cg,
        "../assets/icons/home/AllLotteryGames/WinGo/n2.png": rg,
        "../assets/icons/home/AllLotteryGames/WinGo/n3.png": dg,
        "../assets/icons/home/AllLotteryGames/WinGo/n4.png": pg,
        "../assets/icons/home/AllLotteryGames/WinGo/n5.png": _g,
        "../assets/icons/home/AllLotteryGames/WinGo/n6.png": ug,
        "../assets/icons/home/AllLotteryGames/WinGo/n7.png": mg,
        "../assets/icons/home/AllLotteryGames/WinGo/n8.png": vg,
        "../assets/icons/home/AllLotteryGames/WinGo/n9.png": hg,
        "../assets/icons/home/AllLotteryGames/WinGo/reduce.svg": wg,
        "../assets/icons/home/AllLotteryGames/WinGo/refireshIcon.png": bg,
        "../assets/icons/home/AllLotteryGames/WinGo/rule-r.png": Cg,
        "../assets/icons/home/AllLotteryGames/WinGo/rule.png": Bg,
        "../assets/icons/home/AllLotteryGames/WinGo/time.png": yg,
        "../assets/icons/home/AllLotteryGames/WinGo/time_a.png": Eg,
        "../assets/icons/home/AllLotteryGames/WinGo/voice-off.png": fg,
        "../assets/icons/home/AllLotteryGames/WinGo/voice.png": Rg,
        "../assets/icons/home/AllLotteryGames/WinGo/wallet.png": Sg,
        "../assets/icons/home/AllLotteryGames/WinTrx/icon-question.png": Ig,
        "../assets/icons/home/AllLotteryGames/WinTrx/icon-tip.svg": Ug,
        "../assets/icons/home/AllLotteryGames/WinTrx/num0.png": Gg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num1.png": Dg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num2.png": Lg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num3.png": Mg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num4.png": kg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num5.png": Tg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num6.png": Qg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num7.png": Vg,
        "../assets/icons/home/AllLotteryGames/WinTrx/num8.png": Og,
        "../assets/icons/home/AllLotteryGames/WinTrx/num9.png": Fg,
        "../assets/icons/home/AllLotteryGames/WinTrx/numA.png": Ng,
        "../assets/icons/home/AllLotteryGames/WinTrx/numB.png": Pg,
        "../assets/icons/home/AllLotteryGames/WinTrx/numC.png": Wg,
        "../assets/icons/home/AllLotteryGames/WinTrx/numD.png": Yg,
        "../assets/icons/home/AllLotteryGames/WinTrx/numE.png": xg,
        "../assets/icons/home/AllLotteryGames/WinTrx/numF.png": Hg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize0.png": Kg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize1.png": Xg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize2.png": Jg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize3.png": zg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize4.png": jg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize5.png": Zg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize6.png": qg,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize7.png": $g,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize8.png": ec,
        "../assets/icons/home/AllLotteryGames/WinTrx/prize9.png": tc,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeA.png": sc,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeB.png": nc,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeC.png": ac,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeD.png": Ac,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeE.png": oc,
        "../assets/icons/home/AllLotteryGames/WinTrx/prizeF.png": ic,
        "../assets/icons/home/AllLotteryGames/WinTrx/search.svg": lc,
        "../assets/icons/home/AllLotteryGames/WinTrx/timea.png": gc,
        "../assets/icons/home/AllLotteryGames/WinTrx/timeb.png": cc,
        "../assets/icons/home/AllLotteryGames/WinTrx/trxbg.png": rc,
        "../assets/icons/home/AllLotteryGames/binguo/add.png": dc,
        "../assets/icons/home/AllLotteryGames/binguo/bet_tip.png": pc,
        "../assets/icons/home/AllLotteryGames/binguo/binguo_time.png": _c,
        "../assets/icons/home/AllLotteryGames/binguo/binguo_tip.png": uc,
        "../assets/icons/home/AllLotteryGames/binguo/count_icon.png": mc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_1.png": vc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_2.png": hc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_3.png": wc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_4.png": bc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_5.png": Cc,
        "../assets/icons/home/AllLotteryGames/binguo/dice_6.png": Bc,
        "../assets/icons/home/AllLotteryGames/binguo/hidden_money.png": yc,
        "../assets/icons/home/AllLotteryGames/binguo/hot_bg.png": Ec,
        "../assets/icons/home/AllLotteryGames/binguo/hot_top.png": fc,
        "../assets/icons/home/AllLotteryGames/binguo/icon.png": Rc,
        "../assets/icons/home/AllLotteryGames/binguo/lock_money.png": Sc,
        "../assets/icons/home/AllLotteryGames/binguo/record.png": Ic,
        "../assets/icons/home/AllLotteryGames/binguo/record_icon.png": Uc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_bg.png": Gc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_1.png": Dc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_2.png": Lc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_3.png": Mc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_4.png": kc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_5.png": Tc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_dice_6.png": Qc,
        "../assets/icons/home/AllLotteryGames/binguo/rule_tip.png": Vc,
        "../assets/icons/home/AllLotteryGames/binguo/top_1.png": Oc,
        "../assets/icons/home/AllLotteryGames/binguo/top_2.png": Fc,
        "../assets/icons/home/AllLotteryGames/binguo/top_3.png": Nc,
        "../assets/icons/home/AllLotteryGames/binguo/trend1.png": Pc,
        "../assets/icons/home/AllLotteryGames/binguo/trend2.png": Wc,
        "../assets/icons/home/AllLotteryGames/binguo/trend3.png": Yc,
        "../assets/icons/home/AllLotteryGames/binguo/trend_go.png": xc,
        "../assets/icons/home/AllLotteryGames/changlong/icon-5d.png": Hc,
        "../assets/icons/home/AllLotteryGames/changlong/icon-k3.png": Kc,
        "../assets/icons/home/AllLotteryGames/changlong/icon-wg.png": Xc,
        "../assets/icons/home/AllLotteryGames/cover.png": Jc,
        "../assets/icons/home/AllOnlineGames/AG.png": zc,
        "../assets/icons/home/AllOnlineGames/AGActive.png": jc,
        "../assets/icons/home/AllOnlineGames/CMD.png": Zc,
        "../assets/icons/home/AllOnlineGames/CMDActive.png": qc,
        "../assets/icons/home/AllOnlineGames/CQ9.png": $c,
        "../assets/icons/home/AllOnlineGames/CQ9Active.png": er,
        "../assets/icons/home/AllOnlineGames/DG.png": tr,
        "../assets/icons/home/AllOnlineGames/DGActive.png": sr,
        "../assets/icons/home/AllOnlineGames/FISH.png": nr,
        "../assets/icons/home/AllOnlineGames/FISHActive.png": ar,
        "../assets/icons/home/AllOnlineGames/HB.png": Ar,
        "../assets/icons/home/AllOnlineGames/HBActive.png": or,
        "../assets/icons/home/AllOnlineGames/IM.png": ir,
        "../assets/icons/home/AllOnlineGames/IMActive.png": lr,
        "../assets/icons/home/AllOnlineGames/JDB.png": gr,
        "../assets/icons/home/AllOnlineGames/JDBActive.png": cr,
        "../assets/icons/home/AllOnlineGames/MG.png": rr,
        "../assets/icons/home/AllOnlineGames/MGActive.png": dr,
        "../assets/icons/home/AllOnlineGames/PG.png": pr,
        "../assets/icons/home/AllOnlineGames/PGActive.png": _r,
        "../assets/icons/home/AllOnlineGames/SABA.png": ur,
        "../assets/icons/home/AllOnlineGames/SABAActive.png": mr,
        "../assets/icons/home/AllOnlineGames/TB.png": vr,
        "../assets/icons/home/AllOnlineGames/TBActive.png": hr,
        "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/datePickerBg.svg": wr,
        "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/help.png": br,
        "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticket.png": Cr,
        "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticketActive.png": Br,
        "../assets/icons/home/AllOnlineGames/gameList/VietnamLottery/ticketVolume.png": yr,
        "../assets/icons/home/AllOnlineGames/gameList/cover.png": Er,
        "../assets/icons/home/AllOnlineGames/hot.png": fr,
        "../assets/icons/home/AllOnlineGames/hotActive.png": Rr,
        "../assets/icons/home/AllOnlineGames/svg/AG.png": Sr,
        "../assets/icons/home/AllOnlineGames/svg/AGActive.png": Ir,
        "../assets/icons/home/AllOnlineGames/svg/AG_Electronic.png": Ur,
        "../assets/icons/home/AllOnlineGames/svg/AG_ElectronicActive.png": Gr,
        "../assets/icons/home/AllOnlineGames/svg/AG_Fish.png": Dr,
        "../assets/icons/home/AllOnlineGames/svg/AG_FishActive.png": Lr,
        "../assets/icons/home/AllOnlineGames/svg/AG_Sport.png": Mr,
        "../assets/icons/home/AllOnlineGames/svg/AG_SportActive.png": kr,
        "../assets/icons/home/AllOnlineGames/svg/AG_Video.png": Tr,
        "../assets/icons/home/AllOnlineGames/svg/AG_VideoActive.png": Qr,
        "../assets/icons/home/AllOnlineGames/svg/BB.png": Vr,
        "../assets/icons/home/AllOnlineGames/svg/BBActive.png": Or,
        "../assets/icons/home/AllOnlineGames/svg/BG.png": Fr,
        "../assets/icons/home/AllOnlineGames/svg/BGActive.png": Nr,
        "../assets/icons/home/AllOnlineGames/svg/BetSoft.png": Pr,
        "../assets/icons/home/AllOnlineGames/svg/BetSoftActive.png": Wr,
        "../assets/icons/home/AllOnlineGames/svg/CMD.png": Yr,
        "../assets/icons/home/AllOnlineGames/svg/CMDActive.png": xr,
        "../assets/icons/home/AllOnlineGames/svg/CQ9.png": Hr,
        "../assets/icons/home/AllOnlineGames/svg/CQ9Active.png": Kr,
        "../assets/icons/home/AllOnlineGames/svg/Card365.png": Xr,
        "../assets/icons/home/AllOnlineGames/svg/Card365Active.png": Jr,
        "../assets/icons/home/AllOnlineGames/svg/DG.png": zr,
        "../assets/icons/home/AllOnlineGames/svg/DGActive.png": jr,
        "../assets/icons/home/AllOnlineGames/svg/EVO.png": Zr,
        "../assets/icons/home/AllOnlineGames/svg/EVOActive.png": qr,
        "../assets/icons/home/AllOnlineGames/svg/EVOPlay.png": $r,
        "../assets/icons/home/AllOnlineGames/svg/EVOPlayActive.png": ed,
        "../assets/icons/home/AllOnlineGames/svg/HB.png": td,
        "../assets/icons/home/AllOnlineGames/svg/HBActive.png": sd,
        "../assets/icons/home/AllOnlineGames/svg/Hacksaw.png": nd,
        "../assets/icons/home/AllOnlineGames/svg/HacksawActive.png": ad,
        "../assets/icons/home/AllOnlineGames/svg/IM.png": Ad,
        "../assets/icons/home/AllOnlineGames/svg/IMActive.png": od,
        "../assets/icons/home/AllOnlineGames/svg/JDB.png": id,
        "../assets/icons/home/AllOnlineGames/svg/JDBActive.png": ld,
        "../assets/icons/home/AllOnlineGames/svg/JILI.png": gd,
        "../assets/icons/home/AllOnlineGames/svg/JILIActive.png": cd,
        "../assets/icons/home/AllOnlineGames/svg/JOKER.png": rd,
        "../assets/icons/home/AllOnlineGames/svg/JOKERActive.png": dd,
        "../assets/icons/home/AllOnlineGames/svg/MG.png": pd,
        "../assets/icons/home/AllOnlineGames/svg/MGActive.png": _d,
        "../assets/icons/home/AllOnlineGames/svg/Marbles.png": ud,
        "../assets/icons/home/AllOnlineGames/svg/MarblesActive.png": md,
        "../assets/icons/home/AllOnlineGames/svg/OB.png": vd,
        "../assets/icons/home/AllOnlineGames/svg/OBActive.png": hd,
        "../assets/icons/home/AllOnlineGames/svg/PG.png": wd,
        "../assets/icons/home/AllOnlineGames/svg/PGActive.png": bd,
        "../assets/icons/home/AllOnlineGames/svg/PP.png": Cd,
        "../assets/icons/home/AllOnlineGames/svg/PPActive.png": Bd,
        "../assets/icons/home/AllOnlineGames/svg/SABA.png": yd,
        "../assets/icons/home/AllOnlineGames/svg/SABAActive.png": Ed,
        "../assets/icons/home/AllOnlineGames/svg/SEXY.png": fd,
        "../assets/icons/home/AllOnlineGames/svg/SEXYActive.png": Rd,
        "../assets/icons/home/AllOnlineGames/svg/SPRIBE.png": Sd,
        "../assets/icons/home/AllOnlineGames/svg/SPRIBEActive.png": Id,
        "../assets/icons/home/AllOnlineGames/svg/Spribe2.png": Ud,
        "../assets/icons/home/AllOnlineGames/svg/Spribe2Active.png": Gd,
        "../assets/icons/home/AllOnlineGames/svg/TB.png": Dd,
        "../assets/icons/home/AllOnlineGames/svg/TBActive.png": Ld,
        "../assets/icons/home/AllOnlineGames/svg/TB_Chess.png": Md,
        "../assets/icons/home/AllOnlineGames/svg/TB_ChessActive.png": kd,
        "../assets/icons/home/AllOnlineGames/svg/V8Card.png": Td,
        "../assets/icons/home/AllOnlineGames/svg/V8CardActive.png": Qd,
        "../assets/icons/home/AllOnlineGames/svg/YGG.png": Vd,
        "../assets/icons/home/AllOnlineGames/svg/YGGActive.png": Od,
        "../assets/icons/home/StartPage/66lottery.png": Fd,
        "../assets/icons/home/StartPage/ar006.png": Nd,
        "../assets/icons/home/StartPage/ar016.png": Pd,
        "../assets/icons/home/StartPage/ar021.png": Wd,
        "../assets/icons/home/StartPage/basantclub.png": Yd,
        "../assets/icons/home/StartPage/bdgwin.png": xd,
        "../assets/icons/home/StartPage/daman.png": Hd,
        "../assets/icons/home/StartPage/game_dice.png": Kd,
        "../assets/icons/home/StartPage/game_dice_66lottery copy.png": Xd,
        "../assets/icons/home/StartPage/game_dice_66lottery.png": Jd,
        "../assets/icons/home/StartPage/game_dice_ar006.png": zd,
        "../assets/icons/home/StartPage/game_dice_ar016.png": jd,
        "../assets/icons/home/StartPage/game_dice_ar021.png": Zd,
        "../assets/icons/home/StartPage/game_dice_basantclub.png": qd,
        "../assets/icons/home/StartPage/game_dice_bdgwin.png": $d,
        "../assets/icons/home/StartPage/game_dice_bdtgame.png": ep,
        "../assets/icons/home/StartPage/game_dice_daman.png": tp,
        "../assets/icons/home/StartPage/game_dice_ibdg.png": sp,
        "../assets/icons/home/StartPage/game_dice_lottery77.png": np,
        "../assets/icons/home/StartPage/game_dice_okwin.png": ap,
        "../assets/icons/home/StartPage/game_dice_pakgames.png": Ap,
        "../assets/icons/home/StartPage/game_dice_poppg.png": op,
        "../assets/icons/home/StartPage/game_dice_sit.png": ip,
        "../assets/icons/home/StartPage/game_dice_vbdg.png": lp,
        "../assets/icons/home/StartPage/game_dice_yjlottery.png": gp,
        "../assets/icons/home/StartPage/game_p1.png": cp,
        "../assets/icons/home/StartPage/game_p2.png": rp,
        "../assets/icons/home/StartPage/ibdg.png": dp,
        "../assets/icons/home/StartPage/lottery7.png": pp,
        "../assets/icons/home/StartPage/mz9.png": _p,
        "../assets/icons/home/StartPage/okwin.png": up,
        "../assets/icons/home/StartPage/poppg.png": mp,
        "../assets/icons/home/StartPage/sit.png": vp,
        "../assets/icons/home/StartPage/vbdg.png": hp,
        "../assets/icons/home/StartPage/yjlottery.png": wp,
        "../assets/icons/home/adv-bonus.png": bp,
        "../assets/icons/home/all.png": Cp,
        "../assets/icons/home/avatar.png": Bp,
        "../assets/icons/home/banner.png": yp,
        "../assets/icons/home/changlong_bg.png": Ep,
        "../assets/icons/home/changlong_icon.png": fp,
        "../assets/icons/home/dianzi/chess/Card365.png": Rp,
        "../assets/icons/home/dianzi/chess/TB_Chess.png": Sp,
        "../assets/icons/home/dianzi/chess/V8Card.png": Ip,
        "../assets/icons/home/dianzi/live/AG_Video.png": Up,
        "../assets/icons/home/dianzi/live/BB.png": Gp,
        "../assets/icons/home/dianzi/live/BG.png": Dp,
        "../assets/icons/home/dianzi/live/DG.png": Lp,
        "../assets/icons/home/dianzi/live/EVO_Video.png": Mp,
        "../assets/icons/home/dianzi/live/OB.png": kp,
        "../assets/icons/home/dianzi/live/SEXY_Video.png": Tp,
        "../assets/icons/home/dianzi/live/WM_Video.png": Qp,
        "../assets/icons/home/dianzi/logo/AG_Electronic.png": Vp,
        "../assets/icons/home/dianzi/logo/AG_Fish.png": Op,
        "../assets/icons/home/dianzi/logo/AG_Sport.png": Fp,
        "../assets/icons/home/dianzi/logo/AG_Video.png": Np,
        "../assets/icons/home/dianzi/logo/CMD.png": Pp,
        "../assets/icons/home/dianzi/logo/CQ9.png": Wp,
        "../assets/icons/home/dianzi/logo/Card365.png": Yp,
        "../assets/icons/home/dianzi/logo/DG.png": xp,
        "../assets/icons/home/dianzi/logo/EVO.png": Hp,
        "../assets/icons/home/dianzi/logo/EVO_Electronic.png": Kp,
        "../assets/icons/home/dianzi/logo/EVO_Video.png": Xp,
        "../assets/icons/home/dianzi/logo/HB.png": Jp,
        "../assets/icons/home/dianzi/logo/IM.png": zp,
        "../assets/icons/home/dianzi/logo/IM1.png": jp,
        "../assets/icons/home/dianzi/logo/JDB.png": Zp,
        "../assets/icons/home/dianzi/logo/JILI.png": qp,
        "../assets/icons/home/dianzi/logo/MG.png": $p,
        "../assets/icons/home/dianzi/logo/PG.png": e_,
        "../assets/icons/home/dianzi/logo/PP.png": t_,
        "../assets/icons/home/dianzi/logo/SABA.png": s_,
        "../assets/icons/home/dianzi/logo/SEXY_Video.png": n_,
        "../assets/icons/home/dianzi/logo/SPRIBE.png": a_,
        "../assets/icons/home/dianzi/logo/Subtract (1).png": A_,
        "../assets/icons/home/dianzi/logo/Subtract(1).png": o_,
        "../assets/icons/home/dianzi/logo/TB.png": i_,
        "../assets/icons/home/dianzi/logo/TB_Chess.png": l_,
        "../assets/icons/home/dianzi/logo/V8Card.png": g_,
        "../assets/icons/home/dianzi/onlineSlot/AG_Electronic.png": c_,
        "../assets/icons/home/dianzi/onlineSlot/AG_Electronic1.png": r_,
        "../assets/icons/home/dianzi/onlineSlot/CQ9.png": d_,
        "../assets/icons/home/dianzi/onlineSlot/EVOPlay.png": p_,
        "../assets/icons/home/dianzi/onlineSlot/EVO_Electronic.png": __,
        "../assets/icons/home/dianzi/onlineSlot/EVO_Electronic1.png": u_,
        "../assets/icons/home/dianzi/onlineSlot/HB.png": m_,
        "../assets/icons/home/dianzi/onlineSlot/JDB.png": v_,
        "../assets/icons/home/dianzi/onlineSlot/JILI.png": h_,
        "../assets/icons/home/dianzi/onlineSlot/MG.png": w_,
        "../assets/icons/home/dianzi/onlineSlot/PG.png": b_,
        "../assets/icons/home/dianzi/onlineSlot/PP.png": C_,
        "../assets/icons/home/dianzi/onlineSlot/SPRIBE.png": B_,
        "../assets/icons/home/dianzi/onlineSlot/TB.png": y_,
        "../assets/icons/home/dianzi/slotImg/5d.png": E_,
        "../assets/icons/home/dianzi/slotImg/C16Game.png": f_,
        "../assets/icons/home/dianzi/slotImg/LiveWingo.png": R_,
        "../assets/icons/home/dianzi/slotImg/News.png": S_,
        "../assets/icons/home/dianzi/slotImg/Popular.png": I_,
        "../assets/icons/home/dianzi/slotImg/SWZG4d.png": U_,
        "../assets/icons/home/dianzi/slotImg/Safe.png": G_,
        "../assets/icons/home/dianzi/slotImg/Sport.png": D_,
        "../assets/icons/home/dianzi/slotImg/TrxWingo.png": L_,
        "../assets/icons/home/dianzi/slotImg/Vietnam.png": M_,
        "../assets/icons/home/dianzi/slotImg/WinGo.png": k_,
        "../assets/icons/home/dianzi/slotImg/ddwz.png": T_,
        "../assets/icons/home/dianzi/slotImg/im.png": Q_,
        "../assets/icons/home/dianzi/slotImg/jswz.png": V_,
        "../assets/icons/home/dianzi/slotImg/k3.png": O_,
        "../assets/icons/home/dianzi/slotImg/k3_1.png": F_,
        "../assets/icons/home/dianzi/slotImg/saba.png": N_,
        "../assets/icons/home/dianzi/slotImg/slot.png": P_,
        "../assets/icons/home/dianzi/sport/AG_Sport.png": W_,
        "../assets/icons/home/dianzi/sport/CMD.png": Y_,
        "../assets/icons/home/dianzi/sport/IM.png": x_,
        "../assets/icons/home/dianzi/sport/SaBa.png": H_,
        "../assets/icons/home/dianzi/sport/Wickets9.png": K_,
        "../assets/icons/home/gameListIcons/bg.png": X_,
        "../assets/icons/home/gameListIcons/bgActive.png": J_,
        "../assets/icons/home/gameListIcons/bgActiveOld.png": z_,
        "../assets/icons/home/gameListIcons/bgOld.png": j_,
        "../assets/icons/home/gameListIcons/chess.png": Z_,
        "../assets/icons/home/gameListIcons/chessActive.png": q_,
        "../assets/icons/home/gameListIcons/fish.png": $_,
        "../assets/icons/home/gameListIcons/fishActive.png": e1,
        "../assets/icons/home/gameListIcons/flash.png": t1,
        "../assets/icons/home/gameListIcons/flashActive.png": s1,
        "../assets/icons/home/gameListIcons/lottery.png": n1,
        "../assets/icons/home/gameListIcons/lotteryActive.png": a1,
        "../assets/icons/home/gameListIcons/popular.png": A1,
        "../assets/icons/home/gameListIcons/popularActive.png": o1,
        "../assets/icons/home/gameListIcons/slot.png": i1,
        "../assets/icons/home/gameListIcons/slotActive.png": l1,
        "../assets/icons/home/gameListIcons/sport.png": g1,
        "../assets/icons/home/gameListIcons/sportActive.png": c1,
        "../assets/icons/home/gameListIcons/video.png": r1,
        "../assets/icons/home/gameListIcons/videoActive.png": d1,
        "../assets/icons/home/ibdg-avatar.png": p1,
        "../assets/icons/home/icon_BetAmount.png": _1,
        "../assets/icons/home/icon_online.png": u1,
        "../assets/icons/home/icon_sevice.png": m1,
        "../assets/icons/home/icon_user.png": v1,
        "../assets/icons/home/icons/5d.png": h1,
        "../assets/icons/home/icons/k3.png": w1,
        "../assets/icons/home/icons/message.svg": b1,
        "../assets/icons/home/icons/search_icon.svg": C1,
        "../assets/icons/home/icons/top1.png": B1,
        "../assets/icons/home/icons/top2.png": y1,
        "../assets/icons/home/icons/top3.png": E1,
        "../assets/icons/home/icons/trx.png": f1,
        "../assets/icons/home/icons/wingo.png": R1,
        "../assets/icons/home/info-bg.png": S1,
        "../assets/icons/home/loteria.png": I1,
        "../assets/icons/home/lottery/5D.png": U1,
        "../assets/icons/home/lottery/K3.png": G1,
        "../assets/icons/home/lottery/Trx Win.png": D1,
        "../assets/icons/home/lottery/Win Go.png": L1,
        "../assets/icons/home/lottery/XOSO.png": M1,
        "../assets/icons/home/lottery/d55.png": k1,
        "../assets/icons/home/lottery/d56.png": T1,
        "../assets/icons/home/lottery/d57.png": Q1,
        "../assets/icons/home/lottery/d58.png": V1,
        "../assets/icons/home/lottery/k310.png": O1,
        "../assets/icons/home/lottery/k311.png": F1,
        "../assets/icons/home/lottery/k312.png": N1,
        "../assets/icons/home/lottery/k39.png": P1,
        "../assets/icons/home/lottery/trx13.png": W1,
        "../assets/icons/home/lottery/trx14.png": Y1,
        "../assets/icons/home/lottery/trx15.png": x1,
        "../assets/icons/home/lottery/trx16.png": H1,
        "../assets/icons/home/lottery/wingo1.png": K1,
        "../assets/icons/home/lottery/wingo2.png": X1,
        "../assets/icons/home/lottery/wingo3.png": J1,
        "../assets/icons/home/lottery/wingo4.png": z1,
        "../assets/icons/home/luck_bg.png": j1,
        "../assets/icons/home/minGame.png": Z1,
        "../assets/icons/home/notice.png": q1,
        "../assets/icons/home/profit.png": $1,
        "../assets/icons/home/promp_bg.png": eu,
        "../assets/icons/home/promp_left.png": tu,
        "../assets/icons/home/promp_right.png": su,
        "../assets/icons/home/turntable_icon.png": nu,
        "../assets/icons/home/u18.png": au,
        "../assets/icons/home/vbdg-avatar.png": Au,
        "../assets/icons/home/win.png": ou,
        "../assets/icons/home/winning_bg.png": iu,
        "../assets/icons/home/winning_bg2.png": lu,
        "../assets/icons/home/withdraw-top.png": gu,
        "../assets/icons/ico/bitbug_favicon1.ico": cu,
        "../assets/icons/images/All.png": ru,
        "../assets/icons/images/DailyProfitRank/border1.png": du,
        "../assets/icons/images/DailyProfitRank/border2.png": pu,
        "../assets/icons/images/DailyProfitRank/border3.png": _u,
        "../assets/icons/images/DailyProfitRank/crown1.png": uu,
        "../assets/icons/images/DailyProfitRank/crown2.png": mu,
        "../assets/icons/images/DailyProfitRank/crown3.png": vu,
        "../assets/icons/images/DailyProfitRank/place1.png": hu,
        "../assets/icons/images/DailyProfitRank/place2.png": wu,
        "../assets/icons/images/DailyProfitRank/place3.png": bu,
        "../assets/icons/images/DailyProfitRank/stage.png": Cu,
        "../assets/icons/images/avatar.png": Bu,
        "../assets/icons/images/avatar1.png": yu,
        "../assets/icons/images/empty.png": Eu,
        "../assets/icons/images/gameDefault.png": fu,
        "../assets/icons/images/loading.gif": Ru,
        "../assets/icons/images/logo.png": Su,
        "../assets/icons/images/main/headerBg.png": Iu,
        "../assets/icons/images/promotion/heroImg.png": Uu,
        "../assets/icons/images/promotion/totalIncomeBg.png": Gu,
        "../assets/icons/images/promotionBg.png": Du,
        "../assets/icons/images/tabBarBg.png": Lu,
        "../assets/icons/languages/ar.png": Mu,
        "../assets/icons/languages/bd.png": ku,
        "../assets/icons/languages/bra.png": Tu,
        "../assets/icons/languages/en.png": Qu,
        "../assets/icons/languages/hd.png": Vu,
        "../assets/icons/languages/id.png": Ou,
        "../assets/icons/languages/japan.png": Fu,
        "../assets/icons/languages/korea.png": Nu,
        "../assets/icons/languages/md.png": Pu,
        "../assets/icons/languages/my.png": Wu,
        "../assets/icons/languages/ph.png": Yu,
        "../assets/icons/languages/pk.png": xu,
        "../assets/icons/languages/rus.png": Hu,
        "../assets/icons/languages/th.png": Ku,
        "../assets/icons/languages/vi.png": Xu,
        "../assets/icons/languages/zh.png": Ju,
        "../assets/icons/login/cellphone.png": zu,
        "../assets/icons/login/close.png": ju,
        "../assets/icons/login/eyeInvisible.png": Zu,
        "../assets/icons/login/eyeVisible.png": qu,
        "../assets/icons/login/googleIcon.png": $u,
        "../assets/icons/login/iconservr-r.png": em,
        "../assets/icons/login/iconservr.png": tm,
        "../assets/icons/login/invitation.png": sm,
        "../assets/icons/login/leftArrow.png": nm,
        "../assets/icons/login/newlogin/customer.png": am,
        "../assets/icons/login/newlogin/email.png": Am,
        "../assets/icons/login/newlogin/emailactive.png": om,
        "../assets/icons/login/newlogin/emailnumber.png": im,
        "../assets/icons/login/newlogin/forgetpassword.png": lm,
        "../assets/icons/login/newlogin/other.png": gm,
        "../assets/icons/login/newlogin/otheractive.png": cm,
        "../assets/icons/login/newlogin/phone.png": rm,
        "../assets/icons/login/newlogin/phoneactive.png": dm,
        "../assets/icons/login/newlogin/tip.png": pm,
        "../assets/icons/login/password.png": _m,
        "../assets/icons/login/verify.png": um,
        "../assets/icons/main/10.png": mm,
        "../assets/icons/main/Avatar/1.png": vm,
        "../assets/icons/main/Avatar/10.png": hm,
        "../assets/icons/main/Avatar/11.png": wm,
        "../assets/icons/main/Avatar/12.png": bm,
        "../assets/icons/main/Avatar/13.png": Cm,
        "../assets/icons/main/Avatar/14.png": Bm,
        "../assets/icons/main/Avatar/15.png": ym,
        "../assets/icons/main/Avatar/16.png": Em,
        "../assets/icons/main/Avatar/17.png": fm,
        "../assets/icons/main/Avatar/18.png": Rm,
        "../assets/icons/main/Avatar/19.png": Sm,
        "../assets/icons/main/Avatar/2.png": Im,
        "../assets/icons/main/Avatar/20.png": Um,
        "../assets/icons/main/Avatar/3.png": Gm,
        "../assets/icons/main/Avatar/4.png": Dm,
        "../assets/icons/main/Avatar/5.png": Lm,
        "../assets/icons/main/Avatar/6.png": Mm,
        "../assets/icons/main/Avatar/7.png": km,
        "../assets/icons/main/Avatar/8.png": Tm,
        "../assets/icons/main/Avatar/9.png": Qm,
        "../assets/icons/main/BetRecord/-1.png": Vm,
        "../assets/icons/main/BetRecord/1.png": Om,
        "../assets/icons/main/BetRecord/10.png": Fm,
        "../assets/icons/main/BetRecord/11.png": Nm,
        "../assets/icons/main/BetRecord/12.png": Pm,
        "../assets/icons/main/BetRecord/13.png": Wm,
        "../assets/icons/main/BetRecord/14.png": Ym,
        "../assets/icons/main/BetRecord/15.png": xm,
        "../assets/icons/main/BetRecord/16.png": Hm,
        "../assets/icons/main/BetRecord/17.png": Km,
        "../assets/icons/main/BetRecord/18.png": Xm,
        "../assets/icons/main/BetRecord/19.png": Jm,
        "../assets/icons/main/BetRecord/2.png": zm,
        "../assets/icons/main/BetRecord/20.png": jm,
        "../assets/icons/main/BetRecord/21.png": Zm,
        "../assets/icons/main/BetRecord/22.png": qm,
        "../assets/icons/main/BetRecord/23.png": $m,
        "../assets/icons/main/BetRecord/24.png": ev,
        "../assets/icons/main/BetRecord/25.png": tv,
        "../assets/icons/main/BetRecord/26.png": sv,
        "../assets/icons/main/BetRecord/27.png": nv,
        "../assets/icons/main/BetRecord/29.png": av,
        "../assets/icons/main/BetRecord/3.png": Av,
        "../assets/icons/main/BetRecord/30.png": ov,
        "../assets/icons/main/BetRecord/31.png": iv,
        "../assets/icons/main/BetRecord/33.png": lv,
        "../assets/icons/main/BetRecord/35.png": gv,
        "../assets/icons/main/BetRecord/4.png": cv,
        "../assets/icons/main/BetRecord/5.png": rv,
        "../assets/icons/main/BetRecord/6.png": dv,
        "../assets/icons/main/BetRecord/7.png": pv,
        "../assets/icons/main/BetRecord/8.png": _v,
        "../assets/icons/main/BetRecord/acitve/-1.png": uv,
        "../assets/icons/main/BetRecord/acitve/1.png": mv,
        "../assets/icons/main/BetRecord/acitve/10.png": vv,
        "../assets/icons/main/BetRecord/acitve/11.png": hv,
        "../assets/icons/main/BetRecord/acitve/12.png": wv,
        "../assets/icons/main/BetRecord/acitve/14.png": bv,
        "../assets/icons/main/BetRecord/acitve/16.png": Cv,
        "../assets/icons/main/BetRecord/acitve/17.png": Bv,
        "../assets/icons/main/BetRecord/acitve/18.png": yv,
        "../assets/icons/main/BetRecord/acitve/19.png": Ev,
        "../assets/icons/main/BetRecord/acitve/2.png": fv,
        "../assets/icons/main/BetRecord/acitve/20.png": Rv,
        "../assets/icons/main/BetRecord/acitve/21.png": Sv,
        "../assets/icons/main/BetRecord/acitve/22.png": Iv,
        "../assets/icons/main/BetRecord/acitve/23.png": Uv,
        "../assets/icons/main/BetRecord/acitve/24.png": Gv,
        "../assets/icons/main/BetRecord/acitve/25.png": Dv,
        "../assets/icons/main/BetRecord/acitve/26.png": Lv,
        "../assets/icons/main/BetRecord/acitve/27.png": Mv,
        "../assets/icons/main/BetRecord/acitve/29.png": kv,
        "../assets/icons/main/BetRecord/acitve/3.png": Tv,
        "../assets/icons/main/BetRecord/acitve/30.png": Qv,
        "../assets/icons/main/BetRecord/acitve/31.png": Vv,
        "../assets/icons/main/BetRecord/acitve/33.png": Ov,
        "../assets/icons/main/BetRecord/acitve/35.png": Fv,
        "../assets/icons/main/BetRecord/acitve/4.png": Nv,
        "../assets/icons/main/BetRecord/acitve/5.png": Pv,
        "../assets/icons/main/BetRecord/acitve/6.png": Wv,
        "../assets/icons/main/BetRecord/acitve/7.png": Yv,
        "../assets/icons/main/BetRecord/acitve/IM.png": xv,
        "../assets/icons/main/BetRecord/icon (16).png": Hv,
        "../assets/icons/main/CStype1.png": Kv,
        "../assets/icons/main/CStype2.png": Xv,
        "../assets/icons/main/CStype3.png": Jv,
        "../assets/icons/main/CStype4.png": zv,
        "../assets/icons/main/CStype5.png": jv,
        "../assets/icons/main/CStype6.png": Zv,
        "../assets/icons/main/CStype7.png": qv,
        "../assets/icons/main/EmailIcon.png": $v,
        "../assets/icons/main/GooglePolygon.png": eh,
        "../assets/icons/main/GoogleSubtract.png": th,
        "../assets/icons/main/GoogleTip.png": sh,
        "../assets/icons/main/Laundry/Vector.png": nh,
        "../assets/icons/main/Laundry/promptImg.png": ah,
        "../assets/icons/main/Laundry/right.png": Ah,
        "../assets/icons/main/Laundry/ruleicon.png": oh,
        "../assets/icons/main/Laundry/superjackpotHome.png": ih,
        "../assets/icons/main/Laundry/wallet.png": lh,
        "../assets/icons/main/Laundry/zs.png": gh,
        "../assets/icons/main/MyCoinsBanner.png": ch,
        "../assets/icons/main/MyCoinsBanner2.png": rh,
        "../assets/icons/main/StrongBoxRecordBg.png": dh,
        "../assets/icons/main/Subtract.png": ph,
        "../assets/icons/main/Super/Group.png": _h,
        "../assets/icons/main/Super/Grouptip.png": uh,
        "../assets/icons/main/Super/close.svg": mh,
        "../assets/icons/main/Super/icon.png": vh,
        "../assets/icons/main/Super/superJackpot.png": hh,
        "../assets/icons/main/TotalAssetsBg.png": wh,
        "../assets/icons/main/VipIcon.png": bh,
        "../assets/icons/main/about.png": Ch,
        "../assets/icons/main/aboutBg.png": Bh,
        "../assets/icons/main/aboutCenter.png": yh,
        "../assets/icons/main/balanceIcon.png": Eh,
        "../assets/icons/main/before_cire.png": fh,
        "../assets/icons/main/betHistory.png": Rh,
        "../assets/icons/main/betHistoryShadow.png": Sh,
        "../assets/icons/main/betInfoStep.png": Ih,
        "../assets/icons/main/betResultStep.png": Uh,
        "../assets/icons/main/betSixInfoStep.png": Gh,
        "../assets/icons/main/betSportStep.png": Dh,
        "../assets/icons/main/bindemailsuccess.png": Lh,
        "../assets/icons/main/chessStepIcon.png": Mh,
        "../assets/icons/main/clear.png": kh,
        "../assets/icons/main/clearIcon.png": Th,
        "../assets/icons/main/close.png": Qh,
        "../assets/icons/main/close_B.png": Vh,
        "../assets/icons/main/copy.png": Oh,
        "../assets/icons/main/copyIcon.png": Fh,
        "../assets/icons/main/cps.png": Nh,
        "../assets/icons/main/customerBg.png": Ph,
        "../assets/icons/main/dialogNickname.png": Wh,
        "../assets/icons/main/down.png": Yh,
        "../assets/icons/main/dropDown.png": xh,
        "../assets/icons/main/editPencil.png": Hh,
        "../assets/icons/main/editPhoneIcon.png": Kh,
        "../assets/icons/main/editPswIcon.png": Xh,
        "../assets/icons/main/exchangeIcon.png": Jh,
        "../assets/icons/main/feedbackImg.png": zh,
        "../assets/icons/main/gRecord.png": jh,
        "../assets/icons/main/gameStatsSteps.png": Zh,
        "../assets/icons/main/gift.png": qh,
        "../assets/icons/main/giftFolder.png": $h,
        "../assets/icons/main/giftIcon.png": ew,
        "../assets/icons/main/googleKey.png": tw,
        "../assets/icons/main/googleValidation.png": sw,
        "../assets/icons/main/googleVerifyBg.png": nw,
        "../assets/icons/main/guide.png": aw,
        "../assets/icons/main/gverifyDownload.png": Aw,
        "../assets/icons/main/iconChess.png": ow,
        "../assets/icons/main/iconElectric.png": iw,
        "../assets/icons/main/iconFishing.png": lw,
        "../assets/icons/main/iconLottery.png": gw,
        "../assets/icons/main/iconMiniGame.png": cw,
        "../assets/icons/main/iconPhysics.png": rw,
        "../assets/icons/main/iconRealPerson.png": dw,
        "../assets/icons/main/iconSlots.png": pw,
        "../assets/icons/main/incomeIcon.png": _w,
        "../assets/icons/main/invitationBonus.png": uw,
        "../assets/icons/main/invitation_bg.png": mw,
        "../assets/icons/main/inviteIcon.png": vw,
        "../assets/icons/main/inviterecord.svg": hw,
        "../assets/icons/main/inviterule.svg": ww,
        "../assets/icons/main/kBg.png": bw,
        "../assets/icons/main/languageIcon.png": Cw,
        "../assets/icons/main/languageSwitch.png": Bw,
        "../assets/icons/main/laundryIcon.png": yw,
        "../assets/icons/main/logout.png": Ew,
        "../assets/icons/main/loterry.png": fw,
        "../assets/icons/main/lotteryHistory.png": Rw,
        "../assets/icons/main/lotteryIcon.png": Sw,
        "../assets/icons/main/moonBar.png": Iw,
        "../assets/icons/main/myCoin.png": Uw,
        "../assets/icons/main/myWithdrawHistory.png": Gw,
        "../assets/icons/main/mycoins_bg.png": Dw,
        "../assets/icons/main/mylottery.png": Lw,
        "../assets/icons/main/nextIcon.png": Mw,
        "../assets/icons/main/notification.png": kw,
        "../assets/icons/main/notificationCenter.png": Tw,
        "../assets/icons/main/notificationIcon 2.png": Qw,
        "../assets/icons/main/notificationIcon.png": Vw,
        "../assets/icons/main/notifyIcon.png": Ow,
        "../assets/icons/main/numberBG.png": Fw,
        "../assets/icons/main/orderIcon.png": Nw,
        "../assets/icons/main/points.png": Pw,
        "../assets/icons/main/pointsSmallIncon.png": Ww,
        "../assets/icons/main/privacyIcon.png": Yw,
        "../assets/icons/main/productOrders.png": xw,
        "../assets/icons/main/pswLock.png": Hw,
        "../assets/icons/main/rechargeHistory.png": Kw,
        "../assets/icons/main/rechargeIcon.png": Xw,
        "../assets/icons/main/recordIcon.png": Jw,
        "../assets/icons/main/redPacket.png": zw,
        "../assets/icons/main/redPacketShadow.png": jw,
        "../assets/icons/main/refresh.png": Zw,
        "../assets/icons/main/righticon.svg": qw,
        "../assets/icons/main/riskProtocal.png": $w,
        "../assets/icons/main/safetyIcon.png": eb,
        "../assets/icons/main/serviceCenter.png": tb,
        "../assets/icons/main/settingCenter.png": sb,
        "../assets/icons/main/settings.png": nb,
        "../assets/icons/main/sliderNum.png": ab,
        "../assets/icons/main/statsIcon.png": Ab,
        "../assets/icons/main/suggestionCenter.png": ob,
        "../assets/icons/main/sugguesions.png": ib,
        "../assets/icons/main/superIcon.png": lb,
        "../assets/icons/main/support.png": gb,
        "../assets/icons/main/tipIcon.png": cb,
        "../assets/icons/main/tradeHistory.png": rb,
        "../assets/icons/main/tradeHistoryShadow.png": db,
        "../assets/icons/main/transAction/trans.png": pb,
        "../assets/icons/main/transferInIcon.png": _b,
        "../assets/icons/main/transferOutIcon.png": ub,
        "../assets/icons/main/trianglered.png": mb,
        "../assets/icons/main/unfinish.svg": vb,
        "../assets/icons/main/uploadCamera.png": hb,
        "../assets/icons/main/vault.png": wb,
        "../assets/icons/main/vaultSmallIcon.png": bb,
        "../assets/icons/main/versionUpdate.png": Cb,
        "../assets/icons/main/vip1.png": Bb,
        "../assets/icons/main/vip10.png": yb,
        "../assets/icons/main/vip2.png": Eb,
        "../assets/icons/main/vip3.png": fb,
        "../assets/icons/main/vip4.png": Rb,
        "../assets/icons/main/vip5.png": Sb,
        "../assets/icons/main/vip6.png": Ib,
        "../assets/icons/main/vip7.png": Ub,
        "../assets/icons/main/vip8.png": Gb,
        "../assets/icons/main/vip9.png": Db,
        "../assets/icons/main/wallet.png": Lb,
        "../assets/icons/main/wallets.png": Mb,
        "../assets/icons/main/widthdrawBlue.png": kb,
        "../assets/icons/main/withdrawHistory.png": Tb,
        "../assets/icons/main/zs.png": Qb,
        "../assets/icons/promotion/TeamPartner/banner.png": Vb,
        "../assets/icons/promotion/TeamPartner/box.png": Ob,
        "../assets/icons/promotion/TeamReport/roundIcon.png": Fb,
        "../assets/icons/promotion/commission.png": Nb,
        "../assets/icons/promotion/commission/betInfoStep.png": Pb,
        "../assets/icons/promotion/commission/bg.png": Wb,
        "../assets/icons/promotion/commission/line.png": Yb,
        "../assets/icons/promotion/copy_code.png": xb,
        "../assets/icons/promotion/crown.png": Hb,
        "../assets/icons/promotion/direct.png": Kb,
        "../assets/icons/promotion/group.png": Xb,
        "../assets/icons/promotion/invitation.png": Jb,
        "../assets/icons/promotion/invite.png": zb,
        "../assets/icons/promotion/invite_reg.png": jb,
        "../assets/icons/promotion/money.png": Zb,
        "../assets/icons/promotion/promotionShare/bank.png": qb,
        "../assets/icons/promotion/promotionShare/bg1.png": $b,
        "../assets/icons/promotion/promotionShare/logo.png": e0,
        "../assets/icons/promotion/promotionShare/poster.png": t0,
        "../assets/icons/promotion/promotionShare/trucktick.png": s0,
        "../assets/icons/promotion/promotionbg.png": n0,
        "../assets/icons/promotion/rank-1.png": a0,
        "../assets/icons/promotion/rank-2.png": A0,
        "../assets/icons/promotion/rank-3.png": o0,
        "../assets/icons/promotion/rankList/directSubordinate.png": i0,
        "../assets/icons/promotion/rankList/extraBonus.png": l0,
        "../assets/icons/promotion/rankList/groupSubordinate.png": g0,
        "../assets/icons/promotion/rankList/wallet.png": c0,
        "../assets/icons/promotion/rebateRatio.png": r0,
        "../assets/icons/promotion/receive.png": d0,
        "../assets/icons/promotion/right_arrow.png": p0,
        "../assets/icons/promotion/rule/Lv0.png": _0,
        "../assets/icons/promotion/rule/Lv1.png": u0,
        "../assets/icons/promotion/rule/Lv2.png": m0,
        "../assets/icons/promotion/rule/Lv3.png": v0,
        "../assets/icons/promotion/rule/Lv4.png": h0,
        "../assets/icons/promotion/rule/Lv5.png": w0,
        "../assets/icons/promotion/rule/Lv6.png": b0,
        "../assets/icons/promotion/rule/Lv7.png": C0,
        "../assets/icons/promotion/rule/lv.png": B0,
        "../assets/icons/promotion/searchIcon.png": y0,
        "../assets/icons/promotion/server.png": E0,
        "../assets/icons/promotion/serverbg.png": f0,
        "../assets/icons/promotion/subordinate.png": R0,
        "../assets/icons/promotion/team_partner.png": S0,
        "../assets/icons/promotion/team_port.png": I0,
        "../assets/icons/promotion/u1.png": U0,
        "../assets/icons/promotion/u2.png": G0,
        "../assets/icons/promotion/wallet.png": D0,
        "../assets/icons/searchBarIcons/searchIcon.png": L0,
        "../assets/icons/searchBarIcons/searchIcon1.png": M0,
        "../assets/icons/svg/Line.svg": k0,
        "../assets/icons/svg/activity.svg": T0,
        "../assets/icons/svg/anbg.svg": Q0,
        "../assets/icons/svg/changlong.svg": V0,
        "../assets/icons/svg/chat.svg": O0,
        "../assets/icons/svg/close.svg": F0,
        "../assets/icons/svg/copy.svg": N0,
        "../assets/icons/svg/down.svg": P0,
        "../assets/icons/svg/errorTip.svg": W0,
        "../assets/icons/svg/eye.svg": Y0,
        "../assets/icons/svg/game_logo/AG.svg": x0,
        "../assets/icons/svg/game_logo/BB.svg": H0,
        "../assets/icons/svg/game_logo/CARD365.svg": K0,
        "../assets/icons/svg/game_logo/CMD.svg": X0,
        "../assets/icons/svg/game_logo/CQ9.svg": J0,
        "../assets/icons/svg/game_logo/DG.svg": z0,
        "../assets/icons/svg/game_logo/EVO.svg": j0,
        "../assets/icons/svg/game_logo/FISH.svg": Z0,
        "../assets/icons/svg/game_logo/HB.svg": q0,
        "../assets/icons/svg/game_logo/IM.svg": $0,
        "../assets/icons/svg/game_logo/JDB.svg": e2,
        "../assets/icons/svg/game_logo/JILI.svg": t2,
        "../assets/icons/svg/game_logo/MG.svg": s2,
        "../assets/icons/svg/game_logo/PG.svg": n2,
        "../assets/icons/svg/game_logo/PP.svg": a2,
        "../assets/icons/svg/game_logo/SABA.svg": A2,
        "../assets/icons/svg/game_logo/SEXY.svg": o2,
        "../assets/icons/svg/game_logo/SPRIBE.svg": i2,
        "../assets/icons/svg/game_logo/TB.svg": l2,
        "../assets/icons/svg/game_logo/V8CARD.svg": g2,
        "../assets/icons/svg/game_logo/WICKETS9.svg": c2,
        "../assets/icons/svg/game_logo/WM.svg": r2,
        "../assets/icons/svg/home.svg": d2,
        "../assets/icons/svg/hot.svg": p2,
        "../assets/icons/svg/main.svg": _2,
        "../assets/icons/svg/nbg.svg": u2,
        "../assets/icons/svg/play.svg": m2,
        "../assets/icons/svg/playactive.svg": v2,
        "../assets/icons/svg/promotion.svg": h2,
        "../assets/icons/svg/resultanbg.svg": w2,
        "../assets/icons/svg/subtract.svg": b2,
        "../assets/icons/svg/voice.svg": C2,
        "../assets/icons/svg/wallet.svg": B2,
        "../assets/icons/tabBarIcons/activity.svg": y2,
        "../assets/icons/tabBarIcons/chat.svg": E2,
        "../assets/icons/tabBarIcons/home.svg": f2,
        "../assets/icons/tabBarIcons/main.svg": R2,
        "../assets/icons/tabBarIcons/promotion.svg": S2,
        "../assets/icons/tabBarIcons/wallet.svg": I2,
        "../assets/icons/vip/MonthlyReward.png": U2,
        "../assets/icons/vip/RebateDetails/0.svg": G2,
        "../assets/icons/vip/RebateDetails/1.svg": D2,
        "../assets/icons/vip/RebateDetails/10.svg": L2,
        "../assets/icons/vip/RebateDetails/2.svg": M2,
        "../assets/icons/vip/RebateDetails/3.svg": k2,
        "../assets/icons/vip/RebateDetails/4.svg": T2,
        "../assets/icons/vip/RebateDetails/5.svg": Q2,
        "../assets/icons/vip/RebateDetails/6.svg": V2,
        "../assets/icons/vip/RebateDetails/7.svg": O2,
        "../assets/icons/vip/RebateDetails/8.svg": F2,
        "../assets/icons/vip/RebateDetails/9.svg": N2,
        "../assets/icons/vip/RebateDetails/Circle-1.png": P2,
        "../assets/icons/vip/RebateDetails/Circle-2.png": W2,
        "../assets/icons/vip/award.png": Y2,
        "../assets/icons/vip/crown.png": x2,
        "../assets/icons/vip/diamond.png": H2,
        "../assets/icons/vip/giftBag.png": K2,
        "../assets/icons/vip/gold.png": X2,
        "../assets/icons/vip/grade/0.png": J2,
        "../assets/icons/vip/grade/1.png": z2,
        "../assets/icons/vip/grade/10.png": j2,
        "../assets/icons/vip/grade/2.png": Z2,
        "../assets/icons/vip/grade/3.png": q2,
        "../assets/icons/vip/grade/4.png": $2,
        "../assets/icons/vip/grade/5.png": eC,
        "../assets/icons/vip/grade/6.png": tC,
        "../assets/icons/vip/grade/7.png": sC,
        "../assets/icons/vip/grade/8.png": nC,
        "../assets/icons/vip/grade/9.png": aC,
        "../assets/icons/vip/insurance.png": AC,
        "../assets/icons/vip/insurance1.png": oC,
        "../assets/icons/vip/love.png": iC,
        "../assets/icons/vip/love2.png": lC,
        "../assets/icons/vip/myWelfare/welfare1.png": gC,
        "../assets/icons/vip/myWelfare/welfare2.png": cC,
        "../assets/icons/vip/myWelfare/welfare3.png": rC,
        "../assets/icons/vip/myWelfare/welfare4.png": dC,
        "../assets/icons/vip/myWelfare/welfare5.png": pC,
        "../assets/icons/vip/safeBox.png": _C,
        "../assets/icons/vip/succeed.png": uC,
        "../assets/icons/vip/swiper/HaveReached.png": mC,
        "../assets/icons/vip/swiper/bg/bg1.png": vC,
        "../assets/icons/vip/swiper/bg/bg10.png": hC,
        "../assets/icons/vip/swiper/bg/bg2.png": wC,
        "../assets/icons/vip/swiper/bg/bg3.png": bC,
        "../assets/icons/vip/swiper/bg/bg4.png": CC,
        "../assets/icons/vip/swiper/bg/bg5.png": BC,
        "../assets/icons/vip/swiper/bg/bg6.png": yC,
        "../assets/icons/vip/swiper/bg/bg7.png": EC,
        "../assets/icons/vip/swiper/bg/bg8.png": fC,
        "../assets/icons/vip/swiper/bg/bg9.png": RC,
        "../assets/icons/vip/swiper/crown/1.png": SC,
        "../assets/icons/vip/swiper/crown/2.png": IC,
        "../assets/icons/vip/swiper/logo/1.png": UC,
        "../assets/icons/vip/swiper/logo/10.png": GC,
        "../assets/icons/vip/swiper/logo/2.png": DC,
        "../assets/icons/vip/swiper/logo/3.png": LC,
        "../assets/icons/vip/swiper/logo/4.png": MC,
        "../assets/icons/vip/swiper/logo/5.png": kC,
        "../assets/icons/vip/swiper/logo/6.png": TC,
        "../assets/icons/vip/swiper/logo/7.png": QC,
        "../assets/icons/vip/swiper/logo/8.png": VC,
        "../assets/icons/vip/swiper/logo/9.png": OC,
        "../assets/icons/vip/swiper/ununlocked.png": FC,
        "../assets/icons/vip/wallet.png": NC,
        "../assets/icons/vip/wallet1.png": PC,
        "../assets/icons/vip/weal/1.png": WC,
        "../assets/icons/vip/weal/2.png": YC,
        "../assets/icons/vip/weal/3.png": xC,
        "../assets/icons/vip/weal/4.png": HC,
        "../assets/icons/vip/weal/5.png": KC,
        "../assets/icons/vip/weal/weal3.png": XC,
        "../assets/icons/vip/weal/weal4.png": JC,
        "../assets/icons/vip/weal/weal5.png": zC,
        "../assets/icons/wallet/AG.png": jC,
        "../assets/icons/wallet/AG_Video.png": ZC,
        "../assets/icons/wallet/ArPayBackground.svg": qC,
        "../assets/icons/wallet/Ar_Gift.svg": $C,
        "../assets/icons/wallet/BetSoft.png": e4,
        "../assets/icons/wallet/CMD.png": t4,
        "../assets/icons/wallet/CQ9.png": s4,
        "../assets/icons/wallet/Card365.png": n4,
        "../assets/icons/wallet/DG.png": a4,
        "../assets/icons/wallet/EVOPlay.png": A4,
        "../assets/icons/wallet/EVO_Electronic.png": o4,
        "../assets/icons/wallet/EVO_Video.png": i4,
        "../assets/icons/wallet/HB.png": l4,
        "../assets/icons/wallet/Hacksaw.png": g4,
        "../assets/icons/wallet/IM.png": c4,
        "../assets/icons/wallet/JDB.png": r4,
        "../assets/icons/wallet/JILI.png": d4,
        "../assets/icons/wallet/Joker.png": p4,
        "../assets/icons/wallet/Lottery.png": _4,
        "../assets/icons/wallet/MG.png": u4,
        "../assets/icons/wallet/PG.png": m4,
        "../assets/icons/wallet/PP.png": v4,
        "../assets/icons/wallet/SEXY_Video.png": h4,
        "../assets/icons/wallet/SaBa.png": w4,
        "../assets/icons/wallet/TB.png": b4,
        "../assets/icons/wallet/TB_Chess.png": C4,
        "../assets/icons/wallet/V8Card.png": B4,
        "../assets/icons/wallet/WM_Video.png": y4,
        "../assets/icons/wallet/Wickets9.png": E4,
        "../assets/icons/wallet/YGG.png": f4,
        "../assets/icons/wallet/ar1.png": R4,
        "../assets/icons/wallet/ar2.png": S4,
        "../assets/icons/wallet/ar_appeal.png": I4,
        "../assets/icons/wallet/ar_success.png": U4,
        "../assets/icons/wallet/copy.png": G4,
        "../assets/icons/wallet/hint.png": D4,
        "../assets/icons/wallet/recharge/C2Chelp.png": L4,
        "../assets/icons/wallet/recharge/amount_error.png": M4,
        "../assets/icons/wallet/recharge/appeal.png": k4,
        "../assets/icons/wallet/recharge/appeal_state.png": T4,
        "../assets/icons/wallet/recharge/bank_card.png": Q4,
        "../assets/icons/wallet/recharge/bank_card_active.png": V4,
        "../assets/icons/wallet/recharge/banktobank.png": O4,
        "../assets/icons/wallet/recharge/cancel.png": F4,
        "../assets/icons/wallet/recharge/chongzhi.png": N4,
        "../assets/icons/wallet/recharge/cip.png": P4,
        "../assets/icons/wallet/recharge/clean.png": W4,
        "../assets/icons/wallet/recharge/close.png": Y4,
        "../assets/icons/wallet/recharge/coin.png": x4,
        "../assets/icons/wallet/recharge/copy.png": H4,
        "../assets/icons/wallet/recharge/copy1.png": K4,
        "../assets/icons/wallet/recharge/detail/appeal.png": X4,
        "../assets/icons/wallet/recharge/detail/bank.png": J4,
        "../assets/icons/wallet/recharge/detail/kbz.png": z4,
        "../assets/icons/wallet/recharge/detail/kbz_icon.png": j4,
        "../assets/icons/wallet/recharge/detail/slot_wallet.png": Z4,
        "../assets/icons/wallet/recharge/detail/wave.png": q4,
        "../assets/icons/wallet/recharge/detail/wave_icon.png": $4,
        "../assets/icons/wallet/recharge/detail_upi_icon.png": e3,
        "../assets/icons/wallet/recharge/eth.png": t3,
        "../assets/icons/wallet/recharge/ewallet.png": s3,
        "../assets/icons/wallet/recharge/fail.png": n3,
        "../assets/icons/wallet/recharge/gift.png": a3,
        "../assets/icons/wallet/recharge/google_pay.png": A3,
        "../assets/icons/wallet/recharge/left_arrow.png": o3,
        "../assets/icons/wallet/recharge/mainChain.png": i3,
        "../assets/icons/wallet/recharge/moneyicon.png": l3,
        "../assets/icons/wallet/recharge/online_active.png": g3,
        "../assets/icons/wallet/recharge/onlinepay.png": c3,
        "../assets/icons/wallet/recharge/onlinepay2.png": r3,
        "../assets/icons/wallet/recharge/onlinepay_active.png": d3,
        "../assets/icons/wallet/recharge/other_bank.png": p3,
        "../assets/icons/wallet/recharge/paytm.png": _3,
        "../assets/icons/wallet/recharge/phone_pe.png": u3,
        "../assets/icons/wallet/recharge/point.png": m3,
        "../assets/icons/wallet/recharge/qrcode.png": v3,
        "../assets/icons/wallet/recharge/qrcode_active.png": h3,
        "../assets/icons/wallet/recharge/quickpay.png": w3,
        "../assets/icons/wallet/recharge/quickpay2.png": b3,
        "../assets/icons/wallet/recharge/rechargeRecords/state/0.png": C3,
        "../assets/icons/wallet/recharge/rechargeRecords/state/1.png": B3,
        "../assets/icons/wallet/recharge/rechargeRecords/state/2.png": y3,
        "../assets/icons/wallet/recharge/rechargeRecords/state/3.png": E3,
        "../assets/icons/wallet/recharge/rechargeRecords/state/4.png": f3,
        "../assets/icons/wallet/recharge/refresh.png": R3,
        "../assets/icons/wallet/recharge/sanjiao.png": S3,
        "../assets/icons/wallet/recharge/saveWallet.png": I3,
        "../assets/icons/wallet/recharge/setup1.png": U3,
        "../assets/icons/wallet/recharge/setup2.png": G3,
        "../assets/icons/wallet/recharge/setup2_active.png": D3,
        "../assets/icons/wallet/recharge/setup3.png": L3,
        "../assets/icons/wallet/recharge/setup3_active.png": M3,
        "../assets/icons/wallet/recharge/setup4.png": k3,
        "../assets/icons/wallet/recharge/setup4_active.png": T3,
        "../assets/icons/wallet/recharge/shuoming.png": Q3,
        "../assets/icons/wallet/recharge/success.png": V3,
        "../assets/icons/wallet/recharge/timeout.png": O3,
        "../assets/icons/wallet/recharge/tip.png": F3,
        "../assets/icons/wallet/recharge/transf_amount.png": N3,
        "../assets/icons/wallet/recharge/trx.png": P3,
        "../assets/icons/wallet/recharge/unit_active.png": W3,
        "../assets/icons/wallet/recharge/unit_icon.png": Y3,
        "../assets/icons/wallet/recharge/upi_recharge.png": x3,
        "../assets/icons/wallet/recharge/upt_tip.png": H3,
        "../assets/icons/wallet/recharge/usdt.png": K3,
        "../assets/icons/wallet/recharge/wait.png": X3,
        "../assets/icons/wallet/recharge/wallettobank.png": J3,
        "../assets/icons/wallet/serverIcon.png": z3,
        "../assets/icons/wallet/tobePay/QRCode.png": j3,
        "../assets/icons/wallet/tobePay/explain.png": Z3,
        "../assets/icons/wallet/tobePay/fast.png": q3,
        "../assets/icons/wallet/tobePay/thirdPartyLogo.png": $3,
        "../assets/icons/wallet/wallets.png": eB,
        "../assets/icons/wallet/withdraw/BankCard.png": tB,
        "../assets/icons/wallet/withdraw/E-wallet.png": sB,
        "../assets/icons/wallet/withdraw/EWallet/bankHeader.png": nB,
        "../assets/icons/wallet/withdraw/EWallet/cards.png": aB,
        "../assets/icons/wallet/withdraw/EWallet/momo.png": AB,
        "../assets/icons/wallet/withdraw/EWallet/wallet.png": oB,
        "../assets/icons/wallet/withdraw/USDT/address.png": iB,
        "../assets/icons/wallet/withdraw/USDT/anotherNamer.png": lB,
        "../assets/icons/wallet/withdraw/USDT/bankHeader.png": gB,
        "../assets/icons/wallet/withdraw/USDT/network.png": cB,
        "../assets/icons/wallet/withdraw/USDT/recharge_usdt.png": rB,
        "../assets/icons/wallet/withdraw/USDT/scan.png": dB,
        "../assets/icons/wallet/withdraw/USDT/usdt.png": pB,
        "../assets/icons/wallet/withdraw/USDT/usdtLogo3.png": _B,
        "../assets/icons/wallet/withdraw/add.png": uB,
        "../assets/icons/wallet/withdraw/balance.png": mB,
        "../assets/icons/wallet/withdraw/bankCard/1.png": vB,
        "../assets/icons/wallet/withdraw/bankCard/21.png": hB,
        "../assets/icons/wallet/withdraw/bankCard/3.png": wB,
        "../assets/icons/wallet/withdraw/bankCard/5.png": bB,
        "../assets/icons/wallet/withdraw/bankCard/address.png": CB,
        "../assets/icons/wallet/withdraw/bankCard/bank.png": BB,
        "../assets/icons/wallet/withdraw/bankCard/bankCard.png": yB,
        "../assets/icons/wallet/withdraw/bankCard/bankHeader1.png": EB,
        "../assets/icons/wallet/withdraw/bankCard/bankHeader2.png": fB,
        "../assets/icons/wallet/withdraw/bankCard/bankLogo.png": RB,
        "../assets/icons/wallet/withdraw/bankCard/email.png": SB,
        "../assets/icons/wallet/withdraw/bankCard/ifscCode.png": IB,
        "../assets/icons/wallet/withdraw/bankCard/name.png": UB,
        "../assets/icons/wallet/withdraw/bankCard/phone.png": GB,
        "../assets/icons/wallet/withdraw/bankCard/searchIcon2.png": DB,
        "../assets/icons/wallet/withdraw/bankLogo1.png": LB,
        "../assets/icons/wallet/withdraw/bg1.png": MB,
        "../assets/icons/wallet/withdraw/bg2.png": kB,
        "../assets/icons/wallet/withdraw/c2c/1.png": TB,
        "../assets/icons/wallet/withdraw/c2c/2.png": QB,
        "../assets/icons/wallet/withdraw/c2c/3.png": VB,
        "../assets/icons/wallet/withdraw/c2c/4.png": OB,
        "../assets/icons/wallet/withdraw/c2c/CancelW.png": FB,
        "../assets/icons/wallet/withdraw/c2c/add.png": NB,
        "../assets/icons/wallet/withdraw/c2c/appeal.png": PB,
        "../assets/icons/wallet/withdraw/c2c/bank.png": WB,
        "../assets/icons/wallet/withdraw/c2c/bg11.png": YB,
        "../assets/icons/wallet/withdraw/c2c/bookicon.png": xB,
        "../assets/icons/wallet/withdraw/c2c/c2clogo.png": HB,
        "../assets/icons/wallet/withdraw/c2c/c2clogo_a.png": KB,
        "../assets/icons/wallet/withdraw/c2c/confirmA.png": XB,
        "../assets/icons/wallet/withdraw/c2c/copy-icon.png": JB,
        "../assets/icons/wallet/withdraw/c2c/delBtn.png": zB,
        "../assets/icons/wallet/withdraw/c2c/hicon0.png": jB,
        "../assets/icons/wallet/withdraw/c2c/hicon1.png": ZB,
        "../assets/icons/wallet/withdraw/c2c/hicon14.png": qB,
        "../assets/icons/wallet/withdraw/c2c/hicon2.png": $B,
        "../assets/icons/wallet/withdraw/c2c/hicon3.png": ey,
        "../assets/icons/wallet/withdraw/c2c/hicon4.png": ty,
        "../assets/icons/wallet/withdraw/c2c/hicon5.png": sy,
        "../assets/icons/wallet/withdraw/c2c/hicon6.png": ny,
        "../assets/icons/wallet/withdraw/c2c/hicon7.png": ay,
        "../assets/icons/wallet/withdraw/c2c/hicon8.png": Ay,
        "../assets/icons/wallet/withdraw/c2c/progress/11/1.png": oy,
        "../assets/icons/wallet/withdraw/c2c/progress/11/2.png": iy,
        "../assets/icons/wallet/withdraw/c2c/progress/11/3.png": ly,
        "../assets/icons/wallet/withdraw/c2c/progress/11/4.png": gy,
        "../assets/icons/wallet/withdraw/c2c/progress/3/1.png": cy,
        "../assets/icons/wallet/withdraw/c2c/progress/3/1_a.png": ry,
        "../assets/icons/wallet/withdraw/c2c/progress/3/2.png": dy,
        "../assets/icons/wallet/withdraw/c2c/progress/3/2_a.png": py,
        "../assets/icons/wallet/withdraw/c2c/progress/3/3.png": _y,
        "../assets/icons/wallet/withdraw/c2c/progress/3/3_a.png": uy,
        "../assets/icons/wallet/withdraw/c2c/progress/3/4.png": my,
        "../assets/icons/wallet/withdraw/c2c/progress/3/4_a.png": vy,
        "../assets/icons/wallet/withdraw/c2c/progress/other/1.png": hy,
        "../assets/icons/wallet/withdraw/c2c/progress/other/1_a.png": wy,
        "../assets/icons/wallet/withdraw/c2c/progress/other/2.png": by,
        "../assets/icons/wallet/withdraw/c2c/progress/other/2_a.png": Cy,
        "../assets/icons/wallet/withdraw/c2c/progress/other/3.png": By,
        "../assets/icons/wallet/withdraw/c2c/progress/other/3_a.png": yy,
        "../assets/icons/wallet/withdraw/c2c/progress/other/4.png": Ey,
        "../assets/icons/wallet/withdraw/c2c/progress/other/4_a.png": fy,
        "../assets/icons/wallet/withdraw/c2c/safety.png": Ry,
        "../assets/icons/wallet/withdraw/c2c/selectupi.png": Sy,
        "../assets/icons/wallet/withdraw/c2c/seleteBank.png": Iy,
        "../assets/icons/wallet/withdraw/c2c/successicon.png": Uy,
        "../assets/icons/wallet/withdraw/c2c/uAmount.png": Gy,
        "../assets/icons/wallet/withdraw/c2c/upi.png": Dy,
        "../assets/icons/wallet/withdraw/c2c/upiline.png": Ly,
        "../assets/icons/wallet/withdraw/c2c/uploadImg.png": My,
        "../assets/icons/wallet/withdraw/c2c/uploadImg1.png": ky,
        "../assets/icons/wallet/withdraw/c2c/uploadVideo.png": Ty,
        "../assets/icons/wallet/withdraw/c2c/uploadVideo1.png": Qy,
        "../assets/icons/wallet/withdraw/c2c/wrong.png": Vy,
        "../assets/icons/wallet/withdraw/c2c/wrong_1.png": Oy,
        "../assets/icons/wallet/withdraw/checked.png": Fy,
        "../assets/icons/wallet/withdraw/clear.png": Ny,
        "../assets/icons/wallet/withdraw/delete.png": Py,
        "../assets/icons/wallet/withdraw/fail.png": Wy,
        "../assets/icons/wallet/withdraw/historyHead.png": Yy,
        "../assets/icons/wallet/withdraw/momo.png": xy,
        "../assets/icons/wallet/withdraw/pwd.png": Hy,
        "../assets/icons/wallet/withdraw/refresh.png": Ky,
        "../assets/icons/wallet/withdraw/safety.png": Xy,
        "../assets/icons/wallet/withdraw/succeed.png": Jy,
        "../assets/icons/wallet/withdraw/unchecked.png": zy,
        "../assets/icons/wallet/withdraw/withdrawHistory/1.png": jy,
        "../assets/icons/wallet/withdraw/withdrawHistory/10.png": Zy,
        "../assets/icons/wallet/withdraw/withdrawHistory/10_NS.png": qy,
        "../assets/icons/wallet/withdraw/withdrawHistory/1_NS.png": $y,
        "../assets/icons/wallet/withdraw/withdrawHistory/20.png": eE,
        "../assets/icons/wallet/withdraw/withdrawHistory/20_NS.png": tE,
        "../assets/icons/wallet/withdraw/withdrawHistory/3.png": sE,
        "../assets/icons/wallet/withdraw/withdrawHistory/3_1.png": nE,
        "../assets/icons/wallet/withdraw/withdrawHistory/3_NS.png": aE,
        "../assets/icons/wallet/withdraw/withdrawHistory/4.png": AE,
        "../assets/icons/wallet/withdraw/withdrawHistory/4_NS.png": oE,
        "../assets/icons/wallet/withdraw/withdrawHistory/5.png": iE,
        "../assets/icons/wallet/withdraw/withdrawHistory/5_NS.png": lE,
        "../assets/icons/wallet/withdraw/withdrawHistory/6.png": gE,
        "../assets/icons/wallet/withdraw/withdrawHistory/6_NS.png": cE,
        "../assets/icons/wallet/withdraw/withdrawHistory/8.png": rE,
        "../assets/icons/wallet/withdraw/withdrawHistory/8_NS.png": dE,
        "../assets/icons/wallet/withdraw/withdrawHistory/all.png": pE,
        "../assets/icons/wallet/withdraw/withdrawHistory/all_NS.png": _E,
        "../assets/icons/wallet/withdraw/withdrawHistory/bc.png": uE,
        "../assets/icons/wallet/withdraw/withdrawHistory/moonBar.png": mE,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/0.png": vE,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/1.png": hE,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/2.png": wE,
        "../assets/icons/wallet/withdraw/withdrawHistory/state/3.png": bE,
        "../assets/icons/wallet/withdraw/withdrawType/1.png": CE,
        "../assets/icons/wallet/withdraw/withdrawType/10.png": BE,
        "../assets/icons/wallet/withdraw/withdrawType/3.png": yE,
        "../assets/icons/wallet/withdraw/withdrawType/4.png": EE,
        "../assets/icons/wallet/withdraw/withdrawType/4_ns.png": fE,
        "../assets/icons/wallet/withdraw/withdrawType/5.png": RE,
        "../assets/icons/wallet/withdraw/withdrawType/6.png": SE,
        "../assets/icons/wallet/withdraw/withdrawType/8.png": IE,
        "../assets/icons/wallet/withdraw/withdrawType/KBZpay.png": UE,
        "../assets/icons/wallet/withdraw/withdrawType/WavePay.png": GE,
        "../assets/icons/wallet/withdraw/฿.png": DE,
        "../assets/icons/wallet/withdraw/₫.png": LE,
        "../assets/styles/VIP/vip.scss": ME,
        "../assets/styles/_extend.scss": kE,
        "../assets/styles/_variables.scss": TE,
        "../assets/styles/always.scss": QE,
        "../assets/styles/common.scss": VE,
        "../assets/styles/fonts.scss": OE,
        "../assets/styles/lotteryrecord.scss": FE,
        "../assets/styles/native.scss": NE,
        "../assets/styles/other/blackGoldHome/reset.scss": PE,
        "../assets/styles/other/blueHome/reset.scss": WE,
        "../assets/styles/other/damanHome/reset.scss": YE,
        "../assets/styles/other/electronic/home.scss": xE,
        "../assets/styles/other/electronic/reset.scss": HE,
        "../assets/styles/other/redHome/reset.scss": KE,
        "../assets/styles/other/whiteGoldHome/reset.scss": XE,
        "../assets/styles/reset.scss": JE,
        "../assets/styles/tbox.scss": zE,
        "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20.png": jE,
        "../assets/styles/theme/blue/img/wallet/withdraw/withdrawHistory/20_NS.png": ZE,
        "../assets/styles/vars.scss": qE,
        "../assets/styles/withdraw.scss": $E,
        "../assets/styles/xoxs.scss": ef
    })[`../assets/${A}/${e}/${s}.${n}`], self.location).href,
    rf = (e, s) => {
        var A;
        return (A = e.find(o => o.value === s)) == null ? void 0 : A.key
    },
    ik = (e, s) => {
        var n;
        return (n = e.find(A => A.type === s)) == null ? void 0 : n.typeName
    },
    lk = () => {
        const e = document.querySelector("meta[name=viewport]");
        if (e !== null) {
            let s = e.getAttribute("content"),
                n = /maximum\-scale=[0-9\.]+/g;
            n.test(s) ? s = s.replace(n, "maximum-scale=1.0") : s = [s, "maximum-scale=1.0"].join(", "), e.setAttribute("content", s)
        }
    },
    gk = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    ck = () => ({
        today: {
            start: re().startOf("day").unix(),
            end: re().endOf("day").unix()
        },
        yesterday: {
            start: re().subtract(1, "days").startOf("day").unix(),
            end: re().subtract(1, "days").endOf("day").unix()
        },
        tomorrow: {
            start: re().subtract(-1, "days").startOf("day").unix(),
            end: re().subtract(-1, "days").endOf("day").unix()
        },
        last7days: {
            start: re().subtract(1, "weeks").startOf("day").unix(),
            end: re().subtract(1, "days").endOf("day").unix()
        },
        thisMonth: {
            start: re().startOf("months").unix(),
            end: re().endOf("day").unix()
        },
        lastMonth: {
            start: re().subtract(1, "months").startOf("month").unix(),
            end: re().subtract(1, "months").endOf("month").unix()
        }
    }),
    rk = (e = "", s = "", n = "", A = "-") => [e.toString(), s.toString(), n.toString()].join(A),
    df = e => {
        let s = (e == null ? void 0 : e.time) || "",
            n = (e == null ? void 0 : e.status) || 1,
            A = (e == null ? void 0 : e.format) || "YYYY-MM-DD HH:mm:ss",
            o = {
                key: "",
                value: []
            };

        function l() {
            return s ? re(s) : re()
        }
        let g, p;
        switch (n) {
            case 1:
                A = "YYYY-MM-DD", g = l().format(A), p = g.split("-");
                break;
            case 2:
                A = "HH:mm:ss", g = l().format(A), p = g.split(":");
                break;
            case 3:
                A = "YYYY-MM", g = l().format(A), p = g.split("-");
                break;
            default:
                g = l().format(A);
                let h = g.split(" "),
                    _ = h[0].split("-"),
                    d = h[1].split(":");
                p = [..._, ...d];
                break
        }
        return o = {
            key: g,
            value: p
        }, o
    },
    dk = e => {
        const s = new Date(2022, 0, 1),
            n = new Date;
        return e == -1 && n.setTime(n.getTime() - 24 * 60 * 60 * 1e3), {
            minDate: s,
            maxDate: n
        }
    },
    pf = () => ({
        minDate: new Date(1970, 0, 1),
        maxDate: new Date
    }),
    hs = () => localStorage.getItem("language") || "zh";

function _f(e) {
    let s = e === "ar" ? "ar" : "en",
        n = e === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = s, document.documentElement.dir = n
}
const ws = () => {
        const e = rf(_s.languageCodes, localStorage.getItem("language") || "en");
        return e === void 0 ? "en" : e
    },
    uf = e => {
        localStorage.setItem("language", e)
    },
    pk = (e, s, n) => {
        if (e) {
            let A = e.toString();
            if (n == 1) {
                let l = parseFloat(A).toFixed(2);
                l.charAt(l.length - 1) == "0" && (s = 1)
            }
            let o = A.indexOf(".");
            return o !== -1 ? A = A.substring(0, s + o + 1) : A = A.substring(0), parseFloat(A).toFixed(s)
        }
    },
    _k = e => {
        if (!e) return 0;
        let s = "";
        return e > 1e6 ? (e /= 1e6, s = "M") : e > 1e3 && (e /= 1e3, s = "K"), e.toString().indexOf(".") > -1 && (e = e.toFixed(2)), e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + s
    },
    uk = (e, s) => {
        var n = 0,
            A = e.toString(),
            o = s.toString();
        try {
            n += A.split(".")[1].length
        } catch {}
        try {
            n += o.split(".")[1].length
        } catch {}
        return Number(A.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, n)
    },
    De = e => {
        const s = Me.global.t;
        let n, A = [214, 215, -1],
            o = [""];
        e.msgCode ? A.includes(e.msgCode) || o.includes(e.code) ? n = e.msg : n = s("code" + e.msgCode) : n = e.msg || "";
        let l = e.msgCode;
        n && Ue({
            message: `Error: ${l||""} 
 ` + n,
            wordBreak: "break-word"
        })
    },
    V = async e => await e.then(n => n && n.code !== 0 ? (De(n), null) : n).catch(n => (De(n), null)), Ft = () => {
        let e = -1,
            s = navigator.userAgent.toLowerCase();
        return ms ? e = 0 : s.indexOf("android") != -1 || s.indexOf("adr") > -1 ? e = 1 : s.indexOf("iphone") != -1 ? e = 2 : s.indexOf("ipad") != -1 ? e = 3 : e = -1, e
    };

function qt(e, s = !1) {
    setTimeout(() => {
        if (s) {
            const n = window.open("", "_blank");
            n.document.open(), n.document.write(e), n.document.close()
        } else window.open(e)
    })
}
const kt = (e, s) => {
        const n = typeof e == "string";
        let A = n ? e : e.url;
        const o = n ? 1 : e.returnType,
            l = Ft();
        if (s == 1 && [1, 2, 3].includes(l) && (A += "&home=1"), o === 2) return qt(A, !0);
        ms ? qt(A) : window.location.assign(A)
    },
    mf = e => zs.MD5(e).toString().toUpperCase().slice(0, 32);

function rt(e) {
    if (typeof e != "object" || e === null) return e;
    if (Array.isArray(e)) return e.map(rt);
    const s = {};
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (s[n] = rt(e[n]));
    return s
}

function bs() {
    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
        var s = Math.random() * 16 | 0,
            n = e === "x" ? s : s & 3 | 8;
        return n.toString(16)
    })
}
const vf = e => {
    const {
        protocol: s,
        host: n,
        hash: A
    } = window.location, o = s + "//" + n + "/" + A;
    let l = e || "/";
    window.location.href = o + l
};

function mk(e, s) {
    var l;
    const n = sessionStorage.getItem("areaPhoneLenList");
    if (!n) return !0;
    let o = (l = JSON.parse(n).find(g => g.area == "+" + e)) == null ? void 0 : l.len;
    if ((o == null ? void 0 : o.indexOf("-")) != -1) {
        let g = (o == null ? void 0 : o.toString().split("-")) || [];
        return (g == null ? void 0 : g.length) == 2 ? !(s < g[0] || s > g[1]) : !0
    }
    return o == s
}
const vk = () => "bdgwin",
    hk = (e, s, n, A) => {
        let o = [],
            l = A == 0 ? 2 : 3;
        for (; o.length < e;) {
            var g = Math.floor(Math.random() * (n - s + 1)) + s;
            o.includes(g.toString().padStart(l, "0")) || o.push(g.toString().padStart(l, "0"))
        }
        return o
    },
    wk = (e, s, n) => {
        let A = [];
        for (let o = e; o <= s; o++) {
            const l = o.toString().padStart(n, "0"),
                g = l[0];
            l.split("").every(p => p === g) && A.push(o.toString().padStart(n, "0"))
        }
        return A
    },
    bk = (e, s, n, A) => {
        let o = [];
        const l = n === "even";
        for (let g = e; g <= s; g++) g % 2 === 0 ? l && o.push(g.toString().padStart(A, "0")) : l || o.push(g.toString().padStart(A, "0"));
        return o
    },
    Ck = (e, s) => {
        let n = [];
        for (let A = e; A <= s; A++) n.push(A.toString());
        return n
    },
    Bk = (e, s, n, A) => {
        let o = [];
        const l = n === "big",
            g = Math.floor((s + e) / 2);
        for (let p = e; p <= s; p++) l ? p > g && o.push(p.toString().padStart(A, "0")) : p <= g && o.push(p.toString().padStart(A, "0"));
        return o
    },
    yk = e => {
        const s = new Set;
        for (let n of e) {
            if (s.has(n)) return !0;
            s.add(n)
        }
        return !1
    },
    Ek = () => {
        if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
            for (var e = document.querySelectorAll("input, textarea"), s = 0; s < e.length; s++) e[s].blur();
            return !0
        }
        return !1
    },
    hf = e => {
        var s = {
            á: "a",
            à: "a",
            ả: "a",
            ã: "a",
            ạ: "a",
            ắ: "a",
            ằ: "a",
            ẳ: "a",
            ẵ: "a",
            ặ: "a",
            ấ: "a",
            ầ: "a",
            ẩ: "a",
            ẫ: "a",
            ậ: "a",
            é: "e",
            è: "e",
            ẻ: "e",
            ẽ: "e",
            ẹ: "e",
            ế: "e",
            ề: "e",
            ể: "e",
            ễ: "e",
            ệ: "e",
            í: "i",
            ì: "i",
            ỉ: "i",
            ĩ: "i",
            ị: "i",
            ó: "o",
            ò: "o",
            ỏ: "o",
            õ: "o",
            ọ: "o",
            ố: "o",
            ồ: "o",
            ổ: "o",
            ỗ: "o",
            ộ: "o",
            ớ: "o",
            ờ: "o",
            ở: "o",
            ỡ: "o",
            ợ: "o",
            ú: "u",
            ù: "u",
            ủ: "u",
            ũ: "u",
            ụ: "u",
            ứ: "u",
            ừ: "u",
            ử: "u",
            ữ: "u",
            ự: "u",
            ý: "y",
            ỳ: "y",
            ỷ: "y",
            ỹ: "y",
            ỵ: "y",
            đ: "d"
        };
        return e.toLowerCase().replace(/[áàảãạắằẳẵặấầẩẫậéèẻẽẹếềểễệíìỉĩịóòỏõọốồổỗộớờởỡợúùủũụứừửữựýỳỷỹỵđ]/g, function(n) {
            return s[n] || n
        })
    },
    fk = e => {
        if (e.length >= 7) return e.substring(0, 3) + "***" + e.substring(e.length - 3);
        {
            const s = "***",
                n = 7 - e.length,
                A = "*".repeat(n);
            return e.substring(0, Math.ceil((7 - n) / 2)) + s + A + e.substring(Math.ceil((7 - n) / 2))
        }
    };

function Rk(e) {
    for (var s = e + "=", n = decodeURIComponent(document.cookie), A = n.split(";"), o = 0; o < A.length; o++) {
        for (var l = A[o]; l.charAt(0) === " ";) l = l.substring(1);
        if (l.indexOf(s) === 0) return l.substring(s.length, l.length)
    }
    return null
}
const Te = Me.global.t,
    Sk = (e, s) => {
        let n = new Date(e),
            A = n.getFullYear(),
            o = n.getMonth() + 1,
            l = n.getDay(),
            g = n.getDate(),
            p = n.getHours(),
            h = n.getMinutes(),
            _ = n.getSeconds(),
            d = [Te("sunday"), Te("monday"), Te("tuesday"), Te("wednesday"), Te("thursday"), Te("friday"), Te("saturday")];
        return s.replace("yyyy", A.toString()).replace("MM", o.toString().padStart(2, "0")).replace("M", o.toString()).replace("dd", g.toString().padStart(2, "0")).replace("hh", p.toString().padStart(2, "0")).replace("mm", h.toString().padStart(2, "0")).replace("ss", _.toString().padStart(2, "0")).replace("w", d[l])
    },
    Cs = (e, s) => e.length > s ? e.slice(0, s) + "..." : e.toUpperCase(),
    ae = (e, s = "", n = 2) => {
        var A = /(\d{3})(?=\d)/g;
        if (e = parseFloat(e), !isFinite(e) || !e && e !== 0) return "";
        s = s || sessionStorage.getItem("dollarSign") || "", n = n ?? 2;
        var o = Math.abs(e).toFixed(n),
            l = n ? o.slice(0, -1 - n) : o,
            g = l.length % 3,
            p = g > 0 ? l.slice(0, g) + (l.length > 3 ? "," : "") : "",
            h = n ? o.slice(-1 - n) : "",
            _ = e < 0 ? "-" : "",
            d = ws();
        return d == "2" ? _ + p + l.slice(g).replace(A, "$1,") + h + s : _ + s + p + l.slice(g).replace(A, "$1,") + h
    },
    $t = e => {
        let s = localStorage.getItem("number") || "",
            n = localStorage.getItem("numberType") || "",
            A = e || n + s;
        return A ? A.length > 9 ? "+" + A.replace(/^(\d{5})\d+(\d{4})$/, "$1****$2") : "+" + A.replace(/^(\d{4})\d+(\d{2})$/, "$1****$2") : ""
    },
    Ik = e => e.replace(/^([\w]{0,4})[\w\d]*@([\w\d]{0,15}[\w\d\.]*)$/, (s, n, A) => {
        const o = n.length,
            l = A.length,
            g = l > 15 ? A.substring(l - 15) : A;
        return `${o>4?n.substring(0,4)+"****":n+"****"}${l>15?"":"@"}${g}`
    });

function Bs(e) {
    return btoa(e)
}

function Uk(e) {
    return atob(e)
}
const yt = {};
re.extend(Zs);
const es = localStorage.getItem("language") || "zh";
let Xe = "";
switch (es) {
    case "zh_TC":
        Xe = "zh-tw";
        break;
    case "tc":
        Xe = "zh-tw";
        break;
    default:
        Xe = es;
        break
}
Xe && re.locale(Xe);
const Nt = (e, s = "YYYY-MM-DD HH:mm:ss") => {
        var n = 8,
            A = new Date().getTimezoneOffset();
        if (!e) return "";
        typeof e == "number" && (e = new Date(e * 1e3));
        var o = e.getTime(),
            l = new Date(o + A * 60 * 1e3 + n * 60 * 60 * 1e3),
            g = {
                "M+": l.getMonth() + 1,
                "D+": l.getDate(),
                "h+": l.getHours() % 12 === 0 ? 12 : l.getHours() % 12,
                "H+": l.getHours(),
                "m+": l.getMinutes(),
                "s+": l.getSeconds(),
                "q+": Math.floor((l.getMonth() + 3) / 3),
                S: l.getMilliseconds()
            },
            p = {
                0: "日",
                1: "一",
                2: "二",
                3: "三",
                4: "四",
                5: "五",
                6: "六"
            };
        /(Y+)/.test(s) && (s = s.replace(RegExp.$1, (l.getFullYear() + "").substr(4 - RegExp.$1.length))), /(E+)/.test(s) && (s = s.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + p[e.getDay() + ""]));
        for (var h in g) new RegExp("(" + h + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length === 1 ? g[h] : ("00" + g[h]).substr(("" + g[h]).length)));
        return s
    },
    ys = (e, s = 1, n = "YYYY-MM-DD HH:mm:ss") => {
        var A = e;
        return s === 1 ? (isNaN(A) && (A = 0), A = Math.round(parseInt(e.valueOf())), A = re(A).format(n)) : s === 2 && (A = Pt(A)), A
    },
    Pt = e => {
        e = e.replace(/-/g, "/");
        var s = Math.round(parseInt(new Date(e).valueOf()) / 1e3);
        return isNaN(s) && (s = 0), s
    },
    Es = e => parseInt(e / 1e3),
    At = e => {
        var s = new Date().getTimezoneOffset() / 60;
        if (s > 0) var n = 8 - s,
            n = n * 60 * 60,
            A = e - n - 46800 + n;
        else var n = 8 + s,
            n = n * 60 * 60,
            A = e - n;
        return A < 0 ? 0 : A
    },
    fs = (e, s) => {
        let n = e;
        return n.startTime && (n.startTime = parseInt(n.startTime / 1e3 || 0), n.startTime = At(n.startTime)), n.endTime && (n.endTime = parseInt(n.endTime / 1e3 || 0), n.endTime = At(n.endTime)), s && s.length > 0 && s.map(A => {
            let o = n[A];
            o && (o = parseInt(o / 1e3 || 0), o = At(o))
        }), n
    },
    wf = () => Math.ceil(new Date().getTime() / 1e3),
    bf = () => re(new Date).add(7, "day").unix(),
    Rs = (e, s = "YYYY-MM-DD HH:mm:ss") => {
        let n = Nt(e, s);
        return re().to(re(n))
    };
let Ss = {
    filterDate: Nt,
    filterTimeStamp: ys,
    makeNewTimes: Pt,
    toUnix: Es,
    toBeiJingTime: fs,
    fromNow: Rs
};

function Cf(e) {
    return e.replace(e[0], e[0].toUpperCase())
}

function Bf(e, s) {
    let n = {};
    return e.map(A => {
        n[A.value] = A.key
    }), s || s === 0 ? n[s] : ""
}
let Is = [];
for (let e in yt) {
    if (yt[e][0].auto === !1) break;
    let n = "filter" + Cf(e);
    Is.push([n, A => Bf(yt[e], A)])
}
Is.forEach(([e, s]) => {
    Ss[e] = n => s(n)
});
const yf = Ss,
    Ef = Object.freeze(Object.defineProperty({
        __proto__: null,
        Timestamp: At,
        filterDate: Nt,
        filterTimeStamp: ys,
        fromNow: Rs,
        getNowTime: wf,
        makeNewTimes: Pt,
        nextWeek: bf,
        refiter: yf,
        toBeiJingTime: fs,
        toUnix: Es
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Gk = Ef,
    ut = Le({
        id: "activityStore",
        state: () => ({
            lotteryItemDetail: {},
            orderItem: {},
            redeemItem: {}
        }),
        getters: {
            getLotteryItemDetail: e => e.lotteryItemDetail,
            getOrderItem: e => e.orderItem,
            getRedeemItem: e => e.redeemItem
        },
        actions: {
            setLotteryItemDetail(e) {
                this.lotteryItemDetail = e
            },
            setOrderItem(e) {
                this.orderItem = e
            },
            setRedeemItem(e) {
                this.redeemItem = e
            }
        },
        persist: !0
    }),
    mt = Le({
        id: "commonStore",
        state: () => ({
            isLoading: !1,
            isRefreshToken: !1,
            teleportTarget: null,
            keepAliveList: ["RechargeHistory"]
        }),
        getters: {
            getLoading: e => e.isLoading,
            getIsRefreshToken: e => e.isRefreshToken,
            getKeepAliveList: e => e.keepAliveList
        },
        actions: {
            setLoading(e) {
                this.isLoading = e
            },
            setIsRefreshToken(e) {
                this.isRefreshToken = e
            },
            setKeepAliveList(e) {
                this.keepAliveList.includes(e) || this.keepAliveList.push(e)
            },
            reastKeepAliveList() {
                this.keepAliveList = []
            },
            removeKeepAliveList(e) {
                let s = rt(this.keepAliveList);
                const n = s.indexOf(e);
                n > -1 && (s.splice(n, 1), this.keepAliveList = s)
            }
        }
    }),
    Wt = Le({
        id: "homeStore",
        state: () => ({
            rankList: [],
            sitemsg: {},
            isRead: !1,
            lotterySoltList: {},
            cacheData: new Map,
            currentMenu: sessionStorage.getItem("clickedGameType") || "",
            currentTitle: ""
        }),
        getters: {
            getRankList: e => e.rankList,
            getSiteMsg: e => e.sitemsg,
            getReadState: e => e.isRead,
            getLotterySoltList: e => e.lotterySoltList,
            getCacheValue: e => s => e.cacheData.get(s),
            getCacheData: e => e.cacheData,
            getCurrentMenu: e => e.currentMenu,
            getCurrentTitle: e => e.currentTitle
        },
        actions: {
            setRankList(e) {
                this.rankList = e
            },
            setSiteMsg(e) {
                this.sitemsg = e
            },
            setReadState(e) {
                this.isRead = e
            },
            setLotterySoltList(e) {
                this.lotterySoltList = e
            },
            setCacheData(e, s) {
                this.cacheData.set(e, s)
            },
            setCurrentMenu(e) {
                this.currentMenu = e
            },
            setCurrentTitle(e) {
                this.currentTitle = e
            }
        }
    }),
    ff = "modulepreload",
    Rf = function(e) {
        return "/" + e
    },
    ts = {},
    R = function(s, n, A) {
        if (!n || n.length === 0) return s();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(l => {
            if (l = Rf(l), l in ts) return;
            ts[l] = !0;
            const g = l.endsWith(".css"),
                p = g ? '[rel="stylesheet"]' : "";
            if (!!A)
                for (let d = o.length - 1; d >= 0; d--) {
                    const C = o[d];
                    if (C.href === l && (!g || C.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${l}"]${p}`)) return;
            const _ = document.createElement("link");
            if (_.rel = g ? "stylesheet" : ff, g || (_.as = "script", _.crossOrigin = ""), _.href = l, document.head.appendChild(_), g) return new Promise((d, C) => {
                _.addEventListener("load", d), _.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${l}`)))
            })
        })).then(() => s()).catch(l => {
            const g = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (g.payload = l, window.dispatchEvent(g), !g.defaultPrevented) throw l
        })
    },
    ot = "/login",
    Sf = ["/500", "/", "/main/About/AboutDetail", "/rpwd", "/register", "/main/CustomerService", "/main/CustomerService/ServiceCollection"],
    If = ["home", "activity", "main", "promotion", "chat", "wallet"],
    Ze = [];
let dt = Object.assign({
        "../views/activity/index.vue": () => R(() => Promise.resolve().then(() => PR), void 0),
        "../views/arWallet/index.vue": () => R(() => import("./page-arWallet-b07c3150.js"), ["assets/js/page-arWallet-b07c3150.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-08f0b73e.css"]),
        "../views/login/index.vue": () => R(() => import("./page-login-3b2f45d5.js").then(e => e.i), ["assets/js/page-login-3b2f45d5.js", "assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css", "assets/css/page-login-f26b4a3a.css"]),
        "../views/main/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.i), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/promotion/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.i), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/register/index.vue": () => R(() => import("./page-register-2101a636.js"), ["assets/js/page-register-2101a636.js", "assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-c53dd736.css"]),
        "../views/rpwd/index.vue": () => R(() => import("./page-rpwd-c0a266e6.js"), ["assets/js/page-rpwd-c0a266e6.js", "assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js", "assets/css/index-b5a52519.css"]),
        "../views/test/index.vue": () => R(() => import("./page-test-d99657da.js").then(e => e.i), ["assets/js/page-test-d99657da.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-login-3b2f45d5.js", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/css/page-login-f26b4a3a.css", "assets/css/page-test-605d9386.css"]),
        "../views/vip/index.vue": () => R(() => import("./page-vip-1d123537.js").then(e => e.i), ["assets/js/page-vip-1d123537.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-vip-e4955d30.css"]),
        "../views/wallet/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.i), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"])
    }),
    Tt = Object.assign({
        "../views/activity/ActivityDetail/index.vue": () => R(() => Promise.resolve().then(() => g8), void 0),
        "../views/activity/Championship/index.vue": () => R(() => Promise.resolve().then(() => h8), void 0),
        "../views/activity/DailySignIn/index.vue": () => R(() => Promise.resolve().then(() => G8), void 0),
        "../views/activity/DailyTasks/index.vue": () => R(() => Promise.resolve().then(() => AS), void 0),
        "../views/activity/FirstRecharge/index.vue": () => R(() => Promise.resolve().then(() => _S), void 0),
        "../views/activity/MemberPackage/index.vue": () => R(() => Promise.resolve().then(() => XS), void 0),
        "../views/activity/PointMall/index.vue": () => R(() => Promise.resolve().then(() => Q7), void 0),
        "../views/activity/Turntable/index.vue": () => R(() => Promise.resolve().then(() => vI), void 0),
        "../views/home/AllGames/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.i), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.f), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllOnlineGames/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.g), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/Messages/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.h), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/game/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.j), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/main/About/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.a), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Avatar/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.b), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/BetRecords/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.c), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/CustomerService/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.d), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Feedback/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.e), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/GameStats/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.f), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/GoogleVerify/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.g), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Guide/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.h), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/InvitationBonus/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.j), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Language/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.k), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Laundry/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.l), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/MyCoins/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.m), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/MyCps/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.n), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Notification/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.o), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/PointDetail/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.p), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/RedeemGift/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.q), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SettingCenter/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.r), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/StrongBox/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.s), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SuperJackpot/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.t), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/withdraw/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.v), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/promotion/CommissionDetail/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.a), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/MyCommission/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.b), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/MyInvitation/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.c), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/MyReceive/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.d), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/PromotionRule/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.e), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/PromotionShare/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.f), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/RebateRatio/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.g), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/Server/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.h), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/Subordinate/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.j), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/TeamPartner/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.k), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/TeamReport/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.l), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/vip/RebateDetails/index.vue": () => R(() => import("./page-vip-1d123537.js").then(e => e.a), ["assets/js/page-vip-1d123537.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-vip-e4955d30.css"]),
        "../views/vip/RecordVsruleHistory/index.vue": () => R(() => import("./page-vip-1d123537.js").then(e => e.b), ["assets/js/page-vip-1d123537.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-vip-e4955d30.css"]),
        "../views/wallet/BankStatus/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.a), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/CancelRecharge/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.b), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/OrderCancel/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.c), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/OtherPay/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.d), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Recharge/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.e), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/RechargeDetail/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.f), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/RechargeHistory/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.g), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/RechargeUsdt/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.h), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/TobePay/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.j), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/TransAction/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.k), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.l), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/WithdrawHistory/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.m), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"])
    }),
    Qt = Object.assign({
        "../views/activity/Championship/ChampionshipDetail/index.vue": () => R(() => Promise.resolve().then(() => zI), void 0),
        "../views/activity/DailySignIn/Record/index.vue": () => R(() => Promise.resolve().then(() => n9), void 0),
        "../views/activity/DailySignIn/Rules/index.vue": () => R(() => Promise.resolve().then(() => p9), void 0),
        "../views/activity/DailyTasks/Record/index.vue": () => R(() => Promise.resolve().then(() => b9), void 0),
        "../views/activity/MemberPackage/Rules/index.vue": () => R(() => Promise.resolve().then(() => H9), void 0),
        "../views/activity/PointMall/AddAddress/index.vue": () => R(() => Promise.resolve().then(() => nU), void 0),
        "../views/activity/PointMall/LotteryActivity/index.vue": () => R(() => Promise.resolve().then(() => lU), void 0),
        "../views/activity/PointMall/LotteryDetail/index.vue": () => R(() => Promise.resolve().then(() => aG), void 0),
        "../views/activity/PointMall/MyLottery/index.vue": () => R(() => Promise.resolve().then(() => wG), void 0),
        "../views/activity/PointMall/MyOrders/index.vue": () => R(() => Promise.resolve().then(() => DG), void 0),
        "../views/activity/PointMall/OrderDetail/index.vue": () => R(() => Promise.resolve().then(() => lD), void 0),
        "../views/activity/PointMall/ReceiveLottery/index.vue": () => R(() => Promise.resolve().then(() => SD), void 0),
        "../views/activity/PointMall/Record/index.vue": () => R(() => Promise.resolve().then(() => xD), void 0),
        "../views/activity/PointMall/Redeem/index.vue": () => R(() => Promise.resolve().then(() => OL), void 0),
        "../views/activity/PointMall/Rules/index.vue": () => R(() => Promise.resolve().then(() => HL), void 0),
        "../views/activity/Turntable/Detail/index.vue": () => R(() => Promise.resolve().then(() => lM), void 0),
        "../views/activity/Turntable/Introduce/index.vue": () => R(() => Promise.resolve().then(() => EM), void 0),
        "../views/activity/Turntable/Rules/index.vue": () => R(() => Promise.resolve().then(() => kM), void 0),
        "../views/home/AllLotteryGames/4D/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.k), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/4DLotteryResults/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.l), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/4DOdds/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.m), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/4DPlay/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.n), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/4DmyGame/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.o), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/5D/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.p), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BettingRecord5D/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.q), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BettingRecordK3/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.r), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BettingRecordWin/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.s), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BettingRecordWinTrx/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.t), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/Binguo/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.x), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BinguoCount/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.y), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/BinguoRecord/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.z), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/ChangLong/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.A), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/K3/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.B), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/NewVietnam/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.C), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/Play/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.E), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/WinGo/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.G), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/WinTrx/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.H), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/WinTrxIframe/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.I), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/XoSo/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.J), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/XoSoRecord/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.M), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/AllLotteryGames/XoSoRecordF/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.N), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/Messages/MessageDetail/index.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.O), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/main/About/AboutDetail/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.w), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/CustomerService/ServiceCollection/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.x), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/GoogleVerify/BindGoogle/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.y), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/InvitationBonus/Record/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.z), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/InvitationBonus/Rule/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.A), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Laundry/LaundryRecord/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.B), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/Laundry/LaundryRule/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.C), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SettingCenter/BindEmail/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.D), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SettingCenter/LoginPassword/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.E), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SettingCenter/UpdatePhone/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.F), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/StrongBox/StrongBoxAbout/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.G), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/StrongBox/StrongBoxRecord/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.H), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SuperJackpot/rule/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.I), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/main/SuperJackpot/star/index.vue": () => R(() => import("./page-main-e2eff85c.js").then(e => e.J), ["assets/js/page-main-e2eff85c.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css"]),
        "../views/promotion/MyCommission/MyCommissionDetail/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.m), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/MyInvitation/InvitationDetail/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.n), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/Server/ServiceCollection/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.o), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/TeamPartner/Invitation/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.p), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/promotion/TeamReport/TeamReportDetail/index.vue": () => R(() => import("./page-promotion-7b600acc.js").then(e => e.q), ["assets/js/page-promotion-7b600acc.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-main-e2eff85c.js", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css"]),
        "../views/wallet/RechargeHistory/RechargeUpiDetail/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.n), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddBankCard/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.p), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddKbz/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.q), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddPIX/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.r), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddType4/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.s), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddUSDT/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.t), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddUpi/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.u), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddUpi_1/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.v), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/AddWave/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.w), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/BankCard/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.x), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/C2cDetail/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.y), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/ChooseBank/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.o), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/EWallet/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.z), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/PIX/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.A), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/Type4/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.B), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/USDT/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.C), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/Upi/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.D), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/c2cCancelWithdrawal/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.E), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/Withdraw/c2cWrongAmount/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.F), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"]),
        "../views/wallet/WithdrawHistory/WithdrawHistoryDetail/index.vue": () => R(() => import("./page-wallet-bf40fd29.js").then(e => e.G), ["assets/js/page-wallet-bf40fd29.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/page-home-fb16cb98.js", "assets/css/page-home-18f78d35.css", "assets/js/page-login-3b2f45d5.js", "assets/css/page-login-f26b4a3a.css", "assets/js/page-test-d99657da.js", "assets/css/page-test-605d9386.css", "assets/js/page-promotion-7b600acc.js", "assets/js/page-main-e2eff85c.js", "assets/css/page-main-b0a8c165.css", "assets/css/page-promotion-27ae457c.css", "assets/css/page-wallet-6950ddd7.css"])
    }),
    Us = Object.assign({
        "../views/home/other/blackGoldHome.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.P), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/other/blueHome.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.Q), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/other/damanHome.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.R), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/other/electronic.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.S), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/other/redHome.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.T), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"]),
        "../views/home/other/whiteGoldHome.vue": () => R(() => import("./page-home-fb16cb98.js").then(e => e.U), ["assets/js/page-home-fb16cb98.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/css/page-home-18f78d35.css"])
    });
dt["../views/home/index.vue"] = Us["../views/home/other/blueHome.vue"];
Us = null;
const Yt = ["AllGames"];
for (const e in dt) {
    const s = e.split("/")[2];
    Ze.push({
        path: s === "home" ? "/" : `/${s}`,
        name: s,
        component: dt[e],
        meta: {
            title: s,
            tabBar: If.includes(s),
            keepAlive: Yt.includes(s)
        }
    })
}
dt = null;
for (const e in Tt) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3],
        n = e.split("/")[3];
    if (s.includes("components")) break;
    Ze.push({
        path: s,
        name: n,
        component: Tt[e],
        meta: {
            title: e.split("/")[3],
            parent: e.split("/")[2],
            tabBar: !1,
            keepAlive: Yt.includes(n)
        }
    })
}
Tt = null;
for (const e in Qt) {
    const s = "/" + e.split("/")[2] + "/" + e.split("/")[3] + "/" + e.split("/")[4],
        n = e.split("/")[3] + "-" + e.split("/")[4];
    if (s.includes("components")) break;
    Ze.push({
        path: s,
        name: n,
        component: Qt[e],
        meta: {
            title: e.split("/")[4],
            parent: e.split("/")[3],
            tabBar: !1,
            keepAlive: Yt.includes(n)
        }
    })
}
Qt = null;
const Uf = [{
    path: "/:pathMatch(.*)",
    redirect: "/",
    meta: {
        title: "NotFound",
        tabBar: !1,
        keepAlive: !1
    }
}];
Ze.push(...Uf);
const Je = qs({
    history: $s("/"),
    routes: Ze,
    scrollBehavior(e, s, n) {
        return {
            top: 0
        }
    }
});
Je.beforeEach((e, s, n) => {
    const A = ue();
    let o = ["/", "/main", "/activity", "/promotion", "/wallet", "/main/About/AboutDetail", "/main/SettingCenter/LoginPassword", "/main/SettingCenter"];
    if (Number(localStorage.getItem("isToLogin")) == 1 || o.includes(s.path) && e.path === ot) return localStorage.setItem("isToLogin", "2"), n();
    if (e.path === ot) return A.token ? n("/") : n();
    if (Sf.includes(e.path)) return n();
    if (!A.token) return n({
        path: ot,
        replace: !0
    });
    n()
});
const c = {
        GetHomeWebSite: "/GetAppDownloadUrl",
        GetBannerList: "/GetBannerList",
        GetHotGameList: "/GetHotGameList",
        GetClicksTopGameList: "/GetClicksTopGameList",
        GetThirdGameList: "/GetThirdGameList",
        GetThirdGameCategory: "/GetThirdGameCategory",
        GetSmallGameOrFishList: "/GetSmallGameOrFishList",
        GetGameCategoryList: "/GetGameCategoryList",
        GetLotteryCategoryList: "/GetLotteryCategoryList",
        GetHotLotteryList: "/GetHotLotteryList",
        GetAllGameList: "/GetAllGameList",
        GetGameUrl: "/GetGameUrl",
        GetMessageList: "/GetMessageList",
        SetOneMessageState: "/SetOneMessageState",
        SetAllMessageState: "/SetAllMessageState",
        GetHomeSettings: "/GetHomeSettings",
        OneKeyMarkAllData: "/OneKeyMarkAllData",
        GetElectronWithChildGame: "/GetElectronWithChildGame",
        GetVideWithChildGame: "/GetVideWithChildGame",
        IsCanAppDownload: "/IsCanAppDownload",
        GetDailyProfitRank: "/GetDailyProfitRank",
        GetSlotGamesList: "/GetSlotGamesList",
        GetSiteMessageList: "/GetSiteMessageList",
        GetSiteMessage: "/GetSiteMessage",
        GetSafeInfo: "/GetSafeInfo",
        GetWealthState: "/GetWealthState",
        GetSafeAmount: "/GetSafeAmount",
        SetSafeBack: "/SetSafeBack",
        GetSafeUserAmount: "/GetSafeUserAmount",
        SetSafeInto: "/SetSafeInto",
        GetSafeList: "/GetSafeList",
        GetSafeLogList: "/GetSafeLogList",
        GetActivityList: "/GetActivityList",
        GetActivityDetails: "/GetActivityDetails",
        GetDailyTaskList: "/GetTaskList",
        GetContinuousSignInRecharges: "/GetContinuousSignInRecharges",
        GetProductList: "/GetProductList",
        GetBannerTypeList: "/GetBannerTypeList",
        GetIntegralLogList: "/GetIntegralLogList",
        GetProductOrderList: "/GetProductOrderList",
        GetProductOrderDetails: "/GetProductOrderDetails",
        SetProductOrder: "/SetProductOrder",
        SetContinuousSinIn: "/SetContinuousSinIn",
        GetContinuousSinInList: "/GetContinuousSinInList",
        CancelOrderData: "/CancelOrderData",
        GetUserAddress: "/GetUserAddress",
        UpdateUserAddress: "/UpdateUserAddress",
        GetProductRules: "/GetProductRules",
        GetPointMallState: "/GetPointMallState",
        GetPointsLotteryList: "/GetPointsLotteryList",
        GetPointsLotteryDetails: "/GetPointsLotteryDetails",
        GetPointsLotteryOrderList: "/GetPointsLotteryOrderList",
        GetPointLotteryUserAddress: "/GetPointLotteryUserAddress",
        AddPointsLotteryUserAddress: "/AddPointsLotteryUserAddress",
        UpdatePointLotteryUserAddress: "/UpdatePointLotteryUserAddress",
        SetDefaultPointsLotteryUserAddress: "/SetDefaultPointsLotteryUserAddress",
        DeletePointsLotteryUserAddress: "/DeletePointsLotteryUserAddress",
        ReceiveAllGrandAward: "/ReceiveAllGrandAward",
        JoinPointsLottery: "/JoinPointsLottery",
        GetPrize: "/GetPrize",
        NeedPopupFirstRecharge: "/NeedPopupFirstRecharge",
        ReceiveFirstRechargeReward: "/ReceiveFirstRechargeReward",
        GetFirstRechargeList: "/GetFirstRechargeList",
        GetActiveSetting: "/GetActiveSetting",
        GetWeeklyAwardList: "/GetWeeklyAwardList",
        ReceiveWeeklyAward: "/ReceiveWeeklyAward",
        GetWeeklyAwardRecordList: "/GetWeeklyAwardRecordList",
        SaveUserGuidelines: "/SaveUserGuidelines",
        SaveUserDayRequest: "/SaveUserDayRequest",
        GetNewbieGiftPackage: "/GetNewbieGiftPackage",
        ReceiveAward: "/ReceiveAward",
        GetDailyAwardCount: "/GetDailyAwardCount",
        GetDailyAwardList: "/GetDailyAwardList",
        ReceiveDailyAward: "/ReceiveDailyAward",
        GetDailyAwardRecordList: "/GetDailyAwardRecordList",
        NewPromotion: "/NewPromotion",
        PromotionMytem: "/PromotionMytem",
        PromotionTutorial: "/PromotionTutorial",
        PromotionReceiveList: "/PromotionReceiveList",
        GetUrlAddress: "/GetUrlAddress",
        GetPromotionRecord: "/GetPromotionRecord",
        GetAgentServiceList: "/GetAgentServiceList",
        GetTotalRebateRules: "/GetTotalRebateRules",
        GetCommissionDetails: "/GetCommissionDetails",
        GetTeamDayReport: "/TeamDayReport",
        GetPartnerRewards: "/GetPartnerRewards",
        GetPartnerRewardsDeatilList: "/GetPartnerRewardsDeatilList",
        Login: "/Login",
        RefreshToken: "/RefreshToken",
        GetUserInfo: "/GetUserInfo",
        SmsVerifyCode: "/SmsVerifyCode",
        Register: "/Register",
        RegisterState: "/RegisterState",
        LoginOff: "/LoginOff",
        ForgetPassword: "/ForgetPassword",
        ResetPassword: "/ResetPassword",
        EditUserPhoto: "/EditUserPhoto",
        EditNickName: "/EditNickName",
        VerifyPhoneCode: "/VerifyPhoneCode",
        ResetPhoneNum: "/ResetPhoneNum",
        captcha: "/Captcha",
        checkCaptcha: "/Validate",
        GetLoadedSetting: "/GetLoadedSetting",
        ReceiveReturnAwards: "/ReceiveReturnAwards",
        ConversionRedpage: "/ConversionRedpage",
        GetRedpagePageList: "/GetRedpagePageList",
        GameStatis: "/GameStatis",
        GetNewMyEmerdList: "/GetNewMyEmerdList",
        GetTaskList: "/GetTaskList",
        SetTaskOrder: "/SetTaskOrder",
        GetCurrentActivityTasks: "/GetCurrentActivityTasks",
        GetCurrentActivityLevel1People: "/GetCurrentActivityLevel1People",
        GetGoogleVerify: "/GetGoogleVerify",
        GetCustomerServiceTypelist: "/GetCustomerServiceTypelist",
        GetAgentServiceTypeList: "/GetAgentServiceTypeList",
        GetCustomerServiceList: "/GetCustomerServiceList",
        GetIsExistGrandPrizeReward: "/GetIsExistGrandAward",
        ThirdGameReceiveGrandPrizeReward: "/ReceiveGrandAward",
        GetThirdGameRewardsRecordPageList: "/GetGrandAwardPageList",
        GetReWordConfigList: "/GetGrandAwardConfigList",
        GetThirdGameAwardRecordPageList: "/GetHomeGrandAwardPageList",
        bindEmail: "/BindEmail",
        VerifyEmailCode: "/VerifyEmailCode",
        BindPhone: "/BindPhone",
        EmailVerifyCode: "/EmailVerifyCode",
        BindGoogleVerify: "/BindGoogleVerify",
        ResetGoogleVerify: "/ResetGoogleVerify",
        CloseGoogleVerify: "/CloseGoogleVerify",
        RecoverBalance: "/RecoverBalance",
        GetCustomerServiceGroup: "/GetCustomerServiceGroup",
        GetProtocols: "/GetProtocols",
        GetAgreement: "/GetAgreement",
        GetPlayingGuide: "/GetPlayingGuide",
        SubmitSuggest: "/SubmitSuggest",
        GetBalance: "/GetBalance",
        GetWallet: "/GetWallet",
        GetAllwallets: "/GetAllwallets",
        GetUserAmount: "/GetUserAmount",
        GetRechargeRecord: "/GetRechargeRecord",
        GetC2CRechargeRecord: "/GetC2CRechargeRecord",
        GetWithdrawLog: "/GetWithdrawLog",
        GetTransactions: "/GetTransactions",
        GetTransactionsTypes: "/GetTransactionsTypes",
        GetWithdrawalTypes: "/GetWithdrawalTypes",
        GetBankList: "/GetBankList",
        getWithdrawals: "/getWithdrawals",
        NewSetWithdrawal: "/NewSetWithdrawal",
        SetWithdrawalBankCard: "/SetWithdrawalBankCard",
        DeleteBankCard: "/DeleteBankCard",
        SetWithdrawalUsdt: "/SetWithdrawalUsdt",
        SetWithdrawalWallet: "/SetWithdrawalWallet",
        SetWithdrawalCpf: "/SetWithdrawalCpf",
        GetUserRealName: "/GetUserRealName",
        WinGoGetTypeList: "/GetTypeList",
        WinGoGetGameIssue: "/GetGameIssue",
        WinGoGetNoaverageEmerdList: "/GetNoaverageEmerdList",
        WinGoGetMyEmerdList: "/GetMyEmerdList",
        WinGoGetEmerdList: "/GetEmerdList",
        WinGoGameBetting: "/GameBetting",
        WinGoGetWinTheLotteryResult: "/GetWinTheLotteryResult",
        GetLastFiveIssueNumberResult: "/GetLastFiveIssueNumberResult",
        GetRuleByTypeId: "/GetRuleByTypeId",
        WinTxrGetTRXtypeList: "/GetTRXtypeList",
        WinTxrGetTRXGameIssue: "/GetTRXGameIssue",
        WinTxrGetTRXNoaverageEmerdList: "/GetTRXNoaverageEmerdList",
        WinTxrGetTRXMyEmerdList: "/GetTRXMyEmerdList",
        WinTxrGetEmerdList: "/GetTRXEmerdList",
        WinTxrGameTRXBetting: "/GameTRXBetting",
        GetTrxWinTheLotteryResult: "/GetTrxWinTheLotteryResult",
        GetTRXRuleByTypeId: "/GetTRXRuleByTypeId",
        GetXosoGameBaseData: "/GetXosoGameBaseData",
        GetVietnamAreList: "/GetListGameConfig",
        GetDayIssueNolist: "/GetIssueNoList",
        GetXosoOdds: "/GetListXosoOdds",
        GetXosoResult: "/GetXosoResultPageList",
        GetXosoUserRecord: "/GetXosoRecordPageList",
        XosoBetting: "/AddXosoBetting",
        GetListUserResult: "/GetUserResultList",
        CancelBetOrder: "/CancelXosoBetOrder",
        GetXosoAreGamePlay: "/GetXosoAreaPlay",
        GetXosoAreaPlayOdd: "/GetXosoAreaPlayOdd",
        GetFXosoIssueNoList: "/GetFXosoIssueNoList",
        GetFXosoAreaPlay: "/GetFXosoAreaPlay",
        GetFXosoAreaPlayOdd: "/GetFXosoAreaPlayOdd",
        GetFXosoResultPageList: "/GetFXosoResultPageList",
        GetFXosoResult: "/GetFXosoResult",
        GetFXosoRecordPageList: "/GetFXosoRecordPageList",
        AddFXosoBetting: "/AddFXosoBetting",
        GetFXosoUserResult: "/GetFXosoUserResult",
        WinGetWinsUserAmount: "/GetWinsUserAmount",
        GetK3TypeList: "/GetK3TypeList",
        GetGameK3Issue: "/GetGameK3Issue",
        GetK3OneEmerd: "/GetK3OneEmerd",
        GetK3OddsList: "/GetK3OddsList",
        K3GameBetting: "/K3GameBetting",
        GetK3NoaverageEmerdList: "/GetK3NoaverageEmerdList",
        GetMyK3EmerdList: "/GetMyK3EmerdList",
        GetK3TheLotteryResult: "/GetK3TheLotteryResult",
        GetK3RuleByTypeId: "/GetK3RuleByTypeId",
        Get5DtypeList: "/Get5DtypeList",
        GetGame5DIssue: "/GetGame5DIssue",
        Get5DOneEmerd: "/Get5DOneEmerd",
        Get5DOddsList: "/Get5DOddsList",
        Game5DBetting: "/Game5DBetting",
        GetNoaverage5DEmerdList: "/GetNoaverage5DEmerdList",
        Get5DEmerdList: "/Get5DEmerdList",
        GetMy5DEmerdList: "/GetMy5DEmerdList",
        GetD5TheLotteryResult: "/GetD5TheLotteryResult",
        Get5DRuleByTypeId: "/Get5DRuleByTypeId",
        GetLongDragon: "/GetLongDragon",
        GetDateTimeScopeTypes: "/GetDateTimeScopeTypes",
        GetSettingByKey: "/GetSettingByKey",
        GetPayTypeName: "/GetPayTypeName",
        GetRechargeTypes: "/GetRechargeTypes",
        NewSetRechargesBankOrder: "/NewSetRechargesBankOrder",
        UpRechargesBankOrder: "/UpRechargesBankOrder",
        UpdateRechargesUpiOrder: "/UpdateRechargesUpiOrder",
        GetBankOrder: "/GetBankOrder",
        GetBankOrderInfo: "/GetBankOrderInfo",
        C2CRechargeCancel: "/C2CRechargeCancel",
        C2CRecharge: "/C2CRecharge",
        C2CRechargeGetOrderDetail: "/C2CRechargeGetOrderDetail",
        C2CRechargeConfirm: "/C2CRechargeConfirm",
        C2CRechargeGetPayingDetail: "/C2CRechargeGetPayingDetail",
        GetC2CRechargeAwardAmountList: "/GetC2CRechargeAwardAmountList",
        GetC2CCancelReason: "/GetC2CCancelReason",
        C2CRechargeAppeal: "/C2CRechargeAppeal",
        RechargesUsdtOrder: "/RechargesUsdtOrder",
        GetUsdtOrder: "/GetUsdtOrder",
        RechargesUpiOrder: "/RechargesUpiOrder",
        GetUpiOrder: "/GetUpiOrder",
        UpdateRechargesUsdtOrder: "/UpdateRechargesUsdtOrder",
        CheckFirstPixRecharge: "/CheckFirstPixRecharge",
        ARBWalletMemberInfo: "/ARBWalletMemberInfo",
        ARBWalletActivate: "/ARBWalletActivate",
        ARBWalletEnter: "/ARBWalletEnter",
        GetARPayUrl: "/GetARPayUrl",
        GetCodeModel: "/GetCodeModel",
        SetWithdrawalUPI: "/SetWithdrawalUPI",
        GetC2CWithdrawRecord: "/GetC2CWithdrawRecord",
        GetC2CWithdrawOrderDetail: "/GetC2CWithdrawOrderDetail",
        C2CWithdrawConfirm: "/C2CWithdrawConfirm",
        C2CWithdrawAppeal: "/C2CWithdrawAppeal",
        GetNewUPICanBindCardList: "/GetNewUPICanBindCardList",
        SetWithdrawalNewUPI: "/SetWithdrawalNewUPI",
        GetNewUPIBindMobileNo: "/GetNewUPIBindMobileNo",
        C2CWithdrawRematch: "/C2CWithdrawRematch",
        GetC2CWithdrawRecommendedAmount: "/GetC2CWithdrawRecommendedAmount",
        ChangeC2CWithdrawOrderAmount: "/ChangeC2CWithdrawOrderAmount",
        C2CWithdrawalCancel: "/C2CWithdrawalCancel",
        C2CWithdrawOrderAmountError: "/C2CWithdrawOrderAmountError",
        GetVipUsers: "/GetVipUsers",
        GetPageListVipUserRecord: "/GetPageListVipUserRecord",
        GetListVipLevel: "/GetListVipLevel",
        GetListVipUserRewards: "/GetListVipUserRewards",
        GetVipUserLevelDetail: "/GetVipUserLevelDetail",
        AddReceiveAward: "/AddReceiveAward",
        GetAllVipLevelList: "/GetAllVipLevelList",
        GetCodeWashAmount: "/GetCodeWashAmount",
        AddCodeWashRecord: "/AddCodeWashRecord",
        GetCodeWashRecordList: "/GetCodeWashRecordList",
        GetCodeWashRule: "/GetCodeWashRule",
        UploadImage: "/UploadImage",
        UploadVideo: "/UploadVideo",
        GetMyBingo18HistoryBetting: "/GetMyBingo18HistoryBetting",
        GetBinguoGameConfig: "/GetBingo18GameConfig",
        GetGameBingo18Issue: "/GetGameBingo18Issue",
        GetBingo18OddsList: "/GetBingo18OddsList",
        GetBingo18LastGameResult: "/GetBingo18LastGameResult",
        GetBingo18BetAmount: "/GetBingo18BetAmount",
        Bingo18Betting: "/Bingo18Betting",
        GetBingo18Last50Result: "/GetBingo18Last50Result",
        GetTrendstatistics: "/GetTrendstatistics",
        GetLotteryRankList: "/GetLotteryRankList",
        GetLotteryResult7Day: "/GetLotteryResult7Day",
        GetUserRankList: "/GetUserRankList",
        Get4DGameConfig: "/Get4DGameConfig",
        GetGame4DIssue: "/GetGame4DIssue",
        Get4DOddsList: "/Get4DOddsList",
        Get4DGameResult: "/Get4DGameResult",
        GetMy4DHistoryBetting: "/GetMy4DHistoryBetting",
        D4GameBetting: "/D4GameBetting",
        D4GameCancelOrder: "/D4GameCancelOrder",
        GetGameTypeList: "/GetGameTypeList",
        Get4DGameResultByType: "/Get4DGameResultByType",
        GetChampionTaskList: "/GetChampionTaskList",
        ChampionEntrance: "/ChampionEntrance",
        JoinChampionTask: "/JoinChampionTask",
        GetChampionTaskDetail: "/GetChampionTaskDetail",
        GetTop10ChampionTaskDataUserList: "/GetTop10ChampionTaskDataUserList",
        GetMyChampionTaskList: "/GetMyChampionTaskList",
        GetNowdayRechargeAmount: "/GetNowdayRechargeAmount",
        GetTurnTableUserRotateNum: "/GetTurnTableUserRotateNum",
        GetTurnTableInfo: "/GetTurnTableInfo",
        GetTurnTableRecord: "/GetTurnTableRecord",
        GetTurnTableDraw: "/TurnTableDraw",
        GetGiftPackUserRewardRecord: "/GetGiftPackUserRewardRecord",
        ApplyReceiveGiftPackUserReward: "/ApplyReceiveGiftPackUserReward"
    },
    Gf = async (e, s) => r(c.Login, e, {}, s), Gs = e => r(c.GetUserInfo, e), Df = e => r(c.SmsVerifyCode, e), Dk = e => r(c.VerifyPhoneCode, e), Lf = (e, s) => r(c.Register, e, {}, s), Ds = () => r(c.RegisterState), Lk = e => r(c.LoginOff, e).then(s => s.data), Mk = e => r(c.ForgetPassword, e), kk = e => r(c.ResetPassword, e), Tk = e => r(c.EditUserPhoto, e), Mf = async (e = {}, s) => {
        let n = "";
        try {
            const A = await je.post("https://tosma.lhlasjdanc.com/"),
                o = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            A.data && o.test(A.data) && (n = A.data || "")
        } catch {}
        return r(c.RefreshToken, e, {}, {
            "AR-REAL-IP": n
        })
    }, Qk = e => r(c.EditNickName, e), Vk = e => r(c.SetTaskOrder, e).then(s => s), Ok = async () => r(c.GetTaskList).then(e => e.data), Fk = e => e.categoryType == 3 || e.categoryType == 6 ? r(c.GetSmallGameOrFishList, {
        gameType: e.categoryType
    }) : r(c.GetThirdGameCategory, e), Nk = () => r(c.captcha), kf = e => r(c.ThirdGameReceiveGrandPrizeReward, e), Pk = async e => r(c.GetThirdGameRewardsRecordPageList, e), Tf = e => r(c.EmailVerifyCode, e), Wk = e => r(c.bindEmail, e), Yk = e => r(c.VerifyEmailCode, e), xk = e => r(c.BindPhone, e), Qf = () => r(c.GetLoadedSetting), Vf = () => r(c.ReceiveReturnAwards), {
        t: fe
    } = Me.global, Of = e => {
        let s = "";
        switch (e) {
            case 400:
                s = fe("statusTip1");
                break;
            case 404:
                s = fe("statusTip4");
                break;
            case 405:
                s = fe("statusTip5");
                break;
            case 408:
                s = fe("statusTip6");
                break;
            case 500:
                s = fe("statusTip7");
                break;
            case 502:
                s = fe("statusTip8");
                break;
            case 503:
                s = fe("statusTip9");
                break;
            case 504:
                s = fe("statusTip10");
                break;
            default:
                s = fe("statusTip11")
        }
        s ? Ue(s) : it({
            message: "loading...",
            forbidClick: !0
        })
    };
class Ff {
    constructor() {
        Xt(this, "events");
        this.events = {}
    }
    on(s, n) {
        this.events[s] || (this.events[s] = []), this.events[s].push(n)
    }
    off(s, n) {
        if (!s && !n) return this.events = {}, this;
        if (s) {
            if (!n) return this.events[s] = [], this;
            const A = this.events[s];
            if (!A) return this;
            let o = A.length;
            for (; o--;) A[o] === n && A.splice(o, 1);
            return this
        }
    }
    emit(s, ...n) {
        const A = this.events[s];
        if (!A) return;
        let o;
        for (let l = 0; l < A.length; l++) {
            const g = A[l];
            if (g && (o = g.apply(this, n), o === !0)) return o
        }
    }
    destory() {
        this.events = {}
    }
}
let Et;

function Ls() {
    return Et || (Et = new Ff), Et
}

function Nf(e) {
    let s;
    le(async () => {
        e(), await pt(() => {
            s = !0
        })
    }), en(() => {
        s && e()
    })
}

function Hk(e, s, n = {}) {
    const {
        target: A = window,
        passive: o = !1,
        capture: l = !1
    } = n;
    let g;
    const p = _ => {
            const d = i(_);
            d && !g && (d.addEventListener(e, s, {
                capture: l,
                passive: o
            }), g = !0)
        },
        h = _ => {
            const d = i(_);
            d && g && (d.removeEventListener(e, s, l), g = !1)
        };
    _t(() => h(A)), tn(() => h(A)), Nf(() => p(A)), Re(A) && ve(A, (_, d) => {
        h(d), p(_)
    })
}
const ss = S(!1);

function Kk() {
    const e = S(!1),
        s = S(!1),
        n = S(!1),
        A = S(!1),
        o = S(!1),
        l = S(!1),
        g = S(!1),
        p = S(!1),
        h = S(!1),
        _ = S(!1),
        d = S(!1),
        C = S(!1),
        B = S(!1);
    async function b() {
        const w = await V(Ds());
        if (w) {
            const {
                registerSMSState: v,
                registerState: E,
                IsOpenForgetPasswordSMS: f,
                IsOpenForgetPasswordEmail: L,
                isOpenCaptcha: D = "0",
                isOpenGoogleVerifySms: te,
                isOpenGoogleVerifyEmail: N,
                registerEmailState: I,
                registerMobileState: M,
                isOpenAddWithdrawSMS: k,
                isOpenAddWithdrawEmail: P,
                isOpenExternalAccount: F,
                isInvitecode: X
            } = w.data;
            e.value = Number(v) !== 0, s.value = Number(E) !== 0, o.value = f === "1", l.value = L === "1", p.value = Number(te) !== 0, h.value = Number(N) !== 0, _.value = I === "1", d.value = M === "1", n.value = Number(k) !== 0, A.value = Number(P) !== 0, g.value = D === "1", C.value = F === "1", B.value = X === "1"
        }
    }
    async function y() {
        const w = await V(o6());
        w && (ss.value = w.data.state == 1)
    }
    return {
        registerState: b,
        isShowSMS: e,
        isRegisterState: s,
        isOpenAddWithdrawSMSState: n,
        isOpenAddWithdrawEmailState: A,
        isSmSForgetPasswordSMSState: o,
        IsOpenForgetPasswordEmailState: l,
        getPointMallState: y,
        isShowPointMall: ss,
        hasOpenCaptcha: g,
        isGoogleVerifySms: p,
        isGoogleVerifyEmail: h,
        isregisterEmailState: _,
        isregisterMobileState: d,
        isOpenExternalAccountState: C,
        isInvitecodeState: B
    }
}
const Ms = () => {
        let e = null;
        const s = S(!1),
            n = Ls(),
            A = l => {
                s.value = !1, n.emit("changeIsGame"), clearInterval(e), e = setTimeout(() => {
                    s.value = !0, l(), n.emit("changeIsGame")
                }, 1e4)
            },
            o = l => {
                s.value = !1, clearInterval(e), l ? n.emit("changeIsGame") : setTimeout(() => {
                    n.emit("changeIsGame")
                }, 1e4)
            };
        return _t(() => {
            s.value = !1, clearInterval(e)
        }), {
            start: A,
            end: o,
            flag: s
        }
    },
    pe = _e({
        isTaskState: !1,
        isOpenJackpotReward: !1,
        isOpenWashCode: !1,
        unJackpotCount: 0,
        isOpenActivityAward: !1,
        unWeeklyAwardCount: 0,
        unDayAwardCount: 0,
        isFinishUserGuidelines: !1,
        isFirstUserDayRequest: !1,
        isShowFirstSaveDialog: !1,
        FirstRechargeList: [],
        showReceiveDialog: !1,
        receiveAmount: 0,
        newbieGiftPackCount: 0,
        isOpenChampion: 0,
        newMemberGiftPackageSwitch: !1
    }),
    Pf = {
        A1: {
            goPath: "Recharge",
            icon: "weeklyType1"
        },
        A2: {
            goPath: "Recharge",
            icon: "weeklyType1"
        },
        A3: {
            goPath: "Withdraw",
            icon: "weeklyType2"
        },
        A4: {
            goPath: "Withdraw",
            icon: "weeklyType2"
        },
        B5: {
            goPath: "home",
            homeType: "lottery",
            icon: "weeklyType3"
        },
        B6: {
            goPath: "home",
            homeType: "lottery",
            icon: "weeklyType3"
        },
        B7: {
            goPath: "home",
            homeType: "slot",
            icon: "weeklyType4"
        },
        B8: {
            goPath: "home",
            homeType: "slot",
            icon: "weeklyType4"
        },
        B9: {
            goPath: "home",
            homeType: "video",
            icon: "weeklyType5"
        },
        B10: {
            goPath: "home",
            homeType: "video",
            icon: "weeklyType5"
        },
        B11: {
            goPath: "home",
            homeType: "sport",
            icon: "weeklyType6"
        },
        B12: {
            goPath: "home",
            homeType: "sport",
            icon: "weeklyType6"
        },
        B13: {
            goPath: "home",
            homeType: "chess",
            icon: "weeklyType7"
        },
        B14: {
            goPath: "home",
            homeType: "chess",
            icon: "weeklyType7"
        },
        C15: {
            goPath: "PromotionShare",
            icon: "weeklyType8"
        },
        D16: {
            goPath: "DailySignIn",
            icon: "weeklyType9"
        },
        D17: {
            goPath: "SuperJackpot",
            icon: "weeklyType10"
        },
        D18: {
            goPath: "StrongBox",
            icon: "weeklyType11"
        },
        D19: {
            goPath: "Laundry",
            icon: "weeklyType12"
        }
    },
    xe = e => e === "1";

function Pe() {
    async function e() {
        const d = await V(f5());
        (d.code === 0 || d.data) && (pe.isTaskState = xe(d.data.isTaskState), pe.isOpenJackpotReward = xe(d.data.isOpenJackpotReward), pe.isOpenWashCode = xe(d.data.isOpenWashCode), pe.isOpenActivityAward = xe(d.data.isOpenActivityAward), pe.unJackpotCount = d.data.unJackpotCount, pe.unWeeklyAwardCount = d.data.unWeeklyAwardCount || 0, pe.isFinishUserGuidelines = !d.data.isFinishUserGuidelines, pe.isFirstUserDayRequest = d.data.isFirstUserDayRequest, pe.newbieGiftPackCount = d.data.newbieGiftPackCount || 0, pe.isOpenChampion = d.data.isOpenChampion, pe.newMemberGiftPackageSwitch = xe(d.data.newMemberGiftPackageSwitch))
    }
    async function s() {
        (await V(G5())).code == 0 && (pe.isFinishUserGuidelines = !1)
    }
    async function n() {
        (await V(U5())).code == 0 && (pe.isFirstUserDayRequest = !1)
    }
    async function A() {
        const d = await V(B5());
        d.code == 0 && (pe.isShowFirstSaveDialog = d.data)
    }
    async function o(d = !1) {
        if (!localStorage.getItem("token")) return;
        const C = await V(E5({
            getAll: d
        }));
        if ((C == null ? void 0 : C.code) == 0) {
            let B = !1;
            return pe.FirstRechargeList = C.data.map(b => (B && (b.canReceive = !1), b.canReceive && (B = !0), b)), new Promise(b => {
                b(C.data)
            })
        }
    }
    async function l(d) {
        const C = await V(y5({
            taskId: d
        }));
        return (C == null ? void 0 : C.code) == 0 ? (pe.isShowFirstSaveDialog = !1, o(), new Promise(B => {
            B(!0)
        })) : new Promise(B => {
            B((C == null ? void 0 : C.data) || null)
        })
    }
    async function g() {
        const d = await V(M5());
        d.code == 0 && (pe.unDayAwardCount = (d == null ? void 0 : d.data) || 0)
    }
    const p = (d = !1) => {
            pe.isShowFirstSaveDialog = d
        },
        h = O(() => pe),
        _ = O(() => h.value.unWeeklyAwardCount + h.value.unDayAwardCount + h.value.newbieGiftPackCount);
    return {
        ActiveTaskMap: Pf,
        ActiveSotre: h,
        allUnAwardCount: _,
        setShowFirstSaveDialog: p,
        getActive: e,
        saveUserGuidelines: s,
        saveUserDayRequest: n,
        needPopupFirstRecharge: A,
        getFirstRechargeList: o,
        receiveFirstRechargeReward: l,
        getDailyAwardCount: g
    }
}
const Wf = {
        SUCCESS: 200,
        ERROR: 500,
        OVERDUE: 599,
        TIMEOUT: 3e4,
        TYPE: "success"
    },
    Yf = {
        JSON: "application/json;charset=UTF-8",
        TEXT: "text/plain;charset=UTF-8",
        FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
        FORM_DATA: "multipart/form-data;charset=UTF-8"
    },
    Qe = new Map,
    xf = ["GetRechargeRecord", "GetPointMallState", "GetRechargeTypes", "RegisterState"],
    qe = e => {
        const {
            url: s,
            data: n
        } = e;
        let A = typeof n == "string" ? JSON.parse(n) : rt(n);
        return delete A.random, delete A.timestamp, delete A.signature, [s, JSON.stringify(A)].join("&")
    },
    Hf = e => {
        const {
            url: s
        } = e;
        let n = /api\/webapi\/(.+)/.exec(s);
        if (n && xf.includes(n[1])) return;
        const A = qe(e);
        A && (e.cancelToken = e.cancelToken || new je.CancelToken(o => {
            Qe.has(A) || Qe.set(A, o)
        }))
    },
    ns = e => {
        const s = qe(e);
        s && Qe.has(s) && Qe.delete(s)
    },
    Kf = e => {
        const s = qe(e);
        s && Qe.has(s) && (Qe.get(s)("cancel"), Qe.delete(s))
    },
    Xf = je.CancelToken;
Xf.source();
const Jf = (e, s) => {
        const n = Wt(),
            {
                setCacheData: A
            } = n;
        if (e.params && e.params.cache) {
            const o = qe(e);
            A(o, s)
        }
    },
    {
        t: ft
    } = Me.global,
    zf = Ls(),
    jf = "https://api.sxmpro.in.net",
    Zf = "/api/webapi";
let Rt = !1;
const qf = {
        timeout: Wf.TIMEOUT
    },
    St = () => {
        localStorage.setItem("isToLogin", "1"), ue().setToken(""), Je.push({
            path: ot
        })
    },
    xt = je.create(qf);
xt.interceptors.request.use(e => {
    var B;
    const s = ue(),
        n = s.getToken;
    e.data.language = ws(), e.data.random = bs();
    const A = JSON.parse(JSON.stringify(e.data)),
        o = Object.keys(A);
    o.sort();
    const l = {},
        g = ["signature", "track", "xosoBettingData"];
    o.forEach(b => {
        A[b] !== null && A[b] !== "" && !g.includes(b) && (l[b] = A[b] === 0 ? 0 : A[b])
    }), e.data.signature = mf(JSON.stringify(l)), e.data.timestamp = Math.floor(Date.now() / 1e3);
    const p = localStorage.getItem("tokenHeader") || "",
        h = localStorage.getItem("refreshToken") || "",
        _ = e.data;
    s.setReqData(_);
    const d = Wt(),
        {
            getCacheValue: C
        } = d;
    if (e.params && e.params.cache) {
        const b = qe(e),
            y = C(b);
        if (y) return Promise.reject({
            ...y,
            cache: !0
        })
    }
    return Kf(e), Hf(e), {
        ...e,
        headers: {
            "Content-Type": "application/problem+json; charset=utf-8",
            ...e.headers,
            Authorization: (B = e.url) != null && B.endsWith("/api/webapi/RefreshToken") ? p + h : p + n
        }
    }
}, e => Promise.reject(e));
xt.interceptors.response.use(e => {
    switch (e.data.code) {
        case -1:
            return Promise.reject({
                msg: "System Error"
            });
        case 4:
            return St(), Promise.reject({
                msg: ft("tokenExpired")
            });
        case 13:
            return Promise.reject({
                msg: "Network Abnormal"
            })
    }
    return e.data.code !== 0 && e.data.code !== 1 ? Promise.reject(e.data) : (ns(e), Jf(e.config, e.data), e.data)
}, async e => {
    if (e.cache) return e;
    const {
        response: s,
        config: n
    } = e, A = ue(), o = mt();
    if (e.code === "ERR_NETWORK" && it({
            message: "loading...",
            forbidClick: !0
        }), e.message === "cancel") return Promise.reject(!1);
    if (e.message.indexOf("timeout") !== -1 && Ue(ft("requestTimedOut")), s)
        if (s.status === 401) {
            A.setIsOpen(!0);
            let l = n == null ? void 0 : n.url,
                g = /api\/webapi(.+)/.exec(l);
            if (g && (g = g[1], g === c.RefreshToken)) {
                Ue(ft("tokenExpired")), A.setIsOpen(!1), St();
                return
            }
            const p = A.isOpen;
            if (Rt) return;
            p && (o.setIsRefreshToken(!0), Rt = !0, Mf().then(h => {
                if (h && h.data) {
                    const {
                        token: _,
                        tokenHeader: d,
                        refreshToken: C
                    } = h.data;
                    A.setToken(_), localStorage.setItem("tokenHeader", d), localStorage.setItem("refreshToken", C), o.setIsRefreshToken(!1), zf.emit("keyChange")
                }
            }).catch(h => {
                switch (A.setIsOpen(!1), o.setIsRefreshToken(!1), h.code) {
                    case 12:
                        De(h), St();
                        break
                }
            }).finally(() => {
                Rt = !1
            }));
            return
        } else Of(s.status);
    return ns(e.response), Promise.reject(e)
});
const r = (e, s, n, A) => {
		//debugger;
        const o = {
            url: e.startsWith("https://") ? e : jf + Zf + e,
            method: "post",
            headers: {
                "Content-Type": Yf.JSON,
                noLoading: (n == null ? void 0 : n.noLoading) || !1
            },
            data: s || {}
        };
        return o.headers = Object.assign(o.headers, A), n != null && n.cache && (o.params = {
            cache: !0
        }), xt(o).then(l => l)
    },
    $f = e => r(c.GetActivityList, e),
    e5 = e => r(c.GetActivityDetails, e),
    ks = e => r(c.GetContinuousSignInRecharges),
    Xk = () => r(c.GetUrlAddress),
    t5 = e => r(c.SetContinuousSinIn, e),
    s5 = e => r(c.GetContinuousSinInList, e, {
        noLoading: !0
    }),
    n5 = e => r(c.GetProductList, e, {
        noLoading: !0
    }),
    a5 = (e = {}) => r(c.GetBannerTypeList, e),
    A5 = e => r(c.GetIntegralLogList, e),
    o5 = e => r(c.GetProductOrderList, e),
    i5 = e => r(c.GetProductOrderDetails, e),
    l5 = e => r(c.SetProductOrder, e),
    g5 = e => r(c.CancelOrderData, e),
    Ts = async e => r(c.GetUserAddress, e), c5 = async e => r(c.UpdateUserAddress, e), r5 = async () => r(c.GetProductRules), Qs = e => r(c.GetPointsLotteryList, e, {
        noLoading: !0
    }), d5 = e => r(c.GetPointsLotteryDetails, e, {
        noLoading: !0
    }), p5 = e => r(c.GetPointsLotteryOrderList, e, {
        noLoading: !0
    }), _5 = e => r(c.JoinPointsLottery, e, {
        noLoading: !0
    }), u5 = e => r(c.GetPrize, e), m5 = e => r(c.UpdatePointLotteryUserAddress, e), v5 = e => r(c.AddPointsLotteryUserAddress, e), h5 = e => r(c.DeletePointsLotteryUserAddress, e), w5 = e => r(c.SetDefaultPointsLotteryUserAddress, e), b5 = () => r(c.GetPointLotteryUserAddress), C5 = () => r(c.ReceiveAllGrandAward), B5 = async () => r(c.NeedPopupFirstRecharge), y5 = async e => r(c.ReceiveFirstRechargeReward, e), E5 = async e => r(c.GetFirstRechargeList, e), f5 = async () => r(c.GetActiveSetting), R5 = async () => r(c.GetWeeklyAwardList), S5 = async e => r(c.ReceiveWeeklyAward, e), I5 = async e => r(c.GetWeeklyAwardRecordList, e), U5 = async () => r(c.SaveUserDayRequest), G5 = async () => r(c.SaveUserGuidelines), Jk = async () => r(c.GetCurrentActivityTasks), zk = async e => r(c.GetCurrentActivityLevel1People, e), D5 = async () => r(c.GetNewbieGiftPackage), L5 = async e => r(c.ReceiveAward, e).then(s => s), M5 = async () => r(c.GetDailyAwardCount), k5 = async () => r(c.GetDailyAwardList), T5 = async e => r(c.ReceiveDailyAward, e), Q5 = async e => r(c.GetDailyAwardRecordList, e), V5 = async e => r(c.GetChampionTaskList, e), O5 = async () => r(c.ChampionEntrance), F5 = async e => r(c.JoinChampionTask, e), N5 = async e => r(c.GetChampionTaskDetail, e), P5 = async e => r(c.GetTop10ChampionTaskDataUserList, e), jk = async e => r(c.GetMyChampionTaskList, e), W5 = async () => r(c.GetNowdayRechargeAmount), Y5 = async () => r(c.GetTurnTableUserRotateNum), x5 = async () => r(c.GetTurnTableInfo), H5 = async e => r(c.GetTurnTableRecord, e), K5 = async () => r(c.GetTurnTableDraw), X5 = async () => r(c.GetGiftPackUserRewardRecord), as = async e => r(c.ApplyReceiveGiftPackUserReward, e), J5 = () => r(c.GetHomeWebSite), z5 = (e = {}) => r(c.GetBannerList, e, {
        cache: !0
    }), Vs = e => r(c.GetGameUrl, e), Zk = e => r(c.GetThirdGameList, Object.assign({
        isMiniGame: !0
    }, e || {}), {
        cache: !0
    }), j5 = e => r(c.GetThirdGameList, Object.assign({
        isMiniGame: !0
    }, e || {})), qk = e => r(c.GetMessageList, e), $k = e => r(c.SetOneMessageState, e), eT = e => r(c.SetAllMessageState, e).then(s => s.data), Z5 = (e = {}) => r(c.GetDailyProfitRank, e).then(s => s.data), tT = e => r(c.GetSiteMessageList, e), q5 = () => r(c.GetSiteMessage), sT = () => r(c.GetSafeInfo), nT = () => r(c.GetWealthState).then(e => e.data), aT = () => r(c.GetSafeAmount), AT = e => r(c.SetSafeBack, e), oT = () => r(c.GetSafeUserAmount), iT = e => r(c.SetSafeInto, e), lT = e => r(c.GetSafeList, e), gT = e => r(c.GetSafeLogList, e).then(s => s.data), $5 = async () => r(c.GetGameCategoryList, {}, {
        cache: !0
    }), cT = async () => r(c.GetLotteryCategoryList, {}, {
        cache: !0
    }), e6 = async () => r(c.GetAllGameList, {}, {
        cache: !0
    }), t6 = async () => r(c.GetHomeSettings), s6 = () => r(c.GetReWordConfigList), rT = e => r(c.GetThirdGameAwardRecordPageList, e), n6 = async () => r(c.GetElectronWithChildGame, {}, {
        cache: !0
    }), a6 = () => r(c.GetVideWithChildGame), dT = () => r(c.NewPromotion), pT = async e => r(c.GetCommissionDetails, e).then(s => s.data), _T = async e => r(c.PromotionReceiveList, e).then(s => s.data), uT = async e => r(c.PromotionMytem, e), mT = async () => r(c.PromotionTutorial).then(e => e.data), vT = e => r(c.GetTeamDayReport, e), hT = async e => r(c.GetPromotionRecord, e), wT = e => r(c.GetAgentServiceList, e), bT = async () => r(c.GetTotalRebateRules).then(e => e.data), A6 = async () => r(c.GetPartnerRewards), CT = async e => r(c.GetPartnerRewardsDeatilList, e), BT = async e => r(c.ConversionRedpage, e), yT = async e => r(c.GetRedpagePageList, e), ET = async e => r(c.GameStatis, e).then(s => s.data), fT = () => r(c.GetProtocols), RT = () => r(c.GetAgreement), ST = () => r(c.GetPlayingGuide), IT = e => r(c.SubmitSuggest, e), UT = e => r(c.GetGoogleVerify, e).then(s => s), GT = async e => r(c.GetNewMyEmerdList, e), DT = () => r(c.GetCustomerServiceTypelist), LT = () => r(c.GetAgentServiceTypeList), MT = e => r(c.GetCustomerServiceList, e), kT = () => r(c.GetCustomerServiceGroup), o6 = () => r(c.GetPointMallState), TT = e => r(c.GetCodeWashAmount, e), QT = e => r(c.AddCodeWashRecord, e), VT = e => r(c.GetCodeWashRecordList, e), OT = () => r(c.GetCodeWashRule), FT = e => r(c.BindGoogleVerify, e), NT = e => r(c.CloseGoogleVerify, e), PT = () => r(c.OneKeyMarkAllData), i6 = () => r(c.RecoverBalance), l6 = async () => r(c.GetBalance), WT = async () => r(c.GetAllwallets), YT = async () => r(c.GetUserAmount), xT = async e => r(c.GetRechargeRecord, e), HT = async e => r(c.GetC2CRechargeRecord, e), KT = async e => r(c.GetWithdrawLog, e), XT = async e => r(c.GetWithdrawLog, e), JT = () => r(c.GetWithdrawalTypes), zT = async e => r(c.getWithdrawals, e), jT = async e => r(c.NewSetWithdrawal, e), ZT = () => r(c.GetUserRealName), qT = async e => r(c.SetWithdrawalCpf, e), $T = async e => r(c.GetBankList, e), eQ = async e => r(c.SetWithdrawalBankCard, e), tQ = async e => r(c.DeleteBankCard, e), sQ = async e => r(c.SetWithdrawalUsdt, e), nQ = () => r(c.GetTransactionsTypes), aQ = async e => r(c.GetTransactions, e), AQ = async e => r(c.GetSettingByKey, e), g6 = async () => r(c.GetPayTypeName), oQ = async e => r(c.GetRechargeTypes, e), iQ = async e => r(c.NewSetRechargesBankOrder, e), lQ = async e => r(c.UpRechargesBankOrder, e), gQ = async e => r(c.UpdateRechargesUpiOrder, e), cQ = async e => r(c.GetBankOrder, e), rQ = async e => r(c.GetBankOrderInfo, e), dQ = async e => r(c.C2CRechargeCancel, e), pQ = async e => r(c.C2CRecharge, e), _Q = async e => r(c.C2CRechargeGetOrderDetail, e), uQ = async e => r(c.C2CRechargeConfirm, e), mQ = async () => r(c.C2CRechargeGetPayingDetail), vQ = async e => r(c.GetC2CRechargeAwardAmountList, e), hQ = async e => r(c.C2CRechargeAppeal, e), wQ = async e => r(c.GetC2CCancelReason, e), bQ = async e => r(c.SetWithdrawalNewUPI, e), CQ = async () => r(c.GetNewUPIBindMobileNo), BQ = async e => r(c.GetC2CWithdrawRecord, e), yQ = async e => r(c.GetC2CWithdrawOrderDetail, e), EQ = async e => r(c.C2CWithdrawConfirm, e), fQ = async e => r(c.C2CWithdrawRematch, e), RQ = async e => r(c.C2CWithdrawOrderAmountError, e), SQ = async e => r(c.C2CWithdrawalCancel, e), IQ = async e => r(c.C2CWithdrawAppeal, e), UQ = async () => r(c.GetNewUPICanBindCardList), GQ = async e => r(c.SetWithdrawalWallet, e), DQ = async e => r(c.RechargesUsdtOrder, e), LQ = async e => r(c.GetUsdtOrder, e), MQ = async e => r(c.RechargesUpiOrder, e), kQ = async e => r(c.GetUpiOrder, e), TQ = async e => r(c.UpdateRechargesUsdtOrder, e), QQ = async () => r(c.CheckFirstPixRecharge), c6 = async e => r(c.ARBWalletMemberInfo, e), r6 = async e => r(c.ARBWalletActivate, e), d6 = async e => r(c.ARBWalletEnter, e), VQ = async () => r(c.GetARPayUrl), OQ = () => r(c.GetVipUsers), FQ = e => r(c.GetPageListVipUserRecord, e), NQ = e => r(c.GetListVipLevel, e), PQ = e => r(c.GetListVipUserRewards, e), WQ = () => r(c.GetVipUserLevelDetail), YQ = e => r(c.AddReceiveAward, e), xQ = () => r(c.GetAllVipLevelList), p6 = () => r(c.WinGoGetTypeList).then(e => e), HQ = e => r(c.WinGoGetGameIssue, e).then(s => s.data), KQ = e => r(c.WinGoGetNoaverageEmerdList, e).then(s => s.data), XQ = e => r(c.WinGoGetMyEmerdList, e).then(s => s.data), JQ = e => r(c.WinGoGetEmerdList, e).then(s => s.data), zQ = e => r(c.WinGoGameBetting, e), jQ = e => r(c.WinGoGetWinTheLotteryResult, e).then(s => s.data), ZQ = e => r(c.GetLongDragon, e), qQ = e => r(c.GetLastFiveIssueNumberResult, e), _6 = e => r(c.GetRuleByTypeId, e).then(s => s), u6 = () => r(c.WinTxrGetTRXtypeList).then(e => e), $Q = e => r(c.WinTxrGetTRXGameIssue, e).then(s => s.data), eV = e => r(c.WinTxrGameTRXBetting, e).then(s => s), tV = e => r(c.WinTxrGetTRXNoaverageEmerdList, e).then(s => s.data), sV = e => r(c.WinTxrGetTRXMyEmerdList, e).then(s => s.data), nV = e => r(c.WinTxrGetEmerdList, e).then(s => s.data), aV = e => r(c.GetTrxWinTheLotteryResult, e), m6 = e => r(c.GetTRXRuleByTypeId, e).then(s => s), v6 = () => r(c.GetK3TypeList).then(e => e), AV = e => r(c.GetGameK3Issue, e).then(s => s.data), oV = e => r(c.GetK3OneEmerd, e), iV = () => r(c.GetK3OddsList), lV = e => r(c.K3GameBetting, e).then(s => s), gV = e => r(c.GetK3NoaverageEmerdList, e).then(s => s.data), cV = e => r(c.GetMyK3EmerdList, e), rV = e => r(c.GetK3TheLotteryResult, e), h6 = e => r(c.GetK3RuleByTypeId, e).then(s => s), w6 = () => r(c.Get5DtypeList).then(e => e), dV = e => r(c.GetGame5DIssue, e).then(s => s.data), pV = e => r(c.Get5DOneEmerd, e).then(s => s.data), _V = () => r(c.Get5DOddsList).then(e => e.data), uV = e => r(c.Game5DBetting, e), mV = e => r(c.GetNoaverage5DEmerdList, e), vV = e => r(c.Get5DEmerdList, e), hV = e => r(c.GetMy5DEmerdList, e), wV = e => r(c.GetD5TheLotteryResult, e), b6 = e => r(c.Get5DRuleByTypeId, e).then(s => s), bV = e => r(c.GetDayIssueNolist, e), CV = e => r(c.GetFXosoIssueNoList, e), BV = e => r(c.XosoBetting, e).then(s => s), yV = e => r(c.AddFXosoBetting, e).then(s => s), EV = e => r(c.GetXosoResult, e), fV = e => r(c.GetXosoUserRecord, e), RV = e => r(c.GetFXosoRecordPageList, e), SV = e => r(c.GetFXosoResultPageList, e), IV = e => r(c.GetFXosoResult, e), UV = e => r(c.CancelBetOrder, e), GV = e => r(c.GetXosoAreGamePlay, e), DV = e => r(c.GetFXosoAreaPlay, e), LV = e => r(c.GetFXosoUserResult, e), MV = e => r(c.GetXosoAreaPlayOdd, e), kV = e => r(c.GetFXosoAreaPlayOdd, e), TV = e => r(c.GetXosoGameBaseData, e), QV = async () => r(c.GetDateTimeScopeTypes).then(e => e.data), VV = async e => r(c.UploadImage, e, {}, {
        "Content-Type": "multipart/form-data"
    }), OV = async e => r(c.UploadVideo, e, {}, {
        "Content-Type": "multipart/form-data"
    }), FV = () => r(c.Get4DGameConfig).then(e => e), NV = () => r(c.GetGame4DIssue).then(e => e), PV = e => r(c.D4GameBetting, e).then(s => s), WV = () => r(c.Get4DOddsList).then(e => e), YV = () => r(c.GetGameTypeList).then(e => e), xV = e => r(c.GetMy4DHistoryBetting, e).then(s => s), HV = () => r(c.Get4DGameResult).then(e => e), KV = e => r(c.Get4DGameResultByType, e).then(s => s), XV = e => r(c.D4GameCancelOrder, e).then(s => s);
let As = !1;

function C6(e) {
    le(async () => {
        As || (await e(), As = !0)
    })
}

function JV() {
    const e = ue(),
        s = I6(),
        {
            t: n
        } = oe(),
        A = _e({
            active: 0
        }),
        o = S(!1),
        l = O(() => e.getUserInfo),
        g = O(() => s.isOpenForgetPasswordSMSState || s.isOpenForgetPasswordEmailState),
        p = O(() => {
            var f, L;
            return ((L = (f = l.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : L.google) !== "0"
        }),
        h = O(() => {
            var f, L;
            return ((L = (f = l.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : L.mobile) !== ""
        }),
        _ = O(() => {
            var f, L;
            return ((L = (f = l.value) == null ? void 0 : f.verifyMethods) == null ? void 0 : L.email) !== ""
        }),
        d = O(() => s.isOpenAddBankCardOpenEmail),
        C = O(() => _.value && s.isOpenAddWithdrawEmailState),
        B = O(() => s.isOpenAddWithdrawSMSState && h.value),
        b = O(() => [p.value, C.value, B.value].some(f => f === !0)),
        y = O(() => {
            const f = [];
            return B.value && f.push({
                text: n("phoneverification"),
                title: n("SMSVerify"),
                value: "mobile"
            }), C.value && f.push({
                text: n("emailverification"),
                title: n("EmailVerify"),
                value: "email"
            }), p.value && f.push({
                text: n("googleverificate"),
                title: n("googleVerify"),
                value: "google"
            }), f
        }),
        w = O(() => y.value[A.active] || {}),
        v = () => {
            o.value = !0
        },
        E = f => {
            A.active = f.selectedIndexes[0], o.value = !1
        };
    return C6(async () => {
        await s.getRegisterState(), s.getUserInfo({
            signature: e.token
        })
    }), {
        verifyList: y,
        verifyActive: w,
        verifyModal: o,
        isOpenWithdraw: b,
        isOpenForgetPasswordSMSState: g,
        isOpenAddBankCardOpenEmail: d,
        userInfo: l,
        openVerify: v,
        onSelectVerify: E
    }
}
var B6 = (e => (e[e.Registr = 1] = "Registr", e[e.resetPassword = 2] = "resetPassword", e[e.bindEmailMmobile = 3] = "bindEmailMmobile", e[e.resetEmailMmobile = 4] = "resetEmailMmobile", e[e.openGoogle = 5] = "openGoogle", e[e.addBankCard = 6] = "addBankCard", e[e.addUSDT = 7] = "addUSDT", e[e.addEWallet = 8] = "addEWallet", e[e.addPIX = 9] = "addPIX", e[e.addWave = 10] = "addWave", e[e.addKBZ = 11] = "addKBZ", e[e.addNewUPI = 13] = "addNewUPI", e[e.addNewUPI_N = 15] = "addNewUPI_N", e[e.c2cRecharge = 16] = "c2cRecharge", e))(B6 || {});

function zV({
    time: e,
    codeType: s
}) {
    const n = S(!1),
        {
            t: A
        } = oe(),
        o = S(!1),
        l = ue(),
        g = O(() => l.getUserInfo),
        {
            start: p,
            pause: h,
            reset: _,
            current: d
        } = rs({
            time: e * 1e3,
            onFinish: () => {
                o.value = !1
            }
        }),
        C = O(() => Math.ceil(d.value.total / 1e3)),
        B = async y => {
            var E;
            const w = y || ((E = g.value.verifyMethods) == null ? void 0 : E.email);
            if (!w) return;
            await V(Tf({
                email: w,
                emailType: s
            })) && (_(), p(), o.value = !0, we(A("sendSuccess")))
        }, b = async y => {
            var E;
            const w = y || ((E = g.value.verifyMethods) == null ? void 0 : E.mobile);
            if (!w) return;
            await V(Df({
                phone: w,
                codeType: s
            })) && (_(), p(), o.value = !0, we(A("sendSuccess")))
        };
    return Vt(() => {
        o.value = !1, h(), _()
    }), {
        loading: n,
        isCount: o,
        seconds: C,
        getSMSCode: b,
        getEmailCode: B
    }
}

function jV() {
    const e = Ae(),
        {
            setLoading: s
        } = mt(),
        n = S(),
        A = S([]),
        o = S(!1),
        l = S({
            orderCount: 0,
            totalReceiveAmount: 0,
            type: -1
        }),
        g = O(() => !A.value.length || !A.value.filter(L => L.isReceive === 0).length),
        p = _e({
            pageSize: 10
        }),
        h = _e({
            ruleList: []
        }),
        _ = O(() => h.ruleList);
    return {
        goRule: () => {
            e.push({
                name: "SuperJackpot-rule"
            })
        },
        goStar: () => {
            e.push({
                name: "SuperJackpot-star"
            })
        },
        onLaundy: () => {
            o.value = !1, l.value.type = -1, n.value.resetRefresh()
        },
        onRecived: async f => {
            s(!0), (await kf({
                orderId: f
            })).msg && (s(!1), o.value = !0), s(!1)
        },
        goBack: () => {
            e.go(-1)
        },
        gotoCustom: () => {
            e.push({
                name: "CustomerService"
            })
        },
        getRuleList: async () => {
            const f = await s6();
            f != null && f.data && (h.ruleList = f.data)
        },
        onRecivedAll: async () => {
            if (g.value) return;
            s(!0);
            const f = await V(C5());
            if (f) {
                if (l.value.orderCount = f.data.orderCount, l.value.totalReceiveAmount = f.data.totalReceiveAmount, o.value = !0, l.value.type = 1, !n.value) return;
                n.value.resetRefresh()
            }
            s(!1)
        },
        RewardsRecordPageList: A,
        listRef: n,
        DialogShow: o,
        pageQuery: p,
        ruleList: _,
        recivedAll: l,
        isRecived: g
    }
}

function $e() {
    const {
        t: e
    } = oe(), s = Ne(), n = S(!1), A = [{
        label: e("all"),
        value: -1
    }, {
        label: e("about2Start"),
        value: 2
    }, {
        label: e("ongoing"),
        value: 1
    }, {
        label: e("ended"),
        value: 0
    }], o = [{
        label: e("all"),
        value: -1
    }, {
        label: e("ongoing"),
        value: 0
    }, {
        label: e("hasWon"),
        value: 2
    }], l = S(-1), g = S([]), p = S([]), h = O(() => g.value[0] || null), _ = O(() => {
        var M;
        return ((M = h.value) == null ? void 0 : M.users.find(k => k.isWin === !0)) || {}
    }), d = S(), C = S({
        pageNo: 1,
        status: l.value,
        pageSize: 10
    }), B = S({
        pageNo: 1,
        orderStatus: l.value,
        pageSize: 10
    }), b = S(1), y = S([]), w = O(() => {
        const M = s.query.pointsLotteryID;
        return M ? parseInt(M, 10) : null
    }), v = S([]), E = () => {
        g.value = [], C.value.status = l.value, B.value.orderStatus = l.value, B.value.pageNo = C.value.pageNo = 1
    }, f = M => M.map(k => {
        k.users || (k.users = []);
        const P = k.users.map(F => {
            const X = [];
            return F.orderInfoList.forEach(G => {
                X.push(...G.ticketsInfoList.map(T => T.ticketNumber))
            }), F.addTime = F.orderInfoList[0].addTime, F.tickets = X, F.showAll = !1, F.isWin = X.includes(M[0].winningNumber), F
        });
        return k.users = P, k
    });
    return {
        pointTabs: A,
        myPointTabs: o,
        pointTabActive: l,
        list: g,
        myPointList: p,
        pointQuery: C,
        myPointQuery: B,
        listRef: d,
        loading: n,
        resultTicket: y,
        ticketCount: b,
        pointInfo: h,
        address: v,
        winPeople: _,
        onJoin: async () => {
            if (n.value || (n.value = !0, !w.value)) return;
            const M = await V(_5({
                pointsLotteryID: w.value,
                counts: b.value
            }));
            if (n.value = !1, !M) return;
            const k = M.data || [];
            y.value = k.map(P => P.ticketNumber)
        },
        getPointLotteryInfo: async () => {
            if (!w.value) return;
            const M = await d5({
                pointLotteryID: w.value
            });
            g.value = f(M.data.list)
        },
        pointRest: E,
        getAddress: async () => {
            const M = await b5();
            M && (v.value = M.data || []), v.value.length && (v.value.find(k => k.defaultAddress === !0) || (v.value[0].defaultAddress = !0))
        },
        setDefault: async (M, k) => {
            if (k) return;
            await V(w5({
                addressId: M
            })) && we(`${e("rpdsucceed")}`)
        },
        delAddress: async M => {
            if (await V(h5({
                    addressId: M
                }))) {
                const P = v.value.findIndex(F => F.addressId == M);
                v.value.splice(P, 1), we(`${e("deleteSuccess")}`)
            }
        }
    }
}
const It = S({
        amount: 0,
        pwd: "",
        type: 0,
        bid: 0,
        name: ""
    }),
    os = S({}),
    is = S([]);

function ZV() {
    const e = O(() => tt().getUpperOrLower),
        s = S(!1),
        n = localStorage.getItem("lastBandCarkName") || "",
        A = (B, b) => {
            B[b] = B[b].replace(/[^\d]+/g, "")
        };

    function o(B, b) {
        return /^[0-9]{8,12}$/.test(B) ? !0 : (Ue({
            message: b,
            wordBreak: "break-word"
        }), !1)
    }
    const l = (B, b) => {
        const y = /[0-9`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\f\n\r\t\v\d]/g;
        let w = B[b].replace(y, "").replace(/ {2,}/g, " ");
        B[b] = sn.nfd(hf(w.replace(/[\u0300-\u036f]/g, ""))), g(B, b)
    };

    function g(B, b) {
        const y = e.value || "";
        y === "1" ? B[b] = B[b].toLowerCase() : y === "0" && (B[b] = B[b].toUpperCase())
    }

    function p(B, b) {
        n.length > 0 ? (B[b] = n, g(B, b), s.value = !0) : s.value = !1
    }

    function h(B) {
        It.value = B
    }

    function _(B) {
        os.value = B
    }

    function d(B) {
        is.value = B
    }
    return {
        iseditor: s,
        lastBandCarkName: n,
        onInput: A,
        checkAccoutNo: o,
        setUL: g,
        onLoad: p,
        makeTxt: l,
        data_NewSetWithdrawalH: It,
        setWithdrawal: h,
        setWithdrawalsrule: _,
        withdrawalsrule: os,
        setWithdrawalTypeslist: d,
        withdrawalTypeslist: is,
        setc2cAmount: B => {
            It.value.amount = B
        }
    }
}
const me = _e({
        prompt: !1,
        laundry: !1,
        invite: !1,
        firstSave: !1,
        oldUser: !1,
        rebateAmount: 0,
        returnAwards: 0,
        isARPay: !1
    }),
    Ut = new Map,
    Gt = S(""),
    ls = new AbortController;

function y6() {
    const e = Ne(),
        {
            t: s
        } = oe(),
        n = ue(),
        {
            ActiveSotre: A,
            setShowFirstSaveDialog: o
        } = Pe(),
        l = v => () => new Promise(E => {
            Ut.set(v, E), me[v] = !0
        }),
        g = v => E => {
            const f = Ut.get(v);
            f && (v === "prompt" && sessionStorage.setItem("promptShowCount", "1"), v === "firstSave" && A.value.isShowFirstSaveDialog ? me[v] = !0 : me[v] = !1, ["prompt", "laundry"].includes(v) && sessionStorage.setItem(`pop_${v}`, "1"), f(), E === !0 && ls.abort())
        },
        p = g("invite"),
        h = g("prompt"),
        _ = g("laundry"),
        d = g("firstSave"),
        C = g("oldUser"),
        B = O(() => ["activity", "home", "main", "wallet", "promotion"].includes(e.name) && me.firstSave),
        b = async () => {
            await V(Vf()) && (me.returnAwards = 0, we(s("receiveSuccess"))), C()
        }, y = async () => {
            me.firstSave = !1, me.prompt = !1, me.invite = !1, me.laundry = !1, me.oldUser = !1, Ut.clear();
            const v = localStorage.getItem("token"),
                E = sessionStorage.getItem("pop_prompt"),
                f = sessionStorage.getItem("pop_laundry");
            let L = !1;
            if (v) {
                const N = (await V(Qf())).data || {};
                o((N == null ? void 0 : N.needPopupFirstRecharge) || !1), L = (N == null ? void 0 : N.isExistGrandAward) || !1, me.rebateAmount = (N == null ? void 0 : N.children_Lv_RebateAmount_Yesterday) || 0, me.returnAwards = (N == null ? void 0 : N.returnAwards) || 0, me.isARPay = N == null ? void 0 : N.isARPay, e.name == "home" && !E && await w()
            }
            const D = [];
            !E && v && Gt.value && e.name == "home" && D.push(l("prompt")), A.value.isShowFirstSaveDialog && D.push(l("firstSave")), n.getUserInfo.isPopupCommissionSwitch == "1" && !E && me.rebateAmount > 0 && v && D.push(l("invite")), !f && v && L && D.push(l("laundry")), me.returnAwards > 0 && D.push(l("oldUser")), nn(D, {
                signal: ls.signal
            })
        };
    async function w() {
        const v = await V(q5());
        v.data && (Gt.value = v.data)
    }
    return {
        store: me,
        closeInvite: p,
        closePrompt: h,
        closeLaundry: _,
        closeFirstSave: d,
        showFirstSave: B,
        closOldPrompt: C,
        onReturnAwards: b,
        openAll: y,
        promptContent: Gt
    }
}

function qV() {
    !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && window.webkit.messageHandlers.clearCache.postMessage(null)
}

function vt() {
    var e, s, n;
    return !!((s = (e = window.webkit) == null ? void 0 : e.messageHandlers) != null && s.callNativeMethod || window.external && ((n = window.external) != null && n.callNativeMethod))
}

function Os(e, s) {
    of ? window.webkit.messageHandlers.callNativeMethod.postMessage({
        type: e,
        data: s
    }): window.external.callNativeMethod(JSON.stringify({
        type: e,
        data: s
    }))
}

function Fs(e, s) {
    !e || !s.url || (vt() || (window.location.href = s.url), Os(e, s))
}
const Dt = S();

function et() {
    const {
        t: e
    } = oe(), s = Ae(), n = S({}), A = S({}), o = S([]), l = S([]), g = [{
        key: 1,
        title: e("ongoing")
    }, {
        key: 0,
        title: e("cpsTip2")
    }, {
        key: 2,
        title: e("ended")
    }], p = {
        1: e("bankCard"),
        2: "UPI",
        3: "USDT",
        4: "E-Wallet",
        5: "PIX",
        6: "WavePay",
        7: "TRX",
        8: "KBZPay",
        10: "USDT2",
        20: "NewUPI"
    }, h = async () => {
        const v = await V(O5());
        v != null && v.data && (n.value = v == null ? void 0 : v.data, Dt.value = v.serviceNowTime)
    }, _ = async v => {
        var f;
        const E = await V(N5({
            championId: v
        }));
        E != null && E.data && (A.value = E == null ? void 0 : E.data, Dt.value = E.serviceNowTime, (f = A.value) != null && f.vendorId && C(A.value.vendorId))
    }, d = async v => {
        const E = await V(P5({
            championId: v
        }));
        E != null && E.data && (o.value = E == null ? void 0 : E.data)
    }, C = async v => {
        var f;
        const E = await V(j5({
            type: v,
            gameNameEn: "",
            isMiniGame: !1
        }));
        E != null && E.data && (l.value = (f = E == null ? void 0 : E.data) == null ? void 0 : f.gameLists)
    }, {
        start: B,
        end: b,
        flag: y
    } = Ms();

    function w(v) {
        if (!ue().token) {
            s.push({
                name: "login"
            });
            return
        }
        lt({
            title: e("tips"),
            message: e("tipsPlayGame"),
            cancelButtonText: e("cancel"),
            showCancelButton: !0
        }).then(async () => {
            var L;
            B(() => {
                lt({
                    title: "",
                    message: e("gameLoadTimeOut")
                }).then(() => {
                    s.push({
                        path: "/"
                    })
                })
            });
            const f = await V(Vs({
                vendorCode: Number(v.vendorId),
                gameCode: v.gameID,
                phonetype: Ft()
            }));
            if (f && !y.value) {
                if (!y.value && b(!0), [5].includes(v.vendorId)) return s.push({
                    name: "game",
                    query: {
                        url: Bs((L = f == null ? void 0 : f.data) == null ? void 0 : L.url)
                    }
                });
                vt() ? Fs("game", {
                    ...(f == null ? void 0 : f.data) || {},
                    gameName: v.gameNameEn
                }) : kt(f == null ? void 0 : f.data, 1)
            } else {
                !y.value && b(!0);
                return
            }!y.value && b()
        })
    }
    return {
        tabList: g,
        championEntranceV: h,
        championEntranceVO: n,
        serviceNowTime: Dt,
        getChampionTaskDetailV: _,
        championTaskDetailVO: A,
        getTop10UserList: d,
        top10UserListVO: o,
        thirdGameListVO: l,
        onItemClick: w,
        type: p
    }
}

function Ht() {
    const e = Ae(),
        {
            t: s
        } = oe(),
        n = _e({
            amount: 0,
            count: 0,
            rotateCount: 0,
            turntableList: [],
            turntableRecord: [],
            taskList: [],
            vipRating: [],
            bindingType: -1,
            result: null,
            dialog: !1
        }),
        A = S({
            pageNo: 1,
            pageSize: 10
        }),
        o = v => v < 1e3 ? v.toString() : v < 1e6 ? (v / 1e3).toFixed(2) + "k" : (v / 1e6).toFixed(2) + "M",
        l = {
            1: s("bankCard"),
            2: "UPI",
            3: "USDT",
            4: "E-Wallet",
            5: "PIX",
            6: "WavePay",
            7: "TRX",
            8: "KBZPay",
            10: "USDT2",
            20: "NewUPI"
        },
        g = S(),
        p = S(),
        h = O(() => n.turntableList.map(v => v.rewardType === 1 ? {
            fonts: [{
                text: `${sessionStorage.getItem("dollarSign")||""}${o(v.rewardSetting)}`,
                lineClamp: 2,
                fontColor: "#fff",
                wordWrap: !0,
                top: "30%",
                fontSize: "12px"
            }],
            imgs: v.prizePicturesUrl ? [{
                src: v.prizePicturesUrl,
                top: "45%",
                width: "55%"
            }] : []
        } : {
            fonts: [{
                text: v.rewardSetting,
                lineClamp: 2,
                fontColor: "#fff",
                fontSize: "12px",
                wordWrap: !0,
                top: "30%"
            }],
            imgs: v.prizePicturesUrl ? [{
                src: v.prizePicturesUrl,
                top: "45%",
                width: "50%"
            }] : null
        })),
        _ = async () => {
            const v = await V(W5());
            v && (n.amount = v.data || 0)
        }, d = async () => {
            var E, f;
            const v = await V(Y5());
            v && (n.count = ((E = v.data) == null ? void 0 : E.sumRotateNum) || 0, n.rotateCount = ((f = v.data) == null ? void 0 : f.surplusRotateNum) || 0)
        }, C = async () => {
            const v = await V(x5());
            if (v) {
                n.turntableList = v.data.rewardList;
                const E = v.data.vipRating.split(",");
                n.vipRating = E.map(f => `Vip${f}`), n.taskList = v.data.taskList, n.bindingType = v.data.bindingType
            }
        }, B = async () => {
            await Promise.all([_(), d(), C()])
        }, b = an(async () => {
            const v = await K5();
            v.code === 0 ? (g.value.play(), setTimeout(E => {
                n.result = v.data;
                const f = n.turntableList.findIndex(L => L.rewardSetting === v.data.rewardSetting);
                if (f == -1) return g.value.stop(0);
                g.value.stop(f)
            }, 1500)) : [904].includes(v.msgCode) ? Ue(s("turntableTip", [l[v.data.bindingType]])) : De(v)
        }, 600), y = async () => {
            n.result && (n.rotateCount = n.result.surplusRotateNum || 0, n.dialog = !0, p.value && p.value.resetRefresh())
        };

    function w() {
        e.go(-1)
    }
    return {
        store: n,
        prizes: h,
        myLucky: g,
        bindingTypes: l,
        recordQuery: A,
        pull: p,
        getTurntabl: B,
        getTurntablInfo: C,
        getTurntablAmount: _,
        onStart: b,
        onEnd: y,
        onClick: w
    }
}

function Ns() {
    const {
        t: e
    } = oe(), s = _e({
        firstDepositConfig: {
            activityStartDate: "",
            bonusLimit: 0,
            firstDeposiSendBonust: 0
        },
        giftPackConfigList: [],
        rewardRecordList: []
    }), n = O(() => {
        var d;
        return (d = s.firstDepositConfig) == null ? void 0 : d.activityStartDate
    }), A = O(() => {
        var d;
        return (d = s.firstDepositConfig) == null ? void 0 : d.bonusLimit
    }), o = O(() => {
        var d;
        return (d = s.firstDepositConfig) == null ? void 0 : d.firstDeposiSendBonust
    }), l = O(() => s.giftPackConfigList || []), g = O(() => s.rewardRecordList || []), p = async () => {
        const d = await V(X5());
        d && (s.firstDepositConfig = d.data.firstDepositConfig, s.giftPackConfigList = d.data.giftPackConfigAwardList, s.rewardRecordList = d.data.newUserRewardRecordList)
    };
    return {
        store: s,
        time: n,
        bonusLimit: A,
        firstDeposiSendBonust: o,
        giftPackConfigList: l,
        rewardRecordList: g,
        onReceive: async d => {
            await V(as({
                orderId: d,
                optType: 2
            })) && (we(e("receiveSuccess")), await p())
        },
        onApply: async d => {
            await V(as({
                orderId: d,
                optType: 1
            })) && (we(e("applySuccess")), await p())
        },
        getConfig: p
    }
}
const E6 = {
        login: "Login",
        register: "CompleteRegistration",
        purchase: "Purchase",
        first_purchase: "AddToCart"
    },
    Ke = An("gtag"),
    f6 = () => "dataLayer" in window,
    R6 = () => "fbq" in window;
Ke.on((e, s) => {
    f6() && window.gtag("event", e, s), R6() && window.fbq("track", E6[e], s);
    try {
        if (vt() && Os(e, s), !window.android || !window.android.onEvent) return;
        s ? window.android.onEvent(e, JSON.stringify(s)) : window.android.onEvent(e)
    } catch {}
});

function gs() {
    return {
        onTriggerLogin: o => {
            Ke.emit("login")
        },
        onTriggerRegister: o => {
            Ke.emit("register")
        },
        onTriggerPurchase: (o, l) => {
            Ke.emit(l ? "first_purchase" : "purchase", {
                currency: "₹",
                value: 0
            })
        },
        onTriggerRecharege: o => {
            Ke.emit("recharge", {
                currency: "₹",
                value: o.amount || 0
            })
        }
    }
}
const Lt = S(),
    $V = () => {
        const {
            t: e
        } = oe(), s = O(() => {
            var l;
            return ((l = Lt.value) == null ? void 0 : l.walletActivationStatus) === 1
        });
        return {
            getInfo: async () => {
                const l = await V(c6({
                    ip: localStorage.getItem("ARIP")
                }));
                l.code === 0 && (Lt.value = l.data)
            },
            arWallet: Lt,
            goWallet: async l => {
                var h;
                it({
                    message: e("loading") + "...",
                    forbidClick: !0
                });
                const g = {
                        returnUrl: "https://" + window.location.host + "/#/main"
                    },
                    p = await V(d6(g));
                if ((p == null ? void 0 : p.code) === 0) {
                    let _ = (h = p == null ? void 0 : p.data) == null ? void 0 : h.walletAccessUrl;
                    window.location.href = _
                }
                Jt()
            },
            goActive: async l => {
                var h;
                it({
                    message: e("loading") + "...",
                    forbidClick: !0
                });
                const g = {
                        returnUrl: "https://" + window.location.host + "/#/main"
                    },
                    p = await V(r6(g));
                (p == null ? void 0 : p.code) === 0 && (window.location.href = ((h = p == null ? void 0 : p.data) == null ? void 0 : h.walletActivationPageUrl) + "&memberId=" + p.data.memberId + "&merchantCode=" + p.data.merchantCode + "&timestamp=" + p.data.timestamp), Jt()
            },
            isArWalletActive: s
        }
    };

function eO() {
    const e = Ae(),
        s = _e({
            config: {
                configAmount: 0,
                effectiveQuantity: 0,
                invitationCode: "",
                numberOfInvitations: 0,
                totalAmount: 0
            }
        }),
        n = S({
            pageNo: 1,
            pageSize: 10
        }),
        A = S([]),
        o = O(() => s.config.configAmount),
        l = O(() => s.config.totalAmount),
        g = O(() => `${location.origin}/#/register?invitationCode=${s.config.invitationCode||""}`),
        p = O(() => s.config.invitationCode || ""),
        h = O(() => s.config.effectiveQuantity),
        _ = O(() => s.config.numberOfInvitations);
    return {
        getInfo: async () => {
            const b = await V(A6());
            b && (s.config = b.data)
        },
        goBack: () => {
            e.go(-1)
        },
        goInvitation: async () => {
            await e.push({
                name: "TeamPartner-Invitation"
            })
        },
        amount: o,
        invitationLink: g,
        totalAmount: l,
        invitationCode: p,
        effectiveQuantity: h,
        numberOfInvitations: _,
        query: n,
        partnerList: A
    }
}
const be = _e({
        banner: [],
        winInfoList: [],
        rankList: [],
        gameTypeList: [],
        allGameList: void 0,
        slotsGame: [],
        videoGame: []
    }),
    S6 = () => {
        const e = tt(),
            s = ue(),
            {
                start: n,
                end: A,
                flag: o
            } = Ms(),
            {
                t: l
            } = oe(),
            g = S(!0),
            p = on("show-pwa-download", !0),
            h = O(() => e.getIsShowLotteryDragon),
            _ = O(() => e.getIsCanAppDownload),
            d = O(() => e.getIsShowAppDownloadIcon),
            C = O(() => e.getProjectLogo),
            B = O(() => be.banner),
            b = O(() => be.winInfoList);

        function y() {
            const I = Wt();
            g.value = !(s.getUserInfo.unRead > 0), I.setReadState(g.value)
        }
        const w = async () => {
            const I = await V(z5());
            I && (be.banner = I.data, be.banner.length === 0 && be.banner.push({
                bannerUrl: Q("home", "banner"),
                url: ""
            }))
        };
        async function v() {
            const I = await V(J5());
            if (I) {
                let M = navigator.userAgent.toLowerCase(),
                    k = "";
                M.indexOf("windows") != -1 || M.indexOf("android") != -1 ? k = I.data.androidUrl : M.indexOf("iphone") != -1 || M.indexOf("mac") != -1 || M.indexOf("ipad") != -1 ? k = I.data.iosUrl : k = I.data.androidUrl, kt(k)
            }
        }
        async function E() {
            const [I, M] = await cf(Z5());
            if (I) Ue({
                message: I.msg,
                wordBreak: "break-word"
            });
            else if (M) {
                be.winInfoList = M.dataList || [];
                const k = M.penarikanList || [];
                k.length > 0 && (be.rankList = k)
            }
        }
        return {
            getBannerApi: w,
            onDown: v,
            getMessagesData: y,
            getWinInfoDetail: E,
            getGameType: async () => {
                const I = await V($5());
                I && (be.gameTypeList = I.data || [])
            },
            getAllGame: async () => {
                const I = await V(e6()),
                    //M = ["slot", "video", "chess", "sport", "lottery"];
					M = ["lottery", "slot", "video", "chess", "sport" ];
                if (I) {
                    let k = {};
                    for (const [P, F] of Object.entries(I.data)) {
                        let X = P.toLocaleLowerCase();
                        P !== "popular" && M.includes(X) ? k[X] = F.filter(G => G.state === 1) : k[X] = F
                    }
                    be.allGameList = k
                }
            },
            onItemClick: I => {
                if (!s.token) {
                    Je.push({
                        name: "login"
                    });
                    return
                }
                lt({
                    title: l("tips"),
                    message: l("tipsPlayGame"),
                    cancelButtonText: l("cancel"),
                    showCancelButton: !0
                }).then(async () => {
                    var P;
                    n(() => {
                        lt({
                            title: "",
                            message: l("gameLoadTimeOut")
                        }).then(() => {
                            Je.push({
                                path: "/"
                            })
                        })
                    });
                    let M = {
                        gameCode: I.gameCode || I.gameID,
                        vendorCode: Number(I.vendorId) || Number(I.slotsTypeID)
                    };
                    const k = await V(Vs({
                        ...M,
                        phonetype: Ft()
                    }));
                    if (k && !o.value) {
                        if (!o.value && A(!0), ["5"].includes(`${I.vendorId}`)) return Je.push({
                            name: "game",
                            query: {
                                url: Bs((P = k == null ? void 0 : k.data) == null ? void 0 : P.url)
                            }
                        });
                        vt() ? Fs("game", {
                            ...(k == null ? void 0 : k.data) || {},
                            gameName: I.slotsName || I.gameNameEn || ""
                        }) : kt(k == null ? void 0 : k.data, 1)
                    } else {
                        !o.value && A(!0);
                        return
                    }
                })
            },
            getSlotList: async () => {
                const I = await V(n6());
                I && (be.slotsGame = I.data)
            },
            getVideonChildGame: async () => {
                const I = await V(a6());
                I && (be.videoGame = I.data)
            },
            isRead: g,
            getBanner: B,
            getWinInfo: b,
            showChanglong: h,
            isAppDownload: _,
            isAppDownloadIcon: d,
            showPWA: p,
            projectIcon: C,
            homeState: be
        }
    };
_e({
    gameList: [],
    categoryList: [],
    active: 0,
    allGame: null,
    loading: !1,
    electron: [],
    video: [],
    imgMap: new Map
});
_e({
    list: [],
    timer: -1
});
const I6 = Le({
        id: "userStore",
        state: () => ({
            currentView: "SignIn",
            userForm: {
                number: "",
                password: "",
                verify: "",
                rePassword: "",
                invitation: "",
                numberType: "",
                email: "",
                remember: !1,
                termAndPolicy: !1,
                vCode: "",
                logintype: "",
                rememberpwd: !1
            },
            rPwdForm: {
                number: "",
                numberType: "",
                email: "",
                verify: "",
                password: "",
                rePassword: ""
            },
            ARIP: "",
            numberTypes: [],
            countDown: 0,
            countEmailDown: 0,
            remember: !1,
            messageDetail: {},
            isShowSMS: !1,
            isRegisterState: !1,
            isAddBankCardSMS: !1,
            isOpenForgetPasswordSMSState: !1,
            isOpenForgetPasswordEmailState: !1,
            isOpenRegisterEmailState: !1,
            isOpenRegisterSMSState: !1,
            isOpenCaptcha: !1,
            isOpenAddWithdrawEmailState: !1,
            isOpenAddWithdrawSMSState: !1,
            isOpenAddBankCardOpenEmail: !1,
            isOpenExternalAccount: !1,
            isOpenEmialLogin: !0,
            state: null
        }),
        getters: {
            getCurrentView: e => e.currentView,
            getUserForm: e => e.userForm,
            getNumberTypes: e => e.numberTypes,
            getMessagesDetail: e => e.messageDetail
        },
        actions: {
            setCurrentView(e) {
                this.currentView = e
            },
            setUserForm(e) {
                this.userForm = e
            },
            setNumberTypes(e) {
                this.numberTypes = e
            },
            setNumberType(e) {
                this.userForm.numberType = e, this.rPwdForm.numberType = e
            },
            setCountDown(e) {
                this.countDown = e
            },
            setCountEmailDown(e) {
                this.countEmailDown = e
            },
            setMessageDetail(e) {
                this.messageDetail = e
            },
            loginout() {
                localStorage.removeItem("tokenHeader"), localStorage.removeItem("refreshToken"), localStorage.removeItem("numberType"), localStorage.removeItem("number"), localStorage.removeItem("email"), localStorage.removeItem("isToLogin")
            },
            remember(e = !1) {
                const s = this.userForm.logintype,
                    n = `ar_account_${s}`,
                    A = localStorage.getItem(n) || "",
                    o = _ => {
                        try {
                            return JSON.parse(_)
                        } catch {
                            return null
                        }
                    };
                if (e) {
                    const _ = o(A);
                    if (!_) return;
                    s === "email" ? this.userForm.email = _.email : (this.userForm.number = _.number, _.numberType && (this.userForm.numberType = _.numberType)), _.password && (this.userForm.rememberpwd = !0, this.userForm.password = _.password);
                    return
                }
                const l = this.userForm.numberType,
                    g = this.userForm.number,
                    p = this.userForm.email,
                    h = this.userForm.rememberpwd ? this.userForm.password : "";
                localStorage.setItem(n, JSON.stringify({
                    email: p,
                    numberType: l,
                    number: g,
                    password: h,
                    logintype: s
                }))
            },
            async signIn(e) {
                let s = {};
                e.logintype == "email" ? s = {
                    username: e.email,
                    captchaId: e.captchaId,
                    track: e.track,
                    pwd: e.password,
                    phonetype: -1,
                    logintype: e.logintype
                } : s = {
                    username: e.numberType + e.number,
                    captchaId: e.captchaId,
                    track: e.track,
                    pwd: e.password,
                    phonetype: -1,
                    logintype: e.logintype
                }, e.vCode && (s.vCode = e.vCode);
                const n = ue(),
                    {
                        onTriggerLogin: A
                    } = gs();
                return new Promise(async (o, l) => {
                    const g = await Gf(s, {
                        "AR-REAL-IP": this.ARIP
                    });
                    if (g.data && g.code === 0) {
                        A(g.data);
                        const {
                            token: h,
                            tokenHeader: _,
                            refreshToken: d
                        } = g.data;
                        n.setToken(h), this.remember(), localStorage.setItem("tokenHeader", _), localStorage.setItem("refreshToken", d), localStorage.setItem("numberType", e.numberType), localStorage.setItem("number", e.number || ""), localStorage.setItem("email", e.email || ""), localStorage.setItem("isToLogin", "1"), await this.getUserInfo({
                            signature: h
                        }), vf("/home");
                        const {
                            setLoading: C
                        } = mt();
                        return C(!1), o({})
                    } [122, 33].includes(g.msgCode) || De(g), l(g)
                })
            },
            async getUserInfo(e) {
                var o;
                const s = ue(),
                    n = D6(),
                    A = await V(Gs(e));
                A && (s.setUserInfo(A == null ? void 0 : A.data), n.setAmount((o = A == null ? void 0 : A.data) == null ? void 0 : o.amount), n.setUSDTCanAdd(A == null ? void 0 : A.data))
            },
            async register(e) {
                const {
                    onTriggerRegister: s
                } = gs(), n = await V(Lf(e, {
                    "AR-REAL-IP": this.ARIP
                }));
                return new Promise(async (A, o) => {
                    n ? (s(n.data), A(n)) : o(n)
                })
            },
            async getIp() {
                if (!this.ARIP) try {
                    const e = await je.post("https://tosma.lhlasjdanc.com/"),
                        s = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                    e.data && s.test(e.data) && (this.ARIP = e.data || "")
                } catch {}
            },
            sendCode() {
                this.countDown = 120;
                const e = setInterval(() => {
                    this.countDown > 0 ? this.countDown-- : clearInterval(e), this.countDown === 0 && clearInterval(e)
                }, 1e3)
            },
            sendEmailCode() {
                this.countEmailDown = 300;
                const e = setInterval(() => {
                    this.countEmailDown > 0 ? this.countEmailDown-- : clearInterval(e), this.countEmailDown === 0 && clearInterval(e)
                }, 1e3)
            },
            setRemember(e) {
                this.remember = e
            },
            setICode(e) {
                this.userForm.invitation = e
            },
            clearRpwdData() {
                this.rPwdForm = {
                    number: "",
                    numberType: tt().getAreacode.replace("+", "") || "",
                    verify: "",
                    password: "",
                    rePassword: "",
                    email: ""
                }, this.userForm.number = ""
            },
            async getRegisterState() {
                const e = await V(Ds());
                if (e) {
                    const {
                        registerSMSState: s,
                        registerState: n,
                        isOpenAddBankCardSMS: A,
                        isOpenForgetPasswordSMS: o,
                        isOpenForgetPasswordEmail: l,
                        registerEmailState: g,
                        registerMobileState: p,
                        isOpenAddWithdrawEmail: h,
                        isOpenAddWithdrawSMS: _,
                        isOpenCaptcha: d = "0",
                        addBankCardOpenEmail: C,
                        isOpenExternalAccount: B
                    } = e.data;
                    this.state = e.data;
                    const b = (y = "0") => y === "1";
                    this.isShowSMS = b(s), this.isRegisterState = b(n), this.isAddBankCardSMS = b(A), this.isOpenForgetPasswordSMSState = b(o), this.isOpenForgetPasswordEmailState = b(l), this.isOpenRegisterEmailState = b(g), this.isOpenRegisterSMSState = b(p), this.isOpenCaptcha = b(d), this.isOpenAddWithdrawEmailState = b(h), this.isOpenAddWithdrawSMSState = b(_), this.isOpenAddBankCardOpenEmail = b(C), this.isOpenExternalAccount = b(B)
                }
            }
        }
    }),
    U6 = [{
        name: "English",
        key: "en"
    }, {
        name: "中文",
        key: "zh"
    }, {
        name: "Tiếng Việt",
        key: "vi"
    }, {
        name: "Bahasa Melayu",
        key: "my"
    }, {
        name: "Bahasa Indonesia",
        key: "id"
    }, {
        name: "ภาษาไทย",
        key: "th"
    }, {
        name: "မြန်မာဘာသာ",
        key: "md"
    }, {
        name: "Português",
        key: "bra"
    }, {
        name: "हिंदी",
        key: "hd"
    }, {
        name: "русский",
        key: "rus"
    }, {
        name: "Filipino",
        key: "ph"
    }, {
        name: "বাংলা",
        key: "bd"
    }, {
        name: "اردو",
        key: "pk"
    }, {
        name: "عربي",
        key: "ar"
    }],
    ue = Le({
        id: "GlobalState",
        state: () => ({
            token: nt("token", ""),
            userInfo: nt("userInfo", {}),
            language: hs(),
            clientConfig: nt("clientConfig", {}),
            requsetData: "",
            isOpen: !0,
            apiUrl: localStorage.getItem("ApiUrl") || "",
            visibility: 1,
            deferredPrompt: null,
            dollarSign: "",
            projectLogo: "",
            headLogo: "",
            areaCode: null,
            messageList: null
        }),
        getters: {
            getToken: e => e.token,
            getLanguage: e => e.language,
            getLanguageIcon: e => Q("languages", `${e.language}`),
            getLanguageName: e => {
                for (let s of U6)
                    if (s.key == e.language) return s.name
            },
            getUserInfo: e => e.userInfo,
            getClientConfig: e => e.clientConfig,
            getReqData: e => e.requsetData,
            getIsOpen: e => e.isOpen,
            getApiUrl: e => e.apiUrl,
            getDollarSign: e => e.dollarSign,
            getMessage: e => e.messageList
        },
        actions: {
            setToken(e) {
                this.token = e, localStorage.setItem("token", e), sessionStorage.removeItem("pop_prompt"), sessionStorage.removeItem("pop_laundry")
            },
            setUserInfo(e) {
                if (this.userInfo = e, e.groupDataShowAuth && e.groupDataShowAuth.length) {
                    const s = {};
                    e.groupDataShowAuth.forEach((n, A) => {
                        s[n.id] = n.isShow
                    }), sessionStorage.setItem("permission", JSON.stringify(s))
                } else sessionStorage.removeItem("permission");
                nt("userInfo", e)
            },
            updateLanguage(e) {
                this.language = e
            },
            setPrompt(e) {
                this.deferredPrompt = e
            },
            SET_HTML_ATTR(e, s) {
                var n;
                (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", e), document.title = s
            },
            setReqData(e) {
                this.requsetData = e
            },
            setIsOpen(e) {
                this.isOpen = e
            },
            setvisibility(e = null) {
                typeof e == "number" ? this.visibility = e : this.visibility++
            },
            setMessage(e) {
                this.messageList = e
            }
        }
    }),
    tt = Le({
        id: "SettingStore",
        persist: !0,
        state: () => ({
            areaPhoneLenList: [],
            areacode: "",
            headLogo: {}.VITE_BASE_HEADLOGO,
            isShowAppDownloadUp: !1,
            isShowAppDownloadDown: !1,
            isShowLotteryDragon: !1,
            jackportMaxReswadAmount: 0,
            projectName: "BDGGAMEBysXm",
            projectLogo: {}.VITE_BASE_PROJECTLOGO,
            languages: "en",
            webIco: "",
            dollarSign: "₹",
            upperOrLower: {}.VITE_BASE_UPPERORLOWER,
            defaultCurrentLanguage: "",
            isSplitLocalEWallet: !1,
            isOpenLoginChangeLanguage: "0",
            ossUrl: "",
            rewardValidityTime: 0,
            winRate: {},
            isShowHotGameWinOdds: !1,
            isShowAppHandCodeWashingSwitch: !1,
            bigTurntableLink: "",
            isOpenTurntable: !1,
            isPartnerReward: !1
        }),
        getters: {
            getIsCanAppDownload: e => e.isShowAppDownloadUp,
            getIsShowAppDownloadIcon: e => e.isShowAppDownloadDown,
            getIsShowLotteryDragon: e => e.isShowLotteryDragon,
            getProjectLogo: e => e.projectLogo,
            getHeadLogo: e => e.headLogo,
            getDollarSign: e => e.dollarSign,
            getAreaPhoneLenList: e => e.areaPhoneLenList,
            getAreacode: e => e.areacode,
            getLanguage: e => e.languages,
            getWebIco: e => e.webIco,
            getProjectName: e => e.projectName,
            getUpperOrLower: e => e.upperOrLower,
            getDL: e => e.defaultCurrentLanguage,
            getIsSplitLocalEWallet: e => e.isSplitLocalEWallet,
            getLoginChangeLanguage: e => e.isOpenLoginChangeLanguage,
            getOSSUrl: e => e.ossUrl,
            getRewardValidityTime: e => e.rewardValidityTime,
            getWinRate: e => e.winRate,
            getIsShowAppHandCodeWashingSwitch: e => e.isShowAppHandCodeWashingSwitch,
            getBigTurntableLink: e => e.bigTurntableLink,
            getOpenTurntable: e => e.isOpenTurntable,
            getIsPartnerReward: e => e.isPartnerReward
        },
        actions: {
            async getHomeSetting() {
                var s, n;
                const e = await V(t6());
                if (e && e.data) {
                    const {
                        areaPhoneLenList: A,
                        headLogo: o,
                        isShowAppDownloadUp: l,
                        isShowAppDownloadDown: g,
                        isShowLotteryDragon: p,
                        jackportMaxReswadAmount: h,
                        projectName: _,
                        projectLogo: d,
                        languages: C,
                        webIco: B,
                        dollarSign: b,
                        upperOrLower: y,
                        defaultCurrentLanguage: w,
                        isSplitLocalEWallet: v,
                        isOpenLoginChangeLanguage: E,
                        electronicWinRateExternalLink: f,
                        electronicWinRateImgUrl: L,
                        isShowElectronicWinRateExternalLink: D,
                        isShowHotGameWinOdds: te,
                        isShowAppHandCodeWashingSwitch: N,
                        rewardValidityTime: I,
                        ossUrl: M,
                        bigTurntableLink: k,
                        isOpenTurntable: P,
                        isPartnerReward: F
                    } = e.data;
                    this.ossUrl = M, this.rewardValidityTime = I, this.areaPhoneLenList = A, this.headLogo = o, this.isShowAppDownloadUp = l, this.isShowAppDownloadDown = g, this.isShowLotteryDragon = p, this.jackportMaxReswadAmount = h, this.projectLogo = d, this.projectName = _, this.languages = C, this.webIco = B, this.dollarSign = b, this.upperOrLower = y, this.areacode = ((s = A[0]) == null ? void 0 : s.area) || "", this.isSplitLocalEWallet = v, this.isOpenLoginChangeLanguage = E, this.isShowHotGameWinOdds = te || !1, this.isShowAppHandCodeWashingSwitch = N, this.winRate = {
                        electronicWinRateExternalLink: f,
                        electronicWinRateImgUrl: L,
                        isShowElectronicWinRateExternalLink: D
                    }, this.bigTurntableLink = k, this.isOpenTurntable = P, this.isPartnerReward = F, sessionStorage.setItem("dollarSign", b), sessionStorage.setItem("areaPhoneLenList", JSON.stringify(A)), localStorage.getItem("language") || (this.defaultCurrentLanguage = w.replace("tha", "th"), _f(this.defaultCurrentLanguage)), (n = document.querySelector("link[rel='icon']")) == null || n.setAttribute("href", B), document.title = _
                }
            }
        }
    }),
    {
        t: G6
    } = Me.global,
    D6 = Le({
        id: "walletStore",
        state: () => ({
            bankName: {},
            withdrawalslist: [],
            bankList: [],
            withdrawals: {
                amount: 0,
                pwd: "",
                type: 0,
                bid: 0
            },
            payTabList: [],
            amount: 0,
            timestampLast: 0,
            allwallets: "",
            isAllowUserAddUSDT: !0
        }),
        getters: {
            getBankName: e => e.bankName,
            getWithdrawalslist: e => e.withdrawalslist,
            getBankList: e => e.bankList,
            getWithdrawal: e => e.withdrawals,
            getPayTabList: e => e.payTabList,
            getAmount: e => e.amount,
            getTimestampLast: e => e.timestampLast,
            getAllwallets: e => e.allwallets,
            getADDUSTD: e => e.isAllowUserAddUSDT
        },
        actions: {
            setBankName(e) {
                this.bankName = e
            },
            setWithdrawalslist(e) {
                this.withdrawalslist = e
            },
            setBankList(e) {
                this.bankList = e
            },
            setWithdrawal(e) {
                this.withdrawals = e
            },
            setPayTabList(e) {
                this.payTabList = e
            },
            setAmount(e) {
                this.amount = e
            },
            setUSDTCanAdd(e) {
                this.isAllowUserAddUSDT = (e == null ? void 0 : e.isAllowUserAddUSDT) === void 0 ? !0 : (e == null ? void 0 : e.isAllowUserAddUSDT) === "1"
            },
            setTimestampLast(e) {
                this.timestampLast = e
            },
            setAllwallets(e) {
                this.allwallets = e
            },
            async resetData(e, s) {
                const n = await V(s ? i6() : l6());
                if (n) {
                    if (this.amount = n == null ? void 0 : n.data.amount, e) return;
                    we(G6("refreshSuccess"))
                }
            },
            async getPayTypeName() {
                const e = await V(g6());
                if (e) {
                    if (tt().getIsSplitLocalEWallet) {
                        let s = e.data.typelist.map(n => (n.payID === 18 && n.paySysName === "KBZPay" && (n.payNameUrl = Q("wallet/recharge/detail", "kbz_icon"), n.payNameUrl2 = Q("wallet/recharge/detail", "kbz_icon")), n.payID === 18 && n.paySysName === "WavePay" && (n.payNameUrl = Q("wallet/recharge/detail", "wave_icon"), n.payNameUrl2 = Q("wallet/recharge/detail", "wave_icon")), n));
                        this.setPayTabList(s)
                    }
                    this.setPayTabList(e.data.typelist)
                }
            }
        },
        persist: !0
    }),
    at = 5e3,
    tO = Le({
        id: "lorreryStore",
        state: () => ({
            1: {
                typeID: 1,
                typeName: "Win Go<br />1Min",
                tabName: "WinGo 1Min",
                intervalM: 1,
                scope: "10|100|1000|10000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            2: {
                typeID: 2,
                typeName: "Win Go<br />3Min",
                tabName: "WinGo 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            3: {
                typeID: 3,
                typeName: "Win Go<br />5Min",
                tabName: "WinGo 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            4: {
                typeID: 4,
                typeName: "Win Go<br />10Min",
                tabName: "WinGo 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            5: {
                typeID: 5,
                typeName: "5D Lotre<br />1Min",
                tabName: "5D 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            6: {
                typeID: 6,
                typeName: "5D Lotre<br />3Min",
                tabName: "5D 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            7: {
                typeID: 7,
                typeName: "5D Lotre<br />5Min",
                tabName: "5D 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            8: {
                typeID: 8,
                typeName: "5D Lotre<br />10Min",
                tabName: "5D 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            9: {
                typeID: 9,
                typeName: "K3 Lotre<br />1Min",
                tabName: "K3 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            10: {
                typeID: 10,
                typeName: "K3 Lotre<br />3Min",
                tabName: "K3 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            11: {
                typeID: 11,
                typeName: "K3 Lotre<br />5Min",
                tabName: "K3 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            12: {
                typeID: 12,
                typeName: "K3 Lotre<br />10Min",
                tabName: "K3 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            13: {
                typeID: 13,
                typeName: "Trx Win Go<br />1Min",
                tabName: "Trx 1Min",
                intervalM: 1,
                scope: "1|10|100|1000",
                sort: 4,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            14: {
                typeID: 14,
                typeName: "Trx Win Go<br />3Min",
                tabName: "Trx 3Min",
                intervalM: 3,
                scope: "1|10|100|1000",
                sort: 3,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            15: {
                typeID: 15,
                typeName: "Trx Win Go<br />5Min",
                tabName: "Trx 5Min",
                intervalM: 5,
                scope: "1|10|100|1000",
                sort: 2,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            16: {
                typeID: 16,
                typeName: "Trx Win Go<br />10Min",
                tabName: "Trx 10Min",
                intervalM: 10,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            30: {
                typeID: 30,
                typeName: "Win Go<br />30 second",
                tabName: "WinGo 30 Second",
                intervalM: .5,
                scope: "1|10|100|1000",
                sort: 1,
                gamePresentation: null,
                betMultiple: "1|5|10|20|50|100"
            },
            winGoLock: !1,
            TrxLock: !1,
            k3Lock: !1,
            fiveDLock: !1,
            winType: {}.VITE_WINGO && JSON.parse({}.VITE_WINGO) || [1, 2, 3, 4]
        }),
        getters: {
            getWingo: e => e.winType.map(s => e[s]),
            get5D: e => [e[5], e[6], e[7], e[8]],
            getK3: e => [e[9], e[10], e[11], e[12]],
            getTrx: e => [e[13], e[14], e[15], e[16]]
        },
        actions: {
            async getWinGoData() {
                if (this.winGoLock) return;
                const e = await V(p6());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.winGoLock = !0, setTimeout(() => {
                    this.winGoLock = !1
                }, at))
            },
            async getTrxData() {
                if (this.TrxLock) return;
                const e = await V(u6());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.TrxLock = !0, setTimeout(() => {
                    this.TrxLock = !1
                }, at))
            },
            async getK3Data() {
                if (this.k3Lock) return;
                const e = await V(v6());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.k3Lock = !0, setTimeout(() => {
                    this.k3Lock = !1
                }, at))
            },
            async get5DData() {
                if (this.fiveDLock) return;
                const e = await V(w6());
                e && e.data && (e.data.forEach(s => {
                    this.setData(s)
                }), this.fiveDLock = !0, setTimeout(() => {
                    this.fiveDLock = !1
                }, at))
            },
            async getWinGoRule(e) {
                if (this[e].gamePresentation) return;
                const s = await V(_6({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async getTrxRule(e) {
                if (this[e].gamePresentation) return;
                const s = await V(m6({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async getK3Rule(e) {
                if (this[e].gamePresentation) return;
                const s = await V(h6({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            async get5DRule(e) {
                if (this[e].gamePresentation) return;
                const s = await V(b6({
                    typeId: e
                }));
                s && s.data && (this[e].gamePresentation = s.data.gamePresentation)
            },
            setData(e) {
                this[e.typeID].scope = e.scope, this[e.typeID].gamePresentation = e.gamePresentation, this[e.typeID].betMultiple = e.betMultiple
            }
        }
    }),
    Z = (e, s) => {
        const n = e.__vccOpts || e;
        for (const [A, o] of s) n[A] = o;
        return n
    },
    L6 = {
        key: 0,
        class: "step"
    },
    M6 = j({
        __name: "Progress",
        props: {
            strokeWidth: {
                type: Number,
                default: 12
            },
            total: {
                type: Number,
                default: 0
            },
            numerical: {
                type: Number,
                default: 0
            },
            color: {
                type: String,
                default: "#D9AC4F"
            },
            trackColor: {
                type: String,
                default: "#292929"
            },
            isShowStep: {
                type: Boolean,
                default: !0
            }
        },
        setup(e) {
            const s = e,
                n = O(() => ({
                    background: s.trackColor,
                    height: `${s.strokeWidth}px`,
                    "border-radius": `${s.strokeWidth}px`
                })),
                A = O(() => {
                    let l = "0";
                    return s.numerical == 0 || s.total == 0 ? l = "0" : s.numerical > s.total ? l = "100" : l = String((s.numerical / s.total * 100).toFixed(2)), {
                        background: s.color,
                        width: `${l}%`,
                        height: `${s.strokeWidth}px`,
                        "border-radius": `${s.strokeWidth}px`
                    }
                }),
                o = O(() => `${s.numerical}/${s.total}`);
            return (l, g) => (u(), m("div", {
                class: "progress",
                style: Ge(n.value)
            }, [t("div", {
                class: "line",
                style: Ge(A.value)
            }, null, 4), e.isShowStep ? (u(), m("div", L6, a(o.value), 1)) : H("", !0)], 4))
        }
    });
const k6 = Z(M6, [
        ["__scopeId", "data-v-52d6b6c6"]
    ]),
    T6 = {
        class: "head"
    },
    Q6 = {
        class: "title"
    },
    V6 = {
        class: "orange"
    },
    O6 = {
        class: "description"
    },
    F6 = {
        class: "foot"
    },
    N6 = ["onClick"],
    P6 = {
        class: "dialog-wrapper"
    },
    W6 = {
        class: "dialog-title"
    },
    Y6 = {
        class: "dialog-content"
    },
    x6 = j({
        __name: "listItem",
        props: {
            list: {
                type: Array,
                default: () => [{
                    rewardAmount: 123
                }]
            },
            isRule: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["gorecharge"],
        setup(e, {
            emit: s
        }) {
            const {
                t: n
            } = oe(), A = S(!1), o = S("");
            let l = !1;
            const {
                receiveFirstRechargeReward: g,
                ActiveSotre: p
            } = Pe(), {
                closeFirstSave: h
            } = y6(), _ = (B, b) => {
                const {
                    canReceive: y,
                    isFinshed: w
                } = B;
                if (!y) return "n2" + (b ? " rule" : "");
                if (y && !w) return "n1" + (b ? " rule" : "");
                if (w) return "n3" + (b ? " rule" : "");
                if (!w) return "n2" + (b ? " rule" : "")
            }, d = B => {
                const {
                    canReceive: b,
                    isFinshed: y
                } = B;
                return n(b ? y ? "claimed" : "receive" : "torecharge")
            }, C = async B => {
                const {
                    canReceive: b,
                    isFinshed: y
                } = B;
                if (!b) return s("gorecharge");
                if (y || l) return;
                l = !0;
                const w = await g(B.id);
                l = !1, w && (p.value.receiveAmount = B.rewardAmount, p.value.showReceiveDialog = !0, h())
            };
            return (B, b) => {
                const y = Y("van-dialog"),
                    w = de("lazy");
                return u(), m(K, null, [(u(!0), m(K, null, $(e.list, (v, E) => (u(), m("div", {
                    key: E,
                    class: "first_list-item"
                }, [t("div", T6, [t("div", Q6, [J(a(B.$t("firstSave")), 1), t("span", null, a(v.rechargeAmount), 1)]), t("div", V6, "+ " + a(i(ae)(v.rewardAmount)), 1)]), t("div", O6, a(B.$t("firstSaveT", [v.rechargeAmount, v.rewardAmount])), 1), t("div", F6, [U(k6, {
                    "stroke-width": 16,
                    total: v.rechargeAmount,
                    numerical: v.canReceive ? v.rechargeAmount : 0
                }, null, 8, ["total", "numerical"]), t("div", {
                    class: se(["btn", [_(v, e.isRule)]]),
                    onClick: f => C(v)
                }, a(d(v)), 11, N6)])]))), 128)), U(y, {
                    show: A.value,
                    "onUpdate:show": b[2] || (b[2] = v => A.value = v),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: z(() => [t("div", P6, [W(t("img", null, null, 512), [
                        [w, i(Q)("activity/DailyTask", "confirmationReceived")]
                    ]), t("div", W6, a(B.$t("awardsReceived")), 1), t("div", Y6, [W(t("img", null, null, 512), [
                        [w, i(Q)("activity/DailyTask", "amountIcon")]
                    ]), t("span", null, a(i(ae)(o.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: b[0] || (b[0] = v => A.value = !1)
                    }, a(B.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: b[1] || (b[1] = v => A.value = !1)
                    }, [W(t("img", null, null, 512), [
                        [w, i(Q)("activity/DailyTask", "close")]
                    ])])])]),
                    _: 1
                }, 8, ["show"])], 64)
            }
        }
    });
const H6 = Z(x6, [
        ["__scopeId", "data-v-427e61df"]
    ]),
    K6 = {
        class: "empty__container"
    },
    X6 = {
        alt: ""
    },
    J6 = j({
        __name: "index",
        setup(e) {
            return (s, n) => {
                const A = de("lazy");
                return u(), m("div", K6, [W(t("img", X6, null, 512), [
                    [A, i(Q)("images", "empty")]
                ]), he(s.$slots, "text", {}, () => [t("p", null, a(s.$t("noData")), 1)], !0)])
            }
        }
    });
const Se = Z(J6, [
        ["__scopeId", "data-v-91f2fefc"]
    ]),
    z6 = {
        class: "item"
    },
    j6 = ["src"],
    Z6 = {
        class: "right"
    },
    q6 = {
        key: 0
    },
    $6 = {
        key: 1
    },
    eR = {
        key: 2
    },
    tR = {
        key: 3,
        class: "time"
    },
    sR = ["innerHTML"],
    nR = {
        key: 4,
        class: "time"
    },
    aR = {
        key: 5,
        class: "time"
    },
    AR = {
        class: "foot"
    },
    oR = {
        class: "amount"
    },
    iR = j({
        __name: "card",
        props: {
            bgImgWidth: {
                default: "100%"
            },
            bgImgHeight: {
                default: "150px"
            },
            itemD: {
                default: {}
            },
            state: {},
            isRefresh: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:isRefresh"],
        setup(e, {
            emit: s
        }) {
            const n = e,
                {
                    serviceNowTime: A
                } = et(),
                {
                    isRefresh: o
                } = ln(n, s),
                l = S(0),
                g = S();
            ve(() => n.itemD.id, C => {
                h()
            }, {
                immediate: !0
            });
            const p = O(() => g.value.current);

            function h() {
                if (n.state == 1) {
                    const C = A.value.replace(/-/g, "/"),
                        B = n.itemD.endTime.replace(/-/g, "/");
                    l.value = new Date(B).getTime() - new Date(C).getTime(), l.value > 0 && (g.value = rs({
                        time: l.value,
                        onChange: _
                    }), g.value.start())
                }
            }

            function _(C) {
                C.total == 0 ? o.value = !0 : o.value = !1
            }

            function d(C) {
                const B = String(C.hours).padStart(2, "0"),
                    b = String(C.minutes).padStart(2, "0"),
                    y = String(C.seconds).padStart(2, "0");
                return B + ":" + b + ":" + y
            }
            return (C, B) => (u(), m("div", z6, [t("img", {
                src: C.itemD.iconUrl,
                alt: "",
                style: Ge(`width:${C.bgImgWidth};height:${C.bgImgHeight};`)
            }, null, 12, j6), t("div", Z6, [he(C.$slots, "content", {}, () => {
                var b, y;
                return [t("div", {
                    class: se(["head", `type${C.state}`])
                }, [C.state == 1 ? (u(), m("h1", q6, a(C.$t("cpsTip3")), 1)) : C.state == 0 ? (u(), m("h1", $6, a(C.$t("startTime")), 1)) : C.state == 2 ? (u(), m("h1", eR, a(C.$t("ended")), 1)) : H("", !0), C.state == 1 ? (u(), m("div", tR, [t("p", {
                    innerHTML: C.$t("fifteenDays", [p.value.days])
                }, null, 8, sR), t("h6", null, a(d(p.value)), 1)])) : H("", !0), C.state == 0 ? (u(), m("div", nR, a((b = C.itemD) == null ? void 0 : b.startTime), 1)) : H("", !0), C.state == 2 ? (u(), m("div", aR, " 00:00:00 ")) : H("", !0)], 2), t("div", AR, [t("h1", null, a(C.$t("winTips5")), 1), t("div", oR, a(i(ae)(((y = C.itemD) == null ? void 0 : y.sumBonus) || 0)), 1)])]
            }, !0)]), he(C.$slots, "footer", {}, void 0, !0)]))
        }
    });
const Kt = Z(iR, [
        ["__scopeId", "data-v-306b6ffc"]
    ]),
    lR = e => (Be("data-v-f7cf7e37"), e = e(), ye(), e),
    gR = {
        class: "activity-wrapper"
    },
    cR = {
        class: "activity-banner"
    },
    rR = {
        class: "banner-title"
    },
    dR = {
        class: "banner-para"
    },
    pR = {
        class: "banner-para"
    },
    _R = {
        class: "activity-panel"
    },
    uR = {
        class: "msg-window"
    },
    mR = {
        class: "msg-header"
    },
    vR = {
        class: "msg-footer"
    },
    hR = lR(() => t("div", {
        class: "nowidth"
    }, null, -1)),
    wR = ["onClick"],
    bR = {
        class: "activity-panel-content"
    },
    CR = {
        class: "content-para"
    },
    BR = {
        class: "content-para"
    },
    yR = {
        key: 0,
        class: "cardBox"
    },
    ER = {
        class: "activitySection__container"
    },
    fR = ["onClick"],
    RR = ["src", "onError"],
    SR = {
        class: "box-content"
    },
    IR = {
        class: "box-title"
    },
    UR = {
        class: "dialog-window"
    },
    GR = {
        class: "dialog-wrapper"
    },
    DR = {
        class: "dialog-title"
    },
    LR = {
        class: "dialog-para"
    },
    MR = j({
        __name: "index",
        props: {
            activityList: {
                type: Array,
                default: () => {}
            }
        },
        setup(e) {
            const {
                ActiveSotre: s,
                saveUserGuidelines: n,
                saveUserDayRequest: A,
                getDailyAwardCount: o,
                allUnAwardCount: l
            } = Pe();
            o();
            const {
                championEntranceV: g,
                championEntranceVO: p
            } = et();
            ve(() => s.value.isOpenChampion, F => {
                F == 1 && g()
            });
            const h = S(!1);
            ve(h, F => {
                h.value && g()
            });
            const _ = S(!0),
                d = S(!0),
                C = S([]),
                {
                    t: B
                } = oe(),
                b = S(!1),
                y = S(!1),
                w = S(1),
                v = S(!1),
                E = Ae(),
                f = O(() => [{
                    name: B("actTip1"),
                    icon: "a1",
                    goPath: "DailyTasks",
                    noread: l.value,
                    show: s.value.isOpenActivityAward
                }, {
                    name: B("invitationBonus"),
                    icon: "a2",
                    goPath: "InvitationBonus",
                    noread: 0,
                    show: s.value.isTaskState
                }, {
                    name: B("laundryAmount"),
                    icon: "a3",
                    goPath: "Laundry",
                    noread: 0,
                    show: s.value.isOpenWashCode
                }, {
                    name: B("superjackpot"),
                    icon: "a4",
                    goPath: "SuperJackpot",
                    noread: s.value.unJackpotCount,
                    show: s.value.isOpenJackpotReward
                }, {
                    name: B("newMenberPackage"),
                    icon: "a5",
                    goPath: "MemberPackage",
                    noread: 0,
                    show: s.value.newMemberGiftPackageSwitch
                }]),
                L = O(() => f.value.filter(F => F.show).length);

            function D(F) {
                let X;
                const {
                    bannerID: G,
                    jumpType: T,
                    contents: ie
                } = F;
                if (T == 2) {
                    if (ie.startsWith("/")) {
                        E.push({
                            path: ie
                        });
                        return
                    }
                    window.location.assign(ie);
                    return
                }
                switch (G) {
                    case 1:
                        X = "DailyTasks";
                        break;
                    case 2:
                        X = "PointMall";
                        break;
                    case 3:
                        X = "InvitationBonus";
                        break;
                    default:
                        X = "ActivityDetail";
                        break
                }
                X == "ActivityDetail" ? E.push({
                    name: X,
                    query: {
                        id: G
                    }
                }) : X && E.push({
                    name: X
                })
            }
            const te = (F, X) => {
                    F.bannerUrl = Q("images", "avatar"), pt(() => {
                        let G = document.querySelector(`.act_${X}`);
                        G.src = F.bannerUrl, G.style.objectFit = "contain"
                    })
                },
                N = F => {
                    E.push({
                        name: F
                    })
                },
                I = () => {
                    n(), N("DailyTasks")
                },
                M = () => {
                    d.value = !1, _.value = !1
                },
                k = (F = null) => {
                    A(), F && (M(), N("DailyTasks"))
                },
                P = async () => {
                    const F = await V($f({
                        pageNo: w.value,
                        pageSize: 20
                    }));
                    F ? (F.data.totalCount == 0 && (v.value = !0), F.data.totalPage <= w.value && (y.value = !0), F.data.list && C.value.push(...F.data.list), w.value++) : y.value = !0, b.value = !1
                };
            return le(() => {
                s.value.isOpenChampion == 1 && g()
            }), gn(() => {
                d.value = !1, _.value = !1
            }), (F, X) => {
                const G = Y("van-popover"),
                    T = Y("van-badge"),
                    ie = Y("van-list"),
                    ne = Y("van-dialog"),
                    ee = de("lazy");
                return u(), m("div", gR, [t("div", cR, [t("div", null, [t("div", rR, a(F.$t("activity")), 1), t("div", dR, a(F.$t("activityTip1")), 1), t("div", pR, a(F.$t("activityTip2")), 1)])]), t("div", _R, [i(s).isFinishUserGuidelines && i(s).isOpenActivityAward ? (u(), ce(G, {
                    key: 0,
                    show: i(s).isFinishUserGuidelines,
                    "onUpdate:show": X[0] || (X[0] = q => i(s).isFinishUserGuidelines = q),
                    overlay: !0,
                    placement: "top-start",
                    "close-on-click-overlay": !1,
                    onClose: M
                }, {
                    reference: z(() => [hR]),
                    default: z(() => [t("div", uR, [t("div", mR, a(F.$t("activityTip8")), 1), t("div", vR, [t("div", {
                        onClick: I
                    }, [t("span", null, a(F.$t("dragonEntry")), 1), W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "dualArrow")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])) : H("", !0), t("div", {
                    class: se(["activity-panel-header", ["lg" + L.value]])
                }, [(u(!0), m(K, null, $(f.value, q => (u(), m(K, null, [q.show ? (u(), m("div", {
                    key: 0,
                    class: "header-item",
                    onClick: ge => N(q.goPath)
                }, [U(T, {
                    content: q.noread,
                    max: "99",
                    "show-zero": !1,
                    color: "#FA5B5B"
                }, {
                    default: z(() => [t("div", {
                        class: se([q.icon, "bgcontainer"])
                    }, null, 2)]),
                    _: 2
                }, 1032, ["content"]), t("span", null, a(q.name), 1)], 8, wR)) : H("", !0)], 64))), 256))], 2), t("div", bR, [t("div", {
                    class: "content-title",
                    onClick: X[1] || (X[1] = q => N("RedeemGift"))
                }, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/DailyTask", "signInBanner")]
                ]), t("div", CR, a(F.$t("giftExchange")), 1), t("p", null, a(F.$t("activityTip3")), 1)]), t("div", {
                    class: "content-title",
                    onClick: X[2] || (X[2] = q => N("DailySignIn"))
                }, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/DailyTask", "giftRedeem")]
                ]), t("div", BR, a(F.$t("code8007")), 1), t("p", null, a(F.$t("activityTip4")), 1)])])]), i(s).isOpenChampion == 1 ? (u(), m("div", yR, [U(Kt, {
                    itemD: i(p),
                    state: i(p).state,
                    isRefresh: h.value,
                    "onUpdate:isRefresh": X[3] || (X[3] = q => h.value = q),
                    bgImgWidth: "100%",
                    bgImgHeight: "150px",
                    onClick: X[4] || (X[4] = () => i(E).push({
                        name: "Championship"
                    }))
                }, null, 8, ["itemD", "state", "isRefresh"])])) : H("", !0), U(ie, {
                    loading: b.value,
                    "onUpdate:loading": X[5] || (X[5] = q => b.value = q),
                    finished: y.value,
                    "finished-text": i(B)("noMoreThere"),
                    onLoad: P
                }, {
                    default: z(() => [t("div", ER, [(u(!0), m(K, null, $(C.value, (q, ge) => (u(), m("div", {
                        class: "box",
                        key: ge,
                        onClick: x => D(q)
                    }, [t("img", {
                        src: q.bannerUrl,
                        class: se(`act_${ge}`),
                        onError: x => te(q, ge)
                    }, null, 42, RR), t("div", SR, [t("div", IR, a(q.bannerTitle), 1)])], 8, fR))), 128))])]),
                    _: 1
                }, 8, ["loading", "finished", "finished-text"]), v.value ? (u(), ce(Se, {
                    key: 1
                })) : H("", !0), i(l) > 0 && i(s).isOpenActivityAward ? (u(), ce(ne, {
                    key: 2,
                    show: i(s).isFirstUserDayRequest,
                    "onUpdate:show": X[8] || (X[8] = q => i(s).isFirstUserDayRequest = q),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: z(() => [t("div", UR, [t("div", GR, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "present")]
                    ]), t("div", DR, [J(a(F.$t("activityTip5")) + " ", 1), t("span", null, a(i(l)), 1)]), t("div", LR, a(F.$t("activityTip6")), 1), t("div", {
                        class: "dialog-btn",
                        onClick: X[6] || (X[6] = q => k(!0))
                    }, a(F.$t("activityTip7")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: X[7] || (X[7] = q => k())
                    }, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "close")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])) : H("", !0)])
            }
        }
    });
const kR = Z(MR, [
        ["__scopeId", "data-v-f7cf7e37"]
    ]),
    ht = e => (Be("data-v-10abffca"), e = e(), ye(), e),
    TR = ht(() => t("br", null, null, -1)),
    QR = ht(() => t("br", null, null, -1)),
    VR = ht(() => t("br", null, null, -1)),
    OR = ht(() => t("br", null, null, -1)),
    FR = j({
        __name: "index",
        setup(e) {
            const {
                getActive: s
            } = Pe();
            return s(), (n, A) => {
                const o = Y("NavBar");
                return u(), m(K, null, [U(o, {
                    "background-color": "#3F3F3F",
                    headLogo: !0
                }), U(kR), TR, QR, VR, OR], 64)
            }
        }
    });
const NR = Z(FR, [
        ["__scopeId", "data-v-10abffca"]
    ]),
    PR = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: NR
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    WR = {
        class: "dialog__container",
        role: "dialog",
        tabindex: "0"
    },
    YR = {
        key: 0,
        class: "dialog__container-img"
    },
    xR = {
        alt: ""
    },
    HR = {
        class: "dialog__container-title"
    },
    KR = {
        class: "dialog__container-content"
    },
    XR = {
        key: 1,
        class: "dialog__container-footer"
    },
    JR = ["src"],
    zR = j({
        __name: "Dialog",
        props: {
            show: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            confirmText: {
                type: String,
                default: ""
            },
            showCancelBtn: {
                type: Boolean,
                default: !0
            },
            cancelText: {
                type: String,
                default: ""
            },
            clickOutSide: {
                type: Boolean,
                default: !1
            },
            isShowHeader: {
                type: Boolean,
                default: !0
            },
            imgUrl: {
                type: String,
                default: "orderCancelWarn"
            },
            showCloseIcon: {
                type: Boolean,
                default: !1
            },
            showFooter: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:show", "confirm"],
        setup(e, {
            emit: s
        }) {
            const n = e;
            ve(() => n.show, l => {
                l ? window.addEventListener("touchmove", o, {
                    passive: !1
                }) : window.removeEventListener("touchmove", o)
            });

            function A(l) {
                n.clickOutSide && s("update:show", !1)
            }
            const o = l => {};
            return (l, g) => {
                const p = de("lazy");
                return u(), m("div", {
                    class: se(["dialog", {
                        active: e.show,
                        inactive: !e.show
                    }])
                }, [t("div", WR, [e.isShowHeader ? (u(), m("div", YR, [he(l.$slots, "header", {}, () => [W(t("img", xR, null, 512), [
                    [p, i(Q)("activity/PointMall", e.imgUrl)]
                ])], !0)])) : H("", !0), t("div", HR, [he(l.$slots, "title", {}, () => [t("h1", null, a(e.title), 1)], !0)]), t("div", KR, [he(l.$slots, "content", {}, void 0, !0)]), e.showFooter ? (u(), m("div", XR, [he(l.$slots, "footer", {}, () => [e.showCancelBtn ? (u(), m("button", {
                    key: 0,
                    onClick: g[0] || (g[0] = () => {
                        s("update:show", !1)
                    })
                }, a(e.cancelText || l.$t("cancel")), 1)) : H("", !0), t("button", {
                    onClick: g[1] || (g[1] = () => {
                        s("confirm")
                    })
                }, a(e.confirmText || l.$t("confirm")), 1)], !0)])) : H("", !0), e.showCloseIcon ? (u(), m("img", {
                    key: 2,
                    class: "close_img",
                    src: i(Q)("common", "close"),
                    onClick: A
                }, null, 8, JR)) : H("", !0)]), t("div", {
                    class: "dialog__outside",
                    onClick: A
                })], 2)
            }
        }
    });
const ze = Z(zR, [
        ["__scopeId", "data-v-b9e16d43"]
    ]),
    jR = {
        zh_TC: {
            code: "zh_TC",
            name: "Hong Kong",
            dialCode: "+852",
            phoneFormat: "5123 4567"
        },
        en: {
            code: "en",
            name: "USA",
            dialCode: "+1",
            phoneFormat: "213 223 4827"
        },
        mo: {
            code: "mo",
            name: "Macau",
            dialCode: "+853",
            phoneFormat: "6612 3456"
        },
        tw: {
            code: "tw",
            name: "Taiwan",
            dialCode: "+886",
            phoneFormat: "0912 345 678"
        },
        kh: {
            code: "kh",
            name: "Cambodia",
            dialCode: "+855",
            phoneFormat: "091 234 567"
        },
        th: {
            code: "th",
            name: "Thailand",
            dialCode: "+66",
            phoneFormat: "081 234 5678"
        },
        id: {
            code: "id",
            name: "Indonesia",
            dialCode: "+62",
            phoneFormat: "0812-345-678"
        },
        io: {
            code: "io",
            name: "British Indian Ocean Territory",
            dialCode: "+246",
            phoneFormat: "380 1234"
        },
        sg: {
            code: "sg",
            name: "Singapore",
            dialCode: "+65",
            phoneFormat: "8123 4567"
        },
        vi: {
            code: "vi",
            name: "Vietnam",
            dialCode: "+84",
            phoneFormat: "091 234 56 78"
        },
        mm: {
            code: "mm",
            name: "Myanmar",
            dialCode: "+95",
            phoneFormat: "09 212 3456"
        },
        la: {
            code: "la",
            name: "Laos",
            dialCode: "+856",
            phoneFormat: "020 23 123 456"
        },
        zh_CN: {
            code: "zh_CN",
            name: "China",
            dialCode: "+86",
            phoneFormat: "131 2345 6789"
        },
        ae: {
            code: "ae",
            name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
            dialCode: "+971",
            phoneFormat: "050 123 4567"
        },
        af: {
            code: "af",
            name: "Afghanistan (‫افغانستان‬‎)",
            dialCode: "+93",
            phoneFormat: "070 123 4567"
        },
        al: {
            code: "al",
            name: "Albania (Shqipëri)",
            dialCode: "+355",
            phoneFormat: "066 123 4567"
        },
        dz: {
            code: "dz",
            name: "Algeria (‫الجزائر‬‎)",
            dialCode: "+213",
            phoneFormat: "0551 23 45 67"
        },
        as: {
            code: "as",
            name: "American Samoa",
            dialCode: "+1684",
            phoneFormat: "(684) 733-1234"
        },
        ad: {
            code: "ad",
            name: "Andorra",
            dialCode: "+376",
            phoneFormat: "312 345"
        },
        ao: {
            code: "ao",
            name: "Angola",
            dialCode: "+244",
            phoneFormat: "923 123 456"
        },
        ai: {
            code: "ai",
            name: "Anguilla",
            dialCode: "+1264",
            phoneFormat: "(264) 235-1234"
        },
        ag: {
            code: "ag",
            name: "Antigua and Barbuda",
            dialCode: "+1268",
            phoneFormat: "(268) 464-1234"
        },
        ar: {
            code: "ar",
            name: "Argentina",
            dialCode: "+54",
            phoneFormat: "011 15-2345-6789"
        },
        am: {
            code: "am",
            name: "Armenia (Հայաստան)",
            dialCode: "+374",
            phoneFormat: "077 123456"
        },
        aw: {
            code: "aw",
            name: "Aruba",
            dialCode: "+297",
            phoneFormat: "560 1234"
        },
        au: {
            code: "au",
            name: "Australia",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        at: {
            code: "at",
            name: "Austria (Österreich)",
            dialCode: "+43",
            phoneFormat: "0664 123456"
        },
        az: {
            code: "az",
            name: "Azerbaijan (Azərbaycan)",
            dialCode: "+994",
            phoneFormat: "040 123 45 67"
        },
        bs: {
            code: "bs",
            name: "Bahamas",
            dialCode: "+1242",
            phoneFormat: "(242) 359-1234"
        },
        bh: {
            code: "bh",
            name: "Bahrain (‫البحرين‬‎)",
            dialCode: "+973",
            phoneFormat: "3600 1234"
        },
        bd: {
            code: "bd",
            name: "Bangladesh (বাংলাদেশ)",
            dialCode: "+880",
            phoneFormat: "01812-345678"
        },
        bb: {
            code: "bb",
            name: "Barbados",
            dialCode: "+1246",
            phoneFormat: "(246) 250-1234"
        },
        by: {
            code: "by",
            name: "Belarus (Беларусь)",
            dialCode: "+375",
            phoneFormat: "8 029 491-19-11"
        },
        be: {
            code: "be",
            name: "Belgium (België)",
            dialCode: "+32",
            phoneFormat: "0470 12 34 56"
        },
        bz: {
            code: "bz",
            name: "Belize",
            dialCode: "+501",
            phoneFormat: "622-1234"
        },
        bj: {
            code: "bj",
            name: "Benin (Bénin)",
            dialCode: "+229",
            phoneFormat: "90 01 12 34"
        },
        bm: {
            code: "bm",
            name: "Bermuda",
            dialCode: "+1441",
            phoneFormat: "(441) 370-1234"
        },
        bt: {
            code: "bt",
            name: "Bhutan (འབྲུག)",
            dialCode: "+975",
            phoneFormat: "17 12 34 56"
        },
        bo: {
            code: "bo",
            name: "Bolivia",
            dialCode: "+591",
            phoneFormat: "71234567"
        },
        ba: {
            code: "ba",
            name: "Bosnia and Herzegovina (Босна и Херцеговина)",
            dialCode: "+387",
            phoneFormat: "061 123 456"
        },
        bw: {
            code: "bw",
            name: "Botswana",
            dialCode: "+267",
            phoneFormat: "71 123 456"
        },
        br: {
            code: "br",
            name: "Brazil (Brasil)",
            dialCode: "+55",
            phoneFormat: "(11) 96123-4567"
        },
        vg: {
            code: "vg",
            name: "British Virgin Islands",
            dialCode: "+1284",
            phoneFormat: "(284) 300-1234"
        },
        bn: {
            code: "bn",
            name: "Brunei",
            dialCode: "+673",
            phoneFormat: "712 3456"
        },
        bg: {
            code: "bg",
            name: "Bulgaria (България)",
            dialCode: "+359",
            phoneFormat: "048 123 456"
        },
        bf: {
            code: "bf",
            name: "Burkina Faso",
            dialCode: "+226",
            phoneFormat: "70 12 34 56"
        },
        bi: {
            code: "bi",
            name: "Burundi (Uburundi)",
            dialCode: "+257",
            phoneFormat: "79 56 12 34"
        },
        cm: {
            code: "cm",
            name: "Cameroon (Cameroun)",
            dialCode: "+237",
            phoneFormat: "6 71 23 45 67"
        },
        ca: {
            code: "ca",
            name: "Canada",
            dialCode: "+1",
            phoneFormat: "(204) 234-5678"
        },
        cv: {
            code: "cv",
            name: "Cape Verde (Kabu Verdi)",
            dialCode: "+238",
            phoneFormat: "991 12 34"
        },
        bq: {
            code: "bq",
            name: "Caribbean Netherlands",
            dialCode: "+599",
            phoneFormat: "318 1234"
        },
        ky: {
            code: "ky",
            name: "Cayman Islands",
            dialCode: "+1345",
            phoneFormat: "(345) 323-1234"
        },
        cf: {
            code: "cf",
            name: "Central African Republic (République centrafricaine)",
            dialCode: "+236",
            phoneFormat: "70 01 23 45"
        },
        td: {
            code: "td",
            name: "Chad (Tchad)",
            dialCode: "+235",
            phoneFormat: "63 01 23 45"
        },
        cl: {
            code: "cl",
            name: "Chile",
            dialCode: "+56",
            phoneFormat: "09 6123 4567"
        },
        cx: {
            code: "cx",
            name: "Christmas Island",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        cc: {
            code: "cc",
            name: "Cocos (Keeling) Islands",
            dialCode: "+61",
            phoneFormat: "0412 345 678"
        },
        co: {
            code: "co",
            name: "Colombia",
            dialCode: "+57",
            phoneFormat: "321 1234567"
        },
        km: {
            code: "km",
            name: "Comoros (‫جزر القمر‬‎)",
            dialCode: "+269",
            phoneFormat: "321 23 45"
        },
        cd: {
            code: "cd",
            name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
            dialCode: "+243",
            phoneFormat: "0991 234 567"
        },
        cg: {
            code: "cg",
            name: "Congo (Republic) (Congo-Brazzaville)",
            dialCode: "+242",
            phoneFormat: "06 123 4567"
        },
        ck: {
            code: "ck",
            name: "Cook Islands",
            dialCode: "+682",
            phoneFormat: "71 234"
        },
        cr: {
            code: "cr",
            name: "Costa Rica",
            dialCode: "+506",
            phoneFormat: "8312 3456"
        },
        ci: {
            code: "ci",
            name: "Côte d’Ivoire",
            dialCode: "+225",
            phoneFormat: "01 23 45 67"
        },
        hr: {
            code: "hr",
            name: "Croatia (Hrvatska)",
            dialCode: "+385",
            phoneFormat: "091 234 5678"
        },
        cu: {
            code: "cu",
            name: "Cuba",
            dialCode: "+53",
            phoneFormat: "05 1234567"
        },
        cw: {
            code: "cw",
            name: "Curaçao",
            dialCode: "+599",
            phoneFormat: "9 518 1234"
        },
        cy: {
            code: "cy",
            name: "Cyprus (Κύπρος)",
            dialCode: "+357",
            phoneFormat: "96 123456"
        },
        cz: {
            code: "cz",
            name: "Czech Republic (Česká republika)",
            dialCode: "+420",
            phoneFormat: "601 123 456"
        },
        dk: {
            code: "dk",
            name: "Denmark (Danmark)",
            dialCode: "+45",
            phoneFormat: "20 12 34 56"
        },
        dj: {
            code: "dj",
            name: "Djibouti",
            dialCode: "+253",
            phoneFormat: "77 83 10 01"
        },
        dm: {
            code: "dm",
            name: "Dominica",
            dialCode: "+1767",
            phoneFormat: "(767) 225-1234"
        },
        ec: {
            code: "ec",
            name: "Ecuador",
            dialCode: "+593",
            phoneFormat: "099 123 4567"
        },
        eg: {
            code: "eg",
            name: "Egypt (‫مصر‬‎)",
            dialCode: "+20",
            phoneFormat: "0100 123 4567"
        },
        sv: {
            code: "sv",
            name: "El Salvador",
            dialCode: "+503",
            phoneFormat: "7012 3456"
        },
        gq: {
            code: "gq",
            name: "Equatorial Guinea (Guinea Ecuatorial)",
            dialCode: "+240",
            phoneFormat: "222 123 456"
        },
        er: {
            code: "er",
            name: "Eritrea",
            dialCode: "+291",
            phoneFormat: "07 123 456"
        },
        ee: {
            code: "ee",
            name: "Estonia (Eesti)",
            dialCode: "+372",
            phoneFormat: "5123 4567"
        },
        et: {
            code: "et",
            name: "Ethiopia",
            dialCode: "+251",
            phoneFormat: "091 123 4567"
        },
        fk: {
            code: "fk",
            name: "Falkland Islands (Islas Malvinas)",
            dialCode: "+500",
            phoneFormat: "51234"
        },
        fo: {
            code: "fo",
            name: "Faroe Islands (Føroyar)",
            dialCode: "+298",
            phoneFormat: "211234"
        },
        fj: {
            code: "fj",
            name: "Fiji",
            dialCode: "+679",
            phoneFormat: "701 2345"
        },
        fi: {
            code: "fi",
            name: "Finland (Suomi)",
            dialCode: "+358",
            phoneFormat: "041 2345678"
        },
        fr: {
            code: "fr",
            name: "France",
            dialCode: "+33",
            phoneFormat: "06 12 34 56 78"
        },
        gf: {
            code: "gf",
            name: "French Guiana (Guyane française)",
            dialCode: "+594",
            phoneFormat: "0694 20 12 34"
        },
        pf: {
            code: "pf",
            name: "French Polynesia (Polynésie française)",
            dialCode: "+689",
            phoneFormat: "87 12 34 56"
        },
        ga: {
            code: "ga",
            name: "Gabon",
            dialCode: "+241",
            phoneFormat: "06 03 12 34"
        },
        gm: {
            code: "gm",
            name: "Gambia",
            dialCode: "+220",
            phoneFormat: "301 2345"
        },
        ge: {
            code: "ge",
            name: "Georgia (საქართველო)",
            dialCode: "+995",
            phoneFormat: "555 12 34 56"
        },
        de: {
            code: "de",
            name: "Germany (Deutschland)",
            dialCode: "+49",
            phoneFormat: "01512 3456789"
        },
        gh: {
            code: "gh",
            name: "Ghana (Gaana)",
            dialCode: "+233",
            phoneFormat: "023 123 4567"
        },
        gi: {
            code: "gi",
            name: "Gibraltar",
            dialCode: "+350",
            phoneFormat: "57123456"
        },
        gr: {
            code: "gr",
            name: "Greece (Ελλάδα)",
            dialCode: "+30",
            phoneFormat: "691 234 5678"
        },
        gl: {
            code: "gl",
            name: "Greenland (Kalaallit Nunaat)",
            dialCode: "+299",
            phoneFormat: "22 12 34"
        },
        gd: {
            code: "gd",
            name: "Grenada",
            dialCode: "+1473",
            phoneFormat: "(473) 403-1234"
        },
        gp: {
            code: "gp",
            name: "Guadeloupe",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        gu: {
            code: "gu",
            name: "Guam",
            dialCode: "+1671",
            phoneFormat: "(671) 300-1234"
        },
        gt: {
            code: "gt",
            name: "Guatemala",
            dialCode: "+502",
            phoneFormat: "5123 4567"
        },
        gg: {
            code: "gg",
            name: "Guernsey",
            dialCode: "+44",
            phoneFormat: "07781 123456"
        },
        gn: {
            code: "gn",
            name: "Guinea (Guinée)",
            dialCode: "+224",
            phoneFormat: "601 12 34 56"
        },
        gw: {
            code: "gw",
            name: "Guinea-Bissau (Guiné Bissau)",
            dialCode: "+245",
            phoneFormat: "955 012 345"
        },
        gy: {
            code: "gy",
            name: "Guyana",
            dialCode: "+592",
            phoneFormat: "609 1234"
        },
        ht: {
            code: "ht",
            name: "Haiti",
            dialCode: "+509",
            phoneFormat: "34 10 1234"
        },
        hn: {
            code: "hn",
            name: "Honduras",
            dialCode: "+504",
            phoneFormat: "9123-4567"
        },
        hu: {
            code: "hu",
            name: "Hungary (Magyarország)",
            dialCode: "+36",
            phoneFormat: "(20) 123 4567"
        },
        is: {
            code: "is",
            name: "Iceland (Ísland)",
            dialCode: "+354",
            phoneFormat: "611 1234"
        },
        in: {
            code: "in",
            name: "India (भारत)",
            dialCode: "+91",
            phoneFormat: "099876 54321"
        },
        ir: {
            code: "ir",
            name: "Iran (‫ایران‬‎)",
            dialCode: "+98",
            phoneFormat: "0912 345 6789"
        },
        iq: {
            code: "iq",
            name: "Iraq (‫العراق‬‎)",
            dialCode: "+964",
            phoneFormat: "0791 234 5678"
        },
        ie: {
            code: "ie",
            name: "Ireland",
            dialCode: "+353",
            phoneFormat: "085 012 3456"
        },
        im: {
            code: "im",
            name: "Isle of Man",
            dialCode: "+44",
            phoneFormat: "07924 123456"
        },
        il: {
            code: "il",
            name: "Israel (‫ישראל‬‎)",
            dialCode: "+972",
            phoneFormat: "050-123-4567"
        },
        it: {
            code: "it",
            name: "Italy (Italia)",
            dialCode: "+39",
            phoneFormat: "312 345 6789"
        },
        jm: {
            code: "jm",
            name: "Jamaica",
            dialCode: "+1876",
            phoneFormat: "(876) 210-1234"
        },
        jp: {
            code: "jp",
            name: "Japan (日本)",
            dialCode: "+81",
            phoneFormat: "090-1234-5678"
        },
        je: {
            code: "je",
            name: "Jersey",
            dialCode: "+44",
            phoneFormat: "07797 123456"
        },
        jo: {
            code: "jo",
            name: "Jordan (‫الأردن‬‎)",
            dialCode: "+962",
            phoneFormat: "07 9012 3456"
        },
        kz: {
            code: "kz",
            name: "Kazakhstan (Казахстан)",
            dialCode: "+7",
            phoneFormat: "8 (771) 000 9998"
        },
        ke: {
            code: "ke",
            name: "Kenya",
            dialCode: "+254",
            phoneFormat: "0712 123456"
        },
        ki: {
            code: "ki",
            name: "Kiribati",
            dialCode: "+686",
            phoneFormat: "72012345"
        },
        xk: {
            code: "xk",
            name: "Kosovo",
            dialCode: "+383",
            phoneFormat: ""
        },
        kw: {
            code: "kw",
            name: "Kuwait (‫الكويت‬‎)",
            dialCode: "+965",
            phoneFormat: "500 12345"
        },
        kg: {
            code: "kg",
            name: "Kyrgyzstan (Кыргызстан)",
            dialCode: "+996",
            phoneFormat: "0700 123 456"
        },
        lv: {
            code: "lv",
            name: "Latvia (Latvija)",
            dialCode: "+371",
            phoneFormat: "21 234 567"
        },
        lb: {
            code: "lb",
            name: "Lebanon (‫لبنان‬‎)",
            dialCode: "+961",
            phoneFormat: "71 123 456"
        },
        ls: {
            code: "ls",
            name: "Lesotho",
            dialCode: "+266",
            phoneFormat: "5012 3456"
        },
        lr: {
            code: "lr",
            name: "Liberia",
            dialCode: "+231",
            phoneFormat: "077 012 3456"
        },
        ly: {
            code: "ly",
            name: "Libya (‫ليبيا‬‎)",
            dialCode: "+218",
            phoneFormat: "091-2345678"
        },
        li: {
            code: "li",
            name: "Liechtenstein",
            dialCode: "+423",
            phoneFormat: "660 234 567"
        },
        lt: {
            code: "lt",
            name: "Lithuania (Lietuva)",
            dialCode: "+370",
            phoneFormat: "(8-612) 34567"
        },
        lu: {
            code: "lu",
            name: "Luxembourg",
            dialCode: "+352",
            phoneFormat: "628 123 456"
        },
        mk: {
            code: "mk",
            name: "Macedonia (FYROM) (Македонија)",
            dialCode: "+389",
            phoneFormat: "072 345 678"
        },
        mg: {
            code: "mg",
            name: "Madagascar (Madagasikara)",
            dialCode: "+261",
            phoneFormat: "032 12 345 67"
        },
        mw: {
            code: "mw",
            name: "Malawi",
            dialCode: "+265",
            phoneFormat: "0991 23 45 67"
        },
        my: {
            code: "my",
            name: "Malaysia",
            dialCode: "+60",
            phoneFormat: "012-345 6789"
        },
        mv: {
            code: "mv",
            name: "Maldives",
            dialCode: "+960",
            phoneFormat: "771-2345"
        },
        ml: {
            code: "ml",
            name: "Mali",
            dialCode: "+223",
            phoneFormat: "65 01 23 45"
        },
        mt: {
            code: "mt",
            name: "Malta",
            dialCode: "+356",
            phoneFormat: "9696 1234"
        },
        mh: {
            code: "mh",
            name: "Marshall Islands",
            dialCode: "+692",
            phoneFormat: "235-1234"
        },
        mq: {
            code: "mq",
            name: "Martinique",
            dialCode: "+596",
            phoneFormat: "0696 20 12 34"
        },
        mr: {
            code: "mr",
            name: "Mauritania (‫موريتانيا‬‎)",
            dialCode: "+222",
            phoneFormat: "22 12 34 56"
        },
        mu: {
            code: "mu",
            name: "Mauritius (Moris)",
            dialCode: "+230",
            phoneFormat: "5251 2345"
        },
        yt: {
            code: "yt",
            name: "Mayotte",
            dialCode: "+262",
            phoneFormat: "0639 12 34 56"
        },
        mx: {
            code: "mx",
            name: "Mexico (México)",
            dialCode: "+52",
            phoneFormat: "044 222 123 4567"
        },
        fm: {
            code: "fm",
            name: "Micronesia",
            dialCode: "+691",
            phoneFormat: "350 1234"
        },
        md: {
            code: "md",
            name: "Moldova (Republica Moldova)",
            dialCode: "+373",
            phoneFormat: "0621 12 345"
        },
        mc: {
            code: "mc",
            name: "Monaco",
            dialCode: "+377",
            phoneFormat: "06 12 34 56 78"
        },
        mn: {
            code: "mn",
            name: "Mongolia (Монгол)",
            dialCode: "+976",
            phoneFormat: "8812 3456"
        },
        me: {
            code: "me",
            name: "Montenegro (Crna Gora)",
            dialCode: "+382",
            phoneFormat: "067 622 901"
        },
        ms: {
            code: "ms",
            name: "Montserrat",
            dialCode: "+1664",
            phoneFormat: "(664) 492-3456"
        },
        ma: {
            code: "ma",
            name: "Morocco (‫المغرب‬‎)",
            dialCode: "+212",
            phoneFormat: "0650-123456"
        },
        mz: {
            code: "mz",
            name: "Mozambique (Moçambique)",
            dialCode: "+258",
            phoneFormat: "82 123 4567"
        },
        na: {
            code: "na",
            name: "Namibia (Namibië)",
            dialCode: "+264",
            phoneFormat: "081 123 4567"
        },
        nr: {
            code: "nr",
            name: "Nauru",
            dialCode: "+674",
            phoneFormat: "555 1234"
        },
        np: {
            code: "np",
            name: "Nepal (नेपाल)",
            dialCode: "+977",
            phoneFormat: "984-1234567"
        },
        nl: {
            code: "nl",
            name: "Netherlands (Nederland)",
            dialCode: "+31",
            phoneFormat: "06 12345678"
        },
        nc: {
            code: "nc",
            name: "New Caledonia (Nouvelle-Calédonie)",
            dialCode: "+687",
            phoneFormat: "75.12.34"
        },
        nz: {
            code: "nz",
            name: "New Zealand",
            dialCode: "+64",
            phoneFormat: "021 123 4567"
        },
        ni: {
            code: "ni",
            name: "Nicaragua",
            dialCode: "+505",
            phoneFormat: "8123 4567"
        },
        ne: {
            code: "ne",
            name: "Niger (Nijar)",
            dialCode: "+227",
            phoneFormat: "93 12 34 56"
        },
        ng: {
            code: "ng",
            name: "Nigeria",
            dialCode: "+234",
            phoneFormat: "0802 123 4567"
        },
        nu: {
            code: "nu",
            name: "Niue",
            dialCode: "+683",
            phoneFormat: "1234"
        },
        nf: {
            code: "nf",
            name: "Norfolk Island",
            dialCode: "+672",
            phoneFormat: "3 81234"
        },
        kp: {
            code: "kp",
            name: "North Korea (조선 민주주의 인민 공화국)",
            dialCode: "+850",
            phoneFormat: "0192 123 4567"
        },
        mp: {
            code: "mp",
            name: "Northern Mariana Islands",
            dialCode: "+1670",
            phoneFormat: "(670) 234-5678"
        },
        no: {
            code: "no",
            name: "Norway (Norge)",
            dialCode: "+47",
            phoneFormat: "406 12 345"
        },
        om: {
            code: "om",
            name: "Oman (‫عُمان‬‎)",
            dialCode: "+968",
            phoneFormat: "9212 3456"
        },
        pk: {
            code: "pk",
            name: "Pakistan (‫پاکستان‬‎)",
            dialCode: "+92",
            phoneFormat: "0301 2345678"
        },
        pw: {
            code: "pw",
            name: "Palau",
            dialCode: "+680",
            phoneFormat: "620 1234"
        },
        ps: {
            code: "ps",
            name: "Palestine (‫فلسطين‬‎)",
            dialCode: "+970",
            phoneFormat: "0599 123 456"
        },
        pa: {
            code: "pa",
            name: "Panama (Panamá)",
            dialCode: "+507",
            phoneFormat: "6001-2345"
        },
        pg: {
            code: "pg",
            name: "Papua New Guinea",
            dialCode: "+675",
            phoneFormat: "681 2345"
        },
        py: {
            code: "py",
            name: "Paraguay",
            dialCode: "+595",
            phoneFormat: "0961 456789"
        },
        pe: {
            code: "pe",
            name: "Peru (Perú)",
            dialCode: "+51",
            phoneFormat: "912 345 678"
        },
        ph: {
            code: "ph",
            name: "Philippines",
            dialCode: "+63",
            phoneFormat: "0905 123 4567"
        },
        pl: {
            code: "pl",
            name: "Poland (Polska)",
            dialCode: "+48",
            phoneFormat: "512 345 678"
        },
        pt: {
            code: "pt",
            name: "Portugal",
            dialCode: "+351",
            phoneFormat: "912 345 678"
        },
        qa: {
            code: "qa",
            name: "Qatar (‫قطر‬‎)",
            dialCode: "+974",
            phoneFormat: "3312 3456"
        },
        re: {
            code: "re",
            name: "Réunion (La Réunion)",
            dialCode: "+262",
            phoneFormat: "0692 12 34 56"
        },
        ro: {
            code: "ro",
            name: "Romania (România)",
            dialCode: "+40",
            phoneFormat: "0712 345 678"
        },
        ru: {
            code: "ru",
            name: "Russia (Россия)",
            dialCode: "+7",
            phoneFormat: "8 (912) 345-67-89"
        },
        rw: {
            code: "rw",
            name: "Rwanda",
            dialCode: "+250",
            phoneFormat: "0720 123 456"
        },
        bl: {
            code: "bl",
            name: "Saint Barthélemy (Saint-Barthélemy)",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        sh: {
            code: "sh",
            name: "Saint Helena",
            dialCode: "+290",
            phoneFormat: "51234"
        },
        kn: {
            code: "kn",
            name: "Saint Kitts and Nevis",
            dialCode: "+1869",
            phoneFormat: "(869) 765-2917"
        },
        lc: {
            code: "lc",
            name: "Saint Lucia",
            dialCode: "+1758",
            phoneFormat: "(758) 284-5678"
        },
        mf: {
            code: "mf",
            name: "Saint Martin (Saint-Martin (partie française))",
            dialCode: "+590",
            phoneFormat: "0690 30-1234"
        },
        pm: {
            code: "pm",
            name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
            dialCode: "+508",
            phoneFormat: "055 12 34"
        },
        vc: {
            code: "vc",
            name: "Saint Vincent and the Grenadines",
            dialCode: "+1784",
            phoneFormat: "(784) 430-1234"
        },
        ws: {
            code: "ws",
            name: "Samoa",
            dialCode: "+685",
            phoneFormat: "601234"
        },
        sm: {
            code: "sm",
            name: "San Marino",
            dialCode: "+378",
            phoneFormat: "66 66 12 12"
        },
        st: {
            code: "st",
            name: "São Tomé and Príncipe (São Tomé e Príncipe)",
            dialCode: "+239",
            phoneFormat: "981 2345"
        },
        sa: {
            code: "sa",
            name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
            dialCode: "+966",
            phoneFormat: "051 234 5678"
        },
        sn: {
            code: "sn",
            name: "Senegal (Sénégal)",
            dialCode: "+221",
            phoneFormat: "70 123 45 67"
        },
        rs: {
            code: "rs",
            name: "Serbia (Србија)",
            dialCode: "+381",
            phoneFormat: "060 1234567"
        },
        sc: {
            code: "sc",
            name: "Seychelles",
            dialCode: "+248",
            phoneFormat: "2 510 123"
        },
        sl: {
            code: "sl",
            name: "Sierra Leone",
            dialCode: "+232",
            phoneFormat: "(025) 123456"
        },
        sx: {
            code: "sx",
            name: "Sint Maarten",
            dialCode: "+1721",
            phoneFormat: "(721) 520-5678"
        },
        sk: {
            code: "sk",
            name: "Slovakia (Slovensko)",
            dialCode: "+421",
            phoneFormat: "0912 123 456"
        },
        si: {
            code: "si",
            name: "Slovenia (Slovenija)",
            dialCode: "+386",
            phoneFormat: "031 234 567"
        },
        sb: {
            code: "sb",
            name: "Solomon Islands",
            dialCode: "+677",
            phoneFormat: "74 21234"
        },
        so: {
            code: "so",
            name: "Somalia (Soomaaliya)",
            dialCode: "+252",
            phoneFormat: "7 1123456"
        },
        za: {
            code: "za",
            name: "South Africa",
            dialCode: "+27",
            phoneFormat: "071 123 4567"
        },
        kr: {
            code: "kr",
            name: "South Korea (대한민국)",
            dialCode: "+82",
            phoneFormat: "010-0000-0000"
        },
        ss: {
            code: "ss",
            name: "South Sudan (‫جنوب السودان‬‎)",
            dialCode: "+211",
            phoneFormat: "0977 123 456"
        },
        es: {
            code: "es",
            name: "Spain (España)",
            dialCode: "+34",
            phoneFormat: "612 34 56 78"
        },
        lk: {
            code: "lk",
            name: "Sri Lanka (ශ්‍රී ලංකාව)",
            dialCode: "+94",
            phoneFormat: "071 234 5678"
        },
        sd: {
            code: "sd",
            name: "Sudan (‫السودان‬‎)",
            dialCode: "+249",
            phoneFormat: "091 123 1234"
        },
        sr: {
            code: "sr",
            name: "Suriname",
            dialCode: "+597",
            phoneFormat: "741-2345"
        },
        sj: {
            code: "sj",
            name: "Svalbard and Jan Mayen",
            dialCode: "+47",
            phoneFormat: "412 34 567"
        },
        sz: {
            code: "sz",
            name: "Swaziland",
            dialCode: "+268",
            phoneFormat: "7612 3456"
        },
        se: {
            code: "se",
            name: "Sweden (Sverige)",
            dialCode: "+46",
            phoneFormat: "070-123 45 67"
        },
        ch: {
            code: "ch",
            name: "Switzerland (Schweiz)",
            dialCode: "+41",
            phoneFormat: "078 123 45 67"
        },
        sy: {
            code: "sy",
            name: "Syria (‫سوريا‬‎)",
            dialCode: "+963",
            phoneFormat: "0944 567 890"
        },
        tj: {
            code: "tj",
            name: "Tajikistan",
            dialCode: "+992",
            phoneFormat: "(8) 917 12 3456"
        },
        tz: {
            code: "tz",
            name: "Tanzania",
            dialCode: "+255",
            phoneFormat: "0621 234 567"
        },
        tl: {
            code: "tl",
            name: "Timor-Leste",
            dialCode: "+670",
            phoneFormat: "7721 2345"
        },
        tg: {
            code: "tg",
            name: "Togo",
            dialCode: "+228",
            phoneFormat: "90 11 23 45"
        },
        tk: {
            code: "tk",
            name: "Tokelau",
            dialCode: "+690",
            phoneFormat: "7290"
        },
        to: {
            code: "to",
            name: "Tonga",
            dialCode: "+676",
            phoneFormat: "771 5123"
        },
        tt: {
            code: "tt",
            name: "Trinidad and Tobago",
            dialCode: "+1868",
            phoneFormat: "(868) 291-1234"
        },
        tn: {
            code: "tn",
            name: "Tunisia (‫تونس‬‎)",
            dialCode: "+216",
            phoneFormat: "20 123 456"
        },
        tr: {
            code: "tr",
            name: "Turkey (Türkiye)",
            dialCode: "+90",
            phoneFormat: "0501 234 56 78"
        },
        tm: {
            code: "tm",
            name: "Turkmenistan",
            dialCode: "+993",
            phoneFormat: "8 66 123456"
        },
        tc: {
            code: "tc",
            name: "Turks and Caicos Islands",
            dialCode: "+1649",
            phoneFormat: "(649) 231-1234"
        },
        tv: {
            code: "tv",
            name: "Tuvalu",
            dialCode: "+688",
            phoneFormat: "901234"
        },
        gb: {
            code: "gb",
            name: "United Kingdom",
            dialCode: "+44",
            phoneFormat: "07400 123456"
        },
        ug: {
            code: "ug",
            name: "Uganda",
            dialCode: "+256",
            phoneFormat: "0712 345678"
        },
        ua: {
            code: "ua",
            name: "Ukraine (Україна)",
            dialCode: "+380",
            phoneFormat: "039 123 4567"
        },
        uy: {
            code: "uy",
            name: "Uruguay",
            dialCode: "+598",
            phoneFormat: "094 231 234"
        },
        uz: {
            code: "uz",
            name: "Uzbekistan (Oʻzbekiston)",
            dialCode: "+998",
            phoneFormat: "8 91 234 56 78"
        },
        vu: {
            code: "vu",
            name: "Vanuatu",
            dialCode: "+678",
            phoneFormat: "591 2345"
        },
        va: {
            code: "va",
            name: "Vatican City (Città del Vaticano)",
            dialCode: "+39",
            phoneFormat: "312 345 6789"
        },
        ve: {
            code: "ve",
            name: "Venezuela",
            dialCode: "+58",
            phoneFormat: "0412-1234567"
        },
        wf: {
            code: "wf",
            name: "Wallis and Futuna",
            dialCode: "+681",
            phoneFormat: "50 12 34"
        },
        eh: {
            code: "eh",
            name: "Western Sahara (‫الصحراء الغربية‬‎)",
            dialCode: "+212",
            phoneFormat: "0650-123456"
        },
        ye: {
            code: "ye",
            name: "Yemen (‫اليمن‬‎)",
            dialCode: "+967",
            phoneFormat: "0712 345 678"
        },
        zm: {
            code: "zm",
            name: "Zambia",
            dialCode: "+260",
            phoneFormat: "095 5123456"
        },
        zw: {
            code: "zw",
            name: "Zimbabwe",
            dialCode: "+263",
            phoneFormat: "071 123 4567"
        },
        ax: {
            code: "ax",
            name: "Åland Islands",
            dialCode: "+358",
            phoneFormat: "041 2345678"
        }
    },
    ZR = {
        class: "dropdown"
    },
    qR = ["onClick"],
    $R = j({
        __name: "DropDown",
        props: {
            disabled: {
                type: Boolean,
                default: !1
            },
            typeValue: {}
        },
        emits: ["changeT"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const A = tt(),
                o = S(!1),
                l = Object.entries(jR);

            function g(_) {
                n("changeT", _.replace("+", "")), o.value = !o.value
            }
            const p = O(() => {
                    const _ = A.getAreaPhoneLenList.map(d => d.area);
                    return _.length ? l.filter(d => _.includes(d[1].dialCode)) : l
                }),
                h = () => {
                    o.value = !1
                };
            return le(async () => {}), s({
                close: h
            }), (_, d) => {
                var B;
                const C = Y("van-icon");
                return u(), m("div", ZR, [t("div", {
                    class: "dropdown__value",
                    onClick: d[0] || (d[0] = b => _.disabled ? null : o.value = !o.value)
                }, [t("span", null, "+" + a(_.typeValue), 1), U(C, {
                    name: "arrow-down",
                    class: se({
                        arrowActive: o.value
                    })
                }, null, 8, ["class"])]), t("div", {
                    class: se(["dropdown__list", {
                        active: o.value
                    }])
                }, [(B = p.value) != null && B.length ? (u(!0), m(K, {
                    key: 0
                }, $(p.value, (b, y) => (u(), m("div", {
                    key: y,
                    class: se(["dropdown__list-item", {
                        active: b[1].dialCode.includes(_.typeValue)
                    }]),
                    onClick: w => g(b[1].dialCode)
                }, [t("span", null, a(b[1].dialCode), 1), J(" " + a(b[1].name), 1)], 10, qR))), 128)) : H("", !0)], 2)])
            }
        }
    });
const Ps = Z($R, [
        ["__scopeId", "data-v-6f85c91a"]
    ]),
    e8 = {
        key: 0,
        class: "active-container"
    },
    t8 = ["src"],
    s8 = {
        class: "active-box"
    },
    n8 = {
        class: "title"
    },
    a8 = ["innerHTML"],
    A8 = {
        key: 1
    },
    o8 = ["src"],
    i8 = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                {
                    setLoading: n
                } = mt(),
                A = S({}),
                o = async () => {
                    var h;
                    n(!0);
                    const p = await V(e5({
                        bannerId: Number(s.currentRoute.value.query.id)
                    }));
                    (h = p == null ? void 0 : p.data) == null || h.jumpType, A.value = p.data, n(!1)
                }, l = O(() => {
                    var p;
                    if (!((p = A.value) != null && p.img)) return [];
                    try {
                        return JSON.parse(A.value.img)
                    } catch {
                        return []
                    }
                });

            function g() {
                s.go(-1)
            }
            return le(async () => {
                o()
            }), (p, h) => {
                const _ = Y("NavBar");
                return u(), m(K, null, [U(_, {
                    title: p.$t("activityDestitle"),
                    backgroundColor: "#3F3F3F",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: g
                }, null, 8, ["title"]), A.value.coverUrl || A.value.title || A.value.img ? (u(), m("div", e8, [t("img", {
                    class: "banner",
                    src: A.value.coverUrl
                }, null, 8, t8), t("div", s8, [t("div", n8, a(A.value.title), 1), A.value.jumpType !== 3 ? (u(), m("div", {
                    key: 0,
                    innerHTML: A.value.img
                }, null, 8, a8)) : (u(), m("div", A8, [(u(!0), m(K, null, $(l.value, (d, C) => (u(), m("div", {
                    key: C
                }, [t("img", {
                    src: d == null ? void 0 : d.Url
                }, null, 8, o8)]))), 128))]))])])) : H("", !0)], 64)
            }
        }
    });
const l8 = Z(i8, [
        ["__scopeId", "data-v-25df175c"]
    ]),
    g8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: l8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Mt = cn.messages();

function Ws(e) {
    const s = S();
    return le(() => {
        const n = "refresh" + bs();
        s.value && s.value.setAttribute("id", n), setTimeout(() => {
            zt.init({
                mainElement: "#" + n,
                triggerElement: "body",
                onRefresh() {
                    e()
                },
                instructionsReleaseToRefresh: Mt.vanPullRefresh.loosing,
                instructionsPullToRefresh: Mt.vanPullRefresh.pulling,
                instructionsRefreshing: Mt.loading
            })
        }, 200)
    }), _t(() => {
        zt.destroyAll()
    }), {
        elementRef: s
    }
}
const c8 = {
        class: "infiniteScroll__loading"
    },
    r8 = j({
        __name: "ListSimply",
        props: {
            api: {},
            distance: {
                default: 100
            },
            pageQuery: {
                default: {}
            },
            list: {},
            isAutoLoad: {
                type: Boolean,
                default: !0
            },
            filterData: {}
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange", "listChange"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const A = e,
                o = O(() => {
                    let v = i(A.list);
                    return A.filterData ? A.filterData(v) : v
                }),
                {
                    isAutoLoad: l
                } = A,
                g = S(!1),
                p = S({
                    pageNo: 1,
                    pageSize: 10
                }),
                h = S(!1),
                _ = async v => {
                    if (!p.value.pageNo || !p.value.pageSize) return;
                    h.value = !0;
                    let E = {
                        ...p.value,
                        ...A.pageQuery,
                        ...v
                    };
                    const f = await V(A.api(E));
                    if (f) {
                        p.value.pageNo = f.data.pageNo, n("pageChange", f.data), (f.data.totalCount === 0 || f.data.totalPage === p.value.pageNo) && (g.value = !0);
                        let L = p.value.pageNo === 1 ? f.data.list : [...A.list.concat(f.data.list)];
                        n("update:list", L), n("listChange", f), h.value = !1
                    } else h.value = !1
                }, d = S(!1);
            let C = null;
            async function B() {
                C && (C(), C = null), await _(), pt(() => {
                    C = ve(w, v => {
                        const {
                            innerHeight: E
                        } = window;
                        d.value || v <= E + A.distance && v !== 0 && p.value.pageNo >= 1 && !h.value && !g.value && (_({
                            pageNo: p.value.pageNo + 1
                        }), d.value = !0, setTimeout(() => {
                            d.value = !1
                        }, 1e3))
                    })
                })
            }
            le(async () => {
                l && B()
            }), Vt(async () => {});
            const b = () => {
                    p.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, g.value = !1, n("update:list", []), B()
                },
                {
                    elementRef: y
                } = Ws(b),
                {
                    bottom: w
                } = ds(y);
            return s({
                resetRefresh: b
            }), (v, E) => {
                const f = Y("van-loading");
                return u(), m("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: y
                }, [he(v.$slots, "content", {
                    list: o.value
                }, void 0, !0), he(v.$slots, "loading", {}, () => [t("div", c8, [h.value && !g.value ? (u(), ce(f, {
                    key: 0,
                    class: "z-50"
                })) : H("", !0), o.value.length === 0 && g.value ? he(v.$slots, "empty", {
                    key: 1
                }, () => [U(Se)], !0) : g.value ? (u(), m("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, a(v.$t("noMoreThere")), 513)) : H("", !0)])], !0)], 512)
            }
        }
    });
const Ys = Z(r8, [
        ["__scopeId", "data-v-0ef79ff1"]
    ]),
    d8 = {
        class: "championship"
    },
    p8 = {
        class: "tabs"
    },
    _8 = ["onClick"],
    u8 = ["onClick"],
    m8 = j({
        __name: "index",
        setup(e) {
            const {
                tabList: s,
                serviceNowTime: n,
                type: A
            } = et(), {
                t: o
            } = oe(), l = Ae(), g = _e({
                state: 1
            }), p = S([]), h = S(), _ = S(!1), d = S(""), C = S(!1);
            ve(C, f => {
                var L;
                C.value && ((L = h.value) == null || L.resetRefresh())
            });

            function B(f) {
                l.push({
                    name: "Championship-ChampionshipDetail",
                    query: {
                        championId: f
                    }
                })
            }

            function b(f) {
                var L;
                g.state = f, (L = h.value) == null || L.resetRefresh()
            }

            function y(f) {
                n.value = f.serviceNowTime
            }
            const w = S(null),
                v = async f => {
                    w.value && clearTimeout(w.value), w.value = setTimeout(async () => {
                        var D;
                        if (f.isJoin) return;
                        const L = await E(F5({
                            championId: f.id
                        }));
                        if (L) {
                            if (L.code == 0) we(o("success")), (D = h.value) == null || D.resetRefresh();
                            else if ([803, 804, 805].includes(L.msgCode) && L.data != null) switch (_.value = !0, L.msgCode) {
                                case 803:
                                    d.value = o("cpsTip25", [L.data]);
                                    break;
                                case 804:
                                    d.value = o("cpsTip26", [L.data]);
                                    break;
                                case 805:
                                    d.value = o("cpsTip27", [A[L.data]]);
                                    break;
                                default:
                                    d.value = o(`code${L.msgCode}`)
                            }
                        }
                    }, 100)
                }, E = async f => await f.then(D => D && D.code !== 0 ? [803, 804, 805].includes(D.msgCode) ? D : (De(D), null) : D).catch(D => (De(D), null));
            return (f, L) => {
                const D = Y("NavBar"),
                    te = Y("van-sticky");
                return u(), m("div", d8, [U(te, null, {
                    default: z(() => [U(D, {
                        title: f.$t("cpsTip1"),
                        "left-arrow": "",
                        onClickLeft: L[0] || (L[0] = () => i(l).back())
                    }, null, 8, ["title"]), t("div", p8, [(u(!0), m(K, null, $(i(s), N => (u(), m("div", {
                        key: N.key,
                        class: se({
                            active: g.state == N.key
                        }),
                        onClick: I => b(N.key)
                    }, a(N.title), 11, _8))), 128))])]),
                    _: 1
                }), U(Ys, {
                    list: p.value,
                    "onUpdate:list": L[2] || (L[2] = N => p.value = N),
                    api: i(V5),
                    "page-query": g,
                    "onUpdate:pageQuery": L[3] || (L[3] = N => g = N),
                    distance: 100,
                    ref_key: "listRef",
                    ref: h,
                    "is-auto-load": !0,
                    onListChange: y
                }, {
                    content: z(() => [(u(!0), m(K, null, $(p.value, N => (u(), m("div", {
                        key: N.id
                    }, [U(Kt, {
                        itemD: N,
                        state: N.state,
                        isRefresh: C.value,
                        "onUpdate:isRefresh": L[1] || (L[1] = I => C.value = I),
                        onClick: I => B(N.id)
                    }, null, 8, ["itemD", "state", "isRefresh", "onClick"]), [1].includes(N.state) ? (u(), m("div", {
                        key: 0,
                        class: se(["btn", {
                            active: !N.isJoin
                        }]),
                        onClick: I => v(N)
                    }, a(N.isJoin ? f.$t("cpsTip8") : f.$t("cpsTip9")), 11, u8)) : H("", !0)]))), 128))]),
                    _: 1
                }, 8, ["list", "api", "page-query"]), U(ze, {
                    show: _.value,
                    "onUpdate:show": L[4] || (L[4] = N => _.value = N),
                    onConfirm: L[5] || (L[5] = () => _.value = !1),
                    showCancelBtn: !1,
                    showCloseIcon: !0,
                    clickOutSide: !0
                }, {
                    content: z(() => [t("h1", null, a(d.value), 1)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const v8 = Z(m8, [
        ["__scopeId", "data-v-6c95b906"]
    ]),
    h8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: v8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    w8 = {
        class: "dailySignIn__container"
    },
    b8 = {
        class: "dailySignIn__container-hero"
    },
    C8 = {
        class: "dailySignIn__container-hero__header"
    },
    B8 = {
        class: "dailySignIn__container-hero__footer"
    },
    y8 = {
        class: "dailySignIn__container-content"
    },
    E8 = {
        class: "dailySignIn__container-content__wrapper"
    },
    f8 = {
        class: "dailySignIn__container-content__wrapper-block__header"
    },
    R8 = {
        class: "dailySignIn__container-content__footer"
    },
    S8 = ["disabled"],
    I8 = j({
        __name: "index",
        setup(e) {
            oe();
            const s = Ae(),
                A = ue().getUserInfo,
                o = S({}),
                l = S([]);
            let g = !1;

            function p() {
                s.go(-1)
            }

            function h(C) {
                s.push({
                    name: C === "rules" ? `${String(s.currentRoute.value.name)}-Rules` : `${String(s.currentRoute.value.name)}-Record`
                })
            }
            async function _() {
                await V(t5({})) && localStorage.setItem("signedFlag", "1"), d()
            }
            const d = async () => {
                const C = await V(ks({
                    uid: A.userId,
                    sign: A.sign
                }));
                localStorage.getItem("signedFlag") === "1" && (g = !0), l.value = C.data.signInRechargesList, o.value = C.data.signIn
            };
            return le(async () => {
                localStorage.setItem("signedFlag", "0"), d()
            }), (C, B) => {
                const b = Y("NavBar"),
                    y = de("lazy");
                return u(), m("div", w8, [U(b, {
                    title: C.$t("checkIn"),
                    backgroundColor: "#3F3F3F",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: p
                }, null, 8, ["title"]), t("div", b8, [t("div", C8, [t("h1", null, a(C.$t("code9007")), 1), t("p", null, a(C.$t("descRewordsBasedOnConsecutiveDays")), 1), t("div", null, [J(a(C.$t("checkedInConsecutively")), 1), t("span", null, a(o.value.signCount || 0), 1), J(a(C.$t("days")), 1)]), t("p", null, a(C.$t("comulativelyObtained")), 1), t("h1", null, a(i(ae)(o.value.signInSum) || i(ae)(0)), 1)]), t("div", B8, [t("button", {
                    onClick: B[0] || (B[0] = w => h("rules"))
                }, a(C.$t("playRules")), 1), t("button", {
                    onClick: B[1] || (B[1] = w => h("record"))
                }, a(C.$t("checkInRecord")), 1)])]), t("div", y8, [t("div", E8, [(u(!0), m(K, null, $(l.value.slice(0, 6), (w, v) => (u(), m("div", {
                    key: v,
                    class: se(["dailySignIn__container-content__wrapper-block", {
                        signed: v < o.value.signCount
                    }])
                }, [t("div", f8, [W(t("img", null, null, 512), [
                    [y, i(Q)("activity/DailySignIn", "SignInTop")]
                ]), t("span", null, a(i(ae)(w.bouns)), 1)]), W(t("img", null, null, 512), [
                    [y, i(Q)("activity/DailySignIn", "coin")]
                ]), t("span", null, a(w.day) + " " + a(C.$t("days")), 1)], 2))), 128)), (u(!0), m(K, null, $(l.value.slice(6, 7), w => (u(), m("div", {
                    class: se(["dailySignIn__container-content__wrapper-block", {
                        signed: o.value.signCount >= 7
                    }])
                }, [t("p", null, a(i(ae)(w.bouns)), 1), t("div", null, [t("span", null, a(w.day) + " " + a(C.$t("days")), 1)])], 2))), 256))]), t("div", R8, [t("button", {
                    onClick: B[2] || (B[2] = w => {
                        w.stopPropagation(), _()
                    }),
                    disabled: i(g),
                    class: se({
                        greyBtn: i(g)
                    })
                }, a(C.$t("checkIn")), 11, S8)])])])
            }
        }
    });
const U8 = Z(I8, [
        ["__scopeId", "data-v-c4f3162c"]
    ]),
    G8 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: U8
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    D8 = {
        class: "dailySignIn__container"
    },
    L8 = {
        class: "task-banner"
    },
    M8 = {
        class: "banner-title"
    },
    k8 = {
        class: "banner-content"
    },
    T8 = {
        class: "task-panel"
    },
    Q8 = {
        key: 0,
        class: "task-item"
    },
    V8 = {
        class: "task-item-header"
    },
    O8 = {
        class: "hearder-status new"
    },
    F8 = {
        class: "task-item-type"
    },
    N8 = {
        class: "type-title new"
    },
    P8 = {
        class: "type-tip"
    },
    W8 = {
        class: "task-item-description"
    },
    Y8 = {
        class: "task-item-bottom"
    },
    x8 = {
        class: "bottom-title"
    },
    H8 = {
        class: "task-item-header"
    },
    K8 = {
        class: "task-item-type"
    },
    X8 = {
        class: "type-tip"
    },
    J8 = {
        class: "task-item-description"
    },
    z8 = {
        class: "task-item-bottom"
    },
    j8 = {
        class: "bottom-title"
    },
    Z8 = ["onClick"],
    q8 = {
        class: "dialog-window"
    },
    $8 = {
        class: "dialog-wrapper"
    },
    eS = {
        class: "dialog-title"
    },
    tS = {
        class: "dialog-tips"
    },
    sS = {
        class: "dialog-content"
    },
    nS = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = S(!1), A = Ae(), {
                ActiveTaskMap: o,
                ActiveSotre: l,
                getActive: g
            } = Pe();
            g();
            const p = S(""),
                h = S("0"),
                _ = S([]),
                d = S([]),
                C = S([]),
                B = O(() => {
                    let G = [...d.value, ...C.value];
                    if (G.length == 0) return [];
                    const T = ["", 2, 1, 3];
                    G = G.sort((ee, q) => T[ee.status] - T[q.status]);
                    const ie = G.filter(ee => ee.status == 1);
                    ie.sort((ee, q) => E(q.schedule, q.taskTarget) - E(ee.schedule, ee.taskTarget));
                    const ne = G.findIndex(ee => ee.status == 1);
                    return G.splice(ne, ie.length, ...ie), G
                }),
                b = async () => {
                    const G = await V(R5());
                    G && (d.value = G.data.map(T => ({
                        ...T,
                        type: "week"
                    })) || [])
                }, y = async () => {
                    const G = await V(k5());
                    G && (C.value = G.data.map(T => ({
                        ...T,
                        type: "day"
                    })) || [])
                }, w = async () => {
                    b(), y()
                }, v = () => {
                    A.push({
                        name: "activity"
                    })
                };

            function E(G, T) {
                return T == 0 ? 0 : G / T * 100
            }
            const f = async () => {
                _.value.length = 0;
                const G = await V(D5());
                G != null && G.data && _.value.push(G == null ? void 0 : G.data)
            }, L = G => ({
                1: s("goComplete"),
                2: s("receive"),
                3: s("claimed")
            })[G] || "", D = G => ({
                1: s("undone"),
                2: s("complete"),
                3: s("complete")
            })[G] || "", te = G => ({
                0: s("goComplete"),
                1: s("receive"),
                2: s("claimed"),
                3: s("claimed")
            })[G] || "", N = G => ({
                0: s("undone"),
                1: s("actTip2"),
                2: s("claimed"),
                3: s("complete")
            })[G] || "", I = S(null), M = async G => {
                I.value && clearTimeout(I.value), I.value = setTimeout(async () => {
                    if (G.status == 1) return F(G);
                    if (G.status == 3) return;
                    let T;
                    G.type == "week" ? T = await V(S5({
                        weeklyAwardId: G.configId
                    })) : G.type == "day" && (T = await V(T5({
                        dailyAwardId: G.configId
                    }))), T.code === 0 && (n.value = !0, h.value = G.taskAwardAmount, p.value = G.taskTitle, w())
                }, 100)
            }, k = S(null), P = async G => {
                k.value && clearTimeout(k.value), k.value = setTimeout(async () => {
                    if ([2, 3].includes(G.status)) return;
                    if (G.status == 0) return A.push({
                        name: "Recharge"
                    });
                    await V(L5({
                        id: G.id
                    })) && (n.value = !0, h.value = G.totalNumber == 0 ? "0" : (Math.floor(G.amount / G.totalNumber * 100) / 100).toString(), p.value = G.title, f())
                }, 100)
            }, F = async G => {
                o[G.taskId].goPath && (o[G.taskId].homeType && sessionStorage.setItem("clickedGameType", o[G.taskId].homeType), A.push({
                    name: o[G.taskId].goPath
                }))
            }, X = () => {
                A.push({
                    name: "DailyTasks-Record"
                })
            };
            return ve(() => l.value.isOpenActivityAward, G => {
                G && w()
            }, {
                immediate: !0
            }), le(() => {
                f()
            }), (G, T) => {
                var q, ge;
                const ie = Y("NavBar"),
                    ne = Y("van-dialog"),
                    ee = de("lazy");
                return u(), m("div", D8, [U(ie, {
                    title: "",
                    backgroundColor: "#3F3F3F",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: v
                }, {
                    right: z(() => [t("div", {
                        class: "navi-record",
                        onClick: X
                    }, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "awardRecord")]
                    ]), t("span", null, a(G.$t("awardsRecord")), 1)])]),
                    _: 1
                }), t("div", L8, [t("div", null, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/DailyTask", "present")]
                ]), t("p", null, [t("div", M8, a(G.$t("actTip1")), 1), t("div", k8, [t("div", null, a(G.$t("awardsTip1")), 1), t("div", null, a(G.$t("awardsTip3")), 1)])])])]), t("div", T8, [_.value.length > 0 ? (u(), m("div", Q8, [t("div", V8, [t("div", O8, a(G.$t("actTip3")), 1), t("span", {
                    class: se(["headerR new", `status${(q=_.value[0])==null?void 0:q.status}`])
                }, a(N((ge = _.value[0]) == null ? void 0 : ge.status)), 3)]), t("div", F8, [t("div", N8, [t("div", null, a(_.value[0].title), 1)]), t("div", P8, a(_.value[0].receivedNumber + "/" + _.value[0].totalNumber), 1)]), t("div", W8, a(_.value[0].description), 1), t("div", Y8, [t("div", null, a(G.$t("awardsAmount")), 1), t("div", x8, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/DailyTask", "amountIcon")]
                ]), t("span", null, a(i(ae)(_.value[0].amount)), 1)])]), t("div", {
                    class: se(["btn btnNew", `status${_.value[0].status}`]),
                    onClick: T[0] || (T[0] = x => P(_.value[0]))
                }, a(te(_.value[0].status)), 3)])) : H("", !0), (u(!0), m(K, null, $(B.value, (x, Ce) => (u(), m("div", {
                    class: "task-item",
                    key: Ce
                }, [t("div", H8, [t("div", {
                    class: se(["hearder-status", `${x.type}`])
                }, a(x.type == "week" ? G.$t("actTip4") : G.$t("dailyMission")), 3), t("span", {
                    class: se(["headerR other", `status${x.status}`])
                }, a(D(x.status)), 3)]), t("div", K8, [t("div", {
                    class: se(["type-title", [i(o)[x.taskId].icon]])
                }, [t("div", null, a(x.taskTitle), 1)], 2), t("div", X8, a(x.schedule + "/" + x.taskTarget), 1)]), t("div", J8, a(x.taskDescribe), 1), t("div", z8, [t("div", null, a(G.$t("awardsAmount")), 1), t("div", j8, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/DailyTask", "amountIcon")]
                ]), t("span", null, a(i(ae)(x.taskAwardAmount)), 1)])]), t("div", {
                    class: se(["btn btnOther", `status${x.status}`]),
                    onClick: Ee => M(x)
                }, a(L(x.status)), 11, Z8)]))), 128))]), d.value.length === 0 ? (u(), ce(Se, {
                    key: 0
                })) : H("", !0), U(ne, {
                    show: n.value,
                    "onUpdate:show": T[3] || (T[3] = x => n.value = x),
                    "show-confirm-button": !1,
                    className: "noOverHidden"
                }, {
                    default: z(() => [t("div", q8, [t("div", $8, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "confirmationReceived")]
                    ]), t("div", eS, a(G.$t("awardsReceived")), 1), t("div", tS, a(p.value), 1), t("div", sS, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "amountIcon")]
                    ]), t("span", null, a(i(ae)(h.value)), 1)]), t("div", {
                        class: "dialog-btn",
                        onClick: T[1] || (T[1] = x => n.value = !1)
                    }, a(G.$t("confirm")), 1), t("div", {
                        class: "dialog-footer",
                        onClick: T[2] || (T[2] = x => n.value = !1)
                    }, [W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/DailyTask", "close")]
                    ])])])])]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const aS = Z(nS, [
        ["__scopeId", "data-v-bbde2945"]
    ]),
    AS = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: aS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    oS = {
        class: "rule"
    },
    iS = {
        class: "head"
    },
    lS = {
        key: 0
    },
    gS = ["innerHTML"],
    cS = j({
        __name: "Rule",
        props: {
            tiplist: {
                type: Array,
                default: []
            },
            render: {
                type: String,
                default: "text"
            },
            name: {
                type: String,
                default: []
            }
        },
        setup(e) {
            return (s, n) => (u(), m("div", oS, [t("div", iS, a(e.name), 1), (u(!0), m(K, null, $(e.tiplist, (A, o) => (u(), m("div", {
                key: o
            }, [e.render === "text" ? (u(), m("div", lS, a(A), 1)) : (u(), m("div", {
                key: 1,
                innerHTML: A
            }, null, 8, gS))]))), 128)), he(s.$slots, "default", {}, void 0, !0)]))
        }
    });
const wt = Z(cS, [
        ["__scopeId", "data-v-2ed7e395"]
    ]),
    rS = {
        class: "first_list"
    },
    dS = j({
        __name: "index",
        setup(e) {
            const {
                ActiveSotre: s,
                getFirstRechargeList: n
            } = Pe(), {
                t: A
            } = oe(), o = Ae(), l = O(() => {
                var h;
                return (h = s.value.FirstRechargeList) != null && h.length ? s.value.FirstRechargeList.reduce((_, d) => Math.max(_.rewardAmount || _, d.rewardAmount)) : "0"
            }), g = O(() => [A("firstSave1", [ae(l.value)]), A("firstSave2"), A("firstSave3"), A("firstSave4"), A("firstSave5"), A("firstSave6")]), p = () => {
                o.push({
                    name: "Recharge"
                })
            };
            return le(() => {
                n()
            }), (h, _) => {
                const d = Y("NavBar");
                return u(), m(K, null, [U(d, {
                    title: h.$t("firstSaveTitle"),
                    "left-arrow": "",
                    onClickLeft: _[0] || (_[0] = C => i(o).go(-1))
                }, null, 8, ["title"]), t("div", rS, [U(H6, {
                    list: i(s).FirstRechargeList,
                    onGorecharge: p
                }, null, 8, ["list"])]), U(wt, {
                    name: h.$t("firstSaveRule"),
                    tiplist: g.value
                }, null, 8, ["name", "tiplist"])], 64)
            }
        }
    });
const pS = Z(dS, [
        ["__scopeId", "data-v-bb39b164"]
    ]),
    _S = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: pS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    uS = "/assets/png/box-c5e933aa.png",
    We = e => (Be("data-v-318225d9"), e = e(), ye(), e),
    mS = {
        class: "package"
    },
    vS = {
        class: "package-banner"
    },
    hS = We(() => t("img", {
        src: uS,
        alt: ""
    }, null, -1)),
    wS = {
        class: "package-banner-text"
    },
    bS = We(() => t("span", null, "1", -1)),
    CS = We(() => t("span", null, "2", -1)),
    BS = {
        class: "package-time"
    },
    yS = {
        key: 1,
        class: "package-rule"
    },
    ES = {
        class: "package-rule-titlebox"
    },
    fS = {
        class: "package-rule-title"
    },
    RS = {
        class: "package-rule-title"
    },
    SS = {
        class: "package-rule-title"
    },
    IS = {
        class: "rotateNum"
    },
    US = {
        key: 2,
        class: "package-tips"
    },
    GS = We(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none"
    }, [t("path", {
        d: "M18 33C22.1421 33 25.8921 31.3211 28.6066 28.6066C31.3211 25.8921 33 22.1421 33 18C33 13.8579 31.3211 10.1079 28.6066 7.39339C25.8921 4.67893 22.1421 3 18 3C13.8579 3 10.1079 4.67893 7.39339 7.39339C4.67893 10.1079 3 13.8579 3 18C3 22.1421 4.67893 25.8921 7.39339 28.6066C10.1079 31.3211 13.8579 33 18 33Z",
        stroke: "#D9AC4F",
        "stroke-width": "2",
        "stroke-linejoin": "round"
    }), t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M18 27.75C19.0355 27.75 19.875 26.9105 19.875 25.875C19.875 24.8395 19.0355 24 18 24C16.9645 24 16.125 24.8395 16.125 25.875C16.125 26.9105 16.9645 27.75 18 27.75Z",
        fill: "#D9AC4F"
    }), t("path", {
        d: "M18 9V21",
        stroke: "#D9AC4F",
        "stroke-width": "2.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    DS = {
        class: "package-list"
    },
    LS = {
        class: "package-item-head"
    },
    MS = {
        class: "package-item-box"
    },
    kS = {
        class: "package-item-top"
    },
    TS = {
        class: "moeny"
    },
    QS = We(() => t("p", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none"
    }, [t("path", {
        d: "M32.298 18.6091C38.8283 18.6091 44.3643 21.4959 44.5609 25.7142L44.5643 25.9451V33.0765C44.5643 37.4194 38.9472 40.4114 32.2969 40.4114C31.4146 40.4114 30.5506 40.3588 29.714 40.2571V36.7965C30.5255 36.9165 31.3929 36.9828 32.2969 36.9828C37.3037 36.9828 41.1369 34.9416 41.1369 33.0754V31.1142C39.7346 31.9656 37.9769 32.5976 36.0032 32.9554C34.8157 33.1702 33.5689 33.2811 32.2969 33.2811C31.4203 33.2811 30.5552 33.2285 29.714 33.1256V29.6662C30.5437 29.7896 31.4123 29.8525 32.2969 29.8525C33.3655 29.8525 34.4077 29.7611 35.3917 29.5816C38.9186 28.9428 41.1369 27.3199 41.1369 25.9451C41.1369 24.0799 37.3037 22.0376 32.2969 22.0376C31.3929 22.0376 30.5255 22.1051 29.714 22.2251V18.7634C30.5711 18.6599 31.4336 18.6084 32.2969 18.6091H32.298ZM15.6123 6.28564C22.1426 6.28564 27.6786 9.1725 27.8752 13.3896L27.8786 13.6216V35.1074C27.8786 39.4502 22.2615 42.4434 15.6112 42.4434C8.96204 42.4434 3.34375 39.4502 3.34375 35.1074V20.7759V13.6205C3.34375 9.27764 8.96204 6.28564 15.6112 6.28564H15.6123ZM24.4523 33.1462C23.0489 33.9976 21.2912 34.6296 19.3175 34.9874C18.13 35.2022 16.8832 35.3131 15.6112 35.3131C14.3689 35.3151 13.1289 35.2061 11.906 34.9874C9.93232 34.6296 8.17461 33.9976 6.77232 33.1474V35.1074L6.77804 35.2354C6.94718 37.0651 10.7186 39.0148 15.6123 39.0148C20.618 39.0148 24.4512 36.9736 24.4512 35.1074V33.1462H24.4523ZM24.4523 25.9691C23.0489 26.8194 21.2912 27.4525 19.3175 27.8091C18.13 28.0251 16.8832 28.1348 15.6112 28.1348C14.3689 28.1368 13.1289 28.0278 11.906 27.8091C9.93232 27.4525 8.17461 26.8194 6.77232 25.9691V27.9771L6.77918 28.1108C6.91632 29.4559 9.10375 30.9954 12.5163 31.6136C13.5003 31.7919 14.5437 31.8845 15.6112 31.8845C16.6797 31.8845 17.722 31.7931 18.706 31.6136C22.2329 30.9736 24.4512 29.3519 24.4512 27.9771V25.9679L24.4523 25.9691ZM24.4523 18.7908C23.0489 19.6411 21.2912 20.2742 19.3175 20.6308C18.13 20.8479 16.8832 20.9576 15.6112 20.9576C14.3689 20.9597 13.1289 20.8507 11.906 20.6319C9.93232 20.2742 8.17461 19.6422 6.77232 18.7908V20.7999L6.77918 20.9336C6.91632 22.2788 9.10375 23.8171 12.5163 24.4365C13.5003 24.6148 14.5437 24.7062 15.6112 24.7062C16.6797 24.7062 17.722 24.6148 18.706 24.4365C22.2329 23.7965 24.4512 22.1736 24.4512 20.7999V20.7771V18.7908H24.4523ZM15.6112 9.71422C10.6055 9.71422 6.77232 11.7554 6.77232 13.6216C6.77232 14.9965 8.98946 16.6194 12.5175 17.2582C13.5003 17.4365 14.5437 17.5291 15.6112 17.5291C16.6797 17.5291 17.722 17.4365 18.706 17.2582C22.2329 16.6182 24.4512 14.9965 24.4512 13.6216C24.4512 11.7554 20.618 9.71422 15.6112 9.71422Z",
        fill: "#8F5206"
    })])], -1)),
    VS = {
        class: "moeny"
    },
    OS = We(() => t("p", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none"
    }, [t("path", {
        d: "M6.64044 22.4187V24.1173H9.50881C10.5045 24.1173 11.4001 24.2346 12.1857 24.4335C12.6452 24.5496 13.001 24.6756 13.2468 24.7856L19.1232 27.1091H26.3929L26.6202 27.1227C27.1428 27.1845 27.7938 27.3722 28.4707 27.796C28.9744 28.1045 29.4046 28.5193 29.7315 29.0113C30.0584 29.5033 30.2739 30.0606 30.3632 30.6445L37.8504 27.4612C38.053 27.3377 38.3136 27.1981 38.6224 27.061C39.4439 26.6965 40.2988 26.4927 41.1894 26.557C42.4111 26.6447 43.4932 27.2512 44.2258 28.3654C45.4166 30.1776 45.1424 32.0256 44.0244 33.4672C43.6909 33.8983 43.3549 34.2083 43.0807 34.4072C42.9985 34.4675 42.9118 34.5212 42.8212 34.5678L33.2896 39.4534L23.9409 44.2302L23.5456 44.4192C22.2655 44.9889 20.8394 45.1444 19.4666 44.8639C19.2675 44.8265 19.0711 44.7761 18.8786 44.7132L8.11045 41.1457L6.64044 41.1445V43.0505H3V22.4187H6.64044ZM9.50881 28.0022L6.64044 28.001V37.262H8.42298C8.56134 37.262 8.69845 37.2768 8.83434 37.3064L9.03322 37.3608L20.1287 41.0358L20.424 41.0889C20.9527 41.1568 21.5468 41.0877 22.1287 40.7949L40.8448 31.2165C40.8756 31.1844 40.9152 31.1411 40.9559 31.0892C41.1412 30.8496 41.1536 30.7619 40.9806 30.4988L40.9423 30.437C40.9362 30.4296 40.9312 30.4321 40.909 30.4308H40.8225C40.6644 30.4432 40.4396 30.5049 40.1962 30.6124C40.1622 30.6275 40.1284 30.6432 40.0949 30.6594L39.9343 30.7409L39.6848 30.8916L39.5168 30.9731L27.396 36.1267C27.1557 36.2288 26.8973 36.2813 26.6363 36.2812H16.8552V32.3974H26.241L26.5412 32.2689V31.4289C26.5412 31.1967 26.5165 31.1547 26.4053 31.0855C26.3428 31.0481 26.2766 31.0175 26.2076 30.9941H18.7514C18.5068 30.9941 18.2646 30.9472 18.0373 30.8582L11.7707 28.379L11.6286 28.3172L11.447 28.258L11.2321 28.1987C10.6675 28.0621 10.0883 27.9957 9.50758 28.001L9.50881 28.0022ZM23.6283 3C32.3434 3 39.4056 10.0646 39.4056 18.7783C39.4056 20.609 39.0943 22.3669 38.5199 24.0036L33.5762 25.733C35.0046 23.6955 35.7691 21.2667 35.7652 18.7783C35.7652 12.0744 30.3323 6.64163 23.6308 6.64163C16.928 6.64163 11.4952 12.0744 11.4952 18.7783C11.4952 19.7357 11.6064 20.6683 11.8164 21.5627L7.99927 20.9203C7.90296 20.2104 7.85468 19.4948 7.85474 18.7783C7.85351 10.0646 14.917 3 23.6283 3ZM25.7605 9.79409L25.7592 10.9676C26.6444 11.114 27.5065 11.3756 28.3237 11.7458L27.3021 14.3214L26.9229 14.1547C25.9285 13.7371 25.0576 13.5271 24.3127 13.5271C23.8791 13.5271 23.5641 13.6037 23.3664 13.7557C23.2751 13.819 23.2003 13.9036 23.1487 14.0021C23.0971 14.1006 23.0701 14.2102 23.07 14.3214C23.07 14.5635 23.196 14.7797 23.4467 14.9712C23.6975 15.1627 24.3769 15.5122 25.485 16.0187C26.5498 16.4968 27.2885 17.0106 27.7024 17.5604C28.1162 18.1088 28.3237 18.7993 28.3237 19.6332C28.3237 20.399 28.1298 21.0785 27.7407 21.6714C27.3528 22.2668 26.7919 22.7276 26.0606 23.0574C25.962 23.1019 25.8619 23.1431 25.7605 23.1809V24.6176H22.0546L22.0508 23.4786C21.8378 23.4547 21.626 23.4213 21.4159 23.3786C20.814 23.2473 20.23 23.0441 19.6766 22.7733V19.8024L20.0608 19.9889C20.5784 20.2273 21.1108 20.42 21.6605 20.5658C22.2764 20.7386 22.9121 20.8308 23.5517 20.84C24.0483 20.84 24.4103 20.7536 24.6413 20.5831C24.7491 20.5096 24.8372 20.4106 24.8975 20.2949C24.9578 20.1791 24.9887 20.0503 24.9872 19.9198C24.9907 19.7608 24.9421 19.6051 24.8488 19.4763C24.724 19.3223 24.572 19.1925 24.4004 19.0933C24.1953 18.9636 23.6481 18.6981 22.7574 18.2991C21.9545 17.9334 21.3492 17.5776 20.9477 17.2342C20.5625 16.9141 20.2561 16.5096 20.0521 16.0521C19.8582 15.6074 19.7606 15.0811 19.7606 14.4734C19.7606 13.3369 20.1744 12.45 21.0021 11.8138C21.3218 11.5708 21.6756 11.3764 22.0521 11.2369L22.0546 9.79409H25.7605Z",
        fill: "#8F5206"
    })])], -1)),
    FS = {
        class: "package-item-tip"
    },
    NS = {
        class: "package-item-bottom"
    },
    PS = ["onClick"],
    WS = ["onClick"],
    YS = {
        key: 2,
        class: "package-item-btn done"
    },
    xS = {
        key: 3,
        class: "package-item-btn done"
    },
    HS = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), {
                getConfig: A,
                onApply: o,
                onReceive: l,
                store: g,
                time: p,
                bonusLimit: h,
                firstDeposiSendBonust: _,
                rewardRecordList: d
            } = Ns(), C = () => {
                n.go(-1)
            }, B = () => {
                n.push({
                    name: "MemberPackage-Rules"
                })
            }, b = {
                0: s("witeApply"),
                1: s("c2cState0"),
                2: s("rejected"),
                3: s("unaccalimed"),
                4: s("received")
            };
            return le(() => {
                A()
            }), (y, w) => {
                const v = Y("NavBar");
                return u(), m("div", mS, [U(v, {
                    title: y.$t("activityDestitle"),
                    backgroundColor: "linear-gradient(94deg, #8F5206 1.69%, #D9AC4F 95.43%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: C
                }, null, 8, ["title"]), t("div", vS, [hS, t("div", wS, [t("div", null, [t("div", {
                    class: "package-desc",
                    onClick: B
                }, a(y.$t("activityDestitle")), 1)]), t("h3", null, a(y.$t("newMenberPackage")), 1), t("h4", null, a(y.$t("newMenberTip")) + "：", 1), t("p", null, [bS, J(a(y.$t("newMenberRule")), 1)]), t("p", null, [CS, J(a(y.$t("newMenberRule2")), 1)])])]), i(g).firstDepositConfig ? (u(), ce(wt, {
                    key: 0,
                    name: y.$t("activityTime"),
                    tiplist: []
                }, {
                    default: z(() => [t("h2", BS, a(i(p) || y.$t("lotteryActivityUnstarted")), 1)]),
                    _: 1
                }, 8, ["name"])) : H("", !0), i(g).firstDepositConfig ? (u(), m("div", yS, [t("div", ES, [t("div", fS, a(y.$t("conditionsRule")), 1), t("div", RS, a(y.$t("afterDayBonus")), 1), t("div", SS, a(y.$t("bonusLimit")), 1)]), t("ul", null, [t("li", null, [t("div", null, a(y.$t("newMemberDeposit")), 1), t("div", IS, [t("p", null, a(y.$t("todayBonus")), 1), J(), t("p", null, [t("span", null, a(i(_)) + "%", 1)])]), t("div", null, [t("span", null, a(i(ae)(i(h))), 1)])])])])) : H("", !0), i(g).firstDepositConfig ? (u(), m("div", US, [GS, J(" " + a(y.$t("receiveTips")), 1)])) : H("", !0), t("ul", DS, [(u(!0), m(K, null, $(i(d), E => (u(), m("li", {
                    class: "package-item",
                    key: E.id
                }, [t("div", LS, [t("p", null, a(y.$t("registrationFull", [E.registerDays])), 1)]), t("div", MS, [t("div", kS, [t("ul", null, [t("li", TS, [t("h3", null, a(i(ae)(E.actualGrandTotalDeposit)), 1), QS, t("p", null, a(y.$t("grandTotalDeposit")), 1)]), t("li", VS, [t("h3", null, a(i(ae)(E.actualTotalValidBet)), 1), OS, t("p", null, a(y.$t("totalValidBet")), 1)])]), t("div", FS, [t("span", null, a(y.$t("giftBonus")), 1), t("span", null, a(i(ae)(E.giveAwayBonus)), 1)])]), t("div", NS, a(b[E.state]), 1)]), E.state === 3 ? (u(), m("div", {
                    key: 0,
                    class: "package-item-btn",
                    onClick: f => i(l)(E.id)
                }, a(y.$t("receive")), 9, PS)) : H("", !0), E.state === 0 && E.operateState === 2 ? (u(), m("div", {
                    key: 1,
                    class: "package-item-btn apply",
                    onClick: f => i(o)(E.id)
                }, a(y.$t("activityApply")), 9, WS)) : H("", !0), E.state === 0 && [0, 1].includes(E.operateState) ? (u(), m("div", YS, a(b[0]), 1)) : H("", !0), [0, 3].includes(E.state) ? H("", !0) : (u(), m("div", xS, a(b[E.state]), 1))]))), 128))])])
            }
        }
    });
const KS = Z(HS, [
        ["__scopeId", "data-v-318225d9"]
    ]),
    XS = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: KS
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    JS = {
        class: "pointMall__container-treasureActivity"
    },
    zS = {
        class: "treasureActivity-tips"
    },
    jS = {
        class: "treasureActivity-desc"
    },
    ZS = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                n = ct(() => R(() => import("./diamondRed-57e5b880.js"), ["assets/js/diamondRed-57e5b880.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js"]));

            function A() {
                s.push({
                    name: `${String(s.currentRoute.value.name)}-LotteryActivity`
                })
            }
            return (o, l) => (u(), m("div", JS, [t("div", null, [(u(), ce(gt(i(n)))), t("span", null, a(o.$t("pointsTreasure")), 1)]), t("p", zS, a(o.$t("descComponents1")), 1), t("p", jS, a(o.$t("descComponents2")), 1), t("button", {
                onClick: A
            }, a(o.$t("participateLottery")), 1)]))
        }
    });
const qS = Z(ZS, [
        ["__scopeId", "data-v-c6772144"]
    ]),
    $S = {
        class: "infiniteScroll__loading"
    },
    e7 = j({
        __name: "List",
        props: {
            api: {},
            distance: {
                default: 100
            },
            pageQuery: {
                default: {}
            },
            list: {},
            isAutoLoad: {
                type: Boolean,
                default: !0
            },
            filterData: {},
            showNoM: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:list", "update:pageQuery", "update:totalCount", "pageChange"],
        setup(e, {
            expose: s,
            emit: n
        }) {
            const A = e,
                o = O(() => {
                    let y = i(A.list);
                    return A.filterData ? A.filterData(y) : y
                }),
                {
                    isAutoLoad: l
                } = A,
                g = S(!1),
                p = S({
                    pageNo: 1,
                    pageSize: 10
                }),
                h = S(!1),
                _ = async y => {
                    if (!p.value.pageNo || !p.value.pageSize) return;
                    h.value = !0;
                    let w = {
                        ...p.value,
                        ...A.pageQuery,
                        ...y
                    };
                    const v = await V(A.api(w));
                    if (v) {
                        p.value.pageNo = v.data.pageNo, n("pageChange", v.data), (v.data.totalCount === 0 || v.data.totalPage === p.value.pageNo) && (g.value = !0);
                        let E = p.value.pageNo === 1 ? v.data.list : [...A.list.concat(v.data.list)];
                        n("update:list", E), h.value = !1
                    } else h.value = !1;
                    b.value = !1
                }, d = () => {
                    p.value = {
                        pageNo: 1,
                        pageSize: 10
                    }, g.value = !1, n("update:list", []), pt(() => {
                        _()
                    })
                }, {
                    elementRef: C
                } = Ws(d), {
                    bottom: B
                } = ds(C);
            ve(B, (y, w) => {
                const {
                    innerHeight: v
                } = window;
                b.value || y <= v + A.distance && w !== 0 && p.value.pageNo >= 1 && !h.value && !g.value && (b.value = !0, _({
                    pageNo: p.value.pageNo + 1
                }), setTimeout(() => {
                    b.value = !1
                }, 1e3))
            });
            const b = S(!1);
            return le(async () => {
                l && _()
            }), s({
                resetRefresh: d
            }), (y, w) => {
                const v = Y("van-loading");
                return u(), m("div", {
                    class: "infiniteScroll",
                    ref_key: "scrollRef",
                    ref: C
                }, [he(y.$slots, "content", {
                    list: o.value
                }, void 0, !0), he(y.$slots, "loading", {}, () => [t("div", $S, [h.value && !g.value ? (u(), ce(v, {
                    key: 0,
                    class: "z-50"
                })) : H("", !0), o.value.length === 0 && g.value ? (u(), ce(Se, {
                    key: 1,
                    class: "empty"
                })) : g.value && y.showNoM ? (u(), m("div", {
                    key: 2,
                    ref: "pullTextRef"
                }, a(y.$t("noMoreThere")), 513)) : H("", !0)])], !0)], 512)
            }
        }
    });
const Ve = Z(e7, [
        ["__scopeId", "data-v-7189a457"]
    ]),
    t7 = {
        class: "pointMall__container-products__content-item"
    },
    s7 = {
        class: "pointMall__container-products__content-item__header"
    },
    n7 = {
        class: "pointMall__container-products__content-item__header-left"
    },
    a7 = {
        class: "pointMall__container-products__content-item__header-redeemed"
    },
    A7 = {
        class: "pointMall__container-products__content-item__footer"
    },
    o7 = {
        class: "product-title"
    },
    i7 = j({
        __name: "ProductItem",
        props: {
            product: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const s = e,
                n = Ae(),
                A = ut(),
                o = ct(() => R(() => import("./diamondRedSm-87ee2a7b.js"), ["assets/js/diamondRedSm-87ee2a7b.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js"]));

            function l() {
                A.setRedeemItem(s.product), n.push({
                    name: `${String(n.currentRoute.value.name)}-Redeem`
                })
            }
            return (g, p) => {
                const h = de("lazy");
                return u(), m("div", t7, [t("div", s7, [W(t("img", null, null, 512), [
                    [h, e.product.productImg]
                ]), t("div", n7, [J(a(g.$t("productLeft")) + ": ", 1), t("span", null, a(e.product.stock > 9999 ? "9999+" : e.product.stock), 1)]), t("div", a7, [t("span", null, a(e.product.grandTotal > 9999 ? "9999+" : e.product.grandTotal), 1), J(" (" + a(g.$t("pointsExchanged")) + ") ", 1)])]), t("div", A7, [t("span", o7, a(i(Cs)(e.product.productName, 40)), 1), t("div", null, [(u(), ce(gt(i(o)))), t("span", null, a(e.product.integral) + ".00", 1)]), t("button", {
                    onClick: l
                }, a(g.$t("exchange")), 1)])])
            }
        }
    });
const l7 = Z(i7, [
        ["__scopeId", "data-v-e70c16ad"]
    ]),
    g7 = {
        class: "treasure__container__treasure-item"
    },
    c7 = {
        class: "treasure__container__treasure-item__header"
    },
    r7 = {
        class: "treasure__container__treasure-item__footer"
    },
    d7 = {
        class: "treasure__container__treasure-item__footer-title"
    },
    p7 = {
        class: "treasure__container__treasure-item__footer-progressTitle"
    },
    _7 = {
        class: "treasure__container__treasure-item__footer-progressDetails"
    },
    u7 = {
        class: "treasure__container__treasure-item__footer-ending"
    },
    m7 = {
        class: "treasure__container__treasure-item__footer-cost"
    },
    v7 = j({
        __name: "Treasure",
        props: {
            item: {}
        },
        setup(e) {
            const s = e,
                {
                    t: n
                } = oe(),
                A = Ae(),
                o = O(() => [s.item.img_Five, s.item.img_Four, s.item.img_One, s.item.img_Three, s.item.img_Two].filter(Boolean)),
                l = (_, d) => _ == 0 && d == 0 ? 100 : _ / d * 100;

            function g(_, d) {
                if (d === 1) switch (_) {
                    case "2":
                        return "linear-gradient(270deg, #40C693 18.36%, #45BA8D 89.84%, #59E2AE 96.48%, #23976C 100%)";
                    case "1":
                        return "linear-gradient(270deg, #D9AC4F 18.36%, #C4933F 89.84%, #FAE59F 96.48%, #8F5206 100%)";
                    case "0":
                        return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)"
                } else switch (_) {
                    case "1":
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                    case "0":
                        return "linear-gradient(90deg, #BDC9F4 -3.24%, #FFF 4.63%, #C9D5FB 13.43%, #D9E3FF 76.75%)";
                    default:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)"
                }
            }

            function p(_) {
                switch (_) {
                    case "2":
                        return n("about2start");
                    case "1":
                        return n("ongoing");
                    case "0":
                        return n("ended")
                }
            }

            function h() {
                const _ = s.item;
                A.push({
                    name: "PointMall-LotteryDetail",
                    query: {
                        pointsLotteryID: _.pointsLotteryID
                    }
                })
            }
            return (_, d) => {
                const C = Y("van-progress"),
                    B = de("lazy");
                return u(), m("div", g7, [t("div", c7, [t("div", {
                    style: Ge({
                        background: g(_.item.status, 2)
                    }),
                    class: "treasure-state"
                }, [t("span", {
                    style: Ge({
                        background: g(_.item.status, 1)
                    })
                }, a(p(_.item.status)), 5)], 4), W(t("img", null, null, 512), [
                    [B, o.value[0]]
                ])]), t("div", r7, [t("h1", d7, a(_.item.name), 1), t("div", p7, [t("span", null, a(_.$t("progress")), 1), t("span", null, a(_.$t("totalActivity")), 1)]), U(C, {
                    "stroke-width": "8px",
                    color: "#D9AC4F",
                    percentage: l(_.item.redeemedNumber, _.item.totalNumber),
                    "show-pivot": !1
                }, null, 8, ["percentage"]), t("div", _7, [t("span", null, a(l(_.item.redeemedNumber, _.item.totalNumber).toFixed(2)) + "%", 1), t("div", null, [t("span", null, a(_.item.totalNumber), 1), J(a(_.$t("sheets")), 1)])]), t("div", u7, [t("span", null, a(_.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(_.item.totalNumber - _.item.redeemedNumber), 1), J(" " + a(_.$t("sheets")), 1)])]), t("div", m7, [t("span", null, a(_.$t("priceOfUnits")), 1), t("div", null, [W(t("img", null, null, 512), [
                    [B, i(Q)("activity/PointMall", "redDiamondSm")]
                ]), J(" " + a(_.item.unit) + ".00 ", 1)])]), t("div", {
                    class: "treasure__container__treasure-item__footer-button",
                    onClick: h
                }, a(_.$t("viewDetail")), 1)])])
            }
        }
    });
const xs = Z(v7, [
        ["__scopeId", "data-v-f66d0b52"]
    ]),
    h7 = {
        class: "pointMall__container-products"
    },
    w7 = ["onClick"],
    b7 = {
        class: "pointMall__container-products-point"
    },
    C7 = {
        class: "pointMall__container-products__content"
    },
    B7 = {
        key: 0
    },
    y7 = Oe('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-769cfa78><g clip-path="url(#clip0_5920_5716)" data-v-769cfa78><path d="M0.0426667 7.33867C0.0426667 9.96 3.51733 12.3787 9.16 13.6907C14.8 15.0053 21.7493 15.0053 27.3893 13.6907C33.032 12.3813 36.5067 9.96 36.5067 7.33867C36.5067 3.28533 28.344 0 18.2747 0C8.20533 0 0.0426667 3.28533 0.0426667 7.33867ZM24.9867 23.3067C27.6 21.2907 30.44 19.6667 35.408 19.4933C36.2613 18.7813 36.5387 18.072 36.6027 16.968V10.312C36.3493 14.264 28.3013 17.4587 18.3707 17.4587C8.44267 17.4587 0.0453334 14.1707 0.0453333 10.12V16.4453C0.0453333 20.5253 8.21867 23.816 18.2747 23.816C20.9227 23.824 22.7947 23.7333 24.9867 23.3093V23.3067ZM0.0426667 18.976V25.3067C0.0426667 29.3547 8.216 32.6453 18.272 32.6453H19.6027C19.7653 30.4213 20.968 28.0773 22.5227 26.1707C20.9653 26.3387 19.84 26.4427 18.2747 26.4427C8.21333 26.44 0.0426667 23.152 0.0426667 18.976ZM18.2533 35.4667C8.152 35.4667 0 32.3093 0 28.1387V34.456C0 38.5013 8.184 41.784 18.2533 41.784H20.768C19.7227 39.944 19.4053 37.904 19.4053 35.464H18.2533V35.4667ZM44.3147 26.5227C43.147 25.3543 41.7606 24.4275 40.2347 23.7952C38.7087 23.1628 37.0731 22.8374 35.4213 22.8374C33.7696 22.8374 32.134 23.1628 30.608 23.7952C29.082 24.4275 27.6956 25.3543 26.528 26.5227C24.7701 28.2825 23.5731 30.5239 23.0884 32.9637C22.6036 35.4034 22.8528 37.9321 23.8045 40.2304C24.7561 42.5286 26.3675 44.4932 28.4352 45.8761C30.5028 47.259 32.9339 47.9981 35.4213 48C37.9082 47.9968 40.3384 47.257 42.4052 45.8739C44.472 44.4908 46.0828 42.5264 47.0342 40.2287C47.9857 37.931 48.2351 35.403 47.7511 32.9636C47.2671 30.5243 46.0713 28.283 44.3147 26.5227ZM38.2773 38.5653C37.0027 39.8453 35.992 41.176 35.3387 42.368C34.6853 41.176 33.672 39.8427 32.3973 38.5653C31.272 37.4148 29.9933 36.425 28.5973 35.624C29.7893 34.9707 31.1227 33.9573 32.3973 32.6827C33.6747 31.4053 34.6853 30.0747 35.3387 28.88C35.992 30.0747 37.0027 31.408 38.2773 32.6827C39.5573 33.9573 40.888 34.9707 42.08 35.624C40.888 36.2773 39.5547 37.2907 38.2773 38.5653Z" fill="#8F5206" data-v-769cfa78></path></g><defs data-v-769cfa78><clipPath id="clip0_5920_5716" data-v-769cfa78><rect width="48" height="48" fill="#8F5206" data-v-769cfa78></rect></clipPath></defs></svg>', 1),
    E7 = {
        key: 1
    },
    f7 = ["src"],
    R7 = j({
        __name: "index",
        setup(e) {
            const s = S(),
                n = Ae(),
                {
                    listRef: A,
                    list: o
                } = $e(),
                l = S(1),
                {
                    t: g
                } = oe(),
                p = S([]),
                h = S([]),
                _ = S({
                    typeId: l.value,
                    pageNo: 1,
                    pageSize: 10
                }),
                d = S();

            function C() {
                n.push({
                    name: `${String(n.currentRoute.value.name)}-LotteryActivity`
                })
            }

            function B() {
                const w = l.value === "1000" ? "MyLottery" : "MyOrders";
                n.push({
                    name: `${String(n.currentRoute.value.name)}-${w}`
                })
            }

            function b(w) {
                l.value = w, w != 1e3 && (_.value.pageNo = 1, _.value.typeId = parseInt(w), h.value = [], s.value.resetRefresh())
            }
            async function y() {
                var v;
                const w = await V(a5());
                if (w) {
                    const E = (v = w.data) == null ? void 0 : v.productTypeList;
                    p.value = E.map(f => f.typeID == "1000" ? Object.assign(f, {
                        typeName: g("MyTreasure")
                    }) : f), p.value.length > 0 && (l.value = p.value[0].typeID)
                }
            }
            return le(async () => {
                await y()
            }), (w, v) => (u(), m(K, null, [t("div", h7, [t("div", {
                class: "pointMall__container-products__tabs",
                ref_key: "productTabsRef",
                ref: d
            }, [(u(!0), m(K, null, $(p.value, E => (u(), m("div", {
                key: E.typeID,
                class: se({
                    active: l.value === E.typeID
                }),
                onClick: f => b(E.typeID)
            }, a(E.typeName), 11, w7))), 128))], 512), l.value === "1000" ? (u(), ce(Ve, {
                key: 0,
                distance: 300,
                api: i(Qs),
                list: i(o),
                "onUpdate:list": v[0] || (v[0] = E => Re(o) ? o.value = E : null),
                "page-query": {
                    pageNo: 1,
                    status: 1,
                    pageSize: 5
                },
                isAutoLoad: !0,
                showNoM: !1,
                ref_key: "listRef",
                ref: A
            }, {
                content: z(() => [t("div", b7, [(u(!0), m(K, null, $(i(o), E => (u(), ce(xs, {
                    item: E,
                    key: E.pointsLotteryID
                }, null, 8, ["item"]))), 128))]), W(t("div", {
                    class: "pointMall__container-products-all",
                    onClick: C
                }, a(w.$t("allActivity")), 513), [
                    [ps, i(o).length]
                ])]),
                _: 1
            }, 8, ["api", "list"])) : (u(), ce(Ve, {
                key: 1,
                distance: 300,
                api: i(n5),
                list: h.value,
                "onUpdate:list": v[1] || (v[1] = E => h.value = E),
                "page-query": _.value,
                "onUpdate:pageQuery": v[2] || (v[2] = E => _.value = E),
                isAutoLoad: !0,
                ref_key: "productRef",
                ref: s
            }, {
                content: z(() => [t("div", C7, [(u(!0), m(K, null, $(h.value, (E, f) => (u(), ce(l7, {
                    key: f,
                    product: E
                }, null, 8, ["product"]))), 128))])]),
                _: 1
            }, 8, ["api", "list", "page-query"]))]), t("div", {
                class: "pointMall__container-cart",
                onClick: B
            }, [l.value === "1000" ? (u(), m("div", B7, [y7, t("span", null, a(w.$t("MyTreasure")), 1)])) : (u(), m("div", E7, [t("img", {
                src: i(Q)("activity/PointMall", "cart")
            }, null, 8, f7), t("span", null, a(w.$t("myOrder")), 1)]))])], 64))
        }
    });
const S7 = Z(R7, [
        ["__scopeId", "data-v-769cfa78"]
    ]),
    I7 = {
        class: "pointMall__container-info"
    },
    U7 = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                n = ct(() => R(() => import("./rules-f70da089.js"), ["assets/js/rules-f70da089.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js"])),
                A = ct(() => R(() => import("./records-3ccd586a.js"), ["assets/js/records-3ccd586a.js", "assets/js/modules-fbc96342.js", "assets/css/modules-66401e0a.css", "assets/js/native/index-08561a08.js", "assets/js/en-bab51ca4.js", "assets/js/rus-ecb14220.js", "assets/js/vi-82b0febd.js", "assets/js/id-16b6cb52.js", "assets/js/hd-c5b1d7e8.js", "assets/js/tha-330057b2.js", "assets/js/md-e8a5e3b0.js", "assets/js/bra-6692a9a5.js", "assets/js/my-32fb9d60.js", "assets/js/bdt-d8f19d0c.js", "assets/js/zh-7d334abd.js", "assets/js/pak-cdc12211.js", "assets/js/ar-1c9ff85b.js"]));

            function o(l) {
                s.push({
                    name: `${String(s.currentRoute.value.name)}-${l}`
                })
            }
            return (l, g) => (u(), m("div", I7, [t("div", {
                class: "pointMall__container-info__left",
                onClick: g[0] || (g[0] = p => o("Rules"))
            }, [(u(), ce(gt(i(n)))), t("span", null, a(l.$t("pointsRule")), 1)]), t("div", {
                class: "pointMall__container-info__right",
                onClick: g[1] || (g[1] = p => o("Record"))
            }, [(u(), ce(gt(i(A)))), t("span", null, a(l.$t("pointsRecord")), 1)])]))
        }
    });
const G7 = Z(U7, [
        ["__scopeId", "data-v-61c47e7a"]
    ]),
    D7 = {
        class: "pointMall__container"
    },
    L7 = {
        class: "pointMall__container-header"
    },
    M7 = {
        class: "pointMall__container-header__content"
    },
    k7 = j({
        __name: "index",
        setup(e) {
            const s = ue(),
                n = Ae();

            function A() {
                n.go(-1)
            }
            return (o, l) => {
                const g = Y("NavBar"),
                    p = de("lazy");
                return u(), m("div", D7, [U(g, {
                    title: o.$t("pointsMall"),
                    backgroundColor: "#3F3F3F",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: A
                }, null, 8, ["title"]), t("div", L7, [W(t("img", null, null, 512), [
                    [p, i(Q)("activity/PointMall", "headerBg")]
                ]), t("div", M7, [W(t("img", null, null, 512), [
                    [p, i(Q)("activity/PointMall", "diamond")]
                ]), t("span", null, a(o.$t("avaliablePoints")), 1), t("h1", null, a(i(s).getUserInfo.integral), 1)]), U(qS)]), U(G7), U(S7)])
            }
        }
    });
const T7 = Z(k7, [
        ["__scopeId", "data-v-f7c56d10"]
    ]),
    Q7 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: T7
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    V7 = "/assets/png/bg-53b73490.png",
    O7 = "/assets/png/zp-624cd5c8.png",
    F7 = "/assets/png/btn-779fac98.png",
    Hs = e => (Be("data-v-e9fe3549"), e = e(), ye(), e),
    N7 = {
        class: "turntable-page"
    },
    P7 = Hs(() => t("div", {
        class: "turntable-page-header"
    }, [t("img", {
        src: V7,
        alt: ""
    })], -1)),
    W7 = {
        class: "turntable-wrap"
    },
    Y7 = {
        class: "turntable-rule"
    },
    x7 = Oe('<svg width="702" height="59" viewBox="0 0 702 59" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e9fe3549><path d="M44 3.65333V0H658V3.65333C651 3.65333 626.65 3.65333 619 7.76333C610.5 12.33 606 15.5267 595 36.0767C585.492 53.8395 569.5 58.6056 564 58.91H139C122 58.91 109.5 42.47 106.5 36.99C103.5 31.51 100.005 23.2948 89.5 12.7867C79 2.28333 54 3.65333 44 3.65333Z" fill="url(#paint0_linear_8417_735)" data-v-e9fe3549></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16346 0 16V46.58L4 44.9099V17.6534C4 9.92137 10.268 3.65335 18 3.65335H49.1714L51 0H16Z" fill="#D9AC4F" data-v-e9fe3549></path><path fill-rule="evenodd" clip-rule="evenodd" d="M686 0C694.837 0 702 7.16346 702 16V46.58L698 44.9099V17.6534C698 9.92137 691.732 3.65335 684 3.65335H652.829L651 0H686Z" fill="#D9AC4F" data-v-e9fe3549></path><circle cx="22" cy="26.9199" r="5" fill="#D9AC4F" data-v-e9fe3549></circle><circle cx="5" cy="5" r="5" transform="matrix(-1 0 0 1 675 21.9199)" fill="#D9AC4F" data-v-e9fe3549></circle><defs data-v-e9fe3549><linearGradient id="paint0_linear_8417_735" x1="337" y1="59.3667" x2="337" y2="-2.21296e-06" gradientUnits="userSpaceOnUse" data-v-e9fe3549><stop stop-color="#C59440" data-v-e9fe3549></stop><stop offset="1" stop-color="#C59440" data-v-e9fe3549></stop></linearGradient></defs></svg>', 1),
    H7 = {
        class: "turntable-item"
    },
    K7 = {
        class: "label"
    },
    X7 = {
        class: "wallet"
    },
    J7 = Oe('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" data-v-e9fe3549><g clip-path="url(#clip0_8417_601)" data-v-e9fe3549><path d="M24.6778 22.687C22.0234 25.998 18.123 28 13.8922 28C7.2044 28 1.4602 23.0048 0 16.0776L2.779 15.4C3.9466 20.937 8.5428 24.934 13.8922 24.934C17.3726 24.934 20.5716 23.24 22.6982 20.4596L19.6 16.975H28V26.425L24.6778 22.687ZM3.3222 5.313C5.9766 2.002 9.877 0 14.1078 0C20.7956 0 26.5398 4.9952 28 11.9224L25.221 12.6C24.0534 7.063 19.4572 3.066 14.1078 3.066C10.6274 3.066 7.4284 4.76 5.3018 7.5404L8.4 11.025H0V1.575L3.3222 5.313Z" fill="white" data-v-e9fe3549></path></g><defs data-v-e9fe3549><clipPath id="clip0_8417_601" data-v-e9fe3549><rect width="28" height="28" fill="white" data-v-e9fe3549></rect></clipPath></defs></svg>', 1),
    z7 = [J7],
    j7 = {
        class: "turntable-item"
    },
    Z7 = {
        class: "label"
    },
    q7 = {
        class: "count"
    },
    $7 = {
        class: "count-progress"
    },
    eI = {
        class: "turntable-main"
    },
    tI = {
        class: "turntable-entry"
    },
    sI = Oe('<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e9fe3549><path opacity="0.3" d="M77.8132 7.28571L82.0769 11.5714L86.3407 7.28571L82.0769 3L77.8132 7.28571ZM0 42.6429L3.1978 45.8571L6.3956 42.6429L3.1978 39.4286L0 42.6429ZM88.6044 59.7857L91.8022 63L95 59.7857L91.8022 56.5714L88.6044 59.7857Z" fill="#D4AE5D" data-v-e9fe3549></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.5714 5H23V82H83V26.3889L61.5714 5Z" fill="#D4AE5D" data-v-e9fe3549></path><path d="M83 26.5H62L61.5 5L83 26.5Z" fill="#D4AE5D" data-v-e9fe3549></path><path d="M33 22H51V27H33V22Z" fill="white" data-v-e9fe3549></path><path d="M72 35H67V39H72V35Z" fill="white" data-v-e9fe3549></path><path d="M33 35H63V39H33V35Z" fill="white" data-v-e9fe3549></path><path d="M33 45H63V49H33V45Z" fill="white" data-v-e9fe3549></path><path d="M33 55H63V59H33V55Z" fill="white" data-v-e9fe3549></path><path d="M33 64H63V68H33V64Z" fill="white" data-v-e9fe3549></path><path d="M67 45H72V49H67V45Z" fill="white" data-v-e9fe3549></path><path d="M72 55H67V59H72V55Z" fill="white" data-v-e9fe3549></path><path d="M67 64H72V68H67V64Z" fill="white" data-v-e9fe3549></path><path opacity="0.3" d="M14 91V14H22.5714V82.4444H74V91H14Z" fill="#D4AE5D" data-v-e9fe3549></path></svg>', 1),
    nI = Oe('<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e9fe3549><path fill-rule="evenodd" clip-rule="evenodd" d="M8 8H88V88H76.5714L68 73L59.4286 88H36.5714L28 73L19.4286 88H8V8Z" fill="#D4AE5D" data-v-e9fe3549></path><path d="M23 21H29V26H23V21Z" fill="white" data-v-e9fe3549></path><path d="M73 21H35V26H73V21Z" fill="white" data-v-e9fe3549></path><path d="M73 37H35V42H73V37Z" fill="white" data-v-e9fe3549></path><path d="M63 53H35V58H63V53Z" fill="white" data-v-e9fe3549></path><path d="M29 37H23V42H29V37Z" fill="white" data-v-e9fe3549></path><path d="M23 53H29V58H23V53Z" fill="white" data-v-e9fe3549></path></svg>', 1),
    aI = Hs(() => t("svg", {
        width: "96",
        height: "96",
        viewBox: "0 0 96 96",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("circle", {
        cx: "72",
        cy: "75",
        r: "14",
        fill: "white"
    }), t("path", {
        d: "M72 56.2C76.48 56.2 80.64 57.8 83.84 60.36V27.08C83.84 25.48 82.88 22.92 81.6 21.64L67.52 7.24C66.24 5.96 64 5 62.08 5H14.4C10.88 5 8 7.88 8 11.4V81.16C8 84.68 10.88 87.56 14.4 87.56H57.6C54.72 84.36 52.8 79.88 52.8 75.08C52.8 64.84 61.44 56.2 72 56.2ZM60.48 13C60.48 11.08 61.44 10.76 62.72 12.04L77.12 26.44C78.4 27.72 78.08 28.68 76.16 28.68H66.88C63.36 28.68 60.48 25.8 60.48 22.28V13ZM20.16 20.68H48.64C49.92 20.68 50.88 21.64 50.88 22.92C50.88 24.2 49.92 25.16 48.64 25.16H20.16C18.88 25.16 17.92 24.2 17.92 22.92C17.92 21.64 18.88 20.68 20.16 20.68ZM20.16 33.48H72.32C73.6 33.48 74.56 34.44 74.56 35.72C74.56 37 73.6 37.96 72.32 37.96H20.16C18.88 37.96 17.92 37 17.92 35.72C17.92 34.44 18.88 33.48 20.16 33.48ZM17.92 48.52C17.92 47.24 18.88 46.28 20.16 46.28H58.24C59.52 46.28 60.48 47.24 60.48 48.52C60.48 49.8 59.52 50.76 58.24 50.76H20.16C18.88 50.76 17.92 49.8 17.92 48.52ZM72 59.4C63.04 59.4 56 66.44 56 75.4C56 84.36 63.04 91.4 72 91.4C80.96 91.4 88 84.36 88 75.4C88 66.44 80.96 59.4 72 59.4ZM72 87.88C64.96 87.88 59.2 82.12 59.2 75.08C59.2 68.04 64.96 62.28 72 62.28C79.04 62.28 84.8 68.04 84.8 75.08C84.8 82.44 79.04 87.88 72 87.88ZM80.64 71.56L76.16 70.92L73.92 66.76C73.28 65.48 71.36 65.48 70.72 66.76L68.48 70.92L64 71.56C63.36 71.56 62.72 72.2 62.4 72.84C62.08 73.48 62.4 74.12 63.04 74.44L66.56 77.64L65.6 82.44C65.6 83.08 65.92 83.72 66.24 84.04C66.56 84.36 67.52 84.68 68.16 84.36L72.32 82.12L76.48 84.36C76.8 84.68 77.12 84.68 77.12 84.68C77.76 84.68 77.76 84.36 78.08 84.36C78.72 83.72 78.72 83.4 78.72 82.76L78.4 78.28L81.92 75.08C82.24 74.44 82.24 73.48 82.24 72.84C81.6 72.2 81.28 71.88 80.64 71.56Z",
        fill: "#D4AE5D"
    }), t("path", {
        d: "M60.4799 13C60.4799 11.08 61.4399 10.76 62.7199 12.04L77.1199 26.44C78.3999 27.72 78.0799 28.68 76.1599 28.68H66.8799C63.3599 28.68 60.4799 25.8 60.4799 22.28V13ZM20.1599 20.68H48.6399C49.9199 20.68 50.8799 21.64 50.8799 22.92C50.8799 24.2 49.9199 25.16 48.6399 25.16H20.1599C18.8799 25.16 17.9199 24.2 17.9199 22.92C17.9199 21.64 18.8799 20.68 20.1599 20.68ZM20.1599 33.48H72.3199C73.5999 33.48 74.5599 34.44 74.5599 35.72C74.5599 37 73.5999 37.96 72.3199 37.96H20.1599C18.8799 37.96 17.9199 37 17.9199 35.72C17.9199 34.44 18.8799 33.48 20.1599 33.48ZM17.9199 48.52C17.9199 47.24 18.8799 46.28 20.1599 46.28H58.2399C59.5199 46.28 60.4799 47.24 60.4799 48.52C60.4799 49.8 59.5199 50.76 58.2399 50.76H20.1599C18.8799 50.76 17.9199 49.8 17.9199 48.52Z",
        fill: "white"
    })], -1)),
    AI = {
        class: "turntable-title"
    },
    oI = Oe('<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e9fe3549><path d="M41 10H13V44H41V10Z" fill="#D4AE5D" stroke="#D4AE5D" stroke-width="2" stroke-linejoin="round" data-v-e9fe3549></path><path d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13" stroke="#D4AE5D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e9fe3549></path><path d="M21 22H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e9fe3549></path><path d="M21 30H33" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e9fe3549></path></svg>', 1),
    iI = {
        class: "turntable-table"
    },
    lI = {
        class: "turntable-table-titlebox"
    },
    gI = {
        class: "turntable-table-title"
    },
    cI = {
        class: "turntable-table-title"
    },
    rI = {
        class: "turntable-table-title"
    },
    dI = {
        key: 0,
        class: "rotateNum"
    },
    pI = {
        key: 1,
        class: "rotateNum"
    },
    _I = {
        style: {
            "text-align": "center"
        }
    },
    uI = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                {
                    t: n
                } = oe(),
                {
                    getTurntabl: A,
                    store: o,
                    pull: l,
                    prizes: g,
                    recordQuery: p,
                    getTurntablAmount: h,
                    onEnd: _,
                    onStart: d,
                    myLucky: C,
                    onClick: B
                } = Ht(),
                b = [{
                    padding: "0px",
                    imgs: [{
                        src: O7,
                        width: "100%",
                        height: "100%",
                        rotate: !0
                    }]
                }],
                y = [{
                    radius: "30%",
                    pointer: !0,
                    imgs: [{
                        src: F7,
                        top: -(204 / 4),
                        width: 158 / 2,
                        height: 204 / 2
                    }]
                }],
                w = {
                    1: n("amountReward"),
                    2: n("physicalReward")
                },
                v = async E => {
                    s.push({
                        name: E
                    })
                };
            return le(() => {
                A()
            }), (E, f) => {
                const L = Y("NavBar");
                return u(), m("div", N7, [U(L, {
                    title: E.$t("activityTurntable"),
                    backgroundColor: "linear-gradient(94deg, #8F5206 1.69%, #D9AC4F 95.43%)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: i(B)
                }, null, 8, ["title", "onClickLeft"]), P7, t("div", W7, [t("div", Y7, [t("h3", null, a(E.$t("code9101")), 1), x7]), t("div", H7, [t("span", K7, a(E.$t("depositMoney")), 1), t("div", X7, [t("span", null, a(i(ae)(i(o).amount)), 1), t("span", {
                    class: "re",
                    onClick: f[0] || (f[0] = (...D) => i(h) && i(h)(...D))
                }, z7)])]), t("div", j7, [t("span", Z7, a(E.$t("turntableCount")), 1), t("div", q7, [t("span", $7, a(i(o).rotateCount), 1), J("/" + a(i(o).count), 1)])]), t("div", eI, [U(i(rn), {
                    ref_key: "myLucky",
                    ref: C,
                    onStart: i(d),
                    onEnd: i(_),
                    prizes: i(g),
                    width: 350,
                    height: 350,
                    buttons: y,
                    blocks: b,
                    defaultConfig: {
                        offsetDegree: -20,
                        accelerationTime: 1e3
                    },
                    defaultStyle: {
                        lineHeight: 15
                    }
                }, null, 8, ["onStart", "onEnd", "prizes"])]), t("ul", tI, [t("li", {
                    class: "turntable-entry-item",
                    onClick: f[1] || (f[1] = D => v("Turntable-Introduce"))
                }, [sI, t("p", null, a(E.$t("activityIntroduce")), 1)]), t("li", {
                    class: "turntable-entry-item",
                    onClick: f[2] || (f[2] = D => v("Turntable-Detail"))
                }, [nI, t("p", null, a(E.$t("eventDetails")), 1)]), t("li", {
                    class: "turntable-entry-item",
                    onClick: f[3] || (f[3] = D => v("Turntable-Rules"))
                }, [aI, t("p", null, a(E.$t("firstSaveRule")), 1)])]), t("div", AI, [oI, t("span", null, a(E.$t("record")), 1)]), t("div", iI, [t("div", lI, [t("div", gI, a(E.$t("turntableTime")), 1), t("div", cI, a(E.$t("winType")), 1), t("div", rI, a(E.$t("turntableWin")), 1)]), U(Ve, {
                    distance: 300,
                    api: i(H5),
                    list: i(o).turntableRecord,
                    "onUpdate:list": f[4] || (f[4] = D => i(o).turntableRecord = D),
                    "page-query": i(p),
                    "onUpdate:pageQuery": f[5] || (f[5] = D => Re(p) ? p.value = D : null),
                    isAutoLoad: !0,
                    ref_key: "pull",
                    ref: l
                }, {
                    content: z(() => [t("ul", null, [(u(!0), m(K, null, $(i(o).turntableRecord, (D, te) => (u(), m("li", {
                        key: te
                    }, [t("div", null, [t("p", null, a(D.drawTime), 1)]), t("div", null, a(w[D.rewardType]), 1), D.rewardType === 1 ? (u(), m("div", dI, a(i(ae)(D.rewardAmount)), 1)) : (u(), m("div", pI, a(D.rewardSetting), 1))]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])]), U(ze, {
                    show: i(o).dialog,
                    "onUpdate:show": f[6] || (f[6] = D => i(o).dialog = D),
                    "img-url": "successfullyReceived",
                    onConfirm: f[7] || (f[7] = D => i(o).dialog = !1),
                    "show-cancel-btn": !1,
                    confirmText: E.$t("sure"),
                    title: E.$t("succTip1")
                }, {
                    title: z(() => {
                        var D, te, N;
                        return [t("div", _I, a(E.$t("turntableWinTip")) + " " + a(((D = i(o).result) == null ? void 0 : D.rewardType) === 1 ? i(ae)((te = i(o).result) == null ? void 0 : te.rewardSetting) : (N = i(o).result) == null ? void 0 : N.rewardSetting), 1)]
                    }),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const mI = Z(uI, [
        ["__scopeId", "data-v-e9fe3549"]
    ]),
    vI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mI
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    hI = {
        class: "title"
    },
    wI = {
        class: "con"
    },
    bI = ["innerHTML"],
    CI = ["innerHTML"],
    BI = {
        class: "condition"
    },
    yI = {
        key: 0
    },
    EI = {
        key: 1
    },
    fI = {
        key: 2
    },
    RI = {
        class: "ranking"
    },
    SI = {
        class: "top"
    },
    II = j({
        __name: "rule",
        props: {
            data: {}
        },
        setup(e) {
            const {
                t: s
            } = oe(), n = S(["0"]), {
                type: A
            } = et();

            function o(l, g) {
                return l == g ? s("cpsTip20", [l]) : s("cpsTip21", [l, g])
            }
            return (l, g) => {
                const p = Y("van-collapse-item"),
                    h = Y("van-collapse");
                return u(), ce(h, {
                    modelValue: n.value,
                    "onUpdate:modelValue": g[0] || (g[0] = _ => n.value = _),
                    class: "rule"
                }, {
                    default: z(() => [U(p, {
                        name: "1"
                    }, {
                        title: z(() => [t("div", hI, a(l.$t("cpsTip5")), 1)]),
                        default: z(() => [t("div", wI, [t("h1", null, [t("span", null, a(l.$t("cpsTip11")), 1)]), t("div", {
                            innerHTML: l.$t("cpsTip12", [l.data.vendorCode, l.data.startTime, l.data.endTime])
                        }, null, 8, bI), t("h1", null, [t("span", null, a(l.$t("awardAmount")), 1)]), t("div", null, [J(a(l.$t("cpsTip13")), 1), t("span", null, a(i(ae)(l.data.sumBonus || 0)), 1)]), t("h1", null, [t("span", null, a(l.$t("cpsTip14")), 1)]), t("div", null, [t("div", {
                            innerHTML: l.$t("cpsTip15", [l.data.vendorCode])
                        }, null, 8, CI), t("div", BI, [l.data.conditionsBetAmount > 0 ? (u(), m("p", yI, [J(a(l.$t("betAmounts")) + " ", 1), t("span", null, a(i(ae)(l.data.conditionsBetAmount || 0)), 1)])) : H("", !0), l.data.conditionsRechargeAmount > 0 ? (u(), m("p", EI, [J(a(l.$t("rechageAmount")) + " ", 1), t("span", null, a(i(ae)(l.data.conditionsRechargeAmount || 0)), 1)])) : H("", !0), l.data.conditionsBindType ? (u(), m("p", fI, [J(a(l.$t("toBind")) + " ", 1), t("span", null, a(i(A)[l.data.conditionsBindType]), 1)])) : H("", !0), l.data.conditionsBetAmount == 0 && l.data.conditionsRechargeAmount == 0 && !l.data.conditionsBindType ? (u(), m(K, {
                            key: 3
                        }, [J(a(l.$t("cpsTip10")), 1)], 64)) : H("", !0)])]), t("h1", null, [t("span", null, a(l.$t("binguoPaimin")), 1)]), t("div", RI, [t("div", SI, [t("span", null, a(l.$t("binguoPaimin")), 1), t("span", null, a(l.$t("k3WarningTip4")), 1)]), (u(!0), m(K, null, $(l.data.rankingAwardsList, (_, d) => (u(), m("div", {
                            class: "info",
                            key: d
                        }, [t("span", null, a(o(_.startRanking, _.endRanking)), 1), t("span", null, a(i(ae)(_.awardsAmount || 0)), 1)]))), 128)), l.data.rankingAwardsList.length == 0 ? (u(), ce(Se, {
                            key: 0
                        })) : H("", !0)]), t("h1", null, [t("span", null, a(l.$t("cpsTip16")), 1)]), t("div", null, [t("p", null, a(l.$t("cpsTip17")), 1), t("p", null, a(l.$t("cpsTip18")), 1)]), t("h1", null, [t("span", null, a(l.$t("cpsTip19")), 1)]), t("p", null, [t("span", null, a(l.data.vendorCode), 1)])])]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["modelValue"])
            }
        }
    });
const UI = Z(II, [
        ["__scopeId", "data-v-2157bbf7"]
    ]),
    GI = {
        class: "game"
    },
    DI = {
        class: "items"
    },
    LI = ["onClick"],
    MI = j({
        __name: "game",
        props: {
            data: {}
        },
        setup(e) {
            const {
                onItemClick: s
            } = S6();
            return (n, A) => {
                const o = de("lazy");
                return u(), m("div", GI, [t("h1", null, a(n.$t("cpsTip22")), 1), t("div", DI, [(u(!0), m(K, null, $(n.data, l => (u(), m("div", {
                    class: "item",
                    key: l.gameID,
                    onClick: g => i(s)(l)
                }, [W(t("img", null, null, 512), [
                    [o, l.img]
                ])], 8, LI))), 128)), n.data.length == 0 ? (u(), ce(Se, {
                    key: 0
                })) : H("", !0)])])
            }
        }
    });
const kI = Z(MI, [
        ["__scopeId", "data-v-981ca994"]
    ]),
    bt = e => (Be("data-v-c77c28e6"), e = e(), ye(), e),
    TI = {
        class: "ChampionshipDetail"
    },
    QI = {
        class: "ranking"
    },
    VI = {
        class: "title"
    },
    OI = {
        class: "amount"
    },
    FI = bt(() => t("span", null, "--", -1)),
    NI = bt(() => t("span", null, "--", -1)),
    PI = bt(() => t("span", null, "--", -1)),
    WI = {
        class: "rankingList"
    },
    YI = {
        class: "title"
    },
    xI = bt(() => t("span", null, "TOP", -1)),
    HI = {
        key: 0,
        class: "txt"
    },
    KI = {
        class: "refresh"
    },
    XI = j({
        __name: "index",
        setup(e) {
            const {
                tabList: s,
                getChampionTaskDetailV: n,
                championTaskDetailVO: A,
                getTop10UserList: o,
                top10UserListVO: l,
                thirdGameListVO: g
            } = et(), p = Ae(), h = O(() => {
                var y;
                return A.value ? (y = s.find(w => w.key == A.value.state)) == null ? void 0 : y.title : ""
            }), _ = S(), d = S(!1), C = S(null);

            function B() {
                n(_.value)
            }
            ve(d, y => {
                d.value && B()
            });
            const b = () => {
                o(_.value)
            };
            return le(() => {
                _.value = Number(p.currentRoute.value.query.championId) || 0, _.value != 0 && (B(), b(), C.value = setInterval(b, 10 * 60 * 1e3))
            }), Vt(() => {
                clearInterval(C.value)
            }), (y, w) => {
                const v = Y("NavBar");
                return u(), m("div", TI, [U(v, {
                    title: h.value,
                    "left-arrow": "",
                    onClickLeft: w[0] || (w[0] = () => i(p).back())
                }, null, 8, ["title"]), JSON.stringify(i(A)) !== "{}" ? (u(), m(K, {
                    key: 0
                }, [U(Kt, {
                    itemD: i(A),
                    state: i(A).state,
                    isRefresh: d.value,
                    "onUpdate:isRefresh": w[1] || (w[1] = E => d.value = E)
                }, null, 8, ["itemD", "state", "isRefresh"]), t("div", QI, [t("div", VI, [t("span", null, a(y.$t("binguoPaimin")), 1), t("span", null, a(y.$t("betAmounts")), 1), t("span", null, a(y.$t("k3WarningTip4")), 1)]), t("div", OI, [i(A) && i(A).userJoinInfo ? (u(), m(K, {
                    key: 0
                }, [t("span", null, a(i(A).userJoinInfo.ranking), 1), t("span", null, a(i(ae)(i(A).userJoinInfo.sumBetAmount || 0)), 1), t("span", null, a(i(ae)(i(A).userJoinInfo.awardsAmount || 0)), 1)], 64)) : (u(), m(K, {
                    key: 1
                }, [FI, NI, PI], 64))])])], 64)) : H("", !0), t("div", WI, [t("div", YI, [xI, t("span", null, a(y.$t("account")), 1), t("span", null, a(y.$t("betAmounts")), 1), t("span", null, a(y.$t("k3WarningTip4")), 1)]), (u(!0), m(K, null, $(i(l), (E, f) => (u(), m("div", {
                    class: "info",
                    key: f
                }, [
                    [1, 2, 3].includes(E.ranking) ? (u(), m("span", {
                        key: 1,
                        class: se(`top${E.ranking}`)
                    }, null, 2)) : (u(), m("span", HI, a(E.ranking), 1)), t("span", null, a(E.userName), 1), t("span", null, a(i(ae)(E.sumBetAmount || 0)), 1), t("span", null, a(i(ae)(E.awardsAmount || 0)), 1)
                ]))), 128)), t("div", KI, a(y.$t("cpsTip28")), 1), i(l).length == 0 ? (u(), ce(Se, {
                    key: 0
                })) : H("", !0)]), U(UI, {
                    data: i(A)
                }, null, 8, ["data"]), U(kI, {
                    data: i(g)
                }, null, 8, ["data"])])
            }
        }
    });
const JI = Z(XI, [
        ["__scopeId", "data-v-c77c28e6"]
    ]),
    zI = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: JI
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    jI = {
        class: "checkInRecord-container content"
    },
    ZI = {
        class: "dailySignInRecord__container-wrapper"
    },
    qI = {
        class: "dailySignInRecord__container-wrapper__content-left"
    },
    $I = {
        class: "dailySignInRecord__container-wrapper__content-right"
    },
    e9 = {
        alt: ""
    },
    t9 = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                n = S({
                    pageSize: 20
                }),
                A = S({
                    list: [],
                    pageNo: 0,
                    totalPage: 0,
                    totalCount: 0
                });

            function o() {
                s.back()
            }
            return le(async () => {}), (l, g) => {
                const p = Y("NavBar"),
                    h = de("lazy");
                return u(), m("div", jI, [U(p, {
                    title: l.$t("checkInRecord"),
                    "left-arrow": "",
                    onClickLeft: o
                }, null, 8, ["title"]), U(Ve, {
                    distance: 300,
                    api: i(s5),
                    list: A.value.list,
                    "onUpdate:list": g[0] || (g[0] = _ => A.value.list = _),
                    "page-query": n.value,
                    "onUpdate:pageQuery": g[1] || (g[1] = _ => n.value = _),
                    isAutoLoad: !0
                }, {
                    content: z(() => [t("div", ZI, [(u(!0), m(K, null, $(A.value.list, _ => (u(), m("div", {
                        class: "dailySignInRecord__container-wrapper__content",
                        key: _.markDayTime
                    }, [t("div", qI, [t("h1", null, a(l.$t("continuousCheckedIn")) + a(_.continuousDayContinue) + a(l.$t("days")), 1), t("span", null, a(_.markDayTime), 1)]), t("div", $I, [W(t("img", e9, null, 512), [
                        [h, i(Q)("activity/DailySignIn", "coin")]
                    ]), t("span", null, a(_.amount), 1)])]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const s9 = Z(t9, [
        ["__scopeId", "data-v-19466c90"]
    ]),
    n9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: s9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    a9 = {
        class: "dailySignInRules__container"
    },
    A9 = {
        class: "dailySignInRules__container-hero"
    },
    o9 = {
        class: "dailySignInRules__container-hero__wrapper"
    },
    i9 = {
        class: "dailySignInRules__container-hero__wrapper-titlebox"
    },
    l9 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    g9 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    c9 = {
        class: "dailySignInRules__container-hero__wrapper-title"
    },
    r9 = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                A = ue().getUserInfo,
                {
                    t: o
                } = oe(),
                l = S({}),
                g = S([]),
                p = S([o("desc1"), o("desc2"), o("desc3"), o("desc4"), o("desc5"), o("desc6")]);

            function h() {
                s.go(-1)
            }
            return le(async () => {
                const _ = await V(ks({
                    uid: A.userId,
                    sign: A.sign
                }));
                g.value = _.data.signInRechargesList, l.value = _.data.signIn
            }), (_, d) => {
                const C = Y("NavBar");
                return u(), m("div", a9, [U(C, {
                    title: _.$t("playRules"),
                    "left-arrow": "",
                    onClickLeft: h
                }, null, 8, ["title"]), t("div", A9, [t("div", o9, [t("div", i9, [t("div", l9, a(_.$t("ruleSignIn")), 1), t("div", g9, a(_.$t("ruleAcount")), 1), t("div", c9, a(_.$t("ruleBonus")), 1)]), t("ul", null, [(u(!0), m(K, null, $(g.value, (B, b) => (u(), m("li", {
                    key: b
                }, [t("div", null, a(B.day), 1), t("div", null, a(i(ae)(B.amount)), 1), t("div", null, a(i(ae)(B.bouns)), 1)]))), 128))])])]), U(wt, {
                    name: _.$t("rule"),
                    tiplist: p.value
                }, null, 8, ["name", "tiplist"])])
            }
        }
    });
const d9 = Z(r9, [
        ["__scopeId", "data-v-7565a95f"]
    ]),
    p9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: d9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _9 = {
        class: "task-record-container"
    },
    u9 = {
        class: "head"
    },
    m9 = {
        class: "record-panel van-clearfix"
    },
    v9 = {
        class: "markRed"
    },
    h9 = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), A = S([]), o = S(!1), l = S(!1), g = S(1), p = S(!1), h = S(1), _ = O(() => p.value ? "" : s("noMoreThere")), d = async () => {
                let b;
                h.value == 1 ? b = await V(I5({
                    pageNo: g.value,
                    pageSize: 20
                })) : b = await V(Q5({
                    pageNo: g.value,
                    pageSize: 20
                })), b ? (b.data.totalCount == 0 && (p.value = !0), b.data.totalPage <= g.value ? l.value = !0 : l.value = !1, b.data.list && (A.value.push(...b.data.list), A.value.sort((y, w) => w.createDate - y.createDate)), g.value++) : l.value = !0, o.value = !1
            }, C = () => {
                n.push({
                    name: "DailyTasks"
                })
            };

            function B(b) {
                h.value = b, g.value = 1, A.value.length = 0, d()
            }
            return (b, y) => {
                const w = Y("NavBar"),
                    v = Y("van-sticky"),
                    E = Y("van-list"),
                    f = de("lazy");
                return u(), m("div", _9, [U(w, {
                    title: b.$t("titlePickUpRecord"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: C
                }, null, 8, ["title"]), U(v, {
                    "offset-top": 49
                }, {
                    default: z(() => [t("div", u9, [t("button", {
                        class: se({
                            active: h.value == 1
                        }),
                        onClick: y[0] || (y[0] = L => B(1))
                    }, a(b.$t("actTip7")), 3), t("button", {
                        class: se({
                            active: h.value == 2
                        }),
                        onClick: y[1] || (y[1] = L => B(2))
                    }, a(b.$t("actTip8")), 3)])]),
                    _: 1
                }), U(E, {
                    loading: o.value,
                    "onUpdate:loading": y[2] || (y[2] = L => o.value = L),
                    finished: l.value,
                    "finished-text": _.value,
                    onLoad: d
                }, {
                    default: z(() => [t("div", m9, [(u(!0), m(K, null, $(A.value, L => (u(), m("div", {
                        class: "record-panel-item",
                        key: L.status
                    }, [t("h1", null, a(h.value == 1 ? b.$t("actTip5") : b.$t("actTip6")), 1), t("h2", null, [t("span", null, a(L.taskTitle), 1), t("span", v9, a(L.taskTarget + "/" + L.taskTarget), 1)]), t("div", null, [t("span", null, a(L.createDate), 1), t("h3", null, [W(t("img", null, null, 512), [
                        [f, i(Q)("activity/DailyTask", "recordIcon")]
                    ]), t("span", null, a(i(ae)(L.awardAmount)), 1)])])]))), 128))])]),
                    _: 1
                }, 8, ["loading", "finished", "finished-text"]), p.value ? (u(), ce(Se, {
                    key: 0
                })) : H("", !0)])
            }
        }
    });
const w9 = Z(h9, [
        ["__scopeId", "data-v-4c24f097"]
    ]),
    b9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: w9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    C9 = {
        class: "table-head"
    },
    B9 = {
        class: "table-container"
    },
    y9 = {
        class: "table-title"
    },
    E9 = {
        class: "table-content"
    },
    f9 = {
        key: 0,
        rowspan: "0"
    },
    R9 = {
        key: 0,
        class: "first-list-item space"
    },
    S9 = {
        class: "head"
    },
    I9 = {
        class: "title"
    },
    U9 = ["innerHTML"],
    G9 = j({
        __name: "RulesTable",
        props: {
            giftPackConfigList: {
                type: Array,
                default: []
            }
        },
        setup(e) {
            const s = n => n.length ? n[0] : {};
            return (n, A) => (u(!0), m(K, null, $(e.giftPackConfigList, (o, l) => (u(), m("div", {
                key: l
            }, [t("div", C9, a(n.$t("registrationFullTip", [o.registerDays])), 1), t("table", B9, [t("thead", y9, [t("th", null, a(n.$t("activeObject")), 1), t("th", null, a(n.$t("totalValidBets")), 1), t("th", null, a(n.$t("giftBonus")), 1)]), t("tbody", null, [(u(!0), m(K, null, $(o.configAwardList, (g, p) => (u(), m("tr", E9, [l >= p && p === 0 ? (u(), m("td", f9, a(n.$t("registrationDepositTip", [o.registerDays, o.grandTotalDeposit])), 1)) : H("", !0), t("td", null, a(i(ae)(g.totalValidBet)) + "+", 1), t("td", null, a(i(ae)(g.giveAwayBonus)), 1)]))), 256))])]), o.configAwardList.length ? (u(), m("div", R9, [t("div", S9, [t("div", I9, a(n.$t("forexample")) + ":", 1)]), t("div", {
                class: "description",
                innerHTML: n.$t("registrationExample", [o.registerDays, o.grandTotalDeposit, s(o.configAwardList).totalValidBet, s(o.configAwardList).giveAwayBonus])
            }, null, 8, U9)])) : H("", !0)]))), 128))
        }
    });
const D9 = Z(G9, [
        ["__scopeId", "data-v-4c952586"]
    ]),
    L9 = e => (Be("data-v-a70c6696"), e = e(), ye(), e),
    M9 = {
        class: "member-package-rule"
    },
    k9 = {
        key: 0,
        class: "first-list-item"
    },
    T9 = {
        class: "head"
    },
    Q9 = {
        class: "title"
    },
    V9 = {
        class: "description"
    },
    O9 = L9(() => t("span", {
        class: "number"
    }, "24", -1)),
    F9 = ["innerHTML"],
    N9 = {
        class: "number"
    },
    P9 = {
        class: "member-package-rule-bonus"
    },
    W9 = {
        class: "member-package-rule-bonus-title"
    },
    Y9 = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), {
                getConfig: A,
                store: o,
                time: l,
                bonusLimit: g,
                firstDeposiSendBonust: p,
                giftPackConfigList: h
            } = Ns();
            return le(() => {
                A()
            }), (_, d) => {
                const C = Y("NavBar");
                return u(), m(K, null, [U(C, {
                    title: i(s)("eventDetails"),
                    "left-arrow": "",
                    onClickLeft: d[0] || (d[0] = B => i(n).go(-1))
                }, null, 8, ["title"]), t("div", M9, [i(o).firstDepositConfig ? (u(), m("div", k9, [t("div", T9, [t("div", Q9, a(i(s)("newMenberRule")), 1)]), t("div", V9, [J(a(i(s)("activityTime")), 1), t("span", null, a(i(l)), 1), J("，" + a(i(s)("newMemberDeposit")), 1), O9, J(a(i(s)("newMemberDepositTime")) + " ", 1), t("span", {
                    innerHTML: i(s)("platformBonus", [i(p)])
                }, null, 8, F9), J("，" + a(i(s)("bonusLimit")), 1), t("span", N9, a(i(ae)(i(g))), 1), J("，" + a(i(s)("receiveTips")) + "。 ", 1)])])) : H("", !0), t("div", P9, [t("div", W9, a(i(s)("newMemberPlayGame")), 1), t("div", null, [U(D9, {
                    giftPackConfigList: i(h)
                }, null, 8, ["giftPackConfigList"])])])])], 64)
            }
        }
    });
const x9 = Z(Y9, [
        ["__scopeId", "data-v-a70c6696"]
    ]),
    H9 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: x9
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    K9 = {
        class: "addAddress__container"
    },
    X9 = {
        class: "addAddress__container-warning"
    },
    J9 = {
        class: "addAddress__container-forum"
    },
    z9 = {
        class: "addAddress__container-forum__item"
    },
    j9 = {
        class: "input_model"
    },
    Z9 = {
        key: 0,
        class: "dropCon"
    },
    q9 = ["onUpdate:modelValue", "placeholder", "maxlength"],
    $9 = ["onUpdate:modelValue", "placeholder", "maxlength"],
    eU = ["placeholder"],
    tU = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), A = Ne();
            let o = _e({
                userName: "",
                phoneNumber: "",
                area: "66",
                address: ""
            });
            le(() => {
                Object.keys(A.query).length !== 0 && (A.query.type && A.query.type === "edit" && (o.userName = n.currentRoute.value.query.name, o.phoneNumber = n.currentRoute.value.query.phone, o.address = n.currentRoute.value.query.address, o.area = n.currentRoute.value.query.area), o.phoneNumber = o.phoneNumber.replace(o.area, ""))
            });
            const l = O(() => o.userName && o.phoneNumber && o.address),
                g = [{
                    title: s("recipientName"),
                    icon: "lotteryReceiver",
                    value: "userName",
                    placeholder: s("plEnterrecipientName"),
                    maxlength: 20
                }, {
                    title: s("contactInfo"),
                    icon: "lotteryContact",
                    value: "phoneNumber",
                    placeholder: s("plEntercontactInfo"),
                    maxlength: 11
                }, {
                    title: s("shippingAddr"),
                    icon: "lotteryCity",
                    value: "address",
                    placeholder: s("plEnterCity"),
                    maxlength: 150
                }];

            function p() {
                n.back()
            }
            async function h() {
                if (!l.value) return;
                const _ = A.query.form,
                    d = A.query.type,
                    C = A.query.addressId,
                    B = {
                        phone: o.phoneNumber,
                        address: o.address,
                        name: o.userName,
                        area: o.area
                    };
                if (_ === "lotteryPoint" && d === "edit") {
                    B.userAddressId = parseInt(C, 10), await V(m5(B)) && (we(s("savedSuccessfully")), n.back());
                    return
                } else if (_ === "lotteryPoint" && d === "add") {
                    await V(v5(B)) && (we(s("savedSuccessfully")), n.back());
                    return
                }
                let b = {
                    ...o,
                    area: o.area
                };
                await V(c5(b)) && (we(s("savedSuccessfully")), n.back())
            }
            return (_, d) => {
                const C = Y("NavBar"),
                    B = Y("van-icon"),
                    b = de("only-num");
                return u(), m("div", K9, [U(C, {
                    title: i(s)("addAddr"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: p
                }, null, 8, ["title"]), t("div", X9, [t("h1", null, [U(B, {
                    name: "warning"
                }), J(" " + a(i(s)("kindTips")), 1)]), t("p", null, a(i(s)("descActivity3")), 1)]), t("div", J9, [(u(), m(K, null, $(g, (y, w) => t("div", z9, [t("h1", null, [U(B, {
                    name: w < 2 ? i(Q)("activity/PointMall", y.icon) : "location"
                }, null, 8, ["name"]), J(" " + a(y.title), 1)]), t("div", j9, [w === 1 ? (u(), m("div", Z9, [U(Ps, {
                    typeValue: i(o).area,
                    "onUpdate:typeValue": d[0] || (d[0] = v => i(o).area = v),
                    onChangeT: d[1] || (d[1] = v => i(o).area = v)
                }, null, 8, ["typeValue"])])) : H("", !0), w === 0 ? W((u(), m("input", {
                    key: 1,
                    type: "text",
                    "onUpdate:modelValue": v => i(o)[y.value] = v,
                    placeholder: y.placeholder,
                    maxlength: y.maxlength
                }, null, 8, q9)), [
                    [Fe, i(o)[y.value]]
                ]) : H("", !0), w === 1 ? W((u(), m("input", {
                    key: 2,
                    type: "text",
                    "onUpdate:modelValue": v => i(o)[y.value] = v,
                    placeholder: y.placeholder,
                    maxlength: y.maxlength
                }, null, 8, $9)), [
                    [b],
                    [Fe, i(o)[y.value]]
                ]) : H("", !0)]), w === 2 ? W((u(), m("textarea", {
                    key: 0,
                    "onUpdate:modelValue": d[2] || (d[2] = v => i(o).address = v),
                    placeholder: i(s)("phEnterDetailedAddr"),
                    maxlength: "150"
                }, null, 8, eU)), [
                    [Fe, i(o).address]
                ]) : H("", !0)])), 64))]), t("div", {
                    class: se(["addAddress__container-saveBtn", {
                        disabled: !l.value
                    }]),
                    onClick: h
                }, a(i(s)("save")), 3)])
            }
        }
    });
const sU = Z(tU, [
        ["__scopeId", "data-v-5b99033c"]
    ]),
    nU = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: sU
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    aU = {
        class: "lotteryActivity__container"
    },
    AU = {
        class: "lotteryActivity__container-list"
    },
    oU = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), {
                listRef: A,
                list: o,
                pointTabs: l,
                pointTabActive: g,
                pointQuery: p,
                pointRest: h
            } = $e();
            ve(g, () => {
                h(), A.value.resetRefresh()
            });

            function _() {
                n.back()
            }
            return (d, C) => {
                const B = Y("NavBar"),
                    b = Y("van-tab"),
                    y = Y("van-tabs");
                return u(), m("div", aU, [U(B, {
                    title: i(s)("sweepstakes"),
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: _
                }, null, 8, ["title"]), U(y, {
                    active: i(g),
                    "onUpdate:active": C[0] || (C[0] = w => Re(g) ? g.value = w : null),
                    background: "#3F3F3F",
                    color: "#A6A9AE",
                    "line-width": "0",
                    "line-height": "0",
                    "title-active-color": "#D9AC4F",
                    "title-inactive-color": "#fff"
                }, {
                    default: z(() => [(u(!0), m(K, null, $(i(l), w => (u(), ce(b, {
                        name: w.value,
                        title: w.label
                    }, null, 8, ["name", "title"]))), 256))]),
                    _: 1
                }, 8, ["active"]), U(Ve, {
                    distance: 300,
                    api: i(Qs),
                    list: i(o),
                    "onUpdate:list": C[1] || (C[1] = w => Re(o) ? o.value = w : null),
                    "page-query": i(p),
                    "onUpdate:pageQuery": C[2] || (C[2] = w => Re(p) ? p.value = w : null),
                    isAutoLoad: !0,
                    ref_key: "listRef",
                    ref: A
                }, {
                    content: z(() => [t("div", AU, [(u(!0), m(K, null, $(i(o), w => (u(), ce(xs, {
                        item: w,
                        key: w.pointsLotteryID
                    }, null, 8, ["item"]))), 128))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const iU = Z(oU, [
        ["__scopeId", "data-v-fdbd8659"]
    ]),
    lU = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: iU
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ye = e => (Be("data-v-dcab328a"), e = e(), ye(), e),
    gU = {
        class: "lotteryDetail__container"
    },
    cU = {
        key: 0,
        class: "lotteryDetail__container-item"
    },
    rU = {
        class: "lotteryDetail__container-item__hero"
    },
    dU = {
        class: "lotteryDetail__container-item__hero-img"
    },
    pU = Ye(() => t("div", null, null, -1)),
    _U = {
        class: "lotteryDetail__container-item__hero-title"
    },
    uU = {
        class: "lotteryDetail__container-item__hero-detail"
    },
    mU = Ye(() => t("div", null, null, -1)),
    vU = {
        class: "text-spacing"
    },
    hU = Ye(() => t("div", null, null, -1)),
    wU = {
        class: "lotteryDetail__container-item__hero-progress"
    },
    bU = {
        key: 0,
        class: "lotteryDetail__container-item__hero-footer"
    },
    CU = {
        class: "lotteryDetail__container-item__hero-footer__ending"
    },
    BU = {
        class: "lotteryDetail__container-item__hero-footer__cost"
    },
    yU = {
        key: 1,
        class: "lotteryDetail__container-item__hero-footer"
    },
    EU = {
        class: "lotteryDetail__container-item__hero-footer__ending"
    },
    fU = {
        class: "lotteryDetail__container-item__hero-footer__cost"
    },
    RU = {
        class: "lotteryDetail__container-item__luckyNumber"
    },
    SU = {
        class: "lotteryDetail__container-item__luckyNumber-number"
    },
    IU = {
        key: 0
    },
    UU = {
        key: 1
    },
    GU = {
        class: "lotteryDetail__container-item__luckyNumber-text"
    },
    DU = {
        key: 0
    },
    LU = {
        key: 1
    },
    MU = {
        class: "lotteryDetail__container-item__footer"
    },
    kU = {
        class: "lotteryDetail__container-item__footer-tabBar"
    },
    TU = {
        class: "lotteryDetail__container-item__footer-participants"
    },
    QU = {
        class: "lotteryDetail__container-item__footer-participants__item-header"
    },
    VU = {
        class: "lotteryDetail__container-item__footer-participants__item-tickets"
    },
    OU = {
        key: 0,
        class: "lotteryDetail__container-item__footer-participants__item-tickets__viewAll"
    },
    FU = ["onClick"],
    NU = Ye(() => t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        fill: "none"
    }, [t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M25.7416 11.694C26.4622 10.8819 25.8857 9.59961 24.8 9.59961L15.8872 9.59961L6.8 9.59961C5.72151 9.59961 5.15333 10.8777 5.87586 11.6783L14.4434 21.1724C15.2295 21.9855 16.5448 21.9855 17.331 21.1724L25.7416 11.694Z",
        fill: "#D9AC4F"
    })], -1)),
    PU = ["innerHTML"],
    WU = {
        key: 0
    },
    YU = {
        key: 1
    },
    xU = {
        class: "lotteryDetail__container-item__actionSheet"
    },
    HU = Ye(() => t("svg", {
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM15.0027 10.9995C14.2722 10.9995 13.5998 11.3978 13.2488 12.0383L8.68993 20.357C8.27753 21.1095 8.39114 22.0413 8.97227 22.6726L22.5283 37.4007C23.3206 38.2615 24.6792 38.2615 25.4714 37.4007L39.0275 22.6726C39.6086 22.0413 39.7222 21.1095 39.3098 20.357L34.751 12.0383C34.3999 11.3978 33.7276 10.9995 32.9971 10.9995H15.0027Z",
        fill: "#D9AC4F"
    })], -1)),
    KU = ["onClick"],
    XU = {
        key: 1,
        class: "lotteryDetail__container-item__actionSheetCloseBtn"
    },
    JU = Ye(() => t("svg", {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [t("path", {
        d: "M30 57C44.9117 57 57 44.9117 57 30C57 15.0883 44.9117 3 30 3C15.0883 3 3 15.0883 3 30C3 44.9117 15.0883 57 30 57Z",
        stroke: "#A6A9AE",
        "stroke-width": "4",
        "stroke-linejoin": "round"
    }), t("path", {
        d: "M43 17L17 43",
        stroke: "#A6A9AE",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), t("path", {
        d: "M17 17L43 43",
        stroke: "#A6A9AE",
        "stroke-width": "4",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    zU = [JU],
    jU = {
        class: "van-dialog__content-title"
    },
    ZU = {
        class: "van-dialog__content-subTitle"
    },
    qU = {
        class: "van-dialog__content-tips"
    },
    $U = {
        class: "van-dialog__content-ticketsList"
    },
    eG = ["src"],
    tG = ["src"],
    sG = j({
        __name: "index",
        setup(e) {
            const s = Ae();
            Ne();
            const n = ue();
            ut();
            const {
                getPointLotteryInfo: A,
                onJoin: o,
                winPeople: l,
                list: g,
                loading: p,
                ticketCount: h,
                resultTicket: _,
                pointInfo: d
            } = $e(), C = (I, M) => I == 0 && M == 0 ? 100 : I / M * 100, B = O(() => {
                var I, M, k, P, F;
                return [(I = d.value) == null ? void 0 : I.img_Five, (M = d.value) == null ? void 0 : M.img_Four, (k = d.value) == null ? void 0 : k.img_One, (P = d.value) == null ? void 0 : P.img_Three, (F = d.value) == null ? void 0 : F.img_Two].filter(Boolean)
            }), b = S(0), y = S(!1), w = S(0), v = S(!0), E = [{
                amount: 1,
                price: 10
            }, {
                amount: 3,
                price: 30
            }, {
                amount: 5,
                price: 50
            }, {
                amount: 10,
                price: 100
            }, {
                amount: 20,
                price: 200
            }, {
                amount: 30,
                price: 300
            }, {
                amount: 50,
                price: 500
            }, {
                amount: 100,
                price: 1e3
            }];

            function f() {
                s.push({
                    name: "PointMall-MyLottery"
                })
            }

            function L(I) {
                g.value.length && (g.value[0].users[I].showAll = !g.value[0].users[I].showAll)
            }

            function D(I, M = !1) {
                M ? te() : (y.value = I, I || (w.value = 0))
            }

            function te() {
                v.value = !0
            }
            const N = async () => {
                v.value = !1, y.value = !1, await A()
            };
            return ve(_, I => {
                I.length && (v.value = !0)
            }), le(async () => {
                await A()
            }), (I, M) => {
                var q, ge;
                const k = Y("NavBar"),
                    P = Y("van-progress"),
                    F = Y("van-tab"),
                    X = Y("van-tabs"),
                    G = Y("van-button"),
                    T = Y("van-action-sheet"),
                    ie = Y("van-icon"),
                    ne = Y("van-dialog"),
                    ee = de("lazy");
                return u(), m("div", gU, [U(k, {
                    title: I.$t("drawActivity"),
                    "left-arrow": "",
                    onClickLeft: M[0] || (M[0] = x => i(s).go(-1))
                }, null, 8, ["title"]), i(d) ? (u(), m("div", cU, [t("div", rU, [t("div", dU, [U(i(pn), {
                    autoplay: 3e3,
                    "indicator-color": "white"
                }, {
                    default: z(() => [(u(!0), m(K, null, $(B.value, x => (u(), ce(i(dn), null, {
                        default: z(() => [W(t("img", null, null, 512), [
                            [ee, x]
                        ])]),
                        _: 2
                    }, 1024))), 256))]),
                    _: 1
                }), pU]), t("div", _U, a((q = i(d)) == null ? void 0 : q.name), 1), t("div", uU, [t("div", null, [t("span", null, a(I.$t("startTime")), 1), mU, t("span", null, a((ge = i(d)) == null ? void 0 : ge.startTime), 1)]), t("div", null, [t("span", vU, a(I.$t("betIssue")), 1), hU, t("span", null, a(i(d).issueNumber), 1)])]), t("div", wU, [t("div", null, [t("span", null, a(I.$t("progress")), 1), t("span", null, a(I.$t("totalActivity")), 1)]), U(P, {
                    "stroke-width": "8px",
                    color: "#D9AC4F",
                    percentage: C(i(d).redeemedNumber || 0, i(d).totalNumber),
                    "show-pivot": !1
                }, null, 8, ["percentage"]), t("div", null, [t("span", null, a(C(i(d).redeemedNumber || 0, i(d).totalNumber).toFixed(2)) + "%", 1), t("h1", null, a(i(d).totalNumber) + a(I.$t("sheets")), 1)])]), i(d).winningNumber ? (u(), m("div", bU, [t("div", CU, [t("span", null, a(I.$t("lotteryActivityEndTime")), 1), t("div", null, a(i(d).endTime), 1)]), t("div", BU, [t("span", null, a(I.$t("lotteryWinPeople")), 1), t("div", null, a(i($t)(i(l).userName)), 1)])])) : (u(), m("div", yU, [t("div", EU, [t("span", null, a(I.$t("requiredBeforeEnd")), 1), t("div", null, [t("span", null, a(i(d).totalNumber - i(d).redeemedNumber), 1), J(" " + a(I.$t("sheets")), 1)])]), t("div", fU, [t("span", null, a(I.$t("perRaffleTicket")), 1), t("div", null, [W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/PointMall", "redDiamondSm")]
                ]), t("h5", null, a(i(d).unit) + ".00", 1)])])]))]), t("div", RU, [t("h1", null, a(I.$t("prizenumber")), 1), t("div", null, [t("div", SU, [i(d).winningNumber ? (u(), m("span", IU, a(i(d).winningNumber), 1)) : (u(), m("span", UU, "**********"))]), t("div", GU, [i(d).winningNumber ? (u(), m("span", DU, a(I.$t("prizenumber")), 1)) : (u(), m("span", LU, a(I.$t("waitingforlottery")), 1))]), W(t("img", null, null, 512), [
                    [ee, i(Q)("activity/PointMall", "luckyNumber")]
                ])])]), t("div", MU, [t("div", kU, [t("h1", {
                    class: se({
                        fontWeight600: b.value === 0
                    }),
                    onClick: M[1] || (M[1] = x => b.value = 0)
                }, a(I.$t("participant")), 3), t("h1", {
                    class: se({
                        fontWeight600: b.value === 1
                    }),
                    onClick: M[2] || (M[2] = x => b.value = 1)
                }, a(I.$t("PrizeDetails")), 3)]), U(X, {
                    active: b.value,
                    "onUpdate:active": M[3] || (M[3] = x => b.value = x),
                    type: "card",
                    background: "transparent",
                    "title-active-color": "#fff",
                    "title-inactive-color": "#333",
                    animated: ""
                }, {
                    default: z(() => [U(F, {
                        title: I.$t("popularProduct"),
                        ref: "targetContainer"
                    }, {
                        default: z(() => [t("div", TU, [(u(!0), m(K, null, $(i(d).users, (x, Ce) => (u(), m("div", {
                            class: "lotteryDetail__container-item__footer-participants__item",
                            key: Ce
                        }, [t("div", QU, [t("span", {
                            class: se({
                                me: x.isWin
                            })
                        }, a(i($t)(x.userName)), 3), t("span", null, a(x.addTime), 1)]), t("div", VU, [(u(!0), m(K, null, $(x.showAll ? x.tickets : x.tickets.slice(0, 5), Ee => (u(), m("div", {
                            key: Ee
                        }, [W(t("img", null, null, 512), [
                            [ee, i(Q)("activity/PointMall", "ticket")]
                        ]), t("span", null, a(Ee), 1)]))), 128)), !x.showAll && x.tickets.length > 6 ? (u(), m("div", OU, [t("div", {
                            onClick: Ee => L(Ce)
                        }, [J(a(I.$t("viewAll")) + " ", 1), NU], 8, FU)])) : H("", !0)])]))), 128))])]),
                        _: 1
                    }, 8, ["title"]), U(F, {
                        title: I.$t("treasureScore")
                    }, {
                        default: z(() => [t("div", {
                            class: "lotteryDetail__container-item__footer-detail",
                            innerHTML: i(d).details
                        }, null, 8, PU)]),
                        _: 1
                    }, 8, ["title"])]),
                    _: 1
                }, 8, ["active"])]), t("div", {
                    class: se(["lotteryDetail__container-item__participate", {
                        lotteryDetailActive: i(d).status == 1
                    }])
                }, [i(d).status == 2 ? (u(), m("span", WU, a(I.$t("lotteryActivityUnstarted")), 1)) : i(d).status == 0 ? (u(), m("span", YU, a(I.$t("lotteryActivityEnd")), 1)) : (u(), m("span", {
                    key: 2,
                    onClick: M[4] || (M[4] = x => D(!0, !1))
                }, a(I.$t("ParticipateInlottery")), 1))], 2)])) : H("", !0), U(T, {
                    show: y.value,
                    "onUpdate:show": M[5] || (M[5] = x => y.value = x),
                    title: I.$t("descLottery1"),
                    "z-index": "2000",
                    "close-on-click-overlay": !1,
                    closeable: !1
                }, {
                    default: z(() => {
                        var x;
                        return [t("div", xU, [t("div", null, [HU, t("span", null, a(i(n).getUserInfo.integral), 1)]), t("div", null, a(I.$t("myScores")), 1), t("div", null, [(u(), m(K, null, $(E, (Ce, Ee) => t("div", {
                            key: Ee,
                            class: se({
                                activeTicket: Ce.amount === i(h)
                            }),
                            onClick: Bt => h.value = Ce.amount
                        }, [t("span", null, a(Ce.amount), 1), t("span", null, a(I.$t("sheets")), 1)], 10, KU)), 64))]), t("div", null, [t("span", null, a(I.$t("needToPay")), 1), t("div", null, a(((x = i(d)) == null ? void 0 : x.unit) * i(h) || 0) + ".00 ", 1)])]), U(G, {
                            class: "lotteryDetail__container-item__actionSheet-button",
                            block: "",
                            loading: i(p),
                            "loading-text": I.$t("confirmParticipate"),
                            onClick: i(o)
                        }, {
                            default: z(() => [J(a(I.$t("confirmParticipate")), 1)]),
                            _: 1
                        }, 8, ["loading", "loading-text", "onClick"])]
                    }),
                    _: 1
                }, 8, ["show", "title"]), y.value ? (u(), m("div", XU, [t("span", {
                    onClick: M[6] || (M[6] = x => D(!1))
                }, zU)])) : H("", !0), U(ne, {
                    show: v.value,
                    "onUpdate:show": M[7] || (M[7] = x => v.value = x),
                    "show-confirm-button": !1,
                    "z-index": "3100"
                }, {
                    default: z(() => [t("div", jU, a(I.$t("participateSuccess")), 1), t("div", ZU, [t("span", null, a(i(_).length), 1), J(a(I.$t("sheets")), 1)]), t("div", qU, a(I.$t("congratsOnWinTicket")), 1), t("div", $U, [t("div", null, [(u(!0), m(K, null, $(i(_), x => (u(), m("div", null, [t("img", {
                        class: "van-dialog__content-ticketsList__ticket",
                        src: i(Q)("activity/PointMall", "ticket")
                    }, null, 8, eG), J(" " + a(x), 1)]))), 256))])]), t("div", {
                        class: "van-dialog__content-confirm",
                        onClick: N
                    }, a(I.$t("confirm")), 1), t("div", {
                        class: "van-dialog__content-myTreasure",
                        onClick: f
                    }, [J(a(I.$t("toMyTreasure")) + " ", 1), U(ie, {
                        name: "arrow"
                    }), U(ie, {
                        name: "arrow",
                        style: {
                            left: "-10px"
                        }
                    })]), W(t("img", null, null, 512), [
                        [ee, i(Q)("activity/PointMall", "successfullyParticipatedBg")]
                    ]), t("img", {
                        class: "van-dialog__content-successfullyParticipatedBottom",
                        src: i(Q)("activity/PointMall", "successfullyParticipatedBottom")
                    }, null, 8, tG)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const nG = Z(sG, [
        ["__scopeId", "data-v-dcab328a"]
    ]),
    aG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: nG
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    AG = {
        class: "myLottery__container"
    },
    oG = {
        class: "myLottery__container-products"
    },
    iG = {
        class: "myLottery__container-products__item"
    },
    lG = {
        class: "myLottery__container-products__item-header"
    },
    gG = {
        class: "myLottery__container-products__item-header__left"
    },
    cG = {
        class: "myLottery__container-products__item-header__right"
    },
    rG = {
        class: "left"
    },
    dG = {
        class: "right"
    },
    pG = {
        class: "myLottery__container-products__item-footer"
    },
    _G = {
        class: "myLottery__container-products__item-footer__header"
    },
    uG = {
        class: "myLottery__container-products__item-footer__body"
    },
    mG = ["onClick"],
    vG = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), {
                myPointTabs: A,
                pointTabActive: o,
                myPointList: l,
                myPointQuery: g,
                listRef: p,
                pointRest: h
            } = $e(), _ = y => [y.img_Five, y.img_Four, y.img_One, y.img_Three, y.img_Two].filter(Boolean);

            function d() {
                n.back()
            }
            ve(o, () => {
                g.value.orderStatus = o.value, h(), p.value.resetRefresh()
            });

            function C(y, w) {
                if (w === 1) switch (y) {
                    case 0:
                        return "linear-gradient(270deg, #D9AC4F 18.36%, #C4933F 89.84%, #FAE59F 96.48%, #8F5206 100%)";
                    case 2:
                        return "linear-gradient(270deg, #FABB2A 18.36%, #EB9315 89.84%, #FBE571 96.48%, #ED8B19 100%)";
                    case 1:
                        return "linear-gradient(270deg, #9FAAD2 18.36%, #A3B0DE 89.84%, #D5E1FF 96.48%, #7884B0 100%)"
                } else switch (y) {
                    case 1:
                        return "linear-gradient(90deg, #BDC9F4 -3.24%, #FFF 4.63%, #C9D5FB 13.43%, #D9E3FF 76.75%)";
                    case 2:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)";
                    default:
                        return "linear-gradient(90deg, #FF9C3A -3.24%, #FFE55C 4.63%, #FFB936 13.43%, #FFF962 76.75%)"
                }
            }

            function B(y) {
                switch (y) {
                    case 0:
                        return s("ongoing");
                    case 2:
                        return s("winTheLottery");
                    case 1:
                        return s("winTips4")
                }
            }

            function b(y, w) {
                n.push({
                    name: "PointMall-ReceiveLottery",
                    query: {
                        pointsLotteryID: y,
                        orderId: w
                    }
                })
            }
            return (y, w) => {
                const v = Y("NavBar"),
                    E = Y("van-tab"),
                    f = Y("van-tabs"),
                    L = de("lazy");
                return u(), m("div", AG, [U(v, {
                    title: i(s)("mydraw"),
                    "z-index": "99",
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: d
                }, null, 8, ["title"]), U(f, {
                    active: i(o),
                    "onUpdate:active": w[0] || (w[0] = D => Re(o) ? o.value = D : null),
                    background: "#3F3F3F",
                    color: "#292929",
                    "line-width": "0",
                    "line-height": "0",
                    "title-active-color": "#D9AC4F",
                    "title-inactive-color": "#A6A9AE"
                }, {
                    default: z(() => [(u(!0), m(K, null, $(i(A), (D, te) => (u(), ce(E, {
                        name: D.value,
                        key: te,
                        title: D.label
                    }, null, 8, ["name", "title"]))), 128))]),
                    _: 1
                }, 8, ["active"]), U(Ve, {
                    distance: 300,
                    api: i(p5),
                    list: i(l),
                    "onUpdate:list": w[1] || (w[1] = D => Re(l) ? l.value = D : null),
                    "page-query": i(g),
                    "onUpdate:pageQuery": w[2] || (w[2] = D => Re(g) ? g.value = D : null),
                    isAutoLoad: !0,
                    ref_key: "listRef",
                    ref: p
                }, {
                    content: z(() => [t("div", oG, [(u(!0), m(K, null, $(i(l), (D, te) => (u(), m("div", iG, [t("div", lG, [t("div", gG, [t("span", {
                        style: Ge({
                            background: C(D.orderInfo.orderStatus, 1)
                        })
                    }, a(B(D.orderInfo.orderStatus)), 5), t("span", {
                        style: Ge({
                            background: C(D.orderInfo.orderStatus, 2)
                        })
                    }, a(B(D.orderInfo.orderStatus)), 5), W(t("img", null, null, 512), [
                        [L, _(D.lotteryInfo)[0]]
                    ])]), t("div", cG, [t("h1", null, a(D.lotteryInfo.name), 1), t("div", null, a(i(s)("betNumber")) + ": " + a(D.lotteryInfo.issueNumber), 1), t("div", null, [t("span", rG, a(D.lotteryInfo.redeemedNumber), 1), J("/" + a(D.lotteryInfo.totalNumber) + " " + a(i(s)("sheets")) + " ", 1), t("span", dG, [W(t("img", null, null, 512), [
                        [L, i(Q)("activity/PointMall", "redDiamondSm")]
                    ]), J(" " + a(D.lotteryInfo.unit) + ".00 ", 1)])])])]), t("div", pG, [t("div", _G, [t("div", null, [J(a(i(s)("gross")), 1), t("span", null, a(D.ticketsInfo.length), 1), J(a(i(s)("raffleticket")), 1)]), t("div", null, a(i(ae)(D.ticketsInfo.length * D.lotteryInfo.unit)), 1)]), t("div", uG, [(u(!0), m(K, null, $(D.ticketsInfo, (N, I) => (u(), m("div", {
                        class: "myLottery__container-products__item-footer__body-item",
                        key: te
                    }, [W(t("img", null, null, 512), [
                        [L, i(Q)("activity/PointMall", "ticket")]
                    ]), t("span", null, a(N.ticketNumber), 1)]))), 128))])]), D.orderInfo.orderStatus === 2 && D.orderInfo.shippingStatus == 0 ? (u(), m("div", {
                        key: 0,
                        class: se(["myLottery__container-products__item-button", {
                            boxShadow4px: !0
                        }]),
                        onClick: N => b(D.lotteryInfo.pointsLotteryID, D.orderInfo.pointsLotteryOrdersID)
                    }, [t("span", null, a(i(s)("claimtreasure")), 1)], 8, mG)) : H("", !0), D.orderInfo.shippingStatus > 0 && D.orderInfo.orderStatus === 2 ? (u(), m("div", {
                        key: 1,
                        class: se(["myLottery__container-products__item-button", {
                            boxShadow4px: !1
                        }])
                    }, [t("span", null, a(i(s)("claimed")), 1)])) : H("", !0)]))), 256))])]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const hG = Z(vG, [
        ["__scopeId", "data-v-ad6ccd74"]
    ]),
    wG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: hG
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    bG = {
        class: "myOrders__container"
    },
    CG = ["onClick"],
    BG = {
        class: "myOrders__container-item__header-left"
    },
    yG = {
        alt: ""
    },
    EG = {
        alt: ""
    },
    fG = {
        class: "myOrders__container-item__header-right"
    },
    RG = {
        class: "myOrders__container-item__footer"
    },
    SG = {
        class: "myOrders__container-item__footer-top"
    },
    IG = {
        class: "myOrders__container-item__footer-bottom"
    },
    UG = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), A = S({}), o = S({
                pageNo: 1,
                list: [],
                totalCount: 0,
                totalPage: 0
            });

            function l(d) {
                switch (d) {
                    case 0:
                        return Q("activity/PointMall", "orderPending");
                    case 1:
                        return Q("activity/PointMall", "orderSent");
                    case 2:
                        return Q("activity/PointMall", "orderCompleted");
                    case 3:
                        return Q("activity/PointMall", "orderCanceled");
                    default:
                        return Q("activity/PointMall", "orderPending")
                }
            }

            function g(d) {
                switch (d) {
                    case 0:
                        return "0px 2px 1px #2AB27E";
                    case 1:
                        return "0px 2px 1px #FB616080";
                    case 2:
                        return "0px 2px 1px #E79319";
                    case 3:
                        return "0px 2px 1px #8F9DD0";
                    default:
                        return "0px 2px 1px #2AB27E"
                }
            }

            function p(d) {
                switch (d) {
                    case 0:
                        return s("tobeDelivered");
                    case 1:
                        return s("shipped");
                    case 2:
                        return s("completed");
                    case 3:
                        return s("canceled");
                    default:
                        return s("tobeDelivered")
                }
            }

            function h() {
                n.back()
            }

            function _(d) {
                n.push({
                    name: "PointMall-OrderDetail",
                    query: {
                        orderNumber: d.orderNumber,
                        orderType: d.orderType,
                        orderId: d.orderId
                    }
                })
            }
            return (d, C) => {
                const B = Y("NavBar"),
                    b = Y("van-icon"),
                    y = de("lazy");
                return u(), m("div", bG, [U(B, {
                    title: i(s)("myOrder"),
                    "left-arrow": "",
                    onClickLeft: h
                }, null, 8, ["title"]), U(Ve, {
                    distance: 300,
                    api: i(o5),
                    list: o.value.list,
                    "onUpdate:list": C[0] || (C[0] = w => o.value.list = w),
                    "page-query": A.value,
                    "onUpdate:pageQuery": C[1] || (C[1] = w => A.value = w),
                    isAutoLoad: !0
                }, {
                    content: z(() => [(u(!0), m(K, null, $(o.value.list, (w, v) => (u(), m("div", {
                        class: "myOrders__container-item",
                        key: v
                    }, [t("div", {
                        class: "myOrders__container-item__header",
                        onClick: E => _(w)
                    }, [t("div", BG, [W(t("img", yG, null, 512), [
                        [y, w.productImg]
                    ]), t("div", null, [W(t("img", EG, null, 512), [
                        [y, l(w.state)]
                    ]), t("span", {
                        style: Ge({
                            textShadow: g(w.state)
                        })
                    }, a(p(w.state)), 5)])]), t("div", fG, [t("h1", null, a(i(Cs)(w.productName, 80)), 1), t("div", null, [t("span", null, [U(b, {
                        name: i(Q)("activity/PointMall", "redDiamondSm")
                    }, null, 8, ["name"]), t("span", null, a(w.integral / w.counts), 1)]), t("span", null, " x" + a(w.counts), 1)]), t("div", null, [t("span", null, a(i(s)("orderTotalAmount")), 1), t("span", null, a(w.integral), 1)])])], 8, CG), t("div", RG, [t("div", SG, [t("span", null, a(i(s)("orderNo")), 1), t("span", null, a(w.orderNumber), 1), U(b, {
                        onClick: () => i(vs)(w.orderNumber),
                        name: i(Q)("activity/PointMall", "copy")
                    }, null, 8, ["onClick", "name"])]), t("div", IG, [t("span", null, a(i(s)("ordertime")), 1), t("span", null, a(w.addTime), 1)])])]))), 128))]),
                    _: 1
                }, 8, ["api", "list", "page-query"])])
            }
        }
    });
const GG = Z(UG, [
        ["__scopeId", "data-v-7c8d0cc7"]
    ]),
    DG = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: GG
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    He = Me.global.t;

function LG(e) {
    switch (e) {
        case 0:
            return Q("activity/PointMall", "orderPendingImg");
        case 1:
            return Q("activity/PointMall", "orderSentImg");
        case 2:
            return Q("activity/PointMall", "orderCompletedImg");
        case 3:
            return Q("activity/PointMall", "orderCanceledImg");
        default:
            return Q("activity/PointMall", "orderPendingImg")
    }
}

function cs(e) {
    switch (e) {
        case 0:
            return He("tobeDelivered");
        case 1:
            return He("shipped");
        case 2:
            return He("completed");
        case 3:
            return He("canceled");
        default:
            return He("tobeDelivered")
    }
}
const MG = {
        class: "orderDetail__container"
    },
    kG = {
        class: "orderDetail__container-header"
    },
    TG = {
        class: "orderDetail__container-header__content"
    },
    QG = {
        key: 0
    },
    VG = {
        key: 1
    },
    OG = {
        key: 2
    },
    FG = {
        key: 3
    },
    NG = ["src"],
    PG = {
        class: "orderDetail__container-content"
    },
    WG = {
        class: "orderDetail__container-content__itemDetail"
    },
    YG = {
        class: "orderDetail__container-content__itemDetail-header"
    },
    xG = {
        class: "orderDetail__container-content__itemDetail-body"
    },
    HG = {
        class: "orderDetail__container-content__itemDetail-body__top"
    },
    KG = {
        alt: ""
    },
    XG = {
        class: "colorf95959"
    },
    JG = {
        class: "orderDetail__container-content__itemDetail-body__footer"
    },
    zG = {
        class: "myOrders__container-item__footer-bottom"
    },
    jG = {
        class: "orderDetail__container-content__address"
    },
    ZG = {
        class: "orderDetail__container-content__address-header"
    },
    qG = {
        key: 0,
        class: "orderDetail__container-content__address-body"
    },
    $G = {
        class: "orderDetail__container-content__orderDetail"
    },
    eD = {
        class: "orderDetail__container-content__orderDetail-header"
    },
    tD = {
        class: "orderDetail__container-content__orderDetail-body"
    },
    sD = {
        class: "orderDetail__container-content__orderDetail-body__item"
    },
    nD = {
        class: "orderDetail__container-content__orderDetail-body__item"
    },
    aD = {
        class: "orderDetail__container-content__btn"
    },
    AD = {
        style: {
            width: "100%"
        },
        alt: ""
    },
    oD = j({
        __name: "index",
        setup(e) {
            const s = Ae();
            ue(), ut();
            const n = S(),
                A = S({}),
                o = S(!1),
                l = S(!1),
                g = Ne(),
                p = async () => {
                    const w = g.query.orderType || "",
                        v = g.query.orderId || "",
                        E = await V(Ts({
                            orderId: Number(v),
                            orderType: Number(w)
                        }));
                    E && (n.value = E.data)
                }, h = S(!1);

            function _(w) {
                return w ? "orderCancelSuccess" : "orderCancelWarn"
            }
            const d = O(() => g.query.orderType !== "2");

            function C() {
                A.value.state !== 3 && (o.value = !0)
            }

            function B() {
                s.back()
            }
            async function b() {
                A.value.state === 0 && g5({
                    orderNumber: A.value.orderNumber
                }).then(w => {
                    w.code == 0 ? (h.value = !0, A.value.state = 1, l.value = !0, y()) : (h.value = !1, A.value.state = 1, l.value = !0, y()), o.value = !1
                }).catch(w => {
                    De(w)
                }), o.value = !1
            }
            async function y() {
                const w = g.query.orderNumber || "",
                    v = g.query.orderType || "",
                    E = g.query.orderId || "",
                    f = await V(i5({
                        orderNumber: w,
                        orderId: Number(E),
                        orderType: Number(v)
                    }));
                f && (A.value = f.data), p()
            }
            return le(async () => {
                y()
            }), (w, v) => {
                var D, te, N, I, M, k;
                const E = Y("NavBar"),
                    f = Y("van-icon"),
                    L = de("lazy");
                return u(), m("div", MG, [U(E, {
                    title: w.$t("myOrder"),
                    backgroundColor: "linear-gradient(-90deg, #8F5206, #D9AC4F)",
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: B
                }, null, 8, ["title"]), t("div", kG, [t("div", TG, [t("div", null, [t("h1", null, a(i(cs)(A.value.state)), 1), A.value.state === 3 ? (u(), m("p", QG, a(w.$t("ordercancle")), 1)) : A.value.state === 1 ? (u(), m("p", VG, a(w.$t("orderShipped")), 1)) : A.value.state === 2 ? (u(), m("p", OG, a(w.$t("orderCompleted")), 1)) : A.value.state === 0 ? (u(), m("p", FG, a(w.$t("descActivity4")), 1)) : H("", !0)]), t("img", {
                    src: i(LG)(A.value.state),
                    alt: ""
                }, null, 8, NG)])]), t("div", PG, [t("div", WG, [t("div", YG, [U(f, {
                    name: i(Q)("activity/PointMall", "orderItemDetail")
                }, null, 8, ["name"]), t("h1", null, a(w.$t("productDetail")), 1)]), t("div", xG, [t("div", HG, [t("div", null, [W(t("img", KG, null, 512), [
                    [L, A.value.productImg]
                ])]), t("div", null, [t("h1", null, a(A.value.productName), 1), t("div", null, [t("span", null, [U(f, {
                    name: i(Q)("activity/PointMall", "redDiamondSm")
                }, null, 8, ["name"]), t("span", null, a(A.value.integral / A.value.counts || 0), 1)]), t("span", null, " x" + a(A.value.counts), 1)]), t("div", null, [t("span", null, a(w.$t("orderTotalAmount")), 1), t("span", XG, [U(f, {
                    name: i(Q)("activity/PointMall", "redDiamondSm")
                }, null, 8, ["name"]), J("   " + a(A.value.integral), 1)])])])]), t("div", JG, [t("div", null, [t("span", null, a(w.$t("orderNo")), 1), t("span", null, a(A.value.orderNumber), 1), U(f, {
                    onClick: v[0] || (v[0] = () => i(vs)(A.value.orderNumber)),
                    name: i(Q)("activity/PointMall", "copy")
                }, null, 8, ["name"])]), t("div", zG, [t("span", null, a(w.$t("ordertime")), 1), t("span", null, a(A.value.addTime), 1)])])])]), t("div", jG, [t("div", ZG, [U(f, {
                    name: "location"
                }), t("h1", null, a(w.$t("recipientAddr")), 1)]), n.value ? (u(), m("div", qG, [t("div", null, a((D = n.value) == null ? void 0 : D.name), 1), t("div", null, "+" + a((N = n.value) != null && N.phone.startsWith((te = n.value) == null ? void 0 : te.area) ? "" : (I = n.value) == null ? void 0 : I.area) + a((M = n.value) == null ? void 0 : M.phone), 1), t("p", null, a((k = n.value) == null ? void 0 : k.address), 1)])) : H("", !0)]), t("div", $G, [t("div", eD, [U(f, {
                    name: i(Q)("activity/PointMall", "orderItemDetail")
                }, null, 8, ["name"]), t("h1", null, a(w.$t("orderDetail")), 1)]), t("div", tD, [t("div", sD, [t("span", null, a(A.value.addTime), 1), t("span", null, a(w.$t("orderSuccess")), 1)]), t("div", nD, [t("span", null, a(A.value.upTime), 1), t("span", null, a(i(cs)(A.value.state)), 1)])])]), t("div", aD, [A.value.state !== 3 && A.value.state !== 1 && A.value.state !== 2 && d.value ? (u(), m("div", {
                    key: 0,
                    onClick: C,
                    class: "orderDetail__container-content__btn-cancel"
                }, a(w.$t("concelOrder")), 1)) : H("", !0), t("div", {
                    onClick: v[1] || (v[1] = P => i(s).push({
                        name: "CustomerService"
                    }))
                }, a(w.$t("contactServicer")), 1)])]), U(ze, {
                    show: o.value,
                    "onUpdate:show": v[2] || (v[2] = P => o.value = P),
                    cancelText: w.$t("cancel"),
                    confirmText: w.$t("confirm"),
                    onConfirm: b
                }, {
                    title: z(() => [t("h1", null, a(w.$t("tipWeatherToCancel")), 1)]),
                    _: 1
                }, 8, ["show", "cancelText", "confirmText"]), U(ze, {
                    show: l.value,
                    "onUpdate:show": v[3] || (v[3] = P => l.value = P),
                    onConfirm: v[4] || (v[4] = P => l.value = !1),
                    confirmText: w.$t("confirm"),
                    "show-cancel-btn": !1,
                    title: h.value ? w.$t("orderCanceled") : w.$t("tipUnableToConcel")
                }, {
                    header: z(() => [W(t("img", AD, null, 512), [
                        [L, i(Q)("activity/PointMall", _(h.value))]
                    ])]),
                    _: 1
                }, 8, ["show", "confirmText", "title"])])
            }
        }
    });
const iD = Z(oD, [
        ["__scopeId", "data-v-8d06f16f"]
    ]),
    lD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: iD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gD = {
        class: "receiveLottery__container"
    },
    cD = {
        class: "receiveLottery__container-hero"
    },
    rD = {
        class: "receiveLottery__container-hero__left"
    },
    dD = {
        class: "receiveLottery__container-hero__right"
    },
    pD = {
        class: "receiveLottery__container-note"
    },
    _D = {
        key: 1,
        class: "receiveLottery__container-empty"
    },
    uD = {
        class: "receiveLottery__container-address"
    },
    mD = {
        class: "receiveLottery__container-address__header"
    },
    vD = {
        class: "receiveLottery__container-address__body-content"
    },
    hD = {
        class: "receiveLottery__container-address__body-footer"
    },
    wD = ["onClick"],
    bD = {
        key: 1,
        class: "receiveLottery__container-address__empty"
    },
    CD = {
        class: "dialog__content-top"
    },
    BD = {
        class: "van-dialog__content-title"
    },
    yD = {
        class: "van-dialog__content-note"
    },
    ED = ["src"],
    fD = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                n = Ne(),
                {
                    getPointLotteryInfo: A,
                    getAddress: o,
                    setDefault: l,
                    delAddress: g,
                    address: p,
                    list: h,
                    loading: _,
                    pointInfo: d
                } = $e(),
                C = O(() => {
                    var E, f, L, D, te;
                    return [(E = d.value) == null ? void 0 : E.img_Five, (f = d.value) == null ? void 0 : f.img_Four, (L = d.value) == null ? void 0 : L.img_One, (D = d.value) == null ? void 0 : D.img_Three, (te = d.value) == null ? void 0 : te.img_Two].filter(Boolean)
                }),
                B = S(!1);
            async function b() {
                s.push({
                    path: "/activity/pointMall/myorders"
                })
            }

            function y() {
                s.back()
            }
            const w = E => {
                const f = p.value[0] || {};
                E === "edit" ? s.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        ...f,
                        type: "edit",
                        form: "lotteryPoint"
                    }
                }) : s.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        type: "add",
                        form: "lotteryPoint"
                    }
                })
            };
            async function v() {
                if (_.value) return;
                _.value = !0;
                const E = n.query.orderId,
                    f = parseInt(E, 10),
                    L = p.value.find(te => te.defaultAddress == !0) || p.value[0],
                    D = await V(u5({
                        orderId: f,
                        userAddressId: L.addressId
                    }));
                _.value = !1, D && (B.value = !0)
            }
            return le(async () => {
                await Promise.all([o(), A()])
            }), (E, f) => {
                const L = Y("NavBar"),
                    D = Y("van-icon"),
                    te = Y("van-button"),
                    N = Y("van-dialog"),
                    I = de("lazy");
                return u(), m("div", gD, [U(L, {
                    title: E.$t("claimPrize"),
                    fixed: "",
                    "left-arrow": "",
                    onClickLeft: y
                }, null, 8, ["title"]), i(d) ? (u(), m(K, {
                    key: 0
                }, [t("div", cD, [t("div", rD, [W(t("img", null, null, 512), [
                    [I, C.value[0]]
                ]), t("span", null, a(E.$t("winTheLottery")), 1), t("span", null, a(E.$t("winTheLottery")), 1)]), t("div", dD, [t("h1", null, a(i(d).name), 1), t("div", null, a(E.$t("betsNo")) + " " + a(i(d).issueNumber), 1), t("div", null, [W(t("img", null, null, 512), [
                    [I, i(Q)("activity/PointMall", "ticket")]
                ]), J(" " + a(i(d).winningNumber), 1)])])]), t("div", pD, [W(t("img", null, null, 512), [
                    [I, i(Q)("activity/PointMall", "notice")]
                ]), t("span", null, a(E.$t("descActivity5")) + "!", 1)])], 64)) : (u(), m("div", _D, [U(Se, null, {
                    default: z(() => [t("p", null, a(E.$t("descActivity6")), 1)]),
                    _: 1
                })])), t("div", uD, [t("div", mD, [U(D, {
                    name: "location"
                }), t("h1", null, a(E.$t("recipientAddr")), 1)]), i(p).length ? (u(!0), m(K, {
                    key: 0
                }, $(i(p), (M, k) => (u(), m("div", {
                    class: "receiveLottery__container-address__body",
                    key: k
                }, [t("div", vD, [t("div", null, a(M.name), 1), t("div", null, "+" + a(M.area) + a(M.phone), 1), t("div", null, a(M.address), 1)]), t("div", hD, [t("div", {
                    onClick: f[0] || (f[0] = P => w("edit"))
                }, [W(t("img", null, null, 512), [
                    [I, i(Q)("activity/PointMall", "editDefault")]
                ]), J(" " + a(E.$t("edit")), 1)]), t("div", {
                    onClick: P => i(g)(M.addressId)
                }, [W(t("img", null, null, 512), [
                    [I, i(Q)("activity/PointMall", "recycleBin")]
                ]), J(" " + a(E.$t("delete")), 1)], 8, wD)])]))), 128)) : (u(), m("div", bD, [W(t("img", {
                    onClick: f[1] || (f[1] = M => w("add"))
                }, null, 512), [
                    [I, i(Q)("activity/PointMall", "addAddress")]
                ]), t("p", null, a(E.$t("addrecipientAddr")), 1)]))]), U(te, {
                    loading: i(_),
                    disabled: !i(p).length,
                    "loading-text": E.$t("receive"),
                    class: se(["receiveLottery__container-receiverBtn", {
                        disabled: !i(p).length
                    }]),
                    onClick: v
                }, {
                    default: z(() => [J(a(E.$t("receive")), 1)]),
                    _: 1
                }, 8, ["loading", "disabled", "loading-text", "class"]), U(N, {
                    show: B.value,
                    "onUpdate:show": f[3] || (f[3] = M => B.value = M),
                    "show-confirm-button": !1,
                    "z-index": "3100"
                }, {
                    default: z(() => [W(t("img", CD, null, 512), [
                        [I, i(Q)("wallet/withdraw", "succeed")]
                    ]), t("div", BD, a(E.$t("receiveSuccess")), 1), t("div", yD, a(E.$t("descActivity7")), 1), t("div", {
                        class: "van-dialog__content-btn",
                        onClick: b
                    }, a(E.$t("checkOrder")), 1), t("img", {
                        src: i(Q)("activity/PointMall", "close"),
                        class: "dialog__content-bottom",
                        onClick: f[2] || (f[2] = M => B.value = !1)
                    }, null, 8, ED)]),
                    _: 1
                }, 8, ["show"])])
            }
        }
    });
const RD = Z(fD, [
        ["__scopeId", "data-v-72838e3b"]
    ]),
    SD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: RD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ID = {
        class: "pointMallRecord__container"
    },
    UD = {
        class: "navbar__content-right__buttons"
    },
    GD = {
        class: "pointMallRecord__container-header"
    },
    DD = {
        class: "points-date"
    },
    LD = {
        class: "pointMallRecord__container-header__content"
    },
    MD = {
        class: "pointMallRecord__container-header__content-left"
    },
    kD = {
        alt: ""
    },
    TD = {
        class: "pointMallRecord__container-header__content-right"
    },
    QD = {
        alt: ""
    },
    VD = {
        key: 0,
        class: "pointMallRecord__container-list"
    },
    OD = {
        class: "pointMallRecord__container-list__item-left"
    },
    FD = {
        class: "pointMallRecord__container-list__item-right"
    },
    ND = {
        key: 0
    },
    PD = {
        key: 1
    },
    WD = j({
        __name: "index",
        setup(e) {
            const s = S(!1),
                {
                    t: n
                } = oe(),
                A = S(),
                o = Ae(),
                {
                    minDate: l,
                    maxDate: g
                } = pf(),
                p = localStorage.getItem("language"),
                {
                    value: h
                } = df({
                    status: 3
                });
            let _ = S(`${h[0]}${n("year")}${h[1]}${n("month")}`);
            const d = _e({
                startDate: re(l).format("YYYY-MM-DD HH:mm:ss"),
                endDate: re(g).format("YYYY-MM-DD HH:mm:ss")
            });
            d.startDate = `${h[0]}-${h[1]}-01 00:00:00`;
            const C = new Date(h[0], h[1], 0).getDate();
            d.endDate = `${h[0]}-${h[1]}-${C} 23:59:59`;
            const B = _e({
                    show: !1,
                    actions: [{
                        name: n("pointsAllRecords"),
                        value: -1
                    }, {
                        name: n("pointsBets"),
                        value: 0
                    }, {
                        name: n("pointsRedeem"),
                        value: 3
                    }, {
                        name: n("pointsCanceled"),
                        value: 5
                    }, {
                        name: n("wealName1"),
                        value: 6
                    }, {
                        name: n("wealName2"),
                        value: 7
                    }],
                    selected: {
                        name: "",
                        value: 0
                    }
                }),
                b = O(() => w.value.filter(k => k.type !== 3).reduce((k, P) => k + P.integral, 0)),
                y = O(() => w.value.filter(k => k.type === 3).reduce((k, P) => k + P.integral, 0)),
                w = S([]);

            function v() {
                o.back()
            }
            const E = S(h);

            function f(k, P) {
                if (k === "year") switch (p) {
                    case "vi":
                        P.text = n("year") + " " + P.text;
                        break;
                    case "en":
                        P.text = n("year") + " " + P.text;
                        break;
                    default:
                        P.text += n("year")
                }
                if (k === "month") switch (p) {
                    case "vi":
                        P.text = n("month") + " " + P.text;
                        break;
                    case "en":
                        P.text = n("month") + " " + P.text;
                        break;
                    default:
                        P.text += n("month")
                }
                return P
            }
            const L = () => {
                    s.value = !1
                },
                D = ({
                    selectedOptions: k
                }) => {
                    s.value = !1;
                    let [{
                        text: P
                    }, {
                        text: F
                    }] = k;
                    P.slice(0, -1), F.slice(0, -1), F.startsWith("0") && (F = F.replace("0", "")), _.value = P + F;
                    const X = new Date(new Date().getFullYear(), k[1].value, 0).getDate();
                    d.startDate = `${k[0].value}-${k[1].value}-01 00:00:00`, d.endDate = `${k[0].value}-${k[1].value}-${X} 23:59:59`, M.startDate = d.startDate, M.endDate = d.endDate, A.value.resetRefresh()
                };

            function te() {
                B.show = !0
            }

            function N(k) {
                B.selected = k, M.type = k.value, B.show = !1, A.value.resetRefresh()
            }

            function I(k) {
                const X = B.actions.filter(T => T.value === k).map(T => T.name)[0];
                return X ? X.replace(/[\[\]"]/g, "") : ""
            }
            const M = _e({
                type: -1,
                startDate: d.startDate,
                endDate: d.endDate
            });
            return le(() => {
                A.value.resetRefresh()
            }), (k, P) => {
                const F = Y("NavBar"),
                    X = Y("van-date-picker"),
                    G = Y("van-popup"),
                    T = Y("van-action-sheet"),
                    ie = de("lazy");
                return u(), m(K, null, [t("div", ID, [U(F, {
                    title: i(n)("pointsRecord"),
                    "left-arrow": "",
                    onClickLeft: v
                }, {
                    right: z(() => [t("div", UD, [W(t("img", {
                        alt: "",
                        onClick: te
                    }, null, 512), [
                        [ie, i(Q)("activity/PointMall", "pointsIcon")]
                    ])])]),
                    _: 1
                }, 8, ["title"]), t("div", GD, [t("div", DD, [t("div", {
                    class: "pointMallRecord__container-header-date",
                    onClick: P[0] || (P[0] = ne => s.value = !0)
                }, [t("div", null, a(i(_)), 1), W(t("img", null, null, 512), [
                    [ie, i(Q)("main", "dropDown")]
                ])])]), t("div", LD, [t("div", MD, [t("div", null, a(b.value.toFixed(2)), 1), t("div", null, [W(t("img", kD, null, 512), [
                    [ie, i(Q)("activity/PointMall", "income")]
                ]), t("span", null, a(i(n)("pointsIncome")), 1)])]), t("div", TD, [t("div", null, a(y.value.toFixed(2)), 1), t("div", null, [W(t("img", QD, null, 512), [
                    [ie, i(Q)("activity/PointMall", "output")]
                ]), t("span", null, a(i(n)("payout")), 1)])])])]), U(Ys, {
                    api: i(A5),
                    list: w.value,
                    "onUpdate:list": P[1] || (P[1] = ne => w.value = ne),
                    ref_key: "listRef",
                    ref: A,
                    pageQuery: M
                }, {
                    content: z(() => [w.value.length > 0 ? (u(), m("div", VD, [(u(!0), m(K, null, $(w.value, (ne, ee) => (u(), m("div", {
                        class: "pointMallRecord__container-list__item",
                        key: ee
                    }, [t("div", OD, [t("div", null, a(I(ne.type)), 1), t("div", null, a(ne.addTime), 1)]), t("div", FD, [t("div", {
                        class: se({
                            color2fb192: ne.integral && ne.type !== 3,
                            colorf95959: ne.integral && ne.type === 3
                        })
                    }, [ne.integral && (ne.type === 3 || ne.type === 4) ? (u(), m("span", ND, "-")) : (u(), m("span", PD, "+")), J(a(ne.integral.toFixed(2)), 1)], 2)])]))), 128))])) : H("", !0)]),
                    _: 1
                }, 8, ["api", "list", "pageQuery"])]), U(G, {
                    show: s.value,
                    "onUpdate:show": P[3] || (P[3] = ne => s.value = ne),
                    round: "",
                    position: "bottom"
                }, {
                    default: z(() => [U(X, {
                        modelValue: E.value,
                        "onUpdate:modelValue": P[2] || (P[2] = ne => E.value = ne),
                        title: i(n)("pickDate"),
                        "columns-type": ["year", "month"],
                        formatter: f,
                        onCancel: L,
                        onConfirm: D
                    }, null, 8, ["modelValue", "title"])]),
                    _: 1
                }, 8, ["show"]), U(T, {
                    show: B.show,
                    "onUpdate:show": P[4] || (P[4] = ne => B.show = ne),
                    actions: B.actions,
                    onSelect: N
                }, null, 8, ["show", "actions"])], 64)
            }
        }
    });
const YD = Z(WD, [
        ["__scopeId", "data-v-569c9a34"]
    ]),
    xD = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: YD
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    HD = {
        class: "progress__container"
    },
    KD = Oe('<div class="progress__container-content" data-v-d2a4aa69><div class="progress__container-content__left" data-v-d2a4aa69><div class="progress__container-content__left-content" data-v-d2a4aa69></div></div><div class="progress__container-content__right" data-v-d2a4aa69><div class="progress__container-content__right-content" data-v-d2a4aa69></div></div></div>', 1),
    XD = [KD],
    JD = j({
        __name: "CircleProgress",
        props: {
            color: {
                type: String,
                default: "#FAE59F"
            },
            percentage: {
                type: [String, Number],
                default: 0
            }
        },
        setup(e) {
            const s = e;
            _n(p => ({
                "28e29a89": o.value,
                aa69dc96: "rotate(" + (-135 + n.value) + "deg)",
                "2daea9e8": "rotate(" + (-225 + A.value) + "deg)"
            }));
            const n = S(0),
                A = S(0),
                o = S("#FAE59F"),
                l = S(0),
                g = S(null);
            return ve(l, (p, h) => {
                p >= 0 && p <= 50 ? (A.value = p / 50 * 180, n.value = 0) : p > 50 && p <= 100 && (A.value = 180, n.value = (p - 50) / 50 * 180)
            }, {
                immediate: !0
            }), le(() => {
                o.value = s.color, g.value = setInterval(() => {
                    let p = s.percentage;
                    if (p && p > 0) {
                        if (l.value > p) return
                    } else return;
                    l.value += 1
                }, 10)
            }), _t(() => {
                clearInterval(g.value), g.value = null
            }), (p, h) => (u(), m("div", HD, XD))
        }
    });
const zD = Z(JD, [
        ["__scopeId", "data-v-d2a4aa69"]
    ]),
    jD = {
        class: "redeem__container"
    },
    ZD = {
        class: "redeem__container-hero"
    },
    qD = {
        class: "redeem__container-detail"
    },
    $D = {
        class: "redeem__container-detail__description"
    },
    eL = {
        class: "redeem__container-detail__description-header"
    },
    tL = {
        class: "redeem__container-detail__description-body"
    },
    sL = {
        class: "redeem__container-detail__description-body__left"
    },
    nL = {
        class: "redeem__container-detail__description-body__right"
    },
    aL = {
        class: "nowrap"
    },
    AL = {
        class: "redeem__container-detail__description-footer"
    },
    oL = {
        class: "redeem__container-detail__redeem-content"
    },
    iL = {
        class: "redeem__container-detail__redeem-content__amount"
    },
    lL = ["placeholder", "pattern"],
    gL = {
        class: "redeem__container-detail__redeem-insufficient"
    },
    cL = {
        key: 0
    },
    rL = {
        key: 1
    },
    dL = {
        key: 2
    },
    pL = {
        class: "redeem__container-detail__notes"
    },
    _L = {
        class: "redeem__container-button"
    },
    uL = {
        key: 0,
        class: "redeem__container-button__left"
    },
    mL = ["src"],
    vL = {
        class: "redeem__container-actionSheet"
    },
    hL = {
        class: "redeem__container-actionSheet__note"
    },
    wL = {
        class: "redeem__container-actionSheet__item"
    },
    bL = {
        class: "redeem__container-actionSheet__item-img"
    },
    CL = {
        class: "redeem__container-actionSheet__item-desc"
    },
    BL = {
        class: "redeem__container-actionSheet__cost"
    },
    yL = {
        class: "redeem__container-actionSheet__address"
    },
    EL = {
        class: "redeem__container-actionSheet__address-header"
    },
    fL = {
        alt: ""
    },
    RL = {
        key: 0
    },
    SL = {
        key: 0,
        class: "redeem__container-actionSheet__address-default"
    },
    IL = {
        class: "redeem__container-actionSheet__address-default__name"
    },
    UL = {
        class: "redeem__container-actionSheet__address-default__phone"
    },
    GL = {
        key: 1
    },
    DL = {
        class: "addAddress__container-forum__item"
    },
    LL = {
        class: "input_model"
    },
    ML = {
        key: 0
    },
    kL = ["onUpdate:modelValue", "placeholder", "maxlength"],
    TL = ["placeholder"],
    QL = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = [{
                title: s("recipientName"),
                icon: "lotteryReceiver",
                value: "userName",
                placeholder: s("plEnterrecipientName"),
                maxlength: 20
            }, {
                title: s("contactInfo"),
                icon: "lotteryContact",
                value: "phoneNumber",
                placeholder: s("plEntercontactInfo"),
                maxlength: 11
            }, {
                title: s("shippingAddr"),
                icon: "lotteryCity",
                value: "address",
                placeholder: s("plEnterCity"),
                maxlength: 150
            }];
            let A = _e({
                userName: "",
                phoneNumber: "",
                area: "66",
                address: ""
            });
            const o = ue(),
                l = ut(),
                g = S(!1),
                p = Ae(),
                h = S(!1),
                _ = S(1),
                d = O(() => B.value.stock > 99 ? 99 : B.value.stock);
            S(!1);
            const C = S({}),
                B = S({}),
                b = S(),
                y = O(() => B.value.integral * _.value);

            function w(G) {
                const T = G.target,
                    ie = /[\u4e00-\u9fa5]/g;
                T.value = T.value.replace(ie, "")
            }
            const v = O(() => C.value.integral < y.value || B.value.stock === 0 || C.value.integral === void 0 || C.value.integral === 0 || _.value > 99 || !Number.isInteger(_.value)),
                E = O(() => `^(?:[1-9]|[1-9]\\d|${d})$`),
                f = O(() => {
                    const G = B.value.grandTotal / (B.value.stock + B.value.grandTotal) * 100;
                    return B.value.stock > 0 ? Math.floor(100 - G).toFixed(0) : 0
                });

            function L(G) {
                B.value.stock !== 0 && (G === 0 ? _.value > 1 && (_.value -= 1) : _.value += 1)
            }

            function D() {
                _.value = Number(_.value.toString().replace(/\D/g, "")), C.value.integral < y.value && Ue(s("quantityExceeded"))
            }
            const te = G => {
                G === "edit" ? p.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        ...b.value,
                        type: "edit"
                    }
                }) : p.push({
                    path: "/activity/pointMall/addAddress",
                    query: {
                        type: "add"
                    }
                })
            };

            function N() {
                p.push({
                    path: "/activity/pointMall/rules"
                })
            }
            async function I() {
                p.push({
                    path: "/activity/pointMall/myorders"
                })
            }

            function M() {
                p.back()
            }

            function k(G) {
                let T = "";
                const {
                    name: ie,
                    area: ne,
                    phone: ee,
                    address: q
                } = G;
                (!ie || (ie == null ? void 0 : ie.trim()) === "") && (T += s("phEnterName"));
                const ge = "" + ne + ee;
                return (ge.length < 10 || ge.length > 14) && (T && (T += `
`), T += s("wrongTel")), (!q || (q == null ? void 0 : q.trim()) === "") && (T && (T += `
`), T += s("addressEmpty")), T ? (un({
                    message: T
                }), !1) : !0
            }
            async function P() {
                var ne, ee, q, ge;
                const G = l.getRedeemItem,
                    T = {
                        name: b.value ? (ne = b.value) == null ? void 0 : ne.name : A.userName,
                        address: b.value ? (ee = b.value) == null ? void 0 : ee.address : A.address,
                        phone: b.value ? (q = b.value) == null ? void 0 : q.phone : A.phoneNumber,
                        counts: _.value,
                        area: b.value ? (ge = b.value) == null ? void 0 : ge.area : A.area.replace("+", ""),
                        productid: G.productID
                    };
                if (!k(T)) return;
                await V(l5(T)) && (we(s("redeemDialogDesc1")), h.value = !1, g.value = !0), X()
            }
            const F = async () => {
                const G = await V(Ts());
                G ? b.value = G.data : b.value = void 0
            };
            async function X() {
                F();
                const G = await Gs({
                    signature: "string"
                });
                o.setUserInfo(G == null ? void 0 : G.data), C.value = o.getUserInfo, B.value = l.getRedeemItem
            }
            return le(async () => {
                X()
            }), (G, T) => {
                const ie = Y("NavBar"),
                    ne = Y("van-divider"),
                    ee = Y("van-icon"),
                    q = Y("van-action-sheet"),
                    ge = de("lazy");
                return u(), m("div", jD, [U(ie, {
                    title: i(s)("exchangeGoods"),
                    "left-arrow": "",
                    onClickLeft: M
                }, null, 8, ["title"]), t("div", ZD, [W(t("img", null, null, 512), [
                    [ge, B.value.productImg]
                ])]), t("div", qD, [t("div", $D, [t("h1", eL, a(B.value.productName), 1), t("div", tL, [t("div", sL, [t("div", null, [W(t("img", null, null, 512), [
                    [ge, i(Q)("activity/PointMall", "redDiamondSm")]
                ]), t("span", null, a(B.value.integral), 1)]), t("div", null, [t("span", null, a(i(s)("exchanged")), 1), t("span", null, a(B.value.grandTotal), 1)])]), t("div", nL, [t("div", null, [t("span", aL, a(i(s)("goodsLeft")), 1), t("span", null, a(f.value) + "%", 1)]), U(zD, {
                    percentage: f.value
                }, null, 8, ["percentage"])])]), U(ne, {
                    dashed: ""
                }), t("div", AL, [W(t("img", null, null, 512), [
                    [ge, i(Q)("activity/PointMall", "verified")]
                ]), J(" " + a(i(s)("authenticIdentification")), 1)])]), t("div", {
                    class: se(["redeem__container-detail__redeem", {
                        active: v.value
                    }])
                }, [t("div", oL, [t("span", null, a(i(s)("exchangeNo")), 1), t("div", iL, [t("span", null, [W(t("img", {
                    onClick: T[0] || (T[0] = x => L(0))
                }, null, 512), [
                    [ge, i(Q)("activity/PointMall", "minus")]
                ])]), W(t("input", {
                    type: "digit",
                    step: "1",
                    placeholder: i(s)("plsEnterQuantity"),
                    max: "maxAmount",
                    min: "1",
                    disabled: "",
                    onInput: T[1] || (T[1] = x => D()),
                    pattern: E.value,
                    "onUpdate:modelValue": T[2] || (T[2] = x => _.value = x)
                }, null, 40, lL), [
                    [Fe, _.value]
                ]), t("span", null, [W(t("img", {
                    onClick: T[3] || (T[3] = x => L(1))
                }, null, 512), [
                    [ge, i(Q)("activity/PointMall", "plus")]
                ])])])]), t("div", gL, [C.value.integral < y.value ? (u(), m("div", cL, a(i(s)("descRedeem1")) + " " + a(C.value.integral), 1)) : B.value.stock === 0 ? (u(), m("div", rL, a(i(s)("code241")), 1)) : (u(), m("div", dL, a(i(s)("noRedeemableItems")), 1)), W(t("div", {
                    onClick: N
                }, [J(a(i(s)("descRedeem2")), 1), U(ee, {
                    name: "arrow"
                }), U(ee, {
                    name: "arrow"
                })], 512), [
                    [ps, _.value > d.value]
                ])])], 2), t("div", pL, [t("h1", null, a(i(s)("descRedeem3")), 1), t("li", null, a(i(s)("descRedeem4")), 1), t("li", null, a(i(s)("descRedeem5")), 1), t("li", null, a(i(s)("descRedeem6")), 1), t("li", null, a(i(s)("descRedeem7")), 1)])]), t("div", _L, [h.value ? (u(), m("div", {
                    key: 1,
                    class: "redeem__container-button__cancel",
                    onClick: T[4] || (T[4] = x => h.value = !1)
                }, a(i(s)("cancel")), 1)) : (u(), m("div", uL, [t("div", null, [t("span", null, a(i(s)("consumptionPoints")), 1)]), t("div", null, [t("img", {
                    src: i(Q)("activity/PointMall", "redDiamondSm"),
                    alt: ""
                }, null, 8, mL), t("span", null, a(y.value), 1)])])), t("div", {
                    class: se(["redeem__container-button__right", {
                        disabled: v.value
                    }])
                }, [h.value ? (u(), m("span", {
                    key: 1,
                    onClick: P
                }, a(i(s)("exchangeConfirm")), 1)) : (u(), m("span", {
                    key: 0,
                    onClick: T[5] || (T[5] = x => h.value = !0)
                }, a(i(s)("exchange")), 1))], 2)]), U(q, {
                    show: h.value,
                    "onUpdate:show": T[11] || (T[11] = x => h.value = x),
                    "z-index": "2000",
                    "close-on-click-overlay": !0,
                    closeable: !1,
                    title: i(s)("exchange")
                }, {
                    default: z(() => {
                        var x, Ce, Ee, Bt;
                        return [t("div", vL, [t("div", hL, [U(ee, {
                            name: "warning-o"
                        }), t("p", null, a(i(s)("descRedeem8")), 1)]), t("div", wL, [t("div", bL, [W(t("img", null, null, 512), [
                            [ge, B.value.productImg]
                        ])]), t("p", CL, a(B.value.productName), 1)]), t("div", BL, [J(a(i(s)("comsumption")) + " ", 1), t("span", null, a(y.value) + ".00 ", 1), J(a(i(s)("pointsExchange")), 1)]), t("div", yL, [t("div", EL, [U(ee, {
                            name: "location"
                        }), t("span", null, a(i(s)("recipientAddr")), 1), b.value ? (u(), m("div", {
                            key: 0,
                            onClick: T[6] || (T[6] = Ie => te("edit"))
                        }, [W(t("img", fL, null, 512), [
                            [ge, i(Q)("activity/PointMall", "edit")]
                        ]), t("span", null, a(i(s)("edit")), 1)])) : H("", !0)]), U(ne), b.value ? (u(), m("div", RL, [(x = b.value) != null && x.name ? (u(), m("div", SL, [t("div", IL, a((Ce = b.value) == null ? void 0 : Ce.name), 1), t("div", UL, a("+" + ((Ee = b.value) == null ? void 0 : Ee.phone)), 1), t("p", null, a((Bt = b.value) == null ? void 0 : Bt.address), 1)])) : (u(), m("div", {
                            key: 1,
                            class: "redeem__container-actionSheet__address-empty",
                            onClick: T[7] || (T[7] = Ie => te("add"))
                        }, [W(t("img", null, null, 512), [
                            [ge, i(Q)("activity/PointMall", "addAddress")]
                        ]), t("p", null, a(i(s)("addrecipientAddr")), 1)]))])) : (u(), m("div", GL, [(u(), m(K, null, $(n, (Ie, st) => t("div", DL, [t("h1", null, [U(ee, {
                            name: st < 2 ? i(Q)("activity/PointMall", Ie.icon) : "location"
                        }, null, 8, ["name"]), J(" " + a(Ie.title), 1)]), t("div", LL, [st === 1 ? (u(), m("div", ML, [U(Ps, {
                            typeValue: i(A).area,
                            "onUpdate:typeValue": T[8] || (T[8] = ke => i(A).area = ke),
                            onChangeT: T[9] || (T[9] = ke => i(A).area = ke)
                        }, null, 8, ["typeValue"])])) : H("", !0), st !== 2 ? W((u(), m("input", {
                            key: 1,
                            type: "text",
                            "onUpdate:modelValue": ke => i(A)[Ie.value] = ke,
                            placeholder: Ie.placeholder,
                            maxlength: Ie.maxlength,
                            onInput: w
                        }, null, 40, kL)), [
                            [Fe, i(A)[Ie.value]]
                        ]) : H("", !0)]), st === 2 ? W((u(), m("textarea", {
                            key: 0,
                            "onUpdate:modelValue": T[10] || (T[10] = ke => i(A).address = ke),
                            placeholder: i(s)("phEnterDetailedAddr"),
                            maxlength: "150"
                        }, null, 8, TL)), [
                            [Fe, i(A).address]
                        ]) : H("", !0)])), 64))]))])])]
                    }),
                    _: 1
                }, 8, ["show", "title"]), U(ze, {
                    show: g.value,
                    "onUpdate:show": T[12] || (T[12] = x => g.value = x),
                    onConfirm: I,
                    confirmText: i(s)("redeemDialogDesc0"),
                    cancelText: i(s)("cancel")
                }, {
                    title: z(() => [t("h1", null, a(i(s)("redeemDialogDesc1")), 1)]),
                    content: z(() => [J(a(i(s)("redeemDialogDesc2")), 1)]),
                    _: 1
                }, 8, ["show", "confirmText", "cancelText"])])
            }
        }
    });
const VL = Z(QL, [
        ["__scopeId", "data-v-3da1204d"]
    ]),
    OL = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: VL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    FL = {
        class: "pointMall-rule__container content"
    },
    NL = {
        class: "pointMall-rule__container-pointRule"
    },
    PL = {
        class: "pointMall-rule__container-pointRule__title"
    },
    WL = {
        class: "pointMall-rule__container-pointRule__body"
    },
    YL = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), n = Ae(), A = _e([{
                title: s("betAmounts"),
                body: []
            }, {
                title: s("rewordPercent"),
                body: []
            }]), o = async () => {
                const p = await V(r5());
                p && p.data.map(_ => (A[0].body.push(_.lotteryAmount + ""), A[1].body.push(_.exchange_Rate * 1e3 * 100 / 1e3 + "%"), _))
            };
            le(() => {
                o()
            });

            function l() {
                n.back()
            }
            const g = () => {
                sessionStorage.setItem("clickMenu", "lottery"), n.push({
                    path: "/"
                })
            };
            return (p, h) => {
                const _ = Y("NavBar"),
                    d = Y("van-icon");
                return u(), m("div", FL, [U(_, {
                    title: i(s)("pointsRule"),
                    "left-arrow": "",
                    onClickLeft: l
                }, null, 8, ["title"]), t("div", NL, [t("div", PL, a(i(s)("bonusPoints")), 1), t("div", WL, [t("div", null, a(i(s)("descRules2")), 1), t("div", null, [(u(!0), m(K, null, $(A, (C, B) => (u(), m("div", {
                    key: B
                }, [t("p", null, a(C.title), 1), (u(!0), m(K, null, $(C.body, b => (u(), m("li", {
                    key: b
                }, a(b), 1))), 128))]))), 128))]), t("div", {
                    onClick: h[0] || (h[0] = C => g())
                }, [t("span", null, a(i(s)("goBetting")), 1), U(d, {
                    name: "upgrade"
                })])])])])
            }
        }
    });
const xL = Z(YL, [
        ["__scopeId", "data-v-91e59acf"]
    ]),
    HL = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xL
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    KL = e => (Be("data-v-0c9e9618"), e = e(), ye(), e),
    XL = {
        class: "turntable-detail"
    },
    JL = {
        class: "turntable-detail-wrap"
    },
    zL = {
        class: "turntable-detail-hero"
    },
    jL = {
        class: "turntable-detail-hero__wrapper"
    },
    ZL = {
        class: "turntable-detail-hero__wrapper-titlebox"
    },
    qL = {
        class: "turntable-detail-hero__wrapper-title"
    },
    $L = {
        class: "turntable-detail-hero__wrapper-title"
    },
    eM = {
        class: "turntable-detail-hero__wrapper-title"
    },
    tM = {
        class: "targetAmount"
    },
    sM = {
        class: "rotateNum"
    },
    nM = KL(() => t("div", null, "00:00-23:59", -1)),
    aM = {
        class: "turntable-detail-tips"
    },
    AM = ["innerHTML"],
    oM = j({
        __name: "index",
        setup(e) {
            const {
                t: s
            } = oe(), {
                getTurntablInfo: n,
                store: A,
                onClick: o
            } = Ht(), l = S([s("turntableRule2"), s("turntableRule3"), s("turntableRule4"), s("turntableRule5")]), g = {
                1: s("singleDeposit"),
                2: s("cumulativeDeposits")
            }, p = O(() => A.taskList[A.taskList.length - 1]);
            return le(() => {
                n()
            }), (h, _) => {
                const d = Y("NavBar");
                return u(), m("div", XL, [U(d, {
                    title: h.$t("activityDestitle"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: i(o)
                }, null, 8, ["title", "onClickLeft"]), t("div", JL, [t("div", zL, [t("div", jL, [t("div", ZL, [t("div", qL, a(h.$t("turntableTask")), 1), t("div", $L, a(h.$t("turntableCount")), 1), t("div", eM, a(h.$t("turntableTime")), 1)]), t("ul", null, [(u(!0), m(K, null, $(i(A).taskList, (C, B) => (u(), m("li", {
                    key: B
                }, [t("div", null, [t("p", tM, a(i(ae)(C.targetAmount)), 1), t("p", null, a(g[C.taskType]) + a(h.$t("amount")), 1)]), t("div", sM, "+" + a(C.rotateNum), 1), nM]))), 128))])])])]), U(wt, {
                    name: h.$t("rule"),
                    render: "html",
                    tiplist: l.value
                }, {
                    default: z(() => [t("div", aM, [t("p", null, a(h.$t("example")) + "：", 1), p.value ? (u(), m("p", {
                        key: 0,
                        innerHTML: h.$t("turntableExample", [i(ae)(p.value.targetAmount), p.value.rotateNum])
                    }, null, 8, AM)) : H("", !0)])]),
                    _: 1
                }, 8, ["name", "tiplist"])])
            }
        }
    });
const iM = Z(oM, [
        ["__scopeId", "data-v-0c9e9618"]
    ]),
    lM = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: iM
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    gM = e => (Be("data-v-bd4a7e01"), e = e(), ye(), e),
    cM = {
        class: "turntable-pointRule"
    },
    rM = {
        class: "turntable-pointRule-wrap"
    },
    dM = {
        class: "turntable-pointRule__body"
    },
    pM = {
        class: "turntable-pointRule__title"
    },
    _M = gM(() => t("span", null, [t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "28",
        viewBox: "0 0 24 28",
        fill: "none"
    }, [t("path", {
        d: "M23 12.2679C24.3333 13.0378 24.3333 14.9622 23 15.732L3.5 26.9904C2.16666 27.7602 0.499999 26.7979 0.499999 25.2583L0.5 2.74167C0.5 1.20207 2.16667 0.239817 3.5 1.00962L23 12.2679Z",
        fill: "white"
    })])], -1)),
    uM = {
        class: "turntable-pointRule__body"
    },
    mM = {
        class: "turntable-pointRule__title"
    },
    vM = {
        class: "turntable-tips"
    },
    hM = {
        class: "turntable-pointRule__body"
    },
    wM = {
        class: "turntable-pointRule__title"
    },
    bM = ["innerHTML"],
    CM = {
        key: 0
    },
    BM = j({
        __name: "index",
        setup(e) {
            const {
                getTurntablInfo: s,
                store: n,
                onClick: A,
                bindingTypes: o
            } = Ht();
            return le(() => {
                s()
            }), (l, g) => {
                const p = Y("NavBar");
                return u(), m("div", cM, [U(p, {
                    title: l.$t("activityIntroduce"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: i(A)
                }, null, 8, ["title", "onClickLeft"]), t("div", rM, [t("div", dM, [t("div", pM, [_M, t("span", null, a(l.$t("turntableActivityTime")), 1)]), t("p", null, a(l.$t("turntableStart")), 1)]), t("div", uM, [t("div", mM, a(l.$t("validityPeriod")), 1), t("p", null, a(l.$t("officialNotice")), 1)]), t("div", vM, a(l.$t("turntableRule")) + "。", 1), t("div", hM, [t("div", wM, a(l.$t("turntableJoinRule")), 1), t("p", {
                    innerHTML: l.$t("turntableSatisfy", [i(n).vipRating.join("、")])
                }, null, 8, bM), [0, -1].includes(i(n).bindingType) ? H("", !0) : (u(), m("p", CM, [J(a(l.$t("turntableBind")) + " ", 1), t("span", null, a(i(o)[i(n).bindingType] || ""), 1)])), t("p", null, a(l.$t("turntablePrize")), 1)])])])
            }
        }
    });
const yM = Z(BM, [
        ["__scopeId", "data-v-bd4a7e01"]
    ]),
    EM = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: yM
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ct = e => (Be("data-v-a1fa8920"), e = e(), ye(), e),
    fM = {
        class: "turntable-introduce"
    },
    RM = Ct(() => t("div", {
        class: "promotion-box__splitBorder"
    }, [t("span")], -1)),
    SM = Ct(() => t("div", {
        class: "promotion-box__borderTopStyle"
    }, [t("span"), t("span")], -1)),
    IM = Ct(() => t("div", {
        class: "promotion-box__titleLeft"
    }, null, -1)),
    UM = {
        class: "promotion-title"
    },
    GM = Ct(() => t("div", {
        class: "promotion-box__titleRight"
    }, null, -1)),
    DM = {
        class: "promotion-txt"
    },
    LM = j({
        __name: "index",
        setup(e) {
            const s = Ae(),
                {
                    t: n
                } = oe(),
                A = S([{
                    title: n("introduceTitle"),
                    content: n("introduceContent")
                }, {
                    title: n("introduceTitle2"),
                    content: n("introduceContent2")
                }, {
                    title: n("introduceTitle3"),
                    content: n("introduceContent3")
                }]);
            return (o, l) => {
                const g = Y("NavBar");
                return u(), m(K, null, [U(g, {
                    title: o.$t("firstSaveRule"),
                    placeholder: !1,
                    "left-arrow": "",
                    onClickLeft: l[0] || (l[0] = p => i(s).go(-1))
                }, null, 8, ["title"]), t("div", fM, [(u(!0), m(K, null, $(A.value, (p, h) => (u(), m("div", {
                    class: "promotion-box",
                    key: h
                }, [RM, SM, IM, t("div", UM, "0" + a(h + 1), 1), GM, t("div", DM, [t("h3", null, a(p.title), 1), t("p", null, a(p.content), 1)])]))), 128))])], 64)
            }
        }
    });
const MM = Z(LM, [
        ["__scopeId", "data-v-a1fa8920"]
    ]),
    kM = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: MM
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    vV as $, V as A, _k as B, ae as C, ze as D, l6 as E, FV as F, ue as G, NV as H, PV as I, WV as J, YV as K, Ve as L, xV as M, jT as N, HV as O, KV as P, XV as Q, vs as R, tt as S, Se as T, tO as U, cf as V, _V as W, uV as X, mV as Y, tT as Z, Z as _, mt as a, Vs as a$, hV as a0, dV as a1, pV as a2, wV as a3, JQ as a4, cV as a5, XQ as a6, sV as a7, Sk as a8, Je as a9, yk as aA, fV as aB, RV as aC, BV as aD, yV as aE, LV as aF, KQ as aG, HQ as aH, qQ as aI, jQ as aJ, tV as aK, $Q as aL, aV as aM, eV as aN, TV as aO, fk as aP, vk as aQ, J5 as aR, kt as aS, nk as aT, D6 as aU, y6 as aV, rf as aW, _s as aX, Ft as aY, Ls as aZ, Ms as a_, rt as aa, ZQ as ab, zQ as ac, lV as ad, iV as ae, gV as af, AV as ag, oV as ah, rV as ai, nV as aj, EV as ak, SV as al, ok as am, UV as an, bV as ao, CV as ap, IV as aq, GV as ar, DV as as, MV as at, kV as au, Ck as av, Bk as aw, bk as ax, wk as ay, hk as az, $V as b, VT as b$, Bs as b0, vt as b1, Fs as b2, a6 as b3, e6 as b4, $t as b5, Df as b6, B6 as b7, Mk as b8, Ps as b9, Vk as bA, TT as bB, QT as bC, Ys as bD, Kt as bE, jk as bF, BT as bG, yT as bH, qV as bI, PT as bJ, sT as bK, lT as bL, aT as bM, oT as bN, pk as bO, iT as bP, AT as bQ, jV as bR, Pk as bS, ks as bT, fT as bU, RT as bV, FT as bW, NT as bX, zk as bY, wt as bZ, Jk as b_, Ek as ba, Nk as bb, Ik as bc, Tf as bd, OQ as be, Qk as bf, nT as bg, Lk as bh, Tk as bi, df as bj, cT as bk, GT as bl, rk as bm, Fk as bn, LT as bo, DT as bp, wT as bq, MT as br, kT as bs, IT as bt, ck as bu, ET as bv, Kk as bw, UT as bx, ST as by, Ok as bz, oQ as c, HT as c$, OT as c0, Yk as c1, Wk as c2, kk as c3, Dk as c4, mk as c5, xk as c6, gT as c7, rT as c8, dT as c9, NQ as cA, PQ as cB, YQ as cC, FQ as cD, xQ as cE, WT as cF, YT as cG, dQ as cH, _Q as cI, wQ as cJ, g6 as cK, DQ as cL, QQ as cM, Rk as cN, pQ as cO, vQ as cP, mQ as cQ, cQ as cR, kQ as cS, MQ as cT, gQ as cU, uQ as cV, LQ as cW, TQ as cX, iQ as cY, rQ as cZ, lQ as c_, De as ca, _T as cb, pT as cc, QV as cd, pf as ce, uT as cf, mT as cg, bT as ch, Xk as ci, $5 as cj, uk as ck, hT as cl, eO as cm, vT as cn, CT as co, Ds as cp, qM as cq, ek as cr, $M as cs, Hk as ct, tk as cu, sk as cv, JV as cw, zV as cx, VV as cy, WQ as cz, VQ as d, xT as d0, gs as d1, nQ as d2, ik as d3, aQ as d4, XT as d5, BQ as d6, ZV as d7, AQ as d8, JT as d9, Gk as dA, KT as da, hQ as db, $T as dc, eQ as dd, GQ as de, qT as df, ZT as dg, sQ as dh, CQ as di, bQ as dj, UQ as dk, tQ as dl, fQ as dm, yQ as dn, EQ as dp, IQ as dq, SQ as dr, OV as ds, RQ as dt, Pe as du, H6 as dv, ak as dw, Ak as dx, gk as dy, lk as dz, r6 as e, zT as f, Q as g, hs as h, ZM as i, tf as j, Me as k, U6 as l, R as m, S6 as n, Zk as o, Wt as p, eT as q, Cs as r, _f as s, qk as t, I6 as u, $k as v, Uk as w, r as x, c as y, dk as z
};