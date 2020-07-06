const app = new Vue({
    el: "#app",
    data: {
        products: [
            {
                id: 1,
                title: "三眼計時紳士錶",
                category: "經典錶款",
                content: "",
                description: "",
                imageUrl: "https://images.unsplash.com/photo-1578934856594-38a2a35cdf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
                enabled: 0, // 0 未啟用
                origin_price: 4990,
                price: 4290,
                unit: "支"
            },
            {
                id: 2,
                title: "奢華瑞士機械錶",
                category: "機械錶款",
                content: "",
                description: "",
                imageUrl: "https://images.unsplash.com/photo-1526045431048-f857369baa09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                enabled: 1, // 啟用
                origin_price: 388000,
                price: 372000,
                unit: "支"
            },
            {
                id: 3,
                title: "極簡皮革錶(黑)",
                category: "經典錶款",
                content: "",
                description: "",
                imageUrl: "https://images.unsplash.com/photo-1558959001-2ff734aac13d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                enabled: 0,
                origin_price: 3280,
                price: 2980,
                unit: "支"
            },
            {
                id: 4,
                title: "方形智慧錶(黑)",
                category: "智慧錶款",
                content: "",
                description: "",
                imageUrl: "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                enabled: 1,
                origin_price: 12990,
                price: 11990,
                unit: "支"
            },
            {
                id: 5,
                title: "運動風電子錶",
                category: "電子錶款",
                content: "",
                description: "",
                imageUrl: "https://images.unsplash.com/photo-1543956872-37cfc5474a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                enabled: 1,
                origin_price: 6900,
                price: 6480,
                unit: "支"
            }
        ],
        temProduct: {},
    },
    methods: {
        updateProduct() {
            if (this.temProduct.id) {
                const id = this.temProduct.id;
                this.products.forEach((item, i) => {
                    if (item.id === id) { // 假如 products.id === temProduct.id 相同
                        this.products[i] = this.temProduct;  // 原本資料列的 products = temProduct
                    }
                });
            }
            else {
                const id = new Date().getTime(); // 假如 products.id !== temProduct.id 取 unix time
                this.temProduct.id = id;
                this.products.push(this.temProduct); // 新增 temProduct 到 products list 上
            }
            this.temProduct = {}; // 清空新增欄位
            $('#productModal').modal('hide'); // 新增結束後關掉 poductModal
        },
        delProduct() {
            if (this.temProduct.id) {
                const id = this.temProduct.id;
                this.products.forEach((item, i) => { // 刪掉符合 id 的 products
                    if (item.id === id) { // 假如 products.id === temProduct.id 相同
                        this.products.splice(i, 1);
                        this.temProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide'); // 刪除結束後關掉 delProductModal
        },
        openModal(isNew, item) {
            switch (isNew) {
                case 'new':
                    this.temProduct = {
                        imageUrl: [],
                    };
                    $('#productModal').modal('show');
                    break;
                case 'edit':
                    this.temProduct = Object.assign({}, item); // 淺拷貝
                    $('#productModal').modal('show');
                    break;
                case 'delete':
                    $('#delProductModal').modal('show');
                    this.temProduct = Object.assign({}, item); // 淺拷貝
                    break;
                default:
                    break;
            }
        },
    },
});