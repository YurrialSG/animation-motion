import AudioMotionAnalyzer from './analyzer.js';

$(document).ready(function () {
    var audio = document.getElementById("audio-sound");
    var count = 1;
    $('.play').on({
        click: function () {
            audio.play();
            if(count === 1) {
                playAnimation();
                count--;
            }
        },
    });

    $('.stop').on({
        click: function () {
            audio.pause();
        },
    });
});

function playAnimation() {
    try {
        var audioMotion = new AudioMotionAnalyzer(
            document.getElementById('animation-audio'),
            {
                source: document.getElementById('audio-sound'),
                // set your preferred options here
            }
        );
        const options = {
            bgColor: '#FFFF', // background color (optional) - defaults to '#111'
            colorStops: [       // list your gradient colors in this array (at least 2 entries are required)
                '#12652D',                      // colors may be defined in any valid CSS format
                { pos: 1, color: '#12652D' }, // use an object to adjust the position (0 to 1) of a color
                'hsl( 120, 100%, 50% )'     // colors may be defined in any valid CSS format
            ]
        }
        audioMotion.registerGradient('my-grad', options);
        audioMotion.setOptions({
            fftSize: 16384, //Frequência
            gradient: 'my-grad', //Nome gradiente adicionado anteriormente
            maxFreq: 2000, //Max Frequência
            minFreq: 20, //Min Frequência
            mode: 5, //Desenho linhas de animação - 0 até 10
            radial: false, //Modo em circulo
            reflexAlpha: 1,
            reflexBright: 1,
            reflexRatio: 0, //centralizar animação
            showBgColor: false, //Exibir cor de fundo
            showScale: false, //Exibir escala a baixo
            overlay: true //exibir fundo transparente
        });
    }
    catch (err) {
        console.log(err)
    }
}