Vue.component('search-form', {
    // props: ['userSearch'],
    data() {
        return {
            userSearch:''
        }
    },
  
    template: `
    <div>
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
        <input type="text" class="search-field" v-model="userSearch">
        <button class="btn-search" type="submit">
        <i class="fas fa-search"></i>
        </button>       
        </form>           
    </div>`
    });

