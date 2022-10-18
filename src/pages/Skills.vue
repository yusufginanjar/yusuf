<template>
    <Transition name="fade" appear>
            <div class="flex justify-center">
                <div class="w-full relative max-w-sm bg-color4 rounded-lg border border-gray-200 pt-8 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-80">
                    <img :src="rectangle" class="absolute w-full top-0" alt="">
                    <div class="relative flex">
                        <div class="mt-2 ml-6">
                            <h1 class="mb-1 mt-3 text-2xl font-extra-bold text-gray-200 dark:text-white">Skills</h1>
                        </div>
                        <div class="rounded-full bg-white w-32 h-32 p-1 shadow-md absolute right-4">
                            <img class="mb-3 w-full rounded-full shadow-lg " :src="profile" alt="Yusuf image">
                        </div>
                    </div>
                    <div class="relative pb-10 mt-24 px-6">
                        <h2 class="text-2xl font-semibold text-red">@kampusjualan</h2>
                        <ul class="list-disc ml-5 text-gray-700">
                            <li class="mt-1">
                                HTML, CSS, JS
                            </li>
                            <li class="mt-1">
                                LARAVEL, Blade
                            </li>
                            <li class="mt-1">
                                Git/GitHub
                            </li>
                        </ul>
                        <h2 class="text-2xl font-semibold text-red mt-4">Other Projects</h2>
                        <ul class="list-disc ml-5 text-gray-700">
                            <li class="mt-1">
                                UI Design (Figma)
                            </li>
                            <li class="mt-1">
                                React JS
                            </li>
                            <li class="mt-1">
                                Node Js
                            </li>
                            <li class="mt-1">
                                Firebase
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
</template>


<script>
    import rectangle from '../../assets/images/Rectangle.svg'

    export default {
        name: 'About',
        components: {
            rectangle
        },
        data() {
            return {
                rectangle,
                profile
            }
        }
    }
</script>
