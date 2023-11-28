import ERROR from '../../src/constants/error.js';
import VisitDateValidator from '../../src/validators/VisitDateValidator.js';

describe('예상 방문 날짜 입력 예외 상황 테스트', () => {
  test.each(['1', '10', '12'])('1~31인 숫자인 경우 undefined를 반환한다.', input => {
    const result = VisitDateValidator.validateOutOfRangeDay(input);
    expect(result).toBeUndefined();
  });

  test.each(['0', '32', 'a'])('1~31인 숫자가 아닌 경우 예외 처리를 한다.', input => {
    const result = () => VisitDateValidator.validateOutOfRangeDay(Number(input));
    expect(result).toThrow(ERROR.visitDate.outOfRangeDay);
  });
});
