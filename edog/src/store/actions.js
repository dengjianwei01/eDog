import {
  RECEIVE_MENUS,
  RECEIVE_CAROUSEL,
  RECEIVE_NAVS,
  RECEIVE_DISCOUNTS,
  RECEIVE_CLASSIFY,
  RECEIVE_BRAND,
  RECEIVE_ALL_BRAND,
  SET_MASK_F
} from './types'


import {getAxios} from '../api'
export default {
  getMenus ({commit}) {
    getAxios('menus').then(response=>{
      const result = response.data
      const menus = result.data
      if(result.code==0){
        commit(RECEIVE_MENUS,{menus})
      }
    })
  },
  getCarousel({commit}){
    getAxios('datas').then(response=>{
      const result = response.data
      const carousel = result.data[0].value
      if(result.code==0) {
        commit(RECEIVE_CAROUSEL,{carousel})
      }
    })
  },
  getNav({commit}){
    getAxios('datas').then(response=>{
      const result = response.data
      const navs = result.data[2].menus
      if(result.code==0) {
        commit(RECEIVE_NAVS,{navs})
      }
    })
  },
  getDiscounts({commit}){
    getAxios('discounts').then(response=>{
      const result = response.data

      const discounts = result.data[0]

      if(result.code==0) {
        commit(RECEIVE_DISCOUNTS,{discounts})
      }
    })
  },
  getClassify({commit},num){
    getAxios('classify').then(response=>{
      const result = response.data
      const classify = result.data
      console.log(result)
      if(result.code==0) {
        commit(RECEIVE_CLASSIFY,{classify})
      }
    })
  },
  getBrand({commit}){
    getAxios('brand').then(response=>{
      const result = response.data
      const brand = result.data
      if(result.code==0) {
        commit(RECEIVE_BRAND,{brand})
      }
    })
  },
  getAllBrand({commit}){
    getAxios('allbrand').then(response=>{
      const result = response.data
      const allBrand = result.data

      if(result.code==0){
        commit(RECEIVE_ALL_BRAND,{allBrand})
      }
    })
  },
  setMask({commit}){
    commit(SET_MASK_F)
  }
}
