import moment from 'moment'

export function calDiffTimeFromNow(time: Date, now = new Date()) {
  const diffDays = moment(now).diff(time, 'd')
  if (diffDays > 0) {
    return `${diffDays}d`
  }

  const diffHours = moment(now).diff(time, 'h')
  if (diffHours > 0) {
    return `${diffHours}h`
  }

  const diffMinutes = moment(now).diff(time, 'm')
  return `${diffMinutes || 1}m`
}

export const dateTimeFormatter = (time: Date) => moment(time).format('D MMM YYYY')
