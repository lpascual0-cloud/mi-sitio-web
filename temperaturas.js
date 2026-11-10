document.getElementById('btnConvertir').addEventListener('click', function () {
    const tempInput = document.getElementById('tempInput').value.trim();
    const tipoConversion = document.getElementById('tipoConversion').value;
    const resultadoDiv = document.getElementById('resultado');

    // Validación de campo vacío
    if (tempInput === '') {
        alert('Por favor, ingresa un número en el campo de temperatura.');
        resultadoDiv.style.display = 'none';
        return;
    }

    const tempVal = Number(tempInput);

    if (isNaN(tempVal)) {
        alert('Por favor, ingresa un número válido.');
        resultadoDiv.style.display = 'none';
        return;
    }

    let resultado = 0;
    let textoHTML = '';

    if (tipoConversion === 'cToF') {
        // Fórmula: Fahrenheit = (Celsius * 9 / 5) + 32
        resultado = (tempVal * 9 / 5) + 32;
        textoHTML = `
            <p style="margin: 5px 0;"><strong>Temperatura ingresada:</strong> ${tempVal} °C</p>
            <p style="margin: 5px 0;"><strong>Tipo de conversión:</strong> Celsius a Fahrenheit</p>
            <p style="margin: 5px 0; color: green;"><strong>Resultado:</strong> ${resultado.toFixed(2)} °F</p>
        `;
    } else if (tipoConversion === 'fToC') {
        // Fórmula: Celsius = (Fahrenheit - 32) * 5 / 9
        resultado = (tempVal - 32) * 5 / 9;
        textoHTML = `
            <p style="margin: 5px 0;"><strong>Temperatura ingresada:</strong> ${tempVal} °F</p>
            <p style="margin: 5px 0;"><strong>Tipo de conversión:</strong> Fahrenheit a Celsius</p>
            <p style="margin: 5px 0; color: green;"><strong>Resultado:</strong> ${resultado.toFixed(2)} °C</p>
        `;
    }

    resultadoDiv.innerHTML = textoHTML;
    resultadoDiv.style.display = 'block';
});