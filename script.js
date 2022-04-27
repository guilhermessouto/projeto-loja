let produtos = {
    item01Imagem: 'https://ae01.alicdn.com/kf/HTB1vNqcKFXXXXbMXFXXq6xXFXXXy/2014-Brand-Regular-Men-T-Shirt-anime-Spirited-Away-Customized-Picture-Tee-Shirts-Mens-Regular-Style.jpg_Q90.jpg_.webp',
    item01Nome: 'Camisa Preta',
    item01Preço: 5,
    //-----------------------------------------------------------//
    item02Imagem: 'https://ae01.alicdn.com/kf/HTB1aTaBKFXXXXXaXXXXq6xXFXXX2/Design-Solid-Womens-T-Shirt-cat-kitten-cartoon-illustration-04-Jokes-Camp-Women-T-Shirts-Slim.jpg_Q90.jpg_.webp',
    item02Nome: 'Camisa Amarela',
    item02Preço: 5,
}

let addremove = {
    remover01: '-',
    quantidade01: 0,
    adicionar01: '+',
    //-----------------------------------------------------------//
    remover02: '-',
    quantidade02: 0,
    adicionar02: '+'
}//adicionar ou remover a quantidade dos produtos. O numero na propriedade representa o item





document.getElementById('root').innerHTML = `
    <div class="intro" id="intro">
        <div class="header-intro">
            <h1>Logo</h1>
        </div>

        <div class="container-intro">
            <div class="container-text">
                <h1>Our new collection</h1>
                <p>Shop the latest fashion </p>
                <button onclick="openShop()">Shop now</button>
            </div>
        </div>
    </div>


    <header>
        <h1>Logo</h1>

        <input type="text" placeholder="O que você procura hoje ?">

        <nav>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" id="login">Login</a>

            <div class="icon-openCar"onclick="opencarCSS()">
                    <img src="https://www.grupopecini.com.br/images/carrinho.png">
                </div>

            <div class="carrinho" id="opencar">
                <div id='itensAdicionados'></div>
        
                <div class="totalDaCompra">
                    <p>Total:</p>
                    <p id='totalDaCompra'>R$ 0</p>
                </div>
            </div>
        </nav>
    </header>

    <div class="container">
        <div class='produtos'>
            <img src="${produtos.item01Imagem}">
            <p id="p1">${produtos.item01Nome}</p>
            <p id="p2">R$ ${produtos.item01Preço}</p>
            <button class="addAoCarrinho" id='addcar01' onclick='additem01()'>Adicionar ao carrinho</button>
        </div>

        
        <div class='produtos'>
            <img src="${produtos.item02Imagem}">
            <p id="p1">${produtos.item02Nome}</p>
            <p id="p2">R$ ${produtos.item02Preço}</p>
            <button class="addAoCarrinho" id='addcar02' onclick='additem02()'>Adicionar ao carrinho</button>
        </div>
    </div> 
    `




function additem01(){
    addremove.quantidade01 = 1

    document.getElementById('itensAdicionados').innerHTML +=
    `
        <div class='itens'>
            <p>
                ${produtos.item01Nome}
            </p>

            <div class="addremove">
                <p class='p'>R$ 5</p>

                <button onclick='removequantidade01()'>
                    ${addremove.remover01}
                </button>

                <p id='textQuantidadeUm'>
                    ${addremove.quantidade01}
                </p>

                <button onclick="addquantidade01()">
                    ${addremove.adicionar01}
                </button>
            </div>
        </div>
    `

    document.getElementById('addcar01').onclick = null

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
}//add o primeiro produto no carrinho

function additem02(){
    addremove.quantidade02 = 1

    document.getElementById('itensAdicionados').innerHTML += 
    `
        <div class='itens'>
            <p>
                ${produtos.item02Nome}
            </p>

            <div class="addremove">
                <p class='p'>R$ 5</p>

                <button onclick='removequantidade02()'>
                    ${addremove.remover02}
                </button>

                <p id='textQuantidadeDois'>
                    ${addremove.quantidade02}
                </p>

                <button onclick="addquantidade02()">
                    ${addremove.adicionar02}
                </button>
        </div>
    `

    document.getElementById('addcar02').onclick = null

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
}//add o segundo produto no carrinho





function removequantidade01(){
    addremove.quantidade01 --

    textQuantidadeUm.innerHTML = `${addremove.quantidade01}`

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`

    if(addremove.quantidade01 <= 1){
        addremove.quantidade01 = 1
        textQuantidadeUm.innerHTML = `${addremove.quantidade01}`
        totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
    }

    
}//remover o primeiro produto no carrinho

function addquantidade01(){
    addremove.quantidade01 ++

    textQuantidadeUm.innerHTML = `${addremove.quantidade01}`

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
}//add o primeiro produto no carrinho





function removequantidade02(){
    addremove.quantidade02 --

    textQuantidadeDois.innerHTML = `${addremove.quantidade02}`

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`

    if(addremove.quantidade02 <= 1){
        addremove.quantidade02 = 1
        textQuantidadeDois.innerHTML = `${addremove.quantidade02}`
        totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
    }
}//remover o segundo produto no carrinho

function addquantidade02(){
    addremove.quantidade02 ++

    textQuantidadeDois.innerHTML = `${addremove.quantidade02}`

    totalDaCompra.innerHTML = `R$ ${(addremove.quantidade02 * 5) + (addremove.quantidade01 * 5)}`
}//add o segundo produto no carrinho





function opencarCSS(){
    let opencar = document.getElementById('opencar')

    opencar.classList.toggle('opencar')
}//função pra abrir o carrinho




function openShop(){
    let openShop = document.getElementById('intro')

    openShop.classList.add('openshop')
}//funçao pra fechar a intro