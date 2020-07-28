import React from 'react';

function UltimoProducto() {
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Último producto cargado</h6>
            </div>
            <div class="card-body">
                <div class="text-center">
                    <img src="/imagenes/product_dummy.svg" class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 25 + "rem" }} alt="Ultimo producto agregado" />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </div>
            </div>
        </div>

    )
}
export default UltimoProducto;