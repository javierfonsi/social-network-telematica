import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from "formik";
import * as Yup from "yup";
import "./CreateAccount.css"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Select, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from '../../layaout/footerLayout/Footer';
import { createUser } from '../../../store/auth/thunk';

const CreateAccount = () => {

  const dispatch = useDispatch()

  const { isUserCreate } = useSelector((state)=>state.auth)

  //console.log(isUserCreate)

    
    const navigate = useNavigate()
    const [showPassword, setShowPassword ] = useState(false)

    useEffect(()=>{
      if(isUserCreate){
        navigate('/')
      }

    }, [isUserCreate, navigate])

    const getInitialValues = ()=>{
      return {
        name: "",
        lastname:"",
        email: "",
        phone:"",
        password: "",
        perfil: ""
      }
    }

    const getValidationSchema = ()=>{
      return Yup.lazy((values) =>
        Yup.object().shape({
          name: Yup.string().required("Campo Obligatorio"),
          lastname: Yup.string().required("Campo Obligatorio"),
          email: Yup.string().required("Campo Obligatorio"),
          phone: Yup.string().required("Campo Obligatorio"),
          password: Yup.string().required("Campo Obligatorio"),
          perfil: Yup.string().required("Campo Obligatorio"),
        })
      );
    }

    const onSubmit = ( data )=>{

      //console.log(data)
 
      let arg = {
        name: data.name,
        lastName: data.lastname,
        email: data.email,
        phone: data.phone,
        password: data.password,
        profile: data.perfil
      }

      dispatch(createUser(arg))



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
      <section className='main-newuser'>
          <form className='container-newuser' onSubmit={handleSubmit}>
            <div className='title-newuser'>
              <h3>Registrarte</h3>
              <span>Esto es rápido y fácil.</span>
            </div>
            <div className="name-las">
              <TextField  
                  type="text" 
                  label="Nombre" 
                  variant="outlined" 
                  value={values.name || ""} 
                  onChange={ (e)=>{
                    setFieldValue( "name" , e.target.value )
                  }}
                />
              <TextField  
                  type="text" 
                  label="Apellido" 
                  variant="outlined" 
                  value={values.lastname || ""} 
                  onChange={ (e)=>{
                    setFieldValue( "lastname" , e.target.value )
                  }}
                />
            </div>
            <TextField  sx={{ m: 1, width: '37ch' }}
                type="text" 
                label="Correo electrónico" 
                variant="outlined" 
                value={values.email || ""} 
                onChange={ (e)=>{
                  setFieldValue( "email" , e.target.value )
                }}
              />
            <TextField  sx={{ m: 1, width: '37ch' }}
                type="text" 
                label="Telefono" 
                variant="outlined" 
                value={values.phone || ""} 
                onChange={ (e)=>{
                  setFieldValue( "phone" , e.target.value )
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

            <FormControl sx={{ m: 1, width: '37ch' }}>
              <InputLabel id="select-label">Perfil</InputLabel>
              <Select
                labelId="select-label"
                id="demo-simple-select"
                value={values.perfil || ""}
                label="perfil"
                onChange={ (e)=>{
                  setFieldValue("perfil", e.target.value)
                }}
              >
                <MenuItem value={"Farmacias"}>Farmacias</MenuItem>
                <MenuItem value={"Servicios Medicos<"}>Servicios Medicos</MenuItem>
                <MenuItem value={"Laboratorios"}>Laboratorios</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="success" type='submit'>Registrarte</Button>
          </form>
          <Footer/>
      </section>
  )
}

export default CreateAccount
