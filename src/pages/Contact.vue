<template>
    <Transition name="fade" appear>
            <div class="flex justify-center">
                <div class="w-full relative max-w-sm bg-color4 rounded-lg border border-gray-200 pt-14 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-80">
                    <img :src="rectangle" class="absolute w-full top-0" alt="">
                    <div class="flex flex-col relative items-center pb-10 ">
                        <div class="rounded-full bg-white w-32 h-32 p-1 shadow-md">
                            <img class="mb-3 w-full rounded-full shadow-lg" :src="profile" alt="Bonnie image">
                        </div>
                            <form>
                                <div class="mb-4 w-54 lg:w-64">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required="">
                                </div>
                                <div class="mb-6">
                                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Message</label>
                                <textarea type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></textarea>
                                </div>
        
                                <button type="submit" class="text-white bg-color1 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
  
                        <div class="text-center mt-4 md:mt-6 w-full px-4">
                            Or
                        </div>
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
                    </div>
                </div>
            </div>
        </Transition>
</template>

<script>
    import rectangle from '../../assets/images/Rectangle.svg'
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