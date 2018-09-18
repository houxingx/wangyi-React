import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import './RecommendYou.styl'

class RecommendYou extends React.Component {
  static propTypes = {
    recommend:PropTypes.object.isRequired,
    num:PropTypes.number.isRequired
  }

  state={
    arr:[]
  }
  componentWillMount(){
    for( let i=0;i<this.props.num;i++){
      let {arr} =this.state
      arr.push({i})
      this.setState({
        arr:arr
      })
    }
  }

  render() {
    const {recommend} = this.props
    const bigObj=this.props.recommend.recommendBanner
    const smallArray=this.props.recommend.recommends
    const {arr} = this.state
    return (
      <div className="recommend-you-container">
        {
          recommend.recommendBanner ?
            <div className='recommend-yousub-container'>
              <div className="title">{recommend.recommendBanner.nickname}</div>
              {
                arr.map((item,index) =>
                  <div  key={index}>
                    <a className="main-post-item">
                      <div className="img-container">
                        <div className="post-item">{bigObj.typeName}</div>
                        <img src={bigObj.picUrl}/>
                      </div>
                      <div className="dec">
                        <div className="title">{bigObj.title}</div>
                        <span className="num">{bigObj.priceInfo}</span>
                        <span className="unit">元起</span>
                        <div className="subtitle">{bigObj.subtitle}</div>
                      </div>
                    </a>

                    {
                      smallArray.map((item,num) =>
                        <a className="minor-post-item" key={num}>
                          <div className="topic-info">
                            <div className="author">
                              <img src={item.avatar} />
                              <div className="nickname">{item.nickname}</div>
                            </div>
                            <div className="line1">{item.title}</div>
                            <div className="line2">{item.subtitle}</div>
                          </div>
                          <div className="img-container">
                            <img src={item.picUrl}/>
                          </div>
                        </a>
                      )
                    }


                  </div>
                )
              }

            </div> :null
        }



  </div>
    )
  }
}

export default connect(
  state =>({recommend:state.recommend}),
  null
)(RecommendYou)