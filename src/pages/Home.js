import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";


const Home = () => {
    return (
        <>
            <div className="container-fluid">
                <Navbar />
                <div className="row header-cgp py-5">
                    <div className="col-12 text-center">
                        <div className="mt-2">
                            <h1 className="">Welcome to <br/><strong>Capital Growth</strong> <br/>Partners</h1>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-primary me-1">Book a Meet</button>
                                <button className="btn btn-secondary ms-1">Call Us</button>
                            </div>
                            <div>
                                <img className="header-img" src="assets/images/investing-1.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;