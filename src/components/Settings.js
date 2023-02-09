import React from "react";
import propic from "../images/propic.png";
import frame from "../images/Frame.png";
import update from "../images/update.png";
import users from "../images/users.png";
import smartcard from "../images/smartcard.png";
import { Link } from "react-router-dom";
import printer from "../images/printer.png";
import network from "../images/network.png";


console.log(frame);
console.log(update);
console.log(users);
console.log(smartcard);
console.log(printer);
console.log(network);

 function Settings() {
  return (
    <div>
      <div className="settings">
        <div className="row">
          <div className="col-lg-12" style={{ backgroundColor: "white" }}>
            <div className="card p-5">
              <div className="row">
                <div className="col-sm-2">
                  <img src={propic} alt="propic"></img>
                </div>
                <div className="col-sm-3 mt-3">
                  <h3
                    className="fw-bold"
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "180px",
                    }}
                  >
                    USER
                  </h3>
                  <br />
                  <p
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "180px",
                    }}
                    className="mt-4 fw-bold"
                  >
                    Hospital name
                  </p>
                  <a
                    href="/auth"
                    style={{
                      position: "absolute",
                      left: "180px",
                      color: "#0788D8",
                      textDecoration: "none",
                    }}
                    className="mt-5 fw-bold"
                  >
                    Sign out
                  </a>
                </div>
                <div className="col mb-3
                " style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <ul>
                        <li style={{listStyle: 'none', display: 'inline-block'}}>
                            <Link>
                                <img src={frame} alt='frame'></img>
                            </Link>
                            <p className="text-dark fw-bold">Cloud</p>
                            <p className="text-secondary fw-bold" style={{fontSize: '12px', marginTop: '-18px'}}>Backup</p>
                        </li>
                        <li style={{listStyle: 'none', display: 'inline-block', marginLeft: '40px'}}>
                            <Link>
                                <img src={update} alt='update'></img>
                            </Link>
                            <p className="text-dark fw-bold">update</p>
                            <p className="text-secondary fw-bold" style={{fontSize: '12px', marginTop: '-18px'}}>Last update</p>
                        </li>
                        <li style={{listStyle: 'none', display: 'inline-block', marginLeft: '40px'}}>
                            <Link>
                                <img src={smartcard} alt='smartcard'></img>
                            </Link>
                            <p className="text-dark fw-bold">Smart card</p>
                            <p className="text-secondary fw-bold" style={{fontSize: '12px', marginTop: '-18px'}}>Empowering Patients</p>
                        </li>
                        <li style={{listStyle: 'none', display: 'inline-block', marginLeft: '40px'}}>
                            <Link>
                                <img src={users} alt='users'></img>
                            </Link>
                            <p className="text-dark fw-bold">User Roles</p>
                            <p className="text-secondary fw-bold" style={{fontSize: '12px', marginTop: '-18px'}}>Roles</p>
                        </li>
                    </ul>
                    
                </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <input type='text' placeholder='search' style={{width: '45%', height: '40px', borderColor: '#05467C', borderRadius: '10px', textAlign: 'center'}}></input>
                    </div>
              </div>
            </div>
            <div className="container-fluid">
            <div className="row mt-3 pt-4" style={{marginLeft: '150px'}}>
                <div className="col-sm-2">
                    <Link>
                        <img src={network} alt='net'></img>
                        
                    </Link>
                    <p className="text-dark fw-bold mt-2 ms-4">network</p>
                </div>
                <div className="col-sm-2">
                    <Link to='/printqueue'>
                        <img src={printer} alt='printer' ></img>
                       
                    </Link>
                    <p className="text-dark fw-bold mt-2 ms-4">Printers</p>
                </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
