// 1
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }

  
//2
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
  
  // Exemplo de uso da função:
  const senha1 = "senha123";
  const senha2 = "SenhaFort3";
  const senha3 = "senha";
  console.log(verificarSenha(senha1)); // Output: A senha deve conter pelo menos uma letra maiúscula.
  console.log(verificarSenha(senha2)); // Output: A senha é válida.
  console.log(verificarSenha(senha3)); // Output: A senha deve ter pelo menos 8 caracteres.
  
