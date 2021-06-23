## JavaScript files

### Concatenation rule
0. app.js
1. Function Callback
2. Window event listener - **load**, **resize**, **scroll**
3. Document event listener - **ready**

### Standard
1. Ignore files which start `[_]*.js`
2. In the folders of the `_document` and the `_window` there are two files:
  - `_indexJquery.js` & `indexNative.js` (depending on what you use for the project, you need to uncomment it);
  - The default is `indexNative.js`
  
### Callbacks used by default:
- initWebFontLoader();
- initPreventBehavior();
- svg4everybody();

### Present methods:
* `svg4everybody()`;
* `initBarbaJSTransition()`;
* `initPopups()`;
* `initStellar()` - correct work with `jquery-migrate` (uncomment in *vendorScript/_shared* path);
* `initSwiper()`;
* `initHamburger()`;
* `initHeaderFixed()`;
* `initPreventBehavior()`;
* `initInputFocus()`;
* `initSelectric()`;
* `initValidation()`;
* `initCustomSelect()`;
* `initObjectFitImages()` - add image tag some className `.object-fit with .object-fit--coverCenter .object-fit--containCenter`;

* `initWebFontLoader()` - need to register the fonts that will be used:
  * `from Google fonts`;
  * `custom fonts - use @font-fase`;
  
* `initViewPortChecker()` - it is better to use with `animate.css`:
  * `.viewport-hide-js` - add to elements which container check viewport
  * `data-animation-name` - default `slideInUp`
  * `data-animation-duration` - default `1s`
  * `data-animation-delay` - default `0s`
  
* `initGetBrowserNameVersion()` - return 2 val:
  - `name`
  - `version`
  
* `initSmoothScroll()` - accepts two parameters:
  - `btnName` - default `[anchor-js]`
  - `animateSpeed` - default `1000`
  