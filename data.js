// Dados compartilhados: mapeamentos de nomes para imagens e descrições
const nameToImage = {
  "Rogerio": "rogerio.jpg",
  "Beatriz": "beatriz.jpg",
  "Adriana": "adriana.jpg",
  "Vitor": "vitor.jpg",
  "Andre Mauricio": "andremauricio.jpg",
  "Helio": "helio.jpg",
  "Juliana": "juliana.jpg",
  "Suzi": "suzi.jpg"
};

const nameToDesc = {const nameToDesc = {
  const nameToDesc = {
  "Rogerio": "Você é animado, esportivo e sempre pronto para ajudar!",
  "Beatriz": "Você é dedicada, organizada e adora ensinar.",
  "Adriana": "Você é prática, eficiente e ótima em resolver problemas.",
  "Vitor": "Você é comunicativo, criativo e gosta de desafios.",
  "Andre Mauricio": "é um professor de DS super agitado, interativo e sempre bem-humorado. Prestativo e apaixonado por tecnologia, especialmente por linguagens de programação, ele transforma cada aula em algo leve, prático e divertido.",
  "Helio": "Você é parceiro, prestativo e sempre disposto a colaborar.",
  "Juliana": "Você é empática, sensível e valoriza o trabalho em equipe.",
  "Suzi": "Você é atenciosa, cuidadosa e sempre pronta para ouvir."

function getImageCandidates(name) {
  // retorna uma lista de caminhos possíveis para a imagem do nome
  const base = (nameToImage[name] || name.toLowerCase().replace(/\s+/g, ''));
  return [
    `imagens/${base}`,
    `imagens/${base.replace(/\.jpg$|\.jpeg$/,'')}.jpg`,
    `imagens/${base.replace(/\.jpg$|\.jpeg$/,'')}.jpeg`,
    `imagens/default.svg`
  ];
}

// torna as variáveis acessíveis globalmente (já são, por serem no escopo global)
