import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  WrapperForm,
  BtnAdd,
  BtnText,
  Container,
  Input,
  InputTitle,
} from './Form.styles';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit}>
        <Container>
          <label>
            <InputTitle>Name</InputTitle>
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. 
                        Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={handleInputChange}
            />
          </label>
        </Container>

        <Container>
          <label>
            <InputTitle>Number</InputTitle>
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, 
                        круглые скобки и может начинаться с +"
              required
              onChange={handleInputChange}
            />
          </label>
        </Container>

        <BtnAdd type="submit">
          <BtnText>Add contact</BtnText>
          <BsFillPersonPlusFill size={16} />
        </BtnAdd>
      </form>
    </WrapperForm>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
  onChangeInput: PropTypes.func,
};

export default Form;
