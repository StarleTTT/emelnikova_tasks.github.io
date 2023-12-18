const LAT_PHRASE = ["\"Consuetudo est altera natura\"",
                "\"Nota bene\"", "\"Nulla calamitas sola\"",
                "\"Per aspera ad astra\""];
const RUS_PHRASE = ["\"Привычка - вторая натура\"",
                "\"Заметьте хорошо\"", "\"Беда не приходит одна\"",
                "\"Через тернии к звёздам\""];
var cnt = LAT_PHRASE.length ;

let i =-1
function alerted(){
    if (cnt==0) {
        alert('Фразы закончились')
    }
    else{
        let row = document.createElement('tr')
        i = getRandomInt(cnt)
        if (cnt%2==0){
        row.innerHTML = `<td class="orange">${LAT_PHRASE[i]}</td><td class="orange">${RUS_PHRASE[i]}</td>`
        }
        else {
        row.innerHTML = `<td class="violet">${LAT_PHRASE[i]}</td><td class="violet">${RUS_PHRASE[i]}</td>`
        }
        document.querySelector('.phrase').appendChild(row)
        LAT_PHRASE.splice(i,1)
        RUS_PHRASE.splice(i,1)
    cnt -= 1;
    }
    };

function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      };
function changeStyles() {

        let rows = document.querySelectorAll('.phrase tr');

        rows.forEach((row, index) => {
            if (index % 2 === 0) {
                row.classList.add('even');
            }
        });
    }
