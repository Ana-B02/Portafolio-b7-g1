

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Ana García')
  .pauseFor(300)
  .deleteAll()
  .typeString('Futura ingeniera biomédica')
  .pauseFor(1000)
  .start();