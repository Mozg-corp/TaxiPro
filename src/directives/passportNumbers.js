export default {
  mounted(el) {
    el.addEventListener('keyup', function good(e){
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }
      const len = el.value.length;
      if (len !== 1 || len !== 3) {
        if (e.keyCode === 47) {
          e.preventDefault();
        }
      }
      if (len === 4) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          el.value = el.value + ' ';
        }
      }
    });
  },
};
