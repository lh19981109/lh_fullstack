import React, { Component } from 'react';
import store from './store'
//关键代码-------------start
import {changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreatores';
//关键代码------------end
import TodoListUI from './TodoListUI.';

class TodoList extends Component {
constructor(props){
    super(props)
    this.state=store.getState();
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange) //订阅Redux的状态
}
render() { 
    return ( 
        <TodoListUI 
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deleteItem={this.deleteItem}
        />
    );
}
    storeChange(){
        console.log('store changed')
        this.setState(store.getState())
    }
    //--------关键代码------start
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //--------关键代码------end
}
export default TodoList;