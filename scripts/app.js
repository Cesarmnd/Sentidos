//FORMULARIO
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const $form = document.querySelector("#form")
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
$formFooter.addEventListener('submit', handleSubmit)
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
    myModalFooter.show()
    console.log("enviado")
  }
}
//CAPTCHA
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}