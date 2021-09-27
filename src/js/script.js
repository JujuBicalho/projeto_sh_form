//Mask//

function mask(cpf) { //MASK CPF
    var mcpf = window.event;
    kcode = mcpf.keyCode;

 console.log(cpf.value.length);
    if (kcode == 8) return;
    if (cpf.value.length == 3) { cpf.value = cpf.value + '.'; }
    if (cpf.value.length == 7) { cpf.value = cpf.value + '.'; }
    if (cpf.value.length == 11) {  cpf.value = cpf.value + '-'; }
}

function mmask(rg) { //MASK RG
    var mrg = window.event;
    kcode = mrg.keyCode;

 console.log(rg.value.length);
    if (kcode == 6) return;
    if (rg.value.length == 2) { rg.value = rg.value + '.'; }
    if (rg.value.length == 6) { rg.value = rg.value + '.'; }
    if (rg.value.length == 9) {  rg.value = rg.value + '-'; }
}

function mmmask(nis) { //MASK NIS
    var mnis = window.event;
    kcode = mnis.keyCode;

 console.log(rg.value.length);
    if (kcode == 13) return;
    if (nis.value.length == 3) { nis.value = nis.value + '.'; }
    if (nis.value.length == 10) { nis.value = nis.value + '.'; }
    if (nis.value.length == 13) {  nis.value = nis.value + '-'; }
}


/*TEXTO OPÇÃO -> VOCÊ COSTUMA FICAR SOZINHO*/
$(document).ready(() => {
  $('input[name ="show-div"]').click(function() {
    $("textarea").show();

    if ($(this).val() == "showDiv")
      $("textarea").show();
    else
      $("textarea").hide();
  })
   });
   
   $(document).ready(() => {
    $('input[name ="show-div2"]').click(function() {
      $("textarea").show();
  
      if ($(this).val() == "showDiv2")
        $("textarea").show();
      else
        $("textarea").hide();
    })
     });
  