import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

//Defining our yup validation
const FormSchema = Yup.object(
    {
        email:Yup.string().email("Must be a valid email format").required(),
        password:Yup.string().required()
    }
)

const initialValues={
    email:'',
    password:''
}

const handleSubmit=(values)=>{
    console.log(values)
}

export default function LoginForm(){

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })
    return(
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="email"
            name="email"
            fullWidth
            sx={{width:"55%", ml:20, mb:2, mt:2}}
            label="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
            id="password"
            name="password"
            type="password"
            fullWidth
            sx={{outlineColor:"#C9B79C", borderColor:"#C9B79C", placeholder: "#C9B79C", width:"55%", ml:20, mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <br></br>
        <Button id="login" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, mb:2, width:"15%"}}>{"Login"}</Button>
    </form>
    )
}