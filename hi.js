const capitalizLetter = (text) => {
     return text.slice(0, 1).toUpperCase() + text.slice(1);
     }; 
      
     const capitalizLetterInObject = (obj) => {
     const keys = Object.keys(obj); 
      
     for (let i = 0; i < keys.length; i++) {
     if (typeof obj[keys[i]] === "string") {
     obj[keys[i]] = capitalizLetter(obj[keys[i]]); 
      }
      }
     return obj;
     };
     console.log(capitalizLetterInObject(stringObject));