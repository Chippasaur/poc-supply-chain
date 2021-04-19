import { calDiffTimeFromNow, dateTimeFormatter } from '../../utils/format'
import moment from 'moment'

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

  describe('test dateTimeFormatter', () => {
    it('should get correct date time string when date parse right', () => {
      expect(dateTimeFormatter(new Date('2020-11-18 16:00:00'))).toBe('18 Nov 2020')
    })

    it('should get local date time string when time param from UTC', () => {
      expect(dateTimeFormatter(new Date('2021-02-14T19:00:00.000Z'))).toBe('15 Feb 2021')
    })

    it('should get correct token string', () => {
      const date = new Date('2021-02-14T19:00:00.000Z')
      expect(moment(dateTimeFormatter(date), 'D MMM YYYY', true).isValid()).toBe(true)
    })

    it('should get invalid date string when date parse wrong', () => {
      expect(dateTimeFormatter(new Date('2020-10-39 16:00:00'))).toBe('Invalid date')
    })
  })
})
