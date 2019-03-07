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
                console.log('下载女朋友成功');
            });
        })
    })
}
const spider= async ()=>{
    const browser= await puppeteer.launch()
    const page= await browser.newPage()
    await page.goto('https://image.baidu.com')
    await page.focus('#kw')
    await page.keyboard.sendCharacter('新垣结衣')
    await page.click('.s_search')
    page.on('load', async ()=>{
        // await autoScroll(page)
        const srcs=await page.evaluate(()=>{
            const images = document.querySelectorAll("img.main_img")
            return Array.prototype.map.call(images, img=>img.src)
        })
        srcs.forEach(async (src,i)=>{
            await down(src, i)
        })
        await browser.close()
    })
}
spider()