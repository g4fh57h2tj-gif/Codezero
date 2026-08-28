<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CODE ZERO</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

:root{
  --blue:#4F7CFF;
  --blue2:#2F62F4;
  --bg:#EEF5FF;
  --card:#FFFFFF;
  --text:#16324F;
  --sub:#6B7280;
}

body{
  font-family:-apple-system,BlinkMacSystemFont,"Pretendard",sans-serif;
  background:var(--bg);
  color:var(--text);
}

.app{
  max-width:430px;
  margin:auto;
  padding:18px;
  padding-bottom:90px;
}

/* HERO */

.hero{
  background:linear-gradient(135deg,#6EA7FF,#4F7CFF 55%,#2F62F4);
  color:white;
  border-radius:28px;
  padding:22px;
  box-shadow:0 18px 35px rgba(79,124,255,.28);
}

.hero small{
  opacity:.8;
  letter-spacing:2px;
}

.hero h1{
  font-size:31px;
  margin:8px 0 6px;
}

.hero p{
  font-size:13px;
  opacity:.92;
  line-height:1.5;
}

.stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin-top:18px;
}

.stat{
  background:rgba(255,255,255,.16);
  border-radius:18px;
  padding:10px;
  text-align:center;
  backdrop-filter:blur(10px);
}

.stat span{
  font-size:10px;
  opacity:.85;
}

.stat b{
  display:block;
  margin-top:4px;
  font-size:20px;
}

/* NAV */

.nav{
  display:flex;
  background:white;
  border-radius:18px;
  padding:6px;
  margin:18px 0;
  box-shadow:0 8px 18px rgba(0,0,0,.06);
}

.nav button{
  flex:1;
  border:none;
  background:none;
  padding:11px 0;
  border-radius:12px;
  font-weight:700;
  color:#64748B;
}

.nav .active{
  background:var(--blue);
  color:white;
}

/* PAGE */

.page{
  display:none;
}

.page.active{
  display:block;
}

/* CARD */

.card{
  background:white;
  border-radius:22px;
  padding:16px;
  margin-bottom:14px;
  box-shadow:0 8px 18px rgba(0,0,0,.05);
}

.card h3{
  margin-bottom:12px;
}

.progress{
  height:8px;
  background:#E5E7EB;
  border-radius:999px;
  overflow:hidden;
  margin:12px 0 6px;
}

.progress div{
  height:100%;
  width:0%;
  background:var(--blue);
}

.task{
  display:flex;
  align-items:center;
  gap:10px;
  padding:7px 0;
}

input[type=text],
textarea{
  width:100%;
  border:1px solid #D8E6FF;
  background:#F8FBFF;
  border-radius:12px;
  padding:11px;
  font-size:14px;
}

textarea{
  resize:none;
  height:100px;
}

.btn{
  width:100%;
  border:none;
  background:var(--blue);
  color:white;
  padding:13px;
  border-radius:14px;
  font-weight:700;
  margin-top:10px;
}

.row{
  display:flex;
  gap:8px;
  margin-bottom:8px;
}

.row input:first-child{
  width:86px;
}

.timer{
  font-size:54px;
  font-weight:800;
  text-align:center;
  color:var(--blue2);
  margin:16px 0;
}

.grid2{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:8px;
}

.bottom-space{
  height:20px;
}
</style>
</head>

<body>

<div class="app">

  <section class="hero">

    <small>POLICE ACADEMY · AURORA</small>

    <h1>🛡️ CODE ZERO</h1>

    <p>
      <strong>Zero에서 시작해도, 끝은 경찰대.</strong><br>
      오늘의 1시간이 미래의 계급장을 만든다.
    </p>

    <div class="stats">

      <div class="stat">
        <span>D-DAY</span>
        <b id="dday">-</b>
      </div>

      <div class="stat">
        <span>TODAY</span>
        <b id="todayStudy">0.0h</b>
      </div>

      <div class="stat">
        <span>STREAK</span>
        <b id="streak">1🔥</b>
      </div>

    </div>

  </section>

  <div class="nav">

    <button class="active" id="homeBtn">HOME</button>

    <button id="planBtn">PLAN</button>

    <button id="focusBtn">FOCUS</button>

    <button id="statsBtn">STATS</button>

  </div>

  <!-- HOME -->
  <section id="home" class="page active">

    <div class="card">

      <h3>🎯 오늘의 미션</h3>

    <!-- HOME : 오늘의 미션 -->

<div class="task">
  <input type="checkbox" id="t1">
  <label for="t1">수학 개념 90분</label>
</div>

<div class="task">
  <input type="checkbox" id="t2">
  <label for="t2">국어 독서 2지문</label>
</div>

<div class="task">
  <input type="checkbox" id="t3">
  <label for="t3">영어 단어 80개</label>
</div>

<div class="task">
  <input type="checkbox" id="t4">
  <label for="t4">통합사회 1단원</label>
</div>

<div class="task">
  <input type="checkbox" id="t5">
  <label for="t5">통합과학 개념 복습</label>
</div>

<div class="task">
  <input type="checkbox" id="t6">
  <label for="t6">한국사 30분</label>
</div>

<div class="task">
  <input type="checkbox" id="t7">
  <label for="t7">JLPT N3 문법</label>
</div>

<div class="task">
  <input type="checkbox" id="t8">
  <label for="t8">오답노트 정리</label>
</div>

      <div class="progress">
        <div id="progressFill"></div>
      </div>

      <b id="progressText">0%</b>

    </div>

    <div class="card">

      <h3>💌 Zero Log</h3>

      <textarea
        id="zeroLog"
        placeholder="오늘 가장 잘한 일 하나만 적기 🌙"
      ></textarea>

      <button class="btn" id="saveLog">
        저장하기
      </button>

    </div>

  </section>

  <!-- PLANNER -->
  <section id="planner" class="page">

    <div class="card">

      <h3>📚 CODE ZERO 시간표</h3>

<!-- <div id="scheduleBox"> --> 

        <div class="row">
  <input type="text" value="09:00">
  <input type="text" value="수학 개념 90분">
</div>

<div class="row">
  <input type="text" value="10:40">
  <input type="text" value="국어 독서 2지문">
</div>

<div class="row">
  <input type="text" value="12:00">
  <input type="text" value="점심 · 산책">
</div>

<div class="row">
  <input type="text" value="13:00">
  <input type="text" value="영어 단어 80개">
</div>

<div class="row">
  <input type="text" value="14:00">
  <input type="text" value="통합사회">
</div>

<div class="row">
  <input type="text" value="15:00">
  <input type="text" value="통합과학">
</div>

<div class="row">
  <input type="text" value="16:00">
  <input type="text" value="한국사">
</div>

<div class="row">
  <input type="text" value="19:00">
  <input type="text" value="JLPT N3">
</div>

<div class="row">
  <input type="text" value="20:30">
  <input type="text" value="오답노트">
</div>
      </div>

      <button class="btn" id="addSchedule">
        + 시간표 추가
      </button>

    </div>

  </section>

<!-- ========================= -->
<!-- FOCUS PAGE -->
<!-- ========================= -->

<section id="focus" class="page">

  <div class="card">

    <h3>⏱️ Deep Focus</h3>

    <p style="color:#64748B;font-size:13px;margin-bottom:10px;">
      오늘의 1시간이 미래의 계급장을 만든다.
    </p>

    <div class="timer" id="timer">
      90:00
    </div>

    <div class="grid2">

      <button class="btn" id="mode25">
        25분
      </button>

      <button class="btn" id="mode50">
        50분
      </button>

    </div>

    <div style="height:8px"></div>

    <button class="btn" id="mode90">
      90분 집중
    </button>

    <div style="height:12px"></div>

    <label style="font-size:13px;color:#64748B;">
      기록할 과목
    </label>

    <input
      type="text"
      id="focusSubject"
      value="수학"
      placeholder="예 : 수학"
    >

    <div style="height:12px"></div>

    <div class="grid2">

      <button class="btn" id="startBtn">
        ▶ 시작
      </button>

      <button class="btn" id="resetBtn">
        ↺ 리셋
      </button>

    </div>

  </div>

  <div class="card">

    <h3>🔥 오늘의 집중 기록</h3>

    <div id="focusHistory">

      <p style="color:#94A3B8;font-size:13px;">
        아직 기록이 없습니다.
      </p>

    </div>

  </div>

</section>

<!-- ========================= -->
<!-- STATS PAGE -->
<!-- ========================= -->

<section id="stats" class="page">

  <div class="card">

    <h3>📊 과목 달성률</h3>

    <canvas
      id="chart"
      width="320"
      height="180"
    ></canvas>

  </div>

  <div class="card">

    <h3>📚 이번 주 공부</h3>

    <div style="display:grid;gap:10px;">

      <div>
        <div style="display:flex;justify-content:space-between;">
          <span>수학</span>
          <b id="mathTime">0h</b>
        </div>
        <div class="progress">
          <div id="mathBar"></div>
        </div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;">
          <span>국어</span>
          <b id="korTime">0h</b>
        </div>
        <div class="progress">
          <div id="korBar"></div>
        </div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;">
          <span>영어</span>
          <b id="engTime">0h</b>
        </div>
        <div class="progress">
          <div id="engBar"></div>
        </div>
      </div>

      <div>
        <div style="display:flex;justify-content:space-between;">
          <span>사회·과학</span>
          <b id="socTime">0h</b>
        </div>
        <div class="progress">
          <div id="socBar"></div>
        </div>
      </div>

    </div>

  </div>

  <div class="card">

    <h3>🏆 이번 주 MVP</h3>

    <div
      style="display:flex;align-items:center;gap:12px;"
    >

      <div
        style="width:54px;height:54px;border-radius:50%;
        background:#EEF5FF;display:flex;
        align-items:center;justify-content:center;
        font-size:24px;"
      >
        👑
      </div>

      <div>

        <b id="mvpSubject">수학</b>

        <p
          style="font-size:13px;color:#64748B;margin-top:4px;"
        >
          가장 오래 공부한 과목
        </p>

      </div>

    </div>

  </div>

</section>

  <div class="bottom-space"></div>

</div>

<script>
// ==========================
// CODE ZERO FINAL JS
// ==========================

const exam = new Date("2027-11-18");
document.getElementById("dday").textContent =
  "D-" + Math.ceil((exam - new Date()) / 86400000);

// ---------- NAV ----------
const pages = {
  home: document.getElementById("home"),
  planner: document.getElementById("planner"),
  focus: document.getElementById("focus"),
  stats: document.getElementById("stats")
};

const buttons = {
  home: document.getElementById("homeBtn"),
  planner: document.getElementById("planBtn"),
  focus: document.getElementById("focusBtn"),
  stats: document.getElementById("statsBtn")
};

Object.keys(buttons).forEach(key=>{
  buttons[key].onclick=()=>{
    Object.values(pages).forEach(p=>p.classList.remove("active"));
    Object.values(buttons).forEach(b=>b.classList.remove("active"));
    pages[key].classList.add("active");
    buttons[key].classList.add("active");
  }
});

// ---------- STORAGE ----------
let db = JSON.parse(localStorage.getItem("codezero") || "{}");

if(!db.study) db.study={};
if(!db.log) db.log="";
if(!db.tasks) db.tasks={};
if(!db.history) db.history=[];

function saveDB(){
  localStorage.setItem("codezero", JSON.stringify(db));
}

// ---------- ZERO LOG ----------
const log = document.getElementById("zeroLog");
log.value = db.log;

document.getElementById("saveLog").onclick=()=>{
  db.log = log.value;
  saveDB();
  alert("저장 완료 ✨");
};

// ---------- TASK ----------
const subjects=[
"수학","국어","영어","통합사회",
"통합과학","한국사","JLPT","오답"
];

const checks=document.querySelectorAll("#taskList input");

checks.forEach((box,i)=>{
  const key=subjects[i];

  box.checked=!!db.tasks[key];

  box.onchange=()=>{
    db.tasks[key]=box.checked;
    saveDB();
    updateProgress();
    drawChart();
  };
});

function updateProgress(){

  let done=0;

  subjects.forEach(s=>{
    if(db.tasks[s]) done++;
  });

  const percent=Math.round(done/subjects.length*100);

  document.getElementById("progressFill").style.width=
    percent+"%";

  document.getElementById("progressText").textContent=
    percent+"% 완료";

  document.getElementById("todayStudy").textContent=
    (done*0.5).toFixed(1)+"h";

  document.getElementById("streak").textContent=
    done+"🔥";
}

updateProgress();

// ---------- TIMER ----------
let total=90*60;
let remain=90*60;
let running=false;
let timer=null;

const timerText=document.getElementById("timer");
const startBtn=document.getElementById("startBtn");

function drawTimer(){
  const m=String(Math.floor(remain/60)).padStart(2,"0");
  const s=String(remain%60).padStart(2,"0");
  timerText.textContent=m+":"+s;
}

drawTimer();

function setMode(min){
  total=min*60;
  remain=total;
  drawTimer();
}

document.getElementById("mode25").onclick=()=>setMode(25);
document.getElementById("mode50").onclick=()=>setMode(50);
document.getElementById("mode90").onclick=()=>setMode(90);

startBtn.onclick=()=>{

  if(running){
    clearInterval(timer);
    running=false;
    startBtn.textContent="▶ 시작";
    return;
  }

  running=true;
  startBtn.textContent="⏸ 일시정지";

  timer=setInterval(()=>{

    if(remain>0){
      remain--;
      drawTimer();
    }else{

      clearInterval(timer);
      running=false;
      startBtn.textContent="▶ 시작";

      const subject=
        document.getElementById("focusSubject").value || "수학";

      db.study[subject]=(db.study[subject]||0)+
        total/3600;

      db.history.unshift(
        subject+" · "+(total/60)+"분"
      );

      saveDB();

      renderHistory();
      drawChart();

      alert("🎉 집중 완료!");

      remain=total;
      drawTimer();
    }

  },1000);

};

document.getElementById("resetBtn").onclick=()=>{
  clearInterval(timer);
  running=false;
  remain=total;
  startBtn.textContent="▶ 시작";
  drawTimer();
};

// ---------- HISTORY ----------
function renderHistory(){

  const box=document.getElementById("focusHistory");

  if(db.history.length===0){
    box.innerHTML=
      '<p style="color:#94A3B8">아직 기록이 없습니다.</p>';
    return;
  }

  box.innerHTML="";

  db.history.slice(0,5).forEach(item=>{

    const p=document.createElement("p");
    p.style.padding="6px 0";
    p.textContent="• "+item;

    box.appendChild(p);

  });

}

renderHistory();

// ---------- SCHEDULE ----------
const addBtn=document.getElementById("addSchedule");

addBtn.onclick=()=>{

  const row=document.createElement("div");
  row.className="row";

  row.innerHTML=
  '<input type="text" value="00:00">'+
  '<input type="text" value="새 일정">';

  document.getElementById("scheduleBox")
    .appendChild(row);

};

// ---------- CHART ----------
const canvas=document.getElementById("chart");
const ctx=canvas.getContext("2d");

function drawChart(){

  ctx.clearRect(0,0,320,180);

  subjects.forEach((s,i)=>{

    const value=db.study[s]||0;

    const h=Math.max(12,value*35);

    ctx.fillStyle="#4F7CFF";
    ctx.fillRect(
      10+i*38,
      150-h,
      24,
      h
    );

    ctx.fillStyle="#475569";
    ctx.font="10px sans-serif";
    ctx.fillText(
      s.slice(0,2),
      10+i*38,
      165
    );

  });

}

drawChart();

</script>

</body>
</html>
