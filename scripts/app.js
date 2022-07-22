// Redes sociales
const redes = [
  { name: 'youtube',
    link: 'https://www.instagram.com/estudiosentidos/?hl=en',
    class: 'fa-brands fa-instagram fa-3x'
  },
  
  { name: 'youtube',
    link: 'https://www.instagram.com/estudiosentidos/?hl=en',
    class: 'fa-brands fa-facebook-f fa-3x'
  },

  { name: 'youtube',
    link: 'https://www.instagram.com/estudiosentidos/?hl=en',
    class: 'fa-brands fa-youtube fa-3x'
  },

  { name: 'youtube',
    link: 'https://wa.me/541123925341',
    class: 'fa-brands fa-whatsapp fa-3x'
  }
];

// Contenedores
const contenedor = document.getElementById('contenedor');
const dropdownBtn = document.getElementById('dropdown');
const droplist = document.getElementById('droplist');
const filter = document.getElementById('filter');
const redContenedor = document.querySelector('.redes__iconos-contenedor');

// SweetAlert
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    popup: 'alert__container',
    title: 'alert__title',
    htmlContainer: 'alert__text',
    confirmButton: 'btn',
  },
  buttonsStyling: false,
});

// Creación de íconos de redes
redes.forEach( item => {
  const red = document.createElement('a');
  red.className = 'redes__iconos';
  red.addEventListener('click', () => {
    
    swalWithBootstrapButtons.fire({
      title: 'SALIENDO DE LA PÁGINA',
      text: 'Te estaremos redirigiendo a una página externa',
      showConfirmButton: true,
      confirmButtonText: `Continuar`,
      position: 'bottom-end',
    }).then((result) => {
      if (result.isConfirmed) {
        // window.location = item.link;
        window.open(item.link)
      }
    })
  });

  const icono = document.createElement('i');
  icono.className = item.class;

  red.appendChild(icono);
  redContenedor.appendChild(red);
})

// Mostrar submenú de tienda
dropdownBtn.addEventListener('click', () => {
  droplist.className === 'drop-list outside' 
  ? (droplist.className = 'drop-list inside', filter.className = 'filter active') 
  : droplist.className = 'drop-list outside';
});

// Ocultar submenú de tienda
document.addEventListener('click', (e) => {
  !contenedor.contains(e.target) && (droplist.className = 'drop-list outside', filter.className = 'filter hidden');
});

//FOOTER
const myModalFooter = new bootstrap.Modal(document.getElementById('myModalFooter'))
const $formFooter = document.querySelector("#formFooter")
$formFooter.addEventListener('submit', handleSubmitFooter)
async function handleSubmitFooter(event){
  event.preventDefault()
  const formFooter = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: formFooter,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok){
    this.reset()
    myModalFooter.show()
    console.log("enviado")
  }
}

//FORMULARIO

const myModal = new bootstrap.Modal(document.getElementById('modalContact'))
const $form = document.querySelector("#formContact")
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok){
    this.reset()
    myModal.show()
    console.log("enviado")
  }
}