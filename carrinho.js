const listaCarrinho = document.getElementById("lista-carrinho");
const totalElemento = document.getElementById("total");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let total = 0;

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";
    total = 0;

    carrinho.forEach((produto, index) => {

        total += produto.preco;

        listaCarrinho.innerHTML += `
        
        <div class="produto">

            <img src="${produto.imagem}" alt="${produto.nome}">

            <div class="info">

                <h3>${produto.nome}</h3>

                <span>R$ ${produto.preco.toFixed(2)}</span>

            </div>

            <button class="lixeira"
                onclick="removerProduto(${index})">
                🗑️
            </button>

        </div>

        `;
    });

    totalElemento.innerHTML =
        `Total: R$ ${total.toFixed(2)}`;
}

function removerProduto(index){

    carrinho.splice(index,1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    atualizarCarrinho();
}

atualizarCarrinho();