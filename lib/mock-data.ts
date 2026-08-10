export const overviewKpis=[
 {label:'Total Collection',value:'124,850',delta:'+3.2%',route:'/collection',detail:['Available 96,420','On Loan 18,734','Digitised 24,680']},
 {label:'Active Members',value:'8,421',delta:'+2.6%',route:'/circulation',detail:['Staff 3,120','Officer 2,486','Researcher 1,042']},
 {label:'Loans Today',value:'342',delta:'+8.4%',route:'/circulation',detail:['Books 281','Serials 38','Media 23']},
 {label:'Visitors Today',value:'287',delta:'+5.1%',route:'/',detail:['Morning 96','Afternoon 143','Evening 48']},
 {label:'Overdue Items',value:'126',delta:'-4.8%',route:'/circulation',detail:['1–7 days 48','8–14 days 31','>60 days 8']},
 {label:'Digital Downloads',value:'1,842',delta:'+12.3%',route:'/digital-kpi',detail:['PDF 1,162','Images 438','Other 242']},
];
export const circulationTrend=[
 {m:'Jan',loan:2420,returns:2210,renewal:410},{m:'Feb',loan:2640,returns:2390,renewal:462},{m:'Mar',loan:2510,returns:2480,renewal:438},{m:'Apr',loan:2940,returns:2660,renewal:520},{m:'May',loan:3180,returns:2890,renewal:566},{m:'Jun',loan:3050,returns:3000,renewal:541},{m:'Jul',loan:3370,returns:3110,renewal:604},{m:'Aug',loan:3520,returns:3260,renewal:632},
];
export const subjects=[{name:'Computer Science',value:21},{name:'Management',value:18},{name:'History',value:14},{name:'Social Science',value:12},{name:'General Works',value:10},{name:'Technology',value:9}];
export const health=[{name:'Collection Usage',value:82},{name:'Metadata Completeness',value:94},{name:'Collection Currency',value:71},{name:'Availability',value:88},{name:'Digital Accessibility',value:67},{name:'Inactive Collection',value:62}];
export const overviewActions=[
 {title:'126 overdue items',severity:'Critical',action:'Review'},{title:'328 uncatalogued items',severity:'Warning',action:'Process'},{title:'842 inactive members',severity:'Information',action:'View'},{title:'1,240 items not borrowed >5 years',severity:'Warning',action:'Review'},{title:'387 incomplete metadata records',severity:'Warning',action:'Fix'},{title:'45 acquisition requests pending',severity:'Information',action:'Review'},
];
export const smartInsights=['Computer Science demand increased 18% this quarter.','1,240 items have never been borrowed — review for weeding.','842 items are inactive for more than five years — consider digitisation.','Management titles show high circulation — acquire additional copies.','387 metadata records require completeness review.'];
export const recent=['Metadata updated for ACC-2026-00418','Acquisition request AQ-1042 approved','38 bibliographic records imported','Daily circulation reconciliation completed','Digital object DO-2026-0098 published'];
export const collectionRows=Array.from({length:42},(_,i)=>({
 accession:`ACC-${2026}-${String(i+401).padStart(5,'0')}`,
 title:['Artificial Intelligence for Public Services','Strategic Management in Malaysia','Modern Southeast Asian History','Digital Archives Handbook','Data Governance Essentials','Public Sector Innovation'][i%6]+` ${i+1}`,
 subject:['Computer Science','Management','History','Information Science','Technology','Social Science'][i%6],
 ddc:['006.3','658.4','959.5','025.84','005.74','300'][i%6],
 year:2012+(i%15),
 status:['Available','On Loan','Available','Digitised','Damaged','Available'][i%6],
 loans:(i*7)%63,
 last:i%7===0?'Never':`${1+(i%28)} Jul 2026`,
 metadata:i%8===0?'Incomplete':'Complete',
}));
export const collectionAge=[{name:'0–5 Years',value:38},{name:'6–10 Years',value:27},{name:'11–15 Years',value:18},{name:'16–20 Years',value:10},{name:'>20 Years',value:7}];
export const collectionIssues=[{name:'Never Borrowed',value:1240},{name:'Not Borrowed >5 Years',value:842},{name:'Incomplete Metadata',value:387},{name:'Missing DDC',value:118},{name:'Missing Subject',value:96},{name:'Duplicate Records',value:42}];
export const peakHours=[{h:'8AM',v:22},{h:'10AM',v:48},{h:'12PM',v:86},{h:'2PM',v:92},{h:'4PM',v:61},{h:'6PM',v:35},{h:'8PM',v:14}];
export const userCategories=[{name:'Staff',value:3120},{name:'Officer',value:2486},{name:'Student',value:1218},{name:'Researcher',value:1042},{name:'External',value:555}];
export const memberGrowth=[{m:'Mar',v:7680},{m:'Apr',v:7810},{m:'May',v:7955},{m:'Jun',v:8078},{m:'Jul',v:8270},{m:'Aug',v:8421}];
export const overdue=[{name:'1–7 Days',value:48},{name:'8–14 Days',value:31},{name:'15–30 Days',value:22},{name:'31–60 Days',value:17},{name:'> 60 Days',value:8}];
export const acquisitionFlow=[{name:'Request',value:45},{name:'Approval',value:31},{name:'Purchase Order',value:26},{name:'Supplier',value:23},{name:'Delivery',value:18},{name:'Receive',value:14},{name:'Cataloguing',value:9}];
export const catalogueWorkload=[{name:'Acquisition Unit',assigned:84,done:61},{name:'Cataloguing Unit',assigned:132,done:98},{name:'Metadata QA',assigned:68,done:53},{name:'Processing',assigned:74,done:58}];
export const digitalTrend=[{m:'Mar',views:8200,downloads:3200},{m:'Apr',views:9100,downloads:3580},{m:'May',views:9700,downloads:4010},{m:'Jun',views:10800,downloads:4380},{m:'Jul',views:11600,downloads:4720},{m:'Aug',views:12840,downloads:5180}];
export const digitalTypes=[{name:'Images',value:4820},{name:'PDF',value:3640},{name:'Video',value:620},{name:'Audio',value:430}];
export const searchTerms=[{name:'Artificial Intelligence',value:424},{name:'Malaysia History',value:382},{name:'Government Policy',value:292},{name:'Digital Archive',value:266},{name:'Management',value:241}];
export const managementKpis=[
 {name:'Annual Visitors',target:72000,current:51840,status:'On Track'},{name:'Circulation',target:42000,current:36720,status:'On Track'},{name:'New Collection',target:5000,current:3380,status:'Attention'},{name:'Cataloguing',target:4800,current:3960,status:'On Track'},{name:'Digitisation',target:2500,current:1370,status:'Attention'},{name:'Programmes',target:48,current:48,status:'Completed'},{name:'User Satisfaction',target:90,current:84,status:'Attention'},
];
