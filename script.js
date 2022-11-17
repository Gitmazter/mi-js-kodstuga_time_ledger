const save_work_btn = document.getElementById('save_work_btn');
const show_time_list = document.getElementById('show_time_list');
const user = document.getElementById('user');
const work = document.getElementById('work');

if (localStorage.getItem("time_sheet")) {
    console.log('ls exists');
} else {
    console.log("ls does not exist")
    let time_sheet = [
        {id:1, user:'CJ', work:10,},
        {id:2, user:'Sweet', work:2,},
        {id:3, user:'Ryder', work:12,},
        {id:4, user:'Big Smoke', work:14,},
    ];

    localStorage.setItem("time_sheet", JSON.stringify(time_sheet));
    console.log("ls has been created");
}

save_work_btn.addEventListener('click', () => {
    //console.log("new_work_time", new_work_time);

    // Get timesheet from local storage
    let time_sheet = JSON.parse(localStorage.getItem("time_sheet"));

    // modify
    //create object
    let new_work_time = {
        // creating user id by taking time_sheet.length and adding 1
        id:time_sheet.length + 1,
        user:user.value,
        // work needs to be a number, we need to use Number() function
        work:Number(work.value),
    }

    // push to array
    time_sheet.push(new_work_time);


    // save
    localStorage.setItem("time_sheet", JSON.stringify(time_sheet));

    //console.log("time_sheet", time_sheet);
    print_times();

});


// Dry principle, Dont repeat yourself.
// function to print the timesheet
function print_times () {
    show_time_list.innerHTML = "";

    
    // Get timesheet from local storage
    let time_sheet = JSON.parse(localStorage.getItem("time_sheet"));
    console.log(time_sheet);


    // "work" on next row is key for time_sheet, work.work gives hrs
    time_sheet.map(work => {
        //console.log("times 1 by 1:", work);

        // create element and give attributes
        let time_box = document.createElement('div');
        time_box.style.border = "2px solid black";
        time_box.style.padding = "5px";
        time_box.style.margin = "20px";
        time_box.style.fontFamily = "monospace";
        time_box.id = work.id

        if (work.work < 4) {
            time_box.style.backgroundColor = "yellow";
            time_box.innerHTML = "<p>" + `TOO LAZY || ${work.user}: ${work.work} hrs |  Salary: $${work.work * 2000} USD` + "</p>";

        } else if (work.work >= 4 && work.work <= 10 || work.overtime == true && work.work > 10) {
            time_box.style.backgroundColor = "green";
            time_box.innerHTML = "<p>" + `${work.user}: ${work.work} hrs |  Salary: $${work.work * 2000} USD` + "</p>";
    
        } else {
            time_box.style.backgroundColor = "red";
            time_box.innerHTML = "<p>" + `OVERWORKED || ${work.user}: ${work.work} hrs |  Salary: $${work.work * 2000} USD` + "</p>";
        }


        // appending div to show_time_list
        show_time_list.appendChild(time_box);

    });
}


// INIT
print_times();
 


