import Adminize from './adminize.core';

(($) => {
  let adminize = new Adminize();
  $(window)
    .on('load', () => {
      adminize.initialize();
    })
    .on('resize', () => {
      adminize.setSidebarHeight();
    });
})(jQuery);
