import CONSTANTS from '../constants/constants.js';

const generateEventBadge = benefitTotalAmount => {
  const { star_threshold, tree_threshold, santa_threshold } = CONSTANTS.badgeMinPrice;
  const positiveBenefitTotalAmount = Math.abs(benefitTotalAmount);
  if (positiveBenefitTotalAmount >= star_threshold && positiveBenefitTotalAmount < tree_threshold)
    return 'star';
  if (positiveBenefitTotalAmount >= tree_threshold && positiveBenefitTotalAmount < santa_threshold)
    return 'tree';
  if (positiveBenefitTotalAmount >= santa_threshold) return 'santa';
};

export default generateEventBadge;
