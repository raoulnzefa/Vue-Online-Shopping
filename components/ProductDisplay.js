app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div  class="product-display">
        <div class="product-container">
            <div class="product-image" :class="{ 'out-of-stock-img': inventory <=0 }">
                <img v-bind:src="image">
            </div>
            <div class="product-info" >
                <h1>{{ title }}</h1>

                <product-details :details="details" > </product-details>

                <h2 v-if="onSaleValue"> {{ promotion }} On Sale! </h2>
                <h2 v-else="onSaleValue"> {{ promotion }} promotion ended </h2>

                <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
                <p v-else >Out of Stock</p>

                <p>Shipping:{{shipping}}</p>




                <div v-for="(variant, index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"
                class="color-circle"
                :style="{ backgroundColor: variant.color }">
                </div>

                <button 
                class="button"
                :class="{ disabledButton: inventory <= 0 }" 
                :disabled="inventory <= 0" 
                @click="addToCart">
                Add to cart
                </button>
                
                <button class="button" @click="removeFromCart">Remove</button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,

    data() {
        return {
            product:'Socks!',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            variants: [
              {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: true, },
              {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 50, onSale: false, },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
            console.log( this.variants[this.selectedVariant].id );
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
           return this.brand + ' ' + this.product 
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        promotion() {
            return this.variants[this.selectedVariant].color + ' ' + this.product + ' '
        },
        onSaleValue() {
            return this.variants[this.selectedVariant].onSale
        },
        shipping() {
            if (this.premium) {
                return 'Free!'
            }
            return '$2.99'
        }
    }

})