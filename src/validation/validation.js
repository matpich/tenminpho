import Joi from '@hapi/joi';

const emailValidation = email => {
  return Joi.validate(
    email,
    Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
  );
};

const passwordlValidation = pass => {
  return Joi.validate(
    pass,
    Joi.string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
      .required()
  );
};

const nickNameValidation = nick => {
  return Joi.validate(
    nick,
    Joi.string()
      .min(3)
      .required()
  );
};

export { emailValidation, passwordlValidation, nickNameValidation };
