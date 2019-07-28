import Joi from "@hapi/joi";

const loginSchema = {
    email: Joi.string().email({ minDomainSegments: 2 }),
    password: Joi.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
};

export {loginSchema};