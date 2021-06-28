const precoPorPadrao = {
  baixo: 4,
  medio: 4,
  alto: 5.5,
};
module.exports = (standard, electricalProjectValue, area) => {
  return {
    name: "Projeto elétrico",
    totalBudget: electricalProjectValue ? electricalProjectValue : area * precoPorPadrao[standard],
    steps: []
  };
}