app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>

        <label for="quiz">Would you recomend this product?</label>
        <select id="quiz" v-model="quiz">
          <option>Definetely yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>

        <input class="button" type="submit" value="Submit">

    </form>`,

    data() {
        return {
            name: '',
            review: '',
            rating: null,
            quiz: ''
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating ===null) {
                alert('Review form incomplete, please fill out every field')
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                quiz: this.quiz,
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.quiz = ''
        }
    }
})