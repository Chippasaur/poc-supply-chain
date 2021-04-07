import { render } from 'enzyme'
import Notifications from './index'
import { NotificationType } from './NotificationType'

describe('<Notifications />', () => {
  const notifications = [
    {
      supplierName: 'company1',
      type: NotificationType.INVITATION,
      createdTime: new Date('2021-2-23 16:00:00'),
    },
    { supplierName: 'company2', type: NotificationType.SEND_MESSAGE, createdAt: new Date('2021-2-23 16:00:00') },
    { supplierName: 'company3', type: NotificationType.SUBMIT_SURVEY, createdAt: new Date('2021-2-23 16:00:00') },
  ]

  it('render 3 notifications', () => {
    const component = render(<Notifications notifications={notifications} />)
    expect(component.find('.supplierName')).toHaveLength(3)
  })
})
