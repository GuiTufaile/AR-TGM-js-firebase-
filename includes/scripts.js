
/* Mostra a Label com a descrição da utilização das informações do input nos formulários */
function mostrahelp(labelidhelp){

	document.getElementById(labelidhelp).style.visibility = "visible";

}

function menuclick(pagina, menu){
  $("li").removeClass("menuativo");
  $( "#content" ).load(pagina+".html" );
	$("#"+menu).addClass("menuativo");
}


/* Teste de função para o menu
$('#menu_admin1').click(function() { 
    $( "#content" ).load('\"'+pagina+".html" );
    $(this).addClass("menuativo");
    $("#menu_admin_2").removeClass("menuativo");
});
*/


function returnUid() {
   var ref      = createRef();
   var authData = ref.getAuth();
   
   if (authData) {
       return authData.uid;
   }
}

function returnEmail() {
   var ref      = createRef();
   var authData = ref.getAuth();
   
   if (authData) {
       return authData.password.email;
   }
}