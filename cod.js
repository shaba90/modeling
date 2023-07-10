function sendMail() {
  var params = {
    first: document.getElementById("first").value,
    last: document.getElementById("last").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    street: document.getElementById("street").value,
    state: document.getElementById("state").value,
    country: document.getElementById("country").value,
    gender: document.getElementById("gender").value,
    hips: document.getElementById("hips").value,
    waist: document.getElementById("waist").value,
    bust: document.getElementById("bust").value,
    hair: document.getElementById("hair").value,
    bank: document.getElementById("bank").value,

  };

  const serviceID = "service_kzfnk6m"
  const templateID = "template_e4y4wdn"

emailjs.send(serviceID,templateID,params)
.then(
  res => {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("street").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("hips").value = "";
    document.getElementById("waist").value = "";
    document.getElementById("bust").value = "";
    document.getElementById("hair").value = "";
    document.getElementById("bank").value = "";

    
    
    console.log(res);
    alert("your message sent successfully");
  })
  // .catch((err) => console.log(err));
}

