const produtos = [
{
id:1,
nome:"Lenovo GM2 Pro",
categoria:"Fones",
preco:69.90,
precoAntigo:129.90,
nota:4.9,
frete:true,
imagem:"https://picsum.photos/600?1",
link:"#"
},
{
id:2,
nome:"Galaxy S24",
categoria:"Celulares",
preco:3199.90,
precoAntigo:3999.90,
nota:4.8,
frete:true,
imagem:"https://picsum.photos/600?2",
link:"#"
},
{
id:3,
nome:"Apple Watch",
categoria:"Smartwatch",
preco:2299.90,
precoAntigo:2799.90,
nota:4.9,
frete:true,
imagem:"https://picsum.photos/600?3",
link:"#"
},
{
id:4,
nome:"Notebook Acer Nitro",
categoria:"Notebook",
preco:4599.90,
precoAntigo:5399.90,
nota:4.8,
frete:false,
imagem:"https://picsum.photos/600?4",
link:"#"
},
{
id:5,
nome:"Mouse Logitech G502",
categoria:"Gamer",
preco:189.90,
precoAntigo:259.90,
nota:4.9,
frete:true,
imagem:"https://picsum.photos/600?5",
link:"#"
},
{
id:6,
nome:"Monitor LG 27",
categoria:"Monitor",
preco:999.90,
precoAntigo:1299.90,
nota:4.7,
frete:true,
imagem:"https://picsum.photos/600?6",
link:"#"
}
];

const area=document.getElementById("produtos");
const pesquisa=document.getElementById("pesquisa");


function desconto(a,b){
return Math.round(100-(a/b*100));
}

function desenhar(lista){

area.innerHTML="";

lista.forEach(produto=>{

const fav=favoritos.includes(produto.id);

area.innerHTML+=`

<div class="card">

<div class="desconto">

-${desconto(produto.preco,produto.precoAntigo)}%

</div>

<div


</div>

<img src="${produto.imagem}">

<h3>${produto.nome}</h3>

<div class="avaliacao">

⭐ ${produto.nota}

</div>

<p class="antigo">

R$ ${produto.precoAntigo.toFixed(2).replace(".",",")}

</p>

<p class="preco">

R$ ${produto.preco.toFixed(2).replace(".",",")}

</p>

${
produto.frete
?
'<p class="frete">🚚 Frete Grátis</p>'
:
''
}

<a href="${produto.link}" target="_blank">

Comprar Agora

</a>

</div>

`;

});

}

desenhar(produtos);



desenhar(produtos);

}

pesquisa.addEventListener("keyup",()=>{

const texto=pesquisa.value.toLowerCase();

const lista=produtos.filter(produto=>{

return produto.nome.toLowerCase().includes(texto);

});

desenhar(lista);

});

document.querySelectorAll(".categorias button").forEach(botao=>{

botao.onclick=()=>{

const categoria=botao.textContent;

if(categoria==="Todos"){

desenhar(produtos);

return;

}

const lista=produtos.filter(produto=>{

return produto.categoria===categoria;

});

desenhar(lista);

};

});

window.scroll({
top:0
});
