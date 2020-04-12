const express = require("express");
const router = express.Router();

const Employee = require("../../Model/Employee");

router.delete("/delete", (req, res) => {
  Employee.findByIdAndRemove(req.body.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
