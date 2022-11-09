<template>
    <Transition name="fade" appear>
            <div class="flex justify-center">
                <div class="w-full relative max-w-sm bg-color4 rounded-lg border border-gray-200 pt-14 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-80">
                    <img :src="rectangle" class="absolute w-full top-0" alt="">
                    <div class="flex flex-col relative items-center pb-10 ">
                        <div class="rounded-full bg-white w-32 h-32 p-1 shadow-md">
                            <img class="mb-3 w-full rounded-full shadow-lg" :src="profile" alt="Bonnie image">
                        </div>
                        <transition name="fade-1" appear>
                            <h5 class="mb-1 mt-3 text-2xl font-extra-bold text-red dark:text-white">I'm Yusuf Ginanjar</h5>
                        </transition>
                        <transition name="fade-2" appear>
                            <div class="flex flex-col relative items-center">
                                <p class="text-xl font-semibold text-gray-700 dark:text-gray-400">Front-end Developer</p>
                                <hr class="w-1/2 mt-3 mb-5 border-1 border-gray-300 cursor-pointer hover:border-red-500 duration-500">
                                <p class="text-center text-sm text-gray-500 w-4/5 dark:text-gray-400">Full time front-end developer at kampusjualan, and website developer freelancer.</p>
                            </div>
                            </transition>
                        <transition name="fade-3" appear>
                            <div class="flex mt-4 md:mt-6 w-full px-4">
                                <a href="https://wa.me/6285643773721" class="w-full items-center py-2 px-4 text-sm font-medium text-center text-white bg-color1 rounded-lg hover:bg-color2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get In Touch</a>
                            </div>
                        </transition>
                        <transition name="fade-4" appear>
                        <div class="flex mt-5 space-x-3 md:mt-6">
                            <a href="https://github.com/yusufginanjar" class="items-center">
                                <img :src="github"  width="30" alt="">
                            </a>        
                            <a href="https://www.linkedin.com/in/yusuf-ginanjar/" class="items-center">
                                <img :src="linkedin" width="30" alt="">
                            </a>        
                            <a href="https://www.instagram.com/yusufginanjarputra/" class="items-center">
                                <img :src="instagram"  width="30" alt="">
                            </a>        
                            <a href="https://wa.me/6285643773721" class="items-center">
                                <img :src="whatsapp"  width="30" alt="">
                            </a>        
                        </div> 
                    </transition> 
                    </div>
                </div>
            </div>
        </Transition>
</template>

<script>
    import rectangle from './../../assets/images/Rectangle.svg'
    import profile from '../../assets/images/profil.png'
    import github from '../../assets/images/square-github-brands 1.svg'
    import linkedin from '../../assets/images/linkedin-brands 1.svg'   
    import instagram from '../../assets/images/square-instagram-brands 1.svg'
    import whatsapp from '../../assets/images/square-whatsapp-brands 1.svg'
 

    export default {
        data: function () {
            return {
                rectangle: rectangle,
                profile: profile,
                github: github,
                linkedin: linkedin,
                instagram: instagram,
                whatsapp: whatsapp
            }
        }
    }
</script>

<style scoped>
    .fade-1-enter-active,
    .fade-1-leave-active {
        transition: opacity 0.7s ease;
    }
    .fade-2-enter-active,
    .fade-2-leave-active {
        transition: opacity 1.2s ease;
    }
    .fade-3-enter-active,
    .fade-3-leave-active {
        transition: opacity 2.5s ease;
    }
    .fade-4-enter-active,
    .fade-4-leave-active {
        transition: opacity 3s ease;
    }
    

    .fade-1-enter-from,
    .fade-1-leave-to,
    .fade-2-enter-from,
    .fade-2-leave-to,
    .fade-3-enter-from,
    .fade-3-leave-to,
    .fade-4-enter-from,
    .fade-4-leave-to    
    {
        opacity: 0;
    }
</style>
