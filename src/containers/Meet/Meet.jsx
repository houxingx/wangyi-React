import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Swiper from 'swiper'

import {receive_banners,
  receive_column,
  receive_recommend,
  receive_tenfifteen,
  receive_getfindmore} from '../../redux/actions'

import  MeetHeader from '../../components/MeetHeader/MeetHeader'
import RecommendYou from '../../components/Recommend-you/RecommendYou'
import './Meet.styl'
class Meet extends React.Component{

  static propTypes={
    banners:PropTypes.array.isRequired,
    columns:PropTypes.array.isRequired,
    recommend:PropTypes.object.isRequired,
    tenfifteen:PropTypes.array.isRequired,
    findMores:PropTypes.array.isRequired,
    receive_banners:PropTypes.func.isRequired,
    receive_column:PropTypes.func.isRequired,
    receive_recommend:PropTypes.func.isRequired,
    receive_tenfifteen:PropTypes.func.isRequired,
    receive_getfindmore:PropTypes.func.isRequired
  }
  componentWillMount(){
    this.props.receive_banners()
    this.props.receive_column()
    this.props.receive_recommend()
    this.props.receive_tenfifteen()
    this.props.receive_getfindmore()
  }


  componentDidUpdate(){
    /*首个轮播图*/
     if(this.firstSW){
       this.firstSW.slideTo(0,0)
       this.firstSW.destroy()
     }
    this.firstSW = new Swiper('.swiper1', {
      spaceBetween: 10,
      centeredSlides: true,  //居中
      loop: true ,  //无线循环
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    })



    if(this.textSW){
      this.textSW.slideTo(0,0)
      this.textSW.destroy()
    }
    /*文章轮播图*/
    this.textSW=new Swiper('.swiper2',{
      spaceBetween: 6,
      slidesPerView: 'auto',
    })



    if(this.tenSW){
      this.tenSW.slideTo(0,0)
      this.tenSW.destroy()
    }
      /*十点一刻*/
      this.tenSW=new Swiper('.swiper3',{
        spaceBetween: 10,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
        },
      })
  }

  componentDidMount(){
  }

  render(){
    const {banners,columns,tenfifteen,findMores} = this.props
    return(
      <div className="meet-container">
        <MeetHeader/>
        <div className="main-all">
          <div className="m-banner">
            <div className="swiper-container swiper1">
              <div className="swiper-wrapper" ref={div =>this.wrap1=div}>
                {
                  banners.map((item,index) =>
                    <a className="swiper-slide"  key={index}>
                      <img src={item.picUrl} />
                      <div className="content">
                        <div className="sub-title">——{item.subTitle}——</div>
                        <div className="title">{item.title}</div>
                        <div className="dec">{item.desc}</div>
                      </div>
                    </a>
                  )
                }
            </div>
          </div>
        </div>

        <div className="explore-swiper">
          <div className="swiper-container swiper2">
            <div className="swiper-wrapper">
              {
                columns.map((item,index) =>
                  <a className="swiper-slide"  key={index}>
                    <img src={item.picUrl} />
                      <div className="content">
                        <div className="sub-title">{item.articleCount}</div>
                        <div className="title">{item.title}</div>
                      </div>
                  </a>
                )
              }
            </div>
          </div>
        </div>

        <RecommendYou  num={2} />

        <div className="explore-ten-hour">
          <div className="inner">
            <div className="title">
              十点一刻
            </div>
            <div className="swiper-container swiper3">
              <div className="swiper-wrapper">
                {
                  tenfifteen.map((item,index) =>
                    <a className="swiper-slide" key={index}>
                      <div>——今日话题——</div>
                      <div>{item.title}</div>
                      <div>{item.desc}</div>
                      <div>
                        {
                          item.participantAvatar.map((src,num) =>
                            <img src={src}  key={num} />
                          )
                        }
                        {item.participantNum}参与话题</div>
                    </a>
                  )
                }
                <a className="swiper-slide item_icon">
                  查看全部话题
                  <i className="iconfont icon-iconset0424"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <RecommendYou  num={1} />

        <div className="explore-look">
          <div className="title">
            严选look
          </div>
          <a className="content">
            <div className="img-wrap">
              <img src={require("../../common/images/meetbook.jpg")}/>
            </div>
            <div className="topic-info">
              <div><img src={require("../../common/images/meetFood.jpg")} />&nbsp;&nbsp;&nbsp;s****u</div>
              <div className="speak">加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</div>
            </div>
          </a>
        </div>


        {findMores.length>0 ?
          <div className="explore-more" >
            <div className="title">
              更多精彩
            </div>
            {
              findMores.map((item,index) =>
                <a className="more-wrap"  key={index}>
                  <div className="img-wrap">
                    <img src={item.scenePicUrl} />
                  </div>
                  <div className="dec">
                    <span>{item.subTitle}</span>
                  </div>
                </a>
              )
            }
          </div>:null}

        </div>
  </div>
    )
  }
}

export default connect(
  state =>({banners:state.banners,
            columns:state.columns,
            recommend:state.recommend,
            tenfifteen:state.tenfifteen,
            findMores:state.findMores,}),
  { receive_banners,
    receive_column,
    receive_recommend,
    receive_tenfifteen,
    receive_getfindmore}
)(Meet)