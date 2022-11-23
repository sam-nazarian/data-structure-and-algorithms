/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
  const date1Obj = new Date(date1);
  const date2Obj = new Date(date2);

  const diffInDays = Math.abs(date2Obj - date1Obj) / (1000 * 60 * 60 * 24);

  return diffInDays;
};

daysBetweenDates('2020-01-15', '2019-12-31');
