// alert('Welcome a quebrada, NEGGER')
// var compra = prompt('what you do Negger?')
// confirm('Realmente quer...' + compra + "...Negger?")
// alert('OK OK')
// alert('You receveid....' + compra + "...from the merchant black")


function merchant(){
    window.alert("Olá viajante, quer beber algo?")
}
if(merchant == true) {
    alert("Fique a vontade que Ivan irá te servir")
} else {
    alert("Caia fora está tomando meu tempo!!")
}



function armor() {
    window.alert("Você recebeu uma Armadura!");
   }
   function potion() {
    window.alert("Você recebeu uma Poção!");
   }
   function weapons() {
    window.alert("Você recebeu uma Arma!");
   }

//fuction para esconder e aparecer os itens de venda//

function toggle(el){
    var display = document.getElementById(el).style.display;
    if(display == "flex"){
        document.getElementById(el).style.display = 'none';
    }
    else{
        document.getElementById(el).style.display = 'flex';
   }
} 