function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');
    const imcImage = document.getElementById('imc-image');
    const header = document.querySelector('header');
  
    header.classList.remove(
      'header-verde-claro',
      'header-amarelo',
      'header-laranja',
      'header-vermelho'
    );
  
    if (weight > 0 && height > 0) {
      const imc = (weight / (height * height)).toFixed(2);
      let category;
      let imagePath;
  
      if (imc < 18.5) {
        category = "Abaixo do peso";
        imagePath = "images/abaixo_do_peso.png";
        header.classList.add('header-verde-claro');
      } else if (imc < 24.9) {
        category = "Peso normal";
        imagePath = "images/peso_normal.png";

      } else if (imc < 29.9) {
        category = "Sobrepeso";
        imagePath = "images/sobrepeso.png";
        header.classList.add('header-amarelo');
      } else if (imc < 34.9) {
        category = "Obesidade Grau 1";
        imagePath = "images/obesidade_grau1.png";
        header.classList.add('header-laranja');
      } else {
        category = "Obesidade Grau 2 ou maior";
        imagePath = "images/obesidade_grau2.png";
        header.classList.add('header-vermelho');
      }
  
      result.textContent = `Seu IMC é ${imc} (${category}).`;
      imcImage.src = imagePath;
      imcImage.style.display = "block";
    } else {
      result.textContent = "Por favor, insira valores válidos.";
      imcImage.style.display = "none";
    }
  }
  