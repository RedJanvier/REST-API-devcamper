const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/ErrorResponse');

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    return res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

// @desc        get a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found of id ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

// @desc        create a bootcamp
// @route       POST /api/v1/bootcamps/
// @access      public
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    return res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

// @desc        Update a bootcamp
// @route       PATCH /api/v1/bootcamps/:id
// @access      public
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found of id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    next(err);
  }
};

// @desc        Delete a bootcamps
// @route       DELETE /api/v1/bootcamps/:id
// @access      public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found of id ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
