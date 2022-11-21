$(document).ready(function() {
    $("#esconder").click(function() {
      $("#span1").hide();
    });
});

$(document).ready(function() {
    $("#mostrar").click(function() {
        $("#span1").show();
    });
});

$(document).ready(function() {
    $("#vermelho").click(function() {
        $("#span1").attr("style","color:red"); 
    });  
});

$(document).ready(function() {
    $("#preto").click(function() {
        $("#span1").attr("style","color:black"); 
    });  
});

$(document).ready(function() {
    $("#botao1").mouseenter(function() {
      alert("Você selecionou o elemento A!");
    });
});

$(document).ready(function() {
    $("#botao2").mouseenter(function() {
      alert("Você selecionou o elemento B!");
    });
});

$(document).ready(function() {
    $("#span2").on("click", function() {
      $(this).hide();
    });
});

$(document).ready(function() {
    $("#hide").click(function() {
      $("#span3").hide();
    });
});

$(document).ready(function() {
    $("#show").click(function() {
      $("#span3").show();
    });
});

$(document).ready(function() {
    $("#toggle").click(function() {
      $("#span3").toggle();
    });
});

$(document).ready(function() {
    $("#slide").click(function() {
      $("#span3").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("#fade").click(function() {
      $("#span3").fadeToggle("slow");
    });
});

$(document).ready(function() {
    $("#animate").click(function() {
      $("#span3").animate({
        opacity: '0.5'
      });
    });
  });

$(document).ready(function() {
    $("#bdialogo").click(function() {
        $("#dialogo").dialog();
    });
});

$( function() {
    $("#arrastavel").draggable();
    $("#larg").droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass("ui-state-highlight")
          .find("p")
        .html("Sucesso!");
    }
    });
});

$( function() {
    var frutas = [
    "Abacate", "Abacaxi", "Amora", "Banana", "Figo", "Damasco", "Carambola", "Goiaba",  "Laranja", "Jabuticaba",
    "Limão", "Mamão", "Melancia", "Pera", "Pêssego", "Uva", "Romã", "Tâmara", "Nectarina", "Kiwi", "Framboesa", "Graviola"
];
$("#frutas").autocomplete({
    source: frutas
});
});

$( function() {
    $("#calend").datepicker();
});

$( function() {
    $( "#lista" ).sortable();
});

//

function Adicionar(){
  $("#tblCadastro tbody").append(
      "<tr>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><input type='text'/></td>"+
      "<td><button class='btnSalvar'>Salvar</button class='btnExcluir'><button class='btnExcluir'>Excluir</button></td>"+
      "</tr>");
   
      $(".btnSalvar").bind("click", Salvar);     
      $(".btnExcluir").bind("click", Excluir);
};

function Salvar(){
  var par = $(this).parent().parent(); //tr
  var tdNome = par.children("td:nth-child(1)");
  var tdTelefone = par.children("td:nth-child(2)");
  var tdEmail = par.children("td:nth-child(3)");
  var tdBotoes = par.children("td:nth-child(4)");

  tdNome.html(tdNome.children("input[type=text]").val());
  tdTelefone.html(tdTelefone.children("input[type=text]").val());
  tdEmail.html(tdEmail.children("input[type=text]").val());
  tdBotoes.html("<button class='btnSalvar'>Salvar</button><button class='btnExcluir'>Excluir</button>");

  $(".btnEditar").bind("click", Editar);
  $(".btnExcluir").bind("click", Excluir);
};

function Editar(){
  var par = $(this).parent().parent(); //tr
  var tdNome = par.children("td:nth-child(1)");
  var tdTelefone = par.children("td:nth-child(2)");
  var tdEmail = par.children("td:nth-child(3)");
  var tdBotoes = par.children("td:nth-child(4)");
  
  tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
  tdTelefone.html("<input type='text' id='txtTelefone' value='"+tdTelefone.html()+"'/>");
  tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
  tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");
  
  $(".btnSalvar").bind("click", Salvar);
  $(".btnEditar").bind("click", Editar);
  $(".btnExcluir").bind("click", Excluir);
 };

 function Excluir(){
  var par = $(this).parent().parent(); //tr
  par.remove();
};

$(function(){
  //Código das funções Adicionar, Salvar, Editar e Excluir
  $(".btnEditar").bind("click", Editar);
  $(".btnExcluir").bind("click", Excluir);
  $("#btnAdicionar").bind("click", Adicionar);           

});