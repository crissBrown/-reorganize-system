const {
    Menu
} = require('electron');

//订单菜单
const TEMPLATE = [{
    label: '选项',
    submenu: [{
        label: '重载界面',
        accelerator: 'ctrl+g',
        role: "reload"

    },
    {
        label: '打开调试工具',
        accelerator: 'F12',
        role: "toggledevtools"

    }

    ]
}, {
    label: '数据',
    submenu: [{
        label: '数据导入',
        click(menuItem, browserWindow) {
            console.log(browserWindow)
            browserWindow.webContents.send('showDataImport','turnHome')
            

        }

    }

    ]
}
]



const MENU_TEMPLATE = Menu.buildFromTemplate(TEMPLATE);

Menu.setApplicationMenu(MENU_TEMPLATE);