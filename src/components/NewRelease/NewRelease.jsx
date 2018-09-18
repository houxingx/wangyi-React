import React from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

import "./NewRelease.styl"
import {connect} from 'react-redux'
import {receive_newitemlists} from '../../redux/actions'

class NewRelease extends React.Component {
  static propTypes = {
    newitemlists1:PropTypes.array.isRequired,
    receive_newitemlists:PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.receive_newitemlists()
  }

  componentDidUpdate(){
    if(this.NewReBS1){
      this.NewReBS1.destroy()
    }
    this.NewReBS1 = new BScroll('.new_release_good1',{
      click:true,
      scrollX:true,
      freeScroll:true
    })
  }

  render() {
    const {newitemlists1} = this.props
    return (
      <div ref={div =>this.new_release=div} className="new_release_container1">
        <header>
          <a>
            <span>新品首发</span>
            <div className="item_icon">查看全部
              <i className="iconfont icon-xiangyou-copy"></i>
            </div>
          </a>
        </header>
        <div className="new_release_good1">
          <ul>
            {
              newitemlists1.map((item,index) =>
                <li key={index}>
                  <img src={item.listPicUrl}  />
                  <span className="name">{item.name}</span>
                  <div>{item.simpleDesc}</div>
                  <span className="much"> ￥</span>
                  <span className="much">{item.retailPrice}</span>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state =>({newitemlists1:state.newitemlists1}),
  {receive_newitemlists}
)(NewRelease)