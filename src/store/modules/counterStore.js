import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  //初始状态数据
  initialState: {
    count: 0,
  },
  //修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state,action) {
      state.count = action.payload;
    }
  },
});

//解析出创建action对象的函数(actionCreator)
const {increment, decrement, addToNum} = counterStore.actions;

//解析出reducer函数
const counterReducer = counterStore.reducer;

//导出action对象和reducer
//以按需导出的方式导出actionCreator
export { increment, decrement, addToNum };
//以默认导出的方式导出reducer
export default counterReducer;