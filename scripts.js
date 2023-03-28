const form = document.querySelector(".form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");

// add um evento ao button submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// pegando os valores dos inputs
const checkInputs = () => {
  const usernameValue = document.querySelector("#username").value
  const emailValue = document.querySelector("#email").value
  const passwordValue = document.querySelector("#password").value
  const passwordConfirmationValue = document.querySelector("#passwordConfirmation").value

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
  
};

//menssagem de acerto
const setSuccessFor = (input) => {
  const formControl = input.parentElement; // vai retorna o pai do username
  formControl.className = "form-control success"; // para mudar o nome da classe e acessar o style erro dela
}

const setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // adicionar a mensagem de erro
  small.innerText = message; // que foi escrita na logica em cima

  //adicionar a clase de error
  formControl.className = "form-control error";
}
const checkEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

