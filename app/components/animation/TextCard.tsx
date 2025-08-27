"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function MovingBallCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Ball geometry and material
    const ballGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);
    scene.add(ball);

    // Set initial ball position
    ball.position.set(0, 0, 0);

    // Labels for each technology
    const labelPositions = [
      { x: -1.5, y: 1.5, text: "HTML" },
      { x: 1.5, y: 1.5, text: "CSS" },
      { x: -1.5, y: -1.5, text: "JavaScript" },
      { x: 1.5, y: -1.5, text: "React" },
      { x: -2, y: 0, text: "Next.js" },
      { x: 2, y: 0, text: "React Native" },
    ];

    // Labels' DOM elements for React rendering
    const labels = labelPositions.map((label, index) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.color = "white";
      div.style.fontSize = "16px";
      div.style.fontWeight = "bold";
      div.innerHTML = label.text;
      div.style.transform = `translate(-50%, -50%)`;
      div.style.left = `${(label.x + 2) * 30}%`;
      div.style.top = `${(label.y + 2) * 30}%`;
      container.appendChild(div);
      return div;
    });

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(ambientLight, directionalLight);

    // Set camera position
    camera.position.z = 5;

    // Ball movement logic (no state updates for position)
    const ballSpeed = new THREE.Vector3(0.05, 0.05, 0); // Speed of the ball

    // Animation function
    const animateBall = () => {
      ball.position.x += ballSpeed.x;
      ball.position.y += ballSpeed.y;

      // Bounce the ball off the walls
      if (ball.position.x > 2 || ball.position.x < -2) {
        ballSpeed.x = -ballSpeed.x;
      }
      if (ball.position.y > 2 || ball.position.y < -2) {
        ballSpeed.y = -ballSpeed.y;
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      animateBall(); // Update ball position
      renderer.render(scene, camera);
    };

    animate(); // Start animation loop
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        backgroundColor: "black",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* The ball and labels will be rendered inside this container */}
    </div>
  );
}
