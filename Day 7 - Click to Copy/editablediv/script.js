function copyText() {
    // Get the input field
    const input = document.getElementById("myInput");
    
    // Copy the text to the clipboard
    navigator.clipboard.writeText(input.value);
  }
