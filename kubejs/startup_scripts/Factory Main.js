// Changes the kubejs name to Factory
Platform.setModName('kubejs', 'The Factory')

StartupEvents.modifyCreativeTab('kubejs:tab', factory => {
    factory.remove('factory:medal')
    factory.displayName = Text.white('The Factory')
    factory.icon = 'factory:medal'
})