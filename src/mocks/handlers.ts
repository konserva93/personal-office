// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { serviceGroups } from './serviceGroups';

export const handlers = [
  rest.get('/api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        test: '123',
      })
    );
  }),
  rest.get('/servicegroups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(serviceGroups));
  }),
];
