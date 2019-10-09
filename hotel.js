$("#submit-btn").on('click',function(event){
    event.preventDefault();
    var newReservation = {
    userName: $("#name-input").val().trim(),
    phoneNum: $("#number-input").val().trim(),
    email: $("#email-input").val().trim(),
    id: $("#id-input").val().trim(),
    };

    $.post("/api/makereservation", newReservation)
    .then(function(data){
        console.log("creating reservation", data);
    })
})


