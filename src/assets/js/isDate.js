
function checkDateTime(d) {
  const _date = new Date(d);
  const Now = new Date().getTime();
  const DiffTime = _date.getTime() - Now;

  if (
      _date.getFullYear() === 1970 ||
      _date.getFullYear() < new Date().getFullYear()
  ) {
    // 若是传入的时间转换成1970年...那肯定不是我们后台要传的时间
    // 小于这个年份的也必然不是,谁的后台token过期时间超过一年的...
    return false;
  }

  if (DiffTime > 60000) {
    // 过期结束时间必须大于传入时间
    // 当过期时间还大于一分钟的时候,
    return true;
  } else {
    // 否则返回false,从外部调用这个函数拿到返回值,
    // 做二步处理,续期还是强制退出什么鬼的
    return false;
  }
}

/**
 * @description 判断是否为正确的日期  指的是 > 今天的日期
 * @param {*} d
 */
export const isDate = d => {
  // 任何不能给Date识别的参数,子函数调用的返回值为NaN
  return isNaN(new Date(d).getTime()) || new Date(d).getTime() === 0
      ? false
      : checkDateTime(d);
};


