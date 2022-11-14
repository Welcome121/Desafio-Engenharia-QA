import React, { useState } from 'react';

import { Button, Dialog, DialogContent, DialogTitle, IconButton, InputAdornment, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Tooltip } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import Add from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

import Title from '../source/components/Title';
import CustomerForm from '../source/components/CustomerForm';
import Header from '../source/components/Header';
import Footer from '../source/components/Footer';


const TABLE_HEAD_CELLS = [
    { id: "name", label: "Nome" },
    { id: "age", label: "Idade" },
    { id: "occupation", label: "Profissão" },
    { id: "email", label: "Email" },
    { id: "phoneNumber", label: "Telefone" },
    { id: "fillDate", label: "Data de Preenchimento" },
    { id: 'actions', label: '', disableSorting: true }
];

export default function Customers() {

    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState("");
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);

    const customersFilter = () => {
        if(search=="") { return customers; }
        else { return customers.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) || person.age.includes(search) || person.occupation.toLowerCase().includes(search.toLowerCase()) || person.email.toLowerCase().includes(search.toLowerCase()) || person.phoneNumber.includes(search) || person.fillDate.includes(search)); }
    }

    const addOrEdit = async (customer, resetForm) => {
        if(customer.id == null) {
            customer.id = customers.length;
            
            setCustomers(customers.concat(customer));
        } else {
            setCustomers(customers.map(item => item.id == customer.id? customer : item));
        }
        
        resetForm();
        setOpenPopup(false);
        setRecordForEdit(null);
    }

    const openInPopup = customer => {
        setRecordForEdit(customer);
        setOpenPopup(true);
    }
    
    const handdleDeleteCustomer = (customerId) => {
        setCustomers([
            ...customers.slice(0, customerId),
            ...customers.slice(customerId + 1)
        ]);
    }

    return (
        <>
            <Header />

            <Title>
                Clientes
            </Title>

            <Paper
                variant='outlined'
                sx={{
                    margin: "30px",
                    padding: "10px"
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: "15px",
                    }}
                >
                    <TextField 
                        variant='outlined'
                        label='Pesquisar cliente'
                        placeholder='por qualquer campo...'
                        onChange={(e) => setSearch(e.target.value)}
                        autoComplete='off'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon  />
                                </InputAdornment>
                            )
                        }}

                        sx={{
                            width: "60%"
                        }}
                    />

                    <Button
                        variant='contained'
                        color='secondary'
                        size='small'
                        startIcon={<Add />}

                        sx={{
                            width: "225px"
                        }}

                        onClick={() => {
                            setOpenPopup(true);
                            setRecordForEdit(null);
                        }}
                    >
                        ADICIONAR CLIENTE
                    </Button>
                </Toolbar>

                <Table>
                    <TableHead
                        sx={{
                            backgroundColor: "primary.main"
                        }}
                    >
                        <TableRow>
                            {
                                TABLE_HEAD_CELLS.map(headCell => (
                                    <TableCell
                                        key={headCell.id}
                                        sx={{
                                            padding: "8px",
                                            color: "primary.contrastText",
                                            textAlign: "left"
                                        }}
                                    >
                                        { headCell.label }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            customersFilter().map(customer => (
                                <TableRow
                                    key={customer.id}
                                    sx={[
                                        {
                                            "&.hover": {
                                                backgroundColor: "primary.light"
                                            }
                                        }
                                    ]}
                                >
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.name }</TableCell>
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.age }</TableCell>
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.occupation }</TableCell>
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.email }</TableCell>
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.phoneNumber }</TableCell>
                                    <TableCell sx={{textAlign: "left", p: "16px 8px"}}>{ customer.fillDate }</TableCell>
                                    <TableCell sx={{textAlign: "center", p: "16px 8px"}}>
                                        <Tooltip
                                            title="Editar"
                                            placement="top"
                                        >
                                            <IconButton onClick={() => {openInPopup(customer)}}>
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            title="Excluir"
                                            placement="top"
                                        >
                                            <IconButton onClick={() => {handdleDeleteCustomer(customer.id)}}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
            <Footer />
            <Dialog
                open={openPopup}
                maxWidth='xl'
                fullWidth
            >
                <DialogTitle
                    sx={{
                        height: "50px",

                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        
                        backgroundColor: "primary.main",
                        color: "white"
                    }}
                >
                    Cadastro novo Cliente
                    <IconButton>
                        <CloseIcon 
                            sx={{ color: "white" }} 
                            onClick={() => { setOpenPopup(false); }}
                        />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <CustomerForm 
                        addOrEdit={addOrEdit}
                        recordForEdit={recordForEdit}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
