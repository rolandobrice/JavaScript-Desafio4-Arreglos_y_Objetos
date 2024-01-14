
const p_alquiler= [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion: ' Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baño: 2,
    costo: 2000,
    smoke: true,
    pets: false,
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: ' 456 Ocean Avenue,Seaside Town, CA 56789',
    habitaciones: 3,
    baño: 3,
    costo: 2500,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baño: 2,
    costo: 2200,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Aparatamento con excelte vista',
    src: "https://sistema.alaluf.com/nuevo/uploads/27297_1.jpg",
    descripcion: 'Este bello apartamento amplio y muy comodo',
    ubicacion: '905 salesianos, San Miguel, T 314D ',
    habitaciones: 3,
    baño: 2,
    costo: 3200,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Casa en condomio privado ',
    src: "https://hidalgopropiedades.cl/wp-content/uploads/2022/12/P1030339-500x300.jpg",
    descripcion: 'Casa en condomio privado muy comoda cerca del lago',
    ubicacion: '305 las viscacha, Navidad, 9015 H',
    habitaciones: 4,
    baño: 3,
    costo: 5500,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Departamento comodo amoblado',
    src: "https://www.bienesonline.com/chile/photos/tatiana-saavedra-propiedades-arrienda-privilegiado-departamento-en-barrio-italia-DEA1070411585276675-655.jpg",
    descripcion: 'Departamento comodo, cerca del centro de la ciuda muy buena zona',
    ubicacion: '502 San Diego, santiago, D 911',
    habitaciones: 2,
    baño: 1,
    costo: 2000,
    smoke: false,
    pets: true,
    },
]

const cardElement = document.getElementById("tarjetaalquiler")
const permitidofumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
const no_permitidofumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
const permitidomascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
const no_permitidomascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

p_alquiler.forEach((alquiler) => {
    cardElement.innerHTML +=`  <div class="col-md-4 mb-4" >
    <div class="card"> 
    <img src= ${alquiler.src} class="card-img-top" alt="Imagen del departamento">
    <div class="card-body">
    <h5 class="card-title"> ${alquiler.nombre}</h5>
    <p class="card-text"> ${alquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}</p> 
    <p>
    <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
    <i class="fas fa-bath"></i> ${alquiler.baño} Baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
    ${alquiler.smoke == false ? no_permitidofumar : permitidofumar}
    ${alquiler.pets == false ? no_permitidomascota : permitidomascota}
    </div>
    </div>
    </div>`
} 
)

       