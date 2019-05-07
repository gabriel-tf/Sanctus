import { Component, Input, ElementRef, ViewEncapsulation, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';
// import { OrbitControls } from 'three-orbitcontrols-ts';
import * as webvrui from 'webvr-ui';
import VRControls from 'three-vrcontrols-module';
import VREffect from 'three-vreffect-module';

@Component({
  selector: 'scenegraph',
  template: '<div style="width:100%; height:100%"></div>',
  styleUrls: ['./scenegraph.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScenegraphComponent {

  @Input()
  @ViewChild('cubeCanvas') cubeCanvas;

  geometry: string;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene = new THREE.Scene();
  camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  mesh: THREE.Mesh;
  animating: boolean;
  //controls: OrbitControls;

  width: number = window.innerWidth;
  height: number = window.innerHeight;
  controls: VRControls;
  effect: VREffect;
  cube: THREE.Mesh;
  animationDisplay;
  enterVR;

  constructor(private sceneGraphElement: ElementRef, private ngRenderer: Renderer2) { }

  ngAfterViewInit() {

    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.controls = new VRControls(this.camera);
    this.effect = new VREffect(this.renderer);

    this.renderer.vr.enabled = true;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.controls.standing = true;
    this.camera.position.y = this.controls.userHeight;

    this.effect.setSize(this.width, this.height);

    window.addEventListener('resize', () => {
      this.onResize();
    });

    window.addEventListener('vrdisplaypresentchange', () => {
      this.onResize();
    });
  }

  startAnimation(videoName) {
    console.log(videoName);

    var video = document.createElement('video');
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    video.loop = true;
    video.muted = true;
    video.src = '/assets/videos/' + videoName + '.mp4';
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

    let vrButtonOptions = {
      color: 'white',
      background: false,
      corners: 'square'
    };

    this.renderer.setSize(this.width, this.height);
    this.sceneGraphElement.nativeElement.childNodes[0].appendChild(this.renderer.domElement);
    this.animating = true;

    this.enterVR = new webvrui.EnterVRButton(this.renderer.domElement, vrButtonOptions);
    this.ngRenderer.appendChild(this.sceneGraphElement.nativeElement, this.enterVR.domElement);

    this.enterVR.getVRDisplay().then((display) => {
      this.animationDisplay = display;
      display.requestAnimationFrame(() => {
        this.render();
      });
    })
      .catch(() => {
        this.animationDisplay = window;
        window.requestAnimationFrame(() => {
          this.render();
        });
      });

    this.animationDisplay.requestAnimationFrame(() => {
      this.render();
    });
  }

  stopAnimation() {
    this.animating = false;
  }

  render() {
    // this.controls.update();

    if (this.enterVR.isPresenting()) {
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.effect.render(this.scene, this.camera);
    } else {
      this.renderer.render(this.scene, this.camera);
    }
    this.animationDisplay.requestAnimationFrame(() => {
      this.render()
    });
    //if (this.animating) { requestAnimationFrame(() => { this.render() }); };
  }

  onResize(): void {
    this.effect.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

}
