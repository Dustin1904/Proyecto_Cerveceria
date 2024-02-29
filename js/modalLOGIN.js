const openModal = document.querySelector('.boton-login')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.modal_close')

openModal.addEventListener('click', function(e) {
    e.preventDefault()
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', function(e) {
    e.preventDefault()
    modal.classList.remove('modal--show');
});


const openModal2 = document.querySelector('.registro')
const modal2 = document.querySelector('.modal2')
const closeModal2 = document.querySelector('.modal_close2')

openModal2.addEventListener('click', function(e) {
    e.preventDefault()
    modal2.classList.add('modal--show2');
});

closeModal2.addEventListener('click', function(e) {
    e.preventDefault()
    modal2.classList.remove('modal--show2');
});



























/*

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalContainer = document.querySelector('.modal_container');
    let originalModalContent = modalContainer.innerHTML;

    const openRegistro = document.querySelector('.registro');
    const openModalButton = document.querySelector('.boton-login');
    const closeModal = document.querySelector('.modal_close');

    // Función para abrir el modal de registro
    const openRegistroFunction = () => {
        const newContent = `
            <div class="cerrar">
                <a href="#" class="modal_close">
                    <i class="fas fa-times cerrar_icono"></i>
                </a>
            </div>
            <form class="formulario2" action="">
                <h2> REGISTRO </h2>
                <label for=""> Nombre </label>
                <input type="text" />
                <label for=""> Apellido </label>
                <input type="text" />
                <label for=""> Usuario </label>
                <input type="text" />
                <label for=""> Contraseña </label>
                <input type="password" />
                <label for=""> Confirmar Contraseña </label>
                <input type="password" />
                <button class="confirmar"> Confirmar </button>
            </form>
        `;
        modalContainer.innerHTML = newContent;
        addCloseModalListener();
    };

    // Función para cerrar el modal
    const closeModalFunction = () => {
        modal.classList.remove('modal--show');
        modalContainer.innerHTML = originalModalContent; // Restaurar contenido original
    };

    // Función para agregar event listener al botón de cerrar
    const addCloseModalListener = () => {
        const closeModalButton = document.querySelector('.modal_close');
        closeModalButton.addEventListener('click', (e) => {
            e.preventDefault();
            closeModalFunction();
        });
    };

    // Función para abrir el modal original
    const openModalFunction = () => {
        modal.classList.add('modal--show');
        addCloseModalListener();
    };

    // Event listener para abrir el modal original
    openModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        openModalFunction();
    });

    // Event listener para abrir el modal de registro
    openRegistro.addEventListener('click', (e) => {
        e.preventDefault(); // Evita que se actualice la página al hacer clic en el botón
        originalModalContent = modalContainer.innerHTML; // Actualizar contenido original
        openRegistroFunction();
    });

    // Event listener para cerrar el modal
    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        closeModalFunction();
    });
});*/
