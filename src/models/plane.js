import * as THREE from 'three';

export function createPlane() {
    // Create a group to hold all plane parts
    const planeGroup = new THREE.Group();
    
    // Create materials
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x333333, // Dark gray for plane body
        shininess: 30
    });
    
    // Create fuselage (body)
    const fuselageGeometry = new THREE.CylinderGeometry(0.5, 0.3, 3, 8);
    const fuselage = new THREE.Mesh(fuselageGeometry, bodyMaterial);
    fuselage.rotation.x = Math.PI / 2; // Rotate to point along z-axis
    planeGroup.add(fuselage);
    
    // Create wings (rectangular, passing through the middle of the fuselage)
    const wingGeometry = new THREE.BoxGeometry(5, 0.1, 1);
    const wing = new THREE.Mesh(wingGeometry, bodyMaterial);
    wing.position.y = 0;
    planeGroup.add(wing);
    
    // Create horizontal stabilizer (back wings)
    const hStabilizerGeometry = new THREE.BoxGeometry(2, 0.1, 0.5);
    const hStabilizer = new THREE.Mesh(hStabilizerGeometry, bodyMaterial);
    hStabilizer.position.z = -1.5;
    hStabilizer.position.y = 0;
    planeGroup.add(hStabilizer);
    
    // Create vertical stabilizer (tail fin)
    const vStabilizerGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.5);
    const vStabilizer = new THREE.Mesh(vStabilizerGeometry, bodyMaterial);
    vStabilizer.position.z = -1.5;
    vStabilizer.position.y = 0.3;
    planeGroup.add(vStabilizer);
    
    // Create propeller mount
    const propMountGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.3, 8);
    const propMount = new THREE.Mesh(propMountGeometry, bodyMaterial);
    propMount.rotation.x = Math.PI / 2;
    propMount.position.z = 1.65;
    planeGroup.add(propMount);
    
    // Create propeller
    const propellerGroup = new THREE.Group();
    propellerGroup.name = 'propeller'; // Name for animation reference
    
    const propGeometry = new THREE.BoxGeometry(0.1, 1.2, 0.1);
    const propeller1 = new THREE.Mesh(propGeometry, bodyMaterial);
    const propeller2 = new THREE.Mesh(propGeometry, bodyMaterial);
    propeller2.rotation.z = Math.PI / 2;
    
    propellerGroup.add(propeller1);
    propellerGroup.add(propeller2);
    propellerGroup.position.z = 1.8;
    planeGroup.add(propellerGroup);
    
    // Orient the plane to face forward along the z-axis
    planeGroup.rotation.y = Math.PI; // Face the plane forward (towards -Z, into the screen)
    
    return planeGroup;
} 