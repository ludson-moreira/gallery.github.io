//Control Layout
function display_ride_page(val) {
    if (val.value == 'login') {
        document.getElementById('login').style.display = 'block';
        document.getElementById('menu-btn-login-logo').style.display = 'block';
        document.getElementById('menu-btn-login-back').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('menu-btn').style.display = 'none';
        document.getElementById('menu-btn-logo').style.display = 'none';
        document.getElementById('menu-sidedown').style.display = 'none';
    }
    else if (val.value == 'home') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu-btn-login-logo').style.display = 'none';
        document.getElementById('menu-btn-login-back').style.display = 'none';
        document.getElementById('menu-btn-logo').style.display = 'none';
        document.getElementById('ride-menu-btn').style.display = 'none';
        document.getElementById('menu-sidedown').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('menu-btn').style.display = 'block';
        document.getElementById('show-menu-btn').style.display = 'block';
    }
}

function display_menu(val) {
    if (val.value == 'showmenu') {
        document.getElementById('menu-sidedown').style.display = 'block';
        document.getElementById('show-menu-btn').style.display = 'none';
        document.getElementById('ride-menu-btn').style.display = 'block';
    }
}

function ride_menu(val) {
    if (val.value == 'ridemenu') {
        document.getElementById('menu-sidedown').style.display = 'none';
        document.getElementById('show-menu-btn').style.display = 'block';
        document.getElementById('ride-menu-btn').style.display = 'none';
    }
}

//Year
function getYear() {
    var atualDate = new Date();
    var year = atualDate.getFullYear();
    document.getElementById("year").innerHTML = year;
}