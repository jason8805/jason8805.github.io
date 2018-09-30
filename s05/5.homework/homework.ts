namespace TAE_SCHOOLtask{
    let tblContact = document.querySelector('#tblContact') as HTMLTableElement;
    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let  txtCourse = document.querySelector('#txtCourse') as HTMLInputElement;
    let  txtAssignment1 = document.querySelector('#txtAssignment1') as HTMLInputElement;
    let  txtAssignment2 = document.querySelector('#txtAssignment2') as HTMLInputElement;
    let  txtAssignment3 = document.querySelector('#txtAssignment3') as HTMLInputElement;
    let  txtAssignment4 = document.querySelector('#txtAssignment4') as HTMLInputElement;
    let  txtAssignment5 = document.querySelector('#txtAssignment5') as HTMLInputElement;


    frmContact.onsubmit = () => {
        let Course = txtCourse.value;
        let Assignment1 = txtAssignment1.value;
        let Assignment2 = txtAssignment2.value;
        let Assignment3 = txtAssignment3.value;
        let Assignment4 = txtAssignment4.value;
        let Assignment5 = txtAssignment5.value;
    
        let row = tblContact.insertRow()
        let cell = row.insertCell()
        cell.innerHTML = Course;
        cell = row.insertCell()
        cell.innerHTML = Assignment1;
        cell = row.insertCell()
        cell.innerHTML = Assignment2;
        cell = row.insertCell()
        cell.innerHTML = Assignment3;
        cell = row.insertCell()
        cell.innerHTML = Assignment4;
        cell = row.insertCell()
        cell.innerHTML = Assignment5;
        cell = row.insertCell()


        return false;
    };

}