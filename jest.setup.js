import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

process.env.DB_HOST = 'cluster0.eyebd.mongodb.net'
process.env.DB_NAME = 'poc_supply_chain'
process.env.DB_USER = 'Chippasaur'
process.env.DB_PASS = 'Peace2015'
process.env.USER_EMAIL = 'example@example.com'

configure({
  adapter: new Adapter(),
})
