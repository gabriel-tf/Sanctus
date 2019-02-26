import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';

@Component({
  selector: 'scenegraph',
  template: '<div style="width:100%; height:100%"></div>'
})
export class ScenegraphComponent {

  @Input()
  geometry: string;

  renderer: THREE.Renderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  controls: OrbitControls;
  mesh: THREE.Mesh;
  animating: boolean;
  // effect: THREE.;
  vr: boolean;

  constructor(private sceneGraphElement: ElementRef) { }

  ngAfterViewInit() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 300;

    this.controls = new OrbitControls(this.camera);

    var video = document.createElement('video');
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    video.loop = true;
    video.muted = true;
    video.src = '/assets/videos/video.mp4';
    video.setAttribute('webkit-playsinline', 'webkit-playsinline');
    video.play();

    let geometry;
    switch (this.geometry) {
      default:
      case 'video':
        geometry = new THREE.SphereBufferGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);
    }

    var texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;

    var material = new THREE.MeshBasicMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI / 2;
    this.scene.add(mesh);

    this.renderer = new THREE.WebGLRenderer();
    // this.effect = new StereoEffect(this.renderer);
    this.sceneGraphElement.nativeElement.childNodes[0].appendChild(this.renderer.domElement);
    
  }

  startAnimation() {
    let width = this.sceneGraphElement.nativeElement.childNodes[0].clientWidth;
    let height = this.sceneGraphElement.nativeElement.childNodes[0].clientHeight;
    this.renderer.setSize(width, height);
    this.animating = true;
    this.render();
  }

  stopAnimation() {
    this.animating = false;
  }

  toggleVR() {
    if (this.vr) {
      this.vr = false
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    } else {
      this.vr = true
    }
  }

  render() {
    this.controls.update();

    if (this.vr) {
      // this.effect.render(this.scene, this.camera)
    } else {
      this.renderer.render(this.scene, this.camera);
    }
    if (this.animating) { requestAnimationFrame(() => { this.render() }); };
  }

}
