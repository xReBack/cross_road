var platformTexture = new THREE.MeshLambertMaterial({ flatShading: true, map: THREE.ImageUtils.loadTexture('img/snow.jpg')});

function Platform(startingLocationZ = 0)
{
    this.object = new THREE.Group();
    var sizeX = 20000,
        sizeZ = 600;
    var Plane = new THREE.Mesh(
        new THREE.PlaneGeometry(sizeX, sizeZ),
        platformTexture
    );
    Plane.rotateX(-Math.PI / 2 );
    Plane.position.set(0,0,0);
    Plane.castShadow = false;
    Plane.receiveShadow = true;
    this.object.add(Plane);
    this.object.position.set(0,0,startingLocationZ);
    return this.object;

}

function CreatePlatform(startingPosition = 0){
    var platform = new Platform(startingPosition);
    scene.add(platform);
    return platform;
}
function removePlatform(platform)
{
    scene.remove(platform);
}
var platforms = [];

function createPlatforms(startingPositionZ = 0){
    /**
     * @Params startingPositionZ: the position of the starting platform
     * We subtract 600 as it's the size of the starting platform
     */
        for(let i = roads_count; i<roadsMap.length; i++){
            if(!roadsMap[i]){
                var platform = CreatePlatform(startingPositionZ - 600);
                platforms.push(platform);
            }
            startingPositionZ-=600;
        }

        CreateTrees();
        CreateCoins();
}
