new Vue({
    el: '.body-hook',
    data: {
        bannerList: [], // banner
        sort: [], // 分类
        filter: [], // 筛选
        goods: [] // 商品
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        });
    },
    filters: {
        rmb(val) {
            return '￥' + val + '.00';
        }
    },
    methods: {
        conView() {
            axios.get('../api/list.json').then((res) => {
                if (res.status === 200) {
                    this.bannerList = res.data.bannerList;
                    this.sort = res.data.sort;
                    this.filter = res.data.filter;
                    this.goods = res.data.goods;
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
})