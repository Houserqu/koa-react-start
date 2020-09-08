import React from 'react';
import ajax from '@/utils/ajax';
import { connect } from 'dva';
import { Dispatch } from '../../../node_modules/redux'
import { State as CountState } from '@/view/model/count'

interface State {
  form: any,
  loading: boolean
}

interface Props {
  dispatch: Dispatch<{type: string, payload?: any}>,
  count: CountState
}

class TobExchange extends React.Component<Props, State> {
  state = {
    form: {},
    loading: false
  };

  submit = () => {
    this.setState({ loading: true });

    ajax({
      method: 'GET',
      param: this.state.form,
      url: '/api/index',
      success: (res: any) => {
        alert(JSON.stringify(res));
      },
    });
  };

  render() {
    const {count, dispatch} = this.props;
    return (
      <div>
        <div>
          dva data: {count.count}
          <button
            onClick={() => {
              dispatch({ type: 'count/add' });
            }}
          > 增加
          </button>
          <button
            onClick={() => {
              dispatch({ type: 'count/minus' });
            }}
          > 减少
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

export default connect(({ count }: any) => ({ count }))(TobExchange);
