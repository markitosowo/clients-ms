import 'dotenv/config';
import * as joi from 'joi';
const schema = joi
  .object({
    PORT: joi.number().integer().min(1).max(65535).required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);
const { error, value } = schema.validate(process.env);
if (error) throw new Error(`Config validation error: ${error.message}`);
export const envs = {
  PORT: value.PORT as number,
  DATABASE_URL: value.DATABASE_URL as string,
};
