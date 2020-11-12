var projetosEAprovacoes = require('./etapas/projetosEAprovacoes');
var servicosPreliminares = require('./etapas/servicosPreliminares');
var fundacoes = require('./etapas/fundacoes');
var estrutura = require('./etapas/estrutura');
var alvenaria = require('./etapas/alvenaria');
var cobertura = require('./etapas/cobertura');
var hidraulica = require('./etapas/hidraulica');
var eletrica = require('./etapas/eletrica');
var instalacoesComplementares = require('./etapas/instalacoesComplementares');
var impermeabilizacao = require('./etapas/impermeabilizacao');
var esquadrias = require('./etapas/esquadrias');
var revestimento = require('./etapas/revestimento');
var acabamento = require('./etapas/acabamento');
var vidros = require('./etapas/vidros');
var pintura = require('./etapas/pintura');
var servicosComplementares = require('./etapas/servicosComplementares');

const precoPorPadrao = {
  baixo: 1238.15,
  medio: 1520.78,
  alto: 1831.59
}

module.exports = (areaTotal, areaUtil, padrao) => {
  const valorTotal = precoPorPadrao[padrao] * areaTotal;

  const detailedBudget = [];

  detailedBudget.push(projetosEAprovacoes(valorTotal));
  detailedBudget.push(servicosPreliminares(valorTotal));
  detailedBudget.push(fundacoes(valorTotal));
  detailedBudget.push(estrutura(valorTotal));
  detailedBudget.push(alvenaria(valorTotal));
  detailedBudget.push(cobertura(valorTotal));
  detailedBudget.push(hidraulica(valorTotal));
  detailedBudget.push(eletrica(valorTotal));
  detailedBudget.push(instalacoesComplementares(valorTotal));
  detailedBudget.push(impermeabilizacao(valorTotal));
  detailedBudget.push(esquadrias(valorTotal));
  detailedBudget.push(revestimento(valorTotal, areaUtil));
  detailedBudget.push(acabamento(valorTotal));
  detailedBudget.push(vidros(valorTotal));
  detailedBudget.push(pintura(valorTotal));
  detailedBudget.push(servicosComplementares(valorTotal));

  return detailedBudget;
}