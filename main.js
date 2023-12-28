// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".container").appendChild(renderer.domElement);

// Scene setup
const scene = new THREE.Scene();

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Add cube geometry
const cubeGeom = new THREE.BoxGeometry(3, 3, 3);
const cubeMat = new THREE.MeshNormalMaterial();
const cubeMesh = new THREE.Mesh(cubeGeom, cubeMat);
scene.add(cubeMesh);

// Draw loop
function update() {
  cubeMesh.rotation.x += 0.01;
  cubeMesh.rotation.y += 0.01;
  cubeMesh.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

update();
