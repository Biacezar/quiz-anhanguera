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
  "Rogerio": "Metódico e observador, o professor Rogerio  adora desafios. Ele costuma iniciar suas aulas com enigmas e situações problema do cotidiano, incentivando o raciocínio crítico. Apesar do jeito sério, é muito atencioso e gosta de ver seus alunos evoluindo passo a passo.",
  "Beatriz": "Com uma personalidade animada e comunicativa, a professora Bia acredita que a matemática pode ser divertida. Ela usa jogos, elementos do dia a dia e até memes para explicar conceitos complexos. É querida pelos alunos por sua paciência e pela forma descontraída com que ensina.",
  "Adriana": "Organizada e firme, tem um olhar atento para tudo o que acontece na escola. Sempre disposta a ouvir alunos e professores, busca equilíbrio e diálogo nas decisões. É exigente, mas muito justa, sendo considerada uma referência de liderança dentro da instituição.",
  "Vitor": "Calmo e apaixonado pela língua, adora literatura e sempre leva livros diferentes para inspirar os alunos. Suas aulas são cheias de debates sobre personagens, textos e propagandas, estimulando a interpretação e a escrita criativa. É conhecido pelo bom humor e pelas histórias curiosas que conta.",
  "Andre Mauricio": "Tranquilo e extremamente didático,  domina linguagens de programação. Ele tem um humor discreto e faz analogias criativas para ajudar os alunos a compreender conceitos complexos como APIs e bancos de dados.",
  "Helio": "Empolgado e tecnológico, André está sempre por dentro das novidades do mundo dos aplicativos. Incentiva os alunos a criar soluções úteis para problemas reais e adora projetos práticos em sala.",
  "Juliana": "Curiosa e enérgica, Laís transforma qualquer fenômeno físico em uma oportunidade para experimentos. Com seu jeito entusiasmado, faz os alunos enxergarem a física no cotidiano, desde o movimento dos carros até o funcionamento de aparelhos domésticos. Adora desafios e explicações visuais.",
  "Suzi": "Comunicativa e amigável,  conhece todos os alunos pelo nome e está sempre circulando pela escola para garantir a organização. Ela mantém o ambiente seguro, mas também acolhedor, conversando e aconselhando os estudantes quando precisam. É vista como uma “tia gente boa” pelos jovens."

};

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
