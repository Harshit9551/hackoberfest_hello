const fs =require("fs");
function callback(err,data)
{
    if(!err)
    {
        console.log(data);
    }
}
fs.readFile('q.html','utf-8',callback)