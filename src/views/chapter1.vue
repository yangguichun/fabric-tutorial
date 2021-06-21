<template>
  <div class="home">
    <el-button @click="onDraw">绘制</el-button>
    <el-button @click="onFlip">flip</el-button>
    <el-button @click="onScrex">screw</el-button>
    <canvas id="canvas" width="800" height="400"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { fabric } from "fabric";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      obj: '',
      canvas: '',
      screwX: 0,
    }
  },
  methods: {
    onDraw() {
      this.initCanvas();
    },
    onFlip(){
      if(this.obj){
        this.obj.set("angle", 15)
        this.obj.set("flipX", true);
        this.obj.set("flipY", true);
        this.canvas.renderAll()
      }
    },
    onScrex(){
      if(this.obj){
        this.screwX += 10
        this.obj.set('skewX', this.screwX)
        this.canvas.renderAll()

      }
    },
    initCanvas() {
      var canvas = new fabric.Canvas("canvas", { backgroundColor: "rgb(100,100,200)" });
      var rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
      });
        // fill: "red",
      canvas.add(rect);
      rect.set("fill", "red");
      rect.set({ strokeWidth: 15, stroke: "rgba(0,255,0,1)" });
      
      var triangle = new fabric.Triangle({
  width: 20, height: 30, fill: 'blue', left: 50, top: 50
});
      canvas.add(triangle);
      this.obj = triangle //rect
      this.canvas = canvas
    },
  },
};
</script>
