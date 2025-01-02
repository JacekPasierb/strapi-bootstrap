/**
 * project controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project.project', ({ strapi }) => ({
  async find(ctx) {
    // Ustaw domyślne `populate`
    ctx.query = {
      ...ctx.query,
      populate: '*',
    };

    // Wywołaj domyślną metodę `find`
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
