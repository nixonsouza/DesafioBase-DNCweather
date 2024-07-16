


async function buscaCep(){
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        document.getElementById('logradouro').innerHTML = `${data.logradouro}`;
        document.getElementById('bairro').innerHTML = `${data.bairro}`;
        document.getElementById('localidade').innerHTML =`${data.uf}`;
    }
    catch (error) {
        alert('Erro ao buscar o CEP.');
        window.location.reload(); 
    }
}

async function prevTemp(){
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&timezone=auto`);
        const data = await response.json();
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const temperature = data.hourly.temperature_2m[currentHour];
        document.getElementById('temperature').innerHTML =`Previsão de tempo de acordo com a região: ${temperature} C`
    }
    catch(error){
        alert('Erro ao buscar Latitude e Longitude.');
        window.location.reload();
    }
}
document.getElementById('submitButton').addEventListener('click', function(){
    const inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = '';
    }

});
function handleSubmit(event) {
    event.preventDefault();
    buscaCep();
    prevTemp();
}