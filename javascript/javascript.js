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
          console.log(arr[0])
        })
        fetch(`https://api.agify.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          arr.push(data.age)
          console.log(arr[1])
        })
        fetch(`https://api.nationalize.io/?name=${name}`)
        .then(res=>res.json())
        .then(data=> {
          arr.push(data.country[0].country_id)
          arr.push(data.country[1].country_id)
          console.log(arr[2],arr[3])
          });
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res=>res.json())
        .then(data=> {
          dogimg.style.display="block"
          dogimg.innerHTML=`<img src="${data.message}"/>`
          });

        
          
          
      
        

    
    }
    
  }
  