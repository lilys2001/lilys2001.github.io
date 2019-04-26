for (i = 0; i < 6; i++) {
    loadHelper(i);
}

function loadHelper(i) {
    setTimeout(function() {
            document.getElementById('load').src = 'assets/images/Load' + i + '.gif';
    }, 1000 * i);
};
