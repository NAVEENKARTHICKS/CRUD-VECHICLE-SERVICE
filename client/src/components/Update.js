import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Update() {

    const { id } = useParams();

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [dob, setdob] = useState('');
    const [mobileno, setmobileno] = useState('');
    const [vechicleno, setvechicleno] = useState('');
    const [model, setmodel] = useState('');
    const [about, setabout] = useState('');

    useEffect(() => {
        fetch("http://localhost:3002/update/" + id + "")
            .then(Response => Response.json())
            .then(function (res) {
                setfirstname(res[0].firstname);
                setlastname(res[0].lastname);
                setemail(res[0].email);
                setdob(res[0].dob);
                setmobileno(res[0].mobileno);
                setvechicleno(res[0].vechicleno);
                setmodel(res[0].model);
                setabout(res[0].about);
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }, [])


    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var value = { headers: { "enctype": "multipart/form-data" } };



        await axios.put("http://localhost:3002/updatedata/" + id + '', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("Error");
                    window.location.href = "/";
                }
                else if (res.data.status === 'success') {
                    alert('Data Updated Successfully');
                    window.location.href = "/";
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.href = "/";
            })
    }

    return (
        <>
            <div className='container bg-light'>
                <div className='row mt-3'>
                    <div className='col-lg-12 text-center'>
                        <h1>Vehical Service Management</h1>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-12 text-danger text-center'>
                        <h1>Registration</h1>
                    </div>
                </div>
                <form onSubmit={handlesubmit}>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>First-Name:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='firstname' id='firstname' className='form-control' value={firstname} onChange={(a) => setfirstname(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Last-Name:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='lastname' id='lastname' className='form-control' value={lastname} onChange={(a) => setlastname(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Email:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='email' name='email' id='email' className='form-control' value={email} onChange={(a) => setemail(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Date-of-Birth:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='date' name='dob' id='dob' className='form-control' value={dob} onChange={(a) => setdob(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Mobile-No:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='mobileno' id='mobileno' className='form-control' value={mobileno} onChange={(a) => setmobileno(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Vechicle-No:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='vechicleno' id='vechicleno' className='form-control' value={vechicleno} onChange={(a) => setvechicleno(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Model:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='model' id='model' className='form-control' value={model} onChange={(a) => setmodel(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>About:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <textarea type='text' name='about' id='about' className='form-control' value={about} onChange={(a) => setabout(a.target.value)}/>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-4'></div>
                        <div className='col-lg-2'>
                        <Link to="/personalinfo"><button type='submit' name='goback' id='goback' className='btn btn-dark'>Go Back</button></Link>
                        </div>
                        <div className='col-lg-2'>
                            <button type='submit' name='submit' id='submit' className=' col-lg-12 btn btn-primary'>Update</button>
                            
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                </form>
            </div>
        </>
    )
}