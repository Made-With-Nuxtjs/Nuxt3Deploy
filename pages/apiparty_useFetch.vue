<template>
	<div>
		API Party:
		<br>
		<nuxt-link to="/serverapi">Server API</nuxt-link>
		<br>
		<nuxt-link to="/serverapi_dollar">Server API Dollar</nuxt-link>
		<br>
		<nuxt-link to="/">Index</nuxt-link>
	</div>
	<div>
		<div v-for="invoice in result" :key="purchase">
			<ul>
				<li>
					{{ invoice.dealer_invoice_id }}
					{{ invoice.dealer_invoice_date }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>

const { data } = await useApiCallData('order-invoice-list', {
	method: 'POST',
	body: {
		"company_code": "d05049134c17ed5289ff4e810c2618e4",
		"limit": "10",
		"start": "20",
		"acc_customer_ledger_id": "50"
	},
});

console.log(data.value);
const result = data.value.data

</script>