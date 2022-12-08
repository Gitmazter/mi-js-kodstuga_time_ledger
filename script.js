import Sheet from "./sheet.js";
import Time from "./time.js";

const save_work_btn = document.getElementById('save_work_btn');
const show_time_list = document.getElementById('show_time_list');
const user = document.getElementById('user');
const work = document.getElementById('work');

//Create our CHAIN
let time_sheet = new Sheet();

save_work_btn.addEventListener('click', () => {
    let new_work_time = {
        user:user.value,
        work:Number(work.value),
    }
    time_sheet.addTime(new Time(new_work_time));

    console.log(time_sheet.timeSheet);

    setTimeout(print_times, 50);
});

function print_times () {
    show_time_list.innerHTML = "";
    time_sheet.timeSheet.map(work => {

        console.log(work.data.user)
        console.log(work.data.work)
        let time_box = document.createElement('div');
        time_box.style.border = "2px solid black";
        time_box.style.padding = "5px";
        time_box.style.margin = "20px";
        time_box.style.fontFamily = "monospace";
        time_box.id = work.id

        if (work.data.work < 4) {
            time_box.style.backgroundColor = "yellow";
            time_box.innerHTML = "<p>" + `TOO LAZY || ${work.data.user}: ${work.data.work} hrs |  Salary: $${work.data.work * 2000} USD` + "</p>";

        } else if (work.data.work >= 4 && work.data.work <= 10 || work.data.overtime == true && work.data.work > 10) {
            time_box.style.backgroundColor = "green";
            time_box.innerHTML = "<p>" + `${work.data.user}: ${work.data.work} hrs |  Salary: $${work.data.work * 2000} USD` + "</p>";
    
        } else {
            time_box.style.backgroundColor = "red";
            time_box.innerHTML = "<p>" + `OVERWORKED || ${work.data.user}: ${work.data.work} hrs |  Salary: $${work.data.work * 2000} USD` + "</p>";
        }

        // appending div to show_time_list
        show_time_list.appendChild(time_box);

    });
}


// INIT
print_times();
 


