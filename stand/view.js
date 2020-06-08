'use strict';

import * as THREE from './jsm/three.module.js';
import { TrackballControls } from './jsm/controls/TrackballControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';

const App = function (elementToBindTo) {
  this.renderer = null;
  this.canvas = elementToBindTo;
  this.aspectRatio = 1.0;
  this.recalcAspectRatio();

  this.scene = null;
  this.cameraDefaults = {
    posCamera: new THREE.Vector3(-12.5, 15.0, 50.0),
    posCameraTarget: new THREE.Vector3(0.0, 0.0, 0.0),
    near: 0.1,
    far: 10000.0,
    fov: 45.0
  };
  this.camera = null;
  this.cameraTarget = this.cameraDefaults.posCameraTarget;

  this.controls = null;
  this.last = null;
};

App.prototype = {

  constructor: App,

  initGL: function () {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      autoClear: true
    });

    this.renderer.setClearColor(0xffffff);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(this.cameraDefaults.fov, this.aspectRatio, this.cameraDefaults.near, this.cameraDefaults.far);
    this.resetCamera();
    this.controls = new TrackballControls(this.camera, this.renderer.domElement);

    let ambientLight = new THREE.AmbientLight(0x404040);
    let directionalLight1 = new THREE.DirectionalLight(0xC0C0C0);
    let directionalLight2 = new THREE.DirectionalLight(0xC0C0C0);

    directionalLight1.position.set(-100.0, -50.0, 100.0);
    directionalLight2.position.set(100.0, 50.0, -100.0);

    this.scene.add(directionalLight1);
    this.scene.add(directionalLight2);
    this.scene.add(ambientLight);
  },

  setContent: function (file) {
    let scope = this;
    let callbackOnLoad = function (model) {
      scope.last = model;

      model.traverse(function (child) {
        if (child.isMesh) child.material.side = THREE.DoubleSide;
      });

      scope.scene.add(model);
      scope.controls.reset();
    };

    const loader = new FBXLoader();
    loader.load(`models/${file}.fbx`, callbackOnLoad);
  },

  resizeDisplayGL: function () {
    this.controls.handleResize();
    this.recalcAspectRatio();
    this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight, false);
    this.updateCamera();
  },

  recalcAspectRatio: function () {
    this.aspectRatio = (this.canvas.offsetHeight === 0.0) ? 1.0 : this.canvas.offsetWidth / this.canvas.offsetHeight;
  },

  resetCamera: function () {
    this.camera.position.copy(this.cameraDefaults.posCamera);
    this.cameraTarget.copy(this.cameraDefaults.posCameraTarget);
    this.updateCamera();
  },

  updateCamera: function () {
    this.camera.aspect = this.aspectRatio;
    this.camera.lookAt(this.cameraTarget);
    this.camera.updateProjectionMatrix();
  },

  render: function () {
    if (!this.renderer.autoClear) this.renderer.clear();
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
};

let app = new App(document.getElementById('app'));

let resizeWindow = function () {
  app.resizeDisplayGL();
};

let render = function () {
  requestAnimationFrame(render);
  app.render();
};

window.addEventListener('resize', resizeWindow, false);

app.initGL();
app.resizeDisplayGL();

let hashChange = function () {
  let hash = window.location.hash;

  if (app.last) {
    app.scene.remove(app.last);
  }

  if (hash && hash.length > 1) {
    let file = hash.substring(1);
    app.setContent(file);
  }
};

window.addEventListener('hashchange', hashChange, false);

render();