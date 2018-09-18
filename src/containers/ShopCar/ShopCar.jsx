import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd-mobile'

import './ShopCar.styl'
 class ShopCar extends React.Component{
  static propTypes={
    history:PropTypes.object.isRequired,
    location:PropTypes.object.isRequired,
    match:PropTypes.object.isRequired
  }
  render(){
    const {history} = this.props
    return(
      <div className="shopCar-wrap">
        <header>
          <div>
            <span className="title">购物车</span>
          </div>
          <span className="right-title">领劵</span>
        </header>
        <div className="container">
          <div className="text">
            <p className="item_icon">
              <i className="iconfont icon-yuanquan"></i><span>30天无忧退货</span>
            </p>
            <p className="item_icon">
              <i className="iconfont icon-yuanquan"></i><span>48小时快速退款</span>
            </p>
            <p className="item_icon">
              <i className="iconfont icon-yuanquan"></i><span>满88元免邮费</span>
            </p>
          </div>
          <div className="item_icon car">
            <i className="iconfont icon-gouwuche"></i>
          </div>
          <div className="content ">
            <span>去添加点什么吧</span>
          </div>
          <div className="loginIn">
            <Button  onClick={()=>history.replace('/person')} className="but">登录</Button>
        </div>
      </div>

  </div>
    )
  }
}

export default ShopCar



