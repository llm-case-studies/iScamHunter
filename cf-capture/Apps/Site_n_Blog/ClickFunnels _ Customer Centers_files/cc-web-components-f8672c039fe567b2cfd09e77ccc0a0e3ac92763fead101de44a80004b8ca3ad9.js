(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // <define:process>
  var define_process_default;
  var init_define_process = __esm({
    "<define:process>"() {
      define_process_default = { env: { NODE_ENV: "production", RAILS_ENV: "production" } };
    }
  });

  // node_modules/jquery/dist/jquery.js
  var require_jquery = __commonJS({
    "node_modules/jquery/dist/jquery.js"(exports, module) {
      init_define_process();
      init_jquery();
      (function(global2, factory) {
        "use strict";
        if (typeof module === "object" && typeof module.exports === "object") {
          module.exports = global2.document ? factory(global2, true) : function(w2) {
            if (!w2.document) {
              throw new Error("jQuery requires a window with a document");
            }
            return factory(w2);
          };
        } else {
          factory(global2);
        }
      })(typeof window !== "undefined" ? window : exports, function(window2, noGlobal) {
        "use strict";
        var arr = [];
        var getProto = Object.getPrototypeOf;
        var slice = arr.slice;
        var flat = arr.flat ? function(array) {
          return arr.flat.call(array);
        } : function(array) {
          return arr.concat.apply([], array);
        };
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var fnToString = hasOwn.toString;
        var ObjectFunctionString = fnToString.call(Object);
        var support = {};
        var isFunction = function isFunction2(obj) {
          return typeof obj === "function" && typeof obj.nodeType !== "number";
        };
        var isWindow = function isWindow2(obj) {
          return obj != null && obj === obj.window;
        };
        var document2 = window2.document;
        var preservedScriptAttributes = {
          type: true,
          src: true,
          nonce: true,
          noModule: true
        };
        function DOMEval(code, node, doc) {
          doc = doc || document2;
          var i10, val, script = doc.createElement("script");
          script.text = code;
          if (node) {
            for (i10 in preservedScriptAttributes) {
              val = node[i10] || node.getAttribute && node.getAttribute(i10);
              if (val) {
                script.setAttribute(i10, val);
              }
            }
          }
          doc.head.appendChild(script).parentNode.removeChild(script);
        }
        function toType(obj) {
          if (obj == null) {
            return obj + "";
          }
          return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
        }
        var version = "3.5.1", jQuery = function(selector, context) {
          return new jQuery.fn.init(selector, context);
        };
        jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,
          constructor: jQuery,
          // The default length of a jQuery object is 0
          length: 0,
          toArray: function() {
            return slice.call(this);
          },
          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function(num) {
            if (num == null) {
              return slice.call(this);
            }
            return num < 0 ? this[num + this.length] : this[num];
          },
          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function(elems) {
            var ret = jQuery.merge(this.constructor(), elems);
            ret.prevObject = this;
            return ret;
          },
          // Execute a callback for every element in the matched set.
          each: function(callback) {
            return jQuery.each(this, callback);
          },
          map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i10) {
              return callback.call(elem, i10, elem);
            }));
          },
          slice: function() {
            return this.pushStack(slice.apply(this, arguments));
          },
          first: function() {
            return this.eq(0);
          },
          last: function() {
            return this.eq(-1);
          },
          even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i10) {
              return (i10 + 1) % 2;
            }));
          },
          odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i10) {
              return i10 % 2;
            }));
          },
          eq: function(i10) {
            var len = this.length, j2 = +i10 + (i10 < 0 ? len : 0);
            return this.pushStack(j2 >= 0 && j2 < len ? [this[j2]] : []);
          },
          end: function() {
            return this.prevObject || this.constructor();
          },
          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push,
          sort: arr.sort,
          splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
          var options, name, src, copy2, copyIsArray, clone, target = arguments[0] || {}, i10 = 1, length = arguments.length, deep = false;
          if (typeof target === "boolean") {
            deep = target;
            target = arguments[i10] || {};
            i10++;
          }
          if (typeof target !== "object" && !isFunction(target)) {
            target = {};
          }
          if (i10 === length) {
            target = this;
            i10--;
          }
          for (; i10 < length; i10++) {
            if ((options = arguments[i10]) != null) {
              for (name in options) {
                copy2 = options[name];
                if (name === "__proto__" || target === copy2) {
                  continue;
                }
                if (deep && copy2 && (jQuery.isPlainObject(copy2) || (copyIsArray = Array.isArray(copy2)))) {
                  src = target[name];
                  if (copyIsArray && !Array.isArray(src)) {
                    clone = [];
                  } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                    clone = {};
                  } else {
                    clone = src;
                  }
                  copyIsArray = false;
                  target[name] = jQuery.extend(deep, clone, copy2);
                } else if (copy2 !== void 0) {
                  target[name] = copy2;
                }
              }
            }
          }
          return target;
        };
        jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
          // Assume jQuery is ready without the ready module
          isReady: true,
          error: function(msg) {
            throw new Error(msg);
          },
          noop: function() {
          },
          isPlainObject: function(obj) {
            var proto, Ctor;
            if (!obj || toString.call(obj) !== "[object Object]") {
              return false;
            }
            proto = getProto(obj);
            if (!proto) {
              return true;
            }
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
          },
          isEmptyObject: function(obj) {
            var name;
            for (name in obj) {
              return false;
            }
            return true;
          },
          // Evaluates a script in a provided context; falls back to the global one
          // if not specified.
          globalEval: function(code, options, doc) {
            DOMEval(code, { nonce: options && options.nonce }, doc);
          },
          each: function(obj, callback) {
            var length, i10 = 0;
            if (isArrayLike(obj)) {
              length = obj.length;
              for (; i10 < length; i10++) {
                if (callback.call(obj[i10], i10, obj[i10]) === false) {
                  break;
                }
              }
            } else {
              for (i10 in obj) {
                if (callback.call(obj[i10], i10, obj[i10]) === false) {
                  break;
                }
              }
            }
            return obj;
          },
          // results is for internal usage only
          makeArray: function(arr2, results) {
            var ret = results || [];
            if (arr2 != null) {
              if (isArrayLike(Object(arr2))) {
                jQuery.merge(
                  ret,
                  typeof arr2 === "string" ? [arr2] : arr2
                );
              } else {
                push.call(ret, arr2);
              }
            }
            return ret;
          },
          inArray: function(elem, arr2, i10) {
            return arr2 == null ? -1 : indexOf.call(arr2, elem, i10);
          },
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          merge: function(first, second) {
            var len = +second.length, j2 = 0, i10 = first.length;
            for (; j2 < len; j2++) {
              first[i10++] = second[j2];
            }
            first.length = i10;
            return first;
          },
          grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i10 = 0, length = elems.length, callbackExpect = !invert;
            for (; i10 < length; i10++) {
              callbackInverse = !callback(elems[i10], i10);
              if (callbackInverse !== callbackExpect) {
                matches.push(elems[i10]);
              }
            }
            return matches;
          },
          // arg is for internal usage only
          map: function(elems, callback, arg) {
            var length, value, i10 = 0, ret = [];
            if (isArrayLike(elems)) {
              length = elems.length;
              for (; i10 < length; i10++) {
                value = callback(elems[i10], i10, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            } else {
              for (i10 in elems) {
                value = callback(elems[i10], i10, arg);
                if (value != null) {
                  ret.push(value);
                }
              }
            }
            return flat(ret);
          },
          // A global GUID counter for objects
          guid: 1,
          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support
        });
        if (typeof Symbol === "function") {
          jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
        }
        jQuery.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
          function(_i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
          }
        );
        function isArrayLike(obj) {
          var length = !!obj && "length" in obj && obj.length, type = toType(obj);
          if (isFunction(obj) || isWindow(obj)) {
            return false;
          }
          return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
        }
        var Sizzle = (
          /*!
           * Sizzle CSS Selector Engine v2.3.5
           * https://sizzlejs.com/
           *
           * Copyright JS Foundation and other contributors
           * Released under the MIT license
           * https://js.foundation/
           *
           * Date: 2020-03-14
           */
          function(window3) {
            var i10, support2, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document3, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * /* @__PURE__ */ new Date(), preferredDoc = window3.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a4, b3) {
              if (a4 === b3) {
                hasDuplicate = true;
              }
              return 0;
            }, hasOwn2 = {}.hasOwnProperty, arr2 = [], pop = arr2.pop, pushNative = arr2.push, push2 = arr2.push, slice2 = arr2.slice, indexOf2 = function(list, elem) {
              var i11 = 0, len = list.length;
              for (; i11 < len; i11++) {
                if (list[i11] === elem) {
                  return i11;
                }
              }
              return -1;
            }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", whitespace = "[\\x20\\t\\r\\n\\f]", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
            // or strings [capture 3 or capture 4]"
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rtrim2 = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
              "ID": new RegExp("^#(" + identifier + ")"),
              "CLASS": new RegExp("^\\.(" + identifier + ")"),
              "TAG": new RegExp("^(" + identifier + "|[*])"),
              "ATTR": new RegExp("^" + attributes),
              "PSEUDO": new RegExp("^" + pseudos),
              "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
              "bool": new RegExp("^(?:" + booleans + ")$", "i"),
              // For use in libraries implementing .is()
              // We use this for POS matching in `select`
              "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
            }, rhtml2 = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
              var high = "0x" + escape.slice(1) - 65536;
              return nonHex ? (
                // Strip the backslash prefix from a non-hex escape sequence
                nonHex
              ) : (
                // Replace a hexadecimal escape sequence with the encoded Unicode code point
                // Support: IE <=11+
                // For values outside the Basic Multilingual Plane (BMP), manually construct a
                // surrogate pair
                high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
              );
            }, rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
              if (asCodePoint) {
                if (ch === "\0") {
                  return "\uFFFD";
                }
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
              }
              return "\\" + ch;
            }, unloadHandler = function() {
              setDocument();
            }, inDisabledFieldset = addCombinator(
              function(elem) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
              },
              { dir: "parentNode", next: "legend" }
            );
            try {
              push2.apply(
                arr2 = slice2.call(preferredDoc.childNodes),
                preferredDoc.childNodes
              );
              arr2[preferredDoc.childNodes.length].nodeType;
            } catch (e12) {
              push2 = {
                apply: arr2.length ? (
                  // Leverage slice if possible
                  function(target, els) {
                    pushNative.apply(target, slice2.call(els));
                  }
                ) : (
                  // Support: IE<9
                  // Otherwise append directly
                  function(target, els) {
                    var j2 = target.length, i11 = 0;
                    while (target[j2++] = els[i11++]) {
                    }
                    target.length = j2 - 1;
                  }
                )
              };
            }
            function Sizzle2(selector, context, results, seed) {
              var m3, i11, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
              results = results || [];
              if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
                return results;
              }
              if (!seed) {
                setDocument(context);
                context = context || document3;
                if (documentIsHTML) {
                  if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
                    if (m3 = match[1]) {
                      if (nodeType === 9) {
                        if (elem = context.getElementById(m3)) {
                          if (elem.id === m3) {
                            results.push(elem);
                            return results;
                          }
                        } else {
                          return results;
                        }
                      } else {
                        if (newContext && (elem = newContext.getElementById(m3)) && contains(context, elem) && elem.id === m3) {
                          results.push(elem);
                          return results;
                        }
                      }
                    } else if (match[2]) {
                      push2.apply(results, context.getElementsByTagName(selector));
                      return results;
                    } else if ((m3 = match[3]) && support2.getElementsByClassName && context.getElementsByClassName) {
                      push2.apply(results, context.getElementsByClassName(m3));
                      return results;
                    }
                  }
                  if (support2.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && // Support: IE 8 only
                  // Exclude object elements
                  (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                    newSelector = selector;
                    newContext = context;
                    if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                      newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                      if (newContext !== context || !support2.scope) {
                        if (nid = context.getAttribute("id")) {
                          nid = nid.replace(rcssescape, fcssescape);
                        } else {
                          context.setAttribute("id", nid = expando);
                        }
                      }
                      groups = tokenize(selector);
                      i11 = groups.length;
                      while (i11--) {
                        groups[i11] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i11]);
                      }
                      newSelector = groups.join(",");
                    }
                    try {
                      push2.apply(
                        results,
                        newContext.querySelectorAll(newSelector)
                      );
                      return results;
                    } catch (qsaError) {
                      nonnativeSelectorCache(selector, true);
                    } finally {
                      if (nid === expando) {
                        context.removeAttribute("id");
                      }
                    }
                  }
                }
              }
              return select(selector.replace(rtrim2, "$1"), context, results, seed);
            }
            function createCache() {
              var keys = [];
              function cache(key, value) {
                if (keys.push(key + " ") > Expr.cacheLength) {
                  delete cache[keys.shift()];
                }
                return cache[key + " "] = value;
              }
              return cache;
            }
            function markFunction(fn) {
              fn[expando] = true;
              return fn;
            }
            function assert(fn) {
              var el = document3.createElement("fieldset");
              try {
                return !!fn(el);
              } catch (e12) {
                return false;
              } finally {
                if (el.parentNode) {
                  el.parentNode.removeChild(el);
                }
                el = null;
              }
            }
            function addHandle(attrs, handler) {
              var arr3 = attrs.split("|"), i11 = arr3.length;
              while (i11--) {
                Expr.attrHandle[arr3[i11]] = handler;
              }
            }
            function siblingCheck(a4, b3) {
              var cur = b3 && a4, diff = cur && a4.nodeType === 1 && b3.nodeType === 1 && a4.sourceIndex - b3.sourceIndex;
              if (diff) {
                return diff;
              }
              if (cur) {
                while (cur = cur.nextSibling) {
                  if (cur === b3) {
                    return -1;
                  }
                }
              }
              return a4 ? 1 : -1;
            }
            function createInputPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
              };
            }
            function createButtonPseudo(type) {
              return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
              };
            }
            function createDisabledPseudo(disabled) {
              return function(elem) {
                if ("form" in elem) {
                  if (elem.parentNode && elem.disabled === false) {
                    if ("label" in elem) {
                      if ("label" in elem.parentNode) {
                        return elem.parentNode.disabled === disabled;
                      } else {
                        return elem.disabled === disabled;
                      }
                    }
                    return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                    /* jshint -W018 */
                    elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                  }
                  return elem.disabled === disabled;
                } else if ("label" in elem) {
                  return elem.disabled === disabled;
                }
                return false;
              };
            }
            function createPositionalPseudo(fn) {
              return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches2) {
                  var j2, matchIndexes = fn([], seed.length, argument), i11 = matchIndexes.length;
                  while (i11--) {
                    if (seed[j2 = matchIndexes[i11]]) {
                      seed[j2] = !(matches2[j2] = seed[j2]);
                    }
                  }
                });
              });
            }
            function testContext(context) {
              return context && typeof context.getElementsByTagName !== "undefined" && context;
            }
            support2 = Sizzle2.support = {};
            isXML = Sizzle2.isXML = function(elem) {
              var namespace = elem.namespaceURI, docElem2 = (elem.ownerDocument || elem).documentElement;
              return !rhtml2.test(namespace || docElem2 && docElem2.nodeName || "HTML");
            };
            setDocument = Sizzle2.setDocument = function(node) {
              var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
              if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
                return document3;
              }
              document3 = doc;
              docElem = document3.documentElement;
              documentIsHTML = !isXML(document3);
              if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
                if (subWindow.addEventListener) {
                  subWindow.addEventListener("unload", unloadHandler, false);
                } else if (subWindow.attachEvent) {
                  subWindow.attachEvent("onunload", unloadHandler);
                }
              }
              support2.scope = assert(function(el) {
                docElem.appendChild(el).appendChild(document3.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
              });
              support2.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
              });
              support2.getElementsByTagName = assert(function(el) {
                el.appendChild(document3.createComment(""));
                return !el.getElementsByTagName("*").length;
              });
              support2.getElementsByClassName = rnative.test(document3.getElementsByClassName);
              support2.getById = assert(function(el) {
                docElem.appendChild(el).id = expando;
                return !document3.getElementsByName || !document3.getElementsByName(expando).length;
              });
              if (support2.getById) {
                Expr.filter["ID"] = function(id3) {
                  var attrId = id3.replace(runescape, funescape);
                  return function(elem) {
                    return elem.getAttribute("id") === attrId;
                  };
                };
                Expr.find["ID"] = function(id3, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var elem = context.getElementById(id3);
                    return elem ? [elem] : [];
                  }
                };
              } else {
                Expr.filter["ID"] = function(id3) {
                  var attrId = id3.replace(runescape, funescape);
                  return function(elem) {
                    var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                    return node2 && node2.value === attrId;
                  };
                };
                Expr.find["ID"] = function(id3, context) {
                  if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var node2, i11, elems, elem = context.getElementById(id3);
                    if (elem) {
                      node2 = elem.getAttributeNode("id");
                      if (node2 && node2.value === id3) {
                        return [elem];
                      }
                      elems = context.getElementsByName(id3);
                      i11 = 0;
                      while (elem = elems[i11++]) {
                        node2 = elem.getAttributeNode("id");
                        if (node2 && node2.value === id3) {
                          return [elem];
                        }
                      }
                    }
                    return [];
                  }
                };
              }
              Expr.find["TAG"] = support2.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                  return context.getElementsByTagName(tag);
                } else if (support2.qsa) {
                  return context.querySelectorAll(tag);
                }
              } : function(tag, context) {
                var elem, tmp = [], i11 = 0, results = context.getElementsByTagName(tag);
                if (tag === "*") {
                  while (elem = results[i11++]) {
                    if (elem.nodeType === 1) {
                      tmp.push(elem);
                    }
                  }
                  return tmp;
                }
                return results;
              };
              Expr.find["CLASS"] = support2.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                  return context.getElementsByClassName(className);
                }
              };
              rbuggyMatches = [];
              rbuggyQSA = [];
              if (support2.qsa = rnative.test(document3.querySelectorAll)) {
                assert(function(el) {
                  var input;
                  docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a><select id='" + expando + "-\r\\' msallowcapture=''><option selected=''></option></select>";
                  if (el.querySelectorAll("[msallowcapture^='']").length) {
                    rbuggyQSA.push("[*^$]=" + whitespace + `*(?:''|"")`);
                  }
                  if (!el.querySelectorAll("[selected]").length) {
                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                  }
                  if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                    rbuggyQSA.push("~=");
                  }
                  input = document3.createElement("input");
                  input.setAttribute("name", "");
                  el.appendChild(input);
                  if (!el.querySelectorAll("[name='']").length) {
                    rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
                  }
                  if (!el.querySelectorAll(":checked").length) {
                    rbuggyQSA.push(":checked");
                  }
                  if (!el.querySelectorAll("a#" + expando + "+*").length) {
                    rbuggyQSA.push(".#.+[+~]");
                  }
                  el.querySelectorAll("\\\f");
                  rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                  el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var input = document3.createElement("input");
                  input.setAttribute("type", "hidden");
                  el.appendChild(input).setAttribute("name", "D");
                  if (el.querySelectorAll("[name=d]").length) {
                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                  }
                  if (el.querySelectorAll(":enabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                  }
                  docElem.appendChild(el).disabled = true;
                  if (el.querySelectorAll(":disabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                  }
                  el.querySelectorAll("*,:x");
                  rbuggyQSA.push(",.*:");
                });
              }
              if (support2.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
                assert(function(el) {
                  support2.disconnectedMatch = matches.call(el, "*");
                  matches.call(el, "[s!='']:x");
                  rbuggyMatches.push("!=", pseudos);
                });
              }
              rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
              rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
              hasCompare = rnative.test(docElem.compareDocumentPosition);
              contains = hasCompare || rnative.test(docElem.contains) ? function(a4, b3) {
                var adown = a4.nodeType === 9 ? a4.documentElement : a4, bup = b3 && b3.parentNode;
                return a4 === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a4.compareDocumentPosition && a4.compareDocumentPosition(bup) & 16));
              } : function(a4, b3) {
                if (b3) {
                  while (b3 = b3.parentNode) {
                    if (b3 === a4) {
                      return true;
                    }
                  }
                }
                return false;
              };
              sortOrder = hasCompare ? function(a4, b3) {
                if (a4 === b3) {
                  hasDuplicate = true;
                  return 0;
                }
                var compare = !a4.compareDocumentPosition - !b3.compareDocumentPosition;
                if (compare) {
                  return compare;
                }
                compare = (a4.ownerDocument || a4) == (b3.ownerDocument || b3) ? a4.compareDocumentPosition(b3) : (
                  // Otherwise we know they are disconnected
                  1
                );
                if (compare & 1 || !support2.sortDetached && b3.compareDocumentPosition(a4) === compare) {
                  if (a4 == document3 || a4.ownerDocument == preferredDoc && contains(preferredDoc, a4)) {
                    return -1;
                  }
                  if (b3 == document3 || b3.ownerDocument == preferredDoc && contains(preferredDoc, b3)) {
                    return 1;
                  }
                  return sortInput ? indexOf2(sortInput, a4) - indexOf2(sortInput, b3) : 0;
                }
                return compare & 4 ? -1 : 1;
              } : function(a4, b3) {
                if (a4 === b3) {
                  hasDuplicate = true;
                  return 0;
                }
                var cur, i11 = 0, aup = a4.parentNode, bup = b3.parentNode, ap = [a4], bp = [b3];
                if (!aup || !bup) {
                  return a4 == document3 ? -1 : b3 == document3 ? 1 : (
                    /* eslint-enable eqeqeq */
                    aup ? -1 : bup ? 1 : sortInput ? indexOf2(sortInput, a4) - indexOf2(sortInput, b3) : 0
                  );
                } else if (aup === bup) {
                  return siblingCheck(a4, b3);
                }
                cur = a4;
                while (cur = cur.parentNode) {
                  ap.unshift(cur);
                }
                cur = b3;
                while (cur = cur.parentNode) {
                  bp.unshift(cur);
                }
                while (ap[i11] === bp[i11]) {
                  i11++;
                }
                return i11 ? (
                  // Do a sibling check if the nodes have a common ancestor
                  siblingCheck(ap[i11], bp[i11])
                ) : (
                  // Otherwise nodes in our document sort first
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  /* eslint-disable eqeqeq */
                  ap[i11] == preferredDoc ? -1 : bp[i11] == preferredDoc ? 1 : (
                    /* eslint-enable eqeqeq */
                    0
                  )
                );
              };
              return document3;
            };
            Sizzle2.matches = function(expr, elements) {
              return Sizzle2(expr, null, null, elements);
            };
            Sizzle2.matchesSelector = function(elem, expr) {
              setDocument(elem);
              if (support2.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
                try {
                  var ret = matches.call(elem, expr);
                  if (ret || support2.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                  // fragment in IE 9
                  elem.document && elem.document.nodeType !== 11) {
                    return ret;
                  }
                } catch (e12) {
                  nonnativeSelectorCache(expr, true);
                }
              }
              return Sizzle2(expr, document3, null, [elem]).length > 0;
            };
            Sizzle2.contains = function(context, elem) {
              if ((context.ownerDocument || context) != document3) {
                setDocument(context);
              }
              return contains(context, elem);
            };
            Sizzle2.attr = function(elem, name) {
              if ((elem.ownerDocument || elem) != document3) {
                setDocument(elem);
              }
              var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn2.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
              return val !== void 0 ? val : support2.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
            };
            Sizzle2.escape = function(sel) {
              return (sel + "").replace(rcssescape, fcssescape);
            };
            Sizzle2.error = function(msg) {
              throw new Error("Syntax error, unrecognized expression: " + msg);
            };
            Sizzle2.uniqueSort = function(results) {
              var elem, duplicates = [], j2 = 0, i11 = 0;
              hasDuplicate = !support2.detectDuplicates;
              sortInput = !support2.sortStable && results.slice(0);
              results.sort(sortOrder);
              if (hasDuplicate) {
                while (elem = results[i11++]) {
                  if (elem === results[i11]) {
                    j2 = duplicates.push(i11);
                  }
                }
                while (j2--) {
                  results.splice(duplicates[j2], 1);
                }
              }
              sortInput = null;
              return results;
            };
            getText = Sizzle2.getText = function(elem) {
              var node, ret = "", i11 = 0, nodeType = elem.nodeType;
              if (!nodeType) {
                while (node = elem[i11++]) {
                  ret += getText(node);
                }
              } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                if (typeof elem.textContent === "string") {
                  return elem.textContent;
                } else {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    ret += getText(elem);
                  }
                }
              } else if (nodeType === 3 || nodeType === 4) {
                return elem.nodeValue;
              }
              return ret;
            };
            Expr = Sizzle2.selectors = {
              // Can be adjusted by the user
              cacheLength: 50,
              createPseudo: markFunction,
              match: matchExpr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: true },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: true },
                "~": { dir: "previousSibling" }
              },
              preFilter: {
                "ATTR": function(match) {
                  match[1] = match[1].replace(runescape, funescape);
                  match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                  if (match[2] === "~=") {
                    match[3] = " " + match[3] + " ";
                  }
                  return match.slice(0, 4);
                },
                "CHILD": function(match) {
                  match[1] = match[1].toLowerCase();
                  if (match[1].slice(0, 3) === "nth") {
                    if (!match[3]) {
                      Sizzle2.error(match[0]);
                    }
                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                  } else if (match[3]) {
                    Sizzle2.error(match[0]);
                  }
                  return match;
                },
                "PSEUDO": function(match) {
                  var excess, unquoted = !match[6] && match[2];
                  if (matchExpr["CHILD"].test(match[0])) {
                    return null;
                  }
                  if (match[3]) {
                    match[2] = match[4] || match[5] || "";
                  } else if (unquoted && rpseudo.test(unquoted) && // Get excess from tokenize (recursively)
                  (excess = tokenize(unquoted, true)) && // advance to the next closing parenthesis
                  (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                    match[0] = match[0].slice(0, excess);
                    match[2] = unquoted.slice(0, excess);
                  }
                  return match.slice(0, 3);
                }
              },
              filter: {
                "TAG": function(nodeNameSelector) {
                  var nodeName2 = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                  return nodeNameSelector === "*" ? function() {
                    return true;
                  } : function(elem) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === nodeName2;
                  };
                },
                "CLASS": function(className) {
                  var pattern = classCache[className + " "];
                  return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(
                    className,
                    function(elem) {
                      return pattern.test(
                        typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
                      );
                    }
                  );
                },
                "ATTR": function(name, operator, check) {
                  return function(elem) {
                    var result = Sizzle2.attr(elem, name);
                    if (result == null) {
                      return operator === "!=";
                    }
                    if (!operator) {
                      return true;
                    }
                    result += "";
                    return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                  };
                },
                "CHILD": function(type, what, _argument, first, last) {
                  var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                  return first === 1 && last === 0 ? (
                    // Shortcut for :nth-*(n)
                    function(elem) {
                      return !!elem.parentNode;
                    }
                  ) : function(elem, _context, xml) {
                    var cache, uniqueCache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                    if (parent) {
                      if (simple) {
                        while (dir2) {
                          node = elem;
                          while (node = node[dir2]) {
                            if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                              return false;
                            }
                          }
                          start = dir2 = type === "only" && !start && "nextSibling";
                        }
                        return true;
                      }
                      start = [forward ? parent.firstChild : parent.lastChild];
                      if (forward && useCache) {
                        node = parent;
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        cache = uniqueCache[type] || [];
                        nodeIndex = cache[0] === dirruns && cache[1];
                        diff = nodeIndex && cache[2];
                        node = nodeIndex && parent.childNodes[nodeIndex];
                        while (node = ++nodeIndex && node && node[dir2] || // Fallback to seeking `elem` from the start
                        (diff = nodeIndex = 0) || start.pop()) {
                          if (node.nodeType === 1 && ++diff && node === elem) {
                            uniqueCache[type] = [dirruns, nodeIndex, diff];
                            break;
                          }
                        }
                      } else {
                        if (useCache) {
                          node = elem;
                          outerCache = node[expando] || (node[expando] = {});
                          uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                          cache = uniqueCache[type] || [];
                          nodeIndex = cache[0] === dirruns && cache[1];
                          diff = nodeIndex;
                        }
                        if (diff === false) {
                          while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                            if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                              if (useCache) {
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                uniqueCache[type] = [dirruns, diff];
                              }
                              if (node === elem) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      diff -= last;
                      return diff === first || diff % first === 0 && diff / first >= 0;
                    }
                  };
                },
                "PSEUDO": function(pseudo, argument) {
                  var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle2.error("unsupported pseudo: " + pseudo);
                  if (fn[expando]) {
                    return fn(argument);
                  }
                  if (fn.length > 1) {
                    args = [pseudo, pseudo, "", argument];
                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                      var idx, matched = fn(seed, argument), i11 = matched.length;
                      while (i11--) {
                        idx = indexOf2(seed, matched[i11]);
                        seed[idx] = !(matches2[idx] = matched[i11]);
                      }
                    }) : function(elem) {
                      return fn(elem, 0, args);
                    };
                  }
                  return fn;
                }
              },
              pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                  var input = [], results = [], matcher = compile(selector.replace(rtrim2, "$1"));
                  return matcher[expando] ? markFunction(function(seed, matches2, _context, xml) {
                    var elem, unmatched = matcher(seed, null, xml, []), i11 = seed.length;
                    while (i11--) {
                      if (elem = unmatched[i11]) {
                        seed[i11] = !(matches2[i11] = elem);
                      }
                    }
                  }) : function(elem, _context, xml) {
                    input[0] = elem;
                    matcher(input, null, xml, results);
                    input[0] = null;
                    return !results.pop();
                  };
                }),
                "has": markFunction(function(selector) {
                  return function(elem) {
                    return Sizzle2(selector, elem).length > 0;
                  };
                }),
                "contains": markFunction(function(text) {
                  text = text.replace(runescape, funescape);
                  return function(elem) {
                    return (elem.textContent || getText(elem)).indexOf(text) > -1;
                  };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                  if (!ridentifier.test(lang || "")) {
                    Sizzle2.error("unsupported lang: " + lang);
                  }
                  lang = lang.replace(runescape, funescape).toLowerCase();
                  return function(elem) {
                    var elemLang;
                    do {
                      if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                        elemLang = elemLang.toLowerCase();
                        return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                      }
                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                    return false;
                  };
                }),
                // Miscellaneous
                "target": function(elem) {
                  var hash = window3.location && window3.location.hash;
                  return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                  return elem === docElem;
                },
                "focus": function(elem) {
                  return elem === document3.activeElement && (!document3.hasFocus || document3.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                  var nodeName2 = elem.nodeName.toLowerCase();
                  return nodeName2 === "input" && !!elem.checked || nodeName2 === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                  if (elem.parentNode) {
                    elem.parentNode.selectedIndex;
                  }
                  return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    if (elem.nodeType < 6) {
                      return false;
                    }
                  }
                  return true;
                },
                "parent": function(elem) {
                  return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                  return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                  return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                  var name = elem.nodeName.toLowerCase();
                  return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                  var attr;
                  return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && // Support: IE<8
                  // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                  ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                  return [0];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                  return [length - 1];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                  return [argument < 0 ? argument + length : argument];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                  var i11 = 0;
                  for (; i11 < length; i11 += 2) {
                    matchIndexes.push(i11);
                  }
                  return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                  var i11 = 1;
                  for (; i11 < length; i11 += 2) {
                    matchIndexes.push(i11);
                  }
                  return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i11 = argument < 0 ? argument + length : argument > length ? length : argument;
                  for (; --i11 >= 0; ) {
                    matchIndexes.push(i11);
                  }
                  return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                  var i11 = argument < 0 ? argument + length : argument;
                  for (; ++i11 < length; ) {
                    matchIndexes.push(i11);
                  }
                  return matchIndexes;
                })
              }
            };
            Expr.pseudos["nth"] = Expr.pseudos["eq"];
            for (i10 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
              Expr.pseudos[i10] = createInputPseudo(i10);
            }
            for (i10 in { submit: true, reset: true }) {
              Expr.pseudos[i10] = createButtonPseudo(i10);
            }
            function setFilters() {
            }
            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();
            tokenize = Sizzle2.tokenize = function(selector, parseOnly) {
              var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
              if (cached) {
                return parseOnly ? 0 : cached.slice(0);
              }
              soFar = selector;
              groups = [];
              preFilters = Expr.preFilter;
              while (soFar) {
                if (!matched || (match = rcomma.exec(soFar))) {
                  if (match) {
                    soFar = soFar.slice(match[0].length) || soFar;
                  }
                  groups.push(tokens = []);
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                  matched = match.shift();
                  tokens.push({
                    value: matched,
                    // Cast descendant combinators to space
                    type: match[0].replace(rtrim2, " ")
                  });
                  soFar = soFar.slice(matched.length);
                }
                for (type in Expr.filter) {
                  if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                      value: matched,
                      type,
                      matches: match
                    });
                    soFar = soFar.slice(matched.length);
                  }
                }
                if (!matched) {
                  break;
                }
              }
              return parseOnly ? soFar.length : soFar ? Sizzle2.error(selector) : (
                // Cache the tokens
                tokenCache(selector, groups).slice(0)
              );
            };
            function toSelector(tokens) {
              var i11 = 0, len = tokens.length, selector = "";
              for (; i11 < len; i11++) {
                selector += tokens[i11].value;
              }
              return selector;
            }
            function addCombinator(matcher, combinator, base) {
              var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
              return combinator.first ? (
                // Check against closest ancestor/preceding element
                function(elem, context, xml) {
                  while (elem = elem[dir2]) {
                    if (elem.nodeType === 1 || checkNonElements) {
                      return matcher(elem, context, xml);
                    }
                  }
                  return false;
                }
              ) : (
                // Check against all ancestor/preceding elements
                function(elem, context, xml) {
                  var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                  if (xml) {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) {
                          return true;
                        }
                      }
                    }
                  } else {
                    while (elem = elem[dir2]) {
                      if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {});
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                        if (skip && skip === elem.nodeName.toLowerCase()) {
                          elem = elem[dir2] || elem;
                        } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                          return newCache[2] = oldCache[2];
                        } else {
                          uniqueCache[key] = newCache;
                          if (newCache[2] = matcher(elem, context, xml)) {
                            return true;
                          }
                        }
                      }
                    }
                  }
                  return false;
                }
              );
            }
            function elementMatcher(matchers) {
              return matchers.length > 1 ? function(elem, context, xml) {
                var i11 = matchers.length;
                while (i11--) {
                  if (!matchers[i11](elem, context, xml)) {
                    return false;
                  }
                }
                return true;
              } : matchers[0];
            }
            function multipleContexts(selector, contexts, results) {
              var i11 = 0, len = contexts.length;
              for (; i11 < len; i11++) {
                Sizzle2(selector, contexts[i11], results);
              }
              return results;
            }
            function condense(unmatched, map, filter, context, xml) {
              var elem, newUnmatched = [], i11 = 0, len = unmatched.length, mapped = map != null;
              for (; i11 < len; i11++) {
                if (elem = unmatched[i11]) {
                  if (!filter || filter(elem, context, xml)) {
                    newUnmatched.push(elem);
                    if (mapped) {
                      map.push(i11);
                    }
                  }
                }
              }
              return newUnmatched;
            }
            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
              if (postFilter && !postFilter[expando]) {
                postFilter = setMatcher(postFilter);
              }
              if (postFinder && !postFinder[expando]) {
                postFinder = setMatcher(postFinder, postSelector);
              }
              return markFunction(function(seed, results, context, xml) {
                var temp, i11, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
                  selector || "*",
                  context.nodeType ? [context] : context,
                  []
                ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? (
                  // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                  postFinder || (seed ? preFilter : preexisting || postFilter) ? (
                    // ...intermediate processing is necessary
                    []
                  ) : (
                    // ...otherwise use results directly
                    results
                  )
                ) : matcherIn;
                if (matcher) {
                  matcher(matcherIn, matcherOut, context, xml);
                }
                if (postFilter) {
                  temp = condense(matcherOut, postMap);
                  postFilter(temp, [], context, xml);
                  i11 = temp.length;
                  while (i11--) {
                    if (elem = temp[i11]) {
                      matcherOut[postMap[i11]] = !(matcherIn[postMap[i11]] = elem);
                    }
                  }
                }
                if (seed) {
                  if (postFinder || preFilter) {
                    if (postFinder) {
                      temp = [];
                      i11 = matcherOut.length;
                      while (i11--) {
                        if (elem = matcherOut[i11]) {
                          temp.push(matcherIn[i11] = elem);
                        }
                      }
                      postFinder(null, matcherOut = [], temp, xml);
                    }
                    i11 = matcherOut.length;
                    while (i11--) {
                      if ((elem = matcherOut[i11]) && (temp = postFinder ? indexOf2(seed, elem) : preMap[i11]) > -1) {
                        seed[temp] = !(results[temp] = elem);
                      }
                    }
                  }
                } else {
                  matcherOut = condense(
                    matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
                  );
                  if (postFinder) {
                    postFinder(null, results, matcherOut, xml);
                  } else {
                    push2.apply(results, matcherOut);
                  }
                }
              });
            }
            function matcherFromTokens(tokens) {
              var checkContext, matcher, j2, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i11 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
                return elem === checkContext;
              }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf2(checkContext, elem) > -1;
              }, implicitRelative, true), matchers = [function(elem, context, xml) {
                var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                checkContext = null;
                return ret;
              }];
              for (; i11 < len; i11++) {
                if (matcher = Expr.relative[tokens[i11].type]) {
                  matchers = [addCombinator(elementMatcher(matchers), matcher)];
                } else {
                  matcher = Expr.filter[tokens[i11].type].apply(null, tokens[i11].matches);
                  if (matcher[expando]) {
                    j2 = ++i11;
                    for (; j2 < len; j2++) {
                      if (Expr.relative[tokens[j2].type]) {
                        break;
                      }
                    }
                    return setMatcher(
                      i11 > 1 && elementMatcher(matchers),
                      i11 > 1 && toSelector(
                        // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        tokens.slice(0, i11 - 1).concat({ value: tokens[i11 - 2].type === " " ? "*" : "" })
                      ).replace(rtrim2, "$1"),
                      matcher,
                      i11 < j2 && matcherFromTokens(tokens.slice(i11, j2)),
                      j2 < len && matcherFromTokens(tokens = tokens.slice(j2)),
                      j2 < len && toSelector(tokens)
                    );
                  }
                  matchers.push(matcher);
                }
              }
              return elementMatcher(matchers);
            }
            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
              var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j2, matcher, matchedCount = 0, i11 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find["TAG"]("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) {
                  outermostContext = context == document3 || context || outermost;
                }
                for (; i11 !== len && (elem = elems[i11]) != null; i11++) {
                  if (byElement && elem) {
                    j2 = 0;
                    if (!context && elem.ownerDocument != document3) {
                      setDocument(elem);
                      xml = !documentIsHTML;
                    }
                    while (matcher = elementMatchers[j2++]) {
                      if (matcher(elem, context || document3, xml)) {
                        results.push(elem);
                        break;
                      }
                    }
                    if (outermost) {
                      dirruns = dirrunsUnique;
                    }
                  }
                  if (bySet) {
                    if (elem = !matcher && elem) {
                      matchedCount--;
                    }
                    if (seed) {
                      unmatched.push(elem);
                    }
                  }
                }
                matchedCount += i11;
                if (bySet && i11 !== matchedCount) {
                  j2 = 0;
                  while (matcher = setMatchers[j2++]) {
                    matcher(unmatched, setMatched, context, xml);
                  }
                  if (seed) {
                    if (matchedCount > 0) {
                      while (i11--) {
                        if (!(unmatched[i11] || setMatched[i11])) {
                          setMatched[i11] = pop.call(results);
                        }
                      }
                    }
                    setMatched = condense(setMatched);
                  }
                  push2.apply(results, setMatched);
                  if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
                    Sizzle2.uniqueSort(results);
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                  outermostContext = contextBackup;
                }
                return unmatched;
              };
              return bySet ? markFunction(superMatcher) : superMatcher;
            }
            compile = Sizzle2.compile = function(selector, match) {
              var i11, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
              if (!cached) {
                if (!match) {
                  match = tokenize(selector);
                }
                i11 = match.length;
                while (i11--) {
                  cached = matcherFromTokens(match[i11]);
                  if (cached[expando]) {
                    setMatchers.push(cached);
                  } else {
                    elementMatchers.push(cached);
                  }
                }
                cached = compilerCache(
                  selector,
                  matcherFromGroupMatchers(elementMatchers, setMatchers)
                );
                cached.selector = selector;
              }
              return cached;
            };
            select = Sizzle2.select = function(selector, context, results, seed) {
              var i11, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
              results = results || [];
              if (match.length === 1) {
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                  context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                  if (!context) {
                    return results;
                  } else if (compiled) {
                    context = context.parentNode;
                  }
                  selector = selector.slice(tokens.shift().value.length);
                }
                i11 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while (i11--) {
                  token = tokens[i11];
                  if (Expr.relative[type = token.type]) {
                    break;
                  }
                  if (find = Expr.find[type]) {
                    if (seed = find(
                      token.matches[0].replace(runescape, funescape),
                      rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                    )) {
                      tokens.splice(i11, 1);
                      selector = seed.length && toSelector(tokens);
                      if (!selector) {
                        push2.apply(results, seed);
                        return results;
                      }
                      break;
                    }
                  }
                }
              }
              (compiled || compile(selector, match))(
                seed,
                context,
                !documentIsHTML,
                results,
                !context || rsibling.test(selector) && testContext(context.parentNode) || context
              );
              return results;
            };
            support2.sortStable = expando.split("").sort(sortOrder).join("") === expando;
            support2.detectDuplicates = !!hasDuplicate;
            setDocument();
            support2.sortDetached = assert(function(el) {
              return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
            });
            if (!assert(function(el) {
              el.innerHTML = "<a href='#'></a>";
              return el.firstChild.getAttribute("href") === "#";
            })) {
              addHandle("type|href|height|width", function(elem, name, isXML2) {
                if (!isXML2) {
                  return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
              });
            }
            if (!support2.attributes || !assert(function(el) {
              el.innerHTML = "<input/>";
              el.firstChild.setAttribute("value", "");
              return el.firstChild.getAttribute("value") === "";
            })) {
              addHandle("value", function(elem, _name, isXML2) {
                if (!isXML2 && elem.nodeName.toLowerCase() === "input") {
                  return elem.defaultValue;
                }
              });
            }
            if (!assert(function(el) {
              return el.getAttribute("disabled") == null;
            })) {
              addHandle(booleans, function(elem, name, isXML2) {
                var val;
                if (!isXML2) {
                  return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                }
              });
            }
            return Sizzle2;
          }(window2)
        );
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        jQuery.escapeSelector = Sizzle.escape;
        var dir = function(elem, dir2, until) {
          var matched = [], truncate = until !== void 0;
          while ((elem = elem[dir2]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
              if (truncate && jQuery(elem).is(until)) {
                break;
              }
              matched.push(elem);
            }
          }
          return matched;
        };
        var siblings = function(n9, elem) {
          var matched = [];
          for (; n9; n9 = n9.nextSibling) {
            if (n9.nodeType === 1 && n9 !== elem) {
              matched.push(n9);
            }
          }
          return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        function nodeName(elem, name) {
          return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        }
        ;
        var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function winnow(elements, qualifier, not) {
          if (isFunction(qualifier)) {
            return jQuery.grep(elements, function(elem, i10) {
              return !!qualifier.call(elem, i10, elem) !== not;
            });
          }
          if (qualifier.nodeType) {
            return jQuery.grep(elements, function(elem) {
              return elem === qualifier !== not;
            });
          }
          if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function(elem) {
              return indexOf.call(qualifier, elem) > -1 !== not;
            });
          }
          return jQuery.filter(qualifier, elements, not);
        }
        jQuery.filter = function(expr, elems, not) {
          var elem = elems[0];
          if (not) {
            expr = ":not(" + expr + ")";
          }
          if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
          }
          return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
            return elem2.nodeType === 1;
          }));
        };
        jQuery.fn.extend({
          find: function(selector) {
            var i10, ret, len = this.length, self = this;
            if (typeof selector !== "string") {
              return this.pushStack(jQuery(selector).filter(function() {
                for (i10 = 0; i10 < len; i10++) {
                  if (jQuery.contains(self[i10], this)) {
                    return true;
                  }
                }
              }));
            }
            ret = this.pushStack([]);
            for (i10 = 0; i10 < len; i10++) {
              jQuery.find(selector, self[i10], ret);
            }
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
          },
          filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
          },
          not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
          },
          is: function(selector) {
            return !!winnow(
              this,
              // If this is a positional/relative selector, check membership in the returned set
              // so $("p:first").is("p:last") won't return true for a doc with two "p".
              typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
              false
            ).length;
          }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
          var match, elem;
          if (!selector) {
            return this;
          }
          root = root || rootjQuery;
          if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
              match = [null, selector, null];
            } else {
              match = rquickExpr.exec(selector);
            }
            if (match && (match[1] || !context)) {
              if (match[1]) {
                context = context instanceof jQuery ? context[0] : context;
                jQuery.merge(this, jQuery.parseHTML(
                  match[1],
                  context && context.nodeType ? context.ownerDocument || context : document2,
                  true
                ));
                if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                  for (match in context) {
                    if (isFunction(this[match])) {
                      this[match](context[match]);
                    } else {
                      this.attr(match, context[match]);
                    }
                  }
                }
                return this;
              } else {
                elem = document2.getElementById(match[2]);
                if (elem) {
                  this[0] = elem;
                  this.length = 1;
                }
                return this;
              }
            } else if (!context || context.jquery) {
              return (context || root).find(selector);
            } else {
              return this.constructor(context).find(selector);
            }
          } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
          } else if (isFunction(selector)) {
            return root.ready !== void 0 ? root.ready(selector) : (
              // Execute immediately if ready is not present
              selector(jQuery)
            );
          }
          return jQuery.makeArray(selector, this);
        };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document2);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
          children: true,
          contents: true,
          next: true,
          prev: true
        };
        jQuery.fn.extend({
          has: function(target) {
            var targets = jQuery(target, this), l5 = targets.length;
            return this.filter(function() {
              var i10 = 0;
              for (; i10 < l5; i10++) {
                if (jQuery.contains(this, targets[i10])) {
                  return true;
                }
              }
            });
          },
          closest: function(selectors, context) {
            var cur, i10 = 0, l5 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            if (!rneedsContext.test(selectors)) {
              for (; i10 < l5; i10++) {
                for (cur = this[i10]; cur && cur !== context; cur = cur.parentNode) {
                  if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : (
                    // Don't pass non-elements to Sizzle
                    cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors)
                  ))) {
                    matched.push(cur);
                    break;
                  }
                }
              }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
          },
          // Determine the position of an element within the set
          index: function(elem) {
            if (!elem) {
              return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            if (typeof elem === "string") {
              return indexOf.call(jQuery(elem), this[0]);
            }
            return indexOf.call(
              this,
              // If it receives a jQuery object, the first element is used
              elem.jquery ? elem[0] : elem
            );
          },
          add: function(selector, context) {
            return this.pushStack(
              jQuery.uniqueSort(
                jQuery.merge(this.get(), jQuery(selector, context))
              )
            );
          },
          addBack: function(selector) {
            return this.add(
              selector == null ? this.prevObject : this.prevObject.filter(selector)
            );
          }
        });
        function sibling(cur, dir2) {
          while ((cur = cur[dir2]) && cur.nodeType !== 1) {
          }
          return cur;
        }
        jQuery.each({
          parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
          },
          parents: function(elem) {
            return dir(elem, "parentNode");
          },
          parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
          },
          next: function(elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function(elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function(elem) {
            return dir(elem, "nextSibling");
          },
          prevAll: function(elem) {
            return dir(elem, "previousSibling");
          },
          nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
          },
          prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
          },
          siblings: function(elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
          },
          children: function(elem) {
            return siblings(elem.firstChild);
          },
          contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) {
              return elem.contentDocument;
            }
            if (nodeName(elem, "template")) {
              elem = elem.content || elem;
            }
            return jQuery.merge([], elem.childNodes);
          }
        }, function(name, fn) {
          jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") {
              selector = until;
            }
            if (selector && typeof selector === "string") {
              matched = jQuery.filter(selector, matched);
            }
            if (this.length > 1) {
              if (!guaranteedUnique[name]) {
                jQuery.uniqueSort(matched);
              }
              if (rparentsprev.test(name)) {
                matched.reverse();
              }
            }
            return this.pushStack(matched);
          };
        });
        var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
        function createOptions(options) {
          var object = {};
          jQuery.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
            object[flag] = true;
          });
          return object;
        }
        jQuery.Callbacks = function(options) {
          options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
          var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
            locked = locked || options.once;
            fired = firing = true;
            for (; queue.length; firingIndex = -1) {
              memory = queue.shift();
              while (++firingIndex < list.length) {
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                  firingIndex = list.length;
                  memory = false;
                }
              }
            }
            if (!options.memory) {
              memory = false;
            }
            firing = false;
            if (locked) {
              if (memory) {
                list = [];
              } else {
                list = "";
              }
            }
          }, self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
              if (list) {
                if (memory && !firing) {
                  firingIndex = list.length - 1;
                  queue.push(memory);
                }
                (function add(args) {
                  jQuery.each(args, function(_2, arg) {
                    if (isFunction(arg)) {
                      if (!options.unique || !self.has(arg)) {
                        list.push(arg);
                      }
                    } else if (arg && arg.length && toType(arg) !== "string") {
                      add(arg);
                    }
                  });
                })(arguments);
                if (memory && !firing) {
                  fire();
                }
              }
              return this;
            },
            // Remove a callback from the list
            remove: function() {
              jQuery.each(arguments, function(_2, arg) {
                var index;
                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1);
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              });
              return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
              return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
              if (list) {
                list = [];
              }
              return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
              locked = queue = [];
              list = memory = "";
              return this;
            },
            disabled: function() {
              return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
              locked = queue = [];
              if (!memory && !firing) {
                list = memory = "";
              }
              return this;
            },
            locked: function() {
              return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
              if (!locked) {
                args = args || [];
                args = [context, args.slice ? args.slice() : args];
                queue.push(args);
                if (!firing) {
                  fire();
                }
              }
              return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
              self.fireWith(this, arguments);
              return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
              return !!fired;
            }
          };
          return self;
        };
        function Identity(v2) {
          return v2;
        }
        function Thrower(ex) {
          throw ex;
        }
        function adoptValue(value, resolve, reject, noValue) {
          var method;
          try {
            if (value && isFunction(method = value.promise)) {
              method.call(value).done(resolve).fail(reject);
            } else if (value && isFunction(method = value.then)) {
              method.call(value, resolve, reject);
            } else {
              resolve.apply(void 0, [value].slice(noValue));
            }
          } catch (value2) {
            reject.apply(void 0, [value2]);
          }
        }
        jQuery.extend({
          Deferred: function(func) {
            var tuples = [
              // action, add listener, callbacks,
              // ... .then handlers, argument index, [final state]
              [
                "notify",
                "progress",
                jQuery.Callbacks("memory"),
                jQuery.Callbacks("memory"),
                2
              ],
              [
                "resolve",
                "done",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                0,
                "resolved"
              ],
              [
                "reject",
                "fail",
                jQuery.Callbacks("once memory"),
                jQuery.Callbacks("once memory"),
                1,
                "rejected"
              ]
            ], state = "pending", promise = {
              state: function() {
                return state;
              },
              always: function() {
                deferred.done(arguments).fail(arguments);
                return this;
              },
              "catch": function(fn) {
                return promise.then(null, fn);
              },
              // Keep pipe for back-compat
              pipe: function() {
                var fns = arguments;
                return jQuery.Deferred(function(newDefer) {
                  jQuery.each(tuples, function(_i, tuple) {
                    var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                    deferred[tuple[1]](function() {
                      var returned = fn && fn.apply(this, arguments);
                      if (returned && isFunction(returned.promise)) {
                        returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                      } else {
                        newDefer[tuple[0] + "With"](
                          this,
                          fn ? [returned] : arguments
                        );
                      }
                    });
                  });
                  fns = null;
                }).promise();
              },
              then: function(onFulfilled, onRejected, onProgress) {
                var maxDepth = 0;
                function resolve(depth, deferred2, handler, special) {
                  return function() {
                    var that = this, args = arguments, mightThrow = function() {
                      var returned, then;
                      if (depth < maxDepth) {
                        return;
                      }
                      returned = handler.apply(that, args);
                      if (returned === deferred2.promise()) {
                        throw new TypeError("Thenable self-resolution");
                      }
                      then = returned && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof returned === "object" || typeof returned === "function") && returned.then;
                      if (isFunction(then)) {
                        if (special) {
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special)
                          );
                        } else {
                          maxDepth++;
                          then.call(
                            returned,
                            resolve(maxDepth, deferred2, Identity, special),
                            resolve(maxDepth, deferred2, Thrower, special),
                            resolve(
                              maxDepth,
                              deferred2,
                              Identity,
                              deferred2.notifyWith
                            )
                          );
                        }
                      } else {
                        if (handler !== Identity) {
                          that = void 0;
                          args = [returned];
                        }
                        (special || deferred2.resolveWith)(that, args);
                      }
                    }, process2 = special ? mightThrow : function() {
                      try {
                        mightThrow();
                      } catch (e12) {
                        if (jQuery.Deferred.exceptionHook) {
                          jQuery.Deferred.exceptionHook(
                            e12,
                            process2.stackTrace
                          );
                        }
                        if (depth + 1 >= maxDepth) {
                          if (handler !== Thrower) {
                            that = void 0;
                            args = [e12];
                          }
                          deferred2.rejectWith(that, args);
                        }
                      }
                    };
                    if (depth) {
                      process2();
                    } else {
                      if (jQuery.Deferred.getStackHook) {
                        process2.stackTrace = jQuery.Deferred.getStackHook();
                      }
                      window2.setTimeout(process2);
                    }
                  };
                }
                return jQuery.Deferred(function(newDefer) {
                  tuples[0][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onProgress) ? onProgress : Identity,
                      newDefer.notifyWith
                    )
                  );
                  tuples[1][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onFulfilled) ? onFulfilled : Identity
                    )
                  );
                  tuples[2][3].add(
                    resolve(
                      0,
                      newDefer,
                      isFunction(onRejected) ? onRejected : Thrower
                    )
                  );
                }).promise();
              },
              // Get a promise for this deferred
              // If obj is provided, the promise aspect is added to the object
              promise: function(obj) {
                return obj != null ? jQuery.extend(obj, promise) : promise;
              }
            }, deferred = {};
            jQuery.each(tuples, function(i10, tuple) {
              var list = tuple[2], stateString = tuple[5];
              promise[tuple[1]] = list.add;
              if (stateString) {
                list.add(
                  function() {
                    state = stateString;
                  },
                  // rejected_callbacks.disable
                  // fulfilled_callbacks.disable
                  tuples[3 - i10][2].disable,
                  // rejected_handlers.disable
                  // fulfilled_handlers.disable
                  tuples[3 - i10][3].disable,
                  // progress_callbacks.lock
                  tuples[0][2].lock,
                  // progress_handlers.lock
                  tuples[0][3].lock
                );
              }
              list.add(tuple[3].fire);
              deferred[tuple[0]] = function() {
                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                return this;
              };
              deferred[tuple[0] + "With"] = list.fireWith;
            });
            promise.promise(deferred);
            if (func) {
              func.call(deferred, deferred);
            }
            return deferred;
          },
          // Deferred helper
          when: function(singleValue) {
            var remaining = arguments.length, i10 = remaining, resolveContexts = Array(i10), resolveValues = slice.call(arguments), master = jQuery.Deferred(), updateFunc = function(i11) {
              return function(value) {
                resolveContexts[i11] = this;
                resolveValues[i11] = arguments.length > 1 ? slice.call(arguments) : value;
                if (!--remaining) {
                  master.resolveWith(resolveContexts, resolveValues);
                }
              };
            };
            if (remaining <= 1) {
              adoptValue(
                singleValue,
                master.done(updateFunc(i10)).resolve,
                master.reject,
                !remaining
              );
              if (master.state() === "pending" || isFunction(resolveValues[i10] && resolveValues[i10].then)) {
                return master.then();
              }
            }
            while (i10--) {
              adoptValue(resolveValues[i10], updateFunc(i10), master.reject);
            }
            return master.promise();
          }
        });
        var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        jQuery.Deferred.exceptionHook = function(error, stack) {
          if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
            window2.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
          }
        };
        jQuery.readyException = function(error) {
          window2.setTimeout(function() {
            throw error;
          });
        };
        var readyList = jQuery.Deferred();
        jQuery.fn.ready = function(fn) {
          readyList.then(fn).catch(function(error) {
            jQuery.readyException(error);
          });
          return this;
        };
        jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,
          // A counter to track how many items to wait for before
          // the ready event fires. See #6781
          readyWait: 1,
          // Handle when the DOM is ready
          ready: function(wait) {
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
              return;
            }
            jQuery.isReady = true;
            if (wait !== true && --jQuery.readyWait > 0) {
              return;
            }
            readyList.resolveWith(document2, [jQuery]);
          }
        });
        jQuery.ready.then = readyList.then;
        function completed() {
          document2.removeEventListener("DOMContentLoaded", completed);
          window2.removeEventListener("load", completed);
          jQuery.ready();
        }
        if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
          window2.setTimeout(jQuery.ready);
        } else {
          document2.addEventListener("DOMContentLoaded", completed);
          window2.addEventListener("load", completed);
        }
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
          var i10 = 0, len = elems.length, bulk = key == null;
          if (toType(key) === "object") {
            chainable = true;
            for (i10 in key) {
              access(elems, fn, i10, key[i10], true, emptyGet, raw);
            }
          } else if (value !== void 0) {
            chainable = true;
            if (!isFunction(value)) {
              raw = true;
            }
            if (bulk) {
              if (raw) {
                fn.call(elems, value);
                fn = null;
              } else {
                bulk = fn;
                fn = function(elem, _key, value2) {
                  return bulk.call(jQuery(elem), value2);
                };
              }
            }
            if (fn) {
              for (; i10 < len; i10++) {
                fn(
                  elems[i10],
                  key,
                  raw ? value : value.call(elems[i10], i10, fn(elems[i10], key))
                );
              }
            }
          }
          if (chainable) {
            return elems;
          }
          if (bulk) {
            return fn.call(elems);
          }
          return len ? fn(elems[0], key) : emptyGet;
        };
        var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
        function fcamelCase(_all, letter) {
          return letter.toUpperCase();
        }
        function camelCase(string) {
          return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        }
        var acceptData = function(owner) {
          return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
        };
        function Data() {
          this.expando = jQuery.expando + Data.uid++;
        }
        Data.uid = 1;
        Data.prototype = {
          cache: function(owner) {
            var value = owner[this.expando];
            if (!value) {
              value = {};
              if (acceptData(owner)) {
                if (owner.nodeType) {
                  owner[this.expando] = value;
                } else {
                  Object.defineProperty(owner, this.expando, {
                    value,
                    configurable: true
                  });
                }
              }
            }
            return value;
          },
          set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            if (typeof data === "string") {
              cache[camelCase(data)] = value;
            } else {
              for (prop in data) {
                cache[camelCase(prop)] = data[prop];
              }
            }
            return cache;
          },
          get: function(owner, key) {
            return key === void 0 ? this.cache(owner) : (
              // Always use camelCase key (gh-2257)
              owner[this.expando] && owner[this.expando][camelCase(key)]
            );
          },
          access: function(owner, key, value) {
            if (key === void 0 || key && typeof key === "string" && value === void 0) {
              return this.get(owner, key);
            }
            this.set(owner, key, value);
            return value !== void 0 ? value : key;
          },
          remove: function(owner, key) {
            var i10, cache = owner[this.expando];
            if (cache === void 0) {
              return;
            }
            if (key !== void 0) {
              if (Array.isArray(key)) {
                key = key.map(camelCase);
              } else {
                key = camelCase(key);
                key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
              }
              i10 = key.length;
              while (i10--) {
                delete cache[key[i10]];
              }
            }
            if (key === void 0 || jQuery.isEmptyObject(cache)) {
              if (owner.nodeType) {
                owner[this.expando] = void 0;
              } else {
                delete owner[this.expando];
              }
            }
          },
          hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== void 0 && !jQuery.isEmptyObject(cache);
          }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
        function getData(data) {
          if (data === "true") {
            return true;
          }
          if (data === "false") {
            return false;
          }
          if (data === "null") {
            return null;
          }
          if (data === +data + "") {
            return +data;
          }
          if (rbrace.test(data)) {
            return JSON.parse(data);
          }
          return data;
        }
        function dataAttr(elem, key, data) {
          var name;
          if (data === void 0 && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
              try {
                data = getData(data);
              } catch (e12) {
              }
              dataUser.set(elem, key, data);
            } else {
              data = void 0;
            }
          }
          return data;
        }
        jQuery.extend({
          hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
          },
          data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
          },
          removeData: function(elem, name) {
            dataUser.remove(elem, name);
          },
          // TODO: Now that all calls to _data and _removeData have been replaced
          // with direct calls to dataPriv methods, these can be deprecated.
          _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
          },
          _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
          }
        });
        jQuery.fn.extend({
          data: function(key, value) {
            var i10, name, data, elem = this[0], attrs = elem && elem.attributes;
            if (key === void 0) {
              if (this.length) {
                data = dataUser.get(elem);
                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                  i10 = attrs.length;
                  while (i10--) {
                    if (attrs[i10]) {
                      name = attrs[i10].name;
                      if (name.indexOf("data-") === 0) {
                        name = camelCase(name.slice(5));
                        dataAttr(elem, name, data[name]);
                      }
                    }
                  }
                  dataPriv.set(elem, "hasDataAttrs", true);
                }
              }
              return data;
            }
            if (typeof key === "object") {
              return this.each(function() {
                dataUser.set(this, key);
              });
            }
            return access(this, function(value2) {
              var data2;
              if (elem && value2 === void 0) {
                data2 = dataUser.get(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                data2 = dataAttr(elem, key);
                if (data2 !== void 0) {
                  return data2;
                }
                return;
              }
              this.each(function() {
                dataUser.set(this, key, value2);
              });
            }, null, value, arguments.length > 1, null, true);
          },
          removeData: function(key) {
            return this.each(function() {
              dataUser.remove(this, key);
            });
          }
        });
        jQuery.extend({
          queue: function(elem, type, data) {
            var queue;
            if (elem) {
              type = (type || "fx") + "queue";
              queue = dataPriv.get(elem, type);
              if (data) {
                if (!queue || Array.isArray(data)) {
                  queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                } else {
                  queue.push(data);
                }
              }
              return queue || [];
            }
          },
          dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
              jQuery.dequeue(elem, type);
            };
            if (fn === "inprogress") {
              fn = queue.shift();
              startLength--;
            }
            if (fn) {
              if (type === "fx") {
                queue.unshift("inprogress");
              }
              delete hooks.stop;
              fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) {
              hooks.empty.fire();
            }
          },
          // Not public - generate a queueHooks object, or return the current one
          _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function() {
                dataPriv.remove(elem, [type + "queue", key]);
              })
            });
          }
        });
        jQuery.fn.extend({
          queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
              data = type;
              type = "fx";
              setter--;
            }
            if (arguments.length < setter) {
              return jQuery.queue(this[0], type);
            }
            return data === void 0 ? this : this.each(function() {
              var queue = jQuery.queue(this, type, data);
              jQuery._queueHooks(this, type);
              if (type === "fx" && queue[0] !== "inprogress") {
                jQuery.dequeue(this, type);
              }
            });
          },
          dequeue: function(type) {
            return this.each(function() {
              jQuery.dequeue(this, type);
            });
          },
          clearQueue: function(type) {
            return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i10 = this.length, resolve = function() {
              if (!--count) {
                defer.resolveWith(elements, [elements]);
              }
            };
            if (typeof type !== "string") {
              obj = type;
              type = void 0;
            }
            type = type || "fx";
            while (i10--) {
              tmp = dataPriv.get(elements[i10], type + "queueHooks");
              if (tmp && tmp.empty) {
                count++;
                tmp.empty.add(resolve);
              }
            }
            resolve();
            return defer.promise(obj);
          }
        });
        var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var documentElement = document2.documentElement;
        var isAttached = function(elem) {
          return jQuery.contains(elem.ownerDocument, elem);
        }, composed = { composed: true };
        if (documentElement.getRootNode) {
          isAttached = function(elem) {
            return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
          };
        }
        var isHiddenWithinTree = function(elem, el) {
          elem = el || elem;
          return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
          // Support: Firefox <=43 - 45
          // Disconnected elements can have computed display: none, so first confirm that elem is
          // in the document.
          isAttached(elem) && jQuery.css(elem, "display") === "none";
        };
        function adjustCSS(elem, prop, valueParts, tween) {
          var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
          } : function() {
            return jQuery.css(elem, prop, "");
          }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
          if (initialInUnit && initialInUnit[3] !== unit) {
            initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1;
            while (maxIterations--) {
              jQuery.style(elem, prop, initialInUnit + unit);
              if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                maxIterations = 0;
              }
              initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            valueParts = valueParts || [];
          }
          if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
              tween.unit = unit;
              tween.start = initialInUnit;
              tween.end = adjusted;
            }
          }
          return adjusted;
        }
        var defaultDisplayMap = {};
        function getDefaultDisplay(elem) {
          var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
          if (display) {
            return display;
          }
          temp = doc.body.appendChild(doc.createElement(nodeName2));
          display = jQuery.css(temp, "display");
          temp.parentNode.removeChild(temp);
          if (display === "none") {
            display = "block";
          }
          defaultDisplayMap[nodeName2] = display;
          return display;
        }
        function showHide(elements, show) {
          var display, elem, values = [], index = 0, length = elements.length;
          for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
              continue;
            }
            display = elem.style.display;
            if (show) {
              if (display === "none") {
                values[index] = dataPriv.get(elem, "display") || null;
                if (!values[index]) {
                  elem.style.display = "";
                }
              }
              if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                values[index] = getDefaultDisplay(elem);
              }
            } else {
              if (display !== "none") {
                values[index] = "none";
                dataPriv.set(elem, "display", display);
              }
            }
          }
          for (index = 0; index < length; index++) {
            if (values[index] != null) {
              elements[index].style.display = values[index];
            }
          }
          return elements;
        }
        jQuery.fn.extend({
          show: function() {
            return showHide(this, true);
          },
          hide: function() {
            return showHide(this);
          },
          toggle: function(state) {
            if (typeof state === "boolean") {
              return state ? this.show() : this.hide();
            }
            return this.each(function() {
              if (isHiddenWithinTree(this)) {
                jQuery(this).show();
              } else {
                jQuery(this).hide();
              }
            });
          }
        });
        var rcheckableType = /^(?:checkbox|radio)$/i;
        var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
        var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
          var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
          input.setAttribute("type", "radio");
          input.setAttribute("checked", "checked");
          input.setAttribute("name", "t");
          div.appendChild(input);
          support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
          div.innerHTML = "<textarea>x</textarea>";
          support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
          div.innerHTML = "<option></option>";
          support.option = !!div.lastChild;
        })();
        var wrapMap = {
          // XHTML parsers do not magically insert elements in the
          // same way that tag soup parsers do. So we cannot shorten
          // this by omitting <tbody> or other required elements.
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""]
        };
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;
        if (!support.option) {
          wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
        }
        function getAll(context, tag) {
          var ret;
          if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");
          } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");
          } else {
            ret = [];
          }
          if (tag === void 0 || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
          }
          return ret;
        }
        function setGlobalEval(elems, refElements) {
          var i10 = 0, l5 = elems.length;
          for (; i10 < l5; i10++) {
            dataPriv.set(
              elems[i10],
              "globalEval",
              !refElements || dataPriv.get(refElements[i10], "globalEval")
            );
          }
        }
        var rhtml = /<|&#?\w+;/;
        function buildFragment(elems, context, scripts, selection, ignored) {
          var elem, tmp, tag, wrap, attached, j2, fragment = context.createDocumentFragment(), nodes = [], i10 = 0, l5 = elems.length;
          for (; i10 < l5; i10++) {
            elem = elems[i10];
            if (elem || elem === 0) {
              if (toType(elem) === "object") {
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              } else if (!rhtml.test(elem)) {
                nodes.push(context.createTextNode(elem));
              } else {
                tmp = tmp || fragment.appendChild(context.createElement("div"));
                tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                wrap = wrapMap[tag] || wrapMap._default;
                tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                j2 = wrap[0];
                while (j2--) {
                  tmp = tmp.lastChild;
                }
                jQuery.merge(nodes, tmp.childNodes);
                tmp = fragment.firstChild;
                tmp.textContent = "";
              }
            }
          }
          fragment.textContent = "";
          i10 = 0;
          while (elem = nodes[i10++]) {
            if (selection && jQuery.inArray(elem, selection) > -1) {
              if (ignored) {
                ignored.push(elem);
              }
              continue;
            }
            attached = isAttached(elem);
            tmp = getAll(fragment.appendChild(elem), "script");
            if (attached) {
              setGlobalEval(tmp);
            }
            if (scripts) {
              j2 = 0;
              while (elem = tmp[j2++]) {
                if (rscriptType.test(elem.type || "")) {
                  scripts.push(elem);
                }
              }
            }
          }
          return fragment;
        }
        var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
        function returnTrue() {
          return true;
        }
        function returnFalse() {
          return false;
        }
        function expectSync(elem, type) {
          return elem === safeActiveElement() === (type === "focus");
        }
        function safeActiveElement() {
          try {
            return document2.activeElement;
          } catch (err) {
          }
        }
        function on(elem, types, selector, data, fn, one) {
          var origFn, type;
          if (typeof types === "object") {
            if (typeof selector !== "string") {
              data = data || selector;
              selector = void 0;
            }
            for (type in types) {
              on(elem, type, selector, data, types[type], one);
            }
            return elem;
          }
          if (data == null && fn == null) {
            fn = selector;
            data = selector = void 0;
          } else if (fn == null) {
            if (typeof selector === "string") {
              fn = data;
              data = void 0;
            } else {
              fn = data;
              data = selector;
              selector = void 0;
            }
          }
          if (fn === false) {
            fn = returnFalse;
          } else if (!fn) {
            return elem;
          }
          if (one === 1) {
            origFn = fn;
            fn = function(event) {
              jQuery().off(event);
              return origFn.apply(this, arguments);
            };
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
          }
          return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
          });
        }
        jQuery.event = {
          global: {},
          add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t8, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            if (!acceptData(elem)) {
              return;
            }
            if (handler.handler) {
              handleObjIn = handler;
              handler = handleObjIn.handler;
              selector = handleObjIn.selector;
            }
            if (selector) {
              jQuery.find.matchesSelector(documentElement, selector);
            }
            if (!handler.guid) {
              handler.guid = jQuery.guid++;
            }
            if (!(events = elemData.events)) {
              events = elemData.events = /* @__PURE__ */ Object.create(null);
            }
            if (!(eventHandle = elemData.handle)) {
              eventHandle = elemData.handle = function(e12) {
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e12.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
              };
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t8 = types.length;
            while (t8--) {
              tmp = rtypenamespace.exec(types[t8]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              special = jQuery.event.special[type] || {};
              handleObj = jQuery.extend({
                type,
                origType,
                data,
                handler,
                guid: handler.guid,
                selector,
                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                namespace: namespaces.join(".")
              }, handleObjIn);
              if (!(handlers = events[type])) {
                handlers = events[type] = [];
                handlers.delegateCount = 0;
                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                  if (elem.addEventListener) {
                    elem.addEventListener(type, eventHandle);
                  }
                }
              }
              if (special.add) {
                special.add.call(elem, handleObj);
                if (!handleObj.handler.guid) {
                  handleObj.handler.guid = handler.guid;
                }
              }
              if (selector) {
                handlers.splice(handlers.delegateCount++, 0, handleObj);
              } else {
                handlers.push(handleObj);
              }
              jQuery.event.global[type] = true;
            }
          },
          // Detach an event or set of events from an element
          remove: function(elem, types, handler, selector, mappedTypes) {
            var j2, origCount, tmp, events, t8, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) {
              return;
            }
            types = (types || "").match(rnothtmlwhite) || [""];
            t8 = types.length;
            while (t8--) {
              tmp = rtypenamespace.exec(types[t8]) || [];
              type = origType = tmp[1];
              namespaces = (tmp[2] || "").split(".").sort();
              if (!type) {
                for (type in events) {
                  jQuery.event.remove(elem, type + types[t8], handler, selector, true);
                }
                continue;
              }
              special = jQuery.event.special[type] || {};
              type = (selector ? special.delegateType : special.bindType) || type;
              handlers = events[type] || [];
              tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
              origCount = j2 = handlers.length;
              while (j2--) {
                handleObj = handlers[j2];
                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                  handlers.splice(j2, 1);
                  if (handleObj.selector) {
                    handlers.delegateCount--;
                  }
                  if (special.remove) {
                    special.remove.call(elem, handleObj);
                  }
                }
              }
              if (origCount && !handlers.length) {
                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                  jQuery.removeEvent(elem, type, elemData.handle);
                }
                delete events[type];
              }
            }
            if (jQuery.isEmptyObject(events)) {
              dataPriv.remove(elem, "handle events");
            }
          },
          dispatch: function(nativeEvent) {
            var i10, j2, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
            args[0] = event;
            for (i10 = 1; i10 < arguments.length; i10++) {
              args[i10] = arguments[i10];
            }
            event.delegateTarget = this;
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
              return;
            }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i10 = 0;
            while ((matched = handlerQueue[i10++]) && !event.isPropagationStopped()) {
              event.currentTarget = matched.elem;
              j2 = 0;
              while ((handleObj = matched.handlers[j2++]) && !event.isImmediatePropagationStopped()) {
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                  event.handleObj = handleObj;
                  event.data = handleObj.data;
                  ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                  if (ret !== void 0) {
                    if ((event.result = ret) === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    }
                  }
                }
              }
            }
            if (special.postDispatch) {
              special.postDispatch.call(this, event);
            }
            return event.result;
          },
          handlers: function(event, handlers) {
            var i10, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
              for (; cur !== this; cur = cur.parentNode || this) {
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                  matchedHandlers = [];
                  matchedSelectors = {};
                  for (i10 = 0; i10 < delegateCount; i10++) {
                    handleObj = handlers[i10];
                    sel = handleObj.selector + " ";
                    if (matchedSelectors[sel] === void 0) {
                      matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                    }
                    if (matchedSelectors[sel]) {
                      matchedHandlers.push(handleObj);
                    }
                  }
                  if (matchedHandlers.length) {
                    handlerQueue.push({ elem: cur, handlers: matchedHandlers });
                  }
                }
              }
            }
            cur = this;
            if (delegateCount < handlers.length) {
              handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
            }
            return handlerQueue;
          },
          addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
              enumerable: true,
              configurable: true,
              get: isFunction(hook) ? function() {
                if (this.originalEvent) {
                  return hook(this.originalEvent);
                }
              } : function() {
                if (this.originalEvent) {
                  return this.originalEvent[name];
                }
              },
              set: function(value) {
                Object.defineProperty(this, name, {
                  enumerable: true,
                  configurable: true,
                  writable: true,
                  value
                });
              }
            });
          },
          fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
          },
          special: {
            load: {
              // Prevent triggered image.load events from bubbling to window.load
              noBubble: true
            },
            click: {
              // Utilize native event to ensure correct state for checkable inputs
              setup: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click", returnTrue);
                }
                return false;
              },
              trigger: function(data) {
                var el = this || data;
                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
                  leverageNative(el, "click");
                }
                return true;
              },
              // For cross-browser consistency, suppress native .click() on links
              // Also prevent it if we're currently inside a leveraged native-event stack
              _default: function(event) {
                var target = event.target;
                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
              }
            },
            beforeunload: {
              postDispatch: function(event) {
                if (event.result !== void 0 && event.originalEvent) {
                  event.originalEvent.returnValue = event.result;
                }
              }
            }
          }
        };
        function leverageNative(el, type, expectSync2) {
          if (!expectSync2) {
            if (dataPriv.get(el, type) === void 0) {
              jQuery.event.add(el, type, returnTrue);
            }
            return;
          }
          dataPriv.set(el, type, false);
          jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
              var notAsync, result, saved = dataPriv.get(this, type);
              if (event.isTrigger & 1 && this[type]) {
                if (!saved.length) {
                  saved = slice.call(arguments);
                  dataPriv.set(this, type, saved);
                  notAsync = expectSync2(this, type);
                  this[type]();
                  result = dataPriv.get(this, type);
                  if (saved !== result || notAsync) {
                    dataPriv.set(this, type, false);
                  } else {
                    result = {};
                  }
                  if (saved !== result) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    return result.value;
                  }
                } else if ((jQuery.event.special[type] || {}).delegateType) {
                  event.stopPropagation();
                }
              } else if (saved.length) {
                dataPriv.set(this, type, {
                  value: jQuery.event.trigger(
                    // Support: IE <=9 - 11+
                    // Extend with the prototype to reset the above stopImmediatePropagation()
                    jQuery.extend(saved[0], jQuery.Event.prototype),
                    saved.slice(1),
                    this
                  )
                });
                event.stopImmediatePropagation();
              }
            }
          });
        }
        jQuery.removeEvent = function(elem, type, handle) {
          if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
          }
        };
        jQuery.Event = function(src, props) {
          if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
          }
          if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
          } else {
            this.type = src;
          }
          if (props) {
            jQuery.extend(this, props);
          }
          this.timeStamp = src && src.timeStamp || Date.now();
          this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
          constructor: jQuery.Event,
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,
          isSimulated: false,
          preventDefault: function() {
            var e12 = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e12 && !this.isSimulated) {
              e12.preventDefault();
            }
          },
          stopPropagation: function() {
            var e12 = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e12 && !this.isSimulated) {
              e12.stopPropagation();
            }
          },
          stopImmediatePropagation: function() {
            var e12 = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e12 && !this.isSimulated) {
              e12.stopImmediatePropagation();
            }
            this.stopPropagation();
          }
        };
        jQuery.each({
          altKey: true,
          bubbles: true,
          cancelable: true,
          changedTouches: true,
          ctrlKey: true,
          detail: true,
          eventPhase: true,
          metaKey: true,
          pageX: true,
          pageY: true,
          shiftKey: true,
          view: true,
          "char": true,
          code: true,
          charCode: true,
          key: true,
          keyCode: true,
          button: true,
          buttons: true,
          clientX: true,
          clientY: true,
          offsetX: true,
          offsetY: true,
          pointerId: true,
          pointerType: true,
          screenX: true,
          screenY: true,
          targetTouches: true,
          toElement: true,
          touches: true,
          which: function(event) {
            var button = event.button;
            if (event.which == null && rkeyEvent.test(event.type)) {
              return event.charCode != null ? event.charCode : event.keyCode;
            }
            if (!event.which && button !== void 0 && rmouseEvent.test(event.type)) {
              if (button & 1) {
                return 1;
              }
              if (button & 2) {
                return 3;
              }
              if (button & 4) {
                return 2;
              }
              return 0;
            }
            return event.which;
          }
        }, jQuery.event.addProp);
        jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
          jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
              leverageNative(this, type, expectSync);
              return false;
            },
            trigger: function() {
              leverageNative(this, type);
              return true;
            },
            delegateType
          };
        });
        jQuery.each({
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout"
        }, function(orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
              var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
              if (!related || related !== target && !jQuery.contains(target, related)) {
                event.type = handleObj.origType;
                ret = handleObj.handler.apply(this, arguments);
                event.type = fix;
              }
              return ret;
            }
          };
        });
        jQuery.fn.extend({
          on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
          },
          one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
          },
          off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
              handleObj = types.handleObj;
              jQuery(types.delegateTarget).off(
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              );
              return this;
            }
            if (typeof types === "object") {
              for (type in types) {
                this.off(type, selector, types[type]);
              }
              return this;
            }
            if (selector === false || typeof selector === "function") {
              fn = selector;
              selector = void 0;
            }
            if (fn === false) {
              fn = returnFalse;
            }
            return this.each(function() {
              jQuery.event.remove(this, types, fn, selector);
            });
          }
        });
        var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function manipulationTarget(elem, content) {
          if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
            return jQuery(elem).children("tbody")[0] || elem;
          }
          return elem;
        }
        function disableScript(elem) {
          elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
          return elem;
        }
        function restoreScript(elem) {
          if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
          } else {
            elem.removeAttribute("type");
          }
          return elem;
        }
        function cloneCopyEvent(src, dest) {
          var i10, l5, type, pdataOld, udataOld, udataCur, events;
          if (dest.nodeType !== 1) {
            return;
          }
          if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
              dataPriv.remove(dest, "handle events");
              for (type in events) {
                for (i10 = 0, l5 = events[type].length; i10 < l5; i10++) {
                  jQuery.event.add(dest, type, events[type][i10]);
                }
              }
            }
          }
          if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);
            dataUser.set(dest, udataCur);
          }
        }
        function fixInput(src, dest) {
          var nodeName2 = dest.nodeName.toLowerCase();
          if (nodeName2 === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;
          } else if (nodeName2 === "input" || nodeName2 === "textarea") {
            dest.defaultValue = src.defaultValue;
          }
        }
        function domManip(collection, args, callback, ignored) {
          args = flat(args);
          var fragment, first, scripts, hasScripts, node, doc, i10 = 0, l5 = collection.length, iNoClone = l5 - 1, value = args[0], valueIsFunction = isFunction(value);
          if (valueIsFunction || l5 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
            return collection.each(function(index) {
              var self = collection.eq(index);
              if (valueIsFunction) {
                args[0] = value.call(this, index, self.html());
              }
              domManip(self, args, callback, ignored);
            });
          }
          if (l5) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) {
              fragment = first;
            }
            if (first || ignored) {
              scripts = jQuery.map(getAll(fragment, "script"), disableScript);
              hasScripts = scripts.length;
              for (; i10 < l5; i10++) {
                node = fragment;
                if (i10 !== iNoClone) {
                  node = jQuery.clone(node, true, true);
                  if (hasScripts) {
                    jQuery.merge(scripts, getAll(node, "script"));
                  }
                }
                callback.call(collection[i10], node, i10);
              }
              if (hasScripts) {
                doc = scripts[scripts.length - 1].ownerDocument;
                jQuery.map(scripts, restoreScript);
                for (i10 = 0; i10 < hasScripts; i10++) {
                  node = scripts[i10];
                  if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                    if (node.src && (node.type || "").toLowerCase() !== "module") {
                      if (jQuery._evalUrl && !node.noModule) {
                        jQuery._evalUrl(node.src, {
                          nonce: node.nonce || node.getAttribute("nonce")
                        }, doc);
                      }
                    } else {
                      DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                    }
                  }
                }
              }
            }
          }
          return collection;
        }
        function remove(elem, selector, keepData) {
          var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i10 = 0;
          for (; (node = nodes[i10]) != null; i10++) {
            if (!keepData && node.nodeType === 1) {
              jQuery.cleanData(getAll(node));
            }
            if (node.parentNode) {
              if (keepData && isAttached(node)) {
                setGlobalEval(getAll(node, "script"));
              }
              node.parentNode.removeChild(node);
            }
          }
          return elem;
        }
        jQuery.extend({
          htmlPrefilter: function(html) {
            return html;
          },
          clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i10, l5, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
              destElements = getAll(clone);
              srcElements = getAll(elem);
              for (i10 = 0, l5 = srcElements.length; i10 < l5; i10++) {
                fixInput(srcElements[i10], destElements[i10]);
              }
            }
            if (dataAndEvents) {
              if (deepDataAndEvents) {
                srcElements = srcElements || getAll(elem);
                destElements = destElements || getAll(clone);
                for (i10 = 0, l5 = srcElements.length; i10 < l5; i10++) {
                  cloneCopyEvent(srcElements[i10], destElements[i10]);
                }
              } else {
                cloneCopyEvent(elem, clone);
              }
            }
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
              setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            return clone;
          },
          cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i10 = 0;
            for (; (elem = elems[i10]) !== void 0; i10++) {
              if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                  if (data.events) {
                    for (type in data.events) {
                      if (special[type]) {
                        jQuery.event.remove(elem, type);
                      } else {
                        jQuery.removeEvent(elem, type, data.handle);
                      }
                    }
                  }
                  elem[dataPriv.expando] = void 0;
                }
                if (elem[dataUser.expando]) {
                  elem[dataUser.expando] = void 0;
                }
              }
            }
          }
        });
        jQuery.fn.extend({
          detach: function(selector) {
            return remove(this, selector, true);
          },
          remove: function(selector) {
            return remove(this, selector);
          },
          text: function(value) {
            return access(this, function(value2) {
              return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                  this.textContent = value2;
                }
              });
            }, null, value, arguments.length);
          },
          append: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.appendChild(elem);
              }
            });
          },
          prepend: function() {
            return domManip(this, arguments, function(elem) {
              if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                var target = manipulationTarget(this, elem);
                target.insertBefore(elem, target.firstChild);
              }
            });
          },
          before: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this);
              }
            });
          },
          after: function() {
            return domManip(this, arguments, function(elem) {
              if (this.parentNode) {
                this.parentNode.insertBefore(elem, this.nextSibling);
              }
            });
          },
          empty: function() {
            var elem, i10 = 0;
            for (; (elem = this[i10]) != null; i10++) {
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.textContent = "";
              }
            }
            return this;
          },
          clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
          },
          html: function(value) {
            return access(this, function(value2) {
              var elem = this[0] || {}, i10 = 0, l5 = this.length;
              if (value2 === void 0 && elem.nodeType === 1) {
                return elem.innerHTML;
              }
              if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
                value2 = jQuery.htmlPrefilter(value2);
                try {
                  for (; i10 < l5; i10++) {
                    elem = this[i10] || {};
                    if (elem.nodeType === 1) {
                      jQuery.cleanData(getAll(elem, false));
                      elem.innerHTML = value2;
                    }
                  }
                  elem = 0;
                } catch (e12) {
                }
              }
              if (elem) {
                this.empty().append(value2);
              }
            }, null, value, arguments.length);
          },
          replaceWith: function() {
            var ignored = [];
            return domManip(this, arguments, function(elem) {
              var parent = this.parentNode;
              if (jQuery.inArray(this, ignored) < 0) {
                jQuery.cleanData(getAll(this));
                if (parent) {
                  parent.replaceChild(elem, this);
                }
              }
            }, ignored);
          }
        });
        jQuery.each({
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith"
        }, function(name, original) {
          jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i10 = 0;
            for (; i10 <= last; i10++) {
              elems = i10 === last ? this : this.clone(true);
              jQuery(insert[i10])[original](elems);
              push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
          };
        });
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
          var view = elem.ownerDocument.defaultView;
          if (!view || !view.opener) {
            view = window2;
          }
          return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback) {
          var ret, name, old = {};
          for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
          }
          ret = callback.call(elem);
          for (name in options) {
            elem.style[name] = old[name];
          }
          return ret;
        };
        var rboxStyle = new RegExp(cssExpand.join("|"), "i");
        (function() {
          function computeStyleTests() {
            if (!div) {
              return;
            }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window2.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            div = null;
          }
          function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
          }
          var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
          if (!div.style) {
            return;
          }
          div.style.backgroundClip = "content-box";
          div.cloneNode(true).style.backgroundClip = "";
          support.clearCloneStyle = div.style.backgroundClip === "content-box";
          jQuery.extend(support, {
            boxSizingReliable: function() {
              computeStyleTests();
              return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
              computeStyleTests();
              return pixelBoxStylesVal;
            },
            pixelPosition: function() {
              computeStyleTests();
              return pixelPositionVal;
            },
            reliableMarginLeft: function() {
              computeStyleTests();
              return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
              computeStyleTests();
              return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            reliableTrDimensions: function() {
              var table, tr, trChild, trStyle;
              if (reliableTrDimensionsVal == null) {
                table = document2.createElement("table");
                tr = document2.createElement("tr");
                trChild = document2.createElement("div");
                table.style.cssText = "position:absolute;left:-11111px";
                tr.style.height = "1px";
                trChild.style.height = "9px";
                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                trStyle = window2.getComputedStyle(tr);
                reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
                documentElement.removeChild(table);
              }
              return reliableTrDimensionsVal;
            }
          });
        })();
        function curCSS(elem, name, computed) {
          var width, minWidth, maxWidth, ret, style = elem.style;
          computed = computed || getStyles(elem);
          if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) {
              ret = jQuery.style(elem, name);
            }
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
              width = style.width;
              minWidth = style.minWidth;
              maxWidth = style.maxWidth;
              style.minWidth = style.maxWidth = style.width = ret;
              ret = computed.width;
              style.width = width;
              style.minWidth = minWidth;
              style.maxWidth = maxWidth;
            }
          }
          return ret !== void 0 ? (
            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + ""
          ) : ret;
        }
        function addGetHookIf(conditionFn, hookFn) {
          return {
            get: function() {
              if (conditionFn()) {
                delete this.get;
                return;
              }
              return (this.get = hookFn).apply(this, arguments);
            }
          };
        }
        var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
        function vendorPropName(name) {
          var capName = name[0].toUpperCase() + name.slice(1), i10 = cssPrefixes.length;
          while (i10--) {
            name = cssPrefixes[i10] + capName;
            if (name in emptyStyle) {
              return name;
            }
          }
        }
        function finalPropName(name) {
          var final = jQuery.cssProps[name] || vendorProps[name];
          if (final) {
            return final;
          }
          if (name in emptyStyle) {
            return name;
          }
          return vendorProps[name] = vendorPropName(name) || name;
        }
        var rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
          letterSpacing: "0",
          fontWeight: "400"
        };
        function setPositiveNumber(_elem, value, subtract) {
          var matches = rcssNum.exec(value);
          return matches ? (
            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px")
          ) : value;
        }
        function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
          var i10 = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
          if (box === (isBorderBox ? "border" : "content")) {
            return 0;
          }
          for (; i10 < 4; i10 += 2) {
            if (box === "margin") {
              delta += jQuery.css(elem, box + cssExpand[i10], true, styles);
            }
            if (!isBorderBox) {
              delta += jQuery.css(elem, "padding" + cssExpand[i10], true, styles);
              if (box !== "padding") {
                delta += jQuery.css(elem, "border" + cssExpand[i10] + "Width", true, styles);
              } else {
                extra += jQuery.css(elem, "border" + cssExpand[i10] + "Width", true, styles);
              }
            } else {
              if (box === "content") {
                delta -= jQuery.css(elem, "padding" + cssExpand[i10], true, styles);
              }
              if (box !== "margin") {
                delta -= jQuery.css(elem, "border" + cssExpand[i10] + "Width", true, styles);
              }
            }
          }
          if (!isBorderBox && computedVal >= 0) {
            delta += Math.max(0, Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
              // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
              // Use an explicit zero to avoid NaN (gh-3964)
            )) || 0;
          }
          return delta;
        }
        function getWidthOrHeight(elem, dimension, extra) {
          var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
          if (rnumnonpx.test(val)) {
            if (!extra) {
              return val;
            }
            val = "auto";
          }
          if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Interestingly, in some cases IE 9 doesn't suffer from this issue.
          !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
          // This happens for inline elements with no explicit setting (gh-3571)
          val === "auto" || // Support: Android <=4.1 - 4.3 only
          // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
          !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
          elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) {
              val = elem[offsetProp];
            }
          }
          val = parseFloat(val) || 0;
          return val + boxModelAdjustment(
            elem,
            dimension,
            extra || (isBorderBox ? "border" : "content"),
            valueIsBorderBox,
            styles,
            // Provide the current computed size to request scroll gutter calculation (gh-3589)
            val
          ) + "px";
        }
        jQuery.extend({
          // Add in style property hooks for overriding the default
          // behavior of getting and setting a style property
          cssHooks: {
            opacity: {
              get: function(elem, computed) {
                if (computed) {
                  var ret = curCSS(elem, "opacity");
                  return ret === "" ? "1" : ret;
                }
              }
            }
          },
          // Don't automatically add "px" to these possibly-unitless properties
          cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
          },
          // Add in properties whose names you wish to fix before
          // setting or getting the value
          cssProps: {},
          // Get and set the style property on a DOM Node
          style: function(elem, name, value, extra) {
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
              return;
            }
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (value !== void 0) {
              type = typeof value;
              if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                value = adjustCSS(elem, name, ret);
                type = "number";
              }
              if (value == null || value !== value) {
                return;
              }
              if (type === "number" && !isCustomProp) {
                value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
              }
              if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                style[name] = "inherit";
              }
              if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
                if (isCustomProp) {
                  style.setProperty(name, value);
                } else {
                  style[name] = value;
                }
              }
            } else {
              if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
                return ret;
              }
              return style[name];
            }
          },
          css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            if (!isCustomProp) {
              name = finalPropName(origName);
            }
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            if (hooks && "get" in hooks) {
              val = hooks.get(elem, true, extra);
            }
            if (val === void 0) {
              val = curCSS(elem, name, styles);
            }
            if (val === "normal" && name in cssNormalTransform) {
              val = cssNormalTransform[name];
            }
            if (extra === "" || extra) {
              num = parseFloat(val);
              return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
          }
        });
        jQuery.each(["height", "width"], function(_i, dimension) {
          jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
              if (computed) {
                return rdisplayswap.test(jQuery.css(elem, "display")) && // Support: Safari 8+
                // Table columns in Safari have non-zero offsetWidth & zero
                // getBoundingClientRect().width unless display is changed.
                // Support: IE <=11 only
                // Running getBoundingClientRect on a disconnected node
                // in IE throws an error.
                (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                  return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
              }
            },
            set: function(elem, value, extra) {
              var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
                elem,
                dimension,
                extra,
                isBorderBox,
                styles
              ) : 0;
              if (isBorderBox && scrollboxSizeBuggy) {
                subtract -= Math.ceil(
                  elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
                );
              }
              if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                elem.style[dimension] = value;
                value = jQuery.css(elem, dimension);
              }
              return setPositiveNumber(elem, value, subtract);
            }
          };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(
          support.reliableMarginLeft,
          function(elem, computed) {
            if (computed) {
              return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
                return elem.getBoundingClientRect().left;
              })) + "px";
            }
          }
        );
        jQuery.each({
          margin: "",
          padding: "",
          border: "Width"
        }, function(prefix, suffix) {
          jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
              var i10 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
              for (; i10 < 4; i10++) {
                expanded[prefix + cssExpand[i10] + suffix] = parts[i10] || parts[i10 - 2] || parts[0];
              }
              return expanded;
            }
          };
          if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
          }
        });
        jQuery.fn.extend({
          css: function(name, value) {
            return access(this, function(elem, name2, value2) {
              var styles, len, map = {}, i10 = 0;
              if (Array.isArray(name2)) {
                styles = getStyles(elem);
                len = name2.length;
                for (; i10 < len; i10++) {
                  map[name2[i10]] = jQuery.css(elem, name2[i10], false, styles);
                }
                return map;
              }
              return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
            }, name, value, arguments.length > 1);
          }
        });
        function Tween(elem, options, prop, end, easing) {
          return new Tween.prototype.init(elem, options, prop, end, easing);
        }
        jQuery.Tween = Tween;
        Tween.prototype = {
          constructor: Tween,
          init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
          },
          cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
          },
          run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) {
              this.pos = eased = jQuery.easing[this.easing](
                percent,
                this.options.duration * percent,
                0,
                1,
                this.options.duration
              );
            } else {
              this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) {
              this.options.step.call(this.elem, this.now, this);
            }
            if (hooks && hooks.set) {
              hooks.set(this);
            } else {
              Tween.propHooks._default.set(this);
            }
            return this;
          }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
          _default: {
            get: function(tween) {
              var result;
              if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                return tween.elem[tween.prop];
              }
              result = jQuery.css(tween.elem, tween.prop, "");
              return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
              if (jQuery.fx.step[tween.prop]) {
                jQuery.fx.step[tween.prop](tween);
              } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
                jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
              } else {
                tween.elem[tween.prop] = tween.now;
              }
            }
          }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
          set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
              tween.elem[tween.prop] = tween.now;
            }
          }
        };
        jQuery.easing = {
          linear: function(p3) {
            return p3;
          },
          swing: function(p3) {
            return 0.5 - Math.cos(p3 * Math.PI) / 2;
          },
          _default: "swing"
        };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
        function schedule() {
          if (inProgress) {
            if (document2.hidden === false && window2.requestAnimationFrame) {
              window2.requestAnimationFrame(schedule);
            } else {
              window2.setTimeout(schedule, jQuery.fx.interval);
            }
            jQuery.fx.tick();
          }
        }
        function createFxNow() {
          window2.setTimeout(function() {
            fxNow = void 0;
          });
          return fxNow = Date.now();
        }
        function genFx(type, includeWidth) {
          var which, i10 = 0, attrs = { height: type };
          includeWidth = includeWidth ? 1 : 0;
          for (; i10 < 4; i10 += 2 - includeWidth) {
            which = cssExpand[i10];
            attrs["margin" + which] = attrs["padding" + which] = type;
          }
          if (includeWidth) {
            attrs.opacity = attrs.width = type;
          }
          return attrs;
        }
        function createTween(value, prop, animation) {
          var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
          for (; index < length; index++) {
            if (tween = collection[index].call(animation, prop, value)) {
              return tween;
            }
          }
        }
        function defaultPrefilter(elem, props, opts) {
          var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
          if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
              hooks.unqueued = 0;
              oldfire = hooks.empty.fire;
              hooks.empty.fire = function() {
                if (!hooks.unqueued) {
                  oldfire();
                }
              };
            }
            hooks.unqueued++;
            anim.always(function() {
              anim.always(function() {
                hooks.unqueued--;
                if (!jQuery.queue(elem, "fx").length) {
                  hooks.empty.fire();
                }
              });
            });
          }
          for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
              delete props[prop];
              toggle = toggle || value === "toggle";
              if (value === (hidden ? "hide" : "show")) {
                if (value === "show" && dataShow && dataShow[prop] !== void 0) {
                  hidden = true;
                } else {
                  continue;
                }
              }
              orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
          }
          propTween = !jQuery.isEmptyObject(props);
          if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
          }
          if (isBox && elem.nodeType === 1) {
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
              restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
              if (restoreDisplay) {
                display = restoreDisplay;
              } else {
                showHide([elem], true);
                restoreDisplay = elem.style.display || restoreDisplay;
                display = jQuery.css(elem, "display");
                showHide([elem]);
              }
            }
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
              if (jQuery.css(elem, "float") === "none") {
                if (!propTween) {
                  anim.done(function() {
                    style.display = restoreDisplay;
                  });
                  if (restoreDisplay == null) {
                    display = style.display;
                    restoreDisplay = display === "none" ? "" : display;
                  }
                }
                style.display = "inline-block";
              }
            }
          }
          if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
              style.overflow = opts.overflow[0];
              style.overflowX = opts.overflow[1];
              style.overflowY = opts.overflow[2];
            });
          }
          propTween = false;
          for (prop in orig) {
            if (!propTween) {
              if (dataShow) {
                if ("hidden" in dataShow) {
                  hidden = dataShow.hidden;
                }
              } else {
                dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
              }
              if (toggle) {
                dataShow.hidden = !hidden;
              }
              if (hidden) {
                showHide([elem], true);
              }
              anim.done(function() {
                if (!hidden) {
                  showHide([elem]);
                }
                dataPriv.remove(elem, "fxshow");
                for (prop in orig) {
                  jQuery.style(elem, prop, orig[prop]);
                }
              });
            }
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
              dataShow[prop] = propTween.start;
              if (hidden) {
                propTween.end = propTween.start;
                propTween.start = 0;
              }
            }
          }
        }
        function propFilter(props, specialEasing) {
          var index, name, easing, value, hooks;
          for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
              easing = value[1];
              value = props[index] = value[0];
            }
            if (index !== name) {
              props[name] = value;
              delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
              value = hooks.expand(value);
              delete props[name];
              for (index in value) {
                if (!(index in props)) {
                  props[index] = value[index];
                  specialEasing[index] = easing;
                }
              }
            } else {
              specialEasing[name] = easing;
            }
          }
        }
        function Animation(elem, properties, options) {
          var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
            delete tick.elem;
          }), tick = function() {
            if (stopped) {
              return false;
            }
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
            for (; index2 < length2; index2++) {
              animation.tweens[index2].run(percent);
            }
            deferred.notifyWith(elem, [animation, percent, remaining]);
            if (percent < 1 && length2) {
              return remaining;
            }
            if (!length2) {
              deferred.notifyWith(elem, [animation, 1, 0]);
            }
            deferred.resolveWith(elem, [animation]);
            return false;
          }, animation = deferred.promise({
            elem,
            props: jQuery.extend({}, properties),
            opts: jQuery.extend(true, {
              specialEasing: {},
              easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
              var tween = jQuery.Tween(
                elem,
                animation.opts,
                prop,
                end,
                animation.opts.specialEasing[prop] || animation.opts.easing
              );
              animation.tweens.push(tween);
              return tween;
            },
            stop: function(gotoEnd) {
              var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
              if (stopped) {
                return this;
              }
              stopped = true;
              for (; index2 < length2; index2++) {
                animation.tweens[index2].run(1);
              }
              if (gotoEnd) {
                deferred.notifyWith(elem, [animation, 1, 0]);
                deferred.resolveWith(elem, [animation, gotoEnd]);
              } else {
                deferred.rejectWith(elem, [animation, gotoEnd]);
              }
              return this;
            }
          }), props = animation.props;
          propFilter(props, animation.opts.specialEasing);
          for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
              if (isFunction(result.stop)) {
                jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
              }
              return result;
            }
          }
          jQuery.map(props, createTween, animation);
          if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
          }
          animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
          jQuery.fx.timer(
            jQuery.extend(tick, {
              elem,
              anim: animation,
              queue: animation.opts.queue
            })
          );
          return animation;
        }
        jQuery.Animation = jQuery.extend(Animation, {
          tweeners: {
            "*": [function(prop, value) {
              var tween = this.createTween(prop, value);
              adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
              return tween;
            }]
          },
          tweener: function(props, callback) {
            if (isFunction(props)) {
              callback = props;
              props = ["*"];
            } else {
              props = props.match(rnothtmlwhite);
            }
            var prop, index = 0, length = props.length;
            for (; index < length; index++) {
              prop = props[index];
              Animation.tweeners[prop] = Animation.tweeners[prop] || [];
              Animation.tweeners[prop].unshift(callback);
            }
          },
          prefilters: [defaultPrefilter],
          prefilter: function(callback, prepend) {
            if (prepend) {
              Animation.prefilters.unshift(callback);
            } else {
              Animation.prefilters.push(callback);
            }
          }
        });
        jQuery.speed = function(speed, easing, fn) {
          var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
          };
          if (jQuery.fx.off) {
            opt.duration = 0;
          } else {
            if (typeof opt.duration !== "number") {
              if (opt.duration in jQuery.fx.speeds) {
                opt.duration = jQuery.fx.speeds[opt.duration];
              } else {
                opt.duration = jQuery.fx.speeds._default;
              }
            }
          }
          if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
          }
          opt.old = opt.complete;
          opt.complete = function() {
            if (isFunction(opt.old)) {
              opt.old.call(this);
            }
            if (opt.queue) {
              jQuery.dequeue(this, opt.queue);
            }
          };
          return opt;
        };
        jQuery.fn.extend({
          fadeTo: function(speed, to, easing, callback) {
            return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
          },
          animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              if (empty || dataPriv.get(this, "finish")) {
                anim.stop(true);
              }
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
          },
          stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
              var stop = hooks.stop;
              delete hooks.stop;
              stop(gotoEnd);
            };
            if (typeof type !== "string") {
              gotoEnd = clearQueue;
              clearQueue = type;
              type = void 0;
            }
            if (clearQueue) {
              this.queue(type || "fx", []);
            }
            return this.each(function() {
              var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
              if (index) {
                if (data[index] && data[index].stop) {
                  stopQueue(data[index]);
                }
              } else {
                for (index in data) {
                  if (data[index] && data[index].stop && rrun.test(index)) {
                    stopQueue(data[index]);
                  }
                }
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                  timers[index].anim.stop(gotoEnd);
                  dequeue = false;
                  timers.splice(index, 1);
                }
              }
              if (dequeue || !gotoEnd) {
                jQuery.dequeue(this, type);
              }
            });
          },
          finish: function(type) {
            if (type !== false) {
              type = type || "fx";
            }
            return this.each(function() {
              var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
              data.finish = true;
              jQuery.queue(this, type, []);
              if (hooks && hooks.stop) {
                hooks.stop.call(this, true);
              }
              for (index = timers.length; index--; ) {
                if (timers[index].elem === this && timers[index].queue === type) {
                  timers[index].anim.stop(true);
                  timers.splice(index, 1);
                }
              }
              for (index = 0; index < length; index++) {
                if (queue[index] && queue[index].finish) {
                  queue[index].finish.call(this);
                }
              }
              delete data.finish;
            });
          }
        });
        jQuery.each(["toggle", "show", "hide"], function(_i, name) {
          var cssFn = jQuery.fn[name];
          jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
          };
        });
        jQuery.each({
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" }
        }, function(name, props) {
          jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
          var timer, i10 = 0, timers = jQuery.timers;
          fxNow = Date.now();
          for (; i10 < timers.length; i10++) {
            timer = timers[i10];
            if (!timer() && timers[i10] === timer) {
              timers.splice(i10--, 1);
            }
          }
          if (!timers.length) {
            jQuery.fx.stop();
          }
          fxNow = void 0;
        };
        jQuery.fx.timer = function(timer) {
          jQuery.timers.push(timer);
          jQuery.fx.start();
        };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() {
          if (inProgress) {
            return;
          }
          inProgress = true;
          schedule();
        };
        jQuery.fx.stop = function() {
          inProgress = null;
        };
        jQuery.fx.speeds = {
          slow: 600,
          fast: 200,
          // Default speed
          _default: 400
        };
        jQuery.fn.delay = function(time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";
          return this.queue(type, function(next, hooks) {
            var timeout = window2.setTimeout(next, time);
            hooks.stop = function() {
              window2.clearTimeout(timeout);
            };
          });
        };
        (function() {
          var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
          input.type = "checkbox";
          support.checkOn = input.value !== "";
          support.optSelected = opt.selected;
          input = document2.createElement("input");
          input.value = "t";
          input.type = "radio";
          support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({
          attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
          },
          removeAttr: function(name) {
            return this.each(function() {
              jQuery.removeAttr(this, name);
            });
          }
        });
        jQuery.extend({
          attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (typeof elem.getAttribute === "undefined") {
              return jQuery.prop(elem, name, value);
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
            }
            if (value !== void 0) {
              if (value === null) {
                jQuery.removeAttr(elem, name);
                return;
              }
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              elem.setAttribute(name, value + "");
              return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            ret = jQuery.find.attr(elem, name);
            return ret == null ? void 0 : ret;
          },
          attrHooks: {
            type: {
              set: function(elem, value) {
                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                  var val = elem.value;
                  elem.setAttribute("type", value);
                  if (val) {
                    elem.value = val;
                  }
                  return value;
                }
              }
            }
          },
          removeAttr: function(elem, value) {
            var name, i10 = 0, attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) {
              while (name = attrNames[i10++]) {
                elem.removeAttribute(name);
              }
            }
          }
        });
        boolHook = {
          set: function(elem, value, name) {
            if (value === false) {
              jQuery.removeAttr(elem, name);
            } else {
              elem.setAttribute(name, name);
            }
            return name;
          }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] = function(elem, name2, isXML) {
            var ret, handle, lowercaseName = name2.toLowerCase();
            if (!isXML) {
              handle = attrHandle[lowercaseName];
              attrHandle[lowercaseName] = ret;
              ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
              attrHandle[lowercaseName] = handle;
            }
            return ret;
          };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({
          prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
          },
          removeProp: function(name) {
            return this.each(function() {
              delete this[jQuery.propFix[name] || name];
            });
          }
        });
        jQuery.extend({
          prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            if (nType === 3 || nType === 8 || nType === 2) {
              return;
            }
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
              name = jQuery.propFix[name] || name;
              hooks = jQuery.propHooks[name];
            }
            if (value !== void 0) {
              if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
                return ret;
              }
              return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
              return ret;
            }
            return elem[name];
          },
          propHooks: {
            tabIndex: {
              get: function(elem) {
                var tabindex = jQuery.find.attr(elem, "tabindex");
                if (tabindex) {
                  return parseInt(tabindex, 10);
                }
                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
                  return 0;
                }
                return -1;
              }
            }
          },
          propFix: {
            "for": "htmlFor",
            "class": "className"
          }
        });
        if (!support.optSelected) {
          jQuery.propHooks.selected = {
            get: function(elem) {
              var parent = elem.parentNode;
              if (parent && parent.parentNode) {
                parent.parentNode.selectedIndex;
              }
              return null;
            },
            set: function(elem) {
              var parent = elem.parentNode;
              if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) {
                  parent.parentNode.selectedIndex;
                }
              }
            }
          };
        }
        jQuery.each([
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable"
        ], function() {
          jQuery.propFix[this.toLowerCase()] = this;
        });
        function stripAndCollapse(value) {
          var tokens = value.match(rnothtmlwhite) || [];
          return tokens.join(" ");
        }
        function getClass(elem) {
          return elem.getAttribute && elem.getAttribute("class") || "";
        }
        function classesToArray(value) {
          if (Array.isArray(value)) {
            return value;
          }
          if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
          }
          return [];
        }
        jQuery.fn.extend({
          addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j2, finalValue, i10 = 0;
            if (isFunction(value)) {
              return this.each(function(j3) {
                jQuery(this).addClass(value.call(this, j3, getClass(this)));
              });
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i10++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j2 = 0;
                  while (clazz = classes[j2++]) {
                    if (cur.indexOf(" " + clazz + " ") < 0) {
                      cur += clazz + " ";
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j2, finalValue, i10 = 0;
            if (isFunction(value)) {
              return this.each(function(j3) {
                jQuery(this).removeClass(value.call(this, j3, getClass(this)));
              });
            }
            if (!arguments.length) {
              return this.attr("class", "");
            }
            classes = classesToArray(value);
            if (classes.length) {
              while (elem = this[i10++]) {
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                  j2 = 0;
                  while (clazz = classes[j2++]) {
                    while (cur.indexOf(" " + clazz + " ") > -1) {
                      cur = cur.replace(" " + clazz + " ", " ");
                    }
                  }
                  finalValue = stripAndCollapse(cur);
                  if (curValue !== finalValue) {
                    elem.setAttribute("class", finalValue);
                  }
                }
              }
            }
            return this;
          },
          toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) {
              return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            if (isFunction(value)) {
              return this.each(function(i10) {
                jQuery(this).toggleClass(
                  value.call(this, i10, getClass(this), stateVal),
                  stateVal
                );
              });
            }
            return this.each(function() {
              var className, i10, self, classNames;
              if (isValidValue) {
                i10 = 0;
                self = jQuery(this);
                classNames = classesToArray(value);
                while (className = classNames[i10++]) {
                  if (self.hasClass(className)) {
                    self.removeClass(className);
                  } else {
                    self.addClass(className);
                  }
                }
              } else if (value === void 0 || type === "boolean") {
                className = getClass(this);
                if (className) {
                  dataPriv.set(this, "__className__", className);
                }
                if (this.setAttribute) {
                  this.setAttribute(
                    "class",
                    className || value === false ? "" : dataPriv.get(this, "__className__") || ""
                  );
                }
              }
            });
          },
          hasClass: function(selector) {
            var className, elem, i10 = 0;
            className = " " + selector + " ";
            while (elem = this[i10++]) {
              if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                return true;
              }
            }
            return false;
          }
        });
        var rreturn = /\r/g;
        jQuery.fn.extend({
          val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
              if (elem) {
                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
                  return ret;
                }
                ret = elem.value;
                if (typeof ret === "string") {
                  return ret.replace(rreturn, "");
                }
                return ret == null ? "" : ret;
              }
              return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i10) {
              var val;
              if (this.nodeType !== 1) {
                return;
              }
              if (valueIsFunction) {
                val = value.call(this, i10, jQuery(this).val());
              } else {
                val = value;
              }
              if (val == null) {
                val = "";
              } else if (typeof val === "number") {
                val += "";
              } else if (Array.isArray(val)) {
                val = jQuery.map(val, function(value2) {
                  return value2 == null ? "" : value2 + "";
                });
              }
              hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
              if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
                this.value = val;
              }
            });
          }
        });
        jQuery.extend({
          valHooks: {
            option: {
              get: function(elem) {
                var val = jQuery.find.attr(elem, "value");
                return val != null ? val : (
                  // Support: IE <=10 - 11 only
                  // option.text throws exceptions (#14686, #14858)
                  // Strip and collapse whitespace
                  // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                  stripAndCollapse(jQuery.text(elem))
                );
              }
            },
            select: {
              get: function(elem) {
                var value, option, i10, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
                if (index < 0) {
                  i10 = max2;
                } else {
                  i10 = one ? index : 0;
                }
                for (; i10 < max2; i10++) {
                  option = options[i10];
                  if ((option.selected || i10 === index) && // Don't return options that are disabled or in a disabled optgroup
                  !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                    value = jQuery(option).val();
                    if (one) {
                      return value;
                    }
                    values.push(value);
                  }
                }
                return values;
              },
              set: function(elem, value) {
                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i10 = options.length;
                while (i10--) {
                  option = options[i10];
                  if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                    optionSet = true;
                  }
                }
                if (!optionSet) {
                  elem.selectedIndex = -1;
                }
                return values;
              }
            }
          }
        });
        jQuery.each(["radio", "checkbox"], function() {
          jQuery.valHooks[this] = {
            set: function(elem, value) {
              if (Array.isArray(value)) {
                return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
              }
            }
          };
          if (!support.checkOn) {
            jQuery.valHooks[this].get = function(elem) {
              return elem.getAttribute("value") === null ? "on" : elem.value;
            };
          }
        });
        support.focusin = "onfocusin" in window2;
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e12) {
          e12.stopPropagation();
        };
        jQuery.extend(jQuery.event, {
          trigger: function(event, data, elem, onlyHandlers) {
            var i10, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document2;
            if (elem.nodeType === 3 || elem.nodeType === 8) {
              return;
            }
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
              return;
            }
            if (type.indexOf(".") > -1) {
              namespaces = type.split(".");
              type = namespaces.shift();
              namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            event.result = void 0;
            if (!event.target) {
              event.target = elem;
            }
            data = data == null ? [event] : jQuery.makeArray(data, [event]);
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
              return;
            }
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
              bubbleType = special.delegateType || type;
              if (!rfocusMorph.test(bubbleType + type)) {
                cur = cur.parentNode;
              }
              for (; cur; cur = cur.parentNode) {
                eventPath.push(cur);
                tmp = cur;
              }
              if (tmp === (elem.ownerDocument || document2)) {
                eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
              }
            }
            i10 = 0;
            while ((cur = eventPath[i10++]) && !event.isPropagationStopped()) {
              lastElement = cur;
              event.type = i10 > 1 ? bubbleType : special.bindType || type;
              handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
              if (handle) {
                handle.apply(cur, data);
              }
              handle = ontype && cur[ontype];
              if (handle && handle.apply && acceptData(cur)) {
                event.result = handle.apply(cur, data);
                if (event.result === false) {
                  event.preventDefault();
                }
              }
            }
            event.type = type;
            if (!onlyHandlers && !event.isDefaultPrevented()) {
              if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                  tmp = elem[ontype];
                  if (tmp) {
                    elem[ontype] = null;
                  }
                  jQuery.event.triggered = type;
                  if (event.isPropagationStopped()) {
                    lastElement.addEventListener(type, stopPropagationCallback);
                  }
                  elem[type]();
                  if (event.isPropagationStopped()) {
                    lastElement.removeEventListener(type, stopPropagationCallback);
                  }
                  jQuery.event.triggered = void 0;
                  if (tmp) {
                    elem[ontype] = tmp;
                  }
                }
              }
            }
            return event.result;
          },
          // Piggyback on a donor event to simulate a different one
          // Used only for `focus(in | out)` events
          simulate: function(type, elem, event) {
            var e12 = jQuery.extend(
              new jQuery.Event(),
              event,
              {
                type,
                isSimulated: true
              }
            );
            jQuery.event.trigger(e12, null, elem);
          }
        });
        jQuery.fn.extend({
          trigger: function(type, data) {
            return this.each(function() {
              jQuery.event.trigger(type, data, this);
            });
          },
          triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) {
              return jQuery.event.trigger(type, data, elem, true);
            }
          }
        });
        if (!support.focusin) {
          jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
            var handler = function(event) {
              jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };
            jQuery.event.special[fix] = {
              setup: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) {
                  doc.addEventListener(orig, handler, true);
                }
                dataPriv.access(doc, fix, (attaches || 0) + 1);
              },
              teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                  doc.removeEventListener(orig, handler, true);
                  dataPriv.remove(doc, fix);
                } else {
                  dataPriv.access(doc, fix, attaches);
                }
              }
            };
          });
        }
        var location = window2.location;
        var nonce = { guid: Date.now() };
        var rquery = /\?/;
        jQuery.parseXML = function(data) {
          var xml;
          if (!data || typeof data !== "string") {
            return null;
          }
          try {
            xml = new window2.DOMParser().parseFromString(data, "text/xml");
          } catch (e12) {
            xml = void 0;
          }
          if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
          }
          return xml;
        };
        var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
        function buildParams(prefix, obj, traditional, add) {
          var name;
          if (Array.isArray(obj)) {
            jQuery.each(obj, function(i10, v2) {
              if (traditional || rbracket.test(prefix)) {
                add(prefix, v2);
              } else {
                buildParams(
                  prefix + "[" + (typeof v2 === "object" && v2 != null ? i10 : "") + "]",
                  v2,
                  traditional,
                  add
                );
              }
            });
          } else if (!traditional && toType(obj) === "object") {
            for (name in obj) {
              buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }
          } else {
            add(prefix, obj);
          }
        }
        jQuery.param = function(a4, traditional) {
          var prefix, s5 = [], add = function(key, valueOrFunction) {
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s5[s5.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
          };
          if (a4 == null) {
            return "";
          }
          if (Array.isArray(a4) || a4.jquery && !jQuery.isPlainObject(a4)) {
            jQuery.each(a4, function() {
              add(this.name, this.value);
            });
          } else {
            for (prefix in a4) {
              buildParams(prefix, a4[prefix], traditional, add);
            }
          }
          return s5.join("&");
        };
        jQuery.fn.extend({
          serialize: function() {
            return jQuery.param(this.serializeArray());
          },
          serializeArray: function() {
            return this.map(function() {
              var elements = jQuery.prop(this, "elements");
              return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
              var type = this.type;
              return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
              var val = jQuery(this).val();
              if (val == null) {
                return null;
              }
              if (Array.isArray(val)) {
                return jQuery.map(val, function(val2) {
                  return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
                });
              }
              return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            }).get();
          }
        });
        var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
        originAnchor.href = location.href;
        function addToPrefiltersOrTransports(structure) {
          return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
              func = dataTypeExpression;
              dataTypeExpression = "*";
            }
            var dataType, i10 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
              while (dataType = dataTypes[i10++]) {
                if (dataType[0] === "+") {
                  dataType = dataType.slice(1) || "*";
                  (structure[dataType] = structure[dataType] || []).unshift(func);
                } else {
                  (structure[dataType] = structure[dataType] || []).push(func);
                }
              }
            }
          };
        }
        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
          var inspected = {}, seekingTransport = structure === transports;
          function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
              if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                options.dataTypes.unshift(dataTypeOrTransport);
                inspect(dataTypeOrTransport);
                return false;
              } else if (seekingTransport) {
                return !(selected = dataTypeOrTransport);
              }
            });
            return selected;
          }
          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }
        function ajaxExtend(target, src) {
          var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
          for (key in src) {
            if (src[key] !== void 0) {
              (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
          }
          if (deep) {
            jQuery.extend(true, target, deep);
          }
          return target;
        }
        function ajaxHandleResponses(s5, jqXHR, responses) {
          var ct, type, finalDataType, firstDataType, contents = s5.contents, dataTypes = s5.dataTypes;
          while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === void 0) {
              ct = s5.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
          }
          if (ct) {
            for (type in contents) {
              if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
              }
            }
          }
          if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
          } else {
            for (type in responses) {
              if (!dataTypes[0] || s5.converters[type + " " + dataTypes[0]]) {
                finalDataType = type;
                break;
              }
              if (!firstDataType) {
                firstDataType = type;
              }
            }
            finalDataType = finalDataType || firstDataType;
          }
          if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
              dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
          }
        }
        function ajaxConvert(s5, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s5.dataTypes.slice();
          if (dataTypes[1]) {
            for (conv in s5.converters) {
              converters[conv.toLowerCase()] = s5.converters[conv];
            }
          }
          current = dataTypes.shift();
          while (current) {
            if (s5.responseFields[current]) {
              jqXHR[s5.responseFields[current]] = response;
            }
            if (!prev && isSuccess && s5.dataFilter) {
              response = s5.dataFilter(response, s5.dataType);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
              if (current === "*") {
                current = prev;
              } else if (prev !== "*" && prev !== current) {
                conv = converters[prev + " " + current] || converters["* " + current];
                if (!conv) {
                  for (conv2 in converters) {
                    tmp = conv2.split(" ");
                    if (tmp[1] === current) {
                      conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                      if (conv) {
                        if (conv === true) {
                          conv = converters[conv2];
                        } else if (converters[conv2] !== true) {
                          current = tmp[0];
                          dataTypes.unshift(tmp[1]);
                        }
                        break;
                      }
                    }
                  }
                }
                if (conv !== true) {
                  if (conv && s5.throws) {
                    response = conv(response);
                  } else {
                    try {
                      response = conv(response);
                    } catch (e12) {
                      return {
                        state: "parsererror",
                        error: conv ? e12 : "No conversion from " + prev + " to " + current
                      };
                    }
                  }
                }
              }
            }
          }
          return { state: "success", data: response };
        }
        jQuery.extend({
          // Counter for holding the number of active queries
          active: 0,
          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
            timeout: 0,
            data: null,
            dataType: null,
            username: null,
            password: null,
            cache: null,
            throws: false,
            traditional: false,
            headers: {},
            */
            accepts: {
              "*": allTypes,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript"
            },
            contents: {
              xml: /\bxml\b/,
              html: /\bhtml/,
              json: /\bjson\b/
            },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
              // Convert anything to text
              "* text": String,
              // Text to html (true = no transformation)
              "text html": true,
              // Evaluate text as a json expression
              "text json": JSON.parse,
              // Parse text as xml
              "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
              url: true,
              context: true
            }
          },
          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function(target, settings) {
            return settings ? (
              // Building a settings object
              ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            ) : (
              // Extending ajaxSettings
              ajaxExtend(jQuery.ajaxSettings, target)
            );
          },
          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),
          // Main method
          ajax: function(url, options) {
            if (typeof url === "object") {
              options = url;
              url = void 0;
            }
            options = options || {};
            var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i10, uncached, s5 = jQuery.ajaxSetup({}, options), callbackContext = s5.context || s5, globalEventContext = s5.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s5.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
              readyState: 0,
              // Builds headers hashtable if needed
              getResponseHeader: function(key) {
                var match;
                if (completed2) {
                  if (!responseHeaders) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                      responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                    }
                  }
                  match = responseHeaders[key.toLowerCase() + " "];
                }
                return match == null ? null : match.join(", ");
              },
              // Raw string
              getAllResponseHeaders: function() {
                return completed2 ? responseHeadersString : null;
              },
              // Caches the header
              setRequestHeader: function(name, value) {
                if (completed2 == null) {
                  name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                  requestHeaders[name] = value;
                }
                return this;
              },
              // Overrides response content-type header
              overrideMimeType: function(type) {
                if (completed2 == null) {
                  s5.mimeType = type;
                }
                return this;
              },
              // Status-dependent callbacks
              statusCode: function(map) {
                var code;
                if (map) {
                  if (completed2) {
                    jqXHR.always(map[jqXHR.status]);
                  } else {
                    for (code in map) {
                      statusCode[code] = [statusCode[code], map[code]];
                    }
                  }
                }
                return this;
              },
              // Cancel the request
              abort: function(statusText) {
                var finalText = statusText || strAbort;
                if (transport) {
                  transport.abort(finalText);
                }
                done(0, finalText);
                return this;
              }
            };
            deferred.promise(jqXHR);
            s5.url = ((url || s5.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            s5.type = options.method || options.type || s5.method || s5.type;
            s5.dataTypes = (s5.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
            if (s5.crossDomain == null) {
              urlAnchor = document2.createElement("a");
              try {
                urlAnchor.href = s5.url;
                urlAnchor.href = urlAnchor.href;
                s5.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
              } catch (e12) {
                s5.crossDomain = true;
              }
            }
            if (s5.data && s5.processData && typeof s5.data !== "string") {
              s5.data = jQuery.param(s5.data, s5.traditional);
            }
            inspectPrefiltersOrTransports(prefilters, s5, options, jqXHR);
            if (completed2) {
              return jqXHR;
            }
            fireGlobals = jQuery.event && s5.global;
            if (fireGlobals && jQuery.active++ === 0) {
              jQuery.event.trigger("ajaxStart");
            }
            s5.type = s5.type.toUpperCase();
            s5.hasContent = !rnoContent.test(s5.type);
            cacheURL = s5.url.replace(rhash, "");
            if (!s5.hasContent) {
              uncached = s5.url.slice(cacheURL.length);
              if (s5.data && (s5.processData || typeof s5.data === "string")) {
                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s5.data;
                delete s5.data;
              }
              if (s5.cache === false) {
                cacheURL = cacheURL.replace(rantiCache, "$1");
                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
              }
              s5.url = cacheURL + uncached;
            } else if (s5.data && s5.processData && (s5.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
              s5.data = s5.data.replace(r20, "+");
            }
            if (s5.ifModified) {
              if (jQuery.lastModified[cacheURL]) {
                jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
              }
              if (jQuery.etag[cacheURL]) {
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
              }
            }
            if (s5.data && s5.hasContent && s5.contentType !== false || options.contentType) {
              jqXHR.setRequestHeader("Content-Type", s5.contentType);
            }
            jqXHR.setRequestHeader(
              "Accept",
              s5.dataTypes[0] && s5.accepts[s5.dataTypes[0]] ? s5.accepts[s5.dataTypes[0]] + (s5.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s5.accepts["*"]
            );
            for (i10 in s5.headers) {
              jqXHR.setRequestHeader(i10, s5.headers[i10]);
            }
            if (s5.beforeSend && (s5.beforeSend.call(callbackContext, jqXHR, s5) === false || completed2)) {
              return jqXHR.abort();
            }
            strAbort = "abort";
            completeDeferred.add(s5.complete);
            jqXHR.done(s5.success);
            jqXHR.fail(s5.error);
            transport = inspectPrefiltersOrTransports(transports, s5, options, jqXHR);
            if (!transport) {
              done(-1, "No Transport");
            } else {
              jqXHR.readyState = 1;
              if (fireGlobals) {
                globalEventContext.trigger("ajaxSend", [jqXHR, s5]);
              }
              if (completed2) {
                return jqXHR;
              }
              if (s5.async && s5.timeout > 0) {
                timeoutTimer = window2.setTimeout(function() {
                  jqXHR.abort("timeout");
                }, s5.timeout);
              }
              try {
                completed2 = false;
                transport.send(requestHeaders, done);
              } catch (e12) {
                if (completed2) {
                  throw e12;
                }
                done(-1, e12);
              }
            }
            function done(status, nativeStatusText, responses, headers) {
              var isSuccess, success, error, response, modified, statusText = nativeStatusText;
              if (completed2) {
                return;
              }
              completed2 = true;
              if (timeoutTimer) {
                window2.clearTimeout(timeoutTimer);
              }
              transport = void 0;
              responseHeadersString = headers || "";
              jqXHR.readyState = status > 0 ? 4 : 0;
              isSuccess = status >= 200 && status < 300 || status === 304;
              if (responses) {
                response = ajaxHandleResponses(s5, jqXHR, responses);
              }
              if (!isSuccess && jQuery.inArray("script", s5.dataTypes) > -1) {
                s5.converters["text script"] = function() {
                };
              }
              response = ajaxConvert(s5, response, jqXHR, isSuccess);
              if (isSuccess) {
                if (s5.ifModified) {
                  modified = jqXHR.getResponseHeader("Last-Modified");
                  if (modified) {
                    jQuery.lastModified[cacheURL] = modified;
                  }
                  modified = jqXHR.getResponseHeader("etag");
                  if (modified) {
                    jQuery.etag[cacheURL] = modified;
                  }
                }
                if (status === 204 || s5.type === "HEAD") {
                  statusText = "nocontent";
                } else if (status === 304) {
                  statusText = "notmodified";
                } else {
                  statusText = response.state;
                  success = response.data;
                  error = response.error;
                  isSuccess = !error;
                }
              } else {
                error = statusText;
                if (status || !statusText) {
                  statusText = "error";
                  if (status < 0) {
                    status = 0;
                  }
                }
              }
              jqXHR.status = status;
              jqXHR.statusText = (nativeStatusText || statusText) + "";
              if (isSuccess) {
                deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
              } else {
                deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
              }
              jqXHR.statusCode(statusCode);
              statusCode = void 0;
              if (fireGlobals) {
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s5, isSuccess ? success : error]
                );
              }
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
              if (fireGlobals) {
                globalEventContext.trigger("ajaxComplete", [jqXHR, s5]);
                if (!--jQuery.active) {
                  jQuery.event.trigger("ajaxStop");
                }
              }
            }
            return jqXHR;
          },
          getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
          },
          getScript: function(url, callback) {
            return jQuery.get(url, void 0, callback, "script");
          }
        });
        jQuery.each(["get", "post"], function(_i, method) {
          jQuery[method] = function(url, data, callback, type) {
            if (isFunction(data)) {
              type = type || callback;
              callback = data;
              data = void 0;
            }
            return jQuery.ajax(jQuery.extend({
              url,
              type: method,
              dataType: type,
              data,
              success: callback
            }, jQuery.isPlainObject(url) && url));
          };
        });
        jQuery.ajaxPrefilter(function(s5) {
          var i10;
          for (i10 in s5.headers) {
            if (i10.toLowerCase() === "content-type") {
              s5.contentType = s5.headers[i10] || "";
            }
          }
        });
        jQuery._evalUrl = function(url, options, doc) {
          return jQuery.ajax({
            url,
            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
              "text script": function() {
              }
            },
            dataFilter: function(response) {
              jQuery.globalEval(response, options, doc);
            }
          });
        };
        jQuery.fn.extend({
          wrapAll: function(html) {
            var wrap;
            if (this[0]) {
              if (isFunction(html)) {
                html = html.call(this[0]);
              }
              wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
              if (this[0].parentNode) {
                wrap.insertBefore(this[0]);
              }
              wrap.map(function() {
                var elem = this;
                while (elem.firstElementChild) {
                  elem = elem.firstElementChild;
                }
                return elem;
              }).append(this);
            }
            return this;
          },
          wrapInner: function(html) {
            if (isFunction(html)) {
              return this.each(function(i10) {
                jQuery(this).wrapInner(html.call(this, i10));
              });
            }
            return this.each(function() {
              var self = jQuery(this), contents = self.contents();
              if (contents.length) {
                contents.wrapAll(html);
              } else {
                self.append(html);
              }
            });
          },
          wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i10) {
              jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i10) : html);
            });
          },
          unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
              jQuery(this).replaceWith(this.childNodes);
            });
            return this;
          }
        });
        jQuery.expr.pseudos.hidden = function(elem) {
          return !jQuery.expr.pseudos.visible(elem);
        };
        jQuery.expr.pseudos.visible = function(elem) {
          return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
        };
        jQuery.ajaxSettings.xhr = function() {
          try {
            return new window2.XMLHttpRequest();
          } catch (e12) {
          }
        };
        var xhrSuccessStatus = {
          // File protocol always yields status code 0, assume 200
          0: 200,
          // Support: IE <=9 only
          // #1450: sometimes IE returns 1223 when it should be 204
          1223: 204
        }, xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
          var callback, errorCallback;
          if (support.cors || xhrSupported && !options.crossDomain) {
            return {
              send: function(headers, complete) {
                var i10, xhr = options.xhr();
                xhr.open(
                  options.type,
                  options.url,
                  options.async,
                  options.username,
                  options.password
                );
                if (options.xhrFields) {
                  for (i10 in options.xhrFields) {
                    xhr[i10] = options.xhrFields[i10];
                  }
                }
                if (options.mimeType && xhr.overrideMimeType) {
                  xhr.overrideMimeType(options.mimeType);
                }
                if (!options.crossDomain && !headers["X-Requested-With"]) {
                  headers["X-Requested-With"] = "XMLHttpRequest";
                }
                for (i10 in headers) {
                  xhr.setRequestHeader(i10, headers[i10]);
                }
                callback = function(type) {
                  return function() {
                    if (callback) {
                      callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                      if (type === "abort") {
                        xhr.abort();
                      } else if (type === "error") {
                        if (typeof xhr.status !== "number") {
                          complete(0, "error");
                        } else {
                          complete(
                            // File: protocol always yields status 0; see #8605, #14207
                            xhr.status,
                            xhr.statusText
                          );
                        }
                      } else {
                        complete(
                          xhrSuccessStatus[xhr.status] || xhr.status,
                          xhr.statusText,
                          // Support: IE <=9 only
                          // IE9 has no XHR2 but throws on binary (trac-11426)
                          // For XHR2 non-text, let the caller handle it (gh-2498)
                          (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                          xhr.getAllResponseHeaders()
                        );
                      }
                    }
                  };
                };
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                if (xhr.onabort !== void 0) {
                  xhr.onabort = errorCallback;
                } else {
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      window2.setTimeout(function() {
                        if (callback) {
                          errorCallback();
                        }
                      });
                    }
                  };
                }
                callback = callback("abort");
                try {
                  xhr.send(options.hasContent && options.data || null);
                } catch (e12) {
                  if (callback) {
                    throw e12;
                  }
                }
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        jQuery.ajaxPrefilter(function(s5) {
          if (s5.crossDomain) {
            s5.contents.script = false;
          }
        });
        jQuery.ajaxSetup({
          accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
            script: /\b(?:java|ecma)script\b/
          },
          converters: {
            "text script": function(text) {
              jQuery.globalEval(text);
              return text;
            }
          }
        });
        jQuery.ajaxPrefilter("script", function(s5) {
          if (s5.cache === void 0) {
            s5.cache = false;
          }
          if (s5.crossDomain) {
            s5.type = "GET";
          }
        });
        jQuery.ajaxTransport("script", function(s5) {
          if (s5.crossDomain || s5.scriptAttrs) {
            var script, callback;
            return {
              send: function(_2, complete) {
                script = jQuery("<script>").attr(s5.scriptAttrs || {}).prop({ charset: s5.scriptCharset, src: s5.url }).on("load error", callback = function(evt) {
                  script.remove();
                  callback = null;
                  if (evt) {
                    complete(evt.type === "error" ? 404 : 200, evt.type);
                  }
                });
                document2.head.appendChild(script[0]);
              },
              abort: function() {
                if (callback) {
                  callback();
                }
              }
            };
          }
        });
        var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
          }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s5, originalSettings, jqXHR) {
          var callbackName, overwritten, responseContainer, jsonProp = s5.jsonp !== false && (rjsonp.test(s5.url) ? "url" : typeof s5.data === "string" && (s5.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s5.data) && "data");
          if (jsonProp || s5.dataTypes[0] === "jsonp") {
            callbackName = s5.jsonpCallback = isFunction(s5.jsonpCallback) ? s5.jsonpCallback() : s5.jsonpCallback;
            if (jsonProp) {
              s5[jsonProp] = s5[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s5.jsonp !== false) {
              s5.url += (rquery.test(s5.url) ? "&" : "?") + s5.jsonp + "=" + callbackName;
            }
            s5.converters["script json"] = function() {
              if (!responseContainer) {
                jQuery.error(callbackName + " was not called");
              }
              return responseContainer[0];
            };
            s5.dataTypes[0] = "json";
            overwritten = window2[callbackName];
            window2[callbackName] = function() {
              responseContainer = arguments;
            };
            jqXHR.always(function() {
              if (overwritten === void 0) {
                jQuery(window2).removeProp(callbackName);
              } else {
                window2[callbackName] = overwritten;
              }
              if (s5[callbackName]) {
                s5.jsonpCallback = originalSettings.jsonpCallback;
                oldCallbacks.push(callbackName);
              }
              if (responseContainer && isFunction(overwritten)) {
                overwritten(responseContainer[0]);
              }
              responseContainer = overwritten = void 0;
            });
            return "script";
          }
        });
        support.createHTMLDocument = function() {
          var body = document2.implementation.createHTMLDocument("").body;
          body.innerHTML = "<form></form><form></form>";
          return body.childNodes.length === 2;
        }();
        jQuery.parseHTML = function(data, context, keepScripts) {
          if (typeof data !== "string") {
            return [];
          }
          if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
          }
          var base, parsed, scripts;
          if (!context) {
            if (support.createHTMLDocument) {
              context = document2.implementation.createHTMLDocument("");
              base = context.createElement("base");
              base.href = document2.location.href;
              context.head.appendChild(base);
            } else {
              context = document2;
            }
          }
          parsed = rsingleTag.exec(data);
          scripts = !keepScripts && [];
          if (parsed) {
            return [context.createElement(parsed[1])];
          }
          parsed = buildFragment([data], context, scripts);
          if (scripts && scripts.length) {
            jQuery(scripts).remove();
          }
          return jQuery.merge([], parsed.childNodes);
        };
        jQuery.fn.load = function(url, params, callback) {
          var selector, type, response, self = this, off = url.indexOf(" ");
          if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
          }
          if (isFunction(params)) {
            callback = params;
            params = void 0;
          } else if (params && typeof params === "object") {
            type = "POST";
          }
          if (self.length > 0) {
            jQuery.ajax({
              url,
              // If "type" variable is undefined, then "GET" method will be used.
              // Make value of this field explicit since
              // user can override it through ajaxSetup method
              type: type || "GET",
              dataType: "html",
              data: params
            }).done(function(responseText) {
              response = arguments;
              self.html(selector ? (
                // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector)
              ) : (
                // Otherwise use the full result
                responseText
              ));
            }).always(callback && function(jqXHR, status) {
              self.each(function() {
                callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
              });
            });
          }
          return this;
        };
        jQuery.expr.pseudos.animated = function(elem) {
          return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
          }).length;
        };
        jQuery.offset = {
          setOffset: function(elem, options, i10) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
            if (position === "static") {
              elem.style.position = "relative";
            }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            if (calculatePosition) {
              curPosition = curElem.position();
              curTop = curPosition.top;
              curLeft = curPosition.left;
            } else {
              curTop = parseFloat(curCSSTop) || 0;
              curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) {
              options = options.call(elem, i10, jQuery.extend({}, curOffset));
            }
            if (options.top != null) {
              props.top = options.top - curOffset.top + curTop;
            }
            if (options.left != null) {
              props.left = options.left - curOffset.left + curLeft;
            }
            if ("using" in options) {
              options.using.call(elem, props);
            } else {
              if (typeof props.top === "number") {
                props.top += "px";
              }
              if (typeof props.left === "number") {
                props.left += "px";
              }
              curElem.css(props);
            }
          }
        };
        jQuery.fn.extend({
          // offset() relates an element's border box to the document origin
          offset: function(options) {
            if (arguments.length) {
              return options === void 0 ? this : this.each(function(i10) {
                jQuery.offset.setOffset(this, options, i10);
              });
            }
            var rect, win, elem = this[0];
            if (!elem) {
              return;
            }
            if (!elem.getClientRects().length) {
              return { top: 0, left: 0 };
            }
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
              top: rect.top + win.pageYOffset,
              left: rect.left + win.pageXOffset
            };
          },
          // position() relates an element's margin box to its offset parent's padding box
          // This corresponds to the behavior of CSS absolute positioning
          position: function() {
            if (!this[0]) {
              return;
            }
            var offsetParent, offset3, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
            if (jQuery.css(elem, "position") === "fixed") {
              offset3 = elem.getBoundingClientRect();
            } else {
              offset3 = this.offset();
              doc = elem.ownerDocument;
              offsetParent = elem.offsetParent || doc.documentElement;
              while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.parentNode;
              }
              if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                parentOffset = jQuery(offsetParent).offset();
                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
              }
            }
            return {
              top: offset3.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
              left: offset3.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
          },
          // This method will return documentElement in the following cases:
          // 1) For the element inside the iframe without offsetParent, this method will return
          //    documentElement of the parent window
          // 2) For the hidden or detached element
          // 3) For body or html element, i.e. in case of the html node - it will return itself
          //
          // but those exceptions were never presented as a real life use-cases
          // and might be considered as more preferable results.
          //
          // This logic, however, is not guaranteed and can change at any point in the future
          offsetParent: function() {
            return this.map(function() {
              var offsetParent = this.offsetParent;
              while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                offsetParent = offsetParent.offsetParent;
              }
              return offsetParent || documentElement;
            });
          }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
          var top = "pageYOffset" === prop;
          jQuery.fn[method] = function(val) {
            return access(this, function(elem, method2, val2) {
              var win;
              if (isWindow(elem)) {
                win = elem;
              } else if (elem.nodeType === 9) {
                win = elem.defaultView;
              }
              if (val2 === void 0) {
                return win ? win[prop] : elem[method2];
              }
              if (win) {
                win.scrollTo(
                  !top ? val2 : win.pageXOffset,
                  top ? val2 : win.pageYOffset
                );
              } else {
                elem[method2] = val2;
              }
            }, method, val, arguments.length);
          };
        });
        jQuery.each(["top", "left"], function(_i, prop) {
          jQuery.cssHooks[prop] = addGetHookIf(
            support.pixelPosition,
            function(elem, computed) {
              if (computed) {
                computed = curCSS(elem, prop);
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
              }
            }
          );
        });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
          jQuery.each(
            { padding: "inner" + name, content: type, "": "outer" + name },
            function(defaultExtra, funcName) {
              jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type2, value2) {
                  var doc;
                  if (isWindow(elem)) {
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                  }
                  if (elem.nodeType === 9) {
                    doc = elem.documentElement;
                    return Math.max(
                      elem.body["scroll" + name],
                      doc["scroll" + name],
                      elem.body["offset" + name],
                      doc["offset" + name],
                      doc["client" + name]
                    );
                  }
                  return value2 === void 0 ? (
                    // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type2, extra)
                  ) : (
                    // Set width or height on the element
                    jQuery.style(elem, type2, value2, extra)
                  );
                }, type, chainable ? margin : void 0, chainable);
              };
            }
          );
        });
        jQuery.each([
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend"
        ], function(_i, type) {
          jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
          };
        });
        jQuery.fn.extend({
          bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
          },
          unbind: function(types, fn) {
            return this.off(types, null, fn);
          },
          delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
          },
          undelegate: function(selector, types, fn) {
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
          },
          hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
          }
        });
        jQuery.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
          function(_i, name) {
            jQuery.fn[name] = function(data, fn) {
              return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
            };
          }
        );
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        jQuery.proxy = function(fn, context) {
          var tmp, args, proxy;
          if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
          }
          if (!isFunction(fn)) {
            return void 0;
          }
          args = slice.call(arguments, 2);
          proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
          };
          proxy.guid = fn.guid = fn.guid || jQuery.guid++;
          return proxy;
        };
        jQuery.holdReady = function(hold) {
          if (hold) {
            jQuery.readyWait++;
          } else {
            jQuery.ready(true);
          }
        };
        jQuery.isArray = Array.isArray;
        jQuery.parseJSON = JSON.parse;
        jQuery.nodeName = nodeName;
        jQuery.isFunction = isFunction;
        jQuery.isWindow = isWindow;
        jQuery.camelCase = camelCase;
        jQuery.type = toType;
        jQuery.now = Date.now;
        jQuery.isNumeric = function(obj) {
          var type = jQuery.type(obj);
          return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
          // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
          // subtraction forces infinities to NaN
          !isNaN(obj - parseFloat(obj));
        };
        jQuery.trim = function(text) {
          return text == null ? "" : (text + "").replace(rtrim, "");
        };
        if (typeof define === "function" && define.amd) {
          define("jquery", [], function() {
            return jQuery;
          });
        }
        var _jQuery = window2.jQuery, _$ = window2.$;
        jQuery.noConflict = function(deep) {
          if (window2.$ === jQuery) {
            window2.$ = _$;
          }
          if (deep && window2.jQuery === jQuery) {
            window2.jQuery = _jQuery;
          }
          return jQuery;
        };
        if (typeof noGlobal === "undefined") {
          window2.jQuery = window2.$ = jQuery;
        }
        return jQuery;
      });
    }
  });

  // app/javascript/jquery.js
  function defineJQuery(target) {
    if (typeof target !== "undefined" && target.$ === void 0) {
      target.$ = target.jQuery = target.jquery = import_jquery.default;
    }
  }
  var import_jquery;
  var init_jquery = __esm({
    "app/javascript/jquery.js"() {
      import_jquery = __toESM(require_jquery());
      if (typeof window !== "undefined") {
        defineJQuery(window);
      }
      if (typeof window !== "undefined") {
        defineJQuery(window);
      }
    }
  });

  // app/javascript/entrypoints/customer-center/cc-web-components.js
  init_define_process();
  init_jquery();

  // app/javascript/customer_center/web_components/index.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/utilities/animation-registry.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KAW7D32O.js
  init_define_process();
  init_jquery();
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp2.call(b3, prop))
        __defNormalProp2(a4, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp2(a4, prop, b3[prop]);
      }
    return a4;
  };
  var __spreadProps = (a4, b3) => __defProps(a4, __getOwnPropDescs(b3));
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
    for (var i10 = decorators.length - 1, decorator; i10 >= 0; i10--)
      if (decorator = decorators[i10])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp2(target, key, result);
    return result;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k2) => it[k2] = (x2) => obj[k2](x2);
    } else {
      obj = obj.call(value);
      method = (k2) => it[k2] = (v2) => {
        if (isAwait) {
          isAwait = false;
          if (k2 === "throw") throw v2;
          return v2;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x2 = obj[k2](v2);
            if (!(x2 instanceof Object)) __typeError("Object expected");
            resolve(x2);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
      throw x2;
    }, "return" in obj && method("return"), it;
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K7JGTRV7.js
  var defaultAnimationRegistry = /* @__PURE__ */ new Map();
  var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
  function ensureAnimation(animation) {
    return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
  }
  function getLogicalAnimation(animation, dir) {
    if (dir.toLowerCase() === "rtl") {
      return {
        keyframes: animation.rtlKeyframes || animation.keyframes,
        options: animation.options
      };
    }
    return animation;
  }
  function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
  }
  function getAnimation(el, animationName, options) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation == null ? void 0 : customAnimation[animationName]) {
      return getLogicalAnimation(customAnimation[animationName], options.dir);
    }
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) {
      return getLogicalAnimation(defaultAnimation, options.dir);
    }
    return {
      keyframes: [],
      options: { duration: 0 }
    };
  }

  // node_modules/@shoelace-style/shoelace/dist/components/alert/alert.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R45OWEVP.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6UPB6RWT.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LD4M4QGE.js
  init_define_process();
  init_jquery();
  var blurActiveElement = (elm) => {
    var _a;
    const { activeElement } = document;
    if (activeElement && elm.contains(activeElement)) {
      (_a = document.activeElement) == null ? void 0 : _a.blur();
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7E4JTYWU.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
  init_define_process();
  init_jquery();

  // node_modules/lit/index.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/reactive-element.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/css-tag.js
  init_define_process();
  init_jquery();
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t8, e12, o11) {
      if (this._$cssResult$ = true, o11 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t8, this.t = e12;
    }
    get styleSheet() {
      let t8 = this.o;
      const s5 = this.t;
      if (e && void 0 === t8) {
        const e12 = void 0 !== s5 && 1 === s5.length;
        e12 && (t8 = o.get(s5)), void 0 === t8 && ((this.o = t8 = new CSSStyleSheet()).replaceSync(this.cssText), e12 && o.set(s5, t8));
      }
      return t8;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t8) => new n("string" == typeof t8 ? t8 : t8 + "", void 0, s);
  var i = (t8, ...e12) => {
    const o11 = 1 === t8.length ? t8[0] : e12.reduce((e13, s5, o12) => e13 + ((t9) => {
      if (true === t9._$cssResult$) return t9.cssText;
      if ("number" == typeof t9) return t9;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t9 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t8[o12 + 1], t8[0]);
    return new n(o11, t8, s);
  };
  var S = (s5, o11) => {
    if (e) s5.adoptedStyleSheets = o11.map((t8) => t8 instanceof CSSStyleSheet ? t8 : t8.styleSheet);
    else for (const e12 of o11) {
      const o12 = document.createElement("style"), n9 = t.litNonce;
      void 0 !== n9 && o12.setAttribute("nonce", n9), o12.textContent = e12.cssText, s5.appendChild(o12);
    }
  };
  var c = e ? (t8) => t8 : (t8) => t8 instanceof CSSStyleSheet ? ((t9) => {
    let e12 = "";
    for (const s5 of t9.cssRules) e12 += s5.cssText;
    return r(e12);
  })(t8) : t8;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: r2, getOwnPropertyNames: h, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t8, s5) => t8;
  var u = { toAttribute(t8, s5) {
    switch (s5) {
      case Boolean:
        t8 = t8 ? l : null;
        break;
      case Object:
      case Array:
        t8 = null == t8 ? t8 : JSON.stringify(t8);
    }
    return t8;
  }, fromAttribute(t8, s5) {
    let i10 = t8;
    switch (s5) {
      case Boolean:
        i10 = null !== t8;
        break;
      case Number:
        i10 = null === t8 ? null : Number(t8);
        break;
      case Object:
      case Array:
        try {
          i10 = JSON.parse(t8);
        } catch (t9) {
          i10 = null;
        }
    }
    return i10;
  } };
  var f = (t8, s5) => !i2(t8, s5);
  var y = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  var b = class extends HTMLElement {
    static addInitializer(t8) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t8);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t8, s5 = y) {
      if (s5.state && (s5.attribute = false), this._$Ei(), this.elementProperties.set(t8, s5), !s5.noAccessor) {
        const i10 = Symbol(), r9 = this.getPropertyDescriptor(t8, i10, s5);
        void 0 !== r9 && e2(this.prototype, t8, r9);
      }
    }
    static getPropertyDescriptor(t8, s5, i10) {
      const { get: e12, set: h5 } = r2(this.prototype, t8) ?? { get() {
        return this[s5];
      }, set(t9) {
        this[s5] = t9;
      } };
      return { get() {
        return e12?.call(this);
      }, set(s6) {
        const r9 = e12?.call(this);
        h5.call(this, s6), this.requestUpdate(t8, r9, i10);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t8) {
      return this.elementProperties.get(t8) ?? y;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t8 = n2(this);
      t8.finalize(), void 0 !== t8.l && (this.l = [...t8.l]), this.elementProperties = new Map(t8.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t9 = this.properties, s5 = [...h(t9), ...o2(t9)];
        for (const i10 of s5) this.createProperty(i10, t9[i10]);
      }
      const t8 = this[Symbol.metadata];
      if (null !== t8) {
        const s5 = litPropertyMetadata.get(t8);
        if (void 0 !== s5) for (const [t9, i10] of s5) this.elementProperties.set(t9, i10);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t9, s5] of this.elementProperties) {
        const i10 = this._$Eu(t9, s5);
        void 0 !== i10 && this._$Eh.set(i10, t9);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s5) {
      const i10 = [];
      if (Array.isArray(s5)) {
        const e12 = new Set(s5.flat(1 / 0).reverse());
        for (const s6 of e12) i10.unshift(c(s6));
      } else void 0 !== s5 && i10.push(c(s5));
      return i10;
    }
    static _$Eu(t8, s5) {
      const i10 = s5.attribute;
      return false === i10 ? void 0 : "string" == typeof i10 ? i10 : "string" == typeof t8 ? t8.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t8) => t8(this));
    }
    addController(t8) {
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t8), void 0 !== this.renderRoot && this.isConnected && t8.hostConnected?.();
    }
    removeController(t8) {
      this._$EO?.delete(t8);
    }
    _$E_() {
      const t8 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
      for (const i10 of s5.keys()) this.hasOwnProperty(i10) && (t8.set(i10, this[i10]), delete this[i10]);
      t8.size > 0 && (this._$Ep = t8);
    }
    createRenderRoot() {
      const t8 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t8, this.constructor.elementStyles), t8;
    }
    connectedCallback() {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t8) => t8.hostConnected?.());
    }
    enableUpdating(t8) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t8) => t8.hostDisconnected?.());
    }
    attributeChangedCallback(t8, s5, i10) {
      this._$AK(t8, i10);
    }
    _$EC(t8, s5) {
      const i10 = this.constructor.elementProperties.get(t8), e12 = this.constructor._$Eu(t8, i10);
      if (void 0 !== e12 && true === i10.reflect) {
        const r9 = (void 0 !== i10.converter?.toAttribute ? i10.converter : u).toAttribute(s5, i10.type);
        this._$Em = t8, null == r9 ? this.removeAttribute(e12) : this.setAttribute(e12, r9), this._$Em = null;
      }
    }
    _$AK(t8, s5) {
      const i10 = this.constructor, e12 = i10._$Eh.get(t8);
      if (void 0 !== e12 && this._$Em !== e12) {
        const t9 = i10.getPropertyOptions(e12), r9 = "function" == typeof t9.converter ? { fromAttribute: t9.converter } : void 0 !== t9.converter?.fromAttribute ? t9.converter : u;
        this._$Em = e12, this[e12] = r9.fromAttribute(s5, t9.type), this._$Em = null;
      }
    }
    requestUpdate(t8, s5, i10) {
      if (void 0 !== t8) {
        if (i10 ?? (i10 = this.constructor.getPropertyOptions(t8)), !(i10.hasChanged ?? f)(this[t8], s5)) return;
        this.P(t8, s5, i10);
      }
      false === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t8, s5, i10) {
      this._$AL.has(t8) || this._$AL.set(t8, s5), true === i10.reflect && this._$Em !== t8 && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t8);
    }
    async _$ET() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t9) {
        Promise.reject(t9);
      }
      const t8 = this.scheduleUpdate();
      return null != t8 && await t8, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [t10, s6] of this._$Ep) this[t10] = s6;
          this._$Ep = void 0;
        }
        const t9 = this.constructor.elementProperties;
        if (t9.size > 0) for (const [s6, i10] of t9) true !== i10.wrapped || this._$AL.has(s6) || void 0 === this[s6] || this.P(s6, this[s6], i10);
      }
      let t8 = false;
      const s5 = this._$AL;
      try {
        t8 = this.shouldUpdate(s5), t8 ? (this.willUpdate(s5), this._$EO?.forEach((t9) => t9.hostUpdate?.()), this.update(s5)) : this._$EU();
      } catch (s6) {
        throw t8 = false, this._$EU(), s6;
      }
      t8 && this._$AE(s5);
    }
    willUpdate(t8) {
    }
    _$AE(t8) {
      this._$EO?.forEach((t9) => t9.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t8)), this.updated(t8);
    }
    _$EU() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t8) {
      return true;
    }
    update(t8) {
      this._$Ej && (this._$Ej = this._$Ej.forEach((t9) => this._$EC(t9, this[t9]))), this._$EU();
    }
    updated(t8) {
    }
    firstUpdated(t8) {
    }
  };
  b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[d("elementProperties")] = /* @__PURE__ */ new Map(), b[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: b }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.0.4");

  // node_modules/lit-html/lit-html.js
  init_define_process();
  init_jquery();
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t8) => t8 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t8) => null === t8 || "object" != typeof t8 && "function" != typeof t8;
  var a2 = Array.isArray;
  var u2 = (t8) => a2(t8) || "function" == typeof t8?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t8) => (i10, ...s5) => ({ _$litType$: t8, strings: i10, values: s5 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t8, i10) {
    if (!a2(t8) || !t8.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i10) : i10;
  }
  var V = (t8, i10) => {
    const s5 = t8.length - 1, o11 = [];
    let r9, l5 = 2 === i10 ? "<svg>" : 3 === i10 ? "<math>" : "", c6 = f2;
    for (let i11 = 0; i11 < s5; i11++) {
      const s6 = t8[i11];
      let a4, u5, d3 = -1, y3 = 0;
      for (; y3 < s6.length && (c6.lastIndex = y3, u5 = c6.exec(s6), null !== u5); ) y3 = c6.lastIndex, c6 === f2 ? "!--" === u5[1] ? c6 = v : void 0 !== u5[1] ? c6 = _ : void 0 !== u5[2] ? ($.test(u5[2]) && (r9 = RegExp("</" + u5[2], "g")), c6 = m) : void 0 !== u5[3] && (c6 = m) : c6 === m ? ">" === u5[0] ? (c6 = r9 ?? f2, d3 = -1) : void 0 === u5[1] ? d3 = -2 : (d3 = c6.lastIndex - u5[2].length, a4 = u5[1], c6 = void 0 === u5[3] ? m : '"' === u5[3] ? g : p2) : c6 === g || c6 === p2 ? c6 = m : c6 === v || c6 === _ ? c6 = f2 : (c6 = m, r9 = void 0);
      const x2 = c6 === m && t8[i11 + 1].startsWith("/>") ? " " : "";
      l5 += c6 === f2 ? s6 + n3 : d3 >= 0 ? (o11.push(a4), s6.slice(0, d3) + e3 + s6.slice(d3) + h2 + x2) : s6 + h2 + (-2 === d3 ? i11 : x2);
    }
    return [P(t8, l5 + (t8[s5] || "<?>") + (2 === i10 ? "</svg>" : 3 === i10 ? "</math>" : "")), o11];
  };
  var N = class _N {
    constructor({ strings: t8, _$litType$: s5 }, n9) {
      let r9;
      this.parts = [];
      let c6 = 0, a4 = 0;
      const u5 = t8.length - 1, d3 = this.parts, [f5, v2] = V(t8, s5);
      if (this.el = _N.createElement(f5, n9), C.currentNode = this.el.content, 2 === s5 || 3 === s5) {
        const t9 = this.el.content.firstChild;
        t9.replaceWith(...t9.childNodes);
      }
      for (; null !== (r9 = C.nextNode()) && d3.length < u5; ) {
        if (1 === r9.nodeType) {
          if (r9.hasAttributes()) for (const t9 of r9.getAttributeNames()) if (t9.endsWith(e3)) {
            const i10 = v2[a4++], s6 = r9.getAttribute(t9).split(h2), e12 = /([.?@])?(.*)/.exec(i10);
            d3.push({ type: 1, index: c6, name: e12[2], strings: s6, ctor: "." === e12[1] ? H : "?" === e12[1] ? I : "@" === e12[1] ? L : k }), r9.removeAttribute(t9);
          } else t9.startsWith(h2) && (d3.push({ type: 6, index: c6 }), r9.removeAttribute(t9));
          if ($.test(r9.tagName)) {
            const t9 = r9.textContent.split(h2), s6 = t9.length - 1;
            if (s6 > 0) {
              r9.textContent = i3 ? i3.emptyScript : "";
              for (let i10 = 0; i10 < s6; i10++) r9.append(t9[i10], l2()), C.nextNode(), d3.push({ type: 2, index: ++c6 });
              r9.append(t9[s6], l2());
            }
          }
        } else if (8 === r9.nodeType) if (r9.data === o3) d3.push({ type: 2, index: c6 });
        else {
          let t9 = -1;
          for (; -1 !== (t9 = r9.data.indexOf(h2, t9 + 1)); ) d3.push({ type: 7, index: c6 }), t9 += h2.length - 1;
        }
        c6++;
      }
    }
    static createElement(t8, i10) {
      const s5 = r3.createElement("template");
      return s5.innerHTML = t8, s5;
    }
  };
  function S2(t8, i10, s5 = t8, e12) {
    if (i10 === T) return i10;
    let h5 = void 0 !== e12 ? s5._$Co?.[e12] : s5._$Cl;
    const o11 = c3(i10) ? void 0 : i10._$litDirective$;
    return h5?.constructor !== o11 && (h5?._$AO?.(false), void 0 === o11 ? h5 = void 0 : (h5 = new o11(t8), h5._$AT(t8, s5, e12)), void 0 !== e12 ? (s5._$Co ?? (s5._$Co = []))[e12] = h5 : s5._$Cl = h5), void 0 !== h5 && (i10 = S2(t8, h5._$AS(t8, i10.values), h5, e12)), i10;
  }
  var M = class {
    constructor(t8, i10) {
      this._$AV = [], this._$AN = void 0, this._$AD = t8, this._$AM = i10;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t8) {
      const { el: { content: i10 }, parts: s5 } = this._$AD, e12 = (t8?.creationScope ?? r3).importNode(i10, true);
      C.currentNode = e12;
      let h5 = C.nextNode(), o11 = 0, n9 = 0, l5 = s5[0];
      for (; void 0 !== l5; ) {
        if (o11 === l5.index) {
          let i11;
          2 === l5.type ? i11 = new R(h5, h5.nextSibling, this, t8) : 1 === l5.type ? i11 = new l5.ctor(h5, l5.name, l5.strings, this, t8) : 6 === l5.type && (i11 = new z(h5, this, t8)), this._$AV.push(i11), l5 = s5[++n9];
        }
        o11 !== l5?.index && (h5 = C.nextNode(), o11++);
      }
      return C.currentNode = r3, e12;
    }
    p(t8) {
      let i10 = 0;
      for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t8, s5, i10), i10 += s5.strings.length - 2) : s5._$AI(t8[i10])), i10++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t8, i10, s5, e12) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t8, this._$AB = i10, this._$AM = s5, this.options = e12, this._$Cv = e12?.isConnected ?? true;
    }
    get parentNode() {
      let t8 = this._$AA.parentNode;
      const i10 = this._$AM;
      return void 0 !== i10 && 11 === t8?.nodeType && (t8 = i10.parentNode), t8;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t8, i10 = this) {
      t8 = S2(this, t8, i10), c3(t8) ? t8 === E || null == t8 || "" === t8 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t8 !== this._$AH && t8 !== T && this._(t8) : void 0 !== t8._$litType$ ? this.$(t8) : void 0 !== t8.nodeType ? this.T(t8) : u2(t8) ? this.k(t8) : this._(t8);
    }
    O(t8) {
      return this._$AA.parentNode.insertBefore(t8, this._$AB);
    }
    T(t8) {
      this._$AH !== t8 && (this._$AR(), this._$AH = this.O(t8));
    }
    _(t8) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t8 : this.T(r3.createTextNode(t8)), this._$AH = t8;
    }
    $(t8) {
      const { values: i10, _$litType$: s5 } = t8, e12 = "number" == typeof s5 ? this._$AC(t8) : (void 0 === s5.el && (s5.el = N.createElement(P(s5.h, s5.h[0]), this.options)), s5);
      if (this._$AH?._$AD === e12) this._$AH.p(i10);
      else {
        const t9 = new M(e12, this), s6 = t9.u(this.options);
        t9.p(i10), this.T(s6), this._$AH = t9;
      }
    }
    _$AC(t8) {
      let i10 = A.get(t8.strings);
      return void 0 === i10 && A.set(t8.strings, i10 = new N(t8)), i10;
    }
    k(t8) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i10 = this._$AH;
      let s5, e12 = 0;
      for (const h5 of t8) e12 === i10.length ? i10.push(s5 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s5 = i10[e12], s5._$AI(h5), e12++;
      e12 < i10.length && (this._$AR(s5 && s5._$AB.nextSibling, e12), i10.length = e12);
    }
    _$AR(t8 = this._$AA.nextSibling, i10) {
      for (this._$AP?.(false, true, i10); t8 && t8 !== this._$AB; ) {
        const i11 = t8.nextSibling;
        t8.remove(), t8 = i11;
      }
    }
    setConnected(t8) {
      void 0 === this._$AM && (this._$Cv = t8, this._$AP?.(t8));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t8, i10, s5, e12, h5) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t8, this.name = i10, this._$AM = e12, this.options = h5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = E;
    }
    _$AI(t8, i10 = this, s5, e12) {
      const h5 = this.strings;
      let o11 = false;
      if (void 0 === h5) t8 = S2(this, t8, i10, 0), o11 = !c3(t8) || t8 !== this._$AH && t8 !== T, o11 && (this._$AH = t8);
      else {
        const e13 = t8;
        let n9, r9;
        for (t8 = h5[0], n9 = 0; n9 < h5.length - 1; n9++) r9 = S2(this, e13[s5 + n9], i10, n9), r9 === T && (r9 = this._$AH[n9]), o11 || (o11 = !c3(r9) || r9 !== this._$AH[n9]), r9 === E ? t8 = E : t8 !== E && (t8 += (r9 ?? "") + h5[n9 + 1]), this._$AH[n9] = r9;
      }
      o11 && !e12 && this.j(t8);
    }
    j(t8) {
      t8 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t8 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t8) {
      this.element[this.name] = t8 === E ? void 0 : t8;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t8) {
      this.element.toggleAttribute(this.name, !!t8 && t8 !== E);
    }
  };
  var L = class extends k {
    constructor(t8, i10, s5, e12, h5) {
      super(t8, i10, s5, e12, h5), this.type = 5;
    }
    _$AI(t8, i10 = this) {
      if ((t8 = S2(this, t8, i10, 0) ?? E) === T) return;
      const s5 = this._$AH, e12 = t8 === E && s5 !== E || t8.capture !== s5.capture || t8.once !== s5.once || t8.passive !== s5.passive, h5 = t8 !== E && (s5 === E || e12);
      e12 && this.element.removeEventListener(this.name, this, s5), h5 && this.element.addEventListener(this.name, this, t8), this._$AH = t8;
    }
    handleEvent(t8) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t8) : this._$AH.handleEvent(t8);
    }
  };
  var z = class {
    constructor(t8, i10, s5) {
      this.element = t8, this.type = 6, this._$AN = void 0, this._$AM = i10, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t8) {
      S2(this, t8);
    }
  };
  var Z = { M: e3, P: h2, A: o3, C: 1, L: V, R: M, D: u2, V: S2, I: R, H: k, N: I, U: L, B: H, F: z };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.2.1");
  var B = (t8, i10, s5) => {
    const e12 = s5?.renderBefore ?? i10;
    let h5 = e12._$litPart$;
    if (void 0 === h5) {
      const t9 = s5?.renderBefore ?? null;
      e12._$litPart$ = h5 = new R(i10.insertBefore(l2(), t9), t9, void 0, s5 ?? {});
    }
    return h5._$AI(t8), h5;
  };

  // node_modules/lit-element/lit-element.js
  init_define_process();
  init_jquery();
  var r4 = class extends b {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a;
      const t8 = super.createRenderRoot();
      return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t8.firstChild), t8;
    }
    update(t8) {
      const s5 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t8), this._$Do = B(s5, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  r4._$litElement$ = true, r4["finalized"] = true, globalThis.litElementHydrateSupport?.({ LitElement: r4 });
  var i4 = globalThis.litElementPolyfillSupport;
  i4?.({ LitElement: r4 });
  (globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");

  // node_modules/lit-html/is-server.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
  var icon_button_styles_default = i`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YHLNUJ7P.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3Y6SB6QS.js
  init_define_process();
  init_jquery();
  var basePath = "";
  function setBasePath(path) {
    basePath = path;
  }
  function getBasePath(subpath = "") {
    if (!basePath) {
      const scripts = [...document.getElementsByTagName("script")];
      const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
      if (configScript) {
        setBasePath(configScript.getAttribute("data-shoelace"));
      } else {
        const fallbackScript = scripts.find((s5) => {
          return /shoelace(\.min)?\.js($|\?)/.test(s5.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s5.src);
        });
        let path = "";
        if (fallbackScript) {
          path = fallbackScript.getAttribute("src");
        }
        setBasePath(path.split("/").slice(0, -1).join("/"));
      }
    }
    return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
  var library = {
    name: "default",
    resolver: (name) => getBasePath(`assets/icons/${name}.svg`)
  };
  var library_default_default = library;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js
  init_define_process();
  init_jquery();
  var icons = {
    caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
    check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
    indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
    "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
  };
  var systemLibrary = {
    name: "system",
    resolver: (name) => {
      if (name in icons) {
        return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
      }
      return "";
    }
  };
  var library_system_default = systemLibrary;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
  var registry = [library_default_default, library_system_default];
  var watchedIcons = [];
  function watchIcon(icon) {
    watchedIcons.push(icon);
  }
  function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el) => el !== icon);
  }
  function getIconLibrary(name) {
    return registry.find((lib) => lib.name === name);
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
  init_define_process();
  init_jquery();
  var icon_styles_default = i`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GMYPQTFK.js
  init_define_process();
  init_jquery();
  function watch(propertyName, options) {
    const resolvedOptions = __spreadValues({
      waitUntilFirstUpdate: false
    }, options);
    return (proto, decoratedFnName) => {
      const { update: update2 } = proto;
      const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
      proto.update = function(changedProps) {
        watchedProperties.forEach((property) => {
          const key = property;
          if (changedProps.has(key)) {
            const oldValue = changedProps.get(key);
            const newValue = this[key];
            if (oldValue !== newValue) {
              if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
                this[decoratedFnName](oldValue, newValue);
              }
            }
          }
        });
        update2.call(this, changedProps);
      };
    };
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
  init_define_process();
  init_jquery();
  var component_styles_default = i`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4TUIT776.js
  init_define_process();
  init_jquery();

  // node_modules/lit/decorators.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/property.js
  init_define_process();
  init_jquery();
  var o4 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r5 = (t8 = o4, e12, r9) => {
    const { kind: n9, metadata: i10 } = r9;
    let s5 = globalThis.litPropertyMetadata.get(i10);
    if (void 0 === s5 && globalThis.litPropertyMetadata.set(i10, s5 = /* @__PURE__ */ new Map()), s5.set(r9.name, t8), "accessor" === n9) {
      const { name: o11 } = r9;
      return { set(r10) {
        const n10 = e12.get.call(this);
        e12.set.call(this, r10), this.requestUpdate(o11, n10, t8);
      }, init(e13) {
        return void 0 !== e13 && this.P(o11, void 0, t8), e13;
      } };
    }
    if ("setter" === n9) {
      const { name: o11 } = r9;
      return function(r10) {
        const n10 = this[o11];
        e12.call(this, r10), this.requestUpdate(o11, n10, t8);
      };
    }
    throw Error("Unsupported decorator location: " + n9);
  };
  function n4(t8) {
    return (e12, o11) => "object" == typeof o11 ? r5(t8, e12, o11) : ((t9, e13, o12) => {
      const r9 = e13.hasOwnProperty(o12);
      return e13.constructor.createProperty(o12, r9 ? { ...t9, wrapped: true } : t9), r9 ? Object.getOwnPropertyDescriptor(e13, o12) : void 0;
    })(t8, e12, o11);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  init_define_process();
  init_jquery();
  function r6(r9) {
    return n4({ ...r9, state: true, attribute: false });
  }

  // node_modules/@lit/reactive-element/decorators/event-options.js
  init_define_process();
  init_jquery();
  function t3(t8) {
    return (n9, o11) => {
      const c6 = "function" == typeof n9 ? n9 : n9[o11];
      Object.assign(c6, t8);
    };
  }

  // node_modules/@lit/reactive-element/decorators/query.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/base.js
  init_define_process();
  init_jquery();
  var e4 = (e12, t8, c6) => (c6.configurable = true, c6.enumerable = true, Reflect.decorate && "object" != typeof t8 && Object.defineProperty(e12, t8, c6), c6);

  // node_modules/@lit/reactive-element/decorators/query.js
  function e5(e12, r9) {
    return (n9, s5, i10) => {
      const o11 = (t8) => t8.renderRoot?.querySelector(e12) ?? null;
      if (r9) {
        const { get: e13, set: r10 } = "object" == typeof s5 ? n9 : i10 ?? (() => {
          const t8 = Symbol();
          return { get() {
            return this[t8];
          }, set(e14) {
            this[t8] = e14;
          } };
        })();
        return e4(n9, s5, { get() {
          let t8 = e13.call(this);
          return void 0 === t8 && (t8 = o11(this), (null !== t8 || this.hasUpdated) && r10.call(this, t8)), t8;
        } });
      }
      return e4(n9, s5, { get() {
        return o11(this);
      } });
    };
  }

  // node_modules/@lit/reactive-element/decorators/query-all.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/query-async.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  init_define_process();
  init_jquery();

  // node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4TUIT776.js
  var _hasRecordedInitialProperties;
  var ShoelaceElement = class extends r4 {
    constructor() {
      super();
      __privateAdd(this, _hasRecordedInitialProperties, false);
      this.initialReflectedProperties = /* @__PURE__ */ new Map();
      Object.entries(this.constructor.dependencies).forEach(([name, component]) => {
        this.constructor.define(name, component);
      });
    }
    emit(name, options) {
      const event = new CustomEvent(name, __spreadValues({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      this.dispatchEvent(event);
      return event;
    }
    /* eslint-enable */
    static define(name, elementConstructor = this, options = {}) {
      const currentlyRegisteredConstructor = customElements.get(name);
      if (!currentlyRegisteredConstructor) {
        try {
          customElements.define(name, elementConstructor, options);
        } catch (_err) {
          customElements.define(name, class extends elementConstructor {
          }, options);
        }
        return;
      }
      let newVersion = " (unknown version)";
      let existingVersion = newVersion;
      if ("version" in elementConstructor && elementConstructor.version) {
        newVersion = " v" + elementConstructor.version;
      }
      if ("version" in currentlyRegisteredConstructor && currentlyRegisteredConstructor.version) {
        existingVersion = " v" + currentlyRegisteredConstructor.version;
      }
      if (newVersion && existingVersion && newVersion === existingVersion) {
        return;
      }
      console.warn(
        `Attempted to register <${name}>${newVersion}, but <${name}>${existingVersion} has already been registered.`
      );
    }
    attributeChangedCallback(name, oldValue, newValue) {
      if (!__privateGet(this, _hasRecordedInitialProperties)) {
        this.constructor.elementProperties.forEach(
          (obj, prop) => {
            if (obj.reflect && this[prop] != null) {
              this.initialReflectedProperties.set(prop, this[prop]);
            }
          }
        );
        __privateSet(this, _hasRecordedInitialProperties, true);
      }
      super.attributeChangedCallback(name, oldValue, newValue);
    }
    willUpdate(changedProperties) {
      super.willUpdate(changedProperties);
      this.initialReflectedProperties.forEach((value, prop) => {
        if (changedProperties.has(prop) && this[prop] == null) {
          this[prop] = value;
        }
      });
    }
  };
  _hasRecordedInitialProperties = /* @__PURE__ */ new WeakMap();
  ShoelaceElement.version = "2.20.1";
  ShoelaceElement.dependencies = {};
  __decorateClass([
    n4()
  ], ShoelaceElement.prototype, "dir", 2);
  __decorateClass([
    n4()
  ], ShoelaceElement.prototype, "lang", 2);

  // node_modules/lit/directive-helpers.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directive-helpers.js
  init_define_process();
  init_jquery();
  var { I: t4 } = Z;
  var e6 = (o11, t8) => void 0 === t8 ? void 0 !== o11?._$litType$ : o11?._$litType$ === t8;
  var f3 = (o11) => void 0 === o11.strings;
  var u3 = {};
  var m2 = (o11, t8 = u3) => o11._$AH = t8;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YHLNUJ7P.js
  var CACHEABLE_ERROR = Symbol();
  var RETRYABLE_ERROR = Symbol();
  var parser;
  var iconCache = /* @__PURE__ */ new Map();
  var SlIcon = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.initialRender = false;
      this.svg = null;
      this.label = "";
      this.library = "default";
    }
    /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
    async resolveIcon(url, library2) {
      var _a;
      let fileData;
      if (library2 == null ? void 0 : library2.spriteSheet) {
        this.svg = x`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
        return this.svg;
      }
      try {
        fileData = await fetch(url, { mode: "cors" });
        if (!fileData.ok) return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
      } catch (e12) {
        return RETRYABLE_ERROR;
      }
      try {
        const div = document.createElement("div");
        div.innerHTML = await fileData.text();
        const svg = div.firstElementChild;
        if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg") return CACHEABLE_ERROR;
        if (!parser) parser = new DOMParser();
        const doc = parser.parseFromString(svg.outerHTML, "text/html");
        const svgEl = doc.body.querySelector("svg");
        if (!svgEl) return CACHEABLE_ERROR;
        svgEl.part.add("svg");
        return document.adoptNode(svgEl);
      } catch (e12) {
        return CACHEABLE_ERROR;
      }
    }
    connectedCallback() {
      super.connectedCallback();
      watchIcon(this);
    }
    firstUpdated() {
      this.initialRender = true;
      this.setIcon();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unwatchIcon(this);
    }
    getIconSource() {
      const library2 = getIconLibrary(this.library);
      if (this.name && library2) {
        return {
          url: library2.resolver(this.name),
          fromLibrary: true
        };
      }
      return {
        url: this.src,
        fromLibrary: false
      };
    }
    handleLabelChange() {
      const hasLabel = typeof this.label === "string" && this.label.length > 0;
      if (hasLabel) {
        this.setAttribute("role", "img");
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.removeAttribute("role");
        this.removeAttribute("aria-label");
        this.setAttribute("aria-hidden", "true");
      }
    }
    async setIcon() {
      var _a;
      const { url, fromLibrary } = this.getIconSource();
      const library2 = fromLibrary ? getIconLibrary(this.library) : void 0;
      if (!url) {
        this.svg = null;
        return;
      }
      let iconResolver = iconCache.get(url);
      if (!iconResolver) {
        iconResolver = this.resolveIcon(url, library2);
        iconCache.set(url, iconResolver);
      }
      if (!this.initialRender) {
        return;
      }
      const svg = await iconResolver;
      if (svg === RETRYABLE_ERROR) {
        iconCache.delete(url);
      }
      if (url !== this.getIconSource().url) {
        return;
      }
      if (e6(svg)) {
        this.svg = svg;
        if (library2) {
          await this.updateComplete;
          const shadowSVG = this.shadowRoot.querySelector("[part='svg']");
          if (typeof library2.mutator === "function" && shadowSVG) {
            library2.mutator(shadowSVG);
          }
        }
        return;
      }
      switch (svg) {
        case RETRYABLE_ERROR:
        case CACHEABLE_ERROR:
          this.svg = null;
          this.emit("sl-error");
          break;
        default:
          this.svg = svg.cloneNode(true);
          (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, this.svg);
          this.emit("sl-load");
      }
    }
    render() {
      return this.svg;
    }
  };
  SlIcon.styles = [component_styles_default, icon_styles_default];
  __decorateClass([
    r6()
  ], SlIcon.prototype, "svg", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlIcon.prototype, "name", 2);
  __decorateClass([
    n4()
  ], SlIcon.prototype, "src", 2);
  __decorateClass([
    n4()
  ], SlIcon.prototype, "label", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlIcon.prototype, "library", 2);
  __decorateClass([
    watch("label")
  ], SlIcon.prototype, "handleLabelChange", 1);
  __decorateClass([
    watch(["name", "src", "library"])
  ], SlIcon.prototype, "setIcon", 1);

  // node_modules/lit/directives/class-map.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/class-map.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directive.js
  init_define_process();
  init_jquery();
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e7 = (t8) => (...e12) => ({ _$litDirective$: t8, values: e12 });
  var i5 = class {
    constructor(t8) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t8, e12, i10) {
      this._$Ct = t8, this._$AM = e12, this._$Ci = i10;
    }
    _$AS(t8, e12) {
      return this.update(t8, e12);
    }
    update(t8, e12) {
      return this.render(...e12);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e8 = e7(class extends i5 {
    constructor(t8) {
      if (super(t8), t8.type !== t5.ATTRIBUTE || "class" !== t8.name || t8.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t8) {
      return " " + Object.keys(t8).filter((s5) => t8[s5]).join(" ") + " ";
    }
    update(s5, [i10]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s5.strings && (this.nt = new Set(s5.strings.join(" ").split(/\s/).filter((t8) => "" !== t8)));
        for (const t8 in i10) i10[t8] && !this.nt?.has(t8) && this.st.add(t8);
        return this.render(i10);
      }
      const r9 = s5.element.classList;
      for (const t8 of this.st) t8 in i10 || (r9.remove(t8), this.st.delete(t8));
      for (const t8 in i10) {
        const s6 = !!i10[t8];
        s6 === this.st.has(t8) || this.nt?.has(t8) || (s6 ? (r9.add(t8), this.st.add(t8)) : (r9.remove(t8), this.st.delete(t8)));
      }
      return T;
    }
  });

  // node_modules/lit/static-html.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/static.js
  init_define_process();
  init_jquery();
  var a3 = Symbol.for("");
  var o5 = (t8) => {
    if (t8?.r === a3) return t8?._$litStatic$;
  };
  var i6 = (t8, ...r9) => ({ _$litStatic$: r9.reduce((r10, e12, a4) => r10 + ((t9) => {
    if (void 0 !== t9._$litStatic$) return t9._$litStatic$;
    throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t9}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  })(e12) + t8[a4 + 1], t8[0]), r: a3 });
  var l3 = /* @__PURE__ */ new Map();
  var n5 = (t8) => (r9, ...e12) => {
    const a4 = e12.length;
    let s5, i10;
    const n9 = [], u5 = [];
    let c6, $3 = 0, f5 = false;
    for (; $3 < a4; ) {
      for (c6 = r9[$3]; $3 < a4 && void 0 !== (i10 = e12[$3], s5 = o5(i10)); ) c6 += s5 + r9[++$3], f5 = true;
      $3 !== a4 && u5.push(i10), n9.push(c6), $3++;
    }
    if ($3 === a4 && n9.push(r9[a4]), f5) {
      const t9 = n9.join("$$lit$$");
      void 0 === (r9 = l3.get(t9)) && (n9.raw = n9, l3.set(t9, r9 = n9)), e12 = u5;
    }
    return t8(r9, ...e12);
  };
  var u4 = n5(x);
  var c4 = n5(b2);
  var $2 = n5(w);

  // node_modules/lit/directives/if-defined.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/if-defined.js
  init_define_process();
  init_jquery();
  var o6 = (o11) => o11 ?? E;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7E4JTYWU.js
  var SlIconButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasFocus = false;
      this.label = "";
      this.disabled = false;
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Simulates a click on the icon button. */
    click() {
      this.button.click();
    }
    /** Sets focus on the icon button. */
    focus(options) {
      this.button.focus(options);
    }
    /** Removes focus from the icon button. */
    blur() {
      this.button.blur();
    }
    render() {
      const isLink = this.href ? true : false;
      const tag = isLink ? i6`a` : i6`button`;
      return u4`
      <${tag}
        part="base"
        class=${e8({
        "icon-button": true,
        "icon-button--disabled": !isLink && this.disabled,
        "icon-button--focused": this.hasFocus
      })}
        ?disabled=${o6(isLink ? void 0 : this.disabled)}
        type=${o6(isLink ? void 0 : "button")}
        href=${o6(isLink ? this.href : void 0)}
        target=${o6(isLink ? this.target : void 0)}
        download=${o6(isLink ? this.download : void 0)}
        rel=${o6(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${o6(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${o6(this.name)}
          library=${o6(this.library)}
          src=${o6(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${tag}>
    `;
    }
  };
  SlIconButton.styles = [component_styles_default, icon_button_styles_default];
  SlIconButton.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e5(".icon-button")
  ], SlIconButton.prototype, "button", 2);
  __decorateClass([
    r6()
  ], SlIconButton.prototype, "hasFocus", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "name", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "library", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "src", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "href", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "target", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "download", 2);
  __decorateClass([
    n4()
  ], SlIconButton.prototype, "label", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlIconButton.prototype, "disabled", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
  init_define_process();
  init_jquery();
  function waitForEvent(el, eventName) {
    return new Promise((resolve) => {
      function done(event) {
        if (event.target === el) {
          el.removeEventListener(eventName, done);
          resolve();
        }
      }
      el.addEventListener(eventName, done);
    });
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AJ3ENQ5C.js
  init_define_process();
  init_jquery();
  function animateTo(el, keyframes, options) {
    return new Promise((resolve) => {
      if ((options == null ? void 0 : options.duration) === Infinity) {
        throw new Error("Promise-based animations must be finite.");
      }
      const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
        duration: prefersReducedMotion() ? 0 : options.duration
      }));
      animation.addEventListener("cancel", resolve, { once: true });
      animation.addEventListener("finish", resolve, { once: true });
    });
  }
  function parseDuration(delay) {
    delay = delay.toString().toLowerCase();
    if (delay.indexOf("ms") > -1) {
      return parseFloat(delay);
    }
    if (delay.indexOf("s") > -1) {
      return parseFloat(delay) * 1e3;
    }
    return parseFloat(delay);
  }
  function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query.matches;
  }
  function stopAnimations(el) {
    return Promise.all(
      el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          animation.cancel();
          requestAnimationFrame(resolve);
        });
      })
    );
  }
  function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
    return keyframes.map((keyframe) => __spreadProps(__spreadValues({}, keyframe), {
      height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
    }));
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NYIIDP5N.js
  init_define_process();
  init_jquery();
  var HasSlotController = class {
    constructor(host, ...slotNames) {
      this.slotNames = [];
      this.handleSlotChange = (event) => {
        const slot = event.target;
        if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
          this.host.requestUpdate();
        }
      };
      (this.host = host).addController(this);
      this.slotNames = slotNames;
    }
    hasDefaultSlot() {
      return [...this.host.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el = node;
          const tagName = el.tagName.toLowerCase();
          if (tagName === "sl-visually-hidden") {
            return false;
          }
          if (!el.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }
    hasNamedSlot(name) {
      return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
      return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
      this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
    }
    hostDisconnected() {
      this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
    }
  };
  function getTextContent(slot) {
    if (!slot) {
      return "";
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = "";
    [...nodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      }
    });
    return text;
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/localize/dist/index.js
  init_define_process();
  init_jquery();
  var connectedElements = /* @__PURE__ */ new Set();
  var translations = /* @__PURE__ */ new Map();
  var fallback;
  var documentDirection = "ltr";
  var documentLanguage = "en";
  var isClient = typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined";
  if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || "ltr";
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir", "lang"]
    });
  }
  function registerTranslation(...translation2) {
    translation2.map((t8) => {
      const code = t8.$code.toLowerCase();
      if (translations.has(code)) {
        translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t8));
      } else {
        translations.set(code, t8);
      }
      if (!fallback) {
        fallback = t8;
      }
    });
    update();
  }
  function update() {
    if (isClient) {
      documentDirection = document.documentElement.dir || "ltr";
      documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map((el) => {
      if (typeof el.requestUpdate === "function") {
        el.requestUpdate();
      }
    });
  }
  var LocalizeController = class {
    constructor(host) {
      this.host = host;
      this.host.addController(this);
    }
    hostConnected() {
      connectedElements.add(this.host);
    }
    hostDisconnected() {
      connectedElements.delete(this.host);
    }
    dir() {
      return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
      return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
      var _a, _b;
      const locale = new Intl.Locale(lang.replace(/_/g, "-"));
      const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
      const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
      const primary = translations.get(`${language}-${region}`);
      const secondary = translations.get(language);
      return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
      var _a;
      const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
      options = Object.assign({ includeFallback: false }, options);
      if (primary && primary[key] || secondary && secondary[key] || options.includeFallback && fallback && fallback[key]) {
        return true;
      }
      return false;
    }
    term(key, ...args) {
      const { primary, secondary } = this.getTranslationData(this.lang());
      let term;
      if (primary && primary[key]) {
        term = primary[key];
      } else if (secondary && secondary[key]) {
        term = secondary[key];
      } else if (fallback && fallback[key]) {
        term = fallback[key];
      } else {
        console.error(`No translation found for: ${String(key)}`);
        return String(key);
      }
      if (typeof term === "function") {
        return term(...args);
      }
      return term;
    }
    date(dateToFormat, options) {
      dateToFormat = new Date(dateToFormat);
      return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
      numberToFormat = Number(numberToFormat);
      return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
      return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BTDLTNI.js
  var translation = {
    $code: "en",
    $name: "English",
    $dir: "ltr",
    carousel: "Carousel",
    clearEntry: "Clear entry",
    close: "Close",
    copied: "Copied",
    copy: "Copy",
    currentValue: "Current value",
    error: "Error",
    goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
    hidePassword: "Hide password",
    loading: "Loading",
    nextSlide: "Next slide",
    numOptionsSelected: (num) => {
      if (num === 0) return "No options selected";
      if (num === 1) return "1 option selected";
      return `${num} options selected`;
    },
    previousSlide: "Previous slide",
    progress: "Progress",
    remove: "Remove",
    resize: "Resize",
    scrollToEnd: "Scroll to end",
    scrollToStart: "Scroll to start",
    selectAColorFromTheScreen: "Select a color from the screen",
    showPassword: "Show password",
    slideNum: (slide) => `Slide ${slide}`,
    toggleColorFormat: "Toggle color format"
  };
  registerTranslation(translation);
  var en_default = translation;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CTB5ZDJ.js
  var LocalizeController2 = class extends LocalizeController {
  };
  registerTranslation(en_default);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HPCLRZ2S.js
  init_define_process();
  init_jquery();
  var alert_styles_default = i`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6UPB6RWT.js
  var _SlAlert = class _SlAlert2 extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "icon", "suffix");
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.closable = false;
      this.variant = "primary";
      this.duration = Infinity;
      this.remainingTime = this.duration;
    }
    static get toastStack() {
      if (!this.currentToastStack) {
        this.currentToastStack = Object.assign(document.createElement("div"), {
          className: "sl-toast-stack"
        });
      }
      return this.currentToastStack;
    }
    firstUpdated() {
      this.base.hidden = !this.open;
    }
    restartAutoHide() {
      this.handleCountdownChange();
      clearTimeout(this.autoHideTimeout);
      clearInterval(this.remainingTimeInterval);
      if (this.open && this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
        this.remainingTime = this.duration;
        this.remainingTimeInterval = window.setInterval(() => {
          this.remainingTime -= 100;
        }, 100);
      }
    }
    pauseAutoHide() {
      var _a;
      (_a = this.countdownAnimation) == null ? void 0 : _a.pause();
      clearTimeout(this.autoHideTimeout);
      clearInterval(this.remainingTimeInterval);
    }
    resumeAutoHide() {
      var _a;
      if (this.duration < Infinity) {
        this.autoHideTimeout = window.setTimeout(() => this.hide(), this.remainingTime);
        this.remainingTimeInterval = window.setInterval(() => {
          this.remainingTime -= 100;
        }, 100);
        (_a = this.countdownAnimation) == null ? void 0 : _a.play();
      }
    }
    handleCountdownChange() {
      if (this.open && this.duration < Infinity && this.countdown) {
        const { countdownElement } = this;
        const start = "100%";
        const end = "0";
        this.countdownAnimation = countdownElement.animate([{ width: start }, { width: end }], {
          duration: this.duration,
          easing: "linear"
        });
      }
    }
    handleCloseClick() {
      this.hide();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        if (this.duration < Infinity) {
          this.restartAutoHide();
        }
        await stopAnimations(this.base);
        this.base.hidden = false;
        const { keyframes, options } = getAnimation(this, "alert.show", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.emit("sl-after-show");
      } else {
        blurActiveElement(this);
        this.emit("sl-hide");
        clearTimeout(this.autoHideTimeout);
        clearInterval(this.remainingTimeInterval);
        await stopAnimations(this.base);
        const { keyframes, options } = getAnimation(this, "alert.hide", { dir: this.localize.dir() });
        await animateTo(this.base, keyframes, options);
        this.base.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    handleDurationChange() {
      this.restartAutoHide();
    }
    /** Shows the alert. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the alert */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
     * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
     * calling this method again. The returned promise will resolve after the alert is hidden.
     */
    async toast() {
      return new Promise((resolve) => {
        this.handleCountdownChange();
        if (_SlAlert2.toastStack.parentElement === null) {
          document.body.append(_SlAlert2.toastStack);
        }
        _SlAlert2.toastStack.appendChild(this);
        requestAnimationFrame(() => {
          this.clientWidth;
          this.show();
        });
        this.addEventListener(
          "sl-after-hide",
          () => {
            _SlAlert2.toastStack.removeChild(this);
            resolve();
            if (_SlAlert2.toastStack.querySelector("sl-alert") === null) {
              _SlAlert2.toastStack.remove();
            }
          },
          { once: true }
        );
      });
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        alert: true,
        "alert--open": this.open,
        "alert--closable": this.closable,
        "alert--has-countdown": !!this.countdown,
        "alert--has-icon": this.hasSlotController.test("icon"),
        "alert--primary": this.variant === "primary",
        "alert--success": this.variant === "success",
        "alert--neutral": this.variant === "neutral",
        "alert--warning": this.variant === "warning",
        "alert--danger": this.variant === "danger"
      })}
        role="alert"
        aria-hidden=${this.open ? "false" : "true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            ` : ""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown ? x`
              <div
                class=${e8({
        alert__countdown: true,
        "alert__countdown--ltr": this.countdown === "ltr"
      })}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            ` : ""}
      </div>
    `;
    }
  };
  _SlAlert.styles = [component_styles_default, alert_styles_default];
  _SlAlert.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e5('[part~="base"]')
  ], _SlAlert.prototype, "base", 2);
  __decorateClass([
    e5(".alert__countdown-elapsed")
  ], _SlAlert.prototype, "countdownElement", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], _SlAlert.prototype, "open", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], _SlAlert.prototype, "closable", 2);
  __decorateClass([
    n4({ reflect: true })
  ], _SlAlert.prototype, "variant", 2);
  __decorateClass([
    n4({ type: Number })
  ], _SlAlert.prototype, "duration", 2);
  __decorateClass([
    n4({ type: String, reflect: true })
  ], _SlAlert.prototype, "countdown", 2);
  __decorateClass([
    r6()
  ], _SlAlert.prototype, "remainingTime", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], _SlAlert.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("duration")
  ], _SlAlert.prototype, "handleDurationChange", 1);
  var SlAlert = _SlAlert;
  setDefaultAnimation("alert.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("alert.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R45OWEVP.js
  SlAlert.define("sl-alert");

  // node_modules/@shoelace-style/shoelace/dist/components/avatar/avatar.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.24ZZSBUF.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WREZSXX4.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.K35GSB4N.js
  init_define_process();
  init_jquery();
  var avatar_styles_default = i`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WREZSXX4.js
  var SlAvatar = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasError = false;
      this.image = "";
      this.label = "";
      this.initials = "";
      this.loading = "eager";
      this.shape = "circle";
    }
    handleImageChange() {
      this.hasError = false;
    }
    handleImageLoadError() {
      this.hasError = true;
      this.emit("sl-error");
    }
    render() {
      const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;
      let avatarWithoutImage = x``;
      if (this.initials) {
        avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
      } else {
        avatarWithoutImage = x`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `;
      }
      return x`
      <div
        part="base"
        class=${e8({
        avatar: true,
        "avatar--circle": this.shape === "circle",
        "avatar--rounded": this.shape === "rounded",
        "avatar--square": this.shape === "square"
      })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
    }
  };
  SlAvatar.styles = [component_styles_default, avatar_styles_default];
  SlAvatar.dependencies = {
    "sl-icon": SlIcon
  };
  __decorateClass([
    r6()
  ], SlAvatar.prototype, "hasError", 2);
  __decorateClass([
    n4()
  ], SlAvatar.prototype, "image", 2);
  __decorateClass([
    n4()
  ], SlAvatar.prototype, "label", 2);
  __decorateClass([
    n4()
  ], SlAvatar.prototype, "initials", 2);
  __decorateClass([
    n4()
  ], SlAvatar.prototype, "loading", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlAvatar.prototype, "shape", 2);
  __decorateClass([
    watch("image")
  ], SlAvatar.prototype, "handleImageChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.24ZZSBUF.js
  SlAvatar.define("sl-avatar");

  // node_modules/@shoelace-style/shoelace/dist/components/card/card.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3LWOA5DF.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PSUCFVU6.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A5D6FTFY.js
  init_define_process();
  init_jquery();
  var card_styles_default = i`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PSUCFVU6.js
  var SlCard = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        card: true,
        "card--has-footer": this.hasSlotController.test("footer"),
        "card--has-image": this.hasSlotController.test("image"),
        "card--has-header": this.hasSlotController.test("header")
      })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
    }
  };
  SlCard.styles = [component_styles_default, card_styles_default];

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3LWOA5DF.js
  SlCard.define("sl-card");

  // node_modules/@shoelace-style/shoelace/dist/components/details/details.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4MEHASAI.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FBTAZKYW.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.J7PLVEQM.js
  init_define_process();
  init_jquery();
  var details_styles_default = i`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FBTAZKYW.js
  var SlDetails = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.disabled = false;
    }
    firstUpdated() {
      this.body.style.height = this.open ? "auto" : "0";
      if (this.open) {
        this.details.open = true;
      }
      this.detailsObserver = new MutationObserver((changes) => {
        for (const change of changes) {
          if (change.type === "attributes" && change.attributeName === "open") {
            if (this.details.open) {
              this.show();
            } else {
              this.hide();
            }
          }
        }
      });
      this.detailsObserver.observe(this.details, { attributes: true });
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      (_a = this.detailsObserver) == null ? void 0 : _a.disconnect();
    }
    handleSummaryClick(event) {
      event.preventDefault();
      if (!this.disabled) {
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
        this.header.focus();
      }
    }
    handleSummaryKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (this.open) {
          this.hide();
        } else {
          this.show();
        }
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        this.hide();
      }
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        this.show();
      }
    }
    async handleOpenChange() {
      if (this.open) {
        this.details.open = true;
        const slShow = this.emit("sl-show", { cancelable: true });
        if (slShow.defaultPrevented) {
          this.open = false;
          this.details.open = false;
          return;
        }
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "details.show", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.style.height = "auto";
        this.emit("sl-after-show");
      } else {
        const slHide = this.emit("sl-hide", { cancelable: true });
        if (slHide.defaultPrevented) {
          this.details.open = true;
          this.open = true;
          return;
        }
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "details.hide", { dir: this.localize.dir() });
        await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
        this.body.style.height = "auto";
        this.details.open = false;
        this.emit("sl-after-hide");
      }
    }
    /** Shows the details. */
    async show() {
      if (this.open || this.disabled) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the details */
    async hide() {
      if (!this.open || this.disabled) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return x`
      <details
        part="base"
        class=${e8({
        details: true,
        "details--open": this.open,
        "details--disabled": this.disabled,
        "details--rtl": isRtl
      })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="content"
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
    }
  };
  SlDetails.styles = [component_styles_default, details_styles_default];
  SlDetails.dependencies = {
    "sl-icon": SlIcon
  };
  __decorateClass([
    e5(".details")
  ], SlDetails.prototype, "details", 2);
  __decorateClass([
    e5(".details__header")
  ], SlDetails.prototype, "header", 2);
  __decorateClass([
    e5(".details__body")
  ], SlDetails.prototype, "body", 2);
  __decorateClass([
    e5(".details__expand-icon-slot")
  ], SlDetails.prototype, "expandIconSlot", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "open", 2);
  __decorateClass([
    n4()
  ], SlDetails.prototype, "summary", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDetails.prototype, "disabled", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDetails.prototype, "handleOpenChange", 1);
  setDefaultAnimation("details.show", {
    keyframes: [
      { height: "0", opacity: "0" },
      { height: "auto", opacity: "1" }
    ],
    options: { duration: 250, easing: "linear" }
  });
  setDefaultAnimation("details.hide", {
    keyframes: [
      { height: "auto", opacity: "1" },
      { height: "0", opacity: "0" }
    ],
    options: { duration: 250, easing: "linear" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4MEHASAI.js
  SlDetails.define("sl-details");

  // node_modules/@shoelace-style/shoelace/dist/components/dialog/dialog.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KPLQLAWP.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NIOQIUH4.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EMN3H5QW.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VESXC477.js
  init_define_process();
  init_jquery();
  function* activeElements(activeElement = document.activeElement) {
    if (activeElement === null || activeElement === void 0) return;
    yield activeElement;
    if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
      yield* __yieldStar(activeElements(activeElement.shadowRoot.activeElement));
    }
  }
  function getDeepestActiveElement() {
    return [...activeElements()].pop();
  }
  var computedStyleMap = /* @__PURE__ */ new WeakMap();
  function getCachedComputedStyle(el) {
    let computedStyle = computedStyleMap.get(el);
    if (!computedStyle) {
      computedStyle = window.getComputedStyle(el, null);
      computedStyleMap.set(el, computedStyle);
    }
    return computedStyle;
  }
  function isVisible(el) {
    if (typeof el.checkVisibility === "function") {
      return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
    }
    const computedStyle = getCachedComputedStyle(el);
    return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
  }
  function isOverflowingAndTabbable(el) {
    const computedStyle = getCachedComputedStyle(el);
    const { overflowY, overflowX } = computedStyle;
    if (overflowY === "scroll" || overflowX === "scroll") {
      return true;
    }
    if (overflowY !== "auto" || overflowX !== "auto") {
      return false;
    }
    const isOverflowingY = el.scrollHeight > el.clientHeight;
    if (isOverflowingY && overflowY === "auto") {
      return true;
    }
    const isOverflowingX = el.scrollWidth > el.clientWidth;
    if (isOverflowingX && overflowX === "auto") {
      return true;
    }
    return false;
  }
  function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    const tabindex = Number(el.getAttribute("tabindex"));
    const hasTabindex = el.hasAttribute("tabindex");
    if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
      return false;
    }
    if (el.hasAttribute("disabled")) {
      return false;
    }
    if (el.closest("[inert]")) {
      return false;
    }
    if (tag === "input" && el.getAttribute("type") === "radio") {
      const rootNode = el.getRootNode();
      const findRadios = `input[type='radio'][name="${el.getAttribute("name")}"]`;
      const firstChecked = rootNode.querySelector(`${findRadios}:checked`);
      if (firstChecked) {
        return firstChecked === el;
      }
      const firstRadio = rootNode.querySelector(findRadios);
      return firstRadio === el;
    }
    if (!isVisible(el)) {
      return false;
    }
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
      return true;
    }
    if (el.hasAttribute("tabindex")) {
      return true;
    }
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
      return true;
    }
    const isNativelyTabbable = [
      "button",
      "input",
      "select",
      "textarea",
      "a",
      "audio",
      "video",
      "summary",
      "iframe"
    ].includes(tag);
    if (isNativelyTabbable) {
      return true;
    }
    return isOverflowingAndTabbable(el);
  }
  function getTabbableBoundary(root) {
    var _a, _b;
    const tabbableElements = getTabbableElements(root);
    const start = (_a = tabbableElements[0]) != null ? _a : null;
    const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
    return { start, end };
  }
  function getSlottedChildrenOutsideRootElement(slotElement, root) {
    var _a;
    return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
  }
  function getTabbableElements(root) {
    const walkedEls = /* @__PURE__ */ new WeakMap();
    const tabbableElements = [];
    function walk(el) {
      if (el instanceof Element) {
        if (el.hasAttribute("inert") || el.closest("[inert]")) {
          return;
        }
        if (walkedEls.has(el)) {
          return;
        }
        walkedEls.set(el, true);
        if (!tabbableElements.includes(el) && isTabbable(el)) {
          tabbableElements.push(el);
        }
        if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) {
          el.assignedElements({ flatten: true }).forEach((assignedEl) => {
            walk(assignedEl);
          });
        }
        if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
          walk(el.shadowRoot);
        }
      }
      for (const e12 of el.children) {
        walk(e12);
      }
    }
    walk(root);
    return tabbableElements.sort((a4, b3) => {
      const aTabindex = Number(a4.getAttribute("tabindex")) || 0;
      const bTabindex = Number(b3.getAttribute("tabindex")) || 0;
      return bTabindex - aTabindex;
    });
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EMN3H5QW.js
  var activeModals = [];
  var Modal = class {
    constructor(element) {
      this.tabDirection = "forward";
      this.handleFocusIn = () => {
        if (!this.isActive()) return;
        this.checkFocus();
      };
      this.handleKeyDown = (event) => {
        var _a;
        if (event.key !== "Tab" || this.isExternalActivated) return;
        if (!this.isActive()) return;
        const currentActiveElement = getDeepestActiveElement();
        this.previousFocus = currentActiveElement;
        if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
          return;
        }
        if (event.shiftKey) {
          this.tabDirection = "backward";
        } else {
          this.tabDirection = "forward";
        }
        const tabbableElements = getTabbableElements(this.element);
        let currentFocusIndex = tabbableElements.findIndex((el) => el === currentActiveElement);
        this.previousFocus = this.currentFocus;
        const addition = this.tabDirection === "forward" ? 1 : -1;
        while (true) {
          if (currentFocusIndex + addition >= tabbableElements.length) {
            currentFocusIndex = 0;
          } else if (currentFocusIndex + addition < 0) {
            currentFocusIndex = tabbableElements.length - 1;
          } else {
            currentFocusIndex += addition;
          }
          this.previousFocus = this.currentFocus;
          const nextFocus = (
            /** @type {HTMLElement} */
            tabbableElements[currentFocusIndex]
          );
          if (this.tabDirection === "backward") {
            if (this.previousFocus && this.possiblyHasTabbableChildren(this.previousFocus)) {
              return;
            }
          }
          if (nextFocus && this.possiblyHasTabbableChildren(nextFocus)) {
            return;
          }
          event.preventDefault();
          this.currentFocus = nextFocus;
          (_a = this.currentFocus) == null ? void 0 : _a.focus({ preventScroll: false });
          const allActiveElements = [...activeElements()];
          if (allActiveElements.includes(this.currentFocus) || !allActiveElements.includes(this.previousFocus)) {
            break;
          }
        }
        setTimeout(() => this.checkFocus());
      };
      this.handleKeyUp = () => {
        this.tabDirection = "forward";
      };
      this.element = element;
      this.elementsWithTabbableControls = ["iframe"];
    }
    /** Activates focus trapping. */
    activate() {
      activeModals.push(this.element);
      document.addEventListener("focusin", this.handleFocusIn);
      document.addEventListener("keydown", this.handleKeyDown);
      document.addEventListener("keyup", this.handleKeyUp);
    }
    /** Deactivates focus trapping. */
    deactivate() {
      activeModals = activeModals.filter((modal) => modal !== this.element);
      this.currentFocus = null;
      document.removeEventListener("focusin", this.handleFocusIn);
      document.removeEventListener("keydown", this.handleKeyDown);
      document.removeEventListener("keyup", this.handleKeyUp);
    }
    /** Determines if this modal element is currently active or not. */
    isActive() {
      return activeModals[activeModals.length - 1] === this.element;
    }
    /** Activates external modal behavior and temporarily disables focus trapping. */
    activateExternal() {
      this.isExternalActivated = true;
    }
    /** Deactivates external modal behavior and re-enables focus trapping. */
    deactivateExternal() {
      this.isExternalActivated = false;
    }
    checkFocus() {
      if (this.isActive() && !this.isExternalActivated) {
        const tabbableElements = getTabbableElements(this.element);
        if (!this.element.matches(":focus-within")) {
          const start = tabbableElements[0];
          const end = tabbableElements[tabbableElements.length - 1];
          const target = this.tabDirection === "forward" ? start : end;
          if (typeof (target == null ? void 0 : target.focus) === "function") {
            this.currentFocus = target;
            target.focus({ preventScroll: false });
          }
        }
      }
    }
    possiblyHasTabbableChildren(element) {
      return this.elementsWithTabbableControls.includes(element.tagName.toLowerCase()) || element.hasAttribute("controls");
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
  init_define_process();
  init_jquery();
  function getOffset(element, parent) {
    return {
      top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
      left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
  }
  var locks = /* @__PURE__ */ new Set();
  function getScrollbarWidth() {
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }
  function getExistingBodyPadding() {
    const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
    if (isNaN(padding) || !padding) {
      return 0;
    }
    return padding;
  }
  function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    if (!document.documentElement.classList.contains("sl-scroll-lock")) {
      const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
      let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
      if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") {
        scrollbarGutterProperty = "stable";
      }
      if (scrollbarWidth < 2) {
        scrollbarGutterProperty = "";
      }
      document.documentElement.style.setProperty("--sl-scroll-lock-gutter", scrollbarGutterProperty);
      document.documentElement.classList.add("sl-scroll-lock");
      document.documentElement.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
    }
  }
  function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
      document.documentElement.classList.remove("sl-scroll-lock");
      document.documentElement.style.removeProperty("--sl-scroll-lock-size");
    }
  }
  function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset3 = getOffset(element, container);
    const offsetTop = offset3.top + container.scrollTop;
    const offsetLeft = offset3.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
      if (offsetLeft < minX) {
        container.scrollTo({ left: offsetLeft, behavior });
      } else if (offsetLeft + element.clientWidth > maxX) {
        container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
      }
    }
    if (direction === "vertical" || direction === "both") {
      if (offsetTop < minY) {
        container.scrollTo({ top: offsetTop, behavior });
      } else if (offsetTop + element.clientHeight > maxY) {
        container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
      }
    }
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G5RKA5HF.js
  init_define_process();
  init_jquery();
  var dialog_styles_default = i`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NIOQIUH4.js
  var SlDialog = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController2(this);
      this.modal = new Modal(this);
      this.open = false;
      this.label = "";
      this.noHeader = false;
      this.handleDocumentKeyDown = (event) => {
        if (event.key === "Escape" && this.modal.isActive() && this.open) {
          event.stopPropagation();
          this.requestClose("keyboard");
        }
      };
    }
    firstUpdated() {
      this.dialog.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.modal.activate();
        lockBodyScrolling(this);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.modal.deactivate();
      unlockBodyScrolling(this);
      this.removeOpenListeners();
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "dialog.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      var _a;
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => this.requestClose("keyboard");
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
    }
    removeOpenListeners() {
      var _a;
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        this.modal.activate();
        lockBodyScrolling(this);
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        this.dialog.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, "dialog.show", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        blurActiveElement(this);
        this.emit("sl-hide");
        this.removeOpenListeners();
        this.modal.deactivate();
        await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, "dialog.hide", { dir: this.localize.dir() });
        const overlayAnimation = getAnimation(this, "dialog.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.dialog.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        unlockBodyScrolling(this);
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    /** Shows the dialog. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dialog */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        dialog: true,
        "dialog--open": this.open,
        "dialog--has-footer": this.hasSlotController.test("footer")
      })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o6(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o6(!this.noHeader ? "title" : void 0)}
          tabindex="-1"
        >
          ${!this.noHeader ? x`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDialog.styles = [component_styles_default, dialog_styles_default];
  SlDialog.dependencies = {
    "sl-icon-button": SlIconButton
  };
  __decorateClass([
    e5(".dialog")
  ], SlDialog.prototype, "dialog", 2);
  __decorateClass([
    e5(".dialog__panel")
  ], SlDialog.prototype, "panel", 2);
  __decorateClass([
    e5(".dialog__overlay")
  ], SlDialog.prototype, "overlay", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDialog.prototype, "open", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlDialog.prototype, "label", 2);
  __decorateClass([
    n4({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDialog.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDialog.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dialog.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("dialog.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("dialog.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KPLQLAWP.js
  SlDialog.define("sl-dialog");

  // node_modules/@shoelace-style/shoelace/dist/components/drawer/drawer.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SAPQLUO4.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C5MXLBOG.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BRQKZQRB.js
  init_define_process();
  init_jquery();
  var drawer_styles_default = i`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C5MXLBOG.js
  function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var SlDrawer = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "footer");
      this.localize = new LocalizeController2(this);
      this.modal = new Modal(this);
      this.open = false;
      this.label = "";
      this.placement = "end";
      this.contained = false;
      this.noHeader = false;
      this.handleDocumentKeyDown = (event) => {
        if (this.contained) {
          return;
        }
        if (event.key === "Escape" && this.modal.isActive() && this.open) {
          event.stopImmediatePropagation();
          this.requestClose("keyboard");
        }
      };
    }
    firstUpdated() {
      this.drawer.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      unlockBodyScrolling(this);
      this.removeOpenListeners();
    }
    requestClose(source) {
      const slRequestClose = this.emit("sl-request-close", {
        cancelable: true,
        detail: { source }
      });
      if (slRequestClose.defaultPrevented) {
        const animation = getAnimation(this, "drawer.denyClose", { dir: this.localize.dir() });
        animateTo(this.panel, animation.keyframes, animation.options);
        return;
      }
      this.hide();
    }
    addOpenListeners() {
      var _a;
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        if (!this.contained) {
          this.closeWatcher = new CloseWatcher();
          this.closeWatcher.onclose = () => this.requestClose("keyboard");
        }
      } else {
        document.addEventListener("keydown", this.handleDocumentKeyDown);
      }
    }
    removeOpenListeners() {
      var _a;
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    async handleOpenChange() {
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        this.originalTrigger = document.activeElement;
        if (!this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
        const autoFocusTarget = this.querySelector("[autofocus]");
        if (autoFocusTarget) {
          autoFocusTarget.removeAttribute("autofocus");
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        this.drawer.hidden = false;
        requestAnimationFrame(() => {
          const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
          if (!slInitialFocus.defaultPrevented) {
            if (autoFocusTarget) {
              autoFocusTarget.focus({ preventScroll: true });
            } else {
              this.panel.focus({ preventScroll: true });
            }
          }
          if (autoFocusTarget) {
            autoFocusTarget.setAttribute("autofocus", "");
          }
        });
        const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.show", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
        ]);
        this.emit("sl-after-show");
      } else {
        blurActiveElement(this);
        this.emit("sl-hide");
        this.removeOpenListeners();
        if (!this.contained) {
          this.modal.deactivate();
          unlockBodyScrolling(this);
        }
        await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
        const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
          dir: this.localize.dir()
        });
        const overlayAnimation = getAnimation(this, "drawer.overlay.hide", { dir: this.localize.dir() });
        await Promise.all([
          animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
            this.overlay.hidden = true;
          }),
          animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
            this.panel.hidden = true;
          })
        ]);
        this.drawer.hidden = true;
        this.overlay.hidden = false;
        this.panel.hidden = false;
        const trigger = this.originalTrigger;
        if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
          setTimeout(() => trigger.focus());
        }
        this.emit("sl-after-hide");
      }
    }
    handleNoModalChange() {
      if (this.open && !this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }
      if (this.open && this.contained) {
        this.modal.deactivate();
        unlockBodyScrolling(this);
      }
    }
    /** Shows the drawer. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the drawer */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        drawer: true,
        "drawer--open": this.open,
        "drawer--top": this.placement === "top",
        "drawer--end": this.placement === "end",
        "drawer--bottom": this.placement === "bottom",
        "drawer--start": this.placement === "start",
        "drawer--contained": this.contained,
        "drawer--fixed": !this.contained,
        "drawer--rtl": this.localize.dir() === "rtl",
        "drawer--has-footer": this.hasSlotController.test("footer")
      })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${o6(this.noHeader ? this.label : void 0)}
          aria-labelledby=${o6(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? x`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
    }
  };
  SlDrawer.styles = [component_styles_default, drawer_styles_default];
  SlDrawer.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e5(".drawer")
  ], SlDrawer.prototype, "drawer", 2);
  __decorateClass([
    e5(".drawer__panel")
  ], SlDrawer.prototype, "panel", 2);
  __decorateClass([
    e5(".drawer__overlay")
  ], SlDrawer.prototype, "overlay", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "open", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlDrawer.prototype, "label", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlDrawer.prototype, "placement", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDrawer.prototype, "contained", 2);
  __decorateClass([
    n4({ attribute: "no-header", type: Boolean, reflect: true })
  ], SlDrawer.prototype, "noHeader", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch("contained", { waitUntilFirstUpdate: true })
  ], SlDrawer.prototype, "handleNoModalChange", 1);
  setDefaultAnimation("drawer.showTop", {
    keyframes: [
      { opacity: 0, translate: "0 -100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideTop", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 -100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showEnd", {
    keyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideEnd", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showBottom", {
    keyframes: [
      { opacity: 0, translate: "0 100%" },
      { opacity: 1, translate: "0 0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideBottom", {
    keyframes: [
      { opacity: 1, translate: "0 0" },
      { opacity: 0, translate: "0 100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.showStart", {
    keyframes: [
      { opacity: 0, translate: "-100%" },
      { opacity: 1, translate: "0" }
    ],
    rtlKeyframes: [
      { opacity: 0, translate: "100%" },
      { opacity: 1, translate: "0" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.hideStart", {
    keyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "-100%" }
    ],
    rtlKeyframes: [
      { opacity: 1, translate: "0" },
      { opacity: 0, translate: "100%" }
    ],
    options: { duration: 250, easing: "ease" }
  });
  setDefaultAnimation("drawer.denyClose", {
    keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.show", {
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    options: { duration: 250 }
  });
  setDefaultAnimation("drawer.overlay.hide", {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    options: { duration: 250 }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SAPQLUO4.js
  SlDrawer.define("sl-drawer");

  // node_modules/@shoelace-style/shoelace/dist/components/dropdown/dropdown.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UDWRA64J.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C56A5M6T.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXP7GVU3.js
  init_define_process();
  init_jquery();
  var dropdown_styles_default = i`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5JY5FUCG.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3KSWVBQ5.js
  init_define_process();
  init_jquery();
  var popup_styles_default = i`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  init_define_process();
  init_jquery();

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  init_define_process();
  init_jquery();

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  init_define_process();
  init_jquery();
  var min = Math.min;
  var max = Math.max;
  var round = Math.round;
  var floor = Math.floor;
  var createCoords = (v2) => ({
    x: v2,
    y: v2
  });
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x: x2,
      y: y3,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y3,
      left: x2,
      right: x2 + width,
      bottom: y3 + height,
      x: x2,
      y: y3
    };
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform: platform2
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
    let rects = await platform2.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x: x2,
      y: y3
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i10 = 0; i10 < validMiddleware.length; i10++) {
      const {
        name,
        fn
      } = validMiddleware[i10];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x: x2,
        y: y3,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform: platform2,
        elements: {
          reference,
          floating
        }
      });
      x2 = nextX != null ? nextX : x2;
      y3 = nextY != null ? nextY : y3;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform2.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x: x2,
            y: y3
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i10 = -1;
      }
    }
    return {
      x: x2,
      y: y3,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x: x2,
      y: y3,
      platform: platform2,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
      element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x: x2,
      y: y3,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
    const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var arrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y3,
        placement,
        rects,
        platform: platform2,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x: x2,
        y: y3
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform2.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset3 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset3 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset3,
          centerOffset: center - offset3 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform: platform2,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d3) => d3.overflows[0] <= 0).sort((a4, b3) => a4.overflows[1] - b3.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d3) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d3.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d3) => [d3.placement, d3.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a4, b3) => a4[1] - b3[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform: platform2,
      elements
    } = state;
    const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x: x2,
          y: y3,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x2 + diffCoords.x,
          y: y3 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x: x2,
          y: y3,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x3,
                y: y4
              } = _ref;
              return {
                x: x3,
                y: y4
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x: x2,
          y: y3
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x2,
            y: limitedCoords.y - y3,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };
  var size = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "size",
      options,
      async fn(state) {
        var _state$middlewareData, _state$middlewareData2;
        const {
          placement,
          rects,
          platform: platform2,
          elements
        } = state;
        const {
          apply = () => {
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isYAxis = getSideAxis(placement) === "y";
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === "top" || side === "bottom") {
          heightSide = side;
          widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
        } else {
          widthSide = side;
          heightSide = alignment === "end" ? "top" : "bottom";
        }
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        const maximumClippingWidth = width - overflow.left - overflow.right;
        const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
        const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
          availableWidth = maximumClippingWidth;
        }
        if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
          availableHeight = maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isYAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform2.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
  init_define_process();
  init_jquery();
  function hasWindow() {
    return typeof window !== "undefined";
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || "").toLowerCase();
    }
    return "#document";
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    if (!hasWindow()) {
      return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === "undefined") {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle2(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].includes(getNodeName(element));
  }
  function isTopLayer(element) {
    return [":popover-open", ":modal"].some((selector) => {
      try {
        return element.matches(selector);
      } catch (e12) {
        return false;
      }
    });
  }
  function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
    return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else if (isTopLayer(currentNode)) {
        return null;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === "undefined" || !CSS.supports) return false;
    return CSS.supports("-webkit-backdrop-filter", "none");
  }
  function isLastTraversableNode(node) {
    return ["html", "body", "#document"].includes(getNodeName(node));
  }
  function getComputedStyle2(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.scrollX,
      scrollTop: element.scrollY
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === "html") {
      return node;
    }
    const result = (
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot || // DOM Element detected.
      node.parentNode || // ShadowRoot detected.
      isShadowRoot(node) && node.host || // Fallback.
      getDocumentElement(node)
    );
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      const frameElement = getFrameElement(win);
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
  function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
  }

  // node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
  function getCssDimensions(element) {
    const css = getComputedStyle2(element);
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }
  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }
  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $: $3
    } = getCssDimensions(domElement);
    let x2 = ($3 ? round(rect.width) : rect.width) / width;
    let y3 = ($3 ? round(rect.height) : rect.height) / height;
    if (!x2 || !Number.isFinite(x2)) {
      x2 = 1;
    }
    if (!y3 || !Number.isFinite(y3)) {
      y3 = 1;
    }
    return {
      x: x2,
      y: y3
    };
  }
  var noOffsets = /* @__PURE__ */ createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x2 = (clientRect.left + visualOffsets.x) / scale.x;
    let y3 = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = getFrameElement(currentWin);
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle2(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x2 *= iframeScale.x;
        y3 *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x2 += left;
        y3 += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = getFrameElement(currentWin);
      }
    }
    return rectToClientRect({
      width,
      height,
      x: x2,
      y: y3
    });
  }
  function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
      return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
  }
  function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
    if (ignoreScrollbarX === void 0) {
      ignoreScrollbarX = false;
    }
    const htmlRect = documentElement.getBoundingClientRect();
    const x2 = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
      // RTL <body> scrollbar.
      getWindowScrollBarX(documentElement, htmlRect)
    ));
    const y3 = htmlRect.top + scroll.scrollTop;
    return {
      x: x2,
      y: y3
    };
  }
  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === "fixed";
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
  }
  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y3 = -scroll.scrollTop;
    if (getComputedStyle2(body).direction === "rtl") {
      x2 += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x2 = 0;
    let y3 = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
        x2 = visualViewport.offsetLeft;
        y3 = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x2 = left * scale.x;
    const y3 = top * scale.y;
    return {
      width,
      height,
      x: x2,
      y: y3
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === "viewport") {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === "document") {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y,
        width: clippingAncestor.width,
        height: clippingAncestor.height
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
  }
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle2(element).position === "fixed";
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle2(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === "fixed") {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        result = result.filter((ancestor) => ancestor !== currentNode);
      } else {
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }
  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }
  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === "fixed";
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y3 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
      x: x2,
      y: y3,
      width: rect.width,
      height: rect.height
    };
  }
  function isStaticPositioned(element) {
    return getComputedStyle2(element).position === "static";
  }
  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
      rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
  }
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }
  var getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };
  function isRTL(element) {
    return getComputedStyle2(element).direction === "rtl";
  }
  var platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      var _io;
      clearTimeout(timeoutId);
      (_io = io) == null || _io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      const options = {
        rootMargin,
        threshold: max(0, min(1, threshold)) || 1
      };
      let isFirstUpdate = true;
      function handleObserve(entries) {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (!ratio) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 1e3);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }
      try {
        io = new IntersectionObserver(handleObserve, {
          ...options,
          // Handle <iframe>s
          root: root.ownerDocument
        });
      } catch (e12) {
        io = new IntersectionObserver(handleObserve, options);
      }
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }
  function autoUpdate(reference, floating, update2, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = typeof ResizeObserver === "function",
      layoutShift = typeof IntersectionObserver === "function",
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.addEventListener("scroll", update2, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener("resize", update2);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver((_ref) => {
        let [firstEntry] = _ref;
        if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
          resizeObserver.unobserve(floating);
          cancelAnimationFrame(reobserveFrame);
          reobserveFrame = requestAnimationFrame(() => {
            var _resizeObserver;
            (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
          });
        }
        update2();
      });
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update2();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update2();
    return () => {
      var _resizeObserver2;
      ancestors.forEach((ancestor) => {
        ancestorScroll && ancestor.removeEventListener("scroll", update2);
        ancestorResize && ancestor.removeEventListener("resize", update2);
      });
      cleanupIo == null || cleanupIo();
      (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  var offset2 = offset;
  var shift2 = shift;
  var flip2 = flip;
  var size2 = size;
  var arrow2 = arrow;
  var computePosition2 = (reference, floating, options) => {
    const cache = /* @__PURE__ */ new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  // node_modules/composed-offset-position/dist/composed-offset-position.browser.min.mjs
  init_define_process();
  init_jquery();
  function e9(t8) {
    return i7(t8);
  }
  function r7(t8) {
    return t8.assignedSlot ? t8.assignedSlot : t8.parentNode instanceof ShadowRoot ? t8.parentNode.host : t8.parentNode;
  }
  function i7(e12) {
    for (let t8 = e12; t8; t8 = r7(t8)) if (t8 instanceof Element && "none" === getComputedStyle(t8).display) return null;
    for (let n9 = r7(e12); n9; n9 = r7(n9)) {
      if (!(n9 instanceof Element)) continue;
      const e13 = getComputedStyle(n9);
      if ("contents" !== e13.display) {
        if ("static" !== e13.position || isContainingBlock(e13)) return n9;
        if ("BODY" === n9.tagName) return n9;
      }
    }
    return null;
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5JY5FUCG.js
  function isVirtualElement(e12) {
    return e12 !== null && typeof e12 === "object" && "getBoundingClientRect" in e12 && ("contextElement" in e12 ? e12.contextElement instanceof Element : true);
  }
  var SlPopup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.active = false;
      this.placement = "top";
      this.strategy = "absolute";
      this.distance = 0;
      this.skidding = 0;
      this.arrow = false;
      this.arrowPlacement = "anchor";
      this.arrowPadding = 10;
      this.flip = false;
      this.flipFallbackPlacements = "";
      this.flipFallbackStrategy = "best-fit";
      this.flipPadding = 0;
      this.shift = false;
      this.shiftPadding = 0;
      this.autoSizePadding = 0;
      this.hoverBridge = false;
      this.updateHoverBridge = () => {
        if (this.hoverBridge && this.anchorEl) {
          const anchorRect = this.anchorEl.getBoundingClientRect();
          const popupRect = this.popup.getBoundingClientRect();
          const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
          let topLeftX = 0;
          let topLeftY = 0;
          let topRightX = 0;
          let topRightY = 0;
          let bottomLeftX = 0;
          let bottomLeftY = 0;
          let bottomRightX = 0;
          let bottomRightY = 0;
          if (isVertical) {
            if (anchorRect.top < popupRect.top) {
              topLeftX = anchorRect.left;
              topLeftY = anchorRect.bottom;
              topRightX = anchorRect.right;
              topRightY = anchorRect.bottom;
              bottomLeftX = popupRect.left;
              bottomLeftY = popupRect.top;
              bottomRightX = popupRect.right;
              bottomRightY = popupRect.top;
            } else {
              topLeftX = popupRect.left;
              topLeftY = popupRect.bottom;
              topRightX = popupRect.right;
              topRightY = popupRect.bottom;
              bottomLeftX = anchorRect.left;
              bottomLeftY = anchorRect.top;
              bottomRightX = anchorRect.right;
              bottomRightY = anchorRect.top;
            }
          } else {
            if (anchorRect.left < popupRect.left) {
              topLeftX = anchorRect.right;
              topLeftY = anchorRect.top;
              topRightX = popupRect.left;
              topRightY = popupRect.top;
              bottomLeftX = anchorRect.right;
              bottomLeftY = anchorRect.bottom;
              bottomRightX = popupRect.left;
              bottomRightY = popupRect.bottom;
            } else {
              topLeftX = popupRect.right;
              topLeftY = popupRect.top;
              topRightX = anchorRect.left;
              topRightY = anchorRect.top;
              bottomLeftX = popupRect.right;
              bottomLeftY = popupRect.bottom;
              bottomRightX = anchorRect.left;
              bottomRightY = anchorRect.bottom;
            }
          }
          this.style.setProperty("--hover-bridge-top-left-x", `${topLeftX}px`);
          this.style.setProperty("--hover-bridge-top-left-y", `${topLeftY}px`);
          this.style.setProperty("--hover-bridge-top-right-x", `${topRightX}px`);
          this.style.setProperty("--hover-bridge-top-right-y", `${topRightY}px`);
          this.style.setProperty("--hover-bridge-bottom-left-x", `${bottomLeftX}px`);
          this.style.setProperty("--hover-bridge-bottom-left-y", `${bottomLeftY}px`);
          this.style.setProperty("--hover-bridge-bottom-right-x", `${bottomRightX}px`);
          this.style.setProperty("--hover-bridge-bottom-right-y", `${bottomRightY}px`);
        }
      };
    }
    async connectedCallback() {
      super.connectedCallback();
      await this.updateComplete;
      this.start();
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stop();
    }
    async updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("active")) {
        if (this.active) {
          this.start();
        } else {
          this.stop();
        }
      }
      if (changedProps.has("anchor")) {
        this.handleAnchorChange();
      }
      if (this.active) {
        await this.updateComplete;
        this.reposition();
      }
    }
    async handleAnchorChange() {
      await this.stop();
      if (this.anchor && typeof this.anchor === "string") {
        const root = this.getRootNode();
        this.anchorEl = root.getElementById(this.anchor);
      } else if (this.anchor instanceof Element || isVirtualElement(this.anchor)) {
        this.anchorEl = this.anchor;
      } else {
        this.anchorEl = this.querySelector('[slot="anchor"]');
      }
      if (this.anchorEl instanceof HTMLSlotElement) {
        this.anchorEl = this.anchorEl.assignedElements({ flatten: true })[0];
      }
      if (this.anchorEl && this.active) {
        this.start();
      }
    }
    start() {
      if (!this.anchorEl || !this.active) {
        return;
      }
      this.cleanup = autoUpdate(this.anchorEl, this.popup, () => {
        this.reposition();
      });
    }
    async stop() {
      return new Promise((resolve) => {
        if (this.cleanup) {
          this.cleanup();
          this.cleanup = void 0;
          this.removeAttribute("data-current-placement");
          this.style.removeProperty("--auto-size-available-width");
          this.style.removeProperty("--auto-size-available-height");
          requestAnimationFrame(() => resolve());
        } else {
          resolve();
        }
      });
    }
    /** Forces the popup to recalculate and reposition itself. */
    reposition() {
      if (!this.active || !this.anchorEl) {
        return;
      }
      const middleware = [
        // The offset middleware goes first
        offset2({ mainAxis: this.distance, crossAxis: this.skidding })
      ];
      if (this.sync) {
        middleware.push(
          size2({
            apply: ({ rects }) => {
              const syncWidth = this.sync === "width" || this.sync === "both";
              const syncHeight = this.sync === "height" || this.sync === "both";
              this.popup.style.width = syncWidth ? `${rects.reference.width}px` : "";
              this.popup.style.height = syncHeight ? `${rects.reference.height}px` : "";
            }
          })
        );
      } else {
        this.popup.style.width = "";
        this.popup.style.height = "";
      }
      if (this.flip) {
        middleware.push(
          flip2({
            boundary: this.flipBoundary,
            // @ts-expect-error - We're converting a string attribute to an array here
            fallbackPlacements: this.flipFallbackPlacements,
            fallbackStrategy: this.flipFallbackStrategy === "best-fit" ? "bestFit" : "initialPlacement",
            padding: this.flipPadding
          })
        );
      }
      if (this.shift) {
        middleware.push(
          shift2({
            boundary: this.shiftBoundary,
            padding: this.shiftPadding
          })
        );
      }
      if (this.autoSize) {
        middleware.push(
          size2({
            boundary: this.autoSizeBoundary,
            padding: this.autoSizePadding,
            apply: ({ availableWidth, availableHeight }) => {
              if (this.autoSize === "vertical" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-height", `${availableHeight}px`);
              } else {
                this.style.removeProperty("--auto-size-available-height");
              }
              if (this.autoSize === "horizontal" || this.autoSize === "both") {
                this.style.setProperty("--auto-size-available-width", `${availableWidth}px`);
              } else {
                this.style.removeProperty("--auto-size-available-width");
              }
            }
          })
        );
      } else {
        this.style.removeProperty("--auto-size-available-width");
        this.style.removeProperty("--auto-size-available-height");
      }
      if (this.arrow) {
        middleware.push(
          arrow2({
            element: this.arrowEl,
            padding: this.arrowPadding
          })
        );
      }
      const getOffsetParent2 = this.strategy === "absolute" ? (element) => platform.getOffsetParent(element, e9) : platform.getOffsetParent;
      computePosition2(this.anchorEl, this.popup, {
        placement: this.placement,
        middleware,
        strategy: this.strategy,
        platform: __spreadProps(__spreadValues({}, platform), {
          getOffsetParent: getOffsetParent2
        })
      }).then(({ x: x2, y: y3, middlewareData, placement }) => {
        const isRtl = this.localize.dir() === "rtl";
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        this.setAttribute("data-current-placement", placement);
        Object.assign(this.popup.style, {
          left: `${x2}px`,
          top: `${y3}px`
        });
        if (this.arrow) {
          const arrowX = middlewareData.arrow.x;
          const arrowY = middlewareData.arrow.y;
          let top = "";
          let right = "";
          let bottom = "";
          let left = "";
          if (this.arrowPlacement === "start") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            top = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? value : "";
            left = isRtl ? "" : value;
          } else if (this.arrowPlacement === "end") {
            const value = typeof arrowX === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
            right = isRtl ? "" : value;
            left = isRtl ? value : "";
            bottom = typeof arrowY === "number" ? `calc(${this.arrowPadding}px - var(--arrow-padding-offset))` : "";
          } else if (this.arrowPlacement === "center") {
            left = typeof arrowX === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
            top = typeof arrowY === "number" ? `calc(50% - var(--arrow-size-diagonal))` : "";
          } else {
            left = typeof arrowX === "number" ? `${arrowX}px` : "";
            top = typeof arrowY === "number" ? `${arrowY}px` : "";
          }
          Object.assign(this.arrowEl.style, {
            top,
            right,
            bottom,
            left,
            [staticSide]: "calc(var(--arrow-size-diagonal) * -1)"
          });
        }
      });
      requestAnimationFrame(() => this.updateHoverBridge());
      this.emit("sl-reposition");
    }
    render() {
      return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${e8({
        "popup-hover-bridge": true,
        "popup-hover-bridge--visible": this.hoverBridge && this.active
      })}
      ></span>

      <div
        part="popup"
        class=${e8({
        popup: true,
        "popup--active": this.active,
        "popup--fixed": this.strategy === "fixed",
        "popup--has-arrow": this.arrow
      })}
      >
        <slot></slot>
        ${this.arrow ? x`<div part="arrow" class="popup__arrow" role="presentation"></div>` : ""}
      </div>
    `;
    }
  };
  SlPopup.styles = [component_styles_default, popup_styles_default];
  __decorateClass([
    e5(".popup")
  ], SlPopup.prototype, "popup", 2);
  __decorateClass([
    e5(".popup__arrow")
  ], SlPopup.prototype, "arrowEl", 2);
  __decorateClass([
    n4()
  ], SlPopup.prototype, "anchor", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlPopup.prototype, "active", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlPopup.prototype, "placement", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlPopup.prototype, "strategy", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlPopup.prototype, "distance", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlPopup.prototype, "skidding", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlPopup.prototype, "arrow", 2);
  __decorateClass([
    n4({ attribute: "arrow-placement" })
  ], SlPopup.prototype, "arrowPlacement", 2);
  __decorateClass([
    n4({ attribute: "arrow-padding", type: Number })
  ], SlPopup.prototype, "arrowPadding", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlPopup.prototype, "flip", 2);
  __decorateClass([
    n4({
      attribute: "flip-fallback-placements",
      converter: {
        fromAttribute: (value) => {
          return value.split(" ").map((p3) => p3.trim()).filter((p3) => p3 !== "");
        },
        toAttribute: (value) => {
          return value.join(" ");
        }
      }
    })
  ], SlPopup.prototype, "flipFallbackPlacements", 2);
  __decorateClass([
    n4({ attribute: "flip-fallback-strategy" })
  ], SlPopup.prototype, "flipFallbackStrategy", 2);
  __decorateClass([
    n4({ type: Object })
  ], SlPopup.prototype, "flipBoundary", 2);
  __decorateClass([
    n4({ attribute: "flip-padding", type: Number })
  ], SlPopup.prototype, "flipPadding", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlPopup.prototype, "shift", 2);
  __decorateClass([
    n4({ type: Object })
  ], SlPopup.prototype, "shiftBoundary", 2);
  __decorateClass([
    n4({ attribute: "shift-padding", type: Number })
  ], SlPopup.prototype, "shiftPadding", 2);
  __decorateClass([
    n4({ attribute: "auto-size" })
  ], SlPopup.prototype, "autoSize", 2);
  __decorateClass([
    n4()
  ], SlPopup.prototype, "sync", 2);
  __decorateClass([
    n4({ type: Object })
  ], SlPopup.prototype, "autoSizeBoundary", 2);
  __decorateClass([
    n4({ attribute: "auto-size-padding", type: Number })
  ], SlPopup.prototype, "autoSizePadding", 2);
  __decorateClass([
    n4({ attribute: "hover-bridge", type: Boolean })
  ], SlPopup.prototype, "hoverBridge", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C56A5M6T.js
  var SlDropdown = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.open = false;
      this.placement = "bottom-start";
      this.disabled = false;
      this.stayOpenOnSelect = false;
      this.distance = 0;
      this.skidding = 0;
      this.hoist = false;
      this.sync = void 0;
      this.handleKeyDown = (event) => {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
          this.focusOnTrigger();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        var _a;
        if (event.key === "Escape" && this.open && !this.closeWatcher) {
          event.stopPropagation();
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          const computeClosestContaining = (element, tagName) => {
            if (!element) return null;
            const closest = element.closest(tagName);
            if (closest) return closest;
            const rootNode = element.getRootNode();
            if (rootNode instanceof ShadowRoot) {
              return computeClosestContaining(rootNode.host, tagName);
            }
            return null;
          };
          setTimeout(() => {
            var _a2;
            const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? getDeepestActiveElement() : document.activeElement;
            if (!this.containingElement || computeClosestContaining(activeElement, this.containingElement.tagName.toLowerCase()) !== this.containingElement) {
              this.hide();
            }
          });
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this.containingElement && !path.includes(this.containingElement)) {
          this.hide();
        }
      };
      this.handlePanelSelect = (event) => {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      };
    }
    connectedCallback() {
      super.connectedCallback();
      if (!this.containingElement) {
        this.containingElement = this;
      }
    }
    firstUpdated() {
      this.panel.hidden = !this.open;
      if (this.open) {
        this.addOpenListeners();
        this.popup.active = true;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeOpenListeners();
      this.hide();
    }
    focusOnTrigger() {
      const trigger = this.trigger.assignedElements({ flatten: true })[0];
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        trigger.focus();
      }
    }
    getMenu() {
      return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
    }
    handleTriggerClick() {
      if (this.open) {
        this.hide();
      } else {
        this.show();
        this.focusOnTrigger();
      }
    }
    async handleTriggerKeyDown(event) {
      if ([" ", "Enter"].includes(event.key)) {
        event.preventDefault();
        this.handleTriggerClick();
        return;
      }
      const menu = this.getMenu();
      if (menu) {
        const menuItems = menu.getAllItems();
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
            await this.updateComplete;
          }
          if (menuItems.length > 0) {
            this.updateComplete.then(() => {
              if (event.key === "ArrowDown" || event.key === "Home") {
                menu.setCurrentItem(firstMenuItem);
                firstMenuItem.focus();
              }
              if (event.key === "ArrowUp" || event.key === "End") {
                menu.setCurrentItem(lastMenuItem);
                lastMenuItem.focus();
              }
            });
          }
        }
      }
    }
    handleTriggerKeyUp(event) {
      if (event.key === " ") {
        event.preventDefault();
      }
    }
    handleTriggerSlotChange() {
      this.updateAccessibleTrigger();
    }
    //
    // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
    // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
    // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
    // a child of the slotted element, or an element in the slotted element's shadow root.
    //
    // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
    //
    // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
    //
    updateAccessibleTrigger() {
      const assignedElements = this.trigger.assignedElements({ flatten: true });
      const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
      let target;
      if (accessibleTrigger) {
        switch (accessibleTrigger.tagName.toLowerCase()) {
          // Shoelace buttons have to update the internal button so it's announced correctly by screen readers
          case "sl-button":
          case "sl-icon-button":
            target = accessibleTrigger.button;
            break;
          default:
            target = accessibleTrigger;
        }
        target.setAttribute("aria-haspopup", "true");
        target.setAttribute("aria-expanded", this.open ? "true" : "false");
      }
    }
    /** Shows the dropdown panel. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the dropdown panel */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /**
     * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
     * is activated.
     */
    reposition() {
      this.popup.reposition();
    }
    addOpenListeners() {
      var _a;
      this.panel.addEventListener("sl-select", this.handlePanelSelect);
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          this.hide();
          this.focusOnTrigger();
        };
      } else {
        this.panel.addEventListener("keydown", this.handleKeyDown);
      }
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
    }
    removeOpenListeners() {
      var _a;
      if (this.panel) {
        this.panel.removeEventListener("sl-select", this.handlePanelSelect);
        this.panel.removeEventListener("keydown", this.handleKeyDown);
      }
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    async handleOpenChange() {
      if (this.disabled) {
        this.open = false;
        return;
      }
      this.updateAccessibleTrigger();
      if (this.open) {
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.panel.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.panel.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    render() {
      return x`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${o6(this.sync ? this.sync : void 0)}
        class=${e8({
        dropdown: true,
        "dropdown--open": this.open
      })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlDropdown.styles = [component_styles_default, dropdown_styles_default];
  SlDropdown.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e5(".dropdown")
  ], SlDropdown.prototype, "popup", 2);
  __decorateClass([
    e5(".dropdown__trigger")
  ], SlDropdown.prototype, "trigger", 2);
  __decorateClass([
    e5(".dropdown__panel")
  ], SlDropdown.prototype, "panel", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "open", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlDropdown.prototype, "placement", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlDropdown.prototype, "disabled", 2);
  __decorateClass([
    n4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
  ], SlDropdown.prototype, "stayOpenOnSelect", 2);
  __decorateClass([
    n4({ attribute: false })
  ], SlDropdown.prototype, "containingElement", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlDropdown.prototype, "distance", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlDropdown.prototype, "skidding", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlDropdown.prototype, "hoist", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlDropdown.prototype, "sync", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlDropdown.prototype, "handleOpenChange", 1);
  setDefaultAnimation("dropdown.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("dropdown.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UDWRA64J.js
  SlDropdown.define("sl-dropdown");

  // node_modules/@shoelace-style/shoelace/dist/components/menu/menu.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JHOXTQXA.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q6CVTR7F.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.VVA35HTY.js
  init_define_process();
  init_jquery();
  var menu_styles_default = i`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q6CVTR7F.js
  var SlMenu = class extends ShoelaceElement {
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "menu");
    }
    handleClick(event) {
      const menuItemTypes = ["menuitem", "menuitemcheckbox"];
      const composedPath = event.composedPath();
      const target = composedPath.find((el) => {
        var _a;
        return menuItemTypes.includes(((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) || "");
      });
      if (!target) return;
      const closestMenu = composedPath.find((el) => {
        var _a;
        return ((_a = el == null ? void 0 : el.getAttribute) == null ? void 0 : _a.call(el, "role")) === "menu";
      });
      const clickHasSubmenu = closestMenu !== this;
      if (clickHasSubmenu) return;
      const item = target;
      if (item.type === "checkbox") {
        item.checked = !item.checked;
      }
      this.emit("sl-select", { detail: { item } });
    }
    handleKeyDown(event) {
      if (event.key === "Enter" || event.key === " ") {
        const item = this.getCurrentItem();
        event.preventDefault();
        event.stopPropagation();
        item == null ? void 0 : item.click();
      } else if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        const items = this.getAllItems();
        const activeItem = this.getCurrentItem();
        let index = activeItem ? items.indexOf(activeItem) : 0;
        if (items.length > 0) {
          event.preventDefault();
          event.stopPropagation();
          if (event.key === "ArrowDown") {
            index++;
          } else if (event.key === "ArrowUp") {
            index--;
          } else if (event.key === "Home") {
            index = 0;
          } else if (event.key === "End") {
            index = items.length - 1;
          }
          if (index < 0) {
            index = items.length - 1;
          }
          if (index > items.length - 1) {
            index = 0;
          }
          this.setCurrentItem(items[index]);
          items[index].focus();
        }
      }
    }
    handleMouseDown(event) {
      const target = event.target;
      if (this.isMenuItem(target)) {
        this.setCurrentItem(target);
      }
    }
    handleSlotChange() {
      const items = this.getAllItems();
      if (items.length > 0) {
        this.setCurrentItem(items[0]);
      }
    }
    isMenuItem(item) {
      var _a;
      return item.tagName.toLowerCase() === "sl-menu-item" || ["menuitem", "menuitemcheckbox", "menuitemradio"].includes((_a = item.getAttribute("role")) != null ? _a : "");
    }
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems() {
      return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
        if (el.inert || !this.isMenuItem(el)) {
          return false;
        }
        return true;
      });
    }
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem() {
      return this.getAllItems().find((i10) => i10.getAttribute("tabindex") === "0");
    }
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item) {
      const items = this.getAllItems();
      items.forEach((i10) => {
        i10.setAttribute("tabindex", i10 === item ? "0" : "-1");
      });
    }
    render() {
      return x`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `;
    }
  };
  SlMenu.styles = [component_styles_default, menu_styles_default];
  __decorateClass([
    e5("slot")
  ], SlMenu.prototype, "defaultSlot", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JHOXTQXA.js
  SlMenu.define("sl-menu");

  // node_modules/@shoelace-style/shoelace/dist/components/menu-item/menu-item.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HVTXQL7M.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WGYPSPL3.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KZJNDGFO.js
  init_define_process();
  init_jquery();
  var menu_item_styles_default = i`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZLIGP6HZ.js
  init_define_process();
  init_jquery();

  // node_modules/lit/directives/ref.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/ref.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/async-directive.js
  init_define_process();
  init_jquery();
  var s3 = (i10, t8) => {
    const e12 = i10._$AN;
    if (void 0 === e12) return false;
    for (const i11 of e12) i11._$AO?.(t8, false), s3(i11, t8);
    return true;
  };
  var o7 = (i10) => {
    let t8, e12;
    do {
      if (void 0 === (t8 = i10._$AM)) break;
      e12 = t8._$AN, e12.delete(i10), i10 = t8;
    } while (0 === e12?.size);
  };
  var r8 = (i10) => {
    for (let t8; t8 = i10._$AM; i10 = t8) {
      let e12 = t8._$AN;
      if (void 0 === e12) t8._$AN = e12 = /* @__PURE__ */ new Set();
      else if (e12.has(i10)) break;
      e12.add(i10), c5(t8);
    }
  };
  function h3(i10) {
    void 0 !== this._$AN ? (o7(this), this._$AM = i10, r8(this)) : this._$AM = i10;
  }
  function n6(i10, t8 = false, e12 = 0) {
    const r9 = this._$AH, h5 = this._$AN;
    if (void 0 !== h5 && 0 !== h5.size) if (t8) if (Array.isArray(r9)) for (let i11 = e12; i11 < r9.length; i11++) s3(r9[i11], false), o7(r9[i11]);
    else null != r9 && (s3(r9, false), o7(r9));
    else s3(this, i10);
  }
  var c5 = (i10) => {
    i10.type == t5.CHILD && (i10._$AP ?? (i10._$AP = n6), i10._$AQ ?? (i10._$AQ = h3));
  };
  var f4 = class extends i5 {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i10, t8, e12) {
      super._$AT(i10, t8, e12), r8(this), this.isConnected = i10._$AU;
    }
    _$AO(i10, t8 = true) {
      i10 !== this.isConnected && (this.isConnected = i10, i10 ? this.reconnected?.() : this.disconnected?.()), t8 && (s3(this, i10), o7(this));
    }
    setValue(t8) {
      if (f3(this._$Ct)) this._$Ct._$AI(t8, this);
      else {
        const i10 = [...this._$Ct._$AH];
        i10[this._$Ci] = t8, this._$Ct._$AI(i10, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  };

  // node_modules/lit-html/directives/ref.js
  var e10 = () => new h4();
  var h4 = class {
  };
  var o8 = /* @__PURE__ */ new WeakMap();
  var n7 = e7(class extends f4 {
    render(i10) {
      return E;
    }
    update(i10, [s5]) {
      const e12 = s5 !== this.Y;
      return e12 && void 0 !== this.Y && this.rt(void 0), (e12 || this.lt !== this.ct) && (this.Y = s5, this.ht = i10.options?.host, this.rt(this.ct = i10.element)), E;
    }
    rt(t8) {
      if (this.isConnected || (t8 = void 0), "function" == typeof this.Y) {
        const i10 = this.ht ?? globalThis;
        let s5 = o8.get(i10);
        void 0 === s5 && (s5 = /* @__PURE__ */ new WeakMap(), o8.set(i10, s5)), void 0 !== s5.get(this.Y) && this.Y.call(this.ht, void 0), s5.set(this.Y, t8), void 0 !== t8 && this.Y.call(this.ht, t8);
      } else this.Y.value = t8;
    }
    get lt() {
      return "function" == typeof this.Y ? o8.get(this.ht ?? globalThis)?.get(this.Y) : this.Y?.value;
    }
    disconnected() {
      this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
      this.rt(this.ct);
    }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZLIGP6HZ.js
  var SubmenuController = class {
    constructor(host, hasSlotController) {
      this.popupRef = e10();
      this.enableSubmenuTimer = -1;
      this.isConnected = false;
      this.isPopupConnected = false;
      this.skidding = 0;
      this.submenuOpenDelay = 100;
      this.handleMouseMove = (event) => {
        this.host.style.setProperty("--safe-triangle-cursor-x", `${event.clientX}px`);
        this.host.style.setProperty("--safe-triangle-cursor-y", `${event.clientY}px`);
      };
      this.handleMouseOver = () => {
        if (this.hasSlotController.test("submenu")) {
          this.enableSubmenu();
        }
      };
      this.handleKeyDown = (event) => {
        switch (event.key) {
          case "Escape":
          case "Tab":
            this.disableSubmenu();
            break;
          case "ArrowLeft":
            if (event.target !== this.host) {
              event.preventDefault();
              event.stopPropagation();
              this.host.focus();
              this.disableSubmenu();
            }
            break;
          case "ArrowRight":
          case "Enter":
          case " ":
            this.handleSubmenuEntry(event);
            break;
          default:
            break;
        }
      };
      this.handleClick = (event) => {
        var _a;
        if (event.target === this.host) {
          event.preventDefault();
          event.stopPropagation();
        } else if (event.target instanceof Element && (event.target.tagName === "sl-menu-item" || ((_a = event.target.role) == null ? void 0 : _a.startsWith("menuitem")))) {
          this.disableSubmenu();
        }
      };
      this.handleFocusOut = (event) => {
        if (event.relatedTarget && event.relatedTarget instanceof Element && this.host.contains(event.relatedTarget)) {
          return;
        }
        this.disableSubmenu();
      };
      this.handlePopupMouseover = (event) => {
        event.stopPropagation();
      };
      this.handlePopupReposition = () => {
        const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
        const menu = submenuSlot == null ? void 0 : submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "sl-menu")[0];
        const isRtl = getComputedStyle(this.host).direction === "rtl";
        if (!menu) {
          return;
        }
        const { left, top, width, height } = menu.getBoundingClientRect();
        this.host.style.setProperty("--safe-triangle-submenu-start-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-start-y", `${top}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-x", `${isRtl ? left + width : left}px`);
        this.host.style.setProperty("--safe-triangle-submenu-end-y", `${top + height}px`);
      };
      (this.host = host).addController(this);
      this.hasSlotController = hasSlotController;
    }
    hostConnected() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
      }
    }
    hostDisconnected() {
      this.removeListeners();
    }
    hostUpdated() {
      if (this.hasSlotController.test("submenu") && !this.host.disabled) {
        this.addListeners();
        this.updateSkidding();
      } else {
        this.removeListeners();
      }
    }
    addListeners() {
      if (!this.isConnected) {
        this.host.addEventListener("mousemove", this.handleMouseMove);
        this.host.addEventListener("mouseover", this.handleMouseOver);
        this.host.addEventListener("keydown", this.handleKeyDown);
        this.host.addEventListener("click", this.handleClick);
        this.host.addEventListener("focusout", this.handleFocusOut);
        this.isConnected = true;
      }
      if (!this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.addEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.addEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = true;
        }
      }
    }
    removeListeners() {
      if (this.isConnected) {
        this.host.removeEventListener("mousemove", this.handleMouseMove);
        this.host.removeEventListener("mouseover", this.handleMouseOver);
        this.host.removeEventListener("keydown", this.handleKeyDown);
        this.host.removeEventListener("click", this.handleClick);
        this.host.removeEventListener("focusout", this.handleFocusOut);
        this.isConnected = false;
      }
      if (this.isPopupConnected) {
        if (this.popupRef.value) {
          this.popupRef.value.removeEventListener("mouseover", this.handlePopupMouseover);
          this.popupRef.value.removeEventListener("sl-reposition", this.handlePopupReposition);
          this.isPopupConnected = false;
        }
      }
    }
    handleSubmenuEntry(event) {
      const submenuSlot = this.host.renderRoot.querySelector("slot[name='submenu']");
      if (!submenuSlot) {
        console.error("Cannot activate a submenu if no corresponding menuitem can be found.", this);
        return;
      }
      let menuItems = null;
      for (const elt of submenuSlot.assignedElements()) {
        menuItems = elt.querySelectorAll("sl-menu-item, [role^='menuitem']");
        if (menuItems.length !== 0) {
          break;
        }
      }
      if (!menuItems || menuItems.length === 0) {
        return;
      }
      menuItems[0].setAttribute("tabindex", "0");
      for (let i10 = 1; i10 !== menuItems.length; ++i10) {
        menuItems[i10].setAttribute("tabindex", "-1");
      }
      if (this.popupRef.value) {
        event.preventDefault();
        event.stopPropagation();
        if (this.popupRef.value.active) {
          if (menuItems[0] instanceof HTMLElement) {
            menuItems[0].focus();
          }
        } else {
          this.enableSubmenu(false);
          this.host.updateComplete.then(() => {
            if (menuItems[0] instanceof HTMLElement) {
              menuItems[0].focus();
            }
          });
          this.host.requestUpdate();
        }
      }
    }
    setSubmenuState(state) {
      if (this.popupRef.value) {
        if (this.popupRef.value.active !== state) {
          this.popupRef.value.active = state;
          this.host.requestUpdate();
        }
      }
    }
    // Shows the submenu. Supports disabling the opening delay, e.g. for keyboard events that want to set the focus to the
    // newly opened menu.
    enableSubmenu(delay = true) {
      if (delay) {
        window.clearTimeout(this.enableSubmenuTimer);
        this.enableSubmenuTimer = window.setTimeout(() => {
          this.setSubmenuState(true);
        }, this.submenuOpenDelay);
      } else {
        this.setSubmenuState(true);
      }
    }
    disableSubmenu() {
      window.clearTimeout(this.enableSubmenuTimer);
      this.setSubmenuState(false);
    }
    // Calculate the space the top of a menu takes-up, for aligning the popup menu-item with the activating element.
    updateSkidding() {
      var _a;
      if (!((_a = this.host.parentElement) == null ? void 0 : _a.computedStyleMap)) {
        return;
      }
      const styleMap = this.host.parentElement.computedStyleMap();
      const attrs = ["padding-top", "border-top-width", "margin-top"];
      const skidding = attrs.reduce((accumulator, attr) => {
        var _a2;
        const styleValue = (_a2 = styleMap.get(attr)) != null ? _a2 : new CSSUnitValue(0, "px");
        const unitValue = styleValue instanceof CSSUnitValue ? styleValue : new CSSUnitValue(0, "px");
        const pxValue = unitValue.to("px");
        return accumulator - pxValue.value;
      }, 0);
      this.skidding = skidding;
    }
    isExpanded() {
      return this.popupRef.value ? this.popupRef.value.active : false;
    }
    renderSubmenu() {
      const isRtl = getComputedStyle(this.host).direction === "rtl";
      if (!this.isConnected) {
        return x` <slot name="submenu" hidden></slot> `;
      }
      return x`
      <sl-popup
        ${n7(this.popupRef)}
        placement=${isRtl ? "left-start" : "right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `;
    }
  };

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.36O46B5H.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
  init_define_process();
  init_jquery();
  var spinner_styles_default = i`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.36O46B5H.js
  var SlSpinner = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
    }
    render() {
      return x`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
  };
  SlSpinner.styles = [component_styles_default, spinner_styles_default];

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WGYPSPL3.js
  var SlMenuItem = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.type = "normal";
      this.checked = false;
      this.value = "";
      this.loading = false;
      this.disabled = false;
      this.hasSlotController = new HasSlotController(this, "submenu");
      this.submenuController = new SubmenuController(this, this.hasSlotController);
      this.handleHostClick = (event) => {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleMouseOver = (event) => {
        this.focus();
        event.stopPropagation();
      };
    }
    connectedCallback() {
      super.connectedCallback();
      this.addEventListener("click", this.handleHostClick);
      this.addEventListener("mouseover", this.handleMouseOver);
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.removeEventListener("click", this.handleHostClick);
      this.removeEventListener("mouseover", this.handleMouseOver);
    }
    handleDefaultSlotChange() {
      const textLabel = this.getTextLabel();
      if (typeof this.cachedTextLabel === "undefined") {
        this.cachedTextLabel = textLabel;
        return;
      }
      if (textLabel !== this.cachedTextLabel) {
        this.cachedTextLabel = textLabel;
        this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
      }
    }
    handleCheckedChange() {
      if (this.checked && this.type !== "checkbox") {
        this.checked = false;
        console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
        return;
      }
      if (this.type === "checkbox") {
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.removeAttribute("aria-checked");
      }
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleTypeChange() {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
        this.setAttribute("aria-checked", this.checked ? "true" : "false");
      } else {
        this.setAttribute("role", "menuitem");
        this.removeAttribute("aria-checked");
      }
    }
    /** Returns a text label based on the contents of the menu item's default slot. */
    getTextLabel() {
      return getTextContent(this.defaultSlot);
    }
    isSubmenu() {
      return this.hasSlotController.test("submenu");
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      const isSubmenuExpanded = this.submenuController.isExpanded();
      return x`
      <div
        id="anchor"
        part="base"
        class=${e8({
        "menu-item": true,
        "menu-item--rtl": isRtl,
        "menu-item--checked": this.checked,
        "menu-item--disabled": this.disabled,
        "menu-item--loading": this.loading,
        "menu-item--has-submenu": this.isSubmenu(),
        "menu-item--submenu-expanded": isSubmenuExpanded
      })}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${isSubmenuExpanded ? true : false}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${isRtl ? "chevron-left" : "chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading ? x` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> ` : ""}
      </div>
    `;
    }
  };
  SlMenuItem.styles = [component_styles_default, menu_item_styles_default];
  SlMenuItem.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup,
    "sl-spinner": SlSpinner
  };
  __decorateClass([
    e5("slot:not([name])")
  ], SlMenuItem.prototype, "defaultSlot", 2);
  __decorateClass([
    e5(".menu-item")
  ], SlMenuItem.prototype, "menuItem", 2);
  __decorateClass([
    n4()
  ], SlMenuItem.prototype, "type", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "checked", 2);
  __decorateClass([
    n4()
  ], SlMenuItem.prototype, "value", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "loading", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlMenuItem.prototype, "disabled", 2);
  __decorateClass([
    watch("checked")
  ], SlMenuItem.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlMenuItem.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("type")
  ], SlMenuItem.prototype, "handleTypeChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HVTXQL7M.js
  SlMenuItem.define("sl-menu-item");

  // node_modules/@shoelace-style/shoelace/dist/components/option/option.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JXOKFADN.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BBCWSAUE.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FXXKMG2P.js
  init_define_process();
  init_jquery();
  var option_styles_default = i`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BBCWSAUE.js
  var SlOption = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.isInitialized = false;
      this.current = false;
      this.selected = false;
      this.hasHover = false;
      this.value = "";
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "option");
      this.setAttribute("aria-selected", "false");
    }
    handleDefaultSlotChange() {
      if (this.isInitialized) {
        customElements.whenDefined("sl-select").then(() => {
          const controller = this.closest("sl-select");
          if (controller) {
            controller.handleDefaultSlotChange();
          }
        });
      } else {
        this.isInitialized = true;
      }
    }
    handleMouseEnter() {
      this.hasHover = true;
    }
    handleMouseLeave() {
      this.hasHover = false;
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    handleSelectedChange() {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
    }
    handleValueChange() {
      if (typeof this.value !== "string") {
        this.value = String(this.value);
      }
      if (this.value.includes(" ")) {
        console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`, this);
        this.value = this.value.replace(/ /g, "_");
      }
    }
    /** Returns a plain text label based on the option's content. */
    getTextLabel() {
      const nodes = this.childNodes;
      let label = "";
      [...nodes].forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (!node.hasAttribute("slot")) {
            label += node.textContent;
          }
        }
        if (node.nodeType === Node.TEXT_NODE) {
          label += node.textContent;
        }
      });
      return label.trim();
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        option: true,
        "option--current": this.current,
        "option--disabled": this.disabled,
        "option--selected": this.selected,
        "option--hover": this.hasHover
      })}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `;
    }
  };
  SlOption.styles = [component_styles_default, option_styles_default];
  SlOption.dependencies = { "sl-icon": SlIcon };
  __decorateClass([
    e5(".option__label")
  ], SlOption.prototype, "defaultSlot", 2);
  __decorateClass([
    r6()
  ], SlOption.prototype, "current", 2);
  __decorateClass([
    r6()
  ], SlOption.prototype, "selected", 2);
  __decorateClass([
    r6()
  ], SlOption.prototype, "hasHover", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlOption.prototype, "value", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlOption.prototype, "disabled", 2);
  __decorateClass([
    watch("disabled")
  ], SlOption.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("selected")
  ], SlOption.prototype, "handleSelectedChange", 1);
  __decorateClass([
    watch("value")
  ], SlOption.prototype, "handleValueChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JXOKFADN.js
  SlOption.define("sl-option");

  // node_modules/@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7YWJMPY5.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LJLA5PKB.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XOSELTMG.js
  init_define_process();
  init_jquery();
  var progress_ring_styles_default = i`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LJLA5PKB.js
  var SlProgressRing = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.label = "";
    }
    updated(changedProps) {
      super.updated(changedProps);
      if (changedProps.has("value")) {
        const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
        const circumference = 2 * Math.PI * radius;
        const offset3 = circumference - this.value / 100 * circumference;
        this.indicatorOffset = `${offset3}px`;
      }
    }
    render() {
      return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
    }
  };
  SlProgressRing.styles = [component_styles_default, progress_ring_styles_default];
  __decorateClass([
    e5(".progress-ring__indicator")
  ], SlProgressRing.prototype, "indicator", 2);
  __decorateClass([
    r6()
  ], SlProgressRing.prototype, "indicatorOffset", 2);
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], SlProgressRing.prototype, "value", 2);
  __decorateClass([
    n4()
  ], SlProgressRing.prototype, "label", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7YWJMPY5.js
  SlProgressRing.define("sl-progress-ring");

  // node_modules/@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3XI76F3K.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AQHH2BKL.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GXC456DW.js
  init_define_process();
  init_jquery();
  var progress_bar_styles_default = i`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;

  // node_modules/lit/directives/style-map.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/style-map.js
  init_define_process();
  init_jquery();
  var n8 = "important";
  var i8 = " !" + n8;
  var o9 = e7(class extends i5 {
    constructor(t8) {
      if (super(t8), t8.type !== t5.ATTRIBUTE || "style" !== t8.name || t8.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t8) {
      return Object.keys(t8).reduce((e12, r9) => {
        const s5 = t8[r9];
        return null == s5 ? e12 : e12 + `${r9 = r9.includes("-") ? r9 : r9.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s5};`;
      }, "");
    }
    update(e12, [r9]) {
      const { style: s5 } = e12.element;
      if (void 0 === this.ft) return this.ft = new Set(Object.keys(r9)), this.render(r9);
      for (const t8 of this.ft) null == r9[t8] && (this.ft.delete(t8), t8.includes("-") ? s5.removeProperty(t8) : s5[t8] = null);
      for (const t8 in r9) {
        const e13 = r9[t8];
        if (null != e13) {
          this.ft.add(t8);
          const r10 = "string" == typeof e13 && e13.endsWith(i8);
          t8.includes("-") || r10 ? s5.setProperty(t8, r10 ? e13.slice(0, -11) : e13, r10 ? n8 : "") : s5[t8] = e13;
        }
      }
      return T;
    }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AQHH2BKL.js
  var SlProgressBar = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.value = 0;
      this.indeterminate = false;
      this.label = "";
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        "progress-bar": true,
        "progress-bar--indeterminate": this.indeterminate,
        "progress-bar--rtl": this.localize.dir() === "rtl"
      })}
        role="progressbar"
        title=${o6(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${o9({ width: `${this.value}%` })}>
          ${!this.indeterminate ? x` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
    }
  };
  SlProgressBar.styles = [component_styles_default, progress_bar_styles_default];
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], SlProgressBar.prototype, "value", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlProgressBar.prototype, "indeterminate", 2);
  __decorateClass([
    n4()
  ], SlProgressBar.prototype, "label", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3XI76F3K.js
  SlProgressBar.define("sl-progress-bar");

  // node_modules/@shoelace-style/shoelace/dist/components/radio-button/radio-button.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5P45LHIX.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G7RQ5NDY.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P5EQCYK.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAQXLKQ7.js
  init_define_process();
  init_jquery();
  var button_styles_default = i`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2P5EQCYK.js
  var radio_button_styles_default = i`
  ${button_styles_default}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G7RQ5NDY.js
  var SlRadioButton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
      this.hasFocus = false;
      this.checked = false;
      this.disabled = false;
      this.size = "medium";
      this.pill = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "presentation");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleClick(e12) {
      if (this.disabled) {
        e12.preventDefault();
        e12.stopPropagation();
        return;
      }
      this.checked = true;
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
    /** Sets focus on the radio button. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the radio button. */
    blur() {
      this.input.blur();
    }
    render() {
      return u4`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked ? " button--checked" : ""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${e8({
        button: true,
        "button--default": true,
        "button--small": this.size === "small",
        "button--medium": this.size === "medium",
        "button--large": this.size === "large",
        "button--checked": this.checked,
        "button--disabled": this.disabled,
        "button--focused": this.hasFocus,
        "button--outline": true,
        "button--pill": this.pill,
        "button--has-label": this.hasSlotController.test("[default]"),
        "button--has-prefix": this.hasSlotController.test("prefix"),
        "button--has-suffix": this.hasSlotController.test("suffix")
      })}
          aria-disabled=${this.disabled}
          type="button"
          value=${o6(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `;
    }
  };
  SlRadioButton.styles = [component_styles_default, radio_button_styles_default];
  __decorateClass([
    e5(".button")
  ], SlRadioButton.prototype, "input", 2);
  __decorateClass([
    e5(".hidden-input")
  ], SlRadioButton.prototype, "hiddenInput", 2);
  __decorateClass([
    r6()
  ], SlRadioButton.prototype, "hasFocus", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "checked", 2);
  __decorateClass([
    n4()
  ], SlRadioButton.prototype, "value", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "disabled", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlRadioButton.prototype, "size", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlRadioButton.prototype, "pill", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlRadioButton.prototype, "handleDisabledChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5P45LHIX.js
  SlRadioButton.define("sl-radio-button");

  // node_modules/@shoelace-style/shoelace/dist/components/radio-group/radio-group.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2PCBEMQZ.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZJNIZFRS.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B63YXDJO.js
  init_define_process();
  init_jquery();
  var radio_group_styles_default = i`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
  init_define_process();
  init_jquery();
  var form_control_styles_default = i`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A36OXQYR.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2OUC42YY.js
  init_define_process();
  init_jquery();
  var button_group_styles_default = i`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.A36OXQYR.js
  var SlButtonGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.disableRole = false;
      this.label = "";
    }
    handleFocus(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", true);
    }
    handleBlur(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--focus", false);
    }
    handleMouseOver(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", true);
    }
    handleMouseOut(event) {
      const button = findButton(event.target);
      button == null ? void 0 : button.toggleAttribute("data-sl-button-group__button--hover", false);
    }
    handleSlotChange() {
      const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
      slottedElements.forEach((el) => {
        const index = slottedElements.indexOf(el);
        const button = findButton(el);
        if (button) {
          button.toggleAttribute("data-sl-button-group__button", true);
          button.toggleAttribute("data-sl-button-group__button--first", index === 0);
          button.toggleAttribute("data-sl-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
          button.toggleAttribute("data-sl-button-group__button--last", index === slottedElements.length - 1);
          button.toggleAttribute(
            "data-sl-button-group__button--radio",
            button.tagName.toLowerCase() === "sl-radio-button"
          );
        }
      });
    }
    render() {
      return x`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
    }
  };
  SlButtonGroup.styles = [component_styles_default, button_group_styles_default];
  __decorateClass([
    e5("slot")
  ], SlButtonGroup.prototype, "defaultSlot", 2);
  __decorateClass([
    r6()
  ], SlButtonGroup.prototype, "disableRole", 2);
  __decorateClass([
    n4()
  ], SlButtonGroup.prototype, "label", 2);
  function findButton(el) {
    var _a;
    const selector = "sl-button, sl-radio-button";
    return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3RPBFEDE.js
  init_define_process();
  init_jquery();
  var formCollections = /* @__PURE__ */ new WeakMap();
  var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
  var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
  var userInteractedControls = /* @__PURE__ */ new WeakSet();
  var interactions = /* @__PURE__ */ new WeakMap();
  var FormControlController = class {
    constructor(host, options) {
      this.handleFormData = (event) => {
        const disabled = this.options.disabled(this.host);
        const name = this.options.name(this.host);
        const value = this.options.value(this.host);
        const isButton = this.host.tagName.toLowerCase() === "sl-button";
        if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
          if (Array.isArray(value)) {
            value.forEach((val) => {
              event.formData.append(name, val.toString());
            });
          } else {
            event.formData.append(name, value.toString());
          }
        }
      };
      this.handleFormSubmit = (event) => {
        var _a;
        const disabled = this.options.disabled(this.host);
        const reportValidity = this.options.reportValidity;
        if (this.form && !this.form.noValidate) {
          (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
            this.setUserInteracted(control, true);
          });
        }
        if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      };
      this.handleFormReset = () => {
        this.options.setValue(this.host, this.options.defaultValue(this.host));
        this.setUserInteracted(this.host, false);
        interactions.set(this.host, []);
      };
      this.handleInteraction = (event) => {
        const emittedEvents = interactions.get(this.host);
        if (!emittedEvents.includes(event.type)) {
          emittedEvents.push(event.type);
        }
        if (emittedEvents.length === this.options.assumeInteractionOn.length) {
          this.setUserInteracted(this.host, true);
        }
      };
      this.checkFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.checkValidity === "function") {
              if (!element.checkValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      this.reportFormValidity = () => {
        if (this.form && !this.form.noValidate) {
          const elements = this.form.querySelectorAll("*");
          for (const element of elements) {
            if (typeof element.reportValidity === "function") {
              if (!element.reportValidity()) {
                return false;
              }
            }
          }
        }
        return true;
      };
      (this.host = host).addController(this);
      this.options = __spreadValues({
        form: (input) => {
          const formId = input.form;
          if (formId) {
            const root = input.getRootNode();
            const form = root.querySelector(`#${formId}`);
            if (form) {
              return form;
            }
          }
          return input.closest("form");
        },
        name: (input) => input.name,
        value: (input) => input.value,
        defaultValue: (input) => input.defaultValue,
        disabled: (input) => {
          var _a;
          return (_a = input.disabled) != null ? _a : false;
        },
        reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
        checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
        setValue: (input, value) => input.value = value,
        assumeInteractionOn: ["sl-input"]
      }, options);
    }
    hostConnected() {
      const form = this.options.form(this.host);
      if (form) {
        this.attachForm(form);
      }
      interactions.set(this.host, []);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.addEventListener(event, this.handleInteraction);
      });
    }
    hostDisconnected() {
      this.detachForm();
      interactions.delete(this.host);
      this.options.assumeInteractionOn.forEach((event) => {
        this.host.removeEventListener(event, this.handleInteraction);
      });
    }
    hostUpdated() {
      const form = this.options.form(this.host);
      if (!form) {
        this.detachForm();
      }
      if (form && this.form !== form) {
        this.detachForm();
        this.attachForm(form);
      }
      if (this.host.hasUpdated) {
        this.setValidity(this.host.validity.valid);
      }
    }
    attachForm(form) {
      if (form) {
        this.form = form;
        if (formCollections.has(this.form)) {
          formCollections.get(this.form).add(this.host);
        } else {
          formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
        }
        this.form.addEventListener("formdata", this.handleFormData);
        this.form.addEventListener("submit", this.handleFormSubmit);
        this.form.addEventListener("reset", this.handleFormReset);
        if (!reportValidityOverloads.has(this.form)) {
          reportValidityOverloads.set(this.form, this.form.reportValidity);
          this.form.reportValidity = () => this.reportFormValidity();
        }
        if (!checkValidityOverloads.has(this.form)) {
          checkValidityOverloads.set(this.form, this.form.checkValidity);
          this.form.checkValidity = () => this.checkFormValidity();
        }
      } else {
        this.form = void 0;
      }
    }
    detachForm() {
      if (!this.form) return;
      const formCollection = formCollections.get(this.form);
      if (!formCollection) {
        return;
      }
      formCollection.delete(this.host);
      if (formCollection.size <= 0) {
        this.form.removeEventListener("formdata", this.handleFormData);
        this.form.removeEventListener("submit", this.handleFormSubmit);
        this.form.removeEventListener("reset", this.handleFormReset);
        if (reportValidityOverloads.has(this.form)) {
          this.form.reportValidity = reportValidityOverloads.get(this.form);
          reportValidityOverloads.delete(this.form);
        }
        if (checkValidityOverloads.has(this.form)) {
          this.form.checkValidity = checkValidityOverloads.get(this.form);
          checkValidityOverloads.delete(this.form);
        }
        this.form = void 0;
      }
    }
    setUserInteracted(el, hasInteracted) {
      if (hasInteracted) {
        userInteractedControls.add(el);
      } else {
        userInteractedControls.delete(el);
      }
      el.requestUpdate();
    }
    doAction(type, submitter) {
      if (this.form) {
        const button = document.createElement("button");
        button.type = type;
        button.style.position = "absolute";
        button.style.width = "0";
        button.style.height = "0";
        button.style.clipPath = "inset(50%)";
        button.style.overflow = "hidden";
        button.style.whiteSpace = "nowrap";
        if (submitter) {
          button.name = submitter.name;
          button.value = submitter.value;
          ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
            if (submitter.hasAttribute(attr)) {
              button.setAttribute(attr, submitter.getAttribute(attr));
            }
          });
        }
        this.form.append(button);
        button.click();
        button.remove();
      }
    }
    /** Returns the associated `<form>` element, if one exists. */
    getForm() {
      var _a;
      return (_a = this.form) != null ? _a : null;
    }
    /** Resets the form, restoring all the control to their default value */
    reset(submitter) {
      this.doAction("reset", submitter);
    }
    /** Submits the form, triggering validation and form data injection. */
    submit(submitter) {
      this.doAction("submit", submitter);
    }
    /**
     * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
     * the host element immediately, i.e. before Lit updates the component in the next update.
     */
    setValidity(isValid) {
      const host = this.host;
      const hasInteracted = Boolean(userInteractedControls.has(host));
      const required = Boolean(host.required);
      host.toggleAttribute("data-required", required);
      host.toggleAttribute("data-optional", !required);
      host.toggleAttribute("data-invalid", !isValid);
      host.toggleAttribute("data-valid", isValid);
      host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
      host.toggleAttribute("data-user-valid", isValid && hasInteracted);
    }
    /**
     * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
     * that affects constraint validation changes so the component receives the correct validity states.
     */
    updateValidity() {
      const host = this.host;
      this.setValidity(host.validity.valid);
    }
    /**
     * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
     * If the `sl-invalid` event will be cancelled then the original `invalid`
     * event (which may have been passed as argument) will also be cancelled.
     * If no original `invalid` event has been passed then the `sl-invalid`
     * event will be cancelled before being dispatched.
     */
    emitInvalidEvent(originalInvalidEvent) {
      const slInvalidEvent = new CustomEvent("sl-invalid", {
        bubbles: false,
        composed: false,
        cancelable: true,
        detail: {}
      });
      if (!originalInvalidEvent) {
        slInvalidEvent.preventDefault();
      }
      if (!this.host.dispatchEvent(slInvalidEvent)) {
        originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
      }
    }
  };
  var validValidityState = Object.freeze({
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: true,
    valueMissing: false
  });
  var valueMissingValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    valueMissing: true
  }));
  var customErrorValidityState = Object.freeze(__spreadProps(__spreadValues({}, validValidityState), {
    valid: false,
    customError: true
  }));

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZJNIZFRS.js
  var SlRadioGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this);
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.customValidityMessage = "";
      this.hasButtonGroup = false;
      this.errorMessage = "";
      this.defaultValue = "";
      this.label = "";
      this.helpText = "";
      this.name = "option";
      this.value = "";
      this.size = "medium";
      this.form = "";
      this.required = false;
    }
    /** Gets the validity state object */
    get validity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return customErrorValidityState;
      } else if (isRequiredAndEmpty) {
        return valueMissingValidityState;
      }
      return validValidityState;
    }
    /** Gets the validation message */
    get validationMessage() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (hasCustomValidityMessage) {
        return this.customValidityMessage;
      } else if (isRequiredAndEmpty) {
        return this.validationInput.validationMessage;
      }
      return "";
    }
    connectedCallback() {
      super.connectedCallback();
      this.defaultValue = this.value;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    getAllRadios() {
      return [...this.querySelectorAll("sl-radio, sl-radio-button")];
    }
    handleRadioClick(event) {
      const target = event.target.closest("sl-radio, sl-radio-button");
      const radios = this.getAllRadios();
      const oldValue = this.value;
      if (!target || target.disabled) {
        return;
      }
      this.value = target.value;
      radios.forEach((radio) => radio.checked = radio === target);
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleKeyDown(event) {
      var _a;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
        return;
      }
      const radios = this.getAllRadios().filter((radio) => !radio.disabled);
      const checkedRadio = (_a = radios.find((radio) => radio.checked)) != null ? _a : radios[0];
      const incr = event.key === " " ? 0 : ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
      const oldValue = this.value;
      let index = radios.indexOf(checkedRadio) + incr;
      if (index < 0) {
        index = radios.length - 1;
      }
      if (index > radios.length - 1) {
        index = 0;
      }
      this.getAllRadios().forEach((radio) => {
        radio.checked = false;
        if (!this.hasButtonGroup) {
          radio.setAttribute("tabindex", "-1");
        }
      });
      this.value = radios[index].value;
      radios[index].checked = true;
      if (!this.hasButtonGroup) {
        radios[index].setAttribute("tabindex", "0");
        radios[index].focus();
      } else {
        radios[index].shadowRoot.querySelector("button").focus();
      }
      if (this.value !== oldValue) {
        this.emit("sl-change");
        this.emit("sl-input");
      }
      event.preventDefault();
    }
    handleLabelClick() {
      this.focus();
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    async syncRadioElements() {
      var _a, _b;
      const radios = this.getAllRadios();
      await Promise.all(
        // Sync the checked state and size
        radios.map(async (radio) => {
          await radio.updateComplete;
          radio.checked = radio.value === this.value;
          radio.size = this.size;
        })
      );
      this.hasButtonGroup = radios.some((radio) => radio.tagName.toLowerCase() === "sl-radio-button");
      if (radios.length > 0 && !radios.some((radio) => radio.checked)) {
        if (this.hasButtonGroup) {
          const buttonRadio = (_a = radios[0].shadowRoot) == null ? void 0 : _a.querySelector("button");
          if (buttonRadio) {
            buttonRadio.setAttribute("tabindex", "0");
          }
        } else {
          radios[0].setAttribute("tabindex", "0");
        }
      }
      if (this.hasButtonGroup) {
        const buttonGroup = (_b = this.shadowRoot) == null ? void 0 : _b.querySelector("sl-button-group");
        if (buttonGroup) {
          buttonGroup.disableRole = true;
        }
      }
    }
    syncRadios() {
      if (customElements.get("sl-radio") && customElements.get("sl-radio-button")) {
        this.syncRadioElements();
        return;
      }
      if (customElements.get("sl-radio")) {
        this.syncRadioElements();
      } else {
        customElements.whenDefined("sl-radio").then(() => this.syncRadios());
      }
      if (customElements.get("sl-radio-button")) {
        this.syncRadioElements();
      } else {
        customElements.whenDefined("sl-radio-button").then(() => this.syncRadios());
      }
    }
    updateCheckedRadio() {
      const radios = this.getAllRadios();
      radios.forEach((radio) => radio.checked = radio.value === this.value);
      this.formControlController.setValidity(this.validity.valid);
    }
    handleSizeChange() {
      this.syncRadios();
    }
    handleValueChange() {
      if (this.hasUpdated) {
        this.updateCheckedRadio();
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      const isRequiredAndEmpty = this.required && !this.value;
      const hasCustomValidityMessage = this.customValidityMessage !== "";
      if (isRequiredAndEmpty || hasCustomValidityMessage) {
        this.formControlController.emitInvalidEvent();
        return false;
      }
      return true;
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      const isValid = this.validity.valid;
      this.errorMessage = this.customValidityMessage || isValid ? "" : this.validationInput.validationMessage;
      this.formControlController.setValidity(isValid);
      this.validationInput.hidden = true;
      clearTimeout(this.validationTimeout);
      if (!isValid) {
        this.validationInput.hidden = false;
        this.validationInput.reportValidity();
        this.validationTimeout = setTimeout(() => this.validationInput.hidden = true, 1e4);
      }
      return isValid;
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message = "") {
      this.customValidityMessage = message;
      this.errorMessage = message;
      this.validationInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    /** Sets focus on the radio-group. */
    focus(options) {
      const radios = this.getAllRadios();
      const checked = radios.find((radio) => radio.checked);
      const firstEnabledRadio = radios.find((radio) => !radio.disabled);
      const radioToFocus = checked || firstEnabledRadio;
      if (radioToFocus) {
        radioToFocus.focus(options);
      }
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const defaultSlot = x`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;
      return x`
      <fieldset
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--radio-group": true,
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup ? x`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${defaultSlot}
                </sl-button-group>
              ` : defaultSlot}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `;
    }
  };
  SlRadioGroup.styles = [component_styles_default, form_control_styles_default, radio_group_styles_default];
  SlRadioGroup.dependencies = { "sl-button-group": SlButtonGroup };
  __decorateClass([
    e5("slot:not([name])")
  ], SlRadioGroup.prototype, "defaultSlot", 2);
  __decorateClass([
    e5(".radio-group__validation-input")
  ], SlRadioGroup.prototype, "validationInput", 2);
  __decorateClass([
    r6()
  ], SlRadioGroup.prototype, "hasButtonGroup", 2);
  __decorateClass([
    r6()
  ], SlRadioGroup.prototype, "errorMessage", 2);
  __decorateClass([
    r6()
  ], SlRadioGroup.prototype, "defaultValue", 2);
  __decorateClass([
    n4()
  ], SlRadioGroup.prototype, "label", 2);
  __decorateClass([
    n4({ attribute: "help-text" })
  ], SlRadioGroup.prototype, "helpText", 2);
  __decorateClass([
    n4()
  ], SlRadioGroup.prototype, "name", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "value", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "size", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlRadioGroup.prototype, "form", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlRadioGroup.prototype, "required", 2);
  __decorateClass([
    watch("size", { waitUntilFirstUpdate: true })
  ], SlRadioGroup.prototype, "handleSizeChange", 1);
  __decorateClass([
    watch("value")
  ], SlRadioGroup.prototype, "handleValueChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2PCBEMQZ.js
  SlRadioGroup.define("sl-radio-group");

  // node_modules/@shoelace-style/shoelace/dist/components/relative-time/relative-time.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KJ4ONHX7.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NS46NXFJ.js
  init_define_process();
  init_jquery();
  var availableUnits = [
    { max: 276e4, value: 6e4, unit: "minute" },
    // max 46 minutes
    { max: 72e6, value: 36e5, unit: "hour" },
    // max 20 hours
    { max: 5184e5, value: 864e5, unit: "day" },
    // max 6 days
    { max: 24192e5, value: 6048e5, unit: "week" },
    // max 28 days
    { max: 28512e6, value: 2592e6, unit: "month" },
    // max 11 months
    { max: Infinity, value: 31536e6, unit: "year" }
  ];
  var SlRelativeTime = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.isoTime = "";
      this.relativeTime = "";
      this.date = /* @__PURE__ */ new Date();
      this.format = "long";
      this.numeric = "auto";
      this.sync = false;
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      clearTimeout(this.updateTimeout);
    }
    render() {
      const now = /* @__PURE__ */ new Date();
      const then = new Date(this.date);
      if (isNaN(then.getMilliseconds())) {
        this.relativeTime = "";
        this.isoTime = "";
        return "";
      }
      const diff = then.getTime() - now.getTime();
      const { unit, value } = availableUnits.find((singleUnit) => Math.abs(diff) < singleUnit.max);
      this.isoTime = then.toISOString();
      this.relativeTime = this.localize.relativeTime(Math.round(diff / value), unit, {
        numeric: this.numeric,
        style: this.format
      });
      clearTimeout(this.updateTimeout);
      if (this.sync) {
        let nextInterval;
        if (unit === "minute") {
          nextInterval = getTimeUntilNextUnit("second");
        } else if (unit === "hour") {
          nextInterval = getTimeUntilNextUnit("minute");
        } else if (unit === "day") {
          nextInterval = getTimeUntilNextUnit("hour");
        } else {
          nextInterval = getTimeUntilNextUnit("day");
        }
        this.updateTimeout = window.setTimeout(() => this.requestUpdate(), nextInterval);
      }
      return x` <time datetime=${this.isoTime}>${this.relativeTime}</time> `;
    }
  };
  __decorateClass([
    r6()
  ], SlRelativeTime.prototype, "isoTime", 2);
  __decorateClass([
    r6()
  ], SlRelativeTime.prototype, "relativeTime", 2);
  __decorateClass([
    n4()
  ], SlRelativeTime.prototype, "date", 2);
  __decorateClass([
    n4()
  ], SlRelativeTime.prototype, "format", 2);
  __decorateClass([
    n4()
  ], SlRelativeTime.prototype, "numeric", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlRelativeTime.prototype, "sync", 2);
  function getTimeUntilNextUnit(unit) {
    const units = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 };
    const value = units[unit];
    return value - Date.now() % value;
  }

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KJ4ONHX7.js
  SlRelativeTime.define("sl-relative-time");

  // node_modules/@shoelace-style/shoelace/dist/components/select/select.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TP2GB2HO.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AILU2HNL.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6R4LM7O6.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.V2OL7VMD.js
  init_define_process();
  init_jquery();
  var tag_styles_default = i`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6R4LM7O6.js
  var SlTag = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.variant = "neutral";
      this.size = "medium";
      this.pill = false;
      this.removable = false;
    }
    handleRemoveClick() {
      this.emit("sl-remove");
    }
    render() {
      return x`
      <span
        part="base"
        class=${e8({
        tag: true,
        // Types
        "tag--primary": this.variant === "primary",
        "tag--success": this.variant === "success",
        "tag--neutral": this.variant === "neutral",
        "tag--warning": this.variant === "warning",
        "tag--danger": this.variant === "danger",
        "tag--text": this.variant === "text",
        // Sizes
        "tag--small": this.size === "small",
        "tag--medium": this.size === "medium",
        "tag--large": this.size === "large",
        // Modifiers
        "tag--pill": this.pill,
        "tag--removable": this.removable
      })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? x`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
    }
  };
  SlTag.styles = [component_styles_default, tag_styles_default];
  SlTag.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    n4({ reflect: true })
  ], SlTag.prototype, "variant", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlTag.prototype, "size", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTag.prototype, "pill", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlTag.prototype, "removable", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XNOUITPX.js
  init_define_process();
  init_jquery();
  var select_styles_default = i`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;

  // node_modules/lit/directives/unsafe-html.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/unsafe-html.js
  init_define_process();
  init_jquery();
  var e11 = class extends i5 {
    constructor(i10) {
      if (super(i10), this.it = E, i10.type !== t5.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r9) {
      if (r9 === E || null == r9) return this._t = void 0, this.it = r9;
      if (r9 === T) return r9;
      if ("string" != typeof r9) throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (r9 === this.it) return this._t;
      this.it = r9;
      const s5 = [r9];
      return s5.raw = s5, this._t = { _$litType$: this.constructor.resultType, strings: s5, values: [] };
    }
  };
  e11.directiveName = "unsafeHTML", e11.resultType = 1;
  var o10 = e7(e11);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AILU2HNL.js
  var SlSelect = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.localize = new LocalizeController2(this);
      this.typeToSelectString = "";
      this.hasFocus = false;
      this.displayLabel = "";
      this.selectedOptions = [];
      this.valueHasChanged = false;
      this.name = "";
      this._value = "";
      this.defaultValue = "";
      this.size = "medium";
      this.placeholder = "";
      this.multiple = false;
      this.maxOptionsVisible = 3;
      this.disabled = false;
      this.clearable = false;
      this.open = false;
      this.hoist = false;
      this.filled = false;
      this.pill = false;
      this.label = "";
      this.placement = "bottom";
      this.helpText = "";
      this.form = "";
      this.required = false;
      this.getTag = (option) => {
        return x`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `;
      };
      this.handleDocumentFocusIn = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        const target = event.target;
        const isClearButton = target.closest(".select__clear") !== null;
        const isIconButton = target.closest("sl-icon-button") !== null;
        if (isClearButton || isIconButton) {
          return;
        }
        if (event.key === "Escape" && this.open && !this.closeWatcher) {
          event.preventDefault();
          event.stopPropagation();
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
        if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
          event.preventDefault();
          event.stopImmediatePropagation();
          if (!this.open) {
            this.show();
            return;
          }
          if (this.currentOption && !this.currentOption.disabled) {
            this.valueHasChanged = true;
            if (this.multiple) {
              this.toggleOptionSelection(this.currentOption);
            } else {
              this.setSelectedOptions(this.currentOption);
            }
            this.updateComplete.then(() => {
              this.emit("sl-input");
              this.emit("sl-change");
            });
            if (!this.multiple) {
              this.hide();
              this.displayInput.focus({ preventScroll: true });
            }
          }
          return;
        }
        if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
          const allOptions = this.getAllOptions();
          const currentIndex = allOptions.indexOf(this.currentOption);
          let newIndex = Math.max(0, currentIndex);
          event.preventDefault();
          if (!this.open) {
            this.show();
            if (this.currentOption) {
              return;
            }
          }
          if (event.key === "ArrowDown") {
            newIndex = currentIndex + 1;
            if (newIndex > allOptions.length - 1) newIndex = 0;
          } else if (event.key === "ArrowUp") {
            newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = allOptions.length - 1;
          } else if (event.key === "Home") {
            newIndex = 0;
          } else if (event.key === "End") {
            newIndex = allOptions.length - 1;
          }
          this.setCurrentOption(allOptions[newIndex]);
        }
        if (event.key && event.key.length === 1 || event.key === "Backspace") {
          const allOptions = this.getAllOptions();
          if (event.metaKey || event.ctrlKey || event.altKey) {
            return;
          }
          if (!this.open) {
            if (event.key === "Backspace") {
              return;
            }
            this.show();
          }
          event.stopPropagation();
          event.preventDefault();
          clearTimeout(this.typeToSelectTimeout);
          this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
          if (event.key === "Backspace") {
            this.typeToSelectString = this.typeToSelectString.slice(0, -1);
          } else {
            this.typeToSelectString += event.key.toLowerCase();
          }
          for (const option of allOptions) {
            const label = option.getTextLabel().toLowerCase();
            if (label.startsWith(this.typeToSelectString)) {
              this.setCurrentOption(option);
              break;
            }
          }
        }
      };
      this.handleDocumentMouseDown = (event) => {
        const path = event.composedPath();
        if (this && !path.includes(this)) {
          this.hide();
        }
      };
    }
    get value() {
      return this._value;
    }
    set value(val) {
      if (this.multiple) {
        val = Array.isArray(val) ? val : val.split(" ");
      } else {
        val = Array.isArray(val) ? val.join(" ") : val;
      }
      if (this._value === val) {
        return;
      }
      this.valueHasChanged = true;
      this._value = val;
    }
    /** Gets the validity state object */
    get validity() {
      return this.valueInput.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.valueInput.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      setTimeout(() => {
        this.handleDefaultSlotChange();
      });
      this.open = false;
    }
    addOpenListeners() {
      var _a;
      document.addEventListener("focusin", this.handleDocumentFocusIn);
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
      }
      if ("CloseWatcher" in window) {
        (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => {
          if (this.open) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        };
      }
    }
    removeOpenListeners() {
      var _a;
      document.removeEventListener("focusin", this.handleDocumentFocusIn);
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      document.removeEventListener("mousedown", this.handleDocumentMouseDown);
      if (this.getRootNode() !== document) {
        this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
      }
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    }
    handleFocus() {
      this.hasFocus = true;
      this.displayInput.setSelectionRange(0, 0);
      this.emit("sl-focus");
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleLabelClick() {
      this.displayInput.focus();
    }
    handleComboboxMouseDown(event) {
      const path = event.composedPath();
      const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
      if (this.disabled || isIconButton) {
        return;
      }
      event.preventDefault();
      this.displayInput.focus({ preventScroll: true });
      this.open = !this.open;
    }
    handleComboboxKeyDown(event) {
      if (event.key === "Tab") {
        return;
      }
      event.stopPropagation();
      this.handleDocumentKeyDown(event);
    }
    handleClearClick(event) {
      event.stopPropagation();
      this.valueHasChanged = true;
      if (this.value !== "") {
        this.setSelectedOptions([]);
        this.displayInput.focus({ preventScroll: true });
        this.updateComplete.then(() => {
          this.emit("sl-clear");
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    handleClearMouseDown(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    handleOptionClick(event) {
      const target = event.target;
      const option = target.closest("sl-option");
      const oldValue = this.value;
      if (option && !option.disabled) {
        this.valueHasChanged = true;
        if (this.multiple) {
          this.toggleOptionSelection(option);
        } else {
          this.setSelectedOptions(option);
        }
        this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
        if (this.value !== oldValue) {
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
        }
        if (!this.multiple) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      }
    }
    /* @internal - used by options to update labels */
    handleDefaultSlotChange() {
      if (!customElements.get("sl-option")) {
        customElements.whenDefined("sl-option").then(() => this.handleDefaultSlotChange());
      }
      const allOptions = this.getAllOptions();
      const val = this.valueHasChanged ? this.value : this.defaultValue;
      const value = Array.isArray(val) ? val : [val];
      const values = [];
      allOptions.forEach((option) => values.push(option.value));
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    }
    handleTagRemove(event, option) {
      event.stopPropagation();
      this.valueHasChanged = true;
      if (!this.disabled) {
        this.toggleOptionSelection(option, false);
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
    }
    // Gets an array of all <sl-option> elements
    getAllOptions() {
      return [...this.querySelectorAll("sl-option")];
    }
    // Gets the first <sl-option> element
    getFirstOption() {
      return this.querySelector("sl-option");
    }
    // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
    // option may be "current" at a time.
    setCurrentOption(option) {
      const allOptions = this.getAllOptions();
      allOptions.forEach((el) => {
        el.current = false;
        el.tabIndex = -1;
      });
      if (option) {
        this.currentOption = option;
        option.current = true;
        option.tabIndex = 0;
        option.focus();
      }
    }
    // Sets the selected option(s)
    setSelectedOptions(option) {
      const allOptions = this.getAllOptions();
      const newSelectedOptions = Array.isArray(option) ? option : [option];
      allOptions.forEach((el) => el.selected = false);
      if (newSelectedOptions.length) {
        newSelectedOptions.forEach((el) => el.selected = true);
      }
      this.selectionChanged();
    }
    // Toggles an option's selected state
    toggleOptionSelection(option, force) {
      if (force === true || force === false) {
        option.selected = force;
      } else {
        option.selected = !option.selected;
      }
      this.selectionChanged();
    }
    // This method must be called whenever the selection changes. It will update the selected options cache, the current
    // value, and the display value
    selectionChanged() {
      var _a, _b, _c;
      const options = this.getAllOptions();
      this.selectedOptions = options.filter((el) => el.selected);
      const cachedValueHasChanged = this.valueHasChanged;
      if (this.multiple) {
        this.value = this.selectedOptions.map((el) => el.value);
        if (this.placeholder && this.value.length === 0) {
          this.displayLabel = "";
        } else {
          this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
        }
      } else {
        const selectedOption = this.selectedOptions[0];
        this.value = (_a = selectedOption == null ? void 0 : selectedOption.value) != null ? _a : "";
        this.displayLabel = (_c = (_b = selectedOption == null ? void 0 : selectedOption.getTextLabel) == null ? void 0 : _b.call(selectedOption)) != null ? _c : "";
      }
      this.valueHasChanged = cachedValueHasChanged;
      this.updateComplete.then(() => {
        this.formControlController.updateValidity();
      });
    }
    get tags() {
      return this.selectedOptions.map((option, index) => {
        if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
          const tag = this.getTag(option, index);
          return x`<div @sl-remove=${(e12) => this.handleTagRemove(e12, option)}>
          ${typeof tag === "string" ? o10(tag) : tag}
        </div>`;
        } else if (index === this.maxOptionsVisible) {
          return x`<sl-tag size=${this.size}>+${this.selectedOptions.length - index}</sl-tag>`;
        }
        return x``;
      });
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.open = false;
        this.handleOpenChange();
      }
    }
    attributeChangedCallback(name, oldVal, newVal) {
      super.attributeChangedCallback(name, oldVal, newVal);
      if (name === "value") {
        const cachedValueHasChanged = this.valueHasChanged;
        this.value = this.defaultValue;
        this.valueHasChanged = cachedValueHasChanged;
      }
    }
    handleValueChange() {
      if (!this.valueHasChanged) {
        const cachedValueHasChanged = this.valueHasChanged;
        this.value = this.defaultValue;
        this.valueHasChanged = cachedValueHasChanged;
      }
      const allOptions = this.getAllOptions();
      const value = Array.isArray(this.value) ? this.value : [this.value];
      this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
    }
    async handleOpenChange() {
      if (this.open && !this.disabled) {
        this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
        this.emit("sl-show");
        this.addOpenListeners();
        await stopAnimations(this);
        this.listbox.hidden = false;
        this.popup.active = true;
        requestAnimationFrame(() => {
          this.setCurrentOption(this.currentOption);
        });
        const { keyframes, options } = getAnimation(this, "select.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        if (this.currentOption) {
          scrollIntoView(this.currentOption, this.listbox, "vertical", "auto");
        }
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        this.removeOpenListeners();
        await stopAnimations(this);
        const { keyframes, options } = getAnimation(this, "select.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.listbox.hidden = true;
        this.popup.active = false;
        this.emit("sl-after-hide");
      }
    }
    /** Shows the listbox. */
    async show() {
      if (this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the listbox. */
    async hide() {
      if (!this.open || this.disabled) {
        this.open = false;
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.valueInput.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.valueInput.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.valueInput.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    /** Sets focus on the control. */
    focus(options) {
      this.displayInput.focus(options);
    }
    /** Removes focus from the control. */
    blur() {
      this.displayInput.blur();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
      const isPlaceholderVisible = this.placeholder && this.value && this.value.length <= 0;
      return x`
      <div
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${e8({
        select: true,
        "select--standard": true,
        "select--filled": this.filled,
        "select--pill": this.pill,
        "select--open": this.open,
        "select--disabled": this.disabled,
        "select--multiple": this.multiple,
        "select--focused": this.hasFocus,
        "select--placeholder-visible": isPlaceholderVisible,
        "select--top": this.placement === "top",
        "select--bottom": this.placement === "bottom",
        "select--small": this.size === "small",
        "select--medium": this.size === "medium",
        "select--large": this.size === "large"
      })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? x`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? x`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlSelect.styles = [component_styles_default, form_control_styles_default, select_styles_default];
  SlSelect.dependencies = {
    "sl-icon": SlIcon,
    "sl-popup": SlPopup,
    "sl-tag": SlTag
  };
  __decorateClass([
    e5(".select")
  ], SlSelect.prototype, "popup", 2);
  __decorateClass([
    e5(".select__combobox")
  ], SlSelect.prototype, "combobox", 2);
  __decorateClass([
    e5(".select__display-input")
  ], SlSelect.prototype, "displayInput", 2);
  __decorateClass([
    e5(".select__value-input")
  ], SlSelect.prototype, "valueInput", 2);
  __decorateClass([
    e5(".select__listbox")
  ], SlSelect.prototype, "listbox", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "hasFocus", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "displayLabel", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "currentOption", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "selectedOptions", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "valueHasChanged", 2);
  __decorateClass([
    n4()
  ], SlSelect.prototype, "name", 2);
  __decorateClass([
    r6()
  ], SlSelect.prototype, "value", 1);
  __decorateClass([
    n4({ attribute: "value" })
  ], SlSelect.prototype, "defaultValue", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlSelect.prototype, "size", 2);
  __decorateClass([
    n4()
  ], SlSelect.prototype, "placeholder", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "multiple", 2);
  __decorateClass([
    n4({ attribute: "max-options-visible", type: Number })
  ], SlSelect.prototype, "maxOptionsVisible", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlSelect.prototype, "clearable", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "open", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlSelect.prototype, "hoist", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "filled", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "pill", 2);
  __decorateClass([
    n4()
  ], SlSelect.prototype, "label", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlSelect.prototype, "placement", 2);
  __decorateClass([
    n4({ attribute: "help-text" })
  ], SlSelect.prototype, "helpText", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlSelect.prototype, "form", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSelect.prototype, "required", 2);
  __decorateClass([
    n4()
  ], SlSelect.prototype, "getTag", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch(["defaultValue", "value"], { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleValueChange", 1);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlSelect.prototype, "handleOpenChange", 1);
  setDefaultAnimation("select.show", {
    keyframes: [
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 100, easing: "ease" }
  });
  setDefaultAnimation("select.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.9 }
    ],
    options: { duration: 100, easing: "ease" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TP2GB2HO.js
  SlSelect.define("sl-select");

  // node_modules/@shoelace-style/shoelace/dist/components/skeleton/skeleton.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XQ2OKYYA.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4NP2SRV.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HTQNKB5E.js
  init_define_process();
  init_jquery();
  var skeleton_styles_default = i`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4NP2SRV.js
  var SlSkeleton = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.effect = "none";
    }
    render() {
      return x`
      <div
        part="base"
        class=${e8({
        skeleton: true,
        "skeleton--pulse": this.effect === "pulse",
        "skeleton--sheen": this.effect === "sheen"
      })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
    }
  };
  SlSkeleton.styles = [component_styles_default, skeleton_styles_default];
  __decorateClass([
    n4()
  ], SlSkeleton.prototype, "effect", 2);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XQ2OKYYA.js
  SlSkeleton.define("sl-skeleton");

  // node_modules/@shoelace-style/shoelace/dist/components/spinner/spinner.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EA437WHD.js
  init_define_process();
  init_jquery();
  SlSpinner.define("sl-spinner");

  // node_modules/@shoelace-style/shoelace/dist/components/switch/switch.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IADS735N.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TSAI7XEG.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EU44RQUN.js
  init_define_process();
  init_jquery();
  var switch_styles_default = i`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
  init_define_process();
  init_jquery();
  var defaultValue = (propertyName = "value") => (proto, key) => {
    const ctor = proto.constructor;
    const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
    ctor.prototype.attributeChangedCallback = function(name, old, value) {
      var _a;
      const options = ctor.getPropertyOptions(propertyName);
      const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
      if (name === attributeName) {
        const converter = options.converter || u;
        const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : u.fromAttribute;
        const newValue = fromAttribute(value, options.type);
        if (this[propertyName] !== newValue) {
          this[key] = newValue;
        }
      }
      attributeChangedCallback.call(this, name, old, value);
    };
  };

  // node_modules/lit/directives/live.js
  init_define_process();
  init_jquery();

  // node_modules/lit-html/directives/live.js
  init_define_process();
  init_jquery();
  var l4 = e7(class extends i5 {
    constructor(r9) {
      if (super(r9), r9.type !== t5.PROPERTY && r9.type !== t5.ATTRIBUTE && r9.type !== t5.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
      if (!f3(r9)) throw Error("`live` bindings can only contain a single expression");
    }
    render(r9) {
      return r9;
    }
    update(i10, [t8]) {
      if (t8 === T || t8 === E) return t8;
      const o11 = i10.element, l5 = i10.name;
      if (i10.type === t5.PROPERTY) {
        if (t8 === o11[l5]) return T;
      } else if (i10.type === t5.BOOLEAN_ATTRIBUTE) {
        if (!!t8 === o11.hasAttribute(l5)) return T;
      } else if (i10.type === t5.ATTRIBUTE && o11.getAttribute(l5) === t8 + "") return T;
      return m2(i10), t8;
    }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TSAI7XEG.js
  var SlSwitch = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        value: (control) => control.checked ? control.value || "on" : void 0,
        defaultValue: (control) => control.defaultChecked,
        setValue: (control, checked) => control.checked = checked
      });
      this.hasSlotController = new HasSlotController(this, "help-text");
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.size = "medium";
      this.disabled = false;
      this.checked = false;
      this.defaultChecked = false;
      this.form = "";
      this.required = false;
      this.helpText = "";
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleInput() {
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    handleClick() {
      this.checked = !this.checked;
      this.emit("sl-change");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleKeyDown(event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        this.checked = false;
        this.emit("sl-change");
        this.emit("sl-input");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        this.checked = true;
        this.emit("sl-change");
        this.emit("sl-input");
      }
    }
    handleCheckedChange() {
      this.input.checked = this.checked;
      this.formControlController.updateValidity();
    }
    handleDisabledChange() {
      this.formControlController.setValidity(true);
    }
    /** Simulates a click on the switch. */
    click() {
      this.input.click();
    }
    /** Sets focus on the switch. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the switch. */
    blur() {
      this.input.blur();
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return x`
      <div
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="base"
          class=${e8({
        switch: true,
        "switch--checked": this.checked,
        "switch--disabled": this.disabled,
        "switch--focused": this.hasFocus,
        "switch--small": this.size === "small",
        "switch--medium": this.size === "medium",
        "switch--large": this.size === "large"
      })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${o6(this.value)}
            .checked=${l4(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlSwitch.styles = [component_styles_default, form_control_styles_default, switch_styles_default];
  __decorateClass([
    e5('input[type="checkbox"]')
  ], SlSwitch.prototype, "input", 2);
  __decorateClass([
    r6()
  ], SlSwitch.prototype, "hasFocus", 2);
  __decorateClass([
    n4()
  ], SlSwitch.prototype, "title", 2);
  __decorateClass([
    n4()
  ], SlSwitch.prototype, "name", 2);
  __decorateClass([
    n4()
  ], SlSwitch.prototype, "value", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlSwitch.prototype, "size", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "checked", 2);
  __decorateClass([
    defaultValue("checked")
  ], SlSwitch.prototype, "defaultChecked", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlSwitch.prototype, "form", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlSwitch.prototype, "required", 2);
  __decorateClass([
    n4({ attribute: "help-text" })
  ], SlSwitch.prototype, "helpText", 2);
  __decorateClass([
    watch("checked", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleCheckedChange", 1);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlSwitch.prototype, "handleDisabledChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IADS735N.js
  SlSwitch.define("sl-switch");

  // node_modules/@shoelace-style/shoelace/dist/components/tab/tab.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DFHYNK3F.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKCGBUWI.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CNMNUZLG.js
  init_define_process();
  init_jquery();
  var tab_styles_default = i`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKCGBUWI.js
  var id = 0;
  var SlTab = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.localize = new LocalizeController2(this);
      this.attrId = ++id;
      this.componentId = `sl-tab-${this.attrId}`;
      this.panel = "";
      this.active = false;
      this.closable = false;
      this.disabled = false;
      this.tabIndex = 0;
    }
    connectedCallback() {
      super.connectedCallback();
      this.setAttribute("role", "tab");
    }
    handleCloseClick(event) {
      event.stopPropagation();
      this.emit("sl-close");
    }
    handleActiveChange() {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
    }
    handleDisabledChange() {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      if (this.disabled && !this.active) {
        this.tabIndex = -1;
      } else {
        this.tabIndex = 0;
      }
    }
    render() {
      this.id = this.id.length > 0 ? this.id : this.componentId;
      return x`
      <div
        part="base"
        class=${e8({
        tab: true,
        "tab--active": this.active,
        "tab--closable": this.closable,
        "tab--disabled": this.disabled
      })}
      >
        <slot></slot>
        ${this.closable ? x`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
    }
  };
  SlTab.styles = [component_styles_default, tab_styles_default];
  SlTab.dependencies = { "sl-icon-button": SlIconButton };
  __decorateClass([
    e5(".tab")
  ], SlTab.prototype, "tab", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlTab.prototype, "panel", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "active", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "closable", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTab.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: Number, reflect: true })
  ], SlTab.prototype, "tabIndex", 2);
  __decorateClass([
    watch("active")
  ], SlTab.prototype, "handleActiveChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTab.prototype, "handleDisabledChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DFHYNK3F.js
  SlTab.define("sl-tab");

  // node_modules/@shoelace-style/shoelace/dist/components/tab-group/tab-group.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CSI2TGZS.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UGXNRQQX.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XJU7WU2G.js
  init_define_process();
  init_jquery();
  var tab_group_styles_default = i`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GJLC4SWQ.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5VKIB4HA.js
  init_define_process();
  init_jquery();
  var resize_observer_styles_default = i`
  :host {
    display: contents;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GJLC4SWQ.js
  var SlResizeObserver = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.observedElements = [];
      this.disabled = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver((entries) => {
        this.emit("sl-resize", { detail: { entries } });
      });
      if (!this.disabled) {
        this.startObserver();
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this.stopObserver();
    }
    handleSlotChange() {
      if (!this.disabled) {
        this.startObserver();
      }
    }
    startObserver() {
      const slot = this.shadowRoot.querySelector("slot");
      if (slot !== null) {
        const elements = slot.assignedElements({ flatten: true });
        this.observedElements.forEach((el) => this.resizeObserver.unobserve(el));
        this.observedElements = [];
        elements.forEach((el) => {
          this.resizeObserver.observe(el);
          this.observedElements.push(el);
        });
      }
    }
    stopObserver() {
      this.resizeObserver.disconnect();
    }
    handleDisabledChange() {
      if (this.disabled) {
        this.stopObserver();
      } else {
        this.startObserver();
      }
    }
    render() {
      return x` <slot @slotchange=${this.handleSlotChange}></slot> `;
    }
  };
  SlResizeObserver.styles = [component_styles_default, resize_observer_styles_default];
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlResizeObserver.prototype, "disabled", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlResizeObserver.prototype, "handleDisabledChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UGXNRQQX.js
  var SlTabGroup = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.tabs = [];
      this.focusableTabs = [];
      this.panels = [];
      this.localize = new LocalizeController2(this);
      this.hasScrollControls = false;
      this.shouldHideScrollStartButton = false;
      this.shouldHideScrollEndButton = false;
      this.placement = "top";
      this.activation = "auto";
      this.noScrollControls = false;
      this.fixedScrollControls = false;
      this.scrollOffset = 1;
    }
    connectedCallback() {
      const whenAllDefined = Promise.all([
        customElements.whenDefined("sl-tab"),
        customElements.whenDefined("sl-tab-panel")
      ]);
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => {
        this.repositionIndicator();
        this.updateScrollControls();
      });
      this.mutationObserver = new MutationObserver((mutations) => {
        const instanceMutations = mutations.filter(({ target }) => {
          if (target === this) return true;
          if (target.closest("sl-tab-group") !== this) return false;
          const tagName = target.tagName.toLowerCase();
          return tagName === "sl-tab" || tagName === "sl-tab-panel";
        });
        if (instanceMutations.length === 0) {
          return;
        }
        if (instanceMutations.some((m3) => !["aria-labelledby", "aria-controls"].includes(m3.attributeName))) {
          setTimeout(() => this.setAriaLabels());
        }
        if (instanceMutations.some((m3) => m3.attributeName === "disabled")) {
          this.syncTabsAndPanels();
        } else if (instanceMutations.some((m3) => m3.attributeName === "active")) {
          const tabs = instanceMutations.filter((m3) => m3.attributeName === "active" && m3.target.tagName.toLowerCase() === "sl-tab").map((m3) => m3.target);
          const newActiveTab = tabs.find((tab) => tab.active);
          if (newActiveTab) {
            this.setActiveTab(newActiveTab);
          }
        }
      });
      this.updateComplete.then(() => {
        this.syncTabsAndPanels();
        this.mutationObserver.observe(this, {
          attributes: true,
          attributeFilter: ["active", "disabled", "name", "panel"],
          childList: true,
          subtree: true
        });
        this.resizeObserver.observe(this.nav);
        whenAllDefined.then(() => {
          const intersectionObserver = new IntersectionObserver((entries, observer) => {
            var _a;
            if (entries[0].intersectionRatio > 0) {
              this.setAriaLabels();
              this.setActiveTab((_a = this.getActiveTab()) != null ? _a : this.tabs[0], { emitEvents: false });
              observer.unobserve(entries[0].target);
            }
          });
          intersectionObserver.observe(this.tabGroup);
        });
      });
    }
    disconnectedCallback() {
      var _a, _b;
      super.disconnectedCallback();
      (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
      if (this.nav) {
        (_b = this.resizeObserver) == null ? void 0 : _b.unobserve(this.nav);
      }
    }
    getAllTabs() {
      const slot = this.shadowRoot.querySelector('slot[name="nav"]');
      return slot.assignedElements();
    }
    getAllPanels() {
      return [...this.body.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
    }
    getActiveTab() {
      return this.tabs.find((el) => el.active);
    }
    handleClick(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    handleKeyDown(event) {
      const target = event.target;
      const tab = target.closest("sl-tab");
      const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
      if (tabGroup !== this) {
        return;
      }
      if (["Enter", " "].includes(event.key)) {
        if (tab !== null) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
          event.preventDefault();
        }
      }
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const activeEl = this.tabs.find((t8) => t8.matches(":focus"));
        const isRtl = this.localize.dir() === "rtl";
        let nextTab = null;
        if ((activeEl == null ? void 0 : activeEl.tagName.toLowerCase()) === "sl-tab") {
          if (event.key === "Home") {
            nextTab = this.focusableTabs[0];
          } else if (event.key === "End") {
            nextTab = this.focusableTabs[this.focusableTabs.length - 1];
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowRight" : "ArrowLeft") || ["start", "end"].includes(this.placement) && event.key === "ArrowUp") {
            const currentIndex = this.tabs.findIndex((el) => el === activeEl);
            nextTab = this.findNextFocusableTab(currentIndex, "backward");
          } else if (["top", "bottom"].includes(this.placement) && event.key === (isRtl ? "ArrowLeft" : "ArrowRight") || ["start", "end"].includes(this.placement) && event.key === "ArrowDown") {
            const currentIndex = this.tabs.findIndex((el) => el === activeEl);
            nextTab = this.findNextFocusableTab(currentIndex, "forward");
          }
          if (!nextTab) {
            return;
          }
          nextTab.tabIndex = 0;
          nextTab.focus({ preventScroll: true });
          if (this.activation === "auto") {
            this.setActiveTab(nextTab, { scrollBehavior: "smooth" });
          } else {
            this.tabs.forEach((tabEl) => {
              tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
            });
          }
          if (["top", "bottom"].includes(this.placement)) {
            scrollIntoView(nextTab, this.nav, "horizontal");
          }
          event.preventDefault();
        }
      }
    }
    handleScrollToStart() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft + this.nav.clientWidth : this.nav.scrollLeft - this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    handleScrollToEnd() {
      this.nav.scroll({
        left: this.localize.dir() === "rtl" ? this.nav.scrollLeft - this.nav.clientWidth : this.nav.scrollLeft + this.nav.clientWidth,
        behavior: "smooth"
      });
    }
    setActiveTab(tab, options) {
      options = __spreadValues({
        emitEvents: true,
        scrollBehavior: "auto"
      }, options);
      if (tab !== this.activeTab && !tab.disabled) {
        const previousTab = this.activeTab;
        this.activeTab = tab;
        this.tabs.forEach((el) => {
          el.active = el === this.activeTab;
          el.tabIndex = el === this.activeTab ? 0 : -1;
        });
        this.panels.forEach((el) => {
          var _a;
          return el.active = el.name === ((_a = this.activeTab) == null ? void 0 : _a.panel);
        });
        this.syncIndicator();
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
        }
        if (options.emitEvents) {
          if (previousTab) {
            this.emit("sl-tab-hide", { detail: { name: previousTab.panel } });
          }
          this.emit("sl-tab-show", { detail: { name: this.activeTab.panel } });
        }
      }
    }
    setAriaLabels() {
      this.tabs.forEach((tab) => {
        const panel = this.panels.find((el) => el.name === tab.panel);
        if (panel) {
          tab.setAttribute("aria-controls", panel.getAttribute("id"));
          panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
        }
      });
    }
    repositionIndicator() {
      const currentTab = this.getActiveTab();
      if (!currentTab) {
        return;
      }
      const width = currentTab.clientWidth;
      const height = currentTab.clientHeight;
      const isRtl = this.localize.dir() === "rtl";
      const allTabs = this.getAllTabs();
      const precedingTabs = allTabs.slice(0, allTabs.indexOf(currentTab));
      const offset3 = precedingTabs.reduce(
        (previous, current) => ({
          left: previous.left + current.clientWidth,
          top: previous.top + current.clientHeight
        }),
        { left: 0, top: 0 }
      );
      switch (this.placement) {
        case "top":
        case "bottom":
          this.indicator.style.width = `${width}px`;
          this.indicator.style.height = "auto";
          this.indicator.style.translate = isRtl ? `${-1 * offset3.left}px` : `${offset3.left}px`;
          break;
        case "start":
        case "end":
          this.indicator.style.width = "auto";
          this.indicator.style.height = `${height}px`;
          this.indicator.style.translate = `0 ${offset3.top}px`;
          break;
      }
    }
    // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
    syncTabsAndPanels() {
      this.tabs = this.getAllTabs();
      this.focusableTabs = this.tabs.filter((el) => !el.disabled);
      this.panels = this.getAllPanels();
      this.syncIndicator();
      this.updateComplete.then(() => this.updateScrollControls());
    }
    findNextFocusableTab(currentIndex, direction) {
      let nextTab = null;
      const iterator = direction === "forward" ? 1 : -1;
      let nextIndex = currentIndex + iterator;
      while (currentIndex < this.tabs.length) {
        nextTab = this.tabs[nextIndex] || null;
        if (nextTab === null) {
          if (direction === "forward") {
            nextTab = this.focusableTabs[0];
          } else {
            nextTab = this.focusableTabs[this.focusableTabs.length - 1];
          }
          break;
        }
        if (!nextTab.disabled) {
          break;
        }
        nextIndex += iterator;
      }
      return nextTab;
    }
    updateScrollButtons() {
      if (this.hasScrollControls && !this.fixedScrollControls) {
        this.shouldHideScrollStartButton = this.scrollFromStart() <= this.scrollOffset;
        this.shouldHideScrollEndButton = this.isScrolledToEnd();
      }
    }
    isScrolledToEnd() {
      return this.scrollFromStart() + this.nav.clientWidth >= this.nav.scrollWidth - this.scrollOffset;
    }
    scrollFromStart() {
      return this.localize.dir() === "rtl" ? -this.nav.scrollLeft : this.nav.scrollLeft;
    }
    updateScrollControls() {
      if (this.noScrollControls) {
        this.hasScrollControls = false;
      } else {
        this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
      }
      this.updateScrollButtons();
    }
    syncIndicator() {
      const tab = this.getActiveTab();
      if (tab) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
      }
    }
    /** Shows the specified tab panel. */
    show(panel) {
      const tab = this.tabs.find((el) => el.panel === panel);
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
      }
    }
    render() {
      const isRtl = this.localize.dir() === "rtl";
      return x`
      <div
        part="base"
        class=${e8({
        "tab-group": true,
        "tab-group--top": this.placement === "top",
        "tab-group--bottom": this.placement === "bottom",
        "tab-group--start": this.placement === "start",
        "tab-group--end": this.placement === "end",
        "tab-group--rtl": this.localize.dir() === "rtl",
        "tab-group--has-scroll-controls": this.hasScrollControls
      })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${e8({
        "tab-group__scroll-button": true,
        "tab-group__scroll-button--start": true,
        "tab-group__scroll-button--start--hidden": this.shouldHideScrollStartButton
      })}
                  name=${isRtl ? "chevron-right" : "chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls ? x`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${e8({
        "tab-group__scroll-button": true,
        "tab-group__scroll-button--end": true,
        "tab-group__scroll-button--end--hidden": this.shouldHideScrollEndButton
      })}
                  name=${isRtl ? "chevron-left" : "chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
    }
  };
  SlTabGroup.styles = [component_styles_default, tab_group_styles_default];
  SlTabGroup.dependencies = { "sl-icon-button": SlIconButton, "sl-resize-observer": SlResizeObserver };
  __decorateClass([
    e5(".tab-group")
  ], SlTabGroup.prototype, "tabGroup", 2);
  __decorateClass([
    e5(".tab-group__body")
  ], SlTabGroup.prototype, "body", 2);
  __decorateClass([
    e5(".tab-group__nav")
  ], SlTabGroup.prototype, "nav", 2);
  __decorateClass([
    e5(".tab-group__indicator")
  ], SlTabGroup.prototype, "indicator", 2);
  __decorateClass([
    r6()
  ], SlTabGroup.prototype, "hasScrollControls", 2);
  __decorateClass([
    r6()
  ], SlTabGroup.prototype, "shouldHideScrollStartButton", 2);
  __decorateClass([
    r6()
  ], SlTabGroup.prototype, "shouldHideScrollEndButton", 2);
  __decorateClass([
    n4()
  ], SlTabGroup.prototype, "placement", 2);
  __decorateClass([
    n4()
  ], SlTabGroup.prototype, "activation", 2);
  __decorateClass([
    n4({ attribute: "no-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "noScrollControls", 2);
  __decorateClass([
    n4({ attribute: "fixed-scroll-controls", type: Boolean })
  ], SlTabGroup.prototype, "fixedScrollControls", 2);
  __decorateClass([
    t3({ passive: true })
  ], SlTabGroup.prototype, "updateScrollButtons", 1);
  __decorateClass([
    watch("noScrollControls", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "updateScrollControls", 1);
  __decorateClass([
    watch("placement", { waitUntilFirstUpdate: true })
  ], SlTabGroup.prototype, "syncIndicator", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CSI2TGZS.js
  SlTabGroup.define("sl-tab-group");

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZH2AND3P.js
  init_define_process();
  init_jquery();
  var debounce = (fn, delay) => {
    let timerId = 0;
    return function(...args) {
      window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        fn.call(this, ...args);
      }, delay);
    };
  };
  var decorate = (proto, method, decorateFn) => {
    const superFn = proto[method];
    proto[method] = function(...args) {
      superFn.call(this, ...args);
      decorateFn.call(this, superFn, ...args);
    };
  };
  (() => {
    if (typeof window === "undefined") {
      return;
    }
    const isSupported = "onscrollend" in window;
    if (!isSupported) {
      const pointers = /* @__PURE__ */ new Set();
      const scrollHandlers = /* @__PURE__ */ new WeakMap();
      const handlePointerDown = (event) => {
        for (const touch of event.changedTouches) {
          pointers.add(touch.identifier);
        }
      };
      const handlePointerUp = (event) => {
        for (const touch of event.changedTouches) {
          pointers.delete(touch.identifier);
        }
      };
      document.addEventListener("touchstart", handlePointerDown, true);
      document.addEventListener("touchend", handlePointerUp, true);
      document.addEventListener("touchcancel", handlePointerUp, true);
      decorate(EventTarget.prototype, "addEventListener", function(addEventListener, type) {
        if (type !== "scrollend") return;
        const handleScrollEnd = debounce(() => {
          if (!pointers.size) {
            this.dispatchEvent(new Event("scrollend"));
          } else {
            handleScrollEnd();
          }
        }, 100);
        addEventListener.call(this, "scroll", handleScrollEnd, { passive: true });
        scrollHandlers.set(this, handleScrollEnd);
      });
      decorate(EventTarget.prototype, "removeEventListener", function(removeEventListener, type) {
        if (type !== "scrollend") return;
        const scrollHandler = scrollHandlers.get(this);
        if (scrollHandler) {
          removeEventListener.call(this, "scroll", scrollHandler, { passive: true });
        }
      });
    }
  })();

  // node_modules/@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RY756JLP.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ISIAP7VK.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BQSEJD7X.js
  init_define_process();
  init_jquery();
  var tab_panel_styles_default = i`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ISIAP7VK.js
  var id2 = 0;
  var SlTabPanel = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.attrId = ++id2;
      this.componentId = `sl-tab-panel-${this.attrId}`;
      this.name = "";
      this.active = false;
    }
    connectedCallback() {
      super.connectedCallback();
      this.id = this.id.length > 0 ? this.id : this.componentId;
      this.setAttribute("role", "tabpanel");
    }
    handleActiveChange() {
      this.setAttribute("aria-hidden", this.active ? "false" : "true");
    }
    render() {
      return x`
      <slot
        part="base"
        class=${e8({
        "tab-panel": true,
        "tab-panel--active": this.active
      })}
      ></slot>
    `;
    }
  };
  SlTabPanel.styles = [component_styles_default, tab_panel_styles_default];
  __decorateClass([
    n4({ reflect: true })
  ], SlTabPanel.prototype, "name", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTabPanel.prototype, "active", 2);
  __decorateClass([
    watch("active")
  ], SlTabPanel.prototype, "handleActiveChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RY756JLP.js
  SlTabPanel.define("sl-tab-panel");

  // node_modules/@shoelace-style/shoelace/dist/components/textarea/textarea.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WMS2VUJ6.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q3IETUAU.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6KE6SBMU.js
  init_define_process();
  init_jquery();
  var textarea_styles_default = i`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q3IETUAU.js
  var SlTextarea = class extends ShoelaceElement {
    constructor() {
      super(...arguments);
      this.formControlController = new FormControlController(this, {
        assumeInteractionOn: ["sl-blur", "sl-input"]
      });
      this.hasSlotController = new HasSlotController(this, "help-text", "label");
      this.hasFocus = false;
      this.title = "";
      this.name = "";
      this.value = "";
      this.size = "medium";
      this.filled = false;
      this.label = "";
      this.helpText = "";
      this.placeholder = "";
      this.rows = 4;
      this.resize = "vertical";
      this.disabled = false;
      this.readonly = false;
      this.form = "";
      this.required = false;
      this.spellcheck = true;
      this.defaultValue = "";
    }
    /** Gets the validity state object */
    get validity() {
      return this.input.validity;
    }
    /** Gets the validation message */
    get validationMessage() {
      return this.input.validationMessage;
    }
    connectedCallback() {
      super.connectedCallback();
      this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
      this.updateComplete.then(() => {
        this.setTextareaHeight();
        this.resizeObserver.observe(this.input);
      });
    }
    firstUpdated() {
      this.formControlController.updateValidity();
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      if (this.input) {
        (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.input);
      }
    }
    handleBlur() {
      this.hasFocus = false;
      this.emit("sl-blur");
    }
    handleChange() {
      this.value = this.input.value;
      this.setTextareaHeight();
      this.emit("sl-change");
    }
    handleFocus() {
      this.hasFocus = true;
      this.emit("sl-focus");
    }
    handleInput() {
      this.value = this.input.value;
      this.emit("sl-input");
    }
    handleInvalid(event) {
      this.formControlController.setValidity(false);
      this.formControlController.emitInvalidEvent(event);
    }
    setTextareaHeight() {
      if (this.resize === "auto") {
        this.sizeAdjuster.style.height = `${this.input.clientHeight}px`;
        this.input.style.height = "auto";
        this.input.style.height = `${this.input.scrollHeight}px`;
      } else {
        this.input.style.height = "";
      }
    }
    handleDisabledChange() {
      this.formControlController.setValidity(this.disabled);
    }
    handleRowsChange() {
      this.setTextareaHeight();
    }
    async handleValueChange() {
      await this.updateComplete;
      this.formControlController.updateValidity();
      this.setTextareaHeight();
    }
    /** Sets focus on the textarea. */
    focus(options) {
      this.input.focus(options);
    }
    /** Removes focus from the textarea. */
    blur() {
      this.input.blur();
    }
    /** Selects all the text in the textarea. */
    select() {
      this.input.select();
    }
    /** Gets or sets the textarea's scroll position. */
    scrollPosition(position) {
      if (position) {
        if (typeof position.top === "number") this.input.scrollTop = position.top;
        if (typeof position.left === "number") this.input.scrollLeft = position.left;
        return void 0;
      }
      return {
        top: this.input.scrollTop,
        left: this.input.scrollTop
      };
    }
    /** Sets the start and end positions of the text selection (0-based). */
    setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
      this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
    }
    /** Replaces a range of text with a new string. */
    setRangeText(replacement, start, end, selectMode = "preserve") {
      const selectionStart = start != null ? start : this.input.selectionStart;
      const selectionEnd = end != null ? end : this.input.selectionEnd;
      this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
      if (this.value !== this.input.value) {
        this.value = this.input.value;
        this.setTextareaHeight();
      }
    }
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity() {
      return this.input.checkValidity();
    }
    /** Gets the associated form, if one exists. */
    getForm() {
      return this.formControlController.getForm();
    }
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity() {
      return this.input.reportValidity();
    }
    /** Sets a custom validation message. Pass an empty string to restore validity. */
    setCustomValidity(message) {
      this.input.setCustomValidity(message);
      this.formControlController.updateValidity();
    }
    render() {
      const hasLabelSlot = this.hasSlotController.test("label");
      const hasHelpTextSlot = this.hasSlotController.test("help-text");
      const hasLabel = this.label ? true : !!hasLabelSlot;
      const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
      return x`
      <div
        part="form-control"
        class=${e8({
        "form-control": true,
        "form-control--small": this.size === "small",
        "form-control--medium": this.size === "medium",
        "form-control--large": this.size === "large",
        "form-control--has-label": hasLabel,
        "form-control--has-help-text": hasHelpText
      })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${e8({
        textarea: true,
        "textarea--small": this.size === "small",
        "textarea--medium": this.size === "medium",
        "textarea--large": this.size === "large",
        "textarea--standard": !this.filled,
        "textarea--filled": this.filled,
        "textarea--disabled": this.disabled,
        "textarea--focused": this.hasFocus,
        "textarea--empty": !this.value,
        "textarea--resize-none": this.resize === "none",
        "textarea--resize-vertical": this.resize === "vertical",
        "textarea--resize-auto": this.resize === "auto"
      })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${o6(this.name)}
              .value=${l4(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${o6(this.placeholder)}
              rows=${o6(this.rows)}
              minlength=${o6(this.minlength)}
              maxlength=${o6(this.maxlength)}
              autocapitalize=${o6(this.autocapitalize)}
              autocorrect=${o6(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${o6(this.spellcheck)}
              enterkeyhint=${o6(this.enterkeyhint)}
              inputmode=${o6(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize !== "auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
    }
  };
  SlTextarea.styles = [component_styles_default, form_control_styles_default, textarea_styles_default];
  __decorateClass([
    e5(".textarea__control")
  ], SlTextarea.prototype, "input", 2);
  __decorateClass([
    e5(".textarea__size-adjuster")
  ], SlTextarea.prototype, "sizeAdjuster", 2);
  __decorateClass([
    r6()
  ], SlTextarea.prototype, "hasFocus", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "title", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "name", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "value", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlTextarea.prototype, "size", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "filled", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "label", 2);
  __decorateClass([
    n4({ attribute: "help-text" })
  ], SlTextarea.prototype, "helpText", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "placeholder", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlTextarea.prototype, "rows", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "resize", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "readonly", 2);
  __decorateClass([
    n4({ reflect: true })
  ], SlTextarea.prototype, "form", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTextarea.prototype, "required", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlTextarea.prototype, "minlength", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlTextarea.prototype, "maxlength", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "autocapitalize", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "autocorrect", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "autocomplete", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlTextarea.prototype, "autofocus", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "enterkeyhint", 2);
  __decorateClass([
    n4({
      type: Boolean,
      converter: {
        // Allow "true|false" attribute values but keep the property boolean
        fromAttribute: (value) => !value || value === "false" ? false : true,
        toAttribute: (value) => value ? "true" : "false"
      }
    })
  ], SlTextarea.prototype, "spellcheck", 2);
  __decorateClass([
    n4()
  ], SlTextarea.prototype, "inputmode", 2);
  __decorateClass([
    defaultValue()
  ], SlTextarea.prototype, "defaultValue", 2);
  __decorateClass([
    watch("disabled", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleDisabledChange", 1);
  __decorateClass([
    watch("rows", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleRowsChange", 1);
  __decorateClass([
    watch("value", { waitUntilFirstUpdate: true })
  ], SlTextarea.prototype, "handleValueChange", 1);

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WMS2VUJ6.js
  SlTextarea.define("sl-textarea");

  // node_modules/@shoelace-style/shoelace/dist/components/tooltip/tooltip.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.URTPIBTY.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NU24CZHH.js
  init_define_process();
  init_jquery();

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FW7UWQXB.js
  init_define_process();
  init_jquery();
  var tooltip_styles_default = i`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NU24CZHH.js
  var SlTooltip = class extends ShoelaceElement {
    constructor() {
      super();
      this.localize = new LocalizeController2(this);
      this.content = "";
      this.placement = "top";
      this.disabled = false;
      this.distance = 8;
      this.open = false;
      this.skidding = 0;
      this.trigger = "hover focus";
      this.hoist = false;
      this.handleBlur = () => {
        if (this.hasTrigger("focus")) {
          this.hide();
        }
      };
      this.handleClick = () => {
        if (this.hasTrigger("click")) {
          if (this.open) {
            this.hide();
          } else {
            this.show();
          }
        }
      };
      this.handleFocus = () => {
        if (this.hasTrigger("focus")) {
          this.show();
        }
      };
      this.handleDocumentKeyDown = (event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          this.hide();
        }
      };
      this.handleMouseOver = () => {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.show(), delay);
        }
      };
      this.handleMouseOut = () => {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
        }
      };
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
    }
    disconnectedCallback() {
      var _a;
      super.disconnectedCallback();
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    firstUpdated() {
      this.body.hidden = !this.open;
      if (this.open) {
        this.popup.active = true;
        this.popup.reposition();
      }
    }
    hasTrigger(triggerType) {
      const triggers = this.trigger.split(" ");
      return triggers.includes(triggerType);
    }
    async handleOpenChange() {
      var _a, _b;
      if (this.open) {
        if (this.disabled) {
          return;
        }
        this.emit("sl-show");
        if ("CloseWatcher" in window) {
          (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
          this.closeWatcher = new CloseWatcher();
          this.closeWatcher.onclose = () => {
            this.hide();
          };
        } else {
          document.addEventListener("keydown", this.handleDocumentKeyDown);
        }
        await stopAnimations(this.body);
        this.body.hidden = false;
        this.popup.active = true;
        const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.popup.reposition();
        this.emit("sl-after-show");
      } else {
        this.emit("sl-hide");
        (_b = this.closeWatcher) == null ? void 0 : _b.destroy();
        document.removeEventListener("keydown", this.handleDocumentKeyDown);
        await stopAnimations(this.body);
        const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
        await animateTo(this.popup.popup, keyframes, options);
        this.popup.active = false;
        this.body.hidden = true;
        this.emit("sl-after-hide");
      }
    }
    async handleOptionsChange() {
      if (this.hasUpdated) {
        await this.updateComplete;
        this.popup.reposition();
      }
    }
    handleDisabledChange() {
      if (this.disabled && this.open) {
        this.hide();
      }
    }
    /** Shows the tooltip. */
    async show() {
      if (this.open) {
        return void 0;
      }
      this.open = true;
      return waitForEvent(this, "sl-after-show");
    }
    /** Hides the tooltip */
    async hide() {
      if (!this.open) {
        return void 0;
      }
      this.open = false;
      return waitForEvent(this, "sl-after-hide");
    }
    //
    // NOTE: Tooltip is a bit unique in that we're using aria-live instead of aria-labelledby to trick screen readers into
    // announcing the content. It works really well, but it violates an accessibility rule. We're also adding the
    // aria-describedby attribute to a slot, which is required by <sl-popup> to correctly locate the first assigned
    // element, otherwise positioning is incorrect.
    //
    render() {
      return x`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${e8({
        tooltip: true,
        "tooltip--open": this.open
      })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open ? "polite" : "off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `;
    }
  };
  SlTooltip.styles = [component_styles_default, tooltip_styles_default];
  SlTooltip.dependencies = { "sl-popup": SlPopup };
  __decorateClass([
    e5("slot:not([name])")
  ], SlTooltip.prototype, "defaultSlot", 2);
  __decorateClass([
    e5(".tooltip__body")
  ], SlTooltip.prototype, "body", 2);
  __decorateClass([
    e5("sl-popup")
  ], SlTooltip.prototype, "popup", 2);
  __decorateClass([
    n4()
  ], SlTooltip.prototype, "content", 2);
  __decorateClass([
    n4()
  ], SlTooltip.prototype, "placement", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "disabled", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlTooltip.prototype, "distance", 2);
  __decorateClass([
    n4({ type: Boolean, reflect: true })
  ], SlTooltip.prototype, "open", 2);
  __decorateClass([
    n4({ type: Number })
  ], SlTooltip.prototype, "skidding", 2);
  __decorateClass([
    n4()
  ], SlTooltip.prototype, "trigger", 2);
  __decorateClass([
    n4({ type: Boolean })
  ], SlTooltip.prototype, "hoist", 2);
  __decorateClass([
    watch("open", { waitUntilFirstUpdate: true })
  ], SlTooltip.prototype, "handleOpenChange", 1);
  __decorateClass([
    watch(["content", "distance", "hoist", "placement", "skidding"])
  ], SlTooltip.prototype, "handleOptionsChange", 1);
  __decorateClass([
    watch("disabled")
  ], SlTooltip.prototype, "handleDisabledChange", 1);
  setDefaultAnimation("tooltip.show", {
    keyframes: [
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1 }
    ],
    options: { duration: 150, easing: "ease" }
  });
  setDefaultAnimation("tooltip.hide", {
    keyframes: [
      { opacity: 1, scale: 1 },
      { opacity: 0, scale: 0.8 }
    ],
    options: { duration: 150, easing: "ease" }
  });

  // node_modules/@shoelace-style/shoelace/dist/chunks/chunk.URTPIBTY.js
  SlTooltip.define("sl-tooltip");

  // node_modules/ldrs/dist/index.js
  init_define_process();
  init_jquery();

  // node_modules/ldrs/dist/lib/LdrsBaseElement.js
  init_define_process();
  init_jquery();
  var t6 = class extends HTMLElement {
    constructor() {
      super();
      __publicField(this, "_propsToUpgrade", {});
      __publicField(this, "shadow");
      __publicField(this, "template");
      __publicField(this, "defaultProps");
      __publicField(this, "isAttached", false);
      this.shadow = this.attachShadow({ mode: "open" }), this.template = document.createElement("template");
    }
    storePropsToUpgrade(t8) {
      t8.forEach((t9) => {
        this.hasOwnProperty(t9) && void 0 !== this[t9] && (this._propsToUpgrade[t9] = this[t9], delete this[t9]);
      });
    }
    upgradeStoredProps() {
      Object.entries(this._propsToUpgrade).forEach(([t8, e12]) => {
        this.setAttribute(t8, e12);
      });
    }
    reflect(t8) {
      t8.forEach((t9) => {
        Object.defineProperty(this, t9, { set(e12) {
          "string,number".includes(typeof e12) ? this.setAttribute(t9, e12.toString()) : this.removeAttribute(t9);
        }, get() {
          return this.getAttribute(t9);
        } });
      });
    }
    applyDefaultProps(t8) {
      this.defaultProps = t8, Object.entries(t8).forEach(([t9, e12]) => {
        this[t9] = this[t9] || e12.toString();
      });
    }
  };

  // node_modules/ldrs/dist/elements/dotPulse.js
  init_define_process();
  init_jquery();
  var t7 = ':host{--uib-dot-size:calc(var(--uib-size)*0.24);align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-dot-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{align-items:center;display:flex;height:100%;justify-content:space-between;position:relative;width:100%}.container:after,.container:before,.dot{background-color:var(--uib-color);border-radius:50%;content:"";display:block;height:var(--uib-dot-size);transform:scale(0);transition:background-color .3s ease;width:var(--uib-dot-size)}.container:before{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.375) infinite}.dot{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.25) infinite both}.container:after{animation:pulse var(--uib-speed) ease-in-out calc(var(--uib-speed)*-.125) infinite}@keyframes pulse{0%,to{transform:scale(0)}50%{transform:scale(1)}}';
  var s4 = class extends t6 {
    constructor() {
      super();
      __publicField(this, "_attributes", ["size", "color", "speed"]);
      __publicField(this, "size");
      __publicField(this, "color");
      __publicField(this, "speed");
      this.storePropsToUpgrade(this._attributes), this.reflect(this._attributes);
    }
    static get observedAttributes() {
      return ["size", "color", "speed"];
    }
    connectedCallback() {
      this.upgradeStoredProps(), this.applyDefaultProps({ size: 43, color: "black", speed: 1.3 }), this.template.innerHTML = `
      <div class="container"><div class="dot" /></div>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${t7}
      </style>
    `, this.shadow.replaceChildren(this.template.content.cloneNode(true));
    }
    attributeChangedCallback() {
      const e12 = this.shadow.querySelector("style");
      e12 && (e12.innerHTML = `
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${t7}
    `);
    }
  };
  var i9 = { register: (e12 = "l-dot-pulse") => {
    customElements.get(e12) || customElements.define(e12, class extends s4 {
    });
  }, element: s4 };

  // node_modules/@github/clipboard-copy-element/dist/index.esm.js
  init_define_process();
  init_jquery();
  function createNode(text) {
    const node = document.createElement("pre");
    node.style.width = "1px";
    node.style.height = "1px";
    node.style.position = "fixed";
    node.style.top = "5px";
    node.textContent = text;
    return node;
  }
  function copyNode(node) {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(node.textContent);
    }
    const selection = getSelection();
    if (selection == null) {
      return Promise.reject(new Error());
    }
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    return Promise.resolve();
  }
  function copyText(text) {
    if ("clipboard" in navigator) {
      return navigator.clipboard.writeText(text);
    }
    const body = document.body;
    if (!body) {
      return Promise.reject(new Error());
    }
    const node = createNode(text);
    body.appendChild(node);
    copyNode(node);
    body.removeChild(node);
    return Promise.resolve();
  }
  function copy(button) {
    const id3 = button.getAttribute("for");
    const text = button.getAttribute("value");
    function trigger() {
      button.dispatchEvent(new CustomEvent("clipboard-copy", {
        bubbles: true
      }));
    }
    if (text) {
      copyText(text).then(trigger);
    } else if (id3) {
      const root = "getRootNode" in Element.prototype ? button.getRootNode() : button.ownerDocument;
      if (!(root instanceof Document || "ShadowRoot" in window && root instanceof ShadowRoot)) return;
      const node = root.getElementById(id3);
      if (node) copyTarget(node).then(trigger);
    }
  }
  function copyTarget(content) {
    if (content instanceof HTMLInputElement || content instanceof HTMLTextAreaElement) {
      return copyText(content.value);
    } else if (content instanceof HTMLAnchorElement && content.hasAttribute("href")) {
      return copyText(content.href);
    } else {
      return copyNode(content);
    }
  }
  function clicked(event) {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      copy(button);
    }
  }
  function keydown(event) {
    if (event.key === " " || event.key === "Enter") {
      const button = event.currentTarget;
      if (button instanceof HTMLElement) {
        event.preventDefault();
        copy(button);
      }
    }
  }
  function focused(event) {
    event.currentTarget.addEventListener("keydown", keydown);
  }
  function blurred(event) {
    event.currentTarget.removeEventListener("keydown", keydown);
  }
  var ClipboardCopyElement = class extends HTMLElement {
    constructor() {
      super();
      this.addEventListener("click", clicked);
      this.addEventListener("focus", focused);
      this.addEventListener("blur", blurred);
    }
    connectedCallback() {
      if (!this.hasAttribute("tabindex")) {
        this.setAttribute("tabindex", "0");
      }
      if (!this.hasAttribute("role")) {
        this.setAttribute("role", "button");
      }
    }
    get value() {
      return this.getAttribute("value") || "";
    }
    set value(text) {
      this.setAttribute("value", text);
    }
  };
  if (!window.customElements.get("clipboard-copy")) {
    window.ClipboardCopyElement = ClipboardCopyElement;
    window.customElements.define("clipboard-copy", ClipboardCopyElement);
  }

  // node_modules/@shoelace-style/shoelace/dist/utilities/base-path.js
  init_define_process();
  init_jquery();

  // app/javascript/customer_center/web_components/index.js
  i9.register();
  setBasePath("/vendors/shoelace");
  if (define_process_default.env.RAILS_ENV === "test") {
    ;
    [
      "dialog.show",
      "dialog.hide",
      "dialog.overlay.show",
      "dialog.overlay.hide",
      "drawer.showTop",
      "drawer.showEnd",
      "drawer.showBottom",
      "drawer.showStart",
      "drawer.hideTop",
      "drawer.hideEnd",
      "drawer.hideBottom",
      "drawer.hideStart",
      "drawer.overlay.show",
      "drawer.overlay.hide"
    ].forEach((animation) => {
      setDefaultAnimation(animation, null);
    });
  }
})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.5.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2020-05-04T22:49Z
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/assets/cc-web-components.js-eb7983698f482f1b2d1cf21fe37b537508cbbb1e6e4a81e7dba13ac383c5ff88.map
//!
;
