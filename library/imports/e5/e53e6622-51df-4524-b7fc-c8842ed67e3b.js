"use strict";
cc._RF.push(module, 'e53e6YiUd9FJLf8yIQu1n47', 'launch');
// launch.js

'use strict';

//
// api: https://developers.weixin.qq.com/minigame/dev/document/open-api/data/wx.getUserInfo.html
//
cc.Class({
    extends: cc.Component,

    properties: {
        tips: cc.Label,
        content: cc.Node,
        prefab: cc.Prefab,
        preview: cc.ScrollView,
        display: cc.None
    },

    start: function start() {
        if (typeof wx === 'undefined') {
            return;
        }
        wx.onMessage(function (data) {
            console.log("[wx-open-data] wx.onMessage data: ", data);
            if (data.message) {
                console.log(data.message);
            }
        });
        this.initTips();
        this.initUserInfo();
        this.initFriendInfo();
    },
    initTips: function initTips() {
        var renderTypeStr = 'Canvas';
        if (cc.game.renderType === cc.game.RENDER_TYPE_WEBGL) {
            renderTypeStr = 'WEBGL';
        }
        this.tips.string = '\u5F00\u653E\u6570\u636E\u57DF\u5F53\u524D\u652F\u6301 ' + renderTypeStr + ' \u6E32\u67D3\u6A21\u5F0F';
    },
    initUserInfo: function initUserInfo() {
        var _this = this;

        wx.getUserInfo({
            openIdList: ['selfOpenId'],
            lang: 'zh_CN',
            success: function success(res) {
                _this.createUserBlock(res.data[0]);
                _this.createUserBlock(res.data[0]);
                _this.createUserBlock(res.data[0]);
            },
            fail: function fail(res) {
                console.error(res);
            }
        });
    },
    initFriendInfo: function initFriendInfo() {
        var _this2 = this;

        wx.getFriendCloudStorage({
            success: function success(res) {
                for (var i = 0; i < res.data.length; ++i) {
                    _this2.createUserBlock(res.data[i]);
                }
            },
            fail: function fail(res) {
                console.error(res);
            }
        });
    },
    createUserBlock: function createUserBlock(user) {
        var node = cc.instantiate(this.prefab);
        node.parent = this.content;
        node.x = 0;

        // set nickName
        var userName = node.getChildByName('userName').getComponent(cc.Label);
        userName.string = user.nickName || user.nickname;

        // set avatar
        cc.loader.load({ url: user.avatarUrl, type: 'png' }, function (err, texture) {
            if (err) console.error(err);
            var userIcon = node.getChildByName('mask').children[0].getComponent(cc.Sprite);
            userIcon.spriteFrame = new cc.SpriteFrame(texture);
        });
    }
});

cc._RF.pop();