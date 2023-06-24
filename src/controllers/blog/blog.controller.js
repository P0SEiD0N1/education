const { v4: uuid } = require("uuid");
const Model = require("./model");

const addCourse = async (req, res) => {
  try {
    const { price, job, description } = req.body;

    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    await Model.blopPost(price, job, description, imageName);

    res.status(201).json({ message: "Success created Courses" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoursesRoute = async (_, res) => {
    try {
      let result = await Model.blogGet();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports = {
    getCoursesRoute,
    addCourse
  }