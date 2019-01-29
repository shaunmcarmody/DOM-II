// -------------- App Variables --------------
const app = {
    buttons: document.querySelectorAll('.btn '),
    currentKey: null,
    destination: document.querySelectorAll('.destination'),
    footer: document.getElementsByClassName('footer')[0],
    fontArray: ['Abril Fatface', 'Baloo Thambi', 'Comfortaa', 'Lobster', 'Special Elite', 'Indie Flower', 'Sarabun'],
    header: document.getElementsByClassName('main-navigation')[0],
    imageContent: document.querySelectorAll('.img-content img'),
    landing: document.querySelector('.intro img'),
    links: document.querySelectorAll('.nav-link'),
    logo: document.getElementsByClassName('logo-heading')[0],
    text: document.querySelectorAll('p'),
    textFontSize: 1.6,
    windowEvent: null,
}

// -------------- Window Listeners --------------
window.addEventListener('load', (e) => {
    app.header.classList.add('bounce');
    setTimeout(() => {
        app.header.classList.remove('bounce');
    }, 1000);
});

app.alternateFonts = (e) => {
    if (e.type === app.windowEvent) return;
    let randomFont = app.fontArray[Math.floor(Math.random() * app.fontArray.length)];
    app.text.forEach(el => el.style.fontFamily = `'${randomFont}', cursive`);
    app.windowEvent = e.type;
}

window.addEventListener('scroll', app.alternateFonts);
window.addEventListener('resize', app.alternateFonts);

app.toggleFontSize = (e) => {
    if (e.type === app.currentKey) return;
    if (e.type === 'keydown') { app.textFontSize = 2.5 }
    if (e.type === 'keyup') { app.textFontSize = 1.6 }
    app.text.forEach(el => el.style.fontSize = `${app.textFontSize}rem`);
    app.currentKey = e.type;
}

window.addEventListener('keydown', app.toggleFontSize);
window.addEventListener('keyup', app.toggleFontSize);

// -------------- Footer Listener -----------------
app.footer.addEventListener('click', e => app.footer.style.backgroundColor = 'blue');

// ------------ Landing Image Listener ------------
app.landing.addEventListener('mouseover', (e) => {
    e.target.classList.add('reverse');
    setTimeout(() => {
        e.target.classList.remove('reverse');
    }, 1000);
});

// --------------- Logo Listeners ----------------
app.logo.addEventListener('dblclick', (e) => {
    e.target.classList.add('reverse');
    setTimeout(() => {
        e.target.classList.remove('reverse');
    }, 1000);
})

// ---------- Image Container Listeners ----------
app.imageContent.forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
        el.style.opacity = 0.5;
    });

    el.addEventListener('mouseleave', (e) => {
        el.style.opacity = 1;
    });
});


// ------- Destination & Buttons Listeners -------
app.buttons.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('This should work', el);
    });
})

app.destination.forEach((el) => {
    el.addEventListener('click', (e) => {
        console.log('This should work on all except nested button', el); // stopPropagation on app.buttons element.
    });
});

// -------- Navigation Items Listeners ----------
app.links.forEach((el) => {
    el.addEventListener('click', e => e.preventDefault());
});




