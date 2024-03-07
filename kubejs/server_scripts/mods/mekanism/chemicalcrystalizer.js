ServerEvents.recipes((factory) => {
    factory.remove({id:'create_new_age:thorium/nuclear_fuel'})
	factory.custom(
		{
			"type": "mekanism:crystallizing",
			"chemicalType": "gas",
			"input": {
				"gas": 'mekanism:fissile_fuel',
				"amount": 100
			},
			"output": {
				"item": 'create_new_age:nuclear_fuel'
			}
		  }
    )
})