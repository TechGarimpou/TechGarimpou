const produtos=[
{
nome:"Galaxy S24",
preco:3199.90,
categoria:"Celulares",
imagem:"https://picsum.photos/500/500?1",
link:"#"
},
{
nome:"Lenovo GM2 Pro",
preco:69.90,
categoria:"Fones",
imagem:"https://picsum.photos/500/500?2",
link:"#"
},
{
nome:"Notebook Gamer",
preco:4599.90,
categoria:"Notebook",
imagem:"https://picsum.photos/500/500?3",
link:"#"
},
{
nome:"Mouse Gamer RGB",
preco:129.90,
categoria:"Gamer",
imagem:"https://picsum.photos/500/500?4",
link:"#"
}
];

const area=document.querySelector(".produtos");
const pesquisa=document.getElementById("pesquisa");

function criar(lista){

area.innerHTML="";

lista.forEach(p=>{

area.innerHTML+=`

<div class="card">

<img src="${p.imagem}">

<h3>${p.nome}</h3>

<p class="preco">

R$ ${p.preco.toFixed(2).replace(".",",")}

</p>

<a href="${p.link}" target="_blank">

🛒 Comprar

</a>

</div>

`;

});

}

criar(produtos);

pesquisa.onkeyup=()=>{

const valor=pesquisa.value.toLowerCase();

criar(produtos.filter(p=>p.nome.toLowerCase().includes(valor)));

}

document.querySelectorAll(".categorias button").forEach(btn=>{

btn.onclick=()=>{

if(btn.textContent=="Todos"){

criar(produtos);

return;

}

criar(produtos.filter(p=>p.categoria==btn.textContent));

}

});
