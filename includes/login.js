var URL_DATA = "https://arearestritatgm.firebaseio.com/";


function createRef(refName) 
{

	var myFirebaseRef = new Firebase(URL_DATA);

	if ((refName != undefined) && (refName != "")) 
	{
	   return myFirebaseRef.child(refName);
	}
	return myFirebaseRef;
}

function returnUid() {
   var ref      = createRef();
   var authData = ref.getAuth();
   
   if (authData) {
       return authData.uid;
   }
}

function verificaSessao(){

	var ref = createRef();	
	
	/*ref.onAuth(function(authData) {*/

		var userid = returnUid();
	  if (userid == "235a2873-1118-4ed1-92a1-8924b58c3c11") {
	     	$( "#menu" ).load( "menuadmin.html" );
	        $( "#content" ).load( "cadastro_credenciado.html" );
	        $( "#usersessao" ).load( "sessao.html" );
	  } else {
	    $( "#content" ).load( "login.html" );
	  }
	/*});*/
}

function login(emaillog, senhalog) {
	var ref = createRef();
	ref.authWithPassword({
	  	/*
	  	email    : '"'+emaillog+'"',
	  	password : '"'+senhalog+'"'
		*/
		email    : "admin@hostdry.com.br",
	  	password : "1234"
		
	}, function(error, authData) {
	  if (error) {	  	
	  /*	switch (error.code) {*/
	      //case "INVALID_EMAIL":
	      	/*$("#erro").style.visibility = "visible";
	        	$( "#erro" ).html("Este e-mail não está cadastrado!");
	        break;
	      case "INVALID_PASSWORD":
	        	$( "#erro" ).html("Senha incorreta!");
	        break;
	      default:
	        	$( "#erro" ).html("Erro de login!");
	        break;
	    }*/
	}  	
	else {		
	    $( "#erro" ).html("Ok! Aguarde...");
	    $( "#mvenu" ).load( "./menuadmin.html" );
        $( "#content" ).load( "./cadastro_credenciados.html" );
        $( "#usersessao" ).load( "./sessaoadmin.html" ); 
	}
	});

}


/*
$(document).ready(function(){
	
	// Se não tiver logado
	
		$( "#content" ).load( "./login.html" );

	//Se for Admin:
	
        //$( "#menu" ).load( "./menu_admin.html" );
        //$( "#content" ).load( "./cadastro_credenciados.html" );
        //$( "#usersessao" ).load( "./sessao.html" );
    
        
    //Se for Credenciado:
    	//$( "#menu" ).load( "./menu_credenciado.html" );
        //$( "#content" ).load( "./cadastro_clientes.html" );
        //$( "#usersessao" ).load( "./sessao.html" );

});
*/