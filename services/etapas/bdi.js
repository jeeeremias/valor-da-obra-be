const PORCENTAGEM_POR_PADRAO = {
  baixo: 0.1,
  medio: 0.2,
  alto: 0.27,
};
module.exports = (standard, bdiValue, valorTotal) => {
  return {
    name: "BDI",
    totalBudget: bdiValue ? valorTotal * bdi / 100 : valorTotal * PORCENTAGEM_POR_PADRAO[standard],
    steps: []
  }
}