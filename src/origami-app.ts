import * as THREE from 'three';
import World from './world';
import OrigamiMesh from './origami-mesh';
import Origami from './origami';
import * as Panel from './panel';
import { Playbook } from './playbook';
import * as playbooks from './playbooks/index';

export class OrigamiApp {
  private world;
  private origami;

  constructor(){
    console.log('OrigamiApp')
    Panel.create();

    this.world = World.getInstance();

    this.build();
    this.test();

    Panel.initOrigami(this.origami);

  }

  test(){
    let playbook = new Playbook(this.origami);
    playbook.run(playbooks.crane);
    playbook.play(1)

    //plane.setFromNormalAndCoplanarPoint(new THREE.Vector3(200.0,0.0,0.0), new THREE.Vector3(200.0,0.0,0.0));
    //this.origami.reflect(new THREE.Plane(new THREE.Vector3(1,0.0,0.0), 0));

    //let plane = new THREE.Plane(new THREE.Vector3(0.9097532379535408, 0.4151494261504506, 0), -251.30286847123514)
    let plane = new THREE.Plane(new THREE.Vector3(0.7269551013192173, 0.6864349268960613, -0.01853029420072911), -46.884428319140994)

    this.origami.creasing.preview(plane);
    this.origami.ruler.show(plane);
    //plane = new THREE.Plane(new THREE.Vector3(0.8944271909999161, -0.44721359549995804, 0), 11.180339736142775)
    //this.origami.reflect(plane, 2);
    //this.origami.fold(plane, 90);

    //let ruler = this.origami.getRuler()
    //ruler.show(plane);
    //this.origami.foldIndex(plane, -90, 3);
  }

  build(){
    let origami = new Origami(this.world);
    this.origami = origami;
    this.world.add(origami);

    let ruler = origami.getRuler();
    window.addEventListener('keyup', (event) => {
      if(event.key == 't'){
        ruler.enable()
      }
    });
    //3d view
    //creases view
    //ruler
    //debug panel
    //automation
  }
}
