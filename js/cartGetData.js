let cart = new Vue({
    el: ".body-hook",
    data: {
      cart: null, // 购物车
      mayLike: [] // 猜你喜欢
    },
    filters: {
      rmb(val) {
         return `￥${val}.00`;
      }
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        })
    },
    methods: {
        conView() {
            axios.get('../api/cart.json').then((res) => {
                if (res.status === 200) {
                    this.mayLike = res.data.result.sameList;
                    this.cart = res.data.result.cart;
                }
            })
        }
    }
})