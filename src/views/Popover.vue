<template>
  <div class="sitecore">
    <div class="term-container">
      <div class="scorll-container" ref="termRef">
        <div class="sitecore-container">
          <div v-html="htmlData"></div>
        </div>
        <div class="temp"></div>
      </div>
      <div>
        <button @click="scrollToBottom">網下滾</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'

const htmlData = "<div><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p><p>對此，潘瑋柏本人也趁演唱會秒殺時，發文表示：「感謝大家對潘瑋”厚” 的厚愛，六秒售完！感謝你們最厚實的支持！我渾厚的說聲感恩！ ！ &ZeroWidthSpace;」幽默自己一番。</p></div>"
const termRef = ref(null) as Ref;

const scrollToBottom = () => {
  const lastElement = termRef.value.lastElementChild;
  lastElement.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  })
}
</script>

<style type="scss">
.term-container {
  margin: 100px;
  width: 50%;
  height: 300px;
  border: 3px solid red;
}

.scorll-container {
  overflow-y: auto;
  height: 300px;
}
</style>
