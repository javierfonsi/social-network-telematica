import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from '../../layaout/footerLayout/Footer';
import { userLogin } from '../../../store/auth/thunk';

const Login = () => {
    const {userInfo, isAutenticate} = useSelector((state)=>state.auth)

    const dispatch = useDispatch() 

    const navigate = useNavigate()
    const [showPassword, setShowPassword ] = useState(false)

    useEffect(()=>{
      if(userInfo && isAutenticate){
        navigate('/home')
      }

    }, [userInfo, navigate, isAutenticate])

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

    const onSubmit = ( x )=>{
      let data = {
        email: x.email,
        password: x.password
      }

      dispatch(userLogin(data))



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
              <Button className='email-field' variant="contained" color="info" type='submit'>Iniciar sesión</Button>
              <Button variant="text" color="info" onClick={() => {navigate("/newpassword") }}>¿Olvidaste tu contraseña?</Button>
              <Button variant="contained" color="success" onClick={() => {navigate("/newuser") }}>Crear cuenta nueva</Button>
          </form>
        </div>
        <Footer/>
      </section>
    </div>
  )
}

export default Login