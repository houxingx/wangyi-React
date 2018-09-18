import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import {receive_categorys} from '../../redux/actions'
import './Classify.styl'

import ClassifyDetail from './ClassifyDetail/ClassifyDtai'
class Classify extends React.Component{
  static propTypes={
    categorys:PropTypes.array.isRequired,
    history:PropTypes.object.isRequired,
    receive_categorys:PropTypes.func.isRequired
  }
  //初始数据
  state={
    showIndex:0,
    categorys:[]
  }
  //挂载前
  componentWillMount(){
    this.props.receive_categorys()
  }
  //完成挂载
  componentDidMount(){
    this.LeftBS = new BScroll('.ulList',{
      click:true,
      probeTypeL:0
    })
  }
  //选择分类
  chooseGood = (index) =>{
    this.setState({
      showIndex:index
    })
    this.props.history.replace('/classify/'+index)
  }

  render(){
    const {categorys} = this.props
    const {showIndex} = this.state
    return(
      <div className="container">

        <div className="header">
          <div className="item item_icon">
            <i className="iconfont icon-icon-test"></i>
            <span>搜索商品，共12342件好物</span>
          </div>
        </div>

        <div className="goodCart">
          <div className="ulList">
            <ul>
              {
                categorys.map((item,index) =>
                  <li className={`${showIndex===index ? 'on':null}`} key={index}
                      onClick={()=>this.chooseGood(index)}>
                    <a>{item.name}</a>
                  </li>
                )
              }

          </ul>
        </div>
      </div>

        {categorys.length ? <ClassifyDetail showIndex={showIndex} /> : null}
  </div>
    )
  }
}

export default connect(
state=>({categorys:state.categorys}),
  {receive_categorys}
)(Classify)