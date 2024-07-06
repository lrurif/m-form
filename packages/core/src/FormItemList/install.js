const list = import.meta.globEager('./*/index.vue');

export default {
  install: (app) => {
    Object.values(list).forEach((d) => {
      if (d.default) {
        const { name } = d.default;
        app.component(name, d.default);
      }
    });
  },
};
