// 爬取内容

const https = require('https')    // https用这个
const fs = require('fs');
const cheerio = require('cheerio');  // 解析爬取的html

function reptileMd(){
  https.get('https://github.com/chenx18/vueNode/blob/master/NotesDocument/javaScripts/04-Object.md', (res)=> {
    let data = '';
    res.on('data', (_d) => {
      data +=_d;
    })
    res.on('end',() => {
      console.log(data);
      // 通过 load 方法把 HTML 代码转换成一个 jQuery 对象
      const $ = cheerio.load(data);
      // 获取json
      // let html = $('.Box-body table').text().trim();
      // fs.writeFile("trees.json", html, 'utf-8',(err)=>{
      //   console.log(err)
      //   return;
      // })

      // 获取markdown
      let html = $('.Box-body article').text().trim();
      console.log(html);

      // 写入文件
      // fs.writeFile("04-Object.html", html, 'utf-8',(err)=>{
      //   console.log(err)
      //   return;
      // })
    })
  }).on("error", (err) => {
    console.log(err);
  });
}
reptileMd();
