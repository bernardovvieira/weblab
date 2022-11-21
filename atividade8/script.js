function valida_form() {

    // Autor
    var autor = document.getElementById("autor");
    if (autor.value == "") {
        document.getElementById("ra").innerHTML = "Informe o autor principal!";
    }
    autor.focus();

    // CPF
    var cpf = document.getElementById("cpf");
    if (cpf.value == "") {
        document.getElementById("rcpf").innerHTML = "Informe o CPF!";
    }
    cpf.focus();

    // E-mail
    var email = document.getElementById("email");
    if (email.value == "") {
        document.getElementById("remail").innerHTML = "Informe o e-mail!";
    }
    email.focus();

    // Autor 2
    var autor2 = document.getElementById("autor2");
    if (autor2.value == "") {
        document.getElementById("ra2").innerHTML = "Informe o autor 2!";
    }
    autor2.focus();

    // Autor 3
    var autor3 = document.getElementById("autor3");
    if (autor3.value == "") {
        document.getElementById("ra3").innerHTML = "Informe o autor 3!";
    }
    autor3.focus();

    // Autor 4
    var autor4 = document.getElementById("autor4");
    if (autor4.value == "") {
        document.getElementById("ra4").innerHTML = "Informe o autor 4!";
    }
    autor4.focus();

    // Autor 5
    var autor5 = document.getElementById("autor5");
    if (autor5.value == "") {
        document.getElementById("ra5").innerHTML = "Informe o autor 5!";
    }
    autor5.focus();

    // Título
    var tit = document.getElementById("tit");
    if (tit.value == "") {
        document.getElementById("rtit").innerHTML = "Informe o título!";
    }
    tit.focus();

    // Área de conhecimento
    var area = document.getElementById("area");
    if (area.value == "") {
        document.getElementById("rarea").innerHTML = "Informe a área do conhecimento!";
    }
    area.focus();

    // Palavras-chave
    var palav = document.getElementById("palav");
    if (palav.value == "") {
        document.getElementById("rp").innerHTML = "Informe algumas palavras-chave!";
    }
    palav.focus();

    // Modalidade
    if (document.form.modalidade.value == "") {
        document.getElementById("rmod").innerHTML = "Informe a modalidade!";
    }

    // Tipo
    if (document.form.tipo.value == "") {
        document.getElementById("rtipo").innerHTML = "Informe o tipo!";
    }
    
    // Apresentação
    if (document.form.apresentacao.value == "") {
        document.getElementById("rapresentacao").innerHTML = "Informe a apresentação!";
    }

    // Arquivo
    var arq = document.getElementById('anexo');
    if (arq.files && arq.files[0]) {
        console.log(arquivoInput.files[0].size);
    } else {
        document.getElementById("ranexo").innerHTML = "Adicione um anexo!";
    }

 }