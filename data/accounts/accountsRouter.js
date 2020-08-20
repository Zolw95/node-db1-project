const express = require("express");
// const knex = require("knex");
const router = express.Router();
const accountsDb = require("./accountsDb");
const db = require("../dbConfig");
const { del } = require("../dbConfig");
module.exports = router;

router.get("/accounts", async (req, res) => {
  try {
    const accounts = await db("accounts");

    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/accounts/:id", async (req, res) => {
  try {
    const accountsById = await db("accounts")
      .where("id", req.params.id)
      .first();

    res.status(200).json(accountsById);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/accounts", async (req, res) => {
  try {
    const newUser = await db("accounts").insert({
      name: req.body.name,
      budget: req.body.budget,
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.put("/accounts/:id", async (req, res) => {
  try {
    const updatedUser = await db("accounts")
      .where("id", req.params.id)
      .update(req.body);

    res.status(200).json({ msg: updatedUser + " User Updated" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/accounts/:id", async (req, res) => {
  try {
    const removedUser = await db("accounts").where("id", req.params.id).del();

    res.status(200).json(`${removedUser} User Removed`);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});
