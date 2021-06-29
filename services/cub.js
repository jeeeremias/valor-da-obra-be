const PROJECT_TYPES = {
  baixo: {
    R1: 1800.81,
    PP4: 1675.98,
    R8: 1597.61,
    PIS: 1272.01
  },
  medio: {
    R1: 2199.25,
    PP4: 2110.31,
    R8: 1829.52,
    PIS: 1771.04
  },
  alto: {
    R1: 2649.02,
    R8: 2192.11,
    R16: 2289.34
  }
}

module.exports = (estimateObject) => {
  return {value: PROJECT_TYPES[estimateObject.standard][estimateObject.projectType] * estimateObject.totalArea};
}