var mysql = require('mysql') ;
var util = require('util')
const connection = mysql.createConnection({
    host: 'localhost',

port: 3306,
user: 'root',
password: "",
database: "Departments "
});

connection.connect(function(err) {
    if(err){
        console.error("error connecting:" + err.stack);
        return;
    }
    console.llog("conneected as id" + connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;