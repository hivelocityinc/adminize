export default class Adminize {

  initialize () {
    this.setSidebarHeight();
    this.setDisabled();
    this.sidebarToggle();
    this.sidebarParentMenu();
    this.userMenu();
    this.tab();
    this.flashMsgClose();
    this.dropdown();
    this.appendTableSection();
  };

  setSidebarHeight () {
    var _windowHeight = $(window).height();
    let _headerHeight = $('.js-headbar').height();
    var _resultHeight = _windowHeight - _headerHeight;
    $('.js-scroll-wrap').height(_resultHeight);
  };

  setDisabled () {
    let _input = $('input:disabled');
    _input.parent('label').addClass('disabled');
  };

  sidebarToggle () {
    let _toggle = $('.js-head-toggle');
    let _class = 'is-sidebar-open';
    let _body = $('body');
    _toggle.on('click', () => {
      if (_body.hasClass(_class)) {
        _body.removeClass(_class);
      } else {
        _body.addClass(_class);
      }
    });
  };

  sidebarParentMenu () {
    let _btn = $('.js-side-parent');
    let _menu = $('.child-menu');
    let _class = 'is-open';
    _btn.on('click', (event) => {
      let _this = $(event.currentTarget);
      if (_this.hasClass(_class)) {
        _this.next(_menu).slideUp('fast', () => {
          _this.removeClass(_class);
        });
      } else {
        _this.next(_menu).slideDown('fast', () => {
          _this.addClass(_class);
        });
      }
    });
  };

  userMenu () {
    let _class = 'is-open';
    let _dropDown = $('.js-dropdown');
    let _hoverFlg = false;
    let _body = $('body');

    _dropDown
      .on('click', (event) => {
        let _this = $(event.currentTarget);
        if (_this.hasClass(_class)) {
          _this.removeClass(_class);
        } else {
          _this.addClass(_class);
        }
      })
      .on('mouseenter', () => {
        _hoverFlg = true;
      })
      .on('mouseleave', () => {
        _hoverFlg = false;
      });

    _body.on('click', () => {
      if (_hoverFlg === false) {
        _dropDown.removeClass(_class);
      }
    });
  };

  tab () {
    let _pane = $('.js-tab-pane');
    let _tab = $('.js-tab');
    let _class = 'is-active';
    _tab.on('click', (event) => {
      let _this = $(event.currentTarget);
      let _target = _this.attr('href');
      _pane.hide();
      $(_target).show();
      _tab.parent().removeClass(_class);
      _this.parent().addClass(_class);
      return false;
    });
  };

  flashMsgClose () {
    let _closeBtn = $('.js-flmsg-close');
    _closeBtn.on('click', (event) => {
      let _this = $(event.currentTarget);
      let _parent = _this.parents('.flash-msg');
      _parent.fadeOut();
    });
  };

  dropdown () {
    let _toggle = $('.js-dropdown-toggle');
    let _allParent = $('.dropdown-group');
    let _openClass = 'is-open';
    let _hoverFlg = false;
    let _body = $('body');

    _toggle.on('click', (event) => {
      let _this = $(event.currentTarget);
      let _parent = _this.parent('.dropdown-group');
      if (_parent.hasClass(_openClass)) {
        _parent.removeClass(_openClass);
      } else {
        _allParent.removeClass(_openClass);
        _parent.addClass(_openClass);
      }
    })
    .on('mouseenter', () => {
      _hoverFlg = true;
    })
    .on('mouseleave', () => {
      _hoverFlg = false;
    });
    _body.on('click', () => {
      if (_hoverFlg === false) {
        _allParent.removeClass(_openClass);
      }
    });
  };

  updateTableSections () {
    $('.ts-table-section').each(function (index, table) {
      const verticalOffset = 60;
      let $table = $(table);
      let toffset = $(table).offset();
      let scrollTop = $(window).scrollTop() + verticalOffset;
      let rows = $table.find('.ts-row-section');
      let frows = $table.find('.ts-row-fixed');

      rows.each(function (index, row) {
        let $row = $(row);
        let roffset = $row.offset();
        let hpoint = (index + 1 === rows.length) ? (toffset.top + $table.height()) : ($(rows[index + 1]).offset().top);
        let voffset;

        if ((scrollTop > roffset.top) && (scrollTop < hpoint)) {
          voffset = Math.max(0, (scrollTop - (hpoint - $row.height())));
          $(frows[index]).css('visibility', 'visible')
                         .css('top', verticalOffset - voffset);
        } else {
          $(frows[index]).css('visibility', 'hidden');
        }
      });
    });
  }

  updateRowWidths () {
    $('.ts-table-section').each(function (index, table) {
      let $table = $(table);
      let rows = $table.find('.ts-row-section');
      let frows = $table.find('.ts-row-fixed');

      rows.each(function (index, row) {
        let cells = $(row).find('th,td');
        $(frows[index]).find('th,td').each(function (index, ccell) {
          $(ccell).width($(cells[index]).width())
                  .height($(cells[index]).height());
        });
      });
    });
  }

  appendTableSection () {
    const verticalOffset = 60;
    $('.ts-table-section').each(function (index, table) {
      $(table).find('.ts-row-section').each(function (index, row) {
        let $row = $(row);
        let crow = $row.clone()
                       .removeClass('ts-row-section')
                       .addClass('ts-row-fixed')
                       .css('top', verticalOffset)
                       .appendTo($row.parent());
        let cells = $row.find('th,td');
        $(crow).find('th,td').each(function (index, ccell) {
          $(ccell).width($(cells[index]).width())
                  .height($(cells[index]).height());
        });
      });

      $('<tr></tr>').css({
        'position': 'fixed',
        'visibility': 'hidden'
      }).appendTo(table);
    });
  }
};
