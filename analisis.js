//Helpers

function esPar(numerito)
{
    return (numerito % 2 === 0);
}



//Calculadora Mediana
function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length))
    {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMedioAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }
    else
    {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana General
const salariosCol = colombia.map(
    {
       function (personita) 
       {
          return personita.salary;          
       }
    }
);

const salariosColSorted = salariosCol.sort(
    {
        function (salaryA, salaryB)
        {
            return salaryA - salaryB;
        }
    }
);



function calcularMedioAritmetica(lista)
{
    const sumaLista = lista.reduce
    (
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );
    

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}



const medianaGeneralCol = medianaSalarios(salariosColSorted);


//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;


const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);



console.log(
    {
        medianaGeneralCol,
        medianaTop10Col,
    }
);