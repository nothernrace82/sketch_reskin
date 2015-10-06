/*
  javascript.util is a port of selected parts of java.util to JavaScript which
  main purpose is to ease porting Java code to JavaScript.
  
  The MIT License (MIT)

  Copyright (C) 2011,2012 by The Authors

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
(function (c) {
    var d, b, a, h, e, f = { ".js": [], ".json": [], ".css": [], ".html": [] }; h = function (a) { a = Error("Could not find module '" + a + "'"); a.code = "MODULE_NOT_FOUND"; return a }; e = function (a, l, b) { var e, h; if ("function" === typeof a[l + b]) return l + b; for (e = 0; h = f[b][e]; ++e) if ("function" === typeof a[l + h]) return l + h; return null }; d = function (a, l, k, c, f) {
        var g, n; k = k.split("/"); g = k.pop(); if ("." === g || ".." === g) k.push(g), g = ""; for (; null != (n = k.shift()) ;) if (n && "." !== n && (".." === n ? a = l.pop() : (l.push(a), a = a[n]), !a)) throw h(c); g && "function" !==
        typeof a[g] && ((k = e(a, g, ".js")) || (k = e(a, g, ".json")), k || (k = e(a, g, ".css")), k || (k = e(a, g, ".html")), k ? g = k : 2 !== f && "object" === typeof a[g] && (l.push(a), a = a[g], g = "")); if (!g) return 1 !== f && a[":mainpath:"] ? d(a, l, a[":mainpath:"], c, 1) : d(a, l, "index", c, 2); f = a[g]; if (!f) throw h(c); if (f.hasOwnProperty("module")) return f.module.exports; c = {}; f.module = g = { exports: c }; f.call(c, c, g, b(a, l)); return g.exports
    }; a = function (a, l, b) {
        var e, f = b; e = b.charAt(0); var g = 0; if ("/" === e) f = f.slice(1), a = c["/"], l = []; else if ("." !== e) {
            e = f.split("/",
            1)[0]; a = c[e]; if (!a) throw h(b); l = []; f = f.slice(e.length + 1); f || ((f = a[":mainpath:"]) ? g = 1 : (f = "index", g = 2))
        } return d(a, l, f, b, g)
    }; b = function (b, l) { return function (e) { return a(b, [].concat(l), e) } }; return b(c, [])
})({
    "javascript.util": {
        lib: {
            "ArrayList.js": function (c, d, b) {
                function a(a) { this.array = []; a instanceof h && this.addAll(a) } var h = b("./Collection"); c = b("./List"); var e = b("./OperationNotSupported"), f = b("./NoSuchElementException"), m = b("./IndexOutOfBoundsException"); a.prototype = new c; a.prototype.array = null; a.prototype.add =
                function (a) { this.array.push(a); return !0 }; a.prototype.addAll = function (a) { for (a = a.iterator() ; a.hasNext() ;) this.add(a.next()); return !0 }; a.prototype.set = function (a, b) { var e = this.array[a]; this.array[a] = b; return e }; a.prototype.iterator = function () { return new a.Iterator(this) }; a.prototype.get = function (a) { if (0 > a || a >= this.size()) throw new m; return this.array[a] }; a.prototype.isEmpty = function () { return 0 === this.array.length }; a.prototype.size = function () { return this.array.length }; a.prototype.toArray = function () {
                    for (var a =
                    [], b = 0, e = this.array.length; b < e; b++) a.push(this.array[b]); return a
                }; a.prototype.remove = function (a) { for (var b = !1, e = 0, m = this.array.length; e < m; e++) if (this.array[e] === a) { this.array.splice(e, 1); b = !0; break } return b }; a.Iterator = function (a) { this.arrayList = a }; a.Iterator.prototype.arrayList = null; a.Iterator.prototype.position = 0; a.Iterator.prototype.next = function () { if (this.position === this.arrayList.size()) throw new f; return this.arrayList.get(this.position++) }; a.Iterator.prototype.hasNext = function () {
                    return this.position <
                    this.arrayList.size() ? !0 : !1
                }; a.Iterator.prototype.remove = function () { throw new e; }; d.exports = a
            }, "Arrays.js": function (c, d, b) {
                function a() { } a.sort = function () {
                    var a = arguments[0], b, f, m; if (1 === arguments.length) a.sort(); else if (2 === arguments.length) f = arguments[1], m = function (a, b) { return f.compare(a, b) }, a.sort(m); else if (3 === arguments.length) for (b = a.slice(arguments[1], arguments[2]), b.sort(), m = a.slice(0, arguments[1]).concat(b, a.slice(arguments[2], a.length)), a.splice(0, a.length), b = 0; b < m.length; b++) a.push(m[b]);
                    else if (4 === arguments.length) for (b = a.slice(arguments[1], arguments[2]), f = arguments[3], m = function (a, b) { return f.compare(a, b) }, b.sort(m), m = a.slice(0, arguments[1]).concat(b, a.slice(arguments[2], a.length)), a.splice(0, a.length), b = 0; b < m.length; b++) a.push(m[b])
                }; a.asList = function (a) { for (var b = new javascript.util.ArrayList, f = 0, m = a.length; f < m; f++) b.add(a[f]); return b }; d.exports = a
            }, "Collection.js": function (c, d, b) {
                function a() { } b("./Iterator"); a.prototype.add = function (a) { }; a.prototype.addAll = function (a) { }; a.prototype.isEmpty =
                function () { }; a.prototype.iterator = function () { }; a.prototype.size = function () { }; a.prototype.toArray = function () { }; a.prototype.remove = function (a) { }; d.exports = a
            }, "EmptyStackException.js": function (c, d, b) { function a(a) { this.message = a || "" } a.prototype = Error(); a.prototype.name = "EmptyStackException"; d.exports = a }, "HashMap.js": function (c, d, b) {
                function a() { this.object = {} } c = b("./Map"); var h = b("./ArrayList"); a.prototype = new c; a.prototype.object = null; a.prototype.get = function (a) { return this.object[a] || null }; a.prototype.put =
                function (a, b) { return this.object[a] = b }; a.prototype.values = function () { var a = new h, b; for (b in this.object) this.object.hasOwnProperty(b) && a.add(this.object[b]); return a }; a.prototype.size = function () { return this.values().size() }; d.exports = a
            }, "HashSet.js": function (c, d, b) {
                function a(a) { this.array = []; a instanceof h && this.addAll(a) } var h = b("./Collection"); c = b("./Set"); var e = b("./OperationNotSupported"), f = b("./NoSuchElementException"); a.prototype = new c; a.prototype.array = null; a.prototype.contains = function (a) {
                    for (var b =
                    0, e = this.array.length; b < e; b++) if (this.array[b] === a) return !0; return !1
                }; a.prototype.add = function (a) { if (this.contains(a)) return !1; this.array.push(a); return !0 }; a.prototype.addAll = function (a) { for (a = a.iterator() ; a.hasNext() ;) this.add(a.next()); return !0 }; a.prototype.remove = function (a) { throw new e; }; a.prototype.size = function () { return this.array.length }; a.prototype.isEmpty = function () { return 0 === this.array.length }; a.prototype.toArray = function () {
                    for (var a = [], b = 0, e = this.array.length; b < e; b++) a.push(this.array[b]);
                    return a
                }; a.prototype.iterator = function () { return new a.Iterator(this) }; a.Iterator = function (a) { this.hashSet = a }; a.Iterator.prototype.hashSet = null; a.Iterator.prototype.position = 0; a.Iterator.prototype.next = function () { if (this.position === this.hashSet.size()) throw new f; return this.hashSet.array[this.position++] }; a.Iterator.prototype.hasNext = function () { return this.position < this.hashSet.size() ? !0 : !1 }; a.Iterator.prototype.remove = function () { throw new javascript.util.OperationNotSupported; }; d.exports = a
            }, "IndexOutOfBoundsException.js": function (c,
            d, b) { function a(a) { this.message = a || "" } a.prototype = Error(); a.prototype.name = "IndexOutOfBoundsException"; d.exports = a }, "Iterator.js": function (c, d, b) { function a() { } a.prototype.hasNext = function () { }; a.prototype.next = function () { }; a.prototype.remove = function () { }; d.exports = a }, "List.js": function (c, d, b) { function a() { } c = b("./Collection"); a.prototype = new c; a.prototype.get = function (a) { }; a.prototype.set = function (a, b) { }; a.prototype.isEmpty = function () { }; d.exports = a }, "Map.js": function (c, d, b) {
                function a() { } a.prototype.get =
                function (a) { }; a.prototype.put = function (a, b) { }; a.prototype.size = function () { }; a.prototype.values = function () { }; d.exports = a
            }, "NoSuchElementException.js": function (c, d, b) { function a(a) { this.message = a || "" } a.prototype = Error(); a.prototype.name = "NoSuchElementException"; d.exports = a }, "OperationNotSupported.js": function (c, d, b) { function a(a) { this.message = a || "" } a.prototype = Error(); a.prototype.name = "OperationNotSupported"; d.exports = a }, "Set.js": function (c, d, b) {
                function a() { } c = b("./Collection"); a.prototype = new c; a.prototype.contains =
                function (a) { }; d.exports = a
            }, "SortedMap.js": function (c, d, b) { function a() { } c = b("./Map"); a.prototype = new c; d.exports = a }, "SortedSet.js": function (c, d, b) { function a() { } c = b("./Set"); a.prototype = new c; d.exports = a }, "Stack.js": function (c, d, b) {
                function a() { this.array = [] } c = b("./List"); var h = b("./EmptyStackException"); a.prototype = new c; a.prototype.array = null; a.prototype.push = function (a) { this.array.push(a); return a }; a.prototype.pop = function (a) { if (0 === this.array.length) throw new h; return this.array.pop() }; a.prototype.peek =
                function () { if (0 === this.array.length) throw new h; return this.array[this.array.length - 1] }; a.prototype.empty = function (a) { return 0 === this.array.length ? !0 : !1 }; a.prototype.isEmpty = function () { return this.empty() }; a.prototype.search = function (a) { return this.array.indexOf(a) }; a.prototype.size = function () { return this.array.length }; a.prototype.toArray = function () { for (var a = [], b = 0, c = this.array.length; b < c; b++) a.push(this.array[b]); return a }; d.exports = a
            }, "TreeMap.js": function (c, d, b) {
                function a() { this.array = [] } c = b("./Map");
                b("./SortedMap"); var h = b("./ArrayList"); a.prototype = new c; a.prototype.array = null; a.prototype.get = function (a) { for (var b = 0, c = this.array.length; b < c; b++) { var d = this.array[b]; if (0 === d.key.compareTo(a)) return d.value } return null }; a.prototype.put = function (a, b) { var c = this.get(a); if (c) { var d = c.value; c.value = b; return d } for (var d = { key: a, value: b }, k = 0, h = this.array.length; k < h; k++) if (c = this.array[k], 1 === c.key.compareTo(a)) return this.array.splice(k, 0, d), null; this.array.push({ key: a, value: b }); return null }; a.prototype.values =
                function () { for (var a = new h, b = 0, c = this.array.length; b < c; b++) a.add(this.array[b].value); return a }; a.prototype.size = function () { return this.values().size() }; d.exports = a
            }, "TreeSet.js": function (c, d, b) {
                function a(a) { this.array = []; a instanceof h && this.addAll(a) } var h = b("./Collection"); c = b("./SortedSet"); var e = b("./OperationNotSupported"), f = b("./NoSuchElementException"); a.prototype = new c; a.prototype.array = null; a.prototype.contains = function (a) {
                    for (var b = 0, c = this.array.length; b < c; b++) if (0 === this.array[b].compareTo(a)) return !0;
                    return !1
                }; a.prototype.add = function (a) { if (this.contains(a)) return !1; for (var b = 0, c = this.array.length; b < c; b++) if (1 === this.array[b].compareTo(a)) return this.array.splice(b, 0, a), !0; this.array.push(a); return !0 }; a.prototype.addAll = function (a) { for (a = a.iterator() ; a.hasNext() ;) this.add(a.next()); return !0 }; a.prototype.remove = function (a) { throw new e; }; a.prototype.size = function () { return this.array.length }; a.prototype.isEmpty = function () { return 0 === this.array.length }; a.prototype.toArray = function () {
                    for (var a = [],
                    b = 0, c = this.array.length; b < c; b++) a.push(this.array[b]); return a
                }; a.prototype.iterator = function () { return new a.Iterator(this) }; a.Iterator = function (a) { this.treeSet = a }; a.Iterator.prototype.treeSet = null; a.Iterator.prototype.position = 0; a.Iterator.prototype.next = function () { if (this.position === this.treeSet.size()) throw new f; return this.treeSet.array[this.position++] }; a.Iterator.prototype.hasNext = function () { return this.position < this.treeSet.size() ? !0 : !1 }; a.Iterator.prototype.remove = function () {
                    throw new e;
                }; d.exports = a
            }, "browser.js": function (c, d, b) { javascript = { util: b("./") } }, "index.js": function (c, d, b) { d.exports = { ArrayList: b("./ArrayList"), Arrays: b("./Arrays"), Collection: b("./Collection"), HashMap: b("./HashMap"), HashSet: b("./HashSet"), Iterator: b("./Iterator"), List: b("./List"), Map: b("./Map"), Set: b("./Set"), SortedMap: b("./SortedMap"), SortedSet: b("./SortedSet"), Stack: b("./Stack"), TreeMap: b("./TreeMap"), TreeSet: b("./TreeSet") } }
        }
    }
})("javascript.util/lib/browser");
