/* global jQuery:false */

(function($) {

    'use strict';

    var _body = $('body');

    var _adminize = {

        // 初期実行
        initialize: function() {
            this.setSidebarHeight();
            this.setDisabled();
            this.sidebarToggle();
            this.sidebarParentMenu();
            this.userMenu();
            this.tab();
            this.flashMsgClose();
        },

        // サイドバーの高さを設定する
        setSidebarHeight: function() {
            var _windowHeight   = $(window).height();
            var _headHeight     = $('.js-headbar').height();
            var _resultHeight   = _windowHeight - _headHeight;
            $('.js-scroll-wrap').height(_resultHeight);
        },

        // InputのDisableクラスを追加
        setDisabled: function() {
            var _input = $('input:disabled');
            _input.parent('label').addClass('disabled');
        },

        // サイドバーの開閉
        sidebarToggle: function() {
            var _toggle = $('.js-head-toggle');
            _toggle.on({
                'click': function() {
                    var $class = 'is-sidebar-open';
                    if (_body.hasClass($class)) {
                        _body.removeClass($class);
                    } else {
                        _body.addClass($class);
                    }
                }
            });
        },

        // サイドバーの親メニューの開閉
        sidebarParentMenu: function() {
            var _btn    = $('.js-side-parent');
            var _menu   = $('.child-menu');
            var _class  = 'is-open';
            _btn.on({
                'click': function() {
                    var _this = $(this);
                    if (_this.hasClass(_class)) {
                        _this.next(_menu).slideUp('fast', function () {
                            _this.removeClass(_class);
                        });
                    } else {
                        _this.next(_menu).slideDown('fast', function () {
                            _this.addClass(_class);
                        });
                    }
                }
            });
        },

        // ユーザーメニューの表示・非表示
        userMenu: function() {
            var _class      = 'is-open';
            var _dropDown   = $('.js-dropdown');
            var _hoverFlg   = false;
            _dropDown.on({
                'click': function() {
                    var _this = $(this);
                    if (_this.hasClass(_class)) {
                        _this.removeClass(_class);
                    } else {
                        _this.addClass(_class);
                    }
                },
                'mouseenter': function() {
                    _hoverFlg = true;
                },
                'mouseleave': function() {
                    _hoverFlg = false;
                }
            });
            _body.on({
                'click': function() {
                    if (_hoverFlg === false) {
                        _dropDown.removeClass(_class);
                    }
                }
            });
        },

        // タブ
        tab: function() {
            var _pane   = $('.js-tab-pane');
            var _tab    = $('.js-tab');
            var _class  = 'is-active';
            _tab.on({
                'click': function() {
                    var _target = $(this).attr('href');
                    _pane.hide();
                    _tab.parent().removeClass(_class);
                    $(_target).show();
                    $(this).parent().addClass(_class);
                    return false;
                }
            });
        },

        // フラッシュメッセージの非表示
        flashMsgClose: function() {
            var _closeBtn = $('.js-flmsg-close');
            _closeBtn.on({
                'click': function() {
                    var _parent = $(this).parents('.flash-msg');
                    _parent.fadeOut();
                }
            });
        }
    };

    $(window).on({
        'load': function () {
            _adminize.initialize();
        },
        'resize': function () {
            _adminize.setSidebarHeight();
        }
    });

})(jQuery);
