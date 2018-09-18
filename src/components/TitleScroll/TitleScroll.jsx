import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Swiper from 'swiper'

import {receive_header} from '../../redux/actions'

import './TitleScroll.styl'

class TitleScroll extends React.Component {
  static propTypes = {
    focusList:PropTypes.array.isRequired,
    receive_header:PropTypes.func.isRequired
  }
  componentWillMount(){
    this.props.receive_header()
  }

  componentDidUpdate(){
    if(this.titleSC){
      this.titleSC.destroy()
    }
    this.titleSC=new Swiper('.swiper-container', {
      centeredSlides: true,  //居中
      autoplay: {     //自动轮播
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {   //小圆点
        el: '.swiper-pagination'
      },
      loop: true   //无线循环
    });
  }

  render() {
    const {focusList} = this.props
    return (
      <div className="allScroll">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              focusList.map((item,index) =>
                <div className="swiper-slide" key={index}>
                  <img src={item.picUrl} />
                </div>
              )
            }
            <div className="swiper-pagination"></div>
          </div>
      </div>

    <div className="span_container">
      <span><i className="iconfont icon-right-1"></i>
        网易自营品牌</span>
      <span><i className="iconfont icon-right-1"></i>
        30天无忧退货</span>
      <span><i className="iconfont icon-right-1"></i>
        48小时快速退货</span>
    </div>
      <div className="gray"></div>
  </div>
    )
  }
}

export default connect(
  state =>({focusList:state.focusList}),
  {receive_header}
)(TitleScroll)