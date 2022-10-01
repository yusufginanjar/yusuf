<template>
    <Transition name="fade" appear>
            <div class="flex justify-center">
                <div class="w-full relative max-w-sm bg-color4 rounded-lg border border-gray-200 pt-8 shadow-md dark:bg-gray-800 dark:border-gray-700 md:w-80">
                    <img src="assets/images/Rectangle.svg" class="absolute w-full top-0" alt="">
                    <div class="relative flex">
                        <div class="mt-2 ml-6">
                            <h1 class="mb-1 mt-3 text-2xl font-extra-bold text-gray-200 dark:text-white">About</h1>
                        </div>
                        <div class="rounded-full bg-white w-32 h-32 p-1 shadow-md absolute right-4">
                            <img class="mb-3 w-full rounded-full shadow-lg " src="assets/images/profil.png" alt="Yusuf image">
                        </div>
                    </div>
                    <div class="relative pb-10 mt-16 px-6">
                        <p class="text-color2 mb-[-4px]">I'm a</p>
                        <h1 class="text-2xl font-semibold text-color3">Web Developer</h1>
                        <hr class="my-2">
                        <h2 class="text-2xl font-semibold text-red">Experience</h2>
                        <ul class="list-disc ml-5 text-gray-700">
                            <li class="mt-1">
                                Front-end developer at www.kampusjualan.com (May 22 - Present)
                            </li>
                            <li class="mt-1">
                                Firmware Designer at EPSON Printer (Jul 17 - Sept 21)
                            </li>
                        </ul>
                        <h2 class="text-2xl font-semibold text-red mt-4">Education</h2>
                        <ul class="list-disc ml-5 text-gray-700">
                            <li class="mt-1">
                                Bachelor of Engineering, Engineering Physics (2017). Universitas Gadjah Mada, Indonesia
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Transition>
</template>