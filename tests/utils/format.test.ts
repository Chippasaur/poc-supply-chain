import { calDiffTimeFromNow } from '../../utils/format'

describe('test format utils', () => {
  describe('test calDiffTimeFromNow', () => {
    it('should get 2d from now', () => {
      expect(calDiffTimeFromNow(new Date('2021-2-21 12:00:00'), new Date('2021-2-23 16:00:00'))).toBe('2d')
    })

    it('should get 4h from now', () => {
      expect(calDiffTimeFromNow(new Date('2021-2-23 12:00:00'), new Date('2021-2-23 16:00:00'))).toBe('4h')
    })

    it('should get 12m from now', () => {
      expect(calDiffTimeFromNow(new Date('2021-2-23 16:00:00'), new Date('2021-2-23 16:12:50'))).toBe('12m')
    })

    it('should get 1m when diffTime less than 1,', () => {
      expect(calDiffTimeFromNow(new Date('2021-2-23 12:00:00'), new Date('2021-2-23 12:00:50'))).toBe('1m')
    })
  })
})
