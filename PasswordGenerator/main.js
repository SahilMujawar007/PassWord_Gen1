const result_el = document.getElementById("result");
const generate_el = document.getElementById("btn-1");
const clipboard_el = document.getElementById("btn-2");
const length_el = document.getElementById("length");
const uppercase_el = document.getElementById("uppercase");
const lowercase_el = document.getElementById("lowercase");
const numbers_el = document.getElementById("numbers");
const symbols_el = document.getElementById("symbols");
const error_el = document.getElementById('ShowError')


const uppercase_Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_Chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_Chars = "1234567890";
const symbols_Chars = "!@#$%^&*()+";


  generate_el.addEventListener('click', () => {
  console.log('CLICKED')
  result_el.style.backgroundColor = "#fff";
  result_el.style.color = "black";
  const length = length_el.value;
  const lower = lowercase_el.checked;
  const upper = uppercase_el.checked;
  const number = numbers_el.checked;
  const symbol = symbols_el.checked;
  const password = generatePassword(length, lower, upper, number, symbol);
  result_el.innerText =  password
})

function getRandomChar(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}


function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars) {
  let charSet = '';
  if(length<4 || length>20){
    error_el.style.color = "red"
      error_el.innerHTML= 'You must choose only length between 4 and 20 for the password.❗❗'
      return '';
  }
  if (useLowercase) charSet += lowercase_Chars;
  if (useUppercase) charSet += uppercase_Chars;
  if (useNumbers) charSet += numbers_Chars;
  if (useSpecialChars) charSet += symbols_Chars;

  if (charSet === '') {
    error_el.style.color = "red"
    error_el.innerHTML= 'You must select at least one character set for the password.❗❗'
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomChar = getRandomChar(charSet);
    password += randomChar;
  }
  error_el.innerHTML =''
  result_el.style.background = "#fff";
  return password;
}


clipboard_el.addEventListener("click", () => {
  console.log(result_el.innerHTML)
  if(result_el.innerHTML.includes(' ') || result_el.innerHTML === "" ) return;
  result_el.style.background = "#0087ff5c";
  error_el.innerHTML ='copied ✅'
  error_el.style.color = "green"
  navigator.clipboard.writeText(result_el.textContent);
});

