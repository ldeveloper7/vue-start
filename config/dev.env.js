'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  AppName: '"Blavity"',
  LiveAPI: '"https://api.blavity.io/"',
  LocalAPI: '"http://192.168.200.12:3100/v1/"',
  cloudinaryImageUrl: '"https://res.cloudinary.com/blavity/image/upload/c_crop,g_center,w_auto,q_auto:best,g_south_east,x_0/"',
})
