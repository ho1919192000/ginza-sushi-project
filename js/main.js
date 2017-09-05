$(document).ready(function () {
    //empty form place hloder
    
    $("#contactForm").validate({
        submitHandler: function () {
            var values = getFormValues();
            //console.log(values);
            var url = "js/process.php";
            $.post(url, values, function (json) {
                //console.log(json);
                displayMessage(json);
            });
        }
    });

    function getFormValues(event) {
        

        var formValues = {};
        
        formValues.fullName = $("#name").val();
        formValues.phone = $("#phone").val();
        formValues.emailAddress = $("#email").val();
        formValues.numberOfTheGuest = $("#numberOfTheGuest").val();
        formValues.date = $("#date").val();
        formValues.time = $("#time").val();
        formValues.message = $("#time").val();


        return formValues;
    }

    function displayMessage(json) {

        var display = $("#fadeOut-section");
        var data = "<h2>" + json.message + "</h2><p>We will contact you as soon as possible.</p>";
        
        display.empty().append(data).fadeIn("slow");
        //$("form").fadeOut("slow");
    }
});