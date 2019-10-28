// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamps = (req, res) => {
  return res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.getBootcamp = (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `Show bootcamp ${req.params.id}` });
};

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.createBootcamp = (req, res) => {
  return res.status(201).json({ success: true, msg: `Created bootcamp` });
};

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.updateBootcamp = (req, res) => {
  return res
    .status(200)
    .json({ success: true, msg: `Updated bootcamp ${req.params.id}` });
};

// @desc        get all bootcamps
// @route       GET /api/v1/bootcamps
// @access      public
exports.deleteBootcamp = (req, res) => {
  return res
    .status(201)
    .json({ success: true, msg: `Bootcamp ${req.params.id} deleted` });
};
