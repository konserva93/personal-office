// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import { serviceGroups } from './serviceGroups';

export const handlers = [
  rest.get('/servicegroups', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        Object.keys(serviceGroups).map((id) => ({
          id,
          title: serviceGroups[id].title,
        })),
      ),
    );
  }),
  rest.get('/servicegroups/:id', (req, res, ctx) => {
    console.log(req);
    const { id } = req.params;
    if (typeof id === 'string') {
      return res(
        ctx.status(200),
        ctx.json({
          id,
          ...serviceGroups[id],
        }),
      );
    } else {
      return res(ctx.status(500));
    }
  }),
];
