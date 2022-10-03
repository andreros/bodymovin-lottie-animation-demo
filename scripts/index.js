window.onload = function() {
    var baseParams = {
        renderer: 'svg',
        loop: true,
        autoplay: true
    };

    // * Bodymovin animation load
    bodymovin.loadAnimation(Object.assign({}, baseParams, {
        container: document.getElementById('bodymovin-animation'),
        path: 'animations/b.json'
    }));
    bodymovin.loadAnimation(Object.assign({}, baseParams, {
        container: document.getElementById('bodymovin-animation-2'),
        path: 'animations/b.json'
    }));

    // * Lottie animation load
    lottie.loadAnimation(Object.assign({}, baseParams, {
        container: document.getElementById('lottie-animation'),
        path: 'animations/success.json'
    }));
    lottie.loadAnimation(Object.assign({}, baseParams, {
        container: document.getElementById('lottie-animation-2'),
        path: 'animations/success.json'
    }));
};
