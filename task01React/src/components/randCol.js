const color = [
  "rgb(255, 165, 0)",
  "rgb(106, 90, 205)",
  "rgb(60, 179, 113)",
  "rgb(238, 130, 238)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 0)",
  "rgb(255, 99, 0)",
  "rgb(255, 228, 0)",
  "rgb(139, 138, 0)",
  "rgb(0, 138, 0)",
  "rgb(0, 138, 206)",
  "rgb(0, 239, 206)",
];

export default function randColor() {
  return color[Math.floor(Math.random() * color.length)];
}
