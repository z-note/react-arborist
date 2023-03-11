import {jsxs as $g00cZ$jsxs, jsx as $g00cZ$jsx, Fragment as $g00cZ$Fragment} from "react/jsx-runtime";
import $g00cZ$react, {forwardRef as $g00cZ$forwardRef, useRef as $g00cZ$useRef, useMemo as $g00cZ$useMemo, useImperativeHandle as $g00cZ$useImperativeHandle, useEffect as $g00cZ$useEffect, createContext as $g00cZ$createContext, useContext as $g00cZ$useContext, memo as $g00cZ$memo, useCallback as $g00cZ$useCallback, useState as $g00cZ$useState} from "react";
import {useSyncExternalStore as $g00cZ$useSyncExternalStore} from "use-sync-external-store/shim";
import {HTML5Backend as $g00cZ$HTML5Backend, getEmptyImage as $g00cZ$getEmptyImage} from "react-dnd-html5-backend";
import {DndProvider as $g00cZ$DndProvider, useDrag as $g00cZ$useDrag, useDrop as $g00cZ$useDrop, useDragLayer as $g00cZ$useDragLayer} from "react-dnd";
import {createStore as $g00cZ$createStore, combineReducers as $g00cZ$combineReducers} from "redux";
import {FixedSizeList as $g00cZ$FixedSizeList} from "react-window";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}






const $89e93131aae74bd9$export$feef243b04ff4151 = (0, $g00cZ$createContext)(null);
function $89e93131aae74bd9$export$367b0f2231a90ba0() {
    const value = (0, $g00cZ$useContext)($89e93131aae74bd9$export$feef243b04ff4151);
    if (value === null) throw new Error("No Tree Api Provided");
    return value;
}
const $89e93131aae74bd9$export$f6d467aa8b3786af = (0, $g00cZ$createContext)(null);
function $89e93131aae74bd9$export$fd23f19d5d8f3033() {
    const value = (0, $g00cZ$useContext)($89e93131aae74bd9$export$f6d467aa8b3786af);
    if (value === null) throw new Error("Provide a NodesContext");
    return value;
}
const $89e93131aae74bd9$export$2d5c5ceac203fc1e = (0, $g00cZ$createContext)(null);
function $89e93131aae74bd9$export$4930f6bf413be70e() {
    const value = (0, $g00cZ$useContext)($89e93131aae74bd9$export$2d5c5ceac203fc1e);
    if (value === null) throw new Error("Provide a DnDContext");
    return value;
}
const $89e93131aae74bd9$export$d0c71bc5e3e2d897 = (0, $g00cZ$createContext)(0);
function $89e93131aae74bd9$export$83a4f9dc3b36edb8() {
    (0, $g00cZ$useContext)($89e93131aae74bd9$export$d0c71bc5e3e2d897);
}


var $bfece7c4aed4e9c4$exports = {};

$parcel$export($bfece7c4aed4e9c4$exports, "TreeApi", () => $bfece7c4aed4e9c4$export$e2da3477247342d1);
var $0e6083160f4b36ed$exports = {};

$parcel$export($0e6083160f4b36ed$exports, "bound", () => $0e6083160f4b36ed$export$adf7c0fe6059d774);
$parcel$export($0e6083160f4b36ed$exports, "isItem", () => $0e6083160f4b36ed$export$5318634f2ee07019);
$parcel$export($0e6083160f4b36ed$exports, "isClosed", () => $0e6083160f4b36ed$export$4210f5ea57fbae57);
$parcel$export($0e6083160f4b36ed$exports, "isDecendent", () => $0e6083160f4b36ed$export$1e38f72c6c546f70);
$parcel$export($0e6083160f4b36ed$exports, "indexOf", () => $0e6083160f4b36ed$export$305f7d4e9d4624f2);
$parcel$export($0e6083160f4b36ed$exports, "noop", () => $0e6083160f4b36ed$export$8793edee2d425525);
$parcel$export($0e6083160f4b36ed$exports, "dfs", () => $0e6083160f4b36ed$export$51b654aff22fc5a6);
$parcel$export($0e6083160f4b36ed$exports, "walk", () => $0e6083160f4b36ed$export$588732934346abbf);
$parcel$export($0e6083160f4b36ed$exports, "focusNextElement", () => $0e6083160f4b36ed$export$3b0237e8566c8d65);
$parcel$export($0e6083160f4b36ed$exports, "focusPrevElement", () => $0e6083160f4b36ed$export$33b47db07a82b2fb);
$parcel$export($0e6083160f4b36ed$exports, "access", () => $0e6083160f4b36ed$export$9bb0e144ba4929ca);
$parcel$export($0e6083160f4b36ed$exports, "identifyNull", () => $0e6083160f4b36ed$export$611823266272db76);
$parcel$export($0e6083160f4b36ed$exports, "identify", () => $0e6083160f4b36ed$export$65e5b62a4c490288);
$parcel$export($0e6083160f4b36ed$exports, "mergeRefs", () => $0e6083160f4b36ed$export$c9058316764c140e);
$parcel$export($0e6083160f4b36ed$exports, "safeRun", () => $0e6083160f4b36ed$export$c6d63370cef03886);
$parcel$export($0e6083160f4b36ed$exports, "waitFor", () => $0e6083160f4b36ed$export$9bbfceb27f687c1b);
$parcel$export($0e6083160f4b36ed$exports, "getInsertIndex", () => $0e6083160f4b36ed$export$e12bf2314d0bc2a9);
$parcel$export($0e6083160f4b36ed$exports, "getInsertParentId", () => $0e6083160f4b36ed$export$58fe32731f07ed56);
function $0e6083160f4b36ed$export$adf7c0fe6059d774(n, min, max) {
    return Math.max(Math.min(n, max), min);
}
function $0e6083160f4b36ed$export$5318634f2ee07019(node) {
    return node && node.isLeaf;
}
function $0e6083160f4b36ed$export$4210f5ea57fbae57(node) {
    return node && node.isInternal && !node.isOpen;
}
const $0e6083160f4b36ed$export$1e38f72c6c546f70 = (a, b)=>{
    let n = a;
    while(n){
        if (n.id === b.id) return true;
        n = n.parent;
    }
    return false;
};
const $0e6083160f4b36ed$export$305f7d4e9d4624f2 = (node)=>{
    if (!node.parent) throw Error("Node does not have a parent");
    return node.parent.children.findIndex((c)=>c.id === node.id);
};
function $0e6083160f4b36ed$export$8793edee2d425525() {}
function $0e6083160f4b36ed$export$51b654aff22fc5a6(node, id) {
    if (!node) return null;
    if (node.id === id) return node;
    if (node.children) for (let child of node.children){
        const result = $0e6083160f4b36ed$export$51b654aff22fc5a6(child, id);
        if (result) return result;
    }
    return null;
}
function $0e6083160f4b36ed$export$588732934346abbf(node, fn) {
    fn(node);
    if (node.children) for (let child of node.children)$0e6083160f4b36ed$export$588732934346abbf(child, fn);
}
function $0e6083160f4b36ed$export$3b0237e8566c8d65(target) {
    const elements = $0e6083160f4b36ed$var$getFocusable(target);
    let next;
    for(let i = 0; i < elements.length; ++i){
        const item = elements[i];
        if (item === target) {
            next = $0e6083160f4b36ed$var$nextItem(elements, i);
            break;
        }
    }
    // @ts-ignore ??
    next?.focus();
}
function $0e6083160f4b36ed$export$33b47db07a82b2fb(target) {
    const elements = $0e6083160f4b36ed$var$getFocusable(target);
    let next;
    for(let i = 0; i < elements.length; ++i){
        const item = elements[i];
        if (item === target) {
            next = $0e6083160f4b36ed$var$prevItem(elements, i);
            break;
        }
    }
    // @ts-ignore
    next?.focus();
}
function $0e6083160f4b36ed$var$nextItem(list, index) {
    if (index + 1 < list.length) return list[index + 1];
    else return list[0];
}
function $0e6083160f4b36ed$var$prevItem(list, index) {
    if (index - 1 >= 0) return list[index - 1];
    else return list[list.length - 1];
}
function $0e6083160f4b36ed$var$getFocusable(target) {
    return Array.from(document.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)')).filter((e)=>e === target || !target.contains(e));
}
function $0e6083160f4b36ed$export$9bb0e144ba4929ca(obj, accessor) {
    if (typeof accessor === "boolean") return accessor;
    if (typeof accessor === "string") return obj[accessor];
    return accessor(obj);
}
function $0e6083160f4b36ed$export$611823266272db76(obj) {
    if (obj === null) return null;
    else return $0e6083160f4b36ed$export$65e5b62a4c490288(obj);
}
function $0e6083160f4b36ed$export$65e5b62a4c490288(obj) {
    return typeof obj === "string" ? obj : obj.id;
}
function $0e6083160f4b36ed$export$c9058316764c140e(...refs) {
    return (instance)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") ref(instance);
            else if (ref != null) ref.current = instance;
        });
    };
}
function $0e6083160f4b36ed$export$c6d63370cef03886(fn, ...args) {
    if (fn) return fn(...args);
}
function $0e6083160f4b36ed$export$9bbfceb27f687c1b(fn) {
    return new Promise((resolve, reject)=>{
        let tries = 0;
        function check() {
            tries += 1;
            if (tries === 100) reject();
            if (fn()) resolve();
            else setTimeout(check, 10);
        }
        check();
    });
}
function $0e6083160f4b36ed$export$e12bf2314d0bc2a9(tree) {
    const focus = tree.focusedNode;
    if (!focus) return tree.root.children?.length ?? 0;
    if (focus.isOpen) return 0;
    if (focus.parent) return focus.childIndex + 1;
    return 0;
}
function $0e6083160f4b36ed$export$58fe32731f07ed56(tree) {
    const focus = tree.focusedNode;
    if (!focus) return null;
    if (focus.isOpen) return focus.id;
    if (focus.parent && !focus.parent.isRoot) return focus.parent.id;
    return null;
}




const $fb4c15d8425379bd$var$placeholderStyle = {
    display: "flex",
    alignItems: "center",
    zIndex: 1
};
const $fb4c15d8425379bd$var$lineStyle = {
    flex: 1,
    height: "2px",
    background: "#4B91E2",
    borderRadius: "1px"
};
const $fb4c15d8425379bd$var$circleStyle = {
    width: "4px",
    height: "4px",
    boxShadow: "0 0 0 3px #4B91E2",
    borderRadius: "50%"
};
const $fb4c15d8425379bd$export$6cb3c16721363d11 = /*#__PURE__*/ (0, $g00cZ$react).memo(function DefaultCursor({ top: top , left: left , indent: indent  }) {
    const style = {
        position: "absolute",
        pointerEvents: "none",
        top: top - 2 + "px",
        left: left + "px",
        right: indent + "px"
    };
    return /*#__PURE__*/ (0, $g00cZ$jsxs)("div", {
        style: {
            ...$fb4c15d8425379bd$var$placeholderStyle,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
                style: {
                    ...$fb4c15d8425379bd$var$circleStyle
                }
            }),
            /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
                style: {
                    ...$fb4c15d8425379bd$var$lineStyle
                }
            })
        ]
    });
});




function $164e874d21fcd87e$export$f9c541e71856c524({ node: node , attrs: attrs , innerRef: innerRef , children: children  }) {
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        ...attrs,
        ref: innerRef,
        onFocus: (e)=>e.stopPropagation(),
        onClick: node.handleClick,
        children: children
    });
}




function $c4edd692d5290432$export$909e23cbfbbd3351(props) {
    return /*#__PURE__*/ (0, $g00cZ$jsxs)("div", {
        ref: props.dragHandle,
        style: props.style,
        children: [
            /*#__PURE__*/ (0, $g00cZ$jsx)("span", {
                onClick: (e)=>{
                    e.stopPropagation();
                    props.node.toggle();
                },
                children: props.node.isLeaf ? "\uD83C\uDF33" : props.node.isOpen ? "\uD83D\uDDC1" : "\uD83D\uDDC0"
            }),
            " ",
            props.node.isEditing ? /*#__PURE__*/ (0, $g00cZ$jsx)($c4edd692d5290432$var$Edit, {
                ...props
            }) : /*#__PURE__*/ (0, $g00cZ$jsx)($c4edd692d5290432$var$Show, {
                ...props
            })
        ]
    });
}
function $c4edd692d5290432$var$Show(props) {
    return /*#__PURE__*/ (0, $g00cZ$jsx)((0, $g00cZ$Fragment), {
        children: /*#__PURE__*/ (0, $g00cZ$jsx)("span", {
            children: props.node.data.name
        })
    });
}
function $c4edd692d5290432$var$Edit({ node: node  }) {
    const input = (0, $g00cZ$useRef)();
    (0, $g00cZ$useEffect)(()=>{
        input.current?.focus();
        input.current?.select();
    }, []);
    return /*#__PURE__*/ (0, $g00cZ$jsx)("input", {
        ref: input,
        // @ts-ignore
        defaultValue: node.data.name,
        onBlur: ()=>node.reset(),
        onKeyDown: (e)=>{
            if (e.key === "Escape") node.reset();
            if (e.key === "Enter") node.submit(input.current?.value || "");
        }
    });
}


function $21783d2b0251be67$export$e1a8e267487c59d1(id) {
    return {
        type: "EDIT",
        id: id
    };
}
function $21783d2b0251be67$export$1650419e431d3ba3(state = {
    id: null
}, action) {
    if (action.type === "EDIT") return {
        ...state,
        id: action.id
    };
    else return state;
}


function $c27b8e9863235052$export$d7ddd398f22d79ef(id) {
    return {
        type: "FOCUS",
        id: id
    };
}
function $c27b8e9863235052$export$6b6c976e46a06288() {
    return {
        type: "TREE_BLUR"
    };
}
function $c27b8e9863235052$export$1650419e431d3ba3(state = {
    id: null,
    treeFocused: false
}, action) {
    if (action.type === "FOCUS") return {
        ...state,
        id: action.id,
        treeFocused: true
    };
    else if (action.type === "TREE_BLUR") return {
        ...state,
        treeFocused: false
    };
    else return state;
}


var $096e74084443e9a3$exports = {};

$parcel$export($096e74084443e9a3$exports, "NodeApi", () => $096e74084443e9a3$export$d4b903da0f522dc8);

class $096e74084443e9a3$export$d4b903da0f522dc8 {
    constructor(params){
        this.tree = params.tree;
        this.id = params.id;
        this.data = params.data;
        this.level = params.level;
        this.children = params.children;
        this.parent = params.parent;
        this.isDraggable = params.isDraggable;
        this.rowIndex = params.rowIndex;
    }
    get isRoot() {
        return this.id === (0, $81080a351c006222$export$ec71a3379b43ae5c);
    }
    get isLeaf() {
        return !Array.isArray(this.children);
    }
    get isInternal() {
        return !this.isLeaf;
    }
    get isOpen() {
        return this.isLeaf ? false : this.tree.isOpen(this.id);
    }
    get isClosed() {
        return this.isLeaf ? false : !this.tree.isOpen(this.id);
    }
    get isEditable() {
        return this.tree.isEditable(this.data);
    }
    get isEditing() {
        return this.tree.editingId === this.id;
    }
    get isSelected() {
        return this.tree.isSelected(this.id);
    }
    get isOnlySelection() {
        return this.isSelected && this.tree.hasOneSelection;
    }
    get isSelectedStart() {
        return this.isSelected && !this.prev?.isSelected;
    }
    get isSelectedEnd() {
        return this.isSelected && !this.next?.isSelected;
    }
    get isFocused() {
        return this.tree.isFocused(this.id);
    }
    get isDragging() {
        return this.tree.isDragging(this.id);
    }
    get willReceiveDrop() {
        return this.tree.willReceiveDrop(this.id);
    }
    get state() {
        return {
            isClosed: this.isClosed,
            isDragging: this.isDragging,
            isEditing: this.isEditing,
            isFocused: this.isFocused,
            isInternal: this.isInternal,
            isLeaf: this.isLeaf,
            isOpen: this.isOpen,
            isSelected: this.isSelected,
            isSelectedEnd: this.isSelectedEnd,
            isSelectedStart: this.isSelectedStart,
            willReceiveDrop: this.willReceiveDrop
        };
    }
    get childIndex() {
        if (this.parent && this.parent.children) return this.parent.children.findIndex((child)=>child.id === this.id);
        else return -1;
    }
    get next() {
        if (this.rowIndex === null) return null;
        return this.tree.at(this.rowIndex + 1);
    }
    get prev() {
        if (this.rowIndex === null) return null;
        return this.tree.at(this.rowIndex - 1);
    }
    get nextSibling() {
        const i = this.childIndex;
        return this.parent?.children[i + 1] ?? null;
    }
    select() {
        this.tree.select(this);
    }
    deselect() {
        this.tree.deselect(this);
    }
    selectMulti() {
        this.tree.selectMulti(this);
    }
    selectContiguous() {
        this.tree.selectContiguous(this);
    }
    activate() {
        this.tree.activate(this);
    }
    focus() {
        this.tree.focus(this);
    }
    toggle() {
        this.tree.toggle(this);
    }
    open() {
        this.tree.open(this);
    }
    openParents() {
        this.tree.openParents(this);
    }
    close() {
        this.tree.close(this);
    }
    submit(value) {
        this.tree.submit(this, value);
    }
    reset() {
        this.tree.reset();
    }
    clone() {
        return new $096e74084443e9a3$export$d4b903da0f522dc8({
            ...this
        });
    }
    edit() {
        return this.tree.edit(this);
    }
    handleClick = (e)=>{
        if (e.metaKey && !this.tree.props.disableMultiSelection) this.isSelected ? this.deselect() : this.selectMulti();
        else if (e.shiftKey && !this.tree.props.disableMultiSelection) this.selectContiguous();
        else {
            this.select();
            this.activate();
        }
    };
}


const $81080a351c006222$export$ec71a3379b43ae5c = "__REACT_ARBORIST_INTERNAL_ROOT__";
function $81080a351c006222$export$882461b6382ed46c(tree) {
    function visitSelfAndChildren(data, level, parent) {
        const id = tree.accessId(data);
        const node = new (0, $096e74084443e9a3$export$d4b903da0f522dc8)({
            tree: tree,
            data: data,
            level: level,
            parent: parent,
            id: id,
            children: null,
            isDraggable: tree.isDraggable(data),
            rowIndex: null
        });
        const children = tree.accessChildren(data);
        if (children) node.children = children.map((child)=>visitSelfAndChildren(child, level + 1, node));
        return node;
    }
    const root = new (0, $096e74084443e9a3$export$d4b903da0f522dc8)({
        tree: tree,
        id: $81080a351c006222$export$ec71a3379b43ae5c,
        // @ts-ignore
        data: {
            id: $81080a351c006222$export$ec71a3379b43ae5c
        },
        level: -1,
        parent: null,
        children: null,
        isDraggable: true,
        rowIndex: null
    });
    const data = tree.props.data ?? [];
    root.children = data.map((child)=>{
        return visitSelfAndChildren(child, 0, root);
    });
    return root;
}


const $3c0bad2888bcd4bc$export$e324594224ef24da = {
    open (id, filtered) {
        return {
            type: "VISIBILITY_OPEN",
            id: id,
            filtered: filtered
        };
    },
    close (id, filtered) {
        return {
            type: "VISIBILITY_CLOSE",
            id: id,
            filtered: filtered
        };
    },
    toggle (id, filtered) {
        return {
            type: "VISIBILITY_TOGGLE",
            id: id,
            filtered: filtered
        };
    },
    clear (filtered) {
        return {
            type: "VISIBILITY_CLEAR",
            filtered: filtered
        };
    }
};
/* Reducer */ function $3c0bad2888bcd4bc$var$openMapReducer(state = {}, action) {
    if (action.type === "VISIBILITY_OPEN") return {
        ...state,
        [action.id]: true
    };
    else if (action.type === "VISIBILITY_CLOSE") return {
        ...state,
        [action.id]: false
    };
    else if (action.type === "VISIBILITY_TOGGLE") {
        const prev = state[action.id];
        return {
            ...state,
            [action.id]: !prev
        };
    } else if (action.type === "VISIBILITY_CLEAR") return {};
    else return state;
}
function $3c0bad2888bcd4bc$export$1650419e431d3ba3(state = {
    filtered: {},
    unfiltered: {}
}, action) {
    if (!action.type.startsWith("VISIBILITY")) return state;
    if (action.filtered) return {
        ...state,
        filtered: $3c0bad2888bcd4bc$var$openMapReducer(state.filtered, action)
    };
    else return {
        ...state,
        unfiltered: $3c0bad2888bcd4bc$var$openMapReducer(state.unfiltered, action)
    };
}



const $6ad32e02250c922e$export$d4c72bab9d6cc13a = (props)=>({
        nodes: {
            // Changes together
            open: {
                filtered: {},
                unfiltered: props?.initialOpenState ?? {}
            },
            focus: {
                id: null,
                treeFocused: false
            },
            edit: {
                id: null
            },
            drag: {
                id: null,
                idWillReceiveDrop: null
            },
            selection: {
                ids: new Set(),
                anchor: null,
                mostRecent: null
            }
        },
        dnd: {
            cursor: {
                type: "none"
            },
            dragId: null,
            dragIds: [],
            parentId: null,
            index: -1
        }
    });


const $37bc167debff36d2$export$e324594224ef24da = {
    clear: ()=>({
            type: "SELECTION_CLEAR"
        }),
    only: (id)=>({
            type: "SELECTION_ONLY",
            id: (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
        }),
    add: (id)=>({
            type: "SELECTION_ADD",
            ids: (Array.isArray(id) ? id : [
                id
            ]).map((0, $0e6083160f4b36ed$export$65e5b62a4c490288))
        }),
    remove: (id)=>({
            type: "SELECTION_REMOVE",
            ids: (Array.isArray(id) ? id : [
                id
            ]).map((0, $0e6083160f4b36ed$export$65e5b62a4c490288))
        }),
    set: (ids)=>({
            type: "SELECTION_SET",
            ids: ids
        }),
    mostRecent: (id)=>({
            type: "SELECTION_MOST_RECENT",
            id: id === null ? null : (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
        }),
    anchor: (id)=>({
            type: "SELECTION_ANCHOR",
            id: id === null ? null : (0, $0e6083160f4b36ed$export$65e5b62a4c490288)(id)
        })
};
function $37bc167debff36d2$export$1650419e431d3ba3(state = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["nodes"]["selection"], action) {
    const ids = state.ids;
    switch(action.type){
        case "SELECTION_CLEAR":
            return {
                ...state,
                ids: new Set()
            };
        case "SELECTION_ONLY":
            return {
                ...state,
                ids: new Set([
                    action.id
                ])
            };
        case "SELECTION_ADD":
            if (action.ids.length === 0) return state;
            action.ids.forEach((id)=>ids.add(id));
            return {
                ...state,
                ids: new Set(ids)
            };
        case "SELECTION_REMOVE":
            if (action.ids.length === 0) return state;
            action.ids.forEach((id)=>ids.delete(id));
            return {
                ...state,
                ids: new Set(ids)
            };
        case "SELECTION_SET":
            return {
                ...state,
                ids: new Set(action.ids)
            };
        case "SELECTION_MOST_RECENT":
            return {
                ...state,
                mostRecent: action.id
            };
        case "SELECTION_ANCHOR":
            return {
                ...state,
                anchor: action.id
            };
        default:
            return state;
    }
}



const $59f144a8dd651e5e$export$e324594224ef24da = {
    cursor (cursor) {
        return {
            type: "DND_CURSOR",
            cursor: cursor
        };
    },
    dragStart (id, dragIds) {
        return {
            type: "DND_DRAG_START",
            id: id,
            dragIds: dragIds
        };
    },
    dragEnd () {
        return {
            type: "DND_DRAG_END"
        };
    },
    hovering (parentId, index) {
        return {
            type: "DND_HOVERING",
            parentId: parentId,
            index: index
        };
    }
};
function $59f144a8dd651e5e$export$1650419e431d3ba3(state = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["dnd"], action) {
    switch(action.type){
        case "DND_CURSOR":
            return {
                ...state,
                cursor: action.cursor
            };
        case "DND_DRAG_START":
            return {
                ...state,
                dragId: action.id,
                dragIds: action.dragIds
            };
        case "DND_DRAG_END":
            return (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)()["dnd"];
        case "DND_HOVERING":
            return {
                ...state,
                parentId: action.parentId,
                index: action.index
            };
        default:
            return state;
    }
}





const $77d34d95e44d2f58$var$layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
};
const $77d34d95e44d2f58$var$getStyle = (offset)=>{
    if (!offset) return {
        display: "none"
    };
    const { x: x , y: y  } = offset;
    return {
        transform: `translate(${x}px, ${y}px)`
    };
};
const $77d34d95e44d2f58$var$getCountStyle = (offset)=>{
    if (!offset) return {
        display: "none"
    };
    const { x: x , y: y  } = offset;
    return {
        transform: `translate(${x + 10}px, ${y + 10}px)`
    };
};
function $77d34d95e44d2f58$export$84e211ad8431a387({ offset: offset , mouse: mouse , id: id , dragIds: dragIds , isDragging: isDragging  }) {
    return /*#__PURE__*/ (0, $g00cZ$jsxs)($77d34d95e44d2f58$var$Overlay, {
        isDragging: isDragging,
        children: [
            /*#__PURE__*/ (0, $g00cZ$jsx)($77d34d95e44d2f58$var$Position, {
                offset: offset,
                children: /*#__PURE__*/ (0, $g00cZ$jsx)($77d34d95e44d2f58$var$PreviewNode, {
                    id: id,
                    dragIds: dragIds
                })
            }),
            /*#__PURE__*/ (0, $g00cZ$jsx)($77d34d95e44d2f58$var$Count, {
                mouse: mouse,
                count: dragIds.length
            })
        ]
    });
}
const $77d34d95e44d2f58$var$Overlay = /*#__PURE__*/ (0, $g00cZ$memo)(function Overlay(props) {
    if (!props.isDragging) return null;
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        style: $77d34d95e44d2f58$var$layerStyles,
        children: props.children
    });
});
function $77d34d95e44d2f58$var$Position(props) {
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        className: "row preview",
        style: $77d34d95e44d2f58$var$getStyle(props.offset),
        children: props.children
    });
}
function $77d34d95e44d2f58$var$Count(props) {
    const { count: count , mouse: mouse  } = props;
    if (count > 1) return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        className: "selected-count",
        style: $77d34d95e44d2f58$var$getCountStyle(mouse),
        children: count
    });
    else return null;
}
const $77d34d95e44d2f58$var$PreviewNode = /*#__PURE__*/ (0, $g00cZ$memo)(function PreviewNode(props) {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const node = tree.get(props.id);
    if (!node) return null;
    return /*#__PURE__*/ (0, $g00cZ$jsx)(tree.renderNode, {
        preview: true,
        node: node,
        style: {
            paddingLeft: node.level * tree.indent,
            opacity: 0.2,
            background: "transparent"
        },
        tree: tree
    });
});











function $f608be224a71d6f5$export$b6a79797ad180576() {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const state = (0, $89e93131aae74bd9$export$4930f6bf413be70e)();
    const cursor = state.cursor;
    if (!cursor || cursor.type !== "line") return null;
    const indent = tree.indent;
    const top = tree.rowHeight * cursor.index + ((tree.props.padding ?? tree.props.paddingTop) ?? 0);
    const left = indent * cursor.level;
    const Cursor = tree.renderCursor;
    return /*#__PURE__*/ (0, $g00cZ$jsx)(Cursor, {
        top: top,
        left: left,
        indent: indent
    });
}


const $05f64c7ebcbad8b5$export$70c2b8898b86d3ad = /*#__PURE__*/ (0, $g00cZ$forwardRef)(function Outer(props, ref) {
    const { children: children , ...rest } = props;
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $g00cZ$jsxs)("div", {
        // @ts-ignore
        ref: ref,
        ...rest,
        onClick: (e)=>{
            if (e.currentTarget === e.target) tree.deselectAll();
        },
        children: [
            /*#__PURE__*/ (0, $g00cZ$jsx)($05f64c7ebcbad8b5$var$DropContainer, {}),
            children
        ]
    });
});
const $05f64c7ebcbad8b5$var$DropContainer = ()=>{
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        style: {
            height: tree.visibleNodes.length * tree.rowHeight,
            width: "100%",
            position: "absolute",
            left: "0",
            right: "0"
        },
        children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $f608be224a71d6f5$export$b6a79797ad180576), {})
    });
};






const $da9a6b47b6fff922$export$a9af0da3ae60cd00 = /*#__PURE__*/ (0, $g00cZ$forwardRef)(function InnerElement({ style: style , ...rest }, ref) {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const paddingTop = (tree.props.padding ?? tree.props.paddingTop) ?? 0;
    const paddingBottom = (tree.props.padding ?? tree.props.paddingBottom) ?? 0;
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        ref: ref,
        style: {
            ...style,
            height: `${parseFloat(style.height) + paddingTop + paddingBottom}px`
        },
        ...rest
    });
});












function $907e707a330ef23a$export$715c0d031ede7907(node) {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const ids = tree.selectedIds;
    const [_, ref, preview] = (0, $g00cZ$useDrag)(()=>({
            canDrag: ()=>node.isDraggable,
            type: "NODE",
            item: ()=>{
                // This is fired once at the begging of a drag operation
                const dragIds = tree.isSelected(node.id) ? Array.from(ids) : [
                    node.id
                ];
                tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).dragStart(node.id, dragIds));
                return {
                    id: node.id
                };
            },
            end: ()=>{
                tree.hideCursor();
                let { parentId: parentId , index: index , dragIds: dragIds  } = tree.state.dnd;
                // If they held down meta, we need to create a copy
                // if (drop.dropEffect === "copy")
                if (tree.canDrop()) {
                    (0, $0e6083160f4b36ed$export$c6d63370cef03886)(tree.props.onMove, {
                        dragIds: dragIds,
                        parentId: parentId === (0, $81080a351c006222$export$ec71a3379b43ae5c) ? null : parentId,
                        index: index,
                        dragNodes: tree.dragNodes,
                        parentNode: tree.get(parentId)
                    });
                    tree.open(parentId);
                }
                tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).dragEnd());
            }
        }), [
        ids,
        node
    ]);
    (0, $g00cZ$useEffect)(()=>{
        preview((0, $g00cZ$getEmptyImage)());
    }, [
        preview
    ]);
    return ref;
}





function $2db980bfed6822da$var$measureHover(el, offset) {
    const rect = el.getBoundingClientRect();
    const x = offset.x - Math.round(rect.x);
    const y = offset.y - Math.round(rect.y);
    const height = rect.height;
    const inTopHalf = y < height / 2;
    const inBottomHalf = !inTopHalf;
    const pad = height / 4;
    const inMiddle = y > pad && y < height - pad;
    const atTop = !inMiddle && inTopHalf;
    const atBottom = !inMiddle && inBottomHalf;
    return {
        x: x,
        inTopHalf: inTopHalf,
        inBottomHalf: inBottomHalf,
        inMiddle: inMiddle,
        atTop: atTop,
        atBottom: atBottom
    };
}
function $2db980bfed6822da$var$getNodesAroundCursor(node, prev, next, hover) {
    if (!node) // We're hoving over the empty part of the list, not over an item,
    // Put the cursor below the last item which is "prev"
    return [
        prev,
        null
    ];
    if (node.isInternal) {
        if (hover.atTop) return [
            prev,
            node
        ];
        else if (hover.inMiddle) return [
            node,
            node
        ];
        else return [
            node,
            next
        ];
    } else {
        if (hover.inTopHalf) return [
            prev,
            node
        ];
        else return [
            node,
            next
        ];
    }
}
function $2db980bfed6822da$var$getDropLevel(hovering, aboveCursor, belowCursor, indent) {
    const hoverLevel = Math.round(Math.max(0, hovering.x - indent) / indent);
    let min, max;
    if (!aboveCursor) {
        max = 0;
        min = 0;
    } else if (!belowCursor) {
        max = aboveCursor.level;
        min = 0;
    } else {
        max = aboveCursor.level;
        min = belowCursor.level;
    }
    return (0, $0e6083160f4b36ed$export$adf7c0fe6059d774)(hoverLevel, min, max);
}
function $2db980bfed6822da$var$dropAt(parentId, index) {
    return {
        parentId: parentId || null,
        index: index
    };
}
function $2db980bfed6822da$var$lineCursor(index, level) {
    return {
        type: "line",
        index: index,
        level: level
    };
}
function $2db980bfed6822da$var$noCursor() {
    return {
        type: "none"
    };
}
function $2db980bfed6822da$var$highlightCursor(id) {
    return {
        type: "highlight",
        id: id
    };
}
function $2db980bfed6822da$var$walkUpFrom(node, level) {
    let drop = node;
    while(drop.parent && drop.level > level)drop = drop.parent;
    const parentId = drop.parent?.id || null;
    const index = (0, $0e6083160f4b36ed$export$305f7d4e9d4624f2)(drop) + 1;
    return {
        parentId: parentId,
        index: index
    };
}
function $2db980bfed6822da$export$f502ca02ebb85a1c(args) {
    const hover = $2db980bfed6822da$var$measureHover(args.element, args.offset);
    const { node: node , nextNode: nextNode , prevNode: prevNode  } = args;
    const [above, below] = $2db980bfed6822da$var$getNodesAroundCursor(node, prevNode, nextNode, hover);
    /* Hovering over the middle of a folder */ if (node && node.isInternal && hover.inMiddle) return {
        drop: $2db980bfed6822da$var$dropAt(node.id, 0),
        cursor: $2db980bfed6822da$var$highlightCursor(node.id)
    };
    /* At the top of the list */ if (!above) return {
        drop: $2db980bfed6822da$var$dropAt(below?.parent?.id, 0),
        cursor: $2db980bfed6822da$var$lineCursor(0, 0)
    };
    /* The above node is an item or a closed folder */ if ((0, $0e6083160f4b36ed$export$5318634f2ee07019)(above) || (0, $0e6083160f4b36ed$export$4210f5ea57fbae57)(above)) {
        const level = $2db980bfed6822da$var$getDropLevel(hover, above, below, args.indent);
        return {
            drop: $2db980bfed6822da$var$walkUpFrom(above, level),
            cursor: $2db980bfed6822da$var$lineCursor(above.rowIndex + 1, level)
        };
    }
    /* The above node is an open folder */ return {
        drop: $2db980bfed6822da$var$dropAt(above?.id, 0),
        cursor: $2db980bfed6822da$var$lineCursor(above.rowIndex + 1, above.level + 1)
    };
}



function $d38aa53467160173$export$57afafec4637d997(el, node) {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const [_, dropRef] = (0, $g00cZ$useDrop)(()=>({
            accept: "NODE",
            canDrop: ()=>tree.canDrop(),
            hover: (_item, m)=>{
                const offset = m.getClientOffset();
                if (!el.current || !offset) return;
                const { cursor: cursor , drop: drop  } = (0, $2db980bfed6822da$export$f502ca02ebb85a1c)({
                    element: el.current,
                    offset: offset,
                    indent: tree.indent,
                    node: node,
                    prevNode: node.prev,
                    nextNode: node.next
                });
                if (drop) tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).hovering(drop.parentId, drop.index));
                if (m.canDrop()) {
                    if (cursor) tree.showCursor(cursor);
                } else tree.hideCursor();
            },
            drop: (_, m)=>{
                if (!m.canDrop()) return null;
            }
        }), [
        node,
        el.current,
        tree.props
    ]);
    return dropRef;
}




function $48ab254e4b4b72da$export$d75ab90b05ebbfaa(index) {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const original = tree.at(index);
    if (!original) throw new Error(`Could not find node for index: ${index}`);
    return (0, $g00cZ$useMemo)(()=>{
        const fresh = original.clone();
        tree.visibleNodes[index] = fresh; // sneaky
        return fresh;
    // Return a fresh instance if the state values change
    }, [
        ...Object.values(original.state),
        original
    ]);
}


const $8c3aed0a01f84486$export$a9754b3c8daa5172 = /*#__PURE__*/ (0, $g00cZ$react).memo(function RowContainer({ index: index , style: style  }) {
    /* When will the <Row> will re-render.
   *
   * The row component is memo'd so it will only render
   * when a new instance of the NodeApi class is passed
   * to it.
   *
   * The TreeApi instance is stable. It does not
   * change when the internal state changes.
   *
   * The TreeApi has all the references to the nodes.
   * We need to clone the nodes when their state
   * changes. The node class contains no state itself,
   * It always checks the tree for state. The tree's
   * state will always be up to date.
   */ (0, $89e93131aae74bd9$export$83a4f9dc3b36edb8)(); // Re-render when tree props or visability changes
    const _ = (0, $89e93131aae74bd9$export$fd23f19d5d8f3033)(); // So that we re-render appropriately
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)(); // Tree already has the fresh state
    const node = (0, $48ab254e4b4b72da$export$d75ab90b05ebbfaa)(index);
    const el = (0, $g00cZ$useRef)(null);
    const dragRef = (0, $907e707a330ef23a$export$715c0d031ede7907)(node);
    const dropRef = (0, $d38aa53467160173$export$57afafec4637d997)(el, node);
    const innerRef = (0, $g00cZ$useCallback)((n)=>{
        el.current = n;
        dropRef(n);
    }, [
        dropRef
    ]);
    const indent = tree.indent * node.level;
    const nodeStyle = (0, $g00cZ$useMemo)(()=>({
            paddingLeft: indent
        }), [
        indent
    ]);
    const rowStyle = (0, $g00cZ$useMemo)(()=>({
            ...style,
            top: parseFloat(style.top) + ((tree.props.padding ?? tree.props.paddingTop) ?? 0)
        }), [
        style,
        tree.props.padding,
        tree.props.paddingTop
    ]);
    const rowAttrs = {
        role: "treeitem",
        "aria-level": node.level,
        "aria-selected": node.isSelected,
        style: rowStyle,
        tabIndex: -1,
        className: tree.props.rowClassName
    };
    (0, $g00cZ$useEffect)(()=>{
        if (!node.isEditing && node.isFocused) el.current?.focus({
            preventScroll: true
        });
    }, [
        node.isEditing,
        node.isFocused,
        el.current
    ]);
    const Node = tree.renderNode;
    const Row = tree.renderRow;
    return /*#__PURE__*/ (0, $g00cZ$jsx)(Row, {
        node: node,
        innerRef: innerRef,
        attrs: rowAttrs,
        children: /*#__PURE__*/ (0, $g00cZ$jsx)(Node, {
            node: node,
            tree: tree,
            style: nodeStyle,
            dragHandle: dragRef
        })
    });
});


let $065a164934293bf2$var$focusSearchTerm = "";
let $065a164934293bf2$var$timeoutId = null;
function $065a164934293bf2$export$ff4858a4110d9246() {
    (0, $89e93131aae74bd9$export$83a4f9dc3b36edb8)();
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    return /*#__PURE__*/ (0, $g00cZ$jsx)("div", {
        style: {
            height: tree.height,
            width: tree.width,
            minHeight: 0,
            minWidth: 0
        },
        onContextMenu: tree.props.onContextMenu,
        onClick: tree.props.onClick,
        tabIndex: 0,
        onFocus: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) tree.onFocus();
        },
        onBlur: (e)=>{
            if (!e.currentTarget.contains(e.relatedTarget)) tree.onBlur();
        },
        onKeyDown: (e)=>{
            if (tree.isEditing) return;
            if (e.key === "Backspace") {
                if (!tree.props.onDelete) return;
                const ids = Array.from(tree.selectedIds);
                if (ids.length > 1) {
                    let nextFocus = tree.mostRecentNode;
                    while(nextFocus && nextFocus.isSelected)nextFocus = nextFocus.nextSibling;
                    if (!nextFocus) nextFocus = tree.lastNode;
                    tree.focus(nextFocus, {
                        scroll: false
                    });
                    tree.delete(Array.from(ids));
                } else {
                    const node = tree.focusedNode;
                    if (node) {
                        const sib = node.nextSibling;
                        const parent = node.parent;
                        tree.focus(sib || parent, {
                            scroll: false
                        });
                        tree.delete(node);
                    }
                }
                return;
            }
            if (e.key === "Tab" && !e.shiftKey) {
                e.preventDefault();
                (0, $0e6083160f4b36ed$export$3b0237e8566c8d65)(e.currentTarget);
                return;
            }
            if (e.key === "Tab" && e.shiftKey) {
                e.preventDefault();
                (0, $0e6083160f4b36ed$export$33b47db07a82b2fb)(e.currentTarget);
                return;
            }
            if (e.key === "ArrowDown") {
                e.preventDefault();
                const next = tree.nextNode;
                if (e.metaKey) {
                    tree.select(tree.focusedNode);
                    tree.activate(tree.focusedNode);
                    return;
                } else if (!e.shiftKey || tree.props.disableMultiSelection) {
                    tree.focus(next);
                    return;
                } else {
                    if (!next) return;
                    const current = tree.focusedNode;
                    if (!current) tree.focus(tree.firstNode);
                    else if (current.isSelected) tree.selectContiguous(next);
                    else tree.selectMulti(next);
                    return;
                }
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                const prev = tree.prevNode;
                if (!e.shiftKey || tree.props.disableMultiSelection) {
                    tree.focus(prev);
                    return;
                } else {
                    if (!prev) return;
                    const current1 = tree.focusedNode;
                    if (!current1) tree.focus(tree.lastNode); // ?
                    else if (current1.isSelected) tree.selectContiguous(prev);
                    else tree.selectMulti(prev);
                    return;
                }
            }
            if (e.key === "ArrowRight") {
                const node1 = tree.focusedNode;
                if (!node1) return;
                if (node1.isInternal && node1.isOpen) tree.focus(tree.nextNode);
                else if (node1.isInternal) tree.open(node1.id);
                return;
            }
            if (e.key === "ArrowLeft") {
                const node2 = tree.focusedNode;
                if (!node2 || node2.isRoot) return;
                if (node2.isInternal && node2.isOpen) tree.close(node2.id);
                else if (!node2.parent?.isRoot) tree.focus(node2.parent);
                return;
            }
            if (e.key === "a" && e.metaKey && !tree.props.disableMultiSelection) {
                e.preventDefault();
                tree.selectAll();
                return;
            }
            if (e.key === "a" && !e.metaKey && tree.props.onCreate) {
                tree.createLeaf();
                return;
            }
            if (e.key === "A" && !e.metaKey) {
                if (!tree.props.onCreate) return;
                tree.createInternal();
                return;
            }
            if (e.key === "Home") {
                // add shift keys
                e.preventDefault();
                tree.focus(tree.firstNode);
                return;
            }
            if (e.key === "End") {
                // add shift keys
                e.preventDefault();
                tree.focus(tree.lastNode);
                return;
            }
            if (e.key === "Enter") {
                const node3 = tree.focusedNode;
                if (!node3) return;
                if (!node3.isEditable || !tree.props.onRename) return;
                setTimeout(()=>{
                    if (node3) tree.edit(node3);
                });
                return;
            }
            if (e.key === " ") {
                e.preventDefault();
                const node4 = tree.focusedNode;
                if (!node4) return;
                if (node4.isLeaf) {
                    node4.select();
                    node4.activate();
                } else node4.toggle();
                return;
            }
            if (e.key === "*") {
                const node5 = tree.focusedNode;
                if (!node5) return;
                tree.openSiblings(node5);
                return;
            }
            if (e.key === "PageUp") {
                e.preventDefault();
                tree.pageUp();
                return;
            }
            if (e.key === "PageDown") {
                e.preventDefault();
                tree.pageDown();
            }
            // If they type a sequence of characters
            // collect them. Reset them after a timeout.
            // Use it to search the tree for a node, then focus it.
            // Clean this up a bit later
            clearTimeout($065a164934293bf2$var$timeoutId);
            $065a164934293bf2$var$focusSearchTerm += e.key;
            $065a164934293bf2$var$timeoutId = setTimeout(()=>{
                $065a164934293bf2$var$focusSearchTerm = "";
            }, 600);
            const node6 = tree.visibleNodes.find((n)=>{
                // @ts-ignore
                const name = n.data.name;
                if (typeof name === "string") return name.toLowerCase().startsWith($065a164934293bf2$var$focusSearchTerm);
                else return false;
            });
            if (node6) tree.focus(node6.id);
        },
        children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $g00cZ$FixedSizeList), {
            className: tree.props.className,
            outerRef: tree.listEl,
            itemCount: tree.visibleNodes.length,
            height: tree.height,
            width: tree.width,
            itemSize: tree.rowHeight,
            overscanCount: tree.overscanCount,
            itemKey: (index)=>tree.visibleNodes[index]?.id || index,
            outerElementType: (0, $05f64c7ebcbad8b5$export$70c2b8898b86d3ad),
            innerElementType: (0, $da9a6b47b6fff922$export$a9af0da3ae60cd00),
            onScroll: tree.props.onScroll,
            onItemsRendered: tree.onItemsRendered.bind(tree),
            ref: tree.list,
            children: (0, $8c3aed0a01f84486$export$a9754b3c8daa5172)
        })
    });
}


function $749bc746798c29ad$export$5897d8d7c7a3d871(tree) {
    if (tree.isFiltered) return $749bc746798c29ad$var$flattenAndFilterTree(tree.root, tree.isMatch.bind(tree));
    else return $749bc746798c29ad$var$flattenTree(tree.root);
}
function $749bc746798c29ad$var$flattenTree(root) {
    const list = [];
    function collect(node) {
        if (node.level >= 0) list.push(node);
        if (node.isOpen) node.children?.forEach(collect);
    }
    collect(root);
    list.forEach($749bc746798c29ad$var$assignRowIndex);
    return list;
}
function $749bc746798c29ad$var$flattenAndFilterTree(root, isMatch) {
    const matches = {};
    const list = [];
    function markMatch(node) {
        const yes = !node.isRoot && isMatch(node);
        if (yes) {
            matches[node.id] = true;
            let parent = node.parent;
            while(parent){
                matches[parent.id] = true;
                parent = parent.parent;
            }
        }
        if (node.children) for (let child of node.children)markMatch(child);
    }
    function collect(node) {
        if (node.level >= 0 && matches[node.id]) list.push(node);
        if (node.isOpen) node.children?.forEach(collect);
    }
    markMatch(root);
    collect(root);
    list.forEach($749bc746798c29ad$var$assignRowIndex);
    return list;
}
function $749bc746798c29ad$var$assignRowIndex(node, index) {
    node.rowIndex = index;
}


const $659b2f68e1468ad0$export$c6d108d7c8095f19 = (nodes)=>{
    return nodes.reduce((map, node, index)=>{
        map[node.id] = index;
        return map;
    }, {});
};


const { safeRun: $bfece7c4aed4e9c4$var$safeRun , identify: $bfece7c4aed4e9c4$var$identify , identifyNull: $bfece7c4aed4e9c4$var$identifyNull  } = $0e6083160f4b36ed$exports;
class $bfece7c4aed4e9c4$export$e2da3477247342d1 {
    constructor(store, props, list, listEl){
        this.store = store;
        this.props = props;
        this.list = list;
        this.listEl = listEl;
        this.visibleStartIndex = 0;
        this.visibleStopIndex = 0;
        /* Changes here must also be made in update() */ this.root = (0, $81080a351c006222$export$882461b6382ed46c)(this);
        this.visibleNodes = (0, $749bc746798c29ad$export$5897d8d7c7a3d871)(this);
        this.idToIndex = (0, $659b2f68e1468ad0$export$c6d108d7c8095f19)(this.visibleNodes);
    }
    /* Changes here must also be made in constructor() */ update(props) {
        this.props = props;
        this.root = (0, $81080a351c006222$export$882461b6382ed46c)(this);
        this.visibleNodes = (0, $749bc746798c29ad$export$5897d8d7c7a3d871)(this);
        this.idToIndex = (0, $659b2f68e1468ad0$export$c6d108d7c8095f19)(this.visibleNodes);
    }
    /* Store helpers */ dispatch(action) {
        return this.store.dispatch(action);
    }
    get state() {
        return this.store.getState();
    }
    get openState() {
        return this.state.nodes.open.unfiltered;
    }
    /* Tree Props */ get width() {
        return this.props.width ?? 300;
    }
    get height() {
        return this.props.height ?? 500;
    }
    get indent() {
        return this.props.indent ?? 24;
    }
    get rowHeight() {
        return this.props.rowHeight ?? 24;
    }
    get overscanCount() {
        return this.props.overscanCount ?? 1;
    }
    get searchTerm() {
        return (this.props.searchTerm || "").trim();
    }
    get matchFn() {
        const match = this.props.searchMatch ?? ((node, term)=>{
            const string = JSON.stringify(Object.values(node.data));
            return string.toLocaleLowerCase().includes(term.toLocaleLowerCase());
        });
        return (node)=>match(node, this.searchTerm);
    }
    accessChildren(data) {
        const get = this.props.childrenAccessor || "children";
        return $0e6083160f4b36ed$exports.access(data, get) ?? null;
    }
    accessId(data) {
        const get = this.props.idAccessor || "id";
        const id = $0e6083160f4b36ed$exports.access(data, get);
        if (!id) throw new Error("Data must contain an 'id' property or props.idAccessor must return a string");
        return id;
    }
    /* Node Access */ get firstNode() {
        return this.visibleNodes[0] ?? null;
    }
    get lastNode() {
        return this.visibleNodes[this.visibleNodes.length - 1] ?? null;
    }
    get focusedNode() {
        return this.get(this.state.nodes.focus.id) ?? null;
    }
    get mostRecentNode() {
        return this.get(this.state.nodes.selection.mostRecent) ?? null;
    }
    get nextNode() {
        const index = this.indexOf(this.focusedNode);
        if (index === null) return null;
        else return this.at(index + 1);
    }
    get prevNode() {
        const index = this.indexOf(this.focusedNode);
        if (index === null) return null;
        else return this.at(index - 1);
    }
    get(id) {
        if (!id) return null;
        if (id in this.idToIndex) return this.visibleNodes[this.idToIndex[id]] || null;
        else return null;
    }
    at(index) {
        return this.visibleNodes[index] || null;
    }
    nodesBetween(startId, endId) {
        if (startId === null || endId === null) return [];
        const index1 = this.indexOf(startId) ?? 0;
        const index2 = this.indexOf(endId);
        if (index2 === null) return [];
        const start = Math.min(index1, index2);
        const end = Math.max(index1, index2);
        return this.visibleNodes.slice(start, end + 1);
    }
    indexOf(id) {
        const key = $0e6083160f4b36ed$exports.identifyNull(id);
        if (!key) return null;
        return this.idToIndex[key];
    }
    /* Data Operations */ get editingId() {
        return this.state.nodes.edit.id;
    }
    createInternal() {
        return this.create({
            type: "internal"
        });
    }
    createLeaf() {
        return this.create({
            type: "leaf"
        });
    }
    async create(opts = {}) {
        const parentId = opts.parentId === undefined ? $0e6083160f4b36ed$exports.getInsertParentId(this) : opts.parentId;
        const index = opts.index ?? $0e6083160f4b36ed$exports.getInsertIndex(this);
        const type = opts.type ?? "leaf";
        const data = await $bfece7c4aed4e9c4$var$safeRun(this.props.onCreate, {
            type: type,
            parentId: parentId,
            index: index,
            parentNode: this.get(parentId)
        });
        if (data) {
            this.focus(data);
            setTimeout(()=>{
                this.edit(data).then(()=>{
                    this.select(data);
                    this.activate(data);
                });
            });
        }
    }
    async delete(node) {
        if (!node) return;
        const idents = Array.isArray(node) ? node : [
            node
        ];
        const ids = idents.map($bfece7c4aed4e9c4$var$identify);
        const nodes = ids.map((id)=>this.get(id)).filter((n)=>!!n);
        await $bfece7c4aed4e9c4$var$safeRun(this.props.onDelete, {
            nodes: nodes,
            ids: ids
        });
    }
    edit(node) {
        const id = $bfece7c4aed4e9c4$var$identify(node);
        this.resolveEdit({
            cancelled: true
        });
        this.scrollTo(id);
        this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(id));
        return new Promise((resolve)=>{
            $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise = resolve;
        });
    }
    async submit(identity, value) {
        if (!identity) return;
        const id = $bfece7c4aed4e9c4$var$identify(identity);
        await $bfece7c4aed4e9c4$var$safeRun(this.props.onRename, {
            id: id,
            name: value,
            node: this.get(id)
        });
        this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(null));
        this.resolveEdit({
            cancelled: false,
            value: value
        });
        setTimeout(()=>this.onFocus()); // Return focus to element;
    }
    reset() {
        this.dispatch((0, $21783d2b0251be67$export$e1a8e267487c59d1)(null));
        this.resolveEdit({
            cancelled: true
        });
        setTimeout(()=>this.onFocus()); // Return focus to element;
    }
    activate(id) {
        const node = this.get($bfece7c4aed4e9c4$var$identifyNull(id));
        if (!node) return;
        $bfece7c4aed4e9c4$var$safeRun(this.props.onActivate, node);
    }
    resolveEdit(value) {
        const resolve = $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise;
        if (resolve) resolve(value);
        $bfece7c4aed4e9c4$export$e2da3477247342d1.editPromise = null;
    }
    /* Focus and Selection */ get selectedIds() {
        return this.state.nodes.selection.ids;
    }
    get selectedNodes() {
        let nodes = [];
        for (let id of Array.from(this.selectedIds)){
            const node = this.get(id);
            if (node) nodes.push(node);
        }
        return nodes;
    }
    focus(node, opts = {}) {
        if (!node) return;
        /* Focus is responsible for scrolling, while selection is
     * responsible for focus. If selectionFollowsFocus, then
     * just select it. */ if (this.props.selectionFollowsFocus) this.select(node);
        else {
            this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)($bfece7c4aed4e9c4$var$identify(node)));
            if (opts.scroll !== false) this.scrollTo(node);
            if (this.focusedNode) $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
        }
    }
    pageUp() {
        const start = this.visibleStartIndex;
        const stop = this.visibleStopIndex;
        const page = stop - start;
        let index = this.focusedNode?.rowIndex ?? 0;
        if (index > start) index = start;
        else index = Math.max(start - page, 0);
        this.focus(this.at(index));
    }
    pageDown() {
        const start = this.visibleStartIndex;
        const stop = this.visibleStopIndex;
        const page = stop - start;
        let index = this.focusedNode?.rowIndex ?? 0;
        if (index < stop) index = stop;
        else index = Math.min(index + page, this.visibleNodes.length - 1);
        this.focus(this.at(index));
    }
    select(node, opts = {}) {
        if (!node) return;
        const changeFocus = opts.focus !== false;
        const id = $bfece7c4aed4e9c4$var$identify(node);
        if (changeFocus) this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).only(id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(id));
        this.scrollTo(id, opts.align);
        if (this.focusedNode && changeFocus) $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
        $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    deselect(node) {
        if (!node) return;
        const id = $bfece7c4aed4e9c4$var$identify(node);
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).remove(id));
    }
    selectMulti(identity) {
        const node = this.get($bfece7c4aed4e9c4$var$identifyNull(identity));
        if (!node) return;
        this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(node.id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).add(node.id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(node.id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(node.id));
        this.scrollTo(node);
        if (this.focusedNode) $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
        $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    selectContiguous(identity) {
        if (!identity) return;
        const id = $bfece7c4aed4e9c4$var$identify(identity);
        const { anchor: anchor , mostRecent: mostRecent  } = this.state.nodes.selection;
        this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).remove(this.nodesBetween(anchor, mostRecent)));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).add(this.nodesBetween(anchor, $bfece7c4aed4e9c4$var$identifyNull(id))));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(id));
        this.scrollTo(id);
        if (this.focusedNode) $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
        $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    deselectAll() {
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).clear());
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(null));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(null));
        $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    selectAll() {
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).set(new Set(Object.keys(this.idToIndex))));
        this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(this.lastNode?.id));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).anchor(this.firstNode));
        this.dispatch((0, $37bc167debff36d2$export$e324594224ef24da).mostRecent(this.lastNode));
        if (this.focusedNode) $bfece7c4aed4e9c4$var$safeRun(this.props.onFocus, this.focusedNode);
        $bfece7c4aed4e9c4$var$safeRun(this.props.onSelect, this.selectedNodes);
    }
    /* Drag and Drop */ get cursorParentId() {
        const { cursor: cursor  } = this.state.dnd;
        switch(cursor.type){
            case "highlight":
                return cursor.id;
            default:
                return null;
        }
    }
    get cursorOverFolder() {
        return this.state.dnd.cursor.type === "highlight";
    }
    get dragNodes() {
        return this.state.dnd.dragIds.map((id)=>this.get(id)).filter((n)=>!!n);
    }
    canDrop() {
        if (this.isFiltered) return false;
        const parentNode = this.get(this.state.dnd.parentId) ?? this.root;
        const dragNodes = this.dragNodes;
        const isDisabled = this.props.disableDrop;
        for (const drag of dragNodes){
            if (!drag) return false;
            if (!parentNode) return false;
            if (drag.isInternal && $0e6083160f4b36ed$exports.isDecendent(parentNode, drag)) return false;
        }
        // Allow the user to insert their own logic
        if (typeof isDisabled == "function") return !isDisabled({
            parentNode: parentNode,
            dragNodes: this.dragNodes,
            index: this.state.dnd.index
        });
        else if (typeof isDisabled == "string") // @ts-ignore
        return !parentNode.data[isDisabled];
        else if (typeof isDisabled === "boolean") return !isDisabled;
        else return true;
    }
    hideCursor() {
        this.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).cursor({
            type: "none"
        }));
    }
    showCursor(cursor) {
        this.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).cursor(cursor));
    }
    /* Visibility */ open(identity) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
        if (!id) return;
        if (this.isOpen(id)) return;
        this.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).open(id, this.isFiltered));
        $bfece7c4aed4e9c4$var$safeRun(this.props.onToggle, id);
    }
    close(identity) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
        if (!id) return;
        if (!this.isOpen(id)) return;
        this.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).close(id, this.isFiltered));
        $bfece7c4aed4e9c4$var$safeRun(this.props.onToggle, id);
    }
    toggle(identity) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
        if (!id) return;
        return this.isOpen(id) ? this.close(id) : this.open(id);
    }
    openParents(identity) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(identity);
        if (!id) return;
        const node = $0e6083160f4b36ed$exports.dfs(this.root, id);
        let parent = node?.parent;
        while(parent){
            this.open(parent.id);
            parent = parent.parent;
        }
    }
    openSiblings(node) {
        const parent = node.parent;
        if (!parent) this.toggle(node.id);
        else if (parent.children) {
            const isOpen = node.isOpen;
            for (let sibling of parent.children)if (sibling.isInternal) isOpen ? this.close(sibling.id) : this.open(sibling.id);
            this.scrollTo(this.focusedNode);
        }
    }
    openAll() {
        $0e6083160f4b36ed$exports.walk(this.root, (node)=>{
            if (node.isInternal) node.open();
        });
    }
    closeAll() {
        $0e6083160f4b36ed$exports.walk(this.root, (node)=>{
            if (node.isInternal) node.close();
        });
    }
    /* Scrolling */ scrollTo(identity, align = "smart") {
        if (!identity) return;
        const id = $bfece7c4aed4e9c4$var$identify(identity);
        this.openParents(id);
        return $0e6083160f4b36ed$exports.waitFor(()=>id in this.idToIndex).then(()=>{
            const index = this.idToIndex[id];
            if (index === undefined) return;
            this.list.current?.scrollToItem(index, align);
        }).catch(()=>{
        // Id: ${id} never appeared in the list.
        });
    }
    /* State Checks */ get isEditing() {
        return this.state.nodes.edit.id !== null;
    }
    get isFiltered() {
        return !!this.props.searchTerm?.trim();
    }
    get hasFocus() {
        return this.state.nodes.focus.treeFocused;
    }
    get hasNoSelection() {
        return this.state.nodes.selection.ids.size === 0;
    }
    get hasOneSelection() {
        return this.state.nodes.selection.ids.size === 1;
    }
    get hasMultipleSelections() {
        return this.state.nodes.selection.ids.size > 1;
    }
    isSelected(id) {
        if (!id) return false;
        return this.state.nodes.selection.ids.has(id);
    }
    isOpen(id) {
        if (!id) return false;
        if (id === (0, $81080a351c006222$export$ec71a3379b43ae5c)) return true;
        const def = this.props.openByDefault ?? true;
        if (this.isFiltered) return this.state.nodes.open.filtered[id] ?? true; // Filtered folders are always opened by default
        else return this.state.nodes.open.unfiltered[id] ?? def;
    }
    isEditable(data) {
        const check = this.props.disableEdit || (()=>false);
        return !$0e6083160f4b36ed$exports.access(data, check) ?? true;
    }
    isDraggable(data) {
        const check = this.props.disableDrag || (()=>false);
        return !$0e6083160f4b36ed$exports.access(data, check) ?? true;
    }
    isDragging(node) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(node);
        if (!id) return false;
        return this.state.nodes.drag.id === id;
    }
    isFocused(id) {
        return this.hasFocus && this.state.nodes.focus.id === id;
    }
    isMatch(node) {
        return this.matchFn(node);
    }
    willReceiveDrop(node) {
        const id = $bfece7c4aed4e9c4$var$identifyNull(node);
        if (!id) return false;
        return id === this.state.nodes.drag.idWillReceiveDrop;
    }
    /* Tree Event Handlers */ onFocus() {
        const node = this.focusedNode || this.firstNode;
        if (node) this.dispatch((0, $c27b8e9863235052$export$d7ddd398f22d79ef)(node.id));
    }
    onBlur() {
        this.dispatch((0, $c27b8e9863235052$export$6b6c976e46a06288)());
    }
    onItemsRendered(args) {
        this.visibleStartIndex = args.visibleStartIndex;
        this.visibleStopIndex = args.visibleStopIndex;
    }
    /* Get Renderers */ get renderContainer() {
        return this.props.renderContainer || (0, $065a164934293bf2$export$ff4858a4110d9246);
    }
    get renderRow() {
        return this.props.renderRow || (0, $164e874d21fcd87e$export$f9c541e71856c524);
    }
    get renderNode() {
        return this.props.children || (0, $c4edd692d5290432$export$909e23cbfbbd3351);
    }
    get renderDragPreview() {
        return this.props.renderDragPreview || (0, $77d34d95e44d2f58$export$84e211ad8431a387);
    }
    get renderCursor() {
        return this.props.renderCursor || (0, $fb4c15d8425379bd$export$6cb3c16721363d11);
    }
}









function $5c35ee13c124a8cc$export$1650419e431d3ba3(state = {
    id: null,
    idWillReceiveDrop: null
}, action) {
    switch(action.type){
        case "DND_DRAG_START":
            return {
                ...state,
                id: action.id
            };
        case "DND_DRAG_END":
            return {
                ...state,
                id: null
            };
        case "DND_CURSOR":
            const c = action.cursor;
            if (c.type === "highlight" && c.id !== state.idWillReceiveDrop) return {
                ...state,
                idWillReceiveDrop: c.id
            };
            else if (c.type !== "highlight" && state.idWillReceiveDrop !== null) return {
                ...state,
                idWillReceiveDrop: null
            };
            else return state;
        default:
            return state;
    }
}


const $a18760514dcf279e$export$a8a69c316169e623 = (0, $g00cZ$combineReducers)({
    nodes: (0, $g00cZ$combineReducers)({
        focus: $c27b8e9863235052$export$1650419e431d3ba3,
        edit: $21783d2b0251be67$export$1650419e431d3ba3,
        open: $3c0bad2888bcd4bc$export$1650419e431d3ba3,
        selection: $37bc167debff36d2$export$1650419e431d3ba3,
        drag: $5c35ee13c124a8cc$export$1650419e431d3ba3
    }),
    dnd: $59f144a8dd651e5e$export$1650419e431d3ba3
});






const $dac24389e46ba09d$var$SERVER_STATE = (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)();
function $dac24389e46ba09d$export$c49dab5eb1b4ce0c({ treeProps: treeProps , imperativeHandle: imperativeHandle , children: children  }) {
    const list = (0, $g00cZ$useRef)(null);
    const listEl = (0, $g00cZ$useRef)(null);
    const store = (0, $g00cZ$useRef)((0, $g00cZ$createStore)((0, $a18760514dcf279e$export$a8a69c316169e623), (0, $6ad32e02250c922e$export$d4c72bab9d6cc13a)(treeProps)));
    const state = (0, $g00cZ$useSyncExternalStore)(store.current.subscribe, store.current.getState, ()=>$dac24389e46ba09d$var$SERVER_STATE);
    /* The tree api object is stable. */ const api = (0, $g00cZ$useMemo)(()=>{
        return new (0, $bfece7c4aed4e9c4$export$e2da3477247342d1)(store.current, treeProps, list, listEl);
    }, []);
    /* Make sure the tree instance stays in sync */ const updateCount = (0, $g00cZ$useRef)(0);
    (0, $g00cZ$useMemo)(()=>{
        updateCount.current += 1;
        api.update(treeProps);
    }, [
        ...Object.values(treeProps),
        state.nodes.open
    ]);
    /* Expose the tree api */ (0, $g00cZ$useImperativeHandle)(imperativeHandle, ()=>api);
    /* Change selection based on props */ (0, $g00cZ$useEffect)(()=>{
        if (api.props.selection) api.select(api.props.selection, {
            focus: false
        });
        else api.deselectAll();
    }, [
        api.props.selection
    ]);
    /* Clear visability for filtered nodes */ (0, $g00cZ$useEffect)(()=>{
        if (!api.props.searchTerm) store.current.dispatch((0, $3c0bad2888bcd4bc$export$e324594224ef24da).clear(true));
    }, [
        api.props.searchTerm
    ]);
    return /*#__PURE__*/ (0, $g00cZ$jsx)((0, $89e93131aae74bd9$export$feef243b04ff4151).Provider, {
        value: api,
        children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $89e93131aae74bd9$export$d0c71bc5e3e2d897).Provider, {
            value: updateCount.current,
            children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $89e93131aae74bd9$export$f6d467aa8b3786af).Provider, {
                value: state.nodes,
                children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $89e93131aae74bd9$export$2d5c5ceac203fc1e).Provider, {
                    value: state.dnd,
                    children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $g00cZ$DndProvider), {
                        backend: (0, $g00cZ$HTML5Backend),
                        options: {
                            rootElement: api.props.dndRootElement || undefined
                        },
                        children: children
                    })
                })
            })
        })
    });
}






function $e739455e59c6aed3$export$5a6c424b1725f44f() {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    // In case we drop an item at the bottom of the list
    const [, drop] = (0, $g00cZ$useDrop)(()=>({
            accept: "NODE",
            canDrop: (_item, m)=>{
                if (!m.isOver({
                    shallow: true
                })) return false;
                return tree.canDrop();
            },
            hover: (_item, m)=>{
                if (!m.isOver({
                    shallow: true
                })) return;
                const offset = m.getClientOffset();
                if (!tree.listEl.current || !offset) return;
                const { cursor: cursor , drop: drop  } = (0, $2db980bfed6822da$export$f502ca02ebb85a1c)({
                    element: tree.listEl.current,
                    offset: offset,
                    indent: tree.indent,
                    node: null,
                    prevNode: tree.visibleNodes[tree.visibleNodes.length - 1],
                    nextNode: null
                });
                if (drop) tree.dispatch((0, $59f144a8dd651e5e$export$e324594224ef24da).hovering(drop.parentId, drop.index));
                if (m.canDrop()) {
                    if (cursor) tree.showCursor(cursor);
                } else tree.hideCursor();
            }
        }), [
        tree
    ]);
    drop(tree.listEl);
}


function $5d6a5680e6f62734$export$a6ee728c3c6ef11d(props) {
    (0, $e739455e59c6aed3$export$5a6c424b1725f44f)();
    return props.children;
}






function $f13a06e5444f84b6$export$cdf2ef3f6364d85() {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const Container = tree.props.renderContainer || (0, $065a164934293bf2$export$ff4858a4110d9246);
    return /*#__PURE__*/ (0, $g00cZ$jsx)((0, $g00cZ$Fragment), {
        children: /*#__PURE__*/ (0, $g00cZ$jsx)(Container, {})
    });
}






function $8f8be4c9bb5ab52a$export$3e21b60650ec7e55() {
    const tree = (0, $89e93131aae74bd9$export$367b0f2231a90ba0)();
    const { offset: offset , mouse: mouse , item: item , isDragging: isDragging  } = (0, $g00cZ$useDragLayer)((m)=>{
        return {
            offset: m.getSourceClientOffset(),
            mouse: m.getClientOffset(),
            item: m.getItem(),
            isDragging: m.isDragging()
        };
    });
    if (tree.props.onDndDrag) tree.props.onDndDrag({
        offset: offset,
        mouse: mouse,
        item: item,
        isDragging: isDragging
    });
    const DragPreview = tree.props.renderDragPreview || (0, $77d34d95e44d2f58$export$84e211ad8431a387);
    return /*#__PURE__*/ (0, $g00cZ$jsx)(DragPreview, {
        offset: offset,
        mouse: mouse,
        id: item?.id || null,
        dragIds: item?.dragIds || [],
        isDragging: isDragging
    });
}


var $0a3913338341addb$exports = {};

$parcel$export($0a3913338341addb$exports, "useSimpleTree", () => $0a3913338341addb$export$dcd27aa2043b2724);

var $65f74606ca594063$exports = {};

$parcel$export($65f74606ca594063$exports, "SimpleTree", () => $65f74606ca594063$export$e32206264f456dce);
class $65f74606ca594063$export$e32206264f456dce {
    constructor(data){
        this.root = $65f74606ca594063$var$createRoot(data);
    }
    get data() {
        return this.root.children?.map((node)=>node.data) ?? [];
    }
    create(args) {
        const parent = args.parentId ? this.find(args.parentId) : this.root;
        if (!parent) return null;
        parent.addChild(args.data, args.index);
    }
    move(args) {
        const src = this.find(args.id);
        const parent = args.parentId ? this.find(args.parentId) : this.root;
        if (!src || !parent) return;
        parent.addChild(src.data, args.index);
        src.drop();
    }
    update(args) {
        const node = this.find(args.id);
        if (node) node.update(args.changes);
    }
    drop(args) {
        const node = this.find(args.id);
        if (node) node.drop();
    }
    find(id, node = this.root) {
        if (!node) return null;
        if (node.id === id) return node;
        if (node.children) {
            for (let child of node.children){
                const found = this.find(id, child);
                if (found) return found;
            }
            return null;
        }
        return null;
    }
}
function $65f74606ca594063$var$createRoot(data) {
    const root = new $65f74606ca594063$var$SimpleNode({
        id: "ROOT"
    }, null);
    root.children = data.map((d)=>$65f74606ca594063$var$createNode(d, root));
    return root;
}
function $65f74606ca594063$var$createNode(data, parent) {
    const node = new $65f74606ca594063$var$SimpleNode(data, parent);
    if (data.children) node.children = data.children.map((d)=>$65f74606ca594063$var$createNode(d, node));
    return node;
}
class $65f74606ca594063$var$SimpleNode {
    constructor(data, parent){
        this.data = data;
        this.parent = parent;
        this.id = data.id;
    }
    hasParent() {
        return !!this.parent;
    }
    get childIndex() {
        return this.hasParent() ? this.parent.children.indexOf(this) : -1;
    }
    addChild(data, index) {
        const node = $65f74606ca594063$var$createNode(data, this);
        this.children = this.children ?? [];
        this.children.splice(index, 0, node);
        this.data.children = this.data.children ?? [];
        this.data.children.splice(index, 0, data);
    }
    removeChild(index) {
        this.children?.splice(index, 1);
        this.data.children?.splice(index, 1);
    }
    update(changes) {
        if (this.hasParent()) {
            const i = this.childIndex;
            this.parent.addChild({
                ...this.data,
                ...changes
            }, i);
            this.drop();
        }
    }
    drop() {
        if (this.hasParent()) this.parent.removeChild(this.childIndex);
    }
}


let $0a3913338341addb$var$nextId = 0;
function $0a3913338341addb$export$dcd27aa2043b2724(initialData) {
    const [data, setData] = (0, $g00cZ$useState)(initialData);
    const tree = (0, $g00cZ$useMemo)(()=>new (0, $65f74606ca594063$export$e32206264f456dce)(data), [
        data
    ]);
    const onMove = (args)=>{
        for (const id of args.dragIds)tree.move({
            id: id,
            parentId: args.parentId,
            index: args.index
        });
        setData(tree.data);
    };
    const onRename = ({ name: name , id: id  })=>{
        tree.update({
            id: id,
            changes: {
                name: name
            }
        });
        setData(tree.data);
    };
    const onCreate = ({ parentId: parentId , index: index , type: type  })=>{
        const data = {
            id: `simple-tree-id-${$0a3913338341addb$var$nextId++}`,
            name: ""
        };
        if (type === "internal") data.children = [];
        tree.create({
            parentId: parentId,
            index: index,
            data: data
        });
        setData(tree.data);
        return data;
    };
    const onDelete = (args)=>{
        args.ids.forEach((id)=>tree.drop({
                id: id
            }));
        setData(tree.data);
    };
    const controller = {
        onMove: onMove,
        onRename: onRename,
        onCreate: onCreate,
        onDelete: onDelete
    };
    return [
        data,
        controller
    ];
}


function $c881d1adb735dfd0$export$d227906824a13416(props) {
    if (props.initialData && props.data) throw new Error(`React Arborist Tree => Provide either a data or initialData prop, but not both.`);
    if (props.initialData && (props.onCreate || props.onDelete || props.onMove || props.onRename)) throw new Error(`React Arborist Tree => You passed the initialData prop along with a data handler.
Use the data prop if you want to provide your own handlers.`);
    if (props.initialData) {
        /**
     * Let's break the rules of hooks here. If the initialData prop
     * is provided, we will assume it will not change for the life of
     * the component.
     *
     * We will provide the real data and the handlers to update it.
     *   */ const [data, controller] = (0, $0a3913338341addb$export$dcd27aa2043b2724)(props.initialData);
        return {
            ...props,
            ...controller,
            data: data
        };
    } else return props;
}


function $2ba43033bb8eb39d$var$TreeComponent(props, ref) {
    const treeProps = (0, $c881d1adb735dfd0$export$d227906824a13416)(props);
    return /*#__PURE__*/ (0, $g00cZ$jsxs)((0, $dac24389e46ba09d$export$c49dab5eb1b4ce0c), {
        treeProps: treeProps,
        imperativeHandle: ref,
        children: [
            /*#__PURE__*/ (0, $g00cZ$jsx)((0, $5d6a5680e6f62734$export$a6ee728c3c6ef11d), {
                children: /*#__PURE__*/ (0, $g00cZ$jsx)((0, $f13a06e5444f84b6$export$cdf2ef3f6364d85), {})
            }),
            /*#__PURE__*/ (0, $g00cZ$jsx)((0, $8f8be4c9bb5ab52a$export$3e21b60650ec7e55), {})
        ]
    });
}
const $2ba43033bb8eb39d$export$7fbedc92909ed28e = /*#__PURE__*/ (0, $g00cZ$forwardRef)($2ba43033bb8eb39d$var$TreeComponent);


var $39951822bc5f8aec$exports = {};


var $8c5b0bb55f55c0d2$exports = {};


var $309635e603b9cc16$exports = {};


var $c9ea992a6d07f0b8$exports = {};








export {$2ba43033bb8eb39d$export$7fbedc92909ed28e as Tree, $096e74084443e9a3$export$d4b903da0f522dc8 as NodeApi, $bfece7c4aed4e9c4$export$e2da3477247342d1 as TreeApi, $65f74606ca594063$export$e32206264f456dce as SimpleTree, $0a3913338341addb$export$dcd27aa2043b2724 as useSimpleTree};
//# sourceMappingURL=module.js.map
