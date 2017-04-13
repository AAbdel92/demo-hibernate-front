$(document).ready(function() {	

	listerRoles(),
	listerPromos(),	
	
	$('#deletePromo').click(function() {
		deletePromo();
	}),
	
	$('#creerPromo').click(function() {
		creerPromo();
	}),

	$('#saveUser').click(function() {					
		creerUtilisateur();
		}),					
					
	$('#saveRole').click(function() {				
		creerRole();
		}),
		
	$('#deleteUser').click(function() {
		deleteUtilisateur();
	}),
	$('#ajoutRole').click(function() {
		ajouterRole();
	}),
	$('#chercherRole').click(function() {
		chercherUtilisateur();
	})
});

function creerUtilisateur() {
	var Utilisateur = {};
	var Roles = [];
	var Role = {};
	var Promo = {};
	Promo["id"] = $('#idPromo').val();
	Role["id"] = $('#idRole').val();	
	Utilisateur["pseudo"] = $('#pseudo').val();
	Utilisateur["motDePasse"] = $('#pass').val();
	Utilisateur["email"] = $('#email').val();
	Utilisateur["promo"] = Promo;
	Utilisateur["roles"] = Roles;
	Utilisateur["roles"][0] = Role;
	
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "api/utilisateur/creerUtilisateur",
		data : JSON.stringify(Utilisateur),
		dataType : 'json',
		success : function(data) {
			var date = new Date(data["derniereMaj"]);
			data["derniereMaj"] = date;
			var json = "<h4>Ajax Response</h4><pre>" + data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}
		
function creerRole() {
	var Role = {};
			
	Role["nom"] = $('#nomRole').val();
			
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/role/creerRole",
		data : Role,
		dataType : 'json',
		success : function(data) {
			var date = new Date(data["derniereMaj"]);
			data["derniereMaj"] = date;
			var json = "<h4>Ajax Response</h4><pre>"
					+ data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});	
}
function listerRoles() {
	
	$.getJSON("api/role/listeRole", function(data) {	
		var resultat;	
		$.each(data, function(cle, valeur) {
			var option = "<option value=\"" + cle + "\">" + valeur;
			resultat += option;
		});
		
		$('#idRole').html(resultat);
		$('#idRoleAjout').html(resultat);
		$('#idRoleSearch').html(resultat);
		
	}); 
}
	
function deleteUtilisateur() {	
	var Utilisateur = {};
	Utilisateur["pseudo"] = $('#deletePseudo').val();
	$.ajax({
		type : "DELETE",
		contentType : "application/json",
		url : "/api/utilisateur/supprimerUtilisateur",
		data : Utilisateur,
		dataType : 'json',
		success : function(data) {			
			var json = "<h4>Ajax Response</h4><pre>"
					+ data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}

function ajouterRole() {
	var Utilisateur = {};
	var Role = {};
	var Roles = [];
	Role["id"] = $('#idRoleAjout').val();
	Roles[0] = Role;
	Utilisateur["pseudo"] = $('#pseudoAjoutRole').val();	
	Utilisateur["roles"] = Roles;
	
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/utilisateur/ajoutRole",
		data : Utilisateur,
		dataType : 'json',
		success : function(data) {			
			var json = "<h4>Ajax Response</h4><pre>"
					+ data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}

function chercherUtilisateur() {
	
	
	var roleId = $('#idRoleSearch').val();
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "/api/utilisateur/chercherUtilisateur/" + roleId,		
		dataType : 'json',
		success : function(data) {			
			var json = "<h4>Ajax Response</h4><pre>"
					+ JSON.stringify(data) + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}

function listerPromos() {	
	
	$.getJSON("api/promo/listePromos", function(data) {	
		var resultat;	
		$.each(data, function(cle, valeur) {
			var option = "<option value=\"" + cle + "\">" + valeur;
			resultat += option;
		});
		
		$('#idPromo').html(resultat);		
	}); 
}

function creerPromo() {
	var Promo = {};
	Promo["nom"] = $('#nomPromo').val();
	
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/promo/creerPromo/",
		data : Promo,
		dataType : 'json',
		success : function(data) {			
			var json = "<h4>Ajax Response</h4><pre>"
					+ data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}

function deletePromo() {
	var Promo = {};
	Promo["nom"] = $('#nomPromoDelete').val();
	
	$.ajax({
		type : "DELETE",
		contentType : "application/json",
		url : "/api/promo/supprimerPromo/",
		data : Promo,
		dataType : 'json',
		success : function(data) {			
			var json = "<h4>Ajax Response</h4><pre>"
					+ data + "</pre>";
			$('#reponse').html(json);

			console.log("SUCCESS : ", data);
		},
		error : function(e) {

			var json = "<h4>Ajax Response</h4><pre>" + e.responseText
					+ "</pre>";
			$('#reponse').html(json);

			console.log("ERROR : ", e);
			}
	});
}
		
