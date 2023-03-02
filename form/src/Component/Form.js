
import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {

    const [inputValues, setInputValue] = useState({
        userName: "",
        state: "",
        gender: "",
        phoneNumber: "",
        address: ""

    });

    const [validation, setValidation] = useState({
        userName: "",
        state: "",
        gender: "",
        phoneNumber: "",
        address: ""

    });



    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }


    const checkValidation = () => {
        let errors = validation;
    

        if (!inputValues.userName.trim()) {
            errors.userName = "User name is required";
        } else {
            errors.userName = "";
        }



        if (!inputValues.state.trim()) {
            errors.state = "State name is required";
        } else {
            errors.state = "";
        }




        const numCond =
            "^[7-9][0-9]{9}$";
        if (!inputValues.phoneNumber.match(numCond)) {
            errors.phoneNumber = "Please ingress a valid number";
        } else {
            errors.phoneNumber = "";
        }


        if (!inputValues.address.trim()) {
            errors.address = "Address is required";
        } else {
            errors.address = "";
        }



        setValidation(errors);
    };
    useEffect(() => {
        checkValidation();
    }, [inputValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className='formLabel'>Registration Form</div>
            <div className='outer'>

                <div className='divBox'>
                    <div className='inner'>

                        <form >
                            <div className='nameLabel'> <label >Name</label></div>


                            <div className='nameInp'>  <input
                                name='userName'
                                id='userName'
                                type='text'
                                className='inputField'
                                placeholder='Enter name here'
                                onChange={(e) => handleChange(e)}
                                value={inputValues.userName}
                            />
                            </div>
                            {validation.userName && <p style={{ color: "red" }}>{validation.userName}</p>}
                            {validation.userName && console.log(validation)}

                            <div className='genderLabel'><label >Gender</label></div>

                            <div className='spanDiv'>
                                <span><input type="radio" value="MALE" name="gender" /> Male</span>
                                <span> <input type="radio" value="FEMALE" name="gender"/> Female</span>
                            </div>




                            <div className='stateLabel'>
                                <label>State</label></div>

                            <div className='stateInp'> <input
                                name='state'
                                id='state'
                                type='text'
                                className='inputField'
                                placeholder='Enter state here'
                                onChange={(e) => handleChange(e)}
                                value={inputValues.state}
                            /></div>
                            {validation.state && <p style={{ color: "red" }}>{validation.state}</p>}

                            <div className='phoneLabel'>
                                <label>PhoneNumber</label></div>

                            <div className='phoneInp'> <input
                                name='phoneNumber'
                                type='number'
                                id='phoneNumber'
                                className='inputField'
                                placeholder='Enter phonenumber here'
                                onChange={(e) => handleChange(e)}
                                value={inputValues.phoneNumber}

                            /></div>
                            {validation.phoneNumber && <p style={{ color: "red" }}>{validation.phoneNumber}</p>}

                            <div className='addressLabel'> <label>Address</label></div>
                            <div className='addressInp'> <input
                                name='address'
                                id='address'
                                placeholder='Enter Your Address'
                                type='text'
                                onChange={(e) => handleChange(e)}
                                value={inputValues.address}

                            /></div>
                            {validation.address && <p style={{ color: "red" }}>{validation.address}</p>}
                            <br />
                            <div className='btnInp'>  <input
                                className='submitButton'
                                type='submit'
                                value='Submit'
                                onClick={checkValidation}
                            /></div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;