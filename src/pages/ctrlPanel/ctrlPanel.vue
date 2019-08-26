<template>
    <div v-if="loaded" class="ctrlPanel bg-light">
        <nav class="navbar navbar-expand-lg px-4 navbar-light bg-light fixed-top border-bottom">
            <div class="input-group">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect">选择模版</label>
                </div>
                <select v-model="overviewStatus.panelCode" class="custom-select" id="inputGroupSelect">
                    <option value="1">宽屏</option>
                    <option value="2">简单轮播</option>
                    <option value="3">大宽屏</option>
                </select>
            </div>
        </nav>
        <wide-screen-view v-if="overviewStatus.panelCode === '1'" :overview-status="overviewStatus"></wide-screen-view>
        <ctrl-screen-view v-else-if="overviewStatus.panelCode === '2'" :overview-status="overviewStatus"></ctrl-screen-view>
        <over-screen-view v-else-if="overviewStatus.panelCode === '3'" :overview-status="overviewStatus"></over-screen-view>
    </div>
</template>

<script>
    import wideScreenView from "@components/bootstrap/panel/wideScreenView";
    import ctrlScreenView from "@components/bootstrap/panel/ctrlScreenView";
    import overScreenView from "@components/bootstrap/panel/overScreenView";

    export default {
        name: "ctrlPanel",
        components: {
            wideScreenView, ctrlScreenView, overScreenView
        },
        data() {
            return {
                loaded: false,
                overviewStatus: {
                    panelCode: null,
                    moduleCodeList: null
                },
                rawPanelCode: null
            }
        },
        mounted() {
            this.global.axios.get(this.global.serverHost + '/backStage/getOverviewStatus', {
                withCredentials: true
            }).then(res => {
                this.overviewStatus = res.data;
                this.overviewStatus.panelCode = this.overviewStatus.panelCode.toString();
                this.rawPanelCode = this.overviewStatus.panelCode;
                this.loaded = true;
            }).catch(e => {
                // eslint-disable-next-line no-console
                console.info(e)
            })
        }
    }
</script>

<style lang="less">
    div.ctrlPanel {
        nav {
            div.input-group {
                select.custom-select {
                    box-shadow: none;
                }
                select.custom-select:focus {
                    border-color: inherit;
                }
            }
        }
        div.main {
            margin-top: 55px;
            min-height: calc(100vh - 55px);
            div.row {
                div.list-group-flush {
                    --baseH: 49;
                    font-size: small;
                    div.list-group-item {
                        height: calc(var(--baseH) * 1px);
                        border-bottom-width: 0;
                        padding-left: 3px;
                        padding-right: 3px;
                    }
                    div.list-group-item.base2H {
                        height: calc(var(--baseH) * 2px - 1px);
                    }
                    div.list-group-item.base3H {
                        height: calc(var(--baseH) * 3px - 2px);
                    }
                    div.list-group-item.base4H {
                        height: calc(var(--baseH) * 4px - 3px);
                    }
                    div.list-group-item.base5H {
                        height: calc(var(--baseH) * 5px - 4px);
                    }
                    div.list-group-item.base6H {
                        height: calc(var(--baseH) * 6px - 5px);
                    }
                    div.list-group-item.base7H {
                        height: calc(var(--baseH) * 7px - 6px);
                    }
                    div.list-group-item.base8H {
                        height: calc(var(--baseH) * 8px - 7px);
                    }
                }
            }
        }
    }
</style>