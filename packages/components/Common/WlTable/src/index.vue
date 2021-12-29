<template>
    <div class="table_wrap">
        <div class="wl-table">
            <div class="table-thead">
                <div class="thead-tr">
                    <div class="thead-th" v-for="(item,index) in columns" :key="index">{{item.title}}</div>
                </div>
            </div>
            <div class="table-tbody">
                <div class="tbody-tr" v-for="(data,key) in dataSource" :key="key">
                    <div class="tbody-td" v-for="(item,index) in columns" :key="index">
                        {{data[item.dataIndex]}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WlTable",
    props: {
        columns: {
          type: Array,
          default: () => [],
        },
        dataSource: {
            type: Array,
            default: () => [],
        }
    },
}
</script>

<style scoped lang="scss">
.wl-table {
    width: 100%;
    border: 1px solid #E4E9ED;
    border-radius: 12px;
    .table-thead {
        border-bottom: 1px solid #E4E9ED;
        .thead-tr {
            display: flex;
        }
        .thead-th {
            flex: 1;
            padding: 10px 17px;
        }
    }
    .table-tbody {
        .tbody-tr {
            display: flex;
            border-bottom: 0.5px solid #E4E9ED;
        }
        .tbody-tr:last-of-type {
            border: none;
        }
        .tbody-td {
            flex: 1;
            padding: 10px 17px;
        }
    }
}
</style>
