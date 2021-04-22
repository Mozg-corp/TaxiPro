export default {
  mounted(el) {
    el.addEventListener('keyup', (e) => {
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }

      const len = el.value.length;

      if (len !== 1 || len !== 3) {
        if (e.keyCode === 47) {
          e.preventDefault();
        }
      }
      if (len === 2) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          // eslint-disable-next-line no-param-reassign
          el.value += '/';
        }
      }
      if (len === 5) {
        if (e.keyCode !== 8 && e.keyCode !== 46) {
          // eslint-disable-next-line no-param-reassign
          el.value += '/';
        }
      }
    });
  },
};
