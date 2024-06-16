async function buscarCep(){
   var cep = document.getElementById("cep").value
    try{
        const response =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}