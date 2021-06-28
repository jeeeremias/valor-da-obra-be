const PORCENTAGEM = 0.0720;
module.exports = (valorTotal) => {
  return {
    name: "Instalação Elétrica",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "As instalações elétricas, são um conjunto de componentes elétricos que têm como finalidade proporcionar a utilização de energia elétrica."
  }
}