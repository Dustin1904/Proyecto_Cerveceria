document.addEventListener('DOMContentLoaded' ,()=>{
    productosDinamicos();
})

const data = {
    1: {
        id: 1,
        titulo:'Producto 1',
        img:'../Imagenes/Producto.jpg',
        price:'$2.50',
        description:'Cerveza numero 1'
    },
    2: {
        id: 1,
        titulo:'Producto 2',
        img:'../Imagenes/Producto.jpg',
        price:'$3.50',
        description:'Cerveza numero 2'

    },
    3: {
        id: 1,
        titulo:' Producto 3',
        img:'../Imagenes/Producto.jpg',
        price:'$5.00',
        description:'Cerveza numero 3'

    },
    
}

const productosDinamicos = () =>{
    const contenedor = document.getElementById('contenedor_general_prodcutos_1')
    let productosHtml = '';
    Object.values(data).map((producto) => {
        productosHtml += `
        <div class="contenedor_producto" id="contenedor_producto${producto.id}">
                        <div class="imagen_producto">
                            <img src="${producto.img}" alt="">
                        </div>
                        <div class="caracteristicas_producto">
                            <div class="contenedor_boton_precio">
                                <div class="boton_cantidad">
                                    <button> - </button>
        
                                    <button> + </button>
                                </div>
                                <div class="precio_producto">
                                    <p> ${producto.price}</p>
                                </div>
                            </div>
                            <div class="caracteristica_botonAgregar">
                                <p>${producto.description}
                                </p>
                                <button> Agregar </button>
                            </div>
                        </div>
                    </div>`

    })
    contenedor.innerHTML = productosHtml


};

