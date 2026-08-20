(()=>{
  const OUTLET={id:'o1',name:'DOSZ HOUZ COFFEE PPAM KETUMBAR',address:'PPAM Ketumbar',phone:'',pickup:12,deliveryFee:5,active:true};
  const replaceText=(root=document.body)=>{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(n=>{if(n.nodeValue){n.nodeValue=n.nodeValue.replaceAll('BeanGo Coffee','DOSZ HOUZ COFFEE').replaceAll('BeanGo Central','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('BeanGo Damansara','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('BeanGo Putrajaya','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('DOSZ HOUZ Central','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('DOSZ HOUZ Damansara','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('DOSZ HOUZ Putrajaya','DOSZ HOUZ COFFEE PPAM KETUMBAR').replaceAll('BeanGo','DOSZ HOUZ');}});
    document.title='DOSZ HOUZ COFFEE';
    const label=document.getElementById('selectedOutletLabel');if(label)label.textContent='DOSZ HOUZ COFFEE PPAM KETUMBAR';
    const change=document.getElementById('changeOutletBtn');if(change)change.style.display='none';
  };
  try{
    const key='beango_complete_v1';const raw=localStorage.getItem(key);let s=raw?JSON.parse(raw):{};
    s.outlets=[OUTLET];s.selectedOutlet='o1';
    if(Array.isArray(s.orders))s.orders=s.orders.map(o=>({...o,outletId:'o1',outletName:'DOSZ HOUZ COFFEE PPAM KETUMBAR'}));
    localStorage.setItem(key,JSON.stringify(s));
  }catch(e){}
  replaceText();
  new MutationObserver(()=>replaceText()).observe(document.body,{childList:true,subtree:true,characterData:true});
})();