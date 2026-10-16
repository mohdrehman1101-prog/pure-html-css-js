/* ---------- SCREEN FIT: design same rehta hai, screen ke hisaab se chhota/bada hota hai ---------- */
/* MAX_W = badi screen (laptop/tablet) par design ki sabse badi width. Bada karna ho to 640 ko badha do. */
const MAX_W=640;
let Z=1;
function fit(){const touch=matchMedia("(pointer:coarse)").matches;Z=(touch?innerWidth:Math.min(innerWidth,MAX_W))/400;document.body.style.zoom=Z}
addEventListener('resize',fit);fit();

/* ---------- DATA: Name|Price||Veg(1)/NonVeg(0) ---------- */
const g=(c,s,rows)=>rows.map(r=>{const[n,p,d,v,e,b]=r.split('|');return[c,s,n,p,d,+v,e,b?1:'']});
const CD='Coffee & Drinks',FD='Food';
const D=[
...g(CD,'Espresso',['Espresso|109||1','Americano|129||1','Macchiato|139||1','Affogato|169||1']),
...g(CD,'Hot Coffee (With Milk)',['Cappuccino|149||1','Café Latte|159||1','Café Mocha|169||1','Caramel Macchiato|169||1','Spanish Latte|179||1','Hazelnut Latte|179||1','Caramel Latte|179||1','Irish Latte|179||1','Vanilla Latte|179||1','Kanpur Special Latte|199||1','Hot Chocolate|199||1']),
...g(CD,'Hot Tea',['Green Tea|99||1','Lemon Ginger Honey Tea|129||1']),
...g(CD,'Iced Coffee',['Iced Americano|149||1','Iced Cappuccino|189||1','Iced Latte|199||1','Vietnamese Chilled Coffee|209||1','Iced Hazelnut Latte|219||1','Iced Caramel Latte|219||1','Iced Mocha|219||1']),
...g(CD,'Iced Tea',['Lemon Iced Tea|149||1','Peach Iced Tea|149||1','Masala Iced Tea|149||1']),
...g(CD,'Cold Coffee',['Creamy Frappuccino|159||1','Classic Vanilla Cold Coffee|179||1','Hazelnut Frappe|199||1','Caramel Frappe|199||1','Dark Mocha|209||1','Choco Chip Frappe|219||1','Nutty Choco Frappe|229||1','Brownie Frappe|229||1','Almond Frappe|249||1']),
...g(CD,'Coolers',['Virgin Mojito|159||1','Green Apple|159||1','Watermelon Hydration|159||1','Strawberry Mojito|159||1','Ginger Ale|159||1','Tonic Water|159||1','Fresh Lime Soda|149||1','Passion Fruit|169||1','Orange & Cranberry|179||1','Pomegranate Fizz|179||1','Red Bull Mojito|249||1']),
...g(CD,'Shakes',['Vanilla Shake|199||1','Creamy Cookie Shake|199||1','Silky Strawberry Shake|219||1','Oreo Shake|229||1','Kit Kat Shake|229||1','Dark Mocha Shake|239||1','Blueberry Shake|239||1','Nutella Shake|249||1','Biscoff Shake|249||1','Belgium Chocolate Shake|269||1','Choco Brownie Fudge Shake|269||1']),
...g(FD,'Waffles',['Two Serve of Waffle|199||1','Oreo Waffle|229||1','Kit Kat Crunch Waffle|239||1','Nutella Loaded Waffle|249||1','Death by Chocolate Waffle|249||1','Strawberry Waffle|249||1','Blueberry Waffle|259||1','Biscoff Waffle|259||1','Double Delight Waffle|269||1']),
...g(FD,'Cheese Cake',['Blueberry Cheese Cake|229||1','Biscoff Cheese Cake|229||1','Nutella Cheese Cake|229||1','Strawberry Cheese Cake|229||1']),
...g(FD,'Bakery & Dessert',['Strawberry Swiss Roll|119||1','Doughnut|119||1','Chocolava|119||1','Walnut Brownie|129||1','Pineapple Pastry|129||1','Choco Chip Pastry|129||1','Choco Mini Ball Pastry|129||1','Pista Kaju Pastry|129||1','Sizzling Brownie with Ice Cream|229||1']),
...g(FD,'Soups',['Mushroom Soup|149||1','Hot n Sour Soup|149||1','Sweet Corn Soup|149||1']),
...g(FD,'Nachos',['Crunchy Nachos Bites|149||1','Melty Cheese Nachos|179||1','Nachos Overload|199||1']),
...g(FD,'Fries',['Classic Fries|149||1','Peri Peri Fries|169||1','Cheesy Fries|199||1','Chicken Cheesy Fries|229||0']),
...g(FD,'Bread & More',['Korean Bun|129||1','Garlic Bread|139||1','Cheesy Garlic Bread|159||1','Chilly Garlic Bread|169||1','Cheese Corn Garlic Bread|179||1']),
...g(FD,'Bruschetta',['Tomato Garlic Basil Bruschetta|159||1','Mince Chicken Bruschetta|179||0']),
...g(FD,'Sandwich',['Veggie Sandwich (Cold Serve)|169||1','Cheese & Corn Sandwich|199||1','Creamy Mushroom Sandwich|219||1','Smoky Paneer Sandwich|229||1','Peri Peri Chicken Sandwich|239||0','Chicken Tikka Sandwich|249||0','Crispy Chicken Sandwich|249||0','Chicken Keema Sandwich|259||0']),
...g(FD,'Burger',['Classic Aloo Tikki Burger|129||1','American Burger|139||1','Mushroom Sloppy Joe Burger|169||1','Peri Peri Paneer Burger|169||1','Crispy Chicken Burger|199||0','Smash Chicken Burger|209||0']),
...g(FD,'Momos',['Veggie Momo|149||1','Kurkure Momo|199||1','Cheese & Corn Momo|199||1','Butter Garlic Momo|209||1','Afghani Momo|219||1']),
...g(FD,'Wraps',['Aloo Wrap Express|159||1','Mix Veg Wrap|179||1','Paneer Bhurji Wrap|199||1','Masala Keema Wrap|219||0','Shawarma Chicken Wrap|239||0','Crispy Chicken Wrap|249||0']),
...g(FD,'Pasta',['Aglio-e-Olio Pasta|269||1','Arrabiata Pasta|279||1','Alfredo Pasta|279||1','Pink Sauce Pasta|279||1','Mac n Cheese Pasta|319||1']),
...g(FD,'Pizzeria Mode',['Triple Cheese Pizza|249||1','Cheese & Corn Pizza|259||1','Vegetable Verona Pizza|289||1','Tandoori Paneer Pizza|299||1','Chicken Tikka Pizza|349||0','Chicken Pepperoni Pizza|—||0','BBQ Chicken Pizza|349||0','Chicken Salami Pizza|—||0','Chicken Keema Pizza|349||0']),
...g(FD,'Chinese',['Crisp Corn|199||1','Honey Chilly Potato|199||1','Veg Noodles|199||1','Hakka Noodles|219||1','Garlic Noodles|229||1','Chilly Garlic Noodles|239||1','Fried Rice|219||1','Chilly Paneer|249||1','Chilly Chicken|279||0','Maggi Ramen Bowl|249||1','Asian Bowl|249||1','Lemon Pepper Chicken|279||0','Dragon Paneer|259||1','Dragon Chicken|299||0','Chicken Lollipop 4 pcs|249||0']),
...g(FD,'Bites / Small Platters',['Farmhouse Potato Bites|149||1','Peri Peri Potato Bites|159||1','Cheesy Potato Bites|179||1','Chicken Loaded Potato Bites|229||0','Chicken Popcorn|199||0']),
...g(FD,'Platter',['Grilled Paneer|279||1','Grilled Chicken|299||0','Grilled Fish|329||0','Fish n Chips|349||0']),
...g(FD,'Eggs',['Scrambled Egg|249||0','Boil Egg Platter|249||0','Masala Omelette|199||0','Cheesy Omelette|249||0']),
...g(FD,'Maggi',['Plain Maggi|149||1','Vegetable Maggi|189||1','Cheese Corn Maggi|199||1'])
];
const N={'Hot Coffee (With Milk)':'Add extra shot + ₹49','Pasta':'Add-on: chicken ₹79 / vegetable ₹49','Pizzeria Mode':'Add-on: cheese ₹49 / vegetable ₹29'};
const FAV=['Espresso','Cappuccino','Oreo Shake','Aglio-e-Olio Pasta','Triple Cheese Pizza'];

/* ---------- DISH IMAGES: photo lagani ho to dish ke naam ke saamne link daalo, jaise 'Espresso':'https://...' ---------- */
/* Khali rahega to "Photo coming soon" dikhega. Naam bilkul waisa hi rakhna jaisa upar data me hai. */
const IMG={
'Espresso':'images/bake-love-5.jpg'
};
/* Match the Menu ke 6 cards ki photo (order: jaisa diya tha) */
const MEMIMG={
'Espresso':'images/bake-love-3.png',
'Cappuccino':'images/bake-love-9.jpg',
'Oreo Shake':'images/bake-love-1.jpg',
'Aglio-e-Olio Pasta':'images/bake-love-2.jpg',
'Triple Cheese Pizza':'images/bake-love-7.jpg',
'Classic Fries':'images/bake-love-6.jpg'
};
const MI=n=>MEMIMG[n]||IMG[n]||'';
/* Sliding puzzle ki badi photo ka link yahan daalo (khali rahega to "Photo coming soon") */
const PUZZLE_IMG='images/bake-love-4.png';

const items=D.map((a,i)=>({id:i,cat:a[0],sub:a[1],name:a[2],price:a[3],desc:a[4]||'',veg:a[5],emoji:a[6],best:a[7],img:IMG[a[2]]||''}));
const $=s=>document.querySelector(s);
const media=it=>it.img?`background-image:url('${it.img}')`:'';
const cls=it=>it.img?'':' ph';
const inner=it=>it.img?'':'<b class="phs">Photo coming soon</b>';

/* ---------- FILTERS + MENU ---------- */
let F={main:'All',sub:null,q:''};
const mains=['All','Coffee & Drinks','Food','Veg Only'];
$('#main').innerHTML=mains.map(m=>`<div class="chip${m==='All'?' on':''}" data-m="${m}">${m}</div>`).join('');
let AS='';
function renderSub(){const subs=[...new Set(items.filter(i=>F.main==='All'||F.main==='Veg Only'||i.cat===F.main).filter(i=>F.main!=='Veg Only'||i.veg).map(i=>i.sub))];
  $('#sub').innerHTML=subs.map(s=>`<div class="chip${AS===s?' on':''}" data-s="${s}">${s}</div>`).join('')}
function renderMenu(){
  let list=items.filter(i=>(F.main==='All'||F.main==='Veg Only'||i.cat===F.main)&&(F.main!=='Veg Only'||i.veg)&&(!F.q||(i.name+i.desc).toLowerCase().includes(F.q)));
  let h='',lc='',ls='';
  list.forEach(i=>{
    if(i.cat!==lc){h+=`${ls?'</div>':''}<div class="cat">${i.cat.toUpperCase()}</div>`;lc=i.cat;ls=''}
    if(i.sub!==ls){h+=`${ls?'</div>':''}<h3 class="sub" id="s-${i.sub.replace(/\W/g,'')}">${i.sub}</h3>${N[i.sub]?`<div class="note">${N[i.sub]}</div>`:''}<div class="grid">`;ls=i.sub}
    h+=`<div class="it" data-id="${i.id}"><span class="vb${i.veg?'':' nv'}"><i></i></span>
      <div class="im${cls(i)}" style="${media(i)}">${inner(i)}</div>
      <div class="b"><div class="n"><span>${i.name}</span><span class="pr">₹${i.price}</span></div>${i.best?'<span class="bs">BESTSELLER</span>':''}<p>${i.desc}</p></div></div>`;
  });
  $('#menu').innerHTML=h+(ls?'</div>':'')||`<p class="hint">Kuch nahi mila ${icon('empty')}</p>`;
}
$('#main').onclick=e=>{const m=e.target.dataset.m;if(!m)return;F.main=m;F.sub=null;
  document.querySelectorAll('#main .chip').forEach(c=>c.classList.toggle('on',c.dataset.m===m));
  renderSub();renderMenu();};
$('#sub').onclick=e=>{const s=e.target.dataset.s;if(!s)return;const t=document.getElementById('s-'+s.replace(/\W/g,''));
  if(t)scrollTo({top:t.getBoundingClientRect().top+scrollY-$('.head').getBoundingClientRect().height-8*Z,behavior:'smooth'})};
$('#sb').onclick=()=>{const s=$('#search');s.style.display=s.style.display==='block'?'none':'block';s.focus()};
$('#search').oninput=e=>{F.q=e.target.value.toLowerCase();renderMenu()};
$('#fb').onclick=()=>{const m=$('#main'),o=m.style.display==='flex';m.style.display=o?'none':'flex';$('#fb').classList.toggle('on',!o)};
$('#menu').onclick=e=>{const c=e.target.closest('.it');if(c)detail(items[c.dataset.id])};

/* ---------- MODALS ---------- */
const mo=$('#mo'),md=$('#md');
const close=()=>mo.classList.remove('on');
mo.onclick=e=>{if(e.target===mo||e.target.closest('.x')||e.target.id==='cl')close()};
function detail(it){
  md.innerHTML=`<button class="x" aria-label="Close" title="Close">${icon('close')}</button><div class="dt"><div class="im${cls(it)}" style="${media(it)}">${inner(it)}</div><div class="bd">
  <div class="tg"><span>${icon('dot')} ${it.veg?'Veg':'Non-veg'}</span><span>${it.sub}</span></div>
  <h2>${it.name}<span>₹${it.price}</span></h2><p>${it.desc}</p>
  <div class="st"><div><b>1</b><small>SERVES</small></div><div><b>3 MIN</b><small>PREP TIME</small></div><div><b>15 KCAL</b><small>CALORIES</small></div></div>
  <em>Calories are estimates and may vary — ask staff about allergens or exact ingredients.</em></div></div>`;
  mo.classList.add('on');
}
let spinId=0;
const rnd=()=>items[Math.floor(Math.random()*items.length)];
function paint(it){
  const c=$('#pc');c.className='c'+cls(it);c.style.cssText=media(it);c.innerHTML=inner(it);
  $('#pn').innerHTML=`${it.name}<span>₹${it.price}</span>`;$('#pd').textContent=it.desc;
}
/* spin: dishes tezi se badalti hain, dheere-dheere ruk kar ek random dish par land hoti hai */
function spin(){
  const id=++spinId,btn=$('#again'),final=rnd();let n=0;const total=20;
  btn.disabled=true;btn.innerHTML=icon('dice')+' Spinning…';$('#pc').classList.add('spin');
  (function tick(){
    if(id!==spinId||!$('#pc'))return;
    if(n<total){paint(rnd());n++;setTimeout(tick,55+n*n*1.3)}
    else{paint(final);$('#pc').classList.remove('spin');btn.disabled=false;btn.innerHTML=icon('dice')+' Pick Again'}
  })();
}
function surprise(){
  md.innerHTML=`<button class="x" aria-label="Close" title="Close">${icon('close')}</button><div class="pk"><small>${icon('sparkle')} YOUR BAKE Ñ LOVE PICK</small>
  <div class="c" id="pc"></div><h2 id="pn"></h2><p id="pd"></p>
  <button class="btn" id="again">${icon('dice')} Pick Again</button><button class="lnk" id="cl">Perfect, Close</button></div>`;
  mo.classList.add('on');$('#again').onclick=spin;spin();
}
$('#surp').onclick=surprise;

/* ---------- WIN POPUP (puzzle + match game dono ke liye) ---------- */
function win(t,m){
  md.innerHTML=`<button class="x" aria-label="Close" title="Close">${icon('close')}</button><div class="pk win"><img src="images/bake-love-8.png" alt=""><h2>${t}</h2><p>${m}</p><button class="btn" id="cl">Yay, Close</button></div>`;
  mo.classList.add('on');
}

/* ---------- SWIPE DECK ---------- */
const fav=FAV.map(n=>items.find(i=>i.name===n));
let idx=0;
function deck(){
  const d=$('#deck');d.innerHTML='';
  [idx+1,idx].forEach((k,z)=>{
    const it=fav[k%fav.length];const c=document.createElement('div');c.className='sc';
    c.innerHTML=`<div class="im${cls(it)}" style="${media(it)}">${inner(it)}</div><div class="tx"><div class="r"><span>${it.name}</span><span>₹${it.price}</span></div><p>${it.desc}</p></div>${z?'<div class="next">NEXT</div>':''}`;
    if(!z){c.style.transform='scale(.95)';c.style.opacity='.9'}else drag(c,it);
    d.appendChild(c);
  });
  $('#dots').innerHTML=fav.map((_,i)=>`<i class="${i===idx%fav.length?'on':''}"></i>`).join('');
}
function drag(c,it){
  let sx=0,dx=0,on=0,moved=0;const nx=c.querySelector('.next');
  c.onpointerdown=e=>{on=1;moved=0;sx=e.clientX;c.style.transition='none';c.setPointerCapture(e.pointerId)};
  c.onpointermove=e=>{if(!on)return;dx=e.clientX-sx;if(Math.abs(dx)>5)moved=1;
    c.style.transform=`translateX(${dx/Z}px) rotate(${dx/18}deg)`;nx.style.opacity=Math.min(Math.abs(dx)/100,1)};
  c.onpointerup=()=>{on=0;c.style.transition='';
    if(Math.abs(dx)>90)fly(dx>0?1:-1);else{c.style.transform='';nx.style.opacity=0;if(!moved)detail(it)}dx=0};
  c.onpointercancel=()=>{on=0;dx=0;c.style.transition='';c.style.transform='';nx.style.opacity=0};
  c.fly=fly;
  function fly(s){c.style.transform=`translateX(${s*500}px) rotate(${s*30}deg)`;c.style.opacity=0;setTimeout(()=>{idx++;deck()},280)}
}
const act=s=>{const c=$('#deck .sc:last-child');c&&c.fly(s)};
$('#no').onclick=()=>act(-1);$('#yes').onclick=()=>act(1);
deck();

/* ---------- MATCH THE MENU ---------- */
/* Yeh 6 dishes ki photo (upar IMG se) cards par dikhegi. Photo na ho to dish ka naam + "Photo coming soon" dikhega. */
const MEM=['Espresso','Cappuccino','Oreo Shake','Aglio-e-Olio Pasta','Triple Cheese Pizza','Classic Fries'];
let mv,pairs,open,lock;
function memInit(){
  const a=[...MEM,...MEM].sort(()=>Math.random()-.5);
  mv=0;pairs=0;open=[];lock=0;$('#mv').textContent=0;$('#pr').textContent=0;
  $('#mg').innerHTML=a.map(n=>`<div class="mc" data-e="${n}"><div><span class="bk"><img src="images/bake-love-0.png" alt=""></span><span class="fr"${MI(n)?` style="background-image:url('${MI(n)}')"`:''}>${MI(n)?'':`<b class="phs">${n}<br>Photo coming soon</b>`}</span></div></div>`).join('');
}
$('#mg').onclick=e=>{const c=e.target.closest('.mc');
  if(!c||lock||c.classList.contains('f'))return;c.classList.add('f');open.push(c);
  if(open.length===2){mv++;$('#mv').textContent=mv;const[a,b]=open;
    if(a.dataset.e===b.dataset.e){a.classList.add('m');b.classList.add('m');pairs++;$('#pr').textContent=pairs;open=[];
      if(pairs===6)setTimeout(()=>win(`Yay! All pairs found ${icon('trophy')}`,`You matched every pair, so sweet ${icon('heart')} Moves: ${mv}`),400)}
    else{lock=1;setTimeout(()=>{a.classList.remove('f');b.classList.remove('f');open=[];lock=0},800)}}};
$('#mr').onclick=memInit;memInit();

/* ---------- SLIDING PUZZLE ---------- */
const PB=PUZZLE_IMG?`url('${PUZZLE_IMG}')`:'linear-gradient(135deg,#c9a46a,#6b4a2c 40%,#1d5a63 70%,#f1e1c4)';
if(!PUZZLE_IMG)$('#pz').insertAdjacentHTML('afterend','<div class="phs" style="margin-top:8px">Photo coming soon</div>');
let T,pm;
function pzInit(){
  T=[0,1,2,3,4,5,6,7,8];pm=0;
  for(let i=0;i<150;i++){const e=T.indexOf(8),n=nb(e),r=n[Math.floor(Math.random()*n.length)];[T[e],T[r]]=[T[r],T[e]]}
  $('#pm').textContent=0;pzDraw();
}
function nb(i){const r=[],x=i%3,y=Math.floor(i/3);if(x>0)r.push(i-1);if(x<2)r.push(i+1);if(y>0)r.push(i-3);if(y<2)r.push(i+3);return r}
function pzDraw(){
  $('#pz').innerHTML=T.map((t,i)=>t===8?`<div class="pt e" data-i="${i}"></div>`:
   `<div class="pt" data-i="${i}" style="background-image:${PB};background-position:${(t%3)*50}% ${Math.floor(t/3)*50}%">${PUZZLE_IMG?'':t+1}</div>`).join('');
}
$('#pz').onclick=e=>{const t=e.target.closest('.pt');if(!t)return;const i=+t.dataset.i,em=T.indexOf(8);
  if(nb(em).includes(i)){[T[i],T[em]]=[T[em],T[i]];pm++;$('#pm').textContent=pm;pzDraw();
    if(T.every((v,k)=>v===k))setTimeout(()=>win(`Yay! Puzzle complete ${icon('trophy')}`,`You pieced it together beautifully ${icon('heart')} Moves: ${pm}`),300)}};
$('#ps').onclick=pzInit;pzInit();

/* ---------- SCROLL TOP ---------- */
addEventListener('scroll',()=>{$('#top').style.display=scrollY>400?'block':'none';
  const hh=$('.head').getBoundingClientRect().height+30*Z;let cur='';document.querySelectorAll('h3.sub').forEach(h=>{if(h.getBoundingClientRect().top<hh)cur=h.textContent});
  if(cur&&cur!==AS){AS=cur;renderSub();const c=document.querySelector('#sub .chip.on');c&&c.scrollIntoView({inline:'center',block:'nearest'})}});
$('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
renderSub();renderMenu();

/* ---------- FULL SITE PAGE ---------- */
const site=$('#site');
$('#vs').onclick=()=>{site.classList.add('on');site.scrollTop=0};
document.querySelectorAll('.tomenu').forEach(b=>b.onclick=()=>{site.classList.remove('on');scrollTo({top:0})});
$('#visit').onclick=()=>$('#about').scrollIntoView({behavior:'smooth'});
$('#tx').onclick=e=>{e.stopPropagation();$('#toast').style.display='none'};
$('#toast').onclick=()=>{site.classList.remove('on');scrollTo({top:0})};
