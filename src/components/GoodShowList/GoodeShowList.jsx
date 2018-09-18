import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import './GoodeShowList.styl'

class GoodeShowList extends React.Component {
  static propTypes = {
    num:PropTypes.number.isRequired,//对应下标
    isMinor:PropTypes.bool.isRequired //主页是flase  副业是true

  }

  state = {}

  render() {
    const {num,isMinor,cateLists} = this.props
    const showList = cateLists[num].itemList
    if(isMinor){//副业
      return (
        <div className="container" >
          <header >
            <p className="bed">床品套件</p>
            <p className="manufacturer">mujj等厂商出品</p>
          </header>
          <div className="my-goodGuide">
            <ul className="list">
              {
                showList.map((item,index) =>
                  <li className="item" key={index}>
                    <a className="good" >
                      <div className="hd">
                        <div className="wrap">
                          <img src={item.listPicUrl} />
                        </div>
                        <div className="decs">{item.simpleDesc}</div>
                      </div>
                      {item.itemTagList.length ? <div className={`tagWrap length${item.itemTagList[0].type}`}  >
                        {item.itemTagList[0].name}</div> :null}

                      <div className="name">{item.name}</div>
                      <div className="price">￥ {item.retailPrice}</div>
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      )
    }else{//主页
      const newShowList = showList.filter((item,index) =>index<7)
      return (
        <div className="container" >
          <header className="title" >{cateLists[num].name}</header>
          <div className="my-goodGuide">
            <ul className="list">
              {
                newShowList.map((item,index) =>
                  <li className="item"  key={index}>
                    <a className="good" >
                      <div className="hd">
                        <div className="wrap">
                          <img src={item.listPicUrl} />
                        </div>
                        <div className="decs">{item.simpleDesc}</div>
                      </div>
                      {item.itemTagList.length ? <div className={`tagWrap length${item.itemTagList[0].type}`}  >
                        {item.itemTagList[0].name}</div> :null}
                      <div className="name">{item.name}</div>
                      <div className="price">￥ {item.retailPrice}</div>
                    </a>
                  </li>
                )
              }
              <li className="item item-more" >
                <a className="item_icon">
                  <p>更多居家好物</p>
                  <i className="iconfont icon-iconset0424"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )
    }

  }
}

export default connect(
  state =>({cateLists:state.cateLists}),
  null
)(GoodeShowList)