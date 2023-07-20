console.log('Vue JS OK');

// * Vue.js * //
const { createApp } = Vue;

createApp({
  data(){
    return{
      tasks:[
        "Black Lotus",
        "Mox Emerald",
        "Mox Jet",
        "Mox Pearl",
        "Mox Ruby",
        "Mox Sapphire",
        "Ancestral Recall",
        "Timetwister",
        "Time Walk"
      ]
    }
  }
}).mount('#root');