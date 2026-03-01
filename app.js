const $ = (id) => document.getElementById(id);

const pessoas = [
  {
    id: "felipe",
    nome: "Felipe",
    cargo: "Suporte / Infra",
    mini: "Cuida da infraestrutura e resolve chamados críticos.",
    avatar: "assets/felipe.jpg",
    badges: ["Infra", "Redes", "Suporte N2"],
    sobre: "Atua garantindo a estabilidade do ambiente, monitorando serviços e apoiando as lojas/usuários quando há incidentes.",
    responsabilidades: [
      "Atender incidentes e chamados (N1/N2)",
      "Manutenção de rede e equipamentos",
      "Apoiar PDVs e rotinas do CPD",
      "Documentar procedimentos"
    ],
    ferramentas: ["Windows", "Mikrotik", "AnyDesk/TeamViewer", "MGV", "Checklist CPD"],
    email: "felipe@empresa.com",
    ramal: "101",
    turno: "Comercial",
    projetos: ["Padronização de imagens de PDV", "Melhorias no Wi-Fi (VLAN)"]
  },
  {
    id: "maria",
    nome: "Maria",
    cargo: "Suporte / Sistemas",
    mini: "Foco em sistemas, cadastros e apoio no ERP/PDV.",
    avatar: "assets/maria.jpg",
    badges: ["Sistemas", "ERP", "PDV"],
    sobre: "Atua na operação dos sistemas internos, correções rápidas e suporte aos usuários com prioridade e organização.",
    responsabilidades: [
      "Apoiar usuários em ERP/PDV",
      "Abrir/acompanhar chamados com fornecedores",
      "Treinar usuários em rotinas básicas",
      "Validar cadastros e regras"
    ],
    ferramentas: ["ERP/PDV", "Planilhas", "Painéis internos", "Base de conhecimento"],
    email: "maria@empresa.com",
    ramal: "102",
    turno: "Comercial",
    projetos: ["Padronização de cadastros", "Melhoria de fluxo de chamados"]
  },
  {
    id: "ismael",
    nome: "Ismael",
    cargo: "Infra / Redes",
    mini: "Mantém a rede e links funcionando e seguros.",
    avatar: "assets/ismael.jpg",
    badges: ["Redes", "Segurança", "Links"],
    sobre: "Responsável por redes, links, segmentação (VLAN), e boas práticas de segurança e acesso.",
    responsabilidades: [
      "Gerenciar links e roteadores",
      "Configurar VLAN e regras de acesso",
      "Acompanhar disponibilidade e performance",
      "Apoiar projetos de expansão"
    ],
    ferramentas: ["Mikrotik", "Switch/Firewall", "Monitoramento", "Documentação"],
    email: "ismael@empresa.com",
    ramal: "103",
    turno: "Comercial",
    projetos: ["Segmentação de rede (Clientes x Interno)", "Padronização de APs"]
  },
  {
    id: "gladstone",
    nome: "Gladstone",
    cargo: "Coordenador CPD",
    mini: "Organiza prioridades e garante o funcionamento do setor.",
    avatar: "assets/gladstone.jpg",
    badges: ["Gestão", "Processos", "Prioridades"],
    sobre: "Coordena o time do CPD, define prioridades e acompanha indicadores e melhorias contínuas.",
    responsabilidades: [
      "Definir prioridades do CPD",
      "Acompanhar indicadores e SLAs",
      "Alinhar com demais setores",
      "Garantir padrão de atendimento"
    ],
    ferramentas: ["Gestão de chamados", "Dashboards", "Procedimentos internos"],
    email: "gladstone@empresa.com",
    ramal: "104",
    turno: "Comercial",
    projetos: ["Padronização do atendimento", "Implantação de rotinas e checklists"]
  },
  {
    id: "anderson",
    nome: "Anderson",
    cargo: "Suporte / Campo",
    mini: "Atua em loja/filiais quando precisa de presença física.",
    avatar: "assets/anderson.jpg",
    badges: ["Campo", "Hardware", "PDV"],
    sobre: "Atende demandas presenciais, instalação e manutenção de equipamentos, e suporte a operações de loja.",
    responsabilidades: [
      "Suporte presencial em loja",
      "Troca/instalação de hardware",
      "Apoio a impressoras e periféricos",
      "Testes e validação pós-atendimento"
    ],
    ferramentas: ["Kit manutenção", "Checklists", "Ferramentas de acesso remoto"],
    email: "anderson@empresa.com",
    ramal: "105",
    turno: "Comercial",
    projetos: ["Padronização de periféricos", "Mapeamento de falhas recorrentes"]
  }
];

const grid = $("grid");
const search = $("search");

function tagHTML(t){ return `<span class="tag">${escapeHtml(t)}</span>`; }
function badgeHTML(b){ return `<span class="badge">${escapeHtml(b)}</span>`; }
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function render(lista){
  grid.innerHTML = lista.map(p => `
    <button class="person" data-id="${p.id}">
      <div class="pTop">
        <img class="avatar" src="${p.avatar}" alt="Foto de ${escapeHtml(p.nome)}" onerror="this.src='assets/user.png'">
        <div>
          <p class="pName">${escapeHtml(p.nome)}</p>
          <p class="pRole">${escapeHtml(p.cargo)}</p>
        </div>
      </div>

      <p class="pMini">${escapeHtml(p.mini)}</p>

      <div class="tags">
        ${(p.badges || []).slice(0,3).map(tagHTML).join("")}
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".person").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const id = btn.getAttribute("data-id");
      openProfile(id);
    });
  });
}

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

search.addEventListener("input", ()=>{
  const q = (search.value || "").trim().toLowerCase();
  const filtrado = pessoas.filter(p =>
    p.nome.toLowerCase().includes(q) ||
    p.cargo.toLowerCase().includes(q) ||
    (p.badges || []).join(" ").toLowerCase().includes(q)
  );
  render(filtrado);
});

render(pessoas);
