//<a href="produto/produto01.html"></a>
//https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500

let produtos = {
    item01Imagem: 'https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    item01Nome: 'Camisa Preta',
    item01Preço: 5,
    //-----------------------------------------------------------//
    item02Imagem: 'https://t3.ftcdn.net/jpg/01/27/95/18/360_F_127951825_t4KwrUxvASGoxmx0VVVHE3anigDafnpP.jpg',
    item02Nome: 'Camisa Vermelha',
    item02Preço: 5,
}


let item01 = {
    imagem: 'https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    descriçao: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
    preço: 'R$5'
}

let addremove = {
    remover01: '-',
    quantidade01: 1,
    adicionar01: '+',
    //-----------------------------------------------------------//
    remover02: '-',
    quantidade02: 1,
    adicionar02: '+'
}


document.getElementById('root').innerHTML = `
    <div class="container">
        <div class='item01'>
            <img src="${produtos.item01Imagem}">
            <p id="p1">${produtos.item01Nome}</p>
            <p id="p2">R$ ${produtos.item01Preço}</p>
            <button class="addcar" id='addcar01' onclick='additem01()'>Adicionar ao carrinho</button>
        </div>

        <div class='item02'>
            <img src="${produtos.item02Imagem}">
            <p id="p1">${produtos.item02Nome}</p>
            <p id="p2">R$ ${produtos.item02Preço}</p>
            <button class="addcar" id='addcar02' onclick='additem02()'>Adicionar ao carrinho</button>
        </div>
    </div>


    <div class="carrinho" id="opencar">
        <div class="opencar"onclick="opencarCSS()">
            <img src="imagens/mais.png">
        </div>

        <div id='item01'></div>

        <div class="totaldascompras">
            <p>Total:</p>
            <p id='totalOpencar'>R$ 0</p>
        </div>
    </div>
    `

function additem01(){
    document.getElementById('item01').innerHTML +=
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

    document.getElementById('totalOpencar').innerHTML = `R$`
}


function additem02(){
    document.getElementById('item01').innerHTML += 
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
}







function removequantidade01(){
    addremove.quantidade01 --

    textQuantidadeUm.innerHTML = `${addremove.quantidade01}`

    if(addremove.quantidade01 <= 1){
        addremove.quantidade01 = 1
        textQuantidadeUm.innerHTML = `${addremove.quantidade01}`
    }
}

function addquantidade01(){
    addremove.quantidade01 ++

    textQuantidadeUm.innerHTML = `${addremove.quantidade01}`
}



function removequantidade02(){
    addremove.quantidade02 --

    textQuantidadeDois.innerHTML = `${addremove.quantidade02}`

    if(addremove.quantidade02 <= 1){
        addremove.quantidade02 = 1
        textQuantidadeDois.innerHTML = `${addremove.quantidade02}`
    }
}

function addquantidade02(){
    addremove.quantidade02 ++

    textQuantidadeDois.innerHTML = `${addremove.quantidade02}`
}




function opencarCSS(){
    let opencar = document.getElementById('opencar')

    opencar.classList.toggle('open')
}