<template>
    <Transition name="fade" appear>
            <div class="flex justify-center">
                <div class="w-full relative max-w-sm bg-color4 rounded-lg border border-gray-200 pt-8 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-80">
                    <img :src="rectangle" class="absolute w-full top-0" alt="">
                    <div class="relative flex">
                        <div class="mt-2 ml-6">
                            <h1 class="mb-1 mt-3 text-2xl font-extra-bold text-gray-200 dark:text-white">Portfolio</h1>
                        </div>
                        <div class="rounded-full bg-white w-32 h-32 p-1 shadow-md absolute right-4">
                            <img class="mb-3 w-full rounded-full shadow-lg " :src="profile" alt="Yusuf image">
                        </div>
                    </div>
                    <div class="relative pb-10 mt-24 px-6">
                        <h2 class="text-xl font-semibold text-red">Design</h2>
                        <div class="grid grid-cols-3">
                            <div class="w-full p-1">
                                <div class="bg-white rounded shadow-md h-20 overflow-hidden">
                                    <a href="https://pin.it/37mIgZw" target="_blank" rel="noopener noreferrer">    
                                        <img class="mb-3 w-full shadow-lg " :src="_1" alt="Yusuf image">
                                    </a>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="bg-white rounded shadow-md h-20">
                                    <a href="https://pin.it/6FDOzn0" target="_blank" rel="noopener noreferrer">
                                        <img class="mb-3 w-full shadow-lg " :src="_2" alt="Yusuf image">
                                    </a>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="bg-white rounded shadow-md h-20">
                                    <a href="https://pin.it/7zMOW8t" target="_blank" rel="noopener noreferrer">
                                        <img class="mb-3 w-full shadow-lg " :src="_3" alt="Yusuf image">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2 class="text-xl font-semibold text-red mt-4">Website</h2>
                        <div class="grid grid-cols-3">
                            <div class="w-full p-1">
                                <div class="bg-white rounded shadow-md h-20">
                                    <a href="http://yusufginanjar.com/freshfoodbandung" target="_blank" rel="noopener noreferrer">
                                        <img class="mb-3 w-full shadow-lg " :src="_4" alt="Fresh food bandung">
                                    </a>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="bg-white rounded shadow-md h-20">
                                    <a href="http://kampusjualan.com" target="_blank" rel="noopener noreferrer">
                                        <img class="mb-3 w-full shadow-lg " :src="kampusjualan" alt="Kampus Jualan">
                                    </a>
                                </div>
                            </div>
  
                        </div>
                    </div>
                </div>
            </div>   
        </Transition>
</template>


<script>
    import rectangle from '../../assets/images/Rectangle.svg'
    import profile from '../../assets/images/profil.png'

    import _1 from '../../assets/images/1.jpg'
    import _2 from '../../assets/images/2.jpg'
    import _3 from '../../assets/images/3.jpg'
    import _4 from '../../assets/images/4.jpg'
    import kampusjualan from '../../assets/images/kampusjualan.jpg'


    export default {
        name: 'About',
        components: {
            rectangle
        },
        data() {
            return {
                rectangle,
                profile,
                _1,
                _2,
                _3,
                _4,
                kampusjualan
            }
        }
    }
</script>