const express = require("express");
const router = express.Router();

const Employee = require("../../Model/Employee");

router.post("/create", (req, res) => {
  Employee.findOne({ email: req.body.email }).then((employee) => {
    if (employee) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newEmployee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        picture: req.body.picture,
        salary: req.body.salary,
        position: req.body.position,
      });
      newEmployee
        .save()
        .then((data) => {
          console.log(data);
          res.send("Employee Added");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

module.exports = router;
