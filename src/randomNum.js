const randomNum = (range, beginOfRange = 0) => {
  const num = Math.floor(Math.random() * range) + beginOfRange;
  return num;
};

export default randomNum;
