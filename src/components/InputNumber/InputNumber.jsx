import { Container, Input, InputTitle } from './InputNumber.styles';
import PropTypes from 'prop-types';

const InputNumber = ({value, onChangeInput }) => (
    <Container>
        <label>
            <InputTitle>Number</InputTitle>
            <Input
  type="tel"
            name="number"
            value={value}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={onChangeInput}
            />
            </label>
    </Container>
)

InputNumber.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeInput: PropTypes.func.isRequired
};

export default InputNumber;