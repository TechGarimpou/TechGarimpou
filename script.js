const produtos = [

{
nome:"Fone Lenovo GM2 Pro",
preco:"R$ 69,90",
imagem:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
link:"#",
categoria:"Fones"
},

{
nome:"Samsung Galaxy S24",
preco:"R$ 3.199,90",
imagem:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
link:"#",
categoria:"Celulares"
},

{
nome:"Notebook Gamer",
preco:"R$ 4.599,90",
imagem:"https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600",
link:"#",
categoria:"Notebook"
}

];

const area=document.getElementById("produtos");

function carregarProdutos(lista){

area.innerHTML="";

lista.forEach(produto=>{

area.innerHTML+=`

<div class="card">

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<p class="preco">${produto.preco}</p>

<a href="${produto.link}" target="_blank">

🛒 Comprar na Shopee

</a>

</div>

`;

});

}

carregarProdutos(produtos);
