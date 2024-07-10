// Changes the kubejs name to Factory
Platform.setModName('kubejs', 'the Factory')

StartupEvents.modifyCreativeTab('kubejs:tab', factory => {
    factory.add('factory:universal_press')
    factory.displayName = Text.aqua('The Factory')
    factory.icon = 'factory:medal'
})