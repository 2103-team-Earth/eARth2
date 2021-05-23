import {React, Component} from "react";
import * as THREE from "three";
const loader = new THREE.TextureLoader();

let sphereChangeColor;
let sphere;
let scene;
let camera;
let renderer;
let material;


export class Sphere extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data) {
            scene.remove(sphere)
           
            sphereChangeColor = this.props.data.colorSelected
            let geometry = new THREE.SphereGeometry( 0.7, 12, 8 );
            
            if (this.props.data.colorOrTexture === 'color') {
                material = new THREE.MeshStandardMaterial( { color: sphereChangeColor } );
            } else {
                material = new THREE.MeshBasicMaterial({
                map: loader.load(this.props.data.material),
            });
            }
            sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );
        }
      }
    

    componentDidMount() {
        sphereChangeColor = this.props.data.colorSelected
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 20 );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( 1000, 500 );
        this.mount.appendChild( renderer.domElement );
      
        let geometry = new THREE.SphereGeometry( 0.7, 12, 8 );
        if (this.props.data.colorOrTexture === 'color') {
            material = new THREE.MeshStandardMaterial( { color: sphereChangeColor } );
        } else {
            material = new THREE.MeshBasicMaterial({
            map: loader.load(this.props.data.material),
        });
        }
        sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        camera.position.z = 2;
        let animate = function () {
            requestAnimationFrame( animate );
            sphere.rotation.x += 0.01;
            sphere.rotation.y += 0.01;
            sphere.rotation.z += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    }
    render() {
        return (
            <div><h1>Shape: Sphere</h1>
            <div 
             ref={ref => (this.mount = ref)} />
            </div>
            
        )
    }
}