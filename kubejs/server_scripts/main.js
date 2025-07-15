// priority: 0
ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:smoker' });
  event.remove({ id: 'create_aquatic_ambitions:smelting/veridium' });
  event.smoking('create:veridium', 'minecraft:prismarine');
  event.shaped('minecraft:smoker', [
    ' L ',
    'LFL',
    ' L '
  ], {
    L: '#minecraft:logs',
    F: 'minecraft:furnace'
  });
  event.shaped('minecraft:chest', [
    'XXX',
    'X X',
    'XXX'
  ], {
    X: '#minecraft:planks',
  });
})
ServerEvents.tags('item', event => {
  event.add('c:foods/cooked_egg', 'incubation:fried_egg')
  event.add('create:pulpifiable', 'minecraft:kelp')
})

ServerEvents.tags('block', event => {
event.add('underlay:overlay', 'farmersdelight:canvas_rug')

let vanillaWoodTypes = [
  'oak',
  'spruce',
  'birch',
  'jungle',
  'acacia',
  'dark_oak',
  'mangrove',
  'cherry',
  'bamboo',
  'crimson',
  'warped'
]

for (const type of vanillaWoodTypes) {
  event.add('create:chest_mounted_storage', `woodworks:${type}_chest`)
  event.add('create:chest_mounted_storage', `woodworks:trapped_${type}_chest`)
  event.add('minecraft:chests', `woodworks:trapped_${type}_chest`)
  event.add('minecraft:chests', `woodworks:${type}_chest`)
}
let cutsomWoodTypes = [
  'mynethersdelight/powdery',
  'vanillabackport/pale_oak',
  'renether/enamel',
  'arts_and_crafts/cork',
  'nomansland/pine',
  'nomansland/walnut',
  'nomansland/maple',
  'nomansland/willow'
]

for (const type of cutsomWoodTypes) {
  event.add('create:chest_mounted_storage', `everycomp:abnww/${type}_chest`)
  event.add('create:chest_mounted_storage', `everycomp:abnww/trapped_${type}_chest`)
      event.add('minecraft:chests', `everycomp:abnww/${type}_chest`)
  event.add('minecraft:chests', `everycomp:abnww/trapped_${type}_chest`)
}
})