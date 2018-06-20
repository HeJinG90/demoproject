<template>
  <div id="app">
    
    <router-view > </router-view>
    <!-- <router-view name="a"> </router-view> -->
  </div>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style>
#app{
  font-size: 0.2rem;
  margin-top: 0.2rem;
}
body{
      background-color: #efeff4;
}
.mui-backdrop {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
}
button {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    padding: 6px 12px;
    cursor: pointer;
    -webkit-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    transition-duration: .2s;
    text-align: center;
    vertical-align: top;
    white-space: nowrap;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: #fff;
    background-clip: padding-box;
}
textarea {
    height: 1rem;
    resize: none;
    line-height: 21px;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px 15px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    font-size: 0.2rem;
    margin: 0;
    color: inherit;
    overflow: auto;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
}

</style>
