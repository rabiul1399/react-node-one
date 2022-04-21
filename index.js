const express = require('express');
var cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/' ,(req,res) =>{
 res.send('gupm paite che ki koron jai Hello World ,over smart part of port point ,sehaeri khaite hobe ot ,dond mone dile na')
});
  const users =[
      {id:1, name:'Sabana' , email: 'sabana@gmail.com', phone:'01797728298'},
      {id:2, name:'Sabnor' , email: 'sabnur@gmail.com', phone:'01792263298'},
      {id:3, name:'Sabanadd' , email: 'sabana@gmail.com', phone:'01797728298'},
      {id:4, name:'Sabanaaa' , email: 'sabanaaa@gmail.com', phone:'01797228298'},
      {id:5, name:'Sabanaee' , email: 'sabanaee@gmail.com', phone:'01786728298'},
      {id:6, name:'Sabanaew' , email: 'dd@gmail.com', phone:'01793628298'},
      {id:7, name:'Sabanass' , email: 'sabanass@gmail.com', phone:'01797727898'},
      {id:8, name:'Sabiha' , email: 'sassass@gmail.com', phone:'017933727898'},
      {id:9, name:'Rabiya' ,email: 'ssrabiya99@gmail.com',phone: '017957181332'}
  ]

app.get('/users', (req,res) =>{
if(req.query.name){
    const search = req.query.name.toLowerCase();
    const metched = users.filter(user=>user.name.toLowerCase().includes(search));
    
    res.send(metched)
}
else{
    res.send(users)
}

});




app.get('/user/:id' ,(req,res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users[id];
    const use = users.find(u =>u.id == id)
    res.send(use);
});



app.post('/user',(req,res) =>{
    console.log('request', req.body);
    const user = req.body;
     user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

// app.get('/food' ,(req,res) =>{
//     const fall = { fall:'mango appel' ,Kola:'banana'}
// });

// app.get('/furts' , (req,res) =>{
//     const banana = ['apple', 'luico', 'komla', 'tomato', 'papay']
//     res.send(banana);
// })



app.listen(port,()=>{
console.log('Example node app ' , port)
});