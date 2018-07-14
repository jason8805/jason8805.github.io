namespace cs31task{
    let tblContact = document.querySelector('#tblContact') as HTMLTableElement;
    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let  txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;
    let  txtLastName = document.querySelector('#txtLastName') as HTMLInputElement;
    let  txtEmail = document.querySelector('#txtEmail') as HTMLInputElement;
    let  txtAdress = document.querySelector('#txtAdress') as HTMLInputElement;
    let  txtPhone = document.querySelector('#txtPhone') as HTMLInputElement;
    let  txtState = document.querySelector('#txtState') as HTMLInputElement;


    frmContact.onsubmit = () => {
        let firstname = txtFirstName.value;
        let LastName = txtLastName.value;
        let Email = txtEmail.value;
        let Adress = txtAdress.value;
        let Phone = txtPhone.value;
        let State = txtState.value;
    
        let row = tblContact.insertRow()
        let cell = row.insertCell()
        cell.innerHTML = firstname;
        cell = row.insertCell()
        cell.innerHTML = LastName;
        cell = row.insertCell()
        cell.innerHTML = Email;
        cell = row.insertCell()
        cell.innerHTML = Adress;
        cell = row.insertCell()
        cell.innerHTML = Phone;
        cell = row.insertCell()
        cell.innerHTML = State;
        cell = row.insertCell()


        return false;
    };

}