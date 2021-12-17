export const isDom = (dom) => {
    return dom instanceof HTMLElement
        ||
        ( typeof dom && dom.nodeType === 1 && typeof dom.nodeName === 'string' )
}

export default {
    isDom
}