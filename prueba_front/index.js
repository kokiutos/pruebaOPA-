function findPerfectNumbers() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const perfectNumbers = [];
  
    for (let num = start; num <= end; num++) {
      if (isPerfectNumber(num)) {
        perfectNumbers.push(num);
      }
    }
  
       
        const perfectNumbersString = perfectNumbers.join(',');

        
        sendDataToBackend(perfectNumbersString);

    displayPerfectNumbers(perfectNumbers);
  }
  
  function isPerfectNumber(num) {
    let sum = 1; 
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) {
          sum += num / i;
        }
      }
    }
  
    return sum === num && num !== 1;
  }

  function sendDataToBackend(perfectNumbersString) {
    
    const url = 'http://localhost:3000/api/perfect-numbers';

   
    const perfectNumbers = perfectNumbersString.split(',').map(Number);


    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ perfectNumbers: perfectNumbers })
    };


    fetch(url, requestOptions)
        .then(response => {
            if (response.ok) {
                console.log('Datos enviados al backend correctamente');
            } else {
                console.error('Error al enviar datos al backend');
            }
        })
        .catch(error => {
            console.error('Error al enviar datos al backend:', error);
        });
}
  function displayPerfectNumbers(numbers) {
    const list = document.getElementById('perfectNumbersList');
    list.innerHTML = '';
  
    numbers.forEach(num => {
      const li = document.createElement('li');
      li.textContent = num;
      list.appendChild(li);
    });
  }