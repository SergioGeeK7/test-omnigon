export default (time) => {
  const date = new Date(time);
  const offset = (new Date().getTimezoneOffset() / 60) * -1;
  const userTime = new Date(date.getTime() + offset);
  return userTime;
};
