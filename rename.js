const fs=require('fs');
const dir='./';
let result={},cnt=0;
fs.readdir(dir,(err,files)=>{
    files.forEach(file=>{
        if(!file.includes('.js'))
            result[file]=++cnt;
    });
    for(let i in result){
        fs.renameSync(i,`${result[i]}.jpg`);
    }
});