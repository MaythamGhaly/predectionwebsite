window.onload = () => {
    const btn=document.getElementById("submit")
    btn.addEventListener("click",getdata)
    // fetch function for the image
    fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res=>res.json())
        .then(data=> {
          img=document.getElementById("dogimg").innerHTML=`<img class="img" src="${data.message}"/>`
          });
    // function for fetch the gender,age, and nationality
    function getdata(){
      var name=document.getElementById("name").value
      fetch(`https://api.genderize.io?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          const gender=document.getElementById("gender").innerHTML=data.gender
        })
        fetch(`https://api.agify.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          const gender=document.getElementById("age").innerHTML=data.age
        })
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          const gender=document.getElementById("nationality").innerHTML=(data.country[0].country_id +" / "+ data.country[1].country_id)
          });
        document.getElementById("info").style.display="block"
    }
}
  