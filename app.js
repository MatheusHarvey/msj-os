const LOGO = "data:image/png;base64,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";
const STATUS = {rascunho:"Em aberto", enviado:"Orçamento enviado", pago:"Pago"};
const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const app = document.getElementById("app");
const $ = (s, r=document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const brl = n => (Number(n)||0).toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const clone = o => JSON.parse(JSON.stringify(o));
function today(){ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
const fmtDate = iso => iso ? iso.split("-").reverse().join("/") : "";
function longDate(iso){ if(!iso) return ""; const [y,m,d]=iso.split("-"); return `${+d} de ${MESES[+m-1]} de ${y}`; }
function parseMoney(s){
  s = String(s ?? "").trim().replace(/[R$\s−-]/g,""); if(!s) return 0;
  if (s.includes(",")) s = s.replace(/\./g,"").replace(",",".");
  else { const p = s.split("."); if (p.length>2 || (p.length===2 && p[1].length===3)) s = s.replace(/\./g,""); }
  const n = parseFloat(s); return isFinite(n) ? Math.round(n*100)/100 : 0;
}
const toInt = s => { const n = parseInt(String(s??"").replace(/\D/g,""),10); return isFinite(n) ? n : null; };
const toMin = t => { if(!t || !/^\d{1,2}:\d{2}/.test(t)) return null; const [h,m]=t.split(":").map(Number); return h*60+m; };
const hm = min => `${Math.floor(min/60)}h${String(min%60).padStart(2,"0")}`;
function getP(o,p){ return p.split(".").reduce((a,k)=> a==null ? a : a[k], o); }
function setP(o,p,v){ const ks=p.split("."); let a=o; for(let i=0;i<ks.length-1;i++){ if(a[ks[i]]==null) a[ks[i]]={}; a=a[ks[i]]; } a[ks[ks.length-1]]=v; }

let toastT;
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.hidden=false; clearTimeout(toastT); toastT=setTimeout(()=>t.hidden=true, 3600); }

/* ---------------- storage (neste aparelho) ---------------- */
let CFG = {empresa:"MOISÉS S. JERÔNIMO – SERVIÇOS DE MANUTENÇÃO", rodape:"MOISÉS - SERVIÇOS DE MANUTENÇÃO E REPARO",
  telefones:"(11) 98352-3360 / (11) 99868-4379",
  pagamento:"Banco Itaú PJ\nMoises Severino Jeronimo\nAG 6748\nConta-Corrente 21320-1\nOU\nPIX CNPJ:\n26.903.418/0001-00",
  condicoes:"20 DDL a partir da emissão da nota fiscal", tecnico:"Moisés / Alberto", localSaida:"Ferraz", proximo:"0426"};
let LIST = [], LOADED = false, CUR = null, VIEW = "list", SEARCH = "";
const photoCache = new Map();

const IDB = {
  db: null,
  open(){ return new Promise((res,rej)=>{ const r = indexedDB.open("msj-os", 1);
    r.onupgradeneeded = () => { const d = r.result; d.createObjectStore("os",{keyPath:"id"}); d.createObjectStore("fotos"); d.createObjectStore("cfg"); };
    r.onsuccess = () => { this.db = r.result; res(); }; r.onerror = () => rej(r.error); }); },
  tx(store, mode, fn){ return new Promise((res,rej)=>{ const t = this.db.transaction(store, mode); let out; const q = fn(t.objectStore(store));
    if (q) q.onsuccess = () => { out = q.result; }; t.oncomplete = () => res(out); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error); }); },
  all(st){ return this.tx(st,"readonly",s=>s.getAll()); },
  get(st,k){ return this.tx(st,"readonly",s=>s.get(k)); },
  put(st,v,k){ return this.tx(st,"readwrite",s=> k===undefined ? s.put(v) : s.put(v,k)); },
  del(st,k){ return this.tx(st,"readwrite",s=>s.delete(k)); }
};

const Store = {
  async init(onList){
    await IDB.open();
    const c = await IDB.get("cfg","empresa"); if (c) Object.assign(CFG, c);
    onList(await IDB.all("os"));
    try { if (navigator.storage && navigator.storage.persist && !(await navigator.storage.persisted())) await navigator.storage.persist(); } catch(e){}
  },
  async saveOS(os){ const b = clone(os); b.atualizadoEm = new Date().toISOString(); await IDB.put("os", b); },
  async deleteOS(id){ await IDB.del("os", id); },
  async saveCfg(){ await IDB.put("cfg", clone(CFG), "empresa"); },
  async putPhoto(blob){ const id = uid(); await IDB.put("fotos", blob, id); photoCache.set(id, URL.createObjectURL(blob)); return {idb:id}; },
  async photoSrc(ref){
    if (!ref) return null; if (ref.data) return ref.data;
    if (ref.idb){ if (photoCache.has(ref.idb)) return photoCache.get(ref.idb);
      const b = await IDB.get("fotos", ref.idb); if (b){ const u = URL.createObjectURL(b); photoCache.set(ref.idb, u); return u; } }
    return null;
  },
  async dropPhoto(ref){ try { if (ref && ref.idb) await IDB.del("fotos", ref.idb); } catch(e){} }
};

/* ---------------- images ---------------- */
function loadImage(src){ return new Promise((res,rej)=>{ const i=new Image(); i.decoding="async"; i.onload=()=>res(i); i.onerror=()=>rej(new Error("img")); i.src=src; }); }
async function toCanvas(src, max){
  const img = await loadImage(src);
  const s = Math.min(1, max/Math.max(img.naturalWidth, img.naturalHeight));
  const c = document.createElement("canvas"); c.width=Math.max(1,Math.round(img.naturalWidth*s)); c.height=Math.max(1,Math.round(img.naturalHeight*s));
  const x = c.getContext("2d"); x.fillStyle="#fff"; x.fillRect(0,0,c.width,c.height); x.drawImage(img,0,0,c.width,c.height);
  return c;
}
async function compressFile(file){
  const url = URL.createObjectURL(file);
  try { const c = await toCanvas(url, 1600); return await new Promise(r => c.toBlob(r, "image/jpeg", 0.82)); }
  finally { URL.revokeObjectURL(url); }
}
async function shrink(blob, max, q, limit){
  const url = URL.createObjectURL(blob);
  try { let c = await toCanvas(url, max); let d = c.toDataURL("image/jpeg", q);
    while (d.length > limit && q > 0.35){ q -= 0.1; d = c.toDataURL("image/jpeg", q); }
    return d; }
  finally { URL.revokeObjectURL(url); }
}
async function pdfImage(src){
  const c = await toCanvas(src, 1400);
  return {data:c.toDataURL("image/jpeg", 0.86), w:c.width, h:c.height};
}

/* ---------------- model ---------------- */
function nextNumero(){
  const n = LIST.reduce((m,o)=> Math.max(m, toInt(o.numero)||0), 0);
  return String(Math.max(n+1, toInt(CFG.proximo)||1)).padStart(4,"0");
}
function blankTrip(){ return {data:today(),saida:CFG.localSaida||"",kmSaida:"",hSaida:"",hChegada:"",inicio:"",fim:"",localServico:"",kmChegada:""}; }
function newOS(){
  return {id:uid(), numero:nextNumero(), status:"rascunho", data:today(), criadoEm:new Date().toISOString(),
    cliente:{nome:"",endereco:"",bairro:"",cidade:"",estado:"SP",cep:"",celular:"",cnpj:"",contato:""},
    tecnico:CFG.tecnico||"", equip:{marca:"",modelo:"",serie:"",horimetro:""},
    solicitado:"", defeito:"", executado:"", observacoes:"",
    desloc:[blankTrip()], fotos:[],
    orc:{referente:"", itens:[{desc:"Mão de Obra + Deslocamento", valor:0}], descontos:[], condicoes:CFG.condicoes||""},
    assinatura:null, localAssinatura:""};
}
function normalize(o){
  const b = newOS(); const r = Object.assign(b, o);
  r.cliente = Object.assign(b.cliente, o.cliente||{}); r.equip = Object.assign({marca:"",modelo:"",serie:"",horimetro:""}, o.equip||{});
  r.orc = Object.assign({referente:"",itens:[],descontos:[],condicoes:""}, o.orc||{});
  r.desloc = Array.isArray(o.desloc) && o.desloc.length ? o.desloc : [blankTrip()];
  r.fotos = Array.isArray(o.fotos) ? o.fotos : [];
  return r;
}
function total(o){ const a=(o.orc?.itens||[]).reduce((s,i)=>s+(+i.valor||0),0); const d=(o.orc?.descontos||[]).reduce((s,i)=>s+(+i.valor||0),0); return Math.round((a-d)*100)/100; }
function tripInfo(r){
  const out = [];
  const a=toInt(r.kmSaida), b=toInt(r.kmChegada); if(a!=null && b!=null && b>=a) out.push(`${(b-a).toLocaleString("pt-BR")} km`);
  const v1=toMin(r.hSaida), v2=toMin(r.hChegada); if(v1!=null && v2!=null && v2>=v1) out.push(`${hm(v2-v1)} de viagem`);
  const s1=toMin(r.inicio), s2=toMin(r.fim); if(s1!=null && s2!=null && s2>=s1) out.push(`${hm(s2-s1)} de serviço`);
  return out.join(" · ");
}
function fileBase(o){
  const c = (o.cliente?.nome||"Cliente").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^\w]+/g,"_").replace(/^_|_$/g,"");
  const d = o.data ? o.data.split("-").reverse().slice(0,2).join("-") : "";
  return `${c}_${d}`;
}

/* ---------------- save ---------------- */
let saveT = null, dirty = false;
function setSave(s){ const el=$("#saveState"); el.classList.toggle("err", s==="err"); el.textContent = s==="saving"?"Salvando…": s==="ok"?"Salvo": s==="err"?"Não salvo": ""; }
function touch(){ dirty = true; setSave("saving"); clearTimeout(saveT); saveT = setTimeout(flush, 700); }
async function flush(){
  clearTimeout(saveT); if (!dirty || !CUR) return; dirty = false;
  const snap = clone(CUR);
  const i = LIST.findIndex(o=>o.id===snap.id); if (i>=0) LIST[i]=snap; else LIST.push(snap);
  try { await Store.saveOS(snap); if(!dirty) setSave("ok"); }
  catch(e){ setSave("err"); toast("Não consegui salvar. Confira a conexão; as alterações continuam na tela."); dirty = true; }
}

/* ---------------- views ---------------- */
function chrome(title, back){
  $("#title").textContent = title; $("#backBtn").hidden = !back;
  $("#topLogo").hidden = !!back; $("#cfgBtn").hidden = VIEW==="config";
  $("#actionbar").hidden = VIEW!=="edit";
  if (VIEW!=="edit") setSave("");
}

function renderList(){
  VIEW = "list"; CUR = null; chrome("Ordens de serviço", false);
  app.innerHTML = `
    <div class="list-head">
      <input id="busca" type="search" placeholder="Buscar cliente, modelo, série ou nº" value="${esc(SEARCH)}" aria-label="Buscar">
      <button class="btn primary" data-act="new">+ Nova OS</button>
    </div>
    ${banner()}
    <div id="cardsWrap"></div>`;
  renderCards();
}
function lastBackupDays(){ try { const t = localStorage.getItem("msj_ultimo_backup"); return t ? Math.floor((Date.now()-new Date(t))/864e5) : null; } catch(e){ return null; } }
function banner(){
  if (installEvt) return `<div class="install"><span>Instale o app na tela inicial para abrir como um aplicativo, mesmo sem internet.</span><button class="btn primary small" data-act="install">Instalar</button></div>`;
  const d = lastBackupDays();
  if (LIST.length >= 3 && (d === null || d > 30)) return `<div class="install"><span>${d===null?"Você ainda não fez backup das suas OS.":`Último backup há ${d} dias.`} Guarde uma cópia fora do celular.</span><button class="btn small" data-act="config">Fazer backup</button></div>`;
  return "";
}
function renderCards(){
  const w = $("#cardsWrap"); if (!w) return;
  if (!LOADED){ w.innerHTML = `<p class="empty">Carregando ordens…</p>`; return; }
  const q = SEARCH.trim().toLowerCase();
  const items = LIST.filter(o => !q || [o.numero,o.cliente?.nome,o.equip?.marca,o.equip?.modelo,o.equip?.serie,o.cliente?.cidade].join(" ").toLowerCase().includes(q))
    .sort((a,b)=> (toInt(b.numero)||0)-(toInt(a.numero)||0));
  if (!items.length){
    w.innerHTML = q ? `<p class="empty">Nenhuma OS encontrada para “${esc(SEARCH)}”.</p>`
      : `<div class="empty"><strong>Nenhuma ordem de serviço ainda</strong>Toque em “+ Nova OS” para preencher a primeira no campo.</div>`;
    return;
  }
  w.innerHTML = `<ul class="cards">${items.map(o=>`
    <li><button class="card" data-act="open" data-id="${esc(o.id)}">
      <span class="num">${esc(o.numero||"—")}</span>
      <span class="cli">${esc(o.cliente?.nome||"Sem cliente")}</span>
      <span class="tot">R$ ${brl(total(o))}</span>
      <span class="meta">${esc([fmtDate(o.data), [o.equip?.marca,o.equip?.modelo].filter(Boolean).join(" ")].filter(Boolean).join(" · "))}</span>
      <span class="chip ${esc(o.status)}">${esc(STATUS[o.status]||"Em aberto")}</span>
    </button></li>`).join("")}</ul>`;
}

function fld(label, path, opt={}){
  const {type="text", cls="", ph="", im="", area=false, rows=3, list="", obj=null, attr="data-bind"} = opt;
  const src = obj || CUR; const id = "f_" + path.replace(/\./g,"_"); const v = getP(src, path) ?? "";
  const a = `id="${id}" ${attr}="${path}" ${ph?`placeholder="${esc(ph)}"`:""} ${im?`inputmode="${im}"`:""} ${list?`list="${list}"`:""} autocomplete="off"`;
  const ctl = area ? `<textarea ${a} rows="${rows}">${esc(v)}</textarea>` : `<input type="${type}" ${a} value="${esc(v)}">`;
  return `<div class="fld ${cls}"><label for="${id}">${label}</label>${ctl}</div>`;
}
function moneyLine(kind, i, it){
  const base = `orc.${kind}.${i}`;
  return `<div class="line ${kind==="descontos"?"desc":""}">
    <input type="text" id="f_${kind}_${i}_d" data-bind="${base}.desc" value="${esc(it.desc)}" placeholder="${kind==="descontos"?"Ex.: Desconto (Ferro 3/8)":"Descrição"}" aria-label="Descrição">
    <div class="money"><input type="text" id="f_${kind}_${i}_v" data-bind="${base}.valor" data-money inputmode="decimal" value="${it.valor?brl(it.valor):""}" placeholder="0,00" aria-label="Valor"></div>
    <button class="icon-btn" data-act="del-line" data-k="${kind}" data-i="${i}" aria-label="Remover linha">×</button>
  </div>`;
}

function renderEditor(){
  VIEW = "edit"; const o = CUR;
  chrome(o.cliente.nome ? `OS ${o.numero} · ${o.cliente.nome}` : `OS ${o.numero}`, true);
  app.innerHTML = `
  <div class="os-head">
    <div><div class="eyebrow">Ordem de serviço</div>
      <div class="os-num"><span>Nº</span><input type="text" id="f_numero" data-bind="numero" value="${esc(o.numero)}" inputmode="numeric" aria-label="Número da OS"></div></div>
    <div class="seg" role="group" aria-label="Situação">${Object.keys(STATUS).map(s=>`<button data-act="status" data-v="${s}" class="${o.status===s?"on":""}" aria-pressed="${o.status===s}">${STATUS[s]}</button>`).join("")}</div>
  </div>
  <nav class="jump" aria-label="Seções">
    <a href="#s-cli">Cliente</a><a href="#s-eq">Equipamento</a><a href="#s-srv">Serviço</a><a href="#s-desl">Deslocamento</a><a href="#s-fot">Fotos</a><a href="#s-orc">Orçamento</a><a href="#s-fim">Assinatura</a>
  </nav>

  <section class="sec" id="s-cli"><h2 class="bar-h">Dados do cliente</h2><div class="body grid">
    ${fld("Cliente","cliente.nome",{cls:"span2"})}
    ${fld("Técnico","tecnico",{cls:"span2",ph:"Ex.: Moisés / Alberto"})}
    ${fld("Data","data",{type:"date"})}
    ${fld("Contato","cliente.contato")}
    ${fld("Celular","cliente.celular",{type:"tel",im:"tel"})}
    ${fld("CNPJ","cliente.cnpj",{im:"numeric"})}
    ${fld("Endereço","cliente.endereco",{cls:"span2"})}
    ${fld("Bairro","cliente.bairro")}
    ${fld("CEP","cliente.cep",{im:"numeric"})}
    ${fld("Cidade","cliente.cidade")}
    ${fld("Estado","cliente.estado")}
  </div></section>

  <section class="sec" id="s-eq"><h2 class="bar-h">Dados do equipamento</h2><div class="body grid">
    ${fld("Marca","equip.marca")}
    ${fld("Modelo","equip.modelo")}
    ${fld("Série","equip.serie")}
    ${fld("Horímetro","equip.horimetro",{im:"decimal"})}
  </div></section>

  <section class="sec" id="s-srv"><h2 class="bar-h">Serviço</h2><div class="body stack">
    ${fld("Serviço solicitado","solicitado",{area:true,rows:3})}
    ${fld("Defeito constatado","defeito",{area:true,rows:4})}
    ${fld("Serviços executados","executado",{area:true,rows:5})}
  </div></section>

  <section class="sec" id="s-desl"><h2 class="bar-h">Dados do serviço <small>deslocamento e horários</small></h2><div class="body">
    ${o.desloc.map((r,i)=>`<div class="trip">
      <div class="trip-h"><strong>${o.desloc.length>1?`Dia ${i+1}`:"Deslocamento"}</strong><span class="trip-sum" data-sum="${i}">${esc(tripInfo(r))}</span>
      ${o.desloc.length>1?`<button class="icon-btn" data-act="del-trip" data-i="${i}" aria-label="Remover deslocamento">×</button>`:""}</div>
      <div class="g3">
        ${fld("Data",`desloc.${i}.data`,{type:"date"})}
        ${fld("Local saída",`desloc.${i}.saida`)}
        ${fld("Km saída",`desloc.${i}.kmSaida`,{im:"numeric"})}
        ${fld("Horário saída",`desloc.${i}.hSaida`,{type:"time"})}
        ${fld("Horário chegada",`desloc.${i}.hChegada`,{type:"time"})}
        ${fld("Início serviço",`desloc.${i}.inicio`,{type:"time"})}
        ${fld("Final serviço",`desloc.${i}.fim`,{type:"time"})}
        ${fld("Local serviço",`desloc.${i}.localServico`)}
        ${fld("Km chegada",`desloc.${i}.kmChegada`,{im:"numeric"})}
      </div></div>`).join("")}
    <div style="margin-top:10px"><button class="btn ghost" data-act="add-trip">+ Outro dia de serviço</button></div>
  </div></section>

  <section class="sec" id="s-fot"><h2 class="bar-h">Fotos <small>${o.fotos.length} ${o.fotos.length===1?"foto":"fotos"}</small></h2><div class="body">
    <div class="photos">
      ${o.fotos.map((f,i)=>`<div class="ph">
        <div class="img"><span>${f.ref?"Carregando…":"Salvando…"}</span><img alt="${esc(f.legenda||"Foto "+(i+1))}" data-fi="${i}" hidden>
          <div class="tools">${i>0?`<button data-act="ph-left" data-i="${i}" aria-label="Mover para antes">‹</button>`:""}<button data-act="ph-del" data-i="${i}" aria-label="Remover foto">×</button></div></div>
        <input type="text" id="f_foto_${i}" data-bind="fotos.${i}.legenda" value="${esc(f.legenda)}" placeholder="Legenda" list="legendas" aria-label="Legenda da foto ${i+1}">
      </div>`).join("")}
      <div class="addrow"><button class="addph" data-act="add-cam"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>Tirar foto</button><button class="addph" data-act="add-gal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>Da galeria</button></div>
    </div>
    <p class="hint" style="margin-top:10px">As fotos ficam guardadas neste celular e entram no relatório e no orçamento, nesta ordem.</p>
  </div></section>

  <section class="sec" id="s-orc"><h2 class="bar-h">Orçamento</h2><div class="body stack">
    <div>${fld("Orçamento referente a","orc.referente",{area:true,rows:2,ph:"Ex.: verificação do levante da cabine…"})}
      <button class="linkbtn" data-act="use-solic">Copiar do serviço solicitado</button></div>
    <div class="lines">
      <div class="sub">Cobranças</div>
      ${o.orc.itens.map((it,i)=>moneyLine("itens",i,it)).join("")}
      <button class="btn ghost small" data-act="add-line" data-k="itens">+ Item</button>
      <div class="sub">Descontos</div>
      ${o.orc.descontos.map((it,i)=>moneyLine("descontos",i,it)).join("")}
      <button class="btn ghost small" data-act="add-line" data-k="descontos">+ Desconto</button>
    </div>
    <div class="total"><span>Total a pagar</span><b id="totalOut">R$ ${brl(total(o))}</b></div>
    ${fld("Condições de pagamento","orc.condicoes")}
  </div></section>

  <section class="sec" id="s-fim"><h2 class="bar-h">Observações e assinatura</h2><div class="body stack">
    ${fld("Observações","observacoes",{area:true,rows:3})}
    <div class="fld"><label>Assinatura do cliente</label>
      ${o.assinatura?.img ? `<div class="sigbox"><img src="${esc(o.assinatura.img)}" alt="Assinatura"></div>${o.assinatura.nome?`<div class="signame">${esc(o.assinatura.nome)}</div>`:""}
        <div class="row-btns" style="margin-top:6px"><button class="btn small" data-act="sign">Refazer</button><button class="btn small danger" data-act="sig-remove">Remover</button></div>`
      : `<button class="btn" data-act="sign">Coletar assinatura na tela</button>`}
    </div>
    ${fld("Local da assinatura","localAssinatura",{ph:o.cliente.cidade||"Ex.: São Bernardo do Campo"})}
  </div></section>

  <div class="danger-zone">
    <button class="btn" data-act="dup">Duplicar para nova OS</button>
    <button class="btn danger" data-act="del-os" id="delBtn">Excluir OS</button>
  </div>`;
  loadThumbs();
}
async function loadThumbs(){
  for (const img of app.querySelectorAll("img[data-fi]")){
    const f = CUR.fotos[+img.dataset.fi]; if (!f) continue;
    const src = f._tmp || await Store.photoSrc(f.ref);
    if (!src || !img.isConnected) continue;
    img.onload = () => { img.hidden = false; };
    img.onerror = () => { img.previousElementSibling.textContent = "Foto indisponível"; };
    img.src = src;
  }
}
function refreshComputed(){
  const t = $("#totalOut"); if (t) t.textContent = "R$ " + brl(total(CUR));
  app.querySelectorAll("[data-sum]").forEach(el => { const r = CUR.desloc[+el.dataset.sum]; if (r) el.textContent = tripInfo(r); });
  chrome(CUR.cliente.nome ? `OS ${CUR.numero} · ${CUR.cliente.nome}` : `OS ${CUR.numero}`, true);
}

function renderConfig(){
  const from = VIEW === "config" ? renderConfig.from : VIEW; VIEW = "config"; chrome("Ajustes", true);
  const d = lastBackupDays();
  app.innerHTML = `
  <p class="cfg-note">Tudo fica guardado só neste celular. Para passar as OS para outro aparelho, ou se proteger caso troque de celular, use o backup.</p>
  <section class="sec" id="impBox"><h2 class="bar-h">Backup</h2><div class="body stack">
    <p class="hint">${d===null ? "Nenhum backup feito neste celular ainda." : d===0 ? "Último backup: hoje." : `Último backup: há ${d} ${d===1?"dia":"dias"}.`} O backup é um arquivo com todas as OS, fotos e ajustes. Guarde no Google Drive, e-mail ou WhatsApp.</p>
    ${PENDING_IMPORT ? `<div class="install" style="margin:0"><span>Arquivo de ${esc(fmtDate((PENDING_IMPORT.exportadoEm||"").slice(0,10)))} com ${PENDING_IMPORT.os.length} OS e ${Object.keys(PENDING_IMPORT.fotos||{}).length} fotos. OS que já existem aqui só são trocadas se a do arquivo for mais nova.</span></div>
      <div class="row-btns"><button class="btn primary" data-act="imp-ok">Restaurar agora</button><button class="btn" data-act="imp-cancel">Cancelar</button></div>`
    : `<div class="row-btns"><button class="btn primary" data-act="backup-exp">Gerar backup</button><button class="btn" data-act="backup-imp">Restaurar backup</button></div>`}
    <div><div class="hint" id="spaceTxt">Calculando espaço usado…</div><div class="meter"><i id="spaceBar" style="width:0"></i></div></div>
  </div></section>
  <section class="sec"><h2 class="bar-h">Cabeçalho e rodapé</h2><div class="body stack">
    ${fld("Nome no orçamento","empresa",{obj:CFG,attr:"data-cfg"})}
    ${fld("Rodapé do relatório","rodape",{obj:CFG,attr:"data-cfg"})}
    ${fld("Telefones (WhatsApp)","telefones",{obj:CFG,attr:"data-cfg"})}
  </div></section>
  <section class="sec"><h2 class="bar-h">Pagamento</h2><div class="body stack">
    ${fld("Dados para pagamento","pagamento",{obj:CFG,attr:"data-cfg",area:true,rows:7})}
    ${fld("Condições de pagamento padrão","condicoes",{obj:CFG,attr:"data-cfg"})}
  </div></section>
  <section class="sec"><h2 class="bar-h">Padrões da nova OS</h2><div class="body grid">
    ${fld("Técnico(s)","tecnico",{obj:CFG,attr:"data-cfg"})}
    ${fld("Local de saída","localSaida",{obj:CFG,attr:"data-cfg"})}
    ${fld("Próximo nº de OS","proximo",{obj:CFG,attr:"data-cfg",im:"numeric"})}
    <p class="hint" style="align-self:end">Use para continuar a numeração do bloco de papel.</p>
  </div></section>`;
  renderConfig.from = from;
  if (navigator.storage && navigator.storage.estimate) navigator.storage.estimate().then(e => {
    const u = e.usage||0, q = e.quota||0, t = $("#spaceTxt"), bar = $("#spaceBar"); if (!t) return;
    t.textContent = `Espaço usado pelo app: ${(u/1048576).toLocaleString("pt-BR",{maximumFractionDigits:1})} MB` + (q ? ` de ${(q/1073741824).toLocaleString("pt-BR",{maximumFractionDigits:1})} GB disponíveis` : "");
    if (q) bar.style.width = Math.max(1, Math.min(100, u/q*100)) + "%";
  }).catch(()=>{}); else $("#spaceTxt").textContent = "";
}

/* ---------------- arquivos, backup, instalação ---------------- */
let FILE = null, PENDING_IMPORT = null, installEvt = null;
function showFile(blob, name, title){
  FILE = {blob, name, file: new File([blob], name, {type: blob.type || "application/octet-stream"})};
  $("#fileTitle").textContent = title; $("#fileName").textContent = name;
  let can = false; try { can = !!(navigator.canShare && navigator.canShare({files:[FILE.file]})); } catch(e){}
  $("#fileShareBtn").hidden = !can; $("#fileSheet").hidden = false;
}
async function shareFile(){
  try { await navigator.share({files:[FILE.file], title:FILE.name}); $("#fileSheet").hidden = true; }
  catch(e){ if (!e || e.name !== "AbortError") toast("Não abriu o compartilhamento. Use “Salvar no celular” e envie pelo WhatsApp."); }
}
function saveFile(){
  const u = URL.createObjectURL(FILE.blob), a = document.createElement("a");
  a.href = u; a.download = FILE.name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(u), 60000); toast("Arquivo salvo na pasta Downloads.");
  if (FILE.name.startsWith("backup-")) { try { localStorage.setItem("msj_ultimo_backup", new Date().toISOString()); } catch(e){} }
}
function blobToDataURL(b){ return new Promise((res,rej)=>{ const r = new FileReader(); r.onload = () => res(r.result); r.onerror = () => rej(r.error); r.readAsDataURL(b); }); }
async function exportBackup(btn){
  await flush(); const lbl = btn.textContent; btn.disabled = true; btn.textContent = "Preparando…";
  try {
    const os = await IDB.all("os"), fotos = {};
    for (const o of os) for (const f of (o.fotos||[])) if (f.ref && f.ref.idb && !fotos[f.ref.idb]){ const b = await IDB.get("fotos", f.ref.idb); if (b) fotos[f.ref.idb] = await blobToDataURL(b); }
    const data = {app:"msj-os", versao:1, exportadoEm:new Date().toISOString(), cfg:CFG, os, fotos};
    showFile(new Blob([JSON.stringify(data)], {type:"application/json"}), `backup-msj-os-${today()}.json`, "Backup pronto");
    try { localStorage.setItem("msj_ultimo_backup", new Date().toISOString()); } catch(e){}
  } catch(e){ toast("Não consegui gerar o backup."); }
  finally { btn.disabled = false; btn.textContent = lbl; }
}
$("#backupInput").addEventListener("change", async e => {
  const f = e.target.files[0]; e.target.value = ""; if (!f) return;
  try { const d = JSON.parse(await f.text()); if (d.app !== "msj-os" || !Array.isArray(d.os)) throw new Error("x"); PENDING_IMPORT = d; renderConfig(); }
  catch(err){ toast("Esse arquivo não é um backup do app de OS."); }
});
async function applyImport(btn){
  const d = PENDING_IMPORT; if (!d) return; btn.disabled = true; btn.textContent = "Restaurando…";
  try {
    for (const [id, url] of Object.entries(d.fotos||{})) if (!(await IDB.get("fotos", id))) await IDB.put("fotos", await (await fetch(url)).blob(), id);
    const have = new Map(LIST.map(o=>[o.id,o])); let n = 0;
    for (const o of d.os){ const cur = have.get(o.id); if (!cur || (o.atualizadoEm||"") > (cur.atualizadoEm||"")){ await IDB.put("os", o); n++; } }
    if (d.cfg){ Object.assign(CFG, d.cfg); await Store.saveCfg(); }
    LIST = await IDB.all("os"); PENDING_IMPORT = null;
    toast(n ? `${n} ${n===1?"OS restaurada":"OS restauradas"}.` : "Nada novo: este celular já tinha essas OS.");
  } catch(e){ toast("A restauração parou no meio. Tente de novo; nada foi apagado."); }
  renderConfig();
}
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); installEvt = e; if (VIEW==="list") renderList(); });
window.addEventListener("appinstalled", () => { installEvt = null; toast("App instalado na tela inicial."); if (VIEW==="list") renderList(); });

/* ---------------- events ---------------- */
let cfgT;
app.addEventListener("input", e => {
  const t = e.target;
  if (t.id === "busca"){ SEARCH = t.value; renderCards(); return; }
  if (t.dataset.cfg){ setP(CFG, t.dataset.cfg, t.value); clearTimeout(cfgT); cfgT = setTimeout(()=>Store.saveCfg().catch(()=>toast("Não consegui salvar os ajustes.")), 700); return; }
  if (!t.dataset.bind || !CUR) return;
  setP(CUR, t.dataset.bind, t.hasAttribute("data-money") ? parseMoney(t.value) : t.value);
  refreshComputed(); touch();
});
app.addEventListener("focusout", e => {
  const t = e.target; if (t.hasAttribute && t.hasAttribute("data-money") && CUR){ const v = getP(CUR, t.dataset.bind); t.value = v ? brl(v) : ""; }
});
document.addEventListener("click", async e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, i = +b.dataset.i;
  switch (act){
    case "new": CUR = newOS(); LIST.push(clone(CUR)); dirty = true; flush(); renderEditor(); window.scrollTo(0,0); break;
    case "open": { const o = LIST.find(x=>x.id===b.dataset.id); if (o){ CUR = normalize(clone(o)); renderEditor(); window.scrollTo(0,0); } break; }
    case "back": if (VIEW==="config" && renderConfig.from==="edit" && CUR){ renderEditor(); } else { await flush(); renderList(); } window.scrollTo(0,0); break;
    case "config": if (CUR) await flush(); renderConfig(); window.scrollTo(0,0); break;
    case "status": CUR.status = b.dataset.v; app.querySelectorAll(".seg button").forEach(x=>{ const on = x.dataset.v===CUR.status; x.classList.toggle("on",on); x.setAttribute("aria-pressed",on); }); touch(); break;
    case "add-trip": { const last = CUR.desloc[CUR.desloc.length-1]; const t = blankTrip(); if (last){ t.saida=last.saida; t.localServico=last.localServico; } CUR.desloc.push(t); touch(); rerenderKeep(); break; }
    case "del-trip": CUR.desloc.splice(i,1); touch(); rerenderKeep(); break;
    case "add-line": CUR.orc[b.dataset.k].push({desc:"", valor:0}); touch(); rerenderKeep(`f_${b.dataset.k}_${CUR.orc[b.dataset.k].length-1}_d`); break;
    case "del-line": CUR.orc[b.dataset.k].splice(i,1); touch(); rerenderKeep(); break;
    case "use-solic": CUR.orc.referente = (CUR.solicitado||"").trim().replace(/^./, c=>c.toLowerCase()); touch(); rerenderKeep(); break;
    case "add-cam": $("#camInput").click(); break;
    case "add-gal": $("#galInput").click(); break;
    case "file-share": shareFile(); break;
    case "file-save": saveFile(); break;
    case "file-close": $("#fileSheet").hidden = true; break;
    case "backup-exp": exportBackup(b); break;
    case "backup-imp": $("#backupInput").click(); break;
    case "imp-ok": applyImport(b); break;
    case "imp-cancel": PENDING_IMPORT = null; renderConfig(); break;
    case "install": if (installEvt){ installEvt.prompt(); try { await installEvt.userChoice; } catch(e){} installEvt = null; if (VIEW==="list") renderList(); } break;
    case "ph-del": { const [f] = CUR.fotos.splice(i,1); touch(); rerenderKeep(); if (f?.ref) Store.dropPhoto(f.ref); break; }
    case "ph-left": { const f = CUR.fotos.splice(i,1)[0]; CUR.fotos.splice(i-1,0,f); touch(); rerenderKeep(); break; }
    case "sign": openSig(); break;
    case "sig-remove": CUR.assinatura = null; touch(); rerenderKeep(); break;
    case "sig-clear": sigClear(); break;
    case "sig-cancel": $("#sigSheet").hidden = true; break;
    case "sig-save": sigSave(); break;
    case "dup": { await flush(); const src = CUR; const n = newOS();
      n.cliente = clone(src.cliente); n.equip = clone(src.equip); n.tecnico = src.tecnico; n.orc.condicoes = src.orc.condicoes; n.localAssinatura = src.localAssinatura;
      if (src.desloc[0]){ n.desloc[0].saida = src.desloc[0].saida; n.desloc[0].localServico = src.desloc[0].localServico; }
      CUR = n; LIST.push(clone(n)); dirty = true; flush(); renderEditor(); window.scrollTo(0,0); toast(`Nova OS ${n.numero} criada com o mesmo cliente e equipamento.`); break; }
    case "del-os":
      if (b.dataset.armed !== "1"){ b.dataset.armed = "1"; b.textContent = "Toque de novo para excluir"; setTimeout(()=>{ if(b.isConnected){ b.dataset.armed=""; b.textContent="Excluir OS"; } }, 3500); break; }
      { const id = CUR.id, fotos = CUR.fotos.slice(); clearTimeout(saveT); dirty = false; LIST = LIST.filter(o=>o.id!==id); CUR = null;
        fotos.forEach(f => f.ref && Store.dropPhoto(f.ref));
        try { await Store.deleteOS(id); toast("OS excluída."); } catch(err){ toast("Não consegui excluir. Tente de novo."); }
        renderList(); }
      break;
    case "pdf-rel": exportPdf("rel", b); break;
    case "pdf-orc": exportPdf("orc", b); break;
  }
});
function rerenderKeep(focusId){ const y = window.scrollY; renderEditor(); window.scrollTo(0,y); if (focusId){ const el = document.getElementById(focusId); if (el) el.focus({preventScroll:true}); } }

async function onPhotos(e){
  const files = [...e.target.files]; e.target.value = ""; if (!files.length || !CUR) return;
  const os = CUR;
  for (const file of files){
    const entry = {ref:null, legenda:"", _tmp:null};
    try {
      const blob = await compressFile(file);
      entry._tmp = URL.createObjectURL(blob);
      os.fotos.push(entry); if (CUR===os) rerenderKeep();
      entry.ref = await Store.putPhoto(blob);
      touch();
    } catch(err){
      const k = os.fotos.indexOf(entry); if (k>=0) os.fotos.splice(k,1);
      toast(err && err.name==="QuotaExceededError" ? "O celular está sem espaço para fotos. Faça backup e remova OS antigas." : "Uma foto não pôde ser salva. Tente outra vez.");
      if (CUR===os) rerenderKeep();
    }
  }
}
$("#camInput").addEventListener("change", onPhotos);
$("#galInput").addEventListener("change", onPhotos);
// never persist the temporary preview URL
const _saveOS = Store.saveOS.bind(Store);
Store.saveOS = os => { const c = clone(os); c.fotos = (c.fotos||[]).filter(f=>f.ref).map(f=>({ref:f.ref, legenda:f.legenda||""})); return _saveOS(c); };

/* ---------------- signature ---------------- */
let sigCtx, sigDrawn = false;
function openSig(){
  $("#sigSheet").hidden = false; const c = $("#sigCanvas");
  const r = c.getBoundingClientRect(), dpr = Math.max(1, window.devicePixelRatio||1);
  c.width = Math.round(r.width*dpr); c.height = Math.round(r.height*dpr);
  sigCtx = c.getContext("2d"); sigCtx.scale(dpr,dpr); sigCtx.lineWidth = 2.4; sigCtx.lineCap = "round"; sigCtx.lineJoin = "round"; sigCtx.strokeStyle = "#101a3a";
  sigDrawn = false; $("#sigNome").value = CUR.assinatura?.nome || CUR.cliente.contato || "";
  sigLine();
}
function sigLine(){ const c=$("#sigCanvas"), w=c.getBoundingClientRect().width, h=c.getBoundingClientRect().height; sigCtx.save(); sigCtx.strokeStyle="#c9cfdb"; sigCtx.lineWidth=1; sigCtx.beginPath(); sigCtx.moveTo(16,h-40); sigCtx.lineTo(w-16,h-40); sigCtx.stroke(); sigCtx.restore(); }
function sigClear(){ const c=$("#sigCanvas"); sigCtx.clearRect(0,0,c.width,c.height); sigDrawn=false; sigLine(); }
(function(){
  const c = $("#sigCanvas"); let down = false, last = null;
  const pt = e => { const r=c.getBoundingClientRect(); return {x:e.clientX-r.left, y:e.clientY-r.top}; };
  c.addEventListener("pointerdown", e => { down=true; last=pt(e); c.setPointerCapture(e.pointerId); sigCtx.beginPath(); sigCtx.arc(last.x,last.y,1.1,0,Math.PI*2); sigCtx.fillStyle="#101a3a"; sigCtx.fill(); sigDrawn=true; });
  c.addEventListener("pointermove", e => { if(!down) return; const p=pt(e); sigCtx.beginPath(); sigCtx.moveTo(last.x,last.y); sigCtx.lineTo(p.x,p.y); sigCtx.stroke(); last=p; sigDrawn=true; });
  const up = () => { down=false; }; c.addEventListener("pointerup", up); c.addEventListener("pointercancel", up);
})();
function sigSave(){
  if (!sigDrawn){ toast("Peça para o cliente assinar no quadro antes de salvar."); return; }
  // export only the strokes (no guide line) by redrawing onto a trimmed canvas
  const c = $("#sigCanvas"), x = c.getContext("2d"), d = x.getImageData(0,0,c.width,c.height).data;
  let minX=c.width, minY=c.height, maxX=0, maxY=0;
  for (let y=0;y<c.height;y++) for (let xx=0;xx<c.width;xx++){ const k=(y*c.width+xx)*4; if (d[k+3]>40 && d[k]<120){ if(xx<minX)minX=xx; if(xx>maxX)maxX=xx; if(y<minY)minY=y; if(y>maxY)maxY=y; } }
  if (maxX<=minX){ toast("Peça para o cliente assinar no quadro antes de salvar."); return; }
  const pad=8, w=maxX-minX+pad*2, h=maxY-minY+pad*2, s=Math.min(1, 700/w);
  const o = document.createElement("canvas"); o.width=Math.round(w*s); o.height=Math.round(h*s);
  const ox = o.getContext("2d"); ox.scale(s,s);
  const img = x.getImageData(minX-pad<0?0:minX-pad, minY-pad<0?0:minY-pad, w, h);
  // filter out the light guide line
  for (let k=0;k<img.data.length;k+=4){ if (img.data[k]>120) img.data[k+3]=0; }
  const t = document.createElement("canvas"); t.width=w; t.height=h; t.getContext("2d").putImageData(img,0,0);
  ox.drawImage(t,0,0);
  CUR.assinatura = {img:o.toDataURL("image/png"), nome:$("#sigNome").value.trim(), em:new Date().toISOString()};
  $("#sigSheet").hidden = true; touch(); rerenderKeep();
}

/* ---------------- PDF ---------------- */
const C = {navy:[30,43,85], line:[184,192,208], mut:[95,104,128], ink:[20,26,44], red:[198,47,42], fill:[232,236,244]};
const T = s => String(s ?? "").replace(/[–—]/g,"-").replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/−/g,"-");

async function collectPhotos(o){
  const out = [];
  for (const f of o.fotos){
    const src = f._tmp || await Store.photoSrc(f.ref);
    if (!src) continue;
    try { out.push(Object.assign(await pdfImage(src), {legenda:f.legenda||""})); } catch(e){}
  }
  return out;
}
function fit(d, im, x, y, w, h){
  const s = Math.min(w/im.w, h/im.h), iw = im.w*s, ih = im.h*s;
  d.addImage(im.data, "JPEG", x+(w-iw)/2, y+(h-ih)/2, iw, ih, undefined, "FAST");
}

async function pdfRelatorio(o){
  const {jsPDF} = window.jspdf; const d = new jsPDF({unit:"mm", format:"a4"});
  const L=10, W=190, BOTTOM=278; let y=10;
  const need = h => { if (y+h > BOTTOM){ d.addPage(); y=12; } };
  const bar = t => { need(16); d.setFillColor(...C.navy); d.rect(L,y,W,6.5,"F"); d.setTextColor(255); d.setFont("helvetica","bold"); d.setFontSize(9.5); d.text(T(t).toUpperCase(), L+2.5, y+4.6); y+=6.5; };
  const cells = defs => {
    const h=10; need(h); let x=L; d.setDrawColor(...C.line); d.setLineWidth(.25);
    for (const [lab,val,w] of defs){
      d.rect(x,y,w,h); d.setFont("helvetica","bold"); d.setFontSize(6.3); d.setTextColor(...C.mut); d.text(T(lab).toUpperCase(), x+1.8, y+3.2);
      d.setFont("helvetica","normal"); d.setFontSize(10); d.setTextColor(...C.ink); d.text(d.splitTextToSize(T(val), w-3.6)[0]||"", x+1.8, y+8);
      x+=w;
    }
    y+=h;
  };
  const block = (text, minLines) => {
    d.setFont("helvetica","normal"); d.setFontSize(10); d.setTextColor(...C.ink); d.setDrawColor(...C.line); d.setLineWidth(.25);
    const lines = d.splitTextToSize(T(text), W-6); const n = Math.max(minLines, lines.length), lh=5.8;
    for (let i=0;i<n;i++){ need(lh); d.line(L,y,L,y+lh); d.line(L+W,y,L+W,y+lh); d.line(L,y+lh,L+W,y+lh); if (lines[i]) d.text(lines[i], L+3, y+4.2); y+=lh; }
    y+=3;
  };

  d.addImage(LOGO,"PNG",L,y,60,21);
  d.setTextColor(...C.navy); d.setFont("helvetica","bold"); d.setFontSize(21); d.text("ORDEM DE SERVIÇO", L+67, y+13.5);
  d.setFontSize(7); d.setTextColor(...C.mut); d.text("Nº", L+W, y+5, {align:"right"});
  d.setFontSize(20); d.setTextColor(...C.red); d.text(T(o.numero), L+W, y+13.5, {align:"right"});
  y += 26;

  const c = o.cliente, e = o.equip;
  bar("Dados do cliente");
  cells([["Cliente",c.nome,120],["Técnico",o.tecnico,70]]);
  cells([["Endereço",c.endereco,120],["Bairro",c.bairro,70]]);
  cells([["Cidade",c.cidade,70],["Estado",c.estado,20],["CEP",c.cep,30],["Celular",c.celular,70]]);
  cells([["CNPJ",c.cnpj,60],["Contato",c.contato,90],["Data",fmtDate(o.data),40]]);
  y+=3;
  bar("Dados do equipamento");
  cells([["Marca",e.marca,45],["Modelo",e.modelo,50],["Série",e.serie,55],["Horímetro",e.horimetro,40]]);
  y+=3;
  bar("Serviço solicitado"); block(o.solicitado, 2);
  bar("Defeito constatado"); block(o.defeito, 3);
  bar("Serviços executados"); block(o.executado, 3);

  bar("Dados do serviço");
  const cols = [["Data",18,"data"],["Local saída",24,"saida"],["Km saída",22,"kmSaida"],["Horário saída",20,"hSaida"],["Horário chegada",20,"hChegada"],["Início serviço",20,"inicio"],["Final serviço",20,"fim"],["Local serviço",24,"localServico"],["Km chegada",22,"kmChegada"]];
  need(8+7*2); let x=L; d.setFillColor(...C.fill); d.rect(L,y,W,8,"F"); d.setDrawColor(...C.line);
  d.setFont("helvetica","bold"); d.setFontSize(6.8); d.setTextColor(...C.mut);
  for (const [h,w] of cols){ d.rect(x,y,w,8); const ls=d.splitTextToSize(h.toUpperCase(), w-2); d.text(ls, x+w/2, y+(ls.length>1?3.4:5), {align:"center", lineHeightFactor:1.1}); x+=w; }
  y+=8;
  const rows = o.desloc.length ? o.desloc : [{}];
  const drawRows = Math.max(2, rows.length);
  d.setFont("helvetica","normal"); d.setFontSize(9); d.setTextColor(...C.ink);
  for (let r=0;r<drawRows;r++){
    need(7); x=L; const row = rows[r]||{};
    for (const [,w,k] of cols){ d.rect(x,y,w,7); let v = row[k]||""; if (k==="data") v = v ? fmtDate(v).slice(0,5) : ""; d.text(d.splitTextToSize(T(v), w-2)[0]||"", x+w/2, y+4.8, {align:"center"}); x+=w; }
    y+=7;
  }
  const sums = rows.map(tripInfo).filter(Boolean);
  if (sums.length){ d.setFontSize(8); d.setTextColor(...C.mut); d.text(T(sums.map((s,i)=> rows.length>1?`Dia ${i+1}: ${s}`:s).join("   |   ")), L, y+4); y+=6; }
  y+=3;

  bar("Observações"); block(o.observacoes, 2);

  need(30); y+=4;
  const sigY = y+16;
  if (o.assinatura?.img){
    try { const im = await loadImage(o.assinatura.img); const s = Math.min(64/im.naturalWidth, 16/im.naturalHeight); const w=im.naturalWidth*s, h=im.naturalHeight*s;
      d.addImage(o.assinatura.img, "PNG", L+2+(64-w)/2, sigY-h, w, h); } catch(err){}
  }
  d.setDrawColor(...C.ink); d.setLineWidth(.3);
  d.line(L,sigY+1,L+68,sigY+1); d.line(L+78,sigY+1,L+146,sigY+1); d.line(L+154,sigY+1,L+W,sigY+1);
  d.setFont("helvetica","normal"); d.setFontSize(11); d.setTextColor(...C.ink);
  d.text(T(o.localAssinatura || c.cidade), L+112, sigY-1, {align:"center"});
  d.text(fmtDate(o.data), L+172, sigY-1, {align:"center"});
  d.setFont("helvetica","bold"); d.setFontSize(7.5); d.setTextColor(...C.mut);
  d.text("ASSINATURA DO CLIENTE", L+34, sigY+5, {align:"center"}); d.text("LOCAL", L+112, sigY+5, {align:"center"}); d.text("DATA", L+172, sigY+5, {align:"center"});
  if (o.assinatura?.nome){ d.setFont("helvetica","normal"); d.setFontSize(8); d.text(T(o.assinatura.nome), L+34, sigY+9, {align:"center"}); }
  y = sigY+12;

  const photos = await collectPhotos(o);
  if (photos.length){
    d.addPage(); y=12; bar("Registro fotográfico"); y+=3;
    const cw=94, gap=2, ih=72, ch=80;
    photos.forEach((p,i) => {
      const col = i%2; if (col===0 && i>0) y+=ch;
      if (col===0 && y+ch > BOTTOM){ d.addPage(); y=12; }
      const px = L + col*(cw+gap);
      d.setDrawColor(...C.line); d.rect(px,y,cw,ih); fit(d,p,px+1,y+1,cw-2,ih-2);
      d.setFont("helvetica","normal"); d.setFontSize(9); d.setTextColor(...C.ink); d.text(T(p.legenda), px+cw/2, y+ih+5, {align:"center"});
    });
  }
  const n = d.getNumberOfPages();
  for (let p=1;p<=n;p++){
    d.setPage(p); d.setFillColor(...C.navy); d.rect(L,284,W,8,"F");
    d.setTextColor(255); d.setFont("helvetica","bold"); d.setFontSize(8.5);
    d.text(T(CFG.rodape || CFG.empresa), L+3, 289.3); d.text(T(CFG.telefones), L+W-3, 289.3, {align:"right"});
    if (n>1){ d.setTextColor(...C.mut); d.setFont("helvetica","normal"); d.setFontSize(7); d.text(`OS ${T(o.numero)} · página ${p} de ${n}`, L+W, 282, {align:"right"}); }
  }
  return d;
}

async function pdfOrcamento(o){
  const {jsPDF} = window.jspdf; const d = new jsPDF({unit:"mm", format:"a4"});
  const L=20, W=170, BOTTOM=282; let y=14;
  const need = h => { if (y+h > BOTTOM){ d.addPage(); y=16; } };
  const txt = (s, {bold=false, size=11.5, color=C.ink, gap=5.7}={}) => {
    d.setFont("helvetica", bold?"bold":"normal"); d.setFontSize(size); d.setTextColor(...color);
    for (const ln of d.splitTextToSize(T(s), W)){ need(gap); d.text(ln, L, y); y+=gap; }
  };
  d.addImage(LOGO,"PNG",L,y,60,21);
  d.setFont("helvetica","bold"); d.setFontSize(15); d.setTextColor(...C.navy); d.text("ORÇAMENTO", L+W, y+9, {align:"right"});
  d.setFontSize(11); d.setTextColor(...C.red); d.text(`Nº ${T(o.numero)}`, L+W, y+15.5, {align:"right"});
  y += 29;
  txt(CFG.empresa, {bold:true, size:14, gap:7}); y+=4;
  const c=o.cliente, e=o.equip;
  txt(c.nome);
  txt(`${c.cidade ? c.cidade+", " : ""}${longDate(o.data)}`);
  if (o.orc.referente) txt(`Orçamento referente a ${o.orc.referente}`);
  const eq = [e.marca, e.modelo].filter(Boolean).join(" ") + (e.serie?` Série ${e.serie}`:"") + (e.horimetro?` Horímetro ${e.horimetro}`:"");
  if (eq.trim()) txt(eq.trim());
  y+=5;
  const vx = L+W;
  d.setFontSize(12);
  for (const it of o.orc.itens){ if(!it.desc && !it.valor) continue; need(7); d.setFont("helvetica","normal"); d.setTextColor(...C.ink);
    d.text(d.splitTextToSize(T(it.desc||"Serviço"), W-50)[0], L, y); d.text(`R$ ${brl(it.valor)}`, vx, y, {align:"right"}); y+=7; }
  for (const it of o.orc.descontos){ if(!it.desc && !it.valor) continue; need(7); d.setFont("helvetica","normal"); d.setTextColor(...C.ink);
    d.text(d.splitTextToSize(T(it.desc||"Desconto"), W-50)[0], L, y); d.setTextColor(...C.red); d.text(`-R$ ${brl(it.valor)}`, vx, y, {align:"right"}); y+=7; }
  need(12); d.setDrawColor(...C.ink); d.setLineWidth(.4); d.line(L, y-3.5, vx, y-3.5); y+=2;
  d.setFont("helvetica","bold"); d.setFontSize(13); d.setTextColor(...C.ink); d.text("Total a pagar", L, y); d.text(`R$ ${brl(total(o))}`, vx, y, {align:"right"}); y+=11;
  if (o.orc.condicoes){ txt(`Condições de pagamento: ${o.orc.condicoes}`); y+=4; }
  if (CFG.pagamento){ txt("Dados para pagamento:", {bold:true}); for (const ln of CFG.pagamento.split("\n")) txt(ln || " "); }
  y+=6;

  const photos = await collectPhotos(o);
  if (photos.length){
    const cw=83, gap=4; let ih=48, ch=55;
    const rowsN = Math.ceil(photos.length/2), avail = BOTTOM - y;
    if (rowsN <= 2 && rowsN*ch > avail && avail/rowsN >= 42){ ch = avail/rowsN; ih = ch - 7; }
    let rowY = y; if (rowY + ch > BOTTOM){ d.addPage(); rowY = 16; }
    photos.forEach((p,i) => {
      const col = i%2; if (col===0 && i>0){ rowY += ch; if (rowY + ch > BOTTOM){ d.addPage(); rowY = 16; } }
      const px = L + col*(cw+gap);
      fit(d, p, px, rowY, cw, ih);
      d.setFont("helvetica","normal"); d.setFontSize(9.5); d.setTextColor(...C.ink); d.text(T(p.legenda), px+cw/2, rowY+ih+5, {align:"center"});
    });
  }
  const n = d.getNumberOfPages();
  for (let p=1;p<=n;p++){ d.setPage(p); d.setFont("helvetica","normal"); d.setFontSize(8); d.setTextColor(...C.mut);
    d.text(T([CFG.rodape||CFG.empresa, CFG.telefones].filter(Boolean).join("  ·  ")), 105, 290, {align:"center"}); }
  return d;
}

async function exportPdf(kind, btn){
  if (!CUR) return;
  if (!window.jspdf){ toast("O gerador de PDF não carregou. Feche e abra o app de novo."); return; }
  if (CUR.fotos.some(f=>!f.ref)){ toast("Espere as fotos terminarem de salvar."); return; }
  await flush();
  const label = btn.textContent; btn.disabled = true; btn.textContent = "Gerando…";
  try {
    const doc = kind==="rel" ? await pdfRelatorio(CUR) : await pdfOrcamento(CUR);
    const name = `${fileBase(CUR)}_${kind==="rel"?"Relatorio":"Orcamento"}_OS${CUR.numero}.pdf`;
    showFile(doc.output("blob"), name, kind==="rel" ? "Relatório pronto" : "Orçamento pronto");
  } catch(err){ toast("Não consegui gerar o PDF. Tente de novo."); }
  finally { btn.disabled = false; btn.textContent = label; }
}

/* ---------------- boot ---------------- */
window.addEventListener("pagehide", () => { if (dirty) flush(); });
document.addEventListener("visibilitychange", () => { if (document.hidden && dirty) flush(); });
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(()=>{}));
renderList();
Store.init(list => { LIST = list; LOADED = true; if (VIEW==="list") renderList(); })
  .catch(() => { app.innerHTML = `<div class="empty"><strong>Não consegui abrir as OS guardadas</strong>Confira se o navegador não está em aba anônima e abra o app de novo.</div>`; });
