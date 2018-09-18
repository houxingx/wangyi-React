import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import BScroll from 'better-scroll'
import PubSub from 'pubsub-js'

import './HeaderNav.styl'

class HeaderNav extends React.Component {
  static propTypes = {
    history:PropTypes.object.isRequired,
    headerList:PropTypes.array.isRequired,
    location:PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }


  componentWillMount() {
    /*读取缓存中的index*/
    this.setState({
      thisIndex:parseInt(localStorage.getItem('activeIndex'))
    })
  }

  componentDidUpdate(){
    if(!this.nav){
      this.nav=new BScroll('.title_nav_wrapper',{
        click:true,
        scrollX:true
      })
    }
    this._scrollLeftList(this.state.thisIndex)
  }

  componentWillUnmount(){
    //离开页面时清除 activeIndex
    localStorage.setItem('activeIndex',0)
    this.thisIndex = 0
  }

  /*点击滑动*/
  _scrollLeftList(index) {
    // 得到左侧当前分类的li
    const li = this.title_content.children[index]
    // 滑动到li位
    this.nav.scrollToElement(li, 200)
  }

  // /*跳往index对应路由*/
   chooseIndex(index){
     localStorage.setItem('activeIndex',index)
     PubSub.publish('changeIndex',index)
     console.log('Header',index)
     this.setState({
       thisIndex:index
     })
     let url ='/home/'+this.props.headerList[index].id
     this.props.history.replace(url)
   }

  state = {
    id:null,
    thisIndex:0
  }

  render() {
    const {headerList} = this.props
    return (
      <div className="title_nav_wrapper" >
        {headerList.length ? <ul className="title_content" ref={ul =>this.title_content=ul}>
          {
            headerList.map((item,index) =>
              <li  className={`${index ===this.state.thisIndex? 'on':null}`}
                   onClick={()=>this.chooseIndex(index)} key={index}>{item.name}</li>
            )
          }
        </ul> :null}

  </div>
    )
  }
}

export default connect(
  state =>({headerList:state.headerList})
)(withRouter(HeaderNav))