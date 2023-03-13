import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Image1 from './service.jpeg';
import Image2 from './service1.jpeg';
import Image3 from './service2.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

export default function Front() {
    return (
        <>
            <div className="container-fluid">
                <div className='row bg-warning'>

                    <div className='col-lg-4 mt-2'>
                        <h1>VECHICLE SERVICE</h1>
                    </div>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4 text-center mt-3'>
                        <Link to={'/create'}>
                            <button type='button' id='button' name='button' className='btn btn-danger'> Create Account </button>
                        </Link>
                        {/* <Link to={'/Signin'}>
                            <button type='button' id='button1' name='button1' className='btn btn-success'> Signin </button>
                        </Link> */}
                        <Link to={'/personalinfo'}>
                            <button type='button' id='button1' name='button1' className='ml-2 btn btn-secondary'>Personal Details </button>
                        </Link>
                    </div>
                </div>
                <div className='row'>

                    <Carousel className='w-100 car'>
                        <Carousel.Item>
                            <img
                                className="d-block car1"
                                src={Image1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block car1"
                                src={Image2}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block car1"
                                src={Image3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </div>
            </div>
        </>
    )
}