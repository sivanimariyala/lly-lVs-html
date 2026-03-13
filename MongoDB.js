const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect("mongoose://127.0.0.1:/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Student = mongoose.model("student", studentSchema);

app.post("/add", async (req,res) => {
    const student = new student(req.body);
    await student.save();
    res.send("Student Added");
});

app.get("/students", async (req,res) => {
    const data = await Student.find();
    res.json(data);
});

app.put("/update/:id", async (req,res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send("Student Updated");
});

app.delete("/delete/:id", async (req,res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student Deleted");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
