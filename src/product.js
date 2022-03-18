class product {
    constructor(){
        let selProducts = document.getElementById('#selProducts');
        this.seleccionarProductos();
    }

    seleccionarProductos(){
        fetch('http://localhost:1339/api/product', {
            method: 'GET'
        })
        .then (res => res.json())
        .then (res => {
            res.forEach(p => {
                let option = document.createElement('option');
                option.text = p.name;
                option.value = p.id;
                selProducts.appendChild(option);
            })
        })
    }
}

new product();