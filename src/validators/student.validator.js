import Joi from "joi";

export const studentValidator = Joi.object({
    firstName: Joi.string().required().min(1), //min is minium content
    lastName: Joi.string().required().min(1),
    phoneNumber: Joi.string().required().min(11).max(13),
});