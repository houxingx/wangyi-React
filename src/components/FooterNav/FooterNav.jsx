import React from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

import './FooterNav.styl'

 class FooterNav extends React.Component{
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  render(){
    const {history,location} = this.props
    return(
      <div>

        <footer className="footer-nav-footer ">

          <span className={`guide_item ${location.pathname.split('/')[1]==='home' ? 'on':null}`} onClick={()=>{history.replace('/home')}}>
            <span className="item_icon">
              <i className="iconfont icon-shouye"></i>
            </span>
            <span>首页</span>
          </span>



          <span className={`guide_item ${location.pathname==='/meet' ?'on' : null}`} onClick={()=>{history.replace('/meet')}}>
            <span className="item_icon">
              <i className="iconfont icon-iconset0489"></i>
            </span>
            <span>识物</span>
        </span>



          <span className={`guide_item ${location.pathname.split('/')[1]===`classify` ?'on' : null}`} onClick={()=>{history.replace('/classify')}}>
            <span className="item_icon">
              <i className="iconfont icon-iconyihuifu-"></i>
            </span>
            <span>分类</span>
          </span>



          <span className={`guide_item ${location.pathname==='/shopcar'?'on' : null}`} onClick={()=>{history.replace('/shopcar')}} >
            <span className="item_icon">
              <i className="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
          </span>



          <span className={`guide_item ${location.pathname==='/person'?'on' : null}`} onClick={()=>{history.replace('/person')}}>
          <span className="item_icon">
            <i className="iconfont icon-gerenzhongxin"></i>
          </span>
          <span>个人</span>
        </span>

        </footer>
      </div>


    )
  }
}
export default withRouter(FooterNav)
