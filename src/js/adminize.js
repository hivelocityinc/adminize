import Adminize from './adminize.core';

(($) => {
  let adminize = new Adminize();
  $(window)
    .on('load', () => {
      adminize.initialize();
    })
    .on('scroll', () => {
      adminize.updateTableSections();
    })
    .on('resize', () => {
      adminize.setSidebarHeight();
      adminize.updateRowWidths();
    });
})(jQuery);
