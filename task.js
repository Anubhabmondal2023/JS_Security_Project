
const express=require("express");
const app=express();

app.use(express.json());

let users=[
    {id: 1, name: "A", mobileno: 8978735498, address: "ABC", age: 20},
    {id: 2, name: "B", mobileno: 7873547890, address: "BCD", age: 25},
];

app.post("/users", (req,res)=>{
    const newUser={
        id: users.length+1,
        name: req.body.name,
        mobileno: req.body.mobileno,
        address: req.body.address,
        age: req.body.age
    };

    users.push(newUser);
    res.send(newUser);
});

app.get("/users", (req,res)=>{
    res.send(users);
});

app.get("/users/:id", (req,res)=>{
    const user=users.find(u=>u.id==req.params.id);

    if(!user) return res.status(404).send("User not found");

    res.send(user)
});

app.put("/users/:id", (req,res)=>{
    const user=users.find(u=>u.id==req.params.id);

    if(!user) return res.status(404).send("User not found");

    user.name=req.body.name;
    user.mobileno=req.body.mobileno;
    user.address=req.body.address;
    user.age=req.body.age;

    res.send(user);
});

app.delete("/users/:id", (req,res)=>{
    users=users.filter(u=>u.id!=req.params.id);
    res.send("User deleted");
});

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});