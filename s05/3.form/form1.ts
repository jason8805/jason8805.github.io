namespace s05form {
    // get all elements

    let frmContact = document.querySelector('#frmContact') as HTMLFormElement;
    let txtFirstName = document.querySelector('#txtFirstName') as HTMLInputElement;
    
    let firstName = txtFirstName.value;

    frmContact.onsubmit = () => {
        let firstName = txtFirstName.value;
        alert(`hello ${firstName}`);

        return false;

    }
}