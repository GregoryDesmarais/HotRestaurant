$("#submit-btn").on('click',function(event){
    event.preventDefault();
    var newReservation = {
    userName: $("#name-input").val().trim(),
    phoneNum: $("#number-input").val().trim(),
    email: $("#email-input").val().trim(),
    id: $("#id-input").val().trim(),
    };

    $.post("/reserve", newReservation).then(function(data){
        if(data.result === true)
        {
            alert("Your reservation has been added.");
        }else{
            alert("Sorry, you are on the wait list.");
        }
    })
});

