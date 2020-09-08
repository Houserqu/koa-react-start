export default {
  namespace: 'global',
  state: {
    userInfo: null,
  },
  reducers: {
    add(count: number): number {
      return count + 1;
    },
    minus(count: number): number {
      return count - 1;
    },
  },
};
