import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios'
import "./login.css"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from '../../layaout/footerLayout/Footer';
//import imagen from './tele.jpg'
//import Footer from ".../layaout/";

const Login = () => {

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
    <div className='layaut'>
      <section className='main'>
        <div className='main-card'>
          <div className='title'>
            {/*<img className='logo' src={imagen} alt="" />*/}
            {/*<h3>Iniciar sesión </h3>*/}
            <h1>telematica</h1>
            <h2 className='slogan'>Telemática te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
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
            <FormControl sx={{ m: 1, width: '38ch' }} variant="outlined">
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
              <Button className='email-field' variant="contained" color="info" type='submit'>Iniciar sesión</Button>
              <Button variant="text" color="info" >¿Olvidaste tu contraseña?</Button>
              <Button variant="contained" color="success" onClick={() => {alert('clicked'); }}>Crear cuenta nueva</Button>
          </form>
        </div>
      <Footer/>
      </section>
    </div>
  )
}

export default Login