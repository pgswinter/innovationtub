import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errorsInput = {};

  if (data.firstname === "") {
    errorsInput.firstname = 'This field is required';
  }
  if (data.lastname === "") {
    errorsInput.lastname = 'This field is required';
  }

  return {
    errorsInput,
    isValidInput: isEmpty(errorsInput)
  }
}