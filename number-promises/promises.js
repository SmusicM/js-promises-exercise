const baseurl = "http://numbersapi.com"
const num_input = document.querySelector(".searchinput");
const num_button = document.querySelector(".searchbutton");
const numContainer = document.querySelector(".fact-cont")
//axios
//    .get(`${baseurl}/${input_val}/math`)
//    .then(num=> {
//        console.log(`the nummber fact is: ${num.data}`);
//        return axios.get(`${baseurl}/${num}/math`);
//    })

num_button.addEventListener("click",function(){
    let input_val = num_input.value;
    //does request 4 times
    for (let i = 1; i < 5; i++) {
    axios
    .get(`${baseurl}/${input_val}/math`,{
       headers:{
        "content-type": "application/json"
       } 
    })
    .then(num=> {
        console.log(`the nummber fact is: ${num.data}`);
        console.log(num)
        
       
            const newfact = `<div>
            <h3></h3>
            <p>${num.data}</p>
         </div>`
         numContainer.innerHTML += newfact
       
        
     
    
        return axios.get(`${baseurl}/${input_val}/math`);
    })
  }
})


//this way works for getting facts from multiple numbers, not setup for acepting multiple nums thoigh via html input
//num_button.addEventListener("click",function(){
//    let input_val = num_input.value;
//    axios
//    .get(`${baseurl}/${input_val},${input_val},${input_val},4/math`,{
//       headers:{
//        "content-type": "application/json"
//       } 
//    })
//    .then(num=> {
//        console.log(`the nummber fact is: ${num.data}`);
//        console.log(num)
//        console.log(JSON.stringify(num.data))
//        for (key in num.data){
//            const newfact = `<div>
//            <h3></h3>
//            <p>${num.data[key]}</p>
//         </div>`
//         numContainer.innerHTML += newfact
//        }
//        
//     
//    
//        return axios.get(`${baseurl}/${input_val}/math`);
//    })
//})






//works for one request at a time of a fact
//num_button.addEventListener("click",function(){
//    let input_val = num_input.value;
//    axios
//    .get(`${baseurl}/${input_val}/math`,{
//       headers:{
//        "content-type": "application/json"
//       } 
//    })
//    .then(num=> {
//        console.log(`the nummber fact is: ${num.data}`);
//        const newfact = `<div>
//        <h3></h3>
//        <p>${num.data}</p>
//     </div>`
//     numContainer.innerHTML += newfact
//        return axios.get(`${baseurl}/${input_val}/math`);
//    })
//})