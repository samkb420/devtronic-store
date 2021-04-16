<template>
   <div class="order-history-wrap emb-card pa-4">
      <h4 class="mb-4">Order History</h4>
      <v-data-table 
         :headers="headers"
			:items="tableData"
			hide-default-footer
      >
         <template v-slot:item.action="{ item }">
				<a href="javascript:void(0)"><v-icon class="accent--text">remove_red_eye</v-icon></a>
			</template>
      </v-data-table>
   </div>
</template>

<script>
export default {
   data(){
      return{
         headers: [
            {
            text: 'No',
            align: 'left',
            sortable: false,
            value: 'srno'
            },
            { text: 'Order Id', value: 'orderId' },
            { text: 'Date', value: 'date' },
            { text: 'Product Name', value: 'name' },
            { text: 'Price', value: 'price' },
            { text: 'Quantity', value: 'quantity' },
         ],
         tableData: []
      }
   }   
}
</script>

