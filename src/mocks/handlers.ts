// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

export const handlers = [
  rest.get('/api', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        test: '123',
      })
    );
  }),
];
