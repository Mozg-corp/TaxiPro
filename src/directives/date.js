export default {
  mounted(el) {
    el.addEventListener('keyup', function(e) {
      if( e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      };

      let len = el.value.length;

      if(len !== 1 || len !== 3) {
        if(e.keyCode === 47) {
          e.preventDefault();
        }
      }
      if(len === 2) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          el.value = el.value+'/';
        }}

      if(len === 5) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          el.value = el.value+'/';
        }}
    });
  },
};
