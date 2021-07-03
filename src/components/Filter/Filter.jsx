import { ContactTitle, InputFind } from './Filter.styles';
import PropTypes from 'prop-types';

function Filter({value, onChange}) {
    return (
        <div>
            <ContactTitle>Find contacts by name</ContactTitle> 
            <InputFind
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;
