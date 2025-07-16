var cad = "Hola";
var traduccion = "";

function esVocal(char) {
  const regex = /^[aeiouAEIOU]$/;
  return regex.test(char);
}

function traducir(cad){
    for (var i = 0; i < cad.length; i++){
        if(esVocal(cad.charAt(i))==true){
            traduccion += cad.charAt(i)+'p'+cad.charAt(i);
        }else{
            traduccion += cad.charAt(i);
        }
    }
    console.log(traduccion)
}

traducir(cad);