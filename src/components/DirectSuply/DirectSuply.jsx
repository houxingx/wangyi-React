import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './DirectSuply.styl'

class DirectSuply extends React.Component {
  static propTypes = {
    tagList:PropTypes.array.isRequired,
    content:PropTypes.string.isRequired
  }

  state = {}

  render() {
    const {tagList,content}= this.props
    const newTagList=tagList.filter((item,index) =>index <4)
    return (
      <div className="direct_supply">
        <div className="title">
        <span className="item_icon">{content}
          <i className="iconfont icon-iconset0424"></i>
        </span>
        </div>
        <div className="direct_supply_good">
          {
            newTagList.map((item,index) =>
              <div  v-if="index<4" key={index}>
                <section>
                  <h4>{item.name}</h4>
                  <span>{item.floorPrice}元起</span>
                  {item.newOnShelf ?  <img src={require("../../common/images/new.png")} /> :null}

                </section>
                <img src={item.picUrl}/>
              </div>
            )
          }

      </div>
  </div>
    )
  }
}

export default connect(
  state =>({tagList:state.tagList}),
  null
)(DirectSuply)