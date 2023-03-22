var botaoAdicionar = document.querySelector("#adicionar-paciente");
	botaoAdicionar.addEventListener("click", function(event){
		event.preventDefault(); // previne o comportamento padrão da função
		
		let form = document.querySelector("#form-adiciona");  // extraindo informações do paciente do form

		let paciente = obtemPacienteDoFormulario(form); // pega os valores do paciente

        let pacienteTr = montaTr(paciente); // criar a tr e td do paciente
        console.log(pacienteTr);

		let tabela = document.querySelector("#tabela-pacientes"); //adicionando paciente na tabela

		tabela.appendChild(pacienteTr);
	});

    function obtemPacienteDoFormulario(form) {
        let paciente = {
            nome: form.nome.value,
            altura: form.altura.value,
            peso: form.peso.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }

        return paciente;
    }
	
    function montaTr(paciente) {
        let pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        let nomeTd = document.createElement("td"); // comando para criar td
        nomeTd.classList.add(info-nome);
        nomeTd.textContent = paciente.nome; 
		let alturaTd = document.createElement("td");
        alturaTd.classList.add(info-altura);
		let pesoTd = document.createElement("td");
        pesoTd.classList.add(info-peso);
		let gorduraTd = document.createElement("td");
        gorduraTd.classList.add(info-gordura);
		let imcTd = document.createElement("td");

		
		alturaTd.textContent = paciente.altura;
		pesoTd.textContent = paciente.peso;
		gorduraTd.textContent = paciente.gordura;
        imcTd.textContent = paciente.imc; 

		pacienteTr.appendChild(nomeTd); // comando p adicionar as TDs dentro do TR
		pacienteTr.appendChild(alturaTd);
		pacienteTr.appendChild(pesoTd);
		pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }

	