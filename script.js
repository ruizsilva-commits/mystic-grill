// Função que realiza o cálculo
function calcular() {
    const adultos = parseInt(document.getElementById('adultos').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const totalCarne = (adultos * 0.4) + (criancas * 0.2);
    const totalRefri = (adultos * 1.0) + (criancas * 0.5);

    const custoCarne = totalCarne * 45.00;
    const custoRefri = totalRefri * 8.00;
    const custoTotal = custoCarne + custoRefri;

    document.getElementById('resultado').innerHTML = `
        <h3>Estimativa do Churrasco:</h3>
        <p>🍖 Carne: ${totalCarne.toFixed(2)} kg (R$ ${custoCarne.toFixed(2)})</p>
        <p>🥤 Refrigerante: ${totalRefri.toFixed(2)} L (R$ ${custoRefri.toFixed(2)})</p>
        <hr>
        <p>💰 <strong>Custo Total:</strong> R$ ${custoTotal.toFixed(2)}</p>
    `;
}

document.getElementById('adultos').addEventListener('input', calcular);
document.getElementById('criancas').addEventListener('input', calcular);