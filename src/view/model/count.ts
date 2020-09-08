export interface State {
  count: number
}

const initState: State = {
  count: 0
}

export default {
  namespace: 'count',
  state: initState,
  reducers: {
    add(state: State): State{
      return { ...state, count: ++state.count };
    },
    minus(state: State): State {
      return { ...state, count: --state.count };
    },
  },
};
