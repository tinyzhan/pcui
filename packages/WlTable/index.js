import WlTable from "./src/index.vue"

WlTable.install = (Vue) => {
    Vue.component(WlTable.name, WlTable)
}

export default WlTable