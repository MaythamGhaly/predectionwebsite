window.onload = () => {
    const name=document.getElementById("name")
    const dogimg=document.getElementById("dog")
    const btn=document.getElementById("submit")

    btn.addEventListener("click",getdata)
    function getdata(name){
      fetch('https://api.genderize.io?name=rio')
        .then(res=>res.json())
        .then(data=> {
          console.log(data.gender)
          
        })
    }
    

  }