import React, { Component } from 'react';
import {connect} from 'react-redux'  //引入连接器
import {Input, Button, List} from 'antd'

import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM} from './store/constant'
import store from './store'

import './index.css'
// git@github.com:liumeng-02-05/react04-react-redux.git
// git@github.com:liumeng-02-05/react04-react-redux.git
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '测试',
      // ...store.getState()
    }
    // this.handleChangeInputValue = this.handleChangeInputValue.bind(this)
    // this.changeStatevalue = this.changeStatevalue.bind(this)
    // this.handleAddItem = this.handleAddItem.bind(this)
    // this.handleDeleteItem = this.handleDeleteItem.bind(this)
    // store.subscribe(this.changeStatevalue)
  }
  componentDidMount(){
    // const action = getListData()
    // store.dispatch(action)
  }
  render() {
    return (
      <div className="todolist">
        <p>{this.state.type}</p>
        <p>{this.props.newList}</p>
        <div className="input">
          <Input placeholder="请输入行程信息"  value={this.props.inputValue} onChange={this.props.handleChangeInputValue} />
          <Button type="primary" onClick={this.props.handleAddItem}> 添加行程信息</Button>
        </div>
        <div className="listInfo">
        <List
          dataSource={this.props.listValue}
          bordered
          renderItem={(item,index)=>(
          <List.Item onClick={()=>{this.props.handleDeleteItem(index)}} key={item+index}>{item}</List.Item>
        )}
        />
        </div>
      </div>
    );
  }
  // handleChangeInputValue(e){
  //   const action = {
  //     type: CHANGE_VALUE,
  //     payload: e.target.value
  //   }
  //   store.dispatch(action)
  //   // console.log(store.getState()) 可以通过async和await获取更新之后的值
  // }
  // 获取更新之后的值
  // changeStatevalue(){
  //   const newType= this.state.type === '测试' ? '修改测试的值' : '测试'
  //   this.setState({
  //     type: newType,
  //     // ...store.getState()
  //   })
  // }
  // 添加行程
  // handleAddItem(){
  //   const action = {
  //     type: ADD_ITEM
  //   }
  //   store.dispatch(action)
  // }
  // 删除行程
  // handleDeleteItem(index){
  //   const action ={
  //     type: DELETE_ITEM,
  //     payload: index
  //   }
  //   store.dispatch(action)
  // }
}
const mapStateToProps  = (state) => {
  // console.log(state)
  return {
    inputValue: state.inputValue,
    listValue: state.listValue,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeInputValue(e){
        // console.log(e.target.value,990)
      const action = {
        type: CHANGE_VALUE,
        payload: e.target.value
      }
      dispatch(action)
    },
    handleAddItem(){
      const action = {
        type: ADD_ITEM
      }
      store.dispatch(action)
    },
    handleDeleteItem(index){
      const action ={
        type: DELETE_ITEM,
        payload: index
      }
      store.dispatch(action)
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);