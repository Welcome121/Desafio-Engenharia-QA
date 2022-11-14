import React, { useEffect } from 'react';

import { Button, Grid } from '@mui/material';

import useForm from './useForm';
import Input from './Input';


const INITIAL_FORM_VALUES = {
    id: null,
    name: null,
    age: null,
    occupation: null,
    email: null,
    phoneNumber: null,
    fillDate: null,
};

export default function CustomerForm(props) {

    const { addOrEdit, recordForEdit } = props;

    const validate = (fieldValues = values) => {
        let auxObject = {};

        if("name" in fieldValues) { auxObject.name = fieldValues.name != null? "" : "Insira seu nome"; }
        if("age" in fieldValues) { auxObject.age = fieldValues.age != null? "" : "Insira sua idade"; }
        if("occupation" in fieldValues) { auxObject.occupation = fieldValues.occupation != null? "" : "Insira sua profissão"; }
        if("email" in fieldValues) { auxObject.email = fieldValues.email != null? "" : "Insira seu email"; }
        if("phoneNumber" in fieldValues) { auxObject.phoneNumber = fieldValues.phoneNumber != null? "" : "Insira seu número de celular"; }
        if("fillDate" in fieldValues) { auxObject.fillDate = fieldValues.fillDate != null? "" : "Insira a data de preenchimento do formulário" }

        setErrors({
            ...auxObject
        });

        if(fieldValues == values) { return Object.values(auxObject).every(item => item == ""); }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()) {
            addOrEdit(values, resetForm);
        }
    };

    const {
        values, 
        setValues,
        errors, 
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(INITIAL_FORM_VALUES, false, validate);

    useEffect(() => {
        if(recordForEdit != null) {
            setValues(recordForEdit);
        }
    }, [recordForEdit]);

    return (
        <form
            onSubmit={handleSubmit}
            autoComplete='off'

            style={{
                '& .MuiFormControl-root': {
                    width: '80%',
                    margin: '10px',
                }
            }}
        >
            <Grid container spacing={5}>
                <Grid container item spacing={2} direction='column' xs={6}>
                    <Grid item>
                        <Input 
                            label='Nome Completo'
                            name='name'
                            value={values.name}
                            onChange={handleInputChange}
                            error={errors.name}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            label='Idade'
                            name='age'
                            value={values.age}
                            onChange={handleInputChange}
                            error={errors.age}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            label='Email'
                            name='email'
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} direction='column' xs={6}>
                    <Grid item>
                        <Input 
                            label='Telefone'
                            name='phoneNumber'
                            value={values.phoneNumber}
                            onChange={handleInputChange}
                            error={errors.phoneNumber}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            label='Profissão'
                            name='occupation'
                            value={values.occupation}
                            onChange={handleInputChange}
                            error={errors.occupation}
                        />
                    </Grid>
                    <Grid item>
                        <Input 
                            label='Data de preenchimento'
                            name='fillDate'
                            value={values.fillDate}
                            onChange={handleInputChange}
                            error={errors.fillDate}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={2} direction='row' justifyContent='end' sx={12}>
                    <Grid item>
                        <Button
                            variant='contained'
                            type='submit'
                        >
                            Adicionar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button>
                            Limpar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}
