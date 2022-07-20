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