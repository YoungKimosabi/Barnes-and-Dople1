import React, {useState, useContext} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import useEditUser from '../hooks/useEditUser';
import {AppContext} from '../context/AppContext';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        img_url:Yup.string()
    }
)

export default function EditForm(){
    const {user} = useContext(AppContext);
    const[setEditUser] = useState({})

    useEditUser(user?.token)

    const initialValues={
        email:user?.email ?? '',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        password:user?.password ?? ''
    }

    const handleSubmit=(values, resetForm)=>{
        if (user){
            setEditUser(values)
        }
        console.log(values)
        resetForm(initialValues)
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="email"
            name="email"
            fullWidth
            sx={{width:"40%", ml:20, mb:2, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id="first_name"
            name="first_name"
            fullWidth
            sx={{width:"40%", ml:20, mb:2, mt:2}}
            label="first_name"
            placeholder="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
            helperText={formik.touched.first_name && formik.errors.first_name}
        />
        <TextField
            id="last_name"
            name="last_name"
            fullWidth
            sx={{width:"40%", ml:20, mb:2, mt:2}}
            label="last_name"
            placeholder="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
            helperText={formik.touched.last_name && formik.errors.last_name}
        />
        
         <TextField
            id="password"
            name="password"
            fullWidth
            sx={{width:"40%", ml:20, mb:2, mt:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <br></br>
        <Button id="edit_profile" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Edit Profile"}</Button>
    </form>
    )
}