const empty = "",
  uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lCase = "abcdefghijklmnopqrstuvwxyz",
  number = "0123456789",
  symbol = "!@#$%^&*()+,-./:;<=>?";

const pLength = document.getElementById("p-length"),
  upperCase = document.getElementById("p-uppercase"),
  lowerCase = document.getElementById("p-lowercase"),
  pNumber = document.getElementById("p-number"),
  pSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  copy = document.getElementById("copy"),
  password = document.getElementById("password");

submit.addEventListener("click", () => {
//   let password = generatePassword();
    let initialPassword = empty;
    upperCase.checked ? (initialPassword += uCase) : "";
    lowerCase.checked ? (initialPassword += lCase) : "";
    pNumber.checked ? (initialPassword += number) : "";
    pSymbol.checked ? ( initialPassword += symbol ) : "";
    
    password.value = generatePassword(pLength.value, initialPassword);
});


function generatePassword( length, initialPassword ) { 
    let pass = "";
    for ( let i = 0; i < length; i++ ) { 
        pass += initialPassword.charAt( Math.floor( Math.random() * initialPassword.length ) );
        // pass += initialPassword[ Math.floor( Math.random() * initialPassword.length ) ];

    }
    return pass;
}

copy.addEventListener( "click", () => {
    if ( password.value === "" ) {
        alert( "Please generate a new password" );
    } else { 
        navigator.clipboard.writeText( password.value );
        alert( "Password copied to clipboard" );
    }
    // password.select();
    // document.execCommand("copy");
});
