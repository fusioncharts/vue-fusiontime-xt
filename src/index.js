import Vue from 'vue';
import component from './VueFusionTime';

const VueFusionTime = {
  component,
  install(VueInstance) {
    VueInstance.component(component.name, component);
  },
};

export default VueFusionTime;

if ((typeof window !== 'undefined') && window.Vue) {
  Vue.use(VueFusionTime);
}
