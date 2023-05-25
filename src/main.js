import { createApp } from 'vue'

import App from './App.vue';
import components from '@/components/UI';

const app = createApp(App);
components.forEach(component => {
    app.component(component.name, component);
})

app.mount('#app'); //создан экземпляр приложения и вмонтирован в корневой див с id = app
