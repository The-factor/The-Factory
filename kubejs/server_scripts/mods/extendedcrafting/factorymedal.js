ServerEvents.recipes(factory => {
    factory.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "Q   R   Q",
            " W     W ",
            "         ",
            "         ",
            "    TY   ",
            "    IU   ",
            "         ",
            " W     W ",
            "Q   E   Q"
        ],
        "key": {
          "Q": {
            "item": "supplementaries:soap"
          },
          "W": {
            "item": "extendedcrafting:ultimate_singularity"
          },
          "E": {
            "item": "mahoutsukai:morgan"
          },
          "R": {
            "item": "create_things_and_misc:vibration_mechanism"
          },
          "T": {
            "item": "minecraft:bedrock"
          },
          "Y": {
            "item": "ars_nouveau:archmage_spell_book"
          },
          "U": {
            "item": "quarryplus:adv_quarry"
          },
          "I": {
            "item": "megacells:item_storage_cell_256m"
          }
        },
        "result": {
          "item": "factory:medal"
        }
      }
      
)})