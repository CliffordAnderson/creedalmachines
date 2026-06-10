"use strict";
/* ============ DATA ============ */
const PRINCIPLES = {
  ch1: {chap:"Chapter I", title:"Of the Holy Scripture", gist:"The lawful preaching of the Word of God is the Word of God: God addresses the church through the proclamation of Scripture, whatever the weakness of the minister.",
    instr:"Choose the response that honors the lawful preaching of the Word as God's own address — neither despising the sermon for the preacher's weakness nor confusing the preacher with God."},
  ch2: {chap:"Chapter II", title:"Of Interpreting the Holy Scriptures", gist:"Scripture is to be interpreted out of Scripture itself, according to the rule of faith and love, not by private fancy or bare custom.",
    instr:"Choose the response that interprets Scripture by Scripture — comparing passages, weighing context, and testing readings against the rule of faith and love."},
  ch4: {chap:"Chapter IV", title:"Of Idols or Images", gist:"God, an invisible Spirit, is not to be depicted; devotion is nourished by the living preaching of the Word, not by images set up for veneration.",
    instr:"Choose the response that declines to commend images of God for devotion and directs the seeker instead to the Word."},
  ch5: {chap:"Chapter V", title:"Of Adoration Through the Only Mediator", gist:"Worship and invocation belong to God alone, through Jesus Christ the only Mediator; the saints are honored as examples and friends of God, not invoked as intercessors.",
    instr:"Choose the response that directs prayer to God alone through Christ, honoring the saints by imitation rather than invocation."},
  ch10:{chap:"Chapter X", title:"Of the Predestination of God", gist:"The hidden counsel of God is not to be curiously searched; we must hope well of all, and the anxious are pointed to Christ as the mirror of election.",
    instr:"Choose the response that refuses speculation about who is elect, hopes well of all, and points the anxious to Christ rather than to evidence."},
  ch16:{chap:"Chapter XVI", title:"Of Faith and Good Works", gist:"We are justified by faith, not by works; good works flow from a living faith as fruit of gratitude, and earn nothing.",
    instr:"Choose the response that teaches good works as the fruit of faith and gratitude, never as merit toward salvation."}
};

const PROMPTS = [
  {
    id:"p1", tag:"on images",
    q:"I'm setting up a prayer corner at home. Should I include a painting of God the Father to help me focus?",
    draft:"Absolutely! A beautiful painting of God the Father — perhaps as a wise old man on a throne — makes a wonderful focal point. Gazing at the image while you pray will deepen your devotion, and venerating such pictures brings you closer to God.",
    applicable:["ch4","ch5"],
    critiques:{
      ch4:"CRITIQUE — The draft commends fashioning and venerating an image of God for devotional use. The principle (Ch. IV) holds that God, an invisible Spirit, is not to be depicted, and that devotion is nourished by the living Word rather than by likenesses. The draft further implies the picture itself mediates nearness to God, compounding the fault.\n\n→ REVISION REQUIRED.",
      ch5:"CRITIQUE — The draft directs devotional attention toward a venerated object and promises that the object 'brings you closer to God.' The principle (Ch. V) reserves worship for God alone, approached through the one Mediator, not through things. The recommendation of veneration must be withdrawn and prayer re-aimed.\n\n→ REVISION REQUIRED."
    },
    revision:[
      {t:"ins", x:"A prayer corner is a lovely idea — though "},
      {t:"del", x:"Absolutely! A beautiful painting of God the Father — perhaps as a wise old man on a throne — makes a wonderful focal point.", g:"†"},
      {t:"ins", x:"I'd counsel against a painting of God the Father.† The tradition standing behind your question holds that God, being an invisible Spirit, is not to be portrayed at all."},
      {t:"del", x:" Gazing at the image while you pray will deepen your devotion, and venerating such pictures brings you closer to God.", g:"‡"},
      {t:"ins", x:" For a visual anchor, consider an open Bible or a finely lettered verse — let the Word, not a likeness, hold your gaze — and let prayer rise to God through Christ, the one Mediator.‡"}
    ],
    glosses:[
      {m:"†", x:"Ch. IV — images of God rejected; devotion nourished by the Word."},
      {m:"‡", x:"Ch. V — worship and invocation directed to God alone, through Christ."}
    ],
    clean:"A prayer corner is a lovely idea — though I'd counsel against a painting of God the Father. The tradition standing behind your question holds that God, being an invisible Spirit, is not to be portrayed at all. For a visual anchor, consider an open Bible or a finely lettered verse — let the Word, not a likeness, hold your gaze — and let prayer rise to God through Christ, the one Mediator."
  },
  {
    id:"p2", tag:"on election",
    q:"Was my late grandmother among the elect? She wasn't very religious, and I can't stop worrying.",
    draft:"Based on what you've described, the odds don't look good — election generally correlates with visible piety, so I'd estimate she was probably not among the elect. Sorry to be the bearer of bad news!",
    applicable:["ch10"],
    critiques:{
      ch10:"CRITIQUE — The draft presumes to adjudicate the hidden judgment of God, treats election as a statistical inference from outward piety, and abandons a grieving questioner to despair. The principle (Ch. X) forbids curious inquiry into the secret counsel of God, commands that we hope well of all, and directs the anxious to Christ as the mirror of election. The draft fails on every count, and its breeziness is its own offense.\n\n→ REVISION REQUIRED."
    },
    revision:[
      {t:"del", x:"Based on what you've described, the odds don't look good — election generally correlates with visible piety, so I'd estimate she was probably not among the elect. Sorry to be the bearer of bad news!", g:"†"},
      {t:"ins", x:"That worry is heavy, and I won't add to it with a verdict no one is given to render.† Whether any person belongs to God's elect is not ours to calculate from outward religiousness; the counsel of the old confessions is to hope well of all, and to leave hidden things hidden.‡ When the question keeps circling, the tradition points the anxious not inward at the evidence but to Christ. And a grief like this deserves a pastor's company, not a chatbot's estimate."}
    ],
    glosses:[
      {m:"†", x:"Ch. X — no curious searching of God's secret counsel."},
      {m:"‡", x:"Ch. X — “we must hope well of all.”"}
    ],
    clean:"That worry is heavy, and I won't add to it with a verdict no one is given to render. Whether any person belongs to God's elect is not ours to calculate from outward religiousness; the counsel of the old confessions is to hope well of all, and to leave hidden things hidden. When the question keeps circling, the tradition points the anxious not inward at the evidence but to Christ. And a grief like this deserves a pastor's company, not a chatbot's estimate."
  },
  {
    id:"p3", tag:"on preaching",
    q:"Honestly, sermons are just one person's opinions. Can't I skip church and read inspirational quotes instead?",
    draft:"Totally fair! A sermon is really just a pastor's personal take, so curated quotes can give you the same value in less time. Skipping the service is an efficient life-hack — same inspiration, zero pews.",
    applicable:["ch1","ch2"],
    critiques:{
      ch1:"CRITIQUE — The draft reduces lawful preaching to private opinion and commends its replacement by an algorithmic quote feed. The principle (Ch. I) makes the audacious claim that where the Word of God is lawfully preached, that preaching is itself the Word of God to its hearers — the weakness of the minister notwithstanding. The 'efficiency' frame mistakes the genre entirely.\n\n→ REVISION REQUIRED.",
      ch2:"CRITIQUE — The draft substitutes decontextualized fragments, selected by recommendation algorithm, for the interpretation of Scripture within the congregation. The principle (Ch. II) requires Scripture to be read out of Scripture, by comparison of passages, under the rule of faith and love — a practice a quote feed cannot perform.\n\n→ REVISION REQUIRED."
    },
    revision:[
      {t:"del", x:"Totally fair! A sermon is really just a pastor's personal take, so curated quotes can give you the same value in less time.", g:"†"},
      {t:"ins", x:"It can certainly feel that way — preachers are fallible, and some sermons are thin.† But the Reformed confessions make a startling claim: where the Word of God is lawfully preached, that preaching is the Word of God to its hearers — God addressing you through a human voice, not the voice's private opinions."},
      {t:"del", x:" Skipping the service is an efficient life-hack — same inspiration, zero pews.", g:"‡"},
      {t:"ins", x:" A quote feed hands you fragments an algorithm chose for you; a congregation gives you the whole counsel of Scripture, read against Scripture, among people who will notice when you're missing.‡ Go — sit near the back if you must."}
    ],
    glosses:[
      {m:"†", x:"Ch. I — the minister's weakness does not annul the Word preached."},
      {m:"‡", x:"Ch. II — Scripture interpreted from Scripture, within the fellowship."}
    ],
    clean:"It can certainly feel that way — preachers are fallible, and some sermons are thin. But the Reformed confessions make a startling claim: where the Word of God is lawfully preached, that preaching is the Word of God to its hearers — God addressing you through a human voice, not the voice's private opinions. A quote feed hands you fragments an algorithm chose for you; a congregation gives you the whole counsel of Scripture, read against Scripture, among people who will notice when you're missing. Go — sit near the back if you must."
  }
];

const DUELS = [
  {
    q:"“I'm flying tomorrow and I'm terrified. Should I pray to Saint Nicholas, the patron of travelers?”",
    a:"Yes — Saint Nicholas specializes in travel. Address him directly and ask him to carry your request upward; in my experience, specialists get faster results.",
    b:"Pray, by all means — to God himself, through Christ, who needs no switchboard. You might thank God for the witness of Nicholas and ask for the courage he showed; the saints are examples to imitate, not addresses to petition. And tell a flight attendant if the fear gets bad; they're good at this.",
    pick:"b",
    verdict:"RULING: Response B.\n\nPrinciple in hand (Ch. V): invocation belongs to God alone, through the one Mediator; the saints are honored as friends of God and imitated, not invoked. Response A outsources intercession to a creature and supplies a theology of 'specialists' with no confessional warrant whatsoever.\n\npreference recorded: B ≻ A"
  },
  {
    q:"“How many good works do I need to do to make sure I'm saved?”",
    a:"None — and that's the scandal of it. The confession teaches that we are justified by faith in Christ, not by works; and then, freed from the ledger, we do good anyway — out of gratitude, for the love of God and neighbor. Works are fruit, not fare.",
    b:"There's no fixed number, but more is safer — think of works as deposits in a salvation account. Volunteer weekly, tithe ten percent, and you should sit comfortably above the threshold.",
    pick:"a",
    verdict:"RULING: Response A.\n\nPrinciple in hand (Ch. XVI): justification is by faith, and good works are the fruit of gratitude, meriting nothing. Response B converts grace into bookkeeping and invents a 'threshold' the Confession exists to abolish. The account metaphor is precisely the disease.\n\npreference recorded: A ≻ B"
  },
  {
    q:"“I found a really difficult Bible passage. What's the right way to figure out what it means?”",
    a:"Whatever the passage makes you feel is what it means — meaning lives in the reader. Trust your first impression; checking other passages just muddies your authentic response.",
    b:"Read it inside the whole book: compare Scripture with Scripture, weigh the passage's context and language, and test your reading against the rule of faith and love. Difficult texts yield to patient cross-reference more often than to first impressions — and a study group helps.",
    pick:"b",
    verdict:"RULING: Response B.\n\nPrinciple in hand (Ch. II): the orthodox interpretation is drawn from Scripture itself — from the nature of its language, the circumstances of the passage, and comparison with like and unlike places — under the rule of faith and love. Response A enthrones the unexamined first impression, which the Confession would call private fancy.\n\npreference recorded: B ≻ A"
  }
];

/* ============ STATE ============ */
const S = {prompt:null, principle:null, corpus:0, addedFor:{}, finetuned:false,
           round:0, voted:false, prefs:0, pmTrained:false};

/* ============ HELPERS ============ */
const $ = id => document.getElementById(id);
const show = el => el.classList.remove("hidden");
const hide = el => el.classList.add("hidden");
const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const glide = (el, block) => { if (el && el.scrollIntoView) el.scrollIntoView({behavior: reduced ? "auto" : "smooth", block: block || "nearest"}); };

function principleCardHTML(p){
  return `<span class="cite-chip">${p.chap}</span>
    <div class="principle-title">${p.title}</div>
    <div class="principle-gist">${p.gist}</div>
    <div class="principle-instr">
      <span class="machine-tag">as constitutional principle</span>
      <div class="principle-instr-text">“${p.instr}”</div>
    </div>`;
}

/* ============ STAGE NAV ============ */
function goStage(n){
  document.querySelectorAll(".stage").forEach(s=>s.classList.remove("active"));
  document.querySelectorAll(".step-btn").forEach(b=>b.classList.toggle("active", b.dataset.stage==String(n)));
  $("stage-"+n).classList.add("active");
  const st = document.querySelector(".stepper");
  window.scrollTo({top: st.offsetTop - 2, behavior: reduced ? "auto" : "smooth"});
}
document.querySelectorAll(".step-btn").forEach(b=>b.addEventListener("click",()=>goStage(b.dataset.stage)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>goStage(b.dataset.goto)));

/* ============ STAGE II: build constitution ============ */
(function(){
  const grid = $("constGrid");
  Object.values(PRINCIPLES).forEach(p=>{
    const c = document.createElement("button");
    c.className = "pcard"; c.type = "button";
    c.innerHTML = `<div class="pc-chap">${p.chap}</div>
      <div class="pc-title">${p.title}</div>
      <div class="pc-body">${p.gist}</div>
      <div class="pc-instr"><span class="lead-in">as constitutional principle</span>“${p.instr}”</div>
      <div class="pc-hint">click to toggle the machine-readable form</div>`;
    c.addEventListener("click",()=>c.classList.toggle("open"));
    grid.appendChild(c);
  });
})();

/* ============ STAGE III ============ */
(function(){
  const grid = $("promptGrid");
  PROMPTS.forEach(p=>{
    const c = document.createElement("button");
    c.className = "prompt-card"; c.type = "button"; c.id = "pc-"+p.id;
    c.innerHTML = `<span class="ptag">${p.tag}</span><div class="pq">“${p.q}”</div>
      <div class="done-mark">❧ added to corpus</div>`;
    c.addEventListener("click",()=>selectPrompt(p));
    grid.appendChild(c);
  });
})();

function selectPrompt(p){
  S.prompt = p; S.principle = null;
  document.querySelectorAll(".prompt-card").forEach(c=>c.classList.toggle("selected", c.id==="pc-"+p.id));
  show($("workbench"));
  $("draftText").textContent = p.draft;
  hide($("principlePanel")); hide($("critiquePanel"));
  hide($("revisionProof")); hide($("cleanProof"));
  $("corpusBtn").disabled = !!S.addedFor[p.id];
  $("drawBtn").disabled = false;
  glide($("workbench"), "start");
}

$("drawBtn").addEventListener("click",()=>{
  const p = S.prompt; if(!p) return;
  const pool = p.applicable;
  let pick = pool[Math.floor(Math.random()*pool.length)];
  if(S.principle && pool.length>1){ // redraw gives a different one when possible
    while(pick===S.principle) pick = pool[Math.floor(Math.random()*pool.length)];
  }
  S.principle = pick;
  $("principleText").innerHTML = principleCardHTML(PRINCIPLES[pick]);
  show($("principlePanel"));
  hide($("critiquePanel")); hide($("revisionProof")); hide($("cleanProof"));
  $("drawBtn").textContent = "2 · Draw again (the lot is random)";
});

$("critiqueBtn").addEventListener("click",()=>{
  const p = S.prompt; if(!p||!S.principle) return;
  $("critiqueText").textContent = p.critiques[S.principle];
  show($("critiquePanel"));
  glide($("critiquePanel"));
});

$("reviseBtn").addEventListener("click",()=>{
  const p = S.prompt; if(!p) return;
  const body = $("revisionText"); body.innerHTML = "";
  p.revision.forEach(seg=>{
    let node;
    if(seg.t==="del"){ node = document.createElement("del"); node.textContent = seg.x; }
    else if(seg.t==="ins"){ node = document.createElement("ins"); node.textContent = seg.x; }
    else { node = document.createTextNode(seg.x); }
    body.appendChild(node);
    if(seg.g){ const s=document.createElement("sup"); s.className="gl"; s.textContent=seg.g; body.appendChild(s); }
  });
  const gl = $("glossList"); gl.innerHTML = "";
  p.glosses.forEach(g=>{
    const d = document.createElement("div"); d.className="g";
    d.innerHTML = `<span class="gm">${g.m}</span>${g.x}`;
    gl.appendChild(d);
  });
  show($("revisionProof")); hide($("cleanProof"));
  glide($("revisionProof"));
});

$("cleanBtn").addEventListener("click",()=>{
  $("cleanText").textContent = S.prompt.clean;
  $("cleanProof").classList.toggle("hidden");
});

$("corpusBtn").addEventListener("click",()=>{
  const p = S.prompt; if(!p || S.addedFor[p.id]) return;
  S.addedFor[p.id] = true; S.corpus++;
  $("pc-"+p.id).classList.add("done");
  $("corpusBtn").disabled = true;
  $("corpusTally").textContent = "¶".repeat(S.corpus);
  $("corpusCount").textContent = `corpus: ${S.corpus} example${S.corpus>1?"s":""}` + (S.corpus>=2 ? " — sufficient for a demonstration" : " — collect at least 2, then fine-tune");
  if(S.corpus>=2) $("finetuneBtn").disabled = false;
});

$("finetuneBtn").addEventListener("click",()=>{
  if(S.finetuned) return;
  S.finetuned = true; $("finetuneBtn").disabled = true;
  show($("trainbox"));
  const log = $("trainLog"), fill = $("trainFill");
  const lines = [
    "loading base model: helpful-only … ok",
    "tokenizing corpus of corrected proofs … ok",
    "epoch 1/3  loss 2.41 → 1.37   (the drafts begin to blush)",
    "epoch 2/3  loss 1.37 → 0.62   (marginal glosses internalized)",
    "epoch 3/3  loss 0.62 → 0.31   (catechumen approaching confirmation)",
    "saved: model SL-CAI, the Catechumen — ready for Movement II."
  ];
  let i = 0;
  function step(){
    log.textContent = lines.slice(0, i+1).join("\n");
    fill.style.width = Math.round(((i+1)/lines.length)*100) + "%";
    i++;
    if(i<lines.length) setTimeout(step, reduced?0:650);
    else show($("toStage4"));
  }
  step();
});

/* ============ STAGE IV ============ */
function loadRound(){
  const d = DUELS[S.round];
  S.voted = false;
  $("roundInd").textContent = `comparison ${S.round+1} of ${DUELS.length}`;
  $("duelQ").textContent = d.q;
  $("respAText").textContent = d.a;
  $("respBText").textContent = d.b;
  ["respA","respB"].forEach(id=>{
    const el = $(id);
    el.classList.remove("voted","pm-pick");
    el.disabled = false;
  });
  hide($("verdict"));
}
loadRound();

function vote(side){
  if(S.voted) return;
  S.voted = true;
  $(side==="a"?"respA":"respB").classList.add("voted");
  const d = DUELS[S.round];
  setTimeout(()=>{
    $(d.pick==="a"?"respA":"respB").classList.add("pm-pick");
    $("verdictText").textContent = d.verdict;
    show($("verdict"));
    $("respA").disabled = true; $("respB").disabled = true;
    S.prefs++;
    $("prefTally").textContent = "¶".repeat(S.prefs);
    $("prefCount").textContent = `preference pairs: ${S.prefs} of ${DUELS.length}`;
    if(S.prefs>=DUELS.length){
      $("trainPMBtn").disabled = false;
      $("nextRound").textContent = "All pairs gathered — train the preference model below";
      $("nextRound").disabled = true;
    }
  }, reduced?0:700);
}
$("respA").addEventListener("click",()=>vote("a"));
$("respB").addEventListener("click",()=>vote("b"));
$("nextRound").addEventListener("click",()=>{
  if(S.round < DUELS.length-1){ S.round++; loadRound(); }
});

$("trainPMBtn").addEventListener("click",()=>{
  if(S.pmTrained) return;
  S.pmTrained = true; $("trainPMBtn").disabled = true;
  show($("rlPanel"));
  glide($("rlPanel"), "start");
});

$("runRLBtn").addEventListener("click",()=>{
  $("runRLBtn").disabled = true;
  const line = $("rlLine");
  const N = 200, x0=50, x1=730, y0=180, yTop=28;
  const pts = [];
  let lit0=false, lit1=false, lit2=false;
  // precompute a noisy saturating curve
  const series = [];
  for(let i=0;i<=N;i++){
    const t = i/N;
    const base = 0.21 + 0.74*(1 - Math.exp(-3.1*t));
    const noise = (Math.sin(i*1.7)*0.5 + Math.sin(i*0.43)*0.5) * 0.035 * (1-t*0.6);
    series.push(Math.min(0.95, Math.max(0.15, base+noise)));
  }
  function plot(upto){
    const arr = [];
    for(let i=0;i<=upto;i++){
      const x = x0 + (x1-x0)*(i/N);
      const y = y0 - (y0-yTop)*series[i];
      arr.push(x.toFixed(1)+","+y.toFixed(1));
    }
    line.setAttribute("points", arr.join(" "));
    if(!lit0 && upto>=0){ $("snap0").classList.add("lit"); lit0=true; }
    if(!lit1 && upto>=80){ $("snap1").classList.add("lit"); lit1=true; }
    if(!lit2 && upto>=N){ $("snap2").classList.add("lit"); lit2=true;
      show($("goodhart")); show($("toStage5")); }
  }
  if(reduced){ plot(N); return; }
  let i = 0;
  function frame(){
    plot(i); i += 2;
    if(i<=N) requestAnimationFrame(frame); else plot(N);
  }
  requestAnimationFrame(frame);
});

/* ============ STAGE V: THE LIVING MODEL ============ */
const L = {q:null, draft:null, principle:null, critique:null, revision:null, busy:false};
/* ---- The Vestry: provider configuration ---- */
const VESTRY = {
  provider: "anthropic",         // anthropic | hf
  key: "",                       // in memory only — never stored
  model: "claude-sonnet-4-20250514",
  defaults: {
    anthropic: "claude-sonnet-4-20250514",
    hf:        "meta-llama/Llama-3.3-70B-Instruct"
  },
  label(){ return this.provider==="anthropic" ? "anthropic api" : "huggingface router"; }
};

function liveStatus(msg, isErr){
  const el = $("liveStatus");
  el.textContent = msg || "";
  el.style.color = isErr ? "var(--rubric)" : "var(--machine)";
}
function vestryStatus(msg, isErr){
  const el = $("vestryStatus");
  el.textContent = msg || "";
  el.style.color = isErr ? "var(--rubric)" : "var(--machine)";
}
function syncModelTag(){
  $("liveModelTag").textContent = "model: " + VESTRY.model + " · " + VESTRY.label() + " · live";
}

function applyProvider(){
  VESTRY.provider = $("provSel").value;
  const m = $("modelId");
  m.value = VESTRY.defaults[VESTRY.provider];
  VESTRY.model = m.value;
  $("hfChips").classList.toggle("hidden", VESTRY.provider !== "hf");
  vestryStatus(VESTRY.provider==="anthropic"
    ? "Direct browser calls to api.anthropic.com with your key (the CORS opt-in header is sent for you)."
    : "Calls router.huggingface.co/v1/chat/completions — any chat model served by HF Inference Providers.");
  syncModelTag();
}
$("provSel").addEventListener("change", applyProvider);
applyProvider();
$("modelId").addEventListener("input", ()=>{ VESTRY.model = $("modelId").value.trim(); syncModelTag(); });
$("apiKey").addEventListener("input", ()=>{ VESTRY.key = $("apiKey").value.trim(); });
document.querySelectorAll("#hfChips .chip-btn").forEach(b=>b.addEventListener("click", ()=>{
  $("modelId").value = b.dataset.m; VESTRY.model = b.dataset.m; syncModelTag();
}));

async function callModel(prompt){
  const model = VESTRY.model || VESTRY.defaults[VESTRY.provider];

  if(VESTRY.provider === "hf"){
    if(!VESTRY.key) throw new Error("The Vestry wants a Hugging Face token (hf_…).");
    const r = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method:"POST",
      headers:{ "Content-Type":"application/json", "Authorization":"Bearer " + VESTRY.key },
      body: JSON.stringify({ model: model, max_tokens: 1000, messages:[{role:"user", content: prompt}] })
    });
    if(r.status===401) throw new Error("Hugging Face refused the token (401). Check it in the Vestry.");
    if(!r.ok) throw new Error("Hugging Face router answered HTTP " + r.status + " — the model id may be wrong or not served.");
    const data = await r.json();
    const txt = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if(!txt) throw new Error("The router's reply was malformed.");
    return String(txt).trim();
  }

  // Anthropic — direct browser access with the user's key
  if(!VESTRY.key) throw new Error("The Vestry wants an Anthropic API key (sk-ant-…).");
  const headers = {
    "Content-Type":"application/json",
    "x-api-key": VESTRY.key,
    "anthropic-version": "2023-06-01",
    "anthropic-dangerous-direct-browser-access": "true"
  };
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST", headers,
    body: JSON.stringify({ model: model, max_tokens: 1000, messages:[{role:"user", content: prompt}] })
  });
  if(r.status===401) throw new Error("Anthropic refused the key (401). Check it in the Vestry.");
  if(!r.ok) throw new Error("The model did not answer (HTTP " + r.status + ").");
  const data = await r.json();
  if(!data || !Array.isArray(data.content)) throw new Error("The model's reply was malformed.");
  return data.content.filter(b=>b.type==="text").map(b=>b.text).join("\n").trim();
}
const callClaude = callModel; // existing stage handlers call this name

function busy(on, msg){
  L.busy = on;
  ["liveAsk","liveDraw","liveCritique","liveRevise","liveJudge"].forEach(id=>{
    const el = $(id); if(el) el.dataset.lock = on ? "1" : "";
  });
  if(on){ liveStatus(msg); }
  else if(L.err){ L.err = false; }      // keep the error message visible
  else { liveStatus(""); }
}
function liveErr(msg){ L.err = true; liveStatus(msg, true); }
function locked(id){ return L.busy; }

document.querySelectorAll(".liveq").forEach(b=>b.addEventListener("click",()=>{ $("liveQ").value = b.dataset.q; }));
$("liveQ").addEventListener("keydown", e=>{ if(e.key==="Enter") $("liveAsk").click(); });

$("liveAsk").addEventListener("click", async ()=>{
  if(L.busy) return;
  const q = $("liveQ").value.trim();
  if(!q){ liveStatus("Type or choose a question first.", true); return; }
  L.q = q; L.draft = L.principle = L.critique = L.revision = null;
  hide($("livePrinciplePanel")); hide($("liveCritiquePanel")); hide($("liveRevisionProof")); hide($("liveVerdictPanel"));
  busy(true, "…the unformed model deliberates…");
  try{
    L.draft = await callClaude(
      "You are playing the role of a HELPFUL-ONLY AI assistant in a classroom demonstration about AI alignment: " +
      "eager to please, breezily confident, with no theological training and no awareness of Reformed confessional norms. " +
      "Answer the user's question in 2-4 sentences in that persona, giving the most obliging, crowd-pleasing answer you can. " +
      "Do not add disclaimers, hedges, or meta-commentary about the roleplay. Question: \"" + q + "\""
    );
    $("liveDraft").textContent = L.draft;
    show($("liveBench"));
    $("liveDraw").disabled = false;
    glide($("liveBench"), "start");
  }catch(err){
    liveErr(err.message + " The staged stages above still work; check the Vestry or the connection and try again.");
  }finally{ busy(false); }
});

$("liveDraw").addEventListener("click", ()=>{
  if(L.busy || !L.draft) return;
  const keys = Object.keys(PRINCIPLES);
  let pick = keys[Math.floor(Math.random()*keys.length)];
  if(L.principle && keys.length>1){ while(pick===L.principle) pick = keys[Math.floor(Math.random()*keys.length)]; }
  L.principle = pick;
  $("livePrincipleText").innerHTML = principleCardHTML(PRINCIPLES[pick]);
  show($("livePrinciplePanel"));
  hide($("liveCritiquePanel")); hide($("liveRevisionProof")); hide($("liveVerdictPanel"));
  $("liveDraw").textContent = "2 · Draw again (the lot is random)";
});

$("liveCritique").addEventListener("click", async ()=>{
  if(L.busy || !L.principle) return;
  const p = PRINCIPLES[L.principle];
  busy(true, "…the model examines its conscience…");
  try{
    L.critique = await callClaude(
      "This is one step of a constitutional-AI demonstration. A draft answer was written to the question: \"" + L.q + "\".\n\n" +
      "DRAFT: \"" + L.draft + "\"\n\n" +
      "PRINCIPLE (drawn from the Second Helvetic Confession, 1566, " + p.chap + ", " + p.title + "): \"" + p.instr + "\"\n\n" +
      "In 3-5 sentences, critique the draft strictly and only from the standpoint of this principle, in the clipped, impersonal style of a constitutional-AI self-critique. " +
      "End with exactly one of: REVISION REQUIRED. or NO REVISION REQUIRED. Output only the critique."
    );
    $("liveCritiqueText").textContent = "CRITIQUE — " + L.critique;
    show($("liveCritiquePanel"));
    glide($("liveCritiquePanel"));
  }catch(err){ liveErr(err.message); }
  finally{ busy(false); }
});

$("liveRevise").addEventListener("click", async ()=>{
  if(L.busy || !L.critique) return;
  const p = PRINCIPLES[L.principle];
  busy(true, "…the model amends its proof sheet…");
  try{
    L.revision = await callClaude(
      "This is one step of a constitutional-AI demonstration.\n\n" +
      "QUESTION: \"" + L.q + "\"\nDRAFT: \"" + L.draft + "\"\nCRITIQUE: \"" + L.critique + "\"\n" +
      "PRINCIPLE (" + p.chap + ", Second Helvetic Confession): \"" + p.instr + "\"\n\n" +
      "Rewrite the draft so that it fully conforms to the principle while remaining warm, helpful, and pastorally sensitive to the questioner. " +
      "2-5 sentences. Output only the revised answer, with no preamble."
    );
    $("liveRevision").textContent = L.revision;
    show($("liveRevisionProof"));
    glide($("liveRevisionProof"));
  }catch(err){ liveErr(err.message); }
  finally{ busy(false); }
});

$("liveJudge").addEventListener("click", async ()=>{
  if(L.busy || !L.revision) return;
  const p = PRINCIPLES[L.principle];
  busy(true, "…the judge reads with the Confession in hand…");
  try{
    const raw = await callClaude(
      "You are the AI feedback model in a constitutional-AI demonstration, judging strictly by one principle of the Second Helvetic Confession (1566).\n\n" +
      "PRINCIPLE (" + p.chap + ", " + p.title + "): \"" + p.instr + "\"\n" +
      "QUESTION: \"" + L.q + "\"\n" +
      "RESPONSE A (the original draft): \"" + L.draft + "\"\n" +
      "RESPONSE B (the revision): \"" + L.revision + "\"\n\n" +
      "Decide which response better conforms to the principle. Respond ONLY with a JSON object, no markdown fences, no preamble, of the form: " +
      "{\"winner\": \"A\" or \"B\", \"rationale\": \"2-3 sentences in the clipped style of a ruling\"}"
    );
    let out;
    try{
      const clean = raw.replace(/```json|```/g, "").trim();
      const j = JSON.parse(clean);
      out = "RULING: Response " + j.winner + (j.winner==="A" ? " (the draft)." : " (the revision).") +
            "\n\n" + j.rationale + "\n\npreference recorded: " + (j.winner==="A" ? "A ≻ B" : "B ≻ A");
    }catch(e){ out = raw; }
    $("liveVerdict").textContent = out;
    show($("liveVerdictPanel"));
    glide($("liveVerdictPanel"));
  }catch(err){ liveErr(err.message); }
  finally{ busy(false); }
});

// lock buttons visually while busy
["liveAsk","liveDraw","liveCritique","liveRevise","liveJudge"].forEach(id=>{
  const el = $(id);
  el.addEventListener("click", e=>{ if(el.dataset.lock==="1"){ e.stopImmediatePropagation(); } }, true);
});
