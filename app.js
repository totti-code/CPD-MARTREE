const $ = (id) => document.getElementById(id);

function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

const SECTORS = [
  { key:"donos",     label:"Donos da Empresa", dot:"rgba(255,183,3,0.95)" },
  { key:"diretoria", label:"Diretoria",        dot:"rgba(76,201,240,0.95)" },
  { key:"financeiro",label:"Financeiro",       dot:"rgba(45,212,191,0.95)" },
  { key:"rh",        label:"Recursos Humanos (RH)", dot:"rgba(168,85,247,0.95)" },
  { key:"ti",        label:"Tecnologia da Informação (T.I)", dot:"rgba(59,130,246,0.95)" },
  { key:"cpd",       label:"CPD",              dot:"rgba(244,63,94,0.95)" },
  { key:"marketing", label:"Marketing",        dot:"rgba(34,197,94,0.95)" },
];

// =====================
// DADOS (edite aqui)
// =====================
const pessoas = [
  // DONOS
  {
    id: "itamar",
    nome: "Sr. Itamar",
    cargo: "Sócio Proprietário",
    dept: "donos",
    nivel: "Direção",
    mini: "Define estratégias e decisões principais da empresa.",
    avatar: "assets/itamar.jpg",
    badges: ["Estratégia", "Decisões", "Gestão"],
    sobre: "Responsável por decisões estratégicas, direcionamento do negócio e acompanhamento geral das operações.",
    responsabilidades: [
      "Definir diretrizes e prioridades",
      "Acompanhar resultados e indicadores",
      "Aprovar investimentos e mudanças",
      "Garantir crescimento sustentável"
    ],
    ferramentas: ["Relatórios", "Reuniões", "Indicadores"],
    email: "itamar@empresa.com",
    ramal: "100",
    turno: "Comercial",
    projetos: ["Planejamento anual", "Expansão e melhorias"]
  },
  {
    id: "virginia",
    nome: "Dona Virginia",
    cargo: "Sócia Proprietária",
    dept: "donos",
    nivel: "Direção",
    mini: "Apoia decisões, cultura e organização geral da empresa.",
    avatar: "assets/virginia.jpg",
    badges: ["Gestão", "Cultura", "Organização"],
    sobre: "Atua no direcionamento da empresa, apoio administrativo e organização de processos.",
    responsabilidades: [
      "Acompanhar rotinas administrativas",
      "Apoiar decisões e prioridades",
      "Garantir padrões internos",
      "Apoiar setores e demandas críticas"
    ],
    ferramentas: ["Relatórios", "Documentos", "Rotinas internas"],
    email: "virginia@empresa.com",
    ramal: "100",
    turno: "Comercial",
    projetos: ["Organização de processos", "Padronização interna"]
  },

  // DIRETORIA
  {
    id: "rogerio",
    nome: "Rogério",
    cargo: "Diretor Geral",
    dept: "diretoria",
    nivel: "Direção",
    mini: "Coordena setores e garante metas e alinhamento geral.",
    avatar: "assets/rogerio.jpg",
    badges: ["Gestão", "Metas", "Coordenação"],
    sobre: "Responsável por alinhar setores, acompanhar metas e tomar decisões gerenciais para manter a empresa rodando com eficiência.",
    responsabilidades: [
      "Coordenar setores e prioridades",
      "Acompanhar metas, prazos e resultados",
      "Aprovar processos e rotinas",
      "Resolver gargalos operacionais"
    ],
    ferramentas: ["Dashboards", "Relatórios", "Reuniões de alinhamento"],
    email: "rogerio@empresa.com",
    ramal: "110",
    turno: "Comercial",
    projetos: ["Melhorias operacionais", "Plano de metas"]
  },

  // FINANCEIRO
  {
    id: "jakeline",
    nome: "Jakeline",
    cargo: "Financeiro",
    dept: "financeiro",
    nivel: "Coordenação",
    mini: "Rotinas financeiras, conferência e organização de pagamentos.",
    avatar: "assets/jakeline.jpg",
    badges: ["Contas", "Conferência", "Organização"],
    sobre: "Atua nas rotinas financeiras da empresa, garantindo conferência, organização e cumprimento de prazos.",
    responsabilidades: [
      "Contas a pagar e a receber",
      "Conferências e fechamentos",
      "Organização de documentos",
      "Suporte financeiro interno"
    ],
    ferramentas: ["Planilhas", "Sistema financeiro", "Relatórios"],
    email: "jakeline@empresa.com",
    ramal: "201",
    turno: "Comercial",
    projetos: ["Padronização de conferências", "Organização de fluxos"]
  },
  {
    id: "rayssa",
    nome: "Rayssa",
    cargo: "Financeiro",
    dept: "financeiro",
    nivel: "Operacional",
    mini: "Apoio em controles e lançamentos financeiros.",
    avatar: "assets/rayssa.jpg",
    badges: ["Lançamentos", "Controle", "Apoio"],
    sobre: "Auxilia no controle financeiro, lançamentos e suporte em rotinas do setor.",
    responsabilidades: [
      "Lançamentos e controles",
      "Apoio no fechamento",
      "Organização e validação",
      "Contato interno para ajustes"
    ],
    ferramentas: ["Planilhas", "Sistema financeiro"],
    email: "rayssa@empresa.com",
    ramal: "202",
    turno: "Comercial",
    projetos: ["Apoio em relatórios", "Controles semanais"]
  },
  {
    id: "luana",
    nome: "Luana",
    cargo: "Financeiro",
    dept: "financeiro",
    nivel: "Operacional",
    mini: "Rotinas do financeiro e suporte em pagamentos/recebimentos.",
    avatar: "assets/luana.jpg",
    badges: ["Pagamentos", "Recebimentos", "Rotina"],
    sobre: "Apoia rotinas de pagamento/recebimento, conferências e organização financeira.",
    responsabilidades: [
      "Apoio em contas a pagar/receber",
      "Organizar comprovantes e documentos",
      "Apoiar conferências",
      "Acompanhar pendências"
    ],
    ferramentas: ["Planilhas", "Sistema financeiro", "E-mail"],
    email: "luana@empresa.com",
    ramal: "203",
    turno: "Comercial",
    projetos: ["Organização de documentos", "Rotina de pendências"]
  },

  // RH
  {
    id: "jociely",
    nome: "Jociely",
    cargo: "Recursos Humanos (RH)",
    dept: "rh",
    nivel: "Coordenação",
    mini: "Cuida do time: processos, admissões, rotinas e suporte interno.",
    avatar: "assets/jociely.jpg",
    badges: ["Pessoas", "Processos", "Rotinas"],
    sobre: "Responsável por processos do RH, suporte aos colaboradores e organização das rotinas do setor.",
    responsabilidades: [
      "Admissão e documentação",
      "Apoio a colaboradores",
      "Organização de rotinas do RH",
      "Comunicação interna"
    ],
    ferramentas: ["Planilhas", "Sistemas internos", "Documentos"],
    email: "jociely@empresa.com",
    ramal: "301",
    turno: "Comercial",
    projetos: ["Padronização de processos", "Rotinas de atendimento interno"]
  },
  {
    id: "alani",
    nome: "Alani",
    cargo: "Recursos Humanos (RH)",
    dept: "rh",
    nivel: "Operacional",
    mini: "Apoio em rotinas e controles do RH.",
    avatar: "assets/alani.jpg",
    badges: ["Controle", "Apoio", "Organização"],
    sobre: "Apoia as rotinas do RH, controles e organização de documentação.",
    responsabilidades: [
      "Organização de documentos",
      "Apoio em controles",
      "Suporte em demandas do setor",
      "Acompanhamento de solicitações"
    ],
    ferramentas: ["Planilhas", "Documentos", "E-mail"],
    email: "alani@empresa.com",
    ramal: "302",
    turno: "Comercial",
    projetos: ["Controle de solicitações", "Apoio a rotinas"]
  },
  {
    id: "beatriz",
    nome: "Beatriz",
    cargo: "Recursos Humanos (RH)",
    dept: "rh",
    nivel: "Operacional",
    mini: "Apoio no atendimento interno e organização do RH.",
    avatar: "assets/beatriz.jpg",
    badges: ["Atendimento", "Rotina", "Organização"],
    sobre: "Auxilia no atendimento interno, organização e rotinas administrativas do RH.",
    responsabilidades: [
      "Atendimento a solicitações internas",
      "Organização e conferência",
      "Apoio em processos",
      "Comunicação e registros"
    ],
    ferramentas: ["Planilhas", "Documentos", "Sistemas internos"],
    email: "beatriz@empresa.com",
    ramal: "303",
    turno: "Comercial",
    projetos: ["Apoio em processos", "Organização semanal"]
  },

  // TI
  {
    id: "felipe_ti",
    nome: "Felipe",
    cargo: "T.I / Suporte",
    dept: "ti",
    nivel: "Técnico",
    mini: "Suporte técnico, resolução de incidentes e apoio aos usuários.",
    avatar: "assets/felipe.jpg",
    badges: ["Suporte", "Infra", "Redes"],
    sobre: "Atua no suporte técnico e infraestrutura, garantindo que sistemas e equipamentos funcionem corretamente.",
    responsabilidades: [
      "Atender chamados e incidentes",
      "Manutenção de computadores e periféricos",
      "Apoio a PDVs e lojas",
      "Documentar procedimentos"
    ],
    ferramentas: ["Windows", "Acesso remoto", "Mikrotik", "Checklist TI"],
    email: "felipe@empresa.com",
    ramal: "401",
    turno: "Comercial",
    projetos: ["Padronização de máquinas", "Melhorias em rede"]
  },
  {
    id: "ismael_ti",
    nome: "Ismael",
    cargo: "T.I / Infra & Redes",
    dept: "ti",
    nivel: "Técnico",
    mini: "Redes, links, segmentação e boas práticas de segurança.",
    avatar: "assets/ismael.jpg",
    badges: ["Redes", "VLAN", "Segurança"],
    sobre: "Responsável por redes, links e configurações para manter conectividade e segurança do ambiente.",
    responsabilidades: [
      "Gerenciar links e roteadores",
      "Configurar VLAN e regras de acesso",
      "Monitorar performance",
      "Apoiar expansões e padronizações"
    ],
    ferramentas: ["Mikrotik", "Switch/Firewall", "Monitoramento"],
    email: "ismael@empresa.com",
    ramal: "402",
    turno: "Comercial",
    projetos: ["Segmentação de rede", "Padronização Wi-Fi"]
  },

  // CPD
  {
    id: "maria_cpd",
    nome: "Maria",
    cargo: "CPD / Sistemas",
    dept: "cpd",
    nivel: "Operacional",
    mini: "Apoio em sistemas, rotinas e atendimento interno.",
    avatar: "assets/maria.jpg",
    badges: ["Sistemas", "Rotinas", "Atendimento"],
    sobre: "Atua com foco em rotinas operacionais do CPD e suporte relacionado a sistemas internos.",
    responsabilidades: [
      "Apoiar usuários em sistemas",
      "Acompanhar rotinas do CPD",
      "Abrir e acompanhar chamados com fornecedores",
      "Documentar soluções recorrentes"
    ],
    ferramentas: ["Sistemas internos", "Planilhas", "Base de conhecimento"],
    email: "maria@empresa.com",
    ramal: "501",
    turno: "Comercial",
    projetos: ["Rotinas do CPD", "Melhoria de processos"]
  },
  {
    id: "anderson_cpd",
    nome: "Anderson",
    cargo: "CPD / Campo & Hardware",
    dept: "cpd",
    nivel: "Técnico",
    mini: "Suporte presencial e manutenção de hardware quando necessário.",
    avatar: "assets/anderson.jpg",
    badges: ["Campo", "Hardware", "PDV"],
    sobre: "Atua em demandas presenciais, instalação e manutenção de equipamentos e suporte operacional.",
    responsabilidades: [
      "Suporte presencial em loja",
      "Troca/instalação de hardware",
      "Apoio a impressoras e periféricos",
      "Testes e validação pós-atendimento"
    ],
    ferramentas: ["Checklists", "Ferramentas de manutenção", "Acesso remoto"],
    email: "anderson@empresa.com",
    ramal: "502",
    turno: "Comercial",
    projetos: ["Padronização de periféricos", "Mapeamento de falhas"]
  },
  {
    id: "gladstone_cpd",
    nome: "Gladstone",
    cargo: "CPD / Coordenação",
    dept: "cpd",
    nivel: "Coordenação",
    mini: "Organiza prioridades e garante o padrão de atendimento do setor.",
    avatar: "assets/gladstone.jpg",
    badges: ["Gestão", "Prioridades", "Processos"],
    sobre: "Coordena o CPD, define prioridades, acompanha indicadores e padroniza atendimento.",
    responsabilidades: [
      "Definir prioridades e fluxo de atendimento",
      "Acompanhar indicadores e SLAs",
      "Alinhar demandas com setores",
      "Garantir padrão de atendimento"
    ],
    ferramentas: ["Gestão de chamados", "Dashboards", "Procedimentos internos"],
    email: "gladstone@empresa.com",
    ramal: "503",
    turno: "Comercial",
    projetos: ["Padronização do atendimento", "Rotinas e checklists"]
  },

  // MARKETING
  {
    id: "larissa_mkt",
    nome: "Larissa",
    cargo: "Marketing",
    dept: "marketing",
    nivel: "Operacional",
    mini: "Criação, divulgação e apoio na comunicação da marca.",
    avatar: "assets/larissa.jpg",
    badges: ["Conteúdo", "Design", "Comunicação"],
    sobre: "Responsável por comunicação, criação de materiais e divulgação, mantendo consistência da marca.",
    responsabilidades: [
      "Criar peças e materiais",
      "Apoiar comunicação interna e externa",
      "Organizar calendário de conteúdo",
      "Acompanhar demandas de divulgação"
    ],
    ferramentas: ["Canva/Design", "Redes sociais", "Drive/Documentos"],
    email: "larissa@empresa.com",
    ramal: "601",
    turno: "Comercial",
    projetos: ["Calendário de conteúdo", "Campanhas internas"]
  },
];

// =====================
// RENDER / FILTROS
// =====================
const sectionsEl = $("sections");
const searchEl = $("search");
const btnClear = $("btnClear");
const statTotal = $("statTotal");
const statSectors = $("statSectors");

let currentFilter = "all";
let currentQuery = "";

function normalize(s){
  return (s || "")
    .toString()
    .trim()
    .toLowerCase();
}

function matchesQuery(p, q){
  if(!q) return true;
  const hay = [
    p.nome, p.cargo, p.dept, p.nivel,
    ...(p.badges || []),
    p.mini, p.sobre,
    ...(p.responsabilidades || []),
    ...(p.ferramentas || []),
    ...(p.projetos || [])
  ].join(" ");
  return normalize(hay).includes(q);
}

function matchesFilter(p, f){
  if(f === "all") return true;
  return p.dept === f;
}

function getSectorInfo(key){
  return SECTORS.find(s => s.key === key) || { key, label: key, dot:"rgba(76,201,240,0.95)" };
}

function tagHTML(t){ return `<span class="tag">${escapeHtml(t)}</span>`; }
function levelTagHTML(t){ return `<span class="tag level">${escapeHtml(t)}</span>`; }
function badgeHTML(b){ return `<span class="badge">${escapeHtml(b)}</span>`; }

function render(){
  const q = normalize(currentQuery);

  // pessoas filtradas
  const filtered = pessoas.filter(p => matchesFilter(p, currentFilter) && matchesQuery(p, q));

  // stats
  statTotal.textContent = filtered.length;
  statSectors.textContent = SECTORS.length;

  // agrupar por setor (na ordem SECTORS)
  const bySector = {};
  for(const s of SECTORS) bySector[s.key] = [];

  for(const p of filtered){
    if(!bySector[p.dept]) bySector[p.dept] = [];
    bySector[p.dept].push(p);
  }

  // montar HTML
  sectionsEl.innerHTML = SECTORS.map(sec => {
    const list = bySector[sec.key] || [];
    if(list.length === 0) return ""; // não mostra setor vazio

    const dot = sec.dot || "rgba(76,201,240,0.95)";
    const label = sec.label;

    return `
      <section class="sector" data-sector="${sec.key}">
        <div class="sectorHeader">
          <div class="sectorTitle">
            <span class="sectorDot" style="background:${dot}; box-shadow: 0 0 0 4px ${dot.replace("0.95","0.12").replace("0.9","0.12")}"></span>
            <div>
              <h3>${escapeHtml(label)}</h3>
              <small>${list.length} pessoa(s)</small>
            </div>
          </div>
        </div>

        <div class="grid">
          ${list.map(p => personCardHTML(p)).join("")}
        </div>
      </section>
    `;
  }).join("");

  // bind events
  sectionsEl.querySelectorAll(".person").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-id");
      openProfile(id);
    });
  });
}

function personCardHTML(p){
  const badges = (p.badges || []).slice(0,2);
  const deptLabel = getSectorInfo(p.dept).label;

  return `
    <button class="person" data-id="${escapeHtml(p.id)}">
      <div class="pTop">
        <img class="avatar" src="${escapeHtml(p.avatar)}" alt="Foto de ${escapeHtml(p.nome)}"
             onerror="this.src='assets/user.png'">
        <div>
          <p class="pName">${escapeHtml(p.nome)}</p>
          <p class="pRole">${escapeHtml(p.cargo)}</p>
        </div>
      </div>

      <p class="pMini">${escapeHtml(p.mini || "")}</p>

      <div class="tags">
        ${levelTagHTML(p.nivel || "—")}
        ${tagHTML(deptLabel)}
        ${badges.map(tagHTML).join("")}
      </div>
    </button>
  `;
}

// =====================
// PILLS / BUSCA
// =====================
document.querySelectorAll(".pill").forEach(p=>{
  p.addEventListener("click", ()=>{
    document.querySelectorAll(".pill").forEach(x => x.classList.remove("active"));
    p.classList.add("active");
    currentFilter = p.getAttribute("data-filter") || "all";
    render();
  });
});

searchEl.addEventListener("input", ()=>{
  currentQuery = searchEl.value || "";
  render();
});

btnClear.addEventListener("click", ()=>{
  searchEl.value = "";
  currentQuery = "";
  render();
});

// =====================
// MODAL
// =====================
const modal = $("modal");
const closeModalBtn = $("closeModal");
const backdrop = $("backdrop");

function openProfile(id){
  const p = pessoas.find(x => x.id === id);
  if(!p) return;

  $("mAvatar").src = p.avatar;
  $("mAvatar").alt = `Foto de ${p.nome}`;
  $("mName").textContent = p.nome;
  $("mRole").textContent = p.cargo;

  $("mDept").textContent = getSectorInfo(p.dept).label;
  $("mLevel").textContent = p.nivel || "—";

  $("mBadges").innerHTML = (p.badges || []).map(badgeHTML).join("");
  $("mAbout").textContent = p.sobre || "";

  $("mResp").innerHTML = (p.responsabilidades || []).map(i => `<li>${escapeHtml(i)}</li>`).join("");
  $("mTools").innerHTML = (p.ferramentas || []).map(i => `<li>${escapeHtml(i)}</li>`).join("");

  $("mEmail").textContent = p.email || "-";
  $("mExt").textContent = p.ramal || "-";
  $("mShift").textContent = p.turno || "-";

  $("mProjects").innerHTML = (p.projetos || []).map(i => `<li>${escapeHtml(i)}</li>`).join("");

  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}

function closeProfile(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}

closeModalBtn.addEventListener("click", closeProfile);
backdrop.addEventListener("click", closeProfile);
window.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && modal.classList.contains("open")) closeProfile();
});

// init
render();
const btnTheme = document.getElementById("btnTheme");

function loadTheme(){
  const saved = localStorage.getItem("site_theme");
  if(saved === "dark"){
    document.body.classList.add("dark");
  }
}

function toggleTheme(){
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("site_theme","dark");
  } else {
    localStorage.setItem("site_theme","light");
  }
}

btnTheme.addEventListener("click", toggleTheme);

loadTheme();
