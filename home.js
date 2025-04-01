 //bags-man,bags
	document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const modal = document.getElementById('buyModal');
    const closeBtn = document.querySelector('.close');
    const buyForm = document.getElementById('buyForm');
    const productField = document.getElementById('product');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            productField.value = product;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to server or display a confirmation message
        alert('Form submitted successfully!');
        modal.style.display = 'none';
    });
});



//hours-man
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button3');
    const modal = document.getElementById('buyModal');
    const closeBtn = document.querySelector('.close');
    const buyForm = document.getElementById('buyForm');
    const productField = document.getElementById('product');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            productField.value = product;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to server or display a confirmation message
        alert('Form submitted successfully!');
        modal.style.display = 'none';
    });
});

//hours
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button2');
    const modal = document.getElementById('buyModal');
    const closeBtn = document.querySelector('.close');
    const buyForm = document.getElementById('buyForm');
    const productField = document.getElementById('product');

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            productField.value = product;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    buyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to server or display a confirmation message
        alert('Form submitted successfully!');
        modal.style.display = 'none';
    });
});



//heels,shoes,shoesm
document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button2');

    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Check if a size is selected
            const selectedSize = this.closest('.shoe-item').querySelector('input[name="size"]:checked');
            
            if (selectedSize) {
                // Show the modal for user information
                const modal = document.getElementById('myModal');
                modal.style.display = 'block';
                
                // Close modal functionality
                const closeBtn = modal.querySelector('.close');
                closeBtn.addEventListener('click', function() {
                    modal.style.display = 'none';
                });

                // Close modal if user clicks outside of it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = 'none';
                    }
                };

                // Handle form submission
                const userInfoForm = modal.querySelector('#userInfoForm');
                userInfoForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Collect user information
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    const username = document.getElementById('username').value;
                    const phone = document.getElementById('phone').value;
                    const location = document.getElementById('location').value;
                    
                    // Example: Output collected information to console
                    console.log('Email:', email);
                    console.log('Password:', password);
                    console.log('Username:', username);
                    console.log('Phone:', phone);
                    console.log('Location:', location);
                    
                    // Close the modal after submission
                    modal.style.display = 'none';
                });
            } else {
                // Inform user to select a size
                alert('Please select a size before proceeding to purchase.');
            }
        });
    });
});



//suit
  function changeColor(element, color) {
        // Get the base data attribute from the parent element
        let base = element.parentElement.getAttribute('data-base');

        // Switch statement to change image based on color
        let newSrc;
        switch (color) {
            case 'black':
                newSrc = `images/suit/s6.jpg`;
                break;
            case '#806517':
                newSrc = `images/suit/s6-brown.jpg`;
                break;
            case '#810541':
                newSrc = `images/suit/s7.jpg`;
                break;
            case '#150517':
                newSrc = `images/suit/s7-black.jpg`;
                break;
            
            case '#151B54':
                newSrc = `images/suit/s8.webp`;
                break;
            case '#000000':
                newSrc = `images/suit/s8-black.webp`;
                break;
            case '#7D053F':
                newSrc = `images/suit/s8-red.webp`;
                break;
           
            default:
                newSrc = `images/dress/${base}.jpg`;
        }

        // Find the corresponding image element and update its src attribute
        let imgElement = element.parentElement.parentElement.querySelector('img');
        if (imgElement) {
            imgElement.src = newSrc;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const buyButtons = document.querySelectorAll('.buy-button2');

        buyButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // Check if a size is selected
                const selectedSize = this.closest('.item2').querySelector('input[type="radio"]:checked');

                if (selectedSize) {
                    // Show the modal for user information
                    const modal = document.getElementById('myModal');
                    modal.style.display = 'block';

                    // Close modal functionality
                    const closeBtn = modal.querySelector('.close');
                    closeBtn.addEventListener('click', function() {
                        modal.style.display = 'none';
                    });

                    // Close modal if user clicks outside of it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = 'none';
                        }
                    };

                    // Handle form submission
                    const userInfoForm = modal.querySelector('#userInfoForm');
                    userInfoForm.addEventListener('submit', function(e) {
                        e.preventDefault();

                        // Collect user information
                        const email = document.getElementById('email').value;
                        const password = document.getElementById('password').value;
                        const username = document.getElementById('username').value;
                        const phone = document.getElementById('phone').value;
                        const location = document.getElementById('location').value;

                        // Example: Output collected information to console
                        console.log('Email:', email);
                        console.log('Password:', password);
                        console.log('Username:', username);
                        console.log('Phone:', phone);
                        console.log('Location:', location);

                        // Close the modal after submission
                        modal.style.display = 'none';
                    });
                } else {
                    // Inform user to select a size
                    alert('Please select a size before proceeding to purchase.');
                }
            });
        });
    });
	
	
	
//tshirt
 document.addEventListener('DOMContentLoaded', function() {
        const buyButtons = document.querySelectorAll('.buy-button2');

        buyButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // Check if a size is selected
                const selectedSize = this.closest('.item').querySelector('input[type="radio"]:checked');

                if (selectedSize) {
                    // Show the modal for user information
                    const modal = document.getElementById('myModal');
                    modal.style.display = 'block';

                    // Close modal functionality
                    const closeBtn = modal.querySelector('.close');
                    closeBtn.addEventListener('click', function() {
                        modal.style.display = 'none';
                    });

                    // Close modal if user clicks outside of it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = 'none';
                        }
                    };

                    // Handle form submission
                    const userInfoForm = modal.querySelector('#userInfoForm');
                    userInfoForm.addEventListener('submit', function(e) {
                        e.preventDefault();

                        // Collect user information
                        const email = document.getElementById('email').value;
                        const password = document.getElementById('password').value;
                        const username = document.getElementById('username').value;
                        const phone = document.getElementById('phone').value;
                        const location = document.getElementById('location').value;

                        // Example: Output collected information to console
                        console.log('Email:', email);
                        console.log('Password:', password);
                        console.log('Username:', username);
                        console.log('Phone:', phone);
                        console.log('Location:', location);

                        // Close the modal after submission
                        modal.style.display = 'none';
                    });
                } else {
                    // Inform user to select a size
                    alert('Please select a size before proceeding to purchase.');
                }
            });
        });
    });
	


//tshirt-man
document.addEventListener('DOMContentLoaded', function() {
        const buyButtons = document.querySelectorAll('.buy-button2');

        buyButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();

                // Check if a size is selected
                const selectedSize = this.closest('.item').querySelector('input[type="radio"]:checked');

                if (selectedSize) {
                    // Show the modal for user information
                    const modal = document.getElementById('myModal');
                    modal.style.display = 'block';

                    // Close modal functionality
                    const closeBtn = modal.querySelector('.close');
                    closeBtn.addEventListener('click', function() {
                        modal.style.display = 'none';
                    });

                    // Close modal if user clicks outside of it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = 'none';
                        }
                    };

                    // Handle form submission
                    const userInfoForm = modal.querySelector('#userInfoForm');
                    userInfoForm.addEventListener('submit', function(e) {
                        e.preventDefault();

                        // Collect user information
                        const email = document.getElementById('email').value;
                        const password = document.getElementById('password').value;
                        const username = document.getElementById('username').value;
                        const phone = document.getElementById('phone').value;
                        const location = document.getElementById('location').value;

                        // Example: Output collected information to console
                        console.log('Email:', email);
                        console.log('Password:', password);
                        console.log('Username:', username);
                        console.log('Phone:', phone);
                        console.log('Location:', location);

                        // Close the modal after submission
                        modal.style.display = 'none';
                    });
                } else {
                    // Inform user to select a size
                    alert('Please select a size before proceeding to purchase.');
                }
            });
        });
    });