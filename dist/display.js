"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayJS = function DisplayJS(obj) {
	_classCallCheck(this, DisplayJS);

	this.obj = obj;
};

var _DOM_DJS = function (_DisplayJS) {
	_inherits(_DOM_DJS, _DisplayJS);

	function _DOM_DJS() {
		_classCallCheck(this, _DOM_DJS);

		return _possibleConstructorReturn(this, (_DOM_DJS.__proto__ || Object.getPrototypeOf(_DOM_DJS)).apply(this, arguments));
	}

	_createClass(_DOM_DJS, [{
		key: "var",
		value: function _var(push) {
			var _this2 = this;

			var var_push = function var_push() {
				var elements = document.querySelectorAll("[var]");
				for (var i = 0; i < elements.length; i++) {
					var attr = elements[i].getAttribute("var");
					elements[i].innerHTML = _this2.obj[attr];
				}
			};
			if (!push) {
				var_push();
			} else {
				window.setInterval(function () {
					var_push();
				}, push);
			}
		}
	}, {
		key: "target",
		value: function target(callback) {
			if (!callback) {
				var callback = function callback() {};
			}
			var addEventListener = function () {
				if (document.addEventListener) {
					return function (element, event, handler) {
						element.addEventListener(event, handler, false);
					};
				} else {
					return function (element, event, handler) {
						element.attachEvent("on" + event, handler);
					};
				}
			}();
			var obj = this.obj;
			[].forEach.call(document.querySelectorAll('[target]'), function (x, i, a) {
				addEventListener(a[i], "change", function () {
					var attr1 = a[i].getAttribute("target");
					obj[attr1] = this.value;
					callback();
				});
				addEventListener(a[i], "keydown", function () {
					var attr2 = a[i].getAttribute("target");
					obj[attr2] = this.value;
					callback();
				});
				addEventListener(a[i], "input", function () {
					var attr3 = a[i].getAttribute("target");
					obj[attr3] = this.value;
					callback();
				});
				addEventListener(a[i], "paste", function () {
					var attr4 = a[i].getAttribute("target");
					obj[attr4] = this.value;
					callback();
				});
			});
		}
	}, {
		key: "text",
		value: function text(element, _text) {
			element[0].innerHTML = _text;
		}
	}, {
		key: "prepend",
		value: function prepend(element, html) {
			var div = document.createElement('div');
			div.innerHTML = html;
			element[0].insertBefore(div, element.firstChild);
		}
	}, {
		key: "append",
		value: function append(element, html) {
			element[0].innerHTML += html;
		}
	}, {
		key: "select",
		value: function select(str) {
			var obj = document.querySelectorAll(str);
			return obj;
		}
	}, {
		key: "empty",
		value: function empty(element) {
			element[0].innerHTML = null;
		}
	}, {
		key: "remove",
		value: function remove(element) {
			element[0].parentNode.removeChild(element);
		}
	}, {
		key: "on",
		value: function on(element, event, callback) {
			var addEventListener = function () {
				if (document.addEventListener) {
					return function (element, event, handler) {
						element[0].addEventListener(event, handler, false);
					};
				} else {
					return function (element, event, handler) {
						element[0].attachEvent("on" + event, handler);
					};
				}
			}();
			return addEventListener(element[0], event, callback);
		}
	}, {
		key: "show",
		value: function show(element) {
			element[0].style.display = 'block';
			return true;
		}
	}, {
		key: "hide",
		value: function hide(element) {
			element[0].style.display = 'none';
			return true;
		}
	}, {
		key: "ajax",
		value: function ajax(url, method, callback) {
			var request = new XMLHttpRequest();
			request.open(method, url, true);

			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					var data = request.responseText;
					callback(data);
				} else {
					console.error("DisplayJS error: The ajax request returned an error.");
				}
			};

			request.onerror = function () {
				// There was a connection error of some sort
			};

			request.send();
		}
	}, {
		key: "hasClass",
		value: function hasClass(element, className) {
			if (element[0].classList) return element[0].classList.contains(className);
			return !!element[0].className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
		}
	}, {
		key: "addClass",
		value: function addClass(element, className) {
			if (element[0].classList) element[0].classList.add(className);else if (!hasClass(element[0], className)) element[0].className += " " + className;
		}
	}, {
		key: "removeClass",
		value: function removeClass(element, className) {
			if (element[0].classList) element[0].classList.remove(className);else if (hasClass(element[0], className)) {
				var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
				element[0].className = element[0].className.replace(reg, ' ');
			}
		}
	}, {
		key: "toggleClass",
		value: function toggleClass(element, class1) {
			var classes = element[0].className;
			var regex = new RegExp("\\b" + class1 + "\\b");
			var hasOne = classes.match(regex);
			class1 = class1.replace(/\s+/g, '');
			if (hasOne) element[0].className = classes.replace(regex, '');else element[0].className = classes + class1;
		}
	}, {
		key: "each",
		value: function each(elements, callback) {
			for (var i = 0; i < elements.length; i++) {
				callback(elements[i]);
			}
		}
	}, {
		key: "style",
		value: function style(element, name, value) {
			element[0].style[name] = value;
		}
	}, {
		key: "getStyle",
		value: function getStyle(element, styleProp) {
			var value = void 0;
			var defaultView = (element[0].ownerDocument || document).defaultView;
			// W3C standard way:
			if (defaultView && defaultView.getComputedStyle) {
				// sanitize property name to css notation
				// (hypen separated words eg. font-Size)
				styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
				return defaultView.getComputedStyle(element, null).getPropertyValue(styleProp);
			} else if (element[0].currentStyle) {
				// IE
				// sanitize property name to camelCase
				styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
					return letter.toUpperCase();
				});
				value = element[0].currentStyle[styleProp];
				// convert other units to pixels on IE
				if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
					return function (value) {
						var oldLeft = element[0].style.left;
						var oldRsLeft = element[0].runtimeStyle.left;
						element[0].runtimeStyle.left = element[0].currentStyle.left;
						element[0].style.left = value || 0;
						value = element.style.pixelLeft + "px";
						element[0].style.left = oldLeft;
						element[0].runtimeStyle.left = oldRsLeft;
						return value;
					}(value);
				}
				return value;
			}
		}
	}, {
		key: "load",
		value: function load(element, url) {
			var request = new XMLHttpRequest();
			request.open("GET", url, true);

			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					var mapDOM = function mapDOM(element, json) {
						var treeObject = {};

						// If string convert to document Node
						if (typeof element === "string") {
							if (window.DOMParser) {
								parser = new DOMParser();
								docNode = parser.parseFromString(element, "text/xml");
							} else {
								// Microsoft strikes again
								docNode = new ActiveXObject("Microsoft.XMLDOM");
								docNode.async = false;
								docNode.loadXML(element);
							}
							element = docNode.firstChild;
						}

						//Recursively loop through DOM elements and assign properties to object
						function treeHTML(element, object) {
							object["type"] = element.nodeName;
							var nodeList = element.childNodes;
							if (nodeList != null) {
								if (nodeList.length) {
									object["content"] = [];
									for (var i = 0; i < nodeList.length; i++) {
										if (nodeList[i].nodeType == 3) {
											object["content"].push(nodeList[i].nodeValue);
										} else {
											object["content"].push({});
											treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
										}
									}
								}
							}
							if (element.attributes != null) {
								if (element.attributes.length) {
									object["attributes"] = {};
									for (var i = 0; i < element.attributes.length; i++) {
										object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
									}
								}
							}
						}
						treeHTML(element, treeObject);

						return json ? JSON.stringify(treeObject) : treeObject;
					};

					var data = request.responseText;
					json = mapDOM(data, true);
					element[0].innerHTML = json[element[0]];
				} else {
					console.error("DisplayJS error: The load request returned an error.");
				}
			};

			request.onerror = function () {
				console.error("DisplayJS error: The load request returned an error. Please, check your connection.");
			};

			request.send();
		}
	}]);

	return _DOM_DJS;
}(DisplayJS);