const produtos=[

{

nome:"Fone Lenovo GM2 Pro",

preco:69.90,

categoria:"Fones",

imagem:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",

link:"#"

},

{

nome:"Galaxy S24",

preco:3199.90,

categoria:"Celulares",

imagem:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",

link:"#"

},

{

nome:"Notebook Gamer",

preco:4599.90,

categoria:"Notebook",

imagem:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=700",

link:"#"

}

];

const area=document.querySelector(".produtos");

const pesquisa=document.getElementById("pesquisa");

function mostrar(lista){

area.innerHTML="";

lista.forEach(produto=>{

area.innerHTML+=`

<div class="card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p class="preco">

R$ ${produto.preco.toFixed(2).replace(".",",")}

</p>

<a href="${produto.link}" target="_blank">

🛒 Comprar Agora

</a>

</div>

`;

});

}

mostrar(produtos);

pesquisa.addEventListener("keyup",()=>{

const texto=pesquisa.value.toLowerCase();

const filtro=produtos.filter(produto=>

produto.nome.toLowerCase().includes(texto)

);

mostrar(filtro);

});
