new Vue({
    el: ".header-hook",
    data: {
        searchHotKeyList: [],
        tabNav: []
    },
    mounted: function() {
        this.$nextTick(() => {
            this.searchView();
        });
    },
    methods: {
        searchView() {
            axios.get('../api/common.json').then((res) => {
                if (res.status === 200) {
                    this.searchHotKeyList = res.data.result.SearchWordsList;
                    this.tabNav = res.data.result.navList;
                }
            })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
});

new Vue({
    el: ".footer-hook",
    data: {
        footerList: []
    },
    mounted: function() {
        this.$nextTick(() => {
            this.searchView();
        });
    },
    methods: {
        searchView() {
            axios.get('../api/common.json').then((res) => {
                if (res.status === 200) {
                    this.footerList = res.data.result.footerList;
                }
            })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
});