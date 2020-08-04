import React, { Component } from 'react';

class Categorias extends Component {

       constructor (props){
           super(props);
           this.state={
          
            cantidadTinto :' ',
            cantidadBlanco : 4,
            cantidadPremium:0,
            cantidadClasico:0,


           }
        }
           apiCall(url,consecuencia){
            fetch(url)
            .then (response => response.json())
            .then ( data => consecuencia (data))
            .catch ( error => console.log (error))
           }

 

    componentDidMount(){
    this.apiCall('http://localhost:3030/dashboard/colorTinto',
     this.mostrarResultado)
    }
    mostrarResultado = (data) =>{
        console.log(data)
        this.setState(
            {

           cantidadTinto:data.data
            }
        )
    }

    componentDidUpdate(){

    };

   render() {

    let contenido;

    if(this.state.cantidadTinto==' '){
    contenido= <p>cargando....</p>
    }else{
        contenido=this.state.cantidadTinto
    }


        return (
            
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Cantidad de productos por categoría</h6>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Color tinto = {contenido}

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Color blanco = {this.state.cantidadBlanco}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-4">
                            <div class="card bg-info text-white shadow">
                                <div class="card-body">
                                    Categoría premium = {this.state.cantidadPremium}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 mb-4" id='card' >
                            <div class="card bg-info text-white shadow">
                                <div class="card-body" >
                                    Categoría clásico ={this.state.cantidadClasico}
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>


        );
    }
}
export default Categorias;