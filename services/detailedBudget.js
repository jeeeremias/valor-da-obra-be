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
var bdi = require('./etapas/bdi');
var projetoArquitetonico = require('./etapas/projetoArquitetonico');
var projetoEletrico = require('./etapas/projetoEletrico');
var projetoHidraulico = require('./etapas/projetoHidraulico');
var projetoEstrutural = require('./etapas/projetoEstrutural');
var precoTotal = require('./etapas/precoTotal');

module.exports = (estimateObject) => {
  const valorTotal = precoTotal(estimateObject.standard, estimateObject.type, estimateObject.totalArea);
  const detailedBudget = [];

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
  detailedBudget.push(revestimento(valorTotal, estimateObject.floorArea));
  detailedBudget.push(acabamento(valorTotal));
  detailedBudget.push(vidros(valorTotal));
  detailedBudget.push(pintura(valorTotal));
  detailedBudget.push(servicosComplementares(valorTotal));
  if (estimateObject.bdi) {
    detailedBudget.push(bdi(estimateObject.standard, valorTotal));
  };
  if (estimateObject.architecturalProject) {
    detailedBudget.push(projetoArquitetonico(estimateObject.standard, estimateObject.architecturalProjectValue, estimateObject.totalArea))
  };
  if (estimateObject.electricalProject) {
    detailedBudget.push(projetoEletrico(estimateObject.standard, estimateObject.electricalProjectValue, estimateObject.totalArea))
  };
  if (estimateObject.hydraulicProject) {
    detailedBudget.push(projetoHidraulico(estimateObject.standard, estimateObject.hydraulicProjectValue, estimateObject.totalArea))
  };
  if (estimateObject.structuralProject) {
    detailedBudget.push(projetoEstrutural(estimateObject.standard, estimateObject.structuralProjectValue, estimateObject.totalArea))
  };

  return detailedBudget;
}