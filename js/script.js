function calcularDescuento() {
    const producto1 = parseFloat(document.getElementById('producto1').value) || 0;
    const producto2 = parseFloat(document.getElementById('producto2').value) || 0;
    const producto3 = parseFloat(document.getElementById('producto3').value) || 0;
    const producto4 = parseFloat(document.getElementById('producto4').value) || 0;
    const producto5 = parseFloat(document.getElementById('producto5').value) || 0;

    // validar que sean campos numericos, y que sean valores positivos
    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5) ||
        producto1 < 0 || producto2 < 0 || producto3 < 0 || producto4 < 0 || producto5 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores numéricos positivos en todos los campos.'
        });
        return;
    }

    // calcular subtotal
    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    document.getElementById('subtotal').value = subtotal.toFixed(2);

    // calcular descuento
    let descuento = 0;
    let porcentajeDescuento = 0;

    if (subtotal >= 13000) {
        descuento = subtotal * 0.4;
        porcentajeDescuento = 40;
    } else if (subtotal >= 9000) {
        descuento = subtotal * 0.3;
        porcentajeDescuento = 30;
    } else if (subtotal >= 5000) {
        descuento = subtotal * 0.2;
        porcentajeDescuento = 20;
    } else if (subtotal >= 1000) {
        descuento = subtotal * 0.1;
        porcentajeDescuento = 10;
    }

   // actualizar el label
    document.getElementById('descuentoLabel').innerText = `Descuento ${porcentajeDescuento}%`;
    document.getElementById('descuento').value = descuento.toFixed(2);

   // calcular subtotal 
    const total = subtotal - descuento;
    document.getElementById('total').value = total.toFixed(2);
}

function limpiarFormulario() {
    document.getElementById('descuentoForm').reset();
    document.getElementById('subtotal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('total').value = '';
    document.getElementById('descuentoLabel').innerText = 'Descuento 0%';
}