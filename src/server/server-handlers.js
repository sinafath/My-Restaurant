import {rest} from 'msw' 
import faker from "faker";
const handlers = [
  rest.post('http://localhost/api/login', async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ user: faker.userName }))
  }),
  rest.post('http://localhost/api/register', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ user: faker.userName }))
}),
]

export {handlers}