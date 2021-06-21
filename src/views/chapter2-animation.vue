<template>
  <div class="container">
    <div class="btn-container">
      <el-button @click="onAnimate">动画</el-button>
      <el-radio-group v-model="easing" @change="onEasingChange" class="radio">
        <el-radio v-for="(item, index) in easingList" :key="index" :label="item">{{item}}</el-radio>
      </el-radio-group>
    </div>
    <canvas class="canvas" id="canvas" width="600" height="400"></canvas>
  </div>
</template>

<script>
import { fabric } from "fabric";

export default {
  components: {},
  props: {},
  watch: {},
  data() {
    return {
      obj: "",
      canvas: "",
      easing: "easeOutBounce",
      easingDict: {
        easeInCubic: fabric.util.ease.easeInCubic,
        easeOutCubic: fabric.util.ease.easeOutCubic,
        easeInElastic: fabric.util.ease.easeInElastic,
        easeOutElastic: fabric.util.ease.easeOutElastic,
        easeInBounce: fabric.util.ease.easeInBounce,
        easeOutBounce: fabric.util.ease.easeOutBounce,
        easeOutExpo: fabric.util.ease.easeOutExpo,
      }
    };
  },
  computed: {
    easingList(){
      return Object.keys(this.easingDict)
    }
  },
  created() {},
  methods: {
    onEasingChange() {
      this.onAnimate();
    },
    onAnimate() {
      this.obj.animate("angle", "+=90", {
        onChange: this.canvas.renderAll.bind(this.canvas),
        easing: this.easingDict[this.easing],
      });
    },
    initCanvas() {
      var canvas = new fabric.Canvas("canvas", {
        backgroundColor: "rgb(100,100,200)",
      });
      var rect = new fabric.Rect({
        top: 100,
        left: 100,
        width: 60,
        height: 70,
        fill: "red",
      });
      canvas.add(rect);
      this.obj = rect;
      this.canvas = canvas;
    },
  },
  mounted() {
    this.initCanvas();
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
}
.canvas {
  margin-left: 20px;
}
.btn-container {
  display: flex;
  /deep/ .el-radio {
    display: block;
    line-height: 33px;
    white-space: normal;
    margin-right: 0;
  }
  .radio {
    margin-left: 20px;
  }
}
</style>