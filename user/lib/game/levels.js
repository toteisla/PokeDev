ig.module('game.levels')

.requires(

'game.levels.birchdownstairs',

'game.levels.birchupstairs',

'game.levels.homedownstairs',

'game.levels.homeupstairs',

'game.levels.lab',

'game.levels.route101',

'game.levels.rs-abandoned-ship-lower-floor-room',

'game.levels.rs-abandoned-ship-lower-floor-rooms-north',

'game.levels.rs-abandoned-ship-lower-floor-rooms-south',

'game.levels.rs-abandoned-ship-lower-floor',

'game.levels.rs-abandoned-ship-main-floor-room',

'game.levels.rs-abandoned-ship-main-floor-rooms',

'game.levels.rs-abandoned-ship-main-floor',

'game.levels.rs-abandoned-ship-outside',

'game.levels.rs-abandoned-ship-secret-floor-rooms',

'game.levels.rs-abandoned-ship-secret-floor',

'game.levels.rs-abandoned-ship-underwater-hall',

'game.levels.rs-abandoned-ship-underwater-room',

'game.levels.rs-abandoned-ship-upper-room',

'game.levels.rs-ancient-tomb',

'game.levels.rs-battle-tower-arena',

'game.levels.rs-battle-tower-elevator',

'game.levels.rs-battle-tower-entrance',

'game.levels.rs-battle-tower-hall',

'game.levels.rs-battle-tower',

'game.levels.rs-cave-of-origin-1st-basement-floor',

'game.levels.rs-cave-of-origin-2nd-basement-floor',

'game.levels.rs-cave-of-origin-3rd-basement-floor',

'game.levels.rs-cave-of-origin-4th-basement-floor',

'game.levels.rs-cave-of-origin-entrance',

'game.levels.rs-cave-of-origin-ground-floor',

'game.levels.rs-desert-ruins',

'game.levels.rs-dewford-town-center-1st-floor',

'game.levels.rs-dewford-town-center-2nd-floor',

'game.levels.rs-dewford-town-gym',

'game.levels.rs-dewford-town-house-east',

'game.levels.rs-dewford-town-house-middle',

'game.levels.rs-dewford-town-house-north',

'game.levels.rs-ever-grande-city-1st-arena',

'game.levels.rs-ever-grande-city-1st-stairway',

'game.levels.rs-ever-grande-city-2nd-arena',

'game.levels.rs-ever-grande-city-2nd-stairway',

'game.levels.rs-ever-grande-city-3rd-arena',

'game.levels.rs-ever-grande-city-3rd-stairway',

'game.levels.rs-ever-grande-city-4th-arena',

'game.levels.rs-ever-grande-city-4th-stairway',

'game.levels.rs-ever-grande-city-5th-stairway',

'game.levels.rs-ever-grande-city-center-1st-floor',

'game.levels.rs-ever-grande-city-center-2nd-floor',

'game.levels.rs-ever-grande-city-chamber',

'game.levels.rs-ever-grande-city-datacenter',

'game.levels.rs-ever-grande-city-entrance',

'game.levels.rs-fallarbor-town-center-1st-floor',

'game.levels.rs-fallarbor-town-center-2nd-floor',

'game.levels.rs-fallarbor-town-contest-hall-entrance',

'game.levels.rs-fallarbor-town-contest-hall-showroom',

'game.levels.rs-fallarbor-town-house-north',

'game.levels.rs-fallarbor-town-house-south',

'game.levels.rs-fallarbor-town-mart',

'game.levels.rs-fiery-path',

'game.levels.rs-fortree-city-center-1st-floor',

'game.levels.rs-fortree-city-center-2nd-floor',

'game.levels.rs-fortree-city-gym',

'game.levels.rs-fortree-city-house-north-east-middle',

'game.levels.rs-fortree-city-house-north-east',

'game.levels.rs-fortree-city-house-north-west-middle',

'game.levels.rs-fortree-city-house-north-west',

'game.levels.rs-fortree-city-house-south-east',

'game.levels.rs-fortree-city-house-south-west',

'game.levels.rs-fortree-city-mart',

'game.levels.rs-granite-cave-entry',

'game.levels.rs-granite-cave-lower',

'game.levels.rs-granite-cave-lowest',

'game.levels.rs-granite-cave-room',

'game.levels.rs-inside-of-truck',

'game.levels.rs-island-cave',

'game.levels.rs-jagged-pass',

'game.levels.rs-lavaridge-town-center-1st-floor',

'game.levels.rs-lavaridge-town-center-2nd-floor',

'game.levels.rs-lavaridge-town-gym-1st-floor',

'game.levels.rs-lavaridge-town-gym-2nd-floor',

'game.levels.rs-lavaridge-town-house-east',

'game.levels.rs-lavaridge-town-mart',

'game.levels.rs-lavaridge-town-shop',

'game.levels.rs-lilycove-city-big-blue-house',

'game.levels.rs-lilycove-city-center-1st-floor',

'game.levels.rs-lilycove-city-center-2nd-floor',

'game.levels.rs-lilycove-city-contest-hall-entrance',

'game.levels.rs-lilycove-city-contest-hall-showroom',

'game.levels.rs-lilycove-city-department-store-1st-floor',

'game.levels.rs-lilycove-city-department-store-2nd-floor',

'game.levels.rs-lilycove-city-department-store-3rd-floor',

'game.levels.rs-lilycove-city-department-store-4th-floor',

'game.levels.rs-lilycove-city-department-store-5th-floor',

'game.levels.rs-lilycove-city-department-store-elevator',

'game.levels.rs-lilycove-city-department-store-roof',

'game.levels.rs-lilycove-city-dock',

'game.levels.rs-lilycove-city-house-east',

'game.levels.rs-lilycove-city-house-north-east',

'game.levels.rs-lilycove-city-house-north-west',

'game.levels.rs-lilycove-city-house-north',

'game.levels.rs-lilycove-city-house-south-west',

'game.levels.rs-lilycove-city-motel-1st-floor',

'game.levels.rs-lilycove-city-motel-2nd-floor',

'game.levels.rs-lilycove-city-museum-1st-floor',

'game.levels.rs-lilycove-city-museum-2nd-floor',

'game.levels.rs-littleroot-town-house-east-1st-floor',

'game.levels.rs-littleroot-town-house-east-2nd-floor',

'game.levels.rs-littleroot-town-house-west-1st-floor',

'game.levels.rs-littleroot-town-house-west-2nd-floor',

'game.levels.rs-littleroot-town-lab',

'game.levels.rs-mauville-city-bike-shop',

'game.levels.rs-mauville-city-center-1st-floor',

'game.levels.rs-mauville-city-center-2nd-floor',

'game.levels.rs-mauville-city-game-corner',

'game.levels.rs-mauville-city-grey-house',

'game.levels.rs-mauville-city-gym',

'game.levels.rs-mauville-city-yellow-house',

'game.levels.rs-meteor-falls-entrance',

'game.levels.rs-meteor-falls-lower-level-room',

'game.levels.rs-meteor-falls-lower-level',

'game.levels.rs-meteor-falls-upper-level',

'game.levels.rs-mossdeep-city-big-house',

'game.levels.rs-mossdeep-city-center-1st-floor',

'game.levels.rs-mossdeep-city-center-2nd-floor',

'game.levels.rs-mossdeep-city-gym',

'game.levels.rs-mossdeep-city-house-north-west-north',

'game.levels.rs-mossdeep-city-house-north-west-west',

'game.levels.rs-mossdeep-city-house-north-west',

'game.levels.rs-mossdeep-city-house-north',

'game.levels.rs-mossdeep-city-house-south-east',

'game.levels.rs-mossdeep-city-mart',

'game.levels.rs-mossdeep-city-space-center-1st-floor',

'game.levels.rs-mossdeep-city-space-center-2nd-floor',

'game.levels.rs-mt-chimney-cable-car',

'game.levels.rs-mt-chimney',

'game.levels.rs-mt-pyre-1st-floor',

'game.levels.rs-mt-pyre-2nd-floor',

'game.levels.rs-mt-pyre-3rd-floor',

'game.levels.rs-mt-pyre-4th-floor',

'game.levels.rs-mt-pyre-5th-floor',

'game.levels.rs-mt-pyre-6th-floor',

'game.levels.rs-mt-pyre-outside',

'game.levels.rs-mt-pyre-summit',

'game.levels.rs-new-mauville-entrance',

'game.levels.rs-new-mauville-underground',

'game.levels.rs-oldale-town-center-1st-floor',

'game.levels.rs-oldale-town-center-2nd-floor',

'game.levels.rs-oldale-town-house-north-west',

'game.levels.rs-oldale-town-house-south-east',

'game.levels.rs-oldale-town-mart',

'game.levels.rs-pacifidlog-town-center-1st-floor',

'game.levels.rs-pacifidlog-town-center-2nd-floor',

'game.levels.rs-pacifidlog-town-house-north-east',

'game.levels.rs-pacifidlog-town-house-north-west',

'game.levels.rs-pacifidlog-town-house-south-east',

'game.levels.rs-pacifidlog-town-house-south-west',

'game.levels.rs-pacifidlog-town-house-south',

'game.levels.rs-petalburg-city-center-1st-floor',

'game.levels.rs-petalburg-city-center-2nd-floor',

'game.levels.rs-petalburg-city-gym-a',

'game.levels.rs-petalburg-city-gym-b',

'game.levels.rs-petalburg-city-gym-c',

'game.levels.rs-petalburg-city-gym-d',

'game.levels.rs-petalburg-city-gym-e',

'game.levels.rs-petalburg-city-gym-f',

'game.levels.rs-petalburg-city-gym-g',

'game.levels.rs-petalburg-city-gym-h',

'game.levels.rs-petalburg-city-gym-i',

'game.levels.rs-petalburg-city-house-middle',

'game.levels.rs-petalburg-city-house-north-west',

'game.levels.rs-petalburg-city-house-south-east',

'game.levels.rs-petalburg-city-mart',

'game.levels.rs-petalburg-woods',

'game.levels.rs-route-104-cottage',

'game.levels.rs-route-104-flower-shop',

'game.levels.rs-route-109-shop',

'game.levels.rs-route-110-trick-house-1st-maze',

'game.levels.rs-route-110-trick-house-2nd-maze',

'game.levels.rs-route-110-trick-house-3rd-maze',

'game.levels.rs-route-110-trick-house-4th-maze',

'game.levels.rs-route-110-trick-house-5th-maze',

'game.levels.rs-route-110-trick-house-6th-maze',

'game.levels.rs-route-110-trick-house-7th-maze',

'game.levels.rs-route-110-trick-house-8th-maze',

'game.levels.rs-route-110-trick-house-back-room',

'game.levels.rs-route-110-trick-house-entrance',

'game.levels.rs-route-110-trick-house-exit-hall',

'game.levels.rs-route-110-yellow-building-north',

'game.levels.rs-route-110-yellow-building-south',

'game.levels.rs-route-111-house-north',

'game.levels.rs-route-111-house-south',

'game.levels.rs-route-112-cable-car',

'game.levels.rs-route-113-shop',

'game.levels.rs-route-114-house-north-cavern',

'game.levels.rs-route-114-house-north-entrance',

'game.levels.rs-route-114-house-south',

'game.levels.rs-route-116-house',

'game.levels.rs-route-117-day-care',

'game.levels.rs-route-119-house',

'game.levels.rs-route-119-weather-institute-1st-floor',

'game.levels.rs-route-119-weather-institute-2nd-floor',

'game.levels.rs-route-121-safari-zone-entrance',

'game.levels.rs-route-123-house',

'game.levels.rs-route-124-shack',

'game.levels.rs-route-124-underwater',

'game.levels.rs-route-126-underwater',

'game.levels.rs-route-127-underwater',

'game.levels.rs-route-128-underwater',

'game.levels.rs-rustboro-city-center-1st-floor',

'game.levels.rs-rustboro-city-center-2nd-floor',

'game.levels.rs-rustboro-city-devon-corporation-1st-floor',

'game.levels.rs-rustboro-city-devon-corporation-2nd-floor',

'game.levels.rs-rustboro-city-devon-corporation-3rd-floor',

'game.levels.rs-rustboro-city-grey-building-south-1st-floor',

'game.levels.rs-rustboro-city-grey-building-south-2nd-floor',

'game.levels.rs-rustboro-city-grey-building-south-3rd-floor',

'game.levels.rs-rustboro-city-grey-house-middle',

'game.levels.rs-rustboro-city-grey-house-north',

'game.levels.rs-rustboro-city-gym',

'game.levels.rs-rustboro-city-mart',

'game.levels.rs-rustboro-city-school',

'game.levels.rs-rustboro-city-tan-building-west-1st-floor',

'game.levels.rs-rustboro-city-tan-building-west-2nd-floor',

'game.levels.rs-rustboro-city-tan-house-south-east',

'game.levels.rs-rustboro-city-tan-house-west',

'game.levels.rs-rusturf-tunnel',

'game.levels.rs-safari-zone-north-east',

'game.levels.rs-safari-zone-north-west',

'game.levels.rs-safari-zone-south-east',

'game.levels.rs-safari-zone-south-west-house',

'game.levels.rs-safari-zone-south-west',

'game.levels.rs-scorched-slab',

'game.levels.rs-seafloor-cavern-depth-five',

'game.levels.rs-seafloor-cavern-depth-four',

'game.levels.rs-seafloor-cavern-depth-one-east',

'game.levels.rs-seafloor-cavern-depth-one-west',

'game.levels.rs-seafloor-cavern-depth-six',

'game.levels.rs-seafloor-cavern-depth-three-east',

'game.levels.rs-seafloor-cavern-depth-three-west',

'game.levels.rs-seafloor-cavern-depth-trick',

'game.levels.rs-seafloor-cavern-depth-two',

'game.levels.rs-seafloor-cavern-entrance',

'game.levels.rs-seafloor-cavern-ocean-floor',

'game.levels.rs-secret-base-1',

'game.levels.rs-secret-base-10',

'game.levels.rs-secret-base-11',

'game.levels.rs-secret-base-12',

'game.levels.rs-secret-base-13',

'game.levels.rs-secret-base-14',

'game.levels.rs-secret-base-15',

'game.levels.rs-secret-base-16',

'game.levels.rs-secret-base-17',

'game.levels.rs-secret-base-18',

'game.levels.rs-secret-base-19',

'game.levels.rs-secret-base-2',

'game.levels.rs-secret-base-20',

'game.levels.rs-secret-base-21',

'game.levels.rs-secret-base-22',

'game.levels.rs-secret-base-23',

'game.levels.rs-secret-base-24',

'game.levels.rs-secret-base-3',

'game.levels.rs-secret-base-4',

'game.levels.rs-secret-base-5',

'game.levels.rs-secret-base-6',

'game.levels.rs-secret-base-7',

'game.levels.rs-secret-base-8',

'game.levels.rs-secret-base-9',

'game.levels.rs-shoal-cave-high-tide-back',

'game.levels.rs-shoal-cave-high-tide-entrance',

'game.levels.rs-shoal-cave-low-tide-back',

'game.levels.rs-shoal-cave-low-tide-below-ladder',

'game.levels.rs-shoal-cave-low-tide-entrance',

'game.levels.rs-shoal-cave-low-tide-lower',

'game.levels.rs-shoal-cave-low-tide-lowest',

'game.levels.rs-slateport-city-center-1st-floor',

'game.levels.rs-slateport-city-center-2nd-floor',

'game.levels.rs-slateport-city-clubhouse',

'game.levels.rs-slateport-city-contest-hall-entrance',

'game.levels.rs-slateport-city-contest-hall-showroom',

'game.levels.rs-slateport-city-dock',

'game.levels.rs-slateport-city-house-north',

'game.levels.rs-slateport-city-house-south',

'game.levels.rs-slateport-city-mart',

'game.levels.rs-slateport-city-oceanic-museum-1st-floor',

'game.levels.rs-slateport-city-oceanic-museum-2nd-floor',

'game.levels.rs-slateport-city-shipyard-1st-floor',

'game.levels.rs-slateport-city-shipyard-2nd-floor',

'game.levels.rs-sootopolis-city-center-1st-floor',

'game.levels.rs-sootopolis-city-center-2nd-floor',

'game.levels.rs-sootopolis-city-gym-ground-floor',

'game.levels.rs-sootopolis-city-gym-lower-floor',

'game.levels.rs-sootopolis-city-house-east-north-east',

'game.levels.rs-sootopolis-city-house-east-south-east',

'game.levels.rs-sootopolis-city-house-north-north-east',

'game.levels.rs-sootopolis-city-house-north-north-west',

'game.levels.rs-sootopolis-city-house-south-south-east',

'game.levels.rs-sootopolis-city-house-south-south-west',

'game.levels.rs-sootopolis-city-house-west-north-west',

'game.levels.rs-sootopolis-city-house-west-south-west',

'game.levels.rs-sootopolis-city-mart',

'game.levels.rs-sootopolis-city-ocean-floor',

'game.levels.rs-sootopolis-city',

'game.levels.rs-southern-island-entry',

'game.levels.rs-southern-island',

'game.levels.rs-ss-tidal-below-deck',

'game.levels.rs-ss-tidal-main-deck',

'game.levels.rs-ss-tidal-rooms',

'game.levels.rs-team-aqua-hideout-entrance',

'game.levels.rs-team-aqua-hideout-lower-level',

'game.levels.rs-team-aqua-hideout-lowest-level',

'game.levels.rs-team-magma-hideout-entrance',

'game.levels.rs-team-magma-hideout-lower-level',

'game.levels.rs-team-magma-hideout-upper-level',

'game.levels.rs-verdandurf-town-contest-center-1st-floor',

'game.levels.rs-verdandurf-town-contest-center-2nd-floor',

'game.levels.rs-verdandurf-town-contest-hall-entrance',

'game.levels.rs-verdandurf-town-contest-hall-showroom',

'game.levels.rs-verdandurf-town-house-east',

'game.levels.rs-verdandurf-town-house-middle',

'game.levels.rs-verdandurf-town-house-west',

'game.levels.rs-verdandurf-town-mart',

'game.levels.rs-victory-road-entry-level',

'game.levels.rs-victory-road-lower-level',

'game.levels.rs-victory-road-lowest-level',

'game.levels.rs-world',

'game.levels.town'

)

.defines(function() {});