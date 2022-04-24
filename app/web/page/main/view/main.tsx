import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import { CRYPTOCURRENCY_LIST } from '../store/constant';
import Layout from '../../../component/layout'
import Header from '../../../component/header'
import Route from '../router/route';
import Home from '../router/home';
import './main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = { current: props.url };
  }

  tabClick(e) {
    console.log('click', e.target);
  }

  render() {
    return <Layout {...this.props}>
      <Header></Header>
      <Switch>
        <Route type={CRYPTOCURRENCY_LIST} path="/" component={Home} />
      </Switch>
    </Layout>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
