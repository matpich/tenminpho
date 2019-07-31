import Joi from '@hapi/joi';

const loginEmailValidation = email => {
  return Joi.validate(
    email,
    Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
  );
};

const loginPasswordlValidation = email => {
  return Joi.validate(
    email,
    Joi.string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .required()
  );
};

export { loginEmailValidation, loginPasswordlValidation };
