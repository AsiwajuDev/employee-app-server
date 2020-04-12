const express = require("express");
const router = express.Router();

const Employee = require("../../Model/Employee");

router.delete("/delete", (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send("Employee Fired");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
