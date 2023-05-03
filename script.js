function retornaV(conteudo) {
    if (!("erro" in conteudo)){
        document.getElementById('endereco').value=(conteudo.logradouro)
        document.getElementById('bairro').value = (conteudo.bairro)
        document.getElementById('cidade').value = (conteudo.localidade)
        document.getElementById('complemento').value = (conteudo.complemento)
    }else{
        alert("CEP não encontrado")
    }
}

function buscacep(valor) {
    var cep = valor.replace(/\D/g, '')
    if(cep != ""){
        var validarcep = /^[0-9]{8}$/
        if(validarcep.test(cep)){
            document.getElementById('endereco').value= ". . ."
            document.getElementById('bairro').value= ". . ."
            document.getElementById('cidade').value= ". . ."
            document.getElementById('complemento').value= ". . ."
            var script = document.createElement('script')
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=retornaV`
            document.body.appendChild(script)
        }else{
            alert("Formato inválido")
        }
    }
}
