import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root'
import sockjs from 'socket.io-client';
import request from '../../../framework/request';
import './home.css'

class Home extends Component<any, any> {
  socket: any;

  constructor(p) {
    super(p);
  }

  static async asyncData(context, route) {
    return request.get('/api/main/prices', context);
  }

  componentDidMount() {
    this.initSocketConnection();
  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  initSocketConnection = () => {
    console.info('------ init socket connection -------')
    let socket = sockjs(`ws://${window.location.host}`, { transports: ['websocket'] })

    socket.on('connect', () => {
      console.info(socket.connected);
      socket.emit('join', 'hi');
    });

    socket.on('reconnect_attempt', () => {
      console.info("reconnect");
    });

    socket.on('connect_error', (error) => {
      console.warn(error);
    });

    // update cryptocurrency realtime price
    socket.on('info_updated', (msg) => {
      const { onRefresh } = this.props
      onRefresh(msg);
      // console.info('info_updated', msg);
    });

    this.socket = socket;
  }

  render() {
    const { list = [] } = this.props;

    return <div className="cryptocurrency-list-block">
      <div className='cryptocurrency-list-block-title'>Cryptocurrency Realtime Price</div>
      <ul>
        {list.map(function (item) {
          return <li key={item.name}
            className={`cryptocurrency-list-item ${item.price === "Unknown" ? '' : item.change > 0 ? "bg-transition-green" : "bg-transition-red"} 
            ${item.price === "Unknown" ? "currency-inactive" : ""}`} >
            <h2 className="cryptocurrency-list-title">
              <Link to={'/detail/' + item.name}>{item.name}</Link>
            </h2>
            <div className="cryptocurrency-list-price">${item.price}</div>
            <div className="cryptocurrency-list-desc">
              <div>
                <div className="cryptocurrency-list-label">volume:</div>
                <div className="cryptocurrency-list-volume">{item.volume}</div>
              </div>
              <div>
                <div className="cryptocurrency-list-label">change:</div>
                <div className="cryptocurrency-list-change" style={{ color: item.price === "Unknown" ? '' : item.change > 0 ? '#7AD200' : '#CD0000' }}>{item.change}</div>
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
    onRefresh: (msg) => dispatch({ type: 'REFRESH', data: msg })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EASY_ENV_IS_DEV ? hot(Home) : Home);