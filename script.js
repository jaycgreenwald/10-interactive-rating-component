function recordRating() {
    const rateValue = document.getElementsByName('rate');
              
    for(i = 0; i < rateValue.length; i++) {
        if(rateValue[i].checked)
            document.getElementById("selected-rating").innerHTML = 
             "You selected " + rateValue[i].value + " out of 5";
    }
    
    const feedbackCard = document.getElementById("feedback-card");
    feedbackCard.style.display = "none";
    const thankYouCard = document.getElementById("thankyou-card");
    thankYouCard.style.display = "block";
}