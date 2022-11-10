const makeRandomNum = (range = 100, beginOfRange = 1) => {
  const num = Math.floor(Math.random() * range) + beginOfRange;
  return num;
};

export default makeRandomNum;
