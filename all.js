// var token = '8nj4f1UaMrMdNlhth1JqU0pSspMVyuFbaRgj0Dy8rTHpDQ27rPHOyBoNUfdO';
// axios.defaults.headers['Authorization'] = `Bearer ${token}`;
//var uuid = '1f1839a8-d78f-4fc7-b088-b55e63cc35a3';
var obj = {
    data:{
        uuid: '1f1839a8-d78f-4fc7-b088-b55e63cc35a3',
        products:[],
    },
    getData:function(){
        var vm = this;
        var url = "https://course-ec-api.hexschool.io/api/1f1839a8-d78f-4fc7-b088-b55e63cc35a3/ec/products";
        axios.get(url)
          .then(
            function(response){
                vm.data.products = response.data.data;
                vm.render();
            })
    },
    render:function(){
        var app = document.getElementById('app');
        var products = this.data.products;
        var str = '';
        products.forEach(function(item){
            str +=`
            <div class="card">
            <img src="${item.imageUrl[0]}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.content}</p>
            </div>
            </div>
            `;
        });
        app.innerHTML = str;
    }
}
obj.getData();