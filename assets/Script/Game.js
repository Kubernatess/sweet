/**
 * 游戏主逻辑
 * 
 * 如何生成水果 (Prefab)
 * 如何生成地图
 * 如何触摸水果
 * 如何找到水果块 (相邻水果块是否颜色相同)
 * 如何消除水果
 * 如何下移水果
 * 如何补充水果
 */
cc.Class({
    extends: cc.Component,

    properties: {
        fruitPrefab: {
            default: null,
            type: cc.Prefab
        },
    },
    
    onLoad () {
        for(let i=0;i<8;i++){
            for(let j=0;j<7;j++){
                this.spawnNewFruit(i,j);
            }
        }
    },

    spawnNewFruit(row , col) {
        var fruit = cc.instantiate(this.fruitPrefab);
        var mark = this.randomNum(1,16);
        fruit.getComponent("Fruit").setTexture(mark);
        fruit.getComponent("Fruit").setLocation(row,col,cc.v2(-this.node.width/2.5+row*fruit.width*0.4,this.node.height/3.5-col*fruit.height*0.4));
        this.node.addChild(fruit);
    },

    //在两数之间随机整数(包括这两个数)
    randomNum(min , max) {
        var range = max - min;
        var rand = Math.random();
        var num = min + Math.round(rand*range);
        return num;
    },

    // update (dt) {},
});