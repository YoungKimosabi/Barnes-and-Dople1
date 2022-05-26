import React from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
// import { FormControl, InputLabel, Select } from '@mui/material';


// let categories=[{id:1,name:"Shirts"},{id:2,name:"Shoes"},{id:3, name:"Hats"}]

//Defining our yup validation
const FormSchema = Yup.object(
    {
        first_name:Yup.string().required(),
        last_name:Yup.string().required(),
        email:Yup.string().email("Must be a Valid Email Format").required(),
        password:Yup.string().required(),
        img:Yup.string()
    }
)

const handleSubmit=(values)=>{
    console.log(values)
}

export default function RegisterForm({ user={id:1,
                first_name:"TestFirst",
                last_name:'TestLast',
                email:"test@test.com",
                password:"test123",
                img:'test_image.png'}
            }){
            
        const initialValues={
            id:user?.id ?? '',
            first_name:user?.first_name ?? '',
            last_name:user?.last_name ?? '',
            email:user?.email ?? '',
            password:user?.password ?? '',
            img:user?.img ?? ''
        }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })
    return(
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id="first_name"
            name="first_name"
            fullWidth
            sx={{mb:2, mt:2}}
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
            sx={{mb:2}}
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
            sx={{mb:2}}
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
            sx={{mb:2}}
            label="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
            id="img"
            name="img"
            fullWidth
            sx={{mb:2}}
            label="img"
            placeholder="img"
            value={formik.values.img}
            onChange={formik.handleChange}
            error={formik.touched.img && Boolean(formik.errors.img)}
            helperText={formik.touched.img && formik.errors.img}
        />

        <Button id="register" type="submit" sx={{width:"10%"}}>{"Register"}</Button>

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