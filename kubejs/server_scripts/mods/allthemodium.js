ServerEvents.recipes(factory => {
    factory.remove({ mod:'allthemodium'})
    factory.shaped('allthemodium:teleport_pad', ['QWQ', 'WDW', 'QWQ'], { Q: 'allthemodium:allthemodium_ingot', W: 'mekanism:teleportation_core', D: 'create:brass_casing'})
    factory.smelting('allthemodium:allthemodium_ingot', 'allthemodium:raw_allthemodium')
    factory.blasting('allthemodium:allthemodium_ingot', 'allthemodium:raw_allthemodium')
})