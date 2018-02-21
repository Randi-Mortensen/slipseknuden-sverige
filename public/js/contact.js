console.log("filer indlæst");



    // Når der klikkes på knappen skal følgende udføres
    document.querySelector("#knap").addEventListener('click', () => {
console.log("test");
        
        //kalder function
        formValidation()

    })

    function formValidation () {
        // var x = document.forms["form"]["name"].value;
        var x = document.forms["myForm"]["user_name"].value;
        
            console.log(x);
        if (x == "") {

            alert ("Dit navn er ikke udfyldt");
            return false;
                
        } 

        var y = document.forms["myForm"]["user_mail"].value;
        if (y == "") {
                
            alert ("E-mail Skal udfyldes");
            return false;
                
        }

        var z = document.forms["myForm"]["user_message"].value;
        if (z == "") {
                
            alert ("Skriv venligst din besked");
            return false;
                
        }

    } 