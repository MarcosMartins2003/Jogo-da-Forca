const palavras = [
    'javascript', 'programacao', 'html', 'css', 'desenvolvimento',
    'elefante', 'banana', 'computador', 'girafa', 'laranja',
    'teclado', 'cachorro', 'abacaxi', 'gato', 'morango',
    'cadeira', 'leao', 'kiwi', 'tigre', 'abacate',
    'mesa', 'papagaio', 'pera', 'leopardo', 'maca',
    'carro', 'pinguim', 'uva', 'coelho', 'limao',
    'oculos', 'elefante', 'melancia', 'lebre', 'framboesa',
    'notebook', 'panda', 'mamao', 'pato', 'manga',
    'televisao', 'leopardo', 'kiwi', 'macaco', 'cereja',
    'bicicleta', 'tartaruga', 'abacaxi', 'coruja', 'ameixa',
    'elefante', 'banana', 'computador', 'girafa', 'laranja',
    'teclado', 'cachorro', 'abacaxi', 'gato', 'morango',
    'cadeira', 'leao', 'kiwi', 'tigre', 'abacate',
    'mesa', 'papagaio', 'pera', 'leopardo', 'maca',
    'carro', 'pinguim', 'uva', 'coelho', 'limao',
    'oculos', 'elefante', 'melancia', 'lebre', 'framboesa',
    'notebook', 'panda', 'mamao', 'pato', 'manga',
    'televisao', 'leopardo', 'kiwi', 'macaco', 'cereja',
    'bicicleta', 'tartaruga', 'abacaxi', 'coruja', 'ameixa',
];
        let palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
        let letrasAdivinhadas = Array(palavraEscolhida.length).fill('_');
        let letrasErradas = [];
        const maxTentativas = 6;

        function exibirJogo() {
            document.getElementById('palavra').innerHTML = `Palavra: ${letrasAdivinhadas.join(' ')}`;
            document.getElementById('letras-erradas').innerHTML = `Letras erradas: ${letrasErradas.join(', ')}`;
        }

        function verificarLetra(letra) {
            if (palavraEscolhida.includes(letra)) {
                for (let i = 0; i < palavraEscolhida.length; i++) {
                    if (palavraEscolhida[i] === letra) {
                        letrasAdivinhadas[i] = letra;
                    }
                }
            } else {
                letrasErradas.push(letra);
            }
        }

        function verificarFimDoJogo() {
            if (letrasAdivinhadas.join('') === palavraEscolhida) {
                alert('Parabéns! Você venceu!');
                reiniciarJogo();
            } else if (letrasErradas.length >= maxTentativas) {
                alert('Você perdeu. A palavra era: ' + palavraEscolhida);
                reiniciarJogo();
            }
        }

        function adivinharLetra() {
            const letraInput = document.getElementById('letraInput').value.toLowerCase();
            if (letraInput.length !== 1 || !/^[a-z]$/.test(letraInput)) {
                alert('Por favor, digite uma única letra válida.');
                return;
            }

            verificarLetra(letraInput);
            exibirJogo();
            verificarFimDoJogo();
        }

        function reiniciarJogo() {
            palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
            letrasAdivinhadas = Array(palavraEscolhida.length).fill('_');
            letrasErradas = [];
            exibirJogo();
        }

        exibirJogo();