var task;
(function (cs31task) {
    var tblContact = document.querySelector('#tblContact');
    var frmContact = document.querySelector('#frmContact');
    var txtCourse = document.querySelector('#txtCourse');
    var txtTeacher = document.querySelector('#txtTeacher');
    var txtContacts = document.querySelector('#txtContacts');
    var txtPercentage = document.querySelector('#txtPercentage');
    var txtOptional = document.querySelector('#txtOptional');
    var txtOptional2 = document.querySelector('#txtOptional2');
    frmContact.onsubmit = function () {
        var Course = txtCourse.value;
        var Teacher = txtTeacher.value;
        var Contacts = txtContacts.value;
        var Percentage = txtPercentage.value;
        var Optional = txtOptional.value;
        var Optional = txtOptional.value;
        var row = tblContact.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = Course;
        cell = row.insertCell();
        cell.innerHTML = Teacher;
        cell = row.insertCell();
        cell.innerHTML = Contacts;
        cell = row.insertCell();
        cell.innerHTML = Percentage;
        cell = row.insertCell();
        cell.innerHTML = Optional;
        cell = row.insertCell();
        cell.innerHTML = Optional2;
        cell = row.insertCell();
        return false;
    };
})(cs31task || (cs31task = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXdvcmsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21ld29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFFBQVEsQ0FzQ2pCO0FBdENELFdBQVUsUUFBUTtJQUNkLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBQzNFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFvQixDQUFDO0lBQzFFLElBQUssWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFxQixDQUFDO0lBQ2hGLElBQUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFxQixDQUFDO0lBQzlFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBQ3hFLElBQUssU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQzFFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBQ3hFLElBQUssUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFxQixDQUFDO0lBR3hFLFVBQVUsQ0FBQyxRQUFRLEdBQUc7UUFDbEIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2pDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFM0IsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hDLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUd2QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDLENBQUM7QUFFTixDQUFDLEVBdENTLFFBQVEsS0FBUixRQUFRLFFBc0NqQiJ9