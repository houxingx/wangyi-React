import {combineReducers} from 'redux'
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

const  init_headerList=[ ]    //头部列表
const  init_focusList=[]      //首页活动列表
const  init_tagList=[]         //首页品牌列表
const  init_newitemlists1=[]   //新品首发,
const  init_newitemlists2=[]   //人气推荐
const  init_flashSaleIndexVO=[]//限时购
const  init_topicLists= []     //专题精选
const  init_cateLists= []      //居家及以下所有
const  init_categorys= []      //分类页数据
const  init_banners= []        //识物banner
const  init_columns= []        //banner下面的channel
const  init_recommend= {}      //为你推荐
const  init_tenfifteen=[]      //十点一刻
const  init_findMores= []      //更多精选

const  init_user={}             //用户信息



//头部列表
function headerList(state=init_headerList,action) {
  switch (action.type){
    case RECEIVE_HEADER:
      const headerList=action.data
      return headerList
    default:
      return state
  }
}

//首页活动列表
function focusList(state=init_focusList,action) {
  switch (action.type){
    case RECEIVE_FOCUSLIST:
      const focusList=action.data
      return focusList
    default:
      return state
  }
}
//首页品牌列表
function tagList(state=init_tagList,action) {
  switch (action.type){
    case RECEIVE_TAGLIST:
      const tagList=action.data
      return tagList
    default:
      return state
  }
}

//新品首发,
function newitemlists1(state=init_newitemlists1,action) {
  switch (action.type){
    case RECEIVE_NEWITEMLISTS:
      const newitemlists1=action.data
      return newitemlists1
    default:
      return state
  }
}

//人气推荐
function newitemlists2(state=init_newitemlists2,action) {
  switch (action.type){
    case RECEIVE_EWITEMLISTS2:
      const newitemlists2=action.data
      return newitemlists2
    default:
      return state
  }
}

//限时购
function flashSaleIndexVO(state=init_flashSaleIndexVO,action) {
  switch (action.type){
    case RECEIVE_REQFLASHSALEINDEXVO:
      const flashSaleIndexVO=action.data
      return flashSaleIndexVO
    default:
      return state
  }
}

 //专题精选
function topicLists(state=init_topicLists,action) {
  switch (action.type){
    case RECEIVE_REQTOPICLISTS:
      const topicLists=action.data
      return topicLists
    default:
      return state
  }
}

 //居家及以下所有
function cateLists(state=init_cateLists,action) {
  switch (action.type){
    case RECEIVE_TOPICLISTS:
      const cateLists=action.data
      return cateLists
    default:
      return state
  }
}
 //分类页数据
function categorys(state=init_categorys,action) {
  switch (action.type){
    case RECEIVE_CATEGORYS:
      const categorys=action.data
      return categorys
    default:
      return state
  }
}
 //识物banner
function banners(state=init_banners,action) {
  switch (action.type){
    case RECEIVE_BANNERS:
      const banners=action.data
      return banners
    default:
      return state
  }
}
 //banner下面的channel
function columns(state=init_columns,action) {
  switch (action.type){
    case RECEIVE_COLUMN:
      const columns=action.data
      return columns
    default:
      return state
  }
}
 //为你推荐
function recommend(state=init_recommend,action) {
  switch (action.type){
    case RECEIVE_RECOMMEND:
      const recommend=action.data
      return recommend
    default:
      return state
  }
}
 //十点一刻
function tenfifteen(state=init_tenfifteen,action) {
  switch (action.type){
    case RECEIVE_TENFIFTEEN:
      const tenfifteen=action.data
      return tenfifteen
    default:
      return state
  }
}
 //更多精选
function findMores(state=init_findMores,action) {
  switch (action.type){
    case RECEIVE_GETFINDMORE:
      const findMores=action.data
      return findMores
    default:
      return state
  }
}


//用户信息处理
function user(state=init_user,action) {
  switch (action.type){
    case RECEIVE_USER:
      const user=action.data
      return user
    case RESET_USER:
      return {}
    default:
      return state
  }
}



export default combineReducers({
  headerList,
  focusList,
  tagList,
  newitemlists1,
  newitemlists2,
  flashSaleIndexVO,
  topicLists,
  cateLists,
  categorys,
  banners,
  columns,
  recommend,
  tenfifteen,
  findMores,
  user
})

