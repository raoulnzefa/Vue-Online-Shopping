app.component('product-details', {
    data() {
        return {
        details: ['50% cotton', '30% wool', '20% polyester'],
        }
    },
    template:
    /*html*/
    `<div>
       <ul>
        <li v-for="detail in details">{{ detail }}</li>
       </ul>
    <div>`
})
