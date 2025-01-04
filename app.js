const button=document.querySelector('.talk');
const content=document.querySelector('.content');
function speak(text){
    const text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=.9;
    text_speak.volume=1;
    text_speak.pitch=1;
    text_speak.lang='fr-FR'
window.speechSynthesis.speak(text_speak);
}

window.addEventListener('load',async()=>{
    speak('Initialising JARVIS in 3.... 2.... 1...');
    wishMe();
    speak('How may i help you?');
})

function wishMe(){
    let day=new Date();
    let hour=day.getHours();
    console.log(hour)
    if (hour>=6 && hour<=11) {
        speak('Good morning Sir')
    }
    else if(hour>11 && hour<18){
        speak('Good afternoon sir')
    }
    else if(hour>17 && hour <20){
        speak('good evening sir')
    }
    else
        speak('good night sir')
    
}
const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition=new SpeechRecognition();

recognition.onresult=async(event)=>{
    const currentIndex=event.resultIndex;
    const transcript=event.results[currentIndex][0].transcript.toLowerCase();
    console.log(transcript)
    content.textContent=transcript;
    // speak(transcript)
    takeCommand(transcript)
}

button.addEventListener('click',()=>{
    content.innerHTML='Listening...'
    speak('listening')
    recognition.start();
})

function takeCommand(message) {
    message = message.toLowerCase(); // Convert message to lowercase for easier matching
  
    if (message.includes('hello') || message.includes('hey')) {
      speak('Hello sir.... how may I assist you?');
    } 
    else if (message.includes('google') || message.includes('browser')) {
      window.open('https://google.com', '_blank');
      speak('Opening google.com');
    } 
    else if (message.includes('youtube')) {
      window.open('https://www.youtube.com', '_blank');
      speak('Opening YouTube');
    } 
    else if (message.includes('facebook')) {
      window.open('https://www.facebook.com', '_blank');
      speak('Opening Facebook');
    } 
    else if (message.includes('weather')) {
      window.open('https://weather.com', '_blank');
      speak('Opening weather updates for you.');
    } 
    else if (message.includes('time')) {
      const time = new Date().toLocaleTimeString();
      speak(`The current time is ${time}`);
    } 
    else if (message.includes('date')) {
      const date = new Date().toLocaleDateString();
      speak(`Today's date is ${date}`);
    } 
    else if (message.includes('news')) {
      window.open('https://news.google.com', '_blank');
      speak('Opening the latest news.');
    } 
    else if (message.includes('calculator')) {
      window.open('https://www.google.com/search?q=online+calculator', '_blank');
      speak('Opening an online calculator.');
    } 
    else if (message.includes('music')) {
      window.open('https://open.spotify.com', '_blank');
      speak('Playing some music for you.');
    } 
    else if (message.includes('joke')) {
      const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why was the math book sad? It had too many problems.",
        "What do you call fake spaghetti? An impasta!"
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      speak(randomJoke);
    } 
    // New Functionalities Below
    else if (message.includes('translate')) {
      window.open('https://translate.google.com', '_blank');
      speak('Opening Google Translate for you.');
    }
    else if (message.includes('github')) {
      window.open('https://github.com', '_blank');
      speak('Opening GitHub.');
    }
    else if (message.includes('twitter')) {
      window.open('https://twitter.com', '_blank');
      speak('Opening Twitter.');
    }
    else if (message.includes('instagram')) {
      window.open('https://instagram.com', '_blank');
      speak('Opening Instagram.');
    }
    else if (message.includes('linkedin')) {
      window.open('https://linkedin.com', '_blank');
      speak('Opening LinkedIn.');
    }
    else if (message.includes('google map')) {
      window.open('https://www.google.com/maps', '_blank');
      speak('Opening Google Maps.');
    }
    else if (message.includes('email')) {
      window.open('https://mail.google.com', '_blank');
      speak('Opening Gmail.');
    }
    else if (message.includes('game')) {
      window.open('https://play.google.com/store', '_blank');
      speak('Opening the Play Store for games.');
    }
    else if (message.includes('quote')) {
      const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      speak(randomQuote);
    }
    else if (message.includes('shut down')) {
        speak('Goodbye, sir. Redirecting you now.');
        window.location.href = 'https://google.com'; // Replace with a real URL
      }
      
    else {
      speak('I am still learning. Please give me a command I can understand.');
    }
  }
  
