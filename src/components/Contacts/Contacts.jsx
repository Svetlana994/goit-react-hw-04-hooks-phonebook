import { ContactItem, BtnText, BtnDelete, NumberText } from './Contacts.styles';
import PropTypes from 'prop-types';
import { BsFillPersonDashFill } from 'react-icons/bs';
import { BiWinkSmile } from 'react-icons/bi';

const Contacts = ({ options, onDelete }) => (
    <ul>
        {options.map(({id, name, number}) => {
            return (<ContactItem key={id}>
                <BiWinkSmile size={18}/>
                {name}:
                <NumberText>{number}</NumberText>
                <BtnDelete type="button" onClick={() => onDelete(id)}>
                    <BtnText>Delete</BtnText>
                    <BsFillPersonDashFill size={16}/>
                    </BtnDelete>
            </ContactItem>)
        })}
        
    </ul>
)

Contacts.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    ),
    onDelete: PropTypes.func.isRequired
};

export default Contacts;