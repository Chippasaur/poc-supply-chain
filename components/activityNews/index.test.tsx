import { render } from 'enzyme'
import { ActivityNewsType } from './ActivityNewsType'
import ActivityNews from './index'

describe('test activity feed type', () => {
  const contents = [
    {
      id: '1',
      createdAt: new Date('2020-11-18 16:00:00'),
      content: '<b>ONUS APPARELS LIMITED.</b> has updated their annual report for 2019-2020',
    },
    {
      id: '2',
      createdAt: new Date('2020-11-02 19:00:00'),
      content: 'Ongoing screening update: New and/or updated matches found for TUA-HA TEX',
    },
    {
      id: '3',
      createdAt: new Date('2020-10-30 21:00:00'),
      title: 'Which fashion jobs are in demand right now?',
      content: 'Brands are not utilising the potential of regular brand audits enough. The luxury experience has',
    },
  ]

  it('renders 3 activityNews', () => {
    const component = render(
      <ActivityNews title="Activity feed" type={ActivityNewsType.ACTIVITY_FEED} contents={contents} />,
    )

    expect(component.find('.date')).toHaveLength(3)
  })

  describe('test recent news type', () => {
    const content = [
      {
        id: '1',
        createdAt: new Date('2020-11-18 16:00:00'),
        title: 'Which fashion jobs are in demand right now?',
        content: 'The credit report of FORTUNE SHOES LTD. has changed from Green to Amber',
      },
      {
        id: '2',
        createdAt: new Date('2020-11-02 19:00:00'),
        title: 'Rubana Huq five-year vision on the Bangladesh RMG history',
        content: 'Ongoing screening update: New and/or updated matches found for TUA-HA TEX',
      },
      {
        id: '3',
        createdAt: new Date('2020-10-30 21:00:00'),
        title: 'Which fashion jobs are in demand right now?',
        content: 'Brands are not utilising the potential of regular brand audits enough',
      },
    ]
  })

  it('renders 3 activityNews', () => {
    const component = render(
      <ActivityNews title="Activity feed" type={ActivityNewsType.RECENT_NEWS} contents={contents} />,
    )
    expect(component.find('.date')).toHaveLength(3)
  })
})
