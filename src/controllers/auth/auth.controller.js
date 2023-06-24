const jwt = require("../../utils/jwt");
const Model = require("./model");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Model.blogGet();

    const findUser = user.find(
      (el) => el.username == username && el.password == password
    );

    if (!findUser)
      return res
        .status(404)
        .json({ message: "Incorrect username or password" });

    const token = jwt.sign({ id: findUser.id });

    res.status(200).json({ message: "Success", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {login};