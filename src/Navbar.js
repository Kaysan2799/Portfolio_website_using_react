import "./Styles.css"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid" >
          <li>
            <b href="/">
              <img className="logo-icon" src="logo.png" alt="" href='/' />
            </b>
          </li>
          <a className="navbar-brand" href="/" > <span>Abdul</span> Malik</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn1" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;