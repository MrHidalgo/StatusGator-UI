"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var sidebarMainToggle = function sidebarMainToggle() {
		var btns = document.querySelectorAll('[sidebar-btn-js]');

		for (var i = 0; i < btns.length; i++) {
			var btn = btns[i];

			btn.addEventListener('click', function (ev) {
				var el = ev.currentTarget,
				    elID = el.getAttribute('data-id'),
				    elVal = el.innerText;

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var j = _step.value;
						j.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = document.querySelectorAll('.ui__container')[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _j = _step2.value;
						_j.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = document.querySelectorAll('.ui__row')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _j2 = _step3.value;
						_j2.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				el.classList.add('is-active');

				document.querySelectorAll('.ui__container[data-id="' + elID + '"]')[0].classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + elID + '"] .ui__row[data-inner-id="1"]')[0].classList.add('is-active');

				document.querySelector('#header p').innerHTML = elVal;
			});
		}
	};

	var sidebarInnerToggle = function sidebarInnerToggle() {
		var innerBtns = document.querySelectorAll('[sidebar-inner-btn-js]');

		for (var i = 0; i < innerBtns.length; i++) {
			var btn = innerBtns[i];

			btn.addEventListener('click', function (ev) {
				var el = ev.currentTarget,
				    elID = el.getAttribute('data-inner-id'),
				    containerID = el.getAttribute('data-container');

				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = innerBtns[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var j = _step4.value;
						j.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = document.querySelectorAll('[sidebar-btn-js]')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var _j3 = _step5.value;
						_j3.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}

				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = document.querySelectorAll('.ui__container')[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var _j4 = _step6.value;
						_j4.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}

				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = document.querySelectorAll('.ui__row')[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var _j5 = _step7.value;
						_j5.classList.remove('is-active');
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				el.classList.add('is-active');

				document.querySelector('[sidebar-btn-js][data-id="' + containerID + '"]').classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + containerID + '"]')[0].classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + containerID + '"] .ui__row[data-inner-id="' + elID + '"]')[0].classList.add('is-active');

				document.querySelector('#header p').innerHTML = document.querySelector('[sidebar-btn-js][data-id="' + containerID + '"]').innerText;
			});
		}
	};

	var codeSelection = function codeSelection() {
		var pres = document.querySelectorAll('pre');

		for (var i = 0; i < pres.length; i++) {
			pres[i].addEventListener("dblclick", function () {
				var selection = getSelection();
				var range = document.createRange();
				range.selectNodeContents(this);
				selection.removeAllRanges();
				selection.addRange(range);
			}, false);
		}
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		sidebarMainToggle();
		sidebarInnerToggle();
		codeSelection();
		// ==========================================
	};
	initNative();
})();