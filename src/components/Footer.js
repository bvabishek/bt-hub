import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="page-footer mt-2" style={{backgroundColor: '#C0C0C0', opacity:'97%'}}>
      <div className="footer-copyright text-center py-3 text-dark">
      <Link to='/mainpage' style={{textDecoration: 'none'}}>
      <button className="btn ms-4" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: '#05467C'}}><i className="fas fa-home fa-lg p-2" style={{color: 'white', fontSize: '25px'}}></i></button>
      </Link>
      </div>
    </footer>
  );
}

export default Footer;
