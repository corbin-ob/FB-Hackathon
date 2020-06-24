const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const FaceTracking = require('FaceTracking');

const root = Scene.root;
const VERTICAL_PLANE = 'VERTICAL_PLANE'

root.findFirst( 'planeTracker0', {recursive: true})
.then(function(planetracker){
    let tracker = planetracker.trackingMode;
    tracker = VERTICAL_PLANE;
    let confidence = planetracker.confidence;
    const mouthOpennessValue = FaceTracking.face(0).mouth.openness;
Diagnostics.watch('Checking plane tracking mode: ', tracker);
Diagnostics.watch('Checking plane confidence level: ', confidence);
Diagnostics.watch('Checking mouth openness: ', mouthOpennessValue)
});



