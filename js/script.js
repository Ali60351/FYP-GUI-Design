var app = new Vue({
    el: '#app',
    data: {
        selectingP: false, // Page Flags
        homeP: true,
        connectP: false,
        bindingsP: false,
        securityP: false,
        loading: false,
        pcCount: 2,
        sslState: 'disabled',
        connectionState: 'Inactive',
        selectList: [{ // DATA
                name: 'Dell 123',
                ip: '192.168.1.10'
            },
            {
                name: 'HP 321',
                ip: '192.168.1.11'
            }
        ],
        bindingList: [{
                action: 'Copy',
                binding: 'Ctrl + C'
            },
            {
                action: 'Paste',
                binding: 'Ctrl + V'
            }
        ],
        connectedList: [{
                name: 'Dell 123',
                ip: '192.168.1.10'
            },
            {
                name: 'HP 321',
                ip: '192.168.1.11'
            }
        ]
    },
    methods: {
        homeClick: function () {
            this.homeP = true;
            this.connectP = false;
            this.selectingP = false;
            this.bindingsP = false;
            this.securityP = false;
        },
        connectClick: function () {
            this.homeP = false;
            this.selectingP = false;
            this.connectP = true;
            this.bindingsP = false;
            this.securityP = false;
        },
        bindingsClick: function () {
            this.selectingP = false;
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = true;
            this.securityP = false;
        },
        securityClick: function () {
            this.homeP = false;
            this.connectP = false;
            this.bindingsP = false;
            this.securityP = true;
            this.selectingP = false;
        },
        toggleSSL: function () {
            if (this.sslState == 'disabled') {
                this.sslState = 'enabled';
            } else {
                this.sslState = 'disabled';
            }
        },
        searchDevices: function () {
            this.connectP = false;
            this.selectingP = true;

            // INSERT FUNCTION HERE
        },
        addSelected: function (item) {
            // INSERT FUNCTION HERE
        }
    }
});