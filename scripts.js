function handleSubmit(event) {
  event.preventDefault()
  console.log('submitted form')
  const form = document.querySelector('form')
  const newCustomer = {
    fName: form.elements.firstName.value,
    lName: form.elements.lastName.value,
    email: form.elements.email.value,
  }
  console.log(newCustomer)
  fetch('https://cd-pet-boutique.web.app/pets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCustomer),
  })
    .then((response) => response.json())
    .then(() => {
      form.innerHTML = `<h3>${json.message}</h3>`
      getCustomers()
    })
    .catch((err) => {
      form.innerHTML = '<h3>Error sending customer</h3>'
    })
}
