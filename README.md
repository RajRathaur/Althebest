@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@700;800&display=swap');

/* PREMIUM WHITE, GREY & GREEN THEME */
:root{
  --blue:#10b981;        /* Premium Green */
  --blue-d:#059669;      /* Dark Premium Green */
  --yellow:#9ca3af;      /* Soft Grey */
  --orange:#4b5563;      /* Medium Grey for secondary buttons */
  --gold:#374151;        /* Dark Slate Grey */
  --green:#10b981;       /* Success Green */
  --red:#ef4444;         /* Error Red */
  --bg:#f9fafb;          /* Premium Off-White Background */
  --white:#ffffff;       /* Pure White */
  --text:#111827;        /* Dark Grey for readability */
  --muted:#6b7280;       /* Muted text */
  --border:#e5e7eb;      /* Light Grey Border */
  --r:8px;
  --card:#ffffff;
  --card-2:#f3f4f6;
}

body.dark-mode{--bg:#111827;--white:#1f2937;--text:#f9fafb;--muted:#9ca3af;--border:#374151;}
body.dark-mode .pcard,body.dark-mode .sec,body.dark-mode .modal,body.dark-mode .cart-side,body.dark-mode .notif-panel,body.dark-mode .profile-drop{background:var(--white);}
body.dark-mode .cat-nav{background:var(--white);}
body.dark-mode .fbox,body.dark-mode .trust-bar,body.dark-mode .scard,body.dark-mode .adm-card,body.dark-mode .set-card,body.dark-mode .ch-card{background:var(--white);}

*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;overflow-x:hidden;width:100%;}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);font-size:14px;padding-bottom:80px;overflow-x:hidden;width:100%;}
button{font-family:inherit;cursor:pointer;border:none;outline:none;}
a{text-decoration:none;color:inherit;}
input,select,textarea{font-family:inherit;outline:none;}

.offer-strip{background:var(--blue-d);color:#fff;text-align:center;font-size:12px;font-weight:600;padding:4px 12px;letter-spacing:.3px;}
.offer-strip span{margin:0 16px;}

.hdr{background:#ffffff;position:sticky;top:0;z-index:300;box-shadow:0 2px 15px rgba(0,0,0,.05);border-bottom:1px solid var(--border);}
.hdr-top{max-width:1300px;margin:0 auto;padding:10px 20px;display:flex;align-items:center;gap:18px;min-width:0;}
.logo{font-family:'Poppins',sans-serif;font-weight:800;font-size:22px;color:var(--blue-d);white-space:nowrap;cursor:pointer;line-height:1;}
.logo sub{font-size:10px;font-weight:700;color:var(--muted);font-style:italic;display:block;letter-spacing:.5px;}

.hdr-search{flex:1;max-width:580px;display:flex;background:var(--card-2);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;}
.hdr-search input{flex:1;border:none;padding:10px 16px;font-size:14px;color:var(--text);background:transparent;}
.hdr-search button{background:var(--blue);color:#fff;padding:0 20px;font-size:18px;border-radius:0;}

.hdr-nav{display:flex;align-items:center;gap:20px;margin-left:auto;}
.hdr-btn{background:var(--blue);color:#fff;font-weight:700;font-size:13px;padding:8px 22px;border-radius:var(--r);}
.hdr-link{color:var(--text);font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;white-space:nowrap;position:relative;}
.hdr-link .badge{position:absolute;top:-8px;right:-10px;background:var(--red);color:#fff;font-size:10px;font-weight:800;border-radius:50%;min-width:17px;height:17px;display:flex;align-items:center;justify-content:center;}
.hdr-avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--blue-d));color:#fff;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center;}

.cat-nav{background:var(--white);border-bottom:1px solid var(--border);position:sticky;top:52px;z-index:290;}
.cat-nav-inner{max-width:1300px;margin:0 auto;padding:0 20px;display:flex;gap:0;overflow-x:auto;}
.cat-nav-inner::-webkit-scrollbar{height:0;}
.cat-item{display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 20px;font-size:12px;font-weight:600;color:var(--muted);flex-shrink:0;cursor:pointer;border-bottom:2px solid transparent;transition:color .15s,border-color .15s;}
.cat-item:hover,.cat-item.active{color:var(--blue);border-bottom-color:var(--blue);}
.cat-item .ci{font-size:22px;line-height:1;}

.wrap{max-width:1300px;margin:0 auto;padding:0 20px;}
.hero-area{display:grid;grid-template-columns:170px 1fr 170px;gap:0;background:var(--white);margin-top:8px;border-radius:var(--r);border:1px solid var(--border);}
.hero-left,.hero-right{display:flex;flex-direction:column;border:1px solid var(--border);border-radius:var(--r) 0 0 var(--r);}
.hero-right{border-radius:0 var(--r) var(--r) 0;}
.side-cat{padding:10px 14px;font-size:12px;font-weight:600;color:var(--text);cursor:pointer;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px;white-space:nowrap;transition:background .1s;}
.side-cat:hover{background:var(--card-2);color:var(--blue);}

.hero-banner{position:relative;overflow:hidden;min-height:300px;cursor:pointer;}
.hero-slide{position:absolute;inset:0;display:none;align-items:center;padding:40px 50px;}
.hero-slide.active{display:flex;}
.hero-slide h1{font-family:'Poppins',sans-serif;font-size:36px;font-weight:800;color:#fff;line-height:1.2;text-shadow:0 2px 8px rgba(0,0,0,.3);}
.hero-slide p{font-size:15px;color:rgba(255,255,255,.9);margin:10px 0 18px;}
.hero-slide .hbtn{background:#fff;color:var(--blue-d);font-weight:800;padding:10px 24px;border-radius:var(--r);font-size:14px;display:inline-block;}
.hero-dots{position:absolute;bottom:12px;left:50%;transform:translateX(-50%);display:flex;gap:6px;}
.hero-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.5);cursor:pointer;transition:background .2s;}
.hero-dot.active{background:#fff;}
.hero-arr{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.85);width:28px;height:64px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;z-index:2;color:var(--text);}
.hero-arr.prev{left:0;border-radius:0 4px 4px 0;}
.hero-arr.next{right:0;border-radius:4px 0 0 4px;}

.sec{background:var(--white);border:1px solid var(--border);border-radius:var(--r);padding:16px 0;margin-top:10px;overflow:hidden;}
.sec-hdr{padding:0 16px 12px;display:flex;align-items:flex-end;justify-content:space-between;border-bottom:1px solid var(--border);}
.sec-hdr h2{font-size:19px;font-weight:800;font-family:'Poppins',sans-serif;color:var(--text);}
.sec-hdr .sub{font-size:12px;color:var(--muted);margin-top:2px;}
.sec-hdr .view-all{background:var(--card-2);color:var(--blue);border:1px solid var(--border);padding:8px 22px;border-radius:var(--r);font-weight:700;font-size:13px;cursor:pointer;}
.sec-hdr .timer{background:var(--card-2);color:var(--text);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;border:1px solid var(--border);}
.sec-hdr .timer b{color:var(--blue);}

.prod-scroll{display:flex;gap:0;overflow-x:auto;padding:0;}
.prod-scroll::-webkit-scrollbar{height:4px;}
.prod-scroll::-webkit-scrollbar-thumb{background:var(--border);}
.prod-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));padding:10px 16px;gap:0;}

.pcard{border-right:1px solid var(--border);border-bottom:1px solid var(--border);padding:16px 10px 12px;cursor:pointer;transition:box-shadow .2s,transform .15s;position:relative;background:var(--white);text-align:center;min-width:170px;}
.pcard:hover{box-shadow:0 8px 28px rgba(16, 185, 129, 0.12);z-index:2;transform:translateY(-2px);}
.pcard .wish{position:absolute;top:8px;right:8px;font-size:16px;background:none;padding:2px;}
.pcard .img-wrap{height:150px;display:flex;align-items:center;justify-content:center;font-size:72px;margin-bottom:10px;border-radius:var(--r);overflow:hidden;background:var(--card-2);}
.pcard .pname{font-size:13px;font-weight:500;color:var(--text);line-height:1.35;margin-bottom:4px;text-align:left;}
.pcard .pname-short{font-size:13px;font-weight:600;margin-bottom:2px;text-align:left;color:var(--text);}
.pcard .prating{display:flex;align-items:center;gap:5px;margin-bottom:6px;}
.rating-star{background:var(--blue);color:#fff;font-size:11px;font-weight:700;padding:2px 6px;border-radius:3px;display:inline-flex;align-items:center;gap:2px;}
.rating-count{font-size:11px;color:var(--muted);}
.pcard .pprice{display:flex;align-items:baseline;gap:7px;flex-wrap:wrap;}
.pprice .sp{font-size:17px;font-weight:700;color:var(--text);}
.pprice .mrp{font-size:12px;color:var(--muted);text-decoration:line-through;}
.pprice .off{font-size:12px;color:var(--blue);font-weight:700;}

.pcard .add-btn{width:100%;margin-top:10px;background:var(--card-2);color:var(--text);border:1px solid var(--border);font-weight:700;font-size:12px;padding:8px;border-radius:var(--r);letter-spacing:.4px;text-transform:uppercase;transition:all .15s;}
.pcard .add-btn:hover{background:var(--blue);color:#fff;border-color:var(--blue);}
.pcard .add-btn.done{background:var(--blue);color:#fff;}
.pcard .badge-new{position:absolute;top:8px;left:8px;background:var(--yellow);color:#fff;font-size:10px;font-weight:800;padding:2px 7px;border-radius:2px;}

/* MINI BANNERS & TRUST BAR */
.banner-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px;}
.mini-banner{border-radius:var(--r);padding:20px 16px;min-height:120px;display:flex;flex-direction:column;justify-content:center;cursor:pointer;position:relative;overflow:hidden;color:#fff;}
.mini-banner h3{font-size:16px;font-weight:800;margin-bottom:4px;}
.mini-banner p{font-size:12px;opacity:.9;}
.mini-banner span{font-size:11px;font-weight:700;background:rgba(255,255,255,.25);padding:3px 10px;border-radius:2px;margin-top:8px;display:inline-block;}

.feature-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-top:10px;}
.fbox{background:var(--white);border-radius:var(--r);padding:20px;text-align:center;border:1px solid var(--border);}
.fbox .fi{font-size:32px;margin-bottom:8px;}
.fbox h4{font-size:13px;font-weight:700;margin-bottom:4px;color:var(--text);}
.fbox p{font-size:12px;color:var(--muted);}

.trust-bar{background:var(--white);border-top:1px solid var(--border);padding:14px 0;margin-top:10px;}
.trust-inner{max-width:1300px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-around;flex-wrap:wrap;gap:12px;}
.trust-item{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--text);}
.trust-icon{font-size:24px;}
.trust-info b{display:block;font-weight:700;font-size:13px;}
.trust-info span{font-size:11px;color:var(--muted);}

.footer{background:var(--white);border-top:1px solid var(--border);color:var(--muted);margin-top:20px;}
.footer-top{max-width:1300px;margin:0 auto;padding:40px 20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:30px;}
.footer-col h5{color:var(--text);font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;margin-bottom:14px;}
.footer-col a{display:block;font-size:12px;padding:4px 0;cursor:pointer;transition:color .15s;}
.footer-col a:hover{color:var(--blue);}
.footer-bottom{border-top:1px solid var(--border);padding:16px 20px;text-align:center;font-size:12px;color:var(--muted);}
.footer-bottom .upi{color:var(--blue);font-weight:700;}

/* MODALS & CART */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:400;opacity:0;visibility:hidden;transition:opacity .2s;}
.overlay.on{opacity:1;visibility:visible;}
.modal{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(.95);background:var(--white);border:1px solid var(--border);color:var(--text);border-radius:10px;z-index:410;max-width:92vw;max-height:90vh;overflow-y:auto;opacity:0;visibility:hidden;transition:opacity .2s,transform .2s;}
.modal.on{opacity:1;visibility:visible;transform:translate(-50%,-50%) scale(1);}
.mclose{position:absolute;top:12px;right:14px;background:var(--card-2);color:var(--text);border-radius:50%;width:28px;height:28px;font-size:15px;}

.cart-side{position:fixed;top:0;right:0;bottom:0;width:390px;max-width:94vw;background:var(--white);color:var(--text);z-index:410;transform:translateX(100%);transition:transform .3s;display:flex;flex-direction:column;box-shadow:-4px 0 30px rgba(0,0,0,.1);}
.cart-side.on{transform:translateX(0);}
.cart-hdr{background:var(--white);color:var(--text);border-bottom:1px solid var(--border);padding:16px 18px;display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:16px;}
.cart-hdr button{background:none;color:var(--text);font-size:20px;}
.cart-body{flex:1;overflow-y:auto;padding:10px 14px;}
.cart-item{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--border);}
.ci-img{width:64px;height:64px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:30px;flex-shrink:0;background:var(--card-2);}
.ci-info{flex:1;}
.ci-name{font-size:13px;font-weight:500;line-height:1.3;margin-bottom:5px;color:var(--text);}
.ci-price{font-weight:700;font-size:14px;color:var(--text);}
.ci-qty{display:flex;align-items:center;gap:10px;margin-top:6px;}
.ci-qty button{width:24px;height:24px;border:1px solid var(--border);background:var(--card);color:var(--text);border-radius:3px;font-weight:700;}
.ci-remove{background:none;color:var(--red);font-size:12px;font-weight:700;margin-top:4px;}
.cart-foot{border-top:1px solid var(--border);padding:14px 18px;background:var(--card-2);}
.sum-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:7px;color:var(--muted);}
.sum-row.total{color:var(--text);font-weight:800;font-size:16px;border-top:1px dashed var(--border);padding-top:8px;margin-top:5px;}
.cart-cta{width:100%;background:var(--blue);color:#fff;font-weight:800;font-size:14px;padding:12px;border-radius:var(--r);text-transform:uppercase;margin-top:8px;}

/* PRODUCT DETAIL PAGE */
.pdp-wrap{display:grid;grid-template-columns:420px 1fr;gap:24px;background:var(--white);border-radius:var(--r);padding:24px;border:1px solid var(--border);}
.pdp-left{position:sticky;top:140px;align-self:start;}
.pdp-img{width:100%;height:380px;border-radius:var(--r);display:flex;align-items:center;justify-content:center;font-size:140px;overflow:hidden;margin-bottom:14px;background:var(--card-2);}
.pdp-actions{display:flex;gap:10px;}
.pdp-actions button{flex:1;padding:14px;font-weight:800;font-size:14px;border-radius:var(--r);text-transform:uppercase;letter-spacing:.4px;}
.btn-cart{background:var(--orange);color:#fff;}
.btn-buy{background:var(--blue);color:#fff;}

/* ADMIN PANEL STYLING */
.adm{position:fixed;inset:0;background:var(--bg);z-index:500;display:none;flex-direction:column;}
.adm.on{display:flex;}
.adm-top{background:var(--white);color:var(--text);display:flex;align-items:center;gap:14px;padding:0 20px;height:54px;flex-shrink:0;border-bottom:1px solid var(--border);}
.adm-brand{font-family:'Poppins',sans-serif;font-weight:800;font-size:17px;color:var(--text);}
.adm-brand span{color:var(--blue);}
.adm-top-btn{background:var(--card-2);color:var(--text);border:1px solid var(--border);padding:7px 14px;border-radius:3px;font-weight:600;font-size:12px;}
.adm-side{width:200px;background:var(--white);color:var(--muted);flex-shrink:0;overflow-y:auto;padding:14px 8px;border-right:1px solid var(--border);}
.adm-nav{width:100%;text-align:left;padding:9px 12px;border-radius:5px;font-weight:600;font-size:13px;background:none;color:var(--text);display:flex;align-items:center;gap:9px;margin-bottom:2px;}
.adm-nav:hover{background:var(--card-2);}
.adm-nav.on{background:var(--blue);color:#fff;}
.adm-content{flex:1;overflow-y:auto;padding:22px;background:var(--bg);}
table.atbl th{background:var(--card-2);font-weight:700;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);}
table.atbl tr:hover td{background:var(--card-2);}

/* SELLER PAGE */
.seller-hero{background:var(--card-2);padding:60px 24px;text-align:center;border-bottom:1px solid var(--border);}
.seller-hero h1{font-family:'Poppins',sans-serif;font-size:38px;font-weight:800;color:var(--text);margin-bottom:12px;}
.seller-hero h1 span{color:var(--blue);}
.seller-cta-primary{background:var(--blue);color:#fff;font-weight:800;padding:14px 32px;border-radius:8px;font-size:15px;}
.seller-cta-secondary{background:transparent;border:1px solid var(--border);color:var(--text);font-weight:700;padding:14px 32px;border-radius:8px;font-size:15px;}
# Althebest
