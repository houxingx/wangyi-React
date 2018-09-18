import React from 'react'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'

import "./NewRelease2.styl"
import {connect} from 'react-redux'
import {receive_ewitemlists2} from '../../redux/actions'

class NewRelease2 extends React.Component {
  static propTypes = {
    newitemlists2:PropTypes.array.isRequired,
    receive_ewitemlists2:PropTypes.func.isRequired
  }

  componentWillMount(){
    this.props.receive_ewitemlists2()
  }

  componentDidUpdate(){
    if(this.NewReBS2){
      this.NewReBS2.destroy()
    }
    this.NewReBS2 = new BScroll('.new_release_good2',{
      click:true,
      scrollX:true,
      freeScroll:true
    })
  }

  render() {
    const {newitemlists2} = this.props
    return (
      <div ref={div =>this.new_release=div} className="new_release_container2">
        <header>
          <a>
            <span>人气推荐.好物精选</span>
            <div className="item_icon">查看全部
              <i className="iconfont icon-xiangyou-copy"></i>
            </div>
          </a>
        </header>
        <div className="new_release_good2">
          <ul>
            {
              newitemlists2.map((item,index) =>
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
  state =>({newitemlists2:state.newitemlists2}),
  {receive_ewitemlists2}
)(NewRelease2)