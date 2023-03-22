	let titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista";

	// let paciente = document.querySelectorAll("#primeiro-paciente"); //seleciona um elemento da classe 'paciente', e que está dentro do id 'primeiro-paciente'

	let pacientes = document.querySelectorAll('.paciente'); // seleciona todos os elementos que possuem a classe 'paciente'

	for(let i= 0; i < pacientes.length; i++) {

		let paciente = pacientes[i]; // guarda o paciente atual dentro da variavel

		let tdPeso = paciente.querySelector(".info-peso");	// cria uma variável p guardar o que será selecionado dentro da classe 'paciente' e 'info-peso'
		let peso = tdPeso.textContent; // guarda somente o texto da variável 'tdPeso' dentro de outra variável chamada 'peso'

		let tdAltura = paciente.querySelector(".info-altura");
		let altura = tdAltura.textContent; // utiliza somente a parte de texto de tdAltura e guarda na variável altura

		let tdImc = paciente.querySelector(".info-imc"); // seleciona na classe 'paciente' o elemento 'info-imc'
		let pesoValido = true;
		let alturaValida = true;

		console.log(paciente);

			if ( peso <= 0 || peso >= 1000 ) {
				console.log("Peso inválido!");
				pesoValido = false;
				tdImc.textContent = "Peso inválido!";
				paciente.style.backgroundColor = "Lightcoral";
			}

			if ( altura <= 0 || altura >= 3 ) {
				console.log("Altura inválida!");
				alturaValida = false;
				tdImc.textContent = "Altura inválida!";
				paciente.classList.add("paciente-invalido"); // adicionando um background (está na classe paciente-invalido) dentro do arquivo css
			}

			if ( alturaValida && pesoValido ) {
				let imc = calculaImc(peso,altura); // chamando a função 'calculaImc'
				tdImc.textContent = imc// guarda somente o texto armazenado na variável 'tdImc' e atribui um novo valor para a variável 'imc'.
			}
	}

	function calculaImc(peso,altura) {
		let imc = 0;
		imc = peso / (altura * altura);
		return imc.toFixed(2); // Retorna imc e define o limite de duas casas decimais na hora de imprimir os valores
	}

	