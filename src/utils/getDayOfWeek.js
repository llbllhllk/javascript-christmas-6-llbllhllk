import CONSTANTS from '../constants/constants.js';

const getDayOfWeek = visitDate => {
  const date = new Date(new Date().getFullYear(), CONSTANTS.month.december, visitDate);
  return date.getDay();
};

export default getDayOfWeek;
