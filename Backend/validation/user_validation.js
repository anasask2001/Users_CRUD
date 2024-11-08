"use strict"
import Joi from 'joi';

const user_validation = Joi.object({
 
  name: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.base': 'Name should be a string',
      'string.empty': 'Name cannot be empty',
      'any.required': 'Name is required',
    }),
  
  email: Joi.string()
    .email() 
    .required() 
    .messages({
      'string.base': 'Email should be a string',
      'string.empty': 'Email cannot be empty',
      'string.email': 'Email format is invalid',
      'any.required': 'Email is required',
    }),
  

  age: Joi.number()
    .integer() 
    .min(0)
    .required() 
    .messages({
      'number.base': 'Age must be a number',
      'number.min': 'Age must be greater than or equal to 0',
      'any.required': 'Age is required',
    }),
});

export { user_validation };
