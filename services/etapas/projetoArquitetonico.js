const precoPorPadrao = {
  baixo: 20,
  medio: 30,
  alto: 50,
};

module.exports = (standard, architecturalProjectValue, area) => {
  return {
    name: "Projeto arquitetônico",
    totalBudget: architecturalProjectValue ? architecturalProjectValue : area * precoPorPadrao[standard],
    steps: []
  }
}