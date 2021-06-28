const precoPorPadrao = {
  baixo: 4,
  medio: 4,
  alto: 5,
};
module.exports = (standard, hydraulicProjectValue, area) => {
  return {
    name: "Projeto hidráulico",
    totalBudget: hydraulicProjectValue ? hydraulicProjectValue : area * precoPorPadrao[standard],
    steps: []
  }
}