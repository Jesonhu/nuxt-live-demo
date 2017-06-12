new Vue({
    el: ".body-hook",
    data: {
        goods: null, // 商品详情
        sameList: [], // 相似产品
        hotSale: [], // 热销
        topicsRecommended: [] // 专题推荐
    },
    mounted() {
        this.$nextTick(() => {
            this.conView();
        });
    },
    filters: {
        rmb(val, str) {
            if (typeof str === 'undefined') {
                return `${val}.00`;
            } else {
                return `${str}${val}.00`;
            }
        },
        wan(val) {
            const nVal = Number(val);
            if (nVal >=1000) {
                return `999+`;
            } else {
                return val;
            }
        },
        time(val){
            let newDate = new Date();
            newDate.setTime(val);
            return newDate.toLocaleDateString();
        }
    },
    methods: {
        conView() {
            axios.get('/api/detail.json').then((res) => {
                if (res.status === 200) {
                    this.goods = res.data.result.goodsDetail;
                    this.sameList = res.data.result.sameList;
                    this.hotSale = res.data.result.hotSale;
                    this.topicsRecommended = res.data.result.topicsRecommended;
                }
            })
        },

        // 自定义日期格式
        formatDate(format) {
            Date.prototype.format = (format) => {
                var date = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                if (/(y+)/i.test(format)) {
                    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (var k in date) {
                    if (new RegExp("(" + k + ")").test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                    }
                }
                return format;
            }
        }
    }
})