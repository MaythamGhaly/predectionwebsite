window.onload = () => {
  var arr=[]
    const list=document.getElementById("list")
    const btn=document.getElementById("submit")
    btn.addEventListener("click",getdata)
    function getdata(){
      var name=document.getElementById("name").value
      fetch(`https://api.genderize.io?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          arr.push(data.gender)
          const gender=document.getElementById("gender").innerHTML=data.gender
        })
        fetch(`https://api.agify.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          arr.push(data.age)
          const gender=document.getElementById("age").innerHTML=data.age
        })
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          arr.push(data.country[0].country_id)
          arr.push(data.country[1].country_id)
          
          const gender=document.getElementById("nationality").innerHTML=(data.country[0].country_id +" / "+ data.country[1].country_id)
          });
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res=>res.json())
        .then(data=> {
          document.getElementById("dogimg").innerHTML=`<img src="${data.message}"/>`
          });

        document.getElementById("info").style.display="block"
          
          
      
        

    
    }
    
  }
  