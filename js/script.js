//Control Layout
function display_ride_page(val) {
    if (val.value == 'login') {
        document.getElementById('login').style.display = 'block';
        document.getElementById('menu-btn-login-logo').style.display = 'block';
        document.getElementById('menu-btn-login-back').style.display = 'block';
        document.getElementById('main').style.display = 'none';
        document.getElementById('menu-btn').style.display = 'none';
        document.getElementById('menu-btn-logo').style.display = 'none';
    }
    else if (val.value == 'home') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu-btn-login-logo').style.display = 'none';
        document.getElementById('menu-btn-login-back').style.display = 'none';
        document.getElementById('main').style.display = 'block';
        document.getElementById('menu-btn').style.display = 'block';
        document.getElementById('menu-btn-logo').style.display = 'block';
    }
};