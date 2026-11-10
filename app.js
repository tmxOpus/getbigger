"use strict";
/* ---------- Продукты: на 100 г. USDA FoodData Central; творог, сметана, кефир — таблицы Скурихина и Тутельяна ---------- */
// key: [название, ккал, белки, жиры, углеводы, клетчатка, типичная порция г]
const FOODS={
chicken:["Куриная грудка, запечённая",165,31,3.6,0,0,150],
thigh:["Куриное бедро без кожи, готовое",209,26,10.9,0,0,130],
turkey:["Индейка, грудка запечённая",147,30,2.1,0,0,150],
beef:["Говяжий фарш 10% жира, готовый",217,26,11.8,0,0,130],
pork:["Свиная вырезка, запечённая",143,26,3.5,0,0,130],
salmon:["Лосось, запечённый",206,22,12.4,0,0,130],
cod:["Треска, запечённая",105,23,0.9,0,0,170],
tuna:["Тунец консервированный в собственном соку",116,25.5,0.8,0,0,120],
shrimp:["Креветки варёные",99,24,0.3,0.2,0,150],
mackerel:["Скумбрия, запечённая",262,24,17.8,0,0,120],
egg:["Яйцо куриное варёное (1 шт ≈ 55 г)",155,12.6,10.6,1.1,0,110],
eggwhite:["Яичный белок",52,10.9,0.2,0.7,0,130],
tvorog5:["Творог 5%",121,17.2,5,1.8,0,200],
tvorog0:["Творог обезжиренный",71,16.5,0,1.3,0,200],
greek:["Греческий йогурт 2%, без добавок",73,10,1.9,3.9,0,200],
milk:["Молоко 2,5%",52,2.8,2.5,4.7,0,250],
kefir:["Кефир 1%",40,3,1,4,0,250],
cheese:["Сыр полутвёрдый 45%",356,25,27.3,2.2,0,30],
smetana:["Сметана 15%",162,2.6,15,3.6,0,30],
whey:["Сывороточный протеин, порошок (ориентир, сверьте с этикеткой)",380,78,6,8,0,30],
tofu:["Тофу твёрдый",144,17.3,8.7,2.8,2.3,150],
oats:["Овсяные хлопья, сухие",379,13.2,6.5,67.7,10.1,70],
buckdry:["Гречка, сухая",346,11.7,2.7,74.9,10.3,80],
buckwheat:["Гречка варёная",92,3.4,0.6,19.9,2.7,250],
rice:["Рис белый варёный",130,2.7,0.3,28.2,0.4,250],
ricebrown:["Рис бурый варёный",123,2.7,1,25.6,1.6,250],
pasta:["Макароны варёные",158,5.8,0.9,30.9,1.8,250],
bulgur:["Булгур варёный",83,3.1,0.2,18.6,4.5,250],
quinoa:["Киноа варёная",120,4.4,1.9,21.3,2.8,200],
potato:["Картофель варёный",87,1.9,0.1,20.1,1.8,300],
batat:["Батат запечённый",90,2,0.2,20.7,3.3,250],
breadw:["Хлеб цельнозерновой",252,12.5,3.5,42.7,6,60],
breadr:["Хлеб ржаной",259,8.5,3.3,48.3,5.8,60],
bread:["Хлеб белый",265,9,3.2,49,2.7,60],
crisp:["Хлебцы рисовые",387,8.2,2.8,81.5,4.2,20],
lentil:["Чечевица варёная",116,9,0.4,20.1,7.9,200],
chick:["Нут варёный",164,8.9,2.6,27.4,7.6,200],
beans:["Фасоль красная варёная",127,8.7,0.5,22.8,6.4,200],
broccoli:["Брокколи",34,2.8,0.4,6.6,2.6,150],
cucumber:["Огурец",15,0.7,0.1,3.6,0.5,150],
tomato:["Помидор",18,0.9,0.2,3.9,1.2,150],
carrot:["Морковь",41,0.9,0.2,9.6,2.8,100],
spinach:["Шпинат",23,2.9,0.4,3.6,2.2,80],
pepper:["Перец сладкий",31,1,0.3,6,2.1,120],
cabbage:["Капуста белокочанная",25,1.3,0.1,5.8,2.5,150],
banana:["Банан",89,1.1,0.3,22.8,2.6,120],
apple:["Яблоко",52,0.3,0.2,13.8,2.4,180],
orange:["Апельсин",47,0.9,0.1,11.8,2.4,180],
berries:["Черника",57,0.7,0.3,14.5,2.4,100],
dates:["Финики",282,2.5,0.4,75,8,40],
raisin:["Изюм",299,3.1,0.5,79.2,3.7,30],
almond:["Миндаль",579,21.2,49.9,21.6,12.5,25],
walnut:["Грецкий орех",654,15.2,65.2,13.7,6.7,25],
pb:["Арахисовая паста",588,25,50,20,6,20],
avocado:["Авокадо",160,2,14.7,8.5,6.7,80],
olive:["Масло оливковое",884,0,100,0,0,10],
butter:["Масло сливочное",717,0.9,81,0.1,0,10],
honey:["Мёд",304,0.3,0,82.4,0.2,20],
choc:["Шоколад тёмный 70–85%",598,7.8,42.6,45.9,10.9,25]
};
const SRC_P=["chicken","cod","tvorog0","tuna","turkey","eggwhite","shrimp","greek","tvorog5","pork","whey","egg","beef","salmon","tofu"];
const SRC_C=["rice","buckwheat","potato","oats","pasta","banana","breadw","bulgur"];
const SRC_F=["olive","almond","avocado","walnut","pb"];

/* ---------- Упражнения ---------- */
// [название, основная группа, вспомогательные группы]
const EX={
squat:["Приседания со штангой","Квадрицепсы",["Бёдра сзади и ягодицы"]],
legpress:["Жим ногами","Квадрицепсы",["Бёдра сзади и ягодицы"]],
lunge:["Болгарские сплит-приседания","Квадрицепсы",["Бёдра сзади и ягодицы"]],
deadlift:["Становая тяга","Бёдра сзади и ягодицы",["Спина"]],
rdl:["Румынская тяга","Бёдра сзади и ягодицы",["Спина"]],
legcurl:["Сгибание ног в тренажёре","Бёдра сзади и ягодицы",[]],
hip:["Ягодичный мост со штангой","Бёдра сзади и ягодицы",[]],
calf:["Подъёмы на носки","Икры",[]],
bench:["Жим штанги лёжа","Грудь",["Плечи","Руки"]],
incline:["Жим гантелей на наклонной скамье","Грудь",["Плечи","Руки"]],
dips:["Отжимания на брусьях","Грудь",["Плечи","Руки"]],
ohp:["Жим штанги стоя","Плечи",["Руки"]],
lateral:["Махи гантелями в стороны","Плечи",[]],
face:["Тяга каната к лицу","Плечи",["Спина"]],
row:["Тяга штанги в наклоне","Спина",["Руки"]],
pullup:["Подтягивания","Спина",["Руки"]],
latpd:["Тяга верхнего блока","Спина",["Руки"]],
cable:["Тяга горизонтального блока","Спина",["Руки"]],
curl:["Сгибания рук с гантелями","Руки",[]],
tri:["Разгибания рук на блоке","Руки",[]],
plank:["Планка или скручивания","Кор",[]]
};
// M — базовое, A — подсобное, I — изолирующее
const DAYS={
fullA:["Всё тело A",[["squat","M"],["bench","M"],["row","M"],["rdl","A"],["lateral","I"],["plank","I"]]],
fullB:["Всё тело B",[["deadlift","M"],["ohp","M"],["pullup","M"],["legpress","A"],["incline","A"],["curl","I"]]],
fullC:["Всё тело C",[["squat","M"],["incline","M"],["cable","M"],["hip","A"],["tri","I"],["face","I"]]],
upA:["Верх A",[["bench","M"],["row","M"],["incline","A"],["latpd","A"],["lateral","I"],["tri","I"],["curl","I"]]],
loA:["Низ A",[["squat","M"],["rdl","M"],["legpress","A"],["legcurl","A"],["calf","I"],["plank","I"]]],
upB:["Верх B",[["ohp","M"],["pullup","M"],["dips","A"],["cable","A"],["face","I"],["curl","I"],["tri","I"]]],
loB:["Низ B",[["deadlift","M"],["lunge","M"],["legpress","A"],["legcurl","A"],["calf","I"],["plank","I"]]],
push:["Жимы",[["bench","M"],["ohp","M"],["incline","A"],["lateral","I"],["tri","I"]]],
pull:["Тяги",[["pullup","M"],["row","M"],["cable","A"],["face","I"],["curl","I"]]],
legs:["Ноги",[["squat","M"],["rdl","M"],["legpress","A"],["legcurl","A"],["calf","I"]]],
pushB:["Жимы B",[["incline","M"],["ohp","M"],["dips","A"],["lateral","I"],["tri","I"]]],
pullB:["Тяги B",[["row","M"],["latpd","M"],["cable","A"],["face","I"],["curl","I"]]],
legsB:["Ноги B",[["deadlift","M"],["lunge","M"],["legpress","A"],["legcurl","A"],["calf","I"]]]
};
const SPLITS={2:["fullA","fullB"],3:["fullA","fullB","fullC"],4:["upA","loA","upB","loB"],5:["upA","loA","push","pull","legs"],6:["push","pull","legs","pushB","pullB","legsB"]};
const WEEKDAYS={2:[0,3],3:[0,2,4],4:[0,1,3,4],5:[0,1,2,4,5],6:[0,1,2,3,4,5]};
const WD=["Пн","Вт","Ср","Чт","Пт","Сб","Вс"];

const GOALS={
gain:["Набрать мышечную массу","Небольшой профицит калорий и много белка"],
cut:["Снизить процент жира","Дефицит калорий с сохранением мышц"],
strength:["Стать сильнее","Тяжёлые базовые упражнения, калории на уровне расхода"],
endurance:["Повысить выносливость","Больше углеводов, силовая работа как дополнение"],
keep:["Поддерживать форму","Калории на уровне расхода"]
};
const SPORTS={gym:"Тренажёрный зал",endurance:"Бег, велосипед, плавание, лыжи",team:"Игровые виды",combat:"Единоборства"};
const SPORT_MET={gym:7,endurance:8,team:7,combat:7.8};

/* ---------- Состояние и хранение ---------- */
const LS="getbigger.v1";
const EXAMPLE={example:true,sex:"m",age:25,height:180,weight:78,bf:0,job:"low",sport:"gym",sporth:1,exp:"i",goal:"gain",days:4};
let state={profile:{...EXAMPLE},foods:[],pt:0,days:{}};
/* Шифрование: ключ AES-256-GCM создаётся на устройстве, хранится в IndexedDB как неизвлекаемый и пользователю не виден. */
const SEC="getbigger.sec";
let key=null,secBox=null,persistChain=Promise.resolve();
try{secBox=JSON.parse(localStorage.getItem(SEC)||"null")}catch(e){}
try{const s=JSON.parse(localStorage.getItem(LS)||localStorage.getItem("dobor.v1")||"null");if(s&&s.profile)state=Object.assign(state,s)}catch(e){}
const b64=u=>{let s="";for(let i=0;i<u.length;i+=0x8000)s+=String.fromCharCode.apply(null,u.subarray(i,i+0x8000));return btoa(s)};
const ub64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function deriveKey(pass,salt,iter){
  const base=await crypto.subtle.importKey("raw",new TextEncoder().encode(pass),"PBKDF2",false,["deriveKey"]);
  return crypto.subtle.deriveKey({name:"PBKDF2",salt,iterations:iter,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
}
function getDeviceKey(){return new Promise((res,rej)=>{
  if(!(window.indexedDB&&window.crypto&&crypto.subtle))return rej();
  const rq=indexedDB.open("getbigger",1);
  rq.onupgradeneeded=()=>rq.result.createObjectStore("keys");
  rq.onerror=()=>rej();
  rq.onsuccess=()=>{
    const db=rq.result,g=db.transaction("keys").objectStore("keys").get("device");
    g.onerror=()=>rej();
    g.onsuccess=async()=>{
      if(g.result)return res(g.result);
      try{
        const k=await crypto.subtle.generateKey({name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
        const tx=db.transaction("keys","readwrite");tx.objectStore("keys").put(k,"device");
        tx.oncomplete=()=>res(k);tx.onerror=()=>rej();
      }catch(e){rej()}
    };
  };
})}
async function enc(obj){
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,new TextEncoder().encode(JSON.stringify(obj)));
  return{iv:b64(iv),ct:b64(new Uint8Array(ct))};
}
async function dec(box,k){
  const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:ub64(box.iv)},k||key,ub64(box.ct));
  return JSON.parse(new TextDecoder().decode(pt));
}
function persistLocal(){
  if(!key){try{localStorage.setItem(LS,JSON.stringify(state))}catch(e){}return persistChain}
  persistChain=persistChain.then(async()=>{
    if(!key)return;
    try{const box=await enc(state);localStorage.setItem(SEC,JSON.stringify({v:2,...box}))}catch(e){}
  });
  return persistChain;
}
function dropPlain(){[LS,"dobor.v1"].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}})}
function dropAll(){dropPlain();try{localStorage.removeItem(SEC)}catch(e){}try{indexedDB.deleteDatabase("getbigger")}catch(e){}}
const localText=()=>"";
const savedText=()=>"";
// Приводит загруженные извне данные к ожидаемым типам
function clean(st){
  const num=(v,min,max,d)=>{v=Number(v);return v>=min&&v<=max?v:d},pick=(v,list,d)=>list.includes(v)?v:d,p=st.profile||{};
  const out={profile:{example:false,sex:pick(p.sex,["m","f"],"m"),age:num(p.age,14,90,25),height:num(p.height,130,230,180),weight:num(p.weight,35,250,78),bf:num(p.bf,3,60,0),
    job:pick(p.job,["low","mid","high"],"low"),sport:pick(p.sport,Object.keys(SPORTS),"gym"),sporth:num(p.sporth,0,30,0),exp:pick(p.exp,["n","i","a"],"i"),goal:pick(p.goal,Object.keys(GOALS),"keep"),days:num(p.days,2,6,3)},
    foods:[],pt:Date.now(),days:{}};
  (Array.isArray(st.foods)?st.foods:[]).slice(0,500).forEach(f=>{if(f&&/^u[a-z0-9]+$/.test(f.id))out.foods.push({id:f.id,n:String(f.n).slice(0,60),k:num(f.k,0,900,0),p:num(f.p,0,100,0),f:num(f.f,0,100,0),c:num(f.c,0,100,0)})});
  Object.keys(st.days||{}).forEach(k=>{
    if(!/^\d{4}-\d{2}-\d{2}$/.test(k))return;const d=st.days[k];
    out.days[k]={t:Date.now(),e:(Array.isArray(d&&d.e)?d.e:[]).slice(0,200).map(e=>({id:String(e.id).replace(/[^a-z0-9]/gi,"").slice(0,20),key:String(e.key||"").replace(/[^a-z0-9]/gi,"").slice(0,20),
      n:String(e.n).slice(0,90),g:num(e.g,0,3000,0),k:num(e.k,0,30000,0),p:num(e.p,0,3000,0),f:num(e.f,0,3000,0),c:num(e.c,0,3000,0),fi:num(e.fi,0,3000,0)}))};
  });
  return out;
}
let cloud=null,flushing=false,flushTimer=0,retried=false;const dirty=new Set();

function docBody(id){
  if(id==="profile")return{profile:state.profile,foods:state.foods,t:state.pt};
  const d=state.days[id.slice(2)]||{e:[],t:Date.now()};return{e:d.e,t:d.t};
}
function save(id){
  persistLocal();
  if(cloud){dirty.add(id);clearTimeout(flushTimer);flushTimer=setTimeout(flush,700)}
}
async function flush(){
  if(flushing||!cloud)return;flushing=true;
  let id;
  try{
    while(dirty.size){id=dirty.values().next().value;dirty.delete(id);await cloud.doc(id).set(docBody(id))}
    retried=false;setStatus(savedText());
  }catch(e){
    if(e&&e.code==="unavailable"&&!retried){retried=true;dirty.add(id);flushTimer=setTimeout(flush,3000)}
    else{cloud=null;setStatus("Не удалось сохранить в аккаунт. Данные остаются в этом браузере")}
  }
  flushing=false;
}
function setStatus(t){document.getElementById("status").textContent=t}
async function initCloud(){
  setStatus(localText());
  if(!window.claude||!window.claude.use)return;
  try{
    const [db,user]=await Promise.all([claude.use("db"),claude.use("user")]);
    if(!db||!user)return;
    const uid=await user.id();if(!uid)return;
    const col=db.collection("data/users/"+uid);
    const snap=await Promise.race([col.limit(1000).get(),new Promise((_,r)=>setTimeout(()=>r({code:"timeout"}),10000))]);
    const seen=new Set();let changed=false;
    for(const d of snap.docs){
      const b=d.data();if(!b||b.enc||d.id==="sec")continue;
      seen.add(d.id);
      if(d.id==="profile"){if((b.t||0)>(state.pt||0)&&b.profile){state.profile=JSON.parse(JSON.stringify(b.profile));state.foods=JSON.parse(JSON.stringify(b.foods||[]));state.pt=b.t;changed=true}}
      else if(d.id.startsWith("d-")){const k=d.id.slice(2),loc=state.days[k];if(!loc||(b.t||0)>(loc.t||0)){state.days[k]={e:JSON.parse(JSON.stringify(b.e||[])),t:b.t||0};changed=true}}
    }
    cloud=col;
    if(state.pt&&!seen.has("profile"))dirty.add("profile");
    Object.keys(state.days).forEach(k=>{if(!seen.has("d-"+k)&&state.days[k].e.length)dirty.add("d-"+k)});
    persistLocal();
    if(changed)route();
    if(dirty.size)flush();else setStatus(savedText());
  }catch(e){/* остаёмся на локальном хранении */}
}

/* ---------- Переход со старой защиты кодом-паролем: спрашивает код один раз и снимает её ---------- */
function legacyUnlock(box){return new Promise(res=>{
  const L=$("lock"),inp=$("lock-pass"),msg=$("lock-msg"),alt=$("lock-alt");let armed=false;
  L.hidden=false;$("app").inert=true;
  $("lock-text").textContent="Раньше эти данные были закрыты кодом-паролем. Введите его один раз: после этого код больше не понадобится.";
  alt.textContent="Не помню код: стереть данные";
  const close=v=>{inp.value="";L.hidden=true;$("app").inert=false;res(v)};
  $("lock-form").onsubmit=async e=>{
    e.preventDefault();if(!inp.value)return;msg.textContent="Проверяю…";
    try{close(await dec(box,await deriveKey(inp.value,ub64(box.salt),box.iter)))}catch(err){msg.textContent="Код не подошёл.";inp.select()}
  };
  alt.onclick=()=>{if(!armed){armed=true;alt.textContent="Стереть без возможности восстановления? Нажмите ещё раз";return}close(null)};
  setTimeout(()=>inp.focus(),50);
})}

/* ---------- Расчёты ---------- */
const r0=x=>Math.round(x),r5=x=>Math.round(x/5)*5,r10=x=>Math.round(x/10)*10;
const nf=x=>r0(x).toLocaleString("ru-RU");
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function food(key){
  if(FOODS[key])return FOODS[key];
  const c=state.foods.find(f=>f.id===key);return c?[c.n,c.k,c.p,c.f,c.c,0,100]:null;
}
function macrosOf(key,g){const f=food(key);return{n:f[0],g,k:f[1]*g/100,p:f[2]*g/100,f:f[3]*g/100,c:f[4]*g/100,fi:f[5]*g/100}}

function rx(type,style,exp){
  // подходы × повторения, отдых в минутах
  const T={
    hyper:{M:[3,"6–10",2.5],A:[3,"8–12",2],I:[3,"10–15",1.25]},
    strength:{M:[4,"3–5",4],A:[3,"6–8",2.5],I:[2,"8–12",1.5]},
    endur:{M:[3,"4–6",3],A:[2,"6–8",2.5],I:[2,"10–15",1.25]}
  }[style][type].slice();
  if(exp==="n"){if(type!=="M")T[0]=2;if(style==="strength"&&type==="M"){T[0]=3;T[1]="5"}}
  if(exp==="a"&&type==="M"&&style==="hyper")T[0]=4;
  return T;
}
function trainingPlan(p){
  const cap={n:3,i:4,a:6}[p.exp];
  const extra=p.sport!=="gym"||p.goal==="endurance";
  const days=Math.max(2,extra?Math.min(p.days,(p.goal==="gain"||p.goal==="strength")?3:2):Math.min(p.days,cap));
  const style=p.goal==="strength"?"strength":p.goal==="endurance"?"endur":"hyper";
  const vol={};let totalMin=0;
  const sessions=SPLITS[days].map((k,i)=>{
    let min=10;
    const rows=DAYS[k][1].map(([e,type])=>{
      const [sets,reps,rest]=rx(type,style,p.exp);min+=sets*(rest+1);
      vol[EX[e][1]]=(vol[EX[e][1]]||0)+sets;EX[e][2].forEach(g=>vol[g]=(vol[g]||0)+sets/2);
      return{name:EX[e][0],sets,reps,rest};
    });
    min=r5(min);totalMin+=min;
    return{title:DAYS[k][0],wd:WEEKDAYS[days][i],rows,min};
  });
  return{days,style,sessions,vol,avgMin:totalMin/days,extra};
}
function calc(p){
  const W=p.weight,H=p.height,bf=p.bf>0?p.bf:0;
  const ffm=bf?W*(1-bf/100):0;
  const bmr=ffm?500+22*ffm:10*W+6.25*H-5*p.age+(p.sex==="m"?5:-161);
  const pal={low:1.4,mid:1.6,high:1.8}[p.job];
  const plan=trainingPlan(p);
  const gymK=(5-1)*W*(plan.avgMin/60)*plan.days/7;
  const sportK=(SPORT_MET[p.sport]-1)*W*(p.sporth||0)/7;
  const tdee=bmr*pal+gymK+sportK;
  let kcal=tdee,ppk=1.6,fpk=1;
  if(p.goal==="gain"){kcal=tdee*(1+{n:.15,i:.12,a:.10}[p.exp]);ppk=2}
  if(p.goal==="cut"){kcal=tdee*.8;ppk=2.2;fpk=.8}
  if(p.goal==="strength")ppk=1.8;
  const floor=ffm?Math.max(bmr,30*ffm+gymK+sportK):bmr;
  const floored=kcal<floor;if(floored)kcal=floor;
  const bmi=W/Math.pow(H/100,2);
  const refW=(!bf&&bmi>30)?25*Math.pow(H/100,2):W;
  let prot=(p.goal==="cut"&&ffm)?2.6*ffm:ppk*refW;
  let fat=Math.max(fpk*refW,.2*kcal/9);
  let carb=Math.max(0,(kcal-4*prot-9*fat)/4);
  const hpd=(plan.days*plan.avgMin/60+(p.sporth||0))/7;
  const carbRef=hpd<.5?"3–5":hpd<=1?"5–7":hpd<=3?"6–10":"8–12";
  return{bmr,pal,gymK,sportK,tdee,kcal,prot,fat,carb,fiber:14*kcal/1000,ffm,floored,bmi,refW,
    weekly:(kcal-tdee)*7/7700,plan,hpd,carbRef,eq:ffm?"Каннингем":"Миффлин — Сан-Жеор"};
}

/* ---------- Навигация ---------- */
const VIEWS={day:viewDay,nutrition:viewNutrition,training:viewTraining,profile:viewProfile,sources:viewSources};
let curDate=dkey(new Date());
function dkey(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function dparse(k){const [y,m,d]=k.split("-").map(Number);return new Date(y,m-1,d)}
function shift(k,n){const d=dparse(k);d.setDate(d.getDate()+n);return dkey(d)}
function route(){
  const name=(location.hash||"").slice(1);const v=VIEWS[name]?name:"day";
  document.querySelectorAll("#tabs a").forEach(a=>a.getAttribute("href")==="#"+v?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));
  VIEWS[v]();
}
window.addEventListener("hashchange",route);
const $=id=>document.getElementById(id);
const view=()=>$("view");
function exampleNote(){
  return state.profile.example?`<div class="note"><span>Сейчас расчёт сделан для примера: мужчина, 25 лет, 180 см, 78 кг, цель — набор массы. Введите свои данные, и цифры пересчитаются.</span><a class="btn sm" href="#profile">Заполнить профиль</a></div>`:"";
}

/* ---------- Дневник ---------- */
let picked=null;
function dayEntries(){return(state.days[curDate]||{e:[]}).e}
function totals(list){return list.reduce((a,e)=>({k:a.k+e.k,p:a.p+e.p,f:a.f+e.f,c:a.c+e.c,fi:a.fi+(e.fi||0)}),{k:0,p:0,f:0,c:0,fi:0})}
function viewDay(){
  const today=dkey(new Date());
  const title=dparse(curDate).toLocaleDateString("ru-RU",{weekday:"long",day:"numeric",month:"long"});
  view().innerHTML=`${exampleNote()}
  <div class="datebar">
    <button class="btn ghost sm" id="d-prev" aria-label="Предыдущий день">←</button>
    <h2>${curDate===today?"Сегодня, ":""}${esc(title)}</h2>
    <button class="btn ghost sm" id="d-next" aria-label="Следующий день">→</button>
    ${curDate!==today?`<button class="btn ghost sm" id="d-today">К сегодня</button>`:""}
  </div>
  <div class="cols">
    <div class="stack">
      <div class="label" id="summary"></div>
      <div class="sec"><h2>Неделя</h2><p class="sub">Калории по дням. Пунктир — ваша норма.</p><div class="week" id="week"></div></div>
    </div>
    <div class="stack">
      <div class="sec">
        <h2>Записать еду</h2>
        <label class="field"><span>Продукт</span><input type="search" id="q" placeholder="Например: гречка, творог, банан" autocomplete="off"></label>
        <div class="found" id="found"></div>
        <div class="addrow" id="addrow" hidden>
          <label class="field"><span>Граммы</span><input type="number" id="grams" min="1" max="3000" step="5" inputmode="numeric"></label>
          <div class="pv" id="pv"></div>
          <button class="btn" id="add">Записать</button>
        </div>
        <details id="custom"><summary>Продукта нет в списке</summary>
          <div class="fgrid">
            <label class="field wide"><span>Название</span><input type="text" id="c-n" maxlength="60"></label>
            <label class="field"><span>Ккал на 100 г</span><input type="number" id="c-k" min="0" max="900"></label>
            <label class="field"><span>Белки, г</span><input type="number" id="c-p" min="0" max="100" step="0.1"></label>
            <label class="field"><span>Жиры, г</span><input type="number" id="c-f" min="0" max="100" step="0.1"></label>
            <label class="field"><span>Углеводы, г</span><input type="number" id="c-c" min="0" max="100" step="0.1"></label>
            <div class="wide"><button class="btn ghost" id="c-add">Сохранить продукт</button> <span class="sub" id="c-msg"></span></div>
          </div>
        </details>
      </div>
      <div class="sec"><h2>Съедено</h2><ul class="entries" id="entries"></ul></div>
      <div class="sec"><h2>Чем добрать</h2><div id="ideas"></div></div>
    </div>
  </div>`;
  $("d-prev").onclick=()=>{curDate=shift(curDate,-1);picked=null;viewDay()};
  $("d-next").onclick=()=>{curDate=shift(curDate,1);picked=null;viewDay()};
  if($("d-today"))$("d-today").onclick=()=>{curDate=today;picked=null;viewDay()};
  $("q").oninput=renderFound;
  $("grams").oninput=renderPv;
  $("grams").onkeydown=e=>{if(e.key==="Enter")addPicked()};
  $("add").onclick=addPicked;
  $("c-add").onclick=addCustom;
  renderFound();refreshDay();
}
function renderFound(){
  const q=$("q").value.trim().toLowerCase();
  let keys;
  if(q){
    keys=Object.keys(FOODS).filter(k=>FOODS[k][0].toLowerCase().includes(q)).concat(state.foods.filter(f=>f.n.toLowerCase().includes(q)).map(f=>f.id)).slice(0,8);
  }else{
    const recent=[];Object.keys(state.days).sort().reverse().some(k=>{state.days[k].e.slice().reverse().forEach(e=>{if(e.key&&food(e.key)&&!recent.includes(e.key))recent.push(e.key)});return recent.length>=6});
    keys=recent.concat(["chicken","buckwheat","tvorog5","egg","oats","banana"].filter(k=>!recent.includes(k))).slice(0,6);
  }
  $("found").innerHTML=keys.length?keys.map(k=>{const f=food(k);return`<button type="button" data-k="${esc(k)}" aria-pressed="${picked===k}"><span>${esc(f[0])}</span><small class="num">${r0(f[1])} ккал · Б ${f[2]} · Ж ${f[3]} · У ${f[4]}</small></button>`}).join(""):`<div class="empty" style="padding:10px;border:0">Ничего не нашлось. Добавьте свой продукт ниже.</div>`;
  $("found").querySelectorAll("button").forEach(b=>b.onclick=()=>pick(b.dataset.k));
}
function pick(k){
  picked=k;$("addrow").hidden=false;$("grams").value=food(k)[6];renderFound();renderPv();$("grams").focus();$("grams").select();
}
function renderPv(){
  if(!picked)return;const g=+$("grams").value;
  if(!(g>0)){$("pv").textContent="Укажите вес порции";return}
  const m=macrosOf(picked,g);
  $("pv").textContent=`${m.n}: ${r0(m.k)} ккал, белки ${r0(m.p)} г, жиры ${r0(m.f)} г, углеводы ${r0(m.c)} г`;
}
function pushEntry(key,g){
  const m=macrosOf(key,g);const d=state.days[curDate]||(state.days[curDate]={e:[],t:0});
  d.e.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),key,n:m.n,g,k:+m.k.toFixed(1),p:+m.p.toFixed(1),f:+m.f.toFixed(1),c:+m.c.toFixed(1),fi:+m.fi.toFixed(1)});
  d.t=Date.now();
}
function addPicked(){
  const g=+$("grams").value;if(!picked||!(g>0)||g>3000)return;
  pushEntry(picked,g);save("d-"+curDate);
  picked=null;$("addrow").hidden=true;$("q").value="";renderFound();refreshDay();$("q").focus();
}
function addCustom(){
  const n=$("c-n").value.trim(),v=["c-k","c-p","c-f","c-c"].map(i=>parseFloat($(i).value));
  if(!n||v.some(x=>!(x>=0))){$("c-msg").textContent="Заполните название и все четыре значения.";return}
  const id="u"+Date.now().toString(36);
  state.foods.push({id,n,k:v[0],p:v[1],f:v[2],c:v[3]});state.pt=Date.now();save("profile");
  ["c-n","c-k","c-p","c-f","c-c"].forEach(i=>$(i).value="");$("c-msg").textContent="";$("custom").open=false;pick(id);
}
function macroRow(cls,name,eaten,target){
  const left=target-eaten,pct=Math.min(100,eaten/target*100);
  return`<div class="macro"><div class="hd"><b><i class="dot ${cls}"></i>${name}</b><span class="num">${r0(eaten)} из ${r0(target)} г</span></div>
  <div class="bar ${cls}${left<-target*.1?" over":""}"><i style="width:${pct}%"></i></div>
  <div class="left">${left>=0.5?`осталось ${r0(left)} г`:left>-0.5?"норма набрана":`сверх нормы ${r0(-left)} г`}</div></div>`;
}
function refreshDay(){
  const c=calc(state.profile),list=dayEntries(),t=totals(list),left=c.kcal-t.k;
  $("summary").innerHTML=`<h2>Пищевая ценность за день</h2>
  <div class="bigrow"><div><div class="big">${nf(Math.abs(left))}</div></div><div class="cap">${left>=0?"ккал осталось":"ккал сверх нормы"}<br><span class="num">съедено ${nf(t.k)} из ${nf(c.kcal)}</span></div></div>
  <div class="bar${left<-c.kcal*.05?" over":""}"><i style="width:${Math.min(100,t.k/c.kcal*100)}%"></i></div>
  <div class="lrow thick" style="padding:5px 0 0"></div>
  ${macroRow("p","Белки",t.p,c.prot)}${macroRow("c","Углеводы",t.c,c.carb)}${macroRow("f","Жиры",t.f,c.fat)}
  <div class="lrow"><span>Клетчатка</span><span class="v">${r0(t.fi)} из ${r0(c.fiber)} г</span></div>`;
  $("entries").innerHTML=list.length?list.map(e=>`<li><span>${esc(e.n)}, ${r0(e.g)} г</span><span class="kc">${r0(e.k)} ккал</span><button class="x" data-id="${esc(e.id)}" aria-label="Удалить запись">×</button><span class="m num">Б ${r0(e.p)} · Ж ${r0(e.f)} · У ${r0(e.c)}</span></li>`).join(""):`<li class="empty" style="display:block">За этот день пока ничего не записано. Найдите продукт выше и укажите граммы.</li>`;
  $("entries").querySelectorAll(".x").forEach(b=>b.onclick=()=>{const d=state.days[curDate];d.e=d.e.filter(e=>e.id!==b.dataset.id);d.t=Date.now();save("d-"+curDate);refreshDay()});
  renderIdeas(c,t);renderWeek(c);
}
function ideas(c,t){
  const W=state.profile.weight,out=[];
  for(let i=0;i<3;i++){
    const rem={p:c.prot-t.p,f:c.fat-t.f,c:c.carb-t.c},items=[];
    const take=(key,g)=>{const m=macrosOf(key,g);items.push(m);rem.p-=m.p;rem.f-=m.f;rem.c-=m.c};
    if(rem.p>=10){
      const mp=Math.min(rem.p,.5*W);
      const ok=SRC_P.filter(k=>FOODS[k][3]/FOODS[k][2]*mp<=Math.max(2,rem.f*.8));
      const k=ok[Math.floor(i*ok.length/3)]||SRC_P[i];
      take(k,Math.max(20,Math.min(r10(FOODS[k][6]*1.5),r10(mp/FOODS[k][2]*100))));
    }
    if(rem.c>=15){const k=SRC_C[(i*2)%SRC_C.length];take(k,Math.max(30,Math.min(r10(FOODS[k][6]*1.3),r10(Math.min(rem.c,90)/FOODS[k][4]*100))))}
    if(rem.f>=8){const k=SRC_F[i%SRC_F.length];take(k,Math.max(5,Math.min(r5(FOODS[k][6]*1.2),r5(Math.min(rem.f,25)/FOODS[k][3]*100))))}
    if(items.length&&!out.some(o=>o.map(x=>x.n).join()===items.map(x=>x.n).join()))out.push(items);
  }
  return out;
}
function renderIdeas(c,t){
  const left=c.kcal-t.k,el=$("ideas");
  if(left<-c.kcal*.05){el.innerHTML=`<p class="prose">Сегодня вышло на ${nf(-left)} ккал больше нормы. Компенсировать голодом завтра не нужно: на вес влияет среднее за неделю, а не один день.</p>`;return}
  const opts=ideas(c,t);
  if(!opts.length||left<60){el.innerHTML=`<p class="prose">Норма на сегодня набрана.</p>`;return}
  const low=(t.k>c.kcal*.6&&t.fi<c.fiber*.5)?`<p class="sub" style="padding-top:10px">Клетчатки пока мало. Добавьте овощи, бобовые или цельнозерновой хлеб.</p>`:"";
  el.innerHTML=`<p class="sub">Варианты приёма пищи под то, чего не хватает. Белка в одном приёме — не больше ${r0(.5*state.profile.weight)} г, остальное лучше перенести на следующий.</p>`+opts.map((it,i)=>{
    const s=totals(it);
    return`<div class="idea"><div><div>${it.map(x=>`${esc(x.n.split(",")[0].split(" (")[0])} ${x.g} г`).join(" + ")}</div><div class="sub num">${r0(s.k)} ккал · Б ${r0(s.p)} · Ж ${r0(s.f)} · У ${r0(s.c)}</div></div><button class="btn ghost sm" data-i="${i}">Записать</button></div>`}).join("")+low;
  el.querySelectorAll("button").forEach(b=>b.onclick=()=>{opts[+b.dataset.i].forEach(x=>{const key=Object.keys(FOODS).find(k=>FOODS[k][0]===x.n);pushEntry(key,x.g)});save("d-"+curDate);refreshDay()});
}
function renderWeek(c){
  let html="";
  for(let i=6;i>=0;i--){
    const k=shift(curDate,-i),t=totals((state.days[k]||{e:[]}).e),pct=Math.min(150,t.k/c.kcal*100);
    html+=`<button class="wd" data-k="${k}" ${i===0?'aria-current="date"':""} title="${nf(t.k)} ккал"><div class="col${pct>105?" over":""}"><i style="height:${pct/1.5}%"></i></div><small>${WD[(dparse(k).getDay()+6)%7]}</small><small class="num">${t.k?nf(t.k):"—"}</small></button>`;
  }
  $("week").innerHTML=html;
  $("week").querySelectorAll("button").forEach(b=>b.onclick=()=>{curDate=b.dataset.k;picked=null;viewDay()});
}

/* ---------- Питание ---------- */
function menu(c,p){
  const lean=p.goal==="cut";
  const tpl=[["Завтрак",[["oats",70,"C"],["egg",110,"P"],["banana",120,"C"]]],
    ["Обед",[["chicken",150,"P"],["rice",250,"C"],["broccoli",150,"-"],["olive",10,"F"]]],
    ["Перекус",[[lean?"tvorog0":"tvorog5",200,"P"],["berries",100,"-"],["almond",20,"F"]]],
    ["Ужин",[[lean?"cod":"salmon",140,"P"],["potato",300,"C"],["tomato",150,"-"],["olive",10,"F"]]]];
  const idx={P:0,C:1,F:2},A=[[0,0,0],[0,0,0],[0,0,0]],b=[c.prot,c.carb,c.fat];
  tpl.forEach(m=>m[1].forEach(([k,g,role])=>{const f=FOODS[k],v=[f[2],f[4],f[3]].map(x=>x*g/100);
    if(role==="-")v.forEach((x,i)=>b[i]-=x);else v.forEach((x,i)=>A[i][idx[role]]+=x)}));
  const det=m=>m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1])-m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0])+m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]);
  const D=det(A),s=[0,1,2].map(j=>{const M=A.map((row,i)=>row.map((x,jj)=>jj===j?b[i]:x));return det(M)/D});
  const sc={P:Math.min(2.5,Math.max(.4,s[0])),C:Math.min(3,Math.max(.3,s[1])),F:Math.min(4,Math.max(0,s[2])),"-":1};
  return tpl.map(m=>[m[0],m[1].map(([k,g,role])=>macrosOf(k,role==="F"?r5(g*sc[role]):r10(g*sc[role]))).filter(x=>x.g>0)]);
}
function viewNutrition(){
  const p=state.profile,c=calc(p),W=p.weight;
  const share=x=>r0(x/c.kcal*100);
  const m=menu(c,p),all=totals(m.flatMap(x=>x[1]));
  const wk=c.weekly,pctW=Math.abs(wk)/W*100;
  const trend=p.goal==="gain"?`Ожидаемая прибавка — около ${wk.toFixed(2).replace(".",",")} кг в неделю (${pctW.toFixed(1).replace(".",",")}% массы тела). Ориентир для набора без лишнего жира — 0,25–0,5% в неделю.`
    :p.goal==="cut"?`Ожидаемое снижение — около ${(-wk).toFixed(2).replace(".",",")} кг в неделю (${pctW.toFixed(1).replace(".",",")}% массы тела). Безопасный для мышц темп — 0,5–1% в неделю.`
    :"Вес должен оставаться примерно на месте.";
  view().innerHTML=`${exampleNote()}
  ${p.age<18?`<div class="note warn">Формулы рассчитаны на взрослых. До 18 лет дефицит калорий и добавки стоит обсуждать с врачом и тренером.</div>`:""}
  ${c.floored?`<div class="note warn">Расчётный дефицит получился слишком глубоким, поэтому норма поднята до безопасного минимума. Есть меньше не стоит: это бьёт по восстановлению и гормональному фону.</div>`:""}
  <div class="cols">
    <div class="stack">
      <div class="label">
        <h2>Норма на день</h2>
        <div class="bigrow"><div class="big">${nf(c.kcal)}</div><div class="cap">ккал<br>${esc(GOALS[p.goal][0].toLowerCase())}</div></div>
        <div class="lrow thick" style="padding:0"></div>
        <div class="lrow"><b><i class="dot p"></i>Белки</b><span class="v">${r0(c.prot)} г · ${(c.prot/W).toFixed(1).replace(".",",")} г/кг · ${share(c.prot*4)}%</span></div>
        <div class="lrow"><b><i class="dot c"></i>Углеводы</b><span class="v">${r0(c.carb)} г · ${(c.carb/W).toFixed(1).replace(".",",")} г/кг · ${share(c.carb*4)}%</span></div>
        <div class="lrow"><b><i class="dot f"></i>Жиры</b><span class="v">${r0(c.fat)} г · ${(c.fat/W).toFixed(1).replace(".",",")} г/кг · ${share(c.fat*9)}%</span></div>
        <div class="lrow"><span>Клетчатка</span><span class="v">от ${r0(c.fiber)} г</span></div>
        <div class="lrow"><span>Белок за приём, 4 приёма</span><span class="v">${r0(c.prot/4)} г</span></div>
      </div>
      <div class="label">
        <h2>Откуда цифра</h2>
        <div class="lrow"><span>Обмен в покое (${c.eq})</span><span class="v">${nf(c.bmr)} ккал</span></div>
        <div class="lrow"><span>Быт и работа, коэффициент ${String(c.pal).replace(".",",")}</span><span class="v">+${nf(c.bmr*(c.pal-1))}</span></div>
        <div class="lrow"><span>Силовые, ${c.plan.days} × ${r0(c.plan.avgMin)} мин</span><span class="v">+${nf(c.gymK)}</span></div>
        <div class="lrow"><span>${p.sport==="gym"?"Кардио и другое":esc(SPORTS[p.sport])}, ${String(p.sporth||0).replace(".",",")} ч/нед</span><span class="v">+${nf(c.sportK)}</span></div>
        <div class="lrow thick"><b>Расход за день</b><span class="v"><b>${nf(c.tdee)} ккал</b></span></div>
        <div class="lrow"><span>Поправка под цель</span><span class="v">${c.kcal-c.tdee>=0?"+":"−"}${nf(Math.abs(c.kcal-c.tdee))} (${c.kcal>=c.tdee?"+":"−"}${Math.abs(r0((c.kcal/c.tdee-1)*100))}%)</span></div>
      </div>
    </div>
    <div class="stack">
      <div class="sec prose">
        <h2>Как этим пользоваться</h2>
        <p>${trend} <span class="ref">ист. 8, 9, 10</span></p>
        <p>Любая формула ошибается на 10% и больше. Взвешивайтесь по утрам, сравнивайте средние за неделю. Если через 2–3 недели темп не совпал с ожидаемым, сдвиньте калории на 100–200 в нужную сторону за счёт углеводов.</p>
        <p>Белок: ${p.goal==="cut"?"в дефиците нужно больше, 2,3–3,1 г на кг безжировой массы":"для роста и сохранения мышц хватает 1,6–2,2 г/кг, выше прибавки нет"}. Делите на 3–5 приёмов по 0,4–0,55 г/кг, то есть по ${r0(.4*W)}–${r0(.55*W)} г. <span class="ref">ист. 6, 7, 8, 11</span></p>
        <p>Углеводы: при вашем объёме нагрузки (около ${c.hpd.toFixed(1).replace(".",",")} ч в день) спортивные диетологи советуют ${c.carbRef} г/кг. У вас выходит ${(c.carb/W).toFixed(1).replace(".",",")} г/кг${p.goal==="cut"?"; в дефиците это нормально, основную часть ставьте вокруг тренировки":""}. Жиры не опускайте ниже 20% калорий надолго. <span class="ref">ист. 5</span></p>
        ${c.refW!==W?`<p class="sub">При ИМТ выше 30 белок и жиры посчитаны от веса, соответствующего ИМТ 25, иначе цифры получаются завышенными. Это практическая поправка, а не результат исследования.</p>`:""}
      </div>
      <div class="sec">
        <h2>Пример дня под вашу норму</h2>
        <div class="tw"><table><thead><tr><th>Продукт</th><th class="n">г</th><th class="n">ккал</th><th class="n">Б</th><th class="n">Ж</th><th class="n">У</th></tr></thead><tbody>
        ${m.map(([name,items])=>`<tr class="meal"><td colspan="6">${name}</td></tr>`+items.map(x=>`<tr><td>${esc(x.n)}</td><td class="n">${x.g}</td><td class="n">${r0(x.k)}</td><td class="n">${r0(x.p)}</td><td class="n">${r0(x.f)}</td><td class="n">${r0(x.c)}</td></tr>`).join("")).join("")}
        <tr class="sum"><td>Итого</td><td class="n"></td><td class="n">${nf(all.k)}</td><td class="n">${r0(all.p)}</td><td class="n">${r0(all.f)}</td><td class="n">${r0(all.c)}</td></tr>
        </tbody></table></div>
        <p class="sub">Граммовки подобраны автоматически под ваши белки, жиры и углеводы. Продукты можно менять на равноценные из списка ниже.</p>
      </div>
      <div class="sec">
        <h2>На чём строить рацион</h2>
        <div class="tw"><table><tbody>
        <tr><td><b>Белок</b></td><td>Курица и индейка, рыба, яйца, творог, греческий йогурт, постное мясо, бобовые, тофу. Сывороточный протеин — когда не добираете едой.</td></tr>
        <tr><td><b>Углеводы</b></td><td>Гречка, рис, овсянка, картофель, макароны, цельнозерновой хлеб, фрукты. До и после тренировки — то, что легко усваивается: рис, банан, хлеб.</td></tr>
        <tr><td><b>Жиры</b></td><td>Оливковое масло, орехи, авокадо, жирная рыба 1–2 раза в неделю.</td></tr>
        <tr><td><b>Каждый день</b></td><td>Овощи и фрукты, от 400 г в сумме: клетчатка и микроэлементы.</td></tr>
        </tbody></table></div>
      </div>
      <div class="sec prose">
        <h2>Добавки с доказанным эффектом</h2>
        <p>Креатин моногидрат, 3–5 г в день постоянно: прибавка в силе и объёме работы. Кофеин, 3–6 мг/кг (${r0(3*W)}–${r0(6*W)} мг) за час до тренировки. Остальное на результат влияет слабо или никак. При болезнях сердца, почек и давлении сначала спросите врача. <span class="ref">ист. 19, 20</span></p>
      </div>
    </div>
  </div>`;
}

/* ---------- Тренировки ---------- */
function viewTraining(){
  const p=state.profile,pl=trainingPlan(p);
  const why=pl.extra?`Силовые идут дополнением к основному спорту: ${pl.days} тренировки на всё тело дают прирост силы и экономичности движений и не мешают восстановлению. Ставьте их не накануне ключевой тренировки или старта. <span class="ref">ист. 17</span>`
    :`При вашем стаже (${{n:"до года",i:"1–3 года",a:"больше 3 лет"}[p.exp]}) оптимально ${{n:"2–3",i:"3–4",a:"4–6"}[p.exp]} силовых в неделю. Каждая группа мышц получает нагрузку минимум дважды в неделю: так рост лучше, чем при одном разе. <span class="ref">ист. 13, 14</span>`;
  const styleTxt={hyper:"Диапазон 6–15 повторений, отдых 1–3 минуты. Мышцы растут в широком диапазоне повторений, если подход заканчивается за 1–3 повтора до отказа.",
    strength:"Базовые упражнения по 3–5 повторений с весом от 80% максимума, отдых 3–5 минут. Для силы тяжёлые веса работают лучше лёгких.",
    endur:"Немного тяжёлых подходов по 4–6 повторений. Задача — сила, а не усталость: до отказа не работайте."}[pl.style];
  const cardio=pl.extra?(p.sport==="gym"?"3–4 тренировки на выносливость в неделю, большая часть — в лёгком темпе, при котором можно разговаривать.":`Основной спорт — ${String(p.sporth||0).replace(".",",")} ч в неделю по данным профиля.`)
    :p.goal==="cut"?"2–3 раза в неделю по 30–40 минут умеренного кардио или больше ходьбы. Это помогает держать дефицит, не урезая еду."
    :"По желанию 2 раза по 20–30 минут лёгкого кардио. Для здоровья ВОЗ советует 150–300 минут умеренной активности в неделю, ходьба считается.";
  const cells=WD.map((d,i)=>{const s=pl.sessions.find(x=>x.wd===i);return s?`<div class="on"><small>${d}</small><b>${s.title}</b></div>`:`<div class="off"><small>${d}</small><b>отдых</b></div>`}).join("");
  view().innerHTML=`${exampleNote()}
  <div class="stack">
    <div class="sec">
      <h2>${pl.days} ${pl.days<5?"силовые тренировки":"силовых тренировок"} в неделю</h2>
      <div class="wk">${cells}</div>
      <p class="prose">${why}</p>
    </div>
    <div class="cols">
      <div class="stack">
        <div class="sec prose"><h2>Как работать</h2>
          <p>${styleTxt} <span class="ref">ист. 13, 16, 23</span></p>
          <p>Прогрессия: когда в последнем подходе получается на 1–2 повтора больше верхней границы две тренировки подряд, добавьте 2–10% веса.</p>
          ${p.goal==="cut"?`<p>В дефиците веса на штанге не снижайте: именно тяжёлая работа сохраняет мышцы. Если не восстанавливаетесь, уберите по одному подходу из подсобных упражнений. <span class="ref">ист. 8</span></p>`:""}
          <p>Перед рабочими подходами — 5–10 минут разминки и 2–3 подводящих подхода в первом упражнении. Сон 7–9 часов.</p>
        </div>
        <div class="sec"><h2>Объём за неделю</h2>
          <div class="chips">${Object.entries(pl.vol).sort((a,b)=>b[1]-a[1]).map(([g,v])=>`<span><b>${r0(v)}</b>${g}</span>`).join("")}</div>
          <p class="sub">Подходов на группу мышц. Подход, где группа работает вспомогательно, посчитан за половину. Для роста опытным нужно от 10 в неделю, новичкам хватает меньшего. <span class="ref">ист. 13, 15</span></p>
        </div>
        <div class="sec prose"><h2>Кардио</h2><p>${cardio} <span class="ref">ист. 18</span></p></div>
      </div>
      <div class="stack">
        ${pl.sessions.map(s=>`<div class="sec"><h3>${WD[s.wd]} · ${s.title} <span class="sub" style="font-weight:400">· около ${s.min} мин</span></h3>
        <div class="tw"><table><thead><tr><th>Упражнение</th><th class="n">Подходы × повторы</th><th class="n">Отдых</th></tr></thead><tbody>
        ${s.rows.map(r=>`<tr><td>${r.name}</td><td class="n">${r.sets} × ${r.reps}</td><td class="n">${String(r.rest).replace(".",",")} мин</td></tr>`).join("")}
        </tbody></table></div></div>`).join("")}
      </div>
    </div>
  </div>`;
}

/* ---------- Профиль ---------- */
function viewProfile(){
  const p=state.profile;
  const opt=(o,cur)=>Object.entries(o).map(([k,v])=>`<option value="${k}"${k==cur?" selected":""}>${v}</option>`).join("");
  view().innerHTML=`${p.example?`<div class="note"><span>Поля заполнены примером. Замените их своими данными, сохранение автоматическое.</span></div>`:""}
  <div class="cols">
    <form class="stack" id="pf">
      <div class="sec"><h2>О вас</h2>
        <div class="fgrid">
          <div class="field wide"><span>Пол</span><div class="seg"><label><input type="radio" name="sex" id="f-sex-m" value="m"${p.sex==="m"?" checked":""}>Мужской</label><label><input type="radio" name="sex" id="f-sex-f" value="f"${p.sex==="f"?" checked":""}>Женский</label></div></div>
          <label class="field"><span>Возраст, лет</span><input type="number" id="f-age" min="14" max="90" value="${p.age}"></label>
          <label class="field"><span>Рост, см</span><input type="number" id="f-height" min="130" max="230" value="${p.height}"></label>
          <label class="field"><span>Вес, кг</span><input type="number" id="f-weight" min="35" max="250" step="0.1" value="${p.weight}"></label>
          <label class="field"><span>Процент жира, если знаете</span><input type="number" id="f-bf" min="3" max="60" step="0.5" value="${p.bf||""}" placeholder="необязательно"></label>
          <label class="field wide"><span>Обычный день вне тренировок</span><select id="f-job">${opt({low:"Сидячая работа или учёба",mid:"Много хожу или на ногах",high:"Физический труд"},p.job)}</select></label>
        </div>
      </div>
      <div class="sec"><h2>Спорт</h2>
        <div class="fgrid">
          <label class="field wide"><span>Основной вид нагрузки</span><select id="f-sport">${opt(SPORTS,p.sport)}</select></label>
          <label class="field"><span>Силовой стаж</span><select id="f-exp">${opt({n:"До года",i:"1–3 года",a:"Больше 3 лет"},p.exp)}</select></label>
          <label class="field"><span>Дней в неделю на зал</span><select id="f-days">${opt({2:"2",3:"3",4:"4",5:"5",6:"6"},p.days)}</select></label>
          <label class="field wide"><span id="l-sporth"></span><input type="number" id="f-sporth" min="0" max="30" step="0.5" value="${p.sporth||0}"></label>
        </div>
      </div>
      <div class="sec"><h2>Какой формы хотите достичь</h2>
        <div class="goals">${Object.entries(GOALS).map(([k,[t,d]])=>`<label><input type="radio" name="goal" id="f-goal-${k}" value="${k}"${p.goal===k?" checked":""}><span><b>${t}</b><small>${d}</small></span></label>`).join("")}</div>
      </div>
    </form>
    <div class="stack"><div class="label" id="pv-calc"></div><p class="sub" id="pv-msg"></p></div>
  </div>${securityHtml()}`;
  $("pf").addEventListener("submit",e=>e.preventDefault());
  $("pf").addEventListener("input",readProfile);
  wireSecurity();
  renderProfilePreview();
}
function readProfile(){
  const p=state.profile,num=(id,min,max,old)=>{const v=parseFloat($(id).value);return v>=min&&v<=max?v:old};
  const q={...p};
  q.sex=$("f-sex-m").checked?"m":"f";
  q.age=num("f-age",14,90,p.age);q.height=num("f-height",130,230,p.height);q.weight=num("f-weight",35,250,p.weight);
  q.bf=$("f-bf").value===""?0:num("f-bf",3,60,p.bf);q.sporth=$("f-sporth").value===""?0:num("f-sporth",0,30,p.sporth);
  q.job=$("f-job").value;q.sport=$("f-sport").value;q.exp=$("f-exp").value;q.days=+$("f-days").value;
  q.goal=(document.querySelector('input[name=goal]:checked')||{}).value||p.goal;
  q.example=false;state.profile=q;state.pt=Date.now();save("profile");
  const n=document.querySelector("#view>.note");if(n)n.remove();
  renderProfilePreview();
}
function renderProfilePreview(){
  const p=state.profile,c=calc(p);
  $("l-sporth").textContent=p.sport==="gym"?"Кардио и другие тренировки, часов в неделю":"Тренировки по основному виду, часов в неделю";
  $("pv-calc").innerHTML=`<h2>Ваш расчёт</h2>
  <div class="bigrow"><div class="big">${nf(c.kcal)}</div><div class="cap">ккал в день<br>расход ${nf(c.tdee)}</div></div>
  <div class="lrow thick" style="padding:0"></div>
  <div class="lrow"><b><i class="dot p"></i>Белки</b><span class="v">${r0(c.prot)} г</span></div>
  <div class="lrow"><b><i class="dot c"></i>Углеводы</b><span class="v">${r0(c.carb)} г</span></div>
  <div class="lrow"><b><i class="dot f"></i>Жиры</b><span class="v">${r0(c.fat)} г</span></div>
  <div class="lrow"><span>Силовых в неделю</span><span class="v">${c.plan.days}, по ${r0(c.plan.avgMin)} мин</span></div>
  <div class="lrow"><span>Индекс массы тела</span><span class="v">${c.bmi.toFixed(1).replace(".",",")}</span></div>`;
  $("pv-msg").innerHTML=(c.plan.days<p.days&&!c.plan.extra?`Вы готовы ходить ${p.days} раз, но при вашем стаже больше ${c.plan.days} силовых не ускорит прогресс. `:"")+`Подробности — в разделах <a href="#nutrition" style="color:var(--accent)">Питание</a> и <a href="#training" style="color:var(--accent)">Тренировки</a>.`;
}

/* ---------- Защита данных ---------- */
function securityHtml(){
  const files=!window.claude&&window.self===window.top;
  return`<div class="sec" id="security"><h2>Защита данных</h2>
  <p class="prose">${key?"Профиль и дневник хранятся на этом устройстве в зашифрованном виде (AES-256-GCM). Ключ создаётся автоматически, лежит в хранилище браузера и не может быть из него выгружен. Пароль не нужен.":"Этот браузер не даёт создать ключ шифрования, поэтому данные хранятся на устройстве открытым текстом."}${files?" Данные никуда не отправляются.":""}</p>
  ${files?`<h3>Резервная копия</h3>
    <p class="sub">Файл со всеми данными в открытом виде: храните его там, где его не прочитают посторонние. Восстановление заменяет текущие данные.</p>
    <div class="row"><button class="btn ghost" id="s-export">Скачать копию</button><label class="btn ghost" for="s-file">Восстановить из файла</label><input type="file" id="s-file" accept="application/json,.json" hidden></div>`:""}
  <h3>Удаление</h3>
  <div class="row"><button class="btn ghost" id="s-wipe">Стереть все данные</button></div>
  <p class="sub" id="s-msg" aria-live="polite"></p></div>`;
}
function wireSecurity(){
  const msg=t=>{$("s-msg").textContent=t},on=(id,fn)=>{const e=$(id);if(e)e.onclick=fn};
  on("s-export",()=>{
    const a=document.createElement("a"),url=URL.createObjectURL(new Blob([JSON.stringify({app:"getbigger",v:2,state})],{type:"application/json"}));
    a.href=url;a.download="getbigger-"+dkey(new Date())+".json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);
    msg("Копия скачана. Она не зашифрована, храните её в надёжном месте.");
  });
  const f=$("s-file");
  if(f)f.onchange=async()=>{
    const file=f.files[0];f.value="";if(!file)return;
    try{
      const o=JSON.parse(await file.text());
      if(!o.state||!o.state.profile)throw 0;
      state=clean(o.state);await persistLocal();
      if(cloud){dirty.add("profile");Object.keys(state.days).forEach(k=>dirty.add("d-"+k));flush()}
      viewProfile();$("s-msg").textContent="Данные восстановлены из копии.";
    }catch(e){msg("Не получилось прочитать копию: это не файл GetBigger или он повреждён.")}
  };
  let wipeArmed=false;
  on("s-wipe",async()=>{
    if(!wipeArmed){wipeArmed=true;$("s-wipe").textContent="Стереть без возможности восстановления?";return}
    await persistChain;const col=cloud;cloud=null;key=null;dropAll();
    if(col){try{for(const id of ["sec","profile",...Object.keys(state.days).map(k=>"d-"+k)])await col.doc(id).delete()}catch(e){}}
    location.reload();
  });
}

/* ---------- Источники ---------- */
function viewSources(){
  const S=[
  ["Mifflin MD, St Jeor ST и др. A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr. 1990;51(2):241–247.","Обмен в покое, когда процент жира неизвестен."],
  ["Cunningham JJ. A reanalysis of the factors influencing basal metabolic rate in normal adults. Am J Clin Nutr. 1980;33(11):2372–2374.","Обмен в покое по безжировой массе: 500 + 22 × БМТ. Точнее для тренированных людей."],
  ["FAO/WHO/UNU. Human energy requirements: report of a joint expert consultation. Rome, 2004.","Коэффициенты бытовой активности."],
  ["Ainsworth BE и др. 2011 Compendium of Physical Activities. Med Sci Sports Exerc. 2011;43(8):1575–1581.","Расход энергии на тренировках через MET: силовая 5, бег и игровые 7–8."],
  ["Thomas DT, Erdman KA, Burke LM. Nutrition and Athletic Performance: совместная позиция ACSM, Academy of Nutrition and Dietetics и Dietitians of Canada. Med Sci Sports Exerc. 2016;48(3):543–568.","Углеводы 3–12 г/кг по объёму нагрузки, жиры не ниже 20% калорий."],
  ["Jäger R и др. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.","Белок 1,4–2,0 г/кг для тренирующихся, больше в дефиците."],
  ["Morton RW и др. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med. 2018;52(6):376–384.","Выше примерно 1,6 г/кг (верхняя граница 2,2) белок не добавляет прироста."],
  ["Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation. J Int Soc Sports Nutr. 2014;11:20.","Сушка: темп 0,5–1% веса в неделю, белок 2,3–3,1 г на кг безжировой массы. Авторы — исследователи и выступающие натуральные бодибилдеры."],
  ["Iraki J, Fitschen P, Espinar S, Helms E. Nutrition recommendations for bodybuilders in the off-season: a narrative review. Sports. 2019;7(7):154.","Набор: профицит 10–20%, прибавка 0,25–0,5% веса в неделю, жиры 0,5–1,5 г/кг."],
  ["Garthe I и др. Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes. Int J Sport Nutr Exerc Metab. 2011;21(2):97–104.","Медленное снижение, около 0,7% в неделю, лучше сохраняет мышцы и силу у спортсменов."],
  ["Schoenfeld BJ, Aragon AA. How much protein can the body use in a single meal for muscle-building? J Int Soc Sports Nutr. 2018;15:10.","Белок за приём: 0,4–0,55 г/кг, минимум четыре приёма."],
  ["Mountjoy M и др. IOC consensus statement on relative energy deficiency in sport (RED-S): 2018 update. Br J Sports Med. 2018;52(11):687–697.","Нижняя граница калорий: доступная энергия не ниже 30 ккал на кг безжировой массы."],
  ["American College of Sports Medicine. Progression models in resistance training for healthy adults. Med Sci Sports Exerc. 2009;41(3):687–708.","Частота по стажу, повторения и отдых под силу и гипертрофию, правило повышения веса."],
  ["Schoenfeld BJ, Ogborn D, Krieger JW. Effects of resistance training frequency on measures of muscle hypertrophy. Sports Med. 2016;46(11):1689–1697.","Каждую группу мышц — минимум дважды в неделю."],
  ["Schoenfeld BJ, Ogborn D, Krieger JW. Dose-response relationship between weekly resistance training volume and increases in muscle mass. J Sports Sci. 2017;35(11):1073–1082.","От 10 подходов на группу в неделю растёт лучше, чем от меньшего объёма."],
  ["Schoenfeld BJ, Grgic J, Ogborn D, Krieger JW. Strength and hypertrophy adaptations between low- vs. high-load resistance training. J Strength Cond Res. 2017;31(12):3508–3523.","Мышцы растут в широком диапазоне повторений, сила — лучше от тяжёлых весов."],
  ["Rønnestad BR, Mujika I. Optimizing strength training for running and cycling endurance performance. Scand J Med Sci Sports. 2014;24(4):603–612.","Тяжёлая силовая работа 2 раза в неделю улучшает результат в видах на выносливость."],
  ["Bull FC и др. World Health Organization 2020 guidelines on physical activity and sedentary behaviour. Br J Sports Med. 2020;54(24):1451–1462.","150–300 минут умеренной активности в неделю."],
  ["Kreider RB и др. ISSN position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine. J Int Soc Sports Nutr. 2017;14:18.","Креатин моногидрат, 3–5 г в день."],
  ["Guest NS и др. ISSN position stand: caffeine and exercise performance. J Int Soc Sports Nutr. 2021;18:1.","Кофеин, 3–6 мг/кг за час до нагрузки."],
  ["USDA FoodData Central, fdc.nal.usda.gov; Скурихин И. М., Тутельян В. А. Химический состав российских пищевых продуктов. М.: ДеЛи принт, 2002.","Калорийность и состав продуктов. Значения округлены; у конкретной марки могут отличаться, сверяйте с этикеткой."],
  ["Institute of Medicine. Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids. Washington: National Academies Press, 2005.","Клетчатка: 14 г на каждые 1000 ккал."],
  ["Schoenfeld BJ и др. Longer interset rest periods enhance muscle strength and hypertrophy in resistance-trained men. J Strength Cond Res. 2016;30(7):1805–1812.","Отдых 2–3 минуты в базовых упражнениях лучше, чем 1 минута."]
  ];
  view().innerHTML=`<div class="stack">
    <div class="sec prose"><h2>На чём основаны расчёты</h2>
      <p>Все нормы взяты из позиций профильных организаций (ACSM, ISSN, МОК, ВОЗ) и метаанализов. Номера в тексте разделов отсылают к этому списку.</p></div>
    <ol class="src">${S.map(([a,b])=>`<li>${a}<em>${b}</em></li>`).join("")}</ol>
    <div class="sec prose"><h2>Что здесь упрощено</h2>
      <p>Коэффициенты быта 1,4 / 1,6 / 1,8 выбраны внутри диапазонов ФАО/ВОЗ и не включают тренировки: они считаются отдельно. Конкретные проценты профицита по стажу (15, 12 и 10%) и дефицит 20% — точки внутри диапазонов из источников 8 и 9. Подбор упражнений и раскладка по дням — типовые схемы, собранные под требования источников 13–16, а не программа из отдельного исследования.</p>
      <p>Приложение не заменяет врача и тренера. При хронических заболеваниях, беременности, расстройствах пищевого поведения и до 18 лет план питания нужно согласовать со специалистом.</p></div>
  </div>`;
}

/* ---------- Установка на телефон ---------- */
(function(){
  if(window.claude||window.self!==window.top||!("serviceWorker" in navigator)||!/^https?:$/.test(location.protocol))return;
  navigator.serviceWorker.register("sw.js").catch(()=>{});
  if(matchMedia("(display-mode: standalone)").matches||navigator.standalone)return;
  let deferred=null;const b=$("install");b.hidden=false;
  addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferred=e});
  addEventListener("appinstalled",()=>{b.hidden=true;$("howto").hidden=true});
  b.onclick=async()=>{
    if(deferred){deferred.prompt();await deferred.userChoice;deferred=null;return}
    const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
    $("howto-text").textContent=ios?"На iPhone откройте эту страницу в Safari, нажмите «Поделиться» и выберите «На экран „Домой“». Приложение появится на рабочем столе и будет работать без интернета."
      :"Откройте меню браузера и выберите «Установить приложение» или «Добавить на главный экран». На компьютере значок установки находится в адресной строке.";
    $("howto").hidden=!$("howto").hidden;
  };
})();

async function boot(){
  try{key=await getDeviceKey()}catch(e){key=null}
  if(secBox&&secBox.salt){
    const st=await legacyUnlock(secBox);if(st)state=Object.assign(state,st);
    try{localStorage.removeItem(SEC)}catch(e){}
    if(!key)persistLocal();
  }else if(secBox&&key){try{state=Object.assign(state,await dec(secBox))}catch(e){}}
  if(key){await persistLocal();if(localStorage.getItem(SEC))dropPlain()}
  route();initCloud();
}
boot();
