import React from 'react';
import emailjs from 'emailjs-com';

import PropTypes from 'prop-types';

import './contact.scss';

import {
  Form,
  Button,
  Input,
  TextArea,
  Message,
} from 'semantic-ui-react';


const Contact = ({
  handleChange,
  email,
  content,
  submitted,
  submittedForm,
  resetSubmitted,
}) => {
  const changeValue = (evt) => {
    handleChange(evt.target.value, evt.target.name);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const templateParams = {
      from_name: email,
      to_name: 'François Gaudoin',
      message_html: content,
    };
    emailjs.send(
      'gmail',
      'template_XO4yYpte',
      templateParams,
      'user_Hil61WhnZmF4BIeBn45sN',
    )
      .then(() => {
        submittedForm();
        setTimeout(() => {
          resetSubmitted();
        }, 1500);
      });
  };

  return (
    <Form id="Contact">
      <h1>Entrons en contact</h1>
      {submitted && (
        <Message>Merci pour cet envoi, je vous répondrai rapidement.</Message>
      )}
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          label="Votre adresse email :"
          placeholder="email..."
          onChange={changeValue}
          name="email"
          value={email}
        />
      </Form.Group>
      <Form.Field
        control={TextArea}
        label="Message"
        placeholder="Ecrivez votre message..."
        onChange={changeValue}
        name="content"
        value={content}
      />

      <Form.Field
        className="button-field"
        control={Button}
        onClick={handleSubmit}
      >
        Envoyer
      </Form.Field>
      <p className="text-mail">Je vous répondrai dans les plus brefs délais.</p>
    </Form>
  );
};

Contact.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  submitted: PropTypes.bool.isRequired,
  submittedForm: PropTypes.func.isRequired,
  resetSubmitted: PropTypes.func.isRequired,
};

export default Contact;
