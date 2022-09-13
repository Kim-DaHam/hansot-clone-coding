const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
var cors = require('cors');
app.use(cors());

var conn;

app.listen(8080, function () {
    console.log('listening on port 8080')
});

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT
oracledb.autoCommit = true;

oracledb.getConnection({
    user: 'system',
    password: '1234',
    hose: 'localhost',
    database: 'xe'
}, function(err, con) {
    if(err){
        console.log('접속 실패!', err);
        return;
    }
    console.log('접속 성공!!');
    conn = con;
});


app.get("/menu", function(request, response) {
    conn.execute("select * from menu", function(err, result, fields){
        if(err){
            console.log("조회 실패");
        }
        //console.log(result);
        //response.send(result.rows);
        const data = JSON.stringify(result.rows);
        console.log(data);
        response.send(data);
    })
})

app.get("/category", function(request, response) {
    conn.execute("select * from category", function(err, result, fields){
        if(err){
            console.log("조회 실패");
        }
        //console.log(result);
        response.send(result.rows);
        //console.log(result.rows);
    })
})


app.use(express.static(path.join(__dirname, 'react-app/build')));

app.get('/', function (req, res) {
    req.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});




app.get('*', function (req, res) {
    req.sendFile(path.join(__dirname, '/react-app/build/index.html'));
});