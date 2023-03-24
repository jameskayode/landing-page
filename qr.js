// Get the elements that we need to manipulate
// const qrCode = document.querySelector('.qr-code');
// const customerDetailsButton = document.querySelector('#customer-details button[type="submit"]');
// const paymentButton = document.querySelector('#payment button[type="submit"]');

const cardNumberInput = document.querySelector('#card-number');
const expiryDateInput = document.querySelector('#expiry-date');
const cvvInput = document.querySelector('#cvv');
const accountNumberInput = document.querySelector('#account-number');
const lastPaymentInput = document.querySelector('#last-payment');
const addressInput = document.querySelector('#address');
const fullNameInput = document.querySelector('#full-name');

// get the elements
const paymentCustomer = document.querySelector('.big');
const customerDetails = document.querySelector('#customer');
const paymentDetails = document.querySelector('#payment');
const showCustomerBtn = document.querySelector('#showCustomer');
const showPaymentBtn = document.querySelector('#showPayment');
const customerForm = document.querySelector('#customerDetails');
const paymentForm = document.querySelector('#paymentDetails');


// show customer details by default
customerDetails.classList.remove('hidden');
customerForm.classList.remove('hidden');

// add click event listeners to buttons
showCustomerBtn.addEventListener('click', function() {
  customerDetails.classList.remove('hidden');
  paymentDetails.classList.add('hidden');
  customerForm.classList.remove('hidden');
  paymentForm.classList.add('hidden');
});
showPaymentBtn.addEventListener('click', function() {
    customerDetails.classList.add('hidden');
    paymentDetails.classList.remove('hidden');
    customerForm.classList.add('hidden');
    paymentForm.classList.remove('hidden');
  });
  
  // make the payment and customer details big on page load
  paymentCustomer.classList.add('big');
  paymentCustomer.classList.remove('hidden');
  
  // hide the buttons on page load
  document.querySelector('#buttons').classList.add('hidden');

// Define the event listeners
// customerDetailsButton.addEventListener('click', showCustomerDetails);
// paymentButton.addEventListener('click', validatePayment);

// // Define the functions that handle the events
// function showCustomerDetails(event) {
//     event.preventDefault();
//     qrCode.style.display = 'none';
//     document.querySelector('#customer-details').classList.remove('hidden');
// }

// function validatePayment(event) {
//     event.preventDefault();
//     const cardNumber = cardNumberInput.value;
//     const expiryDate = expiryDateInput.value;
//     const cvv = cvvInput.value;
//     // Add any other validation logic that you need here
//     if (!cardNumber || !expiryDate || !cvv) {
//         alert('Please fill in all the required payment details.');
//     } else {
//         alert('Payment successful!');
//     }
// }

