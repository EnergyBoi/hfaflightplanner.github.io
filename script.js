function sendWebhook(event) {
    event.preventDefault(); // Prevent form submission
  
    const codeInput = document.getElementById('code');
    const codeValue = codeInput.value;
  
    // Replace 'YOUR_VALID_CODE' with the correct code required to send the webhook
    const validCode = '123';
  
    if (codeValue === validCode) {
      // Create the payload for the webhook
      const payload = {
        departure: document.getElementById('departure').value,
        destination: document.getElementById('destination').value,
        date: document.getElementById('date').value,
        passengers: document.getElementById('passengers').value
      };
  
      // Simulate sending the webhook request
      simulateWebhook(payload);
    } else {
      alert('Invalid code. Please enter the correct code.');
    }
  }
  
  function simulateWebhook(payload) {
    // Simulate sending the webhook request (replace with your own logic)
    console.log('Simulating sending webhook:', payload);
    alert('Webhook simulated and payload logged in the console. Check the console for the payload details.');
  }
  