export default {
  namespace: 'count',
  state: 11,
  reducers: {
    add(count: number): number {
      return count + 1;
    },
    minus(count: number): number {
      return count - 1;
    },
  },
};
