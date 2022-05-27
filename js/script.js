window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
//switch language
    let ruLang = document.querySelectorAll('.subheader__trans__late_ru'),
        engLang = document.querySelectorAll('.subheader__trans__late_eng'),
        menuLink = document.querySelectorAll('.menu__link'),
        subheaderTitle = document.querySelector('.subheader__title'),
        subheaderInfo = document.querySelector('.subheader__info'),
        twoTitles = document.querySelectorAll('h2'),
        aboutDescr = document.querySelectorAll('.about__descr'),
        skillsDescr = document.querySelector('.skills__descr'),
        portfolioDesrc = document.querySelectorAll('.portfolio__descr'),
        footerDescr = document.querySelector('.footer__descr'),
        footerText = document.querySelector('.footer__text'),
        btn = document.querySelectorAll('button'),
        modalSubtitle = document.querySelectorAll('.modal__subtitle'),
        modalDescr = document.querySelectorAll('.modal__descr');

    ruLang.forEach(function(item) {
        item.addEventListener('click', function () {
            menuLink[0].textContent = 'Гланая';
            menuLink[1].textContent = 'Обо мне';
            menuLink[2].textContent = 'Навыки';
            menuLink[3].textContent = 'Портфолио';
            menuLink[4].textContent = 'Контакты';
            subheaderTitle.textContent = 'Денис Новик';
            subheaderInfo.textContent = 'UX | UI-дизайнер 24 года, Минск.';
            twoTitles[0].textContent = 'Обо мне';
            twoTitles[1].textContent = 'Навыки';
            twoTitles[2].textContent = 'Портфолио';
            twoTitles[3].textContent = 'Контакты';
            aboutDescr[0].textContent = 'Привет, я Денис — UX/UI дизайнер из Минска. Интересуюсь дизайном и всем, что с ним связано.';
            aboutDescr[1].textContent = 'Я учусь на курсах "Веб и мобильный дизайн и интерфейсы» в IT-Академии.';
            aboutDescr[2].textContent = 'Готовы реализовать отличные проекты с замечательными людьми.';
            skillsDescr.textContent = 'Я работаю в таких программах как:';
            portfolioDesrc[0].textContent = 'Интернет-магазин модной одежды - Домашняя страница';
            portfolioDesrc[1].textContent = 'Магазин Reebok - Концепция';
            portfolioDesrc[2].textContent = 'Целевая страница Braun - Концепция';
            footerDescr.textContent = 'Хотите узнать больше или просто поболтать? Добро пожаловать!';
            footerText.textContent = 'Ищите меня на LinkedIn, Instagram, Behance, Dribble';
            btn[0].textContent = 'Отправить сообщение';
            btn[1].textContent = 'Заказать консультацию';
            modalSubtitle[0].textContent = 'Просто заполните форму заявки';
            modalSubtitle[1].textContent = 'Спасибо за вашу заявку!';
            modalDescr[0].textContent = 'и я перезвоню вам в течение 10 минут';
            modalDescr[1].textContent = 'Я свяжусь с вами в ближайшее время!';
        });
    });

    engLang.forEach(function(item) {
        item.addEventListener('click', function() {
            location.reload();
        });
    });

})

//цвет выбранного элемента меню, убирает и раздает класс

$('.menu a').on("click",function(){
    $('a').removeClass('menu__link_active');
    $(this).addClass('menu__link_active');
});

// переключение языка
$('.subheader__trans li').on("click",function(){
    $('li').removeClass('subheader__trans__late_active');
    $(this).addClass('subheader__trans__late_active');
});

//модальные окна
$('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

//validate
function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите свое имя",
                minlength: jQuery.validator.format("Введите {0} символа")
              },
            phone: "Введите свой номер телефона",
            email: {
              required: "Введите свою почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');

//number musk
  $('input[name=phone]').mask("+7 (999) 999-99-99");



  $('form').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "./mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});