document.addEventListener("DOMContentLoaded", function(){

    let bars = document.getElementById('bars');
    let close = document.getElementById('close');
    let offCanvas = document.getElementById('offcanvas');
    

    // OFFCANVAS
    if(bars && offCanvas){
        bars.addEventListener('click', ()=> {
            offCanvas.style.transform = "translateX(0)";
            offCanvas.style.opacity = "1";
        });
    }

    if(close && offCanvas){
        close.addEventListener('click', ()=> {
            offCanvas.style.transform = "translateX(-100%)";
            offCanvas.style.opacity = "0";
        });
    }

    //kataloq

    $('#kataloq-close').click(function(){
        $('.open-kataloq').slideUp();
        $('.kataloq-product').slideUp();
        $('.kataloq-menu ul li').removeClass('kat-active');
    })
    $('#menu').click(function(){
        $('.open-kataloq').slideToggle();
        $('.open-kataloq').css('display','flex');
    })
    $('#kataloq-back').click(function(){
        $('.kataloq-product').slideUp();
        $('.kataloq-menu ul li').removeClass('kat-active');
    })
    $('.kataloq-menu ul li').click(function () {
    $('.kataloq-menu ul li').removeClass('kat-active');
    $(this).addClass('kat-active');

    $('.smartphones').hide();

    let target = $(this).data('target');
    $('#' + target).css('display', 'flex').hide().fadeIn();

    $('.kataloq-product').slideDown();
});

    // PLUS MINUS
let plusBtns = document.querySelectorAll(".plus");
let minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let box = e.target.closest(".quantity-box");
        let count = box.querySelector(".count");

        let number = parseInt(count.textContent);
        number++;
        count.textContent = number;
    });
});

minusBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let box = e.target.closest(".quantity-box");
        let count = box.querySelector(".count");

        let number = parseInt(count.textContent);
        if(number > 1){
            number--;
            count.textContent = number;
        }
    });
});

    // STORAGE (jQuery)
    $('.storage input').click(function(){
        $('.storage input').removeClass('storage-active');
        $(this).addClass('storage-active');
        console.log("clicked");
    });
    $('.setcolor span').click(function(){
        $('.setcolor span').removeClass('set-active');
        $(this).addClass('set-active');
    })

    // product img change
    $('.product-inner img').click(function(){
        let imgScr = $(this).attr('src');
        $('.image2 img').attr('src' , imgScr);
    })

    //product-buy
    $('.buy-check button').click(function(){
        $('.buy-check button').removeClass('buy-active');
        $(this).addClass('buy-active');
    })
    $('#cashphone').on('input', function(){
    let value = $(this).val();

    // yalnız rəqəmləri saxla
    value = value.replace(/\D/g, '');

    // max 9 rəqəm (AZ nömrə)
    value = value.substring(0, 9);

    $(this).val(value);
        if(value.length === 9){
        $('.cash-buy button').addClass('total-active');
        $('.cash-buy button').prop('disabled', false);
    } else {
        $('.cash-buy button').removeClass('total-active');
        $('.cash-buy button').prop('disabled', true);
    }
});

    $('.split').click(function(){
        $('.cash-buy').hide();
        $('.split-buy').show();
    })
    $('.cash').click(function(){
        $('.cash-buy').show();
        $('.split-buy').hide();
    })

function checkForm() {
    // Phone input (yalnız rəqəm, max 9)
    let phone = $('#splitphone').val().replace(/\D/g, '').substring(0, 9);
    $('#splitphone').val(phone);

    // Series (AA / AZE)
    let series = $('#series').val();

    // ID Number (yalnız rəqəm, max 7)
    let idNumber = $('#splitNumber').val().replace(/\D/g, '').substring(0, 7);
    $('#splitNumber').val(idNumber);

    // Fin kod (hərf və rəqəm, max 7)
    let fin = $('.finkod input').val().replace(/[^a-zA-Z0-9]/g, '').substring(0, 7);
    $('.finkod input').val(fin);

    // Button aktiv/passiv
    let btn = $('#buyBtn'); // düyməni ayrıca dəyişkənə ata
    if(phone.length === 9 && series && idNumber.length === 7 && fin.length === 7){
        btn.addClass('total-active');
        btn.prop('disabled', false);
    } else {
        btn.removeClass('total-active');
        btn.prop('disabled', true);
    }
}

// Hər input dəyişəndə yoxla
$('#splitphone, #series, #splitNumber, .finkod input').on('input change', checkForm);


    $('#buy').click(function(){
        $('#product-buy').show();
    })
    $('#buyclose').click(function(){
        $('#product-buy').hide();
    })

});

$('.formbuy button').click(function(e){

    $('#product-buy').hide();
    e.preventDefault(); // formu göndərməmək üçün
    $('.modal').css('display','flex');
    
    // Modal seç
    let modal = $('#orderModal');
    
    // Modalı göstər
    modal.show();
    setTimeout(() => {
        modal.addClass('show');
    }, 10); // animasiya üçün kiçik gecikmə

    // 3 saniyədən sonra avtomatik bağla
    setTimeout(() => {
        modal.removeClass('show');
        setTimeout(() => modal.hide(), 400);
    }, 3000);
});

// Close button klikləyəndə bağla
$('.modal .close').click(function(){
    let modal = $(this).closest('.modal');
    modal.removeClass('show');
    setTimeout(() => modal.hide(), 400);
});

// Arxa fon kliklənəndə də bağla
$('.modal').click(function(e){
    if(e.target === this){
        $(this).removeClass('show');
        setTimeout(() => $(this).hide(), 400);
    }
});

$(window).on('load', function() {
    $('.loader').fadeOut(1000); // 0.5 saniyədə yox olur
});