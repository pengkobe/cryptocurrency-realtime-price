import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import sockjs from 'socket.io-client';
import request from '../../../framework/request';

import './home.css'
class Home extends Component<any, any> {
  static async asyncData(context, route) {
    return request.get('/api/main/prices', context);
  }

  componentDidMount() {
    console.info('----------componentDidMount-------------')
    this.testconnect();
  }
  testconnect = () => {
    console.info('------------------- here i am')
    let socket = sockjs("ws://localhost:7001", { transports: ['websocket'] })

    socket.on('reconnect_attempt', () => {
      console.log("reconnect")
      // TODO: socket.transports = ['websocket', 'polling', 'flashsocket'];
    });

    socket.on('reconnect_error', (attemptNumber) => {
      console.log(attemptNumber)
    });

    socket.on('connect', () => {
      console.log(socket.connected)
    })

    socket.on('connect_error', (error) => {
      console.log(error)
    });

    socket.on('ping', (error) => {
      console.log('ping_include')
    });
    socket.on('price_updated', (msg) => {
      const {onRefresh} = this.props
      onRefresh(msg);
      console.warn('price_updated', msg)  
    });

    // 连接成功的connect方法
    socket.on("connect", function () {
      socket.emit('join', 'hi');
    })
  }

  render() {
    const { list = [] } = this.props;
    return <div className="cryptocurrency-list-list">
      <ul>
        {list.map(function (item) {
          return <li key={item.name} className="cryptocurrency-list-item">
            <h2 className="cryptocurrency-list-title">
              <Link to={'/detail/' + item.name}>{item.name}</Link>
            </h2>
            <div className="cryptocurrency-list-price">${item.price}</div>
            <div className="cryptocurrency-list-desc">
              <div>
                <div>volume:</div>
                <div>{item.volume}</div>
              </div>
              <div>
                <div>change:</div>
                <div style={{ color: item.change > 0 ? 'rgb(0, 176, 90)' : 'rgb(255, 0, 32)' }}>{item.change}</div>
              </div>
            </div>
          </li>;
        })}
      </ul>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRefresh: (msg) => dispatch({type: 'REFRESH',data:msg})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EASY_ENV_IS_DEV ? hot(Home) : Home);