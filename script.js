
var inputTopL = document.getElementById('input-left-top')
var inputTopR = document.getElementById('input-right-top')
var inputBotL = document.getElementById('input-left-bottom')
var inputBotR = document.getElementById('input-right-bottom')

addEventListener('load', startValues) 

function startValues(){
   
      inputBotL.value = 4
      inputBotR.value = 4
      inputTopR.value = 4
      inputTopL.value = 4
   
}



//essa função pega o valor colocado nos inputs e modifica a propriedade border radius do css
function modifiedRadius(){

   const container = document.querySelector("div.container-inside")
   
   var topL = Number(inputTopL.value)
   var topR = Number(inputTopR.value)
   var botL = Number(inputBotL.value)
   var botR = Number(inputBotR.value)
   
   var code = topL + 'px ' + topR + 'px ' + botR +'px ' + botL + 'px';

   container.style.borderRadius = code
   container.style.transition = '0.8s'
        
   showCode(code)
}

function showCode(code){

 var p = document.getElementById('code-result')

  p.value = 'border-radius: '+code + ';'
 

}

