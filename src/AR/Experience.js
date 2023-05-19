import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class ARExperience{
	constructor(){
        if(typeof document !== 'undefined' && window.innerHeight){

            this.container = document.createElement( 'div' );
           
            this.clock = new THREE.Clock();
        
            this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );

            this.scene = new THREE.Scene();
            
            this.scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );

            const light = new THREE.DirectionalLight( 0xffffff );
            light.position.set( 1, 1, 1 ).normalize();
            this.scene.add( light );
                
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
            this.renderer.setPixelRatio( window.devicePixelRatio );
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            this.renderer.outputEncoding = THREE.sRGBEncoding;
            
            this.container.appendChild( this.renderer.domElement );
            
            this.controls = new OrbitControls( this.camera, this.renderer.domElement );
            this.controls.target.set(0, 3.5, 0);
            this.controls.update();
            
            this.meshes = [];

			this.clock = new THREE.Clock();
            this.controller;

            this.frame = 0
            this.spheres = [];
            var cameraVector = new THREE.Vector3();
            const clock = new THREE.Clock(); 
            
            //const axesHelper = new THREE.AxesHelper( 3 );
            //this.scene.add( axesHelper );


            // ADD TEXT
            this.puntaje = 1
            this.text3D = null
            this.createText()
            this.end = false

            window.addEventListener('resize', this.resize.bind(this) );
        }
	}	
    
    /*resize(){
        const {
            clientWidth = width,
            clientHeight = height
        } = document.querySelector(".container3D")


        this.renderer.setSize(width, height)
        this.camera.updateProjectionMatrix()
        this.camera.aspect = width / height
    }*/

    resize() {

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize( window.innerWidth, window.innerHeight );

    }

    setupXR(){
        this.renderer.xr.enabled = true;
        const self = this;
        const gltfLoader = new GLTFLoader();

        function onSelect(){

            gltfLoader.load("/dart.glb", (gltf) => {
                var mesh = gltf.scene
                mesh.position.set(0,0,-0.3).applyMatrix4(self.controller.matrixWorld);
                mesh.quaternion.setFromRotationMatrix(self.controller.matrixWorld);

                mesh.userData.velocity = new THREE.Vector3();
                mesh.position.copy( self.controller.position );
                mesh.userData.velocity.x = (mesh.position.x - self.camera.position.x) * 0.07;
                mesh.userData.velocity.y = (mesh.position.y - self.camera.position.y) * 0.07;
                mesh.userData.velocity.z = -0.07;
                mesh.userData.velocity.applyQuaternion( self.controller.quaternion );

                mesh.scale.z = mesh.scale.z / 50;
                mesh.scale.x = mesh.scale.x / 50;
                mesh.scale.y = mesh.scale.y / 50;

                self.scene.add(mesh);
                self.meshes.push(mesh);
            })
        }

        this.createText()

        this.controller = this.renderer.xr.getController(0);
        this.controller.addEventListener('select', onSelect);
        this.scene.add(this.controller);
        this.container.appendChild(
            ARButton.createButton(this.renderer)
        )
        document.getElementById("ARButton").style.color = "blue";
        document.getElementById("ARButton").style.position = "absolute";
        document.getElementById("ARButton").style.height = "fit-content"; 
        document.getElementById("ARButton").style.color = "white"
        document.getElementById("ARButton").style.backgroundColor = "red"; 
        document.getElementById("ARButton").style.border = "none"
        document.getElementById("ARButton").innerHTML  = "JUGAR"
        document.getElementById("ARButton").style.top = "78%";
        document.getElementById("ARButton").style.left = "50%"; 
        document.getElementById("ARButton").style.transform = "Translate(-50%, -50% - 50px)"
        document.getElementById("ARButton").style.width = "-webkit-fill-available"
    }

    loadModel(){
        const gltfLoader = new GLTFLoader();
        gltfLoader.load("/nave.glb", (gltf) => {
            this.scene.add(gltf.scene)
        })
    }

    createText(){
        const self = this;

        var loader = new FontLoader();
        loader.load(
            '/Inter_Bold.json',
            function(res) {
                var textGeo = new TextGeometry(self.puntaje.toString(), {
                    font: res,
                    size: 40 / 400,
                    height: 0.005,
                    curveSegments: 10,
                    bevelEnabled: true,
                    bevelThickness: 1,
                    bevelSize: 1.8 / 400,
                    bevelOffset: 0,
                    bevelSegments: 5,
                    bevelEnabled: true
                  });
                  textGeo.computeBoundingBox();
                  textGeo.computeVertexNormals();

                  self.scene.remove(self.text3D)

                  var cubeMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
                  self.text3D = new THREE.Mesh(textGeo, cubeMat);
                  self.text3D.castShadow = true;
                  self.text3D.scale.z = self.text3D.scale.z / 300
                  self.text3D.scale.x = self.text3D.scale.x / 2
                  self.text3D.scale.y = self.text3D.scale.y / 2

                  self.scene.add(self.text3D)
            }
        );
    }

    refreshText() {
        this.createText();
    }

    initScene(){
        document.querySelector(".container3D").appendChild(this.container)
        this.renderer.setAnimationLoop(this.render.bind(this))
        console.log("Scene initialized")
    }
    
	render( ) {   

        this.move()
        this.moveBalls()
        this.checkCollisions()
        this.getPuntaje()
        this.loadFinishModel()

        this.renderer.render( this.scene, this.camera );
    }

    loadFinishModel(){
        if(this.puntaje >= 10 && this.end == false){
            const gltfLoader = new GLTFLoader();
            gltfLoader.load("/end.glb", (gltf) => {
                const finalMessage = gltf.scene
                finalMessage.position.z = -1.2
                this.scene.add(finalMessage)
            })
            this.end = true
            window.endedARExperience = true
            let a = localStorage.getItem("token")
            console.log(a)
            fetch('https://josecarl0s1.pythonanywhere.com/usa', {
                                method: 'POST',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    "token":a,
                                    "fecha" : "2023-05-18"
                                })
                            })
        }
    }

    getPuntaje(){
        var aux = 1;
        if(this.text3D){
            this.text3D.position.set(0.2,-0.5,-1).applyMatrix4(this.camera.matrixWorld);
        }
        for (let balloon = 0; balloon < this.spheres.length; balloon++) {
            let b = this.spheres[balloon]
            if(b.newValueCollision == true){
                aux = aux + 1;
            }
        }
        if (aux != this.puntaje){
            this.puntaje = aux
            this.refreshText()
        }
    }

    checkCollisions(){
        for (let dardo = 0; dardo < this.meshes.length; dardo++) {
            let d = this.meshes[dardo]

            for (let balloon = 0; balloon < this.spheres.length; balloon++) {
                let b = this.spheres[balloon]

                let bMinX = b.position.x - 0.1
                let bMaxX = b.position.x + 0.1

                let bMinY = b.position.y - 0.1
                let bMaxY = b.position.y + 0.1

                let bMinZ = b.position.z - 0.1
                let bMaxZ = b.position.z + 0.1

                if(d.position.x > bMinX && d.position.x < bMaxX){
                    if(d.position.y > bMinY && d.position.y < bMaxY){
                        if(d.position.z > bMinZ && d.position.z < bMaxZ){
                            this.spheres[balloon].scale.x = 0
                            this.spheres[balloon].scale.y = 0
                            this.spheres[balloon].scale.z = 0
                            this.spheres[balloon].newValueCollision = true
                        }
                    }
                }
            }
        }
    }

    move() {

        if(this.frame % 100 == 0){
            const gltfLoader = new GLTFLoader();
            
            gltfLoader.load("/balloon.glb", (gltf) => {
                var balloon = gltf.scene
                this.spheres.push(balloon);
                this.scene.add( this.spheres[this.spheres.length - 1] );
                //this.spheres[this.spheres.length - 1].position.x = Math.random() * (2 + 2) - 2;
                this.spheres[this.spheres.length - 1].position.y = -0.5;
                //this.spheres[this.spheres.length - 1].position.z = Math.random() * (0 + 2) - 2;
                this.spheres[this.spheres.length - 1].position.z = -1;
                this.spheres[this.spheres.length - 1].newValueCollision = false
            })
        }

        this.frame += 1;
        for (let step = 0; step < this.spheres.length; step++) {
            this.spheres[step].translateY( 0.006 );
          }
      }

    loadModel(){
        const gltfLoader = new GLTFLoader();
        gltfLoader.load("./models/amongus.glb", (gltf) => {
            this.scene.add(gltf.scene)
        })
    }

    moveBalls() {

        for ( let i = 0; i < this.meshes.length; i ++ ) {

            const object = this.meshes[ i ];

            object.position.x += object.userData.velocity.x;
            object.position.y += object.userData.velocity.y;
            object.position.z += object.userData.velocity.z;

        }
    }

}


export default ARExperience;