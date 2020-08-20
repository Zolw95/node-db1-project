const express = require("express");
const router = express.Router();
const accountsDb = require("./accountsDb");
module.exports = router;

router.get("/accounts", async (req, res) => {
  try {
    const accounts = await accountsDb.get();

    res.status(201).json(accounts);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/accounts/:id", async (req, res) => {
  try {
    const accountsById = await accountsDb.getById(req.params.id);

    res.status(201).json(accountsById);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.post("/accounts", async (req, res) => {
  try {
    const newUser = await accountsDb.addAccount({
      name: req.body.name,
      budget: req.body.budget,
    });

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.put("/accounts/:id", async (req, res) => {
  try {
    const updatedUser = await accountsDb.update(req.params.id, req.body);

    res.status(201).json({ msg: updatedUser + " User Updated" });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

router.delete("/accounts/:id", async (req, res) => {
  try {
    const removedUser = await accountsDb.remove(req.params.id);

    res.status(201).json(`${removedUser} User Removed`);
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});
