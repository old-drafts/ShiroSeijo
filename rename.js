const fs=require('fs');
const dir='./';
let cnt=0;
function getStatus(n,number){
    return (Array(n).join('0')+number).slice(-n);
}
fs.readdir(dir,(err,files)=>{
    for(let i in files)
        if(!files[i].includes('.js'))
            fs.renameSync(files[i],`S_${getStatus(4,++cnt)}.jpg`);
});