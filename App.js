const secMap={mobiles:'mobiles',tvs:'tvs',electronics:'electronics',fashion:'fashion',appliances:'appliances',furniture:'furniture',toysbooks:'toys',grocery:'grocery'};
const dealIds=[11,15,17,28,30,31,33,35,2,7];

let orders=[
  {id:'SK20240001',customer:'Rahul Sharma',email:'rahul@gmail.com',mobile:'9876543210',city:'Prayagraj',items:2,total:20798,payment:'upi',status:'delivered',date:'2026-06-01'},
  {id:'SK20240002',customer:'Priya Singh',email:'priya@gmail.com',mobile:'8765432109',city:'Lucknow',items:1,total:22499,payment:'card',status:'shipped',date:'2026-06-05'},
  {id:'SK20240003',customer:'Amit Kumar',email:'amit@gmail.com',mobile:'7654321098',city:'Varanasi',items:3,total:4297,payment:'upi',status:'paid',date:'2026-06-08'},
  {id:'SK20240004',customer:'Sneha Verma',email:'sneha@gmail.com',mobile:'6543210987',city:'Agra',items:1,total:52990,payment:'netbank',status:'delivered',date:'2026-06-10'},
  {id:'SK20240005',customer:'Raj Patel',email:'raj@gmail.com',mobile:'9988776655',city:'Delhi',items:2,total:1898,payment:'cod',status:'pending',date:'2026-06-12'},
  {id:'SK20240006',customer:'Meena Gupta',email:'meena@gmail.com',mobile:'8877665544',city:'Kanpur',items:1,total:24990,payment:'upi',status:'paid',date:'2026-06-13'},
  {id:'SK20240007',customer:'Vikas Joshi',email:'vikas@gmail.com',mobile:'7766554433',city:'Mathura',items:4,total:7095,payment:'card',status:'cancelled',date:'2026-06-14'},
  {id:'SK20240008',customer:'Nisha Yadav',email:'nisha@gmail.com',mobile:'6655443322',city:'Allahabad',items:2,total:19498,payment:'upi',status:'delivered',date:'2026-06-15'}
];

let customers=[
  {name:'Rahul Sharma',email:'rahul@gmail.com',mobile:'9876543210',city:'Prayagraj',orders:3,spent:45600,joined:'2025-01-10'},
  {name:'Priya Singh',email:'priya@gmail.com',mobile:'8765432109',city:'Lucknow',orders:2,spent:29800,joined:'2025-03-22'},
  {name:'Amit Kumar',email:'amit@gmail.com',mobile:'7654321098',city:'Varanasi',orders:5,spent:18200,joined:'2024-11-05'},
  {name:'Sneha Verma',email:'sneha@gmail.com',mobile:'6543210987',city:'Agra',orders:1,spent:52990,joined:'2026-01-14'},
  {name:'Raj Patel',email:'raj@gmail.com',mobile:'9988776655',city:'Delhi',orders:4,spent:12400,joined:'2025-07-30'},
  {name:'Meena Gupta',email:'meena@gmail.com',mobile:'8877665544',city:'Kanpur',orders:2,spent:31200,joined:'2025-09-18'},
  {name:'Vikas Joshi',email:'vikas@gmail.com',mobile:'7766554433',city:'Mathura',orders:1,spent:0,joined:'2026-06-14'},
  {name:'Nisha Yadav',email:'nisha@gmail.com',mobile:'6655443322',city:'Allahabad',orders:3,spent:27900,joined:'2025-05-11'}
];

let cart={}, wishlist=new Set(), appliedCoupon=null, spinUsed=false, currentUser=null, editProdId=null;
const ADMIN_EMAIL='aksahuakhil@gmail.com', ADMIN_PASS='admin@123';
let activeFilters={ratings:new Set()};
let currentPDPId=null;
let reviewsDB={
  1:[{name:'Ankit R.',rating:5,date:'2026-05-12',text:'Camera quality is excellent for this price range, battery easily lasts a full day.'},{name:'Priya S.',rating:4,date:'2026-04-28',text:'Good phone overall, display is bright. Wish charging was a bit faster.'}],
  9:[{name:'Rohit K.',rating:5,date:'2026-06-01',text:'Perfect for coding and daily work, fan noise is minimal even under load.'}],
  19:[{name:'Sunita M.',rating:4,date:'2026-05-20',text:'Cooling is great, a bit noisy at night but overall satisfied.'}]
};
let pendingRating=0;

const byId=id=>products.find(p=>p.id===Number(id));
const disc=p=>Math.round((p.mrp-p.price)/p.mrp*100);
const inr=n=>'₹'+Number(n).toLocaleString('en-IN');
function bgCls(cat){const m={mobiles:'bg-mob',tvs:'bg-tv',electronics:'bg-elec',fashion:'bg-fash',appliances:'bg-app',furniture:'bg-home',toys:'bg-toy',books:'bg-book',grocery:'bg-groc',sports:'bg-spt'};return m[cat]||'bg-mob';}

function pCard(p){
  const d=disc(p),bg=bgCls(p.category);
  const imgHtml=p.photo?`<img src="${p.photo}" style="width:100%;height:100%;object-fit:cover;">`:p.emoji;
  return `<div class="pcard" onclick="openPD(${p.id})">
    <button class="wish" onclick="toggleWish(event,${p.id})">${wishlist.has(p.id)?'❤️':'🤍'}</button>
    ${p.id<=4?'<span class="badge-new">NEW</span>':''}
    <div class="img-wrap ${bg}">${imgHtml}</div>
    <div class="pname-short">${p.name.length>40?p.name.slice(0,40)+'...':p.name}</div>
    <div class="prating"><span class="rating-star">${p.rating}★</span><span class="rating-count">(${p.reviews.toLocaleString('en-IN')})</span></div>
    <div class="pprice"><span class="sp">${inr(p.price)}</span><span class="mrp">${inr(p.mrp)}</span><span class="off">${d}% off</span></div>
    <button class="add-btn" id="ab-${p.id}" onclick="addCart(event,${p.id})">ADD TO CART</button>
  </div>`;
}

function renderSections(){
  const ds=document.getElementById('dealStrip');
  if(ds){
    const dealProducts=dealIds.map(id=>byId(id)).filter(Boolean);
    ds.innerHTML=dealProducts.length?dealProducts.map(p=>`<div class="deal-thumb" onclick="openPD(${p.id})"><div class="dt-img">${p.photo?`<img src="${p.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`:p.emoji}</div><div style="font-size:11px;font-weight:600;">${p.name.split(' ').slice(0,3).join(' ')}</div><div class="dt-off">${disc(p)}% off</div><div class="dt-cat">${p.category}</div></div>`).join(''):'<div style="padding:24px;color:var(--muted);font-size:13px;">No deals available right now.</div>';
  }
  for(const[sectionKey,catValue]of Object.entries(secMap)){
    const el=document.getElementById('s-'+sectionKey);
    if(!el)continue;
    const list=products.filter(p=>p.category===catValue);
    const filtered=getFilteredSorted(list);
    if(!list.length){
      el.innerHTML=`<div class="empty-cat-msg">📭 Not available right now in this category.</div>`;
    } else if(!filtered.length){
      el.innerHTML=`<div class="empty-cat-msg">No products match the current filters in this category.</div>`;
    } else {
      el.innerHTML=filtered.map(p=>pCard(p)).join('');
    }
  }
}

/* ─── PRODUCT DETAIL PAGE ──────────────────── */
function openPD(id){
  const p=byId(id);
  if(!p){toast('This product is no longer available');return;}
  currentPDPId=id;
  document.getElementById('homeSec').style.display='none';
  document.getElementById('searchSec').style.display='none';
  document.getElementById('filterBar').style.display='none';
  const pdpSec=document.getElementById('pdpSec');
  pdpSec.style.display='block';
  renderProductDetailPage(id);
  window.scrollTo({top:0,behavior:'smooth'});
}
function closePDP(){
  currentPDPId=null;
  document.getElementById('pdpSec').style.display='none';
  document.getElementById('homeSec').style.display='block';
  document.getElementById('filterBar').style.display='flex';
}
function renderProductDetailPage(id){
  const p=byId(id);
  const pdpSec=document.getElementById('pdpSec');
  if(!p){
    pdpSec.innerHTML=`<div class="empty-cat-msg" style="padding:80px 20px;">😕 This product is no longer available.<br><br><button class="btn-cart" style="width:auto;padding:10px 24px;" onclick="closePDP()">← Back to Store</button></div>`;
    return;
  }
  const d=disc(p),bg=bgCls(p.category);
  const imgHtml=p.photo?`<img src="${p.photo}" style="width:100%;height:100%;object-fit:cover;">`:p.emoji;
  const related=products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,6);
  pdpSec.innerHTML=`
    <div class="pdp-crumb"><span onclick="closePDP()">Home</span> / <span onclick="scrollSec('${p.category}');closePDP()" style="text-transform:capitalize;">${p.category}</span> / ${p.name.slice(0,40)}</div>
    <div class="pdp-wrap">
      <div class="pdp-left">
        <div class="pdp-img ${bg}">${imgHtml}</div>
        <div class="pdp-actions">
          <button class="btn-cart" onclick="addCart(null,${p.id})">🛒 Add to Cart</button>
          <button class="btn-buy" onclick="addCart(null,${p.id});setTimeout(openCart,100);">⚡ Buy Now</button>
        </div>
      </div>
      <div class="pdp-right">
        <div class="pdp-brand">Brand: <b style="color:var(--text);">${p.brand}</b></div>
        <div class="pdp-title">${p.name}</div>
        <div class="pdp-rating-row">
          <span class="rating-star">${p.rating}★</span>
          <span class="rating-count">${p.reviews.toLocaleString('en-IN')} ratings</span>
          <span style="font-size:12px;color:var(--green);font-weight:700;">${p.stock>10?'✅ In Stock':p.stock>0?'⚠️ Only '+p.stock+' left':'❌ Out of Stock'}</span>
        </div>
        <div class="pdp-price-row">
          <span class="pdp-price">${inr(p.price)}</span>
          <span class="pdp-mrp">${inr(p.mrp)}</span>
          <span class="pdp-off">${d}% off</span>
        </div>
        <div style="color:var(--green);font-size:13px;font-weight:700;">You save ${inr(p.mrp-p.price)}!</div>
        ${p.emi&&p.emi!=='N/A'?`<div class="pd-emi">No-cost EMI from ${p.emi} · Bank offers available</div>`:''}
        <div class="pd-badges">
          <span class="pd-badge">🚚 Free Delivery</span><span class="pd-badge">↩️ 7-Day Return</span>
          <span class="pd-badge">✅ Genuine Product</span>
        </div>
        <div class="pdp-section">
          <h3>Product Description</h3>
          <p style="font-size:13px;color:var(--text);line-height:1.7;">${p.desc}</p>
        </div>
        <div class="pdp-section">
          <h3>Specifications</h3>
          <table class="pdp-spec-table">
            <tr><td>Brand</td><td>${p.brand}</td></tr>
            <tr><td>Category</td><td style="text-transform:capitalize;">${p.category}</td></tr>
            <tr><td>In Stock</td><td>${p.stock} units</td></tr>
          </table>
        </div>
        <div class="pdp-section" id="reviewsBlock-${p.id}"></div>
        ${related.length?`
        <div class="pdp-section">
          <h3>Related Products</h3>
          <div class="pdp-related">${related.map(rp=>pCard(rp)).join('')}</div>
        </div>`:''}
      </div>
    </div>`;
  renderReviewsBlock(id);
}

function getProductReviews(id){return reviewsDB[id]||[];}

function renderReviewsBlock(id){
  const el=document.getElementById('reviewsBlock-'+id);
  if(!el)return;
  const revs=getProductReviews(id);
  const p=byId(id);
  const dist=[5,4,3,2,1].map(star=>revs.filter(r=>r.rating===star).length);
  const maxCount=Math.max(1,...dist);
  el.innerHTML=`
    <div class="pd-spec" style="margin-top:20px;border-top:1px solid var(--border);padding-top:18px;">
      <h4>Ratings & Reviews</h4>
      <div class="review-summary">
        <div>
          <div class="review-big-num">${p.rating}★</div>
          <div class="review-stars-row">${'★'.repeat(Math.round(p.rating))}${'☆'.repeat(5-Math.round(p.rating))}</div>
          <div class="review-count-txt">${p.reviews.toLocaleString('en-IN')} ratings · ${revs.length} reviews</div>
        </div>
        <div class="review-bars">
          ${[5,4,3,2,1].map((star,i)=>`<div class="review-bar-row"><span>${star}★</span><div class="review-bar-track"><div class="review-bar-fill" style="width:${(dist[i]/maxCount*100)}%"></div></div><span>${dist[i]}</span></div>`).join('')}
        </div>
      </div>
      <div class="review-form">
        <div style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;margin-bottom:6px;">Write a Review</div>
        <div class="review-star-picker" id="reviewStarPicker">${[1,2,3,4,5].map(n=>`<span data-n="${n}" onclick="setPendingRating(${n})">★</span>`).join('')}</div>
        <textarea id="reviewText-${id}" placeholder="Share your experience with this product..."></textarea>
        <button class="btn-cart" style="width:auto;padding:9px 22px;" onclick="submitReview(${id})">Submit Review</button>
      </div>
      <div id="reviewsList-${id}">
        ${revs.length?revs.map(r=>`
          <div class="review-item">
            <div class="review-item-head">
              <div class="review-avatar">${r.name[0]}</div>
              <div><div class="review-item-name">${r.name}</div><div class="review-item-date">${r.date}</div></div>
            </div>
            <div class="review-item-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
            <div class="review-item-text">${r.text}</div>
          </div>`).join(''):'<div style="color:var(--muted);font-size:13px;padding:10px 0;">No reviews yet. Be the first to review!</div>'}
      </div>
    </div>`;
}

function setPendingRating(n){
  pendingRating=n;
  document.querySelectorAll('#reviewStarPicker span').forEach(s=>{
    s.classList.toggle('sel',Number(s.dataset.n)<=n);
  });
}

function submitReview(id){
  if(pendingRating===0){toast('Please select a star rating');return;}
  const textEl=document.getElementById('reviewText-'+id);
  const text=textEl?textEl.value.trim():'';
  if(!text){toast('Please write a short review');return;}
  if(!reviewsDB[id])reviewsDB[id]=[];
  const name=currentUser?currentUser.name:'Guest User';
  reviewsDB[id].unshift({name,rating:pendingRating,date:new Date().toISOString().slice(0,10),text});
  const p=byId(id);
  const allRatings=reviewsDB[id].map(r=>r.rating);
  p.rating=Math.round((allRatings.reduce((a,b)=>a+b,0)/allRatings.length)*10)/10;
  p.reviews=p.reviews+1;
  pendingRating=0;
  renderReviewsBlock(id);
  toast('✅ Review submitted, thank you!');
}

function toggleWish(e,id){
  e.stopPropagation();
  wishlist.has(id)?wishlist.delete(id):wishlist.add(id);
  document.getElementById('wishBadge').textContent=wishlist.size;
  toast(wishlist.has(id)?'Added to wishlist ❤️':'Removed from wishlist');
  renderSections();renderWishModal();
}
function renderWishModal(){
  const g=document.getElementById('wishGrid');
  document.getElementById('wishCount').textContent=wishlist.size;
  if(!wishlist.size){g.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">No items in wishlist. Start adding! ❤️</div>';return;}
  g.innerHTML=[...wishlist].map(id=>{const p=byId(id);return p?pCard(p):'';}).join('');
}

function addCart(e,id){
  if(e)e.stopPropagation();
  const p=byId(id);
  if(!p){toast('This product is no longer available');renderCart();return;}
  cart[id]=(cart[id]||0)+1;
  updBadge();renderCart();
  const btn=document.getElementById('ab-'+id);
  if(btn){btn.textContent='ADDED ✓';btn.classList.add('done');setTimeout(()=>{btn.textContent='ADD TO CART';btn.classList.remove('done');},1300);}
  toast('Added to cart 🛒');
}
function chgQty(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];updBadge();renderCart();}
function remItem(id){delete cart[id];updBadge();renderCart();toast('Item removed');}
function updBadge(){document.getElementById('cartBadge').textContent=Object.values(cart).reduce((a,b)=>a+b,0);}

function getTotal(){
  let sub=0;
  for(const[id,qty]of Object.entries(cart))sub+=byId(Number(id)).price*qty;
  let d=0;
  if(appliedCoupon){
    if(appliedCoupon.type==='percent')d=Math.round(sub*appliedCoupon.value/100);
    if(appliedCoupon.type==='flat')d=Math.min(appliedCoupon.value,sub);
  }
  const netSub=sub-d;
  const cod=(typeof coPayMethod!=='undefined'&&coPayMethod==='cod')?20:0;
  const del=(netSub>500||(appliedCoupon&&appliedCoupon.type==='shipping'))?0:40;
  return{sub,disc:d,del,cod,total:netSub+del+cod};
}

function renderCart(){
  const body=document.getElementById('cartBody'),foot=document.getElementById('cartFoot');
  let removedStale=false;
  Object.keys(cart).forEach(id=>{
    if(!byId(Number(id))){delete cart[id];removedStale=true;}
  });
  if(removedStale){updBadge();toast('Some items in your cart are no longer available and were removed');}
  const ents=Object.entries(cart).filter(([,q])=>q>0);
  if(!ents.length){
    body.innerHTML='<div class="cart-empty"><div class="ce-icon">🛒</div><b>Your cart is empty</b><br>Add items to get started!</div>';
    foot.innerHTML='';return;
  }
  body.innerHTML=ents.map(([id,qty])=>{
    const p=byId(Number(id));
    return `<div class="cart-item">
      <div class="ci-img ${bgCls(p.category)}">${p.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">${inr(p.price*qty)}</div>
        <div class="ci-qty"><button onclick="chgQty(${p.id},-1)">−</button><span>${qty}</span><button onclick="chgQty(${p.id},1)">+</button></div>
        <button class="ci-remove" onclick="remItem(${p.id})">REMOVE</button>
      </div>
    </div>`;
  }).join('');
  const{sub,disc:d,del,cod,total}=getTotal();
  foot.innerHTML=`
    ${appliedCoupon?`<div class="coupon-strip"><span>🎁 ${appliedCoupon.label} (${appliedCoupon.code})</span><span style="cursor:pointer;" onclick="remCoupon()">✕</span></div>`:''}
    <div class="sum-row"><span>Subtotal (${Object.values(cart).reduce((a,b)=>a+b,0)} items)</span><span>${inr(sub)}</span></div>
    ${d>0?`<div class="sum-row"><span>Coupon Discount</span><span style="color:var(--green);font-weight:700;">−${inr(d)}</span></div>`:''}
    <div class="sum-row"><span>Delivery</span><span>${del===0?'<span style="color:var(--green);font-weight:700;">FREE</span>':inr(del)}</span></div>
    ${cod>0?`<div class="sum-row"><span>COD Fee</span><span>${inr(cod)}</span></div>`:''}
    <div class="sum-row total"><span>Total Amount</span><span>${inr(total)}</span></div>
    <button class="cart-cta" onclick="startCheckout()">PLACE ORDER →</button>`;
}
function remCoupon(){appliedCoupon=null;renderCart();toast('Coupon removed');}

function openCart(){document.getElementById('cartSide').classList.add('on');document.getElementById('overlay').classList.add('on');}
function closeCart(){document.getElementById('cartSide').classList.remove('on');document.getElementById('overlay').classList.remove('on');}

function openM(id){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('on'));document.getElementById(id).classList.add('on');document.getElementById('overlay').classList.add('on');}
function closeM(id){document.getElementById(id).classList.remove('on');document.getElementById('overlay').classList.remove('on');}
function closeAll(){document.querySelectorAll('.modal').forEach(m=>m.classList.remove('on'));document.getElementById('cartSide').classList.remove('on');document.getElementById('overlay').classList.remove('on');}

/* ─── TRENDRA AI ──────────── */
let baristaInit=false;
let baristaHistory=[];

const AI_COLOR_WORDS={
  kala:'black',kali:'black',kale:'black',black:'black',
  safed:'white',white:'white',
  laal:'red',lal:'red',red:'red',
  neela:'blue',nila:'blue',blue:'blue',
  hara:'green',green:'green',
  pila:'yellow',peela:'yellow',yellow:'yellow'
};
const AI_CATEGORY_WORDS={
  pant:'fashion',pants:'fashion',pajama:'fashion',jeans:'fashion',trouser:'fashion',trousers:'fashion',
  shirt:'fashion',kurti:'fashion',dress:'fashion',jacket:'fashion',tshirt:'fashion','t-shirt':'fashion',
  kapde:'fashion',kapda:'fashion',kapdo:'fashion',cloth:'fashion',clothes:'fashion',
  mobile:'mobiles',phone:'mobiles',smartphone:'mobiles',
  tv:'tvs',television:'tvs',
  laptop:'electronics',earbuds:'electronics',speaker:'electronics',
  fridge:'appliances',ac:'appliances',washingmachine:'appliances',
  sofa:'furniture',table:'furniture',
  toy:'toys',book:'books',
  rice:'grocery',oil:'grocery'
};
const AI_CHEAP_WORDS=['sasta','cheap','low price','kam price','budget'];
const AI_PREMIUM_WORDS=['premium','best','top','expensive','mehenga','mahenga'];

function aiParseQuery(q){
  const lower=q.toLowerCase();
  const words=lower.split(/\s+/).filter(Boolean);
  let color=null,category=null,sortCheap=false,sortPremium=false;
  for(const w of words){
    if(AI_COLOR_WORDS[w])color=AI_COLOR_WORDS[w];
    if(AI_CATEGORY_WORDS[w])category=AI_CATEGORY_WORDS[w];
  }
  if(AI_CHEAP_WORDS.some(p=>lower.includes(p)))sortCheap=true;
  if(AI_PREMIUM_WORDS.some(p=>lower.includes(p)))sortPremium=true;
  return{color,category,sortCheap,sortPremium,raw:lower,words};
}

function aiSearchProducts(query){
  const parsed=aiParseQuery(query);
  let results=products.filter(p=>{
    const nameLower=p.name.toLowerCase();
    let ok=true;
    if(parsed.color)ok=ok&&
