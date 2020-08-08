import React from "react";

const Header = () => (
    <div className="App container">
        <header className="navbar navbar-light bg-light">
          <form className="form-inline">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Employee
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button>🔍</button>
            </div>
          </form>
        </header>
        </div>
);

export default Header;