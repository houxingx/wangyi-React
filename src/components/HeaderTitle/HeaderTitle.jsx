import React from 'react'
import HeaderNav from '../HeaderNav/HeaderNav'
import './HeaderTitle.styl'

class HeaderTitle extends React.Component {
  static propTypes = {}

  state = {}

  render() {
    return (
      <div className="header-title-container">
        <header className="header-title">
          <img className="wangYiYx" src={require("../../common/images/wangyi.png")}/>
          <img className="search" src={require("../../common/images/search.png")}/>
          <input className='header-input' placeholder="搜索商品，共13111款好污"/>
        </header>
        <HeaderNav />
      </div>
    )
  }
}

export default HeaderTitle