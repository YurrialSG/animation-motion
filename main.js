import AudioMotionAnalyzer from './analyzer.js';
//teste
$(document).ready(function () {
    $('.play').on({
        click: function () {
            var audio = document.getElementById("audio-sound");
            audio.play();
            console.log("cliquei");
            playAnimation();
        },
      });
});

function playAnimation () {
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
            fftSize: 8192, //Frequência
            gradient: 'my-grad', //Nome gradiente adicionado anteriormente
            maxFreq: 22000, //Max Frequência
            minFreq: 250, //Min Frequência
            mode: 5, //Desenho linhas de animação - 0 até 10
            radial: false, //Modo em circulo
            reflexAlpha: 1,
            reflexBright: 1,
            showBgColor: true, //Exibir cor de fundo
            showScale: false, //Exibir escala a baixo
        });
    }
    catch (err) {
        console.log(err)
    }
}