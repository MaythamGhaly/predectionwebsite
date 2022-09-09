window.onload = () => {
    const list=document.querySelector("list")
    const btn=document.getElementById("submit")
    btn.addEventListener("click",getdata)
    function getdata(){
      var name=document.getElementById("name").value
      fetch(`https://api.genderize.io?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          console.log(data.gender)
          const list1=document.createElement("li")
          const gender=document.createTextNode(data.gender)
       list1.appendChild=('gender')
        })
        
        

    
    }
    
  }
  