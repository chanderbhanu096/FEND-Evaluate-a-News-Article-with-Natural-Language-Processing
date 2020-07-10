function checkForName(inputText) {
    var regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
   if(regexp.test(inputText))
   {
       return true;
   }
   else{
       return false;
   }
}
// to check whether the user input is empty or not
function checkForUserInput(inputText, setErrorMessage = true) {
    console.log('Check for user text', inputText);
    //user input is not empty
    if(!inputText) {
        if(setErrorMessage) {
            handleInputError('Please Enter Something');
        }
        return false;
    }
    return true;
}

export { checkForName,checkForUserInput }
