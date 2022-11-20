$(document).ready(function() {
    $("input[type='radio']").click(function() {
        var harga = $("input[name='denom']:checked").val();
        var payment = $("input[name='payment']:checked").val();
        if (payment) {
            console.log(payment);
        }
        fetch("https://produk.asepdarmawan3.repl.co").then((data) => {
            return data.json();
        }).then((objectData) => {
            let tableData = "";
            console.log(objectData[0].price);
             tableData = `<b>Rp${objectData[harga].price}</b>`;
             document.getElementById("price").innerHTML = tableData;
             document.getElementById("price_alfamart").innerHTML = tableData;
        });
    });
});