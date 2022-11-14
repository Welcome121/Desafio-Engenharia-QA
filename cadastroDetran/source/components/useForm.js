import React, { useState } from 'react';


export default function useForm(initialFormValues, validateOnChange=false, validate) {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });

        if(validateOnChange) { validate({ [name]: value }); }
    };

    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };
}

export function Form(props) {

    const { children, ...other } = props;

    return (
        <form
            style={{
                '& .MuiFormControl-root': {
                    width: '80%',
                    margin: '10px',
                }
            }} 
            autoComplete="off" 
            {...other}
        >
            {children}
        </form>
    );

}