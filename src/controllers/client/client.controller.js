const { v4: uuid } = require("uuid");
const Model = require("./model");

const postClient = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    await Model.clientPost(username, email, phone, imageName);

    res.status(201).json({ message: "Success created Clients" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClient = async (_, res) => {
  try {
    let result = await Model.clientGet();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getClient,
  postClient,
}