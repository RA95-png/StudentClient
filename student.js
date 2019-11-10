let express = require('express');
let app = express();
let port = 3000;

let pagesize=5;
let students= [];
let contant='students.json';
let fs = require('fs');

fs.readFile(contant, 'utf-8', (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        students =data.split('\n'); 
      console.log(data);
      JSON.parse(data)
    }
})

app.get("/students", (req, res) =>{
    let page1=req.query.page;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

  start=(page1-1)*pagesize;
  end=start+ pagesize;
  res.send(students.slice(start,end));
  });
  
 app.listen(port, () => console.log(`Example app listening on port ${port}!`));
 