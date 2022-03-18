class main {
    constructor(){
        let btnadd = document.getElementById("btnadd");
        btnadd.addEventListener('click', this.add);
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
    }
}

new main();