function validarCampo(campo,alerta,label){

console.log("Validar campo:"+campo+" "+alerta+" "+label);

//validar campo
var valor=parseInt($(campo).val());
if ( isNaN(valor)){
  //exibe o alerta
  $(alerta).slideDown();
  //adiciona css erro
  $(campo).addClass("is-invalid");
  //no label
  $(label).addClass("text-danger");
  //limpar campo
  $(campo).val("");
  //definir foco layout
  $(campo).focus();
  return false;
};
//valor 1
//oculta alertav1

$(alerta).hide();
$(campo).removeClass("is-invalid");
$(label).removeClass("text-danger");
$(campo).addClass("is-valid");
return true;




};




$(document).ready(function(){
  $("button[name='calculo']").click(function(){



    if(validarCampo("input[name='valor1']","#alertav1","labelv1")&&
    validarCampo("input[name='valor2']","#alertav2","labelv2"))
  {
    var n1=parseFloat($("input[name='valor1']").val());
    var n2=parseFloat($("input[name='valor2']").val());
    var aux= n1/(n2*n2);
    console.log(aux);
    console.log(n2);
    var res;
    if(aux<18.5){
      res="Subnutrição";
    }
     if ((aux>18.5) && (aux<24.9)) {
      res="Peso Saudável";
    }

     if (aux>25 && aux<29.9) {
      res="Sobrepeso";
    }

     if (aux>30 && aux<34.9) {
      res="Obesidade grau 1";
    }
     if (aux>35 && aux<39.9) {
      res="Obesidade grau 2";
    }
     if ( aux>40) {
      res="Obesidade grau 3";
    }

    $("input[name='resultado']").val(res);

  }else {
    $("input[name='resultado']").val("");
  }
  });

  $("input[name='valor1']").focusout(function(){
    validarCampo("input[name='valor1']","#alertav1","labelv1");
  });
  $("input[name='valor2']").focusout(function(){
    validarCampo("input[name='valor2']","#alertav2","labelv2");
  });


});
