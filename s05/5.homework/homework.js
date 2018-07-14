var cs31task;
(function (cs31task) {
    var tblContact = document.querySelector('#tblContact');
    var frmContact = document.querySelector('#frmContact');
    var txtFirstName = document.querySelector('#txtFirstName');
    var txtLastName = document.querySelector('#txtLastName');
    var txtEmail = document.querySelector('#txtEmail');
    var txtAdress = document.querySelector('#txtAdress');
    var txtPhone = document.querySelector('#txtPhone');
    var txtState = document.querySelector('#txtState');
    frmContact.onsubmit = function () {
        var firstname = txtFirstName.value;
        var LastName = txtLastName.value;
        var Email = txtEmail.value;
        var Adress = txtAdress.value;
        var Phone = txtPhone.value;
        var State = txtState.value;
        var row = tblContact.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = firstname;
        cell = row.insertCell();
        cell.innerHTML = LastName;
        cell = row.insertCell();
        cell.innerHTML = Email;
        cell = row.insertCell();
        cell.innerHTML = Adress;
        cell = row.insertCell();
        cell.innerHTML = Phone;
        cell = row.insertCell();
        cell.innerHTML = State;
        cell = row.insertCell();
        return false;
    };
})(cs31task || (cs31task = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21ld29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFFBQVEsQ0FzQ2pCO0FBdENELFdBQVUsUUFBUTtJQUNkLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBQzNFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFvQixDQUFDO0lBQzFFLElBQUssWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFxQixDQUFDO0lBQ2hGLElBQUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO0lBQzlFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBQ3hFLElBQUssU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQzFFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBQ3hFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBR3hFLFVBQVUsQ0FBQyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUd2QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDLENBQUM7QUFFTixDQUFDLEVBdENTLFFBQVEsS0FBUixRQUFRLFFBc0NqQiJ9