const login = [ 'matteobelcari977@gmail.com', 'pincopallino@gmail.com', 'pluto43@gmail.com' ]
const emailLogin = document.getElementById ('email-login');
const buttonLogin = document.getElementById('btn-login');
console.log(buttonLogin);

// fine definizione costanti fisse


// creo condizioni per il login

buttonLogin.addEventListener('click',

    function (){

        let accesso = false;
        for (let i = 0; i < login.length; i++ ){
            
            if (login[i] == emailLogin.value)  {
                accesso = true;
                alert("L'email è corretta, sei pronto per giocare");
                gioca.classList.remove('show');                              
            }

        }

        
        if ( accesso == false){
            alert("L'email non è corretta");
        }
    }
)

// inizio parte gioca con i dadi

const generatoreGiocatore = [ '1', '2','3','4','5','6']
console.log(generatoreGiocatore)
const generatoreComputer = [ '6', '5','3','4','2','1']
console.log(generatoreComputer)

const gioca = document.getElementById('btn-gioca');
gioca.addEventListener('click',

    function() {
        // genero numero per il giocatore
        //let numeroGiocatore = Math.floor(Math.random() * 6 + 1);
        let numeroGiocatore = generatoreGiocatore[Math.floor(generatoreGiocatore.length * Math.random())]
        console.log(numeroGiocatore)
        document.getElementById('NUmero-giocatore').innerHTML ='Il numero del giocatore è ' + numeroGiocatore;
        // genero numero per il computer
        let numeroComputer = generatoreComputer[Math.floor(generatoreComputer.length * Math.random())]
        console.log(numeroComputer)
        document.getElementById('Numero-computer').innerHTML ='Il numero del computer è '+ numeroGiocatore;

        if ( numeroGiocatore > numeroComputer){
            alert("Vince il giocatore")
        }
        else if ( numeroGiocatore < numeroComputer){
            alert("Vince il computer")
        }

        else if ( numeroGiocatore = numeroComputer){
            alert("Questo è un pareggio")
        }
        


    }
)