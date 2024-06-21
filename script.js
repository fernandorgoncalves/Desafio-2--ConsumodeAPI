function buscarCep() {
    const cep = document.getElementById("cep").value;
    
    try {
        const resposta = fetch(`viacep.com.br/ws/01001000/json/`)
        console.log(resposta)
        location.reload(true)
        
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
     

}