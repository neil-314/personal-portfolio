import {existsSync,mkdirSync,readdirSync,copyFileSync,readFileSync,rmSync} from 'node:fs';
import {resolve,join} from 'node:path';
const input=existsSync('dist/index.html')?resolve('dist'):process.cwd();
const output=resolve(process.env.PUBLIC_OUTPUT||'.vercel-public');
if(output===input||output===process.cwd())throw new Error('Output must be separate from source');
rmSync(output,{recursive:true,force:true});mkdirSync(output,{recursive:true});
function copy(file){const to=join(output,file);mkdirSync(resolve(to,'..'),{recursive:true});copyFileSync(join(input,file),to);}
for(const file of ['index.html','base.css','stations.css','stations.js','content.js','scene360.css','scene360.js','tokyo-city.js','tokyo-shibuya.js','shibuya-data.js','tokyo-ads.js','fuji-outlook.js','favicon.svg'])copy(file);
for(const file of readdirSync(join(input,'assets')).filter(f=>f.endsWith('.webp')))copy('assets/'+file);
for(const {key} of JSON.parse(readFileSync(join(input,'assets/views/credits.json'),'utf8')))copy('assets/views/'+key+'.webp');
copy('assets/views/credits.json');
for(const file of readdirSync(join(input,'assets/certificates')).filter(f=>f.endsWith('.pdf')))copy('assets/certificates/'+file);
for(const file of ['three.module.js','three.core.js','THREE-LICENSE.txt','TOKYO-LICENSE.txt','SHIBUYA-DATA.txt'])copy('vendor/'+file);
console.log('Public website prepared in '+output);
