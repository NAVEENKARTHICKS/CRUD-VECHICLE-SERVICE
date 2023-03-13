import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function Create() {

    const handlesubmit = async (event) => {
        event.preventDefault();
        var key = new FormData(event.target);
        var values = { headers: { 'enctype': 'multipart/form-data' } };

        var firstname = document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById('email').value;
        var dob = document.getElementById('dob').value;
        var mobileno = document.getElementById('mobileno').value;
        var vechicleno = document.getElementById('vechicleno').value;
        var model = document.getElementById('model').value;
        // var numberpattern=/^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

        if (firstname === '' || firstname === null) {
            alert('Enter your firstname');
        }
        else if (lastname === '' || lastname === null) {
            alert('Enter your lastname');
        }
        else if (email === '' || email === null) {
            alert('Enter your email');
        }
        else if (dob === '' || dob === null) {
            alert('Enter your Date-of-Birth');
        }
        else if (mobileno === '' || mobileno === null) {
            alert('Enter your Mobile-Number')
        }
        else if (vechicleno === '' || vechicleno === null) {
            alert('Enter your Vechicle-Number');
        }
        // else if(!numberpattern.test(vehicalno)){
        //     alert('Enter properly your vehical number');
        // }
        else if (model === '' || model === null) {
            alert('Enter your Bike Model');
        }
        else {
            await axios.post('http://localhost:3002/create', key, values)
                .then(function (res) {
                    if (res.data.status === 'error') {
                        alert('Error');
                        window.location.reload();
                    }
                    else if (res.data.status === 'Data successfully inserted') {
                        alert('Data Inserted')
                        window.location.reload();
                    }
                })
                .catch(function (err) {
                    alert(err);
                    window.location.reload();
                })
        }
    }
    return (
        <>
            <div className='container create'>
                <div className='row mt-3'>
                    <div className='col-lg-12 text-center'>
                        <h1>Vechicle Service Management</h1>
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
                            <input type='text' name='firstname' id='firstname' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Last-Name:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='lastname' id='lastname' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Email:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='email' name='email' id='email' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Date-of-Birth:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='date' name='dob' id='dob' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Mobile-No:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='mobileno' id='mobileno' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Vechicle-No:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='vechicleno' id='vechicleno' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>Model:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <input type='text' name='model' id='model' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 text-center'>
                            <h5>About:</h5>
                        </div>
                        <div className='col-lg-3'>
                            <textarea type='text' name='about' id='about' className='form-control' />
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-lg-3'></div>
                        <div className='col-lg-2 mt-4'>
                            <Link to="/"><button type='submit' name='goback' id='goback' className='btn btn-dark'>Go Back</button></Link>
                        </div>
                        <div className='col-lg-3 mt-4'>
                            <button type='submit' name='submit' id='submit' className=' col-lg-12 btn btn-primary'>Create Account</button>
                        </div>
                        <div className='col-lg-4'></div>
                    </div>
                </form>
            </div>
        </>
    )
}