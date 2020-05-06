let who = ['Mi perro','Mi hijo','La vecina','Mi cuñao'];
let what = ['le gusta el durazno','duerme','ronca','habla mucho','no se calla nunca'];
let when = ['en clases','todo el rato','cuando esta trabajando','durante la comida','mientras esta en la ducha'];
                
    function aleatorio() {            
                var uno = Math.floor(Math.random()* who.length);
                var dos = Math.floor(Math.random()* what.length);
                var tres = Math.floor(Math.random()* when.length);

               var mensaje = alert(who[uno] + " " + what[dos] + " " + when[tres]);
               return;
               
    }
    
