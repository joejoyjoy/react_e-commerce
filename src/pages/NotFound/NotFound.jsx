import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import Img404 from '../../assets/Img/undraw_404.jpg'

function NotFound() {
  return (
    <div className="container-404">
      <Link className="goBack pointer link-404" to={'/'}>&lt; BACK TO SHOPPING</Link>
      <img src={Img404} alt="404 error page not found" />
    </div>
  );
}

export default NotFound;