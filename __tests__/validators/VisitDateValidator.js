import ERROR from '../../src/constants/error';
import VisitDateValidator from '../../src/validators/VisitDateValidator';

describe('예상 방문 날짜 입력 예외 상황 테스트', () => {
  test.each(['0', '32', 'a'])('1~31인 숫자가 아닙니다.', input => {
    expect(() => VisitDateValidator.validateVisitDate(input)).toThrow(
      ERROR.visitDate.OUT_OF_RANGE_DAY,
    );
  });
});
