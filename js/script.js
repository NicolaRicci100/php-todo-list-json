console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks: []
    }
  },
  created(){
    axios.get('http://localhost:8888/php-todo-list-json/api/').then(res => { this.tasks = res.data });
  }
}).mount('#root');