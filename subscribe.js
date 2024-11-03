document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.querySelector('.email-input').value;

    // Here you can add the logic to handle the email submission
    console.log('Email subscribed:', emailInput);
    alert('Thank you for subscribing with ' + emailInput);
});
