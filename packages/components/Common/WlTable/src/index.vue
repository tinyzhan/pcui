<template>
    <div class="table_wrap">
        <div class="wl-table">
            <div class="table-thead">
                <!-- <div class="thead-tr">
                    <div class="thead-th" 
                    :class="tableLineSize" 
                    v-for="(column,index) in columns" 
                    :key="index"
                    :style="!!column.width && { 'width': tableRowWidth(column), 'flex': 'unset' }"
                    >{{column.title}}</div>
                </div> -->
                <tableHead
                :size="size"
                :columns="columns"
                ></tableHead>
            </div>
            <div class="table-tbody">
                <!-- <div class="tbody-tr" v-for="(item,key) in data" :key="key">
                    <div class="tbody-td" 
                    :class="tableLineSize" 
                    v-for="(column,index) in columns" 
                    :key="index"
                    :style="!!column.width && { 'width': tableRowWidth(column), 'flex': 'unset' }"
                    >
                        <slot :name="column.dataIndex" :data="item">
                            {{item[column.dataIndex]}}
                        </slot>
                    </div>
                </div> -->
                <template v-for="(item,key) in data">
                    <tableRow 
                    :key="key"
                    :item="item"
                    :columns="columns"
                    :size="size"
                    ></tableRow>
                </template>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
import tableRow from "./table-row"
import tableHead from "./table-head"
export default {
    name: "WlTable",
    components: { tableRow, tableHead },
    props: {
        columns: {
          type: Array,
          default: () => [],
        },
        data: {
            type: Array,
            default: () => [],
        },
        size: {
            type: String,
            default: 'large'
        },
    },
}
</script>
