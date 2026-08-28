const subs=['수학','국어','영어','통합사회','통합과학','한국사','JLPT','오답'];
const exam=new Date('2027-11-18');dday.textContent='D-'+Math.ceil((exam-new Date())/86400000);
let data=JSON.parse(localStorage.getItem('czv9')||'{}');const t=document.getElementById('tasks');
subs.forEach(s=>{let l=document.createElement('label');let c=document.createElement('input');c.type='checkbox';c.checked=!!data[s];c.onchange=save;l.append(c,document.createTextNode(s));t.append(l)});
function save(){subs.forEach((s,i)=>data[s]=t.children[i].firstChild.checked);localStorage.setItem('czv9',JSON.stringify(data));let d=subs.filter(s=>data[s]).length;prog.value=d/subs.length*100;pct.textContent=Math.round(prog.value)+'%';}
save();
log.value=localStorage.log9||'';log.oninput=()=>localStorage.log9=log.value;
let sec=5400,r=false,h;function draw(){let m=String(Math.floor(sec/60)).padStart(2,'0'),s=String(sec%60).padStart(2,'0');time.textContent=`${m}:${s}`;}draw();
start.onclick=()=>{if(r){clearInterval(h);r=false;start.textContent='시작';return;}r=true;start.textContent='일시정지';h=setInterval(()=>{if(sec){sec--;draw();}else{clearInterval(h);alert('집중 완료!');}},1000);};reset.onclick=()=>{clearInterval(h);r=false;start.textContent='시작';sec=5400;draw();};
let sc=JSON.parse(localStorage.schedule||'[{"t":"09:00","s":"수학 90분"},{"t":"11:00","s":"영어"}]');function render(){sched.innerHTML='';sc.forEach((v,i)=>{let d=document.createElement('div');d.className='slot';d.innerHTML=`<input value='${v.t}'><input value='${v.s}'><button>✕</button>`;d.children[0].oninput=e=>{sc[i].t=e.target.value;store()};d.children[1].oninput=e=>{sc[i].s=e.target.value;store()};d.children[2].onclick=()=>{sc.splice(i,1);store();render()};sched.append(d);});}
function store(){localStorage.schedule=JSON.stringify(sc);}add.onclick=()=>{sc.push({t:'00:00',s:'새 과목'});store();render();};render();
const today=new Date().toDateString();if(localStorage.last!==today){let ls=localStorage.last;let y=new Date();y.setDate(y.getDate()-1);let st=+(localStorage.streak||0);st=(ls===y.toDateString())?st+1:1;localStorage.streak=st;localStorage.last=today;}streak.textContent=(localStorage.streak||1)+'🔥';
