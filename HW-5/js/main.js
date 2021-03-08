const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        imgCatalog: 'https://placehold.it/200x150',
        products: [],
        text_searchLine: '',
        filtered: [],
        showCart: false,
        cartItems: [],
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product)
        },

        filter(){
            let regexp = new RegExp(this.text_searhLine, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
          },
    },

    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        console.log('created');
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            });
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        // console.log('mounted');
        // this.getJson(`${API + this.cartUrl}`)
        // .then(data => {
        //   for (let el of data.contents) {
        //     this.cartItems.push(el);
        //   }
        // });
      this.getJson(`${API + this.catalogUrl}`)
        .then(data => {
          for (let el of data) {
            // this.products.push(el);
            this.filtered.push(el);
          }
        });
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('beforeDestroy');
    }
});
