const fs=require('fs')
const https=require('https')
const puppeteer=require('puppeteer')


function down(src, i){
    https.get(src, function(res){
        res.setEncoding('binary')
        var file=''
        var name=src.slice(-4)
        res.on('data', function(chunk){
            file+=chunk
        })
        res.on('end', function(){
            fs.writeFile("./node/xh/imgs/" +i+name, file, "binary", function(err){
                if(err){
                    return console.log(err);
                }
                console.log(`down ${src} success`);
            });
        })
    })
}
const spider= async ()=>{
    const browser= await puppeteer.launch()
    const page= await browser.newPage()
    await page.goto('https://image.baidu.com')
}