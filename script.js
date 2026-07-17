const produtos = [

{
nome:"Lenovo GM2 Pro",
preco:69.90,
precoAntigo:129.90,
categoria:"Fones",
nota:"4.9",
frete:true,
imagem:"https://picsum.photos/500?1",
link:"#"
},

{
nome:"Galaxy S24",
preco:3199,
precoAntigo:3999,
categoria:"Celulares",
nota:"4.8",
frete:true,
imagem:"https://picsum.photos/500?2",
link:"#"
},

{
nome:"Mouse Logitech G502",
preco:189,
precoAntigo:259,
categoria:"Gamer",
nota:"4.9",
frete:false,
imagem:"https://picsum.photos/500?3",
link:"#"
},

{
nome:"Apple Watch",
preco:2299,
precoAntigo:2799,
categoria:"Smartwatch",
nota:"4.8",
frete:true,
imagem:"https://picsum.photos/500?4",
link:"#"
},

{
nome:"Notebook Gamer Acer",
preco:4599,
precoAntigo:5399,
categoria:"Notebook",
nota:"4.9",
frete:true,
imagem:"https://picsum.photos/500?5",
link:"#"
}

];

const area=document.querySelector(".produtos");
const pesquisa=document.getElementById("pesquisa");

function criar(lista){

area.innerHTML="";

lista.forEach(produto=>{

const desconto=Math.round(
100-(produto.preco/produto.precoAntigo*100)
);

area.innerHTML+=`

<div class="card">

<span class="desconto">
-${desconto}%
</span>

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

🛒 Comprar Agora

</a>

</div>

`;

});

}

criar(produtos);

pesquisa.addEventListener("keyup",()=>{

const texto=pesquisa.value.toLowerCase();

criar(

produtos.filter(p=>

p.nome.toLowerCase().includes(texto)

)

);

});

document.querySelectorAll(".categorias button").forEach(btn=>{

btn.onclick=()=>{

const cat=btn.textContent;

if(cat==="Todos"){

criar(produtos);

return;

}

criar(

produtos.filter(p=>p.categoria===cat)

);

};

});
