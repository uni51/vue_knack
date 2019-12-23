var product = {
  template: `
  <div class="item">
    <figure class="image">
      <!-- ▼ セール対象の場合 ▼ -->
      <template v-if="product.isSale">
        <div class="status">SALE</div>
      </template>
      <!-- ▲ セール対象の場合 ▲ -->
      <img v-bind:src="product.image" alt="">
      <figcaption v-html="product.name"></figcaption>
    </figure>
    <div class="detail">
      <div class="price"><span>{{ product.price | number_format }}</span>円（税込）</div>
        <!-- ▼ 送料無料の場合 ▼ -->
        <template v-if="product.delv == 0">
          <div class="shipping-fee none">送料無料</div>
        </template>
        <!-- ▲ 送料無料の場合 ▲ -->
        <!-- ▼ 送料ありの場合 ▼ -->
        <template v-else>
          <div class="shipping-fee">+送料{{ product.delv | number_format }}円</div>
        </template>  
        <!-- ▲ 送料ありの場合 ▲ -->
      </div>
      <!-- // end of .detail -->
    </div>
    <!-- // end of .item -->`,
  props: ['product']
}