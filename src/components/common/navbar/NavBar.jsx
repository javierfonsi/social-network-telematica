import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import "./Navbar.css";
import imagen from "./tele.jpg";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/auth/authSlice";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
//import { indigo } from '@mui/material/colors';
//import SettingsIcon from '@mui/icons-material/Settings';

const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //const joha = indigo[900]

  const out = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="container-navbar">
      <section className="main-navbar">
        <div className="title-logo">
          <img className="log" src={imagen} alt="logo-telematica" />
          <h3 className="title-navbar">Telemática</h3>
        </div>

        <div className="four-elements">
          <div className='three-elements'>
            <Button className='for-but-header' variant="contained" color='info' type='submit'
            sx={{ '@media print': { width: 300, }, size:'large',
            }}
            >Anuncios</Button>
            <Button className='req-but-header' variant="contained" color='info' type='submit'>Ventas</Button>
            <Button className='for-but-header' variant="contained" color='info' type='submit'>Mensajes</Button>
          </div>
          <div className="logout-nav">
          <Button className='req-but-header' variant="contained" color="success" type='submit'>Perfil</Button>
          <MeetingRoomIcon className='end-session' fontSize='small' onClick={() => out()  }/>
          {/*<MeetingRoomIcon fontSize='small' onClick={() => out()  }/>*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
