var cs31task;
(function (cs31task) {
    var ulTasks = document.querySelector('#ulTasks');
    var frmTask = document.querySelector('#frmTask');
    var txtTask = document.querySelector('#txtTask');
    frmTask.onsubmit = function () {
        var task = txtTask.value;
        var liTask = document.createElement('li');
        liTask.innerHTML = task;
        ulTasks.appendChild(liTask);
        txtTask.value = "";
        txtTask.focus();
        return false;
    };
})(cs31task || (cs31task = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLFFBQVEsQ0FvQmpCO0FBcEJELFdBQVUsUUFBUTtJQUNkLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0lBQ3JFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFvQixDQUFDO0lBQ3BFLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFxQixDQUFDO0lBR3JFLE9BQU8sQ0FBQyxRQUFRLEdBQUc7UUFDZixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFeEIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU1QixPQUFPLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxFQXBCUyxRQUFRLEtBQVIsUUFBUSxRQW9CakIifQ==