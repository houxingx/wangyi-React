import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_EWITEMLISTS2,
  RECEIVE_REQFLASHSALEINDEXVO,
  RECEIVE_REQTOPICLISTS,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATEGORYS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_GETFINDMORE,
  RECEIVE_USER,
  RESET_USER
} from './action-types'

import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqnewitemlists,
  reqnewitemlists2,
  reqflashSaleIndexVO,
  reqtopicLists,
  reqcateList,
  reqcategoryData,
  reqbanners,
  reqcolumn,
  reqrecommend,
  reqtenfifteen,
  reqfindMore,
  reqUser,
  reqLogout
} from '../api/index'

//获取头部导航
export const receive_header1 = data =>({type:RECEIVE_HEADER,data})
//首页活动
export const receive_focuslist1 = data =>({type:RECEIVE_FOCUSLIST,data})
//首页品牌
export const receive_taglist1 = data =>({type:RECEIVE_TAGLIST,data})
//首页新品
export const receive_newitemlists1 = data =>({type:RECEIVE_NEWITEMLISTS,data})
//首页人气
export const receive_ewitemlists21 = data =>({type:RECEIVE_EWITEMLISTS2,data})
//首页限时
export const receive_reqflashsaleindexvo1 = data =>({type:RECEIVE_REQFLASHSALEINDEXVO,data})
//专题精选
export const receive_reqtopiclists1 = data =>({type:RECEIVE_REQTOPICLISTS,data})

// 异步居家好物action
export const receive_topiclists1 = data =>({type:RECEIVE_TOPICLISTS,data})
//异步分类action
export const receive_categorys1 = data =>({type:RECEIVE_CATEGORYS,data})

//识物action
export const receive_banners1 = data =>({type:RECEIVE_BANNERS,data})
//识物下边action
export const receive_column1 = data =>({type:RECEIVE_COLUMN,data})
//识物为你推荐action
export const receive_recommend1 = data =>({type:RECEIVE_RECOMMEND,data})
//十点一刻
export const receive_tenfifteen1 = data =>({type:RECEIVE_TENFIFTEEN,data})
//更多精彩
export const receive_getfindmore1 = data =>({type:RECEIVE_GETFINDMORE,data})


//保存user同步到action    这里的data是user
export const saveUser = (data) =>({type:RECEIVE_USER,data})
// 异步获取用户信息
export const receive_user1 = data =>({type:RECEIVE_USER,data})
// 异步登出
export const reset_user1 = () =>({type:RESET_USER})



//异步方法

//获取头部导航
export const receive_header = () => {
  return async dispatch => {
    let result = await reqHeadCateList()
    if(result.code === 0){
      const headerList = result.data
      dispatch(receive_header1(headerList))
    }
  }
}

//首页活动
export const receive_focuslist = () => {
  return async dispatch => {
    let result = await reqFocusList()
    if(result.code === 0){
      const focusList = result.data
      dispatch(receive_focuslist1(focusList))
    }
  }
}
//首页品牌
export const receive_taglist = () => {
  return async dispatch => {
    let result = await reqTagList()
    if(result.code === 0){
      const tagList = result.data
      dispatch(receive_taglist1(tagList))
    }
  }
}

//首页新品
export const receive_newitemlists = () => {
  return async dispatch => {
    let result = await reqnewitemlists()
    if(result.code === 0){
      const newitemlists1 = result.data
      dispatch(receive_newitemlists1(newitemlists1))
    }
  }
}

//首页人气
export const receive_ewitemlists2 = () => {
  return async dispatch => {
    let result = await reqnewitemlists2()
    if(result.code === 0){
      const newitemlists2 = result.data
      dispatch(receive_ewitemlists21(newitemlists2))
    }
  }
}

//首页限时
export const receive_reqflashsaleindexvo = () => {
  return async dispatch => {
    let result = await reqflashSaleIndexVO()
    if(result.code === 0){
      const flashSaleIndexVO = result.data
      dispatch(receive_reqflashsaleindexvo1(flashSaleIndexVO))
    }
  }
}

//专题精选
export const receive_reqtopiclists = () => {
  return async dispatch => {
    let result = await reqtopicLists()
    if(result.code === 0){
      const topicLists = result.data
      dispatch(receive_reqtopiclists1(topicLists))
    }
  }
}


// 异步居家好物action
export const receive_topiclists = () => {
  return async dispatch => {
    let result = await reqcateList()
    if(result.code === 0){
      const cateList = result.data
      dispatch(receive_topiclists1(cateList))
    }
  }
}

//异步分类action
export const receive_categorys = () => {
  return async dispatch => {
    let result = await reqcategoryData()
    if(result.code === 0){
      const categorys = result.data
      dispatch(receive_categorys1(categorys))
    }
  }
}


//识物action
export const receive_banners = () => {
  return async dispatch => {
    let result = await reqbanners()
    if(result.code === 0){
      const banners = result.data
      dispatch(receive_banners1(banners))
    }
  }
}

//识物下边action
export const receive_column = () => {
  return async dispatch => {
    let result = await reqcolumn()
    if(result.code === 0){
      const column = result.data
      dispatch(receive_column1(column))
    }
  }
}

//识物为你推荐action
export const receive_recommend = () => {
  return async dispatch => {
    let result = await reqrecommend()
    if(result.code === 0){
      const recommend = result.data
      dispatch(receive_recommend1(recommend))
    }
  }
}

//十点一刻
export const receive_tenfifteen = () => {
  return async dispatch => {
    let result = await reqtenfifteen()
    if(result.code === 0){
      const tenfifteen = result.data
      dispatch(receive_tenfifteen1(tenfifteen))
    }
  }
}

//更多精彩
export const receive_getfindmore = () => {
  return async dispatch => {
    let result = await reqfindMore()
    if(result.code === 0){
      const findMore = result.data
      dispatch(receive_getfindmore1(findMore))
    }
  }
}

// 异步获取用户信息
export const receive_user = () => {
  return async dispatch => {
    let result = await reqUser()
    if(result.code === 0){
      const user = result.data
      dispatch(receive_user1(user))
    }
  }
}

// 异步登出
export const reset_user = () => {
  return async dispatch => {
    let result = await reqLogout()
    if(result.code === 0){
      dispatch(reset_user1())
    }
  }
}






