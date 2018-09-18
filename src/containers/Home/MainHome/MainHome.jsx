import React from 'react'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'

import './MainHome.styl'

import TitleScroll from '../../../components/TitleScroll/TitleScroll'
import NewRelease from '../../../components/NewRelease/NewRelease'
import NewRelease2 from '../../../components/NewRelease/NewRelease2'
import DirectSuply from '../../../components/DirectSuply/DirectSuply'
import GoodShowList from '../../../components/GoodShowList/GoodeShowList'

class MainHome extends React.Component {

  componentDidUpdate(){
    if(this.MainBS){
      this.MainBS.destroy()
    }
    this.MainBS = new BScroll('.Maincontainer',{
      click:true,
      probeType:0,
      scrollX:true
    })
  }

  componentWillReceiveProps(){
    this._residueTime()
  }


  /*计时器倒计时*/
  _residueTime = () =>{
    let time = this.props.flashSaleIndexVO.remainTime
    if(!time){
      return
    }
    if(this.interverId){
      return
    }
    this.interverId = setInterval(() => {
      time--
      /*将得到时间转换为页面显示数字*/
      let hour = Math.floor(time /3600)
      let min =  Math.floor((time - hour*3600) /60)
      let sec =  time - hour*3600 -min*60
      this.setState({
        hour,min,sec
      })
      // 当计时达到最小值时, 清除定时器
      if (time <= 0) {
        time = 0
        this.interverId=null
      }
    }, 1000)
  }

  //消除卸载后，异步执行仍在继续的这种情况 还有一种方法：设置一个falg
  componentWillUnmount (){
    this.setState =(state,callback) =>{
      return
    }
  }
  state = {
    hour:0,
    min:0,
    sec:0,
    DirectSuplyArr:['产品制造商直供','专题精选'],
  }

  render() {
    const {hour,min,sec,DirectSuplyArr} = this.state
    const {cateLists,flashSaleIndexVO} = this.props
    if(flashSaleIndexVO.showFlash){
      return (
        <div className="Maincontainer">

          <div className="second-container">

            <TitleScroll />
            <DirectSuply content={DirectSuplyArr[0]}/>

            <NewRelease />
            <NewRelease2 />

            <div className="count_down_good" >
              <div className="detail_info">
                <div className="title">严选限时购</div>
                <div className="time">
                  <span className="hour">{hour}</span>
                  <span className="colon">:</span>
                  <span className="mins">{min}</span>
                  <span className="colon">:</span>
                  <span className="secs">{sec}</span>
                </div>
                <div className="next_good">
                  <span>下一场</span>
                  <span>2:00</span>
                  <span>开始</span>
                </div>
              </div>
              <img src={flashSaleIndexVO.primaryPicUrl} alt=''/>
            </div>

            <a className="welfare_team">
              <img src={flashSaleIndexVO.saleIndexVO.picUrl} alt=''/>
            </a>



            <DirectSuply content={DirectSuplyArr[1]}/>

            {
              cateLists.map((item,index) =>
                <GoodShowList   key={index} isMinor={false} num={index} />
              )
            }

          </div>

        </div>
      )
    }else{
      return (<div className="Maincontainer">

        <div className="second-container">
          <TitleScroll />
          <DirectSuply content={DirectSuplyArr[0]}/>
          <NewRelease />
          <NewRelease2 />
          <DirectSuply content={DirectSuplyArr[1]}/>
        </div>

      </div>)
    }

  }
}

export default connect(
  state =>({cateLists:state.cateLists,flashSaleIndexVO:state.flashSaleIndexVO}),
  null
)(MainHome)