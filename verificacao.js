function Validar() {
    var Nome = document.getElementById("primeironome").value; 
    var Sobrenome = document.getElementById("segundonome").value;
    var Email = document.getElementById("email").value;
    var Cidade = document.getElementById("cidade").value;
    var Estado = document.getElementById("estado").value;
    var CEP = document.getElementById("cep").value;
    var Codigo = document.getElementById("codigo").value;
    
    
    
    
    
    if (Nome=='') {
        alert("Insira o titular do cartão");
        return false;
    } else if (Sobrenome=='') {
    alert("Insira o número do cartão") 
    return false }
    else if(Email=='') {
    alert("Insira a data de expiração") 
    return false }
    else if (Cidade=='') {
    alert("Insira a cidade")
    return false }
    else if (Estado=='') {
    alert("Insira o estado")
    return false }
    else if (CEP=='') {
    alert("Insira o CEP")
    return false }
    else if (Codigo=='') {
    alert("Insira o código de segurança")
    return false }
    }
    
    function Checkbox() {
        var Termos = document.getElementById("termos")
    
        if (Termos.checked) {
            alert("Produto adquirido")
            window.location.href="index.html"
            return false
    }
    
    else {
        alert("Você precisa preencher todos os campos")
        return false
        
    }
    
    }