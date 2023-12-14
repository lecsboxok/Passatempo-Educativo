function Escolher(idioma) {

  fetch(`textos_${idioma}.json`)
    .then(resposta => resposta.json())
    .then(texto => {
      document.getElementById('Theader1').innerHTML = texto.Theader1;
      document.getElementById('Theader2').innerHTML = texto.Theader2;
      document.getElementById('Theader3').innerHTML = texto.Theader3;
      document.getElementById('Theader4').innerHTML = texto.Theader4;
      document.getElementById('Theader5').innerHTML = texto.Theader5;
      document.getElementById('Theader6').innerHTML = texto.Theader6;
      document.getElementById('Theader7').innerHTML = texto.Theader7;
      document.getElementById('Theader8').innerHTML = texto.Theader8;
      document.getElementById('Theader9').innerHTML = texto.Theader9;
      document.getElementById('Theader10').innerHTML = texto.Theader10;
      document.getElementById('Theader11').innerHTML = texto.Theader11;
      document.getElementById('Theader12').innerHTML = texto.Theader12;
      document.getElementById('Theader13').innerHTML = texto.Theader13;
      document.getElementById('Theader14').innerHTML = texto.Theader14;
      document.getElementById('Theader15').innerHTML = texto.Theader15;
      document.getElementById('Theader16').innerHTML = texto.Theader16;
      document.getElementById('Theader17').innerHTML = texto.Theader17;
      document.getElementById('Theader18').innerHTML = texto.Theader18;
      document.getElementById('TRodape1').innerHTML = texto.TRodape1;
      document.getElementById('TRodape2').innerHTML = texto.TRodape2;
      document.getElementById('TRodape3').innerHTML = texto.TRodape3;
    })
    .catch(error => console.error('Erro buscando textos:', error));
}
