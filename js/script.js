
import { pizzeria } from './pizzeria.js'
const noVeganIngr =  [
  'salsiccia',
  'mozzarella',
  'salame',
  'salmone',
  'ricotta',
  'prosciutto',
  'speck',
  'tonno',
  'mozzarella di bufala'
 ]

const { createApp } = Vue;

createApp({

  data(){

    return{

      pizzeria,
      pizzaToSerach:'',
      onlyVeg: false

    }
  },

  methods:{
    isVegan(pizza){
      let vegan = true
      // verifico se gli ingredienti dell'oggetto pizza sono contenuti in noVeganIngr
      pizza.ingredienti.forEach(ingrediente => {
        if(noVeganIngr.includes(ingrediente)){
          vegan = false;
        }
      });

      return vegan;
    },

    searchVeg(){
      this.onlyVeg = true;
      this.pizzaToSerach = '';
    }
  },

  computed:{
    // le computed sono dei metodi che DEVONO avere un return e vengono lette nell'HTML come se fossere delle variabili
    // NON accettano parametri
    // reagiscono al modificarsi di un dato in essa contenuto
    pizzeFiltrate(){
      if(this.onlyVeg){
        return pizzeria.pizze.filter(pizza => this.isVegan(pizza));
      }
      return pizzeria.pizze.filter(pizza => pizza.nome_pizza.toLowerCase().includes(this.pizzaToSerach.toLowerCase()))
    }
  },

  mounted(){

    console.log(pizzeria)
  }
}).mount('#app');