import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  HTTP_CLIENT: Joi.required().default('axios'),
  PORT: Joi.number().default(3000),
});
