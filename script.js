async function buscarCep() {
    const cep = document.getElementById("cep").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;    
    
    try {
        const response =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json();
        console.log(data);

        document.getElementById("rua").textContent =data.logradouro;
        document.getElementById("bairro").textContent=data.bairro;
        document.getElementById("uf").textContent =data.uf;
        
    } catch (error) {
        console.log(error)
        alert(error.message)
    }

    try {
        const resp =  await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
        const date = await resp.json();
        console.log(date);

        document.getElementById("tempo").innerHTML="";
        for (let index = 0; index < date.hourly.temperature_2m[0]; index++) {
        document.getElementById("tempo").innerHTML += `<div>Previsão de tempo de acordo com a região: ${date.hourly.temperature_2m[0]} C</div>`
        break;
        }
        
    } catch (error) {
        console.log(error)
        alert(error.message)
    }
    

}