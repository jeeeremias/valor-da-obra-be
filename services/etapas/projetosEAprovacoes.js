const PORCENTAGEM = 0.0375;
module.exports = (valorTotal) => {
  return {
    name: "Projetos e Aprovações",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}