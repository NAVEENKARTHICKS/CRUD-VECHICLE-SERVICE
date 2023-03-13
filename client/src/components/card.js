import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Card() {

    const [servicedetails, setServicedetails] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3002/personalinfo")
            .then(response => response.json())
            .then(json => setServicedetails(json))

    }, [])

    const dlt = (id) => {
        var key = { id: id };
        var value = { headers: { "enctype": "multipart/form-data" } };
        axios.post('http://localhost:3002/delete', key, value)
            .then(function (res) {
                if (res.data.status === 'error') {
                    alert("Error");
                    window.location.reload();
                }
                else if (res.data.status === 'success') {
                    alert('Deleted');
                    window.location.reload();
                }
            })
            .catch(function (error) {
                alert(error);
                window.location.reload();
            })
    }

    return (
        <>
            <div className='container'>
                <Link to="/"><button type='submit' name='goback' id='goback' className='btn btn-secondary'>Go Back</button></Link>
                <div className='row'>
                    {
                        servicedetails.map((value, index) => (

                            <div className='col-lg-4 mt-5'>

                                <div className='card'>
                                    <div className='card-header '>
                                        <h1>Personal Details</h1>
                                    </div>
                                    <div className='card-body'>
                                        <p>ID:{value.id}</p>
                                        <p>First-name:{value.firstname}</p>
                                        <p>Last-name:{value.lastname}</p>
                                        <p>Email:{value.email}</p>
                                        <p>Date-of-Birth:{value.dob}</p>
                                        <p>Mobile-Number:{value.mobileno}</p>
                                        <p>Vechicle-Number:{value.vechicleno}</p>
                                        <p>Model:{value.model}</p>
                                        <p>About:{value.about}</p>

                                        <Link to={"/update/" + value.id}>
                                            <button type="submit" name="update" id="update" className="ml-5 btn btn-success">Update</button>
                                        </Link>
                                        <button type="button" name="delete" id="delete" className="ml-4 btn btn-danger" onClick={() => { dlt(value.id) }}>Delete</button>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}