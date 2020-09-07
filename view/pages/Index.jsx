import React from 'react';
import ajax from '@utils/ajax';
import { connect } from 'dva';
import { store } from '../index';

class TobExchange extends React.Component {
  state = {};

  submit = () => {
    this.setState({ loading: true });

    ajax({
      method: 'GET',
      param: this.state.form,
      url: '/api/index',
      success: (res) => {
        alert(JSON.stringify(res));
      },
    });
  };

  render() {
    const {count, dispatch} = this.props;
    return (
      <div>
        <div>
          dva data: {count}
          <button
            onClick={() => {
              dispatch({ type: 'count/add' });
            }}
          > 增加
          </button>

          <button
            onClick={this.submit}
          > ajax
          </button>
        </div>
      </div>
    );
  }
}

export default connect(({ count }) => ({ count }))(TobExchange);
