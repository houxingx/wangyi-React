import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter,Route,Switch,Redirect} from 'react-router-dom'

import {
  receive_header,
  receive_focuslist,
  receive_taglist,
  receive_newitemlists,
  receive_ewitemlists2,
  receive_reqflashsaleindexvo,
  receive_reqtopiclists,
  receive_topiclists,
  receive_categorys
} from '../../redux/actions'

import MainHome from './MainHome/MainHome'
import MinorHome from './MinorHome/MinorHome'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import './Home.styl'


class Home extends React.Component{
  //声明props
  static propsTypes = {
    receive_header:PropTypes.func.isRequired,
    receive_focuslist:PropTypes.func.isRequired,
    receive_taglist:PropTypes.func.isRequired,
    receive_newitemlists:PropTypes.func.isRequired,
    receive_ewitemlists2:PropTypes.func.isRequired,
    receive_reqflashsaleindexvo:PropTypes.func.isRequired,
    receive_reqtopiclists:PropTypes.func.isRequired,
    receive_topiclists:PropTypes.func.isRequired,
    receive_categorys:PropTypes.func.isRequired,
    user:PropTypes.object.isRequired
  }
  //将要挂载时分发事件
  componentWillMount(){
    this.props.receive_header()
    this.props.receive_focuslist()
    this.props.receive_taglist()
    this.props.receive_newitemlists()
    this.props.receive_ewitemlists2()
    this.props.receive_reqflashsaleindexvo()
    this.props.receive_reqtopiclists()
    this.props.receive_topiclists()
    this.props.receive_categorys()
  }
  componentDidMount(){
    setTimeout(()=>{
      if (this.props.user._id){
        this.showCover=false
        return
      }
      this.setState({
        showCover:true
      })
    },1000)
  }
  //消除卸载后，异步执行仍在继续的这种情况 还有一种方法：设置一个falg
  componentWillUnmount (){
    this.setState =(state,callback) =>{
      return
    }
  }
  state={
    showCover:false
  }
  //去顶部函数
  toTop = () =>{
    let timeId = setInterval(()=>{
      document.documentElement.scrollTop-=40
      if(document.documentElement.scrollTop<=0){
        document.documentElement.scrollTop=0
        clearInterval(timeId)
      }
    },10)
  }

  killCover =() =>{
    this.setState({
      showCover:false
    })
  }

  render(){
    const {showCover} = this.state
    return(
      <div>
        <HeaderTitle/>
        <div className="homeContainer">
          <Switch>
            <Route path='/home/1005111' component={MainHome}/>
            <Route path='/home/:id' component={MinorHome}/>
            <Redirect to='/home/1005111'/>
          </Switch>
        </div>

        <span className="item_icon toTop" onClick={this.toTop}>
          <i className="iconfont icon-xiangshang"></i>
        </span>

        {showCover ? <div className="cover" >
        </div> :null}

        {showCover ? <div className="cover-img" >
          <span className="item_icon" onClick={this.killCover}>
            <i className="iconfont icon-shanchuguanbicha"></i>
          </span>
          <img src={require("../../common/images/one.png")} />
        </div> : null}

      </div>
    )
  }
}

export default connect(
  state =>({user:state.user}),
  {receive_header,
    receive_focuslist,
    receive_taglist,
    receive_newitemlists,
    receive_ewitemlists2,
    receive_reqflashsaleindexvo,
    receive_reqtopiclists,
    receive_topiclists,
    receive_categorys}
)(Home)