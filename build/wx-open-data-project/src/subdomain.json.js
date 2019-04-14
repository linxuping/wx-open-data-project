module.exports = [
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  [
    {
      "__type__": "cc.SceneAsset",
      "_name": "Test",
      "scene": {
        "__id__": 1
      },
      "asyncLoadAssets": null
    },
    {
      "__type__": "cc.Scene",
      "_name": "New Node",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 12
        }
      ],
      "_active": false,
      "_anchorPoint": {
        "__type__": "cc.Vec2"
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 0.37616888308104096,
        "y": 0.37616888308104096,
        "z": 1
      },
      "autoReleaseAssets": false
    },
    {
      "__type__": "cc.Node",
      "_name": "Canvas",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 3
        },
        {
          "__id__": 4
        },
        {
          "__id__": 7
        },
        {
          "__id__": 10
        }
      ],
      "_level": 1,
      "_components": [
        {
          "__type__": "cc.Canvas",
          "node": {
            "__id__": 2
          },
          "_designResolution": {
            "__type__": "cc.Size",
            "width": 400,
            "height": 420
          },
          "_fitWidth": true
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 420
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 200,
        "y": 210
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      },
      "_id": "1f51fRKdx9KAZIFK6yiet28"
    },
    {
      "__type__": "cc.Node",
      "_name": "Main Camera",
      "_parent": {
        "__id__": 2
      },
      "_level": 1,
      "_components": [
        {
          "__type__": "cc.Camera",
          "node": {
            "__id__": 3
          },
          "_clearFlags": 7,
          "_backgroundColor": {
            "__type__": "cc.Color",
            "r": 255,
            "g": 255,
            "b": 255,
            "a": 0
          },
          "_depth": -1
        }
      ],
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Display",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 5
        }
      ],
      "_components": [
        {
          "__type__": "cc.ScrollView",
          "node": {
            "__id__": 4
          },
          "horizontal": false,
          "brake": 0.9,
          "bounceDuration": 0.23,
          "_N$content": {
            "__id__": 6
          },
          "content": {
            "__id__": 6
          },
          "_N$horizontalScrollBar": null,
          "_N$verticalScrollBar": null
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 4
          },
          "_alignFlags": 41,
          "_originalWidth": 400
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 380
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 20
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "View",
      "_parent": {
        "__id__": 4
      },
      "_children": [
        {
          "__id__": 6
        }
      ],
      "_components": [
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 5
          },
          "alignMode": 2,
          "_alignFlags": 45,
          "_originalWidth": 240,
          "_originalHeight": 250
        },
        {
          "__type__": "cc.Mask",
          "node": {
            "__id__": 5
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 380
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Content",
      "_parent": {
        "__id__": 5
      },
      "_components": [
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 6
          },
          "alignMode": 2,
          "_alignFlags": 40,
          "_originalWidth": 300
        },
        {
          "__type__": "cc.Layout",
          "node": {
            "__id__": 6
          },
          "_layoutSize": {
            "__type__": "cc.Size",
            "width": 400,
            "height": -20
          },
          "_resize": 1,
          "_N$layoutType": 2,
          "_N$spacingY": 20
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": -20
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "x": 0.5,
        "y": 1
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 208
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "button",
      "_parent": {
        "__id__": 2
      },
      "_children": [
        {
          "__id__": 8
        }
      ],
      "_level": 2,
      "_components": [
        {
          "__type__": "cc.Button",
          "node": {
            "__id__": 7
          },
          "_N$transition": 2,
          "transition": 2,
          "_N$normalColor": {
            "__type__": "cc.Color",
            "r": 230,
            "g": 230,
            "b": 230
          },
          "_N$pressedColor": {
            "__type__": "cc.Color",
            "r": 200,
            "g": 200,
            "b": 200
          },
          "pressedColor": {
            "__type__": "cc.Color",
            "r": 200,
            "g": 200,
            "b": 200
          },
          "_N$disabledColor": {
            "__type__": "cc.Color",
            "r": 120,
            "g": 120,
            "b": 120,
            "a": 200
          },
          "_N$normalSprite": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_N$pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "pressedSprite": {
            "__uuid__": "e97GVMl6JHh5Ml5qEDdSGa"
          },
          "_N$hoverSprite": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "hoverSprite": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_N$disabledSprite": {
            "__uuid__": "29FYIk+N1GYaeWH/q1NxQO"
          },
          "_N$target": {
            "__id__": 8
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 40
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": 20
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Background",
      "_parent": {
        "__id__": 7
      },
      "_children": [
        {
          "__id__": 9
        }
      ],
      "_level": 2,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 8
          },
          "_spriteFrame": {
            "__uuid__": "f0BIwQ8D5Ml7nTNQbh1YlS"
          },
          "_type": 1,
          "_sizeMode": 0
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 8
          },
          "alignMode": 0,
          "_alignFlags": 45,
          "_originalWidth": 100,
          "_originalHeight": 40
        }
      ],
      "_color": {
        "__type__": "cc.Color",
        "r": 230,
        "g": 230,
        "b": 230
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 40
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Label",
      "_parent": {
        "__id__": 8
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 9
          },
          "_useOriginalSize": false,
          "_string": "xpButton",
          "_N$string": "xpButton",
          "_fontSize": 20,
          "_enableWrapText": false,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1,
          "_N$overflow": 1
        }
      ],
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 100,
        "height": 40
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "Tips",
      "_parent": {
        "__id__": 2
      },
      "_level": 1,
      "_components": [
        {
          "__id__": 11
        },
        {
          "__type__": "cc.Widget",
          "node": {
            "__id__": 10
          },
          "_alignFlags": 40,
          "_originalWidth": 96
        }
      ],
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 30
      },
      "_position": {
        "__type__": "cc.Vec3",
        "y": -195
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Label",
      "node": {
        "__id__": 10
      },
      "_useOriginalSize": false,
      "_fontSize": 25,
      "_lineHeight": 30,
      "_N$horizontalAlign": 1,
      "_N$verticalAlign": 1,
      "_N$overflow": 2
    },
    {
      "__type__": "cc.Node",
      "_name": "launch",
      "_parent": {
        "__id__": 1
      },
      "_level": 1,
      "_components": [
        {
          "__type__": "e53e6YiUd9FJLf8yIQu1n47",
          "node": {
            "__id__": 12
          },
          "tips": {
            "__id__": 11
          },
          "content": {
            "__id__": 6
          },
          "prefab": {
            "__uuid__": "cbKQJzOAhKWJ7I15nI/uhl"
          }
        }
      ],
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 400,
        "height": 420
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": 200,
        "y": 210
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      },
      "_id": "980XNJvvRGVr+ruHYvaK6B"
    }
  ],
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_disabled",
      "texture": "71VhFCTINJM6/Ky3oX9nBT",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite",
      "texture": "6eBWFz0oVHPLIGQKf/9Thu",
      "rect": [
        0,
        2,
        40,
        36
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_sprite_splash",
      "texture": "02delMVqdBD70a/HSD99FK",
      "rect": [
        0,
        0,
        2,
        2
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        2,
        2
      ],
      "capInsets": [
        0,
        0,
        0,
        0
      ]
    }
  },
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  [
    {
      "__type__": "cc.Prefab",
      "_name": "block",
      "data": {
        "__id__": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "block",
      "_children": [
        {
          "__id__": 2
        },
        {
          "__id__": 3
        }
      ],
      "_level": 1,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 1
          },
          "_spriteFrame": {
            "__uuid__": "a2MjXRFdtLlYQ5ouAFv/+R"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cbKQJzOAhKWJ7I15nI/uhl"
        },
        "fileId": "9cRtn0hFBAnb0+E2/DH1Io"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 350,
        "height": 60
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "userName",
      "_parent": {
        "__id__": 1
      },
      "_level": 2,
      "_components": [
        {
          "__type__": "cc.Label",
          "node": {
            "__id__": 2
          },
          "_useOriginalSize": false,
          "_string": "Label",
          "_N$string": "Label",
          "_fontSize": 25,
          "_lineHeight": 30,
          "_N$horizontalAlign": 1,
          "_N$verticalAlign": 1
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cbKQJzOAhKWJ7I15nI/uhl"
        },
        "fileId": "2fQcfaB6pAm5ImzuYnWBOS"
      },
      "_color": {
        "__type__": "cc.Color"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 61.17,
        "height": 30
      },
      "_anchorPoint": {
        "__type__": "cc.Vec2",
        "y": 0.5
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -60
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "mask",
      "_parent": {
        "__id__": 1
      },
      "_children": [
        {
          "__id__": 4
        }
      ],
      "_level": 2,
      "_components": [
        {
          "__type__": "cc.Mask",
          "node": {
            "__id__": 3
          },
          "_type": 1,
          "_segments": 30
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cbKQJzOAhKWJ7I15nI/uhl"
        },
        "fileId": "91zn2IjZRNIp0vvEycCyzg"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 60,
        "height": 60
      },
      "_position": {
        "__type__": "cc.Vec3",
        "x": -109
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    },
    {
      "__type__": "cc.Node",
      "_name": "userIcon",
      "_parent": {
        "__id__": 3
      },
      "_level": 3,
      "_components": [
        {
          "__type__": "cc.Sprite",
          "node": {
            "__id__": 4
          },
          "_spriteFrame": {
            "__uuid__": "8c20Sso/ZEn7NUfNSM+EBh"
          },
          "_sizeMode": 0
        }
      ],
      "_prefab": {
        "__type__": "cc.PrefabInfo",
        "root": {
          "__id__": 1
        },
        "asset": {
          "__uuid__": "cbKQJzOAhKWJ7I15nI/uhl"
        },
        "fileId": "fbrqZuJB9Pzp7JC3JQ32o4"
      },
      "_contentSize": {
        "__type__": "cc.Size",
        "width": 60,
        "height": 60
      },
      "_scale": {
        "__type__": "cc.Vec3",
        "x": 1,
        "y": 1,
        "z": 1
      }
    }
  ],
  {
    "__type__": "cc.Texture2D",
    "content": "0,9729,9729,33071,33071,0"
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_pressed",
      "texture": "b4P/PCArtIdIH38t6mlw8Y",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  },
  {
    "__type__": "cc.SpriteFrame",
    "content": {
      "name": "default_btn_normal",
      "texture": "e8Ueib+qJEhL6mXAHdnwbi",
      "rect": [
        0,
        0,
        40,
        40
      ],
      "offset": [
        0,
        0
      ],
      "originalSize": [
        40,
        40
      ],
      "capInsets": [
        12,
        12,
        12,
        12
      ]
    }
  }
];
