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

export default {
  [RECEIVE_MENUS] (state,{menus}) {
    state.menus = menus
  },
  [RECEIVE_CAROUSEL] (state,{carousel}) {
    state.carousel = carousel
  },
  [RECEIVE_NAVS] (state,{navs}) {
    state.navs = navs
  },
  [RECEIVE_DISCOUNTS] (state,{discounts}){
    state.discounts = discounts
  },
  [RECEIVE_CLASSIFY] (state,{classify}){
    state.classify = classify
  },
  [RECEIVE_BRAND] (state,{brand}) {
    state.brand = brand
  },
  [RECEIVE_ALL_BRAND] (state,{allBrand}) {
    state.allBrand = allBrand
  },
  [SET_MASK_F] (state) {
    state.isMask = !state.isMask
    console.log(state.isMask)
  }
}



