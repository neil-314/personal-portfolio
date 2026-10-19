import * as T from './vendor/three.module.js';
import {shibuyaBuildings,shibuyaRoads,shibuyaRails} from './shibuya-data.js';

// Real PLATEAU building surfaces and OSM alignments, with portfolio-scale presentation details.
// See vendor/SHIBUYA-DATA.txt for sources and the changes made to the open data.
export function createShibuya(parent,kit){
 const {box,cylinder,beam,mesh,local,plane,texture,mat,lit,facades,roofSurface,metal,asphalt,sidewalk,white,glass,dark,tree,building,emissives}=kit;
 const g=local(parent,2.5,0,9.11),PI=Math.PI;
 const wallMaterials=facades.slice(0,6).map(source=>{const m=source.clone();m.side=T.DoubleSide;return m;});
 facades.push(...wallMaterials);
 const qfrontGlass=mat('#20323c',.26,.6);
 const geometryBatches=Array.from({length:8},()=>({positions:[],uvs:[]}));
 let triangles=0;
 for(let bi=0;bi<shibuyaBuildings.length;bi++){
  const b=shibuyaBuildings[bi],style=bi===97||bi===96?7:bi%6;
  for(const points of b.polygons){
   if(points.length<3)continue;
   const normal=new T.Vector3();
   for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];normal.x+=(a[1]-b[1])*(a[2]+b[2]);normal.y+=(a[2]-b[2])*(a[0]+b[0]);normal.z+=(a[0]-b[0])*(a[1]+b[1]);}
   if(normal.lengthSq()<1e-8)continue;normal.normalize();
   const roof=Math.abs(normal.y)>.65,drop=roof?1:Math.abs(normal.x)>Math.abs(normal.z)?0:2;
   const project=v=>drop===0?new T.Vector2(v[2],v[1]):drop===1?new T.Vector2(v[0],v[2]):new T.Vector2(v[0],v[1]);
   const faces=T.ShapeUtils.triangulateShape(points.map(project),[]),batch=geometryBatches[roof?6:style];
   for(const face of faces){
    const a=new T.Vector3(...points[face[0]]),b=new T.Vector3(...points[face[1]]),c=new T.Vector3(...points[face[2]]);
    if(b.clone().sub(a).cross(c.clone().sub(a)).dot(normal)<0)[face[1],face[2]]=[face[2],face[1]];
    for(const index of face){const v=points[index];batch.positions.push(v[0],v[1]+.32,v[2]);batch.uvs.push(roof?v[0]/12:(drop===0?v[2]:v[0])/14,roof?v[2]/12:v[1]/48);}
    triangles++;
   }
  }
 }
 geometryBatches.forEach((batch,index)=>{if(!batch.positions.length)return;const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(batch.positions,3));geo.setAttribute('uv',new T.Float32BufferAttribute(batch.uvs,2));geo.computeVertexNormals();const m=mesh(geo,index===6?roofSurface:index===7?qfrontGlass:wallMaterials[index],g);m.castShadow=m.receiveShadow=true;});
 const ground=mesh(new T.CircleGeometry(245,96),mat('#71716a'),g,-2.5,.04,-9.11);ground.rotation.x=-PI/2;ground.receiveShadow=true;
 const walkingPaving=mat('#8a8274'),railBed=mat('#4a4d49');
 function segment(x1,z1,x2,z2,width,y,height,material,offset=0){const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz);if(len<.1)return;const sg=local(g,(x1+x2)/2,y,(z1+z2)/2,Math.atan2(-dz,dx));box(sg,0,0,offset,len,height,width,material);return sg;}
 for(const [x1,z1,x2,z2,width,level,kind] of shibuyaRoads){
  if(level>0&&kind!=='motorway')continue;
  const elevated=kind==='motorway',y=elevated?12:.18,isWalk=kind==='pedestrian'||kind==='living_street';
  segment(x1,z1,x2,z2,width,y,elevated?1.2:.06,isWalk?walkingPaving:asphalt);
  if(elevated){for(const side of[-1,1])segment(x1,z1,x2,z2,.3,y+1.2,1.4,metal,side*(width/2-.15));if(Math.hypot(x2-x1,z2-z1)>18)cylinder(g,(x1+x2)/2,y/2,(z1+z2)/2,1,y,dark);}
  else if(!isWalk&&Math.hypot((x1+x2)/2+2.5,(z1+z2)/2+9.11)>43){for(const side of[-1,1])segment(x1,z1,x2,z2,1.7,.24,.16,sidewalk,side*(width/2+.85));}
 }
 // The five crossings sit inside the actual junction, rather than a large empty square.
 const crossingOutline=[[-34,-27],[-13,-35],[12,-32],[24,-14],[21,12],[-7,26],[-32,15],[-40,-4]];
 const shape=new T.Shape(crossingOutline.map(p=>new T.Vector2(p[0],-p[1]))),junction=mesh(new T.ShapeGeometry(shape),asphalt,g,0,.235,0);junction.rotation.x=-PI/2;junction.receiveShadow=true;
 const rawPaths=[[-34,-25,-35,-1,5.8],[-13,-31,15,-24,6.2],[-29,12,-8,23,6.2],[21,-11,20,10,5.8],[-27,-27,13,16,7.2]];
 for(const[x1,z1,x2,z2,width]of rawPaths){const dx=x2-x1,dz=z2-z1,len=Math.hypot(dx,dz),sg=local(g,x1,0,z1,Math.atan2(-dz,dx));for(let x=.6;x<len-.5;x+=1.65)box(sg,x,.27,0,.92,.025,width,white);}
 // Fine road paint and tactile strips stay at the approaches, outside the zebra markings.
 for(const[x1,z1,x2,z2]of[[2,-48,3,-64],[-55,-16,-72,-17],[35,-7,55,-6],[-17,40,-19,57]])segment(x1,z1,x2,z2,.16,.255,.02,white);
 const tactile=mat('#c5ac55');for(const[x,z,a]of[[-40,-12,0],[-19,-37,.25],[20,-19,1.6],[-31,18,.45],[16,21,.2]]){const q=local(g,x,0,z,a);box(q,0,.3,0,5,.06,.6,tactile);}

 const labels=new Map();
 function label(x,y,z,w,h,text,bg='#182027',fg='#f3f0e5',rotation=0){const key=[text,bg,fg].join('|');let m=labels.get(key);if(!m){const c=document.createElement('canvas');c.width=1024;c.height=256;const a=c.getContext('2d');a.fillStyle=bg;a.fillRect(0,0,c.width,c.height);a.fillStyle=fg;a.textAlign='center';a.textBaseline='middle';a.font=`700 ${text.length>14?68:100}px Arial,"Hiragino Kaku Gothic ProN",sans-serif`;a.fillText(text,512,139,970);const t=texture(c);m=new T.MeshStandardMaterial({map:t,emissiveMap:t,emissive:'#fff',emissiveIntensity:.35,roughness:.35});emissives.push({m,intensity:.45});labels.set(key,m);}const sg=local(g,x,y,z,rotation);plane(sg,0,0,0,w,h,m);return sg;}
 const screenTextures=[];
 for(let variant=0;variant<3;variant++){
  const c=document.createElement('canvas');c.width=1024;c.height=768;const a=c.getContext('2d');
  if(variant===0){
   const sky=a.createLinearGradient(0,0,0,768);sky.addColorStop(0,'#091c37');sky.addColorStop(.6,'#346a83');sky.addColorStop(1,'#da9470');a.fillStyle=sky;a.fillRect(0,0,1024,768);
   for(let range=0;range<4;range++){a.fillStyle=['#587386','#395b70','#234459','#142f45'][range];a.beginPath();a.moveTo(0,768);for(let x=0;x<=1024;x+=24)a.lineTo(x,490+range*50-Math.sin(x*.005+range)*75-Math.sin(x*.012+range*3)*26);a.lineTo(1024,768);a.fill();}
   a.fillStyle='#f2f1eb';a.font='700 75px Georgia';a.fillText('SONY',52,104);a.font='500 56px Arial';a.fillText('BRAVIA',56,171);a.strokeStyle='#d2e3e3';a.lineWidth=4;a.strokeRect(214,250,738,417);a.fillStyle='#ffffffaa';a.font='20px Arial';a.fillText('SONY BRAVIA',777,646);
  }else if(variant===1){
   a.fillStyle='#10151b';a.fillRect(0,0,1024,768);
   for(let f=0;f<9;f++){const x=100+(f*193)%860,y=95+(f*137)%540,r=35+(f%4)*13;for(let petal=0;petal<8;petal++){a.save();a.translate(x,y);a.rotate(petal*PI/4);const p=a.createLinearGradient(0,-r*2,0,0);p.addColorStop(0,f%2?'#e65d36':'#ebadb0');p.addColorStop(1,'#ab293a');a.fillStyle=p;a.beginPath();a.ellipse(0,-r,r*.54,r,0,0,PI*2);a.fill();a.restore();}a.fillStyle='#e8b568';a.beginPath();a.arc(x,y,r*.27,0,PI*2);a.fill();}
   a.fillStyle='#f4eee4';a.textAlign='center';a.font='700 52px Arial';a.fillText('SHIBUYA109',512,704);
  }else{
   a.fillStyle='#bd2332';a.fillRect(0,0,1024,768);a.fillStyle='#f6f2e9';a.font='italic 700 154px Georgia';a.textAlign='center';a.fillText('Coca-Cola',512,356);a.strokeStyle='#f6f2e9';a.lineWidth=30;a.beginPath();a.moveTo(-30,545);a.bezierCurveTo(230,680,450,410,1050,490);a.stroke();a.font='28px Arial';a.fillText('コカ・コーラ',512,414);
  }
  for(let yy=0;yy<768;yy+=5){a.fillStyle='#00000012';a.fillRect(0,yy,1024,1);}screenTextures.push(texture(c));
 }
 const screens=[];
 function screen(x,y,z,w,h,rotation=0,variant=0){const sg=local(g,x,y,z,rotation);box(sg,0,0,-.18,w+.45,h+.45,.32,dark);const m=new T.MeshStandardMaterial({map:screenTextures[variant],emissiveMap:screenTextures[variant],emissive:'#fff',emissiveIntensity:1,roughness:.3});emissives.push({m,intensity:1.05});plane(sg,0,0,.02,w,h,m);screens.push({m,variant});}
 // QFRONT and MAGNET frame the north side, as in the reference views.
 label(-22,49.2,-38.7,29,6.2,'QFRONT','#e2e6e1','#152024');
 screen(-22,28,-38.6,28,25,0,0);
 label(-22,6.5,-38.4,29,2.2,'SHIBUYA TSUTAYA','#202b2d');
 label(-22,10.6,-38.3,27,1.6,'STARBUCKS','#173b30');
 for(let x=-36;x<-5;x+=2.5)box(g,x,27,-38.2,.12,40,.2,metal);
 screen(-3.3,29,-55.5,18,24,PI/2,1);
 label(29,40.8,-20.3,24,4.2,'MAGNET','#171d24','#f0e6dd');
 screen(29,25,-20.25,23,17,0,2);
 label(29,14.2,-20.15,23,1.8,'Coca-Cola','#c93132');
 label(-166,47.5,4.1,25,7,'SHIBUYA 109','#ebe8de','#cf373e');
 label(-61,7,-1.8,25,3.2,"L’OCCITANE",'#d6a433','#252820',PI);
 label(-61,20,-1.75,24,9,'渋谷 / SHIBUYA','#0d556d','#f4f1df',PI);
 // A dense layer of signs occupies the existing frontages, not detached cubes in the road.
 function frontage(b){let best=null,score=Infinity;for(const poly of b.polygons){const yMin=Math.min(...poly.map(p=>p[1])),yMax=Math.max(...poly.map(p=>p[1]));if(yMax-yMin<7)continue;let edge=null,length=0;for(let i=0;i<poly.length;i++)for(let j=i+1;j<poly.length;j++){if(Math.abs(poly[i][1]-poly[j][1])>1)continue;const dx=poly[j][0]-poly[i][0],dz=poly[j][2]-poly[i][2],l=Math.hypot(dx,dz);if(l>length){edge=[dx,dz];length=l;}}if(!edge||length<5)continue;const x=poly.reduce((s,p)=>s+p[0],0)/poly.length,z=poly.reduce((s,p)=>s+p[2],0)/poly.length;let nx=edge[1]/length,nz=-edge[0]/length;if(nx*(-2.5-x)+nz*(-9.11-z)<0){nx=-nx;nz=-nz;}const d=Math.hypot(x+2.5,z+9.11);if(d<score){score=d;best={x,z,nx,nz,width:length,yMin,yMax,angle:Math.atan2(nx,nz)};}}return best;}
 const signBuildings=shibuyaBuildings.map((b,i)=>({b,i,d:Math.hypot(...b.center)})).filter(v=>v.d>45&&v.d<165&&![30,36,96,97].includes(v.i));
 signBuildings.slice(0,38).forEach(({b},j)=>{const f=frontage(b);if(!f)return;label(f.x+f.nx*.2,Math.min(f.yMax-2,f.yMin+5+j%4*4),f.z+f.nz*.2,Math.min(f.width*.85,15),Math.min(4.5,(f.yMax-f.yMin)*.22),['カラオケ','珈琲','薬','居酒屋','書店','美容室','ゲーム','食堂'][j%8],['#8e303a','#176475','#24614e','#ebe3c4'][j%4],j%4===3?'#262d33':'#f3ebd5',f.angle);});
 for(const[index,variant]of[[78,1],[75,2],[93,0],[137,1],[55,0]]){const f=frontage(shibuyaBuildings[index]);if(!f)continue;screen(f.x+f.nx*.4,f.yMin+(f.yMax-f.yMin)*.6,f.z+f.nz*.4,Math.min(23,f.width*.92),Math.min(17,(f.yMax-f.yMin)*.62),f.angle,variant);}
 // Shibuya station and the contemporary Scramble Square tower close the south/east horizon.
 label(36,6,88,35,3,'JR 渋谷駅 / SHIBUYA','#254d3a','#f3eee1',PI);
 building(g,105,152,46,42,229,2,false);
 box(g,105,12,152,57,24,54,mat('#636f73'));for(let x=80;x<=130;x+=5)box(g,x,12,124.8,.35,22,.4,metal);
 box(g,105,230,152,49,1.2,45,roofSurface);box(g,105,231,152,39,.7,35,mat('#6b8a83'));
 for(const side of[-1,1]){box(g,105+side*23.8,232,152,.18,2.2,44,glass);box(g,105,232,152+side*21.8,48,2.2,.18,glass);}
 label(105,216,130.8,36,3,'SHIBUYA SKY','#24383f');
 for(let y=12;y<225;y+=5.5){box(g,105,y,130.8,46,.18,.25,metal);box(g,81.8,y,152,.25,.18,42,metal);}
 for(const[x1,z1,x2,z2]of shibuyaRails){segment(x1,z1,x2,z2,4.8,7.8,.8,railBed);for(const side of[-1,1])segment(x1,z1,x2,z2,.13,8.3,.15,metal,side*.8);}
 // Street-level furniture around Hachiko plaza, and queues waiting at the approaches.
 cylinder(g,8,.58,37,1.4,1.15,mat('#787c71'));const bronze=mat('#465448',.45,.35);box(g,8,1.7,37,1.5,1.1,.65,bronze);const head=mesh(new T.SphereGeometry(.42,10,8),bronze,g,8.63,2.45,37);head.scale.y=1.15;for(const side of[-1,1])box(g,7.5+side*.45,1.1,37,.15,.9,.2,bronze);
 for(const[x,z]of[[-40,5],[-36,20],[23,18],[14,43]])tree(g,x,z,.35);
 const signalLamps=[];for(const[x,z,a]of[[-38,-25,.1],[-18,-36,0],[20,-20,1.5],[-32,18,2.8],[18,22,3]]){const sg=local(g,x,0,z,a);cylinder(sg,0,2.5,0,.075,5,metal);box(sg,1.3,4.8,0,2.8,.12,.13,metal);box(sg,2.2,4.5,0,.8,.65,.35,dark);const m=new T.MeshBasicMaterial({color:'#6ddfa6'});mesh(new T.SphereGeometry(.12,8,6),m,sg,2.2,4.5,.2);signalLamps.push(m);}
 function vehicle(x,z,angle,color,bus=false){const v=local(g,x,0,z,angle),w=bus?2.4:1.75,l=bus?8:4.2;box(v,0,.8,0,w,1.1,l,mat(color,.3,.25));box(v,0,1.6,-.1,w*.88,.65,l*.58,glass);for(const side of[-1,1])for(const end of[-1,1])cylinder(v,side*w*.5,.48,end*l*.32,.27,.35,dark);box(v,0,.9,l/2+.03,w*.8,.2,.08,lit('#e9ddb4',.9));if(!bus)box(v,0,2.02,0,.55,.2,.36,lit('#d9ce9f',.4));}
 vehicle(4.5,-55,0,'#47745c');vehicle(6,-65,0,'#e8e4d5');vehicle(-64,-16,PI/2,'#373f46');vehicle(42,-7,-PI/2,'#d9d3be',true);
 return {paths:rawPaths.map(([x1,z1,x2,z2,w])=>[x1+2.5,z1+9.11,x2+2.5,z2+9.11,w]),buildings:shibuyaBuildings.length,triangles,animate(time){const phase=Math.floor(time/12)%3;screens.forEach(({m,variant})=>{const t=screenTextures[(phase+variant)%3];if(m.map!==t){m.map=m.emissiveMap=t;}});signalLamps.forEach(m=>m.color.set('#6ddfa6'));}};
}
