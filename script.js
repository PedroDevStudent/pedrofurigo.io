// Contact
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contactForm = document.getElementById('Contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();

    if (name.value.lenght <2) {
        errorElement.innerHTML = 'Your Name or company name should be at least 2 characters long.';
        return false;
    }
    if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Please enter a valid email address.';
    }
    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible';

    e.preventDefault();
    setTimeout(function () {
        successMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
    }, 6000);

    return true;
}

const emailIsValid = email => { //validate email, for fake mails, or spam mails
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);

//responsive topnav
