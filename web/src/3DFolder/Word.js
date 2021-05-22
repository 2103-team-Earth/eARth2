import {React, Component } from "react";
import * as THREE from "three";

const loader = new THREE.FontLoader();
const imageLoader = new THREE.TextureLoader();

let word;
let changeColor;
let mesh;
let scene;
let camera;
let renderer;
let Xscale;
let Yscale;
let material;
let colorOrTexture


export class Word extends Component {

componentDidUpdate(prevProps){
    if(this.props.data !== prevProps.data) {
        scene.remove(mesh)
        word = this.props.data.text
        changeColor = this.props.data.colorSelected
        Xscale = this.props.data.textScaleX
        Yscale = this.props.data.textScaleY
        colorOrTexture = this.props.data.colorOrTexture
        material = this.props.data.material
   

        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

       var geometry = new THREE.TextGeometry( word, {
        font: font,
        size: Xscale,
        height: Yscale
    } );
    geometry.center();
  
    if (colorOrTexture === 'color') {
        material = new THREE.MeshStandardMaterial( { color: changeColor } );
    } else {
        material = new THREE.MeshBasicMaterial({
        map: imageLoader.load(material),
    });
    }

     mesh = new THREE.Mesh( geometry, material );
     scene.add( mesh );

    })
  }
}
 

    componentDidMount() {
        
        word = this.props.data.text;
        changeColor = this.props.data.colorSelected
        colorOrTexture = this.props.data.colorOrTexture
        material = this.props.data.material
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 150 );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( 1000, 500 ); 
        this.mount.appendChild( renderer.domElement );
      
     
       loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

       var geometry = new THREE.TextGeometry( word, {
        font: font,
        size: 0.6,
        height: 0.1,
    } );
    geometry.center();
  
    if (colorOrTexture === 'color') {
        material = new THREE.MeshStandardMaterial( { color: changeColor } );
    } else {
        material = new THREE.MeshBasicMaterial({
        map: imageLoader.load(material),
    });
    }

    mesh = new THREE.Mesh( geometry, material );


    scene.add( mesh );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        camera.position.z = 2;
        var animate = function () {
            requestAnimationFrame( animate );
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            mesh.rotation.z += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    })
  }

  
    render() {
        return (
            <div><h1>Text</h1>
            <div 
             ref={ref => (this.mount = ref)} />
            </div>
            
        )
    }
}