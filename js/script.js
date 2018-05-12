// jshint esversion:6
var draggable = require('vuedraggable');

Vue.component('draggable', draggable);

var app = new Vue({
  el: '#app',
  data: {
    selectingP: false, // Page Flags
    homeP: true,
    connectP: false,
    bindingsP: false,
    securityP: false,
    downloadP: false,
    loading: false,
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
    connectedList: [],
    filesBeingOfferedList: [], //[fileID, path]
    filesBeingAcceptedList: [], //[fileID, path]
    uiFilesAvailableList: [{
        filename: 'Alpha.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Beta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      },
      {
        filename: 'Delta.txt',
        senderSystem: '123.123.123.123',
        fileID: '1337',
        fileSize: '100000'
      }
    ] //[filename, senderSystem, fileID, fileSize]
  },
  methods: {
    homeClick: function() {
      this.homeP = true;
      this.connectP = false;
      this.selectingP = false;
      this.bindingsP = false;
      this.securityP = false;
      this.downloadP = false;
    },
    connectClick: function() {
      this.homeP = false;
      this.selectingP = false;
      this.connectP = true;
      this.bindingsP = false;
      this.securityP = false;
      this.downloadP = false;
    },
    bindingsClick: function() {
      this.selectingP = false;
      this.homeP = false;
      this.connectP = false;
      this.bindingsP = true;
      this.securityP = false;
      this.downloadP = false;
    },
    securityClick: function() {
      this.homeP = false;
      this.connectP = false;
      this.bindingsP = false;
      this.securityP = true;
      this.selectingP = false;
      this.downloadP = false;
    },
    downloadClick: function() {
      this.homeP = false;
      this.connectP = false;
      this.bindingsP = false;
      this.securityP = false;
      this.selectingP = false;
      this.downloadP = true;
    },
    toggleSSL: function() {
      if (this.sslState == 'disabled') {
        this.sslState = 'enabled';
      } else {
        this.sslState = 'disabled';
      }
    },
    searchDevices: function() {
      this.connectP = false;
      this.selectingP = true;

      // INSERT FUNCTION HERE
    },
    addSelected: function(item) {
      // if (!this.connectedList.includes(item)) {
      //     this.connectedList.push(item);
      // }

      this.connectedList.push(item);
    },
    removeSelected: function(item) {
      var index = this.connectedList.indexOf(item);
      this.connectedList.splice(index, 1);
    },
    downloadSelected: function(item) {
      console.log(item);
    }
  }
});
