import { en } from './Lang/en';
import { hi } from './Lang/hi';
import { bho } from './Lang/bho';
import { bn } from './Lang/bn';

export const content = {
  EN: en,
  HI: hi,
  BHO: bho,
  BN: bn
};

 

export const getRiskBadge = (level, t) => {
  switch (level) {
    case 'LOW':
      return { bg: '#16A34A', text: '#FFFFFF', label: t.riskLevels.low };
    case 'MEDIUM':
      return { bg: '#EAB308', text: '#17201A', label: t.riskLevels.medium };
    case 'HIGH':
      return { bg: '#F97316', text: '#FFFFFF', label: t.riskLevels.high };
    case 'CRITICAL':
      return { bg: '#DC2626', text: '#FFFFFF', label: t.riskLevels.critical };
    default:
      return { bg: '#16A34A', text: '#FFFFFF', label: t.riskLevels.low };
  }
};
