namespace TAE_SCHOOLtask{
    let tblContact = document.querySelector('#tblContact') as HTMLTableElement;
    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let  txtCourse = document.querySelector('#txtCourse') as HTMLInputElement;
    let  txtTeacher = document.querySelector('#txtTeacher') as HTMLInputElement;
    let  txtContacts = document.querySelector('#txtContacts') as HTMLInputElement;
    let  txtPercentage = document.querySelector('#txtPercentage') as HTMLInputElement;
    let  txtOptional = document.querySelector('#txtOptional') as HTMLInputElement;
    let  txtOptional2 = document.querySelector('#txtOptional2') as HTMLInputElement;


    frmContact.onsubmit = () => {
        let Course = txtCourse.value;
        let Teacher = txtTeacher.value;
        let Contacts = txtContacts.value;
        let Percentage = txtPercentage.value;
        let Optional = txtOptional.value;
        let Optional2 = txtOptional2.value;
    
        let row = tblContact.insertRow()
        let cell = row.insertCell()
        cell.innerHTML = Course;
        cell = row.insertCell()
        cell.innerHTML = Teacher;
        cell = row.insertCell()
        cell.innerHTML = Contacts;
        cell = row.insertCell()
        cell.innerHTML = Percentage;
        cell = row.insertCell()
        cell.innerHTML = Optional;
        cell = row.insertCell()
        cell.innerHTML = Optional2;
        cell = row.insertCell()


        return false;
    };

}