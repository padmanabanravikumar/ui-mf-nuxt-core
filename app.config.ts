import './assets/css/core.css';
import './assets/css/container.css';
import 'primeicons/primeicons.css';
import './assets/css/overrides.css';

export default defineAppConfig({
  routes: {
    core: [{
      label: 'Components',
      icon: 'cube',
      path: '/components',
    }]
  }
});
