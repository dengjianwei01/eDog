var express = require('express');
var router = express.Router();

var loginServer = require('../login/login_server')
loginServer(router)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//加载json数据
var apiData = require('../mock/data.json')
var apidiscounts = require('../mock/discounts.json')
var apiclassify = require('../mock/classify.json')
var apibrand = require('../mock/brand.json')
var apiallbrand = require('../mock/allbrand.json')
console.log('1111111111'+apidiscounts)
//注册路由
router.get('/menus', function (req, res) {
  res.json({
    code: 0,   //0代表正确数据
    data: apiData.menus
  })
})
router.get('/datas', function (req, res) {
  res.json({
    code: 0,
    data: apiData.datas
  })
})
router.get('/discounts', function (req, res) {
  res.json({
    code: 0,
    data: apidiscounts.data
  })
})

router.get('/classify', function (req, res) {
  res.json({
    code: 0,
    data: apiclassify.data
  })
})

router.get('/brand', function (req, res) {
  res.json({
    code: 0,
    data: apibrand.brand
  })
})
router.get('/allbrand', function (req, res) {
  res.json({
    code: 0,
    data: apiallbrand.brand
  })
})

module.exports = router;
