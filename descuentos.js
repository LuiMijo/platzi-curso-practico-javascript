//const precioOriginal = 120;
//const descuento = 18;


function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.Value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.Value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}





//console.log(
//    {
//        precioOriginal,
//        descuento,
//        porcentajePrecioConDescuento,
//        precioConDescuento,
//    }
//);