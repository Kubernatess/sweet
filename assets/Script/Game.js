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
        holder: {
            default: null,
            type: cc.Node
        },
    },
    
    onLoad () {
        /*for(let i=0;i<8;i++){
            for(let j=0;j<7;j++){
                this.spawnNewFruit(i,j);
            }
        }*/
        for(let i=0;i<56;i++){
            this.spawnNewFruit(i);
        }
    },

    /*spawnNewFruit(row , col) {
        var fruit = cc.instantiate(this.fruitPrefab);
		//随机生成1——16的整数
        var tag = Math.floor(Math.random()*16)+1;
        fruit.getComponent("Fruit").setTexture(tag);
        fruit.getComponent("Fruit").setLocation(row,col,cc.v2(-this.node.width/2.5+row*fruit.width*0.4,this.node.height/3.5-col*fruit.height*0.4));
        this.node.addChild(fruit);
    },*/

    spawnNewFruit(numeral) {
        var fruit = cc.instantiate(this.fruitPrefab);
		//随机生成1——16的整数
        var tag = Math.floor(Math.random()*16)+1;
        fruit.getComponent("Fruit").setTexture(tag);
        fruit.getComponent("Fruit").setLocation(numeral);
        this.holder.addChild(fruit);
    },

    // update (dt) {},
});