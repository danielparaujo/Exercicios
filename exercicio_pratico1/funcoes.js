$(document).ready(function(){
$("button[name='calculo']").click(function(){
var nome1=$("input[name='nome1']").val();
var tempo1=parseInt($("input[name='tempo1']").val());
var matriz=[[1,$("input[name='nome1']").val(),parseInt($("input[name='tempo1']").val())],
[2,$("input[name='nome2']").val(),parseInt($("input[name='tempo2']").val())],
[3,$("input[name='nome3']").val(),parseInt($("input[name='tempo3']").val())],
[4,$("input[name='nome4']").val(),parseInt($("input[name='tempo4']").val())],
[5,$("input[name='nome5']").val(),parseInt($("input[name='tempo5']").val())],
[6,$("input[name='nome6']").val(),parseInt($("input[name='tempo6']").val())]];
var vetor=[2];
var matriz_completa=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
console.log(matriz[2][2]);
for(var i = 0; i < 5; i++)
			{
				for(var j = 0; j < 5; j++)
				{
          console.log("entra no for");
          if(matriz[j][2]>matriz[j+1][2]){
            console.log("entra no if");
            vetor=matriz[j];
            matriz[j]=matriz[j+1];
            matriz[j+1]=vetor;

          }

				}

        }



      for(var i = 0; i < 6; i++)
      			{
      				//for(var j = 0; j < 3; j++)
      		//		{

      					console.log(matriz[i]);
      			//	}

              }
              console.log(matriz[0][0]);
              var aux=1;
              var input="input[name=";
              var posicao="posicao";


              for(var i = 0; i < 6; i++)
                    {
                        matriz_completa[i][0]=aux;
                        matriz_completa[i][1]=matriz[i][0];
                        matriz_completa[i][2]=matriz[i][1];
                        matriz_completa[i][3]=matriz[i][2];
                          matriz_completa[i][4]="-";
                          if(aux==1){
                            matriz_completa[i][4]="Vencedor!";
                          }
                          if(i<5){
                          if(matriz[i][2]!=matriz[i+1][2]){
                            aux++;
                        }
                      }

                        console.log(matriz_completa[i]);
                    //	}

                      }



$("input[name=posicao1]").val(matriz_completa[0][0]);
$("input[name=largada1]").val(matriz_completa[0][1]);
$("input[name=nome1]").val(matriz_completa[0][2]);
$("input[name=tempo1]").val(matriz_completa[0][3]);
$("input[name=status1]").val(matriz_completa[0][4]);

$("input[name=posicao2]").val(matriz_completa[1][0]);
$("input[name=largada2]").val(matriz_completa[1][1]);
$("input[name=nome2]").val(matriz_completa[1][2]);
$("input[name=tempo2]").val(matriz_completa[1][3]);
$("input[name=status2]").val(matriz_completa[1][4]);

$("input[name=posicao3]").val(matriz_completa[2][0]);
$("input[name=largada3]").val(matriz_completa[2][1]);
$("input[name=nome3").val(matriz_completa[2][2]);
$("input[name=tempo3]").val(matriz_completa[2][3]);
$("input[name=status3]").val(matriz_completa[2][4]);
$("input[name=posicao4]").val(matriz_completa[3][0]);
$("input[name=largada4]").val(matriz_completa[3][1]);
$("input[name=nome4").val(matriz_completa[3][2]);
$("input[name=tempo4]").val(matriz_completa[3][3]);
$("input[name=status4]").val(matriz_completa[3][4]);
$("input[name=posicao5]").val(matriz_completa[4][0]);
$("input[name=largada5]").val(matriz_completa[4][1]);
$("input[name=nome5").val(matriz_completa[4][2]);
$("input[name=tempo5]").val(matriz_completa[4][3]);
$("input[name=status5]").val(matriz_completa[4][4]);
$("input[name=posicao6]").val(matriz_completa[5][0]);
$("input[name=largada6]").val(matriz_completa[5][1]);
$("input[name=nome6").val(matriz_completa[5][2]);
$("input[name=tempo6]").val(matriz_completa[5][3]);
$("input[name=status6]").val(matriz_completa[5][4]);





});
});
