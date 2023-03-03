
function alertDialog() {
    //create ok button
    let okButton = document.createElement("button");
    okButton.textContent = "Ok";

    //add event listener to close alert when ok button is clicked
    okButton.addEventListener("click", function(){
        dialog.close();
    });

    //add elements to alert
    const dialog = document.createElement("dialog");
    dialog.innerHTML = "This is an alert!\n";
    document.body.appendChild(dialog);
    dialog.appendChild(okButton);
    dialog.showModal();
}

function confirmDialog(){
    // create ok button
    const okButton = document.createElement("button");
    okButton.textContent = "Ok";

    // event listener for ok button
    okButton.addEventListener("click", function(){
        dialog.close();
        let output = document.getElementById("confirmOutput");
        output.textContent = "The value returned is true.";
        document.body.removeChild(dialog); 
        setTimeout(() => {
            output.remove();
        }, 3000);
    });

    // create cancel button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";

    //event listener for cancel button
    cancelButton.addEventListener("click", function() {
        dialog.close();
        let output = document.getElementById("confirmOutput1");
        output.textContent = "The value returned is false.";
        document.body.removeChild(dialog);
        setTimeout(() => {
            output.remove();
        }, 3000);
    });

    //text displayed when button is clicked
    const dialog = document.createElement("dialog");
    dialog.style.textAlign = "center";
    dialog.innerHTML = "Do you confirm this?\n";
    document.body.appendChild(dialog);
    dialog.appendChild(okButton);
    dialog.appendChild(cancelButton);
    dialog.showModal();
}

function promptDialog(){
    const dialog = document.createElement("dialog");
    dialog.innerHTML = "What is your name?"; 
    dialog.innerHTML += '<input type="text" id="enteredName">';
    
    const okButton = document.createElement("button");
    okButton.textContent = "Ok";
    dialog.appendChild(okButton);
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    dialog.appendChild(cancelButton);

    document.body.appendChild(dialog);
    dialog.showModal();

    okButton.addEventListener("click", () => {
        dialog.close();
        let output = document.getElementById("promptOutput");
        const name = document.getElementById("enteredName");
        const name1 = name.value;
        var sanitizedName = DOMPurify.sanitize(name1);
        output.innerHTML = `Hello, ${sanitizedName}!`;
        document.body.appendChild(output);
        document.body.removeChild(dialog);
    });

    cancelButton.addEventListener("click", () => {
        dialog.close();
        let output = document.getElementById("promptOutput");
        output.textContent = "User declined prompt."
        document.body.appendChild(output);
        document.body.removeChild(dialog);
    });
}


  
