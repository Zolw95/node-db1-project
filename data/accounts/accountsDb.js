const db = require("../dbConfig");

module.exports = {
  get,
  getById,
  addAccount,
  update,
  remove,
};

function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts").where({ id }).first();
}

function addAccount(user) {
  return db("accounts")
    .insert(user)
    .then((ids) => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("accounts").where({ id }).update(changes);
}

function remove(id) {
  return db("accounts").where("id", id).del();
}
