'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      1,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(300, 300)

    mountRef.current.appendChild(renderer.domElement)

    const geometry = new THREE.SphereGeometry(2, 32, 32)
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x00d4ff
    })

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      sphere.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} />
}