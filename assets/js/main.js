function openPaymentDrawer(elem) {
    var $this = $(elem);

    $('.payment-drawwer').not(this).each(function () {
        var $parents = $(this);
        $parents.find('.button-action-payment').slideUp(function () {
            $parents.removeClass('active');
        });

        $parents.find('.short-payment-support-info').find('img').slideDown();
        $parents.find('.short-payment-support-info').find('i').removeClass('fa-chevron-up').addClass(
            'fa-chevron-down');
    });

    var $parents = $this.parents('.child-box');

    if (!$parents.find('.button-action-payment').is(":hidden")) {
        $parents.find('.button-action-payment').slideUp(function () {
            $parents.removeClass('active');
        });

        $parents.find('.short-payment-support-info').find('img').slideDown();
        $parents.find('.short-payment-support-info').find('.fa-chevron-up').removeClass('fa-chevron-up')
            .addClass('fa-chevron-down');

    } else {
        $parents.find('.button-action-payment').slideDown(function () {
            $parents.addClass('active');
        });
        $parents.find('.short-payment-support-info').find('img').slideUp();
        $parents.find('.short-payment-support-info').find('.fa-chevron-down').addClass('fa-chevron-up')
            .removeClass('fa-chevron-down');
    }
}



//validasi form
function radioValidation() {

    //validasi userID
    if (document.getElementById('userID').value == "") {
        alert("UserID tidak boleh kosong");
        document.getElementById('userID').focus();
        return false;
    }

    //validasi denom
    var nom = document.getElementsByName('denom');
    var nomValue = false;

    for (var i = 0; i < nom.length; i++) {
        if (nom[i].checked == true) {
            nomValue = true;
        }
    }
    if (!nomValue) {
        alert("Pilih Jumlah");
        return false;
    }

    //validasi metode pembayaran
    var pay = document.getElementsByName('payment');
    var payValue = false;

    for (var i = 0; i < pay.length; i++) {
        if (pay[i].checked == true) {
            payValue = true;
        }
    }
    if (!payValue) {
        alert("Pilih Metode Pembayaran");
        return false;
    }

    //validasi nama
    if (document.getElementById('nama').value == "") {
        alert("Nama tidak boleh kosong");
        document.getElementById('nama').focus();
        return false;
    }

    //validasi whatsapp
    if (document.getElementById('whatsapp_number').value == "") {
        alert("Nomor WhatsApp tidak boleh kosong");
        document.getElementById('whatsapp_number').focus();
        return false;
    }
}

function openRightMenu() {
    document.getElementById("rightMenu").style.display = "block";
    document.getElementById("indikator").style.display = "none";
    document.getElementById("control-nxt").style.display = "none";
}

function closeRightMenu() {
    document.getElementById("rightMenu").style.display = "none";
}


function valMasuk() {

    //validasi no
    if (document.getElementById('phone_number').value == "") {
        alert("Nomor WhatsApp tidak boleh kosong");
        document.getElementById('phone_number').focus();
        return false;
    }

    //validasi nama
    if (document.getElementById('password').value == "") {
        alert("Password tidak boleh kosong");
        document.getElementById('password').focus();
        return false;
    }
}

