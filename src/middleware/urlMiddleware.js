import urlSchema from '../schemas/urlSchema.js';

export default function urlMiddleware(req, res, next) {
  const { url } = req.body;
  const validation = urlSchema.validate({ url }, { abortEarly: false });
  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.url = url;
  next();
}
