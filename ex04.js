function calculateTriangleArea(side1, side2, side3) {
    // Calculate the semi-perimeter
    const s = (side1 + side2 + side3) / 2;
  
    // Calculate the area using Heron's formula
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
  
    return area;
  }
  
  // Given triangle sides
  const side1 = 5;
  const side2 = 6;
  const side3 = 7;
  
  // Calculate and display the area
  const area = calculateTriangleArea(side1, side2, side3);
  console.log(`The area of the triangle with sides ${side1}, ${side2}, and ${side3} is: ${area}`);
  