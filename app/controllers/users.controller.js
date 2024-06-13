const User = require("../models/users.model.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    name: req.body.name,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
    createdAt: req.body.createdAt,
    birthday: req.body.birthday
  });

  User.create(user, (err, data) => {
    if (err)
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

exports.signup = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const user = new User({
    role: req.body.role || 'user',
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    createdAt: new Date(),
    birthday: req.body.birthday
  });

  User.create(user, (err, data) => {
    if (err)
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the user."
      });
    else res.send(data);
  });
};

exports.login = (req, res) => {

  User.findByEmail(req.body.email, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        return res.status(404).send({
          message: `Not found User with email ${req.body.email}.`
        });
      } else {
        return res.status(500).send({
          message: "Error retrieving User with email " + req.body.email
        });
      }
    } else {
      const passwordIsValid = bcrypt.compareSync(req.body.password, data.password);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: data.id }, '1a2z3e4r5t6y7u8i9o0p', {
        expiresIn: 86400
      });

      res.status(200).send({
        id: data.id,
        name: data.name,
        email: data.email,
        accessToken: token
      });
    }
  });
};

exports.logout = (req, res) => {
  const token = req.headers["x-access-token"];
  
  if (!token) {
    return res.status(400).send({ message: "No token provided." });
  }
    delete req.headers["x-access-token"];
  
  if (req.headers["x-access-token"]) {
    return res.status(500).send({ message: "Failed to delete token." });
  }
  res.status(200).send({ message: "Logout successful." });
};

exports.getUserProfile = (req, res) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "no token provided!" });
  }

  jwt.verify(token, '1a2z3e4r5t6y7u8i9o0p', (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }

    User.findById(decoded.id, (err, user) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({ message: "User not found" });
        } else {
          res.status(500).send({ message: "Error retrieving user." });
        }
      } else {
        res.status(200).send(user);
      }
    });
  });
};

exports.findAll = (req, res) => {
  const role = req.query.role;

  User.getAll(role, (err, data) => {
    if (err)
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        return res.status(500).send({
          message: "Error retrieving User with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  User.updateById(
    req.params.id,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          return res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          return res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  User.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        return res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        return res.status(500).send({
          message: "Could not delete User with id " + req.params.id
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      return res.status(500).send({
        message: err.message || "Some error occurred while removing all users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
