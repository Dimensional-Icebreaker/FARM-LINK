import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            style={{
              height: "400px", // Reduce the height of the image
              width: "100%", // Ensure it spans the full width of the container
              objectFit: "cover", // Maintain the aspect ratio
            }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5
                className="card-title fs-1 text fw-bold"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  color: "white", // Text color for contrast
                  display: "inline-block", // Ensures the background fits the text width
                  padding: "10px 20px",
                  borderRadius: "5px",
                }}
              >
                Seasonal Harvest
              </h5>
              <p
                className="card-text fs-5 d-none d-sm-block"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
                  color: "white", // Text color for contrast
                  display: "inline-block", // Ensures the background wraps the text content only
                  padding: "10px 20px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  maxWidth: "600px", // Restricts the width of the paragraph to a readable size
                }}
              >
                From Farm to your Table - Fresh and Organic Produce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
