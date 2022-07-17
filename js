// INDICE
//1. Crea una array di valori unici
//2. crea un array di oggetti unici
//3. Fltra un array con un altro array
//4. Observer per animazioni uniche al primo scrolling della pagina
//5. DATA ordinata da stringa




//Crea una array di valori unici
function _arrayValoriUnici(arr) {
  const result = []
  arr.forEach((item, index) => {
    !result.includes(item) && result.push(item)
  })
  return result

}


// crea un array di oggetti unici
function _arrayOggettiUnici(arr, property) {
  // array di confronto
  const result = []

  // itera l'array, per ogni elemento cerca la presenza di uno uguale dentro l'array di confronto con find
  // se find da risultato negativo aggiunge su result l'item

  arr.forEach((item) => {
    const r = result.find((resultitem) => resultitem[property] === item[property])
    if (!r) {
      result.push(item)
    }
  })

  return result
}

// Fltra un array con un altro array
  const arrfiltrato = arrayDaFiltrare.filter((item) => {
    return arrayDaFiltro.includes(item._id)
  })
  
//Observer per animazioni uniche al primo scrolling della pagina


  function _observerFirstAnimation (){
   const onObserve = function (entries) {
    entries.forEach(entry => {
      const el = entry.target
      if(entry.isIntersecting && Math.floor(entry.intersectionRatio) === 1){ 
        /*
        If you dont' check intersectionRatio ratio === 1, 
        the observed element will trigger the callback twice, 
        because when immediately passing/leaving 100% threshold, 
        observer will trigger isIntersecting = true,
        intersectionRatio ~= 0.9 (maybe bug).
        
        Chrome somehow gets intersectionRatio slightly above 1 on 
        the first box, so floor the value
        */
        if(!el.classList.contains('open')) {
          el.classList.add('open')
        }
      }
    })
  }

     const _observe = new IntersectionObserver(onObserve, {root: null,margin: '0px',threshold: 1.0})
   return  _observe
  
   
  }
  
  //observerFirstAnimation().observe(elemento del DOM)

export {_arrayValoriUnici, _arrayOggettiUnici, _observerFirstAnimation}


// DATA ordinata da stringa
new Date(<data stringa>).toLocaleString('en',{day:'numeric',month:'long', year:'numeric'})
