import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';

const {height, width} = Dimensions.get('window');

const WIDTH = 320;
const HEIGHT = 640;
const standardLength = width > height ? width : height;
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

/**
 * @param  {string} widthPercent
 * @return {number}
 */
const widthPercentageToDP = (widthPercent) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

/**
 * @param  {string} heightPercent
 * @return {number}
 */
const heightPercentageToDP = (heightPercent) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

/**
 * @param {number} horizontalDp
 * @returns {number}
 */
const getHorizontalPercentage = (horizontalDp) =>
  `${(horizontalDp * 100) / WIDTH}%`;

/**
 * @param {number} verticalDp
 * @returns {number}
 */
const getVerticalPercentage = (verticalDp) => `${(verticalDp * 100) / HEIGHT}%`;

const deviceHeight =
  Platform.OS === 'android'
    ? standardLength - StatusBar.currentHeight
    : standardLength;

/**
 * @param {number} fontSize
 * @param {number} standardScreenHeight
 * @returns {number}
 */
const responsiveFontValue = (fontSize, standardScreenHeight = 640) => {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
};

/**
 * @param {number} dp
 * @returns {number}
 */
const responsiveWidth = (dp) =>
  widthPercentageToDP(getHorizontalPercentage(dp));

/**
 * @param {number} dp
 * @returns {number}
 */
const responsiveHeight = (dp) =>
  heightPercentageToDP(getVerticalPercentage(dp));

/**
 * @param {number} dp
 * @returns {number}
 */
const responsiveBorderRadius = (dp) =>
  (responsiveWidth(dp) + responsiveHeight(dp)) / 2;

export {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveBorderRadius as rbr,
};
