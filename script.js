document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting y default
        event.preventDefault();

        // Get the values of the form fields
        const formData = new formData (form);
        const formObject = Object.fromEntries(formData.entries());


        // validation
        if (!formObject.name || !formObject.message){
            alert('please fill in all fields');
            return;
        }

        fetch('/submitform',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: JSON.stringify(formObject)

        })

        .then(response => response.text())
        .then(data=> {
            alert(data);
            form.reset();
        })

        .catch(error => {
            console.error('Error', Error);
            alert("Submission Error");

         });



    });

    
    
        
    });
;