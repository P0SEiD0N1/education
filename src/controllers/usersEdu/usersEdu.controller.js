const { v4: uuid } = require("uuid");
const Model = require("./model");

const addUserEdu = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    const a = await Model.pUserEdu(name, phone, email, imageName);
    console.log(a);

    res.status(201).json({ message: "Successfully on creating free_course member" });
  } catch (error) {
    res.status(500).json({ message: "Internal server Error", error: error.message });
  }
};

module.exports= {addUserEdu};