// Model conditions near Fuji, deliberately separate from a camera sighting.
export function describeFuji(current){
 if(!current||![current.cloud_cover,current.visibility,current.is_day,current.time].every(Number.isFinite)||current.cloud_cover<0||current.cloud_cover>100||current.visibility<0)throw new Error('Missing Fuji model data');
 const age=Date.now()-current.time*1000;
 if(age>90*60*1000||age< -30*60*1000)throw new Error('Fuji model data is stale');
 const cloud=current.cloud_cover;
 return {status:current.is_day===0?'Night near Fuji':cloud<25?'Mostly clear near Fuji':cloud<65?'Mixed cloud near Fuji':'Cloudy near Fuji',detail:`${Math.round(cloud)}% cloud · ${(current.visibility/1000).toFixed(1)} km model visibility near Kawaguchiko`,time:current.time};
}
if(typeof document!=='undefined'){
 const status=document.getElementById('fuji-status'),detail=document.getElementById('fuji-detail'),updated=document.getElementById('fuji-updated');let lastAttempt=0,busy=false;
 async function refresh(){if(document.hidden||busy)return;busy=true;lastAttempt=Date.now();try{
 const r=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.50&longitude=138.76&current=cloud_cover,visibility,is_day&timeformat=unixtime&timezone=Asia%2FTokyo',{signal:AbortSignal.timeout(12000)});if(!r.ok)throw new Error('Weather unavailable');
 const model=describeFuji((await r.json()).current);status.textContent=model.status;detail.textContent=model.detail;updated.textContent=`Model valid ${new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Tokyo',hour:'2-digit',minute:'2-digit'}).format(new Date(model.time*1000))} JST · refreshes every 15 min`;
 }catch{status.textContent='Conditions unavailable';detail.textContent='Check the official camera for the latest view.';updated.textContent='Automatic retry in 15 minutes';}finally{busy=false;}}
 refresh();setInterval(refresh,15*60*1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-lastAttempt>15*60*1000)refresh();});
}
