const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const applicantRoutes = require("./routes/applicantRoutes/applicantRoutes")
const loanApplicationRoutes = require("./routes/loanApplicationRoutes/loanApplicationRoutes")

//usages
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

//using routes
app.use("/api", applicantRoutes)
app.use("/api/loan",loanApplicationRoutes)

// // TOKEN AUTHENTICATION- ALL THE ROUTES WRITTEN BELOW THIS WILL NEED TOKEN TO BE SENT in request headers
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

mongoose
  .connect("mongodb://127.0.0.1:27017/udaan", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Server has started.......");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
