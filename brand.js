(()=>{
  const replaceText = (root=document.body)=>{
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(n=>{ if(n.nodeValue && n.nodeValue.includes('BeanGo')) n.nodeValue=n.nodeValue.replaceAll('BeanGo','DOSZ HOUZ'); });
    document.title='DOSZ HOUZ COFFEE';
  };
  try{
    const key='beango_complete_v1';
    const raw=localStorage.getItem(key);
    if(raw){
      const s=JSON.parse(raw);
      if(Array.isArray(s.outlets)) s.outlets=s.outlets.map(o=>({...o,name:String(o.name||'').replaceAll('BeanGo','DOSZ HOUZ')}));
      if(Array.isArray(s.orders)) s.orders=s.orders.map(o=>({...o,outletName:String(o.outletName||'').replaceAll('BeanGo','DOSZ HOUZ')}));
      localStorage.setItem(key,JSON.stringify(s));
    }
  }catch(e){}
  replaceText();
  new MutationObserver(()=>replaceText()).observe(document.body,{childList:true,subtree:true,characterData:true});
})();