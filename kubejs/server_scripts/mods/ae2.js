ServerEvents.recipes(factory => {
    factory.remove('ae2:network/blocks/controller')
    factory.shaped('ae2:inscriber', ['ISI', 'C I', 'ISI'], {I:'minecraft:iron_ingot', S:"minecraft:sticky_piston", C:"#forge:ingots/copper"})
    factory.shaped('ae2:controller', ['QRQ', 'AEA', 'XXX'], {Q:"ae2:fluix_block", R:"extendedcrafting:basic_catalyst", E:"ae2:energy_acceptor", A:"ae2:engineering_processor", X:"extendedcrafting:black_iron_ingot"})
})

console.log('Custom Ae2 recipes. loaded')
