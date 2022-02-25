import WlCards from "./src";

WlCards.install = (Vue) => {
    Vue.component(WlCards.name, WlCards);
}

export default WlCards
