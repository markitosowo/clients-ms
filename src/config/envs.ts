
import { constants } from 'buffer';

import 'dotenv/config';
import joi from 'joi';
import { reportUnhandledError } from 'rxjs/internal/util/reportUnhandledError';

interface EnvVars{
    PORT: number;
}
const envsSchema = joi.object<EnvVars>({
    PORT: joi.number().integer().min(1).max(65535).required()
}).unknown(true);

const resul = envsSchema.validate(process.env, {abortEarly:false})
if(resul.error){
    throw new Error(`Config validation error: ${resul.error.message}`);
}
const envVars = resul.value;

export const envs = {
    port: envVars.PORT
}as const;
