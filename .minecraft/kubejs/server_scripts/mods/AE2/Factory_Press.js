ServerEvents.recipes(factory => {
    factory.shaped(Item.of('ae2:automation_press', 1), ['ALA', 'EIC', 'ASA'], {I: 'ae2:singularity', A: 'extendedae:entro_ingot', L: 'ae2:logic_processor_press', S: 'ae2:silicon_press', E: 'ae2:engineering_processor_press', C: 'ae2:calculation_processor_press'});
    factory.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "item": "ae2:certus_quartz_crystal"
          },
          "top": {
            "item": "ae2:automation_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "count": 1,
          "id": "ae2:printed_calculation_processor"
        }
      })
      factory.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "c:gems/diamond"
          },
          "top": {
            "item": "ae2:factory_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "count": 1,
          "id": "ae2:printed_engineering_processor"
        }
      })
      factory.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "c:ingots/gold"
          },
          "top": {
            "item": "ae2:automation_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "count": 1,
          "id": "ae2:printed_logic_processor"
        }
      })
      factory.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "c:silicon"
          },
          "top": {
            "item": "ae2:automation_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "count": 1,
          "id": "ae2:printed_silicon"
        }
      })
      factory.custom({
        "type": "ae2:inscriber",
        "ingredients": {
          "middle": {
            "tag": "c:gems/entro"
          },
          "top": {
            "item": "ae2:automation_press"
          }
        },
        "mode": "inscribe",
        "result": {
          "count": 1,
          "id": "extendedae:concurrent_processor_print"
        }
      })
})