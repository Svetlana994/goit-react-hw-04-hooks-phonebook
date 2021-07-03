import { Container, Input, InputTitle } from './InputName.styles';
import PropTypes from 'prop-types';

const InputName = ({ value, onChangeInput }) => (
    <Container>
        <label>
            <InputTitle>Name</InputTitle>
            <Input
  type="text"
            name="name"
            value={value}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onChangeInput}
            />
            </label>
    </Container>
)

InputName.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired
};

export default InputName;