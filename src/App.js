import React from 'react';
import './style.css';
import './app.css';
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Categorias from './components/Categorias';
import UltimoProducto from './components/UltimoProducto';
import Footer from './components/Footer';


function App() {
  return (

    <div id="wrapper">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      </head>


      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
          <Topbar />

        </div>

       
        <div className="container-fluid">
          <Dashboard />
          <div class="row">

            <div class="col-lg-6 mb-4">
              <UltimoProducto />
            </div>

            <div class="col-lg-6 mb-4">
              <Categorias />
            </div>

          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>

    </div>

  );
}

export default App;


