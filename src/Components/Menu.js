import React from "react";

const Menu = () => {
  return (
    <>
      <div className="card-deck">
        <div className="row ">
          <div className="col-md-3  align-items-stretch">
            <div className="card border-dark mb-3 m-3 p-3 bg-warning ">
              <div card-header>
                <img
                  src="http://3.bp.blogspot.com/_HPXWOvg7RcM/TSAlV0uVAnI/AAAAAAAAACo/kdGktUbFux8/s1600/burger.jpg"
                  className="card-img-top"
                  alt="loading..."
                ></img>
              </div>
              <div card-body>
                <h5 className="card-title">Chicken Burger</h5>
                <br></br>
                <h5>Price: $4.50</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3  align-items-stretch">
            <div className="card border-dark m-3 p-3 bg-warning">
              <div card-header>
                <img
                  src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
                  className="card-img-top"
                  alt="loading..."
                ></img>
              </div>
              <div card-body>
                <h5 className="card-title">Chicken Pizza</h5>
                <br></br>
                <h5>Price: $5.50</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3  align-items-stretch">
            <div className="card border-dark m-3 p-3 bg-warning">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.HKGL8beAHM_2OoxmKeckxQHaFj&pid=Api&P=0&h=180"
                className="card-img-top"
                alt="loading..."
              ></img>
              <div card-body>
                <h5 className="card-title">Macroni</h5>
                <br></br>
                <h5>Price: $3.50</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 align-items-stretch">
            <div className="card border-dark m-3 p-3 bg-warning">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.pA3QV9le3tWkxzb9gqli0gHaFj&pid=Api&P=0&h=180"
                className="card-img-top"
                alt="loading..."
              ></img>
              <div card-body>
                <h5 className="card-title">Chicken Biryani</h5>
                <br></br>
                <h5>Price: $8.50</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Menu;
