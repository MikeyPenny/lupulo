<template>
    <default-layout>
        <section slot="content">
            <form>
                <div class="form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" class="form-control" id="name" v-model="name" 
                    placeholder="Ingresa tu nombre:">
                    
                </div>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" class="form-control" id="email" 
                    v-model="email" aria-describedby="emailHelp" placeholder="Ingresa tu correo:">
                    <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu información.</small>
                </div>
                <div class="form-group">
                    <label for="title">Título:</label>
                    <input type="text" class="form-control" id="name" v-model="title" placeholder="Título:">
                    
                </div>
                <div class="form-group">
                    <label for="message">Deja tu mensaje:</label>
                    <textarea class="form-control" id="message" v-model="message" rows="3"></textarea>
                </div>
                <button type="submit" @click="submitMessage()" class="btn btn-primary">Enviar</button>
            </form>
        </section>
    </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import { msgRef } from '@/firebase.js'

export default {
    name: 'ContactView',
    components: {
        DefaultLayout
    },
    data() {
        return {
            name: '',
            email: '',
            title: '',
            message: ''
        }
    },
    
    methods: {
        submitMessage() {
            msgRef.push({
                name: this.name,
                email: this.email,
                title: this.title,
                message: this.message,
                edit: false
            })
            this.name = ''
            this.email = ''
            this.title = ''
            this.message = ''
        }
    }
}
</script>

