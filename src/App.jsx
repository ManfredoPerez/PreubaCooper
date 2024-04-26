import {Navbar, Nav, Container} from 'react-bootstrap'

import './App.css'
import MovieEstreno from './Pages/MovieEstrenos'
import MovieAccion from './Pages/MovieAccion'
import MovieTreding from './Pages/MovieTreding'


function App() {



  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto h4'>
                <Nav.Link className='display-1' href="#">Inicio</Nav.Link>
                <Nav.Link className='h1' href="#">Genero</Nav.Link>
                <Nav.Link className='h1' href="#">Pais</Nav.Link>
                <Nav.Link className='h1' href="#">TV Shows</Nav.Link>
                <Nav.Link className='h1' href="#">Peliculas</Nav.Link>
                {/* <input className="form-control mr-sm-1 my-2 my-sm-0" type="search" placeholder="Buscar Por" aria-label="Search"></input> */}
              </Nav>

              <Nav>
                <Nav.Link href='#'>
                  <i className='fas fa-search h4' >Username</i>
                </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container text-center">
        <div className="row justify-content-md-center">
          
        </div>
        <div className="row">
          <div className="col col-lg-4 bg-primary" >
            <MovieEstreno/>
          </div>
          <div className="col ">
             <MovieAccion/>
             <MovieTreding/>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default App
