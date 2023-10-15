const models = require("../models");
const Validator = require('fastest-validator')
function save(req, res) {
  const post = {
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.image_url,
    categoryId: req.body.category_id,
    price: req.body.price,
    address: req.body.address,
    userId: 1,
    userName: req.body.user_name,
    userEmail: req.body.user_email
  };

  const schema = {
    title: {type:"string", optional: false, max: "100"},
    content: {type:"string", optional: false, max: "500"},
    categoryId: {type:"number", optional: false},
    price: {type:"number", optional: false},
    address: {type:"string", optional: false, max: "500"},
    userName: {type:"string", optional: false, max: "100"},
    userEmail: {type:"string", optional: false, max: "100"},
  }

  const v = new Validator();
  const validationResponse = v.validate(post, schema);

  if(validationResponse !== true){
    return res.status(400).json({
        message: "validation failed",
        errors: validationResponse
    });
  }

  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Post created unsuccessfully",
        error: error,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Post not found",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
}

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: error
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;
  const userId = 1;

  models.Post.destroy({
    where: { id: id, userId: userId },
  })
    .then((result) => {
      res.status(200).json({
        message: "Deleted successfuly",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  save: save,
  show: show,
  index: index,
  destroy: destroy,
};
