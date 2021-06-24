/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const sidebarMainToggle = () => {
		const btns = document.querySelectorAll('[sidebar-btn-js]');
		
		for(let i = 0; i < btns.length; i++) {
			let btn = btns[i];
			
			btn.addEventListener('click', (ev) => {
				const el = ev.currentTarget,
					elID = el.getAttribute('data-id'),
					elVal = el.innerText;
				
				for(let j of btns) j.classList.remove('is-active');
				for(let j of document.querySelectorAll('.ui__container')) j.classList.remove('is-active');
				for(let j of document.querySelectorAll('.ui__row')) j.classList.remove('is-active');
				
				el.classList.add('is-active');
				
				document.querySelectorAll('.ui__container[data-id="' + elID + '"]')[0].classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + elID + '"] .ui__row[data-inner-id="1"]')[0].classList.add('is-active');
				
				document.querySelector('#header p').innerHTML = elVal;
			});
		}
	};
	
	const sidebarInnerToggle = () => {
		const innerBtns = document.querySelectorAll('[sidebar-inner-btn-js]');
		
		for(let i = 0; i < innerBtns.length; i++) {
			let btn = innerBtns[i];
			
			btn.addEventListener('click', (ev) => {
				const el = ev.currentTarget,
					elID = el.getAttribute('data-inner-id'),
					containerID = el.getAttribute('data-container');
				
				for(let j of innerBtns) j.classList.remove('is-active');
				for(let j of document.querySelectorAll('[sidebar-btn-js]')) j.classList.remove('is-active');
				for(let j of document.querySelectorAll('.ui__container')) j.classList.remove('is-active');
				for(let j of document.querySelectorAll('.ui__row')) j.classList.remove('is-active');
				
				el.classList.add('is-active');
				
				document.querySelector('[sidebar-btn-js][data-id="' + containerID + '"]').classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + containerID + '"]')[0].classList.add('is-active');
				document.querySelectorAll('.ui__container[data-id="' + containerID + '"] .ui__row[data-inner-id="' + elID + '"]')[0].classList.add('is-active');
				
				document.querySelector('#header p').innerHTML = document.querySelector('[sidebar-btn-js][data-id="' + containerID + '"]').innerText;
			});
		}
	};
	
	
	const codeSelection = () => {
		const pres = document.querySelectorAll('pre');
		
		for (let i = 0; i < pres.length; i++) {
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
	const initNative = () => {
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
