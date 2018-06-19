<template>
    <div class="default-layout">
        <!--header-->
        <header-layout class="header"></header-layout>
        <!--End header-->
        
        <!--main-->
        <main class="main-content">
            <div class="container-fluid">
                <slot name="content"></slot>
            </div> 
        </main>
        <!--End main-->

        <!--footer-->
        <footer-layout></footer-layout>
        <!--End footer-->
    </div>
</template>



<script>
import HeaderLayout from '@/partials/Header'
import FooterLayout from '@/partials/Footer'

export default {
    name: 'DefaultLayout',
    components: {
        HeaderLayout,
        FooterLayout
    }
}
</script>
