import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
// import { FormControl, InputLabel, Select } from '@mui/material';

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

const initialValues={
    first_name:'',
    last_name:'',
    email:'',
    password:'',
    img_url:''
}

const handleSubmit=(values)=>{
    console.log(values)
}

export default function RegisterForm(){

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
        {/* optional img url for avatar */}
        <TextField
            id="img_url"
            name="img_url"
            fullWidth
            sx={{width:"40%", ml:20, mb:2, mt:2}}
            label="img_url"
            placeholder="img_url"
            value={formik.values.img_url}
            onChange={formik.handleChange}
            error={formik.touched.img_url && Boolean(formik.errors.img_url)}
            helperText={formik.touched.img_url && formik.errors.img_url}
        />
        <br></br>
        <Button id="register" type="submit" sx={{color: "#b4761a", borderColor: "#b4761a", ml:20, width:"10%"}}>{"Register"}</Button>

        {/* <FormControl fullWidth>
            <InputLabel id="category-label-id">Category</InputLabel>
            <Select
                labelId="category-label-id"
                id="category-id"
                value={formik.values.category_id}
                name="Category_id"
                placeholder="Category"
                label="Category"
                onChange={formik.handleChange}
                error={formik.touched.category_id && Boolean(formik.errors.category_id)}
            >
                    <MenuItem value=""><em>None</em></MenuItem>

                {categories.map((category)=>(
                    <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                )
                )}
                </Select>
                <FormHelperText>{formik.touched.category_id && formik.errors.category_id}</FormHelperText>
        // </FormControl> */}
        {/* <Button type="submit" sx={{width:"100%"}}>{item?"Edit Item":"Create Item"}</Button> */}

    </form>
    )
}