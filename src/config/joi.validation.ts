import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  HTTP_CLIENT: Joi.string().default('axios'),
  PORT: Joi.when('NODE_ENV', {
    is: 'production',
    then: Joi.forbidden(), // It is not used on Prod
    otherwise: Joi.number().default(3000),
  }),
});
