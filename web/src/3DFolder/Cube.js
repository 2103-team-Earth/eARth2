import {React, Component} from "react";
import * as THREE from "three";
const loader = new THREE.TextureLoader();

let changeColor;
let cube;
let scene;
let camera;
let renderer;
let material;

export class Cube extends Component {

    componentDidUpdate(prevProps) {
        if(this.props.data !== prevProps.data) {
            scene.remove(cube)
           
            changeColor = this.props.data.colorSelected
            let geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
            if (this.props.data.colorOrTexture === 'color') {
                material = new THREE.MeshStandardMaterial( { color: changeColor } );
            } else {
                material = new THREE.MeshBasicMaterial({
                map: loader.load(this.props.data.material),
            });
            }
            cube = new THREE.Mesh( geometry, material );
            scene.add( cube );
            
    
        }
      }
 
    componentDidMount() {
        changeColor = this.props.data.colorSelected
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 10, window.innerWidth/window.innerHeight, 0.1, 20 );
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( 1000, 500 );
        this.mount.appendChild( renderer.domElement );
      
        let geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
        if (this.props.data.colorOrTexture === 'color') {
            material = new THREE.MeshStandardMaterial( { color: changeColor } );
        } else {
            material = new THREE.MeshBasicMaterial({
            map: loader.load(this.props.data.material),
        });
        }
        cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );
        camera.position.z = 2;
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            cube.rotation.z += 0.01;
            renderer.render( scene, camera );
        };
        animate();
    }
    render() {
        return (
            <div><h1>Shape: Box</h1>
            <div 
             ref={ref => (this.mount = ref)} />
            </div>
            
        )
    }
}