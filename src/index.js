import component from './vue-fusiontime-xt';

const VueFusiontimeXt = {
  component,
  install(VueInstance) {
    VueInstance.component(component.name, component);
  },
};

export default VueFusiontimeXt;

if ((typeof window === 'object') && window.Vue) {
  window.Vue.use(VueFusiontimeXt);
}
