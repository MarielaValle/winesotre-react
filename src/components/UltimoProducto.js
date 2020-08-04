import React from 'react';

function UltimoProducto(props) {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Variedades de vinos disponibles al día de la fecha</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                    <img src="/imagenes/variedades-de-vinos.jpg" class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 25 + "rem" }} alt="Variedades de Vinos" />
                  <nav className='variedad'>
                     <ul>
                      {props.variedades.map((variedad ,i)=><li key={variedad +i}> {variedad}</li>)
                      }
                     </ul>
                      
                  </nav>
                    <a target="_blank" rel="nofollow" href="/"></a>
                </div>
            </div>
        </div>

    )
}
export default UltimoProducto;