class main {
    constructor(){
        this.productos = new Map();
        this.venta = new Array(); 
        this.detalles = [2, 4, 6, 7, 8, 9];
        let btnadd = document.getElementById("btnadd");
        let btnSaveClient = document.getElementById("btnSaveClient");
        let btnSavePrduct = document.getElementById('btnSaveProduct');
        let btnSaveInvoice = document.getElementById('btnSaveInvoice');
        btnadd.addEventListener('click', this.add);
        btnSaveClient.addEventListener('click', this.addClientes);
        btnSavePrduct.addEventListener('click', this.addProductos);
        btnSaveInvoice.addEventListener('click', this.addInvoiceDetails);
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
        console.log(app.productos);
        let info = {
            id : productId,
            quantity : inpQuantity.value,
            cost : app.productos.get(parseInt(productId)).cost
        }
        app.venta.push(info);
        console.log(app.venta);
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
        });
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
        });
    }

    _operacionTotal(){
        let sum = 0;
        app.venta.forEach(p => {
            let mult = p.quantity * p.cost;
            sum += mult; 
        });
        console.log(sum);
        return sum;
    }

    _tax(total){
        return total * 0.16;
    }

    addInvoiceDetails(){
        let datetime = document.getElementById('inpDate').value;
        let clientId = document.getElementById('selClient').value;
        let total = app._operacionTotal();
        let info = {
            client_id: clientId,
            total: total,
            tax: app._tax(total),
            dato: datetime,
            productos: app.venta 
        }
        console.log(info);
    }
}

let app = new main();