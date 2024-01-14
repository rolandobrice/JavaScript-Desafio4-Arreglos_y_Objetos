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

const cardElement = document.getElementById("tarjetaventas")
const permitidofumar = `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
const no_permitidofumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
const permitidomascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
const no_permitidomascota = `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

    p_ventas.forEach((venta) => {
        cardElement.innerHTML +=`  <div class="col-md-4 mb-4" >
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
    
        
        
        
       
        
      