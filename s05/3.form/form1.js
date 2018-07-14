var s05form;
(function (s05form) {
    // get all elements
    var frmContact = document.querySelector('#frmContact');
    var txtFirstName = document.querySelector('#txtFirstName');
    var firstName = txtFirstName.value;
    frmContact.onsubmit = function () {
        var firstName = txtFirstName.value;
        alert("hello " + firstName);
        return false;
    };
})(s05form || (s05form = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLE9BQU8sQ0FlaEI7QUFmRCxXQUFVLE9BQU87SUFDYixtQkFBbUI7SUFFbkIsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQW9CLENBQUM7SUFDMUUsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXFCLENBQUM7SUFFL0UsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUVuQyxVQUFVLENBQUMsUUFBUSxHQUFHO1FBQ2xCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDbkMsS0FBSyxDQUFDLFdBQVMsU0FBVyxDQUFDLENBQUM7UUFFNUIsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxFQWZTLE9BQU8sS0FBUCxPQUFPLFFBZWhCIn0=