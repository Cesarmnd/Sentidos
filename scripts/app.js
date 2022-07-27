// Redes sociales
const redes = [
  { name: 'Instagram',
    link: 'https://www.instagram.com/estudiosentidos/?hl=en',
    class: 'fa-brands fa-instagram fa-3x'
  },
  
  { name: 'Facebook',
    link: 'https://m.facebook.com/Sentidos-Estudio-111177608015962/',
    class: 'fa-brands fa-facebook-f fa-3x'
  },

  { name: 'Youtube',
    link: 'https://www.youtube.com/channel/UCY6DDP1B5nEAFYBr6-7Le2A',
    class: 'fa-brands fa-youtube fa-3x'
  },

  { name: 'WhatsApp',
    link: 'https://wa.me/541123925341',
    class: 'fa-brands fa-whatsapp fa-3x'
  }
];

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

// Funcion de Arleta
function alerta ( btn, link) {
  swalWithBootstrapButtons.fire({ //btn tomará el valor 1 o 2 para poder definir la posicion de la alerta
    title: 'SALIENDO DE LA PÁGINA',
    text: 'Te estaremos redirigiendo a una página externa',
    showConfirmButton: true,
    confirmButtonText: `Continuar`,
    position: btn === 1 ? 'bottom-center' : 'bottom-end',
  })
  .then((result) => {
    if (result.isConfirmed) {
      window.open(link);
    };
  });
};

// Asignacion de eventos a botones Inscripcion y Calendario
document.getElementById('inscripcion') != null && inscripcionBtn();
document.getElementById('calendario') != null && calendarioBtn();

// Evento del boton Inscripcion
function inscripcionBtn () {
  const inscripcion = document.getElementById('inscripcion');
  inscripcion.addEventListener( 'click', () => {
    alerta( 1, 'https://wa.me/541123925341');
  })
};

// Evento del boton Calendario
function calendarioBtn () {
  const calendario = document.getElementById('calendario');
  calendario.addEventListener( 'click', () => {
    alerta( 1, 'https://www.canva.com/design/DAFG3xydAcc/q_Zt_vok_iHlm2j41W4T3Q/view?utm_content=DAFG3xydAcc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink')
  });
};

// Contenedor de Redes del footer
const redContenedor = document.querySelector('.redes__iconos-contenedor');

// Creación de íconos de redes
redes.forEach( item => {
  const red = document.createElement('a');
  red.className = 'redes__iconos';
  red.addEventListener('click', () => {
    alerta( 2, item.link);
  });

  const icono = document.createElement('i');
  icono.className = item.class;

  red.appendChild(icono);
  redContenedor.appendChild(red);
});

//FOOTER
const myModalFooter = new bootstrap.Modal(document.getElementById('myModalFooter'));
const $formFooter = document.querySelector("#formFooter");
$formFooter.addEventListener('submit', handleSubmitFooter);


async function handleSubmitFooter(event) {
  event.preventDefault()
  const formFooter = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formFooter,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok){
    this.reset();
    myModalFooter.show();
    console.log("enviado");
  }
}

// Activación de la funcion de envío formulario
document.getElementById('modalContact') != null && enviarForm();

//FORMULARIO
function enviarForm () {
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
};



