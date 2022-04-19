import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from '../widget/loading';

const AsyncLoadableComponent = Loadable({
  loader: () => import('../widget/settingCmp'),
  loading: Loading
});

export default class Setting extends Component {

  render() {
    return <div>
      <h2 style={{ marginTop: '40px', marginBottom: '40px', textAlign: 'center'}}>cryptocurrency-realtime-price Setting page</h2>
      <div style={{ textAlign: 'center' }}><AsyncLoadableComponent /></div>
    </div>;
  }
}
