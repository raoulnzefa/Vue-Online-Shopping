const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },

        removeFromCart(id) {
            for( var i =0; i< this.cart.length; i++ ){
                if ( this.cart[i] === id) {
                    this.cart.splice(i,1);
                }
            }
        }
    }
    ,
})