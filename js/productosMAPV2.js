const data = {
    3: {
        id: 3,
        titulo: 'Rubia',
        precioNormal: '$3,50',
        url1: '../Imagenes/Producto_Botella1.jpg',
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$3'
    },
    2: {
        id: 2,
        titulo: 'Maracuya',
        precioNormal: '$4',
        url1: '../Imagenes/Producto_Lata2.jpg',
        url2: '../rss/2 pantalonetanegrafront.webp',
        precioOferta: '$3,50'
    },
    1: {
        id: 1,
        titulo: 'Negra',
        precioNormal: '$3,50',
        url1: '../Imagenes/Producto_Lata1.jpg',
        url2: '../rss/3 PANTALONETAFRONT.webp',
        precioOferta: '$2,50'
    },
};

const Productos = () => {
    const mostrarDetalle = false;
    const productoSeleccionado = null;

    const obtenerProducto = (productoId) => {
        console.log(`Mostrar detalles del producto con ID ${productoId}`);
    };

    return (
        mostrarDetalle ? (
            `<div id="contenedorUnico">
                <article className='caja'>
                    <div className="columna1">
                        <img
                            id={`imagen${productoSeleccionado.id}`}
                            className="imagenProducto"
                            src={productoSeleccionado.url1}
                            alt=""
                        />
                    </div>
                    <div className="columna">
                        <h1>{productoSeleccionado.titulo}</h1>
                        
                        <div className="datosProducto">
                            <span className="tachado">{productoSeleccionado.precioNormal}</span>
                            <span>{productoSeleccionado.precioOferta}<span className="oferta">Oferta</span></span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sed tempore unde molestiae quae, laudantium tenetur sapiente sequi quas ipsa reiciendis iste provident atque. Laboriosam placeat dicta nobis perspiciatis soluta.
                            </p>
                            <div>
                                <div>
                                    <button className='regresar' onClick={() => setMostrarDetalle(false)}>Volver</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                
            </div>`
        ) : (
            `<div id="contenedorProductos">
                ${Object.values(data).map((producto) => (
                    `<article className='contenedor_producto'>
                        <button
                        key={producto.id}
                        className="botonProducto"
                        onClick={() => obtenerProducto(producto.id)}
                        >
                        <img className='img' src={producto.url1} alt={producto.titulo} />
                        </button>
                    </article>`
                ))}
            </div>`
        )
    );
};

export default Productos;
