import React from 'react';
import ajax from '@utils/ajax';
import { connect } from 'dva';
import { store } from '../index';
import { Button } from '@material-ui/core';

class TobExchange extends React.Component {
  state = {};

  submit = () => {
    this.setState({ loading: true });

    ajax({
      method: 'GET',
      param: this.state.form,
      url: '/api/index',
      success: (res) => {
        alert(JSON.stringify(res))
      },
    });
  };

  render() {
    const {count, dispatch} = this.props;
    return (
      <div>
        <div>
          dva data: {count}
          <Button
            onClick={() => {
              dispatch({ type: 'count/add' });
            }}
          > 增加
          </Button>

          <Button
            onClick={this.submit}
          > ajax
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(({ count }) => ({ count }))(TobExchange);
