$(function () {

  var elem = document.getElementById('animation-container'),
      btn = document.getElementById('animation-button')

  // Make the animation smaller for smaller screens, eliminating overflow
  var containerWidth = $(elem).width()
  if ( containerWidth > 285 ) {
    var width = 285,
        height = 200
  } else {
    var width = containerWidth,
        height = width*0.7
  }

  var two = new Two({ width: width, height: height }).appendTo(elem)

  var h = 0.7 * two.height, // Height of triangle
      triangleRadius = 2 * h / 3, // Distance from centroid to each vertex
      nSides = 3;

  // Generate the triangle
  var triangle = two.makePolygon(0, 0, triangleRadius, nSides)
  triangle.stroke = triangle.fill = '#4C4CFF'

  // Circle initially at the top vertex of the triangle
  var topCircle = two.makeCircle(0, -triangleRadius, 5)
  topCircle.stroke = topCircle.fill = '#4C4CFF'


  // Circle initially at the bottom left vertex
  var bottomLeftCentre = {
    x: - h / Math.sqrt(3),
    y: h / 3
  }
  var bottomLeftCircle = two.makeCircle(bottomLeftCentre.x, bottomLeftCentre.y, 5)
  bottomLeftCircle.stroke = bottomLeftCircle.fill = 'orangered';



  // Circle initially at the bottom right vertex
  var bottomLeftCentre = {
    x: h / Math.sqrt(3),
    y: h / 3
  }
  var bottomRightCircle = two.makeCircle(bottomLeftCentre.x, bottomLeftCentre.y, 5)
  bottomRightCircle.stroke = bottomRightCircle.fill = '#00B200';


  // Group up the elements to make rotation straightforward
  var group = two.makeGroup(triangle, topCircle, bottomLeftCircle, bottomRightCircle)
  group.translation.set(two.width / 2, two.height / 1.6);

  // Draw the initial setup
  two.update();


  // When the button is clicked, rotate the setup by 120 degrees, resetting every 3 rotations
  btn.addEventListener('click', function () {
    group.rotation += 2 * Math.PI / 3;
    if (group.rotation == 2 * Math.PI) {
      group.rotation = 0;
    }
    two.update();
  })
})
