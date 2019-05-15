cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad () {
        this.mark = 0,  //水果的标号
        this.row = 0,  //位于哪一行
        this.col = 0,  //位于哪一列
        this.node.setScale(0.4);
        
    },

    setLocation (row,col,vec) {
        this.row = row;
        this.col = col;
        this.node.setPosition(vec);
    },

    //设置水果纹理
    setTexture(mark) {
        this.mark = mark;
        var self = this.node;
        cc.loader.loadRes("fruit "+this.mark,cc.SpriteFrame,function(err,spriteFrame){
            if(err){
                cc.error(err.message || err);
                return;
            }      
            self.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        })
    },
    
    
    // update (dt) {},
});
