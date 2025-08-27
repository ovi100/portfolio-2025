"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function BangladeshMap() {
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

    // Bangladesh SVG Path data (simplified sample)
    const bangladeshPath =
      "m 241.11233,469.42628 -1.67,2.4 -5.61,7.07 -0.62,-3.3 -0.75,-2.85 0.08,-0.67 -0.69,-2.63 0.94,-3.84 4.02,-4.3 0.36,-0.39 1.22,-2.49 2.42,-2.29 2.37,-0.45 0.31,6.18 -1.09,2.4 -0.19,3.99 -1.1,1.17"; // Full path data here

    // Material for the map (White color)
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 2,
    });

    // Convert the SVG path into Three.js path
    const path = new THREE.Path();
    const pathPoints = [];
    const pathData = new THREE.Path(bangladeshPath);
    pathData.getPoints(100); // Get points of the SVG path (smooth the path if needed)

    // Get path points and ensure the path is closed
    const points = pathData.getPoints(100); // Generate points from the SVG path
    points.push(points[0]); // Ensure path is closed by adding the first point at the end

    // Normalize the coordinates to fit in the 3D space
    const normalizedCoordinates = points.map(([lon, lat]) => {
      // Normalize the longitude and latitude to fit into a 3D space
      const x = (lon - 88) / 4; // Adjust longitude range to fit in 3D space
      const y = (lat - 20) / 4; // Adjust latitude range to fit in 3D space
      return new THREE.Vector3(x, y, 0); // Z = 0 for flat 2D map
    });

    // Create geometry from normalized path points
    const geometry = new THREE.BufferGeometry().setFromPoints(
      normalizedCoordinates
    );

    // Create the line representing the Bangladesh map
    const line = new THREE.LineLoop(geometry, material); // LineLoop ensures a closed path
    scene.add(line);

    // Dhaka location (Longitude: 90.4125, Latitude: 23.8103)
    const dhakaMarker = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff0000 }) // Red marker for Dhaka
    );

    const dhakaPosition = new THREE.Vector3(
      (90.4125 - 88) / 4, // Normalize Dhaka longitude
      (23.8103 - 20) / 4, // Normalize Dhaka latitude
      0
    );
    dhakaMarker.position.set(dhakaPosition.x, dhakaPosition.y, dhakaPosition.z);
    scene.add(dhakaMarker);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(ambientLight, directionalLight);

    // Set camera position to view the entire map
    camera.position.z = 5;

    // Animate the map drawing (progressive line drawing)
    let progress = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Animate the path drawing (progressive reveal of the line)
      if (progress < normalizedCoordinates.length) {
        progress += 0.01; // Adjust speed of drawing
        geometry.setFromPoints(
          normalizedCoordinates.slice(0, Math.floor(progress))
        );
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
