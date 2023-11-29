<template>
	<div>
		Server API Dollar: 
		<br>
		<nuxt-link to="/apiparty">Api Party</nuxt-link>
		<br>
		<nuxt-link to="/serverapi">Server API</nuxt-link>
		<br>
		<nuxt-link to="/">Index</nuxt-link>
		<br>
		<nuxt-link to="/apiparty_useFetch">Api Party Use Fetch</nuxt-link>
	</div>
	<div>
		<div v-for="purchase in result" :key="purchase">
			<ul>
				<li>
					{{ purchase.invoice_id }}
					{{ purchase.invoice_date }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>

const { data } = await $fetch('/api/purchase-order-list', {
	method: 'POST',
	body: {
		"company_code": "d05049134c17ed5289ff4e810c2618e4",
		"limit": "10",
		"start": "0",
		"acc_customer_ledger_id": "50"
	},
});
const result = data

</script>