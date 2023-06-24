const { v4: uuid } = require("uuid");
const Model = require("./model");

const pTrainer = async (req, res) => {
  try {
    const { name, position, description } = req.body;
    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    await Model.pUsers(name, position, description, imageName);

    res.status(201).json({ message: "Success created trainer" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const gTrainer = async (_, res) => {
  try {
    let result = await Model.gUsers();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  gTrainer,
  pTrainer
};
