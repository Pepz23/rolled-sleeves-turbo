export const FB_PIXEL_ID = '721478669744365'

export const pageview = () => {
    window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
    window.fbq('track', name, options)
}
