/* =============================================
   AGRICULTURA SUSTENTÁVEL — SCRIPT.JS
============================================= */

const topics = {
  importancia: {
    icon: '🌾',
    title: 'Importância do Agro Sustentável',
    body: `
      <div class="highlight">
        "A agricultura alimenta o mundo. A agricultura sustentável garante que o mundo continue a ser alimentado."
      </div>

      <p>A agricultura sustentável é um dos pilares fundamentais para a sobrevivência da humanidade no século XXI. Ela representa a integração entre produção eficiente de alimentos e a preservação dos recursos naturais que tornam essa produção possível.</p>

      <h4>🌍 Por que é essencial?</h4>
      <ul>
        <li><strong>Segurança alimentar:</strong> Uma agricultura forte e sustentável garante o abastecimento de alimentos para uma população global que deve atingir 10 bilhões de pessoas até 2050.</li>
        <li><strong>Preservação dos ecossistemas:</strong> Práticas sustentáveis mantêm a biodiversidade, protegem nascentes e evitam a erosão do solo.</li>
        <li><strong>Economia resiliente:</strong> O agronegócio sustentável gera empregos estáveis, divisas e crescimento econômico de longo prazo sem esgotar a base produtiva.</li>
        <li><strong>Mudanças climáticas:</strong> A agricultura sustentável pode ser tanto parte da solução quanto da mitigação das mudanças climáticas, sequestro de carbono e redução de emissões.</li>
        <li><strong>Qualidade de vida:</strong> Alimentos produzidos com responsabilidade têm melhor qualidade nutricional e menos resíduos de agroquímicos.</li>
      </ul>

      <h4>🌿 O papel do Agro Forte</h4>
      <p>Um agro forte não é aquele que apenas produz em grande quantidade, mas aquele que produz com inteligência. Isso significa utilizar tecnologia de ponta para aumentar a produtividade por hectare, reduzindo a pressão sobre novas áreas a serem desmatadas.</p>

      <p>O Brasil, por exemplo, é um dos países com maior potencial agrícola do mundo e, ao mesmo tempo, possui o maior conjunto de leis ambientais entre as nações produtoras. O desafio é fazer esses dois mundos trabalharem juntos, e quando isso acontece, o resultado é um agro verdadeiramente forte e futuro.</p>

      <h4>📊 Dados que mostram a urgência</h4>
      <ul>
        <li>Mais de 820 milhões de pessoas ainda sofrem de fome no mundo (FAO, 2023).</li>
        <li>Cerca de 33% dos solos agrícolas do planeta estão degradados.</li>
        <li>A agricultura responde por aproximadamente 70% do consumo de água doce global.</li>
        <li>Práticas sustentáveis podem aumentar a produtividade em até 79% em pequenas propriedades.</li>
      </ul>

      <div class="highlight">
        Um agro alinhado ao meio ambiente não é fraqueza produtiva — é a única estratégia viável para garantir colheitas abundantes nas próximas décadas.
      </div>
    `
  },

  dicas: {
    icon: '💡',
    title: 'Dicas Práticas para uma Agricultura Sustentável',
    body: `
      <div class="highlight">
        "Pequenas mudanças de prática no campo geram grandes diferenças para o planeta e para a rentabilidade do produtor."
      </div>

      <p>A transição para uma agricultura sustentável não precisa ser radical nem imediata. Ela pode ser feita de forma gradual, incorporando boas práticas que beneficiam tanto o produtor quanto o meio ambiente.</p>

      <h4>🌱 Gestão do Solo</h4>
      <ul>
        <li><strong>Plantio direto:</strong> Reduz a erosão, mantém a umidade e aumenta a matéria orgânica do solo sem revolvê-lo.</li>
        <li><strong>Adubação verde:</strong> Cultivo de leguminosas entre safras para fixar nitrogênio e proteger o solo.</li>
        <li><strong>Compostagem:</strong> Transformar resíduos orgânicos em adubo, reduzindo custos e dependência de fertilizantes químicos.</li>
        <li><strong>Análise periódica do solo:</strong> Evita desperdício de insumos e garante que a correção seja feita na medida certa.</li>
      </ul>

      <h4>💧 Uso Eficiente da Água</h4>
      <ul>
        <li><strong>Irrigação por gotejamento:</strong> Entrega a água diretamente à raiz, reduzindo o desperdício em até 60%.</li>
        <li><strong>Captação de água da chuva:</strong> Cisternas e reservatórios permitem armazenar e reutilizar água em períodos de seca.</li>
        <li><strong>Monitoramento de umidade:</strong> Sensores de solo indicam o momento certo de irrigar, evitando excesso.</li>
      </ul>

      <h4>🌿 Biodiversidade e Integração</h4>
      <ul>
        <li><strong>Rotação de culturas:</strong> Alterna espécies para quebrar ciclos de pragas e doenças naturalmente.</li>
        <li><strong>Integração lavoura-pecuária-floresta (ILPF):</strong> Sistema que une agricultura, criação animal e árvores em um mesmo espaço, aumentando a produtividade.</li>
        <li><strong>Corredores ecológicos:</strong> Manter faixas de vegetação nativa entre áreas cultivadas protege polinizadores e fauna silvestre.</li>
        <li><strong>Controle biológico:</strong> Uso de predadores naturais e microrganismos para controlar pragas em vez de pesticidas.</li>
      </ul>

      <h4>⚡ Tecnologia e Inovação</h4>
      <ul>
        <li><strong>Agricultura de precisão:</strong> Drones, GPS e sensores permitem aplicar insumos apenas onde e quando necessário.</li>
        <li><strong>Energia solar no campo:</strong> Painéis solares reduzem custos de energia e pegada de carbono da propriedade.</li>
        <li><strong>Rastreabilidade digital:</strong> Certificações e sistemas digitais garantem transparência e acesso a mercados premium.</li>
      </ul>

      <div class="highlight">
        Adotar uma prática sustentável por mês já coloca qualquer propriedade rural no caminho certo. O mais importante é começar.
      </div>
    `
  },

  dificuldades: {
    icon: '⚠️',
    title: 'Dificuldades Atuais da Agricultura',
    body: `
      <div class="highlight">
        "Reconhecer os desafios é o primeiro passo para superá-los com inteligência e determinação."
      </div>

      <p>A agricultura moderna enfrenta um conjunto complexo de desafios que exige atenção tanto dos produtores quanto dos governos, da ciência e da sociedade como um todo. Ignorar essas dificuldades é comprometer o futuro da produção de alimentos.</p>

      <h4>🌡️ Mudanças Climáticas</h4>
      <ul>
        <li>Aumento da frequência e intensidade de secas, inundações e geadas atípicas.</li>
        <li>Deslocamento das estações chuvosas afetando o calendário agrícola.</li>
        <li>Surgimento de novas pragas e doenças favorecidas pelo aumento de temperatura.</li>
        <li>Redução da disponibilidade de água em bacias hidrográficas essenciais para a irrigação.</li>
      </ul>

      <h4>🧪 Degradação dos Recursos Naturais</h4>
      <ul>
        <li>Perda de fertilidade do solo por uso intensivo sem reposição adequada de nutrientes.</li>
        <li>Compactação do solo pelo excesso de maquinário pesado.</li>
        <li>Contaminação de lençóis freáticos por agroquímicos mal aplicados.</li>
        <li>Desmatamento para expansão de fronteiras agrícolas, reduzindo biodiversidade.</li>
      </ul>

      <h4>💰 Desafios Econômicos e Sociais</h4>
      <ul>
        <li>Alto custo de insumos (fertilizantes, defensivos, sementes) impactando a margem do produtor.</li>
        <li>Dificuldade de acesso ao crédito rural, especialmente para pequenos e médios agricultores.</li>
        <li>Dependência de commodities sujeitas à volatilidade de mercados internacionais.</li>
        <li>Êxodo rural: falta de atrativos para manter jovens no campo, gerando envelhecimento da mão de obra.</li>
      </ul>

      <h4>📜 Barreiras Regulatórias e de Mercado</h4>
      <ul>
        <li>Burocracia no licenciamento ambiental retardando implantação de projetos sustentáveis.</li>
        <li>Barreiras comerciais internacionais que exigem selos e certificações caros.</li>
        <li>Falta de assistência técnica pública para orientar produtores sobre boas práticas.</li>
        <li>Infraestrutura logística deficiente encarecendo o escoamento da produção.</li>
      </ul>

      <div class="highlight">
        Esses desafios não são instransponíveis, mas exigem união entre setor produtivo, academia, poder público e consumidores conscientes.
      </div>
    `
  },

  solucoes: {
    icon: '🔧',
    title: 'O Que Pode Ser Feito Para Contornar as Dificuldades',
    body: `
      <div class="highlight">
        "A crise ambiental e produtiva não tem uma solução — tem muitas. E elas estão ao alcance de quem age."
      </div>

      <p>Para cada desafio identificado, existem estratégias concretas e testadas que podem ser adotadas em diferentes escalas — da propriedade individual até políticas nacionais. A ação combinada é o que gera transformação real.</p>

      <h4>🏛️ Políticas Públicas e Incentivos</h4>
      <ul>
        <li><strong>Crédito verde:</strong> Linhas de financiamento com juros mais baixos para produtores que adotam práticas sustentáveis certificadas.</li>
        <li><strong>PSA (Pagamento por Serviços Ambientais):</strong> Remunerar produtores que preservam florestas, nascentes e biodiversidade em suas propriedades.</li>
        <li><strong>Simplificação regulatória:</strong> Desburocratizar o licenciamento ambiental para projetos comprovadamente sustentáveis.</li>
        <li><strong>Extensão rural pública:</strong> Ampliar a rede de assistência técnica para chegar até os menores produtores rurais.</li>
      </ul>

      <h4>🔬 Tecnologia e Pesquisa</h4>
      <ul>
        <li><strong>Biotecnologia responsável:</strong> Desenvolvimento de sementes mais resistentes à seca e a doenças, reduzindo o uso de água e pesticidas.</li>
        <li><strong>Agricultura de precisão acessível:</strong> Democratizar o acesso a drones, sensores e plataformas digitais para pequenos produtores.</li>
        <li><strong>Bioeconomia:</strong> Transformar resíduos agrícolas em biocombustíveis, bioplásticos e outros produtos de valor agregado.</li>
        <li><strong>Sistemas agroflorestais:</strong> Pesquisa e difusão de modelos que integram cultivo com reflorestamento.</li>
      </ul>

      <h4>🤝 Cooperação e Mercado</h4>
      <ul>
        <li><strong>Cooperativas sustentáveis:</strong> Organizar produtores em cooperativas para ter escala suficiente para investir em tecnologia e acessar mercados premium.</li>
        <li><strong>Certificações internacionais:</strong> Apoio governamental para que pequenos produtores consigam certificações como Rainforest Alliance, orgânico e Fairtrade.</li>
        <li><strong>Cadeias curtas de abastecimento:</strong> Feiras locais, CSAs e plataformas digitais que conectam produtor ao consumidor, reduzindo o desperdício.</li>
      </ul>

      <h4>🌱 Educação e Cultura</h4>
      <ul>
        <li>Incluir agricultura sustentável nos currículos escolares desde o ensino básico.</li>
        <li>Campanhas de conscientização para que o consumidor valorize e pague por produtos sustentáveis.</li>
        <li>Intercâmbio de experiências entre produtores que já adotam boas práticas.</li>
        <li>Plataformas de conhecimento aberto, em português, acessíveis ao produtor rural.</li>
      </ul>

      <div class="highlight">
        Cada real investido em agricultura sustentável hoje evita custos ambientais e econômicos dezenas de vezes maiores no futuro.
      </div>
    `
  },

  problemas: {
    icon: '🌡️',
    title: 'Riscos de uma Agricultura Não Sustentável',
    body: `
      <div class="highlight">
        "Uma colheita ganha hoje à custa da terra amanhã é uma dívida que as próximas gerações pagarão com juros."
      </div>

      <p>A agricultura praticada de forma insustentável gera consequências que vão muito além do campo. Seus impactos se espalham pelo clima, pela economia, pela saúde pública e pela estabilidade social — com efeitos que variam do imediato ao permanente.</p>

      <h4>⚡ Problemas a Curto Prazo (1 a 5 anos)</h4>
      <ul>
        <li><strong>Queda de produtividade:</strong> Solos esgotados produzem menos a cada ciclo, mesmo com mais insumos aplicados.</li>
        <li><strong>Aumento de pragas e doenças:</strong> A falta de biodiversidade cria condições ideais para surtos de pragas resistentes a pesticidas.</li>
        <li><strong>Contaminação local:</strong> Uso excessivo de agroquímicos contamina rios, poços e a saúde de populações rurais vizinhas.</li>
        <li><strong>Prejuízos econômicos:</strong> Eventos climáticos extremos, amplificados pelo desmatamento, causam perdas bilionárias de safra.</li>
        <li><strong>Conflitos por água:</strong> Captação excessiva de rios para irrigação gera tensões entre agricultores, cidades e outros usuários.</li>
      </ul>

      <h4>🌍 Problemas a Longo Prazo (10 a 50 anos)</h4>
      <ul>
        <li><strong>Desertificação:</strong> Regiões inteiras podem se tornar inaptas para qualquer cultura agrícola por erosão severa e perda de matéria orgânica.</li>
        <li><strong>Colapso de aquíferos:</strong> A sobreexploração de lençóis freáticos ameaça o abastecimento de água de cidades inteiras.</li>
        <li><strong>Extinção de polinizadores:</strong> A perda de abelhas e outros polinizadores compromete a produção de 75% das culturas alimentares mundiais.</li>
        <li><strong>Crise climática acelerada:</strong> O desmatamento e a emissão de metano por práticas pecuárias insustentáveis intensificam o aquecimento global, criando um ciclo vicioso.</li>
        <li><strong>Insegurança alimentar global:</strong> A combinação de solos degradados, clima instável e perda de biodiversidade pode levar a crises de fome em escala histórica.</li>
        <li><strong>Perda de soberania alimentar:</strong> Países que destruírem sua base produtiva ficarão dependentes de importações e sujeitos a pressões geopolíticas.</li>
      </ul>

      <h4>🧬 Impactos sobre a Saúde Humana</h4>
      <ul>
        <li>Alimentos com maior concentração de resíduos de pesticidas associados a doenças crônicas.</li>
        <li>Redução da diversidade alimentar aumentando deficiências nutricionais em populações vulneráveis.</li>
        <li>Surgimento de zoonoses e doenças emergentes facilitado pelo desmatamento e destruição de habitats.</li>
      </ul>

      <div class="highlight">
        A questão não é se a agricultura insustentável vai gerar problemas — ela já gera. A questão é se agiremos a tempo de evitar que esses problemas se tornem irreversíveis.
      </div>
    `
  }
};

// ── DOM REFS ──────────────────────────────
const modal        = document.getElementById('modal');
const modalClose   = document.getElementById('modalClose');
const modalIcon    = document.getElementById('modalIcon');
const modalTitle   = document.getElementById('modalTitle');
const modalBody    = document.getElementById('modalBody');

// ── OPEN MODAL ────────────────────────────
function openModal(topic) {
  const data = topics[topic];
  if (!data) return;
  modalIcon.textContent  = data.icon;
  modalTitle.textContent = data.title;
  modalBody.innerHTML    = data.body;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ── CLOSE MODAL ───────────────────────────
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// ── EVENTS ────────────────────────────────
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    openModal(card.dataset.topic);
  });
  // Keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(card.dataset.topic);
    }
  });
});

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
