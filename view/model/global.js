export default {
  namespace: 'global',
  state: {
    userInfo: null,
  },
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    },
  },

};
