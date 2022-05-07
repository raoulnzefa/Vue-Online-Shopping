app.component('review-list', {
    props: {
        reviews:{
            type: Array,
            required: true,
        }
    },
    template: 
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          He said "{{ review.review }}" and on asking if they'll recommend, they said "{{ review.quiz }}"
        </li>
      </ul>

    </div>  

    `
})