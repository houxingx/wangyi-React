import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

import './MeetHeader.styl'

class MeetHeader extends React.Component{
  static propTypes={
    history:PropTypes.object.isRequired
  }
  render(){
    return(
      <header className="meet_header-header">
        <div className="item_container">
          <a className="to_home item_icon">
            <i className="iconfont icon-shouye" onClick={()=>this.props.history.push('/home')} ></i>
        </a>
        <a className="header_title item_icon">
          <img src={require('../../common/images/wangyi.png')}/>
        </a>
        <div className="right item_icon">
          <i className="iconfont icon-icon-test"></i>
          <i className="iconfont icon-gouwuche"></i>
        </div>
      </div>
  </header>
    )
  }
}

export default withRouter(MeetHeader)