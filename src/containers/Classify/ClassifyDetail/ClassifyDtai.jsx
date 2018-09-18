import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import './ClassifyDetail.styl'
class ClassifyDtai extends React.Component{
  static propTypes={
    showIndex:PropTypes.number.isRequired,
    categorys:PropTypes.array.isRequired
  }

  render(){
    const {showIndex,categorys} = this.props
    const List = categorys[showIndex].subCateList
    return(

      <div className="container-classifyDatial" v-if="categorys.length">
        {categorys.length ?
          <div className='twoDiv-wrap'>
            <div className="banner">
              <img src={categorys[showIndex].bannerUrl} />
            </div>
            <div className="cate-list">
              <ul className="cate-ul" ref="cateUl">
                {
                  List.map((item,index) =>
                    <li className="cate-item" key={index}>
                      <img src={item.bannerUrl} />
                      <span>{item.name}</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          :null}

      </div>
    )
  }
}

export default connect(
  state =>({categorys:state.categorys}),
  null
)(ClassifyDtai)