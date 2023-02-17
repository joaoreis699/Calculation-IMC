function calculationIMC() {

    const form = document.querySelector("#Form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputWeight = e.target.querySelector("#weight");
        const inputHeight = e.target.querySelector("#height");

        const weight = Number(inputWeight.value);
        const height = Number(inputHeight.value);

        if(!weight) {
            setResult("Peso inválido", false);
            return;
        };
                
        if(!height) {
            setResult("Altura inválido", false);
            return;
        };

        const imc = getImc(weight, height);
        const nivelImc = getNivelImc(imc);
        setResult(`Seu IMC é ${imc} (${nivelImc}). `, true);
                
                
    });

        function getNivelImc(imc) {
            const nivel = [ "Abaixo do peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1",
                            "Obesidade grau 2", "Obesidade grau 3"];

            if(imc >= 39.9) return nivel[5];
            if(imc >= 34.4) return nivel[4];
            if(imc >= 29.9) return nivel[3];
            if(imc >= 24.9) return nivel[2];
            if(imc >= 18.5) return nivel[1];
            if(imc <= 18.4) return nivel[0];

        };

        function getImc(weight, height) {
            return (weight / Math.pow(height, 2)).toFixed(1);
        };

        function createP() {
            const p = document.createElement("p");
            return p;
        };

        function setResult(msg, isValid) {
            const result = document.querySelector(".result");
            result.innerHTML = "";

            const p = createP();

            if(isValid) {
                p.classList.add("true");
            } else {
                p.classList.add("false");
            };

            p.innerHTML = msg;
            result.appendChild(p);
         };
};

calculationIMC();