export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const body = await readBody(event);

	const result = await $fetch(config.public.api_url + "purchase-order-list", {
		method: "POST",
		body: body,
	});

	return result;
});
