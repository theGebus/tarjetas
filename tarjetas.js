

function pintarTarjetas(){
    //Recupero texto de caja

    let desde = recuperarInt("txtDesde");
    let hasta = recuperarInt("txtHasta");
    let salto = recuperarInt("txtSalto");

    let contenido ="";
    let divTarjetas=document.getElementById("divTarjetas")
    for (let i=desde; i<=hasta; i+=salto){
        contenido = contenido + "<div class='item'>" + i +"</div>"
        divTarjetas.innerHTML =contenido;
    }
}
