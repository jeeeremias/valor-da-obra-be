const PORCENTAGEM = 0.0624;
module.exports = (valorTotal) => {
  return {
    name: "Instalação Elétrica",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}