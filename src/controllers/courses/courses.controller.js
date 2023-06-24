const { v4: uuid } = require("uuid");

const Model = require("./model");

const addCourse = async (req, res) => {
  try {
    const { price, job, description, trainer_id } = req.body;

    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    await Model.cPost(price, job, description, imageName, trainer_id);

    res.status(201).json({ message: "Success created Courses" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const courseGet = async (_, res) => {
  try {
    const result = await Model.cGet();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  courseGet,
  addCourse,
}
