import newCustomerSchema from '../schemas/newCustomerSchema.js';

export default function signUpMiddleware(req, res, next) {
  const user = req.body;
  const validation = newCustomerSchema.validate(user, { abortEarly: false });
  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }
  res.locals.user = user;
  next();
}
