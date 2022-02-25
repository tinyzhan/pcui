export default {
    props: ["columns", "size"],
    computed: {
        tableLineSize() {
            let { size } = this;
            return `table-line-${size}`
        },
        tableRowWidth() {
            return column => `${column.width}px`
        }
    },
    render() {
        return (
            <div class="thead-tr">
                {
                    this.columns.map((column, index) => {
                        return (
                            <div class={`thead-th ${this.tableLineSize}`}
                            key={index}
                            style={!!column.width && { 'width': this.tableRowWidth(column), 'flex': 'unset' }}
                            >
                                {column.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}