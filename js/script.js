console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
  data(){
    return{
      cards: [],
      newCard: ''
    }
  },
  created(){
    axios.get('http://localhost:8888/php-todo-list-json/api/').then(res => { this.cards = res.data });
  },
  methods: {
    addCard(){
      const data = {card: this.newCard};

      const config = {headers: {'Content-Type': 'multipart/form-data'}};
      axios.post('http://localhost:8888/php-todo-list-json/api/', data, config).then(res => {
        this.cards.push(res.data);
        this.newCard = '';
      })
    },
    // deleteCard(){
      
    // }
  }
}).mount('#root');