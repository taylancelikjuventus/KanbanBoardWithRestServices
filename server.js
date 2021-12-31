
/*
 * To get post request as raw json data
 * 
 * add following
 * 
 * app.use{bodyParser.json()};
 * 
 * For getting post request parameters from encoded url
 * 
 * add following
 * 
 * app.use(bodyParser.urlencoded({ extended: true }));
 */

var express = require("./express_modules/node_modules/express");
var session = require("./express_modules/node_modules/express-session");
var cookieParser = require("./express_modules/node_modules/cookie-parser");
var bodyParser = require("./express_modules/node_modules/body-parser");
var ejs = require("./express_modules/node_modules/ejs");




var app = express();

//with engine 'ejs' we can use expression language like we do in PHP
//or Java.
app.engine('html', require('./express_modules/node_modules/ejs').renderFile); 

//settings
//use followings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use( cookieParser() ) ;
app.use( session( {secret : "my secret key"} ) );


//search static files under following folders
app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.static("public/js"));
app.use(express.static("public/components"));





//include database.js
var db = require("./database");

var path = __dirname+"/public/";  


//create application/x-www-form-urlencoded parser
var bodyParser = require("./express_modules/node_modules/body-parser");

//get body as json : send json data via postman's body - raw - application/json
app.use(express.static("public"));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', ejs.renderFile);  //map ejs template engine to html files
app.set('view engine', 'html');     //set "view engine" to html


/////////////////////PAGES////////////////////////////
app.get("/" , async (req,res)=>{
   
    const message = "Welcome" ;
    res.render("index",{message:message });
});

app.get("/kanban" , async (req,res)=>{
   
    const userid = req.query.userid;
    const username = req.query.username;
    res.render("kanbanBoard" , { userid:userid ,username:username } );
});


//////////////////////USERS///////////////////////////////
//get all users  OK
app.get("/users" , async (req,res)=>{
    
    const results = await db.promise().query("select * from users");
    console.log(results[0]);
    
    res.status(200).send(results[0]);
});

//get user by id  OK
app.get("/users/:id", async (req,res)=>{
   
   const uid = req.params.id;
   const results = await db.promise().query("select * from users WHERE userid='"+uid+"'");
    
   res.status(200).send(results[0]); 
});


//add new user  OK
app.post("/users/add/" , (req, res) => {
    
    const {username} = req.body; 

    if (username) {
        //    console.log(username,pasword);
        try {
            db.promise().query("insert into users(username) VALUES('"+username+"')");

            res.status(201).send({msg: 'user created...'});
        } catch (error) {
            console.log(error);
        }
    }
});

//update user   OK
app.put("/users/update/" , (req, res) => {
    
    const {userid,username} = req.body; 

    if (userid && username) {
        //    console.log(username,pasword);
        try {
            db.promise().query("update users SET username='"+username+"' WHERE userid='"+userid+"'");

            res.status(200).send({msg: 'user updated...'});
        } catch (error) {
            console.log(error);
        }
    }
});

//delete user  OK
app.delete("/users/delete" , (req, res) => {
    
    const {userid} = req.body; 

    if (userid ) {
        //    console.log(username,pasword);
        try {
            db.promise().query("delete from users WHERE userid='"+userid+"'");

            res.send({msg: 'user deleted...'});
        } catch (error) {
            console.log(error);
        }
    }
});


//////////////////////TASKS////////////////////////

//get all tasks   OK 
app.get("/tasks" , async (req,res)=>{
    
    const results = await db.promise().query("select * from tasks");
    console.log(results[0]);
    
    res.status(200).send(results[0]);
});

//get task by user ID OK
app.get("/tasks/:userid", async (req,res)=>{
   
   const uid = req.params.userid;
   const results = await db.promise().query("select * from tasks WHERE userid='"+uid+"'");
    
   //res.status(200).send(results[0][0]); //tek satır döner
   res.status(200).send(results[0]); //tek satır döner
});

//add new task for specific user OK
app.post("/tasks/add/" , (req, res) => {
    
    const {taskname,tasktext,taskstatus,deadline,userid} = req.body; 

    if ( taskname && tasktext && taskstatus && deadline && userid ) {
        //    console.log(username,pasword);
        try {
            db.promise().query("insert into tasks(taskname,tasktext,taskstatus,deadline,userid) VALUES('"+taskname+"','"+tasktext+"','"+taskstatus+"','"+ deadline +"','"+userid +"')");

            res.status(201).send({msg: 'task created...'});
        } catch (error) {
            console.log(error);
        }
    }
});

//update task  OK
app.put("/tasks/update/:id" , (req, res) => { 
    
    const taskid = req.params.id;
    
    const {taskname,tasktext,taskstatus,deadline,userid} = req.body; 

    if (taskid && taskname && tasktext && taskstatus && deadline && userid ) {
        //    console.log(username,pasword);
        try {
            db.promise().query("update tasks SET taskname='"+taskname+"',tasktext='"+tasktext+"',taskstatus='"+taskstatus+"',deadline='"+deadline+"',userid='"+userid+"' WHERE taskid='"+taskid+"'");

            res.status(200).send({msg: 'task updated...'});
        } catch (error) {
            console.log(error);
        }
    }
});

//update task status OK
app.put("/tasks/status/update/:id" , (req, res) => {
    
    const taskid = req.params.id;
    
    const {newtaskstatus} = req.body; 

    if (taskid && newtaskstatus ) {
        //    console.log(username,pasword);
        try {
            db.promise().query("update tasks SET taskstatus='"+newtaskstatus+"' WHERE taskid='"+taskid+"'");

            res.status(200).send({msg: 'taskstatus updated...'});
        } catch (error) {
            console.log(error);
        }
    }
});



//delete task by id    OK
app.delete("/tasks/delete/" , (req, res) => {
    
    const {taskid} = req.body; 

    if (taskid) {
        //    console.log(username,pasword);
        try {
            db.promise().query("delete from tasks WHERE taskid='"+taskid+"'");

            res.status(200).send({msg: 'task deleted...'});
        } catch (error) {
            console.log(error);
        }
    }
});



///////////////////////////////////////////////////

//create server 
var server = app.listen("8005", function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("app listening at http://%s:%s", host, port);

});
