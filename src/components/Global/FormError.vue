<template>
    <v-alert v-if="error" :show="error.errors.length > 0" variant="danger">
        <!-- <h4 class="alert-heading">{{ error.message }}</h4> -->
        <ul class="mb-0">
            <li v-for="(e, i) in error.errors" :key="i">{{ e }}</li>
        </ul>
    </v-alert>
</template>

<script>
export default {
    props: ['error']
}
</script>

<style>

</style>