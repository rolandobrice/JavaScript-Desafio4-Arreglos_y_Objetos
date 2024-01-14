const p_ventas= [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
    habitaciones: 4,
    baño: 4,
    costo: 5000,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road,Summit Peaks, CA 23456',
    habitaciones: 2,
    baño: 1,
    costo: 1200,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion: ' Este penthouse de lujo ofrece una terraza panorámica convistas espectaculares',
    ubicacion: '567 Skyline Avenue,Skyview City, CA 56789',
    habitaciones: 3,
    baño: 3,
    costo: 4500,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Casa en condomio residencial zona tranquila',
    src: "https://propiedades.segurosbarrera.cl/casas",
    descripcion: 'Casa nueva en condomio residencial, buena zona, arias verdes, buena vista',
    ubicacion: '1235 milipilla, Los Aromos, C F 11 ',
    habitaciones: 3,
    baño: 2,
    costo: 6500,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Departamento en el centro de la ciudad',
    src: "https://www.leonainmobiliaria.com.ar/wp-content/uploads/2023/07/8d42d8d0-58f4-41e5-8889-964dbcf9a6fa_wm-1-385x258.jpe",
    descripcion: 'Departamento amoblado muy buena ubicacion y zona tranquila',
    ubicacion: '311 ñuñoa, santiago centro, D-4',
    habitaciones: 2,
    baño: 2,
    costo: 3500,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Departamento Condominio residencial',
    src: "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20220712/2092497/m_wm_2022071210579949713.jpg",
    descripcion: 'Condominio Privado muy buena ubicacion, vista excelente, Arias verde, Parque de Juegos  ',
    ubicacion: '611 Las Rocas, Villa Alemana, T11 D905 ',
    habitaciones: 4,
    baño: 2,
    costo: 5500,
    smoke: false,
    pets: true,
    }
]

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

const cardElement_ventas = document.getElementById("tarjetaventas")
const cardElement_alquiler = document.getElementById("tarjetaalquiler")
const permitidofumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
const no_permitidofumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
const permitidomascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
const no_permitidomascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

const v_index = p_ventas.slice(0,3)
const a_index = p_alquiler.slice(0,3)

v_index.forEach((venta) => {
    cardElement_ventas.innerHTML +=`  <div class="col-md-4 mb-4" >
    <div class="card"> 
    <img src= ${venta.src} class="card-img-top" alt="Imagen del departamento">
    <div class="card-body">
    <h5 class="card-title"> ${venta.nombre}</h5>
    <p class="card-text"> ${venta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p> 
    <p>
    <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
    <i class="fas fa-bath"></i> ${venta.baño} Baños
    </p>
    <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
    ${venta.smoke == false ? no_permitidofumar : permitidofumar}
    ${venta.pets == false ? no_permitidomascota : permitidomascota}
    </div>
    </div>
    </div>`
} 
)

a_index.forEach((alquiler) => {
    cardElement_alquiler.innerHTML +=`  <div class="col-md-4 mb-4" >
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


       