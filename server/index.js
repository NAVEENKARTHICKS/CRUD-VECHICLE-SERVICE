const express=require('express');
const fileupload=require('express-fileupload');
const cors=require('cors');
const bodyparser=require('body-parser');
const mycon=require('mysql');
const { response } = require('express');

const app=express();
app.use(express.json());
app.use(fileupload());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

let c=mycon.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"Naveen@95",
    database:"vechiclesmanagement"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log(" Database successfully connected");
    }
})

app.post('/create',(request,response)=>{
let  {firstname,lastname,email,dob,mobileno,vechicleno,model,about}=request.body
let sql = 'insert into servicedetails(firstname,lastname,email,dob,mobileno,vechicleno,model,about) values(?,?,?,?,?,?,?,?)'

    c.query(sql,[firstname,lastname,email,dob,mobileno,vechicleno,model,about],(error,result)=>{
        if(error){
            let s={"status":"error"}
            response.send(s);
        }
        else{
        let s={"status":"Data successfully inserted"}
        response.send(s);
        }
    })
})

app.get('/personalinfo',(request,response)=>{
    let sql = 'select * from servicedetails';
    c.query(sql,(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})




app.post('/delete',(request,response)=>{
    let id = request.body.id;
    let sql = 'delete from servicedetails where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            let b= {"status":"error"};
            response.send(b);
        }
        else{
            let b= {"status":"success"};
            response.send(b);
        }
    })
})

app.get('/update/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from servicedetails where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.put('/updatedata/:id',(request,response)=>{
    let {id} = request.params;
    let {firstname,lastname,email,dob,mobileno,vechicleno,model,about} = request.body;
    let sql = 'update servicedetails set firstname=?,lastname=?,email=?,dob=?,mobileno=?,vechicleno=?,model=?,about=? where id=?';
    c.query(sql,[firstname,lastname,email,dob,mobileno,vechicleno,model,about,id],(error,result)=>{
        if(error){
            let b = {"status":"error"};
            response.send(b);
        }
        else{
            let b = {"status":"success"};
            response.send(b);
        }
    })
})


app.listen(3002,()=>{
    console.log('server running port:3002');
})