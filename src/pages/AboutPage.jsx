import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About FarmLink</h1>
        <hr />
        <p className="lead text-center">
          Welcome to FarmLink - your trusted partner in connecting farmers and consumers through an innovative and transparent platform. Our mission is to bridge the gap between local farmers and communities by delivering fresh, organic produce directly from farms to your table. At FarmLink, we prioritize sustainability, quality, and fostering a strong connection between farmers and the people they serve.
        </p>

        <h2 className="text-center py-4">Our Categories</h2>
        <div className="row">
          {/* Fresh Fruits */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/5945902/pexels-photo-5945902.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh Fruits"
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Fresh Fruits</h5>
              </div>
            </div>
          </div>

          {/* Organic Vegetables */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/5945953/pexels-photo-5945953.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Organic Vegetables"
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Organic Vegetables</h5>
              </div>
            </div>
          </div>

          {/* Dairy Products */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/5946876/pexels-photo-5946876.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dairy Products"
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Dairy Products</h5>
              </div>
            </div>
          </div>

          {/* Grains & Pulses */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://wholegrainscouncil.org/sites/default/files/thumbnails/image/Assorted-grains-nuts-beans-iStock_000019335226.jpg"
                alt="Grains & Pulses"
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Grains & Pulses</h5>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center py-4">Our Vision</h2>
        <p className="lead text-center">
          We envision a world where fresh, healthy produce is accessible to everyone while supporting local farmers and sustainable practices. By leveraging technology, FarmLink simplifies the process of buying and selling produce, ensuring fair prices for farmers and high-quality products for consumers.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
