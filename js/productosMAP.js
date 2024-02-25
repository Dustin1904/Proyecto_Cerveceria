


const data = {
    1: {
        id: 1,
        titulo:'Producto 1',
        img:'../Imagenes/Producto.jpg',
        price:'$2.50',
        description:'Cerveza numero 1'
    },
    2: {
        id: 2,
        titulo:'Producto 2',
        img:'../Imagenes/Producto.jpg',
        price:'$3.50',
        description:'Cerveza numero 2'

    },
    3: {
        id: 3,
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
                                    <button class="disminuir" id="disminuir_${producto.id}"> - </button>
                                    <input type="number" id="numeroProducto_${producto.id}" value="1" min="1" max="50">
                                    <button class="aumentar" id ="aumentar_${producto.id}"> + </button>
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

    });
    contenedor.innerHTML = productosHtml


    //Asignar eventos a los botones despues que se hayan agregado
    Object.values(data).map((producto) => {
        document.getElementById(`aumentar_${producto.id}`).addEventListener("click", function() {
            cambiarValor(producto.id, 1)
        });
        document.getElementById(`disminuir_${producto.id}`).addEventListener("click", function() {
            cambiarValor(producto.id, -1)
        });
    
    });

};


function cambiarValor(idProducto, change){
    var input = document.getElementById(`numeroProducto_${idProducto}`)
    var valorActual = parseInt(input.value)

    console.log(valorActual)

    var newValue = valorActual + change

    if (newValue < 1){
        newValue = 1
    }else if(newValue>50){
        newValue = 50
    }

    input.value = newValue;

}

document.addEventListener('DOMContentLoaded', productosDinamicos)

/*document.addEventListener('DOMContentLoaded' ,()=>{
    productosDinamicos();
})*/



