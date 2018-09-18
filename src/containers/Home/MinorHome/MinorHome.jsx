import React from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import PubSub from 'pubsub-js'

import './MinorHome.styl'
import GoodShowList from '../../../components/GoodShowList/GoodeShowList'

class MinorHome extends React.Component {
  static propTypes = {
    cateLists:PropTypes.array.isRequired,
    location:PropTypes.object.isRequired
  }

  componentDidMount(){
    PubSub.subscribe('changeIndex',(msg,data)=>{
      this.setState({
        activeIndex:data-1
      })
    })
  }

  componentDidUpdate(){
    if(this.MinorBS){
      this.MinorBS.destroy()
    }
    this.MinorBS=new BScroll('.Minor-home-container',{
      click:true,
      probeType:0,
      scrollX:true
    })
  }
  //消除卸载后，异步执行仍在继续的这种情况 还有一种方法：设置一个falg
  componentWillUnmount (){
    this.setState =(state,callback) =>{
      return
    }
  }

  /*读取缓存中的index*/
  render() {
    let thisIndex=parseInt(localStorage.getItem('activeIndex'))-1
    thisIndex =thisIndex <=0 ? 0:thisIndex
    const {cateLists} = this.props
    return (
      <div className="Minor-home-container" >
        {cateLists.length  ?
          <div className="second-container">
            <div className="main_content">
              <img src={cateLists[thisIndex].bannerUrl} />
            </div>
            {
              cateLists.map((item,index) =>
                <GoodShowList  key={index} isMinor={true} num={index}/>
              )
            }
          </div> :null}
    </div>
    )
  }
}

export default connect(
  state =>({cateLists:state.cateLists}),
  null
)(MinorHome)