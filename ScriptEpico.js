function fazerCoisa(){
    document.getElementById("Minhoca").innerText = "gosto de minhoca :)"
    document.getElementById("akiyama").src = "Images/akiyama.png"
    document.getElementById("akiyamaNav").src = "Images/akiyamaFoto.jpg"

    console.log("Minhoca");
}

function registarConta(){
    console.log("penis");

    var inputMail = document.getElementById("mail").value;
    var inputName = document.getElementById("name").value;
    var inputPass = document.getElementById("pass").value;

    if(inputMail == "" || inputName == "" || inputPass == ""){
        window.alert("Conta não foi registada, verifique as informações");
    }else{
        localStorage.setItem("mail", inputMail);
       
        localStorage.setItem("name", inputName);    
       
        localStorage.setItem("pass", inputPass);

        window.alert("Conta registada com sucesso☺");
    }

    
}