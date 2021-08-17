

let writing = str => {
    let arrFromStr = str.split('');
    let i = 0;
    let printStr = setInterval(function(){
       document.getElementById('maquina').innerHTML += arrFromStr[i]; 
       i++;

       if (i === arrFromStr.length ){
           clearInterval(printStr);
       }
    },200);
}

writing('Hola, soy Jeason Cueva.');