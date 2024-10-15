function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const email = "example@example.com";
if (isValidEmail(email)) {
    console.log(`${email} is valid email address.`);
} else {
    console.log(`${email} is not valid email address.`);
}
