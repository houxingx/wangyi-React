import ajax from './ajax'

let BASE ='/api'

//首页导航接口请求函数
export const reqHeadCateList = () => ajax("/headCateList")

//活动列表接口请求函数
export const reqFocusList = () => ajax("/focusList")

//首页内容区列表请求函数
export const reqTagList = () => ajax("/tagList")

//首页新品首发请求函数
export const reqnewitemlists = () => ajax("/newItemList")

//首页新品首发2请求函数
export const reqnewitemlists2= () => ajax("/popularItemList")

//首页限时购请求函数
export const reqflashSaleIndexVO= () => ajax("/flashSaleIndexVO")

//首页专题精选请求函数
export const reqtopicLists= () => ajax("/topicList")

//首页居家好物请求函数
export const reqcateList= () => ajax("/cateList")
//分类请求函数
export const reqcategoryData= () => ajax("/categoryData")

//识物请求函数
export const reqbanners= () => ajax("/banner")


//识物请求函数
export const reqcolumn= () => ajax("/column")

//识物 为你推荐 函数
export const reqrecommend= () => ajax("/recommend")

//十点一刻
export const reqtenfifteen= () => ajax("/tenfifteen")

//十点一刻
export const reqfindMore= () => ajax("/findMore")

//mock模拟短信登录
export const reqyzm= () => ajax("/yzm")


/**
 * 获取注册短信验证码
 */
export const reqSendReCode = phone => ajax(BASE+'/sendcode_reg', {phone})

/*手机注册*/
export const reqRegPhone = ({phone,code,ppwd}) => ajax(BASE+'/register_phone', {phone,code,ppwd},'POST')

/*邮箱注册*/
export const reqRegEmail = ({email,epwd}) => ajax(BASE+'/register_email', {email,epwd},'POST')


/*
* 获取登录短信验证码
* */
export const reqSendLoCode = phone => ajax(BASE+'/sendcode_log', {phone})

/**
 * 手机验证码登录
 */
export const reqPhoNoteLogin = ({phone, code}) => ajax(BASE+'/login_note', {phone, code}, 'POST')

/*
* 手机号密码登录
* */
export const reqPhoPwdLogin = ({phone, ppwd}) => ajax(BASE+'/login_ppwd', {phone, ppwd}, 'POST')

/*邮箱登录*/
export const reqEmiPwdLogin = ({email, epwd}) => ajax(BASE+'/login_epwd', {email, epwd}, 'POST')



/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax(BASE+'/userinfo')

/*
退出登陆
 */
export const reqLogout = () => ajax(BASE+'/logout')


