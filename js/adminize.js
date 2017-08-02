/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _adminize = __webpack_require__(1);
	
	var _adminize2 = _interopRequireDefault(_adminize);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function ($) {
	  var adminize = new _adminize2.default();
	  $(window).on('load', function () {
	    adminize.initialize();
	  }).on('scroll', function () {
	    adminize.updateTableSections();
	  }).on('resize', function () {
	    adminize.setSidebarHeight();
	    adminize.updateRowWidths();
	  });
	})(jQuery);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Adminize = function () {
	  function Adminize() {
	    _classCallCheck(this, Adminize);
	  }
	
	  _createClass(Adminize, [{
	    key: 'initialize',
	    value: function initialize() {
	      this.setSidebarHeight();
	      this.setDisabled();
	      this.sidebarToggle();
	      this.sidebarParentMenu();
	      this.userMenu();
	      this.tab();
	      this.flashMsgClose();
	      this.dropdown();
	      this.appendTableSection();
	    }
	  }, {
	    key: 'setSidebarHeight',
	    value: function setSidebarHeight() {
	      var _windowHeight = $(window).height();
	      var _headerHeight = $('.js-headbar').height();
	      var _resultHeight = _windowHeight - _headerHeight;
	      $('.js-scroll-wrap').height(_resultHeight);
	    }
	  }, {
	    key: 'setDisabled',
	    value: function setDisabled() {
	      var _input = $('input:disabled');
	      _input.parent('label').addClass('disabled');
	    }
	  }, {
	    key: 'sidebarToggle',
	    value: function sidebarToggle() {
	      var _toggle = $('.js-head-toggle');
	      var _class = 'is-sidebar-open';
	      var _body = $('body');
	      _toggle.on('click', function () {
	        if (_body.hasClass(_class)) {
	          _body.removeClass(_class);
	        } else {
	          _body.addClass(_class);
	        }
	      });
	    }
	  }, {
	    key: 'sidebarParentMenu',
	    value: function sidebarParentMenu() {
	      var _btn = $('.js-side-parent');
	      var _menu = $('.child-menu');
	      var _class = 'is-open';
	      _btn.on('click', function (event) {
	        var _this = $(event.currentTarget);
	        if (_this.hasClass(_class)) {
	          _this.next(_menu).slideUp('fast', function () {
	            _this.removeClass(_class);
	          });
	        } else {
	          _this.next(_menu).slideDown('fast', function () {
	            _this.addClass(_class);
	          });
	        }
	      });
	    }
	  }, {
	    key: 'userMenu',
	    value: function userMenu() {
	      var _class = 'is-open';
	      var _dropDown = $('.js-dropdown');
	      var _hoverFlg = false;
	      var _body = $('body');
	
	      _dropDown.on('click', function (event) {
	        var _this = $(event.currentTarget);
	        if (_this.hasClass(_class)) {
	          _this.removeClass(_class);
	        } else {
	          _this.addClass(_class);
	        }
	      }).on('mouseenter', function () {
	        _hoverFlg = true;
	      }).on('mouseleave', function () {
	        _hoverFlg = false;
	      });
	
	      _body.on('click', function () {
	        if (_hoverFlg === false) {
	          _dropDown.removeClass(_class);
	        }
	      });
	    }
	  }, {
	    key: 'tab',
	    value: function tab() {
	      var _pane = $('.js-tab-pane');
	      var _tab = $('.js-tab');
	      var _class = 'is-active';
	      _tab.on('click', function (event) {
	        var _this = $(event.currentTarget);
	        var _target = _this.attr('href');
	        _pane.hide();
	        $(_target).show();
	        _tab.parent().removeClass(_class);
	        _this.parent().addClass(_class);
	        return false;
	      });
	    }
	  }, {
	    key: 'flashMsgClose',
	    value: function flashMsgClose() {
	      var _closeBtn = $('.js-flmsg-close');
	      _closeBtn.on('click', function (event) {
	        var _this = $(event.currentTarget);
	        var _parent = _this.parents('.flash-msg');
	        _parent.fadeOut();
	      });
	    }
	  }, {
	    key: 'dropdown',
	    value: function dropdown() {
	      var _toggle = $('.js-dropdown-toggle');
	      var _allParent = $('.dropdown-group');
	      var _openClass = 'is-open';
	      var _hoverFlg = false;
	      var _body = $('body');
	
	      _toggle.on('click', function (event) {
	        var _this = $(event.currentTarget);
	        var _parent = _this.parent('.dropdown-group');
	        if (_parent.hasClass(_openClass)) {
	          _parent.removeClass(_openClass);
	        } else {
	          _allParent.removeClass(_openClass);
	          _parent.addClass(_openClass);
	        }
	      }).on('mouseenter', function () {
	        _hoverFlg = true;
	      }).on('mouseleave', function () {
	        _hoverFlg = false;
	      });
	      _body.on('click', function () {
	        if (_hoverFlg === false) {
	          _allParent.removeClass(_openClass);
	        }
	      });
	    }
	  }, {
	    key: 'updateTableSections',
	    value: function updateTableSections() {
	      $('.ts-table-section').each(function (index, table) {
	        var verticalOffset = 60;
	        var $table = $(table);
	        var toffset = $(table).offset();
	        var scrollTop = $(window).scrollTop() + verticalOffset;
	        var rows = $table.find('.ts-row-section');
	        var frows = $table.find('.ts-row-fixed');
	
	        rows.each(function (index, row) {
	          var $row = $(row);
	          var roffset = $row.offset();
	          var hpoint = index + 1 === rows.length ? toffset.top + $table.height() : $(rows[index + 1]).offset().top;
	          var voffset = void 0;
	
	          if (scrollTop > roffset.top && scrollTop < hpoint) {
	            voffset = Math.max(0, scrollTop - (hpoint - $row.height()));
	            $(frows[index]).css('visibility', 'visible').css('top', verticalOffset - voffset);
	          } else {
	            $(frows[index]).css('visibility', 'hidden');
	          }
	        });
	      });
	    }
	  }, {
	    key: 'updateRowWidths',
	    value: function updateRowWidths() {
	      $('.ts-table-section').each(function (index, table) {
	        var $table = $(table);
	        var rows = $table.find('.ts-row-section');
	        var frows = $table.find('.ts-row-fixed');
	
	        rows.each(function (index, row) {
	          var cells = $(row).find('th,td');
	          $(frows[index]).find('th,td').each(function (index, ccell) {
	            $(ccell).width($(cells[index]).width()).height($(cells[index]).height());
	          });
	        });
	      });
	    }
	  }, {
	    key: 'appendTableSection',
	    value: function appendTableSection() {
	      var verticalOffset = 60;
	      $('.ts-table-section').each(function (index, table) {
	        $(table).find('.ts-row-section').each(function (index, row) {
	          var $row = $(row);
	          var crow = $row.clone().removeClass('ts-row-section').addClass('ts-row-fixed').css('top', verticalOffset).appendTo($row.parent());
	          var cells = $row.find('th,td');
	          $(crow).find('th,td').each(function (index, ccell) {
	            $(ccell).width($(cells[index]).width()).height($(cells[index]).height());
	          });
	        });
	
	        $('<tr></tr>').css({
	          'position': 'fixed',
	          'visibility': 'hidden'
	        }).appendTo(table);
	      });
	    }
	  }]);
	
	  return Adminize;
	}();
	
	exports.default = Adminize;
	;

/***/ }
/******/ ]);
//# sourceMappingURL=adminize.js.map