import {rest} from 'msw' 
import faker from "faker";
import { NEXT_URL } from '../Config';
const handlers = [
  rest.post(`${NEXT_URL}/api/auth/login`, async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({ user: faker.userName }))
  }),
  rest.post(`${NEXT_URL}/api/auth/register`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ user: faker.userName }))
}),
]

export {handlers}