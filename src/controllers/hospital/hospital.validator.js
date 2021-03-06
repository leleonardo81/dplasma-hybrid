import Joi from "joi";

export const createHospital = {
  body: Joi.object({
    name: Joi.string().required(),
    address: Joi.alternatives(
      Joi.string(),
      Joi.object({
        detail: Joi.string().required(),
        lat: Joi.number().required(),
        lng: Joi.number().required()
      })
    )
  }),
};
