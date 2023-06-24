const { v4: uuid } = require("uuid");

const Model = require("./model");

const pEvent = async (req, res) => {
  try {
    const { description, start_time, end_time, location } = req.body;

    const { image } = req.files;

    const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;
    image.mv(`${process.cwd()}/uploads/${imageName}`);

    await Model.postEvent(
      description,
      start_time,
      end_time,
      location,
      imageName
    );

    res.status(201).json({ message: "Success created Events" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const gEvent = async (_, res) => {
  try {
    let result = await Model.getEvent();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  gEvent,
  pEvent
}