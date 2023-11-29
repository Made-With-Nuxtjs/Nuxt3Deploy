<template>
    <div>
        Server API: Login
        <br>
        <nuxt-link to="/apiparty">Api Party</nuxt-link>
        <br>
        <nuxt-link to="/serverapi_dollar">Server API Dollar</nuxt-link>
        <br>
        <nuxt-link to="/">Index</nuxt-link>
        <br>
        <nuxt-link to="/apiparty_useFetch">Api Party Use Fetch</nuxt-link>
    </div>
    <div>
        <br>
        username:
        <input v-model="username" type="text">
        <br>
        <br>
        password:
        <input v-model="passCode" type="password">
        <br>
        <br>
        <button @click="handleLogin">Login</button>
        <br>
        <br>
        {{ loginError }}
        {{ usernameError }}
        {{ passCodeError }}
    </div>
</template>
<script setup>
const config = useRuntimeConfig();
const username = ref('');
const passCode = ref('');

const usernameError = ref('');
const passCodeError = ref('');
const loginError = ref('');
// Function to handle login
const handleLogin = async () => {
    const { data: response } = await useFetch('/api/login', {
        method: 'POST',
        body: {
            company_code: config.public.apiCompanyCode,
            username: username.value,
            password: passCode.value,
        },
    });
    let status = response.value.status
    let message = response.value.message
    let data = response.value.data
    if (status === 200) {
        localStorage.removeItem('auth_customer_data');
        localStorage.setItem('auth_customer_data', JSON.stringify(data));
        navigateTo("/login_successful");
    } else {
        usernameError.value = message.username || '';
        passCodeError.value = message.password || '';
        loginError.value = message.error || '';
    }

};
</script>