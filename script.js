function hello(window) {  
    var helloSpeaker = {};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    }
    hello(window);

    function bye(window){
        var byeSpeaker = {};
        var speakWord = "Good Bye";
        
        byeSpeaker.speak = function (names) {
          console.log(speakWord + " " + names);
        }
         
         window.byeSpeaker = byeSpeaker;
        }
        bye(window);

function Call() {

    var names = ["Saket", "Ameya", "Ankush", "James", "Raj", "Johnny", "Laksh", "Jiasmit", "Sahil", "Tanvi"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    }
    Call();