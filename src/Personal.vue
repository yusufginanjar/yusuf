

<template>
    <main>
    <div class="w-full min-h-screen px-2 py-12 bg-[url('assets/images/bg2.jpg')] bg-cover">
        <div class="w-full flex justify-center">
            <div class="max-w-md relative">
                <router-view/>
                <Navbar/>
            </div>
        </div>  
    </div>
    </main>
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
        components: {
            Navbar,
        },
    }
</script>


    
<style scoped>
</style>
    