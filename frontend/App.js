import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux"; //Add
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'; //리덕스 크롬 개발자도구 사용하기 위한 라이브러리
import reducers from 'modules/reducers';
import thunk from "redux-thunk";
import App from './App/App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    )
  }
}