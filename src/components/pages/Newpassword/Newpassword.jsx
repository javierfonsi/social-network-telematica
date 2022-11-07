import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import "./Newpassword.css"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Newpassword = () => {

    
    const navigate = useNavigate()
    const [showPassword, setShowPassword ] = useState(false)

    const getInitialValues = ()=>{
      return {
        email: "",
        password: ""
      }
    }

    const getValidationSchema = ()=>{
      return Yup.lazy((values) =>
        Yup.object().shape({
          email: Yup.string().required("Campo Obligatorio"),
          password: Yup.string().required("Campo Obligatorio"),
        })
      );
    }

    const onSubmit = ( data )=>{
      let arg = {
        email: data.email,
        password: data.password
      }

      axios.post("https://apprestaurantapijr.herokuapp.com/api/v1/adminuser/login" , arg )
        .then( res => {
          localStorage.setItem( "token", res.data.data.token)
          navigate("/home") 
        })
        .catch( err => console.log(err.response.data.message))

    }

    //const { handleSubmit, values, setFieldValue, errors } = useFormik({
    const { handleSubmit, values, setFieldValue } = useFormik({
      initialValues: getInitialValues(),
      validateOnChange: false,
      validateOnBlur: false,
      enableReinitialize: true,
      validationSchema: getValidationSchema(),
      onSubmit,
    })

  return (
      <section className='main'>
        <div className='main-card'>
          <div className='title'>
            <h3>Recupera tu cuenta</h3>
            <span className='sub-title'>Ingresa tu correo electrónico y nuevo password.</span>
          </div>
          <form className='container-form' onSubmit={handleSubmit}>
            <TextField className='email-field' 
                type="text" 
                label="Correo electrónico" 
                variant="outlined" 
                value={values.email || ""} 
                onChange={ (e)=>{
                  setFieldValue( "email" , e.target.value )
                }}
              />
            <FormControl sx={{ m: 1, width: '37ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
              <OutlinedInput 
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={values.password || ""}
                onChange={ (e)=>{
                  setFieldValue("password", e.target.value)
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={ ()=> setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
            </FormControl>
            <Button variant="contained" color="info" type='submit'>Cambiar contraseña</Button>
            <Button variant="contained" color="secondary" onClick={() => {navigate("/") }}>Cancelar</Button>
          </form>
        </div>
      </section>
  )
}

export default Newpassword