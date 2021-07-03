import { Component } from "react";
import PropTypes from 'prop-types';
import InputName from '../InputName/InputName';
import InputNumber from '../InputNumber/InputNumber';
import { WrapperForm, BtnAdd, BtnText } from './Form.styles';
import { BsFillPersonPlusFill } from 'react-icons/bs';


class Form extends Component {

    state = {
        name: '',
        number: ''
    }

handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value
    })
    }
    
handleSubmit = (event) => {
    event.preventDefault();

  this.props.onSubmit(this.state);

  this.resetForm();
  }

resetForm = () => {
    this.setState({ name: '', number: '' });
  }

    render() {
        return (
        <WrapperForm>
            <form onSubmit={this.handleSubmit}>
                <InputName
            value={this.state.name}
            onChangeInput={this.handleInputChange}
            />
            <InputNumber
            value={this.state.number}
            onChangeInput={this.handleInputChange}
          />

            <BtnAdd
                type="submit"
                    ><BtnText>Add contact</BtnText>
            <BsFillPersonPlusFill size={16}/>
            </BtnAdd>
            </form>
        </WrapperForm> 
        )
    }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default Form;