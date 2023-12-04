const itensCarrinho = {}

function addCarrinho(itemNome, itemPreco) {
    // Verifica se o item adicionado já existe no carrinho
    if (itensCarrinho[itemNome]) {
        // A quantidade do produto vai aumentar
        itensCarrinho[itemNome].quantidade++
        itensCarrinho[itemNome].precoTotal += itemPreco
        itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade;
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
    } else {
        const liItem = document.createElement("li")
        liItem.innerHTML = `
        <div class="item">
            <span>${itemNome}</span>
            <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
            <span class="quantidade">1</span>
            <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
            <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>  
        `

        document.getElementById("itens-lista").appendChild(liItem)
        itensCarrinho[itemNome] = {
            quantidade: 1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }
    // calcula o valor total
    let precoTotal = 0
    for (let itemNome in itensCarrinho) {
        precoTotal += itensCarrinho[itemNome].precoTotal
    }

    // atualiza o valor total
    document.getElementById("preco-total").innerHTML = "Valor Total R$" + precoTotal.toFixed(2)
    updateCarrinho()
}

function removeCarrinho(itemNome, itemPreco) {
    if (itensCarrinho[itemNome]) {
        if (itensCarrinho[itemNome].quantidade > 1) {
            itensCarrinho[itemNome].quantidade--
            itensCarrinho[itemNome].precoTotal -= itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
        } else {
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
            document.getElementById("preco-total").innerHTML = "Valor Total: R$ 0.00"
        }
        updateCarrinho()
        document.getElementById("preco-total").innerHTML = "Valor Total: R$" + precoTotal.toFixed(2)
        updateCarrinho()
    }
}
function updateCarrinho() {
    let cont = 0;
    for (let item in itensCarrinho) {
        cont += itensCarrinho[item].quantidade;
    }
    document.getElementById("cont-carrinho").innerHTML = cont
}

function limparCarrinho() {
    document.getElementById("itens-lista").innerHTML = ""
    document.getElementById("preco-total").innerHTML = "Valor Total R$0.00"
    for (let itemNome in itensCarrinho) {
        delete itensCarrinho[itemNome]
    }
    updateCarrinho()
}

function toggleCarrinho() {
    const itensCarrinhoDiv = document.getElementById("carrinho-itens")
    if (itensCarrinhoDiv.style.display == "none") {
        itensCarrinhoDiv.style.display = "block"
    } else {
        itensCarrinhoDiv.style.display = "none"
    }
}

function buscarProdutos() {
    const buscarInput = document.getElementById("buscar-input")
    const produto = document.getElementsByClassName("produto")

    for (let i = 0; i < produto.length; i++) {
        const produtoNome = produto[i].querySelector("h3").innerText.toLowerCase();

        if (produtoNome.includes(buscarInput.value.toLowerCase())) {
            produto[i].style.display = "block"
        } else {
            produto[i].style.display = "none"
        }
    }
}

function removeCarrinho(itemNome, itemPreco) {
    if (itensCarrinho[itemNome]) {
        if (itensCarrinho[itemNome].quantidade > 1) {
            itensCarrinho[itemNome].quantidade--
            itensCarrinho[itemNome].precoTotal -= itemPreco
            itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade
            itensCarrinho[itemNome].liItem.querySelector9(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2)
        } else {
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }
        document.getElementById("preco-total").innerHTML = "Total R$" + precoTotal.toFixed(2)
        updateCarrinho()
    }
}
function updateCarrinho() {
    let cont = 0
    for (let item in itensCarrinho) {
        cont += itensCarrinho[item].quantidade
    }
    document.getElementById("cont-carrinho").innerHTML = cont
}


function limparCarrinho() {
    document.getElementById("itens-lista").innerHTML = ""
    document.getElementById("preco-total").innerHTML = "Valor Total: R$ 0.00"
    for (let itemNome in itensCarrinho) {
        delete itensCarrinho[itemNome]
    }
    updateCarrinho()
}

function toggleCarrinho() {
    const itensCarrinhoDiv = document.getElementById("carrinho-itens");
    if (itensCarrinhoDiv.style.display === "none") {
        itensCarrinhoDiv.style.display = "block";
        setTimeout(() => {
            itensCarrinhoDiv.classList.add("aberto");
        }, 0);
    } else {
        itensCarrinhoDiv.classList.remove("aberto");
        setTimeout(() => {
            itensCarrinhoDiv.style.display = "none";
        }, 300); // Ajuste o tempo de espera para corresponder ao tempo de transição CSS
    }
}




function buscarProduto() {
    const buscarInput = document.getElementById("buscar-input")
    const produto = document.getElementsByClassName("produto")

    for (let i = 0; i < produto.length; i++) {
        const produtoNome = produto[i].querySelector("h3").innerText.toLocaleLowerCase()

        if (produtoNome.includes(buscarInput.value.toLowerCase())) {
            produto[i].style.display = "block"
        } else {
            produto[i].style.display = "none"
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const imagens = ['img/lojinha-inicial.png', 'img/lojinha-inicial2.png'];
    let indiceAtual = 0;

    function atualizarImagem() {
      const carrosselContainer = document.getElementById('carrosselContainer');
      const bolinhasContainer = document.querySelector('.bolinhas');

      // Atualizar bolinhas
      bolinhasContainer.innerHTML = '';
      for (let i = 0; i < imagens.length; i++) {
        const bolinha = document.createElement('div');
        bolinha.className = `bolinha ${i === indiceAtual ? 'ativa' : ''}`;
        bolinhasContainer.appendChild(bolinha);
      }

      // Atualizar posição do carrossel container
      carrosselContainer.style.transform = `translateX(${-(indiceAtual * 100)}%)`;
    }

    function proximaImagem() {
      indiceAtual = (indiceAtual + 1) % imagens.length; // Avançar para o próximo slide
      atualizarImagem();
    }

    function imagemAnterior() {
      indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; // Voltar para o slide anterior
      atualizarImagem();
    }

    // Configurar intervalo para trocar de imagem a cada 3 segundos
    setInterval(proximaImagem, 5000);

    // Adicionar evento de clique para voltar para a imagem anterior
    document.querySelector('.carrossel').addEventListener('click', imagemAnterior);

    // Atualizar a imagem inicial
    atualizarImagem();

  });