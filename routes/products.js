var express = require('express');
var router = express.Router();

var products = [
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 1',
    subTitle: '描述 1'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 2',
    subTitle: '描述 2'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 3',
    subTitle: '描述 3'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 3',
    subTitle: '描述 3'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 4',
    subTitle: '描述 4'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 5',
    subTitle: '描述 5'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 6',
    subTitle: '描述 6'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 7',
    subTitle: '描述 7'
  },
  {
    image: './images/advertisement-image-01.jpg',
    title: '商品 8',
    subTitle: '描述 8'
  },
  {
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

module.exports = router;