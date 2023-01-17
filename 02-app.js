const numeros = [41,1,5,104,34,55]
/* console.table(numeros);
console.log(numeros[4]); */


/* console.log(numero.length);

for(let i=0;i<numero.length;i++){
    console.log(`${numero[i]} con indice ${i}`); 
} */


function BinarySearch (a,n,l,h){
    while(l<=h){
        let m = l + Math.floor((h-1)/2);
        if(a[m]===n){
            console.log(`${n} en el indice ${m}`)
            return `${n} en el indice ${m}`
        }else if(a[m]<n){
            l = m + 1;
        }else{
            h = m-1;
        }

        return -1

    }
}
const arreglado = (numeros.sort((a,b) =>{ return a-b}));

const buscarnumero = (a,x) =>{
    a.filter(word => word.value===x);
    return a
}
console.log(buscarnumero(arreglado,4));
console.log(arreglado);
console.log(arreglado.keys())

function BusquedaBinaria(arr,n){
    let l = 0;
    let r = arr.length -1;
    let mid;
    while(r>=l){
        mid = l + Math.floor(r-l)/2;
        if(arr[mid]===n){
            console.log(arr[mid])
            return mid;
        }else if(arr[mid]>n){
            r = mid -1;
        }else{
            l = mid + 1;
        }
        return -1;
    }

}
/* BinarySearch(numero,10,0,numero.length); */
const busquedaBinariaResultado = BusquedaBinaria(arreglado,10);
console.log(busquedaBinariaResultado);
function retornoHola(){
    let a = 'Hola'
    return 'Hola';
}
retornoHola();