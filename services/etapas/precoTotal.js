const precoPorPadrao = {
  baixo: 1676.11,
  medio: 2087.90,
  alto: 2544.41
};

module.exports = (standard, type, totalArea) => {
  const valorTotal = precoPorPadrao[standard] * totalArea;
  if (type === 'S') {
    if (totalArea < 100) {
      return valorTotal - valorTotal * 0.0625;
    } else {
      return valorTotal * 0.13;
    };
  };
  return valorTotal;
};