
const database = [
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

let dayInfo = [
  {
    "days": "day1"
   },
   {
    "days": "day2"
   }, 
   {
    "days": "day3"
   }, 
   {
    "days": "day4"
   }, 
   {
    "days": "day5"
   }, 
   {
    "days": "day6"
   }, 
   {
    "days": "day7"
   }
   ]




for (let i = 0; i < database.length; i++) {
    if(database) {
        let details = document.getElementById(database[i].day);
        const hiddeN = document.getElementById(dayInfo[i].days);
        
        details.addEventListener("mouseover", () => {
          hiddeN.innerHTML = `${database[i].amount}`
          hiddeN.style.display = 'block';
            details.classList.add('test');      
            })
        }
    } 

for (let i = 0; i < database.length; i++) {
    if(database) {
        let details = document.getElementById(database[i].day);
        const hiddeN = document.getElementById(dayInfo[i].days);
        details.addEventListener("mouseleave", () => {
          details.classList.remove('test');
          hiddeN.style.display = 'none';
        })
    }
}

