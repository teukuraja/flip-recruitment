/**
 * @param {*}       item
 * @param {number}  index
 * @returns {string}
 */
const keyExtractor = (item, index) => index.toString();

const renderScreen = ({item}) => item();

/**
 * @param {Object} obj
 * @returns {[]}
 */
const parseObjToArr = (obj) => {
  let newArr = [];
  Object.keys(obj).forEach((key) => newArr.push(obj[key]));

  return newArr;
};

/**
 * @param {number} num
 * @returns {string}
 */
const numberWithCommas = (num) => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return num.toString();
};

/**
 * @param {string | number} amount
 * @returns {string|*}
 */
const toRupiah = (amount) => {
  if (amount) {
    if (typeof amount === 'number') {
      return 'Rp' + numberWithCommas(amount);
    } else {
      return 'Rp' + amount;
    }
  }
  return amount;
};

/**
 * @param {string} datetime
 * @returns {string}
 */
const dateFormatter = (datetime) => {
  let dateParam = datetime.split(/[\s-:]/);
  dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString();

  const date = new Date(...dateParam);
  const months = [
    'Januari',
    'February',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return (
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  );
};

export {
  keyExtractor,
  renderScreen,
  parseObjToArr,
  numberWithCommas,
  toRupiah,
  dateFormatter,
};
