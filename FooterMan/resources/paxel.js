StartupEvents.registry('item', event => {
    event.create('cool_paxel', 'paxel')
})
onEvent('item.registry', event => {
    event.create('cool_paxel', 'paxel')
})