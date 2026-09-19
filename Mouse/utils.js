/**
 * Objeto de utilidades para trabajar con HTML5 Canvas.
 */
var utils = {};

/**
 * Captura las coordenadas reales del mouse en relación con un elemento Canvas.
 * 
 * @param {HTMLCanvasElement} element - El elemento canvas objetivo.
 * @return {Object} Objeto con las propiedades 'x' e 'y'.
 */
utils.captureMouse = function (element) {
  var mouse = { x: 0, y: 0 };

  element.addEventListener('mousemove', function (event) {
    var x, y;

    // Obtener la posición relativa del evento en la página
    if (event.pageX || event.pageY) {
      x = event.pageX;
      y = event.pageY;
    } else {
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    // Descontar la posición del canvas dentro del viewport
    var rect = element.getBoundingClientRect();
    x -= rect.left;
    y -= rect.top;

    mouse.x = x;
    mouse.y = y;
  }, false);

  return mouse;
};