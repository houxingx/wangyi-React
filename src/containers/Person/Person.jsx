import React from 'react'
import {withRouter,Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Button} from 'antd-mobile'

import MeetHeader from '../../components/MeetHeader/MeetHeader'
import Login from './Login/Login'
import Register from './Register/Register'
import './Person.styl'

class Person extends React.Component{
  static propTypes={
    history:PropTypes.object.isRequired
  }

  tologin =(type) =>{
    this.setState({
      method:type,
      isPerson:!this.state.isPerson
    })
  }

  toRegiste=() =>{
    console.log('注册')
    this.setState({
      isRegiste:true,
      isPerson:false
    })
  }

  state={
    method:0,
    isPerson:true,
    isRegiste:false,
    isLogin:false,
    user:{_id:false,phone:1222121232}
  }
  render(){
    const {method,isPerson,isLogin,isRegiste,user} = this.state
    if(user._id){
      return(
        <div className="person">
          <MeetHeader/>
          <div  className="isLogin">
            <div className="login">已经登录</div>
            <div className="name">{user.phone||user.email}</div>
            <Button onClick={() => alert('删除', '确定删除么???', [
              { text: '取消', onPress: () => console.log('cancel') },
              { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
            ])} type="primary" >登出</Button>
          </div>
        </div>
      )
    }
    if(isPerson)
      return(
        <div className="person">
          <MeetHeader/>
          <div  className="person-wrap">
            <div className="container" >
              <div className="img-wrap">
                <img src={require('../../common/images/wangyi2.png')} />
              </div>

              <div className="content-wrap">
                <div className="login-pho login">
                  <Button type="primary" className="item_icon but but1"
                          onClick={() =>this.setState({method:0,isPerson:!isPerson})}>
                    <i className="iconfont icon-tel"></i>手机号码登录</Button>
                </div>
                <div className="login-email login" >
                  <Button type="primary" className="item_icon but but2"
                          onClick={() =>this.setState({method:1,isPerson:!isPerson})}>
                    <i className="iconfont icon-youxiang"></i>邮箱账号登录</Button>
                </div>
                <div className="regest-pho item_icon">
                  <span onClick={this.toRegiste}>手机快捷注册<i className="iconfont icon-xiangyou-copy"></i></span>
                </div>
              </div>

              <div className="third-wrap">
                  <span className="item-wrap">
                    <span className="item_icon border">
                      <i className="iconfont icon-zhangshangcaifuyemianshoujiban343">QQ</i>
                    </span>
                    <span className="item_icon border">
                      <i className="iconfont icon-changyonglogo28">微信</i>
                    </span>
                    <span className="item_icon">
                      <i className="iconfont icon-weibo">微博</i>
                    </span>
                  </span>
              </div>

            </div>
          </div>
        </div>
      )

    if(isRegiste){
      return (
        <div className="person">
          <MeetHeader/>
          <div  className="person-wrap">
            <Register  />
          </div>
        </div>
      )
    }
      return(
        <div className="person">
          <MeetHeader/>
          <div  className="person-wrap">
            <Login  method={method} tologin={this.tologin} toRegiste={this.toRegiste}/>
          </div>
        </div>
      )

  }
}

export default Person



