
import dataProcess from '../import_attr_mapping/data_processing'
export default {
    init(wizardOption) {
        if (!this._wizardOption) {
            this._xlsx = dataProcess.importFromExcel.getXlsxData()
            this._wizardOption = wizardOption
            debugger
        }

    }
}