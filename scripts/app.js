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

// Contenedor de Redes del footer
const redContenedor = document.querySelector('.redes__iconos-contenedor');

// Creación de íconos de redes
redes.forEach( item => {
  const red = document.createElement('a');
  red.className = 'redes__iconos';
  red.addEventListener('click', () => {
    window.open(item.link, '_blank').focus();
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



