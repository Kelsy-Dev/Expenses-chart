// let monday = document.getElementById('mon');
 

//     monday.addEventListener("mouseover", () => {
//          monday.classList.add('test');
//         console.log("It's workinng");
//         }  
//     )
//     monday.addEventListener("mouseleave", () => {
//         monday.classList.remove('test');
//         console.log("not working")
//     })

let database = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]


for (let i = 0; i < database.length; i++) {
    if(database) {
        let details = document.getElementById(database[i].day);
        details.addEventListener("mouseover", () => {
            details.classList.add('test');
        })
    } 
}
for (let i = 0; i < database.length; i++) {
    if(database) {
        let details = document.getElementById(database[i].day);
        details.addEventListener("mouseleave", () => {
            details.classList.remove('test');
        })
    } 
}




