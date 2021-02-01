



//Define the language reload anchors

let dataReload = document.querySelectorAll('[data-reload]')

//language translation 

let language = {
    en: {
        welcome: "Welcome everyone"
    },
    fr: {
        welcome: "Bienvenus à tous"
    },
    de: {
        welcome: "Sei Wilkommen"
    },
    nl: {
        welcome: "Welkom iedereen"
    }
}

//define language with window.hash
if(window.location.hash){
    if (window.location.hash === '#fr'){
        hi.textContent = language.fr.welcome;
        } else if (window.location.hash === '#de'){
        hi.textContent = language.de.welcome;
            } else {
        hi.textContent = language.nl.welcome;
                }
}

//Define language reload onclick illiteration
for(let i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function(){
        location.reload(true);
    }
}