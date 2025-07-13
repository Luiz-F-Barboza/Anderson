const chars = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  nums: "0123456789",
  syms: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

const lenInput = document.getElementById('length');
const lenVal = document.getElementById("length-val");
const output = document.getElementById("output");
const botaoGerar = document.getElementById("gen");

botaoGerar.addEventListener("click", () => {
  const length = parseInt(lenInput.value);
  const useUpper = document.getElementById("upper").checked;
  const useLower = document.getElementById("lower").checked;
  const useNums = document.getElementById("nums").checked;
  const useSyms = document.getElementById("syms").checked;

  let nada = "";
  if (useUpper) nada += chars.upper;
  if (useLower) nada += chars.lower;
  if (useNums) nada += chars.nums;
  if (useSyms) nada += chars.syms;

  if (!nada) {
    output.value = "Selecione ao menos uma opção";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * nada.length);
    password += nada[rand];
  }

  output.value = password;
});

lenInput.addEventListener("input", () => {
  lenVal.textContent = lenInput.value;
});

function mudarParaDark(){
    document.body.style.backgroundColor('#000000');
};

function mudarParaWhite(){
    document.body.style.backgroundColor('#f3f4f6');
};