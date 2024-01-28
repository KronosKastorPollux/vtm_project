import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import less from './assets/less/_all.less'
import { Row, Col } from 'ant-design-vue'

createApp(App)
.use(router)
.use(less)
.use(Col)
.use(Row)
.mount('#app')
