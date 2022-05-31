import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';

const FormSchema=Yup.object(
    {
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        img:Yup.string()
    }
)

export default function EditForm({user={id:1}}){

    const initialValues={
        id:user?.id ?? '',
        first_name:user?.first_name ?? '',
        last_name:user?.last_name ?? '',
        email:user?.email ?? '',
        password:user?.password ?? '',
        img:user?.img ?? ''
        }

    const handleSubmit=(values, resetForm)=>{
        if (user){
            console.log('Editing profile')
        }else{
            console.log('Viewing profile')
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
            <TextField
                id="img_url"
                name="img_url"
                sx={{width:"40%", ml:20, mb:2, mt:2}}
                label="img_url"
                placeholder="img_url"
                value={formik.values.img_url}
                onChange={formik.handleChange}
                error={formik.touched.img_url && Boolean(formik.errors.img_url)}
                helperText={formik.touched.img_url && formik.errors.img_url}
            />
            <br></br>
            <Button id="edit" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{user?"Edit":"View"}</Button>
            {/* not sure if this is like a toggle button? need to go back and edit */}
    </form>
    )
};
