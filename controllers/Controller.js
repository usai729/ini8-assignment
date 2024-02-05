const bcrypt = require("bcrypt");
const sql = require("../config");

exports.createUser = async (req, res) => {
  try {
    const { name, email, dob, password } = req.body;

    await sql.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (_, data) => {
        if (data?.length > 0) {
          return res.json({ msg: "err/user-exists" });
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        await sql.query(
          "INSERT INTO users(name, email, password, dob) VALUES(?, ?, ?, ?)",
          [name, email, hashedPassword, dob]
        );

        return res.json({ msg: "success/user-created" });
      }
    );
  } catch (error) {
    console.error("Error creating user:", error);

    return res.status(500).json({ msg: "err/internal-server-error" });
  }
};

exports.removeUser = async (req, res) => {
  let id = req.params.id;

  try {
    await sql.query(`SELECT * FROM users WHERE id=?`, [id], async (_, data) => {
      if (data?.length == 0) {
        return res.json({ msg: "err/user-does-not-exist" });
      } else {
        await sql.query("DELETE FROM users WHERE id=?", [id]);

        return res.json({ msg: "success/user-deleted" });
      }
    });
  } catch (e) {
    console.log(e);

    return res.json({ msg: "err/internal-server-error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    await sql.query(`SELECT * FROM users`, (_, data) => {
      return res.json({ msg: "success/fetched-all-users", data: data });
    });
  } catch (e) {
    console.log(e);

    return res.json({ msg: "err/internal-server-error" });
  }
};

exports.getOne = async (req, res) => {
  let id = req.params.id;

  try {
    await sql.query(
      `SELECT * FROM users WHERE id=? LIMIT 1`,
      [id],
      (_, data) => {
        return res.json({ msg: "success/fetched-all-users", data: data });
      }
    );
  } catch (e) {
    console.log(e);

    return res.json({ msg: "err/internal-server-error" });
  }
};

//this can be programmed to update all the fields including password.
//The password update would require us to verify the password with bcrypt and generate another hash if verification is valid
exports.updateUserEmail = async (req, res) => {
  let { email, id } = req.body;

  if (!email || !id) {
    return res.json({ msg: "err/invalid-data" });
  }

  try {
    await sql.query(
      `SELECT * FROM users WHERE email=?`,
      [email],
      async (err, exists) => {
        if (exists?.length > 0) {
          return res.json({ msg: "err/email-exists" });
        } else {
          await sql.query(
            `SELECT * FROM users WHERE id=?`,
            [id],
            async (_, data) => {
              if (data?.length == 0) {
                return res.json({ msg: "err/user-does-not-exist" });
              }
              await sql.query(
                `UPDATE users SET email=? WHERE id=?`,
                [email, id],
                (err, data) => {
                  if (!err) {
                    return res.json({ msg: "sucess/user-updated" });
                  }
                }
              );
            }
          );
        }
      }
    );
  } catch (e) {
    console.log(e);

    return res.json({ msg: "err/internal-server-error" });
  }
};
