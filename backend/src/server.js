import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001")
});
//mongodb+srv://bintangkus308:ayX3WfKdpY68cSGh@cluster0.otu0uqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0