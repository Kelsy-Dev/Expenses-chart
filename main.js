
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


// for (let i = 0; i < database.length; i++) {
//     if(database) {
//         let details = document.getElementById(database[i].day);
//         details.addEventListener("mouseover", () => {
//             details.classList.add('test');
//         })
//     } 
// }
// for (let i = 0; i < database.length; i++) {
//     if(database) {
//         let details = document.getElementById(database[i].day);
//         details.addEventListener("mouseleave", () => {
//             details.classList.remove('test');
//         })
//     } 
// }




let message = document.getElementById('lol1');


        message.addEventListener("click", () => {
        message.classList.add('info');
        console.log("working");
        // message.innerHTML = database[p].amount;
    });

