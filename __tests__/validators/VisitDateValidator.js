import ERROR from '../../src/constants/error.js';
import VisitDateValidator from '../../src/validators/VisitDateValidator.js';

describe('예상 방문 날짜 입력 예외 상황 테스트', () => {
  test.each(['1', '10', '12'])('1~31인 숫자인 경우 예외 처리', input => {
    expect(VisitDateValidator.validateVisitDate(input)).toBeUndefined();
  });

  test.each(['0', '32', 'a'])('1~31인 숫자가 아닌 경우 예외 처리', input => {
    expect(() => VisitDateValidator.validateVisitDate(input)).toThrow(
      ERROR.visitDate.OUT_OF_RANGE_DAY,
    );
  });
});
