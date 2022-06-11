const nomedaHorta = document.querySelector('.input-um input')
const descricao = document.querySelector('.input-um #descricao')
const colaborativoPrivado = document.querySelector('input[name="colaborativo"]:active')
const adcionarImagem = document.querySelectorAll('.imge img')

const hortalicas = document.querySelector('#hortalicas')
const mudaSementes = document.querySelectorAll('input[name="muda"]');
const buttonAdicionar = document.querySelector('.adicionar')
const divVazia = document.querySelector('.input-quatro')
const tempoColheita = document.querySelector('.tempoC')
const divisaoUm = document.createElement('div')
const divisaoDois = document.createElement('div')


adcionarImagem[0].classList.add('active')

  setInterval(() => {
    if(hortalicas.value === 'Batata') {
      adcionarImagem[0].classList.add('active')
      adcionarImagem[1].classList.remove('active')
      adcionarImagem[2].classList.remove('active')
      adcionarImagem[3].classList.remove('active')
      adcionarImagem[4].classList.remove('active')
    } else if(hortalicas.value === 'Alho') {
      adcionarImagem[1].classList.add('active')
      adcionarImagem[0].classList.remove('active')
      adcionarImagem[2].classList.remove('active')
      adcionarImagem[3].classList.remove('active')
      adcionarImagem[4].classList.remove('active')
    } else if(hortalicas.value === 'Beringela') {
      adcionarImagem[2].classList.add('active')
      adcionarImagem[1].classList.remove('active')
      adcionarImagem[0].classList.remove('active')
      adcionarImagem[3].classList.remove('active')
      adcionarImagem[4].classList.remove('active')
    } else if(hortalicas.value === 'Cebola') {
      adcionarImagem[3].classList.add('active')
      adcionarImagem[1].classList.remove('active')
      adcionarImagem[2].classList.remove('active')
      adcionarImagem[0].classList.remove('active')
      adcionarImagem[4].classList.remove('active')
    } else if(hortalicas.value === 'Cenoura') {
      adcionarImagem[4].classList.add('active')
      adcionarImagem[1].classList.remove('active')
      adcionarImagem[2].classList.remove('active')
      adcionarImagem[3].classList.remove('active')
      adcionarImagem[0].classList.remove('active')
    } 
  },1000)


buttonAdicionar.addEventListener('click' , () => {
  let selectedSize;
  for (const mudaSemente of mudaSementes) {
    if (mudaSemente.checked) {
        selectedSize = mudaSemente.value;
        break;
    }
}

  setTimeout(() => {
    const dives = new div('div')
    divVazia.appendChild(dives)
  },1000)
  function div (element) {
    const section =  document.createElement(element)
    
    section.appendChild(divisaoUm.cloneNode(true))
    section.appendChild(divisaoDois.cloneNode(true))
    section.classList.add('div')
     this.sec = section
     return section
   }

  divisaoDois.innerHTML = '<h3>'+hortalicas.value+'</h3><p>'+selectedSize+'</p><p>'+tempoColheita.value+'</p>'
  divisaoUm.innerHTML = '<img src="./img/'+hortalicas.value+'.webp">'
 

  
   


})

setInterval(() => {
  
},1000)




 





















