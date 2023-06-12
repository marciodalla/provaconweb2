// Problema 1:
function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function listPrimes() {
    const primes = [];
    for (let i = 1; i <= 1000; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }
  
  console.log(listPrimes());
  

  
// Problema 2:
function verificarSenha(senha) {
    const regexMaiuscula = /[A-Z]/;
    const regexMinuscula = /[a-z]/;
    const regexNumero = /[0-9]/;
  
    if (senha.length < 8) {
      return "A senha deve ter pelo menos 8 caracteres.";
    }
  
    if (!regexMaiuscula.test(senha)) {
      return "A senha deve conter pelo menos uma letra maiúscula.";
    }
  
    if (!regexMinuscula.test(senha)) {
      return "A senha deve conter pelo menos uma letra minúscula.";
    }
  
    if (!regexNumero.test(senha)) {
      return "A senha deve conter pelo menos um número.";
    }
  
    return "A senha é válida.";
  }


// Problema 3:
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let resultado = 1;
  
    for (let i = 2; i <= numero; i++) {
      resultado *= i;
    }
  
    return resultado;
  }
  
  for (let i = 1; i <= 10; i++) {
    const fatorial = calcularFatorial(i);
    console.log(`O fatorial de ${i} é igual a ${fatorial}`);
  }

  // Problema 4:
  function verificarQuadradoPerfeito(numero) {
    if (numero < 0) {
      return false;
    }
  
    let raiz = Math.sqrt(numero);
  
    if (raiz === Math.floor(raiz)) {
      return true;
    } else {
      return false;
    }
  }
  
