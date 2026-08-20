(()=>{
  const OUTLET={id:'o1',name:'DOSZ HOUZ COFFEE',address:'PPAM Ketumbar',phone:'',pickup:12,deliveryFee:5,active:true};
  try{
    const key='beango_complete_v1';
    const raw=localStorage.getItem(key);let s=raw?JSON.parse(raw):{};
    s.outlets=[OUTLET];s.selectedOutlet='o1';
    if(Array.isArray(s.orders))s.orders=s.orders.map(o=>({...o,outletId:'o1',outletName:'DOSZ HOUZ COFFEE'}));
    localStorage.setItem(key,JSON.stringify(s));
  }catch(e){console.warn('DOSZ data migration skipped',e)}
  document.title='DOSZ HOUZ COFFEE';
  const label=document.getElementById('selectedOutletLabel');
  if(label && !localStorage.getItem('dosz_order_method')) label.textContent='🥤 Pickup';
  const change=document.getElementById('changeOutletBtn');if(change)change.style.display='none';
})();