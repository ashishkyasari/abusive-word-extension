
// Insert your own replacements for these words here (if you know what they are)
// Remove the slashes in line 101 and comment out the previous line to implement these custom words 
// However, the YouTube video censoring will not work if you do this.

//fetch('https://abusive-words.herokuapp.com/curse').then(response => response.text()).then(response => console.log(response));


const mainFunction = async () =>{
    async function fetchData(){
        const response = await fetch('https://script.googleusercontent.com/a/macros/walchandsangli.ac.in/echo?user_content_key=ZoEUFSMUWYIoVkISsGCPOzmWLwwFEqtZcWhJAokhiRgytUyLGjS0zMZB__5qRPw7N6WLVDmBnM8Cwr7PMYoeWbeAeHIWjt_tOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKAj1Djq1zVCLvZsn2ge3mUTdYlGa-QTIWDryfhECjZEnA4Lv-PoqBQ3PW19TUaZIBhIQXHLTgSrbvwWnk6pZ3a2jFU3Y_dW9O4bs2e-q9NLTvuNB_8kAm5kmpphd_0YgwwPHEOWDBUJV9z9Jw9Md8uu&lib=M1LouDEj0Mx68IENyPIXipVMSbshm3xeO');
        if(!response.ok){
            const message = `an error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    }
    fetchData().catch(error=>{
        console.log(error.message);
    });

    const sol = await fetchData();
    const badWords = sol.data;
    console.log(badWords);

    setTimeout(findText(document.body), 1000) // After a second of load time

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach(findText)
    });
});

observer.observe(document.body,  
    { 
        subtree: true,
        childList: true // Look for any additions of child nodes
    });

function findText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(findText); // Dig deeper in the DOM
    } 
    else if (element.nodeType === Text.TEXT_NODE) {
        replaceText(element);
    }
    
}

function replaceText(textElement) {
   // Some textual elements may be by themselves. Put spaces to accomodate
   textElement.textContent = ` ${textElement.textContent} `;
   for (let encryptedBadWord in badWords) {
        var decryptedBadWord = badWords[encryptedBadWord];
        if (encryptedBadWord != "[ __ ]") {
            // decryptedBadWord = decrypt(encryptedBadWord);
            decryptedBadWord = badWords[encryptedBadWord];
            decryptedBadWord = " " + decryptedBadWord + " ";
            // So we can read variables as strings
            var sRegExpInput = new RegExp(decryptedBadWord, "gi");
            textElement.textContent = textElement.textContent.replace(sRegExpInput, " ████ ");
            // eval(`textElement.textContent = textElement.textContent.replace(/${decryptedBadWord}/gi, "*${badWords[encryptedBadWord]}*")`);
            // eval(`textElement.textContent = textElement.textContent.replace(/ ${decryptedBadWord} /gi, " ████ ")`);
        }
        // For YouTube subtitles
        else {
            try {
                if (textElement.parentElement.className === "captions-text" || 
                textElement.parentElement.className === "ytp-caption-segment") {
                    // replace the no break space with a normal space for detection purposes
                    textElement.textContent = textElement.textContent.replace(/ /gi, " ");
                    textElement.textContent = textElement.textContent.replace(/\[ __ \]/gi, " ████ ");
                }
            }
            catch(Exception) {} // pass
        }

    }
    // Get rid of added spaces.
    textElement.textContent = textElement.textContent.slice(1, textElement.textContent.length - 1);
}
}

mainFunction();





// var badWords = [
// ];

// setTimeout(findText(document.body), 1000) // After a second of load time

// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         mutation.addedNodes.forEach(findText)
//     });
// });

// observer.observe(document.body,  
//     { 
//         subtree: true,
//         childList: true // Look for any additions of child nodes
//     });

// function findText(element) {
//     if (element.hasChildNodes()) {
//         element.childNodes.forEach(findText); // Dig deeper in the DOM
//     } 
//     else if (element.nodeType === Text.TEXT_NODE) {
//         replaceText(element);
//     }
    
// }

// function replaceText(textElement) {
//    // Some textual elements may be by themselves. Put spaces to accomodate
//    textElement.textContent = ` ${textElement.textContent} `;
//    for (let encryptedBadWord in badWords) {
//         var decryptedBadWord = badWords[encryptedBadWord];
//         if (encryptedBadWord != "[ __ ]") {
//             // decryptedBadWord = decrypt(encryptedBadWord);
//             decryptedBadWord = badWords[encryptedBadWord];
//             decryptedBadWord = " " + decryptedBadWord + " ";
//             // So we can read variables as strings
//             var sRegExpInput = new RegExp(decryptedBadWord, "gi");
//             textElement.textContent = textElement.textContent.replace(sRegExpInput, " ████ ");
//             // eval(`textElement.textContent = textElement.textContent.replace(/${decryptedBadWord}/gi, "*${badWords[encryptedBadWord]}*")`);
//             // eval(`textElement.textContent = textElement.textContent.replace(/ ${decryptedBadWord} /gi, " ████ ")`);
//         }
//         // For YouTube subtitles
//         else {
//             try {
//                 if (textElement.parentElement.className === "captions-text" || 
//                 textElement.parentElement.className === "ytp-caption-segment") {
//                     // replace the no break space with a normal space for detection purposes
//                     textElement.textContent = textElement.textContent.replace(/ /gi, " ");
//                     textElement.textContent = textElement.textContent.replace(/\[ __ \]/gi, " ████ ");
//                 }
//             }
//             catch(Exception) {} // pass
//         }

//     }
//     // Get rid of added spaces.
//     textElement.textContent = textElement.textContent.slice(1, textElement.textContent.length - 1);
// }

// // function decrypt(word) {
// //     let newWord = new String;
// //     let chars = word.split("");
// //     for (let char of chars) {
// //         newWord += decryptionKey[char];
// //     }
// //     return newWord;
// // }
