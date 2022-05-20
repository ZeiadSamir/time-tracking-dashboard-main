
// function getData() {
//     fetch("./data.json").then(resposne => {
//         return resposne.json();
//     }).then(jsondata => titleTwo.innerHTML= `${jsondata[2].title}`);


// }
// getData();


// const dailyDate = document.getElementById('dailyDate');
// console.log(dailyDate)

// dailyDate.addEventListener('click', function()  {
//     fetch("./data.json").then(resposne => {
//         return resposne.json();
//     }).then(jsondata => document.getElementById('workTime').innerHTML= `${jsondata[0].timeframes.daily.current}hrs`);
// })

async function loadDailyDates() {
    const response = await fetch('/data.json');
    const dates = await response.json();
    console.log(dates);
    try {
        daily.addEventListener('click', ()=> {
            elementControllerDaily('workTime', 0, 'workPtime', dates);
            elementControllerDaily('playTime', 1, 'playPtime', dates);
            elementControllerDaily('studyTime', 2, 'studyPtime', dates);
            elementControllerDaily('exerciseTime', 3, 'exercisePtime', dates);
            elementControllerDaily('socialTime', 4, 'socialPtime', dates);
            elementControllerDaily('careTime', 5, 'carePtime', dates);
        });
        weekly.addEventListener('click', ()=> {
            elementControllerWeekly('workTime', 0, 'workPtime', dates);
            elementControllerWeekly('playTime', 1, 'playPtime', dates);
            elementControllerWeekly('studyTime', 2, 'studyPtime', dates);
            elementControllerWeekly('exerciseTime', 3, 'exercisePtime', dates);
            elementControllerWeekly('socialTime', 4, 'socialPtime', dates);
            elementControllerWeekly('careTime', 5, 'carePtime', dates);
        });
        monthly.addEventListener('click', ()=> {
            elementControllerMonthly('workTime', 0, 'workPtime', dates);
            elementControllerMonthly('playTime', 1, 'playPtime', dates);
            elementControllerMonthly('studyTime', 2, 'studyPtime', dates);
            elementControllerMonthly('exerciseTime', 3, 'exercisePtime', dates);
            elementControllerMonthly('socialTime', 4, 'socialPtime', dates);
            elementControllerMonthly('careTime', 5, 'carePtime', dates);
        })
    }catch(error){
        console.log(error)
    }
  }
  loadDailyDates();



const daily = document.getElementById('dailyDate');
const weekly = document.getElementById('weeklyDate');
const monthly = document.getElementById('monthlyDate');
console.log(daily, weekly, monthly)

function elementControllerDaily(elem, indexNum,elemP, data){
    document.getElementById(elem).innerHTML = `${data[indexNum].timeframes.daily.current}hrs`;
    document.getElementById(elemP).innerHTML= `Last Day - ${data[indexNum].timeframes.daily.previous}hrs`;
};
function elementControllerWeekly(elem, indexNum,elemP, data){
    document.getElementById(elem).innerHTML = `${data[indexNum].timeframes.weekly.current}hrs`;
    document.getElementById(elemP).innerHTML= `Last Week - ${data[indexNum].timeframes.weekly.previous}hrs`;
};
function elementControllerMonthly(elem, indexNum,elemP, data){
    document.getElementById(elem).innerHTML = `${data[indexNum].timeframes.monthly.current}hrs`;
    document.getElementById(elemP).innerHTML= `Last Month - ${data[indexNum].timeframes.monthly.previous}hrs`;
};


const work = document.getElementById('workTime');
const play = document.getElementById('playTime');
const study = document.getElementById('studyTime');


