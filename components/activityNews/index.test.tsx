import { render } from 'enzyme'
import ActivityNews from './index'

describe('<ActivityNews/>', () => {
  const contents = [
    {
      id: '1',
      createdTime: new Date('2020-11-18 16:00:00'),
      content: 'The credit report of FORTUNE SHOES LTD. has changed from Green to Amber',
    },
    {
      id: '2',
      createdTime: new Date('2020-11-02 19:00:00'),
      content: 'Ongoing screening update: New and/or updated matches found for TUA-HA TEX',
    },
    {
      id: '3',
      createdTime: new Date('2020-10-30 21:00:00'),
      title: 'Which fashion jobs are in demand right now?',
      content: 'Brands are not utilising the potential of regular brand audits enough. The luxury experience has',
    },
  ]

  it('renders 3 activityNews', () => {
    const component = render(<ActivityNews title="Activity feed" contents={contents} />)
    expect(component.find('.date')).toHaveLength(3)
  })
})
