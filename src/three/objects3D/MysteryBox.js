import * as THREE from 'three'

export class MysteryBox {
    constructor(gltf) {
        this.model = gltf.scene;
        this.mixer = new THREE.AnimationMixer(this.model);

        this.fallBox = gltf.animations[2].name;
        this.openBox = gltf.animations[0].name;

        this.actions = {}
        this.actions[this.openBox] = this.mixer.clipAction(gltf.animations[0]);
        this.actions[this.fallBox] = this.mixer.clipAction(gltf.animations[2]);

        this.actions[this.fallBox].loop = THREE.LoopOnce;
        this.actions[this.openBox].loop = THREE.LoopOnce;
    }

    fall(cb) {
        this.actions[this.fallBox].play()
        this.mixer.addEventListener('finished', (e) => {
            const { name } = e.action._clip
            if (name !== this.fallBox || typeof cb !== "function") return
            cb()
        })
    }

    open(cb) {
        this.actions[this.openBox].play()
        this.mixer.addEventListener('finished', (e) => {
            const { name } = e.action._clip
            if (name !== this.openBox || typeof cb !== "function") return
            cb()
        })
    }

    update(delta) {
        if(!delta) return
        this.mixer.update(delta)
    }
}