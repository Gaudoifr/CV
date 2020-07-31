export const CHANGE_VALUE_FORM = 'CHANGE_VALUE_FORM';
export const FORM_SUBMITTED = 'FORM_SUBMITTED';
export const RESET_SUBMITTED = 'RESET_SUBMITTED';

export const handleChange = (newValue, identifier) => ({
  type: CHANGE_VALUE_FORM,
  newValue,
  identifier,
});

export const sumittedForm = () => ({
  type: FORM_SUBMITTED,
});

export const resetSubmitted = () => ({
  type: RESET_SUBMITTED,
});
