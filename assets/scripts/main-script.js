var isLight = true;

function checkMode() {
    if (Boolean(isLight)) {
        changeToDark();
        isLight = false;
    } else {
        changeToLight();
        isLight = true;
    }
}

function changeToDark() {
    document.body.style.backgroundColor = '#333852';
    document.getElementById('navbar').style.backgroundColor = '#808D7E';
    document.getElementById('load-screen').style.backgroundColor = '#808D7E';
    document.getElementById('footer').style.backgroundColor = '#808D7E';

    document.getElementById('hello').style.color = '#F9F9F9';
    document.getElementById('my-name').style.color = '#F9F9F9';
    document.getElementById('lily').style.color = '#333852';
    document.getElementById('introduction').style.color = '#F9F9F9';
    document.getElementById('about-text').style.color = '#F9F9F9';
    document.getElementById('projects-text').style.color = '#F9F9F9';

    document.getElementById('change-header-image').src = 'assets/images/HeaderDark.gif';
    document.getElementById('email-pic').src = 'assets/images/DarkEmail.gif';
    document.getElementById('github-pic').src = 'assets/images/DarkGithub.gif';
    document.getElementById('linkedin-pic').src = 'assets/images/DarkLinkedin.gif';
    document.getElementById('sunmoon').src = 'assets/images/Sun.gif';
    document.getElementById('az').src = 'assets/images/AZDark.gif';
    document.getElementById('scheduler').src = 'assets/images/SchedulerDark.gif';
    document.getElementById('maps').src = 'assets/images/MapsDark.gif';
    document.getElementById('arrow-change').src = 'assets/images/GreenArrow.gif';

    document.getElementById('about-text').style.textShadow = '-2px 4px 4px #13172C';
    document.getElementById('projects-text').style.textShadow = '-2px 4px 4px #13172C';
    document.getElementById('hello').style.textShadow = '-2px 4px 4px #6D746C';
    document.getElementById('my-name').style.textShadow = '-2px 4px 4px #6D746C';
    document.getElementById('lily').style.textShadow = '-2px 4px 4px #6D746C';

    document.getElementById('email').style.boxShadow = '-2px 4px 4px #6D746C';
    document.getElementById('github').style.boxShadow = '-2px 4px 4px #6D746C';
    document.getElementById('linkedin').style.boxShadow = '-2px 4px 4px #6D746C';
    document.getElementById('self-image').style.boxShadow = '-2px 4px 4px #13172C';
    document.getElementById('proj1').style.boxShadow = '-2px 4px 4px #13172C';
    document.getElementById('proj2').style.boxShadow = '-2px 4px 4px #13172C';
    document.getElementById('proj3').style.boxShadow = '-2px 4px 4px #13172C';
}

function changeToLight() {
    document.body.style.backgroundColor = '#F9F9F9';
    document.getElementById('navbar').style.backgroundColor = '#333852';
    document.getElementById('load-screen').style.backgroundColor = '#E2B1B1';
    document.getElementById('footer').style.backgroundColor = '#333852';

    document.getElementById('change-header-image').src = 'assets/images/HeaderLight.gif';
    document.getElementById('email-pic').src = 'assets/images/LightEmail.gif';
    document.getElementById('github-pic').src = 'assets/images/LightGithub.gif';
    document.getElementById('linkedin-pic').src = 'assets/images/LightLinkedin.gif';
    document.getElementById('sunmoon').src = 'assets/images/Moon.gif';
    document.getElementById('az').src = 'assets/images/AZLight.gif';
    document.getElementById('scheduler').src = 'assets/images/SchedulerLight.gif';
    document.getElementById('maps').src = 'assets/images/MapsLight.gif';
    document.getElementById('arrow-change').src = 'assets/images/PinkArrow.gif';

    document.getElementById('hello').style.color = '#6B5365';
    document.getElementById('my-name').style.color = '#6B5365';
    document.getElementById('lily').style.color = '#F9F9F9';
    document.getElementById('introduction').style.color = '#6D6D6D';
    document.getElementById('about-text').style.color = '#333852';
    document.getElementById('projects-text').style.color = '#333852';

    document.getElementById('about-text').style.textShadow = '-2px 4px 4px #C9C9C9';
    document.getElementById('projects-text').style.textShadow = '-2px 4px 4px #C9C9C9';
    document.getElementById('hello').style.textShadow = '-2px 4px 4px #B18686';
    document.getElementById('my-name').style.textShadow = '-2px 4px 4px #B18686';
    document.getElementById('lily').style.textShadow = '-2px 4px 4px #B18686';

    document.getElementById('email').style.boxShadow = '-2px 4px 4px #B18686';
    document.getElementById('github').style.boxShadow = '-2px 4px 4px #B18686';
    document.getElementById('linkedin').style.boxShadow = '-2px 4px 4px #B18686';
    document.getElementById('self-image').style.boxShadow = '-2px 4px 4px #C9C9C9';
    document.getElementById('proj1').style.boxShadow = '-2px 4px 4px #C9C9C9';
    document.getElementById('proj2').style.boxShadow = '-2px 4px 4px #C9C9C9';
    document.getElementById('proj3').style.boxShadow = '-2px 4px 4px #C9C9C9';
}

function changeTree() {
    document.getElementById('change-self-image').src = 'assets/images/tree-desaturated.jpg';
}

function changeSelf() {
    document.getElementById('change-self-image').src = 'assets/images/self.jpg';
}

window.onload = function() {
    document.getElementById('darklight').onclick = checkMode;
    document.getElementById('change-self-image').onmousemove = changeTree;
    document.getElementById('change-self-image').onmouseout = changeSelf;
}
