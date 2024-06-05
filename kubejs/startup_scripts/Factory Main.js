// Changes the kubejs name to Factory
Platform.setModName('kubejs', 'Factory Life')

StartupEvents.modifyCreativeTab('kubejs:tab', factory => {
    factory.remove('factory:medal')
    factory.displayName = Text.aqua('The Factory')
    factory.icon = 'factory:medal'
})