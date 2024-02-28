


const data = {
    1: {
        id: 1,
        titulo:'Negra',
        img:'../Imagenes/Producto_Lata1.jpg',
        price:'$3.50',
        description:'Cerveza numero 1'
    },
    2: {
        id: 2,
        titulo:'Maracuya',
        img:'../Imagenes/Producto_Lata2.jpg',
        price:'$4.00',
        description:'Cerveza numero 2'

    },
    3: {
        id: 3,
        titulo:'Rubia',
        img:'../Imagenes/Producto_Botella1.jpg',
        price:'$3.50',
        description:'Cerveza numero 3'

    },
    
}

const productosDinamicos = () =>{
    const contenedor = document.getElementById('contenedor_general_prodcutos_1')
    let productosHtml = '';
    Object.values(data).map((producto) => {
        productosHtml += `
        
        <article class="contenedor_producto" id="contenedorProducto_${producto.id}">
            
            <button class="botonProdcuto">
                <img class="img" src="${producto.img}" alt="">
            </button>
            <div class="detalles_producto">
                
                <h3 class="nombre_producto">${producto.titulo}</h3>
                <span class="precio_producto">${producto.price}</span>
                <div class="botones">
                    <button class="boton_cantidad boton_resta" id="disminuir_${producto.id}">-</button>
                    <input type="number" class="numero_cantidad" id="numeroProducto_${producto.id}" value="1" min ="1" max="50">
                    <button class="boton_cantidad boton_suma" id="aumentar_${producto.id}">+</button>
                </div>
                <button>Agregar</button>
                
            </div>
            
        </article>`

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