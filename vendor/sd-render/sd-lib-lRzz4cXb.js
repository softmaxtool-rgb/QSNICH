import { ElImage as Bt, ElIcon as We, ElDialog as Ce, ElButton as ie, ElTooltip as ml, ElForm as wt, ElFormItem as St, ElInput as Ie, ElDivider as Oa, ElDropdown as _t, ElDropdownMenu as Ft, ElDropdownItem as kt, ElUpload as hl, ElPagination as La, ElPopover as ot, ElCol as ut, ElCheckbox as ia, ElColorPicker as fl, ElRow as Nt, ElInputNumber as jt, ElText as Ke, ElButtonGroup as Mo, ElTag as Ut, ElAvatar as cl, ElTable as na, ElTableColumn as Qe, ElSpace as Zi, ElLink as Ba, ElRate as en, ElScrollbar as Vo, ElTimelineItem as tn, ElCard as bl, ElAlert as Rt, ElTabs as Ao, ElTabPane as Eo, ElSwitch as Ct, ElSelectV2 as Oo, ElLoadingDirective as sa, ElSelect as Dt, ElOption as It, ElOptionGroup as an, ElDescriptions as Lo, ElDescriptionsItem as Bo, ElCollapse as ln, ElCollapseItem as on, ElDatePicker as gl, ElTimePicker as nn, ElRadioGroup as No, ElRadioButton as jo, ElCarousel as sn, ElCarouselItem as rn, ElMenu as dn, ElMenuItem as un, ElSubMenu as pn, ElSkeleton as mn, ElSkeletonItem as hn, ElCascader as fn, ElDatePickerPanel as cn, ElTreeV2 as bn } from "element-plus/es";
import "element-plus/es/components/base/style/index";
import "element-plus/es/components/dialog/style/index";
import "element-plus/es/components/button/style/index";
import "element-plus/es/components/icon/style/index";
import "element-plus/es/components/image/style/index";
import * as gn from "vue";
import { openBlock as n, createElementBlock as v, normalizeClass as x, createElementVNode as C, toDisplayString as M, createCommentVNode as b, defineComponent as B, ref as q, nextTick as la, resolveComponent as X, Fragment as L, createVNode as d, normalizeStyle as te, withCtx as r, createTextVNode as D, createBlock as h, reactive as De, markRaw as Uo, inject as R, renderList as G, resolveDynamicComponent as zt, mergeProps as ae, toHandlers as Ro, withModifiers as U, renderSlot as re, computed as Z, watch as at, unref as ge, provide as He, watchEffect as yn, toRaw as vn, withDirectives as Ae, vShow as zo, onMounted as xe, normalizeProps as ra, guardReactiveProps as da, createSlots as Je, defineAsyncComponent as Ho, resolveDirective as qo, withKeys as wn, onUnmounted as Wo, useAttrs as Sn, useId as _n, onBeforeUnmount as Ko, Teleport as Na, Transition as ja, shallowRef as Fn, readonly as Vt } from "vue";
import { Editor as Ht, Node as pt, mergeAttributes as it, getMarkRange as kn, Extension as Ze, isList as Cn } from "@tiptap/core";
import Dn from "@tiptap/extension-list-item";
import Ml from "@tiptap/extension-text";
import Vl from "@tiptap/extension-paragraph";
import Al from "@tiptap/extension-code";
import El from "@tiptap/extension-hard-break";
import "@tiptap/extension-dropcursor";
import "@tiptap/extension-gapcursor";
import "@tiptap/extension-floating-menu";
import "element-plus/es/components/card/style/index";
import "element-plus/es/components/col/style/index";
import "element-plus/es/components/timeline-item/style/index";
import "element-plus/es/components/scrollbar/style/index";
import "element-plus/es/components/text/style/index";
import "element-plus/es/components/avatar/style/index";
import "element-plus/es/components/input/style/index";
import { useRouter as xo, useRoute as Go } from "vue-router";
import { ElMessageBox as ve, ElTooltip as In, ElButton as $t, ElCheckbox as ua, ElInput as Tt, ElFormItem as pa, ElForm as ma, ElDialog as qt, ElDropdownItem as Ua, ElDropdownMenu as Ra, ElDropdown as za, ElMessage as O, ElPopover as Pt, ElUpload as $n, ElLoading as Pa, ElCol as Tn, localeContextKey as Ma } from "element-plus";
import "element-plus/es/components/tabs/style/index";
import "element-plus/es/components/tab-pane/style/index";
import "element-plus/es/components/alert/style/index";
import "element-plus/es/components/row/style/index";
import "element-plus/es/components/tag/style/index";
import "element-plus/es/components/loading/style/index";
import "element-plus/es/components/form/style/index";
import "element-plus/es/components/switch/style/index";
import "element-plus/es/components/select/style/index";
import "element-plus/es/components/option-group/style/index";
import "element-plus/es/components/option/style/index";
import "element-plus/es/components/checkbox/style/index";
import "element-plus/es/components/form-item/style/index";
import "element-plus/es/components/popover/style/index";
import "element-plus/es/components/table/style/index";
import "element-plus/es/components/table-column/style/index";
import "element-plus/es/components/select-v2/style/index";
import "element-plus/es/components/link/style/index";
import "element-plus/es/components/collapse/style/index";
import "element-plus/es/components/collapse-item/style/index";
import "element-plus/es/components/input-number/style/index";
import "element-plus/es/components/descriptions/style/index";
import "element-plus/es/components/descriptions-item/style/index";
import { useDark as de } from "@vueuse/core";
import Yo from "json-editor-vue";
import { Mode as Jo } from "vanilla-jsoneditor";
import "element-plus/es/components/color-picker/style/index";
import "element-plus/es/components/radio-group/style/index";
import "element-plus/es/components/radio-button/style/index";
import "element-plus/es/components/time-picker/style/index";
import "element-plus/es/components/date-picker/style/index";
import "vanilla-jsoneditor/themes/jse-theme-dark.css";
import { useVueFlow as Pn, VueFlow as Mn, Position as wa } from "@vue-flow/core";
import Ol from "dagre";
import "element-plus/es/components/pagination/style/index";
import "element-plus/es/components/button-group/style/index";
import "element-plus/es/components/dropdown/style/index";
import "element-plus/es/components/dropdown-menu/style/index";
import "element-plus/es/components/dropdown-item/style/index";
import "element-plus/es/components/carousel/style/index";
import "element-plus/es/components/carousel-item/style/index";
import "element-plus/es/components/menu/style/index";
import "element-plus/es/components/sub-menu/style/index";
import "element-plus/es/components/divider/style/index";
import "element-plus/es/components/menu-item/style/index";
import "element-plus/es/components/tooltip/style/index";
import "element-plus/es/components/skeleton/style/index";
import "element-plus/es/components/skeleton-item/style/index";
import "element-plus/es/components/cascader/style/index";
import Xo from "element-plus/es/locale/lang/th";
import "element-plus/es/components/date-picker-panel/style/index";
import "element-plus/es/components/tree-v2/style/index";
import Se from "dayjs";
import Qo from "dompurify";
import Vn from "cropperjs";
import { EditorState as el, Compartment as Yt } from "@codemirror/state";
import { EditorView as tt, lineNumbers as An, highlightActiveLineGutter as En, highlightSpecialChars as On, drawSelection as Ln, dropCursor as Bn, rectangularSelection as Nn, crosshairCursor as jn, highlightActiveLine as Un, placeholder as Rn, keymap as zn } from "@codemirror/view";
import { history as Hn, defaultKeymap as qn, historyKeymap as Wn, indentWithTab as Kn } from "@codemirror/commands";
import { syntaxTree as Ll, syntaxHighlighting as xn, StreamLanguage as Gn, foldGutter as Yn, indentOnInput as Jn, bracketMatching as Xn, foldKeymap as Qn, HighlightStyle as Zn } from "@codemirror/language";
import { parser as Zo } from "@lezer/javascript";
import { completeFromList as es, closeBrackets as ts, autocompletion as as, closeBracketsKeymap as ls, completionKeymap as os, snippetCompletion as Ha } from "@codemirror/autocomplete";
import { forceLinting as Bl, linter as Nl, lintGutter as is } from "@codemirror/lint";
import { scopeCompletionSource as ns, javascript as ss, localCompletionSource as rs } from "@codemirror/lang-javascript";
import { tags as he } from "@lezer/highlight";
import { Editor as Oe, FloatingMenu as ds, BubbleMenu as us, EditorContent as ps, useEditor as ms, nodeViewProps as Fe, NodeViewWrapper as nt, VueNodeViewRenderer as mt, NodeViewContent as hs, getMarkAttributes as qa } from "@tiptap/vue-3";
import { splitCell as fs, mergeCells as cs, CellSelection as bs } from "prosemirror-tables";
import { TextSelection as Wa, AllSelection as yl, Plugin as gs } from "prosemirror-state";
import ys from "@tiptap/extension-placeholder";
import vs from "@tiptap/extension-character-count";
import ws from "@tiptap/extension-document";
import Ss from "@tiptap/extension-heading";
import _s from "@tiptap/extension-blockquote";
import Fs from "@tiptap/extension-code-block";
import ks from "@tiptap/extension-code-block-lowlight";
import { createLowlight as Cs, common as Ds } from "lowlight";
import Is from "highlight.js/lib/languages/css";
import $s from "highlight.js/lib/languages/javascript";
import Ts from "highlight.js/lib/languages/typescript";
import Ps from "highlight.js/lib/languages/xml";
import Ms from "@tiptap/extension-bullet-list";
import Vs from "@tiptap/extension-ordered-list";
import As from "@tiptap/extension-image";
import "element-plus/es/components/upload/style/index";
import be from "axios";
import Es from "@tiptap/extension-task-list";
import Os from "@tiptap/extension-task-item";
import { Table as Ls } from "@tiptap/extension-table";
import Bs from "@tiptap/extension-table-row";
import Ns from "@tiptap/extension-table-header";
import js from "@tiptap/extension-table-cell";
import Us from "@tiptap/extension-bold";
import Rs from "@tiptap/extension-underline";
import zs from "@tiptap/extension-italic";
import Hs from "@tiptap/extension-strike";
import qs from "@tiptap/extension-link";
import Ws from "@tiptap/extension-color";
import Ks from "@tiptap/extension-text-style";
import xs from "@tiptap/extension-highlight";
import Gs from "@tiptap/extension-youtube";
import Ys from "@tiptap/extension-subscript";
import Js from "@tiptap/extension-superscript";
import Xs from "@tiptap/extension-horizontal-rule";
import Qs from "@tiptap/extension-history";
import Zs from "@tiptap/extension-text-align";
import { defineStore as er } from "pinia";
import "element-plus/es/components/rate/style/index";
import "element-plus/es/components/space/style/index";
import { Chart as tr, CategoryScale as ar, LinearScale as lr, BarElement as or, Title as ir, Tooltip as nr, Legend as sr, Filler as rr, plugins as dr, TimeScale as ur, TimeSeriesScale as pr, RadialLinearScale as mr, LineElement as hr, PointElement as fr, ArcElement as cr, BarController as br, LineController as gr, PieController as yr, DoughnutController as vr, PolarAreaController as wr, RadarController as Sr, BubbleController as _r, ScatterController as Fr } from "chart.js";
import { Chart as kr } from "vue-chartjs";
import "chartjs-adapter-moment";
import Cr from "vue3-apexcharts";
import Dr from "vue-clipboard3";
import Ir from "fuse.js";
import Sa from "pdfmake/build/pdfmake";
import jl from "html-to-pdfmake";
import { f as $r } from "./sd-fonts-DL2H6WH7.js";
import * as _a from "xlsx";
import { Document as Tr, Paragraph as Jt, Table as Ul, TableRow as Rl, TableCell as tl, WidthType as Fa, TableLayoutType as zl, BorderStyle as ka, Packer as Pr } from "docx";
import { saveAs as Mr } from "file-saver";
import Vr from "jsbarcode";
import Ve from "onscan.js";
const Ar = {
  name: "SvgData",
  props: {
    svgData: {
      type: String,
      required: !0
    },
    className: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "16px"
    }
  }
}, j = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, o] of t)
    a[l] = o;
  return a;
}, Er = ["innerHTML"];
function Or(e, t, a, l, o, i) {
  return n(), v("i", {
    class: "el-icon svg-icon",
    innerHTML: a.svgData
  }, null, 8, Er);
}
const et = /* @__PURE__ */ j(Ar, [["render", Or], ["__scopeId", "data-v-7c4acdd9"]]), Lr = {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: !0
    },
    className: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "16px"
    }
  },
  computed: {
    iconClass() {
      return `#icon-${this.iconName}`;
    },
    svgClass() {
      return this.className ? "el-icon svg-icon " + this.className : "el-icon svg-icon";
    }
  }
}, Br = { "aria-hidden": "true" }, Nr = ["xlink:href", "fill"], jr = { key: 0 };
function Ur(e, t, a, l, o, i) {
  return n(), v("i", {
    class: x(i.svgClass)
  }, [
    (n(), v("svg", Br, [
      C("use", {
        "xlink:href": i.iconClass,
        fill: a.color
      }, null, 8, Nr),
      a.title ? (n(), v("title", jr, M(a.title), 1)) : b("", !0)
    ]))
  ], 2);
}
const we = /* @__PURE__ */ j(Lr, [["render", Ur], ["__scopeId", "data-v-bebc8483"]]);
var Ye = /* @__PURE__ */ ((e) => (e.None = "None", e.String = "String", e.Integer = "Integer", e.Number = "Number", e.Boolean = "Boolean", e.Array = "Array", e.Object = "Object", e.ObjectId = "ObjectId", e.StringDate = "StringDate", e.ArrayDate = "ArrayDate", e.Date = "Date", e.Timestamp = "Timestamp", e.Binary = "Binary", e.StringArray = "String|Array", e.ObjectArray = "Object|Array", e.Any = "Any", e))(Ye || {}), me = /* @__PURE__ */ ((e) => (e.SYS = "SYS", e.FORM = "FORM", e.SQL = "SQL", e))(me || {}), ye = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e))(ye || {});
const yS = [
  {
    value: "user-list",
    label: "Member List",
    valueField: "_id",
    labelField: ["fname", "lname", "email"],
    searchField: ["profile.fname", "profile.lname"],
    valueObjectId: !0,
    labelTemp: "{{fname}} {{lname}} ( {{email}} )"
  },
  {
    value: "roles-list",
    label: "Roles List",
    valueField: "role_name",
    labelField: ["role_name", "role_description"],
    searchField: ["role_name"],
    valueObjectId: !1,
    labelTemp: "{{role_name}}"
  },
  {
    value: "sdform-list",
    label: "SdForm All List ",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sdform-db-list",
    label: "SdForm DB List",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sdform-ui-list",
    label: "SdForm UI List",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sql-list",
    label: "SQL List",
    valueField: "_id",
    labelField: ["sql_name"],
    searchField: ["sql_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "api-list",
    label: "API List",
    valueField: "_id",
    labelField: ["api_name"],
    searchField: ["api_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "report-list",
    label: "Report List",
    valueField: "_id",
    labelField: ["pdf_name"],
    searchField: ["pdf_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "packages-list",
    label: "Packages List",
    valueField: "_id",
    labelField: ["app_name", "app_code"],
    searchField: ["app_name", "app_code"],
    valueObjectId: !0,
    labelTemp: "{{app_name}} ( {{app_code}} )"
  }
  // {
  // 	value: 'sdform-table-list',
  // 	label: 'SdForm List (Table)',
  // 	valueField: 'form_table',
  // 	labelField: ['form_name', 'form_version'],
  // 	searchField: ['form_name'],
  // 	valueObjectId: true,
  // 	labelTemp: '{{form_name}} ({{form_version}})',
  // },
], ke = [
  "eval",
  "Function",
  "setImmediate",
  "requestAnimationFrame",
  "require",
  "arguments",
  "constructor",
  "yield",
  "fetch",
  "XMLHttpRequest",
  "WebSocket",
  // localStorage เปิดให้ใช้ได้ (2026-08-04) — จอสั่งยา CPOE ต้องเก็บตะกร้าไว้ระหว่างที่หมอถูกเรียกออกจากห้อง
  // popup ตั้ง backdrop:false อยู่แล้ว (กดนอกกล่องไม่ปิด) แต่กัน reload/ปิดแท็บไม่ได้ → ต้องมีที่เก็บจริง
  // ⚠️ key ที่เขียนจาก event ควรตั้ง prefix ของตัวเอง (เช่น `cpoe:cart:<visitId>`) กันชนกับ key ของ app
  // 'localStorage',
  "sessionStorage",
  "indexedDB",
  "document",
  "window",
  "location",
  "history",
  "navigator",
  "performance",
  "FileReader",
  "URL",
  "URLSearchParams",
  "Worker",
  "SharedArrayBuffer",
  "Atomics",
  "WebAssembly",
  "Reflect",
  "Proxy",
  "Symbol",
  "GeneratorFunction",
  "AsyncFunction"
], vS = function(e, t = [], a = !0) {
  if (a && /\bawait\b/.test(e)) {
    const o = Object.getPrototypeOf(async function() {
    }).constructor;
    return new o(...t, ...ke, e);
  }
  return new Function(...t, ...ke, e);
}, Wt = function() {
  return Math.floor(Math.random() * 1e5 + Math.random() * 2e4 + Math.random() * 5e3);
}, wS = function() {
  let e = Math.floor(Math.random() * 1e5 + Math.random() * 2e4 + Math.random() * 5e3), t = Se().valueOf() + "" + e;
  return Number(t.slice(0, 17));
}, Me = function(e) {
  return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
};
function le(e) {
  return window.innerWidth < 768 ? "96%" : window.innerWidth >= 768 && window.innerWidth < 992 ? "95%" : (window.innerWidth >= 992, e);
}
function SS(e) {
  let a = window.location.search.substring(1).split("&");
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (o) {
      let i = o.split("=");
      if (i[0] == e && i[1])
        return i[1];
    }
  }
  return "";
}
const P = function(e) {
  if (e !== void 0)
    return JSON.parse(JSON.stringify(e));
};
function _S(e) {
  return e == null;
}
function vl(e) {
  return e != null;
}
function FS(e) {
  return e === void 0 || !e && e !== 0 && e !== "0" || !/[^\s]/.test(e);
}
function wl(e) {
  return e == null ? !0 : Object.keys(e).length === 0;
}
function Xt(e, t) {
  e.category && e.category === "container" ? Rr(e, t) : e.formItemFlag && e.formItemFlag && t(e);
}
function Rr(e, t) {
  e.component === "grid" ? e.cols.forEach((a) => {
    a.fields.forEach((l) => {
      Xt(l, t);
    });
  }) : e.component === "table" ? e.rows.forEach((a) => {
    a.cols.forEach((l) => {
      l.fields.forEach((o) => {
        Xt(o, t);
      });
    });
  }) : e.component === "tab" || e.component === "collapse" ? e.tabs.forEach((a) => {
    a.fields.forEach((l) => {
      Xt(l, t);
    });
  }) : e.component === "sub-form" ? e.fields.forEach((a) => {
    Xt(a, t);
  }) : e.category === "container" && e.fields.forEach((a) => {
    Xt(a, t);
  });
}
function Et(e, t, a = null) {
  e && e.map((l) => {
    l.formItemFlag ? t(l, a) : l.component === "grid" ? l.cols.map((o) => {
      Et(o.fields, t, l);
    }) : l.component === "table" ? l.rows.map((o) => {
      o.cols.map((i) => {
        Et(i.fields, t, l);
      });
    }) : l.component === "tab" || l.component === "collapse" ? l.tabs.map((o) => {
      Et(o.fields, t, l);
    }) : (l.component === "sub-form" || l.category === "container") && Et(l.fields, t, l);
  });
}
function Ot(e, t) {
  e && e.map((a) => {
    a.category === "container" && t(a), a.component === "grid" ? a.cols.map((l) => {
      Ot(l.fields, t);
    }) : a.component === "table" ? a.rows.map((l) => {
      l.cols.map((o) => {
        Ot(o.fields, t);
      });
    }) : a.component === "tab" || a.component === "collapse" ? a.tabs.map((l) => {
      Ot(l.fields, t);
    }) : (a.component === "sub-form" || a.category === "container") && Ot(a.fields, t);
  });
}
const kS = function(e, t = "") {
  try {
    let a = document.getElementsByTagName("body")[0], l = document.getElementById("sdform_global_functions");
    if (a) {
      l && a.removeChild(l), t && (l = document.getElementById("sdform_global_functions-" + t), l && a.removeChild(l));
      let o = document.createElement("script");
      o.id = t ? "sdform_global_functions-" + t : "sdform_global_functions", o.type = "text/javascript", o.innerHTML = e, a.appendChild(o);
    }
  } catch (a) {
    console.log("error", a);
  }
}, CS = function(e, t = "") {
  let a = document.getElementsByTagName("head")[0], l = document.getElementById("sdform-custom-css");
  if (a) {
    l && a.removeChild(l), t && (l = document.getElementById("sdform-custom-css-" + t), l && a.removeChild(l));
    let o = document.createElement("style");
    o.type = "text/css", o.rel = "stylesheet", o.id = t ? "sdform-custom-css-" + t : "sdform-custom-css";
    try {
      o.appendChild(document.createTextNode(e));
    } catch {
      o.styleSheet.cssText = e;
    }
    a.appendChild(o);
  }
}, DS = function(e, t = 0, a = "currency", l = "THB") {
  return new Intl.NumberFormat("th-TH", {
    style: a,
    currency: l,
    minimumFractionDigits: t
  }).format(e);
};
function IS(e) {
  if (!e)
    return [];
  let t = [];
  return Et(e, (l) => {
    t.push({
      component: l.component,
      name: l.options.name,
      field: l
    });
  }), t;
}
function $S(e) {
  if (!e)
    return [];
  let t = [];
  return Ot(e, (l) => {
    t.push({
      component: l.component,
      name: l.options.name,
      container: l
    });
  }), t;
}
const Sl = function(e) {
  let t = {};
  for (const a in e)
    t[`{{${a}}}`] = e[a];
  return t;
}, zr = (e) => ["true", "True", "1"].includes(e);
function TS(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function PS(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function MS(e) {
  return `(${e.map((t) => JSON.stringify(t.toString())).join(", ")})`;
}
function VS(e) {
  return `(${e.join(", ")})`;
}
function AS(e) {
  let t = e.replace(/\s+/g, " ");
  return t = Be(t, "%", "%25"), t = Be(t, "> <", "><"), t = Be(t, "; }", ";}"), t = Be(t, "<", "%3c"), t = Be(t, ">", "%3e"), t = Be(t, '"', "'"), t = Be(t, "#", "%23"), t = Be(t, "{", "%7b"), t = Be(t, "}", "%7d"), t = Be(t, "|", "%7c"), t = Be(t, "^", "%5e"), t = Be(t, "`", "%60"), t = Be(t, "@", "%40"), t;
}
function Be(e, t, a) {
  return e.replace(new RegExp(Hr(t), "g"), a);
}
function Hr(e) {
  return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function rl(e, t, a) {
  let l = t.split("."), o = e;
  for (let i = 0; i < l.length; i++) {
    let s = l[i];
    s && (i === l.length - 1 ? o[s] = a : ((!o[s] || typeof o[s] != "object" || Array.isArray(o[s])) && (o[s] = {}), o = o[s]));
  }
}
function pe(e, t) {
  try {
    let a = t.split("."), l = e;
    for (let o = 0, i = a.length; o < i; o++) {
      let s = a[o];
      if (s)
        if (vl(l) && Object.prototype.hasOwnProperty.call(l, s))
          l = l[s];
        else
          return null;
      else
        return null;
    }
    return l;
  } catch {
    return null;
  }
}
function Kt(e) {
  return Qo.sanitize(e, {});
}
function ue(e, t) {
  const a = (i) => `{{###~${i}~###}}`, l = Object.keys(t).map((i, s) => ({
    key: i,
    val: t[i],
    token: a(s)
  })), o = l.reduce((i, s) => i.replace(new RegExp(s.key, "g"), s.token), e);
  return l.reduce((i, s) => i.replace(new RegExp(s.token, "g"), s.val), o);
}
function qr(e, t, a = "params") {
  let l = !1;
  try {
    e ? l = new Function(a, ...ke, `return Boolean(${e})`).call(null, t) : l = !1;
  } catch {
    l = !1;
  }
  return l;
}
function Wr(e, t, a = "params") {
  let l = null;
  try {
    e ? l = new Function(a, ...ke, `return ${e}`).call(null, t) : l = null;
  } catch {
    l = null;
  }
  return l;
}
function Ka(e, t = 1) {
  if (!e || ((t < 0 || t > 1) && (t = 1), e = e.trim().replace(/^#/, ""), !/^([0-9A-F]{3}){1,2}$/i.test(e)))
    return "";
  let a, l, o;
  return e.length === 3 && e[0] && e[1] && e[2] ? (a = parseInt(e[0] + e[0], 16), l = parseInt(e[1] + e[1], 16), o = parseInt(e[2] + e[2], 16)) : (a = parseInt(e.substring(0, 2), 16), l = parseInt(e.substring(2, 4), 16), o = parseInt(e.substring(4, 6), 16)), `rgba(${a}, ${l}, ${o}, ${t})`;
}
const Kr = B({
  name: "SdCropImageInput",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    disabled: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    resizeEnable: {
      type: Boolean,
      default: !1
    },
    rotateEnable: {
      type: Boolean,
      default: !0
    },
    flipEnable: {
      type: Boolean,
      default: !0
    },
    afterCroppered: {
      type: Function
    },
    afterDelete: {
      type: Function
    }
  },
  data() {
    return {
      resizeCleanup: null,
      showPopupFlag: !1,
      popupWidth: "450px",
      picture: "",
      tempFixed: `
					<cropper-canvas background style="width: 100%; height: 400px">
						<cropper-image  rotatable scalable skewable translatable></cropper-image>
						<cropper-shade hidden></cropper-shade>
						<cropper-handle action="move" plain></cropper-handle>
						<cropper-selection width="${this.width}" height="${this.height}"  movable outlined >
							<cropper-crosshair centered theme-color="#39f"></cropper-crosshair>
							<cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.1)"></cropper-handle>
						</cropper-selection>
					</cropper-canvas>
				`,
      tempResize: `
					<cropper-canvas background style="width: 100%; height: 400px">
						<cropper-image  rotatable scalable skewable translatable></cropper-image>
						<cropper-shade hidden></cropper-shade>
						<cropper-handle action="move" plain></cropper-handle>
						<cropper-selection width="${this.width}" height="${this.height}"  movable resizable outlined >
							<cropper-crosshair centered theme-color="#39f"></cropper-crosshair>
							<cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.1)"></cropper-handle>
							<cropper-handle action="n-resize"></cropper-handle>
							<cropper-handle action="e-resize"></cropper-handle>
							<cropper-handle action="s-resize"></cropper-handle>
							<cropper-handle action="w-resize"></cropper-handle>
							<cropper-handle action="ne-resize"></cropper-handle>
							<cropper-handle action="nw-resize"></cropper-handle>
							<cropper-handle action="se-resize"></cropper-handle>
							<cropper-handle action="sw-resize"></cropper-handle>
						</cropper-selection>
					</cropper-canvas>
				`,
      scrollerHeight: 0,
      cropper: {}
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue !== void 0 && this.modelValue !== null ? typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0 ? this.modelValue : typeof this.modelValue == "string" && this.modelValue !== "" ? this.modelValue : null : null;
      },
      set(e) {
        let t = null;
        e != null && (e !== "" || typeof e == "object" && Object.keys(e).length > 0) && (t = e), this.$emit("update:modelValue", t), this.$emit("change", t);
      }
    },
    priviewDataURL() {
      let e = "";
      if (this.value)
        if (typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0)
          for (const t of this.value)
            t.url && (e = t.url);
        else typeof this.modelValue == "string" && this.modelValue !== "" ? e = this.modelValue : e = "";
      return e;
    }
  },
  created() {
  },
  mounted() {
    this.scrollerHeight = window.innerHeight - 220, this.resizeCleanup = Me(async () => {
      await la(() => {
        this.scrollerHeight = window.innerHeight - 220, this.popupWidth = le("450px");
      });
    });
  },
  setup(e, t) {
    const a = q(), l = q(), o = q();
    return {
      uploadInput: a,
      imgCrop: l,
      cropperBox: o
    };
  },
  unmounted() {
    this.resizeCleanup?.();
  },
  methods: {
    onCropperImageOpen() {
      const e = new Image();
      e.src = this.picture, e.alt = "Picture", this.cropper = new Vn(e, {
        container: this.cropperBox,
        template: this.resizeEnable ? this.tempResize : this.tempFixed
      });
      const t = this.cropper.getCropperSelection();
      t && (t.width = this.width, t.height = this.height, t.$center());
    },
    selectFile(e) {
      this.picture = "";
      const { files: t } = e.target;
      if (t && t[0]) {
        const a = t[0], l = new FileReader();
        l.readAsDataURL(a), l.onload = () => {
          this.picture = String(l.result), this.showPopupFlag = !0, this.uploadInput && (this.uploadInput.value = "");
        };
      }
    },
    deleteCropFile() {
      ve.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        this.afterDelete ? typeof this.value == "object" && this.value[0] ? this.afterDelete(this.value[0]) : (this.picture = "", this.value = null) : (this.picture = "", this.value = null);
      }).catch(() => {
      });
    },
    async saveCropFile() {
      const e = this.cropper.getCropperSelection();
      if (e) {
        const t = await e.$toCanvas();
        t && (this.afterCroppered ? this.afterCroppered(t) : this.value = t.toDataURL());
      }
      this.picture = "", this.showPopupFlag = !1;
    },
    cancelCropFile() {
      this.picture = "", this.showPopupFlag = !1;
    },
    rotateImg() {
      const e = this.cropper.getCropperImage();
      e && e.$rotate(90 * Math.PI / 180);
    },
    flipImg() {
      const e = this.cropper.getCropperImage();
      e && e.$scale(-1, 1);
    }
  }
}), xr = { class: "crop-image" }, Gr = {
  key: 0,
  class: "crop-preview"
}, Yr = {
  key: 0,
  class: "preview-actions"
}, Jr = ["disabled"], Xr = ["disabled"], Qr = { key: 0 }, Zr = {
  role: "heading",
  class: "el-dialog__title"
}, ed = {
  ref: "cropperBox",
  class: "cropper-container"
}, td = { class: "dialog-footer" };
function ad(e, t, a, l, o, i) {
  const s = Bt, u = X("delete"), m = We, f = X("Plus"), c = we, _ = ie, $ = Ce;
  return n(), v(L, null, [
    C("ul", xr, [
      e.priviewDataURL ? (n(), v("li", Gr, [
        d(s, {
          style: te(`width: ${e.width}px; height: ${e.height}px`),
          src: e.priviewDataURL,
          fit: e.resizeEnable ? "none" : "cover"
        }, null, 8, ["style", "src", "fit"]),
        e.disabled ? b("", !0) : (n(), v("span", Yr, [
          e.disabled ? b("", !0) : (n(), v("span", {
            key: 0,
            class: "btn-action",
            onClick: t[0] || (t[0] = (...g) => e.deleteCropFile && e.deleteCropFile(...g))
          }, [
            d(m, null, {
              default: r(() => [
                d(u)
              ]),
              _: 1
            })
          ]))
        ]))
      ])) : b("", !0),
      e.priviewDataURL ? b("", !0) : (n(), v("button", {
        key: 1,
        class: x(["select-picture", { "select-disabled": e.disabled }]),
        style: te(`width: ${e.width}px; height: ${e.height}px`),
        disabled: e.disabled
      }, [
        d(m, null, {
          default: r(() => [
            d(f)
          ]),
          _: 1
        }),
        C("input", {
          ref: "uploadInput",
          type: "file",
          accept: "image/jpg, image/jpeg, image/png, image/gif",
          title: "",
          onChange: t[1] || (t[1] = (...g) => e.selectFile && e.selectFile(...g)),
          disabled: e.disabled
        }, null, 40, Xr)
      ], 14, Jr))
    ]),
    e.showPopupFlag ? (n(), v("div", Qr, [
      d($, {
        title: "Crop Picture",
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (g) => e.showPopupFlag = g),
        width: e.popupWidth,
        "show-close": !1,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        onOpened: e.onCropperImageOpen,
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        "destroy-on-close": !0
      }, {
        header: r(({ close: g, titleId: I, titleClass: F }) => [
          C("span", Zr, [
            d(c, { "icon-name": "crop-input" }),
            t[3] || (t[3] = D(" Crop Picture", -1))
          ])
        ]),
        footer: r(() => [
          C("div", td, [
            d(_, {
              plain: "",
              type: "success",
              onClick: e.saveCropFile
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "crop-input",
                  class: "mr-1"
                }),
                t[4] || (t[4] = D(" Crop", -1))
              ]),
              _: 1
            }, 8, ["onClick"]),
            e.flipEnable ? (n(), h(_, {
              key: 0,
              plain: "",
              onClick: e.flipImg
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "addon-flip-horizontal",
                  class: "mr-1"
                }),
                t[5] || (t[5] = D(" Flip", -1))
              ]),
              _: 1
            }, 8, ["onClick"])) : b("", !0),
            e.rotateEnable ? (n(), h(_, {
              key: 1,
              plain: "",
              onClick: e.rotateImg
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "el-refresh",
                  class: "mr-1"
                }),
                t[6] || (t[6] = D(" Rotate", -1))
              ]),
              _: 1
            }, 8, ["onClick"])) : b("", !0),
            d(_, {
              plain: "",
              onClick: e.cancelCropFile
            }, {
              default: r(() => [...t[7] || (t[7] = [
                D("Cancel", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        default: r(() => [
          C("div", ed, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue", "width", "onOpened"])
    ])) : b("", !0)
  ], 64);
}
const ES = /* @__PURE__ */ j(Kr, [["render", ad], ["__scopeId", "data-v-1ac4323d"]]), Ca = De({
  acePop: [],
  aceSnippet: [],
  memberSchema: {}
  // type-aware dot completion ของ context ปัจจุบัน
});
function ld() {
  return {
    state: Ca,
    /** set completer ของ context ปัจจุบัน — เรียกตอน view/dialog ที่มี code editor mounted */
    setCompleter(e = [], t = []) {
      Ca.acePop = e, Ca.aceSnippet = t;
    },
    /** set memberSchema (dot completion) ของ context — เช่น ApiFactory→apiMemberSchema, builder→fieldMemberSchema */
    setMemberSchema(e = {}) {
      Ca.memberSchema = e;
    }
  };
}
function At(e) {
  return Zn.define([
    { tag: he.comment, color: e.comment, fontStyle: "italic" },
    { tag: [he.keyword, he.modifier, he.controlKeyword, he.operatorKeyword], color: e.keyword },
    { tag: [he.string, he.special(he.string)], color: e.string },
    { tag: [he.number, he.bool, he.null], color: e.number },
    { tag: [he.function(he.variableName), he.function(he.propertyName)], color: e.func },
    { tag: [he.propertyName], color: e.property },
    { tag: [he.variableName, he.definition(he.variableName)], color: e.variable },
    { tag: [he.className, he.typeName], color: e.type },
    { tag: [he.operator, he.punctuation], color: e.operator },
    { tag: he.regexp, color: e.regexp }
  ]);
}
const Hl = {
  // default — ตัวเดิม (light: GitHub-ish, dark: One Dark) ← ค่าเริ่มต้น
  default: {
    light: At({ comment: "#6a737d", keyword: "#d73a49", string: "#22863a", number: "#005cc5", func: "#6f42c1", variable: "#24292e", type: "#6f42c1", property: "#005cc5", operator: "#24292e", regexp: "#032f62" }),
    dark: At({ comment: "#7d8799", keyword: "#c678dd", string: "#98c379", number: "#d19a66", func: "#61afef", variable: "#e5c07b", type: "#e5c07b", property: "#e06c75", operator: "#abb2bf", regexp: "#56b6c2" })
  },
  // GitHub — โทนมาตรฐาน คุ้นเคย
  github: {
    light: At({ comment: "#6e7781", keyword: "#cf222e", string: "#0a3069", number: "#0550ae", func: "#8250df", variable: "#1f2328", type: "#953800", property: "#0550ae", operator: "#24292e", regexp: "#0a3069" }),
    dark: At({ comment: "#8b949e", keyword: "#ff7b72", string: "#a5d6ff", number: "#79c0ff", func: "#d2a8ff", variable: "#e6edf3", type: "#ffa657", property: "#79c0ff", operator: "#e6edf3", regexp: "#a5d6ff" })
  },
  // VSCode — Light+ / Dark+ (default ของ VSCode)
  vscode: {
    light: At({ comment: "#008000", keyword: "#0000ff", string: "#a31515", number: "#098658", func: "#795e26", variable: "#001080", type: "#267f99", property: "#001080", operator: "#000000", regexp: "#811f3f" }),
    dark: At({ comment: "#6a9955", keyword: "#569cd6", string: "#ce9178", number: "#b5cea8", func: "#dcdcaa", variable: "#9cdcfe", type: "#4ec9b0", property: "#9cdcfe", operator: "#d4d4d4", regexp: "#d16969" })
  }
}, od = "default", id = tt.theme({
  "&": {
    color: "var(--el-text-color-primary)",
    backgroundColor: "var(--el-fill-color-blank)",
    fontSize: "13px",
    border: "1px solid var(--el-border-color)",
    borderRadius: "var(--el-border-radius-base)"
  },
  "&.cm-focused": { outline: "none", borderColor: "var(--el-color-primary)" },
  ".cm-content": {
    fontFamily: "'Fira Code', 'Consolas', 'Menlo', monospace",
    caretColor: "var(--el-color-primary)"
  },
  // fix line-height ตายตัว → minLines/maxLines แม่นยำเป็น "จำนวนบรรทัด" จริง (ต้องตรงกับ LINE_HEIGHT_PX)
  ".cm-line": { lineHeight: "20px" },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: "var(--el-color-primary)" },
  // selection: !important เพื่อชนะ '.cm-focused .cm-selectionBackground' default ของ CM (specificity สูงตอน focus)
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
    backgroundColor: "var(--el-color-primary-light-5) !important"
  },
  ".cm-content ::selection": { backgroundColor: "var(--el-color-primary-light-5)" },
  ".cm-gutters": {
    backgroundColor: "var(--el-fill-color-light)",
    color: "var(--el-text-color-secondary)",
    border: "none",
    borderRight: "1px solid var(--el-border-color-lighter)"
  },
  // active line: โปร่งแสง + โทนเทา (ไม่ทึบ, ไม่ชนโทนฟ้าของ selection) → selection ทะลุเห็นได้ ไม่บัง
  ".cm-activeLine": { backgroundColor: "color-mix(in srgb, var(--el-text-color-primary) 6%, transparent)" },
  ".cm-activeLineGutter": { backgroundColor: "var(--el-fill-color-dark)" },
  ".cm-foldPlaceholder": {
    backgroundColor: "var(--el-fill-color-dark)",
    border: "none",
    color: "var(--el-text-color-secondary)"
  },
  ".cm-matchingBracket, &.cm-focused .cm-matchingBracket": {
    backgroundColor: "var(--el-color-primary-light-8)",
    outline: "1px solid var(--el-color-primary-light-5)"
  },
  // autocomplete popup
  ".cm-tooltip": {
    backgroundColor: "var(--el-bg-color-overlay)",
    border: "1px solid var(--el-border-color)",
    borderRadius: "var(--el-border-radius-base)",
    boxShadow: "var(--el-box-shadow-light)",
    color: "var(--el-text-color-primary)"
  },
  ".cm-tooltip-autocomplete > ul > li": { padding: "2px 6px" },
  ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
    backgroundColor: "var(--el-color-primary)",
    color: "var(--el-color-white)"
  },
  ".cm-completionDetail": { color: "var(--el-text-color-secondary)", fontStyle: "italic", marginLeft: "8px" },
  ".cm-completionIcon": { color: "var(--el-text-color-secondary)", opacity: "0.8" }
});
function ql(e) {
  return {
    label: e.caption ?? e.value ?? "",
    apply: e.value ?? e.caption ?? "",
    detail: e.meta ?? "",
    type: "variable",
    boost: typeof e.score == "number" ? e.score : 0
  };
}
function nd(e, t) {
  if (!Array.isArray(t)) return [];
  const a = [];
  for (const l of t) {
    if (!l || l.message == null) continue;
    const o = Math.min(Math.max(Number(l.line) || 1, 1), e.lines), i = e.line(o);
    a.push({ from: i.from, to: i.to, severity: l.severity || "error", message: String(l.message) });
  }
  return a;
}
function sd(e) {
  const t = (String(e.content ?? "").split(`
`)[0] ?? "").slice(0, 40);
  return Ha(String(e.content ?? ""), {
    label: e.name ?? t,
    detail: t,
    type: "snippet",
    boost: -1
    // ให้ acePop ขึ้นก่อน snippet เล็กน้อย
  });
}
function rd(e) {
  if (typeof e == "string") return { label: e, type: "property" };
  const t = e.apply ?? e.label;
  return typeof t == "string" && /\$\{|\$\d/.test(t) ? Ha(t, { label: e.label, detail: e.detail, type: e.type ?? "method" }) : { label: e.label, apply: t, detail: e.detail, type: e.type ?? "method" };
}
const ei = 8, Q = (e, t) => ({ label: e, apply: t ?? e, type: "method" }), dd = {
  $Array: [
    { label: "length", type: "property" },
    Q("map", "map(${1:fn})"),
    Q("filter", "filter(${1:fn})"),
    Q("forEach", "forEach(${1:fn})"),
    Q("reduce", "reduce(${1:fn}, ${2:init})"),
    Q("find", "find(${1:fn})"),
    Q("findIndex", "findIndex(${1:fn})"),
    Q("some", "some(${1:fn})"),
    Q("every", "every(${1:fn})"),
    Q("includes", "includes(${1:val})"),
    Q("indexOf", "indexOf(${1:val})"),
    Q("join", "join(${1:sep})"),
    Q("slice", "slice(${1:start}, ${2:end})"),
    Q("splice", "splice(${1:start}, ${2:count})"),
    Q("concat", "concat(${1:arr})"),
    Q("push", "push(${1:val})"),
    Q("pop", "pop()"),
    Q("shift", "shift()"),
    Q("unshift", "unshift(${1:val})"),
    Q("sort", "sort(${1:fn})"),
    Q("reverse", "reverse()"),
    Q("flat", "flat()"),
    Q("keys", "keys()"),
    Q("values", "values()"),
    Q("entries", "entries()")
  ],
  $String: [
    { label: "length", type: "property" },
    Q("toLowerCase", "toLowerCase()"),
    Q("toUpperCase", "toUpperCase()"),
    Q("trim", "trim()"),
    Q("split", "split(${1:sep})"),
    Q("replace", "replace(${1:pat}, ${2:rep})"),
    Q("replaceAll", "replaceAll(${1:pat}, ${2:rep})"),
    Q("slice", "slice(${1:start}, ${2:end})"),
    Q("substring", "substring(${1:start}, ${2:end})"),
    Q("includes", "includes(${1:val})"),
    Q("indexOf", "indexOf(${1:val})"),
    Q("startsWith", "startsWith(${1:val})"),
    Q("endsWith", "endsWith(${1:val})"),
    Q("padStart", "padStart(${1:len}, ${2:pad})"),
    Q("padEnd", "padEnd(${1:len}, ${2:pad})"),
    Q("charAt", "charAt(${1:i})"),
    Q("match", "match(${1:re})"),
    Q("repeat", "repeat(${1:n})"),
    Q("toString", "toString()")
  ],
  $Number: [Q("toFixed", "toFixed(${1:digits})"), Q("toString", "toString()"), Q("toPrecision", "toPrecision(${1:p})")]
};
function ti(e, t) {
  return t ? Array.isArray(t) ? t : e.$types?.[t] ?? dd[t] ?? null : null;
}
function dt(e, t) {
  return t.slice(e.from, e.to);
}
function gt(e, t) {
  for (let a = e?.firstChild; a; a = a.nextSibling) if (a.name === t) return a;
  return null;
}
function dl(e) {
  let t = e?.lastChild;
  for (; t && (t.name === ")" || t.name === "]" || t.name === ";" || t.name === "await"); ) t = t.prevSibling;
  return t;
}
function ul(e, t, a) {
  const l = ti(e, t);
  return l ? l.find((o) => (typeof o == "string" ? o : o.label) === a) ?? null : null;
}
function ta(e, t, a, l, o) {
  if (!t || o > ei) return null;
  switch (t.name) {
    case "AwaitExpression":
    case "ParenthesizedExpression":
      return ta(e, dl(t), a, l, o + 1);
    case "this":
      return e.this ?? null;
    case "VariableName":
      return Wl(e, dt(t, a), l, o + 1);
    case "CallExpression": {
      const i = t.firstChild;
      if (!i) return null;
      if (i.name === "MemberExpression") {
        const s = ta(e, i.firstChild, a, l, o + 1), u = gt(i, "PropertyName");
        return ul(e, s, u ? dt(u, a) : "")?.returns ?? null;
      }
      return i.name === "VariableName" ? Wl(e, dt(i, a), l, o + 1) : null;
    }
    case "MemberExpression": {
      const i = ta(e, t.firstChild, a, l, o + 1), s = gt(t, "PropertyName");
      return ul(e, i, s ? dt(s, a) : "")?.returns ?? null;
    }
    // literal → type ของ JS เอง
    case "ObjectExpression": {
      const i = [];
      for (let s = t.firstChild; s; s = s.nextSibling) {
        if (s.name !== "Property") continue;
        const u = gt(s, "PropertyDefinition") || gt(s, "PropertyName");
        u && i.push({ label: dt(u, a), type: "property" });
      }
      return i;
    }
    case "ArrayExpression":
      return "$Array";
    case "String":
      return "$String";
    case "Number":
      return "$Number";
  }
  return null;
}
function Wl(e, t, a, l) {
  if (!t || t === "$types" || l > ei) return null;
  const o = e[t];
  if (typeof o == "string" || Array.isArray(o)) return o;
  const i = ud(a, t);
  if (!i) return null;
  let s = ta(e, i.rhs, a.docText, a, l + 1);
  return i.property && (s = ul(e, s, i.property)?.returns ?? null), s;
}
function ud(e, t) {
  const { docTree: a, docText: l, beforePos: o } = e;
  let i = null;
  const s = (u, m, f) => {
    m && u < o && (!i || u > i.from) && (i = { from: u, rhs: m, property: f });
  };
  return a.iterate({
    enter(u) {
      if (u.from >= o) return;
      const m = u.node;
      if (m.name === "VariableDeclaration") {
        const f = gt(m, "Equals");
        if (!f) return;
        const c = dl(m);
        for (let _ = m.firstChild; _ && _ !== f; _ = _.nextSibling)
          _.name === "VariableDefinition" && dt(_, l) === t ? s(_.from, c, null) : _.name === "ObjectPattern" && pd(_, l, t) && s(_.from, c, t);
      } else if (m.name === "AssignmentExpression") {
        const f = m.firstChild;
        f && f.name === "VariableName" && dt(f, l) === t && s(f.from, dl(m), null);
      }
    }
  }), i;
}
function pd(e, t, a) {
  for (let l = e.firstChild; l; l = l.nextSibling) {
    if (l.name !== "PatternProperty") continue;
    const o = gt(l, "VariableDefinition") || gt(l, "PropertyName");
    if (o && dt(o, t) === a) return !0;
  }
  return !1;
}
function md(e) {
  let t = 0, a = "", l = e.length - 1;
  for (; l >= 0; l--) {
    const o = e[l];
    if (a) {
      o === a && e[l - 1] !== "\\" && (a = "");
      continue;
    }
    if (o === '"' || o === "'" || o === "`") {
      a = o;
      continue;
    }
    if (o === ")" || o === "]" || o === "}") t++;
    else if (o === "(" || o === "[" || o === "{") {
      if (t === 0) break;
      t--;
    } else if (t === 0 && /[\s;=+\-*/%<>!&|,?:]/.test(o)) break;
  }
  return e.slice(l + 1);
}
function hd(e, t, a) {
  let o = Zo.parse(t).topNode.firstChild;
  return o && o.name === "ExpressionStatement" && (o = o.firstChild), ti(e, ta(e, o, t, a, 0));
}
function Kl(e) {
  const t = String(e ?? "").trim();
  return t ? /^\d+(\.\d+)?$/.test(t) ? `${t}px` : t : "";
}
const fd = {
  Math,
  JSON,
  Object,
  Array,
  String,
  Number,
  Boolean,
  Date,
  Promise,
  RegExp,
  Map,
  Set,
  Symbol,
  parseInt,
  parseFloat,
  isNaN,
  isFinite,
  encodeURIComponent,
  decodeURIComponent,
  console
}, cd = ns(fd), fe = (e, t, a) => Ha(t ?? e, { label: e, detail: a ?? "Vue directive", type: "keyword" }), bd = [
  fe("v-if", 'v-if="${1:condition}"', "conditional"),
  fe("v-else-if", 'v-else-if="${1:condition}"'),
  fe("v-else", "v-else"),
  fe("v-for", 'v-for="${1:item} in ${2:list}"', "list render"),
  fe("v-show", 'v-show="${1:condition}"'),
  fe("v-model", 'v-model="${1:value}"', "two-way bind"),
  fe("v-bind", 'v-bind:${1:attr}="${2:value}"', "bind (: shorthand)"),
  fe("v-on", 'v-on:${1:event}="${2:handler}"', "event (@ shorthand)"),
  fe("v-slot", "v-slot:${1:name}", "slot (# shorthand)"),
  fe("v-html", 'v-html="${1:html}"'),
  fe("v-text", 'v-text="${1:text}"'),
  fe("v-pre", "v-pre"),
  fe("v-once", "v-once"),
  fe("v-cloak", "v-cloak"),
  fe("v-memo", 'v-memo="${1:deps}"'),
  fe("@click", '@click="${1:handler}"', "event shorthand"),
  fe("@input", '@input="${1:handler}"'),
  fe("@change", '@change="${1:handler}"'),
  fe("@submit", '@submit.prevent="${1:handler}"'),
  fe(":class", ':class="${1:value}"', "bind shorthand"),
  fe(":style", ':style="${1:value}"'),
  fe(":key", ':key="${1:value}"'),
  fe(":value", ':value="${1:value}"'),
  fe(":disabled", ':disabled="${1:value}"')
], bt = (e, t, a) => Ha(t, { label: e, detail: a ?? "LaTeX template", type: "keyword" }), gd = [
  bt("\\VAR", "\\VAR{${1:field}}", "output value (auto-escape)"),
  bt("\\BLOCK for", "\\BLOCK{for ${1:row} in ${2:rows}}\n	$0\n\\BLOCK{endfor}", "loop rows"),
  bt("\\BLOCK if", `\\BLOCK{if \${1:condition}}
	$0
\\BLOCK{endif}`, "conditional (raw value)"),
  bt("\\BLOCK else", "\\BLOCK{else}", "else branch"),
  bt("\\BLOCK endfor", "\\BLOCK{endfor}", "end loop"),
  bt("\\BLOCK endif", "\\BLOCK{endif}", "end if"),
  bt("\\#{ }", "\\#{${1:comment}}", "comment (not rendered)")
], yd = B({
  name: "SdCodeMirror",
  emits: ["update:value", "init", "onChange", "onInput", "onBlur", "onFocus"],
  props: {
    value: { type: String, default: "" },
    lang: { type: String, default: "javascript" },
    // js/javascript | json | nosql | html | vue | sql | pgsql | latex/stex
    theme: { type: String, default: "" },
    // Ace theme name (ส่งมา = infer dark/light เพื่อ drop-in; ไม่ส่ง = ตาม useDark ของแอป)
    syntaxTheme: { type: String, default: "default" },
    // palette: 'default' (One Dark) | 'github' | 'vscode'
    dark: { type: Boolean, default: void 0 },
    // explicit override; undefined = auto
    readonly: { type: Boolean, default: !1 },
    wrap: { type: Boolean, default: !1 },
    options: { type: Object, default: () => ({}) },
    // { enableLiveAutocompletion, ... } (Ace compat)
    placeholder: { type: String, default: "" },
    minLines: { type: Number, default: void 0 },
    // จำกัดความสูงเป็น "จำนวนบรรทัด"
    maxLines: { type: Number, default: void 0 },
    // เกินจำนวนนี้ → scroll
    minHeight: { type: String, default: "300" },
    // ใช้เมื่อไม่ได้ระบุ minLines (เลขล้วน=px, หรือ '50vh')
    maxHeight: { type: String, default: "" },
    // ทางเลือก: กำหนด max เป็น px/vh ตรงๆ (เหนือกว่า maxLines)
    // autocomplete data (รับ format Ace เดิมได้เลย)
    acePop: { type: Array, default: () => [] },
    aceSnippet: { type: Array, default: () => [] },
    memberSchema: { type: Object, default: () => ({}) },
    // typed schema (ดู comment ที่ helper inference)
    autoBeautify: { type: Boolean, default: !1 },
    // beautify อัตโนมัติตอน load (เหมาะ editor แสดงผล/readonly)
    diagnostics: { type: Array, default: () => [] }
    // external diagnostics [{ line, message, severity? }] — เช่น LaTeX compile error
  },
  setup() {
    const e = de(), t = ld();
    return { isDark: e, cmCompleter: t };
  },
  data() {
    return {};
  },
  computed: {
    // dark/light: explicit prop > infer จากชื่อ ace theme (drop-in) > ตามธีมแอป
    isDarkMode() {
      if (typeof this.dark == "boolean") return this.dark;
      const e = (this.theme || "").toLowerCase();
      return /(night|dark|dracula|monokai|twilight|cobalt|merbivore|terminal|vibrant|ambiance|chaos|mono_industrial|pastel_on_dark|solarized_dark|idle_fingers)/.test(e) ? !0 : e && /(sqlserver|light|chrome|clouds$|dawn|dreamweaver|eclipse|github|textmate|tomorrow$|xcode|kuroir|katzenmilch|crimson|solarized_light)/.test(e) ? !1 : !!this.isDark;
    },
    liveAutocomplete() {
      return (this.options || {}).enableLiveAutocompletion !== !1;
    }
  },
  mounted() {
    this._build();
  },
  beforeUnmount() {
    this._destroyed = !0, this._view?.destroy();
  },
  methods: {
    // ===== สร้าง editor =====
    async _build() {
      this._cLang = new Yt(), this._cTheme = new Yt(), this._cReadonly = new Yt(), this._cWrap = new Yt(), this._cHeight = new Yt(), this._contentBackup = this.value, this._isSettingContent = !1, this._snippetCache = { src: null, items: [] };
      const e = await this._loadLangExt(this.lang);
      if (this._destroyed) return;
      const t = el.create({
        doc: this.value,
        extensions: this._extensions(e)
      });
      this._view = Uo(
        new tt({
          state: t,
          parent: this.$refs.host
        })
      ), this.$emit("init", this._view), this.autoBeautify && this.beautify();
    },
    _extensions(e) {
      const t = this;
      return [
        An(),
        En(),
        On(),
        Hn(),
        Yn(),
        Ln(),
        Bn(),
        el.allowMultipleSelections.of(!0),
        Jn(),
        Xn(),
        ts(),
        Nn(),
        jn(),
        Un(),
        Rn(this.placeholder || ""),
        as({
          override: [
            (a) => t._memberSource(a),
            (a) => t._flatSource(a),
            // JS มาตรฐาน (เฉพาะ lang js): local var/keyword + global API (Math/JSON/console...)
            (a) => t._isJsLang() ? rs(a) : null,
            (a) => t._isJsLang() ? cd(a) : null,
            // Vue directive (v-if/v-for/@/:) — เฉพาะ lang vue
            (a) => t._vueDirectiveSource(a),
            // LaTeX template (\VAR/\BLOCK directive + field/param names ใน brace) — เฉพาะ lang latex/stex
            (a) => t._latexCompletionSource(a),
            // ภาษาอื่น (html/sql/pgsql/vue/css): completion ในตัวของภาษานั้น
            (a) => t._isJsLang() ? null : t._langDataCompletion(a)
          ],
          activateOnTyping: this.liveAutocomplete,
          icons: !0
        }),
        zn.of([
          { key: "Mod-Alt-l", preventDefault: !0, run: () => (t.beautify(), !0) },
          // format code (Ctrl/Cmd+Alt+L)
          ...ls,
          ...qn,
          ...Wn,
          ...os,
          ...Qn,
          Kn
        ]),
        // syntax error: เส้นหยัก + gutter marker + tooltip real-time (linter เช็ค lang เอง → js เท่านั้น)
        this._jsLinter(),
        this._externalLinter(),
        is(),
        // dynamic compartments
        this._cLang.of(e),
        this._cTheme.of(this._themeExt()),
        this._cReadonly.of(this._readonlyExt()),
        this._cWrap.of(this.wrap ? tt.lineWrapping : []),
        // static + height (compartment → reactive ตาม minLines/maxLines/maxHeight)
        id,
        this._cHeight.of(this._heightExt()),
        tt.updateListener.of((a) => {
          if (!a.docChanged || t._isSettingContent) return;
          const l = a.state.doc.toString();
          t._contentBackup = l, t.$emit("update:value", l), t.$emit("onChange", l), t.$emit("onInput", l);
        }),
        tt.domEventHandlers({
          blur: (a) => t.$emit("onBlur", a),
          focus: (a) => t.$emit("onFocus", a)
        })
      ];
    },
    // ===== extension factories =====
    _isJsLang() {
      const e = (this.lang || "").toLowerCase();
      return e === "javascript" || e === "js";
    },
    /** Vue directive completion (v-if/v-for/@/:) — เฉพาะ lang vue, ในตำแหน่ง attribute เท่านั้น */
    _vueDirectiveSource(e) {
      if ((this.lang || "").toLowerCase() !== "vue") return null;
      const t = e.matchBefore(/[@:#]?[\w-]*$/);
      if (!t) return null;
      const a = Ll(e.state).resolveInner(e.pos, -1);
      let l = !1, o = !1;
      for (let i = a; i; i = i.parent)
        (i.name === "OpenTag" || i.name === "SelfClosingTag") && (l = !0), i.name === "TagName" && (o = !0);
      return !l || o ? null : { from: t.from, options: bd, validFor: /^[@:#]?[\w-]*$/ };
    },
    /** LaTeX template completion — เฉพาะ lang latex/stex: ใน \VAR{}/\BLOCK{} → field/param names (จาก acePop) · หลัง `\` → directive snippet */
    _latexCompletionSource(e) {
      if (!/^(latex|stex|tex)$/i.test(this.lang || "")) return null;
      const t = e.state.doc.lineAt(e.pos), a = e.state.sliceDoc(t.from, e.pos);
      if (/\\(?:VAR|BLOCK)\{[^{}]*$/.test(a)) {
        const o = (this.acePop || []).map(ql);
        if (!o.length) return null;
        const i = e.matchBefore(/[\w.$]*$/);
        return { from: i ? i.from : e.pos, options: o, validFor: /^[\w.$]*$/ };
      }
      const l = a.match(/\\([A-Za-z]*)$/);
      return l ? { from: e.pos - (l[1] ?? "").length - 1, options: gd, validFor: /^\\[A-Za-z]*$/ } : null;
    },
    /** completion ของภาษาปัจจุบัน (html tag/attr, sql keyword, vue nested) ผ่าน language data */
    async _langDataCompletion(e) {
      const t = e.state.languageDataAt("autocomplete", e.pos);
      for (const a of t) {
        const l = typeof a == "function" ? await a(e) : Array.isArray(a) ? es(a)(e) : null;
        if (l) return l;
      }
      return null;
    },
    /** โหลด language extension — js sync (core), ภาษาอื่น lazy (dynamic import → vite code-split) */
    async _loadLangExt(e) {
      switch ((e || "javascript").toLowerCase()) {
        case "json":
        case "nosql":
          return (await import("@codemirror/lang-json")).json();
        case "css":
          return (await import("@codemirror/lang-css")).css();
        case "html":
          return (await import("@codemirror/lang-html")).html();
        case "vue":
          return (await import("@codemirror/lang-vue")).vue();
        case "sql": {
          const t = await import("@codemirror/lang-sql");
          return t.sql({ dialect: t.StandardSQL });
        }
        case "pgsql":
        case "postgresql": {
          const t = await import("@codemirror/lang-sql");
          return t.sql({ dialect: t.PostgreSQL });
        }
        case "latex":
        case "stex":
        case "tex":
          return Gn.define((await import("@codemirror/legacy-modes/mode/stex")).stex);
        default:
          return ss();
      }
    },
    _themeExt() {
      const e = Hl[this.syntaxTheme] ?? Hl[od], t = this.isDarkMode ? e.dark : e.light;
      return [xn(t), tt.theme({}, { dark: this.isDarkMode })];
    },
    _readonlyExt() {
      return [el.readOnly.of(this.readonly), tt.editable.of(!this.readonly)];
    },
    _heightStyle() {
      const t = {};
      return t.minHeight = this.minLines ? `${this.minLines * 20}px` : Kl(this.minHeight), this.maxHeight ? t.maxHeight = Kl(this.maxHeight) : this.maxLines && (t.maxHeight = `${this.maxLines * 20}px`), t;
    },
    _heightExt() {
      return tt.theme({ "&": this._heightStyle() });
    },
    // ===== completion sources =====
    /** member-aware + type inference: `sdform.` (var) / chain / object-array literal → method ตาม type */
    _memberSource(e) {
      if (/^(pgsql|postgresql)$/i.test(this.lang || "")) return null;
      const t = this._effMemberSchema();
      if (!t || !Object.keys(t).length) return null;
      const a = e.state.doc.lineAt(e.pos), o = e.state.sliceDoc(a.from, e.pos).match(/\.([\w$]*)$/);
      if (!o) return null;
      const i = e.pos - (o[1] ?? "").length - 1, s = md(e.state.sliceDoc(a.from, i));
      if (!s) return null;
      const u = {
        docText: e.state.doc.toString(),
        docTree: Ll(e.state),
        beforePos: i - s.length
        // จุดเริ่ม chain → decl ต้องอยู่ก่อนหน้านี้
      }, m = hd(t, s, u);
      return !m || !m.length ? null : {
        from: i + 1,
        options: m.map(rd),
        validFor: /^[\w$]*$/
      };
    },
    /** lang=vue เป็น template editor (scope = data/params) → ไม่ดึง JS completer ของ context อื่น (form event/api) จาก global store */
    _skipGlobalCompleter() {
      return (this.lang || "").toLowerCase() === "vue";
    },
    /** acePop/aceSnippet ที่ใช้จริง: props ถ้าส่งมา ไม่งั้น fallback global store (useCmCompleter) — เว้น vue template */
    _effAcePop() {
      return this.acePop?.length ? this.acePop : this._skipGlobalCompleter() ? [] : this.cmCompleter.state.acePop;
    },
    _effAceSnippet() {
      return this.aceSnippet?.length ? this.aceSnippet : this._skipGlobalCompleter() ? [] : this.cmCompleter.state.aceSnippet;
    },
    /** memberSchema: props ถ้าส่งมา ($types/keys) ไม่งั้น fallback global store (context set ไว้) — เว้น vue template */
    _effMemberSchema() {
      const e = this.memberSchema;
      return e && Object.keys(e).length ? e : this._skipGlobalCompleter() ? {} : this.cmCompleter.state.memberSchema || {};
    },
    /** flat: acePop + aceSnippet (อ่าน array ปัจจุบันทุกครั้ง → dynamic add/remove ใช้ได้เลย) */
    _flatSource(e) {
      if (/^(pgsql|postgresql)$/i.test(this.lang || "")) return null;
      const t = e.matchBefore(/[\w$]*/);
      if (!t || t.from === t.to && !e.explicit) return null;
      const a = this._effAcePop(), l = this._effAceSnippet();
      this._snippetCache.src !== l && (this._snippetCache = { src: l, items: (l || []).map(sd) });
      const o = [...(a || []).map(ql), ...this._snippetCache.items];
      return o.length ? { from: t.from, options: o, validFor: /^[\w$]*$/ } : null;
    },
    // ===== public API (compat กับ SdAceEditor) =====
    focus() {
      this._view?.focus();
    },
    blur() {
      this._view?.contentDOM?.blur();
    },
    selectAll() {
      this._view && this._view.dispatch({ selection: { anchor: 0, head: this._view.state.doc.length } });
    },
    /** format code ทั้งเอกสาร (js-beautify) — เรียกผ่าน ref หรือกด Mod-Alt-L (Ctrl/Cmd+Alt+L) · sql/pgsql ไม่รองรับ */
    async beautify() {
      if (!this._view) return;
      const e = this._view.state.doc.toString(), t = await this._runBeautify(e);
      t != null && t !== e && this._setDoc(t);
    },
    async _runBeautify(e) {
      if (!e.trim()) return null;
      const t = (this.lang || "javascript").toLowerCase(), a = await import("js-beautify"), l = a.html ? a : a.default, o = { indent_with_tabs: !0, preserve_newlines: !0, max_preserve_newlines: 2, end_with_newline: !1, wrap_line_length: 0 };
      switch (t) {
        case "html":
        case "vue":
          return l.html(e, o);
        case "css":
          return l.css(e, o);
        case "json":
        case "nosql":
        case "js":
        case "javascript":
          return l.js(e, o);
        default:
          return null;
      }
    },
    setValue(e) {
      this._setDoc(e ?? "");
    },
    getValue() {
      return this._view ? this._view.state.doc.toString() : this.value;
    },
    getEditorAnnotations() {
      if (!this._view || !this._isJsLang()) return [];
      const e = this._view.state.doc;
      return this._jsSyntaxErrors(e.toString()).map((t) => {
        const a = e.lineAt(t.from);
        return { row: a.number - 1, column: t.from - a.from, text: "Syntax error", type: "error" };
      });
    },
    /**
     * หา syntax error ของโค้ด JS ด้วย Lezer parser → คืนช่วง { from, to } ใน "โค้ดจริง"
     * โค้ด event/API รันใน async function wrapper ตอน runtime → wrap ก่อน parse
     * กัน false-positive จาก top-level await/return ที่จริงๆ ถูกต้อง
     * ใช้ร่วมกันทั้ง gate (getEditorAnnotations) และ visual lint (_jsLinter)
     */
    _jsSyntaxErrors(e) {
      const t = `(async function () {
`, a = t.length, l = e.length, o = t + e + `
})`, i = (f) => Math.min(Math.max(f - a, 0), l), s = [], u = /* @__PURE__ */ new Set(), m = Zo.parse(o).cursor();
      do {
        if (!m.type.isError) continue;
        let f = i(m.from), c = Math.max(i(m.to), f);
        f === c && (c < l ? c++ : f = Math.max(0, f - 1)), !u.has(f) && (u.add(f), s.push({ from: f, to: c }));
      } while (m.next());
      return s;
    },
    /** CodeMirror linter — เส้นหยัก + gutter marker + tooltip แบบ real-time (เฉพาะ JS) */
    _jsLinter() {
      const e = this;
      return Nl((t) => e._isJsLang() ? e._jsSyntaxErrors(t.state.doc.toString()).map((a) => ({
        from: a.from,
        to: a.to,
        severity: "error",
        message: "Syntax error"
      })) : []);
    },
    /** linter รับ diagnostics จากภายนอก (prop `diagnostics` หรือ method `setDiagnostics`) — ทุก lang เช่น LaTeX compile error */
    _externalLinter() {
      const e = this;
      return Nl((t) => nd(t.state.doc, e._extDiag ?? e.diagnostics));
    },
    /** ป้อน diagnostics แบบ imperative ผ่าน ref → override prop `diagnostics` · ส่ง [] = เคลียร์ */
    setDiagnostics(e) {
      this._extDiag = Array.isArray(e) ? e : [], this._view && Bl(this._view);
    },
    /** เพิ่ม completion items แบบ imperative (เก็บต่อท้าย acePop ปัจจุบัน) */
    addCompleter(e) {
      Array.isArray(e) && this.acePop.push(...e);
    },
    /** เพิ่ม snippet items แบบ imperative */
    addSnippet(e) {
      Array.isArray(e) && this.aceSnippet.push(...e);
    },
    // ===== internal =====
    _setDoc(e) {
      if (this._view && this._contentBackup !== e) {
        try {
          this._isSettingContent = !0, this._view.dispatch({
            changes: { from: 0, to: this._view.state.doc.length, insert: e }
          });
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = e;
      }
    }
  },
  watch: {
    value(e) {
      this._contentBackup !== e && this._setDoc(e);
    },
    isDarkMode() {
      this._view?.dispatch({ effects: this._cTheme.reconfigure(this._themeExt()) });
    },
    syntaxTheme() {
      this._view?.dispatch({ effects: this._cTheme.reconfigure(this._themeExt()) });
    },
    readonly() {
      this._view?.dispatch({ effects: this._cReadonly.reconfigure(this._readonlyExt()) });
    },
    async lang(e) {
      const t = await this._loadLangExt(e);
      this.lang !== e || !this._view || this._view.dispatch({ effects: this._cLang.reconfigure(t) });
    },
    wrap(e) {
      this._view?.dispatch({ effects: this._cWrap.reconfigure(e ? tt.lineWrapping : []) });
    },
    minLines() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    maxLines() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    minHeight() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    maxHeight() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    diagnostics: {
      deep: !0,
      handler() {
        this._extDiag = null, this._view && Bl(this._view);
      }
    }
  }
}), vd = {
  ref: "host",
  class: "sd-codemirror"
};
function wd(e, t, a, l, o, i) {
  return n(), v("div", vd, null, 512);
}
const ai = /* @__PURE__ */ j(yd, [["render", wd]]), Sd = B({
  name: "Menubar",
  components: {},
  props: {
    editor: {
      type: Ht,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    generateCommandButtonComponentSpecs() {
      return this.editor.extensionManager.extensions.reduce((t, a) => {
        const { button: l } = a.options;
        if (!l || typeof l != "function") return t;
        const o = l({
          editor: this.editor,
          t: this.t,
          extension: a
        });
        return Array.isArray(o) ? [...t, ...o] : [...t, o];
      }, []);
    }
  }
}), _d = { class: "el-tiptap-editor__menu-bar" };
function Fd(e, t, a, l, o, i) {
  return n(), v("div", _d, [
    (n(!0), v(L, null, G(e.generateCommandButtonComponentSpecs(), (s, u) => (n(), h(zt(s.component), ae({
      key: "command-button" + u,
      "enable-tooltip": e.enableTooltip
    }, { ref_for: !0 }, s.componentProps, { readonly: e.isCodeViewMode }, Ro(s.componentEvents || {})), null, 16, ["enable-tooltip", "readonly"]))), 128))
  ]);
}
const li = /* @__PURE__ */ j(Sd, [["render", Fd]]);
function kd() {
}
function oi(e, t, a) {
  return e < t ? t : e > a ? a : e;
}
function Cd(e) {
  const t = new FileReader();
  return new Promise((a, l) => {
    t.onload = (o) => a(o.target.result), t.onerror = l, t.readAsDataURL(e);
  });
}
const Dd = B({
  name: "icon",
  props: {
    name: String
  },
  computed: {
    icon() {
      return `editor-${this.name}`;
    }
  }
});
function Id(e, t, a, l, o, i) {
  const s = we;
  return n(), h(s, {
    "icon-name": e.icon,
    class: "text-4"
  }, null, 8, ["icon-name"]);
}
const ii = /* @__PURE__ */ j(Dd, [["render", Id]]), $d = B({
  components: {
    ElTooltip: In,
    VIcon: ii
  },
  props: {
    icon: {
      type: String,
      required: !0
    },
    isActive: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      required: !0
    },
    enableTooltip: {
      type: Boolean,
      required: !0
    },
    command: {
      type: Function,
      default: kd
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "top"
    }
  },
  computed: {
    commandButtonClass() {
      return {
        "el-tiptap-editor__command-button": !0,
        "el-tiptap-editor__command-button--active": this.isActive,
        "el-tiptap-editor__command-button--readonly": this.readonly
      };
    }
  },
  methods: {
    onClick() {
      this.readonly || this.command();
    }
  }
});
function Td(e, t, a, l, o, i) {
  const s = X("v-icon"), u = ml;
  return n(), v("div", null, [
    d(u, {
      content: e.tooltip,
      "show-after": 350,
      disabled: !e.enableTooltip || e.readonly,
      effect: "dark",
      placement: e.placement
    }, {
      default: r(() => [
        C("span", {
          class: x(e.commandButtonClass),
          onMousedown: t[0] || (t[0] = U(() => {
          }, ["prevent"])),
          onClick: t[1] || (t[1] = (...m) => e.onClick && e.onClick(...m))
        }, [
          d(s, { name: e.icon }, null, 8, ["name"])
        ], 34)
      ]),
      _: 1
    }, 8, ["content", "disabled", "placement"])
  ]);
}
const H = /* @__PURE__ */ j($d, [["render", Td]]);
function ha(e) {
  const { selection: t, doc: a } = e, { from: l, to: o } = t;
  let i = !0, s = !1;
  return a.nodesBetween(l, o, (u) => {
    const m = u.type.name;
    return i && (m === "table" || m === "table_row" || m === "table_column" || m === "table_cell") && (i = !1, s = !0), i;
  }), s;
}
function Pd(e) {
  return ha(e) && cs(e);
}
function Md(e) {
  return ha(e) && fs(e);
}
const Vd = B({
  name: "MergeCellCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  computed: {
    isTableActive() {
      return ha(this.editor.state);
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    mergeCell() {
      return this.editor.commands.mergeCells();
    },
    splitCell() {
      return this.editor.commands.splitCell();
    },
    toggleHeaderCell() {
      return this.editor.commands.toggleHeaderCell();
    },
    alignLeft() {
      return this.editor.commands.unsetTextAlign();
    },
    alignCenter() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "center" }) ? e.unsetTextAlign() : e.setTextAlign("center");
    },
    alignRight() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "right" }) ? e.unsetTextAlign() : e.setTextAlign("right");
    },
    alignJustify() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "justify" }) ? e.unsetTextAlign() : e.setTextAlign("justify");
    }
  }
});
function Ad(e, t, a, l, o, i) {
  const s = H;
  return n(), v(L, null, [
    d(s, {
      command: e.mergeCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Table.buttons.merge_cells"),
      readonly: !e.isTableActive,
      icon: "merge-cells"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.splitCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Table.buttons.split_cell"),
      readonly: !e.isTableActive,
      icon: "split-cells"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.toggleHeaderCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Header Cell",
      readonly: !e.isTableActive,
      icon: "table-header"
    }, null, 8, ["command", "enable-tooltip", "readonly"]),
    d(s, {
      command: e.alignLeft,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_left.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-left"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.alignCenter,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "center" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_center.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-center"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"]),
    d(s, {
      command: e.alignRight,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "right" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_right.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-right"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"]),
    d(s, {
      command: e.alignJustify,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "justify" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_justify.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-justify"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"])
  ], 64);
}
const ni = /* @__PURE__ */ j(Vd, [["render", Ad]]), Ed = B({
  name: "MergeCellBubbleMenu",
  components: {
    MergeCellCommandButton: ni
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  }
}), Od = { class: "mergecell-bubble-menu" };
function Ld(e, t, a, l, o, i) {
  const s = ni;
  return n(), v("div", Od, [
    d(s, { editor: e.editor }, null, 8, ["editor"])
  ]);
}
const si = /* @__PURE__ */ j(Ed, [["render", Ld]]), Bd = B({
  name: "UnlinkCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    unlink() {
      return this.editor.commands.unsetLink();
    }
  }
});
function Nd(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.unlink,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Link.unlink.tooltip"),
    icon: "unlink"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const ri = /* @__PURE__ */ j(Bd, [["render", Nd]]), jd = B({
  name: "EditLinkCommandButton",
  components: {
    ElDialog: qt,
    ElForm: ma,
    ElFormItem: pa,
    ElInput: Tt,
    ElCheckbox: ua,
    ElButton: $t,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    },
    initLinkAttrs: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: this.initLinkAttrs,
      editLinkDialogVisible: !1,
      popupWidth: "40%"
    };
  },
  mounted() {
    this.popupWidth = le("40%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    updateLinkAttrs() {
      let e = this.editor.commands;
      this.linkAttrs.openInNewTab ? e.setLink({
        href: this.linkAttrs.href,
        target: "_blank"
      }) : e.setLink({ href: this.linkAttrs.href }), this.closeEditLinkDialog();
    },
    openEditLinkDialog() {
      this.initLinkAttrs && this.initLinkAttrs.href && (this.linkAttrs.href = this.initLinkAttrs.href, this.linkAttrs.openInNewTab = this.initLinkAttrs.target === "_blank"), this.editLinkDialogVisible = !0;
    },
    closeEditLinkDialog() {
      this.editLinkDialogVisible = !1;
    }
  }
});
function Ud(e, t, a, l, o, i) {
  const s = H, u = Ie, m = St, f = wt, c = ie, _ = Ce;
  return n(), v("div", null, [
    d(s, {
      command: e.openEditLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Link.edit.tooltip"),
      icon: "edit"
    }, null, 8, ["command", "enable-tooltip", "tooltip"]),
    d(_, {
      title: e.t("editor.extensions.Link.edit.control.title"),
      modelValue: e.editLinkDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.editLinkDialogVisible = $),
      "append-to-body": !0,
      width: e.popupWidth,
      custom: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(c, {
          round: "",
          onClick: e.closeEditLinkDialog
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.edit.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(c, {
          type: "primary",
          round: "",
          onMousedown: t[1] || (t[1] = U(() => {
          }, ["prevent"])),
          onClick: e.updateLinkAttrs
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.edit.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(f, {
          model: e.linkAttrs,
          "label-position": "right"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Link.edit.control.href"),
              prop: "href"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.linkAttrs.href,
                  "onUpdate:modelValue": t[0] || (t[0] = ($) => e.linkAttrs.href = $),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["title", "modelValue", "width"])
  ]);
}
const di = /* @__PURE__ */ j(jd, [["render", Ud]]), Rd = B({
  name: "OpenLinkCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    },
    url: {
      type: String,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    openLink() {
      if (this.url) {
        const e = window.open();
        e && (e.opener = null, e.location.href = this.url);
      }
    }
  }
});
function zd(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.openLink,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Link.open.tooltip"),
    icon: "external-link"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const ui = /* @__PURE__ */ j(Rd, [["render", zd]]), Hd = B({
  name: "LinkBubbleMenu",
  components: {
    OpenLinkCommandButton: ui,
    EditLinkCommandButton: di,
    UnlinkCommandButton: ri
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  computed: {
    linkAttrs() {
      return this.editor.getAttributes("link");
    }
  }
}), qd = { class: "link-bubble-menu" };
function Wd(e, t, a, l, o, i) {
  const s = ui, u = di, m = ri;
  return n(), v("div", qd, [
    re(e.$slots, "prepend"),
    d(s, {
      editor: e.editor,
      url: e.linkAttrs.href
    }, null, 8, ["editor", "url"]),
    d(u, {
      editor: e.editor,
      "init-link-attrs": e.linkAttrs
    }, null, 8, ["editor", "init-link-attrs"]),
    d(m, { editor: e.editor }, null, 8, ["editor"])
  ]);
}
const pi = /* @__PURE__ */ j(Hd, [["render", Wd]]), Kd = B({
  name: "MenuBubble",
  components: {
    BubbleMenu: us,
    LinkBubbleMenu: pi,
    MergeCellBubbleMenu: si,
    VIcon: ii,
    FloatingMenu: ds
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    },
    menuBubbleOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeMenu: "none",
      isLinkBack: !1,
      activeImage: !1
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = q();
    return { t: e, enableTooltip: t, isCodeViewMode: a, parentRef: l };
  },
  computed: {
    bubbleMenuEnable() {
      return this.linkMenuEnable || this.textMenuEnable;
    },
    linkMenuEnable() {
      const { schema: e } = this.editor;
      return !!e.marks.link;
    },
    textMenuEnable() {
      return this.editor.extensionManager.extensions.some((t) => t.options.bubble);
    },
    isLinkSelection() {
      const { state: e } = this.editor, { tr: t } = e, { selection: a } = t;
      return this.$_isLinkSelection(a);
    },
    isTableActive() {
      return ha(this.editor.state);
    }
  },
  watch: {
    "editor.state.selection": function(e) {
      if (this.$_isLinkSelection(e))
        this.isLinkBack || this.setMenuType(
          "link"
          /* LINK */
        );
      else {
        const t = this.editor.state;
        this.activeImage = !!t.selection.node, this.activeMenu = this.$_getCurrentMenuType(), this.isLinkBack = !1;
      }
    }
  },
  methods: {
    generateCommandButtonComponentSpecs() {
      return this.editor.extensionManager.extensions.reduce((t, a) => {
        if (!a.options.bubble) return t;
        const { button: l } = a.options;
        if (!l || typeof l != "function") return t;
        const o = l({
          editor: this.editor,
          t: this.t,
          // i18n
          extension: a
        });
        return Array.isArray(o) ? [...t, ...o] : [...t, o];
      }, []);
    },
    linkBack() {
      this.setMenuType(
        "default"
        /* DEFAULT */
      ), this.isLinkBack = !0;
    },
    setMenuType(e) {
      this.activeMenu = e;
    },
    $_isLinkSelection(e) {
      return this.editor.isActive("link");
    },
    $_getCurrentMenuType() {
      return this.isLinkSelection ? "link" : this.editor.state.selection instanceof bs ? "cell" : (this.editor.state.selection instanceof Wa || this.editor.state.selection instanceof yl) && !this.activeImage ? "default" : "none";
    }
  }
}), xd = { ref: "parentRef" }, Gd = { class: "el-tiptap-editor__menu-floating" };
function Yd(e, t, a, l, o, i) {
  const s = X("v-icon"), u = pi, m = si, f = X("bubble-menu"), c = H, _ = Oa, $ = X("floating-menu");
  return n(), v("div", xd, [
    e.editor ? (n(), h(f, {
      key: 0,
      editor: e.editor,
      "tippy-options": { duration: 100, appendTo: e.parentRef ? e.parentRef : "parent" },
      "should-show": ({ editor: g, view: I, state: F, oldState: p, from: w, to: S }) => e.activeImage ? !1 : g.isActive("paragraph") && F.selection.$anchor.parentOffset !== F.selection.$head.parentOffset
    }, {
      default: r(() => [
        C("div", {
          class: x([{
            "el-tiptap-editor__menu-bubble--active": e.bubbleMenuEnable
          }, "el-tiptap-editor__menu-bubble"])
        }, [
          e.activeMenu === "link" ? (n(), h(u, {
            key: 0,
            editor: e.editor
          }, {
            prepend: r(() => [
              e.textMenuEnable ? (n(), v("div", {
                key: 0,
                class: "el-tiptap-editor__command-button",
                onMousedown: t[0] || (t[0] = U(() => {
                }, ["prevent"])),
                onClick: t[1] || (t[1] = (...g) => e.linkBack && e.linkBack(...g))
              }, [
                d(s, { name: "arrow-left" })
              ], 32)) : b("", !0)
            ]),
            _: 1
          }, 8, ["editor"])) : b("", !0),
          e.activeMenu === "cell" ? (n(), h(m, {
            key: 1,
            editor: e.editor
          }, null, 8, ["editor"])) : e.activeMenu === "default" ? (n(!0), v(L, { key: 2 }, G(e.generateCommandButtonComponentSpecs(), (g, I) => (n(), h(zt(g.component), ae({
            key: "command-button" + I,
            "enable-tooltip": e.enableTooltip
          }, { ref_for: !0 }, g.componentProps, { readonly: e.isCodeViewMode }, Ro(g.componentEvents || {})), null, 16, ["enable-tooltip", "readonly"]))), 128)) : b("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["editor", "tippy-options", "should-show"])) : b("", !0),
    e.editor ? (n(), h($, {
      key: 1,
      editor: e.editor,
      "tippy-options": { duration: 100, appendTo: e.parentRef ? e.parentRef : "parent" },
      "should-show": ({ editor: g, view: I, state: F, oldState: p }) => F.selection.$anchor.parentOffset == F.selection.$head.parentOffset && F.selection.$head.parentOffset == 0 && g.isActive("paragraph") && g.isActive("table")
    }, {
      default: r(() => [
        C("div", Gd, [
          d(c, {
            command: e.editor.commands.addColumnAfter,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_column_after"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_column_after"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.addColumnBefore,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_column_before"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_column_before"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.deleteColumn,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.delete_column"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "delete_column"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(_, { style: { margin: "5px 0" } }),
          d(c, {
            command: e.editor.commands.addRowAfter,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_row_after"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_row_after"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.addRowBefore,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_row_before"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_row_before"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.deleteRow,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.delete_row"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "delete_row"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"])
        ])
      ]),
      _: 1
    }, 8, ["editor", "tippy-options", "should-show"])) : b("", !0)
  ], 512);
}
const mi = /* @__PURE__ */ j(Kd, [["render", Yd]]), Jd = {
  editor: {
    extensions: {
      Bold: {
        tooltip: "Bold"
      },
      Underline: {
        tooltip: "Underline"
      },
      Italic: {
        tooltip: "Italic"
      },
      Strike: {
        tooltip: "Strike through"
      },
      Heading: {
        tooltip: "Heading",
        buttons: {
          paragraph: "Paragraph",
          heading: "Heading"
        }
      },
      Blockquote: {
        tooltip: "Block quote"
      },
      CodeBlock: {
        tooltip: "Code block"
      },
      Link: {
        add: {
          tooltip: "Apply link",
          control: {
            title: "Apply Link",
            href: "Href",
            open_in_new_tab: "Open in new tab",
            confirm: "Apply",
            cancel: "Cancel"
          }
        },
        edit: {
          tooltip: "Edit link",
          control: {
            title: "Edit Link",
            href: "Href",
            open_in_new_tab: "Open in new tab",
            confirm: "Update",
            cancel: "Cancel"
          }
        },
        unlink: {
          tooltip: "Unlink"
        },
        open: {
          tooltip: "Open link"
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: "Insert image",
            external: "Insert Image By Url",
            upload: "Upload Image"
          },
          remove_image: {
            tooltip: "Remove"
          },
          image_options: {
            tooltip: "Image options"
          },
          display: {
            tooltip: "Display",
            inline: "Inline",
            block: "Break Text",
            left: "Float Left",
            right: "Float Right"
          }
        },
        control: {
          insert_by_url: {
            title: "Insert image",
            placeholder: "Url of image",
            confirm: "Insert",
            cancel: "Cancel",
            invalid_url: "Please enter the correct url"
          },
          upload_image: {
            title: "Upload image",
            button: "Choose an image file or drag it here"
          },
          edit_image: {
            title: "Edit image",
            confirm: "Update",
            cancel: "Cancel",
            form: {
              src: "Image Url",
              alt: "Alternative Text",
              width: "Width",
              height: "Height"
            }
          }
        }
      },
      Iframe: {
        tooltip: "Insert iFrame",
        control: {
          title: "Insert iFrame",
          placeholder: "Href",
          confirm: "Insert",
          cancel: "Cancel"
        }
      },
      BulletList: {
        tooltip: "Bullet list"
      },
      OrderedList: {
        tooltip: "Ordered list"
      },
      TodoList: {
        tooltip: "Todo list"
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: "Align left"
          },
          align_center: {
            tooltip: "Align center"
          },
          align_right: {
            tooltip: "Align right"
          },
          align_justify: {
            tooltip: "Align justify"
          }
        }
      },
      FontType: {
        tooltip: "Font family"
      },
      FontSize: {
        tooltip: "Font size",
        default: "default"
      },
      TextColor: {
        tooltip: "Text color"
      },
      TextHighlight: {
        tooltip: "Text highlight"
      },
      LineHeight: {
        tooltip: "Line height"
      },
      Table: {
        tooltip: "Table",
        buttons: {
          insert_table: "Insert Table",
          add_column_before: "Add Column Before",
          add_column_after: "Add Column After",
          delete_column: "Delete Column",
          add_row_before: "Add Row Before",
          add_row_after: "Add Row After",
          delete_row: "Delete Row",
          merge_cells: "Merge Cells",
          split_cell: "Split Cell",
          delete_table: "Delete Table"
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: "Indent"
          },
          outdent: {
            tooltip: "Outdent"
          }
        }
      },
      FormatClear: {
        tooltip: "Clear format"
      },
      HorizontalRule: {
        tooltip: "Horizontal rule"
      },
      History: {
        tooltip: {
          undo: "Undo",
          redo: "Redo"
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: "Full screen",
          exit_fullscreen: "Exit full screen"
        }
      },
      Print: {
        tooltip: "Print"
      },
      Preview: {
        tooltip: "Preview",
        dialog: {
          title: "Preview"
        }
      },
      SelectAll: {
        tooltip: "Select all"
      },
      CodeView: {
        tooltip: "Code view"
      }
    },
    characters: "Characters"
  }
}, xl = {
  buildI18nHandler(e = Jd) {
    return function(a) {
      return a.split(".").reduce((o, i) => o[i], e);
    };
  }
};
function Xd(e) {
  return {
    characters: Z(() => e.value?.storage.characterCount.characters())
  };
}
function Qd(e) {
  const t = q(!1), a = q(""), l = (o) => {
    t.value = o;
  };
  return at(t, (o) => {
    o ? a.value = ge(e).getHTML() : ge(e).commands.setContent(
      a.value,
      !0
      /* emitUpdate */
    );
  }), He("isCodeViewMode", t), He("toggleIsCodeViewMode", l), {
    isCodeViewMode: t,
    codeViewHtml: a
  };
}
const Gl = "px";
function Zd({
  width: e,
  height: t
}) {
  return [{
    width: isNaN(Number(e)) ? e : `${e}${Gl}`,
    height: isNaN(Number(t)) ? t : `${t}${Gl}`
  }];
}
const eu = B({
  name: "ElementTiptap",
  emits: ["update:modelValue", "update:content", "onUpdate", "change", "onCreate", "onTransaction", "onBlur", "onFocus", "onDestroy"],
  components: {
    EditorContent: ps,
    MenuBar: li,
    MenuBubble: mi
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    // content: {
    // 	type: String,
    // 	default: '',
    // },
    extensions: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    output: {
      type: String,
      default: "html",
      validator(e) {
        return ["html", "json"].includes(e);
      }
    },
    spellcheck: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: Boolean,
      default: !0
    },
    enableCharCount: {
      type: Boolean,
      default: !0
    },
    charCountMax: {
      type: Number,
      default: void 0
    },
    // ----- I18n -----
    locale: {
      type: Object,
      default: void 0
    },
    // ----- Editor Class -----
    editorClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorContentClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorMenubarClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorBubbleMenuClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorFooterClass: {
      type: [String, Array, Object],
      default: void 0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  watch: {
    modelValue(e) {
      this.editor && (this.editActive === !0 ? this.editActive = !1 : (this.content = e, this.editor.commands.setContent(e)));
    },
    charCountMax: {
      handler(e) {
        if (this.editor && this.editor.extensionManager.extensions)
          for (const t in this.editor.extensionManager.extensions) {
            const a = this.editor.extensionManager.extensions[t];
            a && a.name && a.name == "characterCount" && (a.options.limit = e);
          }
      }
    }
  },
  computed: {
    editorStyle() {
      return Zd({
        width: this.width,
        height: this.height || void 0
      });
    },
    countMax() {
      return this.charCountMax || void 0;
    }
  },
  setup(e, { emit: t }) {
    const a = q(""), l = q(!1), o = e.extensions;
    o.push(
      ys.configure({
        emptyEditorClass: "el-tiptap-editor--empty",
        emptyNodeClass: "el-tiptap-editor__placeholder",
        showOnlyCurrent: !1,
        placeholder: ({ node: F }) => e.placeholder
      })
    ), e.enableCharCount !== !1 && o.push(
      vs.configure({
        limit: e.charCountMax
      })
    );
    const i = ({ editor: F }) => {
      let p;
      e.output === "html" ? p = F.getHTML() : p = F.getJSON(), l.value = !0, a.value = p, t("update:modelValue", p), t("update:content", p), t("onUpdate", p, F), t("change", p);
    }, s = ms({
      content: a.value,
      extensions: o,
      editable: !e.readonly,
      onCreate: (F) => {
        a.value = e.modelValue, F.editor.commands.setContent(a.value), t("onCreate", F);
      },
      onTransaction: (F) => {
        t("onTransaction", F);
      },
      onFocus: (F) => {
        t("onFocus", F);
      },
      onBlur: (F) => {
        t("onBlur", F);
      },
      onDestroy: (F) => {
        t("onDestroy", F);
      },
      onUpdate: i
    });
    yn(() => {
      ge(s)?.setOptions({
        editorProps: {
          attributes: {
            spellcheck: String(e.spellcheck)
          }
        }
      });
    });
    const u = xl.buildI18nHandler(vn(e.locale)), m = (...F) => u.apply(xl, F), f = q(!1), c = (F) => {
      f.value = F;
    };
    He("isFullscreen", f), He("toggleFullscreen", c), He("enableTooltip", e.tooltip), He("userState", e.userState);
    const { isCodeViewMode: _, codeViewHtml: $ } = Qd(s);
    He("isCodeViewMode", _);
    const { characters: g } = Xd(s), I = Z(() => e.enableCharCount && !ge(_));
    return He("t", m), He("et", this), {
      t: m,
      onUpdate: i,
      editor: s,
      content: a,
      editActive: l,
      characters: g,
      showFooter: I,
      isFullscreen: f,
      isCodeViewMode: _,
      codeViewHtml: $
    };
  }
}), tu = { class: "el-tiptap-editor__characters" };
function au(e, t, a, l, o, i) {
  const s = mi, u = li, m = ai, f = X("editor-content");
  return e.editor ? (n(), v("div", {
    key: 0,
    style: te(e.editorStyle),
    class: x([
      {
        "el-tiptap-editor": !0,
        "el-tiptap-editor--fullscreen": e.isFullscreen,
        "el-tiptap-editor--with-footer": e.showFooter
      },
      e.editorClass
    ])
  }, [
    e.readonly ? b("", !0) : (n(), h(s, {
      key: 0,
      editor: e.editor,
      class: x(e.editorBubbleMenuClass)
    }, null, 8, ["editor", "class"])),
    e.readonly ? b("", !0) : (n(), h(u, {
      key: 1,
      editor: e.editor,
      class: x(e.editorMenubarClass)
    }, null, 8, ["editor", "class"])),
    e.isCodeViewMode && !e.readonly ? (n(), v("div", {
      key: 2,
      class: x({
        "el-tiptap-editor__ace": !0,
        "border-bottom-radius": e.isCodeViewMode
      })
    }, [
      d(m, {
        lang: "html",
        "auto-beautify": !0,
        value: e.codeViewHtml,
        "onUpdate:value": t[0] || (t[0] = (c) => e.codeViewHtml = c),
        "min-lines": 18,
        "max-lines": 30,
        style: { width: "100%" }
      }, null, 8, ["value"])
    ], 2)) : b("", !0),
    Ae(d(f, {
      editor: e.editor,
      class: x([
        {
          "el-tiptap-editor__content": !0,
          "el-tiptap-editor__content_readonly": e.readonly
        },
        e.editorContentClass
      ])
    }, null, 8, ["editor", "class"]), [
      [zo, !e.isCodeViewMode]
    ]),
    e.showFooter && !e.readonly ? (n(), v("div", {
      key: 3,
      class: x([
        {
          "el-tiptap-editor__footer": !0
        },
        e.editorFooterClass
      ])
    }, [
      C("span", tu, M(e.t("editor.characters")) + ": " + M(e.characters) + " " + M(e.countMax ? `/ ${e.countMax}` : ""), 1)
    ], 2)) : b("", !0)
  ], 6)) : b("", !0);
}
const lu = /* @__PURE__ */ j(eu, [["render", au]]), ou = pt.create({
  name: "title",
  // schema
  content: "inline*",
  addOptions() {
    return {
      ...this.parent?.(),
      placeholder: ""
    };
  },
  parseHTML() {
    return [{ tag: "h1" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["h1", it(e), 0];
  }
}), Yl = ws.extend({
  addOptions() {
    return {
      title: !1
    };
  },
  content() {
    return this.options.title ? "title block+" : "block+";
  },
  addExtensions() {
    return this.options.title ? [ou] : [];
  }
}), iu = B({
  name: "HeadingDropdown",
  components: {
    ElDropdown: za,
    ElDropdownMenu: Ra,
    ElDropdownItem: Ua,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ht,
      required: !0
    },
    levels: {
      type: Array,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    toggleHeading(e) {
      let t = this.editor.commands;
      e > 0 ? t.toggleHeading({ level: e }) : t.setParagraph();
    }
  }
}), nu = { key: 1 };
function su(e, t, a, l, o, i) {
  const s = H, u = kt, m = Ft, f = _t;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-dropdown-popper",
    onCommand: e.toggleHeading
  }, {
    dropdown: r(() => [
      d(m, {
        slot: "dropdown",
        class: "el-tiptap-dropdown-menu"
      }, {
        default: r(() => [
          (n(!0), v(L, null, G([0, ...e.levels], (c) => (n(), h(u, {
            key: c,
            command: c,
            class: x([
              {
                "el-tiptap-dropdown-menu__item--active": c > 0 ? e.editor.isActive("heading", {
                  level: c
                }) : e.editor.isActive("paragraph")
              },
              "el-tiptap-dropdown-menu__item"
            ])
          }, {
            default: r(() => [
              c > 0 ? (n(), h(zt("h" + c), {
                key: 0,
                "data-item-type": "heading"
              }, {
                default: r(() => [
                  D(M(e.t("editor.extensions.Heading.buttons.heading")) + " " + M(c), 1)
                ]),
                _: 2
              }, 1024)) : (n(), v("span", nu, M(e.t("editor.extensions.Heading.buttons.paragraph")), 1))
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          "is-active": e.editor.isActive("heading"),
          tooltip: e.t("editor.extensions.Heading.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "heading"
        }, null, 8, ["enable-tooltip", "is-active", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["disabled", "onCommand"]);
}
const ru = /* @__PURE__ */ j(iu, [["render", su]]), Jl = Ss.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, extension: t }) {
        return {
          component: ru,
          componentProps: {
            levels: t.options.levels,
            editor: e
          }
        };
      }
    };
  }
}), du = _s.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBlockquote();
            },
            isActive: e.isActive("blockquote"),
            icon: "quote-right",
            tooltip: t("editor.extensions.Blockquote.tooltip")
          }
        };
      }
    };
  }
});
Fs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleCodeBlock();
            },
            isActive: e.isActive("codeBlock"),
            icon: "code",
            tooltip: t("editor.extensions.CodeBlock.tooltip")
          }
        };
      }
    };
  }
});
const fa = Cs(Ds);
fa.register("html", Ps);
fa.register("css", Is);
fa.register("js", $s);
fa.register("ts", Ts);
const uu = ks.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleCodeBlock();
            },
            isActive: e.isActive("codeBlock"),
            icon: "code",
            tooltip: t("editor.extensions.CodeBlock.tooltip")
          }
        };
      },
      lowlight: fa
      // languageClassPrefix: 'language-',
      // defaultLanguage: 'plaintext',
    };
  }
}), Xl = Ms.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBulletList();
            },
            isActive: e.isActive("bulletList"),
            icon: "list-ul",
            tooltip: t("editor.extensions.BulletList.tooltip")
          }
        };
      }
    };
  }
  // addExtensions() {
  // 	return [ListItem];
  // },
}), Ql = Vs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleOrderedList();
            },
            isActive: e.isActive("orderedList"),
            icon: "list-ol",
            tooltip: t("editor.extensions.OrderedList.tooltip")
          }
        };
      }
    };
  },
  addExtensions() {
    return [Dn];
  }
}), hi = (e) => {
  const t = String(e || ""), a = t.lastIndexOf(".");
  return a > -1 ? t.slice(a + 1).toLowerCase().trim() : "";
}, pu = (e, t, a = []) => {
  const l = hi(e?.name);
  if (l) return t.map((i) => i.toLowerCase()).includes(l);
  const o = String(e?.type || "").toLowerCase();
  return !!o && a.map((i) => i.toLowerCase()).includes(o);
}, mu = (e) => {
  const t = hi(e?.name);
  return t ? fu.includes(t) : String(e?.type || "").toLowerCase().startsWith("image/");
}, hu = ["application/zip", "application/x-zip-compressed", "application/x-compressed", "multipart/x-zip"], OS = ["svg"], LS = ["image/svg+xml"], fu = ["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg", "avif", "tif", "tiff", "ico", "heic"], cu = { class: "mb-2" }, bu = {
  class: "ml-2 text-3",
  style: { "padding-bottom": "10px" }
}, gu = ["src"], yu = { class: "el-upload-list__item-actions" }, vu = ["onClick"], wu = ["onClick"], Su = /* @__PURE__ */ B({
  __name: "SdGallery",
  props: {
    uploadType: String,
    perPage: { type: Number, required: !1, default: 30 },
    readonly: { type: Boolean, required: !1, default: !1 },
    userState: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = De({}), a = De({
      type: {
        editor: {
          group: "editor_img",
          uploadUrl: "/v1/files/editor-image-upload",
          deleteUrl: "/v1/files/remove-one"
        }
      },
      total: 0,
      offset: 0,
      totalPage: 0,
      previewIndex: 0
    }), l = q([]), o = q(null), i = e, s = De({
      providerId: "getfiles-gallery",
      providerType: me.SYS,
      options: {
        page: 1,
        limit: i.perPage ? i.perPage : 30
      },
      params: { userId: i.userState.user?.user_id }
    }), u = Z({
      get() {
        return s.options?.page || 1;
      },
      set(y) {
        s.options ? s.options.page = y : s.options = { page: y };
      }
    });
    xe(() => {
      m();
    });
    function m() {
      i.userState.crudGetAll({ sdProvider: s, totalEnable: !0 }, (y) => {
        a.total = y.total, a.offset = y.offset, a.totalPage = y.data.length;
        const T = y.data;
        l.value = [], T.forEach((A) => {
          l.value.push({
            name: A.name,
            url: A.file_path,
            response: A
          });
        });
      });
    }
    const f = Z(() => l.value.map((y) => y.url)), c = Z(() => i.uploadType ? i.uploadType : "editor"), _ = Z(() => a.total.toLocaleString()), $ = Z(() => (a.totalPage > 0 ? a.offset + 1 : a.offset).toLocaleString()), g = Z(() => (a.offset + a.totalPage).toLocaleString());
    function I(y) {
      m();
    }
    function F() {
      u.value = 1, m();
    }
    const p = (y) => mu(y) ? y.size / 1024 / 1024 > 15 ? (O.error("Upload picture size can not exceed 15MB!"), !1) : !0 : (O.error("Upload picture must be image format!"), !1), w = (y) => {
      ve.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        const T = y.response, A = {
          fileName: T.file_name ? T.file_name : T.fileName ? T.fileName : "",
          fileGroup: T.file_group ? T.file_group : T.fileGroup ? T.fileGroup : "",
          fileId: T._id ? T._id : T.fileId ? T.fileId : ""
        };
        await be.delete(`${i.userState.host}${a.type[c.value].deleteUrl}`, {
          data: A,
          headers: {
            Authorization: `Bearer ${i.userState.user?.token}`
          }
        }).then((E) => {
          l.value = l.value.filter((W) => W.uid !== y.uid), a.total--, a.totalPage--;
        }).catch((E) => {
          console.log(E);
        });
      }).catch(() => {
      });
    }, S = (y, T, A) => {
      a.total++, a.totalPage++, l.value[l.value.length - 1] = {
        name: y.fileName,
        url: y.filePath,
        response: y
      };
    }, N = (y) => {
      a.previewIndex = f.value.indexOf(y.url), o.value.$el.children[0].click();
    };
    return (y, T) => {
      const A = ie, E = X("Plus"), W = We, oe = Bt, K = X("zoom-in"), Ue = X("Delete"), Ge = hl, st = La;
      return n(), v(L, null, [
        C("div", cu, [
          d(A, {
            type: "info",
            plain: "",
            icon: "Refresh",
            onClick: F
          }),
          C("span", bu, "Showing " + M($.value) + "-" + M(g.value) + " of " + M(_.value) + " items.", 1)
        ]),
        d(Ge, {
          class: "avatar-uploader",
          action: e.userState.host + a.type[c.value].uploadUrl,
          headers: {
            Authorization: `Bearer ${i.userState.user?.token}`
          },
          accept: "image/*",
          "show-file-list": !0,
          data: t,
          "list-type": "picture-card",
          "file-list": l.value,
          "onUpdate:fileList": T[0] || (T[0] = (Le) => l.value = Le),
          disabled: !!e.readonly,
          "on-success": S,
          "before-upload": p
        }, {
          file: r(({ file: Le }) => [
            C("div", null, [
              C("img", {
                class: "el-upload-list__item-thumbnail",
                src: Le.url,
                alt: ""
              }, null, 8, gu),
              d(oe, {
                ref_key: "imageRef",
                ref: o,
                style: { width: "100%", height: "100%" },
                src: Le.url,
                "preview-src-list": f.value,
                "initial-index": a.previewIndex,
                fit: "cover",
                "preview-teleported": ""
              }, null, 8, ["src", "preview-src-list", "initial-index"]),
              C("span", yu, [
                re(y.$slots, "action", { file: Le }, void 0, !0),
                C("span", {
                  class: "el-upload-list__item-preview",
                  onClick: (je) => N(Le)
                }, [
                  d(W, null, {
                    default: r(() => [
                      d(K)
                    ]),
                    _: 1
                  })
                ], 8, vu),
                e.readonly ? b("", !0) : (n(), v("span", {
                  key: 0,
                  class: "el-upload-list__item-delete",
                  onClick: (je) => w(Le)
                }, [
                  d(W, null, {
                    default: r(() => [
                      d(Ue)
                    ]),
                    _: 1
                  })
                ], 8, wu))
              ])
            ])
          ]),
          default: r(() => [
            d(W, null, {
              default: r(() => [
                d(E)
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 8, ["action", "headers", "data", "file-list", "disabled"]),
        a.total > (s.options?.limit || 0) ? (n(), h(st, {
          key: 0,
          "current-page": u.value,
          "onUpdate:currentPage": T[1] || (T[1] = (Le) => u.value = Le),
          "page-size": i.perPage,
          onCurrentChange: I,
          class: "mt-1",
          background: "",
          layout: "prev, pager, next",
          total: a.total
        }, null, 8, ["current-page", "page-size", "total"])) : b("", !0)
      ], 64);
    };
  }
}), _u = /* @__PURE__ */ j(Su, [["__scopeId", "data-v-bc60e009"]]), al = {};
function Fu(e) {
  return new Promise((t, a) => {
    const l = {
      complete: !1,
      width: 0,
      height: 0,
      src: e
    };
    if (!e) {
      a(l);
      return;
    }
    if (al[e]) {
      t({ ...al[e] });
      return;
    }
    const o = new Image();
    o.onload = () => {
      l.width = o.width, l.height = o.height, l.complete = !0, al[e] = { ...l }, t(l);
    }, o.onerror = () => {
      a(l);
    }, o.src = e;
  });
}
var qe = /* @__PURE__ */ ((e) => (e.INLINE = "inline", e.BREAK_TEXT = "block", e.FLOAT_LEFT = "left", e.FLOAT_RIGHT = "right", e))(qe || {});
const Zl = "[Element-Tiptap Tip]", ku = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/, Cu = 200, Du = qe.INLINE, fi = 1.7, Va = "100%";
class ci {
  static warn(t) {
    console.warn(`${Zl} ${t}`);
  }
  static error(t) {
    console.error(`${Zl} ${t}`);
  }
}
const Iu = B({
  name: "ImageCommandButton",
  components: {
    ElDialog: qt,
    ElUpload: $n,
    ElPopover: Pt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ht,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = R("userState");
    return { t: e, enableTooltip: t, isCodeViewMode: a, userState: l };
  },
  data() {
    return {
      resizeCleanup: null,
      imageUploadDialogVisible: !1,
      uploading: !1,
      popupWidth: "80%"
    };
  },
  computed: {
    imageNodeOptions() {
      return this.editor.extensionManager.extensions.find((e) => e.name === "image").options;
    }
  },
  mounted() {
    this.popupWidth = le("80%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("80%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openUrlPrompt() {
      ve.prompt("", this.t("editor.extensions.Image.control.insert_by_url.title"), {
        confirmButtonText: this.t("editor.extensions.Image.control.insert_by_url.confirm"),
        cancelButtonText: this.t("editor.extensions.Image.control.insert_by_url.cancel"),
        inputPlaceholder: this.t("editor.extensions.Image.control.insert_by_url.placeholder"),
        inputPattern: this.imageNodeOptions.urlPattern,
        inputErrorMessage: this.t("editor.extensions.Image.control.insert_by_url.invalid_url"),
        roundButton: !0
      }).then(({ value: e }) => {
        this.editor.commands.setImage({ src: e });
      }).catch((e) => {
      });
    },
    handleSelect(e) {
      this.editor.commands.setImage({ src: e.url }), this.imageUploadDialogVisible = !1;
    },
    async uploadImage(e) {
      const { file: t } = e, a = this.imageNodeOptions.uploadRequest, l = Pa.service({
        target: ".el-tiptap-upload"
      });
      try {
        let o = this.editor.commands;
        const i = await (a ? a(t) : Cd(t));
        o.setImage({ src: i }), this.imageUploadDialogVisible = !1;
      } catch (o) {
        ci.error(String(o));
      } finally {
        this.$nextTick(() => {
          l.close();
        });
      }
    }
  }
}), $u = { class: "el-tiptap-popper__menu" }, Tu = ["onClick"];
function Pu(e, t, a, l, o, i) {
  const s = H, u = ot, m = X("CircleCheck"), f = We, c = _u, _ = Ce;
  return n(), v("div", null, [
    d(u, {
      disabled: e.isCodeViewMode,
      placement: "bottom",
      trigger: "click",
      "popper-class": "el-tiptap-popper"
    }, {
      reference: r(() => [
        C("span", null, [
          d(s, {
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Image.buttons.insert_image.tooltip"),
            readonly: e.isCodeViewMode,
            icon: "image"
          }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
        ])
      ]),
      default: r(() => [
        C("div", $u, [
          C("div", {
            class: "el-tiptap-popper__menu__item",
            onClick: t[0] || (t[0] = (...$) => e.openUrlPrompt && e.openUrlPrompt(...$))
          }, [
            C("span", null, M(e.t("editor.extensions.Image.buttons.insert_image.external")), 1)
          ]),
          C("div", {
            class: "el-tiptap-popper__menu__item",
            onClick: t[1] || (t[1] = ($) => e.imageUploadDialogVisible = !0)
          }, [
            C("span", null, M(e.t("editor.extensions.Image.buttons.insert_image.upload")), 1)
          ])
        ])
      ]),
      _: 1
    }, 8, ["disabled"]),
    d(_, {
      modelValue: e.imageUploadDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.imageUploadDialogVisible = $),
      title: e.t("editor.extensions.Image.control.upload_image.title"),
      width: e.popupWidth,
      "append-to-body": !0
    }, {
      default: r(() => [
        d(c, {
          "upload-type": "editor",
          readonly: !e.editor?.isEditable,
          "user-state": e.userState
        }, {
          action: r(({ file: $ }) => [
            e.editor?.isEditable ? (n(), v("span", {
              key: 0,
              class: "el-upload-list__item-delete",
              onClick: (g) => e.handleSelect($)
            }, [
              d(f, null, {
                default: r(() => [
                  d(m)
                ]),
                _: 1
              })
            ], 8, Tu)) : b("", !0)
          ]),
          _: 1
        }, 8, ["readonly", "user-state"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"])
  ]);
}
const Mu = /* @__PURE__ */ j(Iu, [["render", Pu]]), Vu = B({
  name: "RemoveImageCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: Fe.editor,
    node: Fe.node
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    removeImage() {
      this.editor.commands.deleteSelection();
    }
  }
});
function Au(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.removeImage,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Image.buttons.remove_image.tooltip"),
    icon: "trash-alt"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const bi = /* @__PURE__ */ j(Vu, [["render", Au]]), Eu = B({
  components: {
    ElDialog: qt,
    ElForm: ma,
    ElFormItem: pa,
    ElInput: Tt,
    ElCol: Tn,
    ElButton: $t,
    CommandButton: H
  },
  props: {
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  },
  data() {
    return {
      resizeCleanup: null,
      editImageDialogVisible: !1,
      popupWidth: "40%",
      imageAttrs: {}
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  mounted() {
    this.popupWidth = le("40%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    syncImageAttrs() {
      this.imageAttrs = this.getImageAttrs();
    },
    getImageAttrs() {
      return {
        src: this.node.attrs.src,
        alt: this.node.attrs.alt,
        width: this.node.attrs.width,
        height: this.node.attrs.height
      };
    },
    updateImageAttrs() {
      let { width: e, height: t } = this.imageAttrs;
      e = parseInt(e, 10), t = parseInt(t, 10), this.updateAttrs({
        alt: this.imageAttrs.alt,
        width: e >= 0 ? e : null,
        height: t >= 0 ? t : null
      }), this.closeEditImageDialog();
    },
    openEditImageDialog() {
      this.editImageDialogVisible = !0;
    },
    closeEditImageDialog() {
      this.editImageDialogVisible = !1;
    }
  }
});
function Ou(e, t, a, l, o, i) {
  const s = H, u = Ie, m = St, f = ut, c = wt, _ = ie, $ = Ce;
  return n(), v("div", null, [
    d(s, {
      command: e.openEditImageDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Image.buttons.image_options.tooltip"),
      icon: "ellipsis-h"
    }, null, 8, ["command", "enable-tooltip", "tooltip"]),
    d($, {
      modelValue: e.editImageDialogVisible,
      "onUpdate:modelValue": t[3] || (t[3] = (g) => e.editImageDialogVisible = g),
      title: e.t("editor.extensions.Image.control.edit_image.title"),
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-image-dialog",
      onOpen: e.syncImageAttrs
    }, {
      footer: r(() => [
        d(_, {
          round: "",
          onClick: e.closeEditImageDialog
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Image.control.edit_image.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(_, {
          type: "primary",
          round: "",
          onClick: e.updateImageAttrs
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Image.control.edit_image.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(c, {
          model: e.imageAttrs,
          "label-position": "top"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Image.control.edit_image.form.src")
            }, {
              default: r(() => [
                d(u, {
                  value: e.imageAttrs.src,
                  autocomplete: "off",
                  disabled: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }, 8, ["label"]),
            d(m, {
              label: e.t("editor.extensions.Image.control.edit_image.form.alt")
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.imageAttrs.alt,
                  "onUpdate:modelValue": t[0] || (t[0] = (g) => e.imageAttrs.alt = g),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"]),
            d(m, null, {
              default: r(() => [
                d(f, { span: 11 }, {
                  default: r(() => [
                    d(m, {
                      label: e.t("editor.extensions.Image.control.edit_image.form.width")
                    }, {
                      default: r(() => [
                        d(u, {
                          modelValue: e.imageAttrs.width,
                          "onUpdate:modelValue": t[1] || (t[1] = (g) => e.imageAttrs.width = g),
                          type: "number"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }),
                d(f, {
                  span: 11,
                  push: 2
                }, {
                  default: r(() => [
                    d(m, {
                      label: e.t("editor.extensions.Image.control.edit_image.form.height")
                    }, {
                      default: r(() => [
                        d(u, {
                          modelValue: e.imageAttrs.height,
                          "onUpdate:modelValue": t[2] || (t[2] = (g) => e.imageAttrs.height = g),
                          type: "number"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width", "onOpen"])
  ]);
}
const gi = /* @__PURE__ */ j(Eu, [["render", Ou]]), Lu = B({
  name: "ImageDisplayCommandButton",
  components: {
    ElPopover: Pt,
    CommandButton: H
  },
  props: {
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  },
  data() {
    return {
      displayCollection: [qe.INLINE, qe.BREAK_TEXT, qe.FLOAT_LEFT, qe.FLOAT_RIGHT]
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = q(null);
    return { t: e, enableTooltip: t, popoverRef: a };
  },
  computed: {
    currDisplay() {
      return this.node.attrs.display;
    }
  },
  methods: {
    hidePopover() {
      this.popoverRef.hide();
    }
  }
}), Bu = { class: "el-tiptap-popper__menu" }, Nu = ["onClick"];
function ju(e, t, a, l, o, i) {
  const s = H, u = ot;
  return n(), h(u, {
    placement: "top",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      C("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.Image.buttons.display.tooltip"),
          icon: "image-align"
        }, null, 8, ["enable-tooltip", "tooltip"])
      ])
    ]),
    default: r(() => [
      C("div", Bu, [
        (n(!0), v(L, null, G(e.displayCollection, (m) => (n(), v("div", {
          key: m,
          class: x([{
            "el-tiptap-popper__menu__item--active": m === e.currDisplay
          }, "el-tiptap-popper__menu__item"]),
          onMousedown: t[0] || (t[0] = (...f) => e.hidePopover && e.hidePopover(...f)),
          onClick: (f) => e.updateAttrs({ display: m })
        }, [
          C("span", null, M(e.t(`editor.extensions.Image.buttons.display.${m}`)), 1)
        ], 42, Nu))), 128))
      ])
    ]),
    _: 1
  }, 512);
}
const yi = /* @__PURE__ */ j(Lu, [["render", ju]]), Uu = B({
  components: {
    ImageDisplayCommandButton: yi,
    EditImageCommandButton: gi,
    RemoveImageCommandButton: bi
  },
  props: {
    // editor: {
    // 	type: Object as PropType<import('@tiptap/core').Editor>,
    // 	required: true,
    // },
    editor: Fe.editor,
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  }
}), Ru = { class: "image-bubble-menu" };
function zu(e, t, a, l, o, i) {
  const s = yi, u = gi, m = bi;
  return n(), v("div", Ru, [
    d(s, {
      node: e.node,
      "update-attrs": e.updateAttrs
    }, null, 8, ["node", "update-attrs"]),
    d(u, {
      node: e.node,
      "update-attrs": e.updateAttrs
    }, null, 8, ["node", "update-attrs"]),
    d(m, {
      node: e.node,
      editor: e.editor
    }, null, 8, ["node", "editor"])
  ]);
}
const vi = /* @__PURE__ */ j(Uu, [["render", zu]]), Da = 20, eo = 1e5, Hu = B({
  name: "ImageView",
  components: {
    ElPopover: Pt,
    NodeViewWrapper: nt,
    ImageBubbleMenu: vi
  },
  props: Fe,
  data() {
    return {
      maxSize: {
        width: eo,
        height: eo
      },
      originalSize: {
        width: 0,
        height: 0
      },
      resizeDirections: [
        "tl",
        "tr",
        "bl",
        "br"
        /* BOTTOM_RIGHT */
      ],
      resizing: !1,
      resizeOb: null,
      resizerState: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }
    };
  },
  computed: {
    src() {
      return this.node.attrs.src;
    },
    width() {
      return this.node.attrs.width;
    },
    height() {
      return this.node.attrs.height;
    },
    display() {
      return this.node.attrs.display;
    },
    imageViewClass() {
      return ["image-view", `image-view--${this.display}`, "drag-handle"];
    }
  },
  async created() {
    const e = await Fu(this.src);
    e.complete || (e.width = Da, e.height = Da), this.originalSize = {
      width: e.width,
      height: e.height
    };
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
    selectImage() {
      this.editor?.commands.setNodeSelection(this.getPos());
    },
    /* invoked when window or editor resize */
    getMaxSize() {
      const { width: e } = getComputedStyle(this.editor.view.dom);
      this.maxSize.width = parseInt(e, 10);
    },
    /* on resizer handler mousedown
     * record the position where the event is triggered and resize direction
     * calculate the initial width and height of the image
     */
    onMouseDown(e, t) {
      e.preventDefault(), e.stopPropagation(), this.resizerState.x = e.clientX, this.resizerState.y = e.clientY;
      const a = this.originalSize.width, l = this.originalSize.height, o = a / l;
      let { width: i, height: s } = this.node.attrs;
      const u = this.maxSize.width;
      i && !s ? (i = i > u ? u : i, s = Math.round(i / o)) : s && !i ? (i = Math.round(s * o), i = i > u ? u : i) : !i && !s ? (i = a > u ? u : a, s = Math.round(i / o)) : i = i > u ? u : i, this.resizerState.w = i, this.resizerState.h = s, this.resizerState.dir = t, this.resizing = !0, this.onEvents();
    },
    onMouseMove(e) {
      if (e.preventDefault(), e.stopPropagation(), !this.resizing) return;
      const { x: t, y: a, w: l, h: o, dir: i } = this.resizerState, s = (e.clientX - t) * (/l/.test(i) ? -1 : 1), u = (e.clientY - a) * (/t/.test(i) ? -1 : 1);
      this.updateAttributes?.({
        width: oi(l + s, Da, this.maxSize.width),
        height: Math.max(o + u, Da)
      });
    },
    onMouseUp(e) {
      e.preventDefault(), e.stopPropagation(), this.resizing && (this.resizing = !1, this.resizerState = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, this.offEvents(), this.selectImage());
    },
    onEvents() {
      document.addEventListener("mousemove", this.onMouseMove, !0), document.addEventListener("mouseup", this.onMouseUp, !0);
    },
    offEvents() {
      document.removeEventListener("mousemove", this.onMouseMove, !0), document.removeEventListener("mouseup", this.onMouseUp, !0);
    }
  }
}), qu = ["src", "title", "alt", "width", "height"], Wu = {
  key: 0,
  class: "image-resizer"
}, Ku = ["onMousedown"];
function xu(e, t, a, l, o, i) {
  const s = vi, u = ot, m = X("node-view-wrapper");
  return n(), h(m, {
    as: "span",
    class: x(e.imageViewClass),
    "data-drag-handle": ""
  }, {
    default: r(() => [
      C("div", {
        class: x({
          "image-view__body--focused": e.selected && e.editor?.isEditable,
          "image-view__body--resizing": e.resizing && e.editor?.isEditable,
          "image-view__body": e.editor?.isEditable
        })
      }, [
        C("img", {
          src: e.src,
          title: e.node.attrs.title,
          alt: e.node.attrs.alt,
          width: e.width,
          height: e.height,
          class: "image-view__body__image",
          onClick: t[0] || (t[0] = (...f) => e.selectImage && e.selectImage(...f))
        }, null, 8, qu),
        e.editor?.isEditable ? Ae((n(), v("div", Wu, [
          (n(!0), v(L, null, G(e.resizeDirections, (f) => (n(), v("span", {
            key: f,
            class: x([`image-resizer__handler--${f}`, "image-resizer__handler"]),
            onMousedown: (c) => e.onMouseDown(c, f)
          }, null, 42, Ku))), 128))
        ], 512)), [
          [zo, e.selected || e.resizing]
        ]) : b("", !0),
        e.editor?.isEditable ? (n(), h(u, {
          key: 1,
          visible: e.selected,
          "show-arrow": !1,
          placement: "top",
          "popper-class": "el-tiptap-image-popper"
        }, {
          reference: r(() => [...t[1] || (t[1] = [
            C("div", { class: "image-view__body__placeholder" }, null, -1)
          ])]),
          default: r(() => [
            d(s, {
              node: e.node,
              editor: e.editor,
              "update-attrs": e.updateAttributes
            }, null, 8, ["node", "editor", "update-attrs"])
          ]),
          _: 1
        }, 8, ["visible"])) : b("", !0)
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Gu = /* @__PURE__ */ j(Hu, [["render", xu]]), Yu = As.extend({
  // https://github.com/ueberdosis/tiptap/issues/1206
  inline() {
    return !0;
  },
  group() {
    return "inline";
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: Cu,
        parseHTML: (e) => {
          const t = e.style.width || e.getAttribute("width") || null;
          return t == null ? null : parseInt(t, 10);
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      height: {
        default: null,
        parseHTML: (e) => {
          const t = e.style.height || e.getAttribute("height") || null;
          return t == null ? null : parseInt(t, 10);
        },
        renderHTML: (e) => ({
          height: e.height
        })
      },
      display: {
        default: Du,
        parseHTML: (e) => {
          const { cssFloat: t, display: a } = e.style;
          let l = e.getAttribute("data-display") || e.getAttribute("display");
          return l ? l = /(inline|block|left|right)/.test(l) ? l : qe.INLINE : t === "left" && !a ? l = qe.FLOAT_LEFT : t === "right" && !a ? l = qe.FLOAT_RIGHT : !t && a === "block" ? l = qe.BREAK_TEXT : l = qe.INLINE, l;
        },
        renderHTML: (e) => ({
          "data-display": e.display
        })
      }
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      inline: !0,
      uploadRequest: null,
      urlPattern: ku,
      button({ editor: e }) {
        return {
          component: Mu,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  draggable: !0,
  addNodeView() {
    return mt(Gu);
  },
  parseHTML() {
    return [
      {
        tag: "img[src]"
      }
    ];
  }
  // addExtensions() {
  // 	return [Gapcursor, Dropcursor];
  // },
}), Ju = B({
  name: "TaskItemView",
  components: {
    NodeViewWrapper: nt,
    NodeViewContent: hs,
    ElCheckbox: ua
  },
  props: Fe,
  computed: {
    done: {
      get() {
        return this.node?.attrs.done;
      },
      set(e) {
        this.updateAttributes?.({
          done: e
        });
      }
    }
  }
}), Xu = ["data-type", "data-done"], Qu = { contenteditable: "false" };
function Zu(e, t, a, l, o, i) {
  const s = ia, u = X("node-view-content"), m = X("node-view-wrapper");
  return n(), h(m, { class: "task-item-wrapper" }, {
    default: r(() => [
      C("li", {
        "data-type": e.node?.type.name,
        "data-done": e.done.toString(),
        "data-drag-handle": ""
      }, [
        C("span", Qu, [
          d(s, {
            modelValue: e.done,
            "onUpdate:modelValue": t[0] || (t[0] = (f) => e.done = f)
          }, null, 8, ["modelValue"])
        ]),
        d(u, { class: "todo-content" })
      ], 8, Xu)
    ]),
    _: 1
  });
}
const ep = /* @__PURE__ */ j(Ju, [["render", Zu]]), tp = Os.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      done: {
        default: !1,
        parseHTML: (e) => e.getAttribute("data-done") === "true"
      }
    };
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    const { done: a } = e.attrs;
    return [
      "li",
      it(this.options.HTMLAttributes, t, {
        "data-type": this.name
      }),
      // el-checkbox dom
      [
        "span",
        {
          contenteditable: "false"
        },
        [
          "span",
          {
            class: `el-checkbox ${a ? "is-checked" : ""}`,
            style: "pointer-events: none;"
          },
          ["input", { class: `el-checkbox__input ${a ? "is-checked" : ""}` }, ["span", { class: "el-checkbox__inner" }]]
        ]
      ],
      ["div", { class: "todo-content" }, 0]
    ];
  },
  addNodeView() {
    return mt(ep);
  }
}), ap = Es.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleTaskList();
            },
            isActive: e.isActive("taskList"),
            icon: "tasks",
            tooltip: t("editor.extensions.TodoList.tooltip")
          }
        };
      }
    };
  },
  addExtensions() {
    return [tp];
  }
}), Ia = 5, to = 10, $a = 2, lp = B({
  name: "CreateTablePopover",
  components: {
    ElPopover: Pt
  },
  setup(e, { emit: t }) {
    const a = R("t"), l = q(), o = q(!1);
    return { t: a, popoverVisible: o, popoverRef: l, confirmCreateTable: (s, u) => {
      ge(l).hide(), t("createTable", { row: s, col: u });
    } };
  },
  data() {
    return {
      tableGridSize: {
        row: Ia,
        col: Ia
      },
      selectedTableGridSize: {
        row: $a,
        col: $a
      }
    };
  },
  methods: {
    selectTableGridSize(e, t) {
      e === this.tableGridSize.row && (this.tableGridSize.row = Math.min(e + 1, to)), t === this.tableGridSize.col && (this.tableGridSize.col = Math.min(t + 1, to)), this.selectedTableGridSize.row = e, this.selectedTableGridSize.col = t;
    },
    resetTableGridSize() {
      this.tableGridSize = {
        row: Ia,
        col: Ia
      }, this.selectedTableGridSize = {
        row: $a,
        col: $a
      };
    }
  }
}), op = { class: "table-grid-size-editor" }, ip = { class: "table-grid-size-editor__body" }, np = ["onMouseover", "onMousedown"], sp = { class: "table-grid-size-editor__footer" }, rp = { style: { width: "100%" } }, dp = { style: { padding: "5px 20px" } };
function up(e, t, a, l, o, i) {
  const s = ot;
  return n(), h(s, {
    ref: "popoverRef",
    modelValue: e.popoverVisible,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.popoverVisible = u),
    placement: "right",
    trigger: "hover",
    "popper-class": "el-tiptap-popper",
    onAfterLeave: e.resetTableGridSize
  }, {
    reference: r(() => [
      C("div", rp, [
        C("div", dp, M(e.t("editor.extensions.Table.buttons.insert_table")), 1)
      ])
    ]),
    default: r(() => [
      C("div", op, [
        C("div", ip, [
          (n(!0), v(L, null, G(e.tableGridSize.row, (u) => (n(), v("div", {
            key: "r" + u,
            class: "table-grid-size-editor__row"
          }, [
            (n(!0), v(L, null, G(e.tableGridSize.col, (m) => (n(), v("div", {
              key: "c" + m,
              class: x([{
                "table-grid-size-editor__cell--selected": m <= e.selectedTableGridSize.col && u <= e.selectedTableGridSize.row
              }, "table-grid-size-editor__cell"]),
              onMouseover: (f) => e.selectTableGridSize(u, m),
              onMousedown: (f) => e.confirmCreateTable(u, m)
            }, [...t[1] || (t[1] = [
              C("div", { class: "table-grid-size-editor__cell__inner" }, null, -1)
            ])], 42, np))), 128))
          ]))), 128))
        ]),
        C("div", sp, M(e.selectedTableGridSize.row) + " X " + M(e.selectedTableGridSize.col), 1)
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "onAfterLeave"]);
}
const wi = /* @__PURE__ */ j(lp, [["render", up]]), pp = B({
  name: "TablePopover",
  components: {
    ElPopover: Pt,
    CommandButton: H,
    CreateTablePopover: wi
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = q();
    return { t: e, enableTooltip: t, isCodeViewMode: a, popoverRef: l };
  },
  computed: {
    isTableActive() {
      return ha(this.editor.state);
    },
    enableMergeCells() {
      return Pd(this.editor.state);
    },
    enableSplitCell() {
      return Md(this.editor.state);
    }
  },
  methods: {
    createTable({ row: e, col: t }) {
      this.commands().insertTable({
        rows: e,
        cols: t,
        withHeaderRow: !0
      });
    },
    commands() {
      return this.editor.commands;
    }
  }
});
function mp(e, t, a, l, o, i) {
  const s = H, u = wi, m = kt, f = Oa, c = Ft, _ = _t;
  return n(), h(_, {
    placement: "bottom",
    trigger: "click",
    ref: "popoverRef",
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(c, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          d(m, {
            class: "el-tiptap-dropdown-menu__item",
            style: { padding: "0" }
          }, {
            default: r(() => [
              d(u, { onCreateTable: e.createTable }, null, 8, ["onCreateTable"])
            ]),
            _: 1
          }),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().addColumnBefore,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.add_column_before")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().addColumnAfter,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.add_column_after")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().deleteColumn,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.delete_column")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().addRowBefore,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.add_row_before")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().addRowAfter,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.add_row_after")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().deleteRow,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.delete_row")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().mergeCells,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.merge_cells")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().splitCell,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.split_cell")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().deleteTable,
            class: x([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(e.t("editor.extensions.Table.buttons.delete_table")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"])
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", null, [
        d(s, {
          "is-active": e.isTableActive,
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.Table.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "table"
        }, null, 8, ["is-active", "enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 512);
}
const hp = /* @__PURE__ */ j(pp, [["render", mp]]), ao = Ls.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: hp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addExtensions() {
    return [Bs, Ns, js];
  }
}), fp = B({
  name: "IframeCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    async openInsertVideoControl() {
      ve.prompt("", this.t("editor.extensions.Iframe.control.title"), {
        confirmButtonText: this.t("editor.extensions.Iframe.control.confirm"),
        cancelButtonText: this.t("editor.extensions.Iframe.control.cancel"),
        inputPlaceholder: this.t("editor.extensions.Iframe.control.placeholder"),
        roundButton: !0
      }).then(({ value: e }) => {
        this.editor.commands.setIframe({ src: e });
      }).catch((e) => {
      });
    }
  }
});
function cp(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.openInsertVideoControl,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Iframe.tooltip"),
    readonly: e.isCodeViewMode,
    icon: "iframe"
  }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]);
}
const bp = /* @__PURE__ */ j(fp, [["render", cp]]);
B({
  name: "IframeView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe
});
const gp = pt.create({
  name: "iframe",
  // schema
  group: "block",
  selectable: !1,
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: (e) => e.getAttribute("src")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "iframe",
      it(e, {
        frameborder: 0,
        allowfullscreen: "true"
      })
    ];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addOptions() {
    return {
      button({ editor: e }) {
        return {
          component: bp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addNodeView() {
    return ({ editor: e, node: t, getPos: a, HTMLAttributes: l, decorations: o, extension: i }) => {
      const s = document.createElement("div"), u = document.createElement("iframe");
      return u.className = "iframe__embed", u.src = t.attrs.src, s.append(u), {
        dom: s
      };
    };
  }
}), lo = Us.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBold();
            },
            isActive: e.isActive("bold"),
            icon: "bold",
            tooltip: t("editor.extensions.Bold.tooltip")
          }
        };
      }
    };
  }
}), oo = Rs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleUnderline();
            },
            isActive: e.isActive("underline"),
            icon: "underline",
            tooltip: t("editor.extensions.Underline.tooltip")
          }
        };
      }
    };
  }
}), io = zs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleItalic();
            },
            isActive: e.isActive("italic"),
            icon: "italic",
            tooltip: t("editor.extensions.Italic.tooltip")
          }
        };
      }
    };
  }
}), yp = Hs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleStrike();
            },
            isActive: e.isActive("strike"),
            icon: "strikethrough",
            tooltip: t("editor.extensions.Strike.tooltip")
          }
        };
      }
    };
  }
}), vp = B({
  name: "AddLinkCommandButton",
  components: {
    ElDialog: qt,
    ElForm: ma,
    ElFormItem: pa,
    ElInput: Tt,
    ElCheckbox: ua,
    ElButton: $t,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ht,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: {
        href: "",
        openInNewTab: !0
      },
      popupWidth: "40%",
      addLinkDialogVisible: !1
    };
  },
  // watch: {
  // 	addLinkDialogVisible() {
  // 		this.linkAttrs = { href: '', openInNewTab: true };
  // 	},
  // },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("link");
    }
  },
  mounted() {
    this.popupWidth = le("40%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openAddLinkDialog() {
      this.initAttrs && this.initAttrs.href ? (this.linkAttrs.href = this.initAttrs.href, this.linkAttrs.openInNewTab = this.initAttrs.target === "_blank") : this.linkAttrs = { href: "", openInNewTab: !0 }, this.addLinkDialogVisible = !0;
    },
    closeAddLinkDialog() {
      this.addLinkDialogVisible = !1;
    },
    addLink() {
      let e = this.editor.commands;
      this.linkAttrs.openInNewTab ? e.setLink({
        href: this.linkAttrs.href,
        target: "_blank"
      }) : e.setLink({ href: this.linkAttrs.href }), this.closeAddLinkDialog();
    }
  }
});
function wp(e, t, a, l, o, i) {
  const s = H, u = Ie, m = St, f = wt, c = ie, _ = Ce;
  return n(), v("div", null, [
    d(s, {
      "is-active": e.editor.isActive("link"),
      readonly: e.isCodeViewMode,
      command: e.openAddLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Link.add.tooltip"),
      icon: "link"
    }, null, 8, ["is-active", "readonly", "command", "enable-tooltip", "tooltip"]),
    d(_, {
      modelValue: e.addLinkDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = ($) => e.addLinkDialogVisible = $),
      title: e.t("editor.extensions.Link.add.control.title"),
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(c, {
          round: "",
          onClick: e.closeAddLinkDialog
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.add.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(c, {
          type: "primary",
          round: "",
          onMousedown: t[1] || (t[1] = U(() => {
          }, ["prevent"])),
          onClick: e.addLink
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.add.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(f, {
          model: e.linkAttrs,
          "label-position": "right"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Link.add.control.href"),
              prop: "href"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.linkAttrs.href,
                  "onUpdate:modelValue": t[0] || (t[0] = ($) => e.linkAttrs.href = $),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"])
  ]);
}
const Sp = /* @__PURE__ */ j(vp, [["render", wp]]), no = qs.extend({
  priority: 100,
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: Sp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new gs({
        props: {
          handleClick(e, t) {
            const { schema: a, doc: l, tr: o } = e.state;
            if (a.marks && a.marks.link) {
              const i = kn(l.resolve(t), a.marks.link);
              if (!i) return !1;
              const s = l.resolve(i.from), u = l.resolve(i.to), m = o.setSelection(new Wa(s, u));
              return e.dispatch(m), !0;
            }
            return !1;
          }
        }
      })
    ];
  }
}), Si = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000"
], _p = B({
  name: "ColorPopover",
  components: {
    ElButton: $t,
    ElPopover: Pt,
    ElInput: Tt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup(e) {
    const t = R("t"), a = R("enableTooltip", !0), l = R("isCodeViewMode", !1), o = q(), i = q("");
    function s(m) {
      let f = e.editor.commands;
      m ? f.setColor(m) : f.unsetColor(), ge(o).hide();
    }
    const u = Z(() => qa(e.editor.state, "textStyle").color || "");
    return at(u, (m) => {
      i.value = m;
    }), {
      t,
      enableTooltip: a,
      isCodeViewMode: l,
      popoverRef: o,
      colorText: i,
      selectedColor: u,
      confirmColor: s
    };
  },
  computed: {
    colorSet() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "color").options.colors;
    }
  }
}), Fp = { class: "color-set" }, kp = ["onClick"], Cp = { class: "color__wrapper" }, Dp = { class: "color-hex" };
function Ip(e, t, a, l, o, i) {
  const s = fl, u = ie, m = H, f = ot;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      C("span", null, [
        d(m, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.TextColor.tooltip"),
          icon: "font-color",
          readonly: e.isCodeViewMode
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    default: r(() => [
      C("div", Fp, [
        (n(!0), v(L, null, G(e.colorSet, (c) => (n(), v("div", {
          key: c,
          class: "color__wrapper"
        }, [
          C("div", {
            style: te({
              "background-color": c
            }),
            class: x([{ "color--selected": e.selectedColor === c }, "color"]),
            onMousedown: t[0] || (t[0] = U(() => {
            }, ["prevent"])),
            onClick: U((_) => e.confirmColor(c), ["stop"])
          }, null, 46, kp)
        ]))), 128)),
        C("div", Cp, [
          C("div", {
            class: "color color--remove",
            onMousedown: t[1] || (t[1] = U(() => {
            }, ["prevent"])),
            onClick: t[2] || (t[2] = U((c) => e.confirmColor(), ["stop"]))
          }, null, 32)
        ])
      ]),
      C("div", Dp, [
        d(s, {
          modelValue: e.colorText,
          "onUpdate:modelValue": t[3] || (t[3] = (c) => e.colorText = c),
          class: "color-hex__input ml-1",
          teleported: !1
        }, null, 8, ["modelValue"]),
        d(u, {
          text: "",
          type: "primary",
          size: "small",
          class: "color-hex__button",
          onClick: t[4] || (t[4] = (c) => e.confirmColor(e.colorText))
        }, {
          default: r(() => [...t[5] || (t[5] = [
            D(" OK ", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["disabled"]);
}
const $p = /* @__PURE__ */ j(_p, [["render", Ip]]), so = Ws.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      colors: Si,
      button({ editor: e, t }) {
        return {
          component: $p,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addExtensions() {
    return [Ks];
  }
}), Tp = B({
  name: "HighlightPopover",
  components: {
    ElButton: $t,
    ElPopover: Pt,
    ElInput: Tt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup(e) {
    const t = R("t"), a = R("enableTooltip", !0), l = R("isCodeViewMode", !1), o = q(null), i = q(!1), s = q("");
    function u(f) {
      let c = e.editor.commands;
      f ? c.setHighlight({ color: f }) : c.unsetHighlight(), ge(o).hide();
    }
    const m = Z(() => qa(e.editor.state, "highlight").color || "");
    return at(m, (f) => {
      s.value = f;
    }), {
      t,
      colorBg: s,
      enableTooltip: a,
      isCodeViewMode: l,
      popoverRef: o,
      selectedColor: m,
      popoverVisible: i,
      confirmColor: u
    };
  },
  computed: {
    colorSet() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "highlight").options.colors;
    }
  }
}), Pp = { class: "color-set" }, Mp = ["onClick"], Vp = { class: "color__wrapper" }, Ap = { class: "color-hex" };
function Ep(e, t, a, l, o, i) {
  const s = fl, u = ie, m = H, f = ot;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      C("span", null, [
        d(m, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.TextHighlight.tooltip"),
          icon: "highlight",
          readonly: e.isCodeViewMode
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    default: r(() => [
      C("div", Pp, [
        (n(!0), v(L, null, G(e.colorSet, (c) => (n(), v("div", {
          key: c,
          class: "color__wrapper"
        }, [
          C("div", {
            style: te({
              "background-color": c
            }),
            class: x([{ "color--selected": e.selectedColor === c }, "color"]),
            onMousedown: t[0] || (t[0] = U(() => {
            }, ["prevent"])),
            onClick: U((_) => e.confirmColor(c), ["stop"])
          }, null, 46, Mp)
        ]))), 128)),
        C("div", Vp, [
          C("div", {
            class: "color color--remove",
            onMousedown: t[1] || (t[1] = U(() => {
            }, ["prevent"])),
            onClick: t[2] || (t[2] = U((c) => e.confirmColor(), ["stop"]))
          }, null, 32)
        ])
      ]),
      C("div", Ap, [
        d(s, {
          modelValue: e.colorBg,
          "onUpdate:modelValue": t[3] || (t[3] = (c) => e.colorBg = c),
          class: "color-hex__input ml-1",
          teleported: !1
        }, null, 8, ["modelValue"]),
        d(u, {
          text: "",
          type: "primary",
          size: "small",
          class: "color-hex__button",
          onClick: t[4] || (t[4] = (c) => e.confirmColor(e.colorBg))
        }, {
          default: r(() => [...t[5] || (t[5] = [
            D(" OK ", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["disabled"]);
}
const Op = /* @__PURE__ */ j(Tp, [["render", Ep]]), ro = xs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: !0,
      colors: Si,
      button({ editor: e, t }) {
        return {
          component: Op,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), Lp = [
  "Arial",
  "Arial Black",
  "Georgia",
  "Impact",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New",
  "Lucida Console",
  "Monaco",
  "monospace"
], Bp = Lp.reduce(
  (e, t) => (e[t] = t, e),
  {}
), Np = B({
  name: "FontFamilyDropdown",
  components: {
    ElDropdown: za,
    ElDropdownMenu: Ra,
    ElDropdownItem: Ua,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  computed: {
    fontFamilies() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "fontFamily").options.fontFamilyMap;
    },
    activeFontFamily() {
      return qa(this.editor.state, "textStyle").fontFamily || "";
    }
  },
  methods: {
    toggleFontType(e) {
      e === this.activeFontFamily ? this.editor.commands.unsetFontFamily() : this.editor.commands.setFontFamily(e);
    }
  }
}), jp = ["data-font"];
function Up(e, t, a, l, o, i) {
  const s = H, u = kt, m = Ft, f = _t;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: e.toggleFontType,
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(m, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          (n(!0), v(L, null, G(e.fontFamilies, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: x([{
              "el-tiptap-dropdown-menu__item--active": c === e.activeFontFamily
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", {
                "data-font": c,
                style: te({ "font-family": c })
              }, M(c), 13, jp)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.FontType.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "font-family"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["onCommand"]);
}
const Rp = /* @__PURE__ */ j(Np, [["render", Up]]), zp = Ze.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"],
      fontFamilyMap: Bp,
      button({ editor: e, t }) {
        return {
          component: Rp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (e) => e.style.fontFamily.replace(/['"]/g, ""),
            renderHTML: (e) => e.fontFamily ? {
              style: `font-family: ${e.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
      unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
  // addExtensions() {
  // 	return [TextStyle];
  // },
}), Hp = [
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72"
], _i = "default", qp = /([\d.]+)px/i;
function Wp(e) {
  const t = e.match(qp);
  if (!t) return "";
  const a = t[1];
  return a || "";
}
const Kp = B({
  name: "FontSizeDropdown",
  components: {
    ElDropdown: za,
    ElDropdownMenu: Ra,
    ElDropdownItem: Ua,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a, defaultSize: _i };
  },
  computed: {
    fontSizes() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "fontSize").options.fontSizes;
    },
    activeFontSize() {
      return qa(this.editor.state, "textStyle").fontSize || "";
    }
  },
  methods: {
    toggleFontSize(e) {
      e === this.activeFontSize ? this.editor.commands.unsetFontSize() : this.editor.commands.setFontSize(e);
    }
  }
}), xp = { "data-font-size": "default" }, Gp = ["data-font-size"];
function Yp(e, t, a, l, o, i) {
  const s = H, u = kt, m = Ft, f = _t;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: e.toggleFontSize,
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(m, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          d(u, {
            command: e.defaultSize,
            class: x([{
              "el-tiptap-dropdown-menu__item--active": e.activeFontSize === e.defaultSize
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", xp, M(e.t("editor.extensions.FontSize.default")), 1)
            ]),
            _: 1
          }, 8, ["command", "class"]),
          (n(!0), v(L, null, G(e.fontSizes, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: x([{
              "el-tiptap-dropdown-menu__item--active": c === e.activeFontSize
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", { "data-font-size": c }, M(c), 9, Gp)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.FontSize.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "font-size"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["onCommand"]);
}
const Jp = /* @__PURE__ */ j(Kp, [["render", Yp]]), Xp = Ze.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
      fontSizes: Hp,
      button({ editor: e, t }) {
        return {
          component: Jp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => Wp(e.style.fontSize) || "",
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${e.fontSize}px`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: _i }).removeEmptyTextStyle().run()
    };
  }
  // addExtensions() {
  // 	return [TextStyle];
  // },
}), Qp = B({
  name: "AddYoutubeCommandButton",
  components: {
    ElDialog: qt,
    ElForm: ma,
    ElFormItem: pa,
    ElInput: Tt,
    ElCheckbox: ua,
    ElButton: $t,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ht,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  data() {
    return {
      youtubeAttrs: {
        url: "",
        width: 640,
        height: 480
      },
      addYoutubeDialogVisible: !1
    };
  },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("youtube");
    }
  },
  methods: {
    openAddYoutubeDialog() {
      this.initAttrs && this.initAttrs.src ? (this.youtubeAttrs.url = this.initAttrs.src, this.youtubeAttrs.width = this.initAttrs.width, this.youtubeAttrs.height = this.initAttrs.height) : this.youtubeAttrs = { url: "", width: 640, height: 480 }, this.addYoutubeDialogVisible = !0;
    },
    closeAddYoutubeDialog() {
      this.addYoutubeDialogVisible = !1;
    },
    addVideo() {
      this.editor.commands.setYoutubeVideo({
        src: this.youtubeAttrs.url,
        width: Math.max(320, this.youtubeAttrs.width) || 640,
        height: Math.max(180, this.youtubeAttrs.height) || 480
      }), this.closeAddYoutubeDialog();
    }
  }
});
function Zp(e, t, a, l, o, i) {
  const s = H, u = Ie, m = St, f = jt, c = ut, _ = Nt, $ = wt, g = ie, I = Ce;
  return n(), v("div", null, [
    d(s, {
      "is-active": e.editor.isActive("youtube"),
      readonly: e.isCodeViewMode,
      command: e.openAddYoutubeDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Insert Youtube",
      icon: "video"
    }, null, 8, ["is-active", "readonly", "command", "enable-tooltip"]),
    d(I, {
      modelValue: e.addYoutubeDialogVisible,
      "onUpdate:modelValue": t[4] || (t[4] = (F) => e.addYoutubeDialogVisible = F),
      title: "Insert Youtube",
      "append-to-body": !0,
      width: "400px",
      class: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(g, {
          round: "",
          onClick: e.closeAddYoutubeDialog
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.add.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(g, {
          type: "primary",
          round: "",
          onMousedown: t[3] || (t[3] = U(() => {
          }, ["prevent"])),
          onClick: e.addVideo
        }, {
          default: r(() => [
            D(M(e.t("editor.extensions.Link.add.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d($, {
          model: e.youtubeAttrs,
          "label-position": "top"
        }, {
          default: r(() => [
            d(m, {
              label: "Enter YouTube URL",
              prop: "url"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.youtubeAttrs.url,
                  "onUpdate:modelValue": t[0] || (t[0] = (F) => e.youtubeAttrs.url = F),
                  autocomplete: "off",
                  clearable: ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            d(_, { gutter: 20 }, {
              default: r(() => [
                d(c, { span: 12 }, {
                  default: r(() => [
                    d(m, {
                      label: "Width",
                      prop: "width"
                    }, {
                      default: r(() => [
                        d(f, {
                          modelValue: e.youtubeAttrs.width,
                          "onUpdate:modelValue": t[1] || (t[1] = (F) => e.youtubeAttrs.width = F),
                          autocomplete: "off",
                          min: 320,
                          max: 1024
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                d(c, { span: 12 }, {
                  default: r(() => [
                    d(m, {
                      label: "Height",
                      prop: "height"
                    }, {
                      default: r(() => [
                        d(f, {
                          modelValue: e.youtubeAttrs.height,
                          "onUpdate:modelValue": t[2] || (t[2] = (F) => e.youtubeAttrs.height = F),
                          autocomplete: "off",
                          min: 180,
                          max: 720
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const em = /* @__PURE__ */ j(Qp, [["render", Zp]]), tm = Gs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: em,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), am = Ys.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleSubscript();
            },
            isActive: e.isActive("subscript"),
            icon: "subscript",
            tooltip: "Subscript"
          }
        };
      }
    };
  }
}), lm = Js.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleSuperscript();
            },
            isActive: e.isActive("superscript"),
            icon: "superscript",
            tooltip: "Superscript"
          }
        };
      }
    };
  }
}), om = { class: "ml-2 text-3" }, im = ["src"], nm = /* @__PURE__ */ B({
  __name: "SdUploadFile",
  props: {
    uploadType: String,
    perPage: { type: Number, required: !1, default: 30 },
    readonly: { type: Boolean, required: !1, default: !1 },
    handlePreview: {
      type: Function,
      required: !1
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = q(""), a = q(!1), l = De({}), o = De({
      type: {
        editor: {
          group: "editor_file",
          uploadUrl: "/v1/files/editor-file-upload",
          deleteUrl: "/v1/files/remove-one"
        }
      },
      total: 0,
      offset: 0,
      totalPage: 0
    }), i = q([]), s = e, u = De({
      providerId: "getfiles-uploadfile",
      providerType: me.SYS,
      options: {
        page: 1,
        limit: s.perPage ? s.perPage : 30
      },
      params: { userId: s.userState.user?.user_id }
    }), m = Z({
      get() {
        return u.options?.page || 1;
      },
      set(y) {
        u.options ? u.options.page = y : u.options = { page: y };
      }
    });
    xe(() => {
      f();
    });
    function f() {
      s.userState.crudGetAll({ sdProvider: u, totalEnable: !0 }, (y) => {
        o.total = y.total, o.offset = y.offset, o.totalPage = y.data.length;
        const T = y.data;
        i.value = [], T.forEach((A) => {
          i.value.push({
            name: A.name,
            url: A.file_path,
            response: A,
            percentage: 100
          });
        });
      });
    }
    const c = Z(() => s.uploadType ? s.uploadType : "editor"), _ = Z(() => o.total.toLocaleString()), $ = Z(() => (o.totalPage > 0 ? o.offset + 1 : o.offset).toLocaleString()), g = Z(() => (o.offset + o.totalPage).toLocaleString());
    function I(y) {
      f();
    }
    function F() {
      m.value = 1, f();
    }
    const p = (y) => {
      if (pu(y, ["zip", "rar", "csv", "doc", "docx", "xls", "xlsx", "pdf"], hu)) {
        if (y.size / 1024 / 1024 > 15)
          return O.error("Upload File size can not exceed 15MB!"), !1;
      } else return O.error("Upload File must be zip, rar, csv, doc, docx, xls, xlsx, pdf format!"), !1;
      return !0;
    }, w = (y, T) => y.percentage == 100 ? ve.confirm(`Are you sure you want to delete ${y.name} ?`, "Confirmation", {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning"
    }).then(
      () => !0,
      () => !1
    ) : !0, S = (y) => {
      if (y.percentage == 100) {
        const T = y.response, A = {
          fileName: T.file_name ? T.file_name : T.fileName ? T.fileName : "",
          fileGroup: T.file_group ? T.file_group : T.fileGroup ? T.fileGroup : "",
          fileId: T._id ? T._id : T.fileId ? T.fileId : ""
        };
        be.delete(`${s.userState.host}${o.type[c.value].deleteUrl}`, {
          data: A,
          headers: {
            Authorization: `Bearer ${s.userState.user?.token}`
          }
        }).then((E) => {
          i.value = i.value.filter((W) => W.uid !== y.uid), o.total--, o.totalPage--;
        }).catch((E) => {
          console.log(E);
        });
      }
    }, N = (y, T, A) => {
      o.total++, o.totalPage++, i.value[i.value.length - 1] = {
        name: y.fileName,
        url: y.filePath,
        response: y,
        percentage: 100
      };
    };
    return (y, T) => {
      const A = ie, E = Ke, W = hl, oe = La, K = Ce;
      return n(), v(L, null, [
        d(W, {
          action: e.userState.host + o.type[c.value].uploadUrl,
          headers: {
            Authorization: `Bearer ${s.userState.user?.token}`
          },
          accept: ".zip,.rar,.csv,.doc,.docx,.xls,.xlsx,.pdf",
          "show-file-list": !0,
          data: l,
          "list-type": "text",
          "file-list": i.value,
          "onUpdate:fileList": T[0] || (T[0] = (Ue) => i.value = Ue),
          disabled: !!e.readonly,
          "on-preview": e.handlePreview,
          "on-remove": S,
          "before-remove": w,
          "on-success": N,
          "before-upload": p
        }, {
          trigger: r(() => [
            d(A, { type: "primary" }, {
              default: r(() => [...T[3] || (T[3] = [
                D("Click to upload", -1)
              ])]),
              _: 1
            })
          ]),
          tip: r(() => [
            C("div", null, [
              d(E, {
                style: { "font-size": "12px" },
                type: "warning"
              }, {
                default: r(() => [...T[4] || (T[4] = [
                  D("Format zip, rar, csv, doc, docx, xls, xlsx, pdf files with a size less than 15MB.", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            d(A, {
              class: "ml-1",
              style: { "margin-top": "0px" },
              type: "info",
              plain: "",
              icon: "Refresh",
              onClick: F
            }),
            C("span", om, "Showing " + M($.value) + "-" + M(g.value) + " of " + M(_.value) + " items.", 1)
          ]),
          _: 1
        }, 8, ["action", "headers", "data", "file-list", "disabled", "on-preview"]),
        o.total > (u.options?.limit || 0) ? (n(), h(oe, {
          key: 0,
          "current-page": m.value,
          "onUpdate:currentPage": T[1] || (T[1] = (Ue) => m.value = Ue),
          "page-size": s.perPage,
          onCurrentChange: I,
          class: "mt-1",
          background: "",
          layout: "prev, pager, next",
          total: o.total
        }, null, 8, ["current-page", "page-size", "total"])) : b("", !0),
        d(K, {
          modelValue: a.value,
          "onUpdate:modelValue": T[2] || (T[2] = (Ue) => a.value = Ue)
        }, {
          default: r(() => [
            C("img", {
              "w-full": "",
              src: t.value,
              alt: "Preview Image"
            }, null, 8, im)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), sm = B({
  name: "UploadFileCommandButton",
  components: {
    ElDialog: qt,
    ElForm: ma,
    ElFormItem: pa,
    ElInput: Tt,
    ElCheckbox: ua,
    ElButton: $t,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ht,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0), l = R("userState");
    return { t: e, enableTooltip: t, isCodeViewMode: a, userState: l };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: {
        href: "",
        openInNewTab: !0
      },
      popupWidth: "50%",
      uploadFileDialogVisible: !1
    };
  },
  // watch: {
  // 	addLinkDialogVisible() {
  // 		this.linkAttrs = { href: '', openInNewTab: true };
  // 	},
  // },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("link");
    }
  },
  mounted() {
    this.popupWidth = le("50%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("50%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openUploadFileLinkDialog() {
      this.uploadFileDialogVisible = !0;
    },
    closeUploadFileDialog() {
      this.uploadFileDialogVisible = !1;
    },
    addLink(e) {
      let t = this.editor.commands;
      this.linkAttrs.openInNewTab ? t.setLink({
        href: e.url ? e.url : "#",
        target: "_blank"
      }) : t.setLink({ href: e.url ? e.url : "#" }), this.closeUploadFileDialog();
    }
  }
});
function rm(e, t, a, l, o, i) {
  const s = H, u = nm, m = Ce;
  return n(), v("div", null, [
    d(s, {
      readonly: e.isCodeViewMode,
      command: e.openUploadFileLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Upload File",
      icon: "upload-file"
    }, null, 8, ["readonly", "command", "enable-tooltip"]),
    d(m, {
      modelValue: e.uploadFileDialogVisible,
      "onUpdate:modelValue": t[0] || (t[0] = (f) => e.uploadFileDialogVisible = f),
      title: "Upload File",
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-link-dialog"
    }, {
      default: r(() => [
        d(u, {
          "upload-type": "editor",
          readonly: !e.editor?.isEditable,
          "handle-preview": e.addLink,
          "user-state": e.userState
        }, null, 8, ["readonly", "handle-preview", "user-state"])
      ]),
      _: 1
    }, 8, ["modelValue", "width"])
  ]);
}
const dm = /* @__PURE__ */ j(sm, [["render", rm]]), um = Ze.create({
  name: "UploadFile",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: dm,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), uo = Xs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.setHorizontalRule();
            },
            icon: "horizontal-rule",
            tooltip: t("editor.extensions.HorizontalRule.tooltip")
          }
        };
      }
    };
  }
}), po = Qs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return [
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.undo();
              },
              icon: "undo",
              tooltip: t("editor.extensions.History.tooltip.undo")
            }
          },
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.redo();
              },
              icon: "redo",
              tooltip: t("editor.extensions.History.tooltip.redo")
            }
          }
        ];
      }
    };
  }
}), mo = Zs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph", "list_item", "title"],
      button({ editor: e, extension: t, t: a }) {
        return t.options.alignments.reduce((l, o) => l.concat({
          component: H,
          componentProps: {
            command: () => {
              e.isActive({ textAlign: o }) ? e.commands.unsetTextAlign() : e.commands.setTextAlign(o);
            },
            isActive: o === "left" ? !1 : e.isActive({ textAlign: o }),
            icon: `align-${o}`,
            tooltip: a(`editor.extensions.TextAlign.buttons.align_${o}.tooltip`)
          }
        }), []);
      }
    };
  }
});
var ea = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(ea || {});
function pm(e, t, a, l) {
  const { doc: o, selection: i } = e;
  if (!o || !i || !(i instanceof Wa || i instanceof yl))
    return e;
  const { from: s, to: u } = i;
  return o.nodesBetween(s, u, (m, f) => {
    const c = m.type;
    return a.includes(c.name) ? (e = mm(e, f, t), !1) : !Cn(m.type.name, l.extensionManager.extensions);
  }), e;
}
function mm(e, t, a) {
  if (!e.doc) return e;
  const l = e.doc.nodeAt(t);
  if (!l) return e;
  const s = oi((l.attrs.indent || 0) + a, 0, 7);
  if (s === l.attrs.indent) return e;
  const u = {
    ...l.attrs,
    indent: s
  };
  return e.setNodeMarkup(t, l.type, u, l.marks);
}
function ho({ delta: e, types: t }) {
  return ({ state: a, dispatch: l, editor: o }) => {
    const { selection: i } = a;
    let { tr: s } = a;
    return s = s.setSelection(i), s = pm(s, e, t, o), s.docChanged ? (l && l(s), !0) : !1;
  };
}
const fo = Ze.create({
  name: "indent",
  addOptions() {
    return {
      types: ["paragraph", "heading", "blockquote"],
      minIndent: ea.min,
      maxIndent: ea.max,
      button({ editor: e, t }) {
        return [
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.indent();
              },
              icon: "indent",
              tooltip: t("editor.extensions.Indent.buttons.indent.tooltip")
            }
          },
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.outdent();
              },
              icon: "outdent",
              tooltip: t("editor.extensions.Indent.buttons.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (e) => {
              const t = e.getAttribute("data-indent");
              return (t ? parseInt(t, 10) : 0) || 0;
            },
            renderHTML: (e) => e.indent ? { "data-indent": e.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => ho({
        delta: ea.more,
        types: this.options.types
      }),
      outdent: () => ho({
        delta: ea.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
}), Fi = ["paragraph", "heading", "list_item", "todo_item"], ki = /^\d+(.\d+)?$/;
function hm(e, t) {
  const { selection: a, doc: l } = e, { from: o, to: i } = a;
  let s = !0, u = !1;
  return l.nodesBetween(o, i, (m) => {
    const f = m.type, c = m.attrs.lineHeight || Va;
    return Fi.includes(f.name) ? s && t === c ? (s = !1, u = !0, !1) : f.name !== "list_item" && f.name !== "todo_item" : s;
  }), u;
}
function fm(e) {
  if (!e) return "";
  let t = String(e);
  if (ki.test(t)) {
    const a = parseFloat(t);
    t = String(Math.round(a * 100)) + "%";
  }
  return parseFloat(t) * fi + "%";
}
function cm(e) {
  if (!e || e === Va) return "";
  let t = e;
  if (ki.test(e)) {
    const a = parseFloat(e);
    if (t = String(Math.round(a * 100)) + "%", t === Va) return "";
  }
  return parseFloat(t) / fi + "%";
}
function bm(e, t) {
  const { selection: a, doc: l } = e;
  if (!a || !l || !(a instanceof Wa || a instanceof yl))
    return e;
  const { from: o, to: i } = a, s = [], u = t && t !== Va ? t : null;
  return l.nodesBetween(o, i, (m, f) => {
    const c = m.type;
    return Fi.includes(c.name) ? ((m.attrs.lineHeight || null) !== u && s.push({
      node: m,
      pos: f,
      nodeType: c
    }), c.name !== "list_item" && c.name !== "todo_item") : !0;
  }), s.length && s.forEach((m) => {
    const { node: f, pos: c, nodeType: _ } = m;
    let { attrs: $ } = f;
    $ = {
      ...$,
      lineHeight: u
    }, e = e.setNodeMarkup(c, _, $, f.marks);
  }), e;
}
function gm(e) {
  return ({ state: t, dispatch: a }) => {
    const { selection: l } = t;
    let { tr: o } = t;
    return o = o.setSelection(l), o = bm(o, e), o.docChanged ? (a && a(o), !0) : !1;
  };
}
const ym = B({
  name: "LineHeightDropdown",
  components: {
    ElDropdown: za,
    ElDropdownMenu: Ra,
    ElDropdownItem: Ua,
    CommandButton: H
  },
  props: {
    editor: {
      type: Oe,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  computed: {
    lineHeights() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "lineHeight").options.lineHeights;
    }
  },
  methods: {
    isLineHeightActive(e) {
      return hm(this.editor.state, e);
    }
  }
});
function vm(e, t, a, l, o, i) {
  const s = H, u = kt, m = Ft, f = _t;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: t[0] || (t[0] = (c) => e.editor.commands.setLineHeight(c))
  }, {
    dropdown: r(() => [
      d(m, {
        slot: "dropdown",
        class: "el-tiptap-dropdown-menu"
      }, {
        default: r(() => [
          (n(!0), v(L, null, G(e.lineHeights, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: x([{
              "el-tiptap-dropdown-menu__item--active": e.isLineHeightActive(c)
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              C("span", null, M(c), 1)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.LineHeight.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "text-height"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  });
}
const wm = /* @__PURE__ */ j(ym, [["render", vm]]), Sm = Ze.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: ["100%", "115%", "150%", "200%", "250%", "300%"],
      button({ editor: e }) {
        return {
          component: wm,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => cm(e.style.lineHeight) || null,
            renderHTML: (e) => e.lineHeight ? {
              style: `line-height: ${fm(e.lineHeight)};`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => gm(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
}), co = Ze.create({
  name: "formatClear",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.unsetAllMarks();
            },
            icon: "clear-format",
            tooltip: t("editor.extensions.FormatClear.tooltip")
          }
        };
      }
    };
  }
}), _m = B({
  name: "FullscreenCommandButton",
  components: {
    CommandButton: H
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isFullscreen", !1), l = R("toggleFullscreen");
    return { t: e, enableTooltip: t, isFullscreen: a, toggleFullscreen: l };
  },
  computed: {
    buttonTooltip() {
      return this.isFullscreen ? this.t("editor.extensions.Fullscreen.tooltip.exit_fullscreen") : this.t("editor.extensions.Fullscreen.tooltip.fullscreen");
    }
  }
});
function Fm(e, t, a, l, o, i) {
  const s = H;
  return n(), v("div", null, [
    d(s, {
      command: () => e.toggleFullscreen(!e.isFullscreen),
      "enable-tooltip": e.enableTooltip,
      tooltip: e.buttonTooltip,
      icon: e.isFullscreen ? "compress" : "expand",
      "is-active": e.isFullscreen
    }, null, 8, ["command", "enable-tooltip", "tooltip", "icon", "is-active"])
  ]);
}
const km = /* @__PURE__ */ j(_m, [["render", Fm]]), Cm = Ze.create({
  name: "fullscreen",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: km
        };
      }
    };
  }
});
function Dm(e) {
  const a = Array.from(document.querySelectorAll("style, link")).reduce((s, u) => s + u.outerHTML, "") + e.outerHTML, l = document.createElement("iframe");
  l.id = "el-tiptap-iframe", l.setAttribute("style", "position: absolute; width: 0; height: 0; top: -10px; left: -10px;"), document.body.appendChild(l);
  const o = l.contentWindow, i = l.contentDocument || l.contentWindow && l.contentWindow.document;
  i && (i.open(), i.write(a), i.close()), o && (l.onload = function() {
    try {
      setTimeout(() => {
        o.focus();
        try {
          o.document.execCommand("print", !1) || o.print();
        } catch {
          o.print();
        }
        o.close();
      }, 10);
    } catch (s) {
      ci.error(s);
    }
    setTimeout(function() {
      document.body.removeChild(l);
    }, 100);
  });
}
function Im(e) {
  const t = e.dom.closest(".el-tiptap-editor__content");
  return t ? (Dm(t), !0) : !1;
}
const $m = Ze.create({
  name: "print",
  addOptions() {
    return {
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.print();
            },
            icon: "print",
            tooltip: t("editor.extensions.Print.tooltip")
          }
        };
      }
    };
  },
  addCommands() {
    return {
      print: () => ({ view: e }) => Im(e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-p": () => this.editor.commands.print()
    };
  }
});
Ze.create({
  name: "selectAll",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.selectAll();
            },
            icon: "select-all",
            tooltip: t("editor.extensions.SelectAll.tooltip")
          }
        };
      }
    };
  }
});
const Tm = B({
  name: "CodeViewCommandButton",
  components: {
    CommandButton: H
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = R("toggleIsCodeViewMode");
    return { t: e, enableTooltip: t, isCodeViewMode: a, toggleIsCodeViewMode: l };
  }
});
function Pm(e, t, a, l, o, i) {
  const s = H;
  return n(), v("div", null, [
    d(s, {
      command: () => e.toggleIsCodeViewMode(!e.isCodeViewMode),
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.CodeView.tooltip"),
      icon: "file-code",
      "is-active": e.isCodeViewMode
    }, null, 8, ["command", "enable-tooltip", "tooltip", "is-active"])
  ]);
}
const Mm = /* @__PURE__ */ j(Tm, [["render", Pm]]), Vm = {
  minLines: 5,
  // maxLines: 25,
  wrap: !0,
  printMargin: !0,
  useWorker: !1,
  mode: "html"
}, Am = Ze.create({
  name: "codeView",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: Mm
        };
      },
      editorOptions: {
        ...Vm
      }
    };
  }
  // onBeforeCreate() {
  // 	if (!this.options.codemirror) {
  // 		Logger.warn('"CodeView" extension requires the CodeMirror library.');
  // 		return;
  // 	}
  // },
}), Em = B({
  name: "ElButtonView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return {
      isDark: de()
    };
  },
  mounted() {
  },
  methods: {
    getContent(e) {
      return e.map((t) => t.text).join("");
    }
  }
});
function Om(e, t, a, l, o, i) {
  const s = we, u = ie, m = X("node-view-wrapper");
  return n(), h(m, { class: "vue-component" }, {
    default: r(() => [
      d(u, ae(e.node.attrs, { dark: e.isDark }), {
        default: r(() => [
          (n(!0), v(L, null, G(e.node.content.content, (f, c) => (n(), v(L, null, [
            f.type.name === "ElIcon" ? (n(), h(s, {
              key: 0,
              "icon-name": f.attrs.icon,
              class: "mr-1"
            }, null, 8, ["icon-name"])) : (n(), v(L, { key: 1 }, [
              D(M(e.getContent(f.content.content)), 1)
            ], 64))
          ], 64))), 256))
        ]),
        _: 1
      }, 16, ["dark"])
    ]),
    _: 1
  });
}
const Lm = /* @__PURE__ */ j(Em, [["render", Om]]), bo = pt.create({
  name: "ElButton",
  group: "block",
  content: "block+",
  addAttributes() {
    return {
      type: {
        default: "primary"
      },
      size: {
        default: "default"
      },
      plain: {
        default: !1
      },
      text: {
        default: !1
      },
      bg: {
        default: !1
      },
      link: {
        default: !1
      },
      round: {
        default: !1
      },
      circle: {
        default: !1
      },
      disabled: {
        default: !1
      },
      tag: {
        default: "button"
      },
      icon: {
        default: ""
      },
      color: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-button"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-button", it(e), 0];
  },
  addNodeView() {
    return mt(Lm);
  }
}), Bm = B({
  name: "ElButtonGroupView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return {
      //isDark: useDark(),
    };
  },
  mounted() {
  },
  methods: {
    getContent(e) {
      return e.map((t) => t.text).join("");
    }
  }
});
function Nm(e, t, a, l, o, i) {
  const s = ie, u = Mo, m = X("node-view-wrapper");
  return n(), h(m, { class: "vue-component" }, {
    default: r(() => [
      d(u, ra(da(e.node.attrs)), {
        default: r(() => [
          (n(!0), v(L, null, G(e.node.content.content, (f, c) => (n(), v(L, null, [
            f.type.name === "ElButton" ? (n(), h(s, ae({
              key: 0,
              ref_for: !0
            }, f.attrs), {
              default: r(() => [
                D(M(e.getContent(f.content.content)), 1)
              ]),
              _: 2
            }, 1040)) : b("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 16)
    ]),
    _: 1
  });
}
const jm = /* @__PURE__ */ j(Bm, [["render", Nm]]), go = pt.create({
  name: "ElButtonGroup",
  group: "block",
  content: "block+",
  addAttributes() {
    return {
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-button-group"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-button-group", it(e), 0];
  },
  addNodeView() {
    return mt(jm);
  }
}), Um = B({
  name: "EliconView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function Rm(e, t, a, l, o, i) {
  const s = we, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, {
        "icon-name": e.node.attrs.icon
      }, null, 8, ["icon-name"])
    ]),
    _: 1
  });
}
const zm = /* @__PURE__ */ j(Um, [["render", Rm]]), yo = pt.create({
  name: "ElIcon",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      icon: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-icon"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-icon", it(e), 0];
  },
  addNodeView() {
    return mt(zm);
  }
}), Hm = B({
  name: "ElTagView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return { isDark: de() };
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function qm(e, t, a, l, o, i) {
  const s = Ut, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ae(e.node.attrs, { dark: e.isDark }), {
        default: r(() => [
          D(M(e.getContent()), 1)
        ]),
        _: 1
      }, 16, ["dark"])
    ]),
    _: 1
  });
}
const Wm = /* @__PURE__ */ j(Hm, [["render", qm]]), vo = pt.create({
  name: "ElTag",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      type: {
        default: "primary"
      },
      size: {
        default: "default"
      },
      effect: {
        default: "light"
      },
      closable: {
        default: !1
      },
      round: {
        default: !1
      },
      class: {
        default: ""
      },
      color: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-tag"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-tag", it(e), 0];
  },
  addNodeView() {
    return mt(Wm);
  }
}), Km = B({
  name: "ElImageView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function xm(e, t, a, l, o, i) {
  const s = Bt, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ra(da(e.node.attrs)), null, 16)
    ]),
    _: 1
  });
}
const Gm = /* @__PURE__ */ j(Km, [["render", xm]]), wo = pt.create({
  name: "ElImage",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      src: {
        default: ""
      },
      fit: {
        default: "cover"
      },
      style: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-image"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-image", it(e), 0];
  },
  addNodeView() {
    return mt(Gm);
  }
}), Ym = B({
  name: "ElAvatarView",
  components: {
    NodeViewWrapper: nt
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function Jm(e, t, a, l, o, i) {
  const s = cl, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ra(da(e.node.attrs)), null, 16)
    ]),
    _: 1
  });
}
const Xm = /* @__PURE__ */ j(Ym, [["render", Jm]]), So = pt.create({
  name: "ElAvatar",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      src: {
        default: ""
      },
      fit: {
        default: "cover"
      },
      shape: {
        default: "circle"
      },
      size: {
        default: "default"
      },
      icon: {
        default: ""
      },
      style: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-avatar"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-avatar", it(e), 0];
  },
  addNodeView() {
    return mt(Xm);
  }
}), Qm = B({
  name: "SdHtmlEditor",
  emits: ["update:modelValue", "onUpdate", "change", "create", "transaction", "blur", "focus", "destroy"],
  props: {
    modelValue: null,
    mode: { type: String, default: "mini" },
    placeholder: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: Boolean,
      default: !0
    },
    enableCharCount: {
      type: Boolean,
      default: !0
    },
    charCountMax: {
      type: Number,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    // ----- Editor Class -----
    editorClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorContentClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorMenubarClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorBubbleMenuClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorFooterClass: {
      type: [String, Array, Object],
      default: void 0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", t);
      }
    }
  },
  data() {
    return {
      extensions: []
      // refEditor: null as any,
    };
  },
  watch: {
    // mode: {
    // 	handler(val) {
    // 		if (val == 'mini' && !this.readonly) {
    // 			this.extensions = [
    // 				Document,
    // 				Text,
    // 				Paragraph,
    // 				Heading,
    // 				Bold.configure({ bubble: true }),
    // 				Underline.configure({ bubble: true }),
    // 				Italic.configure({ bubble: true }),
    // 				Link.configure({ bubble: true }),
    // 				TextAlign,
    // 				Highlight.configure({ bubble: true }),
    // 				Color.configure({ bubble: true }),
    // 				FormatClear.configure({ bubble: true }),
    // 				Indent,
    // 				OrderedList,
    // 				BulletList,
    // 				HardBreak,
    // 				Code,
    // 				HorizontalRule,
    // 				History,
    // 			];
    // 		} else {
    // 			this.extensions = [
    // 				Document,
    // 				Text,
    // 				Paragraph,
    // 				Heading,
    // 				Bold.configure({ bubble: true }),
    // 				Underline.configure({ bubble: true }),
    // 				Italic.configure({ bubble: true }),
    // 				Strike.configure({ bubble: true }),
    // 				Link.configure({ bubble: true }),
    // 				Blockquote,
    // 				TextAlign,
    // 				Table.configure({ resizable: true }),
    // 				Highlight.configure({ bubble: true }),
    // 				Color.configure({ bubble: true }),
    // 				FontSize,
    // 				FontFamily,
    // 				Subscript.configure({ bubble: true }),
    // 				Superscript.configure({ bubble: true }),
    // 				FormatClear.configure({ bubble: true }),
    // 				Indent,
    // 				OrderedList,
    // 				BulletList,
    // 				TaskList,
    // 				Youtube,
    // 				Image,
    // 				UploadFile,
    // 				// SelectAll,
    // 				HardBreak,
    // 				Code,
    // 				// Gapcursor,
    // 				// Dropcursor,
    // 				// CodeBlock,
    // 				CodeBlockLowlight,
    // 				LineHeight,
    // 				HorizontalRule,
    // 				Iframe,
    // 				Print,
    // 				CodeView,
    // 				Fullscreen,
    // 				History,
    // 			];
    // 		}
    // 	},
    // },
  },
  methods: {
    onUpdate(e, t) {
      this.$emit("onUpdate", e, t);
    },
    onFocus(e) {
      this.$emit("focus", e.event);
    },
    onBlur(e) {
      this.$emit("blur", e.event);
    },
    onDestroy() {
      this.$emit("destroy");
    },
    onTransaction(e) {
      this.$emit("transaction", e.transaction);
    },
    onCreate(e) {
      this.$emit("create", e.event);
    }
  },
  created() {
    this.mode == "mini" && !this.readonly ? this.extensions = [
      Yl,
      Ml,
      Vl,
      Jl,
      lo.configure({ bubble: !0 }),
      oo.configure({ bubble: !0 }),
      io.configure({ bubble: !0 }),
      no.configure({ bubble: !0 }),
      mo,
      ao.configure({ resizable: !0 }),
      ro.configure({ bubble: !0 }),
      so.configure({ bubble: !0 }),
      co.configure({ bubble: !0 }),
      fo,
      Ql,
      Xl,
      El,
      Al,
      uo,
      po,
      bo,
      go,
      yo,
      vo,
      wo,
      So
    ] : this.extensions = [
      Yl,
      Ml,
      Vl,
      Jl,
      lo.configure({ bubble: !0 }),
      oo.configure({ bubble: !0 }),
      io.configure({ bubble: !0 }),
      yp.configure({ bubble: !0 }),
      no.configure({ bubble: !0 }),
      du,
      mo,
      ao.configure({ resizable: !0 }),
      ro.configure({ bubble: !0 }),
      so.configure({ bubble: !0 }),
      Xp,
      zp,
      am.configure({ bubble: !0 }),
      lm.configure({ bubble: !0 }),
      co.configure({ bubble: !0 }),
      fo,
      Ql,
      Xl,
      ap,
      tm,
      Yu,
      um,
      // SelectAll,
      El,
      Al,
      // Gapcursor,
      // Dropcursor,
      // CodeBlock,
      uu,
      Sm,
      uo,
      gp,
      $m,
      Cm,
      po,
      Am,
      bo,
      go,
      yo,
      vo,
      wo,
      So
    ];
  }
});
function Zm(e, t, a, l, o, i) {
  const s = lu;
  return n(), h(s, {
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.value = u),
    extensions: e.extensions,
    placeholder: e.placeholder,
    lang: e.lang,
    width: e.width,
    height: e.height,
    readonly: e.readonly,
    tooltip: e.tooltip,
    charCountMax: e.charCountMax,
    locale: e.locale,
    editorClass: e.editorClass,
    editorContentClass: e.editorContentClass,
    editorBubbleMenuClass: e.editorBubbleMenuClass,
    editorMenubarClass: e.editorMenubarClass,
    editorFooterClass: e.editorFooterClass,
    enableCharCount: e.enableCharCount,
    userState: e.userState,
    onOnCreate: e.onCreate,
    onOnTransaction: e.onTransaction,
    onOnDestroy: e.onDestroy,
    onOnBlur: e.onBlur,
    onOnFocus: e.onFocus,
    onOnUpdate: e.onUpdate
  }, null, 8, ["modelValue", "extensions", "placeholder", "lang", "width", "height", "readonly", "tooltip", "charCountMax", "locale", "editorClass", "editorContentClass", "editorBubbleMenuClass", "editorMenubarClass", "editorFooterClass", "enableCharCount", "userState", "onOnCreate", "onOnTransaction", "onOnDestroy", "onOnBlur", "onOnFocus", "onOnUpdate"]);
}
const xa = /* @__PURE__ */ j(Qm, [["render", Zm]]), ll = {
  getUserAgent() {
    return navigator.userAgent;
  }
}, eh = B({
  name: "SdMaskedInput",
  emits: ["update:modelValue", "focus", "change", "blur", "keydown", "complete", "keypress", "paste"],
  props: {
    modelValue: null,
    slotChar: {
      type: String,
      default: "_"
    },
    mask: {
      type: String,
      default: ""
    },
    autoClear: {
      type: Boolean,
      default: !0
    },
    unmask: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tokens: {
      type: Object,
      default: {
        9: /[0-9]/,
        "#": /[A-Za-z]/,
        "*": /[A-Za-zก-ฮ0-9]/,
        ก: /[ก-ฮ]/,
        a: /[a-z]/,
        A: /[A-Z]/
      }
    }
  },
  data() {
    return {
      tests: null,
      partialPosition: null,
      len: null,
      firstNonMaskPos: null,
      defs: null,
      androidChrome: null,
      lastRequiredNonMaskPos: null,
      buffer: null,
      defaultBuffer: null,
      focus: null,
      caretTimeoutId: null,
      focusText: null,
      oldVal: null,
      isValueChecked: null
    };
  },
  watch: {
    mask: {
      deep: !0,
      handler(e) {
        this.initMask();
      }
    }
  },
  mounted() {
    this.initMask();
  },
  updated() {
    this.isValueUpdated() && this.updateValue();
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  },
  methods: {
    initMask() {
      this.tests = [], this.partialPosition = this.mask.length, this.len = this.mask.length, this.firstNonMaskPos = null, this.defs = this.tokens;
      let e = ll.getUserAgent();
      this.androidChrome = /chrome/i.test(e) && /android/i.test(e);
      let t = this.mask.split("");
      for (let a = 0; a < t.length; a++) {
        let l = t[a];
        l === "?" ? (this.len--, this.partialPosition = a) : this.defs[l] ? (this.tests.push(new RegExp(this.defs[l])), this.firstNonMaskPos === null && (this.firstNonMaskPos = this.tests.length - 1), a < this.partialPosition && (this.lastRequiredNonMaskPos = this.tests.length - 1)) : this.tests.push(null);
      }
      this.buffer = [];
      for (let a = 0; a < t.length; a++) {
        let l = t[a];
        l !== "?" && (this.defs[l] ? this.buffer.push(this.getPlaceholder(a)) : this.buffer.push(l));
      }
      this.defaultBuffer = this.buffer.join(""), this.updateValue(!1);
    },
    onChange(e) {
      let t = this.unmask ? this.getUnmaskedValue() : e.target.value;
      this.$emit("change", this.defaultBuffer !== t ? t : "");
    },
    onInput(e) {
      this.androidChrome ? this.handleAndroidInput(e) : this.handleInputChange(e), this.$emit("update:modelValue", e.target.value);
    },
    onFocus(e) {
      if (this.readonly)
        return;
      this.focus = !0, clearTimeout(this.caretTimeoutId);
      let t;
      this.focusText = this.$el.value, t = this.checkVal(), this.caretTimeoutId = setTimeout(() => {
        this.$el === document.activeElement && (this.writeBuffer(), t === this.mask.replace("?", "").length ? this.caret(0, t) : this.caret(t));
      }, 100), this.$emit("focus", e);
    },
    onBlur(e) {
      if (this.focus = !1, this.checkVal(), this.updateModel(e), this.$el.value !== this.focusText) {
        let t = document.createEvent("HTMLEvents");
        t.initEvent("change", !0, !1), this.$el.dispatchEvent(t);
      }
      this.$emit("blur", e);
    },
    onKeyDown(e) {
      if (this.readonly)
        return;
      let t = e.which || e.keyCode, a, l, o, i = /iphone/i.test(ll.getUserAgent());
      this.oldVal = this.$el.value, t === 8 || t === 46 || i && t === 127 ? (a = this.caret(), l = a.begin, o = a.end, o - l === 0 && (l = t !== 46 ? this.seekPrev(l) : o = this.seekNext(l - 1), o = t === 46 ? this.seekNext(o) : o), this.clearBuffer(l, o), this.shiftL(l, o - 1), this.updateModel(e), e.preventDefault()) : t === 13 ? (this.$el.blur(), this.updateModel(e)) : t === 27 && (this.$el.value = this.focusText, this.caret(0, this.checkVal()), this.updateModel(e), e.preventDefault()), this.$emit("keydown", e);
    },
    onKeyPress(e) {
      if (!this.readonly) {
        var t = e.which || e.keyCode, a = this.caret(), l, o, i, s;
        e.ctrlKey || e.altKey || e.metaKey || t < 32 || (t && t !== 13 && (a.end - a.begin !== 0 && (this.clearBuffer(a.begin, a.end), this.shiftL(a.begin, a.end - 1)), l = this.seekNext(a.begin - 1), l < this.len && (o = String.fromCharCode(t), this.tests[l].test(o) && (this.shiftR(l), this.buffer[l] = o, this.writeBuffer(), i = this.seekNext(l), /android/i.test(ll.getUserAgent()) ? setTimeout(() => {
          this.caret(i);
        }, 0) : this.caret(i), a.begin <= this.lastRequiredNonMaskPos && (s = this.isCompleted()))), e.preventDefault()), this.updateModel(e), s && this.$emit("complete", e), this.$emit("keypress", e));
      }
    },
    onPaste(e) {
      this.handleInputChange(e), this.$emit("paste", e);
    },
    caret(e, t) {
      let a, l, o;
      if (!(!this.$el.offsetParent || this.$el !== document.activeElement))
        if (typeof e == "number")
          l = e, o = typeof t == "number" ? t : l, this.$el.setSelectionRange ? this.$el.setSelectionRange(l, o) : this.$el.createTextRange && (a = this.$el.createTextRange(), a.collapse(!0), a.moveEnd("character", o), a.moveStart("character", l), a.select());
        else {
          let i = document;
          return this.$el.setSelectionRange ? (l = this.$el.selectionStart, o = this.$el.selectionEnd) : i.selection && i.selection.createRange && (a = i.selection.createRange(), l = 0 - a.duplicate().moveStart("character", -1e5), o = l + a.text.length), { begin: l, end: o };
        }
    },
    isCompleted() {
      for (let e = this.firstNonMaskPos; e <= this.lastRequiredNonMaskPos; e++)
        if (this.tests[e] && this.buffer[e] === this.getPlaceholder(e))
          return !1;
      return !0;
    },
    getPlaceholder(e) {
      return e < this.slotChar.length ? this.slotChar.charAt(e) : this.slotChar.charAt(0);
    },
    seekNext(e) {
      for (; ++e < this.len && !this.tests[e]; ) ;
      return e;
    },
    seekPrev(e) {
      for (; --e >= 0 && !this.tests[e]; ) ;
      return e;
    },
    shiftL(e, t) {
      let a, l;
      if (!(e < 0)) {
        for (a = e, l = this.seekNext(t); a < this.len; a++)
          if (this.tests[a]) {
            if (l < this.len && this.tests[a].test(this.buffer[l]))
              this.buffer[a] = this.buffer[l], this.buffer[l] = this.getPlaceholder(l);
            else
              break;
            l = this.seekNext(l);
          }
        this.writeBuffer(), this.caret(Math.max(this.firstNonMaskPos, e));
      }
    },
    shiftR(e) {
      let t, a, l, o;
      for (t = e, a = this.getPlaceholder(e); t < this.len; t++)
        if (this.tests[t])
          if (l = this.seekNext(t), o = this.buffer[t], this.buffer[t] = a, l < this.len && this.tests[l].test(o))
            a = o;
          else
            break;
    },
    handleAndroidInput(e) {
      var t = this.$el.value, a = this.caret();
      if (this.oldVal && this.oldVal.length && this.oldVal.length > t.length) {
        for (this.checkVal(!0); a.begin > 0 && !this.tests[a.begin - 1]; ) a.begin--;
        if (a.begin === 0)
          for (; a.begin < this.firstNonMaskPos && !this.tests[a.begin]; ) a.begin++;
        this.caret(a.begin, a.begin);
      } else {
        for (this.checkVal(!0); a.begin < this.len && !this.tests[a.begin]; ) a.begin++;
        this.caret(a.begin, a.begin);
      }
      this.isCompleted() && this.$emit("complete", e);
    },
    clearBuffer(e, t) {
      let a;
      for (a = e; a < t && a < this.len; a++)
        this.tests[a] && (this.buffer[a] = this.getPlaceholder(a));
    },
    writeBuffer() {
      this.$el.value = this.buffer.join("");
    },
    checkVal(e = !1) {
      this.isValueChecked = !0;
      let t = this.$el.value, a = -1, l, o, i;
      for (l = 0, i = 0; l < this.len; l++)
        if (this.tests[l]) {
          for (this.buffer[l] = this.getPlaceholder(l); i++ < t.length; )
            if (o = t.charAt(i - 1), this.tests[l].test(o)) {
              this.buffer[l] = o, a = l;
              break;
            }
          if (i > t.length) {
            this.clearBuffer(l + 1, this.len);
            break;
          }
        } else
          this.buffer[l] === t.charAt(i) && i++, l < this.partialPosition && (a = l);
      return e ? this.writeBuffer() : a + 1 < this.partialPosition ? this.autoClear || this.buffer.join("") === this.defaultBuffer ? (this.$el.value && (this.$el.value = ""), this.clearBuffer(0, this.len)) : this.writeBuffer() : (this.writeBuffer(), this.$el.value = this.$el.value.substring(0, a + 1)), this.partialPosition ? l : this.firstNonMaskPos;
    },
    handleInputChange(e) {
      if (!this.readonly) {
        var t = this.checkVal(!0);
        this.caret(t), this.updateModel(e), this.isCompleted() && this.$emit("complete", e);
      }
    },
    getUnmaskedValue() {
      let e = [];
      for (let t = 0; t < this.buffer.length; t++) {
        let a = this.buffer[t];
        this.tests[t] && a !== this.getPlaceholder(t) && e.push(a);
      }
      return e.join("");
    },
    updateModel(e) {
      let t = this.unmask ? this.getUnmaskedValue() : e.target.value;
      this.$emit("update:modelValue", this.defaultBuffer !== t ? t : "");
    },
    updateValue(e = !0) {
      this.$el && (this.modelValue == null ? (this.$el.value = "", e && this.$emit("update:modelValue", "")) : (this.$el.value = this.modelValue, this.checkVal(), setTimeout(() => {
        if (this.$el && (this.writeBuffer(), this.checkVal(), e)) {
          let t = this.unmask ? this.getUnmaskedValue() : this.$el.value;
          this.$emit("update:modelValue", this.defaultBuffer !== t ? t : "");
        }
      }, 10)), this.focusText = this.$el.value);
    },
    isValueUpdated() {
      return this.unmask ? this.modelValue != this.getUnmaskedValue() : this.defaultBuffer !== this.$el.value && this.$el.value !== this.modelValue;
    }
  }
}), th = ["disabled", "readonly"];
function ah(e, t, a, l, o, i) {
  return n(), v("input", {
    disabled: e.disabled,
    readonly: e.readonly,
    onChange: t[0] || (t[0] = (...s) => e.onChange && e.onChange(...s)),
    onInput: t[1] || (t[1] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[2] || (t[2] = (...s) => e.onFocus && e.onFocus(...s)),
    onBlur: t[3] || (t[3] = (...s) => e.onBlur && e.onBlur(...s)),
    onKeydown: t[4] || (t[4] = (...s) => e.onKeyDown && e.onKeyDown(...s)),
    onKeypress: t[5] || (t[5] = (...s) => e.onKeyPress && e.onKeyPress(...s)),
    onPaste: t[6] || (t[6] = (...s) => e.onPaste && e.onPaste(...s))
  }, null, 40, th);
}
const BS = /* @__PURE__ */ j(eh, [["render", ah]]), Qt = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Set(), Zt = /* @__PURE__ */ new Map(), _o = (e) => `${e.formId}::${e.valueField}::${(e.labelField || []).join(",")}::${e.labelTemplate || ""}`, Fo = (e, t) => `${e}::${t}`, yt = er("selectLabel", {
  state: () => ({
    // trigger เดียวสำหรับ reactivity — bump เมื่อ cache เปลี่ยน เพื่อให้ cell ที่อ่านอยู่ re-eval
    tick: 0
  }),
  actions: {
    /**
     * resolve label ของ ids (batch). ยิงเฉพาะ id ที่ยังไม่ cache และยังไม่ pending → 1 request ต่อ batch
     */
    async ensureLabels(e, t, a) {
      if (!e || !e.formId || !e.valueField) return;
      const l = _o(e);
      let o = Qt.get(l);
      o || (o = /* @__PURE__ */ new Map(), Qt.set(l, o));
      const i = [];
      for (const s of t) {
        if (s == null || s === "" || o.has(s)) continue;
        const u = `${l}::${s}`;
        ol.has(u) || (ol.add(u), i.push(s));
      }
      if (i.length !== 0)
        try {
          const s = e.valueField === "_id" || !!e.valueObjectId, u = {
            // fileter เป็น array → backend แปลเป็น WHERE valueField IN (...)
            fileter: { [e.valueField]: i },
            limit: i.length
          };
          s && (u.fileterObjectId = [e.valueField]);
          const m = {
            providerId: e.formId,
            providerType: "FORM",
            params: {},
            options: u
          }, f = await lt(m, !1, a), c = f && f.response && f.data && f.data.data ? f.data.data : [];
          for (const _ of i) {
            const $ = Di(c, [_], e.valueField, e.labelField, e.labelTemplate || "");
            o.set(_, $ !== "" ? $ : null);
          }
        } catch (s) {
          console.error("useSelectLabelStore.ensureLabels failed:", s);
        } finally {
          for (const s of i)
            ol.delete(`${l}::${s}`);
          this.tick++;
        }
    },
    /**
     * อ่าน label สดจาก cache
     * @returns string = label ที่ resolve ได้ | null = ยังไม่รู้ผล/ไม่เจอ → caller ต้อง fallback เอง
     */
    getLabel(e, t) {
      this.tick;
      const a = typeof e == "string" ? e : _o(e), l = Qt.get(a);
      if (!l) return null;
      const o = l.get(t);
      return o ?? null;
    },
    /**
     * อ่าน raw record ของ id จาก cache (sync) สำหรับ joiner
     * @returns raw doc | null = ยังไม่ cache → caller ต้อง fetch เอง
     */
    getRaw(e, t, a) {
      if (!e || !t || a == null || a === "") return null;
      const l = Zt.get(Fo(e, t));
      return l ? l.get(a) ?? null : null;
    },
    /**
     * เก็บ raw record ลง cache หลัง fetch สด (getDataOne) เพื่อ dedupe ข้ามการเปิดฟอร์มครั้งถัดไป
     */
    setRaw(e, t, a, l) {
      if (!e || !t || a == null || a === "" || l == null) return;
      const o = Fo(e, t);
      let i = Zt.get(o);
      i || (i = /* @__PURE__ */ new Map(), Zt.set(o, i)), i.set(a, l);
    },
    /**
     * ล้าง cache ของ source form ที่เพิ่ง save/update (label/raw อาจเปลี่ยน)
     * เรียกจาก event 'formdata:saved' หลัง saveData/removeData
     */
    invalidateByProvider(e) {
      if (!e) return;
      let t = !1;
      for (const a of Array.from(Qt.keys()))
        a.startsWith(`${e}::`) && (Qt.delete(a), t = !0);
      for (const a of Array.from(Zt.keys()))
        a.startsWith(`${e}::`) && (Zt.delete(a), t = !0);
      t && this.tick++;
    }
  }
}), lt = async (e, t, a) => await be.post(
  `${a.host}/widget/crud/getdata-all`,
  { sdProvider: e, totalEnable: t },
  {
    headers: {
      Authorization: `Bearer ${a.user?.token}`
    }
  }
).then((o) => o.data && o.data.message ? { response: !0, data: o.data, message: o.data.message } : { response: !1, data: null, message: "Can't get data" }).catch((o) => o.response && o.response.data && o.response.data.message ? { response: !1, data: null, message: o.response.data.message } : { response: !1, data: null, message: "Can't get data (error)" }), Lt = async (e, t) => await be.post(
  `${t.host}/widget/crud/getdata-one`,
  { sdProvider: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => l.data && l.data.message ? { response: !0, data: l.data, message: l.data.message } : { response: !1, data: null, message: "Can't get data" }).catch((l) => l.response && l.response.data && l.response.data.message ? { response: !1, data: null, message: l.response.data.message } : { response: !1, data: null, message: "Can't get data" }), Pe = async (e, t) => await be.post(
  `${t.host}/widget/sdform/getform`,
  { formId: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => {
  if (l.data && l.data.message) {
    let o = l.data.data;
    return o.dataid = o._id, { response: !0, data: o, message: l.data.message };
  } else
    return { response: !1, data: void 0, message: "Can't get form" };
}).catch((l) => l.response && l.response.data && l.response.data.message ? { response: !1, data: void 0, message: l.response.data.message } : { response: !1, data: void 0, message: "Can't get form" }), lh = async (e, t, a) => await be.post(
  `${a.host}/widget/sdform/getform-version`,
  { formId: e, versionName: t },
  {
    headers: {
      Authorization: `Bearer ${a.user?.token}`
    }
  }
).then((o) => {
  if (o.data && o.data.message) {
    let i = o.data.data;
    return i.dataid = i._id, { response: !0, data: i, message: o.data.message };
  } else
    return { response: !1, data: void 0, message: "Can't get form" };
}).catch((o) => o.response && o.response.data && o.response.data.message ? { response: !1, data: void 0, message: o.response.data.message } : { response: !1, data: void 0, message: "Can't get form" }), Ga = async (e, t) => await be.post(
  `${t.host}/widget/sdform/insert-empty`,
  { formId: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => {
  if (l.data && l.data.message) {
    let o = l.data.data;
    return o.dataid = l.data.id, o._id = l.data.id, o;
  } else
    return null;
}).catch((l) => null), oh = async (e, t, a) => await be.delete(`${a.host}/widget/sdform/delete-empty`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => !0).catch((o) => !1), vt = async (e, t, a, l, o) => await be.put(
  `${o.host}/widget/sdform/save-data`,
  { formId: e, dataId: t, dataUpdate: a, rstat: l },
  {
    headers: {
      Authorization: `Bearer ${o.user?.token}`
    }
  }
).then((s) => {
  if (s.data && s.data.message) {
    let u = s.data.data;
    return u._id = s.data.id, u.dataid = u._id, yt().invalidateByProvider(e), { data: u, message: s.data.message };
  } else
    return { data: null, message: s.data.message };
}).catch((s) => s.response && s.response.data && s.response.data.message ? { data: null, message: s.response.data.message } : { data: null, message: "Can't save data" }), Ya = async (e, t, a) => await be.delete(`${a.host}/widget/sdform/remove-data`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => (yt().invalidateByProvider(e), !0)).catch((o) => !1), NS = async (e, t, a) => await be.delete(`${a.host}/widget/sdform/delete-data`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => (yt().invalidateByProvider(e), !0)).catch((o) => !1), ih = [
  "_id",
  "xparentx",
  "xsitex",
  "xsitex.code",
  "xsitex.name",
  "xunitx",
  "xunitx.code",
  "xunitx.name",
  "xrstatx",
  "xversionx",
  "xerrorx",
  "created_by",
  "created_by.id",
  "created_by.name",
  "created_at",
  "updated_by",
  "updated_by.id",
  "updated_by.name",
  "updated_at"
], jS = (e, t) => e && Object.keys(e).length > 0 && e[t] && e[t].type ? e[t].type : ["_id", "xparentx"].includes(t) ? Ye.ObjectId : Ye.Any, Ci = (e, t) => {
  const a = e && e.form_db && e.form_db.schema ? e.form_db.schema : null;
  return a && Object.keys(a).length > 0 && t && a[t] && a[t].type ? a[t].type : ["_id", "xparentx"].includes(t) ? Ye.ObjectId : Ye.Any;
}, ko = (e, t) => ["_id", "xparentx"].includes(t) ? !0 : Ci(e, t) === "ObjectId", US = async (e, t, a, l) => await be.put(
  `${l.host}/widget/sdform/check-parent`,
  { formId: e, dataId: t, formData: a },
  {
    headers: {
      Authorization: `Bearer ${l.user?.token}`
    }
  }
).then((i) => {
  if (i.data && i.data.message) {
    let s = i.data.data;
    return s._id = i.data.id, s.dataid = s._id, { data: s, message: i.data.message };
  } else
    return { data: i.data.data, message: i.data.message };
}).catch((i) => i.response && i.response.data && i.response.data.message ? { data: i.response.data.data, message: i.response.data.message } : { data: null, message: "Can't save data" }), oa = (e, t) => {
  if (e.form_share.form_sharing === "private") {
    let a = "";
    if (e.created_by && e.created_by.id && (a = e.created_by.id), t.user_id !== a)
      return !1;
  } else if (e.form_share.form_sharing === "assign") {
    let a = "";
    if (e.created_by && e.created_by.id && (a = e.created_by.id), t.user_id !== a) {
      const l = e.form_share.form_assign, o = t.roles;
      let i = !1;
      if (o.forEach((s) => {
        if (l.includes(s)) {
          i = !0;
          return;
        }
      }), !i)
        return !1;
    }
  }
  return !0;
}, ca = (e) => e.includes("admin") || e.includes("super"), Ne = (e, t) => {
  let a = !1, l = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const o = e.form_options.data_manager;
    t.roles.forEach((s) => {
      if (o.includes(s)) {
        l = !0;
        return;
      }
    });
  }
  if (e.created_by.id === t.user_id || l || ca(t.roles))
    a = !0;
  else if (e.form_share.insert_policy)
    if (e.form_share.insert_assign && Object.keys(e.form_share.insert_assign).length > 0) {
      const o = e.form_share.insert_assign;
      t.roles.forEach((s) => {
        if (o.includes(s)) {
          a = !0;
          return;
        }
      });
    } else
      a = !0;
  return a;
}, Xe = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  if (e.created_by && (e.created_by.id === a.user_id || o || ca(a.roles)))
    l = !0;
  else if (t && t.created_by && t.created_by.id && t.created_by.id === a.user_id)
    l = !0;
  else if (e.form_share.update_policy)
    if (e.form_share.update_assign && Object.keys(e.form_share.update_assign).length > 0) {
      const i = e.form_share.update_assign;
      a.roles.forEach((u) => {
        if (i.includes(u)) {
          l = !0;
          return;
        }
      });
    } else
      l = !0;
  return l;
}, _l = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  if (e.created_by.id === a.user_id || o || ca(a.roles))
    l = !0;
  else if (t && t.created_by && t.created_by.id && t.created_by.id === a.user_id)
    l = !0;
  else if (e.form_share.delete_policy)
    if (e.form_share.delete_assign && Object.keys(e.form_share.delete_assign).length > 0) {
      const i = e.form_share.delete_assign;
      a.roles.forEach((u) => {
        if (i.includes(u)) {
          l = !0;
          return;
        }
      });
    } else
      l = !0;
  return l;
}, Ja = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  return e.created_by && (e.created_by.id === a.user_id || o || ca(a.roles)) ? l = !0 : e.form_share.data_sharing && (e.form_share.data_sharing == "private" ? t && t.created_by && t.created_by.id && t.created_by.id === a.user_id && (l = !0) : e.form_share.data_sharing == "public" ? l = !0 : e.form_share.data_sharing == "site" ? t && t.xsitex && t.xsitex.code && t.xsitex.code === a.site.code && (l = !0) : e.form_share.data_sharing == "unit" && t && t.xunitx && t.xunitx.code && t.xunitx.code === a.unit.code && (l = !0)), l;
}, nh = (e, t) => {
  let a = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const o = e.form_options.data_manager;
    t.roles.forEach((s) => {
      o.includes(s);
    });
  }
  const l = t.roles;
  return a = ca(l), a;
}, Ee = (e, t, a, l = "") => {
  if (e != null) {
    if (t === "xrstatx")
      return e == 0 ? "Empty" : e == 1 ? "Save Draft" : e == 2 ? "Submited" : e == 3 ? "Deleted" : e;
    {
      let o = a.form_db.schema;
      if (l && a.form_db.schema[l] && a.form_db.schema[l].subField && (o = a.form_db.schema[l].subField), o[t]) {
        const i = o[t], s = ["switch-input"], u = ["radio-input", "select-input", "checkbox-input"], m = ["date-input", "date-panel-input", "date-range-input", "time-input", "time-range-input", "multiple-date"], f = ["file-upload-input", "picture-upload-input", "crop-upload-input"], c = ["tags-input"], _ = ["number-input"], $ = ["select-form-input", "select-data-input", "select-sql-input"];
        if (s.includes(i.component))
          return e ? "True" : "False";
        if (u.includes(i.component)) {
          const g = a.form_db.data_list[i.fieldName] ? a.form_db.data_list[i.fieldName] : [];
          if (Array.isArray(e)) {
            const I = e;
            let F = [];
            return I.forEach((p, w) => {
              const S = g.find((N) => !!N && N.value == p);
              S != null && S != null ? F.push(S.label) : F.push(p);
            }), F.join(", ");
          } else {
            const I = g.find((F) => !!F && F.value == e);
            if (I != null && I != null)
              return I.label;
          }
          return e;
        } else if (m.includes(i.component)) {
          if ((i.component == "time-input" || i.component == "time-range-input") && (i.valueFormat = "HH:mm:ss"), Array.isArray(e)) {
            const g = e;
            let I = [];
            return g.forEach((F, p) => {
              if (i.format && i.valueFormat) {
                const w = Se(F, i.valueFormat);
                I.push(/B/.test(i.format) ? w.locale("th").format(i.format) : w.format(i.format));
              } else
                I.push(F);
            }), I.length > 2 ? I.join(", ") : I.join(" - ");
          } else if (i.format && i.valueFormat) {
            const g = Se(e, i.valueFormat);
            return /B/.test(i.format) ? g.locale("th").format(i.format) : g.format(i.format);
          }
        } else if (f.includes(i.component)) {
          const g = e;
          return g && Array.isArray(g) ? g.map((I) => I.url).join(", ") : e;
        } else {
          if (c.includes(i.component))
            return e && Array.isArray(e) ? e.join(", ") : e;
          if (_.includes(i.component)) {
            const g = Number(e);
            if (!isNaN(g)) {
              const I = Number(i.format);
              return isNaN(I) ? g.toLocaleString("en-US") : g.toLocaleString("en-US", { minimumFractionDigits: I, maximumFractionDigits: I });
            }
            return e;
          } else if (i.component === "cascader-form-input") {
            const g = i.inputOptions?.separator || " / ";
            if (i.inputOptions?.saveWithLabel) {
              if (Array.isArray(e))
                return e.map((I) => I?.label ?? "").filter(Boolean).join(", ");
              if (e && typeof e == "object")
                return e.label ?? JSON.stringify(e);
            } else if (Array.isArray(e))
              return e.length > 0 && Array.isArray(e[0]) ? e.map((I) => I.join(g)).join(", ") : e.join(g);
            return e;
          } else if ($.includes(i.component)) {
            if (i.multiple)
              return e.label ? e.label : e.value ? Object.keys(e.value).length > 0 ? e.value.join ? e.value.join(", ") : e.value : null : e && Array.isArray(e) ? e.join(", ") : e;
            if (i.component === "select-form-input" && i.inputOptions && i.inputOptions.refreshLabel) {
              const g = i.inputOptions, I = e && typeof e == "object" ? e.value : e;
              if (I && g.formId) {
                const F = yt().getLabel(
                  { formId: g.formId, valueField: g.valueField || "_id", labelField: g.labelField || [], labelTemplate: g.labelTemplate || "" },
                  I
                );
                if (F != null) return F;
              }
            }
            return e && e.label ? e.label : e;
          } else if (i.component === "radio-text-input") {
            const I = (a.form_db.data_list[i.fieldName] ? a.form_db.data_list[i.fieldName] : []).find(
              (F) => !!F && F.value == e.value
            );
            return I != null && I != null ? I.text ? `${I.label} ${e.text} ${I.suffix}` : I.label : e;
          } else {
            if (i.type === "Boolean")
              return e ? "True" : "False";
            if (i.type === "Array" || i.multiple)
              return e && Array.isArray(e) ? e.join(", ") : e;
            if (["Number", "Integer"].includes(i.type)) {
              const g = Number(e);
              if (!isNaN(g)) {
                const I = Number(i.format);
                return isNaN(I) ? g.toLocaleString("en-US") : g.toLocaleString("en-US", { minimumFractionDigits: I, maximumFractionDigits: I });
              }
              return e;
            } else if (["StringDate", "ArrayDate", "Date", "Timestamp"].includes(i.type)) {
              if (Array.isArray(e)) {
                const g = e;
                let I = [];
                return g.forEach((F, p) => {
                  i.format && i.valueFormat ? I.push(Se(F, i.valueFormat).format(i.format)) : I.push(F);
                }), I.length > 2 ? I.join(", ") : I.join(" - ");
              } else if (i.format && i.valueFormat)
                return Se(e, i.valueFormat).format(i.format);
            } else return ["String|Array", "Object|Array"].includes(i.type) ? e && Array.isArray(e) ? e.join(", ") : e : typeof e == "object" ? JSON.stringify(e) : e;
          }
        }
      }
      return e;
    }
  } else
    return e;
}, Di = (e, t, a, l, o) => {
  let i = [];
  for (const s of t)
    for (const u of e)
      if (u[a] && u[a] === s) {
        let m = [], f = {};
        l.forEach((c) => {
          const _ = pe(u, c);
          _ ? (m.push(_), f[`{{${c}}}`] = _) : f[`{{${c}}}`] = "";
        }), o && o != "" ? i.push(ue(o, f)) : i.push(m.join(" "));
        break;
      }
  return i.join(", ");
}, RS = (e, t, a) => {
  let l = "", o = [], i = {};
  return t.forEach((s) => {
    const u = pe(e, s);
    u ? (o.push(u), i[`{{${s}}}`] = u) : i[`{{${s}}}`] = "";
  }), a && a != "" ? l = ue(a, i) : l = o.join(" "), l;
}, sh = B({
  name: "SdGridColumnDynamic",
  components: {
    // SdHtmlEditor,
  },
  props: {
    sdformModel: {
      type: Object,
      required: !0
    },
    rawData: {
      type: Object,
      required: !0
    },
    subSchema: {
      type: Object
    },
    subIndex: {
      type: Number,
      default: -1
    },
    parentName: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      required: !0
    },
    fieldSetting: {
      type: Object,
      default: {}
    },
    rawValue: {
      type: Boolean,
      default: !1
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  computed: {
    dataDispaly() {
      return this.subIndex > -1 ? this.parentName ? this.rawData[this.parentName][this.subIndex] : this.rawData[this.subIndex] : this.parentName ? this.rawData[this.parentName] : this.rawData;
    },
    fieldPath() {
      return this.parentName ? `${this.parentName}.${this.fieldName}` : this.fieldName;
    },
    schema() {
      return this.subSchema && this.subSchema[this.fieldName] ? this.subSchema[this.fieldName] : this.sdformModel.form_db.schema[this.fieldName] ? this.sdformModel.form_db.schema[this.fieldName] : {};
    }
  },
  data() {
    return {
      previewIndex: 0,
      labelValue: null
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    previewList(e) {
      const t = [];
      for (const a of e)
        a.url && t.push(a.url);
      return t;
    },
    getTagType(e) {
      const t = this.getschemaValue(this.sdformModel.form_db.schema, "format", e, "primary,plain");
      return t && t.split(",")[0] || "primary";
    },
    getTagEffect(e) {
      const t = this.getschemaValue(this.sdformModel.form_db.schema, "format", e, "primary,plain");
      return t && t.split(",")[1] || "plain";
    },
    getschemaValue(e, t, a, l) {
      if (e[a]) {
        const o = e[a];
        return o[t] ? o[t] : l;
      }
      return l;
    },
    getValue(e, t, a, l, o = "") {
      let i = a.split(".");
      const s = i.length - 1;
      if (s > 0 && this.subIndex === -1 && i[s]) {
        const f = i[s];
        i = i.slice(0, s);
        let c = i.length > 0 ? i.join(".") : i.join();
        if (e[c] && e[c].type && e[c].type == "Array") {
          let _ = pe(t, c), $ = [];
          for (const g in _)
            if (Object.prototype.hasOwnProperty.call(_, g)) {
              let F = _[g][f];
              F && (this.rawValue ? $.push(F) : $.push(Ee(F, a, l)));
            }
          return $.join(", ");
        }
      }
      let u = a;
      this.subIndex > -1 && (u = `${this.parentName}.${this.subIndex}.${this.fieldName}`);
      let m = pe(t, u);
      return this.rawValue ? m ?? null : Ee(m, a, l, o);
    }
  }
});
function rh(e, t, a, l, o, i) {
  const s = we, u = ie, m = X("sd-value-widget", !0), f = Qe, c = na, _ = ot, $ = Bt, g = Zi, I = Ke, F = Ba, p = hl, w = Ut, S = et, N = xa, y = en;
  return e.schema.component === "sub-form" && !e.rawValue ? (n(), h(_, {
    key: 0,
    width: e.subformWidth,
    trigger: "click"
  }, {
    reference: r(() => [
      d(u, { size: "small" }, {
        default: r(() => [
          d(s, {
            "icon-name": "table",
            class: "mr-1"
          }),
          t[3] || (t[3] = D(" View", -1))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      d(c, {
        data: e.dataDispaly[e.fieldName]
      }, {
        default: r(() => [
          e.schema.subField ? (n(!0), v(L, { key: 0 }, G(e.schema.subField, (T) => (n(), h(f, {
            prop: T.fieldName,
            "column-key": T.fieldName,
            "min-width": 80,
            label: e.getschemaValue(e.schema.subField, "label", T.fieldName, ""),
            width: e.getschemaValue(e.schema.subField, "width", T.fieldName, ""),
            align: e.getschemaValue(e.schema.subField, "align", T.fieldName, "left"),
            sortable: e.getschemaValue(e.schema.subField, "sortable", T.fieldName, !1),
            fixed: e.getschemaValue(e.schema.subField, "fixed", T.fieldName, !1)
          }, {
            default: r((A) => [
              d(m, {
                "sdform-model": e.sdformModel,
                "sub-schema": e.schema.subField,
                "field-name": T.fieldName,
                "parent-name": e.fieldName,
                "subform-width": e.subformWidth,
                "raw-data": e.rawData,
                "sub-index": A.$index,
                "raw-value": e.rawValue,
                "user-state": e.userState
              }, null, 8, ["sdform-model", "sub-schema", "field-name", "parent-name", "subform-width", "raw-data", "sub-index", "raw-value", "user-state"])
            ]),
            _: 2
          }, 1032, ["prop", "column-key", "label", "width", "align", "sortable", "fixed"]))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["data"])
    ]),
    _: 1
  }, 8, ["width"])) : (e.schema.component === "picture-upload-input" || e.schema.component === "crop-upload-input") && !e.rawValue ? (n(), h(g, {
    key: 1,
    wrap: ""
  }, {
    default: r(() => [
      e.dataDispaly[e.fieldName] ? (n(!0), v(L, { key: 0 }, G(e.dataDispaly[e.fieldName], (T, A) => (n(), h($, {
        ref_for: !0,
        ref: "imageRef",
        style: { width: "40px", height: "40px" },
        src: T.url,
        "preview-src-list": e.previewList(e.dataDispaly[e.fieldName]),
        "initial-index": e.previewIndex,
        fit: "cover",
        "zoom-rate": 1.2,
        "max-scale": 7,
        "min-scale": 0.2,
        "preview-teleported": ""
      }, null, 8, ["src", "preview-src-list", "initial-index"]))), 256)) : b("", !0)
    ]),
    _: 1
  })) : e.schema.component === "file-upload-input" && !e.rawValue ? (n(), v(L, { key: 2 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(p, {
      key: 0,
      "file-list": e.dataDispaly[e.fieldName],
      "onUpdate:fileList": t[0] || (t[0] = (T) => e.dataDispaly[e.fieldName] = T),
      class: "upload-file-view",
      "show-file-list": !0,
      "auto-upload": !1,
      disabled: !0
    }, {
      file: r(({ file: T }) => [
        d(F, {
          class: "",
          href: T.url,
          type: "primary",
          target: "_blank"
        }, {
          default: r(() => [
            d(s, {
              "icon-name": "el-document",
              class: "mr-1"
            }),
            d(I, {
              type: e.fieldSetting.textType ? e.fieldSetting.textType : e.schema.textType ? e.schema.textType : "",
              style: te(`width:${e.schema.width ? e.schema.width : 150}px;`),
              truncated: "",
              title: T.name
            }, {
              default: r(() => [
                D(M(T.name), 1)
              ]),
              _: 2
            }, 1032, ["type", "style", "title"])
          ]),
          _: 2
        }, 1032, ["href"])
      ]),
      _: 1
    }, 8, ["file-list"])) : b("", !0)
  ], 64)) : e.schema.component === "tags-input" ? (n(), v(L, { key: 3 }, [
    e.dataDispaly[e.fieldName] ? (n(!0), v(L, { key: 0 }, G(e.dataDispaly[e.fieldName], (T) => (n(), h(w, {
      key: T,
      type: e.getTagType(e.fieldSetting),
      effect: e.getTagEffect(e.fieldSetting),
      class: "mr-1 mb-0.5"
    }, {
      default: r(() => [
        D(M(T), 1)
      ]),
      _: 2
    }, 1032, ["type", "effect"]))), 128)) : b("", !0)
  ], 64)) : e.schema.component === "svg-input" && !e.rawValue ? (n(), v(L, { key: 4 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(S, {
      key: 0,
      "svg-data": e.dataDispaly[e.fieldName],
      class: "text-7"
    }, null, 8, ["svg-data"])) : b("", !0)
  ], 64)) : e.schema.component === "html-input" && !e.rawValue ? (n(), v(L, { key: 5 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(N, {
      key: 0,
      modelValue: e.dataDispaly[e.fieldName],
      "onUpdate:modelValue": t[1] || (t[1] = (T) => e.dataDispaly[e.fieldName] = T),
      mode: "mini",
      readonly: !0,
      "user-state": e.userState
    }, null, 8, ["modelValue", "user-state"])) : b("", !0)
  ], 64)) : e.schema.component === "rate-input" && !e.rawValue ? (n(), v(L, { key: 6 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(y, ae({
      key: 0,
      modelValue: e.dataDispaly[e.fieldName],
      "onUpdate:modelValue": t[2] || (t[2] = (T) => e.dataDispaly[e.fieldName] = T),
      disabled: ""
    }, e.schema.inputOptions ? e.schema.inputOptions : {}), null, 16, ["modelValue"])) : b("", !0)
  ], 64)) : (n(), v(L, { key: 7 }, [
    e.rawValue ? (n(), v(L, { key: 1 }, [
      D(M(e.getValue(e.sdformModel.form_db.schema, e.rawData, e.fieldPath, e.sdformModel)), 1)
    ], 64)) : (n(), h(I, {
      key: 0,
      style: te(e.schema.component == "color-input" ? `color:${e.dataDispaly[e.fieldName]}` : ""),
      type: e.fieldSetting.textType ? e.fieldSetting.textType : e.schema.textType ? e.schema.textType : "",
      truncated: !e.fieldSetting.wrapText || !e.getschemaValue(e.sdformModel.form_db.schema, "wrapText", e.fieldName, void 0),
      "line-clamp": e.fieldSetting.wrapText || e.getschemaValue(e.sdformModel.form_db.schema, "wrapText", e.fieldName, void 0)
    }, {
      default: r(() => [
        D(M(e.getValue(e.sdformModel.form_db.schema, e.rawData, e.fieldPath, e.sdformModel)), 1)
      ]),
      _: 1
    }, 8, ["style", "type", "truncated", "line-clamp"]))
  ], 64));
}
const ba = /* @__PURE__ */ j(sh, [["render", rh], ["__scopeId", "data-v-6f6b7a15"]]), dh = B({
  name: "SdUiListView",
  components: {
    // SdCrudPopupGrid,
    // SdValueWidget,
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    listType: {
      type: String,
      default: "listview"
    },
    noMoreLabel: {
      type: String,
      default: "No more"
    },
    searchPlaceholder: {
      type: String,
      default: "Search..."
    },
    disableNoMore: {
      type: Boolean,
      default: !1
    },
    scrollDistance: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 4
    },
    detailMaxRow: {
      type: Number,
      default: 3
    },
    iconWigth: {
      type: Number,
      default: 48
    },
    iconField: {
      type: String,
      default: ""
    },
    titleContent: {
      type: String,
      default: ""
    },
    titleField: {
      type: String,
      default: ""
    },
    detailContent: {
      type: String,
      default: ""
    },
    statusContent: {
      type: String,
      default: ""
    },
    statusField: {
      type: String,
      default: ""
    },
    colorField: {
      type: String,
      default: ""
    },
    groupField: {
      type: String,
      default: ""
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    formModel: {
      type: Object,
      default: {}
    },
    limitRow: {
      type: Number,
      default: 30
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !1
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    totalEnable: {
      type: Boolean,
      default: !0
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    height: {
      type: String,
      default: "100%"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    // โหมด ws แบบ refresh: ได้ message แล้ว query ใหม่จากหน้า 1 (debounce) แทน patch ราย row
    // — patch ไม่กรอง where / ไม่ re-sort → เพี้ยนกับจอคิวที่ filter ตาม status
    wsRefresh: {
      type: Boolean,
      default: !1
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    clickEvent: {
      type: Function
    },
    selectEvent: {
      type: Function
    },
    unselectEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: this.formModel,
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      // key ของ row ที่ผู้ใช้คลิก select อยู่ (ใช้ทำ highlight) — null = ไม่มีการ select
      selectedKey: null,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: this.providerType },
      wsConn: void 0,
      wsRefreshTimer: null,
      widgetId: "SdUiListView-" + Wt(),
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      groupItems: [],
      groupValue: {},
      loadEnable: !1,
      defaultImg: this.userState.host?.replace("api", "") + "assets/image/noimg.png",
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    colSpan() {
      return () => 24 / this.column;
    },
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ...ke, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Kt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    }
  },
  async created() {
    this.apiUrl = "";
  },
  setup(e, t) {
    const a = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      formRef: a
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.wsRefreshTimer && (clearTimeout(this.wsRefreshTimer), this.wsRefreshTimer = null);
  },
  async mounted() {
    if (!this.buildState)
      if (this.providerType === "SQL" || this.providerType === "SYS")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : O.warning(e.message);
      } else
        O.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: O,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn
    };
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.searchFields && (this.dpFormData.options.search = this.searchFields);
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.noMore || this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ...ke, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = me.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), this.searchFields ? this.dpFormData.options.search = this.searchFields : this.dpFormData.options.search = this.sdformModel.form_options.search_fields ? this.sdformModel.form_options.search_fields : [];
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ye.DESC }]), this.noMore || this.getDataList(), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          if (this.wsRefresh) {
            this.wsRefreshReload();
            return;
          }
          let o = -1;
          const i = P(l.data);
          l.params && P(l.params), o = this.keyIdIndex(i._id), l.method == "insert" ? Ja(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1);
        }
      }));
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    allowUpdate(e, t, a) {
      return Xe(e, t, a);
    },
    allowDelete(e, t, a) {
      return _l(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1), this.selectIndex = this.keyIdIndex(e[this.keyId]);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          this.rawData = [o].concat(this.rawData), this.isInsert = !1, this.selectIndex = -1, this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.wsConn?.wsSend({ data: o, method: "insert", keyid: this.keyId, params: { widget: this.widgetId } });
        } else
          this.selectIndex != -1 && (this.rawData[this.selectIndex] = P(e)), this.wsConn?.wsSend({ data: e, method: "update", keyid: this.keyId, params: { widget: this.widgetId } });
      this.$emit("aftersave", l, e, this.rawData, this.selectIndex);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await lt(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          if (this.optionProvider.page === 1 ? this.rawData = l : this.rawData.push(...l), this.groupField)
            for (const o in l) {
              const i = l[o], s = this.getValue(i, this.groupField);
              this.groupItems.includes(s) || (this.groupItems.push(s), this.groupValue[i._id] = s);
            }
          this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, t && (this.total = a.data.total), this.totalPage > 0 ? this.totalPage === this.limit ? (this.page++, this.dpFormData.options && (this.dpFormData.options.page = this.page)) : this.noMore = !0 : this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        O.warning(a.message), this.preLoading = !1;
    },
    async nextLoad2() {
      this.buildState || this.getDataList();
    },
    async nextLoad(e) {
      this.buildState || e === "bottom" && !this.noMore && this.getDataList();
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    // wsRefresh mode: query ใหม่จากหน้า 1 โดยคง search/filter เดิม — debounce รวม message ที่มาติดกันเป็นรอบเดียว
    wsRefreshReload() {
      this.wsRefreshTimer && clearTimeout(this.wsRefreshTimer), this.wsRefreshTimer = setTimeout(() => {
        this.wsRefreshTimer = null, this.optionProvider.page = 1, this.page = 1, this.total = 0, this.noMore = !1, this.getDataList();
      }, 400);
    },
    handleSearch() {
      this.optionProvider.page = 1, this.page = 1, this.searchText != "" ? this.dpFormData.params.q = `%${this.searchText}%` : delete this.dpFormData.params.q, this.noMore = !1, this.total = 0, this.getDataList();
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        afterSaveCallback: this.afterSave
      });
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.selectIndex = -1, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.showPopupFlag = !0, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null, 0);
    },
    handleUpdate(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = e, this.formReadOnly = !1, this.handlePopUpForm(), this.updateBefore && this.updateBefore(e, this.selectIndex);
    },
    handleView(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.showPopupFlag = !0, this.backdrop = !0, this.formData = e, this.formReadOnly = !0, this.handlePopUpForm(), this.viewBefore && this.viewBefore(e, this.selectIndex);
    },
    handleClick(e, t) {
      this.isInsert = !1, this.selectIndex = t;
      const a = e[this.keyId];
      a != null && this.selectedKey === a ? (this.selectedKey = null, this.unselectEvent && this.unselectEvent(e, t)) : (this.selectedKey = a, this.selectEvent && this.selectEvent(e, t)), this.clickEvent && this.clickEvent(e, t);
    },
    isSelected(e) {
      return this.selectedKey != null && e[this.keyId] === this.selectedKey;
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      this.selectIndex = t;
      let l = !0;
      this.allowDeleteFunc && (l = this.allowDeleteFunc(e, t)), l && ve.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ya(this.sdformModel.dataid, a, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.keyId, params: { widget: this.widgetId } }), this.rawData.splice(this.selectIndex, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, e[this.keyId] != null && this.selectedKey === e[this.keyId] && (this.selectedKey = null), this.afterDelete && this.afterDelete(e, this.selectIndex), this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (i) {
              O.error(i.message);
            }
          O.success("Delete completed.");
        } else
          O.warning("Unable to remove data");
      }).catch((o) => {
        console.log(o);
      });
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.providerType === "FORM" ? this.sdformModel.form_db.schema[e] : this.sdformModel.form_db && this.sdformModel.form_db.schema ? this.sdformModel.form_db.schema[e] : {};
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] && Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : void 0;
    },
    getDatetime(e) {
      return e ? Se(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ka(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), uh = {
  key: 0,
  class: "list-box"
}, ph = { class: "list-title" }, mh = {
  key: 0,
  class: "text-5"
}, hh = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, fh = {
  key: 0,
  class: "list-search"
}, ch = {
  key: 1,
  class: "list-view"
}, bh = {
  key: 0,
  class: "list-group"
}, gh = ["onClick"], yh = {
  key: 0,
  class: "list-icon"
}, vh = { class: "list-body" }, wh = { class: "body-title" }, Sh = ["innerHTML"], _h = { class: "body-content" }, Fh = ["innerHTML"], kh = ["innerHTML"], Ch = {
  key: 3,
  class: "list-actions"
}, Dh = {
  key: 0,
  class: "list-group",
  style: { "text-align": "center" }
}, Ih = {
  key: 1,
  class: "timeline-box",
  style: { width: "100%", height: "100%" }
}, $h = { class: "list-title" }, Th = {
  key: 0,
  class: "text-5"
}, Ph = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, Mh = { class: "timeline-title" }, Vh = ["innerHTML"], Ah = { class: "timeline-content" }, Eh = ["innerHTML"], Oh = {
  key: 2,
  class: "thumbnail-box",
  style: { width: "100%", height: "100%" }
}, Lh = { class: "list-title" }, Bh = {
  key: 0,
  class: "text-5"
}, Nh = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, jh = {
  key: 0,
  class: "list-search"
}, Uh = { key: 1 }, Rh = ["onClick"], zh = ["innerHTML"], Hh = {
  key: 3,
  class: "thumbnail-box",
  style: { width: "100%", height: "100%" }
}, qh = { class: "list-title" }, Wh = {
  key: 0,
  class: "text-5"
}, Kh = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, xh = {
  key: 0,
  class: "list-search"
}, Gh = { key: 1 }, Yh = { class: "el-image__error" }, Jh = ["innerHTML"], Xh = ["innerHTML"], Qh = ["innerHTML"], Zh = {
  key: 3,
  class: "thumbnail-actions"
};
function ef(e, t, a, l, o, i) {
  const s = et, u = we, m = X("Loading"), f = We, c = ie, _ = X("search"), $ = Ie, g = cl, I = ba, F = Ke, p = Vo, w = tn, S = ut, N = X("Picture"), y = Bt, T = bl;
  return n(), v(L, null, [
    e.listType === "listview" ? (n(), v("div", uh, [
      C("div", ph, [
        e.titleEnable ? (n(), v("span", mh, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          D(" " + M(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", hh, " ( " + M(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", fh, [
        d($, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[0] || (t[0] = (A) => e.searchText = A),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, Je({
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(_)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 2
        }, [
          e.addBtnEnable && e.allowInsert ? {
            name: "prepend",
            fn: r(() => [
              d(c, {
                type: "success",
                plain: "",
                icon: "Plus",
                onClick: e.handleAdd
              }, null, 8, ["onClick"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "placeholder", "onChange"])
      ])) : b("", !0),
      e.loadEnable ? (n(), v("ul", ch, [
        d(p, {
          onEndReached: e.nextLoad,
          distance: e.scrollDistance ? e.scrollDistance : void 0,
          style: te(`overflow: auto; min-height: 100px; height: ${e.height}`)
        }, {
          default: r(() => [
            (n(!0), v(L, null, G(e.rawData, (A, E) => (n(), v(L, {
              key: A._id
            }, [
              e.groupField && e.groupValue[A._id] ? (n(), v("li", bh, M(e.groupValue[A._id]), 1)) : b("", !0),
              C("li", {
                class: x(["list-item", { "is-selected": e.isSelected(A) }]),
                onClick: (W) => e.handleClick(A, E)
              }, [
                e.iconField ? (n(), v("span", yh, [
                  d(g, {
                    shape: "square",
                    fit: "cover",
                    style: te(`width: ${e.iconWigth}px; height: ${e.iconWigth}px; background-color: transparent;`),
                    icon: "Picture",
                    src: e.getImage(A, e.iconField)
                  }, null, 8, ["style", "src"])
                ])) : b("", !0),
                C("span", vh, [
                  C("div", wh, [
                    d(F, { truncated: "" }, {
                      default: r(() => [
                        e.titleField ? (n(), h(I, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "subform-width": e.subformWidth,
                          "raw-data": A,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, A)
                        }, null, 8, Sh))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  C("div", _h, [
                    e.detailContent ? (n(), v("span", {
                      key: 0,
                      innerHTML: e.htmlValue(e.detailContent, A)
                    }, null, 8, Fh)) : b("", !0)
                  ])
                ]),
                e.statusField ? (n(), v("span", {
                  key: 1,
                  class: "list-status hide-on-actions",
                  style: te({ color: e.colorField && A[e.colorField] ? A[e.colorField] : void 0 })
                }, [
                  d(I, {
                    "sdform-model": e.sdformModel,
                    "field-name": e.statusField,
                    "field-setting": e.getSchema(e.statusField),
                    "subform-width": e.subformWidth,
                    "raw-data": A,
                    "user-state": e.userState
                  }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])
                ], 4)) : b("", !0),
                e.statusContent ? (n(), v("span", {
                  key: 2,
                  class: "list-status hide-on-actions",
                  style: te({ color: e.colorField && A[e.colorField] ? A[e.colorField] : void 0 }),
                  innerHTML: e.htmlValue(e.statusContent, A)
                }, null, 12, kh)) : b("", !0),
                e.actionEnable ? (n(), v("span", Ch, [
                  re(e.$slots, "actionBtnRow", {
                    row: A,
                    index: E
                  }, void 0, !0),
                  A[e.keyId] && e.isFormEnable && e.viewBtnEnable ? (n(), h(c, {
                    key: 0,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "View",
                    size: "small",
                    title: "View",
                    onClick: U((W) => e.handleView(A, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  A[e.keyId] && e.isFormEnable && e.updateBtnEnable && e.allowUpdate(e.sdformModel, A, e.useUserState.user) ? (n(), h(c, {
                    key: 1,
                    plain: "",
                    circle: "",
                    type: "primary",
                    icon: "Edit",
                    size: "small",
                    title: "Edit",
                    onClick: U((W) => e.handleUpdate(A, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  A[e.keyId] && e.isFormEnable && e.delBtnEnable && e.allowDelete(e.sdformModel, A, e.useUserState.user) ? (n(), h(c, {
                    key: 2,
                    plain: "",
                    circle: "",
                    type: "danger",
                    icon: "Delete",
                    size: "small",
                    title: "Delete",
                    onClick: U((W) => e.handleDelete(A, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0)
                ])) : b("", !0)
              ], 10, gh)
            ], 64))), 128)),
            e.noMore && !e.disableNoMore ? (n(), v("li", Dh, M(e.noMoreLabel), 1)) : b("", !0)
          ]),
          _: 3
        }, 8, ["onEndReached", "distance", "style"])
      ])) : b("", !0)
    ])) : b("", !0),
    e.listType === "timeline" ? (n(), v("div", Ih, [
      C("div", $h, [
        e.titleEnable ? (n(), v("span", Th, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          D(" " + M(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Ph, " ( " + M(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.loadEnable ? (n(), h(p, {
        key: 0,
        tag: "el-timeline",
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: te(`overflow: auto; min-height: 100px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, G(e.rawData, (A, E) => (n(), h(w, {
            key: A._id,
            timestamp: A.created_at ? e.getDatetime(A.created_at) : void 0,
            placement: "top",
            color: e.colorField && A[e.colorField] ? A[e.colorField] : void 0
          }, {
            default: r(() => [
              C("div", Mh, [
                d(F, { truncated: "" }, {
                  default: r(() => [
                    e.titleField ? (n(), h(I, {
                      key: 0,
                      "sdform-model": e.sdformModel,
                      "field-name": e.titleField,
                      "field-setting": e.getSchema(e.titleField),
                      "subform-width": e.subformWidth,
                      "raw-data": A,
                      "user-state": e.userState
                    }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                      key: 1,
                      innerHTML: e.htmlValue(e.titleContent, A)
                    }, null, 8, Vh))
                  ]),
                  _: 2
                }, 1024)
              ]),
              C("div", Ah, [
                e.detailContent ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(e.detailContent, A)
                }, null, 8, Eh)) : b("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["timestamp", "color"]))), 128))
        ]),
        _: 1
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0),
    e.listType === "listicon" ? (n(), v("div", Oh, [
      C("div", Lh, [
        e.titleEnable ? (n(), v("span", Bh, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          D(" " + M(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Nh, " ( " + M(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", jh, [
        d($, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[1] || (t[1] = (A) => e.searchText = A),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, {
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(_)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder", "onChange"])
      ])) : (n(), v("br", Uh)),
      e.loadEnable ? (n(), h(p, {
        key: 2,
        tag: "el-row",
        gutter: 15,
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: te(`overflow: auto; min-height: 50px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, G(e.rawData, (A, E) => (n(), h(S, {
            key: A._id,
            xs: 12,
            sm: 6,
            md: 6,
            lg: e.colSpan(),
            xl: e.colSpan(),
            style: { display: "flex", "justify-content": "center" }
          }, {
            default: r(() => [
              C("div", {
                class: x(["listicon-item", { "is-selected": e.isSelected(A) }]),
                style: { "margin-bottom": "15px", "text-align": "center", cursor: "pointer" },
                onClick: (W) => e.handleClick(A, E)
              }, [
                d(g, {
                  shape: "square",
                  fit: "cover",
                  style: te(`margin-bottom: 2px; width: ${e.iconWigth}px; height: ${e.iconWigth}px; background-color: transparent;`),
                  icon: "Picture",
                  src: e.getImage(A, e.iconField)
                }, null, 8, ["style", "src"]),
                C("div", {
                  style: te(`text-align: center; max-width: ${e.iconWigth + 40}px;`)
                }, [
                  d(F, {
                    class: "body-title",
                    truncated: ""
                  }, {
                    default: r(() => [
                      e.titleField ? (n(), h(I, {
                        key: 0,
                        "sdform-model": e.sdformModel,
                        "field-name": e.titleField,
                        "field-setting": e.getSchema(e.titleField),
                        "subform-width": e.subformWidth,
                        "raw-data": A,
                        "user-state": e.userState
                      }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                        key: 1,
                        innerHTML: e.htmlValue(e.titleContent, A)
                      }, null, 8, zh))
                    ]),
                    _: 2
                  }, 1024)
                ], 4)
              ], 10, Rh)
            ]),
            _: 2
          }, 1032, ["lg", "xl"]))), 128))
        ]),
        _: 1
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0),
    e.listType === "thumbnail" ? (n(), v("div", Hh, [
      C("div", qh, [
        e.titleEnable ? (n(), v("span", Wh, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          D(" " + M(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Kh, " ( " + M(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", xh, [
        d($, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[2] || (t[2] = (A) => e.searchText = A),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, Je({
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(_)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 2
        }, [
          e.addBtnEnable && e.allowInsert ? {
            name: "prepend",
            fn: r(() => [
              d(c, {
                type: "success",
                plain: "",
                icon: "Plus",
                onClick: e.handleAdd
              }, null, 8, ["onClick"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "placeholder", "onChange"])
      ])) : (n(), v("br", Gh)),
      e.loadEnable ? (n(), h(p, {
        key: 2,
        tag: "el-row",
        gutter: 15,
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: te(`overflow: auto; min-height: 50px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, G(e.rawData, (A, E) => (n(), h(S, {
            key: A._id,
            xs: 24,
            sm: 12,
            md: 6,
            lg: e.colSpan(),
            xl: e.colSpan(),
            style: { display: "flex", "justify-content": "center" }
          }, {
            default: r(() => [
              d(T, {
                shadow: "never",
                class: x(["thumbnail-item", { "is-selected": e.isSelected(A) }]),
                style: te(`margin-bottom: 15px; cursor: pointer; width: 100%; max-width: ${e.iconWigth}px;
						${e.colorField && A[e.colorField] ? `border-color: ${e.convertHexToRgba(A[e.colorField], 1)};` : ""}
						${e.colorField && A[e.colorField] ? `background-color: ${e.convertHexToRgba(A[e.colorField], 0.1)};` : ""}
						position: relative;`),
                onClick: (W) => e.handleClick(A, E)
              }, {
                default: r(() => [
                  e.iconField ? (n(), h(y, {
                    key: 0,
                    style: te(`width: 100%; height: ${e.iconWigth - 20}px;`),
                    src: e.getImage(A, e.iconField),
                    fit: "cover"
                  }, {
                    error: r(() => [
                      C("div", Yh, [
                        d(f, { style: { "font-size": "50px" } }, {
                          default: r(() => [
                            d(N)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["style", "src"])) : b("", !0),
                  C("div", null, [
                    d(F, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h(I, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "subform-width": e.subformWidth,
                          "raw-data": A,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, A)
                        }, null, 8, Jh))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(F, {
                    key: 1,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, A)
                      }, null, 8, Xh)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0),
                  e.statusField || e.statusContent ? (n(), v("div", {
                    key: 2,
                    class: "thumbnail-status",
                    style: te({ color: e.colorField && A[e.colorField] ? A[e.colorField] : void 0 })
                  }, [
                    e.statusField ? (n(), h(I, {
                      key: 0,
                      "sdform-model": e.sdformModel,
                      "field-name": e.statusField,
                      "field-setting": e.getSchema(e.statusField),
                      "subform-width": e.subformWidth,
                      "raw-data": A,
                      "user-state": e.userState
                    }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                      key: 1,
                      innerHTML: e.htmlValue(e.statusContent, A)
                    }, null, 8, Qh))
                  ], 4)) : b("", !0),
                  e.actionEnable ? (n(), v("span", Zh, [
                    re(e.$slots, "actionBtnRow", {
                      row: A,
                      index: E
                    }, void 0, !0),
                    A[e.keyId] && e.isFormEnable && e.viewBtnEnable ? (n(), h(c, {
                      key: 0,
                      plain: "",
                      circle: "",
                      type: "info",
                      icon: "View",
                      size: "small",
                      title: "View",
                      onClick: U((W) => e.handleView(A, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0),
                    A[e.keyId] && e.isFormEnable && e.updateBtnEnable && e.allowUpdate(e.sdformModel, A, e.useUserState.user) ? (n(), h(c, {
                      key: 1,
                      plain: "",
                      circle: "",
                      type: "primary",
                      icon: "Edit",
                      size: "small",
                      title: "Edit",
                      onClick: U((W) => e.handleUpdate(A, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0),
                    A[e.keyId] && e.isFormEnable && e.delBtnEnable && e.allowDelete(e.sdformModel, A, e.useUserState.user) ? (n(), h(c, {
                      key: 2,
                      plain: "",
                      circle: "",
                      type: "danger",
                      icon: "Delete",
                      size: "small",
                      title: "Delete",
                      onClick: U((W) => e.handleDelete(A, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0)
                  ])) : b("", !0)
                ]),
                _: 2
              }, 1032, ["class", "style", "onClick"])
            ]),
            _: 2
          }, 1032, ["lg", "xl"]))), 128))
        ]),
        _: 3
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0)
  ], 64);
}
const tf = /* @__PURE__ */ j(dh, [["render", ef], ["__scopeId", "data-v-01b66da0"]]), zS = /* @__PURE__ */ B({
  __name: "SdAppList",
  props: {
    userState: {
      type: Object,
      required: !0
    },
    searchEnable: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Apps"
    },
    icon: {
      type: String,
      default: "icon-box"
    },
    limit: {
      type: Number,
      default: 120
    },
    path: {
      type: String,
      default: "/module/app-viewer?appId="
    }
  },
  setup(e) {
    const t = e, a = De({
      formId: "getmodules",
      router: xo(),
      searchFields: t.searchEnable ? ["app_name", "app_desc", "app_code", "app_category"] : void 0,
      // dpFormData: {
      // 	providerId: '68f5f4ce2bdb232a29533e50',
      // 	providerType: 'FORM',
      // 	options: {
      // 		where: `app_publisher = '2' AND (app_share = 'public' OR (app_share = 'private' AND \`created_by.id\`= CONVERT(:xuser_idx, 'objectId')) OR (app_share = 'assign' AND \`app_assign_roles.value\` IN(:xrolesx) ) )`,
      // 	},
      // } as SdProvider,
      formModel: {
        dataid: "fix",
        form_name: "App Factory",
        form_detail: null,
        form_icon: "",
        form_table: "module_packages",
        form_tag: ["module_builder"],
        form_category: "",
        form_feature: "pro",
        feature_token: "",
        form_type: "form_only",
        form_mobile: !1,
        form_version: "v1",
        version_parent: "",
        version_count: 0,
        version_description: "",
        joiner_field: {
          form_parent: "",
          joiner_enable: !1,
          joiner_label: "Parent",
          joiner_variable: "_id",
          form_id: "",
          field_name: "parent_id",
          label_fields: [],
          label_template: "",
          search_fields: [],
          ref_fields: [],
          sql_filter: "",
          order_by: [],
          ref_form: null,
          insert_enable: !0,
          edit_enable: !0,
          view_enable: !0,
          change_enable: !1,
          joiner_size: 100,
          joiner_hint: "",
          joiner_placeholder: "Please select..."
        },
        form_license: "",
        form_model: "",
        form_approve: !0,
        form_enable: !0,
        form_options: {
          data_manager: [],
          auto_save: !1,
          allowed_clone: !1,
          popup_size: 70,
          system_form: !0,
          query_tool: "disable",
          unique_record: "disable",
          unique_submitted: !1,
          unique_field: "",
          display_fields: ["app_logo", "app_name", "app_code", "app_desc", "app_category", "app_share"],
          search_fields: ["app_name", "app_code", "app_category", "app_desc"],
          enable_websocket: !0
        },
        form_share: {
          form_sharing: "private",
          form_assign: [],
          data_sharing: "private",
          insert_policy: !0,
          insert_assign: [],
          update_policy: !1,
          update_assign: [],
          delete_policy: !1,
          delete_assign: [],
          form_token: {
            token_enable: !1,
            token_unique: !0,
            token_edit: !1,
            token_result: !0,
            token_header: !0,
            token_footer: !0,
            token_code: "",
            token_uid: "",
            token_user: "",
            token_commit: !0,
            token_commit_content: ""
          }
        },
        form_db: {
          api_url: "",
          autonum: {},
          schema: {
            app_name: {
              fieldName: "app_name",
              label: "App Name",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !0,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "250",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: 255,
                showWordLimit: !0
              }
            },
            app_desc: {
              fieldName: "app_desc",
              label: "Descriptions",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "300",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            app_code: {
              fieldName: "app_code",
              label: "Package Code",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !0,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "200",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              },
              textType: "success"
            },
            app_category: {
              fieldName: "app_category",
              label: "Category",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "group-list-input",
              componentName: "Group List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "200",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: "67ce615d63dfa2219b7ea957",
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_share: {
              fieldName: "app_share",
              label: "App Sharing",
              defaultValue: "public",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "150",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {},
              filters: !0
            },
            app_assign_roles: {
              fieldName: "app_assign_roles",
              label: "Roles",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !0,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_note: {
              fieldName: "app_note",
              label: "Note",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "html-input",
              componentName: "HTML Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_logo: {
              fieldName: "app_logo",
              label: "Logo",
              defaultValue: null,
              subField: null,
              type: "Array",
              component: "crop-upload-input",
              componentName: "Crop Picture",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "130",
              align: "center",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_packages: {
              fieldName: "app_packages",
              label: "App Packages",
              defaultValue: null,
              subField: {
                tab_form: {
                  fieldName: "tab_form",
                  label: "Form",
                  subField: null,
                  defaultValue: null,
                  component: "select-data-input",
                  componentName: "Select Data List",
                  type: "Object|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  multiple: !1,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_icon: {
                  fieldName: "tab_icon",
                  label: "Icon",
                  subField: null,
                  defaultValue: null,
                  component: "icon-input",
                  componentName: "Icon List",
                  type: "String|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_label: {
                  fieldName: "tab_label",
                  label: "Label",
                  subField: null,
                  defaultValue: null,
                  component: "text-input",
                  componentName: "Text Input",
                  type: "String",
                  hidden: !1,
                  required: !1,
                  readonly: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {
                    minlength: null,
                    maxlength: null,
                    showWordLimit: !1
                  },
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_roles: {
                  fieldName: "tab_roles",
                  label: "Roles",
                  subField: null,
                  defaultValue: null,
                  component: "select-data-input",
                  componentName: "Select Data List",
                  type: "Object|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  multiple: !0,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_widget_name: {
                  fieldName: "tab_widget_name",
                  label: "Widget Name",
                  subField: null,
                  defaultValue: "",
                  component: "text-input",
                  componentName: "Text Input",
                  type: "String",
                  hidden: !1,
                  required: !1,
                  readonly: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {
                    minlength: null,
                    maxlength: null,
                    showWordLimit: !1
                  },
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_options: {
                  fieldName: "tab_options",
                  label: "Options",
                  subField: null,
                  defaultValue: "",
                  component: "btn-editor-input",
                  componentName: "Button Editor",
                  type: "String|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                }
              },
              type: "Array",
              component: "sub-form",
              componentName: "Sub Form",
              hidden: !1,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_roles": {
              fieldName: "app_packages.tab_roles",
              label: "Roles",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !0,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_label": {
              fieldName: "app_packages.tab_label",
              label: "Label",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            "app_packages.tab_icon": {
              fieldName: "app_packages.tab_icon",
              label: "Icon",
              defaultValue: null,
              subField: null,
              type: "String|Array",
              component: "icon-input",
              componentName: "Icon List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_form": {
              fieldName: "app_packages.tab_form",
              label: "Form",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !0,
              inputOptions: {}
            },
            "app_packages.tab_options": {
              fieldName: "app_packages.tab_options",
              label: "Options",
              defaultValue: "",
              subField: null,
              type: "String|Array",
              component: "btn-editor-input",
              componentName: "Button Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_info: {
              fieldName: "app_info",
              label: "App Info",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "html-input",
              componentName: "HTML Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_widget_name": {
              fieldName: "app_packages.tab_widget_name",
              label: "Widget Name",
              defaultValue: "",
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            app_publisher: {
              fieldName: "app_publisher",
              label: "Publisher",
              defaultValue: "1",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_mode: {
              fieldName: "app_mode",
              label: "App Mode",
              defaultValue: "module",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            }
          },
          data_list: {
            app_share: [
              {
                label: "Private",
                value: "private"
              },
              {
                label: "Public",
                value: "public"
              },
              {
                label: "Assign to",
                value: "assign"
              }
            ],
            app_publisher: [
              {
                label: "Draft",
                value: "1"
              },
              {
                label: "Publisher",
                value: "2"
              }
            ],
            app_mode: [
              {
                label: "Module",
                value: "module"
              },
              {
                label: "Page",
                value: "page"
              }
            ]
          },
          index: {}
        },
        form_event: {
          enable: !0,
          data_validation: [],
          api_onevent: [],
          open_next_form: [],
          update_relational_fields: [],
          delete_children_record: [],
          clone_children_record: [],
          harvest_data: [],
          after_save: "",
          after_delete: "",
          update_children: !0
        },
        updated_by: {
          id: "642a888fa09ccdfdd8291833",
          name: "supat maneewong (iencoded@gmail.com)"
        },
        updated_at: "2025-11-14 16:25:01",
        created_by: {
          id: "642a888fa09ccdfdd8291833",
          name: "supat maneewong (iencoded@gmail.com)"
        },
        created_at: "2025-10-20 15:37:34"
      }
    });
    function l(o, i) {
      a.router.push(t.path + o._id);
    }
    return xe(() => {
    }), (o, i) => {
      const s = tf;
      return n(), h(s, {
        "form-id": a.formId,
        "provider-type": "SYS",
        "search-fields": a.searchFields,
        column: 6,
        "limit-row": e.limit,
        "scroll-distance": 600,
        "icon-wigth": 78,
        "icon-field": "app_logo",
        "title-field": "app_name",
        "title-name": e.title,
        "icon-name": e.icon,
        "list-type": "listicon",
        "form-model": a.formModel,
        "click-event": l,
        "user-state": e.userState
      }, null, 8, ["form-id", "search-fields", "limit-row", "title-name", "icon-name", "form-model", "user-state"]);
    };
  }
});
function pl(e) {
  return e.includes("admin") || e.includes("super");
}
const af = Ho(() => import("./sd-render-BbYv5EsS.js").then((e) => e.S)), lf = B({
  name: "SdCrudForm",
  components: {
    SdFormRenderAsync: af
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    dataId: {
      type: String,
      default: ""
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    optionData: {
      type: Object
    },
    beforeSave: Function,
    afterSave: Function,
    changeVersion: Function,
    nextInsert: {
      type: Boolean,
      default: !1
    },
    showFooter: {
      type: Boolean,
      default: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    isSubForm: {
      type: Boolean,
      default: !1
    },
    showTitle: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      formReadonly: this.readonly,
      saveDart: !1,
      reSaveDart: !1,
      autoSave: !1,
      //this.sdformModel.form_options.auto_save
      appMode: !1,
      //this.sdformModel.form_type == 'form_ui'
      afterSaveForm: void 0,
      isInsert: !0,
      rstat: 0,
      rstatSubmit: 1,
      enableSubmit: !0,
      apiUrl: "",
      userBy: this.userState.user,
      hideForm: !1,
      loadForm: !1,
      hideMsg: "",
      allowInsert: !1,
      allowUpdate: !1,
      btnDisableSubmit: !1,
      btnDisable: !1,
      defaultParams: {},
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      curFormId: this.formId,
      nextOpenForm: {},
      sdFunc: {}
    };
  },
  computed: {
    showInput() {
      return this.refSdForm ? this.refSdForm.showInput : !0;
    },
    // joiner ยัง resolve label ของ parent ไม่เสร็จ → กัน Submit จนกว่าจะพร้อม
    // ฟอร์มยังไม่ mount (async component ยัง preload อยู่) = ยังไม่พร้อม → false → กัน Submit ไว้ก่อน
    joinerReady() {
      return this.refSdForm ? this.refSdForm.joinerReady : !1;
    },
    dataError() {
      return !!this.formData.xerrorx && typeof this.formData.xerrorx == "object" && Object.keys(this.formData.xerrorx).length > 0;
    }
  },
  setup() {
    const e = q(), t = q(), a = R("subFormOpen", void 0);
    return {
      refSdForm: e,
      subFormOpen: a,
      loading: t
    };
  },
  async mounted() {
    if (this.loadForm = !1, this.formId != "")
      if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && this.initForm(e.data) : O.warning(e.message);
      } else
        O.warning("UserState not found.");
    else
      O.warning("FormId not found.");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleAfterSave: this.handleAfterSave,
      userState: this.userState,
      params: this.params,
      ElMessage: O,
      sdformModel: this.sdformModel,
      nextOpenForm: this.nextOpenForm,
      refSdForm: this.refSdForm
    };
  },
  async beforeUnmount() {
    this.formData && this.formData._id && vl(this.formData.xrstatx) && this.formData.xrstatx === 0 && (this.isInsert = !0, this.sdformModel.dataid && (await oh(this.sdformModel.dataid, this.formData._id, this.useUserState) || O.warning("Unable to delete empty data")));
  },
  methods: {
    async initForm(e) {
      const t = e._id || this.formId;
      if (this.sdformModel = P(e), this.userState.formStore[t] = this.sdformModel, this.hideMsg = "", this.hideForm = !1, this.userState.versionStore[this.formId] || (this.userState.versionStore[this.formId] = {}), this.userState.versionStore[this.formId][`${e.form_version}`] = t, !this.appMode && !this.annotated) {
        if (await this.getFormDataRecord(), this.formData.xversionx && this.formData.xversionx !== this.sdformModel.form_version) {
          let o = !0;
          if (this.userState.versionStore[this.formId][this.formData.xversionx] && (this.curFormId = this.userState.versionStore[this.formId][this.formData.xversionx], this.userState.formStore[this.curFormId] && (this.sdformModel = P(this.userState.formStore[this.curFormId]), o = !1)), o) {
            const i = await lh(this.formId, this.formData.xversionx, this.useUserState);
            i.response && i.data && i.data.dataid && (this.sdformModel = P(i.data), this.userState.formStore[i.data.dataid] = this.sdformModel, this.userState.versionStore[this.formId][`${this.sdformModel.form_version}`] = i.data.dataid);
          }
        }
        this.changeVersion && this.changeVersion(this.sdformModel);
      }
      if (this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, !this.userBy && this.userState.user && (this.userBy = this.userState.user), this.autoSave = this.sdformModel.form_options.auto_save, this.appMode = this.sdformModel.form_type == "form_ui", this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user), this.allowUpdate = Xe(this.sdformModel, this.formData, this.userState.user)), !pl(this.userState.systemRoles)) {
        if (this.sdformModel.form_share.form_sharing === "private") {
          let o = "";
          this.sdformModel.created_by && this.sdformModel.created_by.id && (o = this.sdformModel.created_by.id), this.userBy?.user_id !== o && (this.hideMsg = "You don't have permission to use this form.", this.hideForm = !0);
        } else if (this.sdformModel.form_share.form_sharing === "assign") {
          let o = "";
          if (this.sdformModel.created_by && this.sdformModel.created_by.id && (o = this.sdformModel.created_by.id), this.userBy?.user_id !== o) {
            const i = this.sdformModel.form_share.form_assign, s = this.userBy && this.userBy.roles ? this.userBy.roles : [];
            let u = !1;
            s.forEach((m) => {
              if (i.includes(m)) {
                u = !0;
                return;
              }
            }), u || (this.hideMsg = "You don't have permission to use this form.", this.hideForm = !0);
          }
        }
      }
      this.formData.xrstatx && this.formData.xrstatx > 1 && (this.formReadonly = !0), this.sdformModel.form_options.query_tool && this.sdformModel.form_options.query_tool != "disable" ? (this.saveDart = !0, this.rstatSubmit = 2, this.formData.xrstatx && this.formData.xrstatx !== 0 ? this.enableSubmit = !0 : this.enableSubmit = !1, this.enableSubmit && (this.sdformModel.form_options.query_tool === "enable_error_check" ? this.dataError ? this.btnDisable = !0 : this.btnDisable = !1 : this.btnDisable = !1, this.formData.xrstatx && this.formData.xrstatx === 2 ? this.userState.user && (this.reSaveDart = nh(this.sdformModel, this.userState.user)) : this.reSaveDart = !1)) : this.saveDart = !1;
      const a = P(this.formData), l = P(this.params);
      this.defaultParams = { ...l, ...a }, this.sdformModel.form_event && this.sdformModel.form_event.after_save && this.sdformModel.form_event.enable && (this.afterSaveForm = new Function("isInsert", "formData", "formOldData", ...ke, this.sdformModel.form_event.after_save)), this.loading?.close(), this.loadForm = !0;
    },
    async getFormDataRecord() {
      if (this.sdformModel.form_type === "form_ui") {
        this.initData && Object.keys(this.initData).length > 0 && (this.formData = P(this.initData));
        return;
      }
      if (this.initData && this.initData._id)
        this.formData = P(this.initData);
      else if (this.dataId && this.dataId != "")
        await this.userState.crudGetOne(
          {
            sdProvider: {
              providerId: this.formId,
              providerType: "FORM",
              options: {
                where: "_id = CONVERT(:dataid, 'objectId')"
              },
              params: { dataid: this.dataId }
            }
          },
          (e) => {
            e.data ? this.formData = P(e.data) : O.warning("Unable to get data");
          },
          () => {
            O.warning("Unable to get data");
          }
        );
      else {
        const e = await Ga(this.sdformModel._id || this.sdformModel.dataid, this.useUserState);
        e ? (this.refSdForm && this.refSdForm.resetForm(), this.formData = { ...e, ...P(this.initData) }) : O.warning("Unable to create empty data");
      }
    },
    async afterSubmit(e, t) {
      if (this.afterSave && await this.afterSave(e, t), this.nextInsert)
        this.initData._id || this.dataId != "" || this.getFormDataRecord();
      else if (this.sdformModel.form_event.enable && this.sdformModel.form_event.open_next_form && Object.values(this.sdformModel.form_event.open_next_form).length > 0)
        for (const a of this.sdformModel.form_event.open_next_form) {
          let l = "true";
          if (a.cond && (l = a.cond), qr(l, e) && a.form) {
            if (this.subFormOpen) {
              const o = Sl(e);
              let i = {};
              if (a.initdata && Object.values(a.initdata).length > 0)
                for (const s of a.initdata) {
                  const u = Wr(s.value, e);
                  rl(i, s.field, u);
                }
              this.nextOpenForm = {
                formId: a.form,
                parentId: ue(a.parentId, o),
                dataId: ue(a.dataId, o),
                initData: i
              }, this.nextOpenForm.dataId ? this.nextOpenForm.isInsert = !1 : this.nextOpenForm.isInsert = !0, this.subFormOpen({
                modelValue: !0,
                formId: this.nextOpenForm.formId,
                parentId: this.nextOpenForm.parentId,
                dataId: this.nextOpenForm.dataId,
                initData: this.nextOpenForm.initData,
                params: this.params,
                readonly: !1,
                afterSaveCallback: this.handleAfterSave,
                cancelCallback: this.handleCancel
              });
            }
            break;
          }
        }
    },
    handleAfterSave(e, t) {
      let a = this.nextOpenForm.isInsert ? "insert" : "update";
      const l = this.userState.connectWebSocket("gridform", this.nextOpenForm.formId, "", (o) => {
      });
      setTimeout(() => {
        l.wsSend({ data: e, method: a, keyid: "_id" }), l.wsDisconnect();
      }, 500), this.handleCancel();
    },
    handleCancel() {
      this.subFormOpen({
        modelValue: !1,
        formId: this.formId,
        cancelCallback: () => {
        }
      });
    },
    //form event
    async onFormChange(e, t, a, l, o, i) {
      if (this.autoSave && !this.formReadonly)
        this.btnDisableSubmit = !0, this.onSubmit(1, !0);
      else if (!this.formReadonly) {
        const s = this.sdformModel.form_db.schema[e] ? this.sdformModel.form_db.schema[e] : {}, u = ["picture-upload-input", "file-upload-input", "crop-upload-input"];
        if (s.component && u.includes(s.component)) {
          let m = P(this.formData);
          m[e] = t;
          const f = await vt(this.sdformModel.dataid, this.formData._id, m, this.formData.xrstatx, this.useUserState);
          f.data && this.formData.xrstatx !== 0 && this.afterSubmit(P(f), !0);
        }
      }
    },
    onSubmit(e, t = !1) {
      this.appMode ? O.warning("App mode.") : this.refSdForm.getFormData().then(async (a) => {
        let l = {};
        this.beforeSave && (l = this.beforeSave(a)), a = { ...this.formData, ...a, ...l }, a.xversionx = this.sdformModel.form_version, this.formData.xrstatx && (this.isInsert = !1);
        const o = await vt(this.formId, this.formData._id, a, e, this.useUserState), i = o.data;
        if (this.btnDisableSubmit = !1, i) {
          if (i._id = this.formData._id, this.formData = P(i), this.sdformModel.form_event.enable && this.afterSaveForm && !t)
            try {
              this.afterSaveForm.call(this.sdFunc, this.isInsert, i, this.formData);
            } catch (s) {
              O.error(s.message);
            }
          this.afterSubmit(i, t);
        } else
          O.warning(o.message);
      }).catch((a) => {
        typeof a == "string" ? O.warning(a) : O.warning(a.message);
      });
    }
  }
});
function of(e, t, a, l, o, i) {
  const s = Rt, u = X("SdFormRenderAsync"), m = ie, f = ut, c = Nt;
  return n(), v(L, null, [
    e.hideForm ? (n(), h(s, {
      key: 0,
      title: e.hideMsg,
      type: "warning",
      "show-icon": "",
      style: { "margin-bottom": "10px" },
      closable: !1
    }, null, 8, ["title"])) : (n(), v(L, { key: 1 }, [
      e.loadForm ? (n(), h(u, {
        key: 0,
        ref: "refSdForm",
        sdform: e.sdformModel,
        "parent-id": e.parentId,
        "form-data": e.formData,
        "option-model": e.optionData,
        disabled: e.formReadonly,
        "api-url": e.apiUrl,
        params: e.params,
        annotated: e.annotated,
        "is-sub-form": e.isSubForm,
        "auth-token": e.userState.user?.token,
        "submit-func": e.onSubmit,
        "user-state": e.userState,
        onFormChange: e.onFormChange
      }, {
        default: r(() => [
          re(e.$slots, "inputForm")
        ]),
        _: 3
      }, 8, ["sdform", "parent-id", "form-data", "option-model", "disabled", "api-url", "params", "annotated", "is-sub-form", "auth-token", "submit-func", "user-state", "onFormChange"])) : b("", !0)
    ], 64)),
    !e.readonly && e.showInput && !e.appMode && e.showFooter ? (n(), h(c, { key: 2 }, {
      default: r(() => [
        d(f, {
          span: 24,
          style: { "text-align": "right" }
        }, {
          default: r(() => [
            e.reSaveDart ? (n(), h(m, {
              key: 0,
              type: "warning",
              onClick: t[0] || (t[0] = U((_) => e.onSubmit(1), ["prevent"])),
              plain: ""
            }, {
              default: r(() => [...t[4] || (t[4] = [
                D("Re-Save Dart", -1)
              ])]),
              _: 1
            })) : b("", !0),
            !e.hideForm && !e.formReadonly ? (n(), v(L, { key: 1 }, [
              e.saveDart ? (n(), h(m, {
                key: 0,
                type: "success",
                onClick: t[1] || (t[1] = U((_) => e.onSubmit(1), ["prevent"])),
                disabled: e.btnDisableSubmit || !e.joinerReady
              }, {
                default: r(() => [...t[5] || (t[5] = [
                  D("Save Dart", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : b("", !0),
              e.enableSubmit ? (n(), h(m, {
                key: 1,
                type: "primary",
                onClick: t[2] || (t[2] = U((_) => e.onSubmit(e.rstatSubmit), ["prevent"])),
                disabled: e.btnDisableSubmit || e.btnDisable || !e.joinerReady
              }, {
                default: r(() => [...t[6] || (t[6] = [
                  D("Submit", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : b("", !0),
              d(m, {
                onClick: t[3] || (t[3] = (_) => e.refSdForm.resetForm())
              }, {
                default: r(() => [...t[7] || (t[7] = [
                  D("Reset", -1)
                ])]),
                _: 1
              })
            ], 64)) : b("", !0),
            re(e.$slots, "closeForm")
          ]),
          _: 3
        })
      ]),
      _: 3
    })) : b("", !0)
  ], 64);
}
const Fl = /* @__PURE__ */ j(lf, [["render", of]]), nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fl
}, Symbol.toStringTag, { value: "Module" })), sf = Ho(() => Promise.resolve().then(() => nf)), rf = B({
  name: "SdAppViewer",
  components: { SdCrudForm: sf },
  props: {
    appIdDefault: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    lazyLoad: {
      type: Boolean,
      default: !0
    },
    customComponents: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      appFormId: "68f5f4ce2bdb232a29533e50",
      dpAppData: {
        providerId: "getapp-one",
        providerType: "SYS"
      },
      useUserState: this.userState,
      appData: {},
      appId: this.appIdDefault,
      tab: "1",
      dataId: "",
      parentId: "",
      params: {},
      appTitle: "AppName",
      appTitleSub: "",
      appIcon: null,
      appInfo: "",
      appTabs: [],
      showInfo: !1,
      permissionDenied: !1
    };
  },
  computed: {},
  created() {
    this.dpAppData.params = this.route.query ? this.route.query : {};
  },
  async mounted() {
    await this.initApp();
  },
  unmounted() {
    this.params = {}, this.appId = this.appIdDefault, this.tab = "1", this.dataId = "", this.parentId = "", this.appIcon = null, this.appTitle = "AppName", this.appTitleSub = "", this.appInfo = "", this.appTabs = [];
  },
  setup(e, t) {
    return { route: Go() };
  },
  methods: {
    async initApp() {
      const e = await Lt(this.dpAppData, this.useUserState);
      e && e.response && e.data && e.data.data && (this.appData = P(e.data.data), this.appPermission(this.appData, this.useUserState.user) ? (this.updateMainParams(), this.appTitle = this.appData.app_name || "AppName", this.appIcon = this.appData.app_logo || null, this.appTitleSub = this.appData.app_desc || "", this.appInfo = this.appData.app_info || "", this.appTabs = this.appData.app_packages || []) : this.permissionDenied = !0);
    },
    updateMainParams() {
      this.route.query ? this.params = P(this.route.query) : this.params = P, this.route.query && this.route.query.appId ? this.appId = String(this.route.query.appId) : this.appId = this.appIdDefault, this.route.query && this.route.query.tab && (this.tab = String(this.route.query.tab)), this.route.query && this.route.query.dataId && (this.dataId = String(this.route.query.dataId)), this.route.query && this.route.query.parentId && (this.parentId = String(this.route.query.parentId));
    },
    getImage(e) {
      if (e && Object.keys(e).length > 0 && e[0])
        return e[0].url ? e[0].url : e[0];
    },
    getFormId(e) {
      let t = "";
      return e && e.value && (t = e.value), t;
    },
    getSelectValue(e) {
      let t = "";
      return e && e.value && (t = e.value), t;
    },
    handleAppInfo() {
      this.showInfo = !0;
    },
    handleTabChange(e) {
    },
    appPermission(e, t) {
      let a = !1;
      if (e.app_share === "public")
        a = !0;
      else if (e.app_share === "private")
        (e.created_by.id === t.user_id || pl(t.roles)) && (a = !0);
      else if (e.app_share === "assign") {
        const l = e.app_assign_roles, o = t.roles;
        pl(t.roles) ? a = !0 : o.forEach((i) => {
          if (l.includes(i)) {
            a = !0;
            return;
          }
        });
      }
      return a;
    }
  }
}), df = {
  key: 0,
  class: "app_page"
}, uf = { class: "app_header" }, pf = { class: "app_title text-6" }, mf = { class: "ml-2" }, hf = { class: "ml-1 sub-title" }, ff = { class: "app_actions" }, cf = { class: "app_content" }, bf = { class: "tabs-label" }, gf = { class: "tabs-content" }, yf = {
  key: 1,
  class: "tabs-content"
}, vf = { key: 2 }, wf = {
  role: "heading",
  class: "el-dialog__title"
};
function Sf(e, t, a, l, o, i) {
  const s = cl, u = ie, m = we, f = Fl, c = Rt, _ = Eo, $ = Ao, g = xa, I = Ce, F = qo("can");
  return n(), v(L, null, [
    e.appId ? (n(), v("div", df, [
      C("div", uf, [
        C("span", pf, [
          d(s, {
            shape: "square",
            fit: "cover",
            style: { width: "32px", height: "32px" },
            icon: "Picture",
            src: e.getImage(e.appIcon)
          }, null, 8, ["src"]),
          C("span", mf, M(e.appTitle), 1),
          t[3] || (t[3] = D()),
          C("span", hf, M(e.appTitleSub), 1)
        ]),
        C("span", ff, [
          e.appInfo ? (n(), h(u, {
            key: 0,
            circle: "",
            plain: "",
            icon: "InfoFilled",
            onClick: e.handleAppInfo
          }, null, 8, ["onClick"])) : b("", !0),
          re(e.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      C("div", cf, [
        e.appTabs.length > 1 ? (n(), h($, {
          key: 0,
          modelValue: e.tab,
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.tab = p),
          type: "card",
          class: "app-tabs",
          onTabChange: e.handleTabChange
        }, {
          default: r(() => [
            (n(!0), v(L, null, G(e.appTabs, (p, w) => (n(), h(_, {
              key: w + 1,
              label: p.tab_label,
              name: String(w + 1),
              lazy: e.lazyLoad
            }, {
              label: r(() => [
                C("span", bf, [
                  p.tab_icon ? (n(), h(m, {
                    key: 0,
                    "icon-name": p.tab_icon,
                    class: "mr-1"
                  }, null, 8, ["icon-name"])) : b("", !0),
                  C("span", null, M(p.tab_label), 1)
                ])
              ]),
              default: r(() => [
                Ae((n(), v("div", gf, [
                  p.tab_widget_name ? (n(), h(zt(e.customComponents[p.tab_widget_name]), ae({
                    key: 0,
                    ref_for: !0
                  }, p.tab_options ? p.tab_options : {}, {
                    key: w + 1,
                    "user-state": e.userState
                  }), null, 16, ["user-state"])) : (n(), v(L, { key: 1 }, [
                    p.tab_form && e.getFormId(p.tab_form) ? (n(), h(f, {
                      key: 0,
                      "form-id": e.getFormId(p.tab_form),
                      "data-id": e.dataId,
                      "parent-id": e.parentId,
                      params: e.params,
                      "show-title": !1,
                      "next-insert": !0,
                      "user-state": e.userState
                    }, null, 8, ["form-id", "data-id", "parent-id", "params", "user-state"])) : b("", !0)
                  ], 64))
                ])), [
                  [
                    F,
                    p.tab_roles && Object.keys(e.getSelectValue(p.tab_roles)).length > 0 ? e.getSelectValue(p.tab_roles) : e.userState.user?.roles,
                    void 0,
                    { any: !0 }
                  ]
                ]),
                Ae(d(c, {
                  title: "You don't have permission to access.",
                  type: "warning",
                  "show-icon": ""
                }, null, 512), [
                  [
                    F,
                    e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
                    void 0,
                    {
                      any: !0,
                      not: !0
                    }
                  ]
                ])
              ]),
              _: 2
            }, 1032, ["label", "name", "lazy"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "onTabChange"])) : e.appTabs.length === 1 && e.appTabs[0].tab_form && e.getFormId(e.appTabs[0].tab_form) ? Ae((n(), v("div", yf, [
          d(f, {
            "form-id": e.getFormId(e.appTabs[0].tab_form),
            "data-id": e.dataId,
            "parent-id": e.parentId,
            params: e.params,
            "show-title": !1,
            "next-insert": !0,
            "user-state": e.userState
          }, null, 8, ["form-id", "data-id", "parent-id", "params", "user-state"])
        ])), [
          [
            F,
            e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
            void 0,
            { any: !0 }
          ]
        ]) : b("", !0),
        Ae(d(c, {
          title: "You don't have permission to access.",
          type: "warning",
          "show-icon": ""
        }, null, 512), [
          [
            F,
            e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
            void 0,
            {
              any: !0,
              not: !0
            }
          ]
        ])
      ])
    ])) : b("", !0),
    e.permissionDenied ? (n(), h(c, {
      key: 1,
      title: "You don't have permission to access this application.",
      type: "warning",
      "show-icon": ""
    })) : b("", !0),
    e.showInfo ? (n(), v("div", vf, [
      d(I, {
        title: "App Info",
        modelValue: e.showInfo,
        "onUpdate:modelValue": t[2] || (t[2] = (p) => e.showInfo = p),
        width: "70%",
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "body-class": "app-popup",
        "append-to-body": "",
        "close-on-click-modal": !0,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: p, titleId: w, titleClass: S }) => [
          C("span", wf, [
            d(m, { "icon-name": "el-info-filled" }),
            t[4] || (t[4] = D(" App Info ", -1))
          ])
        ]),
        default: r(() => [
          e.appInfo ? (n(), h(g, {
            key: 0,
            modelValue: e.appInfo,
            "onUpdate:modelValue": t[1] || (t[1] = (p) => e.appInfo = p),
            mode: "mini",
            readonly: !0,
            "user-state": e.userState
          }, null, 8, ["modelValue", "user-state"])) : b("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])) : b("", !0)
  ], 64);
}
const HS = /* @__PURE__ */ j(rf, [["render", Sf], ["__scopeId", "data-v-1446cb78"]]);
tr.register(
  ar,
  lr,
  or,
  ir,
  nr,
  sr,
  rr,
  dr,
  ur,
  pr,
  mr,
  hr,
  fr,
  cr,
  br,
  gr,
  yr,
  vr,
  wr,
  Sr,
  _r,
  Fr
);
const _f = B({
  name: "SdChart",
  // cast as any — กัน type ภายในของ vue-chartjs (ChartComponent) leak ตอน gen .d.ts
  components: { Chart: kr },
  props: {
    sqlId: {
      type: String,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String,
      default: "bar"
    },
    title: {
      type: String,
      default: "Chart"
    },
    titleDisplay: {
      type: Boolean,
      default: !0
    },
    gridDisplay: {
      type: Boolean,
      default: !0
    },
    legendDisplay: {
      type: Boolean,
      default: !0
    },
    legendCustom: {
      type: Object,
      default: {}
    },
    scalesXDisplay: {
      type: Boolean,
      default: !0
    },
    scalesXLabel: {
      type: String,
      default: ""
    },
    scalesXCustom: {
      type: Object,
      default: {}
    },
    xField: {
      type: String,
      default: ""
    },
    xType: {
      type: String,
      default: "category"
    },
    scalesYDisplay: {
      type: Boolean,
      default: !0
    },
    scalesYLabel: {
      type: String,
      default: ""
    },
    scalesYCustom: {
      type: Object,
      default: {}
    },
    yDataset: {
      type: Array,
      default: []
    },
    customOptions: {
      type: Object,
      default: {}
    },
    userState: {
      type: Object,
      required: !0
    },
    mockup: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // data: {
      // 	datasets: [],
      // } as ChartData,
      options: {},
      dataMockup: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{ label: "Count", data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }]
      },
      optionsMockup: {},
      defaultParams: this.params,
      rawData: [],
      loadEnable: !1,
      preLoading: !1,
      showChart: !1,
      apiUrl: "",
      isDark: de(),
      useUserState: this.$props.userState
    };
  },
  watch: {
    isDark: {
      deep: !1,
      handler(e) {
        this.createOptions(), this.optionsMockup = this.createOpMockup();
      }
    }
  },
  computed: {
    color() {
      return de().value ? "#414243" : "#e4e7ed";
    },
    dataChart() {
      const e = {}, t = this.rawData.map((l) => {
        if (l[this.xField])
          return l[this.xField];
      });
      e.labels = t;
      const a = [];
      if (this.yDataset && this.yDataset.length > 0)
        for (const [l, o] of this.yDataset.entries()) {
          const i = o.custom ? o.custom : {}, s = this.rawData.map((u) => {
            if (u[o.field])
              return u[o.field];
          });
          a.push({
            data: s,
            label: o.label ? o.label : "Unit" + l,
            type: o.type ? o.type : "bar",
            borderColor: o.borderColor && Object.keys(o.borderColor).length > 0 ? o.borderColor : void 0,
            backgroundColor: o.backgroundColor && Object.keys(o.backgroundColor).length > 0 ? o.backgroundColor : void 0,
            fill: o.fill ? o.fill : void 0,
            ...i
          });
        }
      return e.datasets = a, e;
    }
  },
  created() {
    this.apiUrl = "";
  },
  mounted() {
    this.buildState || (this.loadEnable = !0), this.optionsMockup = this.createOpMockup(), this.initdata();
  },
  unmounted() {
  },
  setup(e, t) {
    return {
      chartRef: q()
    };
  },
  methods: {
    async initdata() {
      const e = {
        providerId: this.sqlId,
        providerType: me.SQL,
        params: this.params
      };
      if (this.rawData = [], this.loadEnable) {
        const t = await lt(e, !1, this.useUserState);
        t && t.response && t.data && t.data.data && (this.rawData = P(t.data.data), this.xField && (this.createOptions(), this.showChart = !0));
      }
    },
    createOptions() {
      this.options = {
        responsive: !0,
        plugins: {
          legend: {
            display: this.legendDisplay,
            ...this.legendCustom
          },
          title: {
            display: this.titleDisplay,
            text: this.title
          }
        },
        scales: {
          x: {
            type: this.xType,
            display: this.scalesXDisplay,
            time: this.xType === "time" ? {
              displayFormats: {
                quarter: "MMM YYYY"
              }
            } : void 0,
            title: {
              display: !0,
              text: this.scalesXLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            },
            ...this.scalesXCustom
          },
          y: {
            display: this.scalesYDisplay,
            title: {
              display: !0,
              text: this.scalesYLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            },
            ...this.scalesYCustom
          }
        },
        ...this.customOptions
      };
    },
    createOpMockup() {
      return {
        responsive: !0,
        scales: {
          x: {
            type: this.xType,
            display: this.scalesXDisplay,
            title: {
              display: !0,
              text: this.scalesXLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            }
          },
          y: {
            display: this.scalesYDisplay,
            title: {
              display: !0,
              text: this.scalesYLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            }
          }
        }
      };
    }
  }
});
function Ff(e, t, a, l, o, i) {
  const s = X("chart");
  return n(), v("div", {
    ref: "chartRef",
    style: te(`width: ${e.width ? e.width + "px" : "100%"}; height: ${e.height ? e.height + "px" : "100%"}`)
  }, [
    e.mockup && e.buildState ? (n(), h(s, {
      key: 0,
      type: e.type,
      data: e.dataMockup,
      options: e.optionsMockup
    }, null, 8, ["type", "data", "options"])) : (n(), v(L, { key: 1 }, [
      e.showChart ? (n(), h(s, {
        key: 0,
        type: e.type,
        data: e.dataChart,
        options: e.options
      }, null, 8, ["type", "data", "options"])) : b("", !0)
    ], 64))
  ], 4);
}
const qS = /* @__PURE__ */ j(_f, [["render", Ff]]), kf = B({
  name: "SdApexChart",
  components: { ApexChart: Cr },
  props: {
    sqlId: {
      type: String,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String
      //timeline,pyramid,boxPlot
    },
    title: {
      type: String,
      default: "Chart"
    },
    titleDisplay: {
      type: Boolean,
      default: !0
    },
    gridDisplay: {
      type: Boolean,
      default: !0
    },
    gridCustom: {
      type: Object,
      default: {}
    },
    legendDisplay: {
      type: Boolean,
      default: !0
    },
    legendCustom: {
      type: Object,
      default: {}
    },
    scalesXDisplay: {
      type: Boolean,
      default: !0
    },
    scalesXLabel: {
      type: String,
      default: ""
    },
    scalesXCustom: {
      type: Object,
      default: {}
    },
    xField: {
      type: String,
      default: ""
    },
    xType: {
      type: String,
      default: "category"
    },
    scalesYDisplay: {
      type: Boolean,
      default: !0
    },
    scalesYLabel: {
      type: String,
      default: ""
    },
    scalesYCustom: {
      type: Object,
      default: {}
    },
    yDataset: {
      type: Array,
      default: []
    },
    customOptions: {
      type: Object,
      default: {}
    },
    userState: {
      type: Object,
      required: !0
    },
    mockup: {
      type: Boolean,
      default: !1
    },
    dataLabelsShow: {
      type: Boolean,
      default: !1
    },
    toolbarShow: {
      type: Boolean,
      default: !1
    },
    zoomEnable: {
      type: Boolean,
      default: !0
    },
    tooltipShow: {
      type: Boolean,
      default: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // data: {
      // 	datasets: [],
      // } as ChartData,
      options: {},
      dataMockup: [
        { name: "Count", type: "bar", data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] },
        { name: "Value", type: "line", data: [80, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40, 39] }
      ],
      optionsMockup: {},
      defaultParams: this.params,
      rawData: [],
      loadEnable: !1,
      preLoading: !1,
      showChart: !1,
      apiUrl: "",
      isDark: de(),
      useUserState: this.$props.userState
    };
  },
  watch: {
    isDark: {
      deep: !1,
      handler(e) {
        this.createOptions(), this.optionsMockup = this.createOpMockup();
      }
    }
  },
  computed: {
    color() {
      return de().value ? "#414243" : "#e4e7ed";
    },
    dataChart() {
      let e = [];
      if (this.yDataset && this.yDataset.length > 0)
        for (const [t, a] of this.yDataset.entries()) {
          const l = a.custom ? a.custom : {}, o = this.rawData.map((i) => {
            if (a.type === "heatmap" || a.type === "treemap") {
              if (i[a.field] && i[this.xField])
                return { x: i[this.xField], y: i[a.field] };
            } else if (i[a.field])
              return i[a.field];
          });
          a.type === "radialBar" ? e = o : e.push({
            data: o,
            name: a.name ? a.name : "Unit" + t,
            type: a.type ? a.type : "bar",
            color: a.color && Object.keys(a.color).length > 0 ? a.color : void 0,
            hidden: !!a.hidden,
            zIndex: a.zIndex != null || a.zIndex != null ? a.zIndex : void 0,
            group: a.group ? a.group : void 0,
            ...l
          });
        }
      return e;
    }
  },
  created() {
    this.apiUrl = "";
  },
  mounted() {
    this.buildState || (this.loadEnable = !0), this.optionsMockup = this.createOpMockup(), this.initdata();
  },
  unmounted() {
  },
  setup(e, t) {
    return {
      chartRef: q()
    };
  },
  methods: {
    async initdata() {
      const e = {
        providerId: this.sqlId,
        providerType: me.SQL,
        params: this.params
      };
      if (this.rawData = [], this.loadEnable) {
        const t = await lt(e, !1, this.useUserState);
        t && t.response && t.data && t.data.data && (this.rawData = P(t.data.data), this.xField && (this.createOptions(), this.showChart = !0));
      }
    },
    createOptions() {
      const e = this.rawData.map((t) => {
        if (t[this.xField])
          return t[this.xField];
      });
      this.options = {
        chart: {
          type: this.type ? this.type : void 0,
          toolbar: {
            show: this.toolbarShow
          },
          zoom: {
            enabled: this.zoomEnable
          },
          background: "transparent"
        },
        title: {
          text: this.titleDisplay ? this.title : void 0
        },
        legend: {
          show: this.legendDisplay,
          ...this.legendCustom
        },
        grid: {
          show: this.gridDisplay,
          borderColor: de().value ? "#414243" : "#e4e7ed",
          ...this.gridCustom
        },
        dataLabels: {
          enabled: this.dataLabelsShow
        },
        labels: this.type === "radialBar" && e ? e : void 0,
        xaxis: {
          type: this.xType,
          categories: e || [],
          title: {
            text: this.scalesXLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesXCustom
        },
        yaxis: {
          show: this.scalesYDisplay,
          title: {
            text: this.scalesYLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesYCustom
        },
        tooltip: {
          enabled: this.tooltipShow,
          theme: "dark"
        },
        theme: {
          mode: de().value ? "dark" : "light"
        },
        ...this.customOptions
      };
    },
    createOpMockup() {
      return {
        chart: {
          toolbar: {
            show: this.toolbarShow
          },
          zoom: {
            enabled: this.zoomEnable
          },
          background: "transparent"
        },
        title: {
          text: this.titleDisplay ? this.title : void 0
        },
        legend: {
          show: this.legendDisplay,
          ...this.legendCustom
        },
        dataLabels: {
          enabled: this.dataLabelsShow
        },
        grid: {
          show: this.gridDisplay,
          borderColor: de().value ? "#414243" : "#e4e7ed",
          ...this.gridCustom
        },
        xaxis: {
          type: this.xType,
          categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          title: {
            text: this.scalesXLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesXCustom
        },
        yaxis: {
          show: this.scalesYDisplay,
          title: {
            text: this.scalesYLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesYCustom
        },
        tooltip: {
          enabled: this.tooltipShow,
          theme: "dark"
        },
        theme: {
          mode: de().value ? "dark" : "light"
        },
        ...this.customOptions
      };
    }
  }
});
function Cf(e, t, a, l, o, i) {
  const s = X("ApexChart");
  return n(), v("div", {
    ref: "chartRef",
    style: te(`width: ${e.width ? e.width + "px" : "100%"}; height: ${e.height ? e.height + "px" : "100%"}`)
  }, [
    e.mockup && e.buildState ? (n(), h(s, {
      key: 0,
      height: "100%",
      options: e.optionsMockup,
      series: e.dataMockup
    }, null, 8, ["options", "series"])) : (n(), v(L, { key: 1 }, [
      e.showChart ? (n(), h(s, {
        key: 0,
        height: "100%",
        options: e.options,
        series: e.dataChart
      }, null, 8, ["options", "series"])) : b("", !0)
    ], 64))
  ], 4);
}
const WS = /* @__PURE__ */ j(kf, [["render", Cf]]), Df = B({
  name: "SdExportData",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    dataProvider: {
      type: Object,
      required: !0
    },
    fileName: {
      type: String,
      default: "Export",
      required: !0
    },
    dynamicName: {
      type: String,
      default: ""
    },
    popupName: {
      type: String,
      default: "Export Data"
    },
    popupWidth: {
      type: String,
      default: "50%"
    },
    backdrop: {
      type: Boolean,
      default: !1
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      fName: "",
      fullName: "",
      filePath: "",
      showFile: !1,
      popupWidthdefault: this.popupWidth
    };
  },
  created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    return {};
  },
  mounted() {
    this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidthdefault = le(this.popupWidth);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    handleOpen() {
      const e = Pa.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 });
      this.fullName = `${this.fileName}`, this.fName = `${this.fileName}`, this.showFile = !1, this.userState.exportData(
        { sdProvider: this.dataProvider, fileName: this.fileName, dynamicName: this.dynamicName },
        (t) => {
          this.fName = `${t.fileName}`, this.fullName = `${t.fileName}`, this.filePath = `${t.filePath}`, this.showFile = !0, e.close();
        },
        () => {
          e.close();
        }
      ), this.popupWidthdefault = le(this.popupWidth);
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    async handleClose() {
      if (this.showFile) {
        this.showFile = !1;
        const e = `export/${this.userState.user?.username}`;
        let t = { filePath: this.filePath, fileName: this.fName, fileType: "json", fileGroup: e, fileId: "" };
        await be.delete(`${this.userState.host}/v1/files/remove-one`, {
          data: t,
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }).then((a) => {
        }).catch((a) => {
          console.log(a);
        });
      }
    }
  }
}), If = {
  role: "heading",
  class: "el-dialog__title"
}, $f = { class: "dialog-footer" };
function Tf(e, t, a, l, o, i) {
  const s = X("Document"), u = We, m = Ba, f = ie, c = Ce;
  return n(), h(c, {
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[1] || (t[1] = (_) => e.showPopupFlag = _),
    width: e.popupWidthdefault,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    onOpen: e.handleOpen,
    onClose: e.handleClose,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: _, titleId: $, titleClass: g }) => [
      C("span", If, M(e.popupName), 1)
    ]),
    footer: r(() => [
      C("div", $f, [
        d(f, {
          onClick: t[0] || (t[0] = (_) => e.showPopupFlag = !1)
        }, {
          default: r(() => [...t[3] || (t[3] = [
            D("Close", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    default: r(() => [
      re(e.$slots, "popup", {}, () => [
        t[2] || (t[2] = D(" Download click here => ", -1)),
        e.showFile ? (n(), h(m, {
          key: 0,
          type: "primary",
          href: e.filePath,
          target: "_blank"
        }, {
          default: r(() => [
            d(u, { class: "mr-1" }, {
              default: r(() => [
                d(s)
              ]),
              _: 1
            }),
            D(" " + M(e.fullName), 1)
          ]),
          _: 1
        }, 8, ["href"])) : b("", !0)
      ])
    ]),
    _: 3
  }, 8, ["title", "modelValue", "width", "before-close", "onOpen", "onClose", "close-on-click-modal"]);
}
const Pf = /* @__PURE__ */ j(Df, [["render", Tf]]), Mf = B({
  name: "SdGridSortHeader",
  props: {
    prop: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    }
  },
  emits: ["sort"],
  computed: {
    // find this column's index in sortState (compare with backticks stripped — supports both `col` and col)
    sortIndex() {
      return this.sortState.findIndex((e) => this.normalize(e.column) === this.prop);
    },
    direction() {
      const e = this.sortState[this.sortIndex];
      return e ? String(e.sort).toUpperCase() === "DESC" ? "DESC" : "ASC" : null;
    },
    // sort priority (1-based), shown when sorting by multiple columns
    orderNo() {
      return this.sortIndex + 1;
    },
    showOrder() {
      return this.sortState.length > 1;
    }
  },
  methods: {
    normalize(e) {
      return String(e).replace(/`/g, "");
    },
    // dir: 'ASC'/'DESC' = set direction directly (caret click); undefined = cycle (label click)
    onSort(e, t) {
      this.$emit("sort", { prop: this.prop, shiftKey: t.shiftKey, dir: e });
    }
  }
}), Vf = { class: "sd-sort-th__label" }, Af = { class: "caret-wrapper" }, Ef = {
  key: 0,
  class: "sd-sort-th__order"
}, Of = { key: 1 };
function Lf(e, t, a, l, o, i) {
  return e.sortable ? (n(), v("span", {
    key: 0,
    class: x(["sd-sort-th", { ascending: e.direction === "ASC", descending: e.direction === "DESC" }]),
    onClick: t[2] || (t[2] = U((s) => e.onSort(void 0, s), ["stop"])),
    title: "Click to cycle sort · Click a caret to set direction · Shift+click to sort by multiple columns"
  }, [
    C("span", Vf, M(e.label), 1),
    C("span", Af, [
      C("i", {
        class: "sort-caret ascending",
        onClick: t[0] || (t[0] = U((s) => e.onSort("ASC", s), ["stop"]))
      }),
      C("i", {
        class: "sort-caret descending",
        onClick: t[1] || (t[1] = U((s) => e.onSort("DESC", s), ["stop"]))
      })
    ]),
    e.direction && e.showOrder ? (n(), v("span", Ef, M(e.orderNo), 1)) : b("", !0)
  ], 2)) : (n(), v("span", Of, M(e.label), 1));
}
const xt = /* @__PURE__ */ j(Mf, [["render", Lf], ["__scopeId", "data-v-310dbc77"]]), Bf = B({
  name: "SdGridColumnBy",
  components: { SdGridSortHeader: xt },
  props: {
    columnProp: {
      type: String,
      default: "created_by"
    },
    columnLabel: {
      type: String,
      default: "Created By"
    },
    width: {
      type: String,
      default: "180"
    },
    // เปิด custom multi-sort (รับ sortState + emit sort) — ใช้ใน SdCrudGrid
    customSort: {
      type: Boolean,
      default: !1
    },
    sortable: {
      type: Boolean,
      default: !0
    },
    // field ที่ใช้ sort จริง — created_by เป็น object {name,...} จึง sort ด้วย `<columnProp>.name` เป็น default
    sortProp: {
      type: String,
      default: ""
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    },
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {
    sortColumn() {
      return this.sortProp || `${this.columnProp}.name`;
    }
  },
  methods: {
    getName(e) {
      const t = e[this.columnProp] && e[this.columnProp].name ? e[this.columnProp].name : "";
      return t != "" ? t.split(" (")[0] : null;
    },
    getFullName(e) {
      return e[this.columnProp] && e[this.columnProp].name ? e[this.columnProp].name : null;
    }
  }
});
function Nf(e, t, a, l, o, i) {
  const s = xt, u = ml, m = Qe;
  return e.customSort ? (n(), h(m, {
    key: 0,
    prop: e.columnProp,
    label: e.columnLabel,
    "min-width": e.width,
    align: "left"
  }, {
    header: r(() => [
      d(s, {
        prop: e.sortColumn,
        label: e.columnLabel,
        sortable: !e.sortDisabled && e.sortable,
        "sort-state": e.sortState,
        onSort: t[0] || (t[0] = (f) => e.$emit("sort", f))
      }, null, 8, ["prop", "label", "sortable", "sort-state"])
    ]),
    default: r((f) => [
      d(u, {
        content: e.getFullName(f.row)
      }, {
        default: r(() => [
          D(M(e.getName(f.row)), 1)
        ]),
        _: 2
      }, 1032, ["content"])
    ]),
    _: 1
  }, 8, ["prop", "label", "min-width"])) : (n(), h(m, {
    key: 1,
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    align: "left"
  }, {
    default: r((f) => [
      d(u, {
        content: e.getFullName(f.row)
      }, {
        default: r(() => [
          D(M(e.getName(f.row)), 1)
        ]),
        _: 2
      }, 1032, ["content"])
    ]),
    _: 1
  }, 8, ["prop", "label", "width"]));
}
const Ii = /* @__PURE__ */ j(Bf, [["render", Nf]]), jf = B({
  name: "SdGridColumnDate",
  components: { SdGridSortHeader: xt },
  props: {
    columnProp: {
      type: String,
      default: "created_at"
    },
    columnLabel: {
      type: String,
      default: "Created"
    },
    sortable: {
      type: Boolean,
      default: !0
    },
    width: {
      type: String,
      default: "110"
    },
    // เปิด custom multi-sort (รับ sortState + emit sort) — ใช้ใน SdCrudGrid; ถ้า false คง native sortable เดิม
    customSort: {
      type: Boolean,
      default: !1
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    },
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {},
  methods: {
    thDate(e) {
      return e[this.columnProp] ? Se(e[this.columnProp]).format("DD/MM/YYYY") : null;
    }
  }
});
function Uf(e, t, a, l, o, i) {
  const s = xt, u = Qe;
  return e.customSort ? (n(), h(u, {
    key: 0,
    prop: e.columnProp,
    label: e.columnLabel,
    "min-width": e.width,
    align: "center",
    sortable: !1
  }, {
    header: r(() => [
      d(s, {
        prop: e.columnProp,
        label: e.columnLabel,
        sortable: !e.sortDisabled && e.sortable,
        "sort-state": e.sortState,
        onSort: t[0] || (t[0] = (m) => e.$emit("sort", m))
      }, null, 8, ["prop", "label", "sortable", "sort-state"])
    ]),
    default: r((m) => [
      D(M(e.thDate(m.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "min-width"])) : (n(), h(u, {
    key: 1,
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    align: "center",
    sortable: e.sortable
  }, {
    default: r((m) => [
      D(M(e.thDate(m.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "width", "sortable"]));
}
const $i = /* @__PURE__ */ j(jf, [["render", Uf]]), Rf = B({
  name: "SdGridColumnDynamic",
  components: { SdGridColumnDate: $i, SdGridColumnBy: Ii, SdValueWidget: ba, SdGridSortHeader: xt },
  props: {
    formModel: {
      type: Object,
      required: !0
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    rawValue: {
      type: Boolean,
      default: !1
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    editColumn: {
      type: Array
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    userState: {
      type: Object,
      required: !0
    },
    afterSave: Function,
    // multi-sort state (= optionProvider.orderBy), passed down so headers can render the indicator
    sortState: {
      type: Array,
      default: () => []
    },
    // disable custom sort (e.g. group mode) — headers become non-clickable
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {
    filters() {
      return (e, t) => {
        if (t.filters) {
          let a = t.filtersItems ? t.filtersItems : void 0;
          if (this.formModel.form_db.data_list[t.fieldName] && !a) {
            a = [];
            for (const l in this.formModel.form_db.data_list[t.fieldName])
              if (Object.prototype.hasOwnProperty.call(this.formModel.form_db.data_list[t.fieldName], l)) {
                const o = this.formModel.form_db.data_list[t.fieldName][l];
                a.push({
                  value: o.value,
                  text: `${o.label}`
                });
              }
          } else if (e[t.fieldName].component == "switch-input" && !a)
            return [
              { value: !0, text: "True" },
              { value: !1, text: "False" }
            ];
          return a;
        } else if (this.getschemaValue(e, "filters", t.fieldName, !1)) {
          if (this.formModel.form_db.data_list[t.fieldName]) {
            let a = [];
            for (const l in this.formModel.form_db.data_list[t.fieldName])
              if (Object.prototype.hasOwnProperty.call(this.formModel.form_db.data_list[t.fieldName], l)) {
                const o = this.formModel.form_db.data_list[t.fieldName][l];
                a.push({
                  value: o.value,
                  text: `${o.label}`
                });
              }
            return a;
          } else if (e[t.fieldName].component == "switch-input")
            return [
              { value: !0, text: "True" },
              { value: !1, text: "False" }
            ];
        }
      };
    },
    htmlValue() {
      return (e, t, a) => {
        let l = Sl(t);
        if (!this.rawValue)
          for (const o in t)
            l[`{{${o}}}`] = Ee(t[o], o, this.formModel);
        if (a.expressions)
          try {
            const i = `return ${ue(a.expressions, l)}`, s = new Function("row", ...ke, i);
            l["{{expressions}}"] = s.call(this.formModel, t);
          } catch (o) {
            l["{{expressions}}"] = o;
          }
        else
          l["{{expressions}}"] = "";
        return Kt(ue(e, l));
      };
    },
    columnFields() {
      return this.displayFields ? this.displayFields : this.formDisplayConvent(this.formModel.form_options.display_fields);
    }
  },
  data() {
    return {
      currRow: {}
    };
  },
  async created() {
  },
  methods: {
    formDisplayConvent(e) {
      let t = [];
      return e.forEach((a) => {
        t.push({ fieldName: a });
      }), t;
    },
    afterSubmit(e, t) {
      this.afterSave && this.afterSave(e, t, this.currRow);
    },
    async editChange(e) {
      e.xversionx = this.formModel.form_version;
      const t = await vt(this.formModel.dataid, e[this.keyId], e, 1, this.userState), a = t.data;
      a ? (a[this.rowKey] = e[this.keyId], this.afterSubmit(a, !1)) : O.warning(t.message);
    },
    backupRow(e) {
      this.currRow = P(e);
    },
    getschemaValue(e, t, a, l) {
      if (e[a]) {
        const o = e[a];
        return o[t] ? o[t] : l;
      }
      return l;
    },
    getValue(e, t, a) {
      let l = pe(e, t);
      return this.rawValue ? l ?? null : Ee(l, t, a);
    },
    getValueType(e, t, a) {
      let l = pe(e, t);
      if (this.rawValue)
        return l ?? null;
      if (typeof l == "boolean")
        return l ? "True" : "False";
      if (typeof l == "object")
        if (l.join && Array.isArray(l)) {
          const o = l;
          let i = [];
          return o.forEach((s, u) => {
            a.format && a.valueFormat ? i.push(Se(s, a.valueFormat).format(a.format)) : i.push(s);
          }), i.length > 2 ? i.join(", ") : i.join(" - ");
        } else
          return l.label ? l.label : l;
      else if (typeof l == "number") {
        const o = Number(l);
        if (!isNaN(o)) {
          const i = Number(a.format);
          return isNaN(i) ? o.toLocaleString("en-US") : o.toLocaleString("en-US", { minimumFractionDigits: i, maximumFractionDigits: i });
        }
        return l;
      } else if (typeof l == "string" && a.format && a.valueFormat)
        return Se(l, a.valueFormat).format(a.format);
      return l;
    }
  }
}), zf = ["innerHTML"], Hf = ["innerHTML"];
function qf(e, t, a, l, o, i) {
  const s = xt, u = ba, m = Qe, f = jt, c = Ie, _ = Ct, $ = Oo, g = Ke, I = $i, F = Ii;
  return n(), v(L, null, [
    e.columnFields && Object.keys(e.columnFields).length > 0 ? (n(), v(L, { key: 0 }, [
      e.formModel && e.formModel.form_db && e.formModel.form_db.schema && Object.keys(e.formModel.form_db.schema).length > 0 ? (n(!0), v(L, { key: 0 }, G(e.columnFields, (p) => (n(), v(L, null, [
        e.formModel.form_db.schema[p.fieldName] && !p.htmlValue ? (n(), v(L, { key: 0 }, [
          e.formModel.form_db.schema[p.fieldName].subField && e.formModel.form_db.schema[p.fieldName].component == "object-group" && ["Object"].includes(e.getschemaValue(e.formModel.form_db.schema, "type", p.fieldName, "")) && e.formModel.form_db.schema[p.fieldName].widgetDisplay && e.formModel.form_db.schema[p.fieldName].widgetDisplay == "widget" && !e.rawValue ? (n(), h(m, {
            key: 0,
            "min-width": 80,
            label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            width: p.width || e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
            align: p.align || e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
            sortable: !1,
            filters: e.filters(e.formModel.form_db.schema, p),
            fixed: p.fixed || e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
          }, {
            default: r((w) => [
              e.formModel.form_db.schema[p.fieldName].subField ? (n(!0), v(L, { key: 0 }, G(e.formModel.form_db.schema[p.fieldName].subField, (S) => (n(), h(m, {
                prop: `${p.fieldName}.${S.fieldName}`,
                "column-key": `${p.fieldName}.${S.fieldName}`,
                "min-width": 80,
                label: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "label", S.fieldName, ""),
                width: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "width", S.fieldName, ""),
                align: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "align", S.fieldName, "left"),
                sortable: !1,
                fixed: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "fixed", S.fieldName, !1)
              }, {
                header: r(() => [
                  d(s, {
                    prop: `${p.fieldName}.${S.fieldName}`,
                    label: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "label", S.fieldName, ""),
                    sortable: !e.sortDisabled && e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "sortable", S.fieldName, !1),
                    "sort-state": e.sortState,
                    onSort: t[0] || (t[0] = (N) => e.$emit("sort", N))
                  }, null, 8, ["prop", "label", "sortable", "sort-state"])
                ]),
                default: r((N) => [
                  d(u, {
                    "sdform-model": e.formModel,
                    "sub-schema": e.formModel.form_db.schema[p.fieldName].subField,
                    "field-name": S.fieldName,
                    "parent-name": p.fieldName,
                    "subform-width": e.subformWidth,
                    "raw-data": N.row,
                    "raw-value": e.rawValue,
                    "user-state": e.userState
                  }, null, 8, ["sdform-model", "sub-schema", "field-name", "parent-name", "subform-width", "raw-data", "raw-value", "user-state"])
                ]),
                _: 2
              }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"]))), 256)) : b("", !0)
            ]),
            _: 2
          }, 1032, ["label", "width", "align", "filters", "fixed"])) : (n(), h(m, {
            key: 1,
            prop: p.fieldName,
            "column-key": p.fieldName,
            "min-width": 80,
            label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            width: p.width || e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
            align: p.align || e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
            sortable: !1,
            filters: e.filters(e.formModel.form_db.schema, p),
            fixed: p.fixed || e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
          }, {
            header: r(() => [
              d(s, {
                prop: p.fieldName,
                label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
                sortable: !e.sortDisabled && (p.sortable || e.getschemaValue(e.formModel.form_db.schema, "sortable", p.fieldName, !1)),
                "sort-state": e.sortState,
                onSort: t[1] || (t[1] = (w) => e.$emit("sort", w))
              }, null, 8, ["prop", "label", "sortable", "sort-state"])
            ]),
            default: r((w) => [
              w.row[e.keyId] && e.editColumn && e.editColumn.includes(p.fieldName) && ["number-input", "text-input", "switch-input", "select-input", "radio-input"].includes(e.formModel.form_db.schema[p.fieldName].component) ? (n(), v(L, { key: 0 }, [
                e.formModel.form_db.schema[p.fieldName].component == "number-input" ? (n(), h(f, ae({
                  key: 0,
                  modelValue: w.row[p.fieldName],
                  "onUpdate:modelValue": (S) => w.row[p.fieldName] = S,
                  style: { width: "100%" }
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(w.row),
                  onFocus: (S) => e.backupRow(w.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : ["text-input"].includes(e.formModel.form_db.schema[p.fieldName].component) ? (n(), h(c, ae({
                  key: 1,
                  modelValue: w.row[p.fieldName],
                  "onUpdate:modelValue": (S) => w.row[p.fieldName] = S
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(w.row),
                  onFocus: (S) => e.backupRow(w.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : e.formModel.form_db.schema[p.fieldName].component == "switch-input" ? (n(), h(_, ae({
                  key: 2,
                  modelValue: w.row[p.fieldName],
                  "onUpdate:modelValue": (S) => w.row[p.fieldName] = S,
                  "active-text": "True"
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(w.row),
                  onFocus: (S) => e.backupRow(w.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : ["select-input", "radio-input"].includes(e.formModel.form_db.schema[p.fieldName].component) && e.formModel.form_db.data_list[p.fieldName] && !e.getschemaValue(e.formModel.form_db.schema, "multiple", p.fieldName, !1) ? (n(), h($, ae({
                  key: 3,
                  modelValue: w.row[p.fieldName],
                  "onUpdate:modelValue": (S) => w.row[p.fieldName] = S
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(w.row),
                  onFocus: (S) => e.backupRow(w.row),
                  options: e.formModel.form_db.data_list[p.fieldName]
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus", "options"])) : b("", !0)
              ], 64)) : (n(), h(u, {
                key: 1,
                "sdform-model": e.formModel,
                "field-name": p.fieldName,
                "field-setting": p,
                "subform-width": e.subformWidth,
                "raw-data": w.row,
                "raw-value": e.rawValue,
                "user-state": e.userState
              }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "raw-value", "user-state"]))
            ]),
            _: 2
          }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))
        ], 64)) : (n(), h(m, {
          key: 1,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          fixed: p.fixed || !1
        }, {
          default: r((w) => [
            d(g, {
              type: p.textType || void 0,
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                p.htmlValue ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(p.htmlValue, w.row, p)
                }, null, 8, zf)) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"])
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"]))
      ], 64))), 256)) : (n(!0), v(L, { key: 1 }, G(e.columnFields, (p) => (n(), v(L, null, [
        p.htmlValue ? (n(), h(m, {
          key: 1,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          fixed: p.fixed || !1
        }, {
          default: r((w) => [
            d(g, {
              type: p.textType || void 0,
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                p.htmlValue ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(p.htmlValue, w.row, p)
                }, null, 8, Hf)) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"])
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"])) : (n(), h(m, {
          key: 0,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          sortable: !1,
          filters: p.filters ? p.filtersItems : void 0,
          fixed: p.fixed || !1
        }, {
          header: r(() => [
            d(s, {
              prop: p.fieldName,
              label: p.label || "",
              sortable: !e.sortDisabled && (p.sortable || !1),
              "sort-state": e.sortState,
              onSort: t[2] || (t[2] = (w) => e.$emit("sort", w))
            }, null, 8, ["prop", "label", "sortable", "sort-state"])
          ]),
          default: r((w) => [
            e.rawValue ? (n(), v(L, { key: 1 }, [
              D(M(e.getValueType(w.row, p.fieldName, p)), 1)
            ], 64)) : (n(), h(g, {
              key: 0,
              type: p.textType ? p.textType : "",
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                D(M(e.getValueType(w.row, p.fieldName, p)), 1)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"]))
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))
      ], 64))), 256))
    ], 64)) : (n(), v(L, { key: 1 }, [
      e.formModel && e.formModel.form_db && e.formModel.form_db.schema ? (n(!0), v(L, { key: 0 }, G(e.formModel.form_db.schema, (p) => (n(), h(m, {
        prop: p.fieldName,
        "column-key": p.fieldName,
        "min-width": 80,
        label: e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
        width: e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
        align: e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
        sortable: !1,
        filters: e.filters(e.formModel.form_db.schema, p),
        fixed: e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
      }, {
        header: r(() => [
          d(s, {
            prop: p.fieldName,
            label: e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            sortable: !e.sortDisabled && e.getschemaValue(e.formModel.form_db.schema, "sortable", p.fieldName, !1),
            "sort-state": e.sortState,
            onSort: t[3] || (t[3] = (w) => e.$emit("sort", w))
          }, null, 8, ["prop", "label", "sortable", "sort-state"])
        ]),
        default: r((w) => [
          d(u, {
            "sdform-model": e.formModel,
            "field-name": p.fieldName,
            "field-setting": p,
            "subform-width": e.subformWidth,
            "raw-data": w.row,
            "raw-value": e.rawValue,
            "user-state": e.userState
          }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "raw-value", "user-state"])
        ]),
        _: 2
      }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))), 256)) : b("", !0)
    ], 64)),
    re(e.$slots, "default"),
    e.systemColumn ? (n(), v(L, { key: 2 }, [
      e.formModel && e.formModel.form_options && e.formModel.form_options.query_tool != "disable" ? (n(), h(m, {
        key: 0,
        prop: "xrstatx",
        label: "Rstat",
        width: 100,
        align: "center"
      }, {
        default: r((p) => [
          D(M(e.getValue(p.row, "xrstatx", e.formModel)), 1)
        ]),
        _: 1
      })) : b("", !0),
      e.formModel && e.formModel.form_db ? (n(), h(I, {
        key: 1,
        "custom-sort": "",
        "sort-state": e.sortState,
        "sort-disabled": e.sortDisabled,
        onSort: t[4] || (t[4] = (p) => e.$emit("sort", p))
      }, null, 8, ["sort-state", "sort-disabled"])) : b("", !0),
      e.formModel && e.formModel.form_db ? (n(), h(F, { key: 2 })) : b("", !0)
    ], 64)) : b("", !0)
  ], 64);
}
const Wf = /* @__PURE__ */ j(Rf, [["render", qf]]), Aa = "sdgrid:", Ti = 1;
function Pi(e, t) {
  try {
    localStorage.setItem(Aa + e, JSON.stringify({ v: Ti, ...t }));
  } catch {
  }
}
function Mi(e) {
  try {
    const t = localStorage.getItem(Aa + e);
    if (!t) return null;
    const a = JSON.parse(t);
    return !a || a.v !== Ti ? (localStorage.removeItem(Aa + e), null) : a;
  } catch {
    return null;
  }
}
function Vi(e) {
  try {
    localStorage.removeItem(Aa + e);
  } catch {
  }
}
const Kf = B({
  name: "SdCrudGrid",
  components: {},
  emits: ["aftersave"],
  props: {
    formId: {
      type: String,
      required: !0
    },
    // จำ page/search/filter/sort ลง localStorage — false = ปิด (พฤติกรรมเดิม),
    // true = ใช้ key อัตโนมัติ `crud:<formId>` (dynamic ต่อฟอร์ม), string = กำหนด key เอง
    stateKey: {
      type: [String, Boolean],
      default: !1
    },
    // scope เสริมของ auto key (เช่น `<hostFormId>.<varname>` จาก datagrid ในฟอร์ม)
    // — ฟอร์มเดียวกันถูกวางหลาย widget ก็แยก state กัน
    stateScope: {
      type: String,
      default: ""
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    initData: {
      type: Object,
      default: {}
    },
    dataProvider: {
      type: Object,
      default: null
    },
    expandProvider: {
      type: Object
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    allowCloneFunc: {
      type: Function
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    actionCrudEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    exportBtnEnable: {
      type: Boolean,
      default: !1
    },
    exportRowBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    rawdataBtnEnable: {
      type: Boolean,
      default: !1
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    indexColumn: {
      type: Boolean,
      default: !0
    },
    actionWidth: {
      type: Number,
      default: null
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    groupKey: {
      type: String
    },
    aggrColumn: {
      type: Array
    },
    sumColumn: {
      type: Array
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    sumAllPage: {
      type: Boolean,
      default: !1
    },
    editColumn: {
      type: Array
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    limitRow: {
      type: Number,
      default: 30
    },
    // เปิด infinite scroll: ปิด pagination + ไม่ count total (หลบ count ช้าเมื่อข้อมูลเป็นล้าน row) แล้วโหลดเพิ่มตอน scroll
    infiniteScroll: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      rawData: [],
      tableKey: 0,
      total: 0,
      totalPage: 0,
      offset: 0,
      loadingMore: !1,
      // กำลังโหลด batch ถัดไป (infinite scroll) — แยกจาก preLoading เพื่อไม่ให้ overlay บังทั้งตาราง
      hasMore: !0,
      // ยังมีข้อมูลให้โหลดต่อไหม (infinite scroll)
      scrollEl: null,
      // scroll wrapper ภายใน el-table ที่ผูก scroll listener ไว้
      defaultParams: {},
      defaultSort: [],
      userSorted: !1,
      // whether the user has started sorting — if not, defaultSort is just a fallback (not counted in the priority order)
      searchText: "",
      sumEnable: !1,
      sumData: {},
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      showExport: !1,
      showRawValue: !1,
      dpFormData: { providerId: this.formId, providerType: me.FORM },
      dpExpandData: null,
      isExpand: !1,
      expandedRows: [],
      wsConn: void 0,
      groupId: "",
      showExportRow: !1,
      exportName: "",
      widgetId: "SdCrudGrid-" + Wt(),
      dpExportRow: {
        providerId: "",
        providerType: me.FORM,
        options: { where: "_id = CONVERT(:id, 'objectId')" },
        params: { id: "" }
      },
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    // defaultPopUpForm() {
    // 	return {
    // 		formId: this.formId,
    // 		parentId: this.defaultParentId,
    // 		cancelCallback: this.handleCancel,
    // 	};
    // },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    },
    // key จริงที่ใช้เก็บ state — '' = ปิดการจำ
    // true = auto key แบบ dynamic: `crud:<formId>[:<stateScope>][:<parentId>]`
    // แยกทั้งต่อ widget (ฟอร์มเดียวถูกเรียกซ้ำหลายจุด) และต่อ record / string = กำหนดเอง
    persistKey() {
      if (this.stateKey === !0) {
        let e = `crud:${this.formId}`;
        return this.stateScope && (e += `:${this.stateScope}`), this.defaultParentId && (e += `:${this.defaultParentId}`), e;
      }
      return typeof this.stateKey == "string" && this.stateKey !== "" ? this.stateKey : "";
    },
    actionWidthAuto() {
      let e = this.readonly ? 80 : this.groupKey ? 145 : 120;
      return this.cloneEnableLabelField && (e += 30), this.exportRowBtnEnable && (e += 30), this.actionWidth && (e += this.actionWidth), e;
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    // infinite scroll ใช้ร่วมกับ tree/lazy expand (groupKey) ไม่ได้ — fallback กลับเป็น pagination
    isInfinite() {
      return this.infiniteScroll && !this.groupKey;
    },
    // infinite ต้องมี height คงที่เพื่อให้เกิด scroll container ในตาราง — ถ้าผู้ใช้ไม่ตั้ง height/max-height เลย บังคับ default
    effectiveHeight() {
      const e = (t) => t === "auto" || t == null;
      return this.isInfinite && e(this.height) && e(this.maxHeight) ? 500 : this.height;
    },
    // label มุมขวา: infinite ไม่รู้ total (ไม่ count) จึงแสดงแค่จำนวนที่โหลดมาแล้ว
    showingLabel() {
      return this.isInfinite ? `Loaded ${this.rowEndLabel} items` : `Showing ${this.rowStartLabel}-${this.rowEndLabel} of ${this.totalLabel} items.`;
    },
    ddId() {
      return this.parentId;
    },
    rowStartLabel() {
      return (this.totalPage > 0 ? this.offset + 1 : this.offset).toLocaleString();
    },
    rowEndLabel() {
      return (this.offset + this.totalPage).toLocaleString();
    },
    getSummary() {
      return (e) => {
        const { columns: t, data: a } = e, l = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: this.sumDecimal,
          maximumFractionDigits: this.sumDecimal
        }), o = [];
        return t.forEach((i, s) => {
          if (s == 0) {
            o[s] = this.sumLabel;
            return;
          }
          const u = i.property;
          if (this.sumData[u])
            if (this.sumAllPage || this.groupKey && this.wsConn) {
              let m = Number(this.sumData[u]);
              o[s] = l.format(m);
            } else {
              const f = a.map((c) => Number(c[u])).reduce((c, _) => {
                const $ = Number(_);
                return Number.isNaN($) ? c : c + _;
              }, 0);
              o[s] = l.format(f);
            }
          else
            o[s] = null;
        }), o;
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
  },
  setup(e, t) {
    const a = q(), l = q(), o = () => {
      a.value.clearFilter();
    }, i = () => {
      a.value.clearSort();
    };
    return {
      subFormOpen: R("subFormOpen", void 0),
      tableRef: a,
      clearFilter: o,
      clearSort: i,
      formRef: l
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.teardownInfiniteScroll();
  },
  async mounted() {
    if (this.apiUrl = "", !this.buildState)
      if (this.providerType === "SQL")
        this.initSQL();
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? this.initForm(e.data) : O.warning(e.message);
      } else
        O.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: O,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn,
      tableRef: this.tableRef
    }, this.setupInfiniteScroll();
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    genIndex(e) {
      let t = this.rowStartLabel.replace(",", "");
      return t ? (e + Number(t)).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "";
    },
    handleExportOpen() {
      this.showExport = !0;
    },
    handleExportClose(e) {
      this.showExport = !1;
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.searchFields && (this.dpFormData.options.search = this.searchFields);
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.defaultSort = P(this.optionProvider.orderBy), this.dpFormData.params = P(this.defaultParams), this.hydrateState(), this.getDataList(this.dpFormData);
    },
    // ---- state persistence: จำ/คืน page/search/filter/sort ผ่าน localStorage (เฉพาะเมื่อมี stateKey/persistKey) ----
    hydrateState() {
      if (!this.persistKey) return;
      const e = Mi(this.persistKey);
      e && (!this.isInfinite && e.page && e.page > 1 && (this.optionProvider.page = e.page), e.searchText && (this.searchText = e.searchText, this.dpFormData.params.q = `%${e.searchText}%`), e.fileter && Object.keys(e.fileter).length > 0 && (this.optionProvider.fileter = e.fileter), e.userSorted && e.orderBy && e.orderBy.length > 0 && (this.optionProvider.orderBy = e.orderBy, this.userSorted = !0));
    },
    persistState() {
      this.persistKey && Pi(this.persistKey, {
        page: this.isInfinite ? 1 : this.optionProvider.page || 1,
        searchText: this.searchText,
        fileter: this.optionProvider.fileter || null,
        orderBy: this.userSorted ? this.optionProvider.orderBy : null,
        userSorted: this.userSorted
      });
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ...ke, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = me.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), this.searchFields ? this.dpFormData.options.search = this.searchFields : this.dpFormData.options.search = this.sdformModel.form_options.search_fields ? this.sdformModel.form_options.search_fields : [];
      const t = P(this.dpFormData.params), a = P(this.params);
      if (this.defaultParams = { ...a, ...t }, this.defaultSort = P(this.optionProvider.orderBy), this.dpFormData.params = P(this.defaultParams), this.sumColumn && Object.values(this.sumColumn).length > 0 && (this.dpFormData.options.sum = this.sumColumn), this.groupKey)
        if (this.expandProvider)
          this.dpExpandData = P(this.expandProvider);
        else {
          if (this.dpExpandData = { providerId: this.formId, providerType: me.FORM }, this.dpFormData.options.select && this.dpFormData.options.select.length > 0) {
            const l = [`\`${this.groupKey}\``, `\`${this.groupKey}\` AS \`${this.rowKey}\``, `COUNT(*) AS \`${this.expandCountChildrenName}\``];
            this.dpFormData.options.select.push(...l);
          } else
            this.dpFormData.options.select = [`\`${this.groupKey}\``, `\`${this.groupKey}\` AS \`${this.rowKey}\``, `COUNT(*) AS \`${this.expandCountChildrenName}\``];
          if (this.aggrColumn && Object.values(this.aggrColumn).length > 0 && this.dpFormData.options.select.push(...this.aggrColumn), this.sumColumn && Object.values(this.sumColumn).length > 0)
            for (const l of this.sumColumn)
              this.dpFormData.options.select.push(`SUM(\`${l}\`) AS \`${l}\``);
          this.dpExpandData.options || (this.dpExpandData.options = {}), this.dpExpandData.options.select = ["*", `\`${this.keyId}\` AS \`${this.rowKey}\``], this.dpExpandData.options.where = `\`${this.groupKey}\` = :xgidx`, this.dpFormData.options.groupBy = [`\`${this.groupKey}\``], this.dpFormData.options.orderBy = [{ column: `\`${this.groupKey}\``, sort: ye.ASC }];
        }
      this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ye.DESC }], this.defaultSort = [{ column: "created_at", sort: ye.DESC }]), this.dpExportRow.providerId = this.formId, this.hydrateState(), this.getDataList(this.dpFormData), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          let o = -1;
          const i = P(l.data), s = l.params ? P(l.params) : null;
          if (o = this.keyIdIndex(i._id), this.groupKey && this.dpExpandData && i[this.groupKey]) {
            if (l.method == "insert") {
              this.addRowExpand(i[this.groupKey], i);
              const u = this.rowKeyIndex(i[this.groupKey]);
              this.rawData[u] && this.rawData[u][this.expandCountChildrenName] && (this.rawData[u][this.expandCountChildrenName] = this.rawData[u][this.expandCountChildrenName] + 1);
            } else if (l.method == "update") {
              let u = i[this.groupKey];
              s && s.gid && (u = s.gid), this.updateRowExpand(i[this.groupKey], i, u);
            } else if (l.method == "delete") {
              this.removeRowExpand(i[this.groupKey], i);
              const u = this.rowKeyIndex(i[this.groupKey]);
              this.rawData[u] && this.rawData[u][this.expandCountChildrenName] && (this.rawData[u][this.expandCountChildrenName] = this.rawData[u][this.expandCountChildrenName] - 1);
            }
            this.refreshData();
          } else
            l.method == "insert" ? Ja(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1), this.sumAllPage && this.refreshData();
        }
      }));
    },
    allowUpdate(e, t, a) {
      return Xe(e, t, a);
    },
    allowDelete(e, t, a) {
      return _l(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1, this.groupKey && this.dpExpandData && a[this.groupKey] && (this.groupId = a[this.groupKey])), this.selectIndex = this.keyIdIndex(e[this.keyId]);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          if (this.groupKey && this.dpExpandData && o[this.groupKey]) {
            this.addRowExpand(o[this.groupKey], o);
            const i = this.rowKeyIndex(o[this.groupKey]);
            this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] + 1), this.wsConn && this.refreshData();
          } else
            this.rawData = [o].concat(this.rawData), this.isInsert = !1, this.selectIndex = -1, this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.sumAllPage && this.refreshData();
          this.wsConn?.wsSend({ data: o, method: "insert", keyid: this.keyId, params: { widget: this.widgetId } });
        } else
          this.groupKey && this.dpExpandData && e[this.groupKey] ? (this.groupId || (this.groupId = e[this.groupKey]), this.updateRowExpand(e[this.groupKey], e, this.groupId), this.wsConn && this.refreshData()) : this.selectIndex != -1 && (this.rawData[this.selectIndex] = P(e), this.sumAllPage && this.refreshData()), this.wsConn?.wsSend({ data: e, method: "update", keyid: this.keyId, params: { gid: this.groupId, widget: this.widgetId } });
      this.$emit("aftersave", l, e, this.rawData, this.selectIndex);
    },
    // A3: batch resolve label สดสำหรับ column select-form-input ที่เปิด refreshLabel (1 request/column)
    // cache เติมแล้ว tick++ → cell (SdValueWidget) re-render เป็น label สด override snapshot
    resolveRefreshLabels() {
      const e = this.sdformModel?.form_db?.schema;
      if (!e || !Array.isArray(this.rawData) || this.rawData.length === 0) return;
      const t = yt();
      for (const a in e) {
        const l = e[a];
        if (!l || l.component !== "select-form-input") continue;
        const o = l.inputOptions;
        if (!o || !o.refreshLabel || !o.formId) continue;
        const i = /* @__PURE__ */ new Set(), s = [];
        for (const u of this.rawData) {
          const m = u[a], f = m && typeof m == "object" ? m.value : m;
          f && typeof f == "string" && !i.has(f) && (i.add(f), s.push(f));
        }
        s.length > 0 && t.ensureLabels(
          { formId: o.formId, valueField: o.valueField || "_id", labelField: o.labelField || [], labelTemplate: o.labelTemplate || "", valueObjectId: !!o.valueObjectId },
          s,
          this.useUserState
        );
      }
    },
    // append=true = โหลด batch ถัดไปต่อท้าย (infinite scroll); false = โหลดใหม่แทนที่ทั้งหมด
    async getDataList(e, t, a = !1) {
      this.isInfinite && !a && (this.optionProvider.page = 1, this.hasMore = !0), a ? this.loadingMore = !0 : this.preLoading = !0;
      const l = this.isInfinite ? !1 : this.total === 0, o = await lt(e, l, this.useUserState);
      if (o.response) {
        if (o.data && o.data.data) {
          const i = P(o.data.data);
          a ? this.rawData.push(...i) : (this.rawData = i, this.offset = o.data.offset), this.resolveRefreshLabels(), this.isInfinite ? (this.totalPage = this.rawData.length, this.hasMore = i.length >= this.limit) : (this.totalPage = i.length, l && (this.total = o.data.total)), t && t(this.rawData), o.data.dataSum && o.data.dataSum[0] && (this.sumEnable = !0, this.sumData = o.data.dataSum[0]);
        }
      } else
        O.warning(o.message);
      a ? this.loadingMore = !1 : this.preLoading = !1, this.isInfinite && this.hasMore && this.$nextTick(() => {
        const i = this.scrollEl;
        i && i.scrollHeight <= i.clientHeight && this.loadMore();
      });
    },
    // โหลด batch ถัดไป — กันยิงซ้ำระหว่างกำลังโหลด/ไม่มีข้อมูลแล้ว
    loadMore() {
      !this.isInfinite || this.loadingMore || this.preLoading || !this.hasMore || (this.optionProvider.page = (this.optionProvider.page || 1) + 1, this.getDataList(this.dpFormData, void 0, !0));
    },
    // ผูก scroll listener กับ scroll wrapper ภายใน el-table (el-table ไม่มี scroll event ในตัว)
    setupInfiniteScroll() {
      this.isInfinite && this.$nextTick(() => {
        const t = this.tableRef?.$el?.querySelector(".el-table__body-wrapper .el-scrollbar__wrap");
        !t || t === this.scrollEl || (this.teardownInfiniteScroll(), this.scrollEl = t, t.addEventListener("scroll", this.onTableScroll, { passive: !0 }), this.hasMore && t.scrollHeight <= t.clientHeight && this.loadMore());
      });
    },
    onTableScroll() {
      const e = this.scrollEl;
      if (!e)
        return;
      e.scrollHeight - e.scrollTop - e.clientHeight <= 80 && this.loadMore();
    },
    teardownInfiniteScroll() {
      this.scrollEl && (this.scrollEl.removeEventListener("scroll", this.onTableScroll), this.scrollEl = null);
    },
    loadExpand(e, t, a) {
      if (this.dpExpandData) {
        this.dpExpandData.params || (this.dpExpandData.params ? this.dpExpandData.params = { ...this.dpExpandData.params, ...e } : this.dpExpandData.params = P(e));
        const l = this.groupKey;
        l && e[l] != null && e[l] != null && (this.dpExpandData.params.xgidx = e[l], be.post(
          `${this.userState.host}/widget/crud/getdata-all`,
          {
            sdProvider: this.dpExpandData,
            totalEnable: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then(async (o) => {
          if (o && o.data && o.data.data) {
            const i = P(o.data.data);
            this.total = this.total + i.length, this.totalPage = this.totalPage + i.length, a(i);
          } else
            a([]);
        }).catch((o) => {
          o.response && o.response.data && o.response.data.message ? O.warning(o.response.data.message) : O.warning(o.message);
        }));
      }
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    getIndex(e, t) {
      if (this.isExpand || this.expandedRows.length > 0) {
        const a = this.keyId;
        return this.rawData.findIndex((o) => o[a] === e[a]);
      }
      return t;
    },
    handleExpand(e, t) {
      this.isExpand = t;
      try {
        if (t)
          this.expandedRows.push(e[this.rowKey]);
        else {
          const a = this.expandedRows.indexOf(e[this.rowKey]);
          this.expandedRows.splice(a, 1);
          let l = this.$refs.tableRef.store.states.treeData.value, o = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
          for (const i in l)
            if (Object.prototype.hasOwnProperty.call(l, i) && e[this.rowKey] == i) {
              o[i].length && (this.total = this.total - o[i].length, this.totalPage = this.totalPage - o[i].length), o[i] = [];
              const s = l[i];
              s.loaded = !1, s.children = [], s.expanded = !1;
              break;
            }
        }
      } catch (a) {
        console.log(a);
      }
    },
    async removeRowExpand(e, t) {
      try {
        let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
        if (a) {
          const l = a.findIndex((i) => i[this.rowKey] === t[this.rowKey]);
          a.splice(l, 1);
          const o = this.rowKeyIndex(e);
          if (a.length == 0) {
            this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1;
            const i = this.expandedRows.indexOf(t[this.rowKey]);
            this.expandedRows.splice(i, 1);
          }
          if (this.expandedRows.includes(e))
            this.total = this.total - 1, this.totalPage = this.totalPage - 1, await this.sumExpandUpdate(a, e, t);
          else
            for (const i in this.sumData)
              this.rawData[o] && this.rawData[o][i] && (this.rawData[o][i] = this.rawData[o][i] - t[i]);
        }
      } catch (a) {
        console.log(a);
      }
    },
    async updateRowExpand(e, t, a) {
      try {
        if (a !== e) {
          await this.removeRowExpand(a, t);
          const l = this.rowKeyIndex(a);
          this.rawData[l] && this.rawData[l][this.expandCountChildrenName] && (this.rawData[l][this.expandCountChildrenName] = this.rawData[l][this.expandCountChildrenName] - 1);
          let o = !1;
          const i = this.rowKeyIndex(e);
          this.rawData[i] || (o = !0), await this.addRowExpand(e, t), o || this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] + 1);
        } else {
          let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
          if (l) {
            const o = l.findIndex((i) => i[this.rowKey] === t[this.rowKey]);
            l[o] = P(t), await this.sumExpandUpdate(l, e, t);
          }
        }
      } catch (l) {
        console.log(l);
      }
    },
    async addRowExpand(e, t) {
      const a = this.rowKeyIndex(e);
      let l = !1;
      this.rawData[a] || (await this.refreshData(), l = !0), this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] = []);
      let o = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (o)
        if (o.push(t), l)
          this.expandedRows.includes(e) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1);
        else if (this.expandedRows.includes(e))
          this.total = this.total + 1, this.totalPage = this.totalPage + 1, await this.sumExpandUpdate(o, e, t);
        else
          for (const i in this.sumData)
            this.rawData[a] && this.rawData[a][i] && (this.rawData[a][i] = this.rawData[a][i] + t[i]);
    },
    async sumExpandUpdate(e, t, a) {
      if (this.sumEnable)
        if (this.sumAllPage)
          this.refreshData();
        else {
          let l = {}, o = !0;
          const i = this.rowKeyIndex(t);
          e.forEach((s) => {
            for (const u in this.sumData)
              l[u] || (l[u] = 0), o && (this.rawData[i][u] = 0), l[u] += s[u], this.rawData[i][u] += s[u];
            o = !1;
          });
        }
    },
    getChildren(e) {
      try {
        const t = this.rowKey;
        return this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e[t]];
      } catch (t) {
        return console.log(t), null;
      }
    },
    handleCurrentChange(e) {
      this.dpExpandData && this.resetExpand(), this.persistState(), this.getDataList(this.dpFormData);
    },
    handleRefresh() {
      this.persistKey && Vi(this.persistKey), this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.optionProvider.orderBy = P(this.defaultSort), this.userSorted = !1, this.searchText = "", this.total = 0, this.dpFormData.params.q && delete this.dpFormData.params.q, this.clearSort(), this.clearFilter(), this.dpExpandData && this.resetExpand(), this.getDataList(this.dpFormData);
    },
    reloadData() {
      this.dpExpandData && this.resetExpand();
    },
    async refreshData() {
      if (await this.getDataList(this.dpFormData), this.groupKey) {
        let e = 0;
        for (const t of this.expandedRows) {
          this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t] = []);
          let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t];
          a && (e = e + a.length);
        }
        this.total = this.total + e, this.totalPage = this.totalPage + e;
      }
    },
    resetExpand() {
      try {
        let e = this.$refs.tableRef.store.states.treeData.value, t = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
        this.expandedRows = [];
        for (const a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            t[a] = [];
            const l = e[a];
            l.loaded = !1, l.children = [], l.expanded = !1;
          }
      } catch (e) {
        console.log(e);
      }
    },
    // multi-column sort. dir set (caret click) = apply that direction; dir undefined (label click) = cycle ASC→DESC→off.
    // Shift+click accumulates multiple columns; plain click replaces with a single column.
    handleSort(e) {
      const { prop: t, shiftKey: a, dir: l } = e, o = `\`${t}\``, i = ($) => String($).replace(/`/g, "");
      let s = this.userSorted ? P(this.optionProvider.orderBy || []) : [];
      const u = s.findIndex(($) => i($.column) === t), m = u >= 0 ? s[u] : null, f = m ? String(m.sort).toUpperCase() : null, c = ($) => {
        a ? m ? m.sort = $ : s.push({ column: o, sort: $ }) : s = [{ column: o, sort: $ }];
      }, _ = () => {
        a ? u >= 0 && s.splice(u, 1) : s = [];
      };
      l ? f === l ? _() : c(l === "DESC" ? ye.DESC : ye.ASC) : f === null ? c(ye.ASC) : f === "ASC" ? c(ye.DESC) : _(), s.length === 0 ? (this.userSorted = !1, this.optionProvider.orderBy = P(this.defaultSort)) : (this.userSorted = !0, this.optionProvider.orderBy = s), this.optionProvider.page = 1, this.dpExpandData && this.resetExpand(), this.persistState(), this.getDataList(this.dpFormData);
    },
    handleSearch() {
      this.searchText != "" ? this.dpFormData.params.q = `%${this.searchText}%` : delete this.dpFormData.params.q, this.dpExpandData && this.resetExpand(), this.total = 0, this.optionProvider.page = 1, this.persistState(), this.getDataList(this.dpFormData);
    },
    handleFilter(e) {
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let a = e[t];
          wl(a) ? delete this.optionProvider.fileter[t] : (this.optionProvider.fileter || (this.optionProvider.fileter = {}), this.optionProvider.fileter[t] = a);
        }
      this.dpExpandData && this.resetExpand(), this.total = 0, this.optionProvider.page = 1, this.persistState(), this.getDataList(this.dpFormData);
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        afterSaveCallback: this.afterSave
      });
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.selectIndex = -1, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.groupId = "", this.showPopupFlag = !0, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null, 0);
    },
    handleClone(e, t) {
      this.isInsert = !0, this.selectIndex = -1, this.showPopupFlag = !1, this.backdrop = !1, this.formData = P(e), this.formReadOnly = !1, this.groupId = "", delete this.formData[this.keyId], this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone";
      let a = !0;
      this.allowCloneFunc && (a = this.allowCloneFunc(e, t)), a && ve.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const l = await Ga(this.sdformModel.dataid, this.useUserState);
          if (l) {
            this.formData = { ...l, ...this.formData };
            let o = {};
            this.beforeSave && (o = this.beforeSave(this.formData), this.formData = { ...this.formData, ...o }), this.formData.xclonex = e[this.keyId], this.formData.dataid = this.formData[this.keyId], this.formData.xrstatx = 0, this.formData.xversionx = this.sdformModel.form_version;
            const i = await vt(this.sdformModel.dataid, this.formData[this.keyId], this.formData, 1, this.useUserState), s = i.data;
            s ? (s[this.rowKey] = this.formData[this.keyId], this.afterSave(s, !1)) : O.warning(i.message);
          } else
            O.warning("Unable to create empty data");
        }
      }).catch((l) => {
        console.log(l);
      });
    },
    handleUpdate(e, t) {
      this.isInsert = !1, this.selectIndex = this.getIndex(e, t), this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = e, this.formReadOnly = !1, this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", this.handlePopUpForm(), this.updateBefore && this.updateBefore(e, this.selectIndex);
    },
    handleView(e, t) {
      this.isInsert = !1, this.selectIndex = this.getIndex(e, t), this.showPopupFlag = !0, this.backdrop = !0, this.formData = e, this.formReadOnly = !0, this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", this.handlePopUpForm(), this.viewBefore && this.viewBefore(e, this.selectIndex);
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      this.selectIndex = this.getIndex(e, t), this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "";
      let l = !0;
      this.allowDeleteFunc && (l = this.allowDeleteFunc(e, t)), l && ve.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ya(this.sdformModel.dataid, a, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.keyId, params: { widget: this.widgetId } }), this.groupKey && this.dpExpandData) {
            this.removeRowExpand(e[this.groupKey], e);
            const i = this.rowKeyIndex(e[this.groupKey]);
            this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] - 1), this.wsConn && this.refreshData(), this.afterDelete && this.afterDelete(e, this.selectIndex);
          } else
            this.rawData.splice(this.selectIndex, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, this.sumAllPage && this.refreshData(), this.afterDelete && this.afterDelete(e, this.selectIndex);
          if (this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (i) {
              O.error(i.message);
            }
          O.success("Delete completed.");
        } else
          O.warning("Unable to remove data");
      }).catch((o) => {
        console.log(o);
      });
    },
    handleEditField(e, t, a, l) {
      const o = e[this.keyId];
      this.selectIndex = this.getIndex(e, t), this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", ve.confirm("Are you sure you want to edit value this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        const i = await vt(this.sdformModel.dataid, o, a, 1, this.useUserState);
        i ? (l && l(i), O.success("Edit value completed.")) : O.warning("Unable to edit data");
      }).catch(() => {
      });
    },
    handleExportRowOpen(e) {
      this.dpExportRow.params.id = e[this.keyId], this.exportName = e[this.cloneEnableLabelField] ? e[this.cloneEnableLabelField] : e[this.keyId], this.showExportRow = !0;
    },
    handleExportRowClose(e) {
      this.dpExportRow.params.id = "", this.exportName = "", this.showExportRow = !1;
    }
  }
}), xf = { class: "card-header" }, Gf = {
  key: 0,
  class: "mb-2",
  style: { position: "relative" }
}, Yf = { class: "text-6" }, Jf = { style: { position: "absolute", top: "0px", right: "0px" } }, Xf = {
  class: "ml-1 text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Qf = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Zf = { class: "card-footer" }, ec = {
  key: 0,
  class: "infinite-status",
  style: { "text-align": "center", padding: "8px 0" }
};
function tc(e, t, a, l, o, i) {
  const s = et, u = we, m = Ke, f = ie, c = Oa, _ = ia, $ = ut, g = Ie, I = La, F = Nt, p = Ut, w = Qe, S = Wf, N = na, y = bl, T = Pf, A = sa;
  return n(), v(L, null, [
    d(y, {
      class: "box-card",
      shadow: "never"
    }, {
      header: r(() => [
        C("div", xf, [
          (e.iconName != "" || e.iconForm != "" || e.titleNameForm != "") && e.titleEnable ? (n(), v("div", Gf, [
            d(m, { truncated: "" }, {
              default: r(() => [
                C("span", Yf, [
                  e.iconForm != "" ? (n(), h(s, {
                    key: 0,
                    "svg-data": e.iconForm
                  }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
                    key: 1,
                    "icon-name": e.iconName
                  }, null, 8, ["icon-name"])) : (n(), h(u, {
                    key: 2,
                    "icon-name": "icon-sdform"
                  })),
                  D(" " + M(e.titleNameForm), 1)
                ])
              ]),
              _: 1
            }),
            C("span", Jf, [
              re(e.$slots, "actionsBar", {}, void 0, !0)
            ])
          ])) : b("", !0),
          d(F, { gutter: 20 }, {
            default: r(() => [
              d($, {
                class: "mb-2",
                xs: 24,
                sm: 14,
                md: 16,
                lg: 16,
                xl: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  e.addBtnEnable && e.allowInsert && !e.readonly ? (n(), h(f, {
                    key: 0,
                    type: "success",
                    plain: "",
                    icon: "Plus",
                    onClick: e.handleAdd
                  }, {
                    default: r(() => [
                      D(M(e.addBtnLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : b("", !0),
                  t[6] || (t[6] = D()),
                  re(e.$slots, "actions", {}, void 0, !0),
                  e.rawdataBtnEnable ? (n(), h(c, {
                    key: 1,
                    direction: "vertical",
                    style: { height: "30px" }
                  })) : b("", !0),
                  e.rawdataBtnEnable ? (n(), h(_, {
                    key: 2,
                    modelValue: e.showRawValue,
                    "onUpdate:modelValue": t[0] || (t[0] = (E) => e.showRawValue = E),
                    label: "Raw Data",
                    border: ""
                  }, null, 8, ["modelValue"])) : b("", !0),
                  e.rawdataBtnEnable ? (n(), h(c, {
                    key: 3,
                    direction: "vertical",
                    style: { height: "30px" }
                  })) : b("", !0),
                  e.exportBtnEnable ? (n(), h(f, {
                    key: 4,
                    plain: "",
                    icon: "Download",
                    onClick: e.handleExportOpen
                  }, null, 8, ["onClick"])) : b("", !0),
                  d(f, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"]),
                  C("span", Xf, [
                    d(m, { "line-clamp": "2" }, {
                      default: r(() => [
                        D(M(e.showingLabel), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 3
              }),
              e.optionProvider.search && e.optionProvider.search.length > 0 ? (n(), h($, {
                key: 0,
                class: "mb-2",
                xs: 24,
                sm: 10,
                md: 8,
                lg: 8,
                xl: 8
              }, {
                default: r(() => [
                  d(g, {
                    modelValue: e.searchText,
                    "onUpdate:modelValue": t[1] || (t[1] = (E) => e.searchText = E),
                    placeholder: e.placeholderSearch,
                    onChange: e.handleSearch,
                    clearable: ""
                  }, {
                    append: r(() => [
                      d(f, {
                        type: "info",
                        icon: "Search",
                        onClick: e.handleSearch
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "onChange"])
                ]),
                _: 1
              })) : b("", !0),
              e.totalInline ? b("", !0) : (n(), h($, {
                key: 1,
                xs: 24,
                sm: 24,
                md: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  re(e.$slots, "actionsPager", {}, () => [
                    e.total > e.limit ? (n(), h(I, {
                      key: 0,
                      class: "mb-2",
                      "current-page": e.optionProvider.page,
                      "onUpdate:currentPage": t[2] || (t[2] = (E) => e.optionProvider.page = E),
                      "page-size": e.limit,
                      onCurrentChange: e.handleCurrentChange,
                      background: "",
                      layout: "prev, pager, next",
                      total: e.total
                    }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
                  ], !0)
                ]),
                _: 3
              })),
              e.totalInline ? b("", !0) : (n(), h($, {
                key: 2,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 8,
                style: { "text-align": "right" }
              }, {
                default: r(() => [
                  C("span", Qf, [
                    d(m, { "line-clamp": "2" }, {
                      default: r(() => [
                        D(M(e.showingLabel), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  d(f, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }))
            ]),
            _: 3
          })
        ])
      ]),
      default: r(() => [
        Ae((n(), h(N, {
          ref: "tableRef",
          data: e.rawData,
          stripe: "",
          border: e.resizable,
          "show-summary": e.sumEnable,
          "summary-method": e.getSummary,
          style: { width: "100%" },
          height: e.effectiveHeight,
          "max-height": e.maxHeight,
          "row-key": e.groupKey ? e.rowKey : void 0,
          lazy: !!e.groupKey,
          load: e.groupKey ? e.loadExpand : void 0,
          "expand-row-keys": e.groupKey ? e.expandedRows : void 0,
          "tree-props": e.groupKey ? { children: "children", hasChildren: e.expandCountChildrenName } : void 0,
          onExpandChange: e.handleExpand,
          onFilterChange: e.handleFilter
        }, {
          default: r(() => [
            e.actionEnable ? (n(), h(w, {
              key: 0,
              fixed: "",
              label: e.actionLabel,
              width: e.actionWidthAuto
            }, {
              default: r((E) => [
                e.actionCrudEnable ? (n(), v(L, { key: 0 }, [
                  E.row[e.keyId] && e.isFormEnable ? (n(), h(f, {
                    key: 0,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "View",
                    size: "small",
                    title: "View",
                    onClick: U((W) => e.handleView(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowUpdate(e.sdformModel, E.row, e.useUserState.user) && e.exportRowBtnEnable ? (n(), h(f, {
                    key: 1,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "Download",
                    size: "small",
                    title: "Export",
                    onClick: U((W) => e.handleExportRowOpen(E.row), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowInsert && e.cloneEnableLabelField ? (n(), h(f, {
                    key: 2,
                    plain: "",
                    circle: "",
                    type: "success",
                    icon: "CopyDocument",
                    size: "small",
                    title: "Clone",
                    onClick: U((W) => e.handleClone(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowUpdate(e.sdformModel, E.row, e.useUserState.user) ? (n(), h(f, {
                    key: 3,
                    plain: "",
                    circle: "",
                    type: "primary",
                    icon: "Edit",
                    size: "small",
                    title: "Edit",
                    onClick: U((W) => e.handleUpdate(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowDelete(e.sdformModel, E.row, e.useUserState.user) ? (n(), h(f, {
                    key: 4,
                    plain: "",
                    circle: "",
                    type: "danger",
                    icon: "Delete",
                    size: "small",
                    title: "Delete",
                    onClick: U((W) => e.handleDelete(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0)
                ], 64)) : b("", !0),
                e.groupKey && E.row[e.expandCountChildrenName] ? (n(), h(p, {
                  key: 1,
                  type: "info",
                  effect: "light",
                  size: "small"
                }, {
                  default: r(() => [
                    D(M(E.row[e.expandCountChildrenName]), 1)
                  ]),
                  _: 2
                }, 1024)) : b("", !0),
                re(e.$slots, "actionBtnRow", {
                  row: E.row,
                  index: E.$index
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["label", "width"])) : b("", !0),
            re(e.$slots, "actionColumn", {}, void 0, !0),
            e.indexColumn ? (n(), h(w, {
              key: 1,
              type: "index",
              index: e.genIndex,
              label: "#",
              width: 100,
              align: "center"
            }, null, 8, ["index"])) : b("", !0),
            e.sdformModel && Object.keys(e.sdformModel).length > 0 || e.displayFields && e.displayFields.length > 0 ? (n(), h(S, {
              key: 2,
              "form-model": e.sdformModel,
              "display-fields": e.displayFields,
              "subform-width": e.subformWidth,
              "system-column": e.systemColumn,
              "edit-column": e.editColumn,
              "key-id": e.keyId,
              "row-key": e.rowKey,
              "user-state": e.userState,
              "after-save": e.afterSave,
              "raw-value": e.showRawValue,
              "sort-state": e.optionProvider.orderBy || [],
              "sort-disabled": !!e.groupKey,
              onSort: e.handleSort
            }, {
              default: r(() => [
                re(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["form-model", "display-fields", "subform-width", "system-column", "edit-column", "key-id", "row-key", "user-state", "after-save", "raw-value", "sort-state", "sort-disabled", "onSort"])) : b("", !0)
          ]),
          _: 3
        }, 8, ["data", "border", "show-summary", "summary-method", "height", "max-height", "row-key", "lazy", "load", "expand-row-keys", "tree-props", "onExpandChange", "onFilterChange"])), [
          [A, e.preLoading]
        ]),
        C("div", Zf, [
          e.isInfinite ? (n(), v("div", ec, [
            e.loadingMore ? (n(), h(m, {
              key: 0,
              type: "info",
              size: "small"
            }, {
              default: r(() => [...t[7] || (t[7] = [
                D("Loading...", -1)
              ])]),
              _: 1
            })) : !e.hasMore && e.rawData.length > 0 ? (n(), h(m, {
              key: 1,
              type: "info",
              size: "small"
            }, {
              default: r(() => [
                D("— All loaded (" + M(e.totalPage.toLocaleString()) + " items) —", 1)
              ]),
              _: 1
            })) : b("", !0)
          ])) : b("", !0),
          !e.isInfinite && e.total > e.limit ? (n(), h(I, {
            key: 1,
            "current-page": e.optionProvider.page,
            "onUpdate:currentPage": t[3] || (t[3] = (E) => e.optionProvider.page = E),
            "page-size": e.limit,
            onCurrentChange: e.handleCurrentChange,
            class: "mt-3",
            background: "",
            layout: "prev, pager, next",
            total: e.total
          }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
        ])
      ]),
      _: 3
    }),
    d(T, {
      "file-name": "backup-data",
      modelValue: e.showExport,
      "onUpdate:modelValue": t[4] || (t[4] = (E) => e.showExport = E),
      "data-provider": e.dpFormData,
      "user-state": e.userState,
      "cancel-callback": e.handleExportClose
    }, null, 8, ["modelValue", "data-provider", "user-state", "cancel-callback"]),
    d(T, {
      "file-name": "backup-data",
      modelValue: e.showExportRow,
      "onUpdate:modelValue": t[5] || (t[5] = (E) => e.showExportRow = E),
      "dynamic-name": e.exportName,
      "data-provider": e.dpExportRow,
      "user-state": e.userState,
      "cancel-callback": e.handleExportRowClose
    }, null, 8, ["modelValue", "dynamic-name", "data-provider", "user-state", "cancel-callback"])
  ], 64);
}
const ac = /* @__PURE__ */ j(Kf, [["render", tc], ["__scopeId", "data-v-53428c88"]]), lc = B({
  name: "SdCrudPopupForm",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    dataId: {
      type: String,
      default: ""
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    // null = ไม่ระบุ → ใช้ค่า backdrop ของฟอร์มที่เปิด (resolvedBackdrop); ระบุ true/false มา = override
    backdrop: {
      type: Boolean,
      default: null
    },
    optionData: {
      type: Object,
      default: {}
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    isSubForm: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    afterSaveCallback: {
      type: Function
    },
    beforeSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    },
    // รูปแบบ container ตอนเปิดฟอร์ม — ไม่ส่งมา = 'dialog' (พฤติกรรมเดิม)
    popupType: {
      type: String,
      default: "dialog"
    },
    // ทิศของ drawer (ใช้เฉพาะตอน popupType = 'drawer'): rtl=ขวา, ltr=ซ้าย, ttb=บน, btt=ล่าง
    drawerDirection: {
      type: String,
      default: "rtl"
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "Form",
      popupWidth: "70%",
      showContent: !1,
      allowInsert: !1,
      allowUpdate: !1,
      iconForm: "",
      versionForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "70%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    },
    // container ที่จะ render: el-drawer เมื่อ popupType = 'drawer', นอกนั้น el-dialog
    popupComponent() {
      return this.popupType === "drawer" ? "el-drawer" : "el-dialog";
    },
    // attr ที่ต่างกันระหว่าง dialog/drawer: dialog ใช้ width, drawer ใช้ size + direction
    popupSizeBind() {
      return this.popupType === "drawer" ? { size: this.popupWidth, direction: this.drawerDirection } : { width: this.popupWidth };
    },
    popupClass() {
      return this.popupType === "drawer" ? "drawer-grid drawer-form" : "dialog-grid dialog-form";
    },
    // close-on-click-modal: ระบุ backdrop ผ่าน prop มา → ใช้ค่านั้น; ไม่ระบุ (null) → ใช้ค่าของฟอร์มที่เปิด; ฟอร์มยังไม่โหลด → false
    resolvedBackdrop() {
      return this.backdrop !== null && this.backdrop !== void 0 ? this.backdrop : !!this.userState?.formStore?.[this.formId]?.form_options?.backdrop;
    }
  },
  setup(e, t) {
    const a = De({}), l = q(), o = q();
    return { options: a, formRef: l, loading: o };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.showContent = !1, this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await Pe(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : O.warning(e.message);
        } else
          O.warning("Unauthorized");
      else
        O.warning("FormId not found.");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    updateForm(e) {
      e.form_icon ? this.iconForm = e.form_icon : this.iconForm = "", e.form_version ? this.versionForm = e.form_version : this.versionForm = "";
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user), this.allowUpdate = Xe(this.sdformModel, this.initData, this.userState.user)), this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_options && this.sdformModel.form_options.popup_size && (this.popupWidth = `${this.sdformModel.form_options.popup_size}%`, this.popupWidthdefault = this.popupWidth), this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.loading?.close(), this.showContent = !0, this.popupWidth = le(this.popupWidthdefault);
    }
  }
}), oc = ["id"];
function ic(e, t, a, l, o, i) {
  const s = et, u = we, m = Ut, f = ie, c = Fl;
  return n(), h(zt(e.popupComponent), ae({
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (_) => e.showPopupFlag = _)
  }, e.popupSizeBind, {
    "show-close": !0,
    class: e.popupClass,
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.resolvedBackdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }), {
    header: r(({ titleId: _, titleClass: $ }) => [
      C("span", {
        role: "heading",
        id: _,
        class: x($)
      }, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        D(" " + M(e.popupName) + " ", 1),
        e.versionForm ? (n(), h(m, {
          key: 2,
          type: "success"
        }, {
          default: r(() => [
            D(M(e.versionForm), 1)
          ]),
          _: 1
        })) : b("", !0)
      ], 10, oc)
    ]),
    default: r(() => [
      e.showContent ? (n(), h(c, {
        key: 0,
        ref: "formRef",
        "form-id": e.formId,
        "data-id": e.dataId,
        "parent-id": e.parentId,
        "init-data": e.initData,
        params: e.params,
        "option-data": e.optionData,
        readonly: e.readonly,
        annotated: e.annotated,
        "is-sub-form": e.isSubForm,
        "fix-api-url": e.fixApiUrl,
        "user-state": e.userState,
        "change-version": e.updateForm,
        "before-save": e.beforeSaveCallback,
        "after-save": e.afterSaveCallback
      }, {
        closeForm: r(() => [
          d(f, {
            onClick: U(e.handleCancel, ["prevent"])
          }, {
            default: r(() => [...t[1] || (t[1] = [
              D("Close", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["form-id", "data-id", "parent-id", "init-data", "params", "option-data", "readonly", "annotated", "is-sub-form", "fix-api-url", "user-state", "change-version", "before-save", "after-save"])) : b("", !0)
    ]),
    _: 1
  }, 16, ["title", "modelValue", "class", "before-close", "close-on-click-modal"]);
}
const nc = /* @__PURE__ */ j(lc, [["render", ic]]), sc = B({
  name: "SdCrudPopupGrid",
  components: {
    // SdCrudGrid,
  },
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    // ส่งต่อให้ SdCrudGrid — true = จำ page/search/filter/sort ต่อฟอร์ม (key `crud:<formId>`)
    stateKey: {
      type: [String, Boolean],
      default: !1
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    dataProvider: {
      type: Object,
      default: null
    },
    backdrop: {
      type: Boolean,
      default: !1
    },
    optionData: {
      type: Object,
      default: {}
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function
    },
    afterSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    },
    expandProvider: {
      type: Object
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    exportBtnEnable: {
      type: Boolean,
      default: !1
    },
    exportRowBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    rawdataBtnEnable: {
      type: Boolean,
      default: !1
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    indexColumn: {
      type: Boolean,
      default: !0
    },
    actionWidth: {
      type: Number,
      default: null
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    groupKey: {
      type: String
    },
    aggrColumn: {
      type: Array
    },
    sumColumn: {
      type: Array
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    sumAllPage: {
      type: Boolean,
      default: !1
    },
    editColumn: {
      type: Array
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    width: {
      type: String,
      default: "90%"
    },
    limitRow: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "CRUD Grid",
      popupWidth: this.width,
      showContent: !1,
      allowInsert: !1,
      allowUpdate: !1,
      iconForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "90%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    const a = De({}), l = q();
    return { options: a, refCrudGrid: l };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.showContent = !1, this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await Pe(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : O.warning(e.message);
        } else
          O.warning("Unauthorized");
      else
        O.warning("FormId not found");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.showContent = !0, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user), this.allowUpdate = Xe(this.sdformModel, this.initData, this.userState.user)), this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.popupWidth = le(this.popupWidthdefault);
    }
  }
}), rc = {
  role: "heading",
  class: "el-dialog__title"
};
function dc(e, t, a, l, o, i) {
  const s = et, u = we, m = ac, f = Ce;
  return n(), h(f, {
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.showPopupFlag = c),
    width: e.popupWidth,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: c, titleId: _, titleClass: $ }) => [
      C("span", rc, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        D(" " + M(e.popupName), 1)
      ])
    ]),
    default: r(() => [
      e.showContent ? (n(), h(m, {
        key: 0,
        ref: "refCrudGrid",
        "form-id": e.formId,
        "state-key": e.stateKey,
        "parent-id": e.parentId,
        params: e.params,
        "init-data": e.initData,
        readonly: e.readonly,
        "action-enable": e.actionEnable,
        "action-label": e.actionLabel,
        "action-width": e.actionWidth,
        "add-btn-enable": e.addBtnEnable,
        "add-btn-label": e.addBtnLabel,
        "data-provider": e.dataProvider,
        "display-fields": e.displayFields,
        "expand-count-children-name": e.expandCountChildrenName,
        "expand-provider": e.expandProvider,
        "export-btn-enable": e.exportBtnEnable,
        "export-row-btn-enable": e.exportRowBtnEnable,
        "clone-enable-label-field": e.cloneEnableLabelField,
        height: e.height,
        "icon-name": e.iconName,
        "index-column": e.indexColumn,
        "key-id": e.keyId,
        "max-height": e.maxHeight,
        "placeholder-search": e.placeholderSearch,
        "rawdata-btn-enable": e.rawdataBtnEnable,
        resizable: e.resizable,
        "row-key": e.rowKey,
        "search-fields": e.searchFields,
        "subform-width": e.subformWidth,
        "sum-decimal": e.sumDecimal,
        "sum-label": e.sumLabel,
        "system-column": e.systemColumn,
        "total-inline": e.totalInline,
        "title-enable": !1,
        "title-name": e.titleName,
        "fix-api-url": e.fixApiUrl,
        "aggr-column": e.aggrColumn,
        "edit-column": e.editColumn,
        "group-key": e.groupKey,
        "sum-all-page": e.sumAllPage,
        "sum-column": e.sumColumn,
        "limit-row": e.limitRow,
        "user-state": e.userState
      }, null, 8, ["form-id", "state-key", "parent-id", "params", "init-data", "readonly", "action-enable", "action-label", "action-width", "add-btn-enable", "add-btn-label", "data-provider", "display-fields", "expand-count-children-name", "expand-provider", "export-btn-enable", "export-row-btn-enable", "clone-enable-label-field", "height", "icon-name", "index-column", "key-id", "max-height", "placeholder-search", "rawdata-btn-enable", "resizable", "row-key", "search-fields", "subform-width", "sum-decimal", "sum-label", "system-column", "total-inline", "title-name", "fix-api-url", "aggr-column", "edit-column", "group-key", "sum-all-page", "sum-column", "limit-row", "user-state"])) : b("", !0)
    ]),
    _: 1
  }, 8, ["title", "modelValue", "width", "before-close", "close-on-click-modal"]);
}
const uc = /* @__PURE__ */ j(sc, [["render", dc]]), il = /* @__PURE__ */ new Map();
function pc(e, t) {
  let a = il.get(e);
  return a || (a = Pe(e, t), il.set(e, a), a.finally(() => il.delete(e))), a;
}
const mc = B({
  name: "SdSelectRemoteList",
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod", "ready"],
  props: {
    modelValue: null,
    dataProvider: {
      type: Object,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id",
      required: !0
    },
    fieldName: {
      type: String
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    multipleLimit: {
      type: Number
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    refreshLabel: {
      type: Boolean,
      default: !1
    },
    valueObjectId: {
      type: Boolean,
      default: !1
    },
    joinerObject: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      apiUrl: "",
      itemsList: [],
      rawData: [],
      itemSelected: {},
      formModel: {},
      formId: "",
      loading: !1,
      htmlRender: Kt,
      search: [],
      checkAll: !1,
      indeterminate: !1,
      defaultParams: {},
      defaultSort: [],
      defaultFilter: [],
      defaultWhere: "",
      optionProvider: { limit: this.limit, page: 1 },
      useUserState: this.$props.userState,
      queryState: "",
      multiSelected: []
    };
  },
  watch: {
    value: {
      deep: !0,
      handler(e) {
        e && !this.multiple && this.getSelectData(e, void 0, !0), e ? this.multiple && (e && e.length === 0 ? (this.checkAll = !1, this.indeterminate = !1) : e && e.length === this.itemsList.length ? (this.checkAll = !0, this.indeterminate = !1) : this.indeterminate = !0) : (this.checkAll = !1, this.indeterminate = !1);
      }
    }
  },
  computed: {
    // แปลง template ({{field}}) เป็นข้อความ โดย convert ค่าตาม field type ก่อน (date/select/number/boolean ฯลฯ)
    // คืน string ดิบ — ฝั่ง template เป็นคนห่อ htmlRender เอง (กัน render ซ้ำ)
    convertValue() {
      return (e, t) => {
        let a = {};
        if (t && typeof t == "object") {
          for (const o in t)
            o !== "_raw" && (a[`{{${o}}}`] = t[o] ?? "");
          let l = this.formModel?.form_db?.schema;
          if (l)
            for (const o in l) {
              let i = pe(t, o);
              i !== void 0 && (a[`{{${o}}}`] = Ee(i, o, this.formModel) ?? "");
            }
          for (const o of e.match(/\{\{[^}]+\}\}/g) || []) {
            if (o in a) continue;
            const i = pe(t, o.slice(2, -2).trim());
            i != null && typeof i != "object" && (a[o] = i);
          }
        }
        return ue(e, a).replace(/\{\{[^}]*\}\}/g, "");
      };
    },
    // template เริ่มต้นจาก labelField (เช่น "{{f1}} {{f2}}") ใช้เป็น fallback ตอนไม่ได้ตั้ง labelTemplate/optionsTemplate
    labelFieldTemplate() {
      return (this.labelField || []).map((e) => `{{${e}}}`).join(" ");
    },
    // template สำหรับ option ใน dropdown — ถ้าไม่ได้ตั้ง optionsTemplate ให้ fallback ไปใช้ labelTemplate ก่อน
    // (ให้ option list แสดงเหมือน selected box) แล้วค่อย fallback ไป labelField ดิบเป็นลำดับสุดท้าย
    optionsFieldTemplate() {
      return this.optionsTemplate || this.labelTemplate || this.labelFieldTemplate;
    },
    // มี template ที่ต้องอ้าง field ดิบ → ต้อง fetch raw record มา render
    // (label snapshot ที่ save มามีแค่ {value,label} ไม่มี field ดิบ เลย render template ไม่ได้)
    needTemplateRaw() {
      return !!this.labelTemplate || !!this.optionsTemplate;
    },
    value: {
      get() {
        if (this.modelValue !== void 0 && this.modelValue !== null)
          if (this.multiple) {
            let e = this.modelValue;
            return typeof this.modelValue == "string" && this.modelValue !== "" && (e = this.json2Array(this.modelValue)), this.enableObjectType && (e = e.value ? e.value : e), typeof e == "object" && Array.isArray(e) && e.length > 0 ? e : null;
          } else if (this.enableObjectType) {
            let e = this.modelValue;
            if (typeof this.modelValue == "string" && this.modelValue !== "")
              e = this.json2Array(this.modelValue), e && e.value || (e = this.modelValue);
            else if (typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0)
              e = this.modelValue;
            else
              return null;
            return this.value2Object(e);
          } else
            return this.modelValue;
        else
          return null;
      },
      set(e) {
        let t = null;
        e != null && (e !== "" || typeof e == "object" && Object.keys(e).length > 0) ? this.multiple ? (this.itemSelected = this.rawData.filter((a) => {
          let l = e;
          if (a[this.valueField] && l.includes(a[this.valueField]))
            return a[this.valueField];
        }), typeof e == "string" && e !== "" ? t = this.json2Array(e) : t = e, this.setAllMulti(t, this.rawData), this.enableObjectType && (t = this.value2Object(t))) : (this.itemSelected = this.rawData.find((a) => {
          let l = e;
          if (typeof e == "object" && Object.keys(e).length > 0 && e.value && (l = e.value), a[this.valueField] && a[this.valueField] == l)
            return a[this.valueField];
        }), this.enableObjectType ? t = this.value2Object(e) : t = e) : this.itemSelected = null, this.buildState && (this.itemsList = []), this.$emit("update:modelValue", t), this.$emit("change", t, this.itemSelected);
      }
    }
  },
  async created() {
    if (this.userState.host && (this.apiUrl = this.userState.host), this.dataProvider && (this.searchField && this.searchField.length > 0 ? this.search = P(this.searchField) : this.search = P(this.labelField), this.optionProvider.search = this.search, this.dataProvider.params || (this.dataProvider.params = {}), this.dataProvider.options ? (this.dataProvider.options.page || (this.dataProvider.options.page = 1), this.dataProvider.options.limit || (this.dataProvider.options.limit = this.limit), this.dataProvider.options.search = this.search, this.optionProvider = this.dataProvider.options) : this.dataProvider.options = this.optionProvider, this.defaultParams = P(this.dataProvider.params), this.defaultSort = P(this.optionProvider.orderBy), this.defaultFilter = P(this.optionProvider.fileter), this.defaultWhere = this.optionProvider.where ? this.optionProvider.where : "", (this.joinerObject || this.formBtnEnable || this.needTemplateRaw) && (this.formId = this.dataProvider.providerId, this.dataProvider.providerType == "FORM")))
      if (this.userState.formStore[this.formId])
        this.formModel = P(this.userState.formStore[this.formId]);
      else if (this.useUserState) {
        const e = await pc(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.formModel = P(e.data)) : O.warning("Form not found.");
      } else
        O.warning("UserState not found.");
  },
  setup(e, t) {
    return {
      refSelect: q()
    };
  },
  async mounted() {
    this.value && !this.multiple && await this.getSelectData(this.value), this.$emit("ready");
  },
  methods: {
    async getSelectData(e, t, a = !1) {
      if (e)
        if (this.multiple) {
          let l = [];
          this.enableObjectType && e.value ? l = e.value : l = e, (this.valueObjectId || ko(this.formModel, this.valueField)) && (this.optionProvider.fileterObjectId ? this.optionProvider.fileterObjectId.includes(this.valueField) || this.optionProvider.fileterObjectId.push(this.valueField) : this.optionProvider.fileterObjectId = [this.valueField]), l.length > 0 && (this.optionProvider.fileter ? this.optionProvider.fileter[this.valueField] = l : this.optionProvider.fileter = { [this.valueField]: l }, this.dataProvider.params && this.dataProvider.params.q && (this.dataProvider.params.q = ""), this.dataProvider.options = this.optionProvider, await this.getDataAll(this.dataProvider, (o) => {
            e.length === 0 ? (this.checkAll = !1, this.indeterminate = !1) : e.length === this.itemsList.length ? (this.checkAll = !0, this.indeterminate = !1) : this.indeterminate = !0, this.value = l, t && t(o);
          }));
        } else {
          let l = "", o = !1;
          if (this.enableObjectType ? (e.label && e.value !== e.label && (o = !0), e.value ? l = `${e.value}` : l = `${e}`) : typeof e == "string" && (l = `${e}`), l !== "" && (!o || this.refreshLabel || this.needTemplateRaw)) {
            if (this.itemSelected && this.itemSelected[this.valueField] && this.itemSelected[this.valueField] === l) {
              if (!a) {
                let m = l;
                this.enableObjectType && (m = this.value2Object(l)), this.$emit("change", m, this.itemSelected);
              }
              return;
            }
            if (this.dataProvider.providerType === "FORM" && this.formId) {
              const m = yt().getRaw(this.formId, this.valueField, l);
              if (m) {
                this.itemSelected = P(m), this.addRawData(this.itemSelected), this.multiItemsList(this.rawData);
                let f = l;
                this.enableObjectType && (f = this.value2Object(l)), t && t(this.itemSelected), a || this.$emit("change", f, this.itemSelected);
                return;
              }
            }
            const s = !!this.valueObjectId || ko(this.formModel, this.valueField) ? `\`${this.valueField}\` = CONVERT(:xinputValex, 'objectId')` : `\`${this.valueField}\` = :xinputValex`, u = {
              ...this.dataProvider,
              options: {
                ...this.optionProvider,
                where: this.optionProvider.where ? `${this.optionProvider.where} AND ${s}` : s
              },
              params: { ...this.dataProvider.params, xinputValex: l, q: "" }
            };
            await this.getDataOne(u, (m) => {
              this.itemSelected = P(m), this.dataProvider.providerType === "FORM" && this.formId && m && yt().setRaw(this.formId, this.valueField, l, m);
              let f = l;
              this.enableObjectType && (f = this.value2Object(l)), t && t(m), a || this.$emit("change", f, m);
            });
          }
        }
      else
        this.itemSelected = null;
    },
    handleClear() {
      this.itemSelected = null, this.rawData = [], this.itemsList = [], this.queryState = "", this.multiSelected = [];
    },
    handleClearList() {
      this.rawData = [], this.itemsList = [], this.queryState = "", this.multiSelected = [];
    },
    handleRemote(e) {
      if (this.buildState) {
        this.itemsList = [];
        return;
      }
      !e && this.queryState && this.queryState.length > 1 && (e = this.queryState), !(this.queryState === e && this.itemsList && this.itemsList.length > 0 && !(this.queryState === "" && this.itemsList.length === 1)) && (this.$emit("remoteMethod", e), this.queryState = e, this.optionProvider.page = 1, this.optionProvider.orderBy = P(this.defaultSort), this.optionProvider.fileter = P(this.defaultFilter), e !== "" ? this.dataProvider.params.q = `%${e}%` : this.dataProvider.params.q = "", this.dataProvider.options = this.optionProvider, this.getDataAll(this.dataProvider, (t) => {
        this.itemsList.length === 0 && (this.queryState = "");
      }));
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleRemoveTag(e) {
      const t = this.multiSelected.findIndex((a) => !!a[this.valueField] && a[this.valueField] === e);
      this.multiSelected.splice(t, 1);
    },
    setAllMulti(e, t) {
      for (const a of e) {
        const l = this.multiSelected.findIndex((i) => !!i[this.valueField] && i[this.valueField] === a), o = t.find((i) => !!i[this.valueField] && i[this.valueField] === a);
        o && (l > -1 ? this.multiSelected[l] = o : this.multiSelected.push(o));
      }
    },
    value2Object(e) {
      if (e)
        if (e.value) {
          const { _raw: t, ...a } = e;
          return a;
        } else {
          let t = e;
          if (this.multiple) {
            const o = [...this.rawData, ...this.multiSelected];
            t = Di(o, e, this.valueField, this.labelField, this.labelTemplate);
          } else {
            let o = this.itemsList.find((i) => !!i.value && i.value == e);
            o && o.label && (t = o.label);
          }
          let a = {};
          if (this.refField) {
            let o = {};
            this.itemSelected ? o = P(this.itemSelected) : o = this.rawData.find((i) => {
              if (this.multiple) {
                let s = e;
                if (i[this.valueField] && s.includes(i[this.valueField]))
                  return i[this.valueField];
              } else {
                let s = e;
                if (typeof e == "object" && Object.keys(e).length > 0 && e.value && (s = e.value), i[this.valueField] && i[this.valueField] == s)
                  return i[this.valueField];
              }
            }), this.refField.forEach((i) => {
              const s = pe(o, i);
              rl(a, i, s);
            });
          }
          let l = {};
          if (this.joinerObject && this.itemSelected) {
            let o;
            if (this.fieldName ? o = pe(this.itemSelected, this.fieldName) : this.formModel.joiner_field.joiner_enable && (o = pe(this.itemSelected, this.formModel.joiner_field.field_name)), o) {
              const i = P(o);
              let s = 1;
              for (const u in i) {
                const m = /xtbxlv/g;
                u.search(m) !== -1 && (s++, l[u] = i[u] ? i[u] : null);
              }
              l[`xtbxlv${s}_xfx${this.valueField}`] = i.value ? i.value : null;
            }
          }
          return {
            value: e,
            label: t,
            ...l,
            ...a
          };
        }
      else
        return null;
    },
    handleCheckAll(e) {
      this.indeterminate = !1, e ? this.value = this.itemsList.map((t) => t.value) : this.value = [];
    },
    json2Array(e) {
      try {
        return JSON.parse(e);
      } catch {
        return [];
      }
    },
    multiItemsList(e) {
      e && e.length > 0 ? this.itemsList = e.map((t) => {
        if (t[this.valueField])
          return this.getItemsList(t);
      }) : this.itemsList = [];
    },
    // คืน rawData ของ item ที่เลือก เพื่อใช้กับ convertValue ตอน render label
    // value เป็น object: ใช้ _raw ถ้ามี → ไม่งั้นหา raw doc จาก list ที่โหลดมา (ค่าที่ save ไม่เก็บ _raw แล้ว) → fallback object เดิม
    // value เป็น scalar: หาใน rawData ด้วย valueField
    // คืน raw doc ของ item ที่เลือก (มี field ดิบครบ) — ไม่มี raw จริง → null (อย่าคืน snapshot {value,label} มา render template)
    // value เป็น object: ใช้ _raw ถ้ามี → ไม่งั้นหา raw doc จาก list ที่โหลดมา → ไม่เจอคืน null
    // value เป็น scalar: หาใน rawData ด้วย valueField → ไม่เจอคืน null
    labelRaw(e) {
      return e && typeof e == "object" ? e._raw ? e._raw : this.rawData.find((t) => t[this.valueField] === e.value) ?? null : this.rawData.find((t) => t[this.valueField] === e) ?? null;
    },
    // ข้อความที่โชว์ในช่อง select เมื่อเลือกค่าแล้ว:
    // มี raw doc → convert ตาม schema; ไม่มี raw (ยังไม่โหลด list) → fallback label snapshot ที่ติดมากับค่าเลย
    // (อย่า render template กับ snapshot — static text ในเทมเพลต เช่น "( )" จะรอดการ strip placeholder แล้วโชว์ "()")
    selectedLabel(e) {
      const t = this.labelRaw(e);
      if (t) {
        const a = this.convertValue(this.labelTemplate ? this.labelTemplate : this.labelFieldTemplate, t);
        if (a && a.trim() !== "") return a;
      }
      return e && typeof e == "object" ? `${e.label ?? e.value ?? ""}` : `${e ?? ""}`;
    },
    getItemsList(e) {
      let t = [];
      this.labelField.forEach((i) => {
        const s = pe(e, i);
        s && t.push(s);
      });
      let a = t.join(" "), l = {};
      this.refField && this.refField.forEach((i) => {
        const s = pe(e, i);
        rl(l, i, s);
      });
      let o = {};
      if (this.joinerObject) {
        let i;
        if (this.fieldName ? i = pe(e, this.fieldName) : this.formModel.joiner_field.joiner_enable && (i = pe(e, this.formModel.joiner_field.field_name)), i) {
          const s = P(i);
          let u = 1;
          for (const m in s) {
            const f = /xtbxlv/g;
            m.search(f) !== -1 && (u++, o[m] = s[m] ? s[m] : null);
          }
          o[`xtbxlv${u}_xfx${this.valueField}`] = s.value ? s.value : null;
        }
      }
      return { value: e[this.valueField], label: a, _raw: e, ...o, ...l };
    },
    async getDataAll(e, t) {
      this.loading = !0, await be.post(
        `${this.apiUrl}/widget/crud/getdata-all`,
        {
          sdProvider: e,
          totalEnable: !1
        },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((a) => {
        a && a.data && a.data.data && (this.rawData = P(a.data.data), this.multiItemsList(a.data.data), t && t(this.rawData)), this.loading = !1;
      }).catch((a) => {
        a.response && a.response.data && a.response.data.message ? O.warning(a.response.data.message) : O.warning(a.message), this.loading = !1, this.itemsList = [];
      });
    },
    async getDataOne(e, t) {
      this.loading = !0, await be.post(
        `${this.apiUrl}/widget/crud/getdata-one`,
        { sdProvider: e },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((a) => {
        a.data && a.data.message && (this.itemSelected = P(a.data.data), this.addRawData(this.itemSelected), this.multiItemsList(this.rawData), t && t(this.itemSelected)), this.loading = !1;
      }).catch((a) => {
        this.loading = !1;
      });
    },
    addRawData(e) {
      if (this.dataProvider.providerType == "FORM") {
        const t = this.rawData.findIndex((a) => a._id === e._id);
        t !== -1 ? this.rawData[t] = P(e) : this.rawData.unshift(P(e));
      } else {
        const t = this.rawData.findIndex((a) => a[this.valueField] === e[this.valueField]);
        t !== -1 ? this.rawData[t] = P(e) : this.rawData.unshift(P(e));
      }
    }
  }
}), hc = ["innerHTML"], fc = ["innerHTML"], cc = ["innerHTML"];
function bc(e, t, a, l, o, i) {
  const s = ia, u = It, m = Dt;
  return n(), h(m, {
    ref: "refSelect",
    modelValue: e.value,
    "onUpdate:modelValue": t[1] || (t[1] = (f) => e.value = f),
    multiple: e.multiple,
    "multiple-limit": e.multipleLimit,
    remote: "",
    "remote-show-suffix": "",
    placeholder: e.placeholder,
    "remote-method": e.handleRemote,
    loading: e.loading,
    "suffix-icon": e.buildState ? "" : "ArrowDown",
    onRemoveTag: e.handleRemoveTag,
    onClear: e.handleClear,
    onVisibleChange: e.handleVisibleChange
  }, Je({
    prefix: r(() => [
      re(e.$slots, "prefix")
    ]),
    label: r(({ value: f }) => [
      C("div", {
        innerHTML: e.htmlRender(e.selectedLabel(f))
      }, null, 8, cc)
    ]),
    default: r(() => [
      e.optionsTemplate ? (n(!0), v(L, { key: 0 }, G(e.itemsList, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: e.enableObjectType && !e.multiple ? f : f.value,
        style: { height: "auto", "border-bottom": "1px solid var(--el-border-color)", position: "relative" }
      }, {
        default: r(() => [
          C("div", {
            innerHTML: e.htmlRender(e.convertValue(e.optionsTemplate, f._raw))
          }, null, 8, hc)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128)) : b("", !0),
      e.optionsTemplate ? b("", !0) : (n(!0), v(L, { key: 1 }, G(e.itemsList, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: e.enableObjectType && !e.multiple ? f : f.value
      }, {
        default: r(() => [
          C("div", {
            innerHTML: e.htmlRender(e.convertValue(e.optionsFieldTemplate, f._raw))
          }, null, 8, fc)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128))
    ]),
    _: 2
  }, [
    e.multiple && !e.multipleLimit ? {
      name: "header",
      fn: r(() => [
        d(s, {
          modelValue: e.checkAll,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => e.checkAll = f),
          indeterminate: e.indeterminate,
          onChange: e.handleCheckAll
        }, {
          default: r(() => [...t[2] || (t[2] = [
            D(" Select All ", -1)
          ])]),
          _: 1
        }, 8, ["modelValue", "indeterminate", "onChange"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "multiple-limit", "placeholder", "remote-method", "loading", "suffix-icon", "onRemoveTag", "onClear", "onVisibleChange"]);
}
const kl = /* @__PURE__ */ j(mc, [["render", bc]]), gc = B({
  name: "SdCrudSelect",
  components: {
    // SdSelectRemoteList,
    // SdCrudPopupForm,
  },
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    orderBy: {
      type: Array,
      default: []
    },
    where: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !0
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    dependEnable: {
      type: Boolean,
      default: !1
    },
    dependField: {
      type: Object
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      value: this.modelValue,
      apiUrl: "",
      userBy: this.userState.user,
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      disable: !1,
      loadForm: !1,
      curFormId: this.formId,
      insertBtnEnable: !1,
      updateBtnEnable: !1,
      viewBtnEnable: !1,
      readonlySelect: !1,
      backdropSelect: !1,
      showPopupFlag: !1,
      dataId: "",
      defaultWhere: this.where,
      isInsert: !0,
      dpSelect: {
        providerId: this.formId,
        providerType: this.providerType,
        params: this.params ? { parentId: this.parentId, ...this.params } : { parentId: this.parentId },
        options: { orderBy: this.orderBy, where: this.where, limit: this.limit }
      }
    };
  },
  watch: {
    "dependField.value": {
      deep: !1,
      handler(e) {
        if (this.dependEnable) {
          if (!e)
            this.value = null, this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.isInsert = !0;
          else if (this.selectInput) {
            const t = this.selectInput.itemSelected && this.selectInput.itemSelected.xparentx ? this.selectInput.itemSelected.xparentx : "";
            this.dependParentId !== t && (this.value = null, this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.isInsert = !0);
          }
        }
      }
    }
  },
  computed: {
    dependOn() {
      return this.dependEnable ? this.dependField ? !!this.dependField.value : !1 : !0;
    },
    dependParentId() {
      return this.dependEnable && this.dependField && this.dependField.selectInput ? this.dependField.selectInput.itemSelected && this.dependField.selectInput.itemSelected._id ? this.dependField.selectInput.itemSelected._id : "" : this.parentId;
    }
  },
  setup() {
    const e = q(), t = q();
    return {
      refSdForm: e,
      selectInput: t
    };
  },
  async mounted() {
    if (this.dpSelect.options || (this.dpSelect.options = {}), this.dependParentId ? this.dpSelect.options.where ? this.dpSelect.options.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = "xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = this.defaultWhere, this.formBtnEnable && this.providerType == "FORM") {
      if (this.userState.formStore[this.formId])
        this.sdformModel = P(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.sdformModel = P(e.data)) : O.warning("Form not found.");
      } else
        O.warning("Unauthorized");
      this.sdformModel._id && (this.viewBtnEnable = oa(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Ne(this.sdformModel, this.useUserState.user), this.selectInput.itemSelected && (this.updateBtnEnable = Xe(this.sdformModel, this.selectInput.itemSelected, this.useUserState.user)));
    }
  },
  methods: {
    async handleOpenFormAdd() {
      this.disable = !0, this.formData = {}, this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !0, this.dataId = "";
    },
    handleOpenFormEdit() {
      this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !0, this.getDataId();
    },
    handleClone() {
      this.disable = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !1, this.dataId = "";
      const e = this.formData._id;
      delete this.formData._id, this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone", ve.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const t = await Ga(this.sdformModel.dataid, this.useUserState);
          if (t) {
            this.formData = { ...t, ...this.formData }, this.formData.xversionx = this.sdformModel.form_version, this.formData.xclonex = e, this.formData.dataid = this.formData._id, this.formData.xrstatx = 0;
            const a = await vt(this.sdformModel.dataid, this.formData._id, this.formData, 1, this.useUserState), l = a.data;
            l ? (l.dataid = this.formData._id, this.handleAferSaveForm(l, !1)) : O.warning(a.message);
          } else
            O.warning("Unable to create empty data");
        }
      }).catch((t) => {
        console.log(t);
      });
    },
    handleOpenFormView() {
      this.disable = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !0, this.backdropSelect = !0, this.showPopupFlag = !0, this.getDataId();
    },
    handleAferSaveForm(e, t) {
      this.selectInput.rawData = [{ ...P(e) }], this.selectInput.value = e[this.valueField], this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.showPopupFlag = !1;
    },
    async handleCancelForm() {
      this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.showPopupFlag = !1;
    },
    handleRemote(e) {
      this.$emit("remoteMethod", e), this.dpSelect.params.parentId = this.dependParentId, this.dpSelect.options || (this.dpSelect.options = {}), this.dependParentId ? this.dpSelect.options.where ? this.dpSelect.options.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = "xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = this.defaultWhere;
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleChange(e, t) {
      let a = this.value;
      this.formBtnEnable && this.sdformModel._id && this.providerType == "FORM" && (this.viewBtnEnable = oa(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Ne(this.sdformModel, this.useUserState.user), t && (this.updateBtnEnable = Xe(this.sdformModel, t, this.useUserState.user))), this.$emit("update:modelValue", a), this.$emit("change", a, t), this.getDataId(), this.dataId ? this.isInsert = !1 : this.isInsert = !0;
    },
    getDataId() {
      this.selectInput && this.selectInput.itemSelected && this.selectInput.itemSelected._id ? (this.dataId = this.selectInput.itemSelected._id, this.formData = this.selectInput.itemSelected) : (this.dataId = "", this.formData = {});
    },
    getValueSelect(e) {
      return this.enableObjectType ? e.value ? e.value : null : e;
    }
  }
}), yc = { key: 2 };
function vc(e, t, a, l, o, i) {
  const s = ie, u = nc, m = kl;
  return n(), h(m, {
    ref: "selectInput",
    filterable: "",
    clearable: "",
    modelValue: e.value,
    "onUpdate:modelValue": t[1] || (t[1] = (f) => e.value = f),
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    placeholder: e.placeholder,
    "enable-object-type": e.enableObjectType,
    disabled: e.readonly || e.disable || !e.dependOn,
    "data-provider": e.dpSelect,
    "value-field": e.valueField,
    "search-field": e.searchField,
    "label-field": e.labelField,
    "ref-field": e.refField,
    limit: e.limit,
    "label-template": e.labelTemplate,
    "options-template": e.optionsTemplate,
    "user-state": e.userState,
    onRemoteMethod: e.handleRemote,
    onVisibleChange: e.handleVisibleChange,
    onChange: e.handleChange
  }, Je({ _: 2 }, [
    !e.readonly && !e.multiple && e.providerType == "FORM" && e.formBtnEnable ? {
      name: "prefix",
      fn: r(() => [
        e.isInsert ? (n(), v(L, { key: 0 }, [
          e.insertBtnEnable ? (n(), h(s, {
            key: 0,
            type: "success",
            size: "small",
            icon: "Plus",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormAdd, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)) : (n(), v(L, { key: 1 }, [
          e.updateBtnEnable ? (n(), h(s, {
            key: 0,
            type: "primary",
            size: "small",
            icon: "Edit",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormEdit, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.cloneEnableLabelField && e.insertBtnEnable ? (n(), h(s, {
            key: 1,
            type: "warning",
            size: "small",
            icon: "CopyDocument",
            plain: "",
            circle: "",
            onClick: U(e.handleClone, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.viewBtnEnable ? (n(), h(s, {
            key: 2,
            type: "info",
            size: "small",
            icon: "View",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormView, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)),
        e.showPopupFlag ? (n(), v("div", yc, [
          d(u, {
            ref: "refSdForm",
            modelValue: e.showPopupFlag,
            "onUpdate:modelValue": t[0] || (t[0] = (f) => e.showPopupFlag = f),
            "form-id": e.formId,
            "data-id": e.dataId,
            "parent-id": e.dependParentId,
            "init-data": e.formData,
            params: e.params,
            readonly: e.readonlySelect,
            backdrop: e.backdropSelect,
            "user-state": e.userState,
            "after-save-callback": e.handleAferSaveForm,
            "cancel-callback": e.handleCancelForm
          }, null, 8, ["modelValue", "form-id", "data-id", "parent-id", "init-data", "params", "readonly", "backdrop", "user-state", "after-save-callback", "cancel-callback"])
        ])) : b("", !0)
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "allow-create", "placeholder", "enable-object-type", "disabled", "data-provider", "value-field", "search-field", "label-field", "ref-field", "limit", "label-template", "options-template", "user-state", "onRemoteMethod", "onVisibleChange", "onChange"]);
}
const KS = /* @__PURE__ */ j(gc, [["render", vc]]), wc = B({
  name: "SdCrudSelectSubForm",
  components: {
    // SdSelectRemoteList,
  },
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod", "update:crudPopupForm"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    orderBy: {
      type: Array,
      default: void 0
    },
    where: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    refreshLabel: {
      type: Boolean,
      default: !1
    },
    getdataOnLoad: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    valueObjectId: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    dependEnable: {
      type: Boolean,
      default: !1
    },
    dependField: {
      type: Object
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      // value: this.modelValue as any,
      apiUrl: "",
      userBy: this.userState.user,
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      disableAction: !1,
      loadForm: !1,
      curFormId: this.formId,
      insertBtnEnable: !1,
      updateBtnEnable: !1,
      viewBtnEnable: !1,
      readonlySelect: !1,
      backdropSelect: !1,
      showPopupFlag: !1,
      dataId: "",
      defaultWhere: this.where,
      defaultParentId: this.parentId,
      defaultDependParentId: void 0,
      defaultParams: this.params ? { parentId: this.parentId, ...this.params } : { parentId: this.parentId },
      defaultOptions: { orderBy: this.orderBy, where: this.where, limit: this.limit },
      isInsert: !0,
      parentState: !0
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        e && (e !== this.defaultParentId ? this.defaultParentId ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput.handleClear()) : (this.defaultParentId = e, this.defaultOptions.where = this.defaultWhere, this.selectInput.handleClear()) : this.parentState ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.selectInput.handleClear(), this.$emit("change", null), this.parentState = !1) : this.selectInput.handleClear());
      }
    },
    "dependField.value": {
      deep: !1,
      handler(e) {
        if (this.dependEnable)
          if (e && (typeof e == "object" && Object.keys(e).length > 0 || typeof e == "string" && e !== "")) {
            if (this.selectInput) {
              const t = this.selectInput.itemSelected && this.selectInput.itemSelected.xparentx ? this.selectInput.itemSelected.xparentx : "";
              t && this.dependParentId !== t ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput.handleClearList()) : this.selectInput.handleClearList();
            }
          } else
            this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput && this.selectInput.handleClearList();
      }
    },
    modelValue: {
      deep: !1,
      async handler(e) {
        e ? this.selectInput && !this.multiple && (this.defaultParams.parentId = this.dependParentId, this.providerType == "FORM" && (this.dependEnable ? this.formBtnEnable && this.subFormOpen ? (this.defaultOptions.where = this.defaultWhere, await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.defaultOptions.where = this.defaultWhere, await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.selectInput && this.selectInput.itemSelected ? this.selectInput.itemSelected.xparentx && this.selectInput.itemSelected.xparentx !== this.defaultParentId && this.parentId === this.selectInput.itemSelected.xparentx ? this.parentState = !0 : this.parentState = !1 : this.parentState = !1, await this.selectInput.getSelectData(this.getValueSelect(e)))), this.multiple || this.enableObjectType || await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.isInsert = !0, this.selectInput.handleClear());
      }
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t);
      }
    },
    backdrop() {
      return !!this.sdformModel.form_options?.backdrop;
    },
    dependOn() {
      return this.dependEnable ? this.dependField ? !!this.dependField.value && (typeof this.dependField.value == "object" && Object.keys(this.dependField.value).length > 0 || typeof this.dependField.value == "string" && this.dependField.value !== "") : !1 : !0;
    },
    dependParentId() {
      if (this.dependEnable && this.dependField && this.dependField.selectInput) {
        const e = this.dependField.selectInput.itemSelected && this.dependField.selectInput.itemSelected._id ? this.dependField.selectInput.itemSelected._id : "";
        if (e)
          return e;
      }
      return this.parentId;
    },
    defaultPopUpForm() {
      return {
        formId: this.formId,
        parentId: this.dependParentId,
        cancelCallback: this.handleCancelForm,
        afterSaveCallback: this.handleAferSaveForm
      };
    },
    selectParams() {
      return this.defaultParams;
    },
    selectOptions() {
      return this.defaultOptions;
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  setup() {
    const e = q(), t = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      refSdForm: e,
      selectInput: t
    };
  },
  async mounted() {
    await this.formBtnRender(), await this.itemInit();
  },
  methods: {
    async itemInit() {
      this.selectInput && this.value && (this.formBtnEnable && this.subFormOpen || this.dependEnable || this.multiple || this.getdataOnLoad) && (this.selectInput.itemSelected && Object.keys(this.selectInput.itemSelected).length > 0 && this.selectInput.itemSelected || await this.selectInput.getSelectData(this.getValueSelect(this.value), async (t) => {
        this.dependField && !this.dependField.dependEnable && !this.dependField.formBtnEnable && this.dependField.selectInput && (!this.dependField.selectInput.itemSelected || this.dependField.selectInput.itemSelected && Object.keys(this.dependField.selectInput.itemSelected).length === 0) && await this.dependField.selectInput.getSelectData(this.getValueSelect(this.dependField.value));
      }));
    },
    async formBtnRender() {
      if (this.providerType == "FORM") {
        if (this.userState.formStore[this.formId])
          this.sdformModel = P(this.userState.formStore[this.formId]);
        else if (this.useUserState.user)
          if (this.formId) {
            const e = await Pe(this.formId, this.useUserState);
            e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.sdformModel = P(e.data)) : O.warning("Form not found.");
          } else
            O.warning("Please select form.");
        else
          O.warning("Unauthorized");
        this.sdformModel._id && (this.viewBtnEnable = oa(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Ne(this.sdformModel, this.useUserState.user), this.selectInput && this.selectInput.itemSelected && (this.updateBtnEnable = Xe(this.sdformModel, this.selectInput.itemSelected, this.useUserState.user)));
      }
    },
    async handleOpenFormAdd() {
      this.disableAction = !0, this.formData = {}, this.readonlySelect = !1, this.backdropSelect = this.backdrop, this.showPopupFlag = !0, this.dataId = "", this.handlePopUpForm();
    },
    handleOpenFormEdit() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = this.backdrop, this.showPopupFlag = !0, this.getDataId(), this.handlePopUpForm();
    },
    handleClone() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !1, this.dataId = "";
      const e = this.formData._id;
      delete this.formData._id, this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone", ve.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const t = await Ga(this.sdformModel.dataid, this.useUserState);
          if (t) {
            this.formData = { ...t, ...this.formData }, this.formData.xversionx = this.sdformModel.form_version, this.formData.xclonex = e, this.formData.dataid = this.formData._id, this.formData.xrstatx = 0;
            const a = await vt(this.sdformModel.dataid, this.formData._id, this.formData, 1, this.useUserState), l = a.data;
            l ? (l.dataid = this.formData._id, this.handleAferSaveForm(l, !1)) : (this.disableAction = !1, O.warning(a.message));
          } else
            this.disableAction = !1, O.warning("Unable to create empty data");
        }
      }).catch((t) => {
        this.disableAction = !1;
      });
    },
    handleOpenFormView() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !0, this.backdropSelect = !0, this.showPopupFlag = !0, this.getDataId(), this.handlePopUpForm();
    },
    handleAferSaveForm(e, t) {
      this.selectInput.addRawData(e), this.selectInput.multiItemsList(this.selectInput.rawData), this.selectInput.value = e[this.valueField], this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.showPopupFlag = !1, this.handlePopUpForm();
    },
    async handleCancelForm() {
      this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        dataId: this.dataId,
        initData: this.formData,
        backdrop: this.backdropSelect,
        readonly: this.readonlySelect,
        ...this.defaultPopUpForm
      });
    },
    handleRemote(e) {
      this.buildState || (this.$emit("remoteMethod", e), this.defaultParams.parentId = this.dependParentId, this.defaultOptions.where = this.defaultWhere, this.dependParentId && (this.defaultOptions.where ? this.defaultOptions.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.defaultOptions.where = "xparentx = CONVERT(:parentId, 'objectId')"));
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleChange(e, t) {
      try {
        let a = e;
        this.providerType == "FORM" && (this.sdformModel && this.sdformModel._id && (this.viewBtnEnable = oa(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Ne(this.sdformModel, this.useUserState.user), t && (this.updateBtnEnable = Xe(this.sdformModel, t, this.useUserState.user))), this.getDataId(), this.dataId ? this.isInsert = !1 : this.isInsert = !0), this.$emit("change", a, t);
      } catch (a) {
        console.log(a);
      }
    },
    getDataId() {
      this.selectInput && this.selectInput.itemSelected && this.selectInput.itemSelected._id ? (this.dataId = this.selectInput.itemSelected._id, this.formData = this.selectInput.itemSelected) : (this.dataId = "", this.formData = {});
    },
    getValueSelect(e) {
      return this.enableObjectType ? e && e.value ? e.value : null : e;
    }
  }
});
function Sc(e, t, a, l, o, i) {
  const s = ie, u = kl;
  return n(), h(u, {
    ref: "selectInput",
    filterable: "",
    clearable: "",
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.value = m),
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    placeholder: e.placeholder,
    "enable-object-type": e.enableObjectType,
    "refresh-label": e.refreshLabel,
    disabled: e.disabled || e.disableAction || !e.dependOn,
    "data-provider": {
      providerId: e.formId,
      providerType: e.providerType,
      params: e.selectParams,
      options: e.selectOptions
    },
    "value-field": e.valueField,
    "search-field": e.searchField,
    "label-field": e.labelField,
    "ref-field": e.refField,
    limit: e.limit,
    "value-object-id": e.valueObjectId,
    "form-btn-enable": e.formBtnEnable || e.getdataOnLoad,
    "label-template": e.labelTemplate,
    "options-template": e.optionsTemplate,
    "user-state": e.userState,
    "build-state": e.buildState,
    onRemoteMethod: e.handleRemote,
    onVisibleChange: e.handleVisibleChange,
    onChange: e.handleChange
  }, Je({ _: 2 }, [
    !e.disabled && !e.multiple && e.providerType == "FORM" && e.formBtnEnable && e.subFormOpen && e.dependOn ? {
      name: "prefix",
      fn: r(() => [
        e.isInsert ? (n(), v(L, { key: 0 }, [
          e.insertBtnEnable ? (n(), h(s, {
            key: 0,
            type: "success",
            size: "small",
            icon: "Plus",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormAdd, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)) : (n(), v(L, { key: 1 }, [
          e.updateBtnEnable ? (n(), h(s, {
            key: 0,
            type: "primary",
            size: "small",
            icon: "Edit",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormEdit, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.cloneEnableLabelField && e.insertBtnEnable ? (n(), h(s, {
            key: 1,
            type: "warning",
            size: "small",
            icon: "CopyDocument",
            plain: "",
            circle: "",
            onClick: U(e.handleClone, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          !e.updateBtnEnable && e.viewBtnEnable ? (n(), h(s, {
            key: 2,
            type: "info",
            size: "small",
            icon: "View",
            plain: "",
            circle: "",
            onClick: U(e.handleOpenFormView, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64))
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "allow-create", "placeholder", "enable-object-type", "refresh-label", "disabled", "data-provider", "value-field", "search-field", "label-field", "ref-field", "limit", "value-object-id", "form-btn-enable", "label-template", "options-template", "user-state", "build-state", "onRemoteMethod", "onVisibleChange", "onChange"]);
}
const _c = /* @__PURE__ */ j(wc, [["render", Sc]]), Ai = /* @__PURE__ */ B({
  __name: "SdSelectPathData",
  props: {
    modelValue: null,
    disabled: {
      type: Boolean,
      default: !1
    },
    dataObject: {
      type: Object,
      default: {}
    },
    path: {
      type: String,
      default: ""
    },
    fixedOptions: {
      type: Object
    },
    groupField: {
      type: String,
      default: ""
    },
    valueField: {
      type: String,
      default: ""
    },
    labelField: {
      type: Array,
      default: []
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    sqlTag: {
      type: Boolean,
      default: !1
    },
    prefixProp: {
      type: String,
      default: ""
    },
    spaceChar: {
      type: String,
      default: "."
    },
    systemFieldAddon: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = e, l = De({
      checkAll: !1,
      indeterminate: !1,
      disableAction: !1,
      dataObjectMode: !0,
      onMounted: !1
    }), o = (_) => {
      a.multiple && (_ && _.length === 0 ? (l.checkAll = !1, l.indeterminate = !1) : _ && _.length === f.value.length ? (l.checkAll = !0, l.indeterminate = !1) : l.indeterminate = !0);
    }, i = t, s = Z({
      get() {
        return a.modelValue;
      },
      set(_) {
        i("update:modelValue", _);
      }
    });
    function u(_) {
      i("change", _);
    }
    function m(_) {
      l.indeterminate = !1, _ ? s.value = f.value.map(($) => $.value) : s.value = [];
    }
    xe(() => {
      c();
    }), at(
      () => a.dataObject,
      (_) => {
        c();
      },
      { deep: !1 }
    ), at(
      () => a.fixedOptions,
      (_) => {
        c();
      },
      { deep: !1 }
    );
    const f = q([]), c = () => {
      f.value = [];
      let _ = "", $ = "";
      if (a.fixedOptions && Object.keys(a.fixedOptions).length > 0) {
        if (f.value = P(a.fixedOptions), l.dataObjectMode = !1, a.systemFieldAddon && a.valueField && a.labelField.length > 0) {
          let g = [
            { value: "_id", label: "_id" },
            { value: "xparentx", label: "xparentx" },
            { value: "xsitex.code", label: "xsitex.code" },
            { value: "xsitex.name", label: "xsitex.name" },
            { value: "xunitx.code", label: "xunitx.code" },
            { value: "xunitx.name", label: "xunitx.name" },
            { value: "updated_by.id", label: "updated_by.id" },
            { value: "updated_by.name", label: "updated_by.name" },
            { value: "created_by.id", label: "created_by.id" },
            { value: "created_by.name", label: "created_by.name" },
            { value: "updated_at", label: "updated_at" },
            { value: "created_at", label: "created_at" },
            { value: "xrstatx", label: "xrstatx" }
          ];
          f.value = [...f.value, ...g];
        }
      } else if (l.dataObjectMode = !0, l.disableAction = Object.keys(a.dataObject).length === 0 && !!a.path, !l.disableAction)
        for (const g in a.dataObject) {
          const I = a.dataObject[g], F = pe(I, a.path);
          if (a.prefixProp) {
            const w = pe(I, a.prefixProp);
            _ = w || a.prefixProp, a.sqlTag && (_ = `\`${_}\``);
          }
          if (a.groupField) {
            const w = pe(I, a.groupField);
            $ = w ? "----- " + w + " -----" : "----- " + g + " -----";
          }
          let p = [];
          if (F && typeof F == "object")
            for (const w in F) {
              let S = F[w], N = S[a.valueField] ? S[a.valueField] : w;
              a.sqlTag && (N = `\`${N}\``), _ && (N = `${_}${a.spaceChar}${N}`);
              let y = [];
              for (const A of a.labelField) {
                const E = S[A] = S[A] ? S[A] : A;
                y.push(E);
              }
              let T = y.join(" ");
              if (a.labelTemplate !== "") {
                const A = Sl(S);
                T = ue(a.labelTemplate, A);
              }
              p.push({
                value: N,
                label: T
              });
            }
          if (a.systemFieldAddon && a.valueField && a.labelField.length > 0) {
            let w = [
              { value: "_id", label: "_id" },
              { value: "xparentx", label: "xparentx" },
              { value: "xsitex.code", label: "xsitex.code" },
              { value: "xsitex.name", label: "xsitex.name" },
              { value: "xunitx.code", label: "xunitx.code" },
              { value: "xunitx.name", label: "xunitx.name" },
              { value: "updated_by.id", label: "updated_by.id" },
              { value: "updated_by.name", label: "updated_by.name" },
              { value: "created_by.id", label: "created_by.id" },
              { value: "created_by.name", label: "created_by.name" },
              { value: "updated_at", label: "updated_at" },
              { value: "created_at", label: "created_at" },
              { value: "xrstatx", label: "xrstatx" }
            ];
            _ ? w = w.map((S) => a.sqlTag ? { value: `${_}${a.spaceChar}\`${S.value}\``, label: S.label } : { value: `${_}${a.spaceChar}${S.value}`, label: S.label }) : a.sqlTag && (w = w.map((S) => ({ value: `\`${S.value}\``, label: S.label }))), p = [...p, ...w];
          }
          a.groupField ? f.value.push({ label: $, options: p }) : f.value.push(...p);
        }
      if (a.multiple) {
        const g = s.value;
        g ? g && g.length === 0 ? (l.checkAll = !1, l.indeterminate = !1) : g && g.length === f.value.length ? (l.checkAll = !0, l.indeterminate = !1) : l.indeterminate = !0 : (l.checkAll = !1, l.indeterminate = !1);
      }
      return f;
    };
    return at(s, (_) => {
      o(_);
    }), (_, $) => {
      const g = ia, I = It, F = an, p = Dt;
      return n(), h(p, {
        modelValue: s.value,
        "onUpdate:modelValue": $[1] || ($[1] = (w) => s.value = w),
        placeholder: "Please select...",
        disabled: e.disabled || l.disableAction,
        filterable: !0,
        clearable: !0,
        "allow-create": e.allowCreate,
        onChange: u,
        multiple: e.multiple
      }, Je({
        default: r(() => [
          e.groupField ? (n(!0), v(L, { key: 0 }, G(f.value, (w) => (n(), h(F, {
            key: w.label,
            label: w.label
          }, {
            default: r(() => [
              (n(!0), v(L, null, G(w.options, (S) => (n(), h(I, {
                key: S.value,
                label: S.label,
                value: S.value
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 2
          }, 1032, ["label"]))), 128)) : (n(!0), v(L, { key: 1 }, G(f.value, (w) => (n(), h(I, {
            key: w.value,
            label: w.label,
            value: w.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 2
      }, [
        e.multiple ? {
          name: "header",
          fn: r(() => [
            d(g, {
              modelValue: l.checkAll,
              "onUpdate:modelValue": $[0] || ($[0] = (w) => l.checkAll = w),
              indeterminate: l.indeterminate,
              onChange: m
            }, {
              default: r(() => [...$[2] || ($[2] = [
                D(" Select All ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue", "indeterminate"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "allow-create", "multiple"]);
    };
  }
}), Fc = /* @__PURE__ */ B({
  __name: "SdFormSchemaForm",
  props: {
    joinerField: {},
    formDb: {},
    form_id: {},
    form_table: {},
    index: {},
    refGrid: {},
    initData: {},
    formLicense: {},
    cancelCallback: { type: Function }
  },
  setup(e) {
    const t = e, a = De({
      typeList: [
        { value: "Any", label: "Any" },
        { value: "String", label: "String" },
        { value: "Integer", label: "Integer" },
        { value: "Number", label: "Number" },
        // { value: 'Double', label: 'Double' },
        { value: "Boolean", label: "Boolean" },
        { value: "Array", label: "Array" },
        { value: "Object", label: "Object" },
        { value: "ObjectId", label: "ObjectId" },
        { value: "StringDate", label: "StringDate" },
        // { value: 'Date', label: 'Date' },
        // { value: 'Timestamp', label: 'Timestamp' },
        // { value: 'Binary', label: 'Binary' },
        { value: "String|Array", label: "String|Array" },
        { value: "Object|Array", label: "Object|Array" }
      ],
      fieldName: ""
    }), l = q(), o = q({
      fieldName: "",
      label: "",
      type: Ye.Any,
      hint: "",
      defaultValue: null,
      component: "custom-input",
      componentName: "Custom Input",
      hidden: !0,
      required: !1,
      readonly: !0,
      disabled: !0,
      valueFormat: null,
      format: null,
      multiple: !1,
      choiceType: null,
      joinerType: !1,
      refFormId: null,
      refField: null,
      refFormType: !1,
      subField: null,
      width: "",
      align: "left",
      sortable: !1,
      fixed: void 0,
      comment: "",
      widgetDisplay: "widget",
      wrapText: void 0,
      textType: void 0
    });
    function i() {
      t.cancelCallback && t.cancelCallback();
    }
    const s = (u) => {
      u && u.validate(async (m) => {
        m && (a.fieldName ? a.fieldName === o.value.fieldName ? (t.formDb.schema[o.value.fieldName] = o.value, i()) : t.formDb.schema[o.value.fieldName] ? O.warning("This field is already in the system.") : (t.formDb.schema[o.value.fieldName] = o.value, i()) : t.formDb.schema[o.value.fieldName] ? O.warning("This field is already in the system.") : (t.formDb.schema[o.value.fieldName] = o.value, i()));
      });
    };
    return xe(() => {
      o.value = {
        fieldName: "",
        label: "",
        type: Ye.Any,
        hint: "",
        defaultValue: null,
        component: "custom-input",
        componentName: "Custom Input",
        hidden: !0,
        required: !1,
        readonly: !0,
        disabled: !0,
        valueFormat: null,
        format: null,
        multiple: !1,
        choiceType: null,
        joinerType: !1,
        refFormId: null,
        refField: null,
        refFormType: !1,
        subField: null,
        width: "",
        align: "left",
        sortable: !1,
        fixed: void 0,
        comment: "",
        widgetDisplay: "widget",
        wrapText: void 0,
        textType: void 0
      }, t.initData && Object.keys(t.initData).length > 0 && (a.fieldName = t.initData.fieldName, o.value = { ...o.value, ...t.initData });
    }), (u, m) => {
      const f = Rt, c = Ie, _ = St, $ = Ai, g = ut, I = Ct, F = Nt, p = ie, w = wt;
      return n(), h(w, {
        ref_key: "schemaFormRef",
        ref: l,
        model: o.value,
        "label-position": "top",
        onKeyup: m[8] || (m[8] = wn(U((S) => s(l.value), ["prevent"]), ["enter"]))
      }, {
        default: r(() => [
          d(f, {
            title: "No effect on database",
            type: "warning",
            closable: !1,
            class: "mb-1"
          }),
          d(F, { gutter: 10 }, {
            default: r(() => [
              d(g, {
                md: 12,
                sm: 12,
                xs: 24
              }, {
                default: r(() => [
                  d(_, {
                    label: "Field Name",
                    prop: "fieldName",
                    required: ""
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.fieldName,
                        "onUpdate:modelValue": m[0] || (m[0] = (S) => o.value.fieldName = S),
                        type: "fieldName",
                        disabled: !!a.fieldName,
                        clearable: !0
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  d(_, {
                    label: "Type",
                    prop: "type",
                    required: ""
                  }, {
                    default: r(() => [
                      d($, {
                        modelValue: o.value.type,
                        "onUpdate:modelValue": m[1] || (m[1] = (S) => o.value.type = S),
                        "allow-create": !1,
                        placeholder: "Please Type...",
                        "fixed-options": a.typeList,
                        multiple: !1
                      }, null, 8, ["modelValue", "fixed-options"])
                    ]),
                    _: 1
                  }),
                  d(_, {
                    label: "Value Format",
                    prop: "valueFormat"
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.valueFormat,
                        "onUpdate:modelValue": m[2] || (m[2] = (S) => o.value.valueFormat = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              d(g, {
                md: 12,
                sm: 12,
                xs: 24
              }, {
                default: r(() => [
                  d(_, {
                    label: "Label",
                    prop: "label",
                    required: ""
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.label,
                        "onUpdate:modelValue": m[3] || (m[3] = (S) => o.value.label = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  d(_, {
                    label: "Multiple (*Type Array)",
                    prop: "multiple"
                  }, {
                    default: r(() => [
                      d(I, {
                        modelValue: o.value.multiple,
                        "onUpdate:modelValue": m[4] || (m[4] = (S) => o.value.multiple = S),
                        "active-text": "True"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  d(_, {
                    label: "Format",
                    prop: "format"
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.format,
                        "onUpdate:modelValue": m[5] || (m[5] = (S) => o.value.format = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(_, {
            label: "Hint",
            prop: "hint"
          }, {
            default: r(() => [
              d(c, {
                modelValue: o.value.hint,
                "onUpdate:modelValue": m[6] || (m[6] = (S) => o.value.hint = S),
                type: "text",
                clearable: !0
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          d(_, null, {
            default: r(() => [
              d(p, {
                type: "primary",
                onClick: m[7] || (m[7] = U((S) => s(l.value), ["prevent"]))
              }, {
                default: r(() => [...m[9] || (m[9] = [
                  D("Submit", -1)
                ])]),
                _: 1
              }),
              d(p, {
                onClick: U(i, ["prevent"])
              }, {
                default: r(() => [...m[10] || (m[10] = [
                  D("Close", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
}), kc = /* @__PURE__ */ B({
  __name: "SdSubSchema",
  props: {
    formDb: {},
    subSchema: {},
    parentField: {},
    enableAction: {}
  },
  setup(e) {
    const t = e, a = De({
      schemaDataList: [],
      preLoading: !1
    }), l = Z(() => (a.preLoading = !1, Object.values(t.subSchema)));
    xe(() => {
    });
    function o(i, s) {
      ve.prompt("Please input comment", "Edit Comment", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
      }).then(({ value: u }) => {
        i.comment = u;
      }).catch(() => {
      });
    }
    return (i, s) => {
      const u = ie, m = Qe, f = X("Link"), c = We, _ = X("Aim"), $ = na, g = ot, I = Ie, F = It, p = Dt, w = Ct, S = Ke, N = sa;
      return Ae((n(), h($, {
        data: l.value,
        style: { width: "100%" }
      }, {
        default: r(() => [
          e.enableAction ? (n(), h(m, {
            key: 0,
            fixed: "",
            label: "Actions",
            width: 220,
            align: "center"
          }, {
            default: r((y) => [
              d(u, {
                plain: "",
                type: "primary",
                size: "small",
                title: "Edit Comment",
                icon: "ChatDotSquare",
                onClick: U((T) => o(y.row, y.$index), ["prevent"])
              }, null, 8, ["onClick"])
            ]),
            _: 1
          })) : b("", !0),
          d(m, {
            fixed: "",
            prop: "fieldName",
            label: "Field Name",
            "min-width": 250
          }),
          d(m, {
            prop: "label",
            label: "Label",
            "min-width": 220
          }, {
            default: r((y) => [
              D(M(y.row.label) + " ", 1),
              y.row.joinerType ? (n(), h(c, { key: 0 }, {
                default: r(() => [
                  d(f)
                ]),
                _: 1
              })) : b("", !0),
              !y.row.joinerType && y.row.refFormType ? (n(), h(c, { key: 1 }, {
                default: r(() => [
                  d(_)
                ]),
                _: 1
              })) : b("", !0)
            ]),
            _: 1
          }),
          d(m, {
            prop: "defaultValue",
            label: "Default Value",
            "min-width": 150
          }),
          d(m, {
            prop: "type",
            label: "Type",
            width: "180"
          }),
          d(m, {
            prop: "componentName",
            label: "Component",
            width: "180"
          }, {
            default: r((y) => [
              D(M(y.row.componentName) + " ", 1),
              y.row.choiceType && e.formDb.data_list[e.parentField + "." + y.row.fieldName] ? (n(), h(g, {
                key: 0,
                width: 400,
                trigger: "click"
              }, {
                reference: r(() => [
                  d(u, {
                    size: "small",
                    plain: "",
                    circle: "",
                    icon: "View"
                  })
                ]),
                default: r(() => [
                  d($, {
                    data: e.formDb.data_list[e.parentField + "." + y.row.fieldName]
                  }, {
                    default: r(() => [
                      d(m, {
                        property: "value",
                        label: "Value"
                      }),
                      d(m, {
                        property: "label",
                        label: "Label"
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 2
              }, 1024)) : b("", !0)
            ]),
            _: 1
          }),
          e.enableAction ? (n(), v(L, { key: 1 }, [
            d(m, {
              prop: "width",
              label: "Width",
              "min-width": 100
            }, {
              default: r((y) => [
                d(I, {
                  modelValue: y.row.width,
                  "onUpdate:modelValue": (T) => y.row.width = T,
                  maxlength: "3",
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "align",
              label: "Align",
              "min-width": 110
            }, {
              default: r((y) => [
                d(p, {
                  modelValue: y.row.align,
                  "onUpdate:modelValue": (T) => y.row.align = T
                }, {
                  default: r(() => [
                    d(F, {
                      value: "left",
                      label: "Left"
                    }),
                    d(F, {
                      value: "center",
                      label: "Center"
                    }),
                    d(F, {
                      value: "right",
                      label: "Right"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "fixed",
              label: "Fixed",
              "min-width": 115
            }, {
              default: r((y) => [
                d(p, {
                  modelValue: y.row.fixed,
                  "onUpdate:modelValue": (T) => y.row.fixed = T
                }, {
                  default: r(() => [
                    d(F, {
                      value: "",
                      label: "Disable"
                    }),
                    d(F, {
                      value: "left",
                      label: "Left"
                    }),
                    d(F, {
                      value: "right",
                      label: "Right"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "widgetDisplay",
              label: "Display",
              "min-width": 115
            }, {
              default: r((y) => [
                d(p, {
                  modelValue: y.row.widgetDisplay,
                  "onUpdate:modelValue": (T) => y.row.widgetDisplay = T
                }, {
                  default: r(() => [
                    d(F, {
                      value: "widget",
                      label: "Widget"
                    }),
                    d(F, {
                      value: "text",
                      label: "Text"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "wrapText",
              label: "Wrap",
              "min-width": 90
            }, {
              default: r((y) => [
                d(I, {
                  modelValue: y.row.wrapText,
                  "onUpdate:modelValue": (T) => y.row.wrapText = T,
                  maxlength: "2",
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "textType",
              label: "Text Type",
              "min-width": 120,
              align: "center"
            }, {
              default: r((y) => [
                d(p, {
                  modelValue: y.row.textType,
                  "onUpdate:modelValue": (T) => y.row.textType = T
                }, {
                  default: r(() => [
                    d(F, {
                      value: "",
                      label: "Default"
                    }),
                    d(F, {
                      value: "primary",
                      label: "primary"
                    }),
                    d(F, {
                      value: "success",
                      label: "success"
                    }),
                    d(F, {
                      value: "info",
                      label: "info"
                    }),
                    d(F, {
                      value: "warning",
                      label: "warning"
                    }),
                    d(F, {
                      value: "danger",
                      label: "danger"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "sortable",
              label: "Allow Sort",
              "min-width": 110
            }, {
              default: r((y) => [
                d(w, {
                  modelValue: y.row.sortable,
                  "onUpdate:modelValue": (T) => y.row.sortable = T
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            })
          ], 64)) : b("", !0),
          d(m, {
            prop: "hint",
            label: "Hint",
            "min-width": 200
          }),
          d(m, {
            prop: "format",
            label: "Format",
            width: "200"
          }),
          d(m, {
            prop: "required",
            label: "Required",
            width: "90",
            align: "center"
          }, {
            default: r((y) => [
              y.row.required ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[0] || (s[0] = [
                  D("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[1] || (s[1] = [
                  D("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "hidden",
            label: "Hidden",
            width: "90",
            align: "center"
          }, {
            default: r((y) => [
              y.row.hidden ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[2] || (s[2] = [
                  D("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[3] || (s[3] = [
                  D("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "readonly",
            label: "Readonly",
            width: "90",
            align: "center"
          }, {
            default: r((y) => [
              y.row.readonly ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[4] || (s[4] = [
                  D("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[5] || (s[5] = [
                  D("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "disabled",
            label: "Disabled",
            width: "90",
            align: "center"
          }, {
            default: r((y) => [
              y.row.disabled ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[6] || (s[6] = [
                  D("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[7] || (s[7] = [
                  D("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "choiceType",
            label: "Choice Type",
            width: "110",
            align: "center"
          }, {
            default: r((y) => [
              y.row.choiceType ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[8] || (s[8] = [
                  D("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[9] || (s[9] = [
                  D("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "comment",
            label: "comment",
            "min-width": 150
          })
        ]),
        _: 1
      }, 8, ["data"])), [
        [N, a.preLoading]
      ]);
    };
  }
}), Cc = Dr();
async function Dc(e) {
  try {
    await Cc.toClipboard(e), O({
      message: "Copied to clipboard",
      type: "success"
    });
  } catch (t) {
    console.error(t);
  }
}
const Ic = { key: 3 }, $c = { class: "items-box" }, Tc = { class: "opt-item" }, Pc = { class: "dialog-footer" }, Mc = { key: 4 }, Vc = { class: "dialog-footer" }, Ac = { key: 5 }, Ec = { class: "dialog-footer" }, Oc = { key: 6 }, Lc = /* @__PURE__ */ B({
  __name: "SdFormSchema",
  props: {
    joinerField: {},
    formDb: {},
    enableAction: {},
    form_id: {},
    form_table: {},
    versionDescription: {},
    index: {},
    refGrid: {},
    formLicense: {},
    autoSave: { type: Function },
    userState: {}
  },
  setup(e) {
    const t = e, a = De({
      schemaDataList: [],
      preLoading: !1,
      showPopupJoiner: !1,
      formSelect: {},
      subSchema: [],
      defaultJoiner: P(t.joinerField),
      showDataDicDialogFlag: !1,
      showSchemaFlag: !1,
      aname: "{{attribute_name}}",
      formDataDic: {},
      popupWidthParent: "70%",
      popupWidthDic: "80%",
      isDark: de(),
      popSubSchema: {},
      versionDescription: t.versionDescription,
      activeCommt: "0",
      activeNumber: "0",
      isInsert: !0,
      oldParentField: t.joinerField.field_name,
      showSchemaAddFlag: !1,
      initSchema: {},
      parentField: ""
    }), l = q();
    function o() {
      a.initSchema = {}, a.showSchemaAddFlag = !0;
    }
    function i(z, k) {
      a.initSchema = z, a.showSchemaAddFlag = !0;
    }
    function s() {
      a.initSchema = {}, a.showSchemaAddFlag = !1;
    }
    function u(z, k) {
      a.popSubSchema = z.subField, a.parentField = z.fieldName, a.showSchemaFlag = !0;
    }
    new Promise(function(z, k) {
      a.preLoading = !0, z(Object.values(t.formDb.schema));
    });
    const m = t.userState, f = Z(() => t.joinerField.form_id && t.joinerField.form_id.label ? t.joinerField.form_id.label ? t.joinerField.form_id.label : t.joinerField.form_id : "");
    Z({
      get() {
        return t.joinerField.field_name;
      },
      set(z) {
        z.match(/^[a-z][a-z0-9_]+$/) ? t.joinerField.field_name = z : O.warning("Variables must be in English or numbers only and do not contain spaces.");
      }
    });
    const c = Z(() => t.joinerField && t.joinerField.label_fields ? t.joinerField.label_fields.join(", ") : "");
    Z(() => a.formSelect && a.formSelect.form_name ? a.formSelect.form_name : "");
    const _ = Z(() => t.joinerField && t.joinerField.search_fields ? t.joinerField.search_fields.join(", ") : ""), $ = Z(() => t.joinerField && t.joinerField.ref_fields ? t.joinerField.ref_fields.join(", ") : ""), g = Z(() => (a.preLoading = !1, Object.values(t.formDb.schema)));
    at(
      () => t.form_id,
      async (z, k) => {
        z != k && t.joinerField.form_id && t.joinerField.form_id.value && w(t.joinerField.form_id.value);
      },
      { deep: !0 }
    );
    let I;
    Wo(() => I?.()), xe(() => {
      a.popupWidthParent = le("70%"), a.popupWidthDic = le("80%"), I = Me(async () => {
        la(() => {
          a.popupWidthParent = le("70%"), a.popupWidthDic = le("80%");
        });
      }), t.joinerField.form_id && t.joinerField.form_id.value && w(t.joinerField.form_id.value), t.joinerField.field_name === "" && (t.joinerField.field_name = "parent_id"), t.joinerField.joiner_variable === "" && (t.joinerField.joiner_variable = "_id"), t.joinerField.joiner_label === "" && (t.joinerField.joiner_label = "Parent"), a.isInsert = !t.joinerField.joiner_enable;
    });
    const F = () => {
      t.joinerField.order_by.push({
        column: "",
        sort: ye.ASC
      });
    }, p = (z, k) => {
      t.joinerField.order_by.splice(k, 1);
    }, w = (z) => {
      if (z !== "") {
        const k = {
          providerId: "getsdform-all",
          providerType: me.SYS,
          params: { form_license: t.formLicense },
          options: {
            fileterObjectId: ["_id"],
            fileter: { _id: [z] }
          }
        };
        m.crudGetOne(
          { sdProvider: k },
          (Y) => {
            S(t.joinerField.form_id, Y.data);
          },
          () => {
            S(t.joinerField.form_id, null);
          }
        );
      }
    }, S = (z, k) => {
      if (k)
        if (k.dataid = k._id, a.formSelect = P(k), a.formDataDic = P(k), a.subSchema = [], a.formSelect) {
          if (t.joinerField.form_parent = a.formSelect._id, a.formSelect.joiner_field && a.formSelect.joiner_field.joiner_enable && (t.joinerField.form_parent = a.formSelect.joiner_field.form_parent), (t.joinerField.joiner_label == "" || t.joinerField.joiner_label == "Parent") && (t.joinerField.joiner_label = a.formSelect.form_name), a.formSelect.form_db && a.formSelect.form_db.schema)
            for (const Y in a.formSelect.form_db.schema) {
              let J = a.formSelect.form_db.schema[Y];
              a.subSchema.push({
                value: J.fieldName,
                label: `[ ${J.fieldName} ] ` + J.label
              });
            }
          else
            a.subSchema = [];
          if (a.formSelect.joiner_field && a.formSelect.joiner_field.form_id && a.formSelect.joiner_field.joiner_enable) {
            const Y = P(a.formSelect.joiner_field.form_id), J = P(a.formSelect.joiner_field.ref_form);
            let Re = 1, rt = {};
            if (J) {
              for (const ht in J)
                Re++;
              rt = {
                [`xtbxlv${Re}_xfx_id`]: Y.value,
                ...J
              };
            } else
              rt = {
                [`xtbxlv${Re}_xfx_id`]: Y.value
              };
            t.joinerField.ref_form = P(rt);
          }
        } else
          a.subSchema = [];
      else
        a.formSelect = null, a.subSchema = [];
    };
    function N() {
      t.refGrid && t.index !== void 0 && t.refGrid.rawData[t.index].form_db && (t.refGrid.rawData[t.index].form_db.schema = t.formDb.schema, t.refGrid.rawData[t.index].form_db.index = t.formDb.index);
    }
    function y() {
      t.refGrid && t.index !== void 0 && t.refGrid.rawData[t.index].joiner_field && (t.refGrid.rawData[t.index].joiner_field = t.joinerField, t.refGrid.rawData[t.index].form_db.schema = t.formDb.schema);
    }
    function T(z, k) {
      if (k && z !== "") {
        let Y = {
          providerId: "getsdform-one",
          providerType: me.SYS,
          params: {
            id: z
          }
        };
        m.crudGetOne(
          { sdProvider: Y },
          (J) => {
            a.formDataDic = P(J.data), a.showDataDicDialogFlag = !0;
          },
          () => {
            a.formDataDic = P(a.formSelect);
          }
        );
      } else
        a.formDataDic = P(a.formSelect), a.showDataDicDialogFlag = !0;
    }
    function A() {
      a.showPopupJoiner = !0;
    }
    function E() {
      if (t.joinerField.form_id && t.joinerField.form_id.value) {
        W();
        for (const z in t.joinerField.form_id)
          if (Object.prototype.hasOwnProperty.call(t.joinerField.form_id, z)) {
            const k = t.joinerField.form_id[z];
            let Y = t.joinerField.field_name + "." + z;
            if (z == "value")
              t.formDb.schema[Y] = {
                fieldName: Y,
                label: t.joinerField.joiner_label,
                defaultValue: null,
                component: "parent-input",
                componentName: "Parent Input",
                type: Ye.ObjectId,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: t.joinerField.joiner_hint,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: k,
                refField: t.joinerField.joiner_variable,
                refFormType: !1,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            else if (z == "label")
              t.formDb.schema[Y] = {
                fieldName: Y,
                label: t.joinerField.joiner_label,
                defaultValue: null,
                component: "custom-input",
                componentName: "Custom Input",
                type: Ye.String,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: null,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: t.joinerField.form_id.value,
                refField: t.joinerField.joiner_variable,
                refFormType: !1,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            else if (z.search(/xtbxlv/g) !== -1) {
              let J = z.split("xfx"), Re = z.split("lv"), rt = "0";
              if (Re.length > 1 && Re[1]) {
                const ht = Re[1].split("_");
                ht[0] && (rt = ht[0]);
              }
              t.formDb.schema[Y] = {
                fieldName: Y,
                label: "refID LV" + rt,
                defaultValue: null,
                component: "custom-input",
                componentName: "Custom Input",
                type: Ye.ObjectId,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: null,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: k,
                refField: J[1],
                refFormType: !0,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            }
            t.formDb.schema[Y] && a.schemaDataList.push(t.formDb.schema[Y]);
          }
        t.joinerField.ref_fields && t.joinerField.ref_fields.forEach((z) => {
          const k = t.joinerField.field_name + "." + z;
          if (ih.includes(z))
            t.formDb.schema[k] = {
              fieldName: k,
              label: k,
              defaultValue: null,
              component: "custom-input",
              componentName: "Custom Input",
              type: Ci(a.formSelect, z),
              hidden: !0,
              required: !1,
              readonly: !0,
              disabled: !0,
              hint: "",
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: null,
              joinerType: !0,
              refFormId: t.joinerField.form_id.value,
              refField: z,
              refFormType: !1,
              subField: null,
              width: "",
              align: "left",
              sortable: !1,
              fixed: void 0,
              comment: "",
              widgetDisplay: "widget",
              wrapText: void 0,
              textType: void 0
            }, t.formDb.schema[k] && a.schemaDataList.push(t.formDb.schema[k]);
          else if (a.formSelect.form_db && a.formSelect.form_db.schema)
            for (const Y in a.formSelect.form_db.schema) {
              let J = a.formSelect.form_db.schema[Y];
              if (J.fieldName === z) {
                t.formDb.schema[k] = {
                  fieldName: k,
                  label: J.label,
                  defaultValue: J.defaultValue,
                  component: "custom-input",
                  componentName: "Custom Input",
                  type: J.type,
                  hidden: J.hidden,
                  required: J.required,
                  readonly: J.readonly,
                  disabled: J.disabled,
                  hint: J.hint,
                  valueFormat: J.valueFormat,
                  format: J.format,
                  multiple: J.multiple,
                  choiceType: J.choiceType,
                  joinerType: !0,
                  refFormId: t.joinerField.form_id.value,
                  refField: z,
                  refFormType: !1,
                  subField: null,
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: void 0,
                  comment: "",
                  widgetDisplay: "widget",
                  wrapText: void 0,
                  textType: void 0,
                  inputOptions: J.inputOptions || {}
                }, t.formDb.schema[k] && a.schemaDataList.push(t.formDb.schema[k]);
                break;
              }
            }
        });
      }
    }
    function W() {
      a.schemaDataList = a.schemaDataList.filter((z) => z.joinerType !== !0);
      for (const z in t.formDb.schema)
        t.formDb.schema[z].joinerType === !0 && (delete t.formDb.schema[z], a.isInsert = !1);
    }
    function oe(z) {
      z && z.validate(async (k) => {
        if (k) {
          if (t.joinerField.joiner_enable = !0, a.defaultJoiner = P(t.joinerField), E(), y(), !a.isInsert && a.oldParentField !== t.joinerField.field_name) {
            const Y = {
              [a.oldParentField]: t.joinerField.field_name
            };
            await m.schemaRename(
              {
                rename: Y,
                form_table: t.form_table
              },
              (J) => {
                a.oldParentField = t.joinerField.field_name, t.autoSave && t.autoSave();
              },
              () => {
                O.warning("Schema update error occurred");
              }
            );
          }
          a.showPopupJoiner = !1;
        }
      });
    }
    function K() {
      ve.confirm("Are you going to disable the joiner?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        t.joinerField.joiner_enable = !1, W(), y();
      }).catch(() => {
      });
    }
    function Ue(z) {
      z && (z.resetFields(), t.joinerField.form_parent = P(a.defaultJoiner.form_parent), t.joinerField.joiner_enable = P(a.defaultJoiner.joiner_enable), t.joinerField.joiner_label = P(a.defaultJoiner.joiner_label), t.joinerField.joiner_variable = P(a.defaultJoiner.joiner_variable), t.joinerField.form_id = P(a.defaultJoiner.form_id), t.joinerField.field_name = P(a.defaultJoiner.field_name), t.joinerField.label_fields = P(a.defaultJoiner.label_fields), t.joinerField.label_template = P(a.defaultJoiner.label_template), t.joinerField.search_fields = P(a.defaultJoiner.search_fields), t.joinerField.ref_fields = P(a.defaultJoiner.ref_fields), t.joinerField.sql_filter = P(a.defaultJoiner.sql_filter), t.joinerField.order_by = P(a.defaultJoiner.order_by), t.joinerField.ref_form = P(a.defaultJoiner.ref_form), t.joinerField.form_id && t.joinerField.form_id.value && w(t.joinerField.form_id.value));
    }
    function Ge(z, k) {
      ve.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        z.fieldName && t.formDb.schema[z.fieldName] && delete t.formDb.schema[z.fieldName], a.schemaDataList.splice(k, 1);
      }).catch(() => {
      });
    }
    function st(z, k) {
      ve.confirm("Are you sure you want to create index?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        m.schemaCreateIndex(
          { form_id: t.form_id, form_table: t.form_table, form_index: t.formDb.index, indexField: z.fieldName, indexType: 1 },
          (Y) => {
            Y.indexName && (t.formDb.index[z.fieldName] = Y.indexName, N());
          }
        );
      }).catch(() => {
      });
    }
    function Le(z, k) {
      ve.confirm("Are you sure you want to drop index?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        m.schemaDropIndex({ indexField: z.fieldName, form_id: t.form_id, form_table: t.form_table, form_index: t.formDb.index }, () => {
          delete t.formDb.index[z.fieldName], N();
        });
      }).catch(() => {
      });
    }
    function je(z, k) {
      ve.prompt("Please input comment", "Edit Comment", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
      }).then(({ value: Y }) => {
        z.comment = Y;
      }).catch(() => {
      });
    }
    return (z, k) => {
      const Y = ie, J = Bo, Re = Lo, rt = Rt, ht = we, $e = Ke, ne = ut, ft = Nt, ct = Ut, ze = Ie, Qa = jt, Dl = ot, Il = on, $l = ln, se = Qe, Ri = X("Link"), ga = We, zi = X("Aim"), Tl = na, Te = It, Gt = Dt, Mt = Ct, Hi = xa, qi = kl, _e = St, Za = Ai, Pl = X("InfoFilled"), Wi = Ba, Ki = Oo, xi = X("draggable"), Gi = wt, ya = Ce, Yi = X("sd-form-schema", !0), Ji = kc, Xi = Fc, Qi = sa;
      return n(), v(L, null, [
        d(Re, {
          title: "Parent Form",
          column: 3,
          size: "default",
          border: "",
          style: { "margin-bottom": "15px" }
        }, Je({
          default: r(() => [
            e.joinerField.joiner_enable ? (n(), h(J, { key: 0 }, {
              label: r(() => [
                k[31] || (k[31] = D(" Parent Form ", -1)),
                e.joinerField.joiner_enable && e.joinerField.form_id && e.joinerField.form_id.value ? (n(), h(Y, {
                  key: 0,
                  type: "warning",
                  size: "small",
                  circle: "",
                  plain: "",
                  icon: "Link",
                  onClick: k[0] || (k[0] = U((V) => a.showDataDicDialogFlag = !0, ["prevent"]))
                })) : b("", !0)
              ]),
              default: r(() => [
                D(" " + M(f.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(J, { key: 1 }, {
              label: r(() => [...k[32] || (k[32] = [
                D("Field Name", -1)
              ])]),
              default: r(() => [
                D(" " + M(e.joinerField.field_name) + " -> ( " + M(e.joinerField.joiner_variable) + " ) ", 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(J, { key: 2 }, {
              label: r(() => [...k[33] || (k[33] = [
                D("Parent Label", -1)
              ])]),
              default: r(() => [
                D(" " + M(e.joinerField.joiner_label), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(J, { key: 3 }, {
              label: r(() => [...k[34] || (k[34] = [
                D("Label Fields", -1)
              ])]),
              default: r(() => [
                D(" " + M(c.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(J, { key: 4 }, {
              label: r(() => [...k[35] || (k[35] = [
                D("Searching Fields", -1)
              ])]),
              default: r(() => [
                D(" " + M(_.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(J, { key: 5 }, {
              label: r(() => [...k[36] || (k[36] = [
                D("Reference Fields", -1)
              ])]),
              default: r(() => [
                D(" " + M($.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable && e.joinerField.label_template ? (n(), h(J, { key: 6 }, {
              label: r(() => [...k[37] || (k[37] = [
                D("Template Label", -1)
              ])]),
              default: r(() => [
                D(" " + M(e.joinerField.label_template), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable && e.joinerField.sql_filter ? (n(), h(J, { key: 7 }, {
              label: r(() => [...k[38] || (k[38] = [
                D("SQL Filter", -1)
              ])]),
              default: r(() => [
                D(" " + M(e.joinerField.sql_filter), 1)
              ]),
              _: 1
            })) : b("", !0)
          ]),
          _: 2
        }, [
          e.enableAction ? {
            name: "extra",
            fn: r(() => [
              e.joinerField.joiner_enable ? b("", !0) : (n(), h(Y, {
                key: 0,
                type: "success",
                plain: "",
                icon: "Aim",
                onClick: U(A, ["prevent"])
              }, {
                default: r(() => [...k[28] || (k[28] = [
                  D("Join Parent Form", -1)
                ])]),
                _: 1
              })),
              e.joinerField.joiner_enable ? (n(), h(Y, {
                key: 1,
                type: "primary",
                plain: "",
                icon: "Edit",
                onClick: U(A, ["prevent"])
              }, {
                default: r(() => [...k[29] || (k[29] = [
                  D("Edit Parent Form", -1)
                ])]),
                _: 1
              })) : b("", !0),
              e.joinerField.joiner_enable ? (n(), h(Y, {
                key: 2,
                type: "danger",
                plain: "",
                icon: "Delete",
                onClick: U(K, ["prevent"])
              }, {
                default: r(() => [...k[30] || (k[30] = [
                  D("Disable", -1)
                ])]),
                _: 1
              })) : b("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.joinerField.joiner_enable ? b("", !0) : (n(), h(rt, {
          key: 0,
          title: "The parent form has not been created yet.",
          type: "info",
          "show-icon": "",
          closable: !1,
          style: { "margin-bottom": "15px" }
        })),
        Object.keys(e.formDb.autonum).length > 0 ? (n(), h($l, {
          key: 1,
          modelValue: a.activeNumber,
          "onUpdate:modelValue": k[1] || (k[1] = (V) => a.activeNumber = V)
        }, {
          default: r(() => [
            d(Il, {
              title: "Auto Number ( Manage Count Number )",
              name: "1"
            }, {
              title: r(() => [
                d($e, {
                  class: "mx-1",
                  type: "primary"
                }, {
                  default: r(() => [
                    d(ht, { "icon-name": "addon-random" }),
                    k[39] || (k[39] = D(" Auto number ( Manage Count Number )", -1))
                  ]),
                  _: 1
                })
              ]),
              default: r(() => [
                C("div", null, [
                  d(ft, { gutter: 10 }, {
                    default: r(() => [
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[40] || (k[40] = [
                          D("Field", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[41] || (k[41] = [
                          D("PerDay", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[42] || (k[42] = [
                          D("BySite", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[43] || (k[43] = [
                          D("Prefix", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[44] || (k[44] = [
                          D("Suffix", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[45] || (k[45] = [
                          D("Increment", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d($e, {
                            class: "mx-1",
                            type: "success"
                          }, {
                            default: r(() => [...k[46] || (k[46] = [
                              D(" Count By Site", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, { span: 5 }, {
                        default: r(() => [
                          d($e, {
                            class: "mx-1",
                            type: "success"
                          }, {
                            default: r(() => [...k[47] || (k[47] = [
                              D(" Count Total", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  (n(!0), v(L, null, G(e.formDb.autonum, (V) => (n(), h(ft, {
                    gutter: 10,
                    style: { "margin-bottom": "10px" }
                  }, {
                    default: r(() => [
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          d(ct, {
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [
                              D(M(V.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          V.perDay ? (n(), h(ct, {
                            key: 0,
                            type: "primary",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[48] || (k[48] = [
                              D("True", -1)
                            ])]),
                            _: 1
                          })) : (n(), h(ct, {
                            key: 1,
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[49] || (k[49] = [
                              D("False", -1)
                            ])]),
                            _: 1
                          }))
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          V.bySite ? (n(), h(ct, {
                            key: 0,
                            type: "primary",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[50] || (k[50] = [
                              D("True", -1)
                            ])]),
                            _: 1
                          })) : (n(), h(ct, {
                            key: 1,
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[51] || (k[51] = [
                              D("False", -1)
                            ])]),
                            _: 1
                          }))
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(ze, {
                            modelValue: V.prefix,
                            "onUpdate:modelValue": (ee) => V.prefix = ee,
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(ze, {
                            modelValue: V.suffix,
                            "onUpdate:modelValue": (ee) => V.suffix = ee,
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(Qa, {
                            modelValue: V.increment,
                            "onUpdate:modelValue": (ee) => V.increment = ee,
                            min: 1,
                            "controls-position": "right",
                            style: { width: "100%" },
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(Dl, {
                            width: 400,
                            trigger: "click"
                          }, {
                            reference: r(() => [
                              d(Y, { style: { width: "100%" } }, {
                                default: r(() => [...k[52] || (k[52] = [
                                  D("Edit Count", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(ge(Yo), {
                                modelValue: V.countSite,
                                "onUpdate:modelValue": (ee) => V.countSite = ee,
                                "main-menu-bar": !1,
                                mode: ge(Jo).tree,
                                style: { width: "100%" },
                                class: x(a.isDark ? "jse-theme-dark" : "")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "mode", "class"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 5 }, {
                        default: r(() => [
                          d(Qa, {
                            modelValue: V.count,
                            "onUpdate:modelValue": (ee) => V.count = ee,
                            min: 1,
                            "controls-position": "right",
                            style: { width: "100%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : b("", !0),
        Ae((n(), h(Tl, {
          data: g.value,
          style: { width: "100%" }
        }, {
          default: r(() => [
            e.enableAction ? (n(), h(se, {
              key: 0,
              fixed: "",
              label: "Actions",
              width: 260,
              align: "left"
            }, {
              header: r(() => [
                k[54] || (k[54] = D(" Actions ", -1)),
                d(Y, {
                  plain: "",
                  type: "success",
                  size: "small",
                  title: "Add",
                  icon: "Plus",
                  onClick: U(o, ["prevent"])
                }, {
                  default: r(() => [...k[53] || (k[53] = [
                    D(" Add Schema ", -1)
                  ])]),
                  _: 1
                })
              ]),
              default: r((V) => [
                d(Y, {
                  plain: "",
                  type: "info",
                  size: "small",
                  title: "Edit Comment",
                  icon: "ChatDotSquare",
                  onClick: U((ee) => je(V.row, V.$index), ["prevent"])
                }, null, 8, ["onClick"]),
                e.formDb.index && e.formDb.index[V.row.fieldName] ? (n(), h(Y, {
                  key: 0,
                  plain: "",
                  type: "warning",
                  size: "small",
                  onClick: U((ee) => Le(V.row, V.$index), ["prevent"])
                }, {
                  default: r(() => [...k[55] || (k[55] = [
                    D(" Drop Index ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])) : (n(), h(Y, {
                  key: 1,
                  plain: "",
                  type: "success",
                  size: "small",
                  onClick: U((ee) => st(V.row, V.$index), ["prevent"])
                }, {
                  default: r(() => [...k[56] || (k[56] = [
                    D(" Create Index ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])),
                d(Y, {
                  plain: "",
                  type: "danger",
                  size: "small",
                  title: "Remove",
                  icon: "Delete",
                  onClick: U((ee) => Ge(V.row, V.$index), ["prevent"])
                }, null, 8, ["onClick"]),
                V.row.component === "custom-input" || V.row.joinerType ? (n(), h(Y, {
                  key: 2,
                  plain: "",
                  type: "primary",
                  size: "small",
                  title: "Edit",
                  icon: "Edit",
                  onClick: U((ee) => i(V.row, V.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            })) : b("", !0),
            d(se, {
              fixed: "",
              prop: "fieldName",
              label: "Field Name",
              "min-width": 250
            }),
            d(se, {
              prop: "label",
              label: "Label",
              "min-width": 220
            }, {
              default: r((V) => [
                D(M(V.row.label) + " ", 1),
                V.row.joinerType ? (n(), h(ga, { key: 0 }, {
                  default: r(() => [
                    d(Ri)
                  ]),
                  _: 1
                })) : b("", !0),
                !V.row.joinerType && V.row.refFormType ? (n(), h(ga, { key: 1 }, {
                  default: r(() => [
                    d(zi)
                  ]),
                  _: 1
                })) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "defaultValue",
              label: "Default Value",
              "min-width": 150
            }),
            d(se, {
              prop: "type",
              label: "Type",
              width: "180"
            }),
            d(se, {
              prop: "componentName",
              label: "Component",
              width: "180"
            }, {
              default: r((V) => [
                D(M(V.row.componentName) + " ", 1),
                V.row.choiceType && e.formDb.data_list[V.row.fieldName] ? (n(), h(Dl, {
                  key: 0,
                  width: 400,
                  trigger: "click"
                }, {
                  reference: r(() => [
                    d(Y, {
                      size: "small",
                      plain: "",
                      circle: "",
                      icon: "View"
                    })
                  ]),
                  default: r(() => [
                    d(Tl, {
                      data: e.formDb.data_list[V.row.fieldName]
                    }, {
                      default: r(() => [
                        d(se, {
                          property: "value",
                          label: "Value"
                        }),
                        d(se, {
                          property: "label",
                          label: "Label"
                        })
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ]),
                  _: 2
                }, 1024)) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "refField",
              label: "Parent Field",
              "min-width": 200
            }, {
              default: r((V) => [
                V.row.refField ? (n(), h(Y, {
                  key: 0,
                  type: "warning",
                  size: "small",
                  plain: "",
                  icon: "View",
                  onClick: U((ee) => T(
                    V.row.refFormId,
                    !!V.row.refField && !!V.row.joinerType && !!V.row.refFormType || !!V.row.refField && !V.row.joinerType && !!V.row.refFormType
                  ), ["prevent"])
                }, {
                  default: r(() => [
                    D(M(V.row.refField), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "subField",
              label: "Sub Fields",
              "min-width": 110,
              align: "center"
            }, {
              default: r((V) => [
                V.row.subField ? (n(), h(Y, {
                  key: 0,
                  size: "small",
                  plain: "",
                  circle: "",
                  onClick: U((ee) => u(V.row, V.$index), ["prevent"])
                }, {
                  default: r(() => [
                    d(ht, { "icon-name": "table" })
                  ]),
                  _: 1
                }, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }),
            e.enableAction ? (n(), v(L, { key: 1 }, [
              d(se, {
                prop: "width",
                label: "Width",
                "min-width": 100
              }, {
                default: r((V) => [
                  d(ze, {
                    modelValue: V.row.width,
                    "onUpdate:modelValue": (ee) => V.row.width = ee,
                    maxlength: "3",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "align",
                label: "Align",
                "min-width": 110
              }, {
                default: r((V) => [
                  d(Gt, {
                    modelValue: V.row.align,
                    "onUpdate:modelValue": (ee) => V.row.align = ee
                  }, {
                    default: r(() => [
                      d(Te, {
                        value: "left",
                        label: "Left"
                      }),
                      d(Te, {
                        value: "center",
                        label: "Center"
                      }),
                      d(Te, {
                        value: "right",
                        label: "Right"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "fixed",
                label: "Fixed",
                "min-width": 115
              }, {
                default: r((V) => [
                  d(Gt, {
                    modelValue: V.row.fixed,
                    "onUpdate:modelValue": (ee) => V.row.fixed = ee
                  }, {
                    default: r(() => [
                      d(Te, {
                        value: "",
                        label: "Disable"
                      }),
                      d(Te, {
                        value: "left",
                        label: "Left"
                      }),
                      d(Te, {
                        value: "right",
                        label: "Right"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "widgetDisplay",
                label: "Display",
                "min-width": 115
              }, {
                default: r((V) => [
                  d(Gt, {
                    modelValue: V.row.widgetDisplay,
                    "onUpdate:modelValue": (ee) => V.row.widgetDisplay = ee
                  }, {
                    default: r(() => [
                      d(Te, {
                        value: "widget",
                        label: "Widget"
                      }),
                      d(Te, {
                        value: "text",
                        label: "Text"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "wrapText",
                label: "Wrap",
                "min-width": 90
              }, {
                default: r((V) => [
                  d(ze, {
                    modelValue: V.row.wrapText,
                    "onUpdate:modelValue": (ee) => V.row.wrapText = ee,
                    maxlength: "2",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "textType",
                label: "Text Type",
                "min-width": 120,
                align: "center"
              }, {
                default: r((V) => [
                  d(Gt, {
                    modelValue: V.row.textType,
                    "onUpdate:modelValue": (ee) => V.row.textType = ee
                  }, {
                    default: r(() => [
                      d(Te, {
                        value: "",
                        label: "Default"
                      }),
                      d(Te, {
                        value: "primary",
                        label: "primary"
                      }),
                      d(Te, {
                        value: "success",
                        label: "success"
                      }),
                      d(Te, {
                        value: "info",
                        label: "info"
                      }),
                      d(Te, {
                        value: "warning",
                        label: "warning"
                      }),
                      d(Te, {
                        value: "danger",
                        label: "danger"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "sortable",
                label: "Allow Sort",
                "min-width": 110
              }, {
                default: r((V) => [
                  d(Mt, {
                    modelValue: V.row.sortable,
                    "onUpdate:modelValue": (ee) => V.row.sortable = ee
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "filters",
                label: "Filters",
                "min-width": 110
              }, {
                default: r((V) => [
                  e.formDb.data_list[V.row.fieldName] || V.row.component == "switch-input" ? (n(), h(Mt, {
                    key: 0,
                    modelValue: V.row.filters,
                    "onUpdate:modelValue": (ee) => V.row.filters = ee
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : b("", !0)
                ]),
                _: 1
              })
            ], 64)) : b("", !0),
            d(se, {
              prop: "hint",
              label: "Hint",
              "min-width": 200
            }),
            d(se, {
              prop: "format",
              label: "Format",
              width: "200"
            }),
            d(se, {
              prop: "required",
              label: "Required",
              width: "90",
              align: "center"
            }, {
              default: r((V) => [
                V.row.required ? (n(), h($e, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[57] || (k[57] = [
                    D("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h($e, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[58] || (k[58] = [
                    D("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "hidden",
              label: "Hidden",
              width: "90",
              align: "center"
            }, {
              default: r((V) => [
                V.row.hidden ? (n(), h($e, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[59] || (k[59] = [
                    D("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h($e, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[60] || (k[60] = [
                    D("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "readonly",
              label: "Readonly",
              width: "90",
              align: "center"
            }, {
              default: r((V) => [
                V.row.readonly ? (n(), h($e, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[61] || (k[61] = [
                    D("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h($e, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[62] || (k[62] = [
                    D("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "disabled",
              label: "Disabled",
              width: "90",
              align: "center"
            }, {
              default: r((V) => [
                V.row.disabled ? (n(), h($e, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[63] || (k[63] = [
                    D("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h($e, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[64] || (k[64] = [
                    D("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "choiceType",
              label: "Choice Type",
              width: "110",
              align: "center"
            }, {
              default: r((V) => [
                V.row.choiceType ? (n(), h($e, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[65] || (k[65] = [
                    D("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h($e, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[66] || (k[66] = [
                    D("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "index",
              label: "Index",
              width: "120",
              align: "center"
            }, {
              default: r((V) => [
                D(M(e.formDb.index[V.row.fieldName] ? e.formDb.index[V.row.fieldName] : ""), 1)
              ]),
              _: 1
            }),
            d(se, {
              prop: "comment",
              label: "comment",
              "min-width": 150
            })
          ]),
          _: 1
        }, 8, ["data"])), [
          [Qi, a.preLoading]
        ]),
        e.versionDescription ? (n(), h($l, {
          key: 2,
          modelValue: a.activeCommt,
          "onUpdate:modelValue": k[3] || (k[3] = (V) => a.activeCommt = V),
          style: { "margin-top": "-1px" }
        }, {
          default: r(() => [
            d(Il, {
              title: "Descriptions",
              name: "1"
            }, {
              default: r(() => [
                d(Hi, {
                  modelValue: a.versionDescription,
                  "onUpdate:modelValue": k[2] || (k[2] = (V) => a.versionDescription = V),
                  mode: "mini",
                  readonly: !0,
                  "user-state": ge(m)
                }, null, 8, ["modelValue", "user-state"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : b("", !0),
        a.showPopupJoiner ? (n(), v("div", Ic, [
          d(ya, {
            title: "Join Parent Form",
            modelValue: a.showPopupJoiner,
            "onUpdate:modelValue": k[22] || (k[22] = (V) => a.showPopupJoiner = V),
            width: a.popupWidthParent,
            "show-close": !0,
            class: "dialog-grid dialog-form",
            "append-to-body": "",
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !0
          }, {
            footer: r(() => [
              C("div", Pc, [
                d(Y, {
                  onClick: k[20] || (k[20] = U((V) => oe(l.value), ["prevent"])),
                  type: "success",
                  plain: ""
                }, {
                  default: r(() => [...k[77] || (k[77] = [
                    D("Save Joiner", -1)
                  ])]),
                  _: 1
                }),
                e.joinerField.joiner_enable ? (n(), h(Y, {
                  key: 0,
                  onClick: k[21] || (k[21] = U((V) => Ue(l.value), ["prevent"])),
                  type: "default",
                  plain: ""
                }, {
                  default: r(() => [...k[78] || (k[78] = [
                    D("Reset", -1)
                  ])]),
                  _: 1
                })) : b("", !0)
              ])
            ]),
            default: r(() => [
              d(Gi, {
                ref_key: "joinFormRef",
                ref: l,
                model: e.joinerField,
                "label-width": "auto",
                "label-position": "top"
              }, {
                default: r(() => [
                  d(ft, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Parent Form",
                            prop: "form_id",
                            required: ""
                          }, {
                            default: r(() => [
                              d(qi, {
                                "user-state": ge(m),
                                modelValue: e.joinerField.form_id,
                                "onUpdate:modelValue": k[4] || (k[4] = (V) => e.joinerField.form_id = V),
                                filterable: "",
                                clearable: "",
                                placeholder: "Please select form...",
                                "value-object-id": !0,
                                "enable-object-type": !0,
                                "joiner-object": !0,
                                "field-name": "joiner_field.form_id",
                                "data-provider": { providerId: "getsdform-all", providerType: ge(me).SYS, params: { form_license: e.formLicense } },
                                "value-field": "_id",
                                "search-field": ["form_name"],
                                "label-field": ["form_name"],
                                onChange: S
                              }, null, 8, ["user-state", "modelValue", "data-provider"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Joiner Label",
                            prop: "joiner_label",
                            required: ""
                          }, {
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.joiner_label,
                                "onUpdate:modelValue": k[5] || (k[5] = (V) => e.joinerField.joiner_label = V)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ft, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Join Parent Field",
                            prop: "joiner_variable"
                          }, {
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.joiner_variable,
                                "onUpdate:modelValue": k[6] || (k[6] = (V) => e.joinerField.joiner_variable = V),
                                disabled: !0
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Field Name",
                            prop: "field_name",
                            required: ""
                          }, {
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.field_name,
                                "onUpdate:modelValue": k[7] || (k[7] = (V) => e.joinerField.field_name = V)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ft, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Label Fields",
                            prop: "label_fields",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Za, {
                                modelValue: e.joinerField.label_fields,
                                "onUpdate:modelValue": k[8] || (k[8] = (V) => e.joinerField.label_fields = V),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Ref Fields",
                            prop: "ref_fields"
                          }, {
                            default: r(() => [
                              d(Za, {
                                modelValue: e.joinerField.ref_fields,
                                "onUpdate:modelValue": k[9] || (k[9] = (V) => e.joinerField.ref_fields = V),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Hint",
                            prop: "joiner_hint"
                          }, {
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.joiner_hint,
                                "onUpdate:modelValue": k[10] || (k[10] = (V) => e.joinerField.joiner_hint = V)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Size (%)",
                            prop: "joiner_size"
                          }, {
                            default: r(() => [
                              d(Qa, {
                                modelValue: e.joinerField.joiner_size,
                                "onUpdate:modelValue": k[11] || (k[11] = (V) => e.joinerField.joiner_size = V),
                                min: 10,
                                max: 100,
                                step: 10
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(_e, {
                            label: "Search Fields",
                            prop: "search_fields",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Za, {
                                modelValue: e.joinerField.search_fields,
                                "onUpdate:modelValue": k[12] || (k[12] = (V) => e.joinerField.search_fields = V),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Placeholder",
                            prop: "joiner_placeholder"
                          }, {
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.joiner_placeholder,
                                "onUpdate:modelValue": k[13] || (k[13] = (V) => e.joinerField.joiner_placeholder = V)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(ft, { gutter: 20 }, {
                            default: r(() => [
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(_e, {
                                    label: "Insert Enable",
                                    prop: "insert_enable"
                                  }, {
                                    default: r(() => [
                                      d(Mt, {
                                        modelValue: e.joinerField.insert_enable,
                                        "onUpdate:modelValue": k[14] || (k[14] = (V) => e.joinerField.insert_enable = V)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(_e, {
                                    label: "Edit Enable",
                                    prop: "edit_enable"
                                  }, {
                                    default: r(() => [
                                      d(Mt, {
                                        modelValue: e.joinerField.edit_enable,
                                        "onUpdate:modelValue": k[15] || (k[15] = (V) => e.joinerField.edit_enable = V)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(_e, {
                                    label: "View Enable",
                                    prop: "view_enable"
                                  }, {
                                    default: r(() => [
                                      d(Mt, {
                                        modelValue: e.joinerField.view_enable,
                                        "onUpdate:modelValue": k[16] || (k[16] = (V) => e.joinerField.view_enable = V)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(_e, {
                                    label: "Allow to change",
                                    prop: "change_enable"
                                  }, {
                                    default: r(() => [
                                      d(Mt, {
                                        modelValue: e.joinerField.change_enable,
                                        "onUpdate:modelValue": k[17] || (k[17] = (V) => e.joinerField.change_enable = V)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ft, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, { span: 24 }, {
                        default: r(() => [
                          d(_e, { label: "Attributes ( Fields Name )" }, {
                            default: r(() => [
                              (n(!0), v(L, null, G(a.subSchema, (V) => (n(), h(Y, {
                                color: "#626aef",
                                size: "small",
                                dark: a.isDark,
                                class: "mb-1",
                                plain: "",
                                onClick: (ee) => ge(Dc)("{{" + V.value + "}}")
                              }, {
                                default: r(() => [
                                  D(M(V.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["dark", "onClick"]))), 256))
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Label Template",
                            prop: "label_template"
                          }, {
                            label: r(() => [
                              k[69] || (k[69] = D(" Label Template ", -1)),
                              d(ct, {
                                size: "small",
                                type: "info"
                              }, {
                                default: r(() => [
                                  d(ga, null, {
                                    default: r(() => [
                                      d(Pl)
                                    ]),
                                    _: 1
                                  }),
                                  k[67] || (k[67] = D(" Using Attribute by ", -1)),
                                  d($e, { type: "primary" }, {
                                    default: r(() => [
                                      D(M(a.aname), 1)
                                    ]),
                                    _: 1
                                  }),
                                  k[68] || (k[68] = D(" into Value ", -1))
                                ]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.label_template,
                                "onUpdate:modelValue": k[18] || (k[18] = (V) => e.joinerField.label_template = V)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Filter ( SQL )",
                            prop: "sql_filter"
                          }, {
                            label: r(() => [
                              k[75] || (k[75] = D(" Filters ( WHERE SQL ) ", -1)),
                              d(ct, {
                                size: "small",
                                type: "info"
                              }, {
                                default: r(() => [
                                  d(ga, null, {
                                    default: r(() => [
                                      d(Pl)
                                    ]),
                                    _: 1
                                  }),
                                  k[72] || (k[72] = D(" Add a param with ", -1)),
                                  d($e, { type: "primary" }, {
                                    default: r(() => [...k[70] || (k[70] = [
                                      D(":param_name", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  k[73] || (k[73] = D(" *ObjectId type: ", -1)),
                                  d($e, { type: "warning" }, {
                                    default: r(() => [...k[71] || (k[71] = [
                                      D("CONVERT(:param_name, 'objectId')", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(Wi, {
                                icon: "Link",
                                type: "primary",
                                target: "_blank",
                                href: "https://noql.synatic.dev/sql-syntax/introduction/",
                                class: "ml-2"
                              }, {
                                default: r(() => [...k[74] || (k[74] = [
                                  D("SQL Syntax", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(ze, {
                                modelValue: e.joinerField.sql_filter,
                                "onUpdate:modelValue": k[19] || (k[19] = (V) => e.joinerField.sql_filter = V),
                                placeholder: "`field_name` = :param_name AND `field_name.sub_name` = :param_name2"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(_e, {
                            label: "Order By",
                            class: "option-items-pane"
                          }, {
                            default: r(() => [
                              C("div", $c, [
                                d(xi, ae({
                                  tag: "ul",
                                  list: e.joinerField.order_by,
                                  "item-key": "id"
                                }, {
                                  group: "optionGroup",
                                  ghostClass: "ghost",
                                  handle: ".drag-option"
                                }), {
                                  item: r(({ element: V, index: ee }) => [
                                    C("li", Tc, [
                                      d(Ki, {
                                        modelValue: V.column,
                                        "onUpdate:modelValue": (va) => V.column = va,
                                        options: a.subSchema,
                                        placeholder: "Please field...",
                                        filterable: !0,
                                        clearable: !0,
                                        class: "mr-1",
                                        style: { width: "450px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      d(Gt, {
                                        modelValue: V.sort,
                                        "onUpdate:modelValue": (va) => V.sort = va,
                                        style: { width: "150px" }
                                      }, {
                                        default: r(() => [
                                          (n(), h(Te, {
                                            key: ge(ye).ASC,
                                            label: ge(ye).ASC,
                                            value: ge(ye).ASC
                                          }, null, 8, ["label", "value"])),
                                          (n(), h(Te, {
                                            key: ge(ye).DESC,
                                            label: ge(ye).DESC,
                                            value: ge(ye).DESC
                                          }, null, 8, ["label", "value"]))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      d(Y, {
                                        circle: "",
                                        plain: "",
                                        class: "icon-drag drag-option ml-1"
                                      }, {
                                        default: r(() => [
                                          d(ht, {
                                            class: "text-4 ml-0.3",
                                            "icon-name": "addon-grip-vertical"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      d(Y, {
                                        circle: "",
                                        plain: "",
                                        type: "danger",
                                        onClick: (va) => p(V, ee),
                                        icon: "Delete",
                                        class: "col-delete-button"
                                      }, null, 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }, 16, ["list"])
                              ]),
                              d(Y, {
                                round: "",
                                plain: "",
                                icon: "Plus",
                                type: "success",
                                onClick: F
                              }, {
                                default: r(() => [...k[76] || (k[76] = [
                                  D("Add OrderBy", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          }, 8, ["modelValue", "width"])
        ])) : b("", !0),
        a.showDataDicDialogFlag ? (n(), v("div", Mc, [
          d(ya, {
            title: `Data Dic - ${a.formDataDic && a.formDataDic._id ? a.formDataDic.form_name : ""}`,
            class: "dialog-grid dialog-form",
            modelValue: a.showDataDicDialogFlag,
            "onUpdate:modelValue": k[24] || (k[24] = (V) => a.showDataDicDialogFlag = V),
            "show-close": !0,
            "append-to-body": "",
            draggable: "",
            width: a.popupWidthDic,
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            footer: r(() => [
              C("div", Vc, [
                d(Y, {
                  onClick: k[23] || (k[23] = (V) => a.showDataDicDialogFlag = !1)
                }, {
                  default: r(() => [...k[79] || (k[79] = [
                    D("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            default: r(() => [
              a.formDataDic && a.formDataDic._id ? (n(), h(Yi, {
                key: 0,
                "joiner-field": a.formDataDic.joiner_field,
                "form-db": a.formDataDic.form_db,
                form_id: a.formDataDic._id ? a.formDataDic._id : "",
                form_table: a.formDataDic.form_table,
                "form-license": a.formDataDic.form_license,
                "user-state": e.userState,
                "enable-action": !1
              }, null, 8, ["joiner-field", "form-db", "form_id", "form_table", "form-license", "user-state"])) : b("", !0)
            ]),
            _: 1
          }, 8, ["title", "modelValue", "width"])
        ])) : b("", !0),
        a.showSchemaFlag ? (n(), v("div", Ac, [
          d(ya, {
            title: "Sub Schema",
            class: "dialog-grid dialog-form",
            modelValue: a.showSchemaFlag,
            "onUpdate:modelValue": k[26] || (k[26] = (V) => a.showSchemaFlag = V),
            "show-close": !0,
            "append-to-body": "",
            width: a.popupWidthDic,
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            footer: r(() => [
              C("div", Ec, [
                d(Y, {
                  onClick: k[25] || (k[25] = (V) => a.showSchemaFlag = !1)
                }, {
                  default: r(() => [...k[80] || (k[80] = [
                    D("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            default: r(() => [
              d(Ji, {
                "form-db": e.formDb,
                "parent-field": a.parentField,
                "sub-schema": a.popSubSchema,
                "enable-action": e.enableAction
              }, null, 8, ["form-db", "parent-field", "sub-schema", "enable-action"])
            ]),
            _: 1
          }, 8, ["modelValue", "width"])
        ])) : b("", !0),
        a.showSchemaAddFlag ? (n(), v("div", Oc, [
          d(ya, {
            title: "Custom Schema",
            class: "dialog-grid dialog-form",
            modelValue: a.showSchemaAddFlag,
            "onUpdate:modelValue": k[27] || (k[27] = (V) => a.showSchemaAddFlag = V),
            "show-close": !0,
            "append-to-body": "",
            width: "600px",
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            default: r(() => [
              d(Xi, {
                "form-db": e.formDb,
                "form-license": e.formLicense,
                form_id: e.form_id,
                form_table: e.form_table,
                "joiner-field": e.joinerField,
                "ref-grid": e.refGrid,
                "init-data": a.initSchema,
                "cancel-callback": s
              }, null, 8, ["form-db", "form-license", "form_id", "form_table", "joiner-field", "ref-grid", "init-data"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])) : b("", !0)
      ], 64);
    };
  }
}), Bc = /* @__PURE__ */ j(Lc, [["__scopeId", "data-v-f62d8f6f"]]), Nc = B({
  name: "SdDataDicPopup",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    backdrop: {
      type: Boolean,
      default: !0
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "Data Dic",
      popupWidth: "90%",
      showForm: !1,
      iconForm: "",
      titleNameForm: "",
      popupWidthdefault: "90%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    return { options: De({}) };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await Pe(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : O.warning("Form not found");
        } else
          O.warning("Unauthorized.");
      else
        O.warning("FormId not found");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.showForm = !0, this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.popupWidth = le(this.popupWidthdefault);
    }
  }
}), jc = {
  role: "heading",
  class: "el-dialog__title"
}, Uc = { class: "dialog-footer" };
function Rc(e, t, a, l, o, i) {
  const s = et, u = we, m = Bc, f = ie, c = Ce;
  return n(), h(c, {
    title: `Data Dic  - ${e.popupName}`,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (_) => e.showPopupFlag = _),
    width: e.popupWidth,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: _, titleId: $, titleClass: g }) => [
      C("span", jc, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        D(" Data Dic - " + M(e.popupName), 1)
      ])
    ]),
    footer: r(() => [
      C("div", Uc, [
        d(f, {
          onClick: U(e.handleCancel, ["prevent"])
        }, {
          default: r(() => [...t[1] || (t[1] = [
            D("Close", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: r(() => [
      d(m, {
        "joiner-field": e.sdformModel.joiner_field,
        "form-db": e.sdformModel.form_db,
        form_id: e.formId,
        form_table: e.sdformModel.form_table,
        "form-license": e.sdformModel.form_license,
        "version-description": e.sdformModel.version_description,
        "user-state": e.userState,
        "enable-action": !1
      }, null, 8, ["joiner-field", "form-db", "form_id", "form_table", "form-license", "version-description", "user-state"])
    ]),
    _: 1
  }, 8, ["title", "modelValue", "width", "before-close", "close-on-click-modal"]);
}
const xS = /* @__PURE__ */ j(Nc, [["render", Rc]]), zc = /* @__PURE__ */ B({
  __name: "SdDynamicInput",
  props: {
    modelValue: {},
    readonly: { type: Boolean },
    inputType: {},
    size: {},
    dataList: {},
    inputOptions: {},
    userState: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(e, { emit: t }) {
    const a = e, l = De({
      inputType: a.inputType,
      inputOptions: {},
      isDark: de(),
      arrayList: ["multiselect-editor"],
      stringList: [
        "text-editor",
        "textarea-editor",
        "select-editor",
        "radio-editor",
        "html-editor",
        "color-editor",
        "js-editor",
        "css-editor",
        "datetime-editor",
        "date-editor",
        "time-editor"
      ]
    }), o = q(["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#626aef", "#909399", "#303133", "#606266", "#D4D7DE", "#EBEDF0"]), i = Z(() => a.inputType), s = Z(() => a.inputOptions), u = Z({
      get() {
        return l.inputType === "text-editor" ? String(a.modelValue) : a.modelValue;
      },
      set($) {
        m("update:modelValue", $);
      }
    });
    at(i, ($, g) => {
      $ == "number-editor" ? typeof !a.modelValue == "number" && (l.stringList.includes(g) ? u.value = isNaN(u.value) ? void 0 : Number(u.value) : u.value = void 0) : l.stringList.includes($) ? typeof !a.modelValue == "string" && (l.arrayList.includes(g) || g == "json-editor" ? u.value = String(a.modelValue).toString() : u.value = String(u.value)) : $ == "boolean-editor" ? typeof !a.modelValue == "boolean" && (l.stringList.includes(g) ? u.value = zr(u.value) : g == "number-editor" ? u.value = u.value > 0 : u.value = !!(u.value && !wl(u.value))) : l.arrayList.includes($) ? typeof !a.modelValue == "object" && (l.arrayList.includes(g) || (u.value = [])) : $ == "json-editor" && typeof !a.modelValue == "object" && (l.arrayList.includes(g) || (u.value = [])), l.inputType = $;
    }), at(s, ($, g) => {
      l.inputOptions = $;
    }), xe(() => {
      l.inputType = a.inputType, l.inputOptions = a.inputOptions;
    });
    const m = t;
    function f($) {
      m("change", $);
    }
    function c($) {
      m("focus", $);
    }
    function _($) {
      m("blur", $);
    }
    return ($, g) => {
      const I = Ie, F = jt, p = gl, w = nn, S = Ct, N = It, y = Dt, T = jo, A = No, E = fl, W = xa, oe = ai;
      return n(), v(L, null, [
        l.inputType === "text-editor" ? (n(), h(I, ae({
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": g[0] || (g[0] = (K) => u.value = K),
          type: "text",
          size: e.size || void 0,
          clearable: !0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "number-editor" ? (n(), h(F, ae({
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": g[1] || (g[1] = (K) => u.value = K),
          style: { width: "100%" },
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "datetime-editor" ? (n(), h(p, ae({
          key: 2,
          modelValue: u.value,
          "onUpdate:modelValue": g[2] || (g[2] = (K) => u.value = K),
          type: "datetime",
          disabled: !!e.readonly || e.readonly,
          clearable: !0,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          format: "DD/MM/YYYY HH:mm",
          "value-format": "YYYY-MM-DD HH:mm:ss",
          placeholder: "Select Date Time...",
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "date-editor" ? (n(), h(p, ae({
          key: 3,
          modelValue: u.value,
          "onUpdate:modelValue": g[3] || (g[3] = (K) => u.value = K),
          type: "date",
          disabled: !!e.readonly || e.readonly,
          clearable: !0,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          format: "DD/MM/YYYY",
          "value-format": "YYYY-MM-DD",
          placeholder: "Select Date...",
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "time-editor" ? (n(), h(w, ae({
          key: 4,
          modelValue: u.value,
          "onUpdate:modelValue": g[4] || (g[4] = (K) => u.value = K),
          disabled: !!e.readonly || e.readonly,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          clearable: !0,
          format: "HH:mm",
          "value-format": "HH:mm:ss",
          placeholder: "Select Time...",
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "boolean-editor" ? (n(), h(S, ae({
          key: 5,
          modelValue: u.value,
          "onUpdate:modelValue": g[5] || (g[5] = (K) => u.value = K),
          "active-text": u.value ? "True" : "False"
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          size: e.size || void 0,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "active-text", "disabled", "size"])) : b("", !0),
        l.inputType === "textarea-editor" ? (n(), h(I, ae({
          key: 6,
          modelValue: u.value,
          "onUpdate:modelValue": g[6] || (g[6] = (K) => u.value = K),
          type: "textarea",
          rows: 3,
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "select-editor" ? (n(), h(y, ae({
          key: 7,
          modelValue: u.value,
          "onUpdate:modelValue": g[7] || (g[7] = (K) => u.value = K),
          style: { width: "100%" },
          clearable: !0,
          size: e.size || void 0,
          placeholder: "Please Select..."
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, G(e.dataList, (K) => (n(), h(N, {
              key: K.value,
              label: K.label,
              value: K.value ? K.value : ""
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "radio-editor" ? (n(), h(A, ae({
          key: 8,
          modelValue: u.value,
          "onUpdate:modelValue": g[8] || (g[8] = (K) => u.value = K)
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          size: e.size || void 0,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, G(e.dataList, (K) => (n(), h(T, {
              key: K.value,
              value: K.value ? K.value : "",
              label: K.label
            }, null, 8, ["value", "label"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "multiselect-editor" ? (n(), h(y, ae({
          key: 9,
          modelValue: u.value,
          "onUpdate:modelValue": g[9] || (g[9] = (K) => u.value = K)
        }, l.inputOptions ? l.inputOptions : void 0, {
          multiple: "",
          size: e.size || void 0,
          style: { width: "100%" },
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, G(e.dataList, (K) => (n(), h(N, {
              key: K.value,
              label: K.label,
              value: K.value ? K.value : ""
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "color-editor" ? (n(), h(E, ae({
          key: 10,
          modelValue: u.value,
          "onUpdate:modelValue": g[10] || (g[10] = (K) => u.value = K),
          size: e.size || void 0,
          "show-alpha": !0
        }, l.inputOptions ? l.inputOptions : void 0, {
          predefine: o.value,
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "predefine", "disabled"])) : b("", !0),
        l.inputType === "json-editor" ? (n(), h(ge(Yo), {
          key: 11,
          modelValue: u.value,
          "onUpdate:modelValue": g[11] || (g[11] = (K) => u.value = K),
          "main-menu-bar": !1,
          "navigation-bar": !1,
          mode: ge(Jo).tree,
          style: { width: "100%" },
          size: e.size || void 0,
          class: x(l.isDark ? "jse-theme-dark" : ""),
          "read-only": !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: _,
          onChange: f
        }, null, 8, ["modelValue", "mode", "size", "class", "read-only"])) : b("", !0),
        l.inputType === "html-editor" ? (n(), h(W, ae({
          key: 12,
          modelValue: u.value,
          "onUpdate:modelValue": g[12] || (g[12] = (K) => u.value = K),
          mode: "full",
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          "user-state": e.userState,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "readonly", "user-state"])) : b("", !0),
        l.inputType === "html-mini-editor" ? (n(), h(W, ae({
          key: 13,
          modelValue: u.value,
          "onUpdate:modelValue": g[13] || (g[13] = (K) => u.value = K),
          mode: "mini",
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          "user-state": e.userState,
          onFocus: c,
          onBlur: _,
          onChange: f
        }), null, 16, ["modelValue", "size", "readonly", "user-state"])) : b("", !0),
        l.inputType === "css-editor" ? (n(), h(oe, ae({
          key: 14,
          value: u.value,
          "onUpdate:value": g[14] || (g[14] = (K) => u.value = K)
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          lang: "css",
          class: "custom-ace",
          "min-lines": 2,
          "max-lines": 25,
          size: e.size || void 0,
          onOnBlur: _,
          onOnFocus: c,
          onOnChange: f
        }), null, 16, ["value", "readonly", "size"])) : b("", !0),
        l.inputType === "js-editor" ? (n(), h(oe, ae({
          key: 15,
          value: u.value,
          "onUpdate:value": g[15] || (g[15] = (K) => u.value = K)
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          lang: "javascript",
          class: "custom-ace",
          "min-lines": 2,
          "max-lines": 25,
          size: e.size || void 0,
          onOnBlur: _,
          onOnFocus: c,
          onOnChange: f
        }), null, 16, ["value", "readonly", "size"])) : b("", !0)
      ], 64);
    };
  }
}), GS = /* @__PURE__ */ j(zc, [["__scopeId", "data-v-f8d6fc22"]]), Hc = {
  role: "heading",
  class: "el-dialog__title"
}, qc = { style: { width: "100%", "min-height": "500px", height: "500px" } }, Wc = {
  key: 0,
  style: { color: "var(--el-color-warning)", "font-size": "9px" }
}, YS = /* @__PURE__ */ B({
  __name: "SdFormErd",
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    backdrop: {
      type: Boolean,
      default: !0
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    afterSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = t, l = e, o = De({
      sdformModel: {},
      apiUrl: l.userState.host,
      useUserState: l.userState,
      popupName: "Form",
      popupWidth: "90%",
      showContent: !1,
      iconForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "90%",
      formList: null,
      nodes: [],
      edges: []
    }), { findNode: i, fitView: s } = Pn(), u = Z({
      get() {
        return l.modelValue;
      },
      set(g) {
        a("update:modelValue", g), a("change", g);
      }
    });
    let m;
    Wo(() => m?.()), xe(() => {
      c(), m = Me(() => {
        la(() => {
          o.popupWidth = le(o.popupWidthdefault);
        });
      });
    });
    async function f(g = "TB") {
      const I = new Ol.graphlib.Graph(), F = g === "LR";
      I.setDefaultEdgeLabel(() => ({})), I.setGraph({ rankdir: g }), await la(async () => {
        o.nodes.forEach((p) => {
          const w = i(p.id);
          w ? I.setNode(p.id, { width: w.dimensions.width || 200, height: w.dimensions.height || 50 }) : I.setNode(p.id, { width: 200, height: 50 });
        }), o.edges.forEach((p) => {
          I.setEdge(p.source, p.target);
        }), Ol.layout(I), o.nodes = await o.nodes.map((p) => {
          const w = I.node(p.id);
          return {
            ...p,
            targetPosition: F ? wa.Left : wa.Top,
            sourcePosition: F ? wa.Right : wa.Bottom,
            position: {
              x: w.x - w.width / 2,
              y: w.y - w.height / 2
            }
          };
        }), o.showContent = !0, setTimeout(() => {
          s();
        }, 450);
      });
    }
    async function c() {
      if (o.showContent = !1, l.formId != "")
        if (l.userState.formStore[l.formId])
          $(l.userState.formStore[l.formId]);
        else if (o.useUserState) {
          const g = await Pe(l.formId, o.useUserState);
          g.response && g.data ? g.data.dataid && $(g.data) : O.warning("Form not found.");
        } else
          O.warning("UserState not found.");
      else
        O.warning("FormId not found.");
    }
    function _() {
      l.cancelCallback && (l.cancelCallback(), o.showContent = !1);
    }
    async function $(g) {
      o.showContent = !1, o.sdformModel = g, l.userState.formStore[l.formId] = o.sdformModel, l.fixApiUrl && l.fixApiUrl != "" ? o.apiUrl = l.fixApiUrl : o.sdformModel.form_db.api_url && o.sdformModel.form_db.api_url != "" ? o.apiUrl = o.sdformModel.form_db.api_url : o.apiUrl = window.APP_CONFIG.API_URL, o.titleNameForm = o.sdformModel.form_name ? o.sdformModel.form_name : "", o.popupName = `${o.titleNameForm}`, o.sdformModel.form_icon ? o.iconForm = o.sdformModel.form_icon : o.iconForm = "", o.popupWidth = le(o.popupWidthdefault);
      let I = o.sdformModel._id;
      o.sdformModel.joiner_field.joiner_enable && (I = o.sdformModel.joiner_field.form_parent), await l.userState.crudGetAll({ sdProvider: { providerId: "get-erd-list", providerType: "SYS", params: { parent: I } }, totalEnable: !1 }, async (F) => {
        o.formList = P(F.data);
        const p = { x: 0, y: 0 };
        for (const w in o.formList)
          if (Object.prototype.hasOwnProperty.call(o.formList, w)) {
            const S = o.formList[w];
            o.nodes.push({
              id: S._id,
              type: "special",
              position: p,
              data: {
                label: S.form_name,
                icon: S.form_icon,
                ref_fields: S.ref_fields,
                isParent: I == S._id,
                curNode: S._id == l.formId
              }
              // style: {
              // 	color: element._id == this.formId ? '#5cb85c' : '#5d78ff',
              // 	borderColor: element._id == this.formId ? '#5cb85c' : '#5d78ff',
              // 	backgroundColor: element._id == this.formId ? 'rgba(92, 184, 92, .1)' : 'rgba(93,120,255, .1)',
              // },
            }), S.form_id && o.edges.push({
              id: `e${S._id}-${S.form_id}`,
              type: "smoothstep",
              source: S.form_id,
              target: S._id,
              label: S.field_name,
              // markerEnd: MarkerType.ArrowClosed,
              animated: S.form_id == l.formId || S._id == l.formId,
              style: { stroke: "#f0ad4e" },
              labelStyle: { fill: "#444" },
              labelBgStyle: { fill: "#f0ad4e" }
            });
          }
        f("TB");
      });
    }
    return (g, I) => {
      const F = et, p = we, w = Ce;
      return n(), h(w, {
        title: o.popupName,
        modelValue: u.value,
        "onUpdate:modelValue": I[0] || (I[0] = (S) => u.value = S),
        width: 1200,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "before-close": _,
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: S, titleId: N, titleClass: y }) => [
          C("span", Hc, [
            o.iconForm != "" ? (n(), h(F, {
              key: 0,
              "svg-data": o.iconForm
            }, null, 8, ["svg-data"])) : (n(), h(p, {
              key: 1,
              "icon-name": "icon-sdform"
            })),
            D(" ERD " + M(o.popupName), 1)
          ])
        ]),
        default: r(() => [
          C("div", qc, [
            o.showContent ? (n(), h(ge(Mn), {
              key: 0,
              nodes: o.nodes,
              edges: o.edges,
              class: "basic-flow",
              "default-viewport": { zoom: 1.2 },
              "min-zoom": 0.2,
              "max-zoom": 4,
              "fit-view-on-init": ""
            }, {
              "node-special": r((S) => [
                C("div", {
                  class: "vue-flow__node-default",
                  style: te({
                    width: "200px",
                    fontSize: "18px",
                    color: `var(--el-color-${S.data.curNode ? "warning" : "success"})`,
                    backgroundColor: `var(--el-color-${S.data.curNode ? "warning" : "success"}-light-9)`,
                    borderColor: `var(--el-color-${S.data.curNode ? "warning" : "success"}-light-8)`
                  })
                }, [
                  C("div", null, [
                    S.data.icon && S.data.icon != "" ? (n(), h(F, {
                      key: 0,
                      "svg-data": S.data.icon
                    }, null, 8, ["svg-data"])) : (n(), h(p, {
                      key: 1,
                      "icon-name": "icon-sdform"
                    })),
                    D(" " + M(S.data.label), 1)
                  ]),
                  S.data.isParent ? b("", !0) : (n(), v("div", Wc, M(S.data.ref_fields && Object.keys(S.data.ref_fields).length > 0 ? `REF: ${S.data.ref_fields.join(", ")}` : ""), 1))
                ], 4)
              ]),
              _: 1
            }, 8, ["nodes", "edges"])) : b("", !0)
          ])
        ]),
        _: 1
      }, 8, ["title", "modelValue", "close-on-click-modal"]);
    };
  }
}), Kc = B({
  name: "SdGrid",
  props: {
    dataProvider: {
      type: Object,
      required: !0
    },
    expandProvider: {
      type: Object
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    popupWidth: {
      type: String,
      default: "70%"
    },
    popupName: {
      type: String,
      default: "Form"
    },
    userState: {
      type: Object,
      required: !0
    },
    // จำ page/search/filter/sort ลง localStorage ต่อ key นี้ — ว่าง = ปิด (พฤติกรรมเดิม)
    stateKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      resizeCleanup: null,
      apiUrl: "",
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      defaultSort: [],
      searchText: "",
      sumEnable: !1,
      sumData: {},
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      limit: 30,
      optionProvider: { limit: 30, page: 1 },
      popupWidthdefault: this.popupWidth,
      isExpand: !1,
      expandedRows: [],
      sortUi: null
      // sort ที่ผู้ใช้เลือกในหัวตาราง — ใช้คืน arrow ผ่าน :default-sort ตอน restore
    };
  },
  computed: {
    totalLabel() {
      return this.total.toLocaleString();
    },
    // คืน arrow sort ในหัวตารางตาม state ที่ restore มา (el-table อ่านครั้งเดียวตอน mount)
    defaultSortEl() {
      return this.sortUi ? { prop: this.sortUi.prop, order: this.sortUi.order } : void 0;
    },
    rowStartLabel() {
      return (this.totalPage > 0 ? this.offset + 1 : this.offset).toLocaleString();
    },
    rowEndLabel() {
      return (this.offset + this.totalPage).toLocaleString();
    }
  },
  created() {
    this.apiUrl = this.userState.host, this.dataProvider && (this.dataProvider.params || (this.dataProvider.params = {}), this.dataProvider.options ? (this.dataProvider.options.page || (this.dataProvider.options.page = 1), this.dataProvider.options.limit ? this.limit = this.dataProvider.options.limit : this.dataProvider.options.limit = this.limit, this.optionProvider = this.dataProvider.options) : this.dataProvider.options = this.optionProvider, this.defaultParams = P(this.dataProvider.params), this.defaultSort = P(this.optionProvider.orderBy), this.hydrateState(), this.expandProvider && this.optionProvider.select && this.optionProvider.select.push("COUNT(*) AS hasChildren"), this.getDataList(this.dataProvider));
  },
  setup(e, t) {
    const a = q();
    return {
      tableRef: a,
      clearFilter: () => {
        a.value.clearFilter();
      },
      clearSort: () => {
        a.value.clearSort();
      }
    };
  },
  mounted() {
    this.popupWidthdefault = le(this.popupWidth), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidthdefault = le(this.popupWidth);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async getDataList(e, t) {
      this.preLoading = !0;
      const a = this.total === 0;
      await be.post(
        `${this.apiUrl}/widget/crud/getdata-all`,
        {
          sdProvider: e,
          totalEnable: a
        },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((l) => {
        l && l.data && l.data.data && (this.rawData = P(l.data.data), a && (this.total = l.data.total), this.offset = l.data.offset, this.totalPage = l.data.data.length, t && t(this.rawData), l.data.dataSum && l.data.dataSum[0] && (this.sumEnable = !0, this.sumData = l.data.dataSum[0])), this.preLoading = !1;
      }).catch((l) => {
        l.response && l.response.data && l.response.data.message ? O.warning(l.response.data.message) : O.warning(l.message), this.preLoading = !1;
      });
    },
    loadExpand(e, t, a) {
      if (e.dataid = e._id || null, this.expandProvider) {
        this.expandProvider.params ? this.expandProvider.params = { ...this.expandProvider.params, ...e } : this.expandProvider.params = P(e);
        const l = this.rowKey;
        l && e[l] != null && e[l] != null && (this.expandProvider.params.rowKey = e[l], be.post(
          `${this.apiUrl}/widget/crud/getdata-all`,
          {
            sdProvider: this.expandProvider,
            totalEnable: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then(async (o) => {
          if (o && o.data && o.data.data) {
            const i = P(o.data.data);
            this.total = this.total + i.length, this.totalPage = this.totalPage + i.length, a(i);
          }
        }).catch((o) => {
          o.response && o.response.data && o.response.data.message ? O.warning(o.response.data.message) : O.warning(o.message);
        }));
      }
    },
    keyIdIndex(e) {
      const t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    getIndex(e, t) {
      if (this.isExpand || this.expandedRows.length > 0) {
        const a = this.keyId;
        return this.rawData.findIndex((o) => o[a] === e[a]);
      }
      return t;
    },
    handleExpand(e, t) {
      const a = this.rowKey || this.keyId;
      if (this.isExpand = t, t)
        this.expandedRows.push(e[a]);
      else {
        const l = this.expandedRows.indexOf(e[a]);
        this.expandedRows.splice(l, 1);
        let o = this.$refs.tableRef.store.states.treeData.value, i = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
        for (const s in o)
          if (Object.prototype.hasOwnProperty.call(o, s) && e[a] == s) {
            i[s].length && (this.total = this.total - i[s].length, this.totalPage = this.totalPage - i[s].length), i[s] = [];
            const u = o[s];
            u.loaded = !1, u.children = [], u.expanded = !1;
            break;
          }
      }
    },
    removeRowExpand(e, t) {
      const a = this.rowKey || this.keyId;
      let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (l) {
        const o = l.findIndex((i) => i[a] === t[a]);
        l.splice(o, 1), this.expandedRows.includes(e) && (this.total = this.total - 1, this.totalPage = this.totalPage - 1);
      }
    },
    updateRowExpand(e, t) {
      const a = this.rowKey || this.keyId;
      let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (l) {
        const o = l.findIndex((i) => i[a] === t[a]);
        l[o] = P(t);
      }
    },
    addRowExpand(e, t) {
      this.rowKey || this.keyId, this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] = []);
      let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      a && (a.push(t), this.expandedRows.includes(e) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1));
    },
    getChildren(e) {
      const t = this.rowKey;
      return this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e[t]];
    },
    // ---- state persistence: จำ/คืน page/search/filter/sort ผ่าน localStorage (เฉพาะเมื่อมี stateKey) ----
    hydrateState() {
      if (!this.stateKey) return;
      const e = Mi(this.stateKey);
      e && (e.page && e.page > 1 && (this.optionProvider.page = e.page), e.searchText && (this.searchText = e.searchText, this.dataProvider.params.q = `%${e.searchText}%`), e.fileter && Object.keys(e.fileter).length > 0 && (this.optionProvider.fileter = e.fileter), e.orderBy && e.orderBy.length > 0 && (this.optionProvider.orderBy = e.orderBy), this.sortUi = e.sortUi || null);
    },
    persistState() {
      this.stateKey && Pi(this.stateKey, {
        page: this.optionProvider.page || 1,
        searchText: this.searchText,
        fileter: this.optionProvider.fileter || null,
        orderBy: this.optionProvider.orderBy || null,
        sortUi: this.sortUi
      });
    },
    handleCurrentChange(e) {
      this.expandProvider && this.resetExpand(), this.persistState(), this.getDataList(this.dataProvider);
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.optionProvider.orderBy = P(this.defaultSort), this.dataProvider.params = P(this.defaultParams), this.searchText = "", this.sortUi = null, this.total = 0, this.dataProvider.options = this.optionProvider, this.stateKey && Vi(this.stateKey), this.clearSort(), this.clearFilter(), this.expandProvider && this.resetExpand(), this.getDataList(this.dataProvider);
    },
    reloadData() {
      this.expandProvider && this.resetExpand(), this.getDataList(this.dataProvider);
    },
    resetExpand(e = !0) {
      let t = this.$refs.tableRef.store.states.treeData.value, a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
      for (const l in t)
        if (Object.prototype.hasOwnProperty.call(t, l)) {
          a[l] = [];
          const o = t[l];
          o.loaded = !1, o.children = [], o.expanded = !1;
        }
    },
    handleSort(e) {
      let t = P(this.defaultSort);
      if (e.order !== null) {
        const a = { column: `\`${e.prop}\``, sort: e.order == "descending" ? ye.DESC : ye.ASC };
        t ? t.push(a) : t = [a];
      }
      JSON.stringify(t) !== JSON.stringify(this.optionProvider.orderBy) && (this.optionProvider.orderBy = t, this.sortUi = e.order !== null ? { prop: e.prop, order: e.order } : null, this.expandProvider && this.resetExpand(), this.optionProvider.page = 1, this.dataProvider.options = this.optionProvider, this.persistState(), this.getDataList(this.dataProvider));
    },
    handleSearch() {
      this.searchText != "" ? this.dataProvider.params.q = `%${this.searchText}%` : delete this.dataProvider.params.q, this.total = 0, this.optionProvider.page = 1, this.expandProvider && this.resetExpand(), this.persistState(), this.getDataList(this.dataProvider);
    },
    handleFilter(e) {
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let a = e[t];
          wl(a) ? delete this.optionProvider.fileter[t] : (this.optionProvider.fileter || (this.optionProvider.fileter = {}), this.optionProvider.fileter[t] = a);
        }
      this.expandProvider && this.resetExpand(), this.optionProvider.page = 1, this.dataProvider.options = this.optionProvider, this.total = 0, this.persistState(), this.getDataList(this.dataProvider);
    },
    handleAdd() {
      this.showPopupFlag = !0, this.backdrop = !1, this.insertBefore && this.insertBefore(null, 0);
    },
    handleUpdate(e, t) {
      this.showPopupFlag = !0, this.backdrop = !1, this.updateBefore && this.updateBefore(e, t);
    },
    handleView(e, t) {
      this.showPopupFlag = !0, this.backdrop = !0, this.viewBefore && this.viewBefore(e, t);
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      ve.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        be.delete(`${this.apiUrl}/widget/crud/delete-data`, {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          },
          data: {
            id: a,
            sdProvider: this.dataProvider
          }
        }).then((l) => {
          this.expandProvider && e[this.expandCountChildrenName] ? (this.resetExpand(), this.afterDelete && this.afterDelete(e, t)) : (this.rawData.splice(t, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, this.afterDelete && this.afterDelete(e, t)), l && l.data && l.data.message ? O.success(l.data.message) : O.success("Delete completed.");
        }).catch((l) => {
          l.response && l.response.data && l.response.data.message ? O.warning(l.response.data.message) : O.warning(l.message);
        });
      }).catch(() => {
      });
    },
    handleEditField(e, t, a, l) {
      const o = e[this.keyId];
      ve.confirm("Are you sure you want to edit value this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        be.put(
          `${this.apiUrl}/widget/crud/update-data`,
          {
            id: o,
            data: a,
            sdProvider: this.dataProvider,
            upsert: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then((i) => {
          l(e), O.success("Edit value completed.");
        }).catch((i) => {
          i.response && i.response.data && i.response.data.message ? O.warning(i.response.data.message) : O.warning(i.message);
        });
      }).catch(() => {
      });
    },
    getSummary(e) {
      const { columns: t, data: a } = e, l = [];
      return t.forEach((o, i) => {
        if (i == 0) {
          l[i] = this.sumLabel;
          return;
        }
        const s = o.property;
        if (this.sumData[s]) {
          let u = Number(this.sumData[s]);
          l[i] = u.toLocaleString("en-US", { minimumFractionDigits: this.sumDecimal, maximumFractionDigits: this.sumDecimal });
        } else
          l[i] = null;
      }), l;
    }
  }
}), xc = { class: "card-header" }, Gc = {
  key: 0,
  class: "mb-2",
  style: { position: "relative" }
}, Yc = { class: "text-6" }, Jc = { style: { position: "absolute", top: "0px", right: "0px" } }, Xc = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Qc = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Zc = { class: "card-footer" }, eb = { key: 0 };
function tb(e, t, a, l, o, i) {
  const s = we, u = Ke, m = ie, f = ut, c = Ie, _ = La, $ = Nt, g = Qe, I = na, F = bl, p = Ce, w = sa;
  return n(), v(L, null, [
    d(F, {
      class: "box-card",
      shadow: "never"
    }, {
      header: r(() => [
        C("div", xc, [
          e.iconName != "" || e.titleName != "" ? (n(), v("div", Gc, [
            d(u, { truncated: "" }, {
              default: r(() => [
                C("span", Yc, [
                  e.iconName != "" ? (n(), h(s, {
                    key: 0,
                    "icon-name": e.iconName
                  }, null, 8, ["icon-name"])) : b("", !0),
                  D(" " + M(e.titleName), 1)
                ])
              ]),
              _: 1
            }),
            C("span", Jc, [
              re(e.$slots, "actionsBar", {}, void 0, !0)
            ])
          ])) : b("", !0),
          d($, { gutter: 20 }, {
            default: r(() => [
              d(f, {
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 14,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  e.addBtnEnable ? (n(), h(m, {
                    key: 0,
                    type: "success",
                    plain: "",
                    icon: "Plus",
                    onClick: e.handleAdd
                  }, {
                    default: r(() => [
                      D(M(e.addBtnLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : b("", !0),
                  t[4] || (t[4] = D()),
                  re(e.$slots, "actions", {}, void 0, !0),
                  e.totalInline ? (n(), v(L, { key: 1 }, [
                    d(m, {
                      type: "info",
                      plain: "",
                      icon: "Refresh",
                      onClick: e.handleRefresh,
                      class: "mr-1"
                    }, null, 8, ["onClick"]),
                    C("span", Xc, [
                      d(u, { "line-clamp": 2 }, {
                        default: r(() => [
                          C("span", null, M(e.rowStartLabel) + "-" + M(e.rowEndLabel) + " of " + M(e.totalLabel) + " items.", 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 64)) : b("", !0)
                ]),
                _: 3
              }),
              e.optionProvider.search ? (n(), h(f, {
                key: 0,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 10
              }, {
                default: r(() => [
                  d(c, {
                    modelValue: e.searchText,
                    "onUpdate:modelValue": t[0] || (t[0] = (S) => e.searchText = S),
                    placeholder: e.placeholderSearch,
                    onChange: e.handleSearch,
                    clearable: ""
                  }, {
                    append: r(() => [
                      d(m, {
                        type: "info",
                        icon: "Search",
                        onClick: U(e.handleSearch, ["prevent"])
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "onChange"])
                ]),
                _: 1
              })) : b("", !0),
              e.totalInline ? b("", !0) : (n(), h(f, {
                key: 1,
                xs: 24,
                sm: 24,
                md: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  re(e.$slots, "actionsPager", {}, () => [
                    e.total > e.limit ? (n(), h(_, {
                      key: 0,
                      class: "mb-2",
                      "current-page": e.optionProvider.page,
                      "onUpdate:currentPage": t[1] || (t[1] = (S) => e.optionProvider.page = S),
                      "page-size": e.limit,
                      onCurrentChange: e.handleCurrentChange,
                      background: "",
                      layout: "prev, pager, next",
                      total: e.total
                    }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
                  ], !0)
                ]),
                _: 3
              })),
              e.totalInline ? b("", !0) : (n(), h(f, {
                key: 2,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 8,
                style: { "text-align": "right" }
              }, {
                default: r(() => [
                  C("span", Qc, [
                    d(u, { "line-clamp": "2" }, {
                      default: r(() => [
                        D(" Showing " + M(e.rowStartLabel) + "-" + M(e.rowEndLabel) + " of " + M(e.totalLabel) + " items. ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  d(m, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }))
            ]),
            _: 3
          })
        ])
      ]),
      default: r(() => [
        Ae((n(), h(I, {
          ref: "tableRef",
          data: e.rawData,
          stripe: "",
          border: e.resizable,
          "show-summary": e.sumEnable,
          "summary-method": e.getSummary,
          style: { width: "100%" },
          onSortChange: e.handleSort,
          "default-sort": e.defaultSortEl,
          height: e.height,
          "max-height": e.maxHeight,
          "row-key": e.rowKey,
          onExpandChange: e.handleExpand,
          lazy: !!e.expandProvider,
          load: e.expandProvider ? e.loadExpand : void 0,
          "tree-props": e.expandProvider ? { children: "children", hasChildren: e.expandCountChildrenName } : void 0,
          onFilterChange: e.handleFilter
        }, {
          default: r(() => [
            e.actionEnable ? (n(), h(g, {
              key: 0,
              fixed: "",
              label: e.actionLabel,
              width: e.readonly ? 80 : e.expandProvider ? 145 : 120
            }, {
              default: r((S) => [
                S.row[e.keyId] ? (n(), h(m, {
                  key: 0,
                  plain: "",
                  circle: "",
                  type: "info",
                  icon: "View",
                  size: "small",
                  title: "View",
                  onClick: U((N) => e.handleView(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0),
                S.row[e.keyId] && !e.readonly ? (n(), h(m, {
                  key: 1,
                  plain: "",
                  circle: "",
                  type: "primary",
                  icon: "Edit",
                  size: "small",
                  title: "Edit",
                  onClick: U((N) => e.handleUpdate(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0),
                S.row[e.keyId] && !e.readonly ? (n(), h(m, {
                  key: 2,
                  plain: "",
                  circle: "",
                  type: "danger",
                  icon: "Delete",
                  size: "small",
                  title: "Delete",
                  onClick: U((N) => e.handleDelete(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }, 8, ["label", "width"])) : b("", !0),
            re(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["data", "border", "show-summary", "summary-method", "onSortChange", "default-sort", "height", "max-height", "row-key", "onExpandChange", "lazy", "load", "tree-props", "onFilterChange"])), [
          [w, e.preLoading]
        ]),
        C("div", Zc, [
          e.total > e.limit ? (n(), h(_, {
            key: 0,
            "current-page": e.optionProvider.page,
            "onUpdate:currentPage": t[2] || (t[2] = (S) => e.optionProvider.page = S),
            "page-size": e.limit,
            onCurrentChange: e.handleCurrentChange,
            class: "mt-3",
            background: "",
            layout: "prev, pager, next",
            total: e.total
          }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
        ])
      ]),
      _: 3
    }),
    e.showPopupFlag ? (n(), v("div", eb, [
      d(p, {
        title: e.popupName,
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[3] || (t[3] = (S) => e.showPopupFlag = S),
        width: e.popupWidthdefault,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        default: r(() => [
          re(e.$slots, "popup", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["title", "modelValue", "width", "close-on-click-modal"])
    ])) : b("", !0)
  ], 64);
}
const JS = /* @__PURE__ */ j(Kc, [["render", tb], ["__scopeId", "data-v-38a4fa99"]]), ab = B({
  name: "SdGridColumnIndex",
  props: {
    columnLabel: {
      type: String,
      default: "#"
    },
    width: {
      type: String,
      default: "100"
    },
    refSdgrid: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
});
function lb(e, t, a, l, o, i) {
  const s = Qe;
  return n(), h(s, {
    type: "index",
    index: (u) => {
      if (e.refSdgrid) {
        let m = e.refSdgrid.rowStartLabel.replace(",", "");
        return m && (m = u + Number(m)), m.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      }
    },
    label: e.columnLabel,
    width: e.width,
    align: "center"
  }, null, 8, ["index", "label", "width"]);
}
const XS = /* @__PURE__ */ j(ab, [["render", lb]]), ob = B({
  name: "SdGridColumnDate",
  props: {
    columnProp: {
      type: String,
      default: ""
    },
    columnLabel: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "110"
    },
    decimal: {
      type: Number,
      default: 2
    },
    locale: {
      type: String,
      default: "en-EN"
    }
  },
  computed: {},
  methods: {
    numberFormat(e) {
      if (vl(e[this.columnProp])) {
        let t = 0;
        return isNaN(e[this.columnProp]) || (t = Number(e[this.columnProp])), t.toLocaleString(this.locale, { minimumFractionDigits: this.decimal, maximumFractionDigits: this.decimal });
      }
      return null;
    }
  }
});
function ib(e, t, a, l, o, i) {
  const s = Qe;
  return n(), h(s, {
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    sortable: e.sortable
  }, {
    default: r((u) => [
      D(M(e.numberFormat(u.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "width", "sortable"]);
}
const QS = /* @__PURE__ */ j(ob, [["render", ib]]), nb = [
  {
    value: "addon-api",
    label: "Api"
  },
  {
    value: "addon-bandaid",
    label: "Bandaid"
  },
  {
    value: "addon-block",
    label: "Block"
  },
  {
    value: "addon-box-seam",
    label: "Box Seam"
  },
  {
    value: "addon-boxes",
    label: "Boxes"
  },
  {
    value: "addon-braces-asterisk",
    label: "Braces Asterisk"
  },
  {
    value: "addon-browser",
    label: "Browser"
  },
  {
    value: "addon-bug",
    label: "Bug"
  },
  {
    value: "addon-building",
    label: "Building"
  },
  {
    value: "addon-calculator",
    label: "Calculator"
  },
  {
    value: "addon-capsule-pill",
    label: "Capsule Pill"
  },
  {
    value: "addon-capsule",
    label: "Capsule"
  },
  {
    value: "addon-card-pos",
    label: "Card Pos"
  },
  {
    value: "addon-chart-line",
    label: "Chart Line"
  },
  {
    value: "addon-chart-pie",
    label: "Chart Pie"
  },
  {
    value: "addon-chart",
    label: "Chart"
  },
  {
    value: "addon-cloud-arrow-down",
    label: "Cloud Arrow Down"
  },
  {
    value: "addon-cloud-arrow-up",
    label: "Cloud Arrow Up"
  },
  {
    value: "addon-code",
    label: "Code"
  },
  {
    value: "addon-css-file",
    label: "Css File"
  },
  {
    value: "addon-css3",
    label: "Css3"
  },
  {
    value: "addon-csv-file",
    label: "Csv File"
  },
  {
    value: "addon-database",
    label: "Database"
  },
  {
    value: "addon-db-network",
    label: "Db Network"
  },
  {
    value: "addon-delete-column",
    label: "Delete Column"
  },
  {
    value: "addon-delete-row",
    label: "Delete Row"
  },
  {
    value: "addon-description",
    label: "Description"
  },
  {
    value: "addon-development",
    label: "Development"
  },
  {
    value: "addon-diagram",
    label: "Diagram"
  },
  {
    value: "addon-doc-file",
    label: "Doc File"
  },
  {
    value: "addon-download",
    label: "Download"
  },
  {
    value: "addon-drag-move",
    label: "Drag Move"
  },
  {
    value: "addon-drawing",
    label: "Drawing"
  },
  {
    value: "addon-excel",
    label: "Excel"
  },
  {
    value: "addon-fingerprint",
    label: "Fingerprint"
  },
  {
    value: "addon-flip-horizontal",
    label: "Flip Horizontal"
  },
  {
    value: "addon-flow",
    label: "Flow"
  },
  {
    value: "addon-form",
    label: "Form"
  },
  {
    value: "addon-function",
    label: "Function"
  },
  {
    value: "addon-grip-horizontal",
    label: "Grip Horizontal"
  },
  {
    value: "addon-grip-vertical",
    label: "Grip Vertical"
  },
  {
    value: "addon-heart-pulse-fill",
    label: "Heart Pulse Fill"
  },
  {
    value: "addon-hospital",
    label: "Hospital"
  },
  {
    value: "addon-html-file",
    label: "Html File"
  },
  {
    value: "addon-html5",
    label: "Html5"
  },
  {
    value: "addon-import",
    label: "Import"
  },
  {
    value: "addon-insert-column",
    label: "Insert Column"
  },
  {
    value: "addon-insert-column2",
    label: "Insert Column2"
  },
  {
    value: "addon-insert-row",
    label: "Insert Row"
  },
  {
    value: "addon-insert-row2",
    label: "Insert Row2"
  },
  {
    value: "addon-js-file",
    label: "Js File"
  },
  {
    value: "addon-js",
    label: "Js"
  },
  {
    value: "addon-json-file",
    label: "Json File"
  },
  {
    value: "addon-lego",
    label: "Lego"
  },
  {
    value: "addon-library",
    label: "Library"
  },
  {
    value: "addon-license",
    label: "License"
  },
  {
    value: "addon-list",
    label: "List"
  },
  {
    value: "addon-lungs-fill",
    label: "Lungs Fill"
  },
  {
    value: "addon-merge-cells",
    label: "Merge Cells"
  },
  {
    value: "addon-mongodb",
    label: "Mongodb"
  },
  {
    value: "addon-nav",
    label: "Nav"
  },
  {
    value: "addon-nav2",
    label: "Nav2"
  },
  {
    value: "addon-nodejs",
    label: "Nodejs"
  },
  {
    value: "addon-paintbrush",
    label: "Paintbrush"
  },
  {
    value: "addon-parameter",
    label: "Parameter"
  },
  {
    value: "addon-pdf-bw",
    label: "Pdf Bw"
  },
  {
    value: "addon-pdf-file",
    label: "Pdf File"
  },
  {
    value: "addon-pdf-report",
    label: "Pdf Report"
  },
  {
    value: "addon-pdf",
    label: "Pdf"
  },
  {
    value: "addon-person-box",
    label: "Person Box"
  },
  {
    value: "addon-plugin",
    label: "Plugin"
  },
  {
    value: "addon-png-file",
    label: "Png File"
  },
  {
    value: "addon-postcard-heart",
    label: "Postcard Heart"
  },
  {
    value: "addon-prescription",
    label: "Prescription"
  },
  {
    value: "addon-prescription2",
    label: "Prescription2"
  },
  {
    value: "addon-puzzle-fill",
    label: "Puzzle Fill"
  },
  {
    value: "addon-puzzle",
    label: "Puzzle"
  },
  {
    value: "addon-puzzle2",
    label: "Puzzle2"
  },
  {
    value: "addon-qr-code-scan",
    label: "Qr Code Scan"
  },
  {
    value: "addon-qr-code",
    label: "Qr Code"
  },
  {
    value: "addon-random",
    label: "Random"
  },
  {
    value: "addon-results",
    label: "Results"
  },
  {
    value: "addon-select-parent",
    label: "Select Parent"
  },
  {
    value: "addon-site",
    label: "Site"
  },
  {
    value: "addon-sql-open",
    label: "Sql Open"
  },
  {
    value: "addon-sql",
    label: "Sql"
  },
  {
    value: "addon-summary",
    label: "Summary"
  },
  {
    value: "addon-table",
    label: "Table"
  },
  {
    value: "addon-terminal",
    label: "Terminal"
  },
  {
    value: "addon-thermometer-half",
    label: "Thermometer Half"
  },
  {
    value: "addon-timeline",
    label: "Timeline"
  },
  {
    value: "addon-translate",
    label: "Translate"
  },
  {
    value: "addon-universal",
    label: "Universal"
  },
  {
    value: "addon-upc-scan",
    label: "Upc Scan"
  },
  {
    value: "addon-upload",
    label: "Upload"
  },
  {
    value: "addon-users",
    label: "Users"
  },
  {
    value: "addon-widget",
    label: "Widget"
  },
  {
    value: "addon-window-plus",
    label: "Window Plus"
  },
  {
    value: "addon-word",
    label: "Word"
  },
  {
    value: "addon-xls-file",
    label: "Xls File"
  },
  {
    value: "affix",
    label: "Affix"
  },
  {
    value: "alert-ui",
    label: "Alert Ui"
  },
  {
    value: "autonumber-input",
    label: "Autonumber Input"
  },
  {
    value: "avatar-ui",
    label: "Avatar Ui"
  },
  {
    value: "block-ui",
    label: "Block Ui"
  },
  {
    value: "btn-editor",
    label: "Btn Editor"
  },
  {
    value: "button-ui",
    label: "Button Ui"
  },
  {
    value: "card-pos",
    label: "Card Pos"
  },
  {
    value: "card",
    label: "Card"
  },
  {
    value: "carousel-ui",
    label: "Carousel Ui"
  },
  {
    value: "chart-ui",
    label: "Chart Ui"
  },
  {
    value: "checkbox-input",
    label: "Checkbox Input"
  },
  {
    value: "code-input",
    label: "Code Input"
  },
  {
    value: "collapse",
    label: "Collapse"
  },
  {
    value: "collapse2",
    label: "Collapse2"
  },
  {
    value: "color-input",
    label: "Color Input"
  },
  {
    value: "crop-input",
    label: "Crop Input"
  },
  {
    value: "custom-component",
    label: "Custom Component"
  },
  {
    value: "data-grid-ui",
    label: "Data Grid Ui"
  },
  {
    value: "date-input",
    label: "Date Input"
  },
  {
    value: "date-input2",
    label: "Date Input2"
  },
  {
    value: "date-input3",
    label: "Date Input3"
  },
  {
    value: "date-range-input",
    label: "Date Range Input"
  },
  {
    value: "description",
    label: "Description"
  },
  {
    value: "divider",
    label: "Divider"
  },
  {
    value: "drag",
    label: "Drag"
  },
  {
    value: "drawing-input",
    label: "Drawing Input"
  },
  {
    value: "dropdown-input",
    label: "Dropdown Input"
  },
  {
    value: "dropdown-ui",
    label: "Dropdown Ui"
  },
  {
    value: "dynamic-input",
    label: "Dynamic Input"
  },
  {
    value: "editor-add_column_after",
    label: "Add_column_after"
  },
  {
    value: "editor-add_column_before",
    label: "Add_column_before"
  },
  {
    value: "editor-add_row_after",
    label: "Add_row_after"
  },
  {
    value: "editor-add_row_before",
    label: "Add_row_before"
  },
  {
    value: "editor-align-center",
    label: "Align Center"
  },
  {
    value: "editor-align-justify",
    label: "Align Justify"
  },
  {
    value: "editor-align-left",
    label: "Align Left"
  },
  {
    value: "editor-align-right",
    label: "Align Right"
  },
  {
    value: "editor-arrow-left",
    label: "Arrow Left"
  },
  {
    value: "editor-bold",
    label: "Bold"
  },
  {
    value: "editor-clear-format",
    label: "Clear Format"
  },
  {
    value: "editor-code",
    label: "Code"
  },
  {
    value: "editor-compress",
    label: "Compress"
  },
  {
    value: "editor-delete_column",
    label: "Delete_column"
  },
  {
    value: "editor-delete_row",
    label: "Delete_row"
  },
  {
    value: "editor-edit",
    label: "Edit"
  },
  {
    value: "editor-ellipsis-h",
    label: "Ellipsis H"
  },
  {
    value: "editor-expand",
    label: "Expand"
  },
  {
    value: "editor-external-link",
    label: "External Link"
  },
  {
    value: "editor-file-code",
    label: "File Code"
  },
  {
    value: "editor-font-color",
    label: "Font Color"
  },
  {
    value: "editor-font-family",
    label: "Font Family"
  },
  {
    value: "editor-font-size",
    label: "Font Size"
  },
  {
    value: "editor-heading",
    label: "Heading"
  },
  {
    value: "editor-highlight",
    label: "Highlight"
  },
  {
    value: "editor-horizontal-rule",
    label: "Horizontal Rule"
  },
  {
    value: "editor-iframe",
    label: "Iframe"
  },
  {
    value: "editor-image-align",
    label: "Image Align"
  },
  {
    value: "editor-image",
    label: "Image"
  },
  {
    value: "editor-indent",
    label: "Indent"
  },
  {
    value: "editor-italic",
    label: "Italic"
  },
  {
    value: "editor-link",
    label: "Link"
  },
  {
    value: "editor-list-ol",
    label: "List Ol"
  },
  {
    value: "editor-list-ul",
    label: "List Ul"
  },
  {
    value: "editor-merge-cells",
    label: "Merge Cells"
  },
  {
    value: "editor-outdent",
    label: "Outdent"
  },
  {
    value: "editor-print",
    label: "Print"
  },
  {
    value: "editor-quote-right",
    label: "Quote Right"
  },
  {
    value: "editor-redo",
    label: "Redo"
  },
  {
    value: "editor-select-all",
    label: "Select All"
  },
  {
    value: "editor-split-cells",
    label: "Split Cells"
  },
  {
    value: "editor-strikethrough",
    label: "Strikethrough"
  },
  {
    value: "editor-subscript",
    label: "Subscript"
  },
  {
    value: "editor-superscript",
    label: "Superscript"
  },
  {
    value: "editor-table-header",
    label: "Table Header"
  },
  {
    value: "editor-table",
    label: "Table"
  },
  {
    value: "editor-tasks",
    label: "Tasks"
  },
  {
    value: "editor-text-height",
    label: "Text Height"
  },
  {
    value: "editor-trash-alt",
    label: "Trash Alt"
  },
  {
    value: "editor-underline",
    label: "Underline"
  },
  {
    value: "editor-undo",
    label: "Undo"
  },
  {
    value: "editor-unlink",
    label: "Unlink"
  },
  {
    value: "editor-upload-file",
    label: "Upload File"
  },
  {
    value: "editor-video",
    label: "Video"
  },
  {
    value: "el-add-location",
    label: "Add Location"
  },
  {
    value: "el-aim",
    label: "Aim"
  },
  {
    value: "el-alarm-clock",
    label: "Alarm Clock"
  },
  {
    value: "el-apple",
    label: "Apple"
  },
  {
    value: "el-arrow-down-bold",
    label: "Arrow Down Bold"
  },
  {
    value: "el-arrow-down",
    label: "Arrow Down"
  },
  {
    value: "el-arrow-left-bold",
    label: "Arrow Left Bold"
  },
  {
    value: "el-arrow-left",
    label: "Arrow Left"
  },
  {
    value: "el-arrow-right-bold",
    label: "Arrow Right Bold"
  },
  {
    value: "el-arrow-right",
    label: "Arrow Right"
  },
  {
    value: "el-arrow-up-bold",
    label: "Arrow Up Bold"
  },
  {
    value: "el-arrow-up",
    label: "Arrow Up"
  },
  {
    value: "el-avatar",
    label: "Avatar"
  },
  {
    value: "el-back",
    label: "Back"
  },
  {
    value: "el-baseball",
    label: "Baseball"
  },
  {
    value: "el-basketball",
    label: "Basketball"
  },
  {
    value: "el-bell-filled",
    label: "Bell Filled"
  },
  {
    value: "el-bell",
    label: "Bell"
  },
  {
    value: "el-bicycle",
    label: "Bicycle"
  },
  {
    value: "el-bottom-left",
    label: "Bottom Left"
  },
  {
    value: "el-bottom-right",
    label: "Bottom Right"
  },
  {
    value: "el-bottom",
    label: "Bottom"
  },
  {
    value: "el-bowl",
    label: "Bowl"
  },
  {
    value: "el-box",
    label: "Box"
  },
  {
    value: "el-briefcase",
    label: "Briefcase"
  },
  {
    value: "el-brush-filled",
    label: "Brush Filled"
  },
  {
    value: "el-brush",
    label: "Brush"
  },
  {
    value: "el-burger",
    label: "Burger"
  },
  {
    value: "el-calendar",
    label: "Calendar"
  },
  {
    value: "el-camera-filled",
    label: "Camera Filled"
  },
  {
    value: "el-camera",
    label: "Camera"
  },
  {
    value: "el-caret-bottom",
    label: "Caret Bottom"
  },
  {
    value: "el-caret-left",
    label: "Caret Left"
  },
  {
    value: "el-caret-right",
    label: "Caret Right"
  },
  {
    value: "el-caret-top",
    label: "Caret Top"
  },
  {
    value: "el-cellphone",
    label: "Cellphone"
  },
  {
    value: "el-chat-dot-round",
    label: "Chat Dot Round"
  },
  {
    value: "el-chat-dot-square",
    label: "Chat Dot Square"
  },
  {
    value: "el-chat-line-round",
    label: "Chat Line Round"
  },
  {
    value: "el-chat-line-square",
    label: "Chat Line Square"
  },
  {
    value: "el-chat-round",
    label: "Chat Round"
  },
  {
    value: "el-chat-square",
    label: "Chat Square"
  },
  {
    value: "el-check",
    label: "Check"
  },
  {
    value: "el-checked",
    label: "Checked"
  },
  {
    value: "el-cherry",
    label: "Cherry"
  },
  {
    value: "el-chicken",
    label: "Chicken"
  },
  {
    value: "el-chrome-filled",
    label: "Chrome Filled"
  },
  {
    value: "el-circle-check-filled",
    label: "Circle Check Filled"
  },
  {
    value: "el-circle-check",
    label: "Circle Check"
  },
  {
    value: "el-circle-close-filled",
    label: "Circle Close Filled"
  },
  {
    value: "el-circle-close",
    label: "Circle Close"
  },
  {
    value: "el-circle-plus-filled",
    label: "Circle Plus Filled"
  },
  {
    value: "el-circle-plus",
    label: "Circle Plus"
  },
  {
    value: "el-clock",
    label: "Clock"
  },
  {
    value: "el-close-bold",
    label: "Close Bold"
  },
  {
    value: "el-close",
    label: "Close"
  },
  {
    value: "el-cloudy",
    label: "Cloudy"
  },
  {
    value: "el-coffee-cup",
    label: "Coffee Cup"
  },
  {
    value: "el-coffee",
    label: "Coffee"
  },
  {
    value: "el-coin",
    label: "Coin"
  },
  {
    value: "el-cold-drink",
    label: "Cold Drink"
  },
  {
    value: "el-collection-tag",
    label: "Collection Tag"
  },
  {
    value: "el-collection",
    label: "Collection"
  },
  {
    value: "el-comment",
    label: "Comment"
  },
  {
    value: "el-compass",
    label: "Compass"
  },
  {
    value: "el-connection",
    label: "Connection"
  },
  {
    value: "el-coordinate",
    label: "Coordinate"
  },
  {
    value: "el-copy-document",
    label: "Copy Document"
  },
  {
    value: "el-cpu",
    label: "Cpu"
  },
  {
    value: "el-credit-card",
    label: "Credit Card"
  },
  {
    value: "el-crop",
    label: "Crop"
  },
  {
    value: "el-d-arrow-left",
    label: "D Arrow Left"
  },
  {
    value: "el-d-arrow-right",
    label: "D Arrow Right"
  },
  {
    value: "el-d-caret",
    label: "D Caret"
  },
  {
    value: "el-data-analysis",
    label: "Data Analysis"
  },
  {
    value: "el-data-board",
    label: "Data Board"
  },
  {
    value: "el-data-line",
    label: "Data Line"
  },
  {
    value: "el-delete-filled",
    label: "Delete Filled"
  },
  {
    value: "el-delete-location",
    label: "Delete Location"
  },
  {
    value: "el-delete",
    label: "Delete"
  },
  {
    value: "el-dessert",
    label: "Dessert"
  },
  {
    value: "el-discount",
    label: "Discount"
  },
  {
    value: "el-dish-dot",
    label: "Dish Dot"
  },
  {
    value: "el-dish",
    label: "Dish"
  },
  {
    value: "el-document-add",
    label: "Document Add"
  },
  {
    value: "el-document-checked",
    label: "Document Checked"
  },
  {
    value: "el-document-copy",
    label: "Document Copy"
  },
  {
    value: "el-document-delete",
    label: "Document Delete"
  },
  {
    value: "el-document-remove",
    label: "Document Remove"
  },
  {
    value: "el-document",
    label: "Document"
  },
  {
    value: "el-download",
    label: "Download"
  },
  {
    value: "el-drizzling",
    label: "Drizzling"
  },
  {
    value: "el-edit-pen",
    label: "Edit Pen"
  },
  {
    value: "el-edit",
    label: "Edit"
  },
  {
    value: "el-eleme-filled",
    label: "Eleme Filled"
  },
  {
    value: "el-eleme",
    label: "Eleme"
  },
  {
    value: "el-element-plus",
    label: "Element Plus"
  },
  {
    value: "el-expand",
    label: "Expand"
  },
  {
    value: "el-failed",
    label: "Failed"
  },
  {
    value: "el-female",
    label: "Female"
  },
  {
    value: "el-files",
    label: "Files"
  },
  {
    value: "el-film",
    label: "Film"
  },
  {
    value: "el-filter",
    label: "Filter"
  },
  {
    value: "el-finished",
    label: "Finished"
  },
  {
    value: "el-first-aid-kit",
    label: "First Aid Kit"
  },
  {
    value: "el-flag",
    label: "Flag"
  },
  {
    value: "el-fold",
    label: "Fold"
  },
  {
    value: "el-folder-add",
    label: "Folder Add"
  },
  {
    value: "el-folder-checked",
    label: "Folder Checked"
  },
  {
    value: "el-folder-delete",
    label: "Folder Delete"
  },
  {
    value: "el-folder-opened",
    label: "Folder Opened"
  },
  {
    value: "el-folder-remove",
    label: "Folder Remove"
  },
  {
    value: "el-folder",
    label: "Folder"
  },
  {
    value: "el-food",
    label: "Food"
  },
  {
    value: "el-football",
    label: "Football"
  },
  {
    value: "el-fork-spoon",
    label: "Fork Spoon"
  },
  {
    value: "el-fries",
    label: "Fries"
  },
  {
    value: "el-full-screen",
    label: "Full Screen"
  },
  {
    value: "el-goblet-full",
    label: "Goblet Full"
  },
  {
    value: "el-goblet-square-full",
    label: "Goblet Square Full"
  },
  {
    value: "el-goblet-square",
    label: "Goblet Square"
  },
  {
    value: "el-goblet",
    label: "Goblet"
  },
  {
    value: "el-gold-medal",
    label: "Gold Medal"
  },
  {
    value: "el-goods-filled",
    label: "Goods Filled"
  },
  {
    value: "el-goods",
    label: "Goods"
  },
  {
    value: "el-grape",
    label: "Grape"
  },
  {
    value: "el-grid",
    label: "Grid"
  },
  {
    value: "el-guide",
    label: "Guide"
  },
  {
    value: "el-handbag",
    label: "Handbag"
  },
  {
    value: "el-headset",
    label: "Headset"
  },
  {
    value: "el-help-filled",
    label: "Help Filled"
  },
  {
    value: "el-help",
    label: "Help"
  },
  {
    value: "el-hide",
    label: "Hide"
  },
  {
    value: "el-histogram",
    label: "Histogram"
  },
  {
    value: "el-home-filled",
    label: "Home Filled"
  },
  {
    value: "el-hot-water",
    label: "Hot Water"
  },
  {
    value: "el-house",
    label: "House"
  },
  {
    value: "el-ice-cream-round",
    label: "Ice Cream Round"
  },
  {
    value: "el-ice-cream-square",
    label: "Ice Cream Square"
  },
  {
    value: "el-ice-cream",
    label: "Ice Cream"
  },
  {
    value: "el-ice-drink",
    label: "Ice Drink"
  },
  {
    value: "el-ice-tea",
    label: "Ice Tea"
  },
  {
    value: "el-info-filled",
    label: "Info Filled"
  },
  {
    value: "el-iphone",
    label: "Iphone"
  },
  {
    value: "el-key",
    label: "Key"
  },
  {
    value: "el-knife-fork",
    label: "Knife Fork"
  },
  {
    value: "el-lightning",
    label: "Lightning"
  },
  {
    value: "el-link",
    label: "Link"
  },
  {
    value: "el-list",
    label: "List"
  },
  {
    value: "el-loading",
    label: "Loading"
  },
  {
    value: "el-location-filled",
    label: "Location Filled"
  },
  {
    value: "el-location-information",
    label: "Location Information"
  },
  {
    value: "el-location",
    label: "Location"
  },
  {
    value: "el-lock",
    label: "Lock"
  },
  {
    value: "el-lollipop",
    label: "Lollipop"
  },
  {
    value: "el-magic-stick",
    label: "Magic Stick"
  },
  {
    value: "el-magnet",
    label: "Magnet"
  },
  {
    value: "el-male",
    label: "Male"
  },
  {
    value: "el-management",
    label: "Management"
  },
  {
    value: "el-map-location",
    label: "Map Location"
  },
  {
    value: "el-medal",
    label: "Medal"
  },
  {
    value: "el-memo",
    label: "Memo"
  },
  {
    value: "el-menu",
    label: "Menu"
  },
  {
    value: "el-message-box",
    label: "Message Box"
  },
  {
    value: "el-message",
    label: "Message"
  },
  {
    value: "el-mic",
    label: "Mic"
  },
  {
    value: "el-microphone",
    label: "Microphone"
  },
  {
    value: "el-milk-tea",
    label: "Milk Tea"
  },
  {
    value: "el-minus",
    label: "Minus"
  },
  {
    value: "el-money",
    label: "Money"
  },
  {
    value: "el-monitor",
    label: "Monitor"
  },
  {
    value: "el-moon-night",
    label: "Moon Night"
  },
  {
    value: "el-moon",
    label: "Moon"
  },
  {
    value: "el-more-filled",
    label: "More Filled"
  },
  {
    value: "el-more",
    label: "More"
  },
  {
    value: "el-mostly-cloudy",
    label: "Mostly Cloudy"
  },
  {
    value: "el-mouse",
    label: "Mouse"
  },
  {
    value: "el-mug",
    label: "Mug"
  },
  {
    value: "el-mute-notification",
    label: "Mute Notification"
  },
  {
    value: "el-mute",
    label: "Mute"
  },
  {
    value: "el-no-smoking",
    label: "No Smoking"
  },
  {
    value: "el-notebook",
    label: "Notebook"
  },
  {
    value: "el-notification",
    label: "Notification"
  },
  {
    value: "el-odometer",
    label: "Odometer"
  },
  {
    value: "el-office-building",
    label: "Office Building"
  },
  {
    value: "el-open",
    label: "Open"
  },
  {
    value: "el-operation",
    label: "Operation"
  },
  {
    value: "el-opportunity",
    label: "Opportunity"
  },
  {
    value: "el-orange",
    label: "Orange"
  },
  {
    value: "el-paperclip",
    label: "Paperclip"
  },
  {
    value: "el-partly-cloudy",
    label: "Partly Cloudy"
  },
  {
    value: "el-pear",
    label: "Pear"
  },
  {
    value: "el-phone-filled",
    label: "Phone Filled"
  },
  {
    value: "el-phone",
    label: "Phone"
  },
  {
    value: "el-picture-filled",
    label: "Picture Filled"
  },
  {
    value: "el-picture-rounded",
    label: "Picture Rounded"
  },
  {
    value: "el-picture",
    label: "Picture"
  },
  {
    value: "el-pie-chart",
    label: "Pie Chart"
  },
  {
    value: "el-place",
    label: "Place"
  },
  {
    value: "el-platform",
    label: "Platform"
  },
  {
    value: "el-plus",
    label: "Plus"
  },
  {
    value: "el-pointer",
    label: "Pointer"
  },
  {
    value: "el-position",
    label: "Position"
  },
  {
    value: "el-postcard",
    label: "Postcard"
  },
  {
    value: "el-pouring",
    label: "Pouring"
  },
  {
    value: "el-present",
    label: "Present"
  },
  {
    value: "el-price-tag",
    label: "Price Tag"
  },
  {
    value: "el-printer",
    label: "Printer"
  },
  {
    value: "el-promotion",
    label: "Promotion"
  },
  {
    value: "el-quartz-watch",
    label: "Quartz Watch"
  },
  {
    value: "el-question-filled",
    label: "Question Filled"
  },
  {
    value: "el-rank",
    label: "Rank"
  },
  {
    value: "el-reading-lamp",
    label: "Reading Lamp"
  },
  {
    value: "el-reading",
    label: "Reading"
  },
  {
    value: "el-refresh-left",
    label: "Refresh Left"
  },
  {
    value: "el-refresh-right",
    label: "Refresh Right"
  },
  {
    value: "el-refresh",
    label: "Refresh"
  },
  {
    value: "el-refrigerator",
    label: "Refrigerator"
  },
  {
    value: "el-remove-filled",
    label: "Remove Filled"
  },
  {
    value: "el-remove",
    label: "Remove"
  },
  {
    value: "el-right",
    label: "Right"
  },
  {
    value: "el-scale-to-original",
    label: "Scale To Original"
  },
  {
    value: "el-school",
    label: "School"
  },
  {
    value: "el-scissor",
    label: "Scissor"
  },
  {
    value: "el-search",
    label: "Search"
  },
  {
    value: "el-select",
    label: "Select"
  },
  {
    value: "el-sell",
    label: "Sell"
  },
  {
    value: "el-semi-select",
    label: "Semi Select"
  },
  {
    value: "el-service",
    label: "Service"
  },
  {
    value: "el-set-up",
    label: "Set Up"
  },
  {
    value: "el-setting",
    label: "Setting"
  },
  {
    value: "el-share",
    label: "Share"
  },
  {
    value: "el-ship",
    label: "Ship"
  },
  {
    value: "el-shop",
    label: "Shop"
  },
  {
    value: "el-shopping-bag",
    label: "Shopping Bag"
  },
  {
    value: "el-shopping-cart-full",
    label: "Shopping Cart Full"
  },
  {
    value: "el-shopping-cart",
    label: "Shopping Cart"
  },
  {
    value: "el-shopping-trolley",
    label: "Shopping Trolley"
  },
  {
    value: "el-smoking",
    label: "Smoking"
  },
  {
    value: "el-soccer",
    label: "Soccer"
  },
  {
    value: "el-sold-out",
    label: "Sold Out"
  },
  {
    value: "el-sort-down",
    label: "Sort Down"
  },
  {
    value: "el-sort-up",
    label: "Sort Up"
  },
  {
    value: "el-sort",
    label: "Sort"
  },
  {
    value: "el-stamp",
    label: "Stamp"
  },
  {
    value: "el-star-filled",
    label: "Star Filled"
  },
  {
    value: "el-star",
    label: "Star"
  },
  {
    value: "el-stopwatch",
    label: "Stopwatch"
  },
  {
    value: "el-success-filled",
    label: "Success Filled"
  },
  {
    value: "el-sugar",
    label: "Sugar"
  },
  {
    value: "el-suitcase-line",
    label: "Suitcase Line"
  },
  {
    value: "el-suitcase",
    label: "Suitcase"
  },
  {
    value: "el-sunny",
    label: "Sunny"
  },
  {
    value: "el-sunrise",
    label: "Sunrise"
  },
  {
    value: "el-sunset",
    label: "Sunset"
  },
  {
    value: "el-switch-button",
    label: "Switch Button"
  },
  {
    value: "el-switch-filled",
    label: "Switch Filled"
  },
  {
    value: "el-switch",
    label: "Switch"
  },
  {
    value: "el-takeaway-box",
    label: "Takeaway Box"
  },
  {
    value: "el-ticket",
    label: "Ticket"
  },
  {
    value: "el-tickets",
    label: "Tickets"
  },
  {
    value: "el-timer",
    label: "Timer"
  },
  {
    value: "el-toilet-paper",
    label: "Toilet Paper"
  },
  {
    value: "el-tools",
    label: "Tools"
  },
  {
    value: "el-top-left",
    label: "Top Left"
  },
  {
    value: "el-top-right",
    label: "Top Right"
  },
  {
    value: "el-top",
    label: "Top"
  },
  {
    value: "el-trend-charts",
    label: "Trend Charts"
  },
  {
    value: "el-trophy-base",
    label: "Trophy Base"
  },
  {
    value: "el-trophy",
    label: "Trophy"
  },
  {
    value: "el-turn-off",
    label: "Turn Off"
  },
  {
    value: "el-umbrella",
    label: "Umbrella"
  },
  {
    value: "el-unlock",
    label: "Unlock"
  },
  {
    value: "el-upload-filled",
    label: "Upload Filled"
  },
  {
    value: "el-upload",
    label: "Upload"
  },
  {
    value: "el-user-filled",
    label: "User Filled"
  },
  {
    value: "el-user",
    label: "User"
  },
  {
    value: "el-van",
    label: "Van"
  },
  {
    value: "el-video-camera-filled",
    label: "Video Camera Filled"
  },
  {
    value: "el-video-camera",
    label: "Video Camera"
  },
  {
    value: "el-video-pause",
    label: "Video Pause"
  },
  {
    value: "el-video-play",
    label: "Video Play"
  },
  {
    value: "el-view",
    label: "View"
  },
  {
    value: "el-wallet-filled",
    label: "Wallet Filled"
  },
  {
    value: "el-wallet",
    label: "Wallet"
  },
  {
    value: "el-warn-triangle-filled",
    label: "Warn Triangle Filled"
  },
  {
    value: "el-warning-filled",
    label: "Warning Filled"
  },
  {
    value: "el-warning",
    label: "Warning"
  },
  {
    value: "el-watch",
    label: "Watch"
  },
  {
    value: "el-watermelon",
    label: "Watermelon"
  },
  {
    value: "el-wind-power",
    label: "Wind Power"
  },
  {
    value: "el-zoom-in",
    label: "Zoom In"
  },
  {
    value: "el-zoom-out",
    label: "Zoom Out"
  },
  {
    value: "file-upload-input",
    label: "File Upload Input"
  },
  {
    value: "grid",
    label: "Grid"
  },
  {
    value: "group-list-input",
    label: "Group List Input"
  },
  {
    value: "html-input",
    label: "Html Input"
  },
  {
    value: "html-ui",
    label: "Html Ui"
  },
  {
    value: "icon-input",
    label: "Icon Input"
  },
  {
    value: "icon-box",
    label: "Box"
  },
  {
    value: "icon-css3",
    label: "Css3"
  },
  {
    value: "icon-html5",
    label: "Html5"
  },
  {
    value: "icon-js",
    label: "Js"
  },
  {
    value: "icon-line",
    label: "Line"
  },
  {
    value: "icon-mongo",
    label: "Mongo"
  },
  {
    value: "icon-pdf",
    label: "Pdf"
  },
  {
    value: "icon-picture",
    label: "Picture"
  },
  {
    value: "icon-puzzle",
    label: "Puzzle"
  },
  {
    value: "icon-puzzle2",
    label: "Puzzle2"
  },
  {
    value: "icon-sdform",
    label: "Sdform"
  },
  {
    value: "icon-sql-database",
    label: "Sql Database"
  },
  {
    value: "icon-ts",
    label: "Ts"
  },
  {
    value: "image-ui",
    label: "Image Ui"
  },
  {
    value: "image-upload-input",
    label: "Image Upload Input"
  },
  {
    value: "json-input",
    label: "Json Input"
  },
  {
    value: "link-ui",
    label: "Link Ui"
  },
  {
    value: "list-ui",
    label: "List Ui"
  },
  {
    value: "logo",
    label: "Logo"
  },
  {
    value: "logo2",
    label: "Logo2"
  },
  {
    value: "logo3",
    label: "Logo3"
  },
  {
    value: "map-input",
    label: "Map Input"
  },
  {
    value: "masked-input",
    label: "Masked Input"
  },
  {
    value: "multiple-date",
    label: "Multiple Date"
  },
  {
    value: "node-tree",
    label: "Node Tree"
  },
  {
    value: "number-input",
    label: "Number Input"
  },
  {
    value: "object-group",
    label: "Object Group"
  },
  {
    value: "objectid-input",
    label: "Objectid Input"
  },
  {
    value: "popver-ui",
    label: "Popver Ui"
  },
  {
    value: "progress-ui",
    label: "Progress Ui"
  },
  {
    value: "qr-code-scan",
    label: "Qr Code Scan"
  },
  {
    value: "radio-input",
    label: "Radio Input"
  },
  {
    value: "radio-text-input",
    label: "Radio Text Input"
  },
  {
    value: "rate-input",
    label: "Rate Input"
  },
  {
    value: "redo",
    label: "Redo"
  },
  {
    value: "report-ui",
    label: "Report Ui"
  },
  {
    value: "rich-editor-field",
    label: "Rich Editor Field"
  },
  {
    value: "scrollbar",
    label: "Scrollbar"
  },
  {
    value: "segmented-ui",
    label: "Segmented Ui"
  },
  {
    value: "select-data-input",
    label: "Select Data Input"
  },
  {
    value: "select-form-input",
    label: "Select Form Input"
  },
  {
    value: "select-input",
    label: "Select Input"
  },
  {
    value: "select-path-input",
    label: "Select Path Input"
  },
  {
    value: "select-script-input",
    label: "Select Script Input"
  },
  {
    value: "side-menu-ui",
    label: "Side Menu Ui"
  },
  {
    value: "slider-input",
    label: "Slider Input"
  },
  {
    value: "slot-field",
    label: "Slot Field"
  },
  {
    value: "space",
    label: "Space"
  },
  {
    value: "static-text",
    label: "Static Text"
  },
  {
    value: "statistic-ui",
    label: "Statistic Ui"
  },
  {
    value: "step-ui",
    label: "Step Ui"
  },
  {
    value: "sub-form",
    label: "Sub Form"
  },
  {
    value: "svg-ui",
    label: "Svg Ui"
  },
  {
    value: "switch-input",
    label: "Switch Input"
  },
  {
    value: "tab",
    label: "Tab"
  },
  {
    value: "table",
    label: "Table"
  },
  {
    value: "tags-input",
    label: "Tags Input"
  },
  {
    value: "text-input",
    label: "Text Input"
  },
  {
    value: "text-ui",
    label: "Text Ui"
  },
  {
    value: "textarea-input",
    label: "Textarea Input"
  },
  {
    value: "time-input",
    label: "Time Input"
  },
  {
    value: "time-range-input",
    label: "Time Range Input"
  },
  {
    value: "time-select",
    label: "Time Select"
  },
  {
    value: "timeline-ui",
    label: "Timeline Ui"
  },
  {
    value: "tour-ui",
    label: "Tour Ui"
  },
  {
    value: "undo",
    label: "Undo"
  }
], sb = [
  {
    value: "add-location",
    label: "Add Location"
  },
  {
    value: "aim",
    label: "Aim"
  },
  {
    value: "alarm-clock",
    label: "Alarm Clock"
  },
  {
    value: "apple",
    label: "Apple"
  },
  {
    value: "arrow-down-bold",
    label: "Arrow Down Bold"
  },
  {
    value: "arrow-down",
    label: "Arrow Down"
  },
  {
    value: "arrow-left-bold",
    label: "Arrow Left Bold"
  },
  {
    value: "arrow-left",
    label: "Arrow Left"
  },
  {
    value: "arrow-right-bold",
    label: "Arrow Right Bold"
  },
  {
    value: "arrow-right",
    label: "Arrow Right"
  },
  {
    value: "arrow-up-bold",
    label: "Arrow Up Bold"
  },
  {
    value: "arrow-up",
    label: "Arrow Up"
  },
  {
    value: "avatar",
    label: "Avatar"
  },
  {
    value: "back",
    label: "Back"
  },
  {
    value: "baseball",
    label: "Baseball"
  },
  {
    value: "basketball",
    label: "Basketball"
  },
  {
    value: "bell-filled",
    label: "Bell Filled"
  },
  {
    value: "bell",
    label: "Bell"
  },
  {
    value: "bicycle",
    label: "Bicycle"
  },
  {
    value: "bottom-left",
    label: "Bottom Left"
  },
  {
    value: "bottom-right",
    label: "Bottom Right"
  },
  {
    value: "bottom",
    label: "Bottom"
  },
  {
    value: "bowl",
    label: "Bowl"
  },
  {
    value: "box",
    label: "Box"
  },
  {
    value: "briefcase",
    label: "Briefcase"
  },
  {
    value: "brush-filled",
    label: "Brush Filled"
  },
  {
    value: "brush",
    label: "Brush"
  },
  {
    value: "burger",
    label: "Burger"
  },
  {
    value: "calendar",
    label: "Calendar"
  },
  {
    value: "camera-filled",
    label: "Camera Filled"
  },
  {
    value: "camera",
    label: "Camera"
  },
  {
    value: "caret-bottom",
    label: "Caret Bottom"
  },
  {
    value: "caret-left",
    label: "Caret Left"
  },
  {
    value: "caret-right",
    label: "Caret Right"
  },
  {
    value: "caret-top",
    label: "Caret Top"
  },
  {
    value: "cellphone",
    label: "Cellphone"
  },
  {
    value: "chat-dot-round",
    label: "Chat Dot Round"
  },
  {
    value: "chat-dot-square",
    label: "Chat Dot Square"
  },
  {
    value: "chat-line-round",
    label: "Chat Line Round"
  },
  {
    value: "chat-line-square",
    label: "Chat Line Square"
  },
  {
    value: "chat-round",
    label: "Chat Round"
  },
  {
    value: "chat-square",
    label: "Chat Square"
  },
  {
    value: "check",
    label: "Check"
  },
  {
    value: "checked",
    label: "Checked"
  },
  {
    value: "cherry",
    label: "Cherry"
  },
  {
    value: "chicken",
    label: "Chicken"
  },
  {
    value: "chrome-filled",
    label: "Chrome Filled"
  },
  {
    value: "circle-check-filled",
    label: "Circle Check Filled"
  },
  {
    value: "circle-check",
    label: "Circle Check"
  },
  {
    value: "circle-close-filled",
    label: "Circle Close Filled"
  },
  {
    value: "circle-close",
    label: "Circle Close"
  },
  {
    value: "circle-plus-filled",
    label: "Circle Plus Filled"
  },
  {
    value: "circle-plus",
    label: "Circle Plus"
  },
  {
    value: "clock",
    label: "Clock"
  },
  {
    value: "close-bold",
    label: "Close Bold"
  },
  {
    value: "close",
    label: "Close"
  },
  {
    value: "cloudy",
    label: "Cloudy"
  },
  {
    value: "coffee-cup",
    label: "Coffee Cup"
  },
  {
    value: "coffee",
    label: "Coffee"
  },
  {
    value: "coin",
    label: "Coin"
  },
  {
    value: "cold-drink",
    label: "Cold Drink"
  },
  {
    value: "collection-tag",
    label: "Collection Tag"
  },
  {
    value: "collection",
    label: "Collection"
  },
  {
    value: "comment",
    label: "Comment"
  },
  {
    value: "compass",
    label: "Compass"
  },
  {
    value: "connection",
    label: "Connection"
  },
  {
    value: "coordinate",
    label: "Coordinate"
  },
  {
    value: "copy-document",
    label: "Copy Document"
  },
  {
    value: "cpu",
    label: "Cpu"
  },
  {
    value: "credit-card",
    label: "Credit Card"
  },
  {
    value: "crop",
    label: "Crop"
  },
  {
    value: "d-arrow-left",
    label: "D Arrow Left"
  },
  {
    value: "d-arrow-right",
    label: "D Arrow Right"
  },
  {
    value: "d-caret",
    label: "D Caret"
  },
  {
    value: "data-analysis",
    label: "Data Analysis"
  },
  {
    value: "data-board",
    label: "Data Board"
  },
  {
    value: "data-line",
    label: "Data Line"
  },
  {
    value: "delete-filled",
    label: "Delete Filled"
  },
  {
    value: "delete-location",
    label: "Delete Location"
  },
  {
    value: "delete",
    label: "Delete"
  },
  {
    value: "dessert",
    label: "Dessert"
  },
  {
    value: "discount",
    label: "Discount"
  },
  {
    value: "dish-dot",
    label: "Dish Dot"
  },
  {
    value: "dish",
    label: "Dish"
  },
  {
    value: "document-add",
    label: "Document Add"
  },
  {
    value: "document-checked",
    label: "Document Checked"
  },
  {
    value: "document-copy",
    label: "Document Copy"
  },
  {
    value: "document-delete",
    label: "Document Delete"
  },
  {
    value: "document-remove",
    label: "Document Remove"
  },
  {
    value: "document",
    label: "Document"
  },
  {
    value: "download",
    label: "Download"
  },
  {
    value: "drizzling",
    label: "Drizzling"
  },
  {
    value: "edit-pen",
    label: "Edit Pen"
  },
  {
    value: "edit",
    label: "Edit"
  },
  {
    value: "eleme-filled",
    label: "Eleme Filled"
  },
  {
    value: "eleme",
    label: "Eleme"
  },
  {
    value: "element-plus",
    label: "Element Plus"
  },
  {
    value: "expand",
    label: "Expand"
  },
  {
    value: "failed",
    label: "Failed"
  },
  {
    value: "female",
    label: "Female"
  },
  {
    value: "files",
    label: "Files"
  },
  {
    value: "film",
    label: "Film"
  },
  {
    value: "filter",
    label: "Filter"
  },
  {
    value: "finished",
    label: "Finished"
  },
  {
    value: "first-aid-kit",
    label: "First Aid Kit"
  },
  {
    value: "flag",
    label: "Flag"
  },
  {
    value: "fold",
    label: "Fold"
  },
  {
    value: "folder-add",
    label: "Folder Add"
  },
  {
    value: "folder-checked",
    label: "Folder Checked"
  },
  {
    value: "folder-delete",
    label: "Folder Delete"
  },
  {
    value: "folder-opened",
    label: "Folder Opened"
  },
  {
    value: "folder-remove",
    label: "Folder Remove"
  },
  {
    value: "folder",
    label: "Folder"
  },
  {
    value: "food",
    label: "Food"
  },
  {
    value: "football",
    label: "Football"
  },
  {
    value: "fork-spoon",
    label: "Fork Spoon"
  },
  {
    value: "fries",
    label: "Fries"
  },
  {
    value: "full-screen",
    label: "Full Screen"
  },
  {
    value: "goblet-full",
    label: "Goblet Full"
  },
  {
    value: "goblet-square-full",
    label: "Goblet Square Full"
  },
  {
    value: "goblet-square",
    label: "Goblet Square"
  },
  {
    value: "goblet",
    label: "Goblet"
  },
  {
    value: "gold-medal",
    label: "Gold Medal"
  },
  {
    value: "goods-filled",
    label: "Goods Filled"
  },
  {
    value: "goods",
    label: "Goods"
  },
  {
    value: "grape",
    label: "Grape"
  },
  {
    value: "grid",
    label: "Grid"
  },
  {
    value: "guide",
    label: "Guide"
  },
  {
    value: "handbag",
    label: "Handbag"
  },
  {
    value: "headset",
    label: "Headset"
  },
  {
    value: "help-filled",
    label: "Help Filled"
  },
  {
    value: "help",
    label: "Help"
  },
  {
    value: "hide",
    label: "Hide"
  },
  {
    value: "histogram",
    label: "Histogram"
  },
  {
    value: "home-filled",
    label: "Home Filled"
  },
  {
    value: "hot-water",
    label: "Hot Water"
  },
  {
    value: "house",
    label: "House"
  },
  {
    value: "ice-cream-round",
    label: "Ice Cream Round"
  },
  {
    value: "ice-cream-square",
    label: "Ice Cream Square"
  },
  {
    value: "ice-cream",
    label: "Ice Cream"
  },
  {
    value: "ice-drink",
    label: "Ice Drink"
  },
  {
    value: "ice-tea",
    label: "Ice Tea"
  },
  {
    value: "info-filled",
    label: "Info Filled"
  },
  {
    value: "iphone",
    label: "Iphone"
  },
  {
    value: "key",
    label: "Key"
  },
  {
    value: "knife-fork",
    label: "Knife Fork"
  },
  {
    value: "lightning",
    label: "Lightning"
  },
  {
    value: "link",
    label: "Link"
  },
  {
    value: "list",
    label: "List"
  },
  {
    value: "loading",
    label: "Loading"
  },
  {
    value: "location-filled",
    label: "Location Filled"
  },
  {
    value: "location-information",
    label: "Location Information"
  },
  {
    value: "location",
    label: "Location"
  },
  {
    value: "lock",
    label: "Lock"
  },
  {
    value: "lollipop",
    label: "Lollipop"
  },
  {
    value: "magic-stick",
    label: "Magic Stick"
  },
  {
    value: "magnet",
    label: "Magnet"
  },
  {
    value: "male",
    label: "Male"
  },
  {
    value: "management",
    label: "Management"
  },
  {
    value: "map-location",
    label: "Map Location"
  },
  {
    value: "medal",
    label: "Medal"
  },
  {
    value: "memo",
    label: "Memo"
  },
  {
    value: "menu",
    label: "Menu"
  },
  {
    value: "message-box",
    label: "Message Box"
  },
  {
    value: "message",
    label: "Message"
  },
  {
    value: "mic",
    label: "Mic"
  },
  {
    value: "microphone",
    label: "Microphone"
  },
  {
    value: "milk-tea",
    label: "Milk Tea"
  },
  {
    value: "minus",
    label: "Minus"
  },
  {
    value: "money",
    label: "Money"
  },
  {
    value: "monitor",
    label: "Monitor"
  },
  {
    value: "moon-night",
    label: "Moon Night"
  },
  {
    value: "moon",
    label: "Moon"
  },
  {
    value: "more-filled",
    label: "More Filled"
  },
  {
    value: "more",
    label: "More"
  },
  {
    value: "mostly-cloudy",
    label: "Mostly Cloudy"
  },
  {
    value: "mouse",
    label: "Mouse"
  },
  {
    value: "mug",
    label: "Mug"
  },
  {
    value: "mute-notification",
    label: "Mute Notification"
  },
  {
    value: "mute",
    label: "Mute"
  },
  {
    value: "no-smoking",
    label: "No Smoking"
  },
  {
    value: "notebook",
    label: "Notebook"
  },
  {
    value: "notification",
    label: "Notification"
  },
  {
    value: "odometer",
    label: "Odometer"
  },
  {
    value: "office-building",
    label: "Office Building"
  },
  {
    value: "open",
    label: "Open"
  },
  {
    value: "operation",
    label: "Operation"
  },
  {
    value: "opportunity",
    label: "Opportunity"
  },
  {
    value: "orange",
    label: "Orange"
  },
  {
    value: "paperclip",
    label: "Paperclip"
  },
  {
    value: "partly-cloudy",
    label: "Partly Cloudy"
  },
  {
    value: "pear",
    label: "Pear"
  },
  {
    value: "phone-filled",
    label: "Phone Filled"
  },
  {
    value: "phone",
    label: "Phone"
  },
  {
    value: "picture-filled",
    label: "Picture Filled"
  },
  {
    value: "picture-rounded",
    label: "Picture Rounded"
  },
  {
    value: "picture",
    label: "Picture"
  },
  {
    value: "pie-chart",
    label: "Pie Chart"
  },
  {
    value: "place",
    label: "Place"
  },
  {
    value: "platform",
    label: "Platform"
  },
  {
    value: "plus",
    label: "Plus"
  },
  {
    value: "pointer",
    label: "Pointer"
  },
  {
    value: "position",
    label: "Position"
  },
  {
    value: "postcard",
    label: "Postcard"
  },
  {
    value: "pouring",
    label: "Pouring"
  },
  {
    value: "present",
    label: "Present"
  },
  {
    value: "price-tag",
    label: "Price Tag"
  },
  {
    value: "printer",
    label: "Printer"
  },
  {
    value: "promotion",
    label: "Promotion"
  },
  {
    value: "quartz-watch",
    label: "Quartz Watch"
  },
  {
    value: "question-filled",
    label: "Question Filled"
  },
  {
    value: "rank",
    label: "Rank"
  },
  {
    value: "reading-lamp",
    label: "Reading Lamp"
  },
  {
    value: "reading",
    label: "Reading"
  },
  {
    value: "refresh-left",
    label: "Refresh Left"
  },
  {
    value: "refresh-right",
    label: "Refresh Right"
  },
  {
    value: "refresh",
    label: "Refresh"
  },
  {
    value: "refrigerator",
    label: "Refrigerator"
  },
  {
    value: "remove-filled",
    label: "Remove Filled"
  },
  {
    value: "remove",
    label: "Remove"
  },
  {
    value: "right",
    label: "Right"
  },
  {
    value: "scale-to-original",
    label: "Scale To Original"
  },
  {
    value: "school",
    label: "School"
  },
  {
    value: "scissor",
    label: "Scissor"
  },
  {
    value: "search",
    label: "Search"
  },
  {
    value: "select",
    label: "Select"
  },
  {
    value: "sell",
    label: "Sell"
  },
  {
    value: "semi-select",
    label: "Semi Select"
  },
  {
    value: "service",
    label: "Service"
  },
  {
    value: "set-up",
    label: "Set Up"
  },
  {
    value: "setting",
    label: "Setting"
  },
  {
    value: "share",
    label: "Share"
  },
  {
    value: "ship",
    label: "Ship"
  },
  {
    value: "shop",
    label: "Shop"
  },
  {
    value: "shopping-bag",
    label: "Shopping Bag"
  },
  {
    value: "shopping-cart-full",
    label: "Shopping Cart Full"
  },
  {
    value: "shopping-cart",
    label: "Shopping Cart"
  },
  {
    value: "shopping-trolley",
    label: "Shopping Trolley"
  },
  {
    value: "smoking",
    label: "Smoking"
  },
  {
    value: "soccer",
    label: "Soccer"
  },
  {
    value: "sold-out",
    label: "Sold Out"
  },
  {
    value: "sort-down",
    label: "Sort Down"
  },
  {
    value: "sort-up",
    label: "Sort Up"
  },
  {
    value: "sort",
    label: "Sort"
  },
  {
    value: "stamp",
    label: "Stamp"
  },
  {
    value: "star-filled",
    label: "Star Filled"
  },
  {
    value: "star",
    label: "Star"
  },
  {
    value: "stopwatch",
    label: "Stopwatch"
  },
  {
    value: "success-filled",
    label: "Success Filled"
  },
  {
    value: "sugar",
    label: "Sugar"
  },
  {
    value: "suitcase-line",
    label: "Suitcase Line"
  },
  {
    value: "suitcase",
    label: "Suitcase"
  },
  {
    value: "sunny",
    label: "Sunny"
  },
  {
    value: "sunrise",
    label: "Sunrise"
  },
  {
    value: "sunset",
    label: "Sunset"
  },
  {
    value: "switch-button",
    label: "Switch Button"
  },
  {
    value: "switch-filled",
    label: "Switch Filled"
  },
  {
    value: "switch",
    label: "Switch"
  },
  {
    value: "takeaway-box",
    label: "Takeaway Box"
  },
  {
    value: "ticket",
    label: "Ticket"
  },
  {
    value: "tickets",
    label: "Tickets"
  },
  {
    value: "timer",
    label: "Timer"
  },
  {
    value: "toilet-paper",
    label: "Toilet Paper"
  },
  {
    value: "tools",
    label: "Tools"
  },
  {
    value: "top-left",
    label: "Top Left"
  },
  {
    value: "top-right",
    label: "Top Right"
  },
  {
    value: "top",
    label: "Top"
  },
  {
    value: "trend-charts",
    label: "Trend Charts"
  },
  {
    value: "trophy-base",
    label: "Trophy Base"
  },
  {
    value: "trophy",
    label: "Trophy"
  },
  {
    value: "turn-off",
    label: "Turn Off"
  },
  {
    value: "umbrella",
    label: "Umbrella"
  },
  {
    value: "unlock",
    label: "Unlock"
  },
  {
    value: "upload-filled",
    label: "Upload Filled"
  },
  {
    value: "upload",
    label: "Upload"
  },
  {
    value: "user-filled",
    label: "User Filled"
  },
  {
    value: "user",
    label: "User"
  },
  {
    value: "van",
    label: "Van"
  },
  {
    value: "video-camera-filled",
    label: "Video Camera Filled"
  },
  {
    value: "video-camera",
    label: "Video Camera"
  },
  {
    value: "video-pause",
    label: "Video Pause"
  },
  {
    value: "video-play",
    label: "Video Play"
  },
  {
    value: "view",
    label: "View"
  },
  {
    value: "wallet-filled",
    label: "Wallet Filled"
  },
  {
    value: "wallet",
    label: "Wallet"
  },
  {
    value: "warn-triangle-filled",
    label: "Warn Triangle Filled"
  },
  {
    value: "warning-filled",
    label: "Warning Filled"
  },
  {
    value: "warning",
    label: "Warning"
  },
  {
    value: "watch",
    label: "Watch"
  },
  {
    value: "watermelon",
    label: "Watermelon"
  },
  {
    value: "wind-power",
    label: "Wind Power"
  },
  {
    value: "zoom-in",
    label: "Zoom In"
  },
  {
    value: "zoom-out",
    label: "Zoom Out"
  }
], rb = B({
  name: "SdIcon",
  // components: { svg-icon },
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    elIcons: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Search by icon name"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      // setter
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t);
      }
    }
  },
  data() {
    return {
      itemsData: [],
      loading: !1
    };
  },
  created() {
    this.elIcons ? this.restaurants = P(sb) : this.restaurants = P(nb);
  },
  setup(e, t) {
    return {
      restaurants: q([])
    };
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    },
    remoteMethod(e) {
      const t = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: true,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          {
            name: "label",
            weight: 0.3
          },
          {
            name: "value",
            weight: 0.7
          }
        ],
        includeScore: !0,
        useExtendedSearch: !0
      }, a = this;
      new Promise(function(o, i) {
        const s = new Ir(a.restaurants, t), u = e ? s.search("'" + e).map((m) => m.item) : a.restaurants;
        a.loading = !0, u ? o(u) : i([]);
      }).then((o) => {
        this.loading = !1, this.itemsData = P(o);
      }).catch((o) => {
        this.loading = !1, this.itemsData = [];
      });
    }
  }
}), db = { class: "value" }, ub = { class: "value" };
function pb(e, t, a, l, o, i) {
  const s = we, u = It, m = Dt;
  return n(), h(m, {
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.value = f),
    filterable: "",
    remote: "",
    "reserve-keyword": "",
    "remote-show-suffix": "",
    clearable: "",
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    disabled: e.disabled,
    "remote-method": e.remoteMethod,
    placeholder: e.placeholder,
    loading: e.loading,
    onChange: e.handleChange
  }, {
    label: r(({ label: f, value: c }) => [
      d(s, {
        "icon-name": e.elIcons ? "el-" + c : c,
        size: "14px",
        class: "mr-1"
      }, null, 8, ["icon-name"]),
      t[1] || (t[1] = D()),
      C("span", db, M(f), 1)
    ]),
    default: r(() => [
      (n(!0), v(L, null, G(e.itemsData, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: f.value
      }, {
        default: r(() => [
          d(s, {
            "icon-name": e.elIcons ? "el-" + f.value : f.value,
            size: "14px",
            class: "mr-1"
          }, null, 8, ["icon-name"]),
          t[2] || (t[2] = D()),
          C("span", ub, M(f.label), 1)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128))
    ]),
    _: 1
  }, 8, ["modelValue", "multiple", "allow-create", "disabled", "remote-method", "placeholder", "loading", "onChange"]);
}
const ZS = /* @__PURE__ */ j(rb, [["render", pb]]), mb = B({
  name: "OptionsItemSetting",
  props: {
    typeSelect: String,
    modelValue: {
      type: Array,
      default: [],
      required: !0
    },
    readonly: Boolean
  },
  data() {
    return {
      resizeCleanup: null,
      showImportDialogFlag: !1,
      optionLines: "",
      cascaderOptions: "",
      showImportCascaderDialogFlag: !1,
      //separator: '||',
      separator: ",",
      optionItems: [],
      popupWidth: "50%"
    };
  },
  mounted() {
    this.optionItems = this.modelValue, this.popupWidth = le("50%"), this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.popupWidth = le("50%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    focusText(e) {
      e.target.select();
    },
    emitDefaultValueChange() {
    },
    deleteOption(e, t) {
      this.optionItems.splice(t, 1), this.$emit("update:modelValue", this.optionItems);
    },
    addOption() {
      let e = this.optionItems.length + 1;
      this.optionItems.push({
        value: String(e),
        label: "new option " + e
      }), this.$emit("update:modelValue", this.optionItems);
    },
    importOptions() {
      this.optionLines = "", this.optionItems.length > 0 && this.optionItems.forEach((e) => {
        e.value === e.label ? this.optionLines += e.value + `
` : this.optionLines += e.value + this.separator + e.label + `
`;
      }), this.showImportDialogFlag = !0;
    },
    saveOptions() {
      let e = this.optionLines.split(`
`);
      e.length > 0 ? (this.optionItems = [], e.forEach((t) => {
        t && t.trim() && (t.indexOf(this.separator) !== -1 ? this.optionItems.push({
          value: t.split(this.separator)[0],
          label: t.split(this.separator)[1]
        }) : this.optionItems.push({
          value: t,
          label: t
        }));
      })) : this.optionItems = [], this.showImportDialogFlag = !1;
    }
  }
}), hb = { class: "option-items-pane" }, fb = { class: "opt-item" }, cb = { key: 1 }, bb = {
  key: 3,
  class: ""
}, gb = { class: "dialog-footer" };
function yb(e, t, a, l, o, i) {
  const s = Ie, u = we, m = ie, f = X("draggable"), c = Ke, _ = Mo, $ = Ce;
  return n(), v("div", hb, [
    e.optionItems && e.optionItems.length > 0 ? (n(), h(f, ae({
      key: 0,
      tag: "ul",
      list: e.optionItems,
      "item-key": "id"
    }, {
      group: "optionsGroup",
      ghostClass: "ghost",
      handle: ".drag-option"
    }), {
      item: r(({ element: g, index: I }) => [
        C("li", fb, [
          d(s, {
            modelValue: g.value,
            "onUpdate:modelValue": (F) => g.value = F,
            style: { width: "30%" },
            class: "mr-1",
            onFocus: e.focusText,
            disabled: !!e.readonly || e.readonly
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "disabled"]),
          d(s, {
            modelValue: g.label,
            "onUpdate:modelValue": (F) => g.label = F,
            style: { width: "50%" },
            onFocus: e.focusText,
            disabled: !!e.readonly || e.readonly
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "disabled"]),
          e.readonly ? b("", !0) : (n(), h(m, {
            key: 0,
            circle: "",
            plain: "",
            class: "icon-drag drag-option ml-1"
          }, {
            default: r(() => [
              d(u, {
                class: "text-4 ml-0.3",
                "icon-name": "addon-grip-vertical"
              })
            ]),
            _: 1
          })),
          e.readonly ? b("", !0) : (n(), h(m, {
            key: 1,
            circle: "",
            plain: "",
            type: "danger",
            onClick: (F) => e.deleteOption(g, I),
            icon: "Delete",
            class: "col-delete-button"
          }, null, 8, ["onClick"]))
        ])
      ]),
      _: 1
    }, 16, ["list"])) : (n(), v("div", cb, [
      d(c, { type: "info" }, {
        default: r(() => [...t[3] || (t[3] = [
          D("No Data", -1)
        ])]),
        _: 1
      })
    ])),
    e.readonly ? b("", !0) : (n(), h(_, { key: 2 }, {
      default: r(() => [
        d(m, {
          round: "",
          plain: "",
          icon: "Plus",
          size: "small",
          type: "success",
          onClick: e.addOption
        }, {
          default: r(() => [...t[4] || (t[4] = [
            D("Add Item", -1)
          ])]),
          _: 1
        }, 8, ["onClick"]),
        d(m, {
          round: "",
          plain: "",
          icon: "EditPen",
          size: "small",
          type: "primary",
          onClick: e.importOptions
        }, {
          default: r(() => [...t[5] || (t[5] = [
            D("Import Items", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })),
    e.showImportDialogFlag ? (n(), v("div", bb, [
      d($, {
        title: "Import Options",
        modelValue: e.showImportDialogFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (g) => e.showImportDialogFlag = g),
        draggable: "",
        width: e.popupWidth,
        "show-close": !0,
        class: "dialog-code-editor",
        "append-to-body": "",
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        "destroy-on-close": !0
      }, {
        footer: r(() => [
          C("div", gb, [
            d(m, {
              type: "primary",
              onClick: e.saveOptions
            }, {
              default: r(() => [...t[6] || (t[6] = [
                D("Save", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            d(m, {
              onClick: t[1] || (t[1] = (g) => e.showImportDialogFlag = !1)
            }, {
              default: r(() => [...t[7] || (t[7] = [
                D("Cancel", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        default: r(() => [
          d(s, {
            type: "textarea",
            rows: 15,
            modelValue: e.optionLines,
            "onUpdate:modelValue": t[0] || (t[0] = (g) => e.optionLines = g)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0)
  ]);
}
const e_ = /* @__PURE__ */ j(mb, [["render", yb], ["__scopeId", "data-v-209b3971"]]);
function vb(e) {
  try {
    const t = document.createElement("canvas");
    return Vr(t, e, {
      format: "CODE128",
      displayValue: !1,
      margin: 0
    }), t.toDataURL("image/png");
  } catch (t) {
    return console.warn("[SdReport] barcode generate failed:", t), "";
  }
}
const wb = B({
  name: "SdReport",
  components: {},
  props: {
    reportList: {
      type: Array,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    size: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Report"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    marginEnable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      resizeCleanup: null,
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      defaultParams: this.params,
      reportData: {},
      paramsInput: [],
      popupDownloadName: "Report",
      showPopupFlag: !1,
      showReportPopupFlag: !1,
      showDownloadPopupFlag: !1,
      popupReportWidth: "80%",
      popupWidthdefault: "60%",
      popupWidth: "30%",
      reportType: "pdf",
      scrollerHeight: 0,
      showFile: !1,
      downloadPath: "",
      filePath: "",
      fullName: "",
      pdfUrl: null,
      backdrop: !1,
      preLoading: !1,
      apiUrl: "",
      useUserState: this.$props.userState,
      loadEnable: !1,
      htmlStyle: {
        b: { bold: !0 },
        strong: { bold: !0 },
        u: { decoration: "underline" },
        del: { decoration: "lineThrough" },
        s: { decoration: "lineThrough" },
        em: { italics: !0 },
        i: { italics: !0 },
        h1: { fontSize: 24, bold: !0, marginBottom: 5 },
        h2: { fontSize: 22, bold: !0, marginBottom: 5 },
        h3: { fontSize: 20, bold: !0, marginBottom: 5 },
        h4: { fontSize: 18, bold: !0, marginBottom: 5 },
        h5: { fontSize: 16, bold: !0, marginBottom: 5 },
        h6: { fontSize: 14, bold: !0, marginBottom: 5 },
        a: { color: "blue", decoration: "underline" },
        strike: { decoration: "lineThrough" },
        p: { margin: [0, 0, 0, 0], preserveTrailingSpaces: !1, preserveLeadingSpaces: !1 },
        ul: { marginBottom: 5, marginLeft: 5 },
        table: { marginBottom: 5 },
        th: { bold: !0, fillColor: "#EEEEEE" }
      }
    };
  },
  computed: {},
  created() {
    this.apiUrl = "", Sa.vfs = $r, Sa.fonts = {
      THSarabun: {
        normal: "THSarabun.ttf",
        bold: "THSarabun-Bold.ttf",
        italics: "THSarabun-Italic.ttf",
        bolditalics: "THSarabun-BoldItalic.ttf"
      }
    };
  },
  setup(e, t) {
    const a = q(), l = q(null), o = q();
    return {
      formParamsRef: a,
      pdfFrame: l,
      reportLoading: o
    };
  },
  unmounted() {
    this.resizeCleanup?.();
  },
  async mounted() {
    this.buildState || (this.loadEnable = !0), this.scrollerHeight = window.innerHeight - 220, this.resizeCleanup = Me(async () => {
      await la(() => {
        this.scrollerHeight = window.innerHeight - 220, this.popupReportWidth = le("80%"), this.popupWidth = le("30%"), this.popupWidthdefault = le("60%");
      });
    });
  },
  methods: {
    submitForm(e) {
      e && e.validate(async (t) => {
        t && (this.showPopupFlag = !1, this.reportLoading = Pa.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 }), this.typeReport(this.reportType, this.reportData, this.defaultParams));
      });
    },
    handleParamsReport() {
      this.submitForm(this.formParamsRef);
    },
    handleParamsCancel() {
      this.showPopupFlag = !1;
    },
    handleReportCancel() {
      this.pdfUrl && this.pdfUrl.startsWith("blob:") && URL.revokeObjectURL(this.pdfUrl), this.pdfUrl = null, this.showReportPopupFlag = !1;
    },
    createPdf(e) {
      try {
        const t = Sa.createPdf(e);
        t.getDataUrl ? t.getDataUrl((a) => {
          this.pdfUrl = a, this.reportLoading?.close(), this.showReportPopupFlag = !0;
        }) : this.reportLoading?.close();
      } catch (t) {
        this.reportLoading?.close(), console.log(t);
      }
    },
    value2Path(e, t) {
      const a = {};
      let l = t.form_db.schema;
      for (const o in e)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          const i = e[o];
          let s = !0;
          for (const u in l)
            if (u.search(o) > -1) {
              s = !1;
              let m = Ee(i, u, t);
              a[`{{${o}}}`] = m;
            }
          s && (a[`{{${o}}}`] = i);
        }
      return a;
    },
    async tableContent(e, t, a) {
      let l = 1, o = [], i = [], s = t.pdf_column || [], u = t.pdf_tb_header ? t.pdf_tb_header : [];
      const m = t.pdf_fontsize ? t.pdf_fontsize : 14;
      let f = !0, c = [], _ = {}, $ = {}, g = {}, I = {};
      for (const [F, p] of e.entries()) {
        let w = [], S = this.value2Path(p, a);
        for (const N in s)
          if (Object.prototype.hasOwnProperty.call(s, N)) {
            const y = s[N];
            let T = "";
            if (y.col_field && y.col_value === null)
              T = ue(`{{${y.col_field}}}`, S);
            else {
              if (y.col_expressions)
                try {
                  const E = `return ${ue(y.col_expressions, S)}`, W = new Function("row", ...ke, E);
                  S["{{expressions}}"] = W.call(a, p);
                } catch (A) {
                  S["{{expressions}}"] = A;
                }
              T = ue(y.col_value ?? "", S);
            }
            if (!y.col_group)
              if (y.col_sum) {
                let A = "num";
                const E = ["num", "num1", "num2"];
                y.col_format && E.includes(y.col_format) && (A = y.col_format);
                const W = Number(T);
                isNaN(W) ? I[y.col_field] || (I[y.col_field] = "") : I[y.col_field] ? I[y.col_field].text = I[y.col_field].text + W : I[y.col_field] = {
                  text: W,
                  bold: !0,
                  fillColor: y.col_fillcolor || void 0,
                  alignment: y.col_alignment || "left",
                  fontSize: m,
                  format: A
                };
              } else
                I[y.col_field] || (I[y.col_field] = "");
            if (y.col_format)
              try {
                if (y.col_format === "num") {
                  const A = Number(T);
                  isNaN(A) || (T = A.toLocaleString("en-US"));
                } else if (y.col_format === "num1") {
                  const A = Number(T);
                  isNaN(A) || (T = A.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }));
                } else if (y.col_format === "num2") {
                  const A = Number(T);
                  isNaN(A) || (T = A.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
                } else y.col_format === "date" ? T = Se(T).format("DD/MM/YYYY") : y.col_format === "datetime" ? T = Se(T).format("DD/MM/YYYY HH:mm") : y.col_format === "boolean" && (T = T ? "True" : "False");
              } catch {
              }
            if (y.col_group)
              $[y.col_field] = T, g[y.col_field] = y.col_fillcolor || "#eee";
            else {
              if (f) {
                let A = y.col_width || "*";
                if (o.push(A), u.length === 0) {
                  let E = y.col_label || y.col_field;
                  i.push({
                    text: E,
                    bold: !0,
                    fillColor: "#ddd",
                    alignment: y.col_alignment || "left",
                    fontSize: m
                  });
                }
              }
              if (y.col_html) {
                const A = jl(`<span>${T}</span>`, {
                  defaultStyles: this.htmlStyle,
                  // removeExtraBlanks: true,
                  tableAutoSize: !0,
                  ignoreStyles: ["line-height", "font-family"]
                });
                w.push({
                  columns: [A],
                  fillColor: y.col_fillcolor || void 0,
                  alignment: y.col_alignment || "left",
                  fontSize: m
                });
              } else
                w.push({
                  text: T,
                  fillColor: y.col_fillcolor || void 0,
                  alignment: y.col_alignment || "left",
                  fontSize: m
                });
            }
          }
        if (f = !1, Object.keys($).length > 0) {
          let N = {}, y = 5;
          for (const T in $)
            if (Object.prototype.hasOwnProperty.call($, T)) {
              const A = $[T];
              N[T] || (Object.keys(N).length > 0 ? (N[T] = y + 10, y = N[T]) : N[T] = y), _[T] || (_[T] = ""), g[T] || (g[T] = "#eee"), _[T] !== A && (_[T] = A, c.push([
                {
                  text: A,
                  marginLeft: N[T],
                  bold: !0,
                  fillColor: g[T],
                  alignment: "left",
                  fontSize: m,
                  colSpan: o.length
                }
              ]));
            }
        }
        c.push(w);
      }
      if (I) {
        let F = [], p = !1;
        for (const w in I)
          if (Object.prototype.hasOwnProperty.call(I, w)) {
            const S = P(I[w]);
            S !== "" && (p = !0, S.text && !isNaN(Number(S.text)) && (S.format === "num1" ? S.text = Number(S.text).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : S.format === "num2" ? S.text = Number(S.text).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : S.text = Number(S.text).toLocaleString("en-US")), delete S.format), F.push(S);
          }
        p && c.push(F);
      }
      return u.length === 0 && (u = [i]), l = u.length, {
        headerRows: l,
        widths: o,
        body: u.concat(c)
      };
    },
    async dataConvert(e, t, a) {
      let l = t.pdf_column || [], o = [];
      for (const [i, s] of e.entries()) {
        let u = {}, m = this.value2Path(s, a);
        for (const f in l)
          if (Object.prototype.hasOwnProperty.call(l, f)) {
            const c = l[f];
            let _ = "";
            if (c.col_field && c.col_value === null)
              _ = ue(`{{${c.col_field}}}`, m);
            else {
              if (c.col_expressions)
                try {
                  const I = `return ${ue(c.col_expressions, m)}`, F = new Function("row", ...ke, I);
                  m["{{expressions}}"] = F.call(a, s);
                } catch (g) {
                  m["{{expressions}}"] = g;
                }
              _ = ue(c.col_value ?? "", m);
            }
            if (c.col_format)
              try {
                if (c.col_format === "num") {
                  const g = Number(_);
                  isNaN(g) || (_ = g.toFixed(0), _ = Number(_));
                } else if (c.col_format === "num1") {
                  const g = Number(_);
                  isNaN(g) || (_ = g.toFixed(1), _ = Number(_));
                } else if (c.col_format === "num2") {
                  const g = Number(_);
                  isNaN(g) || (_ = g.toFixed(2), _ = Number(_));
                } else c.col_format === "date" ? _ = Se(_).format("DD/MM/YYYY") : c.col_format === "datetime" ? _ = Se(_).format("DD/MM/YYYY HH:mm") : c.col_format === "boolean" && (_ = _ ? "True" : "False");
              } catch {
              }
            let $ = c.col_label || c.col_field;
            u[$] = _;
          }
        o.push(u);
      }
      return o;
    },
    async excelReport(e, t = {}, a = !1) {
      let l = [];
      if (e.pdf_sql && e.pdf_sql.value) {
        const o = {
          providerId: e.pdf_sql.value,
          providerType: me.SQL,
          params: t
        };
        e.pdf_fontsize && e.pdf_fontsize;
        let i = {}, s = "";
        e.pdf_form_id && (s = e.pdf_form_id);
        const u = await Pe(s, this.useUserState);
        u && u.data && (i = u.data);
        const m = await lt(o, !1, this.useUserState);
        if (m && m.response && m.data && m.data.data) {
          const f = P(m.data.data);
          let c = {};
          if (f && (f[0] && f[0]._id ? c = this.value2Path(f[0], i) : c = this.value2Path(f, i)), e.pdf_content) {
            const _ = e.pdf_content;
            for (const [$, g] of _.entries())
              if (g.content_widget) {
                let I = "";
                if (g.content_value && (typeof g.content_value == "object" ? I = g.content_value : I = ue(g.content_value, c)), g.content_widget === "table")
                  if (Object.keys(e.pdf_column).length > 0) {
                    const F = await this.dataConvert(f, e, i);
                    l.push({
                      name: e.pdf_name,
                      data: F
                    });
                  } else
                    l.push({
                      name: e.pdf_name,
                      data: f
                    });
                else if (g.content_widget === "subtable") {
                  if (I && I.subTableField) {
                    let F = [];
                    f[0] && f[0]._id ? F = f[0][I.subTableField] ? f[0][I.subTableField] : [] : F = f[I.subTableField] ? f[I.subTableField] : [];
                    let p = I.header ? I.header : [];
                    const w = I.column ? I.column : [];
                    let S = [];
                    for (const [N, y] of F.entries()) {
                      let T = [], A = this.value2Path(y, i), E = 0;
                      for (const W in y)
                        if (Object.prototype.hasOwnProperty.call(y, W)) {
                          y[W];
                          let oe = !1;
                          if (w.length > 0 ? w.includes(W) && (oe = !0) : oe = !0, oe) {
                            let K = ue(`{{${W}}}`, A);
                            p.length > 0 && typeof p[0] != "object" && p[E] && (typeof p[E] == "string" ? p[E] : String(p[E])), T[W] = K, E++;
                          }
                        }
                      S.push(T);
                    }
                    Object.keys(F).length > 0 && l.push({
                      name: I.subTableField,
                      data: S
                    });
                  }
                } else if (g.content_widget === "sub_report" && I !== "") {
                  const F = {
                    providerId: "getreport-one",
                    providerType: me.SYS,
                    params: { reportId: I }
                  }, p = await Lt(F, this.useUserState);
                  if (p && p.response && p.data && p.data.data) {
                    const w = p.data.data;
                    let S = !0;
                    if (this.permissionReport(w)) {
                      if (w.pdf_params && Object.keys(w.pdf_params).length > 0) {
                        for (const y in w.pdf_params)
                          if (Object.prototype.hasOwnProperty.call(w.pdf_params, y)) {
                            const T = w.pdf_params[y];
                            if (T.param_var && t[T.param_var] === void 0) {
                              S = !1;
                              break;
                            }
                          }
                      }
                      if (S) {
                        let y = await this.excelReport(w, t, !0);
                        y && Object.keys(y).length > 0 && (l = l.concat(y));
                      }
                    }
                  }
                }
              }
          }
        }
      }
      return l;
    },
    async pdfReport(e, t = {}, a = !1) {
      let l = [], o = {}, i = { content: l };
      if (e.pdf_sql && e.pdf_sql.value) {
        const s = {
          providerId: e.pdf_sql.value,
          providerType: me.SQL,
          params: t
        }, u = e.pdf_fontsize ? e.pdf_fontsize : 14;
        let m = {}, f = "";
        e.pdf_form_id && (f = e.pdf_form_id);
        const c = await Pe(f, this.useUserState);
        c && c.data && (m = c.data);
        const _ = await lt(s, !1, this.useUserState);
        if (_ && _.response && _.data && _.data.data) {
          const $ = P(_.data.data);
          let g = {};
          if ($ && ($[0] && $[0]._id ? g = this.value2Path($[0], m) : g = this.value2Path($, m)), e.pdf_content) {
            const I = e.pdf_content;
            for (const [F, p] of I.entries())
              if (p.content_widget) {
                let w = "";
                if (p.content_value && (typeof p.content_value == "object" ? w = p.content_value : w = ue(p.content_value, g)), p.content_widget === "text")
                  l.push({
                    text: w,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0,
                    fontSize: p.content_fontsize || u,
                    bold: p.content_bold || void 0,
                    italics: p.content_italics || void 0,
                    color: p.content_color || void 0,
                    background: p.content_bgcolor || void 0,
                    decoration: p.content_decoration || void 0,
                    decorationStyle: p.content_linestyle || void 0
                  });
                else if (p.content_widget === "html") {
                  const S = jl(w, {
                    defaultStyles: this.htmlStyle,
                    // removeExtraBlanks: true,
                    tableAutoSize: !0,
                    ignoreStyles: ["line-height", "font-family"]
                  });
                  l.push({
                    columns: [S],
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0,
                    fontSize: p.content_fontsize || u,
                    bold: p.content_bold || void 0,
                    italics: p.content_italics || void 0,
                    color: p.content_color || void 0,
                    background: p.content_bgcolor || void 0,
                    decoration: p.content_decoration || void 0,
                    decorationStyle: p.content_linestyle || void 0
                  });
                } else if (p.content_widget === "image") {
                  let S = 100, N = 100;
                  if (p.content_width && (S = p.content_width), p.content_height && (N = p.content_height), w !== "") {
                    const y = "img-" + Wt(), T = w.split(", ");
                    o[y] = T[0], l.push({
                      image: y,
                      cover: { width: S, height: N, valign: "center", align: "center" },
                      alignment: p.content_align || "left",
                      marginLeft: p.content_ml || void 0,
                      marginRight: p.content_mr || void 0,
                      marginTop: p.content_mt || void 0,
                      marginBottom: p.content_mb || void 0
                    });
                  }
                } else if (p.content_widget === "qrcode") {
                  let S = 100;
                  p.content_width ? S = p.content_width : p.content_height && (S = p.content_height), w !== "" && l.push({
                    qr: w,
                    fit: S,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0
                  });
                } else if (p.content_widget === "barcode") {
                  if (w !== "") {
                    const S = vb(w);
                    if (S !== "") {
                      let N = 200;
                      p.content_width && (N = p.content_width);
                      const y = {
                        image: S,
                        width: N,
                        alignment: p.content_align || "left",
                        marginLeft: p.content_ml || void 0,
                        marginRight: p.content_mr || void 0,
                        marginTop: p.content_mt || void 0,
                        marginBottom: p.content_mb || void 0
                      };
                      p.content_height && (y.height = p.content_height), l.push(y);
                    }
                  }
                } else if (p.content_widget === "table") {
                  const S = await this.tableContent($, e, m);
                  let N = e.pdf_tb_layout ? e.pdf_tb_layout : void 0;
                  l.push({
                    layout: N,
                    table: S,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0
                  });
                } else if (p.content_widget === "subtable") {
                  if (w && w.subTableField) {
                    let S = [];
                    $[0] && $[0]._id ? S = $[0][w.subTableField] ? $[0][w.subTableField] : [] : S = $[w.subTableField] ? $[w.subTableField] : [];
                    let N = w.widths ? w.widths : [], y = w.header ? w.header : [];
                    const T = w.alignment ? w.alignment : [], A = w.column ? w.column : [];
                    let E = [], W = [], oe = !0, K = !1;
                    for (const [Ue, Ge] of S.entries()) {
                      let st = [], Le = this.value2Path(Ge, m), je = 0;
                      for (const z in Ge)
                        if (Object.prototype.hasOwnProperty.call(Ge, z)) {
                          Ge[z];
                          let k = !1;
                          if (A.length > 0 ? A.includes(z) && (k = !0) : k = !0, k) {
                            let Y = ue(`{{${z}}}`, Le), J = T[je] || "left";
                            if (J === "l" || J === "L" ? J = "left" : J === "c" || J === "C" ? J = "center" : (J === "r" || J === "R") && (J = "rigth"), oe)
                              if (N[je] || (N[je] = "*"), y.length > 0) {
                                if (typeof y[0] != "object")
                                  if (K = !0, y[je]) {
                                    const Re = typeof y[je] == "string" ? y[je] : String(y[je]);
                                    W.push({
                                      text: Re,
                                      bold: !0,
                                      fillColor: "#ddd",
                                      alignment: J,
                                      fontSize: u
                                    });
                                  } else
                                    W.push({
                                      text: z,
                                      bold: !0,
                                      fillColor: "#ddd",
                                      alignment: J,
                                      fontSize: u
                                    });
                              } else
                                W.push({
                                  text: z,
                                  bold: !0,
                                  fillColor: "#ddd",
                                  alignment: J,
                                  fontSize: u
                                });
                            st.push({
                              text: Y,
                              alignment: J,
                              fontSize: u
                            }), je++;
                          }
                        }
                      oe = !1, E.push(st);
                    }
                    if (Object.keys(S).length > 0) {
                      y.length === 0 ? y = [W] : K && (y = [W]);
                      const Ge = {
                        headerRows: y.length,
                        widths: N,
                        body: y.concat(E)
                      };
                      let st = e.pdf_tb_layout ? e.pdf_tb_layout : void 0;
                      l.push({
                        layout: st,
                        table: Ge,
                        alignment: p.content_align || "left",
                        marginLeft: p.content_ml || void 0,
                        marginRight: p.content_mr || void 0,
                        marginTop: p.content_mt || void 0,
                        marginBottom: p.content_mb || void 0
                      });
                    }
                  }
                } else if (p.content_widget === "sub_report" && w !== "") {
                  const S = {
                    providerId: "getreport-one",
                    providerType: me.SYS,
                    params: { reportId: w }
                  }, N = await Lt(S, this.useUserState);
                  if (N && N.response && N.data && N.data.data) {
                    const y = N.data.data;
                    let T = !0;
                    if (this.permissionReport(y)) {
                      if (y.pdf_params && Object.keys(y.pdf_params).length > 0) {
                        for (const E in y.pdf_params)
                          if (Object.prototype.hasOwnProperty.call(y.pdf_params, E)) {
                            const W = y.pdf_params[E];
                            if (W.param_var && t[W.param_var] === void 0) {
                              T = !1;
                              break;
                            }
                          }
                      }
                      if (T) {
                        let E = await this.pdfReport(y, t, !0);
                        E && (E.content && (l = l.concat(E.content)), E.images && (o = {
                          ...o,
                          ...E.images
                        }));
                      }
                    }
                  }
                }
              }
          }
        }
        a || (i.defaultStyle = {
          font: "THSarabun",
          fontSize: u
        }, e.pdf_watermark && (i.watermark = { text: e.pdf_watermark, opacity: 0.1, bold: !0, italics: !1, fontSize: 75, angle: 45 }), e.pdf_orientation && (i.pageOrientation = e.pdf_orientation), e.pdf_page_size && e.pdf_page_size === "custom" && e.pdf_custom_size && e.pdf_custom_size.width && e.pdf_custom_size.height ? i.pageSize = {
          width: e.pdf_custom_size.width,
          height: e.pdf_custom_size.height
        } : i.pageSize = e.pdf_page_size, e.pdf_ml && e.pdf_mt && e.pdf_mr && e.pdf_mb ? i.pageMargins = [e.pdf_ml, e.pdf_mt, e.pdf_mr, e.pdf_mb] : i.pageMargins = 20, i.header = function($, g, I) {
          const F = [];
          return e.pdf_page_date && F.push({ text: "Print Date: " + Se().format("DD/MM/YYYY"), alignment: "right", marginRight: e.pdf_mr, marginTop: 5, fontSize: 11 }), e.pdf_title && e.pdf_showheader === "everyPage" && F.push({ text: e.pdf_title, alignment: "center", bold: !0, fontSize: u + 6, marginBottom: 5 }), F;
        }, i.footer = function($, g) {
          const I = [];
          if (e.pdf_page_num) {
            const F = "Page " + $.toString() + " of " + g;
            I.push({ text: F, alignment: "right", marginRight: 20, marginTop: 0, marginBottom: 5, fontSize: 11 });
          }
          return I;
        }, e.pdf_bg && Array.isArray(e.pdf_bg) && e.pdf_bg.length > 0 && (o.pdf_bg = this.getImage(e.pdf_bg), i.background = function($, g) {
          return {
            image: "pdf_bg",
            cover: { width: e.pdf_custom_size.width || 200, height: e.pdf_custom_size.height || 200, valign: "center", align: "center" }
          };
        })), Object.keys(o).length > 0 && (i.images = o), e.pdf_title && (e.pdf_showheader === "firstPage" ? l = [{ text: e.pdf_title, alignment: "center", bold: !0, fontSize: u + 6, marginBottom: 5 }, ...l] : e.pdf_ml && e.pdf_mt && e.pdf_mr && e.pdf_mb ? i.pageMargins = [e.pdf_ml, e.pdf_mt + 25, e.pdf_mr, e.pdf_mb] : i.pageMargins = [20, 45, 20, 20]), i.content = l;
      }
      return i;
    },
    /**
     * render รายงานเป็น base64 PDF โดยไม่เปิด dialog ใดๆ — สำหรับสั่งพิมพ์ผ่าน local agent
     *
     * ตั้งใจแยกออกจาก createReport() ทั้งหมด ไม่แก้เส้นทางเดิมที่ระบบใช้อยู่จริง
     * ต่างจาก createReport ตรงที่: ไม่เปิด popup ถาม params (เติม default ให้แทน),
     * ไม่โชว์ loading, ไม่เปิด preview — คืนค่า base64 ให้ผู้เรียกเอาไปทำต่อ
     *
     * @param reportId  _id ของ record ใน module_report
     * @param opts.params  params ที่ต้องการส่งให้ query ของรายงาน (ทับค่า default)
     * @returns base64 ของไฟล์ PDF (ไม่มี prefix data:)
     */
    async createReportSilent(e, t = {}) {
      const a = {
        providerId: "getreport-one",
        providerType: me.SYS,
        params: { reportId: e }
      }, o = (await Lt(a, this.useUserState))?.data?.data;
      if (!o) throw new Error("Report not found");
      if (!this.permissionReport(o)) throw new Error("Permission denied.");
      if (o.pdf_type === "latex") throw new Error("LaTeX reports are not supported for silent printing");
      const i = this.resolveReportParams(o, t.params || {}), s = await this.pdfReport(o, i);
      return await new Promise((u, m) => {
        try {
          const f = Sa.createPdf(s);
          if (!f.getBase64) {
            m(new Error("pdfmake cannot produce base64 output"));
            return;
          }
          f.getBase64((c) => u(c));
        } catch (f) {
          m(f);
        }
      });
    },
    /**
     * เติมค่า default ของ pdf_params ให้ params ที่ผู้เรียกไม่ได้ส่งมา
     * (createReport เดิมจะเปิด dialog ถามผู้ใช้ตรงนี้ — โหมดเงียบต้องเติมเองแทน)
     */
    resolveReportParams(e, t = {}) {
      const a = { ...P(this.params), ...t }, l = e.pdf_params;
      if (!l || Object.keys(l).length === 0) return a;
      for (const o in l) {
        if (!Object.prototype.hasOwnProperty.call(l, o)) continue;
        const i = l[o];
        !i || !i.param_var || a[i.param_var] === void 0 && (i.param_type === "boolean" ? a[i.param_var] = JSON.parse(i.param_default) : i.param_type === "number" ? a[i.param_var] = Number(i.param_default) : i.param_default === "date()" ? a[i.param_var] = Se().format("YYYY-MM-DD HH:mm:ss") : a[i.param_var] = i.param_default);
      }
      return a;
    },
    async createReport(e, t) {
      this.reportType = t;
      const a = {
        providerId: "getreport-one",
        providerType: me.SYS,
        params: { reportId: e }
      };
      let l = !0;
      this.defaultParams = P(this.params);
      const o = await Lt(a, this.useUserState);
      if (o && o.response && o.data && o.data.data) {
        if (this.reportData = o.data.data, !this.permissionReport(this.reportData))
          return O.warning("Permission denied."), !1;
        if (this.reportData.pdf_params && Object.keys(this.reportData.pdf_params).length > 0) {
          this.paramsInput = this.reportData.pdf_params;
          for (const i in this.reportData.pdf_params)
            if (Object.prototype.hasOwnProperty.call(this.reportData.pdf_params, i)) {
              const s = this.reportData.pdf_params[i];
              s.param_var && this.defaultParams[s.param_var] === void 0 && (l = !1, s.param_type === "boolean" ? this.defaultParams[s.param_var] = JSON.parse(s.param_default) : s.param_type === "number" ? this.defaultParams[s.param_var] = Number(s.param_default) : s.param_default === "date()" ? this.defaultParams[s.param_var] = Se().format("YYYY-MM-DD HH:mm:ss") : this.defaultParams[s.param_var] = s.param_default, this.showPopupFlag = !0);
            }
        }
        l && (this.reportLoading = Pa.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 }), this.typeReport(t, this.reportData, this.defaultParams));
      }
    },
    async typeReport(e, t, a = {}, l = !1) {
      if (e === "excel") {
        const o = await this.excelReport(t, a);
        let i = "output";
        t.pdf_name && (i = t.pdf_name), this.createExcel(o, i);
      } else if (e === "word")
        this.popupDownloadName = "Report", t.pdf_name && (t.pdf_name, this.popupDownloadName = "Report " + t.pdf_name), t.pdf_temp && Object.keys(t.pdf_temp).length > 0 ? (t.pdf_temp[0].url ? t.pdf_temp[0].url : "") ? await be.post(
          `${this.userState.host}/v1/files/create-word`,
          { reportId: t._id, params: a },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then((i) => {
          i.data && i.data.message && i.data.url && (this.filePath = i.data.filePath, this.fullName = i.data.fileName, this.downloadPath = i.data.url, this.showFile = !0, this.showDownloadPopupFlag = !0), this.reportLoading?.close();
        }).catch((i) => {
          this.reportLoading?.close();
        }) : (this.reportLoading?.close(), O.warning("Template not found.")) : (this.reportLoading?.close(), O.warning("Template not found."));
      else if (e === "latex")
        await be.post(
          `${this.userState.host}/v1/files/create-latex`,
          { reportId: t._id, params: a },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            },
            responseType: "blob"
          }
        ).then((o) => {
          this.pdfUrl = URL.createObjectURL(new Blob([o.data], { type: "application/pdf" })), this.showReportPopupFlag = !0, this.reportLoading?.close();
        }).catch(async (o) => {
          this.reportLoading?.close();
          let i = "Create report failed.";
          try {
            const s = await o.response?.data?.text?.();
            if (s) {
              const u = JSON.parse(s);
              u.message && (i = u.message);
            }
          } catch {
          }
          O.error(i);
        });
      else {
        const o = await this.pdfReport(t, a);
        this.createPdf(o);
      }
    },
    async createWord(e, t, a) {
      try {
        const l = new Tr({
          sections: [
            {
              properties: {
                page: {
                  size: {
                    width: 12240,
                    // 8.5 inch ใน DXA
                    height: 15840
                    // 11 inch ใน DXA
                  },
                  margin: {
                    top: 1440,
                    // 1 inch
                    right: 1440,
                    bottom: 1440,
                    left: 1440
                  }
                }
              },
              children: [
                new Jt("Debug Table Width"),
                // ตารางทดสอบที่ 1 - ใช้ FIXED layout
                new Ul({
                  width: { size: 100, type: Fa.PERCENTAGE },
                  layout: zl.FIXED,
                  // columnWidths: [3000, 7000], // รวม 10000
                  rows: [
                    new Rl({
                      children: [
                        new tl({
                          width: { size: 4e3, type: Fa.DXA },
                          // ← กำหนดใน cell
                          children: [new Jt("Cell 1")]
                        }),
                        new tl({
                          width: { size: 6e3, type: Fa.DXA },
                          // ← กำหนดใน cell
                          children: [new Jt("Cell 2")]
                        })
                      ]
                    })
                  ]
                }),
                new Jt(" "),
                // เว้นบรรทัด
                // ตารางทดสอบที่ 2 - ใช้ AUTOFIT สำหรับเปรียบเทียบ
                new Ul({
                  width: {
                    size: 5e3,
                    // แคบกว่า
                    type: Fa.DXA
                  },
                  layout: zl.AUTOFIT,
                  borders: {
                    top: { style: ka.DOUBLE, size: 8, color: "0000FF" },
                    bottom: { style: ka.DOUBLE, size: 8, color: "0000FF" },
                    left: { style: ka.DOUBLE, size: 8, color: "0000FF" },
                    right: { style: ka.DOUBLE, size: 8, color: "0000FF" }
                  },
                  rows: [
                    new Rl({
                      children: [
                        new tl({
                          children: [new Jt("ตาราง AUTOFIT - 5000")],
                          shading: { fill: "CCCCFF" }
                        })
                      ]
                    })
                  ]
                })
              ]
            }
          ]
        }), o = await Pr.toBlob(l);
        Mr(o, "debug-table-width.docx"), this.reportLoading?.close();
      } catch (l) {
        this.reportLoading?.close(), console.log(l);
      }
    },
    createExcel(e, t) {
      try {
        if (Object.keys(e).length > 0) {
          const a = _a.utils.book_new();
          for (const [l, o] of e.entries())
            if (o.data && o.name) {
              const i = _a.utils.json_to_sheet(o.data);
              _a.utils.book_append_sheet(a, i, o.name);
            }
          _a.writeFileXLSX(a, `${t}.xlsx`);
        } else
          O.warning("Data not found.");
        this.reportLoading?.close();
      } catch (a) {
        this.reportLoading?.close(), console.log(a);
      }
    },
    permissionReport(e) {
      if (e.pdf_share && e.pdf_share === "private") {
        let t = "";
        if (e.created_by && e.created_by.id && (t = e.created_by.id), this.userState.user) {
          if (this.userState.user.user_id !== t)
            return !1;
        } else
          return !1;
      } else if (e.pdf_share && e.pdf_share === "assign")
        if (e.pdf_assign_roles) {
          let t = "";
          if (e.created_by && e.created_by.id && (t = e.created_by.id), this.userState.user) {
            if (this.userState.user.user_id !== t) {
              const a = e.pdf_assign_roles, l = this.userState.user.roles;
              let o = !1;
              if (l.forEach((i) => {
                if (a.includes(i)) {
                  o = !0;
                  return;
                }
              }), !o)
                return !1;
            }
          } else
            return !1;
        } else
          return !1;
      return !0;
    },
    getImage(e) {
      if (e)
        return Object.keys(e).length > 0 && e[0] ? e[0].url ? e[0].url : e[0] : Object.keys(e).length > 0 && e.url ? e.url : e;
    },
    getDatetime(e) {
      return e ? Se(e).format("DD/MM/YYYY HH:mm") : "";
    },
    convertHexToRgba(e, t = 1) {
      return Ka(e, t);
    },
    pixel2Twip(e) {
      return e * 15;
    },
    async handleClose() {
      if (this.showFile) {
        this.showFile = !1;
        const e = `export/${this.userState.user?.username}`;
        let t = { filePath: this.filePath, fileName: this.fullName, fileType: "docx", fileGroup: e, fileId: "" };
        await be.delete(`${this.userState.host}/v1/files/remove-one`, {
          data: t,
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }).then((a) => {
        }).catch((a) => {
          console.log(a);
        });
      }
    }
  }
}), Sb = { key: 2 }, _b = { class: "dialog-footer" }, Fb = { key: 3 }, kb = {
  role: "heading",
  class: "el-dialog__title"
}, Cb = ["src"], Db = { key: 4 };
function Ib(e, t, a, l, o, i) {
  const s = we, u = X("arrow-down"), m = We, f = ie, c = kt, _ = Ft, $ = _t, g = Ie, I = jt, F = Ct, p = gl, w = _c, S = St, N = wt, y = Ce, T = X("Document"), A = Ba;
  return n(), v(L, null, [
    Object.keys(e.reportList).length > 1 ? (n(), h($, {
      key: 0,
      class: x(e.marginEnable ? "ml-1 mr-1" : "")
    }, {
      dropdown: r(() => [
        d(_, null, {
          default: r(() => [
            (n(!0), v(L, null, G(e.reportList, (E, W) => (n(), h(c, {
              key: W,
              onClick: (oe) => e.createReport(E.reportId, E.type)
            }, {
              default: r(() => [
                E.type === "excel" ? (n(), h(s, {
                  key: 0,
                  "icon-name": "addon-excel"
                })) : E.type === "word" ? (n(), h(s, {
                  key: 1,
                  "icon-name": "addon-word"
                })) : (n(), h(s, {
                  key: 2,
                  "icon-name": "addon-pdf"
                })),
                C("span", null, M(E.label), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ]),
          _: 1
        })
      ]),
      default: r(() => [
        d(f, {
          plain: "",
          size: e.size
        }, {
          default: r(() => [
            d(s, { "icon-name": "report-ui" }),
            t[4] || (t[4] = D()),
            C("span", null, M(e.label), 1),
            t[5] || (t[5] = D()),
            d(m, { class: "el-icon--right" }, {
              default: r(() => [
                d(u)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["size"])
      ]),
      _: 1
    }, 8, ["class"])) : (n(!0), v(L, { key: 1 }, G(e.reportList, (E, W) => (n(), h(f, {
      key: W,
      plain: "",
      size: e.size,
      onClick: (oe) => e.createReport(E.reportId, E.type)
    }, {
      default: r(() => [
        E.type === "excel" ? (n(), h(s, {
          key: 0,
          "icon-name": "addon-excel"
        })) : E.type === "word" ? (n(), h(s, {
          key: 1,
          "icon-name": "addon-word"
        })) : (n(), h(s, {
          key: 2,
          "icon-name": "addon-pdf"
        })),
        C("span", null, M(E.label), 1)
      ]),
      _: 2
    }, 1032, ["size", "onClick"]))), 128)),
    e.showPopupFlag ? (n(), v("div", Sb, [
      d(y, {
        title: "Report Parameters",
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[1] || (t[1] = (E) => e.showPopupFlag = E),
        width: e.popupWidth,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        "close-on-click-modal": !0,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        footer: r(() => [
          C("div", _b, [
            d(f, {
              type: "primary",
              icon: "Edit",
              onClick: U(e.handleParamsReport, ["prevent"])
            }, {
              default: r(() => [...t[6] || (t[6] = [
                D("Submit", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            d(f, {
              onClick: U(e.handleParamsCancel, ["prevent"])
            }, {
              default: r(() => [...t[7] || (t[7] = [
                D("Close", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        default: r(() => [
          d(N, {
            ref: "formParamsRef",
            model: e.defaultParams,
            "label-position": "top",
            size: "default",
            onSubmit: t[0] || (t[0] = U((E) => e.submitForm(e.formParamsRef), ["prevent"]))
          }, {
            default: r(() => [
              (n(!0), v(L, null, G(e.paramsInput, (E, W) => (n(), v(L, { key: W }, [
                E.param_var ? (n(), h(S, {
                  key: 0,
                  prop: E.param_var,
                  label: E.param_label ? E.param_label : E.param_var,
                  required: E.param_required
                }, {
                  default: r(() => [
                    E.param_type === "text" ? (n(), h(g, {
                      key: 0,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      type: "text",
                      clearable: !0
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "number" ? (n(), h(I, {
                      key: 1,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      style: { width: "100%" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "boolean" ? (n(), h(F, {
                      key: 2,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      "active-text": e.defaultParams[E.param_var] ? "True" : "False"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "active-text"])) : E.param_type === "datetime" ? (n(), h(p, {
                      key: 3,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      type: "datetime",
                      clearable: !0,
                      style: { width: "100%" },
                      format: "DD/MM/YYYY HH:mm",
                      "value-format": "YYYY-MM-DD HH:mm:ss",
                      placeholder: "Select Date Time..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "date" ? (n(), h(p, {
                      key: 4,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      type: "date",
                      clearable: !0,
                      style: { width: "100%" },
                      format: "DD/MM/YYYY",
                      "value-format": "YYYY-MM-DD",
                      placeholder: "Select Date..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "form" && E.param_sform && E.param_sform.value ? (n(), h(w, {
                      key: 5,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (oe) => e.defaultParams[E.param_var] = oe,
                      clearable: !0,
                      filterable: !0,
                      "form-id": E.param_sform.value,
                      "enable-object-type": !1,
                      "value-field": E.param_svalue,
                      "label-field": E.param_slabel,
                      "search-field": E.param_slabel,
                      "user-state": e.userState
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "form-id", "value-field", "label-field", "search-field", "user-state"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["prop", "label", "required"])) : b("", !0)
              ], 64))), 128))
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0),
    e.showReportPopupFlag ? (n(), v("div", Fb, [
      d(y, {
        title: "Report Preview",
        modelValue: e.showReportPopupFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (E) => e.showReportPopupFlag = E),
        width: e.popupReportWidth,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "body-class": "pdf-popup",
        "append-to-body": "",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: E, titleId: W, titleClass: oe }) => [
          C("span", kb, [
            d(s, { "icon-name": "icon-pdf" }),
            t[8] || (t[8] = D(" Report Preview ", -1))
          ])
        ]),
        default: r(() => [
          e.pdfUrl ? (n(), v("iframe", {
            key: 0,
            ref: "pdfFrame",
            src: e.pdfUrl,
            style: te([{ width: "100%", "min-height": "400px" }, `height: ${e.scrollerHeight}px`]),
            class: "pdf-viewer",
            frameborder: "0"
          }, null, 12, Cb)) : b("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0),
    e.showDownloadPopupFlag ? (n(), v("div", Db, [
      d(y, {
        title: e.popupDownloadName,
        modelValue: e.showDownloadPopupFlag,
        "onUpdate:modelValue": t[3] || (t[3] = (E) => e.showDownloadPopupFlag = E),
        width: e.popupWidthdefault,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        onClose: e.handleClose,
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        default: r(() => [
          t[9] || (t[9] = D(" Download click here => ", -1)),
          e.showFile ? (n(), h(A, {
            key: 0,
            type: "primary",
            href: e.downloadPath,
            target: "_blank"
          }, {
            default: r(() => [
              d(m, { class: "mr-1" }, {
                default: r(() => [
                  d(T)
                ]),
                _: 1
              }),
              D(" " + M(e.fullName), 1)
            ]),
            _: 1
          }, 8, ["href"])) : b("", !0)
        ]),
        _: 1
      }, 8, ["title", "modelValue", "width", "onClose", "close-on-click-modal"])
    ])) : b("", !0)
  ], 64);
}
const t_ = /* @__PURE__ */ j(wb, [["render", Ib], ["__scopeId", "data-v-3dfc4c38"]]), $b = B({
  name: "SdUiCarousel",
  components: {},
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    detailMaxRow: {
      type: Number,
      default: 2
    },
    interval: {
      type: Number,
      default: 3e3
    },
    indicatorPosition: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "click"
    },
    iconField: {
      type: String,
      default: ""
    },
    titleContent: {
      type: String,
      default: ""
    },
    titleField: {
      type: String,
      default: ""
    },
    detailContent: {
      type: String,
      default: ""
    },
    limitRow: {
      type: Number,
      default: 30
    },
    typeCard: {
      type: Boolean,
      default: !1
    },
    motionBlur: {
      type: Boolean,
      default: !1
    },
    autoplay: {
      type: Boolean,
      default: !0
    },
    verticalEnable: {
      type: Boolean,
      default: !1
    },
    totalEnable: {
      type: Boolean,
      default: !0
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "200px"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    clickEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: me.FORM },
      wsConn: void 0,
      widgetId: "SdUiCarousel-" + Wt(),
      isFormEnable: this.providerType === "FORM",
      loadEnable: !1,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ...ke, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Kt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
    this.apiUrl = "";
  },
  setup(e, t) {
    return {
      formRef: q()
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  async mounted() {
    if (!this.buildState)
      if (this.providerType === "SQL")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : O.warning(e.message);
      } else
        O.warning("Unauthorized");
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider;
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ...ke, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = me.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')");
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ye.DESC }]), this.getDataList(), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          let o = -1;
          const i = P(l.data);
          l.params && P(l.params), o = this.keyIdIndex(i._id), l.method == "insert" ? Ja(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1);
        }
      }));
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await lt(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          this.rawData = l, this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, this.total = this.totalPage, this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        O.warning(a.message), this.preLoading = !1;
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    handleClick(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.clickEvent && this.clickEvent(e, t);
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] ? Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : Object.keys(e[t]).length > 0 && e[t].url ? e[t].url : e[t] : void 0;
    },
    getDatetime(e) {
      return e ? Se(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ka(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), Tb = { class: "list-title" }, Pb = {
  key: 0,
  class: "text-5"
}, Mb = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, Vb = { style: { position: "relative" } }, Ab = { class: "el-image__error" }, Eb = {
  key: 1,
  class: "img-content"
}, Ob = ["innerHTML"], Lb = ["innerHTML"], Bb = { class: "text-card" }, Nb = { style: { "text-align": "center" } }, jb = ["innerHTML"], Ub = ["innerHTML"];
function Rb(e, t, a, l, o, i) {
  const s = et, u = we, m = X("Loading"), f = We, c = X("Picture"), _ = Bt, $ = ba, g = Ke, I = rn, F = sn;
  return n(), v(L, null, [
    C("div", Tb, [
      e.titleEnable ? (n(), v("span", Pb, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
          key: 1,
          "icon-name": e.iconName
        }, null, 8, ["icon-name"])) : (n(), h(u, {
          key: 2,
          "icon-name": "icon-sdform"
        })),
        D(" " + M(e.titleNameForm) + " ", 1),
        e.totalEnable ? (n(), v("span", Mb, " ( " + M(e.totalLabel()) + " )", 1)) : b("", !0)
      ])) : b("", !0),
      e.preLoading ? (n(), h(f, {
        key: 1,
        class: "is-loading ml-1"
      }, {
        default: r(() => [
          d(m)
        ]),
        _: 1
      })) : b("", !0)
    ]),
    e.noMore ? (n(), h(F, {
      key: 0,
      class: "carousel-box",
      "indicator-position": e.indicatorPosition,
      motionBlur: e.motionBlur,
      interval: e.interval,
      autoplay: !!e.autoplay,
      direction: e.verticalEnable ? "vertical" : "horizontal",
      type: e.typeCard ? "card" : void 0,
      trigger: e.trigger,
      height: e.height
    }, {
      default: r(() => [
        (n(!0), v(L, null, G(e.rawData, (p, w) => (n(), v(L, {
          key: p._id
        }, [
          e.iconField ? (n(), h(I, {
            key: 0,
            class: x(["carousel-img", { "event-enable": !!e.clickEvent }]),
            onClick: (S) => e.handleClick(p, w)
          }, {
            default: r(() => [
              C("div", Vb, [
                e.iconField ? (n(), h(_, {
                  key: 0,
                  style: te(`width: 100%; height: ${e.height}`),
                  src: e.getImage(p, e.iconField),
                  fit: "cover"
                }, {
                  error: r(() => [
                    C("div", Ab, [
                      d(f, { style: { "font-size": "50px" } }, {
                        default: r(() => [
                          d(c)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["style", "src"])) : b("", !0),
                e.titleField || e.titleContent || e.detailContent ? (n(), v("div", Eb, [
                  C("div", null, [
                    d(g, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h($, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "raw-data": p,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, p)
                        }, null, 8, Ob))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(g, {
                    key: 0,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, p)
                      }, null, 8, Lb)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0)
                ])) : b("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["class", "onClick"])) : (n(), h(I, {
            key: 1,
            class: x(["carousel-text", { "event-enable": !!e.clickEvent }]),
            onClick: (S) => e.handleClick(p, w)
          }, {
            default: r(() => [
              C("div", Bb, [
                C("div", null, [
                  C("div", Nb, [
                    d(g, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h($, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "raw-data": p,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, p)
                        }, null, 8, jb))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(g, {
                    key: 0,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, p)
                      }, null, 8, Ub)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["indicator-position", "motionBlur", "interval", "autoplay", "direction", "type", "trigger", "height"])) : b("", !0)
  ], 64);
}
const a_ = /* @__PURE__ */ j($b, [["render", Rb], ["__scopeId", "data-v-d3d3ab7d"]]), zb = B({
  name: "SdUiMenu",
  components: {},
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    trigger: {
      type: String,
      default: "click"
    },
    iconField: {
      type: String,
      default: ""
    },
    labelField: {
      type: String,
      default: ""
    },
    pathField: {
      type: String,
      default: ""
    },
    roleField: {
      type: String,
      default: ""
    },
    subMenuField: {
      type: String,
      default: ""
    },
    subMenuPrefix: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    defaultActive: {
      type: String,
      default: ""
    },
    menuWidth: {
      type: Number,
      default: 250
    },
    expandHeight: {
      type: Number,
      default: 59
    },
    top: {
      type: Number
    },
    left: {
      type: Number
    },
    limitRow: {
      type: Number,
      default: 1e3
    },
    marginTop: {
      type: Number,
      default: 0
    },
    borderDisable: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    classInteraction: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    uniqueOpened: {
      type: Boolean,
      default: !1
    },
    expandEnable: {
      type: Boolean,
      default: !0
    },
    fixedEnable: {
      type: Boolean,
      default: !0
    },
    parentPath: {
      type: String,
      default: ""
    },
    expandDefault: {
      type: String,
      default: "expand"
    },
    clickEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      router: xo(),
      route: Go(),
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: me.FORM },
      wsConn: void 0,
      isFormEnable: this.providerType === "FORM",
      scrollerHeight: 0,
      isCollapse: this.expandDefault === "collapse",
      loadEnable: !1,
      menuWidthOnexpand: this.isCollapse ? 64 : this.menuWidth,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ...ke, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Kt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
    if (this.apiUrl = "", this.expandEnable) {
      let e = window.localStorage.getItem("side_menu_" + this.formId);
      e ? this.isCollapse = e == "true" : window.localStorage.setItem("side_menu_" + this.formId, String(this.isCollapse)), this.isCollapse ? this.menuWidthOnexpand = 64 : this.menuWidthOnexpand = this.menuWidth;
    }
  },
  setup(e, t) {
    return {
      formRef: q()
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  beforeUnmount() {
    if (this.resizeCleanup?.(), this.classInteraction) {
      const e = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
      e && (e.style.marginLeft = "0px");
    }
  },
  async mounted() {
    if (this.scrollerHeight = window.innerHeight - this.marginTop, this.resizeCleanup = Me(() => {
      this.$nextTick(() => {
        this.scrollerHeight = window.innerHeight - this.marginTop;
      });
    }), !this.buildState)
      if (this.providerType === "SQL")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : O.warning(e.message);
      } else
        O.warning("Unauthorized");
    if (this.classInteraction) {
      const e = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
      e && (e.style.marginLeft = `${this.menuWidthOnexpand}px`);
    }
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider;
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ...ke, this.sdformModel.form_event.after_delete)), this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = me.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')");
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ye.DESC }]), this.getDataList();
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await lt(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          this.rawData = l, this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, this.total = this.totalPage, this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        O.warning(a.message), this.preLoading = !1;
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    handleClick(e, t, a = !1) {
      this.isInsert = !1, this.selectIndex = t, this.clickEvent ? this.clickEvent(e, t) : a ? this.pathField && this.subMenuPrefix && e[`${this.subMenuPrefix}${this.pathField}`] && this.router.push(e[`${this.subMenuPrefix}${this.pathField}`]) : this.pathField && e[this.pathField] && this.router.push(e[this.pathField]);
    },
    expandClick(e) {
      if (this.isCollapse ? this.isCollapse = !1 : this.isCollapse = !0, this.isCollapse ? this.menuWidthOnexpand = 64 : this.menuWidthOnexpand = this.menuWidth, this.classInteraction) {
        const t = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
        t && (t.style.marginLeft = `${this.menuWidthOnexpand}px`);
      }
      window.localStorage.setItem("side_menu_" + this.formId, String(this.isCollapse));
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] ? Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : Object.keys(e[t]).length > 0 && e[t].url ? e[t].url : e[t] : void 0;
    },
    getDatetime(e) {
      return e ? Se(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ka(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), Hb = { key: 0 }, qb = {
  key: 1,
  class: "menu-label"
}, Wb = {
  key: 1,
  class: "menu-label"
}, Kb = {
  key: 1,
  class: "menu-label"
};
function xb(e, t, a, l, o, i) {
  const s = we, u = un, m = Oa, f = pn, c = dn, _ = Vo, $ = qo("can");
  return n(), v(L, null, [
    d(_, {
      class: "menu-wrapper",
      height: `${e.fixedEnable ? `${e.scrollerHeight}px` : ""} `,
      style: te(`position: ${e.fixedEnable ? "fixed" : "inherit"}; ${e.top !== void 0 ? `top: ${e.top}px;` : ""} ${e.left !== void 0 ? `left: ${e.left}px;` : ""}`)
    }, {
      default: r(() => [
        d(c, {
          class: "side-menu",
          style: te(`width: ${e.fixedEnable ? `${e.menuWidthOnexpand}px` : ""}; 
			min-height: ${e.fixedEnable ? `${e.scrollerHeight}px` : ""}; 
			${e.borderDisable ? "border: inherit;" : ""}
			${e.bgColor ? `background-color: ${e.bgColor};` : ""} ${e.borderColor ? `border-color: ${e.borderColor};` : ""}`),
          collapse: e.isCollapse,
          "collapse-transition": !1,
          "unique-opened": e.uniqueOpened,
          router: !1,
          "default-active": e.defaultActive || e.route.fullPath,
          "text-color": e.textColor || void 0,
          "menu-trigger": e.trigger
        }, {
          default: r(() => [
            e.expandEnable ? (n(), v("div", Hb, [
              d(u, {
                class: "menu-expand",
                style: te(`height: ${e.expandHeight}px;`),
                index: "xexpandx",
                onClick: e.expandClick
              }, {
                default: r(() => [
                  e.isCollapse ? (n(), h(s, {
                    key: 0,
                    "icon-name": "el-expand"
                  })) : (n(), h(s, {
                    key: 1,
                    "icon-name": "el-fold"
                  }))
                ]),
                _: 1
              }, 8, ["style", "onClick"]),
              d(m, {
                direction: "horizontal",
                style: te([{ margin: "0px" }, `${e.borderColor ? `border-color: ${e.borderColor};` : ""}`])
              }, null, 8, ["style"])
            ])) : b("", !0),
            (n(!0), v(L, null, G(e.rawData, (g, I) => (n(), v(L, {
              key: g._id
            }, [
              e.subMenuField && g[e.subMenuField] ? Ae((n(), h(f, {
                key: 0,
                index: e.pathField && g[e.pathField] ? g[e.pathField] : String(I),
                onClick: (F) => e.pathField && g[e.pathField] ? e.handleClick(g, +I) : void 0
              }, {
                title: r(() => [
                  e.iconField ? (n(), h(s, {
                    key: 0,
                    class: "menu-icon",
                    "icon-name": g[e.iconField]
                  }, null, 8, ["icon-name"])) : b("", !0),
                  e.labelField ? (n(), v("span", qb, M(g[e.labelField]), 1)) : b("", !0)
                ]),
                default: r(() => [
                  (n(!0), v(L, null, G(g[e.subMenuField], (F, p) => Ae((n(), h(u, {
                    key: F._id,
                    class: "sub-menu-item",
                    index: e.pathField && e.subMenuPrefix && F[`${e.subMenuPrefix}${e.pathField}`] ? F[`${e.subMenuPrefix}${e.pathField}`] : String(I),
                    onClick: (w) => e.pathField && e.subMenuPrefix && F[`${e.subMenuPrefix}${e.pathField}`] ? e.handleClick(F, +p, !0) : void 0
                  }, {
                    default: r(() => [
                      e.iconField && e.subMenuPrefix ? (n(), h(s, {
                        key: 0,
                        class: "menu-icon",
                        "icon-name": F[`${e.subMenuPrefix}${e.iconField}`]
                      }, null, 8, ["icon-name"])) : b("", !0),
                      e.labelField && e.subMenuPrefix ? (n(), v("span", Wb, M(F[`${e.subMenuPrefix}${e.labelField}`]), 1)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["index", "onClick"])), [
                    [
                      $,
                      e.roleField && e.subMenuPrefix && F[`${e.subMenuPrefix}${e.roleField}`] ? F[`${e.subMenuPrefix}${e.roleField}`] : ["user"],
                      void 0,
                      { any: !0 }
                    ]
                  ])), 128))
                ]),
                _: 2
              }, 1032, ["index", "onClick"])), [
                [
                  $,
                  e.roleField && g[e.roleField] ? g[e.roleField] : ["user"],
                  void 0,
                  { any: !0 }
                ]
              ]) : Ae((n(), h(u, {
                key: 1,
                class: "menu-item",
                index: e.pathField && g[e.pathField] ? g[e.pathField] : String(I),
                onClick: (F) => e.pathField && g[e.pathField] ? e.handleClick(g, +I) : void 0
              }, {
                default: r(() => [
                  e.iconField ? (n(), h(s, {
                    key: 0,
                    class: "menu-icon",
                    "icon-name": g[e.iconField]
                  }, null, 8, ["icon-name"])) : b("", !0),
                  e.labelField ? (n(), v("span", Kb, M(g[e.labelField]), 1)) : b("", !0)
                ]),
                _: 2
              }, 1032, ["index", "onClick"])), [
                [
                  $,
                  e.roleField && g[e.roleField] ? g[e.roleField] : ["user"],
                  void 0,
                  { any: !0 }
                ]
              ])
            ], 64))), 128))
          ]),
          _: 1
        }, 8, ["style", "collapse", "unique-opened", "default-active", "text-color", "menu-trigger"])
      ]),
      _: 1
    }, 8, ["height", "style"]),
    C("span", {
      style: te(`width: ${e.fixedEnable ? `${e.menuWidthOnexpand}px` : ""}; `)
    }, null, 4)
  ], 64);
}
const l_ = /* @__PURE__ */ j(zb, [["render", xb]]), Ei = Qo(window);
Ei.addHook("uponSanitizeAttribute", (e, t) => {
  /^(v-|:|@|#|\.)/.test(t.attrName) && (t.forceKeepAttr = !0);
});
const Co = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new Map();
let nl = null;
function Gb() {
  return nl || (nl = import("@vue/compiler-dom")), nl;
}
const Yb = B({
  name: "SDCustomContent",
  emits: ["rendered"],
  props: {
    // HTML / Vue template string ที่จะ render
    content: {
      type: String,
      default: ""
    },
    // ตัวแปรสำหรับ binding — {{ name }}, v-for="i in list", v-if="ok"
    data: {
      type: Object,
      default: () => ({})
    },
    // context เพิ่มเติม (override data เมื่อ key ชนกัน) เช่น params จากฟอร์ม
    params: {
      type: Object,
      default: () => ({})
    },
    // state zone — reactive bag ของ host widget (เช่น vue-ui.vueState)
    // host ยัด data/function/instance อะไรก็ได้ แล้ว template เข้าถึงตรงๆ (live, reactive — push/assign แล้ว re-render เอง)
    // แยกจาก params เพื่อให้ host เก็บ reference สดได้โดยไม่ต้อง spread (กัน reactivity ขาด + ไม่ copy ทุก render)
    state: {
      type: Object,
      default: () => ({})
    },
    // widget component เพิ่มเติมที่ไม่ได้ register global (el-* ไม่ต้องส่ง)
    components: {
      type: Object,
      default: () => ({})
    },
    // เปิด DOMPurify sanitize
    sanitize: {
      type: Boolean,
      default: !0
    },
    // true = โชว์ error detail เต็ม (builder/dev debug) · false = โชว์ errorFallbackText แทน (runtime/end-user)
    showErrorDetail: {
      type: Boolean,
      default: !0
    },
    // ข้อความนุ่มๆ ที่ end-user เห็นตอน widget error (ใช้เมื่อ showErrorDetail = false)
    errorFallbackText: {
      type: String,
      default: "Unable to display this content"
    }
  },
  data() {
    return {
      dynamicComp: null,
      error: ""
    };
  },
  computed: {
    // กัน "ฟอร์มขาวทั้งหน้า": scope proxy ใช้ `key in obj` กับ data/params/state
    // ถ้า designer ส่ง primitive (เช่น this.vueState = 'x' / 123 / true) → `key in primitive` throw ทุก render
    // errorCaptured จับไม่ได้ (เกิดใน proxy ก่อน render) → ตรวจ type ที่นี่แล้วโชว์ error box แทน (บอกตรงว่า prop ไหนผิด)
    // null/undefined = ผ่าน (prop มี default {} อยู่แล้ว) ; array นับเป็น object → ผ่าน (ใช้ใน proxy ได้)
    scopeTypeError() {
      const e = (t, a) => a == null ? "" : typeof a != "object" ? `SDCustomContent: prop "${t}" ต้องเป็น object/array แต่ได้ ${typeof a} (${String(a).slice(0, 30)}) — ตรวจค่า vueState หรือ data/params ที่ส่งเข้า widget` : "";
      return e("data", this.data) || e("params", this.params) || e("state", this.state);
    }
  },
  watch: {
    content: "rebuild",
    sanitize: "rebuild"
  },
  created() {
    this.rebuild();
  },
  // จับ render error ของ inner dynamic component (เช่น identifier undefined, expression พัง) → แสดงกล่อง error เดียวกับ compile error
  // return false → กันไม่ให้ error ทะลุขึ้นไป crash ทั้งฟอร์ม
  errorCaptured(e) {
    return this.error = `SDCustomContent render error: ${e?.message || String(e)}`, this.dynamicComp = null, !1;
  },
  methods: {
    // แปลง self-closing custom element <el-x ... /> → <el-x ...></el-x> ก่อนเข้า DOMPurify
    // HTML parser (DOMPurify) ไม่รองรับ self-closing สำหรับ custom element (ไม่ใช่ void element)
    // ปล่อยไว้ → element ถัดไปถูก nest เข้าไปข้างใน → ปุ่ม/widget ซ้อนกัน
    // จับเฉพาะ tag ที่มี '-' ในชื่อ (custom element / el-*) — เว้น void html (br/img/input/hr ...)
    // regex รองรับ attr ที่มี > อยู่ใน quote (เช่น @click="a>b") ผ่านการ match string ก่อน
    normalizeSelfClosing(e) {
      return e.replace(/<([A-Z][\w-]*|[a-zA-Z][\w-]*-[\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*?)\s*\/>/g, "<$1$2></$1>");
    },
    // sanitize template — เก็บ custom element (el-*, widget) + Vue directive attr ไว้
    sanitizeTemplate(e) {
      const t = Do.get(e);
      if (t !== void 0) return t;
      const a = Ei.sanitize(e, {
        // อนุญาต custom element ทั้งหมด (เป็น Vue component ที่ resolve ตอน runtime)
        CUSTOM_ELEMENT_HANDLING: {
          tagNameCheck: () => !0,
          attributeNameCheck: () => !0,
          allowCustomizedBuiltInElements: !0
        },
        // component ที่ชื่อไม่มีขีด (vue-flow: Handle/Panel) — DOMPurify ไม่นับเป็น custom element
        // (CUSTOM_ELEMENT regex บังคับมีขีด) → ไม่ใส่ตรงนี้ = โดนลบ tag ทิ้งเงียบๆ เหลือแต่ลูก
        ADD_TAGS: ["handle", "panel"],
        ADD_ATTR: ["target"]
      });
      return Do.set(e, a), a;
    },
    // compile template string -> render function (ใช้ runtime ของแอปตัวเดียว ไม่สร้าง Vue ซ้ำ)
    async compileTemplate(e) {
      const t = Co.get(e);
      if (t) return t;
      const { compile: a } = await Gb(), { code: l } = a(e, { mode: "function", hoistStatic: !0 }), o = new Function("Vue", l)(gn);
      return o._rc = !0, Co.set(e, o), o;
    },
    // scope ที่ template มองเห็น — อ่านจาก props.data / props.params / props.state แบบ live
    // (อ่านตอน render → ถูก track เป็น reactive → ค่าเปลี่ยนแล้ว re-render เอง)
    // precedence เมื่อ key ชนกัน: params > state > data
    //   - params = system/formParams (สำคัญสุด ไม่ให้ zone ทับ identity/_id)
    //   - state  = zone ของ host widget (data/function/instance ที่ host ยัดเข้ามา)
    //   - data   = form model (ค่าฟิลด์)
    buildScopeProxy() {
      const e = this, t = (l) => {
        const o = (i) => i !== null && typeof i == "object" && l in i;
        return o(e.params) ? e.params[l] : o(e.state) ? e.state[l] : o(e.data) ? e.data[l] : void 0;
      }, a = (l) => typeof l == "string" && l[0] !== "_" && l[0] !== "$";
      return new Proxy(
        {},
        {
          get(l, o) {
            return t(o);
          },
          has(l, o) {
            return a(o);
          },
          // Vue render proxy เช็ค setup binding ด้วย hasOwn(setupState, key) = getOwnPropertyDescriptor (ไม่ใช่ operator `in`)
          // ต้อง implement เพื่อให้ {{ identifier }} / :bind ใน template resolve ผ่าน scope นี้ ไม่งั้นหลุดไป global → ReferenceError
          // หมายเหตุ: ตั้ง enumerable:false + ไม่ทำ ownKeys → กัน Vue dev (exposeSetupStateOnRenderContext) เดินวน key
          // ของ scope (รวม system keys _id/xsitex จาก formParams) จนเกิด warning ตอน render
          getOwnPropertyDescriptor(l, o) {
            if (a(o))
              return { enumerable: !1, configurable: !0, writable: !0, value: t(o) };
          }
        }
      );
    },
    // สร้าง dynamic component ใหม่เมื่อ content/sanitize เปลี่ยน (ไม่ rebuild ตอน data เปลี่ยน)
    async rebuild() {
      this.error = "";
      const e = this.normalizeSelfClosing(this.content || ""), t = this.sanitize ? this.sanitizeTemplate(e) : e;
      if (!t.trim()) {
        this.dynamicComp = null;
        return;
      }
      try {
        const a = await this.compileTemplate(t), l = this;
        this.dynamicComp = Uo(
          B({
            name: "SDCustomContentInner",
            components: l.components,
            setup() {
              return l.buildScopeProxy();
            },
            render: a
          })
        ), this.$nextTick(() => this.$emit("rendered", this.getRefs()));
      } catch (a) {
        this.error = `SDCustomContent compile error: ${a?.message || String(a)}`, this.dynamicComp = null;
      }
    },
    // === helper: เข้าถึง ref ของ widget/tag ภายใน template ===
    // ใช้จาก host: <SDCustomContent ref="cc" /> แล้ว this.$refs.cc.getRef('myInput')
    // หมายเหตุ: เรียกได้หลัง render เสร็จ (ดัก event @rendered หรือรอ $nextTick)
    // inner component instance (ตัว render เนื้อหา) — เผื่อต้องการ low-level
    getInner() {
      return this.$refs.inner;
    },
    // get ref ตามชื่อที่เขียน ref="name" ใน template (คืน widget instance หรือ DOM element)
    getRef(e) {
      const t = this.$refs.inner;
      return t && t.$refs ? t.$refs[e] : void 0;
    },
    // get ทุก ref เป็น object { name: instance|element }
    getRefs() {
      const e = this.$refs.inner;
      return e && e.$refs ? e.$refs : {};
    },
    // get DOM element ของ ref — ถ้าเป็น component คืน $el, ถ้าเป็น DOM ref คืนตัวมันเอง
    getEl(e) {
      const t = this.getRef(e);
      if (t)
        return t.$el ?? t;
    }
  }
}), Jb = {
  key: 1,
  class: "sd-custom-content__error"
};
function Xb(e, t, a, l, o, i) {
  const s = Rt, u = X("WarningFilled"), m = We, f = Ke;
  return e.dynamicComp && !e.scopeTypeError ? (n(), h(zt(e.dynamicComp), {
    key: 0,
    ref: "inner"
  }, null, 512)) : e.error || e.scopeTypeError ? (n(), v("div", Jb, [
    e.showErrorDetail ? (n(), h(s, {
      key: 0,
      title: e.error || e.scopeTypeError,
      type: "error",
      closable: !1,
      "show-icon": ""
    }, null, 8, ["title"])) : (n(), h(f, {
      key: 1,
      type: "info"
    }, {
      default: r(() => [
        d(m, { class: "sd-custom-content__fallback-icon" }, {
          default: r(() => [
            d(u)
          ]),
          _: 1
        }),
        D(" " + M(e.errorFallbackText), 1)
      ]),
      _: 1
    }))
  ])) : b("", !0);
}
const Xa = /* @__PURE__ */ j(Yb, [["render", Xb], ["__scopeId", "data-v-6597befa"]]), Qb = B({
  name: "SdUiRecordView",
  components: {
    SDCustomContent: Xa
    // SdCrudPopupGrid,
    // SdValueWidget,
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    blockUiFields: {
      type: Array,
      default: void 0
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    dataId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    column: {
      type: Number,
      default: 3
    },
    lastRecord: {
      type: Boolean,
      default: !0
    },
    blockEnable: {
      type: Boolean,
      default: !1
    },
    listViewBtnEnable: {
      type: Boolean,
      default: !1
    },
    listViewReadOnly: {
      type: Boolean,
      default: !1
    },
    borderEnable: {
      type: Boolean,
      default: !0
    },
    verticalEnable: {
      type: Boolean,
      default: !1
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !1
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    actionEnable: {
      type: Boolean,
      default: !1
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    labelWidth: {
      type: String,
      default: ""
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    // === Custom Content mode ===
    // เปิดใช้ → render ผ่าน SDCustomContent (customContent) แทน el-descriptions
    customContentEnable: {
      type: Boolean,
      default: !1
    },
    // Vue template string สำหรับ SDCustomContent
    customContent: {
      type: String,
      default: ""
    },
    // true → widget render action footer ให้อัตโนมัติ · false → เขียนปุ่มเองใน template ผ่าน can/actions
    autoActionFooter: {
      type: Boolean,
      default: !0
    },
    // field name สำหรับ meta ใน auto footer (ผู้บันทึก / เวลา) — ว่าง = ไม่แสดง
    metaByField: {
      type: String,
      default: ""
    },
    metaTimeField: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isDark: de(),
      rawData: null,
      // footer meta tooltip — โชว์เฉพาะตอนข้อความถูกตัด (ellipsis) เท่านั้น
      byOverflow: !1,
      timeOverflow: !1,
      defaultParams: {},
      preLoading: !1,
      showPopupFlag: !1,
      showPopupGridFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      recordId: this.dataId,
      titleNameForm: this.titleName,
      iconForm: "",
      limit: 1,
      optionProvider: { limit: 1, page: 1 },
      allowInsert: !1,
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: me.FORM },
      wsConn: void 0,
      widgetId: "SdUiRecordView-" + Wt(),
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      afterDeleteForm: void 0,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : "",
      defaultWhereParent: ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    },
    dataId: {
      deep: !0,
      handler(e) {
        this.recordId = e, console.log("dataId", e), this.handleReload();
      }
    }
  },
  computed: {
    // จำนวน item ใน skeleton ให้ใกล้เคียงเนื้อหาจริง — อิงจำนวน field ที่จะแสดง (fallback 4)
    skeletonItemCount() {
      const e = Array.isArray(this.blockUiFields) ? this.blockUiFields.length : 0;
      return e > 0 ? e : 4;
    },
    htmlValue() {
      return (e, t, a) => {
        let l = {}, o = this.sdformModel.form_db.schema;
        for (const i in o) {
          let s = pe(t, i);
          l[`{{${i}}}`] = Ee(s, i, this.sdformModel);
        }
        if (a.expressions)
          try {
            const s = `return ${ue(a.expressions, l)}`, u = new Function("row", ...ke, s);
            l["{{expressions}}"] = u.call(this.sdformModel, t);
          } catch (i) {
            l["{{expressions}}"] = i;
          }
        else
          l["{{expressions}}"] = "";
        return Kt(ue(e, l));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    },
    // === Custom Content scope ===
    // data = record ดิบ (reactive) → ใช้ {{ fieldName }} / v-if / v-for กับค่าจริงได้
    customData() {
      return this.rawData || {};
    },
    // params = context รอบนอก + helper + action API (params ชนะ data เมื่อ key ซ้ำ ตาม SDCustomContent)
    customParams() {
      return {
        ...this.params || {},
        userInfo: this.useUserState ? this.useUserState.user : null,
        recordId: this.recordId,
        hasData: !!this.rawData,
        row: this.rawData || {},
        // fmt('fieldName') → ค่าแสดงผลตาม schema (select→label, date format ฯลฯ)
        fmt: (t) => this.getValue(this.rawData, t),
        // fmtTime('fieldName') → ค่าเวลา format แบบไทยอ่านง่าย "6 มิ.ย. 69 · 13:34"
        fmtTime: (t) => this.fmtDateTime(this.getValue(this.rawData, t)),
        // actions.* → เรียก handler เดิม (เปิด popup form ตาม subFormOpen)
        actions: {
          add: () => this.handleAdd(),
          edit: () => this.handleUpdate(this.recordId),
          view: () => this.handleView(this.recordId),
          del: () => this.handleDelete(this.recordId),
          reload: () => this.handleReload(),
          listView: () => this.handleCrudGrid()
        },
        // can.* → ปุ่มควรโชว์ไหม (manual mode) — permission ล้วน + สถานะ record
        // ไม่ผูก btnEnable flags ของ auto footer เพราะ manual mode user เขียนปุ่มเอง
        can: {
          add: this.permAdd,
          edit: this.permEdit,
          view: this.permView,
          del: this.permDelete,
          reload: !!this.recordId,
          listView: !0
        }
      };
    },
    // permission + enable flags (ใช้ทั้ง auto footer และ scope can.*) — ตรงกับเงื่อนไขปุ่มในโหมด el-descriptions
    canAdd() {
      return !this.dataId && !this.rawData && !!this.addBtnEnable && !!this.allowInsert;
    },
    canEdit() {
      return !this.recordId || !this.rawData || !this.updateBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowUpdate(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canView() {
      return !this.recordId || !this.rawData || !this.viewBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowView(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canDelete() {
      return !this.recordId || !this.rawData || !this.delBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowDelete(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canReload() {
      return !!this.reloadBtnEnable && !!this.recordId;
    },
    canListView() {
      return !!this.listViewBtnEnable;
    },
    // gate ระดับ form — user เข้าถึง form นี้ได้ไหม (form_sharing: private/assign)
    // false → ซ่อนทั้ง record view (ไม่แสดง record + ปุ่มใด ๆ)
    // builder preview (buildState) ไม่ gate เพื่อให้ออกแบบเห็นผลได้เสมอ
    allowForm() {
      return this.buildState ? !0 : !this.sdformModel || !this.sdformModel.form_share || !this.useUserState.user ? !1 : oa(this.sdformModel, this.useUserState.user);
    },
    // === permission ล้วน (สำหรับ can.* ใน manual footer) — ไม่ผูก btnEnable flags ===
    // เรียก dataXSharing สดทุกตัว (reactive ตาม user/record) — ไม่พึ่ง allowInsert ที่ set ครั้งเดียว
    permAdd() {
      return !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : Ne(this.sdformModel, this.useUserState.user);
    },
    permEdit() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowUpdate(this.sdformModel, this.rawData, this.useUserState.user);
    },
    permView() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowView(this.sdformModel, this.rawData, this.useUserState.user);
    },
    permDelete() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowDelete(this.sdformModel, this.rawData, this.useUserState.user);
    },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    }
  },
  created() {
  },
  setup(e, t) {
    const a = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      formRef: a
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  async mounted() {
    if (this.apiUrl = "", !this.buildState)
      if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await Pe(this.formId, this.useUserState);
        e.response && e.data ? this.initForm(e.data) : O.warning(e.message);
      } else
        O.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: O,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn
    };
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, e ? this.defaultWhereParent = "xparentx = CONVERT(:xparentx, 'objectId')" : this.defaultWhereParent = "", this.recordId = "", this.handleReload();
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null);
    },
    handleUpdate(e) {
      this.isInsert = !1, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = this.rawData, this.formReadOnly = !1, this.handlePopUpForm(), this.updateBefore && this.updateBefore(this.rawData);
    },
    handleDelete(e) {
      ve.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ya(this.sdformModel.dataid, e, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: this.rawData, method: "delete", keyid: "_id", params: { widget: this.widgetId } }), this.afterDelete && this.afterDelete(this.rawData), this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, this.rawData);
            } catch (a) {
              O.error(a.message);
            }
          this.rawData = null, this.recordId = "", O.success("Delete completed.");
        } else
          O.warning("Unable to remove data");
      }).catch((t) => {
        console.log(t);
      });
    },
    handleView(e) {
      this.isInsert = !1, this.showPopupFlag = !0, this.backdrop = !0, this.formData = this.rawData, this.formReadOnly = !0, this.handlePopUpForm(), this.viewBefore && this.viewBefore(this.rawData);
    },
    handleReload() {
      this.isInsert = !1, this.showPopupFlag = !1, this.dpFormData.options || (this.dpFormData.options = {}), this.params.xdataidx = this.recordId, this.recordId ? (this.defaultWhere ? this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhere + ` AND ${this.defaultWhereParent} AND _id = CONVERT(:xdataidx, 'objectId')` : this.dpFormData.options.where = this.defaultWhere + " AND _id = CONVERT(:xdataidx, 'objectId')" : this.defaultWhereParent ? this.dpFormData.options.where = `${this.defaultWhereParent} AND _id = CONVERT(:xdataidx, 'objectId')` : this.dpFormData.options.where = "_id = CONVERT(:xdataidx, 'objectId')", this.dpFormData.params.xdataidx = this.recordId, this.getDataOne(this.dpFormData)) : this.lastRecord ? (this.defaultWhere ? this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhere + ` AND ${this.defaultWhereParent}` : this.dpFormData.options.where = this.defaultWhere : this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhereParent : this.dpFormData.options.where = "", this.getDataOne(this.dpFormData)) : (this.rawData = null, this.recordId = "");
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        cancelCallback: this.handleCancel,
        beforeSaveCallback: this.beforeSave,
        afterSaveCallback: this.afterSave
      });
    },
    handleCrudGrid() {
      this.showPopupGridFlag = !0;
    },
    handleCrudGridCloe() {
      this.showPopupGridFlag = !1;
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Ne(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ...ke, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = me.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), (!this.lastRecord || this.dataId) && (this.params.xdataidx = this.recordId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND _id = CONVERT(:xdataidx, 'objectId')" : this.dpFormData.options.where = "_id = CONVERT(:xdataidx, 'objectId')"), this.dpFormData.options.orderBy = [{ column: "created_at", sort: ye.DESC }];
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), (this.lastRecord || this.dataId) && this.getDataOne(this.dpFormData), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId) && l.keyid) {
          const o = P(l.data), i = o[l.keyid];
          l.method == "insert" ? this.lastRecord && !this.dataId && (this.parentId ? o.xparentx && o.xparentx == this.parentId && (this.rawData = P(o), this.recordId = o[l.keyid]) : (this.rawData = P(o), this.recordId = o[l.keyid])) : l.method == "update" ? i == this.recordId && (this.rawData = P(o)) : l.method == "delete" && i == this.recordId && (this.rawData = null, this.recordId = "");
        }
      }));
    },
    async getDataOne(e, t) {
      if (!this.buildState) {
        this.preLoading = !0;
        const a = await Lt(e, this.useUserState);
        a.response ? (a.data && a.data.data ? (this.rawData = P(a.data.data), this.recordId = this.rawData._id, t && t(this.rawData)) : (this.rawData = null, this.recordId = ""), this.preLoading = !1) : (String(a.message || "").startsWith("Data not found") ? (this.rawData = null, this.recordId = "") : O.warning(a.message), this.preLoading = !1);
      }
    },
    // เช็คว่า element ถูกตัดด้วย ellipsis ไหม (scrollWidth เกิน clientWidth) → เปิด tooltip เฉพาะตอนนั้น
    checkOverflow(e, t) {
      const a = e.currentTarget;
      this[t] = a.scrollWidth > a.clientWidth;
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    // format วันเวลาแบบไทยอ่านง่าย: "6 มิ.ย. 69 · 13:34" (ปี พ.ศ. 2 หลัก)
    // ค่าว่าง → '' · parse ไม่ได้ → คืนค่าดิบ (กันข้อมูลแปลก ๆ หาย)
    fmtDateTime(e) {
      if (!e) return "";
      const t = Se(e);
      return t.isValid() ? t.locale("th").format("D MMM BB · HH:mm") : String(e);
    },
    allowView(e, t, a) {
      return Ja(e, t, a);
    },
    allowUpdate(e, t, a) {
      return Xe(e, t, a);
    },
    allowDelete(e, t, a) {
      return _l(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          this.rawData = P(e), this.recordId = e._id, this.wsConn?.wsSend({ data: o, method: "insert", keyid: "_id", params: { widget: this.widgetId } });
        } else
          this.rawData = P(e), this.recordId = e._id, this.wsConn?.wsSend({ data: e, method: "update", keyid: "_id", params: { widget: this.widgetId } });
      this.$emit("aftersave", l, e, a);
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    }
  }
}), Zb = {
  key: 0,
  class: "rv-skel-title"
}, eg = {
  key: 0,
  class: "wcard-foot"
}, tg = { class: "wcard-meta" }, ag = { class: "wcard-actions" }, lg = { class: "text-6" }, og = ["innerHTML"];
function ig(e, t, a, l, o, i) {
  const s = hn, u = mn, m = Xa, f = ml, c = ie, _ = et, $ = we, g = ba, I = Bo, F = Lo, p = uc;
  return n(), v(L, null, [
    e.allowForm && e.preLoading ? (n(), h(u, {
      key: 0,
      animated: "",
      class: x(["rv-skeleton", { blockUi: e.blockEnable }])
    }, {
      template: r(() => [
        e.titleEnable ? (n(), v("div", Zb, [
          d(s, { variant: "text" })
        ])) : b("", !0),
        C("div", {
          class: "rv-skel-grid",
          style: te({ gridTemplateColumns: `repeat(${e.column > 0 ? e.column : 1}, minmax(0, 1fr))` })
        }, [
          (n(!0), v(L, null, G(e.skeletonItemCount, (w) => (n(), v("div", {
            key: w,
            class: x(["rv-skel-item", { vertical: !!e.verticalEnable }])
          }, [
            d(s, {
              variant: "text",
              class: "rv-skel-label"
            }),
            d(s, {
              variant: "text",
              class: "rv-skel-value"
            })
          ], 2))), 128))
        ], 4)
      ]),
      _: 1
    }, 8, ["class"])) : e.allowForm && e.customContentEnable ? (n(), v("div", {
      key: 1,
      class: x(["rv-custom", { blockUi: e.blockEnable }])
    }, [
      (n(), h(m, {
        ref: "customContentRef",
        key: `${e.formId}-cc`,
        content: e.customContent,
        data: e.customData,
        params: e.customParams,
        "show-error-detail": !!e.buildState
      }, null, 8, ["content", "data", "params", "show-error-detail"])),
      e.actionEnable && e.autoActionFooter ? (n(), v("div", eg, [
        C("div", tg, [
          e.metaByField && e.rawData ? (n(), h(f, {
            key: 0,
            content: e.getValue(e.rawData, e.metaByField),
            placement: "top",
            disabled: !e.byOverflow
          }, {
            default: r(() => [
              C("span", {
                class: "wcard-by",
                onMouseenter: t[0] || (t[0] = (w) => e.checkOverflow(w, "byOverflow"))
              }, M(e.getValue(e.rawData, e.metaByField)), 33)
            ]),
            _: 1
          }, 8, ["content", "disabled"])) : b("", !0),
          e.metaTimeField && e.rawData ? (n(), h(f, {
            key: 1,
            content: e.fmtDateTime(e.getValue(e.rawData, e.metaTimeField)),
            placement: "top",
            disabled: !e.timeOverflow
          }, {
            default: r(() => [
              C("span", {
                class: "wcard-time",
                onMouseenter: t[1] || (t[1] = (w) => e.checkOverflow(w, "timeOverflow"))
              }, M(e.fmtDateTime(e.getValue(e.rawData, e.metaTimeField))), 33)
            ]),
            _: 1
          }, 8, ["content", "disabled"])) : b("", !0)
        ]),
        C("div", ag, [
          re(e.$slots, "actions", { row: e.rawData }, void 0, !0),
          e.canAdd ? (n(), h(c, {
            key: 0,
            size: "small",
            plain: "",
            circle: "",
            type: "success",
            icon: "Plus",
            title: "Add",
            onClick: t[2] || (t[2] = U((w) => e.handleAdd(), ["prevent"]))
          })) : b("", !0),
          e.canEdit ? (n(), h(c, {
            key: 1,
            size: "small",
            plain: "",
            circle: "",
            type: "primary",
            icon: "Edit",
            title: "Edit",
            onClick: t[3] || (t[3] = U((w) => e.handleUpdate(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canView ? (n(), h(c, {
            key: 2,
            size: "small",
            plain: "",
            circle: "",
            type: "info",
            icon: "View",
            title: "View",
            onClick: t[4] || (t[4] = U((w) => e.handleView(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canDelete ? (n(), h(c, {
            key: 3,
            size: "small",
            plain: "",
            circle: "",
            type: "danger",
            icon: "Delete",
            title: "Delete",
            onClick: t[5] || (t[5] = U((w) => e.handleDelete(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canListView ? (n(), h(c, {
            key: 4,
            size: "small",
            plain: "",
            circle: "",
            color: "#626aef",
            dark: e.isDark,
            type: "info",
            icon: "Grid",
            title: "List View",
            onClick: t[6] || (t[6] = U((w) => e.handleCrudGrid(), ["prevent"]))
          }, null, 8, ["dark"])) : b("", !0),
          e.canReload ? (n(), h(c, {
            key: 5,
            size: "small",
            plain: "",
            circle: "",
            icon: "Refresh",
            title: "Reload",
            onClick: t[7] || (t[7] = U((w) => e.handleReload(), ["prevent"]))
          })) : b("", !0)
        ])
      ])) : b("", !0)
    ], 2)) : e.allowForm ? (n(), h(F, {
      key: 2,
      class: x({ blockUi: e.blockEnable, "rv-no-border": !e.borderEnable }),
      column: e.column,
      border: e.borderEnable,
      "label-width": e.labelWidth,
      direction: e.verticalEnable ? "vertical" : "horizontal"
    }, Je({
      default: r(() => [
        e.rawData ? (n(!0), v(L, { key: 0 }, G(e.blockUiFields, (w, S) => (n(), h(I, {
          label: w.label,
          align: w.align,
          "label-align": w.labelAlign,
          "min-width": w.minWidth,
          "label-width": w.labelWidth,
          width: w.width,
          span: w.span,
          rowspan: w.rowspan
        }, {
          default: r(() => [
            w.htmlValue ? (n(), v("span", {
              key: 0,
              innerHTML: e.htmlValue(w.htmlValue, e.rawData, w)
            }, null, 8, og)) : (n(), h(g, {
              key: 1,
              "sdform-model": e.sdformModel,
              "field-name": w.fieldName,
              "field-setting": e.getSchema(w.fieldName),
              "subform-width": e.subformWidth,
              "raw-data": e.rawData,
              "user-state": e.userState
            }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"]))
          ]),
          _: 2
        }, 1032, ["label", "align", "label-align", "min-width", "label-width", "width", "span", "rowspan"]))), 256)) : (n(), h(I, {
          key: 1,
          width: "10",
          "min-width": 10
        }, {
          default: r(() => [...t[15] || (t[15] = [
            D(" No Data... ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      e.titleEnable ? {
        name: "title",
        fn: r(() => [
          C("span", lg, [
            e.iconForm != "" ? (n(), h(_, {
              key: 0,
              "svg-data": e.iconForm
            }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h($, {
              key: 1,
              "icon-name": e.iconName
            }, null, 8, ["icon-name"])) : (n(), h($, {
              key: 2,
              "icon-name": "icon-sdform"
            })),
            D(" " + M(e.titleNameForm), 1)
          ])
        ]),
        key: "0"
      } : void 0,
      e.actionEnable ? {
        name: "extra",
        fn: r(() => [
          re(e.$slots, "actions", { row: e.rawData }, void 0, !0),
          !e.dataId && !e.rawData && e.addBtnEnable && e.allowInsert ? (n(), h(c, {
            key: 0,
            size: "small",
            plain: "",
            type: "success",
            icon: "Plus",
            title: "Add",
            onClick: t[8] || (t[8] = U((w) => e.handleAdd(), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.updateBtnEnable && e.allowUpdate(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 1,
            plain: "",
            type: "primary",
            icon: "Edit",
            title: "Edit",
            size: "small",
            onClick: t[9] || (t[9] = U((w) => e.handleUpdate(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.delBtnEnable && e.allowDelete(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 2,
            plain: "",
            type: "danger",
            icon: "Delete",
            title: "Delete",
            size: "small",
            onClick: t[10] || (t[10] = U((w) => e.handleDelete(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.viewBtnEnable && e.allowView(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 3,
            plain: "",
            type: "info",
            icon: "View",
            title: "View",
            size: "small",
            onClick: t[11] || (t[11] = U((w) => e.handleView(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.listViewBtnEnable ? (n(), h(c, {
            key: 4,
            plain: "",
            color: "#626aef",
            dark: e.isDark,
            type: "info",
            icon: "Grid",
            size: "small",
            title: "List View",
            onClick: t[12] || (t[12] = U((w) => e.handleCrudGrid(), ["prevent"]))
          }, null, 8, ["dark"])) : b("", !0),
          e.reloadBtnEnable && e.recordId ? (n(), h(c, {
            key: 5,
            plain: "",
            type: "default",
            icon: "Refresh",
            title: "Reload",
            size: "small",
            onClick: t[13] || (t[13] = U((w) => e.handleReload(), ["prevent"]))
          })) : b("", !0)
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["class", "column", "border", "label-width", "direction"])) : b("", !0),
    e.sdformModel.dataid && e.showPopupGridFlag ? (n(), h(p, {
      key: 3,
      modelValue: e.showPopupGridFlag,
      "onUpdate:modelValue": t[14] || (t[14] = (w) => e.showPopupGridFlag = w),
      backdrop: !0,
      "parent-id": e.parentId,
      readonly: e.listViewReadOnly,
      "form-id": e.sdformModel.dataid,
      "user-state": e.userState,
      "cancel-callback": e.handleCrudGridCloe
    }, null, 8, ["modelValue", "parent-id", "readonly", "form-id", "user-state", "cancel-callback"])) : b("", !0)
  ], 64);
}
const o_ = /* @__PURE__ */ j(Qb, [["render", ig], ["__scopeId", "data-v-57b5ca41"]]), ng = B({
  name: "SdCascaderForm",
  inheritAttrs: !1,
  emits: ["update:modelValue", "change"],
  props: {
    // ─── Widget-specific props ───────────────────────────────────────────────
    formId: {
      type: String,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: String,
      required: !0
    },
    parentField: {
      type: String,
      required: !0
    },
    rootValue: {
      type: null,
      default: null
    },
    // ถ้ามีค่า จะ inject xparentx เข้า params อัตโนมัติ — รับได้ทั้ง string และ { value, label }
    parentId: {
      default: ""
    },
    params: {
      type: Object,
      default: () => ({})
    },
    limit: {
      type: Number,
      default: 1e3
    },
    // NoQL WHERE clause เช่น "`status` = 'active'"
    where: {
      type: String,
      default: ""
    },
    // sort เช่น [{ column: 'name', sort: 'ASC' }]
    orderBy: {
      type: Array,
      default: null
    },
    // เก็บทั้ง value และ label — modelValue จะเป็น { value, label } แทน plain array
    saveWithLabel: {
      type: Boolean,
      default: !1
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      treeOptions: [],
      loading: !1,
      defaultParams: {}
    };
  },
  computed: {
    // ส่ง $attrs ต่อไปยัง el-cascader ยกเว้น modelValue และ event ที่เราจัดการเอง
    cascaderPassAttrs() {
      const { modelValue: e, "onUpdate:modelValue": t, onChange: a, ...l } = this.$attrs;
      return l;
    },
    // แปลง { value, label } กลับเป็น plain value เพื่อให้ el-cascader แสดงผลถูกต้อง
    displayValue() {
      const e = this.$attrs?.modelValue ?? null;
      return !this.saveWithLabel || e == null ? e : typeof e == "object" && !Array.isArray(e) && "value" in e ? e.value : e;
    },
    // merge value/label/children เข้ากับ :props ที่ user ส่งมา (multiple, checkStrictly ฯลฯ)
    mergedCascaderProps() {
      return {
        ...this.$attrs?.props ?? {},
        value: this.valueField,
        label: this.labelField,
        children: "children"
      };
    }
  },
  mounted() {
    this.defaultParams = { ...this.params }, this.loadData();
  },
  watch: {
    formId() {
      this.loadData();
    },
    params: {
      deep: !0,
      handler(e) {
        this.defaultParams = { ...e }, this.loadData();
      }
    },
    where() {
      this.loadData();
    },
    orderBy: {
      deep: !0,
      handler() {
        this.loadData();
      }
    },
    parentId: {
      deep: !0,
      handler() {
        this.loadData();
      }
    }
  },
  methods: {
    // รองรับทั้ง plain ID และ {value, label} object (จาก select-form-input)
    resolveParentId(e) {
      return e !== null && typeof e == "object" && "value" in e ? e.value : e;
    },
    buildTree(e) {
      const t = {};
      e.forEach((o) => {
        t[o[this.valueField]] = { ...o, children: [] };
      });
      const a = [];
      e.forEach((o) => {
        const i = this.resolveParentId(o[this.parentField]), s = t[o[this.valueField]];
        !i || i === this.rootValue || !t[i] ? a.push(s) : t[i].children.push(s);
      });
      const l = (o) => {
        o.forEach((i) => {
          i.children?.length === 0 ? delete i.children : i.children && l(i.children);
        });
      };
      return l(a), a;
    },
    buildParams() {
      const e = { ...this.defaultParams }, t = this.resolveParentId(this.parentId);
      return t && (e.xparentx = t), e;
    },
    loadData() {
      this.loading = !0;
      const e = { limit: this.limit };
      this.where && (e.where = this.where), this.orderBy && (e.orderBy = this.orderBy), this.userState.crudGetAll(
        {
          sdProvider: {
            providerId: this.formId,
            providerType: "FORM",
            options: e,
            params: this.buildParams()
          },
          totalEnable: !1
        },
        (t) => {
          this.loading = !1, t?.data && Array.isArray(t.data) ? this.treeOptions = this.buildTree(t.data) : this.treeOptions = [];
        }
      );
    },
    handleChange(e) {
      if (!this.saveWithLabel || e == null || Array.isArray(e) && e.length === 0) {
        this.$emit("update:modelValue", e), this.$emit("change", e);
        return;
      }
      const a = this.$refs.cascaderRef?.getCheckedNodes?.(!1) ?? [], l = this.$attrs?.separator ?? " / ";
      if (this.$attrs?.props?.multiple ?? !1) {
        const i = a.map((s) => ({
          value: s.pathNodes ? s.pathNodes.map((u) => u.value) : [s.value],
          label: s.pathNodes ? s.pathNodes.map((u) => u.label).join(l) : s.label
        }));
        this.$emit("update:modelValue", i), this.$emit("change", i);
      } else {
        const i = a[0];
        if (!i) {
          this.$emit("update:modelValue", null), this.$emit("change", null);
          return;
        }
        const s = {
          value: i.pathNodes ? i.pathNodes.map((u) => u.value) : [i.value],
          label: i.pathNodes ? i.pathNodes.map((u) => u.label).join(l) : i.label
        };
        this.$emit("update:modelValue", s), this.$emit("change", s);
      }
    },
    reload() {
      this.loadData();
    }
  }
});
function sg(e, t, a, l, o, i) {
  const s = fn;
  return n(), h(s, ae({ ref: "cascaderRef" }, e.cascaderPassAttrs, {
    "model-value": e.displayValue,
    options: e.treeOptions,
    props: e.mergedCascaderProps,
    style: { width: "100%" },
    onChange: e.handleChange
  }), null, 16, ["model-value", "options", "props", "onChange"]);
}
const i_ = /* @__PURE__ */ j(ng, [["render", sg]]), rg = ".el-date-picker__header, .el-date-range-picker__header", Io = ".el-date-picker__header-label, .el-date-range-picker__header-label", n_ = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "SdDatePickerBE",
  props: {
    modelValue: { default: null },
    buddhist: { type: Boolean, default: !1 },
    type: { default: "date" },
    format: {},
    editable: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = Sn(), s = q(), u = R(Ma, void 0);
    He(
      Ma,
      Z(() => l.buddhist ? Xo : u?.value)
    );
    const m = `sd-be-picker-${_n()}`, f = Z({
      get: () => l.modelValue,
      set: (p) => o("update:modelValue", p)
    }), c = Z(() => {
      if (!l.buddhist || l.format) return l.format;
      switch (l.type) {
        case "datetime":
        case "datetimerange":
          return "DD/MM/BBBB HH:mm";
        case "month":
        case "monthrange":
          return "MM/BBBB";
        case "year":
        case "years":
          return "BBBB";
        case "week":
          return "BBBB [สัปดาห์]ww";
        default:
          return "DD/MM/BBBB";
      }
    }), _ = Z(() => {
      const p = i.popperClass || i["popper-class"] || "";
      return l.buddhist ? `${m} ${p}`.trim() : p;
    });
    function $(p) {
      const w = Number(p);
      return w >= 1900 && w <= 2400 ? String(w + 543) : p;
    }
    function g(p) {
      p.querySelectorAll(".el-year-table").forEach((w) => {
        const S = document.createTreeWalker(w, NodeFilter.SHOW_TEXT);
        let N;
        for (; N = S.nextNode(); ) {
          const y = N.nodeValue ?? "";
          if (!/\d{4}/.test(y)) continue;
          const T = y.replace(/\d{4}/g, $);
          T !== y && (N.nodeValue = T);
        }
      }), p.querySelectorAll(Io).forEach((w) => {
        const S = w.textContent ?? "";
        if (!/\d{4}/.test(S)) return;
        let N = S.replace(/\d{4}/g, $).replace(/ปี/g, "").trim();
        N.startsWith("พ.ศ.") || (N = `พ.ศ. ${N}`), w.textContent !== N && (w.textContent = N);
      }), p.querySelectorAll(rg).forEach((w) => {
        const S = w.querySelectorAll(Io), N = S[0], y = S[1], T = y?.parentElement;
        N && y && T && T === N.parentElement && /\d{4}/.test(N.textContent ?? "") && T.insertBefore(y, N);
      });
    }
    let I = null;
    function F(p) {
      const w = i.onVisibleChange;
      if (typeof w == "function" && w(p), !!l.buddhist) {
        if (!p) {
          I?.disconnect(), I = null;
          return;
        }
        requestAnimationFrame(() => {
          const S = document.querySelector(`.${m}`);
          S && (g(S), I = new MutationObserver(() => g(S)), I.observe(S, { childList: !0, subtree: !0, characterData: !0 }));
        });
      }
    }
    return Ko(() => I?.disconnect()), t({
      pickerRef: s,
      focus: (...p) => s.value?.focus?.(...p),
      blur: () => s.value?.blur?.(),
      handleOpen: () => s.value?.handleOpen?.(),
      handleClose: () => s.value?.handleClose?.(),
      onPick: (...p) => s.value?.onPick?.(...p)
    }), (p, w) => {
      const S = gl;
      return n(), h(S, ae({
        ref_key: "pickerRef",
        ref: s
      }, p.$attrs, {
        modelValue: f.value,
        "onUpdate:modelValue": w[0] || (w[0] = (N) => f.value = N),
        type: e.type,
        format: c.value,
        editable: e.buddhist ? !1 : e.editable,
        "popper-class": _.value,
        onVisibleChange: F,
        onChange: w[1] || (w[1] = (N) => o("change", N))
      }), Je({ _: 2 }, [
        G(p.$slots, (N, y) => ({
          name: y,
          fn: r((T) => [
            re(p.$slots, y, ra(da(T || {})))
          ])
        }))
      ]), 1040, ["modelValue", "type", "format", "editable", "popper-class"]);
    };
  }
}), dg = ".el-date-picker__header, .el-date-range-picker__header", $o = ".el-date-picker__header-label, .el-date-range-picker__header-label", s_ = /* @__PURE__ */ B({
  inheritAttrs: !1,
  __name: "SdDatePickerPanelBE",
  props: {
    modelValue: { default: null },
    buddhist: { type: Boolean, default: !1 },
    type: { default: "date" },
    editable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = q(), s = q(), u = R(Ma, void 0);
    He(
      Ma,
      Z(() => l.buddhist ? Xo : u?.value)
    );
    const m = Z({
      get: () => l.modelValue,
      set: ($) => {
        o("update:modelValue", $), o("change", $);
      }
    });
    function f($) {
      const g = Number($);
      return g >= 1900 && g <= 2400 ? String(g + 543) : $;
    }
    function c($) {
      $.querySelectorAll(".el-year-table").forEach((g) => {
        const I = document.createTreeWalker(g, NodeFilter.SHOW_TEXT);
        let F;
        for (; F = I.nextNode(); ) {
          const p = F.nodeValue ?? "";
          if (!/\d{4}/.test(p)) continue;
          const w = p.replace(/\d{4}/g, f);
          w !== p && (F.nodeValue = w);
        }
      }), $.querySelectorAll($o).forEach((g) => {
        const I = g.textContent ?? "";
        if (!/\d{4}/.test(I)) return;
        let F = I.replace(/\d{4}/g, f).replace(/ปี/g, "").trim();
        F.startsWith("พ.ศ.") || (F = `พ.ศ. ${F}`), g.textContent !== F && (g.textContent = F);
      }), $.querySelectorAll(dg).forEach((g) => {
        const I = g.querySelectorAll($o), F = I[0], p = I[1], w = p?.parentElement;
        F && p && w && w === F.parentElement && /\d{4}/.test(F.textContent ?? "") && w.insertBefore(p, F);
      });
    }
    let _ = null;
    return xe(() => {
      !l.buddhist || !i.value || (c(i.value), _ = new MutationObserver(() => i.value && c(i.value)), _.observe(i.value, { childList: !0, subtree: !0, characterData: !0 }));
    }), Ko(() => _?.disconnect()), t({ panelRef: s }), ($, g) => {
      const I = cn;
      return n(), v("div", {
        ref_key: "rootRef",
        ref: i,
        class: "sd-date-panel-be"
      }, [
        d(I, ae({
          ref_key: "panelRef",
          ref: s
        }, $.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": g[0] || (g[0] = (F) => m.value = F),
          type: e.type,
          editable: e.buddhist ? !1 : e.editable
        }), Je({ _: 2 }, [
          G($.$slots, (F, p) => ({
            name: p,
            fn: r((w) => [
              re($.$slots, p, ra(da(w || {})))
            ])
          }))
        ]), 1040, ["modelValue", "type", "editable"])
      ], 512);
    };
  }
});
function ug(e) {
  return typeof e.key == "string" && e.key.length === 1 ? e.key : Ve.decodeKeyEvent(e);
}
const pg = B({
  name: "SdScan",
  emits: [
    "update:modelValue",
    // (code)            — โค้ดล่าสุด (optional, ใช้/ไม่ใช้ก็ได้)
    "scan",
    // (code, qty)       — สแกนสำเร็จ (event หลัก)
    "scan-error",
    // (debug)           — สแกนไม่ผ่าน validation
    "key-detect",
    // (keyCode, event)  — ทุก keydown (รวมปุ่มที่ไม่ใช่ตัวอักษร)
    "key-process",
    // (char, event)     — ทุกอักขระที่ถูกประมวลผล
    "paste",
    // (text, event)     — เมื่อ reactToPaste = true
    "scan-button-long-press"
    // ปุ่มสแกน hardware กดค้าง
  ],
  props: {
    /** โค้ดล่าสุดที่สแกนได้ (v-model) — optional convenience, ไม่จำเป็นต้องผูก */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * โปรไฟล์ hardware สำเร็จรูป — เซ็ตง่ายๆ ตัวเดียวจบ (override props react* ด้านล่าง):
     * - 'keyboard' : scanner USB/Bluetooth ที่จำลองคีย์บอร์ด (ค่าเริ่มต้น)
     * - 'paste'    : scanner ในมือถือ/กล้อง ที่ paste ค่าเข้ามา
     * - 'both'     : รับทั้ง keyboard + paste
     * - ''         : ไม่ใช้ preset, คุมเองผ่าน props react* / options
     */
    preset: {
      type: String,
      default: "keyboard"
    },
    /**
     * จุดที่ผูก listener — รับได้ 3 แบบ:
     * - 'document' (default) : ดักทั้งหน้า
     * - CSS selector string  : เช่น '#scan-zone' (ผูกที่ element นั้น, element ต้องถูก focus ถึงจะรับ keydown)
     * - HTMLElement / Document object ตรงๆ
     */
    target: {
      type: [String, Object],
      default: "document"
    },
    /** ปิดการทำงานชั่วคราว (detach listener) */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * แสดงสถานะเล็กๆ ที่มุมจอ:
     * - 'none'   (default) : ซ่อนทุกอย่าง (headless ล้วน)
     * - 'dot'    : จุดเล็กๆ ล้วน บอกสถานะด้วยสี (พร้อม / กำลังสแกน / ปิด) — ย่อสุด
     * - 'status' : จุด + ข้อความสถานะ (ไม่โชว์ value) — แบบย่อ บอกแค่สถานะ
     * - 'badge'  : จุด + ข้อความสถานะ + โค้ดล่าสุด — เต็ม
     */
    indicator: {
      type: String,
      default: "none"
    },
    /** ตำแหน่ง indicator */
    indicatorPosition: {
      type: String,
      default: "bottom-right"
    },
    /**
     * auto-hide indicator (วินาที) — หลังมีสถานะแสดง ถ้าเงียบครบ N วิ จะ fade หายไป
     * แล้วโผล่กลับเมื่อมีสแกนใหม่. 0 = แสดงตลอด (ไม่หาย)
     */
    indicatorTimeout: {
      type: Number,
      default: 0
    },
    /**
     * แสดง indicator เฉพาะตอนสแกน "สำเร็จ" เท่านั้น
     * - ไม่โผล่/ไม่เปลี่ยนเป็นสถานะ "กำลังสแกน" ระหว่างพิมพ์ (กันกวน)
     * - error ก็ไม่แสดง
     * เหมาะใช้คู่ indicatorTimeout > 0 = pop ป้ายเฉพาะตอนยิงผ่าน
     */
    indicatorScanOnly: {
      type: Boolean,
      default: !1
    },
    /** ใช้ keyCodeMapper เสริมสำหรับอักขระพิเศษใน QR/URL (ปิดได้ถ้าต้องการ behavior เดิมของ lib) */
    extendedCharset: {
      type: Boolean,
      default: !0
    },
    // ===== onScan.js options (เต็มรูปแบบ — จูนกับ hardware ได้) =====
    /** keyCode ที่ถือเป็น "จบการสแกน" (มักเป็น [13]=Enter หรือ [9]=Tab) */
    suffixKeyCodes: {
      type: Array,
      default: () => [9, 13]
    },
    /** keyCode ที่ถือเป็น "เริ่มการสแกน" */
    prefixKeyCodes: {
      type: Array,
      default: () => []
    },
    /** ความยาวขั้นต่ำของโค้ด */
    minLength: {
      type: Number,
      default: 6
    },
    /** เวลาเฉลี่ยต่ออักขระ (ms) — มากกว่านี้ถือว่าเป็นการพิมพ์มือ ไม่ใช่สแกน */
    avgTimeByChar: {
      type: Number,
      default: 30
    },
    /** หน่วงก่อนเช็คว่าสแกนจบ (ms) */
    timeBeforeScanTest: {
      type: Number,
      default: 100
    },
    /** keyCode ปุ่มสแกน hardware (ถ้าปุ่มทำตัวเป็นคีย์) — false = ไม่มี */
    scanButtonKeyCode: {
      type: [Number, Boolean],
      default: !1
    },
    scanButtonLongPressTime: {
      type: Number,
      default: 500
    },
    /** ไม่ประมวลผลสแกนถ้า element ที่ focus อยู่ match selector/element นี้ (เช่น 'input, textarea') */
    ignoreIfFocusOn: {
      type: [Boolean, String, Object, Array],
      default: !1
    },
    stopPropagation: {
      type: Boolean,
      default: !1
    },
    preventDefault: {
      type: Boolean,
      default: !1
    },
    /** จับ event ใน capture phase (ก่อน listener ที่ลึกกว่าใน DOM) */
    captureEvents: {
      type: Boolean,
      default: !1
    },
    /** ดักจาก keyboard (scanner USB/BT ที่จำลองคีย์บอร์ด) */
    reactToKeydown: {
      type: Boolean,
      default: !0
    },
    /** ดักจาก paste (scanner ในมือถือ / กล้อง ที่ paste ค่า) */
    reactToPaste: {
      type: Boolean,
      default: !1
    },
    /** จำนวน item ต่อการสแกน 1 ครั้ง */
    singleScanQty: {
      type: Number,
      default: 1
    },
    /** override keyCodeMapper เอง (สำคัญกว่า extendedCharset) */
    keyCodeMapper: {
      type: Function,
      default: null
    },
    /** escape-hatch — option object ดิบของ onScan.js, merge ทับ props ทั้งหมด (priority สูงสุด) */
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // เก็บ element ที่ attach ไว้จริง เพื่อ detach ถูกตัว (กรณี target เปลี่ยน)
      attachedEl: null,
      // state สำหรับ indicator
      scanning: !1,
      lastCode: "",
      flash: !1,
      // indicatorTimeout > 0: เริ่มซ่อน รอ activity ถึงโผล่
      indicatorVisible: !1,
      scanResetTimer: void 0,
      flashTimer: void 0,
      hideTimer: void 0
    };
  },
  computed: {
    statusState() {
      return this.disabled ? "disabled" : this.scanning ? "scanning" : "ready";
    },
    statusLabel() {
      switch (this.statusState) {
        case "scanning":
          return "Scanning...";
        case "disabled":
          return "Off";
        default:
          return "Ready";
      }
    },
    indicatorTitle() {
      return this.indicator === "badge" && this.lastCode ? `${this.statusLabel} · ${this.lastCode}` : this.statusLabel;
    },
    /** indicator ควรแสดงตอนนี้ไหม — timeout<=0 แสดงตลอด, >0 แสดงเฉพาะตอนมี activity ล่าสุด */
    indicatorShown() {
      return this.indicatorTimeout <= 0 ? !0 : this.indicatorVisible;
    },
    /** signature ของ option ที่ serializable ได้ — เปลี่ยนแล้ว reattach */
    optionsKey() {
      return JSON.stringify({
        pst: this.preset,
        // target อาจเป็น element object → ใช้ marker
        t: typeof this.target == "string" ? this.target : "[el]",
        d: this.disabled,
        sb: this.scanButtonKeyCode,
        sbt: this.scanButtonLongPressTime,
        tb: this.timeBeforeScanTest,
        avg: this.avgTimeByChar,
        min: this.minLength,
        suf: this.suffixKeyCodes,
        pre: this.prefixKeyCodes,
        ign: typeof this.ignoreIfFocusOn == "object" && this.ignoreIfFocusOn !== null ? "[obj]" : this.ignoreIfFocusOn,
        sp: this.stopPropagation,
        pd: this.preventDefault,
        cap: this.captureEvents,
        rk: this.reactToKeydown,
        rp: this.reactToPaste,
        q: this.singleScanQty,
        ext: this.extendedCharset,
        opt: this.options
      });
    }
  },
  watch: {
    optionsKey() {
      this.reattach();
    },
    disabled(e) {
      e ? this.detach() : this.attach();
    }
  },
  mounted() {
    this.attach();
  },
  unmounted() {
    this.detach(), this.scanResetTimer && clearTimeout(this.scanResetTimer), this.flashTimer && clearTimeout(this.flashTimer), this.hideTimer && clearTimeout(this.hideTimer);
  },
  methods: {
    /** ประกอบ option object ส่งเข้า onScan.js — callback แปลงเป็น $emit */
    buildOptions() {
      const e = {
        onScan: (t, a) => this.handleScan(t, a),
        onScanError: (t) => {
          this.scanning = !1, this.$emit("scan-error", t);
        },
        onKeyDetect: (t, a) => this.$emit("key-detect", t, a),
        onKeyProcess: (t, a) => {
          this.markScanning(), this.$emit("key-process", t, a);
        },
        onPaste: (t, a) => this.$emit("paste", t, a),
        onScanButtonLongPress: () => this.$emit("scan-button-long-press"),
        scanButtonKeyCode: this.scanButtonKeyCode,
        scanButtonLongPressTime: this.scanButtonLongPressTime,
        timeBeforeScanTest: this.timeBeforeScanTest,
        avgTimeByChar: this.avgTimeByChar,
        minLength: this.minLength,
        suffixKeyCodes: this.suffixKeyCodes,
        prefixKeyCodes: this.prefixKeyCodes,
        ignoreIfFocusOn: this.ignoreIfFocusOn,
        stopPropagation: this.stopPropagation,
        preventDefault: this.preventDefault,
        captureEvents: this.captureEvents,
        reactToKeydown: this.reactToKeydown,
        reactToPaste: this.reactToPaste,
        singleScanQty: this.singleScanQty
      };
      switch (this.preset) {
        case "keyboard":
          e.reactToKeydown = !0, e.reactToPaste = !1;
          break;
        case "paste":
          e.reactToKeydown = !1, e.reactToPaste = !0;
          break;
        case "both":
          e.reactToKeydown = !0, e.reactToPaste = !0;
          break;
      }
      return typeof this.keyCodeMapper == "function" ? e.keyCodeMapper = this.keyCodeMapper : this.extendedCharset && (e.keyCodeMapper = ug), { ...e, ...this.options };
    },
    /** ตั้งสถานะ "กำลังสแกน" + auto-reset ถ้าเงียบไป (สำหรับ indicator) */
    markScanning() {
      this.indicatorScanOnly || (this.scanning = !0, this.pokeIndicator(), this.scanResetTimer && clearTimeout(this.scanResetTimer), this.scanResetTimer = window.setTimeout(() => {
        this.scanning = !1;
      }, 400));
    },
    /** มี activity → แสดง indicator แล้วตั้งเวลา auto-hide (เฉพาะ indicatorTimeout > 0) */
    pokeIndicator() {
      this.indicatorTimeout <= 0 || (this.indicatorVisible = !0, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = window.setTimeout(() => {
        this.indicatorVisible = !1;
      }, this.indicatorTimeout * 1e3));
    },
    handleScan(e, t) {
      this.scanning = !1, this.scanResetTimer && clearTimeout(this.scanResetTimer), this.lastCode = e, this.pokeIndicator(), this.flash = !0, this.flashTimer && clearTimeout(this.flashTimer), this.flashTimer = window.setTimeout(() => {
        this.flash = !1;
      }, 600), this.$emit("update:modelValue", e), this.$emit("scan", e, t);
    },
    /** แปลง target prop → DOM element จริง */
    resolveTargetEl() {
      const e = this.target;
      if (e === "document" || e === void 0 || e === null) return document;
      if (typeof e == "string") {
        const t = document.querySelector(e);
        return t || (console.warn(`[SdScan] target selector "${e}" not found — falling back to document`), document);
      }
      return e;
    },
    attach() {
      if (this.disabled) return;
      const e = this.resolveTargetEl();
      e && (Ve.isAttachedTo(e) && Ve.detachFrom(e), Ve.attachTo(e, this.buildOptions()), this.attachedEl = e);
    },
    detach() {
      this.attachedEl && Ve.isAttachedTo(this.attachedEl) && Ve.detachFrom(this.attachedEl), this.attachedEl = null, this.scanning = !1;
    },
    reattach() {
      this.detach(), this.$nextTick(() => this.attach());
    },
    // ===== public methods (เรียกผ่าน ref ได้) =====
    /** จำลองการสแกน — string หรือ array ของ keyCode/event object (สำหรับเทส / trigger เอง) */
    simulateScan(e) {
      const t = this.attachedEl;
      t && Ve.isAttachedTo(t) && Ve.simulate(t, e);
    },
    /** อัปเดต option ระหว่างทาง (ไม่ reattach) — สำหรับ tune แบบ live */
    applyOptions(e) {
      const t = this.attachedEl;
      t && Ve.isAttachedTo(t) && Ve.setOptions(t, e);
    },
    getCurrentOptions() {
      const e = this.attachedEl;
      return e && Ve.isAttachedTo(e) ? Ve.getOptions(e) : null;
    },
    isScanning() {
      const e = this.attachedEl;
      return e && Ve.isAttachedTo(e) ? Ve.isScanInProgressFor(e) : !1;
    }
  }
}), mg = ["title"], hg = {
  key: 0,
  class: "sd-scan-indicator__label"
}, fg = {
  key: 1,
  class: "sd-scan-indicator__code"
};
function cg(e, t, a, l, o, i) {
  return e.indicator !== "none" ? (n(), h(Na, {
    key: 0,
    to: "body"
  }, [
    d(ja, { name: "sd-scan-fade" }, {
      default: r(() => [
        e.indicatorShown ? (n(), v("div", {
          key: 0,
          class: x(["sd-scan-indicator", [`is-${e.statusState}`, `pos-${e.indicatorPosition}`, { "is-flash": e.flash }]]),
          title: e.indicatorTitle
        }, [
          t[0] || (t[0] = C("span", { class: "sd-scan-indicator__dot" }, null, -1)),
          e.indicator !== "dot" ? (n(), v("span", hg, M(e.statusLabel), 1)) : b("", !0),
          e.indicator === "badge" && e.lastCode ? (n(), v("span", fg, M(e.lastCode), 1)) : b("", !0)
        ], 10, mg)) : b("", !0)
      ]),
      _: 1
    })
  ])) : b("", !0);
}
const r_ = /* @__PURE__ */ j(pg, [["render", cg], ["__scopeId", "data-v-f8dba78e"]]), bg = "card-reading", gg = "card-read", yg = "card-removed", vg = "reader-connected", wg = "reader-disconnected", Sg = B({
  name: "SdSmartCard",
  emits: [
    "connected",
    // ()                       — ws เปิดสำเร็จ
    "disconnected",
    // (CloseEvent)              — ws ปิด (หลุด/ปิดเอง)
    "card-reading",
    // ()                       — ตรวจพบบัตร กำลังอ่าน (ยังไม่เสร็จ)
    "card-read",
    // (data|null, ok, error)    — อ่านบัตรเสร็จ (event หลัก)
    "card-removed",
    // ()                       — ถอดบัตรออก
    "reader-connected",
    // ()                       — เครื่องอ่านพร้อมใช้งาน
    "reader-disconnected",
    // ()                       — เครื่องอ่านหลุด/ไม่พบ
    "message",
    // (AgentMessage)            — message ดิบทุกตัว (escape hatch)
    "error"
    // (Event)                   — ws error
  ],
  props: {
    /**
     * URL ของ agent แบบเต็ม — ถ้าให้มา ใช้ตรงๆ (override host/port/token/secure)
     * เช่น 'ws://localhost:8765/?token=change-me'
     */
    url: {
      type: String,
      default: ""
    },
    /** host ของ agent (ใช้เมื่อไม่ระบุ url) */
    host: {
      type: String,
      default: "localhost"
    },
    /** port ของ agent (ใช้เมื่อไม่ระบุ url) */
    port: {
      type: Number,
      default: 8765
    },
    /** token auth (ตรงกับ config.token ของ agent — dev default = 'change-me') */
    token: {
      type: String,
      default: "change-me"
    },
    /** ใช้ wss (TLS) แทน ws — ใช้เมื่อไม่ระบุ url */
    secure: {
      type: Boolean,
      default: !1
    },
    /** ต่อ ws อัตโนมัติตอน mount */
    autoConnect: {
      type: Boolean,
      default: !0
    },
    /** ปิดการทำงานชั่วคราว (ปิด ws + ไม่ reconnect) */
    disabled: {
      type: Boolean,
      default: !1
    },
    /** auto-reconnect เมื่อ ws หลุด (exponential backoff) */
    reconnect: {
      type: Boolean,
      default: !0
    },
    /** ดีเลย์เริ่มต้นก่อน reconnect (ms) — จะคูณเพิ่มแบบ backoff ทุกครั้งที่ fail */
    reconnectDelay: {
      type: Number,
      default: 1e3
    },
    /** เพดานดีเลย์ reconnect (ms) */
    reconnectMaxDelay: {
      type: Number,
      default: 3e4
    },
    /**
     * แสดงสถานะเล็กๆ ที่มุมจอ:
     * - 'none'   (default) : ซ่อนทุกอย่าง (headless ล้วน)
     * - 'dot'    : จุดเล็กๆ ล้วน บอกสถานะด้วยสี — ย่อสุด
     * - 'status' : จุด + ข้อความสถานะ (ไม่โชว์ value) — แบบย่อ
     * - 'badge'  : จุด + ข้อความสถานะ + cid ล่าสุด — เต็ม
     */
    indicator: {
      type: String,
      default: "none"
    },
    /** ตำแหน่ง indicator */
    indicatorPosition: {
      type: String,
      default: "bottom-right"
    },
    /**
     * auto-hide indicator (วินาที) — หลังมีสถานะแสดง ถ้าเงียบครบ N วิ จะ fade หายไป
     * แล้วโผล่กลับเมื่อมี activity ใหม่. 0 = แสดงตลอด (ไม่หาย)
     */
    indicatorTimeout: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ws: null,
      // connection state — แยกจาก reader/card state
      connState: "closed",
      // hardware state (อัปเดตจาก event ที่ push มา)
      readerPresent: !1,
      cardPresent: !1,
      reading: !1,
      lastData: null,
      lastCid: "",
      lastError: "",
      // indicator
      flash: !1,
      indicatorVisible: !1,
      // reconnect
      attempts: 0,
      manualClose: !1,
      // ตั้ง true ตอน disconnect()/disabled เพื่อไม่ให้ reconnect
      everConnected: !1,
      // เคยต่อ agent ติดอย่างน้อย 1 ครั้ง → อนุญาต reconnect (ไม่เคยติด = ไม่มี agent บนเครื่องนี้ ไม่ต้อง retry เปล่า)
      reconnectTimer: void 0,
      flashTimer: void 0,
      hideTimer: void 0
    };
  },
  computed: {
    /** URL จริงที่ใช้ต่อ — prop url ชนะ, ไม่งั้นประกอบจาก host/port/token/secure */
    wsUrl() {
      if (this.url) return this.url;
      const e = this.secure ? "wss" : "ws", t = this.token ? `?token=${encodeURIComponent(this.token)}` : "";
      return `${e}://${this.host}:${this.port}/${t}`;
    },
    /** สถานะรวมสำหรับ indicator */
    statusState() {
      return this.disabled ? "disabled" : this.connState === "connecting" ? "connecting" : this.connState !== "open" ? "offline" : this.reading ? "reading" : this.readerPresent ? "ready" : "no-reader";
    },
    statusLabel() {
      switch (this.statusState) {
        case "disabled":
          return "Off";
        case "offline":
          return "Offline";
        case "connecting":
          return "Connecting...";
        case "no-reader":
          return "No reader";
        case "reading":
          return "Reading...";
        default:
          return "Ready";
      }
    },
    indicatorTitle() {
      return this.indicator === "badge" && this.lastCid ? `${this.statusLabel} · ${this.lastCid}` : this.statusLabel;
    },
    /** indicator ควรแสดงตอนนี้ไหม — timeout<=0 แสดงตลอด, >0 แสดงเฉพาะตอนมี activity ล่าสุด */
    indicatorShown() {
      return this.indicatorTimeout <= 0 ? !0 : this.indicatorVisible;
    },
    /** signature ของ option ที่กระทบการต่อ — เปลี่ยนแล้ว reconnect */
    connectKey() {
      return JSON.stringify({
        u: this.url,
        h: this.host,
        p: this.port,
        t: this.token,
        s: this.secure
      });
    }
  },
  watch: {
    connectKey() {
      this.disabled || this.reconnectNow();
    },
    disabled(e) {
      e ? this.disconnect() : this.connect();
    }
  },
  mounted() {
    this.autoConnect && !this.disabled && this.connect();
  },
  unmounted() {
    this.teardown(), this.flashTimer && clearTimeout(this.flashTimer), this.hideTimer && clearTimeout(this.hideTimer);
  },
  methods: {
    /** เปิด ws ไป agent */
    connect() {
      this.disabled || this.ws && (this.connState === "open" || this.connState === "connecting") || (this.manualClose = !1, this.openSocket());
    },
    openSocket() {
      this.clearReconnect(), this.connState = "connecting", this.pokeIndicator();
      let e;
      try {
        e = new WebSocket(this.wsUrl);
      } catch {
        this.connState = "closed", this.scheduleReconnect();
        return;
      }
      this.ws = e, e.onopen = () => {
        this.connState = "open", this.attempts = 0, this.everConnected = !0, this.pokeIndicator(), this.$emit("connected");
      }, e.onmessage = (t) => this.handleMessage(t), e.onerror = (t) => this.$emit("error", t), e.onclose = (t) => {
        const a = this.connState !== "closed";
        this.connState = "closed", this.ws = null, this.readerPresent = !1, this.cardPresent = !1, this.reading = !1, a && this.$emit("disconnected", t), this.pokeIndicator(), this.manualClose || this.scheduleReconnect();
      };
    },
    /** ปิด ws เอง (ไม่ reconnect) */
    disconnect() {
      this.manualClose = !0, this.teardown(), this.connState = "closed", this.readerPresent = !1, this.cardPresent = !1, this.reading = !1;
    },
    /** ปิดแล้วต่อใหม่ทันที (reset backoff) */
    reconnectNow() {
      this.teardown(), this.attempts = 0, this.everConnected = !1, this.connect();
    },
    /** ปิด socket + ล้าง handler + ยกเลิก reconnect ที่ค้าง */
    teardown() {
      this.clearReconnect();
      const e = this.ws;
      if (e) {
        e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null;
        try {
          e.close();
        } catch {
        }
      }
      this.ws = null;
    },
    clearReconnect() {
      this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0);
    },
    /** ตั้งเวลา reconnect แบบ exponential backoff (มีเพดาน) */
    scheduleReconnect() {
      if (!this.reconnect || this.manualClose || this.disabled || !this.everConnected) return;
      this.clearReconnect();
      const e = Math.min(this.reconnectDelay * 2 ** this.attempts, this.reconnectMaxDelay);
      this.attempts += 1, this.reconnectTimer = window.setTimeout(() => {
        this.reconnectTimer = void 0, this.openSocket();
      }, e);
    },
    /** แปลง message จาก agent → state + $emit */
    handleMessage(e) {
      let t;
      try {
        t = JSON.parse(e.data);
      } catch {
        return;
      }
      switch (this.$emit("message", t), t.event) {
        case bg:
          this.cardPresent = !0, this.reading = !0, this.pokeIndicator(), this.$emit("card-reading");
          break;
        case gg:
          this.reading = !1, t.ok && t.data ? (this.lastData = t.data, this.lastCid = t.data.cid || "", this.lastError = "", this.cardPresent = !0, this.doFlash(), this.$emit("card-read", t.data, !0, "")) : (this.lastError = t.error || "read-failed", this.$emit("card-read", null, !1, this.lastError)), this.pokeIndicator();
          break;
        case yg:
          this.cardPresent = !1, this.reading = !1, this.pokeIndicator(), this.$emit("card-removed");
          break;
        case vg:
          this.readerPresent = !0, this.pokeIndicator(), this.$emit("reader-connected");
          break;
        case wg:
          this.readerPresent = !1, this.cardPresent = !1, this.reading = !1, this.pokeIndicator(), this.$emit("reader-disconnected");
          break;
      }
    },
    /** flash indicator สั้นๆ เมื่ออ่านบัตรสำเร็จ */
    doFlash() {
      this.flash = !0, this.flashTimer && clearTimeout(this.flashTimer), this.flashTimer = window.setTimeout(() => {
        this.flash = !1;
      }, 600);
    },
    /** มี activity → แสดง indicator แล้วตั้งเวลา auto-hide (เฉพาะ indicatorTimeout > 0) */
    pokeIndicator() {
      this.indicatorTimeout <= 0 || (this.indicatorVisible = !0, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = window.setTimeout(() => {
        this.indicatorVisible = !1;
      }, this.indicatorTimeout * 1e3));
    },
    // ===== public methods (เรียกผ่าน ref ได้) =====
    /** ต่อ ws (ถ้ายังไม่ต่อ) */
    open() {
      this.connect();
    },
    /** ปิด ws เอง */
    close() {
      this.disconnect();
    },
    /** ต่อใหม่ทันที (reset backoff) */
    reconnectSocket() {
      this.manualClose = !1, this.reconnectNow();
    },
    isConnected() {
      return this.connState === "open";
    },
    /** ข้อมูลบัตรที่อ่านได้ล่าสุด (null ถ้ายังไม่เคยอ่านสำเร็จ) */
    getLastData() {
      return this.lastData;
    }
  }
}), _g = ["title"], Fg = {
  key: 0,
  class: "sd-smartcard-indicator__label"
}, kg = {
  key: 1,
  class: "sd-smartcard-indicator__code"
};
function Cg(e, t, a, l, o, i) {
  return e.indicator !== "none" ? (n(), h(Na, {
    key: 0,
    to: "body"
  }, [
    d(ja, { name: "sd-smartcard-fade" }, {
      default: r(() => [
        e.indicatorShown ? (n(), v("div", {
          key: 0,
          class: x(["sd-smartcard-indicator", [`is-${e.statusState}`, `pos-${e.indicatorPosition}`, { "is-flash": e.flash }]]),
          title: e.indicatorTitle
        }, [
          t[0] || (t[0] = C("span", { class: "sd-smartcard-indicator__dot" }, null, -1)),
          e.indicator !== "dot" ? (n(), v("span", Fg, M(e.statusLabel), 1)) : b("", !0),
          e.indicator === "badge" && e.lastCid ? (n(), v("span", kg, M(e.lastCid), 1)) : b("", !0)
        ], 10, _g)) : b("", !0)
      ]),
      _: 1
    })
  ])) : b("", !0);
}
const d_ = /* @__PURE__ */ j(Sg, [["render", Cg], ["__scopeId", "data-v-b20b37cd"]]), Dg = "https://static.line-scdn.net/liff/edge/2/sdk.js";
let Ta = null;
const sl = /* @__PURE__ */ new Map();
function Ig() {
  return window.liff ? Promise.resolve(window.liff) : Ta || (Ta = new Promise((e, t) => {
    const a = document.createElement("script");
    a.src = Dg, a.async = !0, a.onload = () => {
      window.liff ? e(window.liff) : t(new Error("LIFF SDK loaded but window.liff is undefined"));
    }, a.onerror = () => t(new Error("Failed to load LIFF SDK from CDN")), document.head.appendChild(a);
  }), Ta);
}
function $g() {
  const e = q(!1), t = q(!1), a = q(null), l = q(!1), o = q(!1), i = Fn(null);
  function s() {
    if (!window.liff) throw new Error("LIFF not initialized — call init() first");
    return window.liff;
  }
  async function u(F) {
    if (!F) {
      a.value = "liffId is required";
      return;
    }
    t.value = !0, a.value = null;
    try {
      let p = sl.get(F);
      p || (p = Ig().then((S) => S.init({ liffId: F })), sl.set(F, p)), await p;
      const w = s();
      e.value = !0, o.value = w.isInClient(), l.value = w.isLoggedIn(), l.value && (i.value = await w.getProfile());
    } catch (p) {
      a.value = p instanceof Error ? p.message : String(p), sl.delete(F);
    } finally {
      t.value = !1;
    }
  }
  function m(F) {
    s().login(F ? { redirectUri: F } : void 0);
  }
  function f() {
    s().logout(), l.value = !1, i.value = null;
  }
  async function c() {
    const F = s();
    return F.isLoggedIn() ? (i.value = await F.getProfile(), l.value = !0, i.value) : (m(), null);
  }
  function _() {
    return s().getIDToken();
  }
  async function $() {
    return (await s().scanCodeV2()).value;
  }
  async function g(F) {
    await s().sendMessages(F);
  }
  async function I(F) {
    const p = await s().shareTargetPicker(F);
    return !!p && p.status === "success";
  }
  return {
    // state (read-only ออกนอก)
    ready: Vt(e),
    loading: Vt(t),
    error: Vt(a),
    loggedIn: Vt(l),
    inClient: Vt(o),
    profile: Vt(i),
    // actions
    init: u,
    login: m,
    logout: f,
    fetchProfile: c,
    getIdToken: _,
    scan: $,
    sendMessages: g,
    share: I
  };
}
const Tg = ["title"], Pg = {
  key: 0,
  class: "sd-liff-indicator__label"
}, Mg = /* @__PURE__ */ B({
  __name: "SdLiff",
  props: {
    liffId: {},
    autoLogin: { type: Boolean, default: !1 },
    indicator: { default: "none" },
    indicatorPosition: { default: "bottom-right" }
  },
  emits: ["ready", "profile", "token", "scan", "shareDone", "error"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = $g();
    xe(async () => {
      if (await i.init(l.liffId), i.error.value) {
        o("error", i.error.value);
        return;
      }
      if (o("ready"), l.autoLogin && !i.loggedIn.value) {
        i.login();
        return;
      }
      s();
    });
    function s() {
      i.profile.value && (o("profile", i.profile.value), o("token", i.getIdToken()));
    }
    async function u() {
      try {
        await i.fetchProfile() && s();
      } catch (p) {
        g(p);
      }
    }
    function m() {
      i.logout();
    }
    function f() {
      return i.getIdToken();
    }
    async function c() {
      try {
        const p = await i.scan();
        return p && o("scan", p), p;
      } catch (p) {
        return g(p), null;
      }
    }
    async function _(p) {
      try {
        const w = await i.share(p ?? [{ type: "text", text: "Shared from SDForm" }]);
        return o("shareDone", w), w;
      } catch (w) {
        return g(w), !1;
      }
    }
    async function $(p) {
      try {
        await i.sendMessages(p ?? [{ type: "text", text: "Sent from SDForm" }]), o("shareDone", !0);
      } catch (w) {
        g(w);
      }
    }
    function g(p) {
      o("error", p instanceof Error ? p.message : String(p));
    }
    const I = Z(() => i.error.value ? "error" : i.loading.value ? "loading" : i.loggedIn.value ? "success" : "idle"), F = Z(() => i.error.value ? "LIFF error" : i.loading.value ? "LIFF connecting…" : i.loggedIn.value ? i.profile.value?.displayName || "LINE ready" : "LINE not logged in");
    return t({
      login: u,
      logout: m,
      getIdToken: f,
      scan: c,
      share: _,
      sendMessages: $,
      // state (readonly refs จาก useLiff)
      ready: i.ready,
      loading: i.loading,
      error: i.error,
      loggedIn: i.loggedIn,
      inClient: i.inClient,
      profile: i.profile
    }), (p, w) => (n(), h(Na, { to: "body" }, [
      d(ja, { name: "sd-liff-fade" }, {
        default: r(() => [
          e.indicator !== "none" ? (n(), v("div", {
            key: 0,
            class: x(["sd-liff-indicator", [`is-${I.value}`, `pos-${e.indicatorPosition}`]]),
            title: F.value
          }, [
            w[0] || (w[0] = C("span", { class: "sd-liff-indicator__dot" }, null, -1)),
            e.indicator !== "dot" ? (n(), v("span", Pg, M(F.value), 1)) : b("", !0)
          ], 10, Tg)) : b("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), u_ = /* @__PURE__ */ j(Mg, [["__scopeId", "data-v-01d16ab7"]]), Vg = B({
  name: "SdCrudTree",
  components: { SDCustomContent: Xa },
  emits: ["node-click", "select", "unselect", "aftersave", "afterdelete"],
  props: {
    // ─── Data source (หลักการเดียวกับ SdCascaderForm) ────────────────────────
    formId: {
      type: String,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: String,
      required: !0
    },
    // template 1 บรรทัด render ผ่าน SDCustomContent — ใส่หลาย field/el-* ได้
    // เช่น "{{o_name}} <el-tag size='small'>{{code}}</el-tag>" — ว่าง = ใช้ labelField
    detailContent: {
      type: String,
      default: ""
    },
    parentField: {
      type: String,
      required: !0
    },
    // parentField value ที่ถือว่าเป็น root (null = field ว่าง/ไม่มี parent)
    rootValue: {
      type: null,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    limit: {
      type: Number,
      default: 1e3
    },
    // NoQL WHERE เช่น "`status` = 'active'"
    where: {
      type: String,
      default: ""
    },
    // sort เช่น [{ column: 'name', sort: 'ASC' }]
    orderBy: {
      type: Array,
      default: null
    },
    userState: {
      type: Object,
      required: !0
    },
    // ─── Header / display ────────────────────────────────────────────────────
    titleEnable: {
      type: Boolean,
      default: !1
    },
    // ว่าง = ดึง form_name (default) · ใส่ = ใช้ค่านี้ (pattern เดียวกับ SdUiListView)
    titleName: {
      type: String,
      default: ""
    },
    // ว่าง = ดึง form_icon (default) · ใส่ = ใช้ svg-icon ชื่อนี้
    iconName: {
      type: String,
      default: ""
    },
    // '' / 'auto' = สูงตามเนื้อหา · '100%' = เต็ม parent · '300px' = fixed (scroll)
    height: {
      type: String,
      default: ""
    },
    defaultExpandAll: {
      type: Boolean,
      default: !0
    },
    highlightCurrent: {
      type: Boolean,
      default: !0
    },
    emptyText: {
      type: String,
      default: "No data"
    },
    // row height ของ virtual scroll (el-tree-v2) — ต้องพอให้ปุ่ม actions อยู่ได้
    itemSize: {
      type: Number,
      default: 40
    },
    // field ที่ใช้ค้นหา — มีค่า = แสดง search box + กรองตาม field เหล่านี้ (pattern เดียวกับ SdUiListView)
    searchFields: {
      type: Array,
      default: void 0
    },
    // 'data' = กรอง client-side จาก node ที่โหลด (เก็บ tree hierarchy, ไม่ยิง API)
    // 'db'   = ยิง query ไป DB (เหมือน list view) → คืน matched rows → แสดงเป็น flat list
    searchMode: {
      type: String,
      default: "data"
    },
    searchPlaceholder: {
      type: String,
      default: "Search..."
    },
    // ─── CRUD toggles + labels (ตามรูป Append/Edit/Delete) ───────────────────
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    appendBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    addRootLabel: {
      type: String,
      default: "Add"
    },
    reloadLabel: {
      type: String,
      default: "Reload"
    },
    appendLabel: {
      type: String,
      default: "Append"
    },
    viewLabel: {
      type: String,
      default: "View"
    },
    editLabel: {
      type: String,
      default: "Edit"
    },
    deleteLabel: {
      type: String,
      default: "Delete"
    },
    deleteConfirmText: {
      type: String,
      default: "Are you sure you want to remove this item?"
    },
    // ─── Modal form options (ส่งต่อให้ subFormOpen เหมือน SdUiListView) ──────
    backdropForm: {
      type: Boolean,
      default: !1
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    // realtime sync ข้าม client (topic 'gridform' เดียวกับ SdUiListView) — เปิดได้เมื่อ form ตั้ง enable_websocket
    enableWs: {
      type: Boolean,
      default: !0
    },
    // true = อยู่ใน builder (preview) → ไม่โหลดข้อมูลจริง
    buildState: {
      type: Boolean,
      default: !1
    },
    // ─── Hooks (เหมือน SdUiListView) ─────────────────────────────────────────
    insertBefore: {
      type: Function,
      default: null
    },
    updateBefore: {
      type: Function,
      default: null
    },
    viewBefore: {
      type: Function,
      default: null
    },
    beforeSave: {
      type: Function,
      default: null
    },
    afterDelete: {
      type: Function,
      default: null
    },
    allowDeleteFunc: {
      type: Function,
      default: null
    },
    clickEvent: {
      type: Function,
      default: null
    },
    selectEvent: {
      type: Function,
      default: null
    },
    unselectEvent: {
      type: Function,
      default: null
    }
  },
  setup() {
    return { subFormOpen: R("subFormOpen", void 0) };
  },
  data() {
    return {
      treeData: [],
      loading: !1,
      defaultParams: {},
      selectedKey: null,
      titleNameForm: "",
      // title ที่ resolve แล้ว (titleName || form_name)
      iconForm: "",
      // svg data ของ form_icon (เมื่อไม่ได้กำหนด iconName)
      sdformModel: null,
      // form model เต็ม (ใช้ title/icon + form_event + ws)
      wsConn: void 0,
      widgetId: "SdCrudTree-" + Wt(),
      afterDeleteForm: void 0,
      // compiled form_event.after_delete
      sdFunc: {},
      // context (this) ที่ส่งให้ form_event
      lastInsert: !1,
      // จำว่า action ล่าสุดเป็น insert หรือ update (ใช้ตอน wsSend)
      searchText: "",
      searchTimer: void 0,
      // debounce สำหรับ db search
      treeHeight: 400,
      // el-tree-v2 ต้องการ height เป็น number (virtual) — คำนวณตาม mode
      expandedKeys: [],
      // key ที่ expand อยู่ (ใช้คำนวณ height auto)
      resizeObserver: void 0
    };
  },
  computed: {
    // map field ของ data → el-tree-v2 (value = node key, label, children)
    treeProps() {
      return {
        value: this.valueField,
        label: this.labelField,
        children: "children"
      };
    },
    // auto = สูงตามเนื้อหา (ไม่กำหนด height หรือ 'auto')
    isAutoHeight() {
      const e = (this.height || "").trim();
      return !e || e === "auto";
    },
    // style ของ root: auto → ปล่อยสูงตามเนื้อหา · อื่นๆ → ตามค่าที่ใส่ (100% / 300px)
    heightStyle() {
      return this.isAutoHeight ? "auto" : this.height;
    }
  },
  async mounted() {
    this.defaultParams = { ...this.params }, this.titleNameForm = this.titleName, this.updateTreeHeight();
    const e = this.$refs.bodyRef;
    e && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(() => this.updateTreeHeight()), this.resizeObserver.observe(e)), !this.buildState && (await this.loadModel(), this.loadData());
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.resizeObserver?.disconnect(), this.searchTimer && clearTimeout(this.searchTimer);
  },
  watch: {
    formId() {
      this.loadData();
    },
    params: {
      deep: !0,
      handler(e) {
        this.defaultParams = { ...e }, this.loadData();
      }
    },
    where() {
      this.loadData();
    },
    orderBy: {
      deep: !0,
      handler() {
        this.loadData();
      }
    }
  },
  methods: {
    // รองรับทั้ง plain ID และ { value, label } (จาก select-form-input)
    resolveParentId(e) {
      return e !== null && typeof e == "object" && "value" in e ? e.value : e;
    },
    // แปลง flat records → nested tree (logic เดียวกับ SdCascaderForm)
    buildTree(e) {
      const t = {};
      e.forEach((o) => {
        t[o[this.valueField]] = { ...o, children: [] };
      });
      const a = [];
      e.forEach((o) => {
        const i = this.resolveParentId(o[this.parentField]), s = t[o[this.valueField]];
        !i || i === this.rootValue || !t[i] ? a.push(s) : t[i].children.push(s);
      });
      const l = (o) => {
        o.forEach((i) => {
          i.children?.length === 0 ? delete i.children : i.children && l(i.children);
        });
      };
      return l(a), a;
    },
    // โหลด form model (cache ที่ formStore เหมือน SdUiListView) แล้ว init title/icon/form_event/ws
    async loadModel() {
      let e = this.userState.formStore?.[this.formId];
      if (!e) {
        const t = await Pe(this.formId, this.userState);
        t.response && t.data && (e = t.data);
      }
      e && this.initForm(e);
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore && (this.userState.formStore[this.formId] = e), this.titleName || (this.titleNameForm = e.form_name ? `${e.form_name}` : ""), this.iconName || (this.iconForm = e.form_icon || ""), e.form_event?.after_delete && e.form_event?.enable && (this.afterDeleteForm = new Function("formData", ...ke, e.form_event.after_delete)), this.sdFunc = {
        subFormOpen: this.subFormOpen,
        userState: this.userState,
        params: this.params,
        ElMessage: O,
        sdformModel: this.sdformModel,
        wsConn: this.wsConn,
        handleAppend: this.handleAppend,
        handleUpdate: this.handleUpdate,
        handleView: this.handleView
      }, this.setupWs();
    },
    // realtime: tree ต้อง rebuild → reload ทั้งหมดเมื่อมี event จาก client อื่น
    setupWs() {
      this.enableWs && this.sdformModel?.form_options?.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (e) => {
        const t = e.from === this.userState.user?.username && !(e.params && e.params.widget && e.params.widget !== this.widgetId);
        e.from !== "server" && !t && this.loadData();
      }), this.sdFunc.wsConn = this.wsConn);
    },
    loadData() {
      if (this.buildState) return;
      this.loading = !0;
      const e = this.searchMode === "db" && !!this.searchText && !!this.searchFields?.length, t = { limit: this.limit };
      this.where && (t.where = this.where), this.orderBy && (t.orderBy = this.orderBy);
      const a = { ...this.defaultParams };
      e && (t.search = this.searchFields, a.q = `%${this.searchText}%`), this.userState.crudGetAll(
        {
          sdProvider: {
            providerId: this.formId,
            providerType: "FORM",
            options: t,
            params: a
          },
          totalEnable: !1
        },
        (l) => {
          this.loading = !1;
          const o = l?.data && Array.isArray(l.data) ? l.data : [];
          e ? this.treeData = o : (this.treeData = this.buildTree(o), this.$nextTick(() => {
            this.defaultExpandAll && this.expandAllNodes(), this.searchMode === "data" && this.searchText && this.applyClientFilter(), this.updateTreeHeight();
          }));
        },
        () => {
          this.loading = !1, this.treeData = [];
        }
      );
    },
    // ─── CRUD: เปิดฟอร์มผ่าน subFormOpen (parity กับ SdUiListView) ───────────
    openForm(e) {
      if (!this.subFormOpen) {
        O.warning("subFormOpen not available (need form runtime)");
        return;
      }
      this.subFormOpen({
        modelValue: e.modelValue ?? !0,
        initData: e.initData,
        backdrop: this.backdropForm,
        readonly: !!e.readonly,
        formId: this.formId,
        parentId: e.parentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        // required prop ของ SdCrudPopupForm
        afterSaveCallback: this.afterSave
      });
    },
    // Add root: parent ว่าง
    handleAddRoot() {
      this.buildState || (this.lastInsert = !0, this.insertBefore && this.insertBefore(null), this.openForm({ initData: { ...this.initData }, parentId: "" }));
    },
    // Append child: parent = node ที่กด → ต้อง seed ค่า parentField ใน initData
    // เองด้วย (form ถึงจะบันทึก parent ถูก) — parent_id เก็บแบบ { value, label } ตาม select-form-input
    handleAppend(e) {
      if (this.buildState) return;
      this.lastInsert = !0;
      const t = this.resolveParentId(e[this.valueField]), a = {
        ...this.initData,
        [this.parentField]: {
          value: e[this.valueField],
          label: e[this.labelField]
        }
      };
      this.insertBefore && this.insertBefore(e), this.openForm({ initData: a, parentId: t });
    },
    handleUpdate(e) {
      if (this.buildState) return;
      this.lastInsert = !1, this.updateBefore && this.updateBefore(e);
      const t = this.resolveParentId(e[this.parentField]);
      this.openForm({ initData: e, parentId: t ?? "" });
    },
    handleView(e) {
      if (this.buildState) return;
      this.viewBefore && this.viewBefore(e);
      const t = this.resolveParentId(e[this.parentField]);
      this.openForm({ initData: e, parentId: t ?? "", readonly: !0 });
    },
    // ปิด modal: เรียก subFormOpen ซ้ำด้วย modelValue:false (provider InitApp/runtime จะ set flag = false)
    handleCancel() {
      this.openForm({ initData: {}, parentId: "", modelValue: !1 });
    },
    // หลัง save เสร็จ: ปิด modal (ถ้าไม่ใช่ autoSave) + notify ws + reload (เหมือน SdUiListView)
    afterSave(e, t = !1) {
      t || this.openForm({ initData: {}, parentId: "", modelValue: !1 }), e && this.wsConn?.wsSend({
        data: e,
        method: this.lastInsert ? "insert" : "update",
        keyid: this.valueField,
        params: { widget: this.widgetId }
      }), this.loadData(), this.$emit("aftersave", e);
    },
    handleDelete(e) {
      this.buildState || this.allowDeleteFunc && !this.allowDeleteFunc(e) || ve.confirm(this.deleteConfirmText, "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ya(this.formId, e[this.valueField], this.userState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.valueField, params: { widget: this.widgetId } }), this.selectedKey != null && e[this.valueField] === this.selectedKey && (this.selectedKey = null), this.afterDelete && this.afterDelete(e), this.$emit("afterdelete", e), this.sdformModel?.form_event?.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (a) {
              O.error(a.message);
            }
          this.loadData(), O.success("Delete completed.");
        } else
          O.warning("Unable to remove data");
      }).catch(() => {
      });
    },
    // ─── Selection (click) ───────────────────────────────────────────────────
    handleNodeClick(e) {
      if (this.buildState) return;
      const t = e[this.valueField];
      t != null && this.selectedKey === t ? (this.selectedKey = null, this.unselectEvent && this.unselectEvent(e), this.$emit("unselect", e)) : (this.selectedKey = t, this.selectEvent && this.selectEvent(e), this.$emit("select", e)), this.clickEvent && this.clickEvent(e), this.$emit("node-click", e);
    },
    // ─── el-tree-v2: height / filter / expand ────────────────────────────────
    // el-tree-v2 (virtual) ต้องการ height เป็น number เสมอ → คำนวณตาม mode ของ prop height
    updateTreeHeight() {
      if (this.isAutoHeight) {
        const e = this.countVisibleNodes();
        this.treeHeight = Math.max(e, 1) * this.itemSize;
      } else if (this.height.trim().endsWith("%")) {
        const e = this.$refs.bodyRef;
        e && e.clientHeight > 0 && (this.treeHeight = e.clientHeight);
      } else
        this.treeHeight = parseInt(this.height, 10) || 400;
    },
    // นับ node ที่มองเห็น (เฉพาะที่ ancestor ทุกตัว expand อยู่) — ใช้กับ height auto
    countVisibleNodes() {
      let e = 0;
      const t = (a) => {
        a.forEach((l) => {
          e++, l.children?.length && this.expandedKeys.includes(l[this.valueField]) && t(l.children);
        });
      };
      return t(this.treeData), e;
    },
    // expand/collapse แล้ว → อัปเดต expandedKeys + คำนวณ height ใหม่ (เฉพาะ auto ที่กระทบ)
    onNodeToggle(e, t) {
      const a = t?.key;
      a != null && (t.expanded ? this.expandedKeys.includes(a) || this.expandedKeys.push(a) : this.expandedKeys = this.expandedKeys.filter((l) => l !== a), this.isAutoHeight && this.updateTreeHeight());
    },
    // search box → แยกตาม searchMode
    handleSearch() {
      this.searchMode === "db" ? (this.searchTimer && clearTimeout(this.searchTimer), this.searchTimer = setTimeout(() => this.loadData(), 300)) : this.applyClientFilter();
    },
    applyClientFilter() {
      this.$refs.treeRef?.filter?.(this.searchText);
    },
    // data mode: กรองจากทุก field ใน searchFields (case-insensitive) — ว่าง = แสดงหมด
    filterMethod(e, t) {
      if (!e) return !0;
      const a = this.searchFields?.length ? this.searchFields : [this.labelField], l = String(e).toLowerCase();
      return a.some((o) => {
        let i = t?.[o];
        return i !== null && typeof i == "object" && "label" in i && (i = i.label), String(i ?? "").toLowerCase().includes(l);
      });
    },
    // expand-all: el-tree-v2 ไม่มี default-expand-all → set keys เองหลังโหลด
    expandAllNodes() {
      const e = [], t = (l) => {
        l.forEach((o) => {
          e.push(o[this.valueField]), o.children?.length && t(o.children);
        });
      };
      t(this.treeData), this.expandedKeys = e, this.$refs.treeRef?.setExpandedKeys?.(e);
    },
    reload() {
      this.loadData();
    }
  }
}), Ag = {
  key: 0,
  class: "sd-crud-tree__header"
}, Eg = {
  key: 0,
  class: "sd-crud-tree__title"
}, Og = { class: "sd-crud-tree__header-actions" }, Lg = {
  key: 1,
  class: "sd-crud-tree__search"
}, Bg = {
  ref: "bodyRef",
  class: "sd-crud-tree__body"
}, Ng = { class: "sd-crud-tree__node" }, jg = { class: "sd-crud-tree__label" }, Ug = { class: "sd-crud-tree__actions" };
function Rg(e, t, a, l, o, i) {
  const s = et, u = we, m = X("Plus"), f = We, c = ie, _ = X("Refresh"), $ = X("Search"), g = Ie, I = Xa, F = X("View"), p = X("EditPen"), w = X("Delete"), S = bn, N = sa;
  return n(), v("div", {
    class: "sd-crud-tree",
    style: te({ height: e.heightStyle })
  }, [
    e.titleEnable || e.addBtnEnable || e.reloadBtnEnable || e.$slots.actionsBar ? (n(), v("div", Ag, [
      e.titleEnable ? (n(), v("span", Eg, [
        e.iconForm ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : e.iconName ? (n(), h(u, {
          key: 1,
          "icon-name": e.iconName
        }, null, 8, ["icon-name"])) : (n(), h(u, {
          key: 2,
          "icon-name": "icon-sdform"
        })),
        D(" " + M(e.titleNameForm), 1)
      ])) : b("", !0),
      C("div", Og, [
        re(e.$slots, "actionsBar", {}, void 0, !0),
        e.addBtnEnable ? (n(), h(c, {
          key: 0,
          type: "success",
          circle: "",
          size: "small",
          title: e.addRootLabel,
          onClick: e.handleAddRoot
        }, {
          default: r(() => [
            d(f, null, {
              default: r(() => [
                d(m)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "onClick"])) : b("", !0),
        e.reloadBtnEnable ? (n(), h(c, {
          key: 1,
          circle: "",
          size: "small",
          loading: e.loading,
          title: e.reloadLabel,
          onClick: e.reload
        }, {
          default: r(() => [
            d(f, null, {
              default: r(() => [
                d(_)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["loading", "title", "onClick"])) : b("", !0)
      ])
    ])) : b("", !0),
    e.searchFields ? (n(), v("div", Lg, [
      d(g, {
        modelValue: e.searchText,
        "onUpdate:modelValue": t[0] || (t[0] = (y) => e.searchText = y),
        placeholder: e.searchPlaceholder,
        clearable: "",
        onInput: e.handleSearch
      }, {
        prefix: r(() => [
          d(f, null, {
            default: r(() => [
              d($)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "onInput"])
    ])) : b("", !0),
    Ae((n(), v("div", Bg, [
      d(S, {
        ref: "treeRef",
        data: e.treeData,
        props: e.treeProps,
        height: e.treeHeight,
        "item-size": e.itemSize,
        "expand-on-click-node": !1,
        "highlight-current": e.highlightCurrent,
        "filter-method": e.filterMethod,
        "empty-text": e.emptyText,
        onNodeClick: e.handleNodeClick,
        onNodeExpand: e.onNodeToggle,
        onNodeCollapse: e.onNodeToggle
      }, {
        default: r(({ node: y, data: T }) => [
          C("div", Ng, [
            C("span", jg, [
              e.detailContent ? (n(), h(I, {
                key: 0,
                content: e.detailContent,
                data: T
              }, null, 8, ["content", "data"])) : (n(), v(L, { key: 1 }, [
                D(M(y.label), 1)
              ], 64))
            ]),
            C("span", Ug, [
              re(e.$slots, "actionBtnRow", {
                row: T,
                node: y
              }, void 0, !0),
              e.appendBtnEnable ? (n(), h(c, {
                key: 0,
                type: "success",
                circle: "",
                plain: "",
                size: "small",
                title: e.appendLabel,
                onClick: U((A) => e.handleAppend(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(m)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.viewBtnEnable ? (n(), h(c, {
                key: 1,
                type: "info",
                circle: "",
                plain: "",
                size: "small",
                title: e.viewLabel,
                onClick: U((A) => e.handleView(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(F)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.updateBtnEnable ? (n(), h(c, {
                key: 2,
                type: "primary",
                circle: "",
                plain: "",
                size: "small",
                title: e.editLabel,
                onClick: U((A) => e.handleUpdate(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(p)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.delBtnEnable ? (n(), h(c, {
                key: 3,
                type: "danger",
                circle: "",
                plain: "",
                size: "small",
                title: e.deleteLabel,
                onClick: U((A) => e.handleDelete(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(w)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["data", "props", "height", "item-size", "highlight-current", "filter-method", "empty-text", "onNodeClick", "onNodeExpand", "onNodeCollapse"])
    ])), [
      [N, e.loading]
    ])
  ], 4);
}
const p_ = /* @__PURE__ */ j(Vg, [["render", Rg], ["__scopeId", "data-v-5db24e92"]]), zg = B({
  name: "SdUnitSwitcher",
  emits: ["switched"],
  props: {
    userState: {
      type: Object,
      required: !0
    },
    // เปิด section ห้องตรวจ — ปิด (default) = dropdown มีเฉพาะ UNITS
    roomEnable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      units: [],
      rooms: [],
      allowAll: !1,
      loading: !1,
      loaded: !1,
      switching: !1,
      keyword: ""
    };
  },
  computed: {
    currentCode() {
      return this.userState?.user?.unit?.code || "";
    },
    currentName() {
      return this.userState?.user?.unit?.name || "-";
    },
    currentRoomId() {
      return this.userState?.user?.room?.id || "";
    },
    currentRoomName() {
      return this.userState?.user?.room?.name || "";
    },
    displayLabel() {
      return this.roomEnable && this.currentRoomName ? `${this.currentName} / ${this.currentRoomName}` : this.currentName;
    },
    // ค้นหาฝั่ง client จาก list ที่โหลดแล้ว (endpoint คืนสูงสุด 500 แถว) — ค้นทั้ง code และชื่อ
    filteredUnits() {
      const e = this.keyword.trim().toLowerCase();
      return e ? this.units.filter((t) => {
        const a = (t.unit_code || "").toLowerCase(), l = (t.unit_name || "").toLowerCase();
        return a.includes(e) || l.includes(e);
      }) : this.units;
    },
    filteredRooms() {
      if (!this.roomEnable)
        return [];
      const e = this.keyword.trim().toLowerCase();
      return e ? this.rooms.filter((t) => {
        const a = (t.code || "").toLowerCase(), l = (t.name || "").toLowerCase(), o = (t.unit?.label || "").toLowerCase();
        return a.includes(e) || l.includes(e) || o.includes(e);
      }) : this.rooms;
    }
  },
  methods: {
    async loadOptions() {
      this.loading = !0;
      try {
        const e = [this.userState.getUnitOptions()];
        this.roomEnable && e.push(this.userState.getRoomOptions());
        const [t, a] = await Promise.all(e);
        this.units = t.units, this.allowAll = t.allowAll, this.rooms = a ? a.rooms : [], this.loaded = !0;
      } finally {
        this.loading = !1;
      }
    },
    handleVisibleChange(e) {
      e && !this.loaded && !this.loading && this.loadOptions(), e && (this.keyword = "");
    },
    async handleCommand(e) {
      if (!(!e || !e.data || this.switching)) {
        this.switching = !0;
        try {
          let t = !1;
          e.kind === "room" ? t = await this.userState.switchRoom(e.data._id) : t = await this.userState.switchUnit(e.data._id), t && this.$emit("switched", e);
        } finally {
          this.switching = !1;
        }
      }
    }
  }
}), Hg = ["title"], qg = { class: "sd-unit-switcher__name sd-unit-switcher__name--unit" }, Wg = { class: "sd-unit-switcher__name sd-unit-switcher__name--room" }, Kg = {
  key: 0,
  class: "sd-unit-switcher__section"
}, xg = { class: "sd-unit-switcher__code" }, Gg = { class: "sd-unit-switcher__code" }, Yg = {
  key: 0,
  class: "sd-unit-switcher__unit-tag"
};
function Jg(e, t, a, l, o, i) {
  const s = Ie, u = kt, m = Ft, f = _t;
  return e.userState && e.userState.user ? (n(), h(f, {
    key: 0,
    trigger: "click",
    "popper-class": "sd-unit-switcher__popper",
    onVisibleChange: e.handleVisibleChange,
    onCommand: e.handleCommand
  }, {
    dropdown: r(() => [
      d(m, { class: "sd-unit-switcher__menu" }, {
        default: r(() => [
          C("div", {
            class: "sd-unit-switcher__search",
            onClick: t[1] || (t[1] = U(() => {
            }, ["stop"]))
          }, [
            d(s, {
              modelValue: e.keyword,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.keyword = c),
              size: "small",
              placeholder: "Search...",
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          e.loading ? (n(), h(u, {
            key: 0,
            disabled: ""
          }, {
            default: r(() => [...t[4] || (t[4] = [
              D("Loading...", -1)
            ])]),
            _: 1
          })) : (n(), v(L, { key: 1 }, [
            e.roomEnable && e.filteredUnits.length > 0 ? (n(), v("div", Kg, "Units")) : b("", !0),
            e.filteredUnits.length === 0 && e.filteredRooms.length === 0 ? (n(), h(u, {
              key: 1,
              disabled: ""
            }, {
              default: r(() => [...t[5] || (t[5] = [
                D("No results found", -1)
              ])]),
              _: 1
            })) : b("", !0),
            (n(!0), v(L, null, G(e.filteredUnits, (c) => (n(), h(u, {
              key: c._id,
              command: { kind: "unit", data: c },
              disabled: e.switching || c.unit_code === e.currentCode
            }, {
              default: r(() => [
                C("span", {
                  class: x(["sd-unit-switcher__item", { "is-current": c.unit_code === e.currentCode }])
                }, [
                  C("span", xg, M(c.unit_code), 1),
                  C("span", null, M(c.unit_name), 1)
                ], 2)
              ]),
              _: 2
            }, 1032, ["command", "disabled"]))), 128)),
            e.roomEnable && e.filteredRooms.length > 0 ? (n(), v(L, { key: 2 }, [
              t[6] || (t[6] = C("div", { class: "sd-unit-switcher__section" }, "Rooms", -1)),
              (n(!0), v(L, null, G(e.filteredRooms, (c) => (n(), h(u, {
                key: c._id,
                command: { kind: "room", data: c },
                disabled: e.switching || c._id === e.currentRoomId
              }, {
                default: r(() => [
                  C("span", {
                    class: x(["sd-unit-switcher__item", { "is-current": c._id === e.currentRoomId }])
                  }, [
                    C("span", Gg, M(c.code), 1),
                    C("span", null, M(c.name), 1),
                    c.unit ? (n(), v("span", Yg, M(c.unit.label), 1)) : b("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["command", "disabled"]))), 128))
            ], 64)) : b("", !0)
          ], 64))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      C("span", {
        class: "sd-unit-switcher__label",
        title: e.displayLabel
      }, [
        C("span", qg, M(e.currentName), 1),
        e.roomEnable && e.currentRoomName ? (n(), v(L, { key: 0 }, [
          t[2] || (t[2] = C("span", { class: "sd-unit-switcher__sep" }, "/", -1)),
          C("span", Wg, M(e.currentRoomName), 1)
        ], 64)) : b("", !0),
        t[3] || (t[3] = C("span", { class: "sd-unit-switcher__caret" }, null, -1))
      ], 8, Hg)
    ]),
    _: 1
  }, 8, ["onVisibleChange", "onCommand"])) : b("", !0);
}
const m_ = /* @__PURE__ */ j(zg, [["render", Jg], ["__scopeId", "data-v-c7742a41"]]);
function Ea(e) {
  const t = e.secure ? "wss" : "ws", a = e.token ? `?token=${encodeURIComponent(e.token)}` : "";
  return `${t}://${e.host}:${e.port}/${a}`;
}
const To = {
  kind: "card",
  label: "Smart card reader",
  defaultPort: 8765,
  supportsRequest: !1,
  commands: [],
  buildUrl: Ea,
  encode() {
    throw new Error("The card agent is receive-only and does not accept commands");
  },
  decode(e) {
    return {
      event: String(e?.event || "message"),
      ok: e?.ok !== !1,
      data: e?.data,
      error: e?.error ? { code: "agent-error", message: String(e.error) } : void 0,
      raw: e
    };
  },
  samples: {
    vanilla: (e) => `// Vanilla JS - listen for card events
const ws = new WebSocket("${Ea(e)}")
ws.onmessage = (e) => {
  const m = JSON.parse(e.data)
  switch (m.event) {
    case "card-read":
      if (m.ok) console.log("card:", m.data)
      else console.warn("read failed:", m.error)
      break
    case "card-removed": console.log("card removed"); break
    case "reader-disconnected": console.warn("reader lost"); break
  }
}`,
    sdform: (e, t) => `// onCreated of the "${t}" field - fill the form when a card is read
const agent = this.getFieldRef('${t}').getFieldEditor()

agent.on('card-read', (data) => {
  this.getFormRef().setFieldsValue({
    cid: data.cid,
    first_name: data.firstNameTH,
    last_name: data.lastNameTH,
    birth_date: data.birthDate,
  })
})`
  }
}, Po = {
  kind: "printer",
  label: "Printer",
  defaultPort: 8766,
  supportsRequest: !0,
  commands: ["print", "printers", "job-status", "self-test", "ping"],
  pingCommand: "ping",
  buildUrl: Ea,
  encode(e, t, a, l) {
    return { id: l, cmd: e, token: a.token, data: t };
  },
  decode(e) {
    return {
      requestId: typeof e?.id == "string" ? e.id : void 0,
      event: String(e?.event || "message"),
      ok: e?.ok !== !1,
      data: e?.data,
      error: e?.error ? { code: String(e.error.code || "error"), message: String(e.error.message || "") } : void 0,
      raw: e
    };
  },
  samples: {
    vanilla: (e) => `// Vanilla JS - send a print job (token is required on every message)
const ws = new WebSocket("${Ea(e)}")
ws.onopen = () => {
  ws.send(JSON.stringify({
    id: crypto.randomUUID(),
    cmd: "print",
    token: "${e.token || "<token>"}",
    data: { format: "pdf", data: base64Pdf, printer: "label" },
  }))
}
ws.onmessage = (e) => console.log(JSON.parse(e.data))`,
    sdform: (e, t) => `// onClick of a button - render a report and print it silently
const agent = this.getFieldRef('${t}').getFieldEditor()

await agent.printReport('<reportId>', {
  printer: 'label',
  params: { order_id: this.getFormRef().getFormData().order_id },
})`
  }
}, Oi = {
  [To.kind]: To,
  [Po.kind]: Po
};
function aa(e) {
  return Oi[e] || null;
}
function h_() {
  return Object.values(Oi);
}
const Li = "sd_local_agents", Xg = 1;
function Cl() {
  let e = null;
  try {
    e = localStorage.getItem(Li);
  } catch {
    return [];
  }
  if (!e) return [];
  try {
    const t = JSON.parse(e);
    return (Array.isArray(t?.agents) ? t.agents : []).map(ey).filter((l) => !!l);
  } catch {
    return [];
  }
}
function Qg(e) {
  return Cl().find((t) => t.name === e) || null;
}
function Bi(e) {
  try {
    localStorage.setItem(Li, JSON.stringify({ version: Xg, agents: e }));
  } catch {
  }
}
function Zg(e) {
  Bi(Cl().filter((t) => t.name !== e));
}
function Ni(e, t) {
  const a = t ?? Qg(e.name);
  return a ? {
    ...e,
    host: a.host,
    port: a.port,
    token: a.token,
    secure: a.secure,
    enabled: e.enabled && a.enabled
    // ฟอร์มปิดอยู่ (hidden/disabled) → เครื่องเปิดเองไม่ได้
  } : { ...e };
}
function ey(e) {
  if (!e || typeof e.name != "string" || !e.name) return null;
  const t = Number(e.port);
  return {
    name: e.name,
    kind: typeof e.kind == "string" && e.kind ? e.kind : e.name,
    host: typeof e.host == "string" && e.host ? e.host : "127.0.0.1",
    port: Number.isInteger(t) && t > 0 && t < 65536 ? t : 8765,
    token: typeof e.token == "string" ? e.token : "",
    secure: !!e.secure,
    enabled: e.enabled !== !1
  };
}
const ty = 3e4, ay = 1e3, ly = 3e4;
class oy {
  cfg;
  adapter;
  ws = null;
  state = "idle";
  lastError = "";
  connectedAt = 0;
  pending = /* @__PURE__ */ new Map();
  attempts = 0;
  everConnected = !1;
  // เครื่องนี้เคยมี agent จริงไหม
  manualClose = !1;
  reconnectTimer;
  seq = 0;
  constructor(t, a) {
    this.cfg = t, this.adapter = a;
  }
  get url() {
    return this.adapter.buildUrl(this.cfg);
  }
  status() {
    return {
      name: this.cfg.name,
      kind: this.cfg.kind,
      state: this.state,
      url: this.url,
      enabled: this.cfg.enabled,
      lastError: this.lastError || void 0,
      connectedAt: this.connectedAt || void 0,
      pending: this.pending.size
    };
  }
  open(t, a) {
    if (!this.cfg.enabled || this.state === "open" || this.state === "connecting") return;
    this.manualClose = !1, this.clearReconnect(), this.state = "connecting", a(this.status());
    let l;
    try {
      l = new WebSocket(this.url);
    } catch (o) {
      this.state = "closed", this.lastError = o?.message || "invalid agent url", a(this.status());
      return;
    }
    this.ws = l, l.onopen = () => {
      this.state = "open", this.attempts = 0, this.everConnected = !0, this.lastError = "", this.connectedAt = Date.now(), a(this.status());
    }, l.onmessage = (o) => {
      let i;
      try {
        i = JSON.parse(o.data);
      } catch {
        return;
      }
      const s = this.adapter.decode(i);
      if (s.requestId && this.pending.has(s.requestId)) {
        const u = this.pending.get(s.requestId);
        this.pending.delete(s.requestId), clearTimeout(u.timer), s.ok ? u.resolve(s.data) : u.reject(Object.assign(new Error(s.error?.message || "agent error"), { code: s.error?.code || "error" }));
      }
      t(s, this.cfg.name);
    }, l.onerror = () => {
      this.lastError = "connection error";
    }, l.onclose = () => {
      this.state = "closed", this.ws = null, this.rejectAllPending("disconnected", "The agent connection was closed"), a(this.status()), this.scheduleReconnect(t, a);
    };
  }
  close() {
    this.manualClose = !0, this.clearReconnect(), this.rejectAllPending("disconnected", "The agent connection was closed");
    try {
      this.ws?.close();
    } catch {
    }
    this.ws = null, this.state = "idle";
  }
  /**
   * ส่งคำสั่งแล้วรอคำตอบ
   * ปฏิเสธทันทีเมื่อยังไม่ได้ต่อ — ดีกว่าปล่อยให้ฟอร์มค้างรอ timeout
   */
  send(t, a) {
    if (!this.adapter.supportsRequest)
      return Promise.reject(Object.assign(new Error(`Agent "${this.cfg.name}" is receive-only and does not accept commands`), { code: "receive-only" }));
    if (this.state !== "open" || !this.ws)
      return Promise.reject(Object.assign(new Error(`Agent "${this.cfg.name}" is not connected`), { code: "agent-offline" }));
    const l = `sd-${Date.now().toString(36)}-${(this.seq++).toString(36)}`, o = this.adapter.encode(t, a, this.cfg, l);
    return new Promise((i, s) => {
      const u = window.setTimeout(() => {
        this.pending.delete(l), s(Object.assign(new Error(`Command "${t}" timed out`), { code: "timeout" }));
      }, ty);
      this.pending.set(l, { resolve: i, reject: s, timer: u });
      try {
        this.ws.send(JSON.stringify(o));
      } catch (m) {
        this.pending.delete(l), clearTimeout(u), s(Object.assign(new Error(m?.message || "send failed"), { code: "send-failed" }));
      }
    });
  }
  rejectAllPending(t, a) {
    for (const [, l] of this.pending)
      clearTimeout(l.timer), l.reject(Object.assign(new Error(a), { code: t }));
    this.pending.clear();
  }
  /**
   * reconnect แบบ exponential backoff
   * กฎสำคัญที่ยกมาจาก SdSmartCard: **ไม่เคยต่อติดเลย = ไม่ retry**
   * เครื่องที่ไม่ได้ลง agent จะได้ไม่ยิงหา localhost วนไปเรื่อยๆ
   */
  scheduleReconnect(t, a) {
    if (this.manualClose || !this.cfg.enabled || !this.everConnected) return;
    this.clearReconnect();
    const l = Math.min(ay * 2 ** this.attempts, ly);
    this.attempts += 1, this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = void 0, this.open(t, a);
    }, l);
  }
  clearReconnect() {
    this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0);
  }
}
class iy {
  connections = /* @__PURE__ */ new Map();
  /** ค่าตั้งต้นจากฟอร์มของ agent ที่ยัง mount อยู่ — จอตั้งค่าใช้แสดง/รีเซ็ต */
  formCfgs = /* @__PURE__ */ new Map();
  /** จำนวน widget ที่ยังอ้าง agent ตัวนั้นอยู่ */
  refs = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  stateListeners = /* @__PURE__ */ new Set();
  /**
   * widget ประกาศ agent ของตัวเอง (ค่าจาก field options)
   * ค่าจริงที่ใช้ต่อ = ค่าฟอร์มผสมค่าของเครื่องนี้ (เครื่องชนะ) ดู resolveConfig
   */
  register(t) {
    t?.name && (this.formCfgs.set(t.name, { ...t }), this.refs.set(t.name, (this.refs.get(t.name) || 0) + 1), this.apply(t.name));
  }
  /** ค่าจากฟอร์มเปลี่ยน (แก้ property ใน builder) — อัปเดตโดยไม่เพิ่มจำนวนผู้ใช้ */
  update(t) {
    !t?.name || !this.formCfgs.has(t.name) || (this.formCfgs.set(t.name, { ...t }), this.apply(t.name));
  }
  /** widget ถูก unmount — ปิด connection เมื่อไม่มีใครใช้แล้ว (ไม่งั้นจะ reconnect ค้างทั้งที่ปิดฟอร์มไปแล้ว) */
  unregister(t) {
    const a = (this.refs.get(t) || 0) - 1;
    if (a > 0) {
      this.refs.set(t, a);
      return;
    }
    this.refs.delete(t), this.formCfgs.delete(t), this.connections.get(t)?.close(), this.connections.delete(t);
  }
  /** สร้าง/ปรับ connection ของ agent ตัวเดียวให้ตรงกับค่าล่าสุด */
  apply(t) {
    const a = this.formCfgs.get(t);
    if (!a) return;
    const l = aa(a.kind);
    if (!l) return;
    const o = Ni(a), i = this.connections.get(t);
    if (i) {
      if (JSON.stringify(i.cfg) === JSON.stringify(o)) {
        o.enabled && i.state === "idle" && this.connect(t);
        return;
      }
      i.close(), this.connections.delete(t);
    }
    const s = new oy(o, l);
    this.connections.set(t, s), o.enabled && this.connect(t);
  }
  /** ใช้หลังผู้ใช้กด Save ในจอตั้งค่า — agent ทุกตัวที่ mount อยู่ต้องรับค่าใหม่ */
  applyAll() {
    for (const t of this.formCfgs.keys()) this.apply(t);
  }
  /** ค่าตั้งต้นจากฟอร์มของ agent ที่ mount อยู่ตอนนี้ */
  formConfigs() {
    return [...this.formCfgs.values()].map((t) => ({ ...t }));
  }
  connect(t) {
    const a = this.connections.get(t);
    a && a.open(
      (l, o) => this.listeners.forEach((i) => i(l, o)),
      (l) => this.stateListeners.forEach((o) => o(l))
    );
  }
  reconnect(t) {
    const a = this.connections.get(t);
    a && (a.close(), a.cfg.enabled = !0, this.connect(t));
  }
  disconnect(t) {
    const a = this.connections.get(t);
    a && (a.close(), this.stateListeners.forEach((l) => l(a.status())));
  }
  send(t, a, l) {
    const o = this.connections.get(t);
    return o ? o.send(a, l) : Promise.reject(Object.assign(new Error(`Unknown agent "${t}"`), { code: "unknown-agent" }));
  }
  get(t) {
    return this.connections.get(t);
  }
  /** หา agent ตัวแรกที่เป็นชนิดนี้ — ให้ฟอร์มเรียก print() โดยไม่ต้องระบุชื่อ agent */
  findByKind(t) {
    for (const a of this.connections.values()) if (a.cfg.kind === t) return a;
  }
  statuses() {
    return [...this.connections.values()].map((t) => t.status());
  }
  onMessage(t) {
    return this.listeners.add(t), () => this.listeners.delete(t);
  }
  onStateChange(t) {
    return this.stateListeners.add(t), () => this.stateListeners.delete(t);
  }
}
const ce = new iy(), ji = {};
function ny(e) {
  const t = ji[e] ||= [], a = t.indexOf(!1);
  return a >= 0 ? (t[a] = !0, a) : (t.push(!0), t.length - 1);
}
function sy(e, t) {
  const a = ji[e];
  a && t >= 0 && t < a.length && (a[t] = !1);
}
const ry = B({
  name: "SdLocalAgentSettings",
  emits: ["update:modelValue", "save", "reset", "reconnect"],
  props: {
    modelValue: { type: Boolean, default: !1 },
    statuses: { type: Array, default: () => [] },
    fieldName: { type: String, default: "local_agent" },
    /** agent ของ widget ที่เปิด dialog — ใช้เลือกให้ตรงตัวในแท็บ Connection */
    focusAgent: { type: String, default: "" }
  },
  data() {
    return {
      activeTab: "status",
      draft: [],
      sampleAgent: "",
      sampleFlavor: "sdform",
      testing: ""
    };
  },
  computed: {
    currentAgent() {
      return this.draft.find((e) => e.name === this.sampleAgent) || this.draft[0];
    },
    sampleUrl() {
      const e = this.currentAgent;
      if (!e) return "";
      const t = aa(e.kind);
      return t ? t.buildUrl(e) : "";
    },
    sampleCode() {
      const e = this.currentAgent;
      if (!e) return "";
      const t = aa(e.kind);
      return t ? this.sampleFlavor === "vanilla" ? t.samples.vanilla(e) : t.samples.sdform(e, this.fieldName) : "";
    }
  },
  watch: {
    // เปิด dialog ทุกครั้ง = ประกอบค่าใหม่ (ฟอร์ม + ค่าเครื่อง) เผื่ออีกแท็บเพิ่งแก้ไว้
    modelValue(e) {
      if (!e) return;
      this.buildDraft();
      const t = this.draft.find((a) => a.name === this.focusAgent) || this.draft[0];
      t && (this.sampleAgent = t.name);
    }
  },
  methods: {
    /** ค่าที่โชว์ = ค่าตั้งต้นจากฟอร์มของ agent ที่วางอยู่ในจอนี้ ทับด้วยค่าที่เครื่องนี้เคยตั้งไว้ */
    buildDraft() {
      const e = Cl();
      this.draft = ce.formConfigs().map((t) => {
        const a = e.find((l) => l.name === t.name) || null;
        return { ...Ni(t, a), _source: a ? "machine" : "form" };
      });
    },
    adapterLabel(e) {
      return aa(e)?.label || e;
    },
    stateTagType(e) {
      if (!e.enabled) return "info";
      switch (e.state) {
        case "open":
          return "success";
        case "connecting":
          return "warning";
        case "closed":
          return "danger";
        default:
          return "info";
      }
    },
    /**
     * เก็บเป็น "ค่าของเครื่องนี้" เฉพาะตัวที่ต่างจากค่าฟอร์ม หรือเคยตั้งไว้แล้ว
     * ตัวที่ยังเหมือนฟอร์มเป๊ะไม่ต้องเก็บ — จะได้รับค่าใหม่ตามฟอร์มต่อไปเมื่อมีการแก้ฟอร์ม
     */
    handleSave() {
      const e = ce.formConfigs(), t = [];
      for (const a of this.draft) {
        const { _source: l, ...o } = a, i = e.find((u) => u.name === o.name), s = !!i && i.host === o.host && i.port === o.port && i.token === o.token && i.secure === o.secure && o.enabled;
        (l === "machine" || !s) && t.push({ ...o });
      }
      this.$emit("save", t), this.buildDraft(), O.success("Agent settings saved on this computer");
    },
    /** ถอยกลับไปใช้ค่าที่ตั้งไว้ในฟอร์ม (ลบค่าของเครื่องตัวนั้นทิ้ง) */
    resetAgent(e) {
      Zg(e), this.$emit("reset", e), this.buildDraft(), O.success(`"${e}" now follows the form settings`);
    },
    /** ทดสอบด้วยคำสั่งจริงถ้า agent รับคำสั่งได้ · agent แบบรับอย่างเดียวดูแค่ว่าต่อติดไหม */
    async testAgent(e) {
      const t = ce.get(e);
      if (t) {
        this.testing = e;
        try {
          t.adapter.supportsRequest && t.adapter.pingCommand ? (await ce.send(e, t.adapter.pingCommand, {}), O.success(`Agent "${e}" responded`)) : t.state === "open" ? O.success(`Agent "${e}" is connected`) : O.warning(`Agent "${e}" is not connected`);
        } catch (a) {
          O.error(`${e}: ${a?.message || "test failed"}`);
        } finally {
          this.testing = "";
        }
      }
    },
    async copy(e) {
      if (e)
        try {
          await navigator.clipboard.writeText(e), O.success("Copied");
        } catch {
          O.warning("Copy failed — select the text and copy manually");
        }
    }
  }
}), dy = {
  key: 0,
  class: "sd-agent-empty"
}, uy = { class: "sd-agent-row__main" }, py = { class: "sd-agent-row__name" }, my = { class: "sd-agent-row__kind" }, hy = { class: "sd-agent-row__url" }, fy = {
  key: 0,
  class: "sd-agent-row__err"
}, cy = {
  key: 0,
  class: "sd-agent-empty"
}, by = { class: "sd-agent-card__head" }, gy = { class: "sd-agent-card__title" }, yy = { class: "sd-agent-row__kind" }, vy = { class: "sd-agent-field" }, wy = { class: "sd-agent-field" }, Sy = { class: "sd-agent-field" }, _y = { class: "sd-agent-field sd-agent-field--inline" }, Fy = { class: "sd-agent-card__foot" }, ky = { class: "sd-agent-field" }, Cy = { class: "sd-agent-field" }, Dy = { class: "sd-agent-copyline" }, Iy = { class: "sd-agent-field" }, $y = { class: "sd-agent-code" };
function Ty(e, t, a, l, o, i) {
  const s = Ut, u = ie, m = Eo, f = Rt, c = Ct, _ = Ie, $ = jt, g = ia, I = It, F = Dt, p = jo, w = No, S = Ao, N = Ce;
  return n(), h(N, {
    "model-value": e.modelValue,
    title: "Local agents",
    width: "640px",
    "append-to-body": "",
    "destroy-on-close": "",
    class: "sd-agent-dialog",
    "onUpdate:modelValue": t[6] || (t[6] = (y) => e.$emit("update:modelValue", y))
  }, {
    footer: r(() => [
      d(u, {
        onClick: t[5] || (t[5] = (y) => e.$emit("update:modelValue", !1))
      }, {
        default: r(() => [...t[22] || (t[22] = [
          D("Close", -1)
        ])]),
        _: 1
      }),
      d(u, {
        type: "primary",
        onClick: e.handleSave
      }, {
        default: r(() => [...t[23] || (t[23] = [
          D("Save", -1)
        ])]),
        _: 1
      }, 8, ["onClick"])
    ]),
    default: r(() => [
      d(S, {
        modelValue: e.activeTab,
        "onUpdate:modelValue": t[4] || (t[4] = (y) => e.activeTab = y)
      }, {
        default: r(() => [
          d(m, {
            label: "Status",
            name: "status"
          }, {
            default: r(() => [
              e.statuses.length ? b("", !0) : (n(), v("div", dy, "No agent is configured on this machine.")),
              (n(!0), v(L, null, G(e.statuses, (y) => (n(), v("div", {
                key: y.name,
                class: "sd-agent-row"
              }, [
                C("span", {
                  class: x(["sd-agent-row__dot", `is-${y.enabled ? y.state : "off"}`])
                }, null, 2),
                C("div", uy, [
                  C("div", py, [
                    D(M(y.name) + " ", 1),
                    C("span", my, M(y.kind), 1)
                  ]),
                  C("div", hy, M(y.url), 1),
                  y.lastError ? (n(), v("div", fy, M(y.lastError), 1)) : b("", !0)
                ]),
                d(s, {
                  size: "small",
                  type: e.stateTagType(y),
                  effect: "plain",
                  "disable-transitions": ""
                }, {
                  default: r(() => [
                    D(M(y.enabled ? y.state : "disabled"), 1)
                  ]),
                  _: 2
                }, 1032, ["type"]),
                d(u, {
                  size: "small",
                  disabled: !y.enabled,
                  onClick: (T) => e.$emit("reconnect", y.name)
                }, {
                  default: r(() => [...t[7] || (t[7] = [
                    D("Reconnect", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "onClick"]),
                d(u, {
                  size: "small",
                  type: "primary",
                  plain: "",
                  loading: e.testing === y.name,
                  onClick: (T) => e.testAgent(y.name)
                }, {
                  default: r(() => [...t[8] || (t[8] = [
                    D("Test", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ]))), 128))
            ]),
            _: 1
          }),
          d(m, {
            label: "Settings",
            name: "settings"
          }, {
            default: r(() => [
              d(f, {
                type: "info",
                closable: !1,
                "show-icon": "",
                class: "sd-agent-note"
              }, {
                default: r(() => [...t[9] || (t[9] = [
                  D(" These settings are stored on this computer only — each workstation has its own printer and card reader. ", -1)
                ])]),
                _: 1
              }),
              e.draft.length ? b("", !0) : (n(), v("div", cy, "No agent field is active on this screen.")),
              (n(!0), v(L, null, G(e.draft, (y) => (n(), v("div", {
                key: y.name,
                class: "sd-agent-card"
              }, [
                C("div", by, [
                  C("span", gy, [
                    D(M(y.name) + " ", 1),
                    C("span", yy, M(e.adapterLabel(y.kind)), 1),
                    d(s, {
                      size: "small",
                      type: y._source === "machine" ? "warning" : "info",
                      effect: "plain",
                      "disable-transitions": "",
                      class: "sd-agent-src"
                    }, {
                      default: r(() => [
                        D(M(y._source === "machine" ? "This computer" : "From form"), 1)
                      ]),
                      _: 2
                    }, 1032, ["type"])
                  ]),
                  d(c, {
                    modelValue: y.enabled,
                    "onUpdate:modelValue": (T) => y.enabled = T,
                    "active-text": "Enabled"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                C("div", vy, [
                  t[10] || (t[10] = C("label", null, "Host", -1)),
                  d(_, {
                    modelValue: y.host,
                    "onUpdate:modelValue": (T) => y.host = T,
                    placeholder: "127.0.0.1"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                C("div", wy, [
                  t[11] || (t[11] = C("label", null, "Port (WebSocket)", -1)),
                  d($, {
                    modelValue: y.port,
                    "onUpdate:modelValue": (T) => y.port = T,
                    min: 1,
                    max: 65535,
                    "controls-position": "right",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                C("div", Sy, [
                  t[12] || (t[12] = C("label", null, "Token", -1)),
                  d(_, {
                    modelValue: y.token,
                    "onUpdate:modelValue": (T) => y.token = T,
                    placeholder: "Must match the token in the agent config",
                    "show-password": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                C("div", _y, [
                  d(g, {
                    modelValue: y.secure,
                    "onUpdate:modelValue": (T) => y.secure = T
                  }, {
                    default: r(() => [...t[13] || (t[13] = [
                      D("Use wss (TLS) — required when the agent runs with TLS", -1)
                    ])]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                C("div", Fy, [
                  d(u, {
                    size: "small",
                    disabled: y._source !== "machine",
                    onClick: (T) => e.resetAgent(y.name)
                  }, {
                    default: r(() => [...t[14] || (t[14] = [
                      D("Reset to form default", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ]))), 128))
            ]),
            _: 1
          }),
          d(m, {
            label: "Connection",
            name: "connection"
          }, {
            default: r(() => [
              C("div", ky, [
                t[15] || (t[15] = C("label", null, "Agent", -1)),
                d(F, {
                  modelValue: e.sampleAgent,
                  "onUpdate:modelValue": t[0] || (t[0] = (y) => e.sampleAgent = y),
                  class: "w-full"
                }, {
                  default: r(() => [
                    (n(!0), v(L, null, G(e.draft, (y) => (n(), h(I, {
                      key: y.name,
                      label: y.name,
                      value: y.name
                    }, null, 8, ["label", "value"]))), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              C("div", Cy, [
                t[17] || (t[17] = C("label", null, "WebSocket address", -1)),
                C("div", Dy, [
                  d(_, {
                    "model-value": e.sampleUrl,
                    readonly: ""
                  }, null, 8, ["model-value"]),
                  d(u, {
                    icon: "CopyDocument",
                    onClick: t[1] || (t[1] = (y) => e.copy(e.sampleUrl))
                  }, {
                    default: r(() => [...t[16] || (t[16] = [
                      D("Copy", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]),
              C("div", Iy, [
                t[20] || (t[20] = C("label", null, "Code sample", -1)),
                d(w, {
                  modelValue: e.sampleFlavor,
                  "onUpdate:modelValue": t[2] || (t[2] = (y) => e.sampleFlavor = y),
                  size: "small"
                }, {
                  default: r(() => [
                    d(p, { label: "sdform" }, {
                      default: r(() => [...t[18] || (t[18] = [
                        D("sdform", -1)
                      ])]),
                      _: 1
                    }),
                    d(p, { label: "vanilla" }, {
                      default: r(() => [...t[19] || (t[19] = [
                        D("Vanilla JS", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              C("div", $y, [
                d(u, {
                  class: "sd-agent-code__copy",
                  size: "small",
                  icon: "CopyDocument",
                  onClick: t[3] || (t[3] = (y) => e.copy(e.sampleCode))
                }, {
                  default: r(() => [...t[21] || (t[21] = [
                    D("Copy", -1)
                  ])]),
                  _: 1
                }),
                C("pre", null, M(e.sampleCode), 1)
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["model-value"]);
}
const Ui = /* @__PURE__ */ j(ry, [["render", Ty], ["__scopeId", "data-v-a2008b1e"]]), Py = B({
  name: "SdLocalAgent",
  components: { SdLocalAgentSettings: Ui },
  emits: [
    "agent-event",
    // (agentName, event, data, ok, error) — ทุก event ที่ agent ส่งมา
    "agent-connected",
    // (agentName)
    "agent-disconnected",
    // (agentName, lastError)
    "agent-error"
    // (agentName, error)
  ],
  props: {
    /** ชื่อที่ฟอร์มใช้เรียก agent ตัวนี้ เช่น 'printer' — ว่าง = ใช้ชื่อชนิดแทน */
    agentName: { type: String, default: "" },
    /** ชนิด agent → ตัวเลือก adapter ('card' | 'printer' | ...) */
    agentKind: { type: String, default: "card" },
    host: { type: String, default: "127.0.0.1" },
    /** 0 = ใช้ port มาตรฐานของ agent ชนิดนั้น */
    port: { type: Number, default: 0 },
    token: { type: String, default: "" },
    /** true = wss (จำเป็นเมื่อ agent เปิด TLS) */
    secure: { type: Boolean, default: !1 },
    /** ปิดการทำงานทั้งหมด (builder mode / field hidden) */
    disabled: { type: Boolean, default: !1 },
    /** ต่อ agent ทันทีที่ mount */
    autoConnect: { type: Boolean, default: !0 },
    /** none | dot | status | badge */
    indicator: { type: String, default: "dot" },
    indicatorPosition: { type: String, default: "bottom-right" },
    /** วินาทีก่อนซ่อน indicator (0 = แสดงตลอด) */
    indicatorTimeout: { type: Number, default: 0 },
    /** ชื่อ field — ใช้ในตัวอย่างโค้ดของจอตั้งค่า */
    fieldName: { type: String, default: "local_agent" },
    /**
     * ฟังก์ชันคืน SdReport instance สำหรับ printReport()
     * รับเป็น prop แทนการ import ตรง เพื่อไม่ให้ widget นี้ผูกกับ Report Factory
     */
    reportProvider: { type: Function, default: null }
  },
  data() {
    return {
      statuses: [],
      settingsVisible: !1,
      indicatorShown: !0,
      subs: [],
      offMessage: null,
      offState: null,
      hideTimer: void 0,
      /** ชื่อ agent ที่ลงทะเบียนไว้จริง — เก็บไว้เพื่อถอนทะเบียนตัวเดิมตอนผู้ใช้แก้ชื่อ */
      registeredName: "",
      indicatorSlot: -1,
      indicatorCorner: ""
    };
  },
  computed: {
    /** ชื่อที่ใช้อ้าง agent ตัวนี้ทั้งใน pool และในโค้ดของฟอร์ม */
    agentKey() {
      return this.agentName || this.agentKind || "agent";
    },
    /** ค่าตั้งต้นจากฟอร์ม — ค่าจริงที่ใช้ต่อคือค่านี้ผสมค่าของเครื่อง (ดู resolveConfig) */
    formConfig() {
      const e = aa(this.agentKind);
      return {
        name: this.agentKey,
        kind: this.agentKind,
        host: this.host || "127.0.0.1",
        port: this.port > 0 ? this.port : e?.defaultPort || 8765,
        token: this.token || "",
        secure: !!this.secure,
        enabled: !this.disabled && this.autoConnect
      };
    },
    /** สถานะของ agent ตัวนี้เท่านั้น (ตัวอื่นในจอเป็นเรื่องของ widget ตัวอื่น) */
    myStatus() {
      return this.statuses.find((e) => e.name === this.agentKey);
    },
    agentState() {
      if (this.disabled) return "disabled";
      const e = this.myStatus;
      return !e || !e.enabled ? "disabled" : e.state === "open" ? "ready" : e.state === "connecting" ? "connecting" : "offline";
    },
    indicatorLabel() {
      return this.indicator === "badge" ? `${this.agentKey}: ${this.stateWord}` : this.stateWord;
    },
    stateWord() {
      switch (this.agentState) {
        case "ready":
          return "Ready";
        case "connecting":
          return "Connecting";
        case "disabled":
          return "Disabled";
        default:
          return "Offline";
      }
    },
    indicatorTitle() {
      const e = this.myStatus, t = e?.url ? `
${e.url}` : "", a = e?.lastError ? `
${e.lastError}` : "";
      return `${this.agentKey} — ${this.stateWord}${t}${a}
(click to configure)`;
    },
    /** เลื่อน indicator ลง/ขึ้นตามช่องที่จองได้ เพื่อไม่ให้ widget หลายตัวทับกันที่มุมเดียว */
    indicatorStyle() {
      if (this.indicatorSlot <= 0) return {};
      const e = `${16 + this.indicatorSlot * 34}px`;
      return this.indicatorPosition.startsWith("top") ? { top: e } : { bottom: e };
    }
  },
  watch: {
    disabled(e) {
      e ? this.teardown() : this.setup();
    },
    /** ผู้ออกแบบฟอร์มแก้ host/port/token/ชื่อ ใน builder → ต่อใหม่ด้วยค่าใหม่ทันที */
    formConfig: {
      deep: !0,
      handler() {
        this.disabled || this.registerAgent();
      }
    }
  },
  mounted() {
    this.disabled || this.setup();
  },
  beforeUnmount() {
    this.teardown();
  },
  methods: {
    // ── lifecycle ────────────────────────────────────────────
    setup() {
      this.offMessage = ce.onMessage(this.handleAgentMessage), this.offState = ce.onStateChange(this.handleStateChange), this.registerAgent(), this.claimSlot(), this.refreshStatuses(), this.pokeIndicator();
    },
    registerAgent() {
      this.registeredName && this.registeredName !== this.agentKey && (ce.unregister(this.registeredName), this.registeredName = ""), this.registeredName === this.agentKey ? ce.update(this.formConfig) : (ce.register(this.formConfig), this.registeredName = this.agentKey), this.refreshStatuses();
    },
    teardown() {
      this.offMessage?.(), this.offState?.(), this.offMessage = null, this.offState = null, this.hideTimer && clearTimeout(this.hideTimer), this.releaseSlot(), this.registeredName && (ce.unregister(this.registeredName), this.registeredName = "");
    },
    refreshStatuses() {
      this.statuses = ce.statuses();
    },
    // ── รับ event จาก agent ──────────────────────────────────
    handleAgentMessage(e, t) {
      if (t === this.agentKey) {
        this.$emit("agent-event", t, e.event, e.data, e.ok, e.error), !e.ok && e.error && this.$emit("agent-error", t, e.error);
        for (const a of this.subs) {
          const l = a.agent === "*" || a.agent === t, o = a.event === "*" || a.event === e.event;
          if (!(!l || !o))
            try {
              a.handler(e.data, e);
            } catch (i) {
              console.error("[SdLocalAgent] listener error", i);
            }
        }
      }
    },
    handleStateChange(e) {
      this.refreshStatuses(), e.name === this.agentKey && (this.pokeIndicator(), e.state === "open" ? this.$emit("agent-connected", e.name) : e.state === "closed" && this.$emit("agent-disconnected", e.name, e.lastError));
    },
    // ── API สาธารณะ: ให้ฟอร์มเรียกผ่าน getFieldEditor() ──────
    /**
     * ส่งคำสั่งไป agent ของ widget นี้ แล้วรอผล
     * @example await agent.send('print', { format:'pdf', data:b64 })
     * @example await agent.send('printer', 'print', {...})   // ระบุชื่อ agent ตัวอื่นในจอก็ได้
     */
    send(e, t, a) {
      const l = typeof t == "string", o = l ? e : this.agentKey, i = l ? t : e, s = l ? a ?? {} : t ?? {};
      return ce.send(o, i, s);
    },
    /** ส่งไป agent ตัวอื่นในจอแบบระบุชื่อชัดๆ */
    sendTo(e, t, a = {}) {
      return ce.send(e, t, a);
    },
    /**
     * สั่งพิมพ์ PDF (base64) — ใช้ agent ของ widget นี้ถ้าเป็นเครื่องพิมพ์
     * @example await agent.print(pdfBase64, { printer: 'label' })
     */
    print(e, t = {}) {
      const a = t.agent || (this.agentKind === "printer" ? this.agentKey : this.firstAgentOfKind("printer"));
      return a ? this.sendTo(a, "print", {
        format: t.format || "pdf",
        data: e,
        printer: t.printer,
        copies: t.copies,
        jobKey: t.jobKey,
        options: t.options
      }) : Promise.reject(new Error("No printer agent is configured on this machine"));
    },
    /**
     * render รายงานจาก Report Factory แล้วสั่งพิมพ์ในขั้นตอนเดียว
     * @example await agent.printReport(reportId, { printer:'label', params:{ id } })
     */
    async printReport(e, t = {}) {
      const a = this.reportProvider ? this.reportProvider() : null;
      if (!a || typeof a.createReportSilent != "function")
        throw new Error("Report rendering is not available for this field");
      const l = await a.createReportSilent(e, { params: t.params || {} });
      if (!l) throw new Error("The report produced no output");
      return this.print(l, t);
    },
    /**
     * ฟัง event จาก agent ของ widget นี้ — คืนฟังก์ชันไว้ยกเลิก
     * @example const off = agent.on('card-read', d => this.setValue(d.cid))
     * @example const off = agent.on('card', 'card-read', d => {...})   // ระบุ agent ตัวอื่น
     */
    on(e, t, a) {
      const l = typeof t == "function", o = {
        agent: l ? this.agentKey : e || "*",
        event: (l ? e : t) || "*",
        handler: l ? t : a
      };
      return this.subs.push(o), () => {
        const i = this.subs.indexOf(o);
        i >= 0 && this.subs.splice(i, 1);
      };
    },
    off(e) {
      this.subs = this.subs.filter((t) => t.handler !== e);
    },
    /** สถานะ agent ทุกตัวในแท็บแบบย่อ: { card:'open', printer:'closed' } */
    status() {
      const e = {};
      for (const t of ce.statuses()) e[t.name] = t.enabled ? t.state : "disabled";
      return e;
    },
    /** สถานะของ agent ตัวนี้: idle | connecting | open | closed */
    state() {
      return this.myStatus?.state || "idle";
    },
    isReady(e) {
      return ce.get(e || this.agentKey)?.state === "open";
    },
    listAgents() {
      return ce.statuses();
    },
    /** ค่าที่ใช้ต่อจริง (ฟอร์มผสมค่าของเครื่อง) — ไว้ debug ว่าทำไมต่อไม่ติด */
    config() {
      return ce.get(this.agentKey)?.cfg || null;
    },
    connect() {
      ce.reconnect(this.agentKey), this.refreshStatuses();
    },
    reconnect(e) {
      ce.reconnect(e || this.agentKey), this.refreshStatuses();
    },
    disconnect(e) {
      ce.disconnect(e || this.agentKey), this.refreshStatuses();
    },
    openSettings() {
      this.settingsVisible = !0;
    },
    // ── ภายใน ────────────────────────────────────────────────
    firstAgentOfKind(e) {
      return ce.findByKind(e)?.cfg.name || "";
    },
    /** ผู้ใช้กด Save ในจอตั้งค่า → เก็บเป็นค่าของเครื่องนี้ แล้วต่อใหม่ด้วยค่าที่รวมแล้ว */
    handleSettingsSave(e) {
      Bi(e), ce.applyAll(), this.refreshStatuses(), this.pokeIndicator();
    },
    /** กด Reset ในจอตั้งค่า → ลบค่าของเครื่อง กลับไปใช้ค่าจากฟอร์ม */
    handleSettingsReset() {
      ce.applyAll(), this.refreshStatuses(), this.pokeIndicator();
    },
    claimSlot() {
      this.indicator === "none" || this.indicatorSlot >= 0 || (this.indicatorCorner = this.indicatorPosition, this.indicatorSlot = ny(this.indicatorCorner));
    },
    releaseSlot() {
      this.indicatorSlot < 0 || (sy(this.indicatorCorner, this.indicatorSlot), this.indicatorSlot = -1);
    },
    /** โชว์ indicator แล้วซ่อนตาม timeout (0 = ค้างไว้) */
    pokeIndicator() {
      this.indicatorShown = !0, this.hideTimer && clearTimeout(this.hideTimer), this.indicatorTimeout > 0 && (this.hideTimer = window.setTimeout(() => {
        this.indicatorShown = !1;
      }, this.indicatorTimeout * 1e3));
    }
  }
}), My = { class: "sd-local-agent" }, Vy = ["title"], Ay = {
  key: 0,
  class: "sd-agent-indicator__label"
};
function Ey(e, t, a, l, o, i) {
  const s = Ui;
  return n(), v("span", My, [
    e.indicator !== "none" ? (n(), h(Na, {
      key: 0,
      to: "body"
    }, [
      d(ja, { name: "sd-agent-fade" }, {
        default: r(() => [
          e.indicatorShown ? (n(), v("div", {
            key: 0,
            class: x(["sd-agent-indicator", [`is-${e.agentState}`, `pos-${e.indicatorPosition}`]]),
            style: te(e.indicatorStyle),
            title: e.indicatorTitle,
            onClick: t[0] || (t[0] = (...u) => e.openSettings && e.openSettings(...u))
          }, [
            t[2] || (t[2] = C("span", { class: "sd-agent-indicator__dot" }, null, -1)),
            e.indicator !== "dot" ? (n(), v("span", Ay, M(e.indicatorLabel), 1)) : b("", !0)
          ], 14, Vy)) : b("", !0)
        ]),
        _: 1
      })
    ])) : b("", !0),
    d(s, {
      modelValue: e.settingsVisible,
      "onUpdate:modelValue": t[1] || (t[1] = (u) => e.settingsVisible = u),
      statuses: e.statuses,
      "field-name": e.fieldName,
      "focus-agent": e.agentKey,
      onSave: e.handleSettingsSave,
      onReset: e.handleSettingsReset,
      onReconnect: e.reconnect
    }, null, 8, ["modelValue", "statuses", "field-name", "focus-agent", "onSave", "onReset", "onReconnect"])
  ]);
}
const f_ = /* @__PURE__ */ j(Py, [["render", Ey], ["__scopeId", "data-v-a3b553c9"]]);
export {
  oh as $,
  xa as A,
  ZS as B,
  u_ as C,
  BS as D,
  e_ as E,
  t_ as F,
  r_ as G,
  Ai as H,
  d_ as I,
  a_ as J,
  tf as K,
  l_ as L,
  o_ as M,
  m_ as N,
  nm as O,
  ba as P,
  et as Q,
  we as R,
  HS as S,
  US as T,
  _l as U,
  Ne as V,
  nh as W,
  Xe as X,
  Ja as Y,
  NS as Z,
  Xa as _,
  WS as a,
  Ci as a0,
  jS as a1,
  Pe as a2,
  lh as a3,
  RS as a4,
  Ee as a5,
  Ga as a6,
  ko as a7,
  oa as a8,
  Ya as a9,
  DS as aA,
  ke as aB,
  le as aC,
  f_ as aD,
  h_ as aE,
  aa as aF,
  pu as aG,
  yS as aH,
  LS as aI,
  OS as aJ,
  $S as aK,
  IS as aL,
  Et as aM,
  CS as aN,
  kS as aO,
  me as aP,
  Dc as aQ,
  kl as aR,
  vt as aa,
  lt as ab,
  Lt as ac,
  ih as ad,
  Di as ae,
  j as af,
  Rr as ag,
  Me as ah,
  P as ai,
  vS as aj,
  Wt as ak,
  _S as al,
  SS as am,
  pe as an,
  rl as ao,
  VS as ap,
  MS as aq,
  zr as ar,
  AS as as,
  PS as at,
  TS as au,
  wl as av,
  FS as aw,
  vl as ax,
  wS as ay,
  Sl as az,
  zS as b,
  i_ as c,
  qS as d,
  ai as e,
  ES as f,
  Fl as g,
  ac as h,
  nc as i,
  uc as j,
  KS as k,
  _c as l,
  p_ as m,
  xS as n,
  n_ as o,
  s_ as p,
  GS as q,
  YS as r,
  Bc as s,
  JS as t,
  Ii as u,
  $i as v,
  Wf as w,
  XS as x,
  QS as y,
  xt as z
};
