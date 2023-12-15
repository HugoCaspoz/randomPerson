document.addEventListener("DOMContentLoaded", function() {

const url = 'https://randomuser.me/api/';
newRanPerson();
let reload = document.getElementById("reload");
reload.addEventListener("click",newRanPerson)

function newRanPerson(){
    fetch(url)
    .then(res => res.json())
    .then(response => {
      data = response;
      console.log(data);
      let name = document.getElementById("name");
      let birth = document.getElementById("birth");
      let birthEu = data.results[0].dob.date.slice(0, 10)
      birthEu= new Date(birthEu);
      let sex = document.getElementById("sex");
      let tel = document.getElementById("tel");
      let direction = document.getElementById("direction");
      let city = document.getElementById("city");
      let email = document.getElementById("email");
      let imagen = document.getElementById("imagen");
        
      name.innerHTML=data.results[0].name.title+` `+data.results[0].name.first+` `+data.results[0].name.last;
      birth.innerHTML=birthEu.toLocaleDateString("es-ES");
      sex.innerHTML=data.results[0].gender.charAt(0).toUpperCase() + data.results[0].gender.slice(1);;
      tel.innerHTML=data.results[0].phone
      direction.innerHTML=data.results[0].location.street.name + ` ` + data.results[0].location.street.number
      city.innerHTML=data.results[0].location.city
      email.innerHTML=data.results[0].email
      imagen.src=data.results[0].picture.large
  });
}            
})