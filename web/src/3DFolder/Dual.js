import {React, Component} from "react";
import * as THREE from "three";

const loader = new THREE.FontLoader();
const imageLoader = new THREE.TextureLoader();

let word;
let mesh;
let sphere;
let cube;
let changeColor;
let scene;
let Xscale;
let Yscale;
let geometry
let BoxGeometry
let shape;
let currShape;
let material;
let colorOrTexture;

export class Dual extends Component {

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data) {
            scene.remove(mesh)
            if(shape === 'sphere') {
                scene.remove(sphere)
            } else {
                scene.remove(cube)
            }
         
            shape = this.props.data.shape
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
         mesh.position.set(-1, -0.04, -0.01)

         if (shape === 'sphere') {
            geometry = new THREE.SphereGeometry( 0.7, 12, 8 );
            sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );
            sphere.position.set(1.3, 0.20, 0.01);
            currShape = sphere   
        } 
        else {
            BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
            cube = new THREE.Mesh( BoxGeometry, material );
            scene.add( cube );
            cube.position.set(1.3, 0.20, 0.01);
            currShape = cube
        }
        })
      }
    }

    componentDidMount() {
        word = this.props.data.text;
        changeColor = this.props.data.colorSelected
        colorOrTexture = this.props.data.colorOrTexture
        material = this.props.data.material
        shape = this.props.data.shape
        scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 150 );
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize( 1000, 500 ); 
        this.mount.appendChild( renderer.domElement );
      
     
       loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {

       let textGeometry = new THREE.TextGeometry( word, {
        font: font,
        size: 0.6,
        height: 0.1,
    } );

    textGeometry.center();
    if (colorOrTexture === 'color') {
        material = new THREE.MeshStandardMaterial( { color: changeColor } );
    } else {
        material = new THREE.MeshBasicMaterial({
        map: imageLoader.load(material),
    });
    }
    mesh = new THREE.Mesh( textGeometry, material );
    scene.add( mesh );
    mesh.position.set(-1, -0.04, -0.01)

    if (shape === 'sphere') {
    geometry = new THREE.SphereGeometry( 0.7, 12, 8 );
    sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );
    sphere.position.set(1.3, 0.20, 0.01);
    currShape = sphere

    } else {
    BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
    cube = new THREE.Mesh( BoxGeometry, material );
    scene.add( cube );
    cube.position.set(1.3, 0.20, 0.01);
    currShape = cube
    }
    
    
    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add( light );
    camera.position.z = 2;
        
        let animate = function () {
            requestAnimationFrame( animate );
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;
            mesh.rotation.z += 0.01;
            currShape.rotation.x += 0.01;
            currShape.rotation.y += 0.01;
            currShape.rotation.z += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    })
  }
    render() {
        return (
            <div><h1>Both Text & Shape </h1>
            <div 
             ref={ref => (this.mount = ref)} />
            </div>
            
        )
    }
}