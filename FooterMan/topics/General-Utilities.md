# General Utilities

| **Version** | **Loader** | **In-Dev** |
|:-----------:|:----------:|:----------:|
|   1.20.1    |   Forge    |  Limited   |
|   1.20.2    |    Neo     |  Limited   |
|   1.20.4    |    Neo     |  Limited   |
|   1.20.5    |    Neo     |     No     |
|   1.20.6    |    Neo     |    Yes     |

**Modrinth** - https://modrinth.com/mod/general-utilities \
**Curse** - https://www.curseforge.com/minecraft/mc-mods/general-utilities

### Commands:

**`inspectBlock`**

Checks block in front of the Player for Properties, then returns them to Player.\
Range: 5 blocks.\
Supports full blocks only.

Arguments:
> `sounds` | Returns Block's sounds from Hit, Break, Step, Place. \
> `tags` | Returns Block's TagKeys.

**`inspectItem`**
Checks Item held by Player for Properties.
Does not check for Block tags if item is a Block.

Arguments:
> `food` | Returns Item's Food properties, if item has Food Component.\
> `tags` | Returns Item's TagKeys.\
> `enchants` | Returns Item's Enchants, if item is Enchanted.

**`inspectBiome`** --1.20.6+
Checks Biome Player is standing in for Properties.

Arguments:
> `color` | Returns all Color properties\
> `tags` | Returns all Biome Tags.\
> `features` | Returns all Biome Features.\
> `sounds` | Returns all Biome Sounds.