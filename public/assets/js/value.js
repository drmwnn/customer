$(document).ready(function() {
    $("input[type='radio']").click(function() {
        var harga = $("input[name='denom']:checked").val();
        var payment = $("input[name='payment']:checked").val();
        console.log(harga, payment);

        fetch("https://produk-asepdarmawan3.replit.app/").then((data) => {
            return data.json();
        }).then((objectData) => {
            let tableData = "";
            //console.log(objectData[0].price);
            tableData = `<b>Rp${objectData[harga].price}</b>`;
            document.getElementById("price_retail").innerHTML = tableData;
            document.getElementById("price_alfamart").innerHTML = tableData;
            document.getElementById("price_alfamidi").innerHTML = tableData;
            document.getElementById("price_indomaret").innerHTML = tableData;
            document.getElementById("price_ewallet").innerHTML = tableData;
            document.getElementById("price_gopay").innerHTML = tableData;
            document.getElementById("price_linkaja").innerHTML = tableData;
            document.getElementById("price_shopeepay").innerHTML = tableData;
            document.getElementById("price_ovo").innerHTML = tableData;
            document.getElementById("price_dana").innerHTML = tableData;
            // document.getElementById("price_qris").innerHTML = tableData;
            document.getElementById("price_bank").innerHTML = tableData;
            document.getElementById("price_bca").innerHTML = tableData;
            document.getElementById("price_bri").innerHTML = tableData;
            document.getElementById("price_bni").innerHTML = tableData;
            document.getElementById("price_mandiri").innerHTML = tableData;
        });

        //console.log(payment);
    });
});
