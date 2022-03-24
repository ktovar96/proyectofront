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
            console.log(app.detalles);
            res.forEach(p => {
                app.productos.set(p.id, p);
                let option = document.createElement('option');
                option.text = p.name;
                option.value = p.id;
                selProducts.appendChild(option);
            })
        })
    }
}

new product();