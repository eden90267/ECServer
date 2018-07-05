var express = require('express');
var router = express.Router();

var products = [
  {
    id: 1,
    image: './images/advertisement-image-01.jpg',
    title: '商品 1',
    subTitle: '描述 1'
  },
  {
    id: 2,
    image: './images/advertisement-image-01.jpg',
    title: '商品 2',
    subTitle: '描述 2'
  },
  {
    id: 3,
    image: './images/advertisement-image-01.jpg',
    title: '商品 3',
    subTitle: '描述 3'
  },
  {
    id: 4,
    image: './images/advertisement-image-01.jpg',
    title: '商品 3',
    subTitle: '描述 3'
  },
  {
    id: 5,
    image: './images/advertisement-image-01.jpg',
    title: '商品 4',
    subTitle: '描述 4'
  },
  {
    id: 6,
    image: './images/advertisement-image-01.jpg',
    title: '商品 5',
    subTitle: '描述 5'
  },
  {
    id: 7,
    image: './images/advertisement-image-01.jpg',
    title: '商品 6',
    subTitle: '描述 6'
  },
  {
    id: 8,
    image: './images/advertisement-image-01.jpg',
    title: '商品 7',
    subTitle: '描述 7'
  },
  {
    id: 9,
    image: './images/advertisement-image-01.jpg',
    title: '商品 8',
    subTitle: '描述 8'
  },
  {
    id: 10,
    image: './images/advertisement-image-01.jpg',
    title: '商品 9',
    subTitle: '描述 9'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 10',
    subTitle: '描述 10'
  }
];

router.get('/', function (req, res, next) {
  res.send(JSON.stringify(products));
});

router.post('/', function (req, res, next) {
  products = products.concat(req.body);
  res.send(JSON.stringify(products));
});

router.put('/:id', function (req, res, next) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(req.params.id)) {
      products[i] = req.body;
    }
  }

  res.send(JSON.stringify(products));
});

router.delete('/:id', function (req, res, next) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(req.params.id)) {
      products.splice(i, 1);
    }
  }

  res.send('Success');
});

module.exports = router;