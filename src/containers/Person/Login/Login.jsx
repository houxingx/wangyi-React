import React from 'react'
import PropTypes from 'prop-types'
import './Login.styl'
import {Button,Toast} from 'antd-mobile'

import {reqSendLoCode,reqPhoNoteLogin,reqPhoPwdLogin,reqEmiPwdLogin} from '../../../api'

class Login extends  React.Component{
  static propTypes={
    method:PropTypes.number.isRequired,  /*登录方法  0是手机登录  1是邮箱登录*/
    /*在person页面还是登录注册页面*/
    tologin:PropTypes.func.isRequired,
    toRegiste:PropTypes.func.isRequired
  }
  
  state={
    isPsd:false,  //flase使用短信登录 true使用密码登录
    phone: '',  // 手机号
    code: '',   // 短信验证码
    ppwd:'',     //手机密码
    email:'',   //邮箱
    epwd: '',    // 邮箱密码
    computeTime: 0, // 倒计时剩余的时间
  }

  getPhone =(e) =>{
    this.setState({
      phone:e.target.value
    })
  }

  getEmail =(e) =>{
    this.setState({
      email:e.target.value
    })
  }
  getPPWD =(e) =>{
    this.setState({
      ppwd:e.target.value
    })
  }
  getCode =(e) =>{
    this.setState({
      code:e.target.value
    })
  }
  getEPWD =(e) =>{
    this.setState({
      epwd:e.target.value
    })
  }
  /*显示错误信息*/
  showAlert(msg) {
    Toast.alert(msg)
  }

  /*切换时手机号用 短信登录 还是 密码登录*/
  changeIsPsd(){
    this.setState({
      isPsd:!this.state.isPsd
    })
  }
  // 发送一次性短信验证码
  async sendCode() {
    /*1. 实现倒计时功能*/
    this.computeTime = 30
    // 启循环定时器, 改变computedTime
    const interverId = setInterval(() => {
      this.computeTime--
      // 当计时达到最小值时, 清除定时器
      if (this.computeTime <= 0) {
        this.computeTime = 0
        clearInterval(interverId)
      }
    }, 1000)
    /*2. 发送请求去发短信验证码*/
    const result = await reqSendLoCode(this.state.phone)
    if(result.code===0) { // 成功
      this.showAlert('验证码已发送')
    } else { // 失败
      // 停止计时
      this.computeTime = 0
      // alert('失败了')
      this.showAlert(result.msg)
    }
  }

  render(){
    const {method,tologin,toRegiste} = this.props
    const {isPsd,computeTime,phone,code,ppwd,email,epwd} = this.state
    return(
      <div className="login-all-wrap">
        <div className="img-wrap">
          <img src={require('../../../common/images/wangyi2.png')} />
        </div>

        <div className="content-wrap">
          <div className="item-wrap">
            <div className="input input1">
              {method===0 ?
                <input type="tel" placeholder="输入手机号" maxlength="11"  onChange={this.getPhone()}/>
                :<input type="text" placeholder="邮箱账号"  onChange={this.getEmail()}/>
              }
            </div>

            <div className="input input2">
              {
                method===0 ?
                (isPsd ?
                  <input  placeholder="输入密码" onChange={this.getPPWD()}/>:
                  <input  placeholder="输入短信验证验证码" onChange={this.getCode()}/>
                ):<input  placeholder="密码" onChange={this.getEPWD()}/>
              }
              {method===0 && !isPsd ?
                <Button  onClick={this.sendCode}>
                  {computeTime > 0 ? `已发送(${computeTime}s)` : '获取验证码'}
                </Button> :''
              }

          </div>

          <div className="text-wrap">
          <span className="problem">
            {method===0 ? "遇到问题？": "注册账号"}
          </span>
            {method===0?<span className="psd" onClick={this.changeIsPsd}>
            {isPsd===false ?"使用密码登录":"使用短信登录"}
          </span> :'' }
            {method===1 ?<span className="psd">忘记密码</span>:null}
        </div>

        <div className="but-wrap1 but-wrap">
          <Button type="default" className="but but1" onClick={this.toLogin}>登录</Button>
      </div>

    <div className="but-wrap2 but-wrap">
      <Button type="default" className="but but2" onClick={tologin(0)}>其他登录方式</Button>
  </div>

    <div className="regiest" onClick={toRegiste}>注册账号
      <i className="iconfont icon-xiangyou-copy"></i>
  </div>

  </div>
  </div>
  </div>
      )
  }
}

export default Login