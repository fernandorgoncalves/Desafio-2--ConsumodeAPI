async function buscarCepTempo() {
    const cep = document.getElementById("cep").value;
    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;
    let tempo = document.getElementById("tempo").value;

    try {
        const respostaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dadosCep = await respostaCep.json();

        document.getElementById("endereco").textContent = dadosCep.logradouro;
        document.getElementById("bairro").textContent = dadosCep.bairro;
        document.getElementById("estado").textContent = dadosCep.uf;

        const respostaTempo = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const dadosTempo = await respostaTempo.json();

        if (dadosTempo.hourly.temperature_2m.length > 0) {
            const firstTemp = dadosTempo.hourly.temperature_2m[0];
            document.getElementById("tempo").textContent = `Previsão de tempo de acordo com a região: ${firstTemp} º C`;          
            
        } else {
            document.getElementById("tempo").textContent = "Não dados disponivel"; 
        }
    } catch (error) {
        alert(error.message);
    }
    location.reload(none)
}
