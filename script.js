const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");

function botonencriptar(){   
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function encriptar(StringAEncriptar){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a","ai"],["o","ober"],["u", "ufat"]]
    StringAEncriptar = StringAEncriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++){
        if(StringAEncriptar.includes(matrizCodigo[i][0])){
            StringAEncriptar = StringAEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1])
        }
    }
    return StringAEncriptar;
}

function botondesencriptar(){   
    const textoDesEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesEncriptado;
}

function desencriptar(StringADesEncriptar){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai","a"],["ober","o"],["ufat", "u"]]
    StringADesEncriptar = StringADesEncriptar.toLowerCase();
    for (let i = 0; i< matrizCodigo.length; i++){
        if(StringADesEncriptar.includes(matrizCodigo[i][0])){
            StringADesEncriptar = StringADesEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1])
        }
    }
    return StringADesEncriptar;
}

function desaparecer() {
    document.getElementById("muneco").style.visibility = "hidden";
    document.getElementById("p2").style.visibility = "hidden";
    document.getElementById("p3").style.visibility = "hidden";

  }




