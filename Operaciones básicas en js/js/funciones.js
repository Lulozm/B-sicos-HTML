$(document).ready(function(){
	
	$("#temas").change(function(){
		$("#ejercicios").empty();
		var tema = $(this).val();
	$("#ruta").show();
		if (tema == "if" ){
			$("#ejercicios").show();
			$("#ejercicios").empty()
			$("#selectFor").hide();
			$("#arrayList").hide();
			$("#ruta").empty();
			$("#ejercicios").append("<option value='0' selected>Seleccione...</option><option value='1'>ejercicio 1</option><option value='2'>ejercicio 2</option><option value='3'>ejercicio 3</option><option value='4'>ejercicio 4</option><option value='5' selected>ejercicio 5</option><option value='6'>ejercicio 6</option><option value='7'>ejercicio 7</option><option value='8'>ejercicio 8</option>");
		} else if (tema == "while"){
			$("#selectFor").empty();
			$("#selectFor").show();
			$("#arrayList").hide();
			$("#ejercicios").hide();
			$("#ruta").empty();
			$("#selectFor").append("<option value='0' selected>Seleccione...</option><option value='1'>ejercicio 1</option><option value='2'>ejercicio 2</option><option value='3'>ejercicio 3</option><option value='4'>ejercicio 4</option><option value='5' selected>ejercicio 5</option><option value='6'>ejercicio 6</option><option value='7'>ejercicio 7</option>");
		} else if (tema == "arreglos"){
			$("#arrayList").show();
			$("#arrayList").empty();
			$("#ejercicios").hide();
			$("#selectFor").hide();
			$("#ruta").empty();
			$("#arrayList").append("<option value='0' selected>Seleccione...</option><option value='1'>Pop</option><option value='2'>Shift</option><option value='3'>Push</option><option value='4'>Unshift</option><option value='5' selected>Splice</option><option value='6'>Delete</option><option value='7'>Reverse</option><option value='8'>Sort</option><option value='9'>Concat</option><option value='10'>Join</option><option value='11'>Length</option>");
		} 
	});
	
	
	$("#ejercicios").change(function(){
		$("#ruta").empty();
		$("#resultado").empty();
		var ejc = $(this).val();
		
		switch(ejc){
			case "1":
			$("#ruta").html('<div id="ifContenedor" class="contenedor"><h3>Ejercicio 1<h3><label>Introdusca un numero del 1 al 5</label><input class="nPrimo" type="text" id="nPrimo" placeholder="Introduce un Numero"/><input class="bntIf" type="button" value="Mostrar" id="bntIf"/></div>');
			break;
			
			case "2":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 2<h3><label>Introdusca 3 numeros</label><input type="text" id="n1" placeholder="Introduce un numero"/><input type="text" id="n2" placeholder="Introduce un numero"/><input type="text" id="n3" placeholder="Introduce un numero"/><input class="btnE2" type="button" value="Mostrar" id="btnE2"/></div>');
			break;
			
			case "3":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 3<h3><label>Introdusca 1 numero positivo o negativo</label><input type="text" id="numero" placeholder="introdusca 1 numero"/><input class="btnE3" type="button" value="Mostrar"/></div>');
			break;
			
			case "4":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 4<h3><label>Introdusca una letra</label><input type="text" id="letra" placeholder="introdusca una letra"/><input class="btnE4" type="button" value="Mostrar" id=""/></div>');				
			break;
			
			case "5":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 5<h3><label>Introdusca 3 numeros</label><input type="text" id="v1" placeholder="valor 1"/><input type="text" id="v2" placeholder="valor 2"/><input type="text" id="v3" placeholder="valor 3"/><input class="btnE5" type="button" value="Mostrar"/></div>');
			break;
			
			case "6":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 6<h3><label>Introdusca importe bruto</label><input type="text" id="bruto" placeholder="importe bruto"/><input class="btnE6" type="button" value="Mostrar"/></div>');
			break;
			
			case "7":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 7<h3><label>Introdusca cuantos años lleva trabajando en la empresa</label><input type="text" id="años" placeholder="introdusca un valor"/><input class="btnE7" type="button" value="Mostrar"/></div>');
			break;
			
			case "8":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 8<h3><label>Intervalos, Introdusca un numero</label><input type="text" id="valor" placeholder="numero"/><input class="btnE8" type="button" value="Mostrar"/></div>');
			break;
		}
	
	});
	
	$("#ruta").on("click",'.bntIf', function(e){
		var valor = $("#nPrimo").val();
		if (valor >= 6 || valor == 0){
			$("#resultado").text("este valor no esta permitido");
		} else {
			if (valor == 1 || valor == 4) {
				$("#resultado").text(valor + " No es un numero primo");
			} else {
				$("#resultado").text(valor + " Es un numero primo");
			}
		}
	});
		
	$("#ruta").on('click','.btnE2', function(){
		var v1 = $("#n1").val();
		var v2 = $("#n2").val();
		var v3 = $("#n3").val();
		var array = [v1,v2,v3];
		var t;	
		
		array.sort(function (a, b){
				return a - b;
				});

		$("#resultado").text(array.reverse());	
	});
	
	
	$("#ruta").on('click','.btnE4', function(){
		var letra = $("#letra").val();
		var vocales =['a','e','i','o','u'];
		var cent = 0;
		var i;
		
		for (i=0; i<vocales.length; i++){
			if (letra == vocales[i]){
				cent = 1
				break;
			}
		}
		
		if (cent == 1){
				$("#resultado").text(letra + ' es una vocal');
			} else if (cent == 0){
				$("#resultado").text(letra + ' no es una vocal');
			} 
		
	});
	
	
	$("#ruta").on('click','.btnE3', function(){
		var numero = $("#numero").val();
		
		if (numero >= 0){
			$("#resultado").text(numero + ' es un numero positivo');
		} else {
			$("#resultado").text(numero + ' es un numero negativo');
		}
	});
	

	$("#ruta").on('click','.btnE5', function(){
		var v1 = $("#v1").val();
		var v2 = $("#v2").val();
		var v3 = $("#v3").val();
		
		var suma = parseInt(v2) + parseInt(v1);
		
		
		if (parseInt(v3) == parseInt(suma)){
			$("#resultado").html('<p>tus numeros son ' + v1 + ', ' + v2 + ' y ' + v3 + '</p><br/><p>la suma del valor 1 y 2 es ' +  suma + '</p><br><p>El valor 3 es igual a la suma del valor 1 y 2</p>');
			
		} else {
				$("#resultado").html('<p>tus numeros son ' + v1 + ', ' + v2 + ' y ' + v3 + '</p><br/><p>la suma del valor 1 y 2 es ' +  suma + '</p><br><p>El valor 3 no es igual a la suma del valor 1 y 2</p>');
				}
				
	});
	
	
	$("#ruta").on('click','.btnE7',function(){
		var años = 	$("#años").val();
			var sueldo = 40000;
			var aumento;
			
			if (años >= 10){
				aumento = parseFloat(sueldo) * parseFloat(0.10);
				sueldo = parseFloat(40000) + parseFloat(aumento);
				$("#resultado").html('<p>su sueldo anual es de 40000 euros<br>Usted lleva ' + años + ' años trabajando<br>su aumento es del 10% equivalente a ' + aumento + '<br>su sueldo final es de ' + sueldo + 'euros anuales');
			} else if (años < 10 && años >= 5){
				aumento = parseFloat(40000) * parseFloat(0.07);
				sueldo = parseFloat(40000) + parseFloat(aumento);
				$("#resultado").html('<p>su sueldo anual es de 40000 euros<br>Usted lleva ' + años + ' años trabajando<br>su aumento es del 7% equivalente a ' + aumento + '<br>su sueldo final es de ' + sueldo + 'euros anuales');
			} else if (años < 5 && años >= 3){
				aumento = parseFloat(40000) * parseFloat(0.05);
				sueldo = parseFloat(40000) + parseFloat(aumento);
				$("#resultado").html('<p>su sueldo anual es de 40000 euros<br>Usted lleva ' + años + ' años trabajando<br>su aumento es del 5% equivalente a ' + aumento + '<br>su sueldo final es de ' + sueldo + 'euros anuales');
			} else if (años < 3){
				aumento = parseFloat(40000) * parseFloat(0.03);
				sueldo = parseFloat(40000) + parseFloat(aumento);
				$("#resultado").html('<p>su sueldo anual es de 40000 euros<br>Usted lleva ' + años + ' año(s) trabajando<br>su aumento es del 3% equivalente a ' + aumento + '<br>su sueldo final es de ' + sueldo + 'euros anuales');
			}	
			
	});
	
	
	$("#ruta").on('click', '.btnE6', function(){
		var bruto = $("#bruto").val();
		var neto, total;
		
		if (bruto >= 15000){
			neto = parseFloat(bruto) * parseFloat(0.16);
			total = parseFloat(bruto) + parseFloat(neto);
			
			$("#resultado").html('<p>el importe bruto es de ' + bruto + '<br>se le aplicara un impuesto del 16%<br>su importe neto es de ' + neto + '</p>');
		} else {
			neto = parseFloat(bruto) * parseFloat(0.10);
			total = parseFloat(bruto) + parseFloat(neto);
			
			$("#resultado").html('<p>el importe bruto es de ' + bruto + '<br>se le aplicara un impuesto del 10%<br>su importe neto es de ' + neto + '</p>');
		}
	});
	
	
	$("#ruta").on('click', '.btnE8', function(){
		var valor = $("#valor").val();
		var cent = 0;
		
		for (var s=25; s <= 50; s++){
			if (valor == s){
				cent = 1;
				break;
			}
		}	
		
		if (cent == 1){
			$("#resultado").html(valor + '<p> esta dentro del intervalo [25-50]');
		} else {
			$("#resultado").html(valor + '<p> no esta dentro del intervalo [25-50]');
		}
		
	});
	
	
	$("#selectFor").change(function(){
		$("#ruta").empty();
		$("#resultado").empty();
		var ejc = $(this).val();
		
		switch(ejc){
			case "1": 
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 1<h3><label>Introdusca un numero para saber si es primo o no</label><input type="text" id="valor" placeholder="numero"/><input class="for1" type="button" value="Mostrar"/></div>');
			break;
			
			case "2":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 2<h3><label>Numeros pares del 1 al 100</label><br><input class="for2" type="button" value="Mostrar"/></div>');
			break;
			
			case "3":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 3<h3><label>Suma de numeros impares del 1 al 100</label><br><input class="for3" type="button" value="Mostrar"/></div>');
			break;
			
			case "4":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 4<h3><label>Introdusca dos numeros, se imprimiran los numeros que haya entre uno y otro</label><input type="text" id="v1" placeholder="numero 1"/><input type="text" id="v2" placeholder="numero 2"/><input class="for4" type="button" value="Mostrar"/></div>');
			break;
			
			case "5":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 5<h3><label>Introdusca un numero y apareceran ese numero de asteriscos</label><input type="text" id="v1" placeholder="numero a ingresar"/><input class="for5" type="button" value="Mostrar"/></div>');
			break;
			
			case "6":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 6<h3><label>Introdusca un numero y para multiplicar</label><input type="text" id="v1" placeholder="numero a ingresar"/><input class="for6" type="button" value="Mostrar"/></div>');
			break;
			
			case "7":
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 7<h3><label>Tablas de multiplicar del 1 al 10</label><input class="for7" type="button" value="Mostrar"/></div>');
			break;
			
		}
		
	});
	
	
$	("#ruta").on('click', '.for1', function(){
		var valor = $("#valor").val();
		var cent = 0;
		var i=1;	
		
		while (i <= valor) {
			if (valor%i==0)
             {
				 alert(valor%i);
               cent=cent+1;  
             }
                
            i=i+1;
        } 

			if (cent == 2){
				$("#resultado").text(valor + ' es primo');
			} else {
				$("#resultado").text(valor + ' no es primo');
			}
			
	});
	
	
	
	$("#ruta").on('click', '.for2', function(){
		var i;
		var tipo;
		var res = "";
		for (i=1; i<=100; i++){
			tipo=(i%2)?"Impar":"Par";
			
			if (tipo == 'Par'){
				res += i + " - ";
			}
		}
		
		$("#resultado").text(res);
	});
	
	
	
	$("#ruta").on('click', '.for3', function(){
		var i;
		var tipo;
		var res = "";
		var suma = 0;
		
		for (i=1; i<=100; i++){
			tipo=(i%2)?"Impar":"Par";
			
			if (tipo == 'Impar'){
				res += i + " - ";
				suma = suma + i;
			}
		}
		
		$("#resultado").html('La suma es ' + suma + '<br>' + res);
	});
	
	
	
	$("#ruta").on('click', '.for4', function(){
		var v1 = $("#v1").val();
		var v2 = $("#v2").val();
		var resp = '';
		
		if (v1 >= v2){
			$("#resultado").text('el valor uno no puede ser mayor que el valor dos');
		} else {
			resp += v1 + ' - ';
			for (v1; v1<v2; v1++){
				resp += v1 + ' - ';
			}
			resp += v2;
			$("#resultado").text(resp);
			}
			
	});
	
	
	
	$("#ruta").on('click', '.for5', function(){
		var v1 = $("#v1").val();
		var resp = "";
		for (var i = 0; i < v1; i++){
			resp += "*";
		}
		$("#resultado").text(resp);
	});
	
	
	$("#ruta").on('click', '.for6', function(){
		var numero = $("#v1").val();
		resp = '';
		for (var i = 1; i<=10; i++){
			resp += numero + "x" + i + "=" + numero*i + ",  ";
		}
		
		$("#resultado").text(resp);
	});
	
	$("#ruta").on('click', '.for7', function(){
		var resp = '';
		var i;
		for (i = 1; i <= 10; i++){
			for(var y = 1; y<=10; y++){
				resp += y + "x" + i + "=" + y*i + ",  ";
			}
		}
		$("#resultado").text(resp);
	});
	
	
	$("#arrayList").change(function(){
		$("#ruta").empty();
		$("#resultado").empty();
		var ejc = $(this).val();
		
		switch(ejc){
			case '1':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 1<h3><label>Funcion Pop</label><input class="array1" type="button" value="Mostrar"/></div>');
			break;
			
			case '2':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 2<h3><label>Funcion Shift</label><input class="array2" type="button" value="Mostrar"/></div>');
			break;

			case '3':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 3<h3><label>Funcion Push</label><input type="text" id="valor" placeholder="elemento a agregar al final del arreglo"/><input class="array3" type="button" value="Mostrar"/></div>');
			break;

			case '4':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 4<h3><label>Funcion Unshift</label><input type="text" id="valor" placeholder="elemento a agregar al inicio del arreglo"/><input class="array4" type="button" value="Mostrar"/></div>');
			break;

			case '5':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 5<h3><label>Funcion Splice</label><br><p>Su arrelgo es [zapato, pelota, chicle, caparazon, laptop, reloj, disco, juego]</p><input type="text" id="valor2" placeholder="indices a eliminar (ejemp: 3,1)"/><input class="array5" type="button" value="Mostrar"/></div>');
			break;

			case '6':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 6<h3><label>Funcion Delete</label><p>Su arrelgo es [zapato, pelota, chicle, caparazon, laptop]</p><input type="text" id="valor" placeholder="indice a eliminar"/><input class="array6" type="button" value="Mostrar"/></div>');
			break;

			case '7':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 7<h3><label>Funcion Reverse</label><input class="array7" type="button" value="Mostrar"/></div>');
			break;

			case '8':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 8<h3><label>Funcion Sort</label><input class="array8" type="button" value="Mostrar"/></div>');
			break;

			case '9':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 9<h3><label>Funcion Concat</label><input class="array9" type="button" value="Mostrar"/></div>');
			break;

			case '10':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 10<h3><label>Funcion Join</label><input class="array10" type="button" value="Mostrar"/></div>');
			break;

			case '11':
			$("#ruta").html('<div id="" class="contenedor"><h3>Ejercicio 11<h3><label>Funcion Length</label><input class="array11" type="button" value="Mostrar"/></div>');
			break;

		}
	});
	
	
	$("#ruta").on('click', '.array1', function(){
        //se declara una variable tipo array
        var a = [];

        //ciclo for para generar 10 numeros al azar
        for (var i = 0; i < 10; i++) {
            var $random = Math.floor((Math.random() * 500) + 1);
            a[a.length] = $random;
        }
        
		$("#resultado").html('su arreglo es ' + a + '<br>al hacerle pop obtenemos ' + a.pop());
    
	});
	
	
	$("#ruta").on('click', '.array2', function(){
		var resp = '';
        var a = [];
 
        for (var i = 0; i < 10; i++) {
            var $random = Math.floor((Math.random() * 500) + 1);
			a[a.length] = $random;
		}
		
		resp += 'su arreglo es ' + a + '<br>y su longitud es ' + a.length + '<br>';
		a.shift();
		resp += 'aplicando shift al arreglo<br>su arreglo ahora es ' + a + '<br>y su longitud actual es ' + a.length;
		
		$("#resultado").html(resp);
				
	});
	
	
	$("#ruta").on('click', '.array3', function(){
		var valor = $("#valor").val();
		var resp = '';
		var a = [];
 
        for (var i = 0; i < 5; i++) {
            var $random = Math.floor((Math.random() * 100) + 1);
			a[a.length] = $random;
		}
		
		resp += 'su arreglo era ' + a + '<br>y su longitud era ' + a.length + '<br>'; 
		a.push(valor);
		resp += 'ahora su arreglo es ' + a + '<br>y su tamaño es ' + a.length; 
		
		$("#resultado").html(resp);
		
		
	});
	
	
	$("#ruta").on('click', '.array4', function(){
		var valor = $("#valor").val();
		var resp = '';
		var a = [];
 
        for (var i = 0; i < 5; i++) {
            var $random = Math.floor((Math.random() * 100) + 1);
			a[a.length] = $random;
		}
		
		resp += 'su arreglo era ' + a + '<br>y su longitud era ' + a.length + '<br>'; 
		a.unshift(valor);
		resp += 'ahora su arreglo es ' + a + '<br>y su tamaño es ' + a.length; 
		
		$("#resultado").html(resp);
		
	});
	
	$("#ruta").on('click', '.array5', function(){
		var palabra = $("#valor").val();
		var indice =  $("#valor2").val();
		var isplit = indice.split(',');
		var a = ['zapato', 'pelota', 'chicle', 'caparazon','laptop','reloj','disco','juego'];
		var resp = "";
		var aux;
		
		if (indice == ""){
			alert(palabra);
			resp += 'su arreglo era ' + a + '<br>y su tamaño era ' + a.length + '<br>'; 
			aux = a.splice(palabra);
			resp += 'ahora su arreglo es ' + aux + '<br> y su tamaño es ' + aux.length;
			
		} else if (palabra == ""){
			resp += 'su arreglo era ' + a + '<br>y su tamaño era ' + a.length + '<br>'; 
			aux = a.splice(isplit[0],isplit[1]);
			resp += 'ahora su arreglo es ' + aux + '<br> y su tamaño es ' + aux.length;
		} else {
			resp += 'su arreglo era ' + a + '<br>y su tamaño era ' + a.length + '<br>'; 
			aux = a.splice(isplit[0],isplit[1],palabra);
			resp += 'ahora su arreglo es ' + aux + '<br> y su tamaño es ' + aux.length;
		}
		$("#resultado").html(resp);
	});
		
		$("#ruta").on('click', '.array6', function(){
		var indice =  $("#valor").val();
		var isplit = indice.split(',');
		var a = ['zapato', 'pelota', 'chicle', 'caparazon','laptop'];
		var resp = "";
		
		resp += 'su arreglo era ' + a + '<br>y su longitud era ' + a.length + '<br>';
		
		delete a[indice];
		
		resp += 'ahora su arreglo es ' + a + '<br>y su longitud es ' + a.length;	
		
		$("#resultado").html(resp);
		});
		
		
		$("#ruta").on('click', '.array7', function(){
        var a = [];


        for (var i = 0; i < 7; i++) {
            var $random = Math.floor((Math.random() * 340) + 1);
            a[a.length] = $random;
        }
        
		$("#resultado").html('su arreglo es ' + a + '<br>con reverse es  ' + a.reverse());
		});
		
		
		$("#ruta").on('click', '.array8', function(){
        var a = [];
		var aux = '';

        for (var i = 0; i < 7; i++) {
            var $random = Math.floor((Math.random() * 340) + 1);
            a[a.length] = $random;
        }
		
		aux += a;
		
		a.sort(function(a,b){
			return a-b;
		});
		
        
		$("#resultado").html('su arreglo es ' + aux + '<br>con funcion sort es  ' + a);
		});
	
	
		$("#ruta").on('click', '.array9', function(){
        var a = [];
		var b = [];
		var aux = '';

        for (var i = 0; i < 7; i++) {
            var $random = Math.floor((Math.random() * 340) + 1);
            a[a.length] = $random;
        }
		
		for (var i = 0; i < 7; i++) {
            var $random = Math.floor((Math.random() * 340) + 1);
            b[b.length] = $random;
        }
		var concatenados = a.concat(b);
	
		$("#resultado").html('el arreglo uno es ' + a + '<br> el arreglo dos es ' + b + '<br> con funcion concat es ' + concatenados);
		});
		
		
		$("#ruta").on('click', '.array10', function(){
        var a = ['hoja', 'papel','navaja','arbol'];
		var joined, resp = '';
		
		resp += 'su arreglo es ' + a + '<br>';
		
		joined = a.join(' + ');
		
		resp += 'con funcion join su arreglo es ' + joined;
		
		$("#resultado").html(resp);
		
		
		});
		
		$("#ruta").on('click', '.array11', function(){
        var a = [];
		
		
		for (var i = 0; i < 10; i++) {
            var $random = Math.floor((Math.random() * 340) + 1);
            a[a.length] = $random;
        }
		
		$("#resultado").html('su arreglo generado es ' + a + '<br> y su tamaño con funcion Length() es ' + a.length);
		
		});
		
		
});