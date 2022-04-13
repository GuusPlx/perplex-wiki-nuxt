<template>
  <header class="h-20 bg-dark text-white lg:h-[120px]">
    <div class="container mx-auto flex h-full justify-between gap-x-6 py-3 px-5 sm:gap-x-20 sm:px-8 md:px-10">
      <NuxtLink to="/" class="h-full w-full max-w-[100px] shrink-0 grow basis-auto md:max-w-[160px]"
        ><img src="/images/logo-perplex--white.svg" class="h-full w-full"
      /></NuxtLink>
      <nav class="flex items-center overflow-auto">
        <ul class="flex items-center gap-x-3 sm:gap-x-8 md:gap-x-14">
          <li>
            <NuxtLink to="/" class="text-white hover:text-pink">Page</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-white hover:text-pink">Page</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="text-white hover:text-pink">Page</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
