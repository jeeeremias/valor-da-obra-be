const PORCENTAGEM_POR_PADRAO = {
  baixo: 0.2,
  medio: 0.3,
  alto: 0.4,
};
module.exports = (standard, valorTotal) => {
  return {
    name: "BDI",
    totalBudget: valorTotal * PORCENTAGEM_POR_PADRAO[standard],
    steps: []
  }
}