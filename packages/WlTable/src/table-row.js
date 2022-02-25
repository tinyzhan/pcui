export default {
    props: ["item", "columns", "size"],
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
            <div class="tbody-tr">
                {
                    this.columns.map((column, index) => {
                        return (
                            <div class={`tbody-td ${this.tableLineSize}`}
                            key={index}
                            style={!!column.width && { 'width': this.tableRowWidth(column), 'flex': 'unset' }}
                            >
                                <slot name={column.dataIndex} data={this.item}>
                                    {this.item[column.dataIndex]}
                                </slot>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}