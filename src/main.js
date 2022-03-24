class main {
    constructor(){
        this.productos = new Map();
        //this.venta = new Array(); //id : 1, cantidad, precio
        this.detalles = [2, 4, 6, 7, 8, 9];
        let btnadd = document.getElementById("btnadd");
        let btnSaveClient = document.getElementById("btnSaveClient");
        let btnSavePrduct = document.getElementById('btnSaveProduct');
        btnadd.addEventListener('click', this.add);
        btnSaveClient.addEventListener('click', this.addClientes);
        btnSavePrduct.addEventListener('click', this.addProductos);
    }

    add(){
        console.log('holis');
        let selProducts = document.getElementById('selProducts');
        let inpQuantity = document.getElementById('quantity');
        let table = document.getElementById('table');
        let row = table.insertRow(1);
        let cel1 = row.insertCell(0);
        let cel2 = row.insertCell(1);
        
        cel1.innerHTML =  selProducts.options[selProducts.selectedIndex].text;
        cel2.innerHTML =  inpQuantity.value;
        let productId = selProducts.options[selProducts.selectedIndex].value;
        console.log(this.productos);
        let info = {
            id : productId,
            quantity : inpQuantity,
            cost : this.productos.get(productId).cost
        }
        console.log(info);
    }

    addClientes(){
        let nameClient = document.getElementById('inpCName').value;
        let rfcClient = document.getElementById('inpCRFC').value;
        let zipcodeClient = document.getElementById('inpCZipcode').value;
        console.log(nameClient);
        console.log(rfcClient);
        console.log(zipcodeClient);
        let data = {
            name : nameClient,
            rfc : rfcClient,
            zipcode : zipcodeClient
        }
        console.log(data);

        fetch('http://localhost:1339/api/client',{
            method : 'POST',
            body : JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
        })
    }
    
    addProductos(){
        let nameProduct = document.getElementById('inpPName').value;
        let quantityProduct = document.getElementById('inpPQuant').value;
        let costProduct = document.getElementById('InpPCost').value;
        console.log(nameProduct);
        console.log(quantityProduct);
        console.log(costProduct);
        let data = {
            name : nameProduct,
            quantity : quantityProduct,
            cost : costProduct
        }
        console.log(data);

        fetch('http://localhost:1339/api/product', {
            method : 'POST',
            body : JSON.stringify(data),
            headers : {'Content-Type': 'application/json'}
        })
        .then (res => res.json())
        .then (res => {
            console.log(res);
        })
    }
}

let app = new main();