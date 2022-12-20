import Joi from 'joi';

const newCustomerSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  password: Joi.string().min(6).max(50).required(),
  confirmPassword: Joi.ref('password'),
});

export default newCustomerSchema;
