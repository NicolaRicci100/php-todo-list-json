console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks: []
    }
  },
}).mount('#root');