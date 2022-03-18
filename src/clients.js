class clientes {
    constructor(){
        let selClient = document.getElementById('#selClient');
        this.obtenerClientes();
    }

    obtenerClientes(){
        // data = {
        //     name : 'Albert',
        //     rfc : 'gogog',
        //     zipcode : 28078
        // }
        fetch('http://localhost:1339/api/client',{
            method : 'GET',
            //body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            res.forEach(c => {
                let option = document.createElement('option');
                option.text = c.name;
                option.value = c.id;
                selClient.appendChild(option);
            });
        })
    }
}

new clientes();