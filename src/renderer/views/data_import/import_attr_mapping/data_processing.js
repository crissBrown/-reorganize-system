
const xlsx = require('node-xlsx');
export default {
    importFromExcel: {
        init(wizardOption) {
            if (!this._wizardOption) {
                if (!this._oldSourceSrc) {
                    this._oldSourceSrc = "";
                    this._xlsxData = null
                }

                this._wizardOption = wizardOption
                // this._xlsxData = xlsx.parse(wizardOption.sourceSrcSheet.src)
            }
            //在xlsx路径变化的时候更新数据，否则保持不变
            if (this._oldSourceSrc != wizardOption.sourceSrcSheet.src) {
                this._oldSourceSrc = wizardOption.sourceSrcSheet.src
                this._xlsxData = xlsx.parse(wizardOption.sourceSrcSheet.src)
            }
        },

        getSourceSheets() {
            return [...this._wizardOption.sourceSrcSheet.sheet]
        },
        getSourceFieldFromSheet(choosedSheet) {
            const CURRENT_SHEET_DATA = this._xlsxData.find(val => val.name == choosedSheet).data;
            let sourceField = CURRENT_SHEET_DATA[this._wizardOption.rowRange.attrName - 1].filter(val => val)  //filter用于去除空值
            return sourceField
        },
        getXlsxData() {
            return this._xlsxData;
        }


    }
}