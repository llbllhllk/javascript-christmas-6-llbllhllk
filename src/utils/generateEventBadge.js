import CONSTANTS from '../constants/constants.js';

const generateEventBadge = benefitTotalAmount => {
  const { starThreshold, treeThreshold, santaThreshold } = CONSTANTS.badgeMinPrice;
  const positiveBenefitTotalAmount = Math.abs(benefitTotalAmount);
  if (positiveBenefitTotalAmount >= starThreshold && positiveBenefitTotalAmount < treeThreshold)
    return 'star';
  if (positiveBenefitTotalAmount >= treeThreshold && positiveBenefitTotalAmount < santaThreshold)
    return 'tree';
  if (positiveBenefitTotalAmount >= santaThreshold) return 'santa';
};

export default generateEventBadge;
