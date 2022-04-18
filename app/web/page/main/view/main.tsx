import React, { Component } from 'react';
import { Link, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import { CRYPTOCURRENCY_LIST, CRYPTOCURRENCY_DETAIL } from '../store/constant';
import Layout from '../../../component/layout'
import Header from '../../../component/header'
import Route from '../router/route';
import Home from '../router/home';
import Detail from '../router/detail';
import Setting from '../router/setting';
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
      <ul className="menu-tab">
        <li onClick={this.tabClick.bind(this)}><Link to="/">Home</Link></li>
        <li onClick={this.tabClick.bind(this)}><Link to="/setting">Setting</Link></li>
      </ul>
      <Switch>
        <Route path="/setting" component={Setting}/>
        <Route type={CRYPTOCURRENCY_LIST} path="/" component={Home}/>
        <Route type={CRYPTOCURRENCY_DETAIL} path="/detail/:id" component={Detail} />
      </Switch>
    </Layout>;
  }
}

export default EASY_ENV_IS_DEV ? hot(Main) : Main;
