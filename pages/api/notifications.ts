import { NextApiRequest, NextApiResponse } from 'next'
import { NotificationPo } from '../../po/notificationPo'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const Notification = NotificationPo()

  if (req.method === 'POST') {
    const { supplierName, type } = req.body

    if (supplierName && type) {
      try {
        const notification = new Notification({
          supplierName: supplierName,
          type: type,
        })
        const notificationSaved = await notification.save()
        return res.status(200).send(notificationSaved)
      } catch (error) {
        return res.status(500).send(error.message)
      }
    } else {
      res.status(400).send('data_incomplete')
    }
  }

  if (req.method === 'GET') {
    let notifications = null
    try {
      notifications = await Notification.find({})
    } catch (error) {
      console.error(error)
      return res.status(500).send(error.message)
    }

    res.json(notifications)
  }
}
