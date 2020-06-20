const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');

const root = Scene.root;
const VERTICAL_PLANE = 'VERTICLANE'

root.findFirst( 'planeTracker0', {recursive: true})
.then(function(planetracker){
    planetracker.trackingMode = VERTICAL_PLANE;
    let confidence = planetracker.confidence;
    const mouthOpennessValue = FaceTracking.face(0).mouth.openness;
Diagnostics.watch('Checking plane tracking mode: ', planetracker.trackingMode);
Diagnostics.watch('Checking plane confidence level: ', confidence);
Diagnostics.watch('Checking mouth openness: ', mouthOpennessValue)
});



