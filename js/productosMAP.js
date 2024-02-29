document.addEventListener('DOMContentLoaded', () => {
    productosDinamicos(); // Llama a la función para cargar los productos dinámicos

    // Después de cargar los productos dinámicos, establece el evento de clic en los botones de producto
    const botonesProductos = document.querySelectorAll('.botonProducto');
    botonesProductos.forEach(boton => {
        boton.addEventListener('click', () => {
            const productoId = boton.parentNode.id.split('_')[1]; // Obtén el ID del producto desde el ID del contenedor del producto
            obtenerProducto(productoId); // Llama a la función para mostrar el detalle del producto
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Desplaza suavemente hasta el final de la página
        });
        
    });

    

    
});



const data = {
    1: {
        id: 1,
        titulo:'AMBER ALE',
        img:'../Imagenes/Producto_Lata1.jpg',
        price:'$3.50',
        description:'Es una cerveza estilo americano de carácter prominente con leves notas frutales otorgadas por la levadura y maltas especiales sabor a caramelo, lo que la convierte en una bebida muy refrescante.'
    },
    2: {
        id: 2,
        titulo:'MARACUYA',
        img:'../Imagenes/Img reales/lataKaluka.jpg',
        price:'$4.00',
        description:'Es un cerveza cítrica de color amarillo con tonos dorados y leves notas de maracuyá.'

    },
    3: {
        id: 3,
        titulo:'RUBIA',
        img:'../Imagenes/Producto_Botella1.jpg',
        price:'$3.50',
        description:'Es una cerveza tipo Pale Ale de cuerpo liviano con un color dorado pálido altamente refrescante ideal para días calurosos.'

    },
    
}

const productosDinamicos = () =>{
    const contenedor = document.getElementById('contenedor_general_prodcutos_1')
    let productosHtml = '';
    Object.values(data).map((producto) => {
        productosHtml += `
        
        <article class="contenedor_producto" id="contenedorProducto_${producto.id}">
            
            <button class="botonProducto">
                <img class="img" src="${producto.img}" alt="">
            </button>
            <div class="detalles_producto">
                
                <h3 class="nombre_producto" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${producto.titulo}</h3>
                <span class="precio_producto" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${producto.price}</span>
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




const obtenerProducto = (productoId)=>{
    const producto = data[productoId];
    console.log(producto)
    const contenedor = document.getElementById('contenedor_general_prodcutos_1')
    const contenedorUnico = document.getElementById('contenedorUnico')
    contenedor.classList.add('display-none')
    let productoHtml = `

    <article class="caja">
    <div class="columna1">
            <img id="imagen${producto.id}" class="imagenProducto" src="${producto.img}" alt="camisa">
        </div>
        <div class="columna">
            <h1 style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${producto.titulo}</h1>
            
            <div class="datosProducto">
                
                <span style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${producto.price}
                    <span class="oferta" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Oferta</span> 
                </span>
                <p style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">${producto.description}</p>
                
                <div>
                    <button class="regresar" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;" id="regresar">Haz tu pedido!</button>
                    
                </div>
            </div>
        </div>
    
    </article>
    `
    contenedorUnico.innerHTML = productoHtml;

    document.getElementById('regresar').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    
}

//Función para hacer scroll hacia arriba cuando se hace clic en el botón 'regresar'
    





//document.addEventListener('DOMContentLoaded', productosDinamicos)





